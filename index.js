function handleKeyPress(event) {
    if (event.keyCode === 13) {
      const inputField = document.getElementsByClassName('input')[0]; // Access the first input element
      let enteredName = inputField.value; // Get the value using 'value'
      window.location.href = 'Letter.html';
    }
  }

  
  // Attach the event listener to the first input element with the class 'input'
  document.getElementsByClassName('input')[0].addEventListener('keypress', handleKeyPress);
// Get the h1 element within the 'main-container' class


//   const form = document.getElementsByClassName('.answer > form');

//   form.addEventListener('submit', (event) => {
//     event.preventDefault(); // Prevent default form submission

//     const selectedSong = document.querySelector('input[name="yesno"]:checked').value;

//     if (selectedSong === 'yes') {
//       playSong('images/Ed Sheeran - Perfect ! English Song.mp3'); // Replace with your Yes song file path
//     } else if (selectedSong === 'no') {
//       playSong('images/Jag suna suna lage.mp3'); // Replace with your No song file path
//     } else {
//       // Handle the case where no checkbox is selected
//       alert('Please select an option before submitting.');
//       return;
//     }
//   });

//   function playSong(songUrl) {
//     const audio = new Audio(songUrl);
//     audio.play();
//   }
  function checkYes() {
    // You can customize the URL to redirect to for 'Yes'
    window.location.href = 'yes.html';
}

function checkNo() {
  var elements = document.getElementsByClassName('Change');
  for (var i = 0; i < elements.length; i++) {
    elements[i].innerHTML = 'You Can\'t Say No, Cutie 😔';
  }

  var elements2 = document.getElementsByClassName('Change2');
  for (var i = 0; i < elements.length; i++) {
    elements2[i].innerHTML = 'I am asking you again Can We Go for a Date?? 💗';
  }
}


function handleFormSubmit() {
    const yesCheckbox = document.querySelector('input[value="yes"]');
    const noCheckbox = document.querySelector('input[value="no"]');

    if (yesCheckbox.checked) {
        window.location.href =  'yes.html'|| 'Letter.html';
        return false; // prevent form submission
    } else if (noCheckbox.checked) {
        window.location.href = 'no.html' || 'Letter.Html';
        return false; // prevent form submission
    }

    // If neither checkbox is checked, allow form submission
    return true;
}