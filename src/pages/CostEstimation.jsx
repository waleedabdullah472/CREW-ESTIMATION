// CostEstimation.jsx
import React from "react";
import "./CostEstimation.css";

export default function CostEstimation() {
  return (
    <div className="cost-estimation">
      {/* 🔹 Section 1 */}
      <section className="section-one">
        <h2>Cost Estimation</h2>
        <p>
        CREW ESTIMATION offers a wide range of construction cost
         estimating services and cost management services to cater to the
          needs of the ever-growing construction industry.

Construction cost estimating is the process of forecasting the cost of 
building a physical structure. Of course, builders and clients both worry

 about the financial impact of cost overruns and failing to complete a project.

Clients considering large projects often seek multiple cost estimates, 
including those prepared by contractors and those calculated by independent estimators.

Project owners use cost estimates to determine a project’s scope and 

feasibility and to allocate budgets. Contractors use them when deciding
 whether to bid on a project. You usually prepare estimates with the input 
 of architects and engineers to ensure that a project meets financial feasibility 
 and scope requirements.

A good cost estimate prevents the builder from losing money and helps the 
customer avoid overpaying.
        </p>
      </section>

      {/* 🔹 Section 2 */}
      <section className="section-two">
        <h2>Different Types of Construction Cost Estimates we offer</h2>
        <p>
         Cost estimates are broken down into three categories that serve one of 

         three basic functions: design, bid, and control. To establish a project’s
          financing, you must start with a design estimate or a bid estimate.
        </p>
        <h3>1. DESIGN ESTIMATES</h3>
        <p>
 Design estimates include screening (order of magnitude) estimates, preliminary 
 (conceptual) estimates, detailed (definitive) estimates, and engineer’s estimates. 
 These estimates run parallel with the planning and design of a project.<br></br>
<p>• Design Estimates</p>
<p>• Screening estimates</p>
<p></p>• Engineer’s estimates (based on specifications and <p>architectural plans).</p>
<p>• Preliminary cost estimates</p>
        </p>
         <h3>2. BID ESTIMATES</h3>
         <p>Bid estimates are submitted to the investor for purposes of competitive
           bidding or general negotiation. These estimates consider the direct construction 
           cost including field supervision, as well as a markup to cover general overhead 
           and profits. Direct construction costs include subcontractor quotations, 
           quantity takeoffs, and construction procedures.</p>
        <h3>3. CONTROL ESTIMATES:</h3>
        <p>Control estimates are used throughout a project to monitor costs. 
          A control estimate establishes the budget estimate for financing, 
          the budgeted cost before construction, and the estimated cost of 
          completion during an ongoing project.</p>
          <p>• Budget cost estimate for financing purposes.</p>
          <p>• Budgeted cost after assigning to contractor but before construction.</p>
          <p>• Estimated cost of completion during ongoing construction.</p>
      </section>

      {/* 🔹 Section 3 */}
      <section className="section-three">
        <h2>The Requirement for Construction Cost Estimation Services</h2>
      <p>• Building Cost Estimation.</p>
      <p>• Residential Construction Cost Estimation</p>
      <p>• To estimate project construction budgets.</p>
      <p>• To establish financing requirements.</p>
      <p>• To establish benchmarks for a construction bid.</p>
      <p>• Establish whether a proposed new construction plan is profitable or not.</p>
      </section>

      {/* 🔹 Section 4 */}
      <section className="section-four">
        <h2>Our Portfolio</h2>
        <div className="image-grid">
          {/* Row 1 */}
          <div className="image-card">
            <img src="/cos1.png" alt="Project 1" />
            <h4>Residential Estimates</h4>
          </div>
          <div className="image-card">
            <img src="/cos 2.png" alt="Project 2" />
            <h4>Commercial Estimates</h4>
          </div>
          <div className="image-card">
            <img src="/cos3.png" alt="Project 3" />
            <h4>Civil Estimates</h4>
          </div>
          <div className="image-card">
            <img src="/cos4.png" alt="Project 4" />
            <h4>Industrial Estimates</h4>
          </div>

          {/* Row 2 */}
          <div className="image-card">
            <img src="/cos5.png" alt="Project 5" />
            <h4>MEP Estimates</h4>
          </div>
          <div className="image-card">
            <img src="/cos6.png" alt="Project 6" />
            <h4>Masonry & concrete Estimates</h4>
          </div>
          <div className="image-card">
            <img src="/cos7.png" alt="Project 7" />
            <h4>Other Specialty Estimates</h4>
          </div>
          <div className="image-card">
            <img src="/cos8.png" alt="Project 8" />
            <h4>Quick Turn Around Service</h4>
          </div>
        </div>
      </section>
    </div>
  );
}
