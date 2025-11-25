const inputs = document.querySelectorAll(".contact-input"); // Selecciona todos los inputs con la clase contact-input
const toggleBtn = document.querySelector(".theme-toggle"); // Selecciona el botón para cambiar el tema
const allElements = document.querySelectorAll("*"); // Selecciona todos los elementos del documento

toggleBtn.addEventListener("click", () => { // Añade un event listener al botón de cambio de tema
    document.body.classList.toggle("dark"); // Cambia la clase del body para alternar entre temas

    allElements.forEach((el) => { // Añade una transición a todos los elementos
        el.classList.add("transition"); // Añade la clase transition para activar la transición
        setTimeout(() => { // Después de 1 segundo, elimina la clase transition
            el.classList.remove("transition"); // Elimina la clase transition para finalizar la transición
        }, 1000); // 1000 milisegundos = 1 segundo
    })
});

inputs.forEach((ipt) => { // Recorre cada input seleccionado
    ipt.addEventListener("focus", () => { // Añade un event listener para el evento focus
        ipt.parentNode.classList.add("focus"); // Añade la clase focus al elemento padre del input
        ipt.parentNode.classList.add("not-empty"); // Añade la clase not-empty al elemento padre del input
    });

    ipt.addEventListener("blur", () => { // Añade un event listener para el evento blur
        if (ipt.value == "") { // Si el valor del input está vacío
            ipt.parentNode.classList.remove("not-empty"); // Elimina la clase not-empty del elemento padre del input
        }
        ipt.parentNode.classList.remove("focus"); // Elimina la clase focus del elemento padre del input
    });
});