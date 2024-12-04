import { defineNuxtPlugin } from "#app";
import { initializeApp, getApps } from "firebase/app";
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

    let app; // Firebase アプリを保持する変数
    try {
        // Firebase アプリが初期化されていなければ初期化
        if (!getApps().length) {
            app = initializeApp(firebaseConfig);
            console.log("Firebaseが正常に初期化されました！");
        } else {
            app = getApps()[0]; // 既存の初期化済みアプリを取得
            console.log("既存のFirebaseアプリを使用します！");
        }

        // Firebase Authentication の取得
        const auth = getAuth(app);

        return {
            provide: {
                firebaseAuth: auth,
            },
        };
    } catch (error) {
        console.error("Firebaseの初期化中にエラーが発生しました: ", error);
    }
});
