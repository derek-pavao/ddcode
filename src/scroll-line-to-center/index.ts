import * as vscode from "vscode";

export let scrollLineToCenter = function () {
    const editor = vscode.window.activeTextEditor;
    const selection = editor.selection;
    const range = new vscode.Range(selection.start, selection.end);
    editor.revealRange(range, vscode.TextEditorRevealType.InCenter);



};