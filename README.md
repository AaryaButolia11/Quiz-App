# Quiz App with Light/Dark Theme

This is a fun and interactive quiz app built with HTML, CSS, and JavaScript. It allows users to answer questions on various topics, track their score, and toggle between light and dark themes. If the user answers all questions correctly, a confetti effect will be triggered to celebrate their perfect score.

## Features

- **Multiple Questions**: The app contains a set of general knowledge questions with multiple choice answers.
- **Light/Dark Theme Toggle**: Users can switch between a light and dark theme for a personalized experience.
- **Confetti Animation**: A fun confetti animation is triggered when the user scores a perfect score.
- **Responsive Design**: The app is designed to be responsive and works well on various screen sizes.
- **Score Tracking**: Displays the score at the end of the quiz and shows how many questions the user answered correctly.

## Demo

You can view a live demo of the app by visiting https://quiz-web-app-phi.vercel.app/

## Screenshots
![Screenshot 2025-05-08 150254](https://github.com/user-attachments/assets/1ce4e64e-42ce-47ea-a57e-f996559a4a39)
![Screenshot 2025-05-08 150303](https://github.com/user-attachments/assets/852d7bc2-3485-4616-910b-8ad88082fac6)
![Screenshot 2025-05-08 150315](https://github.com/user-attachments/assets/a6d085fd-63e5-4ec3-a07d-d184c1a0259a)
![Screenshot 2025-05-08 150333](https://github.com/user-attachments/assets/597e0b0d-e69d-4c4c-9146-75980d486845)
![Screenshot 2025-05-08 150408](https://github.com/user-attachments/assets/43bb55f1-94ad-48f1-a607-6149b2bc8ed9)
![Screenshot 2025-05-08 150418](https://github.com/user-attachments/assets/9c2d65dd-ecbb-49ee-a175-be610d1ccb0b)


## Technologies Used

- **HTML**: For the structure of the webpage.
- **CSS**: For styling the app and implementing light/dark themes.
- **JavaScript**: For the logic and interactivity, including quiz functionality, theme toggling, and confetti animation.
- **Canvas-Confetti**: A library used to trigger the confetti animation when the user scores a perfect score.

## How to Use

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/your-username/quiz-app.git
Features in Detail
1. Quiz Questions and Choices
The quiz contains a set of multiple-choice questions. The questions are shuffled each time the quiz is started to make it more interesting. Each question has four choices, and the user selects one to answer.

2. Light/Dark Theme Toggle
You can toggle between a light and dark theme by clicking the "Change Theme" button. The themes are applied globally across the page, and the design changes accordingly.

3. Confetti Animation
If you answer all questions correctly, a confetti animation will trigger, celebrating your perfect score. The confetti effect is powered by the canvas-confetti library.

4. Score Tracking
After completing the quiz, the score is displayed showing how many answers were correct. If the score is equal to the total number of questions, the confetti effect is triggered.


## Code Explanation
### HTML<br>
The index.html file contains the structure of the app, including the quiz container, the start button, next button, result container, and the theme toggle button.

### CSS
The styles.css file contains the styles for both the light and dark themes. The themes are switched by toggling a class on the <body> element.

### JavaScript
The script.js file contains the functionality of the quiz:

It handles the initialization and shuffling of questions.

It manages the display of questions and the selection of answers.

It tracks the score and displays it at the end.

It adds a confetti effect when the user scores a perfect score.

## How to Contribute
Fork the repository.

Create a new branch (git checkout -b feature-name).

Make your changes and commit (git commit -am 'Add new feature').

Push to the branch (git push origin feature-name).

Open a Pull Request.
