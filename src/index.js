
// You should implement your task here.

module.exports = function towelSort (matrix) {
		
	if (matrix) {
		let result = [];
		for (let i = 0; i < matrix.length; i++) { // переворачиваем каждый чётный массив
			if ((i % 2) !== 0) {
			  matrix[i] = matrix[i].reverse(); 
  			}
    	}

  		for (let i = 0; i < matrix.length; i++) {    // сливаем массивы в один
			  for (let j = 0; j < matrix[i].length; j++) {
				  result.push(matrix[i][j])
			  }
  		}
  	return result
	}
	else {
		return []
	}

}
