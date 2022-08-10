
<template>
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
      <tr>
        <th>Stats</th>
        <th>Value</th>
      </tr>
      </thead>
      <tbody>
        <tr>
          <td>Number of Notes</td>
          <td>{{ storeNotes.totalNotesCount }}</td>
        </tr>
        <tr>
          <td>Number of Character (of all notes)</td>
          <td> {{ storeNotes.totalCharactersCount }} </td>
        </tr>
      </tbody>
    </table>
    <input 
    v-model="loveNoteballs"
    v-autofocus
    class="input is-info"
    type="text" 
    placeholder="Do you like noteballs ?"
    >
  </div>
</template>

<script setup>
  /*
    imports
  */
  import { useStoreNotes } from '@/stores/storeNotes'
  import { vAutofocus } from "@/directives/vAutofocus";
  import { useWatchCharacters } from '@/use/useWatchCharacters'
  import { ref } from '@vue/reactivity';

  /*
    store
  */
  const storeNotes = useStoreNotes()

  /*
    love noteballs
  */

  const loveNoteballs = ref('')
  useWatchCharacters(loveNoteballs)


</script>

<style> 
  
</style>