// const jwt = require('jsonwebtoken');
// const Admin=require('../models/adminModule')

// const adminAuth = async (req, res, next) => {
//     const token = req.header('Authorization')?.split(" ")[1];
    
//     if (!token) {
//         return res.status(401).json({ error: 'No token, authorization denied' });
//     }
    
//     try {
//         const decoded = jwt.verify(token, 'secret_token');
//         const admin = await Admin.findById(decoded.admin_id);
        
//         if (admin.role !== 'admin') {
//             return res.status(403).json({ error: 'Access denied' });
//         }

//         req.admin = decoded;
//         next();
//     } catch (err) {
//         res.status(401).json({ error: 'Token is not valid' });
//     }
// };

// module.exports = adminAuth;


const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const adminAuth = async (req, res, next) => {
//     const token = req.header('Authorization')?.split(" ")[1];
    
//     if (!token) {
//         return res.status(401).json({ error: 'No token, authorization denied' });
//     }
    
//     try {
//         const decoded = jwt.verify(token, 'secret_token');
//        const user = await User.findById(decoded.user_id);
        
//         if (user.role !== 'admin') {
//             return res.status(403).json({ error: 'Access denied' });
//         }

//         req.user = decoded;
//         next();
//     } catch (err) {
//         res.status(401).json({ error: 'Token is not valid' ,err});
//     }
// };

const token=req.header('Authorization').split(" ")[1];
if(!token){
    return res.status(400).json({error:"No Token,authorization denied"});
}
try{
    const decoded=jwt.verify(token,"secret_token")
   const user = await User.findById(decoded.admin_id)
   console.log(user)
//    if (user && user.role === 'admin') {
//     res.json({ isAdmin: true });
//     req.user=decoded;
//     next();
//   } else {
//     res.json({ isAdmin: false });
//   }
if (!user || user.role !== 'admin') {
    return res.status(403).json({ message: 'Access denied' });
  }
  req.user = user;
  next();
}
catch(err){
    res.status(401).json({ error:"Token is not valid"});
}
};
module.exports = adminAuth;


