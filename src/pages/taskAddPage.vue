<template>
    <q-page>
        <!-- <q-page-container>   -->
            <nav-vue></nav-vue>
        <!-- </q-page-container> -->
        <div>
            <q-page-container>
                <user-menu></user-menu>
            </q-page-container>
            <q-page-container>
                <add-task></add-task>
            </q-page-container> 
        </div>
    </q-page>
    
    <!-- <div>den</div> -->
</template>

<script>
import userMenu from "../components/userMenu.vue"
import nav from "../components/nav.vue"
import addTask from "../components/addTask.vue"
import AddTask from "../components/addTask.vue"
// import wideTemplate from '../components/reusables/wideTemplate.vue'
export default {
    components: {
    userMenu,
    "nav-vue": nav,
    // wideTemplate
    addTask,
    AddTask
}
}
</script>


<style scoped>
    div{
        display: grid;
        grid-template-columns: 1fr auto;
        margin-top: 10px;
    }

    @media only screen and (max-width: 1200px){
        div{
            grid-template-columns: 1fr;
        }
    }
</style>

