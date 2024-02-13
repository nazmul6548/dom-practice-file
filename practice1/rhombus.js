
const newnameid = document.getElementById('rhombusButton').addEventListener('click', () => {
    const rhombus = document.getElementById('ellipseMajjor');
    
    const rhombusvalue = rhombus.value;
    // console.log(rhombusvalue);
    const rhombusfloat = parseFloat(rhombusvalue);
    // console.log(rhombusfloat);


    const rhombusminors  = document.getElementById('ellipseMinor');
    const rhombusvalue1 = rhombusminors.value;
    const rhombusfloat1 = parseFloat(rhombusvalue1);
    // console.log(rhombusfloat1);

    const result = 0.5 * rhombusfloat * rhombusfloat1;

    const areas12 = document.getElementById('rhombusArea');
    areas12.innerHTML=result;

    rhombus.value = "";
    rhombusminors.value = "";
});