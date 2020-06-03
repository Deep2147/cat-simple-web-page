var btn = document.getElementById('btnsub');
$(document).ready(function(){

	$("#btn").click(savetols);
});

function savetols() {
	var voices = document.getElementsByName('voice');
	var choice = null;
	var urgent = "no";


	voices.forEach((voice) => {
                if (voice.checked) {
                    
                    choice = voice.value;

                }

   
         
})
	var box = document.getElementById('box');      
               if(box.checked){
               	urgent = "yes";
               	

			   }
			  
			   localStorage.setItem("voice",choice);
			   localStorage.setItem("urgent",urgent);
	

    }
 
