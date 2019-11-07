//create a class for  Circle.
class Circle {
  constructor (x, y, r, startAngle, endAngle, Color) {
    this.x = x;
    this.y = y;
    this.radius = r;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.fillColor = Color;
  }
  //draw circle on the canvas  and fill it
  draw () {
    const c = document.getElementById ('myCanvas');
    const ctx = c.getContext ('2d');
    ctx.beginPath ();
    ctx.arc (this.x, this.y, this.radius, this.startAngle, this.endAngle);
    ctx.fillStyle = this.fillColor;
    ctx.fill ();
  }
}

//Now lets make art
const x = function () {
  return Math.floor (Math.random () * 1450);
};
const y = function () {
  return Math.floor (Math.random () * 1000);
};
const radius = function () {
  return Math.floor (Math.random () * 30);
};

const colours = ['#472b62','#9be3de','#fb5b5a','#fb5b5a','#4dd599','#f1fa3c','#94aa2a','#0c093c','#6b591d','#ff4d00',];

const fillStyle = function () {
  return colours[Math.floor (Math.random () * colours.length)];
};

//draw circle for every half second
setInterval (() => {
  const c1 = new Circle (x (), y (), radius (), 0, 2 * Math.PI, fillStyle ());
  c1.draw ();
}, 100);

//Follow the mouse
document.addEventListener ('mousemove', event => {
  const circleWithMouse = new Circle (event.clientX,event.clientY,radius (),0,2 * Math.PI,fillStyle ());
  return circleWithMouse.draw ();
});






//draw a circle on the canvas  and fill it

/*const c = document.getElementById("myCanvas");
const ctx = c.getContext("2d");                     //getContext("2d") object, which can be used to draw text, lines, boxes, circles, and more - on the canvas.
ctx.beginPath();                                   //Begins a path, or resets the current path
ctx.arc(300,120,70,0,2*Math.PI);                   //Creates an arc/curve (used to create circles, or parts of circles)
ctx.stroke();                                      //draws the path you have defined
ctx.fillStyle = "orange";
ctx.fill();
 */

//---------------**********************************************************************-----------------------*/

/*
//create a class for  Circle.
 class Circle{
  constructor(x, y, r, startAngle, endAngle, fillColor){
    this.x = x
    this.y = y
    this.r=r;
    this.startAngle=startAngle;
    this.endAngle=endAngle;
    this.fillColor=fillColor;
  }
  draw(){
    const c = document.getElementById("myCanvas");
    const ctx = c.getContext("2d"); 
   ctx.beginPath();
   ctx.arc(this.x,this.y,this.r,this.startAngle,this.endAngle);
   ctx.stroke();
   ctx.fillStyle =this.fillColor;
   ctx.fill();
  }
}

const c1 = new Circle(50, 50, 20, 0, 2 * Math.PI, '#000000');
c1.draw(); 

const c2 = new Circle(150, 100, 30, 0, 2 * Math.PI, '#94aa2a');
c2.draw(); 

const c3 = new Circle(250, 150, 40, 0, 2 * Math.PI, '#6b591d');
c3.draw(); */

/*-------------------------------------------------------------------------------*/
