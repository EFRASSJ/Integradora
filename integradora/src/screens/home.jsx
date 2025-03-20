import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Bar, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

export default function Home() {
  const barData = {
    labels: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"],
    datasets: [
      {
        label: "Ingresos",
        data: [3000, 500, 1000, 1500, 1200, 4500, 8000],
        backgroundColor: "#A00040",
      },
    ],
  };

  const doughnutData = {
    labels: ["Día", "Noche"],
    datasets: [
      {
        data: [60, 40],
        backgroundColor: ["#A00040", "#FFB6C1"],
      },
    ],
  };

  return (
    <div className="d-flex">
      <div className="bg-danger text-white p-3" style={{ width: "250px", height: "100vh" }}>
        <h4 className="text-center">RESTAURANT</h4>
        <ul className="nav flex-column mt-3">
          <li className="nav-item bg-light text-dark p-2 rounded">Dashboard</li>
          <li className="nav-item p-2">Meseros</li>
          <li className="nav-item p-2">Mesas</li>
          <li className="nav-item p-2">Categorías</li>
          <li className="nav-item p-2">Productos</li>
          <li className="nav-item p-2">Reseñas</li>
        </ul>
      </div>
      <div className="container-fluid p-4">
        <div className="d-flex justify-content-between">
          <h2>Panel de Administración</h2>
          <button className="btn btn-danger">📄 PDF</button>
        </div>
        <div className="row mt-4">
          <div className="col-md-8">
            <h5>Ventas</h5>
            <Bar data={barData} />
          </div>
          <div className="col-md-4">
            <h5>VENTAS TOTALES</h5>
            <h3>980</h3>
            <h6>Tiempo de ventas</h6>
            <Doughnut data={doughnutData} />
          </div>
        </div>
        <div className="mt-4">
          <table className="table table-bordered text-center">
            <thead className="bg-danger text-white">
              <tr>
                <th>Día</th>
                <th>Ingresos Día ($)</th>
                <th>Ingresos Tarde ($)</th>
                <th>Total ($)</th>
                <th>Clientes Día</th>
                <th>Clientes Tarde</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Lunes</td><td>2500</td><td>1500</td><td>4000</td><td>120</td><td>90</td></tr>
              <tr><td>Martes</td><td>500</td><td>300</td><td>800</td><td>40</td><td>30</td></tr>
              <tr><td>Miércoles</td><td>600</td><td>400</td><td>1000</td><td>50</td><td>40</td></tr>
              <tr><td>Jueves</td><td>2000</td><td>1500</td><td>3500</td><td>100</td><td>80</td></tr>
              <tr><td>Viernes</td><td>1200</td><td>800</td><td>2000</td><td>80</td><td>50</td></tr>
              <tr><td>Sábado</td><td>2800</td><td>1700</td><td>4500</td><td>150</td><td>120</td></tr>
              <tr><td>Domingo</td><td>5000</td><td>3000</td><td>8000</td><td>200</td><td>180</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
