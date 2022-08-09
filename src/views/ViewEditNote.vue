<template>
    <div class="edit-note">
        <AddEditNote
            v-model="noteContent"
            backgroundColor="info"
            placeholder="Edit note"
            label="Edit note"
            ref="addEditNoteRef"
        > 
            <template #buttons>
                <button 
                @click="$router.back()"
                class="button is-white mr-4">
                    Cancel
                </button>
                <button 
                    class="button is-white"
                    :disabled="!noteContent">
                    Accept
                </button>
            </template>
        </AddEditNote>
    </div>
</template>

<script setup>

/*
    imports
*/
    import { ref } from 'vue'
    import AddEditNote from '@/components/Notes/AddEditNote.vue';

/*
    note
*/

    const noteContent = ref('')
</script>