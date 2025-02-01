'use server';

import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";

export const signIn = async () => {
    try {
        // Mutation / Database / Make fetch
    } catch (error) {
        console.error('Error', error);
    }
}

export const signUp = async (userData: SignUpParams) => {
    const { email, password, firstName, lastName } = userData; // Destructure
    try {
        const { account } = await createAdminClient();

        const newUserAccount = await account.create(
            ID.unique(),
            userData.email, 
            userData.password, 
            `${firstName} ${lastName}`
        );

        const session = await account.
        createEmailPasswordSession(email, password);

        (await cookies()).set("my-custom-session", session.secret, {
            path: "/",
            httpOnly: true,
            sameSite: "strict",
            secure: true,
        });

        return parseStringify(newUserAccount );
    } catch (error) {
        console.log('Error', error);
    }
}

export async function getLoggedInUser() {
    try {
        const { account } = await createSessionClient();
        return await account.get();
    } catch (error) {
        return null;
    }
}