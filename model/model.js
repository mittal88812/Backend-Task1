const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/UserDetails').then(() => {
    console.log('Database connected successfully.');
}).catch((err) => {
    console.log('Error connecting with DB ', err);
});

// var notEmpty= function(address) {
//     if(address.length === 0) {
//         return false;
//     }
//     else {
//         return true;
//     }
// }

const UserDetailSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: [true, "email already exists in database!"],
        required: [true, 'Email address is required'],
        // match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        validate: {
            validator: function (v) {
              return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: '{VALUE} is not a valid email!'
            }
        },
    mobile: {
        type: String,
        trim: true,
        validate: {
            validator: function (v) {
                return /^[0-9]{10}/.test(v);
             },
        message: '{VALUE} is not a valid 10 digit number!'
            }
        },
    birthdate: {
        type: Date
    }
    // address: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: Addr,
    //     required: true,
    //     validate: [notEmpty, 'Please add atleast one address of the user.']
    // }]
});

// var addSchema = new mongoose.Schema({
//     addLine1: {
//         type: String,
//         required: true
//     },
//     addLine: {
//         type: String
//     },
//     pincode: {
//         type: String,
//         required: true,
//         minlenght: [4, 'Pincode is too short.'],
//         maxlenght: [6, 'Pincode is too long.'],
        
//     },
//     city: {
//         type: String,
//         reqiured: true
//     },
//     state: {
//         type: String,
//         reqiured: true
//     },
//     type: {
//         type: String
//     }
// });

var UserDetail = mongoose.model('UserDetail', UserDetailSchema);
// var Addr = mongoose.model('Addr', addSchema);

module.exports = UserDetail;
// module.exports = Addr;