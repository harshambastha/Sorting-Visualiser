function mergeSort(array1,array2){

    let result=[];
    let i=0,j=0;
    while(i<array1.length && j<array2.length ){
        if(array1[i]<array2[j]){
            result.push(array1[i]);
            i++;
       
        }else{
            result.push(array2[j]);
      
            j++;
        }

    }
    console.log(result);
}

