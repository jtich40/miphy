// global DOM variables
let submitBtn = document.getElementById('submit')
let feedback = document.getElementById('feedback')

// event listener to provide confirmation message when user submits feedback
submitBtn.addEventListener('click', function() {
    let confirmText = document.createElement('p')    
    confirmText.innerHTML = 'Thank you for the feedback!'
    feedback.appendChild(confirmText)
    
    // confirmation message is removed after 2 seconds
    setTimeout(function() {
        confirmText.setAttribute('class', 'hide')
    },2000)
})
