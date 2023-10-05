# Quiz App from YouTube Video Transcripts

This is a simple quiz application built with React that generates multiple-choice questions from YouTube video transcripts using ChatGPT. It can be used to create quizzes for various topics, including AWS preparation or any other subject with video content.

## Features

- Supports multiple-choice questions.
- Easy setup and customization.

## Prerequisites

Before you begin, ensure you have the following installed:

Before you get started, make sure you have the following prerequisites installed:

Node.js and npm (Node Package Manager): Ensure you have Node.js and npm installed on your system. You can download them from nodejs.org.

React.js: You'll need React.js for the quiz app. If you haven't installed React.js yet, you can do so by following the instructions in the React documentation.

Transcript from Your Lesson: Obtain the transcript from the lesson or course content you are studying. This transcript will be used to generate quiz questions.

ChatGPT Input Format: To create quiz questions using ChatGPT, use the following format as input:

I am learning about {your topic}. Please create 10 multiple-choice questionnaires in this format so that I can feed it to the quiz app and test myself:

[
  {
    "question": //place your question here,
    "options": [
      //list your 4 answer options here
    ],
    "correctAnswer": //index of the correct answer (keep it random),
    "explanation": //provide an explanation of why the correct answer is correct
  },
  //repeat the above format for each question
]

//give your transcript here



#Command
- npm install
- npm start