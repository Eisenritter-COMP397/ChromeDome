module scenes{
    // Start Scene
    export class InstructionsScene extends objects.Scene {
        // Variables

        private welcomeLabel: objects.Label;
        private move: objects.Label;
        private shoot: objects.Label;
        private objective: objects.Label;
        private objective2: objects.Label;
        private backButton: objects.Button;
        private background: objects.Background;
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
            this.welcomeLabel = new objects.Label(

                "Instructions", "60px", "Metal Mania", "#800000", 
                400, 120, true);

            this.move = new objects.Label(

                 "Move: WASD keys", "30px", "Metal Mania", "#800000", 
                 300, 180, true);

            this.shoot = new objects.Label(

                "Shoot: Space Bar", "30px", "Metal Mania", "#800000", 
                300, 220, true);

            this.objective = new objects.Label(

                "Objective: Shoot and kill enemies,", "30px", "Metal Mania", "#800000", 
                390, 260, true);
            this.objective2 = new objects.Label(

                 "avoid being shot/touched by enemies", "30px", "Metal Mania", "#800000", 
                 410, 300, true);


            this.backButton = new objects.Button(this.assetManager, "BackButton", 
            350, 425);
            this.backButton.scaleX = 2;
            this.backButton.scaleY = 2;
            
            // Initialize Sound
            createjs.Sound.stop();
            this.bgm = createjs.Sound.play("startmusic");
            this.bgm.loop = -1; // Loop forever
            this.bgm.volume = 1;

            this.Main();
        }
        public Update():void{
           
        }
        //When New Game Button is Clicked
        private backButtonClick():void{
            //Change game state from Start to Game
            managers.Game.currentScene = config.Scene.START;
        }

        //Main Override
        public Main():void{
            // Add Items to Scene
            this.addChild(this.background);
            this.addChild(this.welcomeLabel);
            this.addChild(this.move);
            this.addChild(this.shoot);
            this.addChild(this.objective);
            this.addChild(this.objective2);
            this.addChild(this.backButton);
            this.backButton.on("click", this.backButtonClick)
        }
    }

}