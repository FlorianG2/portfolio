import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="about"
export default class extends Controller {
  static targets = ["professional"]
  connect() {
  }

  dropdown(event) {
    const card = event.currentTarget
    console.log(card)
    const next = card.nextElementSibling
    console.log(next);
    next.classList.toggle("d-none")
  }

  next() {
    this.professionalTarget.classList.toggle("d-none")
    this.professionalTarget.nextElementSibling.classList.toggle("d-none")
  }
}
