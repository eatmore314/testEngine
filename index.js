const search = ()=> {
    const searchbar = document.getElementById("searchbox").value.toUpperCase();
    const storeditems = document.getElementById("product-list");
    const product = document.querySelectorAll(".product");
    const pname = storeditems.getElementsByTagName("h2");

    for(var i = 0; i < pname.length; i++){
        let match = product[i].getElementsByTagName("h2")[0];
        if(match){
            let textvalue = match.textContent || match.innerHTML;
            if(textvalue.toUpperCase().indexOf(searchbar)> -1){
                product[i].style.display = ""
            } else {
                product[i].style.display = "none"
            }
        }
    }
}