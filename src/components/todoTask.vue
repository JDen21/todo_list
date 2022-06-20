<template>
    <wide-template>
        <div class="grid" >
            <div>
            <h5>Tasks</h5>
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
                <modal-template v-if="viewModal" > {{ descripts }} </modal-template>
                <p class="data-grid" >  
                   <span>  {{ data.name }}</span> <span>{{ data.dateStarted }}</span> <span>{{ data.dateEnd }}</span> <span>{{ data.taskFinished == 0? "No" : "Yes" }}</span><span><q-btn dense round :color="'secondary'" icon="image" @click="checkDescription(data)" ></q-btn></span> 
                </p>
            </section>
        </div>
        </div>
    </wide-template>
</template>


<script>
import wideTemplate from './reusables/wideTemplate.vue'
import modalTemplate from './reusables/modalTemplate.vue'
import axios from 'axios'
export default {
    data(){
        return{
            initData: [],
            descripts: '',
            viewModal: false
        }
    },
    mounted(){
        this.init()
    },
    methods:{

        init(){
            axios.get('http://localhost:3000/todo_list_backend/index.php?ops=init').then(res=>{
                const data = res.data.split("}")
                data.forEach(el => {
                    el += "}"
                    if(el != "}")
                        this.initData.push(JSON.parse(el))
                });
            })
        },

        checkDescription(data){
            this.viewModal = !this.viewModal
            this.descripts = data.description
        }
    },
    components:{
        wideTemplate,
        modalTemplate
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