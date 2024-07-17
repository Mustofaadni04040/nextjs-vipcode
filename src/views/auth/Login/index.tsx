/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import styles from "./Login.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import Image from "next/image";

export default function LoginView() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { push, query } = useRouter();

  const callbackUrl: any = query.callbackUrl || "/";

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: e.target.email.value,
        password: e.target.password.value,
        callbackUrl,
      });

      if (!res?.error) {
        //
        setIsLoading(false);
        push(callbackUrl);
      } else {
        setIsLoading(false);
        setError("Email or password is incorrect");
      }
    } catch (error: any) {
      setIsLoading(false);
      setError("Email or password is incorrect");
    }
  };

  return (
    <div className={styles.login}>
      <div className={styles.login__form}>
        <div className="mb-5">
          <h1 className={styles.login__form__title}>Login</h1>
          {error && <p className="text-sm text-red-500 text-center">{error}</p>}
        </div>
        <form onSubmit={handleSubmit}>
          <div className={styles.login__form__item}>
            <label htmlFor="email" className={styles.login__form__item__label}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email"
              className={styles.login__form__item__input}
            />
          </div>
          <div className={styles.login__form__item}>
            <label
              htmlFor="password"
              className={styles.login__form__item__label}
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
              className={styles.login__form__item__input}
            />
          </div>
          <button
            className={`${styles.login__form__button} disabled:opacity-50 disabled:cursor-not-allowed`}
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "logining..." : "login"}
          </button>
        </form>
        <button
          className="w-full mt-3 p-2 flex items-center justify-center bg-white border border-slate-500 rounded"
          onClick={() =>
            signIn("google", {
              callbackUrl,
              redirect: false,
            })
          }
        >
          <Image
            src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
            alt="google-icon"
            className="w-7 h-7"
            width={20}
            height={20}
          />
          Sign in with Google
        </button>
        <p className="text-sm mt-2 text-center">
          Don&apos;t have an account?{" "}
          <Link
            href="/auth/register"
            className="text-blue-500 hover:text-blue-700 cursor-pointer"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
