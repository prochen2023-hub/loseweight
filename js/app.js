// --- Data Section ---

const userProfile = {
    name: "User",
    age: 50,
    height: 175,
    weight: 74,
    bodyFat: 18.5,
    visceralFat: 11.5,
    goal: "Hypertrophy & Recomposition",
    caloriesTarget: 2500,
    macros: {
        protein: 150,
        carbs: 310,
        fat: 70
    }
};

const nutritionPlan = [
    {
        id: "breakfast",
        name: "早餐 Breakfast",
        calories: 600,
        protein: 35,
        items: [
            "燕麥片 80g (Oats)",
            "全脂牛奶 250ml (Whole Milk)",
            "水煮蛋 2顆 (Boiled Eggs)",
            "香蕉 1根 (Banana)"
        ]
    },
    {
        id: "lunch",
        name: "午餐 Lunch",
        calories: 800,
        protein: 45,
        items: [
            "糙米飯 1.5碗 (Brown Rice)",
            "雞胸肉/瘦牛肉 150g (Chicken Breast/Lean Beef)",
            "燙青菜 2份 (Vegetables)",
            "橄欖油 1匙 (Olive Oil)"
        ]
    },
    {
        id: "snack",
        name: "訓練前/下午點心 Snack",
        calories: 300,
        protein: 20,
        items: [
            "希臘優格 150g (Greek Yogurt)",
            "堅果 1把 (Nuts)",
            "蘋果 1顆 (Apple)"
        ]
    },
    {
        id: "dinner",
        name: "晚餐 Dinner",
        calories: 800,
        protein: 50,
        items: [
            "地瓜 2顆 (Sweet Potato)",
            "鮭魚/白肉魚 150g (Salmon/White Fish)",
            "綜合沙拉 (Mixed Salad)",
            "酪梨 半顆 (Avocado)"
        ]
    }
];

const workoutPlan = {
    schedule_note: "每週訓練 5 天 (一三五力量，二四有氧)",
    cycle: "8-12 週 (之後安排 1 週減量期)",
    weekly_schedule: {
        1: "routine_a",
        2: "cardio",
        3: "routine_b",
        4: "cardio",
        5: "routine_a",
        6: "rest",
        0: "rest"
    },
    routines: {
        "routine_a": {
            name: "課表 A (全身訓練)",
            exercises: [
                { id: "sq", name: "深蹲 (Squats)", sets: 4, reps: "12-15", rest: "90s", note: "徒手或手持重物。保持背部挺直，核心收緊。", image: "squat" },
                { id: "pu", name: "伏地挺身 (Push-ups)", sets: 4, reps: "10-15", rest: "90s", note: "若太難可改為跪姿。胸口貼近地面。", image: "pushup" },
                { id: "lu", name: "弓箭步 (Lunges)", sets: 3, reps: "12/邊", rest: "60s", note: "左右腳交替。膝蓋不超過腳尖。", image: "lunge" },
                { id: "dr", name: "啞鈴/水瓶划船 (Dumbbell Row)", sets: 4, reps: "12-15", rest: "60s", note: "單手支撐椅面，背部打平。", image: "row" },
                { id: "pl", name: "平板支撐 (Plank)", sets: 3, reps: "45-60s", rest: "60s", note: "保持身體一直線，不塌腰。", image: "plank" }
            ]
        },
        "routine_b": {
            name: "課表 B (重點加強)",
            exercises: [
                { id: "gb", name: "臀橋 (Glute Bridge)", sets: 4, reps: "15-20", rest: "60s", note: "頂峰收縮臀部 1-2 秒。", image: "bridge" },
                { id: "sp", name: "肩推 (Shoulder Press)", sets: 4, reps: "12-15", rest: "90s", note: "使用啞鈴或裝水寶特瓶。核心收緊。", image: "press" },
                { id: "lr", name: "側平舉 (Lateral Raise)", sets: 3, reps: "15-20", rest: "60s", note: "手臂微彎，手肘帶動。", image: "lateral_raise" },
                { id: "dp", name: "椅子撐體 (Dips)", sets: 3, reps: "10-12", rest: "90s", note: "利用穩固椅子，訓練三頭肌。", image: "dips" },
                { id: "db", name: "死蟲式 (Dead Bug)", sets: 3, reps: "10/邊", rest: "60s", note: "核心對抗旋轉，下背貼地。", image: "deadbug" }
            ]
        },
        "cardio": {
            name: "有氧訓練",
            exercises: [
                { id: "run", name: "跑步 (Running)", sets: 1, reps: "5公里", rest: "", note: "配速約6-7分鐘/公里，保持穩定節奏。若身體不適可改為快走。", image: "running" }
            ]
        }
    }
};

const state = {
    currentPage: 'dashboard',
    selectedDay: new Date().getDay(),
    completedMeals: JSON.parse(localStorage.getItem('completedMeals')) || {},
    completedWorkouts: JSON.parse(localStorage.getItem('completedWorkouts')) || {},
    bodyLogs: JSON.parse(localStorage.getItem('bodyLogs')) || {}
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
        case 'bodylog':
            pageTitle.textContent = '身體記錄 Body Log';
            renderBodyLog();
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
            </div>
        </div>
    `;
    contentArea.innerHTML = dashboardHTML;
    updateDashboardProgress();
}

function renderNutrition() {
    const container = document.createElement('div');
    container.className = 'dashboard-grid';

    nutritionPlan.forEach(meal => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${meal.name}</h3>
            <div class="stat-label" style="margin-bottom: 1rem;">${meal.calories} kcal | P: ${meal.protein}g</div>
            <ul style="list-style: none; padding: 0;">
                ${meal.items.map((item, index) => {
            const itemId = `${meal.id}_${index}`;
            const isDone = isItemDone(itemId);
            return `
                        <li style="margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.75rem;">
                            <input type="checkbox" ${isDone ? 'checked' : ''} class="item-check" data-id="${itemId}" style="transform: scale(1.2); cursor: pointer;">
                            <span style="color: var(--text-main);">${item}</span>
                        </li>
                    `;
        }).join('')}
            </ul>
        `;
        container.appendChild(card);
    });

    contentArea.appendChild(container);
    document.querySelectorAll('.item-check').forEach(check => {
        check.addEventListener('change', (e) => {
            toggleItem(e.target.dataset.id, e.target.checked);
        });
    });
}

function renderWorkout() {
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

        const routineKey = workoutPlan.weekly_schedule[index];
        if (routineKey === 'rest') {
            content.innerHTML = `
                <div style="text-align: center; padding: 2rem;">
                    <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🧘‍♂️</div>
                    <h3 style="margin: 0;">休息日 Rest Day</h3>
                    <p style="color: var(--text-muted); margin-top: 0.5rem;">好好休息，讓肌肉生長。</p>
                </div>
            `;
        } else {
            const routine = workoutPlan.routines[routineKey];
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
                            <div style="font-size: 0.8rem; color: var(--primary);">休息: ${ex.rest}</div>
                        </div>
                    </div>
                    <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.5rem; margin-bottom: 0;">${ex.note}</p>
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
                    const h = card.querySelector('div');
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
        const todayHeader = todayCard.querySelector('div');
        if (todayHeader) todayHeader.click();
    }
}

function renderSchedule() {
    const container = document.createElement('div');
    container.className = 'card';
    container.innerHTML = `
        <h3>訓練週期規劃</h3>
        <p style="margin-bottom: 1rem; font-size: 1.1rem; font-weight: 600;">${workoutPlan.schedule_note}</p>
        <p style="margin-bottom: 2rem; color: var(--text-muted);">${workoutPlan.cycle}</p>
        <div style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 0.5rem; text-align: center;">
            <div style="font-weight: bold;">週日</div>
            <div style="font-weight: bold;">週一</div>
            <div style="font-weight: bold;">週二</div>
            <div style="font-weight: bold;">週三</div>
            <div style="font-weight: bold;">週四</div>
            <div style="font-weight: bold;">週五</div>
            <div style="font-weight: bold;">週六</div>
            <div style="background: #f0f0f0; padding: 1rem; border-radius: 8px;">休</div>
            <div style="background: #ffecec; padding: 1rem; border-radius: 8px;">A</div>
            <div style="background: #fff4e6; padding: 1rem; border-radius: 8px;">跑步</div>
            <div style="background: #eefcf6; padding: 1rem; border-radius: 8px;">B</div>
            <div style="background: #fff4e6; padding: 1rem; border-radius: 8px;">跑步</div>
            <div style="background: #ffecec; padding: 1rem; border-radius: 8px;">A</div>
            <div style="background: #f0f0f0; padding: 1rem; border-radius: 8px;">休</div>
        </div>
        <p style="margin-top: 1rem; font-size: 0.9rem; color: var(--text-muted);">* A/B 為力量訓練，跑步為有氧訓練 5 公里。</p>
    `;
    contentArea.appendChild(container);
}

function renderBodyLog() {
    contentArea.innerHTML = '';
    const card = document.createElement('div');
    card.className = 'card';

    const formSection = document.createElement('div');
    formSection.style.marginBottom = '2rem';
    formSection.innerHTML = `
        <h3 style="margin-bottom: 1rem;">記錄今日數據</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1rem;">
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

    const logs = Object.entries(state.bodyLogs).sort((a, b) => a[0].localeCompare(b[0]));
    if (logs.length > 0) {
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
                    <th style="padding: 0.5rem; text-align: center; font-weight: 600;">操作</th>
                </tr>
            </thead>
            <tbody>
                ${logs.reverse().map(([date, data]) => `
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td style="padding: 0.5rem;">${formatBodyDate(date)}</td>
                        <td style="padding: 0.5rem; text-align: center;">${data.weight} kg</td>
                        <td style="padding: 0.5rem; text-align: center;">${data.bodyFat}%</td>
                        <td style="padding: 0.5rem; text-align: center;">${data.visceralFat}</td>
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
    contentArea.appendChild(card);

    if (logs.length > 0) {
        setTimeout(() => {
            const sortedLogs = logs.sort((a, b) => a[0].localeCompare(b[0]));
            const dates = sortedLogs.map(([d]) => formatBodyDateShort(d));
            const weights = sortedLogs.map(([, data]) => data.weight);
            const bodyFats = sortedLogs.map(([, data]) => data.bodyFat);
            const visceralFats = sortedLogs.map(([, data]) => data.visceralFat);
            drawCombinedChart('combined-chart', dates, weights, bodyFats, visceralFats);
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

function drawCombinedChart(canvasId, labels, weights, bodyFats, visceralFats) {
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

    const normalizeData = (data) => {
        const min = Math.min(...data);
        const max = Math.max(...data);
        const range = max - min || 1;
        return data.map(v => ((v - min) / range) * 100);
    };

    const normalizedWeights = normalizeData(weights);
    const normalizedBodyFats = normalizeData(bodyFats);
    const normalizedVisceral = normalizeData(visceralFats);

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
        { data: normalizedWeights, color: '#2196F3', label: '體重', actualData: weights },
        { data: normalizedBodyFats, color: '#FF9800', label: '體脂率', actualData: bodyFats },
        { data: normalizedVisceral, color: '#E91E63', label: '內臟脂肪', actualData: visceralFats }
    ];

    datasets.forEach(dataset => {
        ctx.strokeStyle = dataset.color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        dataset.data.forEach((value, index) => {
            const x = padding.left + (chartWidth / (dataset.data.length - 1 || 1)) * index;
            const y = padding.top + chartHeight - (value / 100) * chartHeight;
            if (index === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        });
        ctx.stroke();

        ctx.fillStyle = dataset.color;
        dataset.data.forEach((value, index) => {
            const x = padding.left + (chartWidth / (dataset.data.length - 1 || 1)) * index;
            const y = padding.top + chartHeight - (value / 100) * chartHeight;
            ctx.beginPath();
            ctx.arc(x, y, 4, 0, Math.PI * 2);
            ctx.fill();
        });
    });

    ctx.fillStyle = '#666';
    ctx.font = '11px sans-serif';
    ctx.textAlign = 'center';
    labels.forEach((label, index) => {
        if (index % Math.ceil(labels.length / 6) === 0 || index === labels.length - 1) {
            const x = padding.left + (chartWidth / (labels.length - 1 || 1)) * index;
            ctx.fillText(label, x, height - 20);
        }
    });

    ctx.save();
    ctx.translate(15, height / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.textAlign = 'center';
    ctx.fillStyle = '#666';
    ctx.font = '12px sans-serif';
    ctx.fillText('數值', 0, 0);
    ctx.restore();

    ctx.fillStyle = '#666';
    ctx.font = '12px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('日期', width / 2, height - 5);

    const legendX = width - padding.right - 180;
    const legendY = padding.top;
    datasets.forEach((dataset, index) => {
        const y = legendY + index * 20;
        ctx.fillStyle = dataset.color;
        ctx.fillRect(legendX, y - 8, 15, 3);
        const min = Math.min(...dataset.actualData);
        const max = Math.max(...dataset.actualData);
        ctx.fillStyle = '#333';
        ctx.font = '11px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText(`${dataset.label} (${min.toFixed(1)}-${max.toFixed(1)})`, legendX + 20, y);
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
    const weight = document.getElementById('weight-input').value;
    const bodyFat = document.getElementById('bodyfat-input').value;
    const visceralFat = document.getElementById('visceralfat-input').value;

    if (!weight || !bodyFat || !visceralFat) {
        alert('請填寫所有欄位');
        return;
    }

    const today = getTodayKey();
    state.bodyLogs[today] = {
        weight: parseFloat(weight),
        bodyFat: parseFloat(bodyFat),
        visceralFat: parseFloat(visceralFat)
    };

    localStorage.setItem('bodyLogs', JSON.stringify(state.bodyLogs));
    renderBodyLog();
}

function deleteBodyLog(date) {
    if (confirm('確定要刪除此記錄嗎？')) {
        delete state.bodyLogs[date];
        localStorage.setItem('bodyLogs', JSON.stringify(state.bodyLogs));
        renderBodyLog();
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
    return nutritionPlan.reduce((total, meal) => total + meal.items.length, 0);
}

function toggleItem(id, isChecked) {
    const today = getTodayKey();
    if (!state.completedMeals[today]) {
        state.completedMeals[today] = [];
    }
    if (isChecked) {
        if (!state.completedMeals[today].includes(id)) {
            state.completedMeals[today].push(id);
        }
    } else {
        state.completedMeals[today] = state.completedMeals[today].filter(item => item !== id);
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
    const mealPercentage = Math.round((itemDoneCount / itemTotalCount) * 100);
    const nutText = document.getElementById('nutrition-progress-text');
    const nutFill = document.getElementById('nutrition-progress-fill');
    if (nutText) nutText.textContent = `${mealPercentage}%`;
    if (nutFill) nutFill.style.width = `${mealPercentage}%`;

    const dayIndex = new Date().getDay();
    const routineKey = workoutPlan.weekly_schedule[dayIndex];
    let workoutPercentage = 0;
    let workoutTextStr = "0%";
    if (routineKey === 'rest') {
        workoutTextStr = "休息日";
        workoutPercentage = 100;
    } else {
        const routine = workoutPlan.routines[routineKey];
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

init();
