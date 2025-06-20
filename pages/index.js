import Link from 'next/link'

export default function Home() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: '#0e0e10', color: 'white', minHeight: '100vh', padding: '4rem 2rem' }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Welcome to Nomiqon</h1>
      <p style={{ marginTop: '1rem', fontSize: '1.2rem' }}>A modern platform inspired by Linear.app</p>
      <div style={{ marginTop: '2rem' }}>
        <Link href="/about"><button style={buttonStyle}>About Us</button></Link>
        <Link href="/contact"><button style={buttonStyle}>Contact</button></Link>
        <Link href="/blog"><button style={buttonStyle}>Blog</button></Link>
      </div>
    </div>
  )
}

const buttonStyle = {
  marginRight: '1rem',
  marginTop: '1rem',
  background: '#ffffff',
  color: '#0e0e10',
  border: 'none',
  borderRadius: '6px',
  padding: '0.75rem 1.5rem',
  fontWeight: '600',
  cursor: 'pointer'
}
