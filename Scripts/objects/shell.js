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
    var Shell = /** @class */ (function (_super) {
        __extends(Shell, _super);
        // Constructor
        function Shell(shell, speed) {
            var _this = _super.call(this, shell) || this;
            _this.direction = math.Vector2.Zero();
            _this.speed = speed;
            _this.Start();
            return _this;
        }
        Object.defineProperty(Shell.prototype, "Speed", {
            get: function () {
                return this.speed;
            },
            set: function (speed) {
                this.speed = speed;
            },
            enumerable: true,
            configurable: true
        });
        //Methods
        Shell.prototype.Start = function () {
            this.addChild();
            this.scaleY = 0.25;
            this.scaleX = 0.25;
            this.Reset();
        };
        Shell.prototype.Update = function () {
            this.Move();
            if (this.x > managers.Game.currentSceneObject.SceneSize.x + 50 || this.x < -50) {
                this.Reset();
            }
            if (this.y > managers.Game.currentSceneObject.SceneSize.y + 50 || this.x < -50) {
                this.Reset();
            }
        };
        Shell.prototype.Reset = function () {
            this.x = -5000;
            this.y = -5000;
        };
        Shell.prototype.Main = function () { };
        Shell.prototype.Move = function () {
            this.x -= this.direction.x * this.speed;
            this.y -= this.direction.y * this.speed;
        };
        return Shell;
    }(objects.GameObject));
    objects.Shell = Shell;
})(objects || (objects = {}));
//# sourceMappingURL=shell.js.map