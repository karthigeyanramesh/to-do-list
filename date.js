
// we can also use module.exports burt shorter version below

// method 1 - normal 
module.exports.getDay= getDay;
function getDay(){
let options = { 
    day: 'numeric' };


let today = new Date()


let day = today.toLocaleDateString("en-IN", options);
return day
}


module.exports.getDate = getDate;
function getDate(){
    let options = { 
        weekday: 'long', 
        month: 'long', 
        day: 'numeric' };
    
    
    let today = new Date() 
    let day = today.toLocaleDateString("en-IN", options);
    return day
}

// method 2 - by using anonymous func  and shortcut exports

// module.exports.getDay= getDay;
// var getDay= function() {
// let options = { 
//     day: 'numeric' };


// let today = new Date()


// let day = today.toLocaleDateString("en-IN", options);
// return day
// }


// module.exports.getDate = getDate;
// var  getDate= function() {
//     let options = { 
//         weekday: 'long', 
//         month: 'long', 
//         day: 'numeric' };
    
    
//     let today = new Date() 
//     let day = today.toLocaleDateString("en-IN", options);
//     return day
// }

