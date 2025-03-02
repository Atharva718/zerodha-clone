// // src/landing_page/home/Hero.test.js
// // import React from "react";
// import { render, screen } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";
// import Hero from "./landing_page/Hero"; // Adjust path if necessary

// describe("Hero Component", () => {
//   test("renders hero image", () => {
//     render(<Hero />); // Render the component

//     // Find the image by alt text
//     const heroImage = screen.getByAltText("HeroImage");
    
//     // Check if the image is in the document
//     expect(heroImage).toBeInTheDocument();

//     // Verify the src attribute (use a regex to avoid absolute path issues)
//     expect(heroImage).toHaveAttribute("src", expect.stringContaining("homeHero.png"));
//   });
// });
