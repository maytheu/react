"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import FormInput from "./FormInput";
import { Loader2 } from "lucide-react";
import { authFormSchema } from "@/lib/utils";
import { useRouter } from "next/navigation";

const AuthForm = ({ type }: { type: string }) => {
  const formSchema = authFormSchema(type);

  const [user, setUser] = useState<z.infer<typeof formSchema>>();
  const [loading, setLoading] = useState(false);

  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      address: "",
      bvn: "",
      dateOfBirth: "",
      firstName: "",
      lastName: "",
      postalCode: "",
      state: "",
    },
  });

  // 2. Define a submit handler.
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true);
    try {
      if (type === "signin") {
        // communicate with server file
      }
      if (type === "signup") {
        // setUser({});
        router.push('/')
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap8">
        <Link href="/" className="cursor-pointer items-center gap-1 flex">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="Logo"
            className="size-[24px] max-xl:size-14"
          />
          <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
            Bankify
          </h1>
        </Link>

        <div className="flex flex-col gap-1 md:gap-5">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            {user ? "Link Account" : type === "signin" ? "Sign In" : "Sign Up"}
            <p className="text-16 font-normal text-gray-600">
              {user
                ? "Link your acount to get started"
                : "Please enter your details"}
            </p>
          </h1>
        </div>
      </header>
      {user ? (
        <div className="flex flex-col gap-4">{/* link */}</div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {type === "signup" && (
              <>
                <div className="flex gap-4">
                  <FormInput
                    control={form.control}
                    placeholder="Enter your first name"
                    label="First Name"
                    name="firstName"
                  />
                  <FormInput
                    control={form.control}
                    placeholder="Enter your last name"
                    label="Last Name"
                    name="lastName"
                  />
                </div>
                <FormInput
                  control={form.control}
                  placeholder="Enter your specific address"
                  label="Address"
                  name="address"
                />
                <FormInput
                  control={form.control}
                  placeholder="Enter your city"
                  label="City"
                  name="city"
                />
                <div className="flex gap-4">
                  <FormInput
                    control={form.control}
                    placeholder="Example: IB"
                    label="State"
                    name="state"
                  />
                  <FormInput
                    control={form.control}
                    placeholder="Example: 20021"
                    label="Postal Code"
                    name="postalCode"
                  />
                </div>

                <div className="flex gap-4">
                  <FormInput
                    control={form.control}
                    placeholder="YYY-MM-DD"
                    label="Date of Birth"
                    name="dateOfBirth"
                  />

                  <FormInput
                    control={form.control}
                    placeholder="11 digit bvn"
                    label="BVN"
                    name="bvn"
                  />
                </div>
              </>
            )}
            <FormInput
              control={form.control}
              placeholder="Enter your email"
              label="Email"
              name="email"
            />
            <FormInput
              control={form.control}
              placeholder="Enter your password"
              label="Password"
              name="password"
            />
            <div className="flex flex-col gap-4">
              <Button type="submit" className="form-btn" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 size={20} className="animate-spin" /> &nbsp;
                    Loading...
                  </>
                ) : type === "signin" ? (
                  "Sign In"
                ) : (
                  "Sign Up"
                )}
              </Button>
            </div>
          </form>
        </Form>
      )}

      <footer className="flex justify-center gap-1">
        <p className="text-14 font-normal text-gray-600">
          {type === "signin"
            ? "Don't have an account?"
            : "Already have an account?"}
        </p>
        <Link
          href={type === "signin" ? "/sign-up" : "/sign-in"}
          className="form-link"
        >
          {type === "signin" ? "Sign Up" : "Sign In"}
        </Link>
      </footer>
    </section>
  );
};

export default AuthForm;
