/*Es > Ecma Script 
es5
es6

//es5
var

//es6
let
const 


string > "Hi" '20' 'sv34' "f344"
number > 65 7567565 878.7867 .87867 
Boolean > true/false
null
undefined

var a = "Hi"
var b = 10
var c = true*/
var a = 10
var b = 20
console.log(a+b)
///////////////////
var > we can redecalre and reassign
let > we cannot redecalre but can reassign
const > we cannot redecalre nor reassign
////////////////////
var a = 10
var a > declare
a = 10 > assignment


> var a = 10
> a
10
> var a = 11
> a
11
> a = 12
12
> a
12


/////////
> let b = 10
> b
10
> let b = 11
Uncaught SyntaxError: Identifier 'b' has already been declared
> b = 12
12
> b
12

/////////////////
> const c = 10
undefined
> c
10
> const c = 11
Uncaught SyntaxError: Identifier 'c' has already been declared
> c = 11
Uncaught TypeError: Assignment to constant variable.



let a = 10
let b = 20
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)