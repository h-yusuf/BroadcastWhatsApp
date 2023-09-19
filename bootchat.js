const whatsapp = require("velixs-md");

whatsapp.onConnected(async (session) => {
  // dan di print ke terminal console
  console.log("session connected : " + session);
});

whatsapp.onMessageReceived(async (msg) => {
  if (msg.key.fromMe || msg.key.remoteJid.includes("status")) return;
  await whatsapp.readMessage({
    sessionId: msg.sessionId,
    key: msg.key,
  });
  await whatsapp.sendTyping({
    sessionId: msg.sessionId,
    to: msg.key.remoteJid,
    duration: 1000,
  });

  // Mengecek jika ada pesan masuk dengan format text dan berisi "ping"
  if (msg.message?.extendedTextMessage?.text == "ping"||msg.message?.extendedTextMessage?.text == 1) {
    // Ini akan mengirim pesan "pong" sebagai balasan
    await whatsapp.sendTextMessage({
      sessionId: msg.sessionId,
      to: msg.key.remoteJid,
      text: "pong",
      answering: msg,
      isGroup: whatsapp.isGroup(msg.key.remoteJid),
    });
  }
  // Menambahkan 5 else if untuk pesan berbeda
  else if (msg.message?.extendedTextMessage?.text == "hai") {
    await whatsapp.sendTextMessage({
      sessionId: msg.sessionId,
      to: msg.key.remoteJid,
      text: "Halo!😊",
      answering: msg,
      isGroup: whatsapp.isGroup(msg.key.remoteJid),
    });
  } else if (
    msg.message?.extendedTextMessage?.text === "apa kabar?" ||
    msg.message?.extendedTextMessage?.text === "apakabar"
  ) {
    await whatsapp.sendTextMessage({
      sessionId: msg.sessionId,
      to: msg.key.remoteJid,
      text: "Saya baik'^_____^. Bagaimana denganmu?",
      answering: msg,
      isGroup: whatsapp.isGroup(msg.key.remoteJid),
    });
  } else if (msg.message?.extendedTextMessage?.text == "saya baik" ||
  msg.message?.extendedTextMessage?.text === "baik" ||
  msg.message?.extendedTextMessage?.text === "fine"
  ) {
    await whatsapp.sendTextMessage({
      sessionId: msg.sessionId,
      to: msg.key.remoteJid,
      text: "yeay alhamdulillah!",
      answering: msg,
      isGroup: whatsapp.isGroup(msg.key.remoteJid),
    });
  } else if (msg.message?.extendedTextMessage?.text == "terimakasih") {
    await whatsapp.sendTextMessage({
      sessionId: msg.sessionId,
      to: msg.key.remoteJid,
      text: "Sama-sama!",
      answering: msg,
      isGroup: whatsapp.isGroup(msg.key.remoteJid),
    });
  } else if (msg.message?.extendedTextMessage?.text == "apa kabar?") {
    await whatsapp.sendTextMessage({
      sessionId: msg.sessionId,
      to: msg.key.remoteJid,
      text: "Saya baik. Bagaimana denganmu?",
      answering: msg,
      isGroup: whatsapp.isGroup(msg.key.remoteJid),
    });
  } else if (msg.message?.extendedTextMessage?.text == "siapa kamu?") {
    await whatsapp.sendTextMessage({
      sessionId: msg.sessionId,
      to: msg.key.remoteJid,
      text: "Saya adalah bot WhatsApp building sach.😍",
      answering: msg,
      isGroup: whatsapp.isGroup(msg.key.remoteJid),
    });
  } else {
    await whatsapp.sendTextMessage({
      sessionId: msg.sessionId,
      to: msg.key.remoteJid,
      text: "ketikan perintah seperti yang tercantum =\n1.ping\n2.hai\n3.apa kabar?\n4.terimakasih\n5.apa kabar?\n6.siapa kamu?",
      answering: msg, // for quoting message
    });
  }
});
