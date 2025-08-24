"use client";

export default function GlobalError({ error }: { error: Error }) {
  return <h1>500 — Something went wrong</h1>;
}
