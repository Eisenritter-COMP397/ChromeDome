module objects {

    // Scene Super Class
    export class Scene extends createjs.Container {
        // Variables
        public sceneWidth = 800;
        public sceneHeight = 640;
        public assetManager: createjs.LoadQueue;
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