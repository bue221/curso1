var funcion = (event)=>{
    event.preventDefault();
    const serviceID = 'default_service';
    const templateID = 'template_0tlxtve';

    var email = document.getElementById('email').value;
    var contact = document.getElementById('contact').value;
    var name = document.getElementById('name').value;
    
    
    emailjs.send(serviceID,templateID,{email,contact,name})
        .then(function(res){
            alert('ha enviado sus datos');
        },function(error){
            alert('Error');
        });

}

