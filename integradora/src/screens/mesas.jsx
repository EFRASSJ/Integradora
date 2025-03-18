import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal, Form } from "react-bootstrap";

const MesasPanel = () => {
  const [show, setShow] = useState(false);
  const [mesas, setMesas] = useState([
    { id: 1, nombre: "Mesa_01", capacidad: "4 Personas", estado: "Habilitada" },
    { id: 2, nombre: "Mesa_02", capacidad: "2 Personas", estado: "Habilitada" },
    { id: 3, nombre: "Mesa_03", capacidad: "6 Personas", estado: "Inhabilitada" },
    { id: 4, nombre: "Mesa_04", capacidad: "2 Personas", estado: "Habilitada" },
  ]);

  const [nuevaMesa, setNuevaMesa] = useState({ nombre: "", capacidad: "", estado: "Habilitada" });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    setNuevaMesa({ ...nuevaMesa, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMesas([...mesas, { id: mesas.length + 1, ...nuevaMesa }]);
    setNuevaMesa({ nombre: "", capacidad: "", estado: "Habilitada" });
    handleClose();
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Mesas</h2>
      <Button variant="danger" onClick={handleShow}>
        + Agregar
      </Button>
      <table className="table table-bordered mt-3">
        <thead className="table-dark">
          <tr>
            <th>Mesa</th>
            <th>Capacidad</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {mesas.map((mesa) => (
            <tr key={mesa.id}>
              <td><a href="#" className="text-primary">{mesa.nombre}</a></td>
              <td>{mesa.capacidad}</td>
              <td>
                <Button variant={mesa.estado === "Habilitada" ? "success" : "secondary"}>
                  {mesa.estado}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal para agregar mesa */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Agregar Mesa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Mesa</Form.Label>
              <Form.Control type="text" name="nombre" value={nuevaMesa.nombre} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Capacidad</Form.Label>
              <Form.Control type="text" name="capacidad" value={nuevaMesa.capacidad} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Estado</Form.Label>
              <Form.Select name="estado" value={nuevaMesa.estado} onChange={handleChange}>
                <option value="Habilitada">Habilitada</option>
                <option value="Inhabilitada">Inhabilitada</option>
              </Form.Select>
            </Form.Group>
            <Button variant="danger" type="submit" className="w-100">
              Agregar
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default MesasPanel;
