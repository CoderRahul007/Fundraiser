<template>
    <nav>
        <v-toolbar  color="primary">
            <v-toolbar-title align-center class=" white--text  headline " >Fund Raiser</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn v-if="log === true" text class=" white--text" @click="logout">Log Out</v-btn>
            <v-btn v-if="log === false" text class=" white--text" to="/Sign_In">Sign In</v-btn>
        </v-toolbar>
    </nav>
</template>
<script>
export default {
    name:'Header',
    computed: {
    log() {
        if (this.$store.state.logAdmin === true || this.$store.state.logUser === true){
            return true
        }
        else if(this.$route.path == "/"){
            return false
        }
    }
    },
    methods:{
        logout(){
            if(this.$store.state.logAdmin === true){
                this.$store.commit('logOutAdmin')
                this.$router.replace({name: 'home'})
            }else if(this.$store.state.logUser === true){
                this.$store.commit('logOutUser')
                this.$router.replace({name: 'home'})
            }
    },
    
    }   
}
</script>