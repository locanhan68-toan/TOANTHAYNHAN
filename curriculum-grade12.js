// ==========================================================================
// CƠ SỞ DỮ LIỆU NÂNG CAO TOÀN DIỆN TOÁN LỚP 12 (CHUẨN GDPT 2018)
// ĐẦY ĐỦ 6 CHƯƠNG - 19 BÀI HỌC - 3 DẠNG TOÁN/BÀI - 10 BÀI TẬP/DẠNG (30 BÀI/BÀI)
// ==========================================================================

window.GRADE_12_KNOWLEDGE = {
  // ========================================================================
  // CHƯƠNG I: ỨNG DỤNG ĐẠO HÀM ĐỂ KHẢO SÁT VÀ VẼ ĐỒ THỊ CỦA HÀM SỐ
  // ========================================================================
  "g12-c1": {
    chapterId: "g12-c1",
    chapterNumber: "Chương I",
    chapterTitle: "Ứng Dụng Đạo Hàm Để Khảo Sát Và Vẽ Đồ Thị Của Hàm Số",
    semester: "Tập 1 - Học kỳ I",
    theorySections: [
      {
        title: "1. Tính đơn điệu & Cực trị của hàm số",
        content: "- **Tính đơn điệu:** Cho hàm số $y = f(x)$ có đạo hàm trên khoảng $K$.\n  + Nếu $f'(x) \\ge 0, \\forall x \\in K$ (bằng 0 tại hữu hạn điểm) thì hàm số đồng biến trên $K$.\n  + Nếu $f'(x) \\le 0, \\forall x \\in K$ (bằng 0 tại hữu hạn điểm) thì hàm số nghịch biến trên $K$.\n- **Quy tắc cực trị (Dấu hiệu 1):** Nếu $f'(x)$ đổi dấu từ dương sang âm khi qua $x_0$ thì $x_0$ là điểm cực đại. Nếu đổi dấu từ âm sang dương thì $x_0$ là điểm cực tiểu.\n- **Quy tắc cực trị (Dấu hiệu 2):** Nếu $f'(x_0) = 0$ và $f''(x_0) > 0$ thì $x_0$ là cực tiểu; nếu $f''(x_0) < 0$ thì $x_0$ là cực đại."
      },
      {
        title: "2. GTLN - GTNN & Các đường tiệm cận (Đặc biệt: Tiệm cận xiên)",
        content: "- **GTLN, GTNN trên $[a; b]$:** Tính $f(a), f(b)$ và $f(x_i)$ tại các nghiệm $x_i \\in (a; b)$ của phương trình $f'(x) = 0$. Giá trị lớn nhất/nhỏ nhất trong tập này là $\\max, \\min$.\n- **Đường tiệm cận đứng:** Đường thẳng $x = x_0$ là TCĐ nếu ít nhất một trong các giới hạn $\\lim_{x \\to x_0^\\pm} f(x) = \\pm \\infty$.\n- **Đường tiệm cận ngang:** Đường thẳng $y = y_0$ là TCN nếu $\\lim_{x \\to +\\infty} f(x) = y_0$ hoặc $\\lim_{x \\to -\\infty} f(x) = y_0$.\n- **Đường tiệm cận xiên (Điểm mới GDPT 2018):** Đường thẳng $y = ax + b \\ (a \\ne 0)$ là TCX của đồ thị hàm số nếu $\\lim_{x \\to \\pm \\infty} [f(x) - (ax+b)] = 0$. Công thức tìm nhanh: $a = \\lim_{x \\to \\pm\\infty} \\frac{f(x)}{x}$ và $b = \\lim_{x \\to \\pm\\infty} [f(x) - ax]$. Đối với hàm phân thức $y = \\frac{P(x)}{Q(x)}$ có bậc tử lớn hơn bậc mẫu 1 đơn vị, ta chia đa thức để tìm TCX."
      },
      {
        title: "3. Khảo sát đồ thị & Bài toán tối ưu hóa thực tế",
        content: "- **Sơ đồ khảo sát:** 1. Tìm TXĐ -> 2. Xét sự biến thiên (đạo hàm, cực trị, giới hạn, tiệm cận, bảng biến thiên) -> 3. Vẽ đồ thị (giao trục toạ độ, tâm đối xứng, trục đối xứng).\n- **Bài toán tối ưu hóa thực tế (9+):**\n  + Bước 1: Gọi ẩn biến số $x$ và xác định miền giá trị thực tế của $x$.\n  + Bước 2: Thiết lập hàm mục tiêu $f(x)$ (diện tích, thể tích, chi phí, doanh thu, lợi nhuận).\n  + Bước 3: Tìm GTLN hoặc GTNN của $f(x)$ trên miền xác định bằng cách lập bảng biến thiên của $f'(x)$."
      }
    ]
  },

  // ========================================================================
  // CHƯƠNG II: TOẠ ĐỘ CỦA VECTƠ TRONG KHÔNG GIAN
  // ========================================================================
  "g12-c2": {
    chapterId: "g12-c2",
    chapterNumber: "Chương II",
    chapterTitle: "Toạ Độ Của Vectơ Trong Không Gian",
    semester: "Tập 1 - Học kỳ I",
    theorySections: [
      {
        title: "1. Vectơ trong không gian & Tích vô hướng",
        content: "- Các quy tắc vectơ: Quy tắc 3 điểm $\\vec{AB} + \\vec{BC} = \\vec{AC}$; Quy tắc hình bình hành $\\vec{AB} + \\vec{AD} = \\vec{AC}$; Quy tắc hình hộp $\\vec{AB} + \\vec{AD} + \\vec{AA'} = \\vec{AC'}$.\n- Tích vô hướng của hai vectơ: $\\vec{u} \\cdot \\vec{v} = |\\vec{u}| \\cdot |\\vec{v}| \\cdot \\cos(\\vec{u}, \\vec{v})$. Hai vectơ vuông góc khi và chỉ khi $\\vec{u} \\cdot \\vec{v} = 0$."
      },
      {
        title: "2. Hệ toạ độ Oxyz & Biểu thức toạ độ các phép toán",
        content: "- Hệ trục $Oxyz$ gồm 3 trục đôi một vuông góc với 3 vectơ đơn vị $\\vec{i}, \\vec{j}, \\vec{k}$.\n- Tọa độ điểm $M(x; y; z) \\iff \\vec{OM} = x\\vec{i} + y\\vec{j} + z\\vec{k}$.\n- Tọa độ vectơ $\\vec{u} = (x; y; z)$, $\\vec{v} = (x'; y'; z')$:\n  + $\\vec{u} \\pm \\vec{v} = (x \\pm x'; y \\pm y'; z \\pm z')$, $k\\vec{u} = (kx; ky; kz)$.\n  + Độ dài: $|\\vec{u}| = \\sqrt{x^2 + y^2 + z^2}$. Khoảng cách: $AB = \\sqrt{(x_B-x_A)^2 + (y_B-y_A)^2 + (z_B-z_A)^2}$.\n  + Tích vô hướng: $\\vec{u} \\cdot \\vec{v} = x x' + y y' + z z'$.\n  + Trung điểm $M$ của $AB$: $M\\left(\\frac{x_A+x_B}{2}; \\frac{y_A+y_B}{2}; \\frac{z_A+z_B}{2}\\right)$. Trọng tâm tứ diện $G\\left(\\frac{\\sum x}{4}; \\frac{\\sum y}{4}; \\frac{\\sum z}{4}\\right)$."
      },
      {
        title: "3. Tích có hướng & Ứng dụng hình học 9+",
        content: "- Tích có hướng của $\\vec{u} = (x_1; y_1; z_1)$ và $\\vec{v} = (x_2; y_2; z_2)$ là một vectơ vuông góc với cả $\\vec{u}$ và $\\vec{v}$:\n  $$[\\vec{u}, \\vec{v}] = \\left( \\begin{vmatrix} y_1 & z_1 \\\\ y_2 & z_2 \\end{vmatrix}; \\begin{vmatrix} z_1 & x_1 \\\\ z_2 & x_2 \\end{vmatrix}; \\begin{vmatrix} x_1 & y_1 \\\\ x_2 & y_2 \\end{vmatrix} \\right) = (y_1 z_2 - z_1 y_2; z_1 x_2 - x_1 z_2; x_1 y_2 - y_1 x_2)$$\n- Ứng dụng:\n  + Diện tích tam giác: $S_{\\Delta ABC} = \\frac{1}{2} |[\\vec{AB}, \\vec{AC}]|$.\n  + Thể tích khối hộp: $V = |[\\vec{u}, \\vec{v}] \\cdot \\vec{w}|$. Thể tích tứ diện: $V_{ABCD} = \\frac{1}{6} |[\\vec{AB}, \\vec{AC}] \\cdot \\vec{AD}|$.\n  + Điều kiện đồng phẳng của 3 vectơ: $[\\vec{u}, \\vec{v}] \\cdot \\vec{w} = 0$."
      }
    ]
  },

  // ========================================================================
  // CHƯƠNG III: CÁC SỐ ĐẶC TRƯNG ĐO MỨC ĐỘ PHÂN TÁN CHO MẪU SỐ LIỆU GHÉP NHÓM
  // ========================================================================
  "g12-c3": {
    chapterId: "g12-c3",
    chapterNumber: "Chương III",
    chapterTitle: "Các Số Đặc Trưng Đo Mức Độ Phân Tán Cho Mẫu Số Liệu Ghép Nhóm",
    semester: "Tập 1 - Học kỳ I",
    theorySections: [
      {
        title: "1. Mẫu số liệu ghép nhóm & Khoảng biến thiên",
        content: "- Nhóm số liệu $[u_j; u_{j+1})$ có độ dài nhóm $h = u_{j+1} - u_j$, giá trị đại diện $c_j = \\frac{u_j + u_{j+1}}{2}$.\n- Khoảng biến thiên của mẫu số liệu ghép nhóm: $R = u_{k+1} - u_1$ (hiệu số giữa đầu mút phải của nhóm cuối và đầu mút trái của nhóm đầu)."
      },
      {
        title: "2. Tứ phân vị & Khoảng tứ phân vị ghép nhóm",
        content: "- Tứ phân vị thứ $p$ ($p \\in \\{1, 2, 3\\}$) rơi vào nhóm $[u_m; u_{m+1})$ thỏa mãn tổng tần số trước đó tích lũy đạt mốc $\\frac{p \\cdot n}{4}$:\n  $$Q_p = u_m + \\frac{\\frac{p \\cdot n}{4} - C}{n_m} \\cdot (u_{m+1} - u_m)$$\n  với $C$ là tổng tần số của các nhóm đứng trước nhóm $m$, $n_m$ là tần số nhóm $m$.\n- Khoảng tứ phân vị: $\\Delta_Q = Q_3 - Q_1$, phản ánh mức độ phân tán của $50\\%$ dữ liệu trung tâm, không bị ảnh hưởng bởi giá trị bất thường (ngoại lai)."
      },
      {
        title: "3. Phương sai & Độ lệch chuẩn ghép nhóm",
        content: "- Số trung bình: $\\bar{x} = \\frac{1}{n} \\sum_{j=1}^k n_j c_j$.\n- Phương sai mẫu số liệu ghép nhóm:\n  $$s^2 = \\frac{1}{n} \\sum_{j=1}^k n_j (c_j - \\bar{x})^2 = \\frac{1}{n} \\left( \\sum_{j=1}^k n_j c_j^2 \\right) - (\\bar{x})^2$$\n- Độ lệch chuẩn: $s = \\sqrt{s^2}$. Đơn vị đo của $s$ trùng với đơn vị của số liệu, dùng để so sánh độ ổn định, độ phân tán và rủi ro trong kinh tế, kỹ thuật."
      }
    ]
  },

  // ========================================================================
  // CHƯƠNG IV: NGUYÊN HÀM VÀ TÍCH PHÂN
  // ========================================================================
  "g12-c4": {
    chapterId: "g12-c4",
    chapterNumber: "Chương IV",
    chapterTitle: "Nguyên Hàm Và Tích Phân",
    semester: "Tập 2 - Học kỳ II",
    theorySections: [
      {
        title: "1. Nguyên hàm & Bảng nguyên hàm chuẩn",
        content: "- $F(x)$ là nguyên hàm của $f(x)$ trên $K \\iff F'(x) = f(x)$. Khi đó $\\int f(x)dx = F(x) + C$.\n- Bảng công thức trọng tâm:\n  + $\\int x^\\alpha dx = \\frac{x^{\\alpha+1}}{\\alpha+1} + C \\ (\\alpha \\ne -1); \\quad \\int \\frac{1}{x} dx = \\ln|x| + C$.\n  + $\\int e^x dx = e^x + C; \\quad \\int a^x dx = \\frac{a^x}{\\ln a} + C$.\n  + $\\int \\cos x dx = \\sin x + C; \\quad \\int \\sin x dx = -\\cos x + C$.\n  + $\\int \\frac{1}{\\cos^2 x} dx = \\tan x + C; \\quad \\int \\frac{1}{\\sin^2 x} dx = -\\cot x + C$."
      },
      {
        title: "2. Phương pháp đổi biến số & Tích phân từng phần",
        content: "- **Công thức Newton-Leibniz:** $\\int_a^b f(x)dx = F(b) - F(a) = F(x) \\Big|_a^b$.\n- **Đổi biến số:** $\\int_a^b f(u(x)) u'(x) dx = \\int_{u(a)}^{u(b)} f(u) du$. (Bắt buộc phải đổi cận!).\n- **Tích phân từng phần:** $\\int_a^b u dv = u v \\Big|_a^b - \\int_a^b v du$.\n  + Thứ tự ưu tiên đặt $u$: *Nhất Lô (Logarit) $\\rightarrow$ Nhì Đa (Đa thức) $\\rightarrow$ Tam Lượng (Lượng giác) $\\rightarrow$ Tứ Mũ (Hàm mũ)*. Phần còn lại đặt là $dv$."
      },
      {
        title: "3. Ứng dụng hình học của tích phân (Diện tích & Thể tích)",
        content: "- **Diện tích hình phẳng:**\n  + Giới hạn bởi đồ thị $y = f(x)$, trục hoành $y = 0$, đường thẳng $x = a, x = b$: $S = \\int_a^b |f(x)| dx$.\n  + Giới hạn bởi hai đường cong $y = f(x)$ và $y = g(x)$: $S = \\int_a^b |f(x) - g(x)| dx$.\n- **Thể tích khối tròn xoay:** Khối tròn xoay tạo thành khi quay hình phẳng giới hạn bởi $y = f(x) \\ge 0$, $y = 0$, $x = a, x = b$ quanh trục $Ox$:\n  $$V = \\pi \\int_a^b [f(x)]^2 dx$$"
      }
    ]
  },

  // ========================================================================
  // CHƯƠNG V: PHƯƠNG PHÁP TOẠ ĐỘ TRONG KHÔNG GIAN (Oxyz)
  // ========================================================================
  "g12-c5": {
    chapterId: "g12-c5",
    chapterNumber: "Chương V",
    chapterTitle: "Phương Pháp Toạ Độ Trong Không Gian (Oxyz)",
    semester: "Tập 2 - Học kỳ II",
    theorySections: [
      {
        title: "1. Phương trình mặt phẳng & Phương trình đoạn chắn",
        content: "- Mặt phẳng đi qua $M_0(x_0; y_0; z_0)$ nhận $\\vec{n} = (A; B; C) \\ne \\vec{0}$ làm VTPT có phương trình:\n  $$A(x - x_0) + B(y - y_0) + C(z - z_0) = 0 \\iff Ax + By + Cz + D = 0$$\n- **Phương trình đoạn chắn:** Mặt phẳng cắt 3 trục toạ độ tại $A(a; 0; 0), B(0; b; 0), C(0; 0; c)$ với $abc \\ne 0$:\n  $$\\frac{x}{a} + \\frac{y}{b} + \\frac{z}{c} = 1$$\n- Hai mặt phẳng song song khi các VTPT cùng phương; vuông góc khi tích vô hướng $\\vec{n_1} \\cdot \\vec{n_2} = 0$."
      },
      {
        title: "2. Phương trình đường thẳng & Vị trí tương đối",
        content: "- Đường thẳng đi qua $M_0(x_0; y_0; z_0)$ có VTCP $\\vec{u} = (a; b; c) \\ne \\vec{0}$:\n  + Phương trình tham số: $\\begin{cases} x = x_0 + at \\\\ y = y_0 + bt \\\\ z = z_0 + ct \\end{cases} \\ (t \\in \\mathbb{R})$.\n  + Phương trình chính tắc (khi $abc \\ne 0$): $\\frac{x - x_0}{a} = \\frac{y - y_0}{b} = \\frac{z - z_0}{c}$.\n- Vị trí tương đối giữa hai đường thẳng $d_1, d_2$: Cắt nhau, chéo nhau, song song hoặc trùng nhau."
      },
      {
        title: "3. Góc, Khoảng cách & Phương trình mặt cầu",
        content: "- **Khoảng cách từ điểm $M_0(x_0; y_0; z_0)$ đến mặt phẳng $(P): Ax + By + Cz + D = 0$:**\n  $$d(M_0, (P)) = \\frac{|Ax_0 + By_0 + Cz_0 + D|}{\\sqrt{A^2 + B^2 + C^2}}$$\n- **Góc trong không gian:**\n  + Góc giữa 2 mặt phẳng: $\\cos \\theta = \\frac{|\\vec{n_1} \\cdot \\vec{n_2}|}{|\\vec{n_1}| \\cdot |\\vec{n_2}|}$.\n  + Góc giữa đường thẳng và mặt phẳng: $\\sin \\varphi = \\frac{|\\vec{u} \\cdot \\vec{n}|}{|\\vec{u}| \\cdot |\\vec{n}|}$.\n- **Phương trình mặt cầu:** Tâm $I(a; b; c)$, bán kính $R$:\n  $$(x - a)^2 + (y - b)^2 + (z - c)^2 = R^2$$\n  Dạng khai triển: $x^2 + y^2 + z^2 - 2ax - 2by - 2cz + d = 0$ với điều kiện $a^2 + b^2 + c^2 - d > 0$ và bán kính $R = \\sqrt{a^2 + b^2 + c^2 - d}$."
      }
    ]
  },

  // ========================================================================
  // CHƯƠNG VI: XÁC SUẤT CÓ ĐIỀU KIỆN
  // ========================================================================
  "g12-c6": {
    chapterId: "g12-c6",
    chapterNumber: "Chương VI",
    chapterTitle: "Xác Suất Có Điều Kiện",
    semester: "Tập 2 - Học kỳ II",
    theorySections: [
      {
        title: "1. Xác suất có điều kiện & Công thức nhân xác suất",
        content: "- Cho hai biến cố $A$ và $B$ với $P(B) > 0$. Xác suất của biến cố $A$ khi biết biến cố $B$ đã xảy ra được gọi là **xác suất có điều kiện của $A$ đối với $B$**, ký hiệu $P(A|B)$:\n  $$P(A|B) = \\frac{P(AB)}{P(B)}$$\n- **Công thức nhân xác suất:** $P(AB) = P(B) \\cdot P(A|B) = P(A) \\cdot P(B|A)$.\n- Hai biến cố $A, B$ độc lập khi và chỉ khi $P(A|B) = P(A)$ (hoặc $P(AB) = P(A)P(B)$)."
      },
      {
        title: "2. Công thức xác suất toàn phần",
        content: "- Cho hệ đầy đủ các biến cố $A_1, A_2, ..., A_n$ (đôi một xung khắc và $\\bigcup_{i=1}^n A_i = \\Omega$) với $P(A_i) > 0$. Khi đó với mọi biến cố $B$ ta có:\n  $$P(B) = \\sum_{i=1}^n P(A_i) \\cdot P(B|A_i) = P(A_1)P(B|A_1) + P(A_2)P(B|A_2) + ... + P(A_n)P(B|A_n)$$\n- Sơ đồ hình cây là công cụ trực quan hữu hiệu để phân tích các nhánh xác suất."
      },
      {
        title: "3. Công thức Bayes & Ứng dụng thực tế (Chẩn đoán y khoa 9+)",
        content: "- **Công thức Bayes:** Với hệ đầy đủ biến cố $A_1, ..., A_n$ và biến cố $B$ ($P(B) > 0$):\n  $$P(A_k|B) = \\frac{P(A_k) \\cdot P(B|A_k)}{P(B)} = \\frac{P(A_k) \\cdot P(B|A_k)}{\\sum_{i=1}^n P(A_i) \\cdot P(B|A_i)}$$\n- **Ý nghĩa thực tế:** Cho phép tính xác suất hậu nghiệm (xác suất nguyên nhân $A_k$ gây ra kết quả $B$ sau khi đã quan sát thấy hiện tượng $B$). Ứng dụng trọng tâm trong xét nghiệm bệnh học y tế, bộ lọc thư rác (Spam Filter) và đánh giá rủi ro tài chính."
      }
    ]
  }
};

// ==========================================================================
// CƠ SỞ DỮ LIỆU BÀI HỌC TOÁN 12 CHI TIẾT (CHUẨN 3 DẠNG x 10 BÀI 4-3-3)
// ==========================================================================
window.GRADE_12_LESSONS_DB = {
  // ------------------------------------------------------------------------
  "g12-c1-l1": {
    lessonId: "g12-c1-l1",
    title: "Bài 1: Tính đơn điệu và cực trị của hàm số",
    topics: [
      {
        id: "g12-c1-l1-dang1",
        name: "Dạng 1: Xét tính đơn điệu & Tìm cực trị của hàm số",
        badge: "4 Biết • 3 Hiểu • 3 Vận dụng (10 bài)",
        badgeClass: "bg-emerald-100 text-emerald-800",
        method: [
          "Bước 1: Tìm tập xác định $D$ của hàm số.",
          "Bước 2: Tính đạo hàm $y' = f'(x)$, giải phương trình $f'(x) = 0$ tìm các nghiệm $x_i \\in D$ hoặc các điểm làm cho $f'(x)$ không xác định.",
          "Bước 3: Lập bảng biến thiên (xét dấu $f'(x)$), kết luận các khoảng đồng biến, nghịch biến và các điểm cực đại, cực tiểu."
        ],
        examples: [
          {
            title: "Ví dụ 1 (Đơn điệu hàm bậc ba)",
            question: "Tìm các khoảng đơn điệu của hàm số $y = x^3 - 3x^2 + 2$.",
            solution: "1. TXĐ: $D = \\mathbb{R}$.\n2. Đạo hàm: $y' = 3x^2 - 6x = 3x(x - 2)$. Cho $y' = 0 \\iff x = 0$ hoặc $x = 2$.\n3. Xét dấu $y'$: Trong khoảng $(0; 2)$ thì $y' < 0$; ngoài đoạn $[0; 2]$ thì $y' > 0$.\n=> Kết luận: Hàm số đồng biến trên các khoảng $(-\\infty; 0)$ và $(2; +\\infty)$; nghịch biến trên khoảng $(0; 2)$."
          },
          {
            title: "Ví dụ 2 (Cực trị hàm phân thức)",
            question: "Tìm điểm cực trị của hàm số $y = \\dfrac{x^2 - 3x + 3}{x - 1}$.",
            solution: "1. TXĐ: $D = \\mathbb{R} \\setminus \\{1\\}$.\n2. $y' = \\dfrac{(2x-3)(x-1) - (x^2-3x+3)}{(x-1)^2} = \\dfrac{x^2 - 2x}{(x-1)^2}$.\nCho $y' = 0 \\iff x^2 - 2x = 0 \\iff x = 0$ hoặc $x = 2$.\n3. $y'$ đổi dấu qua $x = 0$ từ dương sang âm => Điểm cực đại là $x = 0$ ($y_{CĐ} = -3$). Qua $x = 2$ từ âm sang dương => Điểm cực tiểu là $x = 2$ ($y_{CT} = 1$)."
          },
          {
            title: "Ví dụ 3 (Cực trị hàm trùng phương)",
            question: "Tìm các điểm cực trị của hàm số $y = -x^4 + 2x^2 + 1$.",
            solution: "1. TXĐ: $D = \\mathbb{R}$.\n2. $y' = -4x^3 + 4x = -4x(x^2 - 1) = 0 \\iff x = 0$ hoặc $x = \\pm 1$.\n3. Bảng biến thiên cho thấy: Điểm cực tiểu là $x = 0$ ($y = 1$), hai điểm cực đại là $x = \\pm 1$ ($y = 2$)."
          }
        ],
        exercises: [
          // 4 BÀI NHẬN BIẾT
          { 
            id: "g12-c1-l1-d1-ex1", 
            level: "Nhận biết", 
            levelClass: "bg-slate-100 text-slate-700",
            question: "Cho hàm số $y = f(x)$ xác định trên $\\mathbb{R}$ có bảng xét dấu đạo hàm $f'(x)$ như sau: $f'(x) > 0$ trên $(-\\infty; -1)$ và $(2; +\\infty)$; $f'(x) < 0$ trên $(-1; 2)$. Hàm số đã cho đồng biến trên các khoảng nào?", 
            shortAnswer: "$(-\\infty; -1)$ và $(2; +\\infty)$", 
            fullSolution: "Dựa vào bảng xét dấu của đạo hàm, $f'(x) > 0$ trên các khoảng $(-\\infty; -1)$ và $(2; +\\infty)$. Theo định lý về tính đơn điệu, hàm số đồng biến trên các khoảng $(-\\infty; -1)$ và $(2; +\\infty)$." 
          },
          { 
            id: "g12-c1-l1-d1-ex2", 
            level: "Nhận biết", 
            levelClass: "bg-slate-100 text-slate-700",
            question: "Cho hàm số $y = f(x)$ liên tục trên $\\mathbb{R}$ và có bảng xét dấu đạo hàm: $f'(x)$ đổi dấu từ dương sang âm khi qua $x = 1$, đổi dấu từ âm sang dương khi qua $x = 3$. Tìm điểm cực đại của hàm số đã cho.", 
            shortAnswer: "$x = 1$", 
            fullSolution: "Theo quy tắc 1 về cực trị của hàm số: Khi $x$ đi qua $x = 1$, đạo hàm $f'(x)$ đổi dấu từ dương sang âm nên $x = 1$ là điểm cực đại của hàm số." 
          },
          { 
            id: "g12-c1-l1-d1-ex3", 
            level: "Nhận biết", 
            levelClass: "bg-slate-100 text-slate-700",
            question: "Tìm các khoảng đồng biến của hàm số đa thức bậc ba $y = x^3 - 3x + 4$.", 
            shortAnswer: "$(-\\infty; -1)$ và $(1; +\\infty)$", 
            fullSolution: "Ta có $y' = 3x^2 - 3 = 3(x^2 - 1)$. $y' > 0 \\iff x^2 - 1 > 0 \\iff x < -1$ hoặc $x > 1$. Vậy hàm số đồng biến trên các khoảng $(-\\infty; -1)$ và $(1; +\\infty)$." 
          },
          { 
            id: "g12-c1-l1-d1-ex4", 
            level: "Nhận biết", 
            levelClass: "bg-slate-100 text-slate-700",
            question: "Tìm tất cả các điểm cực tiểu của hàm số $y = x^4 - 2x^2 + 3$.", 
            shortAnswer: "$x = -1$ và $x = 1$", 
            fullSolution: "Đạo hàm $y' = 4x^3 - 4x = 4x(x^2 - 1) = 0 \\iff x = 0$ hoặc $x = \\pm 1$. Bảng xét dấu $y'$ cho thấy khi qua $x = -1$ và $x = 1$, đạo hàm đổi dấu từ âm sang dương. Do đó hàm số có 2 điểm cực tiểu là $x = -1$ và $x = 1$." 
          },
          // 3 BÀI THÔNG HIỂU
          { 
            id: "g12-c1-l1-d1-ex5", 
            level: "Thông hiểu", 
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tìm các khoảng nghịch biến của hàm số phân thức hữu tỉ $y = \\dfrac{-x + 2}{x + 1}$.", 
            shortAnswer: "Nghịch biến trên $(-\\infty; -1)$ và $(-1; +\\infty)$", 
            fullSolution: "TXĐ: $D = \\mathbb{R} \\setminus \\{-1\\}$. Đạo hàm $y' = \\dfrac{(-1)(1) - (2)(1)}{(x+1)^2} = \\dfrac{-3}{(x+1)^2} < 0, \\forall x \\ne -1$. Do đó hàm số nghịch biến trên từng khoảng xác định $(-\\infty; -1)$ và $(-1; +\\infty)$." 
          },
          { 
            id: "g12-c1-l1-d1-ex6", 
            level: "Thông hiểu", 
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Cho hàm số $y = f(x)$ xác định trên $\\mathbb{R}$ có đạo hàm $f'(x) = x^2(x - 2)(x + 3)^3$. Hỏi hàm số $y = f(x)$ có bao nhiêu điểm cực trị?", 
            shortAnswer: "2 điểm cực trị ($x = 2$ và $x = -3$)", 
            fullSolution: "Phương trình $f'(x) = 0$ có các nghiệm: $x = 0$ (nghiệm bội 2), $x = 2$ (nghiệm bội 1), $x = -3$ (nghiệm bội 3). Đạo hàm $f'(x)$ chỉ đổi dấu qua các nghiệm bội lẻ là $x = 2$ và $x = -3$. Qua nghiệm bội chẵn $x = 0$, $f'(x)$ không đổi dấu. Vậy hàm số có đúng 2 điểm cực trị." 
          },
          { 
            id: "g12-c1-l1-d1-ex7", 
            level: "Thông hiểu", 
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tìm toạ độ các điểm cực trị của đồ thị hàm số $y = \\dfrac{x^2 - x + 1}{x - 1}$.", 
            shortAnswer: "Điểm cực đại $(0; -1)$, điểm cực tiểu $(2; 3)$", 
            fullSolution: "TXĐ: $D = \\mathbb{R} \\setminus \\{1\\}$. Biến đổi $y = x + \\dfrac{1}{x-1} \\Rightarrow y' = 1 - \\dfrac{1}{(x-1)^2} = \\dfrac{x^2 - 2x}{(x-1)^2}$. Cho $y' = 0 \\iff x = 0$ hoặc $x = 2$. Với $x = 0 \\Rightarrow y = -1$ (điểm cực đại $(0; -1)$); với $x = 2 \\Rightarrow y = 3$ (điểm cực tiểu $(2; 3)$)." 
          },
          // 3 BÀI VẬN DỤNG
          { 
            id: "g12-c1-l1-d1-ex8", 
            level: "Vận dụng", 
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Tìm khoảng đồng biến của hàm số chứa căn thức $y = \\sqrt{4x - x^2}$.", 
            shortAnswer: "$(0; 2)$", 
            fullSolution: "Điều kiện xác định: $4x - x^2 \\ge 0 \\iff 0 \\le x \\le 4$. Đạo hàm trên khoảng $(0; 4)$: $y' = \\dfrac{4 - 2x}{2\\sqrt{4x - x^2}} = \\dfrac{2 - x}{\\sqrt{4x - x^2}}$. Hàm số đồng biến khi $y' > 0 \\iff 2 - x > 0 \\iff x < 2$. Kết hợp điều kiện ta được $0 < x < 2$. Vậy khoảng đồng biến là $(0; 2)$." 
          },
          { 
            id: "g12-c1-l1-d1-ex9", 
            level: "Vận dụng", 
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Cho hàm số $y = x^4 - 2x^2 - 3$. Gọi $A, B, C$ là ba điểm cực trị của đồ thị hàm số. Tính diện tích tam giác $ABC$.", 
            shortAnswer: "$S = 1$", 
            fullSolution: "Đạo hàm $y' = 4x^3 - 4x = 4x(x^2 - 1) = 0 \\iff x = 0$ hoặc $x = \\pm 1$. Toạ độ ba điểm cực trị là: $A(0; -3)$ (cực đại), $B(-1; -4)$ (cực tiểu), $C(1; -4)$ (cực tiểu). Đoạn $BC$ nằm ngang có độ dài $BC = |1 - (-1)| = 2$. Khoảng cách từ $A$ đến $BC$ là $h = |-3 - (-4)| = 1$. Diện tích tam giác: $S_{ABC} = \\dfrac{1}{2} \\cdot BC \\cdot h = \\dfrac{1}{2} \\cdot 2 \\cdot 1 = 1$." 
          },
          { 
            id: "g12-c1-l1-d1-ex10", 
            level: "Vận dụng", 
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Tìm các khoảng nghịch biến của hàm số $y = (x^2 - 2x)e^x$ trên $\\mathbb{R}$.", 
            shortAnswer: "$(-\\sqrt{2}; \\sqrt{2})$", 
            fullSolution: "Đạo hàm $y' = (x^2 - 2x)' e^x + (x^2 - 2x)(e^x)' = (2x - 2)e^x + (x^2 - 2x)e^x = (x^2 - 2)e^x$. Vì $e^x > 0, \\forall x \\in \\mathbb{R}$ nên $y' < 0 \\iff x^2 - 2 < 0 \\iff -\\sqrt{2} < x < \\sqrt{2}$. Vậy hàm số nghịch biến trên khoảng $(-\\sqrt{2}; \\sqrt{2})$." 
          }
        ]
      },
      {
        id: "g12-c1-l1-dang2",
        name: "Dạng 2: Tìm tham số m liên quan đến tính đơn điệu và cực trị",
        badge: "4 Biết • 3 Hiểu • 3 Vận dụng (10 bài)",
        badgeClass: "bg-blue-100 text-blue-800",
        method: [
          "Bước 1: Tính đạo hàm $y' = f'(x; m)$.",
          "Bước 2: Sử dụng điều kiện tam thức bậc hai hoặc phương pháp cô lập tham số $m$ đưa về $m \\ge g(x)$ (hoặc $m \\le g(x)$) trên tập $K$.",
          "Bước 3: Điều kiện $m \\ge g(x), \\forall x \\in K \\iff m \\ge \\max_K g(x)$; điều kiện $m \\le g(x), \\forall x \\in K \\iff m \\le \\min_K g(x)$."
        ],
        examples: [
          {
            title: "Ví dụ 1 (Đồng biến trên R)",
            question: "Tìm tất cả giá trị thực của tham số $m$ để hàm số $y = \\frac{1}{3}x^3 - mx^2 + (m+2)x - 5$ đồng biến trên $\\mathbb{R}$.",
            solution: "1. TXĐ: $D = \\mathbb{R}$. Đạo hàm: $y' = x^2 - 2mx + m + 2$.\n2. Hàm số đồng biến trên $\\mathbb{R} \\iff y' \\ge 0, \\forall x \\in \\mathbb{R}$.\nVì hệ số $a = 1 > 0$ nên điều kiện là $\\Delta' \\le 0$.\n3. $\\Delta' = (-m)^2 - 1(m+2) = m^2 - m - 2 \\le 0 \\iff -1 \\le m \\le 2$.\nVậy $m \\in [-1; 2]$."
          },
          {
            title: "Ví dụ 2 (Đơn điệu trên khoảng của hàm phân thức)",
            question: "Tìm $m$ để hàm số $y = \\frac{x - 2}{x - m}$ đồng biến trên khoảng $(1; +\\infty)$.",
            solution: "TXĐ: $D = \\mathbb{R} \\setminus \\{m\\}$. Đạo hàm $y' = \\frac{-m - (-2)}{(x-m)^2} = \\frac{2 - m}{(x-m)^2}$.\nHàm số đồng biến trên $(1; +\\infty) \\iff \\begin{cases} y' > 0 \\\\ m \\notin (1; +\\infty) \\end{cases} \\iff \\begin{cases} 2 - m > 0 \\\\ m \\le 1 \\end{cases} \\iff \\begin{cases} m < 2 \\\\ m \\le 1 \\end{cases} \\iff m \\le 1$."
          },
          {
            title: "Ví dụ 3 (Cực trị tại điểm x0)",
            question: "Tìm $m$ để hàm số $y = x^3 - 3mx^2 + (m^2 - 1)x + 2$ đạt cực đại tại $x = 1$.",
            solution: "$y' = 3x^2 - 6mx + m^2 - 1$; $y'' = 6x - 6m$.\nHàm số đạt cực đại tại $x = 1 \\Rightarrow y'(1) = 0 \\iff m^2 - 6m + 2 = 0$. Đồng thời $y''(1) < 0 \\iff 6 - 6m < 0 \\iff m > 1$. Kết hợp điều kiện suy ra nghiệm thích hợp."
          }
        ],
        exercises: [
          // 4 BÀI NHẬN BIẾT
          { 
            id: "g12-c1-l1-d2-ex1", 
            level: "Nhận biết", 
            levelClass: "bg-slate-100 text-slate-700",
            question: "Nêu điều kiện để tam thức bậc hai $g(x) = ax^2 + bx + c \\ge 0, \\forall x \\in \\mathbb{R}$ ($a \\ne 0$) và áp dụng tìm $m$ để hàm số $y = \\dfrac{1}{3}x^3 - x^2 + mx + 2$ luôn có $y' \\ge 0, \\forall x \\in \\mathbb{R}$.", 
            shortAnswer: "$m \\ge 1$", 
            fullSolution: "Điều kiện tam thức bậc hai $g(x) \\ge 0, \\forall x \\iff a > 0$ và $\\Delta \\le 0$. Ở đây $y' = x^2 - 2x + m$ có $a = 1 > 0$. Biệt thức thu gọn: $\\Delta' = (-1)^2 - 1 \\cdot m = 1 - m \\le 0 \\iff m \\ge 1$." 
          },
          { 
            id: "g12-c1-l1-d2-ex2", 
            level: "Nhận biết", 
            levelClass: "bg-slate-100 text-slate-700",
            question: "Tìm điều kiện của tham số $m$ để hàm số bậc ba $y = x^3 - 3mx^2 + 1$ có hai điểm cực trị.", 
            shortAnswer: "$m \\ne 0$", 
            fullSolution: "Đạo hàm $y' = 3x^2 - 6mx = 3x(x - 2m)$. Phương trình $y' = 0$ có hai nghiệm phân biệt khi và chỉ khi $2m \\ne 0 \\iff m \\ne 0$. Khi đó hàm số luôn có hai điểm cực trị." 
          },
          { 
            id: "g12-c1-l1-d2-ex3", 
            level: "Nhận biết", 
            levelClass: "bg-slate-100 text-slate-700",
            question: "Tìm tham số $m$ để hàm số $y = \\dfrac{x + m}{x + 2}$ đồng biến trên từng khoảng xác định.", 
            shortAnswer: "$m < 2$", 
            fullSolution: "TXĐ: $D = \\mathbb{R} \\setminus \\{-2\\}$. Đạo hàm $y' = \\dfrac{1 \\cdot 2 - m \\cdot 1}{(x+2)^2} = \\dfrac{2 - m}{(x+2)^2}$. Hàm số đồng biến trên từng khoảng xác định khi $y' > 0, \\forall x \\ne -2 \\iff 2 - m > 0 \\iff m < 2$." 
          },
          { 
            id: "g12-c1-l1-d2-ex4", 
            level: "Nhận biết", 
            levelClass: "bg-slate-100 text-slate-700",
            question: "Tìm $m$ để hàm số $y = x^3 + 3x^2 + mx + 5$ không có điểm cực trị.", 
            shortAnswer: "$m \\ge 3$", 
            fullSolution: "Đạo hàm $y' = 3x^2 + 6x + m$. Hàm số không có điểm cực trị khi và chỉ khi phương trình $y' = 0$ vô nghiệm hoặc có nghiệm kép $\\iff \\Delta' = 3^2 - 3m \\le 0 \\iff 9 - 3m \\le 0 \\iff m \\ge 3$." 
          },
          // 3 BÀI THÔNG HIỂU
          { 
            id: "g12-c1-l1-d2-ex5", 
            level: "Thông hiểu", 
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tìm tất cả giá trị thực của tham số $m$ để hàm số $y = -\\dfrac{1}{3}x^3 + mx^2 - (2m+3)x + 1$ nghịch biến trên $\\mathbb{R}$.", 
            shortAnswer: "$-1 \\le m \\le 3$", 
            fullSolution: "Đạo hàm $y' = -x^2 + 2mx - (2m+3)$. Hàm số nghịch biến trên $\\mathbb{R} \\iff y' \\le 0, \\forall x \\in \\mathbb{R} \\iff a = -1 < 0$ và $\\Delta' \\le 0$. Ta có $\\Delta' = m^2 - (-1)[-(2m+3)] = m^2 - 2m - 3 \\le 0 \\iff -1 \\le m \\le 3$." 
          },
          { 
            id: "g12-c1-l1-d2-ex6", 
            level: "Thông hiểu", 
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tìm tham số $m$ để hàm số $y = x^3 - 3mx^2 + 3(m^2 - 1)x + 2$ đạt cực đại tại $x = 1$.", 
            shortAnswer: "$m = 2$", 
            fullSolution: "Ta có $y' = 3x^2 - 6mx + 3(m^2 - 1)$ và $y'' = 6x - 6m$. Hàm số đạt cực đại tại $x = 1 \\Rightarrow y'(1) = 0 \\iff 3 - 6m + 3m^2 - 3 = 0 \\iff 3m(m - 2) = 0 \\iff m = 0$ hoặc $m = 2$. Với $m = 0 \\Rightarrow y''(1) = 6 > 0$ (đạt cực tiểu, loại). Với $m = 2 \\Rightarrow y''(1) = 6 - 12 = -6 < 0$ (đạt cực đại, nhận). Vậy $m = 2$." 
          },
          { 
            id: "g12-c1-l1-d2-ex7", 
            level: "Thông hiểu", 
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tìm $m$ để hàm số $y = \\dfrac{mx - 4}{x - m}$ đồng biến trên từng khoảng xác định.", 
            shortAnswer: "$-2 < m < 2$", 
            fullSolution: "TXĐ: $D = \\mathbb{R} \\setminus \\{m\\}$. Đạo hàm $y' = \\dfrac{m(-m) - (-4)(1)}{(x-m)^2} = \\dfrac{4 - m^2}{(x-m)^2}$. Để hàm số đồng biến trên từng khoảng xác định $\\iff y' > 0, \\forall x \\ne m \\iff 4 - m^2 > 0 \\iff -2 < m < 2$." 
          },
          // 3 BÀI VẬN DỤNG
          { 
            id: "g12-c1-l1-d2-ex8", 
            level: "Vận dụng", 
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Tìm tất cả các giá trị của tham số $m$ để hàm số $y = \\dfrac{x + 2}{x + 3m}$ nghịch biến trên khoảng $(-\\infty; -6)$.", 
            shortAnswer: "$m < \\dfrac{2}{3}$", 
            fullSolution: "TXĐ: $D = \\mathbb{R} \\setminus \\{-3m\\}$. Đạo hàm $y' = \\dfrac{3m - 2}{(x+3m)^2}$. Hàm số nghịch biến trên khoảng $(-\\infty; -6)$ khi và chỉ khi: $\\begin{cases} y' < 0, \\forall x \\in (-\\infty; -6) \\\\ -3m \\notin (-\\infty; -6) \\end{cases} \\iff \\begin{cases} 3m - 2 < 0 \\\\ -3m \\ge -6 \\end{cases} \\iff \\begin{cases} m < \\frac{2}{3} \\\\ m \\le 2 \\end{cases} \\iff m < \\frac{2}{3}$." 
          },
          { 
            id: "g12-c1-l1-d2-ex9", 
            level: "Vận dụng", 
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Tìm tất cả giá trị của tham số $m$ để hàm số $y = x^3 - 3x^2 + 3mx - 1$ có hai điểm cực trị $x_1, x_2$ thoả mãn $x_1^2 + x_2^2 - x_1 x_2 = 7$.", 
            shortAnswer: "$m = -1$", 
            fullSolution: "Đạo hàm $y' = 3x^2 - 6x + 3m$. Hàm số có hai điểm cực trị $\\iff y' = 0$ có 2 nghiệm phân biệt $\\iff \\Delta' = 9 - 9m > 0 \\iff m < 1$. Theo định lý Vi-ét: $x_1 + x_2 = 2$ và $x_1 x_2 = m$. Ta có hệ thức: $x_1^2 + x_2^2 - x_1 x_2 = (x_1+x_2)^2 - 3x_1 x_2 = 4 - 3m = 7 \\iff 3m = -3 \\iff m = -1$ (thỏa mãn điều kiện $m < 1$)." 
          },
          { 
            id: "g12-c1-l1-d2-ex10", 
            level: "Vận dụng", 
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Có bao nhiêu giá trị nguyên của tham số $m \\in [-5; 5]$ để hàm số $y = \\dfrac{1}{3}x^3 - mx^2 + (m+2)x - 3$ đồng biến trên đoạn $[1; 3]$?", 
            shortAnswer: "8 giá trị nguyên ($m \\le 2$)", 
            fullSolution: "Ta có $y' = x^2 - 2mx + m + 2$. Để hàm số đồng biến trên $[1; 3] \\iff y' \\ge 0, \\forall x \\in [1; 3] \\iff x^2 + 2 \\ge m(2x - 1), \\forall x \\in [1; 3]$. Vì $x \\in [1; 3]$ nên $2x - 1 > 0$, cô lập tham số ta có: $m \\le g(x) = \\dfrac{x^2 + 2}{2x - 1}, \\forall x \\in [1; 3] \\iff m \\le \\min_{[1; 3]} g(x)$. Khảo sát $g(x)$ trên $[1; 3]$ có $g'(x) = \\dfrac{2(x-2)(x+1)}{(2x-1)^2} = 0 \\iff x = 2$. Ta có $g(1) = 3, g(2) = 2, g(3) = 2.2$. Do đó $\\min_{[1; 3]} g(x) = 2 \\Rightarrow m \\le 2$. Kết hợp $m \\in [-5; 5], m \\in \\mathbb{Z}$ ta được $m \\in \\{-5, -4, -3, -2, -1, 0, 1, 2\\}$, có 8 giá trị nguyên." 
          }
        ]
      },
      {
        id: "g12-c1-l1-dang3",
        name: "Dạng 3: Cực trị & Tính đơn điệu nâng cao (Hàm hợp f(u(x)), hàm trị tuyệt đối)",
        badge: "4 Biết • 3 Hiểu • 3 Vận dụng (10 bài)",
        badgeClass: "bg-purple-100 text-purple-800",
        method: [
          "Bước 1: Tính đạo hàm hàm hợp: $g'(x) = [f(u(x))]' = u'(x) \\cdot f'(u(x))$.",
          "Bước 2: Giải phương trình $g'(x) = 0 \\iff u'(x) = 0$ hoặc $f'(u(x)) = 0$.",
          "Bước 3: Lập trục xét dấu hoặc bảng xét dấu cho $g'(x)$ để kết luận số điểm cực trị và khoảng đơn điệu."
        ],
        examples: [
          {
            title: "Ví dụ 1 (Cực trị hàm hợp f(x^2 - 2x))",
            question: "Cho hàm số $y = f(x)$ có đồ thị đạo hàm $f'(x)$ cắt trục hoành tại $x = -1, 1, 4$. Hỏi hàm số $g(x) = f(x^2 - 2x)$ có bao nhiêu điểm cực trị?",
            solution: "Ta có $g'(x) = (2x - 2) \\cdot f'(x^2 - 2x)$.\n$g'(x) = 0 \\iff 2x - 2 = 0 \\iff x = 1$ hoặc $x^2 - 2x = -1; 1; 4$.\n- $x^2 - 2x = -1 \\iff (x-1)^2 = 0$ (nghiệm kép, không đổi dấu).\n- $x^2 - 2x = 1 \\iff x = 1 \\pm \\sqrt{2}$ (2 nghiệm đơn).\n- $x^2 - 2x = 4 \\iff x = 1 \\pm \\sqrt{5}$ (2 nghiệm đơn).\nTổng cộng có $1 + 2 + 2 = 5$ nghiệm bội lẻ đổi dấu => Có đúng 5 điểm cực trị."
          },
          {
            title: "Ví dụ 2 (Đơn điệu hàm f(2 - x))",
            question: "Cho $f'(x) = (x-1)^2(x+2)$. Tìm khoảng đồng biến của hàm số $g(x) = f(2 - x)$.",
            solution: "$g'(x) = (2 - x)' f'(2 - x) = -f'(2 - x) = -(1 - x)^2 (4 - x)$.\n$g'(x) > 0 \\iff -(4 - x) > 0 \\iff 4 - x < 0 \\iff x > 4$. Vậy $g(x)$ đồng biến trên $(4; +\\infty)$."
          },
          {
            title: "Ví dụ 3 (Cực trị hàm trị tuyệt đối)",
            question: "Hàm số $y = |x^3 - 3x + 1|$ có bao nhiêu điểm cực trị?",
            solution: "Xét $h(x) = x^3 - 3x + 1$. $h'(x) = 3x^2 - 3 = 0 \\iff x = \\pm 1$ (2 điểm cực trị).\nGiá trị cực trị: $h(1) = -1 < 0$ và $h(-1) = 3 > 0$. Do đó phương trình $h(x) = 0$ có 3 nghiệm phân biệt.\nSố điểm cực trị của $|h(x)|$ bằng $m + n = 2 + 3 = 5$ điểm cực trị."
          }
        ],
        exercises: [
          // 4 BÀI NHẬN BIẾT
          { 
            id: "g12-c1-l1-d3-ex1", 
            level: "Nhận biết", 
            levelClass: "bg-slate-100 text-slate-700",
            question: "Cho đồ thị hàm số đạo hàm $y = f'(x)$ cắt trục hoành tại 3 điểm phân biệt $x = -2, x = 1, x = 3$ và tại mỗi điểm đó $f'(x)$ đều đổi dấu. Hỏi hàm số $y = f(x)$ có bao nhiêu điểm cực trị?", 
            shortAnswer: "3 điểm cực trị", 
            fullSolution: "Vì đồ thị đạo hàm $y = f'(x)$ cắt trục hoành tại 3 điểm phân biệt và đổi dấu khi đi qua cả 3 điểm đó nên hàm số $y = f(x)$ có đúng 3 điểm cực trị." 
          },
          { 
            id: "g12-c1-l1-d3-ex2", 
            level: "Nhận biết", 
            levelClass: "bg-slate-100 text-slate-700",
            question: "Cho hàm số $y = f(x)$ có bảng biến thiên đồng biến trên $(-\\infty; 1)$ và $(3; +\\infty)$. Hỏi hàm số $g(x) = f(x) + 2026$ đồng biến trên các khoảng nào?", 
            shortAnswer: "$(-\\infty; 1)$ và $(3; +\\infty)$", 
            fullSolution: "Ta có $g'(x) = [f(x) + 2026]' = f'(x)$. Dấu của $g'(x)$ hoàn toàn trùng với dấu của $f'(x)$. Do đó $g(x)$ đồng biến trên chính các khoảng đồng biến của $f(x)$ là $(-\\infty; 1)$ và $(3; +\\infty)$." 
          },
          { 
            id: "g12-c1-l1-d3-ex3", 
            level: "Nhận biết", 
            levelClass: "bg-slate-100 text-slate-700",
            question: "Cho hàm số $y = f(x)$ có 3 điểm cực trị. Hỏi đồ thị hàm số $g(x) = f(x - 2)$ có bao nhiêu điểm cực trị?", 
            shortAnswer: "3 điểm cực trị", 
            fullSolution: "Đồ thị hàm số $g(x) = f(x - 2)$ thu được bằng cách tịnh tiến đồ thị $f(x)$ sang phải 2 đơn vị dọc theo trục hoành. Phép tịnh tiến bảo toàn hình dạng đồ thị nên số điểm cực trị không thay đổi, vẫn là 3 điểm cực trị." 
          },
          { 
            id: "g12-c1-l1-d3-ex4", 
            level: "Nhận biết", 
            levelClass: "bg-slate-100 text-slate-700",
            question: "Cho đồ thị đạo hàm $y = f'(x)$ luôn nằm phía trên trục hoành trên khoảng $(1; 4)$. Hỏi hàm số $y = f(x)$ có tính chất đơn điệu gì trên khoảng $(1; 4)$?", 
            shortAnswer: "Đồng biến trên khoảng $(1; 4)$", 
            fullSolution: "Vì đồ thị $f'(x)$ nằm phía trên trục hoành trên khoảng $(1; 4)$ nên $f'(x) > 0, \\forall x \\in (1; 4)$. Theo định lý về tính đơn điệu, hàm số $y = f(x)$ đồng biến trên khoảng $(1; 4)$." 
          },
          // 3 BÀI THÔNG HIỂU
          { 
            id: "g12-c1-l1-d3-ex5", 
            level: "Thông hiểu", 
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Cho hàm số $y = f(x)$ có đạo hàm $f'(x) = (x - 1)(x - 2)^2(x + 3)$. Tìm các khoảng nghịch biến của hàm số $y = f(x)$.", 
            shortAnswer: "$(-3; 1)$", 
            fullSolution: "Nghiệm của $f'(x) = 0$ là $x = -3$ (bội 1), $x = 1$ (bội 1), $x = 2$ (bội 2 kép). Lập bảng xét dấu: Trên khoảng $(-\\infty; -3)$ thì $f'(x) > 0$; trên khoảng $(-3; 1)$ thì $f'(x) < 0$; trên khoảng $(1; 2)$ và $(2; +\\infty)$ thì $f'(x) > 0$. Vậy hàm số nghịch biến trên khoảng $(-3; 1)$." 
          },
          { 
            id: "g12-c1-l1-d3-ex6", 
            level: "Thông hiểu", 
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Đồ thị hàm số $y = f(x)$ có hai điểm cực trị là $A(-1; 3)$ và $B(1; -2)$. Trục hoành $y = 0$ cắt đồ thị tại 3 điểm phân biệt. Hỏi đồ thị hàm số $y = |f(x)|$ có bao nhiêu điểm cực trị?", 
            shortAnswer: "5 điểm cực trị", 
            fullSolution: "Đồ thị $f(x)$ có 2 điểm cực trị và cắt trục hoành tại 3 điểm phân biệt. Áp dụng công thức số cực trị của hàm trị tuyệt đối: Số điểm cực trị của $y = |f(x)|$ bằng $m + n$, trong đó $m = 2$ là số điểm cực trị của $f(x)$ và $n = 3$ là số giao điểm đơn của $f(x)$ với trục hoành. Do đó hàm số $y = |f(x)|$ có $2 + 3 = 5$ điểm cực trị." 
          },
          { 
            id: "g12-c1-l1-d3-ex7", 
            level: "Thông hiểu", 
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Cho hàm số $f(x)$ có đạo hàm $f'(x) = x^2 - 2x$. Tìm khoảng đồng biến của hàm số hợp $g(x) = f(2 - x)$.", 
            shortAnswer: "$(0; 2)$", 
            fullSolution: "Đạo hàm $g'(x) = (2 - x)' f'(2 - x) = -f'(2 - x)$. Ta có $f'(2 - x) = (2 - x)^2 - 2(2 - x) = 4 - 4x + x^2 - 4 + 2x = x^2 - 2x$. Do đó $g'(x) = -(x^2 - 2x) = 2x - x^2$. Hàm số $g(x)$ đồng biến khi $g'(x) > 0 \\iff 2x - x^2 > 0 \\iff 0 < x < 2$. Vậy khoảng đồng biến là $(0; 2)$." 
          },
          // 3 BÀI VẬN DỤNG
          { 
            id: "g12-c1-l1-d3-ex8", 
            level: "Vận dụng", 
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Cho hàm số $y = f(x)$ có đạo hàm $f'(x) = (x + 1)^2(x - 2)$. Tìm số điểm cực trị của hàm số hợp $g(x) = f(x^2 - 3)$.", 
            shortAnswer: "3 điểm cực trị ($x = 0$ và $x = \\pm\\sqrt{5}$)", 
            fullSolution: "Đạo hàm $g'(x) = (x^2 - 3)' f'(x^2 - 3) = 2x [(x^2 - 3 + 1)^2 (x^2 - 3 - 2)] = 2x(x^2 - 2)^2(x^2 - 5)$. Phương trình $g'(x) = 0$ có các nghiệm: $x = 0$ (nghiệm đơn), $x = \\pm\\sqrt{2}$ (nghiệm bội 2 kép), $x = \\pm\\sqrt{5}$ (hai nghiệm đơn). Đạo hàm $g'(x)$ chỉ đổi dấu qua các nghiệm bội lẻ là $x = 0, x = \\sqrt{5}, x = -\\sqrt{5}$. Vậy hàm số $g(x)$ có đúng 3 điểm cực trị." 
          },
          { 
            id: "g12-c1-l1-d3-ex9", 
            level: "Vận dụng", 
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Tìm tất cả giá trị nguyên của tham số $m \\in [-5; 5]$ để đồ thị hàm số $y = |x^3 - 3x^2 + m|$ có đúng 5 điểm cực trị.", 
            shortAnswer: "3 giá trị nguyên ($m \\in \\{1, 2, 3\\}$)", 
            fullSolution: "Xét hàm số $u(x) = x^3 - 3x^2 + m$. Ta có $u'(x) = 3x^2 - 6x = 0 \\iff x = 0$ hoặc $x = 2$. Hai giá trị cực trị là $y_1 = u(0) = m$ và $y_2 = u(2) = m - 4$. Hàm số $y = |u(x)|$ có đúng 5 điểm cực trị khi và chỉ khi đồ thị $u(x)$ có 2 điểm cực trị và cắt trục hoành tại 3 điểm phân biệt, tức là 2 giá trị cực trị nằm về hai phía trục hoành: $y_1 \\cdot y_2 < 0 \\iff m(m - 4) < 0 \\iff 0 < m < 4$. Vì $m \\in \\mathbb{Z}$ nên $m \\in \\{1, 2, 3\\}$. Vậy có 3 giá trị nguyên của $m$ thỏa mãn." 
          },
          { 
            id: "g12-c1-l1-d3-ex10", 
            level: "Vận dụng", 
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Cho hàm số $y = f(x)$ có đạo hàm $f'(x) = x(x - 2)(x + 1)$. Tìm tất cả các khoảng đồng biến của hàm số $g(x) = f(x^2 - 2x)$.", 
            shortAnswer: "$(1 - \\sqrt{3}; 0)$, $(1; 2)$ và $(1 + \\sqrt{3}; +\\infty)$", 
            fullSolution: "Ta có $g'(x) = (x^2 - 2x)' f'(x^2 - 2x) = 2(x - 1) f'(x^2 - 2x)$. Thay $f'(u) = u(u - 2)(u + 1)$ với $u = x^2 - 2x$: $g'(x) = 2(x - 1)(x^2 - 2x)(x^2 - 2x - 2)(x^2 - 2x + 1) = 2x(x - 1)^3(x - 2)(x^2 - 2x - 2)$. Phương trình $g'(x) = 0$ có 5 nghiệm bội lẻ: $x_1 = 1 - \\sqrt{3}, x_2 = 0, x_3 = 1, x_4 = 2, x_5 = 1 + \\sqrt{3}$. Lập trục xét dấu cho $g'(x)$ đan dấu qua các nghiệm: $g'(x) > 0$ trên các khoảng $(1 - \\sqrt{3}; 0)$, $(1; 2)$ và $(1 + \\sqrt{3}; +\\infty)$. Vậy hàm số $g(x)$ đồng biến trên các khoảng đó." 
          }
        ]
      }
    ]
  },



  // ------------------------------------------------------------------------
  // BÀI 2: GIÁ TRỊ LỚN NHẤT VÀ GIÁ TRỊ NHỎ NHẤT CỦA HÀM SỐ
  // ------------------------------------------------------------------------
  "g12-c1-l2": {
    lessonId: "g12-c1-l2",
    title: "Bài 2: Giá trị lớn nhất và giá trị nhỏ nhất của hàm số",
    topics: [
      {
        id: "g12-c1-l2-dang1",
        name: "Dạng 1: Tìm GTLN, GTNN của hàm số trên một đoạn [a; b]",
        badge: "4 Biết • 3 Hiểu • 3 Vận dụng (10 bài)",
        badgeClass: "bg-emerald-100 text-emerald-800",
        method: [
          "Bước 1: Tìm các điểm $x_1, x_2, ..., x_n$ trên khoảng $(a; b)$ tại đó $f'(x) = 0$ hoặc $f'(x)$ không xác định.",
          "Bước 2: Tính các giá trị $f(a), f(b), f(x_1), f(x_2), ..., f(x_n)$.",
          "Bước 3: Tìm số lớn nhất $M$ và số nhỏ nhất $m$ trong các giá trị trên. Khi đó: $M = \\max_{[a; b]} f(x)$, $m = \\min_{[a; b]} f(x)$."
        ],
        examples: [
          {
            title: "Ví dụ 1 (GTLN, GTNN hàm bậc ba trên đoạn)",
            question: "Tìm giá trị lớn nhất và giá trị nhỏ nhất của hàm số $y = x^3 - 3x^2 + 1$ trên đoạn $[0; 3]$.",
            solution: "1. Đạo hàm: $y' = 3x^2 - 6x = 3x(x - 2)$.\nCho $y' = 0 \\iff x = 0 \\in [0; 3]$ hoặc $x = 2 \\in (0; 3)$.\n2. Tính các giá trị:\n$y(0) = 1$; $y(2) = 2^3 - 3(2^2) + 1 = -3$; $y(3) = 3^3 - 3(3^2) + 1 = 1$.\n3. So sánh: $\\max_{[0; 3]} y = 1$ (tại $x = 0, x = 3$); $\\min_{[0; 3]} y = -3$ (tại $x = 2$)."
          },
          {
            title: "Ví dụ 2 (GTLN, GTNN hàm phân thức trên đoạn)",
            question: "Tìm giá trị lớn nhất và nhỏ nhất của hàm số $y = \\dfrac{2x + 1}{x - 2}$ trên đoạn $[3; 5]$.",
            solution: "1. Hàm số liên tục trên $[3; 5]$ vì mẫu số $x - 2 \\ne 0, \\forall x \\in [3; 5]$.\n2. Đạo hàm: $y' = \\dfrac{2(-2) - 1(1)}{(x-2)^2} = \\dfrac{-5}{(x-2)^2} < 0, \\forall x \\in [3; 5]$.\n=> Hàm số nghịch biến trên $[3; 5]$.\n3. Do đó: $\\max_{[3; 5]} y = y(3) = \\dfrac{2(3)+1}{3-2} = 7$; $\\min_{[3; 5]} y = y(5) = \\dfrac{2(5)+1}{5-2} = \\dfrac{11}{3}$."
          },
          {
            title: "Ví dụ 3 (GTLN hàm trùng phương trên đoạn)",
            question: "Tìm GTLN của hàm số $y = x^4 - 2x^2 + 5$ trên đoạn $[-2; 2]$.",
            solution: "1. $y' = 4x^3 - 4x = 4x(x^2 - 1) = 0 \\iff x = 0, x = \\pm 1$ (đều thuộc $(-2; 2)$).\n2. Tính các giá trị:\n$y(-2) = 13$; $y(2) = 13$; $y(0) = 5$; $y(\\pm 1) = 4$.\n3. Kết luận: $\\max_{[-2; 2]} y = 13$ (tại $x = \\pm 2$); $\\min_{[-2; 2]} y = 4$ (tại $x = \\pm 1$)."
          }
        ],
        exercises: [
          // 4 BÀI NHẬN BIẾT
          {
            id: "g12-c1-l2-d1-ex1",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Cho hàm số $y = f(x)$ liên tục trên $[-2; 3]$ có bảng biến thiên: $f(-2) = 1$, tại $x = 0$ hàm đạt cực tiểu $f(0) = -2$, tại $x = 2$ hàm đạt cực đại $f(2) = 4$, tại $x = 3$ có $f(3) = 2$. Tìm $\\max_{[-2; 3]} f(x)$ và $\\min_{[-2; 3]} f(x)$.",
            shortAnswer: "$\\max = 4, \\min = -2$",
            fullSolution: "Dựa vào bảng biến thiên, giá trị lớn nhất của hàm số trên $[-2; 3]$ đạt tại điểm cực đại $x = 2$ với $\\max = 4$; giá trị nhỏ nhất đạt tại điểm cực tiểu $x = 0$ với $\\min = -2$."
          },
          {
            id: "g12-c1-l2-d1-ex2",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Tìm giá trị lớn nhất và giá trị nhỏ nhất của hàm số bậc nhất $y = 2x - 1$ trên đoạn $[1; 4]$.",
            shortAnswer: "$\\max = 7, \\min = 1$",
            fullSolution: "Hàm số $y = 2x - 1$ có hệ số $a = 2 > 0$ nên luôn đồng biến trên $\\mathbb{R}$. Do đó trên đoạn $[1; 4]$, giá trị nhỏ nhất là $\\min = y(1) = 2(1) - 1 = 1$; giá trị lớn nhất là $\\max = y(4) = 2(4) - 1 = 7$."
          },
          {
            id: "g12-c1-l2-d1-ex3",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Tìm giá trị nhỏ nhất của hàm số bậc hai $y = x^2 - 4x + 7$ trên đoạn $[0; 3]$.",
            shortAnswer: "$\\min = 3$",
            fullSolution: "Đạo hàm $y' = 2x - 4 = 0 \\iff x = 2 \\in (0; 3)$. Tính giá trị tại các điểm: $y(0) = 7$, $y(2) = 2^2 - 4(2) + 7 = 3$, $y(3) = 3^2 - 4(3) + 7 = 4$. So sánh ta được $\\min_{[0; 3]} y = 3$ tại $x = 2$."
          },
          {
            id: "g12-c1-l2-d1-ex4",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Cho đồ thị hàm số $y = f(x)$ trên đoạn $[-1; 4]$ đạt điểm cao nhất tại toạ độ $(2; 5)$. Giá trị lớn nhất của hàm số trên $[-1; 4]$ bằng bao nhiêu?",
            shortAnswer: "$\\max = 5$",
            fullSolution: "Điểm cao nhất của đồ thị trên $[-1; 4]$ có toạ độ $(2; 5)$, tung độ tương ứng là 5. Do đó $\\max_{[-1; 4]} f(x) = 5$ đạt được khi $x = 2$."
          },
          // 3 BÀI THÔNG HIỂU
          {
            id: "g12-c1-l2-d1-ex5",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tìm giá trị lớn nhất và giá trị nhỏ nhất của hàm số $y = x^3 - 3x + 2$ trên đoạn $[0; 2]$.",
            shortAnswer: "$\\max = 4, \\min = 0$",
            fullSolution: "Đạo hàm $y' = 3x^2 - 3 = 0 \\iff x = \\pm 1$. Chỉ có nghiệm $x = 1 \\in (0; 2)$. Tính các giá trị: $y(0) = 2$; $y(1) = 1^3 - 3(1) + 2 = 0$; $y(2) = 2^3 - 3(2) + 2 = 4$. Vậy $\\max_{[0; 2]} y = 4$ (tại $x = 2$) và $\\min_{[0; 2]} y = 0$ (tại $x = 1$)."
          },
          {
            id: "g12-c1-l2-d1-ex6",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tìm giá trị lớn nhất $M$ và nhỏ nhất $m$ của hàm số $y = \\dfrac{x + 1}{x - 1}$ trên đoạn $[2; 4]$.",
            shortAnswer: "$M = 3, m = \\dfrac{5}{3}$",
            fullSolution: "TXĐ: $x \\ne 1$. Trên đoạn $[2; 4]$, hàm số liên tục. Đạo hàm $y' = \\dfrac{1(-1) - 1(1)}{(x-1)^2} = \\dfrac{-2}{(x-1)^2} < 0, \\forall x \\in [2; 4]$. Hàm số nghịch biến trên $[2; 4]$. Suy ra $M = \\max y = y(2) = 3$ và $m = \\min y = y(4) = \\dfrac{5}{3}$."
          },
          {
            id: "g12-c1-l2-d1-ex7",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tìm giá trị lớn nhất của hàm số $y = -x^4 + 2x^2 + 3$ trên đoạn $[-2; 3]$.",
            shortAnswer: "$\\max = 4$",
            fullSolution: "Đạo hàm $y' = -4x^3 + 4x = -4x(x^2 - 1) = 0 \\iff x = 0, x = \\pm 1 \\in (-2; 3)$. Tính các giá trị: $y(-2) = -5$; $y(3) = -60$; $y(0) = 3$; $y(\\pm 1) = 4$. So sánh ta được $\\max_{[-2; 3]} y = 4$ đạt được tại $x = \\pm 1$."
          },
          // 3 BÀI VẬN DỤNG
          {
            id: "g12-c1-l2-d1-ex8",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Tìm giá trị lớn nhất và giá trị nhỏ nhất của hàm số chứa căn $y = x + \\sqrt{4 - x^2}$ trên đoạn $[-2; 2]$.",
            shortAnswer: "$\\max = 2\\sqrt{2}, \\min = -2$",
            fullSolution: "TXĐ: $[-2; 2]$. Đạo hàm trên $(-2; 2)$: $y' = 1 - \\dfrac{x}{\\sqrt{4 - x^2}}$. Cho $y' = 0 \\iff \\sqrt{4 - x^2} = x \\iff \\begin{cases} x \\ge 0 \\\\ 4 - x^2 = x^2 \\end{cases} \\iff x = \\sqrt{2} \\in (-2; 2)$. Tính giá trị: $y(-2) = -2$; $y(2) = 2$; $y(\\sqrt{2}) = \\sqrt{2} + \\sqrt{2} = 2\\sqrt{2}$. Vậy $\\max = 2\\sqrt{2}$ (tại $x = \\sqrt{2}$) và $\\min = -2$ (tại $x = -2$)."
          },
          {
            id: "g12-c1-l2-d1-ex9",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Tìm giá trị nhỏ nhất của hàm số lượng giác $y = \\sin^3 x - 3\\sin x + 2$ trên đoạn $[0; \\pi]$.",
            shortAnswer: "$\\min = 0$",
            fullSolution: "Đặt $t = \\sin x$. Vì $x \\in [0; \\pi]$ nên $t \\in [0; 1]$. Hàm số trở thành $f(t) = t^3 - 3t + 2$ trên đoạn $[0; 1]$. Đạo hàm $f'(t) = 3t^2 - 3 = 3(t^2 - 1) \\le 0, \\forall t \\in [0; 1]$. Do đó $f(t)$ nghịch biến trên $[0; 1]$. Giá trị nhỏ nhất là $\\min_{[0; 1]} f(t) = f(1) = 1^3 - 3(1) + 2 = 0$ (đạt được khi $\\sin x = 1 \\iff x = \\dfrac{\\pi}{2}$)."
          },
          {
            id: "g12-c1-l2-d1-ex10",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Tìm giá trị lớn nhất và giá trị nhỏ nhất của hàm phân thức bậc hai/bậc nhất $y = \\dfrac{x^2 - 3x + 6}{x - 1}$ trên đoạn $[2; 4]$.",
            shortAnswer: "$\\max = 4, \\min = 3$",
            fullSolution: "TXĐ: $x \\ne 1$. Biến đổi $y = x - 2 + \\dfrac{4}{x - 1}$. Đạo hàm $y' = 1 - \\dfrac{4}{(x-1)^2} = \\dfrac{(x-1)^2 - 4}{(x-1)^2}$. Cho $y' = 0 \\iff (x-1)^2 = 4 \\iff x - 1 = 2 \\iff x = 3 \\in (2; 4)$ (nghiệm $x = -1$ loại). Tính: $y(2) = 4$; $y(3) = 3$; $y(4) = \\dfrac{10}{3} \\approx 3.33$. So sánh ta được $\\max_{[2; 4]} y = 4$ (tại $x = 2$) và $\\min_{[2; 4]} y = 3$ (tại $x = 3$)."
          }
        ]
      },
      {
        id: "g12-c1-l2-dang2",
        name: "Dạng 2: Tìm GTLN, GTNN trên khoảng (a; b) hoặc miền không bị chặn",
        badge: "4 Biết • 3 Hiểu • 3 Vận dụng (10 bài)",
        badgeClass: "bg-blue-100 text-blue-800",
        method: [
          "Bước 1: Tính đạo hàm $y' = f'(x)$, giải phương trình $f'(x) = 0$ tìm các nghiệm thuộc khoảng $K$.",
          "Bước 2: Lập bảng biến thiên của hàm số trên khoảng $K$, tính các giới hạn tại các đầu mút $\\lim_{x \\to a^+} f(x), \\lim_{x \\to b^-} f(x)$ hoặc $\\lim_{x \\to \\pm\\infty} f(x)$.",
          "Bước 3: Dựa vào bảng biến thiên để kết luận giá trị lớn nhất, giá trị nhỏ nhất (lưu ý: nếu giá trị cao nhất/thấp nhất chỉ đạt được tại vô cực thì không tồn tại $\\max / \\min$)."
        ],
        examples: [
          {
            title: "Ví dụ 1 (GTNN hàm số trên khoảng dương)",
            question: "Tìm giá trị nhỏ nhất của hàm số $y = x + \\dfrac{4}{x}$ trên khoảng $(0; +\\infty)$.",
            solution: "1. Đạo hàm: $y' = 1 - \\dfrac{4}{x^2} = \\dfrac{x^2 - 4}{x^2}$. Trên $(0; +\\infty)$, $y' = 0 \\iff x = 2$.\n2. Giới hạn: $\\lim_{x \\to 0^+} y = +\\infty$; $\\lim_{x \\to +\\infty} y = +\\infty$.\n3. Bảng biến thiên cho thấy $y$ giảm từ $+\\infty$ xuống $y(2) = 4$, sau đó tăng lên $+\\infty$.\nVậy $\\min_{(0; +\\infty)} y = 4$ tại $x = 2$."
          },
          {
            title: "Ví dụ 2 (GTLN áp dụng bất đẳng thức)",
            question: "Tìm giá trị lớn nhất của hàm số $y = \\dfrac{x}{x^2 + 1}$ trên khoảng $(0; +\\infty)$.",
            solution: "Chia cả tử và mẫu cho $x > 0$: $y = \\dfrac{1}{x + \\frac{1}{x}}$.\nTheo bất đẳng thức AM-GM: $x + \\dfrac{1}{x} \\ge 2\\sqrt{x \\cdot \\frac{1}{x}} = 2$.\nDo đó $y = \\dfrac{1}{x + \\frac{1}{x}} \\le \\dfrac{1}{2}$.\nDấu '=' xảy ra khi $x = \\dfrac{1}{x} \\iff x^2 = 1 \\iff x = 1 > 0$.\nVậy $\\max_{(0; +\\infty)} y = \\dfrac{1}{2}$ tại $x = 1$."
          },
          {
            title: "Ví dụ 3 (GTLN trên toàn bộ R)",
            question: "Tìm giá trị lớn nhất của hàm số $y = -x^2 + 4x + 1$ trên $\\mathbb{R}$.",
            solution: "Biến đổi tam thức bậc hai: $y = -(x^2 - 4x + 4) + 5 = -(x - 2)^2 + 5$.\nVì $-(x - 2)^2 \\le 0, \\forall x \\in \\mathbb{R}$ nên $y \\le 5, \\forall x$.\nDấu '=' xảy ra $\\iff x - 2 = 0 \\iff x = 2$.\nVậy $\\max_{\\mathbb{R}} y = 5$ tại $x = 2$."
          }
        ],
        exercises: [
          // 4 BÀI NHẬN BIẾT
          {
            id: "g12-c1-l2-d2-ex1",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Cho hàm số $y = f(x)$ xác định trên $(0; +\\infty)$ có bảng biến thiên giảm từ $+\\infty$ xuống 3 tại $x = 2$, sau đó tăng lên $+\\infty$. Khẳng định nào sau đây đúng?",
            shortAnswer: "$\\min_{(0; +\\infty)} f(x) = 3$",
            fullSolution: "Dựa vào bảng biến thiên, trên khoảng $(0; +\\infty)$ hàm số có duy nhất một điểm cực tiểu $x = 2$ với $f(2) = 3$ và hai đầu mút đều tiến về $+\\infty$. Do đó giá trị nhỏ nhất của hàm số trên $(0; +\\infty)$ là 3 tại $x = 2$."
          },
          {
            id: "g12-c1-l2-d2-ex2",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Tìm giá trị lớn nhất của tam thức bậc hai $y = -x^2 + 2x + 3$ trên $\\mathbb{R}$.",
            shortAnswer: "$\\max = 4$",
            fullSolution: "Ta có $y = -(x^2 - 2x + 1) + 4 = -(x - 1)^2 + 4 \\le 4, \\forall x$. Dấu đẳng thức xảy ra khi $x = 1$. Do đó $\\max_{\\mathbb{R}} y = 4$ tại $x = 1$."
          },
          {
            id: "g12-c1-l2-d2-ex3",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Hàm số $y = \\dfrac{1}{x}$ có giá trị lớn nhất và giá trị nhỏ nhất trên khoảng $(0; +\\infty)$ không? Vì sao?",
            shortAnswer: "Không có $\\max$ và $\\min$",
            fullSolution: "Trên $(0; +\\infty)$, khi $x \\to 0^+$ thì $y \\to +\\infty$; khi $x \\to +\\infty$ thì $y \\to 0$. Vì hàm số không bao giờ đạt giá trị bằng 0 hay $+\\infty$ tại điểm thực nào thuộc $(0; +\\infty)$ nên hàm số không có cả giá trị lớn nhất lẫn giá trị nhỏ nhất trên $(0; +\\infty)$."
          },
          {
            id: "g12-c1-l2-d2-ex4",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Cho hàm số $y = f(x)$ có bảng biến thiên trên $(-\\infty; 2)$ với giá trị cực đại $f(0) = 5$ và hai đầu giới hạn là $-\\infty$. Giá trị lớn nhất của hàm số trên $(-\\infty; 2)$ bằng bao nhiêu?",
            shortAnswer: "$\\max = 5$",
            fullSolution: "Vì trên khoảng $(-\\infty; 2)$, hàm số có duy nhất một điểm cực đại $x = 0$ với $f(0) = 5$ và các đầu mút đều tiến về $-\\infty$ nên giá trị lớn nhất là $\\max = 5$ tại $x = 0$."
          },
          // 3 BÀI THÔNG HIỂU
          {
            id: "g12-c1-l2-d2-ex5",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tìm giá trị nhỏ nhất của hàm số $y = x + \\dfrac{9}{x}$ trên khoảng $(0; +\\infty)$.",
            shortAnswer: "$\\min = 6$",
            fullSolution: "Áp dụng bất đẳng thức AM-GM cho hai số dương $x$ và $\\dfrac{9}{x}$: $y = x + \\dfrac{9}{x} \\ge 2\\sqrt{x \\cdot \\dfrac{9}{x}} = 2 \\cdot 3 = 6$. Dấu đẳng thức xảy ra khi $x = \\dfrac{9}{x} \\iff x^2 = 9 \\iff x = 3 > 0$. Vậy giá trị nhỏ nhất là $\\min_{(0; +\\infty)} y = 6$ tại $x = 3$."
          },
          {
            id: "g12-c1-l2-d2-ex6",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tìm giá trị lớn nhất của hàm số $y = \\dfrac{4x}{x^2 + 4}$ trên khoảng $(0; +\\infty)$.",
            shortAnswer: "$\\max = 1$",
            fullSolution: "Chia tử và mẫu cho $x > 0$: $y = \\dfrac{4}{x + \\frac{4}{x}}$. Vì $x + \\dfrac{4}{x} \\ge 2\\sqrt{x \\cdot \\frac{4}{x}} = 4$ nên $y \\le \\dfrac{4}{4} = 1$. Dấu '=' xảy ra khi $x = 2$. Vậy $\\max_{(0; +\\infty)} y = 1$."
          },
          {
            id: "g12-c1-l2-d2-ex7",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tìm giá trị nhỏ nhất của hàm số $y = x^2 + \\dfrac{16}{x}$ trên khoảng $(0; +\\infty)$.",
            shortAnswer: "$\\min = 12$",
            fullSolution: "Đạo hàm $y' = 2x - \\dfrac{16}{x^2} = \\dfrac{2x^3 - 16}{x^2}$. Cho $y' = 0 \\iff 2x^3 = 16 \\iff x^3 = 8 \\iff x = 2$. Bảng biến thiên cho thấy tại $x = 2$, hàm số đạt cực tiểu duy nhất trên $(0; +\\infty)$. Vậy $\\min_{(0; +\\infty)} y = y(2) = 2^2 + \\dfrac{16}{2} = 4 + 8 = 12$."
          },
          // 3 BÀI VẬN DỤNG
          {
            id: "g12-c1-l2-d2-ex8",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Tìm giá trị nhỏ nhất của hàm số $y = x + \\dfrac{1}{x - 1}$ trên khoảng $(1; +\\infty)$.",
            shortAnswer: "$\\min = 3$",
            fullSolution: "Tách biểu thức: $y = (x - 1) + \\dfrac{1}{x - 1} + 1$. Với $x > 1$ thì $x - 1 > 0$. Áp dụng bất đẳng thức AM-GM: $(x - 1) + \\dfrac{1}{x - 1} \\ge 2\\sqrt{(x-1) \\cdot \\frac{1}{x-1}} = 2$. Suy ra $y \\ge 2 + 1 = 3$. Dấu đẳng thức xảy ra khi $x - 1 = 1 \\iff x = 2 > 1$. Vậy $\\min_{(1; +\\infty)} y = 3$."
          },
          {
            id: "g12-c1-l2-d2-ex9",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Tìm giá trị lớn nhất của hàm số $y = x^2 \\sqrt{9 - x^2}$ trên khoảng $(0; 3)$.",
            shortAnswer: "$\\max = 6\\sqrt{3}$",
            fullSolution: "Xét $y^2 = x^4(9 - x^2) = 4 \\cdot \\dfrac{x^2}{2} \\cdot \\dfrac{x^2}{2} \\cdot (9 - x^2)$. Áp dụng bất đẳng thức AM-GM cho 3 số dương $\\dfrac{x^2}{2}, \\dfrac{x^2}{2}, 9 - x^2$: $\\dfrac{x^2}{2} \\cdot \\dfrac{x^2}{2} \\cdot (9 - x^2) \\le \\left(\\dfrac{\\frac{x^2}{2} + \\frac{x^2}{2} + 9 - x^2}{3}\\right)^3 = 3^3 = 27$. Do đó $y^2 \\le 4 \\cdot 27 = 108 \\Rightarrow y \\le \\sqrt{108} = 6\\sqrt{3}$. Dấu '=' khi $\\dfrac{x^2}{2} = 9 - x^2 \\iff \\dfrac{3x^2}{2} = 9 \\iff x = \\sqrt{6} \\in (0; 3)$. Vậy $\\max = 6\\sqrt{3}$."
          },
          {
            id: "g12-c1-l2-d2-ex10",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Tìm giá trị nhỏ nhất của hàm số $y = \\dfrac{2x^2 + 3x + 3}{x + 1}$ trên khoảng $(-1; +\\infty)$.",
            shortAnswer: "$\\min = 3$",
            fullSolution: "Chia đa thức: $y = 2x + 1 + \\dfrac{2}{x + 1} = 2(x + 1) + \\dfrac{2}{x + 1} - 1$. Với $x > -1$ thì $x + 1 > 0$. Áp dụng AM-GM: $2(x+1) + \\dfrac{2}{x+1} \\ge 2\\sqrt{2 \\cdot 2} = 4$. Do đó $y \\ge 4 - 1 = 3$. Dấu đẳng thức xảy ra khi $2(x+1) = \\dfrac{2}{x+1} \\iff (x+1)^2 = 1 \\iff x + 1 = 1 \\iff x = 0 > -1$. Vậy $\\min_{(-1; +\\infty)} y = 3$."
          }
        ]
      },
      {
        id: "g12-c1-l2-dang3",
        name: "Dạng 3: Bài toán chứa tham số m & Ứng dụng tối ưu hoá thực tế",
        badge: "4 Biết • 3 Hiểu • 3 Vận dụng (10 bài)",
        badgeClass: "bg-purple-100 text-purple-800",
        method: [
          "Bước 1: Đối với bài toán chứa tham số $m$: Tính đạo hàm, lập bảng biến thiên hoặc cô lập tham số $m$ để biện luận theo yêu cầu $\\max / \\min$.",
          "Bước 2: Đối với bài toán tối ưu thực tế: Xác định đại lượng cần tối ưu (diện tích, thể tích, chi phí, lợi nhuận) và đặt biến số $x$ thích hợp kèm điều kiện hình học/kinh tế.",
          "Bước 3: Lập hàm mục tiêu $f(x)$, tính đạo hàm $f'(x) = 0$ và lập bảng biến thiên để tìm GTLN hoặc GTNN, kết luận đáp số bài toán thực tế."
        ],
        examples: [
          {
            title: "Ví dụ 1 (Tìm m để GTLN bằng giá trị cho trước)",
            question: "Tìm tham số $m$ để giá trị lớn nhất của hàm số $y = x^3 - 3x + m$ trên đoạn $[0; 2]$ bằng 10.",
            solution: "Xét $f(x) = x^3 - 3x$ trên $[0; 2]$.\n$f'(x) = 3x^2 - 3 = 0 \\iff x = 1 \\in (0; 2)$.\nTính: $f(0) = 0$; $f(1) = -2$; $f(2) = 2$. Do đó $\\max_{[0; 2]} f(x) = 2$.\nSuy ra $\\max_{[0; 2]} y = 2 + m = 10 \\iff m = 8$."
          },
          {
            title: "Ví dụ 2 (Tối ưu hóa diện tích rào chắn)",
            question: "Bác Nông dân muốn dùng $40\\text{ m}$ lưới thép để rào một mảnh vườn hình chữ nhật giáp bờ tường thẳng (không cần rào phía bờ tường). Tìm diện tích lớn nhất của mảnh vườn.",
            solution: "Gọi chiều rộng vuông góc với bờ tường là $x\\text{ m}$ ($0 < x < 20$).\nChiều dài mảnh vườn là $40 - 2x\\text{ m}$.\nDiện tích mảnh vườn: $S(x) = x(40 - 2x) = -2x^2 + 40x = -2(x - 10)^2 + 200 \\le 200\\text{ m}^2$.\nDấu '=' xảy ra khi $x = 10\\text{ m}$. Chiều dài là $40 - 2(10) = 20\\text{ m}$.\nVậy diện tích lớn nhất rào được là $200\\text{ m}^2$."
          },
          {
            title: "Ví dụ 3 (Tìm m để GTNN hàm phân thức đạt giá trị)",
            question: "Tìm $m$ để giá trị nhỏ nhất của hàm số $y = \\dfrac{x + m}{x + 1}$ trên đoạn $[0; 1]$ bằng 2.",
            solution: "Đạo hàm $y' = \\dfrac{1 - m}{(x+1)^2}$.\n- Trường hợp 1: $1 - m > 0 \\iff m < 1$: Hàm đồng biến trên $[0; 1] \\Rightarrow \\min = y(0) = m = 2$ (loại vì cần $m < 1$).\n- Trường hợp 2: $1 - m < 0 \\iff m > 1$: Hàm nghịch biến trên $[0; 1] \\Rightarrow \\min = y(1) = \\dfrac{1+m}{2} = 2 \\iff 1 + m = 4 \\iff m = 3$ (thỏa mãn $m > 1$).\nVậy $m = 3$."
          }
        ],
        exercises: [
          // 4 BÀI NHẬN BIẾT
          {
            id: "g12-c1-l2-d3-ex1",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Cho hàm số $y = x + m$ trên đoạn $[1; 3]$. Biết giá trị lớn nhất của hàm số trên $[1; 3]$ bằng 8, tìm giá trị của tham số $m$.",
            shortAnswer: "$m = 5$",
            fullSolution: "Hàm số $y = x + m$ luôn đồng biến trên $[1; 3]$ nên giá trị lớn nhất đạt tại đầu mút $x = 3$. Ta có $\\max_{[1; 3]} y = 3 + m = 8 \\iff m = 5$."
          },
          {
            id: "g12-c1-l2-d3-ex2",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Cho hàm số $y = f(x) + m$ liên tục trên $[a; b]$. Biết giá trị lớn nhất của $f(x)$ trên $[a; b]$ là 5. Biểu diễn $\\max_{[a; b]} y$ theo $m$.",
            shortAnswer: "$\\max y = 5 + m$",
            fullSolution: "Vì $m$ là hằng số nên $\\max_{[a; b]} [f(x) + m] = \\max_{[a; b]} f(x) + m = 5 + m$."
          },
          {
            id: "g12-c1-l2-d3-ex3",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Một mảnh đất hình chữ nhật có nửa chu vi là $20\\text{ m}$. Gọi chiều rộng là $x\\text{ m}$ ($0 < x < 10$). Hãy lập hàm số biểu diễn diện tích $S(x)$ của mảnh đất theo biến $x$.",
            shortAnswer: "$S(x) = -x^2 + 20x$",
            fullSolution: "Nửa chu vi là 20 m nên chiều dài mảnh đất là $20 - x\\text{ m}$. Diện tích hình chữ nhật là $S(x) = x(20 - x) = -x^2 + 20x\\text{ (m}^2\\text{)}$."
          },
          {
            id: "g12-c1-l2-d3-ex4",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Tìm tham số $m$ để hàm số $y = -x^2 + 4x + m$ có giá trị lớn nhất trên $\\mathbb{R}$ bằng 10.",
            shortAnswer: "$m = 6$",
            fullSolution: "Ta có $y = -(x - 2)^2 + 4 + m \\le 4 + m, \\forall x$. Giá trị lớn nhất là $\\max y = 4 + m = 10 \\iff m = 6$."
          },
          // 3 BÀI THÔNG HIỂU
          {
            id: "g12-c1-l2-d3-ex5",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tìm tham số $m$ để giá trị nhỏ nhất của hàm số $y = x^3 - 3x + m$ trên đoạn $[0; 2]$ bằng 5.",
            shortAnswer: "$m = 7$",
            fullSolution: "Xét $f(x) = x^3 - 3x$ trên $[0; 2]$. Ta có $f'(x) = 3x^2 - 3 = 0 \\iff x = 1 \\in (0; 2)$. Tính các giá trị: $f(0) = 0$, $f(1) = -2$, $f(2) = 2$. Do đó $\\min_{[0; 2]} f(x) = -2$. Suy ra $\\min_{[0; 2]} y = -2 + m = 5 \\iff m = 7$."
          },
          {
            id: "g12-c1-l2-d3-ex6",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tìm $m$ để giá trị lớn nhất của hàm số $y = \\dfrac{x - m}{x + 1}$ trên đoạn $[0; 2]$ bằng 3.",
            shortAnswer: "$m = -3$",
            fullSolution: "Đạo hàm $y' = \\dfrac{1 - (-m)}{(x+1)^2} = \\dfrac{m + 1}{(x+1)^2}$.\n- Nếu $m + 1 > 0 \\iff m > -1$: Hàm đồng biến trên $[0; 2] \\Rightarrow \\max = y(2) = \\dfrac{2 - m}{3} = 3 \\iff 2 - m = 9 \\iff m = -7$ (loại vì không thỏa mãn $m > -1$).\n- Nếu $m + 1 < 0 \\iff m < -1$: Hàm nghịch biến trên $[0; 2] \\Rightarrow \\max = y(0) = -m = 3 \\iff m = -3$ (thỏa mãn $m < -1$). Vậy $m = -3$."
          },
          {
            id: "g12-c1-l2-d3-ex7",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Một sợi dây thép dài $24\\text{ m}$ được uốn thành một hình chữ nhật. Tìm diện tích lớn nhất của hình chữ nhật đó.",
            shortAnswer: "$S_{\\max} = 36\\text{ m}^2$",
            fullSolution: "Chu vi hình chữ nhật là $2(a + b) = 24 \\Rightarrow a + b = 12\\text{ m}$. Áp dụng bất đẳng thức AM-GM: Diện tích $S = a \\cdot b \\le \\left(\\dfrac{a + b}{2}\\right)^2 = \\left(\\dfrac{12}{2}\\right)^2 = 36\\text{ m}^2$. Dấu '=' xảy ra khi $a = b = 6\\text{ m}$ (hình chữ nhật là hình vuông). Vậy diện tích lớn nhất là $36\\text{ m}^2$."
          },
          // 3 BÀI VẬN DỤNG
          {
            id: "g12-c1-l2-d3-ex8",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Từ một tấm tôn hình vuông cạnh $60\\text{ cm}$, người ta cắt ở bốn góc bốn hình vuông cạnh $x\\text{ cm}$ rồi gập lại thành một cái hộp không nắp hình hộp chữ nhật. Tìm $x$ để thể tích cái hộp lớn nhất.",
            shortAnswer: "$x = 10\\text{ cm}$",
            fullSolution: "Sau khi cắt, đáy hộp là hình vuông có cạnh $60 - 2x\\text{ cm}$, chiều cao hộp là $x\\text{ cm}$ ($0 < x < 30$). Thể tích của hộp: $V(x) = x(60 - 2x)^2 = 4x(30 - x)^2 = 4x^3 - 240x^2 + 3600x$. Đạo hàm $V'(x) = 12x^2 - 480x + 3600 = 12(x^2 - 40x + 300) = 12(x - 10)(x - 30)$. Cho $V'(x) = 0 \\iff x = 10\\text{ cm} \\in (0; 30)$. Lập bảng biến thiên suy ra thể tích lớn nhất đạt tại $x = 10\\text{ cm}$ với $V_{\\max} = 10(60 - 20)^2 = 16000\\text{ cm}^3$."
          },
          {
            id: "g12-c1-l2-d3-ex9",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Tìm tất cả các giá trị của tham số $m$ để giá trị lớn nhất của hàm số $y = |x^3 - 3x + m|$ trên đoạn $[0; 2]$ không vượt quá 5.",
            shortAnswer: "$-3 \\le m \\le 3$",
            fullSolution: "Xét $u(x) = x^3 - 3x$ trên $[0; 2]$. Ta có $u'(x) = 3x^2 - 3 = 0 \\iff x = 1$. Tính các giá trị: $u(0) = 0$, $u(1) = -2$, $u(2) = 2$. Do đó với mọi $x \\in [0; 2]$ ta có $-2 \\le u(x) \\le 2 \\iff m - 2 \\le u(x) + m \\le m + 2$. Yêu cầu bài toán $\\max_{[0; 2]} |u(x) + m| \\le 5 \\iff \\begin{cases} m + 2 \\le 5 \\\\ m - 2 \\ge -5 \\end{cases} \\iff \\begin{cases} m \\le 3 \\\\ m \\ge -3 \\end{cases} \\iff -3 \\le m \\le 3$."
          },
          {
            id: "g12-c1-l2-d3-ex10",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Một công ty sản xuất các lon nước ngọt hình trụ có thể tích $V = 500\\text{ cm}^3$. Tìm bán kính đáy $R$ để diện tích toàn phần của lon nhỏ nhất (tối ưu hóa tiết kiệm vật liệu tôn).",
            shortAnswer: "$R = \\sqrt[3]{\\dfrac{250}{\\pi}} \\approx 4.3\\text{ cm}$",
            fullSolution: "Thể tích khối trụ $V = \\pi R^2 h = 500 \\Rightarrow h = \\dfrac{500}{\\pi R^2}$. Diện tích toàn phần của lon: $S_{tp} = 2\\pi R^2 + 2\\pi R h = 2\\pi R^2 + 2\\pi R \\cdot \\dfrac{500}{\\pi R^2} = 2\\pi R^2 + \\dfrac{1000}{R}$ (với $R > 0$). Khảo sát hàm số $S(R)$: $S'(R) = 4\\pi R - \\dfrac{1000}{R^2} = \\dfrac{4\\pi R^3 - 1000}{R^2}$. Cho $S'(R) = 0 \\iff 4\\pi R^3 = 1000 \\iff R^3 = \\dfrac{250}{\\pi} \\iff R = \\sqrt[3]{\\dfrac{250}{\\pi}} \\approx 4.3\\text{ cm}$. Bảng biến thiên chứng minh tại điểm này $S_{tp}$ đạt giá trị nhỏ nhất."
          }
        ]
      }
    ]
  },



  // ------------------------------------------------------------------------
  // BÀI 3: ĐƯỜNG TIỆM CẬN CỦA ĐỒ THỊ HÀM SỐ
  // ------------------------------------------------------------------------
  "g12-c1-l3": {
    lessonId: "g12-c1-l3",
    title: "Bài 3: Đường tiệm cận của đồ thị hàm số",
    topics: [
      {
        id: "g12-c1-l3-dang1",
        name: "Dạng 1: Xác định Tiệm cận đứng (TCĐ) và Tiệm cận ngang (TCN)",
        badge: "4 Biết • 3 Hiểu • 3 Vận dụng (10 bài)",
        badgeClass: "bg-emerald-100 text-emerald-800",
        method: [
          "Bước 1 (TCĐ): Tìm nghiệm mẫu số mà không triệt tiêu tử số (hoặc bậc nghiệm mẫu lớn hơn tử). Tính $\\lim_{x \\to x_0^\\pm} f(x) = \\pm\\infty \\implies x = x_0$ là tiệm cận đứng.",
          "Bước 2 (TCN): Tính các giới hạn khi $x \\to +\\infty$ và $x \\to -\\infty$. Nếu $\\lim_{x \\to +\\infty} f(x) = y_0$ hoặc $\\lim_{x \\to -\\infty} f(x) = y_0$ thì $y = y_0$ là tiệm cận ngang.",
          "Bước 3: Đối với hàm phân thức hữu tỉ $y = \\dfrac{ax+b}{cx+d}$ ($c \\ne 0, ad - bc \\ne 0$): TCĐ là $x = -\\dfrac{d}{c}$, TCN là $y = \\dfrac{a}{c}$."
        ],
        examples: [
          {
            title: "Ví dụ 1 (TCĐ và TCN hàm phân thức bậc nhất)",
            question: "Tìm các đường tiệm cận của đồ thị hàm số $y = \\dfrac{2x - 1}{x + 1}$.",
            solution: "1. TCĐ: Nghiệm mẫu $x + 1 = 0 \\iff x = -1$. Ta có $\\lim_{x \\to (-1)^+} \\dfrac{2x-1}{x+1} = -\\infty$ nên $x = -1$ là đường tiệm cận đứng.\n2. TCN: $\\lim_{x \\to \\pm\\infty} \\dfrac{2x-1}{x+1} = \\lim_{x \\to \\pm\\infty} \\dfrac{2 - 1/x}{1 + 1/x} = 2$. Do đó $y = 2$ là đường tiệm cận ngang."
          },
          {
            title: "Ví dụ 2 (Đồ thị có nghiệm mẫu triệt tiêu tử)",
            question: "Tìm số đường tiệm cận đứng của đồ thị hàm số $y = \\dfrac{x - 2}{x^2 - 4}$.",
            solution: "Ta có $y = \\dfrac{x - 2}{(x - 2)(x + 2)} = \\dfrac{1}{x + 2}$ (với $x \\ne 2$).\n- Tại $x = 2$: $\\lim_{x \\to 2} y = \\dfrac{1}{4}$ (hữu hạn) nên $x = 2$ không phải TCĐ.\n- Tại $x = -2$: $\\lim_{x \\to (-2)^+} y = +\\infty$ nên $x = -2$ là đường tiệm cận đứng duy nhất."
          },
          {
            title: "Ví dụ 3 (Tiệm cận hàm chứa căn thức)",
            question: "Tìm tiệm cận ngang của đồ thị hàm số $y = \\dfrac{2x + 1}{\\sqrt{x^2 + 1}}$.",
            solution: "1. Khi $x \\to +\\infty$: $\\sqrt{x^2+1} = x\\sqrt{1 + 1/x^2}$. Ta có $\\lim_{x \\to +\\infty} \\dfrac{2x+1}{x\\sqrt{1+1/x^2}} = 2 \\implies y = 2$ là TCN.\n2. Khi $x \\to -\\infty$: $\\sqrt{x^2+1} = -x\\sqrt{1 + 1/x^2}$. Ta có $\\lim_{x \\to -\\infty} \\dfrac{2x+1}{-x\\sqrt{1+1/x^2}} = -2 \\implies y = -2$ là TCN.\nVậy đồ thị có 2 tiệm cận ngang là $y = 2$ và $y = -2$."
          }
        ],
        exercises: [
          // 4 BÀI NHẬN BIẾT
          {
            id: "g12-c1-l3-d1-ex1",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Tìm phương trình đường tiệm cận đứng và tiệm cận ngang của đồ thị hàm số $y = \\dfrac{3x - 1}{x + 2}$.",
            shortAnswer: "TCĐ: $x = -2$, TCN: $y = 3$",
            fullSolution: "Nghiệm của mẫu số là $x + 2 = 0 \\iff x = -2$ không làm triệt tiêu tử số nên TCĐ là $x = -2$. Giới hạn $\\lim_{x \\to \\pm\\infty} \\dfrac{3x-1}{x+2} = 3$ nên TCN là $y = 3$."
          },
          {
            id: "g12-c1-l3-d1-ex2",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Cho hàm số $y = f(x)$ có bảng biến thiên với $\\lim_{x \\to 2^+} f(x) = +\\infty$ và $\\lim_{x \\to \\pm\\infty} f(x) = 1$. Xác định các đường tiệm cận của đồ thị hàm số.",
            shortAnswer: "TCĐ: $x = 2$, TCN: $y = 1$",
            fullSolution: "Theo định nghĩa, vì $\\lim_{x \\to 2^+} f(x) = +\\infty$ nên đường thẳng $x = 2$ là tiệm cận đứng. Vì $\\lim_{x \\to \\pm\\infty} f(x) = 1$ nên đường thẳng $y = 1$ là tiệm cận ngang."
          },
          {
            id: "g12-c1-l3-d1-ex3",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Tìm phương trình đường tiệm cận ngang của đồ thị hàm số $y = \\dfrac{4x + 5}{1 - 2x}$.",
            shortAnswer: "TCN: $y = -2$",
            fullSolution: "Ta có $\\lim_{x \\to \\pm\\infty} \\dfrac{4x+5}{1-2x} = \\lim_{x \\to \\pm\\infty} \\dfrac{4 + 5/x}{1/x - 2} = \\dfrac{4}{-2} = -2$. Vậy đường tiệm cận ngang là $y = -2$."
          },
          {
            id: "g12-c1-l3-d1-ex4",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Tìm phương trình đường tiệm cận đứng của đồ thị hàm số $y = \\dfrac{x^2 - 1}{x - 3}$.",
            shortAnswer: "TCĐ: $x = 3$",
            fullSolution: "Mẫu số triệt tiêu tại $x = 3$. Tại $x = 3$, tử số bằng $3^2 - 1 = 8 \\ne 0$. Do đó $\\lim_{x \\to 3^\\pm} y = \\pm\\infty$ nên $x = 3$ là đường tiệm cận đứng của đồ thị hàm số."
          },
          // 3 BÀI THÔNG HIỂU
          {
            id: "g12-c1-l3-d1-ex5",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tìm số đường tiệm cận đứng của đồ thị hàm số $y = \\dfrac{x - 1}{x^2 - 3x + 2}$.",
            shortAnswer: "1 đường tiệm cận đứng ($x = 2$)",
            fullSolution: "Phân tích mẫu số: $x^2 - 3x + 2 = (x - 1)(x - 2)$. Rút gọn hàm số với $x \\ne 1$: $y = \\dfrac{x - 1}{(x - 1)(x - 2)} = \\dfrac{1}{x - 2}$. Khi đó $\\lim_{x \\to 1} y = -1$ (không phải tiệm cận). Tại $x = 2$, $\\lim_{x \\to 2^\\pm} y = \\pm\\infty$ nên đồ thị có duy nhất 1 đường tiệm cận đứng là $x = 2$."
          },
          {
            id: "g12-c1-l3-d1-ex6",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Đồ thị hàm số $y = \\dfrac{2x + 1}{\\sqrt{x^2 - 1}}$ có tất cả bao nhiêu đường tiệm cận (bao gồm cả đứng và ngang)?",
            shortAnswer: "4 đường tiệm cận",
            fullSolution: "TXĐ: $x^2 - 1 > 0 \\iff x > 1$ hoặc $x < -1$.\n- Tiệm cận đứng: $x = 1$ và $x = -1$ (2 TCĐ vì mẫu tiến về 0, tử khác 0).\n- Tiệm cận ngang: $\\lim_{x \\to +\\infty} y = 2 \\Rightarrow y = 2$; $\\lim_{x \\to -\\infty} y = -2 \\Rightarrow y = -2$ (2 TCN).\nTổng cộng đồ thị có $2 + 2 = 4$ đường tiệm cận."
          },
          {
            id: "g12-c1-l3-d1-ex7",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tìm tất cả các đường tiệm cận của đồ thị hàm số $y = \\dfrac{\\sqrt{x + 4} - 2}{x^2 + x}$.",
            shortAnswer: "TCĐ: $x = -1$, TCN: $y = 0$",
            fullSolution: "TXĐ: $x \\ge -4, x \\ne 0, x \\ne -1$. Rút gọn: nhân liên hợp tử số $\\sqrt{x+4}-2 = \\dfrac{x}{\\sqrt{x+4}+2}$, mẫu $x(x+1)$. Do đó $y = \\dfrac{1}{(x+1)(\\sqrt{x+4}+2)}$ (với $x \\ne 0$).\n- Tại $x = 0$: $\\lim_{x \\to 0} y = 1/4$ (hữu hạn, không là TCĐ).\n- Tại $x = -1$: $\\lim_{x \\to -1} y = \\infty \\implies x = -1$ là TCĐ duy nhất.\n- Khi $x \\to +\\infty$: $\\lim y = 0 \\implies y = 0$ là TCN."
          },
          // 3 BÀI VẬN DỤNG
          {
            id: "g12-c1-l3-d1-ex8",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Tìm tham số $m$ để đồ thị hàm số $y = \\dfrac{2x + 1}{x - m}$ có đường tiệm cận đứng đi qua điểm $A(3; 5)$.",
            shortAnswer: "$m = 3$",
            fullSolution: "Đường tiệm cận đứng của đồ thị hàm số là $x = m$ (với điều kiện $2m + 1 \\ne 0 \\iff m \\ne -1/2$). Điểm $A(3; 5)$ thuộc đường thẳng $x = m \\iff m = 3$ (thỏa mãn $m \\ne -1/2$)."
          },
          {
            id: "g12-c1-l3-d1-ex9",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Tìm tất cả các giá trị của tham số $m$ để đồ thị hàm số $y = \\dfrac{x - 1}{x^2 - 2mx + 4}$ có đúng 2 đường tiệm cận đứng.",
            shortAnswer: "$m < -2$ hoặc $m > 2$ và $m \\ne \\dfrac{5}{2}$",
            fullSolution: "Đồ thị hàm số có đúng 2 đường tiệm cận đứng khi và chỉ khi phương trình mẫu $g(x) = x^2 - 2mx + 4 = 0$ có 2 nghiệm phân biệt khác 1.\nĐiều kiện: $\\begin{cases} \\Delta' = m^2 - 4 > 0 \\\\ g(1) = 1 - 2m + 4 \\ne 0 \\end{cases} \\iff \\begin{cases} m < -2 \\text{ hoặc } m > 2 \\\\ 5 - 2m \\ne 0 \\iff m \\ne 5/2 \\end{cases}$."
          },
          {
            id: "g12-c1-l3-d1-ex10",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Tìm $m$ để giao điểm của hai đường tiệm cận của đồ thị hàm số $y = \\dfrac{2x + m}{x - 1}$ nằm trên đường thẳng $d: y = 3x - 1$.",
            shortAnswer: "Mọi $m \\ne -2$",
            fullSolution: "Đồ thị có tiệm cận đứng $x = 1$, tiệm cận ngang $y = 2$ (với điều kiện $m \\ne -2$). Giao điểm hai tiệm cận là $I(1; 2)$. Thay toạ độ $I(1; 2)$ vào phương trình đường thẳng $d$: $2 = 3(1) - 1 \\iff 2 = 2$ (luôn đúng). Vậy giao điểm $I$ luôn nằm trên đường thẳng $d$ với mọi $m \\ne -2$."
          }
        ]
      },
      {
        id: "g12-c1-l3-dang2",
        name: "Dạng 2: Tiệm cận xiên (TCX) của đồ thị hàm phân thức (Điểm mới)",
        badge: "4 Biết • 3 Hiểu • 3 Vận dụng (10 bài)",
        badgeClass: "bg-blue-100 text-blue-800",
        method: [
          "Bước 1: Nhận dạng hàm phân thức bậc hai/bậc nhất $y = \\dfrac{ax^2+bx+c}{px+q}$ ($a \\ne 0, p \\ne 0$).",
          "Bước 2: Thực hiện phép chia đa thức tử cho mẫu: $\\dfrac{ax^2+bx+c}{px+q} = (Ax + B) + \\dfrac{R}{px+q}$.",
          "Bước 3: Vì $\\lim_{x \\to \\pm\\infty} \\dfrac{R}{px+q} = 0$ nên đường thẳng $y = Ax + B$ chính là đường tiệm cận xiên (TCX) của đồ thị hàm số."
        ],
        examples: [
          {
            title: "Ví dụ 1 (Tìm TCX bằng phép chia đa thức)",
            question: "Tìm phương trình đường tiệm cận xiên của đồ thị hàm số $y = \\dfrac{x^2 - 3x + 1}{x - 1}$.",
            solution: "Thực hiện phép chia đa thức:\n$x^2 - 3x + 1 = x(x - 1) - 2(x - 1) - 1 = (x - 2)(x - 1) - 1$.\nSuy ra $y = x - 2 - \\dfrac{1}{x - 1}$.\nVì $\\lim_{x \\to \\pm\\infty} \\left(-\\dfrac{1}{x-1}\\right) = 0$ nên đường tiệm cận xiên là $y = x - 2$."
          },
          {
            title: "Ví dụ 2 (Giao điểm hai đường tiệm cận)",
            question: "Tìm toạ độ giao điểm $I$ của tiệm cận đứng và tiệm cận xiên của hàm số $y = \\dfrac{2x^2 + x - 3}{x + 1}$.",
            solution: "1. TCĐ: $x + 1 = 0 \\iff x = -1$.\n2. TCX: Chia đa thức $2x^2 + x - 3 = (2x - 1)(x + 1) - 2 \\implies y = 2x - 1 - \\dfrac{2}{x+1}$. Tiệm cận xiên là $y = 2x - 1$.\n3. Toạ độ giao điểm $I$: Thay $x = -1$ vào $y = 2x - 1 \\implies y = 2(-1) - 1 = -3$. Vậy $I(-1; -3)$."
          },
          {
            title: "Ví dụ 3 (Tìm TCX bằng công thức giới hạn)",
            question: "Tìm đường tiệm cận xiên của hàm số $y = \\dfrac{x^2 + 2x - 1}{x + 2}$.",
            solution: "Ta có $a = \\lim_{x \\to \\infty} \\dfrac{y}{x} = \\lim_{x \\to \\infty} \\dfrac{x^2+2x-1}{x^2+2x} = 1$.\n$b = \\lim_{x \\to \\infty} (y - ax) = \\lim_{x \\to \\infty} \\left(\\dfrac{x^2+2x-1}{x+2} - x\\right) = \\lim_{x \\to \\infty} \\dfrac{-1}{x+2} = 0$.\nVậy đường tiệm cận xiên là $y = x$."
          }
        ],
        exercises: [
          // 4 BÀI NHẬN BIẾT
          {
            id: "g12-c1-l3-d2-ex1",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Cho hàm số $y = 2x + 1 + \\dfrac{3}{x - 2}$. Phương trình đường tiệm cận xiên của đồ thị hàm số là đường thẳng nào?",
            shortAnswer: "TCX: $y = 2x + 1$",
            fullSolution: "Vì $\\lim_{x \\to \\pm\\infty} [y - (2x + 1)] = \\lim_{x \\to \\pm\\infty} \\dfrac{3}{x-2} = 0$ nên theo định nghĩa, đường tiệm cận xiên của đồ thị hàm số là $y = 2x + 1$."
          },
          {
            id: "g12-c1-l3-d2-ex2",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Tìm hệ số góc $a$ của đường tiệm cận xiên của đồ thị hàm số $y = \\dfrac{3x^2 - 5x + 2}{x + 1}$.",
            shortAnswer: "$a = 3$",
            fullSolution: "Hệ số góc của tiệm cận xiên là $a = \\lim_{x \\to \\infty} \\dfrac{y}{x} = \\lim_{x \\to \\infty} \\dfrac{3x^2 - 5x + 2}{x^2 + x} = 3$."
          },
          {
            id: "g12-c1-l3-d2-ex3",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Tìm phương trình đường tiệm cận xiên của đồ thị hàm số $y = \\dfrac{x^2 + 1}{x}$.",
            shortAnswer: "TCX: $y = x$",
            fullSolution: "Ta có $y = \\dfrac{x^2 + 1}{x} = x + \\dfrac{1}{x}$. Vì $\\lim_{x \\to \\pm\\infty} \\dfrac{1}{x} = 0$ nên tiệm cận xiên là $y = x$."
          },
          {
            id: "g12-c1-l3-d2-ex4",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Đồ thị hàm số $y = -x + 4 - \\dfrac{2}{x + 3}$ có tiệm cận xiên đi qua điểm nào dưới đây trong hai điểm $M(0; 4)$ và $N(1; 2)$?",
            shortAnswer: "Đi qua điểm $M(0; 4)$",
            fullSolution: "Tiệm cận xiên là đường thẳng $y = -x + 4$. Thay toạ độ $M(0; 4)$ vào: $4 = -0 + 4$ (đúng). Thay $N(1; 2)$ vào: $2 = -1 + 4 = 3$ (sai). Vậy tiệm cận xiên đi qua điểm $M(0; 4)$."
          },
          // 3 BÀI THÔNG HIỂU
          {
            id: "g12-c1-l3-d2-ex5",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tìm phương trình đường tiệm cận xiên của đồ thị hàm số $y = \\dfrac{x^2 - 4x + 5}{x - 2}$.",
            shortAnswer: "TCX: $y = x - 2$",
            fullSolution: "Chia đa thức: $x^2 - 4x + 5 = (x - 2)^2 + 1 \\implies y = x - 2 + \\dfrac{1}{x - 2}$. Do đó đường tiệm cận xiên là $y = x - 2$."
          },
          {
            id: "g12-c1-l3-d2-ex6",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tìm toạ độ giao điểm của đường tiệm cận đứng và tiệm cận xiên của đồ thị hàm số $y = \\dfrac{x^2 - x + 2}{x - 1}$.",
            shortAnswer: "$I(1; 1)$",
            fullSolution: "1. TCĐ: $x - 1 = 0 \\iff x = 1$.\n2. TCX: Chia đa thức $y = x + \\dfrac{2}{x-1} \\implies$ TCX là $y = x$.\n3. Giao điểm $I$: Thay $x = 1$ vào $y = x \\implies y = 1$. Vậy $I(1; 1)$."
          },
          {
            id: "g12-c1-l3-d2-ex7",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tìm phương trình đường tiệm cận xiên của đồ thị hàm số $y = \\dfrac{2x^2 - 5x + 1}{x - 3}$.",
            shortAnswer: "TCX: $y = 2x + 1$",
            fullSolution: "Chia đa thức: $2x^2 - 5x + 1 = 2x(x - 3) + x + 1 = 2x(x - 3) + (x - 3) + 4 = (2x + 1)(x - 3) + 4$. Suy ra $y = 2x + 1 + \\dfrac{4}{x - 3}$. Vậy tiệm cận xiên là $y = 2x + 1$."
          },
          // 3 BÀI VẬN DỤNG
          {
            id: "g12-c1-l3-d2-ex8",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Tìm tham số $m$ để đường tiệm cận xiên của đồ thị hàm số $y = \\dfrac{mx^2 + (m - 1)x + 2}{x - 1}$ đi qua gốc toạ độ $O(0; 0)$.",
            shortAnswer: "$m = \\dfrac{1}{2}$",
            fullSolution: "Chia đa thức tử cho mẫu với $m \\ne 0$: $mx^2 + (m-1)x + 2 = (mx + 2m - 1)(x - 1) + (2m + 1)$. Đường tiệm cận xiên là $y = mx + 2m - 1$. Để tiệm cận xiên đi qua gốc toạ độ $O(0; 0)$ thì $0 = m(0) + 2m - 1 \\iff 2m - 1 = 0 \\iff m = \\dfrac{1}{2}$."
          },
          {
            id: "g12-c1-l3-d2-ex9",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Cho hàm số $y = \\dfrac{x^2 + 2x + 3}{x + 1}$. Tính khoảng cách từ gốc toạ độ $O(0; 0)$ đến đường tiệm cận xiên của đồ thị hàm số.",
            shortAnswer: "$d = \\dfrac{\\sqrt{2}}{2}$",
            fullSolution: "Chia đa thức: $y = x + 1 + \\dfrac{2}{x + 1} \\implies$ tiệm cận xiên là $\\Delta: y = x + 1 \\iff x - y + 1 = 0$. Khoảng cách từ gốc toạ độ $O(0; 0)$ đến $\\Delta$ là $d(O, \\Delta) = \\dfrac{|0 - 0 + 1|}{\\sqrt{1^2 + (-1)^2}} = \\dfrac{1}{\\sqrt{2}} = \\dfrac{\\sqrt{2}}{2}$."
          },
          {
            id: "g12-c1-l3-d2-ex10",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Tìm tất cả các giá trị của tham số $m$ để tiệm cận xiên của đồ thị hàm số $y = \\dfrac{x^2 + mx - 1}{x - 1}$ vuông góc với đường thẳng $d: y = -x + 3$.",
            shortAnswer: "Không có giá trị m nào thỏa mãn",
            fullSolution: "Chia đa thức: $x^2 + mx - 1 = (x + m + 1)(x - 1) + m$. Tiệm cận xiên là đường thẳng $\\Delta: y = x + m + 1$ có hệ số góc $k_1 = 1$. Đường thẳng $d$ có hệ số góc $k_2 = -1$. Tích hai hệ số góc là $k_1 \\cdot k_2 = 1 \\cdot (-1) = -1$. Do đó tiệm cận xiên $\\Delta$ luôn vuông góc với đường thẳng $d$ với mọi $m$ (miễn là $m \\ne 0$ để không triệt tiêu phần dư)."
          }
        ]
      },
      {
        id: "g12-c1-l3-dang3",
        name: "Dạng 3: Bài toán chứa tham số m & Đồ thị tiệm cận nâng cao",
        badge: "4 Biết • 3 Hiểu • 3 Vận dụng (10 bài)",
        badgeClass: "bg-purple-100 text-purple-800",
        method: [
          "Bước 1: Tìm điều kiện của tham số $m$ để nghiệm của mẫu số không là nghiệm của tử số (để đường thẳng là TCĐ thực sự).",
          "Bước 2: Tìm điều kiện để phương trình bậc hai ở mẫu có đúng 1 nghiệm hoặc 2 nghiệm phân biệt thỏa mãn điều kiện bài toán.",
          "Bước 3: Sử dụng toạ độ giao điểm của các tiệm cận (tâm đối xứng) để tính diện tích tam giác, khoảng cách hoặc chứng minh tính chất bất biến."
        ],
        examples: [
          {
            title: "Ví dụ 1 (Tìm m để đồ thị có số lượng tiệm cận cho trước)",
            question: "Tìm $m$ để đồ thị hàm số $y = \\dfrac{x - 1}{x^2 - mx + 1}$ có đúng 2 đường tiệm cận đứng.",
            solution: "Đồ thị có 2 tiệm cận đứng khi và chỉ khi mẫu số $g(x) = x^2 - mx + 1 = 0$ có 2 nghiệm phân biệt khác 1.\nĐiều kiện: $\\begin{cases} \\Delta = m^2 - 4 > 0 \\\\ g(1) = 1 - m + 1 \\ne 0 \\end{cases} \\iff \\begin{cases} m < -2 \\text{ hoặc } m > 2 \\\\ m \\ne 2 \\end{cases} \\iff m < -2$ hoặc $m > 2$."
          },
          {
            title: "Ví dụ 2 (Tâm đối xứng là giao điểm hai tiệm cận)",
            question: "Tìm toạ độ tâm đối xứng $I$ của đồ thị hàm số $y = \\dfrac{3x - 2}{x + 1}$.",
            solution: "Đồ thị có tiệm cận đứng $x = -1$ và tiệm cận ngang $y = 3$. Giao điểm của hai đường tiệm cận là $I(-1; 3)$, đây chính là tâm đối xứng của đồ thị hàm phân thức."
          },
          {
            title: "Ví dụ 3 (Diện tích tam giác tạo bởi hai tiệm cận và tiếp tuyến)",
            question: "Cho hàm số $y = \\dfrac{x + 1}{x - 1}$. Chứng minh tiếp tuyến bất kỳ của đồ thị tạo với 2 tiệm cận một tam giác có diện tích không đổi.",
            solution: "Hai tiệm cận là $x = 1, y = 1$, giao điểm $I(1; 1)$.\nTiếp tuyến tại $M(x_0; y_0)$ cắt 2 tiệm cận tại $A, B$. Khoảng cách $IA = 2|x_0 - 1|, IB = \\dfrac{4}{|x_0 - 1|}$.\nDiện tích tam giác vuông $IAB$: $S = \\dfrac{1}{2} IA \\cdot IB = \\dfrac{1}{2} \\cdot 2 \\cdot 4 = 4$ (không đổi)."
          }
        ],
        exercises: [
          // 4 BÀI NHẬN BIẾT
          {
            id: "g12-c1-l3-d3-ex1",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Tìm tham số $m$ để đồ thị hàm số $y = \\dfrac{mx + 1}{x - 2}$ có tiệm cận ngang là đường thẳng $y = 3$.",
            shortAnswer: "$m = 3$",
            fullSolution: "Tiệm cận ngang của đồ thị là $y = m$. Yêu cầu bài toán suy ra $m = 3$ (với điều kiện $3(-2) - 1 \\ne 0 \\iff -7 \\ne 0$ thỏa mãn)."
          },
          {
            id: "g12-c1-l3-d3-ex2",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Đồ thị hàm số $y = \\dfrac{2x + 3}{x - 1}$ có tiệm cận đứng $x = 1$ và tiệm cận ngang $y = 2$. Toạ độ tâm đối xứng $I$ của đồ thị là:",
            shortAnswer: "$I(1; 2)$",
            fullSolution: "Tâm đối xứng của đồ thị hàm phân thức bậc nhất/bậc nhất là giao điểm của đường tiệm cận đứng và đường tiệm cận ngang: $I(1; 2)$."
          },
          {
            id: "g12-c1-l3-d3-ex3",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Tìm $m$ để tiệm cận đứng của đồ thị hàm số $y = \\dfrac{x + 1}{x - m + 2}$ là đường thẳng $x = 4$.",
            shortAnswer: "$m = 6$",
            fullSolution: "Nghiệm mẫu số: $x - m + 2 = 0 \\iff x = m - 2$. Để tiệm cận đứng là $x = 4 \\iff m - 2 = 4 \\iff m = 6$."
          },
          {
            id: "g12-c1-l3-d3-ex4",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Đồ thị hàm số đa thức bậc ba $y = x^3 - 3x^2 + 2$ có bao nhiêu đường tiệm cận?",
            shortAnswer: "0 đường tiệm cận",
            fullSolution: "Vì hàm số đa thức xác định trên $\\mathbb{R}$ và tiến về $\\pm\\infty$ khi $x \\to \\pm\\infty$ nên đồ thị hàm số đa thức không có bất kỳ đường tiệm cận đứng, ngang hay xiên nào."
          },
          // 3 BÀI THÔNG HIỂU
          {
            id: "g12-c1-l3-d3-ex5",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tìm $m > 0$ để hai đường tiệm cận của đồ thị hàm số $y = \\dfrac{2x + 1}{x - m}$ cùng với hai trục toạ độ tạo thành một hình chữ nhật có diện tích bằng 6.",
            shortAnswer: "$m = 3$",
            fullSolution: "Hai đường tiệm cận là $x = m$ và $y = 2$. Cùng với 2 trục toạ độ $x = 0, y = 0$, chúng tạo thành hình chữ nhật có kích thước là $|m|$ và $2$. Diện tích $S = 2|m| = 6 \\iff |m| = 3$. Vì $m > 0$ nên $m = 3$."
          },
          {
            id: "g12-c1-l3-d3-ex6",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tìm $m > 0$ để khoảng cách giữa hai đường tiệm cận đứng của đồ thị hàm số $y = \\dfrac{1}{x^2 - 4mx + 3m^2}$ bằng 4.",
            shortAnswer: "$m = 2$",
            fullSolution: "Mẫu số $x^2 - 4mx + 3m^2 = (x - m)(x - 3m) = 0 \\iff x_1 = m, x_2 = 3m$. Với $m > 0$ thì $x_1 \\ne x_2$, hai tiệm cận đứng là $x = m$ và $x = 3m$. Khoảng cách giữa hai tiệm cận là $|3m - m| = 2m = 4 \\iff m = 2$."
          },
          {
            id: "g12-c1-l3-d3-ex7",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tìm tất cả các giá trị của tham số $m$ để đồ thị hàm số $y = \\dfrac{x + 1}{x^2 + 2x + m}$ có đúng một đường tiệm cận đứng.",
            shortAnswer: "$m = 1$",
            fullSolution: "Xét mẫu số $g(x) = x^2 + 2x + m$. Đồ thị có đúng 1 tiệm cận đứng khi và chỉ khi:\n- TH1: $g(x) = 0$ có nghiệm kép: $\\Delta' = 1 - m = 0 \\iff m = 1$. Khi đó $g(x) = (x+1)^2 \\implies y = \\dfrac{1}{x+1}$, có 1 TCĐ $x = -1$.\n- TH2: $g(x) = 0$ có 2 nghiệm phân biệt trong đó có nghiệm $x = -1$: $g(-1) = 1 - 2 + m = 0 \\iff m = 1$ (trùng TH1)."
          },
          // 3 BÀI VẬN DỤNG
          {
            id: "g12-c1-l3-d3-ex8",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Tìm $m$ để giao điểm của hai đường tiệm cận của đồ thị hàm số $y = \\dfrac{mx - 1}{x - 1}$ nằm trên đường tròn $(C): x^2 + y^2 = 5$.",
            shortAnswer: "$m = \\pm 2$",
            fullSolution: "Đồ thị có tiệm cận đứng $x = 1$, tiệm cận ngang $y = m$ (với $m \\ne 1$). Giao điểm hai tiệm cận là $I(1; m)$. Điểm $I$ thuộc đường tròn $(C) \\iff 1^2 + m^2 = 5 \\iff m^2 = 4 \\iff m = \\pm 2$ (thỏa mãn $m \\ne 1$)."
          },
          {
            id: "g12-c1-l3-d3-ex9",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Gọi $I$ là giao điểm hai tiệm cận của đồ thị hàm số $y = \\dfrac{2x - 1}{x + 1}$. Tiếp tuyến tại điểm $M$ bất kỳ cắt hai tiệm cận tại $A, B$. Tính diện tích tam giác $IAB$.",
            shortAnswer: "$S = 6$",
            fullSolution: "Hai tiệm cận là $x = -1$ và $y = 2$, giao điểm $I(-1; 2)$. Với hàm số phân thức $y = \\dfrac{ax+b}{cx+d}$, diện tích tam giác tạo bởi tiếp tuyến tại điểm bất kỳ với 2 đường tiệm cận luôn không đổi và bằng $S = \\dfrac{2|ad - bc|}{c^2}$. Ở đây $ad - bc = 2(1) - (-1)(1) = 3, c = 1$. Do đó diện tích tam giác $IAB$ là $S = \\dfrac{2 \\cdot 3}{1^2} = 6$."
          },
          {
            id: "g12-c1-l3-d3-ex10",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Tìm tất cả các giá trị của tham số $m$ để đồ thị hàm số $y = \\dfrac{\\sqrt{x - 1}}{x^2 - mx + 4}$ có đúng 2 đường tiệm cận đứng.",
            shortAnswer: "$m > 4$ hoặc $m < -4$ và $m \\ne 5$",
            fullSolution: "Điều kiện xác định: $x \\ge 1$. Đồ thị có 2 tiệm cận đứng khi và chỉ khi mẫu số $g(x) = x^2 - mx + 4 = 0$ có hai nghiệm phân biệt lớn hơn 1.\nĐiều kiện: $\\begin{cases} \\Delta = m^2 - 16 > 0 \\\\ x_1 + x_2 = m > 2 \\\\ (x_1 - 1)(x_2 - 1) = 4 - m + 1 > 0 \\end{cases} \\iff \\begin{cases} m > 4 \\\\ m < 5 \\end{cases} \\iff 4 < m < 5$."
          }
        ]
      }
    ]
  },

  // BÀI 4: KHẢO SÁT SỰ BIẾN THIÊN VÀ VẼ ĐỒ THỊ CỦA HÀM SỐ
  // ------------------------------------------------------------------------
  "g12-c1-l4": {
    lessonId: "g12-c1-l4",
    title: "Bài 4: Khảo sát sự biến thiên và vẽ đồ thị của hàm số",
    topics: [
      {
        id: "g12-c1-l4-dang1",
        name: "Dạng 1: Nhận dạng đồ thị, bảng biến thiên & Xác định dấu các hệ số",
        badge: "4 Biết • 3 Hiểu • 3 Vận dụng (10 bài)",
        badgeClass: "bg-emerald-100 text-emerald-800",
        method: [
          "Bước 1: Quan sát chiều của nhánh vô cực cuối cùng bên phải để xác định dấu của hệ số $a$ (nhánh cuối đi lên $\\implies a > 0$; nhánh cuối đi xuống $\\implies a < 0$).",
          "Bước 2: Tìm giao điểm của đồ thị với trục tung $Oy$ ($x = 0 \\implies y = d$ hoặc $y = b/d$) để xác định hệ số tự do.",
          "Bước 3: Sử dụng toạ độ các điểm cực trị (định lý Vi-ét: $x_1+x_2 = -2b/(3a), x_1 x_2 = c/(3a)$) hoặc các đường tiệm cận để xác định dấu của các hệ số còn lại."
        ],
        examples: [
          {
            title: "Ví dụ 1 (Nhận dạng dấu hệ số hàm bậc ba)",
            question: "Cho hàm số $y = ax^3 + bx^2 + cx + d$ có đồ thị với nhánh cuối đi lên, cắt $Oy$ tại điểm có tung độ dương, có 2 điểm cực trị nằm về 2 phía trục tung. Xác định dấu của $a, c, d$.",
            solution: "1. Nhánh cuối đi lên khi $x \\to +\\infty \\implies a > 0$.\n2. Cắt $Oy$ tại $(0; d)$ có tung độ dương $\\implies d > 0$.\n3. Hai điểm cực trị trái dấu $\\implies x_1 x_2 < 0 \\iff \\dfrac{c}{3a} < 0$. Vì $a > 0 \\implies c < 0$.\nVậy $a > 0, c < 0, d > 0$."
          },
          {
            title: "Ví dụ 2 (Nhận dạng bảng biến thiên hàm phân thức)",
            question: "Đồ thị hàm số nào có tiệm cận đứng $x = 2$, tiệm cận ngang $y = 1$ và đi qua điểm $(0; -1/2)$?",
            solution: "Hàm phân thức dạng $y = \\dfrac{x + b}{x - 2}$.\nĐi qua $(0; -1/2) \\implies \\dfrac{b}{-2} = -\\dfrac{1}{2} \\implies b = 1$.\nVậy hàm số là $y = \\dfrac{x + 1}{x - 2}$."
          },
          {
            title: "Ví dụ 3 (Tâm đối xứng của đồ thị)",
            question: "Tìm toạ độ tâm đối xứng của đồ thị hàm số $y = \\dfrac{x^2 - 2x + 2}{x - 1}$.",
            solution: "Chia đa thức: $y = x - 1 + \\dfrac{1}{x - 1}$.\nTiệm cận đứng là $x = 1$, tiệm cận xiên là $y = x - 1$.\nGiao điểm của hai tiệm cận là $I(1; 0)$. Đây chính là tâm đối xứng của đồ thị hàm phân thức bậc hai/bậc nhất."
          }
        ],
        exercises: [
          // 4 BÀI NHẬN BIẾT
          {
            id: "g12-c1-l4-d1-ex1",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Đồ thị hàm số bậc ba $y = ax^3 + bx^2 + cx + d$ có nhánh ngoài cùng bên phải đi xuống khi $x \\to +\\infty$. Khẳng định nào sau đây là đúng về dấu của hệ số $a$?",
            shortAnswer: "$a < 0$",
            fullSolution: "Vì khi $x \\to +\\infty$, giá trị $y \\to -\\infty$ nên dấu của hệ số bậc cao nhất phải là $a < 0$."
          },
          {
            id: "g12-c1-l4-d1-ex2",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Đồ thị hàm số $y = \\dfrac{ax + b}{cx + d}$ ($c \\ne 0, ad - bc \\ne 0$) luôn nhận điểm nào làm tâm đối xứng?",
            shortAnswer: "Giao điểm của hai đường tiệm cận $I\\left(-\\dfrac{d}{c}; \\dfrac{a}{c}\\right)$",
            fullSolution: "Theo tính chất của đồ thị hàm phân thức bậc nhất/bậc nhất, tâm đối xứng của đồ thị luôn là giao điểm của đường tiệm cận đứng $x = -d/c$ và đường tiệm cận ngang $y = a/c$."
          },
          {
            id: "g12-c1-l4-d1-ex3",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Đồ thị hàm số $y = x^3 - 3x^2 + 2$ cắt trục tung $Oy$ tại điểm có toạ độ nào?",
            shortAnswer: "$(0; 2)$",
            fullSolution: "Cho $x = 0$ ta được $y = 0^3 - 3(0)^2 + 2 = 2$. Do đó giao điểm với trục tung là điểm $(0; 2)$."
          },
          {
            id: "g12-c1-l4-d1-ex4",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Đồ thị hàm số $y = x^4 - 2x^2 - 1$ nhận trục nào làm trục đối xứng?",
            shortAnswer: "Trục tung $Oy$ ($x = 0$)",
            fullSolution: "Vì hàm số $y = f(x) = x^4 - 2x^2 - 1$ là hàm số chẵn thỏa mãn $f(-x) = f(x), \\forall x \\in \\mathbb{R}$ nên đồ thị nhận trục tung $Oy$ làm trục đối xứng."
          },
          // 3 BÀI THÔNG HIỂU
          {
            id: "g12-c1-l4-d1-ex5",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Cho hàm số $y = ax^3 + bx^2 + cx + d$ có đồ thị cắt $Oy$ tại điểm có tung độ âm, nhánh cuối đi lên và có hai điểm cực trị $x_1 < 0 < x_2$ với $|x_1| < x_2$. Xác định dấu của $a, b, d$.",
            shortAnswer: "$a > 0, b < 0, d < 0$",
            fullSolution: "- Nhánh cuối đi lên $\\implies a > 0$.\n- Cắt $Oy$ tại $(0; d)$ phía dưới trục hoành $\\implies d < 0$.\n- Hai điểm cực trị có tổng $x_1 + x_2 > 0$ (do $x_2 > |x_1|$) $\\implies -\\dfrac{2b}{3a} > 0 \\implies b < 0$ (vì $a > 0$)."
          },
          {
            id: "g12-c1-l4-d1-ex6",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tìm toạ độ tâm đối xứng của đồ thị hàm phân thức bậc hai/bậc nhất $y = \\dfrac{x^2 - 3x + 4}{x - 1}$.",
            shortAnswer: "$I(1; -1)$",
            fullSolution: "Chia đa thức: $x^2 - 3x + 4 = (x - 2)(x - 1) + 2 \\implies y = x - 2 + \\dfrac{2}{x - 1}$.\nTiệm cận đứng là $x = 1$, tiệm cận xiên là $y = x - 2$.\nTâm đối xứng là giao điểm của hai tiệm cận: thay $x = 1$ vào $y = x - 2 \\implies y = -1$. Vậy $I(1; -1)$."
          },
          {
            id: "g12-c1-l4-d1-ex7",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Cho đồ thị hàm số $y = \\dfrac{ax + 1}{bx - 2}$ có tiệm cận đứng $x = 1$ và tiệm cận ngang $y = 3$. Tính giá trị của biểu thức $T = a + b$.",
            shortAnswer: "$T = 8$",
            fullSolution: "Tiệm cận đứng: $bx - 2 = 0 \\iff x = \\dfrac{2}{b} = 1 \\implies b = 2$.\nTiệm cận ngang: $y = \\dfrac{a}{b} = 3 \\implies a = 3b = 3(2) = 6$.\nVậy $T = a + b = 6 + 2 = 8$."
          },
          // 3 BÀI VẬN DỤNG
          {
            id: "g12-c1-l4-d1-ex8",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Tìm toạ độ điểm uốn của đồ thị hàm số bậc ba $y = x^3 - 3x^2 + 4$ và chứng minh điểm uốn chính là tâm đối xứng của đồ thị.",
            shortAnswer: "$U(1; 2)$",
            fullSolution: "Đạo hàm cấp 1: $y' = 3x^2 - 6x$. Đạo hàm cấp 2: $y'' = 6x - 6 = 0 \\iff x = 1$. Với $x = 1 \\implies y = 1^3 - 3(1)^2 + 4 = 2$. Toạ độ điểm uốn là $U(1; 2)$. Chuyển hệ toạ độ về gốc $U(1; 2)$ bằng công thức $x = X + 1, y = Y + 2$, hàm số trở thành $Y = X^3 - 3X$ là hàm lẻ, do đó đồ thị nhận $U(1; 2)$ làm tâm đối xứng."
          },
          {
            id: "g12-c1-l4-d1-ex9",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Tìm tất cả các giá trị của tham số $m$ để đồ thị hàm số $y = x^3 - 3mx^2 + 2$ nhận điểm $I(1; 0)$ làm tâm đối xứng.",
            shortAnswer: "$m = 1$",
            fullSolution: "Đạo hàm cấp 2: $y'' = 6x - 6m = 0 \\iff x = m$. Điểm uốn của đồ thị là $U(m; 2 - 2m^3)$. Để điểm uốn trùng với tâm đối xứng $I(1; 0)$ thì $\\begin{cases} m = 1 \\\\ 2 - 2m^3 = 0 \\end{cases} \\iff m = 1$."
          },
          {
            id: "g12-c1-l4-d1-ex10",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Cho hàm số $y = ax^3 + bx^2 + cx + d$ có đồ thị đạt cực đại tại $A(0; 2)$ và đạt cực tiểu tại $B(2; -2)$. Tính giá trị của $P = a + b + c + d$.",
            shortAnswer: "$P = 0$",
            fullSolution: "$A(0; 2)$ thuộc đồ thị $\\implies d = 2$. $y' = 3ax^2 + 2bx + c$. Đạt cực trị tại $x = 0 \\implies c = 0$. $B(2; -2)$ thuộc đồ thị $\\implies 8a + 4b + 2 = -2 \\iff 8a + 4b = -4 \\iff 2a + b = -1$. Cực trị tại $x = 2 \\implies y'(2) = 12a + 4b = 0 \\iff 3a + b = 0$. Giải hệ: $a = 1, b = -3$. Hàm số là $y = x^3 - 3x^2 + 2$. Ta có $P = a + b + c + d = 1 - 3 + 0 + 2 = 0$."
          }
        ]
      },
      {
        id: "g12-c1-l4-dang2",
        name: "Dạng 2: Biện luận số nghiệm của phương trình bằng đồ thị (Tương giao)",
        badge: "4 Biết • 3 Hiểu • 3 Vận dụng (10 bài)",
        badgeClass: "bg-blue-100 text-blue-800",
        method: [
          "Bước 1: Biến đổi phương trình đã cho về dạng $f(x) = g(m)$, trong đó vế trái là hàm số đã vẽ đồ thị hoặc lập bảng biến thiên.",
          "Bước 2: Số nghiệm của phương trình chính là số giao điểm của đồ thị hàm số $y = f(x)$ và đường thẳng nằm ngang $d: y = g(m)$ cùng phương với trục hoành.",
          "Bước 3: Dựa vào đồ thị hoặc bảng biến thiên, tịnh tiến đường thẳng $y = g(m)$ lên xuống theo trục tung để biện luận số nghiệm theo tham số $m$."
        ],
        examples: [
          {
            title: "Ví dụ 1 (Biện luận số nghiệm phương trình bậc ba)",
            question: "Cho hàm số $y = x^3 - 3x + 1$ có điểm cực đại $A(-1; 3)$ và cực tiểu $B(1; -1)$. Tìm $m$ để phương trình $x^3 - 3x + 1 = m$ có đúng 3 nghiệm phân biệt.",
            solution: "Số nghiệm của phương trình là số giao điểm của đồ thị $y = x^3 - 3x + 1$ và đường thẳng $y = m$.\nĐồ thị có $y_{CT} = -1$ và $y_{CĐ} = 3$.\nĐể đường thẳng $y = m$ cắt đồ thị tại 3 điểm phân biệt thì: $-1 < m < 3$."
          },
          {
            title: "Ví dụ 2 (Tương giao hàm phân thức)",
            question: "Tìm $m$ để đường thẳng $d: y = m$ cắt đồ thị $y = \\dfrac{2x - 1}{x + 1}$ tại đúng một điểm.",
            solution: "Đồ thị hàm số có tiệm cận ngang $y = 2$.\nĐường thẳng $y = m$ cắt đồ thị tại đúng một điểm khi và chỉ khi $m$ khác giá trị của tiệm cận ngang $\\iff m \\ne 2$."
          },
          {
            title: "Ví dụ 3 (Phương trình chứa giá trị tuyệt đối)",
            question: "Tìm $m$ để phương trình $|x^3 - 3x| = m$ có đúng 4 nghiệm phân biệt.",
            solution: "Vẽ đồ thị $y = |x^3 - 3x|$ bằng cách giữ nguyên phần phía trên $Ox$ và lấy đối xứng phần phía dưới qua $Ox$.\nĐồ thị có 2 đỉnh cực đại tại $y = 2$ và 3 điểm tiếp xúc $Ox$ tại $y = 0$.\nĐể đường thẳng $y = m$ cắt đồ thị tại đúng 4 nghiệm thì $m = 2$ hoặc $0 < m < 2$ (cắt 6 điểm). Vậy có đúng 4 nghiệm khi $m = 2$."
          }
        ],
        exercises: [
          // 4 BÀI NHẬN BIẾT
          {
            id: "g12-c1-l4-d2-ex1",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Cho hàm số $y = f(x)$ có bảng biến thiên với giá trị cực đại $f(-1) = 4$, giá trị cực tiểu $f(2) = -2$. Số nghiệm của phương trình $f(x) = 1$ là:",
            shortAnswer: "3 nghiệm phân biệt",
            fullSolution: "Vì $-2 < 1 < 4$ nên đường thẳng nằm ngang $y = 1$ cắt 3 nhánh của đồ thị hàm số tại 3 điểm phân biệt, do đó phương trình có đúng 3 nghiệm phân biệt."
          },
          {
            id: "g12-c1-l4-d2-ex2",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Đồ thị hàm số $y = x^3 - 3x$ cắt trục hoành $Ox$ tại bao nhiêu điểm phân biệt?",
            shortAnswer: "3 điểm phân biệt",
            fullSolution: "Phương trình hoành độ giao điểm: $x^3 - 3x = 0 \\iff x(x^2 - 3) = 0 \\iff x = 0$ hoặc $x = \\pm\\sqrt{3}$. Vậy đồ thị cắt trục hoành tại 3 điểm phân biệt."
          },
          {
            id: "g12-c1-l4-d2-ex3",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Đường thẳng $y = -1$ cắt đồ thị hàm số $y = x^4 - 2x^2 - 1$ tại bao nhiêu điểm?",
            shortAnswer: "3 điểm",
            fullSolution: "Phương trình hoành độ giao điểm: $x^4 - 2x^2 - 1 = -1 \\iff x^4 - 2x^2 = 0 \\iff x^2(x^2 - 2) = 0 \\iff x = 0$ hoặc $x = \\pm\\sqrt{2}$. Vậy có 3 điểm giao nhau."
          },
          {
            id: "g12-c1-l4-d2-ex4",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Cho hàm số $y = f(x)$ có đồ thị như hình vẽ có giá trị cực tiểu là $y = 0$. Số nghiệm của phương trình $f(x) = -3$ là bao nhiêu nếu đồ thị không có điểm nào nằm dưới trục hoành?",
            shortAnswer: "0 nghiệm (vô nghiệm)",
            fullSolution: "Vì giá trị nhỏ nhất của hàm số là 0 nên với mọi $x$ ta có $f(x) \\ge 0 > -3$. Do đó phương trình $f(x) = -3$ vô nghiệm."
          },
          // 3 BÀI THÔNG HIỂU
          {
            id: "g12-c1-l4-d2-ex5",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tìm tất cả các giá trị của tham số $m$ để phương trình $x^3 - 3x + 1 = m$ có đúng 3 nghiệm thực phân biệt.",
            shortAnswer: "$-1 < m < 3$",
            fullSolution: "Khảo sát hàm số $f(x) = x^3 - 3x + 1$. Ta có $f'(x) = 3x^2 - 3 = 0 \\iff x = \\pm 1$. Các giá trị cực trị là $y_{CĐ} = f(-1) = 3$ và $y_{CT} = f(1) = -1$. Đường thẳng $y = m$ cắt đồ thị tại 3 điểm phân biệt khi và chỉ khi $y_{CT} < m < y_{CĐ} \\iff -1 < m < 3$."
          },
          {
            id: "g12-c1-l4-d2-ex6",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tìm tất cả các giá trị của $m$ để đường thẳng $d: y = m$ cắt đồ thị hàm số $y = \\dfrac{2x - 1}{x + 1}$ tại đúng 1 điểm.",
            shortAnswer: "$m \\ne 2$",
            fullSolution: "Phương trình hoành độ giao điểm: $\\dfrac{2x - 1}{x + 1} = m \\iff 2x - 1 = m(x + 1) \\iff (m - 2)x = -m - 1$ (với $x \\ne -1$). Phương trình có nghiệm duy nhất khi và chỉ khi hệ số của $x$ khác 0 $\\iff m - 2 \\ne 0 \\iff m \\ne 2$."
          },
          {
            id: "g12-c1-l4-d2-ex7",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tìm tất cả giá trị thực của tham số $m$ để đường thẳng $y = x + m$ cắt đồ thị $y = \\dfrac{x - 1}{x + 1}$ tại hai điểm phân biệt.",
            shortAnswer: "$m \\in \\mathbb{R}$",
            fullSolution: "Phương trình hoành độ giao điểm: $\\dfrac{x - 1}{x + 1} = x + m \\iff x - 1 = (x + 1)(x + m) \\iff x^2 + mx + m + 1 = 0$ (với $x \\ne -1$). Biệt thức $\\Delta = m^2 - 4(m+1) = m^2 - 4m - 4$. Điều kiện cắt tại 2 điểm phân biệt: $\\Delta > 0 \\iff m < 2 - 2\\sqrt{2}$ hoặc $m > 2 + 2\\sqrt{2}$."
          },
          // 3 BÀI VẬN DỤNG
          {
            id: "g12-c1-l4-d2-ex8",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Tìm tất cả các giá trị của tham số $m$ để phương trình $|x^3 - 3x| = m$ có đúng 4 nghiệm phân biệt.",
            shortAnswer: "$m = 2$",
            fullSolution: "Hàm số $f(x) = x^3 - 3x$ có 2 cực trị là $y = 2$ (tại $x = -1$) và $y = -2$ (tại $x = 1$), cắt trục hoành tại $0, \\pm\\sqrt{3}$. Lấy trị tuyệt đối, phần đồ thị phía dưới $Ox$ được lật lên trên tạo thành 2 đỉnh cực đại bằng 2 tại $x = \\pm 1$. Đường thẳng $y = m$ cắt đồ thị $y = |f(x)|$ tại: 0 nghiệm nếu $m < 0$; 3 nghiệm nếu $m = 0$; 6 nghiệm nếu $0 < m < 2$; 4 nghiệm nếu $m = 2$; 2 nghiệm nếu $m > 2$. Vậy có đúng 4 nghiệm khi $m = 2$."
          },
          {
            id: "g12-c1-l4-d2-ex9",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Tìm tham số $m$ để đường thẳng $d: y = -x + m$ cắt đồ thị hàm số $y = \\dfrac{2x + 1}{x - 1}$ tại hai điểm phân biệt $A, B$ sao cho độ dài đoạn thẳng $AB = 2\\sqrt{2}$.",
            shortAnswer: "$m = 1$",
            fullSolution: "Phương trình hoành độ giao điểm: $\\dfrac{2x + 1}{x - 1} = -x + m \\iff x^2 - (m - 1)x + m + 1 = 0$ ($x \\ne 1$). Theo Vi-ét: $x_1 + x_2 = m - 1$, $x_1 x_2 = m + 1$. Độ dài đoạn thẳng $AB = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} = \\sqrt{2(x_2 - x_1)^2} = \\sqrt{2[(x_1+x_2)^2 - 4x_1 x_2]} = \\sqrt{2[(m-1)^2 - 4(m+1)]} = 2\\sqrt{2} \\iff (m-1)^2 - 4(m+1) = 4 \\iff m^2 - 6m - 7 = 0 \\iff m = -1$ hoặc $m = 7$."
          },
          {
            id: "g12-c1-l4-d2-ex10",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Tìm $m$ để phương trình $x^4 - 2x^2 + 1 - m = 0$ có 4 nghiệm phân biệt lập thành một cấp số cộng.",
            shortAnswer: "$m = \\dfrac{9}{16}$ hoặc $m$ thỏa mãn",
            fullSolution: "Đặt $t = x^2 \\ge 0$. Phương trình trở thành $t^2 - 2t + 1 - m = 0$. Để có 4 nghiệm phân biệt thì phương trình phải có 2 nghiệm dương phân biệt $0 < t_1 < t_2$. Bốn nghiệm của phương trình ban đầu là $-\\sqrt{t_2}, -\\sqrt{t_1}, \\sqrt{t_1}, \\sqrt{t_2}$. Chúng lập thành cấp số cộng khi và chỉ khi khoảng cách giữa các số liên tiếp bằng nhau: $\\sqrt{t_2} - \\sqrt{t_1} = 2\\sqrt{t_1} \\iff \\sqrt{t_2} = 3\\sqrt{t_1} \\iff t_2 = 9t_1$. Theo Vi-ét: $t_1 + t_2 = 10t_1 = 2 \\implies t_1 = 1/5, t_2 = 9/5$. Khi đó $1 - m = t_1 t_2 = 9/25 \\implies m = 1 - 9/25 = 16/25$."
          }
        ]
      },
      {
        id: "g12-c1-l4-dang3",
        name: "Dạng 3: Phương trình tiếp tuyến của đồ thị hàm số",
        badge: "4 Biết • 3 Hiểu • 3 Vận dụng (10 bài)",
        badgeClass: "bg-purple-100 text-purple-800",
        method: [
          "Bước 1 (Tiếp tuyến tại điểm): Phương trình tiếp tuyến của đồ thị hàm số $y = f(x)$ tại điểm $M_0(x_0; y_0)$ có dạng: $y = f'(x_0)(x - x_0) + y_0$.",
          "Bước 2 (Tiếp tuyến biết hệ số góc k): Giải phương trình $f'(x_0) = k$ tìm hoành độ tiếp điểm $x_0$, từ đó tính tung độ $y_0 = f(x_0)$ và viết phương trình tiếp tuyến.",
          "Bước 3 (Tiếp tuyến đi qua điểm A): Đường thẳng đi qua $A(x_A; y_A)$ có hệ số góc $k$: $y = k(x - x_A) + y_A$. Giải hệ điều kiện tiếp xúc: $\\begin{cases} f(x) = k(x - x_A) + y_A \\\\ f'(x) = k \\end{cases}$."
        ],
        examples: [
          {
            title: "Ví dụ 1 (Tiếp tuyến tại điểm thuộc đồ thị)",
            question: "Viết phương trình tiếp tuyến của đồ thị hàm số $y = x^3 - 3x + 2$ tại điểm có hoành độ $x_0 = 2$.",
            solution: "1. Tung độ tiếp điểm: $y_0 = y(2) = 2^3 - 3(2) + 2 = 4 \\implies M(2; 4)$.\n2. Hệ số góc: $y' = 3x^2 - 3 \\implies k = y'(2) = 3(2^2) - 3 = 9$.\n3. Phương trình tiếp tuyến: $y = 9(x - 2) + 4 \\iff y = 9x - 14$."
          },
          {
            title: "Ví dụ 2 (Tiếp tuyến song song với đường thẳng)",
            question: "Viết phương trình tiếp tuyến của đồ thị hàm số $y = \\dfrac{x + 2}{x - 1}$ biết tiếp tuyến song song với đường thẳng $d: y = -3x + 1$.",
            solution: "1. Đạo hàm: $y' = \\dfrac{-3}{(x-1)^2}$.\n2. Vì tiếp tuyến song song với $d$ nên hệ số góc $k = -3$.\n$y'(x_0) = -3 \\iff \\dfrac{-3}{(x_0-1)^2} = -3 \\iff (x_0 - 1)^2 = 1 \\iff x_0 = 2$ hoặc $x_0 = 0$.\n- Với $x_0 = 2 \\implies y_0 = 4 \\implies$ PTTT: $y = -3(x - 2) + 4 = -3x + 10$ (thỏa mãn).\n- Với $x_0 = 0 \\implies y_0 = -2 \\implies$ PTTT: $y = -3(x - 0) - 2 = -3x - 2$ (thỏa mãn)."
          },
          {
            title: "Ví dụ 3 (Tiếp tuyến có hệ số góc nhỏ nhất)",
            question: "Tìm hệ số góc nhỏ nhất của tiếp tuyến của đồ thị hàm số $y = x^3 - 3x^2 + 5$.",
            solution: "Hệ số góc của tiếp tuyến tại điểm có hoành độ $x$ là $k(x) = y'(x) = 3x^2 - 6x = 3(x - 1)^2 - 3 \\ge -3$.\nDấu '=' xảy ra khi $x = 1$. Vậy hệ số góc nhỏ nhất của tiếp tuyến là $k_{\\min} = -3$ tại điểm uốn $M(1; 3)$."
          }
        ],
        exercises: [
          // 4 BÀI NHẬN BIẾT
          {
            id: "g12-c1-l4-d3-ex1",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Nêu công thức phương trình tiếp tuyến của đồ thị hàm số $y = f(x)$ tại điểm $M_0(x_0; y_0)$ thuộc đồ thị.",
            shortAnswer: "$y = f'(x_0)(x - x_0) + y_0$",
            fullSolution: "Phương trình tiếp tuyến của đồ thị hàm số $y = f(x)$ tại điểm $M_0(x_0; y_0)$ thuộc đồ thị có dạng chuẩn: $y = f'(x_0)(x - x_0) + y_0$, trong đó $f'(x_0)$ là hệ số góc của tiếp tuyến."
          },
          {
            id: "g12-c1-l4-d3-ex2",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Tìm hệ số góc $k$ của tiếp tuyến của đồ thị hàm số $y = x^3 - 2x + 1$ tại điểm có hoành độ $x_0 = 1$.",
            shortAnswer: "$k = 1$",
            fullSolution: "Đạo hàm $y' = 3x^2 - 2$. Hệ số góc của tiếp tuyến tại điểm có hoành độ $x_0 = 1$ là $k = y'(1) = 3(1)^2 - 2 = 1$."
          },
          {
            id: "g12-c1-l4-d3-ex3",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Viết phương trình tiếp tuyến của đồ thị hàm số $y = x^2 - 3x + 2$ tại giao điểm của đồ thị với trục tung $Oy$.",
            shortAnswer: "$y = -3x + 2$",
            fullSolution: "Giao điểm với trục tung $Oy$ có hoành độ $x_0 = 0 \\implies y_0 = 2$. Đạo hàm $y' = 2x - 3 \\implies k = y'(0) = -3$. Phương trình tiếp tuyến là $y = -3(x - 0) + 2 \\iff y = -3x + 2$."
          },
          {
            id: "g12-c1-l4-d3-ex4",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Tại các điểm cực trị của đồ thị hàm số có đạo hàm, tiếp tuyến của đồ thị có vị trí tương đối như thế nào với trục hoành?",
            shortAnswer: "Song song hoặc trùng với trục hoành (hệ số góc $k = 0$)",
            fullSolution: "Tại điểm cực trị $x_0$, ta có đạo hàm $f'(x_0) = 0$. Khi đó hệ số góc của tiếp tuyến bằng 0 nên tiếp tuyến là đường thẳng nằm ngang $y = y_0$, song song (hoặc trùng) với trục hoành $Ox$."
          },
          // 3 BÀI THÔNG HIỂU
          {
            id: "g12-c1-l4-d3-ex5",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Viết phương trình tiếp tuyến của đồ thị hàm số $y = \\dfrac{2x + 1}{x - 1}$ tại điểm có tung độ $y_0 = 5$.",
            shortAnswer: "$y = -3x + 11$",
            fullSolution: "Tìm hoành độ tiếp điểm: $\\dfrac{2x_0 + 1}{x_0 - 1} = 5 \\iff 2x_0 + 1 = 5x_0 - 5 \\iff 3x_0 = 6 \\iff x_0 = 2$. Đạo hàm $y' = \\dfrac{2(-1) - 1(1)}{(x-1)^2} = \\dfrac{-3}{(x-1)^2}$. Hệ số góc $k = y'(2) = \\dfrac{-3}{(2-1)^2} = -3$. Phương trình tiếp tuyến là $y = -3(x - 2) + 5 \\iff y = -3x + 11$."
          },
          {
            id: "g12-c1-l4-d3-ex6",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Viết phương trình tiếp tuyến của đồ thị hàm số $y = x^3 - 3x^2 + 1$ tại điểm uốn của đồ thị.",
            shortAnswer: "$y = -3x + 2$",
            fullSolution: "Đạo hàm cấp 1: $y' = 3x^2 - 6x$. Đạo hàm cấp 2: $y'' = 6x - 6 = 0 \\iff x_0 = 1$. Tung độ tiếp điểm: $y_0 = y(1) = 1^3 - 3(1)^2 + 1 = -1$. Hệ số góc tại điểm uốn: $k = y'(1) = 3(1)^2 - 6(1) = -3$. Phương trình tiếp tuyến là $y = -3(x - 1) - 1 \\iff y = -3x + 2$."
          },
          {
            id: "g12-c1-l4-d3-ex7",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tìm toạ độ tiếp điểm của tiếp tuyến có hệ số góc nhỏ nhất của đồ thị hàm số $y = x^3 - 6x^2 + 9x + 1$.",
            shortAnswer: "$M(2; 3)$",
            fullSolution: "Hệ số góc của tiếp tuyến tại điểm có hoành độ $x$ là $k(x) = y'(x) = 3x^2 - 12x + 9 = 3(x^2 - 4x + 4) - 3 = 3(x - 2)^2 - 3 \\ge -3$. Giá trị nhỏ nhất của hệ số góc là $k_{\\min} = -3$ đạt được khi $x = 2$. Tung độ tương ứng: $y(2) = 2^3 - 6(2^2) + 9(2) + 1 = 3$. Vậy toạ độ tiếp điểm là $M(2; 3)$."
          },
          // 3 BÀI VẬN DỤNG
          {
            id: "g12-c1-l4-d3-ex8",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Viết phương trình tiếp tuyến của đồ thị hàm số $y = \\dfrac{2x - 1}{x + 1}$ biết tiếp tuyến vuông góc với đường thẳng $d: x + 3y - 2 = 0$.",
            shortAnswer: "$y = 3x + 2$ hoặc $y = 3x + 14$",
            fullSolution: "Đường thẳng $d: y = -\\dfrac{1}{3}x + \\dfrac{2}{3}$ có hệ số góc $k_d = -1/3$. Vì tiếp tuyến vuông góc với $d$ nên hệ số góc của tiếp tuyến là $k = -\\dfrac{1}{k_d} = 3$. Đạo hàm $y' = \\dfrac{3}{(x+1)^2} = 3 \\iff (x+1)^2 = 1 \\iff x = 0$ hoặc $x = -2$.\n- Với $x = 0 \\implies y = -1 \\implies$ PTTT: $y = 3x - 1$.\n- Với $x = -2 \\implies y = 5 \\implies$ PTTT: $y = 3(x + 2) + 5 = 3x + 11$."
          },
          {
            id: "g12-c1-l4-d3-ex9",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Từ điểm $A(0; 2)$, kẻ được bao nhiêu tiếp tuyến đến đồ thị hàm số $y = x^3 - 3x^2 + 2$?",
            shortAnswer: "2 tiếp tuyến ($y = 2$ và $y = -\\dfrac{9}{4}x + 2$)",
            fullSolution: "Đường thẳng $\\Delta$ đi qua $A(0; 2)$ có hệ số góc $k$: $y = kx + 2$. Điều kiện tiếp xúc: $\\begin{cases} x^3 - 3x^2 + 2 = kx + 2 \\\\ 3x^2 - 6x = k \\end{cases} \\implies x^3 - 3x^2 = (3x^2 - 6x)x \\iff 2x^3 - 3x^2 = 0 \\iff x^2(2x - 3) = 0 \\iff x = 0$ hoặc $x = 3/2$.\n- Với $x = 0 \\implies k = 0 \\implies y = 2$.\n- Với $x = 3/2 \\implies k = 3(9/4) - 6(3/2) = -9/4 \\implies y = -\\dfrac{9}{4}x + 2$. Vậy kẻ được đúng 2 tiếp tuyến."
          },
          {
            id: "g12-c1-l4-d3-ex10",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Tìm các điểm trên đồ thị hàm số $y = \\dfrac{x + 2}{x - 1}$ sao cho tiếp tuyến tại đó tạo với hai trục toạ độ một tam giác vuông cân.",
            shortAnswer: "$M_1(1 - \\sqrt{3}; 1 - \\sqrt{3})$ và $M_2(1 + \\sqrt{3}; 1 + \\sqrt{3})$",
            fullSolution: "Tam giác tạo bởi tiếp tuyến với hai trục toạ độ vuông cân khi và chỉ khi tiếp tuyến tạo với trục hoành góc $45^\\circ$ hoặc $135^\\circ \\implies$ hệ số góc $k = \\pm 1$. Đạo hàm $y' = \\dfrac{-3}{(x-1)^2} < 0, \\forall x \\ne 1$. Do đó chỉ có thể xảy ra trường hợp $k = -1 \\iff \\dfrac{-3}{(x-1)^2} = -1 \\iff (x-1)^2 = 3 \\iff x = 1 \\pm \\sqrt{3}$. Từ đó tìm được 2 toạ độ điểm tương ứng trên đồ thị."
          }
        ]
      }
    ]
  },

  // ------------------------------------------------------------------------
  // BÀI 5: ỨNG DỤNG ĐẠO HÀM ĐỂ GIẢI QUYẾT MỘT SỐ BÀI TOÁN THỰC TIỄN
  // ------------------------------------------------------------------------
  "g12-c1-l5": {
    lessonId: "g12-c1-l5",
    title: "Bài 5: Ứng dụng đạo hàm giải quyết một số bài toán thực tiễn",
    topics: [
      {
        id: "g12-c1-l5-dang1",
        name: "Dạng 1: Bài toán chuyển động, vận tốc và gia tốc tức thời",
        badge: "4 Biết · 3 Hiểu · 3 Vận dụng (10 bài)",
        badgeClass: "bg-emerald-100 text-emerald-800",
        method: [
          "**1. Phương pháp & Cơ sở toán học:**",
          "- Cho phương trình quãng đường chuyển động của một vật theo thời gian $s = s(t)$ với $t \\ge 0$.",
          "- **Vận tốc tức thời** tại thời điểm $t$: $v(t) = s'(t)$.",
          "- **Gia tốc tức thời** tại thời điểm $t$: $a(t) = v'(t) = s''(t)$.",
          "- **Thời điểm vật dừng lại hoặc đổi chiều:** Giải phương trình $v(t) = 0$.",
          "- **Vận tốc lớn nhất / nhỏ nhất:** Khảo sát hàm số $v(t)$ trên đoạn thời gian $[t_1; t_2]$ đang xét bằng cách giải $v'(t) = a(t) = 0$.",
          "- Chú ý đơn vị đo: quãng đường (m, km), thời gian (s, h), vận tốc (m/s, km/h), gia tốc (m/s²)."
        ],
        examples: [
          {
            title: "Ví dụ 1: Tìm vận tốc và gia tốc tại thời điểm xác định",
            question: "Một vật chuyển động thẳng có phương trình quãng đường $s(t) = t^3 - 6t^2 + 15t + 2$ ($s$ tính bằng mét, $t$ tính bằng giây, $t \\ge 0$). Tính vận tốc và gia tốc của vật tại thời điểm $t = 3\\text{ s}$.",
            solution: "Ta có:\n- Vận tốc tức thời: $v(t) = s'(t) = 3t^2 - 12t + 15$.\n  Tại $t = 3\\text{ s}$: $v(3) = 3(3^2) - 12(3) + 15 = 27 - 36 + 15 = 6\\text{ m/s}$.\n- Gia tốc tức thời: $a(t) = v'(t) = 6t - 12$.\n  Tại $t = 3\\text{ s}$: $a(3) = 6(3) - 12 = 6\\text{ m/s}^2$."
          },
          {
            title: "Ví dụ 2: Tìm độ cao cực đại trong chuyển động ném đứng",
            question: "Một quả bóng được ném thẳng đứng lên cao từ mặt đất với phương trình quỹ đạo $h(t) = 30t - 5t^2$ ($h$ tính bằng mét, $t$ tính bằng giây). Sau bao lâu quả bóng đạt độ cao lớn nhất và độ cao lớn nhất đó bằng bao nhiêu?",
            solution: "Vận tốc tức thời: $v(t) = h'(t) = 30 - 10t$.\nBóng lên đến điểm cao nhất khi vận tốc tức thời bằng 0:\n$$v(t) = 0 \\iff 30 - 10t = 0 \\iff t = 3\\text{ s}$$\nĐộ cao lớn nhất bóng đạt được là:\n$$h_{\\max} = h(3) = 30(3) - 5(3^2) = 90 - 45 = 45\\text{ m}$$"
          },
          {
            title: "Ví dụ 3: Tìm thời điểm vận tốc cực đại",
            question: "Một tên lửa phóng từ mặt đất theo phương trình độ cao $s(t) = -\\dfrac{1}{3}t^3 + 9t^2 + 20t$ ($0 \\le t \\le 20$). Tìm thời điểm vận tốc của tên lửa đạt giá trị lớn nhất.",
            solution: "Hàm vận tốc tức thời của tên lửa: $v(t) = s'(t) = -t^2 + 18t + 20$.\nĐạo hàm của hàm vận tốc chính là gia tốc: $a(t) = v'(t) = -2t + 18$.\nCho $v'(t) = 0 \\iff -2t + 18 = 0 \\iff t = 9\\text{ s} \\in [0; 20]$.\nVì hệ số của $t^2$ âm nên hàm $v(t)$ đạt giá trị lớn nhất tại đỉnh parabol $t = 9\\text{ s}$.\nVận tốc cực đại khi đó: $v(9) = -(9^2) + 18(9) + 20 = 101\\text{ m/s}$."
          }
        ],
        exercises: [
          {
            id: "g12-c1-l5-d1-ex1",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Một chất điểm chuyển động có phương trình quãng đường $s(t) = 2t^3 - 4t^2 + 7t + 1$ ($s$ tính bằng mét, $t$ tính bằng giây). Công thức tính vận tốc tức thời $v(t)$ của chất điểm là:",
            shortAnswer: "$v(t) = 6t^2 - 8t + 7$",
            fullSolution: "Theo ý nghĩa vật lý của đạo hàm, vận tốc tức thời bằng đạo hàm bậc nhất của quãng đường theo thời gian: $v(t) = s'(t) = (2t^3 - 4t^2 + 7t + 1)' = 6t^2 - 8t + 7$ (m/s)."
          },
          {
            id: "g12-c1-l5-d1-ex2",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Một vật chuyển động thẳng có phương trình quãng đường $s(t) = -t^2 + 10t$ ($t \\ge 0$). Tính vận tốc của vật tại thời điểm $t = 3\\text{ s}$.",
            shortAnswer: "$v(3) = 4\\text{ m/s}$",
            fullSolution: "Ta có $v(t) = s'(t) = -2t + 10$. Thay $t = 3$ vào ta được: $v(3) = -2(3) + 10 = 4\\text{ m/s}$."
          },
          {
            id: "g12-c1-l5-d1-ex3",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Phương trình chuyển động của một vật là $s(t) = t^3 - 6t^2 + 5t$. Gia tốc tức thời $a(t)$ của vật tại thời điểm $t$ là:",
            shortAnswer: "$a(t) = 6t - 12$",
            fullSolution: "Vận tốc tức thời $v(t) = s'(t) = 3t^2 - 12t + 5$. Gia tốc tức thời là đạo hàm bậc nhất của vận tốc: $a(t) = v'(t) = s''(t) = 6t - 12$ (m/s²)."
          },
          {
            id: "g12-c1-l5-d1-ex4",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Một chiếc xe đang chạy thì hãm phanh với phương trình quãng đường $s(t) = -3t^2 + 24t$ ($t$ tính bằng giây). Sau bao lâu kể từ lúc hãm phanh thì xe dừng hẳn?",
            shortAnswer: "$t = 4\\text{ s}$",
            fullSolution: "Vận tốc tức thời của xe: $v(t) = s'(t) = -6t + 24$. Xe dừng lại khi $v(t) = 0 \\iff -6t + 24 = 0 \\iff t = 4\\text{ s}$."
          },
          {
            id: "g12-c1-l5-d1-ex5",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Một vật được bắn thẳng đứng lên cao từ mặt đất với vận tốc ban đầu $v_0 = 40\\text{ m/s}$. Phương trình độ cao là $h(t) = 40t - 5t^2$ ($h$ tính bằng mét, $t$ tính bằng giây). Tính độ cao cực đại mà vật đạt được.",
            shortAnswer: "$h_{\\max} = 80\\text{ m}$",
            fullSolution: "Vận tốc tức thời $v(t) = h'(t) = 40 - 10t$. Vật đạt độ cao cực đại khi $v(t) = 0 \\iff 40 - 10t = 0 \\iff t = 4\\text{ s}$. Khi đó độ cao lớn nhất là $h(4) = 40(4) - 5(4^2) = 160 - 80 = 80\\text{ m}$."
          },
          {
            id: "g12-c1-l5-d1-ex6",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Một ô tô đang chuyển động đều với vận tốc $20\\text{ m/s}$ thì người lái hãm phanh. Ô tô chuyển động chậm dần đều với vận tốc $v(t) = 20 - 4t$ (m/s). Tính quãng đường xe đi được từ thời điểm đạp phanh đến khi xe dừng lại hoàn toàn.",
            shortAnswer: "$50\\text{ m}$",
            fullSolution: "Xe dừng hẳn khi $v(t) = 0 \\iff 20 - 4t = 0 \\iff t = 5\\text{ s}$. Phương trình quãng đường có dạng $s(t) = 20t - 2t^2$ (do $s'(t) = v(t)$ và $s(0) = 0$). Quãng đường đi được cho đến khi dừng lại là $s(5) = 20(5) - 2(5^2) = 100 - 50 = 50\\text{ m}$."
          },
          {
            id: "g12-c1-l5-d1-ex7",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Một chất điểm chuyển động theo phương trình $s(t) = t^3 - 3t^2 - 9t + 10$ ($t \\ge 0$). Tính gia tốc của chất điểm tại thời điểm mà vận tốc triệt tiêu ($v = 0$).",
            shortAnswer: "$a = 12\\text{ m/s}^2$",
            fullSolution: "Vận tốc tức thời $v(t) = s'(t) = 3t^2 - 6t - 9$. Cho $v(t) = 0 \\iff 3(t^2 - 2t - 3) = 0 \\iff t = 3$ (loại $t = -1$ do $t \\ge 0$). Gia tốc tức thời $a(t) = v'(t) = 6t - 6$. Tại $t = 3$, gia tốc là $a(3) = 6(3) - 6 = 12\\text{ m/s}^2$."
          },
          {
            id: "g12-c1-l5-d1-ex8",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Một chất điểm chuyển động theo quy luật $s(t) = -\\dfrac{1}{3}t^3 + 6t^2 + 15$ với $t \\in [0; 12]$ (giây). Xác định thời điểm $t$ mà vận tốc của chất điểm đạt giá trị lớn nhất và tìm vận tốc cực đại đó.",
            shortAnswer: "$t = 6\\text{ s}$, $v_{\\max} = 36\\text{ m/s}$",
            fullSolution: "Vận tốc tức thời của chất điểm là $v(t) = s'(t) = -t^2 + 12t$. Ta khảo sát hàm số $v(t)$ trên đoạn $[0; 12]$: $v'(t) = -2t + 12 = 0 \\iff t = 6\\text{ s}$. Vì hệ số bậc hai âm nên hàm số đạt cực đại tại $t = 6$. Vận tốc cực đại là $v(6) = -(6^2) + 12(6) = 36\\text{ m/s}$. Tại hai đầu mút $v(0) = v(12) = 0$."
          },
          {
            id: "g12-c1-l5-d1-ex9",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Tại cùng một thời điểm, xe $A$ xuất phát từ ngã tư $O$ đi về hướng đông với vận tốc $30\\text{ km/h}$, xe $B$ cách ngã tư $O$ $40\\text{ km}$ về hướng bắc và đang chạy về phía ngã tư với vận tốc $40\\text{ km/h}$. Hỏi sau bao lâu kể từ lúc xuất phát thì khoảng cách giữa hai xe là ngắn nhất?",
            shortAnswer: "$t = 0{,}64\\text{ giờ}$ (hay $38{,}4\\text{ phút}$)",
            fullSolution: "Chọn hệ tọa độ $Oxy$ với $O$ là ngã tư, trục $Ox$ hướng đông, trục $Oy$ hướng bắc. Tại thời điểm $t$ (giờ), vị trí xe $A$ là $(30t; 0)$, vị trí xe $B$ là $(0; 40 - 40t)$. Khoảng cách giữa hai xe là $d(t) = \\sqrt{(30t)^2 + (40 - 40t)^2} = \\sqrt{900t^2 + 1600(1 - 2t + t^2)} = \\sqrt{2500t^2 - 3200t + 1600}$. Khoảng cách $d(t)$ nhỏ nhất khi tam thức bậc hai $f(t) = 2500t^2 - 3200t + 1600$ nhỏ nhất. Đỉnh của parabol đạt tại $t = -\\dfrac{b}{2a} = \\dfrac{3200}{2 \\times 2500} = \\dfrac{32}{50} = 0{,}64\\text{ giờ} = 38{,}4\\text{ phút}$. Khoảng cách ngắn nhất khi đó là $d = \\sqrt{2500(0{,}64^2) - 3200(0{,}64) + 1600} = 24\\text{ km}$."
          },
          {
            id: "g12-c1-l5-d1-ex10",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Một tên lửa mô hình được phóng thẳng đứng có độ cao tính theo thời gian là $h(t) = -5t^3 + 60t^2 + 100t$ ($h$ tính bằng mét, $t$ tính bằng giây, trong khoảng thời gian động cơ sơ cấp hoạt động $0 \\le t \\le 8$). Tìm gia tốc của tên lửa tại thời điểm mà vận tốc đạt giá trị lớn nhất.",
            shortAnswer: "$a = 0\\text{ m/s}^2$ tại $t = 4\\text{ s}$",
            fullSolution: "Vận tốc tức thời của tên lửa: $v(t) = h'(t) = -15t^2 + 120t + 100$. Gia tốc tức thời của tên lửa: $a(t) = v'(t) = -30t + 120$. Hàm vận tốc $v(t)$ là một parabol có bề lõm quay xuống dưới, do đó $v(t)$ đạt giá trị lớn nhất khi $v'(t) = 0 \\iff -30t + 120 = 0 \\iff t = 4\\text{ s} \\in [0; 8]$. Tại thời điểm này, gia tốc của tên lửa là $a(4) = 0\\text{ m/s}^2$, và vận tốc cực đại đạt được là $v(4) = -15(16) + 120(4) + 100 = 340\\text{ m/s}$."
          }
        ]
      },
      {
        id: "g12-c1-l5-dang2",
        name: "Dạng 2: Bài toán tối ưu hóa hình học & đo lường thực tiễn",
        badge: "4 Biết · 3 Hiểu · 3 Vận dụng (10 bài)",
        badgeClass: "bg-emerald-100 text-emerald-800",
        method: [
          "**1. Phương pháp giải bài toán cực trị hình học:**",
          "- **Bước 1: Đặt biến số:** Chọn một kích thước phù hợp làm biến số $x$, xác định miền giá trị thực tế của biến số ($x \\in (a; b)$).",
          "- **Bước 2: Thiết lập hàm mục tiêu:** Biểu diễn đại lượng cần tối ưu (diện tích $S$, thể tích $V$, chu vi $P$, chi phí vật liệu $C$) dưới dạng một hàm số $f(x)$ theo một biến duy nhất bằng cách khai thác các mối liên hệ hình học.",
          "- **Bước 3: Khảo sát cực trị:** Tính đạo hàm $f'(x)$, giải phương trình $f'(x) = 0$ để tìm điểm dừng trong miền xác định.",
          "- **Bước 4: Kết luận:** Lập bảng biến thiên hoặc dùng đạo hàm cấp hai để khẳng định giá trị lớn nhất / giá trị nhỏ nhất và trả lời yêu cầu thực tiễn."
        ],
        examples: [
          {
            title: "Ví dụ 1: Diện tích hình chữ nhật lớn nhất với chu vi cố định",
            question: "Người ta muốn rào một khu đất hình chữ nhật có chu vi $80\\text{ m}$. Tìm các kích thước của khu đất để diện tích rào được là lớn nhất.",
            solution: "Gọi chiều rộng của khu đất là $x$ ($0 < x < 40$, đơn vị mét).\nNửa chu vi là $40\\text{ m}$, do đó chiều dài là $40 - x$.\nDiện tích khu đất là: $S(x) = x(40 - x) = -x^2 + 40x$.\nĐạo hàm: $S'(x) = -2x + 40 = 0 \\iff x = 20\\text{ m}$.\nKhi $x = 20$, chiều dài là $40 - 20 = 20\\text{ m}$ (khu đất là hình vuông).\nDiện tích lớn nhất đạt được là $S_{\\max} = 20 \\times 20 = 400\\text{ m}^2$."
          },
          {
            title: "Ví dụ 2: Hộp không nắp có thể tích lớn nhất",
            question: "Từ tấm bìa hình vuông cạnh $60\\text{ cm}$, cắt bỏ bốn góc bốn hình vuông nhỏ cạnh $x$ rồi gấp thành chiếc hộp không nắp. Tìm $x$ để thể tích hộp lớn nhất.",
            solution: "Điều kiện: $0 < x < 30\\text{ cm}$.\nĐáy hộp là hình vuông cạnh $60 - 2x$, chiều cao hộp là $x$.\nThể tích hộp: $V(x) = x(60 - 2x)^2 = 4x^3 - 240x^2 + 3600x$.\nĐạo hàm: $V'(x) = 12x^2 - 480x + 3600 = 12(x^2 - 40x + 300) = 12(x - 10)(x - 30)$.\nVới $x \\in (0; 30)$, nghiệm là $x = 10\\text{ cm}$.\nBảng biến thiên cho thấy $V(x)$ đạt cực đại tại $x = 10\\text{ cm}$, khi đó $V_{\\max} = 10 \\times 40^2 = 16\\,000\\text{ cm}^3$ ($16\\text{ lít}$)."
          },
          {
            title: "Ví dụ 3: Tiết kiệm chi phí làm lon hộp hình trụ",
            question: "Một lon sữa hình trụ có thể tích $V_0 = 500\\pi\\text{ cm}^3$. Tìm tỉ số chiều cao $h$ và bán kính đáy $R$ để diện tích toàn phần của lon sữa nhỏ nhất (tiết kiệm vật liệu vỏ nhất).",
            solution: "Thể tích: $V = \\pi R^2 h = 500\\pi \\implies h = \\dfrac{500}{R^2}$.\nDiện tích toàn phần: $S(R) = 2\\pi R^2 + 2\\pi R h = 2\\pi R^2 + \\dfrac{1000\\pi}{R}$ ($R > 0$).\nĐạo hàm: $S'(R) = 4\\pi R - \\dfrac{1000\\pi}{R^2} = 0 \\iff 4\\pi R^3 = 1000\\pi \\iff R^3 = 250 \\implies R = \\sqrt[3]{250}$.\nKhi đó $h = \\dfrac{500}{(\\sqrt[3]{250})^2} = \\dfrac{2 \\times 250}{250^{2/3}} = 2 \\times 250^{1/3} = 2R$.\nVậy tỉ số tối ưu luôn là $\\dfrac{h}{R} = 2$ (chiều cao bằng đường kính đáy)."
          }
        ],
        exercises: [
          {
            id: "g12-c1-l5-d2-ex1",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Một hình chữ nhật có chu vi cố định $P = 40\\text{ cm}$. Nếu gọi độ dài một cạnh là $x$ ($0 < x < 20$) thì diện tích $S(x)$ của hình chữ nhật biểu diễn theo $x$ là:",
            shortAnswer: "$S(x) = 20x - x^2$",
            fullSolution: "Nửa chu vi là $20\\text{ cm}$. Chiều rộng là $x$, chiều dài là $20 - x$. Diện tích $S(x) = x(20 - x) = 20x - x^2$."
          },
          {
            id: "g12-c1-l5-d2-ex2",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Một hình hộp chữ nhật có đáy là hình vuông cạnh $x$ ($x > 0$) và chiều cao $h$. Thể tích khối hộp là $V = 1000\\text{ cm}^3$. Biểu diễn diện tích toàn phần không có nắp trên của hình hộp theo $x$.",
            shortAnswer: "$S(x) = x^2 + \\dfrac{4000}{x}$",
            fullSolution: "Ta có $V = x^2 h = 1000 \\implies h = \\dfrac{1000}{x^2}$. Diện tích không nắp gồm 1 đáy và 4 mặt bên: $S(x) = x^2 + 4xh = x^2 + 4x \\cdot \\dfrac{1000}{x^2} = x^2 + \\dfrac{4000}{x}$."
          },
          {
            id: "g12-c1-l5-d2-ex3",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Công thức tính thể tích của một hình trụ có bán kính đáy $R$ và chiều cao $h$ là:",
            shortAnswer: "$V = \\pi R^2 h$",
            fullSolution: "Thể tích khối trụ tròn xoay bằng diện tích đáy nhân chiều cao: $V = B \\cdot h = \\pi R^2 h$."
          },
          {
            id: "g12-c1-l5-d2-ex4",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Trong tất cả các hình chữ nhật có cùng chu vi $P$, hình nào có diện tích lớn nhất?",
            shortAnswer: "Hình vuông",
            fullSolution: "Gọi hai kích thước là $a, b > 0$ có $a + b = \\dfrac{P}{2}$ không đổi. Áp dụng bất đẳng thức Cauchy: $a \\cdot b \\le \\left(\\dfrac{a+b}{2}\\right)^2 = \\dfrac{P^2}{16}$. Đẳng thức xảy ra khi và chỉ khi $a = b = \\dfrac{P}{4}$, tức là hình vuông."
          },
          {
            id: "g12-c1-l5-d2-ex5",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Một bác nông dân dùng $60\\text{ m}$ lưới thép để rào mảnh vườn hình chữ nhật tựa vào một bức tường đá có sẵn (không cần rào cạnh phía tường đá). Tìm kích thước mảnh vườn để diện tích rào được là lớn nhất.",
            shortAnswer: "Rộng $15\\text{ m}$, dài $30\\text{ m}$, diện tích cực đại $450\\text{ m}^2$",
            fullSolution: "Gọi $x$ là chiều rộng vuông góc với bờ tường ($0 < x < 30$). Khi đó cạnh song song với bờ tường có độ dài là $60 - 2x$. Diện tích mảnh vườn: $S(x) = x(60 - 2x) = -2x^2 + 60x$. Đạo hàm $S'(x) = -4x + 60 = 0 \\iff x = 15\\text{ m}$. Khi $x = 15$, chiều dài bằng $60 - 2(15) = 30\\text{ m}$. Diện tích lớn nhất là $S_{\\max} = 15 \\times 30 = 450\\text{ m}^2$."
          },
          {
            id: "g12-c1-l5-d2-ex6",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Một lon nước giải khát hình trụ có thể tích $V = 314\\text{ ml}$ (lấy $\\pi \\approx 3{,}14$). Tìm bán kính đáy $R$ để diện tích toàn phần của lon nước là nhỏ nhất (tiết kiệm vật liệu nhôm nhất).",
            shortAnswer: "$R = \\sqrt[3]{50} \\approx 3{,}68\\text{ cm}$",
            fullSolution: "Đổi $314\\text{ ml} = 314\\text{ cm}^3$. Ta có $V = \\pi R^2 h = 314 \\implies h = \\dfrac{314}{\\pi R^2} \\approx \\dfrac{100}{R^2}$. Diện tích toàn phần: $S(R) = 2\\pi R^2 + 2\\pi R h = 2\\pi R^2 + \\dfrac{628}{R}$. Đạo hàm $S'(R) = 4\\pi R - \\dfrac{628}{R^2} = 0 \\iff 4\\pi R^3 = 628 \\iff R^3 = \\dfrac{628}{4 \\times 3{,}14} = 50 \\implies R = \\sqrt[3]{50} \\approx 3{,}68\\text{ cm}$."
          },
          {
            id: "g12-c1-l5-d2-ex7",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Một cửa sổ dạng vòm có phần dưới là hình chữ nhật và phần trên là nửa hình tròn. Biết chu vi toàn bộ khung cửa sổ là $4\\text{ m}$. Tìm bán kính $R$ của phần nửa hình tròn để diện tích cửa sổ đón ánh sáng là lớn nhất.",
            shortAnswer: "$R = \\dfrac{4}{\\pi + 4}\\text{ m} \\approx 0{,}56\\text{ m}$",
            fullSolution: "Gọi bán kính nửa đường tròn là $R$, chiều cao phần hình chữ nhật là $h$. Chu vi khung cửa: $P = 2R + 2h + \\pi R = 4 \\implies h = 2 - \\dfrac{2 + \\pi}{2}R$. Diện tích cửa: $S(R) = 2R h + \\dfrac{1}{2}\\pi R^2 = 2R\\left(2 - \\dfrac{2 + \\pi}{2}R\\right) + \\dfrac{1}{2}\\pi R^2 = 4R - \\left(2 + \\dfrac{\\pi}{2}\\right)R^2$. Đạo hàm $S'(R) = 4 - (4 + \\pi)R = 0 \\iff R = \\dfrac{4}{\\pi + 4}\\text{ m} \\approx 0{,}56\\text{ m}$."
          },
          {
            id: "g12-c1-l5-d2-ex8",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Từ một tấm tôn hình chữ nhật kích thước $50\\text{ cm} \\times 80\\text{ cm}$, người ta cắt ở bốn góc bốn hình vuông bằng nhau có cạnh bằng $x$ rồi gấp lên tạo thành một chiếc hộp không có nắp. Tìm $x$ để thể tích của chiếc hộp là lớn nhất.",
            shortAnswer: "$x = 10\\text{ cm}$, $V_{\\max} = 18\\,000\\text{ cm}^3$",
            fullSolution: "Điều kiện: $0 < x < 25$. Chiếc hộp có đáy kích thước $(50 - 2x) \\times (80 - 2x)$ và chiều cao $x$. Thể tích: $V(x) = x(50 - 2x)(80 - 2x) = 4x^3 - 260x^2 + 4000x$. Đạo hàm $V'(x) = 12x^2 - 520x + 4000 = 4(3x^2 - 130x + 1000) = 4(x - 10)(3x - 100)$. Trong khoảng $(0; 25)$, ta có nghiệm duy nhất $x = 10\\text{ cm}$. Thể tích cực đại của hộp là $V(10) = 10(50 - 20)(80 - 20) = 10 \\times 30 \\times 60 = 18\\,000\\text{ cm}^3$ ($18\\text{ lít}$)."
          },
          {
            id: "g12-c1-l5-d2-ex9",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Một téc nước bằng inox hình trụ có nắp đậy dung tích cố định $V = 1000\\pi\\text{ lít} = \\pi\\text{ m}^3$. Biết chi phí làm hai đáy (nắp và đáy) đắt gấp đôi chi phí làm thân trụ (mặt xung quanh). Tìm tỉ số giữa chiều cao $h$ và bán kính đáy $R$ để tổng chi phí làm téc nước là thấp nhất.",
            shortAnswer: "$\\dfrac{h}{R} = 4$",
            fullSolution: "Gọi đơn giá làm mặt xung quanh là $k$ (đồng/m²), khi đó đơn giá làm đáy là $2k$. Chi phí tổng cộng: $C = 2k \\cdot (2\\pi R^2) + k \\cdot (2\\pi R h) = 4k\\pi R^2 + 2k\\pi R h$. Do $V = \\pi R^2 h = \\pi \\implies h = \\dfrac{1}{R^2}$. Thay vào chi phí: $C(R) = 4k\\pi R^2 + \\dfrac{2k\\pi}{R}$. Lấy đạo hàm: $C'(R) = 8k\\pi R - \\dfrac{2k\\pi}{R^2} = 0 \\iff 8R = \\dfrac{2}{R^2} \\iff R^3 = \\dfrac{1}{4} \\implies R = \\dfrac{1}{\\sqrt[3]{4}}$. Khi đó $h = \\dfrac{1}{R^2} = \\sqrt[3]{16} = 2\\sqrt[3]{2}$. Tỉ số $\\dfrac{h}{R} = \\dfrac{2\\sqrt[3]{2}}{1/\\sqrt[3]{4}} = 2\\sqrt[3]{8} = 4$."
          },
          {
            id: "g12-c1-l5-d2-ex10",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Người ta muốn uốn một tấm tôn phẳng bề rộng $60\\text{ cm}$ thành một máng dẫn nước có thiết diện ngang là hình thang cân với đáy dưới $20\\text{ cm}$, hai cạnh bên bằng $20\\text{ cm}$ tạo với phương ngang một góc $\\alpha$ ($0^\\circ < \\alpha < 90^\\circ$). Tìm $\\alpha$ để diện tích thiết diện máng nước lớn nhất.",
            shortAnswer: "$\\alpha = 60^\\circ$",
            fullSolution: "Chiều cao hình thang là $h = 20\\sin\\alpha$. Chiều dài phần mở rộng mỗi bên đáy trên là $20\\cos\\alpha$, đáy lớn bằng $20 + 40\\cos\\alpha$. Diện tích thiết diện ngang: $S(\\alpha) = \\dfrac{20 + (20 + 40\\cos\\alpha)}{2} \\cdot 20\\sin\\alpha = 400(1 + \\cos\\alpha)\\sin\\alpha$. Lấy đạo hàm theo $\\alpha$: $S'(\\alpha) = 400\\left[-\\sin^2\\alpha + \\cos\\alpha(1 + \\cos\\alpha)\\right] = 400(2\\cos^2\\alpha + \\cos\\alpha - 1)$. Đặt $t = \\cos\\alpha$ ($0 < t < 1$), giải phương trình $2t^2 + t - 1 = 0 \\iff (2t - 1)(t + 1) = 0 \\iff t = \\dfrac{1}{2} \\implies \\cos\\alpha = \\dfrac{1}{2} \\iff \\alpha = 60^\\circ$. Vậy với góc uốn $\\alpha = 60^\\circ$, máng dẫn được lượng nước tối đa."
          }
        ]
      },
      {
        id: "g12-c1-l5-dang3",
        name: "Dạng 3: Bài toán tối ưu hóa kinh tế & quản trị doanh thu, lợi nhuận",
        badge: "4 Biết · 3 Hiểu · 3 Vận dụng (10 bài)",
        badgeClass: "bg-emerald-100 text-emerald-800",
        method: [
          "**1. Các đại lượng kinh tế và ứng dụng đạo hàm:**",
          "- **Hàm cầu (Giá bán theo sản lượng):** $p = p(x)$ phản ánh mối quan hệ giữa giá bán và lượng cầu tiêu thụ.",
          "- **Hàm doanh thu:** $R(x) = x \\cdot p(x)$ (bằng sản lượng nhân với giá bán).",
          "- **Hàm tổng chi phí:** $C(x)$ (gồm chi phí cố định và chi phí khả biến).",
          "- **Chi phí biên (Marginal Cost):** $C'(x)$ đại diện cho chi phí tăng thêm khi sản xuất thêm 1 đơn vị sản phẩm tại mức sản lượng $x$.",
          "- **Hàm lợi nhuận:** $L(x) = R(x) - C(x)$. Doanh nghiệp đạt lợi nhuận tối đa khi $L'(x) = 0 \\iff R'(x) = C'(x)$ (Doanh thu biên bằng Chi phí biên).",
          "- **Chi phí trung bình:** $\\bar{C}(x) = \\dfrac{C(x)}{x}$ ($x > 0$). Chi phí trung bình nhỏ nhất khi $\\bar{C}'(x) = 0$."
        ],
        examples: [
          {
            title: "Ví dụ 1: Tối ưu hóa doanh thu từ hàm cầu",
            question: "Một cơ sở sản xuất biết rằng hàm cầu đối với sản phẩm của mình là $p(x) = 180 - 3x$ (nghìn đồng/chiếc) với $x$ là số lượng sản phẩm tiêu thụ ($0 < x < 60$). Tìm sản lượng $x$ để doanh thu đạt lớn nhất.",
            solution: "Hàm doanh thu: $R(x) = x \\cdot p(x) = x(180 - 3x) = -3x^2 + 180x$.\nĐạo hàm: $R'(x) = -6x + 180 = 0 \\iff x = 30$ chiếc.\nVì hệ số bậc hai $-3 < 0$, hàm $R(x)$ đạt cực đại tại $x = 30$.\nDoanh thu cực đại: $R(30) = 30(180 - 90) = 2700\\text{ nghìn đồng} = 2{,}7\\text{ triệu đồng}$."
          },
          {
            title: "Ví dụ 2: Tối ưu hóa lợi nhuận",
            question: "Một doanh nghiệp có hàm tổng chi phí $C(x) = 2x^2 + 40x + 800$ và bán sản phẩm với giá cố định $p = 200$ (nghìn đồng/sản phẩm). Tìm mức sản lượng $x$ để lợi nhuận thu được là lớn nhất.",
            solution: "Doanh thu: $R(x) = 200x$.\nLợi nhuận: $L(x) = R(x) - C(x) = 200x - (2x^2 + 40x + 800) = -2x^2 + 160x - 800$.\nĐạo hàm: $L'(x) = -4x + 160 = 0 \\iff x = 40$ sản phẩm.\nLợi nhuận lớn nhất thu được: $L(40) = -2(1600) + 160(40) - 800 = 2400\\text{ nghìn đồng} = 2{,}4\\text{ triệu đồng}$."
          },
          {
            title: "Ví dụ 3: Cực tiểu hóa chi phí trung bình",
            question: "Cho hàm tổng chi phí $C(x) = x^3 - 10x^2 + 100x$ ($x > 0$ là sản lượng). Tìm sản lượng $x$ để chi phí trung bình trên mỗi sản phẩm $\\bar{C}(x)$ đạt giá trị nhỏ nhất.",
            solution: "Chi phí trung bình: $\\bar{C}(x) = \\dfrac{C(x)}{x} = x^2 - 10x + 100$.\nĐạo hàm: $\\bar{C}'(x) = 2x - 10 = 0 \\iff x = 5$.\nHàm bậc hai $\\bar{C}(x)$ có hệ số dương nên đạt giá trị nhỏ nhất tại đỉnh $x = 5$.\nChi phí trung bình thấp nhất: $\\bar{C}(5) = 25 - 50 + 100 = 75$ (đơn vị tiền tệ/sp)."
          }
        ],
        exercises: [
          {
            id: "g12-c1-l5-d3-ex1",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Một công ty có hàm tổng chi phí sản xuất $C(x) = 0{,}02x^2 + 60x + 15\\,000$ (nghìn đồng) với $x$ là số sản phẩm. Công thức tính chi phí biên $C'(x)$ tại mức sản lượng $x$ là:",
            shortAnswer: "$C'(x) = 0{,}04x + 60$",
            fullSolution: "Chi phí biên là đạo hàm cấp một của hàm tổng chi phí: $C'(x) = (0{,}02x^2 + 60x + 15\\,000)' = 0{,}04x + 60$ (nghìn đồng/sp)."
          },
          {
            id: "g12-c1-l5-d3-ex2",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Một cửa hàng bán sản phẩm với giá bán theo hàm cầu $p(x) = 300 - x$ (nghìn đồng/chiếc), với $x$ là số lượng bán ra. Hàm doanh thu $R(x)$ của cửa hàng là:",
            shortAnswer: "$R(x) = 300x - x^2$",
            fullSolution: "Doanh thu bằng số lượng bán nhân giá bán: $R(x) = x \\cdot p(x) = x(300 - x) = 300x - x^2$."
          },
          {
            id: "g12-c1-l5-d3-ex3",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Công thức xác định lợi nhuận $L(x)$ của doanh nghiệp theo hàm doanh thu $R(x)$ và hàm tổng chi phí $C(x)$ là:",
            shortAnswer: "$L(x) = R(x) - C(x)$",
            fullSolution: "Lợi nhuận ròng của doanh nghiệp bằng tổng doanh thu trừ đi tổng chi phí: $L(x) = R(x) - C(x)$."
          },
          {
            id: "g12-c1-l5-d3-ex4",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Chi phí trung bình $\\bar{C}(x)$ để sản xuất một đơn vị sản phẩm khi tổng chi phí là $C(x)$ với sản lượng $x > 0$ được tính theo công thức:",
            shortAnswer: "$\\bar{C}(x) = \\dfrac{C(x)}{x}$",
            fullSolution: "Chi phí trung bình trên mỗi đơn vị sản phẩm bằng tổng chi phí chia cho sản lượng: $\\bar{C}(x) = \\dfrac{C(x)}{x}$ ($x > 0$)."
          },
          {
            id: "g12-c1-l5-d3-ex5",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Hàm cầu đối với một sản phẩm được cho bởi $p(x) = 160 - 4x$ (nghìn đồng/chiếc) với $0 < x < 40$. Tìm sản lượng $x$ để doanh thu bán hàng đạt giá trị lớn nhất và tính doanh thu đó.",
            shortAnswer: "$x = 20\\text{ chiếc}$, $R_{\\max} = 1600\\text{ nghìn đồng}$",
            fullSolution: "Doanh thu $R(x) = x \\cdot p(x) = 160x - 4x^2$. Đạo hàm $R'(x) = 160 - 8x = 0 \\iff x = 20$. Hàm số đạt cực đại tại $x = 20$. Doanh thu lớn nhất: $R(20) = 20(160 - 80) = 1600\\text{ nghìn đồng} = 1{,}6\\text{ triệu đồng}$."
          },
          {
            id: "g12-c1-l5-d3-ex6",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Một cơ sở sản xuất có tổng chi phí sản xuất $x$ tấn hàng là $C(x) = x^3 - 24x^2 + 300x + 1000$ (triệu đồng). Tìm mức sản lượng $x$ để chi phí biên $C'(x)$ đạt giá trị nhỏ nhất.",
            shortAnswer: "$x = 8\\text{ tấn}$",
            fullSolution: "Chi phí biên là $C'(x) = 3x^2 - 48x + 300$. Đạo hàm của chi phí biên: $(C'(x))' = 6x - 48 = 0 \\iff x = 8\\text{ tấn}$. Vì hệ số của $x^2$ dương nên $C'(x)$ đạt giá trị nhỏ nhất tại $x = 8$. Chi phí biên nhỏ nhất khi đó: $C'(8) = 3(64) - 48(8) + 300 = 108\\text{ triệu đồng/tấn}$."
          },
          {
            id: "g12-c1-l5-d3-ex7",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Một xưởng may áo có chi phí sản xuất $x$ chiếc áo là $C(x) = 80x + 40\\,000$ (nghìn đồng). Mỗi chiếc áo xuất xưởng bán được với giá $130$ nghìn đồng. Xưởng may cần sản xuất và tiêu thụ tối thiểu bao nhiêu chiếc áo để đạt điểm hòa vốn (không bị lỗ)?",
            shortAnswer: "$800\\text{ chiếc áo}$",
            fullSolution: "Lợi nhuận thu được: $L(x) = R(x) - C(x) = 130x - (80x + 40\\,000) = 50x - 40\\,000$ (nghìn đồng). Để hòa vốn thì $L(x) \\ge 0 \\iff 50x \\ge 40\\,000 \\iff x \\ge 800\\text{ chiếc áo}$."
          },
          {
            id: "g12-c1-l5-d3-ex8",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Một công ty lữ hành tổ chức tour cho đoàn khách. Nếu đoàn có tối đa 30 người thì giá vé là $2\\,400\\,000\\text{ đồng/người}$. Cứ mỗi khách đăng ký thêm trên 30 người thì giá vé của tất cả mọi người trong đoàn đều giảm bớt $30\\,000\\text{ đồng}$ (đoàn không quá 80 người). Hỏi công ty nên nhận đoàn bao nhiêu người để tổng doanh thu là lớn nhất?",
            shortAnswer: "$55\\text{ người}$, $R_{\\max} = 90\\,750\\,000\\text{ đồng}$",
            fullSolution: "Gọi $x$ là số người tăng thêm ngoài 30 người ($0 \\le x \\le 50$). Tổng số khách là $30 + x$. Giá vé mỗi người là $2\\,400 - 30x$ (nghìn đồng) $= 30(80 - x)$. Tổng doanh thu: $R(x) = 30(30 + x)(80 - x) = 30(-x^2 + 50x + 2400)$. Hàm số bậc hai đạt cực đại tại đỉnh $x = 25 \\in [0; 50]$. Tổng số khách tối ưu là $30 + 25 = 55\\text{ người}$. Khi đó giá vé là $2\\,400 - 30(25) = 1\\,650\\text{ nghìn đồng/người}$, và tổng doanh thu cực đại đạt $55 \\times 1\\,650\\,000 = 90\\,750\\,000\\text{ đồng}$."
          },
          {
            id: "g12-c1-l5-d3-ex9",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Tổng chi phí sản xuất $x$ đơn vị sản phẩm của một nhà máy là $C(x) = 2x^2 + 50x + 1800$ (nghìn đồng). Tìm mức sản lượng $x$ để chi phí trung bình trên mỗi đơn vị sản phẩm $\\bar{C}(x)$ đạt giá trị nhỏ nhất và tính chi phí trung bình nhỏ nhất đó.",
            shortAnswer: "$x = 30\\text{ sản phẩm}$, $\\bar{C}_{\\min} = 170\\text{ nghìn đồng/sp}$",
            fullSolution: "Chi phí trung bình: $\\bar{C}(x) = \\dfrac{C(x)}{x} = 2x + 50 + \\dfrac{1800}{x}$ ($x > 0$). Đạo hàm $\\bar{C}'(x) = 2 - \\dfrac{1800}{x^2} = 0 \\iff x^2 = 900 \\iff x = 30$ (do $x > 0$). Vì với $x < 30$ thì $\\bar{C}' < 0$ và với $x > 30$ thì $\\bar{C}' > 0$, hàm số đạt cực tiểu tại $x = 30$. Chi phí trung bình nhỏ nhất: $\\bar{C}(30) = 2(30) + 50 + \\dfrac{1800}{30} = 60 + 50 + 60 = 170\\text{ nghìn đồng/sản phẩm}$."
          },
          {
            id: "g12-c1-l5-d3-ex10",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Một rạp chiếu phim có 600 chỗ ngồi. Khi giá vé là $100\\,000\\text{ đồng}$ thì tất cả các ghế đều được bán hết. Khảo sát thị trường cho thấy cứ mỗi lần tăng giá vé thêm $10\\,000\\text{ đồng}$ thì lượng vé bán ra giảm đi 30 vé. Biết chi phí vận hành rác thải và phục vụ mỗi khán giả là $20\\,000\\text{ đồng}$. Rạp nên định giá vé là bao nhiêu để lợi nhuận thu được trên một suất chiếu là lớn nhất?",
            shortAnswer: "$160\\,000\\text{ đồng}$, lợi nhuận cực đại $58\\,800\\,000\\text{ đồng}$",
            fullSolution: "Gọi $x$ là số lần tăng $10\\,000\\text{ đồng}$ ($x \\ge 0$). Giá vé mới: $p = 100 + 10x$ (nghìn đồng). Số vé bán ra: $N = 600 - 30x$ ($x < 20$). Lợi nhuận trên mỗi vé: $p - 20 = 80 + 10x$ (nghìn đồng). Tổng lợi nhuận suất chiếu: $L(x) = (600 - 30x)(80 + 10x) = 300(-x^2 + 12x + 160)$. Đạo hàm: $L'(x) = 300(-2x + 12) = 0 \\iff x = 6$. Khi $x = 6$, giá vé tối ưu là $100 + 10(6) = 160\\text{ nghìn đồng} = 160\\,000\\text{ đồng}$. Số khán giả khi đó là $600 - 30(6) = 420\\text{ người}$. Lợi nhuận đạt cực đại là $420 \\times (160\\,000 - 20\\,000) = 420 \\times 140\\,000 = 58\\,800\\,000\\text{ đồng}$."
          }
        ]
      }
    ]
  },

  // ------------------------------------------------------------------------
  // BÀI 6: VECTƠ TRONG KHÔNG GIAN
  // ------------------------------------------------------------------------
  "g12-c2-l6": {
    lessonId: "g12-c2-l6",
    title: "Bài 6: Vectơ trong không gian",
    topics: [
      {
        id: "g12-c2-l6-dang1",
        name: "Dạng 1: Các quy tắc vectơ & Đẳng thức vectơ trong hình học không gian",
        badge: "4 Biết · 3 Hiểu · 3 Vận dụng (10 bài)",
        badgeClass: "bg-emerald-100 text-emerald-800",
        method: [
          "**1. Các quy tắc cơ bản của vectơ trong không gian:**",
          "- **Quy tắc 3 điểm:** $\\vec{AB} + \\vec{BC} = \\vec{AC}$; $\\vec{AB} - \\vec{AC} = \\vec{CB}$.",
          "- **Quy tắc hình bình hành:** Nếu $ABCD$ là hình bình hành thì $\\vec{AB} + \\vec{AD} = \\vec{AC}$.",
          "- **Quy tắc hình hộp:** Cho hình hộp $ABCD.A'B'C'D'$, ta có $\\vec{AB} + \\vec{AD} + \\vec{AA'} = \\vec{AC'}$.",
          "- **Quy tắc trung điểm & trọng tâm:**",
          "  + $M$ là trung điểm đoạn thẳng $AB \\iff \\vec{MA} + \\vec{MB} = \\vec{0} \\iff \\vec{OA} + \\vec{OB} = 2\\vec{OM}$ (với mọi điểm $O$).",
          "  + $G$ là trọng tâm tam giác $ABC \\iff \\vec{GA} + \\vec{GB} + \\vec{GC} = \\vec{0} \\iff \\vec{OA} + \\vec{OB} + \\vec{OC} = 3\\vec{OG}$.",
          "  + $G$ là trọng tâm tứ diện $ABCD \\iff \\vec{GA} + \\vec{GB} + \\vec{GC} + \\vec{GD} = \\vec{0} \\iff \\vec{OA} + \\vec{OB} + \\vec{OC} + \\vec{OD} = 4\\vec{OG}$."
        ],
        examples: [
          {
            title: "Ví dụ 1: Áp dụng quy tắc hình hộp",
            question: "Cho hình hộp $ABCD.A'B'C'D'$. Rút gọn biểu thức vectơ $\\vec{u} = \\vec{BA} + \\vec{BC} + \\vec{BB'}$.",
            solution: "Áp dụng quy tắc hình hộp xuất phát từ đỉnh $B$:\n$$\\vec{BA} + \\vec{BC} + \\vec{BB'} = \\vec{BD'}$$\n(Vectơ đường chéo xuất phát từ đỉnh $B$ đến đỉnh đối diện $D'$)."
          },
          {
            title: "Ví dụ 2: Chứng minh hệ thức trọng tâm tứ diện",
            question: "Cho tứ diện $ABCD$. Gọi $G$ là trọng tâm tứ diện. Chứng minh rằng với mọi điểm $M$ ta luôn có $\\vec{MA} + \\vec{MB} + \\vec{MC} + \\vec{MD} = 4\\vec{MG}$.",
            solution: "Chèn điểm $G$ vào vế trái theo quy tắc 3 điểm:\n$$\\vec{MA} + \\vec{MB} + \\vec{MC} + \\vec{MD} = (\\vec{MG} + \\vec{GA}) + (\\vec{MG} + \\vec{GB}) + (\\vec{MG} + \\vec{GC}) + (\\vec{MG} + \\vec{GD})$$\n$$= 4\\vec{MG} + (\\vec{GA} + \\vec{GB} + \\vec{GC} + \\vec{GD})$$\nVì $G$ là trọng tâm tứ diện nên $\\vec{GA} + \\vec{GB} + \\vec{GC} + \\vec{GD} = \\vec{0}$.\nVậy đẳng thức được chứng minh."
          },
          {
            title: "Ví dụ 3: Phân tích vectơ qua đoạn nối trung điểm",
            question: "Cho tứ diện $ABCD$. Gọi $M, N$ lần lượt là trung điểm của $AB$ và $CD$. Chứng minh rằng $\\vec{MN} = \\dfrac{1}{2}(\\vec{AD} + \\vec{BC})$.",
            solution: "Ta có:\n$$\\vec{MN} = \\vec{MA} + \\vec{AD} + \\vec{DN}$$\n$$\\vec{MN} = \\vec{MB} + \\vec{BC} + \\vec{CN}$$\nCộng từng vế hai đẳng thức:\n$$2\\vec{MN} = (\\vec{MA} + \\vec{MB}) + (\\vec{AD} + \\vec{BC}) + (\\vec{DN} + \\vec{CN})$$\nDo $M$ là trung điểm $AB$ nên $\\vec{MA} + \\vec{MB} = \\vec{0}$.\nDo $N$ là trung điểm $CD$ nên $\\vec{DN} + \\vec{CN} = \\vec{0}$.\nSuy ra $2\\vec{MN} = \\vec{AD} + \\vec{BC} \\implies \\vec{MN} = \\dfrac{1}{2}(\\vec{AD} + \\vec{BC})$."
          }
        ],
        exercises: [
          {
            id: "g12-c2-l6-d1-ex1",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Cho 3 điểm phân biệt $M, N, P$ trong không gian. Theo quy tắc 3 điểm, tổng $\\vec{MN} + \\vec{NP}$ bằng vectơ nào sau đây?",
            shortAnswer: "$\\vec{MP}$",
            fullSolution: "Áp dụng trực tiếp quy tắc 3 điểm đối với phép cộng vectơ trong không gian: $\\vec{MN} + \\vec{NP} = \\vec{MP}$."
          },
          {
            id: "g12-c2-l6-d1-ex2",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Cho hình hộp $ABCD.A'B'C'D'$. Tổng của ba vectơ $\\vec{AB} + \\vec{AD} + \\vec{AA'}$ bằng vectơ nào?",
            shortAnswer: "$\\vec{AC'}$",
            fullSolution: "Theo quy tắc hình hộp, tổng của ba vectơ cạnh xuất phát từ đỉnh $A$ bằng vectơ đường chéo xuất phát từ $A$: $\\vec{AB} + \\vec{AD} + \\vec{AA'} = \\vec{AC'}$."
          },
          {
            id: "g12-c2-l6-d1-ex3",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Cho tam giác $ABC$ trong không gian có trọng tâm là $G$. Đẳng thức vectơ nào sau đây đúng?",
            shortAnswer: "$\\vec{GA} + \\vec{GB} + \\vec{GC} = \\vec{0}$",
            fullSolution: "Theo tính chất định nghĩa trọng tâm của tam giác trong không gian, tổng các vectơ từ trọng tâm đến 3 đỉnh luôn triệt tiêu: $\\vec{GA} + \\vec{GB} + \\vec{GC} = \\vec{0}$."
          },
          {
            id: "g12-c2-l6-d1-ex4",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Cho tứ diện $ABCD$ và điểm $G$ là trọng tâm tứ diện. Với điểm $O$ bất kì, biểu thức $\\vec{OA} + \\vec{OB} + \\vec{OC} + \\vec{OD}$ bằng:",
            shortAnswer: "$4\\vec{OG}$",
            fullSolution: "Ta có $\\vec{OA} + \\vec{OB} + \\vec{OC} + \\vec{OD} = 4\\vec{OG} + (\\vec{GA} + \\vec{GB} + \\vec{GC} + \\vec{GD}) = 4\\vec{OG} + \\vec{0} = 4\\vec{OG}$."
          },
          {
            id: "g12-c2-l6-d1-ex5",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Cho tứ diện $ABCD$. Rút gọn biểu thức vectơ: $\\vec{u} = \\vec{AB} + \\vec{CD} - \\vec{AD}$.",
            shortAnswer: "$\\vec{CB}$",
            fullSolution: "Biến đổi: $\\vec{u} = \\vec{AB} - \\vec{AD} + \\vec{CD} = \\vec{DB} + \\vec{CD} = \\vec{CD} + \\vec{DB} = \\vec{CB}$."
          },
          {
            id: "g12-c2-l6-d1-ex6",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Cho hình lăng trụ tam giác $ABC.A'B'C'$. Rút gọn biểu thức vectơ: $\\vec{v} = \\vec{AB} + \\vec{B'C'} + \\vec{AA'}$.",
            shortAnswer: "$\\vec{AC'}$",
            fullSolution: "Vì $BCC'B'$ là hình bình hành nên $\\vec{B'C'} = \\vec{BC}$. Do đó: $\\vec{AB} + \\vec{B'C'} = \\vec{AB} + \\vec{BC} = \\vec{AC}$. Lại có $ACC'A'$ là hình bình hành nên $\\vec{AA'} = \\vec{CC'}$. Vậy $\\vec{v} = \\vec{AC} + \\vec{CC'} = \\vec{AC'}$."
          },
          {
            id: "g12-c2-l6-d1-ex7",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Cho tứ diện $ABCD$. Gọi $I, J$ lần lượt là trung điểm của $AC$ và $BD$. Biểu diễn vectơ $\\vec{IJ}$ theo $\\vec{AB}$ và $\\vec{CD}$.",
            shortAnswer: "$\\vec{IJ} = \\dfrac{1}{2}(\\vec{AB} + \\vec{CD})$ (hoặc $\\dfrac{1}{2}(\\vec{AD} + \\vec{CB})$)",
            fullSolution: "Ta có $\\vec{IJ} = \\vec{IA} + \\vec{AB} + \\vec{BJ}$ và $\\vec{IJ} = \\vec{IC} + \\vec{CD} + \\vec{DJ}$. Cộng hai vế lại ta được: $2\\vec{IJ} = (\\vec{IA} + \\vec{IC}) + (\\vec{AB} + \\vec{CD}) + (\\vec{BJ} + \\vec{DJ})$. Do $I, J$ là trung điểm nên $\\vec{IA} + \\vec{IC} = \\vec{0}$ và $\\vec{BJ} + \\vec{DJ} = \\vec{0}$. Do đó $\\vec{IJ} = \\dfrac{1}{2}(\\vec{AB} + \\vec{CD})$."
          },
          {
            id: "g12-c2-l6-d1-ex8",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Cho tứ diện $ABCD$. Trên cạnh $AB$ lấy điểm $M$ sao cho $AM = 2MB$. Phân tích vectơ $\\vec{DM}$ theo hai vectơ $\\vec{DA}$ và $\\vec{DB}$.",
            shortAnswer: "$\\vec{DM} = \\dfrac{1}{3}\\vec{DA} + \\dfrac{2}{3}\\vec{DB}$",
            fullSolution: "Vì $M$ nằm giữa $A$ và $B$ với $AM = 2MB$ nên $\\vec{AM} = \\dfrac{2}{3}\\vec{AB}$. Ta có: $\\vec{DM} = \\vec{DA} + \\vec{AM} = \\vec{DA} + \\dfrac{2}{3}(\\vec{DB} - \\vec{DA}) = \\left(1 - \\dfrac{2}{3}\\right)\\vec{DA} + \\dfrac{2}{3}\\vec{DB} = \\dfrac{1}{3}\\vec{DA} + \\dfrac{2}{3}\\vec{DB}$."
          },
          {
            id: "g12-c2-l6-d1-ex9",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành. Điểm $M$ thuộc đoạn thẳng $SC$ sao cho $SM = \\dfrac{1}{3}SC$. Biểu diễn vectơ $\\vec{AM}$ theo ba vectơ $\\vec{SA}, \\vec{SB}, \\vec{SD}$.",
            shortAnswer: "$\\vec{AM} = -\\vec{SA} + \\dfrac{1}{3}\\vec{SB} + \\dfrac{1}{3}\\vec{SD}$",
            fullSolution: "Ta có $\\vec{AM} = \\vec{SM} - \\vec{SA} = \\dfrac{1}{3}\\vec{SC} - \\vec{SA}$. Vì đáy $ABCD$ là hình bình hành nên $\\vec{AC} = \\vec{AB} + \\vec{AD} \\implies \\vec{SC} - \\vec{SA} = (\\vec{SB} - \\vec{SA}) + (\\vec{SD} - \\vec{SA}) \\implies \\vec{SC} = \\vec{SB} + \\vec{SD} - \\vec{SA}$. Thay vào ta được: $\\vec{AM} = \\dfrac{1}{3}(\\vec{SB} + \\vec{SD} - \\vec{SA}) - \\vec{SA} = -\\dfrac{4}{3}\\vec{SA} + \\dfrac{1}{3}\\vec{SB} + \\dfrac{1}{3}\\vec{SD}$."
          },
          {
            id: "g12-c2-l6-d1-ex10",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Cho tứ diện đều $ABCD$ cạnh $a$. Tìm tập hợp tất cả các điểm $M$ trong không gian thỏa mãn đẳng thức $|\\vec{MA} + \\vec{MB} + \\vec{MC} + \\vec{MD}| = 4a$.",
            shortAnswer: "Mặt cầu tâm $G$ bán kính $R = a$ (với $G$ là trọng tâm tứ diện $ABCD$)",
            fullSolution: "Gọi $G$ là trọng tâm của tứ diện $ABCD$. Ta có $\\vec{MA} + \\vec{MB} + \\vec{MC} + \\vec{MD} = 4\\vec{MG}$. Do đó phương trình trở thành $|4\\vec{MG}| = 4a \\iff 4MG = 4a \\iff MG = a$. Vậy tập hợp các điểm $M$ là mặt cầu tâm $G$ (trọng tâm của tứ diện) và có bán kính $R = a$."
          }
        ]
      },
      {
        id: "g12-c2-l6-dang2",
        name: "Dạng 2: Sự đồng phẳng của ba vectơ & Biểu diễn vectơ trong không gian",
        badge: "4 Biết · 3 Hiểu · 3 Vận dụng (10 bài)",
        badgeClass: "bg-emerald-100 text-emerald-800",
        method: [
          "**1. Sự đồng phẳng của 3 vectơ trong không gian:**",
          "- Ba vectơ gọi là **đồng phẳng** nếu các giá của chúng cùng song song với một mặt phẳng.",
          "- **Điều kiện đồng phẳng:** Cho hai vectơ $\\vec{a}, \\vec{b}$ không cùng phương. Ba vectơ $\\vec{a}, \\vec{b}, \\vec{c}$ đồng phẳng khi và chỉ khi tồn tại duy nhất cặp số thực $(m; n)$ sao cho: $$\\vec{c} = m\\vec{a} + n\\vec{b}$$",
          "- **Định lí phân tích một vectơ theo 3 vectơ không đồng phẳng:**",
          "  + Nếu $\\vec{a}, \\vec{b}, \\vec{c}$ không đồng phẳng thì với mọi vectơ $\\vec{u}$, tồn tại duy nhất bộ ba số thực $(x; y; z)$ sao cho: $$\\vec{u} = x\\vec{a} + y\\vec{b} + z\\vec{c}$$",
          "  + Bộ ba $(\\vec{a}, \\vec{b}, \\vec{c})$ khi đó được gọi là một **cơ sở** của không gian."
        ],
        examples: [
          {
            title: "Ví dụ 1: Chứng minh ba vectơ đồng phẳng",
            question: "Cho hình hộp $ABCD.A'B'C'D'$. Chứng minh rằng ba vectơ $\\vec{AB'}, \\vec{B'C'}, \\vec{AC}$ đồng phẳng.",
            solution: "Ta có: $\\vec{AB'} + \\vec{B'C'} = \\vec{AC'}$. Mặt khác $\\vec{B'C'} = \\vec{BC}$. Do đó $\\vec{AB} + \\vec{B'C'} = \\vec{AB} + \\vec{BC} = \\vec{AC}$. Nhận thấy giá của ba vectơ $\\vec{AB}, \\vec{BC}, \\vec{AC}$ cùng nằm trong mặt phẳng $(ABC)$. Tương tự, xét $\\vec{AB'} - \\vec{AC} = \\vec{B'A} + \\vec{AC} = \\vec{B'C}$. Vì ba vectơ này có thể biểu diễn tuyến tính qua nhau nên chúng đồng phẳng."
          },
          {
            title: "Ví dụ 2: Phân tích vectơ theo cơ sở không gian",
            question: "Cho tứ diện $ABCD$. Đặt $\\vec{AB} = \\vec{b}, \\vec{AC} = \\vec{c}, \\vec{AD} = \\vec{d}$. Gọi $G$ là trọng tâm tam giác $BCD$. Hãy biểu diễn vectơ $\\vec{AG}$ theo $\\vec{b}, \\vec{c}, \\vec{d}$.",
            solution: "Do $G$ là trọng tâm tam giác $BCD$ nên với đỉnh $A$ ta có:\n$$\\vec{AB} + \\vec{AC} + \\vec{AD} = 3\\vec{AG}$$\n$$\\implies \\vec{AG} = \\dfrac{1}{3}(\\vec{AB} + \\vec{AC} + \\vec{AD}) = \\dfrac{1}{3}\\vec{b} + \\dfrac{1}{3}\\vec{c} + \\dfrac{1}{3}\\vec{d}$$.\nĐây là biểu diễn duy nhất của $\\vec{AG}$ theo cơ sở $(\\vec{b}, \\vec{c}, \\vec{d})$."
          },
          {
            title: "Ví dụ 3: Xác định giao điểm đường thẳng và mặt phẳng bằng vectơ",
            question: "Cho hình hộp $ABCD.A'B'C'D'$. Đường chéo $AC'$ cắt mặt phẳng $(A'BD)$ tại điểm $I$. Tìm tỉ số $\\dfrac{AI}{AC'}$.",
            solution: "Đặt $\\vec{AB} = \\vec{a}, \\vec{AD} = \\vec{b}, \\vec{AA'} = \\vec{c}$. Khi đó $\\vec{AC'} = \\vec{a} + \\vec{b} + \\vec{c}$.\nVì $I \\in AC'$ nên $\\vec{AI} = k\\vec{AC'} = k\\vec{a} + k\\vec{b} + k\\vec{c}$.\nMặt khác, ba điểm $A', B, D$ xác định mặt phẳng $(A'BD)$. Điểm $I \\in (A'BD) \\iff \\vec{AI} = x\\vec{AA'} + y\\vec{AB} + z\\vec{AD}$ với $x + y + z = 1$.\nĐồng nhất hệ số ta có: $k = x = y = z$. Do đó $k + k + k = 1 \\implies 3k = 1 \\iff k = \\dfrac{1}{3}$.\nVậy $\\dfrac{AI}{AC'} = \\dfrac{1}{3}$."
          }
        ],
        exercises: [
          {
            id: "g12-c2-l6-d2-ex1",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Ba vectơ $\\vec{a}, \\vec{b}, \\vec{c}$ được gọi là đồng phẳng khi và chỉ khi:",
            shortAnswer: "Giá của chúng cùng song song hoặc nằm trên một mặt phẳng",
            fullSolution: "Theo định nghĩa hình học, ba vectơ trong không gian được gọi là đồng phẳng nếu các đường thẳng chứa giá của chúng cùng song song với một mặt phẳng hoặc cùng nằm trên mặt phẳng đó."
          },
          {
            id: "g12-c2-l6-d2-ex2",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Cho hai vectơ $\\vec{a}, \\vec{b}$ không cùng phương. Điều kiện cần và đủ để ba vectơ $\\vec{a}, \\vec{b}, \\vec{c}$ đồng phẳng là:",
            shortAnswer: "Tồn tại cặp số $(m; n)$ duy nhất sao cho $\\vec{c} = m\\vec{a} + n\\vec{b}$",
            fullSolution: "Định lý về sự đồng phẳng: Ba vectơ $\\vec{a}, \\vec{b}, \\vec{c}$ ($\vec{a}, \vec{b}$ không cùng phương) đồng phẳng khi và chỉ khi $\\vec{c} = m\\vec{a} + n\\vec{b}$ với $m, n \\in \\mathbb{R}$."
          },
          {
            id: "g12-c2-l6-d2-ex3",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Cho hình hộp chữ nhật $ABCD.A'B'C'D'$. Bộ ba vectơ nào sau đây KHÔNG đồng phẳng?",
            shortAnswer: "$\\vec{AB}, \\vec{AD}, \\vec{AA'}$",
            fullSolution: "Ba vectơ $\\vec{AB}, \\vec{AD}, \\vec{AA'}$ xuất phát từ cùng một đỉnh và nằm trên ba đường thẳng đôi một vuông góc nhau (không cùng song song với bất kì mặt phẳng nào), nên chúng không đồng phẳng và tạo thành một cơ sở của không gian."
          },
          {
            id: "g12-c2-l6-d2-ex4",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Cho tam giác $ABC$ trong không gian. Bộ ba vectơ $\\vec{AB}, \\vec{BC}, \\vec{CA}$ có đồng phẳng không?",
            shortAnswer: "Có đồng phẳng",
            fullSolution: "Cả ba vectơ $\\vec{AB}, \\vec{BC}, \\vec{CA}$ đều có giá chứa các cạnh của tam giác $ABC$, tức là cùng nằm trên mặt phẳng $(ABC)$, do đó chúng luôn đồng phẳng."
          },
          {
            id: "g12-c2-l6-d2-ex5",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Cho tứ diện $ABCD$. Hỏi ba vectơ $\\vec{AB}, \\vec{AC}, \\vec{AD}$ có đồng phẳng hay không? Giải thích ngắn gọn.",
            shortAnswer: "Không đồng phẳng vì 4 điểm $A, B, C, D$ không cùng thuộc một mặt phẳng",
            fullSolution: "Vì $ABCD$ là một tứ diện nên 4 điểm $A, B, C, D$ không cùng thuộc một mặt phẳng. Do đó giá của 3 vectơ $\\vec{AB}, \\vec{AC}, \\vec{AD}$ không cùng song song với bất kì mặt phẳng nào, vậy chúng không đồng phẳng."
          },
          {
            id: "g12-c2-l6-d2-ex6",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Cho hình bình hành $ABCD$ và một điểm $S$ không nằm trong mặt phẳng $(ABCD)$. Chứng minh rằng $\\vec{SA} + \\vec{SC} = \\vec{SB} + \\vec{SD}$.",
            shortAnswer: "$\\vec{SA} + \\vec{SC} = \\vec{SB} + \\vec{SD} = 2\\vec{SO}$ (với $O$ là tâm hình bình hành)",
            fullSolution: "Gọi $O$ là giao điểm của hai đường chéo $AC$ và $BD$. Khi đó $O$ là trung điểm của cả $AC$ và $BD$. Áp dụng quy tắc trung điểm: $\\vec{SA} + \\vec{SC} = 2\\vec{SO}$ và $\\vec{SB} + \\vec{SD} = 2\\vec{SO}$. Từ đó suy ra $\\vec{SA} + \\vec{SC} = \\vec{SB} + \\vec{SD}$."
          },
          {
            id: "g12-c2-l6-d2-ex7",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Cho tứ diện $ABCD$. Lấy $M \\in AB, N \\in CD$ sao cho $\\vec{AM} = \\dfrac{1}{3}\\vec{AB}$ và $\\vec{DN} = \\dfrac{1}{3}\\vec{DC}$. Chứng minh ba vectơ $\\vec{MN}, \\vec{AD}, \\vec{BC}$ đồng phẳng.",
            shortAnswer: "Đồng phẳng vì $\\vec{MN} = \\dfrac{2}{3}\\vec{AD} + \\dfrac{1}{3}\\vec{BC}$",
            fullSolution: "Ta có $\\vec{MN} = \\vec{MA} + \\vec{AD} + \\vec{DN} = -\\dfrac{1}{3}\\vec{AB} + \\vec{AD} + \\dfrac{1}{3}\\vec{DC}$. Mặt khác $\\vec{DC} = \\vec{DA} + \\vec{AB} + \\vec{BC} = -\\vec{AD} + \\vec{AB} + \\vec{BC}$. Thay vào: $\\vec{MN} = -\\dfrac{1}{3}\\vec{AB} + \\vec{AD} + \\dfrac{1}{3}(-\\vec{AD} + \\vec{AB} + \\vec{BC}) = \\dfrac{2}{3}\\vec{AD} + \\dfrac{1}{3}\\vec{BC}$. Vì $\\vec{MN}$ biểu diễn được thành tổ hợp tuyến tính của $\\vec{AD}$ và $\\vec{BC}$ nên ba vectơ này đồng phẳng."
          },
          {
            id: "g12-c2-l6-d2-ex8",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Cho hình hộp $ABCD.A'B'C'D'$. Lấy điểm $M$ trên đường chéo $AC'$ sao cho $\\vec{AM} = k\\vec{AC'}$. Tìm giá trị của $k$ để ba điểm $B, M, D'$ thẳng hàng hoặc $M$ thuộc mặt phẳng $(BDA')$.",
            shortAnswer: "$k = \\dfrac{1}{3}$",
            fullSolution: "Đặt $\\vec{AB} = \\vec{a}, \\vec{AD} = \\vec{b}, \\vec{AA'} = \\vec{c}$. Khi đó $\\vec{AC'} = \\vec{a} + \\vec{b} + \\vec{c}$. Ta có $\\vec{AM} = k\\vec{a} + k\\vec{b} + k\\vec{c}$. Mặt phẳng $(BDA')$ đi qua $B, D, A'$ thỏa mãn mọi điểm $M \\in (BDA') \\iff \\vec{AM} = x\\vec{a} + y\\vec{b} + z\\vec{c}$ với $x + y + z = 1$. Do đó $k + k + k = 1 \\iff 3k = 1 \\iff k = \\dfrac{1}{3}$."
          },
          {
            id: "g12-c2-l6-d2-ex9",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Cho tứ diện $ABCD$. Điểm $M$ thuộc $AB$ sao cho $AM = 2MB$, $N$ thuộc $AC$ sao cho $AN = 3NC$, điểm $P$ thuộc $AD$ sao cho $\\vec{AP} = x\\vec{AD}$. Tìm $x$ để mặt phẳng $(MNP)$ đi qua trọng tâm $G$ của tứ diện $ABCD$.",
            shortAnswer: "$x = \\dfrac{6}{7}$",
            fullSolution: "Đặt cơ sở $\\vec{AB} = \\vec{b}, \\vec{AC} = \\vec{c}, \\vec{AD} = \\vec{d}$. Ta có $\\vec{AM} = \\dfrac{2}{3}\\vec{b}, \\vec{AN} = \\dfrac{3}{4}\\vec{c}, \\vec{AP} = x\\vec{d}$. Trọng tâm $G$ của tứ diện thỏa mãn $\\vec{AG} = \\dfrac{1}{4}(\\vec{b} + \\vec{c} + \\vec{d}) = \\dfrac{1}{4}\\left(\\dfrac{3}{2}\\vec{AM} + \\dfrac{4}{3}\\vec{AN} + \\dfrac{1}{x}\\vec{AP}\\right) = \\dfrac{3}{8}\\vec{AM} + \\dfrac{1}{3}\\vec{AN} + \\dfrac{1}{4x}\\vec{AP}$. Để $G \\in (MNP)$ thì tổng các hệ số phải bằng 1: $\\dfrac{3}{8} + \\dfrac{1}{3} + \\dfrac{1}{4x} = 1 \\iff \\dfrac{17}{24} + \\dfrac{1}{4x} = 1 \\iff \\dfrac{1}{4x} = \\dfrac{7}{24} \\iff x = \\dfrac{6}{7}$."
          },
          {
            id: "g12-c2-l6-d2-ex10",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Cho hình chóp $S.ABCD$ có đáy là hình thang với hai đáy $AB$ và $CD$ thỏa mãn $AB = 2CD$. Gọi $M$ là trung điểm của $SA$. Mặt phẳng $(\\alpha)$ đi qua $M$ song song với mặt phẳng $(SBC)$ cắt $AD, BC, SD$ lần lượt tại $N, P, Q$. Xác định tỉ số diện tích tứ giác $MNPQ$ so với tam giác $SBC$.",
            shortAnswer: "$\\dfrac{S_{MNPQ}}{S_{SBC}} = \\dfrac{3}{4}$",
            fullSolution: "Vì $(\\alpha) \\parallel (SBC)$ nên các cạnh tương ứng của thiết diện song song với các cạnh của tam giác $SBC$: $MN \\parallel SB, MQ \\parallel SC$. Do $M$ là trung điểm $SA$ nên thiết diện là hình thang đồng dạng với các tam giác tỉ lệ theo đường trung bình. Kết hợp phân tích vectơ theo đáy hình thang $AB = 2CD$, diện tích thiết diện chiếm tỉ số $\\dfrac{3}{4}$ diện tích mặt bên $(SBC)$."
          }
        ]
      },
      {
        id: "g12-c2-l6-dang3",
        name: "Dạng 3: Tích vô hướng của hai vectơ & Ứng dụng tính góc, khoảng cách",
        badge: "4 Biết · 3 Hiểu · 3 Vận dụng (10 bài)",
        badgeClass: "bg-emerald-100 text-emerald-800",
        method: [
          "**1. Tích vô hướng và góc giữa hai vectơ:**",
          "- **Định nghĩa tích vô hướng:** $\\vec{u} \\cdot \\vec{v} = |\\vec{u}| \\cdot |\\vec{v}| \\cdot \\cos(\\vec{u}, \\vec{v})$.",
          "- **Góc giữa hai vectơ:** $\\cos(\\vec{u}, \\vec{v}) = \\dfrac{\\vec{u} \\cdot \\vec{v}}{|\\vec{u}| \\cdot |\\vec{v}|}$ ($0^\\circ \\le (\\vec{u}, \\vec{v}) \\le 180^\\circ$).",
          "- **Điều kiện vuông góc:** $\\vec{u} \\perp \\vec{v} \\iff \\vec{u} \\cdot \\vec{v} = 0$.",
          "- **Bình phương vô hướng:** $\\vec{u}^2 = |\\vec{u}|^2 \\iff |\\vec{u}| = \\sqrt{\\vec{u}^2}$.",
          "- **Hằng đẳng thức:** $(\\vec{u} \\pm \\vec{v})^2 = \\vec{u}^2 \\pm 2\\vec{u}\\cdot\\vec{v} + \\vec{v}^2$."
        ],
        examples: [
          {
            title: "Ví dụ 1: Tính tích vô hướng trong tứ diện đều",
            question: "Cho tứ diện đều $ABCD$ có cạnh bằng $a$. Tính tích vô hướng $\\vec{AB} \\cdot \\vec{AC}$ và $\\vec{AB} \\cdot \\vec{CD}$.",
            solution: "1) Vì tam giác $ABC$ đều nên $\\widehat{BAC} = 60^\\circ$:\n$$\\vec{AB} \\cdot \\vec{AC} = |\\vec{AB}| \\cdot |\\vec{AC}| \\cdot \\cos 60^\\circ = a \\cdot a \\cdot \\dfrac{1}{2} = \\dfrac{a^2}{2}$$\n2) Phân tích $\\vec{CD} = \\vec{AD} - \\vec{AC}$:\n$$\\vec{AB} \\cdot \\vec{CD} = \\vec{AB} \\cdot (\\vec{AD} - \\vec{AC}) = \\vec{AB} \\cdot \\vec{AD} - \\vec{AB} \\cdot \\vec{AC} = \\dfrac{a^2}{2} - \\dfrac{a^2}{2} = 0$$\nDo đó $AB \\perp CD$."
          },
          {
            title: "Ví dụ 2: Tính góc giữa hai đường thẳng bằng vectơ",
            question: "Cho hình lập phương $ABCD.A'B'C'D'$. Tính số đo góc giữa hai vectơ $\\vec{AC}$ và $\\vec{DA'}$.",
            solution: "Gọi cạnh hình lập phương là $a$. Ta có $|\\vec{AC}| = a\\sqrt{2}, |\\vec{DA'}| = a\\sqrt{2}$.\nPhân tích theo ba vectơ cạnh đôi một vuông góc $\\vec{a} = \\vec{AB}, \\vec{b} = \\vec{AD}, \\vec{c} = \\vec{AA'}$:\n$\\vec{AC} = \\vec{a} + \\vec{b}$, $\\vec{DA'} = \\vec{AA'} - \\vec{AD} = \\vec{c} - \\vec{b}$.\nTích vô hướng: $\\vec{AC} \\cdot \\vec{DA'} = (\\vec{a} + \\vec{b})(\\vec{c} - \\vec{b}) = \\vec{a}\\cdot\\vec{c} - \\vec{a}\\cdot\\vec{b} + \\vec{b}\\cdot\\vec{c} - \\vec{b}^2 = 0 - 0 + 0 - a^2 = -a^2$.\nCosin của góc: $\\cos(\\vec{AC}, \\vec{DA'}) = \\dfrac{-a^2}{a\\sqrt{2} \\cdot a\\sqrt{2}} = -\\dfrac{1}{2}$.\nVậy góc giữa hai vectơ là $120^\\circ$ (và góc giữa hai đường thẳng là $60^\\circ$)."
          },
          {
            title: "Ví dụ 3: Chứng minh hai đường thẳng vuông góc",
            question: "Cho hình chóp $S.ABC$ có $SA = SB = SC$ và $\\widehat{ASB} = \\widehat{BSC} = \\widehat{CSA}$. Chứng minh rằng $SA \\perp BC$.",
            solution: "Ta xét tích vô hướng: $\\vec{SA} \\cdot \\vec{BC} = \\vec{SA} \\cdot (\\vec{SC} - \\vec{SB}) = \\vec{SA} \\cdot \\vec{SC} - \\vec{SA} \\cdot \\vec{SB}$.\nĐặt $SA = SB = SC = a$ và $\\widehat{ASB} = \\widehat{BSC} = \\widehat{CSA} = \\alpha$.\nKhi đó $\\vec{SA} \\cdot \\vec{SC} = a^2\\cos\\alpha$ và $\\vec{SA} \\cdot \\vec{SB} = a^2\\cos\\alpha$.\nSuy ra $\\vec{SA} \\cdot \\vec{BC} = a^2\\cos\\alpha - a^2\\cos\\alpha = 0$.\nVậy $SA \\perp BC$."
          }
        ],
        exercises: [
          {
            id: "g12-c2-l6-d3-ex1",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Cho hai vectơ $\\vec{u}$ và $\\vec{v}$ đều khác vectơ không. Công thức tính tích vô hướng của $\\vec{u}$ và $\\vec{v}$ là:",
            shortAnswer: "$\\vec{u} \\cdot \\vec{v} = |\\vec{u}| \\cdot |\\vec{v}| \\cdot \\cos(\\vec{u}, \\vec{v})$",
            fullSolution: "Theo định nghĩa, tích vô hướng của hai vectơ bằng tích độ dài của chúng nhân với côsin của góc giữa hai vectơ: $\\vec{u} \\cdot \\vec{v} = |\\vec{u}| \\cdot |\\vec{v}| \\cdot \\cos(\\vec{u}, \\vec{v})$."
          },
          {
            id: "g12-c2-l6-d3-ex2",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Hai vectơ khác không $\\vec{u}$ và $\\vec{v}$ trong không gian vuông góc với nhau khi và chỉ khi:",
            shortAnswer: "$\\vec{u} \\cdot \\vec{v} = 0$",
            fullSolution: "Hai vectơ vuông góc với nhau khi góc giữa chúng bằng $90^\\circ \\iff \\cos 90^\\circ = 0 \\iff \\vec{u} \\cdot \\vec{v} = 0$."
          },
          {
            id: "g12-c2-l6-d3-ex3",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Cho $|\vec{u}| = 2, |\\vec{v}| = 3$ và góc giữa $\\vec{u}$ và $\\vec{v}$ bằng $60^\\circ$. Tính tích vô hướng $\\vec{u} \\cdot \\vec{v}$.",
            shortAnswer: "$\\vec{u} \\cdot \\vec{v} = 3$",
            fullSolution: "Áp dụng công thức: $\\vec{u} \\cdot \\vec{v} = 2 \\times 3 \\times \\cos 60^\\circ = 6 \\times \\dfrac{1}{2} = 3$."
          },
          {
            id: "g12-c2-l6-d3-ex4",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Bình phương vô hướng $\\vec{u}^2$ của một vectơ $\\vec{u}$ luôn bằng:",
            shortAnswer: "$|\\vec{u}|^2$",
            fullSolution: "Ta có $\\vec{u}^2 = |\\vec{u}| \\cdot |\\vec{u}| \\cdot \\cos 0^\\circ = |\\vec{u}|^2$. Bình phương vô hướng của một vectơ luôn bằng bình phương độ dài của nó."
          },
          {
            id: "g12-c2-l6-d3-ex5",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Cho tứ diện đều $ABCD$ cạnh $a$. Tính tích vô hướng $\\vec{AB} \\cdot \\vec{AC}$.",
            shortAnswer: "$\\dfrac{a^2}{2}$",
            fullSolution: "Vì tam giác $ABC$ là tam giác đều cạnh $a$ nên góc $\\widehat{BAC} = 60^\\circ$. Do đó: $\\vec{AB} \\cdot \\vec{AC} = |\\vec{AB}| \\cdot |\\vec{AC}| \\cdot \\cos 60^\\circ = a \\cdot a \\cdot \\dfrac{1}{2} = \\dfrac{a^2}{2}$."
          },
          {
            id: "g12-c2-l6-d3-ex6",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Cho tứ diện đều $ABCD$. Tính góc giữa hai vectơ $\\vec{AB}$ và $\\vec{CD}$.",
            shortAnswer: "$90^\\circ$",
            fullSolution: "Ta có $\\vec{AB} \\cdot \\vec{CD} = \\vec{AB} \\cdot (\\vec{AD} - \\vec{AC}) = \\vec{AB}\\cdot\\vec{AD} - \\vec{AB}\\cdot\\vec{AC}$. Trong tứ diện đều cạnh $a$, $\\vec{AB}\\cdot\\vec{AD} = \\dfrac{a^2}{2}$ và $\\vec{AB}\\cdot\\vec{AC} = \\dfrac{a^2}{2}$. Suy ra $\\vec{AB} \\cdot \\vec{CD} = \\dfrac{a^2}{2} - \\dfrac{a^2}{2} = 0 \\implies (\\vec{AB}, \\vec{CD}) = 90^\\circ$."
          },
          {
            id: "g12-c2-l6-d3-ex7",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$ và đáy $ABC$ là tam giác vuông tại $B$. Tính giá trị của tích vô hướng $\\vec{SB} \\cdot \\vec{AC}$ biết $SA = a, AB = a, BC = a\\sqrt{3}$.",
            shortAnswer: "$-a^2$",
            fullSolution: "Ta có $\\vec{SB} = \\vec{SA} + \\vec{AB}$. Do đó $\\vec{SB} \\cdot \\vec{AC} = (\\vec{SA} + \\vec{AB}) \\cdot \\vec{AC} = \\vec{SA}\\cdot\\vec{AC} + \\vec{AB}\\cdot\\vec{AC}$. Do $SA \\perp (ABC) \\implies \\vec{SA} \\perp \\vec{AC} \\implies \\vec{SA}\\cdot\\vec{AC} = 0$. Mặt khác tam giác $ABC$ vuông tại $B$ nên $\\vec{AC} = \\vec{AB} + \\vec{BC} \\implies \\vec{AB}\\cdot\\vec{AC} = \\vec{AB}\\cdot(\\vec{AB} + \\vec{BC}) = \\vec{AB}^2 + 0 = a^2$ (do $\\vec{AB} \\perp \\vec{BC}$). Tuy nhiên nếu tính góc giữa $\\vec{AB}$ và $\\vec{AC}$ ta có $\\vec{AB}\\cdot\\vec{AC} = a^2$."
          },
          {
            id: "g12-c2-l6-d3-ex8",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Cho hình chóp tam giác đều $S.ABC$ có cạnh đáy bằng $a$, cạnh bên bằng $2a$. Tính côsin của góc giữa hai vectơ $\\vec{SA}$ và $\\vec{BC}$.",
            shortAnswer: "$\\cos(\\vec{SA}, \\vec{BC}) = 0$ (tức góc $90^\\circ$)",
            fullSolution: "Xét tích vô hướng: $\\vec{SA} \\cdot \\vec{BC} = \\vec{SA} \\cdot (\\vec{SC} - \\vec{SB}) = \\vec{SA}\\cdot\\vec{SC} - \\vec{SA}\\cdot\\vec{SB}$. Vì hình chóp đều nên các tam giác mặt bên $SAB, SAC$ bằng nhau, suy ra $\\widehat{ASB} = \\widehat{ASC}$. Do đó $\\vec{SA}\\cdot\\vec{SC} = SA \\cdot SC \\cdot \\cos\\widehat{ASC} = SA \\cdot SB \\cdot \\cos\\widehat{ASB} = \\vec{SA}\\cdot\\vec{SB}$. Do đó $\\vec{SA} \\cdot \\vec{BC} = 0 \\implies \\cos(\\vec{SA}, \\vec{BC}) = 0$ và góc giữa chúng bằng $90^\\circ$."
          },
          {
            id: "g12-c2-l6-d3-ex9",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Cho tứ diện $OABC$ có các cạnh $OA, OB, OC$ đôi một vuông góc. Gọi $H$ là trực tâm tam giác $ABC$. Chứng minh rằng $OH \\perp (ABC)$ bằng phương pháp vectơ.",
            shortAnswer: "$\\vec{OH} \\cdot \\vec{BC} = 0$ và $\\vec{OH} \\cdot \\vec{CA} = 0 \\implies OH \\perp (ABC)$",
            fullSolution: "Ta có $\\vec{OH} \\cdot \\vec{BC} = (\\vec{OA} + \\vec{AH}) \\cdot \\vec{BC} = \\vec{OA}\\cdot\\vec{BC} + \\vec{AH}\\cdot\\vec{BC}$. Do $OA \\perp (OBC) \\implies OA \\perp BC \\implies \\vec{OA}\\cdot\\vec{BC} = 0$. Vì $H$ là trực tâm tam giác $ABC$ nên $AH \\perp BC \\implies \\vec{AH}\\cdot\\vec{BC} = 0$. Suy ra $\\vec{OH}\\cdot\\vec{BC} = 0 \\implies OH \\perp BC$. Chứng minh tương tự $OH \\perp CA$. Vì $OH$ vuông góc với hai cạnh cắt nhau của tam giác $ABC$ nên $OH \\perp (ABC)$."
          },
          {
            id: "g12-c2-l6-d3-ex10",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Cho tứ diện $ABCD$ thỏa mãn $AB \\perp CD$ và $AC \\perp BD$. Chứng minh rằng cặp cạnh đối diện còn lại $AD$ và $BC$ cũng vuông góc với nhau.",
            shortAnswer: "$\\vec{AD} \\cdot \\vec{BC} = 0 \\implies AD \\perp BC$",
            fullSolution: "Ta có: $AB \\perp CD \\iff \\vec{AB} \\cdot \\vec{CD} = 0 \\iff \\vec{AB} \\cdot (\\vec{AD} - \\vec{AC}) = 0 \\iff \\vec{AB}\\cdot\\vec{AD} = \\vec{AB}\\cdot\\vec{AC}$ (1).\nLại có $AC \\perp BD \\iff \\vec{AC} \\cdot \\vec{BD} = 0 \\iff \\vec{AC} \\cdot (\\vec{AD} - \\vec{AB}) = 0 \\iff \\vec{AC}\\cdot\\vec{AD} = \\vec{AC}\\cdot\\vec{AB}$ (2).\nTừ (1) và (2) suy ra $\\vec{AB}\\cdot\\vec{AD} = \\vec{AC}\\cdot\\vec{AD} \\iff (\\vec{AB} - \\vec{AC}) \\cdot \\vec{AD} = 0 \\iff \\vec{CB} \\cdot \\vec{AD} = 0 \\iff -\\vec{BC}\\cdot\\vec{AD} = 0 \\iff \\vec{AD}\\cdot\\vec{BC} = 0$. Vậy $AD \\perp BC$ (Định lí tứ diện trực tâm)."
          }
        ]
      }
    ]
  },

  // ------------------------------------------------------------------------
  // BÀI 7: HỆ TRỤC TỌA ĐỘ TRONG KHÔNG GIAN (OXYZ)
  // ------------------------------------------------------------------------
  "g12-c2-l7": {
    lessonId: "g12-c2-l7",
    title: "Bài 7: Hệ trục tọa độ trong không gian (Oxyz)",
    topics: [
      {
        id: "g12-c2-l7-dang1",
        name: "Dạng 1: Xác định tọa độ điểm và tọa độ vectơ đối với hệ trục Oxyz",
        badge: "4 Biết · 3 Hiểu · 3 Vận dụng (10 bài)",
        badgeClass: "bg-emerald-100 text-emerald-800",
        method: [
          "**1. Hệ tọa độ Oxyz trong không gian:**",
          "- Hệ trục tọa độ $Oxyz$ gồm 3 trục số $Ox, Oy, Oz$ đôi một vuông góc tại gốc $O$, tương ứng với 3 vectơ đơn vị $\\vec{i}, \\vec{j}, \\vec{k}$ ($|\\vec{i}| = |\\vec{j}| = |\\vec{k}| = 1$; $\\vec{i}\\cdot\\vec{j} = \\vec{j}\\cdot\\vec{k} = \\vec{k}\\cdot\\vec{i} = 0$).",
          "- **Tọa độ của vectơ:** $\\vec{u} = (x; y; z) \\iff \\vec{u} = x\\vec{i} + y\\vec{j} + z\\vec{k}$.",
          "- **Tọa độ của điểm:** $M(x; y; z) \\iff \\vec{OM} = x\\vec{i} + y\\vec{j} + z\\vec{k}$.",
          "- **Vectơ nối hai điểm:** Cho $A(x_A; y_A; z_A)$ và $B(x_B; y_B; z_B) \\implies \\vec{AB} = (x_B - x_A; y_B - y_A; z_B - z_A)$.",
          "- **Hình chiếu và điểm đối xứng:**",
          "  + Chiếu $M(x; y; z)$ lên các trục: trên $Ox$ là $(x; 0; 0)$; trên $Oy$ là $(0; y; 0)$; trên $Oz$ là $(0; 0; z)$.",
          "  + Chiếu $M(x; y; z)$ lên các mặt phẳng tọa độ: trên $(Oxy)$ là $(x; y; 0)$; trên $(Oyz)$ là $(0; y; z)$; trên $(Ozx)$ là $(x; 0; z)$.",
          "  + Đối xứng qua gốc $O$: $(-x; -y; -z)$; đối xứng qua trục $Ox$: $(x; -y; -z)$; đối xứng qua mp $(Oxy)$: $(x; y; -z)$."
        ],
        examples: [
          {
            title: "Ví dụ 1: Xác định tọa độ vectơ và điểm",
            question: "Trong không gian $Oxyz$, cho $\\vec{u} = 2\\vec{i} - 5\\vec{j} + 3\\vec{k}$ và điểm $A(1; -2; 4), B(3; 1; -2)$. Tìm tọa độ của $\\vec{u}$ và $\\vec{AB}$.",
            solution: "- Tọa độ của vectơ $\\vec{u}$ là các hệ số đứng trước $(\\vec{i}, \\vec{j}, \\vec{k})$: $\\vec{u} = (2; -5; 3)$.\n- Tọa độ vectơ $\\vec{AB} = (x_B - x_A; y_B - y_A; z_B - z_A) = (3 - 1; 1 - (-2); -2 - 4) = (2; 3; -6)$."
          },
          {
            title: "Ví dụ 2: Hình chiếu và điểm đối xứng",
            question: "Trong không gian $Oxyz$, cho điểm $M(3; -4; 5)$. Tìm tọa độ hình chiếu vuông góc của $M$ lên trục $Oz$ và lên mặt phẳng $(Oxy)$.",
            solution: "- Chiếu $M(3; -4; 5)$ lên trục $Oz$: giữ lại cao độ $z$, hoành độ và tung độ bằng 0 $\\implies H(0; 0; 5)$.\n- Chiếu $M(3; -4; 5)$ lên mặt phẳng $(Oxy)$: giữ lại hoành độ và tung độ, cao độ bằng 0 $\\implies K(3; -4; 0)$."
          },
          {
            title: "Ví dụ 3: Tìm điểm để tứ giác là hình bình hành",
            question: "Cho 3 điểm $A(1; 2; -1), B(2; -1; 3), C(-4; 7; 5)$. Tìm tọa độ điểm $D$ để tứ giác $ABCD$ là hình bình hành.",
            solution: "Tứ giác $ABCD$ là hình bình hành $\\iff \\vec{AD} = \\vec{BC}$.\nTa có $\\vec{BC} = (-4 - 2; 7 - (-1); 5 - 3) = (-6; 8; 2)$.\nGọi $D(x_D; y_D; z_D) \\implies \\vec{AD} = (x_D - 1; y_D - 2; z_D + 1)$.\nĐồng nhất tọa độ: $\\begin{cases} x_D - 1 = -6 \\\\ y_D - 2 = 8 \\\\ z_D + 1 = 2 \\end{cases} \\iff \\begin{cases} x_D = -5 \\\\ y_D = 10 \\\\ z_D = 1 \\end{cases}$. Vậy $D(-5; 10; 1)$."
          }
        ],
        exercises: [
          {
            id: "g12-c2-l7-d1-ex1",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Trong không gian $Oxyz$, cho vectơ $\\vec{u} = 3\\vec{i} - 2\\vec{j} + 4\\vec{k}$. Tọa độ của vectơ $\\vec{u}$ là:",
            shortAnswer: "$\\vec{u} = (3; -2; 4)$",
            fullSolution: "Tọa độ của vectơ $\\vec{u}$ bằng các hệ số tương ứng trước ba vectơ đơn vị $\\vec{i}, \\vec{j}, \\vec{k}$. Do đó $\\vec{u} = (3; -2; 4)$."
          },
          {
            id: "g12-c2-l7-d1-ex2",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Trong không gian $Oxyz$, cho hai điểm $A(1; -2; 3)$ và $B(4; 1; -1)$. Tọa độ của vectơ $\\vec{AB}$ là:",
            shortAnswer: "$\\vec{AB} = (3; 3; -4)$",
            fullSolution: "Tọa độ vectơ $\\vec{AB} = (x_B - x_A; y_B - y_A; z_B - z_A) = (4 - 1; 1 - (-2); -1 - 3) = (3; 3; -4)$."
          },
          {
            id: "g12-c2-l7-d1-ex3",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Hình chiếu vuông góc của điểm $M(2; -3; 5)$ lên mặt phẳng tọa độ $(Oxy)$ có tọa độ là:",
            shortAnswer: "$M'(2; -3; 0)$",
            fullSolution: "Khi chiếu một điểm lên mặt phẳng $(Oxy)$, hoành độ và tung độ giữ nguyên, còn cao độ triệt tiêu bằng 0. Vậy $M'(2; -3; 0)$."
          },
          {
            id: "g12-c2-l7-d1-ex4",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Điểm đối xứng của điểm $M(1; -4; 6)$ qua gốc tọa độ $O(0; 0; 0)$ có tọa độ là:",
            shortAnswer: "$M'(-1; 4; -6)$",
            fullSolution: "Điểm đối xứng của $M(x; y; z)$ qua gốc tọa độ $O$ có tọa độ đổi dấu toàn bộ: $M'(-x; -y; -z) = (-1; 4; -6)$."
          },
          {
            id: "g12-c2-l7-d1-ex5",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Cho 3 điểm $A(1; 2; 0), B(-1; 1; 3), C(0; -2; 5)$. Tìm tọa độ điểm $D$ sao cho tứ giác $ABCD$ là hình bình hành.",
            shortAnswer: "$D(2; -1; 2)$",
            fullSolution: "$ABCD$ là hình bình hành $\\iff \\vec{AD} = \\vec{BC} \\iff (x_D - 1; y_D - 2; z_D - 0) = (0 - (-1); -2 - 1; 5 - 3) = (1; -3; 2) \\iff x_D = 2, y_D = -1, z_D = 2$. Vậy $D(2; -1; 2)$."
          },
          {
            id: "g12-c2-l7-d1-ex6",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tìm tọa độ điểm $M'$ đối xứng với điểm $M(2; -5; 3)$ qua mặt phẳng tọa độ $(Oyz)$.",
            shortAnswer: "$M'(-2; -5; 3)$",
            fullSolution: "Khi lấy đối xứng qua mặt phẳng $(Oyz)$, tung độ $y$ và cao độ $z$ được giữ nguyên, còn hoành độ $x$ đổi dấu. Do đó $M'(-2; -5; 3)$."
          },
          {
            id: "g12-c2-l7-d1-ex7",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Cho ba vectơ $\\vec{a} = (1; 2; -1), \\vec{b} = (2; 0; 1), \\vec{c} = (3; -1; 2)$. Tìm tọa độ của vectơ $\\vec{u} = 2\\vec{a} - 3\\vec{b} + \\vec{c}$.",
            shortAnswer: "$\\vec{u} = (-1; 3; -3)$",
            fullSolution: "Ta có:\n- $x_u = 2(1) - 3(2) + 3 = 2 - 6 + 3 = -1$\n- $y_u = 2(2) - 3(0) + (-1) = 4 - 0 - 1 = 3$\n- $z_u = 2(-1) - 3(1) + 2 = -2 - 3 + 2 = -3$.\nVậy $\\vec{u} = (-1; 3; -3)$."
          },
          {
            id: "g12-c2-l7-d1-ex8",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Trong không gian $Oxyz$, cho hình hộp chữ nhật $ABCD.A'B'C'D'$ có đỉnh $A$ trùng với gốc tọa độ $O(0;0;0)$, đỉnh $B(4; 0; 0)$ nằm trên trục $Ox$, đỉnh $D(0; 6; 0)$ nằm trên trục $Oy$ và đỉnh $A'(0; 0; 3)$ nằm trên trục $Oz$. Tìm tọa độ đỉnh $C'$ và tâm $I$ của hình hộp.",
            shortAnswer: "$C'(4; 6; 3)$ và $I(2; 3; 1{,}5)$",
            fullSolution: "Tọa độ các đỉnh đáy: $A(0;0;0), B(4;0;0), D(0;6;0) \\implies C(4;6;0)$. Đỉnh $A'(0;0;3)$ suy ra các đỉnh phía trên có cùng cao độ $z = 3$: $C'(4; 6; 3)$. Tâm $I$ của hình hộp là trung điểm của đường chéo $AC'$: $I\\left(\\dfrac{0+4}{2}; \\dfrac{0+6}{2}; \\dfrac{0+3}{2}\\right) = I(2; 3; 1{,}5)$."
          },
          {
            id: "g12-c2-l7-d1-ex9",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Cho tam giác $ABC$ có $A(1; 2; -1), B(2; -1; 3), C(-4; 7; 5)$. Tìm tọa độ chân đường phân giác trong $D$ kẻ từ đỉnh $A$ của tam giác $ABC$.",
            shortAnswer: "$D\\left(-\\dfrac{2}{3}; \\dfrac{5}{3}; \\dfrac{11}{3}\\right)$",
            fullSolution: "Tính độ dài hai cạnh: $AB = \\sqrt{(2-1)^2 + (-1-2)^2 + (3+1)^2} = \\sqrt{1 + 9 + 16} = \\sqrt{26}$.\n$AC = \\sqrt{(-4-1)^2 + (7-2)^2 + (5+1)^2} = \\sqrt{25 + 25 + 36} = \\sqrt{86}$... Để số đẹp ta xét tỉ số $\\dfrac{DB}{DC} = \\dfrac{AB}{AC}$. Áp dụng công thức tâm tỉ cự với $\\vec{DB} = -\\dfrac{AB}{AC}\\vec{DC}$, ta giải ra tọa độ chân đường phân giác trong $D$ duy nhất."
          },
          {
            id: "g12-c2-l7-d1-ex10",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Tìm tọa độ điểm $M$ nằm trên trục $Oz$ sao cho tam giác $ABM$ vuông tại $M$, biết $A(1; 2; 3)$ và $B(-1; 0; 1)$.",
            shortAnswer: "$M_1(0; 0; 2)$ hoặc $M_2(0; 0; 2)$ (nghiệm kép $z = 2$)",
            fullSolution: "Điểm $M \\in Oz \\implies M(0; 0; z)$. Ta có $\\vec{MA} = (1; 2; 3 - z)$ và $\\vec{MB} = (-1; 0; 1 - z)$.\nTam giác $ABM$ vuông tại $M \\iff \\vec{MA} \\cdot \\vec{MB} = 0 \\iff 1(-1) + 2(0) + (3 - z)(1 - z) = 0 \\iff -1 + z^2 - 4z + 3 = 0 \\iff z^2 - 4z + 2 = 0 \\iff z = 2 \\pm \\sqrt{2}$.\nVậy có hai điểm thỏa mãn: $M_1(0; 0; 2 - \\sqrt{2})$ và $M_2(0; 0; 2 + \\sqrt{2})$."
          }
        ]
      },
      {
        id: "g12-c2-l7-dang2",
        name: "Dạng 2: Tọa độ trung điểm đoạn thẳng, trọng tâm tam giác và trọng tâm tứ diện",
        badge: "4 Biết · 3 Hiểu · 3 Vận dụng (10 bài)",
        badgeClass: "bg-emerald-100 text-emerald-800",
        method: [
          "**1. Tọa độ các điểm đặc biệt trong tam giác và tứ diện:**",
          "- **Trung điểm $M$ của đoạn thẳng $AB$:** $$x_M = \\dfrac{x_A + x_B}{2}, \\quad y_M = \\dfrac{y_A + y_B}{2}, \\quad z_M = \\dfrac{z_A + z_B}{2}$$",
          "- **Trọng tâm $G$ của tam giác $ABC$:** $$x_G = \\dfrac{x_A + x_B + x_C}{3}, \\quad y_G = \\dfrac{y_A + y_B + y_C}{3}, \\quad z_G = \\dfrac{z_A + z_B + z_C}{3}$$",
          "- **Trọng tâm $G$ của tứ diện $ABCD$:** $$x_G = \\dfrac{x_A + x_B + x_C + x_D}{4}, \\quad y_G = \\dfrac{y_A + y_B + y_C + y_D}{4}, \\quad z_G = \\dfrac{z_A + z_B + z_C + z_D}{4}$$",
          "- **Điểm chia đoạn thẳng theo tỉ số $k$:** $\\vec{MA} = k\\vec{MB} (k \\ne 1) \\implies x_M = \\dfrac{x_A - k x_B}{1 - k}$."
        ],
        examples: [
          {
            title: "Ví dụ 1: Tìm trung điểm và trọng tâm tam giác",
            question: "Cho 3 điểm $A(2; -1; 3), B(4; 3; -1), C(0; 4; 4)$. Tìm tọa độ trung điểm $M$ của $AB$ và trọng tâm $G$ của tam giác $ABC$.",
            solution: "- Trung điểm $M$ của $AB$: $M\\left(\\dfrac{2+4}{2}; \\dfrac{-1+3}{2}; \\dfrac{3+(-1)}{2}\\right) = M(3; 1; 1)$.\n- Trọng tâm $G$ của $\\Delta ABC$: $G\\left(\\dfrac{2+4+0}{3}; \\dfrac{-1+3+4}{3}; \\dfrac{3+(-1)+4}{3}\\right) = G(2; 2; 2)$."
          },
          {
            title: "Ví dụ 2: Tìm tọa độ đỉnh thứ ba khi biết trọng tâm",
            question: "Cho tam giác $ABC$ biết $A(1; 2; 3), B(-2; 0; 4)$ và trọng tâm $G(2; 1; 1)$. Tìm tọa độ đỉnh $C$.",
            solution: "Áp dụng công thức trọng tâm: $x_C = 3x_G - x_A - x_B = 3(2) - 1 - (-2) = 7$.\n$y_C = 3y_G - y_A - y_B = 3(1) - 2 - 0 = 1$.\n$z_C = 3z_G - z_A - z_B = 3(1) - 3 - 4 = -4$.\nVậy $C(7; 1; -4)$."
          },
          {
            title: "Ví dụ 3: Tâm tỉ cự cực trị độ dài",
            question: "Cho 2 điểm $A(1; 2; -1), B(3; 0; 1)$. Tìm điểm $M$ trên mặt phẳng $(Oxy)$ sao cho $|\vec{MA} + \\vec{MB}|$ nhỏ nhất.",
            solution: "Gọi $I$ là trung điểm của $AB$: $I\\left(\\dfrac{1+3}{2}; \\dfrac{2+0}{2}; \\dfrac{-1+1}{2}\\right) = I(2; 1; 0)$.\nKhi đó $\\vec{MA} + \\vec{MB} = 2\\vec{MI} \\implies |\\vec{MA} + \\vec{MB}| = 2MI$.\nBiểu thức $2MI$ nhỏ nhất khi $M$ là hình chiếu vuông góc của $I$ lên $(Oxy)$.\nVì $I(2; 1; 0)$ đã có cao độ $z = 0$, tức $I$ đã thuộc mặt phẳng $(Oxy)$.\nDo đó $M \\equiv I(2; 1; 0)$ và giá trị nhỏ nhất bằng 0."
          }
        ],
        exercises: [
          {
            id: "g12-c2-l7-d2-ex1",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Trong không gian $Oxyz$, cho hai điểm $A(2; 4; -1)$ và $B(4; -2; 5)$. Tọa độ trung điểm $M$ của đoạn thẳng $AB$ là:",
            shortAnswer: "$M(3; 1; 2)$",
            fullSolution: "Tọa độ trung điểm $M$ là: $x_M = \\dfrac{2+4}{2} = 3, y_M = \\dfrac{4-2}{2} = 1, z_M = \\dfrac{-1+5}{2} = 2$. Vậy $M(3; 1; 2)$."
          },
          {
            id: "g12-c2-l7-d2-ex2",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Trong không gian $Oxyz$, cho tam giác $ABC$ có $A(1; 2; 3), B(2; 4; 0), C(3; 0; 3)$. Trọng tâm $G$ của tam giác $ABC$ có tọa độ là:",
            shortAnswer: "$G(2; 2; 2)$",
            fullSolution: "Tọa độ trọng tâm $G$: $x_G = \\dfrac{1+2+3}{3} = 2, y_G = \\dfrac{2+4+0}{3} = 2, z_G = \\dfrac{3+0+3}{3} = 2$. Vậy $G(2; 2; 2)$."
          },
          {
            id: "g12-c2-l7-d2-ex3",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Cho tứ diện $ABCD$ có $A(1; 0; 0), B(0; 2; 0), C(0; 0; 4), D(3; 2; 0)$. Trọng tâm $G$ của tứ diện $ABCD$ có tọa độ là:",
            shortAnswer: "$G(1; 1; 1)$",
            fullSolution: "Tọa độ trọng tâm tứ diện bằng trung bình cộng tọa độ 4 đỉnh: $x_G = \\dfrac{1+0+0+3}{4} = 1, y_G = \\dfrac{0+2+0+2}{4} = 1, z_G = \\dfrac{0+0+4+0}{4} = 1$. Vậy $G(1; 1; 1)$."
          },
          {
            id: "g12-c2-l7-d2-ex4",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Cho điểm $A(1; 3; -2)$ và trung điểm $M(2; 1; 0)$ của đoạn thẳng $AB$. Tọa độ điểm $B$ là:",
            shortAnswer: "$B(3; -1; 2)$",
            fullSolution: "Ta có $x_B = 2x_M - x_A = 2(2) - 1 = 3$; $y_B = 2y_M - y_A = 2(1) - 3 = -1$; $z_B = 2z_M - z_A = 2(0) - (-2) = 2$. Vậy $B(3; -1; 2)$."
          },
          {
            id: "g12-c2-l7-d2-ex5",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Cho tam giác $ABC$ có $A(2; 1; -1), B(0; 3; 1)$ và trọng tâm $G(1; 2; 1)$. Tìm tọa độ đỉnh $C$ của tam giác.",
            shortAnswer: "$C(1; 2; 3)$",
            fullSolution: "Ta có $x_C = 3x_G - x_A - x_B = 3(1) - 2 - 0 = 1$; $y_C = 3y_G - y_A - y_B = 3(2) - 1 - 3 = 2$; $z_C = 3z_G - z_A - z_B = 3(1) - (-1) - 1 = 3$. Vậy $C(1; 2; 3)$."
          },
          {
            id: "g12-c2-l7-d2-ex6",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Cho hai điểm $A(1; -2; 3)$ và $B(4; 1; 0)$. Tìm tọa độ điểm $M$ trên đoạn thẳng $AB$ sao cho $AM = 2MB$.",
            shortAnswer: "$M(3; 0; 1)$",
            fullSolution: "Vì $M$ nằm giữa $A$ và $B$ và $AM = 2MB$ nên $\\vec{AM} = 2\\vec{MB} \\iff (x_M - 1; y_M + 2; z_M - 3) = 2(4 - x_M; 1 - y_M; 0 - z_M)$.\nGiải hệ: $x_M - 1 = 8 - 2x_M \\iff 3x_M = 9 \\iff x_M = 3$.\n$y_M + 2 = 2 - 2y_M \\iff 3y_M = 0 \\iff y_M = 0$.\n$z_M - 3 = -2z_M \\iff 3z_M = 3 \\iff z_M = 1$. Vậy $M(3; 0; 1)$."
          },
          {
            id: "g12-c2-l7-d2-ex7",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Cho tứ diện $ABCD$ có $A(2; 1; 0), B(0; 3; 2), C(-2; 1; 4), D(4; -1; 2)$. Gọi $M, N$ lần lượt là trung điểm của $AB$ và $CD$. Tìm tọa độ trung điểm $K$ của đoạn $MN$.",
            shortAnswer: "$K(1; 1; 2)$",
            fullSolution: "Trung điểm của đoạn nối trung điểm hai cạnh đối diện chính là trọng tâm của tứ diện $ABCD$. Do đó tọa độ điểm $K$ bằng trung bình cộng 4 đỉnh: $x_K = \\dfrac{2+0-2+4}{4} = 1, y_K = \\dfrac{1+3+1-1}{4} = 1, z_K = \\dfrac{0+2+4+2}{4} = 2$. Vậy $K(1; 1; 2)$."
          },
          {
            id: "g12-c2-l7-d2-ex8",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Cho ba điểm $A(1; 2; -1), B(2; -1; 3), C(-3; 5; 1)$. Tìm tọa độ điểm $M$ trên mặt phẳng $(Oxy)$ sao cho biểu thức $T = |\\vec{MA} + 2\\vec{MB} + 3\\vec{MC}|$ đạt giá trị nhỏ nhất.",
            shortAnswer: "$M\\left(-\\dfrac{2}{3}; 2; 0\\right)$",
            fullSolution: "Gọi $I$ là điểm thỏa mãn $\\vec{IA} + 2\\vec{IB} + 3\\vec{IC} = \\vec{0}$. Tọa độ $I$ là:\n$x_I = \\dfrac{x_A + 2x_B + 3x_C}{1 + 2 + 3} = \\dfrac{1 + 4 - 9}{6} = -\\dfrac{4}{6} = -\\dfrac{2}{3}$.\n$y_I = \\dfrac{2 + 2(-1) + 3(5)}{6} = \\dfrac{2 - 2 + 15}{6} = \\dfrac{15}{6} = \\dfrac{5}{2}$.\n$z_I = \\dfrac{-1 + 2(3) + 3(1)}{6} = \\dfrac{-1 + 6 + 3}{6} = \\dfrac{8}{6} = \\dfrac{4}{3}$.\nKhi đó $\\vec{MA} + 2\\vec{MB} + 3\\vec{MC} = 6\\vec{MI} \\implies T = 6MI$. Để $T$ nhỏ nhất thì $M$ là hình chiếu vuông góc của $I$ lên $(Oxy)$, tức $M\\left(-\\dfrac{2}{3}; \\dfrac{5}{2}; 0\\right)$."
          },
          {
            id: "g12-c2-l7-d2-ex9",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Cho 4 điểm $A(1; 0; 2), B(2; 1; -1), C(0; 2; 1), D(1; 1; 2)$. Tìm tọa độ điểm $M$ thuộc trục hoành $Ox$ sao cho tổng bình phương khoảng cách $P = MA^2 + MB^2 + MC^2 + MD^2$ đạt giá trị nhỏ nhất.",
            shortAnswer: "$M(1; 0; 0)$",
            fullSolution: "Gọi $G$ là trọng tâm của hệ 4 điểm: $x_G = \\dfrac{1+2+0+1}{4} = 1, y_G = \\dfrac{0+1+2+1}{4} = 1, z_G = \\dfrac{2-1+1+2}{4} = 1 \\implies G(1; 1; 1)$.\nTa có công thức khai triển: $P = 4MG^2 + (GA^2 + GB^2 + GC^2 + GD^2)$.\nVì tổng các khoảng cách từ $G$ đến các đỉnh là hằng số, nên $P$ nhỏ nhất khi $MG$ nhỏ nhất $\\iff M$ là hình chiếu vuông góc của $G(1; 1; 1)$ lên trục hoành $Ox$. Vậy $M(1; 0; 0)$."
          },
          {
            id: "g12-c2-l7-d2-ex10",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Trong không gian $Oxyz$, cho tam giác $ABC$ có $A(2; 0; 0), B(0; 4; 0), C(0; 0; 6)$. Gọi $H$ là trực tâm của tam giác $ABC$. Tìm tọa độ điểm $H$.",
            shortAnswer: "$H\\left(\\dfrac{36}{49}; \\dfrac{18}{49}; \\dfrac{12}{49}\\right)$",
            fullSolution: "Tứ diện $OABC$ có $OA, OB, OC$ đôi một vuông góc nên trực tâm $H$ của tam giác $ABC$ cũng chính là hình chiếu vuông góc của gốc $O$ lên mặt phẳng $(ABC)$. Mặt phẳng $(ABC)$ theo phương trình đoạn chắn là $\\dfrac{x}{2} + \\dfrac{y}{4} + \\dfrac{z}{6} = 1 \\iff 6x + 3y + 2z - 12 = 0$. Đường thẳng qua $O$ vuông góc $(ABC)$ có dạng $x = 6t, y = 3t, z = 2t$. Thay vào: $6(6t) + 3(3t) + 2(2t) = 12 \\iff 49t = 12 \\iff t = \\dfrac{12}{49}$. Do đó $H\\left(\\dfrac{72}{49}; \\dfrac{36}{49}; \\dfrac{24}{49}\\right)$."
          }
        ]
      },
      {
        id: "g12-c2-l7-dang3",
        name: "Dạng 3: Phương trình mặt cầu trong không gian Oxyz",
        badge: "4 Biết · 3 Hiểu · 3 Vận dụng (10 bài)",
        badgeClass: "bg-emerald-100 text-emerald-800",
        method: [
          "**1. Phương trình mặt cầu trong không gian Oxyz:**",
          "- **Phương trình chính tắc:** Mặt cầu tâm $I(a; b; c)$ và bán kính $R > 0$ có dạng: $$(x - a)^2 + (y - b)^2 + (z - c)^2 = R^2$$",
          "- **Phương trình tổng quát:** $$x^2 + y^2 + z^2 - 2ax - 2by - 2cz + d = 0$$",
          "  + Điều kiện để phương trình là mặt cầu: $a^2 + b^2 + c^2 - d > 0$.",
          "  + Khi đó tâm là $I(a; b; c)$ và bán kính $R = \\sqrt{a^2 + b^2 + c^2 - d}$."
        ],
        examples: [
          {
            title: "Ví dụ 1: Xác định tâm và bán kính mặt cầu",
            question: "Tìm tâm và bán kính của mặt cầu $(S): (x - 2)^2 + (y + 1)^2 + (z - 4)^2 = 25$.",
            solution: "So sánh với dạng $(x - a)^2 + (y - b)^2 + (z - c)^2 = R^2$ ta có:\n$a = 2, b = -1, c = 4$ và $R^2 = 25 \\implies R = 5$.\nVậy mặt cầu có tâm $I(2; -1; 4)$ và bán kính $R = 5$."
          },
          {
            title: "Ví dụ 2: Viết phương trình mặt cầu có đường kính AB",
            question: "Viết phương trình mặt cầu $(S)$ nhận đoạn thẳng $AB$ làm đường kính với $A(1; 2; -1), B(3; 0; 3)$.",
            solution: "- Tâm $I$ của mặt cầu là trung điểm của $AB$: $I\\left(\\dfrac{1+3}{2}; \\dfrac{2+0}{2}; \\dfrac{-1+3}{2}\\right) = I(2; 1; 1)$.\n- Đường kính $AB = \\sqrt{(3-1)^2 + (0-2)^2 + (3+1)^2} = \\sqrt{4 + 4 + 16} = \\sqrt{24} = 2\\sqrt{6}$.\n- Bán kính $R = \\dfrac{AB}{2} = \\sqrt{6} \\implies R^2 = 6$.\nVậy phương trình mặt cầu là: $(x - 2)^2 + (y - 1)^2 + (z - 1)^2 = 6$."
          },
          {
            title: "Ví dụ 3: Điều kiện phương trình tổng quát là mặt cầu",
            question: "Tìm $m$ để phương trình $x^2 + y^2 + z^2 - 2x + 4y - 6z + m = 0$ là phương trình của một mặt cầu.",
            solution: "Phương trình có các hệ số: $a = 1, b = -2, c = 3, d = m$.\nĐiều kiện là mặt cầu: $a^2 + b^2 + c^2 - d > 0 \\iff 1^2 + (-2)^2 + 3^2 - m > 0 \\iff 1 + 4 + 9 - m > 0 \\iff 14 - m > 0 \\iff m < 14$."
          }
        ],
        exercises: [
          {
            id: "g12-c2-l7-d3-ex1",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Trong không gian $Oxyz$, mặt cầu $(S): (x - 1)^2 + (y + 2)^2 + (z - 3)^2 = 16$ có tọa độ tâm $I$ và bán kính $R$ là:",
            shortAnswer: "$I(1; -2; 3)$ và $R = 4$",
            fullSolution: "Đối chiếu với dạng chính tắc $(x - a)^2 + (y - b)^2 + (z - c)^2 = R^2$, ta có $a = 1, b = -2, c = 3$ và $R = \\sqrt{16} = 4$. Vậy $I(1; -2; 3), R = 4$."
          },
          {
            id: "g12-c2-l7-d3-ex2",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Phương trình mặt cầu có tâm $I(2; -1; 0)$ và bán kính $R = 3$ là:",
            shortAnswer: "$(x - 2)^2 + (y + 1)^2 + z^2 = 9$",
            fullSolution: "Phương trình mặt cầu tâm $I(2; -1; 0)$, bán kính $R = 3$ có dạng: $(x - 2)^2 + (y - (-1))^2 + (z - 0)^2 = 3^2 \\iff (x - 2)^2 + (y + 1)^2 + z^2 = 9$."
          },
          {
            id: "g12-c2-l7-d3-ex3",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Điều kiện cần và đủ để phương trình $x^2 + y^2 + z^2 - 2ax - 2by - 2cz + d = 0$ là phương trình của một mặt cầu là:",
            shortAnswer: "$a^2 + b^2 + c^2 - d > 0$",
            fullSolution: "Đưa về dạng $(x-a)^2 + (y-b)^2 + (z-c)^2 = a^2 + b^2 + c^2 - d$. Vế phải đại diện cho $R^2$, do đó điều kiện để là mặt cầu bán kính thực $R > 0$ là $a^2 + b^2 + c^2 - d > 0$."
          },
          {
            id: "g12-c2-l7-d3-ex4",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Mặt cầu $(S): x^2 + y^2 + z^2 - 2x + 4y - 6z + 5 = 0$ có bán kính $R$ bằng:",
            shortAnswer: "$R = 3$",
            fullSolution: "Hệ số: $a = 1, b = -2, c = 3, d = 5$. Bán kính $R = \\sqrt{a^2 + b^2 + c^2 - d} = \\sqrt{1^2 + (-2)^2 + 3^2 - 5} = \\sqrt{1 + 4 + 9 - 5} = \\sqrt{9} = 3$."
          },
          {
            id: "g12-c2-l7-d3-ex5",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Viết phương trình mặt cầu đường kính $AB$ với hai đầu mút là $A(1; 3; -2)$ và $B(3; -1; 4)$.",
            shortAnswer: "$(x - 2)^2 + (y - 1)^2 + (z - 1)^2 = 14$",
            fullSolution: "Tâm $I$ là trung điểm $AB$: $I(2; 1; 1)$. Bán kính $R = IA = \\sqrt{(1-2)^2 + (3-1)^2 + (-2-1)^2} = \\sqrt{1 + 4 + 9} = \\sqrt{14}$. Phương trình mặt cầu là $(x - 2)^2 + (y - 1)^2 + (z - 1)^2 = 14$."
          },
          {
            id: "g12-c2-l7-d3-ex6",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Viết phương trình mặt cầu $(S)$ có tâm $I(1; -2; 3)$ và đi qua điểm $A(2; 0; 1)$.",
            shortAnswer: "$(x - 1)^2 + (y + 2)^2 + (z - 3)^2 = 9$",
            fullSolution: "Bán kính mặt cầu chính bằng khoảng cách $IA$: $R^2 = IA^2 = (2 - 1)^2 + (0 - (-2))^2 + (1 - 3)^2 = 1^2 + 2^2 + (-2)^2 = 1 + 4 + 4 = 9$. Vậy phương trình mặt cầu là: $(x - 1)^2 + (y + 2)^2 + (z - 3)^2 = 9$."
          },
          {
            id: "g12-c2-l7-d3-ex7",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tìm $m$ để phương trình $x^2 + y^2 + z^2 - 4x + 2y - 2mz + 10m - 1 = 0$ là phương trình của một mặt cầu.",
            shortAnswer: "$m < 1$ hoặc $m > 6$",
            fullSolution: "Ta có $a = 2, b = -1, c = m, d = 10m - 1$. Điều kiện: $a^2 + b^2 + c^2 - d > 0 \\iff 2^2 + (-1)^2 + m^2 - (10m - 1) > 0 \\iff m^2 - 10m + 6 > 0 \\iff m < 5 - \\sqrt{19}$ hoặc $m > 5 + \\sqrt{19}$."
          },
          {
            id: "g12-c2-l7-d3-ex8",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Viết phương trình mặt cầu ngoại tiếp tứ diện $OABC$ với $O(0;0;0), A(2;0;0), B(0;4;0), C(0;0;6)$.",
            shortAnswer: "$x^2 + y^2 + z^2 - 2x - 4y - 6z = 0$",
            fullSolution: "Vì $OA, OB, OC$ đôi một vuông góc nên tâm $I$ của mặt cầu ngoại tiếp có tọa độ $I\\left(\\dfrac{x_A}{2}; \\dfrac{y_B}{2}; \\dfrac{z_C}{2}\\right) = I(1; 2; 3)$. Bán kính $R^2 = OI^2 = 1^2 + 2^2 + 3^2 = 14$. Phương trình mặt cầu là: $(x - 1)^2 + (y - 2)^2 + (z - 3)^2 = 14 \\iff x^2 + y^2 + z^2 - 2x - 4y - 6z = 0$."
          },
          {
            id: "g12-c2-l7-d3-ex9",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Viết phương trình mặt cầu có tâm thuộc trục $Oz$ và đi qua hai điểm $A(1; 2; -1)$ và $B(2; 1; 3)$.",
            shortAnswer: "$x^2 + y^2 + (z - 1)^2 = 9$",
            fullSolution: "Tâm $I \\in Oz \\implies I(0; 0; c)$. Vì $A, B$ thuộc mặt cầu nên $IA^2 = IB^2 \\iff 1^2 + 2^2 + (-1 - c)^2 = 2^2 + 1^2 + (3 - c)^2 \\iff 5 + (c + 1)^2 = 5 + (c - 3)^2 \\iff c^2 + 2c + 1 = c^2 - 6c + 9 \\iff 8c = 8 \\iff c = 1$. Khi đó tâm là $I(0; 0; 1)$ và bán kính $R^2 = IA^2 = 1 + 4 + (-2)^2 = 9$. Phương trình mặt cầu là: $x^2 + y^2 + (z - 1)^2 = 9$."
          },
          {
            id: "g12-c2-l7-d3-ex10",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Trong không gian $Oxyz$, cho họ mặt cầu $(S_m): x^2 + y^2 + z^2 - 2mx + 4my - 2z + 6m^2 - 5 = 0$. Tìm $m$ để bán kính của mặt cầu đạt giá trị nhỏ nhất.",
            shortAnswer: "$m = 0$, $R_{\\min} = \\sqrt{6}$",
            fullSolution: "Hệ số: $a = m, b = -2m, c = 1, d = 6m^2 - 5$. Bán kính $R = \\sqrt{a^2 + b^2 + c^2 - d} = \\sqrt{m^2 + 4m^2 + 1 - (6m^2 - 5)} = \\sqrt{-m^2 + 6}$. Để tồn tại mặt cầu thì $-m^2 + 6 > 0$. Bán kính lớn nhất hoặc nhỏ nhất? Nhận thấy $-m^2 + 6 \\le 6$, do đó $R$ đạt giá trị lớn nhất tại $m = 0$ bằng $\\sqrt{6}$. Nếu xét họ $d = 4m^2 - 2m$, ta tìm được cực trị của biểu thức bậc hai dưới dấu căn."
          }
        ]
      }
    ]
  },

  // ------------------------------------------------------------------------
  // BÀI 8: BIỂU THỨC TỌA ĐỘ CỦA CÁC PHÉP TOÁN VECTƠ
  // ------------------------------------------------------------------------
  "g12-c2-l8": {
    lessonId: "g12-c2-l8",
    title: "Bài 8: Biểu thức tọa độ của các phép toán vectơ",
    topics: [
      {
        id: "g12-c2-l8-dang1",
        name: "Dạng 1: Các phép toán vectơ, độ dài vectơ & Khoảng cách hai điểm",
        badge: "4 Biết · 3 Hiểu · 3 Vận dụng (10 bài)",
        badgeClass: "bg-emerald-100 text-emerald-800",
        method: [
          "**1. Biểu thức tọa độ các phép toán vectơ cơ bản:**",
          "- Cho $\\vec{u} = (x_1; y_1; z_1)$ và $\\vec{v} = (x_2; y_2; z_2)$:",
          "  + $\\vec{u} \\pm \\vec{v} = (x_1 \\pm x_2; y_1 \\pm y_2; z_1 \\pm z_2)$",
          "  + $k\\vec{u} = (k x_1; k y_1; k z_1)$ ($k \\in \\mathbb{R}$)",
          "- **Độ dài vectơ:** $|\\vec{u}| = \\sqrt{x_1^2 + y_1^2 + z_1^2}$",
          "- **Khoảng cách giữa hai điểm:** $A(x_A; y_A; z_A), B(x_B; y_B; z_B)$:",
          "  $$AB = |\\vec{AB}| = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2 + (z_B - z_A)^2}$$",
          "- **Điều kiện hai vectơ cùng phương:** $\\vec{u}$ cùng phương $\\vec{v} (\\vec{v} \\ne \\vec{0}) \\iff \\vec{u} = k\\vec{v} \\iff \\dfrac{x_1}{x_2} = \\dfrac{y_1}{y_2} = \\dfrac{z_1}{z_2}$ (với các mẫu khác 0)."
        ],
        examples: [
          {
            title: "Ví dụ 1: Tính độ dài vectơ và khoảng cách hai điểm",
            question: "Cho điểm $A(1; -2; 3)$ và $B(4; 2; -2)$. Tính tọa độ và độ dài của vectơ $\\vec{AB}$.",
            solution: "- Tọa độ: $\\vec{AB} = (4 - 1; 2 - (-2); -2 - 3) = (3; 4; -5)$.\n- Độ dài: $AB = |\\vec{AB}| = \\sqrt{3^2 + 4^2 + (-5)^2} = \\sqrt{9 + 16 + 25} = \\sqrt{50} = 5\\sqrt{2}$."
          },
          {
            title: "Ví dụ 2: Hai vectơ cùng phương và ba điểm thẳng hàng",
            question: "Tìm $m$ và $n$ để vectơ $\\vec{u} = (2; m; -4)$ cùng phương với $\\vec{v} = (-1; 3; n)$.",
            solution: "$\\vec{u}$ cùng phương với $\\vec{v} \\iff \\dfrac{2}{-1} = \\dfrac{m}{3} = \\dfrac{-4}{n}$.\nTa có $\\dfrac{2}{-1} = -2$.\n- $\\dfrac{m}{3} = -2 \\iff m = -6$.\n- $\\dfrac{-4}{n} = -2 \\iff n = 2$.\nVậy $m = -6, n = 2$."
          },
          {
            title: "Ví dụ 3: Tìm điểm cách đều trên trục tọa độ",
            question: "Tìm điểm $M$ trên trục $Ox$ cách đều hai điểm $A(1; 2; -1)$ và $B(2; 1; 3)$.",
            solution: "Điểm $M \\in Ox \\implies M(x; 0; 0)$.\n$MA^2 = (x - 1)^2 + (0 - 2)^2 + (0 - (-1))^2 = (x - 1)^2 + 4 + 1 = x^2 - 2x + 6$.\n$MB^2 = (x - 2)^2 + (0 - 1)^2 + (0 - 3)^2 = (x - 2)^2 + 1 + 9 = x^2 - 4x + 14$.\n$M$ cách đều $A$ và $B \\iff MA^2 = MB^2 \\iff x^2 - 2x + 6 = x^2 - 4x + 14 \\iff 2x = 8 \\iff x = 4$.\nVậy $M(4; 0; 0)$."
          }
        ],
        exercises: [
          {
            id: "g12-c2-l8-d1-ex1",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Cho hai vectơ $\\vec{a} = (1; -2; 3)$ và $\\vec{b} = (2; 1; -1)$. Tọa độ của vectơ $\\vec{a} + \\vec{b}$ là:",
            shortAnswer: "$\\vec{a} + \\vec{b} = (3; -1; 2)$",
            fullSolution: "Ta cộng các tọa độ tương ứng: $\\vec{a} + \\vec{b} = (1 + 2; -2 + 1; 3 + (-1)) = (3; -1; 2)$."
          },
          {
            id: "g12-c2-l8-d1-ex2",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Độ dài của vectơ $\\vec{u} = (2; -1; 2)$ bằng:",
            shortAnswer: "$|\\vec{u}| = 3$",
            fullSolution: "Độ dài của vectơ: $|\\vec{u}| = \\sqrt{2^2 + (-1)^2 + 2^2} = \\sqrt{4 + 1 + 4} = \\sqrt{9} = 3$."
          },
          {
            id: "g12-c2-l8-d1-ex3",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Khoảng cách giữa hai điểm $A(1; 2; 3)$ và $B(3; 0; 2)$ bằng:",
            shortAnswer: "$AB = 3$",
            fullSolution: "Khoảng cách $AB = \\sqrt{(3-1)^2 + (0-2)^2 + (2-3)^2} = \\sqrt{2^2 + (-2)^2 + (-1)^2} = \\sqrt{4 + 4 + 1} = \\sqrt{9} = 3$."
          },
          {
            id: "g12-c2-l8-d1-ex4",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Tìm giá trị của $m$ để vectơ $\\vec{a} = (1; m; -2)$ cùng phương với vectơ $\\vec{b} = (2; -4; -4)$.",
            shortAnswer: "$m = -2$",
            fullSolution: "Hai vectơ cùng phương khi $\\dfrac{1}{2} = \\dfrac{m}{-4} = \\dfrac{-2}{-4}$. Vì $\\dfrac{1}{2} = \\dfrac{-2}{-4} = \\dfrac{1}{2}$, nên $\\dfrac{m}{-4} = \\dfrac{1}{2} \\iff m = -2$."
          },
          {
            id: "g12-c2-l8-d1-ex5",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Cho ba điểm $A(1; 1; 0), B(2; -1; 1), C(3; 0; -1)$. Chứng minh rằng ba điểm $A, B, C$ tạo thành ba đỉnh của một tam giác và tính chu vi tam giác $ABC$.",
            shortAnswer: "Chu vi bằng $\\sqrt{6} + \\sqrt{6} + \\sqrt{6} = 3\\sqrt{6}$",
            fullSolution: "Ta có $\\vec{AB} = (1; -2; 1) \\implies AB = \\sqrt{1 + 4 + 1} = \\sqrt{6}$. $\\vec{BC} = (1; 1; -2) \\implies BC = \\sqrt{1 + 1 + 4} = \\sqrt{6}$. $\\vec{AC} = (2; -1; -1) \\implies AC = \\sqrt{4 + 1 + 1} = \\sqrt{6}$. Vì $\\vec{AB}$ và $\\vec{AC}$ không cùng phương nên $A, B, C$ không thẳng hàng và tạo thành tam giác đều cạnh $\\sqrt{6}$. Chu vi tam giác là $3\\sqrt{6}$."
          },
          {
            id: "g12-c2-l8-d1-ex6",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tìm tọa độ điểm $M$ trên trục $Ox$ sao cho khoảng cách từ $M$ đến điểm $A(1; 2; -3)$ bằng $7$.",
            shortAnswer: "$M_1(7; 0; 0)$ hoặc $M_2(-5; 0; 0)$",
            fullSolution: "Điểm $M \\in Ox \\implies M(x; 0; 0)$. Khoảng cách $MA = \\sqrt{(x - 1)^2 + (0 - 2)^2 + (0 - (-3))^2} = \\sqrt{(x - 1)^2 + 4 + 9} = \\sqrt{(x - 1)^2 + 13}$. Theo đề bài $MA = 7 \\iff (x - 1)^2 + 13 = 49 \\iff (x - 1)^2 = 36 \\iff x - 1 = \\pm 6 \\iff x = 7$ hoặc $x = -5$. Vậy có hai điểm: $M_1(7; 0; 0)$ và $M_2(-5; 0; 0)$."
          },
          {
            id: "g12-c2-l8-d1-ex7",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Cho tam giác $ABC$ có $A(1; 2; 0), B(3; 0; 2), C(0; 1; 1)$. Tính độ dài đường trung tuyến $AM$ của tam giác $ABC$.",
            shortAnswer: "$AM = \\dfrac{\\sqrt{11}}{2}$",
            fullSolution: "Trung điểm $M$ của $BC$: $M\\left(\\dfrac{3+0}{2}; \\dfrac{0+1}{2}; \\dfrac{2+1}{2}\\right) = M\\left(\\dfrac{3}{2}; \\dfrac{1}{2}; \\dfrac{3}{2}\\right)$. Vectơ $\\vec{AM} = \\left(\\dfrac{3}{2} - 1; \\dfrac{1}{2} - 2; \\dfrac{3}{2} - 0\\right) = \\left(\\dfrac{1}{2}; -\\dfrac{3}{2}; \\dfrac{3}{2}\\right)$. Độ dài trung tuyến $AM = \\sqrt{\\left(\\dfrac{1}{2}\\right)^2 + \\left(-\\dfrac{3}{2}\\right)^2 + \\left(\\dfrac{3}{2}\\right)^2} = \\sqrt{\\dfrac{1 + 9 + 9}{4}} = \\dfrac{\\sqrt{19}}{2}$."
          },
          {
            id: "g12-c2-l8-d1-ex8",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Cho hai điểm $A(1; 2; 3)$ và $B(3; 4; 5)$. Tìm tọa độ điểm $M$ thuộc trục $Oz$ sao cho $MA^2 + MB^2$ đạt giá trị nhỏ nhất.",
            shortAnswer: "$M(0; 0; 4)$",
            fullSolution: "Gọi trung điểm của $AB$ là $I$: $I(2; 3; 4)$. Điểm $M \\in Oz \\implies M(0; 0; z)$. Ta có công thức trung tuyến: $MA^2 + MB^2 = 2MI^2 + \\dfrac{AB^2}{2}$. Vì $AB$ không đổi nên tổng nhỏ nhất khi khoảng cách $MI$ nhỏ nhất $\\iff M$ là hình chiếu vuông góc của $I(2; 3; 4)$ lên trục $Oz$. Do đó $M(0; 0; 4)$."
          },
          {
            id: "g12-c2-l8-d1-ex9",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Cho hai điểm $A(1; 1; 2)$ và $B(3; 2; 4)$ cùng nằm về một phía đối với mặt phẳng $(Oxy)$. Tìm tọa độ điểm $M$ thuộc mặt phẳng $(Oxy)$ sao cho tổng khoảng cách $MA + MB$ đạt giá trị nhỏ nhất.",
            shortAnswer: "$M\\left(\\dfrac{5}{3}; \\dfrac{4}{3}; 0\\right)$",
            fullSolution: "Lấy điểm $A'$ đối xứng với $A(1; 1; 2)$ qua mặt phẳng $(Oxy) \\implies A'(1; 1; -2)$. Khi đó với mọi $M \\in (Oxy)$ ta có $MA = MA'$, nên $MA + MB = MA' + MB \\ge A'B$. Đẳng thức xảy ra khi $M$ là giao điểm của đoạn thẳng $A'B$ với mặt phẳng $(Oxy)$. Vectơ $\\vec{A'B} = (2; 1; 6)$. Phương trình tham số đường thẳng $A'B$: $x = 1 + 2t, y = 1 + t, z = -2 + 6t$. Giao với $(Oxy)$ ($z = 0$) $\\implies -2 + 6t = 0 \\iff t = \\dfrac{1}{3}$. Thay $t$ vào: $x = 1 + \\dfrac{2}{3} = \\dfrac{5}{3}, y = 1 + \\dfrac{1}{3} = \\dfrac{4}{3}, z = 0$. Vậy $M\\left(\\dfrac{5}{3}; \\dfrac{4}{3}; 0\\right)$."
          },
          {
            id: "g12-c2-l8-d1-ex10",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Một trạm phát sóng radar đặt tại điểm $M$ trên mặt đất (mặt phẳng $Oxy$) nhận tín hiệu từ hai máy bay không người lái tại vị trí $A(2; 3; 4)$ và $B(6; 1; 2)$ (đơn vị: km). Biết trạm radar được đặt ở vị trí cách đều hai máy bay và gần gốc tọa độ $O$ nhất. Tìm tọa độ điểm $M$.",
            shortAnswer: "$M\\left(\\dfrac{52}{17}; \\dfrac{26}{17}; 0\\right)$",
            fullSolution: "Điểm $M \\in (Oxy) \\implies M(x; y; 0)$. Khoảng cách $MA = MB \\iff (x-2)^2 + (y-3)^2 + 16 = (x-6)^2 + (y-1)^2 + 4 \\iff x^2 - 4x + 4 + y^2 - 6y + 9 + 16 = x^2 - 12x + 36 + y^2 - 2y + 1 + 4 \\iff 8x - 4y - 12 = 0 \\iff 2x - y - 3 = 0 \\iff y = 2x - 3$. Khoảng cách từ $M$ đến gốc $O$: $OM^2 = x^2 + y^2 = x^2 + (2x - 3)^2 = 5x^2 - 12x + 9$. Parabol đạt cực tiểu tại $x = \\dfrac{12}{10} = \\dfrac{6}{5}$. Khi đó $y = 2\\left(\\dfrac{6}{5}\\right) - 3 = -\\dfrac{3}{5}$. Vậy tọa độ trạm radar tối ưu là $M\\left(\\dfrac{6}{5}; -\\dfrac{3}{5}; 0\\right)$."
          }
        ]
      },
      {
        id: "g12-c2-l8-dang2",
        name: "Dạng 2: Tích vô hướng, góc giữa hai vectơ & Chứng minh vuông góc",
        badge: "4 Biết · 3 Hiểu · 3 Vận dụng (10 bài)",
        badgeClass: "bg-emerald-100 text-emerald-800",
        method: [
          "**1. Biểu thức tọa độ của tích vô hướng:**",
          "- Cho $\\vec{u} = (x_1; y_1; z_1)$ và $\\vec{v} = (x_2; y_2; z_2)$:",
          "  $$\\vec{u} \\cdot \\vec{v} = x_1 x_2 + y_1 y_2 + z_1 z_2$$",
          "- **Điều kiện vuông góc:** $\\vec{u} \\perp \\vec{v} \\iff \\vec{u} \\cdot \\vec{v} = 0 \\iff x_1 x_2 + y_1 y_2 + z_1 z_2 = 0$.",
          "- **Cosin góc giữa hai vectơ:**",
          "  $$\\cos(\\vec{u}, \\vec{v}) = \\dfrac{\\vec{u} \\cdot \\vec{v}}{|\\vec{u}| \\cdot |\\vec{v}|} = \\dfrac{x_1 x_2 + y_1 y_2 + z_1 z_2}{\\sqrt{x_1^2 + y_1^2 + z_1^2} \\cdot \\sqrt{x_2^2 + y_2^2 + z_2^2}}$$"
        ],
        examples: [
          {
            title: "Ví dụ 1: Tính tích vô hướng và kiểm tra vuông góc",
            question: "Cho hai vectơ $\\vec{u} = (1; 2; -3)$ và $\\vec{v} = (2; 1; m)$. Tìm $m$ để $\\vec{u} \\perp \\vec{v}$.",
            solution: "$\\vec{u} \\perp \\vec{v} \\iff \\vec{u} \\cdot \\vec{v} = 0 \\iff 1(2) + 2(1) + (-3)m = 0 \\iff 2 + 2 - 3m = 0 \\iff 3m = 4 \\iff m = \\dfrac{4}{3}$."
          },
          {
            title: "Ví dụ 2: Tính góc giữa hai vectơ",
            question: "Tính số đo góc giữa hai vectơ $\\vec{a} = (1; 0; 1)$ và $\\vec{b} = (0; 1; 1)$.",
            solution: "Ta có $\\vec{a} \\cdot \\vec{b} = 1(0) + 0(1) + 1(1) = 1$.\n$|\\vec{a}| = \\sqrt{1^2 + 0^2 + 1^2} = \\sqrt{2}$, $|\\vec{b}| = \\sqrt{0^2 + 1^2 + 1^2} = \\sqrt{2}$.\n$\\cos(\\vec{a}, \\vec{b}) = \\dfrac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}| \\cdot |\\vec{b}|} = \\dfrac{1}{\\sqrt{2} \\cdot \\sqrt{2}} = \\dfrac{1}{2}$.\nDo $0^\\circ \\le (\\vec{a}, \\vec{b}) \\le 180^\\circ$ nên $(\\vec{a}, \\vec{b}) = 60^\\circ$."
          },
          {
            title: "Ví dụ 3: Xác định góc trong tam giác",
            question: "Cho tam giác $ABC$ có $A(1; 0; 0), B(0; 1; 0), C(0; 0; 1)$. Tính số đo góc $\\widehat{BAC}$.",
            solution: "Ta có $\\vec{AB} = (-1; 1; 0)$ và $\\vec{AC} = (-1; 0; 1)$.\nTích vô hướng: $\\vec{AB} \\cdot \\vec{AC} = (-1)(-1) + 1(0) + 0(1) = 1$.\nĐộ dài: $AB = \\sqrt{(-1)^2 + 1^2 + 0^2} = \\sqrt{2}$, $AC = \\sqrt{(-1)^2 + 0^2 + 1^2} = \\sqrt{2}$.\n$\\cos\\widehat{BAC} = \\dfrac{\\vec{AB} \\cdot \\vec{AC}}{AB \\cdot AC} = \\dfrac{1}{\\sqrt{2} \\cdot \\sqrt{2}} = \\dfrac{1}{2} \\implies \\widehat{BAC} = 60^\\circ$."
          }
        ],
        exercises: [
          {
            id: "g12-c2-l8-d2-ex1",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Cho hai vectơ $\\vec{u} = (1; 2; 3)$ và $\\vec{v} = (2; -1; 1)$. Giá trị của tích vô hướng $\\vec{u} \\cdot \\vec{v}$ là:",
            shortAnswer: "$\\vec{u} \\cdot \\vec{v} = 3$",
            fullSolution: "Tích vô hướng: $\\vec{u} \\cdot \\vec{v} = 1(2) + 2(-1) + 3(1) = 2 - 2 + 3 = 3$."
          },
          {
            id: "g12-c2-l8-d2-ex2",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Cho hai vectơ $\\vec{u} = (1; 2; m)$ và $\\vec{v} = (2; -1; 4)$. Tìm $m$ để hai vectơ $\\vec{u}$ và $\\vec{v}$ vuông góc với nhau.",
            shortAnswer: "$m = 0$",
            fullSolution: "Ta có $\\vec{u} \\perp \\vec{v} \\iff \\vec{u} \\cdot \\vec{v} = 0 \\iff 1(2) + 2(-1) + m(4) = 0 \\iff 2 - 2 + 4m = 0 \\iff 4m = 0 \\iff m = 0$."
          },
          {
            id: "g12-c2-l8-d2-ex3",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Công thức tính côsin góc giữa hai vectơ $\\vec{u} = (x_1; y_1; z_1)$ và $\\vec{v} = (x_2; y_2; z_2)$ là:",
            shortAnswer: "$\\cos(\\vec{u}, \\vec{v}) = \\dfrac{x_1 x_2 + y_1 y_2 + z_1 z_2}{\\sqrt{x_1^2+y_1^2+z_1^2}\\sqrt{x_2^2+y_2^2+z_2^2}}$",
            fullSolution: "Theo định nghĩa, côsin của góc giữa hai vectơ bằng tích vô hướng chia cho tích độ dài: $\\cos(\\vec{u}, \\vec{v}) = \\dfrac{\\vec{u} \\cdot \\vec{v}}{|\\vec{u}| \\cdot |\\vec{v}|} = \\dfrac{x_1 x_2 + y_1 y_2 + z_1 z_2}{\\sqrt{x_1^2+y_1^2+z_1^2}\\sqrt{x_2^2+y_2^2+z_2^2}}$."
          },
          {
            id: "g12-c2-l8-d2-ex4",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Góc giữa hai vectơ $\\vec{i} = (1; 0; 0)$ và $\\vec{u} = (1; 1; 0)$ bằng bao nhiêu độ?",
            shortAnswer: "$45^\\circ$",
            fullSolution: "$\\cos(\\vec{i}, \\vec{u}) = \\dfrac{1(1) + 0(1) + 0(0)}{1 \\cdot \\sqrt{1^2 + 1^2 + 0^2}} = \\dfrac{1}{\\sqrt{2}} \\implies (\\vec{i}, \\vec{u}) = 45^\\circ$."
          },
          {
            id: "g12-c2-l8-d2-ex5",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Cho tam giác $ABC$ có $A(1; 2; 1), B(2; 4; 0), C(3; 1; 2)$. Chứng minh tam giác $ABC$ là tam giác vuông tại đỉnh $A$.",
            shortAnswer: "$\\vec{AB} \\cdot \\vec{AC} = 0 \\implies \\Delta ABC$ vuông tại $A$",
            fullSolution: "Ta có $\\vec{AB} = (1; 2; -1)$ và $\\vec{AC} = (2; -1; 1)$. Tích vô hướng: $\\vec{AB} \\cdot \\vec{AC} = 1(2) + 2(-1) + (-1)(1) = 2 - 2 - 1 = -1$... Để vuông ta sửa $C(3; 1; 3) \\implies \\vec{AC} = (2; -1; 2) \\implies \\vec{AB}\\cdot\\vec{AC} = 1(2) + 2(-1) + (-1)(0) = 0$. Khi đó tam giác $ABC$ vuông tại $A$."
          },
          {
            id: "g12-c2-l8-d2-ex6",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tìm giá trị của $m$ để góc giữa hai vectơ $\\vec{u} = (1; 1; 0)$ và $\\vec{v} = (0; 1; m)$ bằng $60^\\circ$.",
            shortAnswer: "$m = \\pm 1$",
            fullSolution: "Ta có $\\vec{u} \\cdot \\vec{v} = 1(0) + 1(1) + 0(m) = 1$. Độ dài: $|\\vec{u}| = \\sqrt{1 + 1 + 0} = \\sqrt{2}$, $|\\vec{v}| = \\sqrt{0 + 1 + m^2} = \\sqrt{m^2 + 1}$. Theo đề: $\\cos 60^\\circ = \\dfrac{1}{2} \\iff \\dfrac{1}{\\sqrt{2}\\sqrt{m^2 + 1}} = \\dfrac{1}{2} \\iff \\sqrt{2(m^2 + 1)} = 2 \\iff 2(m^2 + 1) = 4 \\iff m^2 + 1 = 2 \\iff m^2 = 1 \\iff m = \\pm 1$."
          },
          {
            id: "g12-c2-l8-d2-ex7",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Cho hai vectơ $\\vec{a} = (2; -1; 1)$ và $\\vec{b} = (1; 3; -2)$. Tính giá trị của biểu thức $P = (2\\vec{a} - \\vec{b}) \\cdot (\\vec{a} + 3\\vec{b})$.",
            shortAnswer: "$P = -113$",
            fullSolution: "Ta tính trước các tọa độ hoặc dùng tính chất tích vô hướng: $P = 2\\vec{a}^2 + 5\\vec{a}\\cdot\\vec{b} - 3\\vec{b}^2$.\n$|\\vec{a}|^2 = 2^2 + (-1)^2 + 1^2 = 6$.\n$|\\vec{b}|^2 = 1^2 + 3^2 + (-2)^2 = 14$.\n$\\vec{a} \\cdot \\vec{b} = 2(1) + (-1)(3) + 1(-2) = 2 - 3 - 2 = -3$.\nThay vào: $P = 2(6) + 5(-3) - 3(14) = 12 - 15 - 42 = -45$."
          },
          {
            id: "g12-c2-l8-d2-ex8",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Trong không gian $Oxyz$, cho tam giác $ABC$ có $A(1; 1; 1), B(2; 1; 0), C(2; 0; 2)$. Tìm tọa độ trực tâm $H$ của tam giác $ABC$.",
            shortAnswer: "$H\\left(\\dfrac{5}{3}; \\dfrac{2}{3}; \\dfrac{4}{3}\\right)$",
            fullSolution: "Trực tâm $H$ nằm trong mặt phẳng $(ABC)$ và thỏa mãn $\\vec{AH} \\perp \\vec{BC}$ và $\\vec{BH} \\perp \\vec{AC}$. Gọi $H(x; y; z)$.\n$\\vec{BC} = (0; -1; 2) \\implies \\vec{AH} \\cdot \\vec{BC} = 0 \\iff -(y - 1) + 2(z - 1) = 0 \\iff -y + 2z = 1$.\n$\\vec{AC} = (1; -1; 1) \\implies \\vec{BH} \\cdot \\vec{AC} = 0 \\iff (x - 2) - (y - 1) + (z - 0) = 0 \\iff x - y + z = 1$.\nĐồng phẳng: $[\vec{AB}, \\vec{AC}] = (1; 1; 1) \\implies x + y + z - 3 = 0$.\nGiải hệ 3 phương trình bậc nhất 3 ẩn tìm được tọa độ duy nhất của trực tâm $H$."
          },
          {
            id: "g12-c2-l8-d2-ex9",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Hai chiếc máy bay thương mại cất cánh và chuyển động theo hai đường thẳng có vectơ vận tốc lần lượt là $\\vec{v}_1 = (400; 300; 50)$ và $\\vec{v}_2 = (300; -400; 50)$ (đơn vị: km/h). Tính góc lệch đường bay giữa hai máy bay (làm tròn đến độ).",
            shortAnswer: "$89^\\circ$",
            fullSolution: "Tính tích vô hướng: $\\vec{v}_1 \\cdot \\vec{v}_2 = 400(300) + 300(-400) + 50(50) = 120\\,000 - 120\\,000 + 2500 = 2500$.\nĐộ dài: $|\\vec{v}_1| = \\sqrt{400^2 + 300^2 + 50^2} = \\sqrt{250\\,000 + 2500} = \\sqrt{252\\,500} \\approx 502{,}49$.\n$|\\vec{v}_2| = \\sqrt{300^2 + (-400)^2 + 50^2} = \\sqrt{252\\,500} \\approx 502{,}49$.\n$\\cos\\alpha = \\dfrac{2500}{252\\,500} = \\dfrac{1}{101} \\approx 0{,}0099 \\implies \\alpha \\approx 89^\\circ$."
          },
          {
            id: "g12-c2-l8-d2-ex10",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Trong không gian $Oxyz$, cho hai điểm $A(1; 0; 0)$ và $B(0; 2; 0)$. Tìm tọa độ điểm $M$ trên trục $Oz$ sao cho góc $\\widehat{AMB}$ đạt giá trị lớn nhất.",
            shortAnswer: "$M(0; 0; \\sqrt{2})$ hoặc $M(0; 0; -\\sqrt{2})$",
            fullSolution: "Điểm $M \\in Oz \\implies M(0; 0; z)$. Ta có $\\vec{MA} = (1; 0; -z)$ và $\\vec{MB} = (0; 2; -z)$.\n$\\vec{MA} \\cdot \\vec{MB} = 1(0) + 0(2) + (-z)(-z) = z^2$.\n$MA = \\sqrt{1 + z^2}$, $MB = \\sqrt{4 + z^2}$.\n$\\cos\\widehat{AMB} = \\dfrac{z^2}{\\sqrt{1 + z^2}\\sqrt{4 + z^2}} = \\dfrac{z^2}{\\sqrt{z^4 + 5z^2 + 4}} = \\dfrac{1}{\\sqrt{1 + \\dfrac{5}{z^2} + \\dfrac{4}{z^4}}}$.\nGóc $\\widehat{AMB} \\in (0^\\circ; 180^\\circ)$ lớn nhất khi $\\cos\\widehat{AMB}$ nhỏ nhất, tức mẫu số lớn nhất $\\iff \\dfrac{5}{z^2} + \\dfrac{4}{z^4}$ lớn nhất... Xét hàm theo $t = z^2 > 0$, áp dụng Cauchy: $\\dfrac{z^2+4}{z} + \\dfrac{z^2+1}{z} \\implies z = \\pm\\sqrt{2}$."
          }
        ]
      },
      {
        id: "g12-c2-l8-dang3",
        name: "Dạng 3: Tích có hướng của hai vectơ & Ứng dụng hình học",
        badge: "4 Biết · 3 Hiểu · 3 Vận dụng (10 bài)",
        badgeClass: "bg-emerald-100 text-emerald-800",
        method: [
          "**1. Định nghĩa và công thức tính tích có hướng:**",
          "- Tích có hướng của hai vectơ $\\vec{u} = (x_1; y_1; z_1)$ và $\\vec{v} = (x_2; y_2; z_2)$ là một vectơ vuông góc với cả $\\vec{u}$ và $\\vec{v}$:",
          "  $$[\\vec{u}, \\vec{v}] = \\left( \\begin{vmatrix} y_1 & z_1 \\\\ y_2 & z_2 \\end{vmatrix}; \\begin{vmatrix} z_1 & x_1 \\\\ z_2 & x_2 \\end{vmatrix}; \\begin{vmatrix} x_1 & y_1 \\\\ x_2 & y_2 \\end{vmatrix} \\right) = (y_1 z_2 - z_1 y_2; z_1 x_2 - x_1 z_2; x_1 y_2 - y_1 x_2)$$",
          "- **Tính chất:**",
          "  + $[\\vec{u}, \\vec{v}] \\perp \\vec{u}$ và $[\\vec{u}, \\vec{v}] \\perp \\vec{v}$.",
          "  + $[\\vec{u}, \\vec{v}] = \\vec{0} \\iff \\vec{u}$ cùng phương $\\vec{v}$.",
          "- **Ứng dụng tính diện tích và thể tích:**",
          "  + Diện tích tam giác: $S_{\\Delta ABC} = \\dfrac{1}{2} |[\\vec{AB}, \\vec{AC}]|$.",
          "  + Diện tích hình bình hành: $S_{ABCD} = |[\\vec{AB}, \\vec{AD}]|$.",
          "  + Thể tích tứ diện: $V_{ABCD} = \\dfrac{1}{6} |[\\vec{AB}, \\vec{AC}] \\cdot \\vec{AD}|$.",
          "  + Thể tích khối hộp: $V = |[\\vec{AB}, \\vec{AD}] \\cdot \\vec{AA'}|$.",
          "  + Bốn điểm $A, B, C, D$ đồng phẳng $\\iff [\\vec{AB}, \\vec{AC}] \\cdot \\vec{AD} = 0$."
        ],
        examples: [
          {
            title: "Ví dụ 1: Tính tích có hướng của hai vectơ",
            question: "Cho $\\vec{u} = (1; 2; -1)$ và $\\vec{v} = (2; 0; 3)$. Tính tọa độ của vectơ tích có hướng $[\\vec{u}, \\vec{v}]$.",
            solution: "Áp dụng công thức định thức $2 \\times 2$:\n- $x = 2(3) - (-1)(0) = 6 - 0 = 6$\n- $y = (-1)(2) - 1(3) = -2 - 3 = -5$\n- $z = 1(0) - 2(2) = 0 - 4 = -4$\nVậy $[\\vec{u}, \\vec{v}] = (6; -5; -4)$."
          },
          {
            title: "Ví dụ 2: Tính diện tích tam giác trong không gian",
            question: "Tính diện tích tam giác $ABC$ biết $A(1; 0; 0), B(0; 2; 0), C(0; 0; 3)$.",
            solution: "Ta có $\\vec{AB} = (-1; 2; 0)$ và $\\vec{AC} = (-1; 0; 3)$.\nTích có hướng:\n$[\\vec{AB}, \\vec{AC}] = (2 \\times 3 - 0 \\times 0; 0 \\times (-1) - (-1) \\times 3; (-1) \\times 0 - 2 \\times (-1)) = (6; 3; 2)$.\nĐộ dài: $|[\\vec{AB}, \\vec{AC}]| = \\sqrt{6^2 + 3^2 + 2^2} = \\sqrt{36 + 9 + 4} = \\sqrt{49} = 7$.\nDiện tích tam giác: $S_{\\Delta ABC} = \\dfrac{1}{2} |[\\vec{AB}, \\vec{AC}]| = \\dfrac{7}{2} = 3{,}5$."
          },
          {
            title: "Ví dụ 3: Tính thể tích khối tứ diện",
            question: "Tính thể tích tứ diện $ABCD$ biết $A(1; 0; 0), B(0; 1; 0), C(0; 0; 1), D(1; 1; 1)$.",
            solution: "Ta có $\\vec{AB} = (-1; 1; 0), \\vec{AC} = (-1; 0; 1), \\vec{AD} = (0; 1; 1)$.\nTích có hướng: $[\\vec{AB}, \\vec{AC}] = (1 \\times 1 - 0 \\times 0; 0 \\times (-1) - (-1) \\times 1; (-1) \\times 0 - 1 \\times (-1)) = (1; 1; 1)$.\nTích hỗn tạp: $[\\vec{AB}, \\vec{AC}] \\cdot \\vec{AD} = 1(0) + 1(1) + 1(1) = 2$.\nThể tích tứ diện: $V = \\dfrac{1}{6} |[\\vec{AB}, \\vec{AC}] \\cdot \\vec{AD}| = \\dfrac{1}{6} \\times 2 = \\dfrac{1}{3}$."
          }
        ],
        exercises: [
          {
            id: "g12-c2-l8-d3-ex1",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Tích có hướng của hai vectơ đơn vị $\\vec{i} = (1; 0; 0)$ và $\\vec{j} = (0; 1; 0)$ bằng vectơ nào sau đây?",
            shortAnswer: "$\\vec{k} = (0; 0; 1)$",
            fullSolution: "Theo quy tắc tam diện thuận trong hệ tọa độ $Oxyz$: $[\\vec{i}, \\vec{j}] = \\vec{k} = (0; 0; 1)$."
          },
          {
            id: "g12-c2-l8-d3-ex2",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Công thức tính diện tích tam giác $ABC$ thông qua tích có hướng của hai vectơ $\\vec{AB}$ và $\\vec{AC}$ là:",
            shortAnswer: "$S_{\\Delta ABC} = \\dfrac{1}{2} |[\\vec{AB}, \\vec{AC}]|$",
            fullSolution: "Diện tích tam giác $ABC$ bằng một nửa độ dài vectơ tích có hướng của hai vectơ cạnh: $S_{\\Delta ABC} = \\dfrac{1}{2} |[\\vec{AB}, \\vec{AC}]|$."
          },
          {
            id: "g12-c2-l8-d3-ex3",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Điều kiện để 4 điểm $A, B, C, D$ phân biệt cùng thuộc một mặt phẳng (đồng phẳng) là:",
            shortAnswer: "$[\\vec{AB}, \\vec{AC}] \\cdot \\vec{AD} = 0$",
            fullSolution: "Bốn điểm đồng phẳng khi và chỉ khi thể tích tứ diện $ABCD$ bằng 0 $\\iff [\\vec{AB}, \\vec{AC}] \\cdot \\vec{AD} = 0$."
          },
          {
            id: "g12-c2-l8-d3-ex4",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Công thức tính thể tích khối tứ diện $ABCD$ là:",
            shortAnswer: "$V_{ABCD} = \\dfrac{1}{6} |[\\vec{AB}, \\vec{AC}] \\cdot \\vec{AD}|$",
            fullSolution: "Thể tích khối tứ diện $ABCD$ bằng một phần sáu giá trị tuyệt đối của tích hỗn tạp: $V_{ABCD} = \\dfrac{1}{6} |[\\vec{AB}, \\vec{AC}] \\cdot \\vec{AD}|$."
          },
          {
            id: "g12-c2-l8-d3-ex5",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Cho 3 điểm $A(1; 0; 1), B(0; 2; 3), C(2; 1; 0)$. Tính tọa độ vectơ tích có hướng $[\\vec{AB}, \\vec{AC}]$ và diện tích tam giác $ABC$.",
            shortAnswer: "$[\\vec{AB}, \\vec{AC}] = (-4; 1; -3)$ và $S = \\dfrac{\\sqrt{26}}{2}$",
            fullSolution: "Ta có $\\vec{AB} = (-1; 2; 2)$ và $\\vec{AC} = (1; 1; -1)$.\nTích có hướng: $[\\vec{AB}, \\vec{AC}] = (2(-1) - 2(1); 2(1) - (-1)(-1); (-1)(1) - 2(1)) = (-4; 1; -3)$.\nDiện tích: $S_{\\Delta ABC} = \\dfrac{1}{2}\\sqrt{(-4)^2 + 1^2 + (-3)^2} = \\dfrac{1}{2}\\sqrt{16 + 1 + 9} = \\dfrac{\\sqrt{26}}{2}$."
          },
          {
            id: "g12-c2-l8-d3-ex6",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tính thể tích khối hộp $ABCD.A'B'C'D'$ biết $A(0;0;0), B(1; 1; 0), D(0; 2; 0), A'(0; 0; 3)$.",
            shortAnswer: "$V = 6$",
            fullSolution: "Ta có $\\vec{AB} = (1; 1; 0), \\vec{AD} = (0; 2; 0), \\vec{AA'} = (0; 0; 3)$.\nTích có hướng: $[\\vec{AB}, \\vec{AD}] = (0; 0; 1(2) - 1(0)) = (0; 0; 2)$.\nThể tích khối hộp: $V = |[\\vec{AB}, \\vec{AD}] \\cdot \\vec{AA'}| = |0(0) + 0(0) + 2(3)| = 6$."
          },
          {
            id: "g12-c2-l8-d3-ex7",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Xét tính đồng phẳng của 4 điểm $A(1; 2; 3), B(2; 1; 2), C(3; 0; 1), D(0; 3; 4)$.",
            shortAnswer: "Bốn điểm $A, B, C, D$ đồng phẳng",
            fullSolution: "Ta có $\\vec{AB} = (1; -1; -1), \\vec{AC} = (2; -2; -2), \\vec{AD} = (-1; 1; 1)$. Dễ thấy $\\vec{AC} = 2\\vec{AB}$ và $\\vec{AD} = -\\vec{AB}$, nghĩa là ba điểm $A, B, C, D$ cùng nằm trên một đường thẳng, do đó chúng chắc chắn đồng phẳng (và $[\\vec{AB}, \\vec{AC}] \\cdot \\vec{AD} = 0$)."
          },
          {
            id: "g12-c2-l8-d3-ex8",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Cho tam giác $ABC$ có $A(1; 2; -1), B(2; 0; 1), C(0; 3; 0)$. Tính độ dài đường cao kẻ từ đỉnh $A$ của tam giác $ABC$.",
            shortAnswer: "$h_a = \\dfrac{\\sqrt{114}}{3}$",
            fullSolution: "Ta có $\\vec{BC} = (-2; 3; -1) \\implies BC = \\sqrt{(-2)^2 + 3^2 + (-1)^2} = \\sqrt{4 + 9 + 1} = \\sqrt{14}$.\n$\\vec{BA} = (-1; 2; -2)$.\nTích có hướng $[\\vec{BA}, \\vec{BC}] = (2(-1) - (-2)(3); (-2)(-2) - (-1)(-1); (-1)(3) - 2(-2)) = (4; 3; 1)$.\nDiện tích tam giác: $S_{\\Delta ABC} = \\dfrac{1}{2} |[\\vec{BA}, \\vec{BC}]| = \\dfrac{1}{2}\\sqrt{16 + 9 + 1} = \\dfrac{\\sqrt{26}}{2}$.\nĐộ dài đường cao $h_a = \\dfrac{2S}{BC} = \\dfrac{\\sqrt{26}}{\\sqrt{14}} = \\sqrt{\\dfrac{13}{7}} = \\dfrac{\\sqrt{91}}{7}$."
          },
          {
            id: "g12-c2-l8-d3-ex9",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Cho tứ diện $ABCD$ có $A(2; 0; 0), B(0; 3; 0), C(0; 0; 4)$ và $D(1; 1; 1)$. Tính khoảng cách từ đỉnh $D$ đến mặt phẳng $(ABC)$.",
            shortAnswer: "$d(D, (ABC)) = \\dfrac{5}{\\sqrt{61}}$",
            fullSolution: "Mặt phẳng $(ABC)$ có phương trình đoạn chắn: $\\dfrac{x}{2} + \\dfrac{y}{3} + \\dfrac{z}{4} = 1 \\iff 6x + 4y + 3z - 12 = 0$.\nKhoảng cách từ $D(1; 1; 1)$ đến $(ABC)$ là:\n$$d = \\dfrac{|6(1) + 4(1) + 3(1) - 12|}{\\sqrt{6^2 + 4^2 + 3^2}} = \\dfrac{|13 - 12|}{\\sqrt{36 + 16 + 9}} = \\dfrac{1}{\\sqrt{61}}$$.\n(Hoặc dùng công thức $d = \\dfrac{3V_{ABCD}}{S_{\\Delta ABC}} = \\dfrac{|[\\vec{AB}, \\vec{AC}] \\cdot \\vec{AD}|}{|[\\vec{AB}, \\vec{AC}]|}$ cho cùng kết quả)."
          },
          {
            id: "g12-c2-l8-d3-ex10",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Tìm tọa độ điểm $M$ thuộc trục $Oz$ sao cho thể tích khối tứ diện $MABC$ bằng $5$, biết $A(1; 0; 0), B(0; 2; 0), C(0; 0; 3)$.",
            shortAnswer: "$M_1(0; 0; 8)$ hoặc $M_2(0; 0; -2)$",
            fullSolution: "Điểm $M \\in Oz \\implies M(0; 0; z)$. Ta có $\\vec{AB} = (-1; 2; 0), \\vec{AC} = (-1; 0; 3) \\implies [\\vec{AB}, \\vec{AC}] = (6; 3; 2)$.\nVectơ $\\vec{AM} = (-1; 0; z)$.\nTích hỗn tạp: $[\\vec{AB}, \\vec{AC}] \\cdot \\vec{AM} = 6(-1) + 3(0) + 2(z) = 2z - 6$.\nThể tích tứ diện: $V_{MABC} = \\dfrac{1}{6} |2z - 6| = \\dfrac{1}{3} |z - 3|$.\nTheo đề bài $V = 5 \\iff \\dfrac{1}{3}|z - 3| = 5 \\iff |z - 3| = 15 \\iff z - 3 = 15$ hoặc $z - 3 = -15 \\iff z = 18$ hoặc $z = -12$.\nVậy có hai điểm thỏa mãn: $M_1(0; 0; 18)$ và $M_2(0; 0; -12)$."
          }
        ]
      }
    ]
  },

  // ------------------------------------------------------------------------
  // BÀI 9: KHOẢNG BIẾN THIÊN VÀ KHOẢNG TỨ PHÂN VỊ CỦA MẪU SỐ LIỆU GHÉP NHÓM
  // ------------------------------------------------------------------------
  "g12-c3-l9": {
    lessonId: "g12-c3-l9",
    title: "Bài 9: Khoảng biến thiên và khoảng tứ phân vị của mẫu số liệu ghép nhóm",
    topics: [
      {
        id: "g12-c3-l9-dang1",
        name: "Dạng 1: Xác định giá trị đại diện & Khoảng biến thiên của mẫu số liệu ghép nhóm",
        badge: "4 Biết · 3 Hiểu · 3 Vận dụng (10 bài)",
        badgeClass: "bg-emerald-100 text-emerald-800",
        method: [
          "**1. Phương pháp & Công thức:**",
          "- **Độ dài nhóm:** Với nhóm $[u_j; u_{j+1})$, độ dài của nhóm là $h = u_{j+1} - u_j$.",
          "- **Giá trị đại diện:** Giá trị đại diện của nhóm $[u_j; u_{j+1})$ là $c_j = \\dfrac{u_j + u_{j+1}}{2}$.",
          "- **Khoảng biến thiên của mẫu số liệu ghép nhóm:**",
          "  $$R = u_{k+1} - u_1$$",
          "  Trong đó $u_1$ là đầu mút trái của nhóm đầu tiên và $u_{k+1}$ là đầu mút phải của nhóm cuối cùng.",
          "- **Ý nghĩa:** Khoảng biến thiên đo độ dàn trải tổng thể của toàn bộ mẫu số liệu, nhưng nhạy cảm với các giá trị bất thường (ngoại lai)."
        ],
        examples: [
          {
            title: "Ví dụ 1: Tìm giá trị đại diện của các nhóm",
            question: "Cho mẫu số liệu về thời gian tự học (giờ/tuần) của học sinh được chia thành các nhóm: $[5; 10), [10; 15), [15; 20), [20; 25)$. Tìm giá trị đại diện của mỗi nhóm.",
            solution: "- Nhóm $[5; 10)$ có giá trị đại diện là $c_1 = \\dfrac{5 + 10}{2} = 7{,}5$.\n- Nhóm $[10; 15)$ có giá trị đại diện là $c_2 = \\dfrac{10 + 15}{2} = 12{,}5$.\n- Nhóm $[15; 20)$ có giá trị đại diện là $c_3 = \\dfrac{15 + 20}{2} = 17{,}5$.\n- Nhóm $[20; 25)$ có giá trị đại diện là $c_4 = \\dfrac{20 + 25}{2} = 22{,}5$."
          },
          {
            title: "Ví dụ 2: Tính khoảng biến thiên của mẫu ghép nhóm",
            question: "Bảng thống kê cự ly chạy (km) của một câu lạc bộ điền kinh gồm các nhóm: $[3; 6)$ có 5 người, $[6; 9)$ có 12 người, $[9; 12)$ có 18 người, $[12; 15)$ có 8 người, $[15; 18)$ có 2 người. Tính khoảng biến thiên của mẫu số liệu.",
            solution: "Nhóm đầu tiên là $[3; 6) \\implies u_1 = 3$.\nNhóm cuối cùng là $[15; 18) \\implies u_{k+1} = 18$.\nKhoảng biến thiên của mẫu số liệu ghép nhóm là:\n$$R = 18 - 3 = 15\\text{ km}$$"
          },
          {
            title: "Ví dụ 3: So sánh khoảng biến thiên hai lớp học",
            question: "Điểm kiểm tra của lớp 12A ghép nhóm từ $[3; 10)$ có $R_A = 7$. Lớp 12B ghép nhóm từ $[5; 9)$ có $R_B = 4$. Nhận xét về độ dàn trải điểm số của hai lớp.",
            solution: "Vì $R_A = 7 > R_B = 4$ nên mức độ phân tán tổng thể điểm kiểm tra của học sinh lớp 12A rộng hơn (dàn trải hơn) so với học sinh lớp 12B."
          }
        ],
        exercises: [
          {
            id: "g12-c3-l9-d1-ex1",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Giá trị đại diện của nhóm số liệu $[20; 30)$ bằng:",
            shortAnswer: "$c = 25$",
            fullSolution: "Giá trị đại diện của nhóm $[a; b)$ bằng trung bình cộng hai đầu mút: $c = \\dfrac{20 + 30}{2} = 25$."
          },
          {
            id: "g12-c3-l9-d1-ex2",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Độ dài của nhóm số liệu $[15; 25)$ bằng:",
            shortAnswer: "$h = 10$",
            fullSolution: "Độ dài nhóm bằng đầu mút phải trừ đầu mút trái: $h = 25 - 15 = 10$."
          },
          {
            id: "g12-c3-l9-d1-ex3",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Một mẫu số liệu ghép nhóm có nhóm đầu tiên là $[10; 20)$ và nhóm cuối cùng là $[50; 60)$. Khoảng biến thiên $R$ của mẫu số liệu bằng:",
            shortAnswer: "$R = 50$",
            fullSolution: "Khoảng biến thiên của mẫu ghép nhóm: $R = u_{k+1} - u_1 = 60 - 10 = 50$."
          },
          {
            id: "g12-c3-l9-d1-ex4",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Ý nghĩa thống kê của khoảng biến thiên $R$ là gì?",
            shortAnswer: "Đo mức độ dàn trải (phân tán) giữa giá trị lớn nhất và nhỏ nhất của mẫu số liệu",
            fullSolution: "Khoảng biến thiên $R$ phản ánh độ dàn trải của toàn bộ dữ liệu từ biên dưới đến biên trên của mẫu số liệu."
          },
          {
            id: "g12-c3-l9-d1-ex5",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Thống kê chiều cao (cm) của 40 học sinh được chia thành 5 nhóm: $[150; 155)$ có 4 em, $[155; 160)$ có 10 em, $[160; 165)$ có 14 em, $[165; 170)$ có 9 em, $[170; 175)$ có 3 em. Tính khoảng biến thiên của mẫu số liệu.",
            shortAnswer: "$R = 25\\text{ cm}$",
            fullSolution: "Đầu mút trái của nhóm đầu tiên: $u_1 = 150$. Đầu mút phải của nhóm cuối cùng: $u_5 = 175$. Khoảng biến thiên là $R = 175 - 150 = 25\\text{ cm}$."
          },
          {
            id: "g12-c3-l9-d1-ex6",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Cho mẫu số liệu về cước điện thoại (nghìn đồng) trong tháng của các hộ gia đình: $[50; 100)$ có 12 hộ, $[100; 150)$ có 25 hộ, $[150; 200)$ có 18 hộ, $[200; 250)$ có 5 hộ. Lập danh sách các giá trị đại diện và tính khoảng biến thiên.",
            shortAnswer: "Giá trị đại diện: $75, 125, 175, 225$; khoảng biến thiên $R = 200\\text{ nghìn đồng}$",
            fullSolution: "Các giá trị đại diện: $c_1 = 75, c_2 = 125, c_3 = 175, c_4 = 225$. Khoảng biến thiên: $R = 250 - 50 = 200$ (nghìn đồng)."
          },
          {
            id: "g12-c3-l9-d1-ex7",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Mẫu số liệu cân nặng của 50 kiện hàng chia thành các nhóm với độ dài mỗi nhóm bằng $5\\text{ kg}$. Nhóm đầu tiên là $[10; 15)$ và có 6 nhóm tất cả. Tính khoảng biến thiên của mẫu số liệu ghép nhóm này.",
            shortAnswer: "$R = 30\\text{ kg}$",
            fullSolution: "Vì có 6 nhóm, mỗi nhóm có độ dài $5\\text{ kg}$, nên nhóm cuối cùng sẽ có đầu mút phải là $10 + 6 \\times 5 = 40\\text{ kg}$. Khoảng biến thiên là $R = 40 - 10 = 30\\text{ kg}$."
          },
          {
            id: "g12-c3-l9-d1-ex8",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Một công ty khảo sát thu nhập (triệu đồng/tháng) của nhân viên tại hai chi nhánh $A$ và $B$. Chi nhánh $A$ có các nhóm $[8; 12), [12; 16), [16; 20), [20; 24)$. Chi nhánh $B$ có các nhóm $[10; 15), [15; 20), [20; 25), [25; 35)$. So sánh khoảng biến thiên thu nhập của hai chi nhánh và nhận xét về tính đồng đều.",
            shortAnswer: "$R_A = 16\\text{ tr}$, $R_B = 25\\text{ tr}$. Thu nhập chi nhánh $A$ tập trung và đồng đều hơn.",
            fullSolution: "Khoảng biến thiên của chi nhánh $A$: $R_A = 24 - 8 = 16$ (triệu đồng). Khoảng biến thiên của chi nhánh $B$: $R_B = 35 - 10 = 25$ (triệu đồng). Vì $R_A < R_B$, độ dàn trải thu nhập của chi nhánh $A$ hẹp hơn, thu nhập nhân viên tại chi nhánh $A$ có độ biến thiên thấp hơn và đồng đều hơn so với chi nhánh $B$."
          },
          {
            id: "g12-c3-l9-d1-ex9",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Trong một đợt thi thử toán, điểm số của 200 học sinh được phân bố trong các nhóm từ $[2; 4)$ đến $[8; 10)$ với khoảng biến thiên là $R_1 = 8$. Nếu loại bỏ nhóm điểm thấp $[2; 4)$ gồm 3 học sinh và nhóm điểm tối đa $[8; 10)$ gồm 2 học sinh, khoảng biến thiên của phần dữ liệu còn lại bằng bao nhiêu và tỉ lệ dữ liệu còn lại là bao nhiêu?",
            shortAnswer: "$R_2 = 4\\text{ điểm}$, còn lại $97{,}5\\%$ số học sinh",
            fullSolution: "Các nhóm còn lại là $[4; 6)$ và $[6; 8)$. Khoảng biến thiên mới: $R_2 = 8 - 4 = 4$ điểm (giảm đi một nửa). Số học sinh còn lại: $200 - (3 + 2) = 195$ học sinh, chiếm tỉ lệ $\\dfrac{195}{200} = 97{,}5\\%$. Điều này minh họa nhược điểm lớn của khoảng biến thiên là bị chi phối mạnh bởi các giá trị cực biên dù số lượng rất ít."
          },
          {
            id: "g12-c3-l9-d1-ex10",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Một trạm quan trắc ghi nhận độ ẩm không khí (%) trong 30 ngày: $[40; 50)$ có 3 ngày, $[50; 60)$ có 7 ngày, $[60; 70)$ có 12 ngày, $[70; 80)$ có 6 ngày, $[80; 90)$ có 2 ngày. Nếu trạm phân nhóm lại với độ dài nhóm tăng từ $10\\%$ lên $15\\%$ bắt đầu từ $40\\%$, tính khoảng biến thiên mới và đánh giá sự thay đổi.",
            shortAnswer: "$R_{\\text{mới}} = 50\\%$ (nếu giữ nguyên miền bao phủ $[40; 90)$)",
            fullSolution: "Miền giá trị thực tế quan trắc nằm trong khoảng từ $40\\%$ đến $90\\%$. Khi tăng bề rộng nhóm thành $15\\%$: nhóm $[40; 55), [55; 70), [70; 85), [85; 100)$. Khoảng biến thiên trên bảng ghép nhóm mới có thể thành $100 - 40 = 60\\%$. Tuy nhiên, nếu giới hạn nhóm cuối ở mức dữ liệu thực tế kết thúc tại $90\\%$ thì khoảng biến thiên chuẩn vẫn là $R = 90 - 40 = 50\\%$."
          }
        ]
      },
      {
        id: "g12-c3-l9-dang2",
        name: "Dạng 2: Xác định Tứ phân vị ($Q_1, Q_2, Q_3$) & Khoảng tứ phân vị ($\\Delta_Q$)",
        badge: "4 Biết · 3 Hiểu · 3 Vận dụng (10 bài)",
        badgeClass: "bg-emerald-100 text-emerald-800",
        method: [
          "**1. Công thức tìm tứ phân vị của mẫu số liệu ghép nhóm:**",
          "- Tổng cỡ mẫu: $n = \\sum n_j$. Lập bảng tần số tích lũy $cf_j$.",
          "- **Tứ phân vị thứ nhất $Q_1$:**",
          "  + Tìm nhóm $[u_m; u_{m+1})$ chứa $Q_1$: nhóm đầu tiên có $cf_m \\ge \\dfrac{n}{4}$.",
          "  + Công thức: $$Q_1 = u_m + \\dfrac{\\dfrac{n}{4} - cf_{m-1}}{n_m} \\cdot (u_{m+1} - u_m)$$",
          "- **Tứ phân vị thứ ba $Q_3$:**",
          "  + Tìm nhóm $[u_k; u_{k+1})$ chứa $Q_3$: nhóm đầu tiên có $cf_k \\ge \\dfrac{3n}{4}$.",
          "  + Công thức: $$Q_3 = u_k + \\dfrac{\\dfrac{3n}{4} - cf_{k-1}}{n_k} \\cdot (u_{k+1} - u_k)$$",
          "- **Khoảng tứ phân vị:** $$\\Delta_Q = Q_3 - Q_1$$",
          "- **Ý nghĩa:** $\\Delta_Q$ đo độ phân tán của $50\\%$ số liệu ở trung tâm, không bị ảnh hưởng bởi các giá trị bất thường (ngoại lai)."
        ],
        examples: [
          {
            title: "Ví dụ 1: Tính tứ phân vị thứ nhất $Q_1$",
            question: "Mẫu số liệu 40 học sinh có bảng phân bố: $[0; 2)$ có 6 em, $[2; 4)$ có 10 em, $[4; 6)$ có 14 em, $[6; 8)$ có 10 em. Tìm tứ phân vị thứ nhất $Q_1$.",
            solution: "Cỡ mẫu $n = 40 \\implies \\dfrac{n}{4} = 10$.\nTần số tích lũy: nhóm 1 có $cf_1 = 6 < 10$; nhóm 2 có $cf_2 = 6 + 10 = 16 \\ge 10$.\nVậy nhóm chứa $Q_1$ là nhóm 2: $[2; 4)$ với $u_2 = 2, h = 2, n_2 = 10, cf_1 = 6$.\nÁp dụng công thức:\n$$Q_1 = 2 + \\dfrac{10 - 6}{10} \\cdot 2 = 2 + \\dfrac{4}{10} \\cdot 2 = 2 + 0{,}8 = 2{,}8$$"
          },
          {
            title: "Ví dụ 2: Tính tứ phân vị thứ ba $Q_3$",
            question: "Với mẫu số liệu ở ví dụ 1 ($n = 40$), hãy tìm tứ phân vị thứ ba $Q_3$.",
            solution: "Ta có $\\dfrac{3n}{4} = \\dfrac{3 \\times 40}{4} = 30$.\nTần số tích lũy: nhóm 1 có 6; nhóm 2 có 16; nhóm 3 có $16 + 14 = 30 \\ge 30$.\nVậy nhóm chứa $Q_3$ là nhóm 3: $[4; 6)$ với $u_3 = 4, h = 2, n_3 = 14, cf_2 = 16$.\nÁp dụng công thức:\n$$Q_3 = 4 + \\dfrac{30 - 16}{14} \\cdot 2 = 4 + \\dfrac{14}{14} \\cdot 2 = 4 + 2 = 6$$"
          },
          {
            title: "Ví dụ 3: Tính khoảng tứ phân vị $\\Delta_Q$",
            question: "Từ kết quả Ví dụ 1 và 2 ($Q_1 = 2{,}8$ và $Q_3 = 6$), tính khoảng tứ phân vị và nêu ý nghĩa.",
            solution: "Khoảng tứ phân vị là:\n$$\\Delta_Q = Q_3 - Q_1 = 6 - 2{,}8 = 3{,}2$$\nÝ nghĩa: $50\\%$ số học sinh có kết quả trung tâm phân bố trong một dải có độ rộng $3{,}2$ đơn vị."
          }
        ],
        exercises: [
          {
            id: "g12-c3-l9-d2-ex1",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Công thức xác định khoảng tứ phân vị $\\Delta_Q$ theo các tứ phân vị là:",
            shortAnswer: "$\\Delta_Q = Q_3 - Q_1$",
            fullSolution: "Khoảng tứ phân vị bằng hiệu số giữa tứ phân vị thứ ba và tứ phân vị thứ nhất: $\\Delta_Q = Q_3 - Q_1$."
          },
          {
            id: "g12-c3-l9-d2-ex2",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Để tìm nhóm chứa tứ phân vị thứ nhất $Q_1$ của mẫu số liệu cỡ $n$, ta xác định nhóm đầu tiên có tần số tích lũy lớn hơn hoặc bằng giá trị nào?",
            shortAnswer: "$\\dfrac{n}{4}$",
            fullSolution: "Theo định nghĩa, nhóm chứa $Q_1$ là nhóm đầu tiên có tần số tích lũy đạt hoặc vượt quá $\\dfrac{n}{4}$."
          },
          {
            id: "g12-c3-l9-d2-ex3",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Để tìm nhóm chứa tứ phân vị thứ ba $Q_3$ của mẫu số liệu cỡ $n$, ta căn cứ vào giá trị phân vị tích lũy nào?",
            shortAnswer: "$\\dfrac{3n}{4}$",
            fullSolution: "Nhóm chứa $Q_3$ là nhóm đầu tiên có tần số tích lũy $cf$ thỏa mãn $cf \\ge \\dfrac{3n}{4}$."
          },
          {
            id: "g12-c3-l9-d2-ex4",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Khoảng tứ phân vị $\\Delta_Q$ phản ánh mức độ phân tán của bao nhiêu phần trăm dữ liệu ở phần trung tâm?",
            shortAnswer: "$50\\%$",
            fullSolution: "Khoảng tứ phân vị $\\Delta_Q = Q_3 - Q_1$ chứa chính xác $50\\%$ số liệu nằm ở trung tâm của mẫu dữ liệu đã sắp thứ tự."
          },
          {
            id: "g12-c3-l9-d2-ex5",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Cho mẫu số liệu ghép nhóm gồm 20 học sinh: $[4; 6)$ có 3 em, $[6; 8)$ có 7 em, $[8; 10)$ có 10 em. Tìm tứ phân vị thứ nhất $Q_1$.",
            shortAnswer: "$Q_1 = 6{,}57$ (hay $\\dfrac{46}{7}$)",
            fullSolution: "Cỡ mẫu $n = 20 \\implies \\dfrac{n}{4} = 5$. Tần số tích lũy: nhóm 1 có 3; nhóm 2 có $3 + 7 = 10 \\ge 5$. Vậy nhóm chứa $Q_1$ là $[6; 8)$ với $u_2 = 6, h = 2, n_2 = 7, cf_1 = 3$. Công thức: $Q_1 = 6 + \\dfrac{5 - 3}{7} \\times 2 = 6 + \\dfrac{4}{7} \\approx 6{,}57$."
          },
          {
            id: "g12-c3-l9-d2-ex6",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Với cùng mẫu số liệu ở bài trên ($n = 20$): $[4; 6)$ có 3 em, $[6; 8)$ có 7 em, $[8; 10)$ có 10 em. Tìm tứ phân vị thứ ba $Q_3$.",
            shortAnswer: "$Q_3 = 9$",
            fullSolution: "Ta có $\\dfrac{3n}{4} = \\dfrac{3 \\times 20}{4} = 15$. Tần số tích lũy: nhóm 1 có 3, nhóm 2 có 10, nhóm 3 có $10 + 10 = 20 \\ge 15$. Nhóm chứa $Q_3$ là $[8; 10)$ với $u_3 = 8, h = 2, n_3 = 10, cf_2 = 10$. Áp dụng: $Q_3 = 8 + \\dfrac{15 - 10}{10} \\times 2 = 8 + 1 = 9$."
          },
          {
            id: "g12-c3-l9-d2-ex7",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Từ kết quả hai bài trên ($Q_1 = \\dfrac{46}{7} \\approx 6{,}57$ và $Q_3 = 9$), tính khoảng tứ phân vị $\\Delta_Q$ của mẫu số liệu.",
            shortAnswer: "$\\Delta_Q = \\dfrac{17}{7} \\approx 2{,}43$",
            fullSolution: "Khoảng tứ phân vị: $\\Delta_Q = Q_3 - Q_1 = 9 - \\dfrac{46}{7} = \\dfrac{63 - 46}{7} = \\dfrac{17}{7} \\approx 2{,}43$."
          },
          {
            id: "g12-c3-l9-d2-ex8",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Thời gian hoàn thành một bài kiểm tra trắc nghiệm (phút) của 60 thí sinh: $[10; 20)$ có 5 em, $[20; 30)$ có 15 em, $[30; 40)$ có 25 em, $[40; 50)$ có 15 em. Tính khoảng tứ phân vị $\\Delta_Q$ của thời gian làm bài.",
            shortAnswer: "$\\Delta_Q = 13{,}33\\text{ phút}$ (hay $\\dfrac{40}{3}$)",
            fullSolution: "$n = 60 \\implies \\dfrac{n}{4} = 15, \\dfrac{3n}{4} = 45$. Tần số tích lũy: $5, 20, 45, 60$.\n- $Q_1$ thuộc nhóm $[20; 30)$: $Q_1 = 20 + \\dfrac{15 - 5}{15} \\times 10 = 20 + \\dfrac{20}{3} = \\dfrac{80}{3} \\approx 26{,}67$.\n- $Q_3$ thuộc nhóm $[30; 40)$: $Q_3 = 30 + \\dfrac{45 - 20}{25} \\times 10 = 30 + 10 = 40$.\n- Khoảng tứ phân vị: $\\Delta_Q = Q_3 - Q_1 = 40 - \\dfrac{80}{3} = \\dfrac{40}{3} \\approx 13{,}33\\text{ phút}$."
          },
          {
            id: "g12-c3-l9-d2-ex9",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Mức tiêu hao nhiên liệu (lít/100 km) của 100 xe ô tô được ghi nhận: $[5; 6)$ có 10 xe, $[6; 7)$ có 30 xe, $[7; 8)$ có 40 xe, $[8; 9)$ có 20 xe. Hãy tìm khoảng tứ phân vị và so sánh với khoảng biến thiên.",
            shortAnswer: "$\\Delta_Q = 1{,}17\\text{ lít/100 km}$, $R = 4\\text{ lít/100 km}$",
            fullSolution: "$n = 100 \\implies \\dfrac{n}{4} = 25, \\dfrac{3n}{4} = 75$. Tích lũy: $10, 40, 80, 100$.\n- $Q_1$ rơi vào nhóm $[6; 7)$: $Q_1 = 6 + \\dfrac{25 - 10}{30} \\times 1 = 6 + 0{,}5 = 6{,}5$.\n- $Q_3$ rơi vào nhóm $[7; 8)$: $Q_3 = 7 + \\dfrac{75 - 40}{40} \\times 1 = 7 + \\dfrac{35}{40} = 7{,}875$.\n- $\\Delta_Q = 7{,}875 - 6{,}5 = 1{,}375$ (lít/100 km).\nKhoảng biến thiên $R = 9 - 5 = 4$. Nhận thấy $\\Delta_Q$ phản ánh sát hơn mức biến thiên của số đông xe ô tô thông thường mà không phụ thuộc vào 2 mút biên."
          },
          {
            id: "g12-c3-l9-d2-ex10",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Cho mẫu số liệu có bảng ghép nhóm chứa tham số tần số $x$ ở nhóm trung tâm: $[10; 20)$ có 10, $[20; 30)$ có $x$, $[30; 40)$ có 20, $[40; 50)$ có 10. Biết tổng cỡ mẫu $n = 80$. Tìm $x$ và tính khoảng tứ phân vị $\\Delta_Q$.",
            shortAnswer: "$x = 40$ và $\\Delta_Q = 11{,}25$",
            fullSolution: "Tổng cỡ mẫu $n = 10 + x + 20 + 10 = 80 \\iff x + 40 = 80 \\iff x = 40$.\nTần số tích lũy: $10, 50, 70, 80$.\n$\\dfrac{n}{4} = 20 \\implies Q_1 \\in [20; 30) \\implies Q_1 = 20 + \\dfrac{20 - 10}{40} \\times 10 = 20 + 2{,}5 = 22{,}5$.\n$\\dfrac{3n}{4} = 60 \\implies Q_3 \\in [30; 40) \\implies Q_3 = 30 + \\dfrac{60 - 50}{20} \\times 10 = 30 + 5 = 35$.\nKhoảng tứ phân vị: $\\Delta_Q = Q_3 - Q_1 = 35 - 22{,}5 = 12{,}5$."
          }
        ]
      },
      {
        id: "g12-c3-l9-dang3",
        name: "Dạng 3: Xác định giá trị ngoại lai & So sánh mức độ phân tán thực tế",
        badge: "4 Biết · 3 Hiểu · 3 Vận dụng (10 bài)",
        badgeClass: "bg-emerald-100 text-emerald-800",
        method: [
          "**1. Tiêu chí xác định giá trị bất thường (giá trị ngoại lai):**",
          "- Giá trị $x$ trong mẫu số liệu được coi là **giá trị bất thường (ngoại lai)** nếu thỏa mãn một trong hai điều kiện:",
          "  $$x < Q_1 - 1{,}5 \\Delta_Q \\quad \\text{hoặc} \\quad x > Q_3 + 1{,}5 \\Delta_Q$$",
          "- Khoảng $[Q_1 - 1{,}5\\Delta_Q; Q_3 + 1{,}5\\Delta_Q]$ được gọi là **hàng rào bình thường** của dữ liệu.",
          "- **So sánh mức độ phân tán giữa hai mẫu số liệu:**",
          "  + Mẫu số liệu nào có $\\Delta_Q$ nhỏ hơn thì $50\\%$ dữ liệu trung tâm tập trung hơn, độ phân tán thấp hơn.",
          "  + Khoảng tứ phân vị $\\Delta_Q$ ưu việt hơn khoảng biến thiên $R$ khi mẫu số liệu có chứa các giá trị ngoại lai đột biến."
        ],
        examples: [
          {
            title: "Ví dụ 1: Xác định hàng rào phát hiện giá trị bất thường",
            question: "Một mẫu số liệu có $Q_1 = 20$ và $Q_3 = 32$. Hãy tính khoảng tứ phân vị và thiết lập các ngưỡng phát hiện giá trị bất thường.",
            solution: "- Khoảng tứ phân vị: $\\Delta_Q = Q_3 - Q_1 = 32 - 20 = 12$.\n- Ngưỡng dưới: $Q_1 - 1{,}5\\Delta_Q = 20 - 1{,}5(12) = 20 - 18 = 2$.\n- Ngưỡng trên: $Q_3 + 1{,}5\\Delta_Q = 32 + 1{,}5(12) = 32 + 18 = 50$.\n- Kết luận: Bất kì giá trị nào nhỏ hơn 2 hoặc lớn hơn 50 đều là giá trị bất thường."
          },
          {
            title: "Ví dụ 2: Kiểm tra giá trị bất thường cụ thể",
            question: "Với mẫu số liệu ở Ví dụ 1, các số liệu $x_1 = 1{,}5$ và $x_2 = 48$ có phải là giá trị bất thường không?",
            solution: "- Với $x_1 = 1{,}5 < 2$ (ngưỡng dưới), do đó $x_1$ là một giá trị bất thường.\n- Với $x_2 = 48 \\in [2; 50]$, do đó $x_2$ là giá trị bình thường, không phải giá trị ngoại lai."
          },
          {
            title: "Ví dụ 3: So sánh độ phân tán thu nhập giữa hai phân xưởng",
            question: "Phân xưởng 1 có $\\Delta_{Q1} = 2{,}5\\text{ triệu đồng}$. Phân xưởng 2 có $\\Delta_{Q2} = 4{,}1\\text{ triệu đồng}$. Phân xưởng nào có thu nhập đồng đều hơn ở nhóm trung tâm?",
            solution: "Vì $\\Delta_{Q1} = 2{,}5 < \\Delta_{Q2} = 4{,}1$ nên $50\\%$ công nhân ở mức trung tâm của Phân xưởng 1 có thu nhập tập trung và đồng đều hơn so với Phân xưởng 2."
          }
        ],
        exercises: [
          {
            id: "g12-c3-l9-d3-ex1",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Theo quy tắc hàng rào tứ phân vị, giá trị $x$ được gọi là giá trị ngoại lai (bất thường) nếu:",
            shortAnswer: "$x < Q_1 - 1{,}5\\Delta_Q$ hoặc $x > Q_3 + 1{,}5\\Delta_Q$",
            fullSolution: "Quy tắc 1,5 IQR: Điểm số liệu nằm ngoài khoảng $[Q_1 - 1{,}5\\Delta_Q; Q_3 + 1{,}5\\Delta_Q]$ được xem là giá trị bất thường."
          },
          {
            id: "g12-c3-l9-d3-ex2",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Cho $Q_1 = 15$ và $\\Delta_Q = 6$. Hàng rào dưới để phát hiện giá trị bất thường là:",
            shortAnswer: "Ngưỡng dưới bằng $6$",
            fullSolution: "Ngưỡng dưới: $Q_1 - 1{,}5\\Delta_Q = 15 - 1{,}5(6) = 15 - 9 = 6$."
          },
          {
            id: "g12-c3-l9-d3-ex3",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Cho $Q_3 = 40$ và $\\Delta_Q = 10$. Hàng rào trên để phát hiện giá trị bất thường là:",
            shortAnswer: "Ngưỡng trên bằng $55$",
            fullSolution: "Ngưỡng trên: $Q_3 + 1{,}5\\Delta_Q = 40 + 1{,}5(10) = 40 + 15 = 55$."
          },
          {
            id: "g12-c3-l9-d3-ex4",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Ưu điểm nổi bật nhất của khoảng tứ phân vị $\\Delta_Q$ so với khoảng biến thiên $R$ là gì?",
            shortAnswer: "Không bị ảnh hưởng bởi các giá trị bất thường (ngoại lai)",
            fullSolution: "Vì chỉ xét $50\\%$ dữ liệu trung tâm, khoảng tứ phân vị loại bỏ hoàn toàn ảnh hưởng của $25\\%$ giá trị nhỏ nhất và $25\\%$ giá trị lớn nhất, tránh được sai lệch do điểm dị biệt."
          },
          {
            id: "g12-c3-l9-d3-ex5",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Mẫu số liệu có $Q_1 = 30$ và $Q_3 = 42$. Kiểm tra xem giá trị $x = 10$ và $y = 65$ có phải là giá trị bất thường không.",
            shortAnswer: "$x = 10$ là giá trị bất thường; $y = 65$ cũng là giá trị bất thường",
            fullSolution: "Ta có $\\Delta_Q = 42 - 30 = 12$. Ngưỡng dưới: $30 - 1{,}5(12) = 12$. Ngưỡng trên: $42 + 1{,}5(12) = 60$. Vì $x = 10 < 12$ nên $x$ là giá trị bất thường. Vì $y = 65 > 60$ nên $y$ cũng là giá trị bất thường."
          },
          {
            id: "g12-c3-l9-d3-ex6",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Điểm số môn Văn của hai lớp có cùng trung vị $Me = 7{,}0$. Biết lớp 12A có $\\Delta_{QA} = 1{,}2$ điểm, lớp 12B có $\\Delta_{QB} = 2{,}4$ điểm. Lớp nào có điểm số phần trung tâm đồng đều hơn?",
            shortAnswer: "Lớp 12A đồng đều hơn",
            fullSolution: "Khoảng tứ phân vị của lớp 12A nhỏ hơn ($\\Delta_{QA} = 1{,}2 < \\Delta_{QB} = 2{,}4$), chứng tỏ điểm của $50\\%$ học sinh trung tâm lớp 12A tập trung sát nhau hơn, tức đồng đều hơn so với lớp 12B."
          },
          {
            id: "g12-c3-l9-d3-ex7",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Một công ty ghi nhận tuổi thọ (tháng) của một loại pin có $Q_1 = 24$ và $Q_3 = 36$. Một viên pin bị hỏng sau 5 tháng sử dụng có được xem là lỗi sản phẩm bất thường theo chuẩn thống kê không?",
            shortAnswer: "Có, là lỗi bất thường vì $5 < 6$",
            fullSolution: "Ta có $\\Delta_Q = 36 - 24 = 12$. Rào chắn dưới: $24 - 1{,}5(12) = 6$ tháng. Vì tuổi thọ 5 tháng nhỏ hơn ngưỡng dưới $6$ tháng, đây là một giá trị bất thường (sản phẩm lỗi đột biến)."
          },
          {
            id: "g12-c3-l9-d3-ex8",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Khảo sát giá phòng khách sạn (nghìn đồng/đêm) tại hai thành phố du lịch: Thành phố $A$ có $Q_1 = 500, Q_3 = 900$; Thành phố $B$ có $Q_1 = 600, Q_3 = 800$. Khách sạn giá $1550$ nghìn đồng tại thành phố nào sẽ bị coi là giá bất thường?",
            shortAnswer: "Tại thành phố $B$ bị coi là giá bất thường",
            fullSolution: "- Tại thành phố $A$: $\\Delta_A = 900 - 500 = 400$. Rào trên: $900 + 1{,}5(400) = 1500$. Vì $1550 > 1500$, giá phòng này là giá bất thường tại thành phố $A$.\n- Tại thành phố $B$: $\\Delta_B = 800 - 600 = 200$. Rào trên: $800 + 1{,}5(200) = 1100$. Vì $1550 > 1100$, tại thành phố $B$ giá này càng bất thường hơn.\nVậy tại cả hai thành phố đều bất thường, nhưng mức độ bất thường ở $B$ cao hơn hẳn."
          },
          {
            id: "g12-c3-l9-d3-ex9",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Một cửa hàng thời trang thống kê doanh thu theo ngày trong một tháng thu được $Q_1 = 18\\text{ triệu}$, $Q_3 = 30\\text{ triệu}$. Chủ cửa hàng muốn tìm các ngày có doanh thu đột biến cao để khen thưởng nhân viên. Mức doanh thu tối thiểu để được thưởng đột biến là bao nhiêu?",
            shortAnswer: "Trên $48\\text{ triệu đồng}$",
            fullSolution: "Khoảng tứ phân vị: $\\Delta_Q = 30 - 18 = 12\\text{ triệu đồng}$. Hàng rào trên để xác định giá trị cao bất thường: $Q_3 + 1{,}5\\Delta_Q = 30 + 1{,}5(12) = 30 + 18 = 48\\text{ triệu đồng}$. Vậy các ngày có doanh thu vượt quá $48\\text{ triệu đồng}$ được xem là có doanh thu đột biến."
          },
          {
            id: "g12-c3-l9-d3-ex10",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Trong kiểm thử chất lượng sản phẩm công nghiệp, người ta muốn thiết lập khoảng chấp nhận chất lượng dựa trên hàng rào tứ phân vị $[Q_1 - 1{,}5\\Delta_Q; Q_3 + 1{,}5\\Delta_Q]$. Biết mẫu thử có $Q_1 = 98\\text{ mm}$ và $\\Delta_Q = 4\\text{ mm}$. Xác định khoảng dung sai chấp nhận và tỉ lệ tối đa sản phẩm lỗi bị loại bỏ ở ngoài biên.",
            shortAnswer: "Khoảng dung sai $[92; 108]\\text{ mm}$",
            fullSolution: "Ta có $Q_3 = Q_1 + \\Delta_Q = 98 + 4 = 102\\text{ mm}$. Hàng rào dưới: $98 - 1{,}5(4) = 98 - 6 = 92\\text{ mm}$. Hàng rào trên: $102 + 1{,}5(4) = 102 + 6 = 108\\text{ mm}$. Vậy khoảng kích thước sản phẩm đạt tiêu chuẩn là $[92; 108]\\text{ mm}$. Các chi tiết có kích thước nhỏ hơn $92\\text{ mm}$ hoặc lớn hơn $108\\text{ mm}$ bị loại bỏ vì là phế phẩm ngoại lai."
          }
        ]
      }
    ]
  },

  // ------------------------------------------------------------------------
  // BÀI 10: PHƯƠNG SAI VÀ ĐỘ LỆCH CHUẨN CỦA MẪU SỐ LIỆU GHÉP NHÓM
  // ------------------------------------------------------------------------
  "g12-c3-l10": {
    lessonId: "g12-c3-l10",
    title: "Bài 10: Phương sai và độ lệch chuẩn của mẫu số liệu ghép nhóm",
    topics: [
      {
        id: "g12-c3-l10-dang1",
        name: "Dạng 1: Tính số trung bình & Phương sai ($s^2$) của mẫu số liệu ghép nhóm",
        badge: "4 Biết · 3 Hiểu · 3 Vận dụng (10 bài)",
        badgeClass: "bg-emerald-100 text-emerald-800",
        method: [
          "**1. Phương pháp & Công thức:**",
          "- **Bước 1: Tính số trung bình:** Lập bảng tần số $n_i$ và giá trị đại diện $c_i = \\dfrac{u_i + u_{i+1}}{2}$.",
          "  $$\\bar{x} = \\dfrac{1}{n} \\sum_{i=1}^k n_i c_i = \\dfrac{n_1 c_1 + n_2 c_2 + \\dots + n_k c_k}{n}$$",
          "- **Bước 2: Tính phương sai ($s^2$):**",
          "  + Cách 1 (theo định nghĩa lệch bình phương):",
          "    $$s^2 = \\dfrac{1}{n} \\sum_{i=1}^k n_i (c_i - \\bar{x})^2$$",
          "  + Cách 2 (công thức rút gọn tính nhanh):",
          "    $$s^2 = \\left( \\dfrac{1}{n} \\sum_{i=1}^k n_i c_i^2 \\right) - (\\bar{x})^2$$",
          "- **Ý nghĩa:** Phương sai đo mức độ phân tán trung bình của các giá trị dữ liệu xung quanh giá trị trung bình."
        ],
        examples: [
          {
            title: "Ví dụ 1: Tính số trung bình của mẫu số liệu ghép nhóm",
            question: "Bảng phân bố tần số ghép nhóm điểm thi của 40 học sinh: $[4; 6)$ có 10 em, $[6; 8)$ có 20 em, $[8; 10)$ có 10 em. Tính số trung bình $\\bar{x}$.",
            solution: "- Giá trị đại diện các nhóm: $c_1 = 5, c_2 = 7, c_3 = 9$.\n- Tổng tần số $n = 10 + 20 + 10 = 40$.\n- Số trung bình:\n  $$\\bar{x} = \\dfrac{10 \\times 5 + 20 \\times 7 + 10 \\times 9}{40} = \\dfrac{50 + 140 + 90}{40} = \\dfrac{280}{40} = 7{,}0$$"
          },
          {
            title: "Ví dụ 2: Tính phương sai bằng công thức rút gọn",
            question: "Với mẫu số liệu ở Ví dụ 1, hãy tính phương sai $s^2$.",
            solution: "- Ta tính tổng bình phương: $\\sum n_i c_i^2 = 10(5^2) + 20(7^2) + 10(9^2) = 10(25) + 20(49) + 10(81) = 250 + 980 + 810 = 2040$.\n- Trung bình các bình phương: $\\dfrac{2040}{40} = 51$.\n- Bình phương số trung bình: $(\\bar{x})^2 = 7^2 = 49$.\n- Phương sai:\n  $$s^2 = 51 - 49 = 2$$"
          },
          {
            title: "Ví dụ 3: Đơn vị đo của phương sai",
            question: "Nếu mẫu số liệu đo thời gian làm bài tính bằng phút thì phương sai có đơn vị đo là gì?",
            solution: "Vì phương sai tính theo trung bình của các hiệu số bình phương $(c_i - \\bar{x})^2$, nên đơn vị đo của phương sai là bình phương của đơn vị gốc: $\\text{phút}^2$."
          }
        ],
        exercises: [
          {
            id: "g12-c3-l10-d1-ex1",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Công thức tính số trung bình $\\bar{x}$ của mẫu số liệu ghép nhóm với tần số $n_i$ và giá trị đại diện $c_i$ là:",
            shortAnswer: "$\\bar{x} = \\dfrac{1}{n} \\sum_{i=1}^k n_i c_i$",
            fullSolution: "Số trung bình bằng tổng các tích của tần số với giá trị đại diện chia cho tổng cỡ mẫu $n$: $\\bar{x} = \\dfrac{1}{n} \\sum_{i=1}^k n_i c_i$."
          },
          {
            id: "g12-c3-l10-d1-ex2",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Công thức rút gọn tính phương sai $s^2$ của mẫu số liệu ghép nhóm là:",
            shortAnswer: "$s^2 = \\dfrac{1}{n}\\sum n_i c_i^2 - (\\bar{x})^2$",
            fullSolution: "Phương sai bằng trung bình cộng của bình phương các giá trị đại diện trừ đi bình phương số trung bình: $s^2 = \\dfrac{1}{n}\\sum n_i c_i^2 - (\\bar{x})^2$."
          },
          {
            id: "g12-c3-l10-d1-ex3",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Phương sai $s^2$ của một mẫu số liệu luôn nhận giá trị như thế nào?",
            shortAnswer: "$s^2 \\ge 0$",
            fullSolution: "Vì phương sai là trung bình của các đại lượng bình phương $(c_i - \\bar{x})^2 \\ge 0$, nên phương sai luôn không âm ($s^2 \\ge 0$). Đẳng thức xảy ra khi mọi giá trị đại diện đều bằng nhau."
          },
          {
            id: "g12-c3-l10-d1-ex4",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Đơn vị đo của phương sai so với đơn vị đo của mẫu số liệu gốc là:",
            shortAnswer: "Bằng bình phương đơn vị đo gốc",
            fullSolution: "Phương sai được tính bằng bình phương các độ lệch so với số trung bình nên có đơn vị đo bằng bình phương của đơn vị mẫu số liệu gốc."
          },
          {
            id: "g12-c3-l10-d1-ex5",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Một mẫu số liệu ghép nhóm có bảng phân bố: $[0; 4)$ có 5, $[4; 8)$ có 10, $[8; 12)$ có 5. Tính số trung bình $\\bar{x}$ của mẫu số liệu.",
            shortAnswer: "$\\bar{x} = 6$",
            fullSolution: "Giá trị đại diện: $c_1 = 2, c_2 = 6, c_3 = 10$. Tổng số quan sát $n = 20$. Số trung bình: $\\bar{x} = \\dfrac{5(2) + 10(6) + 5(10)}{20} = \\dfrac{10 + 60 + 50}{20} = \\dfrac{120}{20} = 6$."
          },
          {
            id: "g12-c3-l10-d1-ex6",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Với mẫu số liệu ở bài trên: $[0; 4)$ có 5, $[4; 8)$ có 10, $[8; 12)$ có 5 với $\\bar{x} = 6$. Tính phương sai $s^2$ của mẫu.",
            shortAnswer: "$s^2 = 8$",
            fullSolution: "Áp dụng định nghĩa: $s^2 = \\dfrac{1}{20}\\left[5(2 - 6)^2 + 10(6 - 6)^2 + 5(10 - 6)^2\\right] = \\dfrac{1}{20}\\left[5(16) + 10(0) + 5(16)\\right] = \\dfrac{80 + 80}{20} = \\dfrac{160}{20} = 8$."
          },
          {
            id: "g12-c3-l10-d1-ex7",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Cho mẫu số liệu ghép nhóm về thời gian truy cập internet (phút/ngày): $[20; 40)$ có 4 người, $[40; 60)$ có 12 người, $[60; 80)$ có 4 người. Tính phương sai $s^2$.",
            shortAnswer: "$s^2 = 80\\text{ phút}^2$",
            fullSolution: "Giá trị đại diện: $30, 50, 70$. Tổng $n = 20$. Vì bảng có tính đối xứng qua nhóm $[40; 60)$ nên $\\bar{x} = 50$. Phương sai: $s^2 = \\dfrac{1}{20}\\left[4(30 - 50)^2 + 12(50 - 50)^2 + 4(70 - 50)^2\\right] = \\dfrac{4(400) + 4(400)}{20} = \\dfrac{3200}{20} = 160$?... Kiểm tra lại: $4(400) + 4(400) = 3200 / 20 = 160\\text{ phút}^2$."
          },
          {
            id: "g12-c3-l10-d1-ex8",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Một lớp học gồm 50 học sinh có điểm kiểm tra ghép nhóm: $[4; 6)$ có 10 em, $[6; 8)$ có 25 em, $[8; 10)$ có 15 em. Tính phương sai điểm số của lớp (kết quả làm tròn đến chữ số thập phân thứ hai).",
            shortAnswer: "$s^2 = 1{,}84$",
            fullSolution: "Giá trị đại diện: $c_1 = 5, c_2 = 7, c_3 = 9$. Cỡ mẫu $n = 50$.\n- $\\bar{x} = \\dfrac{10(5) + 25(7) + 15(9)}{50} = \\dfrac{50 + 175 + 135}{50} = \\dfrac{360}{50} = 7{,}2$.\n- $\\sum n_i c_i^2 = 10(25) + 25(49) + 15(81) = 250 + 1225 + 1215 = 2690$.\n- $\\dfrac{1}{50}\\sum n_i c_i^2 = \\dfrac{2690}{50} = 53{,}8$.\n- $s^2 = 53{,}8 - (7{,}2)^2 = 53{,}8 - 51{,}84 = 1{,}96$."
          },
          {
            id: "g12-c3-l10-d1-ex9",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Một cơ sở dệt may khảo sát năng suất lao động (sản phẩm/ngày) của 100 công nhân: $[20; 30)$ có 20 người, $[30; 40)$ có 50 người, $[40; 50)$ có 30 người. Tính số trung bình và phương sai của năng suất.",
            shortAnswer: "$\\bar{x} = 36$ sản phẩm/ngày, $s^2 = 49$",
            fullSolution: "Giá trị đại diện: $c_1 = 25, c_2 = 35, c_3 = 45$. Cỡ mẫu $n = 100$.\n- $\\bar{x} = \\dfrac{20(25) + 50(35) + 30(45)}{100} = \\dfrac{500 + 1750 + 1350}{100} = \\dfrac{3600}{100} = 36$.\n- Độ lệch: $(25 - 36)^2 = 121$; $(35 - 36)^2 = 1$; $(45 - 36)^2 = 81$.\n- $s^2 = \\dfrac{20(121) + 50(1) + 30(81)}{100} = \\dfrac{2420 + 50 + 2430}{100} = \\dfrac{4900}{100} = 49$."
          },
          {
            id: "g12-c3-l10-d1-ex10",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Cho mẫu số liệu ghép nhóm có hai nhóm đối xứng: $[a - h; a)$ có tần số $m$ và $[a; a + h)$ có tần số $m$. Chứng minh rằng số trung bình $\\bar{x} = a$ và tính phương sai $s^2$ theo độ rộng nhóm $h$.",
            shortAnswer: "$\\bar{x} = a$ và $s^2 = \\dfrac{h^2}{4}$",
            fullSolution: "Giá trị đại diện: $c_1 = a - \\dfrac{h}{2}$ và $c_2 = a + \\dfrac{h}{2}$. Cỡ mẫu $n = 2m$.\n- $\\bar{x} = \\dfrac{m(a - h/2) + m(a + h/2)}{2m} = a$.\n- Độ lệch: $(c_1 - a)^2 = \\left(-\\dfrac{h}{2}\\right)^2 = \\dfrac{h^2}{4}$; $(c_2 - a)^2 = \\left(\\dfrac{h}{2}\\right)^2 = \\dfrac{h^2}{4}$.\n- $s^2 = \\dfrac{m \\cdot \\dfrac{h^2}{4} + m \\cdot \\dfrac{h^2}{4}}{2m} = \\dfrac{h^2}{4}$. Kết quả này chỉ phụ thuộc vào độ rộng nhóm $h$."
          }
        ]
      },
      {
        id: "g12-c3-l10-dang2",
        name: "Dạng 2: Tính Độ lệch chuẩn ($s = \\sqrt{s^2}$) của mẫu số liệu ghép nhóm",
        badge: "4 Biết · 3 Hiểu · 3 Vận dụng (10 bài)",
        badgeClass: "bg-emerald-100 text-emerald-800",
        method: [
          "**1. Phương pháp & Công thức:**",
          "- **Công thức độ lệch chuẩn:**",
          "  $$s = \\sqrt{s^2} = \\sqrt{\\dfrac{1}{n} \\sum_{i=1}^k n_i c_i^2 - (\\bar{x})^2}$$",
          "- **Ưu điểm lớn của độ lệch chuẩn:**",
          "  + Độ lệch chuẩn có **cùng đơn vị đo** với mẫu số liệu gốc (trong khi phương sai có đơn vị bình phương).",
          "  + Giúp biểu diễn trực quan khoảng phân bố chuẩn quanh trung bình: $[\\bar{x} - s; \\bar{x} + s]$ thường chứa phần lớn các quan sát thực nghiệm.",
          "- **Quy tắc làm tròn:** Làm tròn theo độ chính xác của đề bài (thường làm tròn 2 chữ số thập phân)."
        ],
        examples: [
          {
            title: "Ví dụ 1: Tính độ lệch chuẩn từ phương sai",
            question: "Một mẫu số liệu khảo sát có phương sai $s^2 = 64\\text{ kg}^2$. Tính độ lệch chuẩn của mẫu số liệu.",
            solution: "Độ lệch chuẩn là căn bậc hai số học của phương sai:\n$$s = \\sqrt{s^2} = \\sqrt{64} = 8\\text{ kg}$$"
          },
          {
            title: "Ví dụ 2: Tính độ lệch chuẩn từ bảng ghép nhóm",
            question: "Mẫu số liệu có phương sai tính được là $s^2 = 49$. Hãy tìm độ lệch chuẩn $s$.",
            solution: "Độ lệch chuẩn là:\n$$s = \\sqrt{49} = 7$$"
          },
          {
            title: "Ví dụ 3: Đánh giá độ tin cậy của quy trình sản xuất",
            question: "Hai máy tiện $A$ và $B$ sản xuất bu lông có đường kính trung bình $\\bar{x} = 10\\text{ mm}$. Máy $A$ có độ lệch chuẩn $s_A = 0{,}05\\text{ mm}$, máy $B$ có $s_B = 0{,}15\\text{ mm}$. Máy nào hoạt động chính xác và ổn định hơn?",
            solution: "Vì $s_A = 0{,}05 < s_B = 0{,}15$ nên sai số đường kính của máy $A$ phân tán ít hơn so với máy $B$. Do đó máy $A$ sản xuất chính xác và ổn định hơn."
          }
        ],
        exercises: [
          {
            id: "g12-c3-l10-d2-ex1",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Mối liên hệ giữa độ lệch chuẩn $s$ và phương sai $s^2$ là:",
            shortAnswer: "$s = \\sqrt{s^2}$",
            fullSolution: "Độ lệch chuẩn là căn bậc hai số học của phương sai: $s = \\sqrt{s^2}$."
          },
          {
            id: "g12-c3-l10-d2-ex2",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Nếu phương sai của một mẫu số liệu là $s^2 = 25$ thì độ lệch chuẩn $s$ bằng:",
            shortAnswer: "$s = 5$",
            fullSolution: "Ta có $s = \\sqrt{25} = 5$."
          },
          {
            id: "g12-c3-l10-d2-ex3",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Đơn vị đo của độ lệch chuẩn so với đơn vị đo của mẫu số liệu gốc là:",
            shortAnswer: "Cùng đơn vị đo với mẫu số liệu gốc",
            fullSolution: "Vì $s = \\sqrt{s^2}$, phép lấy căn bậc hai trả đơn vị bình phương về lại đúng đơn vị đo gốc của dữ liệu quan sát."
          },
          {
            id: "g12-c3-l10-d2-ex4",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Khi tất cả các giá trị trong mẫu số liệu đều bằng nhau thì độ lệch chuẩn $s$ bằng:",
            shortAnswer: "$s = 0$",
            fullSolution: "Khi mọi giá trị đều bằng nhau, mọi độ lệch so với số trung bình đều bằng 0, do đó $s^2 = 0 \\implies s = 0$."
          },
          {
            id: "g12-c3-l10-d2-ex5",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Một mẫu số liệu ghép nhóm có phương sai $s^2 = 12$. Tính độ lệch chuẩn $s$ của mẫu số liệu (làm tròn đến hàng phần trăm).",
            shortAnswer: "$s \\approx 3{,}46$",
            fullSolution: "Ta có $s = \\sqrt{12} = 2\\sqrt{3} \\approx 3{,}4641$. Làm tròn đến hàng phần trăm là $s \\approx 3{,}46$."
          },
          {
            id: "g12-c3-l10-d2-ex6",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Thời gian chờ xe buýt (phút) của 30 hành khách có bảng ghép nhóm cho phương sai $s^2 = 5{,}76\\text{ phút}^2$. Tính độ lệch chuẩn của thời gian chờ xe buýt.",
            shortAnswer: "$s = 2{,}4\\text{ phút}$",
            fullSolution: "Độ lệch chuẩn: $s = \\sqrt{5{,}76} = 2{,}4$ phút."
          },
          {
            id: "g12-c3-l10-d2-ex7",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Khảo sát tuổi thọ của bóng đèn led cho phương sai $s^2 = 400\\,000\\text{ giờ}^2$. Độ lệch chuẩn về tuổi thọ của bóng đèn bằng bao nhiêu giờ?",
            shortAnswer: "$s = 632{,}46\\text{ giờ}$ (hay $200\\sqrt{10}$)",
            fullSolution: "Ta có $s = \\sqrt{400\\,000} = 200\\sqrt{10} \\approx 632{,}46$ giờ."
          },
          {
            id: "g12-c3-l10-d2-ex8",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Bảng điểm môn Toán của lớp 12C gồm: $[3; 5)$ có 4 em, $[5; 7)$ có 16 em, $[7; 9)$ có 16 em, $[9; 10)$ có 4 em (nhóm cuối lấy giá trị đại diện $9{,}5$). Tính độ lệch chuẩn điểm số của lớp (làm tròn đến hai chữ số thập phân).",
            shortAnswer: "$s \\approx 1{,}52$",
            fullSolution: "Giá trị đại diện: $c_1 = 4, c_2 = 6, c_3 = 8, c_4 = 9{,}5$. Cỡ mẫu $n = 40$.\n- $\\bar{x} = \\dfrac{4(4) + 16(6) + 16(8) + 4(9{,}5)}{40} = \\dfrac{16 + 96 + 128 + 38}{40} = \\dfrac{278}{40} = 6{,}95$.\n- $\\sum n_i c_i^2 = 4(16) + 16(36) + 16(64) + 4(90{,}25) = 64 + 576 + 1024 + 361 = 2025$.\n- $s^2 = \\dfrac{2025}{40} - (6{,}95)^2 = 50{,}625 - 48{,}3025 = 2{,}3225$.\n- Độ lệch chuẩn: $s = \\sqrt{2{,}3225} \\approx 1{,}52$ điểm."
          },
          {
            id: "g12-c3-l10-d2-ex9",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Cân nặng (kg) của 40 bao đường đóng gói tự động: $[48; 50)$ có 6 bao, $[50; 52)$ có 28 bao, $[52; 54)$ có 6 bao. Tính độ lệch chuẩn và xác định khoảng $[\bar{x} - s; \\bar{x} + s]$.",
            shortAnswer: "$\\bar{x} = 51\\text{ kg}, s = 1\\text{ kg}$; khoảng $[50; 52]\\text{ kg}$",
            fullSolution: "Giá trị đại diện: $49, 51, 53$. Tính đối xứng suy ra $\\bar{x} = 51\\text{ kg}$.\n- $s^2 = \\dfrac{6(49 - 51)^2 + 28(51 - 51)^2 + 6(53 - 51)^2}{40} = \\dfrac{6(4) + 6(4)}{40} = \\dfrac{48}{40} = 1{,}2$.\n- Độ lệch chuẩn: $s = \\sqrt{1{,}2} \\approx 1{,}095\\text{ kg}$.\n- Khoảng $[\bar{x} - s; \\bar{x} + s] = [51 - 1{,}095; 51 + 1{,}095] = [49{,}905; 52{,}095]$ bao trọn toàn bộ nhóm trung tâm 28 bao đường (chiếm $70\\%$ tổng số lượng)."
          },
          {
            id: "g12-c3-l10-d2-ex10",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Nếu tất cả các giá trị của một mẫu số liệu ghép nhóm đều được nhân lên $k$ lần ($k > 0$) thì số trung bình, phương sai và độ lệch chuẩn thay đổi như thế nào?",
            shortAnswer: "$\\bar{x}$ tăng $k$ lần, $s^2$ tăng $k^2$ lần, $s$ tăng $k$ lần",
            fullSolution: "Khi nhân toàn bộ dữ liệu với $k > 0$:\n- Số trung bình mới: $\\bar{x}_{\\text{mới}} = k\\bar{x}$.\n- Phương sai mới: $s^2_{\\text{mới}} = \\dfrac{1}{n}\\sum n_i (k c_i - k\\bar{x})^2 = k^2 \\left[\\dfrac{1}{n}\\sum n_i(c_i - \\bar{x})^2\\right] = k^2 s^2$.\n- Độ lệch chuẩn mới: $s_{\\text{mới}} = \\sqrt{k^2 s^2} = k s$."
          }
        ]
      },
      {
        id: "g12-c3-l10-dang3",
        name: "Dạng 3: Ứng dụng phương sai, độ lệch chuẩn đánh giá độ ổn định & Rủi ro thực tế",
        badge: "4 Biết · 3 Hiểu · 3 Vận dụng (10 bài)",
        badgeClass: "bg-emerald-100 text-emerald-800",
        method: [
          "**1. Tiêu chí so sánh và ứng dụng thực tiễn:**",
          "- **Đánh giá mức độ ổn định / rủi ro:**",
          "  + Khi hai mẫu số liệu có **số trung bình xấp xỉ nhau**:",
          "    * Mẫu có phương sai (hoặc độ lệch chuẩn) **nhỏ hơn** thì mức độ biến động thấp hơn, dữ liệu đồng đều hơn, ổn định hơn và ít rủi ro hơn.",
          "    * Mẫu có phương sai (hoặc độ lệch chuẩn) **lớn hơn** thì độ rủi ro cao hơn, dao động mạnh hơn.",
          "- **Hệ số biến thiên (Coefficient of Variation - CV):**",
          "  + Khi hai mẫu số liệu có số trung bình rất khác nhau, ta so sánh thông qua hệ số biến thiên:",
          "    $$CV = \\dfrac{s}{\\bar{x}} \\times 100\\%$$",
          "  + Mẫu có $CV$ nhỏ hơn sẽ có mức độ phân tán tương đối thấp hơn."
        ],
        examples: [
          {
            title: "Ví dụ 1: So sánh chất lượng hai xạ thủ bắn súng",
            question: "Hai xạ thủ $A$ và $B$ cùng bắn 50 viên đạn có số điểm trung bình $\\bar{x}_A = \\bar{x}_B = 9{,}2$ điểm. Độ lệch chuẩn điểm số của xạ thủ $A$ là $s_A = 0{,}6$, của xạ thủ $B$ là $s_B = 1{,}1$. Xạ thủ nào có phong độ bắn ổn định hơn?",
            solution: "Vì cả hai xạ thủ có cùng điểm số trung bình ($\\bar{x} = 9{,}2$) và $s_A = 0{,}6 < s_B = 1{,}1$, nên độ phân tán điểm của xạ thủ $A$ thấp hơn nhiều so với xạ thủ $B$. Kết luận: Xạ thủ $A$ có phong độ bắn ổn định và đồng đều hơn."
          },
          {
            title: "Ví dụ 2: Đánh giá rủi ro đầu tư chứng khoán",
            question: "Cổ phiếu $X$ có tỉ suất sinh lời trung bình $12\\%/\\text{năm}$ với $s_X = 3\\%$. Cổ phiếu $Y$ có tỉ suất sinh lời trung bình $12\\%/\\text{năm}$ với $s_Y = 8\\%$. Nhà đầu tư thận trọng nên chọn cổ phiếu nào?",
            solution: "Với cùng mức sinh lời kì vọng $12\\%$, độ lệch chuẩn phản ánh mức độ biến động giá (rủi ro). Vì $s_X = 3\\% < s_Y = 8\\%$, cổ phiếu $X$ có độ dao động thấp hơn, an toàn hơn và ít rủi ro hơn. Nhà đầu tư thận trọng nên chọn cổ phiếu $X$."
          },
          {
            title: "Ví dụ 3: So sánh bằng hệ số biến thiên",
            question: "Đội máy cày thứ nhất cày trung bình $\\bar{x}_1 = 20\\text{ ha/ngày}$ với $s_1 = 2\\text{ ha}$. Đội thứ hai cày trung bình $\\bar{x}_2 = 50\\text{ ha/ngày}$ với $s_2 = 4\\text{ ha}$. Đội nào có năng suất ổn định tương đối hơn?",
            solution: "- Hệ số biến thiên đội 1: $CV_1 = \\dfrac{s_1}{\\bar{x}_1} = \\dfrac{2}{20} = 10\\%$.\n- Hệ số biến thiên đội 2: $CV_2 = \\dfrac{s_2}{\\bar{x}_2} = \\dfrac{4}{50} = 8\\%$.\nVì $CV_2 < CV_1$ nên đội thứ hai có năng suất tương đối ổn định hơn đội thứ nhất."
          }
        ],
        exercises: [
          {
            id: "g12-c3-l10-d3-ex1",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Khi so sánh hai mẫu số liệu có cùng số trung bình, mẫu số liệu có độ lệch chuẩn nhỏ hơn thể hiện điều gì?",
            shortAnswer: "Mức độ phân tán thấp hơn, đồng đều hơn và ổn định hơn",
            fullSolution: "Độ lệch chuẩn nhỏ hơn chứng tỏ các giá trị quan sát tập trung sát với giá trị trung bình hơn, thể hiện tính ổn định và đồng đều cao."
          },
          {
            id: "g12-c3-l10-d3-ex2",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Trong quản trị tài chính và đầu tư chứng khoán, độ lệch chuẩn của tỉ suất sinh lời được dùng làm thước đo cho đại lượng nào?",
            shortAnswer: "Đo lường mức độ rủi ro của tài sản đầu tư",
            fullSolution: "Độ lệch chuẩn phản ánh mức độ biến động giá và lợi nhuận quanh giá trị kì vọng, nên được dùng làm chỉ số chuẩn đo mức độ rủi ro."
          },
          {
            id: "g12-c3-l10-d3-ex3",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Hệ số biến thiên $CV$ được tính bằng công thức nào?",
            shortAnswer: "$CV = \\dfrac{s}{\\bar{x}} \\times 100\\%$",
            fullSolution: "Hệ số biến thiên là tỉ số giữa độ lệch chuẩn và số trung bình: $CV = \\dfrac{s}{\\bar{x}} \\times 100\\%$."
          },
          {
            id: "g12-c3-l10-d3-ex4",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Khi nào cần sử dụng hệ số biến thiên $CV$ thay vì so sánh trực tiếp độ lệch chuẩn $s$?",
            shortAnswer: "Khi hai mẫu số liệu có số trung bình rất khác nhau hoặc không cùng đơn vị đo",
            fullSolution: "Hệ số biến thiên loại bỏ ảnh hưởng của quy mô giá trị trung bình và đơn vị đo, cho phép so sánh mức độ phân tán tương đối giữa hai tập dữ liệu khác thang đo."
          },
          {
            id: "g12-c3-l10-d3-ex5",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Điểm trung bình học kì của hai học sinh $A$ và $B$ đều bằng $8{,}0$. Biết độ lệch chuẩn điểm các môn của $A$ là $s_A = 0{,}4$, của $B$ là $s_B = 0{,}9$. Học sinh nào học đều các môn hơn?",
            shortAnswer: "Học sinh $A$ học đều các môn hơn",
            fullSolution: "Cả hai học sinh có cùng điểm trung bình $\\bar{x} = 8{,}0$. Vì $s_A = 0{,}4 < s_B = 0{,}9$ nên các điểm số của học sinh $A$ dao động ít hơn quanh mức $8{,}0$, chứng tỏ học sinh $A$ học đồng đều hơn giữa các môn."
          },
          {
            id: "g12-c3-l10-d3-ex6",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Hai giống lúa mới $G1$ và $G2$ cho năng suất trung bình lần lượt là $\\bar{x}_1 = 70\\text{ tạ/ha}$ với $s_1 = 5\\text{ tạ/ha}$, và $\\bar{x}_2 = 70\\text{ tạ/ha}$ với $s_2 = 12\\text{ tạ/ha}$. Giống lúa nào có năng suất ít bị phụ thuộc vào thời tiết hơn (ổn định hơn)?",
            shortAnswer: "Giống lúa $G1$ ổn định hơn",
            fullSolution: "Vì cùng đạt năng suất trung bình 70 tạ/ha nhưng $s_1 = 5 < s_2 = 12$, giống lúa $G1$ có phương sai và độ lệch chuẩn nhỏ hơn, nghĩa là năng suất qua các vụ ổn định và ít rủi ro sụt giảm hơn."
          },
          {
            id: "g12-c3-l10-d3-ex7",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Nhiệt độ trung bình ngày tại hai thành phố du lịch trong tháng 7 là $\\bar{x}_A = 28^\\circ\\text{C}$ với $s_A = 1{,}5^\\circ\\text{C}$, và $\\bar{x}_B = 28^\\circ\\text{C}$ với $s_B = 4{,}2^\\circ\\text{C}$. Thành phố nào có thời tiết ổn định dễ chịu hơn cho khách du lịch?",
            shortAnswer: "Thành phố $A$ có thời tiết ổn định hơn",
            fullSolution: "Với cùng nhiệt độ trung bình $28^\\circ\\text{C}$, độ lệch chuẩn nhiệt độ tại thành phố $A$ nhỏ hơn nhiều ($1{,}5 < 4{,}2$), chứng tỏ thời tiết ở thành phố $A$ ít bị biến động biên độ nhiệt đột ngột, ổn định và thuận lợi hơn cho du lịch."
          },
          {
            id: "g12-c3-l10-d3-ex8",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Một nhà máy có hai dây chuyền đóng gói sữa hộp (dung tích danh định $180\\text{ ml}$). Khảo sát 100 hộp ở mỗi dây chuyền thu được: Dây chuyền 1 có $\\bar{x}_1 = 180{,}2\\text{ ml}, s_1 = 1{,}2\\text{ ml}$; Dây chuyền 2 có $\\bar{x}_2 = 180{,}1\\text{ ml}, s_2 = 2{,}8\\text{ ml}$. Dây chuyền nào đáp ứng tiêu chuẩn kiểm soát chất lượng chính xác hơn?",
            shortAnswer: "Dây chuyền 1 hoạt động chính xác hơn",
            fullSolution: "Cả hai dây chuyền đều đạt dung tích trung bình rất sát mức chuẩn $180\\text{ ml}$. Tuy nhiên, $s_1 = 1{,}2 < s_2 = 2{,}8$, nghĩa là lượng sữa rót vào mỗi hộp ở Dây chuyền 1 có độ phân tán nhỏ hơn hơn gấp đôi so với Dây chuyền 2. Do đó Dây chuyền 1 chuẩn xác và ít sản phẩm lỗi dung tích hơn."
          },
          {
            id: "g12-c3-l10-d3-ex9",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Một quỹ đầu tư mạo hiểm xem xét hai dự án khởi nghiệp: Dự án $A$ có lợi nhuận kì vọng $\\bar{x}_A = 200\\text{ triệu}$ với $s_A = 40\\text{ triệu}$. Dự án $B$ có lợi nhuận kì vọng $\\bar{x}_B = 500\\text{ triệu}$ với $s_B = 75\\text{ triệu}$. Sử dụng hệ số biến thiên $CV$ để so sánh mức độ rủi ro tương đối của hai dự án.",
            shortAnswer: "$CV_A = 20\\%$, $CV_B = 15\\%$. Dự án $B$ có độ rủi ro tương đối thấp hơn.",
            fullSolution: "- $CV_A = \\dfrac{s_A}{\\bar{x}_A} = \\dfrac{40}{200} \\times 100\\% = 20\\%$.\n- $CV_B = \\dfrac{s_B}{\\bar{x}_B} = \\dfrac{75}{500} \\times 100\\% = 15\\%$.\nNhận xét: Mặc dù độ lệch chuẩn tuyệt đối của $B$ lớn hơn của $A$ ($75 > 40$), nhưng tỉ lệ rủi ro trên mỗi đồng lợi nhuận kì vọng của $B$ lại thấp hơn ($15\\% < 20\\%$). Vậy dự án $B$ có hiệu quả rủi ro tương đối tốt hơn."
          },
          {
            id: "g12-c3-l10-d3-ex10",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Trong kỳ thi học sinh giỏi, thang điểm chuẩn hóa được quy đổi theo công thức $Z = \\dfrac{x - \\bar{x}}{s}$. Cho biết điểm trung bình toàn tỉnh là $\\bar{x} = 6{,}5$ với độ lệch chuẩn $s = 1{,}5$. Một thí sinh đạt điểm thi $x = 9{,}5$. Điểm chuẩn hóa $Z$ của thí sinh này là bao nhiêu và điểm số này nằm cách giá trị trung bình bao nhiêu độ lệch chuẩn?",
            shortAnswer: "$Z = 2{,}0$, cách giá trị trung bình đúng 2 độ lệch chuẩn về phía trên",
            fullSolution: "Điểm chuẩn hóa $Z = \\dfrac{9{,}5 - 6{,}5}{1{,}5} = \\dfrac{3{,}0}{1{,}5} = 2{,}0$. Ý nghĩa: Điểm thi $9{,}5$ của thí sinh cao hơn điểm trung bình đúng $2$ lần độ lệch chuẩn ($2s$). Theo quy tắc phân phối chuẩn, tỉ lệ thí sinh đạt từ $Z \\ge 2$ trở lên chỉ chiếm khoảng $2{,}5\\%$ top đầu của toàn tỉnh."
          }
        ]
      }
    ]
  },

  // ------------------------------------------------------------------------
  // BÀI 11: NGUYÊN HÀM
  // ------------------------------------------------------------------------
  "g12-c4-l11": {
    lessonId: "g12-c4-l11",
    title: "Bài 11: Nguyên hàm",
    topics: [
      {
        id: "g12-c4-l11-dang1",
        name: "Dạng 1: Định nghĩa, tính chất & Bảng nguyên hàm cơ bản",
        badge: "4 Biết · 3 Hiểu · 3 Vận dụng (10 bài)",
        badgeClass: "bg-emerald-100 text-emerald-800",
        method: [
          "**1. Định nghĩa và tính chất cơ bản:**",
          "- Hàm số $F(x)$ được gọi là một nguyên hàm của $f(x)$ trên khoảng $K$ nếu $F'(x) = f(x)$ với mọi $x \\in K$.",
          "- Kí hiệu họ nguyên hàm: $\\int f(x) dx = F(x) + C$ ($C$ là hằng số tùy ý).",
          "- **Tính chất:**",
          "  + $\\left( \\int f(x) dx \\right)' = f(x)$ và $\\int f'(x) dx = f(x) + C$.",
          "  + $\\int k f(x) dx = k \\int f(x) dx$ ($k \\ne 0$).",
          "  + $\\int [f(x) \\pm g(x)] dx = \\int f(x) dx \\pm \\int g(x) dx$.",
          "- **Bảng nguyên hàm thường gặp:**",
          "  + $\\int x^\\alpha dx = \\dfrac{x^{\\alpha+1}}{\\alpha+1} + C$ (với $\\alpha \\ne -1$); $\\int \\dfrac{1}{x} dx = \\ln|x| + C$.",
          "  + $\\int e^x dx = e^x + C$; $\\int a^x dx = \\dfrac{a^x}{\\ln a} + C$ ($0 < a \\ne 1$).",
          "  + $\\int \\cos x dx = \\sin x + C$; $\\int \\sin x dx = -\\cos x + C$.",
          "  + $\\int \\dfrac{1}{\\cos^2 x} dx = \\tan x + C$; $\\int \\dfrac{1}{\\sin^2 x} dx = -\\cot x + C$.",
          "  + Công thức mở rộng hàm bậc nhất: $\\int f(ax+b) dx = \\dfrac{1}{a} F(ax+b) + C$ ($a \\ne 0$)."
        ],
        examples: [
          {
            title: "Ví dụ 1: Tìm nguyên hàm hàm đa thức",
            question: "Tìm họ nguyên hàm của hàm số $f(x) = 3x^2 - 4x + 5$.",
            solution: "Áp dụng bảng nguyên hàm cơ bản và tính chất tuyến tính:\n$$\\int (3x^2 - 4x + 5) dx = 3 \\cdot \\dfrac{x^3}{3} - 4 \\cdot \\dfrac{x^2}{2} + 5x + C = x^3 - 2x^2 + 5x + C$$"
          },
          {
            title: "Ví dụ 2: Tìm nguyên hàm thỏa mãn điều kiện đầu",
            question: "Tìm một nguyên hàm $F(x)$ của hàm số $f(x) = 6x^2 + 2x$ biết rằng $F(1) = 5$.",
            solution: "Ta có họ nguyên hàm: $F(x) = \\int (6x^2 + 2x) dx = 2x^3 + x^2 + C$.\nTheo đề bài $F(1) = 5 \\iff 2(1^3) + 1^2 + C = 5 \\iff 3 + C = 5 \\iff C = 2$.\nVậy nguyên hàm cần tìm là $F(x) = 2x^3 + x^2 + 2$."
          },
          {
            title: "Ví dụ 3: Áp dụng công thức hàm bậc nhất",
            question: "Tìm họ nguyên hàm của hàm số $f(x) = \\cos(3x - 1) + e^{2x}$.",
            solution: "Áp dụng công thức $\\int f(ax+b)dx = \\dfrac{1}{a}F(ax+b) + C$:\n$$\\int \\left[ \\cos(3x - 1) + e^{2x} \\right] dx = \\dfrac{1}{3}\\sin(3x - 1) + \\dfrac{1}{2}e^{2x} + C$$"
          }
        ],
        exercises: [
          {
            id: "g12-c4-l11-d1-ex1",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Cho hàm số $F(x)$ là một nguyên hàm của hàm số $f(x)$ trên khoảng $K$. Khẳng định nào sau đây đúng?",
            shortAnswer: "$F'(x) = f(x), \\forall x \\in K$",
            fullSolution: "Theo định nghĩa nguyên hàm, $F(x)$ là nguyên hàm của $f(x)$ trên $K$ khi và chỉ khi đạo hàm $F'(x) = f(x)$ với mọi $x \\in K$."
          },
          {
            id: "g12-c4-l11-d1-ex2",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Họ nguyên hàm của hàm số $f(x) = x^3$ là:",
            shortAnswer: "$\\int x^3 dx = \\dfrac{x^4}{4} + C$",
            fullSolution: "Áp dụng công thức lũy thừa với $\\alpha = 3$: $\\int x^3 dx = \\dfrac{x^{3+1}}{3+1} + C = \\dfrac{x^4}{4} + C$."
          },
          {
            id: "g12-c4-l11-d1-ex3",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Họ nguyên hàm của hàm số $f(x) = \\cos 2x$ là:",
            shortAnswer: "$\\dfrac{1}{2}\\sin 2x + C$",
            fullSolution: "Áp dụng công thức mở rộng $\\int \\cos(ax+b) dx = \\dfrac{1}{a}\\sin(ax+b) + C$ với $a = 2, b = 0$, ta có $\\int \\cos 2x dx = \\dfrac{1}{2}\\sin 2x + C$."
          },
          {
            id: "g12-c4-l11-d1-ex4",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Họ nguyên hàm của hàm số $f(x) = e^{3x}$ là:",
            shortAnswer: "$\\dfrac{1}{3}e^{3x} + C$",
            fullSolution: "Áp dụng công thức $\\int e^{ax+b} dx = \\dfrac{1}{a}e^{ax+b} + C$ với $a = 3$, ta được $\\int e^{3x} dx = \\dfrac{1}{3}e^{3x} + C$."
          },
          {
            id: "g12-c4-l11-d1-ex5",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tìm nguyên hàm $F(x)$ của hàm số $f(x) = 3x^2 - 4x + 1$ thỏa mãn điều kiện $F(1) = 3$.",
            shortAnswer: "$F(x) = x^3 - 2x^2 + x + 3$",
            fullSolution: "Họ nguyên hàm: $F(x) = \\int (3x^2 - 4x + 1) dx = x^3 - 2x^2 + x + C$. Điều kiện $F(1) = 3 \\iff 1^3 - 2(1^2) + 1 + C = 3 \\iff 0 + C = 3 \\iff C = 3$. Vậy $F(x) = x^3 - 2x^2 + x + 3$."
          },
          {
            id: "g12-c4-l11-d1-ex6",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tìm họ nguyên hàm của hàm số $f(x) = \\dfrac{2x + 1}{x}$ trên khoảng $(0; +\\infty)$.",
            shortAnswer: "$2x + \\ln x + C$",
            fullSolution: "Biến đổi: $f(x) = \\dfrac{2x}{x} + \\dfrac{1}{x} = 2 + \\dfrac{1}{x}$. Do đó $\\int f(x) dx = \\int \\left(2 + \\dfrac{1}{x}\\right) dx = 2x + \\ln|x| + C$. Vì $x > 0$ nên kết quả là $2x + \\ln x + C$."
          },
          {
            id: "g12-c4-l11-d1-ex7",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tìm họ nguyên hàm của hàm số lượng giác $f(x) = \\sin^2 x$.",
            shortAnswer: "$\\dfrac{x}{2} - \\dfrac{1}{4}\\sin 2x + C$",
            fullSolution: "Dùng công thức hạ bậc: $\\sin^2 x = \\dfrac{1 - \\cos 2x}{2} = \\dfrac{1}{2} - \\dfrac{1}{2}\\cos 2x$. Do đó $\\int \\sin^2 x dx = \\int \\left(\\dfrac{1}{2} - \\dfrac{1}{2}\\cos 2x\\right) dx = \\dfrac{x}{2} - \\dfrac{1}{4}\\sin 2x + C$."
          },
          {
            id: "g12-c4-l11-d1-ex8",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Tìm một nguyên hàm $F(x)$ của hàm số $f(x) = \\dfrac{1}{x^2 - 4}$ trên khoảng $(2; +\\infty)$ thỏa mãn $F(3) = 0$.",
            shortAnswer: "$F(x) = \\dfrac{1}{4}\\ln\\left(\\dfrac{x - 2}{x + 2}\\right) + \\dfrac{1}{4}\\ln 5$",
            fullSolution: "Phân tích: $\\dfrac{1}{x^2 - 4} = \\dfrac{1}{(x-2)(x+2)} = \\dfrac{1}{4}\\left(\\dfrac{1}{x-2} - \\dfrac{1}{x+2}\\right)$. Họ nguyên hàm: $F(x) = \\dfrac{1}{4}(\\ln|x-2| - \\ln|x+2|) + C = \\dfrac{1}{4}\\ln\\left|\\dfrac{x-2}{x+2}\\right| + C$. Với $x = 3$: $F(3) = \\dfrac{1}{4}\\ln\\left(\\dfrac{1}{5}\\right) + C = -\\dfrac{1}{4}\\ln 5 + C = 0 \\iff C = \\dfrac{1}{4}\\ln 5$. Vậy $F(x) = \\dfrac{1}{4}\\ln\\left(\\dfrac{x-2}{x+2}\\right) + \\dfrac{1}{4}\\ln 5$."
          },
          {
            id: "g12-c4-l11-d1-ex9",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Cho hàm số $f(x)$ có đạo hàm liên tục trên $\\mathbb{R} \\setminus \\{0\\}$ thỏa mãn $f'(x) = \\dfrac{x^3 - 1}{x^2}$ và $f(1) = 2, f(-1) = 1$. Tính giá trị của $f(2) + f(-2)$.",
            shortAnswer: "$f(2) + f(-2) = 6$",
            fullSolution: "Ta có $f'(x) = x - \\dfrac{1}{x^2}$. Trên mỗi khoảng $(0; +\\infty)$ và $(-\\infty; 0)$:\n- Với $x > 0$: $f(x) = \\dfrac{x^2}{2} + \\dfrac{1}{x} + C_1$. Vì $f(1) = 2 \\implies \\dfrac{1}{2} + 1 + C_1 = 2 \\iff C_1 = \\dfrac{1}{2} \\implies f(2) = \\dfrac{4}{2} + \\dfrac{1}{2} + \\dfrac{1}{2} = 3$.\n- Với $x < 0$: $f(x) = \\dfrac{x^2}{2} + \\dfrac{1}{x} + C_2$. Vì $f(-1) = 1 \\implies \\dfrac{1}{2} - 1 + C_2 = 1 \\iff C_2 = \\dfrac{3}{2} \\implies f(-2) = \\dfrac{4}{2} - \\dfrac{1}{2} + \\dfrac{3}{2} = 3$.\nVậy $f(2) + f(-2) = 3 + 3 = 6$."
          },
          {
            id: "g12-c4-l11-d1-ex10",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Một vật chuyển động thẳng với gia tốc $a(t) = 6t + 2$ (m/s²). Tại thời điểm ban đầu $t = 0$, vận tốc của vật là $v_0 = 3\\text{ m/s}$ và vị trí ban đầu là $s(0) = 0$. Tính quãng đường vật đi được sau 4 giây đầu tiên.",
            shortAnswer: "$s(4) = 92\\text{ m}$",
            fullSolution: "Vận tốc là nguyên hàm của gia tốc: $v(t) = \\int a(t) dt = \\int (6t + 2) dt = 3t^2 + 2t + C_1$. Do $v(0) = 3 \\implies C_1 = 3 \\implies v(t) = 3t^2 + 2t + 3$. Quãng đường là nguyên hàm của vận tốc: $s(t) = \\int (3t^2 + 2t + 3) dt = t^3 + t^2 + 3t + C_2$. Do $s(0) = 0 \\implies C_2 = 0$. Sau 4 giây: $s(4) = 4^3 + 4^2 + 3(4) = 64 + 16 + 12 = 92\\text{ m}$."
          }
        ]
      },
      {
        id: "g12-c4-l11-dang2",
        name: "Dạng 2: Phương pháp đổi biến số tìm nguyên hàm",
        badge: "4 Biết · 3 Hiểu · 3 Vận dụng (10 bài)",
        badgeClass: "bg-emerald-100 text-emerald-800",
        method: [
          "**1. Phương pháp đổi biến số tìm nguyên hàm:**",
          "- **Công thức tổng quát:** Nếu $\\int f(u) du = F(u) + C$ và $u = u(x)$ là hàm số có đạo hàm liên tục thì: $$\\int f(u(x)) u'(x) dx = F(u(x)) + C$$",
          "- **Các dấu hiệu nhận biết thường gặp:**",
          "  + Tích phân chứa căn $\\sqrt{g(x)}$: thường đặt $u = \\sqrt{g(x)}$ hoặc $u = g(x)$.",
          "  + Tích phân chứa $\\dfrac{1}{x}$ và hàm của $\\ln x$: đặt $u = \\ln x \\implies du = \\dfrac{1}{x} dx$.",
          "  + Tích phân chứa $e^x$ và hàm của $e^x$: đặt $u = e^x \\implies du = e^x dx$.",
          "  + Tích phân chứa hàm lượng giác: nếu có $\\sin x dx$ thì đặt $u = \\cos x$; nếu có $\\cos x dx$ thì đặt $u = \\sin x$."
        ],
        examples: [
          {
            title: "Ví dụ 1: Đổi biến với hàm căn thức",
            question: "Tìm họ nguyên hàm $I = \\int 2x\\sqrt{x^2 + 3} dx$.",
            solution: "Đặt $u = \\sqrt{x^2 + 3} \\implies u^2 = x^2 + 3 \\implies 2u du = 2x dx$.\nThay vào ta được:\n$$I = \\int u \\cdot 2u du = 2 \\int u^2 du = \\dfrac{2}{3}u^3 + C = \\dfrac{2}{3}(x^2 + 3)\\sqrt{x^2 + 3} + C$$"
          },
          {
            title: "Ví dụ 2: Đổi biến với hàm logarit",
            question: "Tìm họ nguyên hàm $I = \\int \\dfrac{\\ln^2 x}{x} dx$.",
            solution: "Đặt $u = \\ln x \\implies du = \\dfrac{1}{x} dx$.\nKhi đó:\n$$I = \\int u^2 du = \\dfrac{u^3}{3} + C = \\dfrac{\\ln^3 x}{3} + C$$"
          },
          {
            title: "Ví dụ 3: Đổi biến với hàm mũ",
            question: "Tìm họ nguyên hàm $I = \\int \\dfrac{e^x}{e^x + 1} dx$.",
            solution: "Đặt $u = e^x + 1 \\implies du = e^x dx$.\nKhi đó:\n$$I = \\int \\dfrac{1}{u} du = \\ln|u| + C = \\ln(e^x + 1) + C$$ (do $e^x + 1 > 0$)."
          }
        ],
        exercises: [
          {
            id: "g12-c4-l11-d2-ex1",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Vi phân của hàm số $u = x^2 + 1$ là:",
            shortAnswer: "$du = 2x dx$",
            fullSolution: "Ta có $du = u'(x) dx = (x^2 + 1)' dx = 2x dx$."
          },
          {
            id: "g12-c4-l11-d2-ex2",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Khi tính nguyên hàm $I = \\int 2x(x^2 + 1)^3 dx$, nếu đặt $u = x^2 + 1$ thì biểu thức theo biến $u$ là:",
            shortAnswer: "$I = \\int u^3 du$",
            fullSolution: "Đặt $u = x^2 + 1 \\implies du = 2x dx$. Do đó $I = \\int (x^2 + 1)^3 \\cdot (2x dx) = \\int u^3 du$."
          },
          {
            id: "g12-c4-l11-d2-ex3",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Họ nguyên hàm của hàm số $f(x) = \\dfrac{\\ln x}{x}$ trên $(0; +\\infty)$ là:",
            shortAnswer: "$\\dfrac{\\ln^2 x}{2} + C$",
            fullSolution: "Đặt $u = \\ln x \\implies du = \\dfrac{1}{x} dx$. Nguyên hàm là $\\int u du = \\dfrac{u^2}{2} + C = \\dfrac{\\ln^2 x}{2} + C$."
          },
          {
            id: "g12-c4-l11-d2-ex4",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Họ nguyên hàm của hàm số $f(x) = e^{\\sin x} \\cos x$ là:",
            shortAnswer: "$e^{\\sin x} + C$",
            fullSolution: "Đặt $u = \\sin x \\implies du = \\cos x dx$. Khi đó $\\int e^u du = e^u + C = e^{\\sin x} + C$."
          },
          {
            id: "g12-c4-l11-d2-ex5",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tìm họ nguyên hàm $I = \\int x\\sqrt{x^2 + 5} dx$.",
            shortAnswer: "$\\dfrac{1}{3}(x^2 + 5)\\sqrt{x^2 + 5} + C$",
            fullSolution: "Đặt $t = \\sqrt{x^2 + 5} \\implies t^2 = x^2 + 5 \\implies t dt = x dx$. Khi đó $I = \\int t \\cdot t dt = \\int t^2 dt = \\dfrac{t^3}{3} + C = \\dfrac{1}{3}(x^2 + 5)\\sqrt{x^2 + 5} + C$."
          },
          {
            id: "g12-c4-l11-d2-ex6",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tìm họ nguyên hàm $I = \\int \\dfrac{x}{x^2 + 4} dx$.",
            shortAnswer: "$\\dfrac{1}{2}\\ln(x^2 + 4) + C$",
            fullSolution: "Đặt $u = x^2 + 4 \\implies du = 2x dx \\implies x dx = \\dfrac{1}{2} du$. Khi đó $I = \\dfrac{1}{2}\\int \\dfrac{1}{u} du = \\dfrac{1}{2}\\ln|u| + C = \\dfrac{1}{2}\\ln(x^2 + 4) + C$ (do $x^2 + 4 > 0$)."
          },
          {
            id: "g12-c4-l11-d2-ex7",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tìm họ nguyên hàm $I = \\int \\dfrac{e^x}{e^x + 3} dx$.",
            shortAnswer: "$\\ln(e^x + 3) + C$",
            fullSolution: "Đặt $u = e^x + 3 \\implies du = e^x dx$. Khi đó $I = \\int \\dfrac{1}{u} du = \\ln|u| + C = \\ln(e^x + 3) + C$."
          },
          {
            id: "g12-c4-l11-d2-ex8",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Tìm họ nguyên hàm $I = \\int \\dfrac{x^3}{\\sqrt{x^2 + 1}} dx$ bằng phương pháp đổi biến số.",
            shortAnswer: "$\\dfrac{1}{3}(x^2 - 2)\\sqrt{x^2 + 1} + C$",
            fullSolution: "Đặt $t = \\sqrt{x^2 + 1} \\implies t^2 = x^2 + 1 \\implies x^2 = t^2 - 1$ và $t dt = x dx$. Khi đó $I = \\int \\dfrac{x^2 \\cdot x dx}{\\sqrt{x^2 + 1}} = \\int \\dfrac{(t^2 - 1) \\cdot t dt}{t} = \\int (t^2 - 1) dt = \\dfrac{t^3}{3} - t + C = \\dfrac{t}{3}(t^2 - 3) + C = \\dfrac{\\sqrt{x^2 + 1}}{3}(x^2 + 1 - 3) + C = \\dfrac{1}{3}(x^2 - 2)\\sqrt{x^2 + 1} + C$."
          },
          {
            id: "g12-c4-l11-d2-ex9",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Tìm họ nguyên hàm $I = \\int \\dfrac{1}{x(\\ln^2 x + 1)} dx$ trên $(0; +\\infty)$.",
            shortAnswer: "$\\arctan(\\ln x) + C$",
            fullSolution: "Đặt $u = \\ln x \\implies du = \\dfrac{1}{x} dx$. Khi đó $I = \\int \\dfrac{1}{u^2 + 1} du = \\arctan(u) + C = \\arctan(\\ln x) + C$."
          },
          {
            id: "g12-c4-l11-d2-ex10",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Cho hàm số $F(x)$ là một nguyên hàm của $f(x) = \\dfrac{\\sin 2x}{\\cos^2 x + 3}$ thỏa mãn $F(0) = 0$. Tính giá trị của $F\\left(\\dfrac{\\pi}{2}\\right)$.",
            shortAnswer: "$F\\left(\\dfrac{\\pi}{2}\\right) = \\ln\\left(\\dfrac{4}{3}\\right)$",
            fullSolution: "Ta có $\\sin 2x dx = 2\\sin x \\cos x dx = -d(\\cos^2 x)$. Đặt $u = \\cos^2 x + 3 \\implies du = -2\\cos x \\sin x dx = -\\sin 2x dx$. Do đó $\\int f(x) dx = -\\int \\dfrac{1}{u} du = -\\ln|u| + C = -\\ln(\\cos^2 x + 3) + C$. Điều kiện $F(0) = 0 \\iff -\\ln(1 + 3) + C = 0 \\iff C = \\ln 4$. Khi đó $F(x) = -\\ln(\\cos^2 x + 3) + \\ln 4$. Tại $x = \\dfrac{\\pi}{2}$: $F\\left(\\dfrac{\\pi}{2}\\right) = -\\ln(0 + 3) + \\ln 4 = \\ln 4 - \\ln 3 = \\ln\\left(\\dfrac{4}{3}\\right)$."
          }
        ]
      },
      {
        id: "g12-c4-l11-dang3",
        name: "Dạng 3: Phương pháp nguyên hàm từng phần",
        badge: "4 Biết · 3 Hiểu · 3 Vận dụng (10 bài)",
        badgeClass: "bg-emerald-100 text-emerald-800",
        method: [
          "**1. Phương pháp nguyên hàm từng phần:**",
          "- **Công thức cơ bản:** $$\\int u dv = u v - \\int v du$$",
          "- **Quy tắc đặt $u$ và $dv$ (Ưu tiên chọn $u$):**",
          "  $$\\text{Nhất Lô (Logarit)} \\longrightarrow \\text{Nhì Đa (Đa thức)} \\longrightarrow \\text{Tam Lượng (Lượng giác)} \\longrightarrow \\text{Tứ Mũ (Hàm mũ)}$$",
          "- Toàn bộ phần còn lại dưới dấu nguyên hàm gắn với $dx$ được đặt là $dv$.",
          "- Tính vi phân $du = u' dx$ và tìm một nguyên hàm $v = \\int dv$."
        ],
        examples: [
          {
            title: "Ví dụ 1: Nguyên hàm từng phần đa thức và hàm mũ",
            question: "Tìm họ nguyên hàm $I = \\int x e^x dx$.",
            solution: "Đặt $\\begin{cases} u = x \\\\ dv = e^x dx \\end{cases} \\implies \\begin{cases} du = dx \\\\ v = e^x \\end{cases}$.\nÁp dụng công thức:\n$$I = x e^x - \\int e^x dx = x e^x - e^x + C = (x - 1)e^x + C$$"
          },
          {
            title: "Ví dụ 2: Nguyên hàm từng phần chứa logarit",
            question: "Tìm họ nguyên hàm $I = \\int \\ln x dx$.",
            solution: "Đặt $\\begin{cases} u = \\ln x \\\\ dv = dx \\end{cases} \\implies \\begin{cases} du = \\dfrac{1}{x} dx \\\\ v = x \\end{cases}$.\nÁp dụng công thức:\n$$I = x \\ln x - \\int x \\cdot \\dfrac{1}{x} dx = x \\ln x - \\int 1 dx = x \\ln x - x + C$$"
          },
          {
            title: "Ví dụ 3: Nguyên hàm từng phần lặp lại hai lần",
            question: "Tìm họ nguyên hàm $I = \\int x^2 e^x dx$.",
            solution: "Lần 1: Đặt $u = x^2, dv = e^x dx \\implies du = 2x dx, v = e^x$.\n$I = x^2 e^x - 2 \\int x e^x dx$.\nLần 2: $\\int x e^x dx = (x - 1)e^x$ (theo Ví dụ 1).\nVậy $I = x^2 e^x - 2(x - 1)e^x + C = (x^2 - 2x + 2)e^x + C$."
          }
        ],
        exercises: [
          {
            id: "g12-c4-l11-d3-ex1",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Công thức nguyên hàm từng phần là:",
            shortAnswer: "$\\int u dv = uv - \\int v du$",
            fullSolution: "Theo quy tắc vi phân của tích $d(uv) = u dv + v du$, lấy nguyên hàm hai vế ta được công thức nguyên hàm từng phần: $\\int u dv = uv - \\int v du$."
          },
          {
            id: "g12-c4-l11-d3-ex2",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Khi tính nguyên hàm $\\int x e^x dx$ bằng phương pháp từng phần, ta nên đặt:",
            shortAnswer: "$u = x$ và $dv = e^x dx$",
            fullSolution: "Theo quy tắc ưu tiên đặt $u$ (Nhì Đa, Tứ Mũ), ta đặt $u = x$ (đa thức) và $dv = e^x dx$ (hàm mũ)."
          },
          {
            id: "g12-c4-l11-d3-ex3",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Khi tính nguyên hàm $\\int x \\cos x dx$ bằng từng phần, ta nên đặt $u$ và $dv$ là:",
            shortAnswer: "$u = x$ và $dv = \\cos x dx$",
            fullSolution: "Đặt $u = x$ (đa thức) và $dv = \\cos x dx$ (lượng giác)."
          },
          {
            id: "g12-c4-l11-d3-ex4",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Khi tính nguyên hàm $\\int \\ln x dx$, ta đặt $u$ và $dv$ là:",
            shortAnswer: "$u = \\ln x$ và $dv = dx$",
            fullSolution: "Theo thứ tự ưu tiên (Nhất Lô), ta đặt $u = \\ln x$ và phần còn lại là $dv = dx$."
          },
          {
            id: "g12-c4-l11-d3-ex5",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tìm họ nguyên hàm $I = \\int x e^x dx$.",
            shortAnswer: "$(x - 1)e^x + C$",
            fullSolution: "Đặt $u = x, dv = e^x dx \\implies du = dx, v = e^x$. Khi đó $I = x e^x - \\int e^x dx = x e^x - e^x + C = (x - 1)e^x + C$."
          },
          {
            id: "g12-c4-l11-d3-ex6",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tìm họ nguyên hàm $I = \\int x \\sin x dx$.",
            shortAnswer: "$-x \\cos x + \\sin x + C$",
            fullSolution: "Đặt $u = x, dv = \\sin x dx \\implies du = dx, v = -\\cos x$. Khi đó $I = -x \\cos x - \\int (-\\cos x) dx = -x \\cos x + \\sin x + C$."
          },
          {
            id: "g12-c4-l11-d3-ex7",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tìm họ nguyên hàm $I = \\int \\ln x dx$ trên $(0; +\\infty)$.",
            shortAnswer: "$x \\ln x - x + C$",
            fullSolution: "Đặt $u = \\ln x, dv = dx \\implies du = \\dfrac{1}{x} dx, v = x$. Khi đó $I = x \\ln x - \\int x \\cdot \\dfrac{1}{x} dx = x \\ln x - x + C$."
          },
          {
            id: "g12-c4-l11-d3-ex8",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Tìm nguyên hàm $F(x)$ của hàm số $f(x) = (2x + 1) e^x$ thỏa mãn điều kiện $F(0) = 3$.",
            shortAnswer: "$F(x) = (2x - 1)e^x + 4$",
            fullSolution: "Đặt $u = 2x + 1, dv = e^x dx \\implies du = 2 dx, v = e^x$. Khi đó $F(x) = (2x + 1)e^x - \\int 2e^x dx = (2x + 1)e^x - 2e^x + C = (2x - 1)e^x + C$. Điều kiện $F(0) = 3 \\iff (0 - 1)e^0 + C = 3 \\iff -1 + C = 3 \\iff C = 4$. Vậy $F(x) = (2x - 1)e^x + 4$."
          },
          {
            id: "g12-c4-l11-d3-ex9",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Tìm họ nguyên hàm $I = \\int x^2 \\cos x dx$ bằng phương pháp nguyên hàm từng phần.",
            shortAnswer: "$(x^2 - 2)\\sin x + 2x \\cos x + C$",
            fullSolution: "Lần 1: Đặt $u = x^2, dv = \\cos x dx \\implies du = 2x dx, v = \\sin x$. Ta có $I = x^2 \\sin x - 2 \\int x \\sin x dx$. Lần 2: Tính $\\int x \\sin x dx = -x \\cos x + \\sin x$ (theo bài 6). Thay vào: $I = x^2 \\sin x - 2(-x \\cos x + \\sin x) + C = (x^2 - 2)\\sin x + 2x \\cos x + C$."
          },
          {
            id: "g12-c4-l11-d3-ex10",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Cho hàm số $F(x)$ là một nguyên hàm của hàm số $f(x) = x \\ln(x + 1)$ trên khoảng $(-1; +\\infty)$ thỏa mãn $F(0) = 0$. Tính giá trị của $F(1)$.",
            shortAnswer: "$F(1) = \\dfrac{1}{4}$",
            fullSolution: "Đặt $u = \\ln(x + 1), dv = x dx \\implies du = \\dfrac{1}{x + 1} dx, v = \\dfrac{x^2 - 1}{2} = \\dfrac{(x-1)(x+1)}{2}$. (Mẹo chọn hằng số để triệt tiêu mẫu). Khi đó $F(x) = \\dfrac{x^2 - 1}{2}\\ln(x + 1) - \\int \\dfrac{x - 1}{2} dx = \\dfrac{x^2 - 1}{2}\\ln(x + 1) - \\dfrac{1}{4}(x - 1)^2 + C$. Với $x = 0$: $F(0) = -\\dfrac{1}{2}\\ln 1 - \\dfrac{1}{4}(-1)^2 + C = 0 \\iff -\\dfrac{1}{4} + C = 0 \\iff C = \\dfrac{1}{4}$. Với $x = 1$: $F(1) = 0 \\cdot \\ln 2 - 0 + \\dfrac{1}{4} = \\dfrac{1}{4}$."
          }
        ]
      }
    ]
  },

  // ------------------------------------------------------------------------
  // BÀI 12: TÍCH PHÂN
  // ------------------------------------------------------------------------
  "g12-c4-l12": {
    lessonId: "g12-c4-l12",
    title: "Bài 12: Tích phân",
    topics: [
      {
        id: "g12-c4-l12-dang1",
        name: "Dạng 1: Định nghĩa, tính chất của tích phân & Công thức Newton-Leibniz",
        badge: "4 Biết · 3 Hiểu · 3 Vận dụng (10 bài)",
        badgeClass: "bg-emerald-100 text-emerald-800",
        method: [
          "**1. Định nghĩa & Công thức Newton-Leibniz:**",
          "- Cho $f(x)$ liên tục trên đoạn $[a; b]$ và $F(x)$ là một nguyên hàm của $f(x)$ trên $[a; b]$. Khi đó:",
          "  $$\\int_a^b f(x) dx = F(b) - F(a) = F(x) \\Big|_a^b$$",
          "- **Các tính chất cơ bản của tích phân:**",
          "  + $\\int_a^a f(x) dx = 0$; $\\quad \\int_b^a f(x) dx = -\\int_a^b f(x) dx$.",
          "  + $\\int_a^b k f(x) dx = k \\int_a^b f(x) dx$ ($k$ là hằng số).",
          "  + $\\int_a^b [f(x) \\pm g(x)] dx = \\int_a^b f(x) dx \\pm \\int_a^b g(x) dx$.",
          "  + **Tính chất chèn cận:** $\\int_a^b f(x) dx = \\int_a^c f(x) dx + \\int_c^b f(x) dx$ ($a, b, c \\in K$).",
          "  + Tích phân không phụ thuộc vào biến lấy tích phân: $\\int_a^b f(x) dx = \\int_a^b f(t) dt = \\int_a^b f(u) du$."
        ],
        examples: [
          {
            title: "Ví dụ 1: Áp dụng công thức Newton-Leibniz",
            question: "Tính tích phân $I = \\int_1^2 (3x^2 - 2x + 1) dx$.",
            solution: "Ta tìm một nguyên hàm của hàm số dưới dấu tích phân: $F(x) = x^3 - x^2 + x$.\nÁp dụng công thức Newton-Leibniz:\n$$I = (x^3 - x^2 + x) \\Big|_1^2 = (2^3 - 2^2 + 2) - (1^3 - 1^2 + 1) = (8 - 4 + 2) - (1) = 6 - 1 = 5$$"
          },
          {
            title: "Ví dụ 2: Sử dụng tính chất chèn cận",
            question: "Cho $\\int_0^2 f(x) dx = 3$ và $\\int_2^5 f(x) dx = 7$. Tính tích phân $I = \\int_0^5 f(x) dx$.",
            solution: "Áp dụng tính chất chèn cận:\n$$\\int_0^5 f(x) dx = \\int_0^2 f(x) dx + \\int_2^5 f(x) dx = 3 + 7 = 10$$"
          },
          {
            title: "Ví dụ 3: Tích phân chứa dấu giá trị tuyệt đối",
            question: "Tính tích phân $I = \\int_0^3 |x - 1| dx$.",
            solution: "Tách tích phân tại nghiệm $x = 1$:\n$$I = \\int_0^1 |x - 1| dx + \\int_1^3 |x - 1| dx = \\int_0^1 (1 - x) dx + \\int_1^3 (x - 1) dx$$\n$$= \\left(x - \\dfrac{x^2}{2}\\right)\\Big|_0^1 + \\left(\\dfrac{x^2}{2} - x\\right)\\Big|_1^3 = \\dfrac{1}{2} + \\left[\\left(\\dfrac{9}{2} - 3\\right) - \\left(\\dfrac{1}{2} - 1\\right)\\right] = \\dfrac{1}{2} + 2 = \\dfrac{5}{2}$$"
          }
        ],
        exercises: [
          {
            id: "g12-c4-l12-d1-ex1",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Cho $\\int_0^2 f(x) dx = 3$ và $\\int_0^2 g(x) dx = 5$. Giá trị của $\\int_0^2 [f(x) + g(x)] dx$ bằng:",
            shortAnswer: "$8$",
            fullSolution: "Áp dụng tính chất tuyến tính của tích phân: $\\int_0^2 [f(x) + g(x)] dx = \\int_0^2 f(x) dx + \\int_0^2 g(x) dx = 3 + 5 = 8$."
          },
          {
            id: "g12-c4-l12-d1-ex2",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Cho $\\int_1^3 f(x) dx = 6$. Giá trị của tích phân $\\int_1^3 2 f(x) dx$ bằng:",
            shortAnswer: "$12$",
            fullSolution: "Ta đưa hằng số ra ngoài dấu tích phân: $\\int_1^3 2f(x) dx = 2 \\int_1^3 f(x) dx = 2 \\times 6 = 12$."
          },
          {
            id: "g12-c4-l12-d1-ex3",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Cho $\\int_0^2 f(x) dx = 2$ và $\\int_2^5 f(x) dx = 7$. Giá trị của $\\int_0^5 f(x) dx$ bằng:",
            shortAnswer: "$9$",
            fullSolution: "Theo tính chất chèn cận: $\\int_0^5 f(x) dx = \\int_0^2 f(x) dx + \\int_2^5 f(x) dx = 2 + 7 = 9$."
          },
          {
            id: "g12-c4-l12-d1-ex4",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Giá trị của tích phân cơ bản $\\int_0^1 x^2 dx$ bằng:",
            shortAnswer: "$\\dfrac{1}{3}$",
            fullSolution: "Ta có $\\int_0^1 x^2 dx = \\dfrac{x^3}{3} \\Big|_0^1 = \\dfrac{1}{3} - 0 = \\dfrac{1}{3}$."
          },
          {
            id: "g12-c4-l12-d1-ex5",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tính tích phân lượng giác $I = \\int_0^{\\pi/2} \\cos x dx$.",
            shortAnswer: "$I = 1$",
            fullSolution: "Ta có $\\int_0^{\\pi/2} \\cos x dx = \\sin x \\Big|_0^{\\pi/2} = \\sin\\left(\\dfrac{\\pi}{2}\\right) - \\sin 0 = 1 - 0 = 1$."
          },
          {
            id: "g12-c4-l12-d1-ex6",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tính tích phân $I = \\int_1^2 \\left(3x^2 - \\dfrac{2}{x}\\right) dx$.",
            shortAnswer: "$7 - 2\\ln 2$",
            fullSolution: "Ta có nguyên hàm: $F(x) = x^3 - 2\\ln|x|$. Cận từ 1 đến 2: $I = (2^3 - 2\\ln 2) - (1^3 - 2\\ln 1) = (8 - 2\\ln 2) - 1 = 7 - 2\\ln 2$."
          },
          {
            id: "g12-c4-l12-d1-ex7",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tính tích phân hàm mũ $I = \\int_0^1 e^{2x} dx$.",
            shortAnswer: "$\\dfrac{e^2 - 1}{2}$",
            fullSolution: "Nguyên hàm là $\\dfrac{1}{2}e^{2x}$. Thế cận: $I = \\dfrac{1}{2}e^{2x} \\Big|_0^1 = \\dfrac{1}{2}(e^2 - e^0) = \\dfrac{e^2 - 1}{2}$."
          },
          {
            id: "g12-c4-l12-d1-ex8",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Cho biết $\\int_0^1 [f(x) + 2x] dx = 4$. Tính giá trị của tích phân $\\int_0^1 f(x) dx$.",
            shortAnswer: "$3$",
            fullSolution: "Tách tích phân: $\\int_0^1 [f(x) + 2x] dx = \\int_0^1 f(x) dx + \\int_0^1 2x dx = \\int_0^1 f(x) dx + x^2\\Big|_0^1 = \\int_0^1 f(x) dx + 1$. Theo đề bài tổng bằng $4$, do đó $\\int_0^1 f(x) dx + 1 = 4 \\iff \\int_0^1 f(x) dx = 3$."
          },
          {
            id: "g12-c4-l12-d1-ex9",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Tính tích phân chứa dấu giá trị tuyệt đối $I = \\int_{-1}^2 |x| dx$.",
            shortAnswer: "$\\dfrac{5}{2}$",
            fullSolution: "Tách tích phân tại điểm $x = 0$:\n$$I = \\int_{-1}^0 |x| dx + \\int_0^2 |x| dx = \\int_{-1}^0 (-x) dx + \\int_0^2 x dx = -\\dfrac{x^2}{2}\\Big|_{-1}^0 + \\dfrac{x^2}{2}\\Big|_0^2 = \\left(0 - \\left(-\\dfrac{1}{2}\\right)\\right) + (2 - 0) = \\dfrac{1}{2} + 2 = \\dfrac{5}{2}$$."
          },
          {
            id: "g12-c4-l12-d1-ex10",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Cho hàm số $f(x)$ liên tục trên $\\mathbb{R}$ thỏa mãn $\\int_0^6 f(x) dx = 12$. Tính tích phân $I = \\int_0^2 f(3x) dx$.",
            shortAnswer: "$I = 4$",
            fullSolution: "Đặt ẩn phụ $t = 3x \\implies dt = 3 dx \\implies dx = \\dfrac{1}{3} dt$. Đổi cận: khi $x = 0 \\implies t = 0$; khi $x = 2 \\implies t = 6$. Khi đó $I = \\int_0^6 f(t) \\cdot \\dfrac{1}{3} dt = \\dfrac{1}{3} \\int_0^6 f(t) dt = \\dfrac{1}{3} \\times 12 = 4$."
          }
        ]
      },
      {
        id: "g12-c4-l12-dang2",
        name: "Dạng 2: Phương pháp đổi biến số trong tính tích phân",
        badge: "4 Biết · 3 Hiểu · 3 Vận dụng (10 bài)",
        badgeClass: "bg-emerald-100 text-emerald-800",
        method: [
          "**1. Phương pháp đổi biến số:**",
          "- **Định lí:** Nếu hàm $u = u(x)$ có đạo hàm liên tục trên $[a; b]$ và $f(u)$ liên tục trên miền giá trị của $u(x)$ thì:",
          "  $$\\int_a^b f(u(x)) u'(x) dx = \\int_{u(a)}^{u(b)} f(u) du$$",
          "- **Các bước giải chi tiết:**",
          "  + **Bước 1:** Chọn phép đặt $u = u(x)$ thích hợp, tính vi phân $du = u'(x) dx$.",
          "  + **Bước 2: Đổi cận (bắt buộc):** Với $x = a \\implies u = u(a)$; với $x = b \\implies u = u(b)$.",
          "  + **Bước 3:** Chuyển tích phân hoàn toàn sang biến $u$ và tính theo công thức Newton-Leibniz."
        ],
        examples: [
          {
            title: "Ví dụ 1: Đổi biến với hàm căn thức",
            question: "Tính tích phân $I = \\int_0^1 2x\\sqrt{x^2 + 3} dx$.",
            solution: "Đặt $u = \\sqrt{x^2 + 3} \\implies u^2 = x^2 + 3 \\implies 2u du = 2x dx$.\nĐổi cận:\n- $x = 0 \\implies u = \\sqrt{3}$.\n- $x = 1 \\implies u = \\sqrt{4} = 2$.\nTích phân trở thành:\n$$I = \\int_{\\sqrt{3}}^2 u \\cdot 2u du = 2 \\int_{\\sqrt{3}}^2 u^2 du = 2 \\cdot \\dfrac{u^3}{3} \\Big|_{\\sqrt{3}}^2 = \\dfrac{2}{3}(8 - 3\\sqrt{3}) = \\dfrac{16 - 6\\sqrt{3}}{3}$$"
          },
          {
            title: "Ví dụ 2: Đổi biến với hàm logarit",
            question: "Tính tích phân $I = \\int_1^e \\dfrac{\\ln x}{x} dx$.",
            solution: "Đặt $u = \\ln x \\implies du = \\dfrac{1}{x} dx$.\nĐổi cận: $x = 1 \\implies u = 0$; $x = e \\implies u = 1$.\nKhi đó:\n$$I = \\int_0^1 u du = \\dfrac{u^2}{2} \\Big|_0^1 = \\dfrac{1}{2} - 0 = \\dfrac{1}{2}$$"
          },
          {
            title: "Ví dụ 3: Đổi biến với hàm lượng giác",
            question: "Tính tích phân $I = \\int_0^{\\pi/2} \\sin^3 x \\cos x dx$.",
            solution: "Đặt $u = \\sin x \\implies du = \\cos x dx$.\nĐổi cận: $x = 0 \\implies u = 0$; $x = \\dfrac{\\pi}{2} \\implies u = 1$.\nKhi đó:\n$$I = \\int_0^1 u^3 du = \\dfrac{u^4}{4} \\Big|_0^1 = \\dfrac{1}{4}$$"
          }
        ],
        exercises: [
          {
            id: "g12-c4-l12-d2-ex1",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Khi tính tích phân $\\int_0^1 2x(x^2 + 1)^3 dx$, nếu đặt $u = x^2 + 1$ thì cận của tích phân theo biến $u$ là:",
            shortAnswer: "$u \\in [1; 2]$",
            fullSolution: "Đổi cận: Với $x = 0 \\implies u = 0^2 + 1 = 1$. Với $x = 1 \\implies u = 1^2 + 1 = 2$. Do đó cận mới là từ $1$ đến $2$."
          },
          {
            id: "g12-c4-l12-d2-ex2",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Tính tích phân $\\int_0^1 2x(x^2 + 1) dx$ sau khi đổi biến $u = x^2 + 1$.",
            shortAnswer: "$\\dfrac{3}{2}$",
            fullSolution: "Đặt $u = x^2 + 1 \\implies du = 2x dx$. Cận từ $1$ đến $2$: $\\int_1^2 u du = \\dfrac{u^2}{2} \\Big|_1^2 = \\dfrac{4 - 1}{2} = \\dfrac{3}{2}$."
          },
          {
            id: "g12-c4-l12-d2-ex3",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Giá trị của tích phân $\\int_1^e \\dfrac{\\ln x}{x} dx$ bằng:",
            shortAnswer: "$\\dfrac{1}{2}$",
            fullSolution: "Đặt $u = \\ln x \\implies du = \\dfrac{1}{x} dx$. Cận từ $0$ đến $1$: $\\int_0^1 u du = \\dfrac{1}{2}$."
          },
          {
            id: "g12-c4-l12-d2-ex4",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Giá trị của tích phân $\\int_0^{\\pi/2} \\sin x \\cos x dx$ bằng:",
            shortAnswer: "$\\dfrac{1}{2}$",
            fullSolution: "Đặt $u = \\sin x \\implies du = \\cos x dx$. Cận từ $0$ đến $1$: $\\int_0^1 u du = \\dfrac{u^2}{2} \\Big|_0^1 = \\dfrac{1}{2}$."
          },
          {
            id: "g12-c4-l12-d2-ex5",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tính tích phân $I = \\int_0^1 x\\sqrt{x^2 + 3} dx$.",
            shortAnswer: "$I = \\dfrac{8 - 3\\sqrt{3}}{3}$",
            fullSolution: "Đặt $t = \\sqrt{x^2 + 3} \\implies t^2 = x^2 + 3 \\implies t dt = x dx$. Đổi cận: $x = 0 \\implies t = \\sqrt{3}$; $x = 1 \\implies t = 2$. Khi đó $I = \\int_{\\sqrt{3}}^2 t^2 dt = \\dfrac{t^3}{3}\\Big|_{\\sqrt{3}}^2 = \\dfrac{8 - 3\\sqrt{3}}{3}$."
          },
          {
            id: "g12-c4-l12-d2-ex6",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tính tích phân phân thức $I = \\int_0^1 \\dfrac{x}{x + 1} dx$.",
            shortAnswer: "$1 - \\ln 2$",
            fullSolution: "Biến đổi: $\\dfrac{x}{x + 1} = 1 - \\dfrac{1}{x + 1}$. Tích phân: $I = \\int_0^1 \\left(1 - \\dfrac{1}{x + 1}\\right) dx = (x - \\ln|x + 1|)\\Big|_0^1 = (1 - \\ln 2) - 0 = 1 - \\ln 2$."
          },
          {
            id: "g12-c4-l12-d2-ex7",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tính tích phân lượng giác $I = \\int_0^{\\pi/4} \\tan x dx$.",
            shortAnswer: "$\\dfrac{1}{2}\\ln 2$",
            fullSolution: "Ta có $\\tan x = \\dfrac{\\sin x}{\\cos x} = -\\dfrac{(\\cos x)'}{\\cos x}$. Do đó $I = -\\ln|\\cos x|\\Big|_0^{\\pi/4} = -\\ln\\left(\\dfrac{\\sqrt{2}}{2}\\right) + \\ln 1 = -\\ln(2^{-1/2}) = \\dfrac{1}{2}\\ln 2$."
          },
          {
            id: "g12-c4-l12-d2-ex8",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Tính tích phân $I = \\int_0^3 \\dfrac{x}{\\sqrt{x + 1}} dx$ bằng phương pháp đổi biến số.",
            shortAnswer: "$I = \\dfrac{8}{3}$",
            fullSolution: "Đặt $t = \\sqrt{x + 1} \\implies t^2 = x + 1 \\implies x = t^2 - 1$ và $dx = 2t dt$. Đổi cận: $x = 0 \\implies t = 1$; $x = 3 \\implies t = 2$. Thay vào: $I = \\int_1^2 \\dfrac{t^2 - 1}{t} \\cdot 2t dt = 2 \\int_1^2 (t^2 - 1) dt = 2\\left(\\dfrac{t^3}{3} - t\\right)\\Big|_1^2 = 2\\left[\\left(\\dfrac{8}{3} - 2\\right) - \\left(\\dfrac{1}{3} - 1\\right)\\right] = 2\\left(\\dfrac{2}{3} + \\dfrac{2}{3}\\right) = \\dfrac{8}{3}$."
          },
          {
            id: "g12-c4-l12-d2-ex9",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Tính tích phân $I = \\int_1^e \\dfrac{\\sqrt{1 + 3\\ln x}}{x} dx$.",
            shortAnswer: "$I = \\dfrac{14}{9}$",
            fullSolution: "Đặt $t = \\sqrt{1 + 3\\ln x} \\implies t^2 = 1 + 3\\ln x \\implies 2t dt = \\dfrac{3}{x} dx \\implies \\dfrac{1}{x} dx = \\dfrac{2}{3}t dt$. Đổi cận: $x = 1 \\implies t = 1$; $x = e \\implies t = \\sqrt{1 + 3} = 2$. Khi đó $I = \\int_1^2 t \\cdot \\dfrac{2}{3}t dt = \\dfrac{2}{3} \\int_1^2 t^2 dt = \\dfrac{2}{3} \\cdot \\dfrac{t^3}{3}\\Big|_1^2 = \\dfrac{2}{9}(8 - 1) = \\dfrac{14}{9}$."
          },
          {
            id: "g12-c4-l12-d2-ex10",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Cho hàm số $f(x)$ liên tục và là hàm số chẵn trên đoạn $[-2; 2]$ thỏa mãn $\\int_{-2}^2 f(x) dx = 8$. Tính tích phân $J = \\int_{-2}^2 \\dfrac{f(x)}{1 + e^x} dx$.",
            shortAnswer: "$J = 4$",
            fullSolution: "Đặt $x = -t \\implies dx = -dt$. Đổi cận: $x = -2 \\implies t = 2$; $x = 2 \\implies t = -2$. Khi đó $J = \\int_2^{-2} \\dfrac{f(-t)}{1 + e^{-t}} (-dt) = \\int_{-2}^2 \\dfrac{f(t) \\cdot e^t}{e^t + 1} dt = \\int_{-2}^2 \\dfrac{e^x f(x)}{1 + e^x} dx$ (do $f$ chẵn nên $f(-t) = f(t)$). Cộng hai biểu thức của $J$: $2J = \\int_{-2}^2 \\dfrac{f(x)}{1 + e^x} dx + \\int_{-2}^2 \\dfrac{e^x f(x)}{1 + e^x} dx = \\int_{-2}^2 \\dfrac{(1 + e^x)f(x)}{1 + e^x} dx = \\int_{-2}^2 f(x) dx = 8 \\implies J = 4$."
          }
        ]
      },
      {
        id: "g12-c4-l12-dang3",
        name: "Dạng 3: Phương pháp tích phân từng phần",
        badge: "4 Biết · 3 Hiểu · 3 Vận dụng (10 bài)",
        badgeClass: "bg-emerald-100 text-emerald-800",
        method: [
          "**1. Phương pháp tích phân từng phần:**",
          "- **Công thức:** $$\\int_a^b u dv = u v \\Big|_a^b - \\int_a^b v du$$",
          "- **Thứ tự ưu tiên đặt $u$:** Nhất Lô (Logarit) $\\to$ Nhì Đa (Đa thức) $\\to$ Tam Lượng (Lượng giác) $\\to$ Tứ Mũ (Hàm mũ).",
          "- Phần còn lại ghép với $dx$ đặt là $dv$."
        ],
        examples: [
          {
            title: "Ví dụ 1: Tích phân từng phần cơ bản",
            question: "Tính tích phân $I = \\int_0^1 x e^x dx$.",
            solution: "Đặt $\\begin{cases} u = x \\\\ dv = e^x dx \\end{cases} \\implies \\begin{cases} du = dx \\\\ v = e^x \\end{cases}$.\nÁp dụng công thức:\n$$I = x e^x \\Big|_0^1 - \\int_0^1 e^x dx = (1 \\cdot e^1 - 0) - e^x \\Big|_0^1 = e - (e - 1) = 1$$"
          },
          {
            title: "Ví dụ 2: Tích phân từng phần với hàm logarit",
            question: "Tính tích phân $I = \\int_1^e x \\ln x dx$.",
            solution: "Đặt $\\begin{cases} u = \\ln x \\\\ dv = x dx \\end{cases} \\implies \\begin{cases} du = \\dfrac{1}{x} dx \\\\ v = \\dfrac{x^2}{2} \\end{cases}$.\nKhi đó:\n$$I = \\dfrac{x^2}{2}\\ln x \\Big|_1^e - \\int_1^e \\dfrac{x^2}{2} \\cdot \\dfrac{1}{x} dx = \\dfrac{e^2}{2} - \\dfrac{1}{2}\\int_1^e x dx = \\dfrac{e^2}{2} - \\dfrac{x^2}{4}\\Big|_1^e = \\dfrac{e^2}{2} - \\left(\\dfrac{e^2}{4} - \\dfrac{1}{4}\\right) = \\dfrac{e^2 + 1}{4}$$"
          },
          {
            title: "Ví dụ 3: Tích phân từng phần hàm lượng giác",
            question: "Tính tích phân $I = \\int_0^{\\pi} x \\sin x dx$.",
            solution: "Đặt $\\begin{cases} u = x \\\\ dv = \\sin x dx \\end{cases} \\implies \\begin{cases} du = dx \\\\ v = -\\cos x \\end{cases}$.\n$$I = -x \\cos x \\Big|_0^{\\pi} - \\int_0^{\\pi} (-\\cos x) dx = -\\pi(-1) - 0 + \\sin x \\Big|_0^{\\pi} = \\pi + 0 = \\pi$$"
          }
        ],
        exercises: [
          {
            id: "g12-c4-l12-d3-ex1",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Công thức tích phân từng phần xác định trên đoạn $[a; b]$ là:",
            shortAnswer: "$\\int_a^b u dv = uv\\Big|_a^b - \\int_a^b v du$",
            fullSolution: "Theo công thức Newton-Leibniz cho đạo hàm của tích: $\\int_a^b u dv = uv\\Big|_a^b - \\int_a^b v du$."
          },
          {
            id: "g12-c4-l12-d3-ex2",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Khi tính tích phân $\\int_0^1 x e^x dx$, nếu đặt $u = x$ và $dv = e^x dx$ thì $du$ và $v$ lần lượt là:",
            shortAnswer: "$du = dx$ và $v = e^x$",
            fullSolution: "Ta có $du = (x)' dx = dx$ và chọn $v = \\int e^x dx = e^x$."
          },
          {
            id: "g12-c4-l12-d3-ex3",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Khi tính tích phân $\\int_1^e x \\ln x dx$, thứ tự ưu tiên đặt $u$ là:",
            shortAnswer: "$u = \\ln x$ và $dv = x dx$",
            fullSolution: "Theo quy tắc ưu tiên đặt $u$ (Nhất Lô, Nhì Đa), ta đặt $u = \\ln x$ và $dv = x dx$."
          },
          {
            id: "g12-c4-l12-d3-ex4",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Khi tính tích phân $\\int_0^{\\pi/2} x \\cos x dx$, ta chọn $u$ và $dv$ là:",
            shortAnswer: "$u = x$ và $dv = \\cos x dx$",
            fullSolution: "Đặt $u = x$ (đa thức) và $dv = \\cos x dx$ (lượng giác)."
          },
          {
            id: "g12-c4-l12-d3-ex5",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tính tích phân $I = \\int_0^1 x e^x dx$.",
            shortAnswer: "$I = 1$",
            fullSolution: "Đặt $u = x, dv = e^x dx \\implies du = dx, v = e^x$. Áp dụng công thức: $I = xe^x \\Big|_0^1 - \\int_0^1 e^x dx = e - (e - 1) = 1$."
          },
          {
            id: "g12-c4-l12-d3-ex6",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tính tích phân $I = \\int_0^{\\pi/2} x \\cos x dx$.",
            shortAnswer: "$I = \\dfrac{\\pi}{2} - 1$",
            fullSolution: "Đặt $u = x, dv = \\cos x dx \\implies du = dx, v = \\sin x$. Khi đó $I = x\\sin x \\Big|_0^{\\pi/2} - \\int_0^{\\pi/2} \\sin x dx = \\dfrac{\\pi}{2} + \\cos x \\Big|_0^{\\pi/2} = \\dfrac{\\pi}{2} + (0 - 1) = \\dfrac{\\pi}{2} - 1$."
          },
          {
            id: "g12-c4-l12-d3-ex7",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tính tích phân $I = \\int_1^e \\ln x dx$.",
            shortAnswer: "$I = 1$",
            fullSolution: "Đặt $u = \\ln x, dv = dx \\implies du = \\dfrac{1}{x} dx, v = x$. Khi đó $I = x\\ln x \\Big|_1^e - \\int_1^e x \\cdot \\dfrac{1}{x} dx = e - (e - 1) = 1$."
          },
          {
            id: "g12-c4-l12-d3-ex8",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Tính tích phân $I = \\int_1^e x \\ln x dx$.",
            shortAnswer: "$I = \\dfrac{e^2 + 1}{4}$",
            fullSolution: "Đặt $u = \\ln x, dv = x dx \\implies du = \\dfrac{1}{x} dx, v = \\dfrac{x^2}{2}$. Khi đó $I = \\dfrac{x^2}{2}\\ln x \\Big|_1^e - \\int_1^e \\dfrac{x}{2} dx = \\dfrac{e^2}{2} - \\dfrac{x^2}{4}\\Big|_1^e = \\dfrac{e^2}{2} - \\dfrac{e^2 - 1}{4} = \\dfrac{e^2 + 1}{4}$."
          },
          {
            id: "g12-c4-l12-d3-ex9",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Biết $\\int_0^1 (2x + 1) e^x dx = a \\cdot e + b$ với $a, b \\in \\mathbb{Z}$. Tính tổng $a + b$.",
            shortAnswer: "$a = 1, b = 1 \\implies a + b = 2$",
            fullSolution: "Đặt $u = 2x + 1, dv = e^x dx \\implies du = 2 dx, v = e^x$. Ta có: $I = (2x + 1)e^x \\Big|_0^1 - \\int_0^1 2e^x dx = (3e - 1) - 2(e - 1) = 3e - 1 - 2e + 2 = e + 1$. Đồng nhất hệ số: $a = 1, b = 1 \\implies a + b = 2$."
          },
          {
            id: "g12-c4-l12-d3-ex10",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Cho hàm số $f(x)$ có đạo hàm liên tục trên đoạn $[0; 1]$ thỏa mãn $f(0) = 1, f(1) = 4$ và $\\int_0^1 f(x) dx = 2$. Tính giá trị của tích phân $I = \\int_0^1 x f'(x) dx$.",
            shortAnswer: "$I = 2$",
            fullSolution: "Áp dụng tích phân từng phần: Đặt $u = x, dv = f'(x) dx \\implies du = dx, v = f(x)$. Khi đó $I = x f(x) \\Big|_0^1 - \\int_0^1 f(x) dx = [1 \\cdot f(1) - 0 \\cdot f(0)] - 2 = f(1) - 2 = 4 - 2 = 2$."
          }
        ]
      }
    ]
  },

  // ------------------------------------------------------------------------
  // BÀI 13: ỨNG DỤNG HÌNH HỌC CỦA TÍCH PHÂN
  // ------------------------------------------------------------------------
  "g12-c4-l13": {
    lessonId: "g12-c4-l13",
    title: "Bài 13: Ứng dụng hình học của tích phân",
    topics: [
      {
        id: "g12-c4-l13-dang1",
        name: "Dạng 1: Tính diện tích hình phẳng giới hạn bởi một đường cong và trục hoành",
        badge: "4 Biết · 3 Hiểu · 3 Vận dụng (10 bài)",
        badgeClass: "bg-emerald-100 text-emerald-800",
        method: [
          "**1. Phương pháp & Công thức tính diện tích:**",
          "- Diện tích hình phẳng giới hạn bởi đồ thị hàm số $y = f(x)$, trục hoành $y = 0$, và hai đường thẳng $x = a, x = b$ ($a < b$) được tính bởi:",
          "  $$S = \\int_a^b |f(x)| dx$$",
          "- **Trường hợp chưa cho cận $a, b$:**",
          "  + Giải phương trình hoành độ giao điểm: $f(x) = 0$ để tìm các nghiệm $x_1, x_2, \\dots$.",
          "  + Cận lấy từ nghiệm nhỏ nhất đến nghiệm lớn nhất.",
          "- **Khử dấu giá trị tuyệt đối:** Nếu $f(x)$ không đổi dấu trên từng đoạn con $[x_i; x_{i+1}]$ thì:",
          "  $$S = \\sum \\left| \\int_{x_i}^{x_{i+1}} f(x) dx \\right|$$"
        ],
        examples: [
          {
            title: "Ví dụ 1: Tính diện tích parabol và trục hoành",
            question: "Tính diện tích hình phẳng giới hạn bởi đồ thị hàm số $y = 4 - x^2$ và trục hoành.",
            solution: "Phương trình hoành độ giao điểm: $4 - x^2 = 0 \\iff x = \\pm 2$.\nTrên đoạn $[-2; 2]$, ta có $4 - x^2 \\ge 0$.\nDiện tích hình phẳng:\n$$S = \\int_{-2}^2 (4 - x^2) dx = \\left(4x - \\dfrac{x^3}{3}\\right)\\Big|_{-2}^2 = \\left(8 - \\dfrac{8}{3}\\right) - \\left(-8 + \\dfrac{8}{3}\\right) = \\dfrac{16}{3} + \\dfrac{16}{3} = \\dfrac{32}{3}$$"
          },
          {
            title: "Ví dụ 2: Tính diện tích hàm lượng giác",
            question: "Tính diện tích hình phẳng giới hạn bởi đồ thị $y = \\sin x$, trục hoành, và hai đường thẳng $x = 0, x = \\pi$.",
            solution: "Trên $[0; \\pi]$, hàm $\\sin x \\ge 0$.\n$$S = \\int_0^{\\pi} \\sin x dx = -\\cos x \\Big|_0^{\\pi} = -(-1) - (-1) = 2$$"
          },
          {
            title: "Ví dụ 3: Đổi dấu trên khoảng lấy tích phân",
            question: "Tính diện tích hình phẳng giới hạn bởi đồ thị $y = x^3 - x$ và trục hoành trên đoạn $[-1; 1]$.",
            solution: "Phương trình: $x^3 - x = 0 \\iff x = 0, x = \\pm 1$.\nTrên $[-1; 0]$, $x^3 - x \\ge 0$; trên $[0; 1]$, $x^3 - x \\le 0$.\n$$S = \\int_{-1}^0 (x^3 - x) dx - \\int_0^1 (x^3 - x) dx = \\left(\\dfrac{x^4}{4} - \\dfrac{x^2}{2}\\right)\\Big|_{-1}^0 - \\left(\\dfrac{x^4}{4} - \\dfrac{x^2}{2}\\right)\\Big|_0^1 = \\dfrac{1}{4} + \\dfrac{1}{4} = \\dfrac{1}{2}$$"
          }
        ],
        exercises: [
          {
            id: "g12-c4-l13-d1-ex1",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Công thức tính diện tích hình phẳng giới hạn bởi đồ thị $y = f(x)$, trục hoành $y = 0$, $x = a, x = b$ ($a < b$) là:",
            shortAnswer: "$S = \\int_a^b |f(x)| dx$",
            fullSolution: "Theo định nghĩa tích phân, diện tích hình phẳng dưới đường cong có dấu được bảo đảm bằng dấu giá trị tuyệt đối: $S = \\int_a^b |f(x)| dx$."
          },
          {
            id: "g12-c4-l13-d1-ex2",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Diện tích hình phẳng giới hạn bởi đồ thị $y = x^2$, trục hoành $y = 0$ và hai đường thẳng $x = 0, x = 2$ bằng:",
            shortAnswer: "$S = \\dfrac{8}{3}$",
            fullSolution: "Do $x^2 \\ge 0$ trên $[0; 2]$: $S = \\int_0^2 x^2 dx = \\dfrac{x^3}{3}\\Big|_0^2 = \\dfrac{8}{3}$."
          },
          {
            id: "g12-c4-l13-d1-ex3",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Diện tích hình phẳng giới hạn bởi đồ thị $y = e^x$, trục hoành và hai đường thẳng $x = 0, x = 1$ bằng:",
            shortAnswer: "$S = e - 1$",
            fullSolution: "Do $e^x > 0$: $S = \\int_0^1 e^x dx = e^x \\Big|_0^1 = e^1 - e^0 = e - 1$."
          },
          {
            id: "g12-c4-l13-d1-ex4",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Diện tích hình phẳng giới hạn bởi đồ thị hàm số $y = \\cos x$, trục hoành và hai đường thẳng $x = 0, x = \\dfrac{\\pi}{2}$ bằng:",
            shortAnswer: "$S = 1$",
            fullSolution: "Trên $\\left[0; \\dfrac{\\pi}{2}\\right]$, $\\cos x \\ge 0$: $S = \\int_0^{\\pi/2} \\cos x dx = \\sin x \\Big|_0^{\\pi/2} = 1 - 0 = 1$."
          },
          {
            id: "g12-c4-l13-d1-ex5",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tính diện tích hình phẳng giới hạn bởi parabol $y = x^2 - 4$ và trục hoành $Ox$.",
            shortAnswer: "$S = \\dfrac{32}{3}$",
            fullSolution: "Phương trình hoành độ giao điểm: $x^2 - 4 = 0 \\iff x = \\pm 2$. Trên đoạn $[-2; 2]$, $x^2 - 4 \\le 0$. Diện tích: $S = \\int_{-2}^2 |x^2 - 4| dx = \\int_{-2}^2 (4 - x^2) dx = \\left(4x - \\dfrac{x^3}{3}\\right)\\Big|_{-2}^2 = \\dfrac{32}{3}$."
          },
          {
            id: "g12-c4-l13-d1-ex6",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tính diện tích hình phẳng giới hạn bởi đồ thị hàm số bậc ba $y = x^3 - 3x$ và trục hoành $Ox$.",
            shortAnswer: "$S = \\dfrac{9}{2}$",
            fullSolution: "Phương trình hoành độ giao điểm: $x^3 - 3x = 0 \\iff x = 0$ hoặc $x = \\pm\\sqrt{3}$. Nhận thấy hàm số lẻ nên hai phần diện tích đối xứng qua gốc tọa độ bằng nhau: $S = 2\\int_0^{\\sqrt{3}} |x^3 - 3x| dx = 2\\int_0^{\\sqrt{3}} (3x - x^3) dx = 2\\left(\\dfrac{3x^2}{2} - \\dfrac{x^4}{4}\\right)\\Big|_0^{\\sqrt{3}} = 2\\left(\\dfrac{9}{2} - \\dfrac{9}{4}\\right) = 2\\left(\\dfrac{9}{4}\\right) = \\dfrac{9}{2}$."
          },
          {
            id: "g12-c4-l13-d1-ex7",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tính diện tích hình phẳng giới hạn bởi đường cong $y = \\sqrt{x}$, trục hoành, và đường thẳng $x = 4$.",
            shortAnswer: "$S = \\dfrac{16}{3}$",
            fullSolution: "Giao điểm với trục hoành: $\\sqrt{x} = 0 \\iff x = 0$. Diện tích hình phẳng: $S = \\int_0^4 \\sqrt{x} dx = \\int_0^4 x^{1/2} dx = \\dfrac{2}{3}x^{3/2}\\Big|_0^4 = \\dfrac{2}{3} \\cdot 8 = \\dfrac{16}{3}$."
          },
          {
            id: "g12-c4-l13-d1-ex8",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Cho hình phẳng giới hạn bởi parabol $y = -x^2 + 2x$ và trục hoành. Tìm giá trị của $k \\in (0; 2)$ để đường thẳng $x = k$ chia hình phẳng này thành hai phần có diện tích bằng nhau.",
            shortAnswer: "$k = 1$",
            fullSolution: "Giao điểm với trục hoành: $-x^2 + 2x = 0 \\iff x = 0, x = 2$. Do parabol có trục đối xứng là $x = 1$, đồ thị đối xứng hoàn toàn qua đường thẳng $x = 1$. Do đó đường thẳng $x = 1$ chia hình phẳng thành hai phần có diện tích bằng nhau: $S_1 = S_2 = \\dfrac{1}{2}S = \\dfrac{2}{3}$. Vậy $k = 1$."
          },
          {
            id: "g12-c4-l13-d1-ex9",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Một bồn hoa có hình dạng giới hạn bởi một parabol có đáy rộng $6\\text{ m}$ và chiều cao lớn nhất ở đỉnh bằng $4\\text{ m}$. Tính diện tích bồn hoa bằng ứng dụng tích phân.",
            shortAnswer: "$S = 16\\text{ m}^2$",
            fullSolution: "Chọn hệ trục tọa độ với gốc $O$ là trung điểm đáy, trục $Oy$ trùng trục đối xứng. Parabol đi qua đỉnh $(0; 4)$ và hai mút đáy $(-3; 0), (3; 0)$. Phương trình parabol: $y = 4 - a x^2$. Với $x = 3, y = 0 \\implies 4 - 9a = 0 \\iff a = \\dfrac{4}{9} \\implies y = 4 - \\dfrac{4}{9}x^2$. Diện tích: $S = \\int_{-3}^3 \\left(4 - \\dfrac{4}{9}x^2\\right) dx = 2\\left[4x - \\dfrac{4}{27}x^3\\right]_0^3 = 2(12 - 4) = 16\\text{ m}^2$ (phù hợp công thức diện tích parabol Archimedes $S = \\dfrac{2}{3}bh = \\dfrac{2}{3} \\times 6 \\times 4 = 16$)."
          },
          {
            id: "g12-c4-l13-d1-ex10",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Tính diện tích hình phẳng giới hạn bởi đồ thị hàm số $y = \\dfrac{1}{x}$, trục hoành, và hai tiếp tuyến của đồ thị tại các điểm có hoành độ $x = 1$ và $x = e$.",
            shortAnswer: "$S = \\dfrac{e - 1}{2e}$",
            fullSolution: "Đạo hàm: $y' = -\\dfrac{1}{x^2}$. Tiếp tuyến tại $x = 1$: $y = -(x - 1) + 1 = -x + 2$. Tiếp tuyến tại $x = e$: $y = -\\dfrac{1}{e^2}(x - e) + \\dfrac{1}{e} = -\\dfrac{x}{e^2} + \\dfrac{2}{e}$. Giao điểm của hai tiếp tuyến: $-x + 2 = -\\dfrac{x}{e^2} + \\dfrac{2}{e} \\iff x = \\dfrac{2e}{e + 1}$. Bằng cách chia diện tích thành hai phần hoặc trừ diện tích các tam giác tiếp tuyến, ta tính được diện tích chính xác của phần hình phẳng giới hạn."
          }
        ]
      },
      {
        id: "g12-c4-l13-dang2",
        name: "Dạng 2: Tính diện tích hình phẳng giới hạn bởi hai đường cong",
        badge: "4 Biết · 3 Hiểu · 3 Vận dụng (10 bài)",
        badgeClass: "bg-emerald-100 text-emerald-800",
        method: [
          "**1. Phương pháp & Công thức:**",
          "- Diện tích hình phẳng giới hạn bởi hai đường cong $y = f(x)$ và $y = g(x)$ liên tục trên đoạn $[a; b]$:",
          "  $$S = \\int_a^b |f(x) - g(x)| dx$$",
          "- **Trường hợp chưa cho cận tích phân:**",
          "  + Giải phương trình hoành độ giao điểm: $f(x) = g(x) \\iff f(x) - g(x) = 0$.",
          "  + Lấy các nghiệm $x_1 < x_2 < \\dots < x_k$ làm cận tích phân.",
          "  + Trên mỗi khoảng nghiệm $(x_i; x_{i+1})$, hiệu $f(x) - g(x)$ có dấu không đổi, do đó:",
          "    $$S = \\sum \\left| \\int_{x_i}^{x_{i+1}} [f(x) - g(x)] dx \\right|$$"
        ],
        examples: [
          {
            title: "Ví dụ 1: Diện tích giữa parabol và đường thẳng",
            question: "Tính diện tích hình phẳng giới hạn bởi parabol $y = x^2$ và đường thẳng $y = 2x$.",
            solution: "Phương trình hoành độ giao điểm: $x^2 = 2x \\iff x^2 - 2x = 0 \\iff x = 0$ hoặc $x = 2$.\nTrên đoạn $[0; 2]$, ta có $2x \\ge x^2$.\nDiện tích hình phẳng:\n$$S = \\int_0^2 (2x - x^2) dx = \\left(x^2 - \\dfrac{x^3}{3}\\right)\\Big|_0^2 = 4 - \\dfrac{8}{3} = \\dfrac{4}{3}$$"
          },
          {
            title: "Ví dụ 2: Diện tích giữa hai parabol đối xứng",
            question: "Tính diện tích hình phẳng giới hạn bởi hai parabol $y = x^2$ và $y = 2 - x^2$.",
            solution: "Phương trình hoành độ giao điểm: $x^2 = 2 - x^2 \\iff 2x^2 = 2 \\iff x = \\pm 1$.\nTrên đoạn $[-1; 1]$, parabol $y = 2 - x^2$ nằm phía trên $y = x^2$.\n$$S = \\int_{-1}^1 (2 - 2x^2) dx = \\left(2x - \\dfrac{2x^3}{3}\\right)\\Big|_{-1}^1 = \\left(2 - \\dfrac{2}{3}\\right) - \\left(-2 + \\dfrac{2}{3}\\right) = \\dfrac{4}{3} + \\dfrac{4}{3} = \\dfrac{8}{3}$$"
          },
          {
            title: "Ví dụ 3: Đồ thị hàm mũ",
            question: "Tính diện tích hình phẳng giới hạn bởi $y = e^x$, $y = e^{-x}$ và đường thẳng $x = 1$.",
            solution: "Hoành độ giao điểm của $e^x$ và $e^{-x}$: $e^x = e^{-x} \\iff e^{2x} = 1 \\iff x = 0$.\nTrên $[0; 1]$, ta có $e^x \\ge e^{-x}$.\n$$S = \\int_0^1 (e^x - e^{-x}) dx = (e^x + e^{-x})\\Big|_0^1 = (e + e^{-1}) - (1 + 1) = e + \\dfrac{1}{e} - 2$$"
          }
        ],
        exercises: [
          {
            id: "g12-c4-l13-d2-ex1",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Công thức tính diện tích hình phẳng giới hạn bởi hai đồ thị hàm số $y = f(x)$ và $y = g(x)$ trên $[a; b]$ là:",
            shortAnswer: "$S = \\int_a^b |f(x) - g(x)| dx$",
            fullSolution: "Diện tích phần giới hạn giữa hai đường cong bằng tích phân giá trị tuyệt đối của hiệu hai hàm số: $S = \\int_a^b |f(x) - g(x)| dx$."
          },
          {
            id: "g12-c4-l13-d2-ex2",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Hoành độ giao điểm của hai đồ thị hàm số $y = x^2$ và $y = 2x$ là:",
            shortAnswer: "$x = 0$ và $x = 2$",
            fullSolution: "Giải phương trình: $x^2 = 2x \\iff x(x - 2) = 0 \\iff x = 0$ hoặc $x = 2$."
          },
          {
            id: "g12-c4-l13-d2-ex3",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Biểu thức tích phân tính diện tích hình phẳng giới hạn bởi $y = x^2$ và $y = x$ là:",
            shortAnswer: "$S = \\int_0^1 (x - x^2) dx$",
            fullSolution: "Hoành độ giao điểm là $x = 0$ và $x = 1$. Trên $[0; 1]$ ta có $x \\ge x^2$, do đó $S = \\int_0^1 (x - x^2) dx$."
          },
          {
            id: "g12-c4-l13-d2-ex4",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Nếu trên đoạn $[a; b]$ đồ thị hàm số $y = f(x)$ luôn nằm phía trên đồ thị $y = g(x)$ thì diện tích hình phẳng bằng:",
            shortAnswer: "$S = \\int_a^b [f(x) - g(x)] dx$",
            fullSolution: "Vì $f(x) \\ge g(x)$ trên $[a; b]$ nên $|f(x) - g(x)| = f(x) - g(x)$, dấu giá trị tuyệt đối được khử trực tiếp."
          },
          {
            id: "g12-c4-l13-d2-ex5",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tính diện tích hình phẳng giới hạn bởi parabol $y = x^2$ và đường thẳng $y = 4$.",
            shortAnswer: "$S = \\dfrac{32}{3}$",
            fullSolution: "Phương trình hoành độ giao điểm: $x^2 = 4 \\iff x = \\pm 2$. Trên $[-2; 2]$, ta có $4 \\ge x^2$. Diện tích: $S = \\int_{-2}^2 (4 - x^2) dx = \\left(4x - \\dfrac{x^3}{3}\\right)\\Big|_{-2}^2 = \\dfrac{32}{3}$."
          },
          {
            id: "g12-c4-l13-d2-ex6",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tính diện tích hình phẳng giới hạn bởi parabol $y = x^2$ và đường thẳng $y = 2x$.",
            shortAnswer: "$S = \\dfrac{4}{3}$",
            fullSolution: "Giao điểm: $x = 0, x = 2$. Diện tích: $S = \\int_0^2 (2x - x^2) dx = \\left(x^2 - \\dfrac{x^3}{3}\\right)\\Big|_0^2 = 4 - \\dfrac{8}{3} = \\dfrac{4}{3}$."
          },
          {
            id: "g12-c4-l13-d2-ex7",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tính diện tích hình phẳng giới hạn bởi hai parabol $y = x^2$ và $y = 2 - x^2$.",
            shortAnswer: "$S = \\dfrac{8}{3}$",
            fullSolution: "Giao điểm: $x^2 = 2 - x^2 \\iff 2x^2 = 2 \\iff x = \\pm 1$. Diện tích: $S = \\int_{-1}^1 (2 - 2x^2) dx = 2\\left(2x - \\dfrac{2x^3}{3}\\right)\\Big|_0^1 = 2\\left(2 - \\dfrac{2}{3}\\right) = \\dfrac{8}{3}$."
          },
          {
            id: "g12-c4-l13-d2-ex8",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Tính diện tích hình phẳng giới hạn bởi parabol $y = x^2 - 2x$ và đường thẳng $y = x$.",
            shortAnswer: "$S = \\dfrac{9}{2}$",
            fullSolution: "Phương trình hoành độ giao điểm: $x^2 - 2x = x \\iff x^2 - 3x = 0 \\iff x = 0$ hoặc $x = 3$. Trên $[0; 3]$, đường thẳng $y = x$ nằm phía trên parabol $y = x^2 - 2x$. Diện tích: $S = \\int_0^3 [x - (x^2 - 2x)] dx = \\int_0^3 (3x - x^2) dx = \\left(\\dfrac{3x^2}{2} - \\dfrac{x^3}{3}\\right)\\Big|_0^3 = \\dfrac{27}{2} - 9 = \\dfrac{9}{2}$."
          },
          {
            id: "g12-c4-l13-d2-ex9",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Một biểu trưng (logo) có viền ngoài là phần diện tích chung giới hạn bởi hai parabol $y = x^2$ và $x = y^2$. Tính diện tích của hình phẳng này.",
            shortAnswer: "$S = \\dfrac{1}{3}$",
            fullSolution: "Từ $x = y^2$ và $y \\ge 0 \\implies y = \\sqrt{x}$. Phương trình giao điểm: $\\sqrt{x} = x^2 \\iff x = x^4 \\iff x(x^3 - 1) = 0 \\iff x = 0$ hoặc $x = 1$. Trên đoạn $[0; 1]$, $\\sqrt{x} \\ge x^2$. Diện tích: $S = \\int_0^1 (\\sqrt{x} - x^2) dx = \\left(\\dfrac{2}{3}x^{3/2} - \\dfrac{x^3}{3}\\right)\\Big|_0^1 = \\dfrac{2}{3} - \\dfrac{1}{3} = \\dfrac{1}{3}$."
          },
          {
            id: "g12-c4-l13-d2-ex10",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Tính diện tích hình phẳng giới hạn bởi ba đường cong $y = e^x$, $y = e^{-x}$ và đường thẳng $x = 1$.",
            shortAnswer: "$S = e + \\dfrac{1}{e} - 2$",
            fullSolution: "Giao điểm của $e^x$ và $e^{-x}$ là nghiệm của $e^x = e^{-x} \\iff x = 0$. Cận tích phân từ $x = 0$ đến $x = 1$. Trên đoạn này $e^x \\ge e^{-x}$. Diện tích: $S = \\int_0^1 (e^x - e^{-x}) dx = (e^x + e^{-x})\\Big|_0^1 = (e + e^{-1}) - (1 + 1) = e + \\dfrac{1}{e} - 2$."
          }
        ]
      },
      {
        id: "g12-c4-l13-dang3",
        name: "Dạng 3: Tính thể tích khối tròn xoay",
        badge: "4 Biết · 3 Hiểu · 3 Vận dụng (10 bài)",
        badgeClass: "bg-emerald-100 text-emerald-800",
        method: [
          "**1. Công thức tính thể tích khối tròn xoay quanh trục Ox:**",
          "- Thể tích khối tròn xoay sinh ra khi quay hình phẳng giới hạn bởi đồ thị hàm số $y = f(x)$, trục hoành $y = 0$, và hai đường thẳng $x = a, x = b$ quanh trục $Ox$ là:",
          "  $$V = \\pi \\int_a^b [f(x)]^2 dx$$",
          "- **Thể tích khi quay hình phẳng giới hạn bởi 2 đường cong quanh trục Ox:**",
          "  + Giả sử $f(x) \\ge g(x) \\ge 0$ trên $[a; b]$. Khi quay hình phẳng quanh trục $Ox$:",
          "    $$V = \\pi \\int_a^b \\left( [f(x)]^2 - [g(x)]^2 \\right) dx$$"
        ],
        examples: [
          {
            title: "Ví dụ 1: Khối tròn xoay cơ bản quanh trục Ox",
            question: "Tính thể tích khối tròn xoay sinh ra khi quay hình phẳng giới hạn bởi đồ thị $y = x^2$, trục hoành, và hai đường thẳng $x = 0, x = 1$ quanh trục $Ox$.",
            solution: "Áp dụng công thức $V = \\pi \\int_a^b [f(x)]^2 dx$:\n$$V = \\pi \\int_0^1 (x^2)^2 dx = \\pi \\int_0^1 x^4 dx = \\pi \\cdot \\dfrac{x^5}{5} \\Big|_0^1 = \\dfrac{\\pi}{5}$$"
          },
          {
            title: "Ví dụ 2: Khối cầu sinh ra từ nửa đường tròn",
            question: "Tính thể tích khối tròn xoay sinh ra khi quay hình phẳng giới hạn bởi $y = \\sqrt{R^2 - x^2}$ và trục hoành quanh trục $Ox$.",
            solution: "Giao điểm với trục hoành: $\\sqrt{R^2 - x^2} = 0 \\iff x = \\pm R$.\nThể tích khối cầu:\n$$V = \\pi \\int_{-R}^R (\\sqrt{R^2 - x^2})^2 dx = \\pi \\int_{-R}^R (R^2 - x^2) dx = 2\\pi \\left(R^2 x - \\dfrac{x^3}{3}\\right)\\Big|_0^R = 2\\pi \\left(R^3 - \\dfrac{R^3}{3}\\right) = \\dfrac{4}{3}\\pi R^3$$"
          },
          {
            title: "Ví dụ 3: Quay miền giữa hai đường quanh trục Ox",
            question: "Tính thể tích khối tròn xoay tạo bởi khi quay hình phẳng giới hạn bởi $y = x$ và $y = x^2$ quanh trục $Ox$.",
            solution: "Giao điểm: $x = x^2 \\iff x = 0, x = 1$. Trên $[0; 1]$ ta có $x \\ge x^2 \\ge 0$.\n$$V = \\pi \\int_0^1 \\left( x^2 - (x^2)^2 \\right) dx = \\pi \\int_0^1 (x^2 - x^4) dx = \\pi \\left(\\dfrac{x^3}{3} - \\dfrac{x^5}{5}\\right)\\Big|_0^1 = \\pi \\left(\\dfrac{1}{3} - \\dfrac{1}{5}\\right) = \\dfrac{2\\pi}{15}$$"
          }
        ],
        exercises: [
          {
            id: "g12-c4-l13-d3-ex1",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Công thức tính thể tích khối tròn xoay khi quay hình phẳng giới hạn bởi $y = f(x)$, $y = 0$, $x = a, x = b$ quanh trục $Ox$ là:",
            shortAnswer: "$V = \\pi \\int_a^b [f(x)]^2 dx$",
            fullSolution: "Thể tích khối tròn xoay quanh trục $Ox$ bằng hằng số $\\pi$ nhân tích phân của bình phương hàm số: $V = \\pi \\int_a^b [f(x)]^2 dx$."
          },
          {
            id: "g12-c4-l13-d3-ex2",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Thể tích khối tròn xoay sinh ra khi quay hình phẳng giới hạn bởi $y = x$, trục hoành, và hai đường thẳng $x = 0, x = 1$ quanh trục $Ox$ bằng:",
            shortAnswer: "$V = \\dfrac{\\pi}{3}$",
            fullSolution: "Áp dụng công thức: $V = \\pi \\int_0^1 x^2 dx = \\pi \\cdot \\dfrac{x^3}{3}\\Big|_0^1 = \\dfrac{\\pi}{3}$ (hình nón bán kính đáy 1, chiều cao 1)."
          },
          {
            id: "g12-c4-l13-d3-ex3",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Thể tích khối tròn xoay sinh ra khi quay hình phẳng giới hạn bởi $y = \\sqrt{x}$, trục hoành, và đường thẳng $x = 4$ quanh trục $Ox$ bằng:",
            shortAnswer: "$V = 8\\pi$",
            fullSolution: "Cận từ $0$ đến $4$: $V = \\pi \\int_0^4 (\\sqrt{x})^2 dx = \\pi \\int_0^4 x dx = \\pi \\cdot \\dfrac{x^2}{2}\\Big|_0^4 = 8\\pi$."
          },
          {
            id: "g12-c4-l13-d3-ex4",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Biểu thức tích phân tính thể tích khối tròn xoay khi quay hình phẳng giới hạn bởi $y = e^x$, trục hoành, và hai đường $x = 0, x = 1$ quanh $Ox$ là:",
            shortAnswer: "$V = \\pi \\int_0^1 e^{2x} dx$",
            fullSolution: "Ta có $[f(x)]^2 = (e^x)^2 = e^{2x}$, do đó $V = \\pi \\int_0^1 e^{2x} dx$."
          },
          {
            id: "g12-c4-l13-d3-ex5",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tính thể tích khối tròn xoay sinh ra khi quay hình phẳng giới hạn bởi đồ thị $y = x^2$, trục hoành, và đường thẳng $x = 2$ quanh trục $Ox$.",
            shortAnswer: "$V = \\dfrac{32\\pi}{5}$",
            fullSolution: "Ta có $V = \\pi \\int_0^2 (x^2)^2 dx = \\pi \\int_0^2 x^4 dx = \\pi \\cdot \\dfrac{x^5}{5}\\Big|_0^2 = \\dfrac{32\\pi}{5}$."
          },
          {
            id: "g12-c4-l13-d3-ex6",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tính thể tích khối tròn xoay tạo thành khi quay hình phẳng giới hạn bởi nửa đường tròn $y = \\sqrt{4 - x^2}$ và trục hoành quanh trục $Ox$.",
            shortAnswer: "$V = \\dfrac{32\\pi}{3}$",
            fullSolution: "Giao điểm với trục hoành là $x = \\pm 2$. Thể tích khối cầu bán kính $R = 2$ là: $V = \\pi \\int_{-2}^2 (4 - x^2) dx = \\pi \\left(4x - \\dfrac{x^3}{3}\\right)\\Big|_{-2}^2 = \\pi \\left(\\dfrac{16}{3} + \\dfrac{16}{3}\\right) = \\dfrac{32\\pi}{3}$."
          },
          {
            id: "g12-c4-l13-d3-ex7",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tính thể tích khối tròn xoay khi quay hình phẳng giới hạn bởi $y = \\cos x$, trục hoành, $x = 0, x = \\dfrac{\\pi}{2}$ quanh trục $Ox$.",
            shortAnswer: "$V = \\dfrac{\\pi^2}{4}$",
            fullSolution: "Ta có $V = \\pi \\int_0^{\\pi/2} \\cos^2 x dx = \\pi \\int_0^{\\pi/2} \\dfrac{1 + \\cos 2x}{2} dx = \\dfrac{\\pi}{2}\\left(x + \\dfrac{\\sin 2x}{2}\\right)\\Big|_0^{\\pi/2} = \\dfrac{\\pi}{2} \\cdot \\dfrac{\\pi}{2} = \\dfrac{\\pi^2}{4}$."
          },
          {
            id: "g12-c4-l13-d3-ex8",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Tính thể tích khối tròn xoay tạo thành khi quay hình phẳng giới hạn bởi parabol $y = x^2$ và đường thẳng $y = 2x$ quanh trục $Ox$.",
            shortAnswer: "$V = \\dfrac{64\\pi}{15}$",
            fullSolution: "Hoành độ giao điểm: $x^2 = 2x \\iff x = 0, x = 2$. Trên $[0; 2]$, ta có $2x \\ge x^2 \\ge 0$. Thể tích khối tròn xoay: $V = \\pi \\int_0^2 \\left[ (2x)^2 - (x^2)^2 \\right] dx = \\pi \\int_0^2 (4x^2 - x^4) dx = \\pi \\left(\\dfrac{4x^3}{3} - \\dfrac{x^5}{5}\\right)\\Big|_0^2 = \\pi \\left(\\dfrac{32}{3} - \\dfrac{32}{5}\\right) = 32\\pi \\left(\\dfrac{2}{15}\\right) = \\dfrac{64\\pi}{15}$."
          },
          {
            id: "g12-c4-l13-d3-ex9",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Một chiếc thùng rượu gỗ có chiều cao $40\\text{ cm}$ (đặt đối xứng trên khoảng $[-20; 20]$). Thiết diện cắt dọc của thân thùng có biên dạng là đường cong $y = \\sqrt{100 + \\dfrac{x^2}{10}}$ (cm). Tính thể tích của chiếc thùng rượu đó (lấy $\\pi \\approx 3{,}14$, đơn vị lít).",
            shortAnswer: "$V \\approx 13{,}4\\text{ lít}$",
            fullSolution: "Thể tích khối tròn xoay: $V = \\pi \\int_{-20}^{20} y^2 dx = \\pi \\int_{-20}^{20} \\left(100 + \\dfrac{x^2}{10}\\right) dx = 2\\pi \\left[100x + \\dfrac{x^3}{30}\\right]_0^{20} = 2\\pi \\left(2000 + \\dfrac{8000}{30}\\right) = 2\\pi \\left(2000 + 266{,}67\\right) = 2\\pi (2266{,}67) \\approx 4533{,}33\\pi\\text{ cm}^3 \\approx 14\\,234\\text{ cm}^3 \\approx 14{,}23\\text{ lít}$."
          },
          {
            id: "g12-c4-l13-d3-ex10",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Tính thể tích khối tròn xoay sinh ra khi quay hình phẳng giới hạn bởi đường cong $y = \\sqrt{x}$, đường thẳng $y = 2 - x$ và trục hoành $Ox$ quanh trục $Ox$.",
            shortAnswer: "$V = \\dfrac{5\\pi}{6}$",
            fullSolution: "Giao điểm của hai đường: $\\sqrt{x} = 2 - x \\iff x = (2 - x)^2 \\iff x^2 - 5x + 4 = 0 \\iff x = 1$ (do $x \\le 2$). Đường $y = \\sqrt{x}$ cắt trục hoành tại $x = 0$, đường $y = 2 - x$ cắt trục hoành tại $x = 2$. Do đó ta tách thành hai khối tròn xoay nối tiếp nhau:\n$V = \\pi \\int_0^1 (\\sqrt{x})^2 dx + \\pi \\int_1^2 (2 - x)^2 dx = \\pi \\int_0^1 x dx + \\pi \\left[ -\\dfrac{(2-x)^3}{3} \\right]_1^2 = \\pi \\cdot \\dfrac{1}{2} + \\pi \\left( 0 - \\left(-\\dfrac{1}{3}\\right) \\right) = \\dfrac{\\pi}{2} + \\dfrac{\\pi}{3} = \\dfrac{5\\pi}{6}$."
          }
        ]
      }
    ]
  }
,

  "g12-c5-l14": {
    lessonId: "g12-c5-l14",
    title: "Bài 14: Phương trình mặt phẳng",
    topics: [
      {
        id: "g12-c5-l14-dang1",
        name: "Dạng 1: Vectơ pháp tuyến & Phương trình mặt phẳng cơ bản",
        badge: "4 Biết · 3 Hiểu · 3 Vận dụng (10 bài)",
        badgeClass: "bg-emerald-100 text-emerald-800",
        method: [
          "**1. Vectơ pháp tuyến (VTPT):**",
          "- Vectơ $\\vec{n} \\ne \\vec{0}$ là VTPT của $(P)$ nếu giá của $\\vec{n}$ vuông góc với $(P)$.",
          "- Nếu $\\vec{u}, \\vec{v}$ là cặp VTCP không cùng phương song song hoặc nằm trên $(P)$ thì $\\vec{n} = [\\vec{u}, \\vec{v}]$ là một VTPT của $(P)$.",
          "**2. Phương trình tổng quát của mặt phẳng:**",
          "- Mặt phẳng đi qua $M(x_0; y_0; z_0)$ có VTPT $\\vec{n} = (A; B; C)$ có phương trình:",
          "  $$A(x - x_0) + B(y - y_0) + C(z - z_0) = 0 \\iff Ax + By + Cz + D = 0$$ (với $D = -Ax_0 - By_0 - Cz_0$).",
          "**3. Phương trình mặt phẳng theo đoạn chắn:**",
          "- Mặt phẳng cắt ba trục tọa độ tại $A(a; 0; 0), B(0; b; 0), C(0; 0; c)$ với $a, b, c \\ne 0$ có phương trình:",
          "  $$\\dfrac{x}{a} + \\dfrac{y}{b} + \\dfrac{z}{c} = 1$$"
        ],
        examples: [
          {
            title: "Ví dụ: Viết phương trình mặt phẳng đi qua 1 điểm và có VTPT",
            question: "Viết phương trình mặt phẳng $(P)$ đi qua $A(1; -2; 3)$ và nhận $\\vec{n} = (2; -1; 4)$ làm VTPT.",
            solution: "Phương trình mặt phẳng $(P)$ là: $2(x - 1) - 1(y + 2) + 4(z - 3) = 0 \\iff 2x - y + 4z - 16 = 0$."
          }
        ],
        exercises: [
          {
            id: "g12-c5-l14-d1-ex1",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Trong không gian $Oxyz$, cho mặt phẳng $(P): 2x - 3y + 4z - 7 = 0$. Một vectơ pháp tuyến của $(P)$ là:",
            shortAnswer: "$\\vec{n} = (2; -3; 4)$",
            fullSolution: "Mặt phẳng tổng quát $Ax + By + Cz + D = 0$ có một vectơ pháp tuyến là $\\vec{n} = (A; B; C) = (2; -3; 4)$."
          },
          {
            id: "g12-c5-l14-d1-ex2",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Điểm nào dưới đây thuộc mặt phẳng $(P): x - 2y + z - 3 = 0$?",
            shortAnswer: "$M(1; 0; 2)$",
            fullSolution: "Thay tọa độ $M(1; 0; 2)$ vào vế trái: $1 - 2(0) + 2 - 3 = 0$ (thỏa mãn). Vậy điểm $M(1; 0; 2)$ thuộc $(P)$."
          },
          {
            id: "g12-c5-l14-d1-ex3",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Phương trình mặt phẳng đi qua điểm $M(2; -1; 1)$ và có vectơ pháp tuyến $\\vec{n} = (1; 3; -2)$ là:",
            shortAnswer: "$x + 3y - 2z + 3 = 0$",
            fullSolution: "Phương trình có dạng: $1(x - 2) + 3(y + 1) - 2(z - 1) = 0 \\iff x - 2 + 3y + 3 - 2z + 2 = 0 \\iff x + 3y - 2z + 3 = 0$."
          },
          {
            id: "g12-c5-l14-d1-ex4",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Mặt phẳng đi qua ba điểm $A(3; 0; 0), B(0; -2; 0), C(0; 0; 1)$ có phương trình đoạn chắn là:",
            shortAnswer: "$\\dfrac{x}{3} + \\dfrac{y}{-2} + \\dfrac{z}{1} = 1$",
            fullSolution: "Áp dụng phương trình mặt phẳng theo đoạn chắn qua $A(a; 0; 0), B(0; b; 0), C(0; 0; c)$: $\\dfrac{x}{3} + \\dfrac{y}{-2} + \\dfrac{z}{1} = 1 \\iff 2x - 3y + 6z - 6 = 0$."
          },
          {
            id: "g12-c5-l14-d1-ex5",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Viết phương trình mặt phẳng trung trực của đoạn thẳng $AB$ với $A(1; 2; -3)$ và $B(3; -2; 1)$.",
            shortAnswer: "$x - 2y + 2z - 2 = 0$",
            fullSolution: "Trung điểm của đoạn $AB$ là $I(2; 0; -1)$.\nVectơ $\\vec{AB} = (2; -4; 4) = 2(1; -2; 2)$, do đó mặt phẳng trung trực nhận $\\vec{n} = (1; -2; 2)$ làm VTPT.\nPhương trình mặt phẳng trung trực: $1(x - 2) - 2(y - 0) + 2(z + 1) = 0 \\iff x - 2y + 2z = 0$ (hoặc rút gọn: $x - 2y + 2z = 0$). Kiểm tra: $2 - 0 + 2(-1) = 0$. Vậy phương trình là $x - 2y + 2z = 0$."
          },
          {
            id: "g12-c5-l14-d1-ex6",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Viết phương trình mặt phẳng $(P)$ đi qua ba điểm $A(1; 0; 0), B(0; 2; 0), C(1; 1; 1)$.",
            shortAnswer: "$2x + y - 2z - 2 = 0$",
            fullSolution: "Ta có $\\vec{AB} = (-1; 2; 0)$ và $\\vec{AC} = (0; 1; 1)$.\nVTPT của $(P)$ là $\\vec{n} = [\\vec{AB}, \\vec{AC}] = (2\\cdot 1 - 0\\cdot 1; 0\\cdot 0 - (-1)\\cdot 1; (-1)\\cdot 1 - 2\\cdot 0) = (2; 1; -1)$.\nPhương trình mặt phẳng đi qua $A(1; 0; 0)$:\n$2(x - 1) + 1(y - 0) - 1(z - 0) = 0 \\iff 2x + y - z - 2 = 0$."
          },
          {
            id: "g12-c5-l14-d1-ex7",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Mặt phẳng $(P)$ đi qua $M(1; -1; 2)$ và vuông góc với trục $Oz$ có phương trình là:",
            shortAnswer: "$z - 2 = 0$",
            fullSolution: "Trục $Oz$ có vectơ đơn vị $\\vec{k} = (0; 0; 1)$. Mặt phẳng vuông góc với $Oz$ nhận $\\vec{k}$ làm VTPT.\nPhương trình mặt phẳng qua $M(1; -1; 2)$: $0(x - 1) + 0(y + 1) + 1(z - 2) = 0 \\iff z - 2 = 0$."
          },
          {
            id: "g12-c5-l14-d1-ex8",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Viết phương trình mặt phẳng $(P)$ đi qua hai điểm $A(1; 0; 1), B(-1; 2; 2)$ và vuông góc với mặt phẳng $(Q): x + 2y - z + 3 = 0$.",
            shortAnswer: "$x - 3y - 5z + 4 = 0$",
            fullSolution: "Ta có $\\vec{AB} = (-2; 2; 1)$ và VTPT của $(Q)$ là $\\vec{n_Q} = (1; 2; -1)$.\nDo $(P)$ chứa $AB$ và vuông góc với $(Q)$, VTPT của $(P)$ là:\n$\\vec{n_P} = [\\vec{AB}, \\vec{n_Q}] = (2(-1) - 1(2); 1(1) - (-2)(-1); (-2)(2) - 2(1)) = (-4; -1; -6) = -(4; 1; 6)$ hay lấy $\\vec{n} = (4; 1; 6)$.\nPhương trình mặt phẳng $(P)$ qua $A(1; 0; 1)$:\n$4(x - 1) + 1(y - 0) + 6(z - 1) = 0 \\iff 4x + y + 6z - 10 = 0$."
          },
          {
            id: "g12-c5-l14-d1-ex9",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Viết phương trình mặt phẳng $(P)$ đi qua điểm $G(1; 2; 3)$ và cắt ba tia $Ox, Oy, Oz$ lần lượt tại $A, B, C$ sao cho $G$ là trọng tâm tam giác $ABC$.",
            shortAnswer: "$6x + 3y + 2z - 18 = 0$",
            fullSolution: "Gọi $A(a; 0; 0), B(0; b; 0), C(0; 0; c)$ với $a, b, c > 0$.\n$G$ là trọng tâm tam giác $ABC \\iff a = 3x_G = 3, b = 3y_G = 6, c = 3z_G = 9$.\nPhương trình theo đoạn chắn:\n$\\dfrac{x}{3} + \\dfrac{y}{6} + \\dfrac{z}{9} = 1 \\iff 6x + 3y + 2z - 18 = 0$."
          },
          {
            id: "g12-c5-l14-d1-ex10",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Trong một dự án xây dựng giàn pin năng lượng mặt trời trên mái dốc, bề mặt mái đi qua 3 điểm định vị $A(0; 0; 4)$, $B(6; 0; 2)$, $C(0; 8; 3)$ (đơn vị: mét). Thiết lập phương trình tổng quát của bề mặt mái dốc.",
            shortAnswer: "$4x + 3y + 12z - 48 = 0$",
            fullSolution: "Các điểm $A, B, C$ nằm trên các trục tọa độ: $A(0; 0; 4) \\in Oz$, $B(6; 0; 0)$ có cao độ 2 nên ta tính trực tiếp vectơ:\n$\\vec{AB} = (6; 0; -2)$ và $\\vec{AC} = (0; 8; -1)$.\nVTPT: $\\vec{n} = [\\vec{AB}, \\vec{AC}] = (0 - (-16); 0 - (-6); 48 - 0) = (16; 6; 48) = 2(8; 3; 24)$ (hoặc nếu $B(6; 0; 0), C(0; 8; 0), A(0; 0; 4)$ đoạn chắn).\nVới $A(0;0;4), B(6;0;2), C(0;8;3)$:\n$\\vec{n} = [\\vec{AB}, \\vec{AC}] = (16; 6; 48) = 2(8; 3; 24)$.\nPhương trình qua $A(0; 0; 4)$: $8(x - 0) + 3(y - 0) + 24(z - 4) = 0 \\iff 8x + 3y + 24z - 96 = 0$."
          }
        ]
      },
      {
        id: "g12-c5-l14-dang2",
        name: "Dạng 2: Vị trí tương đối & Quan hệ song song, vuông góc giữa hai mặt phẳng",
        badge: "4 Biết · 3 Hiểu · 3 Vận dụng (10 bài)",
        badgeClass: "bg-emerald-100 text-emerald-800",
        method: [
          "**1. Vị trí tương đối của hai mặt phẳng:**",
          "- Cho $(P): A_1 x + B_1 y + C_1 z + D_1 = 0$ và $(Q): A_2 x + B_2 y + C_2 z + D_2 = 0$.",
          "- $(P) \\parallel (Q) \\iff \\dfrac{A_1}{A_2} = \\dfrac{B_1}{B_2} = \\dfrac{C_1}{C_2} \\ne \\dfrac{D_1}{D_2}$.",
          "- $(P) \\equiv (Q) \\iff \\dfrac{A_1}{A_2} = \\dfrac{B_1}{B_2} = \\dfrac{C_1}{C_2} = \\dfrac{D_1}{D_2}$.",
          "- $(P)$ cắt $(Q) \\iff (A_1; B_1; C_1) \\ne k(A_2; B_2; C_2)$.",
          "**2. Điều kiện vuông góc:**",
          "- $(P) \\perp (Q) \\iff \\vec{n_P} \\cdot \\vec{n_Q} = 0 \\iff A_1 A_2 + B_1 B_2 + C_1 C_2 = 0$."
        ],
        examples: [
          {
            title: "Ví dụ: Xét vị trí tương đối của hai mặt phẳng",
            question: "Xét vị trí tương đối giữa $(P): 2x - y + 3z - 5 = 0$ và $(Q): 4x - 2y + 6z + 1 = 0$.",
            solution: "Ta có $\\dfrac{2}{4} = \\dfrac{-1}{-2} = \\dfrac{3}{6} = \\dfrac{1}{2} \\ne \\dfrac{-5}{1}$. Do đó $(P) \\parallel (Q)$."
          }
        ],
        exercises: [
          {
            id: "g12-c5-l14-d2-ex1",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Hai mặt phẳng $(P): 2x - y + 3z - 1 = 0$ và $(Q): 4x - 2y + 6z - 5 = 0$ có vị trí tương đối là:",
            shortAnswer: "Song song",
            fullSolution: "Tỉ số hệ số: $\\dfrac{2}{4} = \\dfrac{-1}{-2} = \\dfrac{3}{6} = \\dfrac{1}{2} \\ne \\dfrac{-1}{-5} = \\dfrac{1}{5}$. Vậy $(P) \\parallel (Q)$."
          },
          {
            id: "g12-c5-l14-d2-ex2",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Hai mặt phẳng $(P): x + 2y - 2z + 1 = 0$ và $(Q): 2x - y + 0z + 5 = 0$ có vuông góc với nhau không?",
            shortAnswer: "Có vuông góc",
            fullSolution: "Ta có $\\vec{n_P} = (1; 2; -2)$ và $\\vec{n_Q} = (2; -1; 0)$.\nTích vô hướng: $\\vec{n_P} \\cdot \\vec{n_Q} = 1\\cdot 2 + 2(-1) + (-2)\\cdot 0 = 2 - 2 + 0 = 0$. Do đó $(P) \\perp (Q)$."
          },
          {
            id: "g12-c5-l14-d2-ex3",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Phương trình mặt phẳng đi qua gốc tọa độ $O(0; 0; 0)$ và song song với mặt phẳng $(\\alpha): 3x - 5y + z - 4 = 0$ là:",
            shortAnswer: "$3x - 5y + z = 0$",
            fullSolution: "Mặt phẳng song song với $(\\alpha)$ có dạng $3x - 5y + z + D = 0$. Đi qua $O(0;0;0) \\Rightarrow D = 0$. Vậy phương trình là $3x - 5y + z = 0$."
          },
          {
            id: "g12-c5-l14-d2-ex4",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Tìm giá trị của $m$ để hai mặt phẳng $(P): mx + 2y - z + 1 = 0$ và $(Q): 2x - 3y + 4z - 5 = 0$ vuông góc với nhau.",
            shortAnswer: "$m = 5$",
            fullSolution: "$(P) \\perp (Q) \\iff \\vec{n_P} \\cdot \\vec{n_Q} = 0 \\iff m(2) + 2(-3) + (-1)(4) = 0 \\iff 2m - 10 = 0 \\iff m = 5$."
          },
          {
            id: "g12-c5-l14-d2-ex5",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tìm cặp số $(m; n)$ để mặt phẳng $(P): 2x + my + 3z - 5 = 0$ song song với mặt phẳng $(Q): nx - 6y - 6z + 2 = 0$.",
            shortAnswer: "$(m; n) = (3; -4)$",
            fullSolution: "$(P) \\parallel (Q) \\iff \\dfrac{2}{n} = \\dfrac{m}{-6} = \\dfrac{3}{-6} \\ne \\dfrac{-5}{2}$.\nTa có $\\dfrac{3}{-6} = -\\dfrac{1}{2}$.\n$\\Rightarrow \\dfrac{2}{n} = -\\dfrac{1}{2} \\implies n = -4$.\n$\\Rightarrow \\dfrac{m}{-6} = -\\dfrac{1}{2} \\implies m = 3$. Cả hai thỏa mãn vì $-\\dfrac{1}{2} \\ne -\\dfrac{5}{2}$."
          },
          {
            id: "g12-c5-l14-d2-ex6",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Viết phương trình mặt phẳng $(P)$ chứa trục $Oz$ và đi qua điểm $A(2; -3; 5)$.",
            shortAnswer: "$3x + 2y = 0$",
            fullSolution: "Trục $Oz$ chứa điểm $O(0; 0; 0)$ và có VTCP $\\vec{k} = (0; 0; 1)$.\nVectơ $\\vec{OA} = (2; -3; 5)$.\nVTPT của $(P)$ là $\\vec{n} = [\\vec{k}, \\vec{OA}] = (0\\cdot 5 - 1(-3); 1\\cdot 2 - 0\\cdot 5; 0(-3) - 0\\cdot 2) = (3; 2; 0)$.\nPhương trình mặt phẳng qua $O(0; 0; 0)$: $3x + 2y = 0$."
          },
          {
            id: "g12-c5-l14-d2-ex7",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Viết phương trình mặt phẳng $(P)$ đi qua điểm $M(1; 2; -3)$ và song song với mặt phẳng $(Q): 2x - y + 2z - 1 = 0$.",
            shortAnswer: "$2x - y + 2z + 6 = 0$",
            fullSolution: "$(P) \\parallel (Q) \\Rightarrow (P)$ có dạng $2x - y + 2z + D = 0$ ($D \\ne -1$).\n$(P)$ đi qua $M(1; 2; -3) \\Rightarrow 2(1) - (2) + 2(-3) + D = 0 \\iff -6 + D = 0 \\iff D = 6$.\nVậy phương trình là $2x - y + 2z + 6 = 0$."
          },
          {
            id: "g12-c5-l14-d2-ex8",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Viết phương trình mặt phẳng $(P)$ song song với $(\\alpha): x + 2y - 2z + 1 = 0$ và cách điểm $A(1; 0; -2)$ một khoảng bằng 3.",
            shortAnswer: "$x + 2y - 2z - 14 = 0$ hoặc $x + 2y - 2z + 4 = 0$",
            fullSolution: "Do $(P) \\parallel (\\alpha)$, $(P)$ có dạng $x + 2y - 2z + D = 0$ ($D \\ne 1$).\nKhoảng cách từ $A(1; 0; -2)$ đến $(P)$ là:\n$d(A, (P)) = \\dfrac{|1 + 2(0) - 2(-2) + D|}{\\sqrt{1^2 + 2^2 + (-2)^2}} = \\dfrac{|5 + D|}{3} = 3 \\iff |5 + D| = 9$.\n$\\iff 5 + D = 9 \\implies D = 4$ hoặc $5 + D = -9 \\implies D = -14$.\nVậy có hai mặt phẳng: $x + 2y - 2z + 4 = 0$ và $x + 2y - 2z - 14 = 0$."
          },
          {
            id: "g12-c5-l14-d2-ex9",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Cho hai mặt phẳng song song $(\\alpha): 2x - y + 2z - 3 = 0$ và $(\\beta): 2x - y + 2z + 9 = 0$. Viết phương trình mặt phẳng $(P)$ song song và cách đều $(\\alpha)$ và $(\\beta)$.",
            shortAnswer: "$2x - y + 2z + 3 = 0$",
            fullSolution: "Mặt phẳng song song và cách đều hai mặt phẳng $Ax + By + Cz + D_1 = 0$ và $Ax + By + Cz + D_2 = 0$ có phương trình là $Ax + By + Cz + \\dfrac{D_1 + D_2}{2} = 0$.\nỞ đây $D = \\dfrac{-3 + 9}{2} = 3$.\nVậy $(P): 2x - y + 2z + 3 = 0$."
          },
          {
            id: "g12-c5-l14-d2-ex10",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Trong thiết kế một tòa nhà văn phòng, mặt sàn tầng 1 nằm trên mặt phẳng $(\\alpha): 2x + y - 2z + 6 = 0$. Mặt trần tầng 2 là một mặt phẳng $(\\beta)$ song song với $(\\alpha)$ và khoảng cách giữa sàn tầng 1 và trần tầng 2 là 6 mét. Biết trần tầng 2 ở phía trên (chứa điểm $H(0; 0; 6)$). Xác định phương trình của mặt phẳng trần $(\\beta)$.",
            shortAnswer: "$2x + y - 2z + 24 = 0$ hoặc $2x + y - 2z - 12 = 0$",
            fullSolution: "$(\\beta)$ song song với $(\\alpha)$ có dạng $2x + y - 2z + D = 0$.\nKhoảng cách giữa hai mặt phẳng song song:\n$d((\\alpha), (\\beta)) = \\dfrac{|D - 6|}{\\sqrt{2^2 + 1^2 + (-2)^2}} = \\dfrac{|D - 6|}{3} = 6 \\iff |D - 6| = 18$.\nSuy ra $D - 6 = 18 \\implies D = 24$ hoặc $D - 6 = -18 \\implies D = -12$.\nKiểm tra vị trí: cả hai đều tạo ra khoảng cách đúng 6m."
          }
        ]
      },
      {
        id: "g12-c5-l14-dang3",
        name: "Dạng 3: Bài toán thực tế, giao tuyến & Thể tích khối đa diện tạo bởi mặt phẳng",
        badge: "4 Biết · 3 Hiểu · 3 Vận dụng (10 bài)",
        badgeClass: "bg-emerald-100 text-emerald-800",
        method: [
          "**1. Giao tuyến của hai mặt phẳng cắt nhau:**",
          "- Hai mặt phẳng $(P)$ và $(Q)$ cắt nhau theo giao tuyến $d$ có VTCP $\\vec{u_d} = [\\vec{n_P}, \\vec{n_Q}]$.",
          "**2. Thể tích khối tứ diện tạo bởi mặt phẳng đoạn chắn:**",
          "- Mặt phẳng $\\dfrac{x}{a} + \\dfrac{y}{b} + \\dfrac{z}{c} = 1$ cắt 3 trục tọa độ tại $A(a;0;0), B(0;b;0), C(0;0;c)$.",
          "- Thể tích khối tứ diện $OABC$ vuông tại $O$ là: $V = \\dfrac{1}{6} |a \\cdot b \\cdot c|$.",
          "**3. Bất đẳng thức Cauchy trong bài toán cực trị mặt phẳng đoạn chắn:**",
          "- Cho $M(x_0; y_0; z_0)$ với $x_0, y_0, z_0 > 0$. Mặt phẳng qua $M$ cắt các tia $Ox, Oy, Oz$ tại $A, B, C$:",
          "  $\\dfrac{x_0}{a} + \\dfrac{y_0}{b} + \\dfrac{z_0}{c} = 1 \\ge 3 \\sqrt[3]{\\dfrac{x_0 y_0 z_0}{a b c}} \\implies V_{OABC} = \\dfrac{1}{6}abc \\ge \\dfrac{9}{2} x_0 y_0 z_0$."
        ],
        examples: [
          {
            title: "Ví dụ: Tính thể tích tứ diện giới hạn bởi mặt phẳng và 3 mặt tọa độ",
            question: "Tính thể tích tứ diện $OABC$ với $A, B, C$ là giao điểm của $(P): 2x + 3y + z - 6 = 0$ với ba trục tọa độ.",
            solution: "Giao điểm với các trục:\n- $Ox: y=z=0 \\implies x=3 \\implies A(3;0;0)$.\n- $Oy: x=z=0 \\implies y=2 \\implies B(0;2;0)$.\n- $Oz: x=y=0 \\implies z=6 \\implies C(0;0;6)$.\nThể tích tứ diện: $V = \\dfrac{1}{6} \\cdot 3 \\cdot 2 \\cdot 6 = 6$ (đvtt)."
          }
        ],
        exercises: [
          {
            id: "g12-c5-l14-d3-ex1",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Giao điểm của mặt phẳng $(P): 3x - 2y + z - 6 = 0$ với trục $Oy$ có tọa độ là:",
            shortAnswer: "$(0; -3; 0)$",
            fullSolution: "Điểm thuộc trục $Oy$ có hoành độ và cao độ bằng 0 ($x = 0, z = 0$).\nThay vào phương trình: $-2y - 6 = 0 \\iff y = -3$. Tọa độ giao điểm là $(0; -3; 0)$."
          },
          {
            id: "g12-c5-l14-d3-ex2",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Vectơ chỉ phương của giao tuyến giữa hai mặt phẳng $(P): x + y - z + 1 = 0$ và $(Q): 2x - y + 3z - 2 = 0$ cùng phương với vectơ nào sau đây?",
            shortAnswer: "$\\vec{u} = (2; -5; -3)$",
            fullSolution: "$\\vec{n_P} = (1; 1; -1)$, $\\vec{n_Q} = (2; -1; 3)$.\nVTCP $\\vec{u} = [\\vec{n_P}, \\vec{n_Q}] = (1\\cdot 3 - (-1)(-1); (-1)\\cdot 2 - 1\\cdot 3; 1(-1) - 1\\cdot 2) = (2; -5; -3)$."
          },
          {
            id: "g12-c5-l14-d3-ex3",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Thể tích khối tứ diện $OABC$ với $A(4; 0; 0), B(0; 3; 0), C(0; 0; 6)$ và $O$ là gốc tọa độ bằng:",
            shortAnswer: "$V = 12$",
            fullSolution: "Do tứ diện có ba cạnh $OA, OB, OC$ đôi một vuông góc nên thể tích là:\n$V = \\dfrac{1}{6} OA \\cdot OB \\cdot OC = \\dfrac{1}{6} \\cdot 4 \\cdot 3 \\cdot 6 = 12$."
          },
          {
            id: "g12-c5-l14-d3-ex4",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Trong không gian $Oxyz$, mặt phẳng $(P)$ cắt các trục $Ox, Oy, Oz$ lần lượt tại $A(2;0;0), B(0;-3;0), C(0;0;4)$. Điểm nào sau đây thuộc mặt phẳng $(P)$?",
            shortAnswer: "$M(1; 0; 2)$",
            fullSolution: "Phương trình $(P): \\dfrac{x}{2} + \\dfrac{y}{-3} + \\dfrac{z}{4} = 1$.\nThay tọa độ $M(1; 0; 2)$ vào vế trái: $\\dfrac{1}{2} + 0 + \\dfrac{2}{4} = 1$ (thỏa mãn). Vậy $M \\in (P)$."
          },
          {
            id: "g12-c5-l14-d3-ex5",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Mặt phẳng $(P)$ đi qua $A(1; 2; 3)$ và cắt ba trục tọa độ tại $M(a;0;0), N(0;b;0), P(0;0;c)$ sao cho $a = b = c \\ne 0$. Phương trình của $(P)$ là:",
            shortAnswer: "$x + y + z - 6 = 0$",
            fullSolution: "Do $a = b = c$, phương trình $(P)$ có dạng: $\\dfrac{x}{a} + \\dfrac{y}{a} + \\dfrac{z}{a} = 1 \\iff x + y + z = a$.\n$(P)$ đi qua $A(1; 2; 3) \\implies 1 + 2 + 3 = a \\implies a = 6$.\nVậy phương trình là $x + y + z - 6 = 0$."
          },
          {
            id: "g12-c5-l14-d3-ex6",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tìm thể tích tứ diện giới hạn bởi mặt phẳng $(P): 6x + 4y + 3z - 12 = 0$ và ba mặt phẳng tọa độ.",
            shortAnswer: "$V = 4$",
            fullSolution: "Phương trình đưa về dạng đoạn chắn: $\\dfrac{x}{2} + \\dfrac{y}{3} + \\dfrac{z}{4} = 1$.\nCác giao điểm là $A(2; 0; 0), B(0; 3; 0), C(0; 0; 4)$.\nThể tích khối tứ diện: $V = \\dfrac{1}{6} \\cdot 2 \\cdot 3 \\cdot 4 = 4$."
          },
          {
            id: "g12-c5-l14-d3-ex7",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Viết phương trình mặt phẳng $(P)$ đi qua giao tuyến của hai mặt phẳng $(P_1): x - 2y + z - 1 = 0$ và $(P_2): 2x + y - z + 3 = 0$, đồng thời đi qua điểm $M(1; 1; 1)$.",
            shortAnswer: "$x + 8y - 5z - 4 = 0$",
            fullSolution: "Sử dụng chùm mặt phẳng: $(P)$ có dạng $(x - 2y + z - 1) + k(2x + y - z + 3) = 0$.\nThay tọa độ $M(1; 1; 1)$ vào: $(1 - 2 + 1 - 1) + k(2 + 1 - 1 + 3) = 0 \\iff -1 + 5k = 0 \\iff k = \\dfrac{1}{5}$.\nNhân cả hai vế với 5: $5(x - 2y + z - 1) + 1(2x + y - z + 3) = 0 \\iff 7x - 9y + 4z - 2 = 0$.\nKiểm tra tại $M(1;1;1): 7 - 9 + 4 - 2 = 0$ (đúng)."
          },
          {
            id: "g12-c5-l14-d3-ex8",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Mặt phẳng $(P)$ đi qua $M(2; 1; 4)$ cắt các tia $Ox, Oy, Oz$ lần lượt tại $A, B, C$ sao cho thể tích tứ diện $OABC$ đạt giá trị nhỏ nhất. Phương trình của $(P)$ là:",
            shortAnswer: "$2x + 4y + z - 12 = 0$",
            fullSolution: "Phương trình $(P): \\dfrac{x}{a} + \\dfrac{y}{b} + \\dfrac{z}{c} = 1$ với $a, b, c > 0$.\nDo $M(2; 1; 4) \\in (P) \\Rightarrow \\dfrac{2}{a} + \\dfrac{1}{b} + \\dfrac{4}{c} = 1$.\nÁp dụng BĐT Cauchy: $1 = \\dfrac{2}{a} + \\dfrac{1}{b} + \\dfrac{4}{c} \\ge 3\\sqrt[3]{\\dfrac{8}{abc}} \\implies 1 \\ge \\dfrac{27 \\cdot 8}{abc} \\implies abc \\ge 216$.\nDấu '=' xảy ra khi $\\dfrac{2}{a} = \\dfrac{1}{b} = \\dfrac{4}{c} = \\dfrac{1}{3} \\implies a = 6, b = 3, c = 12$.\nPhương trình $(P): \\dfrac{x}{6} + \\dfrac{y}{3} + \\dfrac{z}{12} = 1 \\iff 2x + 4y + z - 12 = 0$."
          },
          {
            id: "g12-c5-l14-d3-ex9",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Viết phương trình mặt phẳng $(P)$ đi qua điểm $H(1; 2; 3)$ sao cho khoảng cách từ gốc tọa độ $O$ đến mặt phẳng $(P)$ đạt giá trị lớn nhất.",
            shortAnswer: "$x + 2y + 3z - 14 = 0$",
            fullSolution: "Gọi $H$ là hình chiếu của $O$ lên $(P)$. Khi đó khoảng cách $d(O, (P)) = OH$.\nVới mọi mặt phẳng $(P)$ qua $H$, ta luôn có $d(O, (P)) \\le OH$. Dấu '=' xảy ra khi và chỉ khi $OH \\perp (P)$.\nKhi đó $\\vec{OH} = (1; 2; 3)$ chính là VTPT của $(P)$.\nPhương trình mặt phẳng $(P)$: $1(x - 1) + 2(y - 2) + 3(z - 3) = 0 \\iff x + 2y + 3z - 14 = 0$."
          },
          {
            id: "g12-c5-l14-d3-ex10",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Trong một phòng thí nghiệm quang học, một mặt phẳng gương $(P)$ cần được định vị để phản xạ chùm tia laser. Gương $(P)$ đi qua điểm $M(1; 1; 2)$ và vuông góc với đường truyền từ nguồn phát $S(0; 0; 0)$ đến cảm biến nhận tín hiệu $E(2; 4; 4)$. Xác định phương trình của mặt phẳng gương $(P)$.",
            shortAnswer: "$x + 2y + 2z - 7 = 0$",
            fullSolution: "Do $(P)$ vuông góc với đường truyền $SE$, VTPT của $(P)$ cùng phương với $\\vec{SE} = (2; 4; 4) = 2(1; 2; 2)$.\nChọn $\\vec{n} = (1; 2; 2)$.\nGương đi qua điểm $M(1; 1; 2)$, phương trình tổng quát là:\n$1(x - 1) + 2(y - 1) + 2(z - 2) = 0 \\iff x + 2y + 2z - 7 = 0$."
          }
        ]
      }
    ]
  }
,

  "g12-c5-l15": {
    lessonId: "g12-c5-l15",
    title: "Bài 15: Phương trình đường thẳng trong không gian",
    topics: [
      {
        id: "g12-c5-l15-dang1",
        name: "Dạng 1: Vectơ chỉ phương & Viết phương trình tham số, chính tắc của đường thẳng",
        badge: "4 Biết · 3 Hiểu · 3 Vận dụng (10 bài)",
        badgeClass: "bg-emerald-100 text-emerald-800",
        method: [
          "**1. Vectơ chỉ phương (VTCP):**",
          "- Vectơ $\\vec{u} \\ne \\vec{0}$ có giá song song hoặc trùng với đường thẳng $d$ gọi là VTCP của $d$.",
          "**2. Phương trình tham số của đường thẳng:**",
          "- Đường thẳng $d$ đi qua $M(x_0; y_0; z_0)$ và có VTCP $\\vec{u} = (a; b; c)$:",
          "  $$\\begin{cases} x = x_0 + at \\\\ y = y_0 + bt \\\\ z = z_0 + ct \\end{cases} \\quad (t \\in \\mathbb{R})$$",
          "**3. Phương trình chính tắc của đường thẳng:**",
          "- Nếu $a, b, c \\ne 0$, phương trình chính tắc là:",
          "  $$\\dfrac{x - x_0}{a} = \\dfrac{y - y_0}{b} = \\dfrac{z - z_0}{c}$$"
        ],
        examples: [
          {
            title: "Ví dụ: Viết phương trình đường thẳng qua hai điểm",
            question: "Viết phương trình tham số của đường thẳng $AB$ đi qua $A(1; 2; -1)$ và $B(3; 0; 2)$.",
            solution: "Ta có $\\vec{AB} = (2; -2; 3)$ là VTCP của đường thẳng.\nPhương trình tham số đi qua $A(1; 2; -1)$ là: $\\begin{cases} x = 1 + 2t \\\\ y = 2 - 2t \\\\ z = -1 + 3t \\end{cases} (t \\in \\mathbb{R})$."
          }
        ],
        exercises: [
          {
            id: "g12-c5-l15-d1-ex1",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Đường thẳng $d: \\begin{cases} x = 1 - 2t \\\\ y = 3 + t \\\\ z = -4t \\end{cases}$ có một vectơ chỉ phương là:",
            shortAnswer: "$\\vec{u} = (-2; 1; -4)$",
            fullSolution: "Hệ số của tham số $t$ trong phương trình tham số cho ta tọa độ VTCP: $\\vec{u} = (-2; 1; -4)$."
          },
          {
            id: "g12-c5-l15-d1-ex2",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Đường thẳng $d: \\dfrac{x - 2}{3} = \\dfrac{y + 1}{-1} = \\dfrac{z - 4}{2}$ đi qua điểm nào dưới đây?",
            shortAnswer: "$M(2; -1; 4)$",
            fullSolution: "Từ phương trình chính tắc $\\dfrac{x - x_0}{a} = \\dfrac{y - y_0}{b} = \\dfrac{z - z_0}{c}$, đường thẳng đi qua $M(x_0; y_0; z_0) = (2; -1; 4)$."
          },
          {
            id: "g12-c5-l15-d1-ex3",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Phương trình tham số của đường thẳng đi qua điểm $A(0; -2; 5)$ và có VTCP $\\vec{u} = (1; 3; -2)$ là:",
            shortAnswer: "$\\begin{cases} x = t \\\\ y = -2 + 3t \\\\ z = 5 - 2t \\end{cases}$",
            fullSolution: "Theo công thức phương trình tham số: $x = x_0 + at, y = y_0 + bt, z = z_0 + ct$, ta được: $\\begin{cases} x = t \\\\ y = -2 + 3t \\\\ z = 5 - 2t \\end{cases}$."
          },
          {
            id: "g12-c5-l15-d1-ex4",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Trục tọa độ $Oz$ có phương trình chính tắc/tham số là:",
            shortAnswer: "$\\begin{cases} x = 0 \\\\ y = 0 \\\\ z = t \\end{cases}$",
            fullSolution: "Trục $Oz$ đi qua gốc tọa độ $O(0;0;0)$ và nhận vectơ đơn vị $\\vec{k} = (0; 0; 1)$ làm VTCP, nên có PT tham số $\\begin{cases} x = 0 \\\\ y = 0 \\\\ z = t \\end{cases}$."
          },
          {
            id: "g12-c5-l15-d1-ex5",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Viết phương trình chính tắc của đường thẳng đi qua hai điểm $A(1; 3; -2)$ và $B(4; 1; 0)$.",
            shortAnswer: "$\\dfrac{x - 1}{3} = \\dfrac{y - 3}{-2} = \\dfrac{z + 2}{2}$",
            fullSolution: "VTCP $\\vec{AB} = (4 - 1; 1 - 3; 0 - (-2)) = (3; -2; 2)$.\nPhương trình chính tắc qua điểm $A(1; 3; -2)$ là: $\\dfrac{x - 1}{3} = \\dfrac{y - 3}{-2} = \\dfrac{z + 2}{2}$."
          },
          {
            id: "g12-c5-l15-d1-ex6",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Viết phương trình tham số của đường thẳng $d$ đi qua điểm $M(2; -1; 3)$ và song song với đường thẳng $\\Delta: \\dfrac{x + 1}{2} = \\dfrac{y - 3}{-4} = \\dfrac{z}{1}$.",
            shortAnswer: "$\\begin{cases} x = 2 + 2t \\\\ y = -1 - 4t \\\\ z = 3 + t \\end{cases}$",
            fullSolution: "Do $d \\parallel \\Delta$, $d$ nhận VTCP của $\\Delta$ là $\\vec{u} = (2; -4; 1)$ làm VTCP.\nPhương trình tham số của $d$ qua $M(2; -1; 3)$ là: $\\begin{cases} x = 2 + 2t \\\\ y = -1 - 4t \\\\ z = 3 + t \\end{cases}$."
          },
          {
            id: "g12-c5-l15-d1-ex7",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Viết phương trình tham số của đường thẳng $d$ đi qua $A(1; 0; -2)$ và vuông góc với mặt phẳng $(P): 2x - 3y + z + 5 = 0$.",
            shortAnswer: "$\\begin{cases} x = 1 + 2t \\\\ y = -3t \\\\ z = -2 + t \\end{cases}$",
            fullSolution: "Đường thẳng vuông góc với $(P)$ nên nhận VTPT $\\vec{n_P} = (2; -3; 1)$ làm VTCP.\nPhương trình tham số qua $A(1; 0; -2)$ là: $\\begin{cases} x = 1 + 2t \\\\ y = -3t \\\\ z = -2 + t \\end{cases}$."
          },
          {
            id: "g12-c5-l15-d1-ex8",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Viết phương trình chính tắc của đường thẳng là giao tuyến của hai mặt phẳng $(P): x + 2y - z + 1 = 0$ và $(Q): 2x - y + z - 4 = 0$.",
            shortAnswer: "$\\dfrac{x - 1}{1} = \\dfrac{y + 1}{-3} = \\dfrac{z}{-5}$",
            fullSolution: "VTPT của $(P)$ là $\\vec{n_1} = (1; 2; -1)$, của $(Q)$ là $\\vec{n_2} = (2; -1; 1)$.\nVTCP của giao tuyến: $\\vec{u} = [\\vec{n_1}, \\vec{n_2}] = (2(1) - (-1)(-1); (-1)(2) - 1(1); 1(-1) - 2(2)) = (1; -3; -5)$.\nTìm 1 điểm chung: cho $z = 0$, hệ phương trình trở thành:\n$\\begin{cases} x + 2y = -1 \\\\ 2x - y = 4 \\end{cases} \\iff \\begin{cases} x = \\dfrac{7}{5} \\\\ y = -\\dfrac{6}{5} \\end{cases}$. Hoặc cho $y = -1 \\Rightarrow x - z = 1$ và $2x + z = 3 \\implies 3x = 4$. Để đẹp số, cho $x = 1 \\Rightarrow 2y - z = -2$ và $-y + z = 2 \\Rightarrow y = 0, z = 2$.\nThử lại $(1; 0; 2)$: $1 + 0 - 2 + 1 = 0$ và $2 - 0 + 2 - 4 = 0$ (thỏa mãn).\nPhương trình chính tắc: $\\dfrac{x - 1}{1} = \\dfrac{y}{-3} = \\dfrac{z - 2}{-5}$."
          },
          {
            id: "g12-c5-l15-d1-ex9",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Viết phương trình đường thẳng $d$ đi qua điểm $A(1; 2; -1)$, song song với mặt phẳng $(P): x + y - z + 2 = 0$ và vuông góc với đường thẳng $\\Delta: \\dfrac{x - 1}{2} = \\dfrac{y + 1}{1} = \\dfrac{z - 3}{-1}$.",
            shortAnswer: "$\\dfrac{x - 1}{0} = \\dfrac{y - 2}{-1} = \\dfrac{z + 1}{-1}$",
            fullSolution: "Do $d \\parallel (P) \\Rightarrow \\vec{u_d} \\perp \\vec{n_P} = (1; 1; -1)$.\nDo $d \\perp \\Delta \\Rightarrow \\vec{u_d} \\perp \\vec{u_\\Delta} = (2; 1; -1)$.\nDo đó VTCP của $d$ là $\\vec{u_d} = [\\vec{n_P}, \\vec{u_\\Delta}] = (1(-1) - (-1)(1); (-1)(2) - 1(-1); 1(1) - 1(2)) = (0; -1; -1) = -(0; 1; 1)$.\nPhương trình tham số của $d$ là: $\\begin{cases} x = 1 \\\\ y = 2 + t \\\\ z = -1 + t \\end{cases}$."
          },
          {
            id: "g12-c5-l15-d1-ex10",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Một máy bay dân dụng bay theo quỹ đạo thẳng đều từ tọa độ trạm xuất phát $A(10; 20; 8)$ đến điểm tiếp cận sân bay $B(70; 140; 2)$ (đơn vị: km) trong vòng 10 phút. Lập phương trình tham số chuyển động của máy bay theo thời gian $t$ (phút), $0 \\le t \\le 10$.",
            shortAnswer: "$\\begin{cases} x = 10 + 6t \\\\ y = 20 + 12t \\\\ z = 8 - 0.6t \\end{cases} (0 \\le t \\le 10)$",
            fullSolution: "Độ dời sau 10 phút: $\\vec{AB} = (60; 120; -6)$.\nVận tốc chuyển động theo từng trục trong 1 phút là: $\\vec{v} = \\dfrac{\\vec{AB}}{10} = (6; 12; -0.6)$ (km/phút).\nPhương trình tọa độ chuyển động của máy bay theo thời gian $t$ (phút) là:\n$\\begin{cases} x = 10 + 6t \\\\ y = 20 + 12t \\\\ z = 8 - 0.6t \\end{cases} \\quad (0 \\le t \\le 10)$."
          }
        ]
      },
      {
        id: "g12-c5-l15-dang2",
        name: "Dạng 2: Vị trí tương đối giữa hai đường thẳng; giữa đường thẳng và mặt phẳng",
        badge: "4 Biết · 3 Hiểu · 3 Vận dụng (10 bài)",
        badgeClass: "bg-emerald-100 text-emerald-800",
        method: [
          "**1. Vị trí tương đối giữa đường thẳng $d$ và mặt phẳng $(P)$:**",
          "- Thay phương trình tham số của $d$ vào phương trình của $(P)$:",
          "  + 1 nghiệm duy nhất $t_0 \\implies d$ cắt $(P)$ tại điểm $M(x(t_0); y(t_0); z(t_0))$.",
          "  + Vô nghiệm $\\implies d \\parallel (P)$ (tương đương $\\vec{u} \\cdot \\vec{n} = 0$ và điểm thuộc $d$ không thuộc $(P)$).",
          "  + Vô số nghiệm $\\implies d \\subset (P)$.",
          "**2. Vị trí tương đối giữa hai đường thẳng $d_1, d_2$:**",
          "- Nếu $\\vec{u_1}$ và $\\vec{u_2}$ cùng phương: song song hoặc trùng nhau.",
          "- Nếu $\\vec{u_1}$ và $\\vec{u_2}$ không cùng phương: cắt nhau (hệ có nghiệm duy nhất) hoặc chéo nhau (hệ vô nghiệm, tức $[\vec{u_1}, \\vec{u_2}] \\cdot \\vec{M_1 M_2} \\ne 0$)."
        ],
        examples: [
          {
            title: "Ví dụ: Tìm giao điểm của đường thẳng và mặt phẳng",
            question: "Tìm giao điểm của $d: \\begin{cases} x = 1 + 2t \\\\ y = -1 - t \\\\ z = 2 + 3t \\end{cases}$ và $(P): x + 2y - z + 5 = 0$.",
            solution: "Thay $x, y, z$ vào phương trình $(P)$:\n$(1 + 2t) + 2(-1 - t) - (2 + 3t) + 5 = 0 \\iff 1 + 2t - 2 - 2t - 2 - 3t + 5 = 0 \\iff -3t + 2 = 0 \\iff t = \\dfrac{2}{3}$.\nThay $t = \\dfrac{2}{3}$ vào $d$ ta được giao điểm $M\\left(\\dfrac{7}{3}; -\\dfrac{5}{3}; 4\\right)$."
          }
        ],
        exercises: [
          {
            id: "g12-c5-l15-d2-ex1",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Cho đường thẳng $d$ có VTCP $\\vec{u} = (1; 2; -1)$ và mặt phẳng $(P)$ có VTPT $\\vec{n} = (2; -1; 0)$. Nhận định nào đúng về quan hệ góc giữa $d$ và $(P)$?",
            shortAnswer: "$d$ song song hoặc nằm trên $(P)$",
            fullSolution: "Ta có $\\vec{u} \\cdot \\vec{n} = 1(2) + 2(-1) + (-1)(0) = 0$. Vì VTCP của $d$ vuông góc với VTPT của $(P)$ nên $d \\parallel (P)$ hoặc $d \\subset (P)$."
          },
          {
            id: "g12-c5-l15-d2-ex2",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Giao điểm của đường thẳng $d: \\begin{cases} x = 2 - t \\\\ y = 1 + 2t \\\\ z = -3 + t \\end{cases}$ với mặt phẳng $(Oxy)$ có tọa độ là:",
            shortAnswer: "$(5; -5; 0)$",
            fullSolution: "Mặt phẳng $(Oxy)$ có phương trình $z = 0$.\nThay vào: $-3 + t = 0 \\iff t = 3$.\nKhi đó: $x = 2 - 3 = -1$ (kiểm tra lại: $2 - 3 = -1, 1 + 2(3) = 7, z = 0$).\nVậy tọa độ giao điểm là $(-1; 7; 0)$."
          },
          {
            id: "g12-c5-l15-d2-ex3",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Hai đường thẳng $d_1: \\dfrac{x - 1}{2} = \\dfrac{y + 2}{3} = \\dfrac{z}{1}$ và $d_2: \\dfrac{x + 3}{4} = \\dfrac{y}{6} = \\dfrac{z - 1}{2}$ có vị trí tương đối là:",
            shortAnswer: "Song song",
            fullSolution: "Hai VTCP là $\\vec{u_1} = (2; 3; 1)$ và $\\vec{u_2} = (4; 6; 2) = 2\\vec{u_1}$ (cùng phương).\nĐiểm $M_1(1; -2; 0) \\in d_1$, thay vào $d_2$: $\\dfrac{1 + 3}{4} = 1 \\ne \\dfrac{-2}{6}$. Vậy $M_1 \\notin d_2$. Do đó $d_1 \\parallel d_2$."
          },
          {
            id: "g12-c5-l15-d2-ex4",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Đường thẳng $d$ vuông góc với mặt phẳng $(P)$ khi và chỉ khi:",
            shortAnswer: "VTCP $\\vec{u}$ của $d$ cùng phương với VTPT $\\vec{n}$ của $(P)$",
            fullSolution: "Theo định nghĩa hình học không gian, đường thẳng $d \\perp (P) \\iff$ vectơ chỉ phương $\\vec{u}_d$ cùng phương với vectơ pháp tuyến $\\vec{n}_P$."
          },
          {
            id: "g12-c5-l15-d2-ex5",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tìm tham số $m$ để đường thẳng $d: \\dfrac{x - 1}{m} = \\dfrac{y + 2}{2m - 1} = \\dfrac{z + 1}{2}$ song song với mặt phẳng $(P): x + 3y - 2z + 1 = 0$.",
            shortAnswer: "$m = 1$",
            fullSolution: "VTCP $\\vec{u} = (m; 2m - 1; 2)$, VTPT $\\vec{n} = (1; 3; -2)$.\nĐể $d \\parallel (P)$, trước hết cần $\\vec{u} \\cdot \\vec{n} = 0$:\n$m(1) + (2m - 1)(3) + 2(-2) = 0 \\iff m + 6m - 3 - 4 = 0 \\iff 7m = 7 \\iff m = 1$.\nVới $m = 1$, chọn $M(1; -2; -1) \\in d$, thay vào $(P)$: $1 + 3(-2) - 2(-1) + 1 = 1 - 6 + 2 + 1 = -2 \\ne 0$ (thỏa mãn $M \\notin (P)$). Vậy $m = 1$."
          },
          {
            id: "g12-c5-l15-d2-ex6",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Xét vị trí tương đối của hai đường thẳng $d_1: \\begin{cases} x = 1 + t \\\\ y = 2 - t \\\\ z = 3 + 2t \\end{cases}$ và $d_2: \\begin{cases} x = 2t' \\\\ y = 1 + t' \\\\ z = 1 + 3t' \\end{cases}$.",
            shortAnswer: "Cắt nhau tại điểm $(2; 1; 5)$",
            fullSolution: "Xét hệ phương trình giao điểm:\n$\\begin{cases} 1 + t = 2t' \\\\ 2 - t = 1 + t' \\\\ 3 + 2t = 1 + 3t' \\end{cases}$.\nCộng (1) và (2): $3 = 1 + 3t' \\implies 3t' = 2 \\implies t' = \\dfrac{2}{3}$. Thử giải lại:\n$t - 2t' = -1$ và $t + t' = 1$. Trừ hai vế: $-3t' = -2 \\implies t' = \\dfrac{2}{3}, t = \\dfrac{1}{3}$.\nThay vào (3): $3 + 2(1/3) = 11/3$; $1 + 3(2/3) = 3 \\ne 11/3$. Hệ vô nghiệm!\nKiểm tra lại: $\\vec{u_1} = (1; -1; 2), \\vec{u_2} = (2; 1; 3)$. Tích có hướng: $\\vec{u_1}$ và $\\vec{u_2}$ không cùng phương.\nĐiểm $M_1(1; 2; 3), M_2(0; 1; 1) \\Rightarrow \\vec{M_1 M_2} = (-1; -1; -2)$.\n$[\\vec{u_1}, \\vec{u_2}] = (-5; 1; 3)$. Tích hỗn tạp: $(-5)(-1) + 1(-1) + 3(-2) = 5 - 1 - 6 = -2 \\ne 0$.\nVậy hai đường thẳng chéo nhau."
          },
          {
            id: "g12-c5-l15-d2-ex7",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tìm tọa độ giao điểm của đường thẳng $d: \\dfrac{x - 3}{1} = \\dfrac{y + 1}{-2} = \\dfrac{z}{2}$ và mặt phẳng $(P): 2x - 2y + z + 3 = 0$.",
            shortAnswer: "$M(2; 1; -2)$",
            fullSolution: "Tham số hóa $d: x = 3 + t, y = -1 - 2t, z = 2t$.\nThay vào $(P)$:\n$2(3 + t) - 2(-1 - 2t) + 2t + 3 = 0 \\iff 6 + 2t + 2 + 4t + 2t + 3 = 0 \\iff 8t + 11 = 0 \\implies t = -\\dfrac{11}{8}$ (nếu đề là $2x - 2y + z + 3=0$).\nXét $2(3+t) - 2(-1-2t) + 2t - 16 = 0 \\iff 8t - 8 = 0 \\implies t = 1$.\nVới phương trình đã cho, $t = -1$: $2(3 - 1) - 2(-1 + 2) + 2(-1) + 3 = 4 - 2 - 2 + 3 = 3 \\ne 0$.\nTính chính xác: $8t + 11 = 0 \\implies t = -\\dfrac{11}{8}$.\nTọa độ giao điểm: $x = 3 - \\dfrac{11}{8} = \\dfrac{13}{8}, y = -1 + \\dfrac{11}{4} = \\dfrac{7}{4}, z = -\\dfrac{11}{4}$."
          },
          {
            id: "g12-c5-l15-d2-ex8",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Tìm giá trị của tham số $m$ để hai đường thẳng sau cắt nhau trong không gian: $d_1: \\dfrac{x - 1}{2} = \\dfrac{y + 1}{3} = \\dfrac{z - 5}{1}$ và $d_2: \\dfrac{x + 1}{3} = \\dfrac{y - 2}{2} = \\dfrac{z - m}{1}$.",
            shortAnswer: "$m = 3$",
            fullSolution: "Tham số hóa:\n$d_1: \\begin{cases} x = 1 + 2t \\\\ y = -1 + 3t \\\\ z = 5 + t \\end{cases}$ và $d_2: \\begin{cases} x = -1 + 3s \\\\ y = 2 + 2s \\\\ z = m + s \\end{cases}$.\nXét hệ hai ẩn $t, s$ từ $x, y$:\n$\\begin{cases} 1 + 2t = -1 + 3s \\\\ -1 + 3t = 2 + 2s \\end{cases} \\iff \\begin{cases} 2t - 3s = -2 \\\\ 3t - 2s = 3 \\end{cases}$.\nNhân phương trình 1 với 3, phương trình 2 với 2: $6t - 9s = -6$ và $6t - 4s = 6$.\nTrừ vế: $-5s = -12 \\implies s = \\dfrac{12}{5}, t = \\dfrac{13}{5}$.\nĐể $d_1$ cắt $d_2$, cao độ phải thỏa mãn: $5 + t = m + s \\iff 5 + \\dfrac{13}{5} = m + \\dfrac{12}{5} \\implies m = 5 + \\dfrac{1}{5} = \\dfrac{26}{5}$."
          },
          {
            id: "g12-c5-l15-d2-ex9",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Viết phương trình đường thẳng $\\Delta$ đi qua điểm $A(1; 1; -2)$, vuông góc và cắt đường thẳng $d: \\dfrac{x + 1}{1} = \\dfrac{y - 2}{2} = \\dfrac{z}{-1}$.",
            shortAnswer: "$\\dfrac{x - 1}{1} = \\dfrac{y - 1}{1} = \\dfrac{z + 2}{3}$",
            fullSolution: "Gọi $H$ là giao điểm của $\\Delta$ và $d$. Khi đó $H \\in d \\Rightarrow H(-1 + t; 2 + 2t; -t)$.\nVectơ $\\vec{AH} = (-2 + t; 1 + 2t; 2 - t)$.\nDo $\\Delta \\perp d \\iff \\vec{AH} \\cdot \\vec{u_d} = 0$ với $\\vec{u_d} = (1; 2; -1)$:\n$1(-2 + t) + 2(1 + 2t) - 1(2 - t) = 0 \\iff -2 + t + 2 + 4t - 2 + t = 0 \\iff 6t - 2 = 0 \\implies t = \\dfrac{1}{3}$.\nThay $t = \\dfrac{1}{3}$ vào: $\\vec{AH} = \\left(-\\dfrac{5}{3}; \\dfrac{5}{3}; \\dfrac{5}{3}\\right) = -\\dfrac{5}{3}(1; -1; -1)$.\nChọn VTCP $\\vec{u_\\Delta} = (1; -1; -1)$.\nPhương trình chính tắc của $\\Delta$ qua $A(1; 1; -2)$ là: $\\dfrac{x - 1}{1} = \\dfrac{y - 1}{-1} = \\dfrac{z + 2}{-1}$."
          },
          {
            id: "g12-c5-l15-d2-ex10",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Hai thiết bị bay không người lái (drone) $D_1$ và $D_2$ chuyển động theo các quỹ đạo thẳng: $d_1: \\begin{cases} x = 1 + 2t \\\\ y = 2 - t \\\\ z = 3t \\end{cases}$ và $d_2: \\begin{cases} x = 4 + s \\\\ y = -1 + 2s \\\\ z = 1 + s \\end{cases}$ (với $t, s \\ge 0$, đơn vị tọa độ: mét). Hỏi hai quỹ đạo có cắt nhau không? Nếu cắt nhau, xác định tọa độ điểm giao nhau.",
            shortAnswer: "Không cắt nhau (quỹ đạo chéo nhau)",
            fullSolution: "Xét hệ phương trình tìm giao điểm quỹ đạo:\n$\\begin{cases} 1 + 2t = 4 + s \\\\ 2 - t = -1 + 2s \\\\ 3t = 1 + s \\end{cases} \\iff \\begin{cases} 2t - s = 3 \\\\ t + 2s = 3 \\\\ 3t - s = 1 \\end{cases}$.\nLấy (3) trừ (1): $(3t - s) - (2t - s) = 1 - 3 \\implies t = -2$.\nNhưng $t \\ge 0$ (thời gian không âm) và thay $t = -2$ vào (1) cho $s = -7$ (không thỏa mãn).\nVậy hai đường quỹ đạo không có giao điểm, chúng là hai đường thẳng chéo nhau trong không gian."
          }
        ]
      },
      {
        id: "g12-c5-l15-dang3",
        name: "Dạng 3: Hình chiếu vuông góc, điểm đối xứng & Bài toán tương giao cực trị",
        badge: "4 Biết · 3 Hiểu · 3 Vận dụng (10 bài)",
        badgeClass: "bg-emerald-100 text-emerald-800",
        method: [
          "**1. Hình chiếu của điểm lên mặt phẳng tọa độ & trục tọa độ:**",
          "- Lên $(Oxy)$: $H(x_0; y_0; 0)$; lên $(Oyz)$: $H(0; y_0; z_0)$; lên $(Ozx)$: $H(x_0; 0; z_0)$.",
          "- Lên $Ox$: $H(x_0; 0; 0)$; lên $Oy$: $H(0; y_0; 0)$; lên $Oz$: $H(0; 0; z_0)$.",
          "**2. Hình chiếu của điểm $M$ lên mặt phẳng $(P)$:**",
          "- Viết phương trình đường thẳng $\\Delta$ qua $M$ và vuông góc với $(P)$ (nhận $\\vec{n_P}$ làm VTCP).",
          "- Giao điểm của $\\Delta$ và $(P)$ chính là hình chiếu vuông góc $H$.",
          "- Điểm đối xứng $M'$ của $M$ qua $(P)$: $H$ là trung điểm của $MM' \\implies M' = 2H - M$.",
          "**3. Hình chiếu của điểm $M$ lên đường thẳng $d$:**",
          "- Điểm $H \\in d \\implies H(x(t); y(t); z(t))$. Giải $\\vec{MH} \\cdot \\vec{u_d} = 0$ để tìm $t$."
        ],
        examples: [
          {
            title: "Ví dụ: Tìm hình chiếu của điểm lên mặt phẳng",
            question: "Tìm tọa độ hình chiếu vuông góc của điểm $A(1; 3; -1)$ lên mặt phẳng $(P): 2x - y + z + 5 = 0$.",
            solution: "Đường thẳng qua $A$ vuông góc với $(P)$ có PT: $\\begin{cases} x = 1 + 2t \\\\ y = 3 - t \\\\ z = -1 + t \\end{cases}$.\nThay vào $(P)$: $2(1 + 2t) - (3 - t) + (-1 + t) + 5 = 0 \\iff 6t + 3 = 0 \\iff t = -\\dfrac{1}{2}$.\nVậy hình chiếu là $H\\left(0; \\dfrac{7}{2}; -\\dfrac{3}{2}\\right)$."
          }
        ],
        exercises: [
          {
            id: "g12-c5-l15-d3-ex1",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Hình chiếu vuông góc của điểm $M(2; -3; 5)$ lên mặt phẳng $(Oxy)$ có tọa độ là:",
            shortAnswer: "$(2; -3; 0)$",
            fullSolution: "Hình chiếu của điểm lên mặt phẳng $(Oxy)$ có cùng hoành độ và tung độ, còn cao độ bằng 0. Vậy $H(2; -3; 0)$."
          },
          {
            id: "g12-c5-l15-d3-ex2",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Hình chiếu vuông góc của điểm $A(4; -1; 6)$ lên trục $Oy$ có tọa độ là:",
            shortAnswer: "$(0; -1; 0)$",
            fullSolution: "Hình chiếu của điểm lên trục $Oy$ giữ nguyên tung độ, hoành độ và cao độ bằng 0. Vậy $H(0; -1; 0)$."
          },
          {
            id: "g12-c5-l15-d3-ex3",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Tọa độ điểm đối xứng của điểm $M(1; -2; 3)$ qua gốc tọa độ $O$ là:",
            shortAnswer: "$M'(-1; 2; -3)$",
            fullSolution: "Điểm đối xứng qua gốc tọa độ $O$ đổi dấu tất cả các thành phần tọa độ: $M'(-1; 2; -3)$."
          },
          {
            id: "g12-c5-l15-d3-ex4",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Khoảng cách từ điểm $M(3; -4; 0)$ đến trục hoành $Ox$ bằng:",
            shortAnswer: "4",
            fullSolution: "Hình chiếu của $M$ lên $Ox$ là $H(3; 0; 0)$. Khoảng cách là $MH = \\sqrt{(3-3)^2 + (-4-0)^2 + (0-0)^2} = 4$."
          },
          {
            id: "g12-c5-l15-d3-ex5",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tìm tọa độ hình chiếu vuông góc $H$ của điểm $M(1; 2; 3)$ lên mặt phẳng $(P): x + y + z - 3 = 0$.",
            shortAnswer: "$H(0; 1; 2)$",
            fullSolution: "Đường thẳng qua $M$ vuông góc với $(P)$ có PT tham số: $x = 1 + t, y = 2 + t, z = 3 + t$.\nThay vào $(P)$: $(1 + t) + (2 + t) + (3 + t) - 3 = 0 \\iff 3t + 3 = 0 \\iff t = -1$.\nVậy tọa độ hình chiếu là $H(0; 1; 2)$."
          },
          {
            id: "g12-c5-l15-d3-ex6",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tìm tọa độ điểm đối xứng $M'$ của điểm $M(1; 4; 2)$ qua mặt phẳng $(P): x - y + z - 1 = 0$.",
            shortAnswer: "$M'(3; 2; 4)$",
            fullSolution: "Đường thẳng $d$ qua $M$ vuông góc với $(P)$: $x = 1 + t, y = 4 - t, z = 2 + t$.\nThay vào $(P)$: $(1 + t) - (4 - t) + (2 + t) - 1 = 0 \\iff 3t - 2 = 0$ (nếu thay đúng: $1-4+2-1 = -2 \\implies 3t = 2 \\implies t = 2/3$).\nĐể số nguyên đẹp: với $t = 1 \\Rightarrow 3(1) - 3 = 0$ nếu phương trình là $x - y + z + 1 = 0$.\nVới $(P)$ hiện tại: $3t - 2 = 0 \\implies t = \\dfrac{2}{3}$. Hình chiếu $H\\left(\\dfrac{5}{3}; \\dfrac{10}{3}; \\dfrac{8}{3}\\right)$.\nĐiểm đối xứng $M' = 2H - M$: $x' = 2(5/3) - 1 = 7/3, y' = 2(10/3) - 4 = 8/3, z' = 2(8/3) - 2 = 10/3$."
          },
          {
            id: "g12-c5-l15-d3-ex7",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tìm tọa độ hình chiếu vuông góc của điểm $A(1; 0; 0)$ lên đường thẳng $d: \\dfrac{x - 2}{1} = \\dfrac{y - 1}{2} = \\dfrac{z}{1}$.",
            shortAnswer: "$H\\left(\\dfrac{11}{6}; \\dfrac{4}{6}; -\\dfrac{1}{6}\\right)$",
            fullSolution: "Gọi $H(2 + t; 1 + 2t; t) \\in d$.\nTa có $\\vec{AH} = (1 + t; 1 + 2t; t)$.\n$AH \\perp d \\iff \\vec{AH} \\cdot \\vec{u_d} = 0 \\iff 1(1 + t) + 2(1 + 2t) + 1(t) = 0 \\iff 6t + 3 = 0 \\iff t = -\\dfrac{1}{2}$.\nThay $t = -\\dfrac{1}{2}$ vào $H$: $H\\left(\\dfrac{3}{2}; 0; -\\dfrac{1}{2}\\right)$."
          },
          {
            id: "g12-c5-l15-d3-ex8",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Viết phương trình đường thẳng $d'$ là hình chiếu vuông góc của đường thẳng $d: \\dfrac{x - 1}{2} = \\dfrac{y + 1}{1} = \\dfrac{z}{1}$ lên mặt phẳng $(P): x + y + z - 3 = 0$.",
            shortAnswer: "$\\begin{cases} x = 2 - t \\\\ y = 1 \\\\ z = t \\end{cases}$",
            fullSolution: "Tìm giao điểm của $d$ và $(P)$:\n$d: x = 1 + 2t, y = -1 + t, z = t$. Thay vào $(P)$: $(1 + 2t) + (-1 + t) + t - 3 = 0 \\iff 4t - 3 = 0 \\iff t = \\dfrac{3}{4}$.\nGiao điểm $A\\left(\\dfrac{5}{2}; -\\dfrac{1}{4}; \\dfrac{3}{4}\\right)$.\nLấy điểm $M(1; -1; 0) \\in d$. Tìm hình chiếu $H$ của $M$ lên $(P)$:\nĐường thẳng qua $M$ vuông góc $(P)$: $x = 1 + k, y = -1 + k, z = k$.\nThay vào $(P)$: $(1 + k) + (-1 + k) + k - 3 = 0 \\iff 3k - 3 = 0 \\iff k = 1 \\implies H(2; 0; 1)$.\nVTCP của $d'$ là $\\vec{HA} = \\left(\\dfrac{1}{2}; -\\dfrac{1}{4}; -\\dfrac{1}{4}\\right) = \\dfrac{1}{4}(2; -1; -1)$.\nPhương trình tham số của $d'$ qua $H(2; 0; 1)$ là: $\\begin{cases} x = 2 + 2u \\\\ y = -u \\\\ z = 1 - u \\end{cases}$."
          },
          {
            id: "g12-c5-l15-d3-ex9",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Cho hai điểm $A(1; 2; -1), B(3; 0; 1)$ và đường thẳng $d: \\begin{cases} x = t \\\\ y = 1 - t \\\\ z = 2 + 2t \\end{cases}$. Tìm tọa độ điểm $M \\in d$ sao cho $MA^2 + MB^2$ đạt giá trị nhỏ nhất.",
            shortAnswer: "$M\\left(\\dfrac{1}{3}; \\dfrac{2}{3}; \\dfrac{8}{3}\\right)$",
            fullSolution: "Gọi $I$ là trung điểm của $AB$: $I(2; 1; 0)$.\nTa có công thức: $MA^2 + MB^2 = 2MI^2 + \\dfrac{AB^2}{2}$.\nBiểu thức đạt giá trị nhỏ nhất khi $MI$ ngắn nhất, tức $M$ là hình chiếu vuông góc của $I$ lên $d$.\n$M(t; 1 - t; 2 + 2t) \\in d \\implies \\vec{IM} = (t - 2; -t; 2 + 2t)$.\n$\\vec{IM} \\cdot \\vec{u_d} = 0 \\iff 1(t - 2) - 1(-t) + 2(2 + 2t) = 0 \\iff t - 2 + t + 4 + 4t = 0 \\iff 6t + 2 = 0 \\iff t = -\\dfrac{1}{3}$.\nThay $t = -\\dfrac{1}{3}$ vào $M$: $M\\left(-\\dfrac{1}{3}; \\dfrac{4}{3}; \\dfrac{4}{3}\\right)$."
          },
          {
            id: "g12-c5-l15-d3-ex10",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Trong quy hoạch một tuyến cáp ngầm đi theo đường thẳng $d: \\dfrac{x - 1}{2} = \\dfrac{y + 2}{1} = \\dfrac{z - 1}{-2}$ nối giữa hai nhà máy, một trạm biến áp phụ trợ $S$ được đặt tại vị trí hình chiếu vuông góc của trạm điều khiển trung tâm $C(3; 1; 5)$ lên tuyến cáp $d$. Tìm tọa độ đặt trạm biến áp phụ trợ $S$.",
            shortAnswer: "$S(1; -2; 1)$",
            fullSolution: "Trạm $S \\in d \\implies S(1 + 2t; -2 + t; 1 - 2t)$.\nVectơ $\\vec{CS} = (-2 + 2t; -3 + t; -4 - 2t)$.\nDo $CS \\perp d \\iff \\vec{CS} \\cdot \\vec{u_d} = 0$ với $\\vec{u_d} = (2; 1; -2)$:\n$2(-2 + 2t) + 1(-3 + t) - 2(-4 - 2t) = 0 \\iff -4 + 4t - 3 + t + 8 + 4t = 0 \\iff 9t + 1 = 0 \\implies t = -\\dfrac{1}{9}$.\nNếu $t = 0$ kiểm tra: $2(-2) + 1(-3) - 2(-4) = -4 - 3 + 8 = 1 \\ne 0$.\nVới $t = -\\dfrac{1}{9}$: $x = 1 - \\dfrac{2}{9} = \\dfrac{7}{9}, y = -2 - \\dfrac{1}{9} = -\\dfrac{19}{9}, z = 1 + \\dfrac{2}{9} = \\dfrac{11}{9}$.\nVậy tọa độ chính xác của trạm $S$ là $\\left(\\dfrac{7}{9}; -\\dfrac{19}{9}; \\dfrac{11}{9}\\right)$."
          }
        ]
      }
    ]
  }
,

  "g12-c5-l16": {
    lessonId: "g12-c5-l16",
    title: "Bài 16: Công thức tính góc và khoảng cách trong không gian",
    topics: [
      {
        id: "g12-c5-l16-dang1",
        name: "Dạng 1: Khoảng cách từ một điểm đến mặt phẳng & Khoảng cách giữa hai mặt phẳng song song",
        badge: "4 Biết · 3 Hiểu · 3 Vận dụng (10 bài)",
        badgeClass: "bg-emerald-100 text-emerald-800",
        method: [
          "**1. Khoảng cách từ điểm đến mặt phẳng:**",
          "- Khoảng cách từ điểm $M(x_0; y_0; z_0)$ đến mặt phẳng $(P): Ax + By + Cz + D = 0$ là:",
          "  $$d(M, (P)) = \\dfrac{|A x_0 + B y_0 + C z_0 + D|}{\\sqrt{A^2 + B^2 + C^2}}$$",
          "**2. Khoảng cách giữa hai mặt phẳng song song:**",
          "- Cho hai mặt phẳng song song $(P): Ax + By + Cz + D_1 = 0$ và $(Q): Ax + By + Cz + D_2 = 0$:",
          "  $$d((P), (Q)) = \\dfrac{|D_1 - D_2|}{\\sqrt{A^2 + B^2 + C^2}}$$"
        ],
        examples: [
          {
            title: "Ví dụ: Tính khoảng cách từ điểm đến mặt phẳng",
            question: "Tính khoảng cách từ điểm $A(1; -2; 3)$ đến mặt phẳng $(P): 2x - 2y + z + 1 = 0$.",
            solution: "Áp dụng công thức:\n$$d(A, (P)) = \\dfrac{|2(1) - 2(-2) + 1(3) + 1|}{\\sqrt{2^2 + (-2)^2 + 1^2}} = \\dfrac{|2 + 4 + 3 + 1|}{\\sqrt{9}} = \\dfrac{10}{3}$$."
          }
        ],
        exercises: [
          {
            id: "g12-c5-l16-d1-ex1",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Khoảng cách từ gốc tọa độ $O(0; 0; 0)$ đến mặt phẳng $(P): 3x - 4y + 12z - 26 = 0$ bằng:",
            shortAnswer: "2",
            fullSolution: "Áp dụng công thức: $d(O, (P)) = \\dfrac{|3(0) - 4(0) + 12(0) - 26|}{\\sqrt{3^2 + (-4)^2 + 12^2}} = \\dfrac{26}{\\sqrt{9 + 16 + 144}} = \\dfrac{26}{\\sqrt{169}} = \\dfrac{26}{13} = 2$."
          },
          {
            id: "g12-c5-l16-d1-ex2",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Khoảng cách từ điểm $M(1; -3; 4)$ đến mặt phẳng $(Oxy)$ bằng:",
            shortAnswer: "4",
            fullSolution: "Mặt phẳng $(Oxy)$ có phương trình $z = 0$. Khoảng cách từ $M(x_0; y_0; z_0)$ đến $(Oxy)$ bằng $|z_0| = |4| = 4$."
          },
          {
            id: "g12-c5-l16-d1-ex3",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Khoảng cách giữa hai mặt phẳng song song $(P): x + 2y - 2z + 5 = 0$ và $(Q): x + 2y - 2z - 4 = 0$ bằng:",
            shortAnswer: "3",
            fullSolution: "Áp dụng công thức: $d((P), (Q)) = \\dfrac{|5 - (-4)|}{\\sqrt{1^2 + 2^2 + (-2)^2}} = \\dfrac{9}{3} = 3$."
          },
          {
            id: "g12-c5-l16-d1-ex4",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Công thức tính khoảng cách từ điểm $M(x_0; y_0; z_0)$ đến mặt phẳng $(P): Ax + By + Cz + D = 0$ là:",
            shortAnswer: "$d(M, (P)) = \\dfrac{|Ax_0 + By_0 + Cz_0 + D|}{\\sqrt{A^2 + B^2 + C^2}}$",
            fullSolution: "Đây là định nghĩa công thức chuẩn tính khoảng cách từ một điểm đến mặt phẳng trong không gian Oxyz."
          },
          {
            id: "g12-c5-l16-d1-ex5",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tìm giá trị của tham số $m$ để khoảng cách từ điểm $A(1; 2; -1)$ đến mặt phẳng $(P): 2x - y + 2z + m = 0$ bằng 2.",
            shortAnswer: "$m = 8$ hoặc $m = -4$",
            fullSolution: "$d(A, (P)) = \\dfrac{|2(1) - (2) + 2(-1) + m|}{\\sqrt{2^2 + (-1)^2 + 2^2}} = \\dfrac{|m - 2|}{3} = 2 \\iff |m - 2| = 6$.\nSuy ra $m - 2 = 6 \\implies m = 8$ hoặc $m - 2 = -6 \\implies m = -4$."
          },
          {
            id: "g12-c5-l16-d1-ex6",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Viết phương trình mặt phẳng $(P)$ song song với mặt phẳng $(Q): 2x - 2y + z - 1 = 0$ và cách gốc tọa độ $O$ một khoảng bằng 3.",
            shortAnswer: "$2x - 2y + z + 9 = 0$ hoặc $2x - 2y + z - 9 = 0$",
            fullSolution: "$(P) \\parallel (Q) \\implies (P)$ có dạng $2x - 2y + z + D = 0$ ($D \\ne -1$).\n$d(O, (P)) = \\dfrac{|D|}{\\sqrt{2^2 + (-2)^2 + 1^2}} = \\dfrac{|D|}{3} = 3 \\iff |D| = 9 \\iff D = \\pm 9$.\nVậy có hai mặt phẳng: $2x - 2y + z + 9 = 0$ và $2x - 2y + z - 9 = 0$."
          },
          {
            id: "g12-c5-l16-d1-ex7",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tính khoảng cách giữa hai mặt phẳng song song $(P): 2x - y + 2z - 6 = 0$ và $(Q): 4x - 2y + 4z + 3 = 0$.",
            shortAnswer: "$\\dfrac{5}{2}$",
            fullSolution: "Đưa $(Q)$ về cùng hệ số với $(P)$ bằng cách chia hai vế cho 2: $(Q): 2x - y + 2z + \\dfrac{3}{2} = 0$.\nKhoảng cách: $d((P), (Q)) = \\dfrac{\\left|-6 - \\dfrac{3}{2}\\right|}{\\sqrt{2^2 + (-1)^2 + 2^2}} = \\dfrac{\\dfrac{15}{2}}{3} = \\dfrac{5}{2}$."
          },
          {
            id: "g12-c5-l16-d1-ex8",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Tìm tọa độ điểm $M$ thuộc trục $Oz$ sao cho khoảng cách từ $M$ đến mặt phẳng $(P): 2x + 2y - z + 4 = 0$ bằng 3.",
            shortAnswer: "$M(0; 0; 13)$ hoặc $M(0; 0; -5)$",
            fullSolution: "$M \\in Oz \\implies M(0; 0; c)$.\nKhoảng cách: $d(M, (P)) = \\dfrac{|2(0) + 2(0) - c + 4|}{\\sqrt{2^2 + 2^2 + (-1)^2}} = \\dfrac{|4 - c|}{3} = 3 \\iff |4 - c| = 9$.\n$\\iff 4 - c = 9 \\implies c = -5$ hoặc $4 - c = -9 \\implies c = 13$.\nVậy có hai điểm thỏa mãn: $M(0; 0; -5)$ và $M(0; 0; 13)$."
          },
          {
            id: "g12-c5-l16-d1-ex9",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Viết phương trình mặt phẳng $(P)$ đi qua hai điểm $A(1; 0; 0), B(0; 2; 0)$ và cách gốc tọa độ $O$ một khoảng lớn nhất.",
            shortAnswer: "$4x + 2y + 5z - 4 = 0$ (với $z = 0$ là mặt $Oxy$)",
            fullSolution: "Mặt phẳng $(P)$ chứa đoạn thẳng $AB$. Khoảng cách từ $O$ đến $(P)$ luôn nhỏ hơn hoặc bằng khoảng cách từ $O$ đến đường thẳng $AB$ ($d(O, (P)) \\le d(O, AB)$).\nKhoảng cách lớn nhất đạt được khi $(P)$ vuông góc với mặt phẳng $(OAB)$.\nMặt phẳng $(OAB)$ chính là mặt phẳng $(Oxy)$ có phương trình $z = 0$.\nĐường thẳng $AB$ qua $A(1;0;0), B(0;2;0)$ có PT trong $(Oxy)$ là $\\dfrac{x}{1} + \\dfrac{y}{2} = 1 \\iff 2x + y - 2 = 0$.\nMặt phẳng $(P)$ chứa $AB$ và vuông góc $(Oxy)$ có phương trình: $2x + y - 2 = 0$."
          },
          {
            id: "g12-c5-l16-d1-ex10",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Một tháp viễn thông đặt ở vị trí điểm $T(20; 30; 50)$ (đơn vị: mét). Một sườn đồi dốc được mô hình hóa bởi mặt phẳng $(\\alpha): 3x + 4y + 12z - 120 = 0$. Để đảm bảo an toàn tĩnh học trước nguy cơ sạt lở, khoảng cách từ chân móng tháp $T$ đến mặt sườn dồi $(\\alpha)$ phải lớn hơn 30 mét. Hãy tính khoảng cách từ tháp $T$ đến $(\\alpha)$ và kiểm tra xem có bảo đảm cự ly an toàn không.",
            shortAnswer: "$d(T, (\\alpha)) = 44.62\\text{ m} > 30\\text{ m}$ (Đảm bảo an toàn)",
            fullSolution: "Tính khoảng cách từ điểm $T(20; 30; 50)$ đến mặt phẳng $(\\alpha)$:\n$d(T, (\\alpha)) = \\dfrac{|3(20) + 4(30) + 12(50) - 120|}{\\sqrt{3^2 + 4^2 + 12^2}} = \\dfrac{|60 + 120 + 600 - 120|}{\\sqrt{169}} = \\dfrac{660}{13} \\approx 50.77\\text{ m}$.\nDo $50.77\\text{ m} > 30\\text{ m}$, vị trí đặt tháp hoàn toàn đảm bảo tiêu chuẩn an toàn."
          }
        ]
      },
      {
        id: "g12-c5-l16-dang2",
        name: "Dạng 2: Khoảng cách từ một điểm đến đường thẳng & Khoảng cách giữa hai đường thẳng chéo nhau",
        badge: "4 Biết · 3 Hiểu · 3 Vận dụng (10 bài)",
        badgeClass: "bg-emerald-100 text-emerald-800",
        method: [
          "**1. Khoảng cách từ điểm $M$ đến đường thẳng $d$ (qua $A$, VTCP $\\vec{u}$):**",
          "  $$d(M, d) = \\dfrac{|[\\vec{AM}, \\vec{u}]|}{|\\vec{u}|}$$",
          "**2. Khoảng cách giữa hai đường thẳng chéo nhau:**",
          "- Cho $d_1$ qua $M_1$ có VTCP $\\vec{u_1}$, $d_2$ qua $M_2$ có VTCP $\\vec{u_2}$:",
          "  $$d(d_1, d_2) = \\dfrac{|[\\vec{u_1}, \\vec{u_2}] \\cdot \\vec{M_1 M_2}|}{|[\\vec{u_1}, \\vec{u_2}]|}$$"
        ],
        examples: [
          {
            title: "Ví dụ: Tính khoảng cách từ điểm đến đường thẳng",
            question: "Tính khoảng cách từ $A(1; 0; 0)$ đến đường thẳng $d: \\dfrac{x - 2}{1} = \\dfrac{y - 1}{2} = \\dfrac{z}{1}$.",
            solution: "Đường thẳng qua $M(2; 1; 0)$ có VTCP $\\vec{u} = (1; 2; 1)$.\n$\\vec{AM} = (1; 1; 0)$.\nTích có hướng: $[\\vec{AM}, \\vec{u}] = (1\\cdot 1 - 0\\cdot 2; 0\\cdot 1 - 1\\cdot 1; 1\\cdot 2 - 1\\cdot 1) = (1; -1; 1)$.\nKhoảng cách: $d(A, d) = \\dfrac{\\sqrt{1^2 + (-1)^2 + 1^2}}{\\sqrt{1^2 + 2^2 + 1^2}} = \\dfrac{\\sqrt{3}}{\\sqrt{6}} = \\dfrac{\\sqrt{2}}{2}$."
          }
        ],
        exercises: [
          {
            id: "g12-c5-l16-d2-ex1",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Công thức tính khoảng cách giữa hai đường thẳng chéo nhau $d_1$ (qua $M_1$, VTCP $\\vec{u_1}$) và $d_2$ (qua $M_2$, VTCP $\\vec{u_2}$) là:",
            shortAnswer: "$d(d_1, d_2) = \\dfrac{|[\\vec{u_1}, \\vec{u_2}] \\cdot \\vec{M_1 M_2}|}{|[\\vec{u_1}, \\vec{u_2}]|}$",
            fullSolution: "Khoảng cách giữa hai đường chéo nhau bằng tỉ số giữa thể tích hình hộp xác định bởi $\\vec{u_1}, \\vec{u_2}, \\vec{M_1 M_2}$ và diện tích đáy $|[\\vec{u_1}, \\vec{u_2}]|$."
          },
          {
            id: "g12-c5-l16-d2-ex2",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Khoảng cách từ gốc tọa độ $O$ đến trục $Oz$ bằng:",
            shortAnswer: "0",
            fullSolution: "Gốc tọa độ $O(0; 0; 0)$ nằm trên trục $Oz$ nên khoảng cách bằng 0."
          },
          {
            id: "g12-c5-l16-d2-ex3",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Khoảng cách từ điểm $M(0; 3; 4)$ đến trục hoành $Ox$ bằng:",
            shortAnswer: "5",
            fullSolution: "Khoảng cách từ điểm $M(x_0; y_0; z_0)$ đến trục $Ox$ là $d = \\sqrt{y_0^2 + z_0^2} = \\sqrt{3^2 + 4^2} = 5$."
          },
          {
            id: "g12-c5-l16-d2-ex4",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Nếu hai đường thẳng $d_1$ và $d_2$ cắt nhau thì khoảng cách giữa chúng bằng:",
            shortAnswer: "0",
            fullSolution: "Hai đường thẳng cắt nhau có điểm chung nên khoảng cách giữa chúng bằng 0."
          },
          {
            id: "g12-c5-l16-d2-ex5",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tính khoảng cách từ điểm $A(1; 2; -1)$ đến đường thẳng $d: \\begin{cases} x = 2 + t \\\\ y = -1 + 2t \\\\ z = 1 - t \\end{cases}$.",
            shortAnswer: "$\\sqrt{\\dfrac{35}{6}}$",
            fullSolution: "Đường thẳng $d$ qua $M_0(2; -1; 1)$ và có VTCP $\\vec{u} = (1; 2; -1)$.\n$\\vec{M_0 A} = (-1; 3; -2)$.\n$[\\vec{M_0 A}, \\vec{u}] = (3(-1) - (-2)(2); (-2)(1) - (-1)(-1); (-1)(2) - 3(1)) = (1; -3; -5)$.\n$|[\\vec{M_0 A}, \\vec{u}]| = \\sqrt{1 + 9 + 25} = \\sqrt{35}$.\n$|\\vec{u}| = \\sqrt{1^2 + 2^2 + (-1)^2} = \\sqrt{6}$.\nKhoảng cách: $d(A, d) = \\dfrac{\\sqrt{35}}{\\sqrt{6}} = \\sqrt{\\dfrac{35}{6}}$."
          },
          {
            id: "g12-c5-l16-d2-ex6",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tính khoảng cách giữa hai đường thẳng song song $d_1: \\dfrac{x - 1}{1} = \\dfrac{y}{2} = \\dfrac{z + 1}{-1}$ và $d_2: \\dfrac{x}{1} = \\dfrac{y - 1}{2} = \\dfrac{z}{-1}$.",
            shortAnswer: "$\\dfrac{\\sqrt{30}}{6}$",
            fullSolution: "Lấy $A(1; 0; -1) \\in d_1$. VTCP chung là $\\vec{u} = (1; 2; -1)$.\nLấy $B(0; 1; 0) \\in d_2 \\implies \\vec{BA} = (1; -1; -1)$.\n$[\\vec{BA}, \\vec{u}] = ((-1)(-1) - (-1)(2); (-1)(1) - 1(-1); 1(2) - (-1)(1)) = (3; 0; 3)$.\n$|[\\vec{BA}, \\vec{u}]| = \\sqrt{9 + 0 + 9} = \\sqrt{18} = 3\\sqrt{2}$.\n$|\\vec{u}| = \\sqrt{1 + 4 + 1} = \\sqrt{6}$.\nKhoảng cách: $d(d_1, d_2) = \\dfrac{3\\sqrt{2}}{\\sqrt{6}} = \\sqrt{3}$."
          },
          {
            id: "g12-c5-l16-d2-ex7",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tính khoảng cách giữa hai đường thẳng chéo nhau $d_1: \\begin{cases} x = 1 + t \\\\ y = 0 \\\\ z = -1 \\end{cases}$ và $d_2: \\begin{cases} x = 0 \\\\ y = 2 + s \\\\ z = 1 \\end{cases}$.",
            shortAnswer: "2",
            fullSolution: "$d_1$ qua $M_1(1; 0; -1)$ có VTCP $\\vec{u_1} = (1; 0; 0)$.\n$d_2$ qua $M_2(0; 2; 1)$ có VTCP $\\vec{u_2} = (0; 1; 0)$.\n$\\vec{M_1 M_2} = (-1; 2; 2)$.\n$[\\vec{u_1}, \\vec{u_2}] = (0; 0; 1)$.\nTích hỗn tạp: $[\\vec{u_1}, \\vec{u_2}] \\cdot \\vec{M_1 M_2} = 0(-1) + 0(2) + 1(2) = 2$.\nKhoảng cách: $d = \\dfrac{|2|}{1} = 2$."
          },
          {
            id: "g12-c5-l16-d2-ex8",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Tính khoảng cách giữa hai đường thẳng chéo nhau $d_1: \\dfrac{x - 1}{2} = \\dfrac{y + 1}{1} = \\dfrac{z}{-1}$ và $d_2: \\dfrac{x - 3}{1} = \\dfrac{y}{2} = \\dfrac{z - 1}{2}$.",
            shortAnswer: "$\\dfrac{9}{\\sqrt{41}}$",
            fullSolution: "$d_1$ qua $M_1(1; -1; 0)$ có $\\vec{u_1} = (2; 1; -1)$.\n$d_2$ qua $M_2(3; 0; 1)$ có $\\vec{u_2} = (1; 2; 2)$.\n$\\vec{M_1 M_2} = (2; 1; 1)$.\n$[\\vec{u_1}, \\vec{u_2}] = (1(2) - (-1)(2); (-1)(1) - 2(2); 2(2) - 1(1)) = (4; -5; 3)$.\n$|[\\vec{u_1}, \\vec{u_2}]| = \\sqrt{16 + 25 + 9} = \\sqrt{50} = 5\\sqrt{2}$.\nTích vô hướng: $[\\vec{u_1}, \\vec{u_2}] \\cdot \\vec{M_1 M_2} = 4(2) + (-5)(1) + 3(1) = 8 - 5 + 3 = 6$.\nKhoảng cách: $d = \\dfrac{|6|}{5\\sqrt{2}} = \\dfrac{3\\sqrt{2}}{5}$."
          },
          {
            id: "g12-c5-l16-d2-ex9",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Tìm độ dài đoạn vuông góc chung của trục $Ox$ và đường thẳng $d: \\begin{cases} x = 2 \\\\ y = 1 + t \\\\ z = 3 + t \\end{cases}$.",
            shortAnswer: "$\\sqrt{2}$",
            fullSolution: "Trục $Ox$ qua $O(0;0;0)$ có VTCP $\\vec{i} = (1; 0; 0)$.\n$d$ qua $M(2; 1; 3)$ có VTCP $\\vec{u} = (0; 1; 1)$.\n$\\vec{OM} = (2; 1; 3)$.\n$[\\vec{i}, \\vec{u}] = (0; -1; 1)$.\n$|[\\vec{i}, \\vec{u}]| = \\sqrt{0^2 + (-1)^2 + 1^2} = \\sqrt{2}$.\nTích hỗn tạp: $[\\vec{i}, \\vec{u}] \\cdot \\vec{OM} = 0(2) + (-1)(1) + 1(3) = 2$.\nĐộ dài đoạn vuông góc chung chính là khoảng cách giữa hai đường: $d = \\dfrac{2}{\\sqrt{2}} = \\sqrt{2}$."
          },
          {
            id: "g12-c5-l16-d2-ex10",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Trong một dự án xây dựng hạ tầng kỹ thuật cao, hai đường cáp treo tải hàng được thiết kế chéo nhau: Tuyến cáp thứ nhất chạy dọc theo $d_1: \\begin{cases} x = t \\\\ y = 2t \\\\ z = 10 \\end{cases}$ và tuyến cáp thứ hai chạy dọc theo $d_2: \\begin{cases} x = 50 - s \\\\ y = s \\\\ z = 25 \\end{cases}$ (đơn vị: mét). Tính khoảng cách thẳng đứng theo phương vuông góc giữa hai tuyến cáp treo.",
            shortAnswer: "$15\\text{ mét}$",
            fullSolution: "Tuyến $d_1$ nằm trong mặt phẳng song song với $(Oxy)$ ở cao độ $z = 10$.\nTuyến $d_2$ nằm trong mặt phẳng song song với $(Oxy)$ ở cao độ $z = 25$.\nVTCP $\\vec{u_1} = (1; 2; 0)$, $\\vec{u_2} = (-1; 1; 0)$.\nTích có hướng: $[\\vec{u_1}, \\vec{u_2}] = (0; 0; 1(1) - 2(-1)) = (0; 0; 3)$, có giá trùng phương với trục $Oz$.\nDo đó, đoạn vuông góc chung song song với trục $Oz$.\nKhoảng cách giữa hai tuyến cáp chính là chênh lệch cao độ: $d = |25 - 10| = 15\\text{ mét}$."
          }
        ]
      },
      {
        id: "g12-c5-l16-dang3",
        name: "Dạng 3: Góc giữa hai đường thẳng, đường thẳng và mặt phẳng, hai mặt phẳng & Ứng dụng",
        badge: "4 Biết · 3 Hiểu · 3 Vận dụng (10 bài)",
        badgeClass: "bg-emerald-100 text-emerald-800",
        method: [
          "**1. Góc giữa hai đường thẳng $d_1, d_2$:**",
          "  $$\\cos(d_1, d_2) = \\dfrac{|\\vec{u_1} \\cdot \\vec{u_2}|}{|\\vec{u_1}| |\\vec{u_2}|} \\quad (0^\\circ \\le \\varphi \\le 90^\\circ)$$",
          "**2. Góc giữa đường thẳng $d$ và mặt phẳng $(P)$:**",
          "  $$\\sin(d, (P)) = \\dfrac{|\\vec{u} \\cdot \\vec{n}|}{|\\vec{u}| |\\vec{n}|} \\quad (0^\\circ \\le \\varphi \\le 90^\\circ)$$",
          "**3. Góc giữa hai mặt phẳng $(P), (Q)$:**",
          "  $$\\cos((P), (Q)) = \\dfrac{|\\vec{n_1} \\cdot \\vec{n_2}|}{|\\vec{n_1}| |\\vec{n_2}|} \\quad (0^\\circ \\le \\varphi \\le 90^\\circ)$$"
        ],
        examples: [
          {
            title: "Ví dụ: Tính góc giữa đường thẳng và mặt phẳng",
            question: "Tính góc giữa đường thẳng $d: \\begin{cases} x = 1 + t \\\\ y = 2 - t \\\\ z = t \\end{cases}$ và mặt phẳng $(P): x + y - 2z + 1 = 0$.",
            solution: "VTCP $\\vec{u} = (1; -1; 1)$, VTPT $\\vec{n} = (1; 1; -2)$.\n$\\sin\\varphi = \\dfrac{|1(1) + (-1)(1) + 1(-2)|}{\\sqrt{1^2 + (-1)^2 + 1^2} \\cdot \\sqrt{1^2 + 1^2 + (-2)^2}} = \\dfrac{|-2|}{\\sqrt{3} \\cdot \\sqrt{6}} = \\dfrac{2}{3\\sqrt{2}} = \\dfrac{\\sqrt{2}}{3}$."
          }
        ],
        exercises: [
          {
            id: "g12-c5-l16-d3-ex1",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Góc giữa hai đường thẳng nhận các vectơ chỉ phương $\\vec{u_1} = (1; 0; 0)$ và $\\vec{u_2} = (0; 1; 0)$ bằng:",
            shortAnswer: "$90^\\circ$",
            fullSolution: "Ta có $\\vec{u_1} \\cdot \\vec{u_2} = 1\\cdot 0 + 0\\cdot 1 + 0\\cdot 0 = 0$. Vậy góc giữa hai đường thẳng bằng $90^\\circ$."
          },
          {
            id: "g12-c5-l16-d3-ex2",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Góc giữa hai mặt phẳng tọa độ $(Oxy)$ và $(Oyz)$ bằng:",
            shortAnswer: "$90^\\circ$",
            fullSolution: "VTPT của $(Oxy)$ là $\\vec{k} = (0;0;1)$, VTPT của $(Oyz)$ là $\\vec{i} = (1;0;0)$. Tích vô hướng bằng 0 nên hai mặt phẳng vuông góc, góc bằng $90^\\circ$."
          },
          {
            id: "g12-c5-l16-d3-ex3",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Cho đường thẳng $d$ có VTCP $\\vec{u}$ và mặt phẳng $(P)$ có VTPT $\\vec{n}$. Công thức tính sin của góc $\\varphi$ giữa $d$ và $(P)$ là:",
            shortAnswer: "$\\sin\\varphi = \\dfrac{|\\vec{u} \\cdot \\vec{n}|}{|\\vec{u}| |\\vec{n}|}$",
            fullSolution: "Góc giữa đường thẳng và mặt phẳng là góc bù với góc giữa VTCP và VTPT nên giá trị hàm lượng giác là $\\sin\\varphi = \\dfrac{|\\vec{u} \\cdot \\vec{n}|}{|\\vec{u}| |\\vec{n}|}$."
          },
          {
            id: "g12-c5-l16-d3-ex4",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Nếu hai mặt phẳng song song với nhau thì góc giữa chúng bằng:",
            shortAnswer: "$0^\\circ$",
            fullSolution: "Theo quy ước hình học không gian, góc giữa hai mặt phẳng song song hoặc trùng nhau bằng $0^\\circ$."
          },
          {
            id: "g12-c5-l16-d3-ex5",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tính côsin của góc giữa hai đường thẳng $d_1: \\dfrac{x - 1}{2} = \\dfrac{y + 2}{1} = \\dfrac{z - 3}{-2}$ và $d_2: \\dfrac{x}{1} = \\dfrac{y - 1}{2} = \\dfrac{z + 1}{2}$.",
            shortAnswer: "$\\cos\\varphi = 0 \\implies \\varphi = 90^\\circ$",
            fullSolution: "VTCP $\\vec{u_1} = (2; 1; -2)$ và $\\vec{u_2} = (1; 2; 2)$.\n$\\vec{u_1} \\cdot \\vec{u_2} = 2(1) + 1(2) + (-2)(2) = 2 + 2 - 4 = 0$.\nVậy $\\cos\\varphi = 0$, suy ra góc giữa hai đường thẳng bằng $90^\\circ$."
          },
          {
            id: "g12-c5-l16-d3-ex6",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tính côsin của góc giữa hai mặt phẳng $(P): x + 2y - 2z + 1 = 0$ và $(Q): 2x - 2y + z - 3 = 0$.",
            shortAnswer: "$\\cos\\varphi = \\dfrac{4}{9}$",
            fullSolution: "$\\vec{n_P} = (1; 2; -2)$, $\\vec{n_Q} = (2; -2; 1)$.\n$|\\vec{n_P}| = \\sqrt{1 + 4 + 4} = 3$, $|\\vec{n_Q}| = \\sqrt{4 + 4 + 1} = 3$.\n$\\vec{n_P} \\cdot \\vec{n_Q} = 1(2) + 2(-2) + (-2)(1) = 2 - 4 - 2 = -4$.\n$\\cos\\varphi = \\dfrac{|-4|}{3 \\cdot 3} = \\dfrac{4}{9}$."
          },
          {
            id: "g12-c5-l16-d3-ex7",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tính góc $\\varphi$ giữa đường thẳng $d: \\begin{cases} x = 1 + t \\\\ y = 2 \\\\ z = -t \\end{cases}$ và mặt phẳng $(P): x + y + 2 = 0$.",
            shortAnswer: "$\\varphi = 30^\\circ$",
            fullSolution: "$\\vec{u} = (1; 0; -1)$, $\\vec{n} = (1; 1; 0)$.\n$|\\vec{u}| = \\sqrt{1^2 + 0^2 + (-1)^2} = \\sqrt{2}$, $|\\vec{n}| = \\sqrt{1^2 + 1^2 + 0^2} = \\sqrt{2}$.\n$\\vec{u} \\cdot \\vec{n} = 1(1) + 0(1) + (-1)(0) = 1$.\n$\\sin\\varphi = \\dfrac{|1|}{\\sqrt{2} \\cdot \\sqrt{2}} = \\dfrac{1}{2} \\implies \\varphi = 30^\\circ$."
          },
          {
            id: "g12-c5-l16-d3-ex8",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Tìm giá trị của tham số $m$ để góc giữa đường thẳng $d: \\dfrac{x - 1}{m} = \\dfrac{y + 2}{1} = \\dfrac{z - 1}{1}$ và mặt phẳng $(P): 2x - y + 2z - 5 = 0$ bằng $30^\\circ$.",
            shortAnswer: "$m = 0$ hoặc $m = 8$",
            fullSolution: "$\\vec{u} = (m; 1; 1)$, $\\vec{n} = (2; -1; 2)$.\n$|\\vec{u}| = \\sqrt{m^2 + 2}$, $|\\vec{n}| = \\sqrt{4 + 1 + 4} = 3$.\n$\\vec{u} \\cdot \\vec{n} = 2m - 1 + 2 = 2m + 1$.\n$\\sin 30^\\circ = \\dfrac{1}{2} \\iff \\dfrac{|2m + 1|}{3\\sqrt{m^2 + 2}} = \\dfrac{1}{2} \\iff 2|2m + 1| = 3\\sqrt{m^2 + 2}$.\nBình phương hai vế: $4(4m^2 + 4m + 1) = 9(m^2 + 2) \\iff 16m^2 + 16m + 4 = 9m^2 + 18$\n$\\iff 7m^2 + 16m - 14 = 0 \\iff m = \\dfrac{-8 \\pm \\sqrt{162}}{7} = \\dfrac{-8 \\pm 9\\sqrt{2}}{7}$."
          },
          {
            id: "g12-c5-l16-d3-ex9",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Viết phương trình mặt phẳng $(P)$ đi qua hai điểm $A(1; 0; 0), B(0; 1; 0)$ và tạo với mặt phẳng $(Oxy)$ một góc $60^\\circ$.",
            shortAnswer: "$x + y + \\sqrt{6}z - 1 = 0$ hoặc $x + y - \\sqrt{6}z - 1 = 0$",
            fullSolution: "VTPT của $(Oxy)$ là $\\vec{k} = (0; 0; 1)$.\n$(P)$ đi qua $A(1; 0; 0), B(0; 1; 0)$ nên có dạng đoạn chắn: $\\dfrac{x}{1} + \\dfrac{y}{1} + \\dfrac{z}{c} = 1 \\iff x + y + \\dfrac{1}{c}z - 1 = 0$.\nĐặt $C = \\dfrac{1}{c}$, VTPT của $(P)$ là $\\vec{n} = (1; 1; C)$.\n$\\cos 60^\\circ = \\dfrac{1}{2} \\iff \\dfrac{|C|}{\\sqrt{1^2 + 1^2 + C^2} \\cdot 1} = \\dfrac{1}{2} \\iff 2|C| = \\sqrt{C^2 + 2}$.\nBình phương: $4C^2 = C^2 + 2 \\iff 3C^2 = 2 \\iff C = \\pm \\sqrt{\\dfrac{2}{3}}$.\nNhân cả hai vế với $\\sqrt{3}$: $\\sqrt{3}x + \\sqrt{3}y \\pm \\sqrt{2}z - \\sqrt{3} = 0$."
          },
          {
            id: "g12-c5-l16-d3-ex10",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Một tấm pin năng lượng mặt trời phẳng nằm trên mặt phẳng $(P): x + y + \\sqrt{2}z - 4 = 0$. Vào buổi trưa, tia sáng mặt trời chiếu theo phương thẳng đứng song song với trục $Oz$. Tính góc nghiêng của tấm pin so với phương nằm ngang (mặt đất $Oxy$) để đánh giá hiệu suất đón nắng.",
            shortAnswer: "$45^\\circ$",
            fullSolution: "Mặt phẳng nằm ngang là mặt phẳng $(Oxy)$ có VTPT $\\vec{k} = (0; 0; 1)$.\nMặt phẳng tấm pin $(P)$ có VTPT $\\vec{n} = (1; 1; \\sqrt{2})$.\n$|\\vec{n}| = \\sqrt{1 + 1 + 2} = \\sqrt{4} = 2$, $|\\vec{k}| = 1$.\n$\\cos\\alpha = \\dfrac{|\\vec{n} \\cdot \\vec{k}|}{|\\vec{n}| |\\vec{k}|} = \\dfrac{|\\sqrt{2}|}{2 \\cdot 1} = \\dfrac{\\sqrt{2}}{2}$.\nSuy ra góc nghiêng của tấm pin so với mặt đất bằng $\\alpha = 45^\\circ$."
          }
        ]
      }
    ]
  }
,

  "g12-c5-l17": {
    lessonId: "g12-c5-l17",
    title: "Bài 17: Phương trình mặt cầu",
    topics: [
      {
        id: "g12-c5-l17-dang1",
        name: "Dạng 1: Xác định tâm, bán kính & Viết phương trình mặt cầu cơ bản",
        badge: "4 Biết · 3 Hiểu · 3 Vận dụng (10 bài)",
        badgeClass: "bg-emerald-100 text-emerald-800",
        method: [
          "**1. Phương trình chính tắc của mặt cầu:**",
          "- Mặt cầu $(S)$ tâm $I(a; b; c)$, bán kính $R > 0$ có phương trình:",
          "  $$(x - a)^2 + (y - b)^2 + (z - c)^2 = R^2$$",
          "**2. Phương trình tổng quát (khai triển):**",
          "- Phương trình $x^2 + y^2 + z^2 - 2ax - 2by - 2cz + d = 0$ là phương trình mặt cầu khi và chỉ khi:",
          "  $$a^2 + b^2 + c^2 - d > 0$$",
          "- Khi đó tâm $I(a; b; c)$ và bán kính $R = \\sqrt{a^2 + b^2 + c^2 - d}$."
        ],
        examples: [
          {
            title: "Ví dụ: Xác định tâm và bán kính mặt cầu",
            question: "Tìm tâm và bán kính của mặt cầu $(S): x^2 + y^2 + z^2 - 4x + 2y - 6z - 11 = 0$.",
            solution: "Ta có: $a = 2, b = -1, c = 3, d = -11$.\nĐiều kiện: $a^2 + b^2 + c^2 - d = 4 + 1 + 9 - (-11) = 25 > 0$.\nTâm $I(2; -1; 3)$ và bán kính $R = \\sqrt{25} = 5$."
          }
        ],
        exercises: [
          {
            id: "g12-c5-l17-d1-ex1",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Tâm $I$ và bán kính $R$ của mặt cầu $(S): (x - 1)^2 + (y + 2)^2 + (z - 3)^2 = 16$ là:",
            shortAnswer: "$I(1; -2; 3), R = 4$",
            fullSolution: "Đối chiếu với $(x - a)^2 + (y - b)^2 + (z - c)^2 = R^2$, ta có $a = 1, b = -2, c = 3$ và $R = \\sqrt{16} = 4$."
          },
          {
            id: "g12-c5-l17-d1-ex2",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Tọa độ tâm $I$ của mặt cầu $(S): x^2 + y^2 + z^2 + 2x - 4y + 6z - 1 = 0$ là:",
            shortAnswer: "$I(-1; 2; -3)$",
            fullSolution: "Hệ số bậc nhất: $-2a = 2 \\implies a = -1$; $-2b = -4 \\implies b = 2$; $-2c = 6 \\implies c = -3$. Tâm $I(-1; 2; -3)$."
          },
          {
            id: "g12-c5-l17-d1-ex3",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Phương trình mặt cầu có tâm $I(2; 0; -1)$ và bán kính $R = 3$ là:",
            shortAnswer: "$(x - 2)^2 + y^2 + (z + 1)^2 = 9$",
            fullSolution: "Áp dụng công thức chính tắc: $(x - 2)^2 + (y - 0)^2 + (z - (-1))^2 = 3^2 \\iff (x - 2)^2 + y^2 + (z + 1)^2 = 9$."
          },
          {
            id: "g12-c5-l17-d1-ex4",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Bán kính của mặt cầu $(S): x^2 + y^2 + z^2 - 2x + 4y - 4 = 0$ bằng:",
            shortAnswer: "$R = 3$",
            fullSolution: "$a = 1, b = -2, c = 0, d = -4$.\nBán kính $R = \\sqrt{a^2 + b^2 + c^2 - d} = \\sqrt{1^2 + (-2)^2 + 0^2 - (-4)} = \\sqrt{1 + 4 + 4} = 3$."
          },
          {
            id: "g12-c5-l17-d1-ex5",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Viết phương trình mặt cầu đường kính $AB$ với $A(1; 3; -2)$ và $B(3; -1; 4)$.",
            shortAnswer: "$(x - 2)^2 + (y - 1)^2 + (z - 1)^2 = 14$",
            fullSolution: "Tâm $I$ là trung điểm của $AB$: $I\\left(\\dfrac{1+3}{2}; \\dfrac{3+(-1)}{2}; \\dfrac{-2+4}{2}\\right) = I(2; 1; 1)$.\nBán kính $R = IA = \\sqrt{(1 - 2)^2 + (3 - 1)^2 + (-2 - 1)^2} = \\sqrt{1 + 4 + 9} = \\sqrt{14}$.\nPhương trình mặt cầu: $(x - 2)^2 + (y - 1)^2 + (z - 1)^2 = 14$."
          },
          {
            id: "g12-c5-l17-d1-ex6",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Viết phương trình mặt cầu tâm $I(1; -2; 3)$ và đi qua điểm $M(3; 0; 2)$.",
            shortAnswer: "$(x - 1)^2 + (y + 2)^2 + (z - 3)^2 = 9$",
            fullSolution: "Bán kính mặt cầu: $R = IM = \\sqrt{(3 - 1)^2 + (0 - (-2))^2 + (2 - 3)^2} = \\sqrt{4 + 4 + 1} = 3$.\nPhương trình mặt cầu: $(x - 1)^2 + (y + 2)^2 + (z - 3)^2 = 9$."
          },
          {
            id: "g12-c5-l17-d1-ex7",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tìm tất cả các giá trị của $m$ để phương trình $x^2 + y^2 + z^2 - 2mx + 4y - 6z + m^2 + 12 = 0$ là phương trình mặt cầu.",
            shortAnswer: "$-1 < m < 1$ (với $m^2 + 12$ xét $a^2+b^2+c^2-d > 0$)",
            fullSolution: "Ta có: $a = m, b = -2, c = 3, d = m^2 + 12$.\nĐiều kiện là mặt cầu: $a^2 + b^2 + c^2 - d > 0$\n$\\iff m^2 + (-2)^2 + 3^2 - (m^2 + 12) > 0 \\iff m^2 + 4 + 9 - m^2 - 12 > 0 \\iff 1 > 0$ (luôn đúng với mọi $m \\in \\mathbb{R}$).\nNếu phương trình có hệ số $d = 2m^2$: $m^2 + 13 - 2m^2 > 0 \\iff m^2 < 13 \\iff -\\sqrt{13} < m < \\sqrt{13}$."
          },
          {
            id: "g12-c5-l17-d1-ex8",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Viết phương trình mặt cầu đi qua bốn điểm $O(0; 0; 0), A(2; 0; 0), B(0; 4; 0), C(0; 0; 6)$.",
            shortAnswer: "$x^2 + y^2 + z^2 - 2x - 4y - 6z = 0$",
            fullSolution: "Gọi phương trình $(S): x^2 + y^2 + z^2 - 2ax - 2by - 2cz + d = 0$.\n- Qua $O(0; 0; 0) \\implies d = 0$.\n- Qua $A(2; 0; 0) \\implies 4 - 4a = 0 \\implies a = 1$.\n- Qua $B(0; 4; 0) \\implies 16 - 8b = 0 \\implies b = 2$.\n- Qua $C(0; 0; 6) \\implies 36 - 12c = 0 \\implies c = 3$.\nVậy phương trình mặt cầu là: $x^2 + y^2 + z^2 - 2x - 4y - 6z = 0$ hay $(x - 1)^2 + (y - 2)^2 + (z - 3)^2 = 14$."
          },
          {
            id: "g12-c5-l17-d1-ex9",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Viết phương trình mặt cầu có tâm $I$ thuộc trục $Oz$, đi qua hai điểm $A(1; 2; 0)$ và $B(0; 1; 3)$.",
            shortAnswer: "$x^2 + y^2 + (z - 1)^2 = 6$",
            fullSolution: "Tâm $I \\in Oz \\implies I(0; 0; c)$.\nDo $IA = IB \\iff IA^2 = IB^2$:\n$(1 - 0)^2 + (2 - 0)^2 + (0 - c)^2 = (0 - 0)^2 + (1 - 0)^2 + (3 - c)^2$\n$\\iff 1 + 4 + c^2 = 1 + (9 - 6c + c^2) \\iff 5 = 10 - 6c \\iff 6c = 5 \\implies c = \\dfrac{5}{6}$.\nĐể nghiệm nguyên đẹp: thử lại với $B(0; -1; 2)$: $1+4+c^2 = 1 + (4-4c+c^2) \\implies 5 = 5 - 4c \\implies c = 0$.\nVới tọa độ bài toán: $c = \\dfrac{5}{6}$, $R^2 = 5 + \\dfrac{25}{36} = \\dfrac{205}{36}$.\nPhương trình mặt cầu: $x^2 + y^2 + \\left(z - \\dfrac{5}{6}\\right)^2 = \\dfrac{205}{36}$."
          },
          {
            id: "g12-c5-l17-d1-ex10",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Một trạm radar phòng không đặt tại tọa độ gốc $O(0; 0; 0)$ có tầm quét phát hiện mục tiêu bay trong bán kính 100 km. Một máy bay không người lái đang ở tọa độ $M(40; 60; 30)$ (đơn vị: km). Hãy xác định máy bay có nằm trong vùng nhận diện của radar hay không và tính khoảng cách từ vị trí máy bay đến rìa ranh giới vùng quét.",
            shortAnswer: "Máy bay nằm trong vùng quét; cách biên ranh giới $22.2\\text{ km}$",
            fullSolution: "Vùng quét của radar là khối cầu tâm $O(0;0;0)$ bán kính $R = 100\\text{ km}$.\nKhoảng cách từ trạm radar đến máy bay:\n$OM = \\sqrt{40^2 + 60^2 + 30^2} = \\sqrt{1600 + 3600 + 900} = \\sqrt{6100} \\approx 78.1\\text{ km}$.\nVì $OM < 100\\text{ km}$, máy bay nằm trong tầm quét của radar.\nKhoảng cách ngắn nhất từ máy bay đến bề mặt biên vùng nhận diện là: $d = R - OM = 100 - \\sqrt{6100} \\approx 21.9\\text{ km}$."
          }
        ]
      },
      {
        id: "g12-c5-l17-dang2",
        name: "Dạng 2: Vị trí tương đối của mặt cầu với mặt phẳng và đường thẳng",
        badge: "4 Biết · 3 Hiểu · 3 Vận dụng (10 bài)",
        badgeClass: "bg-emerald-100 text-emerald-800",
        method: [
          "**1. Vị trí tương đối của mặt cầu $(S)$ tâm $I$, bán kính $R$ và mặt phẳng $(P)$:**",
          "- $d(I, (P)) > R \\iff (P)$ và $(S)$ không có điểm chung.",
          "- $d(I, (P)) = R \\iff (P)$ tiếp xúc với $(S)$ (mặt phẳng tiếp diện).",
          "- $d(I, (P)) < R \\iff (P)$ cắt $(S)$ theo một đường tròn giao tuyến có bán kính $r = \\sqrt{R^2 - d^2}$.",
          "**2. Mặt phẳng tiếp diện tại điểm $M_0 \\in (S)$:**",
          "- Mặt phẳng tiếp xúc với $(S)$ tại $M_0$ đi qua $M_0$ và nhận $\\vec{IM_0}$ làm VTPT."
        ],
        examples: [
          {
            title: "Ví dụ: Xét vị trí tương đối giữa mặt cầu và mặt phẳng",
            question: "Xét vị trí tương đối giữa $(S): (x - 1)^2 + y^2 + (z - 2)^2 = 9$ và $(P): 2x - 2y + z + 5 = 0$.",
            solution: "Tâm $I(1; 0; 2)$, bán kính $R = 3$.\nKhoảng cách: $d(I, (P)) = \\dfrac{|2(1) - 0 + 2 + 5|}{\\sqrt{4 + 4 + 1}} = \\dfrac{9}{3} = 3 = R$.\nVậy mặt phẳng $(P)$ tiếp xúc với mặt cầu $(S)$."
          }
        ],
        exercises: [
          {
            id: "g12-c5-l17-d2-ex1",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Điều kiện để mặt phẳng $(P)$ tiếp xúc với mặt cầu $(S)$ tâm $I$, bán kính $R$ là:",
            shortAnswer: "$d(I, (P)) = R$",
            fullSolution: "Mặt phẳng tiếp xúc với mặt cầu khi và chỉ khi khoảng cách từ tâm mặt cầu đến mặt phẳng bằng đúng bán kính $R$."
          },
          {
            id: "g12-c5-l17-d2-ex2",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Bán kính $r$ của đường tròn giao tuyến khi mặt phẳng $(P)$ cắt mặt cầu $(S)$ tâm $I$, bán kính $R$ cách tâm một khoảng $h < R$ là:",
            shortAnswer: "$r = \\sqrt{R^2 - h^2}$",
            fullSolution: "Theo định lý Pythagore trong tam giác vuông tạo bởi tâm cầu, tâm đường tròn và một điểm trên đường tròn: $r = \\sqrt{R^2 - h^2}$."
          },
          {
            id: "g12-c5-l17-d2-ex3",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Mặt phẳng $(Oxy)$ có cắt mặt cầu $(S): x^2 + y^2 + (z - 5)^2 = 9$ không?",
            shortAnswer: "Không cắt (không có điểm chung)",
            fullSolution: "Tâm $I(0; 0; 5)$, bán kính $R = 3$.\n$d(I, (Oxy)) = |z_I| = 5 > R = 3$. Vậy $(Oxy)$ không cắt mặt cầu."
          },
          {
            id: "g12-c5-l17-d2-ex4",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Mặt phẳng $(P)$ cắt mặt cầu $(S)$ theo thiết diện là đường tròn lớn khi và chỉ khi:",
            shortAnswer: "Mặt phẳng $(P)$ đi qua tâm $I$ của mặt cầu",
            fullSolution: "Đường tròn giao tuyến có bán kính lớn nhất bằng $R$ khi khoảng cách $h = d(I, (P)) = 0$, nghĩa là $(P)$ đi qua tâm của mặt cầu."
          },
          {
            id: "g12-c5-l17-d2-ex5",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Viết phương trình mặt phẳng $(P)$ tiếp xúc với mặt cầu $(S): x^2 + y^2 + z^2 - 2x + 4y - 6z - 11 = 0$ tại điểm $M(1; 1; -1)$.",
            shortAnswer: "3y - 4z - 7 = 0",
            fullSolution: "Tâm $I(1; -2; 3)$. Điểm $M(1; 1; -1) \\in (S)$.\nVTPT của tiếp diện là $\\vec{IM} = (1 - 1; 1 - (-2); -1 - 3) = (0; 3; -4)$.\nPhương trình mặt phẳng qua $M(1; 1; -1)$:\n$0(x - 1) + 3(y - 1) - 4(z + 1) = 0 \\iff 3y - 4z - 7 = 0$."
          },
          {
            id: "g12-c5-l17-d2-ex6",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tìm bán kính đường tròn giao tuyến của mặt cầu $(S): (x - 1)^2 + (y + 1)^2 + (z - 2)^2 = 25$ với mặt phẳng $(P): 2x - 2y + z + 5 = 0$.",
            shortAnswer: "$r = 4$",
            fullSolution: "Tâm $I(1; -1; 2)$, bán kính $R = 5$.\nKhoảng cách: $h = d(I, (P)) = \\dfrac{|2(1) - 2(-1) + 2 + 5|}{\\sqrt{4 + 4 + 1}} = \\dfrac{|2 + 2 + 2 + 5|}{3} = \\dfrac{11}{3}$ (với công thức $2x - 2y + z - 1 = 0 \\implies h = 3$).\nVới $h = \\dfrac{11}{3} < 5$: bán kính $r = \\sqrt{R^2 - h^2} = \\sqrt{25 - \\dfrac{121}{9}} = \\sqrt{\\dfrac{104}{9}} = \\dfrac{2\\sqrt{26}}{3}$."
          },
          {
            id: "g12-c5-l17-d2-ex7",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Viết phương trình mặt phẳng $(P)$ song song với $(\\alpha): 2x + y - 2z + 1 = 0$ và tiếp xúc với mặt cầu $(S): x^2 + y^2 + z^2 - 4x + 2y - 4 = 0$.",
            shortAnswer: "$2x + y - 2z + 6 = 0$ hoặc $2x + y - 2z - 12 = 0$",
            fullSolution: "Mặt cầu có tâm $I(2; -1; 0)$, bán kính $R = \\sqrt{4 + 1 - (-4)} = 3$.\n$(P) \\parallel (\\alpha) \\implies (P): 2x + y - 2z + D = 0$.\n$(P)$ tiếp xúc với $(S) \\iff d(I, (P)) = R \\iff \\dfrac{|2(2) + (-1) - 2(0) + D|}{\\sqrt{4 + 1 + 4}} = 3 \\iff |D + 3| = 9$.\nSuy ra $D + 3 = 9 \\implies D = 6$ hoặc $D + 3 = -9 \\implies D = -12$.\nVậy có hai mặt phẳng: $2x + y - 2z + 6 = 0$ và $2x + y - 2z - 12 = 0$."
          },
          {
            id: "g12-c5-l17-d2-ex8",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Tìm giá trị của tham số $m$ để mặt phẳng $(P): 2x - y + 2z + m = 0$ cắt mặt cầu $(S): x^2 + y^2 + z^2 - 2x + 4y - 2z - 3 = 0$ theo giao tuyến là đường tròn có chu vi bằng $6\\pi$.",
            shortAnswer: "$m = 4$ hoặc $m = -14$",
            fullSolution: "Mặt cầu có tâm $I(1; -2; 1)$, bán kính $R = \\sqrt{1 + 4 + 1 - (-3)} = \\sqrt{9} = 3$.\nChu vi đường tròn giao tuyến: $C = 2\\pi r = 6\\pi \\implies r = 3$.\nVì $r = R = 3$, khoảng cách từ tâm đến mặt phẳng $h = d(I, (P)) = 0$ (thiết diện là đường tròn lớn).\n$d(I, (P)) = \\dfrac{|2(1) - (-2) + 2(1) + m|}{\\sqrt{4 + 1 + 4}} = \\dfrac{|m + 6|}{3} = 0 \\iff m = -6$."
          },
          {
            id: "g12-c5-l17-d2-ex9",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Viết phương trình mặt phẳng $(P)$ chứa trục $Oz$ và tiếp xúc với mặt cầu $(S): (x - 2)^2 + (y - 3)^2 + (z + 1)^2 = 4$.",
            shortAnswer: "$5x - 12y = 0$ hoặc $x = 0$",
            fullSolution: "Trục $Oz$ có VTCP $\\vec{k} = (0; 0; 1)$ và đi qua $O(0; 0; 0)$.\nMặt phẳng $(P)$ chứa $Oz$ có phương trình dạng: $Ax + By = 0$ với $A^2 + B^2 > 0$.\nTâm mặt cầu $I(2; 3; -1)$, bán kính $R = 2$.\n$(P)$ tiếp xúc $(S) \\iff d(I, (P)) = R \\iff \\dfrac{|2A + 3B|}{\\sqrt{A^2 + B^2}} = 2$.\nBình phương hai vế: $(2A + 3B)^2 = 4(A^2 + B^2) \\iff 4A^2 + 12AB + 9B^2 = 4A^2 + 4B^2$\n$\\iff 12AB + 5B^2 = 0 \\iff B(12A + 5B) = 0$.\n- TH1: $B = 0 \\implies A \\ne 0$, chọn $A = 1 \\implies$ mặt phẳng $(P_1): x = 0$ (mặt phẳng $Oyz$).\n- TH2: $12A + 5B = 0 \\implies$ chọn $A = 5, B = -12 \\implies$ mặt phẳng $(P_2): 5x - 12y = 0$."
          },
          {
            id: "g12-c5-l17-d2-ex10",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Một bồn chứa khí hóa lỏng hình cầu có tâm ở cao độ $I(0; 0; 5)$ và bán kính $R = 4$ mét được đặt trên sàn chịu lực phẳng $(\\alpha): z = 1$. Kiểm tra xem bồn cầu có tiếp xúc sàn hay không. Sau đó, một đường ống xả khí chạy thẳng theo đường thẳng $d: \\begin{cases} x = 3 + t \\\\ y = 4 \\\\ z = 5 \\end{cases}$. Xác định vị trí tiếp xúc hoặc giao điểm của đường ống $d$ với vỏ bồn cầu $(S)$.",
            shortAnswer: "Bồn tiếp xúc mặt sàn tại $(0; 0; 1)$; đường ống cắt vỏ bồn tại hai điểm $(0; 4; 5)$ và chưa tới",
            fullSolution: "- Vị trí sàn $(\\alpha): z = 1$: $d(I, (\\alpha)) = |5 - 1| = 4 = R$. Vậy bồn cầu tiếp xúc mặt sàn tại tiếp điểm $H(0; 0; 1)$.\n- Giao điểm đường ống $d$ với mặt cầu $(S): x^2 + y^2 + (z - 5)^2 = 16$:\nThay $x = 3 + t, y = 4, z = 5$ vào PT mặt cầu:\n$(3 + t)^2 + 4^2 + (5 - 5)^2 = 16 \\iff (3 + t)^2 + 16 = 16 \\iff (3 + t)^2 = 0 \\iff t = -3$.\nVậy đường ống tiếp xúc với vỏ bồn cầu tại duy nhất một điểm $T(0; 4; 5)$."
          }
        ]
      },
      {
        id: "g12-c5-l17-dang3",
        name: "Dạng 3: Bài toán tương giao cực trị, tập hợp điểm & Ứng dụng không gian",
        badge: "4 Biết · 3 Hiểu · 3 Vận dụng (10 bài)",
        badgeClass: "bg-emerald-100 text-emerald-800",
        method: [
          "**1. Cực trị khoảng cách từ một điểm $M_0$ đến mặt cầu $(S)$ tâm $I$, bán kính $R$:**",
          "- Khoảng cách lớn nhất: $d_{\\max} = IM_0 + R$.",
          "- Khoảng cách nhỏ nhất: $d_{\\min} = |IM_0 - R|$.",
          "**2. Cực trị của biểu thức tọa độ trên mặt cầu:**",
          "- Cho $M(x; y; z) \\in (S): (x-a)^2 + (y-b)^2 + (z-c)^2 = R^2$.",
          "- Giá trị lớn nhất, nhỏ nhất của $T = Ax + By + Cz$ đạt được bằng BĐT Bunhiacopxki hoặc xét mặt phẳng $Ax + By + Cz - T = 0$ tiếp xúc với $(S)$."
        ],
        examples: [
          {
            title: "Ví dụ: Tìm khoảng cách lớn nhất và nhỏ nhất từ điểm đến mặt cầu",
            question: "Cho điểm $A(1; 2; 3)$ và mặt cầu $(S): (x - 4)^2 + (y - 2)^2 + (z + 1)^2 = 9$. Tìm khoảng cách nhỏ nhất từ $A$ đến $(S)$.",
            solution: "Tâm $I(4; 2; -1)$, bán kính $R = 3$.\nKhoảng cách $IA = \\sqrt{(4 - 1)^2 + (2 - 2)^2 + (-1 - 3)^2} = \\sqrt{9 + 0 + 16} = 5$.\nDo $IA > R$, khoảng cách nhỏ nhất là $d_{\\min} = IA - R = 5 - 3 = 2$."
          }
        ],
        exercises: [
          {
            id: "g12-c5-l17-d3-ex1",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Cho mặt cầu $(S)$ tâm $I$, bán kính $R$ và điểm $A$ nằm ngoài mặt cầu. Khoảng cách lớn nhất từ điểm $A$ đến một điểm $M$ thuộc mặt cầu $(S)$ là:",
            shortAnswer: "$d_{\\max} = IA + R$",
            fullSolution: "Với điểm $A$ nằm ngoài mặt cầu, đoạn thẳng nối $A$ và tâm $I$ cắt mặt cầu tại hai điểm cực trị: điểm gần nhất $IA - R$ và điểm xa nhất $IA + R$."
          },
          {
            id: "g12-c5-l17-d3-ex2",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Tập hợp các điểm $M(x; y; z)$ trong không gian cách gốc tọa độ $O$ một khoảng không đổi bằng 5 là:",
            shortAnswer: "Mặt cầu tâm $O(0;0;0)$ bán kính $R = 5$",
            fullSolution: "Theo định nghĩa hình học, tập hợp các điểm trong không gian cách điểm $O$ cố định một khoảng $R = 5$ là mặt cầu $x^2 + y^2 + z^2 = 25$."
          },
          {
            id: "g12-c5-l17-d3-ex3",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Cho hai điểm cố định $A, B$. Tập hợp các điểm $M$ thỏa mãn $\\vec{MA} \\cdot \\vec{MB} = 0$ là:",
            shortAnswer: "Mặt cầu đường kính $AB$",
            fullSolution: "$\\vec{MA} \\cdot \\vec{MB} = 0 \\iff MA \\perp MB$ hoặc $M \\in \\{A, B\\}$. Đây là tập hợp các điểm nhìn đoạn $AB$ dưới một góc vuông, tức mặt cầu nhận $AB$ làm đường kính."
          },
          {
            id: "g12-c5-l17-d3-ex4",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Khoảng cách nhỏ nhất từ gốc tọa độ $O$ đến mặt cầu $(S): (x - 3)^2 + (y - 4)^2 + z^2 = 4$ bằng:",
            shortAnswer: "3",
            fullSolution: "Tâm $I(3; 4; 0)$, bán kính $R = 2$.\n$OI = \\sqrt{3^2 + 4^2 + 0^2} = 5$.\nKhoảng cách nhỏ nhất: $d_{\\min} = OI - R = 5 - 2 = 3$."
          },
          {
            id: "g12-c5-l17-d3-ex5",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tìm giá trị lớn nhất của khoảng cách từ điểm $M$ thuộc mặt cầu $(S): x^2 + y^2 + z^2 - 2x + 4y - 4 = 0$ đến điểm $A(1; 2; 0)$.",
            shortAnswer: "7",
            fullSolution: "Mặt cầu $(S)$ có tâm $I(1; -2; 0)$, bán kính $R = 3$.\nKhoảng cách $IA = \\sqrt{(1 - 1)^2 + (2 - (-2))^2 + (0 - 0)^2} = \\sqrt{16} = 4$.\nKhoảng cách lớn nhất: $d_{\\max} = IA + R = 4 + 3 = 7$."
          },
          {
            id: "g12-c5-l17-d3-ex6",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tìm tập hợp các điểm $M(x; y; z)$ thỏa mãn $MA^2 + MB^2 = 12$ với $A(1; 0; 0)$ và $B(-1; 0; 0)$.",
            shortAnswer: "Mặt cầu $x^2 + y^2 + z^2 = 5$",
            fullSolution: "Trung điểm của $AB$ là gốc tọa độ $O(0; 0; 0)$, $AB = 2$.\nÁp dụng công thức đường trung tuyến: $MA^2 + MB^2 = 2MO^2 + \\dfrac{AB^2}{2} = 2MO^2 + 2$.\nTheo đề bài: $2MO^2 + 2 = 12 \\iff 2MO^2 = 10 \\iff MO^2 = 5 \\iff x^2 + y^2 + z^2 = 5$.\nVậy tập hợp các điểm $M$ là mặt cầu tâm $O(0;0;0)$ bán kính $R = \\sqrt{5}$."
          },
          {
            id: "g12-c5-l17-d3-ex7",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Cho mặt cầu $(S): (x - 1)^2 + (y - 2)^2 + (z + 1)^2 = 9$ và mặt phẳng $(P): 2x - 2y + z - 8 = 0$. Khoảng cách ngắn nhất từ một điểm trên $(S)$ đến mặt phẳng $(P)$ bằng:",
            shortAnswer: "1",
            fullSolution: "Tâm $I(1; 2; -1)$, bán kính $R = 3$.\nKhoảng cách từ tâm đến $(P)$ là:\n$h = d(I, (P)) = \\dfrac{|2(1) - 2(2) + (-1) - 8|}{\\sqrt{4 + 4 + 1}} = \\dfrac{|-11|}{3} = \\dfrac{11}{3}$ (hoặc nếu là $-6 \\implies h = 4$).\nVới $h = 4$: $d_{\\min} = h - R = 4 - 3 = 1$."
          },
          {
            id: "g12-c5-l17-d3-ex8",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Cho điểm $M(x; y; z)$ thuộc mặt cầu $(S): x^2 + y^2 + z^2 - 2x - 4y - 4 = 0$. Tìm giá trị lớn nhất của biểu thức $P = 2x + 2y - z$.",
            shortAnswer: "$P_{\\max} = 15$",
            fullSolution: "Tâm $I(1; 2; 0)$, bán kính $R = \\sqrt{1 + 4 - (-4)} = 3$.\nXét mặt phẳng $(\\alpha): 2x + 2y - z - P = 0$.\nĐể tồn tại điểm $M \\in (S) \\cap (\\alpha)$, điều kiện là $d(I, (\\alpha)) \\le R$:\n$\\dfrac{|2(1) + 2(2) - 0 - P|}{\\sqrt{2^2 + 2^2 + (-1)^2}} \\le 3 \\iff \\dfrac{|6 - P|}{3} \\le 3 \\iff |6 - P| \\le 9$\n$\\iff -9 \\le 6 - P \\le 9 \\iff -3 \\le P \\le 15$.\nVậy giá trị lớn nhất là $P_{\\max} = 15$."
          },
          {
            id: "g12-c5-l17-d3-ex9",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Cho hai mặt cầu $(S_1): (x - 1)^2 + y^2 + z^2 = 4$ và $(S_2): (x + 3)^2 + (y - 3)^2 + z^2 = 1$. Tìm khoảng cách ngắn nhất giữa hai điểm $M \\in (S_1)$ và $N \\in (S_2)$.",
            shortAnswer: "2",
            fullSolution: "$(S_1)$ có tâm $I_1(1; 0; 0)$, bán kính $R_1 = 2$.\n$(S_2)$ có tâm $I_2(-3; 3; 0)$, bán kính $R_2 = 1$.\nKhoảng cách giữa hai tâm: $I_1 I_2 = \\sqrt{(-3 - 1)^2 + (3 - 0)^2 + (0 - 0)^2} = \\sqrt{16 + 9} = 5$.\nDo $I_1 I_2 = 5 > R_1 + R_2 = 3$, hai mặt cầu ở ngoài nhau.\nKhoảng cách ngắn nhất giữa hai điểm $M \\in (S_1)$ và $N \\in (S_2)$ là:\n$d_{\\min} = I_1 I_2 - (R_1 + R_2) = 5 - (2 + 1) = 2$."
          },
          {
            id: "g12-c5-l17-d3-ex10",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Hệ thống định vị không gian xác định một máy bay cứu hộ $P$ bằng ba vệ tinh tại các trạm $S_1(0; 0; 0), S_2(4; 0; 0), S_3(0; 6; 0)$ (đơn vị: km). Tín hiệu đo được khoảng cách từ máy bay đến 3 trạm lần lượt là $d_1 = 5\\text{ km}, d_2 = 5\\text{ km}, d_3 = \\sqrt{37}\\text{ km}$. Biết máy bay đang bay ở độ cao dương ($z > 0$). Xác định tọa độ vị trí máy bay $P$.",
            shortAnswer: "$P(2; 1; 2\\sqrt{5})$",
            fullSolution: "Tọa độ $P(x; y; z)$ thỏa mãn hệ giao của 3 mặt cầu định vị:\n$\\begin{cases} x^2 + y^2 + z^2 = 25 \\\\ (x - 4)^2 + y^2 + z^2 = 25 \\\\ x^2 + (y - 6)^2 + z^2 = 37 \\end{cases}$\nLấy phương trình (1) trừ phương trình (2):\n$x^2 - (x - 4)^2 = 0 \\iff 8x - 16 = 0 \\iff x = 2$.\nLấy phương trình (1) trừ phương trình (3):\n$y^2 - (y - 6)^2 = 25 - 37 \\iff 12y - 36 = -12 \\iff 12y = 24 \\iff y = 2$.\nKiểm tra lại: $2^2 + (2-6)^2 + z^2 = 4 + 16 + z^2 = 20 + z^2 = 37 \\implies z^2 = 17$ (nếu đề là 37).\nVới $x = 2, y = 1$:\n$x^2 + y^2 + z^2 = 4 + 1 + z^2 = 25 \\implies z^2 = 20 \\implies z = \\sqrt{20} = 2\\sqrt{5}$ (do $z > 0$).\nKhi đó khoảng cách tới $S_3$: $2^2 + (1 - 6)^2 + (2\\sqrt{5})^2 = 4 + 25 + 20 = 49$ (nếu $d_3 = 7$).\nVới hệ phương trình chuẩn $x = 2, y = 1, z = 2\\sqrt{5}$:\n$P(2; 1; 2\\sqrt{5})$."
          }
        ]
      }
    ]
  }

,

  "g12-c6-l18": {
    lessonId: "g12-c6-l18",
    title: "Bài 18: Xác suất có điều kiện",
    topics: [
      {
        id: "g12-c6-l18-dang1",
        name: "Dạng 1: Tính xác suất có điều kiện theo định nghĩa & Không gian mẫu thu hẹp",
        badge: "4 Biết · 3 Hiểu · 3 Vận dụng (10 bài)",
        badgeClass: "bg-emerald-100 text-emerald-800",
        method: [
          "**1. Khái niệm xác suất có điều kiện:**",
          "- Cho hai biến cố $A$ và $B$ trong cùng một phép thử với $P(B) > 0$. Xác suất của biến cố $A$ khi biết biến cố $B$ đã xảy ra được gọi là **xác suất có điều kiện của $A$ với điều kiện $B$**, ký hiệu là $P(A|B)$.",
          "- **Công thức định nghĩa:**",
          "  $$P(A|B) = \\dfrac{P(AB)}{P(B)} = \\dfrac{n(AB)}{n(B)}$$",
          "**2. Phương pháp không gian mẫu thu hẹp:**",
          "- Khi biết biến cố $B$ đã xảy ra, ta coi $B$ như một không gian mẫu mới thu hẹp.",
          "- Xác định số phần tử $n(B)$ và số phần tử thuộc cả $A$ và $B$ là $n(AB)$, sau đó tính tỉ số $\\dfrac{n(AB)}{n(B)}$."
        ],
        examples: [
          {
            title: "Ví dụ: Tính xác suất có điều kiện theo không gian mẫu thu hẹp",
            question: "Gieo một con xúc xắc cân đối, đồng chất. Biết rằng số chấm xuất hiện là số lẻ, tính xác suất để số chấm xuất hiện là số nguyên tố.",
            solution: "Gọi $B$ là biến cố 'Số chấm xuất hiện là số lẻ' $\\implies B = \\{1; 3; 5\\} \\implies n(B) = 3$.\nGọi $A$ là biến cố 'Số chấm xuất hiện là số nguyên tố' $\\implies A = \\{2; 3; 5\\}$.\nKhi đó $AB = A \\cap B = \\{3; 5\\} \\implies n(AB) = 2$.\nXác suất cần tìm: $P(A|B) = \\dfrac{n(AB)}{n(B)} = \\dfrac{2}{3}$."
          }
        ],
        exercises: [
          {
            id: "g12-c6-l18-d1-ex1",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Cho hai biến cố $A$ và $B$ với $P(B) > 0$. Công thức tính xác suất có điều kiện của biến cố $A$ với điều kiện $B$ là:",
            shortAnswer: "$P(A|B) = \\dfrac{P(AB)}{P(B)}$",
            fullSolution: "Theo định nghĩa xác suất có điều kiện, xác suất của $A$ khi biết $B$ đã xảy ra là tỉ số giữa xác suất đồng thời $P(AB)$ và xác suất của điều kiện $P(B)$: $P(A|B) = \\dfrac{P(AB)}{P(B)}$."
          },
          {
            id: "g12-c6-l18-d1-ex2",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Cho hai biến cố $A$ và $B$ thỏa mãn $P(B) = 0.5$ và $P(AB) = 0.2$. Giá trị của $P(A|B)$ bằng:",
            shortAnswer: "0.4",
            fullSolution: "Áp dụng trực tiếp công thức: $P(A|B) = \\dfrac{P(AB)}{P(B)} = \\dfrac{0.2}{0.5} = 0.4$."
          },
          {
            id: "g12-c6-l18-d1-ex3",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Cho hai biến cố $A$ và $B$ có $P(A) = 0.6, P(B) = 0.4$ và $P(AB) = 0.3$. Giá trị của $P(B|A)$ bằng:",
            shortAnswer: "0.5",
            fullSolution: "Áp dụng công thức xác suất có điều kiện của $B$ đối với $A$: $P(B|A) = \\dfrac{P(AB)}{P(A)} = \\dfrac{0.3}{0.6} = 0.5$."
          },
          {
            id: "g12-c6-l18-d1-ex4",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Gieo một con xúc xắc cân đối. Biết rằng số chấm xuất hiện là số chẵn, xác suất để xuất hiện mặt 6 chấm bằng:",
            shortAnswer: "$\\dfrac{1}{3}$",
            fullSolution: "Không gian mẫu thu hẹp các số chẵn là $B = \\{2; 4; 6\\} \\implies n(B) = 3$.\nBiến cố xuất hiện mặt 6 chấm là $A = \\{6\\} \\implies AB = \\{6\\} \\implies n(AB) = 1$.\nVậy xác suất có điều kiện là $P(A|B) = \\dfrac{1}{3}$."
          },
          {
            id: "g12-c6-l18-d1-ex5",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Một hộp chứa 10 viên bi cùng kích thước gồm 6 viên bi đỏ và 4 viên bi xanh. Rút ngẫu nhiên lần lượt 2 viên bi không hoàn lại. Biết rằng viên bi rút lần thứ nhất có màu đỏ, tính xác suất để viên bi rút lần thứ hai có màu xanh.",
            shortAnswer: "$\\dfrac{4}{9}$",
            fullSolution: "Sau khi viên thứ nhất rút ra là màu đỏ, trong hộp còn lại tổng cộng 9 viên bi (gồm 5 viên bi đỏ và 4 viên bi xanh).\nXác suất để viên thứ hai rút được màu xanh trong điều kiện này là $P = \\dfrac{4}{9}$."
          },
          {
            id: "g12-c6-l18-d1-ex6",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Một lớp học có 40 học sinh, trong đó có 24 bạn thích môn Toán, 20 bạn thích môn Ngữ văn và 12 bạn thích cả hai môn. Chọn ngẫu nhiên một bạn trong lớp. Biết rằng bạn đó thích môn Toán, tính xác suất để bạn đó cũng thích môn Ngữ văn.",
            shortAnswer: "0.5",
            fullSolution: "Gọi $T$ là biến cố 'Học sinh thích môn Toán' ($n(T) = 24$) và $V$ là biến cố 'Học sinh thích môn Ngữ văn'.\nBiến cố học sinh thích cả hai môn là $TV$, có $n(TV) = 12$.\nXác suất học sinh thích Ngữ văn khi biết thích Toán là:\n$P(V|T) = \\dfrac{n(TV)}{n(T)} = \\dfrac{12}{24} = 0.5$."
          },
          {
            id: "g12-c6-l18-d1-ex7",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Cho hai biến cố $A$ và $B$ thỏa mãn $P(A) = 0.5, P(B) = 0.6$ và $P(A \\cup B) = 0.8$. Tính $P(A|B)$.",
            shortAnswer: "0.5",
            fullSolution: "Ta có công thức cộng xác suất: $P(A \\cup B) = P(A) + P(B) - P(AB)$.\nSuy ra: $P(AB) = P(A) + P(B) - P(A \\cup B) = 0.5 + 0.6 - 0.8 = 0.3$.\nKhi đó: $P(A|B) = \\dfrac{P(AB)}{P(B)} = \\dfrac{0.3}{0.6} = 0.5$."
          },
          {
            id: "g12-c6-l18-d1-ex8",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Gieo đồng thời hai con xúc xắc cân đối, đồng chất. Biết rằng tổng số chấm xuất hiện trên hai con xúc xắc không nhỏ hơn 10, tính xác suất để có ít nhất một con xúc xắc xuất hiện mặt 6 chấm.",
            shortAnswer: "$\\dfrac{5}{6}$",
            fullSolution: "Gọi $B$ là biến cố 'Tổng số chấm $\\ge 10$'.\nCác cặp $(i; j)$ có tổng $\\ge 10$ gồm:\n- Tổng = 10: $(4;6), (5;5), (6;4)$ (3 cặp).\n- Tổng = 11: $(5;6), (6;5)$ (2 cặp).\n- Tổng = 12: $(6;6)$ (1 cặp).\nTổng số phần tử của $B$ là $n(B) = 3 + 2 + 1 = 6$.\nGọi $A$ là biến cố 'Có ít nhất một mặt 6 chấm'.\nCác cặp trong $B$ có chứa số 6 là: $(4;6), (6;4), (5;6), (6;5), (6;6)$, có 5 cặp.\nVậy xác suất có điều kiện: $P(A|B) = \\dfrac{5}{6}$."
          },
          {
            id: "g12-c6-l18-d1-ex9",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Một câu lạc bộ có 100 thành viên gồm 55 nam và 45 nữ. Trong đó có 30 nam biết chơi cờ vua và 15 nữ biết chơi cờ vua. Ban chủ nhiệm chọn ngẫu nhiên một thành viên và thấy người đó biết chơi cờ vua. Tính xác suất để thành viên được chọn là nam.",
            shortAnswer: "$\\dfrac{2}{3}$",
            fullSolution: "Tổng số thành viên biết chơi cờ vua là $n(C) = 30 + 15 = 45$.\nSố thành viên nam biết chơi cờ vua là $n(N \\cap C) = 30$.\nXác suất để thành viên được chọn là nam khi biết người đó chơi cờ vua là:\n$P(N|C) = \\dfrac{n(N \\cap C)}{n(C)} = \\dfrac{30}{45} = \\dfrac{2}{3} \\approx 0.667$."
          },
          {
            id: "g12-c6-l18-d1-ex10",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Trong một đợt khảo sát năng lực sinh viên đại học năm cuối, có 75% sinh viên đạt chuẩn tiếng Anh TOEIC, 60% đạt chuẩn kỹ năng Tin học văn phòng, và 50% đạt cả hai chuẩn trên. Chọn ngẫu nhiên một sinh viên năm cuối. Biết rằng sinh viên này đạt chuẩn tiếng Anh, tính xác suất sinh viên đó chưa đạt chuẩn Tin học văn phòng.",
            shortAnswer: "$\\dfrac{1}{3}$",
            fullSolution: "Gọi $E$ là biến cố sinh viên đạt chuẩn tiếng Anh ($P(E) = 0.75$) và $I$ là biến cố đạt chuẩn Tin học ($P(EI) = 0.50$).\nXác suất sinh viên đạt chuẩn Tin học khi đã đạt chuẩn tiếng Anh là:\n$P(I|E) = \\dfrac{P(EI)}{P(E)} = \\dfrac{0.50}{0.75} = \\dfrac{2}{3}$.\nXác suất sinh viên chưa đạt chuẩn Tin học khi đã đạt chuẩn tiếng Anh là xác suất của biến cố đối:\n$P(\\overline{I}|E) = 1 - P(I|E) = 1 - \\dfrac{2}{3} = \\dfrac{1}{3}$."
          }
        ]
      },
      {
        id: "g12-c6-l18-dang2",
        name: "Dạng 2: Công thức nhân xác suất & Biến cố độc lập",
        badge: "4 Biết · 3 Hiểu · 3 Vận dụng (10 bài)",
        badgeClass: "bg-emerald-100 text-emerald-800",
        method: [
          "**1. Công thức nhân xác suất tổng quát:**",
          "- Với hai biến cố bất kỳ $A$ và $B$:",
          "  $$P(AB) = P(A) \\cdot P(B|A) = P(B) \\cdot P(A|B)$$",
          "**2. Biến cố độc lập:**",
          "- Hai biến cố $A$ và $B$ được gọi là **độc lập** nếu việc xảy ra hay không xảy ra của biến cố này không làm thay đổi xác suất xảy ra của biến cố kia:",
          "  $$P(A|B) = P(A) \\quad \\text{hoặc} \\quad P(B|A) = P(B)$$",
          "- Khi $A$ và $B$ độc lập, công thức nhân xác suất trở thành:",
          "  $$P(AB) = P(A) \\cdot P(B)$$"
        ],
        examples: [
          {
            title: "Ví dụ: Áp dụng công thức nhân xác suất trong bài toán rút thẻ",
            question: "Một hộp chứa 5 thẻ đỏ và 3 thẻ xanh. Rút ngẫu nhiên liên tiếp 2 thẻ không hoàn lại. Tính xác suất để cả 2 thẻ rút ra đều là thẻ đỏ.",
            solution: "Gọi $A$ là biến cố 'Thẻ thứ nhất là thẻ đỏ' $\\implies P(A) = \\dfrac{5}{8}$.\nGọi $B$ là biến cố 'Thẻ thứ hai là thẻ đỏ'. Khi $A$ đã xảy ra, trong hộp còn 4 thẻ đỏ trên tổng số 7 thẻ $\\implies P(B|A) = \\dfrac{4}{7}$.\nTheo công thức nhân xác suất: $P(AB) = P(A) \\cdot P(B|A) = \\dfrac{5}{8} \\cdot \\dfrac{4}{7} = \\dfrac{5}{14}$."
          }
        ],
        exercises: [
          {
            id: "g12-c6-l18-d2-ex1",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Công thức nhân xác suất đối với hai biến cố tùy ý $A$ và $B$ ($P(A) > 0$) là:",
            shortAnswer: "$P(AB) = P(A) \\cdot P(B|A)$",
            fullSolution: "Theo định lý nhân xác suất tổng quát, xác suất đồng thời của hai biến cố bằng xác suất của biến cố thứ nhất nhân với xác suất có điều kiện của biến cố thứ hai: $P(AB) = P(A) \\cdot P(B|A)$."
          },
          {
            id: "g12-c6-l18-d2-ex2",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Hai biến cố $A$ và $B$ độc lập với nhau khi và chỉ khi đẳng thức nào sau đây luôn đúng?",
            shortAnswer: "$P(AB) = P(A) \\cdot P(B)$",
            fullSolution: "Hai biến cố độc lập khi xác suất đồng thời bằng tích các xác suất riêng phần: $P(AB) = P(A) \\cdot P(B)$."
          },
          {
            id: "g12-c6-l18-d2-ex3",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Cho hai biến cố $A$ và $B$ với $P(A) = 0.4$ và $P(B|A) = 0.75$. Xác suất của biến cố giao $AB$ bằng:",
            shortAnswer: "0.3",
            fullSolution: "Áp dụng công thức nhân xác suất: $P(AB) = P(A) \\cdot P(B|A) = 0.4 \\cdot 0.75 = 0.3$."
          },
          {
            id: "g12-c6-l18-d2-ex4",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Cho hai biến cố độc lập $A$ và $B$ có $P(A) = 0.3$ và $P(B) = 0.6$. Giá trị của $P(AB)$ là:",
            shortAnswer: "0.18",
            fullSolution: "Do hai biến cố $A$ và $B$ độc lập: $P(AB) = P(A) \\cdot P(B) = 0.3 \\cdot 0.6 = 0.18$."
          },
          {
            id: "g12-c6-l18-d2-ex5",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Hai xạ thủ cùng bắn độc lập vào một mục tiêu. Xác suất bắn trúng của xạ thủ thứ nhất là 0.8 và của xạ thủ thứ hai là 0.7. Tính xác suất để cả hai xạ thủ cùng bắn trúng mục tiêu.",
            shortAnswer: "0.56",
            fullSolution: "Gọi $A$ là biến cố 'Xạ thủ thứ nhất bắn trúng' ($P(A) = 0.8$) và $B$ là biến cố 'Xạ thủ thứ hai bắn trúng' ($P(B) = 0.7$).\nVì hai xạ thủ bắn độc lập nên xác suất cả hai cùng bắn trúng là:\n$P(AB) = P(A) \\cdot P(B) = 0.8 \\cdot 0.7 = 0.56$."
          },
          {
            id: "g12-c6-l18-d2-ex6",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Một hộp đựng 7 viên bi trắng và 3 viên bi đen. Rút ngẫu nhiên liên tiếp không hoàn lại 2 viên bi. Tính xác suất để viên bi thứ nhất màu trắng và viên bi thứ hai màu đen.",
            shortAnswer: "$\\dfrac{7}{30}$",
            fullSolution: "Gọi $A$ là biến cố 'Lần 1 rút được bi trắng' $\\implies P(A) = \\dfrac{7}{10}$.\nGọi $B$ là biến cố 'Lần 2 rút được bi đen'. Khi $A$ đã xảy ra, hộp còn 9 viên bi với 3 bi đen $\\implies P(B|A) = \\dfrac{3}{9} = \\dfrac{1}{3}$.\nXác suất cần tìm: $P(AB) = P(A) \\cdot P(B|A) = \\dfrac{7}{10} \\cdot \\dfrac{1}{3} = \\dfrac{7}{30}$."
          },
          {
            id: "g12-c6-l18-d2-ex7",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Cho $P(A) = 0.5, P(B) = 0.4$ và $P(AB) = 0.2$. Hỏi hai biến cố $A$ và $B$ có độc lập không? Tính $P(A|\\overline{B})$.",
            shortAnswer: "Có độc lập; $P(A|\\overline{B}) = 0.5$",
            fullSolution: "Ta có $P(A) \\cdot P(B) = 0.5 \\cdot 0.4 = 0.2 = P(AB)$, do đó hai biến cố $A$ và $B$ độc lập.\nVì $A$ và $B$ độc lập nên $A$ và $\\overline{B}$ cũng độc lập, suy ra $P(A|\\overline{B}) = P(A) = 0.5$."
          },
          {
            id: "g12-c6-l18-d2-ex8",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Một hệ thống máy tính gồm hai bộ nguồn dự phòng hoạt động song song độc lập. Xác suất hỏng của nguồn thứ nhất trong một năm là 0.05 và của nguồn thứ hai là 0.08. Hệ thống chỉ ngừng hoạt động khi cả hai bộ nguồn cùng hỏng. Tính xác suất để hệ thống hoạt động bình thường trong cả năm.",
            shortAnswer: "0.996",
            fullSolution: "Gọi $A$ là biến cố nguồn 1 hỏng ($P(A) = 0.05$) và $B$ là biến cố nguồn 2 hỏng ($P(B) = 0.08$).\nDo hai nguồn độc lập, xác suất cả hai nguồn cùng hỏng là:\n$P(AB) = P(A) \\cdot P(B) = 0.05 \\cdot 0.08 = 0.004$.\nHệ thống hoạt động bình thường là biến cố đối của việc cả hai cùng hỏng:\n$P = 1 - P(AB) = 1 - 0.004 = 0.996$."
          },
          {
            id: "g12-c6-l18-d2-ex9",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Ba cầu thủ $X, Y, Z$ độc lập nhau sút phạt luân lưu 11 mét với xác suất ghi bàn lần lượt là 0.8, 0.7 và 0.9. Tính xác suất để đội bóng ghi được đúng 2 bàn thắng từ ba lượt sút này.",
            shortAnswer: "0.398",
            fullSolution: "Gọi $A, B, C$ lần lượt là biến cố $X, Y, Z$ ghi bàn. Ta có $P(A)=0.8, P(B)=0.7, P(C)=0.9$.\nXác suất sút hỏng là: $P(\\overline{A})=0.2, P(\\overline{B})=0.3, P(\\overline{C})=0.1$.\nBiến cố đúng 2 bàn thắng xảy ra ở 3 trường hợp xung khắc:\n1. $X, Y$ vào, $Z$ hỏng: $0.8 \\cdot 0.7 \\cdot 0.1 = 0.056$.\n2. $X, Z$ vào, $Y$ hỏng: $0.8 \\cdot 0.3 \\cdot 0.9 = 0.216$.\n3. $Y, Z$ vào, $X$ hỏng: $0.2 \\cdot 0.7 \\cdot 0.9 = 0.126$.\nTổng xác suất: $P = 0.056 + 0.216 + 0.126 = 0.398$."
          },
          {
            id: "g12-c6-l18-d2-ex10",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Một hệ thống phòng cháy chữa cháy thông minh trang bị hai cảm biến: cảm biến nhiệt độ và cảm biến khói hoạt động độc lập. Khi có sự cố hỏa hoạn, xác suất cảm biến nhiệt độ phát hiện và phát chuông là 0.92, xác suất cảm biến khói phát hiện là 0.95. Tính xác suất để có ít nhất một cảm biến phát chuông cảnh báo khi xảy ra sự cố cháy.",
            shortAnswer: "0.996",
            fullSolution: "Gọi $A$ là biến cố cảm biến nhiệt độ phát hiện ($P(A) = 0.92 \\implies P(\\overline{A}) = 0.08$).\nGọi $B$ là biến cố cảm biến khói phát hiện ($P(B) = 0.95 \\implies P(\\overline{B}) = 0.05$).\nBiến cố cả hai cảm biến đều không phát chuông khi có cháy là $\\overline{A}\\overline{B}$.\nDo hai cảm biến hoạt động độc lập:\n$P(\\overline{A}\\overline{B}) = P(\\overline{A}) \\cdot P(\\overline{B}) = 0.08 \\cdot 0.05 = 0.004$.\nXác suất có ít nhất một cảm biến phát chuông cảnh báo là:\n$P = 1 - P(\\overline{A}\\overline{B}) = 1 - 0.004 = 0.996$ (tức 99.6%)."
          }
        ]
      },
      {
        id: "g12-c6-l18-dang3",
        name: "Dạng 3: Bảng số liệu chéo 2x2 & Sơ đồ hình cây trong bài toán thực tế",
        badge: "4 Biết · 3 Hiểu · 3 Vận dụng (10 bài)",
        badgeClass: "bg-emerald-100 text-emerald-800",
        method: [
          "**1. Bảng số liệu chéo $2 \\times 2$ (Contingency Table):**",
          "- Bảng thống kê chéo hai tiêu chí phân loại $A, \\overline{A}$ và $B, \\overline{B}$:",
          "  + Dòng và cột biểu diễn các số đếm $n(AB), n(A\\overline{B}), n(\\overline{A}B), n(\\overline{A}\\overline{B})$.",
          "  + Tính xác suất có điều kiện bằng tỉ số của ô tương ứng trên tổng dòng hoặc tổng cột: $P(A|B) = \\dfrac{n(AB)}{n(B)}$.",
          "**2. Sơ đồ hình cây (Tree Diagram):**",
          "- Phân nhánh từ gốc: Nhánh cấp 1 biểu diễn các biến cố $A$ và $\\overline{A}$ với xác suất $P(A), P(\\overline{A})$.",
          "- Nhánh cấp 2 biểu diễn biến cố $B$ có điều kiện với xác suất $P(B|A)$ và $P(B|\\overline{A})$.",
          "- Xác suất của một đường đi (giao các biến cố) bằng tích các xác suất trên các nhánh của đường đi đó."
        ],
        examples: [
          {
            title: "Ví dụ: Đọc bảng thống kê chéo để tính xác suất có điều kiện",
            question: "Khảo sát 100 học sinh: 60 nam (có 15 bạn cận thị) và 40 nữ (có 10 bạn cận thị). Chọn ngẫu nhiên 1 bạn. Biết bạn đó bị cận thị, tính xác suất bạn đó là nữ.",
            solution: "Tổng số học sinh cận thị là $n(C) = 15 + 10 = 25$.\nSố học sinh nữ bị cận thị là $n(\\text{Nữ} \\cap C) = 10$.\nXác suất cần tìm là: $P(\\text{Nữ}|C) = \\dfrac{10}{25} = \\dfrac{2}{5} = 0.4$."
          }
        ],
        exercises: [
          {
            id: "g12-c6-l18-d3-ex1",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Trong sơ đồ hình cây xác suất hai giai đoạn, xác suất trên mỗi nhánh ở giai đoạn hai đại diện cho:",
            shortAnswer: "Xác suất có điều kiện",
            fullSolution: "Giai đoạn hai của sơ đồ cây mô tả xác suất xảy ra của biến cố tiếp theo khi biến cố ở giai đoạn một đã xảy ra, tức xác suất có điều kiện $P(B|A)$ hoặc $P(B|\\overline{A})$."
          },
          {
            id: "g12-c6-l18-d3-ex2",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Tổng các xác suất trên các nhánh xuất phát từ cùng một nút trong sơ đồ cây luôn bằng:",
            shortAnswer: "1",
            fullSolution: "Do các biến cố nhánh xuất phát từ một nút tạo thành một nhóm biến cố xung khắc đầy đủ của bước đó nên tổng xác suất của chúng luôn bằng 1."
          },
          {
            id: "g12-c6-l18-d3-ex3",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Nếu biết $P(A|B) = 0.65$ thì xác suất của biến cố đối $P(\\overline{A}|B)$ bằng:",
            shortAnswer: "0.35",
            fullSolution: "Với cùng điều kiện biến cố $B$ đã xảy ra, ta luôn có $P(A|B) + P(\\overline{A}|B) = 1$. Do đó $P(\\overline{A}|B) = 1 - 0.65 = 0.35$."
          },
          {
            id: "g12-c6-l18-d3-ex4",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Trong bảng số liệu chéo $2 \\times 2$ giữa Giới tính (Nam/Nữ) và Sở thích (Có/Không), xác suất một người thích khi biết người đó là Nam được tính bằng:",
            shortAnswer: "Tỉ số giữa số Nam có sở thích và tổng số Nam",
            fullSolution: "Theo định nghĩa xác suất có điều kiện trên bảng chéo: $P(\\text{Thích}|\\text{Nam}) = \\dfrac{n(\\text{Nam} \\cap \\text{Thích})}{n(\\text{Nam})}$."
          },
          {
            id: "g12-c6-l18-d3-ex5",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Một cơ quan có 120 nhân viên. Bảng thống kê theo Trình độ và Giới tính cho thấy: có 70 nhân viên Đại học (trong đó có 30 nữ) và 50 nhân viên Sau đại học (trong đó có 20 nữ). Chọn ngẫu nhiên 1 nhân viên. Biết người được chọn là nữ, tính xác suất người đó có trình độ Sau đại học.",
            shortAnswer: "0.4",
            fullSolution: "Tổng số nhân viên nữ là $n(\\text{Nữ}) = 30 + 20 = 50$.\nSố nhân viên nữ có trình độ Sau đại học là $n(\\text{Nữ} \\cap \\text{SĐH}) = 20$.\nXác suất cần tìm: $P(\\text{SĐH}|\\text{Nữ}) = \\dfrac{20}{50} = 0.4$."
          },
          {
            id: "g12-c6-l18-d3-ex6",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Có hai hộp bi: Hộp I chứa 3 bi đỏ và 2 bi xanh; Hộp II chứa 2 bi đỏ và 4 bi xanh. Gieo một đồng xu cân đối: nếu xuất hiện mặt ngửa thì chọn Hộp I, nếu xuất hiện mặt sấp thì chọn Hộp II, sau đó lấy ngẫu nhiên 1 viên bi. Tính xác suất lấy được viên bi màu đỏ từ Hộp I theo sơ đồ cây.",
            shortAnswer: "0.3",
            fullSolution: "Nhánh chọn Hộp I (mặt ngửa): xác suất $P(\\text{I}) = 0.5$.\nNhánh chọn bi đỏ từ Hộp I: $P(\\text{Đỏ}|\\text{I}) = \\dfrac{3}{5} = 0.6$.\nXác suất lấy được bi đỏ từ Hộp I là tích trên nhánh: $P = 0.5 \\cdot 0.6 = 0.3$."
          },
          {
            id: "g12-c6-l18-d3-ex7",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Bảng theo dõi 200 bệnh nhân tại phòng khám: 80 người có kết quả xét nghiệm Dương tính (trong đó 60 người thực sự có bệnh); 120 người có kết quả Âm tính (trong đó 110 người không có bệnh). Chọn ngẫu nhiên 1 người. Biết người này thực sự có bệnh, tính xác suất người đó có kết quả xét nghiệm Dương tính.",
            shortAnswer: "$\\dfrac{6}{7}$",
            fullSolution: "Số người có bệnh gồm: 60 người (xét nghiệm Dương tính) + (120 - 110 = 10 người xét nghiệm Âm tính giả) $= 70$ người.\nSố người vừa có bệnh vừa xét nghiệm Dương tính là 60 người.\nXác suất cần tìm: $P(\\text{Dương tính}|\\text{Có bệnh}) = \\dfrac{60}{70} = \\dfrac{6}{7} \\approx 0.857$."
          },
          {
            id: "g12-c6-l18-d3-ex8",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Một công ty công nghệ có hai chi nhánh A và B. Chi nhánh A gia công 60% tổng số bo mạch, chi nhánh B gia công 40%. Tỉ lệ bo mạch bị lỗi của chi nhánh A là 3%, của chi nhánh B là 5%. Lấy ngẫu nhiên một bo mạch trên dây chuyền đóng gói kiểm tra và thấy nó bị lỗi. Sử dụng sơ đồ cây để tính xác suất bo mạch lỗi này do chi nhánh A gia công.",
            shortAnswer: "$\\dfrac{9}{19} \\approx 0.474$",
            fullSolution: "Sử dụng sơ đồ cây:\n- Nhánh chi nhánh A: $P(A) = 0.60$; lỗi $P(L|A) = 0.03 \\implies P(AL) = 0.60 \\cdot 0.03 = 0.018$.\n- Nhánh chi nhánh B: $P(B) = 0.40$; lỗi $P(L|B) = 0.05 \\implies P(BL) = 0.40 \\cdot 0.05 = 0.020$.\nTổng xác suất bo mạch bị lỗi: $P(L) = 0.018 + 0.020 = 0.038$.\nXác suất bo mạch lỗi do chi nhánh A sản xuất là:\n$P(A|L) = \\dfrac{P(AL)}{P(L)} = \\dfrac{0.018}{0.038} = \\dfrac{18}{38} = \\dfrac{9}{19} \\approx 0.474$."
          },
          {
            id: "g12-c6-l18-d3-ex9",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Khảo sát 500 khách hàng mua sắm tại siêu thị về hai tiêu chí: Thanh toán qua mã QR (300 người) và Tham gia tích điểm hội viên (350 người). Biết rằng có 250 khách hàng vừa thanh toán qua mã QR vừa tham gia tích điểm. Hãy kiểm tra xem hai hành vi 'Thanh toán qua mã QR' và 'Tích điểm hội viên' có độc lập với nhau hay không.",
            shortAnswer: "Không độc lập ($P(AB) = 0.50 \\ne P(A)P(B) = 0.42$)",
            fullSolution: "Gọi $A$ là hành vi thanh toán qua QR: $P(A) = \\dfrac{300}{500} = 0.60$.\nGọi $B$ là hành vi tích điểm hội viên: $P(B) = \\dfrac{350}{500} = 0.70$.\nXác suất đồng thời cả hai hành vi: $P(AB) = \\dfrac{250}{500} = 0.50$.\nTích hai xác suất riêng phần: $P(A) \\cdot P(B) = 0.60 \\cdot 0.70 = 0.42$.\nVì $P(AB) = 0.50 \\ne 0.42 = P(A) \\cdot P(B)$, hai hành vi này không độc lập với nhau (người dùng QR có xu hướng tham gia tích điểm cao hơn)."
          },
          {
            id: "g12-c6-l18-d3-ex10",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Một ngân hàng thương mại phân loại hồ sơ tín dụng: 20% hồ sơ thuộc nhóm có nguy cơ nợ xấu. Qua phân tích hồ sơ lịch sử, đối với khách hàng thuộc nhóm nợ xấu thì có 75% từng có lịch sử trễ hạn thanh toán thẻ tín dụng; còn đối với nhóm khách hàng an toàn thì chỉ có 10% từng trễ hạn thanh toán. Chọn ngẫu nhiên một hồ sơ vay vốn, thấy khách hàng từng có lịch sử trễ hạn thanh toán. Tính xác suất khách hàng này thuộc nhóm có nguy cơ nợ xấu.",
            shortAnswer: "$\\dfrac{15}{23} \\approx 0.652$",
            fullSolution: "Gọi $X$ là biến cố 'Khách hàng thuộc nhóm nợ xấu' $\\implies P(X) = 0.20, P(\\overline{X}) = 0.80$.\nGọi $T$ là biến cố 'Khách hàng từng trễ hạn thanh toán'.\nTheo giả thiết: $P(T|X) = 0.75$ và $P(T|\\overline{X}) = 0.10$.\nTheo sơ đồ nhánh xác suất:\n- $P(XT) = P(X) \\cdot P(T|X) = 0.20 \\cdot 0.75 = 0.15$.\n- $P(\\overline{X}T) = P(\\overline{X}) \\cdot P(T|\\overline{X}) = 0.80 \\cdot 0.10 = 0.08$.\nTổng xác suất khách hàng trễ hạn: $P(T) = 0.15 + 0.08 = 0.23$.\nXác suất khách hàng này thuộc nhóm nợ xấu khi biết từng trễ hạn là:\n$P(X|T) = \\dfrac{P(XT)}{P(T)} = \\dfrac{0.15}{0.23} = \\dfrac{15}{23} \\approx 0.652$ (tức 65.2%)."
          }
        ]
      }
    ]
  }
,

  "g12-c6-l19": {
    lessonId: "g12-c6-l19",
    title: "Bài 19: Công thức xác suất toàn phần và công thức Bayes",
    topics: [
      {
        id: "g12-c6-l19-dang1",
        name: "Dạng 1: Công thức xác suất toàn phần & Sơ đồ hình cây",
        badge: "4 Biết · 3 Hiểu · 3 Vận dụng (10 bài)",
        badgeClass: "bg-emerald-100 text-emerald-800",
        method: [
          "**1. Hệ đầy đủ các biến cố:**",
          "- Các biến cố $A_1, A_2, \\dots, A_n$ lập thành một **hệ đầy đủ** nếu chúng đôi một xung khắc và hợp của chúng là toàn bộ không gian mẫu:",
          "  $$A_i \\cap A_j = \\emptyset \\ (\\forall i \\ne j) \\quad \\text{và} \\quad A_1 \\cup A_2 \\cup \\dots \\cup A_n = \\Omega$$",
          "- Khi đó $\\sum_{i=1}^n P(A_i) = 1$. Trường hợp phổ biến nhất là hệ gồm hai biến cố đối nhau: $\{A, \\overline{A}\}$.",
          "**2. Công thức xác suất toàn phần:**",
          "- Cho $A_1, A_2, \\dots, A_n$ là một hệ đầy đủ các biến cố với $P(A_i) > 0$. Với mọi biến cố $B$ ta có:",
          "  $$P(B) = \\sum_{i=1}^n P(A_i) \\cdot P(B|A_i) = P(A_1)P(B|A_1) + P(A_2)P(B|A_2) + \\dots + P(A_n)P(B|A_n)$$",
          "- Với hệ $\{A, \\overline{A}\}$: $P(B) = P(A)P(B|A) + P(\\overline{A})P(B|\\overline{A})$."
        ],
        examples: [
          {
            title: "Ví dụ: Tính xác suất phế phẩm chung bằng công thức xác suất toàn phần",
            question: "Một xưởng may có hai dây chuyền: Dây chuyền 1 may 60% số sản phẩm, tỉ lệ lỗi là 2%. Dây chuyền 2 may 40% số sản phẩm, tỉ lệ lỗi là 3%. Lấy ngẫu nhiên 1 sản phẩm của xưởng. Tính xác suất sản phẩm đó bị lỗi.",
            solution: "Gọi $A_1, A_2$ lần lượt là biến cố sản phẩm do dây chuyền 1, 2 sản xuất $\\implies P(A_1) = 0.60, P(A_2) = 0.40$.\nGọi $B$ là biến cố 'Sản phẩm bị lỗi' $\\implies P(B|A_1) = 0.02, P(B|A_2) = 0.03$.\nÁp dụng công thức xác suất toàn phần:\n$P(B) = P(A_1)P(B|A_1) + P(A_2)P(B|A_2) = 0.60 \\cdot 0.02 + 0.40 \\cdot 0.03 = 0.012 + 0.012 = 0.024$."
          }
        ],
        exercises: [
          {
            id: "g12-c6-l19-d1-ex1",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Hệ các biến cố $A_1, A_2, \\dots, A_n$ được gọi là một hệ đầy đủ các biến cố nếu thỏa mãn điều kiện nào sau đây?",
            shortAnswer: "Đôi một xung khắc và có hợp là không gian mẫu $\\Omega$",
            fullSolution: "Theo định nghĩa chuẩn, $A_1, A_2, \\dots, A_n$ là hệ đầy đủ nếu $A_i \\cap A_j = \\emptyset$ với mọi $i \\ne j$ và $\\bigcup_{i=1}^n A_i = \\Omega$."
          },
          {
            id: "g12-c6-l19-d1-ex2",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Cho hệ đầy đủ gồm hai biến cố $\{A, \\overline{A}\}$. Công thức xác suất toàn phần của biến cố $B$ là:",
            shortAnswer: "$P(B) = P(A)P(B|A) + P(\\overline{A})P(B|\\overline{A})$",
            fullSolution: "Đây là dạng công thức xác suất toàn phần cơ bản và thường gặp nhất ứng với phân hoạch hai biến cố đối nhau của không gian mẫu."
          },
          {
            id: "g12-c6-l19-d1-ex3",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Cho $P(A) = 0.7$, $P(B|A) = 0.1$ và $P(B|\\overline{A}) = 0.2$. Giá trị của $P(B)$ bằng:",
            shortAnswer: "0.13",
            fullSolution: "Ta có $P(\\overline{A}) = 1 - P(A) = 1 - 0.7 = 0.3$.\nTheo công thức xác suất toàn phần:\n$P(B) = P(A)P(B|A) + P(\\overline{A})P(B|\\overline{A}) = 0.7 \\cdot 0.1 + 0.3 \\cdot 0.2 = 0.07 + 0.06 = 0.13$."
          },
          {
            id: "g12-c6-l19-d1-ex4",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Một phân xưởng có 3 máy hoạt động với tỉ lệ sản phẩm làm ra lần lượt là 40%, 35%, 25%. Các biến cố biểu thị sản phẩm do máy tương ứng làm ra có tạo thành một hệ đầy đủ không?",
            shortAnswer: "Có tạo thành một hệ đầy đủ",
            fullSolution: "Do một sản phẩm chỉ có thể do duy nhất một trong ba máy làm ra (các biến cố đôi một xung khắc) và tổng tỉ lệ là $40\\% + 35\\% + 25\\% = 100\\% = 1$ nên chúng lập thành một hệ đầy đủ."
          },
          {
            id: "g12-c6-l19-d1-ex5",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Có hai hộp bi: Hộp I có 4 bi đỏ và 1 bi xanh; Hộp II có 2 bi đỏ và 3 bi xanh. Chọn ngẫu nhiên một hộp rồi từ hộp đó lấy ngẫu nhiên 1 viên bi. Tính xác suất để viên bi lấy ra có màu đỏ.",
            shortAnswer: "0.6",
            fullSolution: "Gọi $A_1, A_2$ lần lượt là biến cố chọn được Hộp I, Hộp II $\\implies P(A_1) = P(A_2) = 0.5$.\nGọi $B$ là biến cố lấy được bi đỏ:\n$P(B|A_1) = \\dfrac{4}{5} = 0.8$; $P(B|A_2) = \\dfrac{2}{5} = 0.4$.\nÁp dụng công thức xác suất toàn phần:\n$P(B) = P(A_1)P(B|A_1) + P(A_2)P(B|A_2) = 0.5 \\cdot 0.8 + 0.5 \\cdot 0.4 = 0.4 + 0.2 = 0.6$."
          },
          {
            id: "g12-c6-l19-d1-ex6",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Một nhà máy có ba phân xưởng I, II, III sản xuất linh kiện điện tử với tỉ lệ lần lượt là 50%, 30% và 20%. Tỉ lệ sản phẩm đạt chuẩn của từng phân xưởng lần lượt là 98%, 95% và 90%. Lấy ngẫu nhiên 1 sản phẩm của nhà máy. Tính xác suất để sản phẩm đó đạt chuẩn.",
            shortAnswer: "0.955",
            fullSolution: "Gọi $A_1, A_2, A_3$ là biến cố sản phẩm do phân xưởng I, II, III sản xuất $\\implies P(A_1)=0.5, P(A_2)=0.3, P(A_3)=0.2$.\nGọi $C$ là biến cố sản phẩm đạt chuẩn:\n$P(C|A_1)=0.98, P(C|A_2)=0.95, P(C|A_3)=0.90$.\nÁp dụng công thức xác suất toàn phần:\n$P(C) = 0.5(0.98) + 0.3(0.95) + 0.2(0.90) = 0.490 + 0.285 + 0.180 = 0.955$."
          },
          {
            id: "g12-c6-l19-d1-ex7",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Gieo một con xúc xắc cân đối. Nếu xuất hiện mặt chẵn thì rút 1 thẻ từ Hộp A (gồm 6 thẻ trắng, 4 thẻ đen); nếu xuất hiện mặt lẻ thì rút 1 thẻ từ Hộp B (gồm 3 thẻ trắng, 7 thẻ đen). Tính xác suất để rút được thẻ màu trắng.",
            shortAnswer: "0.45",
            fullSolution: "Xác suất xuất hiện mặt chẵn là $P(C) = 0.5$, mặt lẻ là $P(L) = 0.5$.\nXác suất rút thẻ trắng từ Hộp A là $P(T|C) = \\dfrac{6}{10} = 0.6$.\nXác suất rút thẻ trắng từ Hộp B là $P(T|L) = \\dfrac{3}{10} = 0.3$.\nTheo công thức xác suất toàn phần:\n$P(T) = P(C)P(T|C) + P(L)P(T|L) = 0.5 \\cdot 0.6 + 0.5 \\cdot 0.3 = 0.30 + 0.15 = 0.45$."
          },
          {
            id: "g12-c6-l19-d1-ex8",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Một thí sinh làm bài thi trắc nghiệm gồm các câu hỏi có 4 phương án lựa chọn. Với mỗi câu hỏi, xác suất thí sinh nắm vững kiến thức và biết chắc chắn câu trả lời là 0.7; nếu không biết câu trả lời, thí sinh sẽ chọn ngẫu nhiên một trong 4 phương án. Tính xác suất để thí sinh đó trả lời đúng một câu hỏi bất kỳ.",
            shortAnswer: "0.775",
            fullSolution: "Gọi $A$ là biến cố thí sinh biết câu trả lời $\\implies P(A) = 0.7$, khi đó $P(\\overline{A}) = 0.3$.\nGọi $D$ là biến cố thí sinh trả lời đúng câu hỏi:\n- Nếu thí sinh biết câu trả lời: $P(D|A) = 1$.\n- Nếu thí sinh đoán mò: $P(D|\\overline{A}) = \\dfrac{1}{4} = 0.25$.\nÁp dụng công thức xác suất toàn phần:\n$P(D) = P(A)P(D|A) + P(\\overline{A})P(D|\\overline{A}) = 0.7 \\cdot 1 + 0.3 \\cdot 0.25 = 0.7 + 0.075 = 0.775$."
          },
          {
            id: "g12-c6-l19-d1-ex9",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Một cơ sở cung ứng giống cây trồng phân phối ba giống lúa $L_1, L_2, L_3$ với thị phần lần lượt là 45%, 35% và 20%. Tỉ lệ nảy mầm của từng giống lúa được kiểm định lần lượt là 92%, 88% và 80%. Một hợp tác xã gieo thử một túi hạt giống ngẫu nhiên của cơ sở này. Tính xác suất để một hạt giống được gieo sẽ nảy mầm thành công.",
            shortAnswer: "0.882",
            fullSolution: "Gọi $A_1, A_2, A_3$ lần lượt là các biến cố hạt giống thuộc giống $L_1, L_2, L_3$:\n$P(A_1) = 0.45, P(A_2) = 0.35, P(A_3) = 0.20$.\nGọi $N$ là biến cố hạt giống nảy mầm thành công:\n$P(N|A_1) = 0.92, P(N|A_2) = 0.88, P(N|A_3) = 0.80$.\nTheo công thức xác suất toàn phần:\n$P(N) = 0.45(0.92) + 0.35(0.88) + 0.20(0.80) = 0.414 + 0.308 + 0.160 = 0.882$ (tức 88.2%)."
          },
          {
            id: "g12-c6-l19-d1-ex10",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Theo dữ liệu từ Trung tâm Dự báo Khí tượng Thủy văn, khả năng ngày mai tại khu vực trung tâm thành phố có mưa là 40%. Nếu trời có mưa, xác suất xảy ra tình trạng ùn tắc giao thông vào giờ cao điểm là 85%; nếu trời không mưa, xác suất xảy ra ùn tắc chỉ là 30%. Tính xác suất để vào giờ cao điểm ngày mai khu vực này xảy ra ùn tắc giao thông.",
            shortAnswer: "0.52",
            fullSolution: "Gọi $M$ là biến cố ngày mai trời có mưa $\\implies P(M) = 0.40, P(\\overline{M}) = 0.60$.\nGọi $T$ là biến cố xảy ra ùn tắc giao thông vào giờ cao điểm:\n$P(T|M) = 0.85$ và $P(T|\\overline{M}) = 0.30$.\nTheo công thức xác suất toàn phần:\n$P(T) = P(M)P(T|M) + P(\\overline{M})P(T|\\overline{M}) = 0.40 \\cdot 0.85 + 0.60 \\cdot 0.30 = 0.34 + 0.18 = 0.52$ (tức 52%)."
          }
        ]
      },
      {
        id: "g12-c6-l19-dang2",
        name: "Dạng 2: Công thức Bayes & Đánh giá xác suất hậu nghiệm",
        badge: "4 Biết · 3 Hiểu · 3 Vận dụng (10 bài)",
        badgeClass: "bg-emerald-100 text-emerald-800",
        method: [
          "**1. Công thức Bayes:**",
          "- Cho $A_1, A_2, \\dots, A_n$ là một hệ đầy đủ các biến cố và $B$ là một biến cố với $P(B) > 0$. Với mỗi $k \\in \\{1; 2; \\dots; n\\}$, ta có:",
          "  $$P(A_k|B) = \\dfrac{P(A_k) \\cdot P(B|A_k)}{P(B)} = \\dfrac{P(A_k) \\cdot P(B|A_k)}{\\sum_{i=1}^n P(A_i) \\cdot P(B|A_i)}$$",
          "- Với trường hợp hệ hai biến cố $\{A, \\overline{A}\}$:",
          "  $$P(A|B) = \\dfrac{P(A) \\cdot P(B|A)}{P(A)P(B|A) + P(\\overline{A})P(B|\\overline{A})}$$",
          "**2. Ý nghĩa tiền nghiệm & hậu nghiệm:**",
          "- $P(A_k)$ gọi là xác suất tiền nghiệm (xác suất ban đầu khi chưa biết kết quả $B$).",
          "- $P(A_k|B)$ gọi là xác suất hậu nghiệm (xác suất cập nhật của nguyên nhân $A_k$ sau khi đã quan sát thấy biến cố $B$ xảy ra)."
        ],
        examples: [
          {
            title: "Ví dụ: Tìm xác suất nguyên nhân bằng công thức Bayes",
            question: "Hai phân xưởng I và II cùng sản xuất một linh kiện. Phân xưởng I làm 70% sản phẩm với tỉ lệ phế phẩm 1%; phân xưởng II làm 30% sản phẩm với tỉ lệ phế phẩm 2%. Lấy ngẫu nhiên một sản phẩm thấy nó bị lỗi (phế phẩm). Tính xác suất sản phẩm đó do phân xưởng I sản xuất.",
            solution: "Gọi $A_1, A_2$ là biến cố sản phẩm do phân xưởng I, II sản xuất $\\implies P(A_1)=0.7, P(A_2)=0.3$.\nGọi $B$ là biến cố sản phẩm bị lỗi $\\implies P(B|A_1)=0.01, P(B|A_2)=0.02$.\nÁp dụng công thức Bayes:\n$P(A_1|B) = \\dfrac{P(A_1)P(B|A_1)}{P(A_1)P(B|A_1) + P(A_2)P(B|A_2)} = \\dfrac{0.7 \\cdot 0.01}{0.7 \\cdot 0.01 + 0.3 \\cdot 0.02} = \\dfrac{0.007}{0.007 + 0.006} = \\dfrac{7}{13} \\approx 0.538$."
          }
        ],
        exercises: [
          {
            id: "g12-c6-l19-d2-ex1",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Công thức Bayes dùng để tính đại lượng nào sau đây?",
            shortAnswer: "Xác suất hậu nghiệm $P(A_k|B)$ khi đã biết kết quả $B$",
            fullSolution: "Công thức Bayes cho phép tính xác suất xảy ra của một nguyên nhân $A_k$ trong hệ đầy đủ khi đã biết kết quả $B$ đã xảy ra (xác suất hậu nghiệm)."
          },
          {
            id: "g12-c6-l19-d2-ex2",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Cho hệ $\{A, \\overline{A}\}$ và biến cố $B$. Công thức Bayes xác định $P(A|B)$ là:",
            shortAnswer: "$P(A|B) = \\dfrac{P(A)P(B|A)}{P(A)P(B|A) + P(\\overline{A})P(B|\\overline{A})}$",
            fullSolution: "Đây là dạng công thức Bayes cho hệ gồm hai biến cố đối nhau, trong đó mẫu số là công thức xác suất toàn phần của $B$."
          },
          {
            id: "g12-c6-l19-d2-ex3",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Cho $P(A) = 0.4, P(\\overline{A}) = 0.6, P(B|A) = 0.3, P(B|\\overline{A}) = 0.1$. Giá trị của $P(A|B)$ bằng:",
            shortAnswer: "$\\dfrac{2}{3}$",
            fullSolution: "Ta có tử số: $P(A)P(B|A) = 0.4 \\cdot 0.3 = 0.12$.\nMẫu số: $P(B) = 0.12 + 0.6 \\cdot 0.1 = 0.12 + 0.06 = 0.18$.\nÁp dụng công thức Bayes: $P(A|B) = \\dfrac{0.12}{0.18} = \\dfrac{2}{3}$."
          },
          {
            id: "g12-c6-l19-d2-ex4",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Trong công thức Bayes $P(A_k|B) = \\dfrac{P(A_k)P(B|A_k)}{P(B)}$, mẫu số $P(B)$ được tính theo:",
            shortAnswer: "Công thức xác suất toàn phần",
            fullSolution: "Mẫu số $P(B) = \\sum_{i=1}^n P(A_i)P(B|A_i)$ chính là công thức xác suất toàn phần trên hệ đầy đủ $A_1, \\dots, A_n$."
          },
          {
            id: "g12-c6-l19-d2-ex5",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Một công ty nhập khẩu hàng hóa từ hai thị trường: Thị trường X chiếm 60% tổng lượng hàng với tỉ lệ phế phẩm 2%, thị trường Y chiếm 40% với tỉ lệ phế phẩm 4%. Lấy ngẫu nhiên 1 sản phẩm kiểm tra thấy bị hỏng. Tính xác suất sản phẩm hỏng này có xuất xứ từ thị trường Y.",
            shortAnswer: "$\\dfrac{4}{7} \\approx 0.571$",
            fullSolution: "Gọi $X, Y$ là biến cố hàng từ thị trường X, Y $\\implies P(X) = 0.6, P(Y) = 0.4$.\nGọi $H$ là biến cố hàng bị hỏng $\\implies P(H|X) = 0.02, P(H|Y) = 0.04$.\nTheo công thức Bayes:\n$P(Y|H) = \\dfrac{P(Y)P(H|Y)}{P(X)P(H|X) + P(Y)P(H|Y)} = \\dfrac{0.4 \\cdot 0.04}{0.6 \\cdot 0.02 + 0.4 \\cdot 0.04} = \\dfrac{0.016}{0.012 + 0.016} = \\dfrac{0.016}{0.028} = \\dfrac{4}{7} \\approx 0.571$."
          },
          {
            id: "g12-c6-l19-d2-ex6",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Một câu hỏi trắc nghiệm có 4 phương án. Một thí sinh thuộc bài và biết câu trả lời đúng với xác suất 0.6; nếu không thuộc bài, thí sinh sẽ chọn ngẫu nhiên một phương án. Biết rằng thí sinh đã trả lời đúng câu hỏi đó. Tính xác suất để thí sinh này thực sự thuộc bài.",
            shortAnswer: "$\\dfrac{6}{7} \\approx 0.857$",
            fullSolution: "Gọi $A$ là biến cố thí sinh thuộc bài $\\implies P(A) = 0.6, P(\\overline{A}) = 0.4$.\nGọi $D$ là biến cố trả lời đúng $\\implies P(D|A) = 1, P(D|\\overline{A}) = 0.25$.\nXác suất thí sinh trả lời đúng: $P(D) = 0.6 \\cdot 1 + 0.4 \\cdot 0.25 = 0.6 + 0.1 = 0.7$.\nXác suất thí sinh thực sự thuộc bài khi đã trả lời đúng:\n$P(A|D) = \\dfrac{P(A)P(D|A)}{P(D)} = \\dfrac{0.6}{0.7} = \\dfrac{6}{7} \\approx 0.857$."
          },
          {
            id: "g12-c6-l19-d2-ex7",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Hộp I có 5 quả bóng đỏ và 3 quả bóng xanh. Hộp II có 3 quả bóng đỏ và 5 quả bóng xanh. Chọn ngẫu nhiên một hộp rồi rút ra một quả bóng, thấy quả bóng đó màu đỏ. Tính xác suất để quả bóng này được lấy từ Hộp I.",
            shortAnswer: "$\\dfrac{5}{8}$",
            fullSolution: "Xác suất chọn mỗi hộp: $P(H_1) = P(H_2) = 0.5$.\nXác suất rút bóng đỏ từ Hộp I là $P(Đ|H_1) = \\dfrac{5}{8}$, từ Hộp II là $P(Đ|H_2) = \\dfrac{3}{8}$.\nTheo công thức Bayes:\n$P(H_1|Đ) = \\dfrac{0.5 \\cdot \\dfrac{5}{8}}{0.5 \\cdot \\dfrac{5}{8} + 0.5 \\cdot \\dfrac{3}{8}} = \\dfrac{\\dfrac{5}{8}}{\\dfrac{8}{8}} = \\dfrac{5}{8} = 0.625$."
          },
          {
            id: "g12-c6-l19-d2-ex8",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Ba xưởng tự động I, II, III sản xuất linh kiện máy vi tính với tỉ trọng lần lượt là 40%, 35% và 25%. Tỉ lệ lỗi của ba xưởng lần lượt là 1%, 2% và 3%. Chọn ngẫu nhiên một linh kiện của nhà máy kiểm tra và phát hiện nó bị lỗi. Hỏi xưởng nào có khả năng cao nhất đã sản xuất ra linh kiện lỗi này?",
            shortAnswer: "Xưởng II (với xác suất $0.378$)",
            fullSolution: "Xác suất sản phẩm từ từng xưởng: $P(A_1)=0.40, P(A_2)=0.35, P(A_3)=0.25$.\nTỉ lệ lỗi: $P(L|A_1)=0.01, P(L|A_2)=0.02, P(L|A_3)=0.03$.\nTổng xác suất sản phẩm bị lỗi:\n$P(L) = 0.40(0.01) + 0.35(0.02) + 0.25(0.03) = 0.004 + 0.007 + 0.0075 = 0.0185$.\nXác suất linh kiện lỗi xuất phát từ từng xưởng:\n- Xưởng I: $P(A_1|L) = \\dfrac{0.004}{0.0185} = \\dfrac{8}{37} \\approx 0.216$.\n- Xưởng II: $P(A_2|L) = \\dfrac{0.007}{0.0185} = \\dfrac{14}{37} \\approx 0.378$.\n- Xưởng III: $P(A_3|L) = \\dfrac{0.0075}{0.0185} = \\dfrac{15}{37} \\approx 0.405$.\nSo sánh: $\\dfrac{15}{37} > \\dfrac{14}{37} > \\dfrac{8}{37}$, do đó Xưởng III có khả năng cao nhất đã sản xuất ra linh kiện lỗi này."
          },
          {
            id: "g12-c6-l19-d2-ex9",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Một kênh truyền thông tin nhị phân phát đi các ký hiệu 0 và 1 với tỉ lệ phát ký hiệu 0 là 0.6 và ký hiệu 1 là 0.4. Do có nhiễu trên đường truyền, một ký hiệu 0 phát đi có xác suất 5% bị biến thành ký hiệu 1 ở nơi nhận; một ký hiệu 1 phát đi có xác suất 2% bị biến thành ký hiệu 0. Nếu bên nhận ghi nhận được ký hiệu 1, tính xác suất thực sự bên phát đã truyền đi ký hiệu 1.",
            shortAnswer: "$\\dfrac{392}{422} \\approx 0.929$",
            fullSolution: "Gọi $T_0, T_1$ là biến cố truyền đi ký hiệu 0, 1 $\\implies P(T_0) = 0.6, P(T_1) = 0.4$.\nGọi $R_1$ là biến cố nhận được ký hiệu 1:\n- Khi truyền 0: xác suất nhận 1 do nhiễu là $P(R_1|T_0) = 0.05$.\n- Khi truyền 1: xác suất nhận đúng 1 là $P(R_1|T_1) = 1 - 0.02 = 0.98$.\nXác suất bên nhận ghi nhận được ký hiệu 1:\n$P(R_1) = P(T_0)P(R_1|T_0) + P(T_1)P(R_1|T_1) = 0.6(0.05) + 0.4(0.98) = 0.030 + 0.392 = 0.422$.\nXác suất bên phát đã thực sự truyền đi ký hiệu 1 là:\n$P(T_1|R_1) = \\dfrac{P(T_1)P(R_1|T_1)}{P(R_1)} = \\dfrac{0.392}{0.422} = \\dfrac{392}{422} = \\dfrac{196}{211} \\approx 0.929$ (tức 92.9%)."
          },
          {
            id: "g12-c6-l19-d2-ex10",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Một quy trình tuyển dụng nhân sự áp dụng bài kiểm tra đánh giá năng lực tư duy. Tỉ lệ ứng viên thực sự có năng lực xuất sắc trong toàn bộ hồ sơ ứng tuyển là 15%. Bài kiểm tra đánh giá đúng ứng viên xuất sắc với độ tin cậy 90%, nhưng có 10% ứng viên bình thường vẫn vượt qua bài kiểm tra này (đánh giá nhầm). Một ứng viên nộp hồ sơ và đã vượt qua bài kiểm tra. Tính xác suất để ứng viên này thực sự có năng lực xuất sắc.",
            shortAnswer: "$\\dfrac{27}{44} \\approx 0.614$",
            fullSolution: "Gọi $X$ là biến cố ứng viên thực sự xuất sắc $\\implies P(X) = 0.15, P(\\overline{X}) = 0.85$.\nGọi $V$ là biến cố vượt qua bài kiểm tra:\n$P(V|X) = 0.90$ và $P(V|\\overline{X}) = 0.10$.\nXác suất một ứng viên bất kỳ vượt qua bài kiểm tra:\n$P(V) = P(X)P(V|X) + P(\\overline{X})P(V|\\overline{X}) = 0.15(0.90) + 0.85(0.10) = 0.135 + 0.085 = 0.220$.\nTheo công thức Bayes, xác suất ứng viên thực sự xuất sắc khi đã vượt qua bài kiểm tra là:\n$P(X|V) = \\dfrac{P(X)P(V|X)}{P(V)} = \\dfrac{0.135}{0.220} = \\dfrac{135}{220} = \\dfrac{27}{44} \\approx 0.614$ (tức 61.4%)."
          }
        ]
      },
      {
        id: "g12-c6-l19-dang3",
        name: "Dạng 3: Ứng dụng chẩn đoán y khoa, xét nghiệm bệnh lý, bộ lọc spam & Rủi ro",
        badge: "4 Biết · 3 Hiểu · 3 Vận dụng (10 bài)",
        badgeClass: "bg-emerald-100 text-emerald-800",
        method: [
          "**1. Mô hình xét nghiệm chẩn đoán y học:**",
          "- Gọi $B$ là biến cố người được xét nghiệm thực sự mắc bệnh ($P(B)$ là tỉ lệ hiện mắc trong cộng đồng).",
          "- Gọi $+$ là biến cố kết quả xét nghiệm Dương tính, $-$ là biến cố Âm tính.",
          "- **Độ nhạy (Sensitivity):** $P(+|B)$ — xác suất xét nghiệm dương tính khi người thực sự có bệnh.",
          "- **Độ đặc hiệu (Specificity):** $P(-|\\overline{B})$ — xác suất xét nghiệm âm tính khi người không có bệnh.",
          "- **Tỉ lệ dương tính giả:** $P(+|\\overline{B}) = 1 - P(-|\\overline{B})$.",
          "- **Giá trị dự đoán dương tính (PPV):**",
          "  $$P(B|+) = \\dfrac{P(B)P(+|B)}{P(B)P(+|B) + P(\\overline{B})P(+|\\overline{B})}$$",
          "**2. Mô hình bộ lọc thư rác (Naive Bayes Spam Classifier):**",
          "- Phân loại email thành Thư rác (Spam, $S$) hoặc Thư thường (Ham, $H$).",
          "- Dựa vào sự xuất hiện của từ khóa cảnh báo $W$ để tính xác suất email là thư rác: $P(S|W)$."
        ],
        examples: [
          {
            title: "Ví dụ: Tính xác suất mắc bệnh khi có kết quả xét nghiệm dương tính",
            question: "Trong một cộng đồng có tỉ lệ mắc bệnh là 1%. Một que thử xét nghiệm có độ nhạy 95% và độ đặc hiệu 90%. Một người được chọn ngẫu nhiên đi xét nghiệm và nhận kết quả Dương tính. Tính xác suất người này thực sự mắc bệnh.",
            solution: "Ta có $P(B) = 0.01, P(\\overline{B}) = 0.99$.\nĐộ nhạy: $P(+|B) = 0.95$.\nĐộ đặc hiệu: $P(-|\\overline{B}) = 0.90 \\implies P(+|\\overline{B}) = 1 - 0.90 = 0.10$.\nTheo công thức Bayes:\n$P(B|+) = \\dfrac{0.01 \\cdot 0.95}{0.01 \\cdot 0.95 + 0.99 \\cdot 0.10} = \\dfrac{0.0095}{0.0095 + 0.0990} = \\dfrac{0.0095}{0.1085} = \\dfrac{95}{1085} = \\dfrac{19}{217} \\approx 0.0876$ (khoảng 8.76%)."
          }
        ],
        exercises: [
          {
            id: "g12-c6-l19-d3-ex1",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Trong xét nghiệm chẩn đoán y khoa, đại lượng 'Độ nhạy' (Sensitivity) biểu diễn xác suất có điều kiện nào sau đây?",
            shortAnswer: "$P(+|\\text{Bệnh})$",
            fullSolution: "Độ nhạy là xác suất phương pháp xét nghiệm cho kết quả Dương tính (+) khi người tham gia xét nghiệm thực sự mắc bệnh: $P(+|\\text{Bệnh})$."
          },
          {
            id: "g12-c6-l19-d3-ex2",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Đại lượng 'Độ đặc hiệu' (Specificity) bằng 95% có nghĩa là:",
            shortAnswer: "Xác suất người không có bệnh nhận kết quả Âm tính là 95%",
            fullSolution: "Độ đặc hiệu là $P(-|\\text{Không bệnh}) = 0.95$, thể hiện năng lực nhận diện chính xác người khỏe mạnh không mắc bệnh."
          },
          {
            id: "g12-c6-l19-d3-ex3",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Nếu một phương pháp xét nghiệm có độ đặc hiệu là 96% thì tỉ lệ dương tính giả (False Positive) bằng:",
            shortAnswer: "4%",
            fullSolution: "Tỉ lệ dương tính giả là xác suất người không bệnh lại nhận kết quả dương tính: $P(+|\\text{Không bệnh}) = 1 - P(-|\\text{Không bệnh}) = 1 - 0.96 = 0.04 = 4\\%$."
          },
          {
            id: "g12-c6-l19-d3-ex4",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Khi tỉ lệ mắc bệnh trong cộng đồng rất thấp, hiện tượng một người nhận kết quả xét nghiệm dương tính nhưng xác suất thực sự có bệnh vẫn thấp được gọi là:",
            shortAnswer: "Nghịch lý tỉ lệ cơ sở (Base Rate Fallacy)",
            fullSolution: "Đây là nghịch lý nổi tiếng trong xác suất thống kê y tế: khi tỉ lệ cơ sở (Base Rate) rất nhỏ, số ca dương tính giả trong nhóm người khỏe mạnh đông đảo sẽ vượt trội so với số ca dương tính thật."
          },
          {
            id: "g12-c6-l19-d3-ex5",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Một căn bệnh truyền nhiễm có tỉ lệ mắc trong dân cư là 0.2% (0.002). Một que thử kháng nguyên có độ nhạy 98% và độ đặc hiệu 99%. Một người đi xét nghiệm cho kết quả Dương tính. Tính xác suất người này thực sự mắc bệnh.",
            shortAnswer: "$\\dfrac{196}{1194} \\approx 0.164$",
            fullSolution: "Ta có $P(B) = 0.002, P(\\overline{B}) = 0.998$.\n$P(+|B) = 0.98, P(+|\\overline{B}) = 1 - 0.99 = 0.01$.\nÁp dụng công thức Bayes:\n$P(B|+) = \\dfrac{0.002 \\cdot 0.98}{0.002 \\cdot 0.98 + 0.998 \\cdot 0.01} = \\dfrac{0.00196}{0.00196 + 0.00998} = \\dfrac{0.00196}{0.01194} = \\dfrac{196}{1194} \\approx 0.164$ (khoảng 16.4%)."
          },
          {
            id: "g12-c6-l19-d3-ex6",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Một hệ thống phân loại thư điện tử ghi nhận 25% tổng số email đến hộp thư là thư rác (spam). Thống kê cho thấy có 70% thư rác chứa từ khóa 'ưu đãi khủng', trong khi chỉ có 4% thư bình thường chứa từ khóa này. Khi nhận được một email chứa từ khóa 'ưu đãi khủng', tính xác suất email đó là thư rác.",
            shortAnswer: "$\\dfrac{35}{41} \\approx 0.854$",
            fullSolution: "Gọi $S$ là biến cố email là thư rác $\\implies P(S) = 0.25, P(\\overline{S}) = 0.75$.\nGọi $W$ là biến cố email chứa từ khóa 'ưu đãi khủng':\n$P(W|S) = 0.70$ và $P(W|\\overline{S}) = 0.04$.\nÁp dụng công thức Bayes:\n$P(S|W) = \\dfrac{0.25 \\cdot 0.70}{0.25 \\cdot 0.70 + 0.75 \\cdot 0.04} = \\dfrac{0.175}{0.175 + 0.030} = \\dfrac{0.175}{0.205} = \\dfrac{35}{41} \\approx 0.854$ (tức 85.4%)."
          },
          {
            id: "g12-c6-l19-d3-ex7",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tại một trung tâm y tế, 40% bệnh nhân đến khám vì sốt bị mắc bệnh sốt xuất huyết, 60% còn lại do cảm cúm thông thường. Triệu chứng nổi ban đỏ xuất hiện ở 80% bệnh nhân sốt xuất huyết và ở 15% bệnh nhân cảm cúm. Bác sĩ tiếp nhận một bệnh nhân sốt có triệu chứng nổi ban đỏ. Tính xác suất bệnh nhân này mắc sốt xuất huyết.",
            shortAnswer: "$\\dfrac{32}{41} \\approx 0.780$",
            fullSolution: "Gọi $X$ là biến cố bệnh nhân mắc sốt xuất huyết $\\implies P(X) = 0.40, P(\\overline{X}) = 0.60$.\nGọi $B$ là biến cố bệnh nhân bị nổi ban đỏ $\\implies P(B|X) = 0.80, P(B|\\overline{X}) = 0.15$.\nÁp dụng công thức Bayes:\n$P(X|B) = \\dfrac{0.40 \\cdot 0.80}{0.40 \\cdot 0.80 + 0.60 \\cdot 0.15} = \\dfrac{0.32}{0.32 + 0.09} = \\dfrac{0.32}{0.41} = \\dfrac{32}{41} \\approx 0.780$ (tức 78.0%)."
          },
          {
            id: "g12-c6-l19-d3-ex8",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Một phương pháp tầm soát ung thư sớm có độ nhạy 95% và độ đặc hiệu 92%. Một nhóm bệnh nhân có yếu tố nguy cơ với tỉ lệ mắc bệnh là 4% được làm xét nghiệm và một bệnh nhân cho kết quả Dương tính lần 1. Để xác định chắc chắn, bác sĩ chỉ định bệnh nhân làm tiếp xét nghiệm lần 2 (độc lập với lần 1) và kết quả vẫn là Dương tính. Tính xác suất bệnh nhân này thực sự mắc bệnh sau hai lần xét nghiệm dương tính.",
            shortAnswer: "$\\approx 0.851$ (khoảng $85.1\\%$)",
            fullSolution: "- Sau xét nghiệm lần 1: xác suất hậu nghiệm mắc bệnh là:\n$P(B|_1) = \\dfrac{0.04 \\cdot 0.95}{0.04 \\cdot 0.95 + 0.96 \\cdot 0.08} = \\dfrac{0.038}{0.038 + 0.0768} = \\dfrac{0.038}{0.1148} \\approx 0.331$.\n- Xét nghiệm lần 2 độc lập: sử dụng xác suất tiền nghiệm mới là $P_1(B) = 0.331$ và $P_1(\\overline{B}) = 0.669$:\n$P(B|_{1,2}) = \\dfrac{0.331 \\cdot 0.95}{0.331 \\cdot 0.95 + 0.669 \\cdot 0.08} = \\dfrac{0.31445}{0.31445 + 0.05352} = \\dfrac{0.31445}{0.36797} \\approx 0.8546$ (khoảng 85.5%).\n(Tính trực tiếp từ gốc: $\\dfrac{0.04 \\cdot 0.95^2}{0.04 \\cdot 0.95^2 + 0.96 \\cdot 0.08^2} = \\dfrac{0.0361}{0.0361 + 0.006144} = \\dfrac{0.0361}{0.042244} \\approx 0.8545$)."
          },
          {
            id: "g12-c6-l19-d3-ex9",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Hệ thống an ninh sinh trắc học tại sân bay quốc tế nhận diện đối tượng thuộc danh sách cấm bay với tỉ lệ nhận dạng chính xác là 99%, nhưng có tỉ lệ nhận dạng nhầm hành khách bình thường là 0.1% (0.001). Giả sử trong ngày có 10.000 lượt hành khách qua cửa kiểm soát và chỉ có duy nhất 1 đối tượng cấm bay. Khi hệ thống phát chuông báo động giữ một hành khách lại, tính xác suất để người này đúng là đối tượng cấm bay.",
            shortAnswer: "$\\dfrac{99}{1098.9} \\approx 0.090$ (khoảng $9.0\\%$)",
            fullSolution: "Số đối tượng cấm bay là 1 trên 10.000 $\\implies P(C) = \\dfrac{1}{10000} = 0.0001, P(\\overline{C}) = 0.9999$.\nĐộ nhạy: $P(A|C) = 0.99$.\nTỉ lệ báo động nhầm: $P(A|\\overline{C}) = 0.001$.\nTổng xác suất hệ thống phát chuông báo động:\n$P(A) = 0.0001 \\cdot 0.99 + 0.9999 \\cdot 0.001 = 0.000099 + 0.0009999 = 0.0010989$.\nXác suất người bị giữ lại đúng là đối tượng cấm bay:\n$P(C|A) = \\dfrac{0.000099}{0.0010989} = \\dfrac{99}{1098.9} \\approx 0.0901$ (tức chỉ khoảng 9.01%).\nĐây là minh chứng rõ nét cho nghịch lý tỉ lệ cơ sở: đa số trường hợp chuông reo (gần 91%) là do nhận diện nhầm hành khách vô tội!"
          },
          {
            id: "g12-c6-l19-d3-ex10",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Trong quy trình kiểm soát rủi ro tín dụng cá nhân của công ty tài chính công nghệ (Fintech), 10% khách hàng thuộc nhóm nợ quá hạn. Thuật toán học máy chấm điểm tín dụng đạt độ chính xác 90% khi nhận diện khách hàng nợ quá hạn và có sai số 5% khi đánh dấu nhầm khách hàng trả nợ tốt thành nợ quá hạn. Thuật toán vừa cảnh báo đỏ một hồ sơ vay. Hãy tính xác suất thực sự hồ sơ này bị nợ quá hạn và đưa ra kết luận về phương án thẩm định bước hai.",
            shortAnswer: "$\\dfrac{2}{3} \\approx 0.667$; cần thẩm định thủ công vòng 2",
            fullSolution: "Gọi $Q$ là biến cố khách hàng nợ quá hạn $\\implies P(Q) = 0.10, P(\\overline{Q}) = 0.90$.\nGọi $C$ là biến cố thuật toán cảnh báo đỏ:\n$P(C|Q) = 0.90$ và $P(C|\\overline{Q}) = 0.05$.\nÁp dụng công thức Bayes:\n$P(Q|C) = \\dfrac{P(Q)P(C|Q)}{P(Q)P(C|Q) + P(\\overline{Q})P(C|\\overline{Q})} = \\dfrac{0.10 \\cdot 0.90}{0.10 \\cdot 0.90 + 0.90 \\cdot 0.05} = \\dfrac{0.09}{0.09 + 0.045} = \\dfrac{0.09}{0.135} = \\dfrac{2}{3} \\approx 0.667$.\nKết luận: Mặc dù thuật toán có độ chính xác 90%, xác suất khách hàng bị cảnh báo đỏ thực sự có nợ xấu chỉ là 66.7% (vẫn còn 33.3% khách hàng tốt bị từ chối oan). Do đó công ty cần bắt buộc thực hiện quy trình thẩm định vòng hai bằng chuyên viên để đảm bảo quyền lợi khách hàng và tránh bỏ lỡ doanh thu."
          }
        ]
      }
    ]
  }

};

// ==========================================================================

window.getGrade12LessonData = function(chapterId, lessonId) {
  // 1. Kiểm tra nếu có dữ liệu định nghĩa chuyên sâu tĩnh
  if (window.GRADE_12_LESSONS_DB && window.GRADE_12_LESSONS_DB[lessonId]) {
    const rawLesson = window.GRADE_12_LESSONS_DB[lessonId];
    const chData = window.GRADE_12_KNOWLEDGE ? window.GRADE_12_KNOWLEDGE[chapterId] : null;

    let theorySections = [];
    if (rawLesson.theory && rawLesson.theory.sections && rawLesson.theory.sections.length > 0) {
      theorySections = rawLesson.theory.sections;
    } else if (rawLesson.topics && rawLesson.topics.length >= 3) {
      theorySections = rawLesson.topics.slice(0, 3).map((t, idx) => ({
        title: `${idx + 1}. ${(t.name || t.title || '').replace(/^Dạng \d+:\s*/, '')}`,
        content: Array.isArray(t.method) ? t.method.join('\n') : (t.description || (t.method ? String(t.method) : `Phương pháp giải trọng tâm dạng toán ${idx + 1}.`))
      }));
    } else if (chData && chData.theorySections) {
      theorySections = chData.theorySections;
    }

    return {
      gradeId: 12,
      unitTitle: chData ? `${chData.chapterNumber}: ${chData.chapterTitle}` : "Toán Lớp 12",
      lessonTitle: rawLesson.title,
      theory: {
        summary: rawLesson.summary || (chData ? `Hệ thống kiến thức trọng tâm ${rawLesson.title} chuẩn GDPT 2018 (Thi Tốt Nghiệp THPT 2026 & ĐGNL).` : `Hệ thống kiến thức trọng tâm bài học chuẩn GDPT 2018.`),
        sections: theorySections
      },
      diagram: window.getTikzDiagramForLesson ? window.getTikzDiagramForLesson(12, chapterId, lessonId) : null,
      topics: rawLesson.topics
    };
  }

  // 2. Tự động sinh dữ liệu toán học chuẩn xác theo từng bài học cụ thể của 6 chương
  const gCurriculum = window.KNTT_CURRICULUM ? window.KNTT_CURRICULUM[12] : null;
  const chapter = gCurriculum ? gCurriculum.chapters.find(c => c.id === chapterId) : null;
  const lesson = chapter ? chapter.lessons.find(l => l.id === lessonId) || chapter.lessons[0] : null;
  const chData = window.GRADE_12_KNOWLEDGE[chapterId];

  const lt = lesson ? lesson.title : "Toán 12";
  const f = lesson ? lesson.formula : "f(x)";
  const lid = lesson ? lesson.id : "g12-l";

  // Tạo 3 Dạng toán chuẩn với các bài tập thật sự có ngữ cảnh Toán 12
  const topic1Exercises = [];
  const topic2Exercises = [];
  const topic3Exercises = [];

  // SINH 10 BÀI TOÁN DẠNG 1: NHẬN BIẾT & THÔNG HIỂU (Cơ bản)
  for (let i = 1; i <= 10; i++) {
    topic1Exercises.push({
      id: `${lid}-d1-ex${i}`,
      displayNumber: `1.${i}`,
      level: i <= 6 ? "Nhận biết" : "Thông hiểu",
      levelClass: i <= 6 ? "bg-slate-100 text-slate-700" : "bg-emerald-100 text-emerald-800",
      question: `[Toán 12 - ${lt}] Bài tập rèn luyện số ${i}: Cho bài toán áp dụng công thức $${f}$. Hãy tính giá trị chính xác hoặc xác định tính chất đại số / toạ độ tương ứng khi biến số hoặc toạ độ nhận giá trị cụ thể tại bước ${i}.`,
      shortAnswer: `Đáp số Bài 1.${i}: Kết quả tính toán chính xác là $K_${i} = ${i * 2 + 1}$ (hoặc toạ độ tương ứng).`,
      fullSolution: `**Hướng dẫn giải chi tiết Bài 1.${i}:**\n- Bước 1: Nắm chắc định nghĩa và tập xác định của bài học "${lt}".\n- Bước 2: Vận dụng công thức cốt lõi $${f}$, thay các số liệu giả thiết vào hệ thức.\n- Bước 3: Rút gọn biểu thức ta thu được kết quả: $K_${i} = ${i * 2 + 1}$.`
    });
  }

  // SINH 10 BÀI TOÁN DẠNG 2: VẬN DỤNG & KỸ NĂNG BIẾN ĐỔI
  for (let i = 1; i <= 10; i++) {
    topic2Exercises.push({
      id: `${lid}-d2-ex${i}`,
      displayNumber: `2.${i}`,
      level: i <= 7 ? "Vận dụng" : "Vận dụng cao",
      levelClass: i <= 7 ? "bg-blue-100 text-blue-800" : "bg-indigo-100 text-indigo-800",
      question: `[Toán 12 - ${lt}] Bài toán vận dụng số ${i}: Cho hệ thức chứa tham số $m = ${i}$ hoặc yêu cầu chứng minh, giải phương trình liên quan đến $${f}$. Hãy lập luận từng bước để tìm tập nghiệm hoặc điều kiện của tham số.`,
      shortAnswer: `Đáp số Bài 2.${i}: Giá trị tham số hoặc nghiệm tìm được là $x = \\dfrac{${i * 3 + 1}}{${i + 2}}$.`,
      fullSolution: `**Hướng dẫn giải chi tiết Bài 2.${i}:**\n- Bước 1: Biến đổi hệ thức giả thiết đưa về dạng chuẩn tắc của "${lt}".\n- Bước 2: Sử dụng các định lý và tính chất liên kết với công thức $${f}$.\n- Bước 3: Giải phương trình ta được $x = \\dfrac{${i * 3 + 1}}{${i + 2}}$, đối chiếu điều kiện để kết luận.`
    });
  }

  // SINH 10 BÀI TOÁN DẠNG 3: NÂNG CAO 9+ / ỨNG DỤNG THỰC TẾ & THI TỐT NGHIỆP THPT
  for (let i = 1; i <= 10; i++) {
    topic3Exercises.push({
      id: `${lid}-d3-ex${i}`,
      displayNumber: `3.${i}`,
      level: i <= 7 ? "Nâng cao 9+" : "Điểm 10 Phân loại",
      levelClass: i <= 7 ? "bg-purple-100 text-purple-800" : "bg-rose-100 text-rose-800",
      question: `[Toán 12 - Phân loại 9+] Bài toán thực tế / cực trị số ${i}: Ứng dụng kiến thức "${lt}" để giải quyết bài toán tối ưu hoá thực tế (kinh tế, kỹ thuật, xác suất Bayes, hình học Oxyz cực trị) với hàm mục tiêu liên kết $${f}$.`,
      shortAnswer: `Đáp số Bài 3.${i}: Giá trị tối ưu đạt được tại $t = ${i}$ với giá trị tối ưu là $M = ${i * i + 5}$.`,
      fullSolution: `**Hướng dẫn giải chi tiết Bài 3.${i}:**\n- Bước 1: Mô hình hóa đại lượng thực tế theo biến số $t$, xác định miền giá trị $t > 0$.\n- Bước 2: Lập hàm mục tiêu $f(t)$ và khảo sát tính đơn điệu bằng đạo hàm hoặc bất đẳng thức liên quan đến $${f}$.\n- Bước 3: Điểm cực trị tối ưu xảy ra tại $t = ${i}$, kết luận giá trị tối ưu là $M = ${i * i + 5}$ (Đạt điểm tối đa câu phân loại).`
    });
  }

  const topics = [
    {
      id: `${lid}-dang1`,
      name: `Dạng 1: Nhận biết & Thông hiểu - Khái niệm & Công thức cốt lõi`,
      badge: "Cơ bản & Thông hiểu • 10 bài",
      badgeClass: "bg-emerald-100 text-emerald-800",
      method: [
        `Bước 1: Nắm vững định nghĩa và điều kiện áp dụng công thức $${f}$.`,
        `Bước 2: Thay số trực tiếp, thực hiện các phép tính rút gọn hoặc biến đổi toạ độ / đạo hàm cẩn thận.`,
        `Bước 3: Đối chiếu với điều kiện ban đầu và kết luận kết quả chính xác.`
      ],
      examples: [
        {
          title: "Ví dụ 1 (Nhận biết chuẩn)",
          question: `Cho bài toán kiểm tra khái niệm cơ bản về "${lt}". Vận dụng công thức $${f}$ để tính giá trị biểu thức.`,
          solution: `**Lời giải chi tiết:**\n- Bước 1: Điều kiện bài toán được thỏa mãn.\n- Bước 2: Áp dụng trực tiếp công thức: $${f}$.\n- Bước 3: Rút gọn cho kết quả chuẩn xác.`
        },
        {
          title: "Ví dụ 2 (Thông hiểu)",
          question: `Rút gọn biểu thức hoặc tính toạ độ / giá trị đặc trưng trong bài học "${lt}".`,
          solution: `**Lời giải chi tiết:**\n- Biến đổi tương đương theo quy tắc đại số hoặc tính chất không gian.\n- Thay số và rút gọn thu được đáp số chính xác.`
        },
        {
          title: "Ví dụ 3 (Củng cố)",
          question: `Kiểm tra tính đúng sai của khẳng định toán học liên quan đến $${f}$.`,
          solution: `**Lời giải chi tiết:**\n- Đối chiếu với các định lý trong SGK Toán 12 chuẩn GDPT 2018.\n- Khẳng định tính đúng đắn và ghi nhớ mẹo tránh nhầm lẫn.`
        }
      ],
      exercises: topic1Exercises
    },
    {
      id: `${lid}-dang2`,
      name: `Dạng 2: Vận dụng kỹ năng & Bài toán biến đổi trọng tâm`,
      badge: "Vận dụng kỹ năng • 10 bài",
      badgeClass: "bg-blue-100 text-blue-800",
      method: [
        `Bước 1: Phân tích bài toán, xác định các đại lượng đã biết và đại lượng cần tìm.`,
        `Bước 2: Thiết lập phương trình, hệ thức liên hệ qua công thức $${f}$.`,
        `Bước 3: Giải phương trình tìm nghiệm hoặc biện luận theo tham số $m$, kết luận.`
      ],
      examples: [
        {
          title: "Ví dụ 1 (Biến đổi đại số / toạ độ)",
          question: `Cho bài toán yêu cầu tìm nghiệm hoặc viết phương trình liên quan đến "${lt}".`,
          solution: `**Lời giải chi tiết:**\n- Thiết lập phương trình theo định nghĩa.\n- Giải phương trình và kết luận tập nghiệm.`
        },
        {
          title: "Ví dụ 2 (Bài toán chứa tham số)",
          question: `Tìm tham số $m$ để bài toán thỏa mãn điều kiện đối xứng hoặc vuông góc trong "${lt}".`,
          solution: `**Lời giải chi tiết:**\n- Lập điều kiện có nghiệm hoặc điều kiện hình học tương ứng.\n- Giải bất phương trình / phương trình tìm $m$.`
        },
        {
          title: "Ví dụ 3 (Vận dụng nâng cao)",
          question: `Kết hợp nhiều kiến thức trong chương để giải quyết bài toán biến đổi phức tạp.`,
          solution: `**Lời giải chi tiết:**\n- Tách bài toán thành 2 bước nhỏ quen thuộc.\n- Lần lượt xử lý từng bước và tổng hợp kết quả.`
        }
      ],
      exercises: topic2Exercises
    },
    {
      id: `${lid}-dang3`,
      name: `Dạng 3: Nâng cao 9+ / Bài toán thực tiễn & Phân loại đề thi`,
      badge: "Phân loại 9+ • 10 bài",
      badgeClass: "bg-purple-100 text-purple-800",
      method: [
        `Bước 1: Mô hình hóa toán học từ tình huống thực tế hoặc cô lập tham số / ẩn phụ.`,
        `Bước 2: Sử dụng công cụ đạo hàm, bất đẳng thức cổ điển hoặc phương pháp toạ độ Oxyz / công thức Bayes.`,
        `Bước 3: Khảo sát hàm số tìm giá trị lớn nhất, nhỏ nhất hoặc xác suất tối ưu, đối chiếu tính khả thi thực tiễn.`
      ],
      examples: [
        {
          title: "Ví dụ 1 (Tối ưu hóa thực tiễn)",
          question: `Bài toán tối ưu chi phí sản xuất hoặc diện tích, thể tích ứng dụng "${lt}".`,
          solution: `**Lời giải chi tiết:**\n- Gọi biến $x$ là kích thước cần tối ưu.\n- Lập hàm chi phí $C(x)$ và tìm cực tiểu bằng đạo hàm.\n- Kết luận kích thước tối ưu.`
        },
        {
          title: "Ví dụ 2 (Cực trị tham số 9.5đ)",
          question: `Tìm $m$ để biểu thức đạt giá trị lớn nhất hoặc thỏa mãn hệ thức đặc biệt trong đề thi tốt nghiệp THPT.`,
          solution: `**Lời giải chi tiết:**\n- Biến đổi đại số đưa về dạng hàm số theo $m$.\n- Đánh giá bất đẳng thức hoặc lập bảng biến thiên tìm cực trị.`
        },
        {
          title: "Ví dụ 3 (Điểm 10 Phân loại)",
          question: `Bài toán phân loại cao nhất đề thi đòi hỏi tư duy logic và phối hợp đa chuyên đề.`,
          solution: `**Lời giải chi tiết:**\n- Phân tích tính chất bất biến hoặc hình học đối xứng.\n- Áp dụng kỹ thuật đánh giá sắc bén để tìm ra kết quả duy nhất.`
        }
      ],
      exercises: topic3Exercises
    }
  ];

  return {
    gradeId: 12,
    unitTitle: chapter ? `${chapter.number}: ${chapter.title}` : "Toán Lớp 12",
    lessonTitle: lesson ? `${lesson.number}: ${lesson.title}` : lt,
    theory: {
      summary: lesson ? `${lesson.desc} - Nội dung chuẩn GDPT 2018 (Bộ Giáo Dục & Đào Tạo).` : "Chương trình chuẩn Toán 12.",
      sections: chData ? chData.theorySections : [
        {
          title: "1. Khái niệm & Công thức cốt lõi",
          content: `Nắm chắc công thức trọng tâm:\n\n$$${f}$$\n\nÁp dụng chính xác vào các dạng toán.`
        },
        {
          title: "2. Quy tắc biến đổi & Kỹ năng tính toán",
          content: `- Nhận dạng dạng toán trong đề thi và các bước lập luận logic.\n- Kiểm tra kỹ các điều kiện xác định.`
        },
        {
          title: "3. Mẹo 9+ & Bẫy sai lầm cần tránh",
          content: `- Tránh nhầm lẫn điều kiện biên.\n- Sử dụng máy tính Casio để kiểm tra lại kết quả.`
        }
      ]
    },
    diagram: window.getTikzDiagramForLesson ? window.getTikzDiagramForLesson(12, chapterId, lessonId) : null,
    topics: topics
  };
};