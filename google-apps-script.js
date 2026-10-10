/**
 * STAFF CLICKS - GOOGLE APPS SCRIPT FOR RECORDING ENQUIRIES
 * 
 * ============================================================================
 * QUICK SETUP INSTRUCTIONS (Takes ~1 minute):
 * ============================================================================
 * 1. Open your Google Sheet in your browser:
 *    https://docs.google.com/spreadsheets/d/13PQUXE7dz-5dVPiys3CB8gsZ0moJImz-osGgCkNJf7Y/edit
 * 
 * 2. In the top menu, go to:
 *    Extensions > Apps Script
 * 
 * 3. Delete any default code inside the editor, paste this entire file, and save (Ctrl + S).
 * 
 * 4. In the top right corner, click:
 *    "Deploy" > "New deployment"
 * 
 * 5. Under "Select type" (gear icon on the left), select:
 *    "Web app"
 * 
 * 6. Configure deployment fields:
 *    - Description: Staff Clicks Enquiry Webhook
 *    - Execute as: Me (your Google account)
 *    - Who has access: Anyone  <-- (CRITICAL: Allows website visitors to submit enquiries)
 * 
 * 7. Click "Deploy".
 *    - When prompted to authorize access, click "Authorize access", choose your Google account,
 *      click "Advanced", and click "Go to Untitled project (unsafe)".
 * 
 * 8. Copy the generated "Web app URL" (starts with https://script.google.com/macros/s/...)
 * 
 * 9. Paste this URL into your website's `.env` file:
 *    VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
 * 
 * That's it! All submissions will automatically create organized tabs in your sheet:
 * - "Contact Inquiries"
 * - "Meeting Bookings"
 * - "Career Applications"
 * ============================================================================
 */

function doPost(e) {
  try {
    let data;
    if (e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    } else if (e.parameter) {
      data = e.parameter;
    } else {
      return ContentService.createTextOutput(JSON.stringify({ status: "error", message: "No data received" }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const timestamp = Utilities.formatDate(new Date(), Session.getScriptTimeZone() || "UTC", "yyyy-MM-dd HH:mm:ss");
    const formType = data.formType || "General Enquiry";

    if (formType === "Contact / Consultation") {
      const sheet = getOrCreateSheet(ss, "Contact Inquiries", [
        "Timestamp",
        "Full Name",
        "Business Email",
        "Phone Number",
        "Company Name",
        "Country",
        "Service Interested In",
        "Message"
      ]);
      sheet.appendRow([
        timestamp,
        data.fullName || "",
        data.businessEmail || "",
        data.phoneNumber || "",
        data.companyName || "",
        data.country || "",
        data.serviceInterestedIn || "",
        data.message || ""
      ]);
    } else if (formType === "Meeting Booking") {
      const sheet = getOrCreateSheet(ss, "Meeting Bookings", [
        "Timestamp",
        "Full Name",
        "Work Email",
        "Phone Number",
        "Company Name",
        "Service Needed",
        "Session Format",
        "Duration",
        "Date",
        "Time Slot",
        "Timezone"
      ]);
      sheet.appendRow([
        timestamp,
        data.fullName || "",
        data.email || "",
        data.phone || "",
        data.companyName || "",
        data.serviceNeeded || "",
        data.sessionTitle || "",
        data.duration || "",
        data.date || "",
        data.timeSlot || "",
        data.timezone || ""
      ]);
    } else if (formType === "Career Application") {
      const sheet = getOrCreateSheet(ss, "Career Applications", [
        "Timestamp",
        "Full Name",
        "Email",
        "Phone",
        "Domain of Interest",
        "Experience",
        "LinkedIn / Portfolio",
        "Skills & Notes"
      ]);
      sheet.appendRow([
        timestamp,
        data.fullName || "",
        data.email || "",
        data.phone || "",
        data.roleInterest || "",
        data.experienceYears || "",
        data.linkedIn || "",
        data.notes || ""
      ]);
    } else {
      const sheet = getOrCreateSheet(ss, "Other Inquiries", [
        "Timestamp",
        "Form Type",
        "Raw Data"
      ]);
      sheet.appendRow([
        timestamp,
        formType,
        JSON.stringify(data)
      ]);
    }

    return ContentService.createTextOutput(JSON.stringify({ status: "success", result: "Row recorded successfully" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({ status: "ok", message: "Staff Clicks Sheets Webhook is active and listening" }))
    .setMimeType(ContentService.MimeType.JSON);
}

function getOrCreateSheet(ss, sheetName, headers) {
  let sheet = ss.getSheetByName(sheetName);
  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
    sheet.appendRow(headers);
    const headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setFontWeight("bold");
    headerRange.setBackground("#093965");
    headerRange.setFontColor("#FFFFFF");
    sheet.setFrozenRows(1);
    
    // Auto-fit initial column widths
    for (let i = 1; i <= headers.length; i++) {
      sheet.setColumnWidth(i, 170);
    }
  }
  return sheet;
}
