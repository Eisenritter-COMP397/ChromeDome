module scenes{
    // Start Scene
    export class Transition2 extends objects.Scene {
        // Variables

        private welcomeLabel: objects.Label;
        private move: objects.Label;
        private shoot: objects.Label;
        private readyButton: objects.Button;
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

                "Get Ready! Final Level!", "60px", "Metal Mania", "#800000", 
                400, 120, true);

            this.move = new objects.Label(

                 "New bullet: press Q to place mines", "30px", "Metal Mania", "#800000", 
                 400, 320, true);
 

            this.readyButton = new objects.Button(this.assetManager, "ReadyButton", 
            325, 425);
            this.readyButton.scaleX = 2;
            this.readyButton.scaleY = 2;
            
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
        private readyButtonClick():void{
            //Change game state from Start to Game
            managers.Game.currentScene = config.Scene.GAME3;
        }

        //Main Override
        public Main():void{
            // Add Items to Scene
            this.addChild(this.background);
            this.addChild(this.welcomeLabel);
            this.addChild(this.move);
            this.addChild(this.shoot);
            this.addChild(this.readyButton);
            this.readyButton.on("click", this.readyButtonClick)
        }
    }

}