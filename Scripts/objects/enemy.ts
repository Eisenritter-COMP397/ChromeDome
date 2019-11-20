module objects {
    // Enemy Game Object
    export class Enemy extends objects.GameObject {
        // Variables
        public isDead: boolean = false;
        public transform: components.Transform;
        // Constructor
        constructor(assetManager: createjs.LoadQueue, scene: Scene) {
            super(assetManager, "Enemy");
            this._currentScene = scene;
            this.transform = new components.Transform(new math.Vector2(this.x, this.y));
            this.Start();
        }
        // Methods
        public Start(): void {
            this.x = Math.floor(Math.random() * this._currentScene.sceneSize.x);
            this.y = Math.floor(Math.random() * -this._currentScene.sceneSize.y);

        }
        public Update(): void {
            this.Move();
            this.CheckBounds();
        }
        public Reset(): void {
            this.isDead = false;
            this.x = Math.floor(Math.random() * this._currentScene.sceneSize.x);
            this.y = Math.floor(Math.random() * -this._currentScene.sceneSize.y);

        }
        public Move(): void {
            this.y += 2.5;
        }
        public CheckBounds(): void {
            if (this.y >= this._currentScene.sceneSize.y + this.halfH + 5) {
                this.Reset();
            }
        }
    }
    // Enemy Game Object
    export class Enemy2 extends objects.GameObject {
        // Variables
        public isDead: boolean = false;
        public transform: components.Transform;
        // Constructor
        constructor(assetManager: createjs.LoadQueue, scene: Scene) {
            super(assetManager, "Enemy");
            this._currentScene = scene;
            this.transform = new components.Transform(new math.Vector2(this.x, this.y));
            this.Start();
        }
        // Methods
        public Start(): void {
            this.x = Math.floor(Math.random() * this._currentScene.sceneSize.x);
            this.y = Math.floor(Math.random() * -this._currentScene.sceneSize.y);

        }
        public Update(): void {
            this.Move();
            this.CheckBounds();
        }
        public Reset(): void {
            this.isDead = false;
            this.x = Math.floor(Math.random() * this._currentScene.sceneSize.x);
            this.y = Math.floor(Math.random() * -this._currentScene.sceneSize.y);

        }
        public Move(): void {
            this.y += 2.5;
            this.x += 2.5;
        }
        public CheckBounds(): void {
            if (this.y >= this._currentScene.sceneSize.y + this.halfH + 5) {
                this.Reset();
            }
        }
    }


}