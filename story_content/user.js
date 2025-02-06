function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5WBIJNprMJ4":
        Script1();
        break;
      case "5Zrab3LiVkY":
        Script2();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSong');

audio.src="musik.mp3";

audio.load();

audio.pause();
}

function Script2()
{
  var audio = document.getElementById('bgSong');

audio.src="musik.mp3";

audio.load();

audio.play();
}

