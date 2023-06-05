import {defineStore}  from  "pinia";
import { supabase } from '../lib/supabaseClient'


export const useProductsStore = defineStore( "ProductStore",{
    state: ()=>({
      email: null,
      cards: null,
      loggedIn: false,
      username:null,
      about: null,
      instagram:null, 
      image: null,
      loginData: null,
    }),
    actions:{
        async getProfile() {
            const { data } = await supabase.from('cards').select()
            this.cards = data
            console.log(this.cards)
          },
          async handleLogin(logEmail, logPassword) {
            console.log(logEmail)
            console.log(logPassword)
            try {
              this.loggedIn = true
              const { data, error } = await supabase.auth.signInWithPassword({
                email: logEmail,
                password: logPassword
              })
              this.email = logEmail
              this.loginData = data
              console.log(this.loginData)
              if (error) {
                console.log(error)
                console.log(data)
              } else {
                console.log(data)
              }
            } finally {
              this.loggedIn = false
            }
          }
    }   
})  