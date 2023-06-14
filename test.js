// Question 2.

var array=[2,3,55,6,67,78,23,5,67,78,43,67,34,6,74,7,45,23,45,78,89,34,23];
var target= -54;
function findNumber(array,target){
    for(var i=0; i<array.length-4;i++){
        for(var j=i+1; j<array.length-3;j++){
            for(var k=j+1; k<array.length-2;k++){
                for(var l=k+1; l<array.length-1;l++){
                    for(var m=l+1; m<array.length;m++){
                        if(array[i]-array[j]-array[k]-array[l]-array[m]==target){
                            console.log(array[i],array[j],array[k],array[l],array[m],"target achieved")
                        }
                    }
                }
            }
        }
    }

}
findNumber(array,target)

// Question 3.

var array2=[2,3,55,6,67,78,23,5,67,78,43,67,34,6,74,7,45,23,45,78,89,34,23];
var target2= 236028;
var flag= false;
function findMulti(test,awdiz){
    for(var i=0; i<test.length-1; i++){
        for( var j=i+1; j<test.length;j++){
            if(test[i]*test[j]==awdiz){
                console.log(test[i],test[j])
                flag=true;
            }
        }
    }
    if(flag==false){
        console.log("No 2 numbers when multiplied give the target ")
    }

}
findMulti(array2,target2)





