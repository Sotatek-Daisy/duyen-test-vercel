export const options = {
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
    tooltips: {
      mode: "x",
      intersect: false,
    },
    hover: {
      mode: "index",
      intersect: false,
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
          align: "start",
          labelOffset: 40,
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