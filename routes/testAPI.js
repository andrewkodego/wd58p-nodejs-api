var express = require("express");
var router = express.Router();

const studentsInfo = [
	{firstName:"Juan", lastName:"Dela Cruz", id:"001", age: 24,gender: "male", course: "Manager",birthdate:"1990-01-01"},
	{firstName:"Anna", lastName:"Salvador", id:"002", age: 21, gender: "female", course: "Junior Dev",birthdate:"1991-01-01"},
	{firstName:"Mark", lastName:"Bautista", id:"003", age: 28, gender: "male", course: "Senior Fullstack Dev",birthdate:"1992-01-01"},
	{firstName:"Micheal", lastName:"Garcia", id:"004", age: 31, gender: "male", course: "CEO",birthdate:"1993-01-01"},
    {firstName:"Michelle", lastName:"Bautista", id:"005", age: 34, gender: "female", course: "CEO",birthdate:"1993-01-01"},
    {firstName:"Nicole", lastName:"Dela Cruz", id:"006", age: 30, gender: "female", course: "CEO",birthdate:"1993-01-01"},
];

router.get("/", (req, res, next) => {
    res.send("API is working properly");
});

router.get("/students", (req,res, next) =>{
    res.send(studentsInfo);
});


const axios = require('axios');

router.get("/news-api", (req,res, next) =>{
    // Set the API endpoint URL and parameters
    const url = 'https://newsapi.org/v2/everything';
    const params = {
        q:'apple',
        from:'2023-05-05',
        to:'2023-05-05',
        sortBy:'popularity',
        apiKey: 'bb32c96502a24cafb4fc9e33851be330',
    };

    // Make the API call using axios
    axios.get(url, { params })
    .then(response => {
        // Handle the API response
        //console.log(response.data);
        res.send(response.data);
    })
    .catch(error => {
        // Handle any errors that occur
        //console.error(error);
        res.send(error);
    });
});

module.exports = router;
