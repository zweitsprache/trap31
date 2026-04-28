"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { locales, localeNames } from "@/i18n/config";
import styles from "./LocaleSwitcher.module.css";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();

  const handleChange = (newLocale: string) => {
    const path = window.location.pathname.split("/").slice(2).join("/") || "";
    router.push(`/${newLocale}${path ? "/" + path : ""}`);
  };

  return (
    <div className={styles.switcher}>
      {locales.map((loc) => (
        <button
          key={loc}
          onClick={() => handleChange(loc)}
          className={`${styles.button} ${loc === locale ? styles.active : ""}`}
          aria-label={`Switch to ${localeNames[loc as keyof typeof localeNames]}`}
        >
          {localeNames[loc as keyof typeof localeNames]}
        </button>
      ))}
    </div>
  );
}
