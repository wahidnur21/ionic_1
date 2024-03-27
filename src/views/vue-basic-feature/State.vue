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

      <ion-label>
        <h2>{{ nama }}</h2>
      </ion-label>

      <ion-button @click="gantiNama" expand="block" fill="solid">
        ganti Nama
      </ion-button>  

      <br />
      <br />
      <br />

      <ion-label>
        <h2>{{ alamat }}</h2>
      </ion-label>

      <ion-button @click="gantiAlamat" expand="block" fill="solid">
        ganti Alamat
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

// Variabel biasa : tidak akan update tampil ketika nilinya di rubah
let nama = 'bamabng'

// merubah nilai nama
const gantiNama = () => {
    console.log(nama)

    nama = 'sutini'

    console.log(nama)
}

// Variabel dengan ref : akan update tampil ketika nilainya di rubah
const alamat = ref('Madiun')

// merubah nilai alamat
const gantiAlamat = () => {
    alamat.value = 'ponorogo'
}


</script>

<style></style>
