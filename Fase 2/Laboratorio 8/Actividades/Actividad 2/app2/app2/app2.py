import reflex as rx
from rxconfig import config

class EstadoGlobal(rx.State):
    """Estado global para almacenar la lista de tareas."""
    tareas = []

class ListaTareas(rx.Component):
    """Componente que muestra una lista de tareas."""

    def __init__(self):
        super().__init__()
        self.estado = rx.state(EstadoGlobal)

    def render(self):
        return rx.box(
            rx.heading("Lista de Tareas"),
            rx.vstack(
                [
                    rx.text(tarea) for tarea in self.estado.tareas
                ],
                spacing="5px",
                justify="left",
            ),
            width="400px",
            height="300px",
            border="1px solid gray",
            overflow_y="scroll",
        )
class AgregarTarea(rx.Component):
    """Componente que permite agregar nuevas tareas a la lista."""
    def __init__(self):
        super().__init__()
        self.estado = rx.state(EstadoGlobal)
    def agregar_tarea(self, texto: str):
        """Agrega una nueva tarea a la lista."""
        if texto.strip():  # Verifica que la tarea no esté vacía
            self.estado.tareas.append(texto)
            self.estado.update()  # Actualiza el estado global
    def render(self):
        return rx.box(
            rx.input(placeholder="Escribe una tarea...", id="input_tarea"),
            rx.button("Agregar", on_click=lambda: self.agregar_tarea(rx.get("input_tarea").value))
        )
def index() -> rx.Component:
    """Página principal que contiene ambos componentes."""
    return rx.container(
        rx.color_mode.button(position="top-right"),
        rx.vstack(
            rx.heading("Welcome to Reflex!", size="9"),
            rx.text(
                "Get started by editing ",
                rx.code(f"{config.app_name}/{config.app_name}.py"),
                size="5",
            ),
            rx.link(
                rx.button("Check out our docs!"),
                href="https://reflex.dev/docs/getting-started/introduction/",
                is_external=True,  # Aquí se corrige el argumento
            ),
            ListaTareas(),  # Mostrar la lista de tareas
            AgregarTarea(),  # Agregar nuevas tareas
            spacing="5",
            justify="center",
            min_height="85vh",
        ),
    )
# Configuración de la aplicación
app = rx.App()
app.add_page(index)
app.compile()


