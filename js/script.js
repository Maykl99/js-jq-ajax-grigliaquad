/* Descrizione:
Generare una griglia 6x6 (36 boxes), ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9 (scegliere API opportuna).
Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
Il numero ottenuto appare al centro del quadrato. */
$(document).ready(function(){
    for(var i=0; i<=5; i++){
      var clone = $(".template div").clone();
      clone.addClass('contenuto');
      $(".containerClone").append(clone);
    }

    $('.containerClone div').on('click', oggettoCliccato);

    function oggettoCliccato(){
          var testo = $(this);
          $.ajax(
            {
              'url': "https://flynn.boolean.careers/exercises/api/random/int",
              'method': "GET",
              'success': function (risposta) {
                
                  if(!testo.hasClass('cliccato')){
                    testo.text(risposta.response);
                    if(risposta.response <= 5){
                      testo.addClass('minore').removeClass('maggiore').addClass('cliccato');
                    }else if(risposta.response > 5){
                      testo.addClass('maggiore').removeClass('minore').addClass('cliccato');
                    }
                  }else{
                    alert('Hai già cliccato');
                  }
                  
                
              },
              'error': function(){
                alert("Errore sconosciuto");
              }
            }
          );
    };
      
  });































  
    /* for(var i=0; i<36; i++){
      var newDiv = document.createElement("div");
      newDiv.className='contenuto';
      var newContent = document.createTextNode("ciao"); 
      newDiv.appendChild(newContent);  
      var currentDiv = document.querySelector("container");
      document.body.insertBefore(newDiv, currentDiv); 
    } */