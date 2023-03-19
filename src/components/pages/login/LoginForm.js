import React, { useState } from 'react'

export default function LoginForm() {
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


    return (
        <form action="submit" onSubmit={handleSubmit}>
            <h1> Bienvenue chez nous </h1>
            <h2> Connectez-vous </h2>
            <input value={inputValue} onChange={handleChange} type="text" placeholder="entrez votre prenom..." required />
            <button> Acceder à votre espace </button>
        </form>
    )
}