module scenes {
    export class GameOverScene extends objects.Scene {
        // Variables
        private background: objects.Background;
        private gameOverLabel: objects.Label;
        private backButton: objects.Button;
        private bgm: createjs.AbstractSoundInstance;
        // Constructor
        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager, new math.Vector2(800, 640), 10, 10);
            this.Start();
        }
        //Method
        public Start(): void {

            //this.background = new objects.Background(this.assetManager, "UIBackground");
            
           // this.gameOverLabel = new objects.Label(                "Game Over!", "60px", "Metal Mania", "#000000", 400, 320, true);

            //this.backButton = new objects.Button(this.assetManager, "NewGameButton",  320, 400);
            
            this.backButton.scaleX = 2;
            this.backButton.scaleY = 2;

            // Initialize Sound
            createjs.Sound.stop();
            this.bgm = createjs.Sound.play("startmusic");
            this.bgm.loop = -1; // Loop forever
            this.bgm.volume = 1;


            this.Main();
        }
        public Update(): void {
            
         }
        private backButtonClick(): void {
            managers.Game.currentScene = config.Scene.START;
        }
        public Main(): void {
            this.addChild(this.background);
                        this.addChild(this.gameOverLabel);
            this.addChild(this.backButton);
            this.backButton.on("click", this.backButtonClick);
        }
    }
}