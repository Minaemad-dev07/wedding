import React from "react";
import { Clock, MapPin, Camera, Utensils, Heart, Gift } from "lucide-react";

const schedule = [
  { time: "15:00", title: "Guest Arrival", icon: Clock },
  { time: "15:30", title: "Canapés & Refreshments", icon: Heart },
  { time: "16:00", title: "Ceremony", icon: MapPin },
  { time: "16:30", title: "Photo Session", icon: Camera },
  { time: "18:00", title: "Banquet", icon: Utensils },
  { time: "20:30", title: "Dinner & Speeches", icon: Gift },
];

const colorPalette = [
  "bg-[#f8f5f0]",
  "bg-[#919b85]",
  "bg-[#5d6852]",
  "bg-[#9c8473]",
  "bg-[#2c3527]",
];

export default function ProgramAndDressCodeCard() {
  return (
    <div className="bg-[#f7f4ee] rounded-xl shadow-lg border border-[#e2dcd3] overflow-hidden flex flex-col justify-between">
      {/* برنامج الحفل */}
      <div className="p-6 text-center">
        <p className="text-xs uppercase tracking-widest text-gray-500">
          Wedding
        </p>
        <p className="font-serif italic text-3xl text-[#2c3527] mb-6">
          Program
        </p>

        <div className="relative pl-4 space-y-6 text-left border-l-2 border-[#c5beaf] ml-6">
          {schedule.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="relative flex items-center gap-4">
                <div className="absolute -left-7.75 bg-[#2c3527] text-white p-2 rounded-full w-8 h-8 flex items-center justify-center">
                  <Icon size={14} />
                </div>
                <div className="ml-4">
                  <span className="font-bold text-sm text-[#2c3527]">
                    {item.time}
                  </span>
                  <p className="text-xs text-gray-600">{item.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dress Code والهدية */}
      <div className="bg-[#2c3527] text-white p-6 text-center mt-6">
        <h3 className="text-sm uppercase tracking-widest mb-3">Dress Code</h3>
        <div className="flex justify-center gap-3 mb-6">
          {colorPalette.map((color, idx) => (
            <span
              key={idx}
              className={`w-6 h-6 rounded-full ${color} border border-white`}
            />
          ))}
        </div>

        <p className="text-xs text-gray-300 leading-relaxed px-2">
          Our most important gift is your presence. However, if you wish to
          honour us with a gift, a contribution towards our honeymoon would be
          appreciated.
        </p>
      </div>

      {/* الاقتباس */}
      <div className="p-6 text-center bg-[#f7f4ee]">
        <span className="text-2xl text-gray-400">“</span>
        <p className="text-xs italic text-gray-600">
          A successful marriage requires falling in love many times, always with
          the same person.
        </p>
      </div>
    </div>
  );
}
