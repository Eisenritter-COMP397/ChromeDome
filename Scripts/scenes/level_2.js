var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var PlayScene2 = /** @class */ (function (_super) {
        __extends(PlayScene2, _super);
        // Constructor
        function PlayScene2(assetManager) {
            var _this = _super.call(this, assetManager, new math.Vector2(800, 640), 10, 10) || this;
            _this.Start();
            return _this;
        }
        // Methods
        PlayScene2.prototype.Start = function () {
            // Initialize our variables
            /*
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

*/
            // Initialize Sound
            createjs.Sound.stop();
            this.bgm = createjs.Sound.play("level2bgm");
            this.bgm.loop = -1; // Loop forever
            this.bgm.volume = 1;
            this.Main();
        };
        PlayScene2.prototype.Update = function () {
            this.player.Update();
            this.laserManager.Update();
            this.laserManager2.Update();
            /*
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
                            
                    }
                    
                   );
            
                        // SUPER INEFFICIENT. WE WILL FIX THIS LATER AS WELL
                        this.laserManager.Lasers.forEach(laser => {
                            this.enemies.forEach(enemy => {
                                managers.Collision.CheckAABB(laser, enemy,this.scoreBoard)
            
                            }
                            
                            );
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
                        */
        };
        PlayScene2.prototype.Main = function () {
            var _this = this;
            this.addChild(this.levelbackground);
            this.addChild(this.player);
            this.enemy3.forEach(function (e) {
                _this.addChild(e);
            });
            this.enemies.forEach(function (e) {
                _this.addChild(e);
            });
            this.easyenemies.forEach(function (e) {
                _this.addChild(e);
            });
            this.laserManager.Lasers.forEach(function (laser) {
                _this.addChild(laser);
            });
            this.laserManager2.Lasers.forEach(function (laser) {
                _this.addChild(laser);
            });
            this.addChild(this.scoreBoard.scoreLabel);
            this.addChild(this.scoreBoard.highScoreLabel);
        };
        return PlayScene2;
    }(objects.Scene));
    scenes.PlayScene2 = PlayScene2;
})(scenes || (scenes = {}));
//# sourceMappingURL=level_2.js.map