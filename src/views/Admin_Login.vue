<template>
    <div id="Admin_Login">
         <v-container>
            <v-row>
                <v-col>
                    <v-card>
                        <v-card-title>Admin Sign In</v-card-title>
                        <v-form>
                            <v-text-field v-model="email" label="Email Id" type="email" required></v-text-field>
                            <v-text-field v-model="password" label="Password" type="password" required></v-text-field>
                            <v-btn color="primary" @click="" >Sign In</v-btn>
                        </v-form>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
export default {
    name:'Admin_Login',
    data() {
        return {
            
        }
    },
}
</script>