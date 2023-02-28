const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
  };
  
  let totalMensal = 0;
  
  // Calcula o valor total mensal
  for (let estado in faturamentoPorEstado) {
    totalMensal += faturamentoPorEstado[estado];
  }
  
  // Calcula o percentual de representação de cada estado
  for (let estado in faturamentoPorEstado) {
    const percentual = (faturamentoPorEstado[estado] / totalMensal) * 100;
    console.log(`${estado}: ${percentual.toFixed(2)}%`);
  }
  