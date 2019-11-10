module scenes {
    export class PlayScene extends objects.Scene {
        // Variables
        //private playLabel: objects.Label;
        //private nextButton: objects.Button;
        //private backButton: objects.Button;
        private player: objects.Player;
        private bgm: createjs.AbstractSoundInstance;


        // Constructor
        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager);

            this.Start();
        }

        // Methods
        public Start(): void {
            // Initialize our variables
            this.player = new objects.Player(this.assetManager, this);

            // Initialize Sound
            createjs.Sound.stop();
            this.bgm = createjs.Sound.play("level1");
            this.bgm.loop = -1; // Loop forever
            this.bgm.volume = 1;
            this.Main();

        }

        public Update(): void {
            this.player.Update();
        }

        private nextButtonClick(): void {
            objects.Game.currentScene = config.Scene.OVER;
        }

        private backButtonClick(): void {
            objects.Game.currentScene = config.Scene.START;
        }

        public Main(): void {
            this.addChild(this.player);
        }
    }
} 