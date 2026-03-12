export default function CourseCard({title}) {
  return (
    <div className="border border-cyan-400 p-4 rounded-lg hover:shadow-lg">
      <div className="h-24 bg-black mb-3">
        animation réseau
      </div>

      <h2 className="text-lg">{title}</h2>

      <button className="mt-2 border px-3 py-1">
        Télécharger
      </button>
    </div>
  )
}