var a = document.getElementById("submit");
a.addEventListener("click", () => {
    title = document.getElementById("text").value;
    des = document.getElementById("desc").value;

    if (localStorage.getItem('itemJson') == null) {
        console.log("Updating Log......")
        itemJsonArray = [];
        itemJsonArray.push([title, des]);
        localStorage.setItem('itemJson', JSON.stringify(itemJsonArray));
    } else {
        console.log("Updating Log......")
        itemJsonArrayStr = localStorage.getItem('itemJson');
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        itemJsonArray.push([title, des]);
        localStorage.setItem('itemJson', JSON.stringify(itemJsonArray));
    }
});