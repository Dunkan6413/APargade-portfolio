import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import "./pagesCSS/Login.css"

const BASE_URL = `${import.meta.env.VITE_BACK_URL}/auth/login-cookie`

export default function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            const response = await fetch(BASE_URL, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
                credentials: "include"
            })

            if (!response.ok) {
                throw new Error('Forbidden')
            }

            const data = await response.json()
            localStorage.setItem('role', data.user.role)

            if (data.user.role === 'admin') {
                console.log("Vous êtes admin !")
                // navigate('/admin')
            } else {
                console.log("Vous êtes quelqu'un !")
                // navigate('/profile')
            }

            window.location.href = '/'
        } catch (err) {
            console.error("Erreur de connexion :", err)
        }
    }

    return (
        <main className="login-hero">
            <h1 className="login-title">Connexion</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="username">Nom d'utilisateur</label>
                <input
                    id="username"
                    type="text"
                    placeholder="Nom d'utilisateur"
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <label htmlFor="password">Mot de passe</label>
                <input
                    id="password"
                    type="password"
                    placeholder="Mot de passe"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Connexion</button>
                <Link className="login-link" to="/register">Créer un compte</Link>
            </form>
        </main>
    )
}