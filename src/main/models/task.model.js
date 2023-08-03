import {v4 as identifier} from "uuid"

export class Task {
    constructor(description){
        this.id = identifier();
        this.description = description;
        this.done = false;
        this.createAt = new Date();
    }
}