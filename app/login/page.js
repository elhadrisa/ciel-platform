export default function Login() {
  return (
    <div className="h-screen flex items-center justify-center bg-black text-green-400">
      <div className="p-8 border border-green-400">
        <h1 className="text-2xl mb-4">CIEL Portal</h1>

        <input
          placeholder="email"
          className="block mb-3 p-2 bg-black border border-green-400"
        />

        <input
          placeholder="mot de passe"
          type="password"
          className="block mb-3 p-2 bg-black border border-green-400"
        />

        <button className="border border-green-400 px-4 py-2">
          Se connecter
        </button>
      </div>
    </div>
  )
}