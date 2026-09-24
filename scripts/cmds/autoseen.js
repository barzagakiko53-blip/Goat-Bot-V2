module.exports = {
  config: {
    name: "autoseen",
    version: "1.0",
    author: "Aminul Sardar",
    role: 2,
    category: "system",
    guide: "{pn} on/off"
  },
  onStart: async function({ api, event, args, threadsData }) {
    const status = args[0]?.toLowerCase();
    if (!status ||!["on", "off"].includes(status)) {
      const current = await threadsData.get(event.threadID, "settings.autoSeen");
      return api.sendMessage(`Autoseen is currently: ${current? "ON ✅" : "OFF ❌"}\nUse: autoseen on/off`, event.threadID);
    }
    const isOn = status === "on";
    await threadsData.set(event.threadID, isOn, "settings.autoSeen");
    if (args[1] === "all") {
       global.GoatBot.config.autoSeen = isOn;
       return api.sendMessage(`Autoseen ${isOn? "ON" : "OFF"} for ALL groups ✅`, event.threadID);
    }
    return api.sendMessage(`Autoseen ${isOn? "ON ✅" : "OFF ❌"} for this box`, event.threadID);
  },
  onChat: async function({ api, event, threadsData }) {
    const isEnabled = await threadsData.get(event.threadID, "settings.autoSeen");
    if (isEnabled) {
      api.markAsReadAll(event.threadID);
      api.markAsRead(event.threadID);
    }
  }
};
