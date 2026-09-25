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
  PhoneCall
} from "lucide-react";

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
  const [selectedTimezone, setSelectedTimezone] = useState<"IST" | "EST" | "PST">("IST");
  const [fullName, setFullName] = useState<string>("");
  const [companyName, setCompanyName] = useState<string>("");
  const [serviceNeeded, setServiceNeeded] = useState<string>("Virtual Assistance & Admin");

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

  // Build WhatsApp URL
  const handleBookOnWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    const phoneNumber = "918302648461";
    const sessionTitle = activeSessionData.title;
    const sessionDuration = activeSessionData.duration;

    const messageLines = [
      `📅 *Meeting Session Booking Request - Staff Clicks*`,
      ``,
      `Hello Staff Clicks team, I would like to schedule a session:`,
      `• *Date:* ${formattedSelectedDate}`,
      `• *Preferred Time:* ${selectedSlot} (${selectedTimezone})`,
      `• *Session Type:* ${sessionTitle} (${sessionDuration})`,
      `• *Service Interest:* ${serviceNeeded}`,
      fullName.trim() ? `• *Name:* ${fullName.trim()}` : null,
      companyName.trim() ? `• *Company:* ${companyName.trim()}` : null,
      ``,
      `Please confirm if this schedule works for your advisory team. Thank you!`
    ].filter(Boolean).join("\n");

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(messageLines)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div id="book-meeting" className="p-6 sm:p-10 lg:p-12 rounded-3xl bg-white border border-slate-200/90 card-shadow-teal relative overflow-hidden">
      {/* Decorative ambient background blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none -z-0"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-0"></div>

      <div className="relative z-10">
        {/* Section Heading */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-50 text-teal-800 border border-teal-200/80 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#2E8D9F]" />
            <span>Interactive Scheduling</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#093965] tracking-tight leading-tight">
            Book a One-on-One Discovery Call or Meeting
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            Pick your preferred date and time slot from our operational calendar below. Once selected, you'll be instantly redirected to WhatsApp with your reservation details pre-filled.
          </p>
        </div>

        {/* Step 1: Session Type Selector */}
        <div className="mb-8">
          <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-3">
            1. Select Session Format
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
            {SESSION_TYPES.map((type) => {
              const isSelected = selectedSession === type.id;
              return (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => setSelectedSession(type.id)}
                  className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-gradient-to-br from-[#093965] to-[#0e4c84] text-white border-[#093965] shadow-md ring-2 ring-[#2E8D9F]/40"
                      : "bg-slate-50/80 hover:bg-slate-100 text-slate-700 border-slate-200"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className={`text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* CALENDAR COLUMN */}
          <div className="lg:col-span-6 p-6 sm:p-7 rounded-2xl bg-slate-50/70 border border-slate-200">
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
            <div className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <label className="text-xs font-black uppercase tracking-wider text-slate-700">
                  3. Select Time Slot
                </label>

                {/* Timezone Switcher */}
                <div className="inline-flex items-center gap-1 p-1 bg-white rounded-lg border border-slate-200 text-[11px] font-bold text-slate-600">
                  <Globe2 className="w-3 h-3 text-[#2E8D9F]" />
                  <button
                    type="button"
                    onClick={() => setSelectedTimezone("IST")}
                    className={`px-1.5 py-0.5 rounded cursor-pointer ${
                      selectedTimezone === "IST" ? "bg-[#093965] text-white" : "hover:text-[#093965]"
                    }`}
                  >
                    IST
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedTimezone("EST")}
                    className={`px-1.5 py-0.5 rounded cursor-pointer ${
                      selectedTimezone === "EST" ? "bg-[#093965] text-white" : "hover:text-[#093965]"
                    }`}
                  >
                    EST
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedTimezone("PST")}
                    className={`px-1.5 py-0.5 rounded cursor-pointer ${
                      selectedTimezone === "PST" ? "bg-[#093965] text-white" : "hover:text-[#093965]"
                    }`}
                  >
                    PST
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
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
            <form onSubmit={handleBookOnWhatsApp} className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200 space-y-4">
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

              {/* Action Button: Book via WhatsApp */}
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#25D366] to-[#1ebe5d] hover:from-[#20bd5a] hover:to-[#17a04d] text-white font-extrabold text-sm sm:text-base shadow-[0_10px_25px_rgba(37,211,102,0.35)] hover:shadow-[0_14px_30px_rgba(37,211,102,0.5)] transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-3 cursor-pointer"
              >
                {/* WhatsApp Icon */}
                <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M12.031 2C6.518 2 2.03 6.47 2.03 11.979c0 1.933.553 3.738 1.517 5.267L2 22l4.908-1.509a9.92 9.92 0 0 0 5.123 1.468h.004c5.512 0 9.996-4.47 9.996-9.979 0-2.665-1.042-5.17-2.932-7.056C17.209 3.04 14.697 2 12.031 2zm0 18.27h-.003a8.27 8.27 0 0 1-4.22-1.157l-.303-.18-3.13.963.98-3.045-.198-.314a8.272 8.272 0 0 1-1.353-4.553c0-4.57 3.725-8.286 8.243-8.286 2.204 0 4.275.858 5.834 2.414a8.217 8.217 0 0 1 2.417 5.827c0 4.57-3.725 8.286-8.242 8.286zm4.518-6.195c-.248-.124-1.468-.724-1.696-.807-.228-.083-.394-.124-.56.124-.166.248-.642.807-.787.973-.145.166-.29.186-.538.062-.248-.124-1.048-.386-1.996-1.23-.738-.658-1.236-1.472-1.381-1.72-.145-.248-.016-.382.108-.506.112-.112.248-.29.373-.435.124-.145.166-.248.248-.414.083-.166.041-.311-.02-.435-.062-.124-.56-1.348-.767-1.846-.202-.486-.407-.42-.56-.428l-.477-.008c-.166 0-.435.062-.663.311-.228.248-.87 85-.87 2.073 0 1.223.891 2.404 1.015 2.57.124.166 1.752 2.673 4.244 3.748.593.256 1.056.409 1.418.524.596.19 1.138.163 1.566.099.478-.071 1.468-.6 1.675-1.18.207-.58.207-1.077.145-1.18-.062-.104-.228-.166-.476-.29z" />
                </svg>
                <span>Confirm & Book on WhatsApp</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <p className="text-center text-[11px] text-slate-400">
                Direct connection to Staff Clicks operations coordinator via official WhatsApp line (+91 83026 48461). No credit card required.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
