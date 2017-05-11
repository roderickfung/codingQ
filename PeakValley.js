// 1D Extrema Method
// Since I don't have to care about the size of the castle (series of integers that make the peak or valley ), I figure I'll first shrink all duplicating landmass, then use a 0(n) method to find the number of castles I need to build.

arr = [1,3,4,5,3,2,3,4,4,6,6,6,6,6,4,2,2,2,1,3];
arr2 = [];

let getCastles = ( arr ) => {
  let nArr = [];
  let castles = [];

  if(arr.length != null) {
    // 1st for loop used to shrink land
    for(i=0; i< arr.length; i++){
      arr[i] != arr[i-1] ? nArr.push(arr[i]) : false
    }
    // iterate through shrunken land to find peaks and valleys
    for(i=0; i< nArr.length; i++){
      if( i === 0 ) {
        castles.push(nArr[0])
      } else {
        nArr[i] > nArr[i+1] && nArr[i] > nArr[i-1] ? castles.push(nArr[i]) : nArr[i] < nArr[i+1] && nArr[i] < nArr[i-1] ? castles.push(nArr[i]) : false;
      }
    }
  }
  console.log('You will want to build ' + castles.length + ' castles on this array of land.');
  return castles;
}

console.log(getCastles(arr));
console.log(getCastles(arr2));
