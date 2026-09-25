module.exports = {
  config: {
    name: "autogreet",
    version: "1.0",
    author: "Aminul Sardar",
    countDown: 0,
    role: 0,
    shortDescription: "Auto react to greetings and announcements",
    category: "events"
  },

  onStart: async function () {},

  onChat: async function ({ api, event }) {
    try {
      const { messageID, body } = event;

      if (!body || !messageID) return;

      const text = body.toLowerCase();

      const keywords = [
        "good morning",
        "good afternoon",
        "good evening",
        "announcement"
      ];

      const matched = keywords.some(keyword =>
        text.includes(keyword)
      );

      if (!matched) return;

      api.setMessageReaction(
        "❤️",
        messageID,
        () => {},
        true
      );

    } catch (err) {
      console.error("[AUTOGREET ERROR]", err);
    }
  }
};
