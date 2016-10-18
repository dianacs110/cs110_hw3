const reverse = function(arr) {
let reversedArray = [];
for ( let i = 0 ; i <arr.length; i = i + 1 )
{
reversedArray[reversedArray.length] = arr[arr.length-(i+1)];
};
return reversedArray;
}; 
const reversedArray = reverse([1,2,3,4,5,6,7]);
console.log(reversedArray);
