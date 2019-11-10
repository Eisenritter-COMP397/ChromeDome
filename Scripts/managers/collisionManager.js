var managers;
(function (managers) {
    var Collision = /** @class */ (function () {
        function Collision() {
        }
        Collision.CheckAABB = function (object1, object2) {
            // Check all bounds
            if ((object1.x + object1.halfW) > (object2.x - object2.halfW) &&
                (object1.x - object1.halfW) < (object2.x + object2.halfW) &&
                (object1.y + object1.halfH) > (object2.y - object2.halfH) &&
                (object1.y - object1.halfH) < (object2.y + object2.halfH)) {
                switch (object2.name) {
                    case "Enemy":
                        managers.Game.currentSceneObject.removeChild(object1);
                        object1.Reset();
                        object2.Reset();
                        break;
                }
                object2.isColliding = true;
                return true;
            }
        };
        Collision.Check = function (object1, object2) {
            // Create 2 temp Vec2 objects used for collision detection
            var P1 = new math.Vector2(object1.x, object1.y);
            var P2 = new math.Vector2(object2.x, object2.y);
            if (math.Vector2.Distance(P1, P2) < (object1.halfH + object2.halfH)) {
                if (!object2.isColliding) {
                    // React to our collision
                    console.log("Collision with " + object2.name);
                    object2.isColliding = true;
                }
            }
            else {
                object2.isColliding = false;
            }
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collisionManager.js.map