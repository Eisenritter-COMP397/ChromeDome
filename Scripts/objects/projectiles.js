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
var objects;
(function (objects) {
    // Laser Projectiles
    var Laser1 = /** @class */ (function (_super) {
        __extends(Laser1, _super);
        // Variables
        // Constructor
        function Laser1(assetManager) {
            var _this = _super.call(this, "laser1") || this;
            _this.Start();
            return _this;
        }
        // Methods
        Laser1.prototype.Start = function () {
            // We may have to scale the laser to an appropriate size
            //this.speedX = 0;
            //this.speedY = -10;
            this.Reset();
        };
        Laser1.prototype.Update = function () {
            this.Move();
        };
        Laser1.prototype.Reset = function () {
            this.x = -5000;
            this.y = -5000;
        };
        Laser1.prototype.Move = function () {
            //this.y += this.speedY;
        };
        Laser1.prototype.Main = function () { };
        Laser1.prototype.CheckBounds = function () { };
        return Laser1;
    }(objects.GameObject));
    objects.Laser1 = Laser1;
    // Laser Projectiles 2
    var Laser2 = /** @class */ (function (_super) {
        __extends(Laser2, _super);
        // Variables
        // Constructor
        function Laser2(assetManager) {
            var _this = _super.call(this, "laser2") || this;
            _this.Start();
            return _this;
        }
        // Methods
        Laser2.prototype.Start = function () {
            // We may have to scale the laser to an appropriate size
            //this.speedX = 0;
            //this.speedY = -10;
            this.Reset();
        };
        Laser2.prototype.Update = function () {
            this.Move();
        };
        Laser2.prototype.Reset = function () {
            this.x = -5000;
            this.y = -5000;
        };
        Laser2.prototype.Move = function () {
            //this.y += this.speedY;
        };
        Laser2.prototype.Main = function () { };
        Laser2.prototype.CheckBounds = function () { };
        return Laser2;
    }(objects.GameObject));
    objects.Laser2 = Laser2;
    // Laser Projectiles 2
    var Laser3 = /** @class */ (function (_super) {
        __extends(Laser3, _super);
        // Variables
        // Constructor
        function Laser3(assetManager) {
            var _this = _super.call(this, "laser3") || this;
            _this.Start();
            return _this;
        }
        // Methods
        Laser3.prototype.Start = function () {
            // We may have to scale the laser to an appropriate size
            //this.speedX = 0;
            //this.speedY = -10;
            this.Reset();
        };
        Laser3.prototype.Update = function () {
            this.Move();
        };
        Laser3.prototype.Reset = function () {
            this.x = -5000;
            this.y = -5000;
        };
        Laser3.prototype.Move = function () {
            //this.y += this.speedY;
        };
        Laser3.prototype.Main = function () { };
        Laser3.prototype.CheckBounds = function () { };
        return Laser3;
    }(objects.GameObject));
    objects.Laser3 = Laser3;
})(objects || (objects = {}));
//# sourceMappingURL=projectiles.js.map