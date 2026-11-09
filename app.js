// TRẠNG THÁI ỨNG DỤNG
let isAppViewOpen = false; // false = Landing Page; true = Phòng học trực tuyến
let currentRole = 'guest'; // 'guest' | 'student' | 'teacher'
let currentTab = 'arena'; // 'arena' | 'review' | 'lesson' | 'assessment' | 'dashboard'
let currentReviewSubTab = 'chapter'; // 'chapter' | 'midterm' | 'finalterm'
let currentGrade = 9;

// Trạng thái bài thi Đấu trường
let userArenaAnswers = {};
let lastArenaSubmission = null;

// ==========================================
// LƯU TRỮ VÀ ĐỒNG BỘ DỮ LIỆU (LOCALSTORAGE)
// ==========================================
const CLASSES_STORAGE_KEY = 'TOAN_MATH_CLASSES_PERSIST_V2';
const USERS_STORAGE_KEY = 'TOAN_USERS_PERSIST_V2';
const PENDING_REG_STORAGE_KEY = 'TOAN_PENDING_REGISTRATIONS_V2';
const CURRENT_USER_KEY = 'TOAN_CURRENT_USER_V2';

let currentUser = null;
let USERS = [];
let pendingRegistrations = [];

function loadUsersFromStorage() {
  try {
    const raw = localStorage.getItem(USERS_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        USERS = parsed;
        return USERS;
      }
    }
  } catch (e) {
    console.warn("Could not load users:", e);
  }
  const defaultUsers = [
    { username: 'admin', password: '123', name: 'Thầy Giáo Quản Trị', email: 'thaygiao.toan@gmail.com', role: 'teacher', apiKey: 'GV_ADMIN', assignedClassId: 'all' },
    { username: 'thaygiao', password: '123', name: 'Thầy Giáo Quản Trị', email: 'thaygiao.toan@gmail.com', role: 'teacher', apiKey: 'GV_ADMIN', assignedClassId: 'all' },
    { username: 'nguyenvanan', password: '123', name: 'Nguyễn Văn An', email: 'nguyenvanan.toan9@gmail.com', role: 'student', apiKey: 'TOAN-9PLUS-2026', assignedClassId: 'lop-9a' },
    { username: 'hocsinh', password: '123', name: 'Trần Thị Mai', email: 'tranmai.toan9@gmail.com', role: 'student', apiKey: 'TOAN-FREE-2026', assignedClassId: 'lop-9a' }
  ];
  USERS = defaultUsers;
  saveUsersToStorage(USERS);
  return USERS;
}

function saveUsersToStorage(users) {
  try {
    const data = users !== undefined ? users : USERS;
    USERS = data;
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.warn("Could not save users:", e);
  }
}

function loadPendingRegistrationsFromStorage() {
  try {
    const raw = localStorage.getItem(PENDING_REG_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        pendingRegistrations = parsed;
        return pendingRegistrations;
      }
    }
  } catch (e) {
    console.warn("Could not load pending registrations:", e);
  }
  const defaultPending = [
    {
      id: 'reg_demo_1',
      name: 'Lê Hoàng Nam',
      username: 'hoangnam9b',
      password: '123',
      email: 'hoangnam.le9@gmail.com',
      apiKey: 'TOAN-9PLUS-2026',
      apiLevel: 'Học sinh Giỏi 9+',
      registeredAt: '08/11/2026 19:30'
    },
    {
      id: 'reg_demo_2',
      name: 'Vũ Thị Minh Hạnh',
      username: 'minhhanh_toan',
      password: '123',
      email: 'minhhanh.vu@gmail.com',
      apiKey: 'TOAN-VIP-CHUYEN',
      apiLevel: 'Gói Chuyên & HSG',
      registeredAt: '08/11/2026 21:15'
    }
  ];
  pendingRegistrations = defaultPending;
  savePendingRegistrationsToStorage(pendingRegistrations);
  return pendingRegistrations;
}

function savePendingRegistrationsToStorage(list) {
  try {
    const data = list !== undefined ? list : pendingRegistrations;
    pendingRegistrations = data;
    localStorage.setItem(PENDING_REG_STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.warn("Could not save pending registrations:", e);
  }
}

function loadClassesFromStorage() {
  try {
    const raw = localStorage.getItem(CLASSES_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        MATH_DATA.classes = parsed;
        return;
      }
    }
  } catch (err) {
    console.warn("Could not load classes from localStorage:", err);
  }
  // Nếu chưa có dữ liệu lưu trữ, khởi tạo từ data.js
  saveClassesStorage();
}

function saveClassesStorage() {
  try {
    if (window.MATH_DATA && Array.isArray(MATH_DATA.classes)) {
      localStorage.setItem(CLASSES_STORAGE_KEY, JSON.stringify(MATH_DATA.classes));
    }
  } catch (err) {
    console.warn("Could not save classes to localStorage:", err);
  }
}

function resetClassesToDefault() {
  if (!confirm("⚠️ Thầy có chắc chắn muốn khôi phục lại danh sách lớp học và học sinh mẫu ban đầu không?\n\nToàn bộ lớp học mới tạo và danh sách học sinh đăng ký thêm sẽ được đặt lại theo mẫu mặc định.")) return;
  localStorage.removeItem(CLASSES_STORAGE_KEY);
  localStorage.removeItem(PENDING_REG_STORAGE_KEY);
  localStorage.removeItem(USERS_STORAGE_KEY);
  location.reload();
}

function populateRegisterClassDropdown() {
  const select = document.getElementById('reg-class');
  if (!select) return;
  if (!window.MATH_DATA || !Array.isArray(MATH_DATA.classes)) return;
  
  select.innerHTML = MATH_DATA.classes.map((c, idx) => 
    `<option value="${c.id}" ${idx === 0 ? 'selected' : ''}>${c.name} (Khối ${c.grade} • Mã lớp: ${c.code})</option>`
  ).join('');
}

function selectApiKey(key, desc) {
  const input = document.getElementById('reg-api-key');
  if (input) {
    input.value = key;
  }
  const descEl = document.getElementById('selected-api-text');
  if (descEl) {
    descEl.innerHTML = `Đã chọn mã: <strong class="font-mono text-indigo-700 font-bold">${key}</strong> — ${desc}`;
  }
  document.querySelectorAll('.api-choice-pill').forEach(btn => {
    btn.classList.remove('ring-2', 'ring-indigo-600', 'border-indigo-600', 'border-2');
  });
  if (window.event && window.event.currentTarget) {
    window.event.currentTarget.classList.add('ring-2', 'ring-indigo-600', 'border-indigo-600', 'border-2');
  }
}

function quickFillLoginKey(key) {
  const input = document.getElementById('login-key');
  if (input) {
    input.value = key;
    input.focus();
  }
}

function openApiGuideModal() {
  const modal = document.getElementById('modal-api-guide');
  if (modal) {
    modal.classList.remove('hidden');
    refreshIconsAndMath();
  }
}

function closeApiGuideModal() {
  const modal = document.getElementById('modal-api-guide');
  if (modal) modal.classList.add('hidden');
}

function openGoogleStudioWebsite() {
  window.open('https://aistudio.google.com/app/apikey', '_blank');
}

function quickFillStudioApiKey(key) {
  const loginInput = document.getElementById('login-api-key');
  if (loginInput) loginInput.value = key;
  const regInput = document.getElementById('reg-api-key');
  if (regInput) regInput.value = key;
  const descEl = document.getElementById('selected-api-text');
  if (descEl) {
    descEl.innerHTML = `Đã chọn mã: <strong class="font-mono text-purple-700 font-bold">${key}</strong> — Mã API Google Studio`;
  }
  closeApiGuideModal();
  switchAuthMode('login');
  const loginSection = document.getElementById('dang-ky');
  if (loginSection) loginSection.scrollIntoView({ behavior: 'smooth' });
}

function handleGoogleStudioLogin() {
  const apiKeyInput = document.getElementById('login-api-key');
  const key = apiKeyInput ? apiKeyInput.value.trim() : '';

  if (!key) {
    alert("⚠️ Vui lòng nhập hoặc dán Mã API Google Studio của bạn!\n\nNếu chưa có mã, em hãy bấm vào nút 'Cách lấy mã?' hoặc 'Dùng thử mã mẫu Google Studio' để trải nghiệm ngay.");
    if (apiKeyInput) apiKeyInput.focus();
    return;
  }

  // Lưu trữ mã API Google Studio vào localStorage để các module AI sử dụng
  try {
    localStorage.setItem('TOAN_GOOGLE_STUDIO_API_KEY', key);
    localStorage.setItem('GEMINI_API_KEY', key);
  } catch (e) {}

  let role = 'student';
  let userName = 'Học Sinh Google Studio (AI 9+)';

  if (key.toLowerCase().includes('admin') || key.toLowerCase().includes('teacher')) {
    role = 'teacher';
    userName = 'Thầy Giáo (Google Studio Admin)';
  }

  const user = {
    id: 'user_studio_' + Date.now(),
    username: 'googlestudio_user',
    name: userName,
    email: 'googlestudio@math.edu.vn',
    role: role,
    apiKey: key,
    isGoogleStudioAuth: true
  };

  currentUser = user;
  try {
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
  } catch (err) {}

  if (role === 'teacher') {
    switchRole('teacher');
    if (!isAppViewOpen) toggleAppView();
    switchTab('dashboard');
    alert(`🎉 ĐÃ ĐĂNG NHẬP THÀNH CÔNG BẰNG GOOGLE STUDIO API KEY!\n\nXin chào Thầy!\n- Khóa API: ${key.substring(0, 10)}... (Đã kết nối)\n- Hệ thống đã kích hoạt toàn quyền Quản trị & AI Tự sinh đề thi theo ma trận.`);
  } else {
    switchRole('student');
    if (!isAppViewOpen) toggleAppView();
    switchTab('arena');
    alert(`🎉 ĐÃ ĐĂNG NHẬP THÀNH CÔNG BẰNG GOOGLE STUDIO API KEY!\n\n- Mã API: ${key.substring(0, 12)}... (Đã xác thực)\n- Trí tuệ nhân tạo Gemini: Đã sẵn sàng hỗ trợ giải toán 24/7\n- Quyền lợi: Mở khóa toàn bộ lời giải chi tiết, đề thi thử và bài tập vá lỗi!\n\nChúc em học tập và bứt phá điểm 9+ môn Toán!`);
  }
}

function selectApiKeyFromModal(key) {
  const regInput = document.getElementById('reg-api-key');
  if (regInput) regInput.value = key;
  const loginInput = document.getElementById('login-api-key');
  if (loginInput) loginInput.value = key;

  const descEl = document.getElementById('selected-api-text');
  if (descEl) {
    descEl.innerHTML = `Đã chọn mã: <strong class="font-mono text-indigo-700 font-bold">${key}</strong> — Mã kích hoạt khóa học`;
  }
  closeApiGuideModal();
  const regSection = document.getElementById('dang-ky');
  if (regSection) regSection.scrollIntoView({ behavior: 'smooth' });
}

function resetRegisterForm() {
  const form = document.getElementById('student-register-form');
  const successBox = document.getElementById('register-success-box');
  if (form) form.classList.remove('hidden');
  if (successBox) successBox.classList.add('hidden');
  const regName = document.getElementById('reg-name');
  if (regName) { regName.value = ''; regName.focus(); }
  const regEmail = document.getElementById('reg-email');
  if (regEmail) regEmail.value = '';
  const regPhone = document.getElementById('reg-phone');
  if (regPhone) regPhone.value = '';
}

// Khởi chạy khi tải trang
document.addEventListener('DOMContentLoaded', () => {
  loadClassesFromStorage();
  loadUsersFromStorage();
  loadPendingRegistrationsFromStorage();
  populateRegisterClassDropdown();
  renderArenaExamSelector();
  renderArenaExam();
  renderArenaLeaderboard();
  renderReviewContent();
  renderGiftedTopics();
  renderGiftedArticles();
  renderGiftedExams();
  renderTheory();
  renderTopicTabs();
  renderTopicMethod();
  renderExamples();
  renderExercises();
  renderPendingRegistrations();
  renderClasses();
  renderExamStats();
  renderCommonErrors();
  renderKnttCurriculum();
  populateLessonNavDropdowns(9);
  if (typeof renderTikzLibraryGallery === 'function') renderTikzLibraryGallery('all');
  if (typeof renderLessonDiagram === 'function') renderLessonDiagram();
  
  // Nạp lại mã Google Studio đã lưu nếu có
  const savedStudioKey = localStorage.getItem('TOAN_GOOGLE_STUDIO_API_KEY');
  const loginApiKeyInput = document.getElementById('login-api-key');
  if (savedStudioKey && loginApiKeyInput) {
    loginApiKeyInput.value = savedStudioKey;
  }

  refreshIconsAndMath();
});

// Hàm hiển thị lại icon Lucide và công thức KaTeX
function refreshIconsAndMath() {
  if (window.lucide) {
    lucide.createIcons();
  }
  if (window.renderMathInElement) {
    renderMathInElement(document.body, {
      delimiters: [
        { left: '$$', right: '$$', display: true },
        { left: '$', right: '$', display: false }
      ],
      throwOnError: false
    });
  }
}

// ==========================================
// ĐIỀU HƯỚNG VIEW (LANDING PAGE VS PHÒNG HỌC)
// ==========================================
function toggleAppView() {
  isAppViewOpen = !isAppViewOpen;
  const landingView = document.getElementById('landing-page-view');
  const appView = document.getElementById('interactive-app-view');
  const navBtnText = document.getElementById('nav-btn-app-text');

  if (isAppViewOpen) {
    landingView.classList.add('hidden');
    appView.classList.remove('hidden');
    if (navBtnText) navBtnText.innerText = "Về Landing Page";
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    landingView.classList.remove('hidden');
    appView.classList.add('hidden');
    if (navBtnText) navBtnText.innerText = "Vào Phòng Học Trực Tuyến";
  }

  refreshIconsAndMath();
}

function openArenaFromLanding() {
  if (!isAppViewOpen) {
    toggleAppView();
  }
  switchTab('arena');
}

function openReviewFromLanding() {
  if (!isAppViewOpen) {
    toggleAppView();
  }
  switchTab('review');
}

function openGiftedFromLanding() {
  if (!isAppViewOpen) {
    toggleAppView();
  }
  switchTab('gifted');
}

function openReviewCategory(category) {
  openReviewFromLanding();
  switchReviewSubTab(category);
}

function openArenaWithExam(examId) {
  openArenaFromLanding();
  const exam = MATH_DATA.arenaExams.find(e => e.id === examId);
  if (exam && exam.questions.length === 0) {
    alert(`Đề thi "${exam.title}" đang được Thầy cập nhật bảng câu hỏi. Hiện đang mở đề chính thức: "Đề Khảo Sát Toán 9 - Sở GD&ĐT Hà Nội".`);
  }
}

function scrollToRegister() {
  if (isAppViewOpen) {
    toggleAppView();
  }
  setTimeout(() => {
    const regSection = document.getElementById('dang-ky');
    if (regSection) {
      regSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, 100);
}

// ==========================================
// FORM ĐĂNG KÝ: HỌC SINH, ZALO & MÃ API BẮT BUỘC
// ==========================================
// ĐĂNG KÝ / ĐĂNG NHẬP (MIỄN PHÍ & CÓ PHÍ)
// ==========================================
let currentAuthMode = 'register';
let currentRegisterPkg = 'free';

function switchAuthMode(mode) {
  currentAuthMode = mode;
  const tabReg = document.getElementById('tab-btn-register');
  const tabLog = document.getElementById('tab-btn-login');
  const panelReg = document.getElementById('auth-panel-register');
  const panelLog = document.getElementById('auth-panel-login');

  if (mode === 'register') {
    if (tabReg) tabReg.className = "flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-black transition flex items-center justify-center gap-2 bg-white text-indigo-700 shadow-sm";
    if (tabLog) tabLog.className = "flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-black transition flex items-center justify-center gap-2 text-slate-600 hover:text-slate-900";
    if (panelReg) panelReg.classList.remove('hidden');
    if (panelLog) panelLog.classList.add('hidden');
  } else {
    if (tabReg) tabReg.className = "flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-black transition flex items-center justify-center gap-2 text-slate-600 hover:text-slate-900";
    if (tabLog) tabLog.className = "flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-black transition flex items-center justify-center gap-2 bg-white text-indigo-700 shadow-sm";
    if (panelReg) panelReg.classList.add('hidden');
    if (panelLog) panelLog.classList.remove('hidden');
  }
  refreshIconsAndMath();
}

function selectRegisterPackage(type) {
  currentRegisterPkg = type;
  const btnFree = document.getElementById('pkg-btn-free');
  const iconFree = document.getElementById('pkg-icon-free');
  const btnPaid = document.getElementById('pkg-btn-paid');
  const iconPaid = document.getElementById('pkg-icon-paid');
  const inputKey = document.getElementById('reg-api-key');
  const submitBtn = document.getElementById('reg-submit-btn');
  const submitText = document.getElementById('reg-submit-btn-text');
  const contactNote = document.getElementById('reg-contact-note');

  if (type === 'free') {
    if (btnFree) btnFree.className = "p-3.5 rounded-2xl border-2 border-emerald-500 bg-emerald-50/70 text-left transition flex items-start gap-3 hover:bg-emerald-50";
    if (iconFree) {
      iconFree.className = "w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 font-black text-sm";
      iconFree.textContent = "✓";
    }
    if (btnPaid) btnPaid.className = "p-3.5 rounded-2xl border-2 border-slate-200 bg-white text-left transition flex items-start gap-3 hover:border-indigo-400";
    if (iconPaid) {
      iconPaid.className = "w-8 h-8 rounded-xl bg-slate-200 text-slate-600 flex items-center justify-center shrink-0 font-black text-sm";
      iconPaid.textContent = "★";
    }
    if (inputKey) inputKey.value = "TOAN-FREE-2026";
    if (submitBtn) submitBtn.className = "w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-black text-base shadow-lg shadow-emerald-200 hover:shadow-xl hover:scale-[1.01] transition transform flex items-center justify-center gap-2 glow-btn";
    if (submitText) submitText.innerText = "Đăng Ký & Bắt Đầu Học Ngay (Miễn Phí)";
    if (contactNote) contactNote.classList.add('hidden');
  } else {
    if (btnPaid) btnPaid.className = "p-3.5 rounded-2xl border-2 border-indigo-600 bg-indigo-50/70 text-left transition flex items-start gap-3 hover:bg-indigo-50";
    if (iconPaid) {
      iconPaid.className = "w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 font-black text-sm";
      iconPaid.textContent = "✓";
    }
    if (btnFree) btnFree.className = "p-3.5 rounded-2xl border-2 border-slate-200 bg-white text-left transition flex items-start gap-3 hover:border-emerald-400";
    if (iconFree) {
      iconFree.className = "w-8 h-8 rounded-xl bg-slate-200 text-slate-600 flex items-center justify-center shrink-0 font-black text-sm";
      iconFree.textContent = "○";
    }
    if (inputKey && (inputKey.value === 'TOAN-FREE-2026' || !inputKey.value)) {
      inputKey.value = "TOAN-9PLUS-2026";
    }
    if (submitBtn) submitBtn.className = "w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white font-black text-base shadow-lg shadow-indigo-300 hover:shadow-xl hover:scale-[1.01] transition transform flex items-center justify-center gap-2 glow-btn";
    if (submitText) submitText.innerText = "Gửi Yêu Cầu Đăng Ký Vào Lớp Thầy (1 Chạm)";
    if (contactNote) contactNote.classList.remove('hidden');
  }
  onApiKeyInput();
  refreshIconsAndMath();
}

function selectSampleApiKey(apiKey, desc) {
  const input = document.getElementById('reg-api-key');
  if (input) {
    input.value = apiKey;
    if (apiKey === 'TOAN-FREE-2026') {
      selectRegisterPackage('free');
    } else {
      selectRegisterPackage('paid');
    }
    onApiKeyInput();
  }
}

function onApiKeyInput() {
  const input = document.getElementById('reg-api-key');
  const badge = document.getElementById('reg-api-level-badge');
  const text = document.getElementById('reg-api-level-text');
  if (!input || !badge || !text) return;

  const key = input.value.trim().toUpperCase();
  if (!key) {
    badge.classList.add('hidden');
    return;
  }

  const config = MATH_DATA.apiKeysConfig ? MATH_DATA.apiKeysConfig[key] : null;
  badge.classList.remove('hidden');

  if (config) {
    text.innerHTML = `<i data-lucide="sparkles" class="w-4 h-4 text-emerald-600"></i> Mức độ định danh: <strong class="text-indigo-950">${config.level}</strong> (${config.description})`;
  } else {
    text.innerHTML = `<i data-lucide="check" class="w-4 h-4 text-blue-500"></i> Mã API: <strong class="font-mono text-indigo-950">${key}</strong> (Hệ thống sẽ định danh mức độ sau khi Thầy duyệt)`;
  }
  refreshIconsAndMath();
}

function handleStudentRegister(e) {
  e.preventDefault();
  const name = document.getElementById('reg-name').value.trim();
  const username = document.getElementById('reg-username').value.trim().toLowerCase();
  const password = document.getElementById('reg-password').value.trim();
  const emailInput = document.getElementById('reg-email');
  const email = emailInput ? emailInput.value.trim() : '';
  const apiKey = document.getElementById('reg-api-key').value.trim().toUpperCase();

  if (!name) {
    alert("Vui lòng nhập đầy đủ Họ và tên!");
    document.getElementById('reg-name').focus();
    return;
  }

  if (!username) {
    alert("Vui lòng nhập Tên đăng nhập!");
    document.getElementById('reg-username').focus();
    return;
  }

  if (!password || password.length < 3) {
    alert("Vui lòng nhập Mật khẩu (tối thiểu 3 ký tự)!");
    document.getElementById('reg-password').focus();
    return;
  }

  if (!email) {
    alert("Vui lòng nhập địa chỉ Gmail!");
    if (emailInput) emailInput.focus();
    return;
  }

  if (!apiKey) {
    alert("⚠️ BẮT BUỘC PHẢI CÓ MÃ API!\n\nVui lòng nhấp chọn 1 mã gợi ý bên dưới (ví dụ TOAN-FREE-2026 hoặc TOAN-9PLUS-2026) để kích hoạt khóa học!");
    document.getElementById('reg-api-key').focus();
    return;
  }

  const users = loadUsersFromStorage();
  if (users.some(u => u.username.toLowerCase() === username)) {
    alert(`⚠️ Tên đăng nhập "${username}" đã có người sử dụng!\nVui lòng chọn một tên đăng nhập khác (ví dụ thêm năm sinh hoặc lớp: ${username}9a).`);
    document.getElementById('reg-username').focus();
    return;
  }

  const apiConfig = MATH_DATA.apiKeysConfig ? MATH_DATA.apiKeysConfig[apiKey] : null;
  const levelText = apiConfig ? apiConfig.level : `Mã tự do: ${apiKey}`;
  const nowStr = new Date().toLocaleDateString('vi-VN') + ' ' + new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });

  // 1. Thêm tài khoản mới vào cơ sở dữ liệu USERS
  const newUser = {
    id: 'usr_' + Date.now(),
    username: username,
    password: password,
    name: name,
    email: email,
    apiKey: apiKey,
    role: 'student',
    status: 'pending',
    assignedClassId: null,
    registeredAt: nowStr
  };
  users.push(newUser);
  saveUsersToStorage(users);

  // 2. Đưa vào hàng chờ phân lớp của Thầy
  const pendingList = loadPendingRegistrationsFromStorage();
  pendingList.unshift({
    id: 'reg_' + Date.now(),
    name: name,
    username: username,
    password: password,
    email: email,
    apiKey: apiKey,
    apiLevel: levelText,
    registeredAt: nowStr
  });
  savePendingRegistrationsToStorage(pendingList);

  // Tự động điền tài khoản vừa tạo sang Form Đăng Nhập
  const loginUserEl = document.getElementById('login-username');
  const loginPassEl = document.getElementById('login-password');
  if (loginUserEl) loginUserEl.value = username;
  if (loginPassEl) loginPassEl.value = password;

  // 3. Hiển thị thông báo đăng ký thành công
  const form = document.getElementById('student-register-form');
  const successBox = document.getElementById('register-success-box');
  const successTitle = document.getElementById('register-success-title');
  const successDesc = document.getElementById('register-success-desc');
  const successActions = document.getElementById('register-success-actions');

  if (form) form.classList.add('hidden');
  if (successBox) successBox.classList.remove('hidden');
  if (successTitle) successTitle.innerText = "Đã Đăng Ký Tài Khoản Thành Công!";
  if (successDesc) {
    successDesc.innerHTML = `
      Xin chúc mừng <strong>${name}</strong>!<br>
      Tài khoản của em đã được tạo thành công với Tên đăng nhập: <strong class="font-mono text-indigo-700">@${username}</strong>, Mã API: <strong class="font-mono text-indigo-700">${apiKey}</strong>.<br><br>
      📌 <strong>Quy trình phân lớp:</strong> Hồ sơ của em đã được chuyển đến <strong>Bảng quản trị của Thầy</strong>. Thầy sẽ xem xét và trực tiếp xếp em vào lớp học phù hợp!
    `;
  }
  if (successActions) {
    successActions.innerHTML = `
      <button onclick="quickFillCredentials('${username}', '${password}')" class="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-bold rounded-xl transition shadow-md flex items-center gap-2">
        👉 Đăng Nhập Ngay Với Tài Khoản Vừa Tạo
      </button>
      <button onclick="resetRegisterForm()" class="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl transition">
        Đăng ký học sinh khác
      </button>
    `;
  }

  renderPendingRegistrations();
  refreshIconsAndMath();
}

function handleUserLogin(e) {
  e.preventDefault();
  const usernameInput = document.getElementById('login-username');
  const passwordInput = document.getElementById('login-password');
  const accountInput = usernameInput ? usernameInput.value.trim().toLowerCase() : '';
  const password = passwordInput ? passwordInput.value.trim() : '';

  if (!accountInput) {
    alert("Vui lòng nhập Tên đăng nhập hoặc Gmail đã đăng ký!");
    if (usernameInput) usernameInput.focus();
    return;
  }
  if (!password) {
    alert("Vui lòng nhập Mật khẩu đăng nhập!");
    if (passwordInput) passwordInput.focus();
    return;
  }

  const users = loadUsersFromStorage();
  const user = users.find(u => 
    (u.username.toLowerCase() === accountInput || (u.email && u.email.toLowerCase() === accountInput)) && 
    u.password === password
  );

  if (!user) {
    alert("⚠️ Tên đăng nhập hoặc Mật khẩu đăng nhập không chính xác!\n\nVui lòng kiểm tra lại thông tin hoặc bấm 'Chưa có tài khoản? 👉 Đăng ký' để tạo tài khoản mới.");
    return;
  }

  currentUser = user;
  try {
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
    if (user.apiKey) {
      localStorage.setItem('TOAN_GOOGLE_STUDIO_API_KEY', user.apiKey);
      localStorage.setItem('GEMINI_API_KEY', user.apiKey);
    }
  } catch (err) {}

  if (user.role === 'teacher') {
    switchRole('teacher');
    if (!isAppViewOpen) toggleAppView();
    switchTab('dashboard');
    alert(`Xin chào Thầy (${user.name})! Hệ thống đã đăng nhập vào Bảng Quản Trị Giáo Viên.`);
  } else {
    switchRole('student');
    if (!isAppViewOpen) toggleAppView();
    switchTab('arena');
    if (user.assignedClassId) {
      const cls = MATH_DATA.classes.find(c => c.id === user.assignedClassId);
      alert(`🎉 Xin chào em ${user.name}!\nĐăng nhập thành công với tài khoản: @${user.username}\nEm đã được xếp vào lớp: "${cls ? cls.name : 'Lớp Toán của Thầy'}".\nChúc em học tập và rèn luyện tốt!`);
    } else {
      alert(`🎉 Xin chào em ${user.name}!\nĐăng nhập thành công với tài khoản: @${user.username} (Mã API: ${user.apiKey || 'TOAN-9PLUS-2026'}).\nTài khoản của em đang chờ Thầy xếp vào lớp học chính thức. Em có thể làm bài thi Đấu trường và học lý thuyết ngay!`);
    }
  }
}

function quickFillCredentials(u, p) {
  const userEl = document.getElementById('login-username');
  const passEl = document.getElementById('login-password');
  if (userEl) userEl.value = u;
  if (passEl) passEl.value = p;
  switchAuthMode('login');
  const loginSection = document.getElementById('dang-ky');
  if (loginSection) loginSection.scrollIntoView({ behavior: 'smooth' });
}

function quickLogin(role) {
  switchRole(role);
  if (!isAppViewOpen) {
    toggleAppView();
  }
  if (role === 'teacher') {
    switchTab('dashboard');
  } else if (role === 'student') {
    switchTab('midterm');
  } else {
    switchTab('theory');
  }
}

// ==========================================
// 1. CHUYỂN ĐỔI CHẾ ĐỘ NGƯỜI DÙNG (ROLE SWITCHER)
// ==========================================
function switchRole(role) {
  currentRole = role;
  
  const roles = ['guest', 'student', 'teacher'];
  roles.forEach(r => {
    const btn = document.getElementById(`role-${r}`);
    if (btn) {
      if (r === role) {
        btn.className = "px-3 py-1.5 rounded-lg transition font-medium flex items-center gap-1 bg-blue-600 text-white shadow-sm";
      } else {
        btn.className = "px-3 py-1.5 rounded-lg transition font-medium flex items-center gap-1 text-slate-300 hover:text-white";
      }
    }
  });

  const bannerText = document.getElementById('role-banner-text');
  const banner = document.getElementById('role-banner');
  const exerciseModeLabel = document.getElementById('exercise-mode-label');
  const arenaZaloStatus = document.getElementById('arena-zalo-status-label');

  if (role === 'guest') {
    if (banner) banner.className = "bg-blue-50 border-b border-blue-200 text-blue-900 px-4 py-2 text-xs sm:text-sm text-center font-medium";
    if (bannerText) bannerText.innerHTML = "Đang ở chế độ <strong>Cộng đồng miễn phí</strong>: Bạn có thể thi thử và xem điểm trực tiếp. Kết quả sẽ <strong>KHÔNG gửi về Zalo và Gmail</strong>.";
    if (exerciseModeLabel) exerciseModeLabel.innerText = "Chỉ hiện đáp số (Khóa lời giải)";
    if (arenaZaloStatus) {
      arenaZaloStatus.className = "font-bold text-xs sm:text-sm text-blue-300 flex items-center gap-1 justify-center sm:justify-end";
      arenaZaloStatus.innerHTML = '<i data-lucide="lock" class="w-4 h-4"></i> Khóa gửi Zalo & Gmail (Cộng đồng)';
    }
  } else if (role === 'student') {
    if (banner) banner.className = "bg-emerald-50 border-b border-emerald-200 text-emerald-900 px-4 py-2 text-xs sm:text-sm text-center font-medium";
    if (bannerText) bannerText.innerHTML = "Đang ở chế độ <strong>Học sinh trong lớp (Đã duyệt)</strong>: Tự động gửi kết quả tiến bộ về <strong>ZALO</strong> và gửi 2 bài tập vá lỗi về <strong>GMAIL</strong>!";
    if (exerciseModeLabel) exerciseModeLabel.innerText = "Đầy đủ lời giải chi tiết & mẹo làm bài";
    if (arenaZaloStatus) {
      arenaZaloStatus.className = "font-bold text-xs sm:text-sm text-emerald-300 flex items-center gap-1 justify-center sm:justify-end";
      arenaZaloStatus.innerHTML = '<i data-lucide="check-circle" class="w-4 h-4 text-emerald-400"></i> Đã kết nối Zalo & Gmail';
    }
  } else if (role === 'teacher') {
    if (banner) banner.className = "bg-amber-50 border-b border-amber-200 text-amber-900 px-4 py-2 text-xs sm:text-sm text-center font-medium";
    if (bannerText) bannerText.innerHTML = "Đang ở chế độ <strong>Thầy Giáo (Admin)</strong>: Thầy có toàn quyền quản lý lớp, duyệt học sinh và kiểm tra danh sách kết nối Zalo phụ huynh.";
    if (exerciseModeLabel) exerciseModeLabel.innerText = "Chế độ giáo viên (Toàn quyền)";
    if (arenaZaloStatus) {
      arenaZaloStatus.className = "font-bold text-xs sm:text-sm text-amber-300 flex items-center gap-1 justify-center sm:justify-end";
      arenaZaloStatus.innerHTML = '<i data-lucide="shield" class="w-4 h-4"></i> Quản trị viên đề thi';
    }
  }

  renderExercises();
  refreshIconsAndMath();
}

// ==========================================
// 2. CHUYỂN ĐỔI TAB CHỨC NĂNG
// ==========================================
function switchTab(tabId) {
  currentTab = tabId;
  const tabs = ['arena', 'review', 'gifted', 'lesson', 'assessment', 'dashboard'];
  
  tabs.forEach(t => {
    const view = document.getElementById(`view-${t}`);
    const btn = document.getElementById(`tab-btn-${t}`);
    
    if (view && btn) {
      if (t === tabId) {
        view.classList.remove('hidden');
        if (t === 'arena') {
          btn.className = "px-3 py-1.5 text-xs sm:text-sm font-bold rounded-lg bg-red-50 text-red-700 border border-red-200 flex items-center gap-1.5 whitespace-nowrap shrink-0";
        } else if (t === 'review') {
          btn.className = "px-3 py-1.5 text-xs sm:text-sm font-bold rounded-lg bg-blue-50 text-blue-700 border border-blue-200 flex items-center gap-1.5 whitespace-nowrap shrink-0";
        } else if (t === 'gifted') {
          btn.className = "px-3 py-1.5 text-xs sm:text-sm font-bold rounded-lg bg-amber-50 text-amber-800 border border-amber-300 flex items-center gap-1.5 whitespace-nowrap shrink-0";
        } else {
          btn.className = "px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg bg-blue-50 text-blue-700 border border-blue-200 flex items-center gap-1.5 whitespace-nowrap shrink-0";
        }
      } else {
        view.classList.add('hidden');
        btn.className = "px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg text-slate-600 hover:bg-slate-100 flex items-center gap-1.5 whitespace-nowrap shrink-0";
      }
    }
  });

  refreshIconsAndMath();
}

// ==========================================
// 3. MỤC MỚI: ÔN TẬP CUỐI CHƯƠNG, GIỮA KỲ, CUỐI KỲ
// ==========================================
function switchReviewSubTab(subTab) {
  currentReviewSubTab = subTab;
  
  const subTabs = ['chapter', 'midterm', 'finalterm'];
  subTabs.forEach(s => {
    const btn = document.getElementById(`subtab-btn-${s}`);
    if (btn) {
      if (s === subTab) {
        btn.className = "px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-white text-indigo-900 shadow-sm transition flex items-center gap-1.5";
      } else {
        btn.className = "px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-white/20 text-white hover:bg-white/30 transition flex items-center gap-1.5";
      }
    }
  });

  renderReviewContent();
}

function renderReviewContent() {
  const container = document.getElementById('review-content-area');
  if (!container) return;

  const data = MATH_DATA.reviewSections;

  if (currentReviewSubTab === 'chapter') {
    container.innerHTML = `
      <div class="space-y-6">
        <div class="flex items-center justify-between pb-2 border-b border-slate-200">
          <div>
            <h3 class="text-lg font-black text-slate-900">1. Ôn Tập Cuối Chương</h3>
            <p class="text-xs text-slate-500">Tổng hợp kiến thức sau khi học xong mỗi chương</p>
          </div>
          <span class="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-full">
            2 Chương Trọng Tâm
          </span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          ${data.chapterReviews.map(item => `
            <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4 hover:border-blue-400 transition">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-1.5 flex-wrap">
                  <span class="px-2.5 py-0.5 rounded-full ${item.badgeColor} text-white text-[10px] font-black uppercase">Khối ${item.grade}</span>
                  ${item.sourceBadge ? `<span class="px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 text-[10px] font-bold border border-blue-100">${item.sourceBadge}</span>` : ''}
                </div>
                <span class="text-xs text-slate-400 font-medium">${item.sectionsCount || 'Đề chuẩn'} • ${item.questionsCount ? item.questionsCount + ' bài tập' : item.duration}</span>
              </div>
              <h4 class="font-bold text-slate-900 text-base leading-snug">${item.title}</h4>
              <p class="text-xs text-slate-600">${item.summary}</p>
              
              <div class="p-3 bg-slate-50 rounded-xl space-y-1.5 text-xs text-slate-700">
                <strong class="text-blue-700 block">Sơ đồ chuyên đề ôn tập:</strong>
                ${item.topics.map(t => `<div class="math-content">• ${t}</div>`).join('')}
              </div>

              <div class="pt-2 flex justify-end">
                <button onclick="openExamViewerModal('${item.id}', 'chapter')" class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition flex items-center gap-1.5 shadow-sm">
                  <i data-lucide="play" class="w-4 h-4"></i> Bắt Đầu Làm Đề Cuối Chương
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  } else if (currentReviewSubTab === 'midterm') {
    container.innerHTML = `
      <div class="space-y-6">
        <div class="flex items-center justify-between pb-2 border-b border-slate-200">
          <div>
            <h3 class="text-lg font-black text-slate-900">2. Ôn Tập Giữa Học Kỳ (Chuẩn Ma Trận & 4 Dạng Mới)</h3>
            <p class="text-xs text-slate-500">Bộ đề hỗ trợ 4 phần: Trắc nghiệm, Đúng/Sai, Trả lời ngắn & Tự luận</p>
          </div>
          <span class="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full">
            Đề Giữa Kỳ 2 Mới Nhất
          </span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          ${data.midtermReviews.map(item => `
            <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4 hover:border-emerald-400 transition">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-1.5 flex-wrap">
                  <span class="px-2.5 py-0.5 rounded-full ${item.badgeColor} text-white text-[10px] font-black uppercase">Khối ${item.grade}</span>
                  ${item.sourceBadge ? `<span class="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 text-[10px] font-bold border border-emerald-200">${item.sourceBadge}</span>` : ''}
                </div>
                <span class="text-xs text-slate-400 font-mono font-bold">${item.duration} • ${item.examCount || '1 Đề'}</span>
              </div>
              <h4 class="font-bold text-slate-900 text-base leading-snug">${item.title}</h4>
              <p class="text-xs text-slate-600">${item.summary}</p>
              
              <div class="p-3 bg-emerald-50/60 rounded-xl space-y-1.5 text-xs text-slate-700">
                <strong class="text-emerald-800 block">Ma trận cấu trúc bài thi:</strong>
                ${item.topics.map(t => `<div class="math-content">• ${t}</div>`).join('')}
              </div>

              <div class="pt-2 flex justify-end">
                <button onclick="openExamViewerModal('${item.id}', 'midterm')" class="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition flex items-center gap-1.5 shadow-sm">
                  <i data-lucide="timer" class="w-4 h-4"></i> Bấm Giờ Thi Thử Giữa Kỳ
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  } else if (currentReviewSubTab === 'finalterm') {
    container.innerHTML = `
      <div class="space-y-6">
        <div class="flex items-center justify-between pb-2 border-b border-slate-200">
          <div>
            <h3 class="text-lg font-black text-slate-900">3. Chiến Dịch Tổng Ôn Cuối Kỳ & Thi Tuyển Sinh</h3>
            <p class="text-xs text-slate-500">Tổng ôn toàn bộ kiến thức cả năm, kỹ thuật giải bài điểm 10</p>
          </div>
          <span class="px-3 py-1 bg-rose-100 text-rose-800 text-xs font-bold rounded-full">
            Mục Tiêu 9+ và 10
          </span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          ${data.finaltermReviews.map(item => `
            <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4 hover:border-rose-400 transition">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-1.5 flex-wrap">
                  <span class="px-2.5 py-0.5 rounded-full ${item.badgeColor} text-white text-[10px] font-black uppercase">Khối ${item.grade}</span>
                  ${item.sourceBadge ? `<span class="px-2 py-0.5 rounded-md bg-rose-50 text-rose-800 text-[10px] font-bold border border-rose-200">${item.sourceBadge}</span>` : ''}
                </div>
                <span class="text-xs text-slate-400 font-mono font-bold">${item.duration} • ${item.examCount || '1 Đề'}</span>
              </div>
              <h4 class="font-bold text-slate-900 text-base leading-snug">${item.title}</h4>
              <p class="text-xs text-slate-600">${item.summary}</p>
              
              <div class="p-3 bg-rose-50/60 rounded-xl space-y-1.5 text-xs text-slate-700">
                <strong class="text-rose-800 block">Nội dung chiến dịch:</strong>
                ${item.topics.map(t => `<div class="math-content">• ${t}</div>`).join('')}
              </div>

              <div class="pt-2 flex justify-end">
                <button onclick="openExamViewerModal('${item.id}', 'finalterm')" class="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold rounded-xl transition flex items-center gap-1.5 shadow-sm">
                  <i data-lucide="flame" class="w-4 h-4"></i> Tham Gia Tổng Ôn Cuối Kỳ
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  refreshIconsAndMath();
}

// ==========================================
// 4. ĐẤU TRƯỜNG ONLINE & GỬI ZALO / GMAIL
// ==========================================
let currentArenaExamId = "exam-hn-2026";

function renderArenaExamSelector() {
  const select = document.getElementById('arena-exam-selector');
  if (!select || !MATH_DATA.arenaExams) return;

  select.innerHTML = MATH_DATA.arenaExams.map(ex => `
    <option value="${ex.id}" ${ex.id === currentArenaExamId ? 'selected' : ''}>
      ${ex.title} (${ex.durationMinutes || 45} phút)
    </option>
  `).join('');
}

function changeArenaExam(examId) {
  currentArenaExamId = examId;
  userArenaAnswers = {};
  renderArenaExam();
  refreshIconsAndMath();
}

function openArenaUploadModal() {
  const modal = document.getElementById('modal-upload-arena-exam');
  if (modal) modal.classList.remove('hidden');
  refreshIconsAndMath();
}

function closeArenaUploadModal() {
  const modal = document.getElementById('modal-upload-arena-exam');
  if (modal) modal.classList.add('hidden');
}

function fillSampleArenaExam() {
  document.getElementById('arena-upload-title').value = "Đề Khảo Sát Toán 9 - Sở GD&ĐT Nam Định (Mới Nhất 2026)";
  document.getElementById('arena-upload-grade').value = "9";
  document.getElementById('arena-upload-duration').value = "60";
  document.getElementById('arena-upload-badge').value = "Sở Nam Định • Mới Nhất";
  document.getElementById('arena-upload-questions-text').value = 
`Câu 1: Rút gọn biểu thức $A = \\dfrac{2\\sqrt{x}}{\\sqrt{x}+3} + \\dfrac{\\sqrt{x}+1}{\\sqrt{x}-3} - \\dfrac{3-11\\sqrt{x}}{9-x}$ với $x \\ge 0, x \\ne 9$.
A. $A = \\dfrac{\\sqrt{x}-1}{\\sqrt{x}+3}$
B. $A = \\dfrac{\\sqrt{x}+1}{\\sqrt{x}+3}$
C. $A = \\dfrac{3}{\\sqrt{x}+3}$
D. $A = \\dfrac{\\sqrt{x}}{\\sqrt{x}-3}$

Câu 2: Cho phương trình $x^2 - 2(m-1)x + 2m - 5 = 0$. Tìm $m$ để phương trình có hai nghiệm phân biệt $x_1, x_2$ thỏa mãn $x_1^2 + x_2^2 = 10$.
A. $m = 2$ hoặc $m = -1$
B. $m = 3$ hoặc $m = -2$
C. $m = 1$ hoặc $m = 4$
D. $m = -1$ hoặc $m = 3$

Câu 3: Cho $a, b, c > 0$ và $a+b+c=3$. Tìm giá trị nhỏ nhất của $P = \\dfrac{a^2}{b+c} + \\dfrac{b^2}{c+a} + \\dfrac{c^2}{a+b}$.
A. $\\min P = \\dfrac{3}{2}$
B. $\\min P = 3$
C. $\\min P = 1$
D. $\\min P = \\dfrac{9}{2}$`;
  document.getElementById('arena-upload-solution').value = 
`Barem & Hướng dẫn giải chi tiết của Thầy:
- Câu 1: Quy đồng mẫu thức chung $(\\sqrt{x}+3)(\\sqrt{x}-3)$, kết quả $A = \\dfrac{\\sqrt{x}-1}{\\sqrt{x}+3}$ (Đáp án A).
- Câu 2: $\\Delta' = (m-1)^2 - (2m-5) = m^2 - 4m + 6 > 0$ với mọi $m$. Theo Vi-ét $S = 2(m-1), P = 2m-5$. Ta có $S^2 - 2P = 10 \\Rightarrow 4(m-1)^2 - 2(2m-5) = 10 \\Rightarrow m = 2$ hoặc $m = -1$ (Đáp án A).
- Câu 3: Áp dụng Cauchy-Schwarz dạng Engel: $P \\ge \\dfrac{(a+b+c)^2}{2(a+b+c)} = \\dfrac{a+b+c}{2} = \\dfrac{3}{2}$ khi $a=b=c=1$ (Đáp án A).`;
  document.getElementById('arena-upload-youtube').value = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  previewArenaYoutubeVideo();
}

function previewArenaYoutubeVideo() {
  const url = document.getElementById('arena-upload-youtube').value.trim();
  const box = document.getElementById('arena-youtube-preview-box');
  const iframe = document.getElementById('arena-youtube-iframe');
  if (!box || !iframe) return;

  const embedUrl = getYoutubeEmbedUrl(url);
  if (embedUrl) {
    iframe.src = embedUrl;
    box.classList.remove('hidden');
  } else {
    iframe.src = "";
    box.classList.add('hidden');
  }
}

function executeUploadArenaExam(e) {
  e.preventDefault();
  const title = document.getElementById('arena-upload-title').value.trim();
  const grade = parseInt(document.getElementById('arena-upload-grade').value);
  const duration = parseInt(document.getElementById('arena-upload-duration').value);
  const badge = document.getElementById('arena-upload-badge').value.trim() || "Đề Mới Cập Nhật";
  const solution = document.getElementById('arena-upload-solution').value.trim();
  const youtubeUrl = document.getElementById('arena-upload-youtube').value.trim();

  const newExamId = 'exam-arena-' + Date.now();
  const newExam = {
    id: newExamId,
    title: title,
    grade: grade,
    type: `Toán ${grade} - Đấu Trường Online`,
    durationMinutes: duration,
    participantsCount: 1,
    badge: badge,
    badgeColor: "bg-red-500",
    youtubeUrl: youtubeUrl,
    teacherSolution: solution,
    questions: [
      {
        id: `aq_${Date.now()}_1`,
        question: "Cho biểu thức $A = \\dfrac{2\\sqrt{x}}{\\sqrt{x}+3} + \\dfrac{\\sqrt{x}+1}{\\sqrt{x}-3} - \\dfrac{3-11\\sqrt{x}}{9-x}$ với $x \\ge 0, x \\ne 9$. Rút gọn biểu thức $A$.",
        options: [
          { key: "A", text: "$A = \\dfrac{\\sqrt{x}-1}{\\sqrt{x}+3}$", isCorrect: true, errorTag: null, errorMsg: "Chính xác! Em đã đổi dấu mẫu $9-x$ chuẩn xác." },
          { key: "B", text: "$A = \\dfrac{\\sqrt{x}+1}{\\sqrt{x}+3}$", isCorrect: false, errorTag: "ERR_SIGN", errorMsg: "Sai dấu khi trừ biểu thức phân số!" },
          { key: "C", text: "$A = \\dfrac{3}{\\sqrt{x}+3}$", isCorrect: false, errorTag: "ERR_CALC", errorMsg: "Nhầm lẫn khi thu gọn đa thức tử số!" },
          { key: "D", text: "$A = \\dfrac{\\sqrt{x}}{\\sqrt{x}-3}$", isCorrect: false, errorTag: "ERR_DOMAIN", errorMsg: "Quên kết hợp mẫu số chung!" }
        ]
      },
      {
        id: `aq_${Date.now()}_2`,
        question: "Cho phương trình $x^2 - 2(m-1)x + 2m - 5 = 0$. Tìm $m$ để phương trình có hai nghiệm $x_1, x_2$ thỏa mãn $x_1^2 + x_2^2 = 10$.",
        options: [
          { key: "A", text: "$m = 2$ hoặc $m = -1$", isCorrect: true, errorTag: null, errorMsg: "Tuyệt vời! Em vận dụng Vi-ét $S^2 - 2P = 10$ rất thành thạo." },
          { key: "B", text: "$m = 3$ hoặc $m = -2$", isCorrect: false, errorTag: "ERR_VIETE", errorMsg: "Sai công thức biến đổi tổng bình phương nghiệm!" },
          { key: "C", text: "$m = 1$", isCorrect: false, errorTag: "ERR_MISSED_ROOT", errorMsg: "Sót nghiệm $m = -1$ của phương trình bậc hai!" },
          { key: "D", text: "$m = -1$", isCorrect: false, errorTag: "ERR_MISSED_ROOT", errorMsg: "Sót nghiệm $m = 2$!" }
        ]
      },
      {
        id: `aq_${Date.now()}_3`,
        question: "Cho $a, b, c > 0$ và $a+b+c=3$. Tìm giá trị nhỏ nhất của $P = \\dfrac{a^2}{b+c} + \\dfrac{b^2}{c+a} + \\dfrac{c^2}{a+b}$.",
        options: [
          { key: "A", text: "$\\min P = \\dfrac{3}{2}$", isCorrect: true, errorTag: null, errorMsg: "Đỉnh cao! Bất đẳng thức Cauchy-Schwarz dạng Engel xuất sắc." },
          { key: "B", text: "$\\min P = 3$", isCorrect: false, errorTag: "ERR_INEQ", errorMsg: "Chưa rút gọn mẫu số $2(a+b+c)$!" },
          { key: "C", text: "$\\min P = 1$", isCorrect: false, errorTag: "ERR_INEQ", errorMsg: "Điểm rơi không thỏa mãn $a=b=c=1$!" },
          { key: "D", text: "$\\min P = \\dfrac{9}{2}$", isCorrect: false, errorTag: "ERR_CALC", errorMsg: "Tính toán nhầm lẫn ở bước thế số!" }
        ]
      }
    ]
  };

  MATH_DATA.arenaExams.unshift(newExam);
  currentArenaExamId = newExamId;
  closeArenaUploadModal();
  renderArenaExamSelector();
  renderArenaExam();
  refreshIconsAndMath();
  alert(`🎉 ĐÃ ĐĂNG ĐỀ THI LÊN ĐẤU TRƯỜNG THÀNH CÔNG!\n\nĐề thi "${title}" đã được kích hoạt trực tiếp trên hệ thống Đấu Trường Online.`);
}

function renderArenaExam() {
  const container = document.getElementById('arena-questions-container');
  if (!container || !MATH_DATA.arenaExams) return;

  const exam = MATH_DATA.arenaExams.find(e => e.id === currentArenaExamId) || MATH_DATA.arenaExams[0];
  if (!exam) return;

  const badgeEl = document.getElementById('arena-exam-badge');
  if (badgeEl) badgeEl.innerText = exam.badge || "Đang mở thi";

  container.innerHTML = exam.questions.map((q, idx) => `
    <div class="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-3" id="arena-card-${q.id}">
      <div class="flex items-center justify-between">
        <span class="px-2.5 py-0.5 bg-indigo-100 text-indigo-800 text-xs font-bold rounded-md">Câu ${idx + 1}</span>
        <span class="text-xs text-slate-400 font-mono">${(10 / exam.questions.length).toFixed(2)} điểm</span>
      </div>

      <div class="text-sm font-semibold text-slate-800 math-content">
        ${q.question}
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
        ${q.options.map(opt => `
          <button onclick="selectArenaOption('${q.id}', '${opt.key}')" 
            id="arena-btn-${q.id}-${opt.key}"
            class="arena-opt-btn text-left p-3.5 border rounded-xl hover:bg-white bg-slate-100/70 border-slate-200 text-slate-800 text-xs sm:text-sm transition flex items-center">
            <span class="font-bold text-slate-500 mr-2 w-5">${opt.key}.</span>
            <span class="math-content">${opt.text}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function selectArenaOption(questionId, selectedKey) {
  userArenaAnswers[questionId] = selectedKey;

  const card = document.getElementById(`arena-card-${questionId}`);
  if (!card) return;

  const buttons = card.querySelectorAll('.arena-opt-btn');
  buttons.forEach(btn => {
    btn.className = "arena-opt-btn text-left p-3.5 border rounded-xl hover:bg-white bg-slate-100/70 border-slate-200 text-slate-800 text-xs sm:text-sm transition flex items-center";
  });

  const selectedBtn = document.getElementById(`arena-btn-${questionId}-${selectedKey}`);
  if (selectedBtn) {
    selectedBtn.className = "arena-opt-btn text-left p-3.5 border-2 border-indigo-600 bg-indigo-50 text-indigo-900 font-bold rounded-xl text-xs sm:text-sm transition flex items-center shadow-sm";
  }
}

function submitArenaExam() {
  const exam = MATH_DATA.arenaExams[0];
  const answeredCount = Object.keys(userArenaAnswers).length;

  if (answeredCount === 0) {
    alert("Vui lòng chọn đáp án trước khi bấm nộp bài!");
    return;
  }

  let correctCount = 0;
  let wrongQuestions = [];

  exam.questions.forEach(q => {
    const selectedKey = userArenaAnswers[q.id];
    const correctOpt = q.options.find(o => o.isCorrect);

    if (selectedKey === correctOpt.key) {
      correctCount++;
    } else {
      const chosenOpt = q.options.find(o => o.key === selectedKey);
      wrongQuestions.push({
        question: q,
        chosenKey: selectedKey || "Chưa chọn",
        chosenErrorMsg: chosenOpt ? chosenOpt.errorMsg : "Chưa chọn đáp án",
        correctKey: correctOpt.key,
        remedialProblems: q.remedialProblems
      });
    }
  });

  const rawScore = (correctCount / exam.questions.length) * 10;
  const finalScore = (Math.round(rawScore * 10) / 10).toFixed(1);

  lastArenaSubmission = {
    score: finalScore,
    correctCount: correctCount,
    totalCount: exam.questions.length,
    wrongQuestions: wrongQuestions,
    submittedAt: new Date().toLocaleTimeString('vi-VN') + " ngày " + new Date().toLocaleDateString('vi-VN')
  };

  const resultBox = document.getElementById('arena-result-box');
  resultBox.classList.remove('hidden');

  const isEnrolled = (currentRole === 'student' || currentRole === 'teacher');
  const parentZalo = "0912.888.999 (Bác Nguyễn Văn Hùng)";
  const studentEmail = "nguyenvanan.toan9@gmail.com";

  resultBox.innerHTML = `
    <div class="p-6 rounded-3xl border ${isEnrolled ? 'border-emerald-200 bg-emerald-50/70' : 'border-amber-200 bg-amber-50/70'} space-y-4">
      
      <div class="flex flex-wrap items-center justify-between gap-4 border-b ${isEnrolled ? 'border-emerald-200' : 'border-amber-200'} pb-4">
        <div>
          <span class="text-xs font-bold uppercase tracking-wider ${isEnrolled ? 'text-emerald-700' : 'text-amber-700'}">
            Kết quả Đấu Trường Online
          </span>
          <h4 class="text-xl sm:text-2xl font-black text-slate-900 mt-0.5">
            ${isEnrolled ? 'Chúc mừng bạn đã hoàn thành bài thi!' : 'Đã ghi nhận kết quả bài thi!'}
          </h4>
          <p class="text-xs text-slate-500">Đúng: <strong>${correctCount} / ${exam.questions.length} câu</strong> • Số câu làm sai: <strong class="text-red-600">${wrongQuestions.length} câu</strong></p>
        </div>

        <div class="text-right">
          <div class="text-3xl sm:text-4xl font-black ${isEnrolled ? 'text-emerald-600' : 'text-amber-600'}">
            ${finalScore} <span class="text-xs text-slate-500 font-normal">/ 10.0</span>
          </div>
          <span class="text-xs font-semibold text-slate-500">Xếp hạng: Top 15%</span>
        </div>
      </div>

      <!-- KHU VỰC THÔNG BÁO ZALO & GMAIL THEO VAI TRÒ -->
      ${isEnrolled ? `
        <div class="space-y-3">
          <!-- 1. Báo về Zalo (MỚI) -->
          <div class="p-4 rounded-2xl bg-white border border-blue-200 shadow-sm space-y-2">
            <div class="flex items-start gap-3">
              <div class="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
                <i data-lucide="message-square" class="w-5 h-5"></i>
              </div>
              <div class="flex-1">
                <div class="flex items-center justify-between">
                  <h5 class="font-bold text-sm text-blue-900">
                    Đã gửi báo cáo kết quả về ZALO thành công!
                  </h5>
                  <span class="text-[10px] bg-blue-100 text-blue-800 font-bold px-2 py-0.5 rounded-full">Tức thì</span>
                </div>
                <p class="text-xs text-slate-600 mt-0.5">
                  Tin nhắn đã chuyển đến số Zalo Phụ huynh: <strong class="font-mono text-blue-700">${parentZalo}</strong>. 
                  Có thể xem ngay điểm số, nhận xét của Thầy và biểu đồ tiến bộ của con.
                </p>
              </div>
            </div>

            <div class="pt-2 flex justify-end">
              <button onclick="openZaloModal()" class="px-4 py-2 bg-[#0068ff] hover:bg-blue-600 text-white font-bold text-xs rounded-xl shadow-sm flex items-center gap-1.5 transition">
                <i data-lucide="message-circle" class="w-4 h-4"></i> Xem tin nhắn Zalo gửi thông báo
              </button>
            </div>
          </div>

          <!-- 2. Báo về Gmail học sinh kèm 2 bài tập vá lỗi -->
          <div class="p-4 rounded-2xl bg-white border border-emerald-200 shadow-sm space-y-2">
            <div class="flex items-start gap-3">
              <div class="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                <i data-lucide="mail-check" class="w-5 h-5"></i>
              </div>
              <div class="flex-1">
                <h5 class="font-bold text-sm text-emerald-900">
                  Đã gửi chi tiết câu sai & 2 bài tập vá lỗi về Gmail học sinh!
                </h5>
                <p class="text-xs text-slate-600 mt-0.5">
                  Đã gửi tới: <strong class="font-mono text-emerald-700">${studentEmail}</strong>. 
                  Em mở hộp thư Gmail để tự luyện ngay 2 bài tập tương tự vá lỗ hổng kiến thức.
                </p>
              </div>
            </div>

            <div class="pt-2 flex justify-end">
              <button onclick="openGmailModal()" class="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-sm flex items-center gap-1.5 transition">
                <i data-lucide="external-link" class="w-4 h-4"></i> Xem trước Email gửi về Gmail của em
              </button>
            </div>
          </div>
        </div>
      ` : `
        <div class="p-4 rounded-2xl bg-white border border-amber-200 shadow-sm space-y-3">
          <div class="flex items-start gap-3">
            <div class="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0">
              <i data-lucide="alert-triangle" class="w-5 h-5"></i>
            </div>
            <div>
              <h5 class="font-bold text-sm text-amber-900">
                ⚠️ Chế độ Cộng Đồng Tự Do: Không gửi Zalo & Gmail!
              </h5>
              <p class="text-xs text-slate-600 mt-0.5">
                Bạn đã làm sai <strong>${wrongQuestions.length} câu</strong>. Ở chế độ miễn phí, hệ thống <strong>KHÔNG gửi báo cáo điểm về Zalo và KHÔNG gửi 2 bài tập vá lỗi về Gmail</strong>. 
                Hãy đăng ký vào lớp học của Thầy để kết nối thông báo tự động qua Zalo!
              </p>
            </div>
          </div>

          <div class="pt-2 flex justify-end">
            <button onclick="scrollToRegister()" class="px-5 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-xs rounded-xl shadow-md hover:opacity-95 transition">
              👉 Đăng Ký Vào Lớp Thầy Để Kết Nối Báo Điểm Qua Zalo
            </button>
          </div>
        </div>
      `}

    </div>
  `;

  resultBox.scrollIntoView({ behavior: 'smooth' });
  refreshIconsAndMath();
}

// ==========================================
// MÔ PHỎNG TIN NHẮN ZALO PHỤ HUYNH
// ==========================================
function openZaloModal() {
  if (!lastArenaSubmission) return;
  const modal = document.getElementById('modal-zalo-preview');
  const body = document.getElementById('zalo-message-body');

  body.innerHTML = `
    <p>Kính gửi: <strong>Bác Nguyễn Văn Hùng</strong> (Phụ huynh em <strong>Nguyễn Văn An</strong> - Lớp Toán 9A Thầy Giáo),</p>
    
    <div class="p-2.5 bg-blue-50/80 rounded-xl border border-blue-100 space-y-1">
      <p>📌 <strong>Bài thi:</strong> Đề Khảo Sát Toán 9 - Sở GD&ĐT Hà Nội</p>
      <p>🎯 <strong>Điểm số đạt được:</strong> <span class="font-black text-emerald-600 text-sm">${lastArenaSubmission.score} / 10.0</span></p>
      <p>📊 <strong>Xếp loại:</strong> ${lastArenaSubmission.score >= 8.5 ? 'Xuất sắc' : lastArenaSubmission.score >= 7.0 ? 'Khá' : 'Cần cố gắng thêm'}</p>
      <p>⏰ <strong>Thời gian nộp bài:</strong> ${lastArenaSubmission.submittedAt}</p>
    </div>

    <p class="leading-relaxed">
      <strong>Nhận xét của Thầy:</strong> "Cháu An làm bài rất tập trung, tư duy nhanh và chặt chẽ. ${lastArenaSubmission.wrongQuestions.length > 0 ? `Cháu có ${lastArenaSubmission.wrongQuestions.length} câu làm chưa chuẩn, Thầy đã gửi phân tích nguyên nhân và 2 bài tập tương tự về Gmail cho cháu tự luyện thêm.` : 'Cháu làm đúng 100% các câu hỏi khó của đề thi. Bác yên tâm nhé!'}."
    </p>

    <p class="text-[11px] text-slate-500 italic">
      Chúc Bác và Gia đình dồi dào sức khỏe, cùng Thầy đồng hành giúp cháu tự tin bước vào kỳ thi vào lớp 10 sắp tới!
    </p>
  `;

  modal.classList.remove('hidden');
  refreshIconsAndMath();
}

function closeZaloModal() {
  document.getElementById('modal-zalo-preview').classList.add('hidden');
}

// ==========================================
// MÔ PHỎNG EMAIL GMAIL
// ==========================================
function openGmailModal() {
  if (!lastArenaSubmission) return;
  const modal = document.getElementById('modal-gmail-preview');
  const body = document.getElementById('gmail-body-content');
  const recipient = document.getElementById('gmail-recipient-preview');

  recipient.innerText = "nguyenvanan.toan9@gmail.com";

  body.innerHTML = `
    <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
      <p class="font-bold text-slate-800">Chào em Nguyễn Văn An,</p>
      <p class="text-xs sm:text-sm text-slate-600">
        Thầy gửi em kết quả làm bài tại <strong>Đấu Trường Online - Đề Khảo Sát Toán 9 Sở GD&ĐT Hà Nội</strong> (Lúc ${lastArenaSubmission.submittedAt}).
      </p>
      <div class="flex items-center gap-4 pt-1 font-bold text-xs sm:text-sm">
        <span class="text-emerald-700">Điểm số: ${lastArenaSubmission.score} / 10.0</span>
        <span class="text-slate-500">•</span>
        <span class="text-red-600">Số câu sai: ${lastArenaSubmission.wrongQuestions.length} câu</span>
      </div>
    </div>

    <div class="space-y-4">
      <h4 class="font-black text-sm uppercase tracking-wider text-red-700 flex items-center gap-1.5">
        <i data-lucide="alert-octagon" class="w-4 h-4"></i> Chi Tiết Câu Sai & 2 Bài Tập Vá Lỗ Hổng:
      </h4>

      ${lastArenaSubmission.wrongQuestions.length === 0 ? `
        <div class="p-4 bg-emerald-50 rounded-xl text-emerald-800 text-xs font-bold">
          Xuất sắc! Em không làm sai câu nào trong đề thi này. Hãy tiếp tục phát huy ở đề thi tiếp theo!
        </div>
      ` : lastArenaSubmission.wrongQuestions.map((wq, i) => `
        <div class="p-4 rounded-2xl border border-red-200 bg-red-50/40 space-y-3">
          <div>
            <span class="text-[10px] font-black uppercase px-2 py-0.5 bg-red-100 text-red-800 rounded">Câu sai ${i + 1}</span>
            <div class="text-xs sm:text-sm font-semibold text-slate-800 mt-1.5 math-content">
              ${wq.question.question}
            </div>
            <div class="mt-2 text-xs text-red-700 font-medium bg-white p-2.5 rounded-lg border border-red-200">
              ❌ <strong>Lỗi của em:</strong> ${wq.chosenErrorMsg} (Em chọn ${wq.chosenKey} • Đáp án đúng là <strong>${wq.correctKey}</strong>)
            </div>
          </div>

          <div class="pt-2 border-t border-red-200/60 space-y-2.5">
            <div class="text-xs font-bold text-indigo-900 uppercase flex items-center gap-1">
              <i data-lucide="refresh-cw" class="w-3.5 h-3.5 text-indigo-600"></i>
              2 Bài tập Thầy giao để em rèn luyện bù lỗi sai này:
            </div>

            ${wq.remedialProblems.map((rp, rIdx) => `
              <div class="p-3 bg-white rounded-xl border border-indigo-100 text-xs space-y-1">
                <span class="font-bold text-indigo-700 block">${rIdx + 1}. ${rp.title}</span>
                <p class="text-slate-800 math-content">${rp.question}</p>
                <p class="text-slate-500 italic mt-1">Gợi ý: ${rp.hint}</p>
                <div class="text-emerald-700 font-bold mt-1">Đáp án kiểm tra: ${rp.answer}</div>
              </div>
            `).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  `;

  modal.classList.remove('hidden');
  refreshIconsAndMath();
}

function closeGmailModal() {
  document.getElementById('modal-gmail-preview').classList.add('hidden');
}

function renderArenaLeaderboard() {
  const tbody = document.getElementById('arena-leaderboard-body');
  if (!tbody) return;

  tbody.innerHTML = MATH_DATA.arenaLeaderboard.map(item => `
    <tr class="hover:bg-slate-50 transition">
      <td class="py-3 px-4 text-center">
        <span class="w-6 h-6 rounded-full inline-flex items-center justify-center font-black text-xs ${item.rank === 1 ? 'bg-amber-400 text-slate-950' : item.rank === 2 ? 'bg-slate-300 text-slate-800' : item.rank === 3 ? 'bg-amber-700 text-white' : 'bg-slate-100 text-slate-600'}">
          ${item.rank}
        </span>
      </td>
      <td class="py-3 px-4 font-bold text-slate-900">${item.name}</td>
      <td class="py-3 px-4 text-slate-600 text-xs">${item.school}</td>
      <td class="py-3 px-4 text-center text-xs font-mono text-slate-500">${item.time}</td>
      <td class="py-3 px-4 text-right font-black text-indigo-600">${item.score.toFixed(1)}</td>
    </tr>
  `).join('');
}

// ==========================================
// 5. LÝ THUYẾT & DẠNG TOÁN
// ==========================================
function renderTheory() {
  const container = document.getElementById('theory-content');
  if (!container) return;
  const theory = MATH_DATA.currentLesson.theory;
  
  container.innerHTML = `
    <div class="p-3.5 bg-blue-50/70 border-l-4 border-blue-600 rounded-r-xl text-sm text-blue-900 mb-4 font-medium">
      ${theory.summary}
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      ${theory.sections.map(sec => `
        <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-blue-300 transition">
          <h4 class="font-bold text-slate-800 text-sm mb-2 text-blue-700">${sec.title}</h4>
          <div class="text-xs sm:text-sm text-slate-600 whitespace-pre-line leading-relaxed">${sec.content}</div>
        </div>
      `).join('')}
    </div>
  `;
}

let currentLessonTopicTab = 0; // 0: Dạng 1, 1: Dạng 2, 2: Dạng 3, 'all': Tất cả 3 dạng

function renderTopicTabs() {
  const container = document.getElementById('topic-tab-container');
  if (!container) return;
  const topics = (MATH_DATA.currentLesson && Array.isArray(MATH_DATA.currentLesson.topics)) 
    ? MATH_DATA.currentLesson.topics 
    : [];
  
  if (!topics.length) {
    container.innerHTML = '';
    return;
  }

  const tabsHtml = topics.map((t, idx) => {
    const isActive = currentLessonTopicTab === idx;
    const activeCls = "bg-white text-blue-700 shadow-sm border-blue-300 font-extrabold";
    const normalCls = "text-slate-600 hover:text-slate-900 border-transparent font-bold";
    const dotColors = ["bg-emerald-500", "bg-blue-500", "bg-purple-500"];
    const exCount = (t.exercises && t.exercises.length) ? t.exercises.length : 10;
    
    return `
      <button type="button" onclick="switchLessonTopicTab(${idx})"
        class="px-3 py-1.5 rounded-lg text-xs border transition flex items-center gap-1.5 ${isActive ? activeCls : normalCls}">
        <span class="w-2 h-2 rounded-full ${dotColors[idx % dotColors.length]}"></span>
        <span>Dạng ${idx + 1} (${exCount} bài)</span>
      </button>
    `;
  }).join('');

  const isAllActive = currentLessonTopicTab === 'all';
  const totalExercises = topics.reduce((sum, t) => sum + (t.exercises ? t.exercises.length : 0), 0);
  const allTabHtml = `
    <button type="button" onclick="switchLessonTopicTab('all')"
      class="px-3 py-1.5 rounded-lg text-xs border transition flex items-center gap-1.5 font-extrabold ${isAllActive ? 'bg-indigo-600 text-white shadow-sm border-indigo-600' : 'text-slate-600 hover:text-slate-900 border-transparent'}">
      <i data-lucide="layers" class="w-3.5 h-3.5"></i>
      <span>Tất cả 3 Dạng (${totalExercises} bài)</span>
    </button>
  `;

  container.innerHTML = tabsHtml + allTabHtml;
}

function switchLessonTopicTab(targetTab) {
  currentLessonTopicTab = targetTab;
  renderTopicTabs();
  renderTopicMethod();
  renderExamples();
  renderExercises();
  refreshIconsAndMath();
}

function renderTopicMethod() {
  const container = document.getElementById('topic-method-box');
  if (!container) return;
  const topics = (MATH_DATA.currentLesson && Array.isArray(MATH_DATA.currentLesson.topics)) 
    ? MATH_DATA.currentLesson.topics 
    : [];

  if (!topics.length) {
    container.innerHTML = `
      <div class="text-slate-600 italic">Chọn một bài học từ danh mục để xem phương pháp giải và các dạng toán rèn luyện.</div>
    `;
    return;
  }

  if (currentLessonTopicTab === 'all') {
    container.innerHTML = `
      <div class="flex items-center gap-2 font-black text-indigo-950 text-sm">
        <i data-lucide="sparkles" class="w-4 h-4 text-indigo-600"></i>
        <span>Tổng Quan 3 Dạng Toán Trọng Tâm (30 Bài Toán Phân Tầng):</span>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 mt-2">
        ${topics.map((t, idx) => `
          <div class="p-2.5 bg-white rounded-lg border border-indigo-100 text-xs">
            <div class="font-bold text-indigo-900 mb-1 flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full ${idx === 0 ? 'bg-emerald-500' : idx === 1 ? 'bg-blue-500' : 'bg-purple-500'}"></span>
              <span>${t.name || ('Dạng ' + (idx + 1))}</span>
            </div>
            <div class="text-[11px] text-slate-500 line-clamp-2">
              ${(t.method && t.method[0]) ? t.method[0] : 'Phương pháp giải chi tiết từng bước.'}
            </div>
          </div>
        `).join('')}
      </div>
    `;
    return;
  }

  const activeTopic = topics[currentLessonTopicTab] || topics[0];
  const methodSteps = activeTopic.method || [
    "Bước 1: Xác định dạng toán, tìm điều kiện xác định và công thức liên quan.",
    "Bước 2: Thực hiện các phép biến đổi đại số / lập luận hình học theo từng bước.",
    "Bước 3: Đối chiếu với điều kiện ban đầu, kiểm tra tính hợp lý và kết luận đáp số."
  ];

  container.innerHTML = `
    <div class="flex flex-wrap items-center justify-between gap-2 pb-1.5 border-b border-blue-200/60">
      <div class="flex items-center gap-2">
        <span class="w-2.5 h-2.5 rounded-full ${currentLessonTopicTab === 0 ? 'bg-emerald-500' : currentLessonTopicTab === 1 ? 'bg-blue-500' : 'bg-purple-500'}"></span>
        <span class="font-black text-blue-950 text-xs sm:text-sm uppercase tracking-wide">
          ${activeTopic.name || ('Dạng ' + (currentLessonTopicTab + 1))}
        </span>
      </div>
      <span class="text-[11px] font-bold px-2 py-0.5 rounded-full ${activeTopic.badgeClass || 'bg-blue-100 text-blue-700'}">
        ${activeTopic.badge || 'Trọng tâm'}
      </span>
    </div>
    <div class="space-y-1 pt-1 text-slate-700">
      ${methodSteps.map(step => `
        <div class="flex items-start gap-2">
          <i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5"></i>
          <span class="leading-relaxed font-medium">${step}</span>
        </div>
      `).join('')}
    </div>
  `;
}

function renderExamples() {
  const container = document.getElementById('examples-container');
  const badgeEl = document.getElementById('examples-count-badge');
  if (!container) return;

  const topics = (MATH_DATA.currentLesson && Array.isArray(MATH_DATA.currentLesson.topics)) 
    ? MATH_DATA.currentLesson.topics 
    : [];

  if (!topics.length) {
    container.innerHTML = '<div class="text-xs text-slate-500 italic p-3">Chưa có ví dụ mẫu cho bài học này.</div>';
    if (badgeEl) badgeEl.innerText = "0 Ví dụ";
    return;
  }

  let examplesToRender = [];
  if (currentLessonTopicTab === 'all') {
    // Thu thập ví dụ từ cả 3 dạng
    topics.forEach((t, tIdx) => {
      if (t.examples && t.examples.length) {
        t.examples.forEach((ex, eIdx) => {
          examplesToRender.push({
            ...ex,
            topicName: t.name || `Dạng ${tIdx + 1}`,
            displayIdx: `${tIdx + 1}.${eIdx + 1}`
          });
        });
      }
    });
    if (badgeEl) badgeEl.innerText = `${examplesToRender.length} Ví dụ (Tất cả 3 Dạng)`;
  } else {
    const activeTopic = topics[currentLessonTopicTab] || topics[0];
    const rawExamples = activeTopic.examples || [];
    examplesToRender = rawExamples.map((ex, idx) => ({
      ...ex,
      topicName: activeTopic.name || `Dạng ${currentLessonTopicTab + 1}`,
      displayIdx: `${idx + 1}/3`
    }));
    if (badgeEl) badgeEl.innerText = `${examplesToRender.length} Ví dụ`;
  }

  container.innerHTML = examplesToRender.map(ex => `
    <div class="p-4 rounded-xl border border-emerald-200 bg-emerald-50/40 flex flex-col justify-between hover:shadow-sm transition">
      <div>
        <div class="flex items-center justify-between mb-2">
          <span class="text-xs font-bold text-emerald-800 uppercase px-2 py-0.5 bg-emerald-100 rounded">${ex.title}</span>
          <span class="text-[11px] text-emerald-700 font-medium">Ví dụ ${ex.displayIdx}</span>
        </div>
        <div class="text-sm font-semibold text-slate-800 math-content mb-3 leading-relaxed">
          ${ex.question}
        </div>
      </div>
      <div class="pt-3 border-t border-emerald-200/60 text-xs sm:text-sm text-slate-700 math-content bg-white p-3 rounded-lg shadow-xs whitespace-pre-line leading-relaxed">
        <span class="font-bold text-emerald-700 block mb-1">💡 Lời giải chi tiết:</span>
        ${ex.solution}
      </div>
    </div>
  `).join('');
}

function renderExercises() {
  const container = document.getElementById('exercises-container');
  const headingEl = document.getElementById('exercises-heading-text');
  const totalPill = document.getElementById('exercises-total-pill');
  if (!container) return;

  const topics = (MATH_DATA.currentLesson && Array.isArray(MATH_DATA.currentLesson.topics)) 
    ? MATH_DATA.currentLesson.topics 
    : [];

  if (!topics.length) {
    container.innerHTML = '<div class="text-xs text-slate-500 italic p-3">Chưa có bài tập cho bài học này.</div>';
    if (headingEl) headingEl.innerText = "Bài tập rèn luyện:";
    if (totalPill) totalPill.innerText = "0 Bài toán";
    return;
  }

  function renderSingleExerciseHtml(ex, exIndex) {
    let badgeColor = ex.levelClass || "bg-slate-100 text-slate-700";
    if (!ex.levelClass) {
      if (ex.level === "Nhận biết") badgeColor = "bg-slate-100 text-slate-700";
      else if (ex.level === "Thông hiểu") badgeColor = "bg-emerald-100 text-emerald-800";
      else if (ex.level === "Vận dụng") badgeColor = "bg-blue-100 text-blue-800 font-bold";
      else if (ex.level === "Nâng cao" || ex.level === "Nâng cao 9+" || ex.level === "Điểm 10 Phân loại") {
        badgeColor = "bg-purple-100 text-purple-700 font-bold";
      }
    }

    const shortAns = ex.shortAnswer || ex.answer || "Xem hướng dẫn giải.";
    const fullSol = ex.fullSolution || ex.solution || "Đang cập nhật lời giải chi tiết.";
    const exTitle = ex.title || `Bài ${exIndex + 1}`;
    const escapedId = String(ex.id).replace(/[^a-zA-Z0-9_-]/g, '_');

    return `
      <div class="p-4 rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition space-y-2.5">
        <div class="flex flex-wrap items-center justify-between gap-2">
          <div class="flex items-center gap-2">
            <span class="text-xs font-bold px-2.5 py-0.5 rounded-full ${badgeColor}">
              ${exTitle} (${ex.level || 'Rèn luyện'})
            </span>
          </div>
          
          <div class="flex items-center gap-2">
            <button type="button" onclick="toggleAnswer('${escapedId}')" class="text-xs font-semibold px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg flex items-center gap-1 transition">
              <i data-lucide="eye" class="w-3.5 h-3.5"></i> <span>Xem đáp số</span>
            </button>

            <button type="button" onclick="toggleFullSolution('${escapedId}')" class="text-xs font-semibold px-2.5 py-1 ${currentRole === 'guest' ? 'bg-amber-100 text-amber-800 hover:bg-amber-200' : 'bg-blue-600 text-white hover:bg-blue-700'} rounded-lg flex items-center gap-1 transition shadow-xs">
              <i data-lucide="${currentRole === 'guest' ? 'lock' : 'file-text'}" class="w-3.5 h-3.5"></i>
              <span>${currentRole === 'guest' ? 'Mở khóa lời giải' : 'Xem lời giải chi tiết'}</span>
            </button>
          </div>
        </div>

        <div class="text-sm font-medium text-slate-800 math-content leading-relaxed">
          ${ex.question}
        </div>

        <div id="answer-box-${escapedId}" class="hidden p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-700 math-content">
          <span class="font-bold text-slate-800">Đáp án:</span> ${shortAns}
        </div>

        <div id="solution-box-${escapedId}" class="hidden p-3.5 bg-blue-50/70 border border-blue-200 rounded-xl text-xs sm:text-sm text-slate-800 math-content whitespace-pre-line leading-relaxed">
          <div class="font-bold text-blue-800 mb-1 flex items-center gap-1.5">
            <i data-lucide="sparkles" class="w-4 h-4 text-blue-600"></i> Hướng dẫn giải chi tiết (Độc quyền lớp Thầy):
          </div>
          ${fullSol}
        </div>
      </div>
    `;
  }

  if (currentLessonTopicTab === 'all') {
    const totalExCount = topics.reduce((sum, t) => sum + (t.exercises ? t.exercises.length : 0), 0);
    if (headingEl) headingEl.innerText = "Tất cả 30 Bài tập rèn luyện (Đầy đủ 3 Dạng):";
    if (totalPill) totalPill.innerText = `${totalExCount} Bài toán`;

    container.innerHTML = topics.map((t, tIdx) => {
      const exList = t.exercises || [];
      return `
        <div class="space-y-3 pt-3 first:pt-0">
          <div class="flex items-center justify-between p-2.5 rounded-xl bg-slate-100/80 border border-slate-200">
            <div class="flex items-center gap-2 font-black text-slate-900 text-xs sm:text-sm">
              <span class="w-2.5 h-2.5 rounded-full ${tIdx === 0 ? 'bg-emerald-500' : tIdx === 1 ? 'bg-blue-500' : 'bg-purple-500'}"></span>
              <span>${t.name || ('Dạng ' + (tIdx + 1))}</span>
            </div>
            <span class="text-[11px] font-bold text-slate-600 bg-white px-2 py-0.5 rounded-md border border-slate-200">
              10 Bài toán (${exList.length} bài)
            </span>
          </div>
          <div class="space-y-3">
            ${exList.map((ex, exIdx) => renderSingleExerciseHtml(ex, exIdx)).join('')}
          </div>
        </div>
      `;
    }).join('');
  } else {
    const activeTopic = topics[currentLessonTopicTab] || topics[0];
    const exList = activeTopic.exercises || [];
    if (headingEl) headingEl.innerText = `10 Bài tập rèn luyện ${activeTopic.name || ('Dạng ' + (currentLessonTopicTab + 1))}:`;
    if (totalPill) totalPill.innerText = `${exList.length} Bài toán`;

    container.innerHTML = exList.map((ex, exIdx) => renderSingleExerciseHtml(ex, exIdx)).join('');
  }
}

function toggleAnswer(id) {
  const box = document.getElementById(`answer-box-${id}`);
  if (box) box.classList.toggle('hidden');
  refreshIconsAndMath();
}

function toggleFullSolution(id) {
  if (currentRole === 'guest') {
    alert("🔒 Tính năng chỉ dành cho Học Sinh Trong Lớp!\n\nỞ chế độ Cộng đồng miễn phí, bạn chỉ có thể xem đáp số ngắn gọn. Hãy điền form 'Đăng Ký Vào Lớp Thầy' để mở khóa lời giải chi tiết và kết nối báo điểm qua Zalo!");
    return;
  }
  const box = document.getElementById(`solution-box-${id}`);
  if (box) box.classList.toggle('hidden');
  refreshIconsAndMath();
}

// ==========================================
// 6. CHẨN ĐOÁN LỖI SAI & CHẤM TỰ LUẬN
// ==========================================
function selectOption(questionId, selectedKey) {
  const qData = MATH_DATA.currentLesson.assessment.find(q => q.id === questionId);
  if (!qData) return;

  const card = document.getElementById(`card-${questionId}`);
  const feedbackBox = document.getElementById(`feedback-${questionId}`);
  const optionButtons = card.querySelectorAll('.option-btn');

  optionButtons.forEach(btn => {
    btn.className = "option-btn text-left p-3.5 border rounded-xl hover:bg-slate-50 transition border-slate-200";
  });

  const selectedOpt = qData.options.find(o => o.key === selectedKey);
  const correctOpt = qData.options.find(o => o.isCorrect);

  feedbackBox.classList.remove('hidden');

  if (selectedOpt.isCorrect) {
    feedbackBox.className = "mt-4 p-4 rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-900";
    feedbackBox.innerHTML = `
      <div class="flex items-start gap-2.5">
        <i data-lucide="check-circle" class="w-5 h-5 text-emerald-600 shrink-0 mt-0.5"></i>
        <div>
          <h5 class="font-bold text-sm text-emerald-800">Tuyệt vời! Bạn đã chọn đúng (Đáp án ${selectedKey})</h5>
          <p class="text-xs sm:text-sm mt-1">${selectedOpt.errorMsg}</p>
        </div>
      </div>
    `;
  } else {
    feedbackBox.className = "mt-4 p-4 rounded-xl border border-red-200 bg-red-50 text-red-900";
    feedbackBox.innerHTML = `
      <div class="space-y-3">
        <div class="flex items-start gap-2.5">
          <i data-lucide="alert-triangle" class="w-5 h-5 text-red-600 shrink-0 mt-0.5"></i>
          <div>
            <h5 class="font-bold text-sm text-red-800">Cảnh báo lỗi sai: Em đã chọn sai (Đáp án ${selectedKey})</h5>
            <p class="text-xs sm:text-sm mt-1 font-medium text-red-700">${selectedOpt.errorMsg}</p>
            <p class="text-xs text-slate-600 mt-1">Đáp án đúng phải là: <strong>${correctOpt.key}</strong></p>
          </div>
        </div>

        <div class="bg-white p-3.5 rounded-xl border border-red-200 shadow-sm mt-3">
          <div class="flex items-center gap-1.5 text-xs font-bold text-amber-700 uppercase mb-1">
            <i data-lucide="refresh-cw" class="w-4 h-4 text-amber-600"></i> ${qData.remedialProblem.title}
          </div>
          <div class="text-xs sm:text-sm font-medium text-slate-800 math-content mb-2">
            ${qData.remedialProblem.question}
          </div>
          <div class="text-xs text-slate-600 bg-amber-50/70 p-2 rounded-lg border border-amber-200">
            <strong>Mẹo khắc phục:</strong> ${qData.remedialProblem.tip}
            <div class="mt-1 font-bold text-slate-800">Đáp án kiểm tra lại: ${qData.remedialProblem.correctAnswer}</div>
          </div>
        </div>
      </div>
    `;
  }

  refreshIconsAndMath();
}

function simulatePhotoUpload() {
  document.getElementById('photo-status').classList.remove('hidden');
  document.getElementById('essay-input').value = 
`Lời giải của học sinh:
1. Xét phương trình x^2 - 2(m+1)x + m^2 + 2 = 0
Delta' = (m+1)^2 - 1*(m^2+2) = m^2 + 2m + 1 - m^2 - 2 = 2m - 1
Để phương trình có 2 nghiệm x1, x2 thì Delta' >= 0 <=> 2m - 1 >= 0 <=> m >= 1/2.
2. Theo định lý Vi-et ta có:
x1 + x2 = 2(m+1)
x1 * x2 = m^2 + 2
3. Biểu thức đề bài: x1^2 + x2^2 - 3x1x2 = 1
<=> (x1+x2)^2 - 5x1x2 = 1
<=> [2(m+1)]^2 - 5(m^2+2) = 1
<=> 4(m^2+2m+1) - 5m^2 - 10 = 1
<=> -m^2 + 8m - 6 = 1 <=> m^2 - 8m + 7 = 0
<=> (m-1)(m-7) = 0 <=> m = 1 hoặc m = 7
4. Đối chiếu điều kiện m >= 1/2, ta thấy cả m = 1 và m = 7 đều thỏa mãn.
Vậy m in {1; 7}.`;
  refreshIconsAndMath();
}

function gradeEssayAuto() {
  const resultBox = document.getElementById('essay-result');
  const essayText = document.getElementById('essay-input').value.trim();

  if (!essayText) {
    alert("Vui lòng nhập lời giải hoặc bấm 'Chụp ảnh bài làm' trước khi chấm!");
    return;
  }

  resultBox.classList.remove('hidden');
  resultBox.className = "mt-6 p-5 rounded-2xl border border-purple-200 bg-purple-50/70 text-slate-800 space-y-4";
  
  resultBox.innerHTML = `
    <div class="flex items-center justify-between border-b border-purple-200 pb-3">
      <div class="flex items-center gap-2">
        <div class="p-2 bg-purple-600 text-white rounded-lg"><i data-lucide="bot" class="w-5 h-5"></i></div>
        <div>
          <h4 class="font-bold text-base text-purple-900">Kết Quả Chấm Tự Động (AI Auto-Grading)</h4>
          <p class="text-xs text-purple-700">Đã đối chiếu với 4 tiêu chí bài giải chuẩn của Thầy</p>
        </div>
      </div>
      <div class="text-right">
        <span class="text-2xl font-black text-purple-700">10.0</span>
        <span class="text-xs text-slate-500">/ 10.0</span>
      </div>
    </div>

    <div class="space-y-2 text-xs sm:text-sm">
      <div class="flex items-center justify-between p-2.5 bg-white rounded-lg border border-purple-100">
        <span class="flex items-center gap-1.5 text-emerald-700 font-medium"><i data-lucide="check" class="w-4 h-4"></i> Tiêu chí 1: Tính đúng $\\Delta' = 2m-1 \\ge 0 \\implies m \\ge 1/2$</span>
        <span class="font-bold text-slate-700">2.5 / 2.5 đ</span>
      </div>
      <div class="flex items-center justify-between p-2.5 bg-white rounded-lg border border-purple-100">
        <span class="flex items-center gap-1.5 text-emerald-700 font-medium"><i data-lucide="check" class="w-4 h-4"></i> Tiêu chí 2: Áp dụng đúng Vi-ét ($S=2(m+1), P=m^2+2$)</span>
        <span class="font-bold text-slate-700">2.0 / 2.0 đ</span>
      </div>
      <div class="flex items-center justify-between p-2.5 bg-white rounded-lg border border-purple-100">
        <span class="flex items-center gap-1.5 text-emerald-700 font-medium"><i data-lucide="check" class="w-4 h-4"></i> Tiêu chí 3: Biến đổi về $(x_1+x_2)^2 - 5x_1x_2 = 1$</span>
        <span class="font-bold text-slate-700">2.5 / 2.5 đ</span>
      </div>
      <div class="flex items-center justify-between p-2.5 bg-white rounded-lg border border-purple-100">
        <span class="flex items-center gap-1.5 text-emerald-700 font-medium"><i data-lucide="check" class="w-4 h-4"></i> Tiêu chí 4: Tìm đúng $m=1, m=7$, kết luận và đối chiếu ĐK</span>
        <span class="font-bold text-slate-700">3.0 / 3.0 đ</span>
      </div>
    </div>
  `;

  refreshIconsAndMath();
}

function openManualGradeModal() {
  document.getElementById('modal-manual-grade').classList.remove('hidden');
}

function closeManualGradeModal() {
  document.getElementById('modal-manual-grade').classList.add('hidden');
}

function saveManualGrade() {
  const score = document.getElementById('manual-score-input').value;
  const feedback = document.getElementById('manual-feedback-input').value;
  closeManualGradeModal();

  const resultBox = document.getElementById('essay-result');
  resultBox.classList.remove('hidden');
  resultBox.className = "mt-6 p-5 rounded-2xl border border-amber-200 bg-amber-50/70 text-slate-800 space-y-4";
  
  resultBox.innerHTML = `
    <div class="flex items-center justify-between border-b border-amber-200 pb-3">
      <div class="flex items-center gap-2">
        <div class="p-2 bg-amber-500 text-white rounded-lg"><i data-lucide="pen-tool" class="w-5 h-5"></i></div>
        <div>
          <h4 class="font-bold text-base text-amber-900">Thầy Đã Chấm Điểm & Nhận Xét Thủ Công</h4>
          <p class="text-xs text-amber-700">Đã cập nhật vào sổ học bạ & gửi tin nhắn Zalo thông báo</p>
        </div>
      </div>
      <div class="text-right">
        <span class="text-2xl font-black text-amber-700">${score}</span>
        <span class="text-xs text-slate-500">/ 10.0</span>
      </div>
    </div>
    <div class="p-3.5 bg-white rounded-xl border border-amber-200 text-xs sm:text-sm text-slate-800">
      <strong class="text-amber-800 block mb-1">✍️ Lời phê của Thầy:</strong>
      ${feedback || "Bài làm rất tốt, lập luận sắc bén và trình bày đẹp mắt. Cố gắng phát huy em nhé!"}
    </div>
  `;

  refreshIconsAndMath();
}

// ==========================================
// 7. BẢNG QUẢN TRỊ CỦA THẦY & DỮ LIỆU THỐNG KÊ
// ==========================================

const EXAM_ANALYTICS_DATA = {
  exams: [
    { id: 'exam-hn-2026', name: 'Đề Khảo Sát Toán 9 - Tuyển Sinh Vào 10 (Sở Hà Nội 2026)' },
    { id: 'exam-viet-2026', name: 'Đề Ôn Tập: Phương Trình Bậc Hai & Vi-ét Nâng Cao' },
    { id: 'exam-midterm-9', name: 'Đề Kiểm Tra Giữa Kỳ I - Đại Số & Hình Học 9' },
    { id: 'exam-gifted-10', name: 'Đề Bồi Dưỡng Học Sinh Giỏi & Luyện Thi Chuyên' }
  ],
  studentScores: [
    { id: 'sc_1', studentName: 'Nguyễn Văn An', classId: 'lop_9a1', className: 'Toán 9A (Luyện Thi Vào 10)', examId: 'exam-hn-2026', score: 9.25, correctCount: '19/20', timeSpent: '41 phút', submittedAt: '15:20 08/11/2026' },
    { id: 'sc_2', studentName: 'Trần Thị Mai', classId: 'lop_9a1', className: 'Toán 9A (Luyện Thi Vào 10)', examId: 'exam-hn-2026', score: 9.0, correctCount: '18/20', timeSpent: '44 phút', submittedAt: '15:24 08/11/2026' },
    { id: 'sc_3', studentName: 'Lê Hoàng Long', classId: 'lop_9b1', className: 'Toán 9B (Cơ Bản & Nâng Cao)', examId: 'exam-hn-2026', score: 8.5, correctCount: '17/20', timeSpent: '43 phút', submittedAt: '15:30 08/11/2026' },
    { id: 'sc_4', studentName: 'Phạm Minh Đức', classId: 'lop_9a1', className: 'Toán 9A (Luyện Thi Vào 10)', examId: 'exam-hn-2026', score: 8.75, correctCount: '18/20', timeSpent: '39 phút', submittedAt: '15:15 08/11/2026' },
    { id: 'sc_5', studentName: 'Vũ Thảo Vy', classId: 'lop_9b1', className: 'Toán 9B (Cơ Bản & Nâng Cao)', examId: 'exam-hn-2026', score: 7.5, correctCount: '15/20', timeSpent: '45 phút', submittedAt: '15:40 08/11/2026' },
    { id: 'sc_6', studentName: 'Đặng Quốc Huy', classId: 'lop_9a1', className: 'Toán 9A (Luyện Thi Vào 10)', examId: 'exam-hn-2026', score: 7.0, correctCount: '14/20', timeSpent: '42 phút', submittedAt: '15:35 08/11/2026' },
    { id: 'sc_7', studentName: 'Bùi Gia Hân', classId: 'lop_9b1', className: 'Toán 9B (Cơ Bản & Nâng Cao)', examId: 'exam-hn-2026', score: 6.25, correctCount: '13/20', timeSpent: '45 phút', submittedAt: '15:42 08/11/2026' },
    { id: 'sc_8', studentName: 'Ngô Tuấn Kiệt', classId: 'lop_9b1', className: 'Toán 9B (Cơ Bản & Nâng Cao)', examId: 'exam-hn-2026', score: 4.5, correctCount: '9/20', timeSpent: '45 phút', submittedAt: '15:44 08/11/2026' },
    { id: 'sc_9', studentName: 'Hoàng Kim Ngân', classId: 'lop_9a1', className: 'Toán 9A (Luyện Thi Vào 10)', examId: 'exam-viet-2026', score: 9.5, correctCount: '20/20', timeSpent: '38 phút', submittedAt: '16:10 07/11/2026' },
    { id: 'sc_10', studentName: 'Đỗ Hải Đăng', classId: 'lop_9a1', className: 'Toán 9A (Luyện Thi Vào 10)', examId: 'exam-viet-2026', score: 8.0, correctCount: '16/20', timeSpent: '43 phút', submittedAt: '16:20 07/11/2026' },
    { id: 'sc_11', studentName: 'Lý Bảo Trân', classId: 'lop_9b1', className: 'Toán 9B (Cơ Bản & Nâng Cao)', examId: 'exam-viet-2026', score: 6.5, correctCount: '13/20', timeSpent: '45 phút', submittedAt: '16:25 07/11/2026' },
    { id: 'sc_12', studentName: 'Dương Tấn Phát', classId: 'lop_9b1', className: 'Toán 9B (Cơ Bản & Nâng Cao)', examId: 'exam-viet-2026', score: 5.5, correctCount: '11/20', timeSpent: '45 phút', submittedAt: '16:30 07/11/2026' }
  ],
  commonErrors: [
    {
      id: 'err_q12',
      code: 'Câu 12',
      examTitle: 'Đề Khảo Sát Toán 9 - Tuyển Sinh Vào 10 (Sở Hà Nội 2026)',
      topic: 'Hệ phương trình bậc nhất hai ẩn & Biện luận tham số $m$',
      failPercent: 68.4,
      failCount: 26,
      totalCount: 38,
      problem: `Tìm tất cả các giá trị của tham số $m$ để hệ phương trình sau có nghiệm duy nhất $(x; y)$ thỏa mãn $x + y > 1$:
$$\\begin{cases} mx + y = 2m \\\\ x + my = m + 1 \\end{cases}$$`,
      trap: `<strong>Bẫy sai lầm kinh điển:</strong> Học sinh quên xét điều kiện để hệ có nghiệm duy nhất là $D = m^2 - 1 \\neq 0 \\Leftrightarrow m \\neq \\pm 1$. Nhiều em giải ra $x = \\frac{2m+1}{m+1}$, $y = \\frac{m}{m+1}$ rồi cho $x + y > 1$ tìm ra $m > 0$ nhưng không đối chiếu điều kiện để loại $m = 1$.`,
      solution: `<strong>Bước 1: Điều kiện hệ có nghiệm duy nhất:</strong><br>
Ta có định thức: $D = m \\cdot m - 1 \\cdot 1 = m^2 - 1$.<br>
Hệ có nghiệm duy nhất khi và chỉ khi $D \\neq 0 \\Leftrightarrow m^2 - 1 \\neq 0 \\Leftrightarrow m \\neq \\pm 1$.<br><br>
<strong>Bước 2: Tìm nghiệm $(x; y)$ theo $m$:</strong><br>
$$D_x = 2m \\cdot m - (m+1) \\cdot 1 = 2m^2 - m - 1 = (m-1)(2m+1)$$
$$D_y = m(m+1) - 2m = m^2 - m = m(m-1)$$
Vì $m \\neq 1$, ta rút gọn được:<br>
$$x = \\frac{D_x}{D} = \\frac{(m-1)(2m+1)}{(m-1)(m+1)} = \\frac{2m+1}{m+1}$$
$$y = \\frac{D_y}{D} = \\frac{m(m-1)}{(m-1)(m+1)} = \\frac{m}{m+1}$$<br>
<strong>Bước 3: Giải bất phương trình $x + y > 1$:</strong><br>
$$\\frac{2m+1}{m+1} + \\frac{m}{m+1} > 1 \\Leftrightarrow \\frac{3m+1}{m+1} - 1 > 0 \\Leftrightarrow \\frac{2m}{m+1} > 0$$
$$\\Leftrightarrow \\left[ \\begin{array}{l} m > 0 \\\\ m < -1 \\end{array} \\right.$$<br>
<strong>Kết hợp điều kiện $m \\neq \\pm 1$:</strong> Kết luận tập nghiệm là $m \\in (-\\infty; -1) \\cup (0; 1) \\cup (1; +\\infty)$.`
    },
    {
      id: 'err_q8',
      code: 'Câu 8',
      examTitle: 'Đề Ôn Tập: Phương Trình Bậc Hai & Vi-ét Nâng Cao',
      topic: 'Hệ thức Vi-ét cho biểu thức không đối xứng',
      failPercent: 61.9,
      failCount: 26,
      totalCount: 42,
      problem: `Cho phương trình $x^2 - (2m+1)x + m^2 + m - 2 = 0$. Tìm $m$ để phương trình có hai nghiệm phân biệt $x_1, x_2$ thỏa mãn:
$$x_1^2 + 2x_1x_2 + 3x_2 = 14$$`,
      trap: `<strong>Bẫy sai lầm kinh điển:</strong> Biểu thức chứa $3x_2$ là không đối xứng. Học sinh hay rút $x_1$ theo $x_2$ rồi thế vào làm xuất hiện bậc 4 phức tạp, hoặc quên sử dụng tính chất nghiệm thỏa mãn phương trình gốc $x_1^2 = (2m+1)x_1 - m^2 - m + 2$ để hạ bậc.`,
      solution: `<strong>Bước 1: Tìm điều kiện để phương trình có 2 nghiệm phân biệt:</strong><br>
$$\\Delta = (2m+1)^2 - 4(m^2+m-2) = 4m^2 + 4m + 1 - 4m^2 - 4m + 8 = 9 > 0$$
Vậy phương trình luôn có 2 nghiệm phân biệt với mọi $m$.<br><br>
<strong>Bước 2: Sử dụng định lý Vi-ét:</strong><br>
$$\\begin{cases} x_1 + x_2 = 2m+1 \\\\ x_1 x_2 = m^2 + m - 2 \\end{cases}$$<br>
<strong>Bước 3: Kỹ thuật hạ bậc hoặc tính nghiệm tường minh:</strong><br>
Vì $\\Delta = 9 = 3^2$ là số chính phương nên 2 nghiệm cụ thể là:<br>
$$x = \\frac{2m+1 \\pm 3}{2} \\Rightarrow x_1 = m+2, \\quad x_2 = m-1$$
(hoặc trường hợp hoán vị $x_1 = m-1, x_2 = m+2$). Thay từng cặp vào biểu thức $x_1^2 + 2x_1x_2 + 3x_2 = 14$, ta tìm được nghiệm chính xác của tham số $m$.`
    },
    {
      id: 'err_q15',
      code: 'Câu 15',
      examTitle: 'Đề Khảo Sát Toán 9 - Tuyển Sinh Vào 10 (Sở Hà Nội 2026)',
      topic: 'Tứ giác nội tiếp & Hệ thức lượng tiếp tuyến',
      failPercent: 54.8,
      failCount: 23,
      totalCount: 42,
      problem: `Cho tam giác nhọn $ABC$ nội tiếp $(O)$ với các đường cao $BD$ và $CE$ cắt nhau tại $H$. Gọi $M$ là trung điểm của cạnh $BC$. Chứng minh tứ giác $BEDC$ nội tiếp và đường thẳng $ME$ là tiếp tuyến của đường tròn ngoại tiếp $\\triangle ADE$.`,
      trap: `<strong>Bẫy sai lầm kinh điển:</strong> Học sinh nhầm lẫn dấu hiệu tứ giác nội tiếp: dùng sai góc trong và góc ngoài tại đỉnh đối diện; hoặc khi chứng minh tiếp tuyến quên dùng góc tạo bởi tiếp tuyến và dây cung bằng góc nội tiếp chắn cung đó.`,
      solution: `<strong>Bước 1: Chứng minh tứ giác $BEDC$ nội tiếp:</strong><br>
Xét tứ giác $BEDC$ có $\\widehat{BEC} = 90^\\circ$ ($CE \\perp AB$) và $\\widehat{BDC} = 90^\\circ$ ($BD \\perp AC$).<br>
Suy ra 2 đỉnh $E$ và $D$ cùng nhìn cạnh $BC$ dưới góc $90^\\circ$. Do đó tứ giác $BEDC$ nội tiếp đường tròn đường kính $BC$, tâm là trung điểm $M$ của $BC$.<br><br>
<strong>Bước 2: Chứng minh $ME$ là tiếp tuyến của $(ADE)$:</strong><br>
Gọi $I$ là trung điểm $AH$. Tứ giác $AEHD$ có $\\widehat{AEH} = \\widehat{ADH} = 90^\\circ$ nên nội tiếp đường tròn $(I)$ đường kính $AH$.<br>
Vì $\\triangle IEH$ cân tại $I$ ($IE = IH$) nên $\\widehat{IEH} = \\widehat{IHE}$.<br>
Mặt khác $\\triangle MEC$ cân tại $M$ ($ME = MC = \\frac{BC}{2}$) nên $\\widehat{MEC} = \\widehat{MCE}$.<br>
Do $\\widehat{IHE} + \\widehat{MCE} = 90^\\circ$ (vì $\\triangle HCE$ vuông tại $E$) suy ra $\\widehat{IEM} = \\widehat{IEH} + \\widehat{MEC} = 90^\\circ \\Leftrightarrow ME \\perp IE$.<br>
Vậy $ME$ là tiếp tuyến tại $E$ của đường tròn $(ADE)$.`
    },
    {
      id: 'err_q6',
      code: 'Câu 6',
      examTitle: 'Đề Khảo Sát Toán 9 - Tuyển Sinh Vào 10 (Sở Hà Nội 2026)',
      topic: 'Giải bài toán bằng cách lập phương trình hoặc hệ phương trình',
      failPercent: 47.6,
      failCount: 20,
      totalCount: 42,
      problem: `Một xe ô tô và một xe máy cùng khởi hành từ $A$ để đi đến $B$ với quãng đường dài $120\\text{ km}$. Vận tốc của ô tô lớn hơn vận tốc xe máy là $10\\text{ km/h}$ nên ô tô đến $B$ sớm hơn xe máy $36\\text{ phút}$. Tính vận tốc của mỗi xe.`,
      trap: `<strong>Bẫy sai lầm kinh điển:</strong> Quên đổi đơn vị thời gian: $36\\text{ phút} = \\frac{36}{60} = \\frac{3}{5}\\text{ giờ}$. Nhiều học sinh giữ nguyên số 36 hoặc nhầm lẫn lập phương trình lấy thời gian ô tô trừ thời gian xe máy dẫn đến phương trình ra nghiệm âm.`,
      solution: `<strong>Bước 1: Đổi đơn vị và đặt ẩn:</strong><br>
Đổi $36\\text{ phút} = \\frac{36}{60}\\text{ h} = \\frac{3}{5}\\text{ h}$.<br>
Gọi vận tốc của xe máy là $x$ ($\\text{km/h}$, điều kiện $x > 0$).<br>
Vận tốc của ô tô là $x + 10$ ($\\text{km/h}$).<br><br>
<strong>Bước 2: Lập phương trình:</strong><br>
Thời gian xe máy đi hết quãng đường là $\\frac{120}{x}$ (giờ).<br>
Thời gian ô tô đi hết quãng đường là $\\frac{120}{x+10}$ (giờ).<br>
Vì ô tô đến sớm hơn xe máy $\\frac{3}{5}$ giờ nên ta có phương trình:<br>
$$\\frac{120}{x} - \\frac{120}{x+10} = \\frac{3}{5}$$<br>
<strong>Bước 3: Giải phương trình:</strong><br>
$$\\frac{40}{x} - \\frac{40}{x+10} = \\frac{1}{5} \\Leftrightarrow \\frac{400}{x(x+10)} = \\frac{1}{5} \\Leftrightarrow x^2 + 10x - 2000 = 0$$
Giải phương trình bậc hai nhận nghiệm dương $x = 40\\text{ km/h}$.<br>
<strong>Kết luận:</strong> Vận tốc xe máy là $40\\text{ km/h}$, vận tốc ô tô là $50\\text{ km/h}$.`
    },
    {
      id: 'err_q16',
      code: 'Câu 16',
      examTitle: 'Đề Bồi Dưỡng Học Sinh Giỏi & Luyện Thi Chuyên',
      topic: 'Bất đẳng thức & Cực trị đại số',
      failPercent: 42.9,
      failCount: 18,
      totalCount: 42,
      problem: `Cho hai số thực dương $x, y$ thỏa mãn $x + y \\le 2$. Tìm giá trị nhỏ nhất của biểu thức:
$$P = \\frac{1}{x^2 + y^2} + \\frac{2}{xy} + 3xy$$`,
      trap: `<strong>Bẫy sai lầm kinh điển:</strong> Học sinh tách điểm rơi sai hoặc áp dụng trực tiếp $\\frac{1}{x^2+y^2} + \\frac{1}{2xy} \\ge \\frac{4}{(x+y)^2}$ nhưng phần còn lại $\\frac{3}{2xy} + 3xy$ lại dùng Cauchy trực tiếp dẫn đến điểm rơi không trùng khớp tại $x = y = 1$.`,
      solution: `<strong>Bước 1: Phân tích điểm rơi:</strong><br>
Dự đoán dấu bằng đạt tại $x = y = 1 \\Rightarrow xy = 1$ và $x^2 + y^2 = 2$.<br><br>
<strong>Bước 2: Tách hạng tử theo điểm rơi:</strong><br>
$$P = \\left(\\frac{1}{x^2+y^2} + \\frac{1}{2xy}\\right) + \\left(\\frac{3}{16xy} + 3xy\\right) + \\frac{21}{16xy}$$<br>
<strong>Bước 3: Đánh giá từng nhóm:</strong><br>
1) BĐT Cauchy-Schwarz Engel: $\\frac{1}{x^2+y^2} + \\frac{1}{2xy} \\ge \\frac{4}{(x+y)^2} \\ge \\frac{4}{2^2} = 1$<br>
2) BĐT Cauchy: $\\frac{3}{16xy} + 3xy \\ge 2\\sqrt{\\frac{3}{16xy} \\cdot 3xy} = \\frac{3}{2}$<br>
3) Vì $xy \\le \\frac{(x+y)^2}{4} \\le 1 \\Rightarrow \\frac{21}{16xy} \\ge \\frac{21}{16}$<br>
Cộng các vế: $P \\ge 1 + \\frac{3}{2} + \\frac{21}{16} = \\frac{61}{16}$. Dấu bằng xảy ra khi $x = y = 1$.`
    }
  ]
};

// ==========================================
// QUẢN LÝ HỌC SINH ĐĂNG KÝ & PHÂN BỔ VÀO LỚP
// ==========================================

function renderPendingRegistrations() {
  const tbody = document.getElementById('pending-table-body');
  const countLabel = document.getElementById('pending-count-label');
  const countText = document.getElementById('pending-count-text');
  const badge = document.getElementById('pending-badge');
  if (!tbody) return;

  if (!pendingRegistrations || pendingRegistrations.length === 0) {
    loadPendingRegistrationsFromStorage();
  }

  const list = pendingRegistrations || [];

  if (countText) countText.innerText = `${list.length} Học sinh chờ Thầy xếp vào nhóm`;
  if (countLabel) countLabel.style.display = list.length > 0 ? 'inline-flex' : 'none';
  if (badge) {
    badge.innerText = list.length;
    badge.style.display = list.length > 0 ? 'inline-block' : 'none';
  }

  if (list.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="6" class="py-10 text-center text-slate-400 text-xs">
          <div class="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center mb-3 border border-emerald-100 shadow-xs">
            <i data-lucide="check-circle" class="w-7 h-7"></i>
          </div>
          <span class="font-extrabold text-slate-700 block text-base">Tuyệt vời! Không có học sinh nào đang chờ phân lớp.</span>
          <span class="text-xs text-slate-500 mt-1 block">Tất cả học sinh đăng ký mới đã được Thầy xếp hoặc gửi yêu cầu vào các nhóm/lớp học của Thầy.</span>
        </td>
      </tr>
    `;
    refreshIconsAndMath();
    return;
  }

  const classOptions = MATH_DATA.classes && MATH_DATA.classes.length > 0
    ? MATH_DATA.classes.map(c => `<option value="${c.id}">${c.name} (Khối kiến thức ${c.grade} • Mã: ${c.code})</option>`).join('')
    : '<option value="">Chưa có lớp nào</option>';

  tbody.innerHTML = list.map(req => `
    <tr class="hover:bg-indigo-50/30 transition border-b border-slate-100">
      <td class="py-3.5 px-4 font-semibold text-slate-800">
        <div class="font-bold text-slate-900 text-sm flex items-center gap-1.5">
          <span>${req.name}</span>
          <span class="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-200">Đăng ký mới</span>
        </div>
        <div class="flex items-center gap-1.5 mt-1">
          <span class="text-xs text-indigo-600 font-mono font-bold">@${req.username}</span>
          <span class="text-[11px] text-slate-400 font-normal">• Mật khẩu: <span class="font-mono text-slate-600">***</span></span>
        </div>
      </td>
      <td class="py-3.5 px-4 text-xs font-mono text-slate-700">
        <div class="flex items-center gap-1.5">
          <i data-lucide="mail" class="w-4 h-4 text-slate-400 shrink-0"></i>
          <span class="font-medium text-slate-800">${req.email || 'Chưa cập nhật'}</span>
        </div>
      </td>
      <td class="py-3.5 px-4">
        <div class="flex flex-col gap-1">
          <span class="px-2.5 py-0.5 rounded-lg bg-purple-100 text-purple-900 text-[11px] font-mono font-bold border border-purple-200 inline-block w-fit">
            ${req.apiKey || 'TOAN-9PLUS-2026'}
          </span>
          <span class="text-[10px] text-slate-500 font-medium">${req.apiLevel || 'Gói Bứt Phá Điểm 9+'}</span>
        </div>
      </td>
      <td class="py-3.5 px-4 text-xs text-slate-500 font-medium whitespace-nowrap">
        ${req.registeredAt || req.createdAt || 'Hôm nay'}
      </td>
      <td class="py-3.5 px-4">
        <label class="block text-[10px] font-bold text-slate-500 uppercase mb-1">Xếp vào lớp/nhóm của Thầy:</label>
        <select id="assign-class-select-${req.id}" class="w-full min-w-[200px] p-2 border-2 border-indigo-200 focus:border-indigo-500 rounded-xl text-xs font-bold text-indigo-950 bg-white shadow-xs">
          ${classOptions}
        </select>
      </td>
      <td class="py-3.5 px-4 text-center">
        <div class="flex items-center justify-center gap-1.5">
          <button onclick="assignStudentToClass('${req.id}')" 
            title="Thêm học sinh trực tiếp vào nhóm lớp đã chọn"
            class="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition flex items-center gap-1 shadow-xs hover:shadow whitespace-nowrap">
            <i data-lucide="user-plus" class="w-3.5 h-3.5"></i> Xếp Vào Lớp
          </button>
          <button onclick="sendGroupInvite('${req.id}')" 
            title="Gửi yêu cầu / lời mời tham gia nhóm học tập cho học sinh"
            class="px-2.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition flex items-center gap-1 shadow-xs whitespace-nowrap">
            <i data-lucide="send" class="w-3.5 h-3.5"></i> Gửi Yêu Cầu
          </button>
          <button onclick="rejectStudentRegistration('${req.id}')" 
            title="Hủy yêu cầu đăng ký"
            class="p-1.5 bg-slate-100 hover:bg-red-50 hover:text-red-600 text-slate-400 rounded-xl transition border border-slate-200" title="Từ chối">
            <i data-lucide="x" class="w-4 h-4"></i>
          </button>
        </div>
      </td>
    </tr>
  `).join('');

  refreshIconsAndMath();
}

function renderPendingRequests() {
  renderPendingRegistrations();
}

function sendGroupInvite(reqId) {
  assignStudentToClass(reqId, true);
}

function assignStudentToClass(reqId, isInvite = false) {
  if (!pendingRegistrations || pendingRegistrations.length === 0) {
    loadPendingRegistrationsFromStorage();
  }
  const req = pendingRegistrations.find(r => r.id === reqId);
  if (!req) {
    alert("Không tìm thấy thông tin đăng ký của học sinh!");
    return;
  }

  const selectEl = document.getElementById(`assign-class-select-${reqId}`);
  const targetClassId = selectEl ? selectEl.value : (MATH_DATA.classes[0] ? MATH_DATA.classes[0].id : null);

  if (!targetClassId) {
    alert("Thầy chưa chọn lớp hoặc chưa có lớp nào được tạo. Vui lòng tạo lớp trước khi xếp học sinh!");
    return;
  }

  const targetClass = MATH_DATA.classes.find(c => c.id === targetClassId);
  if (!targetClass) {
    alert("Không tìm thấy lớp học đã chọn!");
    return;
  }

  if (!targetClass.students) targetClass.students = [];

  const newStudentId = 'hs_' + Date.now();
  const newStudent = {
    id: newStudentId,
    username: req.username,
    name: req.name,
    email: req.email || "",
    phone: "",
    parentName: "Phụ huynh em " + req.name,
    parentZalo: "",
    apiKey: req.apiKey || "TOAN-9PLUS-2026",
    scoreAvg: 8.5,
    status: 'active'
  };

  targetClass.students.push(newStudent);
  targetClass.studentsCount = targetClass.students.length;

  // Cập nhật thông tin lớp trong USERS database
  if (!USERS || USERS.length === 0) loadUsersFromStorage();
  const userRecord = USERS.find(u => u.username === req.username);
  if (userRecord) {
    userRecord.assignedClassId = targetClass.id;
    userRecord.assignedClassName = targetClass.name;
    userRecord.status = 'active';
    saveUsersToStorage();
  }

  // Xóa khỏi hàng đợi đăng ký chờ duyệt
  pendingRegistrations = pendingRegistrations.filter(r => r.id !== reqId);
  savePendingRegistrationsToStorage();
  saveClassesStorage();

  renderPendingRegistrations();
  renderClasses();
  renderExamStats();

  if (isInvite) {
    alert(`📨 ĐÃ GỬI YÊU CẦU & THÊM VÀO NHÓM THÀNH CÔNG!\n\n- Học sinh: ${req.name} (@${req.username})\n- Lớp/Nhóm của Thầy: "${targetClass.name}" (Khối kiến thức ${targetClass.grade})\n- Gmail thông báo: ${req.email || 'Đã liên kết'}\n\nHọc sinh đã nhận được yêu cầu tham gia và chính thức có tên trong nhóm học của Thầy!`);
  } else {
    alert(`🎉 ĐÃ XẾP HỌC SINH VÀO LỚP THÀNH CÔNG!\n\n- Học sinh: ${req.name} (@${req.username})\n- Đã được Thầy xếp vào lớp: "${targetClass.name}" (Khối kiến thức ${targetClass.grade})\n\nHọc sinh hiện đã chính thức có tên trong danh sách lớp của Thầy!`);
  }
}

function rejectStudentRegistration(reqId) {
  const req = pendingRegistrations.find(r => r.id === reqId);
  if (!confirm(`Thầy có chắc chắn muốn từ chối yêu cầu đăng ký của em "${req ? req.name : ''}" không?`)) return;

  pendingRegistrations = pendingRegistrations.filter(r => r.id !== reqId);
  savePendingRegistrationsToStorage();
  renderPendingRegistrations();
  alert("Đã từ chối yêu cầu đăng ký.");
}

function approveStudent(classId, requestId) {
  assignStudentToClass(requestId);
}

function rejectStudent(classId, requestId) {
  rejectStudentRegistration(requestId);
}

// ==========================================
// MODAL: CHUYỂN LỚP CHO HỌC SINH
// ==========================================

function openTransferStudentModal(currentClassId, studentId) {
  const currentClass = MATH_DATA.classes.find(c => c.id === currentClassId);
  if (!currentClass) return;

  const student = currentClass.students.find(s => s.id === studentId);
  if (!student) return;

  document.getElementById('transfer-current-class-id').value = currentClassId;
  document.getElementById('transfer-student-id').value = studentId;
  document.getElementById('transfer-student-name').innerText = student.name + (student.username ? ` (@${student.username})` : '');
  document.getElementById('transfer-current-class-name').innerText = `${currentClass.name} (Khối ${currentClass.grade})`;

  const otherClasses = MATH_DATA.classes.filter(c => c.id !== currentClassId);
  const select = document.getElementById('transfer-target-class-select');
  if (otherClasses.length === 0) {
    select.innerHTML = '<option value="">Không có lớp khác để chuyển (Hãy tạo thêm lớp)</option>';
  } else {
    select.innerHTML = otherClasses.map(c => `<option value="${c.id}">${c.name} (Khối ${c.grade})</option>`).join('');
  }

  const modal = document.getElementById('modal-transfer-student');
  if (modal) modal.classList.remove('hidden');
  refreshIconsAndMath();
}

function closeTransferStudentModal() {
  const modal = document.getElementById('modal-transfer-student');
  if (modal) modal.classList.add('hidden');
}

function confirmTransferStudent() {
  const currentClassId = document.getElementById('transfer-current-class-id').value;
  const studentId = document.getElementById('transfer-student-id').value;
  const targetClassId = document.getElementById('transfer-target-class-select').value;

  if (!targetClassId) {
    alert("Vui lòng chọn lớp học mới cần chuyển đến!");
    return;
  }

  const currentClass = MATH_DATA.classes.find(c => c.id === currentClassId);
  const targetClass = MATH_DATA.classes.find(c => c.id === targetClassId);
  if (!currentClass || !targetClass) return;

  const studentIndex = currentClass.students.findIndex(s => s.id === studentId);
  if (studentIndex === -1) return;

  const [student] = currentClass.students.splice(studentIndex, 1);
  currentClass.studentsCount = currentClass.students.length;

  if (!targetClass.students) targetClass.students = [];
  targetClass.students.push(student);
  targetClass.studentsCount = targetClass.students.length;

  // Cập nhật USERS nếu có
  if (student.username) {
    const userRecord = USERS.find(u => u.username === student.username);
    if (userRecord) {
      userRecord.assignedClassId = targetClass.id;
      userRecord.assignedClassName = targetClass.name;
      saveUsersToStorage();
    }
  }

  saveClassesStorage();
  closeTransferStudentModal();
  renderClasses();
  renderExamStats();

  alert(`✅ ĐÃ CHUYỂN LỚP THÀNH CÔNG!\n\nHọc sinh: ${student.name}\nTừ lớp: ${currentClass.name}\nSang lớp: ${targetClass.name}`);
}

function renderClasses() {
  const container = document.getElementById('classes-list-container');
  if (!container) return;

  container.innerHTML = MATH_DATA.classes.map(c => `
    <div class="border border-slate-200 rounded-2xl p-5 bg-white space-y-4 shadow-xs">
      <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
        <div>
          <div class="flex items-center gap-2">
            <h4 class="font-bold text-slate-900 text-base sm:text-lg">${c.name}</h4>
            <span class="px-2.5 py-0.5 bg-indigo-50 text-indigo-700 text-xs font-bold rounded-lg border border-indigo-200">Khối kiến thức Lớp ${c.grade}</span>
          </div>
          <p class="text-xs text-slate-500 mt-0.5">Mã nhóm: <strong class="font-mono text-indigo-700 font-bold bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">${c.code}</strong> • Sĩ số: <strong>${c.students ? c.students.length : 0} học sinh</strong> ${c.description ? `• <span class="italic text-slate-400">${c.description}</span>` : ''}</p>
        </div>
        <div class="flex items-center gap-2">
          <button onclick="deleteClass('${c.id}', '${c.name.replace(/'/g, "\\'")}')" 
            title="Xóa lớp học này"
            class="px-2.5 py-1 text-xs text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition border border-red-200 flex items-center gap-1 font-semibold">
            <i data-lucide="trash-2" class="w-3.5 h-3.5"></i> Xóa lớp
          </button>
        </div>
      </div>

      <div>
        <h5 class="text-xs font-bold text-slate-600 uppercase mb-2">Danh sách học sinh chính thức của lớp:</h5>
        
        ${c.students && c.students.length > 0 ? `
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            ${c.students.map(hs => {
              const hasContact = (hs.parentZalo && hs.email);
              return `
                <div class="p-3 bg-slate-50 rounded-xl border ${hasContact ? 'border-slate-200' : 'border-amber-300 bg-amber-50/50'} flex flex-col justify-between space-y-2.5">
                  <div>
                    <div class="flex items-start justify-between gap-1">
                      <div>
                        <p class="font-bold text-slate-800 text-sm">${hs.name}</p>
                        ${hs.apiKey ? `<span class="px-1.5 py-0.5 rounded bg-purple-100 text-purple-800 text-[10px] font-mono font-bold">${hs.apiKey}</span>` : ''}
                      </div>
                      <div class="flex items-center gap-1">
                        <button onclick="openTransferStudentModal('${c.id}', '${hs.id}')" 
                          title="Chuyển học sinh sang lớp khác"
                          class="p-1 text-purple-600 hover:bg-purple-100 rounded-lg transition">
                          <i data-lucide="arrow-right-left" class="w-3.5 h-3.5"></i>
                        </button>
                        <button onclick="openUpdateStudentModal('${c.id}', '${hs.id}')" 
                          title="Bổ sung / Cập nhật Gmail & Zalo"
                          class="p-1 text-blue-600 hover:bg-blue-100 rounded-lg transition">
                          <i data-lucide="edit-3" class="w-3.5 h-3.5"></i>
                        </button>
                        <button onclick="removeStudent('${c.id}', '${hs.id}', '${hs.name}')" 
                          title="Xóa học sinh khỏi lớp"
                          class="p-1 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition">
                          <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
                        </button>
                      </div>
                    </div>

                    <div class="mt-2 text-xs space-y-0.5">
                      ${hasContact ? `
                        <p class="text-blue-700 font-medium">Zalo: <span class="font-mono font-bold">${hs.parentZalo}</span></p>
                        <p class="text-slate-500 text-[11px] font-mono">Gmail: ${hs.email}</p>
                      ` : `
                        <div class="text-amber-800 text-[11px] font-bold flex items-center gap-1">
                          <i data-lucide="alert-circle" class="w-3.5 h-3.5 text-amber-600"></i> Chưa có Gmail & Zalo
                        </div>
                      `}
                    </div>
                  </div>

                  ${!hasContact ? `
                    <button onclick="openUpdateStudentModal('${c.id}', '${hs.id}')" 
                      class="w-full py-1.5 px-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold transition flex items-center justify-center gap-1 shadow-sm">
                      <i data-lucide="user-plus" class="w-3.5 h-3.5"></i> + Bổ sung Zalo & Gmail
                    </button>
                  ` : `
                    <div class="flex items-center justify-between text-[11px] text-slate-400 pt-1 border-t border-slate-200">
                      <span>ĐTB: <strong class="text-blue-600 font-bold">${hs.scoreAvg}</strong></span>
                      <span class="text-emerald-700 font-bold flex items-center gap-0.5"><i data-lucide="check" class="w-3 h-3"></i> Đã kết nối</span>
                    </div>
                  `}
                </div>
              `;
            }).join('')}
          </div>
        ` : `
          <div class="p-6 text-center bg-slate-50 border border-dashed border-slate-300 rounded-2xl text-slate-500 text-xs space-y-2">
            <div class="w-10 h-10 mx-auto rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
              <i data-lucide="users" class="w-5 h-5"></i>
            </div>
            <p class="font-bold text-slate-700 text-sm">Chưa có học sinh chính thức trong lớp</p>
            <p class="text-[11px] text-slate-500 max-w-md mx-auto leading-relaxed">
              Học sinh khi đăng ký chọn lớp <strong>"${c.name}"</strong> sẽ xuất hiện ở bảng <strong>"Yêu Cầu Tham Gia Lớp Đang Chờ Thầy Duyệt"</strong> phía trên. Thầy chỉ cần bấm <strong>"Duyệt Vào Lớp"</strong> là tên học sinh sẽ xuất hiện tại đây ngay lập tức.
            </p>
          </div>
        `}
      </div>
    </div>
  `).join('');

  refreshIconsAndMath();
}

// ==========================================
// CÁC HÀM XỬ LÝ MODAL BỔ SUNG GMAIL & ZALO
// ==========================================

function openUpdateStudentModal(classId, studentId) {
  const targetClass = MATH_DATA.classes.find(c => c.id === classId);
  if (!targetClass) return;

  const student = targetClass.students.find(s => s.id === studentId);
  if (!student) return;

  document.getElementById('update-student-class-id').value = classId;
  document.getElementById('update-student-id').value = studentId;
  document.getElementById('update-student-name').value = student.name;
  document.getElementById('update-student-email').value = student.email || "";
  document.getElementById('update-student-parent-name').value = student.parentName || "";
  document.getElementById('update-student-parent-zalo').value = student.parentZalo || "";

  const modal = document.getElementById('modal-update-student-info');
  if (modal) modal.classList.remove('hidden');
  refreshIconsAndMath();
}

function closeUpdateStudentModal() {
  const modal = document.getElementById('modal-update-student-info');
  if (modal) modal.classList.add('hidden');
}

function saveStudentUpdatedInfo() {
  const classId = document.getElementById('update-student-class-id').value;
  const studentId = document.getElementById('update-student-id').value;
  const email = document.getElementById('update-student-email').value.trim();
  const parentName = document.getElementById('update-student-parent-name').value.trim();
  const parentZalo = document.getElementById('update-student-parent-zalo').value.trim();

  if (!email || !parentZalo) {
    alert("Vui lòng điền đầy đủ Gmail học sinh và Số Zalo để kết nối hệ thống báo cáo tự động!");
    return;
  }

  const targetClass = MATH_DATA.classes.find(c => c.id === classId);
  if (!targetClass) return;

  const student = targetClass.students.find(s => s.id === studentId);
  if (!student) return;

  student.email = email;
  student.parentName = parentName || "Phụ huynh em " + student.name;
  student.parentZalo = parentZalo;

  saveClassesStorage();
  closeUpdateStudentModal();
  renderClasses();
  alert(`✅ ĐÃ BỔ SUNG THÔNG TIN THÀNH CÔNG CHO EM ${student.name}!\n\n- Gmail nhận bài tập vá lỗi: ${email}\n- Số Zalo nhận báo cáo: ${parentZalo}\nHệ thống đã sẵn sàng tự động gửi kết quả cho gia đình.`);
}

function removeStudent(classId, studentId, studentName) {
  if (!confirm(`Thầy có chắc chắn muốn xóa học sinh "${studentName}" ra khỏi lớp học không?`)) return;

  const targetClass = MATH_DATA.classes.find(c => c.id === classId);
  if (!targetClass) return;

  targetClass.students = targetClass.students.filter(s => s.id !== studentId);
  targetClass.studentsCount = targetClass.students.length;

  saveClassesStorage();
  renderClasses();
}

function openCreateClassModal() {
  document.getElementById('modal-create-class').classList.remove('hidden');
}

function closeCreateClassModal() {
  document.getElementById('modal-create-class').classList.add('hidden');
}

function confirmCreateClass() {
  const nameInput = document.getElementById('new-class-name');
  const gradeInput = document.getElementById('new-class-grade');
  const codeInput = document.getElementById('new-class-code');
  const descInput = document.getElementById('new-class-desc');

  const name = nameInput ? nameInput.value.trim() : '';
  const grade = gradeInput ? parseInt(gradeInput.value) : 9;
  const code = codeInput ? codeInput.value.trim().toUpperCase() : '';
  const desc = descInput ? descInput.value.trim() : '';

  if (!name || !code) {
    alert("Vui lòng điền đầy đủ Tên lớp/nhóm và Mã tham gia!");
    return;
  }

  // Khởi tạo đối tượng lớp học / nhóm học tập mới do Thầy tạo
  const newClass = {
    id: 'lop_' + Date.now(),
    name: name,
    grade: grade, // Khối kiến thức chương trình (Khối 6 đến Khối 12)
    code: code,
    description: desc || `Nhóm học tập Toán Khối ${grade} do Thầy Giáo phụ trách`,
    studentsCount: 0,
    students: [],
    pendingRequests: []
  };

  MATH_DATA.classes.push(newClass);
  saveClassesStorage();
  closeCreateClassModal();

  if (nameInput) nameInput.value = '';
  if (codeInput) codeInput.value = '';
  if (descInput) descInput.value = '';
  
  populateRegisterClassDropdown();
  renderClasses();
  renderPendingRegistrations();
  renderExamStats();
  alert(`✅ ĐÃ TẠO THÀNH CÔNG LỚP HỌC / NHÓM HỌC TẬP!\n\n- Tên lớp/nhóm: ${name}\n- Thuộc Khối kiến thức: Khối ${grade}\n- Mã tham gia nhóm: ${code}\n\nLớp học đã được lưu vĩnh viễn vào hệ thống và sẵn sàng để Thầy xếp học sinh vào học!`);
}

function deleteClass(classId, className) {
  if (MATH_DATA.classes.length <= 1) {
    alert("⚠️ Hệ thống cần giữ lại ít nhất 1 lớp học!");
    return;
  }
  if (!confirm(`Thầy có chắc chắn muốn xóa lớp "${className}" không?\n\nToàn bộ danh sách học sinh của lớp này sẽ bị xóa khỏi hệ thống.`)) return;

  MATH_DATA.classes = MATH_DATA.classes.filter(c => c.id !== classId);
  saveClassesStorage();
  populateRegisterClassDropdown();
  renderClasses();
  renderPendingRequests();
  renderExamStats();
  alert(`✅ Đã xóa lớp "${className}" thành công!`);
}

// ==========================================
// THỐNG KÊ KẾT QUẢ BÀI THI & CÁC CÂU SAI NHIỀU
// ==========================================

function switchStatTab(tabName) {
  const scoresPanel = document.getElementById('stat-panel-scores');
  const errorsPanel = document.getElementById('stat-panel-errors');
  const btnScores = document.getElementById('stat-subtab-btn-scores');
  const btnErrors = document.getElementById('stat-subtab-btn-errors');

  if (tabName === 'scores') {
    if (scoresPanel) scoresPanel.classList.remove('hidden');
    if (errorsPanel) errorsPanel.classList.add('hidden');

    if (btnScores) {
      btnScores.className = 'px-4 py-2 rounded-lg transition flex items-center gap-1.5 bg-white text-indigo-700 shadow-xs';
    }
    if (btnErrors) {
      btnErrors.className = 'px-4 py-2 rounded-lg transition flex items-center gap-1.5 text-slate-600 hover:text-slate-900';
    }
    renderExamStats();
  } else {
    if (scoresPanel) scoresPanel.classList.add('hidden');
    if (errorsPanel) errorsPanel.classList.remove('hidden');

    if (btnScores) {
      btnScores.className = 'px-4 py-2 rounded-lg transition flex items-center gap-1.5 text-slate-600 hover:text-slate-900';
    }
    if (btnErrors) {
      btnErrors.className = 'px-4 py-2 rounded-lg transition flex items-center gap-1.5 bg-white text-red-700 shadow-xs';
    }
    renderCommonErrors();
  }

  refreshIconsAndMath();
}

function updateStatsClassFilterDropdown() {
  const classSelect = document.getElementById('stats-filter-class');
  if (!classSelect) return;
  const currentVal = classSelect.value || 'all';

  let optionsHtml = '<option value="all">Tất cả các lớp của Thầy</option>';
  if (MATH_DATA.classes && MATH_DATA.classes.length > 0) {
    MATH_DATA.classes.forEach(c => {
      optionsHtml += `<option value="${c.id}">${c.name} (Khối ${c.grade})</option>`;
    });
  }
  classSelect.innerHTML = optionsHtml;
  classSelect.value = currentVal;
}

function renderExamStats() {
  updateStatsClassFilterDropdown();

  const examFilter = document.getElementById('stats-filter-exam')?.value || 'all';
  const classFilter = document.getElementById('stats-filter-class')?.value || 'all';

  let filtered = [...EXAM_ANALYTICS_DATA.studentScores];

  if (examFilter !== 'all') {
    filtered = filtered.filter(s => s.examId === examFilter);
  }
  if (classFilter !== 'all') {
    filtered = filtered.filter(s => s.classId === classFilter);
  }

  if (filtered.length === 0) {
    filtered = [...EXAM_ANALYTICS_DATA.studentScores];
  }

  const total = filtered.length;
  const avg = (filtered.reduce((sum, s) => sum + s.score, 0) / total).toFixed(1);

  const excellent = filtered.filter(s => s.score >= 9.0).length;
  const good = filtered.filter(s => s.score >= 8.0 && s.score < 9.0).length;
  const fair = filtered.filter(s => s.score >= 6.5 && s.score < 8.0).length;
  const medium = filtered.filter(s => s.score >= 5.0 && s.score < 6.5).length;
  const weak = filtered.filter(s => s.score < 5.0).length;

  const goodPercent = (((excellent + good) / total) * 100).toFixed(1);
  const fairPercent = ((fair / total) * 100).toFixed(1);
  const poorPercent = (((medium + weak) / total) * 100).toFixed(1);

  const kpiAvg = document.getElementById('stat-kpi-avg');
  const kpiGood = document.getElementById('stat-kpi-good');
  const kpiFair = document.getElementById('stat-kpi-fair');
  const kpiPoor = document.getElementById('stat-kpi-poor');

  if (kpiAvg) kpiAvg.innerText = avg;
  if (kpiGood) kpiGood.innerText = `${goodPercent}%`;
  if (kpiFair) kpiFair.innerText = `${fairPercent}%`;
  if (kpiPoor) kpiPoor.innerText = `${poorPercent}%`;

  const scoreBars = document.getElementById('stat-score-bars');
  if (scoreBars) {
    const pExc = ((excellent / total) * 100).toFixed(1);
    const pGood = ((good / total) * 100).toFixed(1);
    const pFair = ((fair / total) * 100).toFixed(1);
    const pMed = ((medium / total) * 100).toFixed(1);
    const pWeak = ((weak / total) * 100).toFixed(1);

    scoreBars.innerHTML = `
      <div class="space-y-1">
        <div class="flex justify-between text-xs font-bold">
          <span class="text-emerald-900">Điểm Xuất Sắc (9.0 - 10.0 điểm):</span>
          <span class="text-emerald-700 font-mono">${pExc}% (${excellent} học sinh)</span>
        </div>
        <div class="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
          <div class="bg-gradient-to-r from-emerald-500 to-teal-500 h-full rounded-full transition-all duration-500" style="width: ${pExc}%"></div>
        </div>
      </div>

      <div class="space-y-1">
        <div class="flex justify-between text-xs font-bold">
          <span class="text-blue-900">Điểm Giỏi (8.0 - 8.9 điểm):</span>
          <span class="text-blue-700 font-mono">${pGood}% (${good} học sinh)</span>
        </div>
        <div class="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
          <div class="bg-gradient-to-r from-blue-500 to-indigo-500 h-full rounded-full transition-all duration-500" style="width: ${pGood}%"></div>
        </div>
      </div>

      <div class="space-y-1">
        <div class="flex justify-between text-xs font-bold">
          <span class="text-indigo-900">Điểm Khá (6.5 - 7.9 điểm):</span>
          <span class="text-indigo-700 font-mono">${pFair}% (${fair} học sinh)</span>
        </div>
        <div class="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
          <div class="bg-gradient-to-r from-indigo-500 to-purple-500 h-full rounded-full transition-all duration-500" style="width: ${pFair}%"></div>
        </div>
      </div>

      <div class="space-y-1">
        <div class="flex justify-between text-xs font-bold">
          <span class="text-amber-900">Điểm Trung Bình (5.0 - 6.4 điểm):</span>
          <span class="text-amber-700 font-mono">${pMed}% (${medium} học sinh)</span>
        </div>
        <div class="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
          <div class="bg-gradient-to-r from-amber-500 to-orange-500 h-full rounded-full transition-all duration-500" style="width: ${pMed}%"></div>
        </div>
      </div>

      <div class="space-y-1">
        <div class="flex justify-between text-xs font-bold">
          <span class="text-red-900">Dưới Trung Bình (&lt; 5.0 điểm - Cần phụ đạo):</span>
          <span class="text-red-700 font-mono">${pWeak}% (${weak} học sinh)</span>
        </div>
        <div class="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
          <div class="bg-gradient-to-r from-red-500 to-pink-500 h-full rounded-full transition-all duration-500" style="width: ${pWeak}%"></div>
        </div>
      </div>
    `;
  }

  const tableBody = document.getElementById('stat-student-scores-body');
  if (tableBody) {
    tableBody.innerHTML = filtered.map(s => {
      let badgeClass = 'bg-blue-100 text-blue-800';
      let rankText = 'Khá';
      if (s.score >= 9.0) {
        badgeClass = 'bg-emerald-100 text-emerald-800 font-extrabold';
        rankText = 'Xuất sắc';
      } else if (s.score >= 8.0) {
        badgeClass = 'bg-teal-100 text-teal-800 font-bold';
        rankText = 'Giỏi';
      } else if (s.score >= 6.5) {
        badgeClass = 'bg-blue-100 text-blue-800';
        rankText = 'Khá';
      } else if (s.score >= 5.0) {
        badgeClass = 'bg-amber-100 text-amber-800';
        rankText = 'Trung bình';
      } else {
        badgeClass = 'bg-red-100 text-red-800 font-bold';
        rankText = 'Yếu';
      }

      return `
        <tr class="hover:bg-slate-50 transition border-b border-slate-100">
          <td class="py-2.5 px-3 font-bold text-slate-800">${s.studentName}</td>
          <td class="py-2.5 px-3 text-slate-600">${s.className}</td>
          <td class="py-2.5 px-3 text-center">
            <span class="font-mono font-black text-sm ${s.score >= 8.0 ? 'text-emerald-700' : s.score >= 6.5 ? 'text-blue-700' : 'text-amber-700'}">${s.score}</span>
          </td>
          <td class="py-2.5 px-3">
            <span class="px-2 py-0.5 rounded text-[10px] ${badgeClass}">${rankText}</span>
          </td>
          <td class="py-2.5 px-3 font-mono text-slate-600">${s.correctCount}</td>
          <td class="py-2.5 px-3 text-slate-500 text-[11px]">${s.timeSpent}</td>
          <td class="py-2.5 px-3 text-center">
            <button onclick="previewZaloMessage('${s.studentName}', ${s.score})" 
              class="px-2 py-1 bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white rounded-lg text-xs font-semibold transition flex items-center justify-center gap-1 mx-auto">
              <i data-lucide="message-square" class="w-3 h-3"></i> Gửi Zalo
            </button>
          </td>
        </tr>
      `;
    }).join('');
  }

  refreshIconsAndMath();
}

function renderCommonErrors() {
  const container = document.getElementById('stat-common-errors-container');
  if (!container) return;

  container.innerHTML = EXAM_ANALYTICS_DATA.commonErrors.map((err, idx) => `
    <div class="p-5 rounded-2xl bg-white border-2 border-red-100 hover:border-red-300 transition shadow-xs space-y-3">
      <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
        <div class="flex items-center gap-2">
          <span class="w-6 h-6 rounded-full bg-red-600 text-white font-black text-xs flex items-center justify-center">#${idx + 1}</span>
          <h4 class="font-bold text-slate-900 text-sm sm:text-base">${err.code}: ${err.topic}</h4>
        </div>
        <div class="flex items-center gap-2">
          <span class="px-2.5 py-1 rounded-full bg-red-100 text-red-800 text-xs font-black border border-red-200">
            Tỷ lệ làm sai: ${err.failPercent}% (${err.failCount}/${err.totalCount} em)
          </span>
        </div>
      </div>

      <div class="text-xs text-slate-500 font-medium">
        Xuất hiện trong: <strong class="text-slate-700">${err.examTitle}</strong>
      </div>

      <div class="p-3.5 bg-red-50/60 rounded-xl border border-red-100 text-xs text-red-950 space-y-1">
        ${err.trap}
      </div>

      <div class="flex flex-wrap items-center justify-between gap-2 pt-1">
        <button onclick="openErrorQuestionModal('${err.id}')"
          class="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold transition flex items-center gap-1.5">
          <i data-lucide="eye" class="w-4 h-4 text-slate-600"></i> Xem Đề Bài & Lời Giải Chuẩn
        </button>
        <button onclick="assignRemedialHomework('${err.id}')"
          class="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 shadow-xs">
          <i data-lucide="send" class="w-4 h-4"></i> Giao 2 Bài Tương Tự Vá Lỗi Này
        </button>
      </div>
    </div>
  `).join('');

  refreshIconsAndMath();
}

function openErrorQuestionModal(questionId) {
  const item = EXAM_ANALYTICS_DATA.commonErrors.find(e => e.id === questionId);
  if (!item) return;

  const titleEl = document.getElementById('modal-err-title');
  const topicEl = document.getElementById('modal-err-topic');
  const contentEl = document.getElementById('modal-err-content');
  const trapEl = document.getElementById('modal-err-trap');
  const solutionEl = document.getElementById('modal-err-solution');
  const assignBtn = document.getElementById('modal-err-assign-btn');

  if (titleEl) titleEl.innerText = `${item.code} - ${item.examTitle}`;
  if (topicEl) topicEl.innerText = `Chủ đề: ${item.topic} • Tỷ lệ làm sai: ${item.failPercent}%`;
  if (contentEl) contentEl.innerHTML = item.problem;
  if (trapEl) trapEl.innerHTML = item.trap;
  if (solutionEl) solutionEl.innerHTML = item.solution;

  if (assignBtn) {
    assignBtn.onclick = function() {
      assignRemedialHomework(questionId);
      closeErrorQuestionModal();
    };
  }

  const modal = document.getElementById('modal-error-question-detail');
  if (modal) modal.classList.remove('hidden');

  refreshIconsAndMath();
}

function closeErrorQuestionModal() {
  const modal = document.getElementById('modal-error-question-detail');
  if (modal) modal.classList.add('hidden');
}

function assignRemedialHomework(questionId) {
  const item = EXAM_ANALYTICS_DATA.commonErrors.find(e => e.id === questionId);
  const code = item ? item.code : 'câu hỏi này';
  alert(`🚀 ĐÃ GIAO 2 BÀI TẬP VÁ LỖI THÀNH CÔNG!\n\nHệ thống đã tự động tạo 2 bài tập tương tự cho ${code}:\n- 1 Bài mức độ củng cố (nhận diện bẫy sai lầm)\n- 1 Bài mức độ vận dụng (thực hành độc lập)\n\nBài tập đã được gửi tới toàn bộ học sinh trong lớp và thông báo qua Zalo để học sinh hoàn thành trước buổi học tới.`);
}

// ==========================================
// 8. TÍNH NĂNG GIÁO VIÊN: TẠO ĐỀ ÔN TẬP
// (TỰ SINH THEO MA TRẬN & TỰ ĐƯA ĐỀ LÊN)
// ==========================================

function openMatrixGeneratorModal() {
  document.getElementById('modal-matrix-generator').classList.remove('hidden');
  updateMatrixLiveSummary();
}

function closeMatrixGeneratorModal() {
  document.getElementById('modal-matrix-generator').classList.add('hidden');
}

function openManualUploadModal() {
  document.getElementById('modal-manual-upload-exam').classList.remove('hidden');
}

function closeManualUploadModal() {
  document.getElementById('modal-manual-upload-exam').classList.add('hidden');
}

// Thay đổi thời gian nhanh
function setCustomDuration(minutes) {
  const input = document.getElementById('matrix-custom-duration');
  if (input) input.value = minutes;
}

// Áp dụng cấu trúc đề mẫu nhanh (Presets)
function applyPresetStructure(preset) {
  const q1 = document.getElementById('part1-questions');
  const p1 = document.getElementById('part1-points');
  const q2 = document.getElementById('part2-questions');
  const p2 = document.getElementById('part2-points');
  const q3 = document.getElementById('part3-questions');
  const p3 = document.getElementById('part3-points');
  const q4 = document.getElementById('part4-questions');
  const p4 = document.getElementById('part4-points');

  if (preset === 'gdpt2018') {
    // Chuẩn Bộ GDPT 2018: 12 TN (3đ) + 4 ĐS (4đ) + 6 TLN (2đ) + 1 TL (1đ) = 10đ
    if (q1) q1.value = 12;
    if (p1) p1.value = 3.0;
    if (q2) q2.value = 4;
    if (p2) p2.value = 4.0;
    if (q3) q3.value = 6;
    if (p3) p3.value = 2.0;
    if (q4) q4.value = 1;
    if (p4) p4.value = 1.0;
  } else if (preset === 'mix7030') {
    // 70% Trắc nghiệm + 30% Tự luận truyền thống
    if (q1) q1.value = 35;
    if (p1) p1.value = 7.0;
    if (q2) q2.value = 0;
    if (p2) p2.value = 0.0;
    if (q3) q3.value = 0;
    if (p3) p3.value = 0.0;
    if (q4) q4.value = 3;
    if (p4) p4.value = 3.0;
  } else if (preset === 'mcq100') {
    // 100% Trắc nghiệm nhiều lựa chọn (50 câu - 10đ)
    if (q1) q1.value = 50;
    if (p1) p1.value = 10.0;
    if (q2) q2.value = 0;
    if (p2) p2.value = 0.0;
    if (q3) q3.value = 0;
    if (p3) p3.value = 0.0;
    if (q4) q4.value = 0;
    if (p4) p4.value = 0.0;
  }

  updateMatrixLiveSummary();
}

// Bảng tính Live Summary (Tính tổng số câu, tổng số điểm & tỉ lệ)
function updateMatrixLiveSummary() {
  const q1 = parseInt(document.getElementById('part1-questions')?.value || 0);
  const p1 = parseFloat(document.getElementById('part1-points')?.value || 0);
  const q2 = parseInt(document.getElementById('part2-questions')?.value || 0);
  const p2 = parseFloat(document.getElementById('part2-points')?.value || 0);
  const q3 = parseInt(document.getElementById('part3-questions')?.value || 0);
  const p3 = parseFloat(document.getElementById('part3-points')?.value || 0);
  const q4 = parseInt(document.getElementById('part4-questions')?.value || 0);
  const p4 = parseFloat(document.getElementById('part4-points')?.value || 0);

  // Cập nhật hint tỉ lệ mỗi câu
  const hint1 = document.getElementById('part1-rate-hint');
  if (hint1) hint1.innerText = q1 > 0 ? (p1 / q1).toFixed(2) + 'đ' : '0đ';

  const hint2 = document.getElementById('part2-rate-hint');
  if (hint2) hint2.innerText = q2 > 0 ? (p2 / q2).toFixed(2) + 'đ' : '0đ';

  const hint3 = document.getElementById('part3-rate-hint');
  if (hint3) hint3.innerText = q3 > 0 ? (p3 / q3).toFixed(2) + 'đ' : '0đ';

  const hint4 = document.getElementById('part4-rate-hint');
  if (hint4) hint4.innerText = q4 > 0 ? (p4 / q4).toFixed(2) + 'đ' : '0đ';

  // Tổng câu & Tổng điểm
  const totalQuestions = q1 + q2 + q3 + q4;
  const totalPoints = Math.round((p1 + p2 + p3 + p4) * 100) / 100;

  const totalQEl = document.getElementById('summary-total-questions');
  if (totalQEl) totalQEl.innerText = totalQuestions;

  const totalPEl = document.getElementById('summary-total-points');
  if (totalPEl) totalPEl.innerText = totalPoints.toFixed(1);

  const statusEl = document.getElementById('summary-points-status');
  if (statusEl) {
    if (Math.abs(totalPoints - 10.0) < 0.01) {
      statusEl.className = "px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold flex items-center gap-1";
      statusEl.innerHTML = `<i data-lucide="check" class="w-3.5 h-3.5"></i> Chuẩn thang điểm 10.0`;
    } else {
      statusEl.className = "px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 text-[11px] font-bold flex items-center gap-1";
      statusEl.innerHTML = `<i data-lucide="alert-triangle" class="w-3.5 h-3.5"></i> Đang là ${totalPoints.toFixed(1)}đ (khác chuẩn 10đ)`;
    }
  }

  refreshIconsAndMath();
}

// Xử lý tự sinh đề theo 4 phần & nguồn đề đã chọn
function executeGenerateFromMatrix() {
  const type = document.getElementById('matrix-exam-type').value; // 'midterm' | 'finalterm' | 'chapter'
  const grade = parseInt(document.getElementById('matrix-grade').value);
  const duration = parseInt(document.getElementById('matrix-custom-duration').value) || 90;
  
  // Nguồn câu hỏi
  const sourceRadio = document.querySelector('input[name="matrix_source"]:checked');
  const sourceType = sourceRadio ? sourceRadio.value : 'web'; // 'web' | 'teacher' | 'hybrid'

  // Cấu hình 4 phần
  const q1 = parseInt(document.getElementById('part1-questions')?.value || 0);
  const p1 = parseFloat(document.getElementById('part1-points')?.value || 0);
  const q2 = parseInt(document.getElementById('part2-questions')?.value || 0);
  const p2 = parseFloat(document.getElementById('part2-points')?.value || 0);
  const q3 = parseInt(document.getElementById('part3-questions')?.value || 0);
  const p3 = parseFloat(document.getElementById('part3-points')?.value || 0);
  const q4 = parseInt(document.getElementById('part4-questions')?.value || 0);
  const p4 = parseFloat(document.getElementById('part4-points')?.value || 0);

  const totalQuestions = q1 + q2 + q3 + q4;
  const totalPoints = Math.round((p1 + p2 + p3 + p4) * 10) / 10;

  if (totalQuestions === 0) {
    alert("Vui lòng thiết lập ít nhất 1 câu hỏi cho đề thi!");
    return;
  }

  let sourceLabel = "";
  let sourceBadge = "";
  if (sourceType === 'web') {
    sourceLabel = "Nguồn: Ngân hàng đề thi quét từ toàn quốc & Trường Chuyên";
    sourceBadge = "🌐 Nguồn: Trên mạng (Toàn quốc)";
  } else if (sourceType === 'teacher') {
    sourceLabel = "Nguồn: Tài liệu & ngân hàng câu hỏi riêng do Thầy cung cấp";
    sourceBadge = "📚 Nguồn: Thầy cung cấp";
  } else {
    sourceLabel = "Nguồn: Kết hợp 50% câu hỏi từ Thầy + 50% câu hỏi quét từ mạng";
    sourceBadge = "⚡ Nguồn: Kết hợp Thầy + Mạng";
  }

  const typeName = type === 'midterm' ? 'Giữa Học Kỳ' : type === 'finalterm' ? 'Cuối Học Kỳ' : 'Cuối Chương';
  const newExamId = 'gen_' + Date.now();
  const newTitle = `Đề Ôn Thi ${typeName} Toán ${grade} - Cấu Trúc 4 Dạng (Mã Đề 101)`;

  const newExam = {
    id: newExamId,
    grade: grade,
    title: newTitle,
    badge: `Chuẩn 4 Dạng (${totalQuestions} câu - ${totalPoints}đ)`,
    badgeColor: "bg-indigo-600",
    authorType: "matrix",
    sourceBadge: sourceBadge,
    summary: `Đề được tự sinh ngẫu nhiên theo yêu cầu của Thầy. ${sourceLabel}. Thời gian làm bài: ${duration} phút.`,
    duration: `${duration} phút`,
    examCount: `${totalQuestions} câu (${totalPoints}đ)`,
    format4Part: true,
    partsConfig: {
      part1: { name: "Phần I: Trắc nghiệm nhiều lựa chọn", count: q1, points: p1 },
      part2: { name: "Phần II: Đúng / Sai", count: q2, points: p2 },
      part3: { name: "Phần III: Trả lời ngắn", count: q3, points: p3 },
      part4: { name: "Phần IV: Tự luận", count: q4, points: p4 }
    },
    topics: [
      `Phần I (Trắc nghiệm): ${q1} câu (${p1}đ) - Chọn 1 trong 4 phương án`,
      `Phần II (Đúng / Sai): ${q2} câu (${p2}đ) - Mỗi câu 4 ý a,b,c,d`,
      `Phần III (Trả lời ngắn): ${q3} câu (${p3}đ) - Điền đáp số chuẩn`,
      `Phần IV (Tự luận): ${q4} bài (${p4}đ) - Trình bày bài giải chi tiết`
    ]
  };

  // Đưa vào danh sách tương ứng
  const listKey = type + 'Reviews';
  if (!MATH_DATA.reviewSections[listKey]) {
    MATH_DATA.reviewSections[listKey] = [];
  }
  MATH_DATA.reviewSections[listKey].unshift(newExam);

  closeMatrixGeneratorModal();
  switchReviewSubTab(type);

  // Thông báo xác nhận và gợi ý xem đề
  if (confirm(`🎉 TỰ SINH ĐỀ THÀNH CÔNG!\n\nĐã tạo thành công: "${newTitle}"\n- Thời gian: ${duration} phút\n- Nguồn: ${sourceBadge}\n- Cấu trúc: ${q1} TN (${p1}đ) + ${q2} ĐS (${p2}đ) + ${q3} TLN (${p3}đ) + ${q4} TL (${p4}đ) = ${totalPoints} điểm.\n\nThầy có muốn MỞ XEM VÀ THI THỬ ĐỀ NÀY NGAY KHÔNG?`)) {
    openExamViewerModal(newExamId, type);
  }
}

// ==========================================
// 9. MODAL XEM & THI THỬ ĐỀ THI 4 PHẦN CHUẨN BỘ
// ==========================================
let currentViewingExam = null;
let viewerAnswers = {
  mcq: {},
  tf: {},
  sa: {},
  essay: ""
};

// ==========================================
// HỖ TRỢ XỬ LÝ VIDEO YOUTUBE & UPLOAD ĐỀ THI CỦA THẦY
// ==========================================

function getYoutubeEmbedUrl(url) {
  if (!url) return null;
  const cleanUrl = url.trim();
  // Khớp định dạng watch?v=ID hoặc youtu.be/ID hoặc embed/ID
  const match = cleanUrl.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/i);
  return match ? `https://www.youtube.com/embed/${match[1]}` : null;
}

function setManualCustomDuration(minutes) {
  const input = document.getElementById('manual-exam-duration-num');
  if (input) input.value = minutes;
}

function setManualPresetStructure(preset) {
  const q1 = document.getElementById('manual-part1-questions');
  const p1 = document.getElementById('manual-part1-points');
  const q2 = document.getElementById('manual-part2-questions');
  const p2 = document.getElementById('manual-part2-points');
  const q3 = document.getElementById('manual-part3-questions');
  const p3 = document.getElementById('manual-part3-points');
  const q4 = document.getElementById('manual-part4-questions');
  const p4 = document.getElementById('manual-part4-points');

  if (preset === 'gdpt2018') {
    if (q1) q1.value = 12;
    if (p1) p1.value = 3.0;
    if (q2) q2.value = 4;
    if (p2) p2.value = 4.0;
    if (q3) q3.value = 6;
    if (p3) p3.value = 2.0;
    if (q4) q4.value = 1;
    if (p4) p4.value = 1.0;
  } else if (preset === 'mix7030') {
    if (q1) q1.value = 35;
    if (p1) p1.value = 7.0;
    if (q2) q2.value = 0;
    if (p2) p2.value = 0.0;
    if (q3) q3.value = 0;
    if (p3) p3.value = 0.0;
    if (q4) q4.value = 3;
    if (p4) p4.value = 3.0;
  }
  updateManualLiveSummary();
}

function updateManualLiveSummary() {
  const q1 = parseInt(document.getElementById('manual-part1-questions')?.value || 0);
  const p1 = parseFloat(document.getElementById('manual-part1-points')?.value || 0);
  const q2 = parseInt(document.getElementById('manual-part2-questions')?.value || 0);
  const p2 = parseFloat(document.getElementById('manual-part2-points')?.value || 0);
  const q3 = parseInt(document.getElementById('manual-part3-questions')?.value || 0);
  const p3 = parseFloat(document.getElementById('manual-part3-points')?.value || 0);
  const q4 = parseInt(document.getElementById('manual-part4-questions')?.value || 0);
  const p4 = parseFloat(document.getElementById('manual-part4-points')?.value || 0);

  const totalQ = q1 + q2 + q3 + q4;
  const totalP = Math.round((p1 + p2 + p3 + p4) * 100) / 100;

  const qEl = document.getElementById('manual-summary-q');
  const pEl = document.getElementById('manual-summary-p');
  const badgeEl = document.getElementById('manual-summary-badge');

  if (qEl) qEl.innerText = totalQ;
  if (pEl) pEl.innerText = totalP.toFixed(1);

  if (badgeEl) {
    if (Math.abs(totalP - 10.0) < 0.01) {
      badgeEl.className = "px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold";
      badgeEl.innerText = "✅ Đủ 10 điểm";
    } else {
      badgeEl.className = "px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-bold";
      badgeEl.innerText = `⚠️ ${totalP.toFixed(1)}đ (chuẩn 10đ)`;
    }
  }
}

function fillSampleManualSolution() {
  const textarea = document.getElementById('manual-exam-solution');
  if (textarea) {
    textarea.value = 
`📌 BAREM ĐÁP ÁN & HƯỚNG DẪN GIẢI CHI TIẾT CỦA THẦY:
1. PHẦN I (TRẮC NGHIỆM):
- Câu 1: A (Điều kiện căn thức: 2x - 4 >= 0 <=> x >= 2).
- Câu 2: B (Áp dụng định lý Vi-ét: P = c/a = 12).
- Câu 3: A (Hai đường thẳng song song khi m - 1 = 2 <=> m = 3).
- Câu 4: B (Bán kính đường tròn ngoại tiếp R = BC / 2 = 5 cm).

2. PHẦN II (ĐÚNG / SAI):
- Câu 1:
  a) Đúng: Parabol y = -2x^2 đi qua gốc tọa độ O(0; 0) và có bề lõm hướng xuống do a = -2 < 0.
  b) Sai: Do a = -2 < 0 nên hàm số nghịch biến khi x > 0 và đồng biến khi x < 0.
  c) Đúng: Phương trình hoành độ giao điểm là 2x^2 + 2x - 4 = 0.
  d) Đúng: Tọa độ giao điểm là (1; -2) và (-2; -8).

3. PHẦN III (TRẢ LỜI NGẮN):
- Câu 1: Đáp số: 2 (sqrt{(2-sqrt{5})^2} + sqrt{5} = |2-sqrt{5}| + sqrt{5} = 2).
- Câu 2: Đáp số: 4 (Nghiệm kép <=> Delta' = 4 - m = 0 <=> m = 4).
- Câu 3: Đáp số: 5 (Đường sinh hình nón l = sqrt{3^2 + 4^2} = 5 cm).
- Câu 4: Đáp số: 0.75 (tan alpha = 0.6 / 0.8 = 0.75).

4. PHẦN IV (TỰ LUẬN):
- Bài 1 (1.0 điểm):
  + Gọi số xe ban đầu là x chiếc (x nguyên dương, x > 2).
  + Kế hoạch mỗi xe chở: 120/x (tấn). Thực tế mỗi xe chở: 120/(x-2) (tấn).
  + Phương trình: 120/(x-2) - 120/x = 3 <=> x(x-2) = 80 <=> x^2 - 2x - 80 = 0.
  + Giải ra x = 10 (thỏa mãn) hoặc x = -8 (loại).
  + Kết luận: Ban đầu đội có 10 chiếc xe.`;
  }
}

function fillSampleManualYoutube() {
  const input = document.getElementById('manual-exam-youtube');
  if (input) {
    input.value = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    previewYoutubeVideo();
  }
}

function previewYoutubeVideo() {
  const url = document.getElementById('manual-exam-youtube')?.value.trim();
  const box = document.getElementById('manual-youtube-preview-box');
  const iframe = document.getElementById('manual-youtube-iframe');
  if (!box || !iframe) return;

  const embedUrl = getYoutubeEmbedUrl(url);
  if (embedUrl) {
    iframe.src = embedUrl;
    box.classList.remove('hidden');
  } else {
    iframe.src = "";
    box.classList.add('hidden');
  }
}

function openExamViewerModal(examId, category) {
  let exam;
  if (category === 'gifted') {
    exam = (MATH_DATA.giftedExams || []).find(e => e.id === examId);
  } else {
    const listKey = category + 'Reviews';
    const list = MATH_DATA.reviewSections[listKey] || [];
    exam = list.find(e => e.id === examId);
  }

  // Nếu không tìm thấy, lấy đề mẫu đầu tiên
  if (!exam) {
    exam = MATH_DATA.reviewSections.midtermReviews[0];
  }

  currentViewingExam = exam;
  viewerAnswers = { mcq: {}, tf: {}, sa: {}, essay: "" };

  const modal = document.getElementById('modal-exam-viewer');
  if (!modal) return;

  // Cập nhật Header
  document.getElementById('viewer-exam-title').innerText = exam.title;
  document.getElementById('viewer-exam-badge').innerText = exam.badge || "Chuẩn 4 Dạng Mới";
  document.getElementById('viewer-exam-source').innerText = exam.sourceBadge || (exam.youtubeUrl ? "📺 Có Video YouTube" : "🌐 Nguồn: Trên mạng");
  document.getElementById('viewer-exam-meta').innerText = `Thời gian: ${exam.duration} • Thang điểm 10.0 • Barem chi tiết`;
  document.getElementById('viewer-countdown').innerText = exam.duration ? exam.duration.replace(' phút', ':00') : "90:00";

  // Render nội dung
  const container = document.getElementById('viewer-exam-body');
  const sampleBank = MATH_DATA.sample4PartQuestions;
  const embedUrl = exam.youtubeUrl ? getYoutubeEmbedUrl(exam.youtubeUrl) : null;

  container.innerHTML = `
    <!-- VIDEO HƯỚNG DẪN GIẢI YOUTUBE (NẾU CÓ) -->
    ${exam.youtubeUrl ? `
      <div class="p-5 bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl border-2 border-red-300 space-y-3 shadow-sm">
        <div class="flex flex-wrap items-center justify-between gap-2 border-b border-red-200/70 pb-2">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded-xl bg-red-600 text-white flex items-center justify-center shadow-md">
              <i data-lucide="video" class="w-4 h-4"></i>
            </div>
            <div>
              <h4 class="font-black text-red-950 text-sm sm:text-base">Video Thầy Hướng Dẫn Giải Chi Tiết (YouTube)</h4>
              <p class="text-[11px] text-red-700">Thầy chữa từng câu, phân tích lỗi sai và mẹo nhẩm nghiệm nhanh</p>
            </div>
          </div>

          <a href="${exam.youtubeUrl}" target="_blank" rel="noopener noreferrer" 
            class="px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-xl flex items-center gap-1.5 transition shadow-sm">
            <i data-lucide="youtube" class="w-4 h-4"></i> Mở trên YouTube
          </a>
        </div>

        ${embedUrl ? `
          <div class="rounded-2xl overflow-hidden shadow-lg border border-red-200 aspect-video bg-black max-w-2xl mx-auto">
            <iframe class="w-full h-full" src="${embedUrl}" title="Video hướng dẫn giải" frameborder="0" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
          </div>
        ` : `
          <div class="p-3 bg-white rounded-xl border border-red-200 text-center text-xs">
            <span class="font-mono text-red-700">${exam.youtubeUrl}</span>
          </div>
        `}
      </div>
    ` : ''}

    <!-- BAREM ĐÁP ÁN & HƯỚNG DẪN GIẢI CỦA THẦY (NẾU CÓ) -->
    ${exam.teacherSolution ? `
      <div class="p-4 bg-purple-50/80 rounded-2xl border border-purple-200 space-y-2.5">
        <div class="flex items-center justify-between">
          <h4 class="font-bold text-purple-950 text-xs sm:text-sm flex items-center gap-1.5">
            <i data-lucide="file-check" class="w-4 h-4 text-purple-600"></i>
            Đáp Án & Hướng Dẫn Giải Chi Tiết Của Thầy
          </h4>
          <button type="button" onclick="document.getElementById('viewer-teacher-sol-box').classList.toggle('hidden')" 
            class="px-3 py-1 bg-purple-600 text-white rounded-lg font-bold text-xs hover:bg-purple-700 transition flex items-center gap-1 shadow-sm">
            <i data-lucide="eye" class="w-3.5 h-3.5"></i> Ẩn / Hiện Barem Lời Giải
          </button>
        </div>
        <div id="viewer-teacher-sol-box" class="p-4 bg-white rounded-xl border border-purple-100 text-xs text-slate-800 whitespace-pre-line font-mono leading-relaxed shadow-sm">
          ${exam.teacherSolution}
        </div>
      </div>
    ` : ''}

    <!-- PHẦN I: TRẮC NGHIỆM NHIỀU LỰA CHỌN -->
    <div class="p-5 bg-blue-50/40 rounded-2xl border border-blue-200 space-y-4">
      <div class="flex items-center justify-between border-b border-blue-200 pb-2">
        <h4 class="font-black text-blue-900 text-sm sm:text-base flex items-center gap-2">
          <span class="w-6 h-6 rounded-full bg-blue-600 text-white inline-flex items-center justify-center text-xs">I</span>
          PHẦN I: TRẮC NGHIỆM NHIỀU LỰA CHỌN (Mỗi câu chọn 01 phương án đúng)
        </h4>
        <span class="text-xs font-bold text-blue-700 bg-blue-100 px-2.5 py-0.5 rounded-full">3.0 Điểm</span>
      </div>

      <div class="space-y-4">
        ${sampleBank.part1_mcq.map((q, idx) => `
          <div class="p-4 bg-white rounded-xl border border-blue-100 space-y-2.5 shadow-sm" id="viewer-mcq-box-${q.id}">
            <div class="flex items-start justify-between gap-2">
              <div class="font-bold text-slate-800 text-xs sm:text-sm math-content">
                <strong>Câu ${idx + 1}:</strong> ${q.question}
              </div>
              <span class="text-[10px] text-slate-400 font-mono shrink-0">${q.points}đ</span>
            </div>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
              ${q.options.map(opt => `
                <button type="button" onclick="selectViewerMCQ('${q.id}', '${opt.key}')" 
                  id="viewer-btn-${q.id}-${opt.key}"
                  class="viewer-mcq-opt text-left p-2.5 rounded-xl border border-slate-200 hover:border-blue-400 hover:bg-blue-50/50 text-xs transition flex items-center gap-2">
                  <span class="w-5 h-5 rounded-full bg-slate-100 text-slate-700 font-bold text-[11px] inline-flex items-center justify-center shrink-0">${opt.key}</span>
                  <span class="math-content text-slate-700">${opt.text}</span>
                </button>
              `).join('')}
            </div>

            <div class="text-[10px] text-slate-400 italic">Nguồn câu hỏi: ${q.source || 'Ngân hàng đề thi chuẩn'}</div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- PHẦN II: TRẮC NGHIỆM ĐÚNG / SAI -->
    <div class="p-5 bg-emerald-50/40 rounded-2xl border border-emerald-200 space-y-4">
      <div class="flex items-center justify-between border-b border-emerald-200 pb-2">
        <h4 class="font-black text-emerald-900 text-sm sm:text-base flex items-center gap-2">
          <span class="w-6 h-6 rounded-full bg-emerald-600 text-white inline-flex items-center justify-center text-xs">II</span>
          PHẦN II: TRẮC NGHIỆM ĐÚNG / SAI (Thí sinh chọn Đúng hoặc Sai cho mỗi ý a, b, c, d)
        </h4>
        <span class="text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full">4.0 Điểm</span>
      </div>

      <div class="space-y-4">
        ${sampleBank.part2_trueFalse.map((q, idx) => `
          <div class="p-4 bg-white rounded-xl border border-emerald-100 space-y-3 shadow-sm">
            <div class="flex items-start justify-between gap-2">
              <div class="font-bold text-slate-800 text-xs sm:text-sm math-content">
                <strong>Câu ${idx + 1}:</strong> ${q.question}
              </div>
              <span class="text-[10px] text-slate-400 font-mono shrink-0">${q.points}đ</span>
            </div>

            <div class="space-y-2 pt-1">
              ${q.subItems.map(sub => `
                <div class="p-2.5 rounded-xl border border-slate-100 bg-slate-50/70 flex flex-wrap items-center justify-between gap-2 text-xs">
                  <div class="flex items-start gap-2 flex-1">
                    <span class="font-bold text-emerald-800 shrink-0">(${sub.key})</span>
                    <span class="math-content text-slate-700">${sub.text}</span>
                  </div>

                  <div class="flex items-center gap-2 shrink-0">
                    <button type="button" onclick="selectViewerTF('${q.id}', '${sub.key}', true)" 
                      id="viewer-tf-${q.id}-${sub.key}-true"
                      class="px-3 py-1 rounded-lg border border-slate-200 hover:border-emerald-500 font-bold text-[11px] text-slate-600 transition">
                      Đúng
                    </button>
                    <button type="button" onclick="selectViewerTF('${q.id}', '${sub.key}', false)" 
                      id="viewer-tf-${q.id}-${sub.key}-false"
                      class="px-3 py-1 rounded-lg border border-slate-200 hover:border-red-500 font-bold text-[11px] text-slate-600 transition">
                      Sai
                    </button>
                  </div>
                </div>
              `).join('')}
            </div>

            <div class="text-[10px] text-slate-400 italic">Nguồn câu hỏi: ${q.source || 'Ngân hàng đề thi Chuyên'}</div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- PHẦN III: TRẢ LỜI NGẮN -->
    <div class="p-5 bg-amber-50/40 rounded-2xl border border-amber-200 space-y-4">
      <div class="flex items-center justify-between border-b border-amber-200 pb-2">
        <h4 class="font-black text-amber-900 text-sm sm:text-base flex items-center gap-2">
          <span class="w-6 h-6 rounded-full bg-amber-600 text-white inline-flex items-center justify-center text-xs">III</span>
          PHẦN III: TRẮC NGHIỆM TRẢ LỜI NGẮN (Thí sinh điền đáp số hoặc kết quả số)
        </h4>
        <span class="text-xs font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full">2.0 Điểm</span>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        ${sampleBank.part3_shortAnswer.map((q, idx) => `
          <div class="p-4 bg-white rounded-xl border border-amber-100 space-y-2.5 shadow-sm">
            <div class="flex items-start justify-between gap-2">
              <div class="font-bold text-slate-800 text-xs sm:text-sm math-content">
                <strong>Câu ${idx + 1}:</strong> ${q.question}
              </div>
              <span class="text-[10px] text-slate-400 font-mono shrink-0">${q.points}đ</span>
            </div>

            <div class="flex items-center gap-2 pt-1">
              <span class="text-xs font-semibold text-slate-600">Đáp số:</span>
              <input type="text" id="viewer-sa-input-${q.id}" placeholder="Nhập số..." 
                class="flex-1 p-2 border border-slate-300 rounded-lg text-xs font-bold text-amber-800 focus:ring-1 focus:ring-amber-500 font-mono">
              <button type="button" onclick="checkViewerSA('${q.id}', '${q.correctAnswer}', '${q.hint}')" 
                class="px-3 py-2 bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs rounded-lg transition">
                Kiểm tra
              </button>
            </div>

            <div id="viewer-sa-feedback-${q.id}" class="text-[11px] hidden pt-1"></div>
            <div class="text-[10px] text-slate-400 italic">Nguồn: ${q.source || 'Ngân hàng đề Sở GD&ĐT'}</div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- PHẦN IV: TỰ LUẬN -->
    <div class="p-5 bg-purple-50/40 rounded-2xl border border-purple-200 space-y-4">
      <div class="flex items-center justify-between border-b border-purple-200 pb-2">
        <h4 class="font-black text-purple-900 text-sm sm:text-base flex items-center gap-2">
          <span class="w-6 h-6 rounded-full bg-purple-600 text-white inline-flex items-center justify-center text-xs">IV</span>
          PHẦN IV: TỰ LUẬN (Trình bày chi tiết lời giải và kết luận)
        </h4>
        <span class="text-xs font-bold text-purple-700 bg-purple-100 px-2.5 py-0.5 rounded-full">1.0 Điểm</span>
      </div>

      ${sampleBank.part4_essay.map((q, idx) => `
        <div class="p-4 bg-white rounded-xl border border-purple-100 space-y-3 shadow-sm">
          <div class="flex items-start justify-between gap-2">
            <div class="font-bold text-slate-800 text-xs sm:text-sm math-content whitespace-pre-line leading-relaxed">
              <strong>Bài ${idx + 1}:</strong> ${q.question}
            </div>
            <span class="text-[10px] text-slate-400 font-mono shrink-0">${q.points}đ</span>
          </div>

          <div>
            <label class="block text-xs font-semibold text-slate-700 mb-1">Khu vực trình bày bài giải tự luận:</label>
            <textarea id="viewer-essay-input" rows="4" 
              class="w-full p-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 text-xs font-mono"
              placeholder="Học sinh gõ các bước biến đổi phương trình, hệ số và kết luận tại đây..."></textarea>
          </div>

          <div class="flex items-center justify-between pt-1">
            <button type="button" onclick="toggleViewerEssaySolution('${q.id}')" 
              class="px-3 py-1.5 bg-purple-100 hover:bg-purple-200 text-purple-800 font-bold text-xs rounded-lg transition flex items-center gap-1">
              <i data-lucide="eye" class="w-3.5 h-3.5"></i> Xem Barem & Hướng Dẫn Giải Chi Tiết
            </button>
            <span class="text-[10px] text-slate-400 italic">${q.source || 'Đề tuyển sinh vào 10'}</span>
          </div>

          <div id="viewer-essay-sol-${q.id}" class="hidden p-3.5 bg-purple-50/80 rounded-xl border border-purple-200 text-xs text-slate-700 space-y-1.5 whitespace-pre-line math-content">
            <strong class="text-purple-900 block font-bold">💡 Barem Lời Giải Mẫu Của Thầy:</strong>
            ${q.solution}
          </div>
        </div>
      `).join('')}
    </div>
  `;

  modal.classList.remove('hidden');
  refreshIconsAndMath();
}

function closeExamViewerModal() {
  const modal = document.getElementById('modal-exam-viewer');
  if (modal) modal.classList.add('hidden');
}

function selectViewerMCQ(qId, key) {
  viewerAnswers.mcq[qId] = key;
  const box = document.getElementById(`viewer-mcq-box-${qId}`);
  if (!box) return;

  const buttons = box.querySelectorAll('.viewer-mcq-opt');
  buttons.forEach(btn => {
    btn.className = "viewer-mcq-opt text-left p-2.5 rounded-xl border border-slate-200 hover:border-blue-400 hover:bg-blue-50/50 text-xs transition flex items-center gap-2";
  });

  const selectedBtn = document.getElementById(`viewer-btn-${qId}-${key}`);
  if (selectedBtn) {
    selectedBtn.className = "viewer-mcq-opt text-left p-2.5 rounded-xl border-2 border-blue-600 bg-blue-50 font-bold text-blue-900 text-xs transition flex items-center gap-2 shadow-sm";
  }
}

function selectViewerTF(qId, subKey, boolVal) {
  if (!viewerAnswers.tf[qId]) viewerAnswers.tf[qId] = {};
  viewerAnswers.tf[qId][subKey] = boolVal;

  const btnTrue = document.getElementById(`viewer-tf-${qId}-${subKey}-true`);
  const btnFalse = document.getElementById(`viewer-tf-${qId}-${subKey}-false`);

  if (boolVal) {
    btnTrue.className = "px-3 py-1 rounded-lg border-2 border-emerald-600 bg-emerald-600 text-white font-bold text-[11px] transition shadow-sm";
    btnFalse.className = "px-3 py-1 rounded-lg border border-slate-200 font-medium text-[11px] text-slate-500 hover:border-red-400 transition";
  } else {
    btnTrue.className = "px-3 py-1 rounded-lg border border-slate-200 font-medium text-[11px] text-slate-500 hover:border-emerald-400 transition";
    btnFalse.className = "px-3 py-1 rounded-lg border-2 border-red-600 bg-red-600 text-white font-bold text-[11px] transition shadow-sm";
  }
}

function checkViewerSA(qId, correctAnswer, hint) {
  const input = document.getElementById(`viewer-sa-input-${qId}`);
  const feedback = document.getElementById(`viewer-sa-feedback-${qId}`);
  if (!input || !feedback) return;

  const userVal = input.value.trim();
  feedback.classList.remove('hidden');

  if (userVal === correctAnswer) {
    feedback.className = "text-[11px] text-emerald-700 font-bold p-2 bg-emerald-50 rounded-lg border border-emerald-200 flex items-center gap-1.5";
    feedback.innerHTML = `<i data-lucide="check-circle" class="w-4 h-4"></i> Chính xác! Đáp số là ${correctAnswer}.`;
  } else {
    feedback.className = "text-[11px] text-red-700 font-medium p-2 bg-red-50 rounded-lg border border-red-200";
    feedback.innerHTML = `Chưa chính xác! Đáp số đúng là <strong>${correctAnswer}</strong>. <br><span class="text-slate-600">Gợi ý: ${hint}</span>`;
  }
  refreshIconsAndMath();
}

function toggleViewerEssaySolution(qId) {
  const box = document.getElementById(`viewer-essay-sol-${qId}`);
  if (box) box.classList.toggle('hidden');
  refreshIconsAndMath();
}

function submitExamViewer() {
  alert("🎉 ĐÃ NỘP BÀI THÀNH CÔNG!\n\n- Hệ thống đã tự động chấm các phần Trắc nghiệm, Đúng/Sai, Trả lời ngắn.\n- Bài tự luận đã được chuyển đến giao diện chấm bài của Thầy.\n- Báo cáo kết quả và barem chi tiết đã sẵn sàng!");
}

function printOrExportExam() {
  window.print();
}

function simulateExamFileUpload() {
  const status = document.getElementById('manual-file-uploaded-status');
  if (status) status.classList.remove('hidden');
}

function executeManualUploadExam() {
  const title = document.getElementById('manual-exam-title').value.trim();
  const category = document.getElementById('manual-exam-category').value; // 'midterm' | 'finalterm' | 'chapter'
  const grade = parseInt(document.getElementById('manual-exam-grade').value);
  const duration = parseInt(document.getElementById('manual-exam-duration-num')?.value) || 90;
  const summary = document.getElementById('manual-exam-summary').value.trim();
  const solution = document.getElementById('manual-exam-solution')?.value.trim();
  const youtubeUrl = document.getElementById('manual-exam-youtube')?.value.trim();

  // Đọc 4 phần do Thầy thiết lập
  const q1 = parseInt(document.getElementById('manual-part1-questions')?.value || 0);
  const p1 = parseFloat(document.getElementById('manual-part1-points')?.value || 0);
  const q2 = parseInt(document.getElementById('manual-part2-questions')?.value || 0);
  const p2 = parseFloat(document.getElementById('manual-part2-points')?.value || 0);
  const q3 = parseInt(document.getElementById('manual-part3-questions')?.value || 0);
  const p3 = parseFloat(document.getElementById('manual-part3-points')?.value || 0);
  const q4 = parseInt(document.getElementById('manual-part4-questions')?.value || 0);
  const p4 = parseFloat(document.getElementById('manual-part4-points')?.value || 0);

  const totalQ = q1 + q2 + q3 + q4;
  const totalP = Math.round((p1 + p2 + p3 + p4) * 10) / 10;

  if (!title) {
    alert("Vui lòng nhập Tên đề thi ôn tập!");
    return;
  }

  const newExamId = 'manual_' + Date.now();
  const newExam = {
    id: newExamId,
    grade: grade,
    title: title,
    badge: youtubeUrl ? "📺 Có Video YouTube" : "Thầy Tự Biên Soạn",
    badgeColor: "bg-amber-600",
    authorType: "teacher",
    sourceBadge: youtubeUrl ? "📺 Video YouTube + Đề của Thầy" : "📚 Nguồn: Thầy tự biên soạn",
    summary: summary || `Đề thi do Thầy đưa lên hệ thống. Gồm ${totalQ} câu (${totalP}đ). Có barem đáp án, lời giải chi tiết và video hướng dẫn giải.`,
    duration: `${duration} phút`,
    examCount: `${totalQ} câu (${totalP}đ)`,
    format4Part: true,
    youtubeUrl: youtubeUrl || null,
    teacherSolution: solution || null,
    partsConfig: {
      part1: { name: "Phần I: Trắc nghiệm nhiều lựa chọn", count: q1, points: p1 },
      part2: { name: "Phần II: Đúng / Sai", count: q2, points: p2 },
      part3: { name: "Phần III: Trả lời ngắn", count: q3, points: p3 },
      part4: { name: "Phần IV: Tự luận", count: q4, points: p4 }
    },
    topics: [
      `Phần I: ${q1} câu trắc nghiệm nhiều phương án (${p1}đ)`,
      `Phần II: ${q2} câu trắc nghiệm Đúng/Sai 4 ý (${p2}đ)`,
      `Phần III: ${q3} câu điền đáp số ngắn (${p3}đ)`,
      `Phần IV: ${q4} bài tự luận giải chi tiết (${p4}đ)`,
      youtubeUrl ? `Video chữa đề: ${youtubeUrl}` : "Kèm barem đáp án chi tiết của Thầy"
    ]
  };

  const listKey = category + 'Reviews';
  if (!MATH_DATA.reviewSections[listKey]) {
    MATH_DATA.reviewSections[listKey] = [];
  }
  MATH_DATA.reviewSections[listKey].unshift(newExam);

  closeManualUploadModal();
  document.getElementById('manual-exam-title').value = '';
  document.getElementById('manual-exam-summary').value = '';
  if (document.getElementById('manual-exam-solution')) document.getElementById('manual-exam-solution').value = '';
  if (document.getElementById('manual-exam-youtube')) document.getElementById('manual-exam-youtube').value = '';
  const status = document.getElementById('manual-file-uploaded-status');
  if (status) status.classList.add('hidden');
  const ytPreview = document.getElementById('manual-youtube-preview-box');
  if (ytPreview) ytPreview.classList.add('hidden');

  switchReviewSubTab(category);

  if (confirm(`🎉 XUẤT BẢN THÀNH CÔNG!\n\nĐã đưa đề thi "${title}" lên web:\n- Thời gian: ${duration} phút\n- Cấu trúc: ${totalQ} câu (${totalP} điểm)\n- Video YouTube: ${youtubeUrl ? 'Có video chữa đề' : 'Chưa gắn'}\n- Đáp án & Hướng dẫn: Đã tích hợp đầy đủ.\n\nThầy có muốn MỞ XEM NGAY BÀI THI KÈM VIDEO YOUTUBE KHÔNG?`)) {
    openExamViewerModal(newExamId, category);
  }
}



// ==========================================
// CHUYÊN MỤC: HỌC SINH GIỎI & LUYỆN THI CHUYÊN
// ==========================================
let currentGiftedSubTab = 'topics';

function renderAttachmentsHtml(attachments) {
  if (!attachments || attachments.length === 0) return '';
  return `
    <div class="pt-3 border-t border-slate-100 space-y-2">
      <div class="flex items-center gap-1.5 text-[11px] font-black uppercase text-slate-500 tracking-wider">
        <i data-lucide="paperclip" class="w-3.5 h-3.5 text-purple-600"></i> Tệp Đính Kèm Tải Về:
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
        ${attachments.map(att => `
          <div class="flex items-center justify-between p-2.5 bg-slate-50 hover:bg-purple-50/70 border border-slate-200 hover:border-purple-300 rounded-xl transition group">
            <div class="flex items-center gap-2 overflow-hidden pr-2">
              <span class="w-7 h-7 rounded-lg ${att.type === 'pdf' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'} flex items-center justify-center shrink-0 font-bold text-[10px]">
                <i data-lucide="${att.type === 'pdf' ? 'file-text' : 'file'}" class="w-4 h-4"></i>
              </span>
              <div class="truncate">
                <p class="text-xs font-bold text-slate-800 truncate">${att.name}</p>
                <span class="text-[10px] text-slate-500">${att.size || 'Tài liệu'}</span>
              </div>
            </div>
            <button type="button" onclick="downloadAttachment('${att.name}')" class="px-2.5 py-1 text-[11px] font-bold text-purple-700 bg-white group-hover:bg-purple-600 group-hover:text-white rounded-lg border border-purple-200 transition shrink-0 flex items-center gap-1">
              <i data-lucide="download" class="w-3 h-3"></i> Tải
            </button>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function downloadAttachment(filename) {
  alert(`📥 ĐÃ BẮT ĐẦU TẢI TỆP ĐÍNH KÈM:\n"${filename}"\n\nThầy chúc các em nghiên cứu kỹ tài liệu để bứt phá điểm 9.5 - 10!`);
}

function switchGiftedSubTab(subTab) {
  currentGiftedSubTab = subTab;
  const topicsBtn = document.getElementById('subtab-gifted-topics-btn');
  const articlesBtn = document.getElementById('subtab-gifted-articles-btn');
  const examsBtn = document.getElementById('subtab-gifted-exams-btn');
  const topicsPanel = document.getElementById('gifted-topics-panel');
  const articlesPanel = document.getElementById('gifted-articles-panel');
  const examsPanel = document.getElementById('gifted-exams-panel');

  const inactiveBtnClass = "flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-black transition flex items-center justify-center gap-1.5 text-slate-700 hover:text-slate-950 whitespace-nowrap";

  if (topicsBtn) topicsBtn.className = inactiveBtnClass;
  if (articlesBtn) articlesBtn.className = inactiveBtnClass;
  if (examsBtn) examsBtn.className = inactiveBtnClass;

  if (topicsPanel) topicsPanel.classList.add('hidden');
  if (articlesPanel) articlesPanel.classList.add('hidden');
  if (examsPanel) examsPanel.classList.add('hidden');

  if (subTab === 'topics') {
    if (topicsBtn) topicsBtn.className = "flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-black transition flex items-center justify-center gap-1.5 bg-white text-amber-900 shadow-sm whitespace-nowrap";
    if (topicsPanel) topicsPanel.classList.remove('hidden');
    renderGiftedTopics();
  } else if (subTab === 'articles') {
    if (articlesBtn) articlesBtn.className = "flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-black transition flex items-center justify-center gap-1.5 bg-white text-blue-900 shadow-sm whitespace-nowrap";
    if (articlesPanel) articlesPanel.classList.remove('hidden');
    renderGiftedArticles();
  } else {
    if (examsBtn) examsBtn.className = "flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-black transition flex items-center justify-center gap-1.5 bg-white text-purple-900 shadow-sm whitespace-nowrap";
    if (examsPanel) examsPanel.classList.remove('hidden');
    renderGiftedExams();
  }

  refreshIconsAndMath();
}

function renderGiftedTopics() {
  const container = document.getElementById('gifted-topics-list');
  if (!container) return;

  if (!MATH_DATA.giftedTopics || MATH_DATA.giftedTopics.length === 0) {
    container.innerHTML = `
      <div class="col-span-full p-8 text-center bg-white rounded-2xl border border-slate-200">
        <p class="text-sm font-semibold text-slate-500">Chưa có chuyên đề bồi dưỡng nào được tải lên.</p>
      </div>`;
    return;
  }

  container.innerHTML = MATH_DATA.giftedTopics.map((topic, idx) => {
    const formulasHtml = (topic.keyFormulas || []).map(f => `
      <li class="bg-amber-50/70 p-2.5 rounded-xl border border-amber-200/60 font-mono text-xs text-slate-900">${f}</li>
    `).join('');

    const examplesHtml = (topic.examples || []).map((ex, exIdx) => `
      <div class="border border-slate-200 rounded-xl p-3.5 bg-slate-50/80 space-y-2">
        <div class="font-bold text-xs text-slate-800 flex items-start justify-between gap-2">
          <span>${ex.title}</span>
          <button type="button" onclick="toggleGiftedSolution('sol-${topic.id}-${exIdx}')" class="shrink-0 px-2.5 py-1 bg-amber-100 hover:bg-amber-200 text-amber-900 rounded-lg text-[11px] font-bold transition">
            Xem Lời Giải
          </button>
        </div>
        <div id="sol-${topic.id}-${exIdx}" class="hidden pt-2 border-t border-slate-200 text-xs text-slate-700 whitespace-pre-line bg-white p-3 rounded-lg border border-amber-100">
          ${ex.solution}
        </div>
      </div>
    `).join('');

    const attachmentsHtml = renderAttachmentsHtml(topic.attachments);

    return `
      <div class="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition space-y-4">
        <div class="flex items-start justify-between gap-3">
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black ${topic.badgeColor || 'bg-amber-100 text-amber-900 border border-amber-300'}">
            <i data-lucide="sparkles" class="w-3.5 h-3.5"></i> ${topic.badge || 'Chuyên Đề 9.5+'}
          </span>
          <span class="text-xs font-bold text-slate-500">Toán Lớp ${topic.grade || 9}</span>
        </div>

        <div>
          <h4 class="text-base sm:text-lg font-black text-slate-900 leading-snug">${topic.title}</h4>
          <p class="text-xs text-amber-700 font-bold mt-1">${topic.target || 'Mục tiêu điểm 10'}</p>
        </div>

        <p class="text-xs text-slate-600 leading-relaxed">${topic.description || ''}</p>

        ${formulasHtml ? `
        <div class="space-y-1.5">
          <p class="text-[11px] font-black uppercase tracking-wider text-slate-500 flex items-center gap-1">
            <i data-lucide="book-open" class="w-3.5 h-3.5 text-amber-600"></i> Công thức & Kỹ thuật trọng tâm:
          </p>
          <ul class="space-y-1.5">${formulasHtml}</ul>
        </div>` : ''}

        ${examplesHtml ? `
        <div class="space-y-2 pt-2 border-t border-slate-100">
          <p class="text-[11px] font-black uppercase tracking-wider text-slate-500 flex items-center gap-1">
            <i data-lucide="award" class="w-3.5 h-3.5 text-purple-600"></i> Bài toán mẫu phân tích đỉnh cao:
          </p>
          <div class="space-y-2">${examplesHtml}</div>
        </div>` : ''}

        ${attachmentsHtml}

        ${topic.youtubeUrl ? `
        <div class="pt-2">
          <a href="${topic.youtubeUrl}" target="_blank" class="inline-flex items-center gap-2 px-3.5 py-2 bg-red-50 hover:bg-red-100 text-red-700 font-bold text-xs rounded-xl border border-red-200 transition">
            <i data-lucide="youtube" class="w-4 h-4 text-red-600"></i> Xem Video Thầy Chữa Chuyên Đề
          </a>
        </div>` : ''}
      </div>
    `;
  }).join('');

  refreshIconsAndMath();
}

function renderGiftedArticles() {
  const container = document.getElementById('gifted-articles-list');
  if (!container) return;

  if (!MATH_DATA.giftedArticles || MATH_DATA.giftedArticles.length === 0) {
    container.innerHTML = `
      <div class="col-span-full p-8 text-center bg-white rounded-2xl border border-slate-200">
        <p class="text-sm font-semibold text-slate-500">Chưa có bài viết chuyên sâu nào được đăng tải.</p>
      </div>`;
    return;
  }

  container.innerHTML = MATH_DATA.giftedArticles.map((art) => {
    const insightsHtml = (art.keyInsights || []).map(ins => `
      <li class="bg-blue-50/70 p-2.5 rounded-xl border border-blue-200/60 font-medium text-xs text-slate-800 flex items-start gap-2">
        <i data-lucide="check-circle" class="w-4 h-4 text-blue-600 shrink-0 mt-0.5"></i>
        <span>${ins}</span>
      </li>
    `).join('');

    const attachmentsHtml = renderAttachmentsHtml(art.attachments);

    return `
      <div class="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition space-y-4">
        <div class="flex items-start justify-between gap-3">
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black ${art.badgeColor || 'bg-blue-100 text-blue-900 border border-blue-300'}">
            <i data-lucide="newspaper" class="w-3.5 h-3.5"></i> ${art.badge || 'Bài Viết Chuyên Sâu'}
          </span>
          <span class="text-xs font-bold text-slate-500">${art.readTime || '5 phút đọc'}</span>
        </div>

        <div>
          <h4 class="text-base sm:text-lg font-black text-slate-900 leading-snug">${art.title}</h4>
          <p class="text-[11px] text-slate-500 mt-1">Tác giả: <strong class="text-indigo-600">${art.author || 'Thầy Giáo'}</strong> • Ngày đăng: ${art.date || '06/11/2026'}</p>
        </div>

        <p class="text-xs text-slate-600 leading-relaxed">${art.summary || ''}</p>

        ${insightsHtml ? `
        <div class="space-y-1.5">
          <p class="text-[11px] font-black uppercase tracking-wider text-slate-500 flex items-center gap-1">
            <i data-lucide="lightbulb" class="w-3.5 h-3.5 text-blue-600"></i> Các phân tích & Lưu ý cốt lõi:
          </p>
          <ul class="space-y-1.5">${insightsHtml}</ul>
        </div>` : ''}

        ${attachmentsHtml}
      </div>
    `;
  }).join('');

  refreshIconsAndMath();
}

function toggleGiftedSolution(id) {
  const el = document.getElementById(id);
  if (el) {
    el.classList.toggle('hidden');
    refreshIconsAndMath();
  }
}

function renderGiftedExams() {
  const container = document.getElementById('gifted-exams-list');
  if (!container) return;

  if (!MATH_DATA.giftedExams || MATH_DATA.giftedExams.length === 0) {
    container.innerHTML = `
      <div class="p-8 text-center bg-white rounded-2xl border border-slate-200">
        <p class="text-sm font-semibold text-slate-500">Chưa có đề thi học sinh giỏi nào.</p>
      </div>`;
    return;
  }

  container.innerHTML = MATH_DATA.giftedExams.map((exam) => {
    const embedUrl = exam.youtubeUrl ? getYoutubeEmbedUrl(exam.youtubeUrl) : null;
    const attachmentsHtml = renderAttachmentsHtml(exam.attachments);

    return `
      <div class="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-lg transition space-y-4">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <div class="flex items-center gap-2">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black ${exam.badgeColor || 'bg-purple-100 text-purple-900 border border-purple-300'}">
              <i data-lucide="trophy" class="w-3.5 h-3.5"></i> ${exam.badge || 'Thi Chuyên'}
            </span>
            <span class="text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">Năm ${exam.year || '2025 - 2026'}</span>
          </div>
          <span class="text-xs font-black text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 flex items-center gap-1.5">
            <i data-lucide="clock" class="w-3.5 h-3.5"></i> Thời gian: ${exam.duration || '150 phút'}
          </span>
        </div>

        <div>
          <h4 class="text-base sm:text-xl font-black text-slate-900 leading-snug">${exam.title}</h4>
          <p class="text-xs sm:text-sm text-slate-600 mt-1">${exam.description || ''}</p>
        </div>

        <div class="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1">
          <span class="font-bold text-slate-900">Cấu trúc đề thi:</span> ${exam.questionsSummary || 'Gồm 5 bài toán tự luận lớn phân loại học sinh giỏi'}
        </div>

        ${embedUrl ? `
        <div class="space-y-2 pt-2">
          <div class="flex items-center justify-between">
            <span class="text-xs font-black uppercase tracking-wider text-red-600 flex items-center gap-1.5">
              <i data-lucide="video" class="w-4 h-4"></i> Video Bài Giảng Chữa Chi Tiết Của Thầy:
            </span>
            <a href="${exam.youtubeUrl}" target="_blank" class="text-xs font-bold text-red-600 hover:underline flex items-center gap-1">
              Xem trên YouTube <i data-lucide="external-link" class="w-3 h-3"></i>
            </a>
          </div>
          <div class="relative w-full aspect-video rounded-2xl overflow-hidden shadow-md bg-slate-900">
            <iframe class="w-full h-full" src="${embedUrl}" title="${exam.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>` : ''}

        ${attachmentsHtml}

        <div class="flex flex-wrap items-center justify-end gap-3 pt-3 border-t border-slate-100">
          <button onclick="downloadAttachment('${(exam.attachments && exam.attachments[0]) ? exam.attachments[0].name : (exam.title + '.pdf')}')" class="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-black text-xs transition flex items-center gap-1.5">
            <i data-lucide="download" class="w-4 h-4"></i> Tải Đề & Barem PDF
          </button>
          <button onclick="openExamViewerModal('${exam.id}', 'gifted')" class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-black text-xs shadow-md transition flex items-center gap-1.5">
            <i data-lucide="pencil" class="w-4 h-4"></i> Mở Phòng Luyện Đề Này
          </button>
        </div>
      </div>
    `;
  }).join('');

  refreshIconsAndMath();
}

function openGiftedUploadModal() {
  const m = document.getElementById('modal-upload-gifted-item');
  if (m) m.classList.remove('hidden');
}

function closeGiftedUploadModal() {
  const m = document.getElementById('modal-upload-gifted-item');
  if (m) m.classList.add('hidden');
}

function fillSampleGiftedItem() {
  const title = document.getElementById('gifted-upload-title');
  const type = document.getElementById('gifted-upload-type');
  const desc = document.getElementById('gifted-upload-desc');
  const content = document.getElementById('gifted-upload-content');
  const yt = document.getElementById('gifted-upload-youtube');
  const att = document.getElementById('gifted-upload-attachment');

  if (title) title.value = "Chuyên Đề 5: Bất Đẳng Thức Schur & Kỹ Thuật Phân Tích SOS";
  if (type) type.value = "topic";
  if (desc) desc.value = "Kỹ thuật phân tích tổng các bình phương SOS (Sum of Squares) kết hợp bất đẳng thức Schur bậc 3 đối xứng ba biến, chuyên trị các bài toán cực trị 10 điểm trong kỳ thi Học Sinh Giỏi Tỉnh/TP và tuyển sinh vào lớp 10 Chuyên.";
  if (content) content.value = `**Định lý Schur bậc 3:** Với mọi $a, b, c \\ge 0$ và $r > 0$:\n$$a^r(a-b)(a-c) + b^r(b-c)(b-a) + c^r(c-a)(c-b) \\ge 0$$\nKhi $r=1$: $a^3+b^3+c^3 + 3abc \\ge ab(a+b) + bc(b+c) + ca(c+a)$.\n\n**Bài toán mẫu:** Cho $a,b,c > 0$ thỏa mãn $a+b+c=3$. Chứng minh:\n$$\\frac{a^2}{b} + \\frac{b^2}{c} + \\frac{c^2}{a} + \\frac{9abc}{a^2+b^2+c^2} \\ge 6$$\n*(Lời giải sử dụng bổ đề Cauchy-Schwarz và Schur bậc 3).*`;
  if (att) att.value = "Chuyen_De_Bat_Dang_Thuc_Schur_SOS_Diem_10.pdf (2.6 MB)";
  if (yt) yt.value = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}

function executeUploadGiftedItem(event) {
  if (event) event.preventDefault();
  const title = document.getElementById('gifted-upload-title')?.value.trim();
  const type = document.getElementById('gifted-upload-type')?.value || 'topic';
  const grade = parseInt(document.getElementById('gifted-upload-grade')?.value || 9);
  const badge = document.getElementById('gifted-upload-badge')?.value.trim() || 'Mục tiêu 9.5 - 10đ';
  const desc = document.getElementById('gifted-upload-desc')?.value.trim();
  const content = document.getElementById('gifted-upload-content')?.value.trim();
  const youtubeUrl = document.getElementById('gifted-upload-youtube')?.value.trim();
  const attachmentName = document.getElementById('gifted-upload-attachment')?.value.trim();

  if (!title) {
    alert("Vui lòng nhập tiêu đề tài liệu!");
    return;
  }

  const customAttachments = attachmentName ? [
    { name: attachmentName, size: "2.4 MB", type: attachmentName.endsWith('.docx') ? 'docx' : 'pdf' }
  ] : [];

  if (type === 'topic') {
    const newTopic = {
      id: 'gifted-topic-' + Date.now(),
      grade: grade,
      title: title,
      target: badge,
      badge: "Chuyên Đề Mới",
      badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
      description: desc,
      keyFormulas: [
        "Công thức trọng tâm do Thầy biên soạn cho chuyên đề bồi dưỡng"
      ],
      examples: [
        {
          title: "Bài toán minh họa & Kỹ thuật tư duy giải:",
          solution: content || "Chi tiết lời giải và phân tích từng bước đã được Thầy cập nhật."
        }
      ],
      attachments: customAttachments,
      youtubeUrl: youtubeUrl || null
    };
    if (!MATH_DATA.giftedTopics) MATH_DATA.giftedTopics = [];
    MATH_DATA.giftedTopics.unshift(newTopic);
    switchGiftedSubTab('topics');
    alert(`Đã thêm thành công Chuyên đề: "${title}" vào Chuyên mục Học Sinh Giỏi!`);
  } else if (type === 'article') {
    const newArticle = {
      id: 'garticle-' + Date.now(),
      title: title,
      author: "Thầy Giáo",
      date: new Date().toLocaleDateString('vi-VN'),
      readTime: "7 phút đọc",
      badge: badge || "Bài Viết Mới",
      badgeColor: "bg-blue-100 text-blue-900 border-blue-300",
      summary: desc,
      keyInsights: [
        content || "Nội dung phân tích phương pháp tư duy và lưu ý giải toán do Thầy biên soạn."
      ],
      attachments: customAttachments
    };
    if (!MATH_DATA.giftedArticles) MATH_DATA.giftedArticles = [];
    MATH_DATA.giftedArticles.unshift(newArticle);
    switchGiftedSubTab('articles');
    alert(`Đã thêm thành công Bài viết: "${title}" vào Chuyên mục Học Sinh Giỏi!`);
  } else {
    const newExam = {
      id: 'gexam-' + Date.now(),
      title: title,
      year: "2025 - 2026",
      grade: grade,
      duration: "150 phút",
      badge: badge.includes('Chuyên') ? 'Thi Chuyên' : 'HSG Tỉnh/TP',
      badgeColor: "bg-purple-100 text-purple-900 border-purple-300",
      youtubeUrl: youtubeUrl || null,
      description: desc,
      questionsSummary: content || "Đề thi nâng cao phân loại học sinh giỏi kèm barem và hướng dẫn giải chi tiết của Thầy.",
      attachments: customAttachments
    };
    if (!MATH_DATA.giftedExams) MATH_DATA.giftedExams = [];
    MATH_DATA.giftedExams.unshift(newExam);
    switchGiftedSubTab('exams');
    alert(`Đã thêm thành công Đề thi: "${title}" vào Chuyên mục Học Sinh Giỏi!`);
  }

  closeGiftedUploadModal();
  if (document.getElementById('gifted-upload-title')) document.getElementById('gifted-upload-title').value = '';
  if (document.getElementById('gifted-upload-desc')) document.getElementById('gifted-upload-desc').value = '';
  if (document.getElementById('gifted-upload-content')) document.getElementById('gifted-upload-content').value = '';
  if (document.getElementById('gifted-upload-attachment')) document.getElementById('gifted-upload-attachment').value = '';
  if (document.getElementById('gifted-upload-youtube')) document.getElementById('gifted-upload-youtube').value = '';
}


// ==========================================================================
// 12. CHƯƠNG TRÌNH TOÁN CHUẨN GDPT 2018 (LỚP 6 ĐẾN LỚP 12)
// ==========================================================================
let currentKnttGrade = 9;
let currentKnttSemester = 'all';
let currentKnttSearch = '';

function selectKnttGrade(gradeId) {
  currentKnttGrade = parseInt(gradeId);
  
  // Cập nhật tab được chọn
  for (let g = 6; g <= 12; g++) {
    const tab = document.getElementById(`kntt-tab-g${g}`);
    if (tab) {
      if (g === currentKnttGrade) {
        tab.className = "kntt-grade-tab p-3.5 rounded-2xl border-2 transition text-center group bg-indigo-50/80 border-indigo-600 shadow-md relative scale-102";
      } else {
        tab.className = "kntt-grade-tab p-3.5 rounded-2xl border-2 transition text-center group bg-white border-slate-200 hover:border-slate-300 hover:shadow-xs";
      }
    }
  }

  // Cập nhật tiêu đề & mô tả
  const gData = window.KNTT_CURRICULUM ? window.KNTT_CURRICULUM[currentKnttGrade] : null;
  const titleEl = document.getElementById('kntt-grade-title');
  const descEl = document.getElementById('kntt-grade-desc');
  if (titleEl && gData) {
    titleEl.innerHTML = `<span class="text-indigo-600">${gData.shortTitle}</span>: ${gData.title} <span class="text-xs px-2.5 py-0.5 rounded-full ${gData.badgeColor} border font-bold">${gData.badge}</span>`;
  }
  if (descEl && gData) {
    descEl.innerText = `Chương trình gồm ${gData.totalChapters} Chương với ${gData.totalLessons} Bài học chuẩn GDPT 2018 (Bộ Giáo Dục & Đào Tạo).`;
  }

  renderKnttCurriculum();
  populateLessonNavDropdowns(currentKnttGrade);
}

function filterKnttSemester(sem) {
  currentKnttSemester = sem;
  ['all', 'hk1', 'hk2'].forEach(s => {
    const btn = document.getElementById(`kntt-sem-${s}`);
    if (btn) {
      if (s === sem) {
        btn.className = "kntt-sem-btn px-3 py-1.5 text-xs font-bold rounded-xl bg-white text-indigo-700 shadow-xs transition";
      } else {
        btn.className = "kntt-sem-btn px-3 py-1.5 text-xs font-bold rounded-xl text-slate-600 hover:text-slate-900 transition";
      }
    }
  });
  renderKnttCurriculum();
}

function onKnttSearchInput(query) {
  currentKnttSearch = (query || '').trim().toLowerCase();
  renderKnttCurriculum();
}

function renderKnttCurriculum() {
  const container = document.getElementById('kntt-curriculum-container');
  if (!container) return;

  const gData = window.KNTT_CURRICULUM ? window.KNTT_CURRICULUM[currentKnttGrade] : null;
  if (!gData || !gData.chapters) {
    container.innerHTML = `<div class="p-8 text-center text-slate-500">Đang cập nhật chương trình cho khối lớp này...</div>`;
    return;
  }

  // Lọc theo học kỳ và tìm kiếm
  const filteredChapters = gData.chapters.map(ch => {
    // Lọc học kỳ
    if (currentKnttSemester === 'hk1' && !ch.semester.includes('Học kỳ I') && !ch.semester.includes('Tập 1')) {
      return null;
    }
    if (currentKnttSemester === 'hk2' && !ch.semester.includes('Học kỳ II') && !ch.semester.includes('Tập 2')) {
      return null;
    }

    // Lọc theo từ khóa tìm kiếm
    if (currentKnttSearch) {
      const matchChapter = ch.title.toLowerCase().includes(currentKnttSearch) || ch.summary.toLowerCase().includes(currentKnttSearch);
      const matchedLessons = ch.lessons.filter(l => 
        l.title.toLowerCase().includes(currentKnttSearch) || 
        l.desc.toLowerCase().includes(currentKnttSearch) ||
        (l.formula && l.formula.toLowerCase().includes(currentKnttSearch)) ||
        l.number.toLowerCase().includes(currentKnttSearch)
      );

      if (!matchChapter && matchedLessons.length === 0) {
        return null;
      }
      return {
        ...ch,
        lessons: matchedLessons.length > 0 ? matchedLessons : ch.lessons
      };
    }

    return ch;
  }).filter(Boolean);

  if (filteredChapters.length === 0) {
    container.innerHTML = `
      <div class="bg-white rounded-3xl p-10 text-center border border-slate-200">
        <i data-lucide="search-x" class="w-12 h-12 text-slate-300 mx-auto mb-3"></i>
        <h4 class="font-bold text-slate-700 text-base">Không tìm thấy bài học nào phù hợp</h4>
        <p class="text-xs text-slate-500 mt-1">Vui lòng thử tìm với từ khóa khác (ví dụ: Vi-ét, Thales, Vectơ, Đạo hàm, v.v.)</p>
      </div>
    `;
    refreshIconsAndMath();
    return;
  }

  container.innerHTML = filteredChapters.map(ch => {
    return `
      <div class="bg-white rounded-3xl border border-slate-200/90 shadow-xs hover:shadow-md transition overflow-hidden">
        <!-- TIÊU ĐỀ CHƯƠNG -->
        <div class="bg-gradient-to-r from-slate-50 via-indigo-50/40 to-white px-5 sm:px-6 py-4 border-b border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div class="flex items-center gap-3">
            <span class="w-10 h-10 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-bold text-sm shadow-sm shadow-indigo-200 shrink-0">
              <i data-lucide="${ch.icon || 'book-open'}" class="w-5 h-5"></i>
            </span>
            <div>
              <div class="flex items-center gap-2">
                <span class="text-xs font-black uppercase text-indigo-700 tracking-wider">${ch.number}</span>
                <span class="text-[11px] font-bold text-slate-500 bg-white px-2 py-0.5 rounded-full border border-slate-200">${ch.semester}</span>
              </div>
              <h4 class="text-base sm:text-lg font-black text-slate-900 mt-0.5">${ch.title}</h4>
            </div>
          </div>
          <div class="flex items-center gap-2 self-end sm:self-center">
            <span class="text-xs font-bold text-indigo-800 bg-indigo-50 px-3 py-1 rounded-xl border border-indigo-100 whitespace-nowrap">
              ${ch.lessons.length} Bài học
            </span>
          </div>
        </div>

        <!-- MÔ TẢ TÓM TẮT CHƯƠNG -->
        <div class="px-5 sm:px-6 py-2.5 bg-slate-50/60 text-xs text-slate-600 border-b border-slate-100/60 font-medium flex items-center gap-2">
          <i data-lucide="info" class="w-3.5 h-3.5 text-indigo-500 shrink-0"></i>
          <span>${ch.summary}</span>
        </div>

        <!-- LƯỚI DANH SÁCH BÀI HỌC CỦA CHƯƠNG -->
        <div class="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          ${ch.lessons.map(lesson => {
            const badgeBg = lesson.badge.includes('Trọng tâm') ? 'bg-indigo-100 text-indigo-800 border-indigo-200' :
                            lesson.badge.includes('9+') || lesson.badge.includes('Vào 10') || lesson.badge.includes('THPT') ? 'bg-purple-100 text-purple-800 border-purple-200' :
                            lesson.badge.includes('Thực tế') ? 'bg-emerald-100 text-emerald-800 border-emerald-200' :
                            'bg-slate-100 text-slate-700 border-slate-200';
            return `
              <div class="p-4 rounded-2xl border border-slate-200 hover:border-indigo-400 hover:shadow-md transition bg-gradient-to-b from-white to-slate-50/50 flex flex-col justify-between group">
                <div>
                  <div class="flex items-center justify-between mb-2">
                    <span class="text-xs font-black text-indigo-600 uppercase tracking-wide">${lesson.number}</span>
                    <span class="text-[10px] font-extrabold px-2 py-0.5 rounded-full border ${badgeBg}">
                      ${lesson.badge}
                    </span>
                  </div>
                  <h5 class="font-extrabold text-slate-900 text-sm group-hover:text-indigo-600 transition leading-snug">
                    ${lesson.title}
                  </h5>
                  <p class="text-xs text-slate-500 mt-1.5 leading-relaxed line-clamp-2">
                    ${lesson.desc}
                  </p>
                </div>

                <div class="pt-3 mt-3 border-t border-slate-100 space-y-2.5">
                  ${lesson.formula ? `
                    <div class="p-2 bg-indigo-50/50 rounded-xl border border-indigo-100 text-center overflow-x-auto text-xs text-indigo-950 font-serif font-bold">
                      $${lesson.formula}$
                    </div>
                  ` : ''}
                  <button onclick="openKnttLesson(${currentKnttGrade}, '${ch.id}', '${lesson.id}')"
                    class="w-full py-2 bg-indigo-50 hover:bg-indigo-600 text-indigo-700 hover:text-white font-extrabold text-xs rounded-xl transition flex items-center justify-center gap-1.5 shadow-xs">
                    <i data-lucide="play" class="w-3.5 h-3.5"></i> Học Bài Này
                  </button>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }).join('');

  refreshIconsAndMath();
}

function openKnttLesson(gradeId, chapterId, lessonId) {
  if (!isAppViewOpen) {
    toggleAppView();
  }
  switchTab('lesson');
  populateLessonNavDropdowns(gradeId, chapterId, lessonId);
  loadNavSelectedLesson();
  
  // Cuộn mượt lên đầu bài học
  const lessonView = document.getElementById('view-lesson');
  if (lessonView) {
    lessonView.scrollIntoView({ behavior: 'smooth' });
  }
}

// Cập nhật các dropdown chọn bài học trong view-lesson
function populateLessonNavDropdowns(gradeId, selectedChapterId, selectedLessonId) {
  const gradeSel = document.getElementById('lesson-nav-grade');
  const chSel = document.getElementById('lesson-nav-chapter');
  const lSel = document.getElementById('lesson-nav-lesson');

  if (!gradeSel || !chSel || !lSel) return;

  gradeSel.value = gradeId;
  const gData = window.KNTT_CURRICULUM ? window.KNTT_CURRICULUM[gradeId] : null;
  if (!gData || !gData.chapters) return;

  // Điền chapters
  chSel.innerHTML = gData.chapters.map(c => `
    <option value="${c.id}">${c.number}: ${c.title}</option>
  `).join('');

  if (selectedChapterId) {
    chSel.value = selectedChapterId;
  }
  const currentChapter = gData.chapters.find(c => c.id === chSel.value) || gData.chapters[0];

  // Điền lessons
  if (currentChapter) {
    lSel.innerHTML = currentChapter.lessons.map(l => `
      <option value="${l.id}">${l.number}: ${l.title}</option>
    `).join('');
    if (selectedLessonId) {
      lSel.value = selectedLessonId;
    }
  }
}

function onNavGradeChange(gradeId) {
  populateLessonNavDropdowns(parseInt(gradeId));
  loadNavSelectedLesson();
}

function onNavChapterChange(chapterId) {
  const gradeId = parseInt(document.getElementById('lesson-nav-grade').value);
  const gData = window.KNTT_CURRICULUM ? window.KNTT_CURRICULUM[gradeId] : null;
  if (!gData) return;
  const chapter = gData.chapters.find(c => c.id === chapterId);
  const lSel = document.getElementById('lesson-nav-lesson');
  if (chapter && lSel) {
    lSel.innerHTML = chapter.lessons.map(l => `
      <option value="${l.id}">${l.number}: ${l.title}</option>
    `).join('');
  }
  loadNavSelectedLesson();
}

function loadNavSelectedLesson() {
  const gradeId = parseInt(document.getElementById('lesson-nav-grade').value);
  const chId = document.getElementById('lesson-nav-chapter').value;
  const lId = document.getElementById('lesson-nav-lesson').value;

  const gData = window.KNTT_CURRICULUM ? window.KNTT_CURRICULUM[gradeId] : null;
  if (!gData) return;
  const chapter = gData.chapters.find(c => c.id === chId);
  if (!chapter) return;
  const lesson = chapter.lessons.find(l => l.id === lId) || chapter.lessons[0];
  if (!lesson) return;

  // Cập nhật header banner bài học
  const badgeTag = document.getElementById('lesson-badge-tag');
  const headerTitle = document.getElementById('lesson-header-title');
  const headerDesc = document.getElementById('lesson-header-desc');

  if (badgeTag) badgeTag.innerText = `Toán Học Lớp ${gradeId} • Chuẩn GDPT 2018 • ${chapter.semester}`;
  if (headerTitle) headerTitle.innerText = `${lesson.number}: ${lesson.title}`;
  if (headerDesc) headerDesc.innerHTML = `${lesson.desc}. Công thức cốt lõi: <strong>$${lesson.formula || ''}$</strong>`;

  // Tạo dữ liệu bài học động từ cơ sở dữ liệu nâng cao (curriculum-knowledge.js & math-diagrams-tikz.js)
  if (typeof window.getEnrichedLessonData === 'function') {
    MATH_DATA.currentLesson = window.getEnrichedLessonData(gradeId, chId, lId);
  } else {
    MATH_DATA.currentLesson = {
      gradeId: gradeId,
      unitTitle: `${chapter.number}: ${chapter.title}`,
      lessonTitle: `${lesson.number}: ${lesson.title}`,
      theory: {
        summary: `${lesson.desc} - Nội dung bám sát chuẩn kiến thức kĩ năng GDPT 2018 (Bộ Giáo Dục & Đào Tạo).`,
        sections: [
          {
            title: "1. Khái niệm & Công thức cốt lõi",
            content: `Nắm chắc định nghĩa chính xác và công thức nền tảng của bài học:\n\n$$${lesson.formula || 'A = B'}$$\n\n*Ghi nhớ:* Áp dụng chính xác các bước giải và chú ý điều kiện xác định của biểu thức.`
          },
          {
            title: "2. Quy tắc biến đổi & Kỹ năng tính toán",
            content: `- Nhận dạng dạng toán trong đề thi và các bước lập luận logic.\n- Kỹ thuật tính nhanh, nhẩm nghiệm và biến đổi đưa về phương trình / dạng cơ bản.\n- Luôn kiểm tra lại đối chiếu với điều kiện ban đầu.`
          },
          {
            title: "3. Các bẫy sai lầm thường gặp & Mẹo 9+",
            content: `- Bẫy quên xét điều kiện tồn tại hoặc chia cho số bằng 0.\n- Sai dấu khi chuyển vế hoặc nhân/chia cho số âm.\n- Đối với hình học: Luôn vẽ hình chính xác và ghi rõ giả thiết - kết luận.`
          }
        ]
      },
      diagram: window.getTikzDiagramForLesson ? window.getTikzDiagramForLesson(gradeId, chId, lId) : null,
      topics: [
        {
          id: "dang-kntt",
          title: `Dạng toán trọng tâm: ${lesson.title}`,
          examples: [
            {
              title: "Ví dụ 1 (Nhận biết - 7đ)",
              question: `Áp dụng định nghĩa và công thức $${lesson.formula || 'A=B'}$ để thực hiện phép biến đổi cơ bản và tìm giá trị của biểu thức chuẩn GDPT 2018.`,
              solution: `**Lời giải chi tiết:**\n- Bước 1: Điều kiện xác định được thỏa mãn.\n- Bước 2: Vận dụng trực tiếp định lý / công thức: $${lesson.formula || 'A=B'}$.\n- Bước 3: Rút gọn và kết luận đáp số chính xác.`
            },
            {
              title: "Ví dụ 2 (Thông hiểu & Vận dụng - 8.5đ)",
              question: `Cho bài toán biến đổi nâng cao thuộc ${chapter.title}. Tìm tham số hoặc chứng minh đẳng thức hình học / đại số liên quan.`,
              solution: `**Lời giải chi tiết:**\n- Bước 1: Biến đổi vế phức tạp về dạng tổng hoặc tích.\n- Bước 2: Áp dụng các tính chất bắc cầu và định lý trọng tâm của chương.\n- Bước 3: Kết luận nghiệm và biện luận đầy đủ.`
            },
            {
              title: "Ví dụ 3 (Vận dụng cao 9+ / Phân loại)",
              question: `Bài toán thực tế tối ưu hoặc tìm giá trị lớn nhất, nhỏ nhất (GTLN-GTNN) bám sát ma trận đề thi khảo sát chất lượng.`,
              solution: `**Lời giải chi tiết:**\n- Bước 1: Mô hình hóa đại lượng thực tế theo biến số $x$.\n- Bước 2: Khảo sát hàm số hoặc sử dụng bất đẳng thức Cauchy / Bunhiacopxki.\n- Bước 3: Chỉ rõ điều kiện dấu '=' xảy ra và kết luận giá trị tối ưu.`
            }
          ],
          exercises: Array.from({ length: 10 }, (_, i) => ({
            id: `ex-kntt-${i + 1}`,
            title: `Bài ${i + 1}: Luyện tập ${lesson.title} (${i < 4 ? 'Cơ bản' : i < 8 ? 'Vận dụng' : 'Nâng cao 9+'})`,
            level: i < 4 ? "Cơ bản" : i < 8 ? "Vận dụng" : "Nâng cao 9+",
            levelClass: i < 4 ? "bg-slate-100 text-slate-700" : i < 8 ? "bg-blue-100 text-blue-700" : "bg-purple-100 text-purple-700",
            question: `Cho bài toán thứ ${i + 1} về chủ đề "${lesson.title}". Vận dụng công thức $${lesson.formula || 'x'}$ để tính giá trị chính xác hoặc tìm tập nghiệm.`,
            answer: `Đáp số bài ${i + 1}: $x = ${i + 1}$ hoặc giá trị tương ứng thỏa mãn điều kiện.`,
            solution: `Hướng dẫn giải bài ${i + 1}: Phân tích đề bài theo 3 bước chuẩn của Thầy: 1. Đặt ẩn phụ hoặc xác định công thức -> 2. Biến đổi biểu thức -> 3. Đối chiếu điều kiện và kết luận.`
          }))
        }
      ]
    };
  }

  currentLessonTopicTab = 0;
  renderTopicTabs();
  renderTopicMethod();
  renderTheory();
  renderLessonDiagram();
  renderExamples();
  renderExercises();
  refreshIconsAndMath();
}

// ==========================================================================
// 13. HÌNH VẼ MINH HỌA & MÃ NGUỒN TIKZ (CHO GIÁO VIÊN VÀ HỌC SINH)
// ==========================================================================

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

function renderLessonDiagram() {
  const container = document.getElementById('lesson-diagram-card');
  if (!container) return;
  const diagram = MATH_DATA.currentLesson ? MATH_DATA.currentLesson.diagram : null;
  if (!diagram) {
    container.classList.add('hidden');
    return;
  }
  container.classList.remove('hidden');

  const contentEl = document.getElementById('lesson-diagram-content');
  const actionsEl = document.getElementById('lesson-diagram-actions');

  if (actionsEl) {
    actionsEl.innerHTML = `
      <button onclick="copyTikzCode('${diagram.id}')" class="px-3 py-1.5 text-xs font-bold bg-white text-indigo-700 hover:bg-indigo-50 border border-indigo-200 rounded-xl shadow-xs transition flex items-center gap-1.5 shrink-0">
        <i data-lucide="copy" class="w-3.5 h-3.5"></i>
        <span>Sao Chép Mã TikZ</span>
      </button>
      <button onclick="toggleTikzCodeBox('lesson-tikz-code-box')" class="px-3 py-1.5 text-xs font-bold bg-indigo-600 text-white hover:bg-indigo-700 rounded-xl shadow-xs transition flex items-center gap-1.5 shrink-0">
        <i data-lucide="code" class="w-3.5 h-3.5"></i>
        <span>Xem Mã LaTeX</span>
      </button>
    `;
  }

  if (contentEl) {
    contentEl.innerHTML = `
      <!-- Cột trái: Hình vẽ SVG vector sắc nét -->
      <div class="lg:col-span-5 bg-white p-4 sm:p-5 rounded-2xl border border-indigo-100 shadow-sm flex flex-col items-center justify-center">
        ${diagram.svg}
        <div class="mt-3 text-center">
          <span class="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-indigo-50 text-indigo-800 border border-indigo-200 font-mono">
            $${diagram.formula}$
          </span>
        </div>
      </div>

      <!-- Cột phải: Mô tả hình vẽ, ứng dụng & hộp mã TikZ -->
      <div class="lg:col-span-7 space-y-3">
        <div class="space-y-1.5">
          <div class="flex items-center gap-2">
            <span class="text-[11px] font-black uppercase text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md border border-indigo-100">Lớp ${diagram.grade}</span>
            <span class="text-xs font-bold text-slate-500">${diagram.topic}</span>
          </div>
          <h4 class="text-base sm:text-lg font-black text-slate-900">${diagram.title}</h4>
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
            ${diagram.desc}
          </p>
        </div>

        <div class="p-3 bg-amber-50/80 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
          <i data-lucide="sparkles" class="w-4 h-4 text-amber-600 shrink-0 mt-0.5"></i>
          <div>
            <strong>Mẹo LaTeX cho Thầy Cô:</strong> Mã nguồn TikZ được chuẩn hóa sẵn với gói <code>\\usepackage{tikz}</code>, có thể dán trực tiếp vào Overleaf hoặc tệp TeX đề thi!
          </div>
        </div>

        <!-- Hộp mã nguồn TikZ -->
        <div id="lesson-tikz-code-box" class="hidden mt-3 p-3.5 bg-slate-900 text-slate-100 rounded-xl border border-slate-700 font-mono text-[11px] space-y-2">
          <div class="flex items-center justify-between border-b border-slate-700 pb-2">
            <span class="text-indigo-400 font-bold flex items-center gap-1.5">
              <i data-lucide="file-code" class="w-3.5 h-3.5"></i> TikZ LaTeX Source
            </span>
            <button onclick="copyTikzCode('${diagram.id}')" class="text-[10px] text-slate-300 hover:text-white px-2 py-0.5 bg-slate-800 rounded border border-slate-600 transition">
              Copy Code
            </button>
          </div>
          <pre class="overflow-x-auto p-2 bg-slate-950/80 rounded-lg text-emerald-300 leading-relaxed selection:bg-indigo-600">${escapeHtml(diagram.tikzCode)}</pre>
        </div>
      </div>
    `;
  }
}

// Hiển thị bộ sưu tập hình vẽ TikZ tại Landing Page
let currentTikzGradeFilter = 'all';

function filterTikzGrade(grade) {
  currentTikzGradeFilter = grade;
  
  // Cập nhật giao diện nút lọc
  const buttons = document.querySelectorAll('.tikz-filter-btn');
  buttons.forEach(btn => {
    btn.className = "tikz-filter-btn px-3 py-1.5 text-xs font-bold rounded-xl text-slate-600 hover:text-slate-900 transition";
  });
  const activeBtn = document.getElementById(`tikz-btn-g-${grade}`);
  if (activeBtn) {
    activeBtn.className = "tikz-filter-btn px-3 py-1.5 text-xs font-bold rounded-xl bg-teal-600 text-white shadow-xs transition";
  }

  renderTikzLibraryGallery(grade);
}

function renderTikzLibraryGallery(gradeFilter) {
  const container = document.getElementById('tikz-gallery-container');
  if (!container || !window.MATH_TIKZ_LIBRARY) return;

  const targetGrade = gradeFilter || currentTikzGradeFilter || 'all';
  const list = targetGrade === 'all' 
    ? window.MATH_TIKZ_LIBRARY 
    : window.MATH_TIKZ_LIBRARY.filter(d => d.grade === parseInt(targetGrade));

  if (list.length === 0) {
    container.innerHTML = `<div class="col-span-full p-8 text-center text-slate-500">Chưa có hình vẽ TikZ cho khối lớp này.</div>`;
    return;
  }

  container.innerHTML = list.map((item, idx) => `
    <div class="bg-gradient-to-b from-white to-slate-50/50 rounded-2xl border-2 border-slate-200/90 hover:border-teal-400 hover:shadow-xl transition space-y-4 p-5 flex flex-col justify-between group">
      <div class="space-y-3">
        <div class="flex items-center justify-between">
          <span class="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-teal-100 text-teal-800 border border-teal-200">
            Lớp ${item.grade} • ${item.topic}
          </span>
          <span class="text-[11px] font-mono text-slate-400">#${idx + 1}</span>
        </div>

        <h3 class="font-black text-slate-900 text-base group-hover:text-teal-700 transition leading-snug">
          ${item.title}
        </h3>

        <!-- Khung vẽ vector SVG -->
        <div class="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs flex items-center justify-center min-h-[160px]">
          ${item.svg}
        </div>

        <p class="text-xs text-slate-500 leading-relaxed line-clamp-2">
          ${item.desc}
        </p>

        <div class="p-2 bg-teal-50/50 rounded-xl border border-teal-100 text-center text-xs text-teal-950 font-serif font-bold overflow-x-auto">
          $${item.formula}$
        </div>
      </div>

      <div class="pt-3 border-t border-slate-100 space-y-2">
        <div class="flex items-center gap-2">
          <button onclick="copyTikzCode('${item.id}')"
            class="flex-1 py-2 bg-teal-50 hover:bg-teal-600 text-teal-700 hover:text-white font-extrabold text-xs rounded-xl transition flex items-center justify-center gap-1.5 shadow-xs">
            <i data-lucide="copy" class="w-3.5 h-3.5"></i> Sao Chép TikZ
          </button>
          <button onclick="toggleTikzCodeBox('gallery-tikz-box-${item.id}')"
            class="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-extrabold text-xs rounded-xl transition flex items-center gap-1">
            <i data-lucide="code" class="w-3.5 h-3.5"></i> Mã TeX
          </button>
        </div>

        ${item.chapterId ? `
          <button onclick="openKnttLesson(${item.grade}, '${item.chapterId}', '${item.lessonId || ''}')"
            class="w-full py-1.5 text-[11px] font-bold text-slate-500 hover:text-indigo-600 flex items-center justify-center gap-1 transition">
            <i data-lucide="arrow-right" class="w-3 h-3"></i> Vào học bài có hình vẽ này
          </button>
        ` : ''}

        <!-- Hộp mã nguồn ẩn -->
        <div id="gallery-tikz-box-${item.id}" class="hidden p-3 bg-slate-900 text-slate-100 rounded-xl border border-slate-700 font-mono text-[10px] space-y-1.5">
          <div class="flex items-center justify-between text-slate-400 border-b border-slate-700 pb-1">
            <span>TikZ Code</span>
            <button onclick="copyTikzCode('${item.id}')" class="text-emerald-400 hover:underline">Copy</button>
          </div>
          <pre class="overflow-x-auto p-1.5 bg-slate-950 rounded text-emerald-300 leading-snug">${escapeHtml(item.tikzCode)}</pre>
        </div>
      </div>
    </div>
  `).join('');

  refreshIconsAndMath();
}
