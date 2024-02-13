const mainName1 = document.getElementById('EllipseButton').addEventListener('click',() => {
    const ellipseMajor = document.getElementById('ellipseMajjor');
    const value = ellipseMajor.value;

    const float = parseFloat(value);

    const ellipseMinor = document.getElementById('ellipseMinor');
    const value2 = ellipseMinor.value;
    const float2 = parseFloat(value2);

    const result = 3.1418 * float * float2;

    const areas1 = document.getElementById('ellipseArea');
    areas1.innerHTML = result;

});