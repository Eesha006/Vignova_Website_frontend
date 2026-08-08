import { Routes, Route } from 'react-router-dom'
import { AdminAuthProvider } from './context/AdminAuthContext.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import SkipLink from './components/SkipLink.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Philosophy from './components/Philosophy.jsx'
import Services from './components/Services.jsx'
import Audience from './components/Audience.jsx'
import BrandMeaning from './components/BrandMeaning.jsx'
import CTA from './components/CTA.jsx'
import Footer from './components/Footer.jsx'

import AboutPage from './pages/AboutPage.jsx'
import ServicesPage from './pages/ServicesPage.jsx'
import CaseStudiesPage from './pages/CaseStudiesPage.jsx'
import PortfolioPage from './pages/PortfolioPage.jsx'
import ResourcesPage from './pages/ResourcesPage.jsx'
import BlogPage from './pages/BlogPage.jsx'
import BlogPostPage from './pages/BlogPostPage.jsx'
import FAQPage from './pages/FAQPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.jsx'
import TermsPage from './pages/TermsPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import ClientLoginPage from './pages/ClientLoginPage.jsx'
import BookingPage from './pages/BookingPage.jsx'
import AdminPage from './pages/AdminPage.jsx'

function HomePage() {
  return (
    <>
      <Hero />
      <Philosophy />
      <Services />
      <Audience />
      <BrandMeaning />
      <CTA />
    </>
  )
}

export default function App() {
  return (
    <AdminAuthProvider>
      <SkipLink />
      <Navbar />
      <main id="main-content">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/resources/blog" element={<BlogPage />} />
          <Route path="/resources/blog/:slug" element={<BlogPostPage />} />
          <Route path="/resources/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/book" element={<BookingPage />} />
          <Route path="/client-login" element={<ClientLoginPage />} />
          <Route path="/legal/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/legal/terms" element={<TermsPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </AdminAuthProvider>
  )
}
