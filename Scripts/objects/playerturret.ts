module objects{
        // Player Game Objects
        export class PlayerTurret extends objects.GameObject {
            // Variables
            //private laserSpawn:math.Vector2;
            //public isDead:boolean;
            // Constructor
            constructor(assetManager:createjs.LoadQueue,parent:GameObject) {
                super("PlayerTurret");
                this.parent = parent;
                this.Start();
            }
            // Methods
            public Start():void {
                this.x = this.parent.regX;
                this.y = this.parent.regY;
                console.log(this.regX);
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
                this.x = this.parent.regX;
                this.y = this.parent.regY;
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