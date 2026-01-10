import { Search, ShoppingCart, User,Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function NavigationBar() {
  return (
    <header className="w-full border-b border-gray-200 bg-[#F5FFE8]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Left Section: Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 transition-opacity hover:opacity-80"
        >
          <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg">
            <Image
              src="/icons/Fetch_Icon.png"
              alt="Fetch!"
              width={48}
              height={48}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-emerald-600">
              Fetch<span className="text-emerald-500">!</span>
            </span>
            <span className="text-xs font-light text-emerald-400/70">
              FETCH
            </span>
          </div>
        </Link>

        {/* Center Section: Navigation Links with Icons */}
        <nav className="flex flex-1 items-center justify-center gap-12">
          {/* Household */}
          <Link
            href="/home"
            className="group flex items-center gap-2 transition-colors duration-200 hover:text-emerald-600"
          >
            <Users className="h-5 w-5 text-gray-700 transition-colors duration-200 group-hover:text-emerald-600" />
            <span className="text-sm font-medium text-gray-700 transition-colors duration-200 group-hover:text-emerald-600">
              Household
            </span>
          </Link>

          {/* Shopping */}
          <Link
            href="/shop"
            className="group flex items-center gap-2 transition-colors duration-200 hover:text-emerald-600"
          >
            <ShoppingCart className="h-5 w-5 text-gray-700 transition-colors duration-200 group-hover:text-emerald-600" />
            <span className="text-sm font-medium text-gray-700 transition-colors duration-200 group-hover:text-emerald-600">
              Shopping
            </span>
          </Link>

          {/* Searching with Dropdown */}
          <div className="group relative">
            <button
              type="button"
              className="flex items-center gap-2 transition-colors duration-200 hover:text-emerald-600"
            >
              <Search className="h-5 w-5 text-gray-700 transition-colors duration-200 group-hover:text-emerald-600" />
              <span className="text-sm font-medium text-gray-700 transition-colors duration-200 group-hover:text-emerald-600">
                Searching
              </span>
            </button>
            {/* Dropdown Menu */}
            <div className="absolute left-1/2 top-full z-50 mt-4 hidden w-48 -translate-x-1/2 transform rounded-xl border border-gray-200 bg-white py-2 shadow-lg transition-all duration-200 group-focus-within:block group-hover:block">
              <Link
                href="/dog-parks"
                className="block px-4 py-2.5 text-sm text-gray-700 transition-colors duration-150 hover:bg-emerald-50 hover:text-emerald-600"
              >
                Walking Location
              </Link>
              <Link
                href="/vets"
                className="block px-4 py-2.5 text-sm text-gray-700 transition-colors duration-150 hover:bg-emerald-50 hover:text-emerald-600"
              >
                Vet
              </Link>
            </div>
          </div>

          {/* Account with Dropdown */}
          <div className="group relative">
            <button
              type="button"
              className="flex items-center gap-2 transition-colors duration-200 hover:text-emerald-600"
            >
              <User className="h-5 w-5 text-gray-700 transition-colors duration-200 group-hover:text-emerald-600" />
              <span className="text-sm font-medium text-gray-700 transition-colors duration-200 group-hover:text-emerald-600">
                Account
              </span>
            </button>
            {/* Dropdown Menu */}
            <div className="absolute left-1/2 top-full z-50 mt-4 hidden w-48 -translate-x-1/2 transform rounded-xl border border-gray-200 bg-white py-2 shadow-lg transition-all duration-200 group-focus-within:block group-hover:block">
              <Link
                href="/profile"
                className="block px-4 py-2.5 text-sm text-gray-700 transition-colors duration-150 hover:bg-emerald-50 hover:text-emerald-600"
              >
                Profile
              </Link>
              <button
                type="button"
                className="w-full px-4 py-2.5 text-left text-sm text-gray-700 transition-colors duration-150 hover:bg-emerald-50 hover:text-emerald-600"
              >
                Notifications
              </button>
              <div className="my-1 border-t border-gray-100" />
              <button
                type="button"
                className="w-full px-4 py-2.5 text-left text-sm text-red-600 transition-colors duration-150 hover:bg-red-50"
              >
                Log out
              </button>
            </div>
          </div>
        </nav>

        {/* Right Section: Sign Up Button */}
        <button
          type="button"
          className="rounded-lg bg-emerald-500 px-6 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-emerald-600 hover:shadow-md active:scale-95"
        >
          Sign Up
        </button>
      </div>
    </header>
  );
}
