/*Create new object*/

const  object = {0:1, 1:2, 2:3, 3:4, 4:5};

const objectLength = Object.keys(object).length;

const  objectPlusLength = {0:1, 1:2, 2:3, 3:4, 4:5, 'length':objectLength};

const Object1 = Object.values(objectPlusLength);


console.log(objectPlusLength)
console.log(Object1)