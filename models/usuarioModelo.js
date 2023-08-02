class Usuario{
    constructor(id,registro){
        this.bandera=0;
        this.setId=id;
        this.setNombre=registro.nombre;
        this.setUsuario=registro.usuario;
        this.setPassword=registro.password;
    }
    set setId(id){
        this.id=id;
    }
    set setNombre(nombre){
        if (nombre.length>0){
            this.nombre=nombre;
        }
        else{
            console.log("Error al insertar el nombre");
            this.bandera=1;
        }
    }
    set setUsuario(usuario){
        if (usuario.length>0){
            this.usuario=usuario;
        }
        else{
            console.log("Error al insertar el usuario");
            this.bandera=1;
        }
    }
    set setPassword(password){
        if (password.length>0){
            this.password=password;
        }
        else{
            console.log("Error al insertar el password");
            this.bandera=1;
        }
    }

    get getId(){
        return this.id;
    }

    get getNombre(){
        return this.nombre;
    }

    get getUsuario(){
        return this.usuario;
    }

    get getPassword(){
        return this.password;
    }

    get obtenerUsuario(){
        return {
            id:this.getId,
            nombre:this.getNombre,
            usuario:this.getUsuario,
            password:this.getPassword
        }
    }
}

module.exports=Usuario;