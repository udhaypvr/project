import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="flex flex-col items-center justify-center space-y-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">welcome</h1>
        <p className="max-w-[600px] text-muted-foreground">wire harnessing system</p>
        <Link href="/select">
          <Button size="lg" className="mt-4">
            Start
          </Button>
        </Link>
      </div>
    </main>
  )
}

