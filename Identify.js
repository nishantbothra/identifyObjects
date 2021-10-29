Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 100
});
camera = document.getElementById("camera");
Webcam.attach(camera);

function capture() {
    Webcam.snap(function(data_uri){
        document.getElementById("pic").innerHTML = '<img id="image_saved" src="' + data_uri + '">';        
    });    
}
console.log("ml5 version", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/8MoK9aH4y/model.json", modelLoaded);

function modelLoaded() {
    console.log("Model is loaded");
}

function identify() {
    picture = document.getElementById("image_saved");
    classifier.classify(picture, getResults);
}

function getResults(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("object_name").innerHTML = results[0].label;
        document.getElementById("accuracy_result").innerHTML = results[0].confidence.toFixed(3);
    }
}






























