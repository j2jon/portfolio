<template>
  <PageWrapper class="flex flex-col justify-center" id="about" v-bind="props">
    <Header>ABOUT</Header>

    <div class="flex flex-col gap-8 pl-4 2xl:w-[90%] 2xl:flex-row 2xl:gap-60 2xl:pl-8 [&>*]:flex-1">
      <div class="flex flex-col gap-8">
        <div>
          <p>Technical Innovator</p>
          <p>Empowering Mentor</p>
          <p>Lifelong Explorer</p>
        </div>
      </div>

      <p class="mb-8 2xl:mb-0">
        I specialize in designing secure systems, solving complex problems, and helping others grow their skills along the way.
        <br />
        I leverage real-world experience to empower others with practical skills and clear direction.
        <br />
        I’m dedicated to inspiring others to grow, learn, and unlock their full potential through mentorship, sharing knowledge, and continuous learning.
      </p>
    </div>

    <CloseBracket />
  </PageWrapper>
</template>

<script setup lang="ts">
import Header from "@/components/Header.vue";
import PageWrapper from "@/components/PageWrapper.vue";
import CloseBracket from "@/components/CloseBracket.vue";
import type { PageProps } from "@/utils/pages";

const props = defineProps<PageProps>();
</script>
