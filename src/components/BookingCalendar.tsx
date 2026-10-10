import React, { useState, useMemo } from "react";
import {
  Calendar as CalendarIcon,
  Clock,
  Video,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Globe2,
  PhoneCall,
  Loader2,
  AlertCircle
} from "lucide-react";
import { submitEnquiryToSheet } from "../services/enquiryService";

interface TimeSlot {
  time: string;
  period: "Morning" | "Afternoon" | "Evening";
  est: string;
}

const TIME_SLOTS: TimeSlot[] = [
  { time: "10:00 AM", period: "Morning", est: "12:30 AM" },
  { time: "11:30 AM", period: "Morning", est: "02:00 AM" },
  { time: "02:00 PM", period: "Afternoon", est: "04:30 AM" },
  { time: "03:30 PM", period: "Afternoon", est: "06:00 AM" },
  { time: "05:00 PM", period: "Evening", est: "07:30 AM" },
  { time: "06:30 PM", period: "Evening", est: "09:00 AM" },
  { time: "08:00 PM", period: "Evening", est: "10:30 AM" },
  { time: "09:30 PM", period: "Evening", est: "12:00 PM" }
];

const SESSION_TYPES = [
  {
    id: "discovery",
    title: "Introductory Discovery Call",
    duration: "15 min",
    desc: "Quick alignment on staffing needs & how Staff Clicks works"
  },
  {
    id: "consultation",
    title: "Operational Scope Consultation",
    duration: "30 min",
    desc: "In-depth review of tasks, workflows, SOPs & team sizing"
  },
  {
    id: "custom",
    title: "Custom Multi-Process Plan",
    duration: "45 min",
    desc: "Full outsourcing strategy across multiple departments"
  }
];

export default function BookingCalendar(): React.JSX.Element {
  const today = useMemo(() => new Date(), []);
  
  // Default to tomorrow
  const initialDate = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d;
  }, []);

  const [currentMonth, setCurrentMonth] = useState<Date>(
    new Date(today.getFullYear(), today.getMonth(), 1)
  );
  const [selectedDate, setSelectedDate] = useState<Date>(initialDate);
  const [selectedSlot, setSelectedSlot] = useState<string>("03:30 PM");
  const [selectedSession, setSelectedSession] = useState<string>("consultation");
  const [selectedTimezone, setSelectedTimezone] = useState<"EST" | "CST" | "PST" | "GMT" | "SGT" | "AEST" | "IST">("EST");
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [companyName, setCompanyName] = useState<string>("");
  const [serviceNeeded, setServiceNeeded] = useState<string>("Virtual Assistance & Admin");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string>("");

  // Calendar calculations
  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayIndex = new Date(year, month, 1).getDay(); // 0 is Sunday

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const handlePrevMonth = () => {
    const prev = new Date(year, month - 1, 1);
    // Don't go before current month
    if (prev.getFullYear() < today.getFullYear() || 
       (prev.getFullYear() === today.getFullYear() && prev.getMonth() < today.getMonth())) {
      return;
    }
    setCurrentMonth(prev);
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(year, month + 1, 1));
  };

  const isPrevDisabled = 
    year === today.getFullYear() && month <= today.getMonth();

  const isDateDisabled = (dayNumber: number) => {
    const dateToCheck = new Date(year, month, dayNumber);
    // Normalize time to compare only date portion
    const todayNormalized = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    return dateToCheck < todayNormalized;
  };

  const isDateSelected = (dayNumber: number) => {
    return (
      selectedDate.getFullYear() === year &&
      selectedDate.getMonth() === month &&
      selectedDate.getDate() === dayNumber
    );
  };

  const isToday = (dayNumber: number) => {
    return (
      today.getFullYear() === year &&
      today.getMonth() === month &&
      today.getDate() === dayNumber
    );
  };

  const handleSelectDay = (dayNumber: number) => {
    if (isDateDisabled(dayNumber)) return;
    setSelectedDate(new Date(year, month, dayNumber));
  };

  const activeSessionData = SESSION_TYPES.find(s => s.id === selectedSession) || SESSION_TYPES[1];

  // Format date nicely: "Wednesday, October 14, 2026"
  const formattedSelectedDate = selectedDate.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Form submission handler
  const handleBookMeeting = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    try {
      await submitEnquiryToSheet({
        formType: "Meeting Booking",
        fullName: fullName.trim() || "Prospective Client",
        email: email.trim(),
        phone: phone.trim(),
        companyName: companyName.trim(),
        serviceNeeded,
        sessionTitle: activeSessionData.title,
        duration: activeSessionData.duration,
        date: formattedSelectedDate,
        timeSlot: selectedSlot,
        timezone: selectedTimezone
      });
      setIsSubmitting(false);
      setIsSubmitted(true);
    } catch (err) {
      console.error("Booking submission failed:", err);
      setIsSubmitting(false);
      setSubmitError("Failed to submit meeting request. Please try again or email contact@staffclicks.com.");
    }
  };

  return (
    <div id="book-meeting" className="p-4 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 card-shadow-teal relative overflow-hidden">
      {/* Decorative ambient background blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none -z-0"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-0"></div>

      <div className="relative z-10">
        {/* Section Heading */}
        <div className="max-w-3xl mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-50 text-teal-800 border border-teal-200/80 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#2E8D9F]" />
            <span>Interactive Scheduling</span>
          </div>
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-[#093965] tracking-tight leading-tight">
            Book a One-on-One Discovery Call or Meeting
          </h2>
          <p className="mt-2 text-xs sm:text-base text-slate-600 leading-relaxed">
            Pick your preferred date and time slot from our operational calendar below to request a personalized discovery session.
          </p>
        </div>

        {/* Step 1: Session Type Selector */}
        <div className="mb-6 sm:mb-8">
          <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2 sm:mb-3">
            1. Select Session Format
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {SESSION_TYPES.map((type) => {
              const isSelected = selectedSession === type.id;
              return (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => setSelectedSession(type.id)}
                  className={`p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border text-left transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-gradient-to-br from-[#093965] to-[#0e4c84] text-white border-[#093965] shadow-md ring-2 ring-[#2E8D9F]/40"
                      : "bg-slate-50/80 hover:bg-slate-100 text-slate-700 border-slate-200"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className={`text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                      isSelected ? "bg-white/20 text-white" : "bg-teal-100 text-teal-800"
                    }`}>
                      {type.duration}
                    </span>
                    <Video className={`w-4 h-4 ${isSelected ? "text-[#FA7D3C]" : "text-slate-400"}`} />
                  </div>
                  <div className="font-extrabold text-sm sm:text-base mb-1">
                    {type.title}
                  </div>
                  <p className={`text-xs leading-relaxed ${isSelected ? "text-slate-200" : "text-slate-500"}`}>
                    {type.desc}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Scheduler Grid: Calendar (Left) + Time Slots & Details (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* CALENDAR COLUMN */}
          <div className="lg:col-span-6 p-3.5 sm:p-6 lg:p-7 rounded-xl sm:rounded-2xl bg-slate-50/70 border border-slate-200">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-slate-700 block">
                  2. Choose Date
                </span>
                <span className="text-lg font-black text-[#093965]">
                  {monthNames[month]} {year}
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={handlePrevMonth}
                  disabled={isPrevDisabled}
                  className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                    isPrevDisabled
                      ? "text-slate-300 bg-slate-100 cursor-not-allowed"
                      : "text-slate-700 bg-white hover:bg-slate-200 hover:text-[#093965] border border-slate-200 shadow-xs cursor-pointer"
                  }`}
                  aria-label="Previous month"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={handleNextMonth}
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-700 bg-white hover:bg-slate-200 hover:text-[#093965] border border-slate-200 shadow-xs transition-all cursor-pointer"
                  aria-label="Next month"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Days of week header */}
            <div className="grid grid-cols-7 gap-1 text-center text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              <span>Su</span>
              <span>Mo</span>
              <span>Tu</span>
              <span>We</span>
              <span>Th</span>
              <span>Fr</span>
              <span>Sa</span>
            </div>

            {/* Day Cells Grid */}
            <div className="grid grid-cols-7 gap-1.5">
              {/* Empty leading padding days */}
              {Array.from({ length: firstDayIndex }).map((_, i) => (
                <div key={`empty-${i}`} className="h-10 sm:h-11" />
              ))}

              {/* Month Days */}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const dayNum = i + 1;
                const disabled = isDateDisabled(dayNum);
                const selected = isDateSelected(dayNum);
                const current = isToday(dayNum);

                return (
                  <button
                    key={`day-${dayNum}`}
                    type="button"
                    disabled={disabled}
                    onClick={() => handleSelectDay(dayNum)}
                    className={`h-10 sm:h-11 rounded-xl text-xs sm:text-sm font-bold flex flex-col items-center justify-center relative transition-all duration-200 ${
                      disabled
                        ? "text-slate-300 cursor-not-allowed opacity-40"
                        : selected
                        ? "bg-[#2E8D9F] text-white shadow-md shadow-teal-500/30 scale-105 font-black ring-2 ring-teal-300/60"
                        : current
                        ? "bg-white text-[#FA7D3C] border-2 border-[#FA7D3C] font-extrabold hover:bg-orange-50 cursor-pointer"
                        : "bg-white text-slate-700 border border-slate-200/80 hover:bg-slate-100 hover:border-slate-300 cursor-pointer"
                    }`}
                  >
                    <span>{dayNum}</span>
                    {current && !selected && (
                      <span className="w-1 h-1 rounded-full bg-[#FA7D3C] absolute bottom-1"></span>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="mt-5 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2E8D9F]"></span>
                <span>Selected</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full border border-[#FA7D3C]"></span>
                <span>Today</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
                <span>Unavailable</span>
              </div>
            </div>
          </div>

          {/* TIME SLOTS & CONTACT DETAILS COLUMN */}
          <div className="lg:col-span-6 space-y-6">
            {/* Time Slot Picker */}
            <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-slate-50/70 border border-slate-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <label className="text-xs font-black uppercase tracking-wider text-slate-700">
                  3. Select Time Slot
                </label>

                {/* Timezone Switcher */}
                <div className="flex flex-wrap items-center gap-1 p-1 bg-white rounded-lg border border-slate-200 text-[11px] font-bold text-slate-600">
                  <Globe2 className="w-3 h-3 text-[#2E8D9F] ml-0.5" />
                  {(["EST", "CST", "PST", "GMT", "SGT", "AEST", "IST"] as const).map((tz) => (
                    <button
                      key={tz}
                      type="button"
                      onClick={() => setSelectedTimezone(tz)}
                      className={`px-1.5 py-0.5 rounded cursor-pointer transition-colors ${
                        selectedTimezone === tz ? "bg-[#093965] text-white" : "hover:text-[#093965]"
                      }`}
                    >
                      {tz}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5">
                {TIME_SLOTS.map((slot) => {
                  const isSelected = selectedSlot === slot.time;
                  return (
                    <button
                      key={slot.time}
                      type="button"
                      onClick={() => setSelectedSlot(slot.time)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all duration-200 flex flex-col items-center justify-center cursor-pointer ${
                        isSelected
                          ? "bg-[#093965] text-white shadow-sm ring-2 ring-[#FA7D3C]"
                          : "bg-white text-slate-700 border border-slate-200/90 hover:border-slate-300 hover:bg-slate-100"
                      }`}
                    >
                      <span className="flex items-center gap-1 font-extrabold">
                        <Clock className={`w-3 h-3 ${isSelected ? "text-[#FA7D3C]" : "text-slate-400"}`} />
                        {slot.time}
                      </span>
                      <span className={`text-[10px] mt-0.5 ${isSelected ? "text-slate-300" : "text-slate-400"}`}>
                        {slot.period}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Optional Quick Info */}
            {isSubmitted ? (
              <div className="p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-emerald-950">
                    Meeting Request Received!
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-800 mt-2 leading-relaxed max-w-md mx-auto">
                    Thank you{fullName ? `, ${fullName}` : ""}. We have scheduled your <strong>{activeSessionData.title}</strong> for <strong>{formattedSelectedDate}</strong> at <strong>{selectedSlot} ({selectedTimezone})</strong>. Our team will contact you with the meeting link.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="px-5 py-2.5 rounded-xl bg-white border border-emerald-300 text-emerald-900 font-bold text-xs hover:bg-emerald-100 transition-colors cursor-pointer shadow-sm"
                >
                  Schedule Another Slot
                </button>
              </div>
            ) : (
              <form onSubmit={handleBookMeeting} className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-slate-50/70 border border-slate-200 space-y-4">
                <label className="block text-xs font-black uppercase tracking-wider text-slate-700">
                  4. Your Details (Optional)
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Your Name (e.g. Sarah Smith)"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#2E8D9F] focus:ring-1 focus:ring-[#2E8D9F]"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="Company (Optional)"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#2E8D9F] focus:ring-1 focus:ring-[#2E8D9F]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Work Email (e.g. sarah@company.com)"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#2E8D9F] focus:ring-1 focus:ring-[#2E8D9F]"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Phone / WhatsApp (Optional)"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#2E8D9F] focus:ring-1 focus:ring-[#2E8D9F]"
                    />
                  </div>
                </div>

                <div>
                  <select
                    value={serviceNeeded}
                    onChange={(e) => setServiceNeeded(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-xs text-slate-800 focus:outline-none focus:border-[#2E8D9F] focus:ring-1 focus:ring-[#2E8D9F]"
                  >
                    <option value="Virtual Assistance & Admin">Virtual Assistance & Executive Admin</option>
                    <option value="Customer Support & Helpdesk">Customer Support & Helpdesk</option>
                    <option value="Cold Calling & Lead Gen">Cold Calling & Lead Generation</option>
                    <option value="Data Entry & CRM Support">Data Entry & CRM Operations</option>
                    <option value="Bookkeeping & Financial Support">Bookkeeping & Financial Administration</option>
                    <option value="Multi-Process Operations">Comprehensive Multi-Process Outsourcing</option>
                  </select>
                </div>

                {/* Live Booking Summary Card */}
                <div className="p-4 rounded-xl bg-emerald-50/80 border border-emerald-200 text-xs space-y-1.5">
                  <div className="flex items-center gap-1.5 font-bold text-emerald-900">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Selected Session Overview:</span>
                  </div>
                  <div className="text-emerald-800 pl-5 space-y-0.5">
                    <p><strong>Date:</strong> {formattedSelectedDate}</p>
                    <p><strong>Time:</strong> {selectedSlot} ({selectedTimezone})</p>
                    <p><strong>Session:</strong> {activeSessionData.title} ({activeSessionData.duration})</p>
                  </div>
                </div>

                {submitError && (
                  <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                    <span>{submitError}</span>
                  </div>
                )}

                {/* Action Button: Book Meeting */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#093965] to-[#2E8D9F] hover:opacity-95 text-white font-extrabold text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-3 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin text-[#FA7D3C]" />
                      <span>Scheduling Your Session...</span>
                    </>
                  ) : (
                    <>
                      <CalendarIcon className="w-5 h-5 text-[#FA7D3C]" />
                      <span>Confirm & Request Schedule</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </>
                  )}
                </button>

                <p className="text-center text-[11px] text-slate-400">
                  Direct coordination with Staff Clicks advisory team. No credit card required.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
