var config;
(function (config) {
    var Keys = /** @class */ (function () {
        function Keys() {
        }
        // Arrow Keys
        Keys.LEFT_ARROW = 37;
        Keys.UP_ARROW = 38;
        Keys.RIGHT_ARROW = 39;
        Keys.DOWN_ARROW = 40;
        // WASD Keys
        Keys.W = 87;
        Keys.A = 65;
        Keys.S = 83;
        Keys.D = 68;
        // Spacebar
        Keys.SPACE = 32;
        //Other useable keys
        Keys.Q = 81;
        Keys.E = 69;
        return Keys;
    }());
    config.Keys = Keys;
})(config || (config = {}));
//# sourceMappingURL=keys.js.map