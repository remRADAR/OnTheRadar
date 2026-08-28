// Editorial Signal style: shared navigation is a persistent editorial index, not a generic app bar.
import { useEffect, useState } from 'react';
import { Link, Route, Switch, useLocation } from 'wouter';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { navigation, media, siteSettings, seo } from '@/data/siteContent';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Portfolio from '@/pages/Portfolio';
import Contact from '@/pages/Contact';
import ProjectDetail from '@/pages/ProjectDetail';
import NotFound from '@/pages/NotFound';

function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();
  useEffect(() => setOpen(false), [location]);
  return <header className="site-header">
    <Link href="/" className="brand" aria-label="On The Radar home"><img src={media.mark} alt="" /><span>ON THE<br />RADAR</span></Link>
    <nav className="desktop-nav" aria-label="Main navigation">{navigation.map(item => <Link key={item.href} href={item.href} className={location === item.href ? 'active' : ''}><span>{item.label}</span><small>{item.index}</small></Link>)}</nav>
    <Link href="/contact" className="ceo-chip"><span className="chip-dot" /> <span><b>Creative partner</b><small>Available for select work</small></span><ArrowUpRight size={16} /></Link>
    <button className="menu-toggle" onClick={() => setOpen(v => !v)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X /> : <Menu />}</button>
    {open && <nav id="mobile-menu" className="mobile-nav" aria-label="Mobile navigation">{navigation.map(item => <Link key={item.href} href={item.href}><span>{item.label}</span><small>{item.index}</small></Link>)}<Link href="/contact" className="mobile-cta">Start a conversation <ArrowUpRight size={16} /></Link></nav>}
  </header>;
}

function SiteFooter() {
  return <footer className="site-footer"><div className="footer-top"><span className="section-index">(09) / Closing signal</span><h2>Let’s make<br /><em>something visible.</em></h2><Link href="/contact" className="outline-button">Contact now <ArrowUpRight size={18} /></Link></div><div className="footer-bottom"><div><span className="mono">SAY HI</span><a href={`mailto:${siteSettings.email}`}>{siteSettings.email}</a></div><div className="footer-links">{navigation.map(item => <Link key={item.href} href={item.href}>{item.label} <small>{item.index}</small></Link>)}</div><div className="footer-meta"><span>© {siteSettings.year}</span><span>Made for the next move.</span></div></div></footer>;
}

function Layout({ children }: { children: React.ReactNode }) {
  return <><SiteHeader /><main>{children}</main><SiteFooter /></>;
}

function Seo({ page }: { page: keyof typeof seo }) {
  useEffect(() => { document.title = seo[page].title; const meta = document.querySelector('meta[name="description"]') ?? document.createElement('meta'); meta.setAttribute('name', 'description'); meta.setAttribute('content', seo[page].description); document.head.appendChild(meta); }, [page]);
  return null;
}

export default function App() {
  return <Layout><Switch>
    <Route path="/"><Seo page="home" /><Home /></Route>
    <Route path="/about"><Seo page="about" /><About /></Route>
    <Route path="/work/portfolio"><Seo page="portfolio" /><Portfolio /></Route>
    <Route path="/work/portfolio/:slug"><Seo page="portfolio" /><ProjectDetail /></Route>
    <Route path="/contact"><Seo page="contact" /><Contact /></Route>
    <Route><NotFound /></Route>
  </Switch></Layout>;
}
