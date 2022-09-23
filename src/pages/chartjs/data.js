export const data = {
  datasets: [
    {
      type: "line",
      label: "Social Media",
      borderColor: "rgb(104,228,151)",
      borderWidth: 4,
      backgroundColor: "rgb(104,228,151)",
      fill: false,
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
      pointStyle: "circle",
      pointRadius: 6,
      pointHoverRadius: 9,
      pointHoverBackgroundColor: "rgb(104,228,151)",
      pointHoverBorderColor: "#fff",
      pointBorderColor: "#fff",
      pointHoverBorderWidth: 2,
      pointBorderWidth: 2,
      legend: {},
    },
    {
      type: "bar",
      label: "Website Blog",
      borderColor: "#fff",
      borderWidth: 2,
      backgroundColor: "rgb(40,160,251)",
      hoverBackgroundColor: "rgba(40,160,251, 0.65)",
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
      yAxisID: "blog",
      borderSkipped: "center",
      categoryPercentage: 0.75,
      barPercentage: 1,
    },
  ],
};
