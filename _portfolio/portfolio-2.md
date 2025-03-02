---
title: "Othello Game"
excerpt: "Developed a othello game with multi-agent decision systems.<br/><img src='/images/othellogame.png'>"
collection: portfolio
---

## Portfolio: Othello Game Project

### Overview
The **Othello Game Project** is a Python-based implementation of the classic board game Othello (also known as Reversi). This project showcases an innovative approach by integrating an AI opponent that uses the minimax algorithm enhanced with three distinct heuristic strategies, providing a challenging and interactive gameplay experience.

### Key Features
- **Multiple Game Modes:** 
  - Human vs Human
  - Human vs AI
  - AI vs AI
- **Customizable AI:** 
  - Configure search depth and choose from three heuristics:
    - **h1 (Disc Difference):** Focuses on the difference in the number of discs.
    - **h2 (Positional Advantage):** Leverages a weighted board to prioritize strategic positions.
    - **h3 (Mobility):** Maximizes available moves while limiting the opponent's options.
- **Benchmarking Module:** 
  - Compare AI performance against a random player, analyzing average move times and strategy effectiveness.
- **Interactive Command-Line Interface (CLI):**
  - User-friendly terminal interactions for move input and game configuration.

### Technical Highlights
- **Algorithm:**  
  Utilizes the minimax algorithm with variable depth and three heuristic evaluation methods, ensuring a balance between computational efficiency and strategic depth.
- **Design and Structure:**  
  The project is structured into clear modules:
  - **Othello Module:** Manages the game board, validates moves, and tracks game state.
  - **AI Player Module:** Implements AI decision-making through minimax and heuristic evaluations.
  - **Benchmarking Module:** Provides insights into performance metrics and AI configurations.

![Othello Game Tree](/images/Othello_Benchmark.png)

- **Collaborative Effort:**  
  The project was developed by a team (Hasan Pekedis, Cem Eren Kula, and Hasan Ozeren), highlighting effective collaboration and problem-solving skills.

### Technologies Used
- **Programming Language:** Python
- **Core Algorithm:** Minimax with heuristic evaluation
- **User Interface:** Command-Line Interface (CLI)

### Impact and Learning
- **Strategic AI Development:**  
  Demonstrated the effective integration of classic game algorithms with modern heuristic strategies.
- **Performance Analysis:**  
  Provided insights into computational trade-offs between different AI strategies.
- **Team Collaboration:**  
  Successfully managed a multi-member project, emphasizing communication, planning, and technical execution.

![Othello Game Tree](/images/othellogame_tree.jpg)