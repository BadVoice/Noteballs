
<template>
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
      <tr>
        <th>Stat</th>
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
  /*
    store
  */
  const storeNotes = useStoreNotes()
</script>

<style>
  
</style>