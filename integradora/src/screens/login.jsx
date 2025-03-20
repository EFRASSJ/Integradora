import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/login", { email, password });
            if (response.status === 200) {
                alert(response.data.message);
                navigate("/home");
            }
        } catch (error) {
            alert(error.response?.data.message || "Error del servidor");
        }
    };

    return (
<div >

            <form className="container align-items-center"
                onSubmit={handleSubmit} 
                style={{
                    width: "100%", 
                    maxWidth: "400px", 
                    textAlign: "center",
                    backgroundColor: "##DFDFDF",
                    padding: "20px",
                    borderRadius: "10px",
                }}
            >
                {/* Imagen */}
                <div className="">
                    <img 
                        src="../img/image.png"
                        alt="Logo"
                        style={{ 
                            width: "120px", 
                            height: "120px", 
                            objectFit: "cover",
                            borderRadius: "50%"
                        }} 
                    />
                </div>

                {/* Campos del formulario */}
                <div className="text-start align-items-center">
                    <label className="form-label fw-bold">Ingresa tu correo</label>
                    <input 
                        type="email" 
                        className="form-control rounded-pill" 
                        placeholder="tucorreo@gmail.com" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </div>

                <div className="text-startd align-items-center">
                    <label className="form-label fw-bold">Ingresa tu contraseña</label>
                    <div className="input-group">
                        <input 
                            type={passwordVisible ? "text" : "password"} 
                            className="form-control rounded-pill" 
                            placeholder="*******" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                        <button 
                            className="btn btn-outline-secondary border-0" 
                            type="button" 
                            onClick={togglePasswordVisibility} 
                            style={{ position: "relative", left: "-2.5rem", zIndex: "2" }}
                        >
                            <i className={`bi ${passwordVisible ? "bi-eye-slash" : "bi-eye"}`}></i>
                        </button>
                    </div>
                </div>

                {/* Botón */}
                <button 
                    type="submit" 
                    className="btn btn-danger w-100 rounded-pill fw-bold"
                    style={{ backgroundColor: "#A00040", border: "none" }}
                >
                    Continuar
                </button>
            </form>
        </div>
    );
}
