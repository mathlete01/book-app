document.addEventListener("DOMContentLoaded", function () {
  // Declare Variables we will use later in the code
  // const url = "http://localhost:3000/books"
  const url = "http://www.nokeynoshade.party/api/queens/all";

  // Name pre-existing DOM Elements we will need to reference
  const listPanel = document.getElementById("list-panel");
  const showPanel = document.getElementById("show-panel");

  // Create, name, and attach DOM Elements we will need to reference
  const list = document.createElement("ul");
  listPanel.append(list);

  // Functions

  function showQueen(queen) {
    showPanel.innerHTML = "";
    // Create DOM elements
    let image = document.createElement("img");
    let quote = document.createElement("p");
    let chooseBtn = document.createElement("button");
    // Assign content to those elements
    image.src = queen.image_url;
    quote.innerText = queen.quote;
    chooseBtn.innerText = "Choose";
    // Append newly created and filled DOM elements to the show panel
    showPanel.append(queen.name);
    showPanel.append(chooseBtn);
    showPanel.append(quote);
    showPanel.append(image);
  }

  function createList(queens) {
    // Create Unordered List
    const list = document.createElement("ul");
    // Iterate through the array
    for (let i = 0; i < queens.length; i++) {
      // Create temporary variable I can reference for each element in the array
      let queen = queens[i];
      // Create a list item
      let li = document.createElement("li");
      li.addEventListener("click", () => showQueen(queen));
      // Change the list item's text to the element's name
      li.innerText = queen.name;
      // Attach that newly created list item to the list
      list.appendChild(li);
    }
    // Attach the list to the list panel
    listPanel.appendChild(list);
  }

  // Get the content from the API
  function fetchContent(url) {
    // Go to the URL
    fetch(url)
      // Fetch returns a response object called a Promise. The data in the Promise is not directly accessible. We need to call a method on that Promise to convert the data into JSON.
      .then((response) => response.json())
      // The .then statement, in turn, returns another Promise. This is called Promise chaining. We take that json object we just created and pass it to a function called createList
      .then((jsonObj) => createList(jsonObj));
  }

  fetchContent(url);
});
