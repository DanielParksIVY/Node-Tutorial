document.getElementById('apiBtn').addEventListener('click', async () => {
    try {
        const response = await fetch('/api');
        const data = await response.json();
        document.getElementById('apiMessage').textContent = data.message;
    } catch (err) {
        console.error(err);
    }
});