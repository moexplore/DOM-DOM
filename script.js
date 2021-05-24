document.addEventListener("DOMContentLoaded", function () {
  let divWhole = document.createElement("div");
  document.body.appendChild(divWhole);
  let btn = document.createElement("button");
  divWhole.appendChild(btn);
  let btnText = document.createTextNode("Add Square");
  btn.appendChild(btnText);
  let container = document.createElement('div')
  container.style.display = "flex";
  container.style.flexDirection = "row";
  container.style.flexWrap = "wrap";
  divWhole.style.display = "block";
  btn.style.display = "block";
  let one = 1;
  document.body.appendChild(container)
  btn.addEventListener("click", function divMake() {
      let div = document.createElement("div");
      div.style.backgroundColor = "black";
      div.style.height = "5em";
      div.style.width = "5em";
      div.className = "div";
      container.appendChild(div)
    
    div.id = one++;

    
    div.addEventListener("mouseenter", function displayID() {
      event.target.textContent = div.id;
      //div.innerText = div.id
      div.style.color = "orange";
      div.style.textAlign = "center";
    });
    div.addEventListener("mouseleave", function removeID() {
      div.textContent = null;
    });
    div.addEventListener("click", function backgroundColor() {
      let color = [
        "red",
        "yellow",
        "pink",
        "blue",
        "purple",
        "black",
        "aqua",
        "green",
      ];
      let randomColor = color[Math.floor(Math.random() * color.length)];
      div.style.backgroundColor = randomColor;
    });
    div.addEventListener("dblclick", function removeSquares() {
      const divID = parseInt(div.id);
      if (divID % 2 == 0) {
        if (div.nextSibling) {
          div.nextSibling.remove();
        } else {
          alert("no Square");
        }
      } else {
        if (this.previousSibling) {
          div.previousSibling.remove();
        } else {
          alert("no Square Available");
        }
      }
    });
  });
});
