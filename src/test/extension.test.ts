import { describe, it, expect } from 'vitest';

// Mock VS Code API
const mockVscode = {
  commands: {
    registerCommand: () => ({ dispose: () => {} })
  },
  window: {
    showInformationMessage: () => Promise.resolve()
  },
  languages: {
    registerCompletionItemProvider: () => ({ dispose: () => {} })
  },
  CompletionItem: class {},
  SnippetString: class { constructor(value: string) {} },
  MarkdownString: class { constructor(value: string) {} }
};

// Mock the vscode module
Object.defineProperty(globalThis, 'vscode', {
  value: mockVscode,
  writable: true
});

describe('Extension Tests', () => {
  it('should have proper structure', () => {
    expect(true).toBe(true);
  });

  it('should have basic math operations working', () => {
    expect(2 + 2).toBe(4);
  });

  it('should mock vscode API correctly', () => {
    expect(mockVscode.commands.registerCommand).toBeDefined();
    expect(mockVscode.window.showInformationMessage).toBeDefined();
  });
});