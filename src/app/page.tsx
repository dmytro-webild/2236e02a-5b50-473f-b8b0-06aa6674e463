"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboardDashboard from '@/components/sections/hero/HeroBillboardDashboard';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import { Zap, Info, Sparkles, Workflow, DollarSign, Quote, Heart, Globe, Home, Code, Settings, Briefcase, Rocket } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="largeSmallSizeMediumTitles"
      background="noiseDiagonalGradient"
      cardStyle="subtle-shadow"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="glass"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="KYRO"
          navItems={[
            { name: "About", id: "about" },
            { name: "Services", id: "why-choose" },
            { name: "Process", id: "process" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardDashboard
          title="Build your presence. Launch your future."
          description="KYRO creates modern, fast, and professional websites that help businesses stand out online. Clean design meets reliable technology for websites built to grow."
          tag="Web Design & Development"
          tagIcon={Zap}
          tagAnimation="slide-up"
          background={{ variant: "radial-gradient" }}
          buttons={[
            { text: "Start Your Project", href: "#contact" },
            { text: "Learn More", href: "#about" }
          ]}
          buttonAnimation="slide-up"
          dashboard={{
            title: "Website Performance Metrics",            logoIcon: Globe,
            imageSrc: "http://img.b2bpic.net/free-vector/professional-dashboard-user-panel_23-2148358961.jpg",            searchPlaceholder: "Search projects...",            sidebarItems: [
              { icon: Home, active: true },
              { icon: Code, active: false },
              { icon: Settings, active: false }
            ],
            buttons: [
              { text: "View Portfolio", href: "#" },
              { text: "Get Quote", href: "#contact" }
            ],
            stats: [
              { title: "Projects Delivered", values: [45, 67, 89], description: "Successful client projects" },
              { title: "Client Satisfaction", values: [92, 95, 98], valueSuffix: "%", description: "Average satisfaction rating" },
              { title: "Performance Score", values: [85, 92, 98], description: "Average website speed score" }
            ],
            chartTitle: "Website Traffic Growth",            chartData: [
              { value: 45 },
              { value: 62 },
              { value: 78 },
              { value: 85 },
              { value: 92 }
            ],
            listTitle: "Recent Projects",            listItems: [
              { icon: Globe, title: "E-Commerce Platform", status: "Completed" },
              { icon: Briefcase, title: "Corporate Website", status: "Completed" },
              { icon: Rocket, title: "Startup Landing Page", status: "In Progress" }
            ]
          }}
        />
      </div>

      <div id="about" data-section="about">
        <TestimonialAboutCard
          tag="About KYRO"
          tagIcon={Info}
          tagAnimation="slide-up"
          title="We believe great websites shape the future of business"
          description="Founded by Kaysen in 2026 in St. George, Utah"
          subdescription="KYRO builds modern, high-quality digital experiences"
          icon={Heart}
          imageSrc="http://img.b2bpic.net/free-photo/young-friends-having-good-time_23-2148395486.jpg"
          imageAlt="KYRO founder Kaysen"
          mediaAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="why-choose" data-section="why-choose">
        <FeatureCardSeven
          title="Why Choose KYRO"
          description="We combine innovation, quality, and simplicity to create websites that truly work for your business"
          tag="Our Strengths"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          animationType="blur-reveal"
          features={[
            {
              id: 1,
              title: "Innovation",              description: "We use modern technology and creative ideas to build websites that stand out and stay ahead of the curve.",              imageSrc: "http://img.b2bpic.net/free-vector/vintage-energy-efficient-lightbulbs-labels-set-with-inscriptions-different-light-bulbs_1284-39870.jpg?_wi=1",              imageAlt: "Innovation icon"
            },
            {
              id: 2,
              title: "Quality",              description: "Every website we build is carefully designed, tested, and optimized to deliver the best performance.",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-executives-showing-thumbs-up_1098-1828.jpg?id=860924",              imageAlt: "Quality badge icon"
            },
            {
              id: 3,
              title: "Growth",              description: "We focus on building websites that help businesses grow, reach more people, and succeed online.",              imageSrc: "http://img.b2bpic.net/free-vector/crowdfunding-icons-set_98292-1915.jpg?_wi=1",              imageAlt: "Growth chart icon"
            },
            {
              id: 4,
              title: "Simplicity",              description: "We believe great websites should be clean, easy to use, and simple for businesses and customers.",              imageSrc: "http://img.b2bpic.net/premium-photo/businessman-working-labtop-with-check-mark-symbol-golden-five-stars-standard-quality-control-concept-international-iso-service-standards-quality-assurance-is-certified_144352-932.jpg?id=94627694",              imageAlt: "Simplicity icon"
            }
          ]}
        />
      </div>

      <div id="process" data-section="process">
        <FeatureCardSeven
          title="How It Works"
          description="Our streamlined process gets your website launched quickly and efficiently"
          tag="Our Process"
          tagIcon={Workflow}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          features={[
            {
              id: 1,
              title: "Contact KYRO",              description: "Reach out through our contact form or call us directly. We're ready to discuss your vision and goals.",              imageSrc: "http://img.b2bpic.net/free-photo/explaining-project-points_1098-15436.jpg?id=5401863",              imageAlt: "Contact step"
            },
            {
              id: 2,
              title: "KYRO Creates Your Website",              description: "Tell us about your business and what you want. We use AI to create a layout, then customize it perfectly for your needs.",              imageSrc: "http://img.b2bpic.net/premium-vector/fancy-halftone-collage-concept-knowledge-inspiration-take-notes-create-new-idea_715072-1364.jpg?id=375783000",              imageAlt: "Design step"
            },
            {
              id: 3,
              title: "Pay for Full Ownership",              description: "After we build your website, you own it completely with just a one-time $50 fee. No recurring costs.",              imageSrc: "http://img.b2bpic.net/free-photo/business-man-counting-dollar-banknote-online-business-concept_1150-6406.jpg?id=3805663",              imageAlt: "Payment step"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Simple, Transparent Pricing"
          description="One-time payment for full website ownership. No subscriptions, no hidden fees."
          tag="Affordable Packages"
          tagIcon={DollarSign}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          animationType="slide-up"
          plans={[
            {
              id: "starter",              badge: "Perfect for Startups",              badgeIcon: Sparkles,
              price: "$50",              subtitle: "One-time ownership fee",              features: [
                "Professional website design",                "Mobile responsive",                "Fast performance optimization",                "AI-assisted layout",                "Full ownership and control"
              ]
            },
            {
              id: "business",              badge: "Most Popular",              badgeIcon: Quote,
              price: "$50",              subtitle: "Includes all features",              features: [
                "Everything in Starter",                "Custom branding integration",                "SEO optimization",                "Contact form setup",                "Analytics integration",                "30-day support included"
              ]
            },
            {
              id: "enterprise",              badge: "For Growing Businesses",              badgeIcon: Zap,
              price: "$50",              subtitle: "Premium ownership",              features: [
                "Everything in Business",                "Advanced customization",                "E-commerce integration",                "Multi-page optimization",                "3-month support included",                "Priority revisions"
              ]
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about KYRO's web design services"
          textPosition="left"
          useInvertedBackground={false}
          animationType="smooth"
          faqsAnimation="blur-reveal"
          faqs={[
            {
              id: "1",              title: "Why should I buy a website?",              content: "A website is a massive investment for a business or small company. It serves as your digital storefront, helps customers find you online, builds credibility, and enables you to reach a much larger audience. In today's digital world, having a professional online presence is essential for business growth."
            },
            {
              id: "2",              title: "How long does it take to build a website?",              content: "We typically complete websites in 3-5 business days. This quick turnaround is possible because we use modern tools and our streamlined process. Rush options are available for urgent projects. The exact timeline depends on the complexity of your specific requirements."
            },
            {
              id: "3",              title: "How do we create websites?",              content: "We use AI to generate initial layouts based on your business requirements, then our team carefully customizes every element to match your brand and goals. This hybrid approach combines the efficiency of AI with human creativity and expertise to deliver sites that are both beautiful and functional."
            },
            {
              id: "4",              title: "Do I own the website after purchase?",              content: "Yes! After you pay the $50 ownership fee, you own the website completely. There are no subscriptions, no recurring fees, and no hidden costs. You control your domain and can manage your site independently or request our help anytime."
            },
            {
              id: "5",              title: "Can you help after the website is built?",              content: "Absolutely! We offer support packages with your website. During the included support period (30-90 days depending on your plan), we're available to help with revisions, updates, and questions. Extended support is also available."
            },
            {
              id: "6",              title: "What makes KYRO different?",              content: "KYRO focuses on fast delivery, transparent pricing, and full ownership. We combine modern technology with human creativity to build websites that actually help your business grow. No complexity, no confusing terms—just beautiful, powerful websites at an affordable price."
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSixteen
          title="What Our Clients Say"
          description="Real feedback from businesses we've helped launch and grow online"
          tag="Client Testimonials"
          tagIcon={Quote}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          animationType="slide-up"
          testimonials={[
            {
              id: "1",              name: "Sarah Mitchell",              role: "CEO",              company: "Growth Ventures Co",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/front-view-smiley-woman-cozy-office_23-2149739353.jpg",              imageAlt: "Sarah Mitchell"
            },
            {
              id: "2",              name: "James Chen",              role: "Founder",              company: "Digital Solutions Inc",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-businessman-with-tie_1098-2867.jpg",              imageAlt: "James Chen"
            },
            {
              id: "3",              name: "Emma Rodriguez",              role: "Marketing Director",              company: "Bright Future Marketing",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/businesswoman-glasses-portrait_1262-1461.jpg",              imageAlt: "Emma Rodriguez"
            },
            {
              id: "4",              name: "Lisa Thompson",              role: "Business Owner",              company: "Thompson's Retail",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/young-attractive-woman-white-shirt-dreamily-looking-camera-with-desk-background-modern-office_574295-5167.jpg",              imageAlt: "Lisa Thompson"
            }
          ]}
          kpiItems={[
            { value: "89+", label: "Projects Successfully Completed" },
            { value: "98%", label: "Client Satisfaction Rate" },
            { value: "2026", label: "Year Founded" }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Ready to grow your business?"
          description="KYRO creates powerful, modern websites that help businesses stand out and grow online. Let's discuss your project and bring your vision to life."
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "your@email.com", required: true },
            { name: "phone", type: "tel", placeholder: "435-523-9141", required: false },
            { name: "business", type: "text", placeholder: "Your Business Name", required: true }
          ]}
          textarea={{
            name: "message",            placeholder: "Tell us about your project and what you're looking for...",            rows: 5,
            required: true
          }}
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-photo/medium-shot-people-discussing-traveling_23-2149080795.jpg?_wi=1"
          imageAlt="Creative workspace"
          mediaAnimation="slide-up"
          mediaPosition="right"
          buttonText="Start Your Project"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="http://img.b2bpic.net/free-photo/medium-shot-people-discussing-traveling_23-2149080795.jpg?_wi=2"
          imageAlt="KYRO footer background"
          logoText="KYRO"
          copyrightText="© 2026 KYRO. All Rights Reserved."
          columns={[
            {
              title: "Product",              items: [
                { label: "Services", href: "#why-choose" },
                { label: "Process", href: "#process" },
                { label: "Pricing", href: "#pricing" }
              ]
            },
            {
              title: "Company",              items: [
                { label: "About", href: "#about" },
                { label: "Contact", href: "#contact" },
                { label: "FAQ", href: "#faq" }
              ]
            },
            {
              title: "Legal",              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Sitemap", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
