import myStore, { Filters } from "../../storage/myStore";

let element;

/**
 * 
 * @param {*} elementId 
 */
export const pendingTask = (elementId) => {
    if ( !element )  
        element = document.querySelector(elementId);

    if ( !element )
        throw new Error(`El id: ${elementId} no es correcto`);

    element.innerHTML = myStore.getAllTask( Filters.Pending ).length;   
}