import { defineStore } from "pinia";

export const useEditorStore = defineStore("editor", {
  state: () => ({
    title: "Hello",
  }),
  actions: {
    handleUpdateTitle(value: string) {
      this.title = value;
    },
  },
});
