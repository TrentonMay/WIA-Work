/*
     Name:
     Date:
     Class & Section:  WIA-####
     Comments: "HTML5 Canvas Drawing"
 */

window.onload =function(){
    if(Modernizr.canvas) {

        /*******************************************
         HTML5 Shape Drawing Activity
         1.  Setup the canvas and 2d context
         2.  Draw out each shape in the sections below

         ********************************************/

        /*******************************************
         FILE SETUP

         // Setup up 7 different Canvases in index.html one for each problem.
         //Link Modernizr.js
         // Link the main.js file
         // Setup the call to that canvas and get it's 2d context
         //Use Modernizr to verify that your browser supports canvas, include a fallback message


         /*******************************************
         PART 1

         Draw a rectangle starting at point (0 ,0)
         That has a width of 50 px and a heigh of 100px
         Set the color of the rectangle to a shade of blue.
         Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

         Reminder - set the style first then draw.
         ********************************************/
        var theCanvas = document.getElementById("Canvas1");
        var ctx = theCanvas.getContext("2d");
        //Draw Rectangle here

        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;


        ctx.fillStyle = "blue";
        ctx.strokeRect(0, 0, 50, 100);
        ctx.fillRect(0, 0, 50, 100);



        /*******************************************
         PART 2

         Draw a circle starting at point (50 ,50)
         That has a radius of 20 px
         Set the color of the circle to a shade of red and set the alpha to .5
         Set the stroke color to black and use a radius of 30px for this circle.

         Reminder - set the style first then draw.
         Use the arc method
         ********************************************/
        var theCanvas2 = document.getElementById("Canvas2");
        var ctx2 = theCanvas2.getContext("2d");

        //Draw Circle here

        ctx2.strokeStyle = "black";
        ctx2.fillStyle = "rgba(255, 0, 0, .5)";
        ctx2.lineWidth = 3;

        ctx2.beginPath();
        ctx2.arc(50, 50, 30, 0, 2 * Math.PI);
        ctx2.fill();
        ctx2.stroke();


        /*******************************************
         PART 3

         Practice using Path drawing.
         Create a 5-point star shaped pattern using the lineTo method.
         Begin this shape at (100, 100)

         Height and width and color are up to you.

         ********************************************/
        var theCanvas3 = document.getElementById("Canvas3");
        var ctx3 = theCanvas3.getContext("2d");
        //It's kind of a star. Sorry about my poor artistry/symmetry
        //Draw Star here
        ctx3.strokeStyle = "black";
        ctx3.fillStyle = "rgb(0, 255, 0)";

        ctx3.beginPath();
        ctx3.moveTo(100, 100);
        ctx3.lineTo(125, 145);
        ctx3.lineTo(175, 145);
        ctx3.lineTo(125, 175);
        ctx3.lineTo(155, 225);
        ctx3.lineTo(100, 185);
        ctx3.lineTo(55, 225);
        ctx3.lineTo(75, 175);
        ctx3.lineTo(25, 145);
        ctx3.lineTo(75, 145);

        ctx3.closePath();
        ctx3.fill();
        ctx3.stroke();




        /*******************************************
         PART 4

         Practice drawing with Bezier curves.
         Try drawing the top to an umbrella.
         This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

         Position, height, width and color are your choice.
         Do not overlap any other object.

         ********************************************/
        var theCanvas4 = document.getElementById("Canvas4");
        var ctx4 = theCanvas4.getContext("2d");

        //Draw Umbrella top here
        ctx4.strokeStyle = "red";
        ctx4.fillStyle = "rgb(0, 255, 100)";

        ctx4.beginPath();

        ctx4.arc(theCanvas4.width/2, theCanvas4.height/2, 100,1 * Math.PI, 0 * Math.PI);


        ctx4.moveTo(60,50);
        ctx4.bezierCurveTo(50,75, 50, 100, 60, theCanvas4.height/2 + 10);

        ctx4.moveTo(190,50);
        ctx4.bezierCurveTo(200,75, 200, 100, 190, theCanvas4.height/2 + 10);

        ctx4.moveTo(100,28);
        ctx4.bezierCurveTo(80,75, 80, 100, 100, theCanvas4.height/2 + 10);

        ctx4.moveTo(150,28);
        ctx4.bezierCurveTo(170,75, 170, 100, 150, theCanvas4.height/2 + 10);

        ctx4.stroke();


        /*******************************************
         PART 5

         Practice using text.
         Draw text into your canvas.  It can said whatever you would like in any color.

         ********************************************/
        var theCanvas5 = document.getElementById("Canvas5");
        var ctx5 = theCanvas5.getContext("2d");
        //Draw text here

        var words = "World Of Warcraft: Legion";

        ctx5.font = "15pt Arial";
        ctx5.fillStyle = "rgb(30, 85, 15)";
        ctx5.fillText(words, 0, theCanvas5.height/2 );


        /*******************************************
         PART 6

         Pixel manipulation.
         Draw the image logo.png into the canvas in the following 3 ways.
         1. The image exactly as it is.
         2. Shrink the image by 50%
         3. Slice a section of the logo out and draw that onto the canvas.

         Reminder to use the drawImage method for all 3 of the ways.

         ********************************************/
        var theCanvas6 = document.getElementById("Canvas6");
        var ctx6 = theCanvas6.getContext("2d");
        //Draw images here

        var logo = document.getElementById("img1");
        ctx6.drawImage(logo, 1200, 600, 200, 200, 1700 ,400, 300, 300 );
        ctx6.drawImage(logo, 0, 500, logo.width, logo.height );
        ctx6.drawImage(logo, 0, 0, logo.width/2, logo.height/2 );


        /*******************************************
         PART 7

         Putting it all together.

         Using a combination of all the methods.
         Create a complex scene.
         You must use at least 3 different methods.

         ********************************************/
        var theCanvas7 = document.getElementById("Canvas7");
        var ctx7 = theCanvas7.getContext("2d");
        // Draw scene here

        var img2 = document.getElementById("img2");
        var grad = ctx7.createLinearGradient(theCanvas7.width/2, theCanvas7.height/2, 20, 20);



        ctx7.drawImage(img2, 0, 0);

        ctx7.strokeStyle ="black";
        ctx7.lineWidth = 1;
        ctx7.beginPath();
        ctx7.arc(theCanvas7.width/2, theCanvas7.height/2, 125, 0, 2 * Math.PI);
        ctx7.clip();

        setInterval(function(){
            var color = 200;

            color = color * Math.random();

            grad.addColorStop(0, 'hsl(' + color + ', 80%, 50%)');
            grad.addColorStop(.5, 'hsl(' + color + ', 80%, 50%)');
            grad.addColorStop(1, 'hsl(' + color + ', 80%, 50%)');

            ctx7.strokeStyle = "green";
            ctx7.fillStyle = grad;
            ctx7.fillRect(theCanvas7.width/2/2, theCanvas7.height/2/2, theCanvas7.width/2, theCanvas7.height/2);
            ctx7.strokeRect(theCanvas7.width/2/2, theCanvas7.height/2/2, theCanvas7.width/2, theCanvas7.height/2);
        }, 300);

        setInterval(function(){

            var color2 = 120;

            color2 = color2 * Math.random();

            ctx7.font = "14pt Georgia";
            ctx7.fillStyle = 'hsl(' + color2 + ', 80%, 50%)';
            ctx7.fillText(words, 140, 255);

        }, 200);

    }
};
