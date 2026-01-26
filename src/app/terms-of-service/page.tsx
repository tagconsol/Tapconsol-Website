
import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Terms of Service',
};

export default function TermsOfServicePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl md:text-4xl font-bold text-foreground font-headline">
                Terms of Service
              </CardTitle>
              <p className="text-muted-foreground pt-2">Last updated: January 25, 2026</p>
            </CardHeader>
            <CardContent className="space-y-8 text-lg text-muted-foreground">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">1. Acceptance of Terms</h2>
                <p>
                  By accessing and using the Tap Consol website ("Site"), you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this Site's particular services, you shall be subject to any posted guidelines or rules applicable to such services. Any participation in this Site will constitute acceptance of this agreement.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">2. Use of Our Services</h2>
                <p>
                  You agree to use our services and website for lawful purposes only. You are prohibited from posting on or transmitting through the Site any material that is harmful, threatening, defamatory, obscene, or otherwise objectionable. You may not use the Site in any manner that could damage, disable, overburden, or impair our servers or networks.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">3. Intellectual Property</h2>
                <p>
                  The Site and its original content, features, and functionality are owned by Tap Consol and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws. You are granted a limited license only for purposes of viewing the material contained on this Site.
                </p>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">4. Disclaimer of Warranties</h2>
                <p>
                  This Site is provided "as is," with all faults, and Tap Consol expresses no representations or warranties, of any kind related to this Site or the materials contained on this Site. Also, nothing contained on this Site shall be interpreted as advising you.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">5. Limitation of Liability</h2>
                <p>
                  In no event shall Tap Consol, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this Site whether such liability is under contract. Tap Consol, including its officers, directors, and employees shall not be held liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this Site.
                </p>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">6. Governing Law</h2>
                <p>
                  These Terms will be governed by and interpreted in accordance with the laws of the jurisdiction in which Tap Consol is located, and you submit to the non-exclusive jurisdiction of the state and federal courts located in that jurisdiction for the resolution of any disputes.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">7. Changes to Terms</h2>
                <p>
                  Tap Consol is permitted to revise these Terms at any time as it sees fit, and by using this Site you are expected to review these Terms on a regular basis.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">8. Contact Us</h2>
                <p>
                  If you have any questions about these Terms, please contact us at <a href="mailto:contact@tapconsol.com" className="text-primary hover:underline">contact@tapconsol.com</a>.
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
