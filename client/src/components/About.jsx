function About() {

  const hora = new Date();
  const horas = hora.getHours(); // Obtener la hora (de 0 a 23)
  const minutos = hora.getMinutes(); // Obtener los minutos (de 0 a 59)
  const segundos = hora.getSeconds(); // Obtener los segundos (de 0 a 59)

console.log(`Hora actual: ${horas}:${minutos}:${segundos}`);

  return (
    <div>
      <h1>About Me -----------------------------</h1>
      <p>| - {horas}:{minutos}:{segundos} --</p>
      <p>|__  Alan Santiago Vasquez Ariza</p>
      <p>| - {horas}:{minutos}:{segundos} --</p>
      <p>|__  Alanvasquez.sa@academia.umb.edu.co</p>
      <p>| - {horas}:{minutos}:{segundos}--</p>
      <p>|__  3027088151</p>
    </div>
  );
}

export default About;