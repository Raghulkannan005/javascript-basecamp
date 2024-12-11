function verify() {
    const inputElement = document.getElementById('text-input');
    const input = inputElement.value;
    const result = document.getElementById('result');

    if (input == "") {
        alert("Please input a value");
    } else if (input.length == 1) {
        result.innerHTML = `${input} is a palindrome`;
    } else {
        let filteredInput = input.toLowerCase().replace(/[^a-z0-9]/g, '');
        let reverse = filteredInput.split('').reverse().join('');
        if (filteredInput == reverse) {
            result.innerHTML = `${input} is a palindrome`;
        } else {
            result.innerHTML = `${input} is not a palindrome`;
        }
    }
    document.getElementById('text-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById('check-btn').click();}
});
}