const express = require('express');
const app = express();

var UserDetail = require('./model/model');
var router = require('./routes/route');

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.use(router);

// UserDetail.insertMany({firstName:"Tushar",lastName:"Mittal",email:"tushar.mittal639712@gmail.com",mobile:8881299414,birthdate:'2002-12-09',address:[{addLine1:"shastri nagar",pincode:'250004',city:"Meerut",state:"UP"}]});

//UserDetail.insertMany({firstName:'Tushar', lastName: 'Mittal', email: 'tushra.mittal6397@gmail.com', mobile: 8881299414, birthdate:'2002-12-09'});

// app.get('/', (req, res) => {
//     res.send('Server started.');
// })

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT} sucessfully.`);
});