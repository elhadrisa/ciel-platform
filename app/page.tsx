export default function Home() {
  return (
    <main className="min-h-screen bg-black text-green-400 flex flex-col items-center justify-center">

      <h1 className="text-5xl mb-6 font-bold">
        CIEL Portal
      </h1>

      <p className="mb-10 text-lg">
        Plateforme pédagogique CIEL
      </p>

      <div className="flex gap-6">

        <a
          href="/login"
          className="border border-green-400 px-6 py-3 hover:bg-green-400 hover:text-black transition"
        >
          Connexion
        </a>

        <a
          href="/forum"
          className="border border-cyan-400 px-6 py-3 hover:bg-cyan-400 hover:text-black transition"
        >
          Forum
        </a>

      </div>

    </main>
  )
}