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
  const doubleDigits = n => ( n.length == 1 ? `0${n}` : n );
  const daysBefore = countdown.target.day - __d.getDate();
  const toGo = 
  {
    Hours: () => doubleDigits( ( daysBefore * 24 ) + ( 23 - __d.getHours() ) ),
    Minutes: () => doubleDigits( 59 - __d.getMinutes() ),
    Seconds: () => doubleDigits( 59 - __d.getSeconds() )
  };
  countdown.display.innerText = ( ( __d.getMonth() !== countdown.target.month ) || ( __d.getDate() > countdown.target.day ) ) ? countdown.state.off : `${toGo.Hours()} : ${toGo.Minutes()} : ${doubleDigits( 59 - __d.getSeconds() )}`;
  countdown.step();
}
updateCounter();
