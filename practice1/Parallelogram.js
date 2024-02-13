const mainName = document.getElementById('ParallelogramButton').addEventListener('click', () => {
    const paralelogramBase = document.getElementById('parallelogramBase');
    const base = paralelogramBase.value;
    const paral = parseFloat(base);
    console.log(paral);

    const paralelogramHeigh =  document.getElementById('parallelogramHeight');
    const height = paralelogramHeigh.value;
    const paral2 = parseFloat(height);
    console.log(paral2);

    const result = paral * paral2;
    console.log(result);
});