"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Check, Mail } from "lucide-react";
import { useState } from "react";

const CopyText = () => {
  const [isCopy, setIsCopy] = useState(false);

  const copyToClip = () => {
    const text = "picotmathis42@gmail.com";
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setIsCopy(true);
        setTimeout(() => {
          setIsCopy(false);
        }, 1500);
      })
      .catch((err) => {
        console.error("Erreur lors de la copie : ", err);
      });
  };

  return (
    <div className="relative">
      {isCopy && (
        <Card className="w-80 flex items-center justify-center pt-6 absolute bottom-24 -translate-x-36">
          <CardContent className="flex items-center justify-center translate-x-8">
            Email Copié dans le presse-papiers
          </CardContent>
          <CardContent>
            <Check className="text-green-500" />
          </CardContent>
        </Card>
      )}
      {/* Élément cliquable personnalisé */}
      <span
        onClick={copyToClip}
        className="cursor-pointer p-2    flex items-center"
        role="button"
        tabIndex={0}
      >
        <Mail className="mr-2" />
      </span>
    </div>
  );
};

export default CopyText;
