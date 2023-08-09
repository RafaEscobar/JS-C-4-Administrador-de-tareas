/**
 ** Generamos el elemento html <li> e insertamos en el la tarea pasada por parametro
 * @param {Task} task 
 * @returns - El elemento html <li> con la tarea insertada
 */
export const htmlRenderTask = ( task ) => {
    if (!task) throw new Error("Tarea requerida");

    const liContent = `
        <div class="checkbox-wrapper-15 my-4">
            <input class="inp-cbx" id="${task.id}" type="checkbox" style="display: none;" ${ task.done ? 'checked' : ''} />
            <label class="cbx" for="${task.id}">
              <span>
                <svg width="12px" height="9px" viewbox="0 0 12 9">
                  <polyline points="1 5 4 8 11 1"></polyline>
                </svg>
              </span>
              <span>${task.description}</span>
            </label>
        </div>
    `;
    const liElement = document.createElement("li");
    liElement.innerHTML = liContent;
    liElement.setAttribute('data-id', task.id);

    return liElement;
}