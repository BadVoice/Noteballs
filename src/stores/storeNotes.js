import { defineStore } from 'pinia'

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return {
      notes: [
        {
          id: 'id1',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, dicta quis accusantium neque aspernatur magni sit minus atque voluptatem assumenda possimus consequatur corrupti iste asperiores necessitatibus sunt aliquam libero in?'
      }, 
      {
          id: 'id2',
          content: 'shorter note'
      }
      ]
    }
  },
  actions: {
    addNote(newNoteContent) {
      if (newNoteContent.trim() == '') {
            return
        }
        let currentDate = new Date().getTime(),
            id = currentDate.toString()
        let note = {
            id,
            content: newNoteContent
        }
        this.notes.unshift(note)
    },
    deleteNote(idToDelete){
        this.notes = this.notes.filter(note =>  note.id !== idToDelete )
    },
    updateNote(id, content) {
      let index = this.notes.findIndex(note => note.id === id )
      this.notes[index].content = content
    }
  },
  getters: {
    getNoteContent: (state) => {
      return (id) => {
        return state.notes.filter(note =>  note.id === id )[0].content
      }
    },
    totalNotesCount: (state) => {
      return state.notes.length
    },
    totalCharactersCount: (state) => {
      let count = 0
      state.notes.forEach(note => {
        count += note.content.length
      })
      return count
    }
  }
})
