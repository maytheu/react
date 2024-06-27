"use server";

import { SignUpParams } from "@/types";
import { createAdminClient, createSessionClient } from "../appwrite";
import { ID } from "node-appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";

export const signIn = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const { account } = await createAdminClient();

    const user = await account.createEmailPasswordSession(email, password);

    return parseStringify(user);
  } catch (error) {
    console.error(error);
  }
};

export const signUp = async (data: SignUpParams) => {
  try {
    const { email, password, firstName, lastName } = data;
    const { account } = await createAdminClient();

    const newUserAcc = await account.create(
      ID.unique(),
      email,
      password,
      `${firstName} ${lastName}`
    );
    const session = await account.createEmailPasswordSession(email, password);

    cookies().set("bankify-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    return parseStringify(newUserAcc);
  } catch (error) {
    console.error(error);
  }
};

export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    const user = await account.get();
    return parseStringify(user);
  } catch (error) {
    return null;
  }
}

export const logoutUser = async () => {
  try {
    const { account } = await createSessionClient();

    cookies().delete("bankify-session");
    await account.deleteSession("current");
  } catch (error) {
    return null;
  }
};
