let submitBtn = document.getElementById('submit')
let feedback = document.getElementById('feedback')

submitBtn.addEventListener('click', function() {
    let confirmText = document.createElement('p')
    confirmText.innerHTML = 'Thank you for the feedback!'
    feedback.appendChild(confirmText)
})