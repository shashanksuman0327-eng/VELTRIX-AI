'use client';
import { memo, useState, type CSSProperties } from 'react';
import { features } from '@/constants/site';

export const FeatureShowcase = memo(function FeatureShowcase() {
  const [active, setActive] = useState(0);
  return <><div className="bento" aria-label="Enterprise AI capabilities">{features.map((feature, index) => <button key={feature.title} style={{ '--accent': feature.accent } as CSSProperties} className={`feature-card glass ${index === active ? 'active' : ''} ${index === 0 || index === 4 ? 'span-2' : ''} ${index === 2 ? 'tall' : ''}`} onFocus={() => setActive(index)} onMouseEnter={() => setActive(index)} onClick={() => setActive(index)}><span className="text-2xl">{feature.icon}</span><h3 className="text-xl font-extrabold">{feature.title}</h3><p>{feature.description}</p><strong>{feature.stat}</strong></button>)}</div><div className="accordion">{features.map((feature, index) => <article key={feature.title} className="acc-item glass"><button aria-expanded={active === index} onClick={() => setActive(index)}><span>{feature.icon} {feature.title}</span><b className="text-cyan-200">{feature.stat}</b></button>{active === index ? <div className="acc-panel"><p>{feature.description}</p></div> : null}</article>)}</div></>;
});
