import { writable } from 'svelte/store'

const user = writable({
    userName: null,
    jwt: null
})

export default user