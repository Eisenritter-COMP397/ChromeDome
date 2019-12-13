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
        function Enemy(assetManager, position) {
            var _this = _super.call(this, "DummyEnemy") || this;
            _this.isDead = false;
            _this.name = "DummyEnemy";
            _this.scaleX = 0.5;
            _this.scaleY = 0.5;
            _this.x = position.x;
            _this.y = position.y;
            //this.transform = new components.Transform(new math.Vector2(this.x, this.y));
            _this.Start();
            return _this;
        }
        // Methods
        Enemy.prototype.Start = function () {
            this.turret = new objects.PlayerTurret(managers.Game.assetManager, this);
            this.turret.Start();
            /*
            this.x = Math.floor(Math.random() * this._currentScene.sceneSize.x);
            this.y = Math.floor(Math.random() * -this._currentScene.sceneSize.y);
            */
        };
        Enemy.prototype.Update = function () {
            this.Move();
            this.CheckBounds();
        };
        Enemy.prototype.Reset = function () {
            this.isDead = false;
            this.x = -5000;
            this.y = -5000;
        };
        Enemy.prototype.Move = function () {
        };
        Enemy.prototype.CheckBounds = function () {
            /*
            if (this.y >= this._currentScene.sceneSize.y + this.halfH + 5) {
                this.Reset();
            }
            */
        };
        return Enemy;
    }(objects.GameObject));
    objects.Enemy = Enemy;
    // Enemy Game Object
    var Enemy2 = /** @class */ (function (_super) {
        __extends(Enemy2, _super);
        //private transform: components.Transform;
        // Constructor
        function Enemy2(assetManager, scene) {
            var _this = _super.call(this, "Enemy") || this;
            // Variables
            _this.isDead = false;
            //this.transform = new components.Transform(new math.Vector2(this.x, this.y));
            _this.Start();
            return _this;
        }
        // Methods
        Enemy2.prototype.Start = function () {
            /*ssss
             this.x = Math.floor(Math.random() * this._currentScene.sceneSize.x);
             this.y = Math.floor(Math.random() * -this._currentScene.sceneSize.y);
             */
        };
        Enemy2.prototype.Update = function () {
            this.Move();
            this.CheckBounds();
        };
        Enemy2.prototype.Reset = function () {
            this.isDead = false;
            this.x = -5000;
            this.y = -5000;
        };
        Enemy2.prototype.Move = function () {
            this.y += 2.5;
            this.x += 2.5;
        };
        Enemy2.prototype.CheckBounds = function () {
            /*
            if (this.y >= this._currentScene.sceneSize.y + this.halfH + 5) {
                this.Reset();
            }
            */
        };
        return Enemy2;
    }(objects.GameObject));
    objects.Enemy2 = Enemy2;
    var Enemy3 = /** @class */ (function (_super) {
        __extends(Enemy3, _super);
        //public transform: components.Transform;
        // Constructor
        function Enemy3(assetManager, scene) {
            var _this = _super.call(this, "Enemy") || this;
            // Variables
            _this.isDead = false;
            //this._currentScene = scene;
            //this.transform = new components.Transform(new math.Vector2(this.x, this.y));
            _this.Start();
            return _this;
        }
        // Methods
        Enemy3.prototype.Start = function () {
            /*
            this.x = Math.floor(Math.random() * this._currentScene.sceneSize.x);
            this.y = Math.floor(Math.random() * -this._currentScene.sceneSize.y);
            */
        };
        Enemy3.prototype.Update = function () {
            this.Move();
            this.CheckBounds();
        };
        Enemy3.prototype.Reset = function () {
            this.isDead = false;
            /*
            this.x = Math.floor(Math.random() * this._currentScene.sceneSize.x);
            this.y = Math.floor(Math.random() * -this._currentScene.sceneSize.y);
            */
        };
        Enemy3.prototype.Move = function () {
            this.y -= 2.5;
            this.x -= 2.5;
        };
        Enemy3.prototype.CheckBounds = function () {
            /*
            if (this.y >= this._currentScene.sceneSize.y + this.halfH + 5) {
                this.Reset();
            }
            */
        };
        return Enemy3;
    }(objects.GameObject));
    objects.Enemy3 = Enemy3;
})(objects || (objects = {}));
//# sourceMappingURL=enemy.js.map