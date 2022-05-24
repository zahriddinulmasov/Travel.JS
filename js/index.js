var hello = alert("Qani, Sayohatni boshlaymiz!")

var costs = alert(`Sayohatingiz uchun sizdan talab qilinadi!

Bilet uchun (borib-kelish) -- $500
Mehmonxona uchun -- $250
Muzey va ko’ngilochar joylar uchun -- Є120`)

const totalMoney = Number(prompt("Umumiy qancha pulingiz bor?"))

// VALUES OF CURRENCIES IN COUMS

const usdToUzs = 10896.61;
const euroToUzs = 12247.79;

// COSTS

const ticketUsd = 500;
const hotelUsd = 250;
const entertainmentEuro = 120;


// TOTAL

const totalCosts = (ticketUsd + hotelUsd) * usdToUzs + entertainmentEuro * euroToUzs;

const totalPlusMoney = (totalMoney - totalCosts).toFixed(2);

const totalLessMoney = (totalCosts - totalMoney).toFixed(2);




if(totalMoney >= totalCosts) {
    console.log(`Siz bemalol sayohat qila olasiz! Xattoki pulingiz ${totalPlusMoney} so'm ortiqcha!`);

} else {
    console.log(`Uzr, sizni pulingiz xarajatlarga ${totalLessMoney} so'm yetmayapti!`);
}