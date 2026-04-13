export const dynamic = "force-dynamic";

import Image from "next/image";
import getCurrentUser from "./actions/getCurrentUser";
import getListings, { IListingParams } from "./actions/getListings";
import EmptyState from "./components/EmptyState";
import ListingCard from "./components/listings/ListingCard";
import mapPin from "@/public/mapPin.gif";
import {
  RectangleStackIcon,
  BuildingOfficeIcon,
  TruckIcon,
  ShoppingBagIcon,
  ArrowPathIcon,
  CheckBadgeIcon,
  MapPinIcon,
  PhotoIcon,
  ChatBubbleBottomCenterTextIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

interface HomeProps {
  searchParams: IListingParams;
}

export default async function Home({ searchParams }: HomeProps) {
  const listings = await getListings(searchParams);
  const currentUser = await getCurrentUser();

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-100 to-teal-50">
      {/* Hero Section with Glass Morphism */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/30 to-green-500/30 backdrop-blur-sm"></div>
        <div className="relative flex flex-col lg:flex-row md:flex-row justify-around items-center px-8 py-16 gap-8">
          {/* Content Container */}
          <div className="w-full lg:w-3/4 space-y-6 z-10">
            <div className="backdrop-blur-md bg-white/30 p-8 rounded-2xl shadow-lg border border-white/20 transform transition-all hover:scale-[1.02]">
              <div className="flex flex-row items-center gap-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-green-600">
                  Hoardinger
                  <span className="block text-2xl md:text-3xl mt-2 text-gray-700">
                    Rent/List Hoardings!
                  </span>
                </h1>

                <Link
                  href="#listings-section"
                  className="mt-6 px-8 py-3 rounded-lg bg-gradient-to-r from-emerald-500/80 to-green-500/80 backdrop-blur-sm text-white font-medium hover:from-emerald-600/90 hover:to-green-600/90 transition-all transform hover:scale-105 border border-white/20 shadow-lg"
                >
                  View All Listings
                </Link>
              </div>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed backdrop-blur-sm bg-white/40 rounded-xl p-6 shadow-inner">
                Hoardinger connects individuals and government bodies renting
                out Hoarding spaces - walls, roadsides, restaurants & more with
                brands and businesses looking to advertise monthly.
              </p>
            </div>
          </div>

          {/* Image Container */}
          <div className="w-full lg:w-1/4 flex justify-center items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-green-400/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <Image
                className="relative w-full max-w-md transform transition-all duration-500 hover:scale-105"
                alt="Location Pin Animation"
                height={400}
                width={400}
                src={mapPin}
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-green-600">
            How Hoardinger Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <BuildingOfficeIcon className="w-12 h-12" />,
                title: "List Your Space",
                description:
                  "Register and list your hoarding space with detailed information and photos",
              },
              {
                icon: <ArrowPathIcon className="w-12 h-12" />,
                title: "Connect",
                description:
                  "Get matched with businesses looking for advertising spaces in your area",
              },
              {
                icon: <CheckBadgeIcon className="w-12 h-12" />,
                title: "Earn Monthly",
                description:
                  "Receive secure monthly payments for your rented hoarding space",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="backdrop-blur-md bg-white/20 p-8 rounded-2xl shadow-lg border border-white/20 transform transition-all hover:scale-[1.02]"
              >
                <div className="text-emerald-600 mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Spaces Section */}
      <section className="py-20 px-8 bg-gradient-to-r from-emerald-50/50 to-green-50/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-green-600">
            Available Space Types
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <RectangleStackIcon className="w-10 h-10" />,
                title: "Billboards",
              },
              {
                icon: <BuildingOfficeIcon className="w-10 h-10" />,
                title: "Building Walls",
              },
              {
                icon: <TruckIcon className="w-10 h-10" />,
                title: "Highway Banners",
              },
              {
                icon: <ShoppingBagIcon className="w-10 h-10" />,
                title: "Shop Fronts",
              },
            ].map((space, index) => (
              <div
                key={index}
                className="backdrop-blur-sm bg-white/30 p-6 rounded-xl shadow-lg border border-white/20 text-center transform transition-all hover:scale-[1.05]"
              >
                <div className="text-emerald-600 mb-4 flex justify-center">
                  {space.icon}
                </div>
                <h3 className="text-lg font-semibold">{space.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-green-600 mb-4">
              Powerful Features
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Interactive Map Feature */}
            <div className="backdrop-blur-md bg-white/20 p-8 rounded-2xl shadow-lg border border-white/20 transform transition-all hover:scale-[1.02] group">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-colors">
                  <MapPinIcon className="w-8 h-8 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    Interactive Location Mapping
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Easily add and manage your hoarding locations with our
                    interactive map interface. Mark exact positions and provide
                    detailed location data.
                  </p>
                </div>
              </div>
            </div>

            {/* Space Categories Feature */}
            <div className="backdrop-blur-md bg-white/20 p-8 rounded-2xl shadow-lg border border-white/20 transform transition-all hover:scale-[1.02] group">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-colors">
                  <Square3Stack3DIcon className="w-8 h-8 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    Space Category Management
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Organize and categorize different types of advertising
                    spaces. From highway billboards to restaurant walls, manage
                    them all efficiently.
                  </p>
                </div>
              </div>
            </div>

            {/* Photo Gallery Feature */}
            <div className="backdrop-blur-md bg-white/20 p-8 rounded-2xl shadow-lg border border-white/20 transform transition-all hover:scale-[1.02] group">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-colors">
                  <PhotoIcon className="w-8 h-8 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    Photo Upload & Gallery
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Showcase your advertising spaces with high-quality images.
                    Multiple views and detailed photos help attract potential
                    renters.
                  </p>
                </div>
              </div>
            </div>

            {/* Communication Feature */}
            <div className="backdrop-blur-md bg-white/20 p-8 rounded-2xl shadow-lg border border-white/20 transform transition-all hover:scale-[1.02] group">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-colors">
                  <ChatBubbleBottomCenterTextIcon className="w-8 h-8 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    Direct Communication
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Connect directly with space owners through our integrated
                    messaging system. Quick and efficient communication for
                    better deals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Listings Grid with Glass Cards */}
      <div id="listings-section" className="px-6 py-16 max-w-[2520px] mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-green-600">
          Available Listings
        </h2>
        {listings.length === 0 ? (
          <EmptyState showReset />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
            {listings.map((listing) => (
              <div
                key={listing.id}
                className="transform transition-all duration-300 hover:scale-[1.03]"
              >
                <div className="backdrop-blur-sm bg-white/20 rounded-2xl p-2 shadow-lg border border-white/20">
                  <ListingCard currentUser={currentUser} data={listing} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="relative mt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 to-green-500/10 backdrop-blur-sm"></div>
        <div className="relative max-w-7xl mx-auto px-8 pt-20 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-green-600">
                Hoardinger
              </h3>
              <p className="text-gray-600">
                Connecting hoarding space owners with businesses for effective
                advertising solutions.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <ul className="space-y-2">
                {["About Us", "How It Works", "Pricing", "FAQs"].map((link) => (
                  <li key={link}>
                    <Link
                      href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-gray-600 hover:text-emerald-600 transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Legal</h4>
              <ul className="space-y-2">
                {[
                  "Privacy Policy",
                  "Terms of Service",
                  "Cookie Policy",
                  "Disclaimer",
                ].map((link) => (
                  <li key={link}>
                    <Link
                      href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-gray-600 hover:text-emerald-600 transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Stay Updated</h4>
              <p className="text-gray-600">
                Subscribe to our newsletter for the latest updates.
              </p>
              <form className="space-y-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg backdrop-blur-sm bg-white/20 border border-white/20 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <button
                  type="submit"
                  className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-green-500 text-white font-medium hover:from-emerald-600 hover:to-green-600 transition-all"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-gray-200/20 text-center text-gray-600">
            <p>
              &copy; {new Date().getFullYear()} Hoardinger. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
