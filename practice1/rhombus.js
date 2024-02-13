const myNewid = document.getElementById('rhombusButton').addEventListener('click', () => {
    const majorvalue = document.getElementById('rhombosD1');
    const major = majorvalue.value;
    const majorfloat = parseFloat(major);
    
    

    const majorvalue1=document.getElementById('rhombosD2');
    const major1 = majorvalue1.value;
    const majorfloat1 = parseFloat(major1);
    

    const result = 0.5 * majorfloat * majorfloat1;

    const area5 = document.getElementById('rhombusArea');
    area5.innerHTML = result;

    majorvalue.value ='';
    majorvalue1.value ='';
}) 
