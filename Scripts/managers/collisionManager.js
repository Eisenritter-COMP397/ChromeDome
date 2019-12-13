var managers;
(function (managers) {
    var Collision = /** @class */ (function () {
        function Collision() {
        }
        Collision.CheckAABB = function (object1, object2) {
            // console.log("Object1: "+object1.Transform.HalfSize);
            //console.log("Object2: "+object2.Transform.HalfSize);
            // Check all bounds
            if ((object1.x + object1.Transform.HalfSize.x) > (object2.x - object2.Transform.HalfSize.x) &&
                (object1.x - object1.Transform.HalfSize.x) < (object2.x + object2.Transform.HalfSize.x) &&
                (object1.y + object1.Transform.HalfSize.y) > (object2.y - object2.Transform.HalfSize.y) &&
                (object1.y - object1.Transform.HalfSize.y) < (object2.y + object2.Transform.HalfSize.y)) {
                switch (object2.name) {
                    case "DummyEnemy":
                        //managers.Game.currentSceneObject.removeChild(object1);
                        object1.Reset();
                        object2.Reset();
                        //scoreboard.Score+=50;
                        break;
                }
                //object2.isColliding = true;
                return true;
            }
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collisionManager.js.map