/* app.js */

// Global State
const state = {
    activeScreen: 'splash',
    theme: 'light',
    user: {
        name: 'Marcus Vance',
        id: 'SO-2051',
        dept: 'Municipal Safety Division',
        role: 'Safety Officer',
        email: 'm.vance@mysurucity.gov.in',
        phone: '+91 82124-56902',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=256',
        stats: {
            reports: 34,
            inspections: 112,
            alertsManaged: 489
        }
    },
    kpis: {
        totalManholes: 2540,
        activeSensors: 2315,
        activeWorkers: 184,
        criticalAlerts: 7
    },
    manholes: [
        { id: 'MH-204', location: 'Devaraja Market sewer main, Sector 2', zone: 'Central Zone', gps: [12.3090, 76.6508], status: 'warning', gas: { ch4: 38, h2s: 1.2, co: 4, o2: 20.1 }, temp: 26, water: 15, health: 87, team: 'Rescue Alpha', updated: '1 min ago' },
        { id: 'MH-118', location: 'Hebbal Industrial Sector 1, Lane B', zone: 'Industrial Zone', gps: [12.3521, 76.6082], status: 'safe', gas: { ch4: 2, h2s: 0.1, co: 1, o2: 20.9 }, temp: 22, water: 8, health: 98, team: 'Service Beta', updated: '5 mins ago' },
        { id: 'MH-456', location: 'Mysuru Palace Gate Sewer line', zone: 'Central Zone', gps: [12.3051, 76.6552], status: 'critical', gas: { ch4: 85, h2s: 12.4, co: 32, o2: 14.5 }, temp: 31, water: 54, health: 42, team: 'Hazmat Command', updated: 'Just now' },
        { id: 'MH-390', location: 'Gokulam 3rd Main Rd junction', zone: 'North Zone', gps: [12.3242, 76.6291], status: 'safe', gas: { ch4: 1, h2s: 0.2, co: 2, o2: 20.8 }, temp: 23, water: 12, health: 95, team: 'Rescue Alpha', updated: '12 mins ago' },
        { id: 'MH-101', location: 'Chamundi Hill Footroad chamber 12', zone: 'South Zone', gps: [12.2854, 76.6712], status: 'safe', gas: { ch4: 0, h2s: 0, co: 0, o2: 20.9 }, temp: 21, water: 5, health: 99, team: 'Service Beta', updated: '2 mins ago' },
        { id: 'MH-102', location: 'K.R. Hospital Circle crossover', zone: 'Central Zone', gps: [12.3082, 76.6521], status: 'safe', gas: { ch4: 2, h2s: 0.3, co: 1, o2: 20.8 }, temp: 24, water: 9, health: 97, team: 'Hazmat Command', updated: '3 mins ago' },
        { id: 'MH-105', location: 'Jayanagar Outer Ring Road line', zone: 'South Zone', gps: [12.2910, 76.6432], status: 'warning', gas: { ch4: 15, h2s: 3.1, co: 8, o2: 19.8 }, temp: 27, water: 22, health: 79, team: 'Emergency Crew', updated: '8 mins ago' },
        { id: 'MH-106', location: 'Siddhartha Layout, Tank road', zone: 'East Zone', gps: [12.3150, 76.6810], status: 'safe', gas: { ch4: 1, h2s: 0.1, co: 1, o2: 20.9 }, temp: 22, water: 11, health: 94, team: 'Rescue Alpha', updated: '9 mins ago' },
        { id: 'MH-107', location: 'Vidyaranyapuram Sewage Plant entry', zone: 'South Zone', gps: [12.2780, 76.6410], status: 'critical', gas: { ch4: 110, h2s: 18.5, co: 45, o2: 12.1 }, temp: 33, water: 72, health: 31, team: 'Emergency Crew', updated: 'Just now' },
        { id: 'MH-108', location: 'Metagalli Industrial main line', zone: 'Industrial Zone', gps: [12.3450, 76.6350], status: 'safe', gas: { ch4: 3, h2s: 0.1, co: 1, o2: 20.9 }, temp: 23, water: 6, health: 96, team: 'Service Beta', updated: '10 mins ago' }
    ],
    workers: [
        { id: 'W-01', name: 'Kushal Gowda', photo: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&q=80&w=256', dept: 'Field Maintenance', assignment: 'MH-204', ppe: { helmet: true, gloves: true, detector: true, harness: true, vest: true }, status: 'approved' },
        { id: 'W-02', name: 'Arjun Mehta', photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=256', dept: 'Gas Analytics', assignment: 'MH-105', ppe: { helmet: true, gloves: true, detector: true, harness: false, vest: true }, status: 'pending' },
        { id: 'W-03', name: 'Sanjay Rao', photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=256', dept: 'Emergency Dispatch', assignment: 'MH-456', ppe: { helmet: true, gloves: true, detector: true, harness: true, vest: true }, status: 'approved' },
        { id: 'W-04', name: 'Ravi Kumar', photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=256', dept: 'Field Maintenance', assignment: 'MH-107', ppe: { helmet: false, gloves: false, detector: true, harness: false, vest: false }, status: 'restricted' }
    ],
    alerts: [
        { id: 'A-101', severity: 'critical', category: 'Gas Leakage', sensor: 'Methane (CH4)', value: '85 ppm', location: 'MH-456', time: 'Just now', description: 'Methane level exceeded safe threshold (50 ppm).', status: 'unresolved' },
        { id: 'A-102', severity: 'critical', category: 'Oxygen Deficiency', sensor: 'Oxygen (O2)', value: '14.5%', location: 'MH-456', time: 'Just now', description: 'Oxygen volume concentration dropped below critical safety limit (19.5%).', status: 'unresolved' },
        { id: 'A-103', severity: 'warning', category: 'Water Overflow', sensor: 'Water Level', value: '22 cm', location: 'MH-105', time: '8 mins ago', description: 'High water level detected in South Sector chamber.', status: 'unresolved' },
        { id: 'A-104', severity: 'critical', category: 'Unauthorized Access', sensor: 'LID Sensor', value: 'Triggered', location: 'MH-107', time: '14 mins ago', description: 'Manhole cover open without scheduled work permit.', status: 'unresolved' }
    ],
    reports: [
        { id: 'R-249', title: 'Daily Infrastructure Health Report', type: 'Daily', date: 'June 12, 2026', size: '2.4 MB', author: 'SafeHole AI' },
        { id: 'R-248', title: 'Weekly Gas Trend and Compliance Analysis', type: 'Weekly', date: 'June 08, 2026', size: '5.8 MB', author: 'Safety Office' },
        { id: 'R-247', title: 'Monthly Safety Audit and Incident Logs', type: 'Monthly', date: 'June 01, 2026', size: '12.1 MB', author: 'Lead Inspector' }
    ],
    onboardingStep: 0,
    isLoggedIn: false,
    selectedManholeId: 'MH-204',
    monitoringFilter: 'all',
    monitoringSearch: '',
    alertFilter: 'all',
    reportMode: 'analytics'
};

let map = null;
let mapMarkers = [];

// Logger Helper
function logEvent(type, text) {
    const consoleLogs = document.getElementById('console-logs');
    if (!consoleLogs) return;

    const timeStr = new Date().toLocaleTimeString();
    let typeClass = 'log-info';
    if (type === 'WARNING') typeClass = 'log-warning';
    if (type === 'ALARM' || type === 'SOS') typeClass = 'log-alarm';

    const logHTML = `
        <div class="log-entry">
            <span class="text-neutral-500">[${timeStr}]</span>
            <span class="${typeClass} font-bold">[${type}]</span>
            <span>${text}</span>
        </div>
    `;
    consoleLogs.insertAdjacentHTML('afterbegin', logHTML);
}

// Router Navigation
function navigate(screenId) {
    state.activeScreen = screenId;
    
    // Toggle theme/no-nav wrapper classes on device mockup frame
    const phoneScreen = document.querySelector('.phone-screen');
    if (phoneScreen) {
        if (['splash', 'onboarding', 'login'].includes(screenId)) {
            phoneScreen.classList.add('no-nav');
        } else {
            phoneScreen.classList.remove('no-nav');
        }
    }

    renderActiveScreen();

    // Trigger map loading if monitoring page is shown
    if (screenId === 'monitoring') {
        setTimeout(initLeafletMap, 50);
    }
}

// Render screens in dynamic mobile viewport
function renderActiveScreen() {
    const viewport = document.getElementById('phone-viewport');
    if (!viewport) return;

    const templateFn = window.screensTemplates[state.activeScreen];
    if (templateFn) {
        viewport.innerHTML = templateFn(state);
    }

    // Update highlights in side panel selector
    document.querySelectorAll('.screen-item').forEach(item => {
        item.classList.remove('active');
        if (state.activeScreen === 'reports') {
            if (state.reportMode === 'analytics' && item.dataset.screen === 'reports') {
                item.classList.add('active');
            } else if (state.reportMode === 'docs' && item.dataset.screen === 'reports-docs') {
                item.classList.add('active');
            }
        } else if (item.dataset.screen === state.activeScreen) {
            item.classList.add('active');
        }
    });

    // Update status bar clock
    const clockEl = document.getElementById('phone-clock');
    if (clockEl) {
        const time = new Date();
        clockEl.innerText = time.getHours().toString().padStart(2, '0') + ':' + time.getMinutes().toString().padStart(2, '0');
    }
}

// Onboarding control flow
function nextOnboarding() {
    if (state.onboardingStep < 2) {
        state.onboardingStep++;
        renderActiveScreen();
    }
}

// Login verification
function handleLogin() {
    state.isLoggedIn = true;
    logEvent("INFO", `Officer ${state.user.name} logged in from SO-2051 pass.`);
    navigate('home');
}

function handleLogout() {
    state.isLoggedIn = false;
    state.onboardingStep = 0;
    logEvent("INFO", `Officer logged out. Systems locked.`);
    navigate('login');
}

// Monitoring Search and filters
function setMapFilter(status) {
    state.monitoringFilter = status;
    renderActiveScreen();
    initLeafletMap();
}

function searchManholes(query) {
    state.monitoringSearch = query;
    // Debounced or direct re-render
    const input = document.getElementById('map-search-input');
    const caretPos = input ? input.selectionStart : null;
    
    renderActiveScreen();
    initLeafletMap();
    
    // Restore input focus
    const newInput = document.getElementById('map-search-input');
    if (newInput) {
        newInput.focus();
        if (caretPos !== null) newInput.setSelectionRange(caretPos, caretPos);
    }
}

function selectAndViewManhole(id) {
    state.selectedManholeId = id;
    logEvent("INFO", `Viewing live telemetry telemetry deck for Node: ${id}`);
    navigate('detail');
}

// Alerts filtration
function setAlertFilter(category) {
    state.alertFilter = category;
    renderActiveScreen();
}

// Toggle Reports Tab submode
function toggleReportMode(mode) {
    state.reportMode = mode;
    renderActiveScreen();
}

// Theme Toggles
function toggleAppTheme(isDark) {
    state.theme = isDark ? 'dark' : 'light';
    const body = document.body;
    if (isDark) {
        body.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme');
    }
    logEvent("INFO", `Interface theme shifted to ${state.theme.toUpperCase()}`);
    renderActiveScreen();
}

// Push notification banner trigger
function triggerPushNotification(title, message) {
    const banner = document.getElementById('phone-push-banner');
    if (!banner) return;

    banner.querySelector('.push-title').innerText = title;
    banner.querySelector('.push-message').innerText = message;
    banner.classList.add('show');

    // expand dynamic island briefly
    const island = document.getElementById('dynamic-island-header');
    if (island) {
        island.classList.add('expanded');
        island.innerHTML = `
            <div class="flex items-center gap-2 text-white w-full">
                <span class="material-symbols-outlined text-red-500 animate-pulse text-[18px]">warning</span>
                <div class="text-[10px] leading-tight flex-1">
                    <p class="font-extrabold text-red-400">CRITICAL: ${title}</p>
                    <p class="truncate text-white/90">${message}</p>
                </div>
            </div>
        `;
    }

    setTimeout(() => {
        banner.classList.remove('show');
        if (island) {
            island.classList.remove('expanded');
            island.innerHTML = `
                <div class="flex items-center gap-1.5 w-full justify-between px-1">
                    <span class="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                    <span class="text-[9px] font-bold text-neutral-400">SafeHole AI</span>
                    <span class="w-1 h-1 bg-neutral-600 rounded-full"></span>
                </div>
            `;
        }
    }, 4500);
}

// IoT Simulation - Fluctuations
function fluctuateTelemetry() {
    state.manholes.forEach(mh => {
        if (mh.status === 'safe') {
            // normal fluctuations
            mh.gas.o2 = +(20.6 + Math.random() * 0.4).toFixed(1);
            mh.gas.ch4 = Math.max(0, Math.floor(mh.gas.ch4 + (Math.random() * 2 - 1)));
            mh.gas.co = Math.max(0, Math.floor(mh.gas.co + (Math.random() * 1.2 - 0.6)));
            mh.gas.h2s = +(Math.max(0, mh.gas.h2s + (Math.random() * 0.2 - 0.1))).toFixed(1);
            mh.water = Math.max(1, Math.floor(mh.water + (Math.random() * 2 - 1)));
            mh.temp = Math.max(18, Math.floor(mh.temp + (Math.random() * 1.5 - 0.7)));
        } else if (mh.status === 'warning') {
            // warning level fluctuations
            mh.gas.ch4 = Math.floor(mh.gas.ch4 + (Math.random() * 4 - 2));
            mh.gas.o2 = +(mh.gas.o2 + (Math.random() * 0.2 - 0.1)).toFixed(1);
            mh.water = Math.max(15, Math.floor(mh.water + (Math.random() * 4 - 2)));
        } else if (mh.status === 'critical') {
            // critical level spikes
            mh.gas.ch4 = Math.floor(mh.gas.ch4 + (Math.random() * 8 - 4));
            mh.gas.o2 = +(13.5 + Math.random() * 1.2).toFixed(1);
            mh.water = Math.max(50, Math.floor(mh.water + (Math.random() * 6 - 3)));
        }
    });

    // If detail page is open, update reading elements instantly in DOM
    const detailCH4 = document.getElementById('detail-ch4');
    const activeMH = state.manholes.find(m => m.id === state.selectedManholeId);
    if (detailCH4 && activeMH) {
        detailCH4.innerText = activeMH.gas.ch4;
        document.getElementById('detail-o2').innerText = activeMH.gas.o2;
        document.getElementById('detail-co').innerText = activeMH.gas.co;
        document.getElementById('detail-h2s').innerText = activeMH.gas.h2s;
        document.getElementById('detail-temp').innerText = activeMH.gas.temp;
        document.getElementById('detail-water').innerText = activeMH.gas.water;
    }

    // Refresh dashboard values if on home screen
    if (state.activeScreen === 'home') {
        const homeAlerts = document.getElementById('home-kpi-alerts');
        if (homeAlerts) {
            const critCount = state.alerts.filter(a => a.severity === 'critical' && a.status === 'unresolved').length;
            homeAlerts.innerText = critCount;
        }
    }
}

// Leaflet Map Initialization
function initLeafletMap() {
    const container = document.getElementById('map-container');
    if (!container) return;

    // Reset container if map already exists
    if (map) {
        map.remove();
        map = null;
        mapMarkers = [];
    }

    container.innerHTML = '';

    // Initialize Map at Mysuru
    map = L.map('map-container', {
        zoomControl: false,
        attributionControl: false
    }).setView([12.305, 76.645], 13);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        maxZoom: 19
    }).addTo(map);

    // Filter list
    const activeChip = state.monitoringFilter || 'all';
    const searchVal = state.monitoringSearch || '';
    
    state.manholes.forEach(mh => {
        const matchesChip = activeChip === 'all' || mh.status === activeChip;
        const matchesSearch = mh.id.toLowerCase().includes(searchVal.toLowerCase()) || mh.location.toLowerCase().includes(searchVal.toLowerCase());
        
        if (matchesChip && matchesSearch) {
            // Custom pulsing marker icon
            const customIcon = L.divIcon({
                className: 'pulsing-marker',
                html: `<div class="marker-dot ${mh.status}"></div><div class="marker-pulse ${mh.status}"></div>`,
                iconSize: [20, 20],
                iconAnchor: [10, 10]
            });

            const marker = L.marker(mh.gps, { icon: customIcon }).addTo(map);
            
            // Custom popup
            const popupHTML = `
                <div class="text-xs p-1 font-sans">
                    <div class="flex items-center gap-1.5 mb-1">
                        <b>${mh.id}</b>
                        <span class="px-1.5 py-0.5 rounded text-[8px] font-bold uppercase ${mh.status==='critical'?'bg-red-100 text-red-800':(mh.status==='warning'?'bg-amber-100 text-amber-800':'bg-emerald-100 text-emerald-800')}">${mh.status}</span>
                    </div>
                    <p class="text-[10px] text-neutral-500 mb-2 truncate max-w-[150px]">${mh.location}</p>
                    <button onclick="selectAndViewManhole('${mh.id}')" class="w-full bg-[#2E7D32] text-white py-1 rounded font-bold hover:bg-emerald-800 transition-all text-[9px] uppercase tracking-wider">Inspect Telemetry</button>
                </div>
            `;
            marker.bindPopup(popupHTML);
            mapMarkers.push({ id: mh.id, marker: marker });
        }
    });

    // Zoom controls matching UI buttons
    document.querySelectorAll('.map-placeholder button').forEach((btn, idx) => {
        btn.onclick = () => {
            if (idx === 0) map.zoomIn();
            else map.zoomOut();
        };
    });
}

// ----------------------------------------------------
// TELEMETRY SIMULATOR CONTROLS (EXTERNAL SIDEBAR)
// ----------------------------------------------------

// Trigger Gas Leak simulation from panel
function triggerGasLeak(id) {
    const mh = state.manholes.find(m => m.id === id);
    if (!mh) return;

    mh.status = 'critical';
    mh.gas.ch4 = 145; // Extreme methane spike
    mh.gas.co = 52;   // High CO
    mh.gas.o2 = 13.8; // Low oxygen
    mh.gas.h2s = 18.2;
    mh.health = 32;

    const alertId = 'A-' + (100 + state.alerts.length + 1);
    const newAlert = {
        id: alertId,
        severity: 'critical',
        category: 'Gas Leakage',
        sensor: 'Methane (CH4)',
        value: '145 ppm',
        location: mh.id,
        time: 'Just now',
        description: `Extreme gas leak detected at ${mh.id}. Methane (145 ppm), Carbon Monoxide (52 ppm). Immediate evacuation order!`,
        status: 'unresolved'
    };

    state.alerts.unshift(newAlert);
    logEvent("ALARM", `Critical methane leak detected at Node ${mh.id}. Telemetry status: RED.`);
    triggerPushNotification("Gas Hazard Alert", `Methane Spike at ${mh.id} (145 ppm). Rescue Team notified.`);
    
    // Add audio feedback
    beepSound(600, 300);
    setTimeout(() => beepSound(600, 300), 400);

    // Re-render
    renderActiveScreen();
    if (state.activeScreen === 'monitoring') {
        initLeafletMap();
    }
}

// Trigger Worker SOS fall alert
function triggerWorkerSOS(id = 'W-03') {
    const worker = state.workers.find(w => w.id === id);
    if (!worker) return;

    worker.status = 'restricted';
    worker.ppe.helmet = false;
    worker.ppe.vest = false;

    const alertId = 'A-' + (100 + state.alerts.length + 1);
    const newAlert = {
        id: alertId,
        severity: 'critical',
        category: 'Worker Emergency',
        sensor: 'Biometric Sensor / Harness',
        value: 'SOS Active',
        location: worker.assignment,
        time: 'Just now',
        description: `SOS EMERGENCY SIGNAL from safety helmet of worker ${worker.name} at ${worker.assignment}.`,
        status: 'unresolved'
    };

    state.alerts.unshift(newAlert);
    logEvent("SOS", `Biometric fall telemetry received from Safety Pass ${worker.id} (${worker.name}). Evacuation rescue sent!`);
    triggerPushNotification("Crew SOS Signal", `Officer ${worker.name} triggered Emergency SOS button!`);
    
    beepSound(400, 500);

    renderActiveScreen();
}

// Sound Simulator
function beepSound(freq, duration) {
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        
        oscillator.type = 'sine';
        oscillator.frequency.value = freq;
        gainNode.gain.setValueAtTime(0.2, audioCtx.currentTime);
        
        oscillator.start();
        setTimeout(() => {
            oscillator.stop();
            audioCtx.close();
        }, duration);
    } catch (e) {
        // AudioContext disabled or unsupported
    }
}

// Dispatch Emergency Team
function dispatchTeam(manholeId, teamName) {
    logEvent("INFO", `Dispatched ${teamName} to Manhole ${manholeId}. Priority response initiated.`);
    alert(`Emergency Dispatch Order:\n${teamName} has been routed to ${manholeId} with oxygen masks and blowers.`);
}

function triggerEmergencyCall(manholeId) {
    logEvent("WARNING", `Initiating direct voice uplink connection to municipal emergency responder dispatch.`);
    alert(`Dialing emergency safety hotline (108) from municipal radio channel...`);
}

// Acknowledge alert
function acknowledgeAlert(alertId) {
    const alert = state.alerts.find(a => a.id === alertId);
    if (alert) {
        alert.status = 'acknowledged';
        logEvent("INFO", `Alert ${alertId} acknowledged by Officer ${state.user.name}.`);
        renderActiveScreen();
    }
}

// Resolve alert
function resolveAlert(alertId) {
    const alert = state.alerts.find(a => a.id === alertId);
    if (alert) {
        // reset manhole safety parameters
        const mh = state.manholes.find(m => m.id === alert.location);
        if (mh) {
            mh.status = 'safe';
            mh.gas = { ch4: 1, h2s: 0.1, co: 2, o2: 20.8 };
            mh.health = 96;
        }
        
        // Remove alert or mark resolved
        alert.status = 'resolved';
        state.alerts = state.alerts.filter(a => a.id !== alertId);
        
        logEvent("INFO", `Hazard Resolved: ${alert.category} cleared at ${alert.location}. Zone safe.`);
        renderActiveScreen();
        if (state.activeScreen === 'monitoring') {
            initLeafletMap();
        }
    }
}

// Resolve All active alerts
function resolveAllAlerts() {
    state.alerts.forEach(alert => {
        const mh = state.manholes.find(m => m.id === alert.location);
        if (mh) {
            mh.status = 'safe';
            mh.gas = { ch4: 1, h2s: 0.1, co: 2, o2: 20.8 };
            mh.health = 98;
        }
    });
    state.alerts = [];
    logEvent("INFO", `All infrastructure hazard queues flushed. City nominal.`);
    renderActiveScreen();
    if (state.activeScreen === 'monitoring') {
        initLeafletMap();
    }
}

// Simulating telemetry from controls panel
function adjustSimulatorTelemetry(sensor, val) {
    const mh = state.manholes.find(m => m.id === state.selectedManholeId) || state.manholes[0];
    if (!mh) return;

    if (sensor === 'ch4') {
        mh.gas.ch4 = parseInt(val);
        if (mh.gas.ch4 > 50) mh.status = 'critical';
        else if (mh.gas.ch4 > 25) mh.status = 'warning';
        else mh.status = 'safe';
    } else if (sensor === 'o2') {
        mh.gas.o2 = parseFloat(val);
        if (mh.gas.o2 < 19.5) mh.status = 'critical';
        else mh.status = 'safe';
    } else if (sensor === 'water') {
        mh.water = parseInt(val);
        if (mh.water > 50) mh.status = 'critical';
        else if (mh.water > 30) mh.status = 'warning';
        else mh.status = 'safe';
    } else if (sensor === 'health') {
        mh.health = parseInt(val);
    }

    logEvent("INFO", `Manual override: Node ${mh.id} ${sensor} adjusted to ${val}.`);
    
    renderActiveScreen();
    if (state.activeScreen === 'monitoring') {
        initLeafletMap();
    }
}

// Download dynamic data exports (PDF/Excel simulation)
function downloadReport(format) {
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Manhole ID,Zone,Location,Status,Methane (CH4),Oxygen (O2),Sensor Health,Assigned Crew\n";
    
    state.manholes.forEach(mh => {
        csvContent += `"${mh.id}","${mh.zone}","${mh.location}","${mh.status}",${mh.gas.ch4},${mh.gas.o2},${mh.health},"${mh.team}"\n`;
    });
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `SafeHole_AI_Audit_${new Date().toISOString().slice(0,10)}.${format === 'excel' ? 'csv' : 'txt'}`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    logEvent("INFO", `Exported safety logs to ${format.toUpperCase()} compliance template.`);
    alert(`Export Success!\nYour safety logs compliance report has been generated and downloaded as a .${format === 'excel' ? 'csv' : 'txt'} file.`);
}

// Toggle Worker safety gear compliance
function toggleWorkerPPE(workerId, gear, checked) {
    const worker = state.workers.find(w => w.id === workerId);
    if (worker) {
        worker.ppe[gear] = checked;
        
        // Audit worker safety status
        const ppeKeys = Object.keys(worker.ppe);
        const approvedCount = ppeKeys.filter(k => worker.ppe[k]).length;
        
        if (approvedCount === 5) {
            worker.status = 'approved';
        } else if (approvedCount >= 3) {
            worker.status = 'pending';
        } else {
            worker.status = 'restricted';
            // Trigger automatic safety alert if harness or gas detector is disabled in active assignment!
            if ((gear === 'harness' || gear === 'detector') && !checked) {
                logEvent("ALARM", `PPE COMPLIANCE VIOLATION: Worker ${worker.name} removed vital safety gear (${gear}) at assignment ${worker.assignment}.`);
                triggerPushNotification("Crew Safety Violation", `${worker.name} compliance audit: RESTRICTED.`);
                beepSound(300, 200);
            }
        }
        
        logEvent("WARNING", `PPE Compliance Update: Worker ${worker.name} ${gear} state toggled to ${checked ? 'ON' : 'OFF'}. Status: ${worker.status.toUpperCase()}.`);
        
        // Re-render
        renderActiveScreen();
    }
}

// Initializer
document.addEventListener('DOMContentLoaded', () => {
    // Render initial screen
    navigate('splash');

    // Boot up IoT Simulation Ticks (runs every 3.5 seconds)
    setInterval(fluctuateTelemetry, 3500);

    // Initial console welcome log
    logEvent("INFO", "SafeHole AI smart node telemetry link established.");
    logEvent("INFO", "Connected to 148 active gas and depth sensor modules.");
});
