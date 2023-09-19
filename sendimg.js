const fs = require("fs");
const whatsapp = require("velixs-md");

whatsapp.startSession("sach");

whatsapp.onConnected((sessionId) => {
  console.log("session connected :" + sessionId);
  sendImageLoop();
});


async function sendImageLoop() {
    const numbers = ["di awali dengan '62' ","bisa banyak nomer" ];
    const image = fs.readFileSync("./foto.png"); 
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
