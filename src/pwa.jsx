export function registerPWA(setInstallPrompt) {
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault(); // Prevent default prompt
    setInstallPrompt(e); // Store prompt for later use
    console.log('PWA install prompt ready');
  });

  window.addEventListener('appinstalled', () => {
    console.log('PWA was installed');
    setInstallPrompt(null); // Clear prompt after installation
  });
}