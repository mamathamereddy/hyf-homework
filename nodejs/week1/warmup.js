class Circle{
  constructor(radius){      
    this.radius=radius
  }
  getDiameter(){              //d=2 x radius
    const diameter=2*this.radius;
     return diameter;
  }
getCircumference(){               //C=2πr
  const circumference=2*Math.PI*this.radius;
  return circumference
}
getArea(){                             //A=πr2
  const area=Math.PI*Math.pow(this.radius,2)
  return area;

}
};


const circle = new Circle(10);
console.log("Diameter of circle is:",circle.getDiameter()); 
//console.log("Circumference of circle is:",circle.getCircumference().toFixed(2));
//console.log("Area of circle is",circle.getArea().toFixed(2));

const smallcircle = new Circle(4);
console.log("Circumference of smallcircle is:",smallcircle.getCircumference().toFixed(2)); 

const bigcircle = new Circle(25);
console.log("Area of bigcircle is",bigcircle.getArea().toFixed(2)); 
