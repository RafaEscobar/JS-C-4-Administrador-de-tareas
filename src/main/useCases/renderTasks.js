import { htmlRenderTask } from "./htmlRenderTask";

/**
 * Renderiza el listado de tareas en...
 * @param {id} elementId - Identificador del elemento html donde se renderizaran las tareas
 * @param {array} tasks - Array de tareas
 */
export const renderTasks = (elementId, tasks = []) => {

    const boxRender = document.querySelector(elementId);

    tasks.forEach( task => {
        boxRender.append(htmlRenderTask(task));
    });
}