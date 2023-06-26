import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="home"
export default class extends Controller {
  static targets = ["discover"]
  connect() {
    console.log("hello");
    setTimeout(() => {
      this.discover();
    }, 5000);
  }

  discover() {
    // This function will be executed after the delay
    this.discoverTarget.classList.toggle("d-none")

  }
}
