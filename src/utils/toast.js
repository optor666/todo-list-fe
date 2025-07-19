import { ref } from 'vue'

const visible = ref(false)
const message = ref('')

const showErrorToast = (message) => {
    message.value = message
    visible.value = true
    setTimeout(() => {
        visible.value = false
    }, 3000)
}

export {
    visible,
    message,
    showErrorToast
}
