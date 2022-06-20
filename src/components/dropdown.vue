<template>
  <div class="q-pa-md">
    <q-btn-dropdown  flat  split  >

      <template #label>
          <div> 
              <q-img src="../assets/avatar.png" width="40px" height="40px" :img-style="customImageStyle()" ></q-img>
          </div>
      </template>

      <q-list>
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Photos</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Videos</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Articles</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </div>
</template>

<script>
export default {
    methods: {
        onItemClick(){
            alert('none')
        },

        customImageStyle(){
           return{
               borderRadius: '100%',
           }
       }
    }
}
</script>

