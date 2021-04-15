var movie = "Avengers"
var lang = "English"
var rating = 4.5

var movie1 = "Jab We Met"
var lang1 = "Hindi"
var rating1 = 5

var movies  = [
    {
        name:"Avenger",
        lang:'English',
        rating:4.3
    },
    {
        name:"Jab We Met",
        lang:'Hindi',
        rating:4.5
    }
]

var movies  = {
    name:"Jab We Met",
    lang:'Hindi',
    rating:4.5
}
undefined
movies.name
"Jab We Met"
movies.rating=4.6
4.6
movies
{name: "Jab We Met", lang: "Hindi", rating: 4.6}
movies.ind="Hollywood"
"Hollywood"
movies
{name: "Jab We Met", lang: "Hindi", rating: 4.6, ind: "Hollywood"}
delete movies.lang
true
movies
{name: "Jab We Met", rating: 4.6, ind: "Hollywood"}
movies['name']
"Jab We Met"

var calc = {
    add: function(a,b){ return a+b},
    sub: (a,b) =>  {return a-b}
}

calc.sub(4,1)
3
calc.add(1,2)
3

var dbQuery = {
    find: (table) => { return `Select * from ${table}`}
}

dbQuery.find('student')