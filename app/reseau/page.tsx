import Navbar from "../../components/Navbar"

export default function Reseau(){

  return(

    <>
      <Navbar/>

      <div className="page">

        <h1>Réseau informatique</h1>

        <p>
          Ici vous trouverez les cours et TP sur les réseaux informatiques.
        </p>

        <div className="cards">

          <div className="card">

            <h2>TP VLAN</h2>

            <p>
              Configuration des VLAN sur un switch.
            </p>

            <a className="button" href="/tp/TP1 - VLAN.pdf">
              Télécharger le TP
            </a>

          </div>

        </div>

      </div>

    </>

  )

}