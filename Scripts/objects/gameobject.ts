module objects {
    // Game Object Super Class
    export abstract class GameObject extends createjs.Bitmap {
        // Variables
        protected speedX: number;
        protected speedY: number;

        public width: number;
        public height: number;
        public halfW: number;   // Half-width; Useful for collision detection
        public halfH: number;   // Half-height

        public _currentScene: Scene;
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
        }
        public Update():void {
            this.Move();
            this.CheckBound();
        }
        public Reset():void {}
        public Move():void {
            if(objects.Game.keyboardManager.moveLeft)
            {
                this.x -= 1.5;
            }
            if(objects.Game.keyboardManager.moveRight)
            {
                this.x += 1.5;
            }
            if(objects.Game.keyboardManager.moveUp)
            {
                this.y -= 1.5;
            }
            if(objects.Game.keyboardManager.moveDown)
            {
                this.y += 1.5;
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
    }
    // Enemy Game Object
    export class Enemy extends objects.GameObject {
        // Variables
        public isDead: boolean = false;
        // Constructor
        constructor(assetManager:createjs.LoadQueue,scene: Scene) {
            super(assetManager, "enemy");
            this._currentScene=scene;
            this.Start();
        }
        // Methods
        public Start():void {
            this.x = Math.floor(Math.random() * this._currentScene.sceneSize.x) + 50;
            this.y = Math.floor(Math.random() * - this._currentScene.sceneSize.y) - 50;
        }
        public Update():void {
            this.Move();
            this.CheckBounds();
        }
        public Reset():void {
            this.isDead = true;
            this.x = this._currentScene.sceneCenter.x-500;
            this.y = this._currentScene.sceneCenter.y-500;
        }
        public Move():void {
            this.y += 5;
        }
        public CheckBounds():void {
            if(this.y >= this._currentScene.sceneSize.y + this.halfH+5) {
                this.y = -50;
            }
        }
    }


} 