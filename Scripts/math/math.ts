module math{
    export class Vector2 extends createjs.Point{
        constructor(x:number=0, y: number=0){
            super(x,y);
        }

        public static Distance(vec1:math.Vector2, vec2:math.Vector2):number{
            return Math.floor(Math.sqrt(Math.pow(vec2.x - vec1.x, 2) + Math.pow(vec2.y - vec1.y, 2)));
        }

        public static Add(vec1:math.Vector2, vec2:math.Vector2):math.Vector2{
            let result:math.Vector2 = new math.Vector2(vec1.x +vec2.x, vec1.y + vec2.y);
            return result;
        }

        public static Subtract(vec1:math.Vector2, vec2:math.Vector2):math.Vector2 {

            let result:math.Vector2 = new math.Vector2(vec1.x - vec2.x, vec1.y - vec2.y);
            return result;
        }

        public static Mulitply(vec1:math.Vector2, scalar:number):math.Vector2 {
            return new math.Vector2(vec1.x * scalar, vec1.y * scalar);
        }

        public static Divide(vec1:math.Vector2, scalar:number):math.Vector2 {
            return new math.Vector2(vec1.x / scalar, vec1.y / scalar);
        }

        public static Zero():math.Vector2{
            return new math.Vector2(0,0);
        }
    }
}