function calc() {
  var res=0;
  var opt = $("input[name='opt']:checked").val();
  
    if (!($("input[name='Стрижка']").is(":checked")) && !($("input[name='Окрашивание']").is(":checked")) && !($("input[name='Завивка']").is(":checked")) && !($("input[name='Прическа']").is(":checked"))) {
    res=0;
    alert( "Выберите, пожалуйста, услуги" );
    

  }
  else{
  if (($("input[name='Стрижка']").is(":checked")) && (opt == "Короткие")) {
    res += 500;
  }
  if (($("input[name='Окрашивание']").is(":checked")) && (opt == "Короткие")){
    res += 1500;
  }
  if (($("input[name='Прическа']").is(":checked"))  && (opt == "Короткие")){
    res += 1500;
  }
  if (($("input[name='Завивка']").is(":checked"))  && (opt == "Короткие")){
    res += 800;
  }
  
    if (($("input[name='Стрижка']").is(":checked")) && (opt == "Длинные")) {
    res += 1000;
  }
  if (($("input[name='Окрашивание']").is(":checked")) && (opt == "Длинные")){
    res += 2500;
  }
  if (($("input[name='Прическа']").is(":checked"))  && (opt == "Длинные")){
    res += 2700;
  }
  if (($("input[name='Завивка']").is(":checked"))  && (opt == "Длинные")){
    res += 1600;
  }
  
    if (($("input[name='Стрижка']").is(":checked")) && (opt == "Средние")) {
    res += 800;
  }
  if (($("input[name='Окрашивание']").is(":checked")) && (opt == "Средние")){
    res += 2000;
  }
  if (($("input[name='Прическа']").is(":checked"))  && (opt == "Средние")){
    res += 2200;
  }
  if (($("input[name='Завивка']").is(":checked"))  && (opt == "Средние")){
    res += 1100;
  }
  
  if (($("input[name='Скидка']").is(":checked")) &&($("input[name='Промокод']").is(":checked"))){
    res *= 0.85;
    alert("Цена рассчитана с учетом максимальной скидки");
  }
  else if ($("input[name='Скидка']").is(":checked")) {
    res *= 0.85;
  }
  else if ($("input[name='Промокод']").is(":checked")) {
    res *= 0.95;
  }
  
  if ($("input[name='Топ']").is(":checked")) {
    res *= 1.2;
    
  }

  
  }
    $("#result").text(res);
  
}

$("#calc").click(calc);

