var managers;
(function (managers) {
    var Laser = /** @class */ (function () {
        // Constructor
        function Laser() {
            this.Start();
        }
        // Functions / Methods
        Laser.prototype.buildLaserPool = function () {
            for (var i = 0; i < this.laserCount; i++) {
                this.Lasers[i] = new objects.Laser1(managers.Game.assetManager);
            }
        };
        Laser.prototype.Start = function () {
            this.laserCount = 50;
            // Initialize my laser array
            this.Lasers = new Array();
            this.buildLaserPool();
            this.CurrentLaser = 0;
        };
        Laser.prototype.Update = function () {
            this.Lasers.forEach(function (laser) {
                laser.Update();
            });
        };
        return Laser;
    }());
    managers.Laser = Laser;
    var Laser2 = /** @class */ (function () {
        // Constructor
        function Laser2() {
            this.Start();
        }
        // Functions / Methods
        Laser2.prototype.buildLaserPool = function () {
            for (var i = 0; i < this.laserCount; i++) {
                this.Lasers[i] = new objects.Laser2(managers.Game.assetManager);
            }
        };
        Laser2.prototype.Start = function () {
            this.laserCount = 50;
            // Initialize my laser array
            this.Lasers = new Array();
            this.buildLaserPool();
            this.CurrentLaser2 = 0;
        };
        Laser2.prototype.Update = function () {
            this.Lasers.forEach(function (laser) {
                laser.Update();
            });
        };
        return Laser2;
    }());
    managers.Laser2 = Laser2;
    var Laser3 = /** @class */ (function () {
        // Constructor
        function Laser3() {
            this.Start();
        }
        // Functions / Methods
        Laser3.prototype.buildLaserPool = function () {
            for (var i = 0; i < this.laserCount; i++) {
                this.Lasers[i] = new objects.Laser3(managers.Game.assetManager);
            }
        };
        Laser3.prototype.Start = function () {
            this.laserCount = 50;
            // Initialize my laser array
            this.Lasers = new Array();
            this.buildLaserPool();
            this.CurrentLaser3 = 0;
        };
        Laser3.prototype.Update = function () {
            this.Lasers.forEach(function (laser) {
                laser.Update();
            });
        };
        return Laser3;
    }());
    managers.Laser3 = Laser3;
})(managers || (managers = {}));
//# sourceMappingURL=laserManager.js.map