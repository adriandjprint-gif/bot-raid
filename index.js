const { Client } = require('discord.js-selfbot-v13');
const client = new Client({ checkUpdate: false });

// --- CÓDIGO LIMPIO (EL TOKEN ESTÁ SEGURO EN RAILWAY) ---
const MI_TOKEN = process.env.TOKEN; 
const OWNER_ID = process.env.OWNER_ID;
const INVITE_LINK_BASE = "https://discord.gg/83qsNSz6CN";

const GIF_HAKURI = "https://cdn.discordapp.com/attachments/1492707948747817010/1493019735338516671/23754-hakuri.gif";
const GIF_ANIME = "https://cdn.discordapp.com/attachments/1492707382239826066/1493236722958471168/85738-anime.gif";

const EXCLUSIVE_TEXT = `
> 🌌 **VOID SYNDICATE SYSTEM** 🌌
\`\`\`ansi
[1;35m  ◢◤ SYNDICATE OVERRIDE ◢◤  [0m
[2;37m-----------------------------[0m
[1;31m  [!] ESTADO:[0m [1;32mDOMINANDO[0m 🚀
[1;31m  [!] ACCESO:[0m [1;35mTOTAL[0m 🔓
[2;37m-----------------------------[0m
\`\`\`
👑 **EL VACÍO HA LLEGADO**
🔗 ${INVITE_LINK_BASE}
🔥 **¡ÚNETE O DESAPARECE!** 🔥`;

client.on('ready', () => {
    console.log(`[+] SISTEMA VOID ONLINE EN: ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
    if (message.author.id !== OWNER_ID) return;

    const args = message.content.split(' ');
    const command = args[0].toLowerCase();

    if (command === '/spam') {
        await message.delete().catch(() => {});
        await message.channel.send(EXCLUSIVE_TEXT);
        await message.channel.send(`⚠️ **DETECTED BY VOID** ⚠️\n${INVITE_LINK_BASE}`);
        await message.channel.send(GIF_ANIME);
    }

    if (command === '/spam_custom') {
        await message.delete().catch(() => {});
        const loQueYoQuiera = args.slice(1).join(' ');
        if (!loQueYoQuiera) return;

        await message.channel.send(`⚡ **BROADCAST:** ${loQueYoQuiera} ⚡`); 
        await message.channel.send(GIF_HAKURI);
        await message.channel.send(GIF_ANIME);
        await message.channel.send(`> 💀 **VOID_SYNDICATE_EXECUTOR**`);
    }
});

client.login(MI_TOKEN);
