import { defineStore } from "pinia";

export const useEditorStore = defineStore('editor', {
    state() {
        return {
            title: 'Hello'
        }
    }
})