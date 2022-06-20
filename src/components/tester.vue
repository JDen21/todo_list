<template>
  <div>
    <q-btn
      @click="$q.notify('My message')"
      color="primary"
      label="Show a notification"
    />

    <q-btn
      @click="showNotification"
      color="primary"
      label="Show another notification"
    />
  </div>
</template>

<script>
    import { useQuasar } from 'quasar'
    export default {
        data(){
            return{
                $q: useQuasar()
            }
        },
        methods: {
            showNotification () {
                // this.$q.notify('Some other message')
                console.log(this.$q)
            }
        }
}
</script>