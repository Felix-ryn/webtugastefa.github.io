
function cetak(){
var nama=document.getElementById("nama").value;
var email=document.getElementById("email").value;
var pesan=document.getElementById("pesan").value;


    if(nama != "" && email !="" && pesan!=""){
        // document.getElementById("result").value=nama;
        document.getElementById("result").value="haii " +nama +","+"email="+email+","+ pesan;
        // document.getElementById("result").value=email;
    }
    else{
        alert('anda harus masukkan lengkap');
    }
}