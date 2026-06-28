import type { Metadata } from "next";
import { LegalShell } from "@/components/sections/legal-shell";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Terms & Conditions",
  description:
    "The terms and conditions governing the use of the S.B. Global Workforce website and recruitment services for candidates and employers.",
  path: "/terms-and-conditions",
});

export default function TermsPage() {
  return (
    <LegalShell
      title="Terms & Conditions"
      crumbName="Terms & Conditions"
      updated="1 January 2025"
      intro={`These Terms & Conditions govern your use of the ${siteConfig.legalName} website and recruitment services. Please read them carefully.`}
      blocks={[
        {
          heading: "1. Acceptance of Terms",
          paragraphs: [
            `By accessing or using this website and the services of ${siteConfig.legalName}, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use our website or services.`,
          ],
        },
        {
          heading: "2. Our Services",
          paragraphs: [
            "We provide overseas manpower recruitment services, connecting Indian job seekers with international employers and assisting with screening, documentation, visa processing and deployment. Our services are provided in accordance with applicable Indian emigration laws and destination-country regulations.",
          ],
        },
        {
          heading: "3. Eligibility",
          paragraphs: [
            "To use our recruitment services, candidates must be of legal working age and meet the specific requirements of the relevant employer and destination country. Providing accurate and truthful information is a condition of using our services.",
          ],
        },
        {
          heading: "4. Candidate Responsibilities",
          list: [
            "Provide genuine, accurate and complete documents and information.",
            "Cooperate fully during screening, interviews and documentation.",
            "Comply with the laws of India and the destination country.",
            "Not engage in any fraudulent or misleading conduct.",
          ],
        },
        {
          heading: "5. Employer Responsibilities",
          list: [
            "Provide accurate job descriptions, contracts and working conditions.",
            "Comply with all applicable labour laws and ethical employment standards.",
            "Honour the terms of employment offered to deployed candidates.",
          ],
        },
        {
          heading: "6. Fees",
          paragraphs: [
            "Any applicable service fees and costs will be communicated transparently and in advance. We follow ethical recruitment practices and do not impose hidden charges. All payments should be made only through authorised channels.",
          ],
        },
        {
          heading: "7. No Guarantee of Employment",
          paragraphs: [
            "While we make every effort to place suitable candidates, registration with us does not guarantee employment. Final selection decisions rest with the employer, and visa approvals are subject to the relevant authorities.",
          ],
        },
        {
          heading: "8. Intellectual Property",
          paragraphs: [
            "All content on this website — including text, graphics, logos and images — is the property of S.B. Global Workforce or its licensors and is protected by applicable intellectual-property laws. You may not reproduce or distribute it without permission.",
          ],
        },
        {
          heading: "9. Limitation of Liability",
          paragraphs: [
            "To the maximum extent permitted by law, S.B. Global Workforce shall not be liable for any indirect, incidental or consequential damages arising from the use of our website or services, including matters beyond our reasonable control such as visa rejections or employer decisions.",
          ],
        },
        {
          heading: "10. Third-Party Links",
          paragraphs: [
            "Our website may contain links to third-party websites. We are not responsible for the content, privacy practices or accuracy of any external sites.",
          ],
        },
        {
          heading: "11. Governing Law",
          paragraphs: [
            "These Terms & Conditions are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts of Muzaffarpur, Bihar.",
          ],
        },
        {
          heading: "12. Contact Us",
          paragraphs: [
            `For any questions regarding these Terms & Conditions, please contact us at ${siteConfig.contact.email} or call ${siteConfig.contact.primaryPhone}.`,
          ],
        },
      ]}
    />
  );
}
