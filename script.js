//Autotype JS code:
const dataset = ["Himanshu Narware..."];
let datasetIndex = 0;
let outputElement;
const pause = 1000;
const addTime = 150; // slower typing animation
const removeTime = 100; // slower removing animation
let letterIndex = 0;
let currentInterval;

function init() {
  outputElement = document.getElementById("autoType");
  textRotation();
}

function textRotation() {
  if (datasetIndex === dataset.length) {
    datasetIndex = 0;
  }
  const data = dataset[datasetIndex];
  letterIndex = 0;
  outputElement.className = "";
  currentInterval = setInterval(addLetter, addTime);
}

function addLetter() {
  outputElement.innerHTML += dataset[datasetIndex].charAt(letterIndex);
  letterIndex += 1;

  if (letterIndex > dataset[datasetIndex].length) {
    outputElement.className = "createAnimation";
    clearInterval(currentInterval);
    setTimeout(startRemove, pause);
  }
}

function startRemove() {
  currentInterval = setInterval(removeLetter, removeTime);
}

function removeLetter() {
  const currentString = outputElement.innerHTML;
  const newString = currentString.substring(0, currentString.length - 1);
  outputElement.innerHTML = newString;

  if (currentString.length < 1) {
    clearInterval(currentInterval);
    datasetIndex += 1;
    textRotation();
  } else {
    if (newString.length < 1) {
      clearInterval(currentInterval);
      setTimeout(startRemove, pause);
    }
  }
}

setTimeout(init, pause); // set the delay to pause instead



//  exprience column hideshow
let activeClass = document.getElementById('hide');

const btn_hide=document.getElementById('hidebtn')
btn_hide.addEventListener('click',()=>{
  activeClass.classList.toggle('active');
  btn_hide.classList.toggle('active-btn::after')
  btn_hide.classList.toggle('zindex')
  if(btn_hide.innerHTML==='More'){
    btn_hide.innerHTML="Less"
  }
  else{
    btn_hide.innerHTML="More"
  }

})

// experience section hidebutton
// let exp_hide_btn=document.querySelectorAll('.experience-hide-btn');
// exp_hide_btn.forEach((item,index)=>{
//   item.addEventListener('click',(e)=>{
//     // console.log(document.getElementsByTagName('li')[e].parentElement);
//   // e.target.parentElement. previousSibling.classList.toggle('hidden')
// // console.log(e.target.parentElement.previousElementSibling.innerHTML)
// e.target.parentElement.previousElementSibling.classList.toggle('hidden')
  
  



//   })
// })

//logic of more
// let more=document.getElementById('more')
// more.addEventListener('click',()=>{
//   // document.getElementById('box').classList.add('block')
//   // alert('windrow')
//   document.getElementById('box').classList.toggle('block')
// })


// education button
let edu_button=document.getElementById('edu-btn');
edu_button.addEventListener('click',(e)=>{
 document.querySelector('.education-section').classList.toggle('education-active')
})

// writing login for sibling
let  child1=document.querySelectorAll('.Wrapper-sib ')
let  child2=document.querySelectorAll('.child-2')

for(let Click of child2){
  Click.addEventListener('click',(e)=>{
    e.target.previousElementSibling.classList.toggle('child-1-hide')
    console.log(e.target.previousElementSibling)
    if(Click.innerHTML==='More..')
    {
   Click.innerHTML='Less...'
    }
    else{
      Click.innerHTML='More..'
    }
    })
}


//contact us page
