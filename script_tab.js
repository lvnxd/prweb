const tabsBtns = document.querySelectorAll(".tabs__nav button");

const tabsItems = document.querySelectorAll(".tabs__item");


//Функция скрывает табы и убирает active у кнопок
function hideTabs(){
    tabsItems.forEach(item => item.classList.add("hide"));
    tabsBtns.forEach(item => item.classList.remove("active"));

}

//Функция показывает переданный номер таба и делает соотвутсвующую ему кнопку активной
function showTab(index){
    tabsItems[index].classList.remove("hide");
    tabsBtns[index].classList.add("active");
}

hideTabs();
showTab(0);

tabsBtns.forEach((btn, index) => btn.addEventListener("click", () => {
    hideTabs();
    showTab(index);
}));
