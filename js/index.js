var nama, setNama;
let namaForm, tanggalLahir, jenisKelamin, Pesan;

function welcome() {
    setNama = prompt("Masukkan Nama : ", "Pengguna");
    nama = setNama;
    if (nama == null || nama == "") {
        document.location.reload();
    } else {
        document.querySelector(
            "h1#nama"
        ).innerHTML = `Hi ${nama}, Welcome To Website`;
    }
}

function validasi() {
    tanggalLahir = document.getElementById("tgl").value;
    jenisKelamin = document.querySelector(
        'input[name="radio2"]:checked'
    ).value;
    Pesan = document.getElementById("pesan").value;
    namaForm = document.getElementById("_nama").value;
    event.preventDefault();
    if (
        tanggalLahir == "" ||
        jenisKelamin == "" ||
        Pesan == "" ||
        namaForm == ""
    ) {
        alert("Silahkan Diisi!");
        return;
    } else {
        time();
        document.getElementById("hasilNama").innerHTML = `<b>Nama : </b> ${namaForm}`;
        document.getElementById("hasilTgl").innerHTML = `<b>Tanggal Lahir : </b> ${tanggalLahir}`;
        document.getElementById("hasilJenis").innerHTML = `<b>Jenis Kelamin : </b> ${jenisKelamin}`;
        document.getElementById("hasilPesan").innerHTML = `<b>Pesan : </b> ${Pesan}`;
    }
}

function time() {
    var t = new Date();
    document.getElementById('times').innerHTML = `Current time : ${t}`;
}