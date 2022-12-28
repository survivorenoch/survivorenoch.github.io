let http = new XMLHttpRequest();
http.open("get", "data.json", "true");
http.send();
http.onload = function () {
  if (this.readyState == 4 && this.status == 200);
  {
    let movieDatas = JSON.parse(this.responseText);
    let output = "";
    for (let item of movieDatas) {
      output += `
        <div class="eachData">
            <p class="title">${item.MainTitle}</p>
            <p class="identifier">${item.Identifier}</p>
            <div class="details">
                <p class="AcquiredDate">典藏年代 ${item.AcquiredDate}</p>
                <p class="Size">尺寸 ${item.Size}</p>
                <p class="Owner">典藏單位 ${item.Owner}</p>
                <p class="Type">類別 ${item.Type}</p>
                <p class="OwnerWebsite">典藏單位網址 ${item.OwnerWebsite}</p>
            </div>
        </div>
      `;
    }
    document.querySelector(".appendArea").innerHTML = output;
  }
};
