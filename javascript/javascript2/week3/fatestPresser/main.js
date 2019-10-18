const button = document.getElementById ('btn1');

const input = document.getElementById ('input');

const s = document.getElementById ('S-count');
const l = document.getElementById ('L-count');

const sresult = document.getElementById ('S-result');
const lresult = document.getElementById ('L-result');

let scount = 0;
let lcount = 0;

//When button is clicked, getting the value of the input, That value will be the amount of time the game should run.
button.addEventListener ('click', function () {
  let time = input.value;
  setTimeout (selectWinner, time * 1000); //Set a timeout for the time specified by the user.

  function selectWinner () {
    if (scount > lcount) {
      sresult.textContent = 'won the game';
      const confettiSettings = { target: 'my-canvas-s' };
      const confetti = new ConfettiGenerator(confettiSettings);
      confetti.render();
    } else if (lcount > scount) {
      lresult.textContent = 'won the game';
      const confettiSettings = { target: 'my-canvas-l' };
      const confetti = new ConfettiGenerator(confettiSettings);
      confetti.render();
    } else if ((lcount = scount)) {
      sresult.textContent = 'The game is draw';
      lresult.textContent = 'The game is draw';
      const confettiSettings = { target: 'canvas-section' };
      const confetti = new ConfettiGenerator(confettiSettings);
      confetti.render();
      
    }
    document.removeEventListener ('keypress', pressed);
  }

  // event listener  when any key is pressed
  document.addEventListener ('keypress', pressed);

  function pressed (e) {
    let key = e.key.toLowerCase ();
    if (input.value) {
      if (key === 's') {
        //counter for how many times l and s was pressed.
        scount++;
        s.textContent = scount;
      } else if (key === 'l') {
        lcount++;
        l.textContent = lcount;
      }
    }
  }

  //restart or Start a new game
  const restart = document.getElementById ('btn2');

  restart.addEventListener ('click', () => {
    window.location.reload ();
  });

  // Countdown to end of game
  const msg = document.getElementById ('text-p');

  function Timer () {
    time--;
    msg.textContent = time 
    if (time === 0) {
      clearInterval (inter);
      msg.textContent = 'Game Over !';
    } else if (input.value == '') {
      clearInterval (inter);
      msg.textContent = 'Enter the time to run the game';
    }
  }
  const inter = setInterval (Timer, 1000);//update the changed value with this interval(1000 millsec)
})
