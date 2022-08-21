var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);
    var Content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = Content;         
    console.log(Content);
    if(Content=="Selfie"){
        console.log("taking selfie---")
    speak();}                                                    
}


function speak(){
    var synth = window.speechSynthesis;
     speakdata  = "Taking Selfie in 5 seconds";
     var utterThis = new SpeechSynthesisUtterance(speakdata);
     synth.speak(utterThis);
     Webcam.attach(camera);
     seTimeOut(function(){
        takeSnapshot();                                   
        save();
     },5000);
}


Webcam.set({
    width:360,
    height:250,
    image_format : 'png',
    png_quality : 90
});

camera = document.getElementById("camera");

function takeSnapshot(){
    Webcam.snap(function(data_url){
      document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_url+'">';
    });
}

function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();

}