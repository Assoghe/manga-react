import React, { useState } from 'react'

export default function LoginPage() {

    //state
    const [inputValue, setInputValue] = useState("")

    //comportements
    const handleSubmit = (event) => {
      event.preventDefault()
      alert(`Bonjour ${inputValue}`)
    }

    const handleChange = (event) => {
      setInputValue(event.target.value)
    }
    
    

    //affichage (render)
    return (
        <div>
            <h1> Bienvenue chez nous </h1>
            <h2> Connectez-vous </h2>
            <form action="submit" onSubmit={handleSubmit}>
                <input value={inputValue} onChange={handleChange} type="text" placeholder="entrez votre prenom..." required />
                <button> Acceder à votre espace </button>
            </form>
        </div>
    )
}
