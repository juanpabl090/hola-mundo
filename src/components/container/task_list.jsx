//! COMPONENTE TASKLIST QUE CONTIENE LOS COMPONENTES TASK

import React from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';


const TaskListComponent = () => {
    
    const defaultTask = new Task('Mi Primera Tarea', 'Default Description', true, LEVELS.NORMAL);
    
    return (
        <div>
            <div>
                <h1> Your Task: </h1>
            </div>
            {/* TODO: APLICAR UN FOR/MAP PARA RENDERIZAR UNA LISTA*/}
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};

export default TaskListComponent;