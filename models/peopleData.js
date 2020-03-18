let db = require('../db/db');
//db.query("DROP TABLE people");
//db.query("CREATE TABLE people(id SERIAL PRIMARY KEY, name varchar(30) not null, about varchar(300) not null, url varchar(300) not null)");

function addPeople(e) {
     db.query("Insert into people (name,about,url) VALUES ('" + e.name +"','"+ e.about + "','"+ e.url +"')");
}

function getAllPeople() {
    return db.query('Select * from people');
}

function getPeople(id) {
    return db.query('Select * from people where id = ' + id);
}

module.exports = {
    add : addPeople,
    getall : getAllPeople,
    getpeople: getPeople 
}