<template>
    <div class="login">
        <label> メールアドレス： <input v-model="email" type="email" required /> </label>
        <br />
        <label>
            パスワード： <input v-model="password" type="password" required />
        </label>
        <br />
        <button @click="login">ログイン</button>
        <br />
        <NuxtLink to="/">戻る</NuxtLink>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('')
const password = ref('')
</script>