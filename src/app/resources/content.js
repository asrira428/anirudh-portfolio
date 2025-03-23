import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Anirudh",
  lastName: "Sriram",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full Stack Developer",
  avatar: "/images/avatar.jpg",
  location: "America/New_York", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about new advancements in technology, and share thoughts on the current impacts of software engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/asrira428",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/anirudh-sriram-b106291b0/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:asrira428@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Full Stack engineer and builder</>,
  subline: (
    <>
      I'm Anirudh, a Computer Science/Engineering student at Georgia Tech, with primary experience in Machine Learning Applications, and AI Applied Data Analysis.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm a full-stack developer and computer science student based in Atlanta with a passion for turning complex problems into intuitive, high-impact digital solutions. My work spans web and mobile development, AI-powered tools, and building seamless experiences that connect front-end design with back-end architecture.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Memorial Sloan Kettering / Weill Cornell Medicine",
        timeframe: "May 2024 - August 2024",
        role: "AI/ML Intern",
        achievements: [
          <>
            Designed deep learning models in Python and R for scalable preprocessing of single-cell RNA-seq datasets using distributed systems and AWS services, 
            enabling scalable data analysis and reducing processing time by 40%.
          </>,
          <>
            Designed and implemented machine learning models and statistical frameworks using achieving 87% accuracy using efficient algorithms and scalable tools like Scanpy, 
            TensorFlow, PyTorch, Docker and Scikit for sample stratification.
          </>,
          <>
            Built and automated data visualization Saas workflows with Matplotlib and Seaborn to illustrate CIN-driven changes in the tumor microenvironment, 
            reducing manual processing time by 50%.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: "Georgia Tech Dr. Ahmet Coskun Lab",
        timeframe: "09/2023 - 12/2024",
        role: "Lead Designer",
        achievements: [
          <>
            Designed clustering algorithms for Alzheimer’s patient gene expression analysis, leveraging unsupervised 
            learning techniques and statistical machine learning algorithms to optimize performance for datasets of 1M+ records.
          </>,
          <>
            Developed fault-tolerant workflows integrating Kubernetes, NLP models, Python, PyTorch and Sklearn to automate
             high-throughput analyses via Bayesian statistical methods and optimize image segmentation and improve scalability.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Georgia Institute of Technology",
        description: <>Computer Science, Engineering, Industrial Design</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Languages",
        description: <>Python, R/RStudio, Java, React.js, HTML, C, JavaScript, TypeScript, SQL, Swift, C++, Ruby</>,
        // optional: leave the array empty if you don't want to display images
        images: [        ],
      },
      {
        title: "Tools",
        description: <>IntelliJ, RStudio, TensorFlow, PyTorch, AWS, Git, scikit-learn, Tableau, REST API, Flask, Docker, Firebase</>,
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
      {
        title: "Certifications and Skills",
        description: <>AWS Certified Cloud Practicioner, NVIDIA Certified Infiniband Essentials, AWS, Restful API Integration, Full-Stack Development, Machine Learning, Deep Learning, Frontend Development, Single Cell Analysis, ETL Pipelines, Multidisciplinary Collaboration, Mentoring</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
