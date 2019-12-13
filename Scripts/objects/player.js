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
        //private laserSpawn:math.Vector2;
        // Constructor
        function Player(assetManager) {
            var _this = _super.call(this, "Player", Utils.Anchors.CENTERCENTER) || this;
            _this.Start();
            return _this;
        }
        // Methods
        Player.prototype.Start = function () {
            // Save current data
            this.Transform.Position = managers.Game.currentSceneObject.SceneCenter;
            this.x = this.Transform.Position.x;
            this.y = this.Transform.Position.y;
            this.scaleX = 0.25;
            this.scaleY = 0.25;
            //this.isDead = false;
            // Initialize Attached GameObjects
            this.turret = new objects.PlayerTurret(managers.Game.assetManager, this);
            this.Main();
        };
        Player.prototype.Update = function () {
            this.Move();
            this.CheckBound();
            this.FireGun();
            /*
            this.LaserFire1();
            this.LaserFire2();
            this.LaserFire3();
            */
        };
        Player.prototype.Reset = function () { };
        Player.prototype.Move = function () {
            if (managers.Game.keyboardManager.turretRotateLeft) {
                this.turret.rotation -= 5;
            }
            if (managers.Game.keyboardManager.turretRotateRight) {
                this.turret.rotation += 5;
            }
            if (managers.Game.keyboardManager.hullRotateLeft) {
                this.rotation -= 1;
            }
            if (managers.Game.keyboardManager.hullRotateRight) {
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
        };
        Player.prototype.Main = function () {
            this.addChild(this.turret);
        };
        Player.prototype.FireGun = function () {
            if (!this.isDead) {
                var ticker = createjs.Ticker.getTicks();
                if ((managers.Game.keyboardManager.fireMainGun) && (ticker % 10 == 0)) {
                    //this.effect = new objects.Effect("FlashA", this.turret.Transform.Position);
                    var shell = managers.Game.shellManager.Shell[managers.Game.shellManager.CurrentShell];
                    console.log(shell.x, shell.y);
                    shell.rotation = this.turret.rotation + this.rotation;
                    shell.x = this.x;
                    shell.y = this.y;
                    shell.direction = new math.Vector2(Math.cos((this.rotation + this.turret.rotation + 90) * (Math.PI / 180)), Math.sin((this.rotation + this.turret.rotation + 90) * (Math.PI / 180)));
                    managers.Game.shellManager.CurrentShell++;
                    //shell.x = 
                    //shell.y = 
                    var gunfireSFX = createjs.Sound.play("MainGunFire");
                    gunfireSFX.volume = 1;
                    managers.Game.currentSceneObject.addChild(this.effect);
                }
            }
        };
        return Player;
    }(objects.GameObject));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map