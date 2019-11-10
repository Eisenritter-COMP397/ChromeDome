module scenes {
    export class GameOverScene extends objects.Scene {
        // Variables
        private gameOverLabel: objects.Label;
        private backButton: objects.Button;
        private bgm: createjs.AbstractSoundInstance;
        // Constructor
        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager);
            this.Start();
        }
        //Method
        public Start(): void {
            this.gameOverLabel = new objects.Label(
                "Game Over!", "40px", "Metal Mania", "#000000", this.sceneCenter, true);

            this.backButton = new objects.Button(this.assetManager, "NewGameButton",
                new math.Vector2(this.sceneCenter.x, this.sceneCenter.y + 200), true);

            // Initialize Sound
            createjs.Sound.stop();
            this.bgm = createjs.Sound.play("startmusic");
            this.bgm.loop = -1; // Loop forever
            this.bgm.volume = 1;


            this.Main();
        }
        public Update(): void { }
        private backButtonClick(): void {
            managers.Game.currentScene = config.Scene.START;
        }
        public Main(): void {
            this.addChild(this.gameOverLabel);
            this.addChild(this.backButton);
            this.backButton.on("click", this.backButtonClick);
        }
    }
}