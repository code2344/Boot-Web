"use server";

import { getPostHogClient } from "@/lib/posthog-server";
import { pageFeedback, type ActionResponse, type PageFeedback } from "./schema";

export async function submitGuideFeedback(
  feedback: PageFeedback,
): Promise<ActionResponse> {
  const result = pageFeedback.safeParse(feedback);
  if (!result.success) {
    throw new Error("Invalid guide feedback");
  }

  const posthog = getPostHogClient();
  const { distinctId, ...properties } = result.data;

  posthog.capture({
    distinctId,
    event: "guide_feedback_submitted",
    properties: {
      ...properties,
      path: properties.url,
    },
  });

  await posthog.flush();

  return {};
}
