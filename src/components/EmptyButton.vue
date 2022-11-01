<template>
    <div>
<button v-bind:type="type" class="btn"><slot name="btnn"></slot></button>


    </div>
</template>

<script>
    export default {
    name: 'EmptyButton',
    props:{
        type: {
            type: String,
            default: 'button',
        },
        
       } 
    }
</script>

<style lang="scss" scoped>
.btn{
        padding-top: 14px;
        padding-bottom: 14px;
        padding-left: 20px;
        padding-right: 20px;
        border-color: rgb(37, 184, 213);
        border-radius: 5px;
        background: none
        }
</style>