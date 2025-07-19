import { ref, computed } from 'vue'

const count = ref(0)
const loading = computed(() => count.value > 0)

const start = () => {
    count.value++
}

const end = () => {
    count.value--
}

export const loadingStore = {
    loading,
    start,
    end
}
