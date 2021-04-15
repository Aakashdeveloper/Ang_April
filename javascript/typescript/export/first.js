let dbObj = {};

dbObj.user = [
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

dbObj.dbQuery = {
    find: (table) => { return `Select * from ${table}`}
}

//es5
export default dbObj;
//module.exports = dbObj;