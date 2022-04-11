<template>
  <div>
      <h1>Caring Humans</h1>
      <ul>
          <li v-for="user in users" v-bind:key="user.id">
              <ul>
                <li>{{user.user_name}}</li>
                <li>{{user.user_mob}}</li>
                <li>{{user.user_email}}</li>
                <div v-for="imageUrl in user.imageUrls" v-bind:key="imageUrl">
                    <img :src="imageUrl">
                </div>
              </ul>
          </li>
      </ul>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import firebaseObj from '../components/firebaseinit'

export default {
  name: 'getUsers',
  components: {
  },
  data(){
      return{
          users : []
      }
  },
  created() {
      const db = firebaseObj.db
      db.collection('users').get().then
      (querySnapshot => {
          querySnapshot.forEach(doc => {
             const data = {
                 'id' : doc.id,
                 'user_name' : doc.data().user_name,
                 'user_email' : doc.data().user_email,
                 'user_mob' : doc.data().user_mob,
                 'imageUrls' : doc.data().imageUrls
             }
                this.users.push(data)
          })
      })
  }

};
</script>