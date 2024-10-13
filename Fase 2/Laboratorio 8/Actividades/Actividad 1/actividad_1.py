#ARCHIVO : actividad_1.py
#AUTOR : Ricardo Gabriel Manrique Silva
#FECHA : 13/10/24
#DESCRIPCIÓN : Archivo python para contador simple en reflex
import reflex as rx

# Clase para manejar el estado
class State(rx.State):
    count: int = 0

    def increment(self):
        self.count += 1

    def decrement(self):
        self.count -= 1

# Función que retorna el componente principal
def index():
    return rx.center(  # 'center' para asegurar que todo esté en el centro
        rx.hstack(  # Alinear los botones y el número horizontalmente
            rx.button(
                "Decrement",
                color_scheme="cyan",  # Esquema de color cyan para el botón de decremento
                on_click=State.decrement,
                padding="20px 40px",  # Hacer los botones más grandes
                font_size="1.5em",    # Aumentar el tamaño de la fuente
                border_radius="10px",  # Bordes redondeados más grandes
                _hover={"background": "#00a3a3"},  # Color al pasar el ratón (hover)
            ),
            rx.heading(State.count, font_size="3em", padding="0 40px", color="purple"),  # Número centrado entre los botones
            rx.button(
                "Increment",
                color_scheme="crimson",  # Esquema de color carmesí para el botón de incremento
                on_click=State.increment,
                padding="20px 40px",  # Hacer los botones más grandes
                font_size="1.5em",    # Aumentar el tamaño de la fuente
                border_radius="10px",  # Bordes redondeados más grandes
                _hover={"background": "#a30d2d"},  # Color al pasar el ratón (hover)
            ),
            spacing="40px",  # Espaciado entre los botones y el número
        ),
        height="100vh",  # Ocupa el 100% de la pantalla para centrar verticalmente
    )

# Aplicación principal
app = rx.App()
app.add_page(index)