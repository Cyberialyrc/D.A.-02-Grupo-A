import reflex as rx
import re  # Para validar el correo electrónico

# Definir el estado de la aplicación para el formulario de contacto
class EstadoFormulario(rx.State):
    nombre: str = ""
    email: str = ""
    mensaje: str = ""
    error: str = ""  # Para almacenar mensajes de error
    exito: str = ""  # Para almacenar mensajes de éxito

    # Validar el formato del correo electrónico
    def es_email_valido(self, email: str) -> bool:
        patron = r'^[\w\.-]+@[\w\.-]+\.\w+$'
        return re.match(patron, email) is not None

    # Método para manejar el envío del formulario
    def enviar_formulario(self):
        if not self.nombre:
            self.error = "El nombre es obligatorio."
            self.exito = ""  # Limpiar mensaje de éxito si hay error
            return
        if not self.es_email_valido(self.email):
            self.error = "El correo electrónico no es válido."
            self.exito = ""  # Limpiar mensaje de éxito si hay error
            return
        if not self.mensaje:
            self.error = "El mensaje es obligatorio."
            self.exito = ""  # Limpiar mensaje de éxito si hay error
            return

        # Si todo es válido, mostramos un mensaje de éxito
        self.exito = "Formulario enviado correctamente"
        self.error = ""  # Limpiamos los mensajes de error

    # Métodos para actualizar los campos
    def actualizar_nombre(self, valor):
        self.nombre = valor

    def actualizar_email(self, valor):
        self.email = valor

    def actualizar_mensaje(self, valor):
        self.mensaje = valor


# Definir la función que renderiza el formulario de contacto
def formulario_contacto():
    return rx.fragment(
        rx.heading("Formulario de Contacto"),
        rx.form(
            rx.input(
                placeholder="Nombre",
                on_change=lambda valor: EstadoFormulario.actualizar_nombre(valor)
            ),
            rx.input(
                placeholder="Correo electrónico",
                on_change=lambda valor: EstadoFormulario.actualizar_email(valor)
            ),
            rx.text_area(
                placeholder="Mensaje",
                on_change=lambda valor: EstadoFormulario.actualizar_mensaje(valor)
            ),
            rx.button("Enviar", on_click=EstadoFormulario.enviar_formulario),
        ),
        # Mostrar el mensaje de error si existe
        rx.cond(
            EstadoFormulario.error,
            rx.text(EstadoFormulario.error, style={"color": "red"}),
        ),
        # Mostrar el mensaje de éxito si existe
        rx.cond(
            EstadoFormulario.exito,
            rx.text(EstadoFormulario.exito, style={"color": "green"}),
        )
    )

# Crear la aplicación Reflex
app = rx.App()

# Añadir la página principal con el formulario
app.add_page(formulario_contacto, route="/")

# Ejecutar la aplicación
if __name__ == "__main__":
    app.serve()


