---
title: "Tile Blast Game"
excerpt: "Developed a tile blasting game using Unity.<br/><img src='/images/Tile_Blast_1.png'>"
collection: portfolio
---

# **Tile Blast Puzzle Game: UI & Progression Systems**  
**Unity | C# | UI/UX Design | Data Persistence**  

Developed a dynamic **Tile Blast** puzzle game featuring intuitive UI, engaging gameplay mechanics, and robust progression tracking. This project emphasizes polished user experience, smooth interactions, and strategic puzzle-solving elements.

---

## **Core UI Systems**  

### **1. Main Menu**  
- **Design & Navigation**:  
  - Created a visually engaging menu with animated buttons (*Start*, *Quit*).  
  - Added **SFX** for button interactions (hover, click) to enhance user feedback.  

  ![Tile Blast Game Screenshot](/images/Tile_Blast_MainMenu.png)

### **2. Level Selection**    
- **Star Display & Progression**:  
  - Implemented a dynamic grid displaying earned stars (0–3) per level.  
- **Responsive UI**:  
  - Used **Unity’s Grid Layout Group** for adaptive level grids across various screen sizes.  

  ![Tile Blast Game Screenshot](/images/Tile_Blast_LevelSelection.png) 

### **3. Pause Menu**  
- **In-Game Functionality**:  
  - Activated via `ESC` key or UI button, pausing gameplay with `Time.timeScale = 0`.  
  - Options to *Resume*, *Level Select*, or *Quit*.  
- **UX Enhancements**:  
  - Semi-transparent overlay for clarity.  
  - Scaling effect highlights the currently selected button for improved accessibility.  

---

## **Core Gameplay Features**
- **Grid-Based Board**: Generates a structured board of colored blocks.  
- **Block Types & Special Items**:  
  - **Standard Blocks**: Colored blocks that form clusters.  
  - **Bombs**: Explode in a 3×3 radius.  
  - **Missiles**: Clear an entire row or column.  
  - **Black Holes**: Remove all blocks on the board.  

![Tile Blast Game Screenshot](/images/Tile_Blast_SpecialBlocks.png)

- **Cluster Matching & Destruction**:  
  - Detects and removes connected blocks using efficient algorithms.  
  - Animates destruction effects to enhance engagement.  
- **Gravity & Refill System**:  
  - Blocks fall to fill gaps, and new blocks spawn to keep gameplay dynamic.  
- **Special Block Spawning**:  
  - Large cluster eliminations generate **Bombs, Missiles, or Black Holes** based on predefined rules.  
- **Deadlock Prevention**:  
  - Automatically reshuffles the board when no valid moves remain.  

  ![Tile Blast Game Screenshot](/images/Tile_Blast_1.png)

---

## **Technologies Used**
- **Unity Engine** – Core development framework.  
- **C# Scripting** – Implements game logic and mechanics.  
- **Object-Oriented Design** – Modular structure for scalability.  
- **Coroutines** – Smooth animations and sequential game actions.  
- **Event-Driven UI** – Responsive interactions for menus and buttons.  

---

## **Gameplay Flow**
1. Players click on a block to form a match.  
2. Valid clusters are destroyed, awarding points.  
3. Blocks above destroyed ones fall down, filling empty spaces.  
4. Special blocks activate their effects when triggered.  
5. The game continuously checks for deadlocks and reshuffles when needed.  

![Tile Blast Game Screenshot](/images/Tile_Blast_2.png)

---

## **Future Enhancements**
🔹 **Power-ups & Combo Mechanics** – Introduce advanced strategies for engaging gameplay.  
🔹 **Multiplayer Mode** – Real-time competitive mode for increased replayability.  
🔹 **Level Progression System** – Unlockable levels with increasing difficulty.  
🔹 **Performance Optimization** – Implement object pooling and efficient memory management.  

---

## **Conclusion**
This project showcases **advanced match-three mechanics**, **smooth UI interactions**, and **strategic gameplay elements**. With well-structured progression systems, polished UX design, and scalable architecture, the **Tile Blast** puzzle game demonstrates expertise in **Unity game development**.  





