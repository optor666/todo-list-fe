<template>
    <div v-if="visible" class="error-toast">
        {{ message }}
    </div>
</template>

<script setup>
    import { visible, message } from '../utils/toast'
</script>

<style scoped>
.error-toast {
    position: fixed;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #f44336;
    color: white;
    padding: 12px 24px;
    border-radius: 4px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    z-index: 10000;
    font-size: 14px;
}
</style>
