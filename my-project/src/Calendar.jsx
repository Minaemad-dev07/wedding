import React from "react";

// تأكد من تمرير { selectedDay } هنا داخل الأقواس المعقوفة للـ props
export default function Calendar({ selectedDay = 22 }) {
  const daysOfWeek = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const days = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div className="text-xs text-gray-600">
      <div className="grid grid-cols-7 gap-1 font-bold text-gray-400 mb-1 text-center">
        {daysOfWeek.map((day) => (
          <span key={day}>{day}</span>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1 text-center">
        {days.map((day) => (
          <span
            key={day}
            className={`py-1 rounded-full ${
              // هنا يتم استخدام المتغير المعرف بشكل صحيح
              day === selectedDay ? "bg-[#2c3527] text-white font-bold" : ""
            }`}
          >
            {day}
          </span>
        ))}
      </div>
    </div>
  );
}
