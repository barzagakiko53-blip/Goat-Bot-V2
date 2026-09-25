onChat: async function ({ api, event }) {
  if (!event?.body || !event?.messageID) return;

  const text = event.body.toLowerCase();

  const shouldReact =
    text.includes("good morning") ||
    text.includes("good afternoon") ||
    text.includes("good evening") ||
    text.includes("announcement");

  if (!shouldReact) return;

  try {
    if (typeof api.setMessageReaction === "function") {
      api.setMessageReaction(
        "❤️",
        event.messageID,
        () => {},
        true
      );
    }
  } catch (err) {
    console.error("[AUTO REACT] Error:", err);
  }
}
