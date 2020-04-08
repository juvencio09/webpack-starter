
import '../css/componentes.css';

export const saludar = (nombre) => {

    console.log("Crear etiquieta h1")

    const h1 = document.createElement('h1');
    h1.innerHTML = `Hola mundo editado ${nombre}`;
    document.body.append(h1);
    
}