<template>
   <wide-template>
       <div class="grid" >
           <div>
            <h5>Task List</h5>
       </div>
       <div >
            <section v-for="data in initData" :key="data.name">
                <p class="data-grid" >  
                   <span>  {{ data.name }}</span> <span>{{ data.dateStarted }}</span> <span>{{ data.dateEnd }}</span> <span>{{ data.taskFinished == 0? "No" : "Yes" }}</span> <span><q-btn dense round icon="stop" :color="data.taskFinished != 0 ? 'primary' : 'secondary'" @click="changeTask(data)" ></q-btn></span>
                </p>
            </section>
       </div>
       </div>
   </wide-template> 
</template>


<script>
import wideTemplate from './reusables/wideTemplate.vue'
import axios from 'axios'
export default {
    data(){
        return{
            initData:[]
        }
    },
    components:{
        wideTemplate
    },
    mounted(){
        this.inits()
    },
    methods: {
        inits(){
            axios.get('http://localhost:3000/todo_list_backend/index.php?ops=init').then(res=>{
                const data = res.data.split("}")
                data.forEach(el => {
                    el += "}"
                    if(el != "}")
                        this.initData.push(JSON.parse(el))
                });
            })
        },

        changeTask(val){
            // alert(val.taskFinished)
            if(val.taskFinished == 0){
                // alert('condition good')
                const data = {
                    name: val.name,
                    taskFinished: 1
                }
                axios.post('http://localhost:3000/todo_list_backend/index.php?ops=taskFinished', data).then(res=>{
                    
                    // alert(res.data == 200) 
                    if(res.data == 200){
                        // alert(res.data)
                        val.taskFinished = 1
                    }
                })
            }
        }
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