function bookClass(className) {
    const studentName = prompt('Enter your name:');
    const studentEmail = prompt('Enter your email:');

    if (studentName && studentEmail) {
        alert(`Thank you, ${studentName}. You have successfully booked the class: ${className}.`);

        // Simulating sending data to a Telegram bot
        const botToken = 'YOUR_BOT_TOKEN';
        const chatId = 'YOUR_CHAT_ID';
        const message = `New Booking:\nName: ${studentName}\nEmail: ${studentEmail}\nClass: ${className}`;

        fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ chat_id: chatId, text: message }),
        });
    } else {
        alert('Booking canceled. Please fill in all details.');
    }
}
