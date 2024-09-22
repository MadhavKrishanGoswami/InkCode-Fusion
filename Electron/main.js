const { app, BrowserWindow, Menu } = require("electron");
const path = require("path");
const isMac = process.platform === "darwin";
const { clipboard } = require("electron");

function createWindow() {
  // Create the browser window.
  let win = new BrowserWindow({
    title: "InkCode",
    width: 800,
    height: 600,
    icon: "./InkCode-Icon.png",
  });

  // Make the window full screen.
  //   win.setFullScreen(true);
  // and load the index.html of the app.
  const startUrl = process.env.WEB_URL || "http://localhost:3000";
  win.loadURL(startUrl);
}

// create about window

app.on("ready", () => {
  createWindow();
  const mainMenu = Menu.buildFromTemplate(menu);
  Menu.setApplicationMenu(mainMenu);
});

const menu = [
  ...(isMac
    ? [
        {
          label: app.name,
          submenu: [
            {
              label: "Copy Repo Link",
              click: () => {
                //copy link to clipboard
                clipboard.writeText(
                  "https://github.com/MadhavKrishanGoswami/InkCode-Fusion"
                );
              },
            },
          ],
        },
      ]
    : []),
  {
    role: "fileMenu",
  },
  ...(!isMac
    ? [
        {
          label: "Help",
          submenu: [
            {
              label: "Copy Repo Link",
              click: () => {
                //copy link to clipboard
                clipboard.writeText(
                  "https://github.com/MadhavKrishanGoswami/InkCode-Fusion"
                );
              },
            },
          ],
        },
      ]
    : []),
];

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
