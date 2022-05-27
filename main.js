function speak()
{
    var synth = window.speechSynthesis
    var Utterthis = "There is a" + animal;
    var Talk = new SpeechSynthesisUtterance(Utterthis)
    synth.speak(Talk);
}
function SC()
{
classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/q2j7t4zbO/model.json", { probabilityThreshold: 0.7 }, modelReady)
navigator.mediaDevices.getUserMedia({audio : true , video : false })
}
function modelReady()
{
    console.log("The model is ready to be used\n 👍");
    classifier.classify(gotResults);
}
function gotResults(error, results)
{
     if(error)
     {
         console.error(error)
     } else
       {
           console.log(results)
         document.getElementById("O").innerHTML = results[0].label 
         document.getElementById("A").innerHTML = Math.round(results[0].confidence*100).toFixed(2) + "%"
         var I = document.getElementById("Imag");

         if(results[0].label == "Dogs")
         {
            I.src = "Bark.gif"
         }else if( results[0].label == "Cats")
         {
            I.src = "Meow.gif"
         }else{
             I.src = "Ear.png"
         }
        }
}