import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="contact"
export default class extends Controller {
  static targets = ["info"]
  connect() {
  }

  popup() {
    this.infoTarget.classList.toggle("d-none")
  }
}
