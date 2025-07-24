 ## Smart Goal Planner
A personal finance tool that helps users create, track, and manage multiple savings goals with full CRUD support, visual progress, and deadline alerts. Data is stored locally using json‐server.

 ## Features
Create new savings goals (name, target amount, category, deadline).

Read and display all goals from db.json.

Update goals: edit details or add deposits to increase saved amount.

Delete goals.

Progress tracking with dynamic progress bars.

Overview dashboard shows:

Total goals and savings

Completed goals count

Days remaining, warnings (≤ 30 days), overdue alerts

 ## Installation
Clone this repo and navigate to the Smart folder:

bash
Copy
Edit
git clone <repo-url>
cd Smart
Install dependencies:

bash
Copy
Edit
npm install
Start JSON server (mock backend):

bash
Copy
Edit
npm run server
This will serve your db.json at http://localhost:3000/goals.

In a new terminal, start the React app (Vite):

bash
Copy
Edit
npm run dev
The UI will be available at http://localhost:5173/.

 ## File Structure
css
Copy
Edit
Smart/
├─ db.json            ← Sample data (10 goals)
├─ src/
│   ├─ App.jsx        ← Main app and fetch logic
│   ├─ Component/
│   │   ├─ Overview.jsx
│   │   ├─ NewGoalForm.jsx
│   │   ├─ DepositForm.jsx
│   │   ├─ GoalList.jsx
│   │   └─ GoalItem.jsx
│   └─ ProgressBar.jsx
└─ vite.config.js     ← Proxy setup and JSX config
 ## Usage
Add a Goal: via the "Add New Goal" form.

Deposit: select a goal and deposit an amount to increase saved progress.

Edit/Delete: manage existing goals inline using the edit/delete buttons.

Overview: view summary metrics and see upcoming deadlines or overdue warnings.

 ## Technical Details
Uses Fetch API for all CRUD operations (avoid Axios dependency).

Vite configured with a proxy for CORS-free requests to JSON server.

Simple date calculations done with JavaScript—no external date library.

 ## To Run
bash
Copy
Edit
cd Smart
npm install
npm run server   # starts json-server
npm run dev      # starts Vite + React app
Open http://localhost:5173 in your browser and start planning your savings goals!

 ## License
MIT License — feel free to use and modify for your personal projects.
 ##  Mary Itumo
