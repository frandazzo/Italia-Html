$(document).ready(function () {

    
    $('#regioni path').on('click' , function (){
        var regione = $(this).attr('id');
        window.location.replace('regioni/'+regione+'.html')
    });
    
    $('.indietro').on('click', function () {
         window.location.replace('../index.html')
    });
	
	$('#italy path').hover(function(){
        var provincia = $(this).attr('id');
        var regione = $(this).closest('g').attr('id');
        $('.provincia').html('<p>Provincia: '+provincia+' • Regione: '+regione+'</p>')
    });

    
  
    
    
    $('#italy path').on('click' , function () {
    
        if($(this).attr('id') == 'lecce'){
           $(this).css({
                fill:'pink',
                stroke: '#333'
           });
        }
    
    });
	
	 $('#container path').on('click' , function () {
    
        if($(this).attr('id') == 'lecce'){
           $(this).css({
                fill:'pink',
                stroke: '#333'
           });
        }
    
    });
	
	//per ogni elemento nella variabile data devo colorare l'elemnto
    $.each(data, function(index,elem){
		
		var selector = '#' + elem.name;
		
		//imposto il campo data-value all'oggetto path con quel nome
		$(selector).attr("data-value", elem.value).attr("data-color", getColor(elem.value));
		//coloro l'elemento che mi serve
		$(selector).css({
                fill : getColor(elem.value),
                stroke: '#333'
           });
		   
		   var elemToAdd =  "";
		   
		   if ($('#container').hasClass('italy')){
			
				 elemToAdd = "<a href='regioni/" +  elem.name + ".html'>" + elem.name + ": <b> "+ elem.value + "\%</b></a></br>" 
			
			}else{
				
				 elemToAdd = "<a>" + elem.name + ": <b> "+ elem.value + "\%</b></a></br>" 
			}
				
				
				
				
		  
		 //aggiungo l'informazione al div della provincia in questione
		 $('.data-all').append($(elemToAdd));
		
	});
    
	
	function getColor(value){
		
		var value1 = parseFloat(value);
		
		if (value1 < 13)
			return "gray";
		
		if (value1 >= 13 && value1 < 20 )
			return "red";
		
		if (value1 >= 20 && value1 < 26 )
			return "orange";
		
		if (value1 >= 26 && value1 < 33 )
			return "yellow";

		if (value1 >= 33 )
			return "green";
		
		
		
	}
	
	
	  $('#container path').hover(function(){
        var elem = $(this).attr('id');
		
	
		$('.data').html('<a>'+elem+': ' +$(this).attr('data-value') +'% </a>')
        
    });
    
}) 