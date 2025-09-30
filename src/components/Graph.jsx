import React, { useEffect, useRef, useState } from "react";
import "./Graph.css";

const Graph = () => {
  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);
  const [currentGraph, setCurrentGraph] = useState(0);

  // Intersection Observer to trigger animations when the component enters the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCount(false); 
          setTimeout(() => setStartCount(true), 100); 
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Resets the carousel to the first graph on window resize
  useEffect(() => {
    const handleResize = () => {
      setCurrentGraph(0);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Component to animate percentage numbers
  const PercentCounter = ({ target }) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
      if (startCount) {
        let current = 0;
        const interval = setInterval(() => {
          current += Math.ceil(target / 40);
          if (current >= target) {
            current = target;
            clearInterval(interval);
          }
          setCount(current);
        }, 40);
        return () => clearInterval(interval);
      } else {
        setCount(0);
      }
    }, [startCount, target]);
    return <span>{count}%</span>;
  };

  // Component to animate whole numbers
  const Counter = ({ target }) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
      if (startCount) {
        let current = 0;
        const interval = setInterval(() => {
          current += Math.ceil(target / 60);
          if (current >= target) {
            current = target;
            clearInterval(interval);
          }
          setCount(current);
        }, 30);
        return () => clearInterval(interval);
      } else {
        setCount(0);
      }
    }, [startCount, target]);
    return <span>{count}</span>;
  };

  // Graph data to be displayed
  const graphs = [
    { label: "Fastest Turnaround Time", percent: 100 },
    { label: "Bid–Hit Ratio", percent: 90 },
    { label: "Detailed Estimates", percent: 80 },
    { label: "Highly Skilled Professional Team", percent: 95 },
    { label: "Affordable Prices", percent: 70 },
    { label: "24/7 Customer Support", percent: 85 },
  ];

  // Carousel navigation functions
  const nextGraph = () => {
    setCurrentGraph((prev) => (prev + 1) % graphs.length);
  };

  const prevGraph = () => {
    setCurrentGraph((prev) => (prev - 1 + graphs.length) % graphs.length);
  };

  return (
    <section className="newone-section" ref={sectionRef}>
      {/* Graph Rows - Desktop View */}
      <div className="graph-container desktop-view">
        {graphs.map((g, i) => (
          <div key={i} className="graph-row">
            <div className="graph-header">
              <span>{g.label}</span>
              <PercentCounter target={g.percent} />
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: startCount ? `${g.percent}%` : "0%" }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Graph Carousel - Mobile View */}
      <div className="graph-carousel mobile-view">
        <div className="carousel-controls">
          <button className="carousel-btn" onClick={prevGraph}>
            &lt;
          </button>
          <div className="carousel-indicators">
            {graphs.map((_, index) => (
              <span 
                key={index} 
                className={`indicator ${index === currentGraph ? 'active' : ''}`}
                onClick={() => setCurrentGraph(index)}
              ></span>
            ))}
          </div>
          <button className="carousel-btn" onClick={nextGraph}>
            &gt;
          </button>
        </div>
        
        <div className="graph-row">
          <div className="graph-header">
            <span>{graphs[currentGraph].label}</span>
            <PercentCounter target={graphs[currentGraph].percent} />
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: startCount ? `${graphs[currentGraph].percent}%` : "0%" }}
            ></div>
          </div>
        </div>
      </div>

      {/* Counter Cards */}
      <div className="newone-cards">
        <div className="newone-card">
          <img src="/144.png" alt="Happy Clients" className="newone-icon" />
          <h3>{startCount && <Counter target={200} />}+</h3>
          <p>Happy Clients</p> 
        </div>
        <div className="newone-card">
          <img src="/155.png" alt="Projects" className="newone-icon" />
          <h3>{startCount && <Counter target={1100} />}+</h3>
          <p>Projects</p>
        </div>
        <div className="newone-card">
          <img src="/166.png" alt="Years of Experience" className="newone-icon" />
          <h3>{startCount && <Counter target={10} />}+</h3>
          <p>Year of Experience</p>
        </div>
        <div className="newone-card">
          <img src="/177.png" alt="Winning Bids" className="newone-icon" />
          <h3>{startCount && <Counter target={250} />}+</h3>
          <p>Winning Bids</p>
        </div>
      </div>
    </section>
  );
};

export default Graph;