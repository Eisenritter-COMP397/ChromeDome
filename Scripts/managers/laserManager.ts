module managers {
    export class Laser {
        // Variables
        public Lasers:objects.Laser1[]; // Hold a set of instantiated lasers
        public CurrentLaser:number;

        private laserCount:number;
        // Constructor
        constructor() {
            this.Start();
        }
        // Functions / Methods
        private buildLaserPool():void {
            for(let i = 0; i < this.laserCount; i++)
            {
                this.Lasers[i] = new objects.Laser1(managers.Game.assetManager);
            }
        }

        public Start():void {

            
            this.laserCount = 50;
            // Initialize my laser array
            this.Lasers = new Array<objects.Laser1>();
            this.buildLaserPool();
            this.CurrentLaser = 0;
    
        }

        public Update():void {
            this.Lasers.forEach(laser => {
                laser.Update();
            });
        }
    }

    export class Laser2 {
        // Variables
        
        public Lasers:objects.Laser2[];
        // Hold a set of instantiated lasers
        public CurrentLaser2:number;

        private laserCount:number;
        // Constructor
        constructor() {
            this.Start();
        }
        // Functions / Methods
        private buildLaserPool():void {
            for(let i = 0; i < this.laserCount; i++)
            {
                this.Lasers[i] = new objects.Laser2(managers.Game.assetManager);
            }
        }

        public Start():void {

            this.laserCount = 50;
            // Initialize my laser array
            this.Lasers = new Array<objects.Laser2>();
            this.buildLaserPool();
            this.CurrentLaser2 = 0;
        }

        public Update():void {
           
            this.Lasers.forEach(laser => {
                laser.Update();
            });
            
        }
    }

    export class Laser3 {
        // Variables
        
        public Lasers:objects.Laser3[];
        // Hold a set of instantiated lasers
      
        public CurrentLaser3:number;
      

        private laserCount:number;
        // Constructor
        constructor() {
            this.Start();
        }
        // Functions / Methods
        private buildLaserPool():void {
            for(let i = 0; i < this.laserCount; i++)
            {
                this.Lasers[i] = new objects.Laser3(managers.Game.assetManager);
            }
        }

        public Start():void {
            this.laserCount = 50;
            // Initialize my laser array
            this.Lasers = new Array<objects.Laser3>();
            this.buildLaserPool();
            this.CurrentLaser3 = 0;

        }

        public Update():void {
           
            this.Lasers.forEach(laser => {
                laser.Update();
            });
            
        }
    }
} 