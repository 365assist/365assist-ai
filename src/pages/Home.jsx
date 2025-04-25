export default function Home() {
  return (
    <div className="bg-gradient-to-br from-blue-100 to-blue-300 min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-bold text-blue-900 mb-6 leading-tight">
          Empower Your Microsoft 365 & AI Journey
        </h1>
        <p className="text-xl text-blue-800 mb-8">
          Get expert Office 365 support, AI skills training, and unlock your digital potential — all in one place.
        </p>
        <a
          href="/services"
          className="inline-block px-8 py-4 bg-blue-700 text-white text-lg rounded-full shadow-lg hover:bg-blue-800 transition duration-300"
        >
          Get Started
        </a>
      </div>
    </div>
  );
}
