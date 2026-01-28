# Procedural Tree Growth Animation (Blender) by Hassaan Qamar

## Overview

This project is a procedural animation created in Blender using Python.
It generates a natural scene where seeds grow into trees over time, rain falls,
and lighting gradually increases to simulate sunrise.

All geometry, materials, animation keyframes, and effects are created
programmatically using the Blender `bpy` API.

---

## Features

- Fully procedural scene generation
- Animated tree growth (seed → trunk → leaves)
- Staggered growth timing for realism
- Rain simulation with randomised motion
- Dynamic sun lighting
- Hidden Easter egg within the scene

---

## Technologies Used

- Blender
- Python
- Blender `bpy` API

---

## Scene Description

### Ground
A large green plane forms the base of the environment.

### Trees
Nine trees are placed at predefined positions. Each tree grows in stages:
1. Seed appears and scales up
2. Trunk grows vertically
3. Leaf canopy expands into place

Each tree begins its growth slightly later than the previous one.

### Rain
Rain drops are created as stretched spheres that fall from random heights.
Each drop is animated independently and disappears after hitting the ground.

### Lighting and Camera
A sun light source increases in brightness over time.
The camera is positioned to provide a wide, cinematic view of the scene.

### Easter Egg
A hidden red “67” is embedded using simple mesh primitives.

---

## How to Run the Script

1. Open Blender
2. Go to the **Scripting** workspace
3. Paste the Python script into a new text block
4. Click **Run Script**
5. Press Play on the timeline to view the animation

---

## Notes

- This project is intended for learning and demonstration purposes
- No external assets are used
- All animation is generated procedurally

---

## Possible Extensions

- Add wind animation to trees
- Replace rain with snow or particles
- Add terrain variation
- Convert to a physics-based particle system

---

## Licence

This project is open-source and intended for educational use.
You are free to modify and distribute it with attribution.
