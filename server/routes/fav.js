const express = require('express');
const router = express.Router();
const db =require("../db");
const util = require("../util");
const multer = require('multer');
const upload = multer({dest:'fav/'})


router.post("/favlist", upload.single('songFile'),(request,response)=>{
    const{title} = request.body;
    const filename = request.file.filename;
    const query = `insert into favlist(songFile,title) values('${filename}','${title}')`
    db.query(query,(error,result)=>{
        response.send(util.createResult(error, result));
    })
})


// router.get('/' ,(request,response)=>{
//     const query = `select newreleases.*,newreleasessongs.songFile from newreleases, newreleasessongs
//                     where newreleases.id = newreleasessongs.newreleasesId `
//     db.query(query,(error,result)=>{
//         response.send(util.createResult(error,result));
//     })
// })


module.exports = router;