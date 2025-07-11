let gameseq=[];
let userseq=[];

let btns=["pink","blue","purple","orange"];


let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress" , function() {
    if (started==false) {
        console.log("game is started");
        started=true;

        levelUp();
    }

    


});

function gameFlash(btn ){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    },250);

}
  function userflash(btn ){
    btn.classList.add ("userflash");
    setTimeout(function() {
        btn.classList.remove ("userflash");
    },250);

}





function levelUp() {
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;

    let randomidx=Math.floor(Math.random()*4);
    let randomcol=btns[randomidx];
    let randombtn=document.querySelector(`.${randomcol}`);
    gameseq.push(randomcol);
    console.log(gameseq);
    
    gameFlash(randombtn);
}

    function checkans(idx) {
       // console.log("current level: ", level);
      // let idx=level-1;
       if(userseq[idx] === gameseq[idx]) {
        if(userseq.length==gameseq.length) {
            levelUp();
        }
       } else {
         h2.innerHTML=`game over !  your score was <b>${level}</b> <br> press any key to start`;
         document.querySelector("body").style.backgroundColor="red";
         setTimeout(function () {
            document.querySelector("body").style.backgroundColor="white";

         },150);
         reset();
       }

    }


function btnpress() {
    //console.log(this);
    let btn = this;
    userflash(btn);

    usercolor= btn.getAttribute("id");
    console.log(usercolor);
    userseq.push(usercolor);

    checkans(userseq.length-1);

    
}

let allbtn=document.querySelectorAll(".btn");
for(btn of allbtn) {
    btn.addEventListener("click", btnpress);
}

function reset () {
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}