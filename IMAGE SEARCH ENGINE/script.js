const accesskey = "oWWuVFWL_ZTPK8MDrlfOzn8qhP3dsRvWJZ_P36LnHwg";
const searchForm = document.getElementById("form");
const searchBox = document.getElementById("inputBox");
const searchResult = document.getElementById("search-result");
const showmore = document.getElementById("showmore");

let keyWord = "";
let pageNo = 1;

async function searchImg(){
    keyWord = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${pageNo}&query=${keyWord}&client_id=${accesskey}&per_page=12`;

    //FETCHING URL 
    const response  = await fetch(url);
    const data = await response.json();
    // FETCH END
    
    if(pageNo === 1){
        searchResult.innerHTML = "";
    }
   if(searchBox.value === ""){
    alert("Enter any values")
   }
   //DISPLAY 
   else{
   const results = data.results;
   results.map((result) => {
       //creating Image element
      const images = document.createElement("img");
      images.src = result.urls.small;
    
      //creating Anchor element to link
      const imgLink = document.createElement("a");
      imgLink.href = result.links.html;
      imgLink.target = "_blank";

      imgLink.append(images);
      searchResult.appendChild(imgLink);
   })

   showmore.style.display = "block"
   }
}

searchForm.addEventListener("submit",(e) => {
    e.preventDefault();
    pageNo = 1;
    searchImg();
})

showmore.addEventListener("click", () => {
    pageNo++;
    searchImg();
})