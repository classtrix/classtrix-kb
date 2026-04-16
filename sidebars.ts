import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      items: ['getting-started/login', 'getting-started/dashboard-overview'],
    },
    {
      type: 'category',
      label: 'Leads',
      items: ['leads/create-lead', 'leads/follow-up', 'leads/lead-status'],
    },
    {
      type: 'category',
      label: 'Admissions',
      items: ['admissions/admission-process', 'admissions/student-registration'],
    },
    {
      type: 'category',
      label: 'Batches & Lectures',
      items: ['batches-lectures/create-batch', 'batches-lectures/schedule-lecture'],
    },
    {
      type: 'category',
      label: 'Exams',
      items: ['exams/offline-exam', 'exams/marks-entry'],
    },
    {
      type: 'category',
      label: 'Finance',
      items: ['finance/record-payment', 'finance/refunds'],
    },
    {
      type: 'category',
      label: 'Reports',
      items: ['reports/sales-reports'],
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      items: ['troubleshooting/login-issues', 'troubleshooting/payment-errors'],
    },
  ],
};

export default sidebars;
