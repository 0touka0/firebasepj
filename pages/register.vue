<template>
	<div class="register">
		<label>メールアドレス： <input v-model="email" type="email" required /></label>
		<br />
		<label>パスワード： <input v-model="password" type="password" required /></label>
		<br />
		<button @click="handleRegister">新規登録</button>
		<br />
		<NuxtLink to="/">戻る</NuxtLink>
	</div>
</template>

<script setup>
import { useFirebaseAuth } from "~/composables/useFirebaseAuth";
import { useRouter } from "vue-router";

const { email, password, register } = useFirebaseAuth();
const router = useRouter();

const handleRegister = async () => {
	if (!email.value || !password.value) {
		alert("メールアドレスまたはパスワードが入力されていません。");
		return;
	}

	const result = await register();

	if (result.success) {
		alert("登録成功！確認メールを確認してください！");
		router.push("/confirm");
	} else {
		alert(result.message); // エラー時のメッセージを表示
	}
}
</script>
