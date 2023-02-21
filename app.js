
// new concept -EJS
const express = require("express");
const bodyParser= require("body-parser")

const https = require("https");
const exp = require("constants");
// when making your own module, calling the module varies
const date = require(__dirname+"/date.js")
const app = express();

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))




app.set('view engine', 'ejs')
const items=["buy food", "make food", "eat food"];
let workList=[];







app.get("/", function(req, res){ 

    let day = date.getDate();

    // var currentDay= today.getDay()
    // above will generate number bw 0-6
    // var daysOfWeek=["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", 
    // "Saturday", "Sunday"]
    // var day = ""
    // exactDay= daysOfWeek[currentDay-1];
    // if (currentDay==6 || currentDay==0){

    //     day = "weekend" 


    // }else{day = "weekday"
    // }

    // using date in JS down 
    
//  the 'list' below is something u need to write yourself
    res.render('list', {listTitle:day, newListItem:items});
        // using date in JS up 

    // res.render("list",{todo:todo})
    console.log(day)

})

app.post("/",function(req,res){
    var item= req.body.newItem

    if(req.body.list==="work"){
        workList.push(item)
        res.redirect("/work")
    
    }else{
        items.push(item)
        res.redirect("/")
    }
    console.log(req.body)
    

    
    


    
    
})

app.get("/work",function(req,res){
    res.render('list', {listTitle:"work",newListItem:workList})


})

app.get("/about",function(req,res){
    res.render("about");


})

// you don't need app.post for work directory as its being redirected to "/"

app.listen(3000,function(){
    console.log("server initiated!")
});

// *** CSS
// we use the below code to use css for websites.
// app.use(express.static("public"));

// remeber for mailchimp go to the Batch subscribe or unsubscribe




