
import type { Link, Project} from "@/lib/types";

export const NavLinks: Link[] = [
  {
    label: "Home",
    href: "#hero"
  },
  {
    label: "About",
    href: "#about"
  },
  {
    label: "Projects",
    href: "#projects"
  },
 
  {
    label: "Contact",
    href: "#contact"
  }
]

export const Socials: Link[] = [
  {
    label: "GitHub",
    href: "https://github.com/souadbouazizi",
    icon: "github"
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/souad-bouazizi-881250177/",
    icon: "linkedin"
  },
  {
    label: "Email",
    href: "souadbouazizi@gmail.com",
    icon: "mail"
  }
]

export const Projects: Project[] = [
  {
    title: "Dream Gym",
     thumbnail: "/assets/dgym.jpg",
    url: "https://souadbouazizi.github.io/dreamgym/",
    description: "DreamGym is a center dedicated to sport and gymnastics, offering a modern and inspiring space for all ages. We provide a variety of activities, including artistic gymnastics, rhythmic gymnastics, fitness, and functional training. Our qualified coaches support each member in reaching their personal goals, whether it's improving flexibility, strength, agility, or simply staying in shape. At DreamGym, we believe that sport is a dream accessible to everyone!"
  },
  {
    title: "Tunisia Travel",
     thumbnail: "/assets/travel.jpg",
    url: "https://souadbouazizi.github.io/website-travel/",
    description: "Tunisia Travel is your trusted travel agency for discovering the beauty and culture of Tunisia. We offer a wide range of services, including tailor-made tours, cultural excursions, desert adventures, seaside vacations, and historical visits. Our experienced team is passionate about creating unforgettable experiences, whether you're exploring ancient ruins, relaxing on beautiful beaches, or discovering vibrant cities. With Tunisia Travel, your journey is in good hands — authentic, personalized, and full of memories!"
  },
  {
    title: "Caffee House",
     thumbnail: "/assets/CHouse.jpg",
    url: "https://souadbouazizi.github.io/houseCoffe/",
    description:"Caffee House is a warm and welcoming place where coffee lovers can relax, connect, and enjoy delicious moments. We serve a variety of freshly brewed coffees, teas, and homemade pastries, all prepared with love and care. Whether you're meeting friends, working remotely, or simply taking a break, Caffee House offers the perfect cozy atmosphere. Every visit is a new experience of comfort, flavor, and good vibes."
  },
  {
      title: "Restau coffee",
       thumbnail: "/assets/restcafe.jpg",
      url: "https://souadbouazizi.github.io/restaucoffee/",
       description:"RestauCoffee combines the best of a cozy café and a delicious restaurant. We offer freshly brewed coffee, gourmet meals, homemade desserts, and a warm, relaxing atmosphere. Whether you're here for a quick coffee, a hearty lunch, or a sweet treat, RestauCoffee is the perfect place to unwind and enjoy good flavors. With friendly service and a passion for quality, every visit to RestauCoffee feels like a special moment."
    },
  {
    title: "Univercity central",
     thumbnail: "/assets/UC.jpg",
    url: "https://souadbouazizi.github.io/univercite-central/",
     description:"University Central is a dynamic center of learning, innovation, and excellence. We offer a wide range of academic programs designed to prepare students for success in an ever-changing world. With experienced faculty, modern facilities, and a vibrant student community, University Central is committed to empowering every student to reach their full potential. Here, education goes beyond the classroom — it’s about building skills, inspiring leadership, and shaping the future."
  },
  {
      title: "Nomane food",
       thumbnail: "/assets/nf.jpg",
      url: "https://souadbouazizi.github.io/nomad-flavors/",
       description:"At Nomane Food, we bring you a rich blend of traditional tastes and modern creativity. Our menu features fresh, high-quality ingredients prepared with passion, offering a variety of delicious dishes that celebrate flavor and authenticity. Whether you're craving a hearty meal, a light bite, or a sweet dessert, Nomane Food is the perfect place to enjoy great food in a warm and friendly atmosphere. Every dish tells a story — come and taste it!"
    },
    {
      title: "Phone Store",
       thumbnail: "/assets/PH-store.jpg",
      url: "https://souadbouazizi.github.io/phone-store/",
       description:"Phone Store is your go-to destination for the latest smartphones, accessories, and tech solutions. We offer a wide selection of top brands, expert advice, and excellent customer service to help you find the perfect device. Whether you're upgrading your phone, looking for the best deals, or needing a quick repair, Phone Store is here to keep you connected with the world — fast, easy, and reliable."
    },

    {
      title: "Dream jawlery",
      thumbnail: "/assets/DreamJ.jpg",
      url: "https://souadbouazizi.github.io/DreamJewelry/",
       description:"Dream Jewelry offers timeless elegance and unique designs for every special moment. Our collections feature carefully crafted pieces, from classic styles to modern creations, made with the finest materials. Whether you're celebrating love, marking a milestone, or treating yourself, Dream Jewelry brings a sparkle of beauty and emotion to your life. Let your dreams shine with us!"
    },
]


export const Info = {
  name: "Souad     BOUAZIZI",
  title: "front end developer",
  description: "A brief description about yourself.",
  email: "your@email",
  image: "/images/profile.png", 
  bio: "I am a Front-End Developer with 3.5 years of experience building responsive and scalable web applications using React, Next.js, and Tailwind CSS. I specialize in clean UI design, performance optimization, and delivering seamless user experiences with tools like Bootstrap and modern CSS frameworks..",
  experience: [
    {
      title: "Frontend Developer",
      details: "Frontend Developer with 3.5 years of experience in building scalable React applications and modern user interfaces. Proficient in JavaScript, React, and API integration, with a strong focus on performance, accessibility, and responsive design.."
    },
    {
      title: "UI/UX Designer",
      details: "UI/UX Designer with experience creating intuitive and visually engaging user interfaces for web platforms. Skilled in wireframing, prototyping, and user research to deliver user-centered design solutions."
    },
    {
      title: "Performance Optimization",
      details: "Improve page load speed, reduce resource usage, and ensure smooth user experience through techniques like lazy loading, code splitting, and efficient asset management."
    },
    {
      title: "Skills",
      details: "HTML5, CSS3, Bootstrap, TailwindCSS,  JS, TypeScript, Reactjs, Nodejs, NextJs"
    }
  ]
}







