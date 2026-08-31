"use client";
import { useMemo, useState } from "react";
import intelligence from "../data/intelligence.json";

type Tab = "Overview"|"Projects"|"Opportunities"|"Lessons"|"Avoid"|"Research";

export default function Home(){
 const [tab,setTab]=useState<Tab>("Overview");
 const [query,setQuery]=useState("");
 const allText=JSON.stringify(intelligence).toLowerCase();
 const hasQuery=query.trim().length>1;
 const searchResult=useMemo(()=>hasQuery && allText.includes(query.toLowerCase()),[query,allText,hasQuery]);
 const nav:Tab[]=["Overview","Projects","Opportunities","Lessons","Avoid","Research"];
 return <main className="shell">
  <header className="top">
   <div className="brand"><div className="mark">U</div><div><h1>Umbrella Intelligence</h1><p>Persistent project intelligence · every decision starts ahead of the last one.</p></div></div>
   <div className="status">● V1 intelligence seeded</div>
  </header>

  <div className="grid">
   <aside className="sidebar">
    <div className="search"><span>⌕</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search intelligence..." /></div>
    {nav.map(n=><button key={n} className={"nav "+(tab===n?"active":"")} onClick={()=>setTab(n)}>{n}</button>)}
   </aside>

   <section className="main">
    {hasQuery && <div className={"searchBanner "+(searchResult?"found":"")}><strong>{searchResult?"Relevant intelligence exists":"No exact match in current seed intelligence"}</strong><span>{searchResult?"Use this as a prompt to retrieve the relevant record before researching again.":"This may be a genuine research gap worth investigating."}</span></div>}

    {tab==="Overview" && <Overview setTab={setTab}/>}
    {tab==="Projects" && <Projects/>}
    {tab==="Opportunities" && <Opportunities/>}
    {tab==="Lessons" && <Lessons/>}
    {tab==="Avoid" && <Avoid/>}
    {tab==="Research" && <Research/>}
   </section>
  </div>
 </main>
}

function Overview({setTab}:{setTab:(t:Tab)=>void}){
 return <>
  <div className="hero"><div className="eyebrow">Umbrella operating intelligence</div><h2>Not a notebook. A decision system.</h2><p>Its job is to stop circular research: retrieve what we already know, identify evidence gaps, research only the gaps, store the result and update the decision without attachment.</p><div className="heroActions"><button onClick={()=>setTab("Research")}>View research queue</button><button className="ghost" onClick={()=>setTab("Opportunities")}>Explore opportunity fields</button></div></div>
  <div className="stats">
   <Stat n={intelligence.projects.length} l="Project records"/>
   <Stat n={intelligence.confirmed_lessons.length} l="Inherited lessons"/>
   <Stat n={intelligence.opportunity_fields.length} l="Opportunity fields"/>
   <Stat n="30%" l="Revenue potential weighting"/>
  </div>
  <div className="section-title"><h3>Current mission</h3><span className="hint">What Project 1 is actually trying to achieve</span></div>
  <div className="card mission"><strong>{intelligence.mission.current}</strong><p>{intelligence.mission.preferred_outcome}</p><div className="chips">{intelligence.mission.not_required.map(x=><span key={x}>{x}</span>)}</div></div>
  <div className="two">
   <div><div className="section-title"><h3>Decision protocol</h3></div><div className="card">{intelligence.decision_protocol.map((x,i)=><div className="step" key={x}><b>{i+1}</b><span>{x}</span></div>)}</div></div>
   <div><div className="section-title"><h3>Weighted assessment</h3></div><div className="card">{intelligence.weighted_assessment.factors.map(f=><div className="weight" key={f.name}><span>{f.name}</span><b>{f.weight}%</b></div>)}</div></div>
  </div>
 </>
}
function Stat({n,l}:{n:number|string,l:string}){return <div className="card stat"><div className="num">{n}</div><div className="label">{l}</div></div>}
function Projects(){return <><Title title="Project memory" hint="Hypotheses, decisions, status and lessons survive the project"/><div className="projectStack">{intelligence.projects.map((p:any)=><article className="card record" key={p.id}><div className="recordHead"><div><span className="pill">{p.status}</span><h3>{p.name}</h3></div><span className="sectionTag">{p.section}</span></div>{p.objective&&<Block title="Objective" text={p.objective}/>} {p.original_hypothesis&&<Block title="Original hypothesis" text={p.original_hypothesis}/>} {p.revenue_assessment&&<Block title="Revenue assessment" text={p.revenue_assessment}/>} {p.stronger_hypothesis&&<Block title="Stronger future hypothesis" text={p.stronger_hypothesis}/>} {p.strategic_role&&<Block title="Strategic role" text={p.strategic_role}/>} {p.current_position&&<Block title="Current position" text={p.current_position}/>} {p.lessons&&<List title="Inherited lessons" items={p.lessons}/>} {p.revisit_triggers&&<List title="Revisit triggers" items={p.revisit_triggers}/>} {p.selection_rules&&<List title="Selection rules" items={p.selection_rules}/>}</article>)}</div></>}
function Opportunities(){return <><Title title="Opportunity fields" hint="These are research fields, not chosen projects"/><div className="opGrid">{intelligence.opportunity_fields.map((o:any)=><article className="card opportunity" key={o.id}><span className="pill blue">{o.current_assessment}</span><h3>{o.name}</h3><p>{o.model}</p><List title="Revenue mechanisms" items={o.revenue}/><List title="Strengths" items={o.strengths}/><List title="Risks to prove against" items={o.risks}/></article>)}</div></>}
function Lessons(){return <><Title title="Compounding lessons" hint="These should actively influence future recommendations"/><div className="card">{intelligence.confirmed_lessons.map((l:any)=><div className="item" key={l.title}><strong>{l.title}</strong><p>{l.detail}</p></div>)}</div><div className="section-title"><h3>Umbrella structure</h3><span className="hint">How portfolio identity is handled</span></div><div className="two"><div className="card"><h3>The Branded</h3><p>{intelligence.umbrella_model.sections.branded}</p></div><div className="card"><h3>The Unbranded</h3><p>{intelligence.umbrella_model.sections.unbranded}</p></div></div><div className="card listCard"><List title="Portfolio rules" items={intelligence.umbrella_model.rules}/></div></>}
function Avoid(){return <><Title title="Rejected & parked patterns" hint="Knowledge that prevents us walking back into the same dead ends"/><div className="card">{intelligence.rejected_or_parked_patterns.map((x:any)=><div className="item" key={x.pattern}><div className="avoidHead"><strong>{x.pattern}</strong><span className="pill red">{x.status}</span></div><p>{x.reason}</p></div>)}</div></>}
function Research(){return <><Title title="Active research queue" hint="The next evidence gaps — not another generic idea hunt"/><div className="queue">{intelligence.research_queue.map((q:any)=><article className="card queueItem" key={q.priority}><div className="queueNo">{q.priority}</div><div><h3>{q.task}</h3><p><strong>Target fields:</strong> {q.target_fields.join(" · ")}</p><p><strong>Required output:</strong> {q.output}</p></div></article>)}</div><div className="section-title"><h3>Research rule</h3></div><div className="card callout"><strong>Do not start with “What can we build?”</strong><p>Start with the intelligence we already have, then ask what evidence is missing about demand, traffic, competition, monetisation and automation.</p></div></>}
function Title({title,hint}:{title:string,hint:string}){return <div className="section-title big"><div><h2>{title}</h2><span className="hint">{hint}</span></div></div>}
function Block({title,text}:{title:string,text:string}){return <div className="block"><strong>{title}</strong><p>{text}</p></div>}
function List({title,items}:{title:string,items:string[]}){return <div className="list"><strong>{title}</strong><ul>{items.map(i=><li key={i}>{i}</li>)}</ul></div>}