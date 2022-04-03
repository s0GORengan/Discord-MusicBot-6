module.exports = {
  token: process.env.token || "ODczNTkzNDUyNDk4MTI4OTY3.YQ6rTQ.NMWtpZLAUZz0fmUYT8k52bW16PE", //Bot's Token
  clientId: process.env.clientId || "873593452498128967", //ID of the bot
  clientSecret: process.env.clientSecret || "qyLZju0W0qfJaNcsOjgouS6OHrsoUHTt", //Client Secret of the bot
  port: 4200, //Port of the API and Dashboard
  scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  serverDeafen: true, //If you want bot to stay deafened
  defaultVolume: 100, //Sets the default volume of the bot, You can change this number anywhere from 1 to 100
  supportServer: "https://discord.gg/sbySMS7m3v", //Support Server Link
  Issues: "https://github.com/SudhanPlayz/Discord-MusicBot/issues", //Bug Report Link
  permissions: 277083450689, //Bot Inviting Permissions
  disconnectTime: 30000, //How long should the bot wait before disconnecting from the voice channel. in miliseconds. set to 1 for instant disconnect.
  alwaysplay: true, // when set to true music will always play no matter if theres no one in voice channel.
  debug: false, //Debug mode
  // Lavalink server; optional public lavalink -> https://lavalink-list.darrennathanael.com/
  // The default one should work fine.
  nodes: [
    {
      identifier: "Losing time, Montreal.", //- Used for indentifier in stats commands.
      host: "losingtime.dpaste.org",
      port: 2124,
      password: "SleepingOnTrains",
      retryAmount: 15, //- The amount of times to retry connecting to the node if connection got dropped.
      retryDelay: 6000, //- Delay between reconnect attempts if connection is lost.
      secure: false, //- Can be either true or false. Only use true if ssl is enabled!
    },
  ],
  embedColor: "#2f3136", //Color of the embeds, hex supported
  presence: {
    //PresenceData object | https://discord.js.org/#/docs/main/stable/typedef/PresenceData
    status: "online", // You can have online, idle, and dnd(invisible too but it make people think the bot is offline)
    activities: [
      {
        name: "Music RWG", //Status Text
        type: "LISTENING", // PLAYING, WATCHING, LISTENING, STREAMING
      },
    ],
  },
  iconURL: "https://cdn.darrennathanael.com/icons/spinning_disk.gif", //This icon will be in every embed's author field
};