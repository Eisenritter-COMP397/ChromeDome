module objects {
    // Game Object Super Class
    export abstract class GameObject extends createjs.Bitmap {
        // Variables
        protected speedX: number;
        protected speedY: number;
        public isColliding: boolean;   // collision check boolean

        public width: number;
        public height: number;
        public halfW: number;   // Half-width; Useful for collision detection
        public halfH: number;   // Half-height

        public _currentScene: Scene;    // this gets the current scene properties
        // Constructor
        constructor(assetManager:createjs.LoadQueue, imageString:string) {
            super(assetManager.getResult(imageString));

            this.name = imageString;

            this.Init();
        }
        // Methods 
        private Init():void {
            // Initialize all the properties of my object
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.halfW = this.width * 0.5;
            this.halfH = this.height * 0.5;

            // Registration Points
            this.regX = this.halfW;
            this.regY = this.halfH;

            this.isColliding = false;
        }

        public Start():void {}
        public Update():void {}
        public Reset():void {}
        public Move():void {}
        public CheckBound():void {}
    }

    // Player Game Objects
    export class Player extends objects.GameObject {
        // Variables
        private laserSpawn:math.Vector2;
        public isDead:boolean;
        // Constructor
        constructor(assetManager:createjs.LoadQueue,scene: Scene) {
            super(assetManager, "Player");
            this._currentScene=scene;
            this.Start();

        }
        // Methods
        public Start():void {
            this.y = this._currentScene.sceneSize.y-this.halfH;
            this.x = this._currentScene.sceneCenter.x;
            this.isDead = false;
        }

        public Update():void {
            this.Move();
            this.CheckBound();
            this.LaserFire1();
            this.LaserFire2();
            this.LaserFire3();
        }

        public Reset():void {}

        public Move():void {
            if(managers.Game.keyboardManager.moveLeft)
            {
                this.x -= 2;
            }
            if(managers.Game.keyboardManager.moveRight)
            {
                this.x += 2;
            }
            if(managers.Game.keyboardManager.moveUp)
            {
                this.y -= 2;
            }
            if(managers.Game.keyboardManager.moveDown)
            {
                this.y += 2;
            }
        }


        public CheckBound():void {
            // Right boundary
            if(this.x >= this._currentScene.sceneSize.x - this.halfW) {
                this.x = this._currentScene.sceneSize.x - this.halfW;
            }

            // Left boundary
            if(this.x <= this.halfW) {
                this.x = this.halfW;
            }

            // Bottom boundary
            if(this.y >= this._currentScene.sceneSize.y - this.halfH) {
                this.y = this._currentScene.sceneSize.y - this.halfH;
            }

            // Top boundary
            if(this.y <= this.halfH) {
                this.y = this.halfH;
            }
        }

        public LaserFire2():void {
            if(!this.isDead) {
                let ticker:number = createjs.Ticker.getTicks();

                if((managers.Game.keyboardManager.shoot2) && (ticker % 10 == 0)) {
                    this.laserSpawn = new math.Vector2(this.x, this.y - this.halfH);
                    let currentLaser2 = managers.Game.laserManager2.CurrentLaser2;
                    let laser = managers.Game.laserManager.Lasers[currentLaser2];
                    laser.x = this.laserSpawn.x;
                    laser.y = this.laserSpawn.y;
                    managers.Game.laserManager2.CurrentLaser2++;
                    if(managers.Game.laserManager2.CurrentLaser2 > 49) {
                        managers.Game.laserManager2.CurrentLaser2 = 0;
                    }
            }
        }
    }
    public LaserFire3():void {
        if(!this.isDead) {
            let ticker:number = createjs.Ticker.getTicks();

            if((managers.Game.keyboardManager.shoot3) && (ticker % 10 == 0)) {
                this.laserSpawn = new math.Vector2(this.x, this.y - this.halfH);
                let currentLaser3 = managers.Game.laserManager3.CurrentLaser3;
                let laser = managers.Game.laserManager3.Lasers[currentLaser3];
                laser.x = this.laserSpawn.x;
                laser.y = this.laserSpawn.y;
                managers.Game.laserManager3.CurrentLaser3++;
                if(managers.Game.laserManager3.CurrentLaser3 > 49) {
                    managers.Game.laserManager3.CurrentLaser3 = 0;
                }
        }
    }
}
        public LaserFire1():void {
            if(!this.isDead) {
                let ticker:number = createjs.Ticker.getTicks();

                // Player is trying to shoot the laser
                if((managers.Game.keyboardManager.shoot1) && (ticker % 10 == 0)) {
                    this.laserSpawn = new math.Vector2(this.x, this.y - this.halfH);
                    let currentLaser = managers.Game.laserManager.CurrentLaser;
                    let laser = managers.Game.laserManager.Lasers[currentLaser];
                    laser.x = this.laserSpawn.x;
                    laser.y = this.laserSpawn.y;
                    managers.Game.laserManager.CurrentLaser++;
                    if(managers.Game.laserManager.CurrentLaser > 49) {
                        managers.Game.laserManager.CurrentLaser = 0;
                    }

                    // Play a laser sound
                }
            }
        }
    }


} 


