<template>
  <PageWrapper class="flex flex-col justify-center" id="about" v-bind="props">
    <Header>ABOUT</Header>

    <div class="flex flex-col gap-8 pl-4 2xl:w-[90%] 2xl:flex-row 2xl:gap-60 2xl:pl-8 [&>*]:flex-1">
      <div class="flex flex-col gap-8">
        <div>
          <p>Technical Expert</p>
          <p>Passionate Mentor</p>
          <p>Lifelong Learner</p>
        </div>

        <div class="hidden gap-2 text-secondary 2xl:flex">
          <img src="/icons/arch.png" alt="archlinux" />
          <span>I use Arch btw</span>
        </div>
      </div>

      <p class="mb-8 2xl:mb-0">
        Technical expert that's passionate about building smart solutions and mentoring young adults.
        <br />
        I combine hands-on experience in tech with a commitment to guiding others through career advice, skill building, and personal growth.
        <br />
        My mission is to empower others through mentorship, sharing knowledge, and continuous learning.
      </p>
    </div>
    <div class="ml-4 flex gap-2 text-secondary 2xl:hidden">
      <img src="/icons/arch.png" alt="archlinux" />
      <span>I use Arch btw</span>
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
