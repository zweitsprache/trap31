import { ReactNode } from "react";
import { locales } from "@/i18n/config";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type Props = {
  children: ReactNode;
};

export default function LocaleLayout({ children }: Props) {
  return children;
}
