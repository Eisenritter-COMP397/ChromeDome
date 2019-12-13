module managers {
    export class Collision {
        public static CheckAABB(object1: objects.GameObject, object2: objects.GameObject) {
           // console.log("Object1: "+object1.Transform.HalfSize);
            //console.log("Object2: "+object2.Transform.HalfSize);

            // Check all bounds
            if((object1.x + object1.Transform.HalfSize.x) > (object2.x - object2.Transform.HalfSize.x) &&
                (object1.x - object1.Transform.HalfSize.x) < (object2.x + object2.Transform.HalfSize.x) &&
                (object1.y  + object1.Transform.HalfSize.y) > (object2.y - object2.Transform.HalfSize.y) &&
                (object1.y - object1.Transform.HalfSize.y) < (object2.y + object2.Transform.HalfSize.y)) {

                    //object2.isColliding = true;
                    return true;
                }
            }
        
            /*
        public static Check(object1: objects.GameObject, object2: objects.GameObject) {
            // Create 2 temp Vec2 objects used for collision detection
            let P1: math.Vector2 = new math.Vector2(object1.x, object1.y);
            let P2: math.Vector2 = new math.Vector2(object2.x, object2.y);

            if(math.Vector2.Distance(P1, P2) < (object1.halfH + object2.halfH)) {
                if(!object2.isColliding) {
                    // React to our collision
                    console.log("Collision with " + object2.name);
                    object2.isColliding = true;
                }
            } 
            else
            {
                object2.isColliding = false;
            }
        }*/
    }
} 