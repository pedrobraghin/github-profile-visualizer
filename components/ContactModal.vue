<script setup>

import { useChallengeV3 } from 'vue-recaptcha';
import { api } from '~/services/api';

const { execute } = useChallengeV3('form_submit');
const config = useRuntimeConfig();
const formState = ref({
    sending: false,
    error: false,
    success: false,
});
const visible = ref(false);
const name = ref('');
const email = ref('');
const phone = ref('');
const birthdate = ref('');

async function handleSubmit() {
    try {
        if (!name.value || !email.value || !phone.value || !birthdate.value) {
            alert('Please fill all the fields');
            return;
        }

        formState.value.sending = true;
        formState.value.error = false;

        const token = await executeRecaptcha();

        if (!token) {
            formState.value.sending = false;
            formState.value.error = true;
            formState.value.success = false;

            return;
        }

        const response = await api.post(config.public.apiUrl.concat('/validacao-recaptcha'), {
            token,
            name: name.value,
            email: email.value,
            phone: phone.value,
            birthdate: birthdate.value,
        });


        formState.value.sending = false;
        formState.value.error = false;
        formState.value.success = true;

        toggleModal();
    } catch (e) {
        formState.value.sending = false;
        formState.value.error = true;
        formState.value.success = false;
    }
}

async function executeRecaptcha() {
    try {
        const token = await execute();
        return token;
    } catch (error) {
        return null;
    }
};


function toggleModal() {
    visible.value = !visible.value;
}

</script>
<template>
    <div>
        <button @click="toggleModal"
            class="dark:text-primary-light bg-blue-400 px-6 py-4 rounded-md hover:opacity-80 transition-all duration-300 ease-in-out">
            Get in touch
        </button>

        <div v-if="visible" class="fixed inset-0 bg-black opacity-75 z-10"></div>

        <div v-if="visible" @keydown.esc="toggleModal" tabindex="0"
            class="fixed inset-0 z-20 flex items-center justify-center">
            <div
                class="bg-white dark:bg-primary-dark px-10 pt-16 pb-8 rounded-lg shadow max-w-md w-full space-y-4 relative">
                <button @click="toggleModal" class="absolute top-8 right-6 text-3xl dark:text-primary-light">
                    <Icon name="material-symbols:cancel" />
                </button>

                <h2 class="dark:text-primary-light">Fill out hte form and wi'll contact you as soon as possible!</h2>

                <form @submit.prevent="handleSubmit" class="space-y-6">
                    <div>
                        <label for="name" class="block text-sm mb-1 dark:text-primary-light">Name</label>
                        <input v-model="name" id="name" type="text" class="w-full p-2 border rounded"
                            placeholder="ex.: John Doe" required />
                    </div>

                    <div>
                        <label for="email" class="block text-sm mb-1 dark:text-primary-light">Email</label>
                        <input v-model="email" id="email" type="email" class="w-full p-2 border rounded"
                            placeholder="ex.: john@outlook.com" required />
                    </div>

                    <div>
                        <label for="phone" class="block text-sm mb-1 dark:text-primary-light">Phone</label>
                        <input v-model="phone" id="phone" type="tel" class="w-full p-2 border rounded"
                            placeholder="ex.: 5555551234" required />
                    </div>

                    <div>
                        <label for="birthdate" class="block text-sm mb-1 dark:text-primary-light">Birth date</label>
                        <input v-model="birthdate" id="birthdate" type="date"
                            class="w-full p-2 border rounded text-black" required />
                    </div>

                    <button type="submit" :disabled="formState.sending"
                        class="w-full bg-blue-500 text-primary-light p-2 rounded hover:bg-blue-600">
                        Submit
                    </button>
                </form>
                <div v-if="formState.error">
                    <span class="dark:text-primary-light">Error sending form, please try again!</span>
                </div>
            </div>
        </div>
    </div>
</template>
