import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProfileSidebar } from "@/components/profile-sidebar"
import { AddressBook } from "@/components/address-book"

export default function AddressesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Address Book</h1>
            <nav className="text-sm text-muted-foreground">
              <span>Home</span>
              <span className="mx-2">/</span>
              <span>Profile</span>
              <span className="mx-2">/</span>
              <span>Addresses</span>
            </nav>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <ProfileSidebar />
          </div>
          <div className="lg:col-span-3">
            <AddressBook />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
