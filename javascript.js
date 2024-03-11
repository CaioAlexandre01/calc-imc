let botao = document.querySelector("#button");

botao.addEventListener("click", () => {
  let kg = parseFloat(document.querySelector("#campoum").value);
  let altura = parseFloat(document.querySelector("#campodois").value);
  let resultado = kg / (altura * altura);

  document.querySelector("#resultado").value = resultado.toFixed(2);

  let baixoPeso = document.querySelector("#baixoPeso");
  let pesoNormal = document.querySelector("#pesoNormal");
  let excessoPeso = document.querySelector("#excessoPeso");
  let obesidade = document.querySelector("#obesidade");
  let obesidadeExtrema = document.querySelector("#obesidadeExtrema");


  if (resultado < 18.5) {
    baixoPeso.classList.add("active");
    pesoNormal.classList.remove("active");
    excessoPeso.classList.remove("active");
    obesidade.classList.remove("active");
    obesidadeExtrema.classList.remove("active");
  } else if (resultado >= 18.6 && resultado <= 24.9) {
    baixoPeso.classList.remove("active");
    pesoNormal.classList.add("active");
    excessoPeso.classList.remove("active");
    obesidade.classList.remove("active");
    obesidadeExtrema.classList.remove("active");
  } else if (resultado >= 25 && resultado <= 29.9) {
    baixoPeso.classList.remove("active");
    pesoNormal.classList.remove("active");
    excessoPeso.classList.add("active");
    obesidade.classList.remove("active");
    obesidadeExtrema.classList.remove("active");
  } else if (resultado >= 30 && resultado <= 34.9) {
    baixoPeso.classList.remove("active");
    pesoNormal.classList.remove("active");
    excessoPeso.classList.remove("active");
    obesidade.classList.add("active");
    obesidadeExtrema.classList.remove("active");
  } else if (resultado >= 35) {
    baixoPeso.classList.remove("active");
    pesoNormal.classList.remove("active");
    excessoPeso.classList.remove("active");
    obesidade.classList.remove("active");
    obesidadeExtrema.classList.add("active");
  }

  console.log(resultado);
});
