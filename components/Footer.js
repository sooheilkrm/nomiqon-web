
export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-8 grid grid-cols-2 md:grid-cols-5 gap-6">
      <div>
        <h4 className="font-bold text-lg mb-4">Nomiqon</h4>
      </div>
      <div>
        <h5 className="font-semibold mb-2">Connect</h5>
        <ul>
          <li>Contact Us</li>
          <li>Instagram</li>
          <li>Facebook</li>
        </ul>
      </div>
      <div>
        <h5 className="font-semibold mb-2">Company</h5>
        <ul>
          <li>About</li>
          <li>Blog</li>
        </ul>
      </div>
      <div>
        <h5 className="font-semibold mb-2">Support</h5>
        <ul>
          <li>Help Center</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div>
        <h5 className="font-semibold mb-2">Resources</h5>
        <ul>
          <li>Docs</li>
          <li>Community</li>
        </ul>
      </div>
    </footer>
  )
}
