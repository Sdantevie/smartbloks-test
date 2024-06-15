<template>
  <div class="flex p-10 h-full">
    <h4 class="text-4xl">
      {{ titlePreview }}
    </h4>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineComponent } from "vue";
import { useEditorStore } from "../store/editor";
import { storeToRefs } from "pinia";

const editorStore = useEditorStore();

const { title } = storeToRefs(editorStore);

const titlePreview = computed(() => title.value);
</script>

<style lang="postcss" scoped></style>
