import { motion } from "framer-motion";
import { Mail, MapPin, Phone, User } from "lucide-react";
import contactInfo from "../utils/contactInfo";
import SectionHeader from "./section-header";

const teamData = [
  {
    name: contactInfo.contactPerson,
    title: "Founder & Chief Executive Officer",
    icon: User,
    bio: `With comprehensive expertise in digital marketing strategy, ${contactInfo.contactPerson} directs our company vision and client partnerships. A recognized authority in growth acceleration and business transformation, he establishedBLZA PRO  with the mission to enable businesses to achieve digital marketplace excellence.`,
    tags: ["Strategic Leadership", "Client Success", "Growth Expert"],
    contact: {
      email: contactInfo.email,
      phone: contactInfo.phone,
      location: contactInfo.address,
    },
  },
  // You can add more team members here and they will render in the same style
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function TeamSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4">
        <SectionHeader
          tagline="Our Leaders"
          title="Leadership Team"
          description="Guided by our visionary founder and backed by a committed team of marketing professionals who contribute expertise and enthusiasm to every project."
        />

        <div className="max-w-5xl mx-auto mt-12">
          <h3 className="text-xl font-bold text-center text-foreground mb-6">
            Company Leadership
          </h3>
          <div className="space-y-8">
            {teamData.map((member) => (
              <motion.div
                key={member.name}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-secondary/30 border border-border rounded-lg p-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Left Side: Bio */}
                  <div className="md:col-span-2 flex flex-col">
                    <member.icon className="h-8 w-8 text-muted-foreground mb-4" />
                    <h4 className="text-2xl font-bold tracking-tight text-foreground">
                      {member.name}
                    </h4>
                    <p className="text-primary font-semibold">{member.title}</p>
                    <p className="mt-6 text-muted-foreground flex-grow">
                      {member.bio}
                    </p>
                    <div className="mt-8 flex flex-wrap gap-2">
                      {member.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* Right Side: Contact Info */}
                  <div className="md:border-l md:border-border md:pl-8">
                    <h5 className="font-semibold text-foreground mb-6">
                      Contact Information
                    </h5>
                    <div className="space-y-5">
                      <div className="flex items-start gap-3">
                        <Mail className="h-5 w-5 text-muted-foreground mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm text-foreground">Email</p>
                          <p className="text-sm text-muted-foreground">
                            {member.contact.email}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Phone className="h-5 w-5 text-muted-foreground mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm text-foreground">Phone</p>
                          <p className="text-sm text-muted-foreground">
                            {member.contact.phone}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-muted-foreground mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm text-foreground">
                            Office Location
                          </p>
                          <p className="text-sm text-muted-foreground whitespace-pre-line">
                            {member.contact.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
