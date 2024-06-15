<template>
  <div class="flex p-4 flex-col">
    <small class="text-xs text-gray-600">Text</small>
    <input
      v-model="title"
      class="p-4 mt-2 outline-none"
      :placeholder="'Enter Text'"
      @input="handleChange($event)"
    />
  </div>
</template>

<script lang="ts" setup>
import { defineComponent } from "vue";
import { useEditorStore } from "../store/editor";
import { storeToRefs } from "pinia";

interface InputEvent extends Event {
  target: HTMLInputElement;
}

const editorStore = useEditorStore();

const { title } = storeToRefs(editorStore);

const handleChange = (inputValue: InputEvent) => {
  const {
    target: { value },
  } = inputValue;

  editorStore.handleUpdateTitle(value);
};
</script>

<style lang="postcss" scoped></style>
