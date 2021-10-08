let btn_musik1 = document.getElementsByTagName('button')[0];
let btn_musik2 = document.getElementsByTagName('button')[1];
let btn_musik3 = document.getElementsByTagName('button')[2];
let btn_musik4 = document.getElementsByTagName('button')[3];
let btn_musik5 = document.getElementsByTagName('button')[4];
let btn_musik6 = document.getElementsByTagName('button')[5];

btn_musik1.addEventListener('click', function(){
   document.getElementById('coldplay1').play(); 
});

btn_musik2.addEventListener('click', function(){
   document.getElementById('coldplay1').pause(); 
});

btn_musik3.addEventListener('click', function(){
   document.getElementById('coldplay2').play(); 
});

btn_musik4.addEventListener('click', function(){
   document.getElementById('coldplay2').pause(); 
});

btn_musik5.addEventListener('click', function(){
   document.getElementById('coldplay3').play(); 
});

btn_musik6.addEventListener('click', function(){
   document.getElementById('coldplay3').pause(); 
});

