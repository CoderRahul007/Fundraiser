<template>
    <div id="User_Campaign_Starter">
        <v-container>
            <v-row>
                <v-col>
                    <v-card>
                        <v-card-title>
                            User Campaign Starter
                        </v-card-title>
                        <v-form>
                            <v-text-field
                                v-model="user_Name"
                                label="User Name"
                            ></v-text-field>
                            <v-text-field
                                v-model="mob_No"
                                label="User Mobile Number"                                
                            >
                            </v-text-field>
                            <v-text-field
                                v-model="email"
                                label="User Email"
                                type="email"
                            ></v-text-field>
                             <!-- <v-text-field
                                v-model="EthAddress"
                                label="Ethereum Wallet address"                                
                            ></v-text-field>
                            <v-text-field
                                v-model="address"
                                label="Residence/Address"
                            >
                            </v-text-field>
                            <v-text-field
                                v-model="cause_Title"
                                label="Cause Title"
                            >                            
                            </v-text-field>
                            <v-textarea
                                v-model="cause_Reason"
                                label="Give some reason to support your Cause."
                            >                            
                            </v-textarea> -->
                           <v-file-input
                                accept="image/*"
                                label="Photo Upload"
                                filled
                                multiple
                                v-on:change="uploadImage"
                                prepend-icon="mdi-camera"
                                v-model="pics"
                            ></v-file-input>
                            <!-- <div>
                                <label for="UploadImage">UploadImage</label>
                                <input type="file" @change="uploadImage" multiple>
                            </div> -->

                            <!-- <v-file-input v-model="docs" show-size label="Documents Upload"></v-file-input>
                            <v-text-field
                                label="Amount Needed (ETH)"
                                type="number"
                                step="0.0001"
                                min="0"
                                v-model="amountGoal">
                            </v-text-field>
                            <v-text-field
                                label="Duration (in days)"
                                type="number"
                                v-model="duration">
                            </v-text-field>
                            <v-text-field
                                v-model="password"
                                label="Password"
                                type="password"
                            ></v-text-field> -->
                            <v-btn color="primary" @click="saveUser">Next</v-btn>
                        </v-form>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>        
    </div>
</template>
<script>
import firebaseObj from '../components/firebaseinit'
export default {
    name:'User_Campaign_Starter',
    data() {
        return {
            user_Name:null,
            mob_No:null,
            // EthAddress:'',
            // address:'',
            email:null,
            // duration:'',
            // cause_Reason:'',
            // cause_Title:'',
            // password:'',
             pics:null,
            // docs:null,
            // amountGoal:0,
            imageUrls:[]
        }
    },
    mounted() {
    
    },
    methods: {
        saveUser () {
            const db = firebaseObj.db
            
            db.collection('users').add({
                user_name : this.user_Name,
                user_email : this.email,
                user_mob : this.mob_No,
                imageUrls : this.imageUrls
            })
            .then(docRef => this.$router.push('/'))
            .catch(err => console.log(err))
        },
        uploadImage (event) {
            const fb = firebaseObj.firebaseApp

          this.pics.forEach((pic) => { 
               let file = pic
              
                var storageRef = fb.storage().ref('images/'+ file.name)
            
                let uploadTask = storageRef.put(file)

                uploadTask.on('state_changed',(snapshot) => {
            
                },(error) => {
                // Handle unsuccessful uploads
                }, () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                   // console.log('File available at', downloadURL)
                    this.imageUrls.push(downloadURL)
                })
                })
                })
        }
    },
}
</script>