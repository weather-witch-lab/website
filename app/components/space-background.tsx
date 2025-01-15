'use client'

import { useEffect, useRef } from 'react'

export function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const stars: { x: number; y: number; radius: number; speed: number }[] = []

    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        speed: Math.random() * 0.5
      })
    }

    function drawSidewalkLight(x: number, y: number) {
      // Draw pole
      ctx.beginPath()
      ctx.moveTo(x, y)
      ctx.lineTo(x, y - 600)
      ctx.strokeStyle = '#555'
      ctx.lineWidth = 12
      ctx.stroke()

      // Draw light fixture
      ctx.beginPath()
      ctx.arc(x, y - 600, 60, 0, Math.PI * 2)
      ctx.fillStyle = '#FFD700'
      ctx.fill()

      // Draw light glow
      const gradient = ctx.createRadialGradient(x, y - 600, 0, x, y - 600, 600)
      gradient.addColorStop(0, 'rgba(255, 215, 0, 0.3)')
      gradient.addColorStop(1, 'rgba(255, 215, 0, 0)')
      ctx.beginPath()
      ctx.arc(x, y - 600, 600, 0, Math.PI * 2)
      ctx.fillStyle = gradient
      ctx.fill()
    }

    function drawStars() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw background gradient
      const bgGradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      bgGradient.addColorStop(0, '#000000')
      bgGradient.addColorStop(1, '#0c4a6e')
      ctx.fillStyle = bgGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw stars
      ctx.fillStyle = 'white'
      stars.forEach(star => {
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fill()
        star.y += star.speed
        if (star.y > canvas.height) {
          star.y = 0
        }
      })

      // Draw sidewalk light
      drawSidewalkLight(canvas.width * 0.85, canvas.height + 300)

      requestAnimationFrame(drawStars)
    }

    drawStars()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0" />
}

