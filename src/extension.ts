import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('open-hosts.open-file', () => {
		let path = 'C:\\Windows\\System32\\drivers\\etc\\hosts';
		vscode.workspace.openTextDocument(path).then(document => {
			vscode.window.showTextDocument(document);
		}, error => {
			return vscode.window.showErrorMessage("Open Hosts: " + error.message);
		});
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {
	vscode.window.showInformationMessage('Open Hosts: extension is deactivated now');
}
