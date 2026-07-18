import { AnimatedPanel } from "@/components/animated-panel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ForgotPasswordPage() {
  return (
    <main className="page-shell">
      <SiteHeader />
      <section className="page-section px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-md">
          <AnimatedPanel
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            <Link href="/login" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4">
              <ArrowLeft size={16} className="mr-1" />
              Back to sign in
            </Link>
            <Card className="border-2">
              <CardHeader className="space-y-1 text-center">
                <CardTitle className="text-2xl font-semibold">Reset your password</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Enter your email and we'll send you a reset link
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <form className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send reset link
                  </Button>
                </form>
              </CardContent>
            </Card>
          </AnimatedPanel>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
