# Chat with PDF

## Description

**Chat with PDF** is a web application that allows users to upload PDF files and interact with their content through a chatbot interface. This project combines Flask for the backend, Tailwind CSS for styling, and a conversational AI for extracting and responding to queries about the uploaded documents.

## Technologies Used

- **Backend**: Flask
- **Frontend**: Tailwind CSS, HTML, JavaScript
- **PDF Processing**: PyMuPDF
- **Chatbot Integration**: Custom NLP (Natural Language Processing) implementation

## Installation

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

- Python 3.6+
- pip (Python package installer)
- Node.js (for Tailwind CSS)

### Steps

1. **Clone the Repository**

   ```sh
   git clone https://github.com/your-username/chat-with-pdf.git
   cd chat-with-pdf
   ```
2. **Install Python Dependencies**

   ```sh
   pip install -r requirements.txt
   ```
3. **Install Tailwind CSS**

   ```sh
   npm install -D tailwindcss
   npx tailwindcss init
   ```   
4. **Build Tailwind CSS**

   ```sh
   npm run build:css
   ```
5. **Run the Application**

   ```sh
   flask run
   ```
Open your web browser and go to `http://127.0.0.1:5000`.


## Usage

Upload PDF: Use the file upload section on the homepage to select and upload PDF files.

Get Answers: Type questions related to the PDF content and receive answers from the chatbot.