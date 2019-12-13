module objects {
    // Player Game Objects
    export class Player extends objects.GameObject {

        private turret: objects.GameObject;
        public isDead: boolean;

        private effect: objects.Effect;
        //private laserSpawn:math.Vector2;


        // Constructor
        constructor(assetManager: createjs.LoadQueue) {
            super("Player", Utils.Anchors.CENTERCENTER);
            this.Start();
        }
        // Methods
        public Start(): void {
            // Save current data
            this.Transform.Position = managers.Game.currentSceneObject.SceneCenter;
            this.x = this.Transform.Position.x;
            this.y = this.Transform.Position.y;
            this.scaleX = 0.25;
            this.scaleY = 0.25;
            //this.isDead = false;
            // Initialize Attached GameObjects
            this.turret = new objects.PlayerTurret(managers.Game.assetManager, this);
            this.turret.Start();
            // console.log(this.turret.getBounds().width, this.turret.getBounds().height);
            this.Main();
        }

        public Update(): void {
            this.Move();
            this.CheckBound();
            this.FireGun();
            /*
            this.LaserFire1();
            this.LaserFire2();
            this.LaserFire3();
            */
        }
        public Reset(): void { 
            this.isDead=false
        }
        public Move(): void {
            if (managers.Game.keyboardManager.turretRotateLeft) {
                this.turret.rotation -= 0.5;
            }
            if (managers.Game.keyboardManager.turretRotateRight) {
                this.turret.rotation += 0.5;
            }
            if (managers.Game.keyboardManager.hullRotateLeft) {
                this.rotation -= 1;
            }
            if (managers.Game.keyboardManager.hullRotateRight) {
                this.rotation += 1;
            }
            if (managers.Game.keyboardManager.moveUp) {
                // Formula retrived from https://stackoverflow.com/questions/39927418/move-object-based-on-its-angle
                const phi = (this.rotation + 90) * (Math.PI / 180);
                this.x -= Math.cos(-phi);
                this.y += Math.sin(-phi);
            }
            if (managers.Game.keyboardManager.moveDown) {
                // Formula retrived from https://stackoverflow.com/questions/39927418/move-object-based-on-its-angle
                const phi = (this.rotation - 90) * (Math.PI / 180);
                this.x -= Math.cos(-phi);
                this.y += Math.sin(-phi);
            }
        }
        public CheckBound(): void {
            // Right boundary
            if (this.x >= managers.Game.currentSceneObject.SceneSize.x - this.Transform.HalfSize.x * this.scaleX) {
                this.x = managers.Game.currentSceneObject.SceneSize.x - this.Transform.HalfSize.x * this.scaleX;
            }

            // Left boundary
            if (this.x <= this.Transform.HalfSize.x * this.scaleX) {
                this.x = this.Transform.HalfSize.x * this.scaleX;
            }

            // Bottom boundary
            if (this.y >= managers.Game.currentSceneObject.SceneSize.y - this.Transform.HalfSize.y * this.scaleY) {
                this.y = managers.Game.currentSceneObject.SceneSize.y - this.Transform.HalfSize.y * this.scaleY;
            }

            // Top boundary
            if (this.y <= this.Transform.HalfSize.y * this.scaleX) {
                this.y = this.Transform.HalfSize.y * this.scaleX;
            }
        }

        public Main(): void {
            this.addChild(this.turret);
        }

        public FireGun(): void {
            if (!this.isDead) {
                let ticker: number = createjs.Ticker.getTicks();
                if ((managers.Game.keyboardManager.fireMainGun) && (ticker % 30 == 0)) {
                    //this.effect = new objects.Effect("FlashA", this.turret.Transform.Position);
                    let shell = managers.Game.shellManager.Shell[managers.Game.shellManager.CurrentShell];
                    
                    shell.rotation = this.turret.rotation+this.rotation;

                    shell.x = this.x-this.turret.Transform.Size.y/4*Math.cos((this.rotation+this.turret.rotation+90)* (Math.PI / 180));
                    shell.y = this.y-this.turret.Transform.Size.y/4*Math.sin((this.rotation+this.turret.rotation+90)* (Math.PI / 180));
 

                    shell.direction= new math.Vector2( 
                        Math.cos((this.rotation+this.turret.rotation+90)* (Math.PI / 180)),
                        Math.sin((this.rotation+this.turret.rotation+90)* (Math.PI / 180))
                        );
                    
                    console.log(managers.Game.shellManager.CurrentShell);    
                    managers.Game.shellManager.CurrentShell++;
                    
                    //shell.x = 
                    //shell.y = 

                    let gunfireSFX = createjs.Sound.play("MainGunFire");
                    gunfireSFX.volume = 1;
                    managers.Game.currentSceneObject.addChild(this.effect);
                }
            }

        }
        /*
                public LaserFire2():void {
                    if(!this.isDead) {

        
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