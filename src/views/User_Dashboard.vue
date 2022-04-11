<template>
    <div id="User_Dashboard">
        <v-container grid-list-md>
            <div class="text-md-center">
                <h1 class="display-1 font-weight-bold mb-3">
                    Welcome {{Campaign.userName}}
                    </h1>
                </div>
            <v-layout row wrap>        
                <v-card  
                md12
                class="ma-auto purple lighten-5"   
                outlined        
                >
                <v-card-title>{{Campaign.causeTitle}}</v-card-title>
                    <v-row>
                        <v-card-text>{{Campaign.causeReason}}</v-card-text>
                    </v-row>
                    <v-row>
                        <v-card-text>Amount to be Raised{{Campaign.amountNeeded}}</v-card-text>
                    </v-row>
                    <v-row>
                        <v-card-text>Amount Raised{{Campaign.amountRaised}}</v-card-text>
                    </v-row>
                    <v-row>
                        <v-card-text>{{Campaign.duration}}</v-card-text>
                    </v-row>
                    <v-row>
                        <v-card-text>{{Campaign.userEmail}}</v-card-text>
                    </v-row>            
                    <v-row>
                        <v-card-text>{{Campaign.userMob}}</v-card-text>
                    </v-row>
                    <v-row>
                        <v-card-text>{{Campaign.walletAddress}}</v-card-text>
                    </v-row>
                    <v-row v-for="(item, index) in Campaign.docLinks" :key="index">
                        <a>{{item}}</a>
                    </v-row>
                    <v-row>
                        <a>{{Campaign.photoLink}}</a>
                    </v-row>
                </v-card>
            </v-layout>
        </v-container>   
        <v-container>
             <v-dialog v-model="addMoreDialog" max-width="600px" persistent>
                        <template v-slot:activator="{ on }">
                            <v-btn color="primary" v-on="on"dark>Add More Docs/Pics</v-btn>
                        </template>
                        <v-card>
                            <v-card-title>
                                <span class="headline font-weight-bold mt-2 ml-4">Add More Docs/Pics To Connect With People.</span>
                            </v-card-title>
                            <v-card-text class="pt-0">
                                <v-container class="pt-0" grid-list-md>
                                    <v-layout wrap>
                                        <v-flex xs12>
                                            <v-textarea
                                                label="Comments/Feedback"
                                                persistent-hint
                                                v-model="comments">
                                            </v-textarea>
                                        </v-flex>
                                        <v-flex xs12 sm6>
                                            <v-file-input v-model="file" show-size label="Documents Upload"></v-file-input>
                                        </v-flex>
                                    </v-layout>
                                </v-container>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                    <v-btn
                                    color="blue darken-1"
                                    flat
                                    @click="addMoreDialog = false;
                                    addMoreD.isLoading = false;">
                                    Close
                                    </v-btn>
                                        <v-btn color="blue darken-1"
                                        flat
                                        @click="addMore"
                                        :loading="addMoreD.isLoading">
                                        Save
                                        </v-btn>
                            </v-card-actions>
                        </v-card>
                </v-dialog>
        </v-container>
    </div>
</template>
<script>
export default {
    name:'User_Dashboard',
    data() {
        return {
            comments:'',
            file:null,
            addMoreD: { isLoading: false },
            addMoreDialog:false,
            Campaign:{userEmail:'rahulshukla@gmail.com',userId:'123',userMob:'1411414',
            walletAddress:'123',amountNeeded:'124',amountRaised:'2',causeReason:'Funny',causeTitle:'Wow',duration:12,
            docLinks:['aafaf','afaf'],photoLink:'aaf'},
        }
    },
    mounted() {
          if(this.$store.state.logUser === false){
          this.$router.replace({name: "home"});
        }else{
                var userId=this.$params.id
        }
    },
    methods: {
        
    },
}
</script>