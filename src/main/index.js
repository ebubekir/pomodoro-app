const {app, BrowserWindow} = require('electron');
const url = require('url');
const path = require('path');

let mainWindow;
app.on('ready' , () => {
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration:true
        },
        width:1050,
        height:560
    });
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname,"../renderer/index.html"),
        protocol:"file:",
        slashes:true
    }));
    mainWindow.setResizable(false);
});