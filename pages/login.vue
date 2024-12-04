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
import { useRouter } from "vue-router";
import {
    getAuth,
    signInWithEmailAndPassword,
} from "firebase/auth";

const email = ref('')
const password = ref('')
const router = useRouter();

// Firebase の認証を取得
const auth = getAuth();

// ログイン処理
const login = async () => {
    try {
        // Firebase のログイン機能を使う
        const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);

        // ログイン成功時
        const user = userCredential.user;
        alert(`ログイン成功！ようこそ、${user.email}さん！🎉`);
        router.push("/");
    } catch (error) {
        // エラー処理
        alert(`ログインに失敗しました: ${error.message}`);
    }
};
</script>