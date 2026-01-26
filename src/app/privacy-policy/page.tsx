
import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Privacy Policy',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl md:text-4xl font-bold text-foreground font-headline">
                Privacy Policy
              </CardTitle>
              <p className="text-muted-foreground pt-2">Last updated: January 25, 2026</p>
            </CardHeader>
            <CardContent className="space-y-8 text-lg text-muted-foreground">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">1. Introduction</h2>
                <p>
                  Tap Consol ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">2. Information We Collect</h2>
                <p>
                  We may collect information about you in a variety of ways. The information we may collect on the Site includes:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                 
                  <li>
                    <strong>Contact Form Data:</strong> We collect the information you provide through our contact form, including your name, email address, and message, to respond to your inquiries.
                  </li>
                   <li>
                    <strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">3. How We Use Your Information</h2>
                <p>
                  Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Respond to your inquiries and provide customer support.</li>
                  <li>Email you regarding your account or order.</li>
                  <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
                  <li>Prevent fraudulent transactions, monitor against theft, and protect against criminal activity.</li>
                  <li>Process payments and refunds.</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">4. Information Sharing</h2>
                <p>
                  We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">5. Data Security</h2>
                <p>
                  We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
                </p>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">6. Changes to This Policy</h2>
                <p>
                  We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the "Last updated" date of this Privacy Policy. You are encouraged to periodically review this Privacy Policy to stay informed of updates.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">7. Contact Us</h2>
                <p>
                  If you have questions or comments about this Privacy Policy, please contact us at <a href="mailto:contact@tapconsol.com" className="text-primary hover:underline">contact@tapconsol.com</a>.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
