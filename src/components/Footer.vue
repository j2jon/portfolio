<template>
  <footer class="relative overflow-y-clip 2xl:snap-center 2xl:pb-8">
    <div class="pb-8">
      <hr class="absolute left-[-10%] h-2 w-[200vw] text-secondary" />
      <hr class="absolute left-[-10%] h-2 w-[200vw] bg-secondary text-secondary blur-[20px]" />
    </div>

    <section
      class="flex flex-col gap-4 2xl:flex-row 2xl:items-center 2xl:justify-between 2xl:px-40"
    >
      
      <div class="flex gap-4 2xl:translate-y-1/2 2xl:flex-col">
        <a href="https://www.linkedin.com/in/jonathan-johnson-87b799171/" target="_blank">
          <img src="/icons/linkedin.png" alt="linkedin" />
        </a>
      </div>

      <a
        class="text-secondary underline 2xl:translate-y-1/2"
        href="mailto:jonathan@jonathan-johnson.org"
      >
        jonathan@jonathan-johnson.org
      </a>
    </section>
  </footer>
</template>

<script setup lang="ts">
import MainText from "./MainText.vue";
</script>
