const rectangle = document.getElementById('rectangleButton').addEventListener('click',() => {
    const rectanglelength = document.getElementById('rectangleLength');
    const rectangleValue = rectanglelength.value;
    const height= parseFloat(rectangleValue);
    // console.log(height);

    const rectanglewidth = document.getElementById('rectanglewidth');
    const rectanglevalues = rectanglewidth.value;

    const width = parseFloat(rectanglevalues);
    // console.log(width);

    const multiple = height * width;
    // console.log(multiple);

    const areas = document.getElementById('rectangelArea');
    areas.innerHTML = multiple;

    rectanglelength.value = '';
    rectanglewidth.value = '';

});
