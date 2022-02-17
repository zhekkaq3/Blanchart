document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.dropdowns__btn').forEach(function (dropdownBtn) {
        dropdownBtn.addEventListener('click', function (event) {

            if (event.currentTarget.className.contains == 'dropdownBtn-is-active') {
                document.querySelectorAll('.dropdowns__btn').forEach(function (btn) {
                    btn.classList.remove('dropdownBtn-is-active')
                });
            } else {
                const path = event.currentTarget.dataset.path

                document.querySelectorAll('.dropdowns__btn').forEach(function (btn) {
                    btn.classList.add('dropdownBtn-is-active')
                });

                document.querySelectorAll('.dropdown__content-list').forEach(function (dropdown) {
                    dropdown.classList.remove('dropdown__is-active')
                });

                document.querySelector(`[data-target="${path}"]`).classList.add('dropdown__is-active')
            }
        });
    });
});