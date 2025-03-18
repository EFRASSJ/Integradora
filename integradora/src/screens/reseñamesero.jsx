import React from "react";
import { Card } from "react-bootstrap";
import { Bar, Doughnut } from "react-chartjs-2";
import { FaUserCircle, FaStar } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, ArcElement, Tooltip, Legend } from "chart.js";

// Registrar componentes de gráficos
ChartJS.register(BarElement, CategoryScale, LinearScale, ArcElement, Tooltip, Legend);

const ReseñaMesero = () => {
  const datosBarras = {
    labels: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"],
    datasets: [
      {
        label: "Malos",
        backgroundColor: "#d9534f",
        data: [5, 7, 6, 4, 5, 8, 6],
      },
      {
        label: "Regulares",
        backgroundColor: "#f0ad4e",
        data: [8, 10, 9, 12, 10, 13, 9],
      },
      {
        label: "Buenos",
        backgroundColor: "#5bc0de",
        data: [10, 12, 15, 14, 18, 16, 14],
      },
      {
        label: "Muy buenos",
        backgroundColor: "#0275d8",
        data: [12, 15, 14, 18, 16, 19, 17],
      },
      {
        label: "Excelentes",
        backgroundColor: "#5cb85c",
        data: [15, 18, 20, 22, 25, 23, 20],
      },
    ],
  };

  const opcionesBarras = {
    responsive: true,
    scales: {
      y: { beginAtZero: true },
    },
  };

  const datosDona = {
    labels: ["Excelentes", "Malos"],
    datasets: [
      {
        data: [80, 20],
        backgroundColor: ["#5cb85c", "#d9534f"],
      },
    ],
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Maximiliano Torres</h2>

      {/* Contenido principal */}
      <div className="row mt-3">
        {/* Gráfico de desempeño */}
        <div className="col-md-7">
          <h4 className="text-center">Desempeño</h4>
          <Bar data={datosBarras} options={opcionesBarras} />
        </div>

        {/* Tarjeta con detalles */}
        <div className="col-md-5">
          <Card className="border-danger">
            <Card.Body>
              <Card.Title className="d-flex align-items-center justify-content-between">
                <span>Cliente_95</span>
                <FaUserCircle size={40} color="black" />
              </Card.Title>
              <hr />
              <Card.Subtitle className="mb-2 text-muted">Mesero</Card.Subtitle>
              <Card.Text>Maximiliano Torres Ménez</Card.Text>
              <Card.Subtitle className="mb-2 text-muted">Comentario</Card.Subtitle>
              <Card.Text>
                <i>"Servicio impecable"</i>
                <br />
                El camarero fue amable y atento en todo momento. ¡Gran experiencia!
              </Card.Text>
              <div className="text-warning">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>

      {/* Gráfico de comentarios */}
      <div className="text-center mt-4">
        <h4>Comentarios</h4>
        <Doughnut data={datosDona} />
      </div>
    </div>
  );
};

export default ReseñaMesero;
