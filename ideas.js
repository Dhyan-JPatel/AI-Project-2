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
