//! COMPONENTE TASKLIST QUE CONTIENE LOS COMPONENTES TASK

import React, { useState, useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';


const TaskListComponent = () => {

    const defaultTask = new Task('Mi Primera Tarea', 'Default Description', true, LEVELS.NORMAL);
    
    // Estado del componente
    const [tasks, setTasks] = useState([defaultTask]);

    //Control de ciclo de vida del componente
    useEffect(() => {
        console.log('Task State has benn modified')
        return () => {
            console.log('Task list to unmount...')
        };
    }, [tasks]);

    const changeCompleted = (id) => {
        console.log('TODO: cambiar estado de una tarea')
    }


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