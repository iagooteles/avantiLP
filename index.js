document.addEventListener("DOMContentLoaded", function () {
    const dropdownItems = document.querySelectorAll(".dropdown-item");

    dropdownItems.forEach(item => {
        item.addEventListener("mouseenter", function () {
            document.querySelectorAll(".submenu").forEach(sub => {
                sub.classList.add("d-none");
            });

            const submenuId = item.getAttribute("data-submenu-id");
            const submenu = document.getElementById(`submenu-${submenuId}`);
            if (submenu) {
                submenu.classList.remove("d-none");
            }
        });

        item.addEventListener("mouseleave", function () {
            const submenuId = item.getAttribute("data-submenu-id");
            const submenu = document.getElementById(`submenu-${submenuId}`);
            if (submenu) {
                submenu.classList.add("d-none");
            }
        });
    });
});
