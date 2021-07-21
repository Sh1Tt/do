const countdown = 
{
  display: document.body.querySelector( `#counter-display` ),
  step: () =>
  {
    setTimeout( () =>
    {
      updateCounter();
    }, 
    100
    );  
  },
  state:
  {
    off: `Countdown start: 1st of July ${new Date().getFullYear() + 1}`
  },
  target:
  {
    day: 24 - 1,
    month: 7 - 1
  }
};
function updateCounter()
{
  const __d = new Date();
  const dayToGo = () => countdown.target.day - __d.getDate();
  const hourToGo = () => dayToGo() * 24;
  const doubleDigits = n => ( n.length === 1 ? '0' + n : n );
  countdown.display.innerText = ( ( __d.getMonth() !== countdown.target.month ) || ( __d.getDate() > countdown.target.day ) ) ? countdown.state.off : `${doubleDigits( ( 23 - __d.getHours() ) + hourToGo() )} : ${doubleDigits( 59 - __d.getMinutes() )} : ${doubleDigits( 59 - __d.getSeconds() )}`;
  countdown.step();
}
updateCounter();
