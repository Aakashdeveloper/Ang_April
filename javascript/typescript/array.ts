Array is a collection of homogenious or hetrogenious element 

var a = [1,3,5,6,3] (array of number)
var b = ['dsg','wey','egew','eger'](array of string)
var c= [true,false,false,true, true](array of Boolean)
var d = [3,4,'dsv','dbds',true,35,4,true]

typeof(d)
"object"

typeof(d[0])
"number"

typeof(d[2])
"string"

var city = ["London", "NewYork", "Paris"]

city.push("Delhi")
4
city
(4) ["London", "NewYork", "Paris", "Delhi"]
city.push("Dubai","Amsterdam")
6
city
(6) ["London", "NewYork", "Paris", "Delhi", "Dubai", "Amsterdam"]
city.pop()
"Amsterdam"
city
(5) ["London", "NewYork", "Paris", "Delhi", "Dubai"]
city.pop(2)

var city = ["London", "NewYork", "Paris"]
undefined
city.unshift("Delhi")
4
city
(4) ["Delhi", "London", "NewYork", "Paris"]
city.shift(1)
"Delhi"

push > add in the end of array
unshift > add in the begining of array
pop > remove the last value of array
shift > remove the first value of array

var city = ["Delhi", "London", "NewYork", "Paris"]
undefined
city.indexOf('Delhi')
0
city.indexOf('Paris')
3
city.indexOf('Mumbai')
-1
city.indexOf('Amsterdam')
-1

var city = ["Delhi", "London", "NewYork", "Paris"]
undefined
Array.isArray(city)
true
var a = 10
undefined
Array.isArray(a)
false