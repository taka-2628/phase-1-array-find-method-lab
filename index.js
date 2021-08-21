
const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
]

// Write a function that
//      takes am array as an argument of objects 
//          *note: record is an array that contains 3 objects
//      uses find() method to test each object to see if the result is "W"
//      return the year when the win occurred
//      return undefined if no winis found 

/*
function superbowlWin(myArray) {
    let yearWin = myArray.find(element => element.result === "W")
      return yearWin.year
  }
  superbowlWin(record)
*/ 

/*
function superbowlWin(array) {
    let yearWin = array.find(function(element){
        if (element.result === "W"){
            return array.year
        } else {
            return undefined
        }
    })
}
*/

function superbowlWin(array) {
    let yearWin = array.find(function (element){
        if (element.result === "W"){
            return element.year
        } 
    })
    return yearWin;
}

//superbowlWin(record)

/*
function superbowlWin(array) {
    let yearWin = array.find(findWin)
    function findWin(element){
        if (element.result === "W"){
            return element.year
        } 
    }
    return yearWin;
}

superbowlWin(record)
*/

/*
function superbowlWin(array){
    let found = array.find(function(object){
        let isWin = (object.result === "w");
        if (isWin = true) {
            return isWin.year;
        } else {
            return undefined;
        }
    }) 
    return found;
}
*/


/*
function superbowlWin(array){
    let found = array.find(win) 
    function win(object){
        let isWin = object.result === "W";
        if (isWin = "W"){
            return object.year
        } else {
            return undefined
        }
    }
    return found;
}
*/




/*
function superbowlWin(array){
    function isWin(object){
        if (object.result === "W"){
            return object.year
        } else {
            return undefined
        }
    }
    array.find(isWin);
}

console.log(superbowlWin(record));

//console.log(superbowlWin(record));


/*
function isWin(item){
    return item.result === 'W'
}

console.log(isWin(record))
//console.log(record.find(isWin))


//console.log(record.find(function(item){return item.result ==="W"}));
*/