/**
 ** Generamos el elemento html <li> e insertamos en el la tarea pasada por parametro
 * @param {Task} task 
 * @returns - El elemento html <li> con la tarea insertada
 */
export const htmlRenderTask = ( task ) => {
    if (!task) throw new Error("Tarea requerida");

    const liContent = `
        <div class=" checkbox-wrapper-15 my-6 flex justify-between items-center">
            <input class="inp-cbx" id="${task.id}" type="checkbox" style="display: none;" ${ task.done ? 'checked' : ''} />
            <label class="cbx flex justify-center" for="${task.id}">
              <span>
                <svg width="12px" height="9px" viewbox="0 0 12 9">
                  <polyline points="1 5 4 8 11 1"></polyline>
                </svg>
              </span>
              <label class="ml-2">${task.description}</label>
            </label>
            <button class="text-xl text-red-600 border-2 border-red-600 rounded-full w-8 h-8 transform hover:text-red-400 hover:border-red-400 transition duration-300 hover:scale-110" id="deleteTask">
              X
            </button>
        </div>
    `;
    const liElement = document.createElement("li");
    liElement.innerHTML = liContent;
    liElement.setAttribute('data-id', task.id);

    return liElement;
}