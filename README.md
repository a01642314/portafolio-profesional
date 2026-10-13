[README.md](https://github.com/user-attachments/files/33406802/README.md)
# 🎮 PapiroPlay

Mini-home estilo Steam con 4 juegos clásicos, todos jugables en HTML + CSS + JS puro, sin dependencias ni librerías externas.

## Juegos

| Juego | Página | Controles |
|-------|--------|-----------|
| 🏓 Pong | `games/pong.html` | `W/S` o flechas · `P` pausa |
| 🐍 Snake | `games/snake.html` | Flechas o `WASD` · `P` pausa |
| ⭕ Gato | `games/gato.html` | Clic en el tablero · vs CPU o 2 jugadores |
| 🧱 Tetris | `games/tetris.html` | `←→` mover · `↑`/`X` rotar · `↓` bajar · `Shift` caída |

## Cómo ejecutarlo

Solo abre `index.html` con doble clic en tu navegador (todo es offline), o sirve la carpeta:

```sh
python3 -m http.server 8000
# abre http://localhost:8000
```

## Diseño

- Fondo azul claro con textura de **papel papiro** (gradientes + ruido SVG+css).
- Tarjetas color pergamino con bordes marrones, tipografía serif.
- Home con buscador en vivo, filtros por categoría y "juego al azar".
- Récords de Snake y Tetris guardados en `localStorage`.
