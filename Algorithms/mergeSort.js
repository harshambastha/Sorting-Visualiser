async function mergeSort(arr){
    if(arr.length<=1) return;
    let middle=Math.floor(arr.length/2);
    bars[middle].style.backgroundColor='#ECD150';
    const left=arr.slice(0,middle);
    const right=arr.slice(middle+1);
    return merge(mergeSort(left),mergeSort(right));
}

async function merge(array1,array2){
    let result=[];
    let i=0,j=0;
    await new Promise(resolve =>
        setTimeout(() => {
          resolve();
        }, 5)
      );
    while(i<array1.length && j<array2.length ){
        if(array1[i]<array2[j]){
            result.push(array1[i]);
            i++; 
        }else{
            result.push(array2[j]);
            j++;
        }
    }
    enableClickEvent();
    return result.concat(array1.slice(i)).concat(array2.slice(j));
}