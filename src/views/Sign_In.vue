<template>
    <div id="Sign_In">
        <v-container
            align-center
            align-content-center
            fluid  
        >
            <v-row align="center"
            justify="center">
                <v-col>
                    <v-card
                        class="mx-auto"
                        max-width="486"
                    >
                        <v-card-title>Sign In</v-card-title>
                        <v-form>
                            <v-row>
                                <v-col  cols="12"><v-text-field class="mx-4" v-model="email" label="Email Id" type="email" required></v-text-field></v-col>                                
                                <v-col  cols="12"><v-text-field class="mx-4" v-model="password" label="Password" type="password" required></v-text-field></v-col>                             
                            </v-row>
                            <v-row align="center"
                                    justify="center">
                            <v-btn class="ma-4" color="primary" @click="signIn" >Sign In</v-btn>                                   
                            <v-btn class="ma-4" text color="primary" to="/" >Close</v-btn>
                            </v-row>
                        </v-form>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
export default {
    name:'Sign_In',
    data() {
        return {
            email:'',
            password:'',
        }
    },
    methods: {
        signIn(){
            this.$router.push({name: "User_DashBoard" , params: {email}})// pass user email id to the user dashboard component each user data will be saved by using his email id as a key
        }
    },
    
}
</script>