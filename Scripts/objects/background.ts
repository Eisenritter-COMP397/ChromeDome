module objects{
    export class Background extends createjs.Bitmap{
        // Variables
        // Constructor
        constructor(assetManager:createjs.LoadQueue,imageString: string){
            super(assetManager.getResult(imageString));
        }
        // Methods
        public Start():void{}
        public Update():void{}
    }
    export class AnimatedBackground extends createjs.Bitmap{
        // Variables
        private speedY:number;  // Speed of background scrolling on Y-axis
        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager.getResult("FlameEffect"));

            this.Start();
        }
        // Functions 
        // Initializing our variables with default values
        public Start():void {
            this.speedY = 0.5;
            this.Reset();
        }
        // Updated 60 times per second (60FPS)
        public Update():void {
            this.Move();
            this.CheckBound();
        }
        // Resets the position of the object
        public Reset():void {
            this.y = 400;
            this.alpha=0.5;
        }
        // Move the object
        public Move():void {
            this.y -= this.speedY;
        }
        // Collision Detection 
        public CheckBound():void {
            if(this.y <= 300) {
                this.Reset();
            }
        }
    }

    export class Image extends createjs.Bitmap{
        // Variables
        // Constructor
        constructor(assetManager:createjs.LoadQueue, imageString: string, 
            x:number = 0, y:number = 0){
            super(assetManager.getResult(imageString));
        }
        // Methods
        public Start():void{}
        public Update():void{}
    }
}