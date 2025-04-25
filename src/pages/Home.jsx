export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-br from-blue-100 to-blue-300">
      <h1 className="text-5xl font-bold text-blue-900 mb-6 text-center">
        Empowering Your Microsoft 365 and AI Journey
      </h1>
      <p className="text-xl text-blue-800 mb-8 text-center max-w-2xl">
        Master Microsoft 365. Learn AI. Get support when you need it.
      </p>
      <a
        href="/services"
        className="px-6 py-3 text-lg bg-blue-700 text-white rounded-2xl hover:bg-blue-800 transition"
      >
        Get Started
      </a>
    </div>
  );
}
