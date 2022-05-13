let resultado = 10,
  i = 1;

while (i <= 10) {
  resultado = resultado * i;
  if (resultado === 3628800) {
    break;
  }
  i++;
}