function add(a,b){
    return a+b
}

add(1,2)
3

//es6
const add = (a,b) =>  { return a+b}
add(1,2)
3


function test(a,b){
    return a,b
}

test(1,2)
2

//Rest
function add(...args){
    console.log(args)
}
add(1,2,3,4)
[1,2,3,4]

function add(...args){
    let sum = 0;
    for(data of args){
        sum = data+sum
    }
    return sum
}

add(1,2,3,4)
10