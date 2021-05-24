class Chain{
//properties
constructor(bodyA,bodyB){
    //JSON format
    var options={
        bodyA:bodyA,
        bodyB:bodyB,
        length:10,
        stiffness:0.05
    };
  this.chain=Constraint.create(options)
  World.add(world,this.chain);
}
    


//functions
display(){

    stroke (0)
    line (this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y);

}

}
