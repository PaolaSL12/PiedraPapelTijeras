
import { printCounter } from '../Counter/Counter';
import './Reset.css'

export const PrintResetButton = () => {
    const divButton = document.createElement("div");
    const resetButton = document.createElement("button");

    divButton.className = "divButton";
    resetButton.className = "resetButton";

    resetButton.textContent = "Reiniciar Marcador";

    resetButton.addEventListener("click",() => {
    localStorage.removeItem("CPU");
    localStorage.removeItem("USER")
    printCounter();
    window.location.reload(); 
      
    })


    divButton.append(resetButton)
    document.querySelector("#app").append(divButton);
}