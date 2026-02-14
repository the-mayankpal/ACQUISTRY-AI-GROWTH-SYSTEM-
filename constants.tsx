
import React from 'react';
import { NavItem, FeatureTab, FAQItem, Brand } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Products', href: '#' },
  { label: 'Resources', href: '#' },
  { label: 'Story', href: '#' },
  { label: 'FAQ', href: '#' },
];

export const FEATURE_TABS: FeatureTab[] = [
  { id: 'employees', label: 'AI Employees', icon: 'person_add' },
  { id: 'sdr', label: 'AI SDR Agent', icon: 'smart_toy' },
  { id: 'email', label: 'AI Cold Email Agent', icon: 'mail' },
  { id: 'proposal', label: 'AI Proposal Maker', icon: 'description' },
  { id: 'analyzer', label: 'AI Sales Call Analyzer', icon: 'monitoring' },
];

export const BRANDS: Brand[] = [
  { name: 'TECHFLOW' },
  { name: 'VELOCITY' },
  { name: 'NEXUS' },
  { name: 'SCALEFORCE' },
  { name: 'ORBIT' },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'How does the AI find leads?',
    answer: 'Our AI proprietary engine scans millions of data points across B2B platforms, company websites, and social signals to identify high-intent leads matching your Ideal Customer Profile.',
  },
  {
    question: 'Is this better than hiring an SDR?',
    answer: 'Acquisity works 24/7 without fatigue. It can process more data than a human team of 10 while maintaining a personalized touch, at a fraction of the cost.',
  },
  {
    question: 'Do I have control over what gets sent?',
    answer: 'Absolutely. You can review all drafts, set approval workflows, and define specific voice/tone parameters that the AI must follow.',
  },
  {
    question: 'What CRMs do you support?',
    answer: 'We offer native integrations with Salesforce, HubSpot, Pipedrive, and Slack, plus Zapier support for 5000+ other apps.',
  },
];
