<template>
    <div class="card  p-4 mb-5"
            :class="`has-background-${backgroundColor}`">

            <label class="label has-text-white"
            v-if="label"
            >{{ label }}
            </label>

            <div class="field">
                <div class="control">
                    <textarea 
                    v-model="modelValue"
                    @input="$emit('update:modelValue', modelValue)"
                    class="textarea"
                    :placeholder="placeholder" 
                    ref="textareaRef"
                    />
                </div>
            </div>
            <div class="field is-grouped is-grouped-right">
                    <div class="control">
                        <slot name="buttons"/>
                    </div>
                </div>
            </div>
</template>

<script setup>
/* 
    imports
*/
import { ref } from "@vue/reactivity"
/* 
    props
*/
    const props = defineProps({
        modelValue: {
            type: String,
            required: true
        },
        backgroundColor: {
            type: String,
            default: 'info-light'
        },
        placeholder: {
            type: String,
            default: 'Add new note'
        },
        label: {
            type: String
        }
    })
/* 
    emits
*/
const emit = defineEmits(['update:modelValue'])
/* 
    focus textarea
*/
    const textareaRef = ref(null)
    const focusTextarea = () => {
        textareaRef.value.focus()
    }
    defineExpose({
        focusTextarea
    })
</script>