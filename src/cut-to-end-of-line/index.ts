import * as vscode from "vscode";

export let cutToEndOfLine = function () {

    vscode.commands.executeCommand("cursorEndSelect").then(() => {

       vscode.commands.executeCommand("editor.action.clipboardCutAction");
    });

};