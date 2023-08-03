import { Task } from "../main/models/task.model";

const Filters = {
    All: 'All',
    Completed: 'Completed',
    Pending: 'Pending'
}

const state = {
    tasks: [
        new Task('Estudiar JavaScript'),
        new Task('Estudiar Laravel'),
        new Task('Estudiar Livewire y Alpine JS'),
    ],
    filter: Filters.All,
}

const initStore = () => {
    console.log(state);
    console.log("Store inicializado");
}

export default {
    initStore,
};