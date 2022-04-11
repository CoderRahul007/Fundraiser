<template>
    <div id="Admin_Dashboard">
        <v-container grid-list-md>
            <div class="text-md-center">
                <h1 class="display-1 font-weight-bold mb-3">
                    Request For Campaigns From Users
                    </h1>
                </div>
            <v-layout row wrap>        
                <v-card          
                v-for="(c,index) in Campaigns" :key="index" md12
                class="ma-auto purple lighten-5"   
                outlined        
                >
                <v-card-title>{{c.causeTitle}}</v-card-title>
                    <v-row>
                        <v-card-text>{{c.causeReason}}</v-card-text>
                    </v-row>
                    <v-row>
                        <v-card-text>{{c.amountNeeded}}</v-card-text>
                    </v-row>
                    <v-row>
                        <v-card-text>{{c.duration}}</v-card-text>
                    </v-row>
                    <v-row>
                        <v-card-text>{{c.userName}}</v-card-text>
                    </v-row>
                    <v-row>
                        <v-card-text>{{c.userEmail}}</v-card-text>
                    </v-row>
                    <v-row>
                        <v-card-text>{{c.userId}}</v-card-text>
                    </v-row>
                    <v-row>
                        <v-card-text>{{c.userMob}}</v-card-text>
                    </v-row>
                    <v-row>
                        <v-card-text>{{c.walletAddress}}</v-card-text>
                    </v-row>
                    <v-row v-for="(item, index) in c.docLinks" :key="index">
                        <a>{{item}}</a>
                    </v-row>
                    <v-row>
                        <a>{{c.photoLink}}</a>
                    </v-row>
                    <v-card-actions>
                        <v-btn color="primary" @click='verified(c.userId) '>Verified</v-btn>
                        <v-btn color="error" @click='notVerified(c.userId)'>Doubtful</v-btn>
                    </v-card-actions>
                </v-card>
            </v-layout>
      </v-container>
    </div>
</template>
<script>
export default {
    name:'Admin_Dashboard',
    data() {
        return {
            Campaigns:[],
        }
    },
    mounted() {
          if(this.$store.state.logAdmin === false){
          this.$router.replace({name: "home"});
        }else{
            
        }

    },
    methods: {
        verified(Id){

        },
        notVerified(Id){

        }
    },
}
</script>