/**
 * StudyMate - Low-Fidelity Mobile App Wireframe Prototype JavaScript
 * Handles SPA Screen Navigation, Dynamic Data Rendering, Search/Filtering, 
 * Modals, State Management, and User Flow Simulations.
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. DATA STORE (Initial Mock Data)
  // ==========================================
  
  const appState = {
    user: {
      name: 'Rahul',
      email: 'rahul.student@college.edu',
      department: 'Computer Science & Engineering',
      year: '3rd Year (Semester 5)',
      rollNo: 'CSE-2024-089'
    },
    
    courses: [
      {
        id: 'c1',
        code: 'CS501',
        name: 'Python Programming',
        instructor: 'Dr. A. Sharma',
        credits: 4,
        progress: 75,
        schedule: 'Mon & Thu (09:00 AM - 10:30 AM)',
        room: 'Lab 101',
        description: 'Advanced Python data structures, object-oriented concepts, file operations, web scraping, and data manipulation libraries.'
      },
      {
        id: 'c2',
        code: 'CS502',
        name: 'Computer Networks',
        instructor: 'Prof. R. Verma',
        credits: 4,
        progress: 60,
        schedule: 'Mon & Thu (10:45 AM - 12:15 PM)',
        room: 'Room 302',
        description: 'OSI Reference model, TCP/IP stack, IP addressing & subnetting, routing protocols, and network socket programming.'
      },
      {
        id: 'c3',
        code: 'CS503',
        name: 'Java',
        instructor: 'Dr. S. Kulkarni',
        credits: 3,
        progress: 80,
        schedule: 'Mon & Wed (01:30 PM - 03:00 PM)',
        room: 'Room 204',
        description: 'Java OOP concepts, inheritance, interfaces, exception handling, multithreading synchronization, and collection framework.'
      },
      {
        id: 'c4',
        code: 'CS504',
        name: 'Computer Architecture',
        instructor: 'Prof. M. Gupta',
        credits: 3,
        progress: 50,
        schedule: 'Tue & Fri (09:00 AM - 10:30 AM)',
        room: 'Room 305',
        description: 'Arithmetic Logic Unit design, RISC vs CISC instruction set architectures, instruction pipelining, and cache memory hierarchy.'
      }
    ],

    notes: [
      {
        id: 'n1',
        title: 'Python Data Structures & List Comprehension',
        subject: 'Python Programming',
        date: 'Oct 02, 2026',
        snippet: 'List comprehensions provide a concise way to create lists. Key syntax: [expression for item in iterable if condition].',
        content: `### Python Data Structures & List Comprehension\n\n1. Lists & Mutability: Python lists are ordered and mutable.\n2. Dictionary Operations: Key-value lookups with O(1) average hash complexity.\n3. List Comprehension Example:\n   \`\`\`python\n   squares = [x**2 for x in range(10) if x % 2 == 0]\n   \`\`\`\n4. Tuple Unpacking: Efficiently assigning variables in a single line.`
      },
      {
        id: 'n2',
        title: 'Subnetting & IPv4 CIDR Calculation',
        subject: 'Computer Networks',
        date: 'Oct 04, 2026',
        snippet: 'Understanding Classless Inter-Domain Routing (CIDR) notation /24, /26. How to calculate network address, broadcast address, and valid host range.',
        content: `### Subnetting & CIDR Calculation\n\n1. Network Mask /24: 255.255.255.0 yields 256 addresses (254 usable hosts).\n2. Subnetting /26: Divides a /24 into 4 subnets of 64 addresses each.\n3. Formula for Usable Hosts: 2^(32 - prefix_length) - 2.\n4. Network ID: Bitwise AND of IP address and Subnet Mask.`
      },
      {
        id: 'n3',
        title: 'Java Multithreading & Synchronization',
        subject: 'Java',
        date: 'Sep 28, 2026',
        snippet: 'Thread lifecycle states: New, Runnable, Blocked, Waiting, Terminated. Using the synchronized keyword to prevent race conditions.',
        content: `### Java Multithreading & Synchronization\n\n1. Creating Threads: Extending Thread class vs Implementing Runnable interface.\n2. Synchronization: Keyword 'synchronized' locks an object monitor.\n3. Volatile Keyword: Ensures visibility of changes across threads.\n4. Inter-thread Communication: wait(), notify(), and notifyAll() methods.`
      },
      {
        id: 'n4',
        title: 'CPU Pipelining & Cache Mapping',
        subject: 'Computer Architecture',
        date: 'Oct 01, 2026',
        snippet: '5-stage MIPS pipeline: IF, ID, EX, MEM, WB. Handling pipeline hazards: Structural, Data, and Control hazards.',
        content: `### CPU Pipelining & Cache Mapping\n\n1. Pipeline Stages: Fetch -> Decode -> Execute -> Memory -> Writeback.\n2. Hazards: Data hazards resolved using forwarding/bypassing or stalling.\n3. Cache Mapping Techniques: Direct Mapped, Fully Associative, N-way Set Associative.\n4. Cache Hit vs Miss Penalty: Speeding up memory access times.`
      },
      {
        id: 'n5',
        title: 'Exception Handling & Custom Exceptions in Java',
        subject: 'Java',
        date: 'Sep 25, 2026',
        snippet: 'Checked vs Unchecked exceptions in Java. Using try-catch-finally blocks and creating custom exception classes.',
        content: `### Exception Handling in Java\n\n1. Hierarchy: Throwable -> Exception & Error.\n2. Checked Exceptions: Must be declared or handled at compile-time (e.g. IOException).\n3. Try-with-resources: Auto-closes Resources implementing AutoCloseable.`
      }
    ],

    tasks: [
      {
        id: 't1',
        title: 'Python Lab Assignment 3',
        subject: 'Python Programming',
        dueDate: '2026-10-10',
        status: 'Pending'
      },
      {
        id: 't2',
        title: 'Network Packet Tracer Routing Task',
        subject: 'Computer Networks',
        dueDate: '2026-10-12',
        status: 'Pending'
      },
      {
        id: 't3',
        title: 'Java OOP Inheritance Mini Project',
        subject: 'Java',
        dueDate: '2026-10-15',
        status: 'Pending'
      },
      {
        id: 't4',
        title: 'Computer Architecture RISC-V Quiz',
        subject: 'Computer Architecture',
        dueDate: '2026-10-05',
        status: 'Completed'
      }
    ],

    timetable: {
      Mon: [
        { time: '09:00 AM - 10:30 AM', subject: 'Python Programming', room: 'Lab 101', instructor: 'Dr. A. Sharma' },
        { time: '10:45 AM - 12:15 PM', subject: 'Computer Networks', room: 'Room 302', instructor: 'Prof. R. Verma' },
        { time: '01:30 PM - 03:00 PM', subject: 'Java', room: 'Room 204', instructor: 'Dr. S. Kulkarni' }
      ],
      Tue: [
        { time: '09:00 AM - 10:30 AM', subject: 'Computer Architecture', room: 'Room 305', instructor: 'Prof. M. Gupta' },
        { time: '10:45 AM - 12:15 PM', subject: 'Python Programming', room: 'Room 201', instructor: 'Dr. A. Sharma' },
        { time: '01:30 PM - 03:30 PM', subject: 'Networks Lab', room: 'Networking Lab B', instructor: 'Prof. R. Verma' }
      ],
      Wed: [
        { time: '09:00 AM - 10:30 AM', subject: 'Java', room: 'Room 204', instructor: 'Dr. S. Kulkarni' },
        { time: '10:45 AM - 12:15 PM', subject: 'Computer Architecture', room: 'Room 305', instructor: 'Prof. M. Gupta' },
        { time: '01:30 PM - 03:00 PM', subject: 'Self Study / Library', room: 'Main Library', instructor: 'N/A' }
      ],
      Thu: [
        { time: '09:00 AM - 11:00 AM', subject: 'Java Lab', room: 'Software Lab 2', instructor: 'Dr. S. Kulkarni' },
        { time: '11:15 AM - 12:45 PM', subject: 'Computer Networks', room: 'Room 302', instructor: 'Prof. R. Verma' },
        { time: '02:00 PM - 03:30 PM', subject: 'Python Programming', room: 'Room 201', instructor: 'Dr. A. Sharma' }
      ],
      Fri: [
        { time: '09:00 AM - 10:30 AM', subject: 'Computer Architecture', room: 'Room 305', instructor: 'Prof. M. Gupta' },
        { time: '10:45 AM - 12:15 PM', subject: 'Java', room: 'Room 204', instructor: 'Dr. S. Kulkarni' },
        { time: '01:30 PM - 03:30 PM', subject: 'Hardware & Architecture Lab', room: 'Hardware Lab 1', instructor: 'Prof. M. Gupta' }
      ],
      Sat: [
        { time: '10:00 AM - 12:00 PM', subject: 'Project Seminar & Review', room: 'Auditorium B', instructor: 'Dept Faculty' },
        { time: '01:00 PM - 02:30 PM', subject: 'Group Discussion', room: 'Discussion Room 3', instructor: 'Peer Group' }
      ]
    }
  };

  // State Tracking
  let activeNotesFilter = 'all';
  let activeTasksFilter = 'all';
  let activeTimetableDay = 'Wed';

  // ==========================================
  // 2. SCREEN NAVIGATION ROUTER
  // ==========================================
  
  const screens = document.querySelectorAll('.app-screen');
  const navItems = document.querySelectorAll('.bottom-nav .nav-item');

  function navigateTo(targetScreenId) {
    screens.forEach(screen => {
      screen.classList.remove('active');
    });

    const targetScreen = document.getElementById(targetScreenId);
    if (targetScreen) {
      targetScreen.classList.add('active');
      
      // Scroll app viewport to top
      const viewport = document.getElementById('app-viewport');
      if (viewport) viewport.scrollTop = 0;
    }

    // Update bottom nav active state
    navItems.forEach(item => {
      item.classList.remove('active');
      const target = item.getAttribute('data-target');
      if (target === targetScreenId) {
        item.classList.add('active');
      }
    });

    // Special behavior if returning to home or profile
    if (targetScreenId === 'screen-home') {
      updateDashboardCounts();
    }
  }

  // Attach navigation listeners to buttons with data-target
  document.body.addEventListener('click', (e) => {
    const navBtn = e.target.closest('.nav-screen-btn');
    if (navBtn) {
      const target = navBtn.getAttribute('data-target');
      if (target) {
        navigateTo(target);
      }
    }
  });

  // Splash Screen "Get Started"
  const getStartedBtn = document.getElementById('btn-get-started');
  if (getStartedBtn) {
    getStartedBtn.addEventListener('click', () => {
      navigateTo('screen-login');
    });
  }

  // Login Form Submission
  const loginBtn = document.getElementById('btn-login-submit');
  if (loginBtn) {
    loginBtn.addEventListener('click', () => {
      const email = document.getElementById('login-email').value.trim();
      if (email) {
        appState.user.email = email;
        const namePart = email.split('@')[0].split('.')[0];
        appState.user.name = namePart.charAt(0).toUpperCase() + namePart.slice(1);
        updateProfileDisplay();
      }
      showToast('Logged in successfully!');
      navigateTo('screen-home');
    });
  }

  // Forgot Password / Create Account links
  const forgotLink = document.getElementById('forgot-password-link');
  if (forgotLink) {
    forgotLink.addEventListener('click', (e) => {
      e.preventDefault();
      showToast('Password reset link sent to your college email!');
    });
  }

  const createAccLink = document.getElementById('create-account-link');
  if (createAccLink) {
    createAccLink.addEventListener('click', (e) => {
      e.preventDefault();
      showToast('Create account feature placeholder: Sign in with college email.');
    });
  }

  // Quick Design Process Button in Header
  const quickDesignBtn = document.getElementById('quick-design-btn');
  if (quickDesignBtn) {
    quickDesignBtn.addEventListener('click', () => {
      navigateTo('screen-design');
    });
  }

  // Logout Button
  const logoutBtn = document.getElementById('btn-logout');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      showToast('Logged out of StudyMate workspace.');
      navigateTo('screen-splash');
    });
  }

  // Quick Complete from Home Dashboard
  const homeQuickCompleteBtn = document.getElementById('home-quick-complete-btn');
  if (homeQuickCompleteBtn) {
    homeQuickCompleteBtn.addEventListener('click', () => {
      const pendingTask = appState.tasks.find(t => t.status === 'Pending');
      if (pendingTask) {
        pendingTask.status = 'Completed';
        showToast(`Marked "${pendingTask.title}" as Completed!`);
        renderTasks();
        updateDashboardCounts();
      }
    });
  }

  // ==========================================
  // 3. FRAME / VIEWPORT TOGGLE
  // ==========================================
  
  const toggleFrameBtn = document.getElementById('toggle-frame-btn');
  const appContainer = document.getElementById('app-container');
  const frameStateText = document.getElementById('frame-state-text');

  if (toggleFrameBtn && appContainer) {
    toggleFrameBtn.addEventListener('click', () => {
      if (appContainer.classList.contains('frame-mode')) {
        appContainer.classList.remove('frame-mode');
        appContainer.classList.add('full-mode');
        frameStateText.textContent = 'OFF (Full Web)';
        showToast('Switched to Full Screen Web View');
      } else {
        appContainer.classList.remove('full-mode');
        appContainer.classList.add('frame-mode');
        frameStateText.textContent = 'ON';
        showToast('Switched to Mobile Device Frame View');
      }
    });
  }

  // Live Clock in Phone Status Bar
  function updateStatusClock() {
    const clockEl = document.getElementById('status-time');
    if (clockEl) {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const mins = String(now.getMinutes()).padStart(2, '0');
      clockEl.textContent = `${hours}:${mins}`;
    }
  }
  setInterval(updateStatusClock, 1000);
  updateStatusClock();

  // ==========================================
  // 4. RENDER COURSES & DETAIL MODAL
  // ==========================================
  
  const coursesContainer = document.getElementById('courses-container');

  function renderCourses() {
    if (!coursesContainer) return;
    coursesContainer.innerHTML = '';

    appState.courses.forEach(course => {
      const card = document.createElement('div');
      card.className = 'wireframe-card course-card';
      card.innerHTML = `
        <div class="course-card-top">
          <span class="course-code">${course.code} &bull; ${course.credits} Credits</span>
          <span class="wireframe-tag">Active</span>
        </div>
        <h3 class="course-title">${course.name}</h3>
        <p class="course-meta">Instructor: ${course.instructor} | 📍 ${course.room}</p>

        <div class="progress-bar-container">
          <div class="progress-bar-fill" style="width: ${course.progress}%"></div>
        </div>
        <div class="progress-text">
          <span>Syllabus Completion</span>
          <strong>${course.progress}%</strong>
        </div>
      `;

      card.addEventListener('click', () => {
        openCourseDetailModal(course);
      });

      coursesContainer.appendChild(card);
    });
  }

  function openCourseDetailModal(course) {
    const modalTitle = document.getElementById('modal-course-title');
    const modalBody = document.getElementById('modal-course-body');

    if (modalTitle && modalBody) {
      modalTitle.textContent = `${course.name} (${course.code})`;
      modalBody.innerHTML = `
        <div class="wireframe-card" style="border-style: dashed; margin-bottom: 0.75rem;">
          <p><strong>Instructor:</strong> ${course.instructor}</p>
          <p><strong>Credits:</strong> ${course.credits} Credit Hours</p>
          <p><strong>Schedule:</strong> ${course.schedule}</p>
          <p><strong>Classroom:</strong> ${course.room}</p>
        </div>
        <h4>Course Description</h4>
        <p class="text-muted" style="margin-bottom: 0.75rem;">${course.description}</p>
        
        <h4>Syllabus Progress</h4>
        <div class="progress-bar-container" style="margin-bottom: 0.35rem;">
          <div class="progress-bar-fill" style="width: ${course.progress}%"></div>
        </div>
        <span class="text-muted" style="font-size: 0.75rem;">${course.progress}% of modules completed</span>
      `;
      openModal('modal-course-detail');
    }
  }

  // ==========================================
  // 5. RENDER NOTES & NOTE READER/ADD MODALS
  // ==========================================
  
  const notesContainer = document.getElementById('notes-container');
  const notesFilterBar = document.getElementById('notes-filter-bar');

  function renderNotes() {
    if (!notesContainer) return;
    notesContainer.innerHTML = '';

    const filteredNotes = appState.notes.filter(note => {
      if (activeNotesFilter === 'all') return true;
      return note.subject.toLowerCase() === activeNotesFilter.toLowerCase();
    });

    if (filteredNotes.length === 0) {
      notesContainer.innerHTML = `
        <div class="wireframe-card text-center" style="padding: 1.5rem;">
          <p class="text-muted">No notes found for this subject filter.</p>
        </div>
      `;
      return;
    }

    filteredNotes.forEach(note => {
      const card = document.createElement('div');
      card.className = 'wireframe-card note-card';
      card.innerHTML = `
        <span class="note-subject">${note.subject}</span>
        <h4 class="note-title">${note.title}</h4>
        <p class="note-snippet">${note.snippet}</p>
        <div class="note-footer">
          <span class="note-date">📅 ${note.date}</span>
          <button class="btn btn-xs btn-outline view-note-btn">View Notes &rarr;</button>
        </div>
      `;

      card.querySelector('.view-note-btn').addEventListener('click', () => {
        openNoteReaderModal(note);
      });

      notesContainer.appendChild(card);
    });
  }

  // Subject Filter Pill Click Listener
  if (notesFilterBar) {
    notesFilterBar.addEventListener('click', (e) => {
      const pill = e.target.closest('.filter-pill');
      if (pill) {
        notesFilterBar.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        activeNotesFilter = pill.getAttribute('data-filter');
        renderNotes();
      }
    });
  }

  function openNoteReaderModal(note) {
    const modalTitle = document.getElementById('modal-note-title');
    const modalBody = document.getElementById('modal-note-body');

    if (modalTitle && modalBody) {
      modalTitle.textContent = note.title;
      const formattedContent = note.content.replace(/\n/g, '<br>').replace(/### (.*)/g, '<h4>$1</h4>');
      modalBody.innerHTML = `
        <div class="wireframe-tag" style="margin-bottom: 0.5rem;">Subject: ${note.subject}</div>
        <p class="text-muted" style="font-size: 0.75rem; margin-bottom: 0.75rem;">Created on ${note.date}</p>
        <div class="wireframe-card" style="background: #f8fafc; line-height: 1.6;">
          ${formattedContent}
        </div>
      `;
      openModal('modal-read-note');
    }
  }

  // Add Note Form Handler
  const addNoteBtnModal = document.getElementById('btn-add-note-modal');
  if (addNoteBtnModal) {
    addNoteBtnModal.addEventListener('click', () => {
      openModal('modal-add-note');
    });
  }

  const addNoteForm = document.getElementById('add-note-form');
  if (addNoteForm) {
    addNoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.getElementById('note-title-input').value.trim();
      const subject = document.getElementById('note-subject-select').value;
      const content = document.getElementById('note-content-input').value.trim();

      if (title && content) {
        const newNote = {
          id: 'n' + (appState.notes.length + 1),
          title: title,
          subject: subject,
          date: 'Oct 07, 2026',
          snippet: content.length > 80 ? content.slice(0, 80) + '...' : content,
          content: content
        };

        appState.notes.unshift(newNote);
        renderNotes();
        updateDashboardCounts();
        closeModals();
        showToast('New note created successfully!');
        addNoteForm.reset();
      }
    });
  }

  // ==========================================
  // 6. RENDER ASSIGNMENTS & STATUS TOGGLER
  // ==========================================
  
  const tasksContainer = document.getElementById('tasks-container');
  const tasksStatusFilter = document.getElementById('tasks-status-filter');

  function renderTasks() {
    if (!tasksContainer) return;
    tasksContainer.innerHTML = '';

    const filteredTasks = appState.tasks.filter(task => {
      if (activeTasksFilter === 'all') return true;
      return task.status === activeTasksFilter;
    });

    if (filteredTasks.length === 0) {
      tasksContainer.innerHTML = `
        <div class="wireframe-card text-center" style="padding: 1.5rem;">
          <p class="text-muted">No assignments in this view.</p>
        </div>
      `;
    } else {
      filteredTasks.forEach(task => {
        const card = document.createElement('div');
        card.className = 'wireframe-card task-card';
        const isCompleted = task.status === 'Completed';

        card.innerHTML = `
          <div class="task-card-header">
            <span class="note-subject">${task.subject}</span>
            <span class="status-badge ${isCompleted ? 'status-completed' : 'status-pending'}">
              ${task.status}
            </span>
          </div>
          <h4 class="task-title">${task.title}</h4>
          <p class="task-due">📅 Due: ${task.dueDate}</p>
          
          <div class="task-actions">
            <span class="text-muted" style="font-size: 0.7rem;">Click status to toggle</span>
            <button class="btn btn-xs ${isCompleted ? 'btn-outline' : 'btn-primary'} toggle-status-btn">
              ${isCompleted ? 'Mark Pending' : 'Mark Completed ✓'}
            </button>
          </div>
        `;

        card.querySelector('.toggle-status-btn').addEventListener('click', () => {
          task.status = isCompleted ? 'Pending' : 'Completed';
          showToast(`Task "${task.title}" updated to ${task.status}!`);
          renderTasks();
          updateDashboardCounts();
        });

        tasksContainer.appendChild(card);
      });
    }

    // Update Filter Count Badges
    const countAll = appState.tasks.length;
    const countPending = appState.tasks.filter(t => t.status === 'Pending').length;
    const countCompleted = appState.tasks.filter(t => t.status === 'Completed').length;

    const elAll = document.getElementById('task-count-all');
    const elPending = document.getElementById('task-count-pending');
    const elCompleted = document.getElementById('task-count-completed');

    if (elAll) elAll.textContent = countAll;
    if (elPending) elPending.textContent = countPending;
    if (elCompleted) elCompleted.textContent = countCompleted;
  }

  if (tasksStatusFilter) {
    tasksStatusFilter.addEventListener('click', (e) => {
      const pill = e.target.closest('.filter-pill');
      if (pill) {
        tasksStatusFilter.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        activeTasksFilter = pill.getAttribute('data-status');
        renderTasks();
      }
    });
  }

  // Add Task Modal Handler
  const addTaskBtnModal = document.getElementById('btn-add-task-modal');
  if (addTaskBtnModal) {
    addTaskBtnModal.addEventListener('click', () => {
      openModal('modal-add-task');
    });
  }

  const addTaskForm = document.getElementById('add-task-form');
  if (addTaskForm) {
    addTaskForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.getElementById('task-title-input').value.trim();
      const subject = document.getElementById('task-subject-select').value;
      const dueDate = document.getElementById('task-date-input').value;

      if (title) {
        const newTask = {
          id: 't' + (appState.tasks.length + 1),
          title: title,
          subject: subject,
          dueDate: dueDate || '2026-10-20',
          status: 'Pending'
        };

        appState.tasks.unshift(newTask);
        renderTasks();
        updateDashboardCounts();
        closeModals();
        showToast('New assignment added!');
        addTaskForm.reset();
      }
    });
  }

  // ==========================================
  // 7. RENDER TIMETABLE BY DAY
  // ==========================================
  
  const dayTabs = document.getElementById('day-tabs');
  const scheduleContainer = document.getElementById('schedule-container');
  const selectedDayTitle = document.getElementById('selected-day-title');

  function renderTimetable(dayKey) {
    if (!scheduleContainer) return;
    activeTimetableDay = dayKey;
    scheduleContainer.innerHTML = '';

    const dayFullNames = {
      Mon: 'Monday',
      Tue: 'Tuesday',
      Wed: 'Wednesday',
      Thu: 'Thursday',
      Fri: 'Friday',
      Sat: 'Saturday'
    };

    if (selectedDayTitle) {
      selectedDayTitle.textContent = `${dayFullNames[dayKey] || dayKey} Schedule`;
    }

    const slots = appState.timetable[dayKey] || [];

    if (slots.length === 0) {
      scheduleContainer.innerHTML = `<p class="text-muted text-center">No classes scheduled for this day.</p>`;
      return;
    }

    slots.forEach(slot => {
      const item = document.createElement('div');
      item.className = 'slot-item';
      item.innerHTML = `
        <div class="slot-time">⏰ ${slot.time}</div>
        <div class="slot-subject">${slot.subject}</div>
        <div class="slot-room">📍 ${slot.room} &bull; ${slot.instructor}</div>
      `;
      scheduleContainer.appendChild(item);
    });
  }

  if (dayTabs) {
    dayTabs.addEventListener('click', (e) => {
      const tab = e.target.closest('.day-tab');
      if (tab) {
        dayTabs.querySelectorAll('.day-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const day = tab.getAttribute('data-day');
        renderTimetable(day);
      }
    });
  }

  // ==========================================
  // 8. GLOBAL SEARCH SYSTEM
  // ==========================================
  
  const globalSearchInput = document.getElementById('global-search-input');
  const searchResultsPanel = document.getElementById('search-results-panel');
  const searchResultsList = document.getElementById('search-results-list');
  const searchCountBadge = document.getElementById('search-count-badge');
  const clearSearchBtn = document.getElementById('clear-search-btn');

  if (globalSearchInput) {
    globalSearchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();

      if (query.length > 0) {
        if (clearSearchBtn) clearSearchBtn.classList.remove('hidden');
        performSearch(query);
      } else {
        if (clearSearchBtn) clearSearchBtn.classList.add('hidden');
        if (searchResultsPanel) searchResultsPanel.classList.add('hidden');
      }
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      if (globalSearchInput) globalSearchInput.value = '';
      clearSearchBtn.classList.add('hidden');
      if (searchResultsPanel) searchResultsPanel.classList.add('hidden');
    });
  }

  function performSearch(query) {
    if (!searchResultsList || !searchResultsPanel) return;
    searchResultsList.innerHTML = '';

    const matchedCourses = appState.courses.filter(c => c.name.toLowerCase().includes(query) || c.code.toLowerCase().includes(query));
    const matchedNotes = appState.notes.filter(n => n.title.toLowerCase().includes(query) || n.subject.toLowerCase().includes(query));
    const matchedTasks = appState.tasks.filter(t => t.title.toLowerCase().includes(query) || t.subject.toLowerCase().includes(query));

    const totalCount = matchedCourses.length + matchedNotes.length + matchedTasks.length;
    if (searchCountBadge) searchCountBadge.textContent = `${totalCount} found`;

    searchResultsPanel.classList.remove('hidden');

    if (totalCount === 0) {
      searchResultsList.innerHTML = `<div class="text-muted" style="padding: 0.5rem;">No matching courses, notes, or tasks found.</div>`;
      return;
    }

    matchedCourses.forEach(c => {
      const div = document.createElement('div');
      div.className = 'result-item';
      div.innerHTML = `<strong>📚 Course:</strong> ${c.name} (${c.code})`;
      div.addEventListener('click', () => {
        navigateTo('screen-courses');
        openCourseDetailModal(c);
      });
      searchResultsList.appendChild(div);
    });

    matchedNotes.forEach(n => {
      const div = document.createElement('div');
      div.className = 'result-item';
      div.innerHTML = `<strong>📝 Note:</strong> ${n.title}`;
      div.addEventListener('click', () => {
        navigateTo('screen-notes');
        openNoteReaderModal(n);
      });
      searchResultsList.appendChild(div);
    });

    matchedTasks.forEach(t => {
      const div = document.createElement('div');
      div.className = 'result-item';
      div.innerHTML = `<strong>📋 Task:</strong> ${t.title} [${t.status}]`;
      div.addEventListener('click', () => {
        navigateTo('screen-assignments');
      });
      searchResultsList.appendChild(div);
    });
  }

  // ==========================================
  // 9. PROFILE & EDIT PROFILE MODAL
  // ==========================================
  
  function updateProfileDisplay() {
    const elName = document.getElementById('profile-display-name');
    const elEmail = document.getElementById('profile-display-email');
    const elDept = document.getElementById('profile-display-dept');
    const elYear = document.getElementById('profile-display-year');
    const homeName = document.getElementById('home-student-name');

    if (elName) elName.textContent = appState.user.name;
    if (homeName) homeName.textContent = appState.user.name;
    if (elEmail) elEmail.textContent = appState.user.email;
    if (elDept) elDept.textContent = appState.user.department;
    if (elYear) elYear.textContent = appState.user.year;
  }

  const editProfileBtnModal = document.getElementById('btn-edit-profile-modal');
  if (editProfileBtnModal) {
    editProfileBtnModal.addEventListener('click', () => {
      document.getElementById('edit-name-input').value = appState.user.name;
      document.getElementById('edit-email-input').value = appState.user.email;
      document.getElementById('edit-dept-input').value = appState.user.department;
      document.getElementById('edit-year-input').value = appState.user.year;
      openModal('modal-edit-profile');
    });
  }

  const editProfileForm = document.getElementById('edit-profile-form');
  if (editProfileForm) {
    editProfileForm.addEventListener('submit', (e) => {
      e.preventDefault();
      appState.user.name = document.getElementById('edit-name-input').value.trim();
      appState.user.email = document.getElementById('edit-email-input').value.trim();
      appState.user.department = document.getElementById('edit-dept-input').value.trim();
      appState.user.year = document.getElementById('edit-year-input').value.trim();

      updateProfileDisplay();
      closeModals();
      showToast('Profile updated successfully!');
    });
  }

  // ==========================================
  // 10. HELPER DASHBOARD UPDATER
  // ==========================================
  
  function updateDashboardCounts() {
    const elCourses = document.getElementById('count-courses');
    const elNotes = document.getElementById('count-notes');
    const elTasks = document.getElementById('count-tasks');
    const elToday = document.getElementById('count-today');

    if (elCourses) elCourses.textContent = appState.courses.length;
    if (elNotes) elNotes.textContent = appState.notes.length;
    
    const pendingCount = appState.tasks.filter(t => t.status === 'Pending').length;
    if (elTasks) elTasks.textContent = `${pendingCount} Pending`;

    const wedCount = (appState.timetable.Wed || []).length;
    if (elToday) elToday.textContent = `Today: ${wedCount}`;
  }

  // ==========================================
  // 11. GENERAL MODAL BACKDROP LOGIC
  // ==========================================
  
  const backdrop = document.getElementById('modal-backdrop');

  function openModal(modalId) {
    closeModals();
    const targetModal = document.getElementById(modalId);
    if (targetModal && backdrop) {
      targetModal.classList.remove('hidden');
      backdrop.classList.remove('hidden');
    }
  }

  function closeModals() {
    document.querySelectorAll('.wireframe-modal').forEach(m => m.classList.add('hidden'));
    if (backdrop) backdrop.classList.add('hidden');
  }

  if (backdrop) {
    backdrop.addEventListener('click', closeModals);
  }

  document.querySelectorAll('.close-modal-btn').forEach(btn => {
    btn.addEventListener('click', closeModals);
  });

  // ==========================================
  // 12. TOAST NOTIFICATIONS
  // ==========================================
  
  function showToast(message) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = `ℹ️ ${message}`;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.2s ease';
      setTimeout(() => toast.remove(), 200);
    }, 2800);
  }

  // ==========================================
  // INITIALIZE APP
  // ==========================================
  renderCourses();
  renderNotes();
  renderTasks();
  renderTimetable('Wed');
  updateProfileDisplay();
  updateDashboardCounts();

  console.log('StudyMate Interactive Wireframe Prototype loaded successfully!');
});
