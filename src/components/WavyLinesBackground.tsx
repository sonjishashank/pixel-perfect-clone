import { useEffect, useRef } from "react";

const WavyLinesBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let time = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawWavyLines = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const lineCount = 40;
      const lineSpacing = canvas.width / lineCount;
      
      ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
      ctx.lineWidth = 1;

      for (let i = 0; i <= lineCount; i++) {
        const baseX = i * lineSpacing;
        
        ctx.beginPath();
        
        for (let y = 0; y <= canvas.height; y += 5) {
          // Create wave effect with different frequencies for each line
          const waveOffset = Math.sin((y * 0.008) + time + (i * 0.3)) * 15;
          const secondaryWave = Math.sin((y * 0.015) + time * 0.7 + (i * 0.2)) * 8;
          const x = baseX + waveOffset + secondaryWave;
          
          if (y === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        
        ctx.stroke();
      }

      time += 0.015;
      animationRef.current = requestAnimationFrame(drawWavyLines);
    };

    resizeCanvas();
    drawWavyLines();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
      style={{ background: "transparent" }}
    />
  );
};

export default WavyLinesBackground;
