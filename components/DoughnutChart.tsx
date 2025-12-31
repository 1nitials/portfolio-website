'use client'
import { useEffect, useRef } from 'react'
import { Chart, ChartConfiguration } from 'chart.js/auto'

export default function DoughnutChart() {
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInstance = useRef<Chart | null>(null)

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d')
      if (ctx) {
        // Destroy existing chart if it exists
        if (chartInstance.current) {
          chartInstance.current.destroy()
        }

        const config: ChartConfiguration = {
          type: 'doughnut',
          data: {
            labels: ['Frontend', 'Backend', 'Design'],
            datasets: [{
              data: [40, 35, 25],
              backgroundColor: [
                '#3B82F6',
                '#10B981', 
                '#F59E0B'
              ],
              borderWidth: 0
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'bottom',
                labels: {
                  padding: 30,
                  usePointStyle: true
                }
              }
            }
          }
        }

        chartInstance.current = new Chart(ctx, config)
      }
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  }, [])

  return (
    <div className="w-full h-64">
      <canvas ref={chartRef}></canvas>
    </div>
  )
}