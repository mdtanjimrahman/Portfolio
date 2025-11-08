import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-accent transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-accent transition-colors">
                  Projects
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">More</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/education" className="text-muted-foreground hover:text-accent transition-colors">
                  Education
                </Link>
              </li>
              <li>
                <Link href="/certifications" className="text-muted-foreground hover:text-accent transition-colors">
                  Certifications
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:tanjim@example.com"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  Email
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="text-muted-foreground hover:text-accent transition-colors">
                  Phone
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Social</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a href="mailto:tanjim@example.com" className="text-muted-foreground hover:text-accent transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground">© 2025 Md. Tanjim Rahman. Crafted with passion and precision.</p>
        </div>
      </div>
    </footer>
  )
}
