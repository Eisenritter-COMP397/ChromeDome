module scenes{
        // Start Scene
        export class StartScene extends objects.Scene {
            // Variables
            private welcomeLable: objects.Label;
            private startButton: objects.Button;
            //Constructor
            constructor(assetManager: createjs.LoadQueue) {
                super(assetManager);
                this.Start();
            }
            //Start Override
            public Start(): void {
                //Initialize objects

                this.welcomeLable = new objects.Label(

                    "Welcome to Chrome Dome!", "40px", "Fantasy", "#000000", 
                    this.sceneWidth/2,this.sceneHeight/2, true);
    
                this.startButton = new objects.Button(this.assetManager, "NewGameButton", 320, 300);
                this.Main();
            }
            public Update():void{}
            //When New Game Button is Clicked
            private startButoonClick():void{
                //Change game state from Start to Game
                objects.Game.currentScene = config.Scene.GAME;
            }
            //Main Override
            public Main():void{
                // Add Items to Scene
                this.addChild(this.welcomeLable);
                this.addChild(this.startButton);
                this.startButton.on("click",this.startButoonClick)
            }
        }
    
}