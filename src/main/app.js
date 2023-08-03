import cardTasks from "./cardTasks.html?raw";

/**
 * Función constructora de la aplicación
 * @param {IdHTML} elementId 
 */
export const App = (elementId) => {
    (() => {
        let boxMain = document.createElement("div");
        boxMain.innerHTML = cardTasks;
        document.querySelector(elementId).append(boxMain);
    })();
}