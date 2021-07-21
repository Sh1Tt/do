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
  }
};
function updateCounter()
{
  const __d = new Date();
  const _birth = 
  {
    day: 24 - 1,
    month: 7
  };
  const dayToGo = () => _birth.day - __d.getDate();
  const hourToGo = () => dayToGo() * 24;
  countdown.display.innerText = `${23 - __d.getHours() + hourToGo()} : ${59 - __d.getMinutes()} : ${59 - __d.getSeconds()}`;
  countdown.step();
}
updateCounter();
