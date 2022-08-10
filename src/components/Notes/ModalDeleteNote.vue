<template>
    <div class="modal is-active p-4">
        <div class="modal-background"></div>
        <div class="modal-card"
                ref="modalCardRef">
            <header class="modal-card-head">
                <p class="modal-card-title">Delete Note?</p>
                <button 
                @click="closeModal"
                class="delete" 
                aria-label="close"
                >
                </button>
            </header>
            <section class="modal-card-body">
            Are you sure you want to delte this note?
            </section>
            <footer class="modal-card-foot is-justify-content-items-flex-end">
                <button class="button"
                @click="closeModal"
                >Cancel</button>  
                <button class="button is-danger">Delete</button>                
            </footer>
        </div>
    </div>
</template>

<script setup>
/*  
    imports
*/  
    import { onMounted, ref, onUnmounted } from 'vue'
    import { onClickOutside } from '@vueuse/core'
    
/*  
    props
*/

    const props = defineProps({
        modelValue: {
            type: Boolean,
            default: false
        }
    })

/*  
    emits
*/

    const emit = defineEmits(['update:modelValue'])

/*  
    close modal
*/

    const closeModal = () => {
        emit('update:modelValue', false)
    }
/*
    click outside to close
*/
    const modalCardRef = ref(null)

    onClickOutside(modalCardRef, closeModal)

/*
    keyboard control 
*/

    const handleKeyBoard = e => {
        if (e.key === 'Escape')  closeModal()
    }

    onMounted(() => {
        document.addEventListener('keyup', handleKeyBoard)
    })

    onUnmounted(() => {
        document.removeEventListener('keyup', handleKeyBoard)
    })
</script>