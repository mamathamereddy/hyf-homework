const fibseq= [0 ,1]; // Initialize array!
function fib(n) {
for (let i = 2; i <= n; i++) {
  fibseq[i] = fibseq[i - 2] + fibseq[i - 1];  // Next fibonacci number = previous + one before previous
  fibseq.push(fibseq[i])  
}
//return fibseq
return fibseq[n-1]    //returning index
}       
console.log(fib(5));
 console.log(fib(8));