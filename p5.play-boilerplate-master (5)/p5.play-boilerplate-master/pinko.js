class Pinko {
    constructor(x,y,r) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.circle(x,y,10,options);
      this.r=10;
      this.color=color(random(0,255), random(0,255) , random(0,255));
      World.add(world, this.body);
      
    }
    display(){
      var pos = this.body.position;
      
      push();
      translate(pos.x, pos.y);
      
      //imageMode (CENTER):
      nostroke();
      fill(this.color)
      ellipseMode (RADIUS);
      ellipse(pos.x,pos.y, this.r, this.r);
      pop();
   
     
    }
  };
