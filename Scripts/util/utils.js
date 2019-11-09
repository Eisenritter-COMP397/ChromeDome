var Utils;
(function (Utils) {
    var Velocity = /** @class */ (function () {
        function Velocity(horizontalSpeed, verticalSpeed, noise) {
            this._hMinSpeed = horizontalSpeed.x;
            this._hMaxSpeed = horizontalSpeed.y;
            this._vMinSpeed = verticalSpeed.x;
            this._vMaxSpeed = verticalSpeed.y;
            this._noise = noise;
        }
        return Velocity;
    }());
    Utils.Velocity = Velocity;
})(Utils || (Utils = {}));
//# sourceMappingURL=utils.js.map