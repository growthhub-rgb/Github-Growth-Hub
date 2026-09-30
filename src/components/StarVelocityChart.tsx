import React, { useState } from 'react';
import { TrendingUp, Award, Zap, GitPullRequest } from 'lucide-react';

export const StarVelocityChart: React.FC = () => {
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  // 12 data points representing 90-day trajectory
  const data = [
    { day: 'Day 0', baseline: 142, optimized: 142, event: 'Kickoff Audit' },
    { day: 'Day 7', baseline: 145, optimized: 220, event: 'README & OG Card Push' },
    { day: 'Day 14', baseline: 148, optimized: 380, event: 'Topics SEO & CI Badges' },
    { day: 'Day 21', baseline: 152, optimized: 1450, event: 'Show HN #2 Frontpage' },
    { day: 'Day 28', baseline: 156, optimized: 2980, event: '#1 GitHub Trending' },
    { day: 'Day 42', baseline: 162, optimized: 3640, event: 'Rust Weekly Feature' },
    { day: 'Day 56', baseline: 168, optimized: 4120, event: '24 Community PRs' },
    { day: 'Day 70', baseline: 172, optimized: 4680, event: 'v2.0 Release' },
    { day: 'Day 90', baseline: 180, optimized: 5240, event: 'First Enterprise Pilot' },
  ];

  // SVG coordinate calculations (width 700, height 260, padding: x=40, y=30)
  const maxVal = 5600;
  const chartWidth = 640;
  const chartHeight = 200;
  const paddingX = 40;
  const paddingY = 20;

  const getX = (index: number) => paddingX + (index / (data.length - 1)) * (chartWidth - paddingX);
  const getY = (val: number) => chartHeight - (val / maxVal) * (chartHeight - paddingY);

  const optimizedPath = data
    .map((d, i) => `${i === 0 ? 'M' : 'L'} ${getX(i)} ${getY(d.optimized)}`)
    .join(' ');

  const baselinePath = data
    .map((d, i) => `${i === 0 ? 'M' : 'L'} ${getX(i)} ${getY(d.baseline)}`)
    .join(' ');

  const areaPath = `${optimizedPath} L ${getX(data.length - 1)} ${chartHeight} L ${getX(0)} ${chartHeight} Z`;

  return (
    <div className="rounded-2xl border border-[#1F2937] bg-[#111827] p-6 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#1F2937]">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#22C55E]">
              Star Velocity Trajectory
            </span>
            <span className="text-[11px] font-mono text-[#9CA3AF]">90-Day Analysis</span>
          </div>
          <h3 className="text-lg font-bold text-white mt-1">
            Organic Acceleration vs. Stagnant Baseline
          </h3>
        </div>

        <div className="flex items-center gap-5 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-3 h-0.5 bg-[#22C55E] rounded-full" />
            <span className="text-white font-medium">With Growth Hub</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-0.5 bg-[#4B5563] border-dashed rounded-full" />
            <span className="text-[#9CA3AF]">Typical Baseline</span>
          </div>
        </div>
      </div>

      {/* SVG Canvas */}
      <div className="relative w-full overflow-hidden">
        <svg
          viewBox={`0 0 ${chartWidth} ${chartHeight + 30}`}
          className="w-full h-auto overflow-visible"
        >
          <defs>
            <linearGradient id="growthGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#22C55E" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#22C55E" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          {[1000, 2500, 4000, 5000].map((level) => (
            <g key={level}>
              <line
                x1={paddingX}
                y1={getY(level)}
                x2={chartWidth}
                y2={getY(level)}
                stroke="#1F2937"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
              <text
                x={paddingX - 10}
                y={getY(level) + 4}
                textAnchor="end"
                className="text-[10px] font-mono fill-[#6B7280] tabular-nums"
              >
                {level}
              </text>
            </g>
          ))}

          {/* Area fill */}
          <path d={areaPath} fill="url(#growthGradient)" />

          {/* Baseline path */}
          <path
            d={baselinePath}
            fill="none"
            stroke="#4B5563"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />

          {/* Optimized path */}
          <path
            d={optimizedPath}
            fill="none"
            stroke="#22C55E"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Interactive points */}
          {data.map((point, index) => {
            const x = getX(index);
            const y = getY(point.optimized);
            const isHovered = hoveredPoint === index;
            const isKeyMilestone = index === 3 || index === 4 || index === 8;

            return (
              <g
                key={index}
                className="cursor-pointer"
                onMouseEnter={() => setHoveredPoint(index)}
                onMouseLeave={() => setHoveredPoint(null)}
              >
                <circle
                  cx={x}
                  cy={y}
                  r={isHovered ? 6 : isKeyMilestone ? 4.5 : 3}
                  className={`transition-all ${
                    isKeyMilestone
                      ? 'fill-[#22C55E] stroke-white stroke-2'
                      : 'fill-[#111827] stroke-[#22C55E] stroke-2'
                  }`}
                />

                {/* X-axis labels */}
                <text
                  x={x}
                  y={chartHeight + 20}
                  textAnchor="middle"
                  className="text-[10px] font-mono fill-[#6B7280]"
                >
                  {point.day}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Hover info popover */}
        {hoveredPoint !== null && (
          <div
            className="absolute top-2 left-1/2 -translate-x-1/2 bg-[#161B22] border border-[#22C55E]/40 rounded-lg p-2.5 shadow-xl text-xs flex items-center gap-3 z-20 pointer-events-none"
          >
            <div>
              <div className="font-semibold text-white">{data[hoveredPoint].event}</div>
              <div className="text-[11px] text-[#9CA3AF]">{data[hoveredPoint].day}</div>
            </div>
            <div className="pl-3 border-l border-[#30363D] font-mono tabular-nums text-right">
              <div className="text-[#4ADE80] font-bold">
                {data[hoveredPoint].optimized.toLocaleString()} stars
              </div>
              <div className="text-[10px] text-[#6B7280]">
                vs {data[hoveredPoint].baseline} stagnant
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Key Milestone Annotations */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4 pt-4 border-t border-[#1F2937]">
        <div className="p-3 rounded-lg bg-[#0D1117] border border-[#1F2937] flex items-start gap-2.5">
          <Zap className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" />
          <div>
            <div className="text-xs font-semibold text-white">Show HN Momentum</div>
            <p className="text-[11px] text-[#9CA3AF]">Front page #2 captured 1,200 stars in 18 hours</p>
          </div>
        </div>
        <div className="p-3 rounded-lg bg-[#0D1117] border border-[#1F2937] flex items-start gap-2.5">
          <Award className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
          <div>
            <div className="text-xs font-semibold text-white">#1 GitHub Trending</div>
            <p className="text-[11px] text-[#9CA3AF]">Algorithmic flywheel delivered 1,800+ downstream stars</p>
          </div>
        </div>
        <div className="p-3 rounded-lg bg-[#0D1117] border border-[#1F2937] flex items-start gap-2.5">
          <GitPullRequest className="w-4 h-4 text-[#60A5FA] shrink-0 mt-0.5" />
          <div>
            <div className="text-xs font-semibold text-white">Contributor Flywheel</div>
            <p className="text-[11px] text-[#9CA3AF]">48 community pull requests merged by day 90</p>
          </div>
        </div>
      </div>
    </div>
  );
};
