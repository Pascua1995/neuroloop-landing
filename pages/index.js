export default function Home() {
  return (
    <div style={{ minHeight: "100vh", background: "black", color: "white", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 20 }}>
      <div style={{ maxWidth: 600, textAlign: "center" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>NeuroLoop</h1>
        <p style={{ fontSize: "1.2rem", fontWeight: "300" }}>Microcoaching diario. Personalizado. Inteligente.</p>
        <p>¿Querés salir de la rutina y construir la vida que soñás?</p>
        <ul style={{ textAlign: "left", margin: "20px auto", maxWidth: 400 }}>
          <li>Romper ciclos de procrastinación</li>
          <li>Ganar foco y consistencia</li>
          <li>Construir hábitos que sí se mantienen</li>
          <li>Potenciar tu proyecto personal o negocio</li>
        </ul>
        <p><em>Vas a hablar conmigo (Simón) como si fuera tu coach, tu socio y tu mejor asistente.</em></p>
      </div>

      <form action="https://formspree.io/f/xpwdrear" method="POST" style={{ background: "white", color: "black", padding: 20, marginTop: 20, borderRadius: 8 }}>
        <h2>Sumate a la lista de espera y recibí tu primer plan de acción gratuito</h2>
        <input
          type="email"
          name="email"
          placeholder="Tu mail"
          required
          style={{ padding: 10, width: "100%", marginBottom: 10 }}
        />
        <button type="submit" style={{ padding: 10, width: "100%", background: "black", color: "white", border: "none", cursor: "pointer" }}>
          Quiero mi plan de acción
        </button>
      </form>
    </div>
  );
}
