'use client'
import Link from 'next/link'
import { getRouteTxt } from "@/router";

export default function Home() {
  return (
    <div>
      Home <Link href={getRouteTxt("blog")}>all posts</Link>
    </div>
  );
}
