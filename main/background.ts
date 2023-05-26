import { app } from 'electron';
import serve from 'electron-serve';
import { createWindow } from './helpers';

const isProd: boolean = process.env.NODE_ENV === 'production';

const protocol = 'app'; // nextron hardcoded this
https://github.com/saltyshiomix/nextron/blob/16c5b30bd8931056dc2380f230354ad759abcfa8/lib/nextron-build.ts#L73-L75

if (isProd) {
  serve({ directory: `${protocol}` });
} else {
  app.setPath('userData', `${app.getPath('userData')} (development)`);
}

(async () => {
  await app.whenReady();

  const mainWindow = createWindow('main', {
    width: 1000,
    height: 600,
  });

  const initialRoute = 'home'; // without the initial slash
  if (isProd) {
    await mainWindow.loadURL(`${protocol}://./${initialRoute}.html`);
  } else {
    const port = process.argv[2];
    await mainWindow.loadURL(`http://localhost:${port}/${initialRoute}/`);
    mainWindow.webContents.openDevTools();
  }
})();

app.on('window-all-closed', () => {
  app.quit();
});
