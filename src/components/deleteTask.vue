<template>
    <wide-template>
        <div class="grid" >
            <div>
            <h5>Delete Task</h5>
            </div>
        <div>
            <div class="head-grid" >
                <span>
                Task
            </span>
            <span>
                Start Date
            </span>
            <span>
                End Date
            </span>
            <span>
                Task Finished
            </span>
            </div>
            
            <section v-for="data in initData" :key="data.name">
                <p class="data-grid" >  
                   <span>  {{ data.name }}</span> <span>{{ data.dateStarted }}</span> <span>{{ data.dateEnd }}</span> <span>{{ data.taskFinished == 0? "No" : "Yes" }}</span> <span><q-btn dense round icon="delete" :color="'secondary'" @click="deleteTask(data.name)" ></q-btn></span>
                </p>
            </section>
        </div>
        </div>
        
    </wide-template>
</template>

<script>
import wideTemplate from "./reusables/wideTemplate.vue"
import axios from 'axios'
export default {
    data(){
        return {
            initData: []
        }
    },
    mounted(){
        this.init()
    },
    methods: {
        init(){
            axios.get('http://localhost:3000/todo_list_backend/index.php?ops=init').then(res=>{
                // this.initData = res.data
                const data = res.data.split("}")
                data.forEach(el => {
                    // alert('here')
                    // alert(typeof(el))
                    // alert(el)
                    el += "}"
                    // alert(JSON.parse(el))
                    if(el != "}")
                        this.initData.push(JSON.parse(el))
                });
                // alert(this.initData)
            })
        },

        deleteTask(name){
            
            // alert('delete works: ' + name)
            const data ={
                name: name
            }
            axios.post('http://localhost:3000/todo_list_backend/index.php?ops=deleteTask', data).then(()=>{
                this.initData.splice(this.initData.indexOf(name),1)
                alert('Deleted task: ' + name + ' successfully')
                // alert('server response: '+res.data)
            })
        }
    },
    components:{
        wideTemplate
    }
}
</script>

<style scoped>
.grid{
    display: grid;
    grid-template-rows: 100px auto;
}

.data-grid{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    text-align: center;
}

.head-grid{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    padding-bottom: 20px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: bold;
    text-align: center;
}

div{
    /* border: 1px solid black; */
}

</style>