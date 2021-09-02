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
    } else if (typeof (fromIndex === undefined)) {
      fromIndex = 0;
    }

    for (let i = fromIndex; i <= this.length; i++) {
      if (searchValue === this.array[i]) {
        return true;
      } else if ((searchValue !== this.array[i]) & (i !== this.length)) {
        continue;
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

  unshift() {
    const copyArray = Object.assign({}, this.array);
    console.log(copyArray);

    for (let i = 0; i < arguments.length; i++) {
      this.array[i] = arguments[i];
    }

    for (let i = 0; i < this.length; i++) {
      this.array[i + arguments.length] = copyArray[i];
    }

    this.length += arguments.length;
    return this.length;
  }

  slice(beginValue, endValue) {
    const newMyArray = new myArray();
    for (let i = beginValue; i < endValue; i++) {
      const elements = this.array[i];
      newMyArray.array[i - beginValue] = elements;
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

  indexOf(searchElement) {
    for (let i = 0; i <= this.length; i++) {
      if (searchElement === this.array[i]) {
        return i;
      } else if ((searchElement !== this.array[i]) & (i != this.length)) {
        continue;
      } else {
        return -1;
      }
    }
  }

  find(callbackfn) {
    if (typeof callbackfn !== "function") {
      throw new TypeError(callbackfn + " is not a function");
    }

    for (let index = 0; index <= this.length; index++) {
      const element = this.array[index];

      const result = callbackfn(element, index, this.array);
      if (result === true) {
        return element;
      }
    }
  }

  findIndex(callbackfn) {
    if (typeof callbackfn !== "function") {
      throw new TypeError(callbackfn + " is not a function");
    }

    for (let index = 0; index <= this.length; index++) {
      const element = this.array[index];

      const result = callbackfn(element, index, this.array);
      if (result === true) {
        return index;
      }
    }
    return -1;
  }

  /*Пока не работает */
  splice(firstElement, deleteCount, newValue) {
    let spliceArray = new myArray();
    if (deleteCount !== 0) {
      for (let i = firstElement; i < deleteCount; i++) {
        const element = this.array[i];
        spliceArray.array[i] = element;
      }
      spliceArray.length = deleteCount - firstElement;
    } else {
      for (let i = firstElement; i < (arguments.length - 2); i++) {
        
        
      }
      spliceArray.length = this.array
    }
    return spliceArray;
  }
}

const MyArray = new myArray(1, 2, 3, 4, 5);
console.log(MyArray);

/*Проверка*/
/* MyArray.findIndex(function(value){
  if(3 < value){
    return true
  } 
}) */

const arrayTest = [1, 3, 5, 2, 7];
arrayTest.splice(2, 0, 11)
console.log(arrayTest)