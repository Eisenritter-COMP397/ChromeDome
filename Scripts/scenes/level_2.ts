module scenes {
    export class PlayScene2 extends objects.Scene {
        // Variables
        private levelbackground: objects.Background;
        private player: objects.Player;
        private easyenemies: objects.Enemy[];
        private enemies: objects.Enemy2[];
        private enemy3: objects.Enemy3[];
        private enemyNum: number;
        private scoreBoard: managers.Scoreboard;
        private laserManager: managers.Laser;
        private laserManager2: managers.Laser2;
        private bgm: createjs.AbstractSoundInstance;

        // Constructor
        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager);
            this.Start();
        }

        // Methods
        public Start(): void {
            // Initialize our variables
            this.levelbackground = new objects.Background(this.assetManager, "level2");

            this.player = new objects.Player(this.assetManager, this);

            this.laserManager = new managers.Laser();
            managers.Game.laserManager = this.laserManager;

            this.laserManager2 = new managers.Laser2();
            managers.Game.laserManager2 = this.laserManager2;

            this.enemy3 = new Array<objects.Enemy3>();
            this.enemyNum = 15;
            for (let i = 0; i < this.enemyNum; i++) {
                this.enemy3[i] = new objects.Enemy3(this.assetManager, this);
            }

            this.enemies = new Array<objects.Enemy2>();
            this.enemyNum = 15;
            for (let i = 0; i < this.enemyNum; i++) {
                this.enemies[i] = new objects.Enemy2(this.assetManager, this);
            }

            this.easyenemies = new Array<objects.Enemy>();
            this.enemyNum = 10;
            for (let i = 0; i < this.enemyNum; i++) {
                this.easyenemies[i] = new objects.Enemy(this.assetManager, this);
            }

            this.scoreBoard = new managers.Scoreboard;


            // Initialize Sound
            createjs.Sound.stop();
            this.bgm = createjs.Sound.play("level2bgm");
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

            this.easyenemies.forEach(e => {
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

            this.enemy3.forEach(e => {
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

            
            this.laserManager2.Lasers.forEach(laser => {
                this.enemies.forEach(enemy => {
                    managers.Collision.CheckAABB(laser, enemy,this.scoreBoard)

                });
            });

            this.laserManager.Lasers.forEach(laser => {
                this.easyenemies.forEach(enemy => {
                    managers.Collision.CheckAABB(laser, enemy,this.scoreBoard)

                });
            });

            
            this.laserManager2.Lasers.forEach(laser => {
                this.enemy3.forEach(enemy => {
                    managers.Collision.CheckAABB(laser, enemy,this.scoreBoard)

                });
            });

            this.laserManager.Lasers.forEach(laser => {
                this.enemy3.forEach(enemy => {
                    managers.Collision.CheckAABB(laser, enemy,this.scoreBoard)

                });
            });

            
            this.laserManager2.Lasers.forEach(laser => {
                this.easyenemies.forEach(enemy => {
                    managers.Collision.CheckAABB(laser, enemy,this.scoreBoard)

                });
            });
            
            if(this.scoreBoard.Score>=100){
                managers.Game.currentScene = config.Scene.TRANSITION2;
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
            this.enemy3.forEach(e => {
                this.addChild(e);
            });
            this.enemies.forEach(e => {
                this.addChild(e);
            });
            this.easyenemies.forEach(e => {
                this.addChild(e);
            });
            this.laserManager.Lasers.forEach(laser => {
                this.addChild(laser);
            });            

            this.laserManager2.Lasers.forEach(laser => {
                this.addChild(laser);
            });

            this.addChild(this.scoreBoard.scoreLabel);
            this.addChild(this.scoreBoard.highScoreLabel)
        }
    }
} 