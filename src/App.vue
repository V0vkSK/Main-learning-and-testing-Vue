<template>
      <div>
        <Header class="header"/>  
        <main>
        <Content/>
        </main> 
        <Footer/>
      </div>
</template>

<script>

import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Content from './components/Content.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Content
  },
metaInfo() {
        return { 
            title: "Epiloge - Build your network in your field of interest"
            // meta: [
            //     { name: 'description', content:  'Epiloge is about connecting in your field of interest. Our vision is to help people share their knowledge, work, projects, papers and ideas and build their network through what they do rather where they live, study or work.'},
            //     { property: 'og:title', content: "Epiloge - Build your network in your field of interest"},
            //     { property: 'og:site_name', content: 'Epiloge'},
            //     {property: 'og:type', content: 'website'},    
            //     {name: 'robots', content: 'index,follow'} 
            // ]
        }
    }
}
</script>
  @import url(https://fonts.googleapis.com/css?family=Roboto:100,100italic,300,300italic,regular,italic,500,500italic,700,700italic,900,900italic);
<style> 
#app {
  position: relative;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  color: #2c3e50;
  margin: 0;
}
body {

  /* min-width: 1400px; */
  box-sizing: border-box;
}
main{
  min-height: 100vh;
}

*,
*::before,
*::after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}
</style>
