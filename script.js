// Mobile Drawer Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileDrawer = document.getElementById('mobileDrawer');
const hamburgerIcon = document.getElementById('hamburgerIcon');
const closeIcon = document.getElementById('closeIcon');

mobileMenuBtn.addEventListener('click', () => {
  const isExpanded = !mobileDrawer.classList.contains('hidden');
  if (isExpanded) {
    closeMobileMenu();
  } else {
    mobileDrawer.classList.remove('hidden');
    hamburgerIcon.classList.add('hidden');
    closeIcon.classList.remove('hidden');
  }
});

function closeMobileMenu() {
  mobileDrawer.classList.add('hidden');
  hamburgerIcon.classList.remove('hidden');
  closeIcon.classList.add('hidden');
}

function toggleMobileCcsms() {
  const list = document.getElementById('mobileCcsmsList');
  const chevron = document.getElementById('mobileCcsmsChevron');
  if (list.classList.contains('hidden')) {
    list.classList.remove('hidden');
    chevron.style.transform = 'rotate(180deg)';
  } else {
    list.classList.add('hidden');
    chevron.style.transform = 'rotate(0deg)';
  }
}

// Modal Manager
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }
}

// Curriculum Dynamic Modal with Full Specialization Data
function showCurriculumDetails(degree) {
  const content = document.getElementById('curriculumModalContent');
  if (degree === 'BSIT') {
    content.innerHTML = `
      <div class="space-y-4">
        <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-trimex-lightRed text-trimex-red text-[11px] font-bold uppercase">
          Degree Structure
        </div>
        <h3 class="font-serif text-xl sm:text-2xl font-bold text-trimex-onyx">Bachelor of Science in Information Technology (BSIT)</h3>
        <p class="text-xs text-slate-600 leading-relaxed">
          Equips students with the technical acumen, system engineering capabilities, and creative interface skills necessary to pioneer in enterprise IT, web infrastructures, and interactive media.
        </p>

        <div class="space-y-3 pt-2">
          <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400">Available Specializations</h4>
          
          <div class="p-3.5 rounded-md border border-slate-200 bg-slate-50 space-y-1">
            <h5 class="text-sm font-bold text-slate-900">1. Mobile and Web Development</h5>
            <p class="text-xs text-slate-500">Cross-platform application engineering, modern reactive frontend frameworks, cloud backend APIs, and progressive web ecosystems.</p>
          </div>

          <div class="p-3.5 rounded-md border border-slate-200 bg-slate-50 space-y-1">
            <h5 class="text-sm font-bold text-slate-900">2. Multimedia Arts and Animation</h5>
            <p class="text-xs text-slate-500">Interactive digital design, 3D asset modeling, UI/UX ergonomics, visual storytelling, and motion graphics.</p>
          </div>

          <div class="p-3.5 rounded-md border border-slate-200 bg-slate-50 space-y-1">
            <h5 class="text-sm font-bold text-slate-900">3. Network and System Administration</h5>
            <p class="text-xs text-slate-500">Enterprise infrastructure, Linux/Unix operations, routing architecture, container orchestration, and server security.</p>
          </div>
        </div>

        <div class="pt-3 flex gap-3">
          <button onclick="closeModal('curriculumModal'); openModal('enrollmentModal')" class="w-full min-h-[46px] py-3 rounded-md bg-trimex-red text-white text-xs font-bold uppercase tracking-wider hover:bg-trimex-crimsonHover active:scale-95 transition-all text-center">
            Apply for BSIT Now →
          </button>
        </div>
      </div>
    `;
  } else {
    content.innerHTML = `
      <div class="space-y-4">
        <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 text-slate-800 text-[11px] font-bold uppercase">
          Degree Structure
        </div>
        <h3 class="font-serif text-xl sm:text-2xl font-bold text-trimex-onyx">Bachelor of Science in Computer Science (BSCS)</h3>
        <p class="text-xs text-slate-600 leading-relaxed">
          Focuses on mathematical rigor, algorithmic thinking, predictive systems, and digital defense frameworks that drive cutting-edge computational sciences.
        </p>

        <div class="space-y-3 pt-2">
          <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400">Available Specializations</h4>
          
          <div class="p-3.5 rounded-md border border-slate-200 bg-slate-50 space-y-1">
            <h5 class="text-sm font-bold text-slate-900">1. Cybersecurity</h5>
            <p class="text-xs text-slate-500">Ethical hacking, threat intelligence, defense-in-depth architecture, cryptographic protocols, and incident response.</p>
          </div>

          <div class="p-3.5 rounded-md border border-slate-200 bg-slate-50 space-y-1">
            <h5 class="text-sm font-bold text-slate-900">2. Data Science</h5>
            <p class="text-xs text-slate-500">Big data mining, predictive analytics, applied machine learning, statistical computing, and data visualization pipelines.</p>
          </div>
        </div>

        <div class="pt-3 flex gap-3">
          <button onclick="closeModal('curriculumModal'); openModal('enrollmentModal')" class="w-full min-h-[46px] py-3 rounded-md bg-trimex-onyx text-white text-xs font-bold uppercase tracking-wider hover:bg-black active:scale-95 transition-all text-center">
            Apply for BSCS Now →
          </button>
        </div>
      </div>
    `;
  }
  openModal('curriculumModal');
}

// Enrollment Form Handler
function handleEnrollmentSubmit(e) {
  e.preventDefault();
  closeModal('enrollmentModal');
  e.target.reset();
  showToast('Enrollment Application Received!', 'Thank you! The CCS Admissions Office will review your application.');
}

// Toast Notification System
function showToast(title, message) {
  const toast = document.getElementById('toastNotification');
  const titleElem = document.getElementById('toastTitle');
  const msgElem = document.getElementById('toastMessage');
  
  titleElem.textContent = title;
  msgElem.textContent = message;

  toast.classList.remove('translate-y-32', 'opacity-0');
  toast.classList.add('translate-y-0', 'opacity-100');

  setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-32', 'opacity-0');
  }, 4500);
}

// Close modals on clicking background backdrop or ESC
window.addEventListener('click', (e) => {
  ['enrollmentModal', 'curriculumModal'].forEach(id => {
    const modal = document.getElementById(id);
    if (e.target === modal) closeModal(id);
  });
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    ['enrollmentModal', 'curriculumModal'].forEach(id => closeModal(id));
  }
});