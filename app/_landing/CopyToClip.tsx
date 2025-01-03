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
        setIsCopy(true); // Afficher la carte
        setTimeout(() => {
          setIsCopy(false); // Masquer la carte après 1 seconde
        }, 1500); // 1000 ms = 1 seconde
      })
      .catch((err) => {
        console.error("Erreur lors de la copie : ", err);
      });
  };

  return (
    <div>
      {isCopy ? (
        <Card className="w-80 flex items-center justify-center pt-6 absolute bottom-24 -translate-x-36">
          <CardContent className="flex items-center justify-center">
            Email Copied to clipboard{" "}
            <span className="ml-2">
              <Check className="text-green-500" />
            </span>
          </CardContent>
        </Card>
      ) : (
        ""
      )}
      <button onClick={copyToClip}>
        <Mail />
      </button>
    </div>
  );
};

export default CopyText;
