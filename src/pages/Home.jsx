import React, { useState } from 'react';
import './Home.css';
import Graph from './../components/Graph';

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
    { image: "/6.svg", title: "Masonry Estimating", text: "We provide masonry takeoffs services to all the contractors involved in residential and commercial projects. We quantify each and everything in the masonry trade with details and description from concrete block, brick, stone, glazed tiles, facing bricks, architectural precast, marble, precast lentils, precast sills, steel, itemize rebar, wire mesh, anchors, dowels, sill block, lintels, bond beams etc." },
    { image: "/7.svg", title: "Paint Estimating", text: "For Painting Contractors, we prepare detailed and accurate estimates or material takeoffs, man-hours, and labor costs to avoid potential wastages. we takeoff all the quantities coatings, finishes, DTM, glazed and specialized coatings by mentioning the Walls and partitions details and description in proper line items. we use Bluebeam and Planswift for painting estimates." },
    { image: "/8.svg", title: "Drywall Estimating", text: "Drywall contractors being our regular clients need accurate estimates to quote prices to general contractors and takeoffs to order materials from suppliers. We quantify drywall sheets, Gypsum wall Boards, tape, joint compound, drywall screws. corner beads, labor costs, transportation costs, etc. We usually quantify drywall mud, drywall sheets, acoustic insulations, beads, studs etc." },
    { image: "/9.svg", title: "Sitework & Earthwork Estimating", text: "Our experienced estimators deliver sitework takeoffs as well as earthwork takeoffs and site improvement takeoffs to excavators and contractors. We do takeoffs for cut & fill , swimming pool, bicycle rack, bollards, patio, LANDSCAPING, fencing, piers, foundations and walls, pavement seal coats, brick pavers, concrete pavers, stone pavers, utilities, etc." },
    { image: "/10.svg", title: "Thermal & Moisture Protection Estimating", text: "Our residential and commercial building cost estimators are very much hands-on with thermal and moisture protection trade of work. Waterproofing, ROOFING, Fire Stopping, caulking, SIDING, sealants, roof consultants, flashing and trim contractors have been served by CREW ESTIMATION for number of years with estimates ranging from sealants and vapor barriers to insulation." },
    { image: "/1.svg", title: "Flooring Estimating", text: "We have a team of qualified flooring estimators who are capable to quickly and accurately estimate floor finishes. This includes VCT tiles, LVT tiles, carpets, rubber tiling, wood flooring, etc. Our flooring estimators can easily handle big commercial jobs using softwares like Planswift and Bluebeam. Our expertise is in preparing flooring estimates for apartments, hotels, hospitals, arenas, schools, etc." },
    { image: "/3.svg", title: "MEP Estimating", text: "We offer MEP takeoff and estimation services to contractors involved in MECHANICAL, ELECTRICAL, and PLUMBING services. We have a separate department of expert MEP estimators. In MEP estimates we cover everything including HVAC, Sheet Metal, Ductwork, Process Piping, pipe insulation, and instrumentation & Controls, etc. We use specialized software for trade-specific cost estimates." },
    { image: "/2.svg", title: "Metal Estimating", text: "We render accurate and affordable metal estimating and takeoffs with detailing and steel contractors, framers, distributors, and fabricators. Structural & Miscellaneous steel takeoff of all the quantities including Beams, Columns, trusses, castings, railings, gratings, fasteners, joints, anchors & bolts, etc. For steel estimating, we deal with all decks, trusses, fences, stud framing, gratings, joists etc" },
    { image: "/4.svg", title: "Lumber Estimating", text: "We help Framing contractors, Millwork contractors, Commercial Contractors, and Builders by providing precise millwork estimates or lumber takeoffs. Our takeoffs include Rough & Finish Carpentry, wood trusses, drywall framing, cabinetry, millwork, lumber and timber, etc. We save the expense of estimating software through our expert team of estimators performing accurate and timely takeoff" },
    { image: "/5.svg", title: "Concrete Estimating", text: "We offer thorough and reliable estimates and quantity takeoffs to contractors in all concrete work. We provide construction takeoff and estimates for all concrete work including foundation, footing, slabs, blocks, pavers, driveways, garage, basement takeoffs, and parking lots takeoffs, etc. We use Bluebeam and Planswift softwares for concrete estimating services." },
    

     { image: "/12121212 (1).png", title: "Doors and Windows", text: "From residential homes to large commercial projects, our doors and windows estimating services deliver accurate takeoffs for frames, glazing, fittings, and accessories. We help contractors reduce waste, control costs, and secure bids with precise calculations tailored to each project’s requirements." },
    { image: "/12121212 (2).png", title: "Carpentry", text:"Our carpentry estimation covers everything from structural framing to detailed woodwork. Whether it’s trusses, cabinetry, timber, or interior finishing, we provide contractors with reliable takeoffs that ensure projects stay within budget and timelines while maintaining high craftsmanship standards." },

  ];

  // Step Section images
  const stepItems = [
    { image: "/pro.png", title: "Project" },
    { image: "/rev.png", title: "Reviewing" },
    { image: "/proooo.png", title: "Proposal" },
    { image: "/cal.png", title: "Estimation" },
    { image: "/search.png", title: "Rechecking" },
  ];

  return (
    <div className="home-container">
      {/* Section 1: Hero */}
      <section className="hero-section full-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h2 className="hero-subtitle">Welcome to CREW ESTIMATION</h2>
          <h1 className="hero-title">
            CONSTRUCTION ESTIMATING <br /> & MATERIAL TAKEOFF SERVICES
          </h1>
          <p className="hero-paragraph">
            WE HELP BUSY CONTRACTORS IN ESTIMATE AND WINNING BIDS
          </p>
          <button 
  className="hero-button"
  onClick={() => window.open("https://wa.me/+17869870481", "_blank")}
>
  GET STARTED
</button>

        </div>
      </section>

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

      {/* Section 6: Showcase */}
      <section className="showcase-section">
        <div className="showcase-top">
          <h2>Our Portfolio & Services</h2>
          <p>We take pride in delivering outstanding results. Here are some of our featured works and services.</p>
        </div>
        <div className="showcase-grid">
          {showcaseItems.map((item, i) => (
            <div key={i} className="showcase-item">
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
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
    </div>
  );
};

export default Home;