"use client";

const projects=[
 {name:"SpecFlow",status:"Parked",score:"42",desc:"Website specification generator. The basic generator was not strong enough for our revenue criteria; the stronger future hypothesis is scope and requirement intelligence.",revisit:"Revisit when strong evidence of paid scope-risk demand or a clear alternative revenue mechanism appears."},
 {name:"Project 1 Search",status:"Active",score:"Research",desc:"Find the best first revenue-producing digital asset without limiting ourselves to SaaS or direct customer payments.",revisit:"Current focus: high-intent demand, clear monetisation, automation and fast testing."},
 {name:"Umbrella Intelligence",status:"Foundation",score:"Live",desc:"The internal memory and decision system designed to stop circular research and make each project improve the next.",revisit:"V1 records the intelligence; future versions should improve retrieval and evidence tracking."}
];
const lessons=[
 ["Buildability is not viability","SpecFlow was easy to build, but that alone did not prove that it had a strong route to revenue."],
 ["Revenue comes before attachment","A project can be parked or killed when evidence weakens, regardless of work already invested."],
 ["Direct payment is not required","Projects may earn through advertising, affiliate revenue, lead generation, sales or other mechanisms."],
 ["Existing demand is valuable","Prefer capturing an existing need over trying to persuade people to adopt a new behaviour."],
 ["Research should compound","Check existing intelligence, research only gaps, then store the result and update the decision."]
];
const opportunities=[
 ["High-intent lead generation","Visitor already needs a service; revenue can come from qualified leads or referrals.","Very high"],
 ["Free utility → revenue engine","Immediate free value with affiliate, referral, advertising or lead monetisation.","Very high"],
 ["Niche comparison / directory","Help users choose between options; monetise intent and visibility.","High"],
 ["Automated information/data asset","Organise useful data into a searchable asset that can attract recurring traffic.","High"]
];
export default function Home(){return <main className="shell">
 <header className="top"><div className="brand"><div className="mark">U</div><div><h1>Umbrella Intelligence</h1><p>Every project should make the next decision smarter.</p></div></div><div className="status">● Intelligence foundation active</div></header>
 <div className="grid"><aside className="sidebar"><div className="nav active"><span>⌂</span>Overview</div><div className="nav"><span>◈</span>Projects</div><div className="nav"><span>⌕</span>Research</div><div className="nav"><span>◉</span>Opportunities</div><div className="nav"><span>⚑</span>Decisions</div><div className="nav"><span>✦</span>Lessons</div><div className="nav"><span>⌁</span>Parked / Rejected</div></aside>
 <section className="main"><div className="hero"><div className="eyebrow">Umbrella foundation · v1</div><h2>We are not collecting notes. We are building usable intelligence.</h2><p>Before future umbrella decisions are made: retrieve what we already know, identify the gaps, research only what is missing, then store the evidence and update the decision.</p></div>
 <div className="stats"><div className="card stat"><div className="num">3</div><div className="label">Recorded projects</div></div><div className="card stat"><div className="num">5</div><div className="label">Core lessons</div></div><div className="card stat"><div className="num">4</div><div className="label">Opportunity directions</div></div><div className="card stat"><div className="num">1</div><div className="label">Active project search</div></div></div>
 <div className="section-title"><h3>Project memory</h3><span className="hint">The first intelligence records</span></div><div className="projects">{projects.map(p=><article className="card project" key={p.name}><span className="pill">{p.status}</span><h4>{p.name}</h4><p>{p.desc}</p><div className="meta"><span>{p.revisit}</span><span className="score">{p.score}</span></div></article>)}</div>
 <div className="two"><div><div className="section-title"><h3>Compounding lessons</h3><span className="hint">Rules future projects inherit</span></div><div className="card">{lessons.map(([t,d])=><div className="item" key={t}><strong>{t}</strong><p>{d}</p></div>)}</div></div><div><div className="section-title"><h3>Current opportunity field</h3><span className="hint">Not decisions yet</span></div><div className="card">{opportunities.map(([t,d,s])=><div className="item" key={t}><strong>{t}</strong><p>{d}</p><span className="score">{s}</span></div>)}</div></div></div>
 <div className="section-title"><h3>Decision protocol</h3><span className="hint">The rule that stops circular research</span></div><div className="card rules"><div className="rule"><div className="dot"></div><div><strong>Retrieve</strong> — check relevant existing intelligence before making a recommendation.</div></div><div className="rule"><div className="dot"></div><div><strong>Gap check</strong> — identify what we genuinely do not know.</div></div><div className="rule"><div className="dot"></div><div><strong>Research</strong> — investigate the missing evidence rather than restarting from generic idea lists.</div></div><div className="rule"><div className="dot"></div><div><strong>Store</strong> — record the evidence, confidence, decision impact and lessons.</div></div><div className="rule"><div className="dot"></div><div><strong>Decide</strong> — update the project assessment using accumulated intelligence, not attachment.</div></div></div>
 <p className="footer-note">Umbrella Intelligence V1 · Internal foundation for the project portfolio</p>
 </section></div></main>}