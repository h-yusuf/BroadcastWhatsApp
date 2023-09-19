const fs = require("fs");
const whatsapp = require("velixs-md");

// nama "sach" boleh di ganti dengan nama bebas
whatsapp.startSession("sach");

whatsapp.onConnected((sessionId) => {
  console.log("session connected :" + sessionId);
  // sendImageLoop();
  sendTextBroadcast();
});

    // sending text
async function sendTextBroadcast(){
  const numbers = ["6289527124144","6288216342092","62895614613080","+62 882-0033-13309","+62 896-7397-8280","+62 882-2657-4945","+62 882-1639-4219","+62 895-3582-40698","+62 818-0406-5330","+62 813-9165-9886","+62 813-9165-9886","+62 896-3348-6479","+62 857-1363-5763","+62 882-2737-6930","+62 895-3555-44414","+62 812-2868-4402","+62 812-2920-6462","+62 813-2759-5341","+62 813-2851-7206","+62 821-1186-0019","+62 821-1286-9716","+62 821-2345-8485","+62 821-3728-8050","+62 831-7494-3380","+62 838-5755-4747","+62 857-2766-5373","+62 877-3969-3740","+62 877-6045-1205","+62 882-1506-0119","+62 882-1550-5658","+62 882-2158-2179","+62 882-2793-3678","+62 882-3213-1641","+62 888-0198-6516","+62 889-8982-2553","+62 895-1717-9600","+62 895-2819-2907","+62 895-3392-80250","+62 895-3446-90030","+62 895-3666-63910","+62 895-4139-19505","+62 895-4175-45800","+62 895-4251-83600","+62 895-6168-59912","+62 895-6343-79706","+62 896-3788-8455","+62 896-4853-6004","+62 896-5449-0392","+62 896-7153-9481","+62 896-9885-9698","+62 898-9274-830","" ];
  for (const number of numbers){
    await whatsapp.sendTextMessage({
      sessionId: "sach" ,
      to: number ,
      text:"PEMUDA SETEMPAT\n\n Hal: UNDANGAN ONLINE\n\nAssalamu'alaikum Wr. Wb.\n\nDengan ini kami mengharapkan kehadiran teman-teman pada:\n\nHari/tanggal: Rabu, 20 september 2023\n\nWaktu           : 20.00WIB\n\nTempat         : rumah Didi k.\n\nAcara            : Rapat Maulid Nabi \n\n* TANPAMU KAMI KURANG LENGKAP *\n\nDemikian undangan ini kami buat, atas perhatian dan kehadirannya kami ucapkan terimakasih.\n\nNB : MEMBAWA INFAQ\n\nWassalamu'alaikum Wr. Wb.",
    });
  }
}
    // Sending img
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
  setTimeout(sendImageLoop, 120000);
}
