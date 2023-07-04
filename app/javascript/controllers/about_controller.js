import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="about"
export default class extends Controller {
  connect() {
  }

  dropdown(event) {
    const card = event.currentTarget
    console.log(card)
    const next = card.nextElementSibling
    console.log(next);
    next.classList.toggle("d-none")
  }
}
