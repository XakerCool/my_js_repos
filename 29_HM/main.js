
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


        //разметка для удобства
        // context.beginPath();
        //     context.arc(0, 0, xCenter / 2, 0, 2 * Math.PI);
        //     context.moveTo(0, 0);
        //     context.lineTo(0, 1000);
        //     context.lineTo(0, -1000);
        //     context.lineTo(1000, 0);
        //     context.lineTo(-1000, 0);
            
        //     context.moveTo(0, 0);
        //     context.lineTo(500, 500);
        //     context.moveTo(0, 0);
        //     context.lineTo(-500, -500);

        //     context.moveTo(0, 0);
        //     context.lineTo(-500, 500);
        //     context.moveTo(0, 0);
        //     context.lineTo(500, -500);

        //     context.stroke();
        // context.closePath();

        context.scale(3, 3);

        // 4 параллельных треугольника
        // context.translate(0, -yCenter / 6);
        // createRect(context);

        // context.translate(xCenter / 6, yCenter / 6);
        // createRect(context);

        // context.translate(-xCenter / 6, yCenter / 6);
        // createRect(context);

        // context.translate(-xCenter / 6, -yCenter / 6);
        // createRect(context);


        context.translate(0, -yCenter / 6);
        createRect(context);

        context.translate((xCenter / 2) / 4.3, (yCenter / 6) / 3.5);
        createRect(context);
    context.restore();
    context.save();
        context.translate(xCenter, yCenter);
        context.scale(3, 3);

        context.translate(0, -yCenter / 6);
        context.translate(xCenter / 6, yCenter / 6);
        createRect(context);

        context.translate(-xCenter / 20, yCenter / 8.5);
        createRect(context);
    context.restore();

    context.save();
        context.translate(xCenter, yCenter);
        context.scale(3, 3);

        context.translate(0, -yCenter / 6);
        context.translate(xCenter / 6, yCenter / 6);
        context.translate(-xCenter / 6, yCenter / 6);
        createRect(context);

        context.translate(-xCenter / 8.5, -yCenter / 20);
        createRect(context);
    context.restore();

    context.save();
        context.translate(xCenter, yCenter);
        context.scale(3, 3);

        context.translate(0, -yCenter / 6);
        context.translate(xCenter / 6, yCenter / 6);
        context.translate(-xCenter / 6, yCenter / 6);
        context.translate(-xCenter / 6, -yCenter / 6);
        createRect(context);

        context.translate(xCenter / 20, -yCenter / 8.5);
        createRect(context);
    context.restore();
        
    
});

const createRect = (context) => {
    context.beginPath();
        context.moveTo(10, 0);
        context.lineTo(0, -10);
        context.stroke();
        context.moveTo(0, -10);
        context.lineTo(-10, 0);
        context.stroke();
        context.moveTo(10, 0);
        context.lineTo(-10, 0);
        context.stroke();
    context.closePath();
}