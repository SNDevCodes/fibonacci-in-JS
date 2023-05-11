function fibo(a){
let output = [];
    if(a === 1){
        output = [0];
        alert(`For the input of ${a}, the output is :- ${output}`);
    }
    else if(a == 2){
        output = [0,1];
        alert(`For the input of ${a}, the output is :- ${output}`);
    }
    else{
        output = [0,1];
        for (let i = 2; i < a; i++) {
        output.push((output[output.length-1]) + (output[output.length-2]));
        }
        alert(`For the input of ${a}, the output is :- ${output}`);
    }
    }

fibo(25)
