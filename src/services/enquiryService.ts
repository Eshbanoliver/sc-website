/**
 * Staff Clicks - Enquiry Service
 * 
 * Submits inquiries directly to Google Sheets via a Google Apps Script Web App.
 * 
 * SECURITY & PRIVACY:
 * - The Google Sheet URL is NEVER exposed in the frontend client code.
 * - Requests are dispatched to the Web App URL configured via VITE_GOOGLE_SCRIPT_URL.
 * - No WhatsApp redirection or transmission occurs during testing.
 */

export interface ContactEnquiryPayload {
  formType: "Contact / Consultation";
  fullName: string;
  businessEmail: string;
  phoneNumber: string;
  companyName: string;
  country: string;
  serviceInterestedIn: string;
  message: string;
}

export interface BookingEnquiryPayload {
  formType: "Meeting Booking";
  fullName: string;
  email?: string;
  phone?: string;
  companyName?: string;
  serviceNeeded: string;
  sessionTitle: string;
  duration: string;
  date: string;
  timeSlot: string;
  timezone: string;
}

export interface CareerEnquiryPayload {
  formType: "Career Application";
  fullName: string;
  email: string;
  phone: string;
  roleInterest: string;
  experienceYears: string;
  linkedIn?: string;
  notes?: string;
}

export type EnquiryPayload =
  | ContactEnquiryPayload
  | BookingEnquiryPayload
  | CareerEnquiryPayload;

export async function submitEnquiryToSheet(payload: EnquiryPayload): Promise<{ success: boolean; simulated?: boolean }> {
  const scriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL?.trim();

  // If no script URL is configured yet in .env, simulate submission for frontend testing
  if (!scriptUrl) {
    console.info(
      "%c[Staff Clicks] VITE_GOOGLE_SCRIPT_URL is not configured yet. Form submitted in simulation mode:",
      "color: #2E8D9F; font-weight: bold;",
      payload
    );
    // Simulate brief network delay
    await new Promise((resolve) => setTimeout(resolve, 800));
    return { success: true, simulated: true };
  }

  try {
    // We send payload as plain text with mode: "no-cors" so browsers bypass CORS preflight restrictions
    // on Google Apps Script endpoints while Google Apps Script parses e.postData.contents.
    await fetch(scriptUrl, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify({
        ...payload,
        submittedAt: new Date().toISOString(),
      }),
    });

    return { success: true };
  } catch (error) {
    console.error("[Staff Clicks] Failed to send enquiry to Google Sheet:", error);
    throw error;
  }
}
