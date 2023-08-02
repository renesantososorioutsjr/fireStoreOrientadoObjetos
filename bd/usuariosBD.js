var conexion=require("./conexion");
var Usuario = require("../models/usuarioModelo");

async function mostrar(){
    var users=[];
    try{
        var usuarios=await conexion.get();
        usuarios.forEach((usuario)=>{
            var user=new Usuario(usuario.id,usuario.data());
            if (user.bandera==0)
                users.push(user.obtenerUsuario);
        });
    }
    catch(err){
        console.log(err);
        users.push(null);
    }
    return users;
}

async function mostrarPorId(id){
    var user;
    try{
        var usuariobd=await conexion.doc(id).get();
        var usuarioObjeto=new Usuario(usuariobd.id,usuariobd.data())
        user=usuarioObjeto.obtenerUsuario;
    }
    catch{
        user=null;
    }
    return user;
}

async function nuevo(datos){
    var user= new Usuario(null,datos);
    error=0;
    if (user.bandera==0){
        try{
            await conexion.doc().set(user.obtenerUsuario);
            console.log("Registro insertado");
            //res.redirect("/");
        }
        catch(err){
            console.error("error al registrar nuevo usuario ...... "+err);
            error=1;
        }
    }
    else{
        console.error("Error al registrar un nuevo usuario, no puede haber campos vacíos");
        error=1;
    }
    return error; 
}

async function modificar(datos){
    var user= new Usuario(datos.id,datos);
    error=0;
    if (user.bandera==0){
        try{
            await conexion.doc(user.id).set(user.obtenerUsuario);
            console.log("Registro actualizado..... ");
        }
        catch(err){
            console.error("error al actualizar el usuario en FireStore ...... "+err);
            error=1;
        }
    }
    else{
        console.error("Error al actualizar el usuario, no puede haber campos vacíos");
        error=1;
    }
}

async function borrar(id){

    try{
        await conexion.doc(id).delete();
    }
    catch(err){
        console.log("error al borrar usuario ...... "+err);
    }
}

module.exports={
    mostrar,
    mostrarPorId,
    nuevo,
    modificar,
    borrar
}
