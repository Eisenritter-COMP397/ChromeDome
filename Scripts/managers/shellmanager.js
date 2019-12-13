var managers;
(function (managers) {
    var Shell = /** @class */ (function () {
        // Constructor
        function Shell() {
            this.Start();
        }
        // Methods
        Shell.prototype.buildShellPool = function () {
            for (var i = 0; i < this.shellCount; i++) {
                this.Shell[i] = new objects.Shell("MediumShell", 5);
            }
        };
        Shell.prototype.GetShell = function () {
            var shell = this.Shell[this.CurrentShell];
            this.CurrentShell++;
            if (managers.Game.shellManager.CurrentShell > this.shellCount - 1) {
                managers.Game.shellManager.CurrentShell = 0;
                return shell;
            }
        };
        Shell.prototype.Start = function () {
            this.shellCount = 10;
            this.Shell = new Array();
            this.buildShellPool();
            this.CurrentShell = 0;
        };
        Shell.prototype.Update = function () {
            if (managers.Game.shellManager.CurrentShell > this.shellCount - 1) {
                managers.Game.shellManager.CurrentShell = 0;
            }
            this.Shell.forEach(function (shell) {
                shell.Update();
            });
        };
        return Shell;
    }());
    managers.Shell = Shell;
})(managers || (managers = {}));
//# sourceMappingURL=shellmanager.js.map