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
                    @click="handleSaveClicked"
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
    import { useRoute, useRouter } from 'vue-router';
    import AddEditNote from '@/components/Notes/AddEditNote.vue';
    import {useStoreNotes } from '@/stores/storeNotes'

/*
    store
*/

    const route = useRoute()
    const router = useRouter()
/*
    store
*/
    
    const storeNotes = useStoreNotes()

/*
    note
*/

    const noteContent = ref('')

    noteContent.value = storeNotes.getNoteContent(route.params.id)

/* 
    save clicked
*/

    const handleSaveClicked = () => {
        storeNotes.updateNote(route.params.id, noteContent.value)
        router.push('/')
    }

</script>