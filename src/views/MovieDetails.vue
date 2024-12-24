<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const queryMovie = ref({})
const isLoading = ref(true)
const route = useRoute()

onMounted(async () => {
    const result = await fetch(`http://localhost:3000/movies/${route.params.id}`)
    const response = await result.json()
    queryMovie.value = response
    isLoading.value = false
})
</script>

<template>
    <div class="bg-white m-6 p-4">
        <div class="container" v-if="isLoading">Is Laoding...</div>
        <div v-else class="container flex flex-col items-center px-4 py-12 mx-auto xl:flex-row">
            <h3>Params: {{ $route.params.id }}</h3>
        </div>
        <div class="flex justify-center xl:w-1/2">
            <img :src="queryMovie.poster" :alt="queryMovie.title" class="h-80 w-80 sm:w-[28rem] sm:h-[28rem] flex-shrink-0 object-cover rounded-md" />
        </div>
        <div class="flex flex-col items-center mt-6 xl:items-start xl:w-1/2 xl:mt-0">
            <h2 class="text-3xl font-bold tracking-tight text-gray-800 xl:text-4xl">
                {{ queryMovie.title }}
            </h2>
            <div class="flex items-center mt-2 text-gray-600">
                <span>{{ queryMovie.year }}</span>
                <span class="mx-2">•</span>
                <span>{{ queryMovie.runtime }}</span>
            </div>
        </div>
    </div>
</template>
