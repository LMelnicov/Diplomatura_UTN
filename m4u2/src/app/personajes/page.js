import { Personaje } from "@/components/Personaje";


export default async function Personajes() {


  const response = await fetch('https://rickandmortyapi.com/api/character')

  const personajes = (await response.json()).results;

  return (
    <div>
      <main>
        <h1 className="ms-5 mt-5 text-4xl font-black text-green-400">Los personajes de la serie son:</h1>

        {personajes.map((personaje) => (
          <Personaje

            key={personaje.id}
            {...personaje}

          />
        ))}
      </main>
    </div>
  );
}
