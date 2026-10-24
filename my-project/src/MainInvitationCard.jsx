import React from 'react';
import Calendar from './Calendar';
import heroImg from './assets/wedding.jpg'; // استيراد الصورة

export default function MainInvitationCard() {
  return (
    <div className="bg-[#f7f4ee] rounded-xl shadow-lg border border-[#e2dcd3] overflow-hidden flex flex-col justify-between p-6 text-center">
      {/* العناوين والاسماء */}
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-widest text-gray-500">
          TOGETHER WITH THEIR FAMILIES
        </p>
        <div className="text-red-400 text-xs">♥</div>
        <h1 className="text-3xl font-serif text-[#2c3527] uppercase tracking-wide">
          Olivia <br />{" "}
          <span className="font-serif italic lowercase text-2xl font-normal">
            &amp;
          </span>
          <br /> Daniel
        </h1>
        <p className="text-xs uppercase tracking-widest text-gray-500 pt-2">
          INVITE TO YOU THEIR
        </p>
        <p className="font-serif italic text-3xl text-[#5a624f]">Wedding</p>
      </div>
      {/* صورة للعروسين */}
      <div className="my-6 relative rounded-t-full overflow-hidden border-2 border-[#d0c8b8] shadow-inner">
        <img
          src={heroImg}
          alt="Olivia and Daniel"
          className="w-full h-80 object-cover"
        />
      </div>
      {/* تفاصيل الرسالة والتاريخ */}
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-widest text-gray-500">
          We are getting <br />
          MARRIED
        </p>
        <p className="text-xs text-gray-600 px-4 leading-relaxed">
          We would be delighted if you could join us on our special day and
          bless us with your presence and prayers.
        </p>
        <div className="border-t border-b border[#e2dcd3] py-3 my-3">
          <p className="text-xs uppercase tracking-widest text-gray-500">
            Save The Date
          </p>
          <p className="text-xl font-bold text-[#2c3527] my-1">
            22 . 11 . 2026
          </p>
          <p className="text-xs text-gray-500 uppercase">Sunday</p>
        </div>
        {/* استدعاء كومبوننت التقويم */}
        <Calendar />
      </div>
      {/* الكلمات السفلية */}
      <div className="mt-6 pt-4 bg-[#2c3527] text-white -mx-6 -mb-6 p-4">
        <p className="font-serif italic text-lg">With Love</p>
        <p className="text-sm font-semibold tracking-wider">
          OLIVIA &amp; DANIEL
        </p>
      </div>
    </div>
  );}