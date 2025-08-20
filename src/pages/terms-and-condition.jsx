import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import PageHeader from "../components/page-header";
import contactInfo from "../utils/contactInfo";

export default function TermsConditions() {
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const contactEmail = contactInfo.email;
  const contactPhone = contactInfo.phone;
  const contactAddress = contactInfo.address;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PageHeader
        title="Terms & Conditions"
        description="Last updated: January 2025" // Adjusted to match your prompt
        breadcrumbs={[{ label: "Terms & Conditions" }]}
      />
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto max-w-4xl px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ staggerChildren: 0.1 }}
          >
            {/* 1. Acceptance of Terms */}
            <motion.h2
              variants={contentVariants}
              className="text-2xl font-bold text-foreground mb-4"
            >
              1. Acceptance of Terms
            </motion.h2>
            <motion.p
              variants={contentVariants}
              className="mb-6 text-muted-foreground"
            >
              By accessing and using the services provided by BLZA PRO , you
              accept and agree to be bound by the terms and provision of this
              agreement. These terms apply to all visitors, users, and others
              who access or use our services.
            </motion.p>
            <motion.p
              variants={contentVariants}
              className="mb-6 text-muted-foreground"
            >
              If you do not agree to abide by the above, please do not use our
              services. We reserve the right to change these terms at any time
              by posting updates on this page.
            </motion.p>

            {/* 2. Service Description */}
            <motion.h2
              variants={contentVariants}
              className="text-2xl font-bold text-foreground mt-8 mb-4"
            >
              2. Service Description
            </motion.h2>
            <motion.p
              variants={contentVariants}
              className="mb-4 text-muted-foreground"
            >
              BLZA PRO provides digital marketing services including but not
              limited to:
            </motion.p>
            <motion.ul
              variants={contentVariants}
              className="list-disc list-inside ml-4 space-y-2 mb-6 text-muted-foreground"
            >
              <motion.li variants={contentVariants}>
                Search Engine Optimization (SEO)
              </motion.li>
              <motion.li variants={contentVariants}>
                Pay-Per-Click (PPC) Advertising
              </motion.li>
              <motion.li variants={contentVariants}>Media Marketing</motion.li>
              <motion.li variants={contentVariants}>
                Content Marketing
              </motion.li>
              <motion.li variants={contentVariants}>Email Marketing</motion.li>
              <motion.li variants={contentVariants}>
                Website Development and Design
              </motion.li>
              <motion.li variants={contentVariants}>
                Analytics and Reporting
              </motion.li>
            </motion.ul>

            {/* 3. Client Responsibilities */}
            <motion.h2
              variants={contentVariants}
              className="text-2xl font-bold text-foreground mt-8 mb-4"
            >
              3. Client Responsibilities
            </motion.h2>
            <motion.p
              variants={contentVariants}
              className="mb-4 text-muted-foreground"
            >
              Clients are responsible for:
            </motion.p>
            <motion.ul
              variants={contentVariants}
              className="list-disc list-inside ml-4 space-y-2 mb-6 text-muted-foreground"
            >
              <motion.li variants={contentVariants}>
                Providing accurate and complete information necessary for
                service delivery
              </motion.li>
              <motion.li variants={contentVariants}>
                Timely payment of all fees and charges
              </motion.li>
              <motion.li variants={contentVariants}>
                Providing feedback and approvals within agreed timeframes
              </motion.li>
              <motion.li variants={contentVariants}>
                Maintaining confidentiality of login credentials and account
                information
              </motion.li>
              <motion.li variants={contentVariants}>
                Ensuring compliance with applicable laws and regulations
              </motion.li>
            </motion.ul>

            {/* 4. Payment Terms */}
            <motion.h2
              variants={contentVariants}
              className="text-2xl font-bold text-foreground mt-8 mb-4"
            >
              4. Payment Terms
            </motion.h2>
            <motion.p
              variants={contentVariants}
              className="mb-4 text-muted-foreground"
            >
              Payment terms and conditions:
            </motion.p>
            <motion.ul
              variants={contentVariants}
              className="list-disc list-inside ml-4 space-y-2 mb-6 text-muted-foreground"
            >
              <motion.li variants={contentVariants}>
                Monthly services are billed in advance on the same date each
                month
              </motion.li>
              <motion.li variants={contentVariants}>
                Payment is due within 15 days of invoice date
              </motion.li>
              <motion.li variants={contentVariants}>
                Late payments may incur additional fees
              </motion.li>
              <motion.li variants={contentVariants}>
                Services may be suspended for non-payment
              </motion.li>
              <motion.li variants={contentVariants}>
                All fees are non-refundable unless otherwise specified
              </motion.li>
            </motion.ul>

            {/* 5. Intellectual Property */}
            <motion.h2
              variants={contentVariants}
              className="text-2xl font-bold text-foreground mt-8 mb-4"
            >
              5. Intellectual Property
            </motion.h2>
            <motion.p
              variants={contentVariants}
              className="mb-4 text-muted-foreground"
            >
              Intellectual property rights and ownership:
            </motion.p>
            <motion.ul
              variants={contentVariants}
              className="list-disc list-inside ml-4 space-y-2 mb-6 text-muted-foreground"
            >
              <motion.li variants={contentVariants}>
                Client retains ownership of their brand, trademarks, and
                proprietary content
              </motion.li>
              <motion.li variants={contentVariants}>
                BLZA PRO retains ownership of methodologies, processes, and
                tools
              </motion.li>
              <motion.li variants={contentVariants}>
                Work products created specifically for clients become client
                property upon full payment
              </motion.li>
              <motion.li variants={contentVariants}>
                Neither party may use the other's intellectual property without
                written consent
              </motion.li>
            </motion.ul>

            {/* 6. Confidentiality */}
            <motion.h2
              variants={contentVariants}
              className="text-2xl font-bold text-foreground mt-8 mb-4"
            >
              6. Confidentiality
            </motion.h2>
            <motion.p
              variants={contentVariants}
              className="mb-4 text-muted-foreground"
            >
              Both parties agree to maintain confidentiality of:
            </motion.p>
            <motion.ul
              variants={contentVariants}
              className="list-disc list-inside ml-4 space-y-2 mb-6 text-muted-foreground"
            >
              <motion.li variants={contentVariants}>
                Business strategies and proprietary information
              </motion.li>
              <motion.li variants={contentVariants}>
                Customer data and personal information
              </motion.li>
              <motion.li variants={contentVariants}>
                Financial information and business metrics
              </motion.li>
              <motion.li variants={contentVariants}>
                Technical processes and methodologies
              </motion.li>
              <motion.li variants={contentVariants}>
                Any information marked as confidential
              </motion.li>
            </motion.ul>

            {/* 7. Limitation of Liability */}
            <motion.h2
              variants={contentVariants}
              className="text-2xl font-bold text-foreground mt-8 mb-4"
            >
              7. Limitation of Liability
            </motion.h2>
            <motion.p
              variants={contentVariants}
              className="mb-4 text-muted-foreground"
            >
              BLZA PRO 's liability is limited as follows:
            </motion.p>
            <motion.ul
              variants={contentVariants}
              className="list-disc list-inside ml-4 space-y-2 mb-6 text-muted-foreground"
            >
              <motion.li variants={contentVariants}>
                Total liability shall not exceed the amount paid for services in
                the preceding 12 months
              </motion.li>
              <motion.li variants={contentVariants}>
                We are not liable for indirect, incidental, or consequential
                damages
              </motion.li>
              <motion.li variants={contentVariants}>
                We do not guarantee specific results or outcomes
              </motion.li>
              <motion.li variants={contentVariants}>
                Client assumes responsibility for business decisions based on
                our recommendations
              </motion.li>
            </motion.ul>

            {/* 8. Termination */}
            <motion.h2
              variants={contentVariants}
              className="text-2xl font-bold text-foreground mt-8 mb-4"
            >
              8. Termination
            </motion.h2>
            <motion.p
              variants={contentVariants}
              className="mb-4 text-muted-foreground"
            >
              Either party may terminate the agreement:
            </motion.p>
            <motion.ul
              variants={contentVariants}
              className="list-disc list-inside ml-4 space-y-2 mb-6 text-muted-foreground"
            >
              <motion.li variants={contentVariants}>
                With 30 days written notice for convenience
              </motion.li>
              <motion.li variants={contentVariants}>
                Immediately for material breach of contract
              </motion.li>
              <motion.li variants={contentVariants}>
                Immediately for non-payment after notice period
              </motion.li>
              <motion.li variants={contentVariants}>
                Upon completion of project-based work
              </motion.li>
            </motion.ul>
            <motion.p
              variants={contentVariants}
              className="mb-6 text-muted-foreground"
            >
              Upon termination, all work completed will be delivered, and final
              payment will be due within 15 days.
            </motion.p>

            {/* 9. Dispute Resolution */}
            <motion.h2
              variants={contentVariants}
              className="text-2xl font-bold text-foreground mt-8 mb-4"
            >
              9. Dispute Resolution
            </motion.h2>
            <motion.p
              variants={contentVariants}
              className="mb-4 text-muted-foreground"
            >
              In case of disputes:
            </motion.p>
            <motion.ul
              variants={contentVariants}
              className="list-disc list-inside ml-4 space-y-2 mb-6 text-muted-foreground"
            >
              <motion.li variants={contentVariants}>
                Parties will first attempt to resolve through direct negotiation
              </motion.li>
              <motion.li variants={contentVariants}>
                If unsuccessful, disputes will be resolved through mediation
              </motion.li>
              <motion.li variants={contentVariants}>
                Final disputes will be resolved through binding arbitration
              </motion.li>
              <motion.li variants={contentVariants}>
                All proceedings will be conducted under relevant state law
              </motion.li>{" "}
              {/* Adjusted from Oregon for generic use */}
            </motion.ul>

            {/* 10. Governing Law */}
            <motion.h2
              variants={contentVariants}
              className="text-2xl font-bold text-foreground mt-8 mb-4"
            >
              10. Governing Law
            </motion.h2>
            <motion.p
              variants={contentVariants}
              className="mb-6 text-muted-foreground"
            >
              These terms are governed by the laws of the State of Washington,
              United States. Any legal action must be brought in the courts of
              Washington.{" "}
              {/* Adjusted from Oregon for consistency with office location */}
            </motion.p>

            {/* 11. Changes to Terms */}
            <motion.h2
              variants={contentVariants}
              className="text-2xl font-bold text-foreground mt-8 mb-4"
            >
              11. Changes to Terms
            </motion.h2>
            <motion.p
              variants={contentVariants}
              className="mb-6 text-muted-foreground"
            >
              We reserve the right to modify these terms at any time. Changes
              will be effective immediately upon posting on our website.
              Continued use of our services constitutes acceptance of modified
              terms.
            </motion.p>

            {/* 12. Contact Information */}
            <motion.div
              variants={contentVariants}
              className="mt-12 p-6 bg-secondary/30 border border-border rounded-lg"
            >
              <h3 className="text-xl font-bold text-foreground mb-4">
                12. Contact Information
              </h3>
              <p className="text-muted-foreground mb-4">
                For questions about these terms, please contact us:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0" /> Email:{" "}
                  <a
                    href={`mailto:${contactEmail}`}
                    className="text-primary hover:underline"
                  >
                    {contactEmail}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0" />{" "}
                  Phone:{" "}
                  <a
                    href={`tel:${contactPhone}`}
                    className="text-primary hover:underline"
                  >
                    {contactPhone}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0" />{" "}
                  Address:{" "}
                  <span className="whitespace-pre-line">{contactAddress}</span>
                </li>
              </ul>
              <p className="mt-6 text-muted-foreground">
                <span className="font-semibold text-foreground">
                  Need Clarification?
                </span>
                <br />
                If you have questions about any of these terms or need
                clarification on how they apply to your specific situation,
                please don't hesitate to contact us. We're here to ensure you
                understand your rights and responsibilities as our valued
                client.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
