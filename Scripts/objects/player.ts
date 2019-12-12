module objects{
        // Player Game Objects
        export class Player extends objects.GameObject {
            // Variables
            //private laserSpawn:math.Vector2;
            //public isDead:boolean;
            // Constructor
            constructor(assetManager:createjs.LoadQueue) {
                super("Player");
                this.Start();
            }
            // Methods
            public Start():void {
                this.Transform.Position = managers.Game.currentSceneObject.SceneCenter;
                this.x = this.Transform.Position.x;
                this.y = this.Transform.Position.y;
                this.scaleX = 0.25;
                this.scaleY = 0.25;
                //this.isDead = false;
            }
    
            public Update():void {
                this.Move();
                this.CheckBound();
                /*
                this.LaserFire1();
                this.LaserFire2();
                this.LaserFire3();
                */
            }
    
            public Reset():void {}
    
            public Move():void {
                if(managers.Game.keyboardManager.moveLeft)
                {
                    this.rotation -= 1;
                }
                if(managers.Game.keyboardManager.moveRight)
                {
                    this.rotation += 1;
                }
                if(managers.Game.keyboardManager.moveUp)
                {
                    // Formula retrived from https://stackoverflow.com/questions/39927418/move-object-based-on-its-angle
                    const phi = (this.rotation+90)*(Math.PI/180);
                    this.x -= Math.cos(-phi);
                    this.y += Math.sin(-phi);
                }
                if(managers.Game.keyboardManager.moveDown)
                {
                    // Formula retrived from https://stackoverflow.com/questions/39927418/move-object-based-on-its-angle
                    const phi = (this.rotation-90)*(Math.PI/180);
                    this.x -= Math.cos(-phi);
                    this.y += Math.sin(-phi);
                }
            }
    
    
            public CheckBound():void {
                /*
                // Right boundary
                if(this.x >= this._currentScene.sceneSize.x - this.halfW) {
                    this.x = this._currentScene.sceneSize.x - this.halfW;
                }
    
                // Left boundary
                if(this.x <= this.halfW) {
                    this.x = this.halfW;
                }
    
                // Bottom boundary
                if(this.y >= this._currentScene.sceneSize.y - this.halfH) {
                    this.y = this._currentScene.sceneSize.y - this.halfH;
                }
    
                // Top boundary
                if(this.y <= this.halfH) {
                    this.y = this.halfH;
                }
                */
            }
    /*
            public LaserFire2():void {
                if(!this.isDead) {
                    let ticker:number = createjs.Ticker.getTicks();
    
                    if((managers.Game.keyboardManager.shoot2) && (ticker % 10 == 0)) {
                        this.laserSpawn = new math.Vector2(this.x, this.y - this.halfH);
                        let currentLaser2 = managers.Game.laserManager2.CurrentLaser2;
                        let laser = managers.Game.laserManager.Lasers[currentLaser2];
                        laser.x = this.laserSpawn.x;
                        laser.y = this.laserSpawn.y;
                        managers.Game.laserManager2.CurrentLaser2++;
                        if(managers.Game.laserManager2.CurrentLaser2 > 49) {
                            managers.Game.laserManager2.CurrentLaser2 = 0;
                        }
                }
            }
        }
        public LaserFire3():void {
            if(!this.isDead) {
                let ticker:number = createjs.Ticker.getTicks();
    
                if((managers.Game.keyboardManager.shoot3) && (ticker % 10 == 0)) {
                    this.laserSpawn = new math.Vector2(this.x, this.y - this.halfH);
                    let currentLaser3 = managers.Game.laserManager3.CurrentLaser3;
                    let laser = managers.Game.laserManager3.Lasers[currentLaser3];
                    laser.x = this.laserSpawn.x;
                    laser.y = this.laserSpawn.y;
                    managers.Game.laserManager3.CurrentLaser3++;
                    if(managers.Game.laserManager3.CurrentLaser3 > 49) {
                        managers.Game.laserManager3.CurrentLaser3 = 0;
                    }
            }
        }
    }
            public LaserFire1():void {
                if(!this.isDead) {
                    let ticker:number = createjs.Ticker.getTicks();
    
                    // Player is trying to shoot the laser
                    if((managers.Game.keyboardManager.shoot1) && (ticker % 10 == 0)) {
                        this.laserSpawn = new math.Vector2(this.x, this.y - this.halfH);
                        let currentLaser = managers.Game.laserManager.CurrentLaser;
                        let laser = managers.Game.laserManager.Lasers[currentLaser];
                        laser.x = this.laserSpawn.x;
                        laser.y = this.laserSpawn.y;
                        managers.Game.laserManager.CurrentLaser++;
                        if(managers.Game.laserManager.CurrentLaser > 49) {
                            managers.Game.laserManager.CurrentLaser = 0;
                        }
    
                        // Play a laser sound
                    }
                }
            }
        */
        }
        
}