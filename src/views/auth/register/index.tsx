import React, { useState } from "react";
import styles from "./Register.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

export default function RegisterView() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { push } = useRouter();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    const data = {
      email: e.target.email.value,
      fullname: e.target.fullname.value,
      password: e.target.password.value,
    };
    try {
      const result = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (result.status === 200) {
        e.target.reset();
        setIsLoading(false);
        push("/auth/login");
      } else {
        setIsLoading(false);
        setError(result.status === 400 ? "Email already exists" : "");
        console.log(error);
      }
    } catch (error) {
      setIsLoading(false);
      setError("Something went wrong");
    }
  };

  return (
    <div className={styles.register}>
      <div className={styles.register__form}>
        <div className="mb-5">
          <h1 className={styles.register__form__title}>Register</h1>
          {error && <p className="text-sm text-red-500 text-center">{error}</p>}
        </div>
        <form onSubmit={handleSubmit}>
          <div className={styles.register__form__item}>
            <label
              htmlFor="email"
              className={styles.register__form__item__label}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email"
              className={styles.register__form__item__input}
            />
          </div>
          <div className={styles.register__form__item}>
            <label
              htmlFor="fullname"
              className={styles.register__form__item__label}
            >
              Fullname
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              placeholder="fullname"
              className={styles.register__form__item__input}
            />
          </div>
          <div className={styles.register__form__item}>
            <label
              htmlFor="password"
              className={styles.register__form__item__label}
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
              className={styles.register__form__item__input}
            />
          </div>
          <button
            className={`${styles.register__form__button} disabled:opacity-50 disabled:cursor-not-allowed`}
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Registering..." : "Register"}
          </button>
          <p className="text-sm mt-2 text-center">
            Already have an account?{" "}
            <Link
              href="/auth/login"
              className="text-blue-500 hover:text-blue-700 cursor-pointer"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
