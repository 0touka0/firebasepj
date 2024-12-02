import { defineNuxtPlugin } from "#app";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { useRuntimeConfig } from "#app";

export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig();
    // Firebase設定を取得
    const firebaseConfig = {
        apiKey: config.public.firebaseApiKey,
        authDomain: config.public.firebaseAuthDomain,
        projectId: config.public.firebaseProjectId,
        storageBucket: config.public.firebaseStorageBucket,
        messagingSenderId: config.public.firebaseMessagingSenderId,
        appId: config.public.firebaseAppId,
        measurementId: config.public.firebaseMeasurementId,
    };

    try {
        // Firebaseアプリの初期化
        const app = initializeApp(firebaseConfig);

        // Firebase Authenticationの取得
        const auth = getAuth(app);

        console.log("Firebaseが正常に初期化されました！");
    } catch (error) {
        console.error("Firebaseの初期化中にエラーが発生しました: ", error);
    }
});
