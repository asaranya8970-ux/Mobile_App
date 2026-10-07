# StudyMate - Mobile App Wireframe Prototype

**StudyMate** is an interactive, responsive mobile application prototype designed for college students to centralize and streamline study management. 

This project demonstrates a **Mobile App Wireframing task**, prioritizing a clean, low-fidelity wireframe UI aesthetic (monochrome color scheme, structural grid layout, wireframe cards, crisp badges, and inline placeholder icons) over production visual polish to focus on core user experience, structure, and navigation flows.

---

## 📱 Interactive Prototype Viewport
The application includes a desktop wrapper featuring a **simulated smartphone device shell** with live status bar indicators and a real-time **Mobile Frame Mode Toggle** (`Mobile Frame View` vs `Full Web View`).

---

## 🎨 Design Thinking Process

### 1. Empathize
Students frequently struggle with fragmented study workflows. Managing lecture notes, tracking assignment due dates, reviewing course syllabi, and checking daily timetables are often split across multiple platforms (WhatsApp groups, separate email accounts, physical notebooks, and complex college portals), resulting in confusion and missed deadlines.

### 2. Define
*Problem Statement:* College students need a simple, unified, low-friction mobile application to centralize all essential academic activities into a single viewable hub to reduce cognitive load and prevent missed tasks.

### 3. Ideate
Create a clean mobile interface with:
- A high-level **Home Dashboard** featuring 4 quick-access feature cards.
- A **Unified Global Search** bar for instant lookup across subjects, notes, and tasks.
- Low-complexity tabbed views for **Courses**, **Notes**, **Assignments**, and **Timetables**.

### 4. Prototype
Developed interactive low-fidelity wireframes using a responsive single-page web architecture (HTML5, CSS3, JavaScript) featuring modal dialogs, status toggles, and live search.

### 5. Test
Tested end-to-end user navigation flows to ensure students can effortlessly switch between screens, view course details, filter subject notes, add new tasks, toggle assignment completion, and check daily class schedules without broken links or interface friction.

---

## 👤 User Persona

| Attribute | Details |
| :--- | :--- |
| **Name** | Rahul |
| **Age** | 20 |
| **Role** | College Student (3rd Year, Computer Science & Engineering) |
| **Goal** | Easily manage academic activities in one centralized mobile interface |
| **Problems** | Difficulty tracking assignment deadlines, finding subject notes, and checking class schedules across fragmented platforms |

---

## 🔄 User Flow Map

```
[ Splash Screen ] 
       │
       ▼
[ Get Started ] ──► [ Login Screen ] ──► [ Home Dashboard ]
                                               │
             ┌───────────────────┬─────────────┴───────┬────────────────────┐
             ▼                   ▼                     ▼                    ▼
     [ Courses Screen ]   [ Notes Screen ]   [ Assignments Screen ]   [ Timetable Screen ]
             │                   │                     │                    │
             ▼                   ▼                     ▼                    ▼
     (Course Details)      (Read / Add Note)    (Status Toggle / Add)    (Mon-Sat Schedule)
             │                   │                     │                    │
             └───────────────────┴─────────────┬───────┴────────────────────┘
                                               ▼
                                      [ Return to Home ]
```

---

## 🖥️ Screen Breakdown & Features

### 1. Splash Screen
- Clean StudyMate wireframe logo box and version badge.
- Tagline: *"Organize. Learn. Succeed."*
- Brief overview text and `Get Started ->` primary wireframe action button.

### 2. Login Screen
- Student email and password input fields with wireframe icons.
- Pre-filled demo credentials for student `Rahul`.
- `Log In` button with validation redirecting to Home screen.
- Interactive `Forgot Password?` and `Create Account` triggers.

### 3. Home Screen
- Personalized welcome greeting (*"Welcome back, Rahul"*).
- Instant global search input searching across courses, notes, and tasks.
- Quick Access Cards with live counters:
  - **My Courses** (4 Enrolled)
  - **Notes** (5 Saved)
  - **Assignments** (3 Pending)
  - **Timetable** (Today's schedule count)
- Next Class session notification banner and priority assignment shortcut.

### 4. Courses Screen
- Enrolled subject cards for Semester 5:
  1. **Python Programming** (CS501)
  2. **Computer Networks** (CS502)
  3. **Java** (CS503)
  4. **Computer Architecture** (CS504)
- Interactive syllabus progress bars.
- Clicking any subject card opens the **Course Details Modal** showing instructor info, credits, room numbers, and topic breakdowns.

### 5. Notes Screen
- Filterable notes list by subject pill tabs (`All`, `Python`, `Networks`, `Java`, `Architecture`).
- Subject tags, titles, creation dates, and note content snippets.
- **View Notes** button opening an interactive Note Reader modal.
- `+ Add Note` button opening a modal form to create and persist new notes in real-time.

### 6. Assignments Screen
- Tabbed task status filters (`All`, `Pending`, `Completed`).
- Assignment cards showing subject, due date, and interactive status badges.
- Dynamic status toggle button (`Mark Completed ✓` / `Mark Pending`).
- `+ Add Task` modal to add new assignments dynamically.

### 7. Timetable Screen
- Day navigation tabs (Monday to Saturday).
- Timetable view rendering time slots, course names, room numbers, and instructor details.
- Visual indicator for current active day schedule.

### 8. Profile Screen
- Student details: Name (Rahul), Roll No (`CSE-2024-089`), Department (*Computer Science & Engineering*), Year (*3rd Year / Semester 5*), Email (`rahul.student@college.edu`).
- Interactive **Edit Profile Modal** allowing instant updates to user profile information.
- Direct link to Design Process documentation and **Logout** trigger.

### 9. Design Process Section
- Integrated UX Design documentation detailing Empathize, Define, Ideate, Prototype, and Test stages.
- Visual User Persona card for Rahul.
- Interactive User Flow step buttons that launch the exact screen simulated in each step!

---

## 🛠️ Tech Stack & Architecture

- **HTML5**: Semantic, accessible markup structure for Single-Page Application (SPA).
- **CSS3**: Mobile-first responsive layout utilizing CSS Grid & Flexbox, custom wireframe variables, crisp monochrome aesthetics, and desktop mobile frame mockup wrapper.
- **JavaScript (ES6+)**: Zero external library dependencies. Pure vanilla JS for routing, dynamic state management, live filtering, modals, search, and DOM manipulation.

---

## 🚀 How to Run Locally

1. **Clone or Download** the repository to your computer:
   ```bash
   git clone https://github.com/your-username/studymate-wireframe-prototype.git
   cd studymate-wireframe-prototype
   ```

2. **Open directly in browser**:
   - Double-click `index.html` or right-click and choose **Open with Browser** (Google Chrome, Firefox, Safari, Edge).

3. *(Optional)* **Run via local HTTP server**:
   - Using Python 3:
     ```bash
     python -m http.server 8000
     ```
   - Open `http://localhost:8000` in your web browser.

---

## 📁 Repository Structure

```
studymate/
├── index.html        # Main HTML5 Single Page Application
├── style.css         # Mobile-first wireframe CSS design system
├── script.js        # Dynamic UI router, state manager & interactions
└── README.md         # Comprehensive project documentation & assignment report
```

---

## 🎓 College Assignment Compliance
- ✅ Responsive mobile-first low-fidelity wireframe design.
- ✅ All 8 required screens + Design Process section fully functioning.
- ✅ Dynamic user flow navigation with zero console errors.
- ✅ Ready for GitHub repository upload & submission.
