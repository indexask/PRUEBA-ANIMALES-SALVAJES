import Animales from "./Consultas.js";

const selectAnimal = document.querySelector("#animal")
selectAnimal.addEventListener("change",async (e)=>{
    const {animales} = await Animales.getData();
    const {imagenes : img} = animales.find(({name})=>name == e.target.value)
    const preview = document.querySelector("#preview")


    preview.style.backgroundImage = `url(../assets/imgs/${img}`
});