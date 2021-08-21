
const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
]

// Write a function that
//      takes an array as an argument of objects 
//          *note: record is an array that contains 3 objects
//      uses find() method to test each object to see if the result is "W"
//      return the year when the win occurred
//      return undefined if no winis found 

// an already declared function as argument 
function superbowlWin (array) {
    function winFinder(element){
        return element.result === "W"
    }
    const yearWin = array.find(winFinder)
    if (yearWin){
        return yearWin.year
    } else {
        return undefined
    }
}

/*
// an anonymous function as argument 
function superbowlWin (array) {
    const yearWin = array.find(function(element) {return element.result === "W"})
    if (yearWin) {
        return yearWin.year;
    } else {
        return undefined
    }
}
*/

/*
// an arrow function as argument 
function superbowlWin (array) {
    const yearWin = array.find(element => element.result === "W")
    if (yearWin) {
        return yearWin.year;
    } else {
        return undefined
    }
}
*/

/* other ways to pass the test
function superbowlWin(array) {
    let yearWin = array.find(function (element){
        if (element.result === "W"){
            return element.year
        } 
    })
    if (yearWin === undefined){
        return undefined
    } else{
        return yearWin.year;
    }
}
*/
