module.exports = {
  config: {
    name: "autoseen",
    version: "2.0.0",
    author: "Aminul Sardar",
    role: 0,
    category: "system",
    guide: ""
  },

  onChat: async function({ api, event }) {
    if (!event || !event.threadID)
      return;

    try {
      if (typeof api.markAsReadAll === "function") {
        api.markAsReadAll(event.threadID);
      }

      if (typeof api.markAsRead === "function") {
        api.markAsRead(event.threadID);
      }
    }
    catch (err) {
      console.error("[AUTOSEEN]", err);
    }
  }
};
