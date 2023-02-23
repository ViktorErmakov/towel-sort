
// You should implement your task here.

module.exports = function towelSort (matrix) {
  
  let result = [];

  if(matrix === undefined){return result}

  for (let index = 0; index < matrix.length; index++) {
    if((index === 0) || (index % 2 === 0)){
      result = result.concat(matrix[index]);
    }else{
      result = result.concat(matrix[index].reverse());
    }
  }

  console.log(result);
  
  return result;
}

module.exports();