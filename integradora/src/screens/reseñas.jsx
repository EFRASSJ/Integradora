import React from "react";
import { ProgressBar, Form, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaStar, FaSearch } from "react-icons/fa";

const reseñas = [
  {
    id: 1,
    nombre: "Juan Pérez",
    avatar: "https://i.pravatar.cc/50?img=1",
    estrellas: 5,
    comentario:
      "Una experiencia increíble. Los cortes estaban deliciosos, especialmente la picanha de mariscos, con un sabor auténtico y una presentación impecable. Sin duda volveré a repetir y traeré a más amigos.",
  },
  {
    id: 2,
    nombre: "Julieta Salinas Álvarez",
    avatar: "https://i.pravatar.cc/50?img=2",
    estrellas: 4,
    comentario:
      "Tienen un servicio y atención excepcional. Probé el agua de fresa y estaba en su punto, aunque el servicio podría haber sido un poco más rápido. Sin duda, lo recomiendo para cenas en familia.",
  },
  {
    id: 3,
    nombre: "Bruno Padrón",
    avatar: "https://i.pravatar.cc/50?img=3",
    estrellas: 3,
    comentario:
      "El lugar y el ambiente personal están bien, pero el tiempo de espera fue largo. La comida estaba bien, aunque esperaba mucho más por el precio.",
  },
  {
    id: 4,
    nombre: "Jorge Valenzuela",
    avatar: "https://i.pravatar.cc/50?img=4",
    estrellas: 5,
    comentario:
      "Una tarde inmejorable, estaba lleno, pero me tocó espacio. El pescado estaba jugoso y la atención, aunque concisa, no fue molesta. 10/10 volvería a visitar.",
  },
];

const calificaciones = [
  { estrellas: 5, porcentaje: 60 },
  { estrellas: 4, porcentaje: 25 },
  { estrellas: 3, porcentaje: 10 },
  { estrellas: 2, porcentaje: 3 },
  { estrellas: 1, porcentaje: 2 },
];

const Reseñas = () => {
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
          <li>Productos</li>
          <li className="fw-bold">Reseñas</li>
        </ul>
      </div>

      {/* Contenido principal */}
      <div className="container p-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2>Reseñas</h2>
          <InputGroup className="w-25">
            <InputGroup.Text>
              <FaSearch />
            </InputGroup.Text>
            <Form.Control type="text" placeholder="Buscar..." />
          </InputGroup>
        </div>

        {/* Puntuación general */}
        <div className="text-center mb-4">
          <h1>4.5</h1>
          <div className="text-warning">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
          <p className="text-muted">3,512,100 reseñas</p>
        </div>

        {/* Barras de calificaciones */}
        <div className="mb-4">
          {calificaciones.map((cal) => (
            <div key={cal.estrellas} className="d-flex align-items-center mb-2">
              <span className="me-2">{cal.estrellas}</span>
              <FaStar className="text-warning me-2" />
              <ProgressBar now={cal.porcentaje} style={{ width: "200px" }} />
            </div>
          ))}
        </div>

        {/* Lista de reseñas */}
        <div>
          {reseñas.map((res) => (
            <div key={res.id} className="d-flex align-items-start mb-3">
              <img
                src={res.avatar}
                alt={res.nombre}
                className="rounded-circle me-3"
                width="50"
                height="50"
              />
              <div>
                <h5 className="mb-1">{res.nombre}</h5>
                <div className="text-warning mb-1">
                  {[...Array(res.estrellas)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="mb-0">{res.comentario}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reseñas;
