# 🛠️ LeetBoard - An interactive 3D interview environment for hardware engineers 👷
https://github.com/angelafeliciaa/LeetBoard/assets/25615887/cb2e3d78-9687-41dc-a715-75c9846956e0

## Inspiration
Our inspiration stems from the innovative capabilities showcased by Microsoft HoloLens, particularly in commercial staff training applications. We were inspired to leverage this technology and integrate it seamlessly into the interview processes tailored for engineers.

## What it does
LeetBoard is an interactive 3D interviewing experience for Hardware Engineers, focused on applying theoretical knowledge to practice.

## How we built it
Our project was a collaborative effort involving two frontend developers dedicated to shaping the landing page, while the remaining two 3D Engineers focused on refining the interview problems and integrating the drag-and-drop feature seamlessly.

For the landing page, we utilized a tech stack comprising ShadcnUI, React, Tailwind, and Typescript. We seamlessly integrated the 3D model, initially exported from Sketchfab in .fbx format, into React using the react-three-fiber (Three.js) library.

In the 3D Interview environment, we followed a meticulous process. Firstly, we imported the 3D model from Sketchfab, then proceeded to enhance its components via Spline, and ultimately exported it to react-three-fiber. This allowed us to break down the model into distinct components, which became crucial for creating an inventory of components and determining the problem difficulty levels.

The drag-and-drop functionality was achieved through the integration of various Three.js controls. We carefully implemented a margin of 3 units in the xyz direction, ensuring that components within this buffer area would automatically snap to the main engine.

To enhance the user experience, we integrated a playback feature using react-media-recorder. Additionally, we developed a comprehensive grading system comprising 5 components, each valued at 10 points. Users scoring 40 or more points would have their remaining time considered, adding an element of dynamism and engagement to the problem-solving experience.

## Challenges we ran into
Our journey involved a significant pivot from our original concept, leaving us with limited time to execute this new idea. Notably, implementing the drag-and-drop feature consumed a considerable amount of time. Additionally, integrating the timer and playback functionalities took longer than anticipated.

## Accomplishments that we're proud of
We successfully developed our Minimum Viable Product (MVP) with all features operational, notably overcoming the complexity of implementing the drag-and-drop feature. Despite time constraints, we immersed ourselves in 3D engineering, completing the project within 22 hours.

## What we learned
A lot of 3D stuff!

## What's next for LeetBoard
Some additional features: 
- Develop an automated editor mode to streamline content creation.
- Implement an algorithm capable of generating challenges and enabling drag-and-drop interaction with complex 3D models.
- Utilize AI to identify and separate individual components for inventory management.
- Enhance the editor with additional tools for greater functionality, such as incorporating a feature to simulate and test electrical circuits and adding a mechanism to manipulate objects using a lever arm for precise control.
