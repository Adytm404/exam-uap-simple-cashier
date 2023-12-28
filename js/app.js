function hitungBarang(){
    let kode = document.getElementById("kode").value
    let jumlah = parseFloat(document.getElementById("jumlah").value)

    switch(kode){
        case "001":
            kode = 10000
            break
        case "002":
            kode = 20000
            break
        case "003":
            kode = 30000
            break
        default:
            alert("menu tidak tersedia")
            return false
    }

    if(kode){
        let hitung = parseFloat(kode) * jumlah
    
        alert("total pembayaran adalah: " + hitung)
        inputPembayaran(hitung)
    }
}

function inputPembayaran(hitung){
    let pembayaran = window.prompt("masukan uang user :")
    if(pembayaran){
        let kembalian = pembayaran - hitung
        if(kembalian > 0){
            alert("total kembalian Anda adalah : " + kembalian + ", terimakasih")
        }else if(kembalian === 0){
            alert("uang Anda pas, terimakasih")
        }else{
            alert("uang Anda tidak cukup")
        }
    }
}