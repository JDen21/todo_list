<template>
    <div>
        <slot>    
            modal here
        </slot>
    </div>
</template>


<style scoped>
div{
    background-color: rgb(242, 242, 242);
    display: inline;
    position: absolute;
    padding-top: 90px;
    text-align: center;
    border-radius: 10px;
    left: 25%;
    top: 35%;
    width: 400px;
    height: 200px;
    box-shadow: 2px 2px 2px 1px rgba(0,0,0,0.75);
    -webkit-box-shadow: 2px 2px 2px 1px rgba(0,0,0,0.75);
    -moz-box-shadow: 2px 2px 2px 1px rgba(0,0,0,0.75);
}
</style>