if(condition){
    // do something
}else{
    // do something
}

var a = 878787
if(a%2==0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}

//////////
var a = 1
if(a){
    console.log("hiii")
}else{
    console.log("Bie")
}
VM158:3 hiii

var a = 0
if(a){
    console.log("hiii")
}else{
    console.log("Bie")
}
VM163:5 Bie

var a = -1
if(a){
    console.log("hiii")
}else{
    console.log("Bie")
}
VM168:3 hiii

truthy > any number expect 0 weather +ve or -ve / string / true 
falsy > 0, false, null , undefined


var a = true
var b = true
a+b 
2

true == 1
false == 0

////
single line if else
var a = 10
a>10 ? "hii": "bie"
"bie"

var a = 10
a==10 ? "hii": "bie"
"hii"

var a = 10
a>10 ? a+1:a-1
9

var a = 10
a==10 ? a+1:a-1
11