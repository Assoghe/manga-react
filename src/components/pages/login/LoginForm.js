import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function LoginForm() {
    //state
    const [inputValue, setInputValue] = useState("")
    const navigate = useNavigate()

    //comportements
    const handleSubmit = (event) => {
        event.preventDefault()
        setInputValue("")
        navigate(`manga/${inputValue}`)

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
            <Link to="/manga">Vers MangaPage </Link>
        </form>
    )
}
