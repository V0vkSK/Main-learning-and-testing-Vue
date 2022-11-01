<template>
    <div class="container-content">
          <router-view></router-view>
    </div>

</template>

<script>

    export default {
    name: "Contant",

}
</script>

<style lang="scss" scoped>
.container-content{
    
    display: flex;
    flex-direction: column;
    // padding-left: 100px;
    align-content: center;
    align-items: center;
    width: 1400px;
//     flex: 1 1 auto;
//     min-height: 100vh;
    margin-top: 0;
    margin-right: auto;
    margin-left: auto;
    // background-color: rgb(236, 233, 233);
@media (max-width:1400px) {
        max-width:1200px;
        
}
@media (max-width:1200px) {
        max-width:970px
}
@media (max-width:972px) {
        max-width:750px
}
@media (max-width:767px) {
        max-width:none;
        // min-width: 0;
        margin: 0;
        padding: 0 auto;
}
}


</style>

