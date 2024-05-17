const elementIdToSectionMap = new Map([
  ["page-title", "heroSection"],
  ["page-subtitle", "heroSection"],
  ["page-button", "heroSection"],
  ["filter-box", "bodySection"],
  ["job-card", "bodySection"],
  ["job-title", "bodySection"],
]);

const propsPageStructure = {
  isEditor: true,
  currentElement: "",
  heroSection: {
    "page-title": {
      id: "page-title",
      text: "Find you first job",
      hide: false,
      sno: 1,
    },
    "page-subtitle": {
      id: "page-subtitle",
      text: "Explore the best job opportunities and start your career journey with us.",
      hide: false,
      sno: 2,
    },
    "page-button": {
      id: "page-button",
      text: "Get Job",
      hide: false,
      sno: 3,
    },
  },
  bodySection: {
    "filter-box": {
      id: "filter-box",
      hide: false,
      sno: 1,
    },
    "job-card": {
      id: "job-card",
      hide: false,
      title: {
        id: 'job-title',
        text: "Job Title",
      },
      content: [
        {
          title: "Software Engineer",
          description:
            "Develop and maintain web applications using modern frameworks and technologies. Collaborate with cross-functional teams to define, design, and ship new features.",
          hide: false,
          sno: 1,
        },
        {
          title: "Marketing Intern",
          description:
            "Assist in the creation and execution of marketing campaigns. Manage social media accounts and analyze performance metrics to improve engagement.",
          hide: false,
          sno: 2,
        },
        {
          title: "Data Analyst",
          description:
            "Analyze large datasets to identify trends and insights. Create data visualizations and reports to support business decision-making.",
          hide: false,
          sno: 3,
        },
        {
          title: "Customer Support Representative",
          description:
            "Provide excellent customer service through phone, email, and chat. Resolve customer issues and escalate as necessary to ensure customer satisfaction.",
          hide: false,
          sno: 4,
        },
        {
          title: "Product Manager",
          description:
            "Lead product development from concept to launch. Work with stakeholders to define product requirements and prioritize features based on business goals.",
          hide: false,
          sno: 5,
        },
        {
          title: "Graphic Designer",
          description:
            "Create visually appealing graphics for digital and print media. Collaborate with the marketing team to produce creative content that aligns with brand guidelines.",
          hide: false,
          sno: 6,
        },
        {
          title: "Sales Executive",
          description:
            "Drive sales growth by identifying new business opportunities and building relationships with potential clients. Meet and exceed sales targets through effective sales strategies.",
          hide: false,
          sno: 7,
        },
        {
          title: "HR Coordinator",
          description:
            "Support HR functions including recruitment, onboarding, and employee relations. Maintain employee records and assist with payroll processing.",
          hide: false,
          sno: 8,
        },
      ],
      sno: 2,
    },
  },
};

export { propsPageStructure, elementIdToSectionMap };
