import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function DoughnutChart({ tasks }) {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    if (tasks && tasks.length > 0) {
      const submittedTasks = tasks.filter(task => task.status === 'SUBMITTED TASK').length;
      const lastSubmittedTask = tasks.filter(task => task.status !== 'completed' && task.status !== 'SUBMITTED TASK').length;
      const totalTasks = tasks.length;

      const ctx = chartRef.current.getContext('2d');
      const data = {
        labels: [ 'Submitted Task','Last Submitted Task', 'Total Task'],
        datasets: [
          {
            label: 'Task',
            data: [ submittedTasks,lastSubmittedTask, totalTasks],
            backgroundColor: [ '#FFCA3E','#772F67', '#619ED6'],
            hoverOffset: 4,
          },
        ],
      };
      const config = {
        type: 'doughnut',
        data: data,
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      };

      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      chartInstanceRef.current = new Chart(ctx, config);

      return () => {
        if (chartInstanceRef.current) {
          chartInstanceRef.current.destroy();
        }
      };
    }
  }, [tasks]);

  return (
    <div className="card mb-4">
      <div className="card-header">
        <i className="fas fa-chart-pie me-1"></i>
        Task Status Chart
      </div>
      <div className="card-body" style={{ height: '400px' }}>
        <canvas ref={chartRef} id="doughnutChart"></canvas>
      </div>
      <div className="card-footer small text-muted">Updated Chart</div>
    </div>
  );
}

export default DoughnutChart;
