import Image from 'next/image'
import { json } from 'stream/consumers'

export default async function  Home() {
  const request = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`, { cache: 'force-cache' })
  const staticData = await request.json()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <img src={staticData.sprites.versions['generation-v']['black-white'].animated.front_default} alt="Pikachu Back" />

      {/* <h1>{JSON.stringify(staticData,0,2)}</h1> */}

    </main>
  )
}
