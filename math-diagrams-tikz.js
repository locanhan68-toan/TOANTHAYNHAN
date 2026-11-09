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

  {
    id: "tikz-g7-box-cube",
    grade: 7,
    chapterId: "g7-c8",
    lessonId: "g7-c8-l30",
    title: "Hình hộp chữ nhật ABCD.A'B'C'D' và Hình lập phương",
    topic: "Hình học không gian",
    desc: "Hình hộp chữ nhật có 6 mặt là hình chữ nhật, 8 đỉnh, 12 cạnh với 3 kích thước dài a, rộng b, cao c.",
    formula: "S_{xq} = 2(a+b)c, \\quad V = a \\cdot b \\cdot c",
    svg: `<svg viewBox="0 0 340 240" class="w-full h-auto max-h-56 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Bottom ABCD: A(85,155), B(50,195), C(220,195), D(255,155) -->
      <!-- Top A'B'C'D': A'(85,55), B'(50,95), C'(220,95), D'(255,55) -->
      <polygon points="50,95 220,95 220,195 50,195" fill="#eff6ff" fill-opacity="0.5"/>
      <polygon points="85,55 255,55 220,95 50,95" fill="#e0e7ff" fill-opacity="0.55"/>
      <polygon points="220,95 255,55 255,155 220,195" fill="#dbeafe" fill-opacity="0.45"/>
      <!-- Hidden edges (dashed): A'A, AB, AD -->
      <line x1="85" y1="55" x2="85" y2="155" stroke="#64748b" stroke-width="1.8" stroke-dasharray="5 3"/>
      <line x1="85" y1="155" x2="50" y2="195" stroke="#64748b" stroke-width="1.8" stroke-dasharray="5 3"/>
      <line x1="85" y1="155" x2="255" y2="155" stroke="#64748b" stroke-width="1.8" stroke-dasharray="5 3"/>
      <!-- Space diagonal AC' (dashed red) -->
      <line x1="85" y1="155" x2="220" y2="95" stroke="#dc2626" stroke-width="2" stroke-dasharray="4 3"/>
      <!-- Visible edges -->
      <polygon points="85,55 255,55 220,95 50,95" fill="none" stroke="#1e293b" stroke-width="2.2"/>
      <line x1="50" y1="95" x2="50" y2="195" stroke="#1e293b" stroke-width="2.2"/>
      <line x1="220" y1="95" x2="220" y2="195" stroke="#1e293b" stroke-width="2.2"/>
      <line x1="255" y1="55" x2="255" y2="155" stroke="#1e293b" stroke-width="2.2"/>
      <line x1="50" y1="195" x2="220" y2="195" stroke="#1e293b" stroke-width="2.2"/>
      <line x1="220" y1="195" x2="255" y2="155" stroke="#1e293b" stroke-width="2.2"/>
      <!-- Vertices & Dimensions -->
      <text x="72" y="155" font-size="12" font-weight="bold" fill="#475569">A</text>
      <text x="34" y="204" font-size="12" font-weight="bold">B</text>
      <text x="222" y="212" font-size="12" font-weight="bold">C</text>
      <text x="263" y="160" font-size="12" font-weight="bold">D</text>
      <text x="72" y="48" font-size="12" font-weight="bold">A'</text>
      <text x="32" y="95" font-size="12" font-weight="bold">B'</text>
      <text x="225" y="92" font-size="12" font-weight="bold">C'</text>
      <text x="262" y="55" font-size="12" font-weight="bold">D'</text>
      <text x="135" y="212" font-size="12" font-weight="black" fill="#2563eb">a</text>
      <text x="245" y="182" font-size="12" font-weight="black" fill="#059669">b</text>
      <text x="264" y="110" font-size="12" font-weight="black" fill="#dc2626">c</text>
    </svg>`,
    tikzCode: `% --- HÌNH HỘP CHỮ NHẬT ABCD.A'B'C'D' LỚP 7 ---
\\begin{tikzpicture}[scale=1, line join=round]
  \\coordinate (A) at (0,0);
  \\coordinate (B) at (-1,-1);
  \\coordinate (D) at (3.5,0);
  \\coordinate (C) at ($(B)+(D)-(A)$);
  \\coordinate (A') at (0,2.4);
  \\coordinate (B') at ($(B)+(A')-(A)$);
  \\coordinate (C') at ($(C)+(A')-(A)$);
  \\coordinate (D') at ($(D)+(A')-(A)$);
  \\draw[dashed] (A) -- (B) (A) -- (D) (A) -- (A');
  \\draw[dashed, red] (A) -- (C');
  \\draw[thick] (B) -- (C) -- (D) -- (D') -- (A') -- (B') -- (B);
  \\draw[thick] (B') -- (C') -- (D') (C) -- (C');
  \\foreach \\p/\\pos in {A/left, B/below left, C/below right, D/right, A'/above left, B'/left, C'/above right, D'/above right}
    \\fill (\\p) circle (1.3pt) node[\\pos] {$\\p$};
\\end{tikzpicture}`
  },

  {
    id: "tikz-g7-standing-prism",
    grade: 7,
    chapterId: "g7-c8",
    lessonId: "g7-c8-l31",
    title: "Hình lăng trụ đứng tam giác ABC.A'B'C'",
    topic: "Hình học không gian",
    desc: "Hai đáy ABC và A'B'C' là hai tam giác song song và bằng nhau, các mặt bên là hình chữ nhật, cạnh bên vuông góc với đáy bằng chiều cao h.",
    formula: "S_{xq} = C_{\\text{đáy}} \\cdot h, \\quad V = S_{\\text{đáy}} \\cdot h",
    svg: `<svg viewBox="0 0 340 245" class="w-full h-auto max-h-56 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Top A'(75,55), B'(155,95), C'(255,55); Bottom A(75,175), B(155,215), C(255,175) -->
      <polygon points="75,55 155,95 255,55" fill="#e0e7ff" fill-opacity="0.6" stroke="#1e293b" stroke-width="2.2"/>
      <polygon points="75,55 155,95 155,215 75,175" fill="#eff6ff" fill-opacity="0.45"/>
      <polygon points="155,95 255,55 255,175 155,215" fill="#dbeafe" fill-opacity="0.45"/>
      <!-- Hidden edge AC (dashed) -->
      <line x1="75" y1="175" x2="255" y2="175" stroke="#64748b" stroke-width="1.8" stroke-dasharray="5 3"/>
      <!-- Visible edges -->
      <line x1="75" y1="55" x2="75" y2="175" stroke="#1e293b" stroke-width="2.2"/>
      <line x1="155" y1="95" x2="155" y2="215" stroke="#4f46e5" stroke-width="2.5"/>
      <line x1="255" y1="55" x2="255" y2="175" stroke="#1e293b" stroke-width="2.2"/>
      <line x1="75" y1="175" x2="155" y2="215" stroke="#1e293b" stroke-width="2.2"/>
      <line x1="155" y1="215" x2="255" y2="175" stroke="#1e293b" stroke-width="2.2"/>
      <!-- Right angle marker at B -->
      <path d="M 155,201 L 167,196 L 167,210" fill="none" stroke="#dc2626" stroke-width="1.6"/>
      <!-- Labels -->
      <circle cx="75" cy="55" r="3.5" fill="#1e293b"/><text x="55" y="55" font-size="12" font-weight="bold">A'</text>
      <circle cx="155" cy="95" r="3.5" fill="#1e293b"/><text x="150" y="85" font-size="12" font-weight="bold">B'</text>
      <circle cx="255" cy="55" r="3.5" fill="#1e293b"/><text x="263" y="55" font-size="12" font-weight="bold">C'</text>
      <circle cx="75" cy="175" r="3.5" fill="#1e293b"/><text x="58" y="180" font-size="12" font-weight="bold">A</text>
      <circle cx="155" cy="215" r="3.5" fill="#1e293b"/><text x="150" y="232" font-size="12" font-weight="bold">B</text>
      <circle cx="255" cy="175" r="3.5" fill="#1e293b"/><text x="263" y="180" font-size="12" font-weight="bold">C</text>
      <text x="163" y="158" font-size="13" font-weight="black" fill="#dc2626">h</text>
    </svg>`,
    tikzCode: `% --- HÌNH LĂNG TRỤ ĐỨNG TAM GIÁC ABC.A'B'C' LỚP 7 ---
\\begin{tikzpicture}[scale=1, line join=round]
  \\coordinate (A) at (0,0);
  \\coordinate (B) at (1.6,-0.9);
  \\coordinate (C) at (3.8,0);
  \\coordinate (A') at (0,2.6);
  \\coordinate (B') at (1.6,1.7);
  \\coordinate (C') at (3.8,2.6);
  \\draw[dashed] (A) -- (C);
  \\draw[thick, fill=indigo!10] (A') -- (B') -- (C') -- cycle;
  \\draw[thick] (A) -- (B) -- (C) (A) -- (A') (B) -- (B') node[midway, right, red] {$h$} (C) -- (C');
  \\foreach \\p/\\pos in {A/left, B/below, C/right, A'/above left, B'/above, C'/above right}
    \\fill (\\p) circle (1.3pt) node[\\pos] {$\\p$};
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
    id: "tikz-g8-regular-tri-pyramid",
    grade: 8,
    chapterId: "g8-c10",
    lessonId: "g8-c10-l35",
    title: "Hình chóp tam giác đều S.ABC trong không gian",
    topic: "Hình học không gian",
    desc: "Đáy ABC là tam giác đều, các mặt bên là các tam giác cân bằng nhau, SH là chiều cao hạ xuống trọng tâm H và SM là trung đoạn.",
    formula: "S_{xq} = p \\cdot d, \\quad V = \\frac{1}{3} S_{\\text{đáy}} \\cdot h",
    svg: `<svg viewBox="0 0 340 250" class="w-full h-auto max-h-56 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Base ABC: A(65,175), B(165,220), C(275,175); Midpoint M of BC(220,197.5); Centroid H(168,190); Peak S(168,35) -->
      <polygon points="168,35 65,175 165,220" fill="#eef2ff" fill-opacity="0.5"/>
      <polygon points="168,35 165,220 275,175" fill="#e0e7ff" fill-opacity="0.55"/>
      <!-- Hidden lines: AC, AM, SH -->
      <line x1="65" y1="175" x2="275" y2="175" stroke="#64748b" stroke-width="1.8" stroke-dasharray="5 3"/>
      <line x1="65" y1="175" x2="220" y2="198" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/>
      <line x1="168" y1="35" x2="168" y2="190" stroke="#dc2626" stroke-width="2.2" stroke-dasharray="5 3"/>
      <!-- Slant height SM (emerald) -->
      <line x1="168" y1="35" x2="220" y2="198" stroke="#059669" stroke-width="2.2"/>
      <!-- Visible edges: SA, SB, SC, AB, BC -->
      <line x1="168" y1="35" x2="65" y2="175" stroke="#4f46e5" stroke-width="2.4"/>
      <line x1="168" y1="35" x2="165" y2="220" stroke="#4f46e5" stroke-width="2.4"/>
      <line x1="168" y1="35" x2="275" y2="175" stroke="#4f46e5" stroke-width="2.4"/>
      <line x1="65" y1="175" x2="165" y2="220" stroke="#1e293b" stroke-width="2.2"/>
      <line x1="165" y1="220" x2="275" y2="175" stroke="#1e293b" stroke-width="2.2"/>
      <!-- Right angle at H -->
      <path d="M 168,178 L 179,180 L 179,191" fill="none" stroke="#dc2626" stroke-width="1.5"/>
      <!-- Labels -->
      <circle cx="168" cy="35" r="3.5" fill="#4f46e5"/><text x="168" y="22" font-size="13" font-weight="black" text-anchor="middle">S</text>
      <circle cx="65" cy="175" r="3.5" fill="#1e293b"/><text x="48" y="180" font-size="12" font-weight="bold">A</text>
      <circle cx="165" cy="220" r="3.5" fill="#1e293b"/><text x="160" y="238" font-size="12" font-weight="bold">B</text>
      <circle cx="275" cy="175" r="3.5" fill="#1e293b"/><text x="284" y="180" font-size="12" font-weight="bold">C</text>
      <circle cx="168" cy="190" r="3.5" fill="#dc2626"/><text x="152" y="198" font-size="12" font-weight="black" fill="#dc2626">H</text>
      <circle cx="220" cy="198" r="3.5" fill="#059669"/><text x="228" y="210" font-size="12" font-weight="bold" fill="#059669">M</text>
      <text x="155" y="122" font-size="12" font-weight="black" fill="#dc2626">h</text>
      <text x="204" y="125" font-size="12" font-weight="black" fill="#059669">d</text>
    </svg>`,
    tikzCode: `% --- HÌNH CHÓP TAM GIÁC ĐỀU S.ABC LỚP 8 ---
\\begin{tikzpicture}[scale=1, line join=round]
  \\coordinate (A) at (0,0);
  \\coordinate (B) at (1.8,-1.1);
  \\coordinate (C) at (4.2,0);
  \\coordinate (M) at ($(B)!0.5!(C)$);
  \\coordinate (H) at ($(A)!0.67!(M)$);
  \\coordinate (S) at ($(H)+(0,3.2)$);
  \\draw[dashed] (A) -- (C) (A) -- (M);
  \\draw[dashed, red, thick] (S) -- (H) node[midway, left] {$h$};
  \\draw[thick, teal] (S) -- (M) node[midway, right] {$d$};
  \\draw[thick] (A) -- (B) -- (C) (S) -- (A) (S) -- (B) (S) -- (C);
  \\foreach \\p/\\pos in {S/above, A/left, B/below, C/right, H/below left, M/below right}
    \\fill (\\p) circle (1.3pt) node[\\pos] {$\\p$};
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

  {
    id: "tikz-g9-cylinder",
    grade: 9,
    chapterId: "g9-c8",
    lessonId: "g9-c8-l25",
    title: "Hình trụ tròn xoay: Bán kính đáy R, chiều cao h và đường sinh l = h",
    topic: "Hình học không gian",
    desc: "Khi quay hình chữ nhật OAA'O' một vòng quanh cạnh OO' cố định ta được một hình trụ có hai đáy là hai hình tròn (O; R) và (O'; R) song song bằng nhau.",
    formula: "S_{xq} = 2\\pi Rh, \\quad S_{tp} = 2\\pi Rh + 2\\pi R^2, \\quad V = \\pi R^2 h",
    svg: `<svg viewBox="0 0 340 245" class="w-full h-auto max-h-56 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Top ellipse center O'(170, 55), rx=85, ry=24; Bottom ellipse center O(170, 185), rx=85, ry=24 -->
      <path d="M 85,55 L 85,185 A 85,24 0 0,0 255,185 L 255,55 Z" fill="#eff6ff" fill-opacity="0.55"/>
      <!-- Bottom hidden half arc (dashed) -->
      <path d="M 85,185 A 85,24 0 0,1 255,185" fill="none" stroke="#64748b" stroke-width="1.8" stroke-dasharray="5 3"/>
      <!-- Bottom visible half arc -->
      <path d="M 85,185 A 85,24 0 0,0 255,185" fill="none" stroke="#1e293b" stroke-width="2.3"/>
      <!-- Top ellipse (visible) -->
      <ellipse cx="170" cy="55" rx="85" ry="24" fill="#e0e7ff" fill-opacity="0.6" stroke="#1e293b" stroke-width="2.3"/>
      <!-- Side generators -->
      <line x1="85" y1="55" x2="85" y2="185" stroke="#4f46e5" stroke-width="2.5"/>
      <line x1="255" y1="55" x2="255" y2="185" stroke="#4f46e5" stroke-width="2.5"/>
      <!-- Axis OO' and Radius OA (dashed red/blue) -->
      <line x1="170" y1="55" x2="170" y2="185" stroke="#dc2626" stroke-width="2.2" stroke-dasharray="5 3"/>
      <line x1="170" y1="185" x2="255" y2="185" stroke="#2563eb" stroke-width="2.2" stroke-dasharray="4 3"/>
      <line x1="170" y1="55" x2="255" y2="55" stroke="#2563eb" stroke-width="1.8" stroke-dasharray="4 3"/>
      <!-- Right angle at O -->
      <path d="M 170,173 L 182,173 L 182,185" fill="none" stroke="#dc2626" stroke-width="1.5"/>
      <!-- Points & Labels -->
      <circle cx="170" cy="55" r="3.5" fill="#dc2626"/><text x="152" y="52" font-size="12" font-weight="black" fill="#dc2626">O'</text>
      <circle cx="170" cy="185" r="3.5" fill="#dc2626"/><text x="153" y="192" font-size="12" font-weight="black" fill="#dc2626">O</text>
      <circle cx="255" cy="185" r="3.5" fill="#1e293b"/><text x="263" y="190" font-size="12" font-weight="bold">A</text>
      <circle cx="255" cy="55" r="3.5" fill="#1e293b"/><text x="263" y="58" font-size="12" font-weight="bold">A'</text>
      <text x="155" y="125" font-size="13" font-weight="black" fill="#dc2626">h</text>
      <text x="212" y="179" font-size="13" font-weight="black" fill="#2563eb">R</text>
      <text x="264" y="125" font-size="12" font-weight="bold" fill="#4f46e5">l = h</text>
    </svg>`,
    tikzCode: `% --- HÌNH TRỤ TRÒN XOAY LỚP 9 ---
\\begin{tikzpicture}[scale=1]
  \\def\\rx{1.8}
  \\def\\ry{0.5}
  \\def\\h{2.8}
  \\coordinate (O) at (0,0);
  \\coordinate (O') at (0,\\h);
  \\coordinate (A) at (\\rx,0);
  \\coordinate (A') at (\\rx,\\h);
  % Đáy dưới (nửa đứt, nửa liền)
  \\draw[dashed] (\\rx,0) arc (0:180:\\rx cm and \\ry cm);
  \\draw[thick] (-\\rx,0) arc (180:360:\\rx cm and \\ry cm);
  % Đáy trên và hai đường sinh
  \\draw[thick, fill=indigo!10] (O') ellipse (\\rx cm and \\ry cm);
  \\draw[thick, indigo] (-\\rx,0) -- (-\\rx,\\h) (\\rx,0) -- (\\rx,\\h) node[midway, right] {$l=h$};
  % Trục OO' và bán kính R
  \\draw[dashed, red, thick] (O) -- (O') node[midway, left] {$h$};
  \\draw[dashed, blue, thick] (O) -- (A) node[midway, above] {$R$};
  \\fill (O) circle (1.5pt) node[below left] {$O$};
  \\fill (O') circle (1.5pt) node[above left] {$O'$};
\\end{tikzpicture}`
  },

  {
    id: "tikz-g9-cone",
    grade: 9,
    chapterId: "g9-c8",
    lessonId: "g9-c8-l26",
    title: "Hình nón tròn xoay: Đỉnh S, bán kính đáy R, chiều cao h, đường sinh l",
    topic: "Hình học không gian",
    desc: "Quay tam giác vuông SOA một vòng quanh cạnh góc vuông SO cố định ta được hình nón có đường sinh l² = h² + R².",
    formula: "l = \\sqrt{R^2 + h^2}, \\quad S_{xq} = \\pi R l, \\quad V = \\frac{1}{3}\\pi R^2 h",
    svg: `<svg viewBox="0 0 340 245" class="w-full h-auto max-h-56 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Apex S(170, 32), Base center O(170, 188), rx=90, ry=25 -->
      <path d="M 170,32 L 80,188 A 90,25 0 0,0 260,188 Z" fill="#f5f3ff" fill-opacity="0.6"/>
      <!-- Base ellipse: back dashed, front solid -->
      <path d="M 80,188 A 90,25 0 0,1 260,188" fill="none" stroke="#64748b" stroke-width="1.8" stroke-dasharray="5 3"/>
      <path d="M 80,188 A 90,25 0 0,0 260,188" fill="none" stroke="#1e293b" stroke-width="2.3"/>
      <!-- Generators SA, SB -->
      <line x1="170" y1="32" x2="80" y2="188" stroke="#4f46e5" stroke-width="2.5"/>
      <line x1="170" y1="32" x2="260" y2="188" stroke="#4f46e5" stroke-width="2.5"/>
      <!-- Height SO and Radius OA (dashed) -->
      <line x1="170" y1="32" x2="170" y2="188" stroke="#dc2626" stroke-width="2.2" stroke-dasharray="5 3"/>
      <line x1="170" y1="188" x2="260" y2="188" stroke="#2563eb" stroke-width="2.2" stroke-dasharray="4 3"/>
      <!-- Right angle at O -->
      <path d="M 170,175 L 183,175 L 183,188" fill="none" stroke="#dc2626" stroke-width="1.6"/>
      <!-- Labels -->
      <circle cx="170" cy="32" r="4" fill="#4f46e5"/><text x="170" y="20" font-size="13" font-weight="black" text-anchor="middle">S</text>
      <circle cx="170" cy="188" r="3.5" fill="#dc2626"/><text x="154" y="196" font-size="12" font-weight="black" fill="#dc2626">O</text>
      <circle cx="260" cy="188" r="3.5" fill="#1e293b"/><text x="268" y="192" font-size="12" font-weight="bold">A</text>
      <circle cx="80" cy="188" r="3.5" fill="#1e293b"/><text x="64" y="192" font-size="12" font-weight="bold">B</text>
      <text x="155" y="120" font-size="13" font-weight="black" fill="#dc2626">h</text>
      <text x="215" y="182" font-size="13" font-weight="black" fill="#2563eb">R</text>
      <text x="225" y="108" font-size="13" font-weight="black" fill="#4f46e5">l</text>
    </svg>`,
    tikzCode: `% --- HÌNH NÓN TRÒN XOAY LỚP 9 ---
\\begin{tikzpicture}[scale=1]
  \\def\\rx{2}
  \\def\\ry{0.55}
  \\def\\h{3.2}
  \\coordinate (O) at (0,0);
  \\coordinate (S) at (0,\\h);
  \\coordinate (A) at (\\rx,0);
  \\draw[dashed] (\\rx,0) arc (0:180:\\rx cm and \\ry cm);
  \\draw[thick] (-\\rx,0) arc (180:360:\\rx cm and \\ry cm);
  \\draw[thick, indigo] (-\\rx,0) -- (S) -- (\\rx,0) node[midway, above right] {$l$};
  \\draw[dashed, red, thick] (S) -- (O) node[midway, left] {$h$};
  \\draw[dashed, blue, thick] (O) -- (A) node[midway, above] {$R$};
  \\draw[red] (0,0.25) -| (0.25,0);
  \\fill (S) circle (1.5pt) node[above] {$S$};
  \\fill (O) circle (1.5pt) node[below left] {$O$};
  \\fill (A) circle (1.5pt) node[right] {$A$};
\\end{tikzpicture}`
  },

  {
    id: "tikz-g9-sphere",
    grade: 9,
    chapterId: "g9-c8",
    lessonId: "g9-c8-l27",
    title: "Hình cầu tâm O bán kính R và Đường tròn lớn",
    topic: "Hình học không gian",
    desc: "Quay nửa hình tròn tâm O bán kính R một vòng quanh đường kính AB cố định ta được một hình cầu có diện tích mặt cầu S = 4πR² và thể tích V = 4/3 πR³.",
    formula: "S = 4\\pi R^2, \\quad V = \\frac{4}{3}\\pi R^3",
    svg: `<svg viewBox="0 0 340 245" class="w-full h-auto max-h-56 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="sphere-grad-g9" cx="38%" cy="35%" r="65%">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="55%" stop-color="#e0e7ff"/>
          <stop offset="100%" stop-color="#a5b4fc"/>
        </radialGradient>
      </defs>
      <!-- Sphere circle center O(170, 122), R=86 -->
      <circle cx="170" cy="122" r="86" fill="url(#sphere-grad-g9)" fill-opacity="0.7" stroke="#4f46e5" stroke-width="2.5"/>
      <!-- Equator ellipse: back dashed, front solid -->
      <path d="M 84,122 A 86,26 0 0,1 256,122" fill="none" stroke="#64748b" stroke-width="1.8" stroke-dasharray="5 3"/>
      <path d="M 84,122 A 86,26 0 0,0 256,122" fill="none" stroke="#1e293b" stroke-width="2.2"/>
      <!-- Vertical axis AB and radius OM -->
      <line x1="170" y1="36" x2="170" y2="208" stroke="#64748b" stroke-width="1.6" stroke-dasharray="4 3"/>
      <line x1="170" y1="122" x2="256" y2="122" stroke="#dc2626" stroke-width="2.4" stroke-dasharray="4 3"/>
      <!-- Points & Labels -->
      <circle cx="170" cy="122" r="4" fill="#dc2626"/><text x="155" y="118" font-size="13" font-weight="black" fill="#dc2626">O</text>
      <circle cx="256" cy="122" r="3.5" fill="#1e293b"/><text x="264" y="126" font-size="12" font-weight="bold">M</text>
      <circle cx="170" cy="36" r="3.5" fill="#1e293b"/><text x="170" y="25" font-size="12" font-weight="bold" text-anchor="middle">A</text>
      <circle cx="170" cy="208" r="3.5" fill="#1e293b"/><text x="170" y="226" font-size="12" font-weight="bold" text-anchor="middle">B</text>
      <text x="212" y="115" font-size="13" font-weight="black" fill="#dc2626">R</text>
    </svg>`,
    tikzCode: `% --- HÌNH CẦU TÂM O BÁN KÍNH R LỚP 9 ---
\\begin{tikzpicture}[scale=1]
  \\def\\R{2.2}
  \\coordinate (O) at (0,0);
  \\shade[ball color=indigo!20, opacity=0.45] (O) circle (\\R);
  \\draw[thick, indigo] (O) circle (\\R);
  \\draw[dashed] (\\R,0) arc (0:180:\\R cm and 0.65cm);
  \\draw[thick] (-\\R,0) arc (180:360:\\R cm and 0.65cm);
  \\draw[dashed, red, very thick] (O) -- (\\R,0) node[midway, above] {$R$};
  \\fill (O) circle (1.5pt) node[below left] {$O$};
  \\fill (\\R,0) circle (1.5pt) node[right] {$M$};
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
    lessonId: "g10-c3-l5",
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
  // LỚP 11: ĐỒ THỊ LƯỢNG GIÁC, HÌNH HỌC KHÔNG GIAN (CHƯƠNG IV & VII)
  // ------------------------------------------------------------------------
  {
    id: "tikz-g11-sin-function",
    grade: 11,
    chapterId: "g11-c1",
    lessonId: "g11-c1-l3",
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
    id: "tikz-g11-pyramid-intersection",
    grade: 11,
    chapterId: "g11-c4",
    lessonId: "g11-c4-l10",
    title: "Hình chóp S.ABCD & Giao tuyến hai mặt phẳng (SAC) ∩ (SBD) = SO",
    topic: "Hình học không gian - Quan hệ song song",
    desc: "Trong hình chóp S.ABCD, gọi O = AC ∩ BD ở mặt đáy. Khi đó S và O là hai điểm chung của (SAC) và (SBD), suy ra giao tuyến SO = (SAC) ∩ (SBD).",
    formula: "S \\in (SAC) \\cap (SBD), \\ O = AC \\cap BD \\implies (SAC) \\cap (SBD) = SO",
    svg: `<svg viewBox="0 0 340 240" class="w-full h-auto max-h-56 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Base ABCD: A(60,165), B(115,210), C(275,210), D(220,165); Apex S(160,30); O(167.5,187.5) -->
      <!-- Shaded intersection planes -->
      <polygon points="160,30 60,165 275,210" fill="#dbeafe" fill-opacity="0.35"/>
      <polygon points="160,30 115,210 220,165" fill="#fef3c7" fill-opacity="0.35"/>
      <!-- Hidden lines (dashed): AD, CD, AC, BD, SO -->
      <line x1="60" y1="165" x2="220" y2="165" stroke="#64748b" stroke-width="1.8" stroke-dasharray="5 4"/>
      <line x1="220" y1="165" x2="275" y2="210" stroke="#64748b" stroke-width="1.8" stroke-dasharray="5 4"/>
      <line x1="60" y1="165" x2="275" y2="210" stroke="#2563eb" stroke-width="1.8" stroke-dasharray="4 3"/>
      <line x1="115" y1="210" x2="220" y2="165" stroke="#059669" stroke-width="1.8" stroke-dasharray="4 3"/>
      <line x1="160" y1="30" x2="220" y2="165" stroke="#475569" stroke-width="1.8" stroke-dasharray="5 4"/>
      <!-- Intersection line SO (highlighted dashed red) -->
      <line x1="160" y1="30" x2="168" y2="188" stroke="#dc2626" stroke-width="2.6" stroke-dasharray="5 3"/>
      <!-- Visible lines (solid): SA, SB, SC, AB, BC -->
      <line x1="160" y1="30" x2="60" y2="165" stroke="#1e293b" stroke-width="2.2"/>
      <line x1="160" y1="30" x2="115" y2="210" stroke="#1e293b" stroke-width="2.2"/>
      <line x1="160" y1="30" x2="275" y2="210" stroke="#1e293b" stroke-width="2.2"/>
      <line x1="60" y1="165" x2="115" y2="210" stroke="#1e293b" stroke-width="2.2"/>
      <line x1="115" y1="210" x2="275" y2="210" stroke="#1e293b" stroke-width="2.2"/>
      <!-- Vertices -->
      <circle cx="160" cy="30" r="4" fill="#dc2626"/><text x="155" y="20" font-size="13" font-weight="black" fill="#dc2626">S</text>
      <circle cx="60" cy="165" r="3.5" fill="#1e293b"/><text x="42" y="168" font-size="12" font-weight="bold">A</text>
      <circle cx="115" cy="210" r="3.5" fill="#1e293b"/><text x="105" y="226" font-size="12" font-weight="bold">B</text>
      <circle cx="275" cy="210" r="3.5" fill="#1e293b"/><text x="282" y="216" font-size="12" font-weight="bold">C</text>
      <circle cx="220" cy="165" r="3.5" fill="#1e293b"/><text x="226" y="162" font-size="12" font-weight="bold">D</text>
      <circle cx="168" cy="188" r="4" fill="#dc2626"/><text x="174" y="202" font-size="12" font-weight="black" fill="#dc2626">O</text>
      <text x="173" y="115" font-size="11" font-weight="bold" fill="#dc2626">Giao tuyến SO</text>
    </svg>`,
    tikzCode: `% --- HÌNH CHÓP S.ABCD & GIAO TUYẾN HAI MẶT PHẲNG LỚP 11 ---
\\begin{tikzpicture}[scale=1, line join=round, line cap=round]
  \\coordinate (A) at (0,0);
  \\coordinate (B) at (1.2,-1.3);
  \\coordinate (C) at (4.5,-1.3);
  \\coordinate (D) at (3.3,0);
  \\coordinate (S) at (2.1,3.2);
  % Giao điểm hai đường chéo đáy O = AC giao BD
  \\coordinate (O) at (2.25,-0.65);
  % Các nét khuất (nét đứt)
  \\draw[dashed, gray!80!black] (A) -- (D) -- (C) (S) -- (D);
  \\draw[dashed, blue] (A) -- (C);
  \\draw[dashed, teal] (B) -- (D);
  % Giao tuyến SO = (SAC) giao (SBD)
  \\draw[dashed, very thick, red] (S) -- (O) node[midway, right] {$SO$};
  % Các nét nhìn thấy (nét liền)
  \\draw[thick] (S) -- (A) -- (B) -- (C) -- (S) -- (B);
  % Nhãn các đỉnh
  \\foreach \\p/\\pos in {S/above, A/left, B/below left, C/below right, D/above right, O/below}
    \\fill (\\p) circle (1.5pt) node[\\pos] {$\\p$};
\\end{tikzpicture}`
  },

  {
    id: "tikz-g11-parallel-lines-tetra",
    grade: 11,
    chapterId: "g11-c4",
    lessonId: "g11-c4-l11",
    title: "Tứ diện ABCD & Hai đường thẳng song song, hai đường chéo nhau",
    topic: "Hình học không gian - Quan hệ song song",
    desc: "Trong tứ diện ABCD, gọi M, N lần lượt là trung điểm của AC và BC thì MN là đường trung bình tam giác ABC nên MN // AB và MN = 1/2 AB. Hai cạnh đối AB và CD chéo nhau.",
    formula: "MN \\parallel AB, \\quad MN = \\frac{1}{2}AB, \\quad AB \\text{ và } CD \\text{ chéo nhau}",
    svg: `<svg viewBox="0 0 340 245" class="w-full h-auto max-h-56 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Tetrahedron ABCD: A(165,30), B(65,180), C(195,215), D(280,165); M midpoint AC(180,122.5), N midpoint BC(130,197.5) -->
      <polygon points="165,30 65,180 195,215" fill="#eff6ff" fill-opacity="0.5"/>
      <polygon points="165,30 195,215 280,165" fill="#e0e7ff" fill-opacity="0.5"/>
      <!-- Hidden edge BD (dashed) -->
      <line x1="65" y1="180" x2="280" y2="165" stroke="#64748b" stroke-width="1.8" stroke-dasharray="5 3"/>
      <!-- Midsegment MN // AB (red solid) -->
      <line x1="180" y1="123" x2="130" y2="198" stroke="#dc2626" stroke-width="2.6"/>
      <!-- Visible edges: AB, BC, CD, AC, AD -->
      <line x1="165" y1="30" x2="65" y2="180" stroke="#2563eb" stroke-width="2.6"/>
      <line x1="65" y1="180" x2="195" y2="215" stroke="#1e293b" stroke-width="2.2"/>
      <line x1="195" y1="215" x2="280" y2="165" stroke="#1e293b" stroke-width="2.2"/>
      <line x1="165" y1="30" x2="195" y2="215" stroke="#1e293b" stroke-width="2.2"/>
      <line x1="165" y1="30" x2="280" y2="165" stroke="#1e293b" stroke-width="2.2"/>
      <!-- Vertices -->
      <circle cx="165" cy="30" r="3.5" fill="#1e293b"/><text x="165" y="18" font-size="13" font-weight="black" text-anchor="middle">A</text>
      <circle cx="65" cy="180" r="3.5" fill="#1e293b"/><text x="48" y="185" font-size="12" font-weight="bold">B</text>
      <circle cx="195" cy="215" r="3.5" fill="#1e293b"/><text x="195" y="233" font-size="12" font-weight="bold">C</text>
      <circle cx="280" cy="165" r="3.5" fill="#1e293b"/><text x="288" y="168" font-size="12" font-weight="bold">D</text>
      <circle cx="180" cy="123" r="3.5" fill="#dc2626"/><text x="190" y="125" font-size="12" font-weight="black" fill="#dc2626">M</text>
      <circle cx="130" cy="198" r="3.5" fill="#dc2626"/><text x="118" y="216" font-size="12" font-weight="black" fill="#dc2626">N</text>
      <text x="90" y="98" font-size="11" font-weight="bold" fill="#2563eb">AB // MN</text>
    </svg>`,
    tikzCode: `% --- TỨ DIỆN ABCD VÀ HAI ĐƯỜNG THẲNG SONG SONG LỚP 11 ---
\\begin{tikzpicture}[scale=1, line join=round]
  \\coordinate (A) at (1.8,3.2);
  \\coordinate (B) at (0,0);
  \\coordinate (C) at (2.4,-0.9);
  \\coordinate (D) at (4.2,0.2);
  \\coordinate (M) at ($(A)!0.5!(C)$);
  \\coordinate (N) at ($(B)!0.5!(C)$);
  \\draw[dashed] (B) -- (D);
  \\draw[very thick, blue] (A) -- (B);
  \\draw[very thick, red] (M) -- (N) node[midway, right] {$MN \\parallel AB$};
  \\draw[thick] (B) -- (C) -- (D) -- (A) -- (C);
  \\foreach \\p/\\pos in {A/above, B/left, C/below, D/right, M/right, N/below left}
    \\fill (\\p) circle (1.4pt) node[\\pos] {$\\p$};
\\end{tikzpicture}`
  },

  {
    id: "tikz-g11-line-parallel-plane",
    grade: 11,
    chapterId: "g11-c4",
    lessonId: "g11-c4-l12",
    title: "Đường thẳng song song với mặt phẳng: d // a ⊂ (P) ⇒ d // (P)",
    topic: "Hình học không gian - Quan hệ song song",
    desc: "Nếu đường thẳng d không nằm trong mặt phẳng (P) và d song song với một đường thẳng a nằm trong (P) thì d song song với mặt phẳng (P).",
    formula: "d \\not\\subset (P), \\ d \\parallel a, \\ a \\subset (P) \\implies d \\parallel (P)",
    svg: `<svg viewBox="0 0 340 230" class="w-full h-auto max-h-56 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Plane (P) -->
      <polygon points="45,190 235,190 295,120 105,120" fill="#eef2ff" stroke="#4f46e5" stroke-width="2"/>
      <text x="65" y="180" font-size="13" font-weight="black" fill="#4338ca">(P)</text>
      <!-- Plane (Q) containing d and intersecting (P) at a -->
      <polygon points="95,55 255,55 235,155 75,155" fill="#fef3c7" fill-opacity="0.45" stroke="#d97706" stroke-width="1.5" stroke-dasharray="4 3"/>
      <text x="262" y="70" font-size="12" font-weight="bold" fill="#b45309">(Q)</text>
      <!-- Line d above (P) -->
      <line x1="75" y1="65" x2="265" y2="65" stroke="#dc2626" stroke-width="2.8"/>
      <text x="273" y="69" font-size="13" font-weight="black" fill="#dc2626">d</text>
      <!-- Line a = (P) ∩ (Q) inside (P) -->
      <line x1="65" y1="155" x2="255" y2="155" stroke="#2563eb" stroke-width="2.6"/>
      <text x="262" y="159" font-size="13" font-weight="black" fill="#2563eb">a = (P) ∩ (Q)</text>
      <!-- Parallel arrows -->
      <text x="165" y="52" font-size="11" font-weight="bold" fill="#dc2626" text-anchor="middle">d // a ⇒ d // (P)</text>
    </svg>`,
    tikzCode: `% --- ĐƯỜNG THẲNG SONG SONG MẶT PHẲNG LỚP 11 ---
\\begin{tikzpicture}[scale=1]
  \\draw[thick, indigo, fill=indigo!10] (0,0) -- (4.2,0) -- (5.4,1.5) -- (1.2,1.5) -- cycle;
  \\node[above right, indigo] at (0.1,0.1) {$(P)$};
  \\draw[very thick, blue] (0.8,0.8) -- (4.4,0.8) node[right] {$a \\subset (P)$};
  \\draw[very thick, red] (0.8,2.3) -- (4.4,2.3) node[right] {$d \\parallel a$};
  \\draw[dashed, orange!80!black] (1,2.3) -- (1,0.8) (4.2,2.3) -- (4.2,0.8);
\\end{tikzpicture}`
  },

  {
    id: "tikz-g11-parallel-planes-prism",
    grade: 11,
    chapterId: "g11-c4",
    lessonId: "g11-c4-l13",
    title: "Hai mặt phẳng song song (P) // (Q) & Hình lăng trụ ABC.A'B'C'",
    topic: "Hình học không gian - Quan hệ song song",
    desc: "Hai mặt đáy (ABC) và (A'B'C') của hình lăng trụ nằm trên hai mặt phẳng song song, các cạnh bên AA', BB', CC' song song và bằng nhau, các mặt bên là hình bình hành.",
    formula: "(ABC) \\parallel (A'B'C'), \\quad AA' \\parallel BB' \\parallel CC'",
    svg: `<svg viewBox="0 0 340 245" class="w-full h-auto max-h-56 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Oblique Prism ABC.A'B'C': Bottom A(60,180), B(145,215), C(245,180); Top A'(95,55), B'(180,90), C'(280,55) -->
      <polygon points="95,55 180,90 280,55" fill="#e0e7ff" fill-opacity="0.65" stroke="#4f46e5" stroke-width="2.3"/>
      <polygon points="60,180 145,215 245,180" fill="#dbeafe" fill-opacity="0.45"/>
      <!-- Hidden edge AC (dashed) -->
      <line x1="60" y1="180" x2="245" y2="180" stroke="#64748b" stroke-width="1.8" stroke-dasharray="5 3"/>
      <!-- Visible lateral edges AA', BB', CC' and base edges AB, BC -->
      <line x1="60" y1="180" x2="95" y2="55" stroke="#dc2626" stroke-width="2.3"/>
      <line x1="145" y1="215" x2="180" y2="90" stroke="#dc2626" stroke-width="2.3"/>
      <line x1="245" y1="180" x2="280" y2="55" stroke="#dc2626" stroke-width="2.3"/>
      <line x1="60" y1="180" x2="145" y2="215" stroke="#1e293b" stroke-width="2.2"/>
      <line x1="145" y1="215" x2="245" y2="180" stroke="#1e293b" stroke-width="2.2"/>
      <!-- Vertices -->
      <circle cx="95" cy="55" r="3.5" fill="#4f46e5"/><text x="75" y="55" font-size="12" font-weight="bold">A'</text>
      <circle cx="180" cy="90" r="3.5" fill="#4f46e5"/><text x="176" y="106" font-size="12" font-weight="bold">B'</text>
      <circle cx="280" cy="55" r="3.5" fill="#4f46e5"/><text x="288" y="58" font-size="12" font-weight="bold">C'</text>
      <circle cx="60" cy="180" r="3.5" fill="#1e293b"/><text x="42" y="184" font-size="12" font-weight="bold">A</text>
      <circle cx="145" cy="215" r="3.5" fill="#1e293b"/><text x="140" y="232" font-size="12" font-weight="bold">B</text>
      <circle cx="245" cy="180" r="3.5" fill="#1e293b"/><text x="254" y="185" font-size="12" font-weight="bold">C</text>
    </svg>`,
    tikzCode: `% --- HÌNH LĂNG TRỤ TAM GIÁC & HAI MẶT PHẲNG SONG SONG LỚP 11 ---
\\begin{tikzpicture}[scale=1, line join=round]
  \\coordinate (A) at (0,0);
  \\coordinate (B) at (1.5,-0.8);
  \\coordinate (C) at (3.6,0);
  \\coordinate (v) at (0.7,2.6);
  \\coordinate (A') at ($(A)+(v)$);
  \\coordinate (B') at ($(B)+(v)$);
  \\coordinate (C') at ($(C)+(v)$);
  \\draw[dashed] (A) -- (C);
  \\draw[thick, fill=indigo!12] (A') -- (B') -- (C') -- cycle;
  \\draw[thick] (A) -- (B) -- (C);
  \\draw[thick, red] (A) -- (A') (B) -- (B') (C) -- (C');
  \\foreach \\p/\\pos in {A/left, B/below, C/right, A'/above left, B'/above, C'/above right}
    \\fill (\\p) circle (1.4pt) node[\\pos] {$\\p$};
\\end{tikzpicture}`
  },

  {
    id: "tikz-g11-parallel-projection",
    grade: 11,
    chapterId: "g11-c4",
    lessonId: "g11-c4-l14",
    title: "Phép chiếu song song lên mặt phẳng (P) theo phương l",
    topic: "Hình học không gian - Quan hệ song song",
    desc: "Phép chiếu song song biến ba điểm thẳng hàng thành ba điểm thẳng hàng, bảo toàn thứ tự và tỉ số độ dài của hai đoạn thẳng cùng nằm trên một đường thẳng hoặc song song.",
    formula: "\\frac{AB}{BC} = \\frac{A'B'}{B'C'} \\quad (\\text{Phép chiếu song song theo phương } l)",
    svg: `<svg viewBox="0 0 340 240" class="w-full h-auto max-h-56 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Projection plane (P) -->
      <polygon points="40,200 245,200 305,130 100,130" fill="#f1f5f9" stroke="#475569" stroke-width="2"/>
      <text x="60" y="190" font-size="13" font-weight="black" fill="#334155">(P)</text>
      <!-- Segment AC with B in space: A(85,55), B(145,45), C(235,30) -->
      <line x1="85" y1="55" x2="235" y2="30" stroke="#2563eb" stroke-width="2.6"/>
      <!-- Projected segment A'C' on (P): A'(110,175), B'(170,165), C'(260,150) -->
      <line x1="110" y1="175" x2="260" y2="150" stroke="#059669" stroke-width="2.6"/>
      <!-- Parallel projection rays along direction l -->
      <line x1="85" y1="55" x2="110" y2="175" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="4 3"/>
      <line x1="145" y1="45" x2="170" y2="165" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="4 3"/>
      <line x1="235" y1="30" x2="260" y2="150" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="4 3"/>
      <!-- Direction line l -->
      <line x1="40" y1="30" x2="65" y2="150" stroke="#dc2626" stroke-width="2.2"/>
      <text x="30" y="45" font-size="13" font-weight="black" fill="#dc2626">l</text>
      <!-- Points -->
      <circle cx="85" cy="55" r="3.5" fill="#2563eb"/><text x="72" y="50" font-size="12" font-weight="bold">A</text>
      <circle cx="145" cy="45" r="3.5" fill="#2563eb"/><text x="142" y="34" font-size="12" font-weight="bold">B</text>
      <circle cx="235" cy="30" r="3.5" fill="#2563eb"/><text x="242" y="32" font-size="12" font-weight="bold">C</text>
      <circle cx="110" cy="175" r="3.5" fill="#059669"/><text x="98" y="190" font-size="12" font-weight="bold" fill="#059669">A'</text>
      <circle cx="170" cy="165" r="3.5" fill="#059669"/><text x="168" y="183" font-size="12" font-weight="bold" fill="#059669">B'</text>
      <circle cx="260" cy="150" r="3.5" fill="#059669"/><text x="266" y="164" font-size="12" font-weight="bold" fill="#059669">C'</text>
    </svg>`,
    tikzCode: `% --- PHÉP CHIẾU SONG SONG LỚP 11 ---
\\begin{tikzpicture}[scale=1]
  \\draw[thick, gray, fill=gray!10] (0,0) -- (4.5,0) -- (5.7,1.4) -- (1.2,1.4) -- cycle;
  \\node[above right] at (0.1,0.1) {$(P)$};
  \\coordinate (A) at (1.2,2.8);
  \\coordinate (B) at (2.4,3.0);
  \\coordinate (C) at (4.2,3.3);
  \\coordinate (A') at (1.6,0.5);
  \\coordinate (B') at (2.8,0.7);
  \\coordinate (C') at (4.6,1.0);
  \\draw[very thick, blue] (A) -- (C);
  \\draw[very thick, teal] (A') -- (C');
  \\draw[dashed, red] (A) -- (A') (B) -- (B') (C) -- (C');
  \\foreach \\p in {A,B,C} \\fill (\\p) circle (1.5pt) node[above] {$\\p$};
  \\foreach \\p in {A',B',C'} \\fill (\\p) circle (1.5pt) node[below] {$\\p$};
\\end{tikzpicture}`
  },

  {
    id: "tikz-g11-line-plane-perp",
    grade: 11,
    chapterId: "g11-c7",
    lessonId: "g11-c7-l23",
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
      <line x1="180" y1="20" x2="180" y2="135" stroke="#dc2626" stroke-width="2.8"/>
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

  {
    id: "tikz-g11-perp-lines-cube",
    grade: 11,
    chapterId: "g11-c7",
    lessonId: "g11-c7-l22",
    title: "Hai đường thẳng vuông góc trong không gian (Hình lập phương ABCD.A'B'C'D')",
    topic: "Hình học không gian - Quan hệ vuông góc",
    desc: "Trong hình lập phương ABCD.A'B'C'D', vì B'D' // BD và AC ⊥ BD (hai đường chéo hình vuông) nên góc giữa hai đường thẳng chéo nhau AC và B'D' bằng 90°, tức AC ⊥ B'D'.",
    formula: "AC \\perp BD, \\ B'D' \\parallel BD \\implies (AC, B'D') = 90^\\circ \\iff AC \\perp B'D'",
    svg: `<svg viewBox="0 0 340 245" class="w-full h-auto max-h-56 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Cube ABCD.A'B'C'D': Bottom A(95,155), B(55,200), C(205,200), D(245,155); Top A'(95,45), B'(55,90), C'(205,90), D'(245,45) -->
      <polygon points="95,45 245,45 205,90 55,90" fill="#e0e7ff" fill-opacity="0.55" stroke="#1e293b" stroke-width="2.2"/>
      <!-- Hidden edges (dashed): AA', AB, AD, AC, BD -->
      <line x1="95" y1="45" x2="95" y2="155" stroke="#64748b" stroke-width="1.8" stroke-dasharray="5 3"/>
      <line x1="95" y1="155" x2="55" y2="200" stroke="#64748b" stroke-width="1.8" stroke-dasharray="5 3"/>
      <line x1="95" y1="155" x2="245" y2="155" stroke="#64748b" stroke-width="1.8" stroke-dasharray="5 3"/>
      <line x1="95" y1="155" x2="205" y2="200" stroke="#2563eb" stroke-width="2.5" stroke-dasharray="5 3"/>
      <line x1="55" y1="200" x2="245" y2="155" stroke="#059669" stroke-width="1.8" stroke-dasharray="4 3"/>
      <!-- Top diagonal B'D' (solid red) -->
      <line x1="55" y1="90" x2="245" y2="45" stroke="#dc2626" stroke-width="2.8"/>
      <!-- Visible cube edges -->
      <line x1="55" y1="90" x2="55" y2="200" stroke="#1e293b" stroke-width="2.2"/>
      <line x1="205" y1="90" x2="205" y2="200" stroke="#1e293b" stroke-width="2.2"/>
      <line x1="245" y1="45" x2="245" y2="155" stroke="#1e293b" stroke-width="2.2"/>
      <line x1="55" y1="200" x2="205" y2="200" stroke="#1e293b" stroke-width="2.2"/>
      <line x1="205" y1="200" x2="245" y2="155" stroke="#1e293b" stroke-width="2.2"/>
      <!-- Labels -->
      <text x="80" y="154" font-size="12" font-weight="bold">A</text>
      <text x="38" y="208" font-size="12" font-weight="bold">B</text>
      <text x="208" y="216" font-size="12" font-weight="bold">C</text>
      <text x="254" y="160" font-size="12" font-weight="bold">D</text>
      <text x="80" y="38" font-size="12" font-weight="bold">A'</text>
      <text x="35" y="92" font-size="12" font-weight="bold" fill="#dc2626">B'</text>
      <text x="210" y="88" font-size="12" font-weight="bold">C'</text>
      <text x="252" y="45" font-size="12" font-weight="bold" fill="#dc2626">D'</text>
      <text x="150" y="62" font-size="11" font-weight="black" fill="#dc2626">B'D' ⊥ AC</text>
    </svg>`,
    tikzCode: `% --- HAI ĐƯỜNG THẲNG VUÔNG GÓC TRONG HÌNH LẬP PHƯƠNG LỚP 11 ---
\\begin{tikzpicture}[scale=1, line join=round]
  \\coordinate (A) at (0,0);
  \\coordinate (B) at (-1,-1.1);
  \\coordinate (D) at (3,0);
  \\coordinate (C) at ($(B)+(D)-(A)$);
  \\coordinate (A') at (0,2.7);
  \\coordinate (B') at ($(B)+(A')-(A)$);
  \\coordinate (C') at ($(C)+(A')-(A)$);
  \\coordinate (D') at ($(D)+(A')-(A)$);
  \\draw[dashed] (A) -- (B) (A) -- (D) (A) -- (A') (B) -- (D);
  \\draw[dashed, very thick, blue] (A) -- (C);
  \\draw[very thick, red] (B') -- (D');
  \\draw[thick] (B) -- (C) -- (D) -- (D') -- (A') -- (B') -- (B) (B') -- (C') -- (D') (C) -- (C');
  \\foreach \\p/\\pos in {A/left, B/below left, C/below right, D/right, A'/above left, B'/left, C'/above, D'/right}
    \\fill (\\p) circle (1.3pt) node[\\pos] {$\\p$};
\\end{tikzpicture}`
  },

  {
    id: "tikz-g11-perp-planes-pyramid",
    grade: 11,
    chapterId: "g11-c7",
    lessonId: "g11-c7-l24",
    title: "Hai mặt phẳng vuông góc: Hình chóp S.ABCD có SA ⊥ (ABCD)",
    topic: "Hình học không gian - Quan hệ vuông góc",
    desc: "Hình chóp S.ABCD có cạnh bên SA ⊥ (ABCD) và đáy ABCD là hình chữ nhật. Khi đó (SAB) ⊥ (ABCD), (SAD) ⊥ (ABCD) và BC ⊥ (SAB) nên (SBC) ⊥ (SAB).",
    formula: "SA \\perp (ABCD), \\ BC \\perp AB \\implies BC \\perp (SAB) \\implies (SBC) \\perp (SAB)",
    svg: `<svg viewBox="0 0 340 245" class="w-full h-auto max-h-56 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Base ABCD: A(85,155), B(50,205), C(225,205), D(260,155); Apex S(85,30) directly above A -->
      <polygon points="85,30 50,205 225,205" fill="#eff6ff" fill-opacity="0.5"/>
      <polygon points="85,30 225,205 260,155" fill="#e0e7ff" fill-opacity="0.5"/>
      <!-- Hidden lines (dashed): SA, AB, AD -->
      <line x1="85" y1="30" x2="85" y2="155" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="5 3"/>
      <line x1="85" y1="155" x2="50" y2="205" stroke="#64748b" stroke-width="1.8" stroke-dasharray="5 3"/>
      <line x1="85" y1="155" x2="260" y2="155" stroke="#64748b" stroke-width="1.8" stroke-dasharray="5 3"/>
      <!-- Right angle markers at A -->
      <path d="M 85,140 L 98,140 L 98,155" fill="none" stroke="#dc2626" stroke-width="1.6"/>
      <path d="M 85,142 L 77,153 L 77,166" fill="none" stroke="#dc2626" stroke-width="1.5"/>
      <!-- Visible edges: SB, SC, SD, BC, CD -->
      <line x1="85" y1="30" x2="50" y2="205" stroke="#1e293b" stroke-width="2.3"/>
      <line x1="85" y1="30" x2="225" y2="205" stroke="#4f46e5" stroke-width="2.3"/>
      <line x1="85" y1="30" x2="260" y2="155" stroke="#1e293b" stroke-width="2.3"/>
      <line x1="50" y1="205" x2="225" y2="205" stroke="#1e293b" stroke-width="2.3"/>
      <line x1="225" y1="205" x2="260" y2="155" stroke="#1e293b" stroke-width="2.3"/>
      <!-- Vertices -->
      <circle cx="85" cy="30" r="4" fill="#dc2626"/><text x="85" y="18" font-size="13" font-weight="black" text-anchor="middle" fill="#dc2626">S</text>
      <circle cx="85" cy="155" r="3.5" fill="#dc2626"/><text x="68" y="153" font-size="12" font-weight="black" fill="#dc2626">A</text>
      <circle cx="50" cy="205" r="3.5" fill="#1e293b"/><text x="34" y="212" font-size="12" font-weight="bold">B</text>
      <circle cx="225" cy="205" r="3.5" fill="#1e293b"/><text x="228" y="222" font-size="12" font-weight="bold">C</text>
      <circle cx="260" cy="155" r="3.5" fill="#1e293b"/><text x="268" y="160" font-size="12" font-weight="bold">D</text>
      <text x="94" y="98" font-size="11" font-weight="bold" fill="#dc2626">SA ⊥ (ABCD)</text>
    </svg>`,
    tikzCode: `% --- HÌNH CHÓP S.ABCD CÓ SA VUÔNG GÓC ĐÁY LỚP 11 ---
\\begin{tikzpicture}[scale=1, line join=round]
  \\coordinate (A) at (0,0);
  \\coordinate (B) at (-1,-1.2);
  \\coordinate (D) at (3.6,0);
  \\coordinate (C) at ($(B)+(D)-(A)$);
  \\coordinate (S) at (0,3.2);
  \\draw[dashed, very thick, red] (S) -- (A) node[midway, right] {$h$};
  \\draw[dashed] (A) -- (B) (A) -- (D);
  \\draw[red] (0,0.3) -| (0.3,0);
  \\draw[thick] (S) -- (B) -- (C) -- (D) -- (S) -- (C);
  \\foreach \\p/\\pos in {S/above, A/left, B/below left, C/below right, D/right}
    \\fill (\\p) circle (1.4pt) node[\\pos] {$\\p$};
\\end{tikzpicture}`
  },

  {
    id: "tikz-g11-distance-pyramid",
    grade: 11,
    chapterId: "g11-c7",
    lessonId: "g11-c7-l25",
    title: "Khoảng cách từ chân đường cao A đến mặt bên (SBC): d(A, (SBC)) = AK",
    topic: "Hình học không gian - Khoảng cách",
    desc: "Cho hình chóp S.ABC có SA ⊥ (ABC). Kẻ AH ⊥ BC tại H và kẻ AK ⊥ SH tại K thì AK ⊥ (SBC), suy ra khoảng cách d(A, (SBC)) = AK.",
    formula: "d(A, (SBC)) = AK, \\quad \\frac{1}{AK^2} = \\frac{1}{SA^2} + \\frac{1}{AH^2}",
    svg: `<svg viewBox="0 0 340 245" class="w-full h-auto max-h-56 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- S(75,30), A(75,165), B(155,215), C(275,165); H on BC(215,190); K on SH(145,110) -->
      <polygon points="75,30 155,215 275,165" fill="#e0e7ff" fill-opacity="0.55"/>
      <!-- Hidden lines: AC, AH, AK -->
      <line x1="75" y1="165" x2="275" y2="165" stroke="#64748b" stroke-width="1.8" stroke-dasharray="5 3"/>
      <line x1="75" y1="165" x2="215" y2="190" stroke="#2563eb" stroke-width="2" stroke-dasharray="4 3"/>
      <line x1="75" y1="165" x2="145" y2="110" stroke="#dc2626" stroke-width="2.6" stroke-dasharray="4 3"/>
      <!-- Visible lines: SA, SB, SC, AB, BC, SH -->
      <line x1="75" y1="30" x2="75" y2="165" stroke="#1e293b" stroke-width="2.3"/>
      <line x1="75" y1="30" x2="155" y2="215" stroke="#1e293b" stroke-width="2.3"/>
      <line x1="75" y1="30" x2="275" y2="165" stroke="#1e293b" stroke-width="2.3"/>
      <line x1="75" y1="165" x2="155" y2="215" stroke="#1e293b" stroke-width="2.3"/>
      <line x1="155" y1="215" x2="275" y2="165" stroke="#1e293b" stroke-width="2.3"/>
      <line x1="75" y1="30" x2="215" y2="190" stroke="#059669" stroke-width="2.2"/>
      <!-- Right angles at A and K -->
      <path d="M 75,152 L 88,152 L 88,165" fill="none" stroke="#1e293b" stroke-width="1.5"/>
      <!-- Vertices -->
      <circle cx="75" cy="30" r="3.5" fill="#1e293b"/><text x="75" y="18" font-size="13" font-weight="black" text-anchor="middle">S</text>
      <circle cx="75" cy="165" r="3.5" fill="#1e293b"/><text x="56" y="170" font-size="12" font-weight="bold">A</text>
      <circle cx="155" cy="215" r="3.5" fill="#1e293b"/><text x="150" y="232" font-size="12" font-weight="bold">B</text>
      <circle cx="275" cy="165" r="3.5" fill="#1e293b"/><text x="284" y="170" font-size="12" font-weight="bold">C</text>
      <circle cx="215" cy="190" r="3.5" fill="#059669"/><text x="222" y="205" font-size="12" font-weight="bold" fill="#059669">H</text>
      <circle cx="145" cy="110" r="4" fill="#dc2626"/><text x="155" y="108" font-size="12" font-weight="black" fill="#dc2626">K</text>
      <text x="95" y="128" font-size="11" font-weight="black" fill="#dc2626">AK = d</text>
    </svg>`,
    tikzCode: `% --- KHOẢNG CÁCH TỪ CHÂN ĐƯỜNG CAO A ĐẾN MẶT BÊN (SBC) LỚP 11 ---
\\begin{tikzpicture}[scale=1, line join=round]
  \\coordinate (A) at (0,0);
  \\coordinate (B) at (1.6,-1.1);
  \\coordinate (C) at (4,0);
  \\coordinate (S) at (0,3.2);
  \\coordinate (H) at ($(B)!0.5!(C)$);
  \\coordinate (K) at ($(S)!0.48!(H)$);
  \\draw[dashed] (A) -- (C) (A) -- (H);
  \\draw[dashed, very thick, red] (A) -- (K) node[midway, above left] {$AK$};
  \\draw[thick, teal] (S) -- (H);
  \\draw[thick] (S) -- (A) -- (B) -- (C) -- (S) -- (B);
  \\foreach \\p/\\pos in {S/above, A/left, B/below, C/right, H/below right, K/above right}
    \\fill (\\p) circle (1.4pt) node[\\pos] {$\\p$};
\\end{tikzpicture}`
  },

  {
    id: "tikz-g11-angle-line-plane",
    grade: 11,
    chapterId: "g11-c7",
    lessonId: "g11-c7-l26",
    title: "Góc giữa đường thẳng SM và mặt phẳng (P): φ = ∠SMH",
    topic: "Hình học không gian - Góc trong không gian",
    desc: "Góc giữa đường thẳng SM và mặt phẳng (P) là góc giữa SM và hình chiếu vuông góc MH của nó lên (P): tan φ = SH / MH.",
    formula: "SH \\perp (P) \\text{ tại } H \\implies (SM, (P)) = (SM, MH) = \\widehat{SMH} = \\varphi",
    svg: `<svg viewBox="0 0 340 235" class="w-full h-auto max-h-56 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Plane (P) -->
      <polygon points="40,195 245,195 305,125 100,125" fill="#f1f5f9" stroke="#64748b" stroke-width="2"/>
      <text x="60" y="185" font-size="13" font-weight="black" fill="#475569">(P)</text>
      <!-- S(115,40), H(115,160), M(235,160) -->
      <polygon points="115,40 115,160 235,160" fill="#fef3c7" fill-opacity="0.55"/>
      <line x1="115" y1="40" x2="115" y2="160" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="5 3"/>
      <line x1="115" y1="160" x2="235" y2="160" stroke="#059669" stroke-width="2.5"/>
      <line x1="115" y1="40" x2="235" y2="160" stroke="#4f46e5" stroke-width="2.8"/>
      <!-- Right angle at H & angle arc at M -->
      <path d="M 115,146 L 129,146 L 129,160" fill="none" stroke="#dc2626" stroke-width="1.6"/>
      <path d="M 205,160 A 30,30 0 0,1 214,139" fill="none" stroke="#d97706" stroke-width="2.4"/>
      <text x="192" y="153" font-size="13" font-weight="black" fill="#d97706">φ</text>
      <!-- Points -->
      <circle cx="115" cy="40" r="4" fill="#4f46e5"/><text x="115" y="27" font-size="13" font-weight="black" text-anchor="middle">S</text>
      <circle cx="115" cy="160" r="3.5" fill="#dc2626"/><text x="98" y="168" font-size="12" font-weight="bold" fill="#dc2626">H</text>
      <circle cx="235" cy="160" r="4" fill="#1e293b"/><text x="244" y="165" font-size="13" font-weight="black">M</text>
      <text x="98" y="105" font-size="12" font-weight="bold" fill="#dc2626">h</text>
    </svg>`,
    tikzCode: `% --- GÓC GIỮA ĐƯỜNG THẲNG VÀ MẶT PHẲNG LỚP 11 ---
\\begin{tikzpicture}[scale=1]
  \\draw[thick, gray, fill=gray!10] (0,0) -- (4.5,0) -- (5.7,1.4) -- (1.2,1.4) -- cycle;
  \\node[above right] at (0.1,0.1) {$(P)$};
  \\coordinate (H) at (1.8,0.7);
  \\coordinate (M) at (4.0,0.7);
  \\coordinate (S) at (1.8,2.9);
  \\draw[dashed, very thick, red] (S) -- (H) node[midway, left] {$h$};
  \\draw[very thick, teal] (H) -- (M);
  \\draw[very thick, indigo] (S) -- (M);
  \\draw[red] (1.8,0.95) -| (2.05,0.7);
  \\draw[orange, thick] (3.5,0.7) arc (180:135:0.5) node[midway, left] {$\\varphi$};
  \\foreach \\p/\\pos in {S/above, H/below left, M/below right}
    \\fill (\\p) circle (1.5pt) node[\\pos] {$\\p$};
\\end{tikzpicture}`
  },

  {
    id: "tikz-g11-volume-pyramid-prism",
    grade: 11,
    chapterId: "g11-c7",
    lessonId: "g11-c7-l27",
    title: "Thể tích khối chóp V = 1/3 B·h và khối lăng trụ V = B·h",
    topic: "Hình học không gian - Thể tích khối đa diện",
    desc: "Thể tích khối chóp bằng một phần ba tích diện tích mặt đáy B và chiều cao h. Thể tích khối lăng trụ bằng tích diện tích đáy B và chiều cao h.",
    formula: "V_{\\text{chóp}} = \\frac{1}{3} S_{\\text{đáy}} \\cdot h, \\quad V_{\\text{lăng trụ}} = S_{\\text{đáy}} \\cdot h",
    svg: `<svg viewBox="0 0 340 245" class="w-full h-auto max-h-56 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Pyramid S.ABC with altitude SH: A(55,175), B(150,218), C(275,175), H(155,185), S(155,32) -->
      <polygon points="55,175 150,218 275,175" fill="#dbeafe" fill-opacity="0.65"/>
      <polygon points="155,32 55,175 150,218" fill="#eff6ff" fill-opacity="0.45"/>
      <polygon points="155,32 150,218 275,175" fill="#e0e7ff" fill-opacity="0.5"/>
      <!-- Hidden base edge AC and height SH -->
      <line x1="55" y1="175" x2="275" y2="175" stroke="#64748b" stroke-width="1.8" stroke-dasharray="5 3"/>
      <line x1="155" y1="32" x2="155" y2="185" stroke="#dc2626" stroke-width="2.6" stroke-dasharray="5 3"/>
      <!-- Right angle at H -->
      <path d="M 155,172 L 168,172 L 168,185" fill="none" stroke="#dc2626" stroke-width="1.6"/>
      <!-- Visible edges -->
      <line x1="155" y1="32" x2="55" y2="175" stroke="#4f46e5" stroke-width="2.4"/>
      <line x1="155" y1="32" x2="150" y2="218" stroke="#4f46e5" stroke-width="2.4"/>
      <line x1="155" y1="32" x2="275" y2="175" stroke="#4f46e5" stroke-width="2.4"/>
      <line x1="55" y1="175" x2="150" y2="218" stroke="#1e293b" stroke-width="2.3"/>
      <line x1="150" y1="218" x2="275" y2="175" stroke="#1e293b" stroke-width="2.3"/>
      <!-- Labels -->
      <circle cx="155" cy="32" r="4" fill="#4f46e5"/><text x="155" y="20" font-size="13" font-weight="black" text-anchor="middle">S</text>
      <circle cx="55" cy="175" r="3.5" fill="#1e293b"/><text x="38" y="180" font-size="12" font-weight="bold">A</text>
      <circle cx="150" cy="218" r="3.5" fill="#1e293b"/><text x="145" y="236" font-size="12" font-weight="bold">B</text>
      <circle cx="275" cy="175" r="3.5" fill="#1e293b"/><text x="284" y="180" font-size="12" font-weight="bold">C</text>
      <circle cx="155" cy="185" r="3.5" fill="#dc2626"/><text x="163" y="198" font-size="12" font-weight="black" fill="#dc2626">H</text>
      <text x="138" y="115" font-size="13" font-weight="black" fill="#dc2626">h</text>
      <text x="208" y="195" font-size="12" font-weight="black" fill="#1e40af">B = Sđáy</text>
    </svg>`,
    tikzCode: `% --- THỂ TÍCH KHỐI CHÓP V = 1/3 B.h LỚP 11 ---
\\begin{tikzpicture}[scale=1, line join=round]
  \\coordinate (A) at (0,0);
  \\coordinate (B) at (1.7,-1.1);
  \\coordinate (C) at (4.2,0);
  \\coordinate (H) at (1.9,-0.35);
  \\coordinate (S) at (1.9,3.1);
  \\fill[blue!10] (A) -- (B) -- (C) -- cycle;
  \\draw[dashed] (A) -- (C);
  \\draw[dashed, very thick, red] (S) -- (H) node[midway, left] {$h$};
  \\draw[red] (1.9,-0.1) -| (2.15,-0.35);
  \\draw[thick] (A) -- (B) -- (C) (S) -- (A) (S) -- (B) (S) -- (C);
  \\foreach \\p/\\pos in {S/above, A/left, B/below, C/right, H/below right}
    \\fill (\\p) circle (1.4pt) node[\\pos] {$\\p$};
\\end{tikzpicture}`
  },

  // ------------------------------------------------------------------------
  // LỚP 12: KHẢO SÁT HÀM SỐ, HÌNH HỌC OXYZ & ỨNG DỤNG TÍCH PHÂN
  // ------------------------------------------------------------------------
  {
    id: "tikz-g12-cubic-graph",
    grade: 12,
    chapterId: "g12-c1",
    lessonId: "g12-c1-l1",
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
    id: "tikz-g12-oxyz-vectors",
    grade: 12,
    chapterId: "g12-c2",
    lessonId: "g12-c2-l7",
    title: "Hệ trục toạ độ không gian Oxyz và Toạ độ của điểm, vectơ",
    topic: "Toạ độ của vectơ trong không gian",
    desc: "Hệ toạ độ Oxyz gồm 3 trục Ox, Oy, Oz đôi một vuông góc với 3 vectơ đơn vị i, j, k. Điểm M(x; y; z) biểu diễn qua hình hộp chữ nhật.",
    formula: "\\vec{OM} = x\\vec{i} + y\\vec{j} + z\\vec{k} \\iff M(x; y; z)",
    svg: `<svg viewBox="0 0 340 250" class="w-full h-auto max-h-60 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arr-v12" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#dc2626"/>
        </marker>
      </defs>
      <!-- Axes O(130, 155) -->
      <line x1="130" y1="155" x2="130" y2="20" stroke="#1e293b" stroke-width="2.2"/>
      <text x="136" y="25" font-size="13" font-weight="black">z</text>
      <line x1="130" y1="155" x2="310" y2="155" stroke="#1e293b" stroke-width="2.2"/>
      <text x="315" y="160" font-size="13" font-weight="black">y</text>
      <line x1="130" y1="155" x2="45" y2="230" stroke="#1e293b" stroke-width="2.2"/>
      <text x="32" y="235" font-size="13" font-weight="black">x</text>
      <text x="115" y="170" font-size="13" font-weight="black">O</text>
      <!-- Projections: x on Ox(80,199), y on Oy(230,155), M'(180,199), z on Oz(130,75), M(180,119) -->
      <line x1="80" y1="199" x2="180" y2="199" stroke="#64748b" stroke-dasharray="4 3" stroke-width="1.5"/>
      <line x1="230" y1="155" x2="180" y2="199" stroke="#64748b" stroke-dasharray="4 3" stroke-width="1.5"/>
      <line x1="130" y1="155" x2="180" y2="199" stroke="#2563eb" stroke-dasharray="3 3" stroke-width="1.5"/>
      <line x1="180" y1="199" x2="180" y2="119" stroke="#059669" stroke-dasharray="4 3" stroke-width="1.8"/>
      <line x1="130" y1="75" x2="180" y2="119" stroke="#64748b" stroke-dasharray="4 3" stroke-width="1.5"/>
      <!-- Vector OM -->
      <line x1="130" y1="155" x2="180" y2="119" stroke="#dc2626" stroke-width="2.8" marker-end="url(#arr-v12)"/>
      <circle cx="180" cy="119" r="4" fill="#dc2626"/><text x="188" y="116" font-size="12" font-weight="black" fill="#dc2626">M(x; y; z)</text>
      <circle cx="180" cy="199" r="3" fill="#2563eb"/><text x="186" y="212" font-size="11" font-weight="bold" fill="#2563eb">M'(x; y; 0)</text>
      <text x="65" y="195" font-size="11" font-weight="bold">x</text>
      <text x="230" y="148" font-size="11" font-weight="bold">y</text>
      <text x="115" y="78" font-size="11" font-weight="bold">z</text>
    </svg>`,
    tikzCode: `% --- HỆ TRỤC TỌA ĐỘ OXYZ & TỌA ĐỘ ĐIỂM M(x;y;z) LỚP 12 ---
\\begin{tikzpicture}[>=stealth, scale=1]
  \\draw[->, thick] (0,0,0) -- (4,0,0) node[right] {$y$};
  \\draw[->, thick] (0,0,0) -- (0,3.5,0) node[above] {$z$};
  \\draw[->, thick] (0,0,0) -- (0,0,4) node[below left] {$x$};
  \\node[below left] at (0,0,0) {$O$};
  \\coordinate (M) at (2.5,2,2);
  \\coordinate (Mxy) at (2.5,0,2);
  \\draw[dashed, gray] (2.5,0,0) node[above] {$y$} -- (Mxy) -- (0,0,2) node[left] {$x$};
  \\draw[dashed, teal] (Mxy) node[below right] {$M'(x;y;0)$} -- (M) -- (0,2,0) node[left] {$z$};
  \\draw[->, very thick, red] (0,0,0) -- (M) node[above right] {$M(x;y;z)$};
\\end{tikzpicture}`
  },

  {
    id: "tikz-g12-oxyz-plane",
    grade: 12,
    chapterId: "g12-c5",
    lessonId: "g12-c5-l14",
    title: "Hệ trục toạ độ không gian Oxyz và Vectơ pháp tuyến mặt phẳng",
    topic: "Phương pháp toạ độ trong không gian",
    desc: "Mặt phẳng (P) trong không gian Oxyz hoàn toàn được xác định khi biết một điểm M₀(x₀; y₀; z₀) đi qua và một vectơ pháp tuyến n = (A; B; C).",
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
      <line x1="130" y1="160" x2="130" y2="25" stroke="#1e293b" stroke-width="2.5" marker-end="url(#arr-xyz)"/>
      <text x="135" y="25" font-size="14" font-weight="black">z</text>
      <line x1="130" y1="160" x2="310" y2="160" stroke="#1e293b" stroke-width="2.5" marker-end="url(#arr-xyz)"/>
      <text x="315" y="165" font-size="14" font-weight="black">y</text>
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
    id: "tikz-g12-box-vector-rule",
    grade: 12,
    chapterId: "g12-c2",
    lessonId: "g12-c2-l6",
    title: "Vectơ trong không gian & Quy tắc hình hộp ABCD.A'B'C'D'",
    topic: "Toạ độ của vectơ trong không gian",
    desc: "Trong hình hộp ABCD.A'B'C'D', tổng ba vectơ xuất phát từ cùng một đỉnh A theo 3 cạnh bằng vectơ đường chéo chính AC'.",
    formula: "\\vec{AB} + \\vec{AD} + \\vec{AA'} = \\vec{AC'}",
    svg: `<svg viewBox="0 0 340 245" class="w-full h-auto max-h-56 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arr-box-r" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#dc2626"/>
        </marker>
        <marker id="arr-box-b" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#2563eb"/>
        </marker>
      </defs>
      <!-- Bottom A(90,155), B(50,200), C(210,200), D(250,155); Top A'(90,50), B'(50,95), C'(210,95), D'(250,50) -->
      <polygon points="90,50 250,50 210,95 50,95" fill="#e0e7ff" fill-opacity="0.55" stroke="#1e293b" stroke-width="2"/>
      <!-- 3 Edge Vectors from A: AB, AD, AA' (blue) and Diagonal Vector AC' (red) -->
      <line x1="90" y1="155" x2="53" y2="197" stroke="#2563eb" stroke-width="2.6" stroke-dasharray="5 3" marker-end="url(#arr-box-b)"/>
      <line x1="90" y1="155" x2="246" y2="155" stroke="#2563eb" stroke-width="2.6" stroke-dasharray="5 3" marker-end="url(#arr-box-b)"/>
      <line x1="90" y1="155" x2="90" y2="55" stroke="#2563eb" stroke-width="2.6" stroke-dasharray="5 3" marker-end="url(#arr-box-b)"/>
      <line x1="90" y1="155" x2="206" y2="97" stroke="#dc2626" stroke-width="3" marker-end="url(#arr-box-r)"/>
      <!-- Visible box edges -->
      <line x1="50" y1="95" x2="50" y2="200" stroke="#1e293b" stroke-width="2.2"/>
      <line x1="210" y1="95" x2="210" y2="200" stroke="#1e293b" stroke-width="2.2"/>
      <line x1="250" y1="50" x2="250" y2="155" stroke="#1e293b" stroke-width="2.2"/>
      <line x1="50" y1="200" x2="210" y2="200" stroke="#1e293b" stroke-width="2.2"/>
      <line x1="210" y1="200" x2="250" y2="155" stroke="#1e293b" stroke-width="2.2"/>
      <!-- Labels -->
      <circle cx="90" cy="155" r="4" fill="#dc2626"/><text x="73" y="155" font-size="12" font-weight="black" fill="#dc2626">A</text>
      <text x="34" y="208" font-size="12" font-weight="bold" fill="#2563eb">B</text>
      <text x="214" y="215" font-size="12" font-weight="bold">C</text>
      <text x="258" y="160" font-size="12" font-weight="bold" fill="#2563eb">D</text>
      <text x="72" y="45" font-size="12" font-weight="bold" fill="#2563eb">A'</text>
      <text x="32" y="95" font-size="12" font-weight="bold">B'</text>
      <text x="215" y="92" font-size="12" font-weight="black" fill="#dc2626">C'</text>
      <text x="258" y="50" font-size="12" font-weight="bold">D'</text>
      <text x="155" y="120" font-size="12" font-weight="black" fill="#dc2626">AC'⃗</text>
    </svg>`,
    tikzCode: `% --- QUY TẮC HÌNH HỘP TRONG KHÔNG GIAN LỚP 12 ---
\\begin{tikzpicture}[>=stealth, scale=1, line join=round]
  \\coordinate (A) at (0,0);
  \\coordinate (B) at (-1,-1.1);
  \\coordinate (D) at (3.4,0);
  \\coordinate (C) at ($(B)+(D)-(A)$);
  \\coordinate (A') at (0,2.5);
  \\coordinate (B') at ($(B)+(A')-(A)$);
  \\coordinate (C') at ($(C)+(A')-(A)$);
  \\coordinate (D') at ($(D)+(A')-(A)$);
  \\draw[->, dashed, very thick, blue] (A) -- (B);
  \\draw[->, dashed, very thick, blue] (A) -- (D);
  \\draw[->, dashed, very thick, blue] (A) -- (A');
  \\draw[->, very thick, red] (A) -- (C') node[midway, above] {$\\vec{AC'}$};
  \\draw[thick] (B) -- (C) -- (D) -- (D') -- (A') -- (B') -- (B) (B') -- (C') -- (D') (C) -- (C');
  \\foreach \\p/\\pos in {A/left, B/below left, C/below right, D/right, A'/above left, B'/left, C'/above, D'/right}
    \\fill (\\p) circle (1.3pt) node[\\pos] {$\\p$};
\\end{tikzpicture}`
  },

  {
    id: "tikz-g12-cross-product-oxyz",
    grade: 12,
    chapterId: "g12-c2",
    lessonId: "g12-c2-l8",
    title: "Biểu thức toạ độ các phép toán vectơ & Tích có hướng [u⃗, v⃗]",
    topic: "Toạ độ của vectơ trong không gian",
    desc: "Vectơ tích có hướng n = [u, v] vuông góc với cả hai vectơ u và v; độ dài |[u, v]| bằng diện tích hình bình hành tạo bởi u và v.",
    formula: "\\vec{u}\\cdot\\vec{v} = x_1x_2+y_1y_2+z_1z_2, \\quad S_{ABC} = \\frac{1}{2}|[\\vec{AB}, \\vec{AC}]|",
    svg: `<svg viewBox="0 0 340 240" class="w-full h-auto max-h-56 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arr-cp-r" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#dc2626"/>
        </marker>
        <marker id="arr-cp-b" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#2563eb"/>
        </marker>
        <marker id="arr-cp-g" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#059669"/>
        </marker>
      </defs>
      <!-- Parallelogram formed by u and v from A(95,175): B(245,175), D(145,125), C(295,125) -->
      <polygon points="95,175 245,175 295,125 145,125" fill="#dbeafe" fill-opacity="0.6" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/>
      <!-- Vector u = AB, Vector v = AD -->
      <line x1="95" y1="175" x2="240" y2="175" stroke="#2563eb" stroke-width="3" marker-end="url(#arr-cp-b)"/>
      <line x1="95" y1="175" x2="142" y2="128" stroke="#059669" stroke-width="3" marker-end="url(#arr-cp-g)"/>
      <!-- Cross product n = [u, v] perpendicular at A -->
      <line x1="95" y1="175" x2="95" y2="40" stroke="#dc2626" stroke-width="3.2" marker-end="url(#arr-cp-r)"/>
      <!-- Right angle markers at A -->
      <path d="M 95,160 L 110,160 L 110,175" fill="none" stroke="#dc2626" stroke-width="1.6"/>
      <circle cx="95" cy="175" r="4" fill="#1e293b"/><text x="76" y="182" font-size="13" font-weight="black">A</text>
      <text x="170" y="195" font-size="13" font-weight="black" fill="#2563eb">u⃗ = AB⃗</text>
      <text x="100" y="138" font-size="13" font-weight="black" fill="#059669">v⃗ = AC⃗</text>
      <text x="106" y="52" font-size="13" font-weight="black" fill="#dc2626">n⃗ = [u⃗, v⃗]</text>
    </svg>`,
    tikzCode: `% --- TÍCH CÓ HƯỚNG CỦA HAI VECTƠ TRONG KHÔNG GIAN LỚP 12 ---
\\begin{tikzpicture}[>=stealth, scale=1]
  \\coordinate (A) at (0,0);
  \\coordinate (B) at (3.2,0);
  \\coordinate (C) at (1.2,1.3);
  \\coordinate (D) at ($(B)+(C)-(A)$);
  \\filldraw[blue!10, dashed, draw=gray] (A) -- (B) -- (D) -- (C) -- cycle;
  \\draw[->, very thick, blue] (A) -- (B) node[midway, below] {$\\vec{u}$};
  \\draw[->, very thick, teal] (A) -- (C) node[midway, above left] {$\\vec{v}$};
  \\draw[->, very thick, red] (A) -- (0,2.8) node[right] {$\\vec{n}=[\\vec{u},\\vec{v}]$};
  \\draw[red] (0,0.3) -| (0.3,0);
\\end{tikzpicture}`
  },

  {
    id: "tikz-g12-oxyz-line",
    grade: 12,
    chapterId: "g12-c5",
    lessonId: "g12-c5-l15",
    title: "Phương trình đường thẳng Δ trong không gian Oxyz và VTCP u⃗",
    topic: "Phương pháp toạ độ trong không gian",
    desc: "Đường thẳng Δ trong không gian Oxyz đi qua điểm M₀(x₀; y₀; z₀) và nhận vectơ u = (a; b; c) làm vectơ chỉ phương (giá của u song song hoặc trùng với Δ).",
    formula: "\\Delta: \\frac{x-x_0}{a} = \\frac{y-y_0}{b} = \\frac{z-z_0}{c}, \\quad \\vec{u} = (a; b; c)",
    svg: `<svg viewBox="0 0 340 250" class="w-full h-auto max-h-60 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arr-line-u" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#dc2626"/>
        </marker>
      </defs>
      <!-- Axes Oxyz: Origin O(115, 165) -->
      <line x1="115" y1="165" x2="115" y2="22" stroke="#1e293b" stroke-width="2.2"/>
      <text x="122" y="28" font-size="13" font-weight="black">z</text>
      <line x1="115" y1="165" x2="310" y2="165" stroke="#1e293b" stroke-width="2.2"/>
      <text x="315" y="170" font-size="13" font-weight="black">y</text>
      <line x1="115" y1="165" x2="35" y2="235" stroke="#1e293b" stroke-width="2.2"/>
      <text x="22" y="240" font-size="13" font-weight="black">x</text>
      <text x="100" y="178" font-size="13" font-weight="black">O</text>
      <!-- Line Delta in space -->
      <line x1="135" y1="135" x2="295" y2="55" stroke="#2563eb" stroke-width="2.5"/>
      <text x="300" y="55" font-size="14" font-weight="black" fill="#2563eb">Δ</text>
      <!-- Point M0 and direction vector u -->
      <circle cx="175" cy="115" r="4" fill="#1e293b"/><text x="155" y="135" font-size="12" font-weight="bold">M₀(x₀;y₀;z₀)</text>
      <line x1="175" y1="115" x2="255" y2="75" stroke="#dc2626" stroke-width="3.2" marker-end="url(#arr-line-u)"/>
      <text x="200" y="72" font-size="13" font-weight="black" fill="#dc2626">u⃗ = (a; b; c)</text>
    </svg>`,
    tikzCode: `% --- PHƯƠNG TRÌNH ĐƯỜNG THẲNG TRONG KHÔNG GIAN OXYZ LỚP 12 ---
\\begin{tikzpicture}[>=stealth, scale=1]
  \\draw[->, thick] (0,0,0) -- (4,0,0) node[right] {$y$};
  \\draw[->, thick] (0,0,0) -- (0,3.5,0) node[above] {$z$};
  \\draw[->, thick] (0,0,0) -- (0,0,4) node[below left] {$x$};
  \\node[below left] at (0,0,0) {$O$};
  \\draw[thick, blue] (0.8,1.0,1.2) -- (3.8,2.6,0.4) node[right] {$\\Delta$};
  \\coordinate (M) at (1.6,1.43,1.0);
  \\fill (M) circle (1.5pt) node[below right] {$M_0(x_0;y_0;z_0)$};
  \\draw[->, very thick, red] (M) -- (3.0,2.17,0.6) node[above left] {$\\vec{u}=(a;b;c)$};
\\end{tikzpicture}`
  },

  {
    id: "tikz-g12-oxyz-distance-angle",
    grade: 12,
    chapterId: "g12-c5",
    lessonId: "g12-c5-l16",
    title: "Góc và Khoảng cách từ điểm M₀ đến mặt phẳng (P) trong Oxyz",
    topic: "Phương pháp toạ độ trong không gian",
    desc: "Khoảng cách d(M₀, (P)) = M₀H tính theo toạ độ tâm/điểm và VTPT n = (A; B; C). Góc giữa đường thẳng d và mặt phẳng (P) thoả mãn sin(d, (P)) = |u·n| / (|u|·|n|).",
    formula: "d(M_0,(P)) = \\frac{|Ax_0+By_0+Cz_0+D|}{\\sqrt{A^2+B^2+C^2}}, \\quad \\sin(d,(P)) = \\frac{|\\vec{u}\\cdot\\vec{n}|}{|\\vec{u}||\\vec{n}|}",
    svg: `<svg viewBox="0 0 340 245" class="w-full h-auto max-h-56 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arr-da-n" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#dc2626"/>
        </marker>
        <marker id="arr-da-u" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#2563eb"/>
        </marker>
      </defs>
      <!-- Plane (P) -->
      <polygon points="40,195 245,195 305,125 100,125" fill="#e0e7ff" fill-opacity="0.6" stroke="#4f46e5" stroke-width="2"/>
      <text x="60" y="185" font-size="13" font-weight="black" fill="#4338ca">(P)</text>
      <!-- Point M0(125,45), Foot H(125,160), Intersection I(230,160) -->
      <line x1="125" y1="45" x2="125" y2="160" stroke="#dc2626" stroke-width="2.6" stroke-dasharray="5 3"/>
      <line x1="125" y1="160" x2="230" y2="160" stroke="#059669" stroke-width="2.2"/>
      <line x1="100" y1="20" x2="250" y2="180" stroke="#2563eb" stroke-width="2.4"/>
      <line x1="125" y1="45" x2="185" y2="110" stroke="#2563eb" stroke-width="3.2" marker-end="url(#arr-da-u)"/>
      <!-- Normal vector n at H -->
      <line x1="125" y1="160" x2="125" y2="85" stroke="#dc2626" stroke-width="3" marker-end="url(#arr-da-n)"/>
      <!-- Right angle at H -->
      <path d="M 125,147 L 138,147 L 138,160" fill="none" stroke="#dc2626" stroke-width="1.6"/>
      <!-- Labels -->
      <circle cx="125" cy="45" r="4" fill="#1e293b"/><text x="70" y="45" font-size="12" font-weight="black">M₀(x₀;y₀;z₀)</text>
      <circle cx="125" cy="160" r="3.5" fill="#dc2626"/><text x="108" y="175" font-size="12" font-weight="bold" fill="#dc2626">H</text>
      <circle cx="230" cy="160" r="3.5" fill="#1e293b"/><text x="238" y="162" font-size="12" font-weight="bold">I</text>
      <text x="88" y="112" font-size="12" font-weight="black" fill="#dc2626">n⃗</text>
      <text x="186" y="96" font-size="12" font-weight="black" fill="#2563eb">u⃗</text>
      <text x="195" y="153" font-size="12" font-weight="black" fill="#059669">φ</text>
    </svg>`,
    tikzCode: `% --- GÓC VÀ KHOẢNG CÁCH TRONG OXYZ LỚP 12 ---
\\begin{tikzpicture}[>=stealth, scale=1]
  \\draw[thick, indigo, fill=indigo!10] (0,0) -- (4.5,0) -- (5.7,1.4) -- (1.2,1.4) -- cycle;
  \\node[above right, indigo] at (0.1,0.1) {$(P)$};
  \\coordinate (H) at (1.8,0.7);
  \\coordinate (I) at (3.9,0.7);
  \\coordinate (M0) at (1.8,2.9);
  \\draw[dashed, very thick, red] (M0) -- (H) node[midway, left] {$d$};
  \\draw[->, very thick, red] (H) -- (1.8,1.9) node[right] {$\\vec{n}$};
  \\draw[thick, blue] (M0) -- (I);
  \\draw[->, very thick, blue] (M0) -- ($(M0)!0.55!(I)$) node[above right] {$\\vec{u}$};
  \\draw[very thick, teal] (H) -- (I);
  \\foreach \\p/\\pos in {M0/above, H/below left, I/below right}
    \\fill (\\p) circle (1.5pt) node[\\pos] {$\\p$};
\\end{tikzpicture}`
  },

  {
    id: "tikz-g12-oxyz-sphere",
    grade: 12,
    chapterId: "g12-c5",
    lessonId: "g12-c5-l17",
    title: "Phương trình mặt cầu (S) tâm I(a; b; c) bán kính R trong không gian Oxyz",
    topic: "Phương pháp toạ độ trong không gian",
    desc: "Mặt cầu (S) tâm I(a; b; c) bán kính R là tập hợp các điểm M(x; y; z) trong không gian Oxyz cách tâm I một khoảng không đổi IM = R.",
    formula: "(S): (x-a)^2 + (y-b)^2 + (z-c)^2 = R^2, \\quad IM = R",
    svg: `<svg viewBox="0 0 340 250" class="w-full h-auto max-h-60 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Axes Oxyz: Origin O(105, 175) -->
      <line x1="105" y1="175" x2="105" y2="20" stroke="#1e293b" stroke-width="2.2"/>
      <text x="112" y="26" font-size="13" font-weight="black">z</text>
      <line x1="105" y1="175" x2="315" y2="175" stroke="#1e293b" stroke-width="2.2"/>
      <text x="320" y="180" font-size="13" font-weight="black">y</text>
      <line x1="105" y1="175" x2="30" y2="238" stroke="#1e293b" stroke-width="2.2"/>
      <text x="18" y="242" font-size="13" font-weight="black">x</text>
      <text x="90" y="188" font-size="13" font-weight="black">O</text>
      <!-- Sphere (S) centered at I(215, 105), R=68 -->
      <circle cx="215" cy="105" r="68" fill="#e0e7ff" fill-opacity="0.55" stroke="#4f46e5" stroke-width="2.5"/>
      <path d="M 147,105 A 68,20 0 0,1 283,105" fill="none" stroke="#64748b" stroke-width="1.6" stroke-dasharray="5 3"/>
      <path d="M 147,105 A 68,20 0 0,0 283,105" fill="none" stroke="#4f46e5" stroke-width="2"/>
      <!-- Radius IM -->
      <line x1="215" y1="105" x2="283" y2="105" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="4 3"/>
      <circle cx="215" cy="105" r="4" fill="#dc2626"/><text x="175" y="96" font-size="12" font-weight="black" fill="#dc2626">I(a; b; c)</text>
      <circle cx="283" cy="105" r="3.5" fill="#1e293b"/><text x="288" y="109" font-size="12" font-weight="bold">M(x;y;z)</text>
      <text x="246" y="98" font-size="12" font-weight="black" fill="#dc2626">R</text>
    </svg>`,
    tikzCode: `% --- MẶT CẦU TÂM I(a;b;c) BÁN KÍNH R TRONG OXYZ LỚP 12 ---
\\begin{tikzpicture}[>=stealth, scale=1]
  \\draw[->, thick] (0,0,0) -- (4.2,0,0) node[right] {$y$};
  \\draw[->, thick] (0,0,0) -- (0,3.5,0) node[above] {$z$};
  \\draw[->, thick] (0,0,0) -- (0,0,4) node[below left] {$x$};
  \\node[below left] at (0,0,0) {$O$};
  \\coordinate (I) at (2.2,1.8,0.8);
  \\shade[ball color=indigo!20, opacity=0.45] (I) circle (1.35cm);
  \\draw[thick, indigo] (I) circle (1.35cm);
  \\draw[dashed] ($(I)+(1.35,0)$) arc (0:180:1.35cm and 0.4cm);
  \\draw[thick, indigo] ($(I)+(-1.35,0)$) arc (180:360:1.35cm and 0.4cm);
  \\draw[dashed, very thick, red] (I) -- ($(I)+(1.35,0)$) node[midway, above] {$R$};
  \\fill (I) circle (1.5pt) node[below left] {$I(a;b;c)$};
\\end{tikzpicture}`
  },

  {
    id: "tikz-g12-integral-area",
    grade: 12,
    chapterId: "g12-c4",
    lessonId: "g12-c4-l13",
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
      <path d="M 90,160 C 110,80 140,50 165,50 C 190,50 220,90 240,160 Z" fill="#dbeafe" stroke="none"/>
      <g stroke="#93c5fd" stroke-width="1.2">
        <line x1="110" y1="160" x2="110" y2="105"/>
        <line x1="130" y1="160" x2="130" y2="72"/>
        <line x1="150" y1="160" x2="150" y2="55"/>
        <line x1="170" y1="160" x2="170" y2="52"/>
        <line x1="190" y1="160" x2="190" y2="65"/>
        <line x1="210" y1="160" x2="210" y2="92"/>
        <line x1="230" y1="160" x2="230" y2="135"/>
      </g>
      <path d="M 60,190 C 100,60 140,45 165,45 C 195,45 230,80 270,200" fill="none" stroke="#2563eb" stroke-width="2.8"/>
      <text x="180" y="38" font-size="13" font-weight="bold" fill="#2563eb">y = f(x)</text>
      <line x1="90" y1="160" x2="90" y2="105" stroke="#dc2626" stroke-width="2" stroke-dasharray="3 3"/>
      <line x1="240" y1="160" x2="240" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="3 3"/>
      <circle cx="90" cy="160" r="3.5" fill="#dc2626"/><text x="88" y="178" font-size="13" font-weight="black" fill="#dc2626">a</text>
      <circle cx="240" cy="160" r="3.5" fill="#dc2626"/><text x="238" y="178" font-size="13" font-weight="black" fill="#dc2626">b</text>
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

// Tìm hình vẽ liên quan đến đúng bài học hoặc đúng chương (TUYỆT ĐỐI không lấy hình của chương khác)
window.getTikzDiagramForLesson = function(gradeId, chapterId, lessonId) {
  // 1. Tìm khớp chính xác bài học
  if (lessonId) {
    const directMatch = window.MATH_TIKZ_LIBRARY.find(d => d.lessonId === lessonId);
    if (directMatch) return directMatch;
  }
  // 2. Tìm khớp chính xác chương của bài học đó
  if (chapterId) {
    const chMatch = window.MATH_TIKZ_LIBRARY.find(d => d.chapterId === chapterId);
    if (chMatch) return chMatch;
  }
  // Nếu chương/bài học không có hình vẽ riêng (ví dụ các bài đại số, số học thuần túy), trả về null để ẩn khung hình vẽ
  return null;
};

// Kiểm tra xem chương/bài học có phải là Hình học không gian hay không và trả về khung hình minh họa 3D trực quan đi kèm
window.SPATIAL_CHAPTER_IDS = ["g7-c8", "g8-c10", "g9-c8", "g11-c4", "g11-c7", "g12-c2", "g12-c5"];

window.getSpatialIllustrationHtml = function(questionText, gradeId, chapterId, lessonId) {
  const isSpatialChapter = window.SPATIAL_CHAPTER_IDS.includes(chapterId);
  const q = String(questionText || "").toLowerCase();

  // Nếu không thuộc chương hình học không gian và đề bài không nhắc tới khối không gian thì không hiển thị
  if (!isSpatialChapter && !/(hình chóp|tứ diện|lăng trụ|hình hộp|lập phương|hình trụ|hình nón|hình cầu|mặt cầu|oxyz)/i.test(q)) {
    return "";
  }

  let matchedId = null;

  // Nhận diện thông minh theo nội dung câu hỏi / bài tập
  if (/mặt cầu|\(s\)/i.test(q) && (gradeId === 12 || /oxyz|tâm i/i.test(q))) {
    matchedId = "tikz-g12-oxyz-sphere";
  } else if (/hình cầu|khối cầu|mặt cầu/i.test(q)) {
    matchedId = "tikz-g9-sphere";
  } else if (/hình nón|khối nón/i.test(q)) {
    matchedId = "tikz-g9-cone";
  } else if (/hình trụ|khối trụ/i.test(q)) {
    matchedId = "tikz-g9-cylinder";
  } else if (/quy tắc hình hộp|ac'/i.test(q) && gradeId === 12) {
    matchedId = "tikz-g12-box-vector-rule";
  } else if (/tích có hướng/i.test(q)) {
    matchedId = "tikz-g12-cross-product-oxyz";
  } else if (/hình hộp|lập phương|abcd\.a'b'c'd'/i.test(q)) {
    matchedId = (chapterId === "g11-c7") ? "tikz-g11-perp-lines-cube" : "tikz-g7-box-cube";
  } else if (/lăng trụ|abc\.a'b'c'/i.test(q)) {
    matchedId = (chapterId === "g11-c4") ? "tikz-g11-parallel-planes-prism" : "tikz-g7-standing-prism";
  } else if (/chóp tứ giác đều/i.test(q)) {
    matchedId = "tikz-g8-pyramid";
  } else if (/chóp tam giác đều/i.test(q)) {
    matchedId = "tikz-g8-regular-tri-pyramid";
  } else if (/s\.abcd/i.test(q)) {
    matchedId = (chapterId === "g11-c7") ? "tikz-g11-perp-planes-pyramid" : "tikz-g11-pyramid-intersection";
  } else if (/s\.abc/i.test(q)) {
    matchedId = (lessonId === "g11-c7-l27" || /thể tích/i.test(q)) ? "tikz-g11-volume-pyramid-prism" : "tikz-g11-distance-pyramid";
  } else if (/tứ diện/i.test(q)) {
    matchedId = "tikz-g11-parallel-lines-tetra";
  } else if (/phép chiếu song song|hình biểu diễn/i.test(q)) {
    matchedId = "tikz-g11-parallel-projection";
  }

  let diagram = matchedId ? window.MATH_TIKZ_LIBRARY.find(d => d.id === matchedId) : null;
  if (!diagram) {
    diagram = window.getTikzDiagramForLesson(gradeId, chapterId, lessonId);
  }
  if (!diagram) return "";

  return `
    <div class="my-2.5 p-3 bg-white/95 rounded-xl border border-indigo-100 shadow-2xs flex flex-col sm:flex-row items-center gap-3">
      <div class="w-full sm:w-44 shrink-0 bg-slate-50/70 rounded-lg p-1.5 border border-slate-100 flex items-center justify-center">
        ${diagram.svg}
      </div>
      <div class="text-xs text-slate-600 space-y-1 flex-1">
        <div class="font-bold text-indigo-900 flex items-center gap-1.5">
          <i data-lucide="box" class="w-3.5 h-3.5 text-indigo-600"></i>
          <span>Hình minh họa: ${diagram.title}</span>
        </div>
        <p class="text-[11px] text-slate-500 leading-relaxed">${diagram.desc}</p>
      </div>
    </div>
  `;
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
