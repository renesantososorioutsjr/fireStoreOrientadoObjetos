var ruta=require("express").Router();
var {mostrar, mostrarPorId, nuevo, modificar, borrar}=require("../bd/usuariosBD");

ruta.get("/",async(req,res)=>{
        var users=await mostrar();
        res.render("usuarios/mostrar",{usuarios:users});
});

ruta.get("/nuevo", async(req,res)=>{
    res.render("usuarios/nuevo");
});

ruta.post("/nuevo", async(req,res)=>{
     var error=await nuevo(req.body);
     res.redirect("/");
});

ruta.get("/modificar/:id", async(req,res)=>{
    var user=await mostrarPorId(req.params.id);
    res.render("usuarios/modificar",{usuario:user});
});

ruta.post("/modificar", async(req,res)=>{
        await modificar(req.body);
        res.redirect("/");

});

ruta.get("/borrar/:id", async(req,res)=>{
    await borrar(req.params.id);
    res.redirect("/");
});

module.exports=ruta;