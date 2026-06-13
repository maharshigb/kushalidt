/* ==========================================================================
   SMART SPROUTS AGRITECH PROTOTYPE LOGIC
   ========================================================================== */

// 1. DYNAMIC TRANSLATION DICTIONARY (English & Kannada)
const translations = {
    en: {
        tagline: "Smart Farming Made Simple",
        enter_btn: "Tap to Start",
        login_welcome: "Welcome to Smart Sprouts",
        login_desc: "Enter your mobile number to receive an OTP login code.",
        invalid_phone_err: "Please enter a valid 10-digit mobile number",
        btn_get_otp: "Get OTP Login",
        verify_title: "Verify Mobile Number",
        otp_sent_msg: "We've sent a 4-digit code to your mobile number +91 ",
        simulated_otp_alert: "Simulated SMS Code: ",
        otp_invalid_err: "Incorrect OTP. Please enter the correct code.",
        btn_verify: "Verify & Proceed",
        no_code: "Didn't receive code?",
        resend_otp: "Resend",
        profile_setup_title: "Set Up Farmer Profile",
        profile_setup_subtitle: "This helps configure the irrigation schedules based on your crop.",
        lbl_farmer_name: "Farmer Name",
        lbl_farm_name: "Farm Name",
        lbl_location: "Location",
        lbl_farm_size: "Size (Acres)",
        lbl_crop_type: "Select Primary Crop",
        crop_paddy: "Paddy (Rice)",
        crop_ragi: "Ragi (Finger Millet)",
        crop_sugarcane: "Sugarcane",
        crop_cotton: "Cotton",
        crop_maize: "Maize (Corn)",
        crop_tomatoes: "Tomatoes",
        btn_save_profile: "Save Profile & Enter Dashboard",
        welcome_back: "Welcome Back,",
        status_online: "Online",
        ai_tip_title: "Smart AI Assistant",
        ai_tip_good: "Soil moisture is at a healthy 68%. No irrigation required for Paddy today.",
        ai_tip_dry: "CRITICAL ALERT: Soil moisture is very low (25%)! Turning on pump is highly recommended.",
        ai_tip_wet: "Rain simulated! Soil moisture is at a high 80%. Hold off watering.",
        ai_tip_auto: "Auto-Mode Active: Irrigation will run when moisture drops below threshold.",
        card_moisture_title: "Soil Moisture",
        moisture_status_good: "HEALTHY",
        moisture_status_dry: "DRY",
        moisture_status_wet: "WET",
        zone_b: "Zone B (South Field)",
        card_pump_title: "Irrigation Pump",
        pump_off: "Pump is OFF",
        pump_on: "Pump is ON",
        pump_standby: "Manual standby mode",
        pump_running: "Watering field...",
        pump_jammed: "WARNING: Pump Jammed!",
        lbl_auto_mode: "Smart Auto-Irrigate",
        auto_mode_desc: "Pump triggers automatically",
        card_tank_title: "Water Tank Level",
        tank_capacity: "Capacity:",
        tank_available: "Remaining:",
        tank_low_alert: "Water level low! Refill recommended.",
        stat_water_saved: "Water Saved Today",
        stat_next_irrigation: "Next Scheduled",
        analytics_title: "Irrigation Analytics",
        analytics_subtitle: "Review moisture patterns, water consumption, and system efficiency.",
        tab_daily: "Daily",
        tab_weekly: "Weekly",
        tab_monthly: "Monthly",
        chart_moisture_trend: "Soil Moisture Trend (%)",
        chart_water_usage: "Water Consumed (Liters)",
        insight_title: "Water Conservation Report",
        analytics_insight_daily: "Excellent! Smart irrigation automation prevented overwatering today. You saved 15% more water compared to manual scheduling. Soil health remains optimal.",
        analytics_insight_weekly: "Weekly moisture averaged 64%. Smart automation reduced pump operating hours by 8.4 hours, saving approximately 1,260 Liters.",
        analytics_insight_monthly: "Monthly water consumption target met! Total savings of 5,420 Liters. Rains on the 12th and 23rd helped lower manual pump intervention.",
        notifications_title: "System Alerts",
        notifications_subtitle: "Live notifications from sensors, gateway, and automatic mode.",
        clear_all: "Clear All",
        no_alerts_title: "All caught up!",
        no_alerts_desc: "No new notifications. Alerts about soil conditions or pump status will appear here.",
        notif_critical: "CRITICAL",
        notif_notice: "NOTICE",
        notif_weather: "WEATHER",
        notif_system: "SYSTEM",
        alert_low_moisture: "CRITICAL: Low moisture detected in Zone B! Moisture level is at 25% (Threshold: 45%).",
        alert_pump_auto_off: "NOTICE: Pump 1 turned OFF automatically as soil moisture reached the target limit of 75%.",
        alert_rain_incoming: "WEATHER ALERT: Local forecast predicts rain tomorrow afternoon. Auto-irrigation will hold off to conserve water.",
        alert_gateway_online: "SYSTEM: AgriGateway #043 connected online and synchronized with smart moisture sensors.",
        farm_details_title: "Farm Information",
        spec_farm_name: "Farm Name",
        spec_crop_type: "Primary Crop",
        spec_farm_size: "Farm Size",
        spec_device_id: "Device Gateway ID",
        award_title: "Total Water Saved",
        award_desc: "You belong to the top 8% of water-conserving farmers in Mandya district this season!",
        btn_edit_profile: "Edit Profile Details",
        settings_title: "System Settings",
        settings_subtitle: "Configure thresholds, hardware parameters, and localization options.",
        settings_lang_title: "Language Selection / ಭಾಷೆ",
        settings_threshold_title: "Auto-Irrigation Thresholds",
        settings_threshold_desc: "Irrigation triggers when moisture drops below start threshold and turns off at stop threshold.",
        lbl_start_threshold: "Start Pump Below:",
        lbl_stop_threshold: "Stop Pump Above:",
        settings_alerts_title: "Alert & Notification Toggles",
        setting_alert_pump: "Pump Toggle Alerts",
        setting_alert_pump_desc: "SMS notification when pump status changes",
        setting_alert_moisture: "Moisture Anomalies",
        setting_alert_moisture_desc: "Alert when moisture drops below critical 30%",
        setting_alert_weather: "Weather Advisories",
        setting_alert_weather_desc: "Tips based on upcoming local weather forecast",
        settings_device_title: "Device & Hardware Gateway",
        btn_restart_gateway: "Restart Gateway Hardware",
        setting_dark_mode: "Dark Mode Support",
        setting_dark_mode_desc: "Switch interface visual design theme",
        nav_home: "Home",
        nav_analytics: "Analytics",
        nav_alerts: "Alerts",
        nav_profile: "Profile",
        nav_settings: "Settings",
        badge_connected: "Connected",
        badge_offline: "Offline",
        otp_sms_alert: "Simulated SMS Code:",
        
        // NEW ADDITIONS FOR VERSION 1.1
        choose_lang_title: "Choose Your Language",
        choose_lang_desc: "Select a language to continue using Smart Sprouts",
        btn_continue: "Continue",
        verify_success_title: "Verification Successful",
        verify_success_desc: "Your mobile number has been verified. Redirecting you to set up your profile...",
        lbl_profile_picture: "Farmer Profile Photo",
        lbl_village: "Village",
        lbl_district: "District",
        lbl_state: "State",
        lbl_farmer_phone: "Mobile Number",
        offline_title: "Offline Mode Activated",
        offline_desc: "ESP32 gateway is offline. Showing cached sensor data. Controls are temporarily disabled.",
        weather_intel_title: "Weather Intelligence",
        weather_loc: "Mandya, IN",
        weather_cond_sunny: "Partly Sunny",
        weather_humidity: "Humidity",
        weather_rain_prob: "Rain Prob.",
        weather_wind: "Wind Speed",
        connectivity_status_title: "IoT Sensor Network",
        conn_connected: "Connected",
        conn_online: "Online",
        conn_synced: "Synced",
        stat_today_usage: "Today's Usage",
        stat_weekly_usage: "Weekly Usage",
        stat_pump_runtime: "Pump Runtime",
        chart_efficiency_trend: "Irrigation Efficiency Graph (%)",
        ai_insight_moisture: "Soil moisture is dry (25%) in Zone B.",
        ai_insight_irrigation: "Irrigation recommended today around 6:00 PM.",
        ai_insight_rain: "Rain is expected tomorrow. Auto-mode will bypass watering.",
        prof_stat_water: "Water Saved",
        prof_stat_devices: "Connected",
        prof_stat_irrigate: "Irrigations",
        prof_stat_score: "Efficiency",
        soil_loamy: "Red Loamy Soil",
        method_drip: "Drip Irrigation",
        prof_manage_devices: "Manage Devices",
        prof_help_support: "Help & Support",
        btn_logout: "Logout",
        lbl_schedule_time: "Daily Scheduled Watering Time",
        setting_ai_recommend: "AI Smart Adapt",
        setting_ai_recommend_desc: "Override schedules based on weather forecast",
        setting_theme_title: "Appearance Mode",
        setting_theme_desc: "Switch interface visual design theme",
        theme_light: "Light",
        theme_dark: "Dark",
        theme_system: "System Mode",
        settings_security_title: "Security & Account",
        btn_change_phone: "Change Mobile Number",
        btn_reset_device: "Factory Reset Gateway",
        mode_manual: "Manual Mode",
        mode_auto: "Auto Mode"
    },
    kn: {
        tagline: "ಸ್ಮಾರ್ಟ್ ಕೃಷಿ ಸರಳವಾಗಿದೆ",
        enter_btn: "ಪ್ರಾರಂಭಿಸಲು ಟ್ಯಾಪ್ ಮಾಡಿ",
        login_welcome: "ಸ್ಮಾರ್ಟ್ ಸ್ಪ್ರೌಟ್ಸ್‌ಗೆ ಸುಸ್ವಾಗತ",
        login_desc: "ಒಟಿಪಿ ಲಾಗಿನ್ ಕೋಡ್ ಪಡೆಯಲು ನಿಮ್ಮ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ.",
        invalid_phone_err: "ದಯವಿಟ್ಟು ಮಾನ್ಯವಾದ 10-ಅಂಕಿಯ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ",
        btn_get_otp: "ಒಟಿಪಿ ಲಾಗಿನ್ ಪಡೆಯಿರಿ",
        verify_title: "ಮೊಬೈಲ್ ಸಂಖ್ಯೆ ಪರಿಶೀಲಿಸಿ",
        otp_sent_msg: "ನಾವು ನಿಮ್ಮ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಗೆ 4-ಅಂಕಿಯ ಕೋಡ್ ಕಳುಹಿಸಿದ್ದೇವೆ +91 ",
        simulated_otp_alert: "ಸಿಮ್ಯುಲೇಟೆಡ್ ಕೋಡ್: ",
        otp_invalid_err: "ತಪ್ಪಾದ ಒಟಿಪಿ. ದಯವಿಟ್ಟು ಸರಿಯಾದ ಕೋಡ್ ನಮೂದಿಸಿ.",
        btn_verify: "ಪರಿಶೀಲಿಸಿ ಮತ್ತು ಮುಂದುವರಿಯಿರಿ",
        no_code: "ಕೋಡ್ ಸ್ವೀಕರಿಸಿಲ್ಲವೇ?",
        resend_otp: "ಮತ್ತೆ ಕಳುಹಿಸು",
        profile_setup_title: "ರೈತರ ಪ್ರೊಫೈಲ್ ಹೊಂದಿಸಿ",
        profile_setup_subtitle: "ಇದು ನಿಮ್ಮ ಬೆಳೆಗೆ ಅನುಗುಣವಾಗಿ ನೀರಾವರಿ ವೇಳಾಪಟ್ಟಿಗಳನ್ನು ಕಾನ್ಗರ್ ಮಾಡಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
        lbl_farmer_name: "ರೈತರ ಹೆಸರು",
        lbl_farm_name: "ಫಾರ್ಮ್ ಹೆಸರು",
        lbl_location: "ಸ್ಥಳ",
        lbl_farm_size: "ಗಾತ್ರ (ಎಕರೆ)",
        lbl_crop_type: "ಪ್ರಾಥಮಿಕ ಬೆಳೆ ಆಯ್ಕೆಮಾಡಿ",
        crop_paddy: "ಭತ್ತ (ಅಕ್ಕಿ)",
        crop_ragi: "ರಾಗಿ",
        crop_sugarcane: "ಕಬ್ಬು",
        crop_cotton: "ಹತ್ತಿ",
        crop_maize: "ಮೆಕ್ಕೆಜೋಳ",
        crop_tomatoes: "ಟೊಮ್ಯಾಟೊ",
        btn_save_profile: "ಪ್ರೊಫೈಲ್ ಉಳಿಸಿ ಮತ್ತು ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ಪ್ರವೇಶಿಸಿ",
        welcome_back: "ಮರಳಿ ಸುಸ್ವಾಗತ,",
        status_online: "ಆನ್‌ಲೈನ್",
        ai_tip_title: "ಸ್ಮಾರ್ಟ್ ಎಐ ಸಹಾಯಕ",
        ai_tip_good: "ಮಣ್ಣಿನ ತೇವಾಂಶವು ಆರೋಗ್ಯಕರ 68% ನಲ್ಲಿದೆ. ಭತ್ತಕ್ಕೆ ಇಂದು ನೀರಾವರಿ ಅಗತ್ಯವಿಲ್ಲ.",
        ai_tip_dry: "ತೇವಾಂಶವು ತೀರಾ ಕಡಿಮೆ ಇದೆ (೨೫%)! ಪಂಪ್ ಆನ್ ಮಾಡಲು ಶಿಫಾರಸು ಮಾಡಲಾಗಿದೆ.",
        ai_tip_wet: "ಮಳೆ ಸಿಮ್ಯುಲೇಟೆಡ್! ತೇವಾಂಶವು 80% ನಲ್ಲಿದೆ. ಪಂಪ್ ಆನ್ ಮಾಡಬೇಡಿ.",
        ai_tip_auto: "ಸ್ವಯಂಚಾಲಿತ ಮೋಡ್ ಸಕ್ರಿಯವಾಗಿದೆ: ತೇವಾಂಶ ಕಡಿಮೆಯಾದಾಗ ಪಂಪ್ ಸ್ವತಃ ಆನ್ ಆಗುತ್ತದೆ.",
        card_moisture_title: "ಮಣ್ಣಿನ ತೇವಾಂಶ",
        moisture_status_good: "ಆರೋಗ್ಯಕರ",
        moisture_status_dry: "ಒಣಗಿದೆ",
        moisture_status_wet: "ಒದ್ದೆಯಾಗಿದೆ",
        zone_b: "ವಲಯ ಬಿ (ದಕ್ಷಿಣ ಕ್ಷೇತ್ರ)",
        card_pump_title: "ನೀರಾವರಿ ಪಂಪ್",
        pump_off: "ಪಂಪ್ ಆಫ್ ಆಗಿದೆ",
        pump_on: "ಪಂಪ್ ಆನ್ ಆಗಿದೆ",
        pump_standby: "ಮ್ಯಾನುಯಲ್ ಸ್ಟ್ಯಾಂಡ್‌ಬೈ",
        pump_running: "ನೀರಾವರಿ ನಡೆಯುತ್ತಿದೆ...",
        pump_jammed: "ಎಚ್ಚರಿಕೆ: ಪಂಪ್ ಜಾಮ್ ಆಗಿದೆ!",
        lbl_auto_mode: "ಆಟೋ-ನೀರಾವರಿ",
        auto_mode_desc: "ಸ್ವಯಂಚಾಲಿತ ಪಂಪ್ ನಿಯಂತ್ರಣ",
        card_tank_title: "ನೀರಿನ ಟ್ಯಾಂಕ್ ಮಟ್ಟ",
        tank_capacity: "ಸಾಮರ್ಥ್ಯ:",
        tank_available: "ಉಳಿದಿರುವುದು:",
        tank_low_alert: "ನೀರಿನ ಮಟ್ಟ ಕಡಿಮೆ ಇದೆ! ಮರುಪೂರಣ ಮಾಡಿ.",
        stat_water_saved: "ಇಂದು ಉಳಿಸಿದ ನೀರು",
        stat_next_irrigation: "ಮುಂದಿನ ವೇಳಾಪಟ್ಟಿ",
        analytics_title: "ನೀರಾವರಿ ವಿಶ್ಲೇಷಣೆ",
        analytics_subtitle: "ತೇವಾಂಶದ ಮಾದರಿಗಳು ಮತ್ತು ನೀರಿನ ಬಳಕೆಯನ್ನು ಪರಿಶೀಲಿಸಿ.",
        tab_daily: "ದೈನಂದಿನ",
        tab_weekly: "ವಾರದ",
        tab_monthly: "ಮಾಸಿಕ",
        chart_moisture_trend: "ಮಣ್ಣಿನ ತೇವಾಂಶದ ಪ್ರವೃತ್ತಿ (%)",
        chart_water_usage: "ಬಳಸಿದ ನೀರು (ಲೀಟರ್)",
        insight_title: "ನೀರು ಸಂರಕ್ಷಣಾ ವರದಿ",
        analytics_insight_daily: "ಅದ್ಭುತ! ಸ್ವಯಂಚಾಲಿತ ವ್ಯವಸ್ಥೆಯು ಇಂದು ನೀರು ವ್ಯರ್ಥವಾಗುವುದನ್ನು ತಡೆದಿದೆ. ನೀವು 15% ಹೆಚ್ಚು ನೀರನ್ನು ಉಳಿಸಿದ್ದೀರಿ.",
        analytics_insight_weekly: "ವಾರದ ತೇವಾಂಶ ಸರಾಸರಿ 64% ಆಗಿತ್ತು. ಸ್ವಯಂಚಾಲಿತ ವ್ಯವಸ್ಥೆಯು ಒಟ್ಟು 1,260 ಲೀಟರ್ ನೀರನ್ನು ಉಳಿಸಿದೆ.",
        analytics_insight_monthly: "ಮಾಸಿಕ ನೀರಿನ ಬಳಕೆಯ ಗುರಿ ತಲುಪಲಾಗಿದೆ! ಒಟ್ಟು 5,420 ಲೀಟರ್ ನೀರು ಉಳಿಸಲಾಗಿದೆ.",
        notifications_title: "ಸಿಸ್ಟಮ್ ಎಚ್ಚರಿಕೆಗಳು",
        notifications_subtitle: "ಸಂವೇದಕಗಳು ಮತ್ತು ಆಟೋ ಮೋಡ್‌ನಿಂದ ಲೈವ್ ಅಧಿಸೂಚನೆಗಳು.",
        clear_all: "ಎಲ್ಲವನ್ನೂ ತೆರವುಗೊಳಿಸಿ",
        no_alerts_title: "ಯಾವುದೇ ಹೊಸ ಎಚ್ಚರಿಕೆಗಳಿಲ್ಲ!",
        no_alerts_desc: "ಹೊಸ ಅಧಿಸೂಚನೆಗಳು ಇಲ್ಲಿ ಕಾಣಿಸಿಕೊಳ್ಳುತ್ತವೆ.",
        notif_critical: "ತುರ್ತು",
        notif_notice: "ಸೂಚನೆ",
        notif_weather: "ಹವಾಮಾನ",
        notif_system: "ವ್ಯವಸ್ಥೆ",
        alert_low_moisture: "ತುರ್ತು: ವಲಯ ಬಿ ನಲ್ಲಿ ಕಡಿಮೆ ತೇವಾಂಶ ಪತ್ತೆಯಾಗಿದೆ! ತೇವಾಂಶವು 25% ಆಗಿದೆ (ಮಿತಿ: 45%).",
        alert_pump_auto_off: "ಸೂಚನೆ: ಮಣ್ಣಿನ ತೇವಾಂಶ 75% ತಲುಪಿದ್ದರಿಂದ ಪಂಪ್ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಆಫ್ ಆಗಿದೆ.",
        alert_rain_incoming: "ಹವಾಮಾನ ಎಚ್ಚರಿಕೆ: ನಾಳೆ ಮಳೆಯಾಗುವ ಮುನ್ಸೂಚನೆ ಇದೆ. ಸ್ವಯಂಚಾಲಿತ ನೀರಾವರಿ ತಡೆಹಿಡಿಯಲಾಗುತ್ತದೆ.",
        alert_gateway_online: "ವ್ಯವಸ್ಥೆ: ಅಗ್ರಿಗೇಟ್‌ವೇ ಆನ್‌ಲೈನ್ ಸಂಪರ್ಕ ಹೊಂದಿದೆ ಮತ್ತು ಸಂವೇದಕಗಳೊಂದಿಗೆ ಸಿಂಕ್ ಆಗಿದೆ.",
        farm_details_title: "ಫಾರ್ಮ್ ಮಾಹಿತಿ",
        spec_farm_name: "ಫಾರ್ಮ್ ಹೆಸರು",
        spec_crop_type: "ಪ್ರಾಥಮಿಕ ಬೆಳೆ",
        spec_farm_size: "ಫಾರ್ಮ್ ಗಾತ್ರ",
        spec_device_id: "ಗೇಟ್‌ವೇ ಐಡಿ",
        award_title: "ಒಟ್ಟು ಉಳಿಸಿದ ನೀರು",
        award_desc: "ನೀವು ಮಂಡ್ಯ ಜಿಲ್ಲೆಯ ನೀರು ಸಂರಕ್ಷಿಸುವ ರೈತರಲ್ಲಿ ಅಗ್ರ 8% ಗೆ ಸೇರಿದ್ದೀರಿ!",
        btn_edit_profile: "ಪ್ರೊಫೈಲ್ ಸಂಪಾದಿಸಿ",
        settings_title: "ಸಿಸ್ಟಮ್ ಸೆಟ್ಟಿಂಗ್‌ಗಳು",
        settings_subtitle: "ಮಿತಿಗಳು ಮತ್ತು ಸಾಧನದ ನಿಯತಾಂಕಗಳನ್ನು ಕಾನ್ಫಿಗರ್ ಮಾಡಿ.",
        settings_lang_title: "ಭಾಷೆ ಆಯ್ಕೆ / Language Selection",
        settings_threshold_title: "ಸ್ವಯಂಚಾಲಿತ ನೀರಾವರಿ ಮಿತಿಗಳು",
        settings_threshold_desc: "ತೇವಾಂಶವು ಪ್ರಾರಂಭದ ಮಿತಿಗಿಂತ ಕಡಿಮೆಯಾದಾಗ ನೀರಾವರಿ ಪ್ರಚೋದಿಸುತ್ತದೆ ಮತ್ತು ನಿಲುಗಡೆ ಮಿತಿಯಲ್ಲಿ ನಿಲ್ಲುತ್ತದೆ.",
        lbl_start_threshold: "ಪಂಪ್ ಪ್ರಾರಂಭದ ಮಿತಿ:",
        lbl_stop_threshold: "ಪಂಪ್ ನಿಲುಗಡೆ ಮಿತಿ:",
        settings_alerts_title: "ಅಧಿಸೂಚನೆ ಸೆಟ್ಟಿಂಗ್‌ಗಳು",
        setting_alert_pump: "ಪಂಪ್ ಸ್ಥಿತಿ ಅಧಿಸೂಚನೆ",
        setting_alert_pump_desc: "ಪಂಪ್ ಸ್ಥಿತಿ ಬದಲಾದಾಗ ಎಸ್‌ಎಂಎಸ್ ಕಳುಹಿಸಿ",
        setting_alert_moisture: "ತೇವಾಂಶ ವೈಪರೀತ್ಯ ಎಚ್ಚರಿಕೆ",
        setting_alert_moisture_desc: "ತೇವಾಂಶವು 30% ಕ್ಕಿಂತ ಕಡಿಮೆಯಾದಾಗ ಎಚ್ಚರಿಸಿ",
        setting_alert_weather: "ಹವಾಮಾನ ಮುನ್ಸೂಚನೆ ಸಲಹೆ",
        setting_alert_weather_desc: "ಹವಾಮಾನ ಮುನ್ಸೂಚನೆಯ ಆಧಾರದ ಮೇಲೆ ಕೃಷಿ ಸಲಹೆಗಳು",
        settings_device_title: "ಸಾಧನ ಮತ್ತು ಗೇಟ್‌ವೇ ಹಾರ್ಡ್‌ವೇರ್",
        btn_restart_gateway: "ಗೇಟ್‌ವೇ ಮರುಪ್ರಾರಂಭಿಸಿ",
        setting_dark_mode: "ಡಾರ್ಕ್ ಮೋಡ್ ಬೆಂಬಲ",
        setting_dark_mode_desc: "ಇಂಟರ್ಫೇಸ್ ಥೀಮ್ ಬದಲಾಯಿಸಿ",
        nav_home: "ಮನೆ",
        nav_analytics: "ವಿಶ್ಲೇಷಣೆ",
        nav_alerts: "ಎಚ್ಚರಿಕೆಗಳು",
        nav_profile: "ಪ್ರೊಫೈಲ್",
        nav_settings: "ಸೆಟ್ಟಿಂಗ್‌ಗಳು",
        badge_connected: "ಸಂಪರ್ಕಗೊಂಡಿದೆ",
        badge_offline: "ಸಂಪರ್ಕ ಕಡಿತಗೊಂಡಿದೆ",
        otp_sms_alert: "ಸಿಮ್ಯುಲೇಟೆಡ್ ಕೋಡ್:",
        
        // KANNADA TRANSLATIONS FOR NEW WIDGETS
        choose_lang_title: "ನಿಮ್ಮ ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ",
        choose_lang_desc: "ಸ್ಮಾರ್ಟ್ ಸ್ಪ್ರೌಟ್ಸ್ ಬಳಸಲು ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ",
        btn_continue: "ಮುಂದುವರಿಯಿರಿ",
        verify_success_title: "ಪರಿಶೀಲನೆ ಯಶಸ್ವಿಯಾಗಿದೆ",
        verify_success_desc: "ನಿಮ್ಮ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಯನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ. ನಿಮ್ಮ ಪ್ರೊಫೈಲ್ ಹೊಂದಿಸಲು ಮರುನಿರ್ದೇಶಿಸಲಾಗುತ್ತಿದೆ...",
        lbl_profile_picture: "ರೈತರ ಪ್ರೊಫೈಲ್ ಫೋಟೋ",
        lbl_village: "ಗ್ರಾಮ",
        lbl_district: "ಜಿಲ್ಲೆ",
        lbl_state: "ರಾಜ್ಯ",
        lbl_farmer_phone: "ಮೊಬೈಲ್ ಸಂಖ್ಯೆ",
        offline_title: "ಆಫ್‌ಲೈನ್ ಮೋಡ್ ಸಕ್ರಿಯವಾಗಿದೆ",
        offline_desc: "ESP32 ಗೇಟ್‌ವೇ ಆಫ್‌ಲೈನ್‌ನಲ್ಲಿದೆ. ಸಂಗ್ರಹಿಸಿದ ಡೇಟಾವನ್ನು ತೋರಿಸಲಾಗುತ್ತಿದೆ. ನಿಯಂತ್ರಣಗಳು ತಾತ್ಕಾಲಿಕವಾಗಿ ನಿಷ್ಕ್ರಿಯಗೊಂಡಿವೆ.",
        weather_intel_title: "ಹವಾಮಾನ ಮಾಹಿತಿ",
        weather_loc: "ಮಂಡ್ಯ, ಭಾರತ",
        weather_cond_sunny: "ಭಾಗಶಃ ಬಿಸಿಲು",
        weather_humidity: "ತೇವಾಂಶ (ಹವಾಮಾನ)",
        weather_rain_prob: "ಮಳೆ ಸಂಭವನೀಯತೆ",
        weather_wind: "ಗಾಳಿಯ ವೇಗ",
        connectivity_status_title: "ಐಒಟಿ ಸಂವೇದಕ ನೆಟ್‌ವರ್ಕ್",
        conn_connected: "ಸಂಪರ್ಕಿತಗೊಂಡಿದೆ",
        conn_online: "ಆನ್‌ಲೈನ್",
        conn_synced: "ಸಿಂಕ್ ಆಗಿದೆ",
        stat_today_usage: "ಇಂದಿನ ಬಳಕೆ",
        stat_weekly_usage: "ವಾರದ ಬಳಕೆ",
        stat_pump_runtime: "ಪಂಪ್ ಚಾಲನಾ ಸಮಯ",
        chart_efficiency_trend: "ನೀರಾವರಿ ದಕ್ಷತೆ ಗ್ರಾಫ್ (%)",
        ai_insight_moisture: "ವಲಯ ಬಿ ಯಲ್ಲಿ ಮಣ್ಣಿನ ತೇವಾಂಶ ಒಣಗಿದೆ (೨೫%).",
        ai_insight_irrigation: "ಇಂದು ಸಂಜೆ ೬:೦೦ ಕ್ಕೆ ನೀರುಣಿಸಲು ಶಿಫಾರಸು ಮಾಡಲಾಗಿದೆ.",
        ai_insight_rain: "ನಾಳೆ ಮಳೆಯಾಗುವ ಮುನ್ಸೂಚನೆ ಇದೆ. ಆಟೋ-ಮೋಡ್ ನೀರುಣಿಸುವುದನ್ನು ನಿಲ್ಲಿಸುತ್ತದೆ.",
        prof_stat_water: "ಉಳಿಸಿದ ನೀರು",
        prof_stat_devices: "ಸಂಪರ್ಕಿತ",
        prof_stat_irrigate: "ನೀರಾವರಿಗಳು",
        prof_stat_score: "ದಕ್ಷತೆ",
        soil_loamy: "ಕೆಂಪು ಲೋಮಿ ಮಣ್ಣು",
        method_drip: "ಹನಿ ನೀರಾವರಿ",
        prof_manage_devices: "ಸಾಧನಗಳನ್ನು ನಿರ್ವಹಿಸಿ",
        prof_help_support: "ಸಹಾಯ ಮತ್ತು ಬೆಂಬಲ",
        btn_logout: "ಲಾಗ್ ಔಟ್",
        lbl_schedule_time: "ದೈನಂದಿನ ನೀರಾವರಿ ಸಮಯ",
        setting_ai_recommend: "ಎಐ ಸ್ಮಾರ್ಟ್ ಅಡಾಪ್ಟ್",
        setting_ai_recommend_desc: "ಹವಾಮಾನ ಮುನ್ಸೂಚನೆ ಆಧಾರದ ಮೇಲೆ ವೇಳಾಪಟ್ಟಿ ಬದಲಾಯಿಸಿ",
        setting_theme_title: "ಗೋಚರತೆ ಮೋಡ್",
        setting_theme_desc: "ಇಂಟರ್ಫೇಸ್ ದೃಶ್ಯ ವಿನ್ಯಾಸದ ಥೀಮ್ ಬದಲಾಯಿಸಿ",
        theme_light: "ಬೆಳಕು",
        theme_dark: "ಕತ್ತಲೆ",
        theme_system: "ಸಿಸ್ಟಮ್ ಮೋಡ್",
        settings_security_title: "ಭದ್ರತೆ ಮತ್ತು ಖಾತೆ",
        btn_change_phone: "ಮೊಬೈಲ್ ಸಂಖ್ಯೆ ಬದಲಾಯಿಸಿ",
        btn_reset_device: "ಗೇಟ್‌ವೇ ಫ್ಯಾಕ್ಟರಿ ರಿಸೆಟ್ ಮಾಡಿ",
        mode_manual: "ಮ್ಯಾನುಯಲ್ ಮೋಡ್",
        mode_auto: "ಆಟೋ ಮೋಡ್"
    }
};

// 2. CENTRAL PROTOTYPE STATE MACHINE
const state = {
    // Nav Navigation states
    currentScreen: 'splash',
    isLoggedIn: false,
    
    // User Profile variables (saves to home dashboard/profile card)
    farmerName: 'Ramesh Gowda',
    farmName: 'Gowda Green Estate',
    location: 'Mandya, Karnataka',
    farmSize: '4.5',
    cropType: 'Paddy',
    
    // Live Simulated Hardware Sensors State
    soilMoisture: 68,
    waterTankFill: 85,
    isPumpOn: false,
    isAutoMode: false,
    isOnline: true,
    
    // Custom settings thresholds
    startThreshold: 45,
    stopThreshold: 75,
    language: 'en',
    darkMode: false,
    
    // Simulated alerts registry
    notificationsCount: 2,
    
    // Analytical range selection ('daily', 'weekly', 'monthly')
    analyticsRange: 'daily'
};

// Global variables for Chart instances
let moistureChartInstance = null;
let waterChartInstance = null;
let efficiencyChartInstance = null;
let pumpInterval = null; // Stores timing loop for moisture levels
let otpTimerInterval = null; // Countdown timer for OTP resend

// ==========================================================================
// 3. CORE ROUTING & TRANSITIONS CONTROL
// ==========================================================================
function navigateToScreen(targetScreenId) {
    console.log(`Navigating to screen: ${targetScreenId}`);
    
    // Remove active state from all screens
    document.querySelectorAll('.app-screen').forEach(screen => {
        screen.classList.remove('active');
    });

    // Handle screen exceptions (Splash, Language selection, Login, OTP, Profile-setup don't display the navigation bar)
    const noNavBarScreens = ['splash', 'language-select', 'login', 'otp', 'create-profile'];
    const navBar = document.getElementById('mobile-nav-bar');
    
    if (noNavBarScreens.includes(targetScreenId)) {
        navBar.classList.add('hidden');
    } else {
        navBar.classList.remove('hidden');
        // Update Bottom Nav Active Styling
        document.querySelectorAll('.nav-item').forEach(btn => {
            if (btn.dataset.target === targetScreenId || (targetScreenId === 'dashboard' && btn.dataset.target === 'dashboard')) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    // Activate the targeted screen viewport
    const targetDiv = document.getElementById(`screen-${targetScreenId}`);
    if (targetDiv) {
        targetDiv.classList.add('active');
        state.currentScreen = targetScreenId;
        logToConsole(`[Navigation] Screen swiped to: ${targetScreenId.toUpperCase()}`);
    } else {
        // Fallback for subscreen/otp
        const otpDiv = document.getElementById('screen-otp');
        if (targetScreenId === 'otp' && otpDiv) {
            otpDiv.classList.add('active');
            state.currentScreen = 'otp';
        }
    }

    // Refresh charts when entering the analytics view
    if (targetScreenId === 'analytics') {
        setTimeout(initOrUpdateCharts, 100);
    }
    
    // Update presenter nav panel list visual active button
    document.querySelectorAll('.screen-link-btn').forEach(btn => {
        if (btn.dataset.target === targetScreenId) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Make sure SVG icons are rendered
    lucide.createIcons();
}

// Helper to push timestamps into the presenter simulator logs
function logToConsole(message, type = 'muted') {
    const consoleBox = document.getElementById('simulation-console');
    if (!consoleBox) return;

    const time = new Date().toLocaleTimeString();
    const line = document.createElement('div');
    line.className = `console-line text-${type}`;
    line.innerText = `[${time}] ${message}`;
    consoleBox.appendChild(line);
    
    // Auto scroll to bottom
    consoleBox.scrollTop = consoleBox.scrollHeight;
}

// ==========================================================================
// 4. SIMULATOR LOGIC & ANOMALIES
// ==========================================================================
function updateSoilMoisture(newVal) {
    state.soilMoisture = parseInt(newVal);
    
    // Update UI components displaying moisture
    const textEl = document.getElementById('dial-moisture-text');
    const fillEl = document.getElementById('dial-moisture-fill');
    const labelEl = document.getElementById('dial-moisture-status');
    const sliderEl = document.getElementById('sim-moisture-slider');
    const valueEl = document.getElementById('sim-moisture-val');

    if (textEl) textEl.innerText = `${state.soilMoisture}%`;
    if (sliderEl) sliderEl.value = state.soilMoisture;
    if (valueEl) valueEl.innerText = `${state.soilMoisture}%`;

    // Calculate circular SVG dashoffset
    // Radius of circular dial is 40. Circumference is 2 * pi * r = 251.2
    // If moisture is 100%, offset is 0. If 0%, offset is 251.
    if (fillEl) {
        const offset = 251 - (251 * state.soilMoisture) / 100;
        fillEl.style.strokeDashoffset = offset;
    }

    // Update health labels & colors
    if (labelEl) {
        if (state.soilMoisture < 45) {
            labelEl.innerText = getTranslationKey('moisture_status_dry');
            labelEl.className = 'moisture-label text-terracotta';
            if (fillEl) fillEl.style.stroke = 'var(--terracotta)';
        } else if (state.soilMoisture > 78) {
            labelEl.innerText = getTranslationKey('moisture_status_wet');
            labelEl.className = 'moisture-label text-blue';
            if (fillEl) fillEl.style.stroke = '#1D4ED8';
        } else {
            labelEl.innerText = getTranslationKey('moisture_status_good');
            labelEl.className = 'moisture-label text-green';
            if (fillEl) fillEl.style.stroke = 'var(--primary-green)';
        }
    }

    // Update AI recommendation tip box on home page dynamically
    updateAIPanelMessage();

    // Check Auto-mode triggers
    checkAutoIrrigationTriggers();
}

function updateWaterTankLevel(newVal) {
    state.waterTankFill = parseInt(newVal);
    
    // Update UI
    const waveFill = document.getElementById('tank-water-height');
    const textLabel = document.getElementById('tank-percent-label');
    const availableLitersText = document.getElementById('tank-available-liters');
    const warningText = document.getElementById('tank-alert-msg');
    
    const sliderEl = document.getElementById('sim-tank-slider');
    const valueEl = document.getElementById('sim-tank-val');

    if (waveFill) waveFill.style.height = `${state.waterTankFill}%`;
    if (textLabel) textLabel.innerText = `${state.waterTankFill}%`;
    if (sliderEl) sliderEl.value = state.waterTankFill;
    if (valueEl) valueEl.innerText = `${state.waterTankFill}%`;

    // Available capacity calculation (Total tank capacity = 5000L)
    const availableLiters = Math.round((5000 * state.waterTankFill) / 100);
    if (availableLitersText) availableLitersText.innerText = `${availableLiters.toLocaleString()} Liters`;

    // Warning visibility
    if (state.waterTankFill < 25) {
        if (warningText) warningText.classList.remove('hidden');
        logToConsole('[Hardware Alert] Water tank drops below critical capacity!', 'red');
    } else {
        if (warningText) warningText.classList.add('hidden');
    }
}

// Update AI message box based on current soil and mode status
function updateAIPanelMessage() {
    const tipText = document.getElementById('ai-tip-text');
    if (!tipText) return;

    if (state.isPumpOn) {
        tipText.innerText = getTranslationKey('pump_running');
    } else if (state.soilMoisture < 45) {
        tipText.innerText = getTranslationKey('ai_tip_dry');
    } else if (state.soilMoisture > 78) {
        tipText.innerText = getTranslationKey('ai_tip_wet');
    } else if (state.isAutoMode) {
        tipText.innerText = getTranslationKey('ai_tip_auto');
    } else {
        // Build customized default suggestion based on crop type
        const crop = state.cropType;
        if (state.language === 'kn') {
            tipText.innerText = `ಮಣ್ಣಿನ ತೇವಾಂಶವು ${state.soilMoisture}% ರಷ್ಟಿದೆ. ನಿಮ್ಮ ${crop} ಬೆಳೆಗೆ ತೇವಾಂಶ ಸ್ಥಿತಿ ಅತ್ಯುತ್ತಮವಾಗಿದೆ.`;
        } else {
            tipText.innerText = `Soil moisture is at a healthy ${state.soilMoisture}%. Irrigation levels are optimal for your ${crop} crop.`;
        }
    }
}

// Auto Irrigation logic checks
function checkAutoIrrigationTriggers() {
    if (!state.isAutoMode) return;

    // Trigger ON condition
    if (state.soilMoisture < state.startThreshold && !state.isPumpOn) {
        logToConsole(`[Auto-Irrigate] Moisture (${state.soilMoisture}%) fell below start threshold (${state.startThreshold}%). Automatically starting pump.`, 'green');
        
        // Add notification
        addSystemNotification(
            'critical',
            'alert_low_moisture',
            `CRITICAL: Low moisture detected in Zone B! Moisture level is at ${state.soilMoisture}% (Threshold: ${state.startThreshold}%). Auto-irrigation pump turned ON.`
        );
        
        togglePumpState(true);
    }
    
    // Trigger OFF condition
    if (state.soilMoisture >= state.stopThreshold && state.isPumpOn) {
        logToConsole(`[Auto-Irrigate] Moisture (${state.soilMoisture}%) reached stop target (${state.stopThreshold}%). Automatically stopping pump.`, 'green');
        
        // Add notification
        addSystemNotification(
            'notice',
            'alert_pump_auto_off',
            `NOTICE: Irrigation pump automatically turned OFF. Target moisture limit of ${state.stopThreshold}% achieved.`
        );
        
        togglePumpState(false);
    }
}

// ==========================================================================
// 5. PUMP CONTROLLER SIMULATION
// ==========================================================================
function togglePumpState(forceState = null) {
    const nextState = forceState !== null ? forceState : !state.isPumpOn;
    
    if (nextState === state.isPumpOn) return; // No change
    
    state.isPumpOn = nextState;
    
    const pumpBtn = document.getElementById('btn-toggle-pump');
    const pumpCard = document.getElementById('pump-card');
    const statusText = document.getElementById('pump-status-text');
    const subText = document.getElementById('pump-sub-text');
    const indicatorGlow = document.getElementById('pump-indicator-glow');
    const dropletsIcon = document.getElementById('pump-icon');
    const pipeAnimation = document.getElementById('water-pipe-animation');

    if (state.isPumpOn) {
        // Turn ON
        if (pumpBtn) {
            pumpBtn.className = 'btn-pump-switch on';
        }
        if (statusText) statusText.innerText = getTranslationKey('pump_on');
        if (subText) subText.innerText = getTranslationKey('pump_running');
        if (indicatorGlow) indicatorGlow.className = 'pump-status-indicator on';
        if (dropletsIcon) dropletsIcon.classList.add('active-spin');
        if (pipeAnimation) pipeAnimation.classList.remove('hidden');

        logToConsole('Irrigation Pump triggered: ON. Water flow initiated.', 'green');

        // Start real-time hardware moisture accretion timer
        if (pumpInterval) clearInterval(pumpInterval);
        pumpInterval = setInterval(() => {
            // Increase soil moisture
            if (state.soilMoisture < 98) {
                updateSoilMoisture(state.soilMoisture + 1);
            }
            
            // Decrease water tank level
            if (state.waterTankFill > 2) {
                updateWaterTankLevel(state.waterTankFill - 1);
            } else {
                // Tank empty, turn off pump
                logToConsole('[Pump Failure] Water tank empty! Pump turned off automatically to prevent dry running.', 'red');
                addSystemNotification(
                    'critical',
                    'tank_low_alert',
                    'CRITICAL: Water tank empty! Irrigation aborted automatically to prevent pump motor burn-out.'
                );
                togglePumpState(false);
            }

            // Update charts dynamically if visible
            if (state.currentScreen === 'analytics') {
                initOrUpdateCharts();
            }
        }, 1200);

    } else {
        // Turn OFF
        if (pumpBtn) {
            pumpBtn.className = 'btn-pump-switch off';
        }
        if (statusText) statusText.innerText = getTranslationKey('pump_off');
        if (subText) subText.innerText = getTranslationKey('pump_standby');
        if (indicatorGlow) indicatorGlow.className = 'pump-status-indicator';
        if (dropletsIcon) dropletsIcon.classList.remove('active-spin');
        if (pipeAnimation) pipeAnimation.classList.add('hidden');

        logToConsole('Irrigation Pump stopped: OFF.', 'muted');
        
        if (pumpInterval) {
            clearInterval(pumpInterval);
            pumpInterval = null;
        }
    }
    
    updateAIPanelMessage();
    lucide.createIcons();
}

// ==========================================================================
// 6. NOTIFICATION SYSTEM
// ==========================================================================
function addSystemNotification(priority, translateKey, rawEnglishText) {
    const listContainer = document.getElementById('alerts-container');
    const emptyState = document.getElementById('notif-empty-state');
    
    if (!listContainer) return;
    
    // Increment notification badge counts
    state.notificationsCount += 1;
    updateNotificationBadge();

    // Create element structure
    const notifCard = document.createElement('div');
    notifCard.className = `notif-card ${priority} unread`;
    
    // Choose icon
    let iconName = 'info';
    if (priority === 'critical') iconName = 'alert-circle';
    else if (priority === 'notice') iconName = 'info';
    
    notifCard.innerHTML = `
        <div class="notif-icon-wrapper">
            <i data-lucide="${iconName}"></i>
        </div>
        <div class="notif-body">
            <div class="notif-header-line">
                <span class="notif-tag" data-translate="notif_${priority}">${priority.toUpperCase()}</span>
                <span class="notif-time">Just now</span>
            </div>
            <p class="notif-text" data-translate="${translateKey}">${rawEnglishText}</p>
        </div>
        <div class="notif-status-dot"></div>
    `;

    // Insert at top of list
    listContainer.insertBefore(notifCard, listContainer.firstChild);
    
    if (emptyState) emptyState.classList.add('hidden');
    
    // Force lucide update
    lucide.createIcons();

    // Mark as read when clicking the card
    notifCard.addEventListener('click', () => {
        if (notifCard.classList.contains('unread')) {
            notifCard.classList.remove('unread');
            const dot = notifCard.querySelector('.notif-status-dot');
            if (dot) dot.remove();
            
            if (state.notificationsCount > 0) {
                state.notificationsCount -= 1;
                updateNotificationBadge();
            }
        }
    });

    logToConsole(`[Alert Inbound] Notification triggered: ${priority.toUpperCase()} - ${rawEnglishText}`, priority === 'critical' ? 'red' : 'orange');
}

function updateNotificationBadge() {
    const badge = document.getElementById('notif-badge-count');
    if (!badge) return;
    
    if (state.notificationsCount > 0) {
        badge.classList.remove('hidden');
        badge.innerText = state.notificationsCount;
    } else {
        badge.classList.add('hidden');
    }
}

// Clear all notifications
function clearAllNotifications() {
    const listContainer = document.getElementById('alerts-container');
    const emptyState = document.getElementById('notif-empty-state');
    
    if (listContainer) {
        listContainer.innerHTML = '';
    }
    
    if (emptyState) {
        emptyState.classList.remove('hidden');
    }

    state.notificationsCount = 0;
    updateNotificationBadge();
    logToConsole('[Alerts Console] All notifications cleared.', 'muted');
}

// ==========================================================================
// 7. HIGH FIDELITY MULTI-RANGE CHARTS (CHART.JS)
// ==========================================================================
const chartMockData = {
    daily: {
        labels: ['06:00', '09:00', '12:00', '15:00', '18:00', '21:00'],
        moisture: [55, 60, 68, 67, 64, 62],
        water: [180, 0, 120, 0, 150, 0],
        efficiency: [90, 92, 95, 94, 91, 92]
    },
    weekly: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        moisture: [60, 65, 54, 52, 68, 72, 68],
        water: [350, 320, 420, 150, 200, 180, 150],
        efficiency: [88, 90, 85, 89, 93, 95, 92]
    },
    monthly: {
        labels: ['W1', 'W2', 'W3', 'W4'],
        moisture: [62, 58, 64, 68],
        water: [1200, 1500, 980, 1100],
        efficiency: [89, 91, 93, 92]
    }
};

function initOrUpdateCharts() {
    // Canvas context handles
    const moistureCtx = document.getElementById('moistureChart')?.getContext('2d');
    const waterCtx = document.getElementById('waterChart')?.getContext('2d');
    const efficiencyCtx = document.getElementById('efficiencyChart')?.getContext('2d');
    
    if (!moistureCtx || !waterCtx) return;

    const currentRange = state.analyticsRange;
    const dataSet = chartMockData[currentRange];
    
    // Dynamically inject the active live simulated moisture level into the last data point
    const moistureData = [...dataSet.moisture];
    if (currentRange === 'daily') {
        moistureData[moistureData.length - 1] = state.soilMoisture;
    }

    // Chart.js Theme configuration
    const isDark = state.darkMode;
    const gridColor = isDark ? '#2D3748' : '#E2E8F0';
    const textLabelColor = isDark ? '#94A3B8' : '#64748B';

    // 1. Moisture line chart
    if (moistureChartInstance) {
        moistureChartInstance.data.labels = dataSet.labels;
        moistureChartInstance.data.datasets[0].data = moistureData;
        moistureChartInstance.options.scales.x.grid.color = gridColor;
        moistureChartInstance.options.scales.y.grid.color = gridColor;
        moistureChartInstance.options.scales.x.ticks.color = textLabelColor;
        moistureChartInstance.options.scales.y.ticks.color = textLabelColor;
        moistureChartInstance.update();
    } else {
        moistureChartInstance = new Chart(moistureCtx, {
            type: 'line',
            data: {
                labels: dataSet.labels,
                datasets: [{
                    label: 'Moisture %',
                    data: moistureData,
                    borderColor: '#2E7D32',
                    backgroundColor: 'rgba(46, 125, 50, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: '#2E7D32',
                    pointRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    x: { grid: { color: gridColor }, ticks: { color: textLabelColor } },
                    y: { grid: { color: gridColor }, ticks: { color: textLabelColor }, min: 0, max: 100 }
                }
            }
        });
    }

    // 2. Water bar chart
    if (waterChartInstance) {
        waterChartInstance.data.labels = dataSet.labels;
        waterChartInstance.data.datasets[0].data = dataSet.water;
        waterChartInstance.options.scales.x.grid.color = gridColor;
        waterChartInstance.options.scales.y.grid.color = gridColor;
        waterChartInstance.options.scales.x.ticks.color = textLabelColor;
        waterChartInstance.options.scales.y.ticks.color = textLabelColor;
        waterChartInstance.update();
    } else {
        waterChartInstance = new Chart(waterCtx, {
            type: 'bar',
            data: {
                labels: dataSet.labels,
                datasets: [{
                    label: 'Liters Consumed',
                    data: dataSet.water,
                    backgroundColor: 'rgba(30, 136, 229, 0.75)',
                    borderRadius: 6,
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    x: { grid: { display: false }, ticks: { color: textLabelColor } },
                    y: { grid: { color: gridColor }, ticks: { color: textLabelColor } }
                }
            }
        });
    }

    // 3. Efficiency line chart
    if (efficiencyCtx) {
        if (efficiencyChartInstance) {
            efficiencyChartInstance.data.labels = dataSet.labels;
            efficiencyChartInstance.data.datasets[0].data = dataSet.efficiency;
            efficiencyChartInstance.options.scales.x.grid.color = gridColor;
            efficiencyChartInstance.options.scales.y.grid.color = gridColor;
            efficiencyChartInstance.options.scales.x.ticks.color = textLabelColor;
            efficiencyChartInstance.options.scales.y.ticks.color = textLabelColor;
            efficiencyChartInstance.update();
        } else {
            efficiencyChartInstance = new Chart(efficiencyCtx, {
                type: 'line',
                data: {
                    labels: dataSet.labels,
                    datasets: [{
                        label: 'Efficiency %',
                        data: dataSet.efficiency,
                        borderColor: '#8D6E63',
                        backgroundColor: 'rgba(141, 110, 99, 0.1)',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.4,
                        pointBackgroundColor: '#8D6E63',
                        pointRadius: 4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: {
                        x: { grid: { color: gridColor }, ticks: { color: textLabelColor } },
                        y: { grid: { color: gridColor }, ticks: { color: textLabelColor }, min: 0, max: 100 }
                    }
                }
            });
        }
    }

    // Update Average details dynamically
    const avgMoistureText = document.getElementById('avg-moisture-span');
    const totalWaterText = document.getElementById('total-water-span');
    const avgEfficiencyText = document.getElementById('avg-efficiency-span');
    
    // Average calculation
    const avgMoisture = Math.round(moistureData.reduce((a,b)=>a+b, 0) / moistureData.length);
    const totalWater = dataSet.water.reduce((a,b)=>a+b, 0);
    const avgEfficiency = Math.round(dataSet.efficiency.reduce((a,b)=>a+b, 0) / dataSet.efficiency.length);

    if (avgMoistureText) avgMoistureText.innerText = `Avg: ${avgMoisture}%`;
    if (totalWaterText) totalWaterText.innerText = `${currentRange === 'daily' ? 'Today' : currentRange === 'weekly' ? 'Weekly' : 'Monthly'} Total: ${totalWater.toLocaleString()}L`;
    if (avgEfficiencyText) avgEfficiencyText.innerText = `Avg: ${avgEfficiency}%`;
}

// ==========================================================================
// 8. LOCALIZATION / LANGUAGE TRANSLATION CONTROLLER
// ==========================================================================
function toggleLanguage(langCode) {
    if (langCode === state.language) return;
    
    state.language = langCode;
    
    // Update active button layout styles
    const btnEn = document.getElementById('lang-btn-en');
    const btnKn = document.getElementById('lang-btn-kn');
    
    if (langCode === 'kn') {
        if (btnKn) btnKn.classList.add('active');
        if (btnEn) btnEn.classList.remove('active');
        logToConsole('[Localization] Language switched to: KANNADA (ಕನ್ನಡ)', 'green');
    } else {
        if (btnEn) btnEn.classList.add('active');
        if (btnKn) btnKn.classList.remove('active');
        logToConsole('[Localization] Language switched to: ENGLISH', 'green');
    }

    // Scan DOM for [data-translate] keys and translate them
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.dataset.translate;
        const translatedText = getTranslationKey(key);
        
        if (translatedText) {
            // Check if element is an input placeholder
            if (element.tagName === 'INPUT') {
                element.placeholder = translatedText;
            } else {
                element.innerHTML = translatedText;
            }
        }
    });

    // Translate select box options specifically
    const cropSelect = document.getElementById('crop-type');
    if (cropSelect) {
        cropSelect.options[0].text = getTranslationKey('crop_paddy');
        cropSelect.options[1].text = getTranslationKey('crop_ragi');
        cropSelect.options[2].text = getTranslationKey('crop_sugarcane');
        cropSelect.options[3].text = getTranslationKey('crop_cotton');
        cropSelect.options[4].text = getTranslationKey('crop_maize');
        cropSelect.options[5].text = getTranslationKey('crop_tomatoes');
    }

    // Update dynamic text views
    updateAIPanelMessage();
    updateSoilMoisture(state.soilMoisture);
}

function getTranslationKey(key) {
    if (translations[state.language] && translations[state.language][key]) {
        return translations[state.language][key];
    }
    // Fallback to English
    return translations['en'][key] || key;
}

// ==========================================================================
// 9. HELPER FUNCTIONS FOR INTERACTIVE WIDGETS & TIMERS
// ==========================================================================
function startOtpTimer() {
    if (otpTimerInterval) {
        clearInterval(otpTimerInterval);
    }
    
    let timeLeft = 30;
    const countdownEl = document.getElementById('otp-countdown');
    const resendContainer = document.getElementById('otp-resend-container');
    
    if (resendContainer) {
        resendContainer.classList.add('disabled');
    }
    if (countdownEl) {
        countdownEl.innerText = timeLeft;
    }
    
    otpTimerInterval = setInterval(() => {
        timeLeft--;
        if (countdownEl) {
            countdownEl.innerText = timeLeft;
        }
        
        if (timeLeft <= 0) {
            clearInterval(otpTimerInterval);
            otpTimerInterval = null;
            if (resendContainer) {
                resendContainer.classList.remove('disabled');
            }
        }
    }, 1000);
}

function updateConnectionUI() {
    const dashPill = document.getElementById('dash-connection-header');
    const offlineWarning = document.getElementById('offline-warning-card');
    const connectionBtn = document.getElementById('btn-toggle-connection');
    const statusIcon = document.getElementById('status-connection-icon');

    // Dashboard network cards
    const wifiStatus = document.getElementById('conn-wifi-status');
    const deviceStatus = document.getElementById('conn-device-status');
    const firebaseStatus = document.getElementById('conn-firebase-status');

    // Settings page badges
    const settingsEsp = document.getElementById('settings-esp-status');
    const settingsFb = document.getElementById('settings-fb-status');
    const settingsBlynk = document.getElementById('settings-blynk-status');

    if (state.isOnline) {
        if (connectionBtn) connectionBtn.classList.add('active');
        if (dashPill) {
            dashPill.className = 'connection-status-pill online';
            const textSpan = dashPill.querySelector('.status-text');
            if (textSpan) textSpan.innerText = getTranslationKey('status_online');
        }
        if (offlineWarning) offlineWarning.classList.add('hidden');
        if (statusIcon) statusIcon.innerHTML = '<i data-lucide="wifi"></i>';

        // Set green connectivity statuses
        if (wifiStatus) {
            wifiStatus.className = 'conn-item inline-success';
            const dot = wifiStatus.querySelector('.conn-dot-icon');
            if (dot) {
                dot.className = 'conn-dot-icon wifi-ok';
                dot.innerHTML = '<i data-lucide="wifi"></i>';
            }
            const val = wifiStatus.querySelector('.conn-val');
            if (val) {
                val.className = 'conn-val text-green';
                val.innerText = getTranslationKey('conn_connected');
            }
        }
        if (deviceStatus) {
            deviceStatus.className = 'conn-item inline-success';
            const dot = deviceStatus.querySelector('.conn-dot-icon');
            if (dot) {
                dot.className = 'conn-dot-icon cpu-ok';
                dot.innerHTML = '<i data-lucide="cpu"></i>';
            }
            const val = deviceStatus.querySelector('.conn-val');
            if (val) {
                val.className = 'conn-val text-green';
                val.innerText = getTranslationKey('conn_online');
            }
        }
        if (firebaseStatus) {
            firebaseStatus.className = 'conn-item inline-success';
            const dot = firebaseStatus.querySelector('.conn-dot-icon');
            if (dot) {
                dot.className = 'conn-dot-icon db-ok';
                dot.innerHTML = '<i data-lucide="database"></i>';
            }
            const val = firebaseStatus.querySelector('.conn-val');
            if (val) {
                val.className = 'conn-val text-green';
                val.innerText = getTranslationKey('conn_synced');
            }
        }

        // Set green settings badges
        if (settingsEsp) {
            settingsEsp.className = 'badge badge-success';
            settingsEsp.innerText = getTranslationKey('badge_online');
        }
        if (settingsFb) {
            settingsFb.className = 'badge badge-success';
            settingsFb.innerText = getTranslationKey('badge_synced');
        }
        if (settingsBlynk) {
            settingsBlynk.className = 'badge badge-success';
            settingsBlynk.innerText = getTranslationKey('badge_connected');
        }

        logToConsole('[Gateway Status] Gateway internet connection restored.', 'green');
    } else {
        if (connectionBtn) connectionBtn.classList.remove('active');
        if (dashPill) {
            dashPill.className = 'connection-status-pill offline';
            const textSpan = dashPill.querySelector('.status-text');
            if (textSpan) textSpan.innerText = getTranslationKey('badge_offline');
        }
        if (offlineWarning) offlineWarning.classList.remove('hidden');
        if (statusIcon) statusIcon.innerHTML = '<i data-lucide="wifi-off" class="text-terracotta"></i>';

        // Set red connectivity statuses
        if (wifiStatus) {
            wifiStatus.className = 'conn-item inline-error';
            const dot = wifiStatus.querySelector('.conn-dot-icon');
            if (dot) {
                dot.className = 'conn-dot-icon wifi-error';
                dot.innerHTML = '<i data-lucide="wifi-off" class="text-terracotta"></i>';
            }
            const val = wifiStatus.querySelector('.conn-val');
            if (val) {
                val.className = 'conn-val text-red';
                val.innerText = getTranslationKey('badge_offline');
            }
        }
        if (deviceStatus) {
            deviceStatus.className = 'conn-item inline-error';
            const dot = deviceStatus.querySelector('.conn-dot-icon');
            if (dot) {
                dot.className = 'conn-dot-icon cpu-error';
                dot.innerHTML = '<i data-lucide="cpu" class="text-terracotta"></i>';
            }
            const val = deviceStatus.querySelector('.conn-val');
            if (val) {
                val.className = 'conn-val text-red';
                val.innerText = getTranslationKey('badge_offline');
            }
        }
        if (firebaseStatus) {
            firebaseStatus.className = 'conn-item inline-error';
            const dot = firebaseStatus.querySelector('.conn-dot-icon');
            if (dot) {
                dot.className = 'conn-dot-icon db-error';
                dot.innerHTML = '<i data-lucide="database" class="text-terracotta"></i>';
            }
            const val = firebaseStatus.querySelector('.conn-val');
            if (val) {
                val.className = 'conn-val text-red';
                val.innerText = getTranslationKey('badge_offline');
            }
        }

        // Set red settings badges
        if (settingsEsp) {
            settingsEsp.className = 'badge badge-danger';
            settingsEsp.innerText = getTranslationKey('badge_offline');
        }
        if (settingsFb) {
            settingsFb.className = 'badge badge-danger';
            settingsFb.innerText = getTranslationKey('badge_offline');
        }
        if (settingsBlynk) {
            settingsBlynk.className = 'badge badge-danger';
            settingsBlynk.innerText = getTranslationKey('badge_offline');
        }

        logToConsole('[Gateway Status] Gateway went offline. Entering offline telemetry backup mode.', 'red');

        // Add a critical notification about offline status if not already present
        addSystemNotification(
            'critical',
            'alert_device_offline',
            'CRITICAL: Gateway connection lost! ESP32 went offline. System status unmonitored.'
        );
    }
    lucide.createIcons();
}

function applyTheme(themeMode) {
    const deviceWrapper = document.getElementById('mobile-device');
    if (!deviceWrapper) return;

    // Remove old classes
    deviceWrapper.classList.remove('theme-light', 'theme-dark');

    let activeTheme = themeMode;
    if (themeMode === 'system') {
        const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        activeTheme = systemPrefersDark ? 'dark' : 'light';
        logToConsole(`[Visual Styles] System Theme Sync: ${systemPrefersDark ? 'DARK' : 'LIGHT'}`, 'green');
    }

    if (activeTheme === 'dark') {
        state.darkMode = true;
        deviceWrapper.classList.add('theme-dark');
        logToConsole('[Visual Styles] Dark Mode layout theme activated.', 'green');
    } else {
        state.darkMode = false;
        deviceWrapper.classList.add('theme-light');
        logToConsole('[Visual Styles] Light Mode layout theme activated.', 'green');
    }

    // Re-render Chart.js colors for consistency
    if (state.currentScreen === 'analytics') {
        initOrUpdateCharts();
    }
}

// ==========================================================================
// 10. EVENT BINDING & INTERACTIVITY INITIALIZATION
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Status Bar clock loop
    setInterval(() => {
        const timeEl = document.getElementById('status-time');
        if (timeEl) {
            const now = new Date();
            let hours = now.getHours();
            let minutes = now.getMinutes();
            hours = hours < 10 ? '0' + hours : hours;
            minutes = minutes < 10 ? '0' + minutes : minutes;
            timeEl.innerText = `${hours}:${minutes}`;
        }
    }, 1000);

    // Initializer Lucide icons vector drawings
    lucide.createIcons();

    // Splash screen progress simulation
    const bar = document.querySelector('.bar-progress');
    if (bar) {
        setTimeout(() => {
            bar.style.width = '100%';
        }, 100);
        
        // Auto-navigate to language selection screen after 2.6 seconds
        setTimeout(() => {
            if (state.currentScreen === 'splash') {
                navigateToScreen('language-select');
            }
        }, 2700);
    }

    // Entering login flow on Splash tap
    document.getElementById('btn-enter-app')?.addEventListener('click', () => {
        navigateToScreen('language-select');
    });

    // Presenter Navigator links
    document.querySelectorAll('.screen-link-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.dataset.target;
            navigateToScreen(target);
        });
    });

    // Language Selection Card Click Binding
    document.querySelectorAll('.lang-card').forEach(card => {
        card.addEventListener('click', () => {
            document.querySelectorAll('.lang-card').forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            const selectedLang = card.dataset.lang;
            toggleLanguage(selectedLang);
        });
    });

    // Language selection screen continue button
    document.getElementById('btn-continue-lang')?.addEventListener('click', () => {
        navigateToScreen('login');
    });

    // Mobile Phone Form - 10-digit number validation & OTP trigger
    const phoneInput = document.getElementById('login-phone');
    const getOtpBtn = document.getElementById('btn-get-otp');
    const loginError = document.getElementById('login-error');

    phoneInput?.addEventListener('input', (e) => {
        // Clear non-digit text
        e.target.value = e.target.value.replace(/\D/g, '').substring(0, 10);
    });

    getOtpBtn?.addEventListener('click', () => {
        const number = phoneInput.value;
        if (number.length === 10) {
            loginError.classList.add('hidden');
            
            // Generate a random 4-digit code to show in the simulator help alert
            const randomCode = Math.floor(1000 + Math.random() * 9000);
            const genOtp = document.getElementById('generated-otp');
            if (genOtp) genOtp.innerText = randomCode;
            
            const otpPhoneDisplay = document.getElementById('otp-phone-display');
            if (otpPhoneDisplay) otpPhoneDisplay.innerText = `XXXXXX${number.substring(6)}`;
            
            logToConsole(`[Login Protocol] SMS Code generated for +91 ${number}: ${randomCode}`, 'orange');
            
            // Pre-fill phone field on Profile
            const farmerPhoneField = document.getElementById('farmer-phone');
            if (farmerPhoneField) {
                farmerPhoneField.value = `+91 ${number}`;
            }

            // Navigate to OTP Sub-Screen
            navigateToScreen('otp');
            
            // Start countdown timer
            startOtpTimer();
        } else {
            loginError?.classList.remove('hidden');
        }
    });

    // Simulated OTP text digit boxes auto-focusing loop
    const otpFields = document.querySelectorAll('.otp-digit');
    otpFields.forEach((field, idx) => {
        field.addEventListener('input', (e) => {
            const val = e.target.value;
            // Clean
            e.target.value = val.replace(/\D/g, '');
            
            if (val && idx < 3) {
                otpFields[idx + 1].removeAttribute('disabled');
                otpFields[idx + 1].focus();
            }
        });
        
        field.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace' && idx > 0 && !field.value) {
                otpFields[idx - 1].focus();
            }
        });
    });

    // Verify OTP Button trigger
    const verifyOtpBtn = document.getElementById('btn-verify-otp');
    const otpError = document.getElementById('otp-error');
    
    verifyOtpBtn?.addEventListener('click', () => {
        const generatedEl = document.getElementById('generated-otp');
        if (!generatedEl) return;
        
        const generated = generatedEl.innerText;
        let entered = '';
        otpFields.forEach(f => entered += f.value);

        if (entered === generated) {
            otpError?.classList.add('hidden');
            logToConsole('[Login Protocol] OTP validation successful. Entering profile creation.', 'green');
            
            // Show checkmark success wrapper
            const otpFormWrap = document.getElementById('otp-form-wrap');
            const otpSuccessWrap = document.getElementById('otp-success-wrap');
            
            if (otpFormWrap && otpSuccessWrap) {
                otpFormWrap.classList.add('hidden');
                otpSuccessWrap.classList.remove('hidden');
            }
            
            setTimeout(() => {
                // Restore form for future use
                if (otpFormWrap && otpSuccessWrap) {
                    otpFormWrap.classList.remove('hidden');
                    otpSuccessWrap.classList.add('hidden');
                }
                otpFields.forEach(f => {
                    f.value = '';
                    if (f.dataset.index !== '0') {
                        f.setAttribute('disabled', 'true');
                    }
                });
                navigateToScreen('create-profile');
            }, 1500);
        } else {
            otpError?.classList.remove('hidden');
            logToConsole('[Login Protocol] OTP entry mismatch.', 'red');
        }
    });

    // Resend OTP simulation
    document.getElementById('resend-otp-btn')?.addEventListener('click', (e) => {
        e.preventDefault();
        
        const resendContainer = document.getElementById('otp-resend-container');
        if (resendContainer && resendContainer.classList.contains('disabled')) {
            return; // Exit if timer is still running
        }

        const randomCode = Math.floor(1000 + Math.random() * 9000);
        const genOtp = document.getElementById('generated-otp');
        if (genOtp) genOtp.innerText = randomCode;
        
        otpFields.forEach(f => {
            f.value = '';
            if (f.dataset.index !== '0') {
                f.setAttribute('disabled', 'true');
            }
        });
        otpFields[0].focus();
        logToConsole(`[Login Protocol] Resent OTP Code generated: ${randomCode}`, 'orange');
        
        // Restart countdown timer
        startOtpTimer();
    });

    // Farmer Profile Photo Avatar Picker
    document.querySelectorAll('.avatar-option').forEach(opt => {
        opt.addEventListener('click', () => {
            document.querySelectorAll('.avatar-option').forEach(o => o.classList.remove('active'));
            opt.classList.add('active');
            state.avatar = opt.dataset.avatar;
            logToConsole(`[Profile Setup] Selected avatar option: ${state.avatar}`);
        });
    });

    // Save profile and enter Dashboard view
    const saveProfileBtn = document.getElementById('btn-save-profile');
    saveProfileBtn?.addEventListener('click', () => {
        const nameVal = document.getElementById('farmer-name')?.value.trim() || 'Ramesh Gowda';
        const farmVal = document.getElementById('farm-name')?.value.trim() || 'Gowda Farms';
        const villageVal = document.getElementById('farm-village')?.value.trim() || 'Yeliyur';
        const districtVal = document.getElementById('farm-district')?.value.trim() || 'Mandya';
        const stateVal = document.getElementById('farm-state')?.value.trim() || 'Karnataka';
        const sizeVal = document.getElementById('farm-size')?.value.trim() || '4.5';
        const cropSelect = document.getElementById('crop-type');
        const cropVal = cropSelect.value;
        const cropText = cropSelect.options[cropSelect.selectedIndex].text;

        // Save into global state
        state.farmerName = nameVal;
        state.farmName = farmVal;
        state.location = `${villageVal}, ${districtVal}, ${stateVal}`;
        state.farmSize = sizeVal;
        state.cropType = cropVal;
        state.isLoggedIn = true;

        // Apply dynamically to dashboards
        const dashFarmerName = document.getElementById('dash-farmer-name');
        if (dashFarmerName) dashFarmerName.innerText = state.farmerName;
        
        const profFarmerName = document.getElementById('prof-farmer-name');
        if (profFarmerName) profFarmerName.innerText = state.farmerName;
        
        const dashCropName = document.getElementById('dash-crop-name');
        if (dashCropName) dashCropName.innerText = cropText;
        
        const profLocation = document.getElementById('prof-location');
        if (profLocation) profLocation.innerText = state.location;
        
        const profFarmName = document.getElementById('prof-farm-name');
        if (profFarmName) profFarmName.innerText = state.farmName;
        
        const profCropType = document.getElementById('prof-crop-type');
        if (profCropType) profCropType.innerText = cropText;
        
        const profFarmSize = document.getElementById('prof-farm-size');
        if (profFarmSize) profFarmSize.innerText = `${state.farmSize} Acres`;

        // Copy avatar from selector to profile top header
        const selectedAvatarOption = document.querySelector('.avatar-option.active');
        const profileAvatarDisplay = document.getElementById('profile-avatar-display');
        if (selectedAvatarOption && profileAvatarDisplay) {
            profileAvatarDisplay.innerHTML = selectedAvatarOption.innerHTML;
        }

        // Fill phone number on profile view
        const phoneInputEl = document.getElementById('login-phone');
        const profPhoneVal = document.getElementById('prof-phone-val');
        if (phoneInputEl && profPhoneVal) {
            profPhoneVal.innerText = `+91 ${phoneInputEl.value}`;
        }

        logToConsole(`[Profile Setup] Profile saved in local database. Farmer: ${nameVal}, Crop: ${cropVal}`, 'green');
        
        // Enter Dashboard
        navigateToScreen('dashboard');
    });

    // Edit profile button on Profile view
    document.getElementById('btn-edit-profile-jump')?.addEventListener('click', () => {
        // Pre-populate input fields
        const farmerNameInput = document.getElementById('farmer-name');
        if (farmerNameInput) farmerNameInput.value = state.farmerName;
        
        const farmNameInput = document.getElementById('farm-name');
        if (farmNameInput) farmNameInput.value = state.farmName;
        
        if (state.location) {
            const parts = state.location.split(',');
            if (parts[0] && document.getElementById('farm-village')) document.getElementById('farm-village').value = parts[0].trim();
            if (parts[1] && document.getElementById('farm-district')) document.getElementById('farm-district').value = parts[1].trim();
            if (parts[2] && document.getElementById('farm-state')) document.getElementById('farm-state').value = parts[2].trim();
        }
        
        const farmSizeInput = document.getElementById('farm-size');
        if (farmSizeInput) farmSizeInput.value = state.farmSize;
        
        const cropTypeInput = document.getElementById('crop-type');
        if (cropTypeInput) cropTypeInput.value = state.cropType;
        
        // Select matching avatar option
        document.querySelectorAll('.avatar-option').forEach(opt => {
            if (opt.dataset.avatar === state.avatar) {
                opt.classList.add('active');
            } else {
                opt.classList.remove('active');
            }
        });

        navigateToScreen('create-profile');
    });

    // Wire up remaining Profile option buttons to settings/help
    document.getElementById('btn-manage-devices-jump')?.addEventListener('click', () => {
        navigateToScreen('settings');
    });
    
    document.getElementById('btn-change-language-jump')?.addEventListener('click', () => {
        navigateToScreen('settings');
    });

    document.getElementById('btn-help-jump')?.addEventListener('click', () => {
        logToConsole('[Help Support] Opening ticket to customer support desk...', 'orange');
        addSystemNotification(
            'notice',
            'support_ticket_created',
            'SYSTEM: Support ticket #ST-8294 created. Agri-expert will contact you on your registered phone number.'
        );
        navigateToScreen('notifications');
    });

    // Bottom Navigation Bar click bindings
    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.dataset.target;
            navigateToScreen(target);
        });
    });

    // Moisture range slider (Left Simulator Panel)
    const simMoistureSlider = document.getElementById('sim-moisture-slider');
    simMoistureSlider?.addEventListener('input', (e) => {
        updateSoilMoisture(e.target.value);
    });

    // Water Tank range slider (Left Simulator Panel)
    const simTankSlider = document.getElementById('sim-tank-slider');
    simTankSlider?.addEventListener('input', (e) => {
        updateWaterTankLevel(e.target.value);
    });

    // Preset Simulator Conditions
    document.getElementById('btn-sim-dry')?.addEventListener('click', () => {
        logToConsole('[Simulator Override] Drought simulation activated.', 'orange');
        updateSoilMoisture(25);
    });

    document.getElementById('btn-sim-wet')?.addEventListener('click', () => {
        logToConsole('[Simulator Override] Heavy precipitation rain simulated.', 'green');
        updateSoilMoisture(80);
    });

    // Manual Critical Alert Trigger
    document.getElementById('btn-trigger-anomaly')?.addEventListener('click', () => {
        addSystemNotification(
            'critical',
            'alert_low_moisture',
            'CRITICAL: Emergency sensor report. Soil Moisture dropped below safety limit (22%). Irrigation pump failed to start automatically.'
        );
    });

    // Online/Offline status switch
    const connectionBtn = document.getElementById('btn-toggle-connection');
    connectionBtn?.addEventListener('click', () => {
        state.isOnline = !state.isOnline;
        updateConnectionUI();
    });

    // Pump trigger toggle click on mobile dashboard
    document.getElementById('btn-toggle-pump')?.addEventListener('click', () => {
        if (state.isAutoMode) {
            logToConsole('[Override Warning] Cannot toggle pump manually while Auto-Irrigation is active. Disable Auto-Mode first.', 'orange');
            return;
        }
        togglePumpState();
    });

    // Segmented Mode Toggle (Auto vs Manual) click handler
    const btnModeManual = document.getElementById('btn-mode-manual');
    const btnModeAuto = document.getElementById('btn-mode-auto');
    
    btnModeManual?.addEventListener('click', () => {
        btnModeManual.classList.add('active');
        btnModeAuto?.classList.remove('active');
        state.isAutoMode = false;
        logToConsole('[Settings Update] Smart Auto-Irrigate mode: DISABLED (Manual Mode Active)', 'green');
        updateAIPanelMessage();
    });

    btnModeAuto?.addEventListener('click', () => {
        btnModeAuto.classList.add('active');
        btnModeManual?.classList.remove('active');
        state.isAutoMode = true;
        logToConsole('[Settings Update] Smart Auto-Irrigate mode: ENABLED (Auto Mode Active)', 'green');
        updateAIPanelMessage();
        checkAutoIrrigationTriggers();
    });

    // Settings view Range Sliders thresholds
    const startThresholdSlider = document.getElementById('start-threshold-slider');
    const startDisplay = document.getElementById('start-threshold-display');
    
    startThresholdSlider?.addEventListener('input', (e) => {
        const val = parseInt(e.target.value);
        state.startThreshold = val;
        if (startDisplay) startDisplay.innerText = `${val}%`;
        
        // Safety guard: stop threshold must be greater than start threshold
        const stopSlider = document.getElementById('stop-threshold-slider');
        if (parseInt(stopSlider.value) <= val) {
            const newStop = val + 15;
            stopSlider.value = newStop;
            state.stopThreshold = newStop;
            const stopDisplayEl = document.getElementById('stop-threshold-display');
            if (stopDisplayEl) stopDisplayEl.innerText = `${newStop}%`;
        }
        logToConsole(`[Config Changed] Start pump moisture trigger set to: ${val}%`);
    });

    const stopThresholdSlider = document.getElementById('stop-threshold-slider');
    const stopDisplay = document.getElementById('stop-threshold-display');
    
    stopThresholdSlider?.addEventListener('input', (e) => {
        const val = parseInt(e.target.value);
        state.stopThreshold = val;
        if (stopDisplay) stopDisplay.innerText = `${val}%`;

        // Safety guard
        const startSlider = document.getElementById('start-threshold-slider');
        if (parseInt(startSlider.value) >= val) {
            const newStart = Math.max(20, val - 15);
            startSlider.value = newStart;
            state.startThreshold = newStart;
            const startDisplayEl = document.getElementById('start-threshold-display');
            if (startDisplayEl) startDisplayEl.innerText = `${newStart}%`;
        }
        logToConsole(`[Config Changed] Stop pump moisture trigger set to: ${val}%`);
    });

    // Settings View schedule time picker
    document.getElementById('settings-schedule-time')?.addEventListener('change', (e) => {
        state.scheduleTime = e.target.value;
        logToConsole(`[Config Changed] Daily scheduled irrigation time set to: ${state.scheduleTime}`);
    });

    // Settings View AI adaptation checkbox
    document.getElementById('chk-ai-recommend')?.addEventListener('change', (e) => {
        state.aiSmartAdapt = e.target.checked;
        logToConsole(`[Settings Update] AI Smart Adapt: ${state.aiSmartAdapt ? 'ENABLED' : 'DISABLED'}`);
    });

    // Alert toggles change logging
    document.getElementById('chk-alert-moisture')?.addEventListener('change', (e) => {
        logToConsole(`[Notification Settings] Moisture Alerts toggle: ${e.target.checked ? 'ON' : 'OFF'}`);
    });
    document.getElementById('chk-alert-tank')?.addEventListener('change', (e) => {
        logToConsole(`[Notification Settings] Tank Level Alerts toggle: ${e.target.checked ? 'ON' : 'OFF'}`);
    });
    document.getElementById('chk-alert-device')?.addEventListener('change', (e) => {
        logToConsole(`[Notification Settings] Device Offline Alerts toggle: ${e.target.checked ? 'ON' : 'OFF'}`);
    });
    document.getElementById('chk-alert-weather')?.addEventListener('change', (e) => {
        logToConsole(`[Notification Settings] Weather Intelligence Alerts toggle: ${e.target.checked ? 'ON' : 'OFF'}`);
    });

    // Localization switches inside Settings Screen
    document.getElementById('lang-btn-en')?.addEventListener('click', () => toggleLanguage('en'));
    document.getElementById('lang-btn-kn')?.addEventListener('click', () => toggleLanguage('kn'));

    // Appearance Theme segmented control click handlers
    const btnThemeLight = document.getElementById('btn-theme-light');
    const btnThemeDark = document.getElementById('btn-theme-dark');
    const btnThemeSystem = document.getElementById('btn-theme-system');

    btnThemeLight?.addEventListener('click', () => {
        btnThemeLight.classList.add('active');
        btnThemeDark?.classList.remove('active');
        btnThemeSystem?.classList.remove('active');
        applyTheme('light');
    });

    btnThemeDark?.addEventListener('click', () => {
        btnThemeDark.classList.add('active');
        btnThemeLight?.classList.remove('active');
        btnThemeSystem?.classList.remove('active');
        applyTheme('dark');
    });

    btnThemeSystem?.addEventListener('click', () => {
        btnThemeSystem.classList.add('active');
        btnThemeLight?.classList.remove('active');
        btnThemeDark?.classList.remove('active');
        applyTheme('system');
    });

    // Logout action bindings
    document.querySelectorAll('.btn-logout-action, #btn-logout-settings').forEach(btn => {
        btn.addEventListener('click', () => {
            logToConsole('[Login Protocol] Farmer logged out of system.', 'orange');
            state.isLoggedIn = false;
            // Reset phone inputs
            const phoneInputEl = document.getElementById('login-phone');
            if (phoneInputEl) phoneInputEl.value = '';
            
            // Redirect to Splash for complete flow restart
            navigateToScreen('splash');
            
            // Reload window location hash/refresh simple reset for demo purposes
            setTimeout(() => {
                window.location.reload();
            }, 500);
        });
    });

    // Settings View: Security Change Mobile button
    document.getElementById('btn-change-phone')?.addEventListener('click', () => {
        logToConsole('[Security Protocol] Change mobile number protocol initiated.', 'orange');
        navigateToScreen('login');
    });

    // Analytics Range Switching Tabs
    document.querySelectorAll('.analytics-tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Update active state
            document.querySelectorAll('.analytics-tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const range = btn.dataset.range;
            state.analyticsRange = range;
            
            // Update the plain language insights paragraph
            const insightPara = document.getElementById('analytics-insight-text');
            if (insightPara) {
                insightPara.innerText = getTranslationKey(`analytics_insight_${range}`);
            }

            logToConsole(`[Analytics] Charts filter range switched to: ${range.toUpperCase()}`);
            initOrUpdateCharts();
        });
    });

    // Notifications View: Clear all alerts click
    document.getElementById('btn-clear-notifications')?.addEventListener('click', () => {
        clearAllNotifications();
    });

    // Settings View: Hardware gateway restart
    document.getElementById('btn-restart-gateway')?.addEventListener('click', () => {
        logToConsole('[Hardware Command] Restart signal sent to Gateway.', 'orange');
        const btn = document.getElementById('btn-restart-gateway');
        const prevText = btn.innerHTML;
        btn.innerHTML = '<i data-lucide="loader" class="active-spin"></i> Restarting Gateway...';
        btn.setAttribute('disabled', 'true');
        
        setTimeout(() => {
            btn.innerHTML = prevText;
            btn.removeAttribute('disabled');
            logToConsole('[Hardware Event] Gateway reboot completed. Connected successfully.', 'green');
            lucide.createIcons();
        }, 2500);
    });

    // Settings View: Hardware gateway factory reset
    document.getElementById('btn-reset-device')?.addEventListener('click', () => {
        logToConsole('[Hardware Command] Factory reset command sent to Gateway.', 'red');
        const btn = document.getElementById('btn-reset-device');
        const prevText = btn.innerHTML;
        btn.innerHTML = '<i data-lucide="loader" class="active-spin"></i> Resetting Gateway...';
        btn.setAttribute('disabled', 'true');
        
        setTimeout(() => {
            btn.innerHTML = prevText;
            btn.removeAttribute('disabled');
            logToConsole('[Hardware Event] Gateway factory reset complete. Restored defaults.', 'orange');
            
            // Restore default state variables
            state.soilMoisture = 68;
            state.waterTankFill = 85;
            state.isPumpOn = false;
            state.isAutoMode = false;
            state.isOnline = true;
            state.startThreshold = 45;
            state.stopThreshold = 75;
            
            // Sync UI
            updateSoilMoisture(state.soilMoisture);
            updateWaterTankLevel(state.waterTankFill);
            togglePumpState(false);
            
            // Reset threshold sliders
            const startSlider = document.getElementById('start-threshold-slider');
            const startDisp = document.getElementById('start-threshold-display');
            if (startSlider) startSlider.value = 45;
            if (startDisp) startDisp.innerText = '45%';
            
            const stopSlider = document.getElementById('stop-threshold-slider');
            const stopDisp = document.getElementById('stop-threshold-display');
            if (stopSlider) stopSlider.value = 75;
            if (stopDisp) stopDisp.innerText = '75%';
            
            // Reset manual/auto buttons
            btnModeManual?.click();
            
            // Re-render Lucide icons
            lucide.createIcons();
        }, 2000);
    });

    // Initialize circular gauge dial on load
    updateSoilMoisture(state.soilMoisture);
    updateWaterTankLevel(state.waterTankFill);

    // Initial connection UI status sync
    updateConnectionUI();

    // Default to system theme initialization
    applyTheme('system');
});
