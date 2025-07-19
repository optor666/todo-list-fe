import { reactive } from 'vue'

export const loadingStore = {
    state: reactive({
        loading: false,
        count: 0
    }),
    start() {
        this.state.count++
        this.state.loading = true
    },
    end() {
        this.state.count = Math.max(0, this.state.count - 1)
        if (this.state.count === 0) {
            this.state.loading = false
        }
    }
}
