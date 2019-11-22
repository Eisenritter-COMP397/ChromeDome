module managers{
    export class Game {
        public static stage: createjs.Stage;
        public static assetManager: createjs.LoadQueue;
        public static currentScene: number;
        public static keyboardManager: managers.Keyboard;
        public static canvas: HTMLCanvasElement;
        public static currentSceneObject: objects.Scene;
        public static laserManager:managers.Laser;
        public static laserManager2:managers.Laser2;
        public static laserManager3:managers.Laser3;

    }
}