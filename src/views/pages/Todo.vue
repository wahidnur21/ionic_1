<template>
        <ion-page>
            <ion-header>
                <ion-toolbar>
                    <ion-title>Todo Apps</ion-title>
                </ion-toolbar>
            </ion-header>

            <ion-content>
             <ion-list>
                <ion-list-header>
                    <ion-label>JUDUL</ion-label>
                </ion-list-header>

                <ion-item>
                    <ion-label>
                        <h2>Coba</h2>
                        <p>lorem ipsum dolor sit amet, consecture a adisturt elute</p>
                    </ion-label>
                </ion-item>

                <ion-item>
                    <ion-label>
                        <h2>Coba</h2>
                        <p>lorem ipsum dolor sit amet, consecture a adisturt elute</p>
                    </ion-label>
                </ion-item>

                <ion-item>
                    <ion-label>
                        <h2>Coba</h2>
                        <p>lorem ipsum dolor sit amet, consecture a adisturt elute</p>
                    </ion-label>
                </ion-item>

                <ion-item>
                    <ion-label>
                        <h2>Coba</h2>
                        <p>lorem ipsum dolor sit amet, consecture a adisturt elute</p>
                    </ion-label>
                </ion-item>

                <ion-item>
                    <ion-label>
                        <h2>Coba</h2>
                        <p>lorem ipsum dolor sit amet, consecture a adisturt elute</p>
                    </ion-label>
                </ion-item>
             </ion-list>

             <ion-button expand="full" fill="outline" color="danger">Default</ion-button>
             <ion-button  color="warning" :disable="true">Disable</ion-button>

             <ion-fab slot="fixed" horizontal="end" vertical="botton">
                <ion-fab-button color="success">
                    <ion-icon :icon="add"></ion-icon>
                </ion-fab-button>
            </ion-fab>

        </ion-content>
    </ion-page>
</template>

<script setup>
import { logoIonic, add } from 'ionicons/icons';
</script>

<style>
ion-content {
    height: 98%;
}
</style>
