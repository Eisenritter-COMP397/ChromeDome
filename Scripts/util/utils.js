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
    var Anchors;
    (function (Anchors) {
        Anchors[Anchors["TOPLEFT"] = 0] = "TOPLEFT";
        Anchors[Anchors["TOPCENTER"] = 1] = "TOPCENTER";
        Anchors[Anchors["TOPRIGHT"] = 2] = "TOPRIGHT";
        Anchors[Anchors["CENTERLEFT"] = 3] = "CENTERLEFT";
        Anchors[Anchors["CENTERCENTER"] = 4] = "CENTERCENTER";
        Anchors[Anchors["CENTERRIGHT"] = 5] = "CENTERRIGHT";
        Anchors[Anchors["BOTTOMLEFT"] = 6] = "BOTTOMLEFT";
        Anchors[Anchors["BOTTOMCENTER"] = 7] = "BOTTOMCENTER";
        Anchors[Anchors["BOTTOMRIGHT"] = 8] = "BOTTOMRIGHT";
    })(Anchors = Utils.Anchors || (Utils.Anchors = {}));
    var Color = /** @class */ (function () {
        function Color(red, green, blue, alpha) {
            if (red === void 0) { red = 0; }
            if (green === void 0) { green = 0; }
            if (blue === void 0) { blue = 0; }
            if (alpha === void 0) { alpha = 1; }
            this.red = red;
            this.green = green;
            this.blue = blue;
            this.alpha = alpha;
        }
        Color.prototype.toString = function () {
            return "rgba(" + this.red.toString() + "," + this.blue.toString() + "," + this.green.toString() + "," + this.alpha.toString();
        };
        return Color;
    }());
    Utils.Color = Color;
})(Utils || (Utils = {}));
//# sourceMappingURL=utils.js.map