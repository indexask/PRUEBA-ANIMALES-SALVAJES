class Animal {
    constructor(nombre, edad, img, comentarios, sonido){
        let Nombre = nombre
        let Edad = edad
        let Img = img
        let Comentarios = comentarios
        let Sonido = sonido

        this.getNombre = () => Nombre;
        this.getEdad = () => Edad;
        this.getImg = () => Img;
        this.getComentarios = () => Comentarios;
        this.getSonido = () => Sonido;

        this.setComentarios = (comentario) => (Comentarios = Comentarios);
    }

    get Nombre() {
        return this.getNombre();
    }

    get Edad() {
        return this.getEdad();
    }

    get Img() {
        return this.getImg();
    }

    get Comentarios() {
        return this.getComentarios();
    }
    
    set Comentarios(Comentarios) {
        return this.getComentarios(comentarios);
    }
    
    get Sonido() {
        return this.getSonido();
    }
    
}

export default Animal;