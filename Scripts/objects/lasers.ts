module objects {

export class Laser1 extends objects.GameObject {
    // Variables
    // Constructor
    constructor(assetManager:createjs.LoadQueue)
    {
        super(assetManager,"laser1");

        this.Start();
    }
    // Methods
    public Start():void {
        // We may have to scale the laser to an appropriate size

        this.speedX = 0;
        this.speedY = -10;

        this.Reset();
    }
    public Update():void {
        this.Move();
    }
    public Reset():void {
        this.x = -5000;
        this.y = -5000;
    }
    public Move():void {
        this.y += this.speedY;
    }

    public Main():void {}
    public CheckBounds():void {}
}


export class Laser2 extends objects.GameObject {
// Variables
// Constructor
constructor(assetManager:createjs.LoadQueue)
{
super(assetManager,"laser2");

this.Start();
}
// Methods
public Start():void {
// We may have to scale the laser to an appropriate size

this.speedX = 0;
this.speedY = -10;

this.Reset();
}
public Update():void {
this.Move();
}
public Reset():void {
this.x = -5000;
this.y = -5000;
}
public Move():void {
this.y += this.speedY;
}

public Main():void {}
public CheckBounds():void {}
}

export class Laser3 extends objects.GameObject {
// Variables
// Constructor
constructor(assetManager:createjs.LoadQueue)
{
super(assetManager,"laser3");

this.Start();
}
// Methods
public Start():void {
// We may have to scale the laser to an appropriate size

this.speedX = 0;
this.speedY = -10;

this.Reset();
}
public Update():void {
this.Move();
}
public Reset():void {
this.x = -5000;
this.y = -5000;
}
public Move():void {
this.y += this.speedY;
}

public Main():void {}
public CheckBounds():void {}
}
} 



