<template>
  <q-page :style-fn="customStyle">
            <q-input bg-color="white" outlined type="text"  dense placeHolder="Search Filter..."  > 
                <template v-slot:prepend >
                    <q-btn dense flat round icon="search" >
                    </q-btn>
                </template> 
            </q-input>
        
      <div class="floater-right" >
           
            <drop-down></drop-down>
      </div>
      
  
  </q-page>
</template>


<script>
import dropdown from './dropdown.vue'
export default {
  components: { 
      'drop-down':dropdown 
      },
   methods: {
       customStyle(){

           return {
               minWidth: '300px',
               maxWidth: '1920px',
               position: 'relative',
               top: '20px',
               margin: '0 10px',
               display: 'grid',
               gridTemplateColumns: '1fr 1fr',
           }
       },
       
       
   }
}
</script>

<style scoped>
    .floater-right{
        float: right;
        text-align: right;
        
    }

</style>