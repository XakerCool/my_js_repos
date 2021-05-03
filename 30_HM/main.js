window.addEventListener("load", () => {
    const canvas = $("canvas", { 
        width: 800,
        height: 800
     });

    document.body.append(canvas);
    
    const xCenter = canvas.offsetWidth / 2;
    const yCenter = canvas.offsetHeight / 2;
    /**
   * @type {CanvasRenderingContext2D}
   */
    const context = canvas.getContext("2d");
    context.save();
        context.translate(xCenter, yCenter);
        context.beginPath();
            context.arc(0, 0, 50, Math.PI, 0);
            context.stroke();
        context.closePath();
        
        context.translate(50, 0);
        
        context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(50, 0);
            context.stroke();
        context.closePath();
        
        context.translate(50, 0);
        
        context.beginPath();
            context.arc(0, 20, 20, 3 * Math.PI / 2, 0);
            context.stroke();
        context.closePath();

        context.translate(20, 20);

        context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(-50, 0);
            context.stroke();
        context.closePath();

        context.translate(-50, 0);

        context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(0, 5);
            context.stroke();
        context.closePath();

        context.translate(0, 5);

        context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(40, 0);
            context.stroke();
        context.closePath();

        context.translate(30, 0);

        context.beginPath();
            context.arc(0, 0, 10, 0, Math.PI / 2);
            context.stroke();
        context.closePath();

        context.translate(0, 10);

        context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(-50, 0);
            context.stroke();
        context.closePath();

        context.translate(-50, 0);

        context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(0, 100);
            context.stroke();
        context.closePath();

        context.translate(-30, 100);

        context.beginPath();
            context.arc(0, 0, 30, 0, Math.PI / 2);
            context.stroke();
        context.closePath();

        context.translate(0, 30);

        context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(-150, 0);
            context.stroke();
        context.closePath();

        context.translate(-150, 0);

        context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(-20, -5);
            context.stroke();
        context.closePath();

        context.translate(-20, -5);

        context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(20, -10);
            context.stroke();
        context.closePath();

        context.translate(20, -10);

        context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(60, 0);
            context.stroke();
        context.closePath();

        context.translate(60, -20);

        context.beginPath();
            context.arc(0, 0, 20, 0, Math.PI / 2);
            context.stroke();
        context.closePath();

        context.translate(20, 0);

        context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(0, -130);
            context.stroke();
        context.closePath();

        context.translate(10, 35);

        context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(0, 35);
            context.stroke();
        context.closePath();

        context.translate(0, 35);

        context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(20, 0);
            context.stroke();
        context.closePath();

        context.translate(20, 0);

        context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(0, -10);
            context.stroke();
        context.closePath();

        context.translate(0, -10);

        context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(-10, 0);
            context.stroke();
        context.closePath();

        context.translate(-10, 0);

        context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(0, -25);
            context.stroke();
        context.closePath();

        context.translate(30, -25);

        context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(0, 35);
            context.stroke();
        context.closePath();

        context.translate(0, 35);

        context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(20, 0);
            context.stroke();
        context.closePath();

        context.translate(20, 0);

        context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(0, -10);
            context.stroke();
        context.closePath();

        context.translate(0, -10);

        context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(-10, 0);
            context.stroke();
        context.closePath();

        context.translate(-10, 0);

        context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(0, -25);
            context.stroke();
        context.closePath();

        context.translate(20, -120);

        context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(50, 0);
            context.stroke();
        context.closePath();

        context.translate(50, 0);

        context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(0, 10);
            context.stroke();
        context.closePath();

        context.translate(0, 10);

        context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(-10, 0);
            context.stroke();
        context.closePath();

        context.translate(-10, 0);

        context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(0, -5);
            context.stroke();
        context.closePath();

        context.translate(0, -5);

        context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(-40, 0);
            context.stroke();
        context.closePath();

        context.translate(-40, 0);

        context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(0, -5);
            context.stroke();
        context.closePath();

        context.translate(-15, -100);

        context.beginPath();
            context.arc(0, 0, 10, 0, Math.PI * 2);
            context.stroke();
        context.closePath();

    context.restore();
});