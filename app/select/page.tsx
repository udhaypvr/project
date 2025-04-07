"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SelectPage() {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleContinue = () => {
    if (selectedOption) {
      router.push(
        `/model-viewer?message=${encodeURIComponent(selectedOption)}`
      );
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Select vehicle</h1>
          <p className="text-muted-foreground">
            Choose from the dropdown below.
          </p>
        </div>

        <div className="space-y-4">
          <Select onValueChange={setSelectedOption} value={selectedOption}>
            <SelectTrigger>
              <SelectValue placeholder="Select a vehicle" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="car">Mahindra THAR</SelectItem>
            </SelectContent>
          </Select>

          <Button
            onClick={handleContinue}
            disabled={!selectedOption}
            className="w-full"
          >
            Continue
          </Button>
        </div>
      </div>
    </main>
  );
}
