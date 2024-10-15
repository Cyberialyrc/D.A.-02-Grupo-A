import reflex as rx

class EstadoFormulario(rx.State):
    def __init__(self):
        super().__init__()
        self.nombre = ""
        self.email = ""
        self.mensaje = ""

    def enviar_formulario(self):
        if "@" not in self.email:
            rx.notify("Error: Dirección de correo electrónico no válida")
        else:
            rx.notify("Formulario enviado correctamente")
