import React, { useState } from "react";
import { Table, Button, Modal, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const productosIniciales = [
  {
    id: 1,
    nombre: "Café Cappuccino",
    imagen: "cappuccino.jpg",
    precio: "$50",
    descripcion: "Café de origen italiano suave...",
    categoria: "Bebidas, Desayunos",
  },
  {
    id: 2,
    nombre: "Solomillo de Ternera",
    imagen: "solomillo.jpg",
    precio: "$150",
    descripcion: "Jugoso solomillo de ternera de calidad...",
    categoria: "Plato fuerte",
  },
  {
    id: 3,
    nombre: "Tarta de Queso al Horno",
    imagen: "tarta.jpg",
    precio: "$80",
    descripcion: "Deliciosa tarta de queso horneada...",
    categoria: "Postres, Desayunos",
  },
  {
    id: 4,
    nombre: "Coulant de Chocolate",
    imagen: "coulant.jpg",
    precio: "$120",
    descripcion: "Esponjoso bizcocho de chocolate con corazón fundente...",
    categoria: "Postres",
  },
];

const Productos = () => {
  const [productos, setProductos] = useState(productosIniciales);
  const [showModal, setShowModal] = useState(false);
  const [nuevoProducto, setNuevoProducto] = useState({
    nombre: "",
    imagen: null,
    precio: "",
    descripcion: "",
    categoria: [],
  });

  // Manejo del formulario
  const handleChange = (e) => {
    setNuevoProducto({ ...nuevoProducto, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setNuevoProducto({ ...nuevoProducto, imagen: URL.createObjectURL(e.target.files[0]) });
  };

  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    setNuevoProducto((prev) => ({
      ...prev,
      categoria: checked
        ? [...prev.categoria, value]
        : prev.categoria.filter((cat) => cat !== value),
    }));
  };

  const agregarProducto = () => {
    if (nuevoProducto.nombre && nuevoProducto.precio && nuevoProducto.descripcion && nuevoProducto.categoria.length > 0 && nuevoProducto.imagen) {
      setProductos([...productos, { ...nuevoProducto, id: productos.length + 1, categoria: nuevoProducto.categoria.join(", ") }]);
      setShowModal(false);
      setNuevoProducto({ nombre: "", imagen: null, precio: "", descripcion: "", categoria: [] });
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
          <li>Categorías</li>
          <li className="fw-bold">Productos</li>
          <li>Reseñas</li>
        </ul>
      </div>

      {/* Contenido principal */}
      <div className="container p-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2>Productos</h2>
          <Button variant="danger" onClick={() => setShowModal(true)}>+ Agregar</Button>
        </div>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Descripción</th>
              <th>Categoría</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto) => (
              <tr key={producto.id}>
                <td>
                  <img src={producto.imagen} alt={producto.nombre} width="50" height="50" />
                </td>
                <td>{producto.nombre}</td>
                <td>{producto.precio}</td>
                <td>{producto.descripcion}</td>
                <td>{producto.categoria}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {/* Modal para agregar producto */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar Platillo</Modal.Title>
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
                value={nuevoProducto.nombre}
                onChange={handleChange}
                placeholder="Nombre"
              />
            </Form.Group>

            <Form.Group className="mt-3">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                name="precio"
                value={nuevoProducto.precio}
                onChange={handleChange}
                placeholder="1000.00"
              />
            </Form.Group>

            <Form.Group className="mt-3">
              <Form.Label>Categoría</Form.Label>
              <div className="d-flex flex-wrap">
                {["Entradas", "Postres", "Sopas"].map((categoria) => (
                  <Form.Check
                    key={categoria}
                    type="checkbox"
                    label={categoria}
                    value={categoria}
                    onChange={handleCategoryChange}
                    className="me-3"
                  />
                ))}
              </div>
            </Form.Group>

            <Form.Group className="mt-3">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="descripcion"
                value={nuevoProducto.descripcion}
                onChange={handleChange}
                placeholder="Descripción del platillo"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={agregarProducto}>Agregar</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Productos;
