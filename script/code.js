function countTruthyValues() {
    // Get the input values from the textarea
    const values = document.getElementById('valuesInput').value.split(',');

    // Count the number of truthy values
    console.log(values.filter( value=> value == true).length())
    const truthyCount = values.reduce((count, value) => {
        return count + (value.trim() ? 1 : 0);
    }, 0);

    // Display the result
    document.getElementById('result').textContent = `Number of truthy values: ${truthyCount}`;
}
