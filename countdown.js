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
  countdown.display.innerText = `${__d.getHours()} : ${__d.getMinutes()} : ${__d.getSeconds()}`;
  countdown.step();
}
updateCounter();
