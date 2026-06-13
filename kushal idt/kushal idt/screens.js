/* screens.js */

// Helper: Status badge generator
function getStatusBadge(status) {
    if (status === 'safe' || status === 'approved') {
        return `<span class="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400 text-[11px] font-bold uppercase tracking-wider flex items-center gap-1"><span class="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>Safe</span>`;
    } else if (status === 'warning' || status === 'pending') {
        return `<span class="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400 text-[11px] font-bold uppercase tracking-wider flex items-center gap-1"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>Warning</span>`;
    } else {
        return `<span class="px-2.5 py-0.5 rounded-full bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400 text-[11px] font-bold uppercase tracking-wider flex items-center gap-1 alert-pulse"><span class="w-1.5 h-1.5 bg-red-500 rounded-full animate-ping"></span>Critical</span>`;
    }
}

// Helper: Navigation bar generator
function getBottomNav(activeTab) {
    return `
    <nav class="custom-bottom-nav">
        <div class="nav-tab ${activeTab === 'home' ? 'active' : ''}" onclick="navigate('home')">
            <span class="material-symbols-outlined tab-icon">home</span>
            <span>Home</span>
        </div>
        <div class="nav-tab ${activeTab === 'monitoring' ? 'active' : ''}" onclick="navigate('monitoring')">
            <span class="material-symbols-outlined tab-icon">map</span>
            <span>Monitor</span>
        </div>
        <div class="nav-tab ${activeTab === 'alerts' ? 'active' : ''}" onclick="navigate('alerts')">
            <span class="material-symbols-outlined tab-icon">notifications</span>
            <span>Alerts</span>
        </div>
        <div class="nav-tab ${activeTab === 'reports' ? 'active' : ''}" onclick="navigate('reports')">
            <span class="material-symbols-outlined tab-icon">analytics</span>
            <span>Reports</span>
        </div>
        <div class="nav-tab ${activeTab === 'profile' ? 'active' : ''}" onclick="navigate('profile')">
            <span class="material-symbols-outlined tab-icon">person</span>
            <span>Profile</span>
        </div>
    </nav>
    `;
}

// Helper: Custom Screen Header
function getScreenHeader(title, showBack = false, backTarget = 'home', actionsHTML = '') {
    return `
    <header class="custom-header">
        <div class="flex items-center gap-2">
            ${showBack ? `
            <button class="p-1 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full active:scale-95 transition-all text-neutral-600 dark:text-neutral-300" onclick="navigate('${backTarget}')">
                <span class="material-symbols-outlined">arrow_back</span>
            </button>
            ` : ''}
            <h1 class="text-[18px] font-bold text-neutral-800 dark:text-neutral-100">${title}</h1>
        </div>
        <div class="flex items-center gap-1">
            ${actionsHTML}
        </div>
    </header>
    `;
}

const screens = {
    // 1. SPLASH SCREEN
    splash: (state) => {
        return `
        <div class="flex flex-col items-center justify-between h-full px-6 py-12 text-center select-none" style="background: linear-gradient(135deg, #1b5e20 0%, #2E7D32 100%);">
            <div></div>
            <div class="flex flex-col items-center animate-fade-in">
                <!-- SafeHole Logo Shield -->
                <div class="w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-2xl mb-6 relative">
                    <span class="material-symbols-outlined text-[64px] text-[#2E7D32]" style="font-variation-settings: 'FILL' 1;">security</span>
                    <span class="material-symbols-outlined text-[36px] text-[#4CAF50] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style="font-variation-settings: 'FILL' 0;">sensors</span>
                    <!-- Wave rings -->
                    <div class="absolute inset-0 rounded-full border-2 border-white/30 animate-ping" style="animation-duration: 3s;"></div>
                </div>
                <h1 class="text-3xl font-extrabold text-white tracking-tight">SafeHole AI</h1>
                <p class="text-[13px] font-semibold text-emerald-100 tracking-widest uppercase mt-2 opacity-95">Smart Monitoring. Safer Workers.</p>
            </div>
            
            <div class="w-full max-w-xs space-y-6 flex flex-col items-center">
                <!-- Loading animation -->
                <div class="w-full bg-emerald-900/40 h-1.5 rounded-full overflow-hidden">
                    <div class="bg-emerald-300 h-full w-2/3 rounded-full animate-[pulse_1.5s_infinite]" style="width: 100%; animation: loading-progress 2s infinite linear;"></div>
                </div>
                <button onclick="navigate('onboarding')" class="w-full bg-white text-[#2E7D32] hover:bg-emerald-50 active:scale-[0.98] py-3.5 rounded-xl font-bold shadow-lg transition-all flex items-center justify-center gap-2">
                    Get Started
                    <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
            </div>
        </div>
        <style>
            @keyframes loading-progress {
                0% { transform: translateX(-100%); }
                100% { transform: translateX(100%); }
            }
        </style>
        `;
    },

    // 2. ONBOARDING SCREEN
    onboarding: (state) => {
        const slides = [
            {
                title: "Real-Time IoT Monitoring",
                desc: "Geospatial tracking of manholes with active smart sensors. Instantly detect hazardous gas leaks, water levels, and temperature spikes.",
                icon: "distance",
                color: "#2E7D32"
            },
            {
                title: "Worker Safety First",
                desc: "Verify safety gear, monitor vitals, and track field teams. If an accident occurs, workers can broadcast immediate SOS alerts.",
                icon: "health_and_safety",
                color: "#4CAF50"
            },
            {
                title: "AI-Powered Early Warnings",
                desc: "Predict hazards using advanced gas trend analysis. Get notified instantly before situations escalate to critical danger levels.",
                icon: "psychology",
                color: "#A5D6A7"
            }
        ];
        
        const currentSlide = slides[state.onboardingStep];
        
        return `
        <div class="flex flex-col justify-between h-full px-6 py-12 bg-white dark:bg-[#121212] select-none">
            <div class="flex justify-between items-center">
                <span class="text-label-md font-bold text-neutral-400">0${state.onboardingStep + 1} / 03</span>
                ${state.onboardingStep < 2 ? `
                <button onclick="navigate('login')" class="text-neutral-500 dark:text-neutral-400 font-bold hover:text-emerald-700 dark:hover:text-emerald-400 text-sm">Skip</button>
                ` : ''}
            </div>

            <div class="my-auto flex flex-col items-center text-center space-y-6">
                <!-- Large Onboarding Graphic -->
                <div class="w-48 h-48 rounded-full bg-emerald-50 dark:bg-emerald-950/20 flex items-center justify-center mb-6 shadow-inner relative">
                    <span class="material-symbols-outlined text-[86px]" style="color: #2E7D32; font-variation-settings: 'FILL' 0;">${currentSlide.icon}</span>
                    <div class="absolute inset-0 rounded-full border border-emerald-500/10 scale-110"></div>
                </div>
                
                <h2 class="text-2xl font-extrabold text-neutral-800 dark:text-neutral-100">${currentSlide.title}</h2>
                <p class="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed px-2">${currentSlide.desc}</p>
            </div>

            <div class="space-y-6">
                <!-- Step Dots -->
                <div class="flex justify-center gap-2">
                    <div class="h-1.5 rounded-full transition-all duration-300 ${state.onboardingStep === 0 ? 'w-8 bg-[#2E7D32]' : 'w-2 bg-neutral-300 dark:bg-neutral-700'}"></div>
                    <div class="h-1.5 rounded-full transition-all duration-300 ${state.onboardingStep === 1 ? 'w-8 bg-[#2E7D32]' : 'w-2 bg-neutral-300 dark:bg-neutral-700'}"></div>
                    <div class="h-1.5 rounded-full transition-all duration-300 ${state.onboardingStep === 2 ? 'w-8 bg-[#2E7D32]' : 'w-2 bg-neutral-300 dark:bg-neutral-700'}"></div>
                </div>

                <!-- Navigation Button -->
                ${state.onboardingStep < 2 ? `
                <button onclick="nextOnboarding()" class="w-full bg-[#2E7D32] hover:bg-[#1B5E20] active:scale-[0.98] text-white py-3.5 rounded-xl font-bold shadow-lg transition-all flex items-center justify-center gap-2">
                    Next
                    <span class="material-symbols-outlined text-[18px]">chevron_right</span>
                </button>
                ` : `
                <button onclick="navigate('login')" class="w-full bg-[#2E7D32] hover:bg-[#1B5E20] active:scale-[0.98] text-white py-3.5 rounded-xl font-bold shadow-lg transition-all flex items-center justify-center gap-2">
                    Get Started
                    <span class="material-symbols-outlined text-[18px]">login</span>
                </button>
                `}
            </div>
        </div>
        `;
    },

    // 3. LOGIN SCREEN
    login: (state) => {
        return `
        <div class="flex flex-col justify-between h-full px-6 py-10 bg-neutral-50 dark:bg-[#121212]">
            <div class="flex items-center gap-2 py-4">
                <span class="material-symbols-outlined text-3xl text-[#2E7D32]">security</span>
                <span class="text-xl font-bold tracking-tight text-neutral-800 dark:text-neutral-100">SafeHole AI</span>
            </div>

            <div class="my-auto space-y-6">
                <div>
                    <h2 class="text-2xl font-extrabold text-neutral-800 dark:text-neutral-100">Welcome Back</h2>
                    <p class="text-sm text-neutral-500 dark:text-neutral-400 mt-1">Sign in to monitor city safety channels.</p>
                </div>

                <div class="space-y-4">
                    <div>
                        <label class="block text-xs font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-2">Email Address</label>
                        <div class="relative">
                            <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 text-[20px]">mail</span>
                            <input type="email" id="login-email" value="marcus.vance@smartcity.gov" class="w-full pl-10 pr-4 py-3 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:text-neutral-200" placeholder="Enter your email">
                        </div>
                    </div>
                    
                    <div>
                        <label class="block text-xs font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-2">Password</label>
                        <div class="relative">
                            <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 text-[20px]">lock</span>
                            <input type="password" id="login-password" value="password123" class="w-full pl-10 pr-10 py-3 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:text-neutral-200" placeholder="Enter your password">
                            <span class="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 text-[20px] cursor-pointer">visibility</span>
                        </div>
                    </div>

                    <div class="flex justify-between items-center text-xs">
                        <label class="flex items-center gap-2 text-neutral-500 dark:text-neutral-400 cursor-pointer">
                            <input type="checkbox" checked class="rounded border-neutral-300 text-emerald-600 focus:ring-emerald-500">
                            Remember Me
                        </label>
                        <a href="#" class="text-[#2E7D32] hover:underline font-bold">Forgot Password?</a>
                    </div>
                </div>

                <button onclick="handleLogin()" class="w-full bg-[#2E7D32] hover:bg-[#1B5E20] active:scale-[0.98] text-white py-3.5 rounded-xl font-bold shadow-lg transition-all flex items-center justify-center gap-2">
                    Login
                    <span class="material-symbols-outlined text-[18px]">login</span>
                </button>

                <div class="relative flex items-center justify-center">
                    <div class="absolute inset-0 flex items-center">
                        <div class="w-full border-t border-neutral-200 dark:border-neutral-800"></div>
                    </div>
                    <span class="relative px-3 bg-neutral-50 dark:bg-[#121212] text-xs text-neutral-400 uppercase font-bold tracking-wider">Or continue with</span>
                </div>

                <div class="grid grid-cols-2 gap-3">
                    <button onclick="handleLogin()" class="flex items-center justify-center gap-2 py-2.5 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-800 active:scale-[0.98] transition-all text-xs font-bold text-neutral-600 dark:text-neutral-300">
                        <svg class="w-4 h-4" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22c-.62-.62-1.09-1.39-1.21-2.21z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/></svg>
                        Google
                    </button>
                    <button onclick="handleLogin()" class="flex items-center justify-center gap-2 py-2.5 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-800 active:scale-[0.98] transition-all text-xs font-bold text-neutral-600 dark:text-neutral-300">
                        <svg class="w-4 h-4" viewBox="0 0 23 23"><path fill="#f35325" d="M0 0h11v11H0z"/><path fill="#81bc06" d="M12 0h11v11H12z"/><path fill="#05a6f0" d="M0 12h11v11H0z"/><path fill="#ffba08" d="M12 12h11v11H12z"/></svg>
                        Microsoft
                    </button>
                </div>
            </div>

            <div class="text-center text-xs text-neutral-500 dark:text-neutral-400 py-4">
                Don't have an account? <a href="#" class="text-[#2E7D32] hover:underline font-bold">Create Account</a>
            </div>
        </div>
        `;
    },

    // 4. HOME DASHBOARD
    home: (state) => {
        // Find if we have critical alerts active
        const criticalCount = state.alerts.filter(a => a.severity === 'critical' && a.status === 'unresolved').length;
        const warningCount = state.alerts.filter(a => a.severity === 'warning' && a.status === 'unresolved').length;
        const totalAlerts = criticalCount + warningCount;
        
        return `
        <div class="relative min-h-full pb-20">
            <!-- Header bar -->
            <header class="bg-[#2E7D32] text-white px-5 py-6 rounded-b-[28px] shadow-lg relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-tr from-emerald-800/40 to-transparent pointer-events-none"></div>
                <div class="flex justify-between items-start z-10 relative">
                    <div>
                        <span class="text-emerald-200 text-xs font-bold uppercase tracking-widest">SafeHole AI Command</span>
                        <h2 class="text-xl font-extrabold mt-1">Hello, ${state.user.name.split(' ')[0]}</h2>
                        <p class="text-xs text-emerald-100/80 mt-0.5">Municipal Safety Officer • ${state.user.id}</p>
                    </div>
                    <div class="w-11 h-11 rounded-full border-2 border-emerald-300 overflow-hidden cursor-pointer" onclick="navigate('profile')">
                        <img src="${state.user.avatar}" class="w-full h-full object-cover">
                    </div>
                </div>
                
                <!-- System status pill -->
                <div class="mt-6 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10 flex items-center justify-between">
                    <div class="flex items-center gap-2.5">
                        <span class="relative flex h-2 w-2">
                            <span class="animate-ping absolute inline-flex h-full w-full rounded-full ${criticalCount > 0 ? 'bg-red-400' : 'bg-emerald-400'} opacity-75"></span>
                            <span class="relative inline-flex rounded-full h-2 w-2 ${criticalCount > 0 ? 'bg-red-500' : 'bg-emerald-500'}"></span>
                        </span>
                        <span class="text-xs font-bold text-white uppercase tracking-wider">
                            ${criticalCount > 0 ? `${criticalCount} Urgent Hazards Detected` : 'All City Systems Nominal'}
                        </span>
                    </div>
                    <span class="text-[10px] text-emerald-200 font-bold uppercase">100% Connected</span>
                </div>
            </header>

            <div class="px-4 py-5 space-y-6">
                <!-- KPI Statistics -->
                <div class="grid grid-cols-2 gap-3">
                    <div class="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800/60 p-4 rounded-2xl flex flex-col justify-between shadow-sm relative overflow-hidden">
                        <div class="flex justify-between items-center mb-1">
                            <span class="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">Total Manholes</span>
                            <span class="material-symbols-outlined text-emerald-600 dark:text-emerald-400 text-[20px]">settings_input_component</span>
                        </div>
                        <div>
                            <span class="text-2xl font-extrabold text-neutral-800 dark:text-neutral-100">${state.kpis.totalManholes}</span>
                            <span class="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold block mt-0.5">Mysuru Network</span>
                        </div>
                    </div>

                    <div class="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800/60 p-4 rounded-2xl flex flex-col justify-between shadow-sm">
                        <div class="flex justify-between items-center mb-1">
                            <span class="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">Active Sensors</span>
                            <span class="material-symbols-outlined text-[#4CAF50] text-[20px]">sensors</span>
                        </div>
                        <div>
                            <span class="text-2xl font-extrabold text-neutral-800 dark:text-neutral-100">${state.kpis.activeSensors}</span>
                            <span class="text-[10px] text-[#4CAF50] font-semibold block mt-0.5">Uplink Nominal</span>
                        </div>
                    </div>

                    <div class="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800/60 p-4 rounded-2xl flex flex-col justify-between shadow-sm">
                        <div class="flex justify-between items-center mb-1">
                            <span class="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">Active Workers</span>
                            <span class="material-symbols-outlined text-sky-600 dark:text-sky-400 text-[20px]">engineering</span>
                        </div>
                        <div>
                            <span class="text-2xl font-extrabold text-neutral-800 dark:text-neutral-100" id="home-kpi-workers">${state.kpis.activeWorkers}</span>
                            <span onclick="navigate('worker_safety')" class="text-[10px] text-sky-600 dark:text-sky-400 font-bold block mt-0.5 hover:underline cursor-pointer">Live Safety Feed →</span>
                        </div>
                    </div>

                    <div class="p-4 rounded-2xl flex flex-col justify-between shadow-sm border ${criticalCount > 0 ? 'bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-900/30 text-red-900 dark:text-red-200 alert-pulse' : 'bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800/60'}" id="kpi-critical-card">
                        <div class="flex justify-between items-center mb-1">
                            <span class="text-[11px] font-bold uppercase tracking-wider ${criticalCount > 0 ? 'text-red-600' : 'text-neutral-400'}">Critical Alerts</span>
                            <span class="material-symbols-outlined text-[20px] ${criticalCount > 0 ? 'text-red-600 animate-bounce' : 'text-neutral-400'}" style="font-variation-settings: 'FILL' 1;">warning</span>
                        </div>
                        <div>
                            <span class="text-2xl font-extrabold text-neutral-800 dark:text-neutral-100" id="home-kpi-alerts">${criticalCount}</span>
                            <span onclick="navigate('alerts')" class="text-[10px] font-bold block mt-0.5 hover:underline cursor-pointer ${criticalCount > 0 ? 'text-red-600 dark:text-red-400' : 'text-neutral-400'}">Acknowledge Inbox →</span>
                        </div>
                    </div>
                </div>

                <!-- Quick Actions Bento -->
                <div>
                    <h3 class="text-sm font-extrabold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider mb-3">Quick Actions</h3>
                    <div class="grid grid-cols-4 gap-2.5">
                        <div onclick="navigate('monitoring')" class="flex flex-col items-center justify-center p-3 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800/60 rounded-2xl hover-scale cursor-pointer text-center">
                            <span class="material-symbols-outlined text-[24px] text-[#2E7D32]" style="font-variation-settings: 'FILL' 1;">map</span>
                            <span class="text-[10px] font-bold text-neutral-600 dark:text-neutral-300 mt-2">Map View</span>
                        </div>
                        <div onclick="navigate('worker_safety')" class="flex flex-col items-center justify-center p-3 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800/60 rounded-2xl hover-scale cursor-pointer text-center">
                            <span class="material-symbols-outlined text-[24px] text-sky-600" style="font-variation-settings: 'FILL' 1;">health_and_safety</span>
                            <span class="text-[10px] font-bold text-neutral-600 dark:text-neutral-300 mt-2">Workers</span>
                        </div>
                        <div onclick="navigate('alerts')" class="flex flex-col items-center justify-center p-3 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800/60 rounded-2xl hover-scale cursor-pointer text-center">
                            <span class="material-symbols-outlined text-[24px] text-red-600" style="font-variation-settings: 'FILL' 1;">campaign</span>
                            <span class="text-[10px] font-bold text-neutral-600 dark:text-neutral-300 mt-2">Alerts</span>
                        </div>
                        <div onclick="navigate('reports')" class="flex flex-col items-center justify-center p-3 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800/60 rounded-2xl hover-scale cursor-pointer text-center">
                            <span class="material-symbols-outlined text-[24px] text-amber-600" style="font-variation-settings: 'FILL' 1;">analytics</span>
                            <span class="text-[10px] font-bold text-neutral-600 dark:text-neutral-300 mt-2">Reports</span>
                        </div>
                    </div>
                </div>

                <!-- Network Health Overview -->
                <div class="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800/60 p-4 rounded-2xl shadow-sm">
                    <h3 class="text-sm font-extrabold text-neutral-800 dark:text-neutral-100 mb-3">Live Network Status</h3>
                    
                    <div class="flex items-center justify-between mb-4">
                        <div class="flex items-center gap-2">
                            <span class="w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white dark:border-neutral-900 shadow-sm"></span>
                            <span class="text-xs font-bold text-neutral-600 dark:text-neutral-400">Safe: <span class="text-neutral-800 dark:text-neutral-100 font-extrabold">${state.manholes.filter(m => m.status === 'safe').length}</span></span>
                        </div>
                        <div class="flex items-center gap-2">
                            <span class="w-3.5 h-3.5 bg-amber-500 rounded-full border-2 border-white dark:border-neutral-900 shadow-sm"></span>
                            <span class="text-xs font-bold text-neutral-600 dark:text-neutral-400">Warning: <span class="text-neutral-800 dark:text-neutral-100 font-extrabold">${state.manholes.filter(m => m.status === 'warning').length}</span></span>
                        </div>
                        <div class="flex items-center gap-2">
                            <span class="w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white dark:border-neutral-900 shadow-sm animate-pulse"></span>
                            <span class="text-xs font-bold text-neutral-600 dark:text-neutral-400">Critical: <span class="text-neutral-800 dark:text-neutral-100 font-extrabold text-red-600">${state.manholes.filter(m => m.status === 'critical').length}</span></span>
                        </div>
                    </div>
                    
                    <!-- Progress visualizer -->
                    <div class="w-full h-3 rounded-full bg-neutral-100 dark:bg-neutral-800 overflow-hidden flex">
                        <div class="bg-emerald-500 h-full" style="width: ${(state.manholes.filter(m => m.status === 'safe').length / state.manholes.length) * 100}%"></div>
                        <div class="bg-amber-500 h-full" style="width: ${(state.manholes.filter(m => m.status === 'warning').length / state.manholes.length) * 100}%"></div>
                        <div class="bg-red-500 h-full animate-pulse" style="width: ${(state.manholes.filter(m => m.status === 'critical').length / state.manholes.length) * 100}%"></div>
                    </div>
                </div>

                <!-- Recent Activity Feed -->
                <div class="space-y-3">
                    <div class="flex justify-between items-center">
                        <h3 class="text-sm font-extrabold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider">Recent Live Activity</h3>
                        <button onclick="navigate('alerts')" class="text-emerald-700 dark:text-emerald-400 text-xs font-bold hover:underline">View Inbox</button>
                    </div>
                    
                    <div class="space-y-2.5" id="home-activity-feed">
                        ${state.alerts.slice(0, 3).map(alert => `
                        <div class="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800/60 p-3 rounded-xl flex items-start gap-3 shadow-sm hover:border-neutral-300 dark:hover:border-neutral-700 transition-all">
                            <span class="material-symbols-outlined text-[20px] p-1.5 rounded-lg shrink-0 mt-0.5 ${alert.severity === 'critical' ? 'bg-red-50 text-red-500 dark:bg-red-950/20' : 'bg-amber-50 text-amber-500 dark:bg-amber-950/20'}" style="font-variation-settings: 'FILL' 1;">
                                ${alert.severity === 'critical' ? 'dangerous' : 'warning'}
                            </span>
                            <div class="flex-1 min-w-0">
                                <p class="text-xs font-extrabold text-neutral-800 dark:text-neutral-100 truncate">${alert.category} at ${alert.location}</p>
                                <p class="text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5 truncate">${alert.description}</p>
                                <span class="text-[9px] font-bold text-neutral-400 uppercase tracking-wider block mt-1">${alert.time}</span>
                            </div>
                        </div>
                        `).join('')}
                    </div>
                </div>
            </div>

            <!-- Bottom Navigation Bar inside mobile mockup -->
            ${getBottomNav('home')}
        </div>
        `;
    },

    // 5. MONITORING SCREEN
    monitoring: (state) => {
        // Chip state configuration
        const activeChip = state.monitoringFilter || 'all';
        const searchVal = state.monitoringSearch || '';
        
        // Filter manholes list based on filters
        const filteredManholes = state.manholes.filter(m => {
            const matchesChip = activeChip === 'all' || m.status === activeChip;
            const matchesSearch = m.id.toLowerCase().includes(searchVal.toLowerCase()) || m.location.toLowerCase().includes(searchVal.toLowerCase());
            return matchesChip && matchesSearch;
        });

        return `
        <div class="relative min-h-full pb-20">
            ${getScreenHeader("Live Geospatial Map", false, 'home', `
                <button class="w-8 h-8 rounded-full flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-300" onclick="alert('Map Settings: Overlay toggled')">
                    <span class="material-symbols-outlined text-[20px]">layers</span>
                </button>
            `)}

            <!-- Map View Section -->
            <div class="map-placeholder shadow-sm rounded-none border-x-0">
                <div id="map-container" class="w-full h-full bg-emerald-50 dark:bg-neutral-900 flex items-center justify-center text-center">
                    <!-- Standard Fallback display before Leaflet mounts -->
                    <div class="p-6 text-neutral-500">
                        <span class="material-symbols-outlined text-4xl animate-bounce text-emerald-600">location_on</span>
                        <p class="text-xs font-bold mt-2">Loading Real-Time Map Uplink...</p>
                        <p class="text-[10px] text-neutral-400 mt-1">Mysuru Infrastructure Operations</p>
                    </div>
                </div>
            </div>

            <!-- Search and Filter Bar -->
            <div class="px-4 py-4 space-y-3 bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800/60 sticky top-[56px] z-10">
                <div class="relative">
                    <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 text-[20px]">search</span>
                    <input type="text" id="map-search-input" value="${searchVal}" oninput="searchManholes(this.value)" class="w-full pl-10 pr-10 py-2.5 bg-neutral-50 dark:bg-neutral-800 border-none rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:text-neutral-200" placeholder="Search Manhole ID, location, area...">
                    ${searchVal ? `
                    <span class="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 text-[18px] cursor-pointer hover:text-neutral-600" onclick="searchManholes('')">close</span>
                    ` : ''}
                </div>

                <div class="flex gap-2 overflow-x-auto pb-1 select-none scrollbar-none">
                    <button onclick="setMapFilter('all')" class="px-4 py-1.5 rounded-full text-[11px] font-bold shrink-0 transition-all ${activeChip === 'all' ? 'bg-[#2E7D32] text-white' : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400'}">All (${state.manholes.length})</button>
                    <button onclick="setMapFilter('safe')" class="px-4 py-1.5 rounded-full text-[11px] font-bold shrink-0 transition-all ${activeChip === 'safe' ? 'bg-emerald-600 text-white' : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400'}">Safe (${state.manholes.filter(m=>m.status==='safe').length})</button>
                    <button onclick="setMapFilter('warning')" class="px-4 py-1.5 rounded-full text-[11px] font-bold shrink-0 transition-all ${activeChip === 'warning' ? 'bg-amber-500 text-white' : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400'}">Warning (${state.manholes.filter(m=>m.status==='warning').length})</button>
                    <button onclick="setMapFilter('critical')" class="px-4 py-1.5 rounded-full text-[11px] font-bold shrink-0 transition-all ${activeChip === 'critical' ? 'bg-red-500 text-white' : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400'}">Critical (${state.manholes.filter(m=>m.status==='critical').length})</button>
                </div>
            </div>

            <!-- Scrollable Cards -->
            <div class="px-4 py-4 space-y-3" id="map-cards-container">
                ${filteredManholes.length === 0 ? `
                <div class="text-center p-8 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800/60 rounded-2xl text-neutral-400 text-xs">
                    <span class="material-symbols-outlined text-3xl mb-1">help_center</span>
                    <p class="font-bold">No manhole sensors found matching criteria.</p>
                </div>
                ` : filteredManholes.map(mh => `
                <div onclick="selectAndViewManhole('${mh.id}')" class="bg-white dark:bg-neutral-900 border ${mh.status === 'critical' ? 'border-red-300 dark:border-red-950/30' : 'border-neutral-200 dark:border-neutral-800/60'} hover:border-emerald-500 dark:hover:border-emerald-500 p-4 rounded-2xl shadow-sm transition-all cursor-pointer flex flex-col gap-3">
                    <div class="flex justify-between items-start">
                        <div>
                            <div class="flex items-center gap-2">
                                <span class="text-sm font-extrabold text-neutral-800 dark:text-neutral-100">${mh.id}</span>
                                ${getStatusBadge(mh.status)}
                            </div>
                            <span class="text-[11px] text-neutral-400 dark:text-neutral-500 mt-1 block truncate w-48">${mh.location}</span>
                        </div>
                        <div class="flex flex-col items-end">
                            <span class="text-[11px] text-neutral-400 dark:text-neutral-500">${mh.updated}</span>
                            <span class="text-[9px] font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-300 mt-1">${mh.team}</span>
                        </div>
                    </div>
                    
                    <!-- Grid reading values -->
                    <div class="grid grid-cols-3 gap-2 bg-neutral-50 dark:bg-neutral-800/40 p-2.5 rounded-xl border border-neutral-100 dark:border-neutral-800/50">
                        <div class="text-center">
                            <span class="text-[9px] font-bold text-neutral-400 dark:text-neutral-500 uppercase block">O2 Level</span>
                            <span class="text-[11px] font-extrabold ${mh.gas.o2 < 19.5 ? 'text-red-500 animate-pulse' : 'text-emerald-600 dark:text-emerald-400'}">${mh.gas.o2}%</span>
                        </div>
                        <div class="text-center">
                            <span class="text-[9px] font-bold text-neutral-400 dark:text-neutral-500 uppercase block">Methane</span>
                            <span class="text-[11px] font-extrabold ${mh.gas.ch4 > 50 ? 'text-red-500' : mh.gas.ch4 > 25 ? 'text-amber-500' : 'text-neutral-700 dark:text-neutral-300'}">${mh.gas.ch4} ppm</span>
                        </div>
                        <div class="text-center">
                            <span class="text-[9px] font-bold text-neutral-400 dark:text-neutral-500 uppercase block">Sensor Health</span>
                            <span class="text-[11px] font-extrabold ${mh.health < 60 ? 'text-red-500' : 'text-[#4CAF50]'}">${mh.health}%</span>
                        </div>
                    </div>
                </div>
                `).join('')}
            </div>

            <!-- Bottom Navigation Bar -->
            ${getBottomNav('monitoring')}
        </div>
        `;
    },

    // 6. MANHOLE DETAIL SCREEN (MH-204)
    detail: (state) => {
        // Find manhole in state
        const mh = state.manholes.find(m => m.id === state.selectedManholeId) || state.manholes[0];
        const criticalCount = state.alerts.filter(a => a.severity === 'critical' && a.location === mh.id && a.status === 'unresolved').length;
        
        return `
        <div class="relative min-h-full pb-32">
            ${getScreenHeader(`Sensor Node: ${mh.id}`, true, 'monitoring', `
                <button class="w-8 h-8 rounded-full flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-300" onclick="simulateGasSpike('${mh.id}')">
                    <span class="material-symbols-outlined text-[20px] text-red-500">dangerous</span>
                </button>
            `)}

            <!-- Alert banner in detail screen -->
            ${criticalCount > 0 ? `
            <div class="mx-4 mt-4 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/30 p-4 rounded-2xl flex items-start gap-3 alert-pulse">
                <span class="material-symbols-outlined text-red-500" style="font-variation-settings: 'FILL' 1;">warning</span>
                <div>
                    <h4 class="text-xs font-extrabold text-red-800 dark:text-red-400 uppercase tracking-tight">Active Gas Hazards Alert</h4>
                    <p class="text-[11px] text-red-600 dark:text-red-300 mt-0.5">Automated ventilation protocols initialized. Safety gear required.</p>
                </div>
            </div>
            ` : ''}

            <div class="px-4 py-4 space-y-5">
                <!-- Location details summary card -->
                <div class="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800/60 p-4 rounded-2xl shadow-sm">
                    <div class="flex justify-between items-start mb-3">
                        <div>
                            <span class="text-xs font-bold text-neutral-400 dark:text-neutral-500">Primary Sector Zone</span>
                            <h3 class="text-sm font-extrabold text-neutral-800 dark:text-neutral-100 mt-0.5">${mh.location}</h3>
                        </div>
                        ${getStatusBadge(mh.status)}
                    </div>
                    <div class="grid grid-cols-2 gap-3 text-xs border-t border-neutral-100 dark:border-neutral-800 pt-3 text-neutral-500 dark:text-neutral-400">
                        <div>GPS: <span class="font-bold text-neutral-700 dark:text-neutral-300">${mh.gps}</span></div>
                        <div class="text-right">Maintenance Team: <span class="font-bold text-[#2E7D32] dark:text-emerald-400">${mh.team}</span></div>
                    </div>
                </div>

                <!-- Live Sensors Bento Grid -->
                <div>
                    <h4 class="text-xs font-extrabold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-2.5">Live Sensor Grid</h4>
                    <div class="grid grid-cols-2 gap-3">
                        <!-- Methane -->
                        <div class="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-4 rounded-2xl shadow-sm flex flex-col justify-between h-30 hover-scale">
                            <div class="flex justify-between items-start">
                                <span class="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Methane (CH4)</span>
                                <span class="material-symbols-outlined text-[18px] ${mh.gas.ch4 > 50 ? 'text-red-500 animate-bounce' : 'text-emerald-600 dark:text-emerald-400'}" style="font-variation-settings: 'FILL' 1;">gas_meter</span>
                            </div>
                            <div class="mt-4">
                                <span class="text-2xl font-extrabold ${mh.gas.ch4 > 50 ? 'text-red-500' : 'text-neutral-800 dark:text-neutral-100'}" id="detail-ch4">${mh.gas.ch4}</span>
                                <span class="text-xs text-neutral-400 block font-semibold mt-0.5">PPM (Safe &lt; 50)</span>
                            </div>
                        </div>

                        <!-- Oxygen -->
                        <div class="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-4 rounded-2xl shadow-sm flex flex-col justify-between h-30 hover-scale">
                            <div class="flex justify-between items-start">
                                <span class="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Oxygen (O2)</span>
                                <span class="material-symbols-outlined text-[18px] ${mh.gas.o2 < 19.5 ? 'text-red-500 animate-ping' : 'text-emerald-600 dark:text-emerald-400'}">air</span>
                            </div>
                            <div class="mt-4">
                                <span class="text-2xl font-extrabold ${mh.gas.o2 < 19.5 ? 'text-red-500' : 'text-neutral-800 dark:text-neutral-100'}" id="detail-o2">${mh.gas.o2}</span>
                                <span class="text-xs text-neutral-400 block font-semibold mt-0.5">% Vol (Norm 19.5-23.5)</span>
                            </div>
                        </div>

                        <!-- CO -->
                        <div class="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-4 rounded-2xl shadow-sm flex flex-col justify-between h-30 hover-scale">
                            <div class="flex justify-between items-start">
                                <span class="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">CO (Carbon Monoxide)</span>
                                <span class="material-symbols-outlined text-[18px] ${mh.gas.co > 35 ? 'text-red-500' : 'text-[#4CAF50]'}">co2</span>
                            </div>
                            <div class="mt-4">
                                <span class="text-2xl font-extrabold ${mh.gas.co > 35 ? 'text-red-500' : 'text-neutral-800 dark:text-neutral-100'}" id="detail-co">${mh.gas.co}</span>
                                <span class="text-xs text-neutral-400 block font-semibold mt-0.5">PPM (Safe &lt; 35)</span>
                            </div>
                        </div>

                        <!-- H2S -->
                        <div class="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-4 rounded-2xl shadow-sm flex flex-col justify-between h-30 hover-scale">
                            <div class="flex justify-between items-start">
                                <span class="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Hydrogen Sulfide</span>
                                <span class="material-symbols-outlined text-[18px] ${mh.gas.h2s > 10 ? 'text-red-500' : 'text-[#4CAF50]'}">skull</span>
                            </div>
                            <div class="mt-4">
                                <span class="text-2xl font-extrabold ${mh.gas.h2s > 10 ? 'text-red-500' : 'text-neutral-800 dark:text-neutral-100'}" id="detail-h2s">${mh.gas.h2s}</span>
                                <span class="text-xs text-neutral-400 block font-semibold mt-0.5">PPM (Safe &lt; 10)</span>
                            </div>
                        </div>

                        <!-- Temp -->
                        <div class="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-4 rounded-2xl shadow-sm flex flex-col justify-between h-30 hover-scale">
                            <div class="flex justify-between items-start">
                                <span class="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Temperature</span>
                                <span class="material-symbols-outlined text-[18px] text-[#2E7D32]">thermostat</span>
                            </div>
                            <div class="mt-4">
                                <span class="text-2xl font-extrabold text-neutral-800 dark:text-neutral-100" id="detail-temp">${mh.temp}</span>
                                <span class="text-xs text-neutral-400 block font-semibold mt-0.5">°C (Norm &lt; 35°C)</span>
                            </div>
                        </div>

                        <!-- Water Level -->
                        <div class="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-4 rounded-2xl shadow-sm flex flex-col justify-between h-30 hover-scale">
                            <div class="flex justify-between items-start">
                                <span class="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Water Level</span>
                                <span class="material-symbols-outlined text-[18px] ${mh.water > 50 ? 'text-red-500 animate-bounce' : 'text-[#2E7D32]'}" style="font-variation-settings: 'FILL' 1;">water_drop</span>
                            </div>
                            <div class="mt-4">
                                <span class="text-2xl font-extrabold ${mh.water > 50 ? 'text-red-500' : 'text-neutral-800 dark:text-neutral-100'}" id="detail-water">${mh.water}</span>
                                <span class="text-xs text-neutral-400 block font-semibold mt-0.5">CM (Overflow &gt; 50)</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Live Trend Chart Card -->
                <div class="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-4 rounded-2xl shadow-sm">
                    <div class="flex justify-between items-center mb-3">
                        <span class="text-xs font-extrabold text-neutral-800 dark:text-neutral-100 uppercase tracking-wider">Historical Trend Profile</span>
                        <div class="h-2 w-2 rounded-full bg-emerald-500 animate-ping"></div>
                    </div>
                    
                    <div class="h-32 w-full border-b border-l border-neutral-100 dark:border-neutral-800 relative flex items-end overflow-hidden">
                        <!-- Custom Inline SVG chart line that responds to methane status -->
                        <svg class="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                            <defs>
                                <linearGradient id="detailGrad" x1="0%" x2="0%" y1="0%" y2="100%">
                                    <stop offset="0%" stop-color="${mh.status === 'critical' ? '#E53935' : '#2E7D32'}" stop-opacity="0.15"></stop>
                                    <stop offset="100%" stop-color="${mh.status === 'critical' ? '#E53935' : '#2E7D32'}" stop-opacity="0"></stop>
                                </linearGradient>
                            </defs>
                            <path d="M0,85 Q10,80 20,85 T40,70 T60,65 T80,${mh.status==='critical'?'15':'55'} T100,${mh.status==='critical'?'20':'60'}" fill="none" stroke="${mh.status === 'critical' ? '#E53935' : '#2E7D32'}" stroke-width="2.5" vector-effect="non-scaling-stroke"></path>
                            <path d="M0,85 Q10,80 20,85 T40,70 T60,65 T80,${mh.status==='critical'?'15':'55'} L100,100 L0,100 Z" fill="url(#detailGrad)" vector-effect="non-scaling-stroke"></path>
                            <!-- Threshold limit -->
                            <line stroke="#E53935" stroke-dasharray="3 3" stroke-width="1.5" x1="0" x2="100" y1="40" y2="40" vector-effect="non-scaling-stroke"></line>
                        </svg>
                        
                        <span class="absolute top-1 right-2 text-[8px] font-extrabold text-red-500 uppercase tracking-wider">Warning Limit</span>
                        <div class="absolute bottom-1 w-full flex justify-between px-2 text-[8px] font-bold text-neutral-400">
                            <span>08:00 AM</span>
                            <span>12:00 PM</span>
                            <span>04:00 PM</span>
                            <span>08:00 PM</span>
                        </div>
                    </div>
                </div>

                <!-- Sensor Health Index -->
                <div class="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-4 rounded-2xl shadow-sm flex items-center justify-between">
                    <div>
                        <h4 class="text-xs font-extrabold text-neutral-800 dark:text-neutral-100">Telemetry Health Score</h4>
                        <p class="text-[11px] text-neutral-500 dark:text-neutral-400 mt-1">Batteries, calibration nodes, signal gain.</p>
                    </div>
                    
                    <div class="relative w-14 h-14 flex items-center justify-center">
                        <svg class="w-full h-full transform -rotate-90">
                            <circle cx="28" cy="28" r="24" stroke="currentColor" class="text-neutral-100 dark:text-neutral-800" stroke-width="4.5" fill="transparent"></circle>
                            <circle cx="28" cy="28" r="24" stroke="currentColor" class="${mh.health < 60 ? 'text-red-500' : 'text-emerald-500'}" stroke-width="4.5" fill="transparent" stroke-dasharray="150" stroke-dashoffset="${150 - (150 * mh.health)/100}"></circle>
                        </svg>
                        <span class="absolute text-[11px] font-extrabold text-neutral-800 dark:text-neutral-100">${mh.health}%</span>
                    </div>
                </div>

                <!-- Maintenance timeline -->
                <div class="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-4 rounded-2xl shadow-sm">
                    <h4 class="text-xs font-extrabold text-neutral-800 dark:text-neutral-100 mb-3">Service Log Timeline</h4>
                    <div class="space-y-3.5 border-l border-neutral-100 dark:border-neutral-800 pl-4 ml-1 relative">
                        <div class="relative">
                            <span class="w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-white dark:border-neutral-900 absolute -left-[21px] top-1"></span>
                            <p class="text-xs font-extrabold text-neutral-800 dark:text-neutral-100">Gas Calibration Checklist</p>
                            <p class="text-[10px] text-neutral-500 dark:text-neutral-400 mt-0.5">Automated chamber purging completed. • May 12, 2026</p>
                        </div>
                        <div class="relative">
                            <span class="w-2.5 h-2.5 bg-[#4CAF50] rounded-full border-2 border-white dark:border-neutral-900 absolute -left-[21px] top-1"></span>
                            <p class="text-xs font-extrabold text-neutral-800 dark:text-neutral-100">Battery & Uplink Checkup</p>
                            <p class="text-[10px] text-neutral-500 dark:text-neutral-400 mt-0.5">Cellular transmitter replaced. Signal optimal. • Apr 04, 2026</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Detail emergency buttons footer -->
            <div class="absolute bottom-0 left-0 w-full p-4 bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800/60 flex gap-2.5 z-30">
                <button onclick="triggerEmergencyCall('${mh.id}')" class="flex-1 bg-red-600 hover:bg-red-700 active:scale-[0.98] text-white py-3.5 rounded-xl font-bold shadow-lg transition-all flex items-center justify-center gap-2">
                    <span class="material-symbols-outlined text-[20px]">phone_in_talk</span>
                    Emergency Call
                </button>
                <button onclick="dispatchTeam('${mh.id}', '${mh.team}')" class="flex-1 bg-[#2E7D32] hover:bg-emerald-800 active:scale-[0.98] text-white py-3.5 rounded-xl font-bold shadow-lg transition-all flex items-center justify-center gap-2">
                    <span class="material-symbols-outlined text-[20px]">send</span>
                    Dispatch Team
                </button>
            </div>
        </div>
        `;
    },

    // 7. WORKER SAFETY SCREEN
    worker_safety: (state) => {
        return `
        <div class="relative min-h-full pb-20">
            ${getScreenHeader("Worker Safety Feed", false, 'home', `
                <button class="w-8 h-8 rounded-full flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-300" onclick="simulateSOS()">
                    <span class="material-symbols-outlined text-[20px] text-red-500 animate-pulse">sos</span>
                </button>
            `)}

            <div class="px-4 py-4 space-y-5">
                <!-- Large Critical SOS button -->
                <button onclick="simulateSOS()" class="w-full bg-red-600 text-white p-5 rounded-2xl flex items-center justify-center gap-3.5 shadow-lg shadow-red-500/20 active:scale-[0.98] transition-all border border-red-500/20 alert-pulse">
                    <span class="material-symbols-outlined text-3xl">emergency</span>
                    <div class="text-left">
                        <span class="text-sm font-extrabold uppercase tracking-tight block">Sound Safety Alarm (SOS)</span>
                        <span class="text-[10px] text-red-100 block opacity-85">Broadcasting immediate evacuation orders.</span>
                    </div>
                </button>

                <!-- Status overview cards -->
                <div class="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800/60 p-4 rounded-2xl shadow-sm">
                    <h3 class="text-xs font-extrabold text-neutral-800 dark:text-neutral-100 uppercase tracking-wider mb-2.5">Field Crew Audit</h3>
                    <div class="grid grid-cols-3 gap-2.5 text-center text-xs">
                        <div class="p-2.5 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-950/40 rounded-xl">
                            <span class="text-emerald-700 dark:text-emerald-400 font-extrabold text-lg block">${state.workers.filter(w=>w.status==='approved').length}</span>
                            <span class="text-[9px] text-neutral-500 dark:text-neutral-400 uppercase font-bold tracking-wider">Approved</span>
                        </div>
                        <div class="p-2.5 bg-amber-50 dark:bg-amber-950/20 border border-amber-100 dark:border-amber-950/40 rounded-xl">
                            <span class="text-amber-600 dark:text-amber-400 font-extrabold text-lg block">${state.workers.filter(w=>w.status==='pending').length}</span>
                            <span class="text-[9px] text-neutral-500 dark:text-neutral-400 uppercase font-bold tracking-wider">Pending</span>
                        </div>
                        <div class="p-2.5 bg-red-50 dark:bg-red-950/20 border border-red-100 dark:border-red-950/40 rounded-xl">
                            <span class="text-red-600 dark:text-red-400 font-extrabold text-lg block">${state.workers.filter(w=>w.status==='restricted').length}</span>
                            <span class="text-[9px] text-neutral-500 dark:text-neutral-400 uppercase font-bold tracking-wider">Restricted</span>
                        </div>
                    </div>
                </div>

                <!-- Workers List -->
                <div class="space-y-3">
                    <h3 class="text-xs font-extrabold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider">Active Safety Passes</h3>
                    
                    <div class="space-y-3" id="workers-list-container">
                        ${state.workers.map(worker => `
                        <div class="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-4 rounded-2xl shadow-sm flex flex-col gap-3.5 hover:border-emerald-500/40 transition-all">
                            <div class="flex items-center gap-3">
                                <div class="w-12 h-12 rounded-full overflow-hidden border-2 border-neutral-100 dark:border-neutral-800">
                                    <img src="${worker.photo}" class="w-full h-full object-cover">
                                </div>
                                <div class="flex-1 min-w-0">
                                    <div class="flex items-center justify-between">
                                        <h4 class="text-sm font-extrabold text-neutral-800 dark:text-neutral-100 truncate">${worker.name}</h4>
                                        ${getStatusBadge(worker.status)}
                                    </div>
                                    <p class="text-[10px] text-neutral-500 dark:text-neutral-400 mt-0.5">${worker.dept} • ${worker.id}</p>
                                </div>
                            </div>
                            
                            <!-- Assigned Location -->
                            <div class="text-xs bg-neutral-50 dark:bg-neutral-800/40 px-3 py-2 rounded-xl flex justify-between items-center text-neutral-600 dark:text-neutral-300">
                                <span>Assignment: <span class="font-extrabold text-neutral-800 dark:text-neutral-100">${worker.assignment}</span></span>
                                <button onclick="selectAndViewManhole('${worker.assignment}')" class="text-emerald-700 dark:text-emerald-400 font-bold hover:underline">Track Node</button>
                            </div>
                            
                            <!-- PPE Checklist -->
                            <div>
                                <span class="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block mb-1.5">Compliance PPE Checklist</span>
                                <div class="flex flex-wrap gap-2">
                                    <div class="flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-bold ${worker.ppe.helmet ? 'bg-emerald-50 text-emerald-800 border border-emerald-200 dark:bg-emerald-950/20 dark:text-emerald-400' : 'bg-red-50 text-red-800 border border-red-200 dark:bg-red-950/20 dark:text-red-400'}">
                                        <span class="material-symbols-outlined text-[12px]">${worker.ppe.helmet ? 'check_circle' : 'cancel'}</span>
                                        Helmet
                                    </div>
                                    <div class="flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-bold ${worker.ppe.gloves ? 'bg-emerald-50 text-emerald-800 border border-emerald-200 dark:bg-emerald-950/20 dark:text-emerald-400' : 'bg-red-50 text-red-800 border border-red-200 dark:bg-red-950/20 dark:text-red-400'}">
                                        <span class="material-symbols-outlined text-[12px]">${worker.ppe.gloves ? 'check_circle' : 'cancel'}</span>
                                        Gloves
                                    </div>
                                    <div class="flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-bold ${worker.ppe.detector ? 'bg-emerald-50 text-emerald-800 border border-emerald-200 dark:bg-emerald-950/20 dark:text-emerald-400' : 'bg-red-50 text-red-800 border border-red-200 dark:bg-red-950/20 dark:text-red-400'}">
                                        <span class="material-symbols-outlined text-[12px]">${worker.ppe.detector ? 'check_circle' : 'cancel'}</span>
                                        Gas Sensor
                                    </div>
                                    <div class="flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-bold ${worker.ppe.harness ? 'bg-emerald-50 text-emerald-800 border border-emerald-200 dark:bg-emerald-950/20 dark:text-emerald-400' : 'bg-red-50 text-red-800 border border-red-200 dark:bg-red-950/20 dark:text-red-400'}">
                                        <span class="material-symbols-outlined text-[12px]">${worker.ppe.harness ? 'check_circle' : 'cancel'}</span>
                                        Harness
                                    </div>
                                    <div class="flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-bold ${worker.ppe.vest ? 'bg-emerald-50 text-emerald-800 border border-emerald-200 dark:bg-emerald-950/20 dark:text-emerald-400' : 'bg-red-50 text-red-800 border border-red-200 dark:bg-red-950/20 dark:text-red-400'}">
                                        <span class="material-symbols-outlined text-[12px]">${worker.ppe.vest ? 'check_circle' : 'cancel'}</span>
                                        Reflector
                                    </div>
                                </div>
                            </div>
                        </div>
                        `).join('')}
                    </div>
                </div>
            </div>

            <!-- Bottom Navigation Bar -->
            ${getBottomNav('monitoring')}
        </div>
        `;
    },

    // 8. ALERTS SCREEN
    alerts: (state) => {
        const activeAlertFilter = state.alertFilter || 'all';
        
        // Filter alerts
        const filteredAlerts = state.alerts.filter(alert => {
            if (activeAlertFilter === 'all') return true;
            return alert.category.toLowerCase().includes(activeAlertFilter.toLowerCase());
        });

        return `
        <div class="relative min-h-full pb-20">
            ${getScreenHeader("Critical Alert Inbox", false, 'home', `
                <button class="w-8 h-8 rounded-full flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-300" onclick="resolveAllAlerts()">
                    <span class="material-symbols-outlined text-[20px]">done_all</span>
                </button>
            `)}

            <!-- Alert filter chips -->
            <div class="px-4 py-3 bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800/60 flex gap-2 overflow-x-auto select-none scrollbar-none sticky top-[56px] z-10">
                <button onclick="setAlertFilter('all')" class="px-4 py-1.5 rounded-full text-[10px] font-extrabold shrink-0 uppercase tracking-wider transition-all ${activeAlertFilter === 'all' ? 'bg-[#2E7D32] text-white' : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400'}">All Alerts</button>
                <button onclick="setAlertFilter('leak')" class="px-4 py-1.5 rounded-full text-[10px] font-extrabold shrink-0 uppercase tracking-wider transition-all ${activeAlertFilter === 'leak' ? 'bg-[#2E7D32] text-white' : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400'}">Gas Leaks</button>
                <button onclick="setAlertFilter('oxygen')" class="px-4 py-1.5 rounded-full text-[10px] font-extrabold shrink-0 uppercase tracking-wider transition-all ${activeAlertFilter === 'oxygen' ? 'bg-[#2E7D32] text-white' : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400'}">O2 Drops</button>
                <button onclick="setAlertFilter('water')" class="px-4 py-1.5 rounded-full text-[10px] font-extrabold shrink-0 uppercase tracking-wider transition-all ${activeAlertFilter === 'water' ? 'bg-[#2E7D32] text-white' : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400'}">Water Levels</button>
                <button onclick="setAlertFilter('access')" class="px-4 py-1.5 rounded-full text-[10px] font-extrabold shrink-0 uppercase tracking-wider transition-all ${activeAlertFilter === 'access' ? 'bg-[#2E7D32] text-white' : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400'}">Unauthorized</button>
            </div>

            <!-- Alerts list -->
            <div class="px-4 py-4 space-y-3" id="alerts-list-container">
                ${filteredAlerts.length === 0 ? `
                <div class="text-center p-10 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl text-neutral-400">
                    <span class="material-symbols-outlined text-4xl mb-1 text-emerald-500">verified</span>
                    <p class="text-xs font-bold">Excellent! No active alerts reported.</p>
                </div>
                ` : filteredAlerts.map(alert => `
                <div class="bg-white dark:bg-neutral-900 border ${alert.severity === 'critical' ? 'border-red-200 dark:border-red-950/20' : 'border-amber-200 dark:border-amber-950/20'} p-4 rounded-2xl shadow-sm flex flex-col gap-3">
                    <div class="flex justify-between items-start">
                        <div class="flex items-center gap-2">
                            <span class="w-2.5 h-2.5 rounded-full ${alert.severity === 'critical' ? 'bg-red-500 animate-pulse' : 'bg-amber-500'}"></span>
                            <span class="text-xs font-extrabold uppercase tracking-wider text-neutral-400">${alert.category}</span>
                        </div>
                        <span class="text-[11px] text-neutral-400 font-bold">${alert.time}</span>
                    </div>

                    <div>
                        <h4 class="text-sm font-extrabold text-neutral-800 dark:text-neutral-100">Sensor spike at ${alert.location}</h4>
                        <p class="text-xs text-neutral-500 dark:text-neutral-400 mt-1">${alert.description}</p>
                    </div>

                    <!-- Alert details badge -->
                    <div class="flex justify-between items-center text-xs bg-neutral-50 dark:bg-neutral-800/40 px-3 py-2 rounded-xl text-neutral-600 dark:text-neutral-300">
                        <span>Trigger: <span class="font-extrabold text-neutral-800 dark:text-neutral-100">${alert.sensor}</span></span>
                        <span>Value: <span class="font-extrabold text-red-500">${alert.value}</span></span>
                    </div>

                    <!-- Action buttons -->
                    <div class="flex gap-2 border-t border-neutral-100 dark:border-neutral-800 pt-3 mt-1 justify-end">
                        ${alert.status === 'unresolved' ? `
                        <button onclick="acknowledgeAlert('${alert.id}')" class="px-4 py-2 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 rounded-xl text-[11px] font-bold text-neutral-700 dark:text-neutral-300 active:scale-95 transition-all">Acknowledge</button>
                        <button onclick="resolveAlert('${alert.id}')" class="px-4 py-2 bg-[#2E7D32] hover:bg-emerald-800 text-white rounded-xl text-[11px] font-bold active:scale-95 transition-all flex items-center gap-1"><span class="material-symbols-outlined text-[14px]">done</span>Resolve</button>
                        ` : `
                        <span class="text-xs text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1"><span class="material-symbols-outlined text-[16px]">check_circle</span>Resolved</span>
                        `}
                    </div>
                </div>
                `).join('')}
            </div>

            <!-- Bottom Navigation Bar -->
            ${getBottomNav('alerts')}
        </div>
        `;
    },

    // 9. ANALYTICS DASHBOARD
    reports: (state) => {
        // We render the reports screen or the analytics screen. The user has "reports" tab.
        // We will combine them or make them toggleable! Let's do reports + analytics tab view.
        const reportMode = state.reportMode || 'analytics'; // 'analytics' or 'docs'
        
        return `
        <div class="relative min-h-full pb-20">
            ${getScreenHeader("Data & Insights Center", false, 'home', `
                <button class="w-8 h-8 rounded-full flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-300" onclick="alert('Filtered reports loaded')">
                    <span class="material-symbols-outlined text-[20px]">filter_list</span>
                </button>
            `)}

            <!-- Segmented toggler -->
            <div class="px-4 py-3 bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800/60 sticky top-[56px] z-10 flex">
                <div class="bg-neutral-100 dark:bg-neutral-800 p-1 rounded-xl w-full flex select-none">
                    <button onclick="toggleReportMode('analytics')" class="flex-1 text-center py-2 text-xs font-bold rounded-lg transition-all ${reportMode === 'analytics' ? 'bg-white dark:bg-neutral-900 text-[#2E7D32] shadow-sm' : 'text-neutral-500' }">Safety Analytics</button>
                    <button onclick="toggleReportMode('docs')" class="flex-1 text-center py-2 text-xs font-bold rounded-lg transition-all ${reportMode === 'docs' ? 'bg-white dark:bg-neutral-900 text-[#2E7D32] shadow-sm' : 'text-neutral-500' }">Export Logs</button>
                </div>
            </div>

            <!-- Page content -->
            <div class="px-4 py-4 space-y-5">
                ${reportMode === 'analytics' ? `
                <!-- Safety KPIs -->
                <div class="grid grid-cols-2 gap-3">
                    <div class="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800/60 p-4 rounded-xl shadow-sm text-center">
                        <span class="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block">Safety Compliance</span>
                        <span class="text-2xl font-extrabold text-neutral-800 dark:text-neutral-100 block mt-1">98.4%</span>
                        <span class="text-[9px] font-bold text-emerald-600 mt-1 block">▲ +0.6% this month</span>
                    </div>
                    <div class="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800/60 p-4 rounded-xl shadow-sm text-center">
                        <span class="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block">Resolved Risks</span>
                        <span class="text-2xl font-extrabold text-neutral-800 dark:text-neutral-100 block mt-1">1,418</span>
                        <span class="text-[9px] font-bold text-emerald-600 mt-1 block">Nominal Rate: 99.8%</span>
                    </div>
                </div>

                <!-- Monthly Incident Bar Chart -->
                <div class="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-4 rounded-2xl shadow-sm space-y-3">
                    <h4 class="text-xs font-extrabold text-neutral-800 dark:text-neutral-100 uppercase tracking-wider">Monthly Alarm Spikes</h4>
                    
                    <div class="h-28 w-full flex items-end justify-between px-2 pt-4 relative">
                        <!-- Bar chart elements -->
                        <div class="flex flex-col items-center gap-1.5 w-6">
                            <div class="bg-emerald-500 rounded-t w-full h-8"></div>
                            <span class="text-[8px] font-bold text-neutral-400 uppercase">Jan</span>
                        </div>
                        <div class="flex flex-col items-center gap-1.5 w-6">
                            <div class="bg-emerald-500 rounded-t w-full h-12"></div>
                            <span class="text-[8px] font-bold text-neutral-400 uppercase">Feb</span>
                        </div>
                        <div class="flex flex-col items-center gap-1.5 w-6">
                            <div class="bg-amber-500 rounded-t w-full h-20"></div>
                            <span class="text-[8px] font-bold text-neutral-400 uppercase">Mar</span>
                        </div>
                        <div class="flex flex-col items-center gap-1.5 w-6">
                            <div class="bg-emerald-500 rounded-t w-full h-10"></div>
                            <span class="text-[8px] font-bold text-neutral-400 uppercase">Apr</span>
                        </div>
                        <div class="flex flex-col items-center gap-1.5 w-6">
                            <div class="bg-emerald-500 rounded-t w-full h-6"></div>
                            <span class="text-[8px] font-bold text-neutral-400 uppercase">May</span>
                        </div>
                        <div class="flex flex-col items-center gap-1.5 w-6">
                            <div class="bg-red-500 rounded-t w-full h-16"></div>
                            <span class="text-[8px] font-bold text-neutral-400 uppercase">Jun</span>
                        </div>
                    </div>
                </div>

                <!-- Gas Alert trends area chart -->
                <div class="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-4 rounded-2xl shadow-sm space-y-3">
                    <h4 class="text-xs font-extrabold text-neutral-800 dark:text-neutral-100 uppercase tracking-wider">Gas Concentration Index</h4>
                    
                    <div class="h-28 w-full border-b border-l border-neutral-100 dark:border-neutral-800 relative flex items-end">
                        <svg class="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                            <path d="M0,80 Q15,60 30,75 T60,50 T90,40 T100,20" fill="none" stroke="#4CAF50" stroke-width="2" vector-effect="non-scaling-stroke"></path>
                            <path d="M0,85 Q15,70 30,80 T60,65 T90,50 T100,30" fill="none" stroke="#FFB300" stroke-width="1.5" stroke-dasharray="2 2" vector-effect="non-scaling-stroke"></path>
                        </svg>
                        <div class="absolute top-1 left-2 flex gap-3 text-[8px] font-bold uppercase tracking-wider">
                            <span class="text-emerald-600">● O2 Baseline</span>
                            <span class="text-amber-500">● Methane (CH4)</span>
                        </div>
                    </div>
                </div>

                <!-- Sensor performance stats -->
                <div class="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-4 rounded-2xl shadow-sm">
                    <h4 class="text-xs font-extrabold text-neutral-800 dark:text-neutral-100 uppercase tracking-wider mb-2">Sensor Reliability Metrics</h4>
                    <div class="flex justify-between items-center text-xs">
                        <div class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 bg-emerald-500 rounded-full"></span>Methane (99.2%)</div>
                        <div class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 bg-amber-500 rounded-full"></span>Oxygen (98.7%)</div>
                        <div class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 bg-[#4CAF50] rounded-full"></span>H2S (97.9%)</div>
                    </div>
                </div>
                ` : `
                <!-- Reports and Exports section -->
                <div class="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-4 rounded-2xl shadow-sm space-y-4">
                    <div>
                        <h3 class="text-sm font-extrabold text-neutral-800 dark:text-neutral-100">Export Safety logs</h3>
                        <p class="text-xs text-neutral-500 dark:text-neutral-400 mt-1">Select timeframe and format to download regulatory compliance documents.</p>
                    </div>

                    <!-- Period select -->
                    <div class="grid grid-cols-3 gap-2 text-center text-xs">
                        <button class="py-2.5 bg-emerald-50 text-[#2E7D32] border border-emerald-200 rounded-xl font-bold select-none">Daily Log</button>
                        <button class="py-2.5 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-xl font-bold">Weekly Log</button>
                        <button class="py-2.5 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-xl font-bold">Monthly Log</button>
                    </div>

                    <!-- Download action buttons -->
                    <div class="grid grid-cols-2 gap-3">
                        <button onclick="downloadReport('pdf')" class="w-full bg-[#2E7D32] hover:bg-emerald-800 text-white font-bold py-3 rounded-xl text-xs flex items-center justify-center gap-2 shadow-sm transition-all active:scale-95">
                            <span class="material-symbols-outlined text-[18px]">picture_as_pdf</span>
                            Export PDF
                        </button>
                        <button onclick="downloadReport('excel')" class="w-full bg-[#2E7D32] hover:bg-emerald-800 text-white font-bold py-3 rounded-xl text-xs flex items-center justify-center gap-2 shadow-sm transition-all active:scale-95">
                            <span class="material-symbols-outlined text-[18px]">table_chart</span>
                            Export Excel
                        </button>
                    </div>
                </div>

                <!-- Reports list -->
                <div class="space-y-3">
                    <h4 class="text-xs font-extrabold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider">Download History</h4>
                    <div class="space-y-2">
                        ${state.reports.map(rep => `
                        <div class="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-3 rounded-xl flex items-center justify-between shadow-sm">
                            <div class="flex items-center gap-3">
                                <span class="material-symbols-outlined text-[24px] text-[#2E7D32] p-2 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl shrink-0">draft</span>
                                <div>
                                    <h4 class="text-xs font-extrabold text-neutral-800 dark:text-neutral-100">${rep.title}</h4>
                                    <p class="text-[10px] text-neutral-500 dark:text-neutral-400 mt-0.5">${rep.date} • ${rep.size} • ${rep.type}</p>
                                </div>
                            </div>
                            <button onclick="downloadReport('pdf')" class="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full text-[#2E7D32] shrink-0">
                                <span class="material-symbols-outlined text-[20px]">download</span>
                            </button>
                        </div>
                        `).join('')}
                    </div>
                </div>
                `}
            </div>

            <!-- Bottom Navigation Bar -->
            ${getBottomNav('reports')}
        </div>
        `;
    },

    // 11. PROFILE & SETTINGS SCREEN
    profile: (state) => {
        return `
        <div class="relative min-h-full pb-20 select-none">
            ${getScreenHeader("Safety Pass Profile", false, 'home', `
                <button class="w-8 h-8 rounded-full flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-300" onclick="handleLogout()">
                    <span class="material-symbols-outlined text-[20px] text-red-500">logout</span>
                </button>
            `)}

            <div class="px-4 py-4 space-y-5">
                <!-- User Avatar header card -->
                <div class="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-4 rounded-2xl shadow-sm text-center flex flex-col items-center">
                    <div class="w-20 h-20 rounded-full border-4 border-emerald-500 overflow-hidden shadow-md relative">
                        <img src="${state.user.avatar}" class="w-full h-full object-cover">
                    </div>
                    
                    <h3 class="text-base font-extrabold text-neutral-800 dark:text-neutral-100 mt-3">${state.user.name}</h3>
                    <p class="text-[11px] font-bold text-[#2E7D32] dark:text-emerald-400 uppercase tracking-wider mt-0.5">${state.user.role}</p>
                    <p class="text-[10px] text-neutral-400 dark:text-neutral-500 mt-0.5">${state.user.dept} • Pass ${state.user.id}</p>
                    
                    <!-- Stats summary strip -->
                    <div class="grid grid-cols-3 gap-1 w-full border-t border-neutral-100 dark:border-neutral-800 mt-4 pt-4 text-center">
                        <div>
                            <span class="text-sm font-extrabold text-neutral-800 dark:text-neutral-100 block">${state.user.stats.reports}</span>
                            <span class="text-[8px] text-neutral-400 uppercase font-bold tracking-wider block">Reports</span>
                        </div>
                        <div class="border-x border-neutral-100 dark:border-neutral-800">
                            <span class="text-sm font-extrabold text-neutral-800 dark:text-neutral-100 block">${state.user.stats.inspections}</span>
                            <span class="text-[8px] text-neutral-400 uppercase font-bold tracking-wider block">Inspections</span>
                        </div>
                        <div>
                            <span class="text-sm font-extrabold text-neutral-800 dark:text-neutral-100 block">${state.user.stats.alertsManaged}</span>
                            <span class="text-[8px] text-neutral-400 uppercase font-bold tracking-wider block">Alerts OK</span>
                        </div>
                    </div>
                </div>

                <!-- Personal Information Panel -->
                <div class="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-4 rounded-2xl shadow-sm space-y-3">
                    <h4 class="text-xs font-extrabold text-neutral-800 dark:text-neutral-100 uppercase tracking-wider border-b border-neutral-100 dark:border-neutral-800 pb-2">Information</h4>
                    <div class="space-y-2.5 text-xs">
                        <div class="flex justify-between">
                            <span class="text-neutral-400 font-bold">Email:</span>
                            <span class="text-neutral-700 dark:text-neutral-300">${state.user.email}</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-neutral-400 font-bold">Phone:</span>
                            <span class="text-neutral-700 dark:text-neutral-300">${state.user.phone}</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-neutral-400 font-bold">Access Node:</span>
                            <span class="text-[#2E7D32] dark:text-emerald-400 font-bold">MUNICIPAL-ADMIN-PASS</span>
                        </div>
                    </div>
                </div>

                <!-- Settings list -->
                <div class="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-4 rounded-2xl shadow-sm space-y-1">
                    <h4 class="text-xs font-extrabold text-neutral-800 dark:text-neutral-100 uppercase tracking-wider border-b border-neutral-100 dark:border-neutral-800 pb-2 mb-2">Configuration Settings</h4>
                    
                    <div class="flex justify-between items-center py-2 border-b border-neutral-50 dark:border-neutral-800">
                        <div class="flex items-center gap-2.5">
                            <span class="material-symbols-outlined text-[20px] text-neutral-500">dark_mode</span>
                            <span class="text-xs font-extrabold text-neutral-700 dark:text-neutral-300">Dark Interface Theme</span>
                        </div>
                        <label class="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" id="theme-toggle-switch" onchange="toggleAppTheme(this.checked)" class="sr-only peer" ${state.theme === 'dark' ? 'checked' : ''}>
                            <div class="w-9 h-5 bg-neutral-200 peer-focus:outline-none rounded-full peer dark:bg-neutral-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-neutral-600 peer-checked:bg-emerald-600"></div>
                        </label>
                    </div>

                    <div class="flex justify-between items-center py-2 border-b border-neutral-50 dark:border-neutral-800 cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-800/40 rounded px-1">
                        <div class="flex items-center gap-2.5">
                            <span class="material-symbols-outlined text-[20px] text-neutral-500">notifications_active</span>
                            <span class="text-xs font-extrabold text-neutral-700 dark:text-neutral-300">Push Notifications</span>
                        </div>
                        <span class="material-symbols-outlined text-[18px] text-neutral-400">chevron_right</span>
                    </div>

                    <div class="flex justify-between items-center py-2 border-b border-neutral-50 dark:border-neutral-800 cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-800/40 rounded px-1">
                        <div class="flex items-center gap-2.5">
                            <span class="material-symbols-outlined text-[20px] text-neutral-500">security_update_good</span>
                            <span class="text-xs font-extrabold text-neutral-700 dark:text-neutral-300">Security Credentials</span>
                        </div>
                        <span class="material-symbols-outlined text-[18px] text-neutral-400">chevron_right</span>
                    </div>

                    <div class="flex justify-between items-center py-2 cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-800/40 rounded px-1">
                        <div class="flex items-center gap-2.5">
                            <span class="material-symbols-outlined text-[20px] text-neutral-500">help</span>
                            <span class="text-xs font-extrabold text-neutral-700 dark:text-neutral-300">Help & Support Desk</span>
                        </div>
                        <span class="material-symbols-outlined text-[18px] text-neutral-400">chevron_right</span>
                    </div>
                </div>

                <!-- Logout Button -->
                <button onclick="handleLogout()" class="w-full bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-750 text-red-600 font-bold py-3.5 rounded-xl text-xs shadow-sm transition-all active:scale-95 flex items-center justify-center gap-2">
                    <span class="material-symbols-outlined text-[18px]">logout</span>
                    Sign Out Account
                </button>
            </div>

            <!-- Bottom Navigation Bar -->
            ${getBottomNav('profile')}
        </div>
        `;
    }
};

// Expose screens globally
window.screensTemplates = screens;
