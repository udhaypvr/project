"use client"

import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ModelViewer from "@/components/model-viewer"

export default function ModelViewerPage() {
  const searchParams = useSearchParams()
  const message = searchParams.get("message") || "No message selected"

  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex flex-col items-center justify-center p-4 text-center">
        <h1 className="text-3xl font-bold">Model of the MAHINDRA THAR</h1>
        
      </div>

      <div className="flex-1 w-full">
        <ModelViewer />
      </div>

      <div className="flex flex-wrap justify-center gap-4 p-6 bg-muted/30">
        <Link href="/exterior">
          <Button variant="outline">wiring system exterior</Button>
        </Link>
        <Link href="/interior">
          <Button variant="outline">wiring system interior</Button>
        </Link>
        <Link href="/destination?action=color">
          <Button variant="outline">Change Color</Button>
        </Link>
        <Link href="/destination?action=reset">
          <Button variant="outline">Reset View</Button>
        </Link>
      </div>
    </main>
  )
}

