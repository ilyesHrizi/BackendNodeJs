var client = require('../../../db_connection')
exports.add=(req,res)=>{
 
  client.query(`INSERT INTO papier_administratif (id_papierAdministratif,date, type_papier,id_etudiant) VALUES ('${req.body.id_papierAdministratif}','${req.body.date}','${req.body.type_papier}','${req.body.id_etudiant}')`, function (err, result) {
      if (err){
          res.status(res.statusCode).json({
              errorCode: err.message,
              status: res.statusCode,
              
            });
      }else{
          res.status(res.statusCode).json({
              message: "done",
              data:result,
              status: res.statusCode,
            });
      }
    });

}
exports.update=(req,res)=>{
  
  client.query( 'UPDATE papier_administratif SET date=?,type_papier=? where id_papierAdministratif=? ',
              [req.body.date,req.body.type_papier,req.params.id] , function (err, result) {
      if (err){
          res.status(res.statusCode).json({
              errorCode: err.message,
              status: res.statusCode,
              
            });
      }else{
          res.status(res.statusCode).json({
              message: "done",
              data:result,
              status: res.statusCode,
            });
      }
    });

}

exports.delete=(req,res)=>{
  
  client.query( 'DELETE from papier_administratif where id_papierAdministratif=? ',
              [req.params.id] , function (err, result) {
      if (err){
          res.status(res.statusCode).json({
              errorCode: err.message,
              status: res.statusCode,
              
            });
      }else{
          res.status(res.statusCode).json({
              message: "done",
              data:result,
              status: res.statusCode,
            });
      }
    });

}

exports.getById=(req,res)=>{
  
  client.query( 'select * from etudiant where id_etudiant=? ',
              [req.params.id] , function (err, result) {
      if (err){
          res.status(res.statusCode).json({
              errorCode: err.message,
              status: res.statusCode,
              
            });
      }else{
        res.json(result);
          res.status(res.statusCode).json({
              message: 'Done',
              data:result,
              status: res.statusCode,
              
            });
      }
    });

}
