// const fs = require("fs");
// const whatsapp = require("velixs-md");
// // buat sesi dengan ID : ilsyaganz

// whatsapp.startSession("sach");
// // Kemudian, pindai QR di terminal

// whatsapp.onConnected((sessionId) => {
//     console.log("session connected :" + sessionId);
//     whatsapp.sendTextMessage({
//       sessionId: "sach", // session ID
//       to: "6289523042247", // always add country code (ex: 62)
//       text: "Hi There, This is Message from Server!", // message you want to send
//     });
//   });

//   whatsapp.onConnected(async (sessionId) => {
//     console.log("session connected :" + sessionId);
  
//     // Membaca gambar dari file lokal
//     const image = fs.readFileSync("./foto.png");

//     // whatsapp.sendTextMessage({
//     //     sessionId: "sach", // session ID
//     //     to: "6289523042247", // always add country code (ex: 62)
//     //     text: "Hi There, This is Message from Server!", // message you want to send
//     //   });
//     // Mengirim gambar
//     const send = await whatsapp.sendImage({
//       sessionId: "sach",
//       to: "6289523042247",
//       to: "6289527124144",
//       to: "6281390390084",
//       to: "6285740690539",
//       text: "mabar kuy",
//       media: image,
//     });
  
//     console.log("Image sent:", send);
//   });

const fs = require("fs");
const whatsapp = require("velixs-md");

whatsapp.startSession("sach");

whatsapp.onConnected((sessionId) => {
  console.log("session connected :" + sessionId);
  sendImageLoop();
});

async function sendImageLoop() {
  const numbers = ["62882003313309", "62895614613080", "6289527124144", "6289673978280"];
  const image = fs.readFileSync("./kumpulan.jpeg");
  const text = "mabar kuy";

  for (const number of numbers) {
    await whatsapp.sendImage({
      sessionId: "sach",
      to: number,
      text: text,
      media: image,
    });
    console.log(`Image sent to ${number}`);
  }

  // Menunggu 2 menit (120.000 milidetik) sebelum mengulang pengiriman
//   setTimeout(sendImageLoop, 120000);
}
