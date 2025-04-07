"use client"

import { useSearchParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function DestinationPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const action = searchParams.get("action") || "unknown"

  const getActionDescription = () => {
    switch (action) {
      case "rotate":
        return "You chose to rotate the 3D model."
      case "zoom":
        return "You chose to zoom in on the 3D model."
      case "color":
        return "You chose to change the color of the 3D model."
      case "reset":
        return "You chose to reset the view of the 3D model."
      default:
        return "Unknown action selected."
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="max-w-md space-y-6 text-center">
        <h1 className="text-3xl font-bold">Action: {action}</h1>
        <p className="text-xl">{getActionDescription()}</p>
        <p className="text-muted-foreground">
          This is the fourth page of our website, showing the result of your interaction with the 3D model.
        </p>

        <div className="flex flex-col space-y-4">
          <Button onClick={() => router.back()} className="flex items-center gap-2">
            <ArrowLeft size={16} />
            Back to 3D Model
          </Button>
          <Button onClick={() => router.push("/")} variant="outline">
            Start Over
          </Button>
        </div>
      </div>
    </main>
  )
}

