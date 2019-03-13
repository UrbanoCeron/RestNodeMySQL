const express = require('express');
const router = express.Router();


const mysqlConnection = require('../database');

router.get( '/', (req,res) => {
    mysqlConnection.query('SELECT * FROM alumnos',(err,rows,fields) => {
        if(!err) {
            res.json( rows );
        } else {
            console.log(err);
        }
    });
});

router.get( '/:id',(req,res) => {
    const {id} = req.params;
    mysqlConnection.query('SELECT * FROM alumnos WHERE id = ?',[id],(err,rows,fields) => {
        if(!err) {
            res.json( rows[0] );
        } else {
            console.log(err);
        }
    });
});

router.post( '/',(req,res) => {
    const {id,name,group,} = req.params;
    mysqlConnection.query('INSERT INTO students VALUES (?,?,?)',[id,name,group],(err,rows,fields) => {
        if(!err) {
            res.status(200).json( rows[0] );
        } else {
            console.log(err);
        }
        /*
        if( error ){
                return res.status(400).json({
                    ok:false,
                    message:'Error al actualizar usuario',
                    errors:error
                });
            }  
            res.status(200).json({
                ok:true,
                usuairo: usuarioGuardado
            });
        */
    });
});

module.exports = router;