const Admin = require('../models/Admin');
module.exports.dashboard = async (req,res)=>{
    return res.render('dashboard');
}


module.exports.addAdmin = async (req,res) =>{
    return res.render('Add_admin');
}


module.exports.insertAdminRecords = async (req,res) =>{
   
    var imagePath = '';
    if(req.file){
        imagePath = Admin.avatarPath+"/"+req.file.filename;
    }
    req.body.avatar = imagePath;
    let adminData = await Admin.create(req.body);
    if(adminData){
        return res.redirect('/add_admin');
    }
    else{
        return res.redirect('/add_admin');
    }
}