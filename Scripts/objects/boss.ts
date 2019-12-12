module objects {
    /*
    // Enemy Game Object
    export class Boss extends objects.GameObject {
        //Variables
        public isDead: boolean = false;

        private _horizontalSpeed:number;
       // private _bulletSpawn: Utils.Vector2;
        

        //Constructors
        constructor(assetManager: createjs.LoadQueue) {
            super("bosstank");
            
            // this._fireRate = 60;
            //this.transform = new components.Transform(new math.Vector2(this.x, this.y));
            this.Start();
        }

        //Methods

        public Start(): void{
            super.Start();

           // this._bulletSpawn = new Utils.Vector2(0, 2 + this.halfW)
            //this.x = Math.floor(Math.random()* (this._currentScene.sceneSize.y - this.halfW) + this.halfW);
            this.y = 75;
           // this.Reset();
        }

        public Update(): void {
            this.Move();
            this.CheckBound();
            super.Update();
        }

        public Move():void {
            
            this.x += this._horizontalSpeed;

            if(this._horizontalSpeed == 0){
                this._horizontalSpeed = Math.floor((Math.random()*4)-2); // speed from -2 to 2
            }
        }

        public CheckBound():void {

           /*
            // Right boundary
            if(this.x >= this._currentScene.sceneSize.x - this.halfW) {
                this.x = this._currentScene.sceneSize.x - this.halfW;
                this.Reset();
            }

            // Left boundary
            if(this.x <= this.halfW) {
                this.x = this.halfW;
                this.Reset();
            }
            

        }

        public Reset():void {
            super.Reset();
            this._horizontalSpeed = Math.floor((Math.random()*4)+6);
            // this.isColliding = false;

        }
        
    }*/
}