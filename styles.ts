const styles = css`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,900&display=swap");

  body {
    font-family: Poppins;
    text-align: center;
    background: blue;
  }

  .container {
    height: 91vh;
    display: flex;
    flex-direction: column;
    align-content: space-between;
    margin: 1%;

    background: #a9a9a9;
  }

  .container header {
    height: 10vh;
    font-size: 3em;
    margin-bottom: 4%;
  }

  .container header h1 {
    background-image: linear-gradient(
      to left,
      yellow,
      violet,
      indigo,
      blue,
      green,
      orange,
      red
    );

    -webkit-background-clip: text;
    color: transparent;
    margin: 1%;
  }

  .container main {
    height: 68vh;
    margin: 5%;
  }

  .container main textarea {
    margin-top: 2%;
    resize: none;
    height: 40%;
    width: 100%;
  }

  .container main .input {
    margin: 2%;
  }

  .container main .input label input {
    margin: 2%;
  }

  .container footer {
    height: 10vh;
    margin-bottom: 4%;
  }

  .secondary_btn {
    margin: 2%;
    border-color: lightgreen;
    border-radius: 15%;
  }

  #principal_btn {
    border-radius: 10px;
    color: red;
  }
`;

function css(style: TemplateStringsArray) {
  return style.join("");
}

export default styles;
