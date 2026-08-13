import React, { useCallback, useEffect, useMemo, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { andromedaInit } from '@uiw/codemirror-theme-andromeda';
import { githubLightInit } from '@uiw/codemirror-theme-github';
import { Check, Clipboard, Loader2 } from 'lucide-react';
import { javascript } from '@codemirror/lang-javascript';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { useTheme } from '@/components/context/ThemeContext';
import { indentUnit } from '@codemirror/language';
import { EditorState } from '@codemirror/state';
import { cn } from '@/lib/utils';
import { Button } from 'kalki-ui';

interface SyntaxHighlighterProps {
  code: string;
  language?: string;
  lineNumbers?: boolean;
  title?: string;
  showCopyButton?: boolean;
}

export const SyntaxHighlighter: React.FC<SyntaxHighlighterProps> = ({
  code,
  language = 'jsx',
  lineNumbers = false,
  showCopyButton = true,
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
    return [
      ...(languageMap[language as keyof typeof languageMap] || [javascript()]),
      indentUnit.of('  '),
      EditorState.tabSize.of(2),
    ];
  };

  const editorTheme = useMemo(() => {
    const shared = {
      background: 'transparent',
      fontSize: '13px',
      fontFamily: 'IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, monospace',
      gutterBackground: 'transparent',
      gutterForeground: theme === 'dark' ? '#94a3b8' : '#64748b',
      lineHighlight: 'transparent',
    };

    if (theme === 'dark') {
      return andromedaInit({
        settings: {
          ...shared,
          selection: 'rgba(66, 153, 225, 0.3)',
          caret: '#e2e8f0',
        },
      });
    }

    return githubLightInit({
      settings: {
        ...shared,
        selection: 'rgba(37, 99, 235, 0.2)',
        caret: '#0f172a',
      },
    });
  }, [theme]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, [code]);

  const handleCopy = useCallback(async () => {
    if (!code) return;

    try {
      await navigator.clipboard.writeText(code.trim());
      setIsCopied(true);
      const timer = setTimeout(() => setIsCopied(false), 2000);
      return () => clearTimeout(timer);
    } catch (err) {
      console.error('Failed to copy code:', err);
      setIsCopied(false);
    }
  }, [code]);

  return (
    <div
      className={cn('group relative overflow-hidden rounded-xl border border-border/80 bg-[hsl(var(--code-surface))]')}
    >
      <div className="relative">
        {showCopyButton && (
          <div className="absolute right-3 top-3 z-10">
            <Button
              onClick={handleCopy}
              variant="outline"
              size="xs"
              className="invisible group-hover:visible"
              title={isCopied ? 'Copied!' : 'Copy code'}
              aria-label={isCopied ? 'Copied!' : 'Copy code'}
            >
              {isCopied ? (
                <Check className="size-3 text-[var(--icon-color)]" />
              ) : (
                <Clipboard className="size-3 text-[var(--icon-color)]" />
              )}
            </Button>
          </div>
        )}

        <div className="relative">
          {isLoading ? (
            <div className="flex h-24 items-center justify-center text-muted-foreground">
              <Loader2 className="size-4 animate-spin" />
            </div>
          ) : (
            <CodeMirror
              value={code}
              height="auto"
              editable={false}
              theme={editorTheme}
              extensions={getLanguageExtension()}
              basicSetup={{
                lineNumbers,
                foldGutter: false,
                highlightActiveLineGutter: false,
                highlightActiveLine: false,
                tabSize: 2,
              }}
              className="p-2 font-mono text-sm font-medium leading-6"
              {...rest}
            />
          )}
        </div>
      </div>
    </div>
  );
};
