# ARCHIVO : ejercicio_1.py
# AUTOR : Ricardo Gabriel Manrique Silva
# FECHA : 13/10/24
# DESCRIPCIÓN : Archivo Python para tablero Kanban con filtro de tareas pendientes.
import reflex as rx

# Clase para manejar el estado
class State(rx.State):
    mostrar_solo_pendientes: bool = False  # Variable de estado inicializada en False

    def toggle_pendientes(self):
        """Función que alterna el estado de mostrar_solo_pendientes"""
        self.mostrar_solo_pendientes = not self.mostrar_solo_pendientes

# Función para renderizar una tarjeta de tarea
def tarjeta_tarea(tarea):
    return rx.box(
        rx.text(tarea["titulo"]),
        rx.text(f"Estado: {tarea['estado']}"),
        padding="10px",
        border="1px solid #ccc",
        margin="5px"
    )

# Función para renderizar una columna del tablero Kanban
def columna_kanban(tareas):
    # Aplicar el filtro antes de renderizar las tarjetas de tarea
    tareas_filtradas = rx.cond(
        State.mostrar_solo_pendientes,
        [t for t in tareas if t["estado"] == "Pendiente"],  # Filtrar solo pendientes
        tareas  # Mostrar todas las tareas
    )

    # Usar rx.foreach para iterar sobre las tareas filtradas
    return rx.box(
        rx.foreach(
            tareas_filtradas,
            lambda tarea: tarjeta_tarea(tarea)
        ),
        border="2px solid #000",
        padding="20px",
        margin="10px",
        width="300px"
    )

# Tareas 
tareas = [
    {"titulo": "Tarea 1", "estado": "Pendiente"},
    {"titulo": "Tarea 2", "estado": "En Progreso"},
    {"titulo": "Tarea 3", "estado": "Completada"},
    {"titulo": "Tarea 4", "estado": "Completada"},
    {"titulo": "Tarea 5", "estado": "Pendiente"},
]

# Función principal que renderiza el tablero Kanban
def index():
    return rx.box(
        rx.button("Mostrar Solo Pendientes", on_click=State.toggle_pendientes),  # Botón que alterna el filtro
        columna_kanban(tareas),  # Pasamos el grupo de tareas al tablero
        padding="20px"
    )

# Aplicación principal
app = rx.App()
app.add_page(index)