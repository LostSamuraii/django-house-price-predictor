// predictor/static/predictor/script.js
document.addEventListener('DOMContentLoaded', function() {
    const predictionForm = document.getElementById('predictionForm');

    if (predictionForm) {
        predictionForm.addEventListener('submit', async function(event) {
            event.preventDefault(); 

            const resultDiv = document.getElementById('predictionResult');
            resultDiv.innerHTML = '<span class="loading-message">Calculating estimate...</span>';
            resultDiv.className = 'mt-5 text-center'; // Reset classes, ensure it's centered

            const csrfTokenInput = document.querySelector('[name=csrfmiddlewaretoken]');
            if (!csrfTokenInput) {
                console.error('CSRF token not found in form!');
                resultDiv.innerHTML = '<strong>Error:</strong> CSRF token missing. Please refresh.';
                resultDiv.className = 'mt-5 text-center prediction-error';
                return;
            }
            const csrfToken = csrfTokenInput.value;
            
            const formData = new FormData(this);
            const data = {};
            formData.forEach((value, key) => {
                if (key === 'csrfmiddlewaretoken') return;

                if (key !== 'ocean_proximity' && value.trim() !== '' && !isNaN(parseFloat(value))) {
                    data[key] = parseFloat(value);
                } else {
                    data[key] = value;
                }
            });

            if (typeof predictUrl === 'undefined') {
                console.error('predictUrl is not defined.');
                resultDiv.innerHTML = '<strong>Error:</strong> Configuration error (predictUrl missing).';
                resultDiv.className = 'mt-5 text-center prediction-error';
                return;
            }

            try {
                const response = await fetch(predictUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRFToken': csrfToken
                    },
                    body: JSON.stringify(data)
                });

                const responseData = await response.json(); 

                if (!response.ok) {
                    throw new Error(responseData.error || `Server error: ${response.status}`);
                }

                if (responseData.prediction) {
                    resultDiv.innerHTML = `<strong>Estimated Property Value: $${parseFloat(responseData.prediction).toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</strong>`;
                    resultDiv.className = 'mt-5 text-center prediction-success'; 
                } else if (responseData.error) { 
                    resultDiv.innerHTML = `<strong>Error:</strong> ${responseData.error}`;
                    resultDiv.className = 'mt-5 text-center prediction-error'; 
                } else {
                    resultDiv.innerHTML = '<strong>Error:</strong> Unexpected response from server.';
                    resultDiv.className = 'mt-5 text-center prediction-error';
                }
            } catch (error) {
                console.error('Error submitting form:', error);
                resultDiv.innerHTML = `<strong>Error:</strong> ${error.message || "Could not connect or an unknown error occurred."}`;
                resultDiv.className = 'mt-5 text-center prediction-error';
            }
        });
    } else {
        console.error('Prediction form not found with ID: predictionForm');
    }
});