const pantagonid = document.getElementById('PantagonButton').addEventListener('click', () => {
    const pantagonP =document.getElementById('pantagonA');
    const pantagonvalue = pantagonP.value;
    // console.log(pantagonvalue);
    const pantaflot = parseFloat(pantagonvalue);

    const pantagonA = document.getElementById('pantagonP');
    const pantagonvalue1 = pantagonA.value;
    
    const pantafloat1 = parseFloat(pantagonvalue1);

    const result = 0.5 * pantaflot * pantafloat1;

    const area6 = document.getElementById('PantagonArea')
    area6.innerHTML = result;

    pantagonP.value ="";
    pantagonA.value = "";


})