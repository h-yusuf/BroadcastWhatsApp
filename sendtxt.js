const whatsapp = require("velixs-md");

whatsapp.startSession("sach");

whatsapp.onConnected((sessionId) => {
  console.log("session connected :" + sessionId);
  sendTextBroadcast();
});

async function sendTextBroadcast(){
  const numbers = ["di awali dengan '62' " ];
  for (const number of numbers){
    await whatsapp.sendTextMessage({
      sessionId: "sach" ,
      to: number ,
      text:"ketikkan massage",
    });
  }
}