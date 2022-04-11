<template>
    <div id="NGO_Campaign_Starter">
        <v-container>
            <v-row 
            align="center"
            justify="center">
                <v-col cols="12">
                    <v-card 
                        class="mx-auto"
                        max-width="500"
                    >
                        <v-card-title>
                            NGO Campaign Starter
                        </v-card-title>
                        <v-form>
                            <v-row>
                            <v-col cols="12">
                                <v-text-field
                                        v-model="NGO_Name"
                                        label="NGO Name"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field
                                    v-model="NGO_ID"
                                    label="NGO ID"
                                ></v-text-field>
                            </v-col> 
                            <v-col cols="12">
                                <v-text-field
                                    v-model="NGO_ID"
                                    label="NGO ID"
                                > </v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field
                                    v-model="mob_No"
                                    label="NGO Official Mobile Number"                                
                                >
                                </v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field
                                    v-model="email"
                                    label="NGO Email ID"
                                    type="email"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field
                                    v-model="EthAddress"
                                    label="Ethereum Wallet address"                                
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field
                                    v-model="address"
                                    label="Residence/Address"
                                >
                                </v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field
                                    v-model="cause_Title"
                                    label="Cause Title"
                                >                            
                                </v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-textarea
                                    v-model="cause_Reason"
                                    label="Give some reason to support your Cause."
                                >                            
                                </v-textarea>
                            </v-col>
                            <v-col cols="12">
                            <v-file-input
                                    label="Photo Upload"
                                    filled
                                    prepend-icon="mdi-camera"
                                    v-model="pics"
                                ></v-file-input>
                            </v-col>
                            <v-col cols="12">
                                <v-file-input v-model="docs" how-size label="Documents Upload"></v-file-input>
                            </v-col>
                            <v-col cols="12">                 
                                <v-text-field
                                    label="Amount Needed (ETH)"
                                    type="number"
                                    step="0.0001"
                                    min="0"
                                    v-model="amountGoal">
                                </v-text-field>
                            </v-col> 
                            <v-col cols="12">    
                                <v-text-field
                                    label="Duration (in days)"
                                    type="number"
                                    v-model="duration">
                                </v-text-field>
                            </v-col>  
                            <v-col cols="12">
                                <v-text-field
                                    v-model="password"
                                    label="Password"
                                    type="password"
                                ></v-text-field>
                            </v-col>
                                <v-row
                                    align="center"
                                    justify="center"
                                >
                                     <v-btn color="primary">Next</v-btn>
                                </v-row>                               
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
    name:'NGO_Campaign_Starter',
    data() {
        return {
            NGO_Name:'',
            NGO_ID:'',
            mob_No:'',
            EthAddress:'',
            address:'',
            email:'',
            duration:'',
            cause_Reason:'',
            cause_Title:'',
            password:'',
            pics:null,
            docs:null,
            amountGoal:0,
        }
    },
}
</script>