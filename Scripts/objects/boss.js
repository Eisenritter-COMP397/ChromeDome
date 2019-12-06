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
    // Enemy Game Object
    var Boss = /** @class */ (function (_super) {
        __extends(Boss, _super);
        //Constructors
        function Boss(assetManager, scene) {
            var _this = _super.call(this, assetManager, "bosstank") || this;
            //Variables
            _this.isDead = false;
            _this._currentScene = scene;
            _this.transform = new components.Transform(new math.Vector2(_this.x, _this.y));
            _this.Start();
            return _this;
        }
        //Methods
        Boss.prototype.Start = function () {
            _super.prototype.Start.call(this);
            this.regX = this.halfW;
            this.regY = this.halfH;
            this._bulletSpawn = new Utils.Vector2(0, 2 + this.halfW);
            this.x = Math.floor(Math.random() * (this._currentScene.sceneSize.y - this.halfW) + this.halfW);
            this.y = 75;
            this.Reset();
        };
        Boss.prototype.Update = function () {
            this.Move();
            this.CheckBound();
            _super.prototype.Update.call(this);
        };
        Boss.prototype.Move = function () {
            this.x += this._horizontalSpeed;
            if (this._horizontalSpeed == 0) {
                this._horizontalSpeed = Math.floor((Math.random() * 4) - 2); // speed from -2 to 2
            }
        };
        Boss.prototype.CheckBound = function () {
            // Right boundary
            if (this.x >= this._currentScene.sceneSize.x - this.halfW) {
                this.x = this._currentScene.sceneSize.x - this.halfW;
                this.Reset();
            }
            // Left boundary
            if (this.x <= this.halfW) {
                this.x = this.halfW;
                this.Reset();
            }
        };
        Boss.prototype.Reset = function () {
            _super.prototype.Reset.call(this);
            this._horizontalSpeed = Math.floor((Math.random() * 4) + 6);
            this.isColliding = false;
        };
        return Boss;
    }(objects.GameObject));
    objects.Boss = Boss;
})(objects || (objects = {}));
//# sourceMappingURL=boss.js.map