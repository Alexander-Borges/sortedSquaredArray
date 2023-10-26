function sortedSquaredArray(array) {
    // Write your code here.
    const squaredArray = array.map((num) => num * num);
    return squaredArray.sort((a,b) => a -b);
}

    const inputArray = [-5,-3,-1,2,4,5];
    const resultArray = sortedSquaredArray(inputArray);


    console.log(inputArray)
  // Do not edit the line below.
    exports.sortedSquaredArray = sortedSquaredArray;
