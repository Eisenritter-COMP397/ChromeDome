module managers{
    export class Shell{
        private shellCount:number;
        public Shell: objects.Shell[];
        public CurrentShell: number;

        // Constructor
        constructor() {
            this.Start();
        }

        // Methods
        public buildShellPool():void{
            for(let i=0; i<this.shellCount; i++){
                this.Shell[i] = new objects.Shell("MediumShell",1);
            }
        }

        public GetShell(): objects.Shell{
            console.log(this.CurrentShell);
            let shell:objects.Shell =  this.Shell[this.CurrentShell];
            this.CurrentShell++;
            if(managers.Game.shellManager.CurrentShell>this.shellCount-1){
                managers.Game.shellManager.CurrentShell =0;
                return shell;
            }
        }

        public Start():void{
            this.shellCount = 100;
            this.Shell = new Array<objects.Shell>();
            this.buildShellPool();
            this.CurrentShell = 0;
        }
        public Update():void{
            this.Shell.forEach(shell=>{
                shell.Update();
            });
        }


    }
}