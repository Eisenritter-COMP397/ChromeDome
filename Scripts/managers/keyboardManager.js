var managers;
(function (managers) {
    var Keyboard = /** @class */ (function () {
        // Constructor
        function Keyboard() {
            this.enabled = true;
            // Listen for keyup and keydown events through the DOM
            document.addEventListener("keydown", this.onKeyDown.bind(this), false);
            document.addEventListener("keyup", this.onKeyUp.bind(this), false);
        }
        // Methods 
        Keyboard.prototype.onKeyDown = function (event) {
            switch (event.keyCode) {
                case config.Keys.W:
                case config.Keys.UP_ARROW:
                    this.moveUp = true;
                    break;
                case config.Keys.A:
                    this.turretRotateLeft = true;
                    break;
                case config.Keys.LEFT_ARROW:
                    this.hullRotateLeft = true;
                    break;
                case config.Keys.S:
                case config.Keys.DOWN_ARROW:
                    this.moveDown = true;
                    break;
                case config.Keys.D:
                    this.turretRotateRight = true;
                    break;
                case config.Keys.RIGHT_ARROW:
                    this.hullRotateRight = true;
                    break;
                case config.Keys.SPACE:
                    this.fireMainGun = true;
                    break;
                case config.Keys.Q:
                    console.log("new laser pew");
                    this.shoot2 = true;
                    break;
                case config.Keys.E:
                    console.log("3rd laser pew");
                    this.shoot3 = true;
            }
        };
        Keyboard.prototype.onKeyUp = function (event) {
            switch (event.keyCode) {
                case config.Keys.W:
                case config.Keys.UP_ARROW:
                    this.moveUp = false;
                    break;
                case config.Keys.A:
                    this.turretRotateLeft = false;
                    break;
                case config.Keys.LEFT_ARROW:
                    this.hullRotateLeft = false;
                    break;
                case config.Keys.S:
                case config.Keys.DOWN_ARROW:
                    this.moveDown = false;
                    break;
                case config.Keys.D:
                    this.turretRotateRight = false;
                    break;
                case config.Keys.RIGHT_ARROW:
                    this.hullRotateRight = false;
                    break;
                case config.Keys.SPACE:
                    this.fireMainGun = false;
                    break;
                case config.Keys.Q:
                    console.log("new laser pew");
                    this.shoot2 = false;
                    break;
                case config.Keys.E:
                    console.log("3rd laser pew");
                    this.shoot3 = false;
            }
        };
        return Keyboard;
    }());
    managers.Keyboard = Keyboard;
})(managers || (managers = {}));
//# sourceMappingURL=keyboardManager.js.map