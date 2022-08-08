<template>
    <div class="notes">
        <div class="card has-background-info-light p-4 mb-5">
            <div class="field">
                <div class="control">
                    <textarea 
                    v-model="newNote"
                    class="textarea"
                    placeholder="Add a new note" 
                    ref="newNoteRef"
                    />
                </div>
            </div>

            <div class="field is-grouped is-grouped-right">
                    <div class="control">
                        <button 
                        @click="addNote"
                        :disabled="!newNote"
                        class="button is-info">
                        Add New Note
                        </button>
                    </div>
                </div>
            </div>

            <Note 
                v-for="note in notes" 
                :key='note.id' 
                :note="note"
            />
    </div>

</template>

<script setup>
    /* 
        imports
    */
    import { ref } from 'vue'
    import  Note  from '@/components/Notes/Note.vue'
    /* 
        notes
    */

    const newNote = ref('')
    const newNoteRef = ref(null)
    const notes = ref([
        {
            id: 'id1',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, dicta quis accusantium neque aspernatur magni sit minus atque voluptatem assumenda possimus consequatur corrupti iste asperiores necessitatibus sunt aliquam libero in?'
        }, 
        {
            id: 'id2',
            content: 'shorter note'
        }
    ])

    const addNote = () => {
        if (newNote.value.trim() == '') {
            return
        }
        let currentDate = new Date().getTime(),
            id = currentDate.toString()

        let note = {
            id,
            content: newNote.value
        }

        notes.value.unshift(note)
        newNote.value = ''
        newNoteRef.value.focus()
    }

    /* 
        delete note
    */ 
</script>