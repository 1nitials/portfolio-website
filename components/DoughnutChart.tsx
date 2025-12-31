'use client'
import { useEffect, useRef, useState } from 'react'

export default function DoughnutChart() {
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInstance = useRef<any>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (chartRef.current) {
      observer.observe(chartRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible && chartRef.current) {
      const loadChart = async () => {
        const { Chart } = await import('chart.js/auto')
        const ctx = chartRef.current?.getContext('2d')
        if (ctx) {
          if (chartInstance.current) {
            chartInstance.current.destroy()
          }

          chartInstance.current = new Chart(ctx, {
            type: 'doughnut',
            data: {
              labels: ['Frontend', 'Backend', 'Design'],
              datasets: [{
                data: [40, 35, 25],
                backgroundColor: ['#3B82F6', '#10B981', '#F59E0B'],
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
          })
        }
      }
      
      loadChart()
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  }, [isVisible])

  return (
    <div className="w-full h-64">
      <canvas ref={chartRef}></canvas>
    </div>
  )
}