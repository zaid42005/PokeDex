"use client"
import React, { useState } from 'react'



const Pokemon = () => {
    const [search,setSearch] = useState('')
    const [pokeFrontUrl, setPokeFrontUrl] = useState('') 
    const [pokeBackUrl, setPokeBackUrl] = useState('')
    const [pokeTypeUrl,setPokeTypeUrl] = useState('')
    const [showFrontImage, setShowFrontImage] = useState(true);
    const submit = async (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        //fetch
        const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`, { cache: 'force-cache' })
        const staticData = await request.json()
        setPokeFrontUrl(staticData.sprites.versions['generation-v']['black-white'].animated.front_default)
        setPokeBackUrl(staticData.sprites.versions['generation-v']['black-white'].animated.back_default)
        setPokeTypeUrl(staticData.types[0].type.name)
        setShowFrontImage(true);
        console.log(search)
    }

    const toggleImage = () => {
        setShowFrontImage(!showFrontImage); // Toggle between front and back images
      };

  return (
    <div className='min-h-screen bg-red-500 flex flex-col justify-center items-center gap-4'>
        <form className='flex flex-col items-center justify-center gap-4' onSubmit ={(e)=>submit(e)}>
            <input placeholder='Search...' className= "text-lime-900 bg-neutral-200" value={search} onChange={(e)=> setSearch(e.target.value)}/>
            <button className= 'bg-amber-100 text-black px-2 py-1 rounded-lg' type='submit'> Ooooo</button>
        </form>
        
        
        <img className="h-20 w-20" src={showFrontImage? pokeFrontUrl: pokeBackUrl} alt="Pokemon" />

        <button className="bg-amber-100 text-black px-2 py-1 rounded-lg" onClick={toggleImage}>switch view</button>
        
        <h1 className='rounded-lg bg-slate-50 text-black px-4 '>{pokeTypeUrl} </h1>
    </div>
  )
}

export default Pokemon