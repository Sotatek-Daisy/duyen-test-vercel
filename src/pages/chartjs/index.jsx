import React from "react";
import { Chart } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
  Title,
  TimeScale,
} from "chart.js";
import "./index.scss";
import "chartjs-adapter-moment";
import { options } from "./option";
import { data } from "./data";
import { plugins } from "./plugins";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
  Title,
  TimeScale
);

const ChartJs = () => {
  return (
    <div className="container">
      <div className="chartjs">
        <h1>Chart.js</h1>
        <Chart plugins={plugins} options={options} data={data} />
      </div>
    </div>
  );
};

export default ChartJs;
