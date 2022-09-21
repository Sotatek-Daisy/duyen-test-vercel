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
import moment from "moment/moment";
import "chartjs-adapter-moment";

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

function newDate(days) {
  return moment().add(days, "d").toDate();
}

const data = {
  datasets: [
    {
      type: "line",
      label: "Social Media",
      borderColor: "rgb(104,228,151)",
      borderWidth: 4,
      backgroundColor: "rgb(104,228,151)",
      fill: true,
      borderSkipped: "center",
      data: [
        {
          x: new Date("2019-12-31"),
          y: 23,
        },
        {
          x: new Date("2020-01-01"),
          y: 42,
        },
        {
          x: new Date("2020-01-02"),
          y: 35,
        },
        {
          x: new Date("2020-01-03"),
          y: 27,
        },
        {
          x: new Date("2020-01-04"),
          y: 43,
        },
        {
          x: new Date("2020-01-05"),
          y: 22,
        },
        {
          x: new Date("2020-01-06"),
          y: 17,
        },
        {
          x: new Date("2020-01-07"),
          y: 31,
        },
        {
          x: new Date("2020-01-08"),
          y: 22,
        },
        {
          x: new Date("2020-01-09"),
          y: 22,
        },
        {
          x: new Date("2020-01-10"),
          y: 12,
        },
        {
          x: new Date("2020-01-11"),
          y: 16,
        },
      ],
      yAxisID: "social",
      legend: {},
    },
    {
      type: "bar",
      label: "Website Blog",
      borderColor: "rgb(40,160,251)",
      borderWidth: 4,
      backgroundColor: "rgb(40,160,251)",
      fill: true,
      data: [
        {
          x: new Date("2019-12-31"),
          y: 440,
        },
        {
          x: new Date("2020-01-01"),
          y: 505,
        },
        {
          x: new Date("2020-01-02"),
          y: 414,
        },
        {
          x: new Date("2020-01-03"),
          y: 671,
        },
        {
          x: new Date("2020-01-04"),
          y: 227,
        },
        {
          x: new Date("2020-01-05"),
          y: 413,
        },
        {
          x: new Date("2020-01-06"),
          y: 201,
        },
        {
          x: new Date("2020-01-07"),
          y: 352,
        },
        {
          x: new Date("2020-01-08"),
          y: 752,
        },
        {
          x: new Date("2020-01-09"),
          y: 320,
        },
        {
          x: new Date("2020-01-10"),
          y: 257,
        },
        {
          x: new Date("2020-01-11"),
          y: 160,
        },
      ],
      borderColor: "white",
      borderWidth: 2,
      yAxisID: "blog",
      borderSkipped: "center",
      categoryPercentage: 0.5,
      barPercentage: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "Traffic Sources",
      align: "start",
      font: {
        size: 28,
      },
    },
    legend: {
      position: "bottom",
      labels: {
        fontColor: "#333",
        usePointStyle: true,
      },
    },
  },
  interaction: {
    mode: "point",
  },
  scales: {
    x: {
      type: "time",
      time: {
        unit: "day",
        tooltipFormat: "DD MMM",
        displayFormats: {
          day: "DD MMM",
        },
      },
      offset: true,
      grid: {
        tickColor: "#90A4AE",
        tickWidth: 2,
        borderWidth: 2,
      },
      ticks: {
        align: 'start',
        labelOffset: 40
      },
    },
    blog: {
      type: "linear",
      display: true,
      position: "left",
      beginAtZero: true,
      title: {
        display: true,
        text: "Website Blog",
      },
      min: 0,
      max: 800,
    },
    social: {
      type: "linear",
      display: true,
      position: "right",
      beginAtZero: true,
      title: {
        display: true,
        text: "Social Media",
      },
      min: 0,
      max: 48,
      ticks: {
        stepSize: 4,
      },
    },
  },
};

const ChartJs = () => {
  return (
    <div className="container">
      <div className="chartjs">
        <h1>Chart.js</h1>
        <Chart options={options} data={data} />
      </div>
    </div>
  );
};

export default ChartJs;
