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
    // Player Game Objects
    var Player = /** @class */ (function (_super) {
        __extends(Player, _super);
        // Variables
        //private laserSpawn:math.Vector2;
        //public isDead:boolean;
        // Constructor
        function Player(assetManager) {
            var _this = _super.call(this, "Player") || this;
            _this.Start();
            return _this;
        }
        // Methods
        Player.prototype.Start = function () {
            this.Transform.Position = managers.Game.currentSceneObject.SceneCenter;
            this.x = this.Transform.Position.x;
            this.y = this.Transform.Position.y;
            this.scaleX = 0.25;
            this.scaleY = 0.25;
            //this.isDead = false;
        };
        Player.prototype.Update = function () {
            this.Move();
            this.CheckBound();
            /*
            this.LaserFire1();
            this.LaserFire2();
            this.LaserFire3();
            */
        };
        Player.prototype.Reset = function () { };
        Player.prototype.Move = function () {
            if (managers.Game.keyboardManager.moveLeft) {
                this.rotation -= 1;
            }
            if (managers.Game.keyboardManager.moveRight) {
                this.rotation += 1;
            }
            if (managers.Game.keyboardManager.moveUp) {
                // Formula retrived from https://stackoverflow.com/questions/39927418/move-object-based-on-its-angle
                var phi = (this.rotation + 90) * (Math.PI / 180);
                this.x -= Math.cos(-phi);
                this.y += Math.sin(-phi);
            }
            if (managers.Game.keyboardManager.moveDown) {
                // Formula retrived from https://stackoverflow.com/questions/39927418/move-object-based-on-its-angle
                var phi = (this.rotation - 90) * (Math.PI / 180);
                this.x -= Math.cos(-phi);
                this.y += Math.sin(-phi);
            }
        };
        Player.prototype.CheckBound = function () {
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
        };
        return Player;
    }(objects.GameObject));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map