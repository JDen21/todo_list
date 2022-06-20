<template>
        
    <q-page  :style-fn="customStyle" >
            <h4>Menu</h4>
        <slot>
            <p>
                No menu available
            </p>
        </slot>
    </q-page>
</template>

<script>
export default {
     methods:{
        customStyle(){
            return{
                backgroundColor: 'white',
                minWidth: '100px',
                maxWidth: '400px',
                borderRadius: '10px',
                margin: '10px 10px',
                height: '600px',
                padding: '20px',
                paddingLeft: '50px'
            }
        }
    }
}
</script>

<style> 

    h4{
        text-align: left;
    }
    p{
        color: gray;
        /* position: relative; */
        text-align: left;
    }
</style>