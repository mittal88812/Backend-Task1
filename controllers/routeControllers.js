const UserDetail = require('../model/model');

module.exports.getUserDetails = async(req, res) => {
    var a = req.query;
    console.log(a);
    const userData = await UserDetail.find(a);
    console.log(userData);
    res.send(userData);
}

module.exports.updateDetails = async(req, res) => {
    console.log(req.body);
    var dataToUpdate = req.body.dataToUpdate;
    var updateData = {$set: req.body.updateData};
    const updateComplete = await UserDetail.updateMany(dataToUpdate, updateData, (err, res) => {
        if (err) throw err;
        console.log("Data Update Successfully.");
    });
    // const updatedData = await UserDetail.find();
    //console.log(updatedData);
    res.send('Data Updated Successfully.');
}