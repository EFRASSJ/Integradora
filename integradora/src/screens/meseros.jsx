import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Meseros() {
  const [showModal, setShowModal] = useState(false);
  const [meseros, setMeseros] = useState([]);
  const [newMesero, setNewMesero] = useState({ nombre: "", correo: "", contrasena: "", rol: "", imagen: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMesero({ ...newMesero, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewMesero({ ...newMesero, imagen: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const addMesero = () => {
    setMeseros([...meseros, newMesero]);
    setNewMesero({ nombre: "", correo: "", contrasena: "", rol: "", imagen: "" });
    setShowModal(false);
  };

  return (
    <div className="d-flex">
      {/* Menú lateral */}
      <div className="bg-danger text-white p-3" style={{ width: "250px", height: "100vh" }}>
        <h4>RESTAURANT</h4>
        <ul className="list-unstyled">
          <li>Dashboard</li>
          <li className="fw-bold">Meseros</li>
          <li>Mesas</li>
          <li>Categorías</li>
          <li>Productos</li>
          <li>Reseñas</li>
        </ul>
      </div>

      {/* Contenido principal */}
      <div className="container mt-4">
        <h2>Meseros</h2>
        <button className="btn btn-danger" onClick={() => setShowModal(true)}>+ Agregar</button>
        <table className="table mt-3">
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Contraseña</th>
              <th>Rol</th>
            </tr>
          </thead>
          <tbody>
            {meseros.map((mesero, index) => (
              <tr key={index}>
                <td><img src={mesero.imagen} alt="mesero" width="50" height="50" style={{ borderRadius: "50%" }} /></td>
                <td>{mesero.nombre}</td>
                <td>{mesero.correo}</td>
                <td>******</td>
                <td>{mesero.rol}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content p-3">
              <h4>Agregar mesero</h4>
              <input type="file" className="form-control mb-2" onChange={handleImageChange} />
              <input type="text" name="nombre" placeholder="Nombre" className="form-control mb-2" onChange={handleInputChange} />
              <input type="email" name="correo" placeholder="Correo" className="form-control mb-2" onChange={handleInputChange} />
              <input type="password" name="contrasena" placeholder="Contraseña" className="form-control mb-2" onChange={handleInputChange} />
              <select name="rol" className="form-control mb-2" onChange={handleInputChange}>
                <option value="">Seleccionar rol</option>
                <option value="líder">Líder</option>
                <option value="mesero">Mesero</option>
              </select>
              <button className="btn btn-danger" onClick={addMesero}>Agregar</button>
              <button className="btn btn-secondary ms-2" onClick={() => setShowModal(false)}>Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
