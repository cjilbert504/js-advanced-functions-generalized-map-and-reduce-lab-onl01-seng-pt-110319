// Add your functions here
function map(numArr, func) {
    let newArr = [];
    numArr.forEach(element => {
        newArr.push(func(element));
    });
    return newArr;
}

// function reduce(sourceArray, func, startingPoint) {
//     let start = (!!startingPoint) ? startingPoint : 0;
//     sourceArray.forEach(element => {
//         start = func(element, start);
//     })
//     return start;
// }

function reduce(src, cb, starting){
    let r = (!!starting) ? starting : src[0]
    let i = (!!starting) ? 0 : 1
  
    for (; i < src.length; i++) {
      r = cb(src[i], r)
    }
  
    return r;
  }