export default function CourseCard({ title, pdf }) {

  return (

    <div className="border border-green-400 p-6 hover:bg-green-400 hover:text-black transition">

      <div className="h-24 mb-4 flex items-center justify-center border border-green-400">
        animation réseau
      </div>

      <h2 className="text-xl mb-3 neon-text">
        {title}
      </h2>

      <a
        href={pdf}
        target="_blank"
        className="border border-green-400 px-4 py-2"
      >
        Télécharger le cours
      </a>

    </div>

  )
}