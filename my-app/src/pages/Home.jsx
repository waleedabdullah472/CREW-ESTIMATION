import React, { useState } from 'react';
import './Home.css';
import Graph from './../components/Graph';
import { motion } from "framer-motion";

// --- Chevron Icon Component ---
const ChevronIcon = ({ isOpen }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`h-6 w-6 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);


// --- Accordion Item Component ---
const AccordionItem = ({ item, index, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="flex w-full items-center justify-between p-6 text-left focus:outline-none"
        onClick={() => onToggle(index)}
      >
        <h3 className="text-lg font-semibold text-gray-800">{item.question}</h3>
        <span className="text-gray-500">
          <ChevronIcon isOpen={isOpen} />
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'
          }`}
      >
        <div className="px-6 pb-6 text-gray-600 ">
          <p>{item.answer}</p>
        </div>
      </div>
    </div>
  );
};

const Home = () => {

  const [selectedCard, setSelectedCard] = useState(null);


  const cards = [
    { id: 1, image: "/sh1.jpg", title: "General Contractor", text: "We provide highly accurate construction estimates to General Contractors incorporating location-specific material and labor pricing data using our developed construction cost databases based on zip code. we have successfully served many of our clients with complete estimates for both residential and commercial projects." },
    { id: 2, image: "/sh2.jpg", title: "Home Builders", text: "We provide material takeoff services to home builders which they use to order materials from their suppliers. We also offer them cost estimation services to prepare bid proposals which they submit to their clients. Our perfect takeoffs &amp; estimates have been helping our clients save lots of time &amp; money. grow their business to a new level." },
    { id: 3, image: "/sh3.jpg", title: "Sub Contractor", text: "We provide highly accurate construction estimates to subcontractors for trades. We specialize in all trades estimation like Concrete, Drywall, electrical, HVAC, Plumbing, Framing, Flooring, Masonry, painting, Sitework, earthwork, Roofing, Siding, Flooring, Carpentry, Metals, Misc. Steel, Demolition etc." },
    { id: 4, image: "/sh4.jpg", title: "Material Supplier", text: "By subscribing to our takeoff packages, material suppliers avail our material takeoff services and outsource to us and get more accurate and efficient takeoffs for different materials at less price that saves in-house estimator’s expenses for up to 60%. We provide them a detailed excel spreadsheet that contains detailed material list." },
  ];

  // Showcase items (10 cards as provided)
  const showcaseItems = [
    {
      image: "/6.svg",
      title: "Masonry Estimating",
      text: "We deliver accurate masonry takeoffs for residential and commercial projects. Our estimates include bricks, blocks, tiles, rebar, and anchors. Using expert tools, we ensure precision and cost efficiency. Each estimate supports better budgeting, material management, and seamless execution."
    },
    {
      image: "/7.svg",
      title: "Paint Estimating",
      text: "We provide painting estimates covering quantities, finishes, coatings, and labor costs. Using Bluebeam and Planswift, we deliver precise takeoffs that minimize waste and ensure efficiency. Each estimate helps contractors maintain quality, accuracy, and cost control for both residential and commercial."
    },
    {
      image: "/8.svg",
      title: "Drywall Estimating",
      text: "Our drywall estimates include sheets, screws, insulation, and beads. We calculate materials and labor precisely for cost-effective planning. Using digital tools, we ensure accuracy and time savings. Each drywall estimate supports better resource allocation, smooth installation."
    },
    {
      image: "/9.svg",
      title: "Sitework & Earthwork Estimating",
      text: "We prepare sitework and earthwork estimates including excavation, grading, and utilities. Our experts calculate quantities for cut, fill, and materials with accuracy. Each estimate ensures efficient cost management, planning, and execution. We help contractors deliver projects on schedule."
    },
    {
      image: "/10.svg",
      title: "Thermal & Moisture Protection Estimating",
      text: "We estimate roofing, waterproofing, insulation, and sealants. Our experts calculate material quantities and labor costs precisely. Each estimate supports energy-efficient design, cost control, and durable results. We help contractors deliver moisture-resistant and reliable systems."
    },
    {
      image: "/1.svg",
      title: "Flooring Estimating",
      text: "We provide flooring estimates for tiles, vinyl, carpet, and wood. Our estimators calculate material and labor requirements with accuracy. Using Planswift and Bluebeam, we ensure efficiency and precision. Each flooring estimate helps contractors reduce waste, control costs."
    },
    {
      image: "/3.svg",
      title: "MEP Estimating",
      text: "We offer MEP takeoffs for mechanical, electrical, and plumbing systems. Our experts calculate ductwork, wiring, and piping accurately. Using specialized tools, we ensure cost-effective planning and reliable results. Each MEP estimate supports coordination, efficiency, and accuracy."
    },
    {
      image: "/2.svg",
      title: "Metal Estimating",
      text: "We provide detailed metal takeoffs for beams, trusses, and railings. Our estimators calculate quantities with precision for cost control and material efficiency. Each estimate ensures smooth planning, budgeting, and fabrication. We help contractors achieve accurate, timely, and high-quality results"
    },
    {
      image: "/4.svg",
      title: "Lumber Estimating",
      text: "We deliver lumber takeoffs for framing, decking, and cabinetry. Our estimates cover material quantities, costs, and labor needs precisely. Using advanced software, we ensure accuracy and efficiency. Each lumber estimate helps contractors plan better, manage budgets, and complete projects successfully."
    },
    {
      image: "/5.svg",
      title: "Concrete Estimating",
      text: "We offer concrete estimates for foundations, slabs, and driveways. Our detailed takeoffs include rebar, formwork, and volumes. Using Bluebeam and Planswift, we ensure accuracy and cost control. Each estimate supports efficient resource planning, reduced waste, and timely completion."
    },
    {
      image: "/12121212 (1).png",
      title: "Doors and Windows",
      text: "We prepare detailed estimates for doors, windows, and frames. Our service covers fittings, glass, and accessories precisely. Each takeoff ensures cost control, material efficiency, and easy procurement. We help contractors manage time, reduce waste."
    },
    {
      image: "/12121212 (2).png",
      title: "Carpentry",
      text: "Our carpentry estimating includes framing, cabinetry, and woodwork. We calculate materials and labor accurately for cost efficiency. Using advanced tools, we deliver dependable takeoffs.Each estimate helps contractors maintain quality, save time, and complete projects successfully."
    }
  ];

  // Step Section images
  const stepItems = [
    { image: "/pro.png", title: "Project" },
    { image: "/rev.png", title: "Reviewing" },
    { image: "/proooo.png", title: "Proposal" },
    { image: "/cal.png", title: "Estimation" },
    { image: "/search.png", title: "Rechecking" },
  ];

  const faqData = [
    {
      question: 'Can You Provide Estimates with Incomplete Drawings?',
      answer:
        'Yes! Our experienced estimators can work with preliminary or conceptual drawings to deliver accurate cost estimates. We support early-stage planning by helping you make informed design and purchasing decisions—even before your plans are finalized.',
    },
    {
      question: 'What Is Your Turnaround Time?',
      answer:
        'Turnaround time varies depending on the project scope and complexity. We provide an estimated timeline with every quote and work diligently to meet deadlines. For specific project timelines, please contact us directly.',
    },
    {
      question: 'What Payment Methods Do You Accept?',
      answer:
        'We accept a variety of payment methods, including bank transfers, credit cards (Visa, MasterCard, American Express), and crpyto payments. We can also discuss other arrangements for larger projects.',
    },
  ];

  const [openIndex, setOpenIndex] = useState(0); // First item is open by default

  const handleToggle = (index) => {
    // If the clicked item is already open, close it. Otherwise, open the new one.
    setOpenIndex(openIndex === index ? null : index);
  };


  return (
    <div className="home-container">
      {/* Section 1: Hero */}
      <motion.section
        className="hero-section full-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <motion.h2
            className="hero-subtitle"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Welcome to CREW ESTIMATION
          </motion.h2>

          <motion.h1
            className="hero-title"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            CONSTRUCTION ESTIMATING <br /> & MATERIAL TAKEOFF SERVICES
          </motion.h1>

          <motion.p
            className="hero-paragraph"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            WE HELP BUSY CONTRACTORS IN ESTIMATE AND WINNING BIDS
          </motion.p>

          <motion.button
            className="hero-button"
            onClick={() => window.open("https://wa.me/+17869870481", "_blank")}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            GET STARTED
          </motion.button>
        </div>
      </motion.section>

      {/* Section 2: Services */}
      <section className="service-section">
        <h2 className="service-heading">Construction Estimating Services</h2>
        <div className="service-row">
          <div className="service-text">
            <p className="service-paragraph">
              CREW ESTIMATION offers specialized construction estimating services
              and material takeoffs with the help of construction managers and quantity
              surveyors. Most Contractors are so busy in running their jobsites that they
              NEGLECT the estimating. We create accurate cost estimates for contractors
              so they can win more bids and grow their business. Our mission is to be the
              leader in evaluating and managing potential construction estimates.
              CREW ESTIMATION has maintained a track record of delivering the right
              construction and material estimates to our valuable clients within the
              fastest turnaround time.
            </p>
            <p className="service-paragraph">
              We are proficient with <strong>Planswift and Bluebeam</strong>for on-screen Material Takeoffs. Also, for <strong>based pricing </strong>out the takeoffs, we use <strong>RSmeans, Craftsmen </strong>and our own developed databases
            </p>
            <p className="service-paragraph">
              Without any doubt, CREW ESTIMATION is the place where you get quality construction estimates and affordability under one roof.
            </p>
          </div>
          <div className="service-image">
            <img src="/123456789.png" alt="Construction Estimating" />
          </div>
        </div>
      </section>

      {/* Section 3: Cards - FIXED */}
      <section className="cards-section">
        <h2 className="cards-heading">Who We Serve</h2>
        <div className="cards-grid">
          {cards.map((card) => (
            <div key={card.id} className="card" onClick={() => setSelectedCard(card)}>
              <img src={card.image} alt={card.title} className="card-img" />
              <h3 className="card-title">{card.title}</h3>
              <p className="card-text">{card.text}</p>
            </div>
          ))}
        </div>

        {/* Fixed Modal Popup */}
        {selectedCard && (
          <div className="modal-overlay" onClick={() => setSelectedCard(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setSelectedCard(null)}>&times;</button>
              <img src={selectedCard.image} alt={selectedCard.title} className="modal-image" />
              <h3>{selectedCard.title}</h3>
              <p>{selectedCard.text}</p>
            </div>
          </div>
        )}
      </section>

      {/* Section 4: CTA */}
      <section className="cta-section">
        <div className="cta-left">
          <h2 className="cta-heading">LET'S MAKE YOUR BIDS PERFECT</h2>
        </div>
        <div className="cta-right">
          <button
            className="cta-button"
            onClick={() => window.open("https://wa.me/+17869870481", "_blank")}
          >
            Contact Us
          </button>

        </div>
      </section>

      {/* Section 5: New Left/Right */}
      <section className="new-section">
        <div className="new-left">
          <h4>Construction Takeoffs & Estimates</h4>
          <h1>HOW TO BEGIN WITH US!</h1>
          <h5>• Submit Your Drawing Plans</h5>
          <p>
            When you submit your drawing plans and specifications, we prepare a quote including invoice, turnaround time, and the delivery date of the estimate. we accept PDF format and your plans can be Bid set, Schematic, Design Development, Construction document, or conceptual drawings. It can be a dropbox link or portal link etc. Attach the file in contact us page and send us complete details by filling out the form.
          </p>
        </div>
        <div className="new-right">
          <h2>• Get A Quote</h2>
          <p>
            After reviewing the plans documents, you will get the quote within few minutes. As it gets accepted, you can pay the invoice via credit card, debit card or PayPal, and our team will start working on your project.

          </p>
          <h2>• Receive Estimate</h2>
          <p>
            You will receive an estimate that will contain all the material & labor quantities with pricing. We deliver the estimate and takeoff sheet in EXCEL or in our own template or in the client’s template, as per demand.
          </p>
        </div>
      </section>

      <section className="showcase-section">
        <div className="showcase-top">
          <h2>Our Portfolio & Services</h2>
          <p>
            We take pride in delivering outstanding results. Here are some of our
            featured works and services.
          </p>
        </div>

        <div className="showcase-grid">
          {showcaseItems.map((item, i) => (
            <div key={i} className="showcase-item">
              <div className="card-inner">
                {/* Front Side */}
                <div className="card-front">
                  <img src={item.image} alt={item.title} className="icon" />
                  <h3>{item.title}</h3>
                </div>

                {/* Back Side */}
                <div className="card-back">
                  <p>{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 7: Extra Left/Right Content */}
      <section className="extra-section">
        <h2 className="extra-heading">Why CREW ESTIMATION</h2>
        <div className="extra-content">
          <div className="extra-left">
            <h2>✔ Fastest Turnaround Time</h2>
            <p>We provide construction estimating services and quantity takeoffs within the fast turnaround time of 24 to 48 hours</p>
            <h2>✔ Affordable Prices</h2>
            <p>Our construction estimates and quantity takeoffs are at competitive market rates  are at competitive market rates on average. (It can be less or more depending on the scope of project)</p>
            <h2>✔ Accurate And Detailed Estimates</h2>
            <p>With the use of the latest Software and our developed construction cost database based on zip code, we can ensure accuracy in our estimates. We also offer on-demand vendor pricing.</p>
            <h2>✔ Pricing softwares</h2>
            <p>we use RS Means & Accubid for projects final pricing...</p>
          </div>
          <div className="extra-right">
            <h2>✔ 92% Bid-Hit Ratio</h2>
            <p>The bid winning ratio of our estimates is more than 92% as per our past contractor's bids data.</p>
            <h2>✔ Highly Skilled Professional Team</h2>
            <p>Our team comprises of Construction Estimators, Engineers, field experts, and construction managers.</p>

            <h2>✔ 24/7 Customer Support</h2>
            <p>Our customer support is available 24/7 to help you.</p>
          </div>
        </div>
      </section>
      <Graph />


      {/* Section 8: Steps */}
      <section className="steps-section">
        <h2 className="steps-heading">Steps For Estimating</h2>
        <div className="steps-grid">
          {stepItems.map((step, i) => (
            <div key={i} className="step-item">
              <img src={step.image} alt={step.title} />
              <h3>{step.title}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 md:py-20 ">
        <div className="container ">

          {/* Header */}
          <div className="text-left mb-10">
            <p className="text-2xl font-medium text-[#ff8c00] mb-2 ">
              Frequently Asked Questions
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#111] tracking-tight mt-6">
              What are you looking for?
            </h1>
          </div>

          {/* Accordion */}
          <div className=" rounded-xl shadow-md overflow w-full">
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                item={item}
                index={index}
                isOpen={openIndex === index}
                onToggle={handleToggle}
              />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;