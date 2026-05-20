import { Navbar, Footer } from '../organisms';

/**
 * Page shell: fixed navbar, a `<main>` content slot, and the footer.
 * Templates define structure only - pages fill the `children` slot.
 */
export default function PageLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30 scroll-smooth">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
