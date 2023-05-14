const board=document.getElementById('gameborad');
const info=document.getElementById('info');
const btn1=document.getElementById('start');
const allSq=document.querySelectorAll('.square');

const winCombo=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
]

let us1="user1";
let us2="user2";
let go='circle';
info.textContent= us1+' s Chance';


const checkScore =()=>{
    winCombo.forEach(array =>{
        const crossWins = array.every(cell =>
            allSq[cell].firstChild?.classList.contains('circle'))

        if(crossWins){
            info.textContent=us1+' Wins';
            allSq.forEach(square => square.replaceWith(square.cloneNode(true)));
            return;
        }

    })

    winCombo.forEach(array =>{
        const crossWins = array.every(cell =>
            allSq[cell].firstChild?.classList.contains('cross'))

        if(crossWins){
            info.textContent= us2+' Wins';
            allSq.forEach(square => square.replaceWith(square.cloneNode(true)));
            return;
        }

    })
}


const addGo=(e)=>{
    //console.log(e.target);
    const goDisplay=document.createElement('div');
    goDisplay.classList.add(go);
    go = go=='circle'?'cross':'circle';
    if(go=='circle'){
        info.textContent=us1+' s Chance';
    }
    else{
        info.textContent=us2+' s Chance';
    }
    e.target.append(goDisplay);
    e.target.removeEventListener('click',addGo);
    checkScore();
}

const createBoard = ()=>{
    const squares=document.querySelectorAll('.square');    
    squares.forEach((square)=>{
        square.addEventListener('click',addGo);
    })
}


const msg=document.getElementById('form1');

const showMsg = ()=>{
    msg.classList.add('top50');
}

const remMsg = ()=>{
    let pl1=document.getElementById('play1');
    console.log(pl1.value);
    us1=pl1.value;
    let pl2=document.getElementById('play2');
    console.log(pl2.value);
    us2=pl2.value;
    info.textContent= us1+' s Chance';
    msg.classList.remove('top50');
}

const func2 = ()=>{
    showMsg();
    //us1=prompt("Your Name please");
    //us2=prompt("And Your Opponent s Name ");
    //console.log("you entered "+us1 +" and "+us2);
    //info.textContent= us1+' s Chance'; 
    clearInterval(inter);
}


const showAbout = ()=>{
    const about=document.getElementById('about1');
    if(about.classList.contains('autoh')){
        about.classList.remove('autoh');
    }
    else{
        about.classList.add('autoh');
    }
}

const showMe = ()=>{
    const about=document.getElementById('me1');
    if(about.classList.contains('autoh')){
        about.classList.remove('autoh');
    }
    else{
        about.classList.add('autoh');
    }
}

createBoard();
let inter=setInterval(func2,2000);