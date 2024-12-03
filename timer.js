function startDailyTimer() {
    function checkAndStartTimer() {
        const now = new Date();
        const start = new Date(now);
        start.setHours(8, 45, 0);
        const end = new Date(now);
        end.setHours(14, 35, 0);

        if (now >= start && now <= end) {
            const timeLeft = Math.floor((end - now) / 1000);
            startTimer(timeLeft);
        } else {
            document.querySelector('#time').textContent = "Fuera de horario escolar";
        }
    }

    function startTimer(duration) {
        let timer = duration;
        const display = document.querySelector('#time');
        
        const countdown = setInterval(function () {
            const hours = Math.floor(timer / 3600);
            const minutes = Math.floor((timer % 3600) / 60);
            const seconds = timer % 60;

            display.textContent = 
                (hours > 0 ? hours + ":" : "") +
                (minutes < 10 ? "0" + minutes : minutes) + ":" +
                (seconds < 10 ? "0" + seconds : seconds);

            if (--timer < 0) {
                clearInterval(countdown);
                display.textContent = "Fin del horario escolar";
            }
        }, 1000);
    }

    // Comprobar cada minuto si estamos en horario escolar
    setInterval(checkAndStartTimer, 60000);
    checkAndStartTimer(); // Comprobar inmediatamente al cargar
}

window.onload = startDailyTimer;