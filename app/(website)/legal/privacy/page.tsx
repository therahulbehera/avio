import Link from "next/link"

export const metadata = {
  title: "Privacy Policy - Avio",
  description: "Privacy Policy for Avio - Instagram DM automation for content creators",
}

export default function PrivacyPage() {
  return (
    <main className="bg-background min-h-screen">
      {/* Back Link */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link href="/" className="text-primary hover:text-primary/80 transition text-sm font-medium">
          ← Back to Home
        </Link>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="prose prose-invert max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Privacy Policy</h1>

          <p className="text-muted-foreground mb-8">
            <em>Last Updated: January 3, 2025</em>
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">1. Introduction</h2>
          <p className="text-muted-foreground mb-4">
            Avio ("Company," "we," "us," or "our") operates the Avio platform. This Privacy Policy explains how we
            collect, use, disclose, and safeguard your information when you visit our website and use our services.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">2. Information We Collect</h2>
          <p className="text-muted-foreground mb-4">We collect information you provide directly to us, such as:</p>
          <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
            <li>Account registration information (name, email, password)</li>
            <li>Profile information and business details</li>
            <li>Payment information (processed securely through third-party providers)</li>
            <li>Communications and support requests</li>
            <li>Instagram account information (with your authorization)</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">3. How We Use Your Information</h2>
          <p className="text-muted-foreground mb-4">We use the information we collect for various purposes:</p>
          <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
            <li>To provide, maintain, and improve our services</li>
            <li>To process transactions and send related information</li>
            <li>To send promotional communications (with your consent)</li>
            <li>To respond to your inquiries and support requests</li>
            <li>To analyze usage patterns and improve user experience</li>
            <li>To comply with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">4. Data Security</h2>
          <p className="text-muted-foreground mb-4">
            We implement appropriate technical and organizational measures to protect your personal information.
            However, no method of transmission over the Internet is completely secure, and we cannot guarantee absolute
            security.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">5. Third-Party Services</h2>
          <p className="text-muted-foreground mb-4">
            We may share information with third-party service providers who assist us in operating our website and
            conducting our business. These providers are contractually obligated to use your information only as
            necessary to provide services to us.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">6. Your Rights</h2>
          <p className="text-muted-foreground mb-4">
            Depending on your location, you may have certain rights regarding your personal information, including the
            right to access, correct, or delete your data. To exercise these rights, please contact us at
            privacy@avio.com.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">7. Cookies</h2>
          <p className="text-muted-foreground mb-4">
            We use cookies and similar tracking technologies to enhance your experience. You can control cookie
            preferences through your browser settings.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">8. Contact Us</h2>
          <p className="text-muted-foreground mb-4">
            If you have questions about this Privacy Policy, please contact us at:
          </p>
          <p className="text-muted-foreground">
            Avio
            <br />
            Email: privacy@avio.com
            <br />
            Website: avio.com
          </p>
        </div>
      </div>
    </main>
  )
}
