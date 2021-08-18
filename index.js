class Array{
    constructor(){
        this.array = {};
        for (let i = 0; i < arguments.length; i++) {
            this.array[i] = arguments[i];
        }
        this.length = arguments.length;
    }
}



const myArray = new Array (1, 2, 3, 4, 5);
console.log(myArray);