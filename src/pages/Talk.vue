<template>
  <PageWrapper class="flex flex-col items-center justify-center" v-bind="props">
    <header
      class="relative flex w-fit flex-col items-center text-[8vw] font-extralight leading-none text-primary before:text-secondary after:text-secondary 2xl:text-[5vw]"
    >
      <VariableFontTypingText text="“WHEN YOU KNOW YOUR" />
      <VariableFontTypingText text="WORTH, NO ONE CAN" :delay="2000" />
      <VariableFontTypingText text="MAKE YOU FEEL" :delay="5000" />
      <VariableFontTypingText text="WORTHLESS”" :delay="7000" />
      
    </header>
    <!--<Typing class="ml-[40vw] mt-4 text-center" :delay="4800">— TONI MORRISON</Typing>-->
  </PageWrapper>
</template>

<script setup lang="ts">
import PageWrapper from "@/components/PageWrapper.vue";
import Typing from "@/components/Typing.vue";
import VariableFontTypingText from "@/components/VariableFontTypingText.vue";
import type { PageProps } from "@/utils/pages";

const props = defineProps<PageProps>();
</script>

<style scoped>
header {
  text-shadow: 0 0.03em 0.2em currentColor;
}
</style>
