import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/login.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Login() {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 w-100">
            <div className="card p-4 shadow-sm text-center" 
                style={{ maxWidth: "400px", width: "100%", backgroundColor: "#fff", borderRadius: "10px" }}>
                
                {/* Imagen de perfil */}
                <div className="text-center">
                    <img src="../img/image.png" alt="Profile" 
                        className="rounded-circle mb-2" 
                        style={{ width: "80px", height: "80px", objectFit: "cover" }} />
                </div>

                <form className="mt-3">
                    <div className="mb-3 text-start">
                        <label className="form-label fw-bold">Ingresa tu correo</label>
                        <input type="email" className="form-control rounded-pill" placeholder="tucorreo@gmail.com" />
                    </div>

                    <div className="mb-3 text-start">
                        <label className="form-label fw-bold">Ingresa tu contraseña</label>
                        <div className="input-group">
                            <input 
                                type={passwordVisible ? "text" : "password"} 
                                className="form-control rounded-pill" 
                                placeholder="*******"
                            />
                            <button 
                                className="btn btn-outline-secondary border-0" 
                                type="button" 
                                onClick={togglePasswordVisibility}
                            >
                                <i className={`bi ${passwordVisible ? "bi-eye-slash" : "bi-eye"}`}></i>
                            </button>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-danger w-100 rounded-pill fw-bold">Continuar</button>
                </form>
            </div>
        </div>
    );
}
