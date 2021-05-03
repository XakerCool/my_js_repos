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
            context.arc(0, 0, 30, Math.PI, 0);
            context.stroke();

            context.translate(30, 0);
        
            context.moveTo(0,0);
            context.lineTo(0, 200);
            context.stroke();
        
            context.translate(0, 200);
        
            context.moveTo(0,0);
            context.lineTo(20, 0);
            context.stroke();
        
            context.translate(20, 0);
        
            context.moveTo(0,0);
            context.lineTo(0, -100);
            context.stroke();

            context.translate(20, -100);
        
            context.arc(0, 0, 20, Math.PI, 0);
            context.stroke();

            context.translate(20, 0);
        
            context.moveTo(0,0);
            context.lineTo(0, 110);
            context.stroke();

            context.translate(-20, 110);
        
            context.arc(0, 0, 20, 0, Math.PI / 2);
            context.stroke();

            context.translate(0, 20);
        
            context.moveTo(0,0);
            context.lineTo(-40, 0);
            context.stroke();

            context.translate(-40, 0);
        
            context.moveTo(0,0);
            context.lineTo(0, 100);
            context.stroke();

            context.translate(0, 100);
        
            context.moveTo(0,0);
            context.lineTo(-60, 0);
            context.stroke();

            context.translate(-60, 0);
        
            context.moveTo(0,0);
            context.lineTo(0, -170);
            context.stroke();

            context.translate(0, -170);
        
            context.moveTo(0,0);
            context.lineTo(-40, 0);
            context.stroke();

            context.translate(-40, -20);
        
            context.arc(0, 0, 20, Math.PI / 2, Math.PI);
            context.stroke();

            context.translate(-20, 0);
        
            context.moveTo(0,0);
            context.lineTo(0, -60);
            context.stroke();

            context.translate(20, -60);
        
            context.arc(0, 0, 20, Math.PI, 0);
            context.stroke();

            context.translate(20, 0);
        
            context.moveTo(0,0);
            context.lineTo(0, 50);
            context.stroke();

            context.translate(0, 50);
        
            context.moveTo(0,0);
            context.lineTo(20, 0);
            context.stroke();

            context.translate(20, 0);
        
            context.moveTo(0,0);
            context.lineTo(0, -130);
            context.stroke();
        context.closePath();

    context.restore();
});