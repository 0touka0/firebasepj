<template>
    <div class="container">
        <h1>ホーム</h1>
		<p>{{ message }}</p>
		<div>
			<NuxtLink to="/register">新規登録</NuxtLink>
		</div>
		<div>
			<NuxtLink to="/login">ログイン</NuxtLink>
		</div>
		<div>
			<NuxtLink to="/logout">ログアウト</NuxtLink>
		</div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getAuth, onAuthStateChanged } from "firebase/auth";
const message = ref('')

// Firebase認証インスタンスを取得
const auth = getAuth();

// ログイン状態を確認
onMounted(() => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // ログインしている場合
            message.value = `こんにちは、${user.email} さん！✨`;
        } else {
            // ログインしていない場合
            message.value = "ログインしていません。";
        }
    });
});
</script>