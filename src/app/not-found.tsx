import Link from 'next/link'
import { headers } from 'next/headers'
import { getRouteTxt } from "@/router";

export default async function NotFound() {
  const headersList = headers()
  const url = headersList.get('referer')
  return (
    <div>
      <h2>Not Found: {url}</h2>
      <p>Could not find requested resource</p>
      <p>
        View <Link href={getRouteTxt("home")}>all posts</Link>
      </p>
    </div>
  );
}