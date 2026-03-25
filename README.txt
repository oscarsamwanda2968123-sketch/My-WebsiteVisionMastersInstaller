
export default function Home() {
  return (
    <div style={{ fontFamily: "Arial", margin: 0 }}>

      <header style={{background:"#000",color:"#fff",padding:"15px 30px",display:"flex",justifyContent:"space-between"}}>
        <h2>VisionMasters</h2>
        <a href="https://wa.me/27717892368">
          <button style={{background:"#25D366",color:"#fff",padding:"10px",border:"none"}}>
            WhatsApp
          </button>
        </a>
      </header>

      <section style={{padding:"80px 20px",textAlign:"center",background:"linear-gradient(135deg,#0f172a,#1e3a8a)",color:"#fff"}}>
        <h1>CCTV, Intercom & Security Experts</h1>
        <p>Protect your home & business with trusted professionals</p>
      </section>

      <section style={{padding:"50px",textAlign:"center"}}>
        <h2>Services</h2>
        <p>CCTV Installation - From R2500</p>
        <p>Intercom Installation - From R1800</p>
        <p>DSTV & Networking - From R650</p>
      </section>

      <section style={{padding:"50px",background:"#f5f5f5",textAlign:"center"}}>
        <h2>Our Work</h2>
        <p>Add your images in /public/images</p>
      </section>

      <section style={{padding:"50px",textAlign:"center"}}>
        <h2>Brands</h2>
        <p>Hikvision | Dahua | UNV | Ubiquiti | Provision | Samsung</p>
      </section>

      <section style={{padding:"50px",textAlign:"center"}}>
        <h2>Reviews</h2>
        <p>⭐⭐⭐⭐⭐ Great service!</p>
      </section>

      <section style={{padding:"50px",background:"#000",color:"#fff",textAlign:"center"}}>
        <h2>Contact</h2>
        <p>071 789 2368</p>
      </section>

    </div>
  )
}
