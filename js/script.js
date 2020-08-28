// Genero una gliglia 6x6, ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9 ( attrverso un API)

$(document).ready(function(){
    for(var i=0; i<=5; i++){
      // clonazione elementi
      var clone = $(".template div").clone();
      clone.addClass('contenuto');
      $(".containerClone").append(clone);
    }

    $('.containerClone div').on('click', oggettoCliccato); // chiamata alla funzione ad ogni click sugli elementi

    function oggettoCliccato(){
          var testo = $(this);
          $.ajax( // chiamata ajax attraverso jQuery
            {
              'url': "https://flynn.boolean.careers/exercises/api/random/int",
              'method': "GET",
              'success': function (risposta) {
                
                  if(!testo.hasClass('cliccato')){ // se non ha la classe cliccato esegui il codice sotto
                    testo.text(risposta.response);
                    if(risposta.response <= 5){
                      testo.addClass('minore').addClass('cliccato'); //.removeClass('maggiore')
                    }else{
                      testo.addClass('maggiore').addClass('cliccato'); //.removeClass('minore')
                    }
                  }else{
                    //alert('Hai già cliccato');
                    $('.dialogo').fadeIn(600);
                    $('.elimina_finestra').click(function(){
                      $('.dialogo').fadeOut(400);
                    })
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