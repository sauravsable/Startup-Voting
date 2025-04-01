import pitchIdea from '../assets/pitchIdea.jpg';
import voting from '../assets/voting.jpg';
import funding from '../assets/funding.jpg';
import collaboration from '../assets/collaboration.jpg';

export const features = [
    {
      idx: 0,
      title: "Pitch Your Idea",
      description: "Have a groundbreaking startup concept? Startup Sprint gives you the stage to present your idea to a panel of industry experts, seasoned investors, and a community of entrepreneurs. Whether you're solving a major problem, introducing a disruptive innovation, or redefining an industry, this is your chance to showcase your vision. Gain valuable insights, receive constructive feedback, and refine your pitch with expert guidance. A well-presented idea could attract not only investments but also strategic partnerships that accelerate your startup’s journey.",
      image_path: pitchIdea,
    },
    {
      idx: 1,
      title: "Live Audience Voting",
      description: "The best way to validate a startup idea is through real-world feedback. At Startup Sprint, audience members—including investors, mentors, and fellow entrepreneurs—can vote for the ideas they believe have the highest potential. This interactive voting system helps you gauge market interest, test your concept in front of a relevant audience, and gain early traction. The more votes your idea gets, the higher its chances of standing out. Winning audience support can open doors to funding, collaborations, and even media coverage.",
      image_path: voting,
    },
    {
      idx: 2,
      title: "Top 3 Get Funded",
      description: "At Startup Sprint, we don’t just offer exposure—we provide real opportunities. The top three ideas with the most votes secure direct investment from leading venture capitalists and angel investors. This funding can be the crucial push needed to turn an idea into a fully operational startup. Along with capital, winners also receive mentorship, networking opportunities, and strategic business support to scale their vision. If you believe in your startup idea, compete for a chance to get funded and make your entrepreneurial dream a reality.",
      image_path: funding,
    },
    {
      idx: 3,
      title: "Find Collaborators",
      description: "Great ideas need strong teams to succeed. Startup Sprint helps you connect with talented individuals who can bring your vision to life. Whether you need a tech co-founder, a marketing strategist, a product designer, or business development experts, our platform makes it easy to find the right people. Collaborating with the right minds can significantly improve your chances of success, making your startup stronger, more innovative, and investor-ready. Build a team that believes in your idea as much as you do!",
      image_path: collaboration
    }
]

export const startupIdeasData = [
  {
    id: 1,
    name: "EcoCharge",
    description: "A sustainable energy startup that provides portable solar-powered charging stations for electric vehicles.",
    image_path: "/Images/startups/ecocharge.webp",
    submission_date: "2025-02-15",
    votes: 1280,
  },
  {
    id: 2,
    name: "MediConnect",
    description: "A blockchain-based platform ensuring secure and seamless sharing of patient medical records between hospitals and clinics.",
    image_path: "/Images/startups/mediconnect.webp",
    submission_date: "2025-02-12",
    votes: 950,
  },
  {
    id: 3,
    name: "SkillBridge",
    description: "A platform that connects students and professionals with companies offering short-term freelance projects to gain real-world experience.",
    image_path: "/Images/startups/skillbridge.webp",
    submission_date: "2025-02-10",
    votes: 1105,
  },
  {
    id: 4,
    name: "AgriTech AI",
    description: "AI-driven analytics for farmers to predict soil health, crop yield, and market demand for better decision-making.",
    image_path: "/Images/startups/agritechai.webp",
    submission_date: "2025-02-08",
    votes: 1423,
  },
  {
    id: 5,
    name: "UrbanNest",
    description: "A smart co-living space concept integrating IoT and community-based networking for digital nomads and entrepreneurs.",
    image_path: "/Images/startups/urbannest.webp",
    submission_date: "2025-02-05",
    votes: 875,
  },
];

export const locationData = [
  { id: 1, location_details: "EliteMart HQ, Bangalore, India" },
  { id: 2, location_details: "EliteMart Warehouse, Mumbai, India" },
  { id: 3, location_details: "EliteMart Store, Delhi, India" },
];
