import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import SearchBar from '@theme/SearchBar';

type FeatureItem = {
  title: string;
  description: ReactNode;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Lead Management',
    link: '/docs/leads',
    description: (
      <>
        Capture leads, assign counselors, manage follow-ups and convert them
        into admissions.
      </>
    ),
  },
  {
    title: 'Admissions & Courses',
    link: '/docs/admissions',
    description: (
      <>
        Manage courses, student admissions, enrollments and batches.
      </>
    ),
  },
  {
    title: 'Faculty & Lectures',
    link: '/docs/faculty',
    description: (
      <>
        Schedule lectures, assign faculty and manage attendance.
      </>
    ),
  },
  {
    title: 'Offline Exams',
    link: '/docs/exams',
    description: (
      <>
        Conduct exams, manage marks and analyze performance.
      </>
    ),
  },
  {
    title: 'Finance & Payments',
    link: '/docs/finance',
    description: (
      <>
        Track fees, refunds, expenses and financial reports.
      </>
    ),
  },
  {
    title: 'Reports & Analytics',
    link: '/docs/reports',
    description: (
      <>
        Analyze conversions, financial data and institute performance.
      </>
    ),
  },
];

function Feature({title, description, link}: FeatureItem) {
  return (
    <div className={clsx('col col--4 margin-bottom--lg')}>
      <div className="padding--md shadow--lw">
        <Heading as="h3">
          <a href={link}>{title}</a>
        </Heading>
        <p>{description}</p>
        <a className="button button--secondary button--sm" href={link}>
          View Guides
        </a>
      </div>
    </div>
  );
}

export default function Home(): ReactNode {
  return (
    <>
      <section className="container margin-top--lg text--center">
        <Heading as="h1">How can we help you?</Heading>

        <div className="homepage-search-bar">
          <SearchBar />
        </div>
      </section>

      <section className="container margin-top--xl">
        <Heading as="h2" className="text--center margin-bottom--lg">
          Browse Help Topics
        </Heading>

        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </section>

      <section className="container margin-top--xl">
        <Heading as="h2">Getting Started</Heading>

        <ul>
          <li>
            <a href="/docs/getting-started/login">
              Login to Classtrix
            </a>
          </li>

          <li>
            <a href="/docs/leads/create-lead">
              Create Your First Lead
            </a>
          </li>

          <li>
            <a href="/docs/admissions/create-admission">
              Convert Lead to Admission
            </a>
          </li>

          <li>
            <a href="/docs/batches/create-batch">
              Create Batch & Schedule Lectures
            </a>
          </li>

          <li>
            <a href="/docs/finance/collect-fee">
              Collect Student Fees
            </a>
          </li>
        </ul>
      </section>

      <section className="container margin-top--xl margin-bottom--xl text--center">
        <Heading as="h2">Need Help?</Heading>

        <p>
          If you cannot find the answer in documentation,
          please contact our support team.
        </p>

        <a
          className="button button--primary button--lg"
          href="mailto:support@classtrix.com">
          Contact Support
        </a>
      </section>
    </>
  );
}