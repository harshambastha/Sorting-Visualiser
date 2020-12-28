function quick_partition (start, end)
{
    let i = start + 1;
    let piv = newArray[start] ;//make the first element as pivot element.
    divUpdate(bars[start],newArray[start],"yellow");//Color update

        for(let j =start + 1; j <= end ; j++ )
        {
            //re-arrange the array by putting elements which are less than pivot on one side and which are greater that on other.
            if (newArray[ j ] < piv)
            {
                divUpdate(bars[j],newArray[j],"yellow");//Color update

                divUpdate(bars[i],newArray[i],"red");//Color update
                divUpdate(bars[j],newArray[j],"red");//Color update

                let temp=newArray[i];
                newArray[i]=newArray[j];
                newArray[j]=temp;

                divUpdate(bars[i],newArray[i],"red");//Height update
                divUpdate(bars[j],newArray[j],"red");//Height update

                divUpdate(bars[i],newArray[i],"blue");//Height update
                divUpdate(bars[j],newArray[j],"blue");//Height update

                i += 1;
            }
    }
    divUpdate(bars[start],newArray[start],"red");//Color update
    divUpdate(bars[i-1],newArray[i-1],"red");//Color update
    
    let temp=newArray[start];//put the pivot element in its proper place.
    newArray[start]=newArray[i-1];
    newArray[i-1]=temp;

    divUpdate(bars[start],newArray[start],"red");//Height update
    divUpdate(bars[i-1],newArray[i-1],"red");//Height update

    for(let t=start;t<=i;t++)
    {
        divUpdate(bars[t],newArray[t],"green");//Color update
    }

    return i-1;//return the position of the pivot
}

function quickSort (start=0, end=arraySize-1 )
{
    if( start < end )
    {
        //stores the position of pivot element
        let piv_pos = quick_partition (start, end ) ;     
        quickSort (start, piv_pos -1);//sorts the left side of pivot.
        quickSort (piv_pos +1, end) ;//sorts the right side of pivot.
    }
 }