module scenes {
    import Anchors = Utils.Anchors;
    import Color = Utils.Color;
    // Start Scene
    export class StartScene extends objects.Scene {
        // Variables

        // Logo
        private logo: objects.Image;

        // Background
        private background: objects.Background;

        // Label
        private welcomeLabel: objects.Label;
        private welcomeLabelTextRed: number = 0;
        private welcomeLabelTextGreen: number = 0;
        private welcomeLabelTextBlue: number = 0;
        private welcomeLabelTextAlpha: number = 1;
        private ColorMaxReached: boolean = false;

        // Button
        private startLabel: objects.Label;
        private startButton: objects.Button;
        private instructionButton: objects.Button;
        private instructionLabel: objects.Label;


        // BGM
        private bgm: createjs.AbstractSoundInstance;

        //Constructor
        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager, new math.Vector2(800, 640), 10, 10);
            this.Start();
        }
        //Start Override
        public Start(): void {

            //Initialize Background
            this.background = new objects.Background(this.assetManager);
            //Remove this
            //this.flameEffect = new objects.AnimatedBackground(this.assetManager);

            this.logo = new objects.Image(this.assetManager, "Logo",
                this.SceneCenter, Anchors.TOPLEFT);
            this.logo.scaleX = 0.1;
            this.logo.scaleY = 0.1;

            //Initialize Logo Element
            this.welcomeLabel = new objects.Label(
                "Welcome to Chrome Dome!", "60px", "Metal Mania", new Color(128, 0, 0, 1),
                this.position(this.SceneCenter, 0, 1), Anchors.CENTERCENTER);

            this.startLabel = new objects.Label(
                "Start Game", "40px", "Metal Mania", new Color(0, 0, 0, 1),
                this.position(this.SceneCenter, 0, -0.5), Anchors.CENTERCENTER,
                true);


            this.instructionLabel = new objects.Label(
                "Instructions", "40px", "Metal Mania", new Color(0, 0, 0, 1),
                this.position(this.SceneCenter, 0, -1.5), Anchors.CENTERCENTER,
                true);

            // Initialize Sound
            createjs.Sound.stop();
            this.bgm = createjs.Sound.play("startmusic");
            this.bgm.loop = -1; // Loop forever
            this.bgm.volume = 0;

            this.Main();
        }

        public Update(): void {
            this.WelcomeLabelEffect();
        }

        private WelcomeLabelEffect(): void {
            if (!this.ColorMaxReached) {
                this.welcomeLabelTextRed += 1;
                this.welcomeLabel.scaleX += 0.0001;
                this.welcomeLabel.scaleY += 0.0001;
            }
            if (this.welcomeLabelTextRed == 255) {
                this.ColorMaxReached = true;
            }
            if (this.ColorMaxReached) {
                this.welcomeLabelTextRed -= 1;
                this.welcomeLabel.scaleX -= 0.0001;
                this.welcomeLabel.scaleY -= 0.0001;
            }
            if (this.welcomeLabelTextRed == 0) {
                this.ColorMaxReached = false;
            }
            this.welcomeLabel.color =
                new Color(
                    this.welcomeLabelTextRed,
                    this.welcomeLabelTextGreen,
                    this.welcomeLabelTextBlue,
                    this.welcomeLabelTextAlpha
                ).toString();
        }
        //When New Game Button is Clicked
        private startButtonClick(): void {
            //Change game state from Start to Game
            managers.Game.currentScene = config.Scene.GAME;
        }

        private instructionClick(): void {
            //Change game state from Start to Game
            //managers.Game.currentScene = config.Scene.INSTRUCTIONS;
        }
        //Main Override
        public Main(): void {
            // Add Items to Scene
            this.addChild(this.background);
            //this.addChild(this.flameEffect);
            this.addChild(this.logo);
            this.addChild(this.welcomeLabel);
            this.addChild(this.startLabel);
            this.addChild(this.startButton);
            this.addChild(this.instructionLabel);
            this.startLabel.on("click", this.startButtonClick)
            this.instructionLabel.on("click", this.instructionClick)
        }
    }

}