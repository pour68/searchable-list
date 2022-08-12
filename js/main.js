const input = document.getElementById("searchInput");

const search = () => {
  let filter, ul, tr, td, i, txtValue;
  filter = input.value.toUpperCase();
  ul = document.getElementById("list");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    if (li) {
      txtValue = li[i].textContent || li[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) li[i].style.display = "";
      else li[i].style.display = "none";
    }
  }
};

input.addEventListener("keyup", () => search());
