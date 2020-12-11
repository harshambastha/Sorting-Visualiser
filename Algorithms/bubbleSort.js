let noSwap=true;
 async function bubbleSort(arr,bars){
  let k=1;


    for(let i=arr.length;i>0;i--){
        noSwap=true;
      for(let j=0;j<i-1;j++){
      
        bars[j].style.backgroundColor = "#FF4949";
        bars[j+1].style.backgroundColor = "#FF4949";

        await new Promise(resolve =>
          setTimeout(() => {
            resolve();
          }, 5)
        );
    
        if(arr[j]>arr[j+1]){
          arr[j]=arr[j]+arr[j+1];
          arr[j+1]=arr[j]-arr[j+1];
          arr[j]=arr[j]-arr[j+1];



          await swap(j,j+1);
        
        }  

        bars[j].style.backgroundColor = "#58B7FF";
        bars[j + 1].style.backgroundColor = "#58B7FF";
      }
      console.log(bars[arr.length -k]);
      bars[arr.length-k].style.backgroundColor = "#13CE66";
      if(noSwap){
        // have to visualize the bars which dont need swap in the end
        break;
      } 
      k++;
    }
  }

  function swap(firstBar,secondBar){
    return new Promise(resolve=>{
      noSwap=false;
      let bar1=window.getComputedStyle(document.querySelectorAll('.blocks')[firstBar]).getPropertyValue('height');
      let bar2=window.getComputedStyle(document.querySelectorAll('.blocks')[secondBar]).getPropertyValue('height');
      bars[firstBar].style.height=bar2;
      bars[secondBar].style.height=bar1;
      window.requestAnimationFrame(function(){
        setTimeout(()=>{
          resolve();
        },5);
      });
    });



  }
  