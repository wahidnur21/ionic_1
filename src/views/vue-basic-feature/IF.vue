<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
            <ion-button @click="back">
                <ion-icon slot="icon-only" :icon="arrowBackOutline"></ion-icon>
            </ion-button>
        </ion-buttons>
        <ion-title>IF</ion-title>      
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">

      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">IF</ion-title>
        </ion-toolbar>
      </ion-header>

      <div v-if="jk == 1">
        <h2>laki-laki</h2>
      </div>

      <div v-else>
        <h2>perempuan</h2>
      </div>

      <ion-button @click="rubahKelamin" expand="block" fill="solid">
        Click me
      </ion-button>

      <div v-if="gender == 1">
        <h2>laki-laki</h2>
      </div>

      <div v-else>
        <h2>perempuan</h2>
      </div>

        <ion-button @click="rubahGender" expand="block" fill="solid">
        Click me
        </ion-button>

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

// Variabel Biasa
let jk = 2
let gender = ref(2)

//fungsion rubah KELAMIN
const rubahKelamin = () => {
    // if
    // if(jk == 1){
    //  jk = 2
    // } else {
    //  jk = 1
    // }
    //Tertiary
    jk = jk == 1 ? 2 : 1
}

const rubahGender = () => {
    gender.value = gender.value == 1 ? 2 : 1
}
</script>

<style></style>