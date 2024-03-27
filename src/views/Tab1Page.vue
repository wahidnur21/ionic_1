<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Contact</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">

      <ion-list>
        <ion-list-header>
          <ion-label>Daftar Kontak</ion-label>
        </ion-list-header>

        <ion-item-sliding>
          <ion-item>
            <ion-label>
              <h2>Nama Kontak</h2>
              <p>Nomor</p>
              <p>Email</p>
            </ion-label>
          </ion-item>

          <ion-item-options>
              <ion-item-option>
                <ion-icon slot="start" :icon="heart"></ion-icon>
                Favorit
              </ion-item-option>
              <ion-item-option color="danger">
                <ion-icon slot="start" :icon="trash"></ion-icon>
              </ion-item-option>
          </ion-item-options>
        </ion-item-sliding>

        <ion-item-sliding>
          <ion-item>
            <ion-label>
              <h2>Nama Kontak</h2>
              <p>Nomor</p>
              <p>Email</p>
            </ion-label>
          </ion-item>

          <ion-item-options>
              <ion-item-option>
                <ion-icon slot="start" :icon="heart"></ion-icon>
                Favorite
              </ion-item-option>
              <ion-item-option color="danger">
                <ion-icon slot="start" :icon="trash"></ion-icon>
              </ion-item-option>
          </ion-item-options>
        </ion-item-sliding>
        
      </ion-list>

      <ion-fab slot="fixed" horizontal="end" vertical="bottom">
        <ion-fab-button color="success" @click="tambah">
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
// import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonFabButton, IonList, IonItemSliding, IonFab, IonItemOption, IonItem, IonListHeader, IonLabel, IonItemOptions, IonInput, IonSelect, IonTextarea, IonRadio, IonRadioGroup, IonSelectOption } form "@ionic/vue";
import { add, heart, trash } from "ionicons/icons";

const router = useRouter()

const tambah = () => {
  router.push('/add')
}
</script>
