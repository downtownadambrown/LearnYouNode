let sum = 0;

for (let i = 2; i < process.argv.length; i++){
    const temp = Number(process.argv[i]);
    if (!isNaN(temp)) sum += temp;
    else console.log('nan nigga');
}
console.log(sum);
