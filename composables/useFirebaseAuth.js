import { ref } from "vue";
import {
    getAuth,
    createUserWithEmailAndPassword,
    sendEmailVerification,
} from "firebase/auth";

export const useFirebaseAuth = () => {
    // メールアドレスとパスワードをVueの状態として定義
    const email = ref("");
    const password = ref("");

    // 登録処理
    const register = async () => {
        const auth = getAuth();
        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email.value,
                password.value
            );
            // 確認メール送信
			await sendEmailVerification(userCredential.user);
            return { success: true };
        } catch (error) {
			let message = ""

            switch (error.code) {
                case "auth/invalid-email":
                    message = "メールアドレスの形式が違います。";
                    break;
                case "auth/email-already-in-use":
                    message = "このメールアドレスはすでに使われています。";
                    break;
                case "auth/weak-password":
                    message = "パスワードは6文字以上で入力してください。";
                    break;
                default:
                    message = "エラーが起きました。しばらくしてから再度お試しください。";
            }
            return { success: false, message }; // エラーメッセージを返す
        }
    };

    return {
        email,
        password,
        register,
    };
};
