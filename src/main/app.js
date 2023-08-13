import cardTasks from "./cardTasks.html?raw";
import myStore, { Filters } from "../storage/myStore";
import { pendingTask, renderTasks } from "./useCases";

const ElementsIds = {
    classRenderElement: '.tasksList',
    newInputTasks: '#inputNewTask',
    btnNewTask: '#btnNewTask',
    btnCheckAll: '#checkAll',
    btnDeleteCompletedTasks: '#deleteCompletedTasks',
    filters: '.filtro',
    pendingCountId: '#pending-count',
};

/**
 * Función constructora de la aplicación
 * @param {IdHTML} elementId 
 */
export const App = (elementId) => {

    const renderPendingTasks = () => {
        pendingTask(ElementsIds.pendingCountId);
    }

    const renderListTask = () => {
        const tasks = myStore.getAllTask( myStore.getFilter());
        renderTasks(ElementsIds.classRenderElement, tasks);
        renderPendingTasks();
    }

    (() => {
        let boxMain = document.createElement("div");
        boxMain.innerHTML = cardTasks;
        document.querySelector(elementId).append(boxMain);
        renderListTask();
    })();



    const inputTask = document.querySelector(ElementsIds.newInputTasks);
    const btnTask = document.querySelector(ElementsIds.btnNewTask);
    const checktask = document.querySelector(ElementsIds.classRenderElement);
    const btnCheckAll = document.querySelector(ElementsIds.btnCheckAll);
    const btnDelCompletedTasks = document.querySelector(ElementsIds.btnDeleteCompletedTasks);
    const filters = document.querySelectorAll(ElementsIds.filters);

    inputTask.addEventListener('keyup', (event) => {
        if( event.keyCode !== 13 ) return;
        if( event.target.value.trim().length === 0 ) return;

        myStore.addTask( event.target.value );
        renderListTask();
        event.target.value = '';
    });

    btnTask.addEventListener('click', () => {
        if( inputTask.value.trim().length === 0 ) return;

        myStore.addTask( inputTask.value );
        renderListTask()
        inputTask.value = '';
    });

    checktask.addEventListener('click', (event) => {
        const btnDeleteReference = event.target.id === 'deleteTask';
        const myElement = event.target.closest('[data-id]');

        if ( btnDeleteReference )
            myStore.deleteTask( myElement.getAttribute('data-id') );

        myStore.checkTask(myElement.getAttribute('data-id'));
        renderListTask();
    });

    btnCheckAll.addEventListener('change', (event) => {
        if ( event.target.checked ) {
            myStore.checkAllTask('check');
        } else {
            myStore.checkAllTask('NoCheck');
        }
        renderListTask();
    });

    btnDelCompletedTasks.addEventListener('click', () => {
        myStore.deleteCompletedTask();
        renderListTask();
    });


    filters.forEach( liElement => {
        liElement.addEventListener('click', (element) => {

            filters.forEach( liElementTwo => {
                liElementTwo.classList.remove('selected');
            });

            element.target.classList.add('selected');

            switch(element.target.text){
                case 'Todos':
                    myStore.setFilter(Filters.All);
                break; 
                case 'Pendientes':
                    myStore.setFilter(Filters.Pending);
                break;
                case 'Completados':
                    myStore.setFilter(Filters.Completed);
                break;
                default:
                    return console.log('Error');
                break;
            }
            renderListTask();
        });
    });

}