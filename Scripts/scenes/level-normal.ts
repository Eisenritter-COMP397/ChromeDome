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
        private shellManager: managers.Shell;

        private bgm: createjs.AbstractSoundInstance;


        // Constructor
        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager, new math.Vector2(800, 640), 10, 10);

            this.Start();
        }

        // Methods
        public Start(): void {
            // Initialize our variables
            this.levelbackground = new objects.Background(managers.Game.assetManager);

            this.player = new objects.Player(this.assetManager);
            this.shellManager = new managers.Shell();
            managers.Game.shellManager = this.shellManager;

            this.enemies = new Array<objects.Enemy>();
            this.enemyNum = 5;
            for (let i = 0; i < this.enemyNum; i++) {
                this.enemies[i] = new objects.Enemy(this.assetManager, this.position(this.SceneTopCenter, i-2, -1));
            }

            this.scoreBoard = new managers.Scoreboard();

            // Initialize Sound
            createjs.Sound.stop();
            this.bgm = createjs.Sound.play("level1bgm");
            this.bgm.loop = -1; // Loop forever
            this.bgm.volume = 0;
            this.Main();

        }

        public Update(): void {
            this.player.Update();
            this.shellManager.Update();

            this.enemies.forEach(e => {
                if(!e.isDead) {
                    e.Update();
                    //console.log(e.name);
                    this.player.isDead= managers.Collision.CheckAABB(this.player, e);
                    if (this.player.isDead) {
                        // Disable music
                        this.bgm.stop();
                        //managers.Game.currentScene = config.Scene.OVER;
                    }
                }
            });

            // SUPER INEFFICIENT. WE WILL FIX THIS LATER AS WELL
            this.shellManager.Shell.forEach(shell => {
                this.enemies.forEach(enemy => {
                    let collide = managers.Collision.CheckAABB(shell, enemy);
                    if(collide){
                            shell.Reset();
                            enemy.Reset();
                            this.scoreBoard.Score=25;
                    }
                });
            });

            console.log(this.scoreBoard.Score);
            if (this.scoreBoard.Score >= 100) {
                //managers.Game.currentScene = config.Scene.TRANSITION;
            }
        }


        public Main(): void {

            this.addChild(this.levelbackground);
            this.addChild(this.player);
            this.enemies.forEach(e => {
                this.addChild(e);
            });

            this.shellManager.Shell.forEach(shell => {
                this.addChild(shell);
            });

            this.addChild(this.scoreBoard.scoreLabel);
            this.addChild(this.scoreBoard.highScoreLabel);
        }
    }
} 