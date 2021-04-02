class Bob {
    constructor(x,y,radius) {
      var options = {
          'restitution':1,
          'friction':0,
          'density':7.8
      }
      
      this.x=x;
      this.y=y;
      this.radius=radius;
      this.body = Bodies.circle(x, y,25,options);
      World.add(world,this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      
      
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      fill(254,0,255);
      ellipse(0,0,this.radius,this.radius);
      pop();
    }
  };
  