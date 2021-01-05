// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

export const greetingViewType = 'greeting';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// vscode.window.registerWebviewPanelSerializer(greetingViewType, new GreetingPageSerializer());

	let disposable = vscode.commands.registerCommand('greeting-extension.open-webview', () => {
		openWebView();
	});

	context.subscriptions.push(disposable);

	openWebView();
}

function openWebView() {
    // Open Greeting tab
	const panel = vscode.window.createWebviewPanel(greetingViewType, "Greeting",
		{
			viewColumn: vscode.ViewColumn.One,
			preserveFocus: false
		},
		{
	});

	const url = "https://nodejs.org/en/knowledge/HTTP/servers/how-to-create-a-HTTP-server/";
	const style = "position: absolute; width: calc(100% - 30px); height: calc(100% - 10px);";
	panel.webview.html = `<iframe src='${url}' style='${style}'></iframe>`;
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
