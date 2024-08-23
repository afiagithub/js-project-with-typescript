abstract class TakePhoto{
    constructor(public cameraMode: string, public filter: string){}

    abstract getSepia(): void
    getReelTime(): number {
        //calculation
        return 8
    }
}

class Instagram extends TakePhoto{
    constructor(public cameraMode: string, public filter: string, public burst: number){
        super(cameraMode, filter)
    }
    getSepia(){
        console.log('abstract class invoked');
        
    }
}

const asia = new Instagram('cinema', 'black & white', 3)
console.log(asia);
