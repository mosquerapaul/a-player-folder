
var playingStatus = {};

function check10(num) {
    if (num > 59) {
        num = num % 60;
    } 
    if (num < 10 ){
        num = '0' + num;
    }
    return num;
}

function formatTime(seconds) {
    timeSeconds = Number.parseInt(seconds);
    timeMinutes = Number.parseInt(timeSeconds / 60);
    timeSeconds = check10(timeSeconds);
    timeMinutes = check10(timeMinutes);
    var formatedTime = timeMinutes + ':' + timeSeconds;
    return formatedTime
}

var playAudio = function(file, changeAudio) {
    if (!playingStatus.ready) {
        console.log('files not ready');
    }
    if(playingStatus.file === undefined || changeAudio) {
        playingStatus.file = '../audio/' + audiolistFiles[playingStatus.index];
        file.src = playingStatus.file;
        playingStatus.audioName = audiolistFiles[playingStatus.index].slice(0, -4)
        $('#audio-name').html(playingStatus.audioName);
    }
    file.play();
    $('#progress-bar-background i').css({'animation-name': 'playing', '-webkit-animation-name' : 'playing'});
    
}

var nextAudio = function(file) {
    console.log(playingStatus.files.length);
    if(playingStatus.index < playingStatus.files.length) {
        playingStatus.index++;
        playAudio(file, true);
    } else {
        playingStatus.index = 0;
    }
}

$(function() {
    $('#pause').hide(0);

    /************************ AUDIO METHODS
     * buffered - get the buffered ranges of the audio
     * seekable - get the seekable ranges of the audio [buscable / reubicable]
     * duration - get the duration of the audio
     * currentTime - get or set the current playback position of the audio
     * paused - check if the audiois paused
     * play() - play the audio
     * pause() - pause the audio
     * played - check if the audiohas been played
     * defaultPlaybackRate - get or set the default playback rate of the audio
     * playbackRate - get or set the current playback rate of the audio
     * volume - get or set the volume of the audio
     * muted - get or set if the audio is muted
    **************************/
    playingStatus.ready = false;
    playingStatus.index = 0;
    var playingFile = new Audio;
    playingFile.volume= 0.2;

    $('#start-stop').on('click', function(e) {
        if (playingStatus.ready) {
            $('#pause').toggle(300);
            $('#play').toggle(300);
        }
    });

    $('#play').on('click', function() {
        playAudio(playingFile, false);
    });
    $('#pause').on('click', function() {
        playingFile.pause();
        $('#progress-bar-background i').css({'animation-name': 'pause', '-webkit-animation-name' : 'pause'});
    });

    $('#next').on('click', function() {
        nextAudio(playingFile);
    });

    $('#prev').on('click', function() {
        if(playingStatus.index > 0){
            playingStatus.index--;
            playAudio(playingFile, true);
            userMessage(`Loading audio ${playingStatus.audioName}`, 2000);
        } else {
            userMessage('There are not previus files', 2000);
        }
        
    });

    playingFile.addEventListener('timeupdate', function(e) {
        playingStatus.currentTime = formatTime(playingFile.currentTime);

        $('#audio-duration').empty().text(`${playingStatus.currentTime} / ${playingStatus.duration}`);

        var avanced = (playingFile.currentTime / playingFile.duration ) * 100;
        $('#progress-bar').css('width', `${avanced}%`);
    })

    playingFile.addEventListener('loadedmetadata', function(e) {
        playingStatus.duration = formatTime(playingFile.duration);
    })

    playingFile.addEventListener('ended', function(e) {
        nextAudio();
    })
});