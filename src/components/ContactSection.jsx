import React from 'react'
import { motion } from 'framer-motion'

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-soft-yellow">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Get in Touch</h2>
        <motion.div 
          className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <form>
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
              <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-300" required />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-300" required />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-300" required></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="btn-primary">Send Message</button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

