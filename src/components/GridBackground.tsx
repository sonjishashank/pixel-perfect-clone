import { useEffect, useRef } from "react";

const GridBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = 600;
      drawGrid();
    };

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const gridSize = 50;
      const vanishingPointY = canvas.height * 0.3;
      const perspective = 0.003;

      ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
      ctx.lineWidth = 1;

      // Vertical lines with perspective
      const numVerticalLines = Math.ceil(canvas.width / gridSize) + 2;
      const centerX = canvas.width / 2;

      for (let i = -numVerticalLines / 2; i <= numVerticalLines / 2; i++) {
        const baseX = centerX + i * gridSize;
        
        ctx.beginPath();
        
        for (let y = 0; y <= canvas.height; y += 5) {
          const distanceFromCenter = Math.abs(baseX - centerX);
          const perspectiveOffset = (y - vanishingPointY) * perspective * (baseX - centerX);
          const x = baseX + perspectiveOffset;
          
          if (y === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        
        ctx.stroke();
      }

      // Horizontal lines
      const numHorizontalLines = Math.ceil(canvas.height / gridSize);
      
      for (let i = 0; i <= numHorizontalLines; i++) {
        const y = i * gridSize;
        const perspectiveFactor = 1 + (y - vanishingPointY) * perspective * 0.5;
        
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    return () => {
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

export default GridBackground;
