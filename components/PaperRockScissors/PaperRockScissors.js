
import { printCounter } from '../Counter/Counter';
import { CpuCount, GameFunction, UserCount } from '../GameFunction/GameFunction';
import { paperRockScissors } from '../data/paperRockScissors';


import './PaperRockScissors.css'
export const printPaperRockScissors = () => {
    const divContainer = document.createElement("div");
    divContainer.className = "paperRockScissorsContainer";

    const divMessage = document.createElement("div");
    let message = document.createElement("p");

    divMessage.className = "message";
    message.id = "message";

    divMessage.append(message);

    for (const element of paperRockScissors) {
        const divElement = document.createElement("div");
        const elementImg = document.createElement("img");

        divElement.className = "divElement";
        elementImg.src = element.img;

        divElement.addEventListener("click", () => {
            message.textContent = `${GameFunction(element.name)}`;
            console.log(element.name);
            console.log(UserCount);
            console.log(CpuCount);
            printCounter()
        });

        divElement.append(elementImg);
        divContainer.append(divElement);
    }

    document.querySelector("#app").append(divMessage);
    document.querySelector("#app").append(divContainer);
};