# My Language Extension

A VS Code extension providing Language Server Protocol support for MyLang, built with dual desktop/web compatibility.

## Features

- Language Server Protocol support for desktop environments
- Web-compatible extension for vscode.dev
- Syntax highlighting with TextMate grammar
- Code completion and diagnostics
- Comprehensive testing suite (unit, integration, web)

## Development

### Prerequisites

- Node.js 18.x or 20.x
- npm

### Setup

```bash
npm install
```

### Building

```bash
# Desktop bundle
npm run bundle:desktop

# Web bundle  
npm run bundle:web

# Both bundles
npm run vscode:prepublish
```

### Testing

```bash
# Run all tests
npm test

# Unit tests only
npm run test:unit

# Desktop integration tests
npm run test:desktop

# Web tests
npm run test:web
```

### Development Workflow

1. Make changes to source files in `src/`
2. Run tests: `npm test`
3. Build bundles: `npm run bundle:desktop && npm run bundle:web`
4. Test extension: Press F5 in VS Code to launch Extension Development Host

## Architecture

This extension follows VS Code best practices:

- **Dual bundling**: Separate bundles for desktop (Node.js) and web (browser) environments
- **Language Server**: Full LSP implementation for desktop, simplified features for web
- **Testing matrix**: Unit tests (Vitest), integration tests (VS Code Test), web tests
- **CI/CD**: GitHub Actions with automated publishing on semantic commits

## Publishing

The extension auto-publishes to the VS Code Marketplace when commits contain `feat:` or `fix:` prefixes and are pushed to main branch.

Manual publishing:
```bash
npm run package
npx vsce publish
```