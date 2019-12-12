module objects {
    import Anchors = Utils.Anchors;
    import Color = Utils.Color;
    // Buttons
    export class Button extends createjs.Bitmap {
        // Variables
        protected text: createjs.Text;
        // Constructor
        constructor(assetManager: createjs.LoadQueue, imageString: string,
            position: math.Vector2, text: string, font?: string, color?: string) {
            super(assetManager.getResult(imageString));

            //  if (isCentered) {
            //     this.regX = this.getBounds().width * 0.5;
            //     this.regY = this.getBounds().height * 0.5;
            // }

            this.text = new createjs.Text(text, font, color);
            // Set default position
            this.x = position.x;
            this.y = position.y;
            // Set event handlers
            this.on("mouseover", this.mouseOver);
            this.on("mouseout", this.mouseOut);
        }
        // Methods
        // Mouseover Effects
        private mouseOver(): void {
            this.alpha = 0.7;
        }

        private mouseOut(): void {
            this.alpha = 1.0;
        }
    }

    // Labels
    export class Label extends createjs.Text {
        protected textColor: string;
        protected isButton: boolean;

        constructor(labelString: string, fontSize: string, fontFamily: string,
            textColor: Color, position: math.Vector2, anchor: Anchors = Anchors.CENTERCENTER,
            isButton: boolean = false
        ) {
            super(labelString, fontSize + " " + fontFamily, textColor.toString());
            // Set the registration anchoring
            switch (anchor) {
                case Anchors.TOPLEFT:
                    this.regX = 0;
                    this.regY = 0;
                    break;
                case Anchors.TOPCENTER:
                    this.regX = this.getMeasuredWidth() * 0.5;
                    this.regY = 0;
                    break;
                case Anchors.TOPRIGHT:
                    this.regX = this.getMeasuredWidth();
                    this.regY = 0;
                    break;
                case Anchors.CENTERLEFT:
                    this.regX = 0;
                    this.regY = this.getMeasuredHeight() * 0.5;

                case Anchors.CENTERCENTER:
                    this.regX = this.getMeasuredWidth() * 0.5;
                    this.regY = this.getMeasuredHeight() * 0.5;
                    break;
                case Anchors.CENTERLEFT:
                    this.regX = this.getMeasuredWidth();
                    this.regY = this.getMeasuredHeight() * 0.5;

                case Anchors.BOTTOMLEFT:
                    this.regX = 0;
                    this.regY = this.getMeasuredHeight();;
                    break;
                case Anchors.BOTTOMCENTER:
                    this.regX = this.getMeasuredWidth() * 0.5;
                    this.regY = this.getMeasuredHeight();
                    break;
                case Anchors.BOTTOMRIGHT:
                    this.regX = this.getMeasuredWidth();
                    this.regY = this.getMeasuredHeight();
                    break;
            }
            // Set default position
            this.x = position.x;
            this.y = position.y;
            this.isButton = isButton;
            this.textColor = textColor.toString();

                this.on("mouseover", this.mouseOver);
                this.on("mouseout", this.mouseOut);
    
        }
        private mouseOver(): void {
            if(this.isButton){
            this.alpha = 0.7;
            createjs.Sound.play("ButtonSelected");
            this.scaleX += 0.1;
            this.scaleY +=0.1;
            this.color = new Color(255,0,0,1).toString();
        }
        }

        private mouseOut(): void {
            if(this.isButton){
            this.alpha = 1.0;
            this.scaleX -= 0.1;
            this.scaleY -=0.1;
            this.color = this.textColor;
        }
        }
    }

    // images
    export class Image extends createjs.Bitmap {
        // Variables
        // Constructor
        constructor(assetManager: createjs.LoadQueue, imageString: string,
            position: math.Vector2, anchor?: Anchors) {
            super(assetManager.getResult(imageString));
            // Set the registration anchoring
            switch (anchor) {
                case Anchors.TOPLEFT:
                    this.regX = 0;
                    this.regY = 0;
                    break;
                case Anchors.TOPCENTER:
                    this.regX = this.getBounds().width * 0.5;
                    this.regY = 0;
                    break;
                case Anchors.TOPRIGHT:
                    this.regX = this.getBounds().width;
                    this.regY = 0;
                    break;
                case Anchors.CENTERLEFT:
                    this.regX = 0;
                    this.regY = this.getBounds().height * 0.5;

                case Anchors.CENTERCENTER:
                    this.regX = this.getBounds().width * 0.5;
                    this.regY = this.getBounds().height * 0.5;
                    break;
                case Anchors.CENTERLEFT:
                    this.regX = this.getBounds().width;
                    this.regY = this.getBounds().height * 0.5;

                case Anchors.BOTTOMLEFT:
                    this.regX = 0;
                    this.regY = this.getBounds().height;
                    break;
                case Anchors.BOTTOMCENTER:
                    this.regX = this.getBounds().width * 0.5;
                    this.regY = this.getBounds().height;
                    break;
                case Anchors.BOTTOMRIGHT:
                    this.regX = this.getBounds().width;
                    this.regY = this.getBounds().height;
                    break;
                default:
                    break;
            }
        }
        // Methods
        public Start(): void { }
        public Update(): void { }
    }

}