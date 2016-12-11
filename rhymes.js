window.onload = function (e) {
  console.log("running");
  let msg = new SpeechSynthesisUtterance(`
      When it comes to get, I push hard like a pusher,,
      Cooking up in bash, something sweet for my stash,,
      I stay committed to push code that gets you twisted,,,,
      If you break my license, you’ll find yourself in crisis,
      I'll hide like a dot directory
      calculating trajectories
      that will leave you headless
      `);
  window.speechSynthesis.speak(msg);
}