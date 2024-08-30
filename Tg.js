var WebApp = window.Telegram.WebApp;
WebApp.expand();

function haptic() {
    WebApp.HapticFeedback.impactOccurred('light')
}