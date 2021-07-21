const __d = new Date();
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
    Off: `Countdown start: 1st of July ${__d.getFullYear() + 1}`
  },
  target:
  {
    day: 24,
    month: 7
  }
};
function updateCounter()
{
  const dayToGo = () => countdown.target.day - __d.getDate();
  const hourToGo = () => dayToGo() * 24;
  countdown.display.innerText = ( ( ( __d.getMonth() + 1 ) === countdown.target.month ) && ( __d.getDate() + 1 < countdown.target.day ) ) ? `${23 - __d.getHours() + hourToGo()} : ${59 - __d.getMinutes()} : ${59 - __d.getSeconds()}` : countdown.state.Off;
  countdown.step();
}
updateCounter();
