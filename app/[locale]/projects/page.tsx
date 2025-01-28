"use client";

import { useI18n } from "@/locales/client";
import { Frown } from "lucide-react";

export default function projects() {
  const t = useI18n();
  return (
    <div className="flex justify-center items-center min-h-screen">
      <h2 className="font-semibold text-2xl flex items-center">
        {t("Projects")} <Frown className="ml-2" />
      </h2>
    </div>
  );
}
