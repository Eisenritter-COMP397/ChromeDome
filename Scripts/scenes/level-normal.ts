module scenes {
    export class PlayScene extends objects.Scene {
        // Variables
        //private playLabel: objects.Label;
        //private nextButton: objects.Button;
        //private backButton: objects.Button;
        private levelbackground: objects.Background;
        private player: objects.Player;
        private enemies: objects.Enemy[];
        private enemyNum: number;
        private scoreBoard: managers.Scoreboard;
        private laserManager: managers.Laser;

        private bgm: createjs.AbstractSoundInstance;


        // Constructor
        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager);

            this.Start();
        }

        // Methods
        public Start(): void {
            // Initialize our variables
            this.levelbackground = new objects.Background(this.assetManager, "level1");

            this.player = new objects.Player(this.assetManager, this);
            this.laserManager = new managers.Laser();
            managers.Game.laserManager = this.laserManager;


            this.enemies = new Array<objects.Enemy>();
            this.enemyNum = 5;
            for (let i = 0; i < this.enemyNum; i++) {
                this.enemies[i] = new objects.Enemy(this.assetManager, this);
            }

            this.scoreBoard = new managers.Scoreboard;


            // Initialize Sound
            createjs.Sound.stop();
            this.bgm = createjs.Sound.play("level1bgm");
            this.bgm.loop = -1; // Loop forever
            this.bgm.volume = 1;
            this.Main();

        }

        public Update(): void {
            this.player.Update();
            this.laserManager.Update();

            this.enemies.forEach(e => {
                if(!e.isDead) {
                    e.Update();

                    this.player.isDead= managers.Collision.CheckAABB(this.player, e,this.scoreBoard);
                    if (this.player.isDead) {
                        // Disable music
                        this.bgm.stop();
                        managers.Game.currentScene = config.Scene.OVER;
                    }
                }
            });

            // SUPER INEFFICIENT. WE WILL FIX THIS LATER AS WELL
            this.laserManager.Lasers.forEach(laser => {
                this.enemies.forEach(enemy => {
                    managers.Collision.CheckAABB(laser, enemy,this.scoreBoard)

                });
            });

            if(this.scoreBoard.Score>=100){
                managers.Game.currentScene = config.Scene.GAME3;
            }

        }

        //private nextButtonClick(): void {
        //    managers.Game.currentScene = config.Scene.OVER;
        // }

        // private backButtonClick(): void {
        //     managers.Game.currentScene = config.Scene.START;
        // }

        public Main(): void {

            this.addChild(this.levelbackground);
            this.addChild(this.player);
            this.enemies.forEach(e => {
                this.addChild(e);
            });
            this.laserManager.Lasers.forEach(laser => {
                this.addChild(laser);
            });

            this.addChild(this.scoreBoard.scoreLabel);
            this.addChild(this.scoreBoard.highScoreLabel);
        }
    }
} 