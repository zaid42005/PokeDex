export default async function Page({ params }: { params: { name: string } }) {
    const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`, { cache: 'force-cache' })
    const staticData = await request.json()
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <img src={staticData.sprites.versions['generation-v']['black-white'].animated.front_default} alt="Pikachu Back" />
  
        {/* <h1>{JSON.stringify(staticData,0,2)}</h1> */}
  
      </main>
      )
  }