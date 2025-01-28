import React, { useCallback, useState, useEffect } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { andromedaInit } from '@uiw/codemirror-theme-andromeda';
import { Clipboard, Check } from 'lucide-react';
import { javascript } from '@codemirror/lang-javascript';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { useTheme } from '@/components/context/ThemeContext';

interface SyntaxHighlighterProps {
  code: string;
  language?: string;
  lineNumbers?: boolean;
  title?: string;
}

export const SyntaxHighlighter: React.FC<SyntaxHighlighterProps> = ({
  code,
  language = 'jsx',
  lineNumbers = false,
  ...rest
}) => {
  const { theme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [isCopied, setIsCopied] = useState(false);

  const languageMap = {
    typescript: [javascript({ typescript: true })],
    ts: [javascript({ typescript: true })],
    jsx: [javascript({ jsx: true })],
    tsx: [javascript({ jsx: true })],
    html: [html()],
    css: [css()],
    javascript: [javascript()],
  };

  const getLanguageExtension = () => {
    return languageMap[language as keyof typeof languageMap] || [javascript()];
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, [code]);

  const handleCopy = useCallback(async () => {
    if (!code) return;

    try {
      await navigator.clipboard.writeText(code.trim());
      setIsCopied(true);

      const timer = setTimeout(() => {
        setIsCopied(false);
      }, 2000);

      return () => clearTimeout(timer);
    } catch (err) {
      console.error('Failed to copy code:', err);
      setIsCopied(false);
    }
  }, [code]);

  const themeStyles = {
    light: {
      background: 'bg-white/30',
      text: 'text-gray-800',
      border: 'border-white/20',
      buttonHover: 'hover:bg-white/20',
      loadingBackground: 'bg-white/10',
      icon: 'text-gray-600',
      shadow: 'shadow-xl shadow-gray-200/20',
      glassShadow: 'before:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]',
    },
    dark: {
      background: 'bg-gray-950/30',
      text: 'text-gray-200',
      border: 'border-gray-800/30',
      buttonHover: 'hover:bg-gray-700/30',
      loadingBackground: 'bg-gray-900/30',
      icon: 'text-gray-300',
      shadow: 'shadow-md shadow-black/20',
      glassShadow: 'before:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]',
    },
  };

  const currentTheme = theme === 'light' ? themeStyles.light : themeStyles.dark;

  return (
    <div
      className={`group relative border rounded-md overflow-hidden backdrop-blur-xl backdrop-saturate-150 
      ${currentTheme.background} ${currentTheme.border} ${currentTheme.shadow} mb-6 
      before:absolute before:inset-0 before:rounded-md ${currentTheme.glassShadow}`}
    >
      <div className="relative">
        <div className="absolute right-4 top-4 z-10">
          <button
            onClick={handleCopy}
            className={`opacity-0 group-hover:opacity-100 p-2 rounded-md transition-all duration-200 
            ${currentTheme.buttonHover} ${currentTheme.background} 
            active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500/40`}
            title={isCopied ? 'Copied!' : 'Copy code'}
            aria-label={isCopied ? 'Copied!' : 'Copy code'}
          >
            {isCopied ? (
              <Check className={`${currentTheme.icon} transition-all duration-200 size-4`} />
            ) : (
              <Clipboard className={`${currentTheme.icon} transition-all duration-200 size-4`} />
            )}
          </button>
        </div>

        <div className="relative">
          {isLoading ? (
            <div
              className={`flex justify-center items-center h-24 ${currentTheme.loadingBackground} 
              ${currentTheme.text}`}
            >
              <div className="animate-pulse flex items-center space-x-2">
                <div className="w-2 h-2 bg-current rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-current rounded-full animate-bounce delay-100" />
                <div className="w-2 h-2 bg-current rounded-full animate-bounce delay-200" />
              </div>
            </div>
          ) : (
            <CodeMirror
              value={code}
              height="auto"
              editable={false}
              theme={andromedaInit({
                settings: {
                  background: 'transparent',
                  fontFamily:
                    'Fira Code VF, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace',
                  selection: theme === 'light' ? 'rgba(66, 153, 225, 0.2)' : 'rgba(66, 153, 225, 0.3)',
                  caret: currentTheme.text,
                  gutterBackground: 'transparent',
                  gutterForeground: theme === 'light' ? '#64748b' : '#94a3b8',
                  lineHighlight: theme === 'light' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.2)',
                },
              })}
              extensions={getLanguageExtension()}
              basicSetup={{
                lineNumbers,
                foldGutter: false,
                highlightActiveLineGutter: false,
                highlightActiveLine: false,
                tabSize: 2,
              }}
              className="text-xs font-medium leading-6 p-2"
              {...rest}
            />
          )}
        </div>
      </div>
    </div>
  );
};
