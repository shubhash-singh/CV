// ===== DATA =====
const personalInfo = {
    name: "Shubhash Singh",
    title: "Android Developer at HARMAN INTERNATIONAL A Samsumg Company",
    subtitle: "Software Engineer",
    tagline: "Building innovative mobile solutions that make a difference",
    location: "Bangalore, India",
    email: "subhashsingh2059@gmail.com",
    phone: "+91 9381560406",
    profileImage: "ragnar_pic.jpg",
    resume: "Shubhash Singh Resume.pdf",
    social: {
        github: "https://github.com/shubhash-singh",
        linkedin: "https://www.linkedin.com/in/shubhash-singh-124254215",
        leetcode: "https://leetcode.com/Shubhash_Singh",
        facebook: "https://facebook.com/TheRagNaR11",
        website: "https://shubhashsingh.com.np"
    },
    stats: [
        { label: "Projects", value: "15+", icon: "Code" },
        { label: "Technologies", value: "12+", icon: "Layers" },
        { label: "Repositories", value: "31+", icon: "GitBranch" },
        { label: "Problems Solved", value: "450+", icon: "Trophy" }
    ]
};

const about = {
    description: [
        "Hello! I'm Shubhash Singh, an aspiring software developer with a passion for creating innovative Android applications that solve real-world problems.",
        "I specialize in Android development, working with Java and Kotlin to build intuitive and powerful mobile applications. Beyond mobile development, I have a strong foundation in data structures, algorithms, and backend development.",
        "I'm constantly learning and evolving, staying up-to-date with the latest technologies and best practices. My goal is to create impactful software solutions that make a difference in people's lives."
    ],
    highlights: [
        {
            icon: "smartphone",
            title: "Android Development",
            description: "Specialized in building native Android applications using Java and Kotlin with focus on performance and UI/UX."
        },
        {
            icon: "graduation-cap",
            title: "Computer Science Student",
            description: "Pursuing excellence in computer science with deep focus on algorithms, data structures and software engineering principles."
        },
        {
            icon: "target",
            title: "Problem Solver",
            description: "Active on LeetCode and HackerRank, constantly challenging myself with complex algorithmic problems and optimized solutions."
        },
        {
            icon: "users",
            title: "Open Source Contributor",
            description: "Contributing to open-source projects and sharing knowledge with the community to build better software together."
        }
    ],
    achievements: [
        "Pull Shark badge on GitHub",
        "Active problem solver on LeetCode (450+ problems)",
        "Built 31+ repositories on GitHub",
        "Contributed to multiple open-source projects",
        "Java Certification - L&T EduTech"
    ]
};

const skills = {
    categories: [
        {
            name: "Mobile Development",
            icon: "smartphone",
            skills: [
                { name: "Java", level: 90 },
                { name: "Kotlin", level: 85 },
                { name: "Android Studio", level: 88 },
                { name: "Jetpack Compose", level: 80 },
                { name: "XML Layouts", level: 85 }
            ]
        },
        {
            name: "Programming Languages",
            icon: "code",
            skills: [
                { name: "Java", level: 90 },
                { name: "Kotlin", level: 85 },
                { name: "Python", level: 80 }
            ]
        },
        {
            name: "Backend & Database",
            icon: "database",
            skills: [
                { name: "SQLite", level: 85 },
                { name: "Google Firebase", level: 82 },
                { name: "MongoDB", level: 78 },
                { name: "REST APIs", level: 80 },
                { name: "Spring Boot", level: 70 }
            ]
        },
        {
            name: "Tools & Technologies",
            icon: "wrench",
            skills: [
                { name: "Git & GitHub", level: 88 },
                { name: "VS Code", level: 90 },
                { name: "Postman", level: 85 },
                { name: "Linux", level: 78 },
                { name: "Google Cloud", level: 60 }
            ]
        }
    ],
    technologies: [
        "Android SDK", "Jetpack Compose", "MVVM Architecture", "Room Database",
        "Retrofit", "Coroutines", "Firebase", "Material Design",
        "RESTful APIs", "Git Version Control", "Gradle", "JUnit Testing",
        "Data Structure and Algorith", "Spring Boot", "Java Spring",
        "Jyputer", "Python LangGraph", "Agentic AI"
    ]
};

const experience = [
    {
        id: 1,
        title: "Android Developer Intern",
        company: "HARMAN INTERNATIONAL A Samsung Company",
        location: "Bangalore",
        duration: "Feb 2026 - Current",
        type: "Internship",
        responsibilities: [
            "Added and maintained Unit Tests (JUnit, Mockito) for Android-based automotive applications,improving code reliability and achieving high code and branch coverage.",
            "Contributed to Human Machine Interface (HMI) development for automotive infotainment systems,enhancing interaction flow and overall usability.",
            "Updated and optimized UI layouts for a new 15-inch automotive display, ensuring proper scaling,responsiveness, and compatibility across different screen densities and hardware configurations.",
            "Implemented dynamic Dark and Light themes and refactored UI components to support theming,configuration changes, and consistent rendering across devices while maintaining performance."
        ],
        technologies: ["Java", "XML", "Unit Testing", "Infotainment System", "Automotive Domain", "Android Automotive OS", "Android Auto"]
    },
    {
        id: 2,
        title: "Android Developer Intern",
        company: "PADAAMS INNOVATIVE TECHNOLABS PVT LTD",
        location: "Remote",
        duration: "Aug 2025 - Feb 2026",
        type: "Internship",
        responsibilities: [
            "Developed an Android educational app using Jetpack Compose, Kotlin, and MVVM architecture",
            "Integrated Groq LLaMA 4 AI model to deliver personalized tutoring with real-time concept visualization for 10,000+ students",
            "Engineered an interactive Canvas-based graph visualization system with gesture controls for AI-generated concept maps",
            "Implemented multi-language voice integration (STT/TTS) with lip-sync animations supporting 4 languages (English, Hindi, Kannada, Telugu)",
            "Built a secure authentication flow using Google Credential Manager API and StateFlow, achieving 99.8% uptime",
            "Implemented DB auto sync"
        ],
        technologies: ["Kotlin", "Jetpack Compose", "MVVM", "AI Integration", "Firebase", "RoomDB"]
    },
    {
        id: 1,
        title: "Web Developer Freelancer",
        company: "Dhrishta Educational Foundation",
        location: "Freelance",
        duration: "Mar 2025 - Apr 2025",
        type: "Freelance",
        responsibilities: [
            "Designed and developed a fully responsive website for a non-profit organization",
            "Handled end-to-end development: UI design, HTML/CSS, domain registration, and email setup",
            "Integrated sections for Mission, Team, Gallery, and Contact; optimized for SEO",
            "Increased donor engagement by 25% through SEO optimization"
        ],
        technologies: ["HTML", "CSS", "JavaScript", "SEO", "Responsive Design"]
    }
];

const projects = [
    {
        id: 1,
        title: "Expense Tracker",
        description: "A comprehensive financial management app handling 2,000+ monthly transactions for 500+ active users with interactive visualizations and offline capability.",
        image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MTJ8MHwxfHNlYXJjaHwxfHxhbmRyb2lkJTIwYXBwJTIwZGV2ZWxvcG1lbnR8ZW58MHx8fHwxNzY5NjIzNTg3fDA&ixlib=rb-4.1.0&q=85",
        technologies: ["Android Studio", "Java", "Firebase", "MPAndroidChart", "Material Design"],
        github: "https://github.com/shubhash-singh/Budget_Tracker_Application",
        featured: true,
        stars: 1
    },
    {
        id: 2,
        title: "AI Learning Assistant",
        description: "Educational app with AI-powered tutoring, real-time concept visualization, and multi-language voice support for 10,000+ students.",
        image: "https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MTJ8MHwxfHNlYXJjaHwyfHxhbmRyb2lkJTIwYXBwJTIwZGV2ZWxvcG1lbnR8ZW58MHx8fHwxNzY5NjIzNTg3fDA&ixlib=rb-4.1.0&q=85",
        technologies: ["Kotlin", "Jetpack Compose", "AI/ML", "Canvas API", "STT/TTS"],
        github: "https://github.com/shubhash-singh",
        featured: true,
        stars: 3
    },
    {
        id: 3,
        title: "Weather Forecast App",
        description: "Modern weather application with real-time forecasts, location-based updates, and beautiful UI animations.",
        image: "https://images.unsplash.com/photo-1590935216595-f9fc9b65179d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MTJ8MHwxfHNlYXJjaHwzfHxhbmRyb2lkJTIwYXBwJTIwZGV2ZWxvcG1lbnR8ZW58MHx8fHwxNzY5NjIzNTg3fDA&ixlib=rb-4.1.0&q=85",
        technologies: ["Kotlin", "Retrofit", "Weather API", "Material Design", "MVVM"],
        github: "https://github.com/shubhash-singh",
        featured: false,
        stars: 2
    },
    {
        id: 4,
        title: "E-Commerce Android App",
        description: "Full-featured shopping app with product catalog, cart management, secure payments, and order tracking.",
        image: "https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNzl8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjB0ZWNobm9sb2d5fGVufDB8fHx8MTc2OTYyMzU5Nnww&ixlib=rb-4.1.0&q=85",
        technologies: ["Android", "Java", "Firebase", "Payment Gateway", "SQLite"],
        github: "https://github.com/shubhash-singh",
        featured: false,
        stars: 1
    },
    {
        id: 5,
        title: "Task Manager Pro",
        description: "Productivity app with task organization, reminders, priority management, and sync across devices.",
        image: "https://images.unsplash.com/photo-1597075095391-f15c2f9f359a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNzl8MHwxfHNlYXJjaHwyfHxtb2JpbGUlMjBhcHAlMjB0ZWNobm9sb2d5fGVufDB8fHx8MTc2OTYyMzU5Nnww&ixlib=rb-4.1.0&q=85",
        technologies: ["Kotlin", "Room Database", "WorkManager", "Material Design"],
        github: "https://github.com/shubhash-singh",
        featured: false,
        stars: 0
    },
    {
        id: 6,
        title: "L&T Banking Software",
        description: "A comprehensive banking system implementation with features for account management, transactions, and financial operations.",
        image: "https://images.unsplash.com/photo-1758786977080-a5e60a3f843c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNzl8MHwxfHNlYXJjaHwzfHxtb2JpbGUlMjBhcHAlMjB0ZWNobm9sb2d5fGVufDB8fHx8MTc2OTYyMzU5Nnww&ixlib=rb-4.1.0&q=85",
        technologies: ["Java", "SQL", "Database Management"],
        github: "https://github.com/shubhash-singh/LAndT_BankingSoftware",
        featured: false,
        stars: 1
    }
];

// ===== THEME MANAGEMENT =====
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// ===== MATERIAL RIPPLE EFFECT =====
function initRipples() {
    document.addEventListener('click', (e) => {
        const host = e.target.closest('.ripple-host');
        if (!host) return;
        const rect = host.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height) * 2;
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top  - size / 2;
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        ripple.style.cssText = `width:${size}px;height:${size}px;left:${x}px;top:${y}px`;
        host.appendChild(ripple);
        ripple.addEventListener('animationend', () => ripple.remove());
    });
}

// ===== HERO CODE BACKGROUND =====
function initHeroCode() {
    const codeLines = [
        'class MainActivity : AppCompatActivity() {',
        '    override fun onCreate(savedInstanceState: Bundle?) {',
        '        super.onCreate(savedInstanceState)',
        '        setContentView(R.layout.activity_main)',
        '        val viewModel: MainViewModel by viewModels()',
        '        lifecycleScope.launch {',
        '            viewModel.uiState.collect { state ->',
        '                updateUI(state)',
        '            }',
        '        }',
        '    }',
        '}',
        '',
        '@Composable',
        'fun HomeScreen(viewModel: HomeViewModel = hiltViewModel()) {',
        '    val uiState by viewModel.uiState.collectAsState()',
        '    Scaffold(',
        '        topBar = { TopAppBar(title = { Text("Shubhash Singh") }) },',
        '        floatingActionButton = {',
        '            ExtendedFloatingActionButton(',
        '                text = { Text("Connect") },',
        '                icon = { Icon(Icons.Default.Email, null) },',
        '                onClick = { /* navigate */ }',
        '            )',
        '        }',
        '    ) { paddingValues ->',
        '        LazyColumn(contentPadding = paddingValues) {',
        '            items(uiState.projects) { project ->',
        '                ProjectCard(project = project)',
        '            }',
        '        }',
        '    }',
        '}',
        '',
        'data class Developer(',
        '    val name: String = "Shubhash Singh",',
        '    val role: String = "Android Developer",',
        '    val company: String = "HARMAN International",',
        '    val skills: List<String> = listOf(',
        '        "Kotlin", "Java", "Jetpack Compose",',
        '        "MVVM", "Coroutines", "Firebase"',
        '    ),',
        '    val experience: Int = 2',
        ')',
        '',
        'object AndroidManifest {',
        '    const val PACKAGE = "com.shubhash.portfolio"',
        '    const val VERSION_NAME = "2.0.0"',
        '    const val MIN_SDK = 24',
        '    const val TARGET_SDK = 35',
        '}',
        '',
        '// build.gradle.kts',
        'dependencies {',
        '    implementation("androidx.compose.ui:ui")',
        '    implementation("androidx.lifecycle:lifecycle-viewmodel-ktx")',
        '    implementation("com.google.firebase:firebase-firestore")',
        '    implementation("io.coil-kt:coil-compose")',
        '    implementation("com.squareup.retrofit2:retrofit")',
        '}',
    ];
    const el = document.getElementById('hero-code');
    if (!el) return;
    const full = codeLines.join('\n');
    el.textContent = full + '\n\n' + full; // doubled for seamless loop
}

// ===== SECTION CODE BACKGROUNDS =====
function initSectionCodeBgs() {
    const sections = {
        'code-about': [
            '// About Shubhash Singh',
            'data class Developer(',
            '    val name: String        = "Shubhash Singh",',
            '    val role: String        = "Android Developer",',
            '    val location: String    = "Bangalore, India",',
            '    val experience: Int     = 2,',
            '    val education: String   = "B.Sc Computer Science",',
            '    val gpa: Float          = 7.5f',
            ')',
            '',
            'val achievements = listOf(',
            '    "Pull Shark badge on GitHub",',
            '    "450+ LeetCode problems solved",',
            '    "31+ open-source repositories",',
            '    "Java Certified — L&T EduTech",',
            '    "10,000+ users impacted"',
            ')',
            '',
            'fun describe(dev: Developer): String {',
            '    return buildString {',
            '        appendLine("Hello! I am ${dev.name}")',
            '        appendLine("Passionate about Android & mobile")',
            '        appendLine("Always learning, always building.")',
            '    }',
            '}',
            '',
            '// Goals',
            'enum class Goal {',
            '    BUILD_IMPACTFUL_APPS,',
            '    MASTER_JETPACK_COMPOSE,',
            '    CONTRIBUTE_OPEN_SOURCE,',
            '    GROW_AS_ENGINEER',
            '}',
        ],
        'code-skills': [
            '// build.gradle.kts (:app)',
            'plugins {',
            '    alias(libs.plugins.android.application)',
            '    alias(libs.plugins.kotlin.android)',
            '    alias(libs.plugins.hilt)',
            '    alias(libs.plugins.ksp)',
            '}',
            '',
            'android {',
            '    compileSdk = 35',
            '    defaultConfig {',
            '        applicationId = "com.shubhash.portfolio"',
            '        minSdk = 24',
            '        targetSdk = 35',
            '        versionCode = 1',
            '        versionName = "1.0"',
            '    }',
            '    buildFeatures { compose = true }',
            '    composeOptions {',
            '        kotlinCompilerExtensionVersion = "1.5.14"',
            '    }',
            '}',
            '',
            'dependencies {',
            '    // Core',
            '    implementation(libs.androidx.core.ktx)',
            '    implementation(libs.androidx.lifecycle.runtime.ktx)',
            '    implementation(libs.androidx.activity.compose)',
            '    // Compose',
            '    implementation(platform(libs.androidx.compose.bom))',
            '    implementation(libs.androidx.ui)',
            '    implementation(libs.androidx.material3)',
            '    // Architecture',
            '    implementation(libs.hilt.android)',
            '    implementation(libs.androidx.room.runtime)',
            '    implementation(libs.androidx.room.ktx)',
            '    // Network',
            '    implementation(libs.retrofit)',
            '    implementation(libs.retrofit.gson)',
            '    implementation(libs.okhttp.logging)',
            '    // Firebase',
            '    implementation(platform(libs.firebase.bom))',
            '    implementation(libs.firebase.firestore.ktx)',
            '    implementation(libs.firebase.auth.ktx)',
            '    // Testing',
            '    testImplementation(libs.junit)',
            '    testImplementation(libs.mockito.kotlin)',
            '    androidTestImplementation(libs.androidx.espresso.core)',
            '}',
        ],
        'code-experience': [
            '$ git log --oneline --all',
            '',
            'a3f9d12 feat: implement dynamic dark/light theming',
            'b7e2c45 fix: resolve HMI layout scaling on 15-inch display',
            'd1a8f93 test: add unit tests with JUnit + Mockito (90% coverage)',
            'e4b2109 feat: build AI tutoring module with Groq LLaMA 4',
            'f8c3d76 feat: Canvas-based concept map with gesture controls',
            '29a1e55 feat: multi-language STT/TTS support (EN/HI/KN/TE)',
            '8b4f012 fix: Google Credential Manager auth flow edge case',
            '9d7e334 feat: responsive website for non-profit org',
            'c2a5801 chore: SEO optimization — organic traffic +25%',
            '',
            '$ git branch',
            '* main',
            '  feat/automotive-hmi',
            '  feat/ai-learning-platform',
            '  hotfix/theme-config-change',
            '',
            '$ git diff HEAD~1 --stat',
            ' app/src/main/java/...MainActivity.kt | 48 ++++----',
            ' app/src/main/res/layout/...xml      | 120 +++++++++',
            ' app/src/test/...ViewModelTest.kt    | 92 +++++++',
            ' 3 files changed, 248 insertions(+), 12 deletions(-)',
        ],
        'code-projects': [
            '<!-- AndroidManifest.xml -->',
            '<manifest xmlns:android="http://schemas.android.com/apk/res/android"',
            '    package="com.shubhash.portfolio">',
            '',
            '    <uses-permission android:name="android.permission.INTERNET"/>',
            '    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/>',
            '',
            '    <application',
            '        android:name=".App"',
            '        android:label="@string/app_name"',
            '        android:theme="@style/Theme.Material3.Dark"',
            '        android:supportsRtl="true">',
            '',
            '        <activity android:name=".MainActivity"',
            '            android:exported="true">',
            '            <intent-filter>',
            '                <action android:name="android.intent.action.MAIN"/>',
            '                <category android:name="android.intent.category.LAUNCHER"/>',
            '            </intent-filter>',
            '        </activity>',
            '',
            '    </application>',
            '</manifest>',
            '',
            '// Project stats',
            'val projects = mapOf(',
            '    "ExpenseTracker"    to Stars(1),',
            '    "AILearningAssist"  to Stars(3),',
            '    "WeatherApp"        to Stars(2),',
            '    "ECommerce"         to Stars(1),',
            '    "TaskManagerPro"    to Stars(0),',
            '    "BankingSoftware"   to Stars(1)',
            ')',
        ],
        'code-contact': [
            '// ContactActivity.kt',
            'class ContactActivity : AppCompatActivity() {',
            '',
            '    private val email = "subhashsingh2059@gmail.com"',
            '    private val location = "Bangalore, India"',
            '    private val available = true',
            '',
            '    fun sendMessage(msg: Message): Response {',
            '        return if (available) {',
            '            inbox.add(msg)',
            '            Response.success("I will reply soon!")',
            '        } else {',
            '            Response.error("Try again later")',
            '        }',
            '    }',
            '}',
            '',
            '// HTTP Response from API',
            '{',
            '  "status": 200,',
            '  "developer": {',
            '    "name": "Shubhash Singh",',
            '    "available": true,',
            '    "openTo": ["Android", "Kotlin", "Java"],',
            '    "response_time": "< 24h",',
            '    "email": "subhashsingh2059@gmail.com",',
            '    "location": "Bangalore, IN"',
            '  }',
            '}',
        ],
    };

    Object.entries(sections).forEach(([id, lines]) => {
        const el = document.getElementById(id);
        if (!el) return;
        const text = lines.join('\n');
        el.textContent = text + '\n\n' + text; // doubled for seamless loop
    });
}

// ===== NAVBAR =====
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

    // Scroll detection
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Update active section
        updateActiveSection();
    });

    // Mobile menu toggle
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    // Smooth scroll and close mobile menu
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }

            // Close mobile menu
            mobileMenuToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });
}

function updateActiveSection() {
    const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
    const scrollPosition = window.scrollY + 100;

    for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
            const { offsetTop, offsetHeight } = element;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                // Update desktop nav
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });

                // Update mobile nav
                document.querySelectorAll('.mobile-nav-link').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
                break;
            }
        }
    }
}

// ===== TYPING ANIMATION =====
function initTypingAnimation() {
    const roles = ['Android Developer', 'Software Engineer', 'Problem Solver', 'Tech Enthusiast', 'Java Developer'];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typedTextElement = document.getElementById('typed-text');

    function type() {
        const currentRole = roles[roleIndex];

        if (!isDeleting) {
            typedTextElement.textContent = currentRole.slice(0, charIndex + 1);
            charIndex++;

            if (charIndex === currentRole.length) {
                setTimeout(() => { isDeleting = true; }, 2000);
                setTimeout(type, 2100);
            } else {
                setTimeout(type, 100);
            }
        } else {
            typedTextElement.textContent = currentRole.slice(0, charIndex - 1);
            charIndex--;

            if (charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                setTimeout(type, 500);
            } else {
                setTimeout(type, 50);
            }
        }
    }

    type();
}

// ===== ABOUT SECTION =====
function renderAboutSection() {
    // Render description
    const descriptionContainer = document.getElementById('about-description');
    about.description.forEach(paragraph => {
        const p = document.createElement('p');
        p.textContent = paragraph;
        descriptionContainer.appendChild(p);
    });

    // Render achievements
    const achievementsList = document.getElementById('achievements-list');
    about.achievements.forEach(achievement => {
        const li = document.createElement('li');
        li.textContent = achievement;
        achievementsList.appendChild(li);
    });

    // Render highlights
    const highlightsContainer = document.getElementById('highlights-container');
    about.highlights.forEach(highlight => {
        const card = document.createElement('div');
        card.className = 'card highlight-card';
        card.innerHTML = `
            <div class="card-content">
                <div class="card-icon-wrapper">
                    <div class="card-icon card-icon-emerald">
                        <i data-lucide="${highlight.icon}"></i>
                    </div>
                    <div class="card-text">
                        <h4 class="card-title">${highlight.title}</h4>
                        <p class="highlight-description">${highlight.description}</p>
                    </div>
                </div>
            </div>
        `;
        highlightsContainer.appendChild(card);
    });
}

// ===== SKILLS SECTION =====
function renderSkillsSection() {
    const skillsGrid = document.getElementById('skills-grid');

    skills.categories.forEach(category => {
        const card = document.createElement('div');
        card.className = 'card skill-category';

        let skillsHTML = '';
        category.skills.forEach(skill => {
            skillsHTML += `
                <div class="skill-item">
                    <div class="skill-header">
                        <span class="skill-name">${skill.name}</span>
                        <span class="skill-level">${skill.level}%</span>
                    </div>
                    <div class="skill-bar">
                        <div class="skill-bar-fill" style="--skill-width: ${skill.level}%"></div>
                    </div>
                </div>
            `;
        });

        card.innerHTML = `
            <div class="card-content">
                <div class="skill-category-header">
                    <div class="skill-category-icon">
                        <i data-lucide="${category.icon}"></i>
                    </div>
                    <h3 class="skill-category-title">${category.name}</h3>
                </div>
                ${skillsHTML}
            </div>
        `;

        skillsGrid.appendChild(card);
    });

    // Render technologies
    const technologiesContainer = document.getElementById('technologies-container');
    skills.technologies.forEach(tech => {
        const badge = document.createElement('div');
        badge.className = 'tech-badge';
        badge.textContent = tech;
        technologiesContainer.appendChild(badge);
    });

    // Animate skill bars on scroll
    initSkillBarsAnimation();
}

function initSkillBarsAnimation() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBars = entry.target.querySelectorAll('.skill-bar-fill');
                skillBars.forEach(bar => {
                    bar.classList.add('animate');
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        observer.observe(skillsSection);
    }
}

// ===== EXPERIENCE SECTION =====
function renderExperienceSection() {
    const experienceContainer = document.getElementById('experience-container');

    experience.forEach((exp, index) => {
        const item = document.createElement('div');
        item.className = 'experience-item';

        let responsibilitiesHTML = '';
        exp.responsibilities.forEach(resp => {
            responsibilitiesHTML += `<li>${resp}</li>`;
        });

        let technologiesHTML = '';
        exp.technologies.forEach(tech => {
            technologiesHTML += `
                <span class="experience-tech-badge">${tech}</span>
            `;
        });

        const typeClass = exp.type === 'Internship' ? 'internship' : 'freelance';

        item.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="experience-content">
                <div class="card experience-card">
                    <div class="card-content">
                        <div class="experience-header">
                            <div class="experience-title-row">
                                <div>
                                    <h3 class="experience-title">${exp.title}</h3>
                                    <p class="experience-company">${exp.company}</p>
                                </div>
                                <span class="experience-type-badge ${typeClass}">${exp.type}</span>
                            </div>
                            <div class="experience-meta">
                                <div class="experience-meta-item">
                                    <i data-lucide="calendar"></i>
                                    <span>${exp.duration}</span>
                                </div>
                                <div class="experience-meta-item">
                                    <i data-lucide="map-pin"></i>
                                    <span>${exp.location}</span>
                                </div>
                            </div>
                        </div>
                        <ul class="experience-responsibilities">
                            ${responsibilitiesHTML}
                        </ul>
                        <div class="experience-technologies">
                            ${technologiesHTML}
                        </div>
                    </div>
                </div>
            </div>
        `;

        experienceContainer.appendChild(item);
    });
}

// ===== PROJECTS SECTION =====
let currentFilter = 'all';

function renderProjectsSection() {
    renderProjects();
    initProjectsFilter();
}

function renderProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    projectsGrid.innerHTML = '';

    const filteredProjects = currentFilter === 'all'
        ? projects
        : projects.filter(p => p.featured);

    filteredProjects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'card project-card';

        let technologiesHTML = '';
        const techsToShow = project.technologies.slice(0, 3);
        techsToShow.forEach(tech => {
            technologiesHTML += `<span class="project-tech-badge">${tech}</span>`;
        });

        if (project.technologies.length > 3) {
            technologiesHTML += `<span class="project-tech-badge">+${project.technologies.length - 3}</span>`;
        }

        card.innerHTML = `
            <div class="project-image-wrapper">
                <img src="${project.image}" alt="${project.title}" class="project-image">
                <div class="project-image-overlay"></div>
                ${project.featured ? '<span class="project-featured-badge">Featured</span>' : ''}
            </div>
            <div class="card-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-technologies">
                    ${technologiesHTML}
                </div>
                <div class="project-footer">
                    <div class="project-stars">
                        <i data-lucide="star"></i>
                        <span>${project.stars}</span>
                    </div>
                    <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link">
                        View Code
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path></svg>
                    </a>
                </div>
            </div>
        `;

        projectsGrid.appendChild(card);
    });

    // Reinitialize Lucide icons for new elements
    lucide.createIcons();
}

function initProjectsFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            currentFilter = button.getAttribute('data-filter');
            renderProjects();
        });
    });
}

// ===== CONTACT FORM =====
function initContactForm() {
    const form = document.getElementById('contact-form');
    const toast = document.getElementById('toast');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = {
            name: form.name.value,
            email: form.email.value,
            subject: form.subject.value,
            message: form.message.value
        };

        console.log('Form submitted:', formData);

        // Show toast
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);

        // Reset form
        form.reset();
    });
}

// ===== FOOTER =====
function initFooter() {
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;

    // Footer navigation
    const footerLinks = document.querySelectorAll('.footer-link');
    footerLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    // Initialize theme
    initTheme();

    // Theme toggle
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

    // Android enhancements
    initRipples();
    initHeroCode();
    initSectionCodeBgs();

    // Initialize components
    initNavbar();
    initTypingAnimation();
    renderAboutSection();
    renderSkillsSection();
    renderExperienceSection();
    renderProjectsSection();
    initContactForm();
    initFooter();

    // Initialize Lucide icons
    lucide.createIcons();
});
