class myArray {
  constructor() {
    this.array = {};
    for (let i = 0; i < arguments.length; i++) {
      this.array[i] = arguments[i];
    }
    this.length = arguments.length;
  }

  includes(searchValue, fromIndex) {
    if (fromIndex < 0) {
      fromIndex = this.length + fromIndex;
    }else if(typeof(fromIndex === undefined)){
      fromIndex = 0;
    }

    for (let i = fromIndex; i <= this.length; i++) {
      if (searchValue === this.array[i]) {
        return true;
      }else if(searchValue !== this.array[i] & i !== this.length){
        continue
      }
      return false;
    }
  }

  push() {
    for (let i = 0; i < arguments.length; i++) {
      this.array[i + this.length] = arguments[i];
    }
    this.length += arguments.length;
    return this.length;
  }

  pop() {
    const lastElement = this.array[this.length - 1];
    for (let i = this.length - 1; i < this.length; i++) {
      delete this.array[i];
      this.length -= 1;
      return lastElement;
    }
  }

  shift() {
    const first = this.array[0];

    for (let i = 0; i < this.length; i++) {
      this.array[i] = this.array[i + 1];
    }

    delete this.array[this.length - 1];
    this.length -= 1;

    return first;
  }

  /*не понимаю как сдвинуть значения в объекте вправо*/
  unshift() {
    for (let i = 0; i < this.length; i++) {
      this.array[i] =
        this.array[
          i + arguments.length
        ]; /*Удаляет первое значение, остальные сдвигаются на значение влево*/
    }

    this.length += arguments.length;
    return this.length;
  }

  /*Не могу понять откуда берётся в выводе array и как его убрать*/
  slice(beginValue, endValue) {
    const newMyArray = new myArray();
    for (let i = beginValue; i < endValue; i++) {
      const elements = this.array[i];
      newMyArray[i] = elements;
    }
    newMyArray.length = endValue - beginValue;
    return newMyArray;
  }

  forEach(callbackfn) {
    if (typeof callbackfn !== "function") {
      throw new TypeError(callbackfn + " is not a function");
    }

    for (let index = 0; index < this.length; index++) {
      const element = this.array[index];
      if (element !== undefined) {
        callbackfn(element, index, this.array);
      }
    }
  }

  map(callbackfn) {
    if (typeof callbackfn !== "function") {
      throw new TypeError(callbackfn + " is not a function");
    }

    const newArray = new MyArray();

    for (let index = 0; index < this.length; index++) {
      const element = this.array[index];

      const result = callbackfn(element, index, this.array);

      newArray[i] = result;
    }

    return newArray;
  }
}

const MyArray = new myArray(1, 2, 3, 4, 5);
console.log(MyArray);
