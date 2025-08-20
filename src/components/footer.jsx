import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import contactInfo from "../utils/contactInfo";

export default function Footer() {
  const companyLinks = [
    { to: "/about", label: "About Us" },
    { to: "/service", label: "Services" },
    { to: "/contact-us", label: "Contact" },
  ];

  const legalLinks = [
    { to: "/privacy-policy", label: "Privacy Policy" },
    { to: "/terms-conditions", label: "Terms & Conditions" },
    { to: "/refund-policy", label: "Refund Policy" },
  ];

  return (
    <footer className="bg-secondary/20 border-t border-border">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              {/* <Layers className="h-7 w-7 text-primary" />
              <span className="font-bold text-xl text-foreground"> BLZA PRO </span> */}
              <img
                src="/logo.png"
                alt=" BLZA PRO  Logo"
                className="h-24 w-auto"
              />
            </Link>
            <p className="text-muted-foreground text-sm">
              Driving growth through data-driven digital marketing.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8 md:col-span-3">
            <div>
              <h3 className="font-semibold text-foreground tracking-wider uppercase mb-4">
                Company
              </h3>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground tracking-wider uppercase mb-4">
                Legal
              </h3>
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* New Contact Info Column */}
            <div>
              <h3 className="font-semibold text-foreground tracking-wider uppercase mb-4">
                Contact
              </h3>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {contactInfo.address}
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="hover:text-primary"
                  >
                    {contactInfo.email}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="hover:text-primary"
                  >
                    {contactInfo.phone}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Payment Options */}
        <div className="mt-12 border-t border-border pt-8 flex flex-col items-center space-y-4">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} BLZA PRO LLC. All Rights Reserved.
          </p>

          <div className="flex space-x-6">
            <img src="/visa.svg" alt="Visa" className="h-8 w-auto" />
            <img
              src="/mastercard.svg"
              alt="Mastercard"
              className="h-8 w-auto"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
