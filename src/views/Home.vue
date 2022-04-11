<template>
  <div class="home">
  <v-row>
    <v-col cols="12">
       <v-card
        class="mx-auto"
        color="#26c6da"
        dark
        >
        <v-row
          align="center"
          justify="center"
        >
          <v-card-title  class="display-1 font-weight-bold black--text">Fundraising for World.</v-card-title> 
        </v-row>
        <v-row
          align="center"
          justify="center"
        >
          <v-card-text align="center" class="headline font-weight-bold ">
           Raise funds online for yourself, loved ones, charities, brilliant ideas  and more.
          </v-card-text>
          <v-btn align="center" color="blue"  @click.stop="dialog = true" >Start a Fundraiser</v-btn>
              <v-dialog
                  v-model="dialog"
                  max-width="350"
              >
                <v-card>
                    <v-card-title class="headline">Who Are You?</v-card-title>        
                    <v-card-actions>                      
                      <v-btn
                        align="center"
                        color="green darken-1"
                        text
                        @click="NGO"                
                      >
                         An NGO
                      </v-btn>
                      <v-btn
                        align="center"
                        color="green darken-1"
                        text
                        @click="User"          
                      >
                        A Caring Human 
                      </v-btn>
                    </v-card-actions>
                  </v-card>
              </v-dialog>
          <v-card-text align="center" class="headline  ">
            The simplest way to raise funds! No loans. No debts. No worries.
          </v-card-text>
        </v-row>
        <v-row
          align="center"
          justify="center"
        >
          <v-card-text align="center" class="headline  ">
           Start Donating to all the needy people all around the globe. 
          </v-card-text>
          <v-btn align="center" color="blue" to="/Donate">Donate</v-btn>
          <v-card-text align="center" class="headline  ">
           No Middleman in the Transaction.All the Amount goes the Campaign creator.
          </v-card-text>
        </v-row> 
      </v-card>    
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="12">
    <v-card 
      class="ma-auto "
      img="/crowdfunding.gif"
      dark
    >
        <v-timeline :dense="$vuetify.breakpoint.smAndDown">
          <v-timeline-item
            color="purple lighten-2"
            fill-dot
            right
          >
            <v-card
             class="ma-auto"
             width="500"
            >
              <v-card-title class="purple lighten-2">
                <v-icon
                  dark
                  size="42"
                  class="mr-4"
                >
                  mdi-magnify
                </v-icon>
                <h2 class="headline white--text font-weight-light">Start your Fundraiser</h2>
              </v-card-title>
              <v-container>
                <v-row>
                  <v-col cols="12" md="10">
                   It’ll take only 2 minutes. Just tell us a few details about you and the ones you are raising funds for.
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-timeline-item>

          <v-timeline-item
            color="amber lighten-1"
            fill-dot
            left
            small
          >
            <v-card
              class="ma-auto"
              width="500"
            >
              <v-card-title class="amber lighten-1 justify-end">
                <h2 class="headline mr-4 white--text font-weight-light">Share your Fundraiser</h2>
                <v-icon
                  dark
                  size="42"
                >mdi-home-outline</v-icon>
              </v-card-title>
              <v-container>
                <v-row>
                  <v-col cols="12" md="8">
                   All you need to do is share the Fundraiser with your friends and family. In no time, support will start pouring in.                  
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-timeline-item>

          <v-timeline-item
            color="cyan lighten-1"
            fill-dot
            right
          >
            <v-card
              class="ma-auto"
              width="500"
            >
              <v-card-title class="cyan lighten-1">
                <v-icon
                  class="mr-4"
                  dark
                  size="42"
                >
                  mdi-email-outline
                </v-icon>
                <h2 class="headline white--text font-weight-light">Instantly Withdraw Funds</h2>
              </v-card-title>
              <v-container>
                <v-row>
                  <v-col
                  cols="12" md="8"
                  >
                  The funds raised can be withdrawn without any hassle directly to your bank account
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-timeline-item>
        </v-timeline>
    </v-card>
    </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: 'home',
  data() {
    return {
      dialog:false,
    }
  },
  components: {
  },
  methods: {
    NGO(){
      this.dialog=false
      this.$router.push({name:"NGO_Campaign_Starter"})
    },
    User(){
      this.dialog=false
      this.$router.push({name:"User_Campaign_Starter"})
    }
  },  
};
</script>
