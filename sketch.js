var model_mobilenet;
var video;
var loaded;

function setup() {
  createCanvas(400, 300);
  mobilenet.load().then(modelLoaded);

  video = createCapture(VIDEO);
  video.size(400, 300);
  video.hide();
  
  createButton("Take a picture").mousePressed(btnClicked);
}

function classifyDone(res) {
  print(res);
  if (res[0].className == "choosenClassName")
  {
    /*
      Do something here..
    */
  }
}

function modelLoaded(net) {
  model_mobilenet = net;
  loaded = true;
  print("Model loaded");
}

function btnClicked() {
  image(video, 0, 0, 400, 300);
  if (loaded == true) {
    model_mobilenet.classify(video.elt).then(classifyDone);
  }
}