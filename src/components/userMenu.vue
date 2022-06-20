<template>  
        <menu-template>
            <div>
                <q-btn flat dense to="/main/taskList" >Task To Do</q-btn>
            </div>
            <div>
                <q-btn flat dense to="/main/taskFinished">Finished Task</q-btn>
            </div>
            <div>
                <q-btn flat dense to="/main/taskAdd" >Add Task</q-btn>
            </div>
             <div>
                <q-btn flat dense to="/main/taskDelete" >Delete Task</q-btn>
            </div>
        </menu-template> 
</template>

<script>
import menuTemplate from "./reusables/menuTemplate.vue"
export default {
    components : {
        menuTemplate
    },
   
}
</script>
