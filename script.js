document.addEventListener('DOMContentLoaded', () => {
    // List of button IDs and the associated alert messages
    const buttonsInfo = [
        { id: 'indexButton', message: 'You clicked the Index button!' },
        { id: 'aboutButton', message: 'You clicked the About button!' },
        { id: 'servicesButton', message: 'You clicked the Services button!' },
        { id: 'portfolioButton', message: 'You clicked the Portfolio button!' },
        { id: 'contactButton', message: 'You clicked the Contact button!' }
    ];

    // Function to add an event listener to a button
    function addButtonListener(buttonId, alertMessage) {
        const button = document.getElementById(buttonId);
        if (button) {
            button.addEventListener('click', () => {
                alert(alertMessage);
            });
        }
    }

    // Apply event listeners to each button
    buttonsInfo.forEach(button => addButtonListener(button.id, button.message));
});

