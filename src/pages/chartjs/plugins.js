export const plugins = [
  {
    afterDraw: (chart) => {
      const { tooltip } = chart;
      if (tooltip._active && tooltip._active.length) {
        const activePoint = tooltip._active[0];
        const ctx = chart.ctx;
        const x = activePoint.element.x;
        const topY = chart.chartArea.top;
        const bottomY = chart.chartArea.bottom;
        // draw line when hover
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(x, bottomY);
        ctx.lineTo(x, topY);
        ctx.lineWidth = 1;
        ctx.strokeStyle = "#90A4AE";
        ctx.stroke();
        ctx.restore();

        // draw bottom tooltip
        ctx.save();
        ctx.fillStyle = "#eee";
        ctx.fillRect(x - 40, bottomY, 80, 40);
        ctx.restore();
        ctx.fillText(chart.tooltip.title[0], x - 16, bottomY + 20);

        ctx.save();
        ctx.beginPath();
        ctx.lineWidth = 0.5;
        ctx.strokeStyle = "#90A4AE";
        ctx.rect(x - 40, bottomY, 80, 40);
        ctx.stroke();
        ctx.restore();

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(x, bottomY - 8);
        ctx.lineTo(x - 10, bottomY + 2);
        ctx.lineTo(x + 10, bottomY + 2);
        ctx.closePath();
        ctx.fillStyle = "#eee";
        ctx.fill();
        ctx.restore();

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(x - 10, bottomY);
        ctx.lineTo(x, bottomY - 8);
        ctx.lineTo(x + 10, bottomY);
        ctx.strokeStyle = "#90A4AE";
        ctx.stroke();
        ctx.restore();
      }
    },
  },
];
