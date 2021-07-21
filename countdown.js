const countdown = 
{
  display: document.body.querySelector( `#counter-display` ),
  step: () =>
  {
    setTimeout( () =>
    {
      updateCounter();
    }, 
    1000 
    );  
  }
};
function updateCounter()
{
  const __d = new Date();
  countdown.display.innerText = __d.getHours();
  countdown.step();
}
