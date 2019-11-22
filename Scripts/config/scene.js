var config;
(function (config) {
    var Scene;
    (function (Scene) {
        Scene[Scene["START"] = 0] = "START";
        Scene[Scene["INSTRUCTIONS"] = 1] = "INSTRUCTIONS";
        Scene[Scene["GAME"] = 2] = "GAME";
        Scene[Scene["TRANSITION"] = 3] = "TRANSITION";
        Scene[Scene["GAME2"] = 4] = "GAME2";
        Scene[Scene["TRANSITION2"] = 5] = "TRANSITION2";
        Scene[Scene["GAME3"] = 6] = "GAME3";
        Scene[Scene["OVER"] = 7] = "OVER";
        Scene[Scene["WIN"] = 8] = "WIN";
    })(Scene = config.Scene || (config.Scene = {}));
})(config || (config = {}));
//# sourceMappingURL=scene.js.map