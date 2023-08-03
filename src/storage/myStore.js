import { Task } from "../main/models/task.model";

/**
 ** Filtros disponibles para las tareas
 */
const Filters = {
    All: 'All',
    Completed: 'Completed',
    Pending: 'Pending'
}

/**
 ** Estado
 */
const state = {
    tasks: [
        new Task('Estudiar JavaScript'),
        new Task('Estudiar Laravel'),
        new Task('Estudiar Livewire y Alpine JS'),
        new Task('Aprender React web'),
    ],
    filter: Filters.All,
}

/**
 ** Inicialización del Store
 */
const initStore = () => {
    console.log("Store inicializado");
}

/**
 ** Obtener todas las tarea
 */
const getAllTask = (myFilter = Filters.All) => {
    switch (myFilter) {
        case Filters.All:
            return state.tasks;
        break;
        case Filters.Completed:
            return state.tasks.filter( task => task.done == true );
        break;
        case Filters.Pending:
            return state.tasks.filter( task => !task.done );
        break;
        default: 
            throw new Error('Filtro no valido');
        break;
    }
}

/**
 **
 */
const loadStore = () => {
    //
}

/**
 ** Agregar una nueva tarea
 */
const addTask = (description) => {
    if (!description) throw new Error("La descripción de la tarea es requerida");
    state.tasks.push(new Task(description));
}

/**
 ** Marcar como completada una tarea
 * @param {Id} id - Id de la tarea
 */
const checkTask = (id) => {
    //
}

/**
 ** Borrar tarea  
 * @param {Id} id - Id de la tarea
 */
const deleteTask = (taskId) => {
    state.tasks = state.tasks.filter( task => task.id !== taskId );
}

/**
 ** Elimina todas las tarea completadas
 */
const deleteCompletedTask = () => {
    state.tasks = state.tasks.filter( task => !task.done );
}

/**
 ** Establecer el fitro 
 * @param {string} myFilter 
 */
const setFilter = (myFilter = Filters.All) => {
    state.filter = myFilter;
}

/**
 ** Obtener el filtro
 */
const getFilter = () => {
    return state.filter;
}

/**
 ** Exportación por defecto
 */
export default {
    initStore,
    loadStore,
    addTask,
    checkTask,
    deleteTask,
    deleteCompletedTask,
    setFilter,
    getFilter,
    getAllTask,
};