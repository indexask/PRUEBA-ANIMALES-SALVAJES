import Animal from "./Animal.js"

class Leon extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }

    Rugir(){
        let sonido = this.getSonido()
        this.setSonido
    }
}

class Lobo extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }

    Aullar(){
        let sonido = this.getSonido()
        this.setSonido
    }
}

class Oso extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }

    Gruñir(){
        let sonido = this.getSonido()
        this.setSonido
    }
}

class Serpiente extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }

    Sisear(){
        let sonido = this.getSonido()
        this.setSonido
    }
}

class Aguila extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }

    Chillar(){
        let sonido = this.getSonido()
        this.setSonido
    }
}

export { Leon, Lobo, Oso, Serpiente, Aguila};