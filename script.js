// ================================================================ 
// script.js — JavaScript для сайта «Цифровой двойник производства» 
// Группа А323 | Тема: Digital Twin Concept 
// ================================================================ 

// --- ФУНКЦИЯ 1: Показать / скрыть архитектуру обмена данными --- 

let isVisible = false; 

function toggleClassification() { 
    const block = document.getElementById('classificationBlock'); 
    const btn = document.getElementById('btnClassify'); 
 
    if (!isVisible) { 
        block.classList.remove('hidden');   // показываем блок
        btn.innerHTML = '&#128064; Скрыть архитектуру'; 
        isVisible = true; 
    } else { 
        block.classList.add('hidden');      // скрываем блок
        btn.innerHTML = '&#128065; Показать архитектуру'; 
        isVisible = false; 
    } 
} 

// --- ФУНКЦИЯ 2: Имитация Цифрового Двойника (Слайдер) --- 

function updateTwin() {
    const slider = document.getElementById('loadSlider');
    const valDisplay = document.getElementById('loadValue');
    const statusText = document.getElementById('statusText');
    const value = parseInt(slider.value);

    // Обновляем текстовое значение процента
    valDisplay.innerText = value + '%';

    // Логика поведения "умного" двойника
    if (value > 85) {
        statusText.innerText = "КРИТИЧЕСКИЙ УРОВЕНЬ: Высокий риск перегрева и износа компонентов!";
        statusText.style.color = "#ff4444";
        statusText.style.textShadow = "0 0 5px rgba(255, 68, 68, 0.5)";
    } else if (value < 20) {
        statusText.innerText = "НИЗКАЯ ЭФФЕКТИВНОСТЬ: Линия простаивает. Рекомендуется оптимизация.";
        statusText.style.color = "#ffbb33";
    } else {
        statusText.innerText = "Статус: Система синхронизирована. Работа в штатном режиме.";
        statusText.style.color = "#00d4ff";
        statusText.style.textShadow = "none";
    }
}

// --- ФУНКЦИЯ 3: Автоматическое логирование при загрузке --- 

window.onload = function() { 
    const now = new Date(); 
    const hours = now.getHours(); 
    let greeting = ''; 
 
    if (hours >= 6 && hours < 12) { 
        greeting = '☀️ Доброе утро!'; 
    } else if (hours >= 12 && hours < 18) { 
        greeting = '🏙️ Добрый день!'; 
    } else if (hours >= 18 && hours < 23) { 
        greeting = '🌙 Добрый вечер!'; 
    } else { 
        greeting = '🌌 Доброй ночи!'; 
    } 
 
    // Приветствие в консоли (F12 -> Console)
    console.log("%c" + greeting, "color: #00d4ff; font-size: 20px; font-weight: bold;");
    console.log("Цифровой двойник активирован: " + now.toLocaleString('ru-RU')); 
    console.log("Все системы мониторинга в норме.");
};