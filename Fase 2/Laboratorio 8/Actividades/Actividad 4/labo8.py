import reflex as rx
import httpx  # Ensure httpx is installed for making HTTP requests
from typing import List, Dict, Any

class State(rx.State):
    posts: List[Dict[str, Any]] = []  # Store the fetched posts
    error: str = ""  # To store any error message

    async def fetch_posts(self):
        try:
            async with httpx.AsyncClient() as client:
                response = await client.get("https://jsonplaceholder.typicode.com/posts")
                response.raise_for_status()  # Raise an error for bad responses
                self.posts = response.json()  # Parse JSON response
        except Exception as e:
            self.error = str(e)  # Capture any error

    async def on_load(self):
        # Await the fetch_posts function when the state loads
        await self.fetch_posts()

def post_card(post: Dict[str, Any]):
    """Create a card for each post."""
    return rx.card(
        rx.heading(post["title"], size="md"),
        rx.text(post["body"]),
        width="100%",
        margin="10px"
    )

def index():
    return rx.vstack(
        rx.heading("Posts from JSONPlaceholder", size="lg"),
        rx.cond(
            State.error,  # Check if there is an error
            rx.text(f"Error: {State.error}", color="red"),
            rx.foreach(
                State.posts,  # Use State directly
                post_card  # Create a card for each post
            )
        ),
        width="100%",
        justify="center",
        margin="20px"
    )

app = rx.App()
app.add_page(index, on_load=State.on_load)  # Add the index page
