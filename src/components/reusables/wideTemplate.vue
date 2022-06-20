<template>
    <div >
       <slot>
           <p>empty page</p>
       </slot>
    </div>
</template>

<script>
export default {
   
}
</script>

<style scoped>
    div{
        background-color: white;
        border-radius: 10px;
        width: 1000px;
        position: relative;
        right: 5%;
        padding: 30px;
    }

    @media only screen and (max-width: 420px){
        div{
            width: 350px;
            right: 0;
        }
    }

    p{
        text-align: center;
        position: relative;
        top: 50%;
    }
</style>