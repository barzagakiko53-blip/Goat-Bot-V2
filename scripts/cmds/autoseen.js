module.exports = {
	config: {
		name: "autoseen",
		version: "2.0.0",
		author: "Aminul Sardar",
		role: {
			onStart: 2,
			onChat: 0
		},
		category: "system",
		guide: ""
	},

	// Required so GoatBot registers the command
	onStart: async function({ api, event }) {
		return api.sendMessage(
			"✅ Autoseen is permanently enabled.",
			event.threadID,
			event.messageID
		);
	},

	// Runs automatically for incoming messages
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
			console.error("[AUTOSEEN] Error:", err);
		}
	}
};
