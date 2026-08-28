// Editorial Signal style: portfolio projects are indexed, image-led, and intentionally sparse.
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'wouter';
import { projects } from '@/data/siteContent';

export default function Portfolio() { return <div className="inner-page portfolio-page"><section className="portfolio-heading section-pad"><div className="section-label"><span>(01)</span><span>Latest / 07</span><span>© 2026</span></div><h1>A curated collection<br />of <em>strong signals.</em></h1><p>Selected work across identity, image-making, and the systems that hold them together.</p></section><section className="section-pad portfolio-list">{projects.map((project, i) => <Link href={`/work/portfolio/${project.slug}`} className="portfolio-item" key={project.id}><div className="portfolio-item-image"><img src={project.image.src} alt={project.image.alt} loading={i > 0 ? 'lazy' : 'eager'} /></div><div className="portfolio-item-meta"><span>({project.index})</span><div><h2>{project.title}</h2><p>{project.category} <span>© {project.year}</span></p></div><ArrowUpRight size={22} /></div></Link>)}</section></div>; }
