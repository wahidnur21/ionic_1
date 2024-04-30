<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Setting</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">

      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 3</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-list>

        <ion-list-header>Vue Basic Feature</ion-list-header>

        <ion-item @click="toState" class="ion-activatable ripple-parent">
          <ion-ripple-effect></ion-ripple-effect>
          <ion-label>
            <h2>State</h2>
            <p>State Management?</p>
          </ion-label>
        </ion-item>

        <ion-item @click="toIterator" class="ion-activatable ripple-parent">
          <ion-ripple-effect></ion-ripple-effect>
          <ion-label>
            <h2>Iterator - v-for</h2>
            <p>?</p>
          </ion-label>
        </ion-item>

        <ion-item @click="toIF" class="ion-activatable ripple-parent">
          <ion-ripple-effect></ion-ripple-effect>
          <ion-label>
            <h2>If Statement - v-if</h2>
            <p>State Management?</p>
          </ion-label>
        </ion-item>

        <ion-item @click="toModal" class="ion-activatable ripple-parent">
          <ion-ripple-effect></ion-ripple-effect>
          <ion-label>
            <h2>Model - Two Dta Binding</h2>
            <p>?</p>
          </ion-label>
        </ion-item>

        <ion-item @click="toEvent" class="ion-activatable ripple-parent">
          <ion-ripple-effect></ion-ripple-effect>
          <ion-label>
            <h2>Event</h2>
            <p>?</p>
          </ion-label>
        </ion-item>

        <ion-item @click="toLifecycle" class="ion-activatable ripple-parent">
          <ion-ripple-effect></ion-ripple-effect>
          <ion-label>
            <h2>toLifecycle</h2>
            <p>?</p>
          </ion-label>
        </ion-item>

      </ion-list>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter()

const toEvent = () =>router.push({ path: '/vue/event' })
const toIF = () =>router.push({ path: '/vue/if' })
const toIterator = () =>router.push({ path: '/vue/iterator' })
const toLifecycle = () =>router.push({ path: '/vue/lifecycle' })
const toModal = () =>router.push({ path: '/vue/modal' })
const toState = () =>router.push({ path: '/vue/state' })

// VARIABLE let, var, const
// Penulisan variable dengan const
// let tidak bersifat constant, jadi nilai variable  bisa di rubah
let name = 'Joko'

// Penulisan variable dengan const
// const bersifat constant, jadi nilai variable tidak bisa di rubah
const kelas = 'IK2'

// FUNCTION
// menggunakan syntax FUNCTION
function gantiNama(name: string) {
  alert('ganti nama')
}

// menggunakan syntax const
const gantiKelas = (name:string) => {
  alert('ganti kelas')
}

// TIPE PRIMITIVE
// string, number, boolean, any, Array
// 1. string
const peliharaan: string = 'kucing'

// 2. number
const umur:number = 10.5

// 3. boolean
const isHidup:boolean = false

// 4. any
const gakjelas:any =false

// 5. Array
const names: Array<string> = [
  'arip',
  'bamabng',
  'siti',
  'kucenf',
]

const nilais:number[] = [
  123,
  10,
  20,
  30,
]

const semrawut:any[] = [
  'aku',
  123,
  true,
]

//TIPE DATA OBJECT
const orang = {
  nama: 'arip',
  kelas: 'ik2',
  umur: 30,
  pacars: [
    'siti',
    'sukinem',
    'sukijah',
  ],
  ayah: {
    nama: 'gak tau',
    jk:1,
    alamat:'jl.tamrin 35a'
  },
  ibu: {
    nama: 'gak tau',
    jk:2,
    alamat: 'jl. tamrin 35a'
  },
}

const siswas:any[] = [
  {
    name: 'si A',
    umur: 17,
  },
  {
    name: 'si B',
    umur: 19,
  },
  {
    name: 'si c',
    umur: 20,
  }
]

// TYPE - CUSTOM
type Orang = {
  name: string
  kelas: string
  umur: number
  isHidup?: boolean
  alamat?: string,
  jk?: KELAMIN 
}

const orang1:Orang = {
  name: '',
  kelas: '',
  umur: 13,
  isHidup: false,
}

const orang2:Orang = {
  name: '',
  kelas: '',
  umur: 12,
  jk: "laki-laki"
}

// TYPE - enumable
type KELAMIN = 'laki-laki' | 'perempuan'

</script>
