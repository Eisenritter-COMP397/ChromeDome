module managers {
    export class Collision {
        public static CheckAABB(object1: objects.GameObject, object2: objects.GameObject) {
            // Check all bounds
            if((object1.x + object1.halfW) > (object2.x - object2.halfW) &&
                (object1.x - object1.halfW) < (object2.x + object2.halfW) &&
                (object1.y  + object1.halfH) > (object2.y - object2.halfH) &&
                (object1.y - object1.halfH) < (object2.y + object2.halfH)) {

                    switch(object2.name) 
                    {
                        case "enemy":
                            // Change the score

                            // Create my explosion
                        break;
                    }

                    object2.isColliding = true;
                }
            }

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
        }
    }
} 