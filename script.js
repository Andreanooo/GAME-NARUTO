var isMoving = true;
function setBackgroundMoving() {
    if(isMoving == true)
    setTimeout(function() {
        // untuk background berjalan
        var bg = document.getElementById('board');
        bg.style.backgroundPosition = (parseInt(bg.style.backgroundPosition.replace('px', ''))-1) + 'px';
        
        // memberi score
        document.getElementById('score').innerHTML =
        parseInt(document.getElementById('score').innerHTML) +1;

        //memanggil fungsiya terus menerus
        setBackgroundMoving();
    },5);
}
// inisialisasi fungsi background berjalan
setBackgroundMoving();


function setSasukeMoving() {
    var sasuke = document.getElementById('sasuke'),
    naruto = document.getElementById('naruto');

    setTimeout(function(){
        
        sasuke.style.marginLeft = (parseInt(sasuke.style.marginLeft.replace('px','')) -1) + 'px';

        if(parseInt(sasuke.style.marginLeft.replace('px','')) < -100){
            sasuke.style.marginLeft = "600px";
        }

        if(naruto.offsetTop + 50 >= sasuke.offsetTop &&
            naruto.offsetLeft + 50 >= sasuke.offsetLeft &&
            naruto.offsetTop + 50 <= sasuke.offsetTop + 50 &&
            naruto.offsetLeft <= sasuke.offsetLeft + 50) {
                alert('Game Over. Score anda : ' + document.getElementById('score').innerHTML);
                naruto.setAttribute('class','freeze');
                isMoving = false;
            }else{

                //memanggil fungsiya terus menerus
                setSasukeMoving();
            }
    },5);
}
// inisialisasi sasuke bergerak
setSasukeMoving();

window.addEventListener('keyup', function(e) {
    // untuk mendeteksi tombol spasi
    if(e.keyCode == 32) {
        // setting narutonya loncat
        document.getElementById('naruto').style.marginTop = "30px";
        document.getElementById('naruto').setAttribute('class','freeze');
        
        // kembalikan narutonya kedarat
        setTimeout(function() {
            document.getElementById('naruto').style.marginTop = "170px";
            document.getElementById('naruto').setAttribute('class','')
        },900);
    }
})

function toggleAudio() {
    var audioPlayer = document.getElementById('audioPlayer');

    // Memeriksa apakah audio sedang diputar
    if (audioPlayer.paused) {
        // Jika audio sedang tidak diputar, mulai memutarnya
        audioPlayer.play();
        document.getElementById('playButton').innerHTML = 'Pause Sound';
    } else {
        // Jika audio sedang diputar, hentikan pemutaran
        audioPlayer.pause();
        document.getElementById('playButton').innerHTML = 'Play Sound';
    }
}

document.getElementById('playButton').addEventListener('click', toggleAudio);
