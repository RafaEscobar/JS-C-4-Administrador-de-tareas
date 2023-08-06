import { htmlRenderTask } from "./htmlRenderTask";

let boxRender;

/**
 * Renderiza el listado de tareas en...
 * @param {id} elementId - Identificador del elemento html donde se renderizaran las tareas
 * @param {array} tasks - Array de tareas
 */
export const renderTasks = (elementId, tasks = []) => {
    if( !boxRender )
        boxRender = document.querySelector(elementId);
    if( !boxRender )
        throw new Error(`El id ${elementId} no es valido!!`);
    
    boxRender.innerHTML = '';

    tasks.forEach( task => {
        boxRender.append(htmlRenderTask(task));
    });
}