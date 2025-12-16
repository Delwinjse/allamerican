document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('debtSlider');
    const display = document.getElementById('debtValueDisplay');

    // Function to format the number as currency (e.g., 10000 -> $10,000)
    const formatCurrency = (number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(number);
    };

    // Initial display value (in case the browser saves the previous state)
    display.textContent = formatCurrency(slider.value);

    // Event listener to update the display when the slider value changes
    slider.addEventListener('input', function() {
        const debtValue = parseInt(this.value);
        const maxValue = parseInt(this.max);

        if (debtValue === maxValue) {
            // If the slider is at the max value (100000), show $100,000+
            display.textContent = formatCurrency(maxValue) + '+';
        } else {
            // Otherwise, show the formatted value
            display.textContent = formatCurrency(debtValue);
        }
    });
});