function randomZahl() {
    let zufall = Math.random() * 100
        return Math.floor(zufall);
  }
  let eingabe;
  let Zahl = randomZahl();
  while (eingabe != Zahl) {
    eingabe = window.prompt();
    
      if (eingabe > Zahl) {
    window.alert("Die Zahl ist kleiner!");
      }
    
     if (eingabe < Zahl) {
       window.alert("Die Zahl ist größer!");
     }
    
      if (eingabe == Zahl) {
         window.alert("Du hast die Zahl erraten! Glückwunsch!");
      }
  
  }