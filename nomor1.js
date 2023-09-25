// 1. Push(). This method is used to add one or more element to end of array.

let array = [1, 2, 3];
array.push(4);


// 2. parseInt(). This method is used to convert a string to an integer.

let angka = parseInt('42');

// 3. parseFloat(). This method is used to convert a string into a decimal number.

let desimal = parseFloat('3.14')


// 4. length. This property is used to measure the length of a String, Array or other object that you want to calculate.

const kata = "Nama saya Rama";
const panjangKata = kata.length;
console.log(panjangKata)

// 5. pop(). This method is used to delete the last element from an Array also can return that element.

let arrPop = [1, 2, 3]
let arrTerakhir = arrPop.pop();

// 6. shift(). This method is used to remove the first element from the array.

let arrShift = [1, 2, 3];
let arrPertama = arrShift.shift()

// 7. unshift(). This method is used to add elements to the beginning of an array.

let arrUnshift = [2, 3];
arrUnshift.unshift(1);

// 8. concat(). This method is used to combine two or more arrays and can also return a new array.

let arr1 = [1, 2];
let arr2 = [3, 4];
let arrConcat = arr1.concat(arr2)


// 9. join(). This method is used to combine all the elements in an array into one string.

let arrJoin = ['Nama', 'Saya', 'Rama'];
let gabung = arrJoin.join(' ')
console.log(gabung)

// 10. splice(). This method is used to change the contents of an Array by deleting, replacing, or adding new elements.

let arrSplice = [1, 2, 3, 4, 5];
arrSplice.splice(3, 2, 'empat')

console.log(arrSplice)