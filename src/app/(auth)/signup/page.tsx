import { AnimatedPanel } from "@/components/animated-panel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import Link from "next/link";

export default function SignupPage() {
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
            <Card className="border-2">
              <CardHeader className="space-y-1 text-center">
                <CardTitle className="text-2xl font-semibold">Create an account</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Join Bhuvi Naturals for a premium shopping experience
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <form className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Full name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      required
                    />
                  </div>
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
                  <div className="space-y-2">
                    <label htmlFor="password" className="text-sm font-medium">
                      Password
                    </label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      required
                      minLength={8}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="confirmPassword" className="text-sm font-medium">
                      Confirm password
                    </label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="••••••••"
                      required
                      minLength={8}
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Create account
                  </Button>
                </form>
                <div className="text-center text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <Link href="/login" className="text-primary hover:underline">
                    Sign in
                  </Link>
                </div>
              </CardContent>
            </Card>
          </AnimatedPanel>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
