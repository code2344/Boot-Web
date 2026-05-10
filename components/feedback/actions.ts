"use server";

import { getPostHogClient } from "@/lib/posthog-server";
import { randomUUID } from "node:crypto";
import { pageFeedback, type ActionResponse, type PageFeedback } from "./schema";

export async function submitGuideFeedback(
  feedback: PageFeedback,
): Promise<ActionResponse> {
  const result = pageFeedback.safeParse(feedback);
  if (!result.success) {
    throw new Error("Invalid guide feedback");
  }

  const posthog = getPostHogClient();

  posthog.capture({
    distinctId: `guide-feedback:${randomUUID()}`,
    event: "guide_feedback_submitted",
    properties: {
      ...result.data,
      path: result.data.url,
    },
  });

  await posthog.flush();

  return {};
}
