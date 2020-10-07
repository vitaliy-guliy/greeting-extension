// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

export const greetingViewType = 'greeting';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	console.log('### greeting-extension::activate');

	vscode.window.registerWebviewPanelSerializer(greetingViewType, new GreetingPageSerializer());

	let disposable = vscode.commands.registerCommand('greeting-extension.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World!');
	});

	context.subscriptions.push(disposable);

    // Open Greeting tab
	const panel = vscode.window.createWebviewPanel(greetingViewType, "Greeting",
		{
			viewColumn: vscode.ViewColumn.One,
			preserveFocus: false
		},
		{
	});
	
	panel.webview.html = "Hello";
}

// this method is called when your extension is deactivated
export function deactivate() {}

export class GreetingPageSerializer implements vscode.WebviewPanelSerializer {

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
	deserializeWebviewPanel(webviewPanel: vscode.WebviewPanel, state: any): Thenable<void> {
		webviewPanel.webview.html = "Restored"
		return Promise.resolve();
	}

}
