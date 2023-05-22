const input =  process.argv;

for(let i = 2; i < input.length; i++) {
  
  if (input[i] > 0 && input[i] !== undefined && !isNaN(input[i])) {
    setTimeout(() => {
      process.stdout.write('\x07');
      console.log(input[i]);
    }, input[i] * 1000);
  } 
 
}
