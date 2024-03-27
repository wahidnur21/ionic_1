<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
            <ion-button @click="back">
                <ion-icon slot="icon-only" :icon="arrowBackOutline"></ion-icon>
            </ion-button>
        </ion-buttons>
        <ion-title>Iterator</ion-title>      
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">

      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Iterator</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-list>
        <ion-list-header>Iterator dengan variable biasa</ion-list-header>

        <ion-item v-for="item in contacts">
            <ion-label>
              <h2>{{ i.name }}</h2>
              <p>{{ i.phone }}</p>
              <p>{{ i.email }}</p>
            </ion-label>
          </ion-item>
      </ion-list>

      <ion-list>
        <ion-list-header>Iterator dengan variable ref</ion-list-header>

        <ion-item v-for="item in contacts">
            <ion-label>
              <h2>{{ i.name }}</h2>
              <p>{{ i.phone }}</p>
              <p>{{ i.email }}</p>
            </ion-label>
          </ion-item>
      </ion-list>  

    </ion-content>  
  </ion-page>
</template>  

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { arrowBackOutline } from "ionicons/icons";

const route = useRouter()

const back = () => {
    route.back()
}

const contacts = [
    {
        nama: 'SI A',
        phone: '0971833672',
        email: 'si.a@gmail.com',
    },
     {
        nama: 'SI B',
        phone: '0971833672',
        email: 'si.b@gmail.com',
    },
     {
        nama: 'SI C',
        phone: '0971833672',
        email: 'si.c@gmail.com',
    },
     {
        nama: 'SI D',
        phone: '0971833672',
        email: 'si.d@gmail.com',
    },
]

const contactRefs = ref([
    {
        nama: 'SI A',
        phone: '0971833672',
        email: 'si.a@gmail.com',
    },
     {
        nama: 'SI B',
        phone: '0971833672',
        email: 'si.b@gmail.com',
    },
     {
        nama: 'SI C',
        phone: '0971833672',
        email: 'si.c@gmail.com',
    },
     {
        nama: 'SI D',
        phone: '0971833672',
        email: 'si.d@gmail.com',
    },
])

</script>

<style></style>
