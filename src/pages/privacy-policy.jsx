import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import PageHeader from "../components/page-header";
import contactInfo from "../utils/contactInfo";

export default function PrivacyPolicy() {
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
        title="Privacy Policy"
        description="Last updated: January 2025" // Adjusted to match your prompt
        breadcrumbs={[{ label: "Privacy Policy" }]}
      />
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto max-w-4xl px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ staggerChildren: 0.1 }}
          >
            {/* 1. Information Collection */}
            <motion.h2
              variants={contentVariants}
              className="text-2xl font-bold text-foreground mb-4"
            >
              1. Information Collection
            </motion.h2>
            <motion.p
              variants={contentVariants}
              className="mb-4 text-muted-foreground"
            >
              We collect information that you provide voluntarily when creating
              accounts, using our services, submitting inquiries, or interacting
              with our platforms. This includes:
            </motion.p>
            <motion.ul
              variants={contentVariants}
              className="list-disc list-inside ml-4 space-y-2 mb-6 text-muted-foreground"
            >
              <motion.li variants={contentVariants}>
                Personal identification information (name, email, phone,
                address)
              </motion.li>
              <motion.li variants={contentVariants}>
                Business details and company information
              </motion.li>
              <motion.li variants={contentVariants}>
                Payment and billing information
              </motion.li>
              <motion.li variants={contentVariants}>
                Communication history and feedback
              </motion.li>
              <motion.li variants={contentVariants}>
                Marketing preferences and interests
              </motion.li>
            </motion.ul>

            {/* 2. How We Use Information */}
            <motion.h2
              variants={contentVariants}
              className="text-2xl font-bold text-foreground mt-8 mb-4"
            >
              2. How We Use Information
            </motion.h2>
            <motion.p
              variants={contentVariants}
              className="mb-4 text-muted-foreground"
            >
              We use collected information for business purposes, including:
            </motion.p>
            <motion.ul
              variants={contentVariants}
              className="list-disc list-inside ml-4 space-y-2 mb-6 text-muted-foreground"
            >
              <motion.li variants={contentVariants}>
                Providing, maintaining, and improving our services
              </motion.li>
              <motion.li variants={contentVariants}>
                Processing transactions and sending related notifications
              </motion.li>
              <motion.li variants={contentVariants}>
                Sending technical updates, security alerts, and support messages
              </motion.li>
              <motion.li variants={contentVariants}>
                Responding to comments, questions, and customer service requests
              </motion.li>
              <motion.li variants={contentVariants}>
                Communicating about services, features, and opportunities
              </motion.li>
              <motion.li variants={contentVariants}>
                Monitoring usage patterns and analyzing service performance
              </motion.li>
            </motion.ul>

            {/* 3. Information Sharing */}
            <motion.h2
              variants={contentVariants}
              className="text-2xl font-bold text-foreground mt-8 mb-4"
            >
              3. Information Sharing
            </motion.h2>
            <motion.p
              variants={contentVariants}
              className="mb-4 text-muted-foreground"
            >
              We may share your information in these situations:
            </motion.p>
            <motion.ul
              variants={contentVariants}
              className="list-disc list-inside ml-4 space-y-2 mb-6 text-muted-foreground"
            >
              <motion.li variants={contentVariants}>
                With service providers and partners who assist in delivering our
                services
              </motion.li>
              <motion.li variants={contentVariants}>
                When required by law or to respond to legal processes
              </motion.li>
              <motion.li variants={contentVariants}>
                To protect the rights and safety ofBLZA PRO and others
              </motion.li>
              <motion.li variants={contentVariants}>
                In connection with business transactions like mergers or
                acquisitions
              </motion.li>
            </motion.ul>

            {/* 4. Data Security */}
            <motion.h2
              variants={contentVariants}
              className="text-2xl font-bold text-foreground mt-8 mb-4"
            >
              4. Data Security
            </motion.h2>
            <motion.p
              variants={contentVariants}
              className="mb-6 text-muted-foreground"
            >
              We implement robust security measures to protect your information
              from unauthorized access, alteration, disclosure, or destruction.
              However, no internet transmission or electronic storage method is
              completely secure.
            </motion.p>

            {/* 5. Cookies and Tracking */}
            <motion.h2
              variants={contentVariants}
              className="text-2xl font-bold text-foreground mt-8 mb-4"
            >
              5. Cookies and Tracking
            </motion.h2>
            <motion.p
              variants={contentVariants}
              className="mb-4 text-muted-foreground"
            >
              We use cookies and similar technologies to track website activity
              and store preferences. Cookies are small data files that may
              include unique identifiers.
            </motion.p>
            <motion.p
              variants={contentVariants}
              className="mb-6 text-muted-foreground"
            >
              You can set your browser to refuse cookies or alert you when
              cookies are sent. However, some features may not function properly
              without cookies.
            </motion.p>

            {/* 6. Your Rights */}
            <motion.h2
              variants={contentVariants}
              className="text-2xl font-bold text-foreground mt-8 mb-4"
            >
              6. Your Rights
            </motion.h2>
            <motion.p
              variants={contentVariants}
              className="mb-4 text-muted-foreground"
            >
              You have certain rights regarding your personal information:
            </motion.p>
            <motion.ul
              variants={contentVariants}
              className="list-disc list-inside ml-4 space-y-2 mb-6 text-muted-foreground"
            >
              <motion.li variants={contentVariants}>
                Right to access, update, or delete your information
              </motion.li>
              <motion.li variants={contentVariants}>
                Right to correct inaccurate or incomplete information
              </motion.li>
              <motion.li variants={contentVariants}>
                Right to object to processing of your personal information
              </motion.li>
              <motion.li variants={contentVariants}>
                Right to data portability
              </motion.li>
              <motion.li variants={contentVariants}>
                Right to withdraw consent where applicable
              </motion.li>
            </motion.ul>

            {/* 7. Data Retention */}
            <motion.h2
              variants={contentVariants}
              className="text-2xl font-bold text-foreground mt-8 mb-4"
            >
              7. Data Retention
            </motion.h2>
            <motion.p
              variants={contentVariants}
              className="mb-6 text-muted-foreground"
            >
              We retain personal information as long as we have a legitimate
              business need. When no longer needed, we will delete or anonymize
              it, or securely store and isolate it from further processing.
            </motion.p>

            {/* 8. International Transfers */}
            <motion.h2
              variants={contentVariants}
              className="text-2xl font-bold text-foreground mt-8 mb-4"
            >
              8. International Transfers
            </motion.h2>
            <motion.p
              variants={contentVariants}
              className="mb-6 text-muted-foreground"
            >
              Your information may be transferred to and processed in locations
              outside your jurisdiction where data protection laws may differ.
            </motion.p>

            {/* 9. Children's Privacy */}
            <motion.h2
              variants={contentVariants}
              className="text-2xl font-bold text-foreground mt-8 mb-4"
            >
              9. Children's Privacy
            </motion.h2>
            <motion.p
              variants={contentVariants}
              className="mb-6 text-muted-foreground"
            >
              Our services are not intended for individuals under 13. We do not
              knowingly collect personal information from children under 13. If
              you become aware that a child has provided us with personal
              information, please contact us immediately.
            </motion.p>

            {/* 10. Policy Updates */}
            <motion.h2
              variants={contentVariants}
              className="text-2xl font-bold text-foreground mt-8 mb-4"
            >
              10. Policy Updates
            </motion.h2>
            <motion.p
              variants={contentVariants}
              className="mb-6 text-muted-foreground"
            >
              We may update this Privacy Policy periodically. We will notify you
              of changes by posting the updated policy on this page and updating
              the "Last updated" date.
            </motion.p>

            {/* 11. Contact Us */}
            <motion.div
              variants={contentVariants}
              className="mt-12 p-6 bg-secondary/30 border border-border rounded-lg"
            >
              <h3 className="text-xl font-bold text-foreground mb-4">
                11. Contact Us
              </h3>
              <p className="text-muted-foreground mb-4">
                If you have questions about this Privacy Policy, please contact
                us:
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
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
