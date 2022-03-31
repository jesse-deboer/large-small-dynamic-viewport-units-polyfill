var setVw = function () {
    var svw = document.documentElement.clientWidth * 0.01;
    document.documentElement.style.setProperty('--1svw', (svw + "px"));
    var dvw = window.innerWidth * 0.01;
    document.documentElement.style.setProperty('--1dvw', (dvw + "px"));

    if (document.body) {
        var fixed = document.createElement("div");
        fixed.style.width = '1px';
        fixed.style.width = '100vw';
        fixed.style.position = 'fixed'
        fixed.style.left = '0';
        fixed.style.top = '0';
        fixed.style.bottom = '0';
        fixed.style.visibility = 'hidden';

        document.body.appendChild(fixed);

        var fixedWidth = fixed.clientWidth;

        fixed.remove();

        var lvw = fixedWidth * 0.01;

        document.documentElement.style.setProperty('--1lvw', (lvw + "px"));
    }
};

var initialize = function () {
    // SSR support
    if (typeof window === 'undefined') {
        return;
    }

    // We run the calculation as soon as possible (eg. the script is in document head)
    setVw();

    // We run the calculation again when DOM has loaded
    document.addEventListener('DOMContentLoaded', function () {
        setVw();
    })

    // We run the calculation when window is resized
    window.addEventListener('resize', function () {
        setVw();
    });
}

initialize();
