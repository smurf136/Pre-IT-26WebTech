(() => {
  const payment = document.querySelector("#payment");
  const aboutme = document.querySelector("#aboutme");
  function hoverover(event){
    event.target.style.background = "white";
    console.log();
  }
  function hoverout(event){
    event.target.style.background = "";
  }
  function paymentDialog(){
    alert("My Promtpay");
  }
  function aboutmeDialog(){
    alert("Hello It's me");
  }
  function mouseover(){
    document.getElementById("footer1").style.backgroundColor = "#0080FF";
  }
  function run(){
    payment.addEventListener('click', paymentDialog);
    aboutme.addEventListener('click', aboutmeDialog);
    payment.addEventListener('mouseover', hoverover)
    payment.addEventListener('mouseout', hoverout)
    aboutme.addEventListener('mouseover', hoverover)
    aboutme.addEventListener('mouseout', hoverout)
  }
  run();
})();