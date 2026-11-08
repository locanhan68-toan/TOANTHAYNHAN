// ==========================================================================
// THƯ VIỆN HÌNH VẼ TOÁN HỌC & MÃ NGUỒN TIKZ (CHUẨN LATEX CHO GIÁO VIÊN)
// PHỤC VỤ GIẢNG DẠY VÀ HỌC TẬP TỪ LỚP 6 ĐẾN LỚP 12 (GDPT 2018)
// ==========================================================================

window.MATH_TIKZ_LIBRARY = [
  // ------------------------------------------------------------------------
  // LỚP 6: SỐ HỌC & HÌNH PHẲNG TRỰC QUAN
  // ------------------------------------------------------------------------
  {
    id: "tikz-g6-numberline",
    grade: 6,
    chapterId: "g6-c3",
    lessonId: "g6-c3-l14",
    title: "Trục số và biểu diễn tập hợp số nguyên Z",
    topic: "Số học & Đại số",
    desc: "Biểu diễn số âm, điểm gốc 0, số dương và các điểm đối xứng trên tia số thực.",
    formula: "\\mathbb{Z} = \\{... -3, -2, -1, 0, 1, 2, 3...\\}",
    svg: `<svg viewBox="0 0 600 120" class="w-full h-auto max-h-48 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrow-g6" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#4f46e5"/>
        </marker>
      </defs>
      <line x1="30" y1="60" x2="570" y2="60" stroke="#4f46e5" stroke-width="2.5" marker-end="url(#arrow-g6)"/>
      <!-- Ticks and labels -->
      <g stroke="#334155" stroke-width="1.5">
        <line x1="100" y1="52" x2="100" y2="68"/>
        <line x1="160" y1="52" x2="160" y2="68"/>
        <line x1="220" y1="52" x2="220" y2="68"/>
        <line x1="280" y1="48" x2="280" y2="72" stroke="#dc2626" stroke-width="2.5"/>
        <line x1="340" y1="52" x2="340" y2="68"/>
        <line x1="400" y1="52" x2="400" y2="68"/>
        <line x1="460" y1="52" x2="460" y2="68"/>
        <line x1="520" y1="52" x2="520" y2="68"/>
      </g>
      <!-- Dots -->
      <circle cx="280" cy="60" r="4.5" fill="#dc2626"/>
      <circle cx="160" cy="60" r="4" fill="#2563eb"/>
      <circle cx="400" cy="60" r="4" fill="#2563eb"/>
      <!-- Text labels -->
      <text x="575" y="64" font-size="13" font-weight="bold" fill="#4f46e5" font-style="italic">x</text>
      <text x="100" y="88" font-size="12" font-weight="bold" text-anchor="middle" fill="#64748b">-3</text>
      <text x="160" y="88" font-size="12" font-weight="bold" text-anchor="middle" fill="#2563eb">-2</text>
      <text x="220" y="88" font-size="12" font-weight="bold" text-anchor="middle" fill="#64748b">-1</text>
      <text x="280" y="90" font-size="14" font-weight="black" text-anchor="middle" fill="#dc2626">0</text>
      <text x="340" y="88" font-size="12" font-weight="bold" text-anchor="middle" fill="#64748b">+1</text>
      <text x="400" y="88" font-size="12" font-weight="bold" text-anchor="middle" fill="#2563eb">+2</text>
      <text x="460" y="88" font-size="12" font-weight="bold" text-anchor="middle" fill="#64748b">+3</text>
      <text x="520" y="88" font-size="12" font-weight="bold" text-anchor="middle" fill="#64748b">+4</text>
      <!-- Notes -->
      <text x="190" y="30" font-size="11" font-weight="bold" fill="#2563eb" text-anchor="middle">Chiều âm (-)</text>
      <text x="370" y="30" font-size="11" font-weight="bold" fill="#16a34a" text-anchor="middle">Chiều dương (+)</text>
    </svg>`,
    tikzCode: `% --- TRỤC SỐ THỰC LỚP 6 ---
\\begin{tikzpicture}[>=stealth, scale=1]
  % Trục tọa độ
  \\draw[->, thick, blue!80!black] (-4.5,0) -- (4.5,0) node[right] {$x$};
  % Vạch chia và số
  \\foreach \\x in {-4,-3,-2,-1,0,1,2,3,4} {
    \\draw (\\x, 0.15) -- (\\x, -0.15) node[below=2pt] {$\\x$};
  }
  % Điểm gốc O màu đỏ
  \\filldraw[red] (0,0) circle (2pt) node[above=4pt] {Gốc $O$};
  % Chú thích chiều
  \\node[above, blue] at (2,0.5) {Chiều dương $(+)$};
  \\node[above, red!70!black] at (-2,0.5) {Chiều âm $(-)$};
\\end{tikzpicture}`
  },

  {
    id: "tikz-g6-regular-polygon",
    grade: 6,
    chapterId: "g6-c4",
    lessonId: "g6-c4-l18",
    title: "Tam giác đều và Lục giác đều nội tiếp",
    topic: "Hình học phẳng",
    desc: "Hình lục giác đều có 6 cạnh bằng nhau, 6 góc bằng nhau và 3 đường chéo chính cắt nhau tại tâm O.",
    formula: "AB = BC = CD = DE = EF = FA, \\ \\widehat{A} = 120^\\circ",
    svg: `<svg viewBox="0 0 320 260" class="w-full h-auto max-h-56 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Circle reference -->
      <circle cx="160" cy="130" r="90" fill="#f8fafc" stroke="#cbd5e1" stroke-dasharray="4 4" stroke-width="1.5"/>
      <!-- Diagonals -->
      <line x1="70" y1="130" x2="250" y2="130" stroke="#94a3b8" stroke-dasharray="3 3"/>
      <line x1="115" y1="52" x2="205" y2="208" stroke="#94a3b8" stroke-dasharray="3 3"/>
      <line x1="205" y1="52" x2="115" y2="208" stroke="#94a3b8" stroke-dasharray="3 3"/>
      <!-- Hexagon -->
      <polygon points="250,130 205,52 115,52 70,130 115,208 205,208" fill="#e0e7ff" fill-opacity="0.5" stroke="#4f46e5" stroke-width="2.5"/>
      <!-- Center O -->
      <circle cx="160" cy="130" r="3.5" fill="#dc2626"/>
      <text x="160" y="148" font-size="12" font-weight="bold" fill="#dc2626" text-anchor="middle">O</text>
      <!-- Vertices -->
      <circle cx="115" cy="52" r="3" fill="#4f46e5"/><text x="110" y="44" font-size="12" font-weight="bold" fill="#1e1b4b">A</text>
      <circle cx="205" cy="52" r="3" fill="#4f46e5"/><text x="212" y="44" font-size="12" font-weight="bold" fill="#1e1b4b">B</text>
      <circle cx="250" cy="130" r="3" fill="#4f46e5"/><text x="260" y="134" font-size="12" font-weight="bold" fill="#1e1b4b">C</text>
      <circle cx="205" cy="208" r="3" fill="#4f46e5"/><text x="212" y="224" font-size="12" font-weight="bold" fill="#1e1b4b">D</text>
      <circle cx="115" cy="208" r="3" fill="#4f46e5"/><text x="108" y="224" font-size="12" font-weight="bold" fill="#1e1b4b">E</text>
      <circle cx="70" cy="130" r="3" fill="#4f46e5"/><text x="56" y="134" font-size="12" font-weight="bold" fill="#1e1b4b">F</text>
    </svg>`,
    tikzCode: `% --- HÌNH LỤC GIÁC ĐỀU LỚP 6 ---
\\begin{tikzpicture}[scale=1.5]
  \\coordinate (O) at (0,0);
  \\draw[dashed, gray] (O) circle (2cm);
  \\foreach \\x/\\label in {60/B, 120/A, 180/F, 240/E, 300/D, 360/C} {
    \\coordinate (\\label) at (\\x:2cm);
    \\fill (\\label) circle (1.5pt);
    \\node[above right] at (\\label) {$\\label$};
    \\draw[dashed, gray!70] (O) -- (\\label);
  }
  \\draw[thick, indigo!80!black, fill=indigo!10] (A) -- (B) -- (C) -- (D) -- (E) -- (F) -- cycle;
  \\filldraw[red] (O) circle (1.5pt) node[below=2pt] {$O$};
\\end{tikzpicture}`
  },

  // ------------------------------------------------------------------------
  // LỚP 7: ĐƯỜNG THẲNG SONG SONG & TAM GIÁC BẰNG NHAU
  // ------------------------------------------------------------------------
  {
    id: "tikz-g7-parallel",
    grade: 7,
    chapterId: "g7-c3",
    lessonId: "g7-c3-l8",
    title: "Hai đường thẳng song song và các góc tạo bởi cát tuyến",
    topic: "Hình học phẳng",
    desc: "Đường thẳng c cắt hai đường thẳng song song a và b tạo ra các cặp góc so le trong bằng nhau, đồng vị bằng nhau.",
    formula: "a \\parallel b \\implies \\widehat{A_1} = \\widehat{B_3} \\text{ (so le trong)}, \\ \\widehat{A_1} = \\widehat{B_1} \\text{ (đồng vị)}",
    svg: `<svg viewBox="0 0 360 220" class="w-full h-auto max-h-56 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Line a -->
      <line x1="30" y1="65" x2="330" y2="65" stroke="#2563eb" stroke-width="2.5"/>
      <text x="335" y="68" font-size="13" font-weight="bold" fill="#2563eb">a</text>
      <!-- Line b -->
      <line x1="30" y1="155" x2="330" y2="155" stroke="#2563eb" stroke-width="2.5"/>
      <text x="335" y="158" font-size="13" font-weight="bold" fill="#2563eb">b</text>
      <!-- Transversal c -->
      <line x1="100" y1="20" x2="260" y2="200" stroke="#dc2626" stroke-width="2.5"/>
      <text x="268" y="205" font-size="13" font-weight="bold" fill="#dc2626">c</text>
      <!-- Intersection A -->
      <circle cx="140" cy="65" r="4" fill="#1e1b4b"/>
      <text x="122" y="58" font-size="13" font-weight="black" fill="#1e1b4b">A</text>
      <!-- Intersection B -->
      <circle cx="220" cy="155" r="4" fill="#1e1b4b"/>
      <text x="232" y="150" font-size="13" font-weight="black" fill="#1e1b4b">B</text>
      <!-- Arcs for angles -->
      <path d="M 160,65 A 20,20 0 0,1 153,80" fill="none" stroke="#f59e0b" stroke-width="2.5"/>
      <text x="165" y="85" font-size="11" font-weight="bold" fill="#d97706">A₁</text>
      <path d="M 200,155 A 20,20 0 0,1 207,140" fill="none" stroke="#f59e0b" stroke-width="2.5"/>
      <text x="188" y="145" font-size="11" font-weight="bold" fill="#d97706">B₃</text>
      <!-- Legend badge -->
      <rect x="50" y="180" width="160" height="26" rx="6" fill="#fef3c7" stroke="#fde68a"/>
      <text x="130" y="197" font-size="11" font-weight="bold" fill="#92400e" text-anchor="middle">Góc so le trong: Â₁ = B̂₃</text>
    </svg>`,
    tikzCode: `% --- HAI ĐƯỜNG THẲNG SONG SONG LỚP 7 ---
\\begin{tikzpicture}[scale=1]
  % Hai đường thẳng song song a và b
  \\draw[thick, blue] (-2,2) -- (4,2) node[right] {$a$};
  \\draw[thick, blue] (-2,0) -- (4,0) node[right] {$b$};
  % Đường thẳng cắt c
  \\draw[thick, red] (-1,3) -- (3,-1) node[below right] {$c$};
  % Giao điểm A và B
  \\coordinate (A) at (0,2);
  \\coordinate (B) at (2,0);
  \\filldraw[black] (A) circle (1.5pt) node[above left] {$A$};
  \\filldraw[black] (B) circle (1.5pt) node[below right] {$B$};
  % Ký hiệu góc so le trong
  \\draw[orange, thick] (0.4,2) arc (0:-45:0.4);
  \\node at (0.6,1.8) {$A_1$};
  \\draw[orange, thick] (1.6,0) arc (180:135:0.4);
  \\node at (1.4,0.3) {$B_3$};
\\end{tikzpicture}`
  },

  {
    id: "tikz-g7-perpendicular-bisector",
    grade: 7,
    chapterId: "g7-c4",
    lessonId: "g7-c4-l13",
    title: "Đường trung trực của đoạn thẳng",
    topic: "Hình học phẳng",
    desc: "Đường trung trực vuông góc với đoạn thẳng tại trung điểm. Mọi điểm nằm trên đường trung trực đều cách đều hai đầu mút.",
    formula: "d \\perp AB \\text{ tại } M, \\ MA = MB \\implies DA = DB, \\ \\forall D \\in d",
    svg: `<svg viewBox="0 0 320 240" class="w-full h-auto max-h-56 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Segment AB -->
      <line x1="50" y1="160" x2="270" y2="160" stroke="#1e293b" stroke-width="2.5"/>
      <circle cx="50" cy="160" r="4" fill="#1e293b"/><text x="35" y="165" font-size="13" font-weight="bold">A</text>
      <circle cx="270" cy="160" r="4" fill="#1e293b"/><text x="280" y="165" font-size="13" font-weight="bold">B</text>
      <!-- Midpoint M -->
      <circle cx="160" cy="160" r="3.5" fill="#2563eb"/><text x="156" y="180" font-size="12" font-weight="bold" fill="#2563eb">M</text>
      <!-- Equal tick marks on AM and MB -->
      <line x1="103" y1="154" x2="107" y2="166" stroke="#2563eb" stroke-width="2"/>
      <line x1="213" y1="154" x2="217" y2="166" stroke="#2563eb" stroke-width="2"/>
      <!-- Perpendicular line d -->
      <line x1="160" y1="25" x2="160" y2="215" stroke="#4f46e5" stroke-width="2.5"/>
      <text x="168" y="35" font-size="13" font-weight="bold" fill="#4f46e5">d</text>
      <!-- Right angle marker -->
      <path d="M 160,146 L 174,146 L 174,160" fill="none" stroke="#dc2626" stroke-width="1.5"/>
      <!-- Arbitrary point D on d -->
      <circle cx="160" cy="70" r="4" fill="#dc2626"/>
      <text x="170" y="75" font-size="13" font-weight="bold" fill="#dc2626">D</text>
      <!-- DA and DB dashed lines -->
      <line x1="160" y1="70" x2="50" y2="160" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="4 3"/>
      <line x1="160" y1="70" x2="270" y2="160" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="4 3"/>
    </svg>`,
    tikzCode: `% --- ĐƯỜNG TRUNG TRỰC LỚP 7 ---
\\begin{tikzpicture}[scale=1]
  \\coordinate (A) at (-2,0);
  \\coordinate (B) at (2,0);
  \\coordinate (M) at (0,0);
  \\coordinate (D) at (0,2.5);
  % Đoạn thẳng AB và trung trực
  \\draw[thick] (A) node[below] {$A$} -- (B) node[below] {$B$};
  \\draw[thick, indigo] (0,-1) -- (0,3.5) node[right] {$d$};
  \\fill (M) circle (1.5pt) node[below right] {$M$};
  \\fill[red] (D) circle (1.5pt) node[above right] {$D$};
  % Nối DA và DB
  \\draw[dashed, red] (D) -- (A);
  \\draw[dashed, red] (D) -- (B);
  % Góc vuông
  \\draw (0,0.3) -| (0.3,0);
  % Ký hiệu đoạn bằng nhau MA = MB
  \\draw (-1, -0.1) -- (-1, 0.1);
  \\draw (1, -0.1) -- (1, 0.1);
\\end{tikzpicture}`
  },

  // ------------------------------------------------------------------------
  // LỚP 8: ĐỊNH LÝ THALÈS & HÌNH CHÓP KHÔNG GIAN
  // ------------------------------------------------------------------------
  {
    id: "tikz-g8-thales",
    grade: 8,
    chapterId: "g8-c4",
    lessonId: "g8-c4-l15",
    title: "Định lý Thalès trong tam giác",
    topic: "Hình học phẳng",
    desc: "Một đường thẳng song song với một cạnh của tam giác và cắt hai cạnh còn lại định ra trên hai cạnh đó những đoạn thẳng tương ứng tỉ lệ.",
    formula: "DE \\parallel BC \\implies \\frac{AD}{AB} = \\frac{AE}{AC} = \\frac{DE}{BC}",
    svg: `<svg viewBox="0 0 340 250" class="w-full h-auto max-h-56 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Triangle ABC -->
      <polygon points="170,30 50,220 290,220" fill="#eff6ff" stroke="#1e293b" stroke-width="2.5"/>
      <!-- Segment DE parallel to BC -->
      <line x1="110" y1="125" x2="230" y2="125" stroke="#dc2626" stroke-width="2.5"/>
      <!-- Vertices -->
      <circle cx="170" cy="30" r="4" fill="#1e293b"/><text x="165" y="20" font-size="13" font-weight="black">A</text>
      <circle cx="50" cy="220" r="4" fill="#1e293b"/><text x="35" y="235" font-size="13" font-weight="black">B</text>
      <circle cx="290" cy="220" r="4" fill="#1e293b"/><text x="298" y="235" font-size="13" font-weight="black">C</text>
      <!-- Points D and E -->
      <circle cx="110" cy="125" r="4" fill="#dc2626"/><text x="88" y="128" font-size="13" font-weight="bold" fill="#dc2626">D</text>
      <circle cx="230" cy="125" r="4" fill="#dc2626"/><text x="238" y="128" font-size="13" font-weight="bold" fill="#dc2626">E</text>
      <!-- Parallel indicator arrows -->
      <path d="M 165,121 L 175,125 L 165,129" fill="none" stroke="#dc2626" stroke-width="2"/>
      <path d="M 165,216 L 175,220 L 165,224" fill="none" stroke="#2563eb" stroke-width="2"/>
      <!-- Label -->
      <text x="170" y="110" font-size="11" font-weight="bold" fill="#dc2626" text-anchor="middle">DE // BC</text>
    </svg>`,
    tikzCode: `% --- ĐỊNH LÝ THALÈS LỚP 8 ---
\\begin{tikzpicture}[scale=1]
  \\coordinate (A) at (2,3.5);
  \\coordinate (B) at (0,0);
  \\coordinate (C) at (4.5,0);
  \\coordinate (D) at ($(A)!0.5!(B)$);
  \\coordinate (E) at ($(A)!0.5!(C)$);
  % Vẽ tam giác và đường thẳng song song
  \\draw[thick] (A) node[above] {$A$} -- (B) node[below left] {$B$} -- (C) node[below right] {$C$} -- cycle;
  \\draw[thick, red] (D) node[left] {$D$} -- (E) node[right] {$E$};
  % Ký hiệu mũi tên song song
  \\draw[->, thick, red] (1.9, 1.75) -- (2.1, 1.75);
  \\draw[->, thick, blue] (2.1, 0) -- (2.4, 0);
\\end{tikzpicture}`
  },

  {
    id: "tikz-g8-pyramid",
    grade: 8,
    chapterId: "g8-c10",
    lessonId: "g8-c10-l36",
    title: "Hình chóp tứ giác đều trong không gian",
    topic: "Hình học không gian",
    desc: "Đáy là hình vuông, các mặt bên là tam giác cân bằng nhau, chân đường cao H trùng với tâm đáy.",
    formula: "V = \\frac{1}{3} S_{\\text{đáy}} \\cdot h = \\frac{1}{3} a^2 \\cdot h",
    svg: `<svg viewBox="0 0 320 280" class="w-full h-auto max-h-60 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Vertices of base ABCD: A(80,180), B(190,210), C(270,180), D(160,150) -->
      <!-- Peak S(175,30), Center O(175,180) -->
      <polygon points="175,30 80,180 190,210 270,180" fill="#f5f3ff" fill-opacity="0.6"/>
      <!-- Hidden edges (dashed) -->
      <line x1="80" y1="180" x2="160" y2="150" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="4 3"/>
      <line x1="160" y1="150" x2="270" y2="180" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="4 3"/>
      <line x1="175" y1="30" x2="160" y2="150" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="4 3"/>
      <!-- Height SO (dashed) -->
      <line x1="175" y1="30" x2="175" y2="180" stroke="#dc2626" stroke-width="2" stroke-dasharray="4 3"/>
      <!-- Base diagonals (dashed) -->
      <line x1="80" y1="180" x2="270" y2="180" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="3 3"/>
      <line x1="190" y1="210" x2="160" y2="150" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="3 3"/>
      <!-- Visible edges -->
      <line x1="80" y1="180" x2="190" y2="210" stroke="#1e293b" stroke-width="2.2"/>
      <line x1="190" y1="210" x2="270" y2="180" stroke="#1e293b" stroke-width="2.2"/>
      <line x1="175" y1="30" x2="80" y2="180" stroke="#4f46e5" stroke-width="2.5"/>
      <line x1="175" y1="30" x2="190" y2="210" stroke="#4f46e5" stroke-width="2.5"/>
      <line x1="175" y1="30" x2="270" y2="180" stroke="#4f46e5" stroke-width="2.5"/>
      <!-- Points & labels -->
      <circle cx="175" cy="30" r="3.5" fill="#4f46e5"/><text x="175" y="18" font-size="13" font-weight="black" text-anchor="middle">S</text>
      <circle cx="80" cy="180" r="3" fill="#1e293b"/><text x="65" y="185" font-size="12" font-weight="bold">A</text>
      <circle cx="190" cy="210" r="3" fill="#1e293b"/><text x="195" y="225" font-size="12" font-weight="bold">B</text>
      <circle cx="270" cy="180" r="3" fill="#1e293b"/><text x="278" y="185" font-size="12" font-weight="bold">C</text>
      <circle cx="160" cy="150" r="3" fill="#94a3b8"/><text x="150" y="146" font-size="12" font-weight="bold">D</text>
      <circle cx="175" cy="180" r="3" fill="#dc2626"/><text x="183" y="176" font-size="11" font-weight="bold" fill="#dc2626">O</text>
    </svg>`,
    tikzCode: `% --- HÌNH CHÓP TỨ GIÁC ĐỀU LỚP 8 ---
\\begin{tikzpicture}[scale=1]
  \\coordinate (A) at (0,0);
  \\coordinate (B) at (1.5,-1);
  \\coordinate (C) at (4.5,-1);
  \\coordinate (D) at (3,0);
  \\coordinate (O) at (2.25,-0.5);
  \\coordinate (S) at (2.25,3.5);
  % Nét đứt (cạnh khuất)
  \\draw[dashed] (A) -- (D) -- (C);
  \\draw[dashed] (S) -- (D);
  \\draw[dashed, red] (S) -- (O) node[midway, right] {$h$};
  \\draw[dashed, gray] (A) -- (C);
  \\draw[dashed, gray] (B) -- (D);
  % Nét liền (cạnh thấy)
  \\draw[thick] (A) -- (B) -- (C);
  \\draw[thick, indigo] (S) -- (A);
  \\draw[thick, indigo] (S) -- (B);
  \\draw[thick, indigo] (S) -- (C);
  % Nhãn điểm
  \\node[above] at (S) {$S$};
  \\node[left] at (A) {$A$};
  \\node[below] at (B) {$B$};
  \\node[right] at (C) {$C$};
  \\node[above right] at (D) {$D$};
  \\node[below] at (O) {$O$};
\\end{tikzpicture}`
  },

  // ------------------------------------------------------------------------
  // LỚP 9: HỆ THỨC LƯỢNG, ĐƯỜNG TRÒN & ĐỒ THỊ PARABOL
  // ------------------------------------------------------------------------
  {
    id: "tikz-g9-right-triangle",
    grade: 9,
    chapterId: "g9-c4",
    lessonId: "g9-c4-l11",
    title: "Hệ thức lượng trong tam giác vuông",
    topic: "Hình học phẳng",
    desc: "Các hệ thức giữa cạnh góc vuông, cạnh huyền, đường cao và hình chiếu trong tam giác vuông ABC.",
    formula: "b^2 = a \\cdot b', \\ c^2 = a \\cdot c', \\ h^2 = b' \\cdot c', \\ a \\cdot h = b \\cdot c",
    svg: `<svg viewBox="0 0 340 220" class="w-full h-auto max-h-56 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Triangle ABC (A is top, B left, C right) -->
      <!-- A(100,40), B(30,170), C(290,170), H(100,170) -->
      <polygon points="100,40 30,170 290,170" fill="#f0fdf4" stroke="#1e293b" stroke-width="2.5"/>
      <!-- Height AH -->
      <line x1="100" y1="40" x2="100" y2="170" stroke="#dc2626" stroke-width="2.2"/>
      <!-- Right angle at A -->
      <path d="M 91,56 L 105,64 L 114,48" fill="none" stroke="#2563eb" stroke-width="2"/>
      <!-- Right angle at H -->
      <path d="M 100,156 L 114,156 L 114,170" fill="none" stroke="#dc2626" stroke-width="1.8"/>
      <!-- Vertices -->
      <circle cx="100" cy="40" r="4" fill="#1e293b"/><text x="96" y="25" font-size="14" font-weight="black">A</text>
      <circle cx="30" cy="170" r="4" fill="#1e293b"/><text x="15" y="175" font-size="14" font-weight="black">B</text>
      <circle cx="290" cy="170" r="4" fill="#1e293b"/><text x="298" y="175" font-size="14" font-weight="black">C</text>
      <circle cx="100" cy="170" r="3.5" fill="#dc2626"/><text x="96" y="190" font-size="13" font-weight="bold" fill="#dc2626">H</text>
      <!-- Labels of edges -->
      <text x="55" y="100" font-size="13" font-style="italic" font-weight="bold" fill="#2563eb">c</text>
      <text x="205" y="100" font-size="13" font-style="italic" font-weight="bold" fill="#2563eb">b</text>
      <text x="106" y="115" font-size="12" font-style="italic" font-weight="bold" fill="#dc2626">h</text>
      <text x="65" y="185" font-size="12" font-style="italic" font-weight="bold" fill="#059669">c'</text>
      <text x="195" y="185" font-size="12" font-style="italic" font-weight="bold" fill="#059669">b'</text>
    </svg>`,
    tikzCode: `% --- HỆ THỨC LƯỢNG TAM GIÁC VUÔNG LỚP 9 ---
\\begin{tikzpicture}[scale=1]
  \\coordinate (A) at (1,3);
  \\coordinate (B) at (-2,0);
  \\coordinate (C) at (4,0);
  \\coordinate (H) at (1,0);
  % Tam giác ABC vuông tại A
  \\draw[thick] (B) node[left] {$B$} -- (A) node[above] {$A$} -- (C) node[right] {$C$} -- cycle;
  \\draw[thick, red] (A) -- (H) node[below] {$H$};
  % Góc vuông tại A và H
  \\draw (0.8,0) rectangle (1,0.2);
  % Ký hiệu độ dài
  \\node at (-0.7,1.7) [left, blue] {$c$};
  \\node at (2.6,1.7) [right, blue] {$b$};
  \\node at (1.2,1.5) [red] {$h$};
  \\node at (-0.5,-0.3) [teal] {$c'$};
  \\node at (2.5,-0.3) [teal] {$b'$};
\\end{tikzpicture}`
  },

  {
    id: "tikz-g9-circle-tangent",
    grade: 9,
    chapterId: "g9-c5",
    lessonId: "g9-c5-l14",
    title: "Đường tròn và tính chất hai tiếp tuyến cắt nhau",
    topic: "Hình học phẳng",
    desc: "Từ điểm M ngoài đường tròn (O), vẽ hai tiếp tuyến MA, MB thì MA = MB, tia MO là tia phân giác của góc AMB.",
    formula: "MA = MB, \\ \\widehat{AMO} = \\widehat{BMO}, \\ MO \\perp AB",
    svg: `<svg viewBox="0 0 360 220" class="w-full h-auto max-h-56 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Circle (O) -->
      <circle cx="230" cy="110" r="70" fill="#f8fafc" stroke="#4f46e5" stroke-width="2.5"/>
      <!-- Center O -->
      <circle cx="230" cy="110" r="3.5" fill="#4f46e5"/><text x="238" y="115" font-size="13" font-weight="black" fill="#4f46e5">O</text>
      <!-- Point M outside -->
      <circle cx="50" cy="110" r="4" fill="#dc2626"/><text x="35" y="115" font-size="13" font-weight="black" fill="#dc2626">M</text>
      <!-- Tangent point A(180,50), B(180,170) -->
      <!-- Tangent lines MA, MB -->
      <line x1="50" y1="110" x2="180" y2="52" stroke="#dc2626" stroke-width="2.2"/>
      <line x1="50" y1="110" x2="180" y2="168" stroke="#dc2626" stroke-width="2.2"/>
      <!-- Radii OA, OB -->
      <line x1="230" y1="110" x2="180" y2="52" stroke="#2563eb" stroke-width="2"/>
      <line x1="230" y1="110" x2="180" y2="168" stroke="#2563eb" stroke-width="2"/>
      <!-- MO segment -->
      <line x1="50" y1="110" x2="230" y2="110" stroke="#059669" stroke-width="1.8" stroke-dasharray="4 3"/>
      <!-- Chord AB -->
      <line x1="180" y1="52" x2="180" y2="168" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="4 3"/>
      <!-- Right angles at A and B -->
      <circle cx="180" cy="52" r="3.5" fill="#1e1b4b"/><text x="175" y="42" font-size="13" font-weight="bold">A</text>
      <circle cx="180" cy="168" r="3.5" fill="#1e1b4b"/><text x="175" y="185" font-size="13" font-weight="bold">B</text>
    </svg>`,
    tikzCode: `% --- HAI TIẾP TUYẾN CẮT NHAU LỚP 9 ---
\\begin{tikzpicture}[scale=1]
  \\coordinate (O) at (3,0);
  \\coordinate (M) at (0,0);
  \\draw[thick, indigo] (O) circle (1.8cm) node[above right] {$O$};
  % Hai tiếp điểm A và B
  \\coordinate (A) at (1.92, 1.25);
  \\coordinate (B) at (1.92, -1.25);
  \\draw[thick, red] (M) node[left] {$M$} -- (A) node[above] {$A$};
  \\draw[thick, red] (M) -- (B) node[below] {$B$};
  \\draw[thick, blue] (O) -- (A);
  \\draw[thick, blue] (O) -- (B);
  \\draw[dashed, teal] (M) -- (O);
  \\draw[dashed, gray] (A) -- (B);
  % Góc vuông tiếp tuyến
  \\fill (A) circle (1.5pt);
  \\fill (B) circle (1.5pt);
  \\fill (O) circle (1.5pt);
\\end{tikzpicture}`
  },

  {
    id: "tikz-g9-parabola-line",
    grade: 9,
    chapterId: "g9-c6",
    lessonId: "g9-c6-l17",
    title: "Đồ thị Parabol y = ax² và đường thẳng tương giao d: y = mx + n",
    topic: "Hàm số & Đại số",
    desc: "Số giao điểm của đường thẳng và Parabol là số nghiệm của phương trình hoành độ giao điểm.",
    formula: "ax^2 = mx + n \\Leftrightarrow ax^2 - mx - n = 0, \\ \\Delta = m^2 + 4an",
    svg: `<svg viewBox="0 0 340 240" class="w-full h-auto max-h-56 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Grid -->
      <defs>
        <pattern id="grid-p" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f1f5f9" stroke-width="1"/>
        </pattern>
      </defs>
      <rect width="340" height="240" fill="url(#grid-p)"/>
      <!-- Axes: Origin (170, 190) -->
      <line x1="20" y1="190" x2="320" y2="190" stroke="#334155" stroke-width="2"/>
      <line x1="170" y1="230" x2="170" y2="20" stroke="#334155" stroke-width="2"/>
      <text x="325" y="194" font-size="12" font-weight="bold">x</text>
      <text x="175" y="25" font-size="12" font-weight="bold">y</text>
      <text x="158" y="204" font-size="12" font-weight="bold">O</text>
      <!-- Parabol y = 0.5 x^2: peak at (170,190). Points: (+-1)->x=+-25, y=190-8=182, (+-2)->x=+-50, y=190-31=159, (+-3)->x=+-75, y=190-70=120, (+-4)->x=+-100, y=190-125=65 -->
      <path d="M 60,40 Q 170,225 280,40" fill="none" stroke="#4f46e5" stroke-width="2.5"/>
      <text x="270" y="30" font-size="12" font-weight="bold" fill="#4f46e5">(P): y = ax²</text>
      <!-- Intersecting line d: y = 0.7x + 1.2 -->
      <line x1="50" y1="180" x2="270" y2="50" stroke="#dc2626" stroke-width="2"/>
      <text x="240" y="45" font-size="12" font-weight="bold" fill="#dc2626">d: y = mx + n</text>
      <!-- Intersection points A and B -->
      <circle cx="105" cy="148" r="4" fill="#dc2626"/>
      <text x="90" y="145" font-size="12" font-weight="bold" fill="#dc2626">A(x₁;y₁)</text>
      <circle cx="230" cy="74" r="4" fill="#dc2626"/>
      <text x="238" y="75" font-size="12" font-weight="bold" fill="#dc2626">B(x₂;y₂)</text>
    </svg>`,
    tikzCode: `% --- PARABOL VÀ ĐƯỜNG THẲNG LỚP 9 ---
\\begin{tikzpicture}[>=stealth, scale=0.8]
  % Trục tọa độ
  \\draw[->] (-3.5,0) -- (3.5,0) node[right] {$x$};
  \\draw[->] (0,-0.5) -- (0,5) node[above] {$y$};
  \\node[below left] at (0,0) {$O$};
  % Vẽ Parabol y = 0.5*x^2
  \\draw[thick, indigo, domain=-3:3, samples=100] plot (\\x, {0.5*\\x*\\x}) node[right] {$(P)$};
  % Vẽ đường thẳng d: y = 0.5*x + 2
  \\draw[thick, red, domain=-3:3] plot (\\x, {0.5*\\x + 2}) node[above] {$d$};
  % Giao điểm A và B
  \\fill[red] (-1.56, 1.22) circle (2pt) node[left] {$A$};
  \\fill[red] (2.56, 3.28) circle (2pt) node[right] {$B$};
\\end{tikzpicture}`
  },

  // ------------------------------------------------------------------------
  // LỚP 10: VECTƠ, ĐƯỜNG TRÒN LƯỢNG GIÁC & BA ĐƯỜNG CONIC
  // ------------------------------------------------------------------------
  {
    id: "tikz-g10-vector",
    grade: 10,
    chapterId: "g10-c4",
    lessonId: "g10-c4-l10",
    title: "Quy tắc hình bình hành cộng hai Vectơ",
    topic: "Vectơ & Tọa độ",
    desc: "Nếu ABCD là hình bình hành thì tổng hai vectơ cùng xuất phát từ đỉnh A là vectơ đường chéo AC.",
    formula: "\\vec{AB} + \\vec{AD} = \\vec{AC}, \\ |\\vec{u} + \\vec{v}|^2 = |\\vec{u}|^2 + |\\vec{v}|^2 + 2|\\vec{u}||\\vec{v}|\\cos(\\vec{u}, \\vec{v})",
    svg: `<svg viewBox="0 0 340 220" class="w-full h-auto max-h-56 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arr-v1" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#2563eb"/>
        </marker>
        <marker id="arr-v2" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#dc2626"/>
        </marker>
        <marker id="arr-v3" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#059669"/>
        </marker>
      </defs>
      <!-- Parallelogram ABCD: A(50,170), B(200,170), D(120,60), C(270,60) -->
      <!-- Vector AB -->
      <line x1="50" y1="170" x2="194" y2="170" stroke="#2563eb" stroke-width="3" marker-end="url(#arr-v1)"/>
      <!-- Vector AD -->
      <line x1="50" y1="170" x2="117" y2="65" stroke="#dc2626" stroke-width="3" marker-end="url(#arr-v2)"/>
      <!-- Vector AC (diagonal) -->
      <line x1="50" y1="170" x2="265" y2="63" stroke="#059669" stroke-width="3.5" marker-end="url(#arr-v3)"/>
      <!-- Dashed edges BC and DC -->
      <line x1="200" y1="170" x2="270" y2="60" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="4 3"/>
      <line x1="120" y1="60" x2="270" y2="60" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="4 3"/>
      <!-- Labels -->
      <text x="35" y="180" font-size="14" font-weight="black">A</text>
      <text x="205" y="185" font-size="14" font-weight="black">B</text>
      <text x="278" y="60" font-size="14" font-weight="black">C</text>
      <text x="110" y="50" font-size="14" font-weight="black">D</text>
      <text x="120" y="195" font-size="13" font-weight="bold" fill="#2563eb">v⃗₁ = AB⃗</text>
      <text x="65" y="105" font-size="13" font-weight="bold" fill="#dc2626">v⃗₂ = AD⃗</text>
      <text x="165" y="105" font-size="13" font-weight="bold" fill="#059669">v⃗ = AC⃗</text>
    </svg>`,
    tikzCode: `% --- QUY TẮC HÌNH BÌNH HÀNH VECTƠ LỚP 10 ---
\\begin{tikzpicture}[>=stealth, scale=1.2]
  \\coordinate (A) at (0,0);
  \\coordinate (B) at (3,0);
  \\coordinate (D) at (1.2,2);
  \\coordinate (C) at ($(B)+(D)-(A)$);
  % Vẽ các vectơ
  \\draw[->, very thick, blue] (A) -- (B) node[midway, below] {$\\vec{u}$};
  \\draw[->, very thick, red] (A) -- (D) node[midway, above left] {$\\vec{v}$};
  \\draw[->, very thick, teal] (A) -- (C) node[midway, above] {$\\vec{u} + \\vec{v}$};
  % Nét đứt hoàn thành hình bình hành
  \\draw[dashed, gray] (B) -- (C) -- (D);
  % Nhãn điểm
  \\node[below left] at (A) {$A$};
  \\node[below right] at (B) {$B$};
  \\node[above right] at (C) {$C$};
  \\node[above left] at (D) {$D$};
\\end{tikzpicture}`
  },

  {
    id: "tikz-g10-trig-circle",
    grade: 10,
    chapterId: "g10-c3",
    lessonId: "g10-c3-l7",
    title: "Đường tròn lượng giác đơn vị và các trục sin, cos",
    topic: "Lượng giác",
    desc: "Đường tròn định hướng bán kính R = 1. Trục hoành là trục cos, trục tung là trục sin.",
    formula: "\\sin^2 \\alpha + \\cos^2 \\alpha = 1, \\ \\tan \\alpha = \\frac{\\sin \\alpha}{\\cos \\alpha}",
    svg: `<svg viewBox="0 0 320 260" class="w-full h-auto max-h-60 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Axes: Origin (160, 130) -->
      <line x1="20" y1="130" x2="300" y2="130" stroke="#334155" stroke-width="2"/>
      <line x1="160" y1="240" x2="160" y2="20" stroke="#334155" stroke-width="2"/>
      <text x="305" y="134" font-size="12" font-weight="bold">cos</text>
      <text x="165" y="25" font-size="12" font-weight="bold">sin</text>
      <text x="148" y="145" font-size="12" font-weight="bold">O</text>
      <!-- Unit Circle R = 80 -->
      <circle cx="160" cy="130" r="80" fill="#f8fafc" stroke="#4f46e5" stroke-width="2.5"/>
      <!-- Angle alpha = 50 deg: cos(50)=0.64 -> dx=51, sin(50)=0.76 -> dy=-61 -->
      <circle cx="211" cy="69" r="4" fill="#dc2626"/>
      <text x="220" y="66" font-size="12" font-weight="bold" fill="#dc2626">M(cos α; sin α)</text>
      <line x1="160" y1="130" x2="211" y2="69" stroke="#dc2626" stroke-width="2.5"/>
      <!-- Projection lines -->
      <line x1="211" y1="69" x2="211" y2="130" stroke="#2563eb" stroke-dasharray="3 3" stroke-width="1.8"/>
      <line x1="211" y1="69" x2="160" y2="69" stroke="#059669" stroke-dasharray="3 3" stroke-width="1.8"/>
      <!-- Labels on axes -->
      <circle cx="211" cy="130" r="3" fill="#2563eb"/><text x="205" y="148" font-size="11" font-weight="bold" fill="#2563eb">cos α</text>
      <circle cx="160" cy="69" r="3" fill="#059669"/><text x="125" y="73" font-size="11" font-weight="bold" fill="#059669">sin α</text>
      <!-- Angle arc -->
      <path d="M 185,130 A 25,25 0 0,0 178,112" fill="none" stroke="#f59e0b" stroke-width="2"/>
      <text x="190" y="120" font-size="11" font-weight="bold" fill="#d97706">α</text>
      <!-- -1, 1 ticks -->
      <text x="240" y="145" font-size="11" fill="#64748b">1</text>
      <text x="75" y="145" font-size="11" fill="#64748b">-1</text>
    </svg>`,
    tikzCode: `% --- ĐƯỜNG TRÒN LƯỢNG GIÁC LỚP 10 ---
\\begin{tikzpicture}[>=stealth, scale=1.8]
  % Trục sin và cos
  \\draw[->] (-1.3,0) -- (1.4,0) node[right] {$\\cos$};
  \\draw[->] (0,-1.3) -- (0,1.4) node[above] {$\\sin$};
  \\node[below left] at (0,0) {$O$};
  % Đường tròn đơn vị
  \\draw[thick, indigo] (0,0) circle (1cm);
  % Điểm M góc alpha = 50 độ
  \\coordinate (M) at (50:1cm);
  \\draw[->, thick, red] (0,0) -- (M) node[above right] {$M(\\cos\\alpha; \\sin\\alpha)$};
  % Hình chiếu
  \\draw[dashed, blue] (M) -- ({cos(50)}, 0) node[below] {$\\cos\\alpha$};
  \\draw[dashed, teal] (M) -- (0, {sin(50)}) node[left] {$\\sin\\alpha$};
  % Cung góc alpha
  \\draw[orange, thick] (0.3,0) arc (0:50:0.3) node[midway, right] {$\\alpha$};
\\end{tikzpicture}`
  },

  // ------------------------------------------------------------------------
  // LỚP 11: ĐỒ THỊ LƯỢNG GIÁC & QUAN HỆ VUÔNG GÓC KHÔNG GIAN
  // ------------------------------------------------------------------------
  {
    id: "tikz-g11-sin-function",
    grade: 11,
    chapterId: "g11-c1",
    lessonId: "g11-c1-l2",
    title: "Đồ thị hàm số lượng giác y = sin x",
    topic: "Giải tích & Hàm số",
    desc: "Đồ thị sóng hình sin tuần hoàn với chu kỳ T = 2π, tập giá trị [-1; 1], đi qua gốc tọa độ O.",
    formula: "y = \\sin x, \\quad T = 2\\pi, \\quad D = \\mathbb{R}, \\quad y \\in [-1; 1]",
    svg: `<svg viewBox="0 0 380 180" class="w-full h-auto max-h-52 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Axes: Origin at (120, 90) -->
      <line x1="20" y1="90" x2="360" y2="90" stroke="#334155" stroke-width="2"/>
      <line x1="120" y1="165" x2="120" y2="15" stroke="#334155" stroke-width="2"/>
      <text x="365" y="94" font-size="12" font-weight="bold">x</text>
      <text x="125" y="20" font-size="12" font-weight="bold">y</text>
      <text x="108" y="105" font-size="12" font-weight="bold">O</text>
      <!-- Dashed bound lines y = 1, y = -1 (amplitude = 50px) -->
      <line x1="20" y1="40" x2="350" y2="40" stroke="#cbd5e1" stroke-dasharray="3 3"/>
      <line x1="20" y1="140" x2="350" y2="140" stroke="#cbd5e1" stroke-dasharray="3 3"/>
      <text x="105" y="44" font-size="11" font-weight="bold" fill="#64748b">1</text>
      <text x="100" y="144" font-size="11" font-weight="bold" fill="#64748b">-1</text>
      <!-- Sine wave path from x = -pi to x = 2.5pi -->
      <!-- Scale: pi = 70px. Peak at pi/2 (155, 40), node at pi (190, 90), trough at 3pi/2 (225, 140), node at 2pi (260, 90) -->
      <path d="M 50,90 Q 85,140 120,90 T 190,90 T 260,90 T 330,90" fill="none" stroke="#4f46e5" stroke-width="3"/>
      <!-- Critical points -->
      <circle cx="155" cy="40" r="3.5" fill="#dc2626"/><text x="155" y="32" font-size="10" font-weight="bold" fill="#dc2626" text-anchor="middle">(π/2; 1)</text>
      <circle cx="225" cy="140" r="3.5" fill="#dc2626"/><text x="225" y="156" font-size="10" font-weight="bold" fill="#dc2626" text-anchor="middle">(3π/2; -1)</text>
      <!-- Ticks -->
      <text x="190" y="106" font-size="11" font-weight="bold" fill="#2563eb" text-anchor="middle">π</text>
      <text x="260" y="106" font-size="11" font-weight="bold" fill="#2563eb" text-anchor="middle">2π</text>
      <text x="50" y="106" font-size="11" font-weight="bold" fill="#64748b" text-anchor="middle">-π</text>
    </svg>`,
    tikzCode: `% --- ĐỒ THỊ HÀM SỐ SIN LỚP 11 ---
\\begin{tikzpicture}[>=stealth, scale=1]
  \\draw[->] (-3.5,0) -- (7,0) node[right] {$x$};
  \\draw[->] (0,-1.5) -- (0,1.5) node[above] {$y$};
  \\node[below left] at (0,0) {$O$};
  % Giới hạn biên y = +-1
  \\draw[dashed, gray] (-3,1) -- (6.5,1) node[right] {$y=1$};
  \\draw[dashed, gray] (-3,-1) -- (6.5,-1) node[right] {$y=-1$};
  % Vẽ hàm sin(x)
  \\draw[very thick, indigo, domain=-pi:2*pi, samples=120] plot (\\x, {sin(\\x r)});
  % Các điểm mốc
  \\node[below] at (pi,0) {$\\pi$};
  \\node[below] at (2*pi,0) {$2\\pi$};
  \\node[below] at (-pi,0) {$-\\pi$};
\\end{tikzpicture}`
  },

  {
    id: "tikz-g11-line-plane-perp",
    grade: 11,
    chapterId: "g11-c8",
    lessonId: "g11-c8-l23",
    title: "Đường thẳng vuông góc với mặt phẳng",
    topic: "Hình học không gian",
    desc: "Đường thẳng d vuông góc với hai đường thẳng cắt nhau a và b cùng nằm trong mặt phẳng (P) thì d vuông góc với (P).",
    formula: "d \\perp a, \\ d \\perp b, \\ a \\cap b = O, \\ a, b \\subset (P) \\implies d \\perp (P)",
    svg: `<svg viewBox="0 0 340 240" class="w-full h-auto max-h-56 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Plane (P) parallelogram: (50,170), (220,170), (290,100), (120,100) -->
      <polygon points="50,170 220,170 290,100 120,100" fill="#f1f5f9" stroke="#64748b" stroke-width="2"/>
      <text x="65" y="160" font-size="13" font-weight="black" fill="#475569">(P)</text>
      <!-- Line a and b in (P) crossing at O(180, 135) -->
      <line x1="100" y1="145" x2="260" y2="125" stroke="#2563eb" stroke-width="2"/>
      <text x="265" y="128" font-size="12" font-weight="bold" fill="#2563eb">a</text>
      <line x1="140" y1="110" x2="220" y2="160" stroke="#059669" stroke-width="2"/>
      <text x="225" y="165" font-size="12" font-weight="bold" fill="#059669">b</text>
      <!-- Point O -->
      <circle cx="180" cy="135" r="3.5" fill="#1e1b4b"/><text x="188" y="146" font-size="12" font-weight="bold">O</text>
      <!-- Line d perpendicular to (P) at O -->
      <!-- Upper part (visible) -->
      <line x1="180" y1="20" x2="180" y2="135" stroke="#dc2626" stroke-width="2.8"/>
      <!-- Lower part (hidden dashed then visible) -->
      <line x1="180" y1="135" x2="180" y2="180" stroke="#dc2626" stroke-width="2.2" stroke-dasharray="4 3"/>
      <line x1="180" y1="180" x2="180" y2="220" stroke="#dc2626" stroke-width="2.5"/>
      <text x="188" y="30" font-size="14" font-weight="black" fill="#dc2626">d</text>
      <!-- Right angle markers -->
      <path d="M 180,123 L 192,121 L 192,133" fill="none" stroke="#dc2626" stroke-width="1.5"/>
    </svg>`,
    tikzCode: `% --- ĐƯỜNG THẲNG VUÔNG GÓC MẶT PHẲNG LỚP 11 ---
\\begin{tikzpicture}[scale=1]
  % Mặt phẳng (P)
  \\draw[thick, gray, fill=gray!10] (0,0) -- (4,0) -- (5.5,1.5) -- (1.5,1.5) -- cycle;
  \\node[above right] at (0,0) {$(P)$};
  % Hai đường thẳng cắt nhau a, b tại O
  \\coordinate (O) at (2.8,0.75);
  \\draw[thick, blue] (1,0.6) -- (4.5,0.9) node[right] {$a$};
  \\draw[thick, teal] (1.8,1.3) -- (3.8,0.2) node[right] {$b$};
  \\fill (O) circle (1.5pt) node[below right] {$O$};
  % Đường thẳng d vuông góc tại O
  \\draw[very thick, red] (O) -- (2.8,3) node[above] {$d$};
  \\draw[dashed, red] (O) -- (2.8,-0.5);
  \\draw[very thick, red] (2.8,-0.5) -- (2.8,-1.2);
  % Góc vuông
  \\draw[red] (2.8, 1) -- (3, 1) -- (3, 0.75);
\\end{tikzpicture}`
  },

  // ------------------------------------------------------------------------
  // LỚP 12: KHẢO SÁT HÀM SỐ, HÌNH HỌC OXYZ & ỨNG DỤNG TÍCH PHÂN
  // ------------------------------------------------------------------------
  {
    id: "tikz-g12-cubic-graph",
    grade: 12,
    chapterId: "g12-c1",
    lessonId: "g12-c1-l5",
    title: "Đồ thị hàm số bậc ba y = ax³ + bx² + cx + d có 2 cực trị",
    topic: "Ứng dụng đạo hàm",
    desc: "Hàm số có hai điểm cực trị x_CĐ, x_CT khi phương trình y' = 0 có hai nghiệm phân biệt (Δ' > 0).",
    formula: "y' = 3ax^2 + 2bx + c = 0, \\ \\Delta'_{y'} = b^2 - 3ac > 0",
    svg: `<svg viewBox="0 0 340 240" class="w-full h-auto max-h-56 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Axes: Origin (150, 130) -->
      <line x1="20" y1="130" x2="320" y2="130" stroke="#334155" stroke-width="2"/>
      <line x1="150" y1="230" x2="150" y2="20" stroke="#334155" stroke-width="2"/>
      <text x="325" y="134" font-size="12" font-weight="bold">x</text>
      <text x="155" y="25" font-size="12" font-weight="bold">y</text>
      <text x="138" y="145" font-size="12" font-weight="bold">O</text>
      <!-- Cubic Curve: Local Max at (95, 60), Inflection at (150, 110), Local Min at (205, 160) -->
      <path d="M 50,210 C 75,120 85,60 100,60 C 120,60 135,110 150,110 C 165,110 180,160 200,160 C 215,160 225,100 250,-10" fill="none" stroke="#4f46e5" stroke-width="3"/>
      <!-- Critical points -->
      <!-- Max (100, 60) -->
      <circle cx="100" cy="60" r="4" fill="#dc2626"/>
      <line x1="100" y1="60" x2="100" y2="130" stroke="#dc2626" stroke-dasharray="3 3"/>
      <line x1="100" y1="60" x2="150" y2="60" stroke="#dc2626" stroke-dasharray="3 3"/>
      <text x="80" y="52" font-size="11" font-weight="bold" fill="#dc2626">Cực Đại</text>
      <text x="95" y="145" font-size="11" font-weight="bold" fill="#dc2626">x₁</text>
      <!-- Min (200, 160) -->
      <circle cx="200" cy="160" r="4" fill="#059669"/>
      <line x1="200" y1="160" x2="200" y2="130" stroke="#059669" stroke-dasharray="3 3"/>
      <line x1="200" y1="160" x2="150" y2="160" stroke="#059669" stroke-dasharray="3 3"/>
      <text x="195" y="180" font-size="11" font-weight="bold" fill="#059669">Cực Tiểu</text>
      <text x="198" y="125" font-size="11" font-weight="bold" fill="#059669">x₂</text>
      <!-- Inflection point I (150, 110) -->
      <circle cx="150" cy="110" r="3.5" fill="#f59e0b"/>
      <text x="156" y="112" font-size="11" font-weight="bold" fill="#d97706">Uốn I</text>
    </svg>`,
    tikzCode: `% --- ĐỒ THỊ BẬC BA LỚP 12 ---
\\begin{tikzpicture}[>=stealth, scale=0.9]
  \\draw[->] (-3,0) -- (3.5,0) node[right] {$x$};
  \\draw[->] (0,-2.5) -- (0,3) node[above] {$y$};
  \\node[below left] at (0,0) {$O$};
  % Vẽ đồ thị f(x) = x^3 - 3x
  \\draw[very thick, indigo, domain=-2.1:2.1, samples=100] plot (\\x, {\\x*\\x*\\x - 3*\\x});
  % Điểm cực đại (-1, 2)
  \\filldraw[red] (-1,2) circle (2pt) node[above left] {Cực đại $(-1; 2)$};
  \\draw[dashed, red] (-1,0) node[below] {$-1$} -- (-1,2) -- (0,2) node[right] {$2$};
  % Điểm cực tiểu (1, -2)
  \\filldraw[teal] (1,-2) circle (2pt) node[below right] {Cực tiểu $(1; -2)$};
  \\draw[dashed, teal] (1,0) node[above] {$1$} -- (1,-2) -- (0,-2) node[left] {$-2$};
\\end{tikzpicture}`
  },

  {
    id: "tikz-g12-oxyz-plane",
    grade: 12,
    chapterId: "g12-c2",
    lessonId: "g12-c2-l8",
    title: "Hệ trục toạ độ không gian Oxyz và Vectơ pháp tuyến mặt phẳng",
    topic: "Hình học tọa độ không gian",
    desc: "Hệ toạ độ Oxyz gồm 3 trục vuông góc từng đôi một. Mặt phẳng (P) được xác định bởi điểm đi qua và vectơ pháp tuyến n.",
    formula: "\\vec{n} = (A; B; C) \\perp (P), \\quad (P): A(x-x_0) + B(y-y_0) + C(z-z_0) = 0",
    svg: `<svg viewBox="0 0 340 260" class="w-full h-auto max-h-60 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arr-xyz" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#1e293b"/>
        </marker>
        <marker id="arr-norm" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#dc2626"/>
        </marker>
      </defs>
      <!-- Axes Oxyz: Origin O(130, 160) -->
      <!-- Oz vertical -->
      <line x1="130" y1="160" x2="130" y2="25" stroke="#1e293b" stroke-width="2.5" marker-end="url(#arr-xyz)"/>
      <text x="135" y="25" font-size="14" font-weight="black">z</text>
      <!-- Oy horizontal right -->
      <line x1="130" y1="160" x2="310" y2="160" stroke="#1e293b" stroke-width="2.5" marker-end="url(#arr-xyz)"/>
      <text x="315" y="165" font-size="14" font-weight="black">y</text>
      <!-- Ox oblique bottom-left -->
      <line x1="130" y1="160" x2="45" y2="235" stroke="#1e293b" stroke-width="2.5" marker-end="url(#arr-xyz)"/>
      <text x="35" y="240" font-size="14" font-weight="black">x</text>
      <text x="115" y="175" font-size="14" font-weight="black">O</text>
      <!-- Plane (P) floating in space -->
      <polygon points="170,120 280,100 240,190 140,210" fill="#e0e7ff" fill-opacity="0.6" stroke="#4f46e5" stroke-width="2"/>
      <text x="155" y="200" font-size="13" font-weight="black" fill="#4338ca">(P)</text>
      <!-- Point M0 on (P) -->
      <circle cx="210" cy="155" r="3.5" fill="#1e1b4b"/><text x="218" y="165" font-size="12" font-weight="bold">M₀(x₀;y₀;z₀)</text>
      <!-- Normal vector n perpendicular to (P) -->
      <line x1="210" y1="155" x2="225" y2="70" stroke="#dc2626" stroke-width="3" marker-end="url(#arr-norm)"/>
      <text x="232" y="75" font-size="13" font-weight="black" fill="#dc2626">n⃗ = (A; B; C)</text>
      <!-- Right angle marker -->
      <path d="M 213,142 L 222,143 L 220,154" fill="none" stroke="#dc2626" stroke-width="1.5"/>
    </svg>`,
    tikzCode: `% --- HỆ TRỤC OXYZ VÀ MẶT PHẲNG LỚP 12 ---
\\begin{tikzpicture}[>=stealth, scale=1]
  % Hệ trục tọa độ Oxyz
  \\draw[->, thick] (0,0,0) -- (4,0,0) node[right] {$y$};
  \\draw[->, thick] (0,0,0) -- (0,4,0) node[above] {$z$};
  \\draw[->, thick] (0,0,0) -- (0,0,4) node[below left] {$x$};
  \\node[below left] at (0,0,0) {$O$};
  % Mặt phẳng (P)
  \\coordinate (M) at (2,1.5,1);
  \\filldraw[indigo!15, draw=indigo, thick] (1,0.5,1) -- (3.5,0.8,0.5) -- (3,2.5,1) -- (0.5,2.2,1.5) -- cycle;
  \\node[above right, indigo] at (0.5,2.2,1.5) {$(P)$};
  % Vectơ pháp tuyến n
  \\fill (M) circle (1.5pt) node[below] {$M_0$};
  \\draw[->, very thick, red] (M) -- ++(0,1.8,0) node[above] {$\\vec{n} = (A; B; C)$};
\\end{tikzpicture}`
  },

  {
    id: "tikz-g12-integral-area",
    grade: 12,
    chapterId: "g12-c4",
    lessonId: "g12-c4-l17",
    title: "Ứng dụng hình học của Tích phân tính diện tích hình phẳng",
    topic: "Nguyên hàm & Tích phân",
    desc: "Diện tích hình phẳng giới hạn bởi đồ thị hàm số y = f(x), trục hoành Ox và hai đường thẳng x = a, x = b.",
    formula: "S = \\int_{a}^{b} |f(x)| dx",
    svg: `<svg viewBox="0 0 340 220" class="w-full h-auto max-h-56 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Axes: Origin (50, 160) -->
      <line x1="20" y1="160" x2="320" y2="160" stroke="#334155" stroke-width="2"/>
      <line x1="50" y1="200" x2="50" y2="20" stroke="#334155" stroke-width="2"/>
      <text x="325" y="164" font-size="12" font-weight="bold">x</text>
      <text x="55" y="25" font-size="12" font-weight="bold">y</text>
      <text x="38" y="175" font-size="12" font-weight="bold">O</text>
      <!-- Area under curve from a(90,160) to b(240,160) -->
      <!-- Curve path: y = -0.005*(x-165)^2 + 130 -> top around (165, 45) -->
      <path d="M 90,160 C 110,80 140,50 165,50 C 190,50 220,90 240,160 Z" fill="#dbeafe" stroke="none"/>
      <!-- Shading lines inside area -->
      <g stroke="#93c5fd" stroke-width="1.2">
        <line x1="110" y1="160" x2="110" y2="105"/>
        <line x1="130" y1="160" x2="130" y2="72"/>
        <line x1="150" y1="160" x2="150" y2="55"/>
        <line x1="170" y1="160" x2="170" y2="52"/>
        <line x1="190" y1="160" x2="190" y2="65"/>
        <line x1="210" y1="160" x2="210" y2="92"/>
        <line x1="230" y1="160" x2="230" y2="135"/>
      </g>
      <!-- Curve y = f(x) -->
      <path d="M 60,190 C 100,60 140,45 165,45 C 195,45 230,80 270,200" fill="none" stroke="#2563eb" stroke-width="2.8"/>
      <text x="180" y="38" font-size="13" font-weight="bold" fill="#2563eb">y = f(x)</text>
      <!-- Vertical bounding lines x = a, x = b -->
      <line x1="90" y1="160" x2="90" y2="105" stroke="#dc2626" stroke-width="2" stroke-dasharray="3 3"/>
      <line x1="240" y1="160" x2="240" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="3 3"/>
      <!-- Ticks a and b -->
      <circle cx="90" cy="160" r="3.5" fill="#dc2626"/><text x="88" y="178" font-size="13" font-weight="black" fill="#dc2626">a</text>
      <circle cx="240" cy="160" r="3.5" fill="#dc2626"/><text x="238" y="178" font-size="13" font-weight="black" fill="#dc2626">b</text>
      <!-- Area label -->
      <text x="165" y="115" font-size="14" font-weight="black" fill="#1e40af" text-anchor="middle">S = ∫ₐᵇ f(x)dx</text>
    </svg>`,
    tikzCode: `% --- ỨNG DỤNG TÍCH PHÂN TÍNH DIỆN TÍCH LỚP 12 ---
\\begin{tikzpicture}[>=stealth, scale=1]
  \\draw[->] (-0.5,0) -- (5,0) node[right] {$x$};
  \\draw[->] (0,-0.5) -- (0,3.5) node[above] {$y$};
  \\node[below left] at (0,0) {$O$};
  % Miền gạch chéo tích phân
  \\fill[indigo!20, domain=1:3.8, variable=\\x]
    (1,0) -- plot (\\x, {-0.4*(\\x-2.4)*(\\x-2.4) + 2.8}) -- (3.8,0) -- cycle;
  % Đồ thị hàm số y = f(x)
  \\draw[very thick, blue, domain=0.5:4.2, samples=80]
    plot (\\x, {-0.4*(\\x-2.4)*(\\x-2.4) + 2.8}) node[above] {$y=f(x)$};
  % Hai cận x = a, x = b
  \\draw[dashed, red] (1,0) node[below] {$a$} -- (1, 2.01);
  \\draw[dashed, red] (3.8,0) node[below] {$b$} -- (3.8, 2.01);
  \\node at (2.4, 1.2) [indigo!80!black] {$S = \\int_a^b f(x)dx$};
\\end{tikzpicture}`
  }
];

// ==========================================================================
// HÀM TIỆN ÍCH QUẢN LÝ HÌNH VẼ & TIKZ
// ==========================================================================

// Tìm hình vẽ liên quan đến khối lớp hoặc bài học
window.getTikzDiagramForLesson = function(gradeId, chapterId, lessonId) {
  // Tìm khớp bài học
  if (lessonId) {
    const directMatch = window.MATH_TIKZ_LIBRARY.find(d => d.lessonId === lessonId);
    if (directMatch) return directMatch;
  }
  // Tìm khớp chương
  if (chapterId) {
    const chMatch = window.MATH_TIKZ_LIBRARY.find(d => d.chapterId === chapterId);
    if (chMatch) return chMatch;
  }
  // Tìm theo khối lớp
  const gradeMatches = window.MATH_TIKZ_LIBRARY.filter(d => d.grade === parseInt(gradeId));
  if (gradeMatches.length > 0) return gradeMatches[0];
  return window.MATH_TIKZ_LIBRARY[0];
};

// Sao chép mã TikZ LaTeX vào clipboard
window.copyTikzCode = function(diagramId) {
  const item = window.MATH_TIKZ_LIBRARY.find(d => d.id === diagramId);
  if (!item) return;

  navigator.clipboard.writeText(item.tikzCode).then(() => {
    // Hiển thị thông báo toast
    showTikzToast(`Đã sao chép mã TikZ LaTeX cho "${item.title}"!`);
  }).catch(() => {
    // Fallback nếu trình duyệt chặn clipboard
    const textarea = document.createElement('textarea');
    textarea.value = item.tikzCode;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    showTikzToast(`Đã sao chép mã TikZ LaTeX!`);
  });
};

// Bật/tắt hiển thị mã nguồn TikZ
window.toggleTikzCodeBox = function(boxId) {
  const box = document.getElementById(boxId);
  if (!box) return;
  box.classList.toggle('hidden');
};

// Hiển thị thông báo nhỏ (Toast)
function showTikzToast(msg) {
  let toast = document.getElementById('tikz-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'tikz-toast';
    toast.className = 'fixed bottom-6 right-6 z-[9999] bg-slate-900 text-white px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-2.5 border border-indigo-400 text-xs font-bold transition transform duration-300';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<i data-lucide="check-circle" class="w-4 h-4 text-emerald-400"></i> ${msg}`;
  if (window.lucide) window.lucide.createIcons({ root: toast });
  toast.classList.remove('opacity-0', 'translate-y-4', 'hidden');
  toast.classList.add('opacity-100', 'translate-y-0');

  clearTimeout(window._tikzToastTimer);
  window._tikzToastTimer = setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-4');
    setTimeout(() => toast.classList.add('hidden'), 300);
  }, 2500);
}
