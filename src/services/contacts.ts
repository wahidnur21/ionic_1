import { ref } from "vue";
import { useStorage } from '@vueuse/core';


type Contact = {
    id?: any,
    name?: string
    phone?: string
    email?: string
    address?: string
    gebder?: number
    isFav?: boolean
}

export const data = useStorage<Contact[]>('app-contacts', [])

// export const data = ref<any[]>([
//     {
//         name: 'Aris',
//         phone: '03839826623',
//         email: 'aris@ganteng.com',
//         address: '',
//         gebder: '1',
//         isFav: true
//     }
// ])