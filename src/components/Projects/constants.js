export const projects = [
  {
    id: 1,
    name: "Portfolio Website",
    urls: [
      "https://tom.fisc.dev",
      "https://fisc.dev",
      "https://tom.fschr.dev",
      "https://fschr.dev",
      "https://www.tomfischer.ca",
      "https://tomfischer.ca",
    ],
    repository: "https://github.com/tgfischer/tomfischer-gatsby",
    startDate: "July 2018",
    thumbnail: "/images/portfolio.PNG",
    details: [
      "Built a static website using React, Gatsby, Material UI, and Serverless Framework",
      "Hosted with AWS S3 and Cloudfront",
      "Utilizes server-side rendering with Gatsby for performance and SEO",
      "Cost to host the website is $1.50 a month",
      "Website is responsive, and designed to work on mobile devices",
    ],
    technologies: [
      "JavaScript",
      "React",
      "Material UI",
      "Serverless Framework",
      "NodeJS",
      "Gatsby",
      "AWS S3",
      "AWS Lambda",
      "AWS CloudFront",
      "AWS Route 53",
      "AWS CloudFormation",
      "AWS Certificate Manager",
    ],
  },
  {
    id: 2,
    name: "Megan Shea Dressage",
    urls: [
      "https://megansheadressage.com",
      "https://www.megansheadressage.com",
    ],
    repository: "https://github.com/tgfischer/Megan-Shea",
    startDate: "March 2016",
    endDate: "May 2016",
    thumbnail: "/images/meganshea.PNG",
    details: [
      "Created a portfolio for the owner to showcase their horses, and advertise their training services",
      "Created a custom CMS to allow the owner to have full control over the website",
      "Developed with EJS, NodeJS, and MongoDB",
      "Hosted in a Digital Ocean droplet",
    ],
    technologies: [
      "JavaScript",
      "NodeJS",
      "Semantic UI",
      "EJS",
      "MongoDB",
      "Digital Ocean",
    ],
  },
  {
    id: 3,
    name: "D's Construction",
    urls: ["https://ds.construction"],
    repository: "https://github.com/tgfischer/dsconstruction",
    startDate: "March 2018",
    endDate: "May 2018",
    thumbnail: "/images/dsconstruction.PNG",
    details: [
      "Built a dynamic website using React, Material UI, and Serverless Framework",
      "Built custom content management system so the user can modify the website independently",
      "Added a photo management service with Python, Docker, and Serverless Framework, which automatically generates thumbnails when photos are uploaded to S3",
      "Hosted with AWS S3 and Cloudfront",
      "Managed several services in a monorepo with Lerna",
      "Website is responsive, and designed to work on mobile devices",
      "Published an npm package called serverless-build-client to allow static websites hosted in AWS S3 to use environment variables from a Serverless template",
    ],
    technologies: [
      "JavaScript",
      "React",
      "Material UI",
      "Serverless Framework",
      "NodeJS",
      "Lerna",
      "Python",
      "Docker",
      "AWS S3",
      "AWS Lambda",
      "AWS CloudFront",
      "AWS Route 53",
      "AWS CloudFormation",
      "AWS Certificate Manager",
      "AWS Cognito",
    ],
  },
]
