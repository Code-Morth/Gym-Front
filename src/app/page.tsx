"use client"
import React, { useState } from "react"
import { useRouter } from "next/navigation"

export default function Home() {
  const [formData, setFormData] = useState({ username: "", password: "" })

  const router = useRouter()

  const handleLogin = (event: any) => {
    event.preventDefault()

    const dataForm = Object.fromEntries(new FormData(event.target))
    
    dataForm.username === "admin" ? router.push("/dashboard?data=admin") : router.push("/dashboard?data=user")
  }

  return (
    <>
      <div className="loginContainer">
        <div className="loginBox">
          <h2>Iniciar Sesión</h2>
          <form onSubmit={handleLogin}>
            <div className="inputGroup">
              <label htmlFor="username">Usuario</label>
              <input type="text" name="username" required />
            </div>
            <div className="inputGroup">
              <label htmlFor="password">Contraseña</label>
              <input type="password" name="password" required />
            </div>
            {/* {error && <p className="error">{error}</p>} */}
            <button className="button">Entrar</button>
          </form>
        </div>
      </div>
    </>
  )
}
