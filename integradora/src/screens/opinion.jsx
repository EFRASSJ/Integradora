import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const NuevaReseña = () => {
  const [comentario, setComentario] = useState("");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Comentario: ${comentario}\nCalificación: ${rating} estrellas`);
    setComentario("");
    setRating(0);
  };

  return (
    <div className="container mt-4">
      {/* Encabezado */}
      <div className="bg-danger text-white text-center p-3">
        <h2>SIGERP</h2>
      </div>

      {/* Contenido principal */}
      <div className="p-4">
        <h3 className="text-center">¡Tu opinión es importante para nosotros!</h3>
        <p className="text-center">
          Queremos brindarte siempre el mejor servicio, y tu experiencia nos ayuda a mejorar. 
          ¿Cómo fue la atención de nuestro equipo?  
          Déjanos tu reseña sobre nuestros camareros y cuéntanos qué te pareció su servicio. 
          ¡Agradecemos tu tiempo y esperamos verte pronto! 😊
        </p>

        {/* Formulario */}
        <Form onSubmit={handleSubmit} className="mt-4">
          <Form.Group controlId="comentario">
            <Form.Label><strong>Comentario</strong></Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="¡Comparte tu opinión!"
              value={comentario}
              onChange={(e) => setComentario(e.target.value)}
              required
            />
          </Form.Group>

          {/* Calificación con estrellas */}
          <div className="text-center mt-3">
            {[...Array(5)].map((_, index) => {
              const ratingValue = index + 1;
              return (
                <FaStar
                  key={index}
                  size={30}
                  className="mx-1"
                  color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(null)}
                  onClick={() => setRating(ratingValue)}
                  style={{ cursor: "pointer" }}
                />
              );
            })}
          </div>

          {/* Botón */}
          <div className="text-center mt-3">
            <Button variant="danger" type="submit">
              Finalizar
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default NuevaReseña;
