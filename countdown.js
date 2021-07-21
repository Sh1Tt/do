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
//const doubleDigits = n => ( n.length == 1 ? `0${n}` : `${n}` );
  const daysBefore = countdown.target.day - __d.getDate();
  const toGo = 
  {
    Hours: () => ( daysBefore * 24 ) + ( 23 - __d.toLocaleTimeString('nl-NL', { hour: "2-digit" } ) ),
    Minutes: () => __d.toLocaleTimeString('nl-NL', { minute: "2-digit" } ),
    Seconds: () => __d.toLocaleTimeString('nl-NL', { second: "2-digit" } )
  };
  countdown.display.innerText = ( ( __d.getMonth() !== countdown.target.month ) || ( __d.getDate() > countdown.target.day ) ) ? countdown.state.off : `${toGo.Hours()} : ${toGo.Minutes()} : ${toGo.Seconds()}`;
  countdown.step();
}
updateCounter();
