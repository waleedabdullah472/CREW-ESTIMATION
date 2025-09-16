// MaterialTakeoff.jsx
import React from "react";
import "./MaterialTakeoff.css";

export default function MaterialTakeoff() {
  // 🔹 Portfolio Data with Different Headings & Images
  const portfolioItems = [
    { title: "Planning", image: "/11.png" },
    { title: "Scheduling", image: "/22.png" },
    { title: "Quantity & Material Takeoff", image: "/33.png" },
    { title: "Cost Estimation", image: "/44.png" },
    { title: "Concrete Takeoff", image: "/55.png" },
    { title: "Site Construction", image: "/66.png" },
    { title: "Concrete", image: "/77.png" },
    { title: "Masonry", image: "/88.png" },
    { title: "Wood and Plastics", image: "/99.png" },
    { title: "Thermal and Moisture Protection", image: "/1010.png" },
    { title: "Doors and Windows", image: "/111.png" },
    { title: "Finishes", image: "/222.png" },
    { title: "Conveying Systems", image: "/333.png" },
    { title: "Equipment", image: "/444.png" },
    { title: "Furnishings", image: "/555.png" },
    { title: "Electrical", image: "/666.png" },
    { title: "Special Construction", image: "/777.png" },
    { title: "Metals", image: "/888.png" },
    { title: "Specialties", image: "/999.png" },
    { title: "General Requirements", image: "/2020.png" },
  ];

  return (
    <div className="material-takeoff">
      {/* 🔹 Section 1 */}
      <section className="mt-section-one">
        <h2>Quantity And Material Takeoffs</h2>
        <p>
          CREW ESTIMATION offers a wide range of Quantity & Material Takeoff/
          Construction Takeoff Services to developers and contractors to the
          needs of the ever-growing construction industry.
        </p>
        <p>
          Quantity takeoffs are an essential aspect of the construction cost
          estimating process and can also be referred to as a construction
          takeoff.
        </p>
        <p>
          Both large and small projects use quantity takeoffs to determine actual
          costs, ensure that a project remains profitable to the contractor, and
          are a vital component of a final detailed estimate.
        </p>
        <p>
          General contractors, subcontractors, quantity surveyors, and estimators
          routinely produce quantity takeoffs during the estimation process.
        </p>
        <p>
          The information from a quantity takeoff is incorporated into a final
          detailed estimate, along with things like:
        </p>
        <p>• Labor costs</p>
        <p>• Office overhead costs</p>
        <p>• Subcontractor costs</p>
        <p>• Equipment rentals</p>
      </section>

      {/* 🔹 Section 2 */}
      <section className="mt-section-two">
        <h2>Different Types of Quantity Takeoffs:</h2>
        <p>
          Quantity takeoffs are prepared by a wide range of people and
          organizations within the construction industry, and each quantity
          takeoff can be unique.
        </p>
        <h3>1. MANUAL QUANTITY TAKEOFF</h3>
        <p>
         A manual quantity takeoff is simply a takeoff that is completed without the assistance of digital takeoff software. In the past, manual takeoffs were done entirely by hand. An estimator would examine physical drawings or blueprints and painstakingly create a list of materials. Many people still complete quantity takeoffs manually, but some do so with computer software assistance that information is entered into by hand. Although still aided by a computer, the process is still mostly manual. If done by hand, the estimator must make complex calculations. If done with a computer, software such as Excel can be used to perform specific calculations.
        </p>
        <h3>2. DIGITAL QUANTITY TAKEOFF</h3>
        <p>
          Digital quantity takeoffs are completed using construction estimating software that contains digital takeoff capability. Although each program has its own suite of features, the necessary process of creating a digital quantity takeoff is roughly the same. First, a blueprint is uploaded or scanned into the program. Following this, the program analyzes the blueprint or drawings and generates a list of all the required materials. At this point, the estimator can make any adjustments to the material requirements that they see. They may increase requirements for specific materials where wastage is common during the construction process. Any complex calculations required for assigning quantities to materials are embedded into the program, making this process more straightforward than a manual quantity takeoff.
        </p>
      </section>

      {/* 🔹 Section 3 */}
      <section className="mt-section-three">
        <h2>Quantity & Material Takeoff/ Construction Takeoff Services</h2>
        <p>
         We are using the powerful conceptual quantity and material takeoff estimate software. This information will be used on a project that takes the information available and imports it to an Excel spreadsheet that can be sent out to your sources for pricing. Once the best figures are available, our customers will get the estimated overall cost of their project. It is important to note that our expert conceptual or preliminary estimate will be determined by experienced construction cost estimators that are going to use the proper tools and a good view of the overall picture. Just trust us due to our years of experience and we are able to forecast costs of materials, labor, and knowledge of relevant markets.
        </p>
      </section>

      {/* 🔹 Section 4 - Portfolio with Unique Headings & Images */}
      <section className="mt-section-four">
        
        <div className="mt-image-grid">
          {portfolioItems.map((item, i) => (
            <div className="mt-image-card" key={i}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
