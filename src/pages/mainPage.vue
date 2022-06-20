<template>
  <q-layout view="hHh lpR fFf">

    <q-drawer :mini="true"   show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <!-- drawer content -->
      <div class="logo" >
       <q-img src="../assets/todoLogo.png"  width="30px" height="30px" ></q-img>
      </div>
        <div class="bottom-buttons" >
            <q-btn dense flat round icon="home" >
            </q-btn>
            <q-btn dense flat round icon="menu" color="secondary" >
            </q-btn>
         Menu
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>

<style scoped>
  .bottom-buttons{
    position: relative;
    top: 85%;
    padding: 0 10px;
  }

  .logo{
    text-align: center;
    position: relative;
    top: 10px;
  }

</style>


