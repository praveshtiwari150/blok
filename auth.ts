import NextAuth from "next-auth"
import Google from "next-auth/providers/google";
import { prisma } from "./lib/prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [Google],
    callbacks: {
        async signIn({ user }) {
            if (!user.email) {
                return false;
            }
            const existingUser = await prisma.user.findUnique({
                where: { email: user.email! }
            });

            if (!existingUser) {
                const res = await prisma.user.create({
                    data: {
                        name: user.name!,
                        email: user.email!,
                        image: user.image
                    }
                });
            }
            return true;
        }
    }
})