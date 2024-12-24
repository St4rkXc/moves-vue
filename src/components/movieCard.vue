<script setup>
import { defineProps } from 'vue'
defineProps({
    movie: Object,
})
</script>
<template>
    <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
        <div class="flex justify-center">
            <img :src="movie.poster" :alt="movie.title" class="rounded-t-lg" />
        </div>
        <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                {{ movie.title }}
            </h5>
            <span class="mr-4">{{ movie.year }}</span>
            <span class="">{{ movie.runtime }}</span>
        </div>
    </div>
</template>
