// Initialize the Image Classifier method with MobileNet. A callback needs to be passed.
let classifier;
let loaded;

// A variable to hold the image of violin we want to classify
let img_v = [];

// A variable to hold the image of banjo we want to classify
let img_b = [];

function preload() {
  
  mobilenet.load().then(modelLoaded);

  const url_violin_list = [
    "https://upload.wikimedia.org/wikipedia/commons/f/f6/Old_violin.jpg", 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVG9omD6gEI5Z0tsknVFYSanl1jq6R0kRZiw&usqp=CAU", 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTSoIZzaDhouUAznZH5mcrMA1QkzrCnLR8Pg&usqp=CAU", 
  ];

  for (violin_url of url_violin_list){
    img_v.push(loadImage(violin_url));
  }

  const url_banjo_list = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQypYiXXvT4ZDQVBg_F81gItnIGbHDRQ5wbqw&usqp=CAU", 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQjWoCfK6v-BsPdenVdQFtv8GQeka6P4zXnHA&usqp=CAU", 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRmuolJsxk646pIelui5CDyN3YzCpI16_Eizw&usqp=CAU", 
  ];

  for (banjo_url of url_banjo_list){
    img_b.push(loadImage(banjo_url));
  }

  console.log(url_violin_list);
  console.log(url_banjo_list);
  console.log(img_b);
  console.log(img_v);
}

function setup() {
  createCanvas(400, 400);
  background(200, 156, 12);
  // classifier.classify(img, gotResult);
  //  image(img, 0, 0);
  image(img_v[2], 10, 0);
  image(img_b[0], 10, img_v[2].height + 1);

  createButton("Classifier vos images").mousePressed(btnClicked);
}

function modelLoaded(net) {
  classifier = net;
  loaded = true;
  print("Model loaded");
}

function btnClicked() {
  if (loaded == true) {
    classifier.classify(img_v[2]).then(classifyDone);
    classifier.classify(img_b[0]).then(classifyDone);
  }
}

function classifyDone(res) {
  print(res);
  if (res[0].className == "violin")
  {
    /*
      Do something here..
    */
  }
  if (res[0].className == "banjo")
  {
    /*
      Do something here..
    */
    createDiv(`Felicitations vous avez scanné un banjo !`);
    createDiv(`Label: ${res[0].label}`);
    createDiv(`Confidence: ${nf(res[0].confidence, 0, 2)}`);
  }
}


// // A function to run when we get any errors and the results
// function gotResult(error, results) {
//   // Display error in the console
//   if (error) {
//     console.error(error);
//   } else {
//     // The results are in an array ordered by confidence.
//     console.log(results);
//     createDiv(`Label: ${results[0].label}`);
//     createDiv(`Confidence: ${nf(results[0].confidence, 0, 2)}`);
//   }
// }





// var model_mobilenet;
// var video;
// var loaded;

// function setup() {
//   createCanvas(400, 300);
//   mobilenet.load().then(modelLoaded);

//   video = createCapture(VIDEO);
//   video.size(400, 300);
//   video.hide();
  
//   createButton("Take a picture").mousePressed(btnClicked);
// }

// function classifyDone(res) {
//   print(res);
//   if (res[0].className == "theiere")
//   {
//     /*
//       Do something here..
//     */
//   }
//   if (res[0].className == "mushroom")
//   {
//     /*
//       Do something here..
//     */
//   }
// }

// function modelLoaded(net) {
//   model_mobilenet = net;
//   loaded = true;
//   print("Model loaded");
// }

// function btnClicked() {
//   image(video, 0, 0, 400, 300);
//   if (loaded == true) {
//     model_mobilenet.classify(video.elt).then(classifyDone);
//   }
// }