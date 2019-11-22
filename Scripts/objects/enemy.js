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
    var Enemy = /** @class */ (function (_super) {
        __extends(Enemy, _super);
        // Constructor
        function Enemy(assetManager, scene) {
            var _this = _super.call(this, assetManager, "Enemy") || this;
            // Variables
            _this.isDead = false;
            _this._currentScene = scene;
            _this.transform = new components.Transform(new math.Vector2(_this.x, _this.y));
            _this.Start();
            return _this;
        }
        // Methods
        Enemy.prototype.Start = function () {
            this.x = Math.floor(Math.random() * this._currentScene.sceneSize.x);
            this.y = Math.floor(Math.random() * -this._currentScene.sceneSize.y);
        };
        Enemy.prototype.Update = function () {
            this.Move();
            this.CheckBounds();
        };
        Enemy.prototype.Reset = function () {
            this.isDead = false;
            this.x = Math.floor(Math.random() * this._currentScene.sceneSize.x);
            this.y = Math.floor(Math.random() * -this._currentScene.sceneSize.y);
        };
        Enemy.prototype.Move = function () {
            this.y += 2.5;
        };
        Enemy.prototype.CheckBounds = function () {
            if (this.y >= this._currentScene.sceneSize.y + this.halfH + 5) {
                this.Reset();
            }
        };
        return Enemy;
    }(objects.GameObject));
    objects.Enemy = Enemy;
    // Enemy Game Object
    var Enemy2 = /** @class */ (function (_super) {
        __extends(Enemy2, _super);
        // Constructor
        function Enemy2(assetManager, scene) {
            var _this = _super.call(this, assetManager, "Enemy") || this;
            // Variables
            _this.isDead = false;
            _this._currentScene = scene;
            _this.transform = new components.Transform(new math.Vector2(_this.x, _this.y));
            _this.Start();
            return _this;
        }
        // Methods
        Enemy2.prototype.Start = function () {
            this.x = Math.floor(Math.random() * this._currentScene.sceneSize.x);
            this.y = Math.floor(Math.random() * -this._currentScene.sceneSize.y);
        };
        Enemy2.prototype.Update = function () {
            this.Move();
            this.CheckBounds();
        };
        Enemy2.prototype.Reset = function () {
            this.isDead = false;
            this.x = Math.floor(Math.random() * this._currentScene.sceneSize.x);
            this.y = Math.floor(Math.random() * -this._currentScene.sceneSize.y);
        };
        Enemy2.prototype.Move = function () {
            this.y += 2.5;
            this.x += 2.5;
        };
        Enemy2.prototype.CheckBounds = function () {
            if (this.y >= this._currentScene.sceneSize.y + this.halfH + 5) {
                this.Reset();
            }
        };
        return Enemy2;
    }(objects.GameObject));
    objects.Enemy2 = Enemy2;
})(objects || (objects = {}));
//# sourceMappingURL=enemy.js.map