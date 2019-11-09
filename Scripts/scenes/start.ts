module scenes{
        // Start Scene
        export class StartScene extends objects.Scene {
            // Variables

            private welcomeLable: objects.Label;
            private startButton: objects.Button;
            private background: objects.Background;
            private flameEffect: objects.AnimatedBackground;
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
                this.welcomeLable = new objects.Label(

                    "Welcome to Chrome Dome!", "60px", "Metal Mania", "#800000", 
                    this.sceneCenter, true);
    
                this.startButton = new objects.Button(this.assetManager, "NewGameButton", 
                new math.Vector2(this.sceneCenter.x, this.sceneCenter.y+200),true);

                this.Main();
            }
            public Update():void{
                this.flameEffect.Update();
            }
            //When New Game Button is Clicked
            private startButoonClick():void{
                //Change game state from Start to Game
                objects.Game.currentScene = config.Scene.GAME;
            }
            //Main Override
            public Main():void{
                // Add Items to Scene
                this.addChild(this.background);
                this.addChild(this.flameEffect);
                this.addChild(this.welcomeLable);
                this.addChild(this.startButton);
                this.startButton.on("click",this.startButoonClick)
            }
        }
    
}