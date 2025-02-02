---
title: "Othello Game"
excerpt: "Developed a othello game with multi-agent decision systems.<br/><img src='/images/othellogame.png'>"
collection: portfolio
---

Engineered a Python-based Othello (Reversi) game with multi-agent decision systems, featuring configurable AI opponents leveraging the Minimax algorithm and heuristic-driven strategies. Implemented three distinct heuristic evaluation functions (Disc Difference, Positional Advantage, Mobility) to guide AI decision-making, with adjustable search depth for dynamic difficulty scaling. Designed a modular architecture separating core game logic (othello.py), AI logic (ai_player.py), and benchmarking (benchmark.py), adhering to SOLID principles for maintainability. Enhanced AI performance using state caching to reduce redundant computations during Minimax tree traversal. Developed a terminal-based GUI with real-time board rendering and input validation for seamless human-AI interaction. Introduced a benchmarking framework to statistically evaluate AI performance against randomized opponents, analyzing win rates and move efficiency across heuristic-depth combinations. Employed unit testing (test.py) to validate move legality, board state transitions, and scoring accuracy. This project demonstrates proficiency in algorithm optimization, adversarial search techniques with a focus on extensible AI systems—showcasing strong foundations in game theory and software engineering for AI-driven game development.

![Othello Game Tree](/images/othellogame_tree.jpg)