import React, { useState } from 'react';
import { Cpu, Activity, GitMerge, CheckCircle, ShieldAlert, Zap, ArrowRight } from 'lucide-react';

export const InteractiveHeroNode: React.FC = () => {
  const [activeScenario, setActiveScenario] = useState<'normal' | 'anomaly' | 'ai-audit'>('normal');
  const [selectedNode, setSelectedNode] = useState<number>(2);

  const scenarioDetails = {
    normal: {
      label: 'Optimal Workflow',
      status: 'System Equilibrium',
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/30',
      metric: 'Latency 18ms · 0 Friction',
    },
    anomaly: {
      label: 'Capacity Spike Detected',
      status: 'Dynamic Re-routing Active',
      color: 'text-amber-400',
      bg: 'bg-amber-500/10',
      border: 'border-amber-500/30',
      metric: 'Auto-Queued 14 Trucks',
    },
    'ai-audit': {
      label: 'Critiq AI Audit Mode',
      status: 'A11y & Token Compliance',
      color: 'text-indigo-400',
      bg: 'bg-indigo-500/10',
      border: 'border-indigo-500/30',
      metric: 'WCAG 2.2 AA Verified',
    },
  };

  const nodes = [
    {
      id: 1,
      title: 'Data Ingestion',
      subtitle: 'GPS & Telemetry Stream',
      tag: 'Input',
      metrics: '12,400 Events/sec',
      status: 'Active',
    },
    {
      id: 2,
      title: 'Decision Engine',
      subtitle: 'Rules & Constraint Matrix',
      tag: 'System Core',
      metrics: 'Auto-Triaged 99.2%',
      status: 'Processing',
    },
    {
      id: 3,
      title: 'Operational View',
      subtitle: 'Dispatcher Command UI',
      tag: 'Interface',
      metrics: '200ms Render Time',
      status: 'Live',
    },
  ];

  return (
    <div className="relative w-full rounded-2xl bg-[#12141A]/90 border border-white/10 p-5 sm:p-6 shadow-2xl backdrop-blur-xl overflow-hidden group">
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      
      {/* Top Controls Bar */}
      <div className="relative flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse" />
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-gray-300">
            System Topology Visualizer
          </span>
        </div>

        {/* Interactive Scenario Toggles */}
        <div className="flex items-center gap-1.5 bg-[#0B0D0E] p-1 rounded-lg border border-white/10 text-xs">
          {(['normal', 'anomaly', 'ai-audit'] as const).map((sc) => (
            <button
              key={sc}
              onClick={() => setActiveScenario(sc)}
              className={`px-2.5 py-1 rounded-md transition-all font-mono text-[11px] ${
                activeScenario === sc
                  ? 'bg-indigo-600 text-white font-semibold shadow-sm'
                  : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'
              }`}
            >
              {sc === 'normal' ? 'Normal' : sc === 'anomaly' ? 'Anomaly' : 'AI Audit'}
            </button>
          ))}
        </div>
      </div>

      {/* Scenario Status Bar */}
      <div className="relative my-4 flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-[#0B0D0E]/80 border border-white/5 text-xs">
        <div className="flex items-center gap-2">
          <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono uppercase font-bold ${scenarioDetails[activeScenario].bg} ${scenarioDetails[activeScenario].color} ${scenarioDetails[activeScenario].border} border`}>
            {scenarioDetails[activeScenario].status}
          </span>
          <span className="text-gray-300 font-medium hidden sm:inline">
            {scenarioDetails[activeScenario].label}
          </span>
        </div>
        <span className="font-mono text-gray-400 text-[11px]">
          {scenarioDetails[activeScenario].metric}
        </span>
      </div>

      {/* Workflow Nodes Grid */}
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-3 my-4">
        {nodes.map((node) => {
          const isSelected = selectedNode === node.id;
          return (
            <div
              key={node.id}
              onClick={() => setSelectedNode(node.id)}
              className={`cursor-pointer rounded-xl p-4 transition-all duration-200 border ${
                isSelected
                  ? 'bg-indigo-950/30 border-indigo-500/50 shadow-lg shadow-indigo-500/10 scale-[1.02]'
                  : 'bg-[#181B22]/80 border-white/10 hover:border-white/20 hover:bg-[#1E222A]'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono uppercase text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded">
                  {node.tag}
                </span>
                <span className="text-[10px] font-mono text-gray-400">Node 0{node.id}</span>
              </div>
              <h4 className="text-sm font-semibold text-white mb-0.5">{node.title}</h4>
              <p className="text-xs text-gray-400 mb-3">{node.subtitle}</p>
              
              <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-gray-300">
                <span>{node.metrics}</span>
                <span className="flex items-center gap-1 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  {node.status}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Node Details Panel */}
      <div className="relative mt-4 p-3.5 rounded-xl bg-[#0B0D0E]/90 border border-white/10 text-xs text-gray-300 font-mono flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-indigo-400" />
          <span>Active Architecture Lens: <strong className="text-white">Complex System Simplification</strong></span>
        </div>
        <div className="flex items-center gap-3 text-gray-400">
          <span>UX Judgment: <strong className="text-indigo-300">High</strong></span>
          <span>Cognitive Load: <strong className="text-emerald-400">-40%</strong></span>
        </div>
      </div>
    </div>
  );
};
