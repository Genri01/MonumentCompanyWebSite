const { Router } = require('express');
const router = Router() 
const userController = require('../controllers/user_controller');   
const fileMiddleware = require('../middleware/file')
const multer = require('multer'); 
   
router.post('/sendmail',userController.sendConsult);  
router.post('/sendinfo',userController.sendInfo); 
router.post('/uploader', fileMiddleware.any(), async (req, res) => { 
 
  try {   
    console.log(req.files[0].filename)
    return res.json(req.files[0].filename); 
  } catch(err) {  
    if (err instanceof multer.MulterError) {
        return res.send(err);
    }
    else if (err) {
        return res.send(err);
    }
  }
}); 
 
 
module.exports = router;
