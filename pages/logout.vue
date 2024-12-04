<template>
    <div class="logout">
        <button @click="logout">ログアウト</button>
        <br />
        <NuxtLink to="/">戻る</NuxtLink>
    </div>
</template>

<script setup>
// logout処理
import { getAuth, signOut } from "firebase/auth"; // Firebase認証関連をインポート
import { useRouter } from "#app"; // Nuxtのルーターを利用

const router = useRouter(); // ルーターインスタンスを取得

// ログアウト処理
const logout = async () => {
    try {
        const auth = getAuth(); // Firebase認証インスタンスを取得
        await signOut(auth); // Firebaseのログアウト処理
        alert("ログアウトしました！");
        router.push("/"); // ホーム画面にリダイレクト
    } catch (error) {
        alert(`ログアウトに失敗しました: ${error.message}`);
        console.error(error);
    }
};
</script>
