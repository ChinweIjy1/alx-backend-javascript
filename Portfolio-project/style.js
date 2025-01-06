// Navigation toggle for small screens
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Quiz Section
const startQuizButton = document.getElementById('startQuiz');
const quizContainer = document.getElementById('quizContainer');
const quizOptions = document.querySelectorAll('.quiz-option');
const quizFeedback = document.getElementById('quizFeedback');

startQuizButton.addEventListener('click', () => {
  quizContainer.classList.remove('hidden');
});

quizOptions.forEach(option => {
  option.addEventListener('click', (e) => {
    const isCorrect = e.target.dataset.answer === 'correct';
    quizFeedback.textContent = isCorrect ? 'Correct! Well done!' : 'Wrong. Try again.';
    quizFeedback.style.color = isCorrect ? 'green' : 'red';
  });
});

// Community Contributions Section
const communityInput = document.getElementById('communityInput');
const submitCommunityButton = document.getElementById('submitCommunity');
const postsList = document.getElementById('postsList');

submitCommunityButton.addEventListener('click', () => {
  const postText = communityInput.value.trim();
  if (postText) {
    const newPost = document.createElement('li');
    newPost.textContent = postText;
    postsList.appendChild(newPost);
    communityInput.value = '';
  } else {
    alert('Please enter a tip before submitting.');
  }
});

// Contact Section
const contactForm = document.getElementById('contactForm');
const contactFeedback = document.getElementById('contactFeedback');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  contactFeedback.textContent = 'Thank you for your message! We will get back to you soon.';
  contactFeedback.style.color = 'green';
  contactForm.reset();
});
