import {ref} from 'vue';

const show = ref(false);
const content = ref({});

export function modal() {
    const showModal = (value) => {
        show.value = value;   
    }

    const setModalContent = (value) => {
        content.value = value;
    }

    return { showModal, setModalContent, show, content };
}