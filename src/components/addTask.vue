<template>
    <wide-template>
        
        <div class="btn-holder" >    
            <q-btn flat="" > {{ logo }} </q-btn>
        </div> 
        <h5> Add Task </h5>
        <div class="form" >
            <!-- <label>Email Address</label> -->
            <q-input label="Task name" v-model="name" dense outlined type="text" maxlength="50"  ></q-input>
            <q-input label="Description" v-model="description"  outlined type="textarea"   ></q-input>
            <div class="dates" >
                <div>
                    <q-item-label  >Start Date: </q-item-label>
                    <q-date color="secondary" v-model="startDate" ></q-date>
                </div>
                <div>
                    <q-item-label>End Date: </q-item-label>
                    <q-date color="secondary" v-model="endDate" ></q-date>
                </div>
            </div>
            <q-btn color="secondary" @click="submitTask" >Add Task</q-btn>
        </div>
    </wide-template>
</template>

<script>
import wideTemplate from './reusables/wideTemplate.vue'
import { ref } from 'vue'
import axios from 'axios'

export default {
    data(){
        return{
            logo: "<<",
            name: "",
            description: "",
            startDate: ref('2022/05/16'),
            endDate: ref('2022/05/16')
        }
    },
    
    
    components: {
        wideTemplate
    },

    methods:{
        submitTask(){
            const data = {
                name: this.name.toLowerCase(),
                description: this.description,
                startDate: this.startDate,
                endDate: this.endDate
            }
            // alert(data)
            axios.post('http://localhost:3000/todo_list_backend/index.php?ops=addTask', data).then(()=>{
                this.name= "",
                this.description= "",
                this.startDate= ref('2022/05/16'),
                this.endDate= ref('2022/05/16')
                alert('Task added successfully!')
            })
            
        }
    }
}
</script>


<style scoped>
.btn-holder{
    min-width: 50px;
    max-width: 120px;
    /* background-color: red; */
    padding-top: 35px ;
    height: 100px;
}

.form{
    position: relative;
    bottom: 80px;
    left: 25px;
    width: 300px;
}

.dates{
    display: grid;
    grid-template-columns: repeat(2, minmax(300px, 1fr));
    margin: 40px 0;
}

h5{
    /* background-color: red; */
    position: relative;
    right: 750px;
    height: 100px;
}

</style>