import React from "react";
import MainInvitationCard from "./MainInvitationCard";
import ProgramAndDressCodeCard from "./ProgramAndDressCodeCard";
import VenueAndGalleryCard from "./VenueAndGalleryCard";

export default function WeddingPage() {
  return (
    <div className="min-h-screen bg-[#ece7df] p-4 md:p-8 font-serif text-[#333]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <MainInvitationCard />
        <ProgramAndDressCodeCard />
        <VenueAndGalleryCard />
      </div>
    </div>
  );
}
