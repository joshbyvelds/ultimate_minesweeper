
// Compile Settings
const debug = true;

// Modes
const SEARCH:number = 1
const FLAG:number = 2;

// -------------- INTERFACES ------------------ //

interface Tile{
    x:number;
    y:number;
    mine:boolean;
    searched:boolean;
}

// -------------- GAME CLASS ------------------ //

class Minesweeper{
    private mode:number;
    private rows:number;
    private cols:number;
    private mines:number;
    private field:Tile[];
    private game_wrapper:HTMLElement;
    private selectedTile:Tile;

    constructor(rows:number, cols:number, mines:number){
        f("Minesweeper Constructor", [rows,cols,mines]);
        this.mode = SEARCH;
        this.rows = rows;
        this.cols = cols;
        this.mines = mines;
        this.field = [];
        this.game_wrapper = document.getElementById("game");

        let x:number = 0;
        let y:number = 0;
        let mines_left = this.mines;

        // Build Grid..
        while(y < this.rows){
            while(x < this.cols){
                let mine:boolean = false;
                if(mines_left > 0 && (this.randomBool(33) || ((this.rows * this.cols) - ((y * this.rows) + x)) === mines_left )){
                    mine = true;
                    mines_left--;
                }
                this.field.push({x:x, y:y, mine:mine, searched:false});
                let block:HTMLElement = document.createElement("div");
                block.classList.add("block");
                block.setAttribute('data-x', x.toString());
                block.setAttribute('data-y', y.toString());
                this.game_wrapper.appendChild(block);
                x++;
            }
            x = 0;
            y++;
        }

        //v(this.field);

        this.setupEventHandlers();
    }


    private randomBool(chance:number = 50):boolean{
        let r:boolean = !!((Math.random() * 100) <= chance);
        return r;
    }

    private setupEventHandlers(){
        const blocks = document.querySelectorAll('.block');
        let c:number = 0;
        while(c < blocks.length){
            blocks[c].addEventListener('click', (event) => {this.clickedBlock(event)});
            c++;
        }
    }

    private clickedBlock(event){
        f("clickedBlock");
        const target = event.target;
        const id:number = this.getTileId(parseInt(event.target.getAttribute('data-x')), parseInt(event.target.getAttribute('data-y')));
        this.selectedTile = this.field[id];


        if(this.mode === SEARCH){
            // check if we clicked a mine..
            if(this.selectedTile.mine){
                this.clickedMine();
                return;
            }

            event.target.innerHTML = this.searchSurroundingTiles(id).toString();
        }
    }

    private getTileId(x:number, y:number):number {
        return (y * this.rows) + x;
    }

    private clickedMine(){
        f("clickedMine");
        a("You Lose!");
    }

    private searchSurroundingTiles(tileId:number){
        f("searchSurroundingTiles");

        let result:number = 0;

        // left
        if(tileId % this.cols !== 0){
            if(this.field[tileId - 1].mine){
                result++;
            }
        }

        // right
        if(tileId % this.cols !== (this.cols - 1)){
            if(this.field[tileId + 1].mine){
                result++;
            }
        }

        //top
        if(tileId > this.cols){
            if(this.field[tileId - this.cols].mine){
                result++;
            }

            // top left
            if(tileId % this.cols !== 0){
                if(this.field[tileId - this.cols - 1].mine){
                    result++;
                }
            }

            //top right
            if(tileId % this.cols !== (this.cols - 1)){
                if(this.field[tileId - this.cols - 1].mine){
                    result++;
                }
            }
        }

        // bottom
        if(tileId < (this.rows * this.cols) - this.cols){
            if(this.field[tileId + this.cols].mine){
                result++;
            }

            // bottom left
            if(tileId % this.cols !== 0){
                if(this.field[tileId + this.cols - 1].mine){
                    result++;
                }
            }

            // bottom right
            if(tileId % this.cols !== (this.cols - 1)){
                if(this.field[tileId + this.cols + 1].mine){
                    result++;
                }
            }
        }

        return result;
    }
}

// -------------- DEBUG FUNCTIONS ------------------ //

function f(function_name:string, params = []){
    let param_list:string = "";
    for(const param in params){
        param_list += "," + param.toString();
    }

    param_list = param_list.substring(1);

    console.log(function_name + "(" + param_list + ")");
}

function a(message:string){
    alert(message);
}

function m(message:string){
    console.log(message);
}

function v(variable){
    console.log(variable);
}


(() => {
    return new Minesweeper(10,10,30);
})();
