module objects {
    export abstract class GameObject extends createjs.Bitmap {
        // Variables
        protected speedX: number;
        protected speedY: number;

        public width: number;
        public height: number;
        public halfW: number;   // Half-width; Useful for collision detection
        public halfH: number;   // Half-height
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

    export class Player extends objects.GameObject {
        // Variables
        private _currentScene: Scene;
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
            if(this.y <= this.halfH {
                this.y = this.halfH;
            }


        }
    }
} 