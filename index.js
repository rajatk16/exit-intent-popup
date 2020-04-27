let eventListener

const show = () => {
  const element = document.querySelector('#popup')
  element.style.visibility = "visible";
  element.style.opacity = "1";
  element.style.transform = "scale(1)";
  element.style.transition = "0.4s, opacity 0.4s"

  eventListener = document.addEventListener("click", function (clickEvent) {
    let el = clickEvent.target
    let inPopup = false
    if (el.id === 'popup') {
      inPopup = true
    }
    while (el = el.parentNode) {
      if (el.id == "popup") {
        inPopup = true
      }
    }
    if (!inPopup) hide()
  })
}

const hide = () => {
  const element = document.querySelector('#popup')
  element.style.visibility = "hidden"
  element.style.opacity = "0"
  element.style.transform = "scale(0.5)"
  element.style.transition = "0.2s, opacity 0.2s, visibility 0s 0.2s"

  if (eventListener) {
    document.removeEventListener(eventListener)
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("mouseout", (event) => {
    if (!event.toElement && !event.relatedTarget) {
      setTimeout(() => {
        show()
      }, 1000)
    }
  })

  document.onkeydown = event => {
    event = event || window.event
    if (event.keyCode === 27) {
      hide()
    }
  }
})