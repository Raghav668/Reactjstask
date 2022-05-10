class cars {

    constructor(speed,distance){
        this.speed = speed
        this.distance =distance
    }

    accelerate(){
        return this.speed*this.distance
    }
}

const obj1 = new cars(10,10) //object duplicates
console.log(obj1.accelerate())

const obj2 = new cars(2,2)
console.log(obj2.accelerate())
console.log(obj1.distance)

class bikes extends cars{
    constructor(speed,distance,cost){
        super(speed,distance)
        this.cost = cost

    }

    total(){
        return this.speed*this.distance*this.cost
    }
}

const bike1 = new bikes(10,5,100)
console.log(bike1.total())