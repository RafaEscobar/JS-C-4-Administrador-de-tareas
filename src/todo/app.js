import cardTasks from "./cardTasks.html?raw";

export const App = (elementId) => {
    (()=>{
        let mainBox = document.createElement("div");
        mainBox.innerHTML = cardTasks;
        document.querySelector(elementId).append(mainBox);
    })();
}