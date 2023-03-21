console.clear();

try {
    if (document.querySelector('input[type="checkbox"]') != null) {
        setTimeout(function () {
            document
                .querySelector('input[type="checkbox"]')
                .setAttribute('checked', true);
        }, 100);
    }
} catch (error) {
    console.error(error);
}
