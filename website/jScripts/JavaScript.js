var selectedShelf = null;
var selectedEle = null;

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
};


function show_hide(element, id) {
    var con = element.parentElement.querySelector("#" + id);
    if (selectedShelf == null) {
        selectedEle = element;
        con.style.display = "block";
        selectedShelf = con;
    }
    else {
        if (con != selectedShelf) {
            if (selectedShelf != null) {
                selectedEle.classList.toggle('open');
                selectedShelf.style.display = "";
            }
            con.style.display = "block";
            selectedShelf = con;
            selectedEle = element;
        } else {
            con.style.display = "";
            selectedShelf = null;
        }
    }


    element.classList.toggle('open');
}
