import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Heart, 
  ShieldCheck, 
  MapPin, 
  Info, 
  Megaphone, 
  Search, 
  HandHeart, 
  Dog, 
  Users, 
  Activity 
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 max-w-screen-2xl items-center px-4 md:px-8 mx-auto">
          <div className="flex gap-2 items-center mr-4">
            <Dog className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl tracking-tight text-primary">Kaaval</span>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="hidden md:flex items-center space-x-6 mr-4 text-sm font-medium text-muted-foreground">
              <Link href="#about" className="hover:text-primary transition-colors">About</Link>
              <Link href="#actions" className="hover:text-primary transition-colors">Services</Link>
              <Link href="#stats" className="hover:text-primary transition-colors">Dashboard</Link>
            </nav>
            <div className="flex items-center space-x-1">
              <Link href="/admin">
                <Button variant="outline" className="rounded-full">Staff Login</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="about" className="w-full py-20 md:py-32 bg-background relative overflow-hidden">
          <div className="container px-4 md:px-8 mx-auto relative z-10">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="inline-flex items-center rounded-full bg-orange-50 text-orange-600 px-4 py-1.5 text-sm font-medium mb-2">
                <Heart className="mr-2 h-4 w-4" />
                Chakkittapara Panchayat Initiative
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-foreground max-w-3xl">
                Compassionate Care for Every Paws
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Project Kaaval is a community-driven initiative to manage, protect, and care for stray and pet dogs in our panchayat. Together, we can create a safer environment for humans and animals alike.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-10">
                <Link href="#actions">
                  <Button size="lg" className="h-14 px-8 text-base font-medium rounded-full shadow-md hover:shadow-lg transition-all">Get Involved</Button>
                </Link>
                <Link href="#stats">
                  <Button size="lg" variant="outline" className="h-14 px-8 text-base font-medium rounded-full border-border/60 hover:bg-muted/50">View Dashboard</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Action Grid Section */}
        <section id="actions" className="w-full py-20 bg-white">
          <div className="container px-4 md:px-8 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">How You Can Help</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Community participation is the heart of Project Kaaval. Whether you&apos;ve found a stray, lost your pet, or want to give a dog a forever home.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Link href="/report/stray" className="group">
                <Card className="h-full transition-all hover:border-foreground/20 hover:shadow-md cursor-pointer">
                  <CardHeader>
                    <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-muted text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Megaphone className="h-6 w-6" />
                    </div>
                    <CardTitle>Report a Stray</CardTitle>
                    <CardDescription>Found a stray dog? Report its location so our team can safely bring it to the shelter.</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
              
              <Link href="/report/escaped" className="group">
                <Card className="h-full transition-all hover:border-foreground/20 hover:shadow-md cursor-pointer">
                  <CardHeader>
                    <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-muted text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Search className="h-6 w-6" />
                    </div>
                    <CardTitle>Report Missing Pet</CardTitle>
                    <CardDescription>Has your licensed pet escaped? Report it here so the community and shelter can keep an eye out.</CardDescription>
                  </CardHeader>
                </Card>
              </Link>

              <Link href="/adopt" className="group">
                <Card className="h-full transition-all hover:border-foreground/20 hover:shadow-md cursor-pointer">
                  <CardHeader>
                    <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-muted text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Heart className="h-6 w-6" />
                    </div>
                    <CardTitle>Adopt a Dog</CardTitle>
                    <CardDescription>Give a shelter dog a second chance. Browse our loving dogs looking for a forever family.</CardDescription>
                  </CardHeader>
                </Card>
              </Link>

              <Link href="/donate-dog" className="group">
                <Card className="h-full transition-all hover:border-foreground/20 hover:shadow-md cursor-pointer">
                  <CardHeader>
                    <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-muted text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Dog className="h-6 w-6" />
                    </div>
                    <CardTitle>Donate a Dog</CardTitle>
                    <CardDescription>Unable to care for your pet anymore? Safely surrender them to our shelter.</CardDescription>
                  </CardHeader>
                </Card>
              </Link>

              <Link href="/volunteer" className="group">
                <Card className="h-full transition-all hover:border-foreground/20 hover:shadow-md cursor-pointer">
                  <CardHeader>
                    <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-muted text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Users className="h-6 w-6" />
                    </div>
                    <CardTitle>Volunteer</CardTitle>
                    <CardDescription>Join our team of dedicated volunteers to help care for the dogs at the shelter.</CardDescription>
                  </CardHeader>
                </Card>
              </Link>

              <Link href="/donate" className="group">
                <Card className="h-full transition-all hover:border-foreground/20 hover:shadow-md cursor-pointer">
                  <CardHeader>
                    <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-muted text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <HandHeart className="h-6 w-6" />
                    </div>
                    <CardTitle>Financial Donation</CardTitle>
                    <CardDescription>Support the shelter&apos;s medical, food, and maintenance expenses with a financial contribution.</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* Live Statistics Section */}
        <section id="stats" className="w-full py-20 bg-background border-t border-border/40">
          <div className="container px-4 md:px-8 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Panchayat Live Dashboard</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Real-time statistics of the Kaaval project&apos;s impact across Chakkittapara Panchayat.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12">
              <Card className="bg-background shadow-sm text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-foreground mb-2">42</div>
                  <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Dogs in Shelter</p>
                </CardContent>
              </Card>
              <Card className="bg-background shadow-sm text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-foreground mb-2">128</div>
                  <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Dogs Adopted</p>
                </CardContent>
              </Card>
              <Card className="bg-background shadow-sm text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-foreground mb-2">15</div>
                  <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Dogs Donated</p>
                </CardContent>
              </Card>
              <Card className="bg-background shadow-sm text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-foreground mb-2">350</div>
                  <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Licensed Pets</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <ShieldCheck className="mr-2 h-5 w-5 text-primary" />
                    Ward-wise Licensed Dogs
                  </CardTitle>
                  <CardDescription>Number of registered pets in each ward camp</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { ward: "Ward 1: Central", count: 85, percentage: 85 },
                      { ward: "Ward 2: North", count: 65, percentage: 65 },
                      { ward: "Ward 3: East", count: 120, percentage: 100 },
                      { ward: "Ward 4: South", count: 45, percentage: 45 },
                      { ward: "Ward 5: West", count: 35, percentage: 35 },
                    ].map((item) => (
                      <div key={item.ward} className="flex flex-col gap-1">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium">{item.ward}</span>
                          <span className="text-muted-foreground">{item.count} dogs</span>
                        </div>
                        <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-primary/70 rounded-full" 
                            style={{ width: `${item.percentage}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Info className="mr-2 h-5 w-5 text-primary" />
                    Shelter Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="mt-0.5 h-5 w-5 text-muted-foreground shrink-0" />
                    <div>
                      <p className="font-medium">Chakkittapara Main Shelter</p>
                      <p className="text-sm text-muted-foreground">Near Panchayat Office, Chakkittapara P.O., Kozhikode District, Kerala 673526</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Activity className="mt-0.5 h-5 w-5 text-muted-foreground shrink-0" />
                    <div>
                      <p className="font-medium">Operating Hours</p>
                      <p className="text-sm text-muted-foreground">Monday to Saturday: 9:00 AM - 5:00 PM</p>
                      <p className="text-sm text-muted-foreground">Sunday: 10:00 AM - 2:00 PM (Visiting only)</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 rounded-lg border border-border bg-muted p-4">
                    <h4 className="font-medium mb-2 text-sm">About the Project</h4>
                    <p className="text-sm text-muted-foreground">
                      All stray dogs are captured and separated into categories (baby, female, old, disabled) before being moved to the shelter. We maintain ward-wise camps for licensed dogs with identification tags and passports containing vaccination details.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t border-border/40 py-8 bg-white">
        <div className="container flex flex-col items-center justify-center gap-4 mx-auto px-4">
          <p className="text-sm font-medium text-center text-muted-foreground flex items-center flex-wrap justify-center">
            Curated by Aleena and Abhinav with a <Heart className="h-4 w-4 mx-1.5 text-red-500 fill-red-500" /> for Chakkittapara only
          </p>
        </div>
      </footer>
    </div>
  );
}
