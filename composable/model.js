import {ref} from 'vue';

const show = ref(false);

export function modal() {

    const showModal = (value) => {
        show.value = value;   
    }

    return { showModal, show };
}