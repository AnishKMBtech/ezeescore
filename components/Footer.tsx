import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About EzeeScore</h3>
            <p className="text-gray-400">Empowering education through innovative technology solutions for schools, teachers, and students. Join us in shaping the future of learning.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#products" className="text-gray-400 hover:text-yellow-400 transition duration-300">Products</Link></li>
              <li><Link href="#features" className="text-gray-400 hover:text-yellow-400 transition duration-300">Features</Link></li>
              <li><Link href="#support" className="text-gray-400 hover:text-yellow-400 transition duration-300">Support</Link></li>
              <li><Link href="#contact" className="text-gray-400 hover:text-yellow-400 transition duration-300">Contact</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-yellow-400 transition duration-300">Blog</Link></li>
              <li><Link href="/careers" className="text-gray-400 hover:text-yellow-400 transition duration-300">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400">EzeeScore Technologies Pvt Ltd</p>
            <p className="text-gray-400">#5, Ground Floor, Z Block,</p>
            <p className="text-gray-400">SAF Games Village, Chennai – 600 107</p>
            <p className="text-gray-400">Email: contact@ezeescore.com</p>
            <p className="text-gray-400">Phone: +91 44 1234 5678</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Stay updated with our latest news and offers.</p>
            <form className="flex">
              <input type="email" placeholder="Your email" className="px-4 py-2 w-full rounded-l-md focus:outline-none focus:ring-2 focus:ring-yellow-400" />
              <button type="submit" className="bg-yellow-400 text-black px-4 py-2 rounded-r-md hover:bg-yellow-500 transition duration-300">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} EzeeScore Technologies Pvt Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
