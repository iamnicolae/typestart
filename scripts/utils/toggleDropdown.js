import { hasGameStarted } from "./hasGameStarted.js";
import { dropdown, dropdownList, dropdownCurrent, dropdownArrow } from "./querySelectors.js";

export function toggleDropdown() {
  dropdownCurrent.addEventListener('click', () => {
    if (dropdownList.style.display === "none" && !hasGameStarted.get) {
      dropdownList.style.display = "flex";
      dropdownArrow.style.transform = "rotate(180deg)";
    } else {
      dropdownList.style.display = "none";
      dropdownArrow.style.transform = "rotate(360deg)";
    }
  });

  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
      dropdownList.style.display = 'none';
      dropdownArrow.style.transform = "rotate(360deg)";
    }
  });
}