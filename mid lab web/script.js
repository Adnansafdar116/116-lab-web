document.querySelectorAll('.faq').forEach(faq => {
    faq.addEventListener('click', function () {
        if (this.classList.contains('active')) {
            this.classList.remove('active');
        } else {
            document.querySelectorAll('.faq').forEach(innerFaq => {
                innerFaq.classList.remove('active');
            });
            this.classList.add('active');
        }
    });
});

document.querySelectorAll('.faq-toggle').forEach(button => {
    button.addEventListener('click', function (e) {
        e.stopPropagation();
        const parentFaq = this.parentElement;
        parentFaq.remove();
    });
});

function addNewFaq() {
    const question = document.getElementById('new-question').value;
    const answer = document.getElementById('new-answer').value;

    if (!question || !answer) return;

    const faqContainer = document.querySelector('.faq-container');

    const faqDiv = document.createElement('div');
    faqDiv.className = 'faq active';
    faqDiv.innerHTML = `
        <h3 class="faq-title">${question}</h3>
        <p class="faq-text" style="display: none;">${answer}</p>
        <button class="faq-toggle">
            <i class="fas fa-chevron-down"></i>
            <i class="fas fa-times"></i>
        </button>
    `;

    faqContainer.appendChild(faqDiv);

    document.getElementById('new-question').value = '';
    document.getElementById('new-answer').value = '';

    faqDiv.addEventListener('click', function () {
        if (this.classList.contains('active')) {
            this.classList.remove('active');
        } else {
            document.querySelectorAll('.faq').forEach(innerFaq => {
                innerFaq.classList.remove('active');
            });
            this.classList.add('active');
        }
    });

    faqDiv.querySelector('.faq-toggle').addEventListener('click', function (e) {
        e.stopPropagation();
        faqDiv.remove();
    });
}