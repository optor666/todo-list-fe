import { reactive } from 'vue'

export const toastState = reactive({
    visible: false,
    message: ''
})

export function showErrorToast(message) {
    toastState.message = message
    toastState.visible = true
    setTimeout(() => {
        toastState.visible = false
    }, 3000)
}
