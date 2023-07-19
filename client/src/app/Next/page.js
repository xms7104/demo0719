import Link from "next/link"
import { useEffect } from "react";
import api from "../utils/api";

function Next() {

  useEffect(() => {
    async function getProduct() {
      const data = await api.product();
      console.log(data)
    }
    getProduct();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/">
        <p>Home</p>
      </Link>
    </main>
  )
}

export default Next