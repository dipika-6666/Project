// Form validation and submission
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const yearJoined = document.getElementById('year-joined').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    const output = `
        <p>Username: ${username}</p>
        <p>Email: ${email}</p>
        <p>Year Joined: ${yearJoined}</p>
    `;
    document.getElementById('form-output').innerHTML = output;
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Load more content dynamically
document.getElementById('load-more').addEventListener('click', function() {
    const moreContent = `
        <p>Our team of experts works tirelessly to develop cutting-edge financial products that cater to the diverse needs of our clients. We understand that the financial industry is constantly evolving, and we are committed to staying ahead of the curve by leveraging the latest technologies and industry best practices. From innovative investment solutions to comprehensive risk management tools, Blast Fintech is dedicated to helping you achieve financial success.</p>
    `;
    document.getElementById('more-content').innerHTML = moreContent;
    this.style.display = 'none'; // Hide the button after loading more content
});
