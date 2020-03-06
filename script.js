const $ = document.createElement.bind(document);
let main = document.querySelector("main");

function generate(titles, dates, names) {
  titles.map((_, i) => {
    let base = $("div")
    base.className = "base"
    let h2 = $("h2")
    h2.innerHTML += 
    (titles[i].replace(/<|>|`|%|&|[|]|\\|\/|src|script|onload|onerror|javascript|/gi, "") || "TBA") +
    "<br>" + 
    (dates[i].replace(/<|>|`|%|&|[|]|\\|\/|src|script|onload|onerror|javascript|/gi, "") || "TBA")
    Array.from(h2.childNodes).map(a => {
      if (a.tagName !== "BR" && typeof a.tagName !== "undefined") {
        throw Error(a)
      }
    })
    let ol = $("ol")
    names[i].split("\n").map(a => a.replace(/ {1,}/g, " ")).sort().map((name, i) => {
      let li = $("p");
      li.innerText = (i + 1 + "").padStart(2)+". "+name;
      ol.appendChild(li)
    })
    base.appendChild(h2)
    base.appendChild(ol)
    main.appendChild(base)
  })
}

let titles = ["Ты как рубашку снял?", "Беды с башкой"]
let dates = ["04.03", ""]
let names = [
  `Example1
  Example2`,

`Example3
Example4`]
