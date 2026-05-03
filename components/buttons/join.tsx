"use client";

import { Rocket } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import posthog from "posthog-js";

export default function JoinButton({
  text = "Dashboard",
  ...props
}: React.ComponentProps<typeof Button> & { text?: string }) {
  return (
    <Button {...props} asChild>
      <Link href="/dashboard" onClick={() => posthog.capture("dashboard_button_clicked")}>{text}</Link>
    </Button>
  );
}
