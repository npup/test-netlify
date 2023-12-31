import { FormEvent, useEffect, useRef } from "react";
import {
    supabase,
    AUTH_REDIRECT_URL,
    AUTH_COOKIE_NAME,
    AUTH_SUPABASE_URL,
    AUTH_SUPABASE_KEY,
} from "../auth";

export function LoginForm() {
    console.log("rendering loginform", {
        AUTH_REDIRECT_URL,
        AUTH_COOKIE_NAME,
        AUTH_SUPABASE_URL,
        AUTH_SUPABASE_KEY,
    });
    useEffect(() => {
        const hashParams = window.location.hash
            .substring(1)
            .split("&")
            .map((kv) => kv.split("="));
        const params = new Map(hashParams.map(([k, v]) => [k, v]));

        console.log(params.keys());
        const access_token = params.get("access_token");
        const expires_in = params.get("expires_in");
        const refresh_token = params.get("refresh_token");
        const token_type = params.get("token_type");
        const type = params.get("type");
        if (!(access_token && expires_in && refresh_token)) {
            return;
        }

        async function apiLogin({
            access_token,
            expires_in,
            refresh_token,
        }: {
            access_token: string;
            expires_in: string;
            refresh_token: string;
        }) {
            const response = await fetch("/api/login.json", {
                method: "POST",
                headers: new Headers({ "Content-Type": "application/json" }),
                credentials: "same-origin",
                body: JSON.stringify({
                    access_token,
                    expires_in,
                    refresh_token,
                }),
            });
            if (response.ok) {
                location.replace("/");
            }
        }
        apiLogin({ access_token, expires_in, refresh_token });
    }, []);
    const emailRef = useRef<HTMLInputElement>(null);
    async function handleSubmit(e: FormEvent) {
        try {
            e.preventDefault();
            const { current: emailField } = emailRef;
            if (!emailField) {
                return;
            }
            const { value: email } = emailField;
            const { error } = await supabase.auth.signInWithOtp({
                email,
                options: {
                    emailRedirectTo: AUTH_REDIRECT_URL,
                },
            });
            if (error) {
                console.log("Err, ", error);
                alert(`Email not sent (${error.message})`);
            } else {
                alert("Check your email for login link!");
            }
        } catch (err) {
            console.error("WTF", err);
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                <input
                    type="email"
                    ref={emailRef}
                    defaultValue="petter.envall@gmail.com"
                />
                <button type="submit">Submit</button>
            </label>
        </form>
    );
}
