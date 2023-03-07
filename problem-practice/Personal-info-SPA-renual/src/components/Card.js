class Card {
  constructor($main, data) {
    this.$main = $main;
    this.data = data;
    this.render();
  }

  infiniteScroll($target, status) {
    const io = new IntersectionObserver(
      (entry) => {
        if (entry[0].isIntersecting) {
          io.unobserve($target.lastChild);
          this.createCard($target, status);
          io.observe($target.lastChild);
        }
      },
      {
        threshold: 0.7,
      }
    );
    io.observe($target.lastChild);
  }

  createCardPlane(side, text) {
    const plane = document.createElement("div");
    plane.className = `card_plane card_plane--${side}`;

    plane.appendChild(document.createTextNode(text));
    return plane;
  }

  createCard($container, status) {
    const info = JSON.parse(this.data);
    info.forEach((person, index) => {
      const card = document.createElement("div");
      card.setAttribute("idx", index);
      card.className = status[index].status;

      const planeFront = this.createCardPlane("front", person.nickname);
      const planeBack = this.createCardPlane("back", person.mbti);

      card.addEventListener("click", () => {
        if (card.classList.toggle("is-flipped")) {
          status[index].status = "card is-flipped";
        } else {
          status[index].status = "card";
        }
        window.localStorage.setItem("cardStatus", JSON.stringify(status));
      });

      card.appendChild(planeFront);
      card.appendChild(planeBack);
      $container.appendChild(card);
    });
  }

  render() {
    const $container = document.createElement("div");
    $container.id = "cards_container";

    /* card status */
    const status = JSON.parse(window.localStorage.getItem("cardStatus"));

    /* create container in card childs*/
    this.createCard($container, status);

    this.$main.appendChild($container);

    /* Infinite Scroll 구현 */
    this.infiniteScroll($container, status);
  }
}
export default Card;
