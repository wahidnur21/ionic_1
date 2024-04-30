<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon aria-hidden="true" :icon="homeOutline" />
          <ion-label>Home</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon aria-hidden="true" :icon="heart" />
          <ion-label>Favorite</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon aria-hidden="true" :icon="settings" />
          <ion-label>Favorite</ion-label>
        </ion-tab-button>

      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
// import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonFabButton, IonList, IonItemSliding, IonFab, IonItemOption, IonItem, IonListHeader, IonLabel, IonItemOptions, IonInput, IonSelect, IonTextarea, IonRadio, IonRadioGroup, IonSelectOption } form "@ionic/vue";
import { homeOutline, heart, settings } from "ionicons/icons";
</script>
