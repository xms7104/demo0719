import React from "react"
import Link from "next/link"

function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex w-full items-center justify-around">
        <Link href="/Next">
          <p>Next</p>
        </Link>
        <Link href="/Next">
          <p>About Me</p>
        </Link>
      </div>
    </main>
  )
}

export default Home
