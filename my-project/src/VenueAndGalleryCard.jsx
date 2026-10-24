import React from "react";

const galleryImages = [
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=300&q=80",
];

export default function VenueAndGalleryCard() {
  return (
    <div className="bg-[#f7f4ee] rounded-xl shadow-lg border border-[#e2dcd3] overflow-hidden p-6 text-center space-y-6">
      {/* مكان الحفل */}
      <div>
        <h2 className="text-sm uppercase tracking-widest text-gray-600 mb-3">
          Venue
        </h2>
        <div className="rounded-lg overflow-hidden mb-3 border border-[#d0c8b8]">
          <img
            src="https://images.unsplash.com/photo-1545232979-fbf59232075d?auto=format&fit=crop&w=600&q=80"
            alt="Venue Villa"
            className="w-full h-40 object-cover"
          />
        </div>
        <p className="font-serif italic text-xl text-[#2c3527]">Villa Podere</p>
        <p className="text-xs text-gray-500 mb-3">
          123 Garden Avenue, Location Name
        </p>
        <button className="bg-[#2c3527] text-white text-xs px-4 py-2 rounded uppercase tracking-wider hover:bg-[#3d4837] transition">
          View On Map
        </button>
      </div>

      {/* معرض الصور */}
      <div className="border-t border-[#e2dcd3] pt-6">
        <h2 className="text-sm uppercase tracking-widest text-gray-600 mb-3">
          Gallery
        </h2>
        <div className="grid grid-cols-2 gap-2 mb-3">
          {galleryImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              className="w-full h-24 object-cover rounded"
              alt={`Gallery ${idx + 1}`}
            />
          ))}
        </div>
        <button className="bg-[#2c3527] text-white text-xs px-4 py-2 rounded uppercase tracking-wider hover:bg-[#3d4837] transition">
          View More Photos
        </button>
      </div>

      {/* QR Code */}
      <div className="border-t border-[#e2dcd3] pt-6 space-y-3">
        <h2 className="text-sm uppercase tracking-widest text-gray-600">
          Visit Our Website
        </h2>
        <p className="text-xs text-gray-500">
          Scan the QR code to visit our wedding website for more details.
        </p>
        <div className="bg-white p-3 inline-block rounded-lg shadow-sm border border-gray-200">
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://example.com"
            alt="QR Code"
            className="w-28 h-28 mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
