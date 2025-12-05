// --- Data Section ---

const userProfile = {
    name: "User",
    age: 50,
    height: 175,
    weight: 74,
    bodyFat: 18.5,
    visceralFat: 11.5,
    goal: "Hypertrophy & Recomposition",
    caloriesTarget: 2850,
    macros: {
        protein: 140,
        carbs: 310,
        fat: 70
    }
};

const weeklyNutritionPlan = {
    1: { // Monday
        stats: { calories: 2900, protein: 140 },
        meals: [
            { id: "breakfast", name: "早餐", items: ["全蛋 2顆", "豆漿 350ml", "吐司 2片"] },
            { id: "lunch", name: "午餐", items: ["雞胸肉 150g", "糙米飯 1碗", "花椰菜"] },
            { id: "post_workout", name: "訓練後", items: ["香蕉 半根", "無糖豆漿 200ml"] },
            { id: "dinner", name: "晚餐", items: ["鮭魚 150g", "豆腐 100g", "炒蔬菜"] }
        ]
    },
    2: { // Tuesday
        stats: { calories: 2850, protein: 138 },
        meals: [
            { id: "breakfast", name: "早餐", items: ["蛋白蛋餅", "豆漿 300ml"] },
            { id: "lunch", name: "午餐", items: ["雞腿排 180g", "糙米飯", "青菜"] },
            { id: "post_workout", name: "訓練後", items: ["乳清蛋白 半份"] },
            { id: "dinner", name: "晚餐", items: ["鱸魚 150g", "地瓜 150g", "菠菜"] }
        ]
    },
    3: { // Wednesday
        stats: { calories: 2800, protein: 135 },
        meals: [
            { id: "breakfast", name: "早餐", items: ["燕麥", "豆漿", "水煮蛋 2顆"] },
            { id: "lunch", name: "午餐", items: ["豆腐+雞胸雙拼", "糙米飯"] },
            { id: "post_workout", name: "訓練後", items: ["優格 150g"] },
            { id: "dinner", name: "晚餐", items: ["豬里肌 150g", "蔬菜湯"] }
        ]
    },
    4: { // Thursday
        stats: { calories: 2880, protein: 138 },
        meals: [
            { id: "breakfast", name: "早餐", items: ["火雞肉", "雞蛋三明治"] },
            { id: "lunch", name: "午餐", items: ["雞胸肉 150g", "沙拉", "糙米飯"] },
            { id: "post_workout", name: "訓練後", items: ["乳清蛋白 半份"] },
            { id: "dinner", name: "晚餐", items: ["鱈魚 150g", "地瓜 150g", "芹菜炒菇"] }
        ]
    },
    5: { // Friday
        stats: { calories: 2800, protein: 132 },
        meals: [
            { id: "breakfast", name: "早餐", items: ["優格碗", "全蛋 2顆"] },
            { id: "lunch", name: "午餐", items: ["豬腱湯", "糙米飯"] },
            { id: "post_workout", name: "訓練後", items: ["豆漿 350ml"] },
            { id: "dinner", name: "晚餐", items: ["雞胸肉 150g", "蔬菜"] }
        ]
    },
    6: { // Saturday
        stats: { calories: 2850, protein: 135 },
        meals: [
            { id: "breakfast", name: "早餐", items: ["水煮蛋 2顆", "豆漿 300ml"] },
            { id: "lunch", name: "午餐", items: ["烤雞腿 或 親子丼/海鮮丼"] },
            { id: "post_workout", name: "訓練後", items: ["乳清蛋白 半份"] },
            { id: "dinner", name: "晚餐", items: ["豆腐", "雞肉或魚肉 (小份)"] }
        ]
    },
    0: { // Sunday
        stats: { calories: 2850, protein: 135 },
        meals: [
            { id: "breakfast", name: "早餐", items: ["燕麥", "豆漿", "水煮蛋 2顆"] },
            { id: "lunch", name: "午餐", items: ["外食 (建議含蛋白質)"] },
            { id: "post_workout", name: "訓練後", items: ["水果", "優格"] },
            { id: "dinner", name: "晚餐", items: ["雞胸肉 100g", "豆腐", "青菜"] }
        ]
    }
};

const workoutPlan = {
    currentPhase: 1,
    phases: {
        1: {
            name: "階段 1：第1–4週（基礎強化）",
            note: "頻率：每週 4 天 | 時間：45–60 分鐘 | 強度：RPE 6–7",
            schedule: {
                1: "day1", 2: "day2", 3: "rest", 4: "day4", 5: "day5", 6: "rest", 0: "rest"
            },
            routines: {
                "day1": {
                    name: "Day 1: 胸/肩/三頭",
                    exercises: [
                        { id: "p1_d1_1", name: "伏地挺身 (Push-ups)", sets: 3, reps: "10-12", note: "或跪姿/上斜伏地", image: "pushup" },
                        { id: "p1_d1_2", name: "椅上撐體 (Chair Dips)", sets: 3, reps: "10-12", note: "利用穩固椅子", image: "dips" }
                    ]
                },
                "day2": {
                    name: "Day 2: 腿/核心",
                    exercises: [
                        { id: "p1_d2_1", name: "深蹲 (Squats)", sets: 3, reps: "10-15", note: "保持背部挺直", image: "squat" },
                        { id: "p1_d2_2", name: "弓箭步 (Lunges)", sets: 3, reps: "10-15", note: "左右交替", image: "lunge" },
                        { id: "p1_d2_3", name: "臀橋 (Glute Bridge)", sets: 3, reps: "10-15", note: "或單腳臀橋", image: "bridge" },
                        { id: "p1_d2_4", name: "平板支撐 (Plank)", sets: 3, reps: "10-15", note: "核心收緊", image: "plank" }
                    ]
                },
                "day4": {
                    name: "Day 4: 背/二頭",
                    exercises: [
                        { id: "p1_d4_1", name: "划船 (Rows)", sets: 3, reps: "10-12", note: "毛巾或門框划船", image: "row" },
                        { id: "p1_d4_2", name: "反向雪天使 (Reverse Snow Angel)", sets: 3, reps: "10-12", note: "強化背部", image: "reverse_snow_angel" },
                        { id: "p1_d4_3", name: "毛巾彎舉 (Towel Curl)", sets: 3, reps: "10-12", note: "二頭肌訓練", image: "bicep_curl" }
                    ]
                },
                "day5": {
                    name: "Day 5: 全身循環 (3-4 循環)",
                    exercises: [
                        { id: "p1_d5_1", name: "深蹲 (Squats)", sets: 1, reps: "循環", note: "", image: "squat" },
                        { id: "p1_d5_2", name: "伏地挺身 (Push-ups)", sets: 1, reps: "循環", note: "", image: "pushup" },
                        { id: "p1_d5_3", name: "超人式 (Superman)", sets: 1, reps: "循環", note: "", image: "reverse_snow_angel" },
                        { id: "p1_d5_4", name: "登山者 (Mountain Climber)", sets: 1, reps: "循環", note: "", image: "lunge" }
                    ]
                }
            }
        },
        2: {
            name: "階段 2：第5–8週（肌肥大期）",
            note: "強度：RPE 7–8 | 動作慢放",
            schedule: {
                1: "day1", 2: "day2", 3: "day3", 4: "day4", 5: "day5", 6: "rest", 0: "rest"
            },
            routines: {
                "day1": {
                    name: "Day 1: 胸/肩/三頭",
                    exercises: [
                        { id: "p2_d1_1", name: "伏地挺身變化 (Push-ups Var.)", sets: 4, reps: "8-10", note: "下斜/上斜/慢放/窄距", image: "pushup" },
                        { id: "p2_d1_2", name: "椅上撐體 (Chair Dips)", sets: 4, reps: "8-10", note: "", image: "dips" }
                    ]
                },
                "day2": {
                    name: "Day 2: 腿/臀",
                    exercises: [
                        { id: "p2_d2_1", name: "深蹲慢放 (Slow Squats)", sets: 4, reps: "10", note: "", image: "squat" },
                        { id: "p2_d2_2", name: "保加利亞分腿蹲 (Bulgarian Split Squat)", sets: 4, reps: "10", note: "", image: "lunge" },
                        { id: "p2_d2_3", name: "側弓箭步 (Side Lunge)", sets: 4, reps: "10", note: "", image: "lunge" },
                        { id: "p2_d2_4", name: "提膝 (High Knees)", sets: 4, reps: "10", note: "", image: "lunge" }
                    ]
                },
                "day3": {
                    name: "Day 3: 核心",
                    exercises: [
                        { id: "p2_d3_1", name: "側棒式 (Side Plank)", sets: 3, reps: "15", note: "", image: "plank" },
                        { id: "p2_d3_2", name: "反向捲腹 (Reverse Crunch)", sets: 3, reps: "15", note: "", image: "plank" },
                        { id: "p2_d3_3", name: "死蟲式 (Dead Bug)", sets: 3, reps: "15", note: "", image: "plank" },
                        { id: "p2_d3_4", name: "超人式 (Superman)", sets: 3, reps: "15", note: "", image: "reverse_snow_angel" }
                    ]
                },
                "day4": {
                    name: "Day 4: 背/二頭",
                    exercises: [
                        { id: "p2_d4_1", name: "划船慢放 (Slow Rows)", sets: 4, reps: "8-10", note: "", image: "row" },
                        { id: "p2_d4_2", name: "T/Y/W Raise", sets: 4, reps: "8-10", note: "", image: "reverse_snow_angel" },
                        { id: "p2_d4_3", name: "毛巾彎舉 (Towel Curl)", sets: 4, reps: "8-10", note: "", image: "bicep_curl" }
                    ]
                },
                "day5": {
                    name: "Day 5: 全身循環 (4-5 循環)",
                    exercises: [
                        { id: "p2_d5_1", name: "深蹲 (Squats)", sets: 1, reps: "循環", note: "", image: "squat" },
                        { id: "p2_d5_2", name: "伏地挺身 (Push-ups)", sets: 1, reps: "循環", note: "", image: "pushup" },
                        { id: "p2_d5_3", name: "超人式 (Superman)", sets: 1, reps: "循環", note: "", image: "reverse_snow_angel" },
                        { id: "p2_d5_4", name: "登山者 (Mountain Climber)", sets: 1, reps: "循環", note: "", image: "lunge" }
                    ]
                }
            }
        },
        3: {
            name: "階段 3：第9–12週（快速增肌衝刺）",
            note: "強度：RPE 8 | 注意：動作慢放、控制關節",
            schedule: {
                1: "day1", 2: "day2", 3: "day3", 4: "day4", 5: "day5", 6: "rest", 0: "rest"
            },
            routines: {
                "day1": {
                    name: "Day 1: 胸",
                    exercises: [
                        { id: "p3_d1_1", name: "伏地挺身 (Push-ups)", sets: 4, reps: "8-10", note: "上斜/下斜/慢放", image: "pushup" }
                    ]
                },
                "day2": {
                    name: "Day 2: 腿/臀",
                    exercises: [
                        { id: "p3_d2_1", name: "保加利亞深蹲 (Bulgarian Split Squat)", sets: 4, reps: "10", note: "", image: "lunge" },
                        { id: "p3_d2_2", name: "單腳深蹲 (Single Leg Squat)", sets: 4, reps: "10", note: "椅支撐", image: "squat" },
                        { id: "p3_d2_3", name: "臀橋負重 (Weighted Bridge)", sets: 4, reps: "10", note: "", image: "bridge" }
                    ]
                },
                "day3": {
                    name: "Day 3: 肩/背",
                    exercises: [
                        { id: "p3_d3_1", name: "毛巾划船 (Rows)", sets: 4, reps: "10", note: "", image: "row" },
                        { id: "p3_d3_2", name: "反向雪天使 (Reverse Snow Angel)", sets: 4, reps: "10", note: "", image: "reverse_snow_angel" },
                        { id: "p3_d3_3", name: "過頭拉伸 (Overhead Extension)", sets: 4, reps: "10", note: "", image: "press" }
                    ]
                },
                "day4": {
                    name: "Day 4: 二頭/三頭",
                    exercises: [
                        { id: "p3_d4_1", name: "毛巾彎舉 (Towel Curl)", sets: 4, reps: "10", note: "", image: "bicep_curl" },
                        { id: "p3_d4_2", name: "後臂撐 (Dips)", sets: 4, reps: "10", note: "", image: "dips" },
                        { id: "p3_d4_3", name: "窄距伏地 (Narrow Push-ups)", sets: 4, reps: "10", note: "", image: "pushup" }
                    ]
                },
                "day5": {
                    name: "Day 5: 全身循環 (Tabata)",
                    exercises: [
                        { id: "p3_d5_1", name: "Tabata 循環", sets: "3-4", reps: "20s動/10s休 x8", note: "高強度間歇", image: "lunge" }
                    ]
                }
            }
        }
    }
};

const state = {
    currentPage: 'dashboard',
    selectedDay: new Date().getDay(),
    completedMeals: JSON.parse(localStorage.getItem('completedMeals')) || {},
    completedWorkouts: JSON.parse(localStorage.getItem('completedWorkouts')) || {},
    bodyLogs: JSON.parse(localStorage.getItem('bodyLogs')) || {},
    workoutPhase: parseInt(localStorage.getItem('workoutPhase')) || 1
};

const contentArea = document.getElementById('content-area');
const pageTitle = document.getElementById('page-title');
const navLinks = document.querySelectorAll('.nav-links li');
const currentDateEl = document.getElementById('current-date');

function init() {
    updateDate();
    setupNavigation();
    renderPage('dashboard');
}

function updateDate() {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
    currentDateEl.textContent = now.toLocaleDateString('zh-TW', options);
}

function setupNavigation() {
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const page = link.getAttribute('data-page');
            setActivePage(page);
        });
    });
}

function setActivePage(page) {
    state.currentPage = page;
    navLinks.forEach(link => {
        if (link.getAttribute('data-page') === page) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    renderPage(page);
}

function renderPage(page) {
    contentArea.innerHTML = '';

    switch (page) {
        case 'dashboard':
            pageTitle.textContent = '總覽 Dashboard';
            renderDashboard();
            break;
        case 'nutrition':
            pageTitle.textContent = '營養食譜 Nutrition';
            renderNutrition();
            break;
        case 'workout':
            pageTitle.textContent = '健身菜單 Workout';
            renderWorkout();
            break;
        case 'schedule':
            pageTitle.textContent = '訓練週期 Schedule';
            renderSchedule();
            break;
    }
}

function renderDashboard() {
    const dashboardHTML = `
        <div class="dashboard-grid">
            <div class="card">
                <h3>身體數據 Profile</h3>
                <div class="stat-value">${userProfile.weight} <span style="font-size:1rem">kg</span></div>
                <div class="stat-label">BMI: ${(userProfile.weight / ((userProfile.height / 100) ** 2)).toFixed(1)} | 體脂: ${userProfile.bodyFat}%</div>
            </div>
            <div class="card">
                <h3>每日目標 Daily Goal</h3>
                <div class="stat-value">${userProfile.caloriesTarget} <span style="font-size:1rem">kcal</span></div>
                <div class="stat-label">蛋白質: ${userProfile.macros.protein}g</div>
            </div>
            <div class="card">
                <h3>今日進度 Today's Progress</h3>
                <div style="margin-bottom: 1.5rem;">
                    <div class="stat-label" style="display:flex; justify-content:space-between;">
                        <span>飲食 Nutrition</span>
                        <span id="nutrition-progress-text">0%</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" id="nutrition-progress-fill" style="width: 0%"></div>
                    </div>
                </div>
                <div>
                    <div class="stat-label" style="display:flex; justify-content:space-between;">
                        <span>運動 Workout</span>
                        <span id="workout-progress-text">0%</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" id="workout-progress-fill" style="width: 0%; background-color: var(--warning);"></div>
                    </div>
                </div>
                <div style="margin-top: 1rem; text-align: right;">
                    <button id="save-progress-btn" style="padding: 0.5rem 1rem; background: var(--primary); color: white; border: none; border-radius: 6px; font-weight: 600; cursor: pointer;">儲存進度 Save Progress</button>
                </div>
            </div>
        </div>
    `;
    contentArea.innerHTML = dashboardHTML;
    updateDashboardProgress();
    renderBodyLogSection(contentArea);
    document.getElementById('save-progress-btn').addEventListener('click', saveProgressToLog);
}

function renderNutrition() {
    const days = ['週日', '週一', '週二', '週三', '週四', '週五', '週六'];
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '1rem';

    days.forEach((day, index) => {
        const dayContainer = document.createElement('div');
        dayContainer.className = 'card';
        dayContainer.style.padding = '0';
        dayContainer.style.overflow = 'hidden';
        dayContainer.dataset.dayIndex = index;

        const header = document.createElement('div');
        header.style.padding = '1rem';
        header.style.cursor = 'pointer';
        header.style.display = 'flex';
        header.style.justifyContent = 'space-between';
        header.style.alignItems = 'center';
        header.style.backgroundColor = 'var(--surface)';
        header.style.color = 'var(--text-main)';
        header.style.fontWeight = 'bold';
        header.style.transition = 'background-color 0.2s';

        const isToday = new Date().getDay() === index;
        const dayLabel = isToday ? `${day} (今天)` : day;
        const arrow = document.createElement('span');
        arrow.textContent = '▶';
        arrow.className = 'day-arrow';

        const dayPlan = weeklyNutritionPlan[index];
        const statsText = dayPlan ? `<span style="font-size: 0.85rem; font-weight: normal; margin-left: 0.5rem; color: var(--text-muted);">(${dayPlan.stats.calories} kcal | P: ${dayPlan.stats.protein}g)</span>` : '';

        header.innerHTML = `<div>${dayLabel}${statsText}</div>`;
        header.appendChild(arrow);

        const content = document.createElement('div');
        content.className = 'day-content';
        content.style.display = 'none';
        content.style.padding = '1rem';
        content.style.borderTop = '1px solid var(--border)';
        content.style.backgroundColor = '#fafafa';

        if (dayPlan) {
            const grid = document.createElement('div');
            grid.className = 'dashboard-grid';

            dayPlan.meals.forEach(meal => {
                const mealCard = document.createElement('div');
                mealCard.className = 'card';
                mealCard.style.marginBottom = '0';

                mealCard.innerHTML = `
                    <h4 style="margin-bottom: 0.5rem; color: var(--primary);">${meal.name}</h4>
                    <ul style="list-style: none; padding: 0;">
                        ${meal.items.map((item, itemIdx) => {
                    const itemId = `${index}_${meal.id}_${itemIdx}`;
                    const isDone = isItemDone(itemId);
                    return `
                                <li style="margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
                                    <input type="checkbox" ${isDone ? 'checked' : ''} class="item-check" data-day="${index}" data-id="${itemId}" style="transform: scale(1.2); cursor: pointer;">
                                    <span style="color: var(--text-main); font-size: 0.95rem;">${item}</span>
                                </li>
                            `;
                }).join('')}
                    </ul>
                `;
                grid.appendChild(mealCard);
            });
            content.appendChild(grid);
        } else {
            content.innerHTML = '<p style="text-align:center; color: var(--text-muted);">無資料</p>';
        }

        header.addEventListener('click', () => {
            const isOpen = content.style.display !== 'none';
            if (isOpen) {
                content.style.display = 'none';
                arrow.textContent = '▶';
                header.style.backgroundColor = 'var(--surface)';
                header.style.color = 'var(--text-main)';
            } else {
                document.querySelectorAll('.day-content').forEach(c => c.style.display = 'none');
                document.querySelectorAll('.day-arrow').forEach(a => a.textContent = '▶');
                document.querySelectorAll('.card[data-day-index]').forEach(card => {
                    const h = card.firstElementChild;
                    if (h) {
                        h.style.backgroundColor = 'var(--surface)';
                        h.style.color = 'var(--text-main)';
                    }
                });

                content.style.display = 'block';
                arrow.textContent = '▼';
                header.style.backgroundColor = 'var(--primary)';
                header.style.color = 'white';
            }
        });

        dayContainer.appendChild(header);
        dayContainer.appendChild(content);
        container.appendChild(dayContainer);
    });

    contentArea.appendChild(container);

    document.querySelectorAll('.item-check').forEach(check => {
        check.addEventListener('change', (e) => {
            toggleItem(e.target.dataset.day, e.target.dataset.id, e.target.checked);
        });
    });

    const todayIndex = new Date().getDay();
    const todayCard = container.querySelector(`[data-day-index="${todayIndex}"]`);
    if (todayCard) {
        const todayHeader = todayCard.firstElementChild;
        if (todayHeader) todayHeader.click();
    }
}

function renderWorkout() {
    contentArea.innerHTML = '';
    const phaseContainer = document.createElement('div');
    phaseContainer.style.marginBottom = '1rem';
    phaseContainer.style.display = 'flex';
    phaseContainer.style.gap = '0.5rem';
    phaseContainer.style.justifyContent = 'center';

    [1, 2, 3].forEach(p => {
        const btn = document.createElement('button');
        btn.textContent = `階段 ${p}`;
        btn.style.padding = '0.5rem 1rem';
        btn.style.border = '1px solid var(--primary)';
        btn.style.borderRadius = '20px';
        btn.style.cursor = 'pointer';
        btn.style.background = state.workoutPhase === p ? 'var(--primary)' : 'white';
        btn.style.color = state.workoutPhase === p ? 'white' : 'var(--primary)';

        btn.addEventListener('click', () => {
            state.workoutPhase = p;
            localStorage.setItem('workoutPhase', p);
            renderWorkout(); // Re-render
            updateDashboardProgress(); // Update progress if needed
        });
        phaseContainer.appendChild(btn);
    });

    contentArea.appendChild(phaseContainer);

    const currentPhaseData = workoutPlan.phases[state.workoutPhase];
    const infoCard = document.createElement('div');
    infoCard.className = 'card';
    infoCard.innerHTML = `
        <h3>${currentPhaseData.name}</h3>
        <p style="color: var(--text-muted);">${currentPhaseData.note}</p>
    `;
    contentArea.appendChild(infoCard);

    const days = ['週日', '週一', '週二', '週三', '週四', '週五', '週六'];
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '1rem';

    days.forEach((day, index) => {
        const dayContainer = document.createElement('div');
        dayContainer.className = 'card';
        dayContainer.style.padding = '0';
        dayContainer.style.overflow = 'hidden';
        dayContainer.dataset.dayIndex = index;

        const header = document.createElement('div');
        header.style.padding = '1rem';
        header.style.cursor = 'pointer';
        header.style.display = 'flex';
        header.style.justifyContent = 'space-between';
        header.style.alignItems = 'center';
        header.style.backgroundColor = 'var(--surface)';
        header.style.color = 'var(--text-main)';
        header.style.fontWeight = 'bold';
        header.style.transition = 'background-color 0.2s';

        const isToday = new Date().getDay() === index;
        const dayLabel = isToday ? `${day} (今天)` : day;
        const arrow = document.createElement('span');
        arrow.textContent = '▶';
        arrow.className = 'day-arrow';
        header.innerHTML = `<span>${dayLabel}</span>`;
        header.appendChild(arrow);

        const content = document.createElement('div');
        content.className = 'day-content';
        content.style.display = 'none';
        content.style.padding = '1rem';
        content.style.borderTop = '1px solid var(--border)';
        content.style.backgroundColor = '#fafafa';

        const routineKey = currentPhaseData.schedule[index];
        if (routineKey === 'rest') {
            content.innerHTML = `
                <div style="text-align: center; padding: 2rem;">
                    <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🧘‍♂️</div>
                    <h3 style="margin: 0;">休息日 Rest Day</h3>
                    <p style="color: var(--text-muted); margin-top: 0.5rem;">好好休息，讓肌肉生長。</p>
                </div>
            `;
        } else {
            const routine = currentPhaseData.routines[routineKey];
            content.innerHTML = `<h3 style="margin-bottom: 1rem;">${routine.name}</h3>`;
            const grid = document.createElement('div');
            grid.className = 'dashboard-grid';

            routine.exercises.forEach(ex => {
                const exCard = document.createElement('div');
                exCard.className = 'card';
                exCard.style.marginBottom = '0';
                const isDone = isWorkoutDone(index, ex.id);
                exCard.innerHTML = `
                    <div style="display: flex; gap: 1rem; align-items: center;">
                        <div style="width: 80px; height: 80px; background: #eee; border-radius: 8px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; overflow: hidden;">
                            <img src="assets/${ex.image}.png" alt="${ex.name}" style="max-width: 100%; max-height: 100%; object-fit: contain;" onerror="this.src='https://placehold.co/100?text=${ex.name}'">
                        </div>
                        <div style="flex: 1;">
                            <div style="display: flex; justify-content: space-between; align-items: start;">
                                <h4 style="margin: 0; font-size: 1rem;">${ex.name}</h4>
                                <input type="checkbox" ${isDone ? 'checked' : ''} class="workout-check" data-day="${index}" data-id="${ex.id}" style="transform: scale(1.3); cursor: pointer;">
                            </div>
                            <div style="font-size: 0.9rem; color: var(--text-muted); margin: 0.25rem 0;">${ex.sets} 組 x ${ex.reps}</div>
                            <div style="font-size: 0.8rem; color: var(--primary);">${ex.note}</div>
                        </div>
                    </div>
                `;
                grid.appendChild(exCard);
            });
            content.appendChild(grid);
        }

        header.addEventListener('click', () => {
            const isOpen = content.style.display !== 'none';
            if (isOpen) {
                content.style.display = 'none';
                arrow.textContent = '▶';
                header.style.backgroundColor = 'var(--surface)';
                header.style.color = 'var(--text-main)';
            } else {
                document.querySelectorAll('.day-content').forEach(c => c.style.display = 'none');
                document.querySelectorAll('.day-arrow').forEach(a => a.textContent = '▶');
                document.querySelectorAll('.card[data-day-index]').forEach(card => {
                    const h = card.firstElementChild;
                    if (h) {
                        h.style.backgroundColor = 'var(--surface)';
                        h.style.color = 'var(--text-main)';
                    }
                });
                content.style.display = 'block';
                arrow.textContent = '▼';
                header.style.backgroundColor = 'var(--primary)';
                header.style.color = 'white';
            }
        });

        dayContainer.appendChild(header);
        dayContainer.appendChild(content);
        container.appendChild(dayContainer);
    });

    contentArea.appendChild(container);
    document.querySelectorAll('.workout-check').forEach(check => {
        check.addEventListener('change', (e) => {
            toggleWorkout(e.target.dataset.day, e.target.dataset.id, e.target.checked);
        });
    });

    const todayIndex = new Date().getDay();
    const todayCard = container.querySelector(`[data-day-index="${todayIndex}"]`);
    if (todayCard) {
        const todayHeader = todayCard.firstElementChild;
        if (todayHeader) todayHeader.click();
    }
}

function renderSchedule() {
    contentArea.innerHTML = '';
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '2rem';

    [1, 2, 3].forEach(phaseId => {
        const phaseData = workoutPlan.phases[phaseId];
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>訓練週期規劃 - ${phaseData.name}</h3>
            <p style="margin-bottom: 1rem; font-size: 1.1rem; font-weight: 600;">${phaseData.note}</p>
            <div style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 0.5rem; text-align: center;">
                <div style="font-weight: bold;">週日</div>
                <div style="font-weight: bold;">週一</div>
                <div style="font-weight: bold;">週二</div>
                <div style="font-weight: bold;">週三</div>
                <div style="font-weight: bold;">週四</div>
                <div style="font-weight: bold;">週五</div>
                <div style="font-weight: bold;">週六</div>
                ${[0, 1, 2, 3, 4, 5, 6].map(dayIdx => {
            const routineKey = phaseData.schedule[dayIdx];
            const isRest = routineKey === 'rest';
            const bg = isRest ? '#f0f0f0' : '#ffecec';
            const text = isRest ? '休' : '練';
            return `<div style="background: ${bg}; padding: 1rem; border-radius: 8px;">${text}</div>`;
        }).join('')}
            </div>
        `;
        container.appendChild(card);
    });

    contentArea.appendChild(container);
}

function renderBodyLogSection(container) {
    const card = document.createElement('div');
    card.className = 'card';

    const formSection = document.createElement('div');
    formSection.style.marginBottom = '2rem';
    formSection.innerHTML = `
        <h3 style="margin-bottom: 1rem;">記錄今日數據</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1rem;">
            <div>
                <label style="display: block; margin-bottom: 0.5rem; color: var(--text-muted); font-size: 0.9rem;">日期</label>
                <input type="date" id="log-date-input" style="width: 100%; padding: 0.5rem; border: 1px solid var(--border); border-radius: 6px;" value="${getTodayKey()}">
            </div>
            <div>
                <label style="display: block; margin-bottom: 0.5rem; color: var(--text-muted); font-size: 0.9rem;">體重 (kg)</label>
                <input type="number" id="weight-input" step="0.1" placeholder="74.0" style="width: 100%; padding: 0.5rem; border: 1px solid var(--border); border-radius: 6px;">
            </div>
            <div>
                <label style="display: block; margin-bottom: 0.5rem; color: var(--text-muted); font-size: 0.9rem;">體脂率 (%)</label>
                <input type="number" id="bodyfat-input" step="0.1" placeholder="18.5" style="width: 100%; padding: 0.5rem; border: 1px solid var(--border); border-radius: 6px;">
            </div>
            <div>
                <label style="display: block; margin-bottom: 0.5rem; color: var(--text-muted); font-size: 0.9rem;">內臟脂肪</label>
                <input type="number" id="visceralfat-input" step="0.1" placeholder="11.5" style="width: 100%; padding: 0.5rem; border: 1px solid var(--border); border-radius: 6px;">
            </div>
            <div style="display: flex; align-items: flex-end;">
                <button id="save-body-log" style="width: 100%; padding: 0.5rem 1rem; background: var(--primary); color: white; border: none; border-radius: 6px; font-weight: 600; cursor: pointer;">儲存</button>
            </div>
        </div>
    `;
    card.appendChild(formSection);

    // Collect all dates from bodyLogs, completedMeals, and completedWorkouts
    const allDates = new Set([
        ...Object.keys(state.bodyLogs),
        ...Object.keys(state.completedMeals),
        ...Object.keys(state.completedWorkouts)
    ]);
    const sortedDates = Array.from(allDates).sort();

    if (sortedDates.length > 0) {
        const chartsSection = document.createElement('div');
        chartsSection.style.marginBottom = '2rem';
        chartsSection.style.paddingTop = '1.5rem';
        chartsSection.style.borderTop = '1px solid var(--border)';
        chartsSection.innerHTML = `
            <h3 style="margin-bottom: 1rem;">趨勢圖</h3>
            <div style="background: #fafafa; padding: 1rem; border-radius: 8px;">
                <canvas id="combined-chart" style="width: 100%; height: 300px;"></canvas>
            </div>
        `;
        card.appendChild(chartsSection);
    }

    const historySection = document.createElement('div');
    historySection.style.paddingTop = '1.5rem';
    historySection.style.borderTop = '1px solid var(--border)';
    historySection.innerHTML = '<h3 style="margin-bottom: 1rem;">歷史記錄</h3>';

    const logs = Object.entries(state.bodyLogs).sort((a, b) => a[0].localeCompare(b[0]));

    if (logs.length === 0) {
        historySection.innerHTML += '<p style="color: var(--text-muted); text-align: center; padding: 2rem;">尚無記錄，請開始記錄您的身體數據</p>';
    } else {
        const table = document.createElement('table');
        table.style.width = '100%';
        table.style.borderCollapse = 'collapse';
        table.style.fontSize = '0.9rem';
        table.innerHTML = `
            <thead>
                <tr style="border-bottom: 2px solid var(--border);">
                    <th style="padding: 0.5rem; text-align: left; font-weight: 600;">日期</th>
                    <th style="padding: 0.5rem; text-align: center; font-weight: 600;">體重</th>
                    <th style="padding: 0.5rem; text-align: center; font-weight: 600;">體脂率</th>
                    <th style="padding: 0.5rem; text-align: center; font-weight: 600;">內臟</th>
                    <th style="padding: 0.5rem; text-align: center; font-weight: 600;">飲食</th>
                    <th style="padding: 0.5rem; text-align: center; font-weight: 600;">運動</th>
                    <th style="padding: 0.5rem; text-align: center; font-weight: 600;">操作</th>
                </tr>
            </thead>
            <tbody>
                ${logs.reverse().map(([date, data]) => `
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td style="padding: 0.5rem;">${formatBodyDate(date)}</td>
                        <td style="padding: 0.5rem; text-align: center;">${data.weight || '-'} kg</td>
                        <td style="padding: 0.5rem; text-align: center;">${data.bodyFat || '-'}%</td>
                        <td style="padding: 0.5rem; text-align: center;">${data.visceralFat || '-'}</td>
                        <td style="padding: 0.5rem; text-align: center;">${data.nutrition !== undefined ? data.nutrition + '%' : '-'}</td>
                        <td style="padding: 0.5rem; text-align: center;">${data.workout !== undefined ? data.workout + '%' : '-'}</td>
                        <td style="padding: 0.5rem; text-align: center;">
                            <button class="delete-log" data-date="${date}" style="padding: 0.25rem 0.5rem; background: #ff4444; color: white; border: none; border-radius: 4px; font-size: 0.8rem; cursor: pointer;">刪除</button>
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        `;
        historySection.appendChild(table);
    }

    card.appendChild(historySection);
    container.appendChild(card);

    if (sortedDates.length > 0) {
        setTimeout(() => {
            const chartDates = sortedDates.map(d => formatBodyDateShort(d));

            const weights = sortedDates.map(d => state.bodyLogs[d] ? state.bodyLogs[d].weight : null);
            const bodyFats = sortedDates.map(d => state.bodyLogs[d] ? state.bodyLogs[d].bodyFat : null);
            const visceralFats = sortedDates.map(d => state.bodyLogs[d] ? state.bodyLogs[d].visceralFat : null);

            const progressData = sortedDates.map(d => calculateProgress(d));
            const nutritionProgress = progressData.map(p => p.nutrition);
            const workoutProgress = progressData.map(p => p.workout);

            drawCombinedChart('combined-chart', chartDates, weights, bodyFats, visceralFats, nutritionProgress, workoutProgress);
        }, 100);
    }

    document.getElementById('save-body-log').addEventListener('click', saveBodyLog);
    document.querySelectorAll('.delete-log').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            deleteBodyLog(e.target.dataset.date);
        });
    });
}

function calculateProgress(dateString) {
    const date = new Date(dateString);
    const dayIndex = date.getDay();

    // Nutrition Progress
    const dayPlan = weeklyNutritionPlan[dayIndex];
    let nutritionPercent = 0;
    if (dayPlan) {
        const totalItems = dayPlan.meals.reduce((total, meal) => total + meal.items.length, 0);
        const completedItems = state.completedMeals[dateString] ? state.completedMeals[dateString].length : 0;
        if (totalItems > 0) {
            nutritionPercent = Math.round((completedItems / totalItems) * 100);
        }
    }

    // Workout Progress
    // Note: This assumes phase 1 for past dates if not tracked, which is a simplification.
    // Ideally we should track phase history, but for now we use current phase or default.
    const currentPhaseData = workoutPlan.phases[state.workoutPhase];
    const routineKey = currentPhaseData.schedule[dayIndex];
    let workoutPercent = 0;

    if (routineKey === 'rest') {
        workoutPercent = 0; // Or 100? Let's say 0 for chart visualization purposes or null?
        // If it's a rest day, maybe we shouldn't plot it or plot as 0.
        // Let's plot as 0 for now.
    } else {
        const routine = currentPhaseData.routines[routineKey];
        const totalExercises = routine.exercises.length;
        const completedExercises = state.completedWorkouts[dateString] ? state.completedWorkouts[dateString].length : 0;
        if (totalExercises > 0) {
            workoutPercent = Math.round((completedExercises / totalExercises) * 100);
        }
    }

    return { nutrition: nutritionPercent, workout: workoutPercent };
}

function drawCombinedChart(canvasId, labels, weights, bodyFats, visceralFats, nutritionProgress, workoutProgress) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.offsetWidth;
    const height = 300;
    canvas.width = width;
    canvas.height = height;
    ctx.clearRect(0, 0, width, height);

    const padding = { top: 40, right: 40, bottom: 50, left: 60 };
    const chartWidth = width - padding.left - padding.right;
    const chartHeight = height - padding.top - padding.bottom;

    // Helper to filter nulls for range calculation
    const getRange = (data) => {
        const validData = data.filter(v => v !== null);
        if (validData.length === 0) return { min: 0, max: 100, range: 100 };
        const min = Math.min(...validData);
        const max = Math.max(...validData);
        return { min, max, range: max - min || 1 };
    };

    // Normalize data to 0-100 scale for plotting
    const normalize = (val, min, range) => {
        if (val === null) return null;
        return ((val - min) / range) * 100;
    };

    const wRange = getRange(weights);
    const bfRange = getRange(bodyFats);
    const vfRange = getRange(visceralFats);
    // Progress is already 0-100

    ctx.strokeStyle = '#e0e0e0';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 5; i++) {
        const y = padding.top + (chartHeight / 5) * i;
        ctx.beginPath();
        ctx.moveTo(padding.left, y);
        ctx.lineTo(width - padding.right, y);
        ctx.stroke();
    }

    const datasets = [
        {
            data: weights.map(v => normalize(v, wRange.min, wRange.range)),
            color: '#2196F3',
            label: '體重',
            actualData: weights
        },
        {
            data: bodyFats.map(v => normalize(v, bfRange.min, bfRange.range)),
            color: '#FF9800',
            label: '體脂率',
            actualData: bodyFats
        },
        {
            data: visceralFats.map(v => normalize(v, vfRange.min, vfRange.range)),
            color: '#E91E63',
            label: '內臟脂肪',
            actualData: visceralFats
        },
        {
            data: nutritionProgress,
            color: '#4CAF50',
            label: '飲食進度(%)',
            actualData: nutritionProgress,
            dashed: true
        },
        {
            data: workoutProgress,
            color: '#9C27B0',
            label: '運動進度(%)',
            actualData: workoutProgress,
            dashed: true
        }
    ];

    datasets.forEach(dataset => {
        ctx.strokeStyle = dataset.color;
        ctx.lineWidth = 2;
        if (dataset.dashed) {
            ctx.setLineDash([5, 5]);
        } else {
            ctx.setLineDash([]);
        }

        ctx.beginPath();
        let firstPoint = true;
        dataset.data.forEach((value, index) => {
            if (value === null) return;
            const x = padding.left + (chartWidth / (labels.length - 1 || 1)) * index;
            const y = padding.top + chartHeight - (value / 100) * chartHeight;
            if (firstPoint) {
                ctx.moveTo(x, y);
                firstPoint = false;
            } else {
                ctx.lineTo(x, y);
            }
        });
        ctx.stroke();
        ctx.setLineDash([]); // Reset

        ctx.fillStyle = dataset.color;
        dataset.data.forEach((value, index) => {
            if (value === null) return;
            const x = padding.left + (chartWidth / (labels.length - 1 || 1)) * index;
            const y = padding.top + chartHeight - (value / 100) * chartHeight;
            ctx.beginPath();
            ctx.arc(x, y, 3, 0, Math.PI * 2);
            ctx.fill();
        });
    });

    // X-axis labels
    ctx.fillStyle = '#666';
    ctx.font = '11px sans-serif';
    ctx.textAlign = 'center';
    labels.forEach((label, index) => {
        // Show label if it fits, simple logic: show every nth label
        const step = Math.ceil(labels.length / 6);
        if (index % step === 0 || index === labels.length - 1) {
            const x = padding.left + (chartWidth / (labels.length - 1 || 1)) * index;
            ctx.fillText(label, x, height - 20);
        }
    });

    // Legend
    const legendX = width - padding.right - 100; // Adjusted position
    let legendY = padding.top - 20;

    // Draw legend in 2 columns if needed or just stack
    // Let's stack them but compact
    datasets.forEach((dataset, index) => {
        // Simple layout
        const row = Math.floor(index / 3);
        const col = index % 3;
        const x = padding.left + col * 100;
        const y = padding.top - 25 + row * 15;

        ctx.fillStyle = dataset.color;
        ctx.fillRect(x, y - 8, 10, 3);
        ctx.fillStyle = '#333';
        ctx.font = '11px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText(dataset.label, x + 15, y);
    });
}

function formatBodyDate(dateStr) {
    const date = new Date(dateStr + 'T00:00:00');
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const weekday = ['日', '一', '二', '三', '四', '五', '六'][date.getDay()];
    return `${month}/${day} (週${weekday})`;
}

function formatBodyDateShort(dateStr) {
    const date = new Date(dateStr + 'T00:00:00');
    return `${date.getMonth() + 1}/${date.getDate()}`;
}

function saveBodyLog() {
    const dateInput = document.getElementById('log-date-input');
    const weight = document.getElementById('weight-input').value;
    const bodyFat = document.getElementById('bodyfat-input').value;
    const visceralFat = document.getElementById('visceralfat-input').value;

    if (!dateInput.value || !weight || !bodyFat || !visceralFat) {
        alert('請填寫所有欄位');
        return;
    }

    const dateKey = dateInput.value;
    state.bodyLogs[dateKey] = {
        ...state.bodyLogs[dateKey], // Merge existing data
        weight: parseFloat(weight),
        bodyFat: parseFloat(bodyFat),
        visceralFat: parseFloat(visceralFat)
    };

    localStorage.setItem('bodyLogs', JSON.stringify(state.bodyLogs));
    // Re-render dashboard to update charts/tables and profile
    renderPage('dashboard');
}

function deleteBodyLog(date) {
    if (confirm('確定要刪除此記錄嗎？')) {
        delete state.bodyLogs[date];
        localStorage.setItem('bodyLogs', JSON.stringify(state.bodyLogs));
        renderPage('dashboard');
    }
}

function getTodayKey() {
    return new Date().toISOString().split('T')[0];
}

function isItemDone(id) {
    const today = getTodayKey();
    return state.completedMeals[today] && state.completedMeals[today].includes(id);
}

function getTotalItemCount() {
    const todayIndex = new Date().getDay();
    const dayPlan = weeklyNutritionPlan[todayIndex];
    if (!dayPlan) return 0;
    return dayPlan.meals.reduce((total, meal) => total + meal.items.length, 0);
}

function toggleItem(dayIndex, id, isChecked) {
    const today = new Date();
    const currentDayIndex = today.getDay();

    if (parseInt(dayIndex) !== currentDayIndex) {
        alert("只能記錄今天的飲食進度喔！");
        // Revert checkbox
        const checkbox = document.querySelector(`.item-check[data-id="${id}"]`);
        if (checkbox) checkbox.checked = !isChecked;
        return;
    }

    const dateKey = getTodayKey();
    if (!state.completedMeals[dateKey]) {
        state.completedMeals[dateKey] = [];
    }
    if (isChecked) {
        if (!state.completedMeals[dateKey].includes(id)) {
            state.completedMeals[dateKey].push(id);
        }
    } else {
        state.completedMeals[dateKey] = state.completedMeals[dateKey].filter(item => item !== id);
    }
    localStorage.setItem('completedMeals', JSON.stringify(state.completedMeals));
    if (state.currentPage === 'dashboard') {
        updateDashboardProgress();
    }
}

function isWorkoutDone(dayIndex, exerciseId) {
    const today = new Date();
    const currentDayIndex = today.getDay();
    if (parseInt(dayIndex) !== currentDayIndex) return false;
    const dateKey = getTodayKey();
    return state.completedWorkouts[dateKey] && state.completedWorkouts[dateKey].includes(exerciseId);
}

function toggleWorkout(dayIndex, exerciseId, isChecked) {
    const today = new Date();
    const currentDayIndex = today.getDay();
    if (parseInt(dayIndex) !== currentDayIndex) {
        alert("只能記錄今天的訓練進度喔！");
        // Revert checkbox
        const checkbox = document.querySelector(`.workout-check[data-id="${exerciseId}"]`);
        if (checkbox) checkbox.checked = !isChecked;
        return;
    }
    const dateKey = getTodayKey();
    if (!state.completedWorkouts[dateKey]) {
        state.completedWorkouts[dateKey] = [];
    }
    if (isChecked) {
        if (!state.completedWorkouts[dateKey].includes(exerciseId)) {
            state.completedWorkouts[dateKey].push(exerciseId);
        }
    } else {
        state.completedWorkouts[dateKey] = state.completedWorkouts[dateKey].filter(id => id !== exerciseId);
    }
    localStorage.setItem('completedWorkouts', JSON.stringify(state.completedWorkouts));
}

function updateDashboardProgress() {
    const today = getTodayKey();
    const itemDoneCount = state.completedMeals[today] ? state.completedMeals[today].length : 0;
    const itemTotalCount = getTotalItemCount();

    let mealPercentage = 0;
    if (itemTotalCount > 0) {
        mealPercentage = Math.round((itemDoneCount / itemTotalCount) * 100);
    }

    const nutText = document.getElementById('nutrition-progress-text');
    const nutFill = document.getElementById('nutrition-progress-fill');
    if (nutText) nutText.textContent = `${mealPercentage}%`;
    if (nutFill) nutFill.style.width = `${mealPercentage}%`;

    const dayIndex = new Date().getDay();
    const currentPhaseData = workoutPlan.phases[state.workoutPhase];
    const routineKey = currentPhaseData.schedule[dayIndex];
    let workoutPercentage = 0;
    let workoutTextStr = "0%";

    if (routineKey === 'rest') {
        workoutTextStr = "休息日";
        workoutPercentage = 100;
    } else {
        const routine = currentPhaseData.routines[routineKey];
        const totalExercises = routine.exercises.length;
        const doneExercises = state.completedWorkouts[today] ? state.completedWorkouts[today].length : 0;
        workoutPercentage = Math.round((doneExercises / totalExercises) * 100);
        workoutTextStr = `${workoutPercentage}%`;
    }
    const workText = document.getElementById('workout-progress-text');
    const workFill = document.getElementById('workout-progress-fill');
    if (workText) workText.textContent = workoutTextStr;
    if (workFill) {
        workFill.style.width = `${workoutPercentage}%`;
        if (routineKey === 'rest') {
            workFill.style.backgroundColor = '#b2bec3';
        } else {
            workFill.style.backgroundColor = 'var(--warning)';
        }
    }
}

function saveProgressToLog() {
    const today = getTodayKey();
    const progress = calculateProgress(today);

    state.bodyLogs[today] = {
        ...state.bodyLogs[today],
        nutrition: progress.nutrition,
        workout: progress.workout
    };

    localStorage.setItem('bodyLogs', JSON.stringify(state.bodyLogs));
    renderPage('dashboard');
    alert('今日進度已儲存！');
}

init();
