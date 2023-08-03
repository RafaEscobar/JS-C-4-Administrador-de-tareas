import cardTasks from "./cardTasks.html?raw";
import myStore from "../storage/myStore"
import { renderTasks } from "./useCases";

const ElementsIds = {
    renderElement: '.tasksList',
};

/**
 * Función constructora de la aplicación
 * @param {IdHTML} elementId 
 */
export const App = (elementId) => {

    const renderListTask = () => {
        const tasks = myStore.getAllTask( myStore.getFilter());
        renderTasks(ElementsIds.renderElement, tasks);
    }

    (() => {
        let boxMain = document.createElement("div");
        boxMain.innerHTML = cardTasks;
        document.querySelector(elementId).append(boxMain);
        renderListTask();
    })();
}