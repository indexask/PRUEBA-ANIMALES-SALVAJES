import { Leon, Lobo, Oso, Serpiente, Aguila } from "./Tipos.js";
import Animales from "../Consultas.js";

let animalesMas = [];

document.getElementById("btnRegistrar").addEventListener("click", async () => {
    const nombre = document.querySelector("#animal")
    const edad = document.querySelector("#edad")
    const comentarios = document.querySelector("#comentarios")
    const {animales} = await Animales.getData();
    const {imagenes} = animales.find(({name})=>name == nombre.value)
    const preview = document.querySelector("#preview")


    let nuevoAnimal;

    if (nombre.value == "Leon") {
        nuevoAnimal = new Leon(
            nombre.value,
            edad.value,
            imagenes,
            comentarios.value,
        );
    } else if (nombre.value == "Lobo") {
        nuevoAnimal = new Lobo(
            nombre.value,
            edad.value,
            imagenes,
            comentarios.value,
        );
    } else if (nombre.value == "Oso") {
        nuevoAnimal = new Oso(
            nombre.value,
            edad.value,
            imagenes,
            comentarios.value,
        );
    } else if (nombre.value == "Serpiente") {
        nuevoAnimal = new Serpiente(
            nombre.value,
            edad.value,
            imagenes,
            comentarios.value,
        );
    } else if (nombre.value == "Aguila") {
        nuevoAnimal = new Aguila(
            nombre.value,
            edad.value,
            imagenes,
            comentarios.value
        );
    } 
    if(nombre.value && edad.value && comentarios.value) {
        animalesMas.push(nuevoAnimal);
        nombre.selectedIndex = 0;
        edad.selectedIndex = 0;
        comentarios.value = "";
        preview.style.backgroundImage = `url(./assets/imgs/lion.svg)`
        reloadTable();
    }else {
        alert("Faltan datos por completar")
    }
});


const reloadTable = () => {
    const AnimalesInvestigadosTemplate = document.getElementById("Animales");
    AnimalesInvestigadosTemplate.innerHTML = "";
    animalesMas.forEach((p)=>{
        AnimalesInvestigadosTemplate.innerHTML+= `
        <div class="card col-3">
  <img class="card-img-top" src="./assets/imgs/${p.getImg()}" alt="Card image cap">
</div>
        `
    });
};

