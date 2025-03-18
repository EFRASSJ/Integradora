import React, { useState } from "react";
import { Table, Button, Modal, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const categoriasIniciales = [
  { id: 1, nombre: "Bebidas", imagen: "bebidas.jpg", estado: "Habilitada" },
  { id: 2, nombre: "Sopas", imagen: "sopas.jpg", estado: "Inhabilitada" },
  { id: 3, nombre: "Plato fuerte", imagen: "plato-fuerte.jpg", estado: "Habilitada" },
  { id: 4, nombre: "Postres", imagen: "postres.jpg", estado: "Habilitada" },
];

const Categorias = () => {
  const [categorias, setCategorias] = useState(categoriasIniciales);
  const [showModal, setShowModal] = useState(false);
  const [nuevaCategoria, setNuevaCategoria] = useState({
    nombre: "",
    imagen: null,
    estado: "",
  });

  // Manejo del formulario
  const handleChange = (e) => {
    setNuevaCategoria({ ...nuevaCategoria, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setNuevaCategoria({ ...nuevaCategoria, imagen: URL.createObjectURL(e.target.files[0]) });
  };

  const agregarCategoria = () => {
    if (nuevaCategoria.nombre && nuevaCategoria.estado && nuevaCategoria.imagen) {
      setCategorias([...categorias, { ...nuevaCategoria, id: categorias.length + 1 }]);
      setShowModal(false);
      setNuevaCategoria({ nombre: "", imagen: null, estado: "" });
    } else {
      alert("Todos los campos son obligatorios");
    }
  };

  return (
    <div className="d-flex">
      {/* Menú lateral */}
      <div className="bg-danger text-white p-3" style={{ width: "250px", height: "100vh" }}>
        <h4>RESTAURANT</h4>
        <ul className="list-unstyled">
          <li>Dashboard</li>
          <li>Meseros</li>
          <li>Mesas</li>
          <li className="fw-bold">Categorías</li>
          <li>Productos</li>
          <li>Reseñas</li>
        </ul>
      </div>

      {/* Contenido principal */}
      <div className="container p-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2>Categorías</h2>
          <Button variant="danger" onClick={() => setShowModal(true)}>+ Agregar</Button>
        </div>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Nombre</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {categorias.map((categoria) => (
              <tr key={categoria.id}>
                <td>
                  <img src={categoria.imagen} alt={categoria.nombre} width="50" height="50" />
                </td>
                <td>{categoria.nombre}</td>
                <td>
                  <span className={categoria.estado === "Habilitada" ? "text-success" : "text-danger"}>
                    {categoria.estado}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {/* Modal para agregar categoría */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar Categoría</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Imagen</Form.Label>
              <Form.Control type="file" onChange={handleImageChange} />
            </Form.Group>

            <Form.Group className="mt-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="nombre"
                value={nuevaCategoria.nombre}
                onChange={handleChange}
                placeholder="Nombre"
              />
            </Form.Group>

            <Form.Group className="mt-3">
              <Form.Label>Estado</Form.Label>
              <Form.Select name="estado" value={nuevaCategoria.estado} onChange={handleChange}>
                <option value="">Selecciona</option>
                <option value="Habilitada">Habilitada</option>
                <option value="Inhabilitada">Inhabilitada</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={agregarCategoria}>Agregar</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Categorias;
