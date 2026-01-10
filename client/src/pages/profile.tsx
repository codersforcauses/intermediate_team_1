import { NavigationBar } from "@/components/ui/navigation-bar";

export default function ProfilePage() {
  return (
    <>
      <NavigationBar />
      <div className="min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-emerald-600">Profile</h1>
        </div>
      </div>
    </>
  );
}
