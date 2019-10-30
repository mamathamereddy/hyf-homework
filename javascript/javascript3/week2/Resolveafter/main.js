//Promise that resolves after set time
function resolveAfterTimeOut(resolveAfter){
  return new Promise(function(resolve,reject){
    setTimeout(() => {
    resolve('I am called asynchronously from resolve after Settimeout function')
  }, resolveAfter * 1000);
})
}
resolveAfterTimeOut(6).then(function(value) {
  console.log(value);
}) 
