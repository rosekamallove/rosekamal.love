import Layout from "../components/layout";

const Experiences = [
  {
    name: "Material Depot (YC W22) - Software Intern",
    description: [
      "",
      "Migrated React.js frontend to V3 of API and added E Commerce functionality",
      "Built a CRM using React.js and Material UI",
    ],
    date: "January 2023 - Current",
    current: true,
  },
  {
    name: "Google Summer of Code (LibreHealthIO)",
    description: [
      "I worked on re-writing the UI of LH Toolkit & Radiology as an Open Web Application following the FHIR Standard",
      "The rewrite is done using React.js as the UI Library and React Query + Axios for cached data fetching",
      "The web components are built using Polymer.js and uses Material UI, and follow the FHIR Spec",
    ],
    date: "June 2022 - September 2022",
    current: false,
  },
  {
    name: "BlendED - Fronted Developer Intern",
    description: [
      "I worked on Next.js & TailwindCSS codebase to redesign the teacher’s and parent’s landing pages and,",
      "Added firstLogin personalisation flow and persisted data using React Query, improved invoke time by ~40%",
      "Integrated Mix Panel Analytics tool for various functions, which highly impacted the product launch analysis",
      "Implemented a scalable video tooltip modal component that invokes on the first user visit using cookies",
    ],
    date: "May 2022 - June 2022",
    current: false,
  },
  {
    name: "Google Summer of Code (LibreHealthIO)",
    description: [
      "Worked on a CLI application (repo-report) that shows the maintainer’s GitHub info on the terminal",
      "Updated the GraphQL queries and validations to add two new metrics from Github’s GraphQL API",
      "Refactored the code which decreased the hassle of adding new metrics from 5 files to 1 file - by 25%",
      "Wrote tests to type-check the Metrics and their properties using tape.js with jsonschema for variables",
      "Worked on a Web Based client for the CLI using React.js and TailwindCSS making the app more accessible",
    ],
    date: "June 2022 - September 2022",
    current: false,
  },
];

export default function About() {
  return (
    <Layout title="About | Rose Kamal Love">
      <h1 className="my-10 text-5xl font-black">My Experiences</h1>
      <Timeline />
    </Layout>
  );
}

export const Intro = () => <div />;
export const Links = () => <div />;

export const Timeline = () => {
  return (
    <ol className="relative mx-2 border-l border-gray-200 dark:border-gray-700">
      {Experiences.map((experience) => (
        <li className="mb-10 ml-6">
          <span className="absolute -left-2 flex h-4 w-4 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
            <svg
              aria-hidden="true"
              className="h-2 w-2 text-blue-800 dark:text-blue-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill-rule="evenodd" clip-rule="evenodd"></path>
            </svg>
          </span>
          <h3 className="mb-1 flex items-center text-lg font-semibold text-gray-900 dark:text-white">
            {experience.name}
            {experience.current && (
              <span className="mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                Currently Working
              </span>
            )}
          </h3>
          <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            {experience.date}
          </time>
          <ul className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            {experience.description.map((d, idx) => (
              <li key={idx} className="my-1">
                {idx != 0 && " • "}
                {d}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
};
