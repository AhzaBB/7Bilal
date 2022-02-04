const image = document.getElementById('img');
const guruImg = document.getElementById('guru');
const namaGuru = document.getElementById('namaGuru');
const muridImg = document.getElementById('murid');
const namaMurid = document.getElementById('namaMurid');
const jabatanMurid = document.getElementById('jabatanMurid');

let imgArr = [
    '<img src="img/gambar1.png" alt="gambar1">',
    '<img src="img/gambar2.png" alt="gambar2">'
]
let imgI = 0;

let guruImgArr = [
    '<img src="img/guru1.png" alt="Pak Adi">',
    '<img src="img/guru2.png" alt="Miss Zuma">'
]
let namaGuruArr = [
    'Pak Adi',
    'Miss Zuma'
]
let guruI = 0;

let namamuridArr = [
    'Andien',
    'Aji',
    'Alma',
    'Alvarro',
    'Amira',
    'Athifah',
    'Zhafira',
    'Callysta',
    'Ahza',
    'Kanya',
    'Kynan',
    'Ammar',
    'Azzam',
    'Angga',
    'Daffa',
    'Nayla',
    'Aya',
    'Salsa',
    'Saskia'
]
let jabatanMuridArr = [
    'Bendahara<hr>Osis',
    '-<hr>-',
    '-<hr>Osis',
    '-<hr>-',
    '-<hr>-',
    '-<hr>-',
    '-<hr>Osis',
    'Sekretaris<hr>Osis',
    '-<hr>-',
    '-<hr>-',
    'Ketua Kelas<hr>Osis',
    '-<hr>-',
    '-<hr>-',
    'Wakil Ketua Kelas<hr>-',
    '-<hr>-',
    '-<hr>Wakil Ketua Osis',
    '-<hr>-',
    '-<hr>-',
    '-<hr>Osis'
]
let muridI = 0;


function imgIP() {
    if (imgI < imgArr.length - 1) {
        imgI++;
    }
}
function imgIM() {
    if (imgI > 0) {
        imgI--;
    }
}

function guruImgIP() {
    if (guruI < guruImgArr.length - 1) {
        guruI++;
    }
}
function guruImgIM() {
    if (guruI > 0) {
        guruI--;
    }
}


function muridImgIP() {
    if (muridI < namamuridArr.length - 1) {
        muridI++;
    }
}
function muridImgIM() {
    if (muridI > 0) {
        muridI--;
    }
    console.log(`<img src"img/murid${muridI+1}.png" alt="${namamuridArr[muridI]}">`)
}

function update() {
    image.innerHTML = imgArr[imgI];
    guruImg.innerHTML = guruImgArr[guruI];
    namaGuru.innerHTML = namaGuruArr[guruI];
    muridImg.innerHTML = `<img src="img/murid${muridI+1}.png" alt="${namamuridArr[muridI]}">`
    jabatanMurid.innerHTML = jabatanMuridArr[muridI]
    namaMurid.innerHTML = namamuridArr[muridI];
    setTimeout(update);
}
update()
