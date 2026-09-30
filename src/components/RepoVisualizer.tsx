import React, { useState } from 'react';
import { Star, GitFork, Eye, GitBranch, Sparkles, Check, AlertCircle, FileCode, Shield, Terminal, ArrowUpRight } from 'lucide-react';
import { CodeBlock } from './CodeBlock';

export const RepoVisualizer: React.FC = () => {
  const [mode, setMode] = useState<'after' | 'before'>('after');
  const [activeTab, setActiveTab] = useState<'readme' | 'social-card' | 'architecture' | 'diff'>('readme');
  const [hasStarred, setHasStarred] = useState(false);
  const [starCount, setStarCount] = useState(5240);

  const toggleStar = () => {
    if (hasStarred) {
      setStarCount((prev) => prev - 1);
      setHasStarred(false);
    } else {
      setStarCount((prev) => prev + 1);
      setHasStarred(true);
    }
  };

  return (
    <div className="rounded-2xl border border-[#1F2937] bg-[#111827] overflow-hidden shadow-2xl">
      {/* Top GitHub Repo Header */}
      <div className="p-4 sm:p-5 bg-[#0D1117] border-b border-[#21262D] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#161B22] border border-[#30363D] flex items-center justify-center text-white font-mono text-xs font-semibold">
            TO
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm font-normal text-[#58A6FF] hover:underline cursor-pointer">
                tensor-ops
              </span>
              <span className="text-[#8B949E]">/</span>
              <span className="text-sm font-semibold text-[#58A6FF] hover:underline cursor-pointer">
                vectorflow
              </span>
              <span className="text-[11px] font-mono border border-[#30363D] text-[#8B949E] px-2 py-0.5 rounded-full">
                Public
              </span>
            </div>
            <p className="text-xs text-[#8B949E] mt-1 font-sans">
              {mode === 'after'
                ? '⚡ Zero-dependency vector index delivering 180k QPS on local inference engines'
                : 'vector indexing utility tool'}
            </p>
          </div>
        </div>

        {/* Action Controls & Interactive Star */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* Mode Switcher Toggle: Before vs After */}
          <div className="flex items-center p-1 bg-[#161B22] border border-[#30363D] rounded-lg mr-2">
            <button
              onClick={() => setMode('before')}
              className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                mode === 'before'
                  ? 'bg-[#30363D] text-white shadow-sm'
                  : 'text-[#8B949E] hover:text-white'
              }`}
            >
              Before Audit
            </button>
            <button
              onClick={() => setMode('after')}
              className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors flex items-center gap-1 ${
                mode === 'after'
                  ? 'bg-[#22C55E]/20 text-[#4ADE80] border border-[#22C55E]/40 font-semibold'
                  : 'text-[#8B949E] hover:text-white'
              }`}
            >
              <Sparkles className="w-3 h-3 text-[#22C55E]" />
              <span>After Growth Hub</span>
            </button>
          </div>

          <div className="flex items-center rounded-md border border-[#30363D] bg-[#21262D] text-xs text-[#C9D1D9]">
            <button
              onClick={toggleStar}
              className={`flex items-center gap-1.5 px-3 py-1.5 hover:bg-[#30363D] transition-colors rounded-l-md font-medium ${
                hasStarred ? 'text-[#F59E0B] bg-[#30363D]' : ''
              }`}
            >
              <Star className={`w-3.5 h-3.5 ${hasStarred ? 'fill-[#F59E0B]' : ''}`} />
              <span>{hasStarred ? 'Starred' : 'Star'}</span>
            </button>
            <span className="px-2.5 py-1.5 border-l border-[#30363D] font-mono tabular-nums text-xs">
              {mode === 'after' ? (starCount).toLocaleString() : '142'}
            </span>
          </div>

          <div className="hidden sm:flex items-center rounded-md border border-[#30363D] bg-[#21262D] text-xs text-[#C9D1D9] px-2.5 py-1.5">
            <GitFork className="w-3.5 h-3.5 mr-1 text-[#8B949E]" />
            <span className="font-mono tabular-nums">{mode === 'after' ? '318' : '12'}</span>
          </div>
        </div>
      </div>

      {/* Repository Context Bar: Branch, Pulse, Topics */}
      <div className="px-4 sm:px-5 py-3 bg-[#161B22] border-b border-[#21262D] flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-4 text-[#8B949E]">
          <div className="flex items-center gap-1 text-[#C9D1D9] font-mono">
            <GitBranch className="w-3.5 h-3.5 text-[#8B949E]" />
            <span>main</span>
          </div>
          <span className="hidden sm:inline">·</span>
          <span className="font-mono tabular-nums text-[#8B949E]">
            {mode === 'after' ? '412 commits' : '18 commits'}
          </span>
          <span className="hidden sm:inline">·</span>
          <div className="flex items-center gap-1 text-[#4ADE80]">
            <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
            <span>CI passing</span>
          </div>
        </div>

        {/* View Tabs */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => setActiveTab('readme')}
            className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
              activeTab === 'readme'
                ? 'bg-[#21262D] text-white'
                : 'text-[#8B949E] hover:text-[#C9D1D9]'
            }`}
          >
            README.md
          </button>
          <button
            onClick={() => setActiveTab('social-card')}
            className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
              activeTab === 'social-card'
                ? 'bg-[#21262D] text-white'
                : 'text-[#8B949E] hover:text-[#C9D1D9]'
            }`}
          >
            Social Card
          </button>
          <button
            onClick={() => setActiveTab('diff')}
            className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
              activeTab === 'diff'
                ? 'bg-[#21262D] text-white'
                : 'text-[#8B949E] hover:text-[#C9D1D9]'
            }`}
          >
            Audit Diff
          </button>
        </div>
      </div>

      {/* Main Tab Content */}
      <div className="p-5 sm:p-6 bg-[#0D1117] min-h-[380px]">
        {activeTab === 'readme' && (
          <div>
            {mode === 'after' ? (
              <div className="space-y-6 max-w-3xl">
                {/* Header & Badges */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#4ADE80]">
                      v2.4.0 Stable
                    </span>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#161B22] border border-[#30363D] text-[#8B949E]">
                      crates.io: 180k dl
                    </span>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#161B22] border border-[#30363D] text-[#8B949E]">
                      Apache-2.0
                    </span>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#161B22] border border-[#30363D] text-[#58A6FF]">
                      Discord: 1,420 devs
                    </span>
                  </div>

                  <h1 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
                    <span>VectorFlow</span>
                    <span className="text-xs font-normal text-[#8B949E]">
                      / 180,000 QPS on local M-series & AVX-512
                    </span>
                  </h1>

                  <p className="text-sm text-[#8B949E] leading-relaxed">
                    Zero-dependency embedded vector index optimized for local RAG pipelines, semantic code search, and agentic memory buffers. Written in pure Rust with zero C++ FFI.
                  </p>
                </div>

                {/* 10-Second Quickstart */}
                <div className="space-y-2">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#8B949E]">
                    Instant Quickstart (Benchmark 1M Embeddings in 4s)
                  </div>
                  <CodeBlock
                    code={`# 1. Install CLI static binary
curl -sSL https://get.vectorflow.dev | sh

# 2. Run high-throughput embedding index benchmark
vectorflow bench --dataset openai-1536 --vectors 1000000

# Benchmark output:
# [✓] Indexed 1,000,000 vectors in 4.18s (239,234 vectors/sec)
# [✓] P99 Search Latency: 0.84ms | Memory: 112MB`}
                    filename="terminal"
                    language="bash"
                  />
                </div>

                {/* Capability Matrix */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-lg bg-[#161B22] border border-[#30363D] flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-semibold text-white">SIMD-Accelerated HNSW</div>
                      <div className="text-[11px] text-[#8B949E]">AVX-512 & Apple NEON vector intrinsics</div>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-[#161B22] border border-[#30363D] flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-semibold text-white">Multi-Language Bindings</div>
                      <div className="text-[11px] text-[#8B949E]">Native Python, TypeScript, and Go SDKs</div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4 max-w-xl text-[#8B949E]">
                <div className="p-3 rounded-lg bg-[#EF4444]/10 border border-[#EF4444]/30 text-xs text-[#F87171] flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>Prior to audit: Stagnant at 142 stars for 9 months with 78% bounce rate.</span>
                </div>
                <h1 className="text-lg font-bold text-[#C9D1D9]">vectorflow</h1>
                <p className="text-xs">
                  This repository contains vector indexing code written in Rust.
                </p>
                <div className="text-xs font-mono bg-[#161B22] p-3 rounded border border-[#30363D]">
                  git clone https://github.com/tensor-ops/vectorflow<br />
                  cd vectorflow<br />
                  cargo build --release<br />
                  # check /examples for more info
                </div>
                <p className="text-xs text-[#6B7280]">
                  No badges · Missing problem statement · No benchmark data · No social preview card · 0 topics tagged
                </p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'social-card' && (
          <div className="flex flex-col items-center justify-center py-4">
            <div className="w-full max-w-xl aspect-[16/9] rounded-xl bg-gradient-to-br from-[#0B0F14] via-[#111827] to-[#161B22] border border-[#30363D] p-6 flex flex-col justify-between shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#22C55E]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#22C55E]/20 border border-[#22C55E]/40 flex items-center justify-center text-[#22C55E]">
                    <GitBranch className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-mono font-semibold text-white">tensor-ops / vectorflow</span>
                </div>
                <span className="text-[11px] font-mono text-[#4ADE80] bg-[#22C55E]/10 px-2 py-0.5 rounded border border-[#22C55E]/30">
                  Open Source · Rust
                </span>
              </div>

              <div className="space-y-2 relative z-10 my-auto">
                <h2 className="text-2xl font-bold text-white tracking-tight leading-snug">
                  Zero-Dependency Vector Index for Local LLMs
                </h2>
                <p className="text-xs text-[#9CA3AF] max-w-md">
                  180,000 QPS on Apple Silicon and Linux x86. Single static binary with Python and Node.js bindings.
                </p>
              </div>

              <div className="flex items-center justify-between text-xs text-[#8B949E] border-t border-[#1F2937] pt-3 relative z-10">
                <div className="flex items-center gap-3">
                  <span>github.com/tensor-ops/vectorflow</span>
                </div>
                <div className="flex items-center gap-1 text-[#22C55E] font-medium">
                  <span>Explore on GitHub</span>
                  <ArrowUpRight className="w-3 h-3" />
                </div>
              </div>
            </div>
            <p className="text-xs text-[#8B949E] mt-3">
              Standard 1280×640 custom OpenGraph visual configured in repo settings. Generates 3.4x more clicks on social platforms.
            </p>
          </div>
        )}

        {activeTab === 'diff' && (
          <div className="space-y-3">
            <div className="text-xs text-[#8B949E] flex items-center justify-between">
              <span>Git Diff: README.md overhaul</span>
              <span className="font-mono text-[11px] text-[#4ADE80]">+64 additions, -21 deletions</span>
            </div>
            <CodeBlock
              code={`--- a/README.md
+++ b/README.md
@@ -1,7 +1,24 @@
-# vectorflow
-An engine for vector embeddings.
-Build instructions:
-git clone https://github.com/tensor-ops/vectorflow
-cargo build --release
-Usage: refer to /examples folder.
+## VectorFlow
+⚡ **Zero-dependency vector search engine delivering 180k QPS on Apple Silicon.**
+
+[![Build Status](https://img.shields.io/github/actions/workflow/status/ci.yml)](...)
+[![crates.io](https://img.shields.io/crates/v/vectorflow.svg)](...)
+
+### 10-Second Quickstart
+\`\`\`bash
+cargo install vectorflow-cli && vectorflow benchmark --size 1m
+\`\`\`
+
+- **Sub-millisecond P99 latency** via SIMD AVX-512 & NEON intrinsics
+- **Single static binary**, 0 external runtime dependencies
+- **Native bindings**: Python, TypeScript, Go, C#`}
              filename="git diff README.md"
              language="diff"
              highlightDiff={true}
            />
          </div>
        )}
      </div>

      {/* Proof Bar Below Repo */}
      <div className="px-5 py-3.5 bg-[#111827] border-t border-[#1F2937] flex flex-wrap items-center justify-between gap-4 text-xs text-[#9CA3AF]">
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-[#22C55E]" />
          <span>Real Result: VectorFlow reached <strong>#1 GitHub Trending</strong> overall within 48 hours.</span>
        </div>
        <div className="flex items-center gap-4 font-mono text-[11px]">
          <span>Previous: 142 stars</span>
          <span>→</span>
          <span className="text-[#4ADE80] font-semibold">Today: 5,240+ stars</span>
        </div>
      </div>
    </div>
  );
};
