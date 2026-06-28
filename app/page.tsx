import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Dog, Activity, Heart, Shield, LogOut, Search, AlertTriangle, Users, MapPin } from "lucide-react";
import { getIntakeRecords } from "@/app/actions/intakeActions";
import { getLicensedPets } from "@/app/actions/licensedActions";
import { createClient } from "@/utils/supabase/server";
import { SignUpDialog } from "@/components/SignUpDialog";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const intakes = (await getIntakeRecords()) || [];
  const licensed = (await getLicensedPets()) || [];

  const dogsInShelter = intakes.filter((r) => r.status === "In Shelter").length;
  const dogsAdopted = intakes.filter((r) => r.status === "Adopted").length;
  const licensedPetsCount = licensed.length;

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans selection:bg-yellow-300 text-slate-900">
      {/* Header */}
      <header className="w-full border-b border-slate-100 bg-white">
        <div className="container flex h-20 max-w-screen-2xl items-center px-6 md:px-12 mx-auto justify-between">
          <div className="flex gap-3 items-center">
            <div className="bg-yellow-400 p-2 rounded-xl text-slate-900 shadow-sm border border-yellow-500/20">
              <Dog className="h-6 w-6" />
            </div>
            <span className="font-extrabold text-2xl tracking-tight text-slate-900">
              Kaaval
            </span>
          </div>

          <div className="flex items-center space-x-3">
            {user ? (
              <>
                <Link href="/admin">
                  <Button className="rounded-full bg-yellow-400 text-slate-900 hover:bg-yellow-500 font-bold px-6 border border-yellow-500/20 shadow-sm transition-all hover:scale-105">
                    Go to dashboard
                  </Button>
                </Link>
                <form action="/auth/logout" method="POST">
                  <Button variant="ghost" type="submit" className="rounded-full text-slate-600 hover:text-slate-900 hover:bg-yellow-50 px-4 font-semibold">
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </Button>
                </form>
              </>
            ) : (
              <>
                <Link href="/admin/login">
                  <Button variant="ghost" className="rounded-full text-slate-700 hover:bg-yellow-50 hover:text-slate-900 font-bold px-6 transition-colors">
                    Sign In
                  </Button>
                </Link>
                <SignUpDialog />
              </>
            )}
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <section className="w-full pt-20 pb-24 md:pt-32 md:pb-32 relative overflow-hidden bg-white">
          {/* Abstract yellow blobs for visual interest on white bg */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-300/20 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 -z-10" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-200/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 -z-10" />

          <div className="container px-6 md:px-12 mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              <div className="space-y-8 max-w-2xl">
                <div className="inline-flex items-center rounded-full bg-yellow-100 text-yellow-800 px-5 py-2 text-sm font-bold tracking-wide uppercase border border-yellow-200">
                  <Shield className="mr-2 h-4 w-4" />
                  Chakkittapara Panchayat
                </div>

                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                  Compassionate <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600 drop-shadow-sm">
                    Care for Every
                  </span> <br />
                  Paws
                </h1>

                <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl font-medium">
                  Project Kaaval is a community-driven initiative to manage,
                  protect, and care for stray and pet dogs. Together, we are creating a safer environment for humans and animals alike.
                </p>

                <div className="pt-4 flex flex-wrap gap-4">
                  <Link href="#services">
                    <Button size="lg" className="rounded-full h-14 px-8 text-lg bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold shadow-lg shadow-yellow-400/20 border border-yellow-500/20 transition-all hover:scale-105">
                      Get Involved
                    </Button>
                  </Link>
                  <Link href="#impact">
                    <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-lg border-2 border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-yellow-400 font-bold transition-all">
                      Live Statistics
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Hero Graphic - Impact Dashboard Preview */}
              <div className="relative">
                <div className="absolute inset-0 bg-slate-900 rounded-[2.5rem] rotate-3 scale-105 transition-transform duration-500 hover:rotate-6 -z-10 shadow-2xl" />
                <div className="bg-yellow-400 p-10 rounded-[2.5rem] shadow-xl border border-yellow-500/30 space-y-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-10">
                    <Dog className="w-64 h-64 text-slate-900" />
                  </div>

                  <div>
                    <h3 className="text-lg md:text-xl font-black text-slate-900 uppercase tracking-widest mb-8 flex items-center bg-white/40 w-fit px-4 py-2 rounded-full backdrop-blur-sm border border-white/50">
                      <Activity className="w-5 h-5 mr-3 text-slate-900" />
                      Live Impact
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 gap-8 relative z-10">
                    <div className="space-y-2 bg-white/60 backdrop-blur-sm p-6 rounded-3xl border border-white/60">
                      <div className="text-5xl font-black text-slate-900 tracking-tighter">
                        {dogsInShelter}
                      </div>
                      <div className="text-sm font-bold text-slate-700 uppercase tracking-wider">In Shelter</div>
                    </div>
                    <div className="space-y-2 bg-white/60 backdrop-blur-sm p-6 rounded-3xl border border-white/60">
                      <div className="text-5xl font-black text-slate-900 tracking-tighter">
                        {licensedPetsCount}
                      </div>
                      <div className="text-sm font-bold text-slate-700 uppercase tracking-wider">Licensed</div>
                    </div>
                    <div className="space-y-2 col-span-2 pt-6 border-t border-slate-900/10">
                      <div className="text-6xl font-black text-slate-900 tracking-tighter flex items-center gap-4">
                        {dogsAdopted} <Heart className="w-10 h-10 text-rose-500 fill-rose-500 drop-shadow-sm" />
                      </div>
                      <div className="text-sm font-bold text-slate-700 uppercase tracking-wider">Successful Adoptions</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-24 bg-slate-50 border-t border-slate-100">
          <div className="container px-6 md:px-12 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
                How You Can <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">Help</span>
              </h2>
              <p className="max-w-2xl text-slate-600 text-lg font-medium">
                Community participation is the heart of Project Kaaval. Take action today to make Chakkittapara safer for everyone.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg shadow-slate-200/50 rounded-3xl overflow-hidden hover:-translate-y-1 transition-transform duration-300">
                <CardHeader className="bg-yellow-400 p-6 flex flex-row items-center gap-4">
                  <div className="bg-white p-3 rounded-2xl shadow-sm text-slate-900">
                    <AlertTriangle className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900">Report Stray</CardTitle>
                </CardHeader>
                <CardContent className="p-6 bg-white">
                  <CardDescription className="text-base text-slate-600 font-medium">
                    Spotted a stray dog in your ward? Let us know so our team can safely capture and relocate them.
                  </CardDescription>
                  <Button variant="link" className="mt-4 p-0 text-yellow-600 font-bold hover:text-yellow-700">Report now &rarr;</Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg shadow-slate-200/50 rounded-3xl overflow-hidden hover:-translate-y-1 transition-transform duration-300">
                <CardHeader className="bg-slate-900 p-6 flex flex-row items-center gap-4">
                  <div className="bg-slate-800 p-3 rounded-2xl shadow-sm text-yellow-400 border border-slate-700">
                    <Search className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl font-bold text-white">Missing Pet</CardTitle>
                </CardHeader>
                <CardContent className="p-6 bg-white border-x border-b border-slate-100 rounded-b-3xl">
                  <CardDescription className="text-base text-slate-600 font-medium">
                    Has your licensed pet escaped? Report it here so the community and shelter can keep an eye out.
                  </CardDescription>
                  <Button variant="link" className="mt-4 p-0 text-slate-900 font-bold hover:text-slate-700">Report missing &rarr;</Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg shadow-slate-200/50 rounded-3xl overflow-hidden hover:-translate-y-1 transition-transform duration-300">
                <CardHeader className="bg-yellow-400 p-6 flex flex-row items-center gap-4">
                  <div className="bg-white p-3 rounded-2xl shadow-sm text-slate-900">
                    <Heart className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900">Adopt a Dog</CardTitle>
                </CardHeader>
                <CardContent className="p-6 bg-white">
                  <CardDescription className="text-base text-slate-600 font-medium">
                    Give a shelter dog a second chance. Browse our loving dogs looking for a forever family.
                  </CardDescription>
                  <Button variant="link" className="mt-4 p-0 text-yellow-600 font-bold hover:text-yellow-700">View dogs &rarr;</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section id="impact" className="w-full py-24 bg-white relative">
          <div className="container px-6 md:px-12 mx-auto">
            <div className="bg-slate-900 rounded-[3rem] p-6 md:p-10 relative overflow-hidden shadow-2xl border border-slate-800">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />


              <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
                    Dedicated Shelter <br />
                    <span className="text-yellow-400">Facilities</span>
                  </h2>
                  <p className="text-slate-300 text-lg font-medium leading-relaxed max-w-md">
                    All stray dogs are captured and separated into categories (puppies, females, seniors, disabled) before being moved to the shelter. We maintain ward-wise camps for licensed dogs with identification tags and passports containing vaccination details.
                  </p>

                  <div className="flex flex-col gap-4 pt-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-slate-800 p-3 rounded-xl text-yellow-400 shrink-0">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-lg">Chakkittapara Main Shelter</h4>
                        <p className="text-slate-400 font-medium text-sm mt-1">Near Panchayat Office, Kozhikode District, Kerala 673526</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-slate-800 p-3 rounded-xl text-yellow-400 shrink-0">
                        <Users className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-lg">Operating Hours</h4>
                        <p className="text-slate-400 font-medium text-sm mt-1">Monday - Saturday: 9:00 AM - 5:00 PM <br /> Sunday: Visiting Only</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-[2rem] shadow-xl">
                  <h3 className="text-2xl font-extrabold text-slate-900 mb-6">Ward Distribution</h3>
                  <div className="space-y-6">
                    {/* Dummy visualization of ward stats */}
                    {[
                      { name: "Ward 1: Central", pct: 80 },
                      { name: "Ward 2: North", pct: 65 },
                      { name: "Ward 3: East", pct: 45 },
                    ].map((ward) => (
                      <div key={ward.name} className="space-y-2">
                        <div className="flex justify-between text-sm font-bold text-slate-700">
                          <span>{ward.name}</span>
                        </div>
                        <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden shadow-inner">
                          <div
                            className="h-full bg-yellow-400 rounded-full relative"
                            style={{ width: `${ward.pct}%` }}
                          >
                            <div className="absolute inset-0 bg-white/20 w-full"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8">
                    <Link href="/admin/login">
                      <Button className="w-full rounded-2xl h-12 bg-slate-900 hover:bg-slate-800 text-white font-bold">
                        Staff Login for Full Stats
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-12 bg-white border-t border-slate-100 mt-auto">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Dog className="w-6 h-6 text-slate-900" />
            <span className="font-extrabold text-xl text-slate-900">Kaaval</span>
          </div>
          <p className="text-sm font-bold text-slate-500 flex items-center">
            Built for Chakkittapara Panchayat <Heart className="w-4 h-4 mx-2 text-rose-500 fill-rose-500" />
          </p>
        </div>
      </footer>
    </div>
  );
}
