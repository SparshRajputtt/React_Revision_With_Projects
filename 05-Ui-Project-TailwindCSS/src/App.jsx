import React from "react";
import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";

const App = () => {
  const users = [
  {
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=900",
    intro: "The team delivered exactly what we envisioned — clean, modern, and fast. Couldn’t ask for better collaboration!",
    tag: "Satisfied",
    color: "mediumseagreen"
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=900",
    intro: "We finally found developers who truly understand our business goals, not just the code.",
    tag: "Impressed",
    color: "dodgerblue"
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1661767929421-3d7f6c6c228d?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=900",
    intro: "Smooth communication and timely delivery — they made our product launch stress-free.",
    tag: "Happy",
    color: "goldenrod"
  },
  {
    img: "https://images.unsplash.com/flagged/photo-1575227057258-50cb9bffb1af?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=900",
    intro: "Their approach to UI and backend integration was seamless. The end result speaks for itself.",
    tag: "Delighted",
    color: "tomato"
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1674513559454-35ca6435079f?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=900",
    intro: "They didn’t just build our website — they improved how we think about design and performance.",
    tag: "Grateful",
    color: "slateblue"
  },
  {
    img: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=900",
    intro: "Professional, detail-oriented, and creative. The dashboard they built exceeded expectations.",
    tag: "Thrilled",
    color: "teal"
  },
  {
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=900",
    intro: "Their attention to UI/UX details really elevated our app. Every small touch felt intentional.",
    tag: "Impressed",
    color: "orchid"
  },
  {
    img: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=900",
    intro: "The development team brought our concept to life beautifully. Our users love the new interface.",
    tag: "Inspired",
    color: "coral"
  },
  {
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=900",
    intro: "From wireframes to deployment, everything was handled smoothly and transparently.",
    tag: "Pleased",
    color: "deepskyblue"
  },
  {
    img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=900",
    intro: "Fast delivery, clean code, and an amazing team to work with. Definitely recommending them!",
    tag: "Delighted",
    color: "mediumvioletred"
  },
  {
    img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=900",
    intro: "They really understood our vision and turned it into a user-friendly product. Great experience overall.",
    tag: "Appreciative",
    color: "forestgreen"
  },
  {
    img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=900",
    intro: "Outstanding quality and excellent post-launch support. Truly a partner, not just a service provider.",
    tag: "Loyal",
    color: "darkorange"
  }
];

  return (
    <div>
      <Section1 users={users}/>
      <Section2 />
    </div>
  );
};

export default App;
