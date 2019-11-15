module scenes{
    // Start Scene
    export class StartScene extends objects.Scene {
        // Variables

        private welcomeLabel: objects.Label;
        private logo: objects.Image;
        private startButton: objects.Button;
        private instructionButton: objects.Button;
        private background: objects.Background;
        private flameEffect: objects.AnimatedBackground;
        private bgm: createjs.AbstractSoundInstance;
        //Constructor
        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager);
            this.Start();
        }
        //Start Override
        public Start(): void {

            //Initialize objects
            this.background = new objects.Background(this.assetManager, "UIBackground");
            this.flameEffect = new objects.AnimatedBackground(this.assetManager);

            this.logo = new objects.Image(this.assetManager, "Logo", 
            500, 320);
            this.logo.scaleX = 0.5;
            this.logo.scaleY = 0.5;

            this.welcomeLabel = new objects.Label(

                "Welcome to Chrome Dome!", "60px", "Metal Mania", "#800000", 
                425, 320, true);

            this.startButton = new objects.Button(this.assetManager, "NewGameButton", 
            300, 400);
            this.startButton.scaleX = 2;
            this.startButton.scaleY = 2;

            this.instructionButton = new objects.Button(this.assetManager, "InstructionsButton", 
            280, 450);
            this.instructionButton.scaleX = 2;
            this.instructionButton.scaleY = 2;
            

            // Initialize Sound
            createjs.Sound.stop();
            this.bgm = createjs.Sound.play("startmusic");
            this.bgm.loop = -1; // Loop forever
            this.bgm.volume = 1;

            this.Main();
        }
        public Update():void{
            this.flameEffect.Update();
        }
        //When New Game Button is Clicked
        private startButtonClick():void{
            //Change game state from Start to Game
            managers.Game.currentScene = config.Scene.GAME;
        }

        private instructionClick():void{
            //Change game state from Start to Game
            managers.Game.currentScene = config.Scene.INSTRUCTIONS;
        }
        //Main Override
        public Main():void{
            // Add Items to Scene
            this.addChild(this.background);
            this.addChild(this.flameEffect);
            this.addChild(this.logo);
            this.addChild(this.welcomeLabel);
            this.addChild(this.startButton);
            this.addChild(this.instructionButton);
            this.startButton.on("click", this.startButtonClick)
            this.instructionButton.on("click", this.instructionClick)
        }
    }

}