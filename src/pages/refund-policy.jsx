import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import PageHeader from "../components/page-header";
import contactInfo from "../utils/contactInfo";

export default function RefundPolicy() {
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
        title="Refund Policy"
        description="Last updated: January 2025" // Adjusted to match your prompt
        breadcrumbs={[{ label: "Refund Policy" }]}
      />
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto max-w-4xl px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ staggerChildren: 0.1 }}
          >
            {/* 1. General Refund Framework */}
            <motion.h2
              variants={contentVariants}
              className="text-2xl font-bold text-foreground mb-4"
            >
              1. General Refund Framework
            </motion.h2>
            <motion.p
              variants={contentVariants}
              className="mb-4 text-muted-foreground"
            >
              AtBLZA PRO , we are committed to delivering exceptional
              service quality and ensuring client satisfaction. Our refund
              policy is designed to be fair and transparent while recognizing
              the specialized nature of strategic digital marketing services.
            </motion.p>
            <motion.p
              variants={contentVariants}
              className="mb-6 text-muted-foreground font-semibold text-primary"
            >
              Important: Due to the specialized nature of strategic marketing
              services, which involve comprehensive planning, ongoing
              implementation, and campaign optimization, refunds are evaluated
              on a case-by-case basis and are subject to the conditions outlined
              below.
            </motion.p>

            {/* 2. Monthly Service Plans */}
            <motion.h2
              variants={contentVariants}
              className="text-2xl font-bold text-foreground mt-8 mb-4"
            >
              2. Monthly Service Plans
            </motion.h2>
            <motion.p
              variants={contentVariants}
              className="mb-4 text-muted-foreground"
            >
              For monthly recurring service subscriptions:
            </motion.p>
            <motion.ul
              variants={contentVariants}
              className="list-disc list-inside ml-4 space-y-2 mb-6 text-muted-foreground"
            >
              <motion.li variants={contentVariants}>
                <span className="font-semibold text-foreground">
                  First Month Guarantee:
                </span>{" "}
                If you are not satisfied with our services within the first 30
                days, you may request a refund for the current month's service
                fee
              </motion.li>
              <motion.li variants={contentVariants}>
                <span className="font-semibold text-foreground">
                  Service Cancellation:
                </span>{" "}
                You may cancel your monthly subscription at any time with 30
                days written notice
              </motion.li>
              <motion.li variants={contentVariants}>
                <span className="font-semibold text-foreground">
                  No Partial Refunds:
                </span>{" "}
                We do not provide partial refunds for unused portions of a
                billing cycle
              </motion.li>
              <motion.li variants={contentVariants}>
                <span className="font-semibold text-foreground">
                  Work Delivery:
                </span>{" "}
                Any work completed during the billing period will be delivered
                regardless of cancellation
              </motion.li>
            </motion.ul>

            {/* 3. Annual Service Plans */}
            <motion.h2
              variants={contentVariants}
              className="text-2xl font-bold text-foreground mt-8 mb-4"
            >
              3. Annual Service Plans
            </motion.h2>
            <motion.p
              variants={contentVariants}
              className="mb-4 text-muted-foreground"
            >
              For annual prepaid service subscriptions:
            </motion.p>
            <motion.ul
              variants={contentVariants}
              className="list-disc list-inside ml-4 space-y-2 mb-6 text-muted-foreground"
            >
              <motion.li variants={contentVariants}>
                <span className="font-semibold text-foreground">
                  60-Day Guarantee:
                </span>{" "}
                If you are not satisfied within the first 60 days, you may
                request a prorated refund for the unused portion
              </motion.li>
              <motion.li variants={contentVariants}>
                <span className="font-semibold text-foreground">
                  After 60 Days:
                </span>{" "}
                No refunds are available after the initial 60-day period
              </motion.li>
              <motion.li variants={contentVariants}>
                <span className="font-semibold text-foreground">
                  Early Termination:
                </span>{" "}
                If you choose to terminate after 60 days, no refund will be
                provided for the unused portion
              </motion.li>
              <motion.li variants={contentVariants}>
                <span className="font-semibold text-foreground">
                  Work Delivery:
                </span>{" "}
                All work completed up to the termination date will be delivered
              </motion.li>
            </motion.ul>

            {/* 4. Setup Fees and One-Time Projects */}
            <motion.h2
              variants={contentVariants}
              className="text-2xl font-bold text-foreground mt-8 mb-4"
            >
              4. Setup Fees and One-Time Projects
            </motion.h2>
            <motion.p
              variants={contentVariants}
              className="mb-4 text-muted-foreground"
            >
              For setup fees and one-time project work:
            </motion.p>
            <motion.ul
              variants={contentVariants}
              className="list-disc list-inside ml-4 space-y-2 mb-6 text-muted-foreground"
            >
              <motion.li variants={contentVariants}>
                <span className="font-semibold text-foreground">
                  Setup Fees:
                </span>{" "}
                Non-refundable once work has begun
              </motion.li>
              <motion.li variants={contentVariants}>
                <span className="font-semibold text-foreground">
                  Project-Based Work:
                </span>{" "}
                Refunds considered only if we fail to deliver agreed-upon
                deliverables
              </motion.li>
              <motion.li variants={contentVariants}>
                <span className="font-semibold text-foreground">
                  Completed Work:
                </span>{" "}
                No refunds for work that has been completed and delivered
              </motion.li>
              <motion.li variants={contentVariants}>
                <span className="font-semibold text-foreground">
                  Milestone Payments:
                </span>{" "}
                Refunds only available for incomplete milestone work
              </motion.li>
            </motion.ul>

            {/* 5. Advertising Spend */}
            <motion.h2
              variants={contentVariants}
              className="text-2xl font-bold text-foreground mt-8 mb-4"
            >
              5. Advertising Spend
            </motion.h2>
            <motion.p
              variants={contentVariants}
              className="mb-4 text-muted-foreground"
            >
              For paid advertising campaigns:
            </motion.p>
            <motion.ul
              variants={contentVariants}
              className="list-disc list-inside ml-4 space-y-2 mb-6 text-muted-foreground"
            >
              <motion.li variants={contentVariants}>
                <span className="font-semibold text-foreground">Ad Spend:</span>{" "}
                Advertising budget paid to platforms (Google, Facebook, etc.) is
                non-refundable
              </motion.li>
              <motion.li variants={contentVariants}>
                <span className="font-semibold text-foreground">
                  Management Fees:
                </span>{" "}
                Management fees for advertising campaigns follow the same refund
                policy as service plans
              </motion.li>
              <motion.li variants={contentVariants}>
                <span className="font-semibold text-foreground">
                  Unused Budget:
                </span>{" "}
                Any unused advertising budget will remain in your advertising
                accounts
              </motion.li>
              <motion.li variants={contentVariants}>
                <span className="font-semibold text-foreground">
                  Platform Policies:
                </span>{" "}
                Refunds for advertising spend are subject to the respective
                platform's policies
              </motion.li>
            </motion.ul>

            {/* 6. Refund Exclusions */}
            <motion.h2
              variants={contentVariants}
              className="text-2xl font-bold text-foreground mt-8 mb-4"
            >
              6. Refund Exclusions
            </motion.h2>
            <motion.p
              variants={contentVariants}
              className="mb-4 text-muted-foreground"
            >
              Refunds will NOT be provided in the following situations:
            </motion.p>
            <motion.ul
              variants={contentVariants}
              className="list-disc list-inside ml-4 space-y-2 mb-6 text-muted-foreground"
            >
              <motion.li variants={contentVariants}>
                Failure to provide necessary access, information, or approvals
              </motion.li>
              <motion.li variants={contentVariants}>
                Changes in business circumstances or priorities
              </motion.li>
              <motion.li variants={contentVariants}>
                Dissatisfaction with results due to factors beyond our control
              </motion.li>
              <motion.li variants={contentVariants}>
                Violation of our Partnership Terms
              </motion.li>
              <motion.li variants={contentVariants}>
                Fraudulent or chargeback activity
              </motion.li>
              <motion.li variants={contentVariants}>
                Services already delivered and accepted
              </motion.li>
            </motion.ul>

            {/* 7. Refund Request Process */}
            <motion.h2
              variants={contentVariants}
              className="text-2xl font-bold text-foreground mt-8 mb-4"
            >
              7. Refund Request Process
            </motion.h2>
            <motion.p
              variants={contentVariants}
              className="mb-4 text-muted-foreground"
            >
              To request a refund:
            </motion.p>
            <motion.ul
              variants={contentVariants}
              className="list-disc list-inside ml-4 space-y-2 mb-6 text-muted-foreground"
            >
              <motion.li variants={contentVariants}>
                Contact us in writing at{" "}
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-primary hover:underline"
                >
                  {contactEmail}
                </a>
              </motion.li>
              <motion.li variants={contentVariants}>
                Include your account information and reason for the refund
                request
              </motion.li>
              <motion.li variants={contentVariants}>
                Provide any relevant documentation supporting your request
              </motion.li>
              <motion.li variants={contentVariants}>
                Allow 5-10 business days for review and response
              </motion.li>
              <motion.li variants={contentVariants}>
                If approved, refunds will be processed within 10-15 business
                days
              </motion.li>
              <motion.li variants={contentVariants}>
                Refunds will be issued to the original payment method
              </motion.li>
            </motion.ul>

            {/* 8. Alternative Solutions */}
            <motion.h2
              variants={contentVariants}
              className="text-2xl font-bold text-foreground mt-8 mb-4"
            >
              8. Alternative Solutions
            </motion.h2>
            <motion.p
              variants={contentVariants}
              className="mb-4 text-muted-foreground"
            >
              In certain cases, instead of a monetary refund, we may offer:
            </motion.p>
            <motion.ul
              variants={contentVariants}
              className="list-disc list-inside ml-4 space-y-2 mb-6 text-muted-foreground"
            >
              <motion.li variants={contentVariants}>
                Service credits for future work
              </motion.li>
              <motion.li variants={contentVariants}>
                Additional services at no charge
              </motion.li>
              <motion.li variants={contentVariants}>
                Extended service periods
              </motion.li>
              <motion.li variants={contentVariants}>
                Alternative service solutions
              </motion.li>
            </motion.ul>

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
              If you dispute our refund decision:
            </motion.p>
            <motion.ul
              variants={contentVariants}
              className="list-disc list-inside ml-4 space-y-2 mb-6 text-muted-foreground"
            >
              <motion.li variants={contentVariants}>
                Request a review by a senior team member
              </motion.li>
              <motion.li variants={contentVariants}>
                Provide additional documentation if available
              </motion.li>
              <motion.li variants={contentVariants}>
                Consider mediation if direct negotiation fails
              </motion.li>
              <motion.li variants={contentVariants}>
                Final decisions will be made in accordance with our Partnership
                Terms
              </motion.li>
            </motion.ul>

            {/* 10. Chargeback Policy */}
            <motion.h2
              variants={contentVariants}
              className="text-2xl font-bold text-foreground mt-8 mb-4"
            >
              10. Chargeback Policy
            </motion.h2>
            <motion.p
              variants={contentVariants}
              className="mb-4 text-muted-foreground"
            >
              Initiating a chargeback without first contacting us may result in:
            </motion.p>
            <motion.ul
              variants={contentVariants}
              className="list-disc list-inside ml-4 space-y-2 mb-6 text-muted-foreground"
            >
              <motion.li variants={contentVariants}>
                Immediate suspension of all services
              </motion.li>
              <motion.li variants={contentVariants}>
                Forfeiture of any remaining service credits
              </motion.li>
              <motion.li variants={contentVariants}>
                Additional fees to cover chargeback costs
              </motion.li>
              <motion.li variants={contentVariants}>
                Termination of business relationship
              </motion.li>
            </motion.ul>

            {/* 11. Satisfaction Commitment */}
            <motion.h2
              variants={contentVariants}
              className="text-2xl font-bold text-foreground mt-8 mb-4"
            >
              11. Satisfaction Commitment
            </motion.h2>
            <motion.p
              variants={contentVariants}
              className="mb-4 text-muted-foreground"
            >
              Our commitment to you:
            </motion.p>
            <motion.ul
              variants={contentVariants}
              className="list-disc list-inside ml-4 space-y-2 mb-6 text-muted-foreground"
            >
              <motion.li variants={contentVariants}>
                We will work diligently to address any concerns
              </motion.li>
              <motion.li variants={contentVariants}>
                Regular communication and reporting
              </motion.li>
              <motion.li variants={contentVariants}>
                Adjustments to strategy based on performance
              </motion.li>
              <motion.li variants={contentVariants}>
                Professional service delivery at all times
              </motion.li>
              <motion.li variants={contentVariants}>
                Transparency in all our business dealings
              </motion.li>
            </motion.ul>

            {/* 12. Contact Information */}
            <motion.div
              variants={contentVariants}
              className="mt-12 p-6 bg-secondary/30 border border-border rounded-lg"
            >
              <h3 className="text-xl font-bold text-foreground mb-4">
                12. Contact Information
              </h3>
              <p className="text-muted-foreground mb-4">
                For refund requests or questions about this policy:
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
                <li className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary flex-shrink-0" />{" "}
                  Business Hours: Mon-Fri: 9:00 AM - 6:00 PM CST
                </li>
              </ul>
              <p className="mt-6 text-muted-foreground">
                <span className="font-semibold text-foreground">
                  Need Assistance?
                </span>
                <br />
                Before requesting a refund, please contact us to discuss your
                concerns. Our team is dedicated to finding solutions and
                ensuring your satisfaction with our services. Many issues can be
                resolved through clear communication and strategy adjustments.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
