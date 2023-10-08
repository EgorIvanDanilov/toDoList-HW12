const wishForm = document.getElementById("wishForm");
const wishlist = document.getElementById("wishlist");
const buttonDel = document.getElementById("buttonDel");

const wishes = [];

const clearInputs = function (event) {
  event.target.wish.value = "";
  event.target.amount.value = "";
};

const delLast = function () {
  wishes.pop(); // delete last item
  renderWishlist();
};

const markAsCompleted = function (index) {
  wishes[index].completed = true;
  renderWishlist();
};

const renderWishlist = function () {
  wishlist.innerHTML = ""; // clear

  wishes.forEach((wish, index) => {
    const textItem = document.createElement("p");
    textItem.textContent = `I need to do ${wish.wish}, ${wish.amount} `;

    if (wish.completed) {
      textItem.classList.add("completed");
    }

    textItem.addEventListener("click", () => markAsCompleted(index));

    wishlist.appendChild(textItem);
    wishlist.classList.add("wish");
  });
};

wishForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const wish = {
    wish: event.target.wish.value,
    amount: event.target.amount.value,
    completed: false, // add completed
  };
  wishes.push(wish);

  clearInputs(event);

  renderWishlist();
});

buttonDel.addEventListener("click", delLast);
