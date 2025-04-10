"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import {
  BookOpen,
  Brain,
  ClapperboardIcon as ChalkboardTeacher,
  CheckCircle2,
  FileText,
  MapPin,
  MessageSquare,
  Phone,
  School,
  Users,
  PhoneIcon as WhatsappIcon,
  Beaker,
  GraduationCap,
  Menu,
  X,
  Calendar,
  Bell,
  Star,
  ChevronLeft,
  ChevronRight,
  Mail,
  Clock,
  Quote,
} from "lucide-react"

function App() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: "JEE",
  })

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.05], [1, 0.95])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the form data to your backend
    alert("Thank you for your enquiry! We'll get back to you soon.")
    setFormData({
      name: "",
      phone: "",
      course: "JEE",
    })
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const openWhatsApp = () => {
    window.open(`https://wa.me/917005165807`, "_blank")
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-md z-50"
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <motion.div className="flex items-center space-x-2" whileHover={{ scale: 1.05 }}>
              <img src="/logo.png" alt="Alpha Chemistry Classes" className="h-12" />
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {["Home", "Courses", "Why Us", "Faculty", "Testimonials", "Contact"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="nav-link"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
            <motion.button
              className="md:hidden text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-16 left-0 right-0 bg-white shadow-lg z-40 md:hidden"
          >
            <div className="p-4 space-y-4">
              {["Home", "Courses", "Why Us", "Faculty", "Testimonials", "Contact"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="block text-gray-600 hover:text-red-600 py-2"
                  whileHover={{ x: 10 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-12 hero-gradient overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div
              className="md:w-1/2 mb-8 md:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h1
                className="text-4xl md:text-6xl font-bold mb-4 gradient-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              >
                We don't celebrate a few, we empower all who deserve
              </motion.h1>
              <motion.p
                className="text-lg text-gray-600 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Transform your chemistry preparation with expert guidance and proven results
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <motion.a
                  href="#courses"
                  className="button-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Courses
                </motion.a>
                <motion.a
                  href="#contact"
                  className="button-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Join Now
                </motion.a>
              </motion.div>
            </motion.div>
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.img
                src="https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?auto=format&fit=crop&w=800&q=80"
                alt="Chemistry Lab"
                className="rounded-2xl shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Floating Stats Banner */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative -mt-8 z-10"
      >
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { icon: <GraduationCap className="h-8 w-8 text-red-600" />, stat: "1000+", label: "Students Enrolled" },
                { icon: <Brain className="h-8 w-8 text-red-600" />, stat: "98%", label: "Success Rate" },
                { icon: <Users className="h-8 w-8 text-red-600" />, stat: "50+", label: "Expert Faculty" },
                { icon: <Beaker className="h-8 w-8 text-red-600" />, stat: "15+", label: "Years Experience" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4 card-hover"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {item.icon}
                  <div>
                    <motion.div
                      className="text-2xl font-bold text-gray-800"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                    >
                      {item.stat}
                    </motion.div>
                    <div className="text-gray-600">{item.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Course Categories */}
      <section id="courses" className="py-24">
        <motion.div
          className="container mx-auto px-4"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h2 className="text-4xl font-bold text-center mb-16 gradient-text" {...fadeInUp}>
            Our Courses
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "JEE Chemistry",
                icon: <BookOpen className="h-16 w-16 text-red-600" />,
                description: "Comprehensive preparation for JEE Main & Advanced Chemistry",
              },
              {
                title: "NEET Chemistry",
                icon: <Brain className="h-16 w-16 text-red-600" />,
                description: "Focused preparation for NEET Chemistry with NCERT emphasis",
              },
              {
                title: "Foundation Batch",
                icon: <School className="h-16 w-16 text-red-600" />,
                description: "Strong chemistry foundation for Class 11 & 12 students",
              },
            ].map((course, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg card-hover"
                whileHover={{ y: -10 }}
                variants={fadeInUp}
              >
                <div className="flex flex-col items-center text-center">
                  <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                    {course.icon}
                  </motion.div>
                  <h3 className="text-2xl font-semibold mt-6 mb-4">{course.title}</h3>
                  <p className="text-gray-600 mb-6">{course.description}</p>
                  <motion.button
                    className="text-red-600 hover:text-red-700 font-medium flex items-center"
                    whileHover={{ x: 10 }}
                  >
                    Learn More
                    <motion.span
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1 }}
                    >
                      →
                    </motion.span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-24 bg-gray-50">
        <motion.div
          className="container mx-auto px-4"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h2 className="text-4xl font-bold text-center mb-16 gradient-text" {...fadeInUp}>
            Why Choose Alpha Chemistry Classes?
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <ChalkboardTeacher className="h-12 w-12 text-red-600" />,
                title: "Expert Faculty",
                description: "Learn from experienced teachers with proven track records",
              },
              {
                icon: <CheckCircle2 className="h-12 w-12 text-red-600" />,
                title: "Top Results",
                description: "Consistent top ranks in JEE & NEET examinations",
              },
              {
                icon: <MessageSquare className="h-12 w-12 text-red-600" />,
                title: "Doubt Sessions",
                description: "Regular one-on-one doubt clearing sessions",
              },
              {
                icon: <FileText className="h-12 w-12 text-red-600" />,
                title: "Regular Testing",
                description: "Weekly tests and detailed performance tracking",
              },
              {
                icon: <BookOpen className="h-12 w-12 text-red-600" />,
                title: "Study Material",
                description: "Comprehensive study materials and digital notes",
              },
              {
                icon: <Users className="h-12 w-12 text-red-600" />,
                title: "Mentorship",
                description: "Personal guidance throughout your journey",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg card-hover"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex flex-col items-center text-center">
                  <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold my-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Faculty Message Section */}
      <section id="faculty" className="py-24">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Message from Our Faculty
          </motion.h2>

          <motion.div
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 bg-gradient-to-br from-red-500 to-red-700 p-8 text-white">
                <motion.div
                  className="flex justify-center"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl">
                    <img
                      src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=400&q=80"
                      alt="Dr. Rajesh Kumar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
                <motion.div
                  className="text-center mt-6"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold">Dr. Rajesh Kumar</h3>
                  <p className="text-red-100 mt-2">Head of Chemistry Department</p>
                  <p className="text-red-100 mt-1">Ph.D. in Organic Chemistry</p>
                  <p className="text-red-100 mt-1">15+ Years of Teaching Experience</p>
                </motion.div>
              </div>
              <div className="md:w-2/3 p-8 md:p-12">
                <motion.div
                  className="flex mb-6"
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Quote className="h-12 w-12 text-red-200 flex-shrink-0 mr-4" />
                </motion.div>
                <motion.blockquote
                  className="text-xl md:text-2xl text-gray-700 italic mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  At Alpha Chemistry Classes, we believe that every student has the potential to excel. Our teaching
                  methodology focuses on building strong fundamentals and problem-solving skills rather than rote
                  learning.
                </motion.blockquote>
                <motion.p
                  className="text-gray-600 mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  Chemistry is not just about memorizing formulas and reactions; it's about understanding the underlying
                  principles and applying them to solve complex problems. Our team of dedicated faculty members is
                  committed to making chemistry accessible, engaging, and enjoyable for all students.
                </motion.p>
                <motion.p
                  className="text-gray-600"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  We take pride in our personalized approach to teaching, where we identify each student's strengths and
                  areas for improvement, and tailor our guidance accordingly. Join us on this exciting journey of
                  discovery and excellence in chemistry.
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-gray-50">
        <motion.div
          className="container mx-auto px-4"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h2 className="text-4xl font-bold text-center mb-16 gradient-text" {...fadeInUp}>
            What Our Students Say
          </motion.h2>

          <TestimonialsSlider />
        </motion.div>
      </section>

      {/* Test Section (Upcoming) */}
      <section id="test" className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl p-12 text-center overflow-hidden relative"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1920&q=80')] opacity-10"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 1 }}
            />
            <div className="relative z-10">
              <motion.div
                className="inline-block px-4 py-2 bg-yellow-500 text-red-800 rounded-full font-bold mb-6"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Clock className="inline-block h-4 w-4 mr-2" />
                COMING SOON
              </motion.div>
              <motion.h2
                className="text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Online Assessment Tests
              </motion.h2>
              <motion.p
                className="text-xl mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                We're developing comprehensive online assessment tests to help you evaluate your preparation level. Stay
                tuned!
              </motion.p>
              <motion.button
                className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-50 transition shadow-lg opacity-80 cursor-not-allowed"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Notify Me When Available
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Latest Announcements
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "New Batch Starting",
                date: "April 15, 2024",
                content: "New JEE Advanced Chemistry batch starting next week. Limited seats available!",
                icon: <Calendar className="h-6 w-6 text-red-600" />,
                color: "bg-red-50",
              },
              {
                title: "Free Mock Test",
                date: "April 20, 2024",
                content: "Register for our free NEET Chemistry mock test. Get your preparation evaluated by experts.",
                icon: <FileText className="h-6 w-6 text-emerald-600" />,
                color: "bg-emerald-50",
              },
              {
                title: "Scholarship Test",
                date: "May 5, 2024",
                content: "Scholarship test for deserving students. Up to 100% fee waiver for top performers.",
                icon: <GraduationCap className="h-6 w-6 text-blue-600" />,
                color: "bg-blue-50",
              },
            ].map((announcement, index) => (
              <motion.div
                key={index}
                className={`rounded-xl shadow-lg overflow-hidden ${announcement.color} card-hover`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-full bg-white shadow-md mr-4">{announcement.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold">{announcement.title}</h3>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Bell className="h-4 w-4 mr-1" />
                        {announcement.date}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{announcement.content}</p>
                  <motion.button className="text-red-600 font-medium flex items-center" whileHover={{ x: 5 }}>
                    Read More
                    <motion.span
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1 }}
                    >
                      →
                    </motion.span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Contact Us
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2 text-lg">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="input-style"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 text-lg">Phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="input-style"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 text-lg">Course Interested In</label>
                  <select
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    className="input-style"
                  >
                    <option value="JEE">JEE Chemistry</option>
                    <option value="NEET">NEET Chemistry</option>
                    <option value="Foundation">Foundation Batch</option>
                  </select>
                </div>
                <motion.button
                  type="submit"
                  className="w-full button-primary"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Submit Enquiry
                </motion.button>
              </form>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  <motion.p className="flex items-center text-lg" whileHover={{ x: 10 }}>
                    <MapPin className="h-6 w-6 mr-4 text-red-600" />
                    Agartala, West Tripura
                  </motion.p>
                  <motion.p className="flex items-center text-lg" whileHover={{ x: 10 }}>
                    <Phone className="h-6 w-6 mr-4 text-red-600" />
                    +91 70051 65807
                  </motion.p>
                  <motion.p className="flex items-center text-lg" whileHover={{ x: 10 }}>
                    <Mail className="h-6 w-6 mr-4 text-red-600" />
                    alphachemclass@gmail.com
                  </motion.p>
                  <motion.div className="flex space-x-4" whileHover={{ scale: 1.05 }}>
                    <button
                      className="flex items-center bg-green-500 text-white px-8 py-4 rounded-lg hover:bg-green-600 transition shadow-lg"
                      onClick={openWhatsApp}
                    >
                      <WhatsappIcon className="h-6 w-6 mr-2" />
                      Chat on WhatsApp
                    </button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <motion.div className="flex items-center space-x-2 mb-4" whileHover={{ scale: 1.05 }}>
                <img src="/logo.png" alt="Alpha Chemistry Classes" className="h-10 brightness-0 invert" />
              </motion.div>
              <p className="text-gray-400 mb-4">
                Transforming chemistry education with expert guidance and proven results.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-gray-400 hover:text-white transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#courses" className="text-gray-400 hover:text-white transition">
                    Courses
                  </a>
                </li>
                <li>
                  <a href="#why-us" className="text-gray-400 hover:text-white transition">
                    Why Choose Us
                  </a>
                </li>
                <li>
                  <a href="#faculty" className="text-gray-400 hover:text-white transition">
                    Faculty
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="text-gray-400 hover:text-white transition">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-white transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-red-500" />
                  Agartala, West Tripura
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-red-500" />
                  +91 70051 65807
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-red-500" />
                  alphachemclass@gmail.com
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center">
            <p>© 2024 Alpha Chemistry Classes. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function TestimonialsSlider() {
  const testimonials = [
    {
      quote:
        "The way concepts are explained here made chemistry my strongest subject. I secured 99.8 percentile in JEE Mains chemistry.",
      name: "Rahul Sharma",
      role: "JEE 2023 | IIT Bombay",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      stars: 5,
    },
    {
      quote:
        "The study material and test series were comprehensive. The faculty's guidance helped me ace NEET chemistry with flying colors.",
      name: "Priya Patel",
      role: "NEET 2023 | AIIMS Delhi",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
      stars: 5,
    },
    {
      quote:
        "The doubt clearing sessions were extremely helpful. The teachers ensure every student understands the concepts thoroughly.",
      name: "Arjun Mehta",
      role: "JEE 2023 | IIT Madras",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      stars: 5,
    },
    {
      quote:
        "From a student who feared chemistry to someone who loves it, Alpha Chemistry Classes transformed my approach to the subject.",
      name: "Neha Gupta",
      role: "NEET 2023 | JIPMER",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
      stars: 5,
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-scroll testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={sliderRef}>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <motion.button
            onClick={prevSlide}
            className="absolute left-0 z-10 bg-white rounded-full p-3 shadow-lg text-red-600 hover:bg-red-50 md:translate-x-12"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="h-6 w-6" />
          </motion.button>

          <div className="w-full overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full px-4">
                  <motion.div
                    className="bg-white rounded-2xl shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-600 rounded-full blur-lg opacity-30 animate-pulse"></div>
                        <motion.img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-lg"
                          whileHover={{ scale: 1.05 }}
                        />
                      </div>
                    </div>
                    <div className="md:w-2/3 md:pl-8">
                      <div className="flex mb-4">
                        {[...Array(testimonial.stars)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                        ))}
                      </div>
                      <blockquote className="text-xl md:text-2xl font-medium italic text-gray-700 mb-6">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="flex flex-col">
                        <span className="text-lg font-bold text-gray-900">{testimonial.name}</span>
                        <span className="text-red-600">{testimonial.role}</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.button
            onClick={nextSlide}
            className="absolute right-0 z-10 bg-white rounded-full p-3 shadow-lg text-red-600 hover:bg-red-50 md:-translate-x-12"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="h-6 w-6" />
          </motion.button>
        </div>
      </div>

      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              currentIndex === index ? "bg-red-600" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default App
