
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-b from-white to-teal-50">
      <img src="/logo.svg" alt="Nomiqon Logo" className="w-16 h-16 mb-6" />
      <h1 className="text-3xl font-bold text-gray-900">Welcome to <span className="text-teal-600">Nomiqon</span></h1>
      <p className="text-gray-600 mt-2">Your brand. <span className="text-teal-500 underline">One click away.</span></p>
    </main>
  )
}
