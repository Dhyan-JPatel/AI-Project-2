/**
 * Product ideas database.
 * Each product type maps to an array of idea objects.
 * An idea object contains a name, description, and features array.
 */
var IDEAS = {
    "wearables": [
        {
            name: "SmartBand Flex",
            description: "A flexible fitness band that adapts to any wrist size and tracks advanced biometrics like hydration levels, stress, and sleep stages.",
            features: ["Adaptive flex-fit design", "Hydration monitoring sensor", "Real-time stress tracking", "7-day battery life", "Water-resistant to 50 m"]
        },
        {
            name: "GlowRing",
            description: "A smart ring that delivers subtle haptic notifications and tracks heart rate, blood oxygen, and daily activity without a screen.",
            features: ["Haptic notification alerts", "Continuous heart rate monitoring", "SpO2 sensor", "Titanium build", "Wireless charging case"]
        },
        {
            name: "PosturePatch",
            description: "A small adhesive wearable that clips to clothing and gently vibrates to correct posture throughout the day.",
            features: ["Ultra-thin adhesive patch", "Posture correction vibrations", "Companion app with progress stats", "30-day rechargeable battery", "Skin-safe medical adhesive"]
        },
        {
            name: "ThermoWear Jacket",
            description: "A smart jacket with embedded heating and cooling zones controlled by a companion app based on body temperature and weather.",
            features: ["Dynamic heating and cooling zones", "Weather-aware temperature adjustment", "Machine-washable electronics", "USB-C rechargeable", "Lightweight graphene insulation"]
        },
        {
            name: "SolarStrap Watch",
            description: "A solar-powered smartwatch strap that extends battery life indefinitely by harvesting ambient light energy.",
            features: ["Integrated solar cells", "Universal watch compatibility", "Always-on display support", "Eco-friendly materials", "IP68 water resistance"]
        },
        {
            name: "VibeStep Insoles",
            description: "Smart insoles that track gait, step count, and foot pressure distribution, providing real-time feedback to improve walking posture.",
            features: ["Pressure-mapping sensor grid", "Gait analysis algorithm", "Bluetooth companion app", "Rechargeable via USB-C", "Trimmable to fit any shoe"]
        },
        {
            name: "NapBand",
            description: "A lightweight headband that monitors sleep cycles during naps and wakes you at the optimal time for maximum refreshment.",
            features: ["EEG-based sleep stage detection", "Smart alarm vibration", "Ultra-soft breathable fabric", "20-day battery life", "Compact travel pouch"]
        },
        {
            name: "AuraClip",
            description: "A clip-on UV exposure tracker that warns you when you have had too much sun and recommends sunscreen reapplication times.",
            features: ["Real-time UV index monitoring", "Sunscreen reminder alerts", "Vitamin D exposure tracking", "Weighs only 5 grams", "Water-resistant IP67 rating"]
        },
        {
            name: "PulseGlove",
            description: "A smart heated glove that monitors hand temperature and circulation, adjusting warmth levels for people with cold-sensitive conditions.",
            features: ["Adaptive heating elements", "Circulation monitoring sensors", "Touchscreen-compatible fingertips", "Rechargeable graphene battery", "Machine-washable design"]
        },
        {
            name: "BalanceAnklet",
            description: "An ankle-worn wearable designed for elderly users that detects fall risks and sends emergency alerts to caregivers.",
            features: ["Fall detection accelerometer", "Emergency SOS alert system", "GPS location sharing", "30-day battery standby", "Hypoallergenic silicone band"]
        },
        {
            name: "FocusLens Clip",
            description: "A tiny clip-on device for eyeglasses that tracks eye movement and blink rate, alerting you to digital eye strain.",
            features: ["Eye movement tracking sensor", "Blink rate monitoring", "Break reminder notifications", "Weighs under 4 grams", "Universal glasses clip design"]
        },
        {
            name: "HydroTag Bottle Cap",
            description: "A smart bottle cap that fits standard water bottles, tracking daily water intake and reminding you to stay hydrated.",
            features: ["Universal bottle thread fit", "Water intake tracking", "Hydration goal reminders", "LED status indicator ring", "6-month coin-cell battery"]
        },
        {
            name: "RunForm Belt",
            description: "A lightweight running belt with motion sensors that analyze your running form and provide audio coaching tips in real time.",
            features: ["3-axis motion sensor array", "Real-time audio coaching", "Cadence and stride analysis", "Reflective safety strips", "Moisture-wicking elastic band"]
        },
        {
            name: "MoodWeave Bracelet",
            description: "A woven smart bracelet that monitors electrodermal activity and heart rate variability to estimate emotional states throughout the day.",
            features: ["Electrodermal activity sensor", "HRV emotion estimation", "Daily mood journal sync", "Handcrafted woven band", "7-day battery life"]
        },
        {
            name: "SnoreGuard Ring",
            description: "A smart ring worn at night that detects snoring vibrations and gently stimulates the finger to prompt a positional change.",
            features: ["Snoring vibration detection", "Gentle haptic stimulation", "Sleep quality report", "Medical-grade titanium", "Silent partner sleep tracking"]
        }
    ],
    "smart-devices": [
        {
            name: "AirDesk Hub",
            description: "A smart desk pad that wirelessly charges devices, tracks sitting time, and adjusts ambient lighting based on time of day.",
            features: ["Multi-device wireless charging", "Ergonomic sitting timer", "Built-in ambient LED lighting", "Touch-sensitive controls", "USB-C and USB-A hub"]
        },
        {
            name: "PetPal Feeder",
            description: "An AI-powered pet feeder that learns your pet's eating habits and dispenses meals on an optimized schedule.",
            features: ["AI-driven feeding schedule", "Portion control sensors", "Built-in camera for pet monitoring", "App-based remote feeding", "Dishwasher-safe food tray"]
        },
        {
            name: "MirrorMind",
            description: "A smart mirror that displays calendar events, weather, fitness stats, and guided morning routines while you get ready.",
            features: ["Full HD touch display behind mirror glass", "Voice assistant integration", "Daily routine planner", "Skin analysis camera", "Modular widget dashboard"]
        },
        {
            name: "SnapFrame",
            description: "A digital photo frame that curates and displays your best photos using AI, automatically adjusting brightness to ambient light.",
            features: ["AI photo curation", "Ambient light sensor auto-brightness", "Cloud photo sync", "Gesture-based navigation", "Anti-glare matte display"]
        },
        {
            name: "AquaGuard",
            description: "A smart water leak detector that monitors pipes and sends instant alerts, automatically shutting off the water supply if a burst is detected.",
            features: ["Ultrasonic leak detection", "Auto shut-off valve", "Real-time app alerts", "Battery backup during power outages", "Easy DIY installation"]
        },
        {
            name: "SmartPlug Duo",
            description: "A dual-outlet smart plug that monitors energy consumption per device and schedules power on and off times independently.",
            features: ["Dual independent outlets", "Per-device energy monitoring", "Scheduling and timers", "Voice assistant compatible", "Compact space-saving design"]
        },
        {
            name: "KeyVault",
            description: "A wall-mounted smart key organizer that tracks which keys are home and sends alerts if you leave without your essentials.",
            features: ["RFID key tag tracking", "Departure reminder alerts", "Tamper-proof wall mount", "Guest key sharing via app", "Backup mechanical lock"]
        },
        {
            name: "FreshFridge Cam",
            description: "A small camera module that attaches inside your refrigerator, letting you check contents remotely and tracking expiration dates.",
            features: ["Wide-angle interior camera", "Remote livestream via app", "Expiration date reminders", "Temperature monitoring sensor", "Magnetic easy-install mount"]
        },
        {
            name: "DeskMate Charger",
            description: "A smart desktop organizer with built-in wireless charging pads, cable management, and a small display showing your calendar.",
            features: ["Triple wireless charging surface", "Integrated cable management", "2-inch calendar display", "USB hub with 4 ports", "Premium bamboo finish"]
        },
        {
            name: "BabyNest Monitor",
            description: "A smart baby monitor that tracks breathing patterns, room temperature, and ambient noise, sending alerts to parents instantly.",
            features: ["Breathing pattern detection", "Room temperature and humidity sensor", "Cry-tone classification AI", "Two-way audio intercom", "Night-vision HD camera"]
        },
        {
            name: "WardrobeWiz",
            description: "A smart closet camera system that catalogs your clothing and suggests outfits based on weather, calendar events, and style preferences.",
            features: ["AI clothing recognition", "Weather-based outfit suggestions", "Outfit history tracker", "Style preference learning", "Compact rail-mount camera"]
        },
        {
            name: "MailSentry",
            description: "A smart mailbox sensor that notifies you the moment mail or packages arrive, with a camera to identify delivery personnel.",
            features: ["Motion-triggered camera", "Instant delivery notifications", "Package theft deterrent alarm", "Solar-powered battery", "Weather-resistant enclosure"]
        },
        {
            name: "TrashCan Sense",
            description: "A smart trash can lid attachment that detects fill level and automatically orders replacement bags when you are running low.",
            features: ["Ultrasonic fill-level detection", "Auto bag reorder integration", "Odor detection sensor", "Fits standard can sizes", "USB-C rechargeable battery"]
        },
        {
            name: "ShowerSync",
            description: "A smart showerhead attachment that tracks water usage, temperature, and duration, helping you conserve water and energy.",
            features: ["Real-time water usage display", "Temperature monitoring LED ring", "Usage history and goals", "Hydro-powered no battery needed", "Universal showerhead fit"]
        },
        {
            name: "ToolTracker Tags",
            description: "Rugged Bluetooth tracking tags designed for tools and equipment, helping you locate misplaced items in your workshop or garage.",
            features: ["Rugged shock-resistant casing", "Bluetooth mesh network", "Loud 90 dB locator buzzer", "2-year replaceable battery", "Bulk pack of 6 tags"]
        }
    ],
    "audio": [
        {
            name: "EchoSphere Buds",
            description: "Spatial audio earbuds that create a 360-degree soundstage, with adaptive noise cancellation that adjusts to your environment.",
            features: ["360-degree spatial audio", "Adaptive noise cancellation", "Transparency mode", "12-hour battery per charge", "IPX5 sweat resistance"]
        },
        {
            name: "BoneWave",
            description: "Bone-conduction headphones designed for all-day comfort, allowing users to hear ambient sounds while enjoying music.",
            features: ["Bone-conduction drivers", "Open-ear safety design", "Lightweight titanium frame", "Bluetooth 5.3", "8-hour playback"]
        },
        {
            name: "SoundPillow",
            description: "A pillow with embedded flat speakers and a sleep-tracking sensor, playing soothing sounds that fade out as you fall asleep.",
            features: ["Ultra-flat pillow speakers", "Sleep stage detection", "Auto-fade audio", "Hypoallergenic memory foam", "Wireless Bluetooth streaming"]
        },
        {
            name: "VoiceOrb",
            description: "A desktop microphone sphere that uses beamforming to isolate your voice in noisy environments, perfect for remote workers.",
            features: ["360-degree beamforming array", "AI background noise removal", "One-touch mute button", "USB-C plug and play", "LED ring status indicator"]
        },
        {
            name: "TuneTag",
            description: "A tiny clip-on device that turns any pair of regular glasses into audio glasses with directional speakers only you can hear.",
            features: ["Directional micro-speakers", "Clip-on universal fit", "Touch controls on frame", "6-hour battery", "Lightweight at 8 grams per side"]
        },
        {
            name: "SubWave Backpack",
            description: "A backpack with a built-in subwoofer and speakers that delivers powerful personal audio for outdoor adventures.",
            features: ["Integrated 20W subwoofer", "Dual front-facing speakers", "Bluetooth 5.3 streaming", "Solar panel trickle charger", "Water-resistant 600D nylon"]
        },
        {
            name: "WhisperBuds",
            description: "Ultra-discreet earbuds designed for all-day wear that are nearly invisible and focus on crystal-clear call quality.",
            features: ["Near-invisible micro design", "Dual-mic noise cancellation", "10-hour call battery life", "Medical-grade silicone tips", "AI voice enhancement"]
        },
        {
            name: "LoopStation Pad",
            description: "A portable loop station for musicians that lets you layer vocals and instruments on the fly with one-tap recording.",
            features: ["8-track loop recording", "One-tap layer control", "Built-in condenser microphone", "3.5mm and USB-C output", "Rechargeable 12-hour battery"]
        },
        {
            name: "CinemaBar Mini",
            description: "A compact soundbar designed for desks and small rooms, delivering immersive surround sound from a single 12-inch unit.",
            features: ["Virtual 5.1 surround sound", "12-inch ultra-compact form", "HDMI ARC and Bluetooth input", "Wall-mount bracket included", "Dialogue enhancement mode"]
        },
        {
            name: "AquaTune Speaker",
            description: "A fully waterproof floating Bluetooth speaker designed for pools and baths, with LED light effects that sync to music.",
            features: ["IP68 fully waterproof rating", "Floating buoyant design", "LED light-sync effects", "360-degree sound projection", "12-hour battery life"]
        },
        {
            name: "HearClear Amplifier",
            description: "A personal sound amplifier styled as modern earbuds that enhances speech clarity for people with mild hearing difficulty.",
            features: ["Speech frequency amplification", "Background noise reduction", "Discreet earbud styling", "Adjustable volume profiles", "Rechargeable carrying case"]
        },
        {
            name: "BeatHarness",
            description: "A wearable haptic vest that lets you feel the bass and rhythm of music through vibration motors across your torso.",
            features: ["16 haptic vibration zones", "Real-time beat synchronization", "Adjustable intensity levels", "Bluetooth audio input", "Machine-washable inner vest"]
        },
        {
            name: "StudioMic Arm",
            description: "A boom arm with a built-in condenser microphone, preamp, and mute button, replacing a separate mic and mount setup.",
            features: ["Integrated condenser capsule", "Built-in low-noise preamp", "One-touch mute with LED", "Spring-loaded boom arm", "USB-C digital output"]
        },
        {
            name: "TonePuck Guitar Pickup",
            description: "A wireless guitar pickup puck that sticks to any acoustic instrument and streams audio to an amp or recording device.",
            features: ["Adhesive contact pickup", "Low-latency wireless audio", "Works on any acoustic body", "Rechargeable 8-hour battery", "Tone-shaping companion app"]
        },
        {
            name: "NoiseMask Fan",
            description: "A bedside fan that doubles as a white noise machine with algorithmically generated soundscapes for better sleep.",
            features: ["Whisper-quiet brushless motor", "Algorithmic soundscape generator", "Timer and auto-off modes", "Three fan speed settings", "Compact 7-inch design"]
        }
    ],
    "health-tech": [
        {
            name: "BreathSense",
            description: "A portable breath analyzer that tracks respiratory health, detects early signs of illness, and monitors air quality in your surroundings.",
            features: ["Respiratory rate tracking", "VOC illness marker detection", "Personal air quality index", "Compact keychain design", "App-synced health reports"]
        },
        {
            name: "GlucoWrist",
            description: "A non-invasive wristband that continuously monitors blood glucose levels using optical sensors, replacing finger pricks.",
            features: ["Non-invasive glucose monitoring", "Continuous optical sensing", "Meal and insulin logging", "Trend alerts and predictions", "Comfortable silicone band"]
        },
        {
            name: "MindCalm Headband",
            description: "An EEG headband that guides meditation sessions with real-time brainwave feedback, helping users achieve deeper relaxation.",
            features: ["Real-time EEG brainwave sensing", "Guided meditation programs", "Focus and relaxation scores", "Comfortable fabric band", "Companion app with progress tracking"]
        },
        {
            name: "PhysioMat",
            description: "A smart yoga mat with embedded pressure sensors that provides real-time feedback on pose alignment and balance.",
            features: ["Pressure-sensing surface grid", "Real-time pose correction", "Guided yoga and rehab routines", "Roll-up portable design", "Machine-washable cover"]
        },
        {
            name: "SleepPod",
            description: "A bedside sleep-optimization pod that controls temperature, humidity, white noise, and light to create the perfect sleep environment.",
            features: ["Micro-climate temperature control", "Humidity regulation", "Adaptive white noise generator", "Sunrise alarm lighting", "Sleep quality scoring"]
        },
        {
            name: "DermaScan Pen",
            description: "A handheld skin scanner that uses AI image analysis to identify moles, rashes, and skin conditions, recommending next steps.",
            features: ["High-resolution dermatoscope lens", "AI skin condition analysis", "Photo comparison over time", "Dermatologist report sharing", "Rechargeable pen form factor"]
        },
        {
            name: "PillSync Dispenser",
            description: "A smart pill dispenser that organizes medications, sends dose reminders, and alerts caregivers if a dose is missed.",
            features: ["28-compartment auto-dispenser", "Scheduled dose reminders", "Missed dose caregiver alerts", "Tamper-resistant locking lid", "App-managed medication list"]
        },
        {
            name: "SpineAlign Cushion",
            description: "A smart seat cushion with pressure sensors that monitors sitting posture and provides haptic nudges to correct alignment.",
            features: ["Pressure-mapping sensor array", "Haptic posture correction", "Sitting time analytics", "Memory foam comfort layer", "Portable with carry handle"]
        },
        {
            name: "LungCoach Spirometer",
            description: "A portable digital spirometer that measures lung capacity and guides breathing exercises for respiratory rehab patients.",
            features: ["Digital airflow measurement", "Guided breathing exercises", "Progress trend charts", "Bluetooth data sync", "Compact pocket-sized design"]
        },
        {
            name: "VeinFinder Light",
            description: "A handheld near-infrared device that illuminates veins under the skin, making blood draws and IV placement easier.",
            features: ["Near-infrared vein imaging", "Real-time skin projection", "Adjustable brightness levels", "Lightweight handheld body", "Rechargeable medical-grade battery"]
        },
        {
            name: "ThermoPatch",
            description: "A disposable adhesive patch that continuously monitors body temperature and sends fever alerts to your phone.",
            features: ["Continuous temperature monitoring", "Fever threshold alerts", "Skin-safe adhesive for 72 hours", "Bluetooth low-energy connection", "Pediatrician-recommended design"]
        },
        {
            name: "KneeGuard Brace",
            description: "A smart knee brace with embedded sensors that tracks joint movement and provides guided rehabilitation exercises after surgery.",
            features: ["Joint angle tracking sensors", "Guided rehab exercise programs", "Progress reporting dashboard", "Adjustable compression support", "Breathable moisture-wicking fabric"]
        },
        {
            name: "CalmPulse Wristband",
            description: "A wristband that delivers gentle electrical nerve stimulation to reduce anxiety and promote calmness during stressful moments.",
            features: ["Transcutaneous nerve stimulation", "Adjustable intensity dial", "Anxiety episode logging", "Medical-grade electrodes", "Sleek stainless steel band"]
        },
        {
            name: "EarTemp Thermometer",
            description: "A smart in-ear thermometer that clips onto earbuds and provides continuous core body temperature readings throughout the day.",
            features: ["Continuous core temperature tracking", "Earbud clip-on design", "Fever trend predictions", "Bluetooth health app sync", "Medical accuracy certification"]
        },
        {
            name: "HydroBalance Scale",
            description: "A smart scale that measures weight, body composition, and hydration levels using bioimpedance, syncing data to fitness apps.",
            features: ["Bioimpedance body composition", "Hydration level estimation", "Multi-user auto-recognition", "Fitness app integration", "Tempered glass platform"]
        }
    ],
    "smart-home": [
        {
            name: "LumiWall Panel",
            description: "Modular smart wall panels that provide customizable ambient lighting, doubling as a sound-absorbing acoustic panel.",
            features: ["Modular snap-together design", "16 million color options", "Sound absorption rating NRC 0.85", "Voice and app control", "Low power LED technology"]
        },
        {
            name: "GardenBot",
            description: "An automated indoor garden system that monitors soil moisture, light, and nutrients, watering and fertilizing your plants automatically.",
            features: ["Automated watering and fertilizing", "Soil moisture and pH sensors", "Full-spectrum grow lights", "Supports up to 12 pods", "App-based plant care tips"]
        },
        {
            name: "SecureView Doorbell",
            description: "A smart doorbell with a 180-degree camera, facial recognition, and package-detection alerts that integrates with any smart lock.",
            features: ["180-degree ultra-wide camera", "On-device facial recognition", "Package delivery detection", "Two-way audio with noise cancellation", "Smart lock integration"]
        },
        {
            name: "ClimaSense Thermostat",
            description: "An AI thermostat that learns your schedule and comfort preferences, adjusting heating and cooling room by room via wireless sensors.",
            features: ["Room-by-room climate zones", "AI schedule learning", "Energy usage reports", "Wireless temperature sensors", "Compatible with all HVAC systems"]
        },
        {
            name: "AromaCast Diffuser",
            description: "A smart essential oil diffuser that selects scents based on your mood, time of day, and calendar events.",
            features: ["Multi-scent cartridge system", "Mood-based scent selection", "Calendar event integration", "Whisper-quiet ultrasonic diffusion", "App and voice control"]
        },
        {
            name: "WindowBlinds AI",
            description: "Motorized smart blinds that automatically adjust based on sunlight intensity, room temperature, and your daily schedule.",
            features: ["Solar-tracking light sensor", "Scheduled open and close times", "Temperature-based adjustment", "Voice assistant integration", "Retrofit kit for existing blinds"]
        },
        {
            name: "FloorGlow Tiles",
            description: "Pressure-sensitive smart floor tiles that light up as you walk, providing pathway illumination at night without switches.",
            features: ["Pressure-activated LED lighting", "Ambient light auto-brightness", "Modular snap-together tiles", "Night-mode warm glow", "Low-power standby mode"]
        },
        {
            name: "SmartVent Register",
            description: "A smart air vent register that opens and closes automatically to direct airflow to occupied rooms, improving HVAC efficiency.",
            features: ["Motorized vent damper", "Occupancy sensor detection", "Room temperature feedback", "HVAC system integration", "Standard register size fit"]
        },
        {
            name: "PantryTrack Shelf",
            description: "A smart pantry shelf liner with weight sensors that tracks inventory levels and adds items to your grocery list automatically.",
            features: ["Weight-based inventory tracking", "Auto grocery list generation", "Expiration date reminders", "Washable silicone liner", "App with recipe suggestions"]
        },
        {
            name: "LaundryFold Hanger",
            description: "A motorized clothes hanger system that gently dries and de-wrinkles garments using warm air circulation in your closet.",
            features: ["Warm air circulation system", "De-wrinkle vibration mode", "Adjustable hanger width", "Timer and auto shut-off", "Low energy consumption"]
        },
        {
            name: "CurbAlert Camera",
            description: "A solar-powered driveway camera that detects vehicles and visitors approaching your home and sends instant notifications.",
            features: ["Solar-powered operation", "Vehicle and person detection", "License plate recognition", "Night-vision infrared LEDs", "Wireless Wi-Fi connectivity"]
        },
        {
            name: "SoundMap Speaker System",
            description: "A multi-room audio system that tracks your location via your phone and seamlessly moves music to whatever room you enter.",
            features: ["Location-aware audio handoff", "Multi-room synchronized play", "Hi-fi lossless audio", "Wall-mount compact speakers", "Works with all streaming services"]
        },
        {
            name: "RoboMop Pad",
            description: "A slim robotic mopping pad that slides under furniture to clean hard floors with reusable microfiber pads and smart navigation.",
            features: ["Ultra-slim 2-inch profile", "Reusable microfiber pads", "Smart room mapping", "Edge-cleaning side brushes", "Auto-return charging dock"]
        },
        {
            name: "FireSense Detector",
            description: "A smart smoke and CO detector with AI that distinguishes between cooking smoke and real fires, reducing false alarms.",
            features: ["AI smoke classification", "Combined smoke and CO sensor", "Self-testing diagnostics", "Smartphone emergency alerts", "10-year sealed battery"]
        },
        {
            name: "FountainFlow",
            description: "A smart pet water fountain that filters and circulates water, monitoring consumption and alerting you when the filter needs replacing.",
            features: ["Triple-stage water filtration", "Pet consumption tracking", "Filter replacement alerts", "Ultra-quiet pump motor", "Dishwasher-safe reservoir"]
        }
    ],
    "portable-computing": [
        {
            name: "FoldPad",
            description: "A foldable tablet that opens into a full 15-inch display but folds down to pocket size, with stylus support for sketching.",
            features: ["Foldable 15-inch OLED display", "Pocket-size when folded", "Integrated stylus silo", "Desktop-mode with keyboard dock", "All-day battery life"]
        },
        {
            name: "InkNote Tablet",
            description: "An e-ink tablet designed purely for note-taking and reading, with zero distractions and a paper-like writing experience.",
            features: ["E-ink paper-like display", "Pressure-sensitive stylus", "Distraction-free OS", "Weeks-long battery life", "Cloud sync for notes"]
        },
        {
            name: "HoloDesk",
            description: "A portable projector that turns any flat surface into a touch-interactive holographic display for presentations and design work.",
            features: ["Holographic projection up to 40 inches", "Touch-interactive surface tracking", "Built-in 10W speakers", "USB-C and HDMI input", "Compact carry case included"]
        },
        {
            name: "KeyPebble",
            description: "A pebble-shaped pocket computer with a projected laser keyboard, designed for quick email and messaging on the go.",
            features: ["Projected laser keyboard", "3-inch AMOLED display", "4G LTE connectivity", "Voice-to-text AI", "All-day battery in pocket form"]
        },
        {
            name: "StreamDeck Mini",
            description: "A palm-sized streaming and productivity controller with customizable LCD keys for shortcuts, macros, and app launching.",
            features: ["6 customizable LCD keys", "Drag-and-drop macro builder", "Plug-and-play USB-C", "Adjustable magnetic stand", "Cross-platform support"]
        },
        {
            name: "CloudSlate Laptop",
            description: "An ultra-thin cloud-first laptop that streams all processing from the cloud, keeping the device fanless and featherweight.",
            features: ["Fanless silent design", "Cloud-streamed processing", "14-inch 2K display", "Weighs under 800 grams", "18-hour battery life"]
        },
        {
            name: "SnapType Keyboard",
            description: "A split ergonomic keyboard that folds flat and magnetically snaps together for portable use with tablets and phones.",
            features: ["Magnetic split-fold design", "Bluetooth multi-device pairing", "Mechanical low-profile switches", "Built-in trackpad strip", "40-hour battery per charge"]
        },
        {
            name: "PixelPad Drawing Tablet",
            description: "A portable pen display tablet with a laminated screen for zero parallax, designed for digital artists on the move.",
            features: ["10-inch laminated pen display", "8192 levels of pressure", "Battery-free stylus", "USB-C single cable connection", "Adobe and Procreate compatible"]
        },
        {
            name: "DataPuck SSD",
            description: "A puck-shaped portable SSD with biometric fingerprint encryption, offering fast transfer speeds in a rugged pocket-sized form.",
            features: ["Fingerprint biometric lock", "2 TB storage capacity", "USB 3.2 Gen 2 speed", "Shock and dust resistant", "Lanyard loop attachment"]
        },
        {
            name: "MeetingMic Pod",
            description: "A portable conference speakerphone pod with 360-degree microphone pickup, designed for hybrid meetings in any location.",
            features: ["360-degree mic pickup", "Echo cancellation DSP", "8-hour conference battery", "Bluetooth and USB-C dual mode", "Daisy-chain for large rooms"]
        },
        {
            name: "TravelRouter Stick",
            description: "A USB stick-sized travel router that creates a secure private Wi-Fi network from any hotel or cafe internet connection.",
            features: ["Portable USB stick form", "Built-in VPN client", "Dual-band Wi-Fi 6", "Supports up to 10 devices", "Firewall and ad blocking"]
        },
        {
            name: "CodeBoard Deck",
            description: "A programmable macro keyboard deck for developers with an integrated e-ink display strip showing current shortcuts per application.",
            features: ["E-ink shortcut display strip", "Per-app macro profiles", "Hot-swap mechanical switches", "Open-source firmware", "USB-C and Bluetooth"]
        },
        {
            name: "ScanLens Portable",
            description: "A pen-shaped portable scanner that digitizes printed text and handwriting as you glide it across a page.",
            features: ["Instant OCR text recognition", "40-language translation", "Bluetooth and USB export", "Rechargeable pen form", "On-device text storage"]
        },
        {
            name: "BreezeStand Fan",
            description: "A laptop stand with a built-in silent cooling fan and USB hub, keeping your device cool while improving ergonomics.",
            features: ["Integrated silent cooling fan", "Adjustable height and angle", "4-port USB-C hub", "Aluminum alloy construction", "Foldable for travel"]
        },
        {
            name: "ThinkPad Ring",
            description: "A thumb-ring controller that lets you navigate presentations, scroll documents, and control media with subtle finger gestures.",
            features: ["Gesture-based navigation", "Presentation clicker mode", "Scroll and media controls", "Bluetooth low-energy", "All-day 14-hour battery"]
        }
    ],
    "ar-vr": [
        {
            name: "LensView Glasses",
            description: "Lightweight AR glasses that overlay navigation, notifications, and real-time translation onto your field of view.",
            features: ["See-through waveguide display", "Real-time language translation", "Turn-by-turn navigation overlay", "Prescription lens compatible", "All-day 10-hour battery"]
        },
        {
            name: "ImmersiPod",
            description: "A compact VR headset focused on immersive meditation and virtual travel, transporting users to calming environments.",
            features: ["4K per-eye micro-OLED display", "Spatial audio built-in", "Curated meditation environments", "Virtual world travel experiences", "Ultra-lightweight at 220 g"]
        },
        {
            name: "SketchSpace",
            description: "A mixed-reality headset designed for 3D artists, allowing them to sculpt and paint in mid-air with hand tracking.",
            features: ["High-precision hand tracking", "3D sculpting and painting tools", "Export to CAD and 3D print formats", "Pass-through room awareness", "Collaborative multi-user mode"]
        },
        {
            name: "FitArena",
            description: "A VR fitness system with body tracking that gamifies workouts, placing you in virtual sports arenas and obstacle courses.",
            features: ["Full-body motion tracking", "Gamified workout programs", "Calorie and rep counting", "Multiplayer competition mode", "Sweat-resistant face cushion"]
        },
        {
            name: "MemoryLens",
            description: "AR glasses that use AI to recognize faces, recall names, and display contextual info about the people you meet.",
            features: ["On-device facial recognition", "Name and context recall", "Meeting notes overlay", "Privacy-first local processing", "Discreet everyday frame design"]
        },
        {
            name: "PanoSphere Camera",
            description: "A 360-degree VR camera that captures immersive video you can relive inside any VR headset with full spatial audio.",
            features: ["Dual 8K fisheye lenses", "Spatial audio recording", "Real-time VR preview", "Live stream to VR headsets", "Pocket-sized rugged body"]
        },
        {
            name: "HaptiGlove",
            description: "A haptic feedback glove that lets you feel virtual objects in VR, with per-finger force feedback and hand tracking.",
            features: ["Per-finger force feedback", "Sub-millimeter hand tracking", "Lightweight exoskeleton frame", "Wireless low-latency connection", "Adjustable resistance levels"]
        },
        {
            name: "HoloBoard",
            description: "An AR-enabled whiteboard that digitizes handwritten notes in real time and projects collaborative annotations from remote participants.",
            features: ["Real-time handwriting digitization", "Remote AR collaboration", "Cloud note synchronization", "Compatible with AR glasses", "Standard whiteboard surface"]
        },
        {
            name: "VirtualStage",
            description: "A VR platform for musicians that puts you on a virtual concert stage with a live audience, complete with crowd reactions.",
            features: ["Photorealistic virtual venues", "Live crowd simulation AI", "Multi-instrument support", "Low-latency audio engine", "Multiplayer band sessions"]
        },
        {
            name: "NaviLens Monocle",
            description: "A clip-on AR monocle for cyclists and runners that displays speed, navigation arrows, and heart rate on a heads-up display.",
            features: ["Clip-on monocle design", "Speed and pace display", "Turn-by-turn navigation", "Heart rate data overlay", "Anti-fog coated lens"]
        },
        {
            name: "DreamDeck VR",
            description: "A VR sleep experience headset that plays calming virtual environments designed to help users fall asleep faster.",
            features: ["Lightweight sleep-friendly design", "Auto shut-off sleep detection", "Curated dreamscapes library", "Blue-light-free display", "Built-in ambient audio"]
        },
        {
            name: "BuildVR Architect",
            description: "A VR application suite for architects that lets you walk through building designs at full scale before construction begins.",
            features: ["1:1 scale building walkthroughs", "Real-time material swapping", "Sun and shadow simulation", "Client presentation mode", "BIM file import support"]
        },
        {
            name: "RehabVR Therapy",
            description: "A VR system designed for physical therapy, gamifying rehabilitation exercises and tracking patient progress over time.",
            features: ["Gamified rehab exercises", "Joint range-of-motion tracking", "Therapist dashboard portal", "Progress milestone rewards", "Adjustable difficulty levels"]
        },
        {
            name: "FieldView Headset",
            description: "An AR headset for field technicians that overlays repair instructions, wiring diagrams, and remote expert video on equipment.",
            features: ["Hands-free instruction overlay", "Remote expert video call", "Wiring diagram projection", "Voice command navigation", "Industrial-grade drop protection"]
        },
        {
            name: "PortalFrame",
            description: "A tabletop AR display frame that shows a window into a virtual world, letting you peer into 3D scenes without wearing a headset.",
            features: ["Glasses-free 3D display", "Head-tracked perspective shift", "Decorative frame design", "Interactive scene library", "Wi-Fi content streaming"]
        }
    ],
    "robotics": [
        {
            name: "TidyBot",
            description: "A small home robot that picks up clutter, sorts laundry, and organizes shelves using a robotic arm and AI vision.",
            features: ["Robotic gripper arm", "AI object recognition", "Autonomous navigation with LiDAR", "Clutter-sorting routines", "Quiet nighttime operation mode"]
        },
        {
            name: "ChefMate",
            description: "A countertop robotic kitchen assistant that chops, stirs, and monitors cooking, following recipes step by step.",
            features: ["Multi-tool robotic arm", "Recipe-guided cooking steps", "Temperature and timer monitoring", "Voice command control", "Easy-clean detachable parts"]
        },
        {
            name: "DeliverDrone",
            description: "A personal delivery drone that carries small packages between rooms or across your property on demand.",
            features: ["Indoor and outdoor flight modes", "Up to 2 kg payload", "Obstacle avoidance sensors", "App-based route planning", "Auto-return charging dock"]
        },
        {
            name: "StudyBuddy",
            description: "A desktop companion robot for students that helps with homework, quizzes you on flashcards, and keeps you on a study schedule.",
            features: ["Interactive Q&A engine", "Flashcard quiz mode", "Study schedule reminders", "Expressive LED face", "Compact 6-inch desktop form"]
        },
        {
            name: "YardRover",
            description: "An autonomous outdoor robot that mows the lawn, pulls weeds, and waters plants using GPS-guided navigation.",
            features: ["GPS boundary mapping", "Solar-assisted battery", "Weed detection camera", "Automated watering nozzle", "Weather-resistant all-season body"]
        },
        {
            name: "ShelfBot Librarian",
            description: "A rail-mounted robotic arm for bookshelves that retrieves and replaces books or items on command via a voice interface.",
            features: ["Ceiling-rail mounted arm", "Voice-activated retrieval", "Barcode and spine reading", "Gentle gripper mechanism", "Cataloging companion app"]
        },
        {
            name: "PoolSkimmer Bot",
            description: "A solar-powered robotic pool skimmer that autonomously collects surface debris and monitors water chemistry levels.",
            features: ["Solar-powered propulsion", "Autonomous surface navigation", "Fine mesh debris basket", "Water pH and chlorine sensors", "App-based chemistry reports"]
        },
        {
            name: "MopBot Duo",
            description: "A dual-function robot that vacuums and mops simultaneously using separate dustbin and water tank compartments.",
            features: ["Simultaneous vacuum and mop", "Separate dust and water tanks", "LiDAR room mapping", "No-mop zone detection", "Self-emptying dock compatible"]
        },
        {
            name: "GutterCleaner Bot",
            description: "A compact robot that crawls through rain gutters removing leaves and debris, with a camera feed to your phone.",
            features: ["Treaded gutter crawler", "Rotating brush mechanism", "Live camera feed", "Remote control via app", "Fits standard 5-inch gutters"]
        },
        {
            name: "PlantNurse Arm",
            description: "A desktop robotic arm that tends to potted plants, watering them, rotating them toward light, and misting their leaves.",
            features: ["Precision watering nozzle", "Light-seeking pot rotation", "Leaf misting sprayer", "Soil moisture sensing", "Supports up to 4 plants"]
        },
        {
            name: "CompanionPet",
            description: "A robotic pet that responds to voice and touch with lifelike movements and sounds, designed for companionship and stress relief.",
            features: ["Lifelike fur and movement", "Touch and voice response", "Emotion simulation engine", "No feeding or cleanup needed", "Therapeutic certification eligible"]
        },
        {
            name: "SortBot Recycler",
            description: "A countertop robot that sorts recyclables from trash using computer vision, crushing cans and separating materials automatically.",
            features: ["Computer vision sorting", "Automatic can crusher", "Material type classification", "Compact countertop size", "Removable sorted bins"]
        },
        {
            name: "DockBot Marine",
            description: "An underwater hull-cleaning robot for boats that removes algae and barnacles without toxic antifouling paint.",
            features: ["Magnetic hull adhesion", "Rotating cleaning brushes", "Underwater camera inspection", "Eco-friendly no chemicals", "Remote control via tablet"]
        },
        {
            name: "SnowPlow Mini",
            description: "An autonomous robot that clears snow from driveways and sidewalks using GPS boundaries and obstacle avoidance.",
            features: ["GPS boundary navigation", "Heated plow blade", "Obstacle avoidance sensors", "All-weather battery system", "Rock-salt dispenser attachment"]
        },
        {
            name: "PackerArm",
            description: "A desktop robotic arm for small businesses that packs items into shipping boxes, taping and labeling them for dispatch.",
            features: ["Pick-and-place arm", "Auto box taping mechanism", "Label printer integration", "Barcode scanning vision", "Handles items up to 5 kg"]
        }
    ]
};

/**
 * Additional descriptive data used to build the result card.
 */
var AUDIENCES = {
    "students": "Students",
    "professionals": "Professionals",
    "seniors": "Seniors",
    "kids": "Kids",
    "athletes": "Athletes",
    "creatives": "Creatives",
    "gamers": "Gamers",
    "travelers": "Travelers"
};

var STYLES = {
    "minimalist": "Minimalist",
    "bold": "Bold & Vibrant",
    "retro": "Retro",
    "futuristic": "Futuristic",
    "eco": "Eco-Friendly"
};

var PRICES = {
    "budget": "Budget",
    "mid": "Mid-Range",
    "premium": "Premium",
    "luxury": "Luxury"
};

var PRODUCT_TYPES = {
    "wearables": "Wearables",
    "smart-devices": "Smart Devices",
    "audio": "Audio",
    "health-tech": "Health Tech",
    "smart-home": "Smart Home",
    "portable-computing": "Portable Computing",
    "ar-vr": "AR / VR",
    "robotics": "Robotics"
};
