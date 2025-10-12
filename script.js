document.getElementById('year').textContent = new Date().getFullYear();

function scrollToSection(id){
  const el = document.getElementById(id);
  if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
}

function handleSubmit(e){
  e.preventDefault();
  const form = document.getElementById('leadForm');
  const data = {
    name: form.name.value,
    email: form.email.value,
    phone: form.phone.value,
    service: form.service.value,
    message: form.message.value,
    time: new Date().toISOString()
  };
  console.log('Lead submitted', data);
  alert('Thank you! Your inquiry has been received. We will contact you within 24 business hours.');
  form.reset();
}
