module.exports = function main(str) {
  var i;
  var sum = 0;
  for(i = 0; i < str.length; i++){
  	sum = parseInt(str[i]) + sum;
  }
  return sum;
};
