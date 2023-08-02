var admin = require("firebase-admin");
var keys=require("../keys.json");
//var Usuario = require("../models/usuarioModelo");

admin.initializeApp({
    credential:admin.credential.cert(keys)
});
var db=admin.firestore();

var conexion=db.collection("miejemploBD");

module.exports=conexion;