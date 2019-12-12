module objects {
    export class Background extends createjs.Bitmap {
        // Variables
        // Constructor
        constructor(assetManager: createjs.LoadQueue) {

            switch (managers.Game.currentScene) {
                case config.Scene.START:
                    super(assetManager.getResult("UIBackground"));
                    break;
                case config.Scene.GAME:
                    super(assetManager.getResult("level1bg"));
                    break;
                default:
                    super(assetManager.getResult("UIBackground"));
                    break;
            }
        }
        // Methods
        public Start(): void { }
        public Update(): void { }
    }
}