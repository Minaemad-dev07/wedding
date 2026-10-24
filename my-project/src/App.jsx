import { useState } from "react";
import "./App.css";
import MainInvitationCard from "./MainInvitationCard";
import ProgramAndDressCodeCard from "./ProgramAndDressCodeCard";
import VenueAndGalleryCard from "./VenueAndGalleryCard";

function App() {
  return (
    <div className="min-h-screen bg-[#ece7df] p-4 md:p-8 font-serif text-[#333]">
      {/* الحاوية الرئيسية التي تقسم الشاشة إلى 3 أعمدة في الشاشات الكبيرة */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <MainInvitationCard />
        <ProgramAndDressCodeCard />
        <VenueAndGalleryCard />
      </div>
      <footer className="mt-12 text-center border-t border-[#d0c8b8] pt-6 pb-2 text-xs text-[#5a624f]">
        <p>
          © 2026 Wedding Invitation. Designed with ❤️ by{" "}
          <span className="font-bold text-[#2c3527]">Mina Emad</span>
        </p>
      </footer>
    </div>
  );
}

export default App;
