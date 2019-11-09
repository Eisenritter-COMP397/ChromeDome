module objects {

    // Scene Super Class
    export class Scene extends createjs.Container {
        // Variables
        public assetManager: createjs.LoadQueue;
        public sceneSize: math.Vector2 = new math.Vector2(800,640);
        public sceneCenter: math.Vector2 =  new math.Vector2(400,320);
        // Constructior
        constructor(assetManager: createjs.LoadQueue) {
            super();
            this.assetManager = assetManager;

        }
        // Methods
        public Start(): void { 
        }
        public Update(): void { }
        public Main(): void { }
    }
}