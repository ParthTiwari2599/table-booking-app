'use client';

export default function Home() {
  return (
    <div className="relative w-screen min-h-screen overflow-hidden">
     
      <div className="absolute inset-0 w-full h-full -z-10 pointer-events-none">
        <dotlottie-player
          src="https://lottie.host/d4a68e12-bc5f-41fd-91d6-ca498c6b01d9/ROROnoA7tl.lottie"
          background="transparent"
          speed="1"
          style={{ width: '100%', height: '100%', opacity: 0.15 }}
          loop
          autoplay
        ></dotlottie-player>
      </div>

      
      <section className="flex flex-col items-center justify-center h-[80vh] text-center pt-20 px-4">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Welcome to Our App </h1>
        <p className="text-lg text-gray-700 mb-6">Book your table instantly!</p>
        <a
          href="/book"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Reserve Now
        </a>
      </section>

      
      <section className="py-12 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Our Partner Hotels</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {[
            "Taj Hotels",
            "The Oberoi Group",
            "ITC Hotels",
            "Radisson Blu",
            "Lemon Tree",
            "JW Marriott",
            "The Leela",
            "Trident Hotels",
          ].map((hotel, index) => (
            <div
              key={index}
              className="bg-blue-50 py-4 px-2 rounded-md shadow-sm text-blue-900 font-medium hover:bg-blue-100 transition"
            >
              {hotel}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}


