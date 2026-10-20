module.exports = {
  config: {
    name: "autogreet",
    version: "1.1",
    author: "Aminul Sardar",
    countDown: 0,
    role: 0,
    shortDescription: "Auto react to greetings, announcements and laughter",
    category: "events"
  },

  onStart: async function () {},

  onChat: async function ({ api, event }) {
    try {
      const { messageID, body } = event;

      if (!body || !messageID) return;

      const text = body.toLowerCase();

      // ❤️ HEART REACTION
      const heartKeywords = [
        "good morning",
        "gud morning",
        "gd morning",

        "good afternoon",
        "gud afternoon",
        "gd afternoon",

        "good evening",
        "gud evening",
        "gd evening",

        "good day",
        "gud day",
        "gd day",

        "announcement"
      ];

      // 😆 LAUGH REACTION
      const laughKeywords = [
        "haha",
        "hahaha",
        "hahha",
        "hahah",
        "hahahaha",
        "hahahahaha"
      ];

      // ❤️ Check heart keywords first
      if (heartKeywords.some(keyword => text.includes(keyword))) {
        api.setMessageReaction(
          "🤍",
          messageID,
          () => {},
          true
        );
        return;
      }

      // 😆 Check laugh keywords
      if (laughKeywords.some(keyword => text.includes(keyword))) {
        api.setMessageReaction(
          "😅",
          messageID,
          () => {},
          true
        );
      }

    } catch (err) {
      console.error("[AUTOGREET ERROR]", err);
    }
  }
};
