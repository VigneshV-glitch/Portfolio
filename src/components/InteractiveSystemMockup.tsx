import React, { useState } from 'react';
import {
  Truck,
  Clock,
  Layers,
  CheckCircle,
  Search,
  Sparkles,
  Filter,
  Play,
  SlidersHorizontal,
  Building2,
  ClipboardList,
} from 'lucide-react';
import { ProjectVisualType } from '../types';

interface MockupProps {
  type: ProjectVisualType;
}

export const InteractiveSystemMockup: React.FC<MockupProps> = ({ type }) => {
  // 01. TMS State
  const [tmsFilter, setTmsFilter] = useState<'All' | 'In Transit' | 'Delayed'>('All');
  const tmsTrips = [
    { id: 'TRP-4082', route: 'Dallas → Memphis', cargo: 'Industrial HVAC', stops: '3 Stops', status: 'In Transit' },
    { id: 'TRP-4091', route: 'Chicago → Detroit', cargo: 'Cold Chain Food', stops: '2 Stops', status: 'Delayed' },
    { id: 'TRP-4104', route: 'Atlanta → Charlotte', cargo: 'Retail Pallets', stops: '1 Stop', status: 'In Transit' },
  ];

  // 02. Milestone State
  const [milestoneStage, setMilestoneStage] = useState(0);
  const milestoneStages = [
    { name: 'Dispatch Planning', count: '42 Active', status: 'On Track', owner: 'Ops Lead' },
    { name: 'Yard & Gate Sync', count: '18 Pending', status: 'Attention', owner: 'Gate Coordinator' },
    { name: 'Proof of Delivery', count: '116 Verified', status: 'Completed', owner: 'Billing Ops' },
  ];

  // 03. WMS State
  const [selectedZone, setSelectedZone] = useState<'Zone A' | 'Zone B' | 'Cold Storage'>('Zone A');
  const wmsConfigs: Record<'Zone A' | 'Zone B' | 'Cold Storage', { code: string; hierarchy: string; rule: string }[]> = {
    'Zone A': [
      { code: 'A-01-R2-B4', hierarchy: 'Facility 1 → Zone A → Aisle 01', rule: 'High-Velocity Pallets' },
      { code: 'A-02-R1-B1', hierarchy: 'Facility 1 → Zone A → Aisle 02', rule: 'Standard Shelving' },
    ],
    'Zone B': [
      { code: 'B-04-R3-B2', hierarchy: 'Facility 1 → Zone B → Aisle 04', rule: 'Heavy Equipment Bins' },
      { code: 'B-05-R1-B6', hierarchy: 'Facility 1 → Zone B → Aisle 05', rule: 'Bulk Overflow' },
    ],
    'Cold Storage': [
      { code: 'C-01-R1-B1', hierarchy: 'Facility 1 → Cold → Aisle 01', rule: 'Temp Controlled (-18°C)' },
      { code: 'C-02-R2-B3', hierarchy: 'Facility 1 → Cold → Aisle 02', rule: 'Perishable FIFO' },
    ],
  };

  // 04. DMS State
  const [selectedBay, setSelectedBay] = useState(0);
  const dmsBays = [
    { id: 'Dock 01', module: 'Dock Scheduler', carrier: 'Swift Carrier', status: 'Unloading', detail: 'Slot 14:00 – 15:30' },
    { id: 'Gate 02', module: 'Gate Management', carrier: 'XPO Logistics', status: 'Checked In', detail: 'Seal #88412 Verified' },
    { id: 'Yard 04', module: 'Yard Management', carrier: 'Trailer TR-92', status: 'Staged', detail: 'Handler Assigned' },
    { id: 'Dock 05', module: 'Dock Maintenance', carrier: 'Leveler Check', status: 'Maintenance', detail: 'Safety Hold Active' },
  ];

  // 05. FMS State
  const [fmsTab, setFmsTab] = useState<'Vehicles' | 'Drivers'>('Vehicles');
  const fmsVehicles = [
    { id: 'VH-204', label: 'Freightliner Cascadia', driver: 'R. Patel', state: 'Assigned' },
    { id: 'VH-318', label: 'Volvo VNL 760', driver: 'S. Nair', state: 'Available' },
    { id: 'VH-112', label: 'Kenworth T680', driver: 'Maintenance Bay', state: 'Service' },
  ];
  const fmsDrivers = [
    { id: 'DR-091', label: 'R. Patel · Class A CDL', driver: 'Assigned VH-204', state: 'On Duty' },
    { id: 'DR-104', label: 'S. Nair · Hazmat Endorsed', driver: 'Ready for Dispatch', state: 'Available' },
    { id: 'DR-129', label: 'M. Thomas · Regional', driver: 'Rest Cycle', state: 'Off Duty' },
  ];

  // 06. StarsIn State
  const [starsTab, setStarsTab] = useState<'Scouting Profile' | 'Motion Reel'>('Scouting Profile');

  // 07. LogistikGuru State
  const [lgVertical, setLgVertical] = useState<'All Verticals' | 'Service Providers' | 'Jobs'>('All Verticals');
  const lgResults = [
    { vertical: 'Service Providers', title: 'Apex Cold Chain Freight', meta: 'Warehousing · Refrigerated Fleet · Verified' },
    { vertical: 'Jobs', title: 'Senior Supply Chain Coordinator', meta: 'Full-Time · Operations · Bengaluru' },
    { vertical: 'Service Providers', title: 'Horizon Port Customs Clearing', meta: 'Customs Brokerage · Freight Forwarding' },
  ];

  if (type === 'tms') {
    const visibleTrips = tmsFilter === 'All' ? tmsTrips : tmsTrips.filter((t) => t.status === tmsFilter);
    return (
      <div className="w-full bg-[#0F1115] rounded-xl border border-white/10 p-4 sm:p-5 text-left font-sans shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-white/10 text-xs">
          <div className="flex items-center gap-2 font-mono font-semibold text-white">
            <Filter className="w-3.5 h-3.5 text-indigo-400" />
            <span>TMS Trip Operations & Conditional Filters</span>
          </div>
          <div className="flex flex-wrap items-center gap-1 bg-[#16191E] p-1 rounded-lg border border-white/5 max-w-full">
            {(['All', 'In Transit', 'Delayed'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setTmsFilter(f)}
                className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors ${
                  tmsFilter === f ? 'bg-indigo-600 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 mb-3 text-xs font-mono tabular-nums">
          <div className="bg-[#16191E] p-2 sm:p-2.5 rounded-lg border border-white/5 min-w-0">
            <span className="text-[10px] text-gray-400 block truncate">Active Trips</span>
            <span className="text-sm font-bold text-white">128</span>
          </div>
          <div className="bg-[#16191E] p-2 sm:p-2.5 rounded-lg border border-white/5 min-w-0">
            <span className="text-[10px] text-gray-400 block truncate">Saved Views</span>
            <span className="text-xs sm:text-sm font-bold text-indigo-300 block truncate">Delay Watch</span>
          </div>
          <div className="bg-[#16191E] p-2 sm:p-2.5 rounded-lg border border-white/5 min-w-0">
            <span className="text-[10px] text-gray-400 block truncate">Exceptions</span>
            <span className="text-sm font-bold text-amber-400">04</span>
          </div>
        </div>

        <div className="space-y-2">
          {visibleTrips.map((trip) => (
            <div key={trip.id} className="flex items-center justify-between gap-2 p-2.5 rounded-lg bg-[#16191E] border border-white/5 text-xs">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 font-mono">
                  <span className="text-indigo-300 font-semibold shrink-0">{trip.id}</span>
                  <span className="text-gray-400 hidden sm:inline">·</span>
                  <span className="text-white font-sans font-medium truncate">{trip.route}</span>
                </div>
                <span className="text-[11px] text-gray-400 block truncate">{trip.cargo} · {trip.stops}</span>
              </div>
              <span className={`text-[11px] font-mono font-medium shrink-0 ${trip.status === 'Delayed' ? 'text-amber-400' : 'text-emerald-400'}`}>
                {trip.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === 'milestone') {
    const active = milestoneStages[milestoneStage];
    return (
      <div className="w-full bg-[#0F1115] rounded-xl border border-white/10 p-4 sm:p-5 text-left font-sans shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-white/10 text-xs">
          <span className="font-mono font-semibold text-white">Milestone Operations Workflow</span>
          <span className="font-mono text-indigo-300 text-[11px]">Status-Driven View</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-4">
          {milestoneStages.map((st, idx) => (
            <button
              key={st.name}
              onClick={() => setMilestoneStage(idx)}
              className={`p-2.5 rounded-lg border text-left transition-colors min-w-0 ${
                milestoneStage === idx
                  ? 'bg-indigo-950/40 border-indigo-500/50 text-white'
                  : 'bg-[#16191E] border-white/5 text-gray-300 hover:bg-[#1C2028]'
              }`}
            >
              <span className="text-[10px] font-mono text-indigo-300 block mb-0.5">0{idx + 1}</span>
              <span className="text-xs font-semibold block truncate">{st.name}</span>
            </button>
          ))}
        </div>

        <div className="bg-[#16191E] p-3.5 rounded-lg border border-white/10 space-y-2 text-xs">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="font-semibold text-white">{active.name}</span>
            <span className="font-mono text-emerald-400">{active.status}</span>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-gray-400 pt-2 border-t border-white/5">
            <span>Volume: {active.count}</span>
            <span>Role: {active.owner}</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'wms') {
    const bins = wmsConfigs[selectedZone];
    return (
      <div className="w-full bg-[#0F1115] rounded-xl border border-white/10 p-4 sm:p-5 text-left font-sans shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-white/10 text-xs">
          <div className="flex items-center gap-2 font-mono font-semibold text-white">
            <Layers className="w-3.5 h-3.5 text-emerald-400" />
            <span>WMS Configuration Hierarchy</span>
          </div>
          <div className="flex flex-wrap items-center gap-1 bg-[#16191E] p-1 rounded-lg border border-white/5 max-w-full">
            {(['Zone A', 'Zone B', 'Cold Storage'] as const).map((z) => (
              <button
                key={z}
                onClick={() => setSelectedZone(z)}
                className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors ${
                  selectedZone === z ? 'bg-emerald-600 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {z}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2.5">
          {bins.map((bin) => (
            <div key={bin.code} className="bg-[#16191E] p-3 rounded-lg border border-white/10 text-xs">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                <span className="font-mono font-bold text-emerald-400">{bin.code}</span>
                <span className="font-mono text-[11px] text-gray-300">{bin.rule}</span>
              </div>
              <p className="text-[11px] font-mono text-gray-400 break-words">{bin.hierarchy}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === 'dms') {
    const active = dmsBays[selectedBay];
    return (
      <div className="w-full bg-[#0F1115] rounded-xl border border-white/10 p-4 sm:p-5 text-left font-sans shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-white/10 text-xs">
          <span className="font-mono font-semibold text-white">DMS Facility Operations</span>
          <span className="font-mono text-gray-400 text-[11px]">Scheduler · Gate · Yard</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
          {dmsBays.map((bay, idx) => (
            <button
              key={bay.id}
              onClick={() => setSelectedBay(idx)}
              className={`p-2.5 rounded-lg border text-xs text-left transition-all min-w-0 ${
                selectedBay === idx
                  ? 'bg-blue-950/40 border-blue-500/50 text-white'
                  : 'bg-[#16191E] border-white/5 text-gray-300 hover:bg-[#1C2028]'
              }`}
            >
              <span className="font-mono font-bold text-blue-300 block mb-0.5">{bay.id}</span>
              <span className="text-[11px] text-gray-300 block truncate">{bay.module}</span>
            </button>
          ))}
        </div>

        <div className="bg-[#16191E] p-3.5 rounded-lg border border-white/10 text-xs space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="font-mono font-bold text-white flex items-center gap-2 min-w-0">
              <Clock className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span className="truncate">{active.module} · {active.carrier}</span>
            </span>
            <span className="font-mono text-indigo-300 text-[11px] shrink-0">{active.status}</span>
          </div>
          <div className="text-[11px] font-mono text-gray-400 pt-2 border-t border-white/5">
            Active Detail: {active.detail}
          </div>
        </div>
      </div>
    );
  }

  if (type === 'fms') {
    const rows = fmsTab === 'Vehicles' ? fmsVehicles : fmsDrivers;
    return (
      <div className="w-full bg-[#0F1115] rounded-xl border border-white/10 p-4 sm:p-5 text-left font-sans shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-white/10 text-xs">
          <div className="flex items-center gap-2 font-mono font-semibold text-white min-w-0">
            <Truck className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
            <span className="truncate">FMS Fleet & Resource Allocation</span>
          </div>
          <div className="flex flex-wrap items-center gap-1 bg-[#16191E] p-1 rounded-lg border border-white/5 max-w-full">
            {(['Vehicles', 'Drivers'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFmsTab(tab)}
                className={`px-2.5 py-0.5 rounded text-[11px] font-mono transition-colors ${
                  fmsTab === tab ? 'bg-indigo-600 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          {rows.map((row) => (
            <div key={row.id} className="flex items-center justify-between gap-2 p-2.5 rounded-lg bg-[#16191E] border border-white/5 text-xs">
              <div className="min-w-0">
                <span className="font-mono text-indigo-300 font-semibold mr-2">{row.id}</span>
                <span className="text-white font-medium break-words">{row.label}</span>
                <span className="text-[11px] text-gray-400 block mt-0.5 truncate">{row.driver}</span>
              </div>
              <span className="text-[11px] font-mono text-emerald-400 shrink-0">{row.state}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === 'starsin') {
    return (
      <div className="w-full bg-[#0F1115] rounded-xl border border-white/10 p-4 sm:p-5 text-left font-sans shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-white/10 text-xs">
          <div className="flex items-center gap-2 font-mono font-semibold text-white min-w-0">
            <Play className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
            <span className="truncate">StarsIn Discovery & Motion Showcase</span>
          </div>
          <div className="flex flex-wrap items-center gap-1 bg-[#16191E] p-1 rounded-lg border border-white/5 max-w-full">
            {(['Scouting Profile', 'Motion Reel'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setStarsTab(tab)}
                className={`px-2.5 py-0.5 rounded text-[11px] font-mono transition-colors ${
                  starsTab === tab ? 'bg-indigo-600 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {starsTab === 'Scouting Profile' ? (
          <div className="bg-[#16191E] p-3.5 sm:p-4 rounded-lg border border-white/10 space-y-3 text-xs">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="min-w-0">
                <span className="text-white font-bold text-sm block truncate">Aarav Sharma · Midfielder</span>
                <span className="text-[11px] font-mono text-gray-400 block truncate">U-21 Division · Scouting Profile</span>
              </div>
              <span className="font-mono text-indigo-300 text-[11px] shrink-0">Verified Talent</span>
            </div>
            <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/5 font-mono text-center tabular-nums">
              <div className="bg-[#0F1115] p-2 rounded">
                <span className="text-white font-bold block">24</span>
                <span className="text-[10px] text-gray-400">Matches</span>
              </div>
              <div className="bg-[#0F1115] p-2 rounded">
                <span className="text-indigo-300 font-bold block">88%</span>
                <span className="text-[10px] text-gray-400">Pass Acc.</span>
              </div>
              <div className="bg-[#0F1115] p-2 rounded">
                <span className="text-emerald-400 font-bold block">14</span>
                <span className="text-[10px] text-gray-400">Highlights</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-[#16191E] p-3.5 sm:p-4 rounded-lg border border-white/10 space-y-2.5 text-xs font-mono">
            <div className="flex items-center justify-between gap-2 text-white">
              <span className="truncate">After Effects Production Deliverables</span>
              <Sparkles className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
            </div>
            <div className="p-2.5 rounded bg-[#0F1115] text-gray-300 text-[11px]">
              01 · Logo Reveal & Scene-Based Brand Animation
            </div>
            <div className="p-2.5 rounded bg-[#0F1115] text-gray-300 text-[11px]">
              02 · LinkedIn Carousel & Promotional Storytelling Series
            </div>
          </div>
        )}
      </div>
    );
  }

  if (type === 'logistikguru') {
    const visibleResults =
      lgVertical === 'All Verticals'
        ? lgResults
        : lgResults.filter((r) => r.vertical === lgVertical);

    return (
      <div className="w-full bg-[#0F1115] rounded-xl border border-white/10 p-4 sm:p-5 text-left font-sans shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-white/10 text-xs">
          <div className="flex items-center gap-2 font-mono font-semibold text-white min-w-0">
            <Search className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
            <span className="truncate">LogistikGuru Universal Search</span>
          </div>
          <div className="flex flex-wrap items-center gap-1 bg-[#16191E] p-1 rounded-lg border border-white/5 max-w-full">
            {(['All Verticals', 'Service Providers', 'Jobs'] as const).map((v) => (
              <button
                key={v}
                onClick={() => setLgVertical(v)}
                className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors ${
                  lgVertical === v ? 'bg-indigo-600 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {v}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between gap-2 px-3 py-2 rounded-lg bg-[#16191E] border border-white/10 mb-3 text-xs text-gray-300">
          <span className="font-mono text-[11px] truncate">Global Filters: Region · Vertical · Verified</span>
          <SlidersHorizontal className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
        </div>

        <div className="space-y-2">
          {visibleResults.map((res) => (
            <div key={res.title} className="p-2.5 rounded-lg bg-[#16191E] border border-white/5 flex items-center justify-between gap-2 text-xs">
              <div className="min-w-0">
                <span className="text-[10px] font-mono text-indigo-300 block">{res.vertical}</span>
                <span className="text-white font-semibold block truncate">{res.title}</span>
                <span className="text-[11px] text-gray-400 block truncate">{res.meta}</span>
              </div>
              <Building2 className="w-4 h-4 text-gray-500 shrink-0" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // 08. HMS
  return (
    <div className="w-full bg-[#0F1115] rounded-xl border border-white/10 p-5 text-left font-sans shadow-xl">
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10 text-xs">
        <div className="flex items-center gap-2 font-mono font-semibold text-white">
          <ClipboardList className="w-3.5 h-3.5 text-indigo-400" />
          <span>HMS · Hospital Management System</span>
        </div>
        <span className="font-mono text-gray-400 text-[11px]">Scope Pending Confirmation</span>
      </div>

      <div className="bg-[#16191E] p-4 rounded-lg border border-white/10 space-y-2.5 text-xs">
        <div className="flex items-center gap-2 text-indigo-300 font-mono text-[11px]">
          <CheckCircle className="w-3.5 h-3.5" />
          <span>Healthcare Application · Product Design</span>
        </div>
        <p className="text-gray-300 leading-relaxed">
          Specific modules, workflows and deliverables are currently being finalized prior to publishing the full interactive preview.
        </p>
      </div>
    </div>
  );
};
