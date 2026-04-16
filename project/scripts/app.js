// Navigation toggle
const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    menuButton.classList.toggle('active');
});

// Data handling
let goals = JSON.parse(localStorage.getItem('growNow_Goals')) || [];

document.addEventListener('DOMContentLoaded', () => {
    const goalForm = document.getElementById('goal-form');
    if (goalForm) {
        goalForm.addEventListener('submit', createGoal);
    }
    renderGoals();
});

// Function: Create (Object & Array)
function createGoal(e) {
    e.preventDefault();
    
    const name = document.getElementById('goalName').value;
    const category = document.getElementById('goalCategory').value;

    if (name.trim() === "") return;

    const newGoal = {
        id: Date.now(),
        title: name,
        cat: category,
        createdAt: new Date().toLocaleDateString()
    };

    goals.push(newGoal);
    saveData();
    e.target.reset();
}

// Function: Render (DOM Manipulation & Template Literals)
function renderGoals() {
    const displayArea = document.getElementById('goal-display');
    if (!displayArea) return;

    displayArea.innerHTML = '';

    if (goals.length === 0) {
        displayArea.innerHTML = '<p style="text-align:center;">No goals set yet. Start today!</p>';
        return;
    }

    goals.forEach(goal => {
        const goalEl = document.createElement('div');
        goalEl.className = 'feature-card';
        goalEl.style.padding = '20px';
        goalEl.style.marginBottom = '15px';

        // Template Literal
        goalEl.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center;">
                <div style="text-align:left;">
                    <h3>${goal.title}</h3>
                    <p style="margin:0;">Category: ${goal.cat} | Added: ${goal.createdAt}</p>
                </div>
                <button onclick="removeGoal(${goal.id})" class="btn-primary" style="background: #c0392b; padding: 8px 15px;">Delete</button>
            </div>
        `;
        displayArea.appendChild(goalEl);
    });
}

// Function: Delete (Conditional Branching)
function removeGoal(id) {
    if (confirm("Have you completed this goal or would you like to remove it?")) {
        goals = goals.filter(g => g.id !== id);
        saveData();
    }
}

function saveData() {
    localStorage.setItem('growNow_Goals', JSON.stringify(goals));
    renderGoals();
}