                var button = document.querySelector(".searchform-btn");
                var popup = document.querySelector(".modal-content");
                var checkin= document.getElementById("checkin-form");
                var form=document.querySelector("custom-form");
                var countInput=document.getElementById("adults-value");
                var bplus = document.querySelector('.sprite-plus');
                var bplus_kids = document.querySelectorAll('.sprite-plus')[1];
                var bminus_kids= document.querySelectorAll('.sprite-minus')[1];
                var bminus= document.querySelector('.sprite-minus');
    		    var value = document.getElementById("adults-value");
    		    var value2=document.getElementById("kids-value");
                button.addEventListener("click", function(event) {
    				// popup.classList.add("show");
    				// checkin.focus(); }
                if (!(popup.classList.contains('show'))) {
                	popup.classList.add("show");
                } else {
                	popup.classList.remove("show");
            	 }
            	});

    		    
				// bplus.addEventListener("click", function(event) {
				//  	if ((value.value || value2.value) < 10) {
				//  		value.value++;	
				//  	}
				 	
				//  }
				//  );

				bplus.addEventListener("click", function(event) {
						if (value.value < 10) {
						value.value++;
					}
					}
					);

				bplus.onselectstart = function(event){
					return false;
				}
				bminus.onselectstart = function(event) {
					return false;
				}
				bplus_kids.addEventListener("click", function(event) {
					if (value2.value < 10) {
						value2.value++;
					}
				}
				);
				bminus.addEventListener("click",function(event) {
					if (value.value > 0)  {
						value.value--;
					}
				}
				);
				bminus_kids.addEventListener("click",function(event) {
					if(value2.value > 0){
						value2.value--;
					}
					else if (value2.value == 0) {
						return false;
					}
				}
				);

				bminus_kids.onselectstart = function(event) {
					return false;
				}
				bplus_kids.onselectstart = function(event) {
					return false;
				}

				value.onkeydown = function(event) {
				event.preventDefault();
 				if (event.charCode && (event.charCode < 48 || event.charCode > 57 || event.charCode > 48)) {
 					return false;
 				}
 				};
 				value2.onkeydown=function(event) {
 				event.preventDefault();
 				if (event.charCode && (event.charCode < 48 || event.charCode > 57 || event.charCode > 48)) {
 					return false;
 				}
 				};




				 			
		
				

				//  while(i>value) {щт
  		// 		 i++;
  		// 		 alert(i);
				//  }
				// }
				// );

  				// 	return raz;
  				// 	}
  				// 	);

				// function raz() {
  		// 		var i = document.getElementById("adults-value").value;
  		// 		while(i<10) {
  		// 		alert(i);
  		// 		i++;
  		// 			}
				// } 	
     			// body...
     	



