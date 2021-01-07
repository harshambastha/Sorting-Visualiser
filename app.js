let bar=document.querySelector('.visualizer');
let gna=document.querySelector('#generatenewarray');
let al=document.querySelector('.algorithmslist');
let ss=document.querySelector('#spansort');
let ua=document.querySelector('#myRange');
let aud=document.querySelector('#arrayUpdateDiv');
let algoSelected;
let newArray=[];
let bars=[];
let arraySize=ua.value;


function generateNewArray(arraySize){
    newArray=[];
    bar.innerText='';
    bars=[];

    for(let i=0;i<arraySize;i++){
        newArray.push(Math.ceil(Math.random()*600));
        bars[i]=document.createElement('div');
        bar.appendChild(bars[i]);
        bar.childNodes[i].classList.add('blocks');
        bars[i].style=` background-color: #8E829B; margin-right:2px; width:7.25px; height:${newArray[i]}px`;
    }
}


ua.addEventListener('input',updateArraySize);

function updateArraySize(){
    arraySize=ua.value;
    generateNewArray(arraySize);
}

function selectSort(){
    ss.style.display='block';
}

function disableClickEvent(){
    bar.classList.add('disable');
    gna.classList.add('disable');
    al.classList.add('disable');
    ss.classList.add('disable');
    ua.classList.add('disable');
    aud.classList.add('disable');
}

function enableClickEvent(){
    bar.classList.remove('disable');
    gna.classList.remove('disable');
    al.classList.remove('disable');
    ss.classList.remove('disable');
    ua.classList.remove('disable');
    aud.classList.remove('disable');
}

al.addEventListener('click',selectSort);
gna.addEventListener('click',()=>{
    generateNewArray(arraySize);
});
window.onload=function(){
    generateNewArray(arraySize);
}

// Algorithms event listener
document.querySelector('.algorithmslist').addEventListener('click',(event)=>{
    algoSelected=event.target.id;
    for(let i=0;i<4;i++){
        document.querySelectorAll('.algos')[i].classList.remove('selected');
    }
    document.getElementById(algoSelected).classList.add('selected');
    console.log(algoSelected);
});

// sort button functionality

document.getElementById('spansort').addEventListener('click',()=>{
    switch(algoSelected){
        case 'Bubble':
            disableClickEvent();
            bubbleSort(newArray,bars);
        //     break;
        // case 'Merge':
        //     disableClickEvent();
        //     console.log(mergeSort(newArray));
        //     break;
        // case 'Quick':
        //     disableClickEvent();
        //     quickSort();
        //     break;
        // case 'Heap':
        //     heapSort(newArray);
        //     break;
    }
});

// Div Update
// let count=0;
// let delay=0;
// function divUpdate(ba,height,color)
// {
//     window.setTimeout(function(){
//         console.log(count++);
//         ba.style="height:" + height + "%;";
//         ba.style.backgroundColor=color;
//     },delay+=delay+5);
// }