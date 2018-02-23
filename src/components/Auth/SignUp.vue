<template>
  <div class="signup" >
      <h3>Sign Up</h3>
      <input type="text" placeholder="Email" v-model="email" /><br/>
      <input type="password" placeholder="Password" v-model="password" /><br/>
      <button v-on:click="signUp" >Connection</button>
      <p>Already have an account ? Go back to <router-link to='/' >login</router-link></p>
  </div>
</template>

<script>
import {firebase, firestore} from './../../fire.js';
//am i importing the right way or should it be :
// import firebase from 'firebase';
export default {
  name: 'signup',
  data: function() {
      return {
          email: '',
          password: ''
      }
  },
  methods: {
      login: function () {
          this.$router.replace('/hello')
      },
      signUp: function() {
          const {email, password} = this;
          firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then(user => {
				const userRef = firestore.collection('users').doc(user.uid);
				userRef.set({
					email: email,
					profilePic:
						'https://firebasestorage.googleapis.com/v0/b/devicttalk.appspot.com/o/profilePictures%2Fprofile-placeholder.gif?alt=media&token=c275920d-11ac-4fba-b768-b17c9abb20ac',
                });
                alert(`User ${user} created`)
			})
			.catch(error => {
				return alert(`${error.message}`)
			});
      }
  }
}
</script>

<style scoped>
    .login {
        margin-top: 40px;
    }
    input {
        margin: 10px 0;
        width: 20%;
        padding: 15px;
    }
    button {
        margin-top: 20px;
        width: 10%;
        cursor: pointer;
    }
    p {
        margin-top: 40px;
        font-size: 13px;
    }
    p a{
        text-decoration: underline;
        cursor: pointer;
    }
</style>