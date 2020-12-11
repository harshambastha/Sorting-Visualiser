let bar=document.querySelector('.visualizer');
let gna=document.querySelector('#generatenewarray');
let al=document.querySelector('.algorithmslist');
let ss=document.querySelector('#spansort');
let algoSelected;

let newArray=[];
let bars=[];


function generateNewArray(){
    newArray=[];
    bar.innerText='';
    bars=[];

    for(let i=0;i<100;i++){
        newArray.push(Math.ceil(Math.random()*500));
        bars[i]=document.createElement('div');
        bar.appendChild(bars[i]);
        bar.childNodes[i].classList.add('blocks');
        bars[i].style=` background-color: cadetblue; margin-right:2px; width:10px; height:${newArray[i]}px`;
    }
   

}

function selectSort(){
    ss.style.display='block';
}


al.addEventListener('click',selectSort);
gna.addEventListener('click',generateNewArray);
window.onload=function(){
    generateNewArray();
}

// Algorithms event listener
document.querySelector('.algorithmslist').addEventListener('click',(event)=>{
    algoSelected=event.target.id;
    console.log(algoSelected);
});

// sort button functionality

document.getElementById('spansort').addEventListener('click',()=>{
    switch(algoSelected){
        case 'Bubble':
            bubbleSort(newArray,bars);
            break;
        case 'Merge':
            mergeSort();
            break;
            //work pending
    }
});