"use server"

import { signIn, signOut } from "@/auth"

export const signInWithGoogle = async () => {
    console.log("Sign in clicked");
    await signIn("google");
}

export const logout = async () => {
    await signOut();
}