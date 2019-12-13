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
    var PlayerTurret = /** @class */ (function (_super) {
        __extends(PlayerTurret, _super);
        //public isDead:boolean;
        // Constructor
        function PlayerTurret(assetManager, parent) {
            var _this = _super.call(this, "PlayerTurret") || this;
            _this.parent = parent;
            _this.Start();
            return _this;
        }
        // Methods
        PlayerTurret.prototype.Start = function () {
            //this.isDead = false;
        };
        PlayerTurret.prototype.Update = function () {
            this.Move();
        };
        PlayerTurret.prototype.Reset = function () { };
        PlayerTurret.prototype.Move = function () {
        };
        PlayerTurret.prototype.CheckBound = function () {
        };
        return PlayerTurret;
    }(objects.GameObject));
    objects.PlayerTurret = PlayerTurret;
})(objects || (objects = {}));
//# sourceMappingURL=playerturret.js.map