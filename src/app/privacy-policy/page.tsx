import type { Metadata } from "next";
import { LegalShell } from "@/components/sections/legal-shell";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How S.B. Global Workforce collects, uses and protects the personal information of candidates and employers who use our website and recruitment services.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <LegalShell
      title="Privacy Policy"
      crumbName="Privacy Policy"
      updated="1 January 2025"
      intro={`This Privacy Policy explains how ${siteConfig.legalName} collects, uses, discloses and safeguards your information when you visit our website or use our recruitment services.`}
      blocks={[
        {
          heading: "1. Introduction",
          paragraphs: [
            `${siteConfig.legalName} ("we", "us", or "our") is committed to protecting the privacy of every candidate, employer and visitor. This policy describes our practices regarding the personal data we handle and your rights in relation to it.`,
            "By using our website or services, you consent to the collection and use of information in accordance with this policy.",
          ],
        },
        {
          heading: "2. Information We Collect",
          paragraphs: [
            "We may collect the following categories of information to provide our recruitment services effectively:",
          ],
          list: [
            "Identity and contact details — name, phone number, email address and postal address.",
            "Professional information — qualifications, work experience, skills, trade certifications and CV details.",
            "Documentation — passport details, photographs and other documents required for visa and emigration processing.",
            "Usage data — basic technical information such as browser type and pages visited, collected automatically.",
          ],
        },
        {
          heading: "3. How We Use Your Information",
          paragraphs: [
            "We use the information we collect strictly for legitimate recruitment and business purposes, including:",
          ],
          list: [
            "Matching candidates with suitable overseas job opportunities.",
            "Processing documentation, medicals, visas and emigration clearance.",
            "Communicating with you about applications, vacancies and updates.",
            "Complying with legal, regulatory and government requirements.",
          ],
        },
        {
          heading: "4. Sharing of Information",
          paragraphs: [
            "We share your information only as necessary to deliver our services — for example, with prospective employers, government authorities, embassies, medical centres and visa-processing partners. We never sell your personal data to third parties for marketing purposes.",
          ],
        },
        {
          heading: "5. Data Security",
          paragraphs: [
            "We implement reasonable administrative, technical and physical safeguards designed to protect your personal information against unauthorised access, alteration, disclosure or destruction. However, no method of transmission over the internet is completely secure.",
          ],
        },
        {
          heading: "6. Data Retention",
          paragraphs: [
            "We retain personal information for as long as necessary to fulfil the purposes outlined in this policy, or as required to comply with legal and regulatory obligations.",
          ],
        },
        {
          heading: "7. Your Rights",
          paragraphs: [
            "You have the right to access, correct or request deletion of your personal information, and to withdraw consent where processing is based on consent. To exercise these rights, please contact us using the details below.",
          ],
        },
        {
          heading: "8. Cookies",
          paragraphs: [
            "Our website may use minimal cookies and similar technologies to ensure proper functionality and to understand how the site is used. You can control cookies through your browser settings.",
          ],
        },
        {
          heading: "9. Changes to This Policy",
          paragraphs: [
            "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.",
          ],
        },
        {
          heading: "10. Contact Us",
          paragraphs: [
            `If you have any questions about this Privacy Policy, please contact us at ${siteConfig.contact.email} or call ${siteConfig.contact.primaryPhone}.`,
          ],
        },
      ]}
    />
  );
}
