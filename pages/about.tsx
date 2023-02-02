import Layout from "../components/layout";

export default function About() {
  return (
    <Layout title="About | Rose Kamal Love">
      <Intro />
      <h1 className="my-10 text-3xl font-black">My Experiences</h1>
      <Timeline />
    </Layout>
  );
}

export const Intro = () => (
  <div className="mx-2">
    <div className="flex items-center justify-center">
      <p className="max-w-2xl rounded-md bg-gray-200 px-4 py-4 text-center dark:bg-gray-900/60">
        I&apos;m a software developer who brings latency down to his humour
        level 🚀
      </p>
    </div>
    <div className="prose my-8 prose-a:decoration-1 prose-a:underline-offset-4 hover:prose-a:decoration-2 dark:prose-invert lg:prose-xl xl:prose-2xl">
      <p>
        I am a self taught full-stack web developer who loves applying his
        skills to develop cool projects, and contribute to open-source. I love
        music, and am something of an <em>HTML Coder</em> myself, in the world
        of <a href="https://soundcloud.com/user-276723683">music production</a>
      </p>
      <p>
        Though, I have recently been getting my hands dirty making{" "}
        <a href="https://youtube.com/@rosekamallove">YouTube Videos</a> about{" "}
        <span className="font-medium">
          a philosophical approach to life and writing code.
        </span>{" "}
        And, I have been working on building{" "}
        <a href="https://discord.com/invite/e5SnnVP3ad">a community</a> of
        excellent developers, I would love for you to be a part of it.
      </p>
      <p>
        I take self proclaimed{" "}
        <em>
          <a href="https://instagram.com/rosekamallove">awesome pictures</a>
        </em>{" "}
        too, as a hobby.
      </p>
    </div>
  </div>
);
export const Links = () => <div />;

export const Timeline = () => {
  return (
    <ol className="prose relative mx-3 border-l border-gray-300 dark:border-gray-900 dark:prose-invert lg:prose-lg">
      {Experiences.map((experience) => (
        <li key={experience.name} className="mb-10 ml-6">
          <span className="absolute -left-2 mt-3 flex h-4 w-4 items-center justify-center rounded-full bg-gray-300 ring-8 ring-gray-100 dark:bg-gray-900 dark:ring-black">
            <svg
              aria-hidden="true"
              className="h-2 w-2 text-gray-300 dark:text-gray-900"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fillRule="evenodd" clipRule="evenodd"></path>
            </svg>
          </span>
          <h3 className="mb-1 flex items-center text-lg font-semibold text-gray-900 dark:text-white">
            {experience.name}
            {experience.current && (
              <span className="mr-2 ml-3 rounded bg-gray-300 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-900 dark:text-gray-500">
                Currently Working
              </span>
            )}
          </h3>
          <time className="mb-2 block text-sm font-normal leading-none">
            {experience.date}
          </time>
          <ul>
            {experience.description.map((d, idx) => (
              <>
                {idx === 0 ? (
                  <p key={idx}>
                    <div dangerouslySetInnerHTML={{ __html: d }} />
                  </p>
                ) : (
                  <li key={idx}>
                    <div dangerouslySetInnerHTML={{ __html: d }} />
                  </li>
                )}
              </>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
};

const Experiences = [
  {
    name: "Material Depot (YC W22) - Software Intern",
    description: [
      "Working on a <b>React.js</b> codebase with <b>mobx</b> as the state management library",
      "Migrated React.js frontend to V3 of API and added e-commerce functionality",
      "Built a CRM using React.js and Material UI",
    ],
    date: "January 2023 - Current",
    current: true,
  },
  {
    name: "Google Summer of Code (LibreHealthIO)",
    description: [
      "I worked on re-writing the UI of LH Toolkit & Radiology as an Open Web Application following the FHIR Standard",
      "The rewrite is done using React.js as the UI Library and <b>React Query + Axios</b> for cached data fetching",
      "The web components are built using <b>Polymer.js</b> and uses Material UI, and follow the FHIR Spec",
    ],
    date: "June 2022 - September 2022",
    current: false,
  },
  {
    name: "BlendED - Fronted Intern",
    description: [
      "I worked on Next.js & TailwindCSS codebase to redesign the teacher’s and parent’s landing pages and,",
      "Added firstLogin personalisation flow and persisted data using <b>React Query</b>, improved invoke time <b>by ~40%</b>",
      "Integrated <b>Mix Panel Analytics</b> tool for various functions, which highly impacted the product launch analysis",
      "Implemented a scalable video tooltip modal component that invokes on the first user visit using cookies",
    ],
    date: "May 2022 - June 2022",
    current: false,
  },
  {
    name: "MLH Fellowship - Open Source",
    description: [
      "Worked on a CLI application (repo-report) that shows the maintainer’s GitHub info on the terminal",
      "Updated the <b>GraphQL</b> queries and validations to add two new metrics from Github’s GraphQL API",
      "Refactored the code which decreased the hassle of adding new metrics from 5 files to 1 file - by 25%",
      "Wrote tests to type-check the Metrics and their properties using <b>tape.js</b> with jsonschema for variables",
      "Worked on a Web Based client for the CLI using React.js and TailwindCSS making the app more accessible",
    ],
    date: "June 2022 - September 2022",
    current: false,
  },
];
