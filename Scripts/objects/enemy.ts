module objects {
    // Enemy Game Object
    export class Enemy extends objects.GameObject {
        // Variables
        private turret: objects.GameObject;
        public isDead: boolean = false;

        // Constructor
        constructor(assetManager: createjs.LoadQueue, position: math.Vector2) {
            super("DummyEnemy");
            this.name = "DummyEnemy"
            this.scaleX = 0.5;
            this.scaleY=0.5;
            this.x = position.x;
            this.y = position.y;
            //this.transform = new components.Transform(new math.Vector2(this.x, this.y));
            this.Start();
        }
        // Methods
        public Start(): void {
            this.turret = new objects.PlayerTurret(managers.Game.assetManager, this);
            this.turret.Start();
            /*
            this.x = Math.floor(Math.random() * this._currentScene.sceneSize.x);
            this.y = Math.floor(Math.random() * -this._currentScene.sceneSize.y);
            */

        }
        public Update(): void {
            this.Move();
            this.CheckBounds();
        }
        public Reset(): void {
            this.isDead = false;
            this.x = -5000;
            this.y = -5000;
        }
        public Move(): void {
        }
        public CheckBounds(): void {
            /*
            if (this.y >= this._currentScene.sceneSize.y + this.halfH + 5) {
                this.Reset();
            }
            */
        }
    }
    // Enemy Game Object
    export class Enemy2 extends objects.GameObject {
        // Variables
        public isDead: boolean = false;
        //private transform: components.Transform;
        // Constructor
        constructor(assetManager: createjs.LoadQueue, scene: Scene) {
            super("Enemy");
            //this.transform = new components.Transform(new math.Vector2(this.x, this.y));
            this.Start();
        }
        // Methods
        public Start(): void {
           /*ssss
            this.x = Math.floor(Math.random() * this._currentScene.sceneSize.x);
            this.y = Math.floor(Math.random() * -this._currentScene.sceneSize.y);
            */

        }
        public Update(): void {
            this.Move();
            this.CheckBounds();
        }
        public Reset(): void {
            this.isDead = false;
            this.x = -5000;
            this.y = -5000;

        }
        public Move(): void {
            this.y += 2.5;
            this.x += 2.5;
        }
        public CheckBounds(): void {
            /*
            if (this.y >= this._currentScene.sceneSize.y + this.halfH + 5) {
                this.Reset();
            }
            */
        }
    }

    export class Enemy3 extends objects.GameObject {
        // Variables
        public isDead: boolean = false;
        //public transform: components.Transform;
        // Constructor
        constructor(assetManager: createjs.LoadQueue, scene: Scene) {
            super( "Enemy");
            //this._currentScene = scene;
            //this.transform = new components.Transform(new math.Vector2(this.x, this.y));
            this.Start();
        }
        // Methods
        public Start(): void {
            /*
            this.x = Math.floor(Math.random() * this._currentScene.sceneSize.x);
            this.y = Math.floor(Math.random() * -this._currentScene.sceneSize.y);
            */

        }
        public Update(): void {
            this.Move();
            this.CheckBounds();
        }
        public Reset(): void {
            this.isDead = false;
            /*
            this.x = Math.floor(Math.random() * this._currentScene.sceneSize.x);
            this.y = Math.floor(Math.random() * -this._currentScene.sceneSize.y);
            */

        }
        public Move(): void {
            this.y -= 2.5;
            this.x -= 2.5;
        }
        public CheckBounds(): void {
            /*
            if (this.y >= this._currentScene.sceneSize.y + this.halfH + 5) {
                this.Reset();
            }
            */
        }
    }


}