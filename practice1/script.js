const addid = document.getElementById('button-id').addEventListener('click',() => {

    
    const input11 = document.getElementById('input1');
    const inputValue11 = input11.value;
    const base = parseFloat(inputValue11)
    // console.log(inputValue11);
    // 
    const input22 = document.getElementById('input2');
    const inputValue22 = input22.value;
    const base1 = parseFloat(inputValue22)
    // console.log(inputValue22);

    const result = 0.5 * base * base1;
    // return result;
    console.log(result);
    const triangelspan = document.getElementById('triangelArea');
    triangelspan.innerHTML = result;
    input11.value="";
    input22.value="";
});