import './style.css';
import { App } from './src/main/app.js';
import taskStore from './src/storage/myStore'

taskStore.initStore();
App("#mainBoxId");