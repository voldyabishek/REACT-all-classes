import { useState } from "react";
import "./Css components/Package.css"; // Import the CSS file

const packages = [
  {
    id: 1,
    category: "Fishing Tours",
    title: "Deep Sea Fishing Adventure",
    image: "https://source.unsplash.com/400x250/?fishing,sea",
    price: "$150",
    duration: "4 Hours",
    description: "Experience deep-sea fishing with expert guides.",
  },
  {
    id: 2,
    category: "Resort Stays",
    title: "Luxury Beachfront Villa",
    image: "https://source.unsplash.com/400x250/?beach,resort",
    price: "$250 per night",
    duration: "1 Night",
    description: "Stay in a beautiful beachfront villa with top amenities.",
  },
  {
    id: 3,
    category: "Combo Packages",
    title: "Fishing & Stay Combo",
    image: "https://source.unsplash.com/400x250/?ocean,tour",
    price: "$350",
    duration: "2 Days",
    description: "Enjoy a fishing tour with a luxurious overnight stay.",
  },
];

const PackagePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPackages =
    selectedCategory === "All"
      ? packages
      : packages.filter((pkg) => pkg.category === selectedCategory);

  return (
    <div className="container">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>Explore Our Packages</h1>
        <p>Choose the perfect experience for your sea adventure!</p>
      </div>

      {/* Category Filters */}
      <div className="category-filters">
        {["All", "Fishing Tours", "Resort Stays", "Combo Packages"].map((category) => (
          <button
            key={category}
            className={selectedCategory === category ? "active" : ""}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Package Cards */}
      <div className="packages">
        {filteredPackages.map((pkg) => (
          <div key={pkg.id} className="package-card">
            <img src={pkg.image} alt={pkg.title} />
            <div className="package-content">
              <h2>{pkg.title}</h2>
              <p>{pkg.duration}</p>
              <p className="price">{pkg.price}</p>
              <p>{pkg.description}</p>
              <button className="book-now">Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackagePage;
