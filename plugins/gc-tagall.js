

const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language
  const _translate = JSON.parse(fs.readFileSync(`./language/${idioma}.json`))
  const tradutor = _translate.plugins.gc_tagall

  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `*𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝘼𝙎:* ${pesan}`;
  let teks = `*Lʟᴀᴍᴀɴᴅᴏ A Lᴏs Sᴘᴀʀᴛᴀɴ 🥷💚*\n\n ${oi}\n\n➥ _*@kim_belen.1:*_\n`;
  for (const mem of participants) {
    teks += `🥷🏼💚 ➩ @${mem.id.split('@')[0]}\n`;
  }
  teks += `*└HL Sᴘᴀɴᴛᴀɴ Bᴏᴛ​​​​​*`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación|putos)$/i;
handler.admin = true;
handler.group = true;
export default handler;
