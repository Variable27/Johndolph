const schoolNames = document.querySelectorAll(".school-name");

schoolNames.forEach(schoolName => {
    schoolName.addEventListener("click", () => {
        const targetId = schoolName.dataset.target;
        const moreInfo = document.getElementById(targetId);

        moreInfo.style.display = moreInfo.style.display === "none" ? "block" : "none";
    });
});