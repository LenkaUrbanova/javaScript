// °C = 5/9 * (°F-32)

const Fahrenheit = prompt("zadej stupně Fahrenheit")
const Celsia = ((Fahrenheit-32) * 5/9)

document.body.innerHTML = "Po převodu se jedná o "+(Celsia)+" stupňů Celsia."

