import React, { useState } from 'react';
import { Check, Copy, Terminal } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  filename?: string;
  language?: string;
  showLineNumbers?: boolean;
  highlightDiff?: boolean;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  filename = 'terminal',
  language = 'bash',
  showLineNumbers = false,
  highlightDiff = false,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  const lines = code.trim().split('\n');

  return (
    <div className="rounded-xl border border-[#1F2937] bg-[#0E131B] overflow-hidden text-xs font-mono shadow-xl">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#141A23] border-b border-[#1F2937]">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E]/80 inline-block" />
          </div>
          <span className="text-[#9CA3AF] text-[11px] font-medium ml-1.5 flex items-center gap-1">
            {filename.endsWith('.md') || filename.endsWith('.json') || filename.endsWith('.ts') ? (
              <span>{filename}</span>
            ) : (
              <>
                <Terminal className="w-3 h-3 text-[#22C55E]" />
                <span>{filename}</span>
              </>
            )}
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 text-[11px] text-[#9CA3AF] hover:text-white px-2 py-1 rounded bg-[#1C2430] hover:bg-[#253040] transition-colors"
          title="Copy code"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3 text-[#22C55E]" />
              <span className="text-[#22C55E]">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Content */}
      <div className="p-3.5 overflow-x-auto text-[#E5E7EB] leading-relaxed">
        <pre className="m-0">
          <code>
            {lines.map((line, idx) => {
              const isAdded = highlightDiff && (line.startsWith('+') || line.startsWith('⚡') || line.startsWith('🎯'));
              const isRemoved = highlightDiff && line.startsWith('-');
              const isComment = line.trim().startsWith('#') || line.trim().startsWith('//');

              let lineClass = 'text-[#D1D5DB]';
              if (isAdded) lineClass = 'text-[#4ADE80] bg-[#22C55E]/10 -mx-3.5 px-3.5 block';
              else if (isRemoved) lineClass = 'text-[#F87171] bg-[#EF4444]/10 -mx-3.5 px-3.5 block';
              else if (isComment) lineClass = 'text-[#6B7280] italic';

              return (
                <div key={idx} className={`table-row ${lineClass}`}>
                  {showLineNumbers && (
                    <span className="table-cell pr-3 text-right text-[#4B5563] select-none font-mono tabular-nums text-[10px]">
                      {idx + 1}
                    </span>
                  )}
                  <span className="table-cell">{line}</span>
                </div>
              );
            })}
          </code>
        </pre>
      </div>
    </div>
  );
};
