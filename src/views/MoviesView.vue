<script setup>
import MovieCard from '@/components/movieCard.vue'
import { ref, onMounted } from 'vue'

const movieList = ref([])
const isLoading = ref(true)

onMounted(async () => {
    const result = await fetch('http://localhost:3000/movies')
    const response = await result.json();
    movieList.value = response
    isLoading.value = false
})
</script>
<template>
    <h1>Movies</h1>
    <div class="max-w-sm mx-auto" v-if="isLoading">
        <span class="text-2xl font-bold text-indigo-700">
            Laoding ...
        </span>
    </div>
    <div class="grid grid-cols-4 gap-4" v-else>
        <MovieCard v-for="movie in movieList" :key="movie.id" :movie="movie" />
    </div>
</template>
