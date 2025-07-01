import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  // Web extension - simplified activation without Language Server
  console.log('My Language Extension is now active in web!');

  // Register a simple command for web
  const disposable = vscode.commands.registerCommand('mylang.hello', () => {
    vscode.window.showInformationMessage('Hello from My Language Extension (Web)!');
  });

  context.subscriptions.push(disposable);

  // Add basic language features for web
  const provider = vscode.languages.registerCompletionItemProvider(
    'mylang',
    {
      provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
        // Simple completion for web
        const simpleCompletion = new vscode.CompletionItem('hello');
        simpleCompletion.insertText = new vscode.SnippetString('hello ${1:world}');
        simpleCompletion.documentation = new vscode.MarkdownString('Simple completion for web');

        return [simpleCompletion];
      }
    },
    ' ' // trigger completion on space
  );

  context.subscriptions.push(provider);
}

export function deactivate() {
  // Web extension cleanup
}