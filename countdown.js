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
  countdown.display.innerText = ( ( __d.getMonth() !== countdown.target.month ) || ( __d.getDate() > countdown.target.day ) ) ? countdown.state.off : `${23 - __d.getHours() + hourToGo()} : ${59 - __d.getMinutes()} : ${59 - __d.getSeconds()}`;
  countdown.step();
}
updateCounter();
