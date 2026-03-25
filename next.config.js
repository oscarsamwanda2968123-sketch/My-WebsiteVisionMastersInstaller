
export default function Home() {
  return (
    <div style={{fontFamily:"Arial",margin:0}}>
      <header style={{background:"#000",color:"#fff",padding:"15px",display:"flex",justifyContent:"space-between"}}>
        <h2>VisionMasters Electrical</h2>
        <a href="https://wa.me/27717892368">
          <button style={{background:"green",color:"#fff",padding:"10px",border:"none"}}>WhatsApp</button>
        </a>
      </header>

      <section style={{padding:"60px",textAlign:"center",background:"linear-gradient(90deg,blue,black)",color:"#fff"}}>
        <h1>CCTV, Intercom & Security Solutions</h1>
        <p>Trusted. Affordable. Professional.</p>
      </section>

      <section style={{padding:"40px",textAlign:"center"}}>
        <h2>Our Services</h2>
        <p>CCTV Installation - From R2500</p>
        <p>Intercom Installation - From R1800</p>
        <p>DSTV & Networking - From R650</p>
      </section>

      <section style={{padding:"40px",background:"#f5f5f5",textAlign:"center"}}>
        <h2>Our Work</h2>
        <p>Add your real installation photos here</p>
      </section>

      <section style={{padding:"40px",textAlign:"center"}}>
        <h2>Brands</h2>
        <p>Hikvision | Dahua | UNV | Ubiquiti | Provision | Samsung</p>
      </section>

      <section style={{padding:"40px",textAlign:"center"}}>
        <h2>Reviews</h2>
        <p>⭐⭐⭐⭐⭐ "Great service!"</p>
        <p>⭐⭐⭐⭐⭐ "Very professional"</p>
      </section>

      <footer style={{background:"#000",color:"#fff",padding:"20px",textAlign:"center"}}>
        <p>Call: 071 789 2368</p>
      </footer>
    </div>
  )
}
