export const userProfile = {
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

export const nutritionPlan = [
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

export const workoutPlan = {
    schedule: "每週訓練 3-4 天 (建議：一、三、五 或 二、四、六)",
    cycle: "8-12 週 (之後安排 1 週減量期)",
    routines: [
        {
            id: "routine_a",
            name: "課表 A (全身訓練)",
            exercises: [
                {
                    name: "深蹲 (Squats)",
                    sets: 4,
                    reps: "12-15",
                    rest: "90s",
                    note: "徒手或手持重物。保持背部挺直，核心收緊。",
                    image: "squat"
                },
                {
                    name: "伏地挺身 (Push-ups)",
                    sets: 4,
                    reps: "10-15",
                    rest: "90s",
                    note: "若太難可改為跪姿。胸口貼近地面。",
                    image: "pushup"
                },
                {
                    name: "弓箭步 (Lunges)",
                    sets: 3,
                    reps: "12/邊",
                    rest: "60s",
                    note: "左右腳交替。膝蓋不超過腳尖。",
                    image: "lunge"
                },
                {
                    name: "啞鈴/水瓶划船 (Dumbbell Row)",
                    sets: 4,
                    reps: "12-15",
                    rest: "60s",
                    note: "單手支撐椅面，背部打平。",
                    image: "row"
                },
                {
                    name: "平板支撐 (Plank)",
                    sets: 3,
                    reps: "45-60s",
                    rest: "60s",
                    note: "保持身體一直線，不塌腰。",
                    image: "plank"
                }
            ]
        },
        {
            id: "routine_b",
            name: "課表 B (重點加強)",
            exercises: [
                {
                    name: "臀橋 (Glute Bridge)",
                    sets: 4,
                    reps: "15-20",
                    rest: "60s",
                    note: "頂峰收縮臀部 1-2 秒。",
                    image: "bridge"
                },
                {
                    name: "肩推 (Shoulder Press)",
                    sets: 4,
                    reps: "12-15",
                    rest: "90s",
                    note: "使用啞鈴或裝水寶特瓶。核心收緊。",
                    image: "press"
                },
                {
                    name: "側平舉 (Lateral Raise)",
                    sets: 3,
                    reps: "15-20",
                    rest: "60s",
                    note: "手臂微彎，手肘帶動。",
                    image: "lateral_raise"
                },
                {
                    name: "椅子撐體 (Dips)",
                    sets: 3,
                    reps: "10-12",
                    rest: "90s",
                    note: "利用穩固椅子，訓練三頭肌。",
                    image: "dips"
                },
                {
                    name: "死蟲式 (Dead Bug)",
                    sets: 3,
                    reps: "10/邊",
                    rest: "60s",
                    note: "核心對抗旋轉，下背貼地。",
                    image: "deadbug"
                }
            ]
        }
    ]
};
