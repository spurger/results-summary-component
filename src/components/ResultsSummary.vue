<script setup lang="ts">
import { computed } from 'vue'
import data from '../data.json'

type SummaryItem = {
  category: string
  score: number
  icon: string
}

const items = computed<SummaryItem[]>(() => data)

const itemClasses = computed(() => [
  { container: 'bg-light-red/10', category: 'text-light-red' },
  { container: 'bg-orange-yellow/10', category: 'text-orange-yellow' },
  { container: 'bg-green-teal/10', category: 'text-green-teal' },
  { container: 'bg-cobalt-blue/10', category: 'text-cobalt-blue' }
])

const score = computed<number>(() =>
  Math.floor(items.value.reduce((acc, item) => acc + item.score, 0) / items.value.length)
)
</script>

<template>
  <div
    class="flex max-w-[732px] flex-col rounded-3xl bg-white shadow-xl shadow-pale-blue md:flex-row"
  >
    <div
      class="flex flex-1 flex-col rounded-b-3xl bg-gradient-to-b from-light-slate-blue to-light-royal-blue px-8 pb-12 pt-8 text-center text-white md:rounded-3xl"
    >
      <div class="text-xl font-medium text-light-levander">Your result</div>
      <div class="my-8 flex justify-center">
        <div
          class="inline-flex h-[200px] w-[200px] flex-col items-center justify-center rounded-full bg-gradient-to-b from-violet-blue to-persian-blue/5"
        >
          <div class="text-6xl font-extrabold">{{ score }}</div>
          <div class="text-sm font-medium text-light-levander/50">of 100</div>
        </div>
      </div>
      <div class="mb-4 text-2xl font-medium">Great</div>
      <div class="mx-4 text-sm text-light-levander md:mx-8">
        You scored higher than 65% of the people who have taken these tests.
      </div>
    </div>
    <div class="flex flex-1 flex-col p-6 pb-10 md:p-8">
      <div class="mb-5 text-lg font-bold text-dark-gray-blue">Summary</div>
      <div
        v-for="(item, index) in items"
        :key="item.category"
        class="flex items-center justify-between rounded-md p-4"
        :class="[itemClasses[index % itemClasses.length].container, { 'mt-3': index !== 0 }]"
      >
        <div class="flex items-center gap-3">
          <img :src="item.icon" class="h-4 w-4" />
          <div class="text-sm font-bold" :class="itemClasses[index % itemClasses.length].category">
            {{ item.category }}
          </div>
        </div>
        <div class="text-sm font-bold">
          <span class="text-dark-gray-blue">{{ item.score }}</span>
          <span class="text-dark-gray-blue/50"> / 100</span>
        </div>
      </div>
      <div class="mt-auto pt-6">
        <button
          type="button"
          class="w-full rounded-3xl bg-dark-gray-blue p-3 text-sm font-medium text-white hover:bg-gradient-to-b hover:from-light-slate-blue hover:to-light-royal-blue focus:bg-gradient-to-b focus:from-light-slate-blue focus:to-light-royal-blue"
        >
          Continue
        </button>
      </div>
    </div>
  </div>
</template>
