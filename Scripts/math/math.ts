module math{
    export class Vector2 extends createjs.Point{
        constructor(x:number=0, y: number=0){
            super(x,y);
        }

        public static Distance(p1:Vector2, p2:Vector2):number{
            return Math.floor(Math.sqrt(Math.pow(p2.x - p1.x,2)+Math.pow(p2.y-p1.y,2)));
        }
    }
}