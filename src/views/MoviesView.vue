<script setup>
import MovieCard from '@/components/movieCard.vue';
import { ref, onMounted } from 'vue';
const movieList = ref([]);

onMounted(() => {
    fetch('http://localhost:3000/movies')
    .then((response) => response.json())
    .then(apiMovies => {
        movieList.value = apiMovies;
    });
})
</script>
<template>
    <h1>Movies</h1>
    <div class="grid grid-cols-4 gap-4">
        <MovieCard v-for="movie in movieList" :key="movie.id" :movie="movie" />
    </div>
</template>
