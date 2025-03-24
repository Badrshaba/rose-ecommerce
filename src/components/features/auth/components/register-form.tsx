"use client";

import { Button } from "@/components/ui/button";

export default function RegisterForm({ setAuthState }: AuthFormProps) {
  return (
    <>
      <Button onClick={() => setAuthState("login")}>RegisterForm</Button>
    </>
  );
}
