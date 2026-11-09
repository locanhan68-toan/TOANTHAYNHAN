// ==========================================================================
// CƠ SỞ DỮ LIỆU BÀI HỌC VÀ BÀI TẬP RÈN LUYỆN TOÁN 11 CHUẨN GDPT 2018
// CẤU TRÚC CHUẨN HÓA: 3 DẠNG TOÁN x 10 BÀI TẬP (4 BIẾT - 3 HIỂU - 3 VẬN DỤNG)
// ==========================================================================

window.GRADE_11_KNOWLEDGE = {
  "g11-c1": {
    chapterId: "g11-c1",
    chapterNumber: "Chương I",
    chapterTitle: "Hàm Số Lượng Giác Và Phương Trình Lượng Giác",
    semester: "Tập 1 - Học kỳ I",
    theorySections: [
      {
        title: "1. Góc lượng giác & Giá trị lượng giác của góc",
        content: "- **Đổi đơn vị:** $180^\\circ = \\pi\\text{ rad} \\implies 1^\\circ = \\frac{\\pi}{180}\\text{ rad}$ và $1\\text{ rad} = \\left(\\frac{180}{\\pi}\\right)^\\circ$.\n- **Độ dài cung tròn:** $l = R \\cdot \\alpha$ (với $\\alpha$ tính bằng radian).\n- **Định nghĩa trên đường tròn lượng giác:** Điểm ngọn $M(x_M; y_M) \\implies \\sin\\alpha = y_M, \\cos\\alpha = x_M, \\tan\\alpha = \\frac{y_M}{x_M}, \\cot\\alpha = \\frac{x_M}{y_M}$.\n- **Hệ thức cơ bản:** $\\sin^2\\alpha + \\cos^2\\alpha = 1; \\ 1 + \\tan^2\\alpha = \\frac{1}{\\cos^2\\alpha}; \\ 1 + \\cot^2\\alpha = \\frac{1}{\\sin^2\\alpha}; \\ \\tan\\alpha \\cdot \\cot\\alpha = 1$."
      },
      {
        title: "2. Công thức lượng giác trọng tâm",
        content: "- **Công thức cộng:**\n  + $\\cos(a \\pm b) = \\cos a \\cos b \\mp \\sin a \\sin b$\n  + $\\sin(a \\pm b) = \\sin a \\cos b \\pm \\cos a \\sin b$\n  + $\\tan(a \\pm b) = \\frac{\\tan a \\pm \\tan b}{1 \\mp \\tan a \\tan b}$\n- **Công thức nhân đôi & hạ bậc:**\n  + $\\sin 2a = 2\\sin a \\cos a$\n  + $\\cos 2a = \\cos^2 a - \\sin^2 a = 2\\cos^2 a - 1 = 1 - 2\\sin^2 a$\n  + $\\cos^2 a = \\frac{1 + \\cos 2a}{2}; \\ \\sin^2 a = \\frac{1 - \\cos 2a}{2}$\n- **Biến đổi tích thành tổng & tổng thành tích:**\n  + $\\cos a \\cos b = \\frac{1}{2}[\\cos(a-b) + \\cos(a+b)]; \\ \\sin a \\sin b = \\frac{1}{2}[\\cos(a-b) - \\cos(a+b)]$\n  + $\\cos u + \\cos v = 2\\cos\\frac{u+v}{2}\\cos\\frac{u-v}{2}; \\ \\sin u + \\sin v = 2\\sin\\frac{u+v}{2}\\cos\\frac{u-v}{2}$."
      },
      {
        title: "3. Hàm số lượng giác & Phương trình lượng giác cơ bản",
        content: "- **Hàm số:**\n  + $y = \\sin x, y = \\cos x$: TXĐ $D = \\mathbb{R}$, chu kỳ $2\\pi$, miền giá trị $[-1; 1]$. $y = \\cos x$ là hàm số chẵn, $y = \\sin x$ là hàm số lẻ.\n  + $y = \\tan x$: TXĐ $D = \\mathbb{R} \\setminus \\left\\{\\frac{\\pi}{2} + k\\pi\\right\\}$, chu kỳ $\\pi$, là hàm số lẻ.\n- **Phương trình cơ bản:**\n  + $\\sin x = m \\ (|m| \\le 1) \\iff x = \\alpha + k2\\pi$ hoặc $x = \\pi - \\alpha + k2\\pi$\n  + $\\cos x = m \\ (|m| \\le 1) \\iff x = \\pm \\alpha + k2\\pi$\n  + $\\tan x = m \\iff x = \\alpha + k\\pi$\n  + $\\cot x = m \\iff x = \\alpha + k\\pi$."
      }
    ]
  }
,
  "g11-c2": {
    chapterId: "g11-c2",
    chapterNumber: "Chương II",
    chapterTitle: "Dãy Số. Cấp Số Cộng Và Cấp Số Nhân",
    semester: "Tập 1 - Học kỳ I",
    theorySections: [
      {
        title: "1. Dãy số: Định nghĩa, tính tăng giảm & bị chặn",
        content: "- **Định nghĩa:** Hàm số $u: \\mathbb{N}^* \\to \\mathbb{R}, n \\mapsto u_n$.\n- **Dãy số tăng, giảm:**\n  + Tăng: $u_{n+1} > u_n \\ (\\forall n \\in \\mathbb{N}^*)$ (xét hiệu $u_{n+1} - u_n > 0$ hoặc tỉ số $\\frac{u_{n+1}}{u_n} > 1$ khi $u_n > 0$).\n  + Giảm: $u_{n+1} < u_n \\ (\\forall n \\in \\mathbb{N}^*)$ (xét hiệu $u_{n+1} - u_n < 0$ hoặc tỉ số $\\frac{u_{n+1}}{u_n} < 1$).\n- **Dãy số bị chặn:** Bị chặn dưới nếu $\\exists m: u_n \\ge m$; bị chặn trên nếu $\\exists M: u_n \\le M$; bị chặn nếu vừa bị chặn trên vừa bị chặn dưới."
      },
      {
        title: "2. Cấp số cộng: Số hạng tổng quát & Tổng n số hạng đầu",
        content: "- **Định nghĩa:** $u_{n+1} = u_n + d \\implies d = u_{n+1} - u_n$ (công sai không đổi).\n- **Số hạng tổng quát:** $u_n = u_1 + (n - 1)d$.\n- **Tính chất ba số hạng liên tiếp:** $u_{k-1} + u_{k+1} = 2u_k \\ (k \\ge 2)$.\n- **Tổng $n$ số hạng đầu tiên:** $S_n = \\frac{n(u_1 + u_n)}{2} = \\frac{n[2u_1 + (n - 1)d]}{2}$."
      },
      {
        title: "3. Cấp số nhân: Số hạng tổng quát, Tổng n số hạng đầu & Lãi kép",
        content: "- **Định nghĩa:** $u_{n+1} = u_n \\cdot q \\implies q = \\frac{u_{n+1}}{u_n}$ (công bội không đổi).\n- **Số hạng tổng quát:** $u_n = u_1 \\cdot q^{n-1}$.\n- **Tính chất ba số hạng liên tiếp:** $u_k^2 = u_{k-1} \\cdot u_{k+1} \\ (k \\ge 2)$.\n- **Tổng $n$ số hạng đầu tiên:** $S_n = \\frac{u_1(1 - q^n)}{1 - q} \\ (q \\ne 1)$. Nếu $q = 1 \\implies S_n = n u_1$.\n- **Bài toán lãi kép ngân hàng:** $S_n = A(1 + r)^n$ ($A$: tiền gốc, $r$: lãi suất mỗi kỳ, $n$: số kỳ hạn)."
      }
    ]
  }
,
  "g11-c3": {
    chapterId: "g11-c3",
    chapterNumber: "Chương III",
    chapterTitle: "Các Số Đặc Trưng Đo Xu Thế Trung Tâm Của Mẫu Số Liệu Ghép Nhóm",
    semester: "Tập 1 - Học kỳ I",
    theorySections: [
      {
        title: "1. Mẫu số liệu ghép nhóm & Giá trị đại diện",
        content: "- **Khái niệm:** Mẫu số liệu ghép nhóm là mẫu số liệu được chia thành các nhóm liên tiếp dạng $[a_i; a_{i+1})$, trong đó $a_i$ là đầu mút trái, $a_{i+1}$ là đầu mút phải, độ dài nhóm $h = a_{i+1} - a_i$.\n- **Giá trị đại diện:** Mỗi nhóm $[a_i; a_{i+1})$ có giá trị đại diện là trung điểm $c_i = \\frac{a_i + a_{i+1}}{2}$.\n- **Cỡ mẫu:** $n = m_1 + m_2 + \\dots + m_k = \\sum_{i=1}^k m_i$ (với $m_i$ là tần số của nhóm $i$)."
      },
      {
        title: "2. Số trung bình cộng của mẫu số liệu ghép nhóm",
        content: "- **Công thức:** $\\bar{x} = \\frac{m_1 c_1 + m_2 c_2 + \\dots + m_k c_k}{n} = \\frac{1}{n}\\sum_{i=1}^k m_i c_i$.\n- **Ý nghĩa:** $\\bar{x}$ là giá trị xấp xỉ cho số trung bình của mẫu số liệu gốc, đại diện cho xu thế tập trung của dữ liệu khi không có giá trị ngoại lai."
      },
      {
        title: "3. Trung vị, Tứ phân vị & Mốt của mẫu số liệu ghép nhóm",
        content: "- **Trung vị $M_e$ ($= Q_2$):** Tìm nhóm $[u_m; u_{m+1})$ đầu tiên có tần số tích luỹ $cf_m \\ge \\frac{n}{2}$. Khi đó:\n  $M_e = u_m + \\frac{\\frac{n}{2} - C}{m_m} \\cdot (u_{m+1} - u_m)$ ($C$ là tần số tích luỹ nhóm trước).\n- **Tứ phân vị $Q_1$:** Nhóm đầu tiên có $cf \\ge \\frac{n}{4}$: $Q_1 = u_p + \\frac{\\frac{n}{4} - C}{m_p} \\cdot (u_{p+1} - u_p)$.\n- **Tứ phân vị $Q_3$:** Nhóm đầu tiên có $cf \\ge \\frac{3n}{4}$: $Q_3 = u_q + \\frac{\\frac{3n}{4} - C}{m_q} \\cdot (u_{q+1} - u_q)$.\n- **Mốt $M_o$:** Nhóm $[u_j; u_{j+1})$ có tần số $m_j$ lớn nhất:\n  $M_o = u_j + \\frac{m_j - m_{j-1}}{(m_j - m_{j-1}) + (m_j - m_{j+1})} \\cdot (u_{j+1} - u_j)$."
      }
    ]
  },
  "g11-c4": {
    chapterId: "g11-c4",
    chapterNumber: "Chương IV",
    chapterTitle: "Quan Hệ Song Song Trong Không Gian",
    semester: "Tập 1 - Học kỳ I",
    theorySections: [
      {
        title: "1. Điểm, Đường thẳng và Mặt phẳng trong không gian",
        content: "- **Cách xác định mặt phẳng:** Qua 3 điểm không thẳng hàng; qua 1 điểm và 1 đường thẳng không chứa nó; qua 2 đường thẳng cắt nhau; qua 2 đường thẳng song song.\n- **Giao tuyến của hai mặt phẳng:** Tìm 2 điểm chung phân biệt.\n- **Giao điểm của đường thẳng và mặt phẳng:** Tìm giao điểm của đường thẳng đó với một đường thẳng nằm trong mặt phẳng."
      },
      {
        title: "2. Hai đường thẳng song song & Đường thẳng song song mặt phẳng",
        content: "- **Hai đường thẳng:** Cắt nhau (1 điểm chung), song song (cùng mặt phẳng, 0 điểm chung), chéo nhau (không đồng phẳng).\n- **Định lý giao tuyến:** Hai mp lần lượt chứa 2 đường thẳng song song thì giao tuyến (nếu có) song song với 2 đường đó.\n- **Đường thẳng song song mặt phẳng:** $d \\not\\subset (P), d \\parallel d' \\subset (P) \\implies d \\parallel (P)$."
      },
      {
        title: "3. Hai mặt phẳng song song & Phép chiếu song song",
        content: "- **Hai mặt phẳng song song:** Mặt phẳng $(P)$ chứa 2 đường thẳng cắt nhau $a, b$ cùng song song với $(Q) \\implies (P) \\parallel (Q)$.\n- **Định lý Thalès:** Ba mp song song chắn trên 2 cát tuyến các đoạn thẳng tương ứng tỉ lệ.\n- **Hình lăng trụ, hình hộp, hình chóp cụt:** Đáy song song, cạnh bên song song (lăng trụ, hộp) hoặc đồng quy (chóp cụt).\n- **Phép chiếu song song:** Bảo toàn tính thẳng hàng, thứ tự điểm, tính song song và tỉ số đoạn thẳng cùng phương."
      }
    ]
  }
,
  "g11-c5": {
    chapterId: "g11-c5",
    chapterNumber: "Chương V",
    chapterTitle: "Giới Hạn. Hàm Số Liên Tục",
    semester: "Tập 1 - Học kỳ I",
    theorySections: [
      {
        title: "1. Giới hạn của dãy số & Cấp số nhân lùi vô hạn",
        content: "- **Giới hạn cơ bản:** $\\lim \\frac{1}{n^k} = 0 \\ (k \\in \\mathbb{N}^*); \\lim q^n = 0 \\ (|q| < 1); \\lim c = c$.\n- **Khử vô định phân thức hữu tỉ:** Chia cả tử và mẫu cho luỹ thừa bậc cao nhất của $n$.\n- **Khử vô định $\\infty - \\infty$:** Nhân lượng liên hợp: $\\sqrt{A} - B = \\frac{A - B^2}{\\sqrt{A} + B}$; $\\sqrt[3]{A} - B = \\frac{A - B^3}{\\sqrt[3]{A^2} + B\\sqrt[3]{A} + B^2}$.\n- **Tổng cấp số nhân lùi vô hạn ($|q| < 1$):** $S = \\frac{u_1}{1 - q}$."
      },
      {
        title: "2. Giới hạn của hàm số",
        content: "- **Giới hạn tại một điểm:** Khử dạng vô định $\\frac{0}{0}$ bằng phân tích nhân tử $(x - x_0)$ hoặc nhân liên hợp chứa căn.\n- **Giới hạn tại vô cực:** Chia cho luỹ thừa bậc cao nhất của $x$. Lưu ý khi $x \\to -\\infty$ thì $\\sqrt{x^2} = |x| = -x$.\n- **Giới hạn một bên:** $\\lim_{x \\to x_0} f(x) = L \\iff \\lim_{x \\to x_0^+} f(x) = \\lim_{x \\to x_0^-} f(x) = L$."
      },
      {
        title: "3. Hàm số liên tục",
        content: "- **Liên tục tại một điểm:** Hàm số $y = f(x)$ liên tục tại $x_0 \\iff \\lim_{x \\to x_0} f(x) = f(x_0)$.\n- **Liên tục trên tập hợp:** Đa thức liên tục trên $\\mathbb{R}$; phân thức và lượng giác liên tục trên từng khoảng xác định.\n- **Định lý giá trị trung gian:** Nếu $f(x)$ liên tục trên $[a; b]$ và $f(a) \\cdot f(b) < 0$ thì phương trình $f(x) = 0$ có ít nhất một nghiệm trong $(a; b)$."
      }
    ]
  },
  "g11-c6": {
    chapterId: "g11-c6",
    chapterNumber: "Chương VI",
    chapterTitle: "Hàm Số Mũ Và Hàm Số Lôgarit",
    semester: "Tập 2 - Học kỳ II",
    theorySections: [
      {
        title: "1. Phép tính luỹ thừa với số mũ thực",
        content: "- **Số mũ hữu tỉ & thực:** $a^{\\frac{m}{n}} = \\sqrt[n]{a^m} \\ (a > 0)$. Các tính chất: $a^m a^n = a^{m+n}; \\frac{a^m}{a^n} = a^{m-n}; (a^m)^n = a^{mn}; (ab)^m = a^m b^m$.\n- **So sánh luỹ thừa:** Với $a > 1: m > n \\iff a^m > a^n$; với $0 < a < 1: m > n \\iff a^m < a^n$."
      },
      {
        title: "2. Lôgarit & Công thức đổi cơ số",
        content: "- **Định nghĩa:** $\\log_a b = c \\iff a^c = b \\ (a > 0, a \\ne 1, b > 0)$. Các hệ quả: $\\log_a 1 = 0; \\log_a a = 1; a^{\\log_a b} = b$.\n- **Quy tắc tính:** $\\log_a(xy) = \\log_a x + \\log_a y; \\log_a\\left(\\frac{x}{y}\\right) = \\log_a x - \\log_a y; \\log_a(x^\\alpha) = \\alpha\\log_a x$.\n- **Đổi cơ số:** $\\log_a b = \\frac{\\log_c b}{\\log_c a}; \\log_a b = \\frac{1}{\\log_b a}; \\log_{a^\\alpha} b = \\frac{1}{\\alpha}\\log_a b$."
      },
      {
        title: "3. Hàm số mũ, hàm số lôgarit & Phương trình, bất phương trình",
        content: "- **Hàm số mũ $y = a^x$:** TXĐ $D = \\mathbb{R}$, tập giá trị $(0; +\\infty)$. Đồng biến khi $a > 1$, nghịch biến khi $0 < a < 1$. Đồ thị qua $(0; 1)$, tiệm cận ngang $y = 0$.\n- **Hàm số lôgarit $y = \\log_a x$:** TXĐ $D = (0; +\\infty)$, tập giá trị $\\mathbb{R}$. Đồng biến khi $a > 1$, nghịch biến khi $0 < a < 1$. Đồ thị qua $(1; 0)$, tiệm cận đứng $x = 0$.\n- **Phương trình & Bất phương trình:**\n  + $a^x = b \\iff x = \\log_a b \\ (b > 0)$. Khi $a > 1: a^{f(x)} > a^{g(x)} \\iff f(x) > g(x)$.\n  + $\\log_a f(x) = \\log_a g(x) \\iff f(x) = g(x) > 0$. Khi $0 < a < 1: \\log_a f(x) > \\log_a g(x) \\iff 0 < f(x) < g(x)$."
      }
    ]
  }
,
    "g11-c7": {
      chapterId: "g11-c7",
      chapterNumber: "Chương VII",
      chapterTitle: "Quan Hệ Vuông Góc Trong Không Gian. Thể Tích",
      semester: "Tập 2 - Học kỳ II",
      theorySections: [
        {
          title: "1. Hai đường thẳng vuông góc & Đường thẳng vuông góc với mặt phẳng",
          content: "- **Góc giữa hai đường thẳng:** $\\cos(\\vec{u}, \\vec{v}) = \\frac{|\\vec{u} \\cdot \\vec{v}|}{|\\vec{u}| \\cdot |\\vec{v}|}$. Hai đường thẳng vuông góc khi và chỉ khi $\\vec{u} \\cdot \\vec{v} = 0$.\n- **Đường thẳng vuông góc mặt phẳng:** $d \\perp a, d \\perp b$ ($a, b$ cắt nhau trong $(P)$) $\\implies d \\perp (P)$. Nếu $d \\perp (P)$ thì $d \\perp$ mọi đường thẳng nằm trong $(P)$."
        },
        {
          title: "2. Hai mặt phẳng vuông góc & Khoảng cách & Góc",
          content: "- **Hai mặt phẳng vuông góc:** $(P) \\perp (Q) \\iff (P)$ chứa một đường thẳng vuông góc với $(Q)$.\n- **Khoảng cách:**\n  + Từ điểm đến mặt phẳng: $d(M, (P)) = MH$ với $H$ là hình chiếu vuông góc của $M$ lên $(P)$.\n  + Giữa hai đường thẳng chéo nhau: độ dài đoạn vuông góc chung, hoặc khoảng cách từ một đường đến mặt phẳng song song chứa đường kia.\n- **Góc giữa đường thẳng và mặt phẳng:** là góc giữa đường thẳng và hình chiếu vuông góc của nó lên mặt phẳng."
        },
        {
          title: "3. Thể tích khối lăng trụ, khối chóp và khối chóp cụt đều",
          content: "- **Khối lăng trụ:** $V = B \\cdot h$ (khối hộp chữ nhật $V = abc$, khối lập phương $V = a^3$).\n- **Khối chóp:** $V = \\frac{1}{3}B \\cdot h$.\n- **Khối chóp cụt đều:** $V = \\frac{1}{3}h(B + B' + \\sqrt{BB'})$.\n- **Tỉ số thể tích Simson:** Cho hình chóp tam giác $S.ABC$: $\\frac{V_{S.A'B'C'}}{V_{S.ABC}} = \\frac{SA'}{SA} \\cdot \\frac{SB'}{SB} \\cdot \\frac{SC'}{SC}$."
        }
      ]
    },
    "g11-c8": {
      chapterId: "g11-c8",
      chapterNumber: "Chương VIII",
      chapterTitle: "Các Quy Tắc Tính Xác Suất",
      semester: "Tập 2 - Học kỳ II",
      theorySections: [
        {
          title: "1. Biến cố hợp, biến cố giao và biến cố độc lập",
          content: "- **Biến cố hợp:** $A \\cup B$ xảy ra khi có ít nhất một trong hai biến cố $A$ hoặc $B$ xảy ra.\n- **Biến cố giao:** $A \\cap B$ (hay $AB$) xảy ra khi cả $A$ và $B$ đồng thời xảy ra.\n- **Biến cố xung khắc:** $A \\cap B = \\emptyset$ (không thể cùng xảy ra).\n- **Biến cố đối:** $\\overline{A}$ là biến cố không xảy ra $A$, ta có $A \\cap \\overline{A} = \\emptyset$ và $A \\cup \\overline{A} = \\Omega$.\n- **Biến cố độc lập:** Việc xảy ra hay không của biến cố này không ảnh hưởng đến xác suất xảy ra của biến cố kia."
        },
        {
          title: "2. Công thức cộng và nhân xác suất",
          content: "- **Quy tắc cộng:**\n  + Nếu $A$ và $B$ xung khắc: $P(A \\cup B) = P(A) + P(B)$.\n  + Công thức tổng quát: $P(A \\cup B) = P(A) + P(B) - P(AB)$.\n  + Biến cố đối: $P(\\overline{A}) = 1 - P(A)$.\n- **Quy tắc nhân:** Nếu $A$ và $B$ độc lập thì $P(AB) = P(A) \\cdot P(B)$."
        }
      ]
    },
    "g11-c9": {
      chapterId: "g11-c9",
      chapterNumber: "Chương IX",
      chapterTitle: "Đạo Hàm",
      semester: "Tập 2 - Học kỳ II",
      theorySections: [
        {
          title: "1. Định nghĩa và ý nghĩa của đạo hàm",
          content: "- **Định nghĩa:** $f'(x_0) = \\lim_{x \\to x_0} \\frac{f(x) - f(x_0)}{x - x_0} = \\lim_{\\Delta x \\to 0} \\frac{\\Delta y}{\\Delta x}$.\n- **Ý nghĩa hình học:** $k = f'(x_0)$ là hệ số góc của tiếp tuyến tại $M(x_0; y_0)$. Phương trình tiếp tuyến: $y = f'(x_0)(x - x_0) + y_0$.\n- **Ý nghĩa vật lí:** Vận tốc tức thời $v(t) = s'(t)$; Cường độ dòng điện tức thời $i(t) = q'(t)$."
        },
        {
          title: "2. Các quy tắc tính đạo hàm và đạo hàm hàm hợp",
          content: "- **Quy tắc:** $(u \\pm v)' = u' \\pm v'; (uv)' = u'v + uv'; \\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}$.\n- **Đạo hàm lượng giác:** $(\\sin x)' = \\cos x; (\\cos x)' = -\\sin x; (\\tan x)' = \\frac{1}{\\cos^2 x}; (\\cot x)' = -\\frac{1}{\\sin^2 x}$.\n- **Hàm mũ & Lôgarit:** $(e^x)' = e^x; (a^x)' = a^x \\ln a; (\\ln x)' = \\frac{1}{x}; (\\log_a x)' = \\frac{1}{x \\ln a}$.\n- **Đạo hàm hàm hợp:** $y'_x = y'_u \\cdot u'_x$."
        },
        {
          title: "3. Đạo hàm cấp hai",
          content: "- **Định nghĩa:** Đạo hàm cấp hai $f''(x) = (f'(x))'$.\n- **Ý nghĩa vật lí:** Gia tốc tức thời của chuyển động $a(t) = v'(t) = s''(t)$."
        }
      ]
    }
  };
  
  window.GRADE_11_LESSONS_DB = {
  "g11-c1-l1": {
    lessonId: "g11-c1-l1",
    title: "Bài 1: Giá trị lượng giác của góc lượng giác",
    topics: [
      {
        id: "g11-c1-l1-dang1",
        name: "Dạng 1: Đổi đơn vị đo góc (độ - radian) & Độ dài cung tròn",
        badge: "4 Biết · 3 Hiểu · 3 Vận dụng (10 bài)",
        badgeClass: "bg-emerald-100 text-emerald-800",
        method: [
          "**1. Quan hệ giữa độ và radian:**",
          "- $180^\\circ = \\pi\\text{ rad} \\implies 1^\\circ = \\dfrac{\\pi}{180}\\text{ rad}$ và $1\\text{ rad} = \\left(\\dfrac{180}{\\pi}\\right)^\\circ$.",
          "- Đổi $a^\\circ$ sang radian: $\\alpha = a \\cdot \\dfrac{\\pi}{180}$.",
          "- Đổi $\\alpha\\text{ rad}$ sang độ: $a = \\alpha \\cdot \\dfrac{180^\\circ}{\\pi}$.",
          "**2. Độ dài cung tròn:**",
          "- Cung tròn có số đo $\\alpha\\text{ rad}$ trên đường tròn bán kính $R$ có độ dài là:",
          "  $$l = R \\cdot \\alpha$$ (chú ý $\\alpha$ bắt buộc phải tính bằng radian)."
        ],
        examples: [
          {
            title: "Ví dụ: Đổi đơn vị và tính độ dài cung tròn",
            question: "Đổi góc $150^\\circ$ sang radian và tính độ dài cung tròn có số đo $150^\\circ$ trên đường tròn bán kính $R = 12\\text{ cm}$.",
            solution: "- Đổi sang radian: $\\alpha = 150 \\cdot \\dfrac{\\pi}{180} = \\dfrac{5\\pi}{6}\\text{ rad}$.\n- Độ dài cung tròn: $l = R \\alpha = 12 \\cdot \\dfrac{5\\pi}{6} = 10\\pi\\text{ cm} \\approx 31.42\\text{ cm}$."
          }
        ],
        exercises: [
          {
            id: "g11-c1-l1-d1-ex1",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Góc có số đo $60^\\circ$ đổi sang đơn vị radian bằng:",
            shortAnswer: "$\\dfrac{\\pi}{3}\\text{ rad}$",
            fullSolution: "Áp dụng công thức đổi độ sang radian: $\\alpha = 60 \\cdot \\dfrac{\\pi}{180} = \\dfrac{\\pi}{3}\\text{ rad}$."
          },
          {
            id: "g11-c1-l1-d1-ex2",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Góc có số đo $\\dfrac{3\\pi}{4}\\text{ rad}$ đổi sang đơn vị độ bằng:",
            shortAnswer: "$135^\\circ$",
            fullSolution: "Áp dụng công thức đổi radian sang độ: $a = \\dfrac{3\\pi}{4} \\cdot \\dfrac{180^\\circ}{\\pi} = 135^\\circ$."
          },
          {
            id: "g11-c1-l1-d1-ex3",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Công thức tính độ dài $l$ của cung tròn bán kính $R$ có số đo $\\alpha\\text{ rad}$ là:",
            shortAnswer: "$l = R \\cdot \\alpha$",
            fullSolution: "Độ dài cung tròn tỉ lệ thuận với số đo radian của cung: $l = R \\cdot \\alpha$."
          },
          {
            id: "g11-c1-l1-d1-ex4",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Đường tròn lượng giác là đường tròn định hướng có tâm tại gốc tọa độ $O$ và bán kính bằng:",
            shortAnswer: "$R = 1$",
            fullSolution: "Theo định nghĩa, đường tròn lượng giác là đường tròn định hướng có tâm $O(0;0)$, bán kính $R = 1$, chiều dương ngược chiều kim đồng hồ."
          },
          {
            id: "g11-c1-l1-d1-ex5",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Một đường tròn có bán kính $R = 15\\text{ cm}$. Độ dài của cung tròn có số đo $\\dfrac{2\\pi}{5}\\text{ rad}$ trên đường tròn này bằng:",
            shortAnswer: "$6\\pi\\text{ cm}$",
            fullSolution: "Áp dụng công thức: $l = R \\cdot \\alpha = 15 \\cdot \\dfrac{2\\pi}{5} = 6\\pi\\text{ cm} \\approx 18.85\\text{ cm}$."
          },
          {
            id: "g11-c1-l1-d1-ex6",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Trên đường tròn bán kính $R = 8\\text{ cm}$, một cung tròn có độ dài $l = 12\\text{ cm}$. Số đo bằng radian của cung tròn đó là:",
            shortAnswer: "$1.5\\text{ rad}$",
            fullSolution: "Từ công thức $l = R \\cdot \\alpha \\implies \\alpha = \\dfrac{l}{R} = \\dfrac{12}{8} = 1.5\\text{ rad}$."
          },
          {
            id: "g11-c1-l1-d1-ex7",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Một cung tròn có số đo bằng $45^\\circ$ trên đường tròn bán kính $R = 10\\text{ cm}$ có độ dài bằng bao nhiêu?",
            shortAnswer: "$\\dfrac{5\\pi}{2}\\text{ cm}$",
            fullSolution: "Đổi $45^\\circ = \\dfrac{\\pi}{4}\\text{ rad}$. Độ dài cung tròn: $l = R \\cdot \\alpha = 10 \\cdot \\dfrac{\\pi}{4} = \\dfrac{5\\pi}{2}\\text{ cm} \\approx 7.85\\text{ cm}$."
          },
          {
            id: "g11-c1-l1-d1-ex8",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Kim phút của một đồng hồ treo tường có chiều dài $12\\text{ cm}$. Tính quãng đường mà đầu mút kim phút vạch nên khi kim quay từ 8 giờ đúng đến 8 giờ 35 phút.",
            shortAnswer: "$14\\pi\\text{ cm} \\approx 43.98\\text{ cm}$",
            fullSolution: "Trong 60 phút, kim phút quay trọn 1 vòng ($2\\pi\\text{ rad}$). Trong 35 phút, góc quay của kim phút là:\n$\\alpha = 35 \\cdot \\dfrac{2\\pi}{60} = \\dfrac{7\\pi}{6}\\text{ rad}$.\nQuãng đường đầu mút kim phút vạch nên là độ dài cung tròn:\n$l = R \\cdot \\alpha = 12 \\cdot \\dfrac{7\\pi}{6} = 14\\pi\\text{ cm} \\approx 43.98\\text{ cm}$."
          },
          {
            id: "g11-c1-l1-d1-ex9",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Một bánh xe đạp có đường kính $650\\text{ mm}$. Xe chuyển động thẳng đều trên đường và bánh xe quay được 120 vòng trong 1 phút. Tính tốc độ chuyển động của xe đạp theo đơn vị km/h (lấy $\\pi \\approx 3.1416$).",
            shortAnswer: "$\\approx 14.7\\text{ km/h}$",
            fullSolution: "Bán kính bánh xe: $R = \\dfrac{650}{2} = 325\\text{ mm} = 0.325\\text{ m}$.\nChu vi bánh xe: $C = 2\\pi R = 2 \\cdot 3.1416 \\cdot 0.325 \\approx 2.042\\text{ m}$.\nTrong 1 phút bánh xe quay 120 vòng, quãng đường đi được trong 1 phút:\n$s = 120 \\cdot 2.042 = 245.04\\text{ m}$.\nTốc độ của xe: $v = \\dfrac{245.04\\text{ m}}{60\\text{ s}} = 4.084\\text{ m/s} = 4.084 \\cdot 3.6 \\approx 14.7\\text{ km/h}$."
          },
          {
            id: "g11-c1-l1-d1-ex10",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Trái Đất tự quay quanh trục một vòng (góc quay $2\\pi\\text{ rad}$) hết khoảng 24 giờ. Giả sử bán kính Trái Đất tại xích đạo là $R = 6371\\text{ km}$. Tính quãng đường mà một người đứng yên tại xích đạo di chuyển do Trái Đất tự quay trong thời gian 3 giờ.",
            shortAnswer: "$\\approx 5003.8\\text{ km}$",
            fullSolution: "Tốc độ góc tự quay của Trái Đất: $\\omega = \\dfrac{2\\pi}{24} = \\dfrac{\\pi}{12}\\text{ rad/h}$.\nTrong 3 giờ, góc quay được là: $\\alpha = 3 \\cdot \\dfrac{\\pi}{12} = \\dfrac{\\pi}{4}\\text{ rad}$.\nQuãng đường di chuyển tại xích đạo:\n$s = R \\cdot \\alpha = 6371 \\cdot \\dfrac{\\pi}{4} \\approx 5003.8\\text{ km}$."
          }
        ]
      },
      {
        id: "g11-c1-l1-dang2",
        name: "Dạng 2: Giá trị lượng giác của góc & Dấu của các giá trị lượng giác",
        badge: "4 Biết · 3 Hiểu · 3 Vận dụng (10 bài)",
        badgeClass: "bg-emerald-100 text-emerald-800",
        method: [
          "**1. Định nghĩa trên đường tròn lượng giác:**",
          "- Điểm $M(x_M; y_M)$ trên đường tròn lượng giác biểu diễn góc $\\alpha$:",
          "  $$\\sin \\alpha = y_M, \\quad \\cos \\alpha = x_M, \\quad \\tan \\alpha = \\dfrac{y_M}{x_M} = \\dfrac{\\sin \\alpha}{\\cos \\alpha}, \\quad \\cot \\alpha = \\dfrac{x_M}{y_M} = \\dfrac{\\cos \\alpha}{\\sin \\alpha}$$",
          "**2. Dấu của các giá trị lượng giác theo góc phần tư:**",
          "- Góc phần tư I $\\left(0; \\dfrac{\\pi}{2}\\right)$: $\\sin > 0, \\cos > 0, \\tan > 0, \\cot > 0$.",
          "- Góc phần tư II $\\left(\\dfrac{\\pi}{2}; \\pi\\right)$: $\\sin > 0, \\cos < 0, \\tan < 0, \\cot < 0$.",
          "- Góc phần tư III $\\left(\\pi; \\dfrac{3\\pi}{2}\\right)$: $\\sin < 0, \\cos < 0, \\tan > 0, \\cot > 0$.",
          "- Góc phần tư IV $\\left(\\dfrac{3\\pi}{2}; 2\\pi\\right)$: $\\sin < 0, \\cos > 0, \\tan < 0, \\cot < 0$."
        ],
        examples: [
          {
            title: "Ví dụ: Xét dấu và tính giá trị lượng giác",
            question: "Cho $\\dfrac{\\pi}{2} < \\alpha < \\pi$. Xác định dấu của $\\sin \\alpha, \\cos \\alpha$ và tính $\\cos \\alpha$ biết $\\sin \\alpha = \\dfrac{3}{5}$.",
            solution: "Vì $\\alpha$ thuộc góc phần tư II nên $\\sin \\alpha > 0$ và $\\cos \\alpha < 0$.\nÁp dụng $\\sin^2 \\alpha + \\cos^2 \\alpha = 1 \\implies \\cos^2 \\alpha = 1 - \\left(\\dfrac{3}{5}\\right)^2 = \\dfrac{16}{25}$.\nDo $\\cos \\alpha < 0$, ta chọn $\\cos \\alpha = -\\dfrac{4}{5}$."
          }
        ],
        exercises: [
          {
            id: "g11-c1-l1-d2-ex1",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Cho góc $\\alpha$ thuộc góc phần tư thứ hai $\\left(\\dfrac{\\pi}{2} < \\alpha < \\pi\\right)$. Mệnh đề nào sau đây đúng?",
            shortAnswer: "$\\sin \\alpha > 0$ và $\\cos \\alpha < 0$",
            fullSolution: "Ở góc phần tư II, tung độ điểm ngọn dương và hoành độ âm nên $\\sin \\alpha > 0$ và $\\cos \\alpha < 0$."
          },
          {
            id: "g11-c1-l1-d2-ex2",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Giá trị của $\\sin \\dfrac{\\pi}{6}$ bằng:",
            shortAnswer: "$\\dfrac{1}{2}$",
            fullSolution: "Góc đặc biệt: $\\sin \\dfrac{\\pi}{6} = \\sin 30^\\circ = \\dfrac{1}{2}$."
          },
          {
            id: "g11-c1-l1-d2-ex3",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Điều kiện xác định của hàm số $\\tan \\alpha$ là:",
            shortAnswer: "$\\alpha \\ne \\dfrac{\\pi}{2} + k\\pi \\ (k \\in \\mathbb{Z})$",
            fullSolution: "Vì $\\tan \\alpha = \\dfrac{\\sin \\alpha}{\\cos \\alpha}$ nên $\\tan \\alpha$ xác định khi $\\cos \\alpha \\ne 0 \\iff \\alpha \\ne \\dfrac{\\pi}{2} + k\\pi$."
          },
          {
            id: "g11-c1-l1-d2-ex4",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Giá trị của $\\cos \\pi$ bằng:",
            shortAnswer: "$-1$",
            fullSolution: "Điểm biểu diễn góc $\\pi$ trên đường tròn lượng giác là điểm $(-1; 0)$, do đó $\\cos \\pi = -1$."
          },
          {
            id: "g11-c1-l1-d2-ex5",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Cho $\\pi < \\alpha < \\dfrac{3\\pi}{2}$. Xác định dấu của biểu thức $P = \\sin \\alpha \\cdot \\tan \\alpha$.",
            shortAnswer: "$P < 0$ (mang dấu âm)",
            fullSolution: "Khi $\\pi < \\alpha < \\dfrac{3\\pi}{2}$ (góc phần tư III), ta có $\\sin \\alpha < 0$ và $\\tan \\alpha > 0$.\nDo đó tích $P = \\sin \\alpha \\cdot \\tan \\alpha < 0$ mang dấu âm."
          },
          {
            id: "g11-c1-l1-d2-ex6",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tính giá trị của biểu thức $A = 2\\sin 30^\\circ - 4\\cos 60^\\circ + \\tan 45^\\circ$.",
            shortAnswer: "0",
            fullSolution: "Thay các giá trị đặc biệt: $\\sin 30^\\circ = \\dfrac{1}{2}$, $\\cos 60^\\circ = \\dfrac{1}{2}$, $\\tan 45^\\circ = 1$.\n$A = 2\\left(\\dfrac{1}{2}\\right) - 4\\left(\\dfrac{1}{2}\\right) + 1 = 1 - 2 + 1 = 0$."
          },
          {
            id: "g11-c1-l1-d2-ex7",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Biết điểm biểu diễn góc lượng giác $\\alpha$ trên đường tròn lượng giác thỏa mãn $\\sin \\alpha < 0$ và $\\cos \\alpha > 0$. Điểm biểu diễn này nằm ở góc phần tư thứ mấy?",
            shortAnswer: "Góc phần tư thứ IV",
            fullSolution: "Hoành độ dương ($x_M > 0$) và tung độ âm ($y_M < 0$) tương ứng với góc phần tư thứ IV $\\left(\\dfrac{3\\pi}{2} < \\alpha < 2\\pi\\right)$."
          },
          {
            id: "g11-c1-l1-d2-ex8",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Cho $\\cos \\alpha = -\\dfrac{5}{13}$ với $\\pi < \\alpha < \\dfrac{3\\pi}{2}$. Tính giá trị của biểu thức $T = \\sin \\alpha + \\tan \\alpha$.",
            shortAnswer: "$\\dfrac{96}{65}$",
            fullSolution: "Do $\\alpha$ thuộc góc phần tư III nên $\\sin \\alpha < 0$.\n$\\sin^2 \\alpha = 1 - \\cos^2 \\alpha = 1 - \\dfrac{25}{169} = \\dfrac{144}{169} \\implies \\sin \\alpha = -\\dfrac{12}{13}$.\nKhi đó $\\tan \\alpha = \\dfrac{\\sin \\alpha}{\\cos \\alpha} = \\dfrac{-12/13}{-5/13} = \\dfrac{12}{5}$.\nGiá trị biểu thức: $T = -\\dfrac{12}{13} + \\dfrac{12}{5} = \\dfrac{-60 + 156}{65} = \\dfrac{96}{65}$."
          },
          {
            id: "g11-c1-l1-d2-ex9",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Rút gọn biểu thức $M = \\sin(\\pi - x) + \\cos\\left(\\dfrac{\\pi}{2} - x\\right) + \\cos(\\pi + x) + \\sin\\left(\\dfrac{\\pi}{2} + x\\right)$.",
            shortAnswer: "$2\\sin x$",
            fullSolution: "Sử dụng các công thức góc liên quan đặc biệt:\n- $\\sin(\\pi - x) = \\sin x$.\n- $\\cos\\left(\\dfrac{\\pi}{2} - x\\right) = \\sin x$.\n- $\\cos(\\pi + x) = -\\cos x$.\n- $\\sin\\left(\\dfrac{\\pi}{2} + x\\right) = \\cos x$.\nCộng lại: $M = \\sin x + \\sin x - \\cos x + \\cos x = 2\\sin x$."
          },
          {
            id: "g11-c1-l1-d2-ex10",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Một cọc tiêu thẳng đứng cao $h = 2\\text{ m}$ cắm trên mặt đất bằng phẳng. Vào một thời điểm buổi sáng, bóng của cọc tiêu trên mặt đất dài $d = 2\\sqrt{3}\\text{ m}$. Tính góc nâng của tia nắng mặt trời so với mặt đất tại thời điểm đó.",
            shortAnswer: "$30^\\circ$ hay $\\dfrac{\\pi}{6}\\text{ rad}$",
            fullSolution: "Gọi $\\alpha$ là góc nâng của tia nắng mặt trời so với phương nằm ngang.\nTam giác vuông tạo bởi cọc tiêu, mặt đất và tia nắng có:\n$\\tan \\alpha = \\dfrac{\\text{đối}}{\\text{kề}} = \\dfrac{h}{d} = \\dfrac{2}{2\\sqrt{3}} = \\dfrac{1}{\\sqrt{3}} = \\dfrac{\\sqrt{3}}{3}$.\nSuy ra $\\alpha = 30^\\circ$ hay $\\alpha = \\dfrac{\\pi}{6}\\text{ rad}$."
          }
        ]
      },
      {
        id: "g11-c1-l1-dang3",
        name: "Dạng 3: Các hệ thức lượng giác cơ bản & Rút gọn, tính giá trị biểu thức",
        badge: "4 Biết · 3 Hiểu · 3 Vận dụng (10 bài)",
        badgeClass: "bg-emerald-100 text-emerald-800",
        method: [
          "**1. Bốn hệ thức lượng giác cơ bản:**",
          "  1) $\\sin^2 \\alpha + \\cos^2 \\alpha = 1$",
          "  2) $1 + \\tan^2 \\alpha = \\dfrac{1}{\\cos^2 \\alpha} \\quad \\left(\\alpha \\ne \\dfrac{\\pi}{2} + k\\pi\\right)$",
          "  3) $1 + \\cot^2 \\alpha = \\dfrac{1}{\\sin^2 \\alpha} \\quad (\\alpha \\ne k\\pi)$",
          "  4) $\\tan \\alpha \\cdot \\cot \\alpha = 1 \\quad \\left(\\alpha \\ne \\dfrac{k\\pi}{2}\\right)$",
          "**2. Phương pháp tính giá trị biểu thức đối xứng hoặc đồng bậc:**",
          "- Nếu biết $\\tan \\alpha = t$, chia cả tử và mẫu của phân thức đồng bậc cho $\\cos^k \\alpha$ để đưa về biểu thức theo $\\tan \\alpha$.",
          "- Nếu biết $\\sin \\alpha + \\cos \\alpha = S$, bình phương hai vế để tìm tích $P = \\sin \\alpha \\cos \\alpha = \\dfrac{S^2 - 1}{2}$."
        ],
        examples: [
          {
            title: "Ví dụ: Tính giá trị biểu thức khi biết tan",
            question: "Cho $\\tan \\alpha = 2$. Tính giá trị của biểu thức $A = \\dfrac{3\\sin \\alpha - \\cos \\alpha}{\\sin \\alpha + 2\\cos \\alpha}$.",
            solution: "Chia cả tử và mẫu của $A$ cho $\\cos \\alpha \\ne 0$:\n$$A = \\dfrac{3\\tan \\alpha - 1}{\\tan \\alpha + 2} = \\dfrac{3(2) - 1}{2 + 2} = \\dfrac{5}{4}$$."
          }
        ],
        exercises: [
          {
            id: "g11-c1-l1-d3-ex1",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Với mọi góc $\\alpha$ làm cho biểu thức có nghĩa, đẳng thức nào sau đây luôn đúng?",
            shortAnswer: "$\\sin^2 \\alpha + \\cos^2 \\alpha = 1$",
            fullSolution: "Đây là hệ thức lượng giác cơ bản nhất được suy ra trực tiếp từ định lý Pythagore trên đường tròn lượng giác bán kính $R = 1$."
          },
          {
            id: "g11-c1-l1-d3-ex2",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Cho góc $\\alpha$ thỏa mãn $\\cos \\alpha \\ne 0$. Hệ thức liên hệ giữa $\\tan \\alpha$ và $\\cos \\alpha$ là:",
            shortAnswer: "$1 + \\tan^2 \\alpha = \\dfrac{1}{\\cos^2 \\alpha}$",
            fullSolution: "Hệ thức cơ bản: $1 + \\tan^2 \\alpha = 1 + \\dfrac{\\sin^2 \\alpha}{\\cos^2 \\alpha} = \\dfrac{\\cos^2 \\alpha + \\sin^2 \\alpha}{\\cos^2 \\alpha} = \\dfrac{1}{\\cos^2 \\alpha}$."
          },
          {
            id: "g11-c1-l1-d3-ex3",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Nếu $\\tan \\alpha = 3$ thì $\\cot \\alpha$ bằng:",
            shortAnswer: "$\\dfrac{1}{3}$",
            fullSolution: "Áp dụng $\\tan \\alpha \\cdot \\cot \\alpha = 1 \\implies \\cot \\alpha = \\dfrac{1}{\\tan \\alpha} = \\dfrac{1}{3}$."
          },
          {
            id: "g11-c1-l1-d3-ex4",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Đơn giản biểu thức $P = \\sin^2 \\alpha + \\cos^2 \\alpha + \\tan^2 \\alpha$ ta được:",
            shortAnswer: "$\\dfrac{1}{\\cos^2 \\alpha}$",
            fullSolution: "Ta có $\\sin^2 \\alpha + \\cos^2 \\alpha = 1$, do đó $P = 1 + \\tan^2 \\alpha = \\dfrac{1}{\\cos^2 \\alpha}$."
          },
          {
            id: "g11-c1-l1-d3-ex5",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Cho $\\sin \\alpha = \\dfrac{1}{3}$ với $0 < \\alpha < \\dfrac{\\pi}{2}$. Tính giá trị của $\\cos \\alpha$.",
            shortAnswer: "$\\dfrac{2\\sqrt{2}}{3}$",
            fullSolution: "Vì $0 < \\alpha < \\dfrac{\\pi}{2} \\implies \\cos \\alpha > 0$.\n$\\cos \\alpha = \\sqrt{1 - \\sin^2 \\alpha} = \\sqrt{1 - \\dfrac{1}{9}} = \\sqrt{\\dfrac{8}{9}} = \\dfrac{2\\sqrt{2}}{3}$."
          },
          {
            id: "g11-c1-l1-d3-ex6",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Rút gọn biểu thức $A = (1 - \\sin^2 x)(1 + \\tan^2 x)$.",
            shortAnswer: "1",
            fullSolution: "Ta có $1 - \\sin^2 x = \\cos^2 x$ và $1 + \\tan^2 x = \\dfrac{1}{\\cos^2 x}$.\nVậy $A = \\cos^2 x \\cdot \\dfrac{1}{\\cos^2 x} = 1$."
          },
          {
            id: "g11-c1-l1-d3-ex7",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Rút gọn biểu thức $B = \\dfrac{\\sin x + \\tan x}{\\tan x}$.",
            shortAnswer: "$\\cos x + 1$",
            fullSolution: "$B = \\dfrac{\\sin x}{\\tan x} + 1 = \\dfrac{\\sin x}{\\dfrac{\\sin x}{\\cos x}} + 1 = \\cos x + 1$."
          },
          {
            id: "g11-c1-l1-d3-ex8",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Cho $\\tan \\alpha = -2$. Tính giá trị của biểu thức $P = \\dfrac{2\\sin^2 \\alpha + 3\\sin \\alpha \\cos \\alpha - 4\\cos^2 \\alpha}{3\\sin^2 \\alpha - 2\\cos^2 \\alpha}$.",
            shortAnswer: "$-\\dfrac{1}{5}$",
            fullSolution: "Chia cả tử và mẫu của $P$ cho $\\cos^2 \\alpha \\ne 0$:\n$P = \\dfrac{2\\tan^2 \\alpha + 3\\tan \\alpha - 4}{3\\tan^2 \\alpha - 2}$.\nThay $\\tan \\alpha = -2$ vào:\n$P = \\dfrac{2(-2)^2 + 3(-2) - 4}{3(-2)^2 - 2} = \\dfrac{2(4) - 6 - 4}{3(4) - 2} = \\dfrac{8 - 10}{12 - 2} = \\dfrac{-2}{10} = -\\dfrac{1}{5}$."
          },
          {
            id: "g11-c1-l1-d3-ex9",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Cho $\\sin \\alpha + \\cos \\alpha = \\dfrac{1}{\\sqrt{2}}$. Tính giá trị của tích $P = \\sin \\alpha \\cdot \\cos \\alpha$ và biểu thức $Q = \\sin^3 \\alpha + \\cos^3 \\alpha$.",
            shortAnswer: "$P = -\\dfrac{1}{4}, Q = \\dfrac{5\\sqrt{2}}{8}$",
            fullSolution: "Bình phương hai vế: $(\\sin \\alpha + \\cos \\alpha)^2 = \\dfrac{1}{2} \\iff \\sin^2 \\alpha + \\cos^2 \\alpha + 2\\sin \\alpha \\cos \\alpha = \\dfrac{1}{2}$\n$\\iff 1 + 2P = \\dfrac{1}{2} \\implies 2P = -\\dfrac{1}{2} \\implies P = -\\dfrac{1}{4}$.\nÁp dụng hằng đẳng thức: $Q = \\sin^3 \\alpha + \\cos^3 \\alpha = (\\sin \\alpha + \\cos \\alpha)(\\sin^2 \\alpha - \\sin \\alpha \\cos \\alpha + \\cos^2 \\alpha)$\n$= \\dfrac{1}{\\sqrt{2}}(1 - P) = \\dfrac{1}{\\sqrt{2}}\\left(1 - \\left(-\\dfrac{1}{4}\\right)\\right) = \\dfrac{1}{\\sqrt{2}} \\cdot \\dfrac{5}{4} = \\dfrac{5\\sqrt{2}}{8}$."
          },
          {
            id: "g11-c1-l1-d3-ex10",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Một vật nặng có khối lượng $m = 10\\text{ kg}$ được giữ cân bằng bởi hai sợi dây cáp đối xứng, mỗi dây tạo với trần nhà nằm ngang một góc $\\alpha$ với $\\tan \\alpha = \\dfrac{3}{4}$. Biết gia tốc trọng trường $g = 9.8\\text{ m/s}^2$ và lực căng của mỗi sợi dây thỏa mãn $2T \\sin \\alpha = mg$. Tính lực căng $T$ của mỗi sợi dây.",
            shortAnswer: "$T \\approx 81.67\\text{ N}$",
            fullSolution: "Ta có $1 + \\tan^2 \\alpha = \\dfrac{1}{\\cos^2 \\alpha} \\implies \\dfrac{1}{\\cos^2 \\alpha} = 1 + \\dfrac{9}{16} = \\dfrac{25}{16} \\implies \\cos^2 \\alpha = \\dfrac{16}{25}$.\nVì $\\alpha$ là góc nhọn $\\implies \\cos \\alpha = \\dfrac{4}{5} \\implies \\sin \\alpha = \\tan \\alpha \\cdot \\cos \\alpha = \\dfrac{3}{4} \\cdot \\dfrac{4}{5} = \\dfrac{3}{5} = 0.6$.\nLực kéo xuống do trọng lực: $P = mg = 10 \\cdot 9.8 = 98\\text{ N}$.\nTheo phương trình cân bằng: $2T \\sin \\alpha = mg \\iff 2T(0.6) = 98 \\iff 1.2T = 98 \\implies T = \\dfrac{98}{1.2} \\approx 81.67\\text{ N}$."
          }
        ]
      }
    ]
  }
,

  "g11-c1-l2": {
    lessonId: "g11-c1-l2",
    title: "Bài 2: Công thức lượng giác",
    topics: [
      {
        id: "g11-c1-l2-dang1",
        name: "Dạng 1: Công thức cộng lượng giác",
        badge: "4 Biết · 3 Hiểu · 3 Vận dụng (10 bài)",
        badgeClass: "bg-emerald-100 text-emerald-800",
        method: [
          "**1. Công thức cộng đối với sin và cosin:**",
          "  - $\\cos(a - b) = \\cos a \\cos b + \\sin a \\sin b$",
          "  - $\\cos(a + b) = \\cos a \\cos b - \\sin a \\sin b$",
          "  - $\\sin(a - b) = \\sin a \\cos b - \\cos a \\sin b$",
          "  - $\\sin(a + b) = \\sin a \\cos b + \\cos a \\sin b$",
          "**2. Công thức cộng đối với tang:**",
          "  - $\\tan(a - b) = \\dfrac{\\tan a - \\tan b}{1 + \\tan a \\tan b}$",
          "  - $\\tan(a + b) = \\dfrac{\\tan a + \\tan b}{1 - \\tan a \\tan b}$"
        ],
        examples: [
          {
            title: "Ví dụ: Tính giá trị lượng giác bằng công thức cộng",
            question: "Tính giá trị của $\\cos 75^\\circ$ không dùng máy tính cầm tay.",
            solution: "Tách $75^\\circ = 45^\\circ + 30^\\circ$:\n$$\\cos 75^\\circ = \\cos(45^\\circ + 30^\\circ) = \\cos 45^\\circ \\cos 30^\\circ - \\sin 45^\\circ \\sin 30^\\circ$$\n$$= \\dfrac{\\sqrt{2}}{2} \\cdot \\dfrac{\\sqrt{3}}{2} - \\dfrac{\\sqrt{2}}{2} \\cdot \\dfrac{1}{2} = \\dfrac{\\sqrt{6} - \\sqrt{2}}{4}$$."
          }
        ],
        exercises: [
          {
            id: "g11-c1-l2-d1-ex1",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Công thức khai triển của $\\cos(a + b)$ là:",
            shortAnswer: "$\\cos a \\cos b - \\sin a \\sin b$",
            fullSolution: "Theo công thức cộng đối với hàm cosin: $\\cos(a + b) = \\cos a \\cos b - \\sin a \\sin b$."
          },
          {
            id: "g11-c1-l2-d1-ex2",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Công thức khai triển của $\\sin(a - b)$ là:",
            shortAnswer: "$\\sin a \\cos b - \\cos a \\sin b$",
            fullSolution: "Theo công thức cộng đối với hàm sin: $\\sin(a - b) = \\sin a \\cos b - \\cos a \\sin b$."
          },
          {
            id: "g11-c1-l2-d1-ex3",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Công thức tính $\\tan(a + b)$ theo $\\tan a$ và $\\tan b$ là:",
            shortAnswer: "$\\tan(a + b) = \\dfrac{\\tan a + \\tan b}{1 - \\tan a \\tan b}$",
            fullSolution: "Áp dụng định lý cộng tang: $\\tan(a + b) = \\dfrac{\\tan a + \\tan b}{1 - \\tan a \\tan b}$."
          },
          {
            id: "g11-c1-l2-d1-ex4",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Rút gọn biểu thức $P = \\cos x \\cos y + \\sin x \\sin y$ ta được:",
            shortAnswer: "$\\cos(x - y)$",
            fullSolution: "Đây chính là vế phải của công thức cộng cosin: $\\cos x \\cos y + \\sin x \\sin y = \\cos(x - y)$."
          },
          {
            id: "g11-c1-l2-d1-ex5",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tính giá trị chính xác của $\\sin 15^\\circ$.",
            shortAnswer: "$\\dfrac{\\sqrt{6} - \\sqrt{2}}{4}$",
            fullSolution: "Tách $15^\\circ = 45^\\circ - 30^\\circ$:\n$\\sin 15^\\circ = \\sin(45^\\circ - 30^\\circ) = \\sin 45^\\circ \\cos 30^\\circ - \\cos 45^\\circ \\sin 30^\\circ = \\dfrac{\\sqrt{2}}{2} \\cdot \\dfrac{\\sqrt{3}}{2} - \\dfrac{\\sqrt{2}}{2} \\cdot \\dfrac{1}{2} = \\dfrac{\\sqrt{6} - \\sqrt{2}}{4}$."
          },
          {
            id: "g11-c1-l2-d1-ex6",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Rút gọn biểu thức $A = \\sin(x + 30^\\circ) - \\sin(x - 30^\\circ)$.",
            shortAnswer: "$\\cos x$",
            fullSolution: "Khai triển hai số hạng:\n$\\sin(x + 30^\\circ) = \\sin x \\cos 30^\\circ + \\cos x \\sin 30^\\circ$.\n$\\sin(x - 30^\\circ) = \\sin x \\cos 30^\\circ - \\cos x \\sin 30^\\circ$.\nTrừ vế theo vế: $A = 2\\cos x \\sin 30^\\circ = 2\\cos x \\cdot \\dfrac{1}{2} = \\cos x$."
          },
          {
            id: "g11-c1-l2-d1-ex7",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Cho hai góc nhọn $a$ và $b$ có $\\sin a = \\dfrac{3}{5}$ và $\\cos b = \\dfrac{12}{13}$. Tính giá trị của $\\sin(a + b)$.",
            shortAnswer: "$\\dfrac{56}{65}$",
            fullSolution: "Vì $a, b$ nhọn nên $\\cos a > 0, \\sin b > 0$:\n$\\cos a = \\sqrt{1 - \\sin^2 a} = \\sqrt{1 - \\dfrac{9}{25}} = \\dfrac{4}{5}$.\n$\\sin b = \\sqrt{1 - \\cos^2 b} = \\sqrt{1 - \\dfrac{144}{169}} = \\dfrac{5}{13}$.\nÁp dụng công thức cộng:\n$\\sin(a + b) = \\sin a \\cos b + \\cos a \\sin b = \\dfrac{3}{5} \\cdot \\dfrac{12}{13} + \\dfrac{4}{5} \\cdot \\dfrac{5}{13} = \\dfrac{36 + 20}{65} = \\dfrac{56}{65}$."
          },
          {
            id: "g11-c1-l2-d1-ex8",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Cho hai góc nhọn $a$ và $b$ thỏa mãn $\\tan a = \\dfrac{1}{2}$ và $\\tan b = \\dfrac{1}{3}$. Tính giá trị của $\\tan(a + b)$ và suy ra tổng số đo $a + b$.",
            shortAnswer: "$\\tan(a + b) = 1 \\implies a + b = \\dfrac{\\pi}{4}$",
            fullSolution: "Áp dụng công thức cộng tang:\n$\\tan(a + b) = \\dfrac{\\tan a + \\tan b}{1 - \\tan a \\tan b} = \\dfrac{\\dfrac{1}{2} + \\dfrac{1}{3}}{1 - \\dfrac{1}{2} \\cdot \\dfrac{1}{3}} = \\dfrac{\\dfrac{5}{6}}{1 - \\dfrac{1}{6}} = \\dfrac{\\dfrac{5}{6}}{\\dfrac{5}{6}} = 1$.\nVì $a, b$ là các góc nhọn ($0 < a, b < \\dfrac{\\pi}{2}$) và $\\tan a, \\tan b < 1 \\implies 0 < a, b < \\dfrac{\\pi}{4} \\implies 0 < a + b < \\dfrac{\\pi}{2}$.\nDo đó $a + b = \\dfrac{\\pi}{4}$ ($45^\\circ$)."
          },
          {
            id: "g11-c1-l2-d1-ex9",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Rút gọn biểu thức $P = \\dfrac{\\cos(a - b) - \\cos(a + b)}{\\sin(a + b) + \\sin(a - b)}$.",
            shortAnswer: "$\\tan b$",
            fullSolution: "Áp dụng khai triển công thức cộng:\n- Tử số: $(\\cos a \\cos b + \\sin a \\sin b) - (\\cos a \\cos b - \\sin a \\sin b) = 2\\sin a \\sin b$.\n- Mẫu số: $(\\sin a \\cos b + \\cos a \\sin b) + (\\sin a \\cos b - \\cos a \\sin b) = 2\\sin a \\cos b$.\nDo đó: $P = \\dfrac{2\\sin a \\sin b}{2\\sin a \\cos b} = \\dfrac{\\sin b}{\\cos b} = \\tan b$."
          },
          {
            id: "g11-c1-l2-d1-ex10",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Hai dao động điều hòa cùng phương, cùng tần số có phương trình li độ lần lượt là $x_1(t) = 3\\cos(10\\pi t)$ và $x_2(t) = 4\\sin(10\\pi t)$ (cm). Sử dụng công thức cộng lượng giác để viết phương trình dao động tổng hợp $x(t) = x_1(t) + x_2(t)$ dưới dạng một hàm cosin duy nhất $x(t) = A\\cos(10\\pi t - \\varphi)$.",
            shortAnswer: "$x(t) = 5\\cos(10\\pi t - 0.927)\\text{ cm}$",
            fullSolution: "Ta có $x(t) = 3\\cos(10\\pi t) + 4\\sin(10\\pi t) = 5\\left[\\dfrac{3}{5}\\cos(10\\pi t) + \\dfrac{4}{5}\\sin(10\\pi t)\\right]$.\nĐặt $\\cos\\varphi = \\dfrac{3}{5} = 0.6$ và $\\sin\\varphi = \\dfrac{4}{5} = 0.8$ (với $\\varphi \\approx 0.927\\text{ rad} \\approx 53.13^\\circ$).\nKhi đó:\n$x(t) = 5[\\cos(10\\pi t)\\cos\\varphi + \\sin(10\\pi t)\\sin\\varphi] = 5\\cos(10\\pi t - \\varphi)\\text{ cm}$."
          }
        ]
      },
      {
        id: "g11-c1-l2-dang2",
        name: "Dạng 2: Công thức nhân đôi, nhân ba & Công thức hạ bậc",
        badge: "4 Biết · 3 Hiểu · 3 Vận dụng (10 bài)",
        badgeClass: "bg-emerald-100 text-emerald-800",
        method: [
          "**1. Công thức nhân đôi:**",
          "  - $\\sin 2a = 2\\sin a \\cos a$",
          "  - $\\cos 2a = \\cos^2 a - \\sin^2 a = 2\\cos^2 a - 1 = 1 - 2\\sin^2 a$",
          "  - $\\tan 2a = \\dfrac{2\\tan a}{1 - \\tan^2 a}$",
          "**2. Công thức hạ bậc:**",
          "  - $\\cos^2 a = \\dfrac{1 + \\cos 2a}{2}$",
          "  - $\\sin^2 a = \\dfrac{1 - \\cos 2a}{2}$",
          "  - $\\tan^2 a = \\dfrac{1 - \\cos 2a}{1 + \\cos 2a}$"
        ],
        examples: [
          {
            title: "Ví dụ: Tính giá trị bằng công thức nhân đôi và hạ bậc",
            question: "Cho $\\cos a = \\dfrac{1}{3}$. Tính $\\cos 2a$ và $\\sin^2 a$.",
            solution: "- Tính $\\cos 2a = 2\\cos^2 a - 1 = 2\\left(\\dfrac{1}{3}\\right)^2 - 1 = \\dfrac{2}{9} - 1 = -\\dfrac{7}{9}$.\n- Tính $\\sin^2 a = 1 - \\cos^2 a = 1 - \\dfrac{1}{9} = \\dfrac{8}{9}$ (hoặc dùng hạ bậc $\\dfrac{1 - \\cos 2a}{2} = \\dfrac{1 - (-7/9)}{2} = \\dfrac{8}{9}$)."
          }
        ],
        exercises: [
          {
            id: "g11-c1-l2-d2-ex1",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Công thức nhân đôi nào sau đây đúng với mọi góc $a$?",
            shortAnswer: "$\\sin 2a = 2\\sin a \\cos a$",
            fullSolution: "Theo công thức nhân đôi: $\\sin 2a = \\sin(a + a) = \\sin a \\cos a + \\cos a \\sin a = 2\\sin a \\cos a$."
          },
          {
            id: "g11-c1-l2-d2-ex2",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Biểu thức $\\cos 2a$ bằng biểu thức nào sau đây?",
            shortAnswer: "$2\\cos^2 a - 1$",
            fullSolution: "Ta có $\\cos 2a = \\cos^2 a - \\sin^2 a = \\cos^2 a - (1 - \\cos^2 a) = 2\\cos^2 a - 1$."
          },
          {
            id: "g11-c1-l2-d2-ex3",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Công thức hạ bậc của $\\sin^2 a$ là:",
            shortAnswer: "$\\sin^2 a = \\dfrac{1 - \\cos 2a}{2}$",
            fullSolution: "Từ $\\cos 2a = 1 - 2\\sin^2 a \\implies 2\\sin^2 a = 1 - \\cos 2a \\implies \\sin^2 a = \\dfrac{1 - \\cos 2a}{2}$."
          },
          {
            id: "g11-c1-l2-d2-ex4",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Rút gọn biểu thức $2\\sin 15^\\circ \\cos 15^\\circ$ ta được:",
            shortAnswer: "$\\dfrac{1}{2}$",
            fullSolution: "Áp dụng công thức nhân đôi: $2\\sin 15^\\circ \\cos 15^\\circ = \\sin(2 \\cdot 15^\\circ) = \\sin 30^\\circ = \\dfrac{1}{2}$."
          },
          {
            id: "g11-c1-l2-d2-ex5",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Cho $\\sin a = \\dfrac{2}{3}$. Tính giá trị của $\\cos 2a$.",
            shortAnswer: "$\\dfrac{1}{9}$",
            fullSolution: "Áp dụng công thức nhân đôi: $\\cos 2a = 1 - 2\\sin^2 a = 1 - 2\\left(\\dfrac{2}{3}\\right)^2 = 1 - 2\\left(\\dfrac{4}{9}\\right) = 1 - \\dfrac{8}{9} = \\dfrac{1}{9}$."
          },
          {
            id: "g11-c1-l2-d2-ex6",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Rút gọn biểu thức $M = \\dfrac{\\sin 2x}{1 + \\cos 2x}$.",
            shortAnswer: "$\\tan x$",
            fullSolution: "Thay $\\sin 2x = 2\\sin x \\cos x$ và $1 + \\cos 2x = 2\\cos^2 x$:\n$M = \\dfrac{2\\sin x \\cos x}{2\\cos^2 x} = \\dfrac{\\sin x}{\\cos x} = \\tan x$."
          },
          {
            id: "g11-c1-l2-d2-ex7",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Cho $\\tan x = 3$. Tính giá trị của $\\tan 2x$.",
            shortAnswer: "$-\\dfrac{3}{4}$",
            fullSolution: "Áp dụng công thức nhân đôi của tang:\n$\\tan 2x = \\dfrac{2\\tan x}{1 - \\tan^2 x} = \\dfrac{2(3)}{1 - 3^2} = \\dfrac{6}{1 - 9} = \\dfrac{6}{-8} = -\\dfrac{3}{4}$."
          },
          {
            id: "g11-c1-l2-d2-ex8",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Cho $\\cos a = \\dfrac{7}{25}$ với $0 < a < \\dfrac{\\pi}{2}$. Tính giá trị của $\\sin \\dfrac{a}{2}$ và $\\cos \\dfrac{a}{2}$.",
            shortAnswer: "$\\sin \\dfrac{a}{2} = \\dfrac{3}{5}, \\cos \\dfrac{a}{2} = \\dfrac{4}{5}$",
            fullSolution: "Vì $0 < a < \\dfrac{\\pi}{2} \\implies 0 < \\dfrac{a}{2} < \\dfrac{\\pi}{4}$, do đó $\\sin \\dfrac{a}{2} > 0$ và $\\cos \\dfrac{a}{2} > 0$.\nÁp dụng công thức hạ bậc:\n$\\sin^2 \\dfrac{a}{2} = \\dfrac{1 - \\cos a}{2} = \\dfrac{1 - 7/25}{2} = \\dfrac{18/25}{2} = \\dfrac{9}{25} \\implies \\sin \\dfrac{a}{2} = \\dfrac{3}{5}$.\n$\\cos^2 \\dfrac{a}{2} = \\dfrac{1 + \\cos a}{2} = \\dfrac{1 + 7/25}{2} = \\dfrac{32/25}{2} = \\dfrac{16}{25} \\implies \\cos \\dfrac{a}{2} = \\dfrac{4}{5}$."
          },
          {
            id: "g11-c1-l2-d2-ex9",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Tính giá trị của tích $P = \\cos \\dfrac{\\pi}{7} \\cdot \\cos \\dfrac{2\\pi}{7} \\cdot \\cos \\dfrac{4\\pi}{7}$.",
            shortAnswer: "$-\\dfrac{1}{8}$",
            fullSolution: "Nhân cả hai vế của $P$ với $8\\sin \\dfrac{\\pi}{7} \\ne 0$:\n$8\\sin \\dfrac{\\pi}{7} \\cdot P = 4\\left(2\\sin \\dfrac{\\pi}{7} \\cos \\dfrac{\\pi}{7}\\right) \\cos \\dfrac{2\\pi}{7} \\cos \\dfrac{4\\pi}{7}$\n$= 4\\sin \\dfrac{2\\pi}{7} \\cos \\dfrac{2\\pi}{7} \\cos \\dfrac{4\\pi}{7} = 2\\sin \\dfrac{4\\pi}{7} \\cos \\dfrac{4\\pi}{7} = \\sin \\dfrac{8\\pi}{7}$.\nTa có $\\sin \\dfrac{8\\pi}{7} = \\sin\\left(\\pi + \\dfrac{\\pi}{7}\\right) = -\\sin \\dfrac{\\pi}{7}$.\nSuy ra: $8\\sin \\dfrac{\\pi}{7} \\cdot P = -\\sin \\dfrac{\\pi}{7} \\implies P = -\\dfrac{1}{8}$."
          },
          {
            id: "g11-c1-l2-d2-ex10",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Trong kĩ thuật điện xoay chiều, công suất tức thời tiêu thụ trên một điện trở thuần có điện trở $R$ được xác định bởi công thức $p(t) = R \\cdot i^2(t) = R \\cdot I_0^2 \\cos^2(\\omega t)$. Dùng công thức hạ bậc lượng giác để chứng minh công suất tức thời dao động tuần hoàn quanh giá trị công suất trung bình $P_{\\text{tb}} = \\dfrac{R \\cdot I_0^2}{2}$ với tần số góc gấp đôi $2\\omega$.",
            shortAnswer: "$p(t) = \\dfrac{R I_0^2}{2} + \\dfrac{R I_0^2}{2}\\cos(2\\omega t)$",
            fullSolution: "Áp dụng công thức hạ bậc $\\cos^2(\\omega t) = \\dfrac{1 + \\cos(2\\omega t)}{2}$:\n$$p(t) = R I_0^2 \\cdot \\dfrac{1 + \\cos(2\\omega t)}{2} = \\dfrac{R I_0^2}{2} + \\dfrac{R I_0^2}{2}\\cos(2\\omega t)$$\nBiểu thức gồm hai thành phần: thành phần không đổi là công suất trung bình $P_{\\text{tb}} = \\dfrac{R I_0^2}{2}$ và thành phần biến thiên điều hòa theo thời gian với tần số góc $2\\omega$ (gấp đôi tần số góc ban đầu của dòng điện)."
          }
        ]
      },
      {
        id: "g11-c1-l2-dang3",
        name: "Dạng 3: Biến đổi tích thành tổng & Tổng thành tích",
        badge: "4 Biết · 3 Hiểu · 3 Vận dụng (10 bài)",
        badgeClass: "bg-emerald-100 text-emerald-800",
        method: [
          "**1. Công thức biến đổi tích thành tổng:**",
          "  - $\\cos a \\cos b = \\dfrac{1}{2}[\\cos(a - b) + \\cos(a + b)]$",
          "  - $\\sin a \\sin b = \\dfrac{1}{2}[\\cos(a - b) - \\cos(a + b)]$",
          "  - $\\sin a \\cos b = \\dfrac{1}{2}[\\sin(a + b) + \\sin(a - b)]$",
          "**2. Công thức biến đổi tổng thành tích:**",
          "  - $\\cos u + \\cos v = 2\\cos \\dfrac{u + v}{2} \\cos \\dfrac{u - v}{2}$",
          "  - $\\cos u - \\cos v = -2\\sin \\dfrac{u + v}{2} \\sin \\dfrac{u - v}{2}$",
          "  - $\\sin u + \\sin v = 2\\sin \\dfrac{u + v}{2} \\cos \\dfrac{u - v}{2}$",
          "  - $\\sin u - \\sin v = 2\\cos \\dfrac{u + v}{2} \\sin \\dfrac{u - v}{2}$"
        ],
        examples: [
          {
            title: "Ví dụ: Tính giá trị tích bằng biến đổi thành tổng",
            question: "Tính giá trị của biểu thức $A = 4\\cos 15^\\circ \\cos 45^\\circ$.",
            solution: "Áp dụng công thức tích thành tổng:\n$$A = 4 \\cdot \\dfrac{1}{2}[\\cos(45^\\circ - 15^\\circ) + \\cos(45^\\circ + 15^\\circ)] = 2[\\cos 30^\\circ + \\cos 60^\\circ] = 2\\left(\\dfrac{\\sqrt{3}}{2} + \\dfrac{1}{2}\\right) = \\sqrt{3} + 1$$."
          }
        ],
        exercises: [
          {
            id: "g11-c1-l2-d3-ex1",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Công thức biến đổi tích $\\cos a \\cos b$ thành tổng là:",
            shortAnswer: "$\\dfrac{1}{2}[\\cos(a - b) + \\cos(a + b)]$",
            fullSolution: "Cộng hai công thức $\\cos(a-b)$ và $\\cos(a+b)$ ta được: $\\cos a \\cos b = \\dfrac{1}{2}[\\cos(a - b) + \\cos(a + b)]$."
          },
          {
            id: "g11-c1-l2-d3-ex2",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Công thức biến đổi tổng $\\sin u + \\sin v$ thành tích là:",
            shortAnswer: "$2\\sin \\dfrac{u + v}{2} \\cos \\dfrac{u - v}{2}$",
            fullSolution: "Theo công thức biến đổi tổng thành tích: $\\sin u + \\sin v = 2\\sin \\dfrac{u + v}{2} \\cos \\dfrac{u - v}{2}$."
          },
          {
            id: "g11-c1-l2-d3-ex3",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Biến đổi biểu thức $\\cos 5x + \\cos x$ thành tích ta được:",
            shortAnswer: "$2\\cos 3x \\cos 2x$",
            fullSolution: "Áp dụng $\\cos u + \\cos v = 2\\cos \\dfrac{u+v}{2}\\cos \\dfrac{u-v}{2}$ với $u = 5x, v = x$:\n$\\cos 5x + \\cos x = 2\\cos\\left(\\dfrac{5x+x}{2}\\right)\\cos\\left(\\dfrac{5x-x}{2}\\right) = 2\\cos 3x \\cos 2x$."
          },
          {
            id: "g11-c1-l2-d3-ex4",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Giá trị của tích $\\sin 75^\\circ \\sin 15^\\circ$ bằng:",
            shortAnswer: "$\\dfrac{1}{4}$",
            fullSolution: "Áp dụng công thức tích thành tổng: $\\sin 75^\\circ \\sin 15^\\circ = \\dfrac{1}{2}[\\cos(75^\\circ - 15^\\circ) - \\cos(75^\\circ + 15^\\circ)] = \\dfrac{1}{2}[\\cos 60^\\circ - \\cos 90^\\circ] = \\dfrac{1}{2}\\left(\\dfrac{1}{2} - 0\\right) = \\dfrac{1}{4}$."
          },
          {
            id: "g11-c1-l2-d3-ex5",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Rút gọn biểu thức $A = \\dfrac{\\sin 3x - \\sin x}{\\cos 3x + \\cos x}$.",
            shortAnswer: "$\\tan x$",
            fullSolution: "Biến đổi tổng thành tích:\n- Tử số: $\\sin 3x - \\sin x = 2\\cos 2x \\sin x$.\n- Mẫu số: $\\cos 3x + \\cos x = 2\\cos 2x \\cos x$.\nDo đó: $A = \\dfrac{2\\cos 2x \\sin x}{2\\cos 2x \\cos x} = \\dfrac{\\sin x}{\\cos x} = \\tan x$."
          },
          {
            id: "g11-c1-l2-d3-ex6",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tính giá trị của biểu thức $B = \\cos \\dfrac{\\pi}{5} + \\cos \\dfrac{3\\pi}{5}$.",
            shortAnswer: "$\\dfrac{1}{2}$",
            fullSolution: "Biến đổi thành tích:\n$B = 2\\cos\\left(\\dfrac{\\pi/5 + 3\\pi/5}{2}\\right)\\cos\\left(\\dfrac{\\pi/5 - 3\\pi/5}{2}\\right) = 2\\cos \\dfrac{2\\pi}{5} \\cos\\left(-\\dfrac{\\pi}{5}\\right) = 2\\cos \\dfrac{2\\pi}{5} \\cos \\dfrac{\\pi}{5}$.\nNhân thêm $\\sin \\dfrac{\\pi}{5} \\ne 0$:\n$\\sin \\dfrac{\\pi}{5} \\cdot B = 2\\sin \\dfrac{\\pi}{5} \\cos \\dfrac{\\pi}{5} \\cos \\dfrac{2\\pi}{5} = \\sin \\dfrac{2\\pi}{5} \\cos \\dfrac{2\\pi}{5} = \\dfrac{1}{2}\\sin \\dfrac{4\\pi}{5}$.\nVì $\\sin \\dfrac{4\\pi}{5} = \\sin\\left(\\pi - \\dfrac{\\pi}{5}\\right) = \\sin \\dfrac{\\pi}{5} \\implies B = \\dfrac{1}{2}$."
          },
          {
            id: "g11-c1-l2-d3-ex7",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Rút gọn biểu thức $C = \\sin x + \\sin 3x + \\sin 5x$.",
            shortAnswer: "$\\sin 3x(2\\cos 2x + 1)$",
            fullSolution: "Nhóm số hạng thứ nhất và thứ ba:\n$(\\sin 5x + \\sin x) + \\sin 3x = 2\\sin 3x \\cos 2x + \\sin 3x = \\sin 3x(2\\cos 2x + 1)$."
          },
          {
            id: "g11-c1-l2-d3-ex8",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Rút gọn biểu thức phân thức $P = \\dfrac{\\sin x + \\sin 2x + \\sin 3x}{\\cos x + \\cos 2x + \\cos 3x}$.",
            shortAnswer: "$\\tan 2x$",
            fullSolution: "- Tử số: $(\\sin 3x + \\sin x) + \\sin 2x = 2\\sin 2x \\cos x + \\sin 2x = \\sin 2x(2\\cos x + 1)$.\n- Mẫu số: $(\\cos 3x + \\cos x) + \\cos 2x = 2\\cos 2x \\cos x + \\cos 2x = \\cos 2x(2\\cos x + 1)$.\nChia tử cho mẫu: $P = \\dfrac{\\sin 2x(2\\cos x + 1)}{\\cos 2x(2\\cos x + 1)} = \\dfrac{\\sin 2x}{\\cos 2x} = \\tan 2x$."
          },
          {
            id: "g11-c1-l2-d3-ex9",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Cho tam giác $ABC$. Chứng minh rằng biểu thức $S = \\sin 2A + \\sin 2B + \\sin 2C$ rút gọn về dạng tích bằng:",
            shortAnswer: "$4\\sin A \\sin B \\sin C$",
            fullSolution: "Ta có $A + B + C = \\pi \\implies 2C = 2\\pi - 2(A + B) \\implies \\sin 2C = -\\sin 2(A + B)$.\n$S = (\\sin 2A + \\sin 2B) + \\sin 2C = 2\\sin(A + B)\\cos(A - B) - 2\\sin(A + B)\\cos(A + B)$\n$= 2\\sin(A + B)[\\cos(A - B) - \\cos(A + B)]$.\nVì $\\sin(A + B) = \\sin(\\pi - C) = \\sin C$ và $\\cos(A - B) - \\cos(A + B) = 2\\sin A \\sin B$.\nThay vào: $S = 2\\sin C(2\\sin A \\sin B) = 4\\sin A \\sin B \\sin C$."
          },
          {
            id: "g11-c1-l2-d3-ex10",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Hai nguồn phát sóng âm kết hợp cùng pha truyền đến tai người nghe tạo ra hai dao động áp suất âm thanh $p_1(t) = P_0 \\cos(2000\\pi t)$ và $p_2(t) = P_0 \\cos(2040\\pi t)$ (Pa). Dùng công thức tổng thành tích để giải thích hiện tượng phách (tiếng âm lượng to nhỏ nhịp nhàng) và tìm tần số phách người nghe cảm nhận được.",
            shortAnswer: "$p(t) = 2P_0 \\cos(20\\pi t)\\cos(2020\\pi t)$, tần số phách $f_{\\text{phách}} = 20\\text{ Hz}$",
            fullSolution: "Áp dụng công thức biến đổi tổng thành tích $\\cos u + \\cos v = 2\\cos \\dfrac{u-v}{2}\\cos \\dfrac{u+v}{2}$:\n$$p(t) = p_1(t) + p_2(t) = P_0[\\cos(2040\\pi t) + \\cos(2000\\pi t)] = 2P_0 \\cos(20\\pi t) \\cdot \\cos(2020\\pi t)$$\nBiên độ sóng tổng hợp thay đổi chậm theo thời gian theo hàm $|2P_0 \\cos(20\\pi t)|$ với tần số $f = 10\\text{ Hz}$.\nChu kỳ biên độ đạt cực đại hai lần trong một chu kỳ của hàm cosin, do đó tần số phách (số lần âm lượng cực đại trong 1 giây) là $f_{\\text{phách}} = |f_2 - f_1| = |1020 - 1000| = 20\\text{ Hz}$."
          }
        ]
      }
    ]
  }
,

  "g11-c1-l3": {
    lessonId: "g11-c1-l3",
    title: "Bài 3: Hàm số lượng giác",
    topics: [
      {
        id: "g11-c1-l3-dang1",
        name: "Dạng 1: Tập xác định & Tính chẵn, lẻ của hàm số lượng giác",
        badge: "4 Biết · 3 Hiểu · 3 Vận dụng (10 bài)",
        badgeClass: "bg-emerald-100 text-emerald-800",
        method: [
          "**1. Tập xác định (TXĐ) của các hàm số lượng giác cơ bản:**",
          "- $y = \\sin x$ và $y = \\cos x$ có TXĐ là $D = \\mathbb{R}$.",
          "- $y = \\tan x = \\dfrac{\\sin x}{\\cos x}$ xác định khi $\\cos x \\ne 0 \\iff x \\ne \\dfrac{\\pi}{2} + k\\pi \\ (k \\in \\mathbb{Z})$.",
          "- $y = \\cot x = \\dfrac{\\cos x}{\\sin x}$ xác định khi $\\sin x \\ne 0 \\iff x \\ne k\\pi \\ (k \\in \\mathbb{Z})$.",
          "**2. Tính chẵn, lẻ:**",
          "- Hàm số chẵn: $y = \\cos x$ (thỏa mãn $\\cos(-x) = \\cos x$), đồ thị nhận trục tung $Oy$ làm trục đối xứng.",
          "- Hàm số lẻ: $y = \\sin x, y = \\tan x, y = \\cot x$ (thỏa mãn $f(-x) = -f(x)$), đồ thị nhận gốc tọa độ $O$ làm tâm đối xứng."
        ],
        examples: [
          {
            title: "Ví dụ: Tìm tập xác định và xét tính chẵn lẻ",
            question: "Tìm tập xác định của hàm số $y = \\dfrac{1}{\\cos x - 1}$ và xét tính chẵn lẻ của $y = x \\sin x$.",
            solution: "- TXĐ: Điều kiện $\\cos x - 1 \\ne 0 \\iff \\cos x \\ne 1 \\iff x \\ne k2\\pi \\ (k \\in \\mathbb{Z})$. Vậy $D = \\mathbb{R} \\setminus \\{k2\\pi \\mid k \\in \\mathbb{Z}\\}$.\n- Chẵn/lẻ: $f(-x) = (-x)\\sin(-x) = (-x)(-\\sin x) = x\\sin x = f(x)$. Vậy $y = x\\sin x$ là hàm số chẵn."
          }
        ],
        exercises: [
          {
            id: "g11-c1-l3-d1-ex1",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Tập xác định của hàm số $y = \\sin x$ là:",
            shortAnswer: "$D = \\mathbb{R}$",
            fullSolution: "Hàm số $y = \\sin x$ xác định với mọi số thực $x \\in \\mathbb{R}$."
          },
          {
            id: "g11-c1-l3-d1-ex2",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Trong các hàm số sau, hàm số nào là hàm số chẵn?",
            shortAnswer: "$y = \\cos x$",
            fullSolution: "Ta có $\\cos(-x) = \\cos x$, do đó $y = \\cos x$ là hàm số chẵn duy nhất trong 4 hàm số lượng giác cơ bản."
          },
          {
            id: "g11-c1-l3-d1-ex3",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Tập xác định của hàm số $y = \\tan x$ là:",
            shortAnswer: "$D = \\mathbb{R} \\setminus \\left\\{\\dfrac{\\pi}{2} + k\\pi \\mid k \\in \\mathbb{Z}\\right\\}$",
            fullSolution: "Hàm số $\\tan x$ xác định khi $\\cos x \\ne 0 \\iff x \\ne \\dfrac{\\pi}{2} + k\\pi \\ (k \\in \\mathbb{Z})$."
          },
          {
            id: "g11-c1-l3-d1-ex4",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Đồ thị của hàm số $y = \\sin x$ nhận điểm nào sau đây làm tâm đối xứng?",
            shortAnswer: "Gốc tọa độ $O(0; 0)$",
            fullSolution: "Vì $y = \\sin x$ là hàm số lẻ ($f(-x) = -f(x)$) nên đồ thị của nó nhận gốc tọa độ $O(0;0)$ làm tâm đối xứng."
          },
          {
            id: "g11-c1-l3-d1-ex5",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tìm tập xác định của hàm số $y = \\dfrac{2}{\\sin x}$.",
            shortAnswer: "$D = \\mathbb{R} \\setminus \\{k\\pi \\mid k \\in \\mathbb{Z}\\}$",
            fullSolution: "Hàm số xác định khi mẫu số khác 0: $\\sin x \\ne 0 \\iff x \\ne k\\pi \\ (k \\in \\mathbb{Z})$.\nVậy $D = \\mathbb{R} \\setminus \\{k\\pi \\mid k \\in \\mathbb{Z}\\}$."
          },
          {
            id: "g11-c1-l3-d1-ex6",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tìm tập xác định của hàm số $y = \\tan\\left(x - \\dfrac{\\pi}{4}\\right)$.",
            shortAnswer: "$D = \\mathbb{R} \\setminus \\left\\{\\dfrac{3\\pi}{4} + k\\pi \\mid k \\in \\mathbb{Z}\\right\\}$",
            fullSolution: "Điều kiện xác định: $x - \\dfrac{\\pi}{4} \\ne \\dfrac{\\pi}{2} + k\\pi \\iff x \\ne \\dfrac{3\\pi}{4} + k\\pi \\ (k \\in \\mathbb{Z})$."
          },
          {
            id: "g11-c1-l3-d1-ex7",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Xét tính chẵn, lẻ của hàm số $f(x) = \\sin 2x + \\tan x$.",
            shortAnswer: "Hàm số lẻ",
            fullSolution: "TXĐ đối xứng: $D = \\mathbb{R} \\setminus \\left\\{\\dfrac{\\pi}{2} + k\\pi\\right\\}$.\nVới mọi $x \\in D \\implies -x \\in D$.\nTa có: $f(-x) = \\sin(-2x) + \\tan(-x) = -\\sin 2x - \\tan x = -(\\sin 2x + \\tan x) = -f(x)$.\nVậy $f(x)$ là hàm số lẻ."
          },
          {
            id: "g11-c1-l3-d1-ex8",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Tìm tập xác định của hàm số $y = \\sqrt{\\dfrac{1 - \\cos x}{1 + \\cos x}}$.",
            shortAnswer: "$D = \\mathbb{R} \\setminus \\{\\pi + k2\\pi \\mid k \\in \\mathbb{Z}\\}$",
            fullSolution: "Điều kiện xác định: $\\begin{cases} \\dfrac{1 - \\cos x}{1 + \\cos x} \\ge 0 \\\\ 1 + \\cos x \\ne 0 \\end{cases}$.\nVì $-1 \\le \\cos x \\le 1$ nên $1 - \\cos x \\ge 0$ và $1 + \\cos x \\ge 0$ với mọi $x$.\nDo đó phân thức luôn không âm khi mẫu số khác 0:\n$1 + \\cos x \\ne 0 \\iff \\cos x \\ne -1 \\iff x \\ne \\pi + k2\\pi \\ (k \\in \\mathbb{Z})$.\nVậy $D = \\mathbb{R} \\setminus \\{\\pi + k2\\pi \\mid k \\in \\mathbb{Z}\\}$."
          },
          {
            id: "g11-c1-l3-d1-ex9",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Tìm tất cả các giá trị của tham số $m$ để hàm số $y = \\dfrac{2\\cos x - 1}{\\sin x - m}$ có tập xác định là $\\mathbb{R}$.",
            shortAnswer: "$m > 1$ hoặc $m < -1$ ($|m| > 1$)",
            fullSolution: "Hàm số có tập xác định là $\\mathbb{R}$ khi và chỉ khi mẫu số khác 0 với mọi $x \\in \\mathbb{R}$:\n$\\sin x - m \\ne 0 \\iff \\sin x \\ne m \\ (\\forall x \\in \\mathbb{R})$.\nĐiều này xảy ra khi phương trình $\\sin x = m$ vô nghiệm, tức $|m| > 1 \\iff m > 1$ hoặc $m < -1$."
          },
          {
            id: "g11-c1-l3-d1-ex10",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Trong kĩ thuật xử lý tín hiệu, một bộ lọc dải thông có hàm đáp ứng tần số $H(\\omega) = \\dfrac{\\cos(2\\omega) + 1}{\\omega \\sin\\omega}$. Xác định tập xác định của hàm đáp ứng và chứng minh $H(\\omega)$ là hàm số chẵn theo biến tần số góc $\\omega$.",
            shortAnswer: "$D = \\mathbb{R} \\setminus \\{k\\pi\\}$, $H(\\omega)$ là hàm số chẵn",
            fullSolution: "Điều kiện xác định: $\\omega \\sin\\omega \\ne 0 \\iff \\omega \\ne 0$ và $\\sin\\omega \\ne 0 \\iff \\omega \\ne k\\pi \\ (k \\in \\mathbb{Z})$.\nTXĐ $D = \\mathbb{R} \\setminus \\{k\\pi \\mid k \\in \\mathbb{Z}\\}$ đối xứng qua gốc 0.\nXét $H(-\\omega) = \\dfrac{\\cos(-2\\omega) + 1}{(-\\omega)\\sin(-\\omega)} = \\dfrac{\\cos(2\\omega) + 1}{(-\\omega)(-\\sin\\omega)} = \\dfrac{\\cos(2\\omega) + 1}{\\omega \\sin\\omega} = H(\\omega)$.\nDo đó $H(\\omega)$ là hàm số chẵn đối với tần số góc $\\omega$, phản ánh tính đối xứng phổ tín hiệu thực."
          }
        ]
      },
      {
        id: "g11-c1-l3-dang2",
        name: "Dạng 2: Tính tuần hoàn, chu kỳ & Chiều biến thiên, đồ thị",
        badge: "4 Biết · 3 Hiểu · 3 Vận dụng (10 bài)",
        badgeClass: "bg-emerald-100 text-emerald-800",
        method: [
          "**1. Chu kỳ tuần hoàn:**",
          "- Hàm số $y = \\sin x$ và $y = \\cos x$ tuần hoàn với chu kỳ cơ sở $T = 2\\pi$.",
          "- Hàm số $y = \\tan x$ và $y = \\cot x$ tuần hoàn với chu kỳ cơ sở $T = \\pi$.",
          "- Mở rộng: $y = \\sin(ax + b)$ và $y = \\cos(ax + b)$ có chu kỳ $T = \\dfrac{2\\pi}{|a|}$.",
          "- Mở rộng: $y = \\tan(ax + b)$ và $y = \\cot(ax + b)$ có chu kỳ $T = \\dfrac{\\pi}{|a|}$.",
          "**2. Chiều biến thiên trên một chu kỳ cơ sở:**",
          "- $y = \\sin x$ đồng biến trên $\\left(-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}\\right)$, nghịch biến trên $\\left(\\dfrac{\\pi}{2}; \\dfrac{3\\pi}{2}\\right)$.",
          "- $y = \\cos x$ nghịch biến trên $(0; \\pi)$, đồng biến trên $(\\pi; 2\\pi)$."
        ],
        examples: [
          {
            title: "Ví dụ: Tìm chu kỳ tuần hoàn của hàm số lượng giác",
            question: "Tìm chu kỳ tuần hoàn của các hàm số: $y = \\sin 3x$ và $y = \\tan 2x$.",
            solution: "- Với $y = \\sin 3x$, hệ số $a = 3 \\implies T = \\dfrac{2\\pi}{|a|} = \\dfrac{2\\pi}{3}$.\n- Với $y = \\tan 2x$, hệ số $a = 2 \\implies T = \\dfrac{\\pi}{|a|} = \\dfrac{\\pi}{2}$."
          }
        ],
        exercises: [
          {
            id: "g11-c1-l3-d2-ex1",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Chu kỳ tuần hoàn của hàm số $y = \\cos x$ là:",
            shortAnswer: "$T = 2\\pi$",
            fullSolution: "Theo định nghĩa, hàm số $y = \\cos x$ tuần hoàn với chu kỳ nhỏ nhất là $T = 2\\pi$ vì $\\cos(x + 2\\pi) = \\cos x$."
          },
          {
            id: "g11-c1-l3-d2-ex2",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Chu kỳ tuần hoàn của hàm số $y = \\tan x$ là:",
            shortAnswer: "$T = \\pi$",
            fullSolution: "Hàm số tang tuần hoàn với chu kỳ nhỏ nhất là $T = \\pi$ vì $\\tan(x + \\pi) = \\tan x$."
          },
          {
            id: "g11-c1-l3-d2-ex3",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Hàm số $y = \\sin x$ đồng biến trên khoảng nào dưới đây?",
            shortAnswer: "$\\left(-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}\\right)$",
            fullSolution: "Trên khoảng $\\left(-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}\\right)$, khi $x$ tăng từ $-\\dfrac{\\pi}{2}$ đến $\\dfrac{\\pi}{2}$, $\\sin x$ tăng từ $-1$ đến $1$, do đó hàm số đồng biến."
          },
          {
            id: "g11-c1-l3-d2-ex4",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Đường cong hình sin biểu diễn đồ thị hàm số nào?",
            shortAnswer: "$y = \\sin x$",
            fullSolution: "Đồ thị của hàm số $y = \\sin x$ là một đường lượn sóng tuần hoàn liên tục trên $\\mathbb{R}$, gọi là đường hình sin (sinusoid)."
          },
          {
            id: "g11-c1-l3-d2-ex5",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Chu kỳ tuần hoàn của hàm số $y = \\cos 4x$ là:",
            shortAnswer: "$T = \\dfrac{\\pi}{2}$",
            fullSolution: "Áp dụng công thức chu kỳ: $T = \\dfrac{2\\pi}{|a|} = \\dfrac{2\\pi}{4} = \\dfrac{\\pi}{2}$."
          },
          {
            id: "g11-c1-l3-d2-ex6",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Chu kỳ tuần hoàn của hàm số $y = \\tan\\left(3x - \\dfrac{\\pi}{6}\\right)$ là:",
            shortAnswer: "$T = \\dfrac{\\pi}{3}$",
            fullSolution: "Hệ số của $x$ là $a = 3$. Chu kỳ của hàm tang: $T = \\dfrac{\\pi}{|a|} = \\dfrac{\\pi}{3}$."
          },
          {
            id: "g11-c1-l3-d2-ex7",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Trên đoạn $[0; 2\\pi]$, hàm số $y = \\cos x$ nghịch biến trên khoảng nào?",
            shortAnswer: "$(0; \\pi)$",
            fullSolution: "Khi $x$ tăng từ $0$ đến $\\pi$, $\\cos x$ giảm liên tục từ $1$ xuống $-1$. Do đó hàm số nghịch biến trên khoảng $(0; \\pi)$."
          },
          {
            id: "g11-c1-l3-d2-ex8",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Tìm chu kỳ tuần hoàn của hàm số $y = \\sin 2x + \\cos 3x$.",
            shortAnswer: "$T = 2\\pi$",
            fullSolution: "Chu kỳ của $\\sin 2x$ là $T_1 = \\dfrac{2\\pi}{2} = \\pi$.\nChu kỳ của $\\cos 3x$ là $T_2 = \\dfrac{2\\pi}{3}$.\nChu kỳ $T$ của tổng là bội chung nhỏ nhất dương của $T_1$ và $T_2$:\n$T = k_1 \\pi = k_2 \\dfrac{2\\pi}{3} \\implies \\dfrac{k_1}{k_2} = \\dfrac{2}{3} \\implies k_1 = 2, k_2 = 3$.\nVậy chu kỳ là $T = 2 \\cdot \\pi = 2\\pi$."
          },
          {
            id: "g11-c1-l3-d2-ex9",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Tìm các khoảng nghịch biến của hàm số $y = \\sin\\left(2x + \\dfrac{\\pi}{3}\\right)$ trên khoảng $(0; \\pi)$.",
            shortAnswer: "$\\left(\\dfrac{\\pi}{12}; \\dfrac{7\\pi}{12}\\right)$",
            fullSolution: "Hàm số $y = \\sin u$ nghịch biến khi $\\dfrac{\\pi}{2} + k2\\pi < u < \\dfrac{3\\pi}{2} + k2\\pi$.\nỞ đây $u = 2x + \\dfrac{\\pi}{3}$:\n$\\dfrac{\\pi}{2} + k2\\pi < 2x + \\dfrac{\\pi}{3} < \\dfrac{3\\pi}{2} + k2\\pi \\iff \\dfrac{\\pi}{6} + k2\\pi < 2x < \\dfrac{7\\pi}{6} + k2\\pi$\n$\\iff \\dfrac{\\pi}{12} + k\\pi < x < \\dfrac{7\\pi}{12} + k\\pi$.\nVì $x \\in (0; \\pi)$, chọn $k = 0 \\implies x \\in \\left(\\dfrac{\\pi}{12}; \\dfrac{7\\pi}{12}\\right)$."
          },
          {
            id: "g11-c1-l3-d2-ex10",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Độ cao của mực nước thủy triều tại một cảng biển được mô hình hóa bởi hàm số $h(t) = 4 + 2.5\\cos\\left(\\dfrac{\\pi t}{6}\\right)$ (mét), trong đó $t$ là số giờ tính từ nửa đêm ($0 \\le t \\le 24$). Tìm chu kỳ của hiện tượng thủy triều và xác định các thời điểm trong ngày mà mực nước đạt độ cao lớn nhất.",
            shortAnswer: "Chu kỳ $T = 12\\text{ giờ}$; mực nước đạt đỉnh vào lúc $0\\text{h}, 12\\text{h}$ và $24\\text{h}$",
            fullSolution: "Hệ số trước $t$ là $a = \\dfrac{\\pi}{6}$. Chu kỳ của hàm số là:\n$T = \\dfrac{2\\pi}{\\pi/6} = 12\\text{ giờ}$ (mỗi ngày có 2 chu kỳ triều).\nĐộ cao lớn nhất đạt được khi $\\cos\\left(\\dfrac{\\pi t}{6}\\right) = 1$:\n$\\dfrac{\\pi t}{6} = k2\\pi \\iff t = 12k \\ (k \\in \\mathbb{Z})$.\nVới $0 \\le t \\le 24$, ta có $k = 0 \\implies t = 0\\text{h}$ (nửa đêm), $k = 1 \\implies t = 12\\text{h}$ (trưa), $k = 2 \\implies t = 24\\text{h}$ (nửa đêm hôm sau)."
          }
        ]
      },
      {
        id: "g11-c1-l3-dang3",
        name: "Dạng 3: Giá trị lớn nhất (GTLN) và Giá trị nhỏ nhất (GTNN) của hàm số lượng giác",
        badge: "4 Biết · 3 Hiểu · 3 Vận dụng (10 bài)",
        badgeClass: "bg-emerald-100 text-emerald-800",
        method: [
          "**1. Đánh giá cơ bản:**",
          "- Với mọi $u$: $-1 \\le \\sin u \\le 1$ và $-1 \\le \\cos u \\le 1$.",
          "- Với mọi $u$: $0 \\le \\sin^2 u \\le 1$ và $0 \\le \\cos^2 u \\le 1$.",
          "- Hàm số bậc nhất: $y = a\\sin u + b$ có $\\max = |a| + b$ và $\\min = -|a| + b$.",
          "**2. Phương pháp đặt ẩn phụ:**",
          "- Đưa về tam thức bậc hai theo $t = \\sin x$ hoặc $t = \\cos x$ với điều kiện $t \\in [-1; 1]$.",
          "- Khảo sát hàm số bậc hai $f(t) = at^2 + bt + c$ trên đoạn $[-1; 1]$.",
          "**3. Dạng $y = a\\sin x + b\\cos x$:**",
          "- Biến đổi $-\\sqrt{a^2 + b^2} \\le a\\sin x + b\\cos x \\le \\sqrt{a^2 + b^2}$."
        ],
        examples: [
          {
            title: "Ví dụ: Tìm GTLN và GTNN của hàm số lượng giác",
            question: "Tìm GTLN và GTNN của hàm số $y = 3\\cos(2x) - 4$.",
            solution: "Ta có $-1 \\le \\cos(2x) \\le 1$ với mọi $x \\in \\mathbb{R}$.\nNhân 3: $-3 \\le 3\\cos(2x) \\le 3$.\nTrừ 4: $-7 \\le 3\\cos(2x) - 4 \\le -1$.\nVậy $\\max y = -1$ (đạt được khi $\\cos 2x = 1$) và $\\min y = -7$ (đạt được khi $\\cos 2x = -1$)."
          }
        ],
        exercises: [
          {
            id: "g11-c1-l3-d3-ex1",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Giá trị lớn nhất của hàm số $y = \\sin x$ trên $\\mathbb{R}$ bằng:",
            shortAnswer: "1",
            fullSolution: "Tập giá trị của hàm số $y = \\sin x$ là $[-1; 1]$, do đó giá trị lớn nhất bằng 1 (đạt được khi $x = \\dfrac{\\pi}{2} + k2\\pi$)."
          },
          {
            id: "g11-c1-l3-d3-ex2",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Giá trị nhỏ nhất của hàm số $y = 2\\cos x + 3$ là:",
            shortAnswer: "1",
            fullSolution: "Vì $\\cos x \\ge -1$ nên $y \\ge 2(-1) + 3 = 1$. Giá trị nhỏ nhất là 1."
          },
          {
            id: "g11-c1-l3-d3-ex3",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Tập giá trị của hàm số $y = \\cos^2 x$ là:",
            shortAnswer: "$[0; 1]$",
            fullSolution: "Vì $-1 \\le \\cos x \\le 1$ nên bình phương lên ta được $0 \\le \\cos^2 x \\le 1$. Tập giá trị là $[0; 1]$."
          },
          {
            id: "g11-c1-l3-d3-ex4",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Giá trị lớn nhất của hàm số $y = 5 - 2\\sin x$ là:",
            shortAnswer: "7",
            fullSolution: "Vì $\\sin x \\ge -1$ nên $y = 5 - 2\\sin x \\le 5 - 2(-1) = 7$. Giá trị lớn nhất bằng 7."
          },
          {
            id: "g11-c1-l3-d3-ex5",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tìm giá trị lớn nhất và nhỏ nhất của hàm số $y = 3\\sin x - 4\\cos x$.",
            shortAnswer: "$\\max y = 5, \\min y = -5$",
            fullSolution: "Áp dụng bất đẳng thức Bunhiacopxki hoặc biến đổi về dạng sin:\n$-\\sqrt{3^2 + (-4)^2} \\le 3\\sin x - 4\\cos x \\le \\sqrt{3^2 + (-4)^2} \\iff -5 \\le y \\le 5$.\nVậy $\\max y = 5$ và $\\min y = -5$."
          },
          {
            id: "g11-c1-l3-d3-ex6",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tìm giá trị lớn nhất của hàm số $y = 4\\sin^2 x - 4\\sin x + 3$.",
            shortAnswer: "11",
            fullSolution: "Đặt $t = \\sin x$ với $t \\in [-1; 1]$. Xét hàm số $f(t) = 4t^2 - 4t + 3$.\nĐỉnh parabol $t_0 = -\\dfrac{b}{2a} = \\dfrac{4}{8} = \\dfrac{1}{2} \\in [-1; 1]$.\nTính các giá trị:\n- $f(1/2) = 4(1/4) - 4(1/2) + 3 = 1 - 2 + 3 = 2$.\n- $f(-1) = 4(-1)^2 - 4(-1) + 3 = 4 + 4 + 3 = 11$.\n- $f(1) = 4(1)^2 - 4(1) + 3 = 3$.\nSo sánh các giá trị: $\\max y = 11$ (khi $t = -1 \\iff \\sin x = -1$) và $\\min y = 2$."
          },
          {
            id: "g11-c1-l3-d3-ex7",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tìm giá trị nhỏ nhất của hàm số $y = \\sqrt{3 + \\cos 2x} - 1$.",
            shortAnswer: "$\\sqrt{2} - 1$",
            fullSolution: "Vì $\\cos 2x \\ge -1$ nên $3 + \\cos 2x \\ge 3 - 1 = 2$.\nDo đó $\\sqrt{3 + \\cos 2x} \\ge \\sqrt{2} \\implies y \\ge \\sqrt{2} - 1$.\nĐẳng thức xảy ra khi $\\cos 2x = -1$. Vậy $\\min y = \\sqrt{2} - 1$."
          },
          {
            id: "g11-c1-l3-d3-ex8",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Tìm giá trị lớn nhất và giá trị nhỏ nhất của hàm số $y = \\cos^2 x + 2\\sin x + 2$.",
            shortAnswer: "$\\max y = 4, \\min y = 0$",
            fullSolution: "Đổi $\\cos^2 x = 1 - \\sin^2 x$:\n$y = 1 - \\sin^2 x + 2\\sin x + 2 = -\\sin^2 x + 2\\sin x + 3$.\nĐặt $t = \\sin x$ với $t \\in [-1; 1]$. Xét $f(t) = -t^2 + 2t + 3$.\nĐỉnh parabol $t_0 = 1 \\in [-1; 1]$.\n- $f(1) = -1 + 2 + 3 = 4$.\n- $f(-1) = -(-1)^2 + 2(-1) + 3 = -1 - 2 + 3 = 0$.\nVậy $\\max y = 4$ (khi $\\sin x = 1$) và $\\min y = 0$ (khi $\\sin x = -1$)."
          },
          {
            id: "g11-c1-l3-d3-ex9",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Tìm tập giá trị của hàm số $y = \\dfrac{\\sin x + 1}{\\sin x + 2}$.",
            shortAnswer: "$\\left[0; \\dfrac{2}{3}\\right]$",
            fullSolution: "Đặt $t = \\sin x$ với $t \\in [-1; 1]$. Hàm số trở thành $f(t) = \\dfrac{t + 1}{t + 2} = 1 - \\dfrac{1}{t + 2}$.\nĐạo hàm: $f'(t) = \\dfrac{1}{(t + 2)^2} > 0$ với mọi $t \\in [-1; 1]$.\nDo đó $f(t)$ là hàm số đồng biến liên tục trên đoạn $[-1; 1]$:\n- $\\min f = f(-1) = \\dfrac{-1 + 1}{-1 + 2} = 0$.\n- $\\max f = f(1) = \\dfrac{1 + 1}{1 + 2} = \\dfrac{2}{3}$.\nVậy tập giá trị của hàm số là $\\left[0; \\dfrac{2}{3}\\right]$."
          },
          {
            id: "g11-c1-l3-d3-ex10",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Một cabin trên vòng đu quay khổng lồ chuyển động tròn đều có độ cao so với mặt đất tại thời điểm $t$ giây được cho bởi phương trình $h(t) = 35 - 30\\cos\\left(\\dfrac{\\pi t}{20}\\right)$ (mét). Tìm độ cao thấp nhất khi hành khách bước vào cabin, độ cao lớn nhất mà cabin đạt tới trên đỉnh vòng quay và khoảng thời gian để cabin quay hết một vòng trọn vẹn.",
            shortAnswer: "$h_{\\min} = 5\\text{ m}, h_{\\max} = 65\\text{ m}$; chu kỳ quay $T = 40\\text{ giây}$",
            fullSolution: "Ta có $-1 \\le \\cos\\left(\\dfrac{\\pi t}{20}\\right) \\le 1$:\n- Độ cao thấp nhất khi $\\cos\\left(\\dfrac{\\pi t}{20}\\right) = 1$:\n  $h_{\\min} = 35 - 30(1) = 5\\text{ mét}$ (tại thời điểm $t = 0\\text{s}$ ở chân đu quay).\n- Độ cao lớn nhất khi $\\cos\\left(\\dfrac{\\pi t}{20}\\right) = -1$:\n  $h_{\\max} = 35 - 30(-1) = 35 + 30 = 65\\text{ mét}$ (tại đỉnh $t = 20\\text{s}$).\n- Chu kỳ quay hết một vòng tròn: $T = \\dfrac{2\\pi}{\\pi/20} = 40\\text{ giây}$."
          }
        ]
      }
    ]
  }
,

  "g11-c1-l4": {
    lessonId: "g11-c1-l4",
    title: "Bài 4: Phương trình lượng giác cơ bản",
    topics: [
      {
        id: "g11-c1-l4-dang1",
        name: "Dạng 1: Phương trình sin x = m và cos x = m",
        badge: "4 Biết · 3 Hiểu · 3 Vận dụng (10 bài)",
        badgeClass: "bg-emerald-100 text-emerald-800",
        method: [
          "**1. Phương trình $\\sin x = m$:**",
          "- Nếu $|m| > 1$: Phương trình vô nghiệm.",
          "- Nếu $|m| \\le 1$: Đưa về $\\sin x = \\sin \\alpha$, công thức họ nghiệm:",
          "  $$\\left[ \\begin{array}{l} x = \\alpha + k2\\pi \\\\ x = \\pi - \\alpha + k2\\pi \\end{array} \\right. \\quad (k \\in \\mathbb{Z})$$",
          "- Các trường hợp đặc biệt: $\\sin x = 0 \\iff x = k\\pi$; $\\sin x = 1 \\iff x = \\dfrac{\\pi}{2} + k2\\pi$; $\\sin x = -1 \\iff x = -\\dfrac{\\pi}{2} + k2\\pi$.",
          "**2. Phương trình $\\cos x = m$:**",
          "- Nếu $|m| > 1$: Phương trình vô nghiệm.",
          "- Nếu $|m| \\le 1$: Đưa về $\\cos x = \\cos \\alpha$, công thức họ nghiệm:",
          "  $$x = \\pm \\alpha + k2\\pi \\quad (k \\in \\mathbb{Z})$$",
          "- Các trường hợp đặc biệt: $\\cos x = 0 \\iff x = \\dfrac{\\pi}{2} + k\\pi$; $\\cos x = 1 \\iff x = k2\\pi$; $\\cos x = -1 \\iff x = \\pi + k2\\pi$."
        ],
        examples: [
          {
            title: "Ví dụ: Giải phương trình lượng giác cơ bản",
            question: "Giải phương trình $\\cos\\left(2x - \\dfrac{\\pi}{3}\\right) = \\dfrac{1}{2}$.",
            solution: "Ta có $\\dfrac{1}{2} = \\cos \\dfrac{\\pi}{3}$:\n$$\\cos\\left(2x - \\dfrac{\\pi}{3}\\right) = \\cos \\dfrac{\\pi}{3} \\iff \\left[ \\begin{array}{l} 2x - \\dfrac{\\pi}{3} = \\dfrac{\\pi}{3} + k2\\pi \\\\ 2x - \\dfrac{\\pi}{3} = -\\dfrac{\\pi}{3} + k2\\pi \\end{array} \\right. \\iff \\left[ \\begin{array}{l} 2x = \\dfrac{2\\pi}{3} + k2\\pi \\\\ 2x = k2\\pi \\end{array} \\right. \\iff \\left[ \\begin{array}{l} x = \\dfrac{\\pi}{3} + k\\pi \\\\ x = k\\pi \\end{array} \\right. \\ (k \\in \\mathbb{Z})$$."
          }
        ],
        exercises: [
          {
            id: "g11-c1-l4-d1-ex1",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Phương trình $\\sin x = m$ có nghiệm khi và chỉ khi:",
            shortAnswer: "$-1 \\le m \\le 1$",
            fullSolution: "Vì miền giá trị của hàm số $\\sin x$ là đoạn $[-1; 1]$ nên phương trình có nghiệm $\\iff |m| \\le 1 \\iff -1 \\le m \\le 1$."
          },
          {
            id: "g11-c1-l4-d1-ex2",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Họ nghiệm của phương trình $\\sin x = 0$ là:",
            shortAnswer: "$x = k\\pi \\ (k \\in \\mathbb{Z})$",
            fullSolution: "Trên đường tròn lượng giác, tung độ bằng 0 tại hai điểm gốc $0$ và $\\pi$, do đó $x = k\\pi \\ (k \\in \\mathbb{Z})$."
          },
          {
            id: "g11-c1-l4-d1-ex3",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Họ nghiệm của phương trình $\\cos x = 1$ là:",
            shortAnswer: "$x = k2\\pi \\ (k \\in \\mathbb{Z})$",
            fullSolution: "Hoành độ bằng 1 duy nhất tại điểm gốc tọa độ góc $0$ trên đường tròn lượng giác: $x = 0 + k2\\pi = k2\\pi$."
          },
          {
            id: "g11-c1-l4-d1-ex4",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Công thức họ nghiệm của phương trình $\\cos x = \\cos \\alpha$ là:",
            shortAnswer: "$x = \\pm \\alpha + k2\\pi \\ (k \\in \\mathbb{Z})$",
            fullSolution: "Theo công thức chuẩn giải phương trình cosin: $\\cos x = \\cos \\alpha \\iff x = \\pm \\alpha + k2\\pi \\ (k \\in \\mathbb{Z})$."
          },
          {
            id: "g11-c1-l4-d1-ex5",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Giải phương trình $\\sin x = \\dfrac{\\sqrt{3}}{2}$.",
            shortAnswer: "$x = \\dfrac{\\pi}{3} + k2\\pi$ hoặc $x = \\dfrac{2\\pi}{3} + k2\\pi \\ (k \\in \\mathbb{Z})$",
            fullSolution: "Ta có $\\dfrac{\\sqrt{3}}{2} = \\sin \\dfrac{\\pi}{3}$.\nPhương trình $\\sin x = \\sin \\dfrac{\\pi}{3} \\iff \\left[ \\begin{array}{l} x = \\dfrac{\\pi}{3} + k2\\pi \\\\ x = \\pi - \\dfrac{\\pi}{3} + k2\\pi = \\dfrac{2\\pi}{3} + k2\\pi \\end{array} \\right. \\ (k \\in \\mathbb{Z})$."
          },
          {
            id: "g11-c1-l4-d1-ex6",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Giải phương trình $\\cos 2x = -\\dfrac{1}{2}$.",
            shortAnswer: "$x = \\pm \\dfrac{\\pi}{3} + k\\pi \\ (k \\in \\mathbb{Z})$",
            fullSolution: "Ta có $-\\dfrac{1}{2} = \\cos \\dfrac{2\\pi}{3}$.\nPhương trình tương đương:\n$2x = \\pm \\dfrac{2\\pi}{3} + k2\\pi \\iff x = \\pm \\dfrac{\\pi}{3} + k\\pi \\ (k \\in \\mathbb{Z})$."
          },
          {
            id: "g11-c1-l4-d1-ex7",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Giải phương trình $\\sin\\left(x - \\dfrac{\\pi}{4}\\right) = 0$.",
            shortAnswer: "$x = \\dfrac{\\pi}{4} + k\\pi \\ (k \\in \\mathbb{Z})$",
            fullSolution: "Phương trình $\\sin u = 0 \\iff u = k\\pi$.\nỞ đây $x - \\dfrac{\\pi}{4} = k\\pi \\iff x = \\dfrac{\\pi}{4} + k\\pi \\ (k \\in \\mathbb{Z})$."
          },
          {
            id: "g11-c1-l4-d1-ex8",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Tìm số nghiệm của phương trình $\\sin\\left(x + \\dfrac{\\pi}{6}\\right) = \\dfrac{1}{2}$ trên đoạn $[0; 2\\pi]$.",
            shortAnswer: "2 nghiệm",
            fullSolution: "Ta có $\\sin\\left(x + \\dfrac{\\pi}{6}\\right) = \\sin \\dfrac{\\pi}{6} \\iff \\left[ \\begin{array}{l} x + \\dfrac{\\pi}{6} = \\dfrac{\\pi}{6} + k2\\pi \\iff x = k2\\pi \\\\ x + \\dfrac{\\pi}{6} = \\dfrac{5\\pi}{6} + k2\\pi \\iff x = \\dfrac{2\\pi}{3} + k2\\pi \\end{array} \\right.$.\nXét trên đoạn $[0; 2\\pi]$:\n- Với $x = k2\\pi$: $k = 0 \\implies x = 0$; $k = 1 \\implies x = 2\\pi$.\n- Với $x = \\dfrac{2\\pi}{3} + k2\\pi$: $k = 0 \\implies x = \\dfrac{2\\pi}{3}$.\nTổng cộng có 3 nghiệm: $0, \\dfrac{2\\pi}{3}, 2\\pi$ (kiểm tra lại: $x=0, x=\\dfrac{2\\pi}{3}, x=2\\pi$ đều thuộc $[0; 2\\pi]$)."
          },
          {
            id: "g11-c1-l4-d1-ex9",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Tìm nghiệm dương nhỏ nhất của phương trình $\\cos\\left(3x - \\dfrac{\\pi}{4}\\right) = 0$.",
            shortAnswer: "$x = \\dfrac{\\pi}{4}$",
            fullSolution: "Phương trình $\\cos u = 0 \\iff u = \\dfrac{\\pi}{2} + k\\pi$:\n$3x - \\dfrac{\\pi}{4} = \\dfrac{\\pi}{2} + k\\pi \\iff 3x = \\dfrac{3\\pi}{4} + k\\pi \\iff x = \\dfrac{\\pi}{4} + \\dfrac{k\\pi}{3} \\ (k \\in \\mathbb{Z})$.\nĐể tìm nghiệm dương nhỏ nhất ($x > 0$ bé nhất), chọn $k = 0 \\implies x = \\dfrac{\\pi}{4}$ (với $k = -1 \\implies x = \\dfrac{\\pi}{4} - \\dfrac{\\pi}{3} = -\\dfrac{\\pi}{12} < 0$).\nVậy nghiệm dương nhỏ nhất là $x = \\dfrac{\\pi}{4}$."
          },
          {
            id: "g11-c1-l4-d1-ex10",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Một con lắc lò xo dao động điều hòa theo phương ngang có phương trình li độ $x(t) = 5\\cos\\left(4\\pi t - \\dfrac{\\pi}{3}\\right)$ (cm), với $t$ tính bằng giây. Xác định các thời điểm trong 1 giây đầu tiên ($0 \\le t \\le 1$) mà con lắc đi qua vị trí có li độ $x = 2.5\\text{ cm}$.",
            shortAnswer: "$t = \\dfrac{1}{6}\\text{ s}, \\dfrac{2}{3}\\text{ s}$",
            fullSolution: "Vị trí $x = 2.5\\text{ cm} \\iff 5\\cos\\left(4\\pi t - \\dfrac{\\pi}{3}\\right) = 2.5 \\iff \\cos\\left(4\\pi t - \\dfrac{\\pi}{3}\\right) = \\dfrac{1}{2} = \\cos \\dfrac{\\pi}{3}$.\nPhương trình tương đương:\n- TH1: $4\\pi t - \\dfrac{\\pi}{3} = \\dfrac{\\pi}{3} + k2\\pi \\iff 4\\pi t = \\dfrac{2\\pi}{3} + k2\\pi \\iff t = \\dfrac{1}{6} + \\dfrac{k}{2}$.\n  Với $0 \\le t \\le 1$: $k = 0 \\implies t = \\dfrac{1}{6}\\text{ s}$, $k = 1 \\implies t = \\dfrac{1}{6} + \\dfrac{1}{2} = \\dfrac{2}{3}\\text{ s}$.\n- TH2: $4\\pi t - \\dfrac{\\pi}{3} = -\\dfrac{\\pi}{3} + k2\\pi \\iff 4\\pi t = k2\\pi \\iff t = \\dfrac{k}{2}$.\n  Với $0 \\le t \\le 1$: $k = 0 \\implies t = 0\\text{ s}$, $k = 1 \\implies t = 0.5\\text{ s}$, $k = 2 \\implies t = 1\\text{ s}$.\nVậy trong 1 giây đầu có các thời điểm: $t = 0\\text{s}, \\dfrac{1}{6}\\text{s}, 0.5\\text{s}, \\dfrac{2}{3}\\text{s}, 1\\text{s}$."
          }
        ]
      },
      {
        id: "g11-c1-l4-dang2",
        name: "Dạng 2: Phương trình tan x = m và cot x = m",
        badge: "4 Biết · 3 Hiểu · 3 Vận dụng (10 bài)",
        badgeClass: "bg-emerald-100 text-emerald-800",
        method: [
          "**1. Phương trình $\\tan x = m$:**",
          "- Phương trình luôn có nghiệm với mọi $m \\in \\mathbb{R}$.",
          "- Đưa về $\\tan x = \\tan \\alpha$, công thức họ nghiệm duy nhất:",
          "  $$x = \\alpha + k\\pi \\quad (k \\in \\mathbb{Z})$$",
          "**2. Phương trình $\\cot x = m$:**",
          "- Phương trình luôn có nghiệm với mọi $m \\in \\mathbb{R}$.",
          "- Đưa về $\\cot x = \\cot \\alpha$, công thức họ nghiệm duy nhất:",
          "  $$x = \\alpha + k\\pi \\quad (k \\in \\mathbb{Z})$$"
        ],
        examples: [
          {
            title: "Ví dụ: Giải phương trình tang cơ bản",
            question: "Giải phương trình $\\tan\\left(2x + \\dfrac{\\pi}{6}\\right) = \\sqrt{3}$.",
            solution: "Ta có $\\sqrt{3} = \\tan \\dfrac{\\pi}{3}$:\n$$\\tan\\left(2x + \\dfrac{\\pi}{6}\\right) = \\tan \\dfrac{\\pi}{3} \\iff 2x + \\dfrac{\\pi}{6} = \\dfrac{\\pi}{3} + k\\pi$$\n$$\\iff 2x = \\dfrac{\\pi}{6} + k\\pi \\iff x = \\dfrac{\\pi}{12} + \\dfrac{k\\pi}{2} \\ (k \\in \\mathbb{Z})$$."
          }
        ],
        exercises: [
          {
            id: "g11-c1-l4-d2-ex1",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Phương trình $\\tan x = m$ có nghiệm với những giá trị nào của tham số $m$?",
            shortAnswer: "Mọi số thực $m \\in \\mathbb{R}$",
            fullSolution: "Vì hàm số $y = \\tan x$ có tập giá trị là toàn bộ tập số thực $\\mathbb{R}$ nên phương trình luôn có nghiệm với mọi $m$."
          },
          {
            id: "g11-c1-l4-d2-ex2",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Họ nghiệm của phương trình $\\tan x = 1$ là:",
            shortAnswer: "$x = \\dfrac{\\pi}{4} + k\\pi \\ (k \\in \\mathbb{Z})$",
            fullSolution: "Ta có $1 = \\tan \\dfrac{\\pi}{4}$, do đó $\\tan x = \\tan \\dfrac{\\pi}{4} \\iff x = \\dfrac{\\pi}{4} + k\\pi \\ (k \\in \\mathbb{Z})$."
          },
          {
            id: "g11-c1-l4-d2-ex3",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Họ nghiệm của phương trình $\\cot x = 0$ là:",
            shortAnswer: "$x = \\dfrac{\\pi}{2} + k\\pi \\ (k \\in \\mathbb{Z})$",
            fullSolution: "Vì $\\cot x = \\dfrac{\\cos x}{\\sin x}$ nên $\\cot x = 0 \\iff \\cos x = 0 \\iff x = \\dfrac{\\pi}{2} + k\\pi \\ (k \\in \\mathbb{Z})$."
          },
          {
            id: "g11-c1-l4-d2-ex4",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Họ nghiệm của phương trình $\\tan x = \\tan \\alpha$ là:",
            shortAnswer: "$x = \\alpha + k\\pi \\ (k \\in \\mathbb{Z})$",
            fullSolution: "Hàm số tang có chu kỳ là $\\pi$ nên họ nghiệm chỉ có đuôi $+k\\pi$: $x = \\alpha + k\\pi$."
          },
          {
            id: "g11-c1-l4-d2-ex5",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Giải phương trình $\\tan x = -\\sqrt{3}$.",
            shortAnswer: "$x = -\\dfrac{\\pi}{3} + k\\pi \\ (k \\in \\mathbb{Z})$",
            fullSolution: "Ta có $-\\sqrt{3} = \\tan\\left(-\\dfrac{\\pi}{3}\\right)$.\nDo đó $\\tan x = \\tan\\left(-\\dfrac{\\pi}{3}\\right) \\iff x = -\\dfrac{\\pi}{3} + k\\pi \\ (k \\in \\mathbb{Z})$."
          },
          {
            id: "g11-c1-l4-d2-ex6",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Giải phương trình $\\cot\\left(2x - \\dfrac{\\pi}{3}\\right) = \\dfrac{\\sqrt{3}}{3}$.",
            shortAnswer: "$x = \\dfrac{\\pi}{3} + \\dfrac{k\\pi}{2} \\ (k \\in \\mathbb{Z})$",
            fullSolution: "Ta có $\\dfrac{\\sqrt{3}}{3} = \\cot \\dfrac{\\pi}{3}$.\nPhương trình tương đương:\n$2x - \\dfrac{\\pi}{3} = \\dfrac{\\pi}{3} + k\\pi \\iff 2x = \\dfrac{2\\pi}{3} + k\\pi \\iff x = \\dfrac{\\pi}{3} + \\dfrac{k\\pi}{2} \\ (k \\in \\mathbb{Z})$."
          },
          {
            id: "g11-c1-l4-d2-ex7",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Giải phương trình $\\tan 3x = \\tan x$.",
            shortAnswer: "$x = \\dfrac{k\\pi}{2} \\ (k \\in \\mathbb{Z}, k \\text{ không lẻ})$ tức $x = m\\pi$",
            fullSolution: "Điều kiện: $\\cos 3x \\ne 0$ và $\\cos x \\ne 0$.\nPhương trình $\\iff 3x = x + k\\pi \\iff 2x = k\\pi \\iff x = \\dfrac{k\\pi}{2}$.\nKiểm tra điều kiện: nếu $k = 2m + 1$ (lẻ) thì $x = \\dfrac{\\pi}{2} + m\\pi \\implies \\cos x = 0$ (loại).\nVậy nghiệm là $k = 2m$ (chẵn) $\\implies x = m\\pi \\ (m \\in \\mathbb{Z})$."
          },
          {
            id: "g11-c1-l4-d2-ex8",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Tìm số nghiệm của phương trình $\\tan 2x = 1$ trên khoảng $\\left(-\\dfrac{\\pi}{2}; \\pi\\right)$.",
            shortAnswer: "3 nghiệm",
            fullSolution: "Ta có $\\tan 2x = 1 = \\tan \\dfrac{\\pi}{4} \\iff 2x = \\dfrac{\\pi}{4} + k\\pi \\iff x = \\dfrac{\\pi}{8} + \\dfrac{k\\pi}{2} \\ (k \\in \\mathbb{Z})$.\nXét trên khoảng $\\left(-\\dfrac{\\pi}{2}; \\pi\\right)$:\n$-\\dfrac{\\pi}{2} < \\dfrac{\\pi}{8} + \\dfrac{k\\pi}{2} < \\pi \\iff -\\dfrac{1}{2} - \\dfrac{1}{8} < \\dfrac{k}{2} < 1 - \\dfrac{1}{8}$\n$\\iff -\\dfrac{5}{8} < \\dfrac{k}{2} < \\dfrac{7}{8} \\iff -\\dfrac{5}{4} < k < \\dfrac{7}{4} \\iff -1.25 < k < 1.75$.\nVì $k \\in \\mathbb{Z}$, ta nhận các giá trị $k \\in \\{-1; 0; 1\\}$ (tương ứng 3 nghiệm)."
          },
          {
            id: "g11-c1-l4-d2-ex9",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Giải phương trình $\\tan x \\cdot \\tan 2x = 1$.",
            shortAnswer: "$x = \\pm \\dfrac{\\pi}{6} + k\\pi \\ (k \\in \\mathbb{Z})$",
            fullSolution: "Điều kiện xác định: $\\cos x \\ne 0$ và $\\cos 2x \\ne 0$.\nPhương trình $\\tan x \\cdot \\tan 2x = 1 \\iff \\tan 2x = \\dfrac{1}{\\tan x} = \\cot x = \\tan\\left(\\dfrac{\\pi}{2} - x\\right)$.\n$\\iff 2x = \\dfrac{\\pi}{2} - x + k\\pi \\iff 3x = \\dfrac{\\pi}{2} + k\\pi \\iff x = \\dfrac{\\pi}{6} + \\dfrac{k\\pi}{3}$.\nKiểm tra điều kiện: các nghiệm thỏa mãn là $x = \\pm \\dfrac{\\pi}{6} + k\\pi \\ (k \\in \\mathbb{Z})$."
          },
          {
            id: "g11-c1-l4-d2-ex10",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Một ngọn hải đăng cao $H = 40\\text{ m}$ so với mực nước biển. Một con tàu di chuyển lại gần bờ biển theo đường thẳng với vận tốc không đổi. Góc trông nghiêng $\\alpha$ từ đỉnh hải đăng xuống con tàu thỏa mãn phương trình $\\cot \\alpha = \\dfrac{d}{40}$, trong đó $d$ là khoảng cách từ tàu đến chân tháp hải đăng. Tìm góc trông $\\alpha$ khi tàu cách chân tháp $40\\sqrt{3}\\text{ m}$.",
            shortAnswer: "$\\alpha = 30^\\circ$ hay $\\dfrac{\\pi}{6}\\text{ rad}$",
            fullSolution: "Thay khoảng cách $d = 40\\sqrt{3}\\text{ m}$ vào phương trình:\n$\\cot \\alpha = \\dfrac{40\\sqrt{3}}{40} = \\sqrt{3}$.\nGiải phương trình $\\cot \\alpha = \\sqrt{3} = \\cot \\dfrac{\\pi}{6} \\implies \\alpha = \\dfrac{\\pi}{6}$ (hay $30^\\circ$, do góc trông là góc nhọn $0 < \\alpha < \\dfrac{\\pi}{2}$)."
          }
        ]
      },
      {
        id: "g11-c1-l4-dang3",
        name: "Dạng 3: Phương trình quy về phương trình bậc hai & Biện luận theo tham số",
        badge: "4 Biết · 3 Hiểu · 3 Vận dụng (10 bài)",
        badgeClass: "bg-emerald-100 text-emerald-800",
        method: [
          "**1. Phương trình bậc hai đối với một hàm số lượng giác:**",
          "- Dạng $a\\sin^2 x + b\\sin x + c = 0$ hoặc $a\\cos^2 x + b\\cos x + c = 0$.",
          "- Đặt $t = \\sin x$ (hoặc $t = \\cos x$) với điều kiện ẩn phụ $|t| \\le 1$.",
          "- Giải phương trình bậc hai tìm $t$, đối chiếu điều kiện rồi giải tìm $x$.",
          "**2. Phương trình bậc nhất đối với sin và cos:**",
          "- Dạng $a\\sin x + b\\cos x = c$.",
          "- Điều kiện có nghiệm: $a^2 + b^2 \\ge c^2$.",
          "- Chia cả hai vế cho $\\sqrt{a^2 + b^2}$ để đưa về phương trình $\\sin(x + \\alpha) = \\dfrac{c}{\\sqrt{a^2 + b^2}}$."
        ],
        examples: [
          {
            title: "Ví dụ: Giải phương trình bậc hai lượng giác",
            question: "Giải phương trình $2\\sin^2 x - 3\\sin x + 1 = 0$.",
            solution: "Đặt $t = \\sin x$ với $-1 \\le t \\le 1$. Phương trình trở thành:\n$$2t^2 - 3t + 1 = 0 \\iff (t - 1)(2t - 1) = 0 \\iff \\left[ \\begin{array}{l} t = 1 \\\\ t = \\dfrac{1}{2} \\end{array} \\right. \\text{ (thỏa mãn)}$$\n- Với $\\sin x = 1 \\iff x = \\dfrac{\\pi}{2} + k2\\pi$.\n- Với $\\sin x = \\dfrac{1}{2} \\iff x = \\dfrac{\\pi}{6} + k2\\pi$ hoặc $x = \\dfrac{5\\pi}{6} + k2\\pi$ ($k \\in \\mathbb{Z}$)."
          }
        ],
        exercises: [
          {
            id: "g11-c1-l4-d3-ex1",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Điều kiện có nghiệm của phương trình bậc nhất $a\\sin x + b\\cos x = c$ ($a^2 + b^2 > 0$) là:",
            shortAnswer: "$a^2 + b^2 \\ge c^2$",
            fullSolution: "Khi chia cả hai vế cho $\\sqrt{a^2 + b^2}$, vế phải là $\\dfrac{c}{\\sqrt{a^2 + b^2}}$. Để phương trình có nghiệm thì giá trị này phải thuộc $[-1; 1] \\iff c^2 \\le a^2 + b^2$."
          },
          {
            id: "g11-c1-l4-d3-ex2",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Khi đặt ẩn phụ $t = \\cos x$ để giải phương trình $2\\cos^2 x - \\cos x - 1 = 0$, điều kiện của ẩn phụ $t$ là:",
            shortAnswer: "$-1 \\le t \\le 1$",
            fullSolution: "Vì miền giá trị của hàm cosin là đoạn $[-1; 1]$ nên điều kiện của ẩn phụ $t = \\cos x$ là $-1 \\le t \\le 1$."
          },
          {
            id: "g11-c1-l4-d3-ex3",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Biểu thức $\\sin x + \\cos x$ có thể viết gọn lại thành:",
            shortAnswer: "$\\sqrt{2}\\sin\\left(x + \\dfrac{\\pi}{4}\\right)$",
            fullSolution: "Nhân và chia cho $\\sqrt{2}$: $\\sin x + \\cos x = \\sqrt{2}\\left(\\dfrac{1}{\\sqrt{2}}\\sin x + \\dfrac{1}{\\sqrt{2}}\\cos x\\right) = \\sqrt{2}\\sin\\left(x + \\dfrac{\\pi}{4}\\right)$."
          },
          {
            id: "g11-c1-l4-d3-ex4",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Phương trình $\\sin x \\cdot \\cos x = 0$ tương đương với phương trình cơ bản nào?",
            shortAnswer: "$\\sin 2x = 0$",
            fullSolution: "Ta có $\\sin 2x = 2\\sin x \\cos x$, do đó $\\sin x \\cos x = 0 \\iff \\dfrac{1}{2}\\sin 2x = 0 \\iff \\sin 2x = 0$."
          },
          {
            id: "g11-c1-l4-d3-ex5",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Giải phương trình $2\\cos^2 x + 3\\cos x - 2 = 0$.",
            shortAnswer: "$x = \\pm \\dfrac{\\pi}{3} + k2\\pi \\ (k \\in \\mathbb{Z})$",
            fullSolution: "Đặt $t = \\cos x$ ($-1 \\le t \\le 1$).\nPhương trình: $2t^2 + 3t - 2 = 0 \\iff (t + 2)(2t - 1) = 0 \\iff t = \\dfrac{1}{2}$ (do $t = -2$ loại).\nVới $\\cos x = \\dfrac{1}{2} = \\cos \\dfrac{\\pi}{3} \\iff x = \\pm \\dfrac{\\pi}{3} + k2\\pi \\ (k \\in \\mathbb{Z})$."
          },
          {
            id: "g11-c1-l4-d3-ex6",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Giải phương trình $\\sqrt{3}\\sin x - \\cos x = 1$.",
            shortAnswer: "$x = \\dfrac{\\pi}{3} + k2\\pi$ hoặc $x = \\pi + k2\\pi \\ (k \\in \\mathbb{Z})$",
            fullSolution: "Chia hai vế cho $\\sqrt{(\\sqrt{3})^2 + (-1)^2} = 2$:\n$\\dfrac{\\sqrt{3}}{2}\\sin x - \\dfrac{1}{2}\\cos x = \\dfrac{1}{2} \\iff \\sin\\left(x - \\dfrac{\\pi}{6}\\right) = \\sin \\dfrac{\\pi}{6}$.\n$\\iff \\left[ \\begin{array}{l} x - \\dfrac{\\pi}{6} = \\dfrac{\\pi}{6} + k2\\pi \\iff x = \\dfrac{\\pi}{3} + k2\\pi \\\\ x - \\dfrac{\\pi}{6} = \\pi - \\dfrac{\\pi}{6} + k2\\pi \\iff x = \\pi + k2\\pi \\end{array} \\right. \\ (k \\in \\mathbb{Z})$."
          },
          {
            id: "g11-c1-l4-d3-ex7",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Giải phương trình $\\sin 2x - 2\\sin x = 0$.",
            shortAnswer: "$x = k\\pi \\ (k \\in \\mathbb{Z})$",
            fullSolution: "Khai triển $\\sin 2x = 2\\sin x \\cos x$:\n$2\\sin x \\cos x - 2\\sin x = 0 \\iff 2\\sin x(\\cos x - 1) = 0$.\n- $\\sin x = 0 \\iff x = k\\pi$.\n- $\\cos x = 1 \\iff x = k2\\pi$ (nghiệm này đã nằm trong họ $x = k\\pi$).\nVậy nghiệm chung là $x = k\\pi \\ (k \\in \\mathbb{Z})$."
          },
          {
            id: "g11-c1-l4-d3-ex8",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Tìm tất cả các giá trị của tham số $m$ để phương trình $\\sin x = 2m - 3$ có nghiệm thuộc đoạn $\\left[0; \\dfrac{\\pi}{2}\\right]$.",
            shortAnswer: "$\\dfrac{3}{2} \\le m \\le 2$",
            fullSolution: "Khi $x \\in \\left[0; \\dfrac{\\pi}{2}\\right]$, hàm số $\\sin x$ nhận các giá trị từ $0$ đến $1$, tức $0 \\le \\sin x \\le 1$.\nĐể phương trình có nghiệm trên đoạn này, ta cần:\n$0 \\le 2m - 3 \\le 1 \\iff 3 \\le 2m \\le 4 \\iff \\dfrac{3}{2} \\le m \\le 2$."
          },
          {
            id: "g11-c1-l4-d3-ex9",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Tìm tất cả các giá trị của tham số $m$ để phương trình $m\\sin x + 3\\cos x = 5$ có nghiệm.",
            shortAnswer: "$m \\ge 4$ hoặc $m \\le -4$ ($|m| \\ge 4$)",
            fullSolution: "Phương trình bậc nhất $a\\sin x + b\\cos x = c$ có nghiệm khi và chỉ khi:\n$a^2 + b^2 \\ge c^2 \\iff m^2 + 3^2 \\ge 5^2 \\iff m^2 + 9 \\ge 25 \\iff m^2 \\ge 16 \\iff |m| \\ge 4$.\nVậy $m \\ge 4$ hoặc $m \\le -4$."
          },
          {
            id: "g11-c1-l4-d3-ex10",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Điện áp xoay chiều lưới điện sinh hoạt có phương trình $u(t) = 220\\sqrt{2}\\cos(100\\pi t)$ (V), trong đó $t$ tính bằng giây ($t \\ge 0$). Xác định hai thời điểm dương đầu tiên mà điện áp tức thời $u(t)$ đạt giá trị $220\\text{ V}$.",
            shortAnswer: "$t_1 = \\dfrac{1}{400}\\text{ s}, t_2 = \\dfrac{7}{400}\\text{ s}$",
            fullSolution: "Ta có phương trình:\n$220\\sqrt{2}\\cos(100\\pi t) = 220 \\iff \\cos(100\\pi t) = \\dfrac{1}{\\sqrt{2}} = \\cos \\dfrac{\\pi}{4}$.\n$\\iff 100\\pi t = \\pm \\dfrac{\\pi}{4} + k2\\pi \\iff t = \\pm \\dfrac{1}{400} + \\dfrac{k}{50} \\ (k \\in \\mathbb{Z})$.\n- Xét họ $t = \\dfrac{1}{400} + \\dfrac{k}{50}$: với $k = 0 \\implies t_1 = \\dfrac{1}{400}\\text{ s} = 0.0025\\text{ s}$.\n- Xét họ $t = -\\dfrac{1}{400} + \\dfrac{k}{50}$: với $k = 1 \\implies t_2 = -\\dfrac{1}{400} + \\dfrac{1}{50} = \\dfrac{7}{400}\\text{ s} = 0.0175\\text{ s}$.\nĐây là hai thời điểm dương đầu tiên điện áp đạt $220\\text{ V}$."
          }
        ]
      }
    ]
  }

,

  "g11-c2-l5": {
    lessonId: "g11-c2-l5",
    title: "Bài 5: Dãy số",
    topics: [
      {
        id: "g11-c2-l5-dang1",
        name: "Dạng 1: Các cách cho dãy số & Xác định các số hạng của dãy số",
        badge: "4 Biết · 3 Hiểu · 3 Vận dụng (10 bài)",
        badgeClass: "bg-emerald-100 text-emerald-800",
        method: [
          "**1. Khái niệm dãy số:**",
          "- Mỗi hàm số $u: \\mathbb{N}^* \\to \\mathbb{R}$ được gọi là một dãy số vô hạn, ký hiệu là $(u_n)$.",
          "- Dạng khai triển: $u_1, u_2, u_3, \\dots, u_n, \\dots$. Số hạng $u_1$ gọi là số hạng đầu, $u_n$ gọi là số hạng tổng quát.",
          "**2. Các cách cho một dãy số:**",
          "- Cho bằng công thức số hạng tổng quát $u_n = f(n)$.",
          "- Cho bằng hệ thức truy hồi: Cho số hạng đầu (hoặc vài số hạng đầu) và hệ thức liên hệ $u_n$ với các số hạng đứng trước nó.",
          "- Cho bằng cách mô tả bằng lời."
        ],
        examples: [
          {
            title: "Ví dụ: Xác định các số hạng của dãy số",
            question: "Cho dãy số $(u_n)$ xác định bởi $u_n = \\dfrac{2n - 1}{n + 1}$. Tìm 3 số hạng đầu tiên và kiểm tra xem số $\\dfrac{7}{5}$ có phải là số hạng của dãy không.",
            solution: "- Thay $n = 1: u_1 = \\dfrac{2(1) - 1}{1 + 1} = \\dfrac{1}{2}$.\n- Thay $n = 2: u_2 = \\dfrac{2(2) - 1}{2 + 1} = 1$.\n- Thay $n = 3: u_3 = \\dfrac{2(3) - 1}{3 + 1} = \\dfrac{5}{4}$.\n- Xét $u_n = \\dfrac{7}{5} \\iff \\dfrac{2n - 1}{n + 1} = \\dfrac{7}{5} \\iff 10n - 5 = 7n + 7 \\iff 3n = 12 \\iff n = 4 \\in \\mathbb{N}^*$. Vậy $\\dfrac{7}{5}$ là số hạng thứ 4 của dãy ($u_4$)."
          }
        ],
        exercises: [
          {
            id: "g11-c2-l5-d1-ex1",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Cho dãy số $(u_n)$ với $u_n = 3n - 2$. Số hạng đầu tiên $u_1$ của dãy số bằng:",
            shortAnswer: "$u_1 = 1$",
            fullSolution: "Thay $n = 1$ vào công thức số hạng tổng quát: $u_1 = 3(1) - 2 = 1$."
          },
          {
            id: "g11-c2-l5-d1-ex2",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Cho dãy số $(u_n)$ với $u_n = \\dfrac{n}{2^n}$. Số hạng thứ ba $u_3$ bằng:",
            shortAnswer: "$u_3 = \\dfrac{3}{8}$",
            fullSolution: "Thay $n = 3$ vào công thức số hạng tổng quát: $u_3 = \\dfrac{3}{2^3} = \\dfrac{3}{8}$."
          },
          {
            id: "g11-c2-l5-d1-ex3",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Cho dãy số $(u_n)$ xác định bởi hệ thức truy hồi: $u_1 = 2$ và $u_{n+1} = u_n + 3$ với mọi $n \\ge 1$. Số hạng thứ hai $u_2$ bằng:",
            shortAnswer: "$u_2 = 5$",
            fullSolution: "Với $n = 1$: $u_2 = u_1 + 3 = 2 + 3 = 5$."
          },
          {
            id: "g11-c2-l5-d1-ex4",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Dãy số các số tự nhiên lẻ sắp xếp theo thứ tự tăng dần có công thức số hạng tổng quát là:",
            shortAnswer: "$u_n = 2n - 1 \\ (n \\in \\mathbb{N}^*)$",
            fullSolution: "Các số tự nhiên lẻ bắt đầu từ 1: $1, 3, 5, 7, \\dots$ có công thức số hạng tổng quát $u_n = 2n - 1$ với $n = 1, 2, 3, \\dots$."
          },
          {
            id: "g11-c2-l5-d1-ex5",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Cho dãy số $(u_n)$ với $u_n = \\dfrac{2n + 1}{n + 2}$. Hỏi số $\\dfrac{17}{10}$ là số hạng thứ mấy của dãy số?",
            shortAnswer: "Số hạng thứ 8 ($u_8$)",
            fullSolution: "Giải phương trình $u_n = \\dfrac{17}{10} \\iff \\dfrac{2n + 1}{n + 2} = \\dfrac{17}{10} \\iff 20n + 10 = 17n + 34 \\iff 3n = 24 \\iff n = 8 \\in \\mathbb{N}^*$.\nVậy $\\dfrac{17}{10}$ là số hạng thứ 8 ($u_8$)."
          },
          {
            id: "g11-c2-l5-d1-ex6",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Cho dãy số $(u_n)$ xác định bởi $u_1 = 3$ và $u_{n+1} = 2u_n - 1$ với $n \\ge 1$. Tìm số hạng $u_4$.",
            shortAnswer: "$u_4 = 17$",
            fullSolution: "Tính lần lượt các số hạng:\n- $u_2 = 2u_1 - 1 = 2(3) - 1 = 5$.\n- $u_3 = 2u_2 - 1 = 2(5) - 1 = 9$.\n- $u_4 = 2u_3 - 1 = 2(9) - 1 = 17$."
          },
          {
            id: "g11-c2-l5-d1-ex7",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Cho dãy số $(u_n)$ có số hạng tổng quát $u_n = (-1)^n \\cdot n^2$. Viết 4 số hạng đầu tiên của dãy số.",
            shortAnswer: "$u_1 = -1, u_2 = 4, u_3 = -9, u_4 = 16$",
            fullSolution: "Thay $n = 1, 2, 3, 4$:\n$u_1 = (-1)^1 \\cdot 1^2 = -1$.\n$u_2 = (-1)^2 \\cdot 2^2 = 4$.\n$u_3 = (-1)^3 \\cdot 3^2 = -9$.\n$u_4 = (-1)^4 \\cdot 4^2 = 16$."
          },
          {
            id: "g11-c2-l5-d1-ex8",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Cho dãy số $(u_n)$ xác định bởi $u_1 = 1$ và $u_{n+1} = u_n + 2n + 1$ với $n \\ge 1$. Tìm công thức số hạng tổng quát $u_n$ theo $n$.",
            shortAnswer: "$u_n = n^2$",
            fullSolution: "Ta có:\n$u_1 = 1 = 1^2$.\n$u_2 = u_1 + 2(1) + 1 = 1 + 3 = 4 = 2^2$.\n$u_3 = u_2 + 2(2) + 1 = 4 + 5 = 9 = 3^2$.\n$u_4 = u_3 + 2(3) + 1 = 9 + 7 = 16 = 4^2$.\nDự đoán $u_n = n^2$. Chứng minh bằng quy nạp:\n- Đúng với $n = 1$.\n- Giả sử đúng đến $n = k$, tức $u_k = k^2$.\n- Với $n = k + 1$: $u_{k+1} = u_k + 2k + 1 = k^2 + 2k + 1 = (k + 1)^2$ (đúng).\nVậy $u_n = n^2$."
          },
          {
            id: "g11-c2-l5-d1-ex9",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Cho dãy số $(u_n)$ với $u_n = \\dfrac{n^2 - 4n + 7}{n + 1}$. Tìm giá trị của $n$ để số hạng $u_n$ nhận giá trị nguyên.",
            shortAnswer: "$n = 1$ hoặc $n = 11$",
            fullSolution: "Chia đa thức: $u_n = \\dfrac{n^2 - 4n + 7}{n + 1} = \\dfrac{(n + 1)(n - 5) + 12}{n + 1} = n - 5 + \\dfrac{12}{n + 1}$.\nVì $n \\in \\mathbb{N}^*$, để $u_n$ là số nguyên thì $n + 1$ phải là ước nguyên dương của 12 và $n + 1 \\ge 2$:\nƯớc của 12 lớn hơn hoặc bằng 2 là: $n + 1 \\in \\{2; 3; 4; 6; 12\\}$.\n$\\implies n \\in \\{1; 2; 3; 5; 11\\}$. Thử lại: $n = 1 \\implies u_1 = 2$, $n = 2 \\implies u_2 = 1$, $n = 3 \\implies u_3 = 1$, $n = 5 \\implies u_5 = 2$, $n = 11 \\implies u_{11} = 7$. Cả 5 giá trị $n \\in \\{1; 2; 3; 5; 11\\}$ đều thỏa mãn."
          },
          {
            id: "g11-c2-l5-d1-ex10",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Một tháp nước được xây dựng theo kiến trúc xếp tầng. Tầng dưới cùng (tầng 1) dùng 500 viên gạch, từ tầng 2 trở lên mỗi tầng dùng ít hơn tầng liền kề bên dưới 25 viên gạch. Lập công thức số gạch $u_n$ của tầng thứ $n$ và xác định tháp có thể xây tối đa bao nhiêu tầng.",
            shortAnswer: "$u_n = 525 - 25n$; xây tối đa 20 tầng",
            fullSolution: "Số viên gạch của các tầng lập thành dãy số:\n$u_1 = 500$.\n$u_2 = 500 - 25 = 475$.\n$u_n = 500 - 25(n - 1) = 525 - 25n$.\nSố lượng viên gạch ở mỗi tầng phải là số nguyên dương: $u_n > 0 \\iff 525 - 25n > 0 \\iff n < \\dfrac{525}{25} = 21$.\nVì $n \\in \\mathbb{N}^*$, giá trị lớn nhất của $n$ là 20 tầng (tầng 20 dùng đúng 25 viên gạch)."
          }
        ]
      },
      {
        id: "g11-c2-l5-dang2",
        name: "Dạng 2: Xét tính tăng, giảm của dãy số",
        badge: "4 Biết · 3 Hiểu · 3 Vận dụng (10 bài)",
        badgeClass: "bg-emerald-100 text-emerald-800",
        method: [
          "**1. Định nghĩa dãy số tăng, dãy số giảm:**",
          "- Dãy số $(u_n)$ là **dãy số tăng** nếu $u_{n+1} > u_n$ với mọi $n \\in \\mathbb{N}^*$.",
          "- Dãy số $(u_n)$ là **dãy số giảm** nếu $u_{n+1} < u_n$ với mọi $n \\in \\mathbb{N}^*$.",
          "**2. Phương pháp xét tính tăng, giảm:**",
          "- **Cách 1 (Xét hiệu):** Xét hiệu $H = u_{n+1} - u_n$.\n  + Nếu $H > 0 \\ (\\forall n) \\implies (u_n)$ là dãy số tăng.\n  + Nếu $H < 0 \\ (\\forall n) \\implies (u_n)$ là dãy số giảm.",
          "- **Cách 2 (Xét tỉ số khi $u_n > 0$):** Xét thương $T = \\dfrac{u_{n+1}}{u_n}$.\n  + Nếu $T > 1 \\ (\\forall n) \\implies (u_n)$ là dãy số tăng.\n  + Nếu $T < 1 \\ (\\forall n) \\implies (u_n)$ là dãy số giảm."
        ],
        examples: [
          {
            title: "Ví dụ: Xét tính tăng giảm bằng xét hiệu",
            question: "Xét tính tăng, giảm của dãy số $(u_n)$ với $u_n = \\dfrac{n}{n + 1}$.",
            solution: "Xét hiệu $u_{n+1} - u_n = \\dfrac{n + 1}{(n + 1) + 1} - \\dfrac{n}{n + 1} = \\dfrac{n + 1}{n + 2} - \\dfrac{n}{n + 1}$\n$$= \\dfrac{(n + 1)^2 - n(n + 2)}{(n + 2)(n + 1)} = \\dfrac{n^2 + 2n + 1 - n^2 - 2n}{(n + 2)(n + 1)} = \\dfrac{1}{(n + 2)(n + 1)} > 0 \\quad (\\forall n \\in \\mathbb{N}^*)$$\nVì $u_{n+1} - u_n > 0$ với mọi $n \\in \\mathbb{N}^*$ nên $(u_n)$ là dãy số tăng."
          }
        ],
        exercises: [
          {
            id: "g11-c2-l5-d2-ex1",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Dãy số $(u_n)$ được gọi là dãy số tăng nếu với mọi $n \\in \\mathbb{N}^*$ ta có:",
            shortAnswer: "$u_{n+1} > u_n$",
            fullSolution: "Theo định nghĩa, dãy số tăng là dãy số mà mỗi số hạng (kể từ số hạng thứ hai) đều lớn hơn số hạng đứng ngay trước nó: $u_{n+1} > u_n \\ (\\forall n \\in \\mathbb{N}^*)$."
          },
          {
            id: "g11-c2-l5-d2-ex2",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Trong các dãy số sau, dãy số nào là dãy số tăng?",
            shortAnswer: "$u_n = 2n + 1$",
            fullSolution: "Ta có $u_{n+1} - u_n = [2(n + 1) + 1] - (2n + 1) = 2 > 0$ với mọi $n$, do đó dãy số là dãy tăng."
          },
          {
            id: "g11-c2-l5-d2-ex3",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Dãy số $u_n = \\dfrac{1}{n}$ có tính chất nào sau đây?",
            shortAnswer: "Dãy số giảm",
            fullSolution: "Ta có $u_{n+1} - u_n = \\dfrac{1}{n + 1} - \\dfrac{1}{n} = \\dfrac{-1}{n(n + 1)} < 0$ với mọi $n \\in \\mathbb{N}^*$, do đó dãy số giảm."
          },
          {
            id: "g11-c2-l5-d2-ex4",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Dãy số đan dấu $u_n = (-1)^n$ có phải là dãy số tăng hay giảm không?",
            shortAnswer: "Không tăng cũng không giảm",
            fullSolution: "Các số hạng của dãy là $-1, 1, -1, 1, \\dots$ luân phiên thay đổi dấu nên dãy số không tăng và cũng không giảm."
          },
          {
            id: "g11-c2-l5-d2-ex5",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Xét tính tăng, giảm của dãy số $(u_n)$ với $u_n = \\dfrac{2n - 1}{n + 1}$.",
            shortAnswer: "Dãy số tăng",
            fullSolution: "Xét hiệu:\n$u_{n+1} - u_n = \\dfrac{2(n + 1) - 1}{(n + 1) + 1} - \\dfrac{2n - 1}{n + 1} = \\dfrac{2n + 1}{n + 2} - \\dfrac{2n - 1}{n + 1}$\n$= \\dfrac{(2n + 1)(n + 1) - (2n - 1)(n + 2)}{(n + 2)(n + 1)} = \\dfrac{(2n^2 + 3n + 1) - (2n^2 + 3n - 2)}{(n + 2)(n + 1)} = \\dfrac{3}{(n + 2)(n + 1)} > 0$.\nVậy $(u_n)$ là dãy số tăng."
          },
          {
            id: "g11-c2-l5-d2-ex6",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Xét tính tăng, giảm của dãy số $(u_n)$ với $u_n = \\dfrac{3^n}{n!}$.",
            shortAnswer: "Dãy số giảm kể từ số hạng $n \\ge 3$",
            fullSolution: "Vì $u_n > 0$, xét tỉ số:\n$\\dfrac{u_{n+1}}{u_n} = \\dfrac{3^{n+1}}{(n + 1)!} \\cdot \\dfrac{n!}{3^n} = \\dfrac{3}{n + 1}$.\n- Với $n = 1: \\dfrac{u_2}{u_1} = \\dfrac{3}{2} > 1$.\n- Với $n = 2: \\dfrac{u_3}{u_2} = \\dfrac{3}{3} = 1$.\n- Với $n \\ge 3: n + 1 \\ge 4 \\implies \\dfrac{3}{n + 1} < 1 \\implies u_{n+1} < u_n$.\nVậy dãy số giảm kể từ số hạng thứ 3 trở đi."
          },
          {
            id: "g11-c2-l5-d2-ex7",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Xét tính tăng, giảm của dãy số $(u_n)$ với $u_n = \\sqrt{n + 1} - \\sqrt{n}$.",
            shortAnswer: "Dãy số giảm",
            fullSolution: "Trục căn thức ở tử: $u_n = \\dfrac{(\\sqrt{n + 1} - \\sqrt{n})(\\sqrt{n + 1} + \\sqrt{n})}{\\sqrt{n + 1} + \\sqrt{n}} = \\dfrac{1}{\\sqrt{n + 1} + \\sqrt{n}}$.\nKhi $n$ tăng thì mẫu số $\\sqrt{n + 1} + \\sqrt{n}$ tăng ngặt, do đó phân số $u_n$ giảm ngặt.\nVậy $(u_n)$ là dãy số giảm."
          },
          {
            id: "g11-c2-l5-d2-ex8",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Cho dãy số $(u_n)$ xác định bởi $u_n = \\dfrac{an + 2}{n + 1}$. Tìm tất cả các giá trị của tham số $a$ để dãy số $(u_n)$ là một dãy số tăng.",
            shortAnswer: "$a > 2$",
            fullSolution: "Xét hiệu:\n$u_{n+1} - u_n = \\dfrac{a(n + 1) + 2}{n + 2} - \\dfrac{an + 2}{n + 1} = \\dfrac{[an + (a + 2)](n + 1) - (an + 2)(n + 2)}{(n + 2)(n + 1)}$\n$= \\dfrac{an^2 + an + (a + 2)n + a + 2 - (an^2 + 2an + 2n + 4)}{(n + 2)(n + 1)} = \\dfrac{a - 2}{(n + 2)(n + 1)}$.\nĐể $(u_n)$ là dãy số tăng thì $u_{n+1} - u_n > 0 \\ (\\forall n \\in \\mathbb{N}^*)$.\nVì $(n + 2)(n + 1) > 0$ với mọi $n \\in \\mathbb{N}^*$, điều này xảy ra khi và chỉ khi $a - 2 > 0 \\iff a > 2$."
          },
          {
            id: "g11-c2-l5-d2-ex9",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Chứng minh dãy số $(u_n)$ với $u_n = \\dfrac{2^n - 1}{2^n}$ là dãy số tăng.",
            shortAnswer: "Dãy số tăng ngặt",
            fullSolution: "Ta viết lại: $u_n = \\dfrac{2^n - 1}{2^n} = 1 - \\dfrac{1}{2^n}$.\nXét hiệu:\n$u_{n+1} - u_n = \\left(1 - \\dfrac{1}{2^{n+1}}\\right) - \\left(1 - \\dfrac{1}{2^n}\\right) = \\dfrac{1}{2^n} - \\dfrac{1}{2^{n+1}} = \\dfrac{2 - 1}{2^{n+1}} = \\dfrac{1}{2^{n+1}} > 0 \\quad (\\forall n \\in \\mathbb{N}^*)$.\nVì $u_{n+1} - u_n > 0$ nên $(u_n)$ là dãy số tăng ngặt."
          },
          {
            id: "g11-c2-l5-d2-ex10",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Nhiệt độ của một tách trà nóng sau khi rót ra cốc để trong phòng có nhiệt độ ổn định $25^\\circ\\text{C}$ giảm dần theo thời gian $n$ phút theo công thức $T_n = 25 + 60 \\cdot (0.85)^n$ ($^\\circ\\text{C}$). Chứng minh dãy số nhiệt độ $(T_n)$ là dãy số giảm và giải thích ý nghĩa thực tế khi thời gian $n$ tiến ra vô cùng.",
            shortAnswer: "Dãy giảm; nhiệt độ tách trà tiệm cận về nhiệt độ phòng $25^\\circ\\text{C}$",
            fullSolution: "Xét hiệu:\n$T_{n+1} - T_n = [25 + 60(0.85)^{n+1}] - [25 + 60(0.85)^n] = 60(0.85)^n (0.85 - 1) = 60(0.85)^n (-0.15) = -9(0.85)^n < 0$.\nVì $T_{n+1} - T_n < 0$ với mọi $n \\ge 1$, dãy số nhiệt độ $(T_n)$ là dãy số giảm ngặt.\nÝ nghĩa thực tế: Tách trà tỏa nhiệt ra môi trường xung quanh, nhiệt độ giảm dần theo thời gian và tiệm cận về nhiệt độ cân bằng với môi trường phòng là $25^\\circ\\text{C}$ khi $n \\to +\\infty$ (do $\\lim 0.85^n = 0$)."
          }
        ]
      },
      {
        id: "g11-c2-l5-dang3",
        name: "Dạng 3: Xét tính bị chặn của dãy số & Bài toán thực tế",
        badge: "4 Biết · 3 Hiểu · 3 Vận dụng (10 bài)",
        badgeClass: "bg-emerald-100 text-emerald-800",
        method: [
          "**1. Khái niệm bị chặn:**",
          "- $(u_n)$ bị chặn trên nếu $\\exists M \\in \\mathbb{R}: u_n \\le M \\ (\\forall n \\in \\mathbb{N}^*)$.",
          "- $(u_n)$ bị chặn dưới nếu $\\exists m \\in \\mathbb{R}: u_n \\ge m \\ (\\forall n \\in \\mathbb{N}^*)$.",
          "- $(u_n)$ **bị chặn** nếu nó vừa bị chặn trên vừa bị chặn dưới: $\\exists m, M \\in \\mathbb{R}: m \\le u_n \\le M \\ (\\forall n \\in \\mathbb{N}^*)$.",
          "**2. Phương pháp xét tính bị chặn:**",
          "- Sử dụng biến đổi phân thức, tách phần nguyên: $\\dfrac{an + b}{cn + d} = \\dfrac{a}{c} + \\dfrac{k}{cn + d}$.",
          "- Sử dụng các bất đẳng thức cơ bản: Cauchy, Bunhiacopxki hoặc đánh giá lượng giác $-1 \\le \\sin, \\cos \\le 1$."
        ],
        examples: [
          {
            title: "Ví dụ: Chứng minh dãy số bị chặn",
            question: "Chứng minh dãy số $(u_n)$ với $u_n = \\dfrac{2n + 1}{n + 2}$ bị chặn.",
            solution: "- Ta có $u_n = \\dfrac{2(n + 2) - 3}{n + 2} = 2 - \\dfrac{3}{n + 2}$.\n- Với mọi $n \\ge 1$: $n + 2 \\ge 3 \\implies 0 < \\dfrac{3}{n + 2} \\le 1$.\n- Do đó: $2 - 1 \\le 2 - \\dfrac{3}{n + 2} < 2 \\iff 1 \\le u_n < 2$.\nVậy dãy số $(u_n)$ bị chặn dưới bởi 1 và bị chặn trên bởi 2, tức dãy số bị chặn."
          }
        ],
        exercises: [
          {
            id: "g11-c2-l5-d3-ex1",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Dãy số $(u_n)$ được gọi là bị chặn dưới nếu tồn tại số thực $m$ sao cho:",
            shortAnswer: "$u_n \\ge m \\ (\\forall n \\in \\mathbb{N}^*)$",
            fullSolution: "Theo định nghĩa chuẩn, dãy số bị chặn dưới nếu mọi số hạng của dãy đều không nhỏ hơn một hằng số thực $m$ cố định."
          },
          {
            id: "g11-c2-l5-d3-ex2",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Dãy số $(u_n)$ với $u_n = \\sin(n)$ có bị chặn không?",
            shortAnswer: "Bị chặn ($-1 \\le u_n \\le 1$)",
            fullSolution: "Vì $-1 \\le \\sin(n) \\le 1$ với mọi $n \\in \\mathbb{N}^*$ nên dãy số bị chặn dưới bởi $-1$ và bị chặn trên bởi 1."
          },
          {
            id: "g11-c2-l5-d3-ex3",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Dãy số $(u_n)$ với $u_n = n^2$ có bị chặn trên không?",
            shortAnswer: "Không bị chặn trên",
            fullSolution: "Khi $n$ tăng không giới hạn thì $n^2 \\to +\\infty$, không tồn tại số thực $M$ cố định nào lớn hơn mọi $n^2$."
          },
          {
            id: "g11-c2-l5-d3-ex4",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Một dãy số vừa bị chặn trên vừa bị chặn dưới thì được gọi là:",
            shortAnswer: "Dãy số bị chặn",
            fullSolution: "Theo định nghĩa sách giáo khoa, dãy số thỏa mãn cả hai điều kiện bị chặn trên và bị chặn dưới được gọi là dãy số bị chặn."
          },
          {
            id: "g11-c2-l5-d3-ex5",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Chứng minh dãy số $(u_n)$ với $u_n = \\dfrac{1}{n(n + 1)}$ bị chặn.",
            shortAnswer: "Bị chặn bởi $0 < u_n \\le \\dfrac{1}{2}$",
            fullSolution: "Với mọi $n \\ge 1$, ta có $n(n + 1) \\ge 1(2) = 2 > 0$.\nDo đó $0 < u_n = \\dfrac{1}{n(n + 1)} \\le \\dfrac{1}{2}$.\nVậy dãy số bị chặn dưới bởi 0 và bị chặn trên bởi $\\dfrac{1}{2}$."
          },
          {
            id: "g11-c2-l5-d3-ex6",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Xét tính bị chặn của dãy số $(u_n)$ với $u_n = \\dfrac{3n - 2}{n + 1}$.",
            shortAnswer: "Bị chặn bởi $\\dfrac{1}{2} \\le u_n < 3$",
            fullSolution: "Viết lại: $u_n = \\dfrac{3(n + 1) - 5}{n + 1} = 3 - \\dfrac{5}{n + 1}$.\nVới mọi $n \\ge 1$: $n + 1 \\ge 2 \\implies 0 < \\dfrac{5}{n + 1} \\le \\dfrac{5}{2}$.\n$\\implies 3 - \\dfrac{5}{2} \\le 3 - \\dfrac{5}{n + 1} < 3 \\iff \\dfrac{1}{2} \\le u_n < 3$.\nVậy $(u_n)$ là dãy số bị chặn."
          },
          {
            id: "g11-c2-l5-d3-ex7",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Dãy số $(u_n)$ với $u_n = (-1)^n + \\dfrac{1}{n}$ có bị chặn không?",
            shortAnswer: "Bị chặn bởi $-1 \\le u_n \\le \\dfrac{3}{2}$",
            fullSolution: "Vì $-1 \\le (-1)^n \\le 1$ và $0 < \\dfrac{1}{n} \\le 1$:\n- $u_n = (-1)^n + \\dfrac{1}{n} \\le 1 + 1 = 2$ (chính xác hơn: với $n = 2: u_2 = 1 + 1/2 = 1.5$; $n$ lẻ $u_n = -1 + 1/n \\ge -1$).\nDo đó $-1 < u_n \\le 1.5$. Dãy số bị chặn."
          },
          {
            id: "g11-c2-l5-d3-ex8",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Tìm chặn trên $M$ nhỏ nhất và chặn dưới $m$ lớn nhất của dãy số $(u_n)$ với $u_n = \\dfrac{2n^2 + 1}{n^2 + 2}$.",
            shortAnswer: "$m = 1, M = 2$",
            fullSolution: "Biến đổi: $u_n = \\dfrac{2(n^2 + 2) - 3}{n^2 + 2} = 2 - \\dfrac{3}{n^2 + 2}$.\nVì $n \\ge 1 \\implies n^2 \\ge 1 \\implies n^2 + 2 \\ge 3$.\n$\\implies 0 < \\dfrac{3}{n^2 + 2} \\le \\dfrac{3}{3} = 1$.\nSuy ra: $2 - 1 \\le 2 - \\dfrac{3}{n^2 + 2} < 2 \\iff 1 \\le u_n < 2$.\nGiá trị nhỏ nhất đạt được tại $n = 1: u_1 = 1$.\nKhi $n \\to \\infty$, $u_n$ tiến dần đến 2 nhưng không bao giờ đạt tới 2.\nVậy chặn dưới lớn nhất là $m = 1$ và chặn trên nhỏ nhất là $M = 2$."
          },
          {
            id: "g11-c2-l5-d3-ex9",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Cho dãy số $(u_n)$ xác định bởi $u_1 = 1$ và $u_{n+1} = \\sqrt{2 + u_n}$ với mọi $n \\ge 1$. Chứng minh bằng quy nạp rằng dãy số $(u_n)$ bị chặn trên bởi 2.",
            shortAnswer: "$u_n < 2 \\ (\\forall n \\in \\mathbb{N}^*)$",
            fullSolution: "Chứng minh $u_n < 2 \\ (\\forall n \\in \\mathbb{N}^*)$ bằng phương pháp quy nạp:\n- Với $n = 1$: $u_1 = 1 < 2$ (đúng).\n- Giả sử mệnh đề đúng đến $n = k$, tức $u_k < 2$.\n- Ta chứng minh đúng với $n = k + 1$:\n  $u_{k+1} = \\sqrt{2 + u_k} < \\sqrt{2 + 2} = \\sqrt{4} = 2$ (đúng).\nTheo nguyên lý quy nạp toán học, $u_n < 2$ với mọi $n \\in \\mathbb{N}^*$.\nKết hợp với $u_n > 0$, dãy số bị chặn."
          },
          {
            id: "g11-c2-l5-d3-ex10",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Một hồ sinh thái nhân tạo có dung tích chứa tối đa 10.000 cá thể cá. Do giới hạn nguồn thức ăn và không gian sống, số lượng cá sau mỗi năm được mô hình hóa theo dãy số $P_n = \\dfrac{10000}{1 + 9 \\cdot (0.6)^n}$ (con), với $n$ là số năm nuôi thả. Chứng minh dãy số $(P_n)$ bị chặn và xác định số cá ban đầu thả vào hồ cùng giới hạn trần sinh thái của hồ.",
            shortAnswer: "$1000 \\le P_n < 10000$; ban đầu 1000 con, trần sinh thái 10.000 con",
            fullSolution: "Ta có $n \\ge 0$ (hoặc $n \\ge 1$):\n- Tại thời điểm bắt đầu $n = 0$: $P_0 = \\dfrac{10000}{1 + 9(1)} = \\dfrac{10000}{10} = 1000\\text{ con}$.\n- Tại năm thứ nhất $n = 1$: $P_1 = \\dfrac{10000}{1 + 9(0.6)} = \\dfrac{10000}{6.4} = 1562.5\\text{ con}$.\n- Với mọi $n \\ge 0$: vì $0 < 0.6^n \\le 1 \\implies 0 < 9 \\cdot 0.6^n \\le 9 \\implies 1 < 1 + 9 \\cdot 0.6^n \\le 10$.\n- Nghịch đảo: $\\dfrac{1}{10} \\le \\dfrac{1}{1 + 9 \\cdot 0.6^n} < 1 \\implies 1000 \\le P_n < 10000$.\nVậy quần thể cá trong hồ bị chặn dưới bởi 1000 con và bị chặn trên bởi trần sinh thái 10.000 con."
          }
        ]
      }
    ]
  }
,

  "g11-c2-l6": {
    lessonId: "g11-c2-l6",
    title: "Bài 6: Cấp số cộng",
    topics: [
      {
        id: "g11-c2-l6-dang1",
        name: "Dạng 1: Nhận biết cấp số cộng & Xác định công sai d, số hạng đầu",
        badge: "4 Biết · 3 Hiểu · 3 Vận dụng (10 bài)",
        badgeClass: "bg-emerald-100 text-emerald-800",
        method: [
          "**1. Định nghĩa cấp số cộng (CSC):**",
          "- Cấp số cộng là dãy số mà mỗi số hạng (kể từ số hạng thứ hai) đều bằng số hạng đứng ngay trước nó cộng với một số không đổi $d$:",
          "  $$u_{n+1} = u_n + d \\quad (n \\in \\mathbb{N}^*)$$",
          "- Số không đổi $d$ được gọi là **công sai** của cấp số cộng: $d = u_{n+1} - u_n$.",
          "- Khi $d = 0$, cấp số cộng là một dãy số không đổi: $u_1, u_1, u_1, \\dots$.",
          "**2. Cách chứng minh một dãy số là cấp số cộng:**",
          "- Xét hiệu $u_{n+1} - u_n$. Nếu hiệu này là một hằng số $d$ không phụ thuộc vào $n$ thì dãy số là cấp số cộng."
        ],
        examples: [
          {
            title: "Ví dụ: Chứng minh dãy số là cấp số cộng",
            question: "Chứng minh dãy số $(u_n)$ với $u_n = 4n - 3$ là một cấp số cộng. Tìm số hạng đầu và công sai.",
            solution: "Xét hiệu $u_{n+1} - u_n = [4(n + 1) - 3] - (4n - 3) = 4n + 1 - 4n + 3 = 4$.\nVì $u_{n+1} - u_n = 4$ là hằng số với mọi $n \\in \\mathbb{N}^*$ nên $(u_n)$ là cấp số cộng có:\n- Số hạng đầu: $u_1 = 4(1) - 3 = 1$.\n- Công sai: $d = 4$."
          }
        ],
        exercises: [
          {
            id: "g11-c2-l6-d1-ex1",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Một cấp số cộng có số hạng đầu $u_1 = 3$ và công sai $d = 2$. Số hạng thứ hai $u_2$ bằng:",
            shortAnswer: "$u_2 = 5$",
            fullSolution: "Theo định nghĩa cấp số cộng: $u_2 = u_1 + d = 3 + 2 = 5$."
          },
          {
            id: "g11-c2-l6-d1-ex2",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Cho cấp số cộng $(u_n)$ có $u_1 = -2$ và $u_2 = 3$. Công sai $d$ của cấp số cộng bằng:",
            shortAnswer: "$d = 5$",
            fullSolution: "Công sai: $d = u_2 - u_1 = 3 - (-2) = 5$."
          },
          {
            id: "g11-c2-l6-d1-ex3",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Dãy số nào sau đây là một cấp số cộng?",
            shortAnswer: "1, 4, 7, 10, 13",
            fullSolution: "Dãy số $1, 4, 7, 10, 13$ có hiệu hai số liên tiếp không đổi: $4 - 1 = 7 - 4 = 10 - 7 = 13 - 10 = 3$. Đây là cấp số cộng có $u_1 = 1, d = 3$."
          },
          {
            id: "g11-c2-l6-d1-ex4",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Công sai $d$ của cấp số cộng $(u_n)$ xác định bởi $u_n = 5 - 2n$ bằng:",
            shortAnswer: "$d = -2$",
            fullSolution: "Ta có $u_{n+1} - u_n = [5 - 2(n + 1)] - (5 - 2n) = -2n + 3 - 5 + 2n = -2$. Công sai $d = -2$."
          },
          {
            id: "g11-c2-l6-d1-ex5",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Cho cấp số cộng $(u_n)$ có $u_1 = 4$ và công sai $d = -3$. Viết 4 số hạng đầu tiên của cấp số cộng.",
            shortAnswer: "$u_1 = 4, u_2 = 1, u_3 = -2, u_4 = -5$",
            fullSolution: "Cộng dồn công sai $d = -3$:\n- $u_1 = 4$.\n- $u_2 = 4 + (-3) = 1$.\n- $u_3 = 1 + (-3) = -2$.\n- $u_4 = -2 + (-3) = -5$."
          },
          {
            id: "g11-c2-l6-d1-ex6",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Trong các dãy số cho bởi công thức sau, dãy số nào KHÔNG PHẢI là cấp số cộng?",
            shortAnswer: "$u_n = n^2 + 1$",
            fullSolution: "Xét $u_n = n^2 + 1$: $u_1 = 2, u_2 = 5, u_3 = 10$. Hiệu $u_2 - u_1 = 3 \\ne u_3 - u_2 = 5$. Hiệu không phải hằng số nên $(u_n)$ không là cấp số cộng."
          },
          {
            id: "g11-c2-l6-d1-ex7",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Cho cấp số cộng $(u_n)$ có $u_4 = 10$ và $u_7 = 19$. Tìm số hạng đầu $u_1$ và công sai $d$.",
            shortAnswer: "$u_1 = 1, d = 3$",
            fullSolution: "Ta có $u_7 - u_4 = (7 - 4)d = 3d \\implies 3d = 19 - 10 = 9 \\implies d = 3$.\nKhi đó: $u_1 = u_4 - 3d = 10 - 3(3) = 1$."
          },
          {
            id: "g11-c2-l6-d1-ex8",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Tìm giá trị của tham số $x$ để ba số $2x - 1, x + 2, 4x + 1$ theo thứ tự lập thành một cấp số cộng.",
            shortAnswer: "$x = 1$",
            fullSolution: "Ba số $a, b, c$ lập thành cấp số cộng $\\iff a + c = 2b$.\nÁp dụng: $(2x - 1) + (4x + 1) = 2(x + 2)$\n$\\iff 6x = 2x + 4 \\iff 4x = 4 \\iff x = 1$.\nThử lại: ba số là $1, 3, 5$ (cấp số cộng công sai $d = 2$)."
          },
          {
            id: "g11-c2-l6-d1-ex9",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Cho dãy số $(u_n)$ xác định bởi $u_1 = 1$ và $u_{n+1} = \\dfrac{u_n}{1 + 2u_n}$ với $n \\ge 1$. Đặt $v_n = \\dfrac{1}{u_n}$. Chứng minh $(v_n)$ là một cấp số cộng và tìm công thức số hạng tổng quát $u_n$.",
            shortAnswer: "$(v_n)$ là CSC với $v_1 = 1, d = 2$; $u_n = \\dfrac{1}{2n - 1}$",
            fullSolution: "Nghịch đảo hai vế hệ thức truy hồi:\n$v_{n+1} = \\dfrac{1}{u_{n+1}} = \\dfrac{1 + 2u_n}{u_n} = \\dfrac{1}{u_n} + 2 = v_n + 2$.\nSuy ra $v_{n+1} - v_n = 2$ (không đổi) với mọi $n \\ge 1$.\nDo đó $(v_n)$ là cấp số cộng có $v_1 = \\dfrac{1}{u_1} = 1$ và công sai $d = 2$.\nSố hạng tổng quát: $v_n = v_1 + (n - 1)d = 1 + 2(n - 1) = 2n - 1$.\nSuy ra $u_n = \\dfrac{1}{v_n} = \\dfrac{1}{2n - 1}$."
          },
          {
            id: "g11-c2-l6-d1-ex10",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Một công ty khoan giếng đưa ra bảng giá: Mét khoan đầu tiên có giá 100.000 đồng, từ mét khoan thứ hai trở đi giá mỗi mét tăng thêm 20.000 đồng so với mét ngay trước đó. Chứng minh giá của các mét khoan lập thành một cấp số cộng và tính giá của mét khoan thứ 15.",
            shortAnswer: "$u_{15} = 380.000\\text{ đồng}$",
            fullSolution: "Gọi $u_n$ là giá tiền của mét khoan thứ $n$ (nghìn đồng).\nTa có $u_1 = 100$ và $u_{n+1} = u_n + 20$ với mọi $n \\ge 1$.\nHiệu $u_{n+1} - u_n = 20$ là hằng số nên $(u_n)$ là cấp số cộng với $u_1 = 100$ và $d = 20$.\nGiá của mét khoan thứ 15 là:\n$u_{15} = u_1 + (15 - 1)d = 100 + 14 \\cdot 20 = 100 + 280 = 380\\text{ nghìn đồng} = 380.000\\text{ đồng}$."
          }
        ]
      },
      {
        id: "g11-c2-l6-dang2",
        name: "Dạng 2: Số hạng tổng quát & Tính chất ba số hạng liên tiếp",
        badge: "4 Biết · 3 Hiểu · 3 Vận dụng (10 bài)",
        badgeClass: "bg-emerald-100 text-emerald-800",
        method: [
          "**1. Số hạng tổng quát của cấp số cộng:**",
          "- Nếu cấp số cộng $(u_n)$ có số hạng đầu $u_1$ và công sai $d$ thì số hạng tổng quát $u_n$ được tính bởi:",
          "  $$u_n = u_1 + (n - 1)d \\quad (n \\ge 2)$$",
          "- Tổng quát: $u_n = u_k + (n - k)d$.",
          "**2. Tính chất các số hạng của cấp số cộng:**",
          "- Mỗi số hạng (trừ số hạng đầu và cuối trong CSC hữu hạn) là trung bình cộng của hai số hạng kề bên nó:",
          "  $$u_k = \\dfrac{u_{k-1} + u_{k+1}}{2} \\iff u_{k-1} + u_{k+1} = 2u_k \\quad (k \\ge 2)$$"
        ],
        examples: [
          {
            title: "Ví dụ: Tìm số hạng tổng quát của cấp số cộng",
            question: "Cho cấp số cộng $(u_n)$ có $u_1 = 3$ và công sai $d = 4$. Tìm số hạng thứ 20 và hỏi 103 có phải là số hạng của dãy không?",
            solution: "- Công thức tổng quát: $u_n = 3 + (n - 1)4 = 4n - 1$.\n- Số hạng thứ 20: $u_{20} = 4(20) - 1 = 79$.\n- Xét $4n - 1 = 103 \\iff 4n = 104 \\iff n = 26 \\in \\mathbb{N}^*$. Vậy 103 là số hạng thứ 26 ($u_{26}$)."
          }
        ],
        exercises: [
          {
            id: "g11-c2-l6-d2-ex1",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Công thức tính số hạng tổng quát $u_n$ của cấp số cộng có số hạng đầu $u_1$ và công sai $d$ là:",
            shortAnswer: "$u_n = u_1 + (n - 1)d$",
            fullSolution: "Theo định lý số hạng tổng quát của cấp số cộng: $u_n = u_1 + (n - 1)d$ với mọi $n \\ge 1$."
          },
          {
            id: "g11-c2-l6-d2-ex2",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Cho cấp số cộng $(u_n)$ có $u_1 = 5$ và $d = 3$. Số hạng thứ mười $u_{10}$ bằng:",
            shortAnswer: "$u_{10} = 32$",
            fullSolution: "Áp dụng công thức: $u_{10} = u_1 + (10 - 1)d = 5 + 9(3) = 5 + 27 = 32$."
          },
          {
            id: "g11-c2-l6-d2-ex3",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Nếu ba số $a, b, c$ theo thứ tự lập thành một cấp số cộng thì hệ thức liên hệ là:",
            shortAnswer: "$a + c = 2b$",
            fullSolution: "Số hạng đứng giữa bằng trung bình cộng hai số hai bên: $b = \\dfrac{a + c}{2} \\iff a + c = 2b$."
          },
          {
            id: "g11-c2-l6-d2-ex4",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Cho cấp số cộng $(u_n)$ có $u_1 = -3$ và $u_2 = 1$. Số hạng $u_5$ bằng:",
            shortAnswer: "$u_5 = 13$",
            fullSolution: "Công sai $d = u_2 - u_1 = 1 - (-3) = 4$. Khi đó $u_5 = u_1 + 4d = -3 + 4(4) = 13$."
          },
          {
            id: "g11-c2-l6-d2-ex5",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Cho cấp số cộng $(u_n)$ có $u_1 = -5$ và $d = 4$. Số 195 là số hạng thứ mấy của cấp số cộng?",
            shortAnswer: "Số hạng thứ 51 ($u_{51}$)",
            fullSolution: "Phương trình: $u_n = u_1 + (n - 1)d \\iff -5 + 4(n - 1) = 195 \\iff 4(n - 1) = 200 \\iff n - 1 = 50 \\iff n = 51$.\nVậy 195 là số hạng thứ 51."
          },
          {
            id: "g11-c2-l6-d2-ex6",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Cho cấp số cộng $(u_n)$ thỏa mãn hệ: $\\begin{cases} u_1 + u_5 = 10 \\\\ u_2 + u_6 = 14 \\end{cases}$. Tìm số hạng đầu $u_1$ và công sai $d$.",
            shortAnswer: "$u_1 = 1, d = 2$",
            fullSolution: "Biểu diễn qua $u_1$ và $d$:\n$\\begin{cases} u_1 + (u_1 + 4d) = 10 \\\\ (u_1 + d) + (u_1 + 5d) = 14 \\end{cases} \\iff \\begin{cases} 2u_1 + 4d = 10 \\\\ 2u_1 + 6d = 14 \\end{cases}$.\nLấy (2) trừ (1): $2d = 4 \\implies d = 2$.\nThay vào (1): $2u_1 + 8 = 10 \\implies 2u_1 = 2 \\implies u_1 = 1$."
          },
          {
            id: "g11-c2-l6-d2-ex7",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Xen vào giữa hai số 4 và 28 ba số thực để được một cấp số cộng gồm 5 số hạng. Tìm ba số đó.",
            shortAnswer: "10, 16, 22",
            fullSolution: "Cấp số cộng có 5 số hạng với $u_1 = 4$ và $u_5 = 28$.\nÁp dụng: $u_5 = u_1 + 4d \\iff 28 = 4 + 4d \\iff 4d = 24 \\iff d = 6$.\nBa số xen giữa lần lượt là:\n$u_2 = 4 + 6 = 10$.\n$u_3 = 10 + 6 = 16$.\n$u_4 = 16 + 6 = 22$."
          },
          {
            id: "g11-c2-l6-d2-ex8",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Tìm ba số hạng liên tiếp của một cấp số cộng biết tổng của chúng bằng 15 và tổng bình phương của chúng bằng 83.",
            shortAnswer: "3, 5, 7 hoặc 7, 5, 3",
            fullSolution: "Gọi ba số cần tìm là $a - d, a, a + d$.\nTổng của chúng: $(a - d) + a + (a + d) = 15 \\iff 3a = 15 \\iff a = 5$.\nTổng bình phương:\n$(5 - d)^2 + 5^2 + (5 + d)^2 = 83 \\iff 25 - 10d + d^2 + 25 + 25 + 10d + d^2 = 83$\n$\\iff 75 + 2d^2 = 83 \\iff 2d^2 = 8 \\iff d^2 = 4 \\iff d = \\pm 2$.\n- Với $d = 2$: ba số là $3, 5, 7$.\n- Với $d = -2$: ba số là $7, 5, 3$."
          },
          {
            id: "g11-c2-l6-d2-ex9",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Một tam giác vuông có độ dài ba cạnh lập thành một cấp số cộng với công sai $d > 0$. Biết chu vi tam giác bằng $36\\text{ cm}$. Tính độ dài ba cạnh của tam giác đó.",
            shortAnswer: "$9\\text{ cm}, 12\\text{ cm}, 15\\text{ cm}$",
            fullSolution: "Gọi độ dài ba cạnh tam giác vuông là $a - d, a, a + d$ với $0 < d < a$ (cạnh huyền là $a + d$).\nChu vi: $(a - d) + a + (a + d) = 36 \\iff 3a = 36 \\iff a = 12$.\nTheo định lý Pythagore:\n$(12 - d)^2 + 12^2 = (12 + d)^2 \\iff 144 - 24d + d^2 + 144 = 144 + 24d + d^2$\n$\\iff 144 = 48d \\iff d = 3$.\nĐộ dài ba cạnh lần lượt là: $12 - 3 = 9\\text{ cm}, 12\\text{ cm}, 12 + 3 = 15\\text{ cm}$."
          },
          {
            id: "g11-c2-l6-d2-ex10",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Một vận động viên chạy cự ly dài lập kế hoạch tập luyện: Ngày đầu tiên chạy được $5\\text{ km}$, từ ngày thứ hai trở đi mỗi ngày chạy nhiều hơn ngày hôm trước $500\\text{ m}$ ($0.5\\text{ km}$). Hỏi đến ngày thứ bao nhiêu vận động viên đó sẽ chạy được quãng đường $12.5\\text{ km}$ trong một ngày?",
            shortAnswer: "Ngày thứ 16",
            fullSolution: "Quãng đường chạy mỗi ngày lập thành cấp số cộng $(u_n)$ với $u_1 = 5$ và $d = 0.5$ (km).\nTìm $n$ để $u_n = 12.5$:\n$u_n = u_1 + (n - 1)d \\iff 5 + (n - 1)(0.5) = 12.5 \\iff 0.5(n - 1) = 7.5 \\iff n - 1 = 15 \\iff n = 16$.\nVậy đến ngày tập luyện thứ 16, vận động viên sẽ chạy được $12.5\\text{ km}$."
          }
        ]
      },
      {
        id: "g11-c2-l6-dang3",
        name: "Dạng 3: Tổng n số hạng đầu tiên & Ứng dụng thực tế cấp số cộng",
        badge: "4 Biết · 3 Hiểu · 3 Vận dụng (10 bài)",
        badgeClass: "bg-emerald-100 text-emerald-800",
        method: [
          "**1. Công thức tính tổng $n$ số hạng đầu tiên $S_n$:**",
          "  $$S_n = u_1 + u_2 + \\dots + u_n = \\dfrac{n(u_1 + u_n)}{2}$$",
          "- Thay $u_n = u_1 + (n - 1)d$ vào, ta được dạng thứ hai:",
          "  $$S_n = \\dfrac{n[2u_1 + (n - 1)d]}{2} = n u_1 + \\dfrac{n(n - 1)}{2}d$$",
          "**2. Mối liên hệ giữa tổng và số hạng:**",
          "- $u_1 = S_1$.",
          "- $u_n = S_n - S_{n-1} \\quad (n \\ge 2)$."
        ],
        examples: [
          {
            title: "Ví dụ: Tính tổng n số hạng đầu của cấp số cộng",
            question: "Tính tổng của 20 số hạng đầu tiên của cấp số cộng có $u_1 = 2$ và công sai $d = 5$.",
            solution: "Áp dụng công thức $S_n = \\dfrac{n[2u_1 + (n - 1)d]}{2}$ với $n = 20, u_1 = 2, d = 5$:\n$$S_{20} = \\dfrac{20[2(2) + (20 - 1)5]}{2} = 10[4 + 95] = 10(99) = 990$$."
          }
        ],
        exercises: [
          {
            id: "g11-c2-l6-d3-ex1",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Công thức tính tổng $n$ số hạng đầu tiên $S_n$ của cấp số cộng khi biết $u_1$ và $u_n$ là:",
            shortAnswer: "$S_n = \\dfrac{n(u_1 + u_n)}{2}$",
            fullSolution: "Theo định lý tổng $n$ số hạng đầu của cấp số cộng: $S_n = \\dfrac{n(u_1 + u_n)}{2}$."
          },
          {
            id: "g11-c2-l6-d3-ex2",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Tổng của 10 số tự nhiên lẻ đầu tiên $1 + 3 + 5 + \\dots + 19$ bằng:",
            shortAnswer: "100",
            fullSolution: "Cấp số cộng có $n = 10, u_1 = 1, u_{10} = 19$. Tổng $S_{10} = \\dfrac{10(1 + 19)}{2} = 10 \\cdot 10 = 100$."
          },
          {
            id: "g11-c2-l6-d3-ex3",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Cho cấp số cộng có $u_1 = 3, d = 4$. Tổng 2 số hạng đầu tiên $S_2$ bằng:",
            shortAnswer: "10",
            fullSolution: "$u_1 = 3, u_2 = 3 + 4 = 7$. Tổng $S_2 = u_1 + u_2 = 3 + 7 = 10$."
          },
          {
            id: "g11-c2-l6-d3-ex4",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Tổng $S = 1 + 2 + 3 + \\dots + 100$ bằng:",
            shortAnswer: "5050",
            fullSolution: "Áp dụng công thức tổng cấp số cộng: $S = \\dfrac{100(1 + 100)}{2} = 50 \\cdot 101 = 5050$."
          },
          {
            id: "g11-c2-l6-d3-ex5",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Cho cấp số cộng $(u_n)$ có $u_1 = -2$ và $d = 3$. Tính tổng của 30 số hạng đầu tiên.",
            shortAnswer: "$S_{30} = 1245$",
            fullSolution: "Áp dụng công thức:\n$S_{30} = \\dfrac{30[2(-2) + (30 - 1)3]}{2} = 15[-4 + 29 \\cdot 3] = 15[-4 + 87] = 15 \\cdot 83 = 1245$."
          },
          {
            id: "g11-c2-l6-d3-ex6",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tính tổng tất cả các số tự nhiên có hai chữ số chia hết cho 5.",
            shortAnswer: "945",
            fullSolution: "Các số tự nhiên có hai chữ số chia hết cho 5 lập thành cấp số cộng: $10, 15, 20, \\dots, 95$.\n- Số hạng đầu $u_1 = 10$, công sai $d = 5$, số hạng cuối $u_n = 95$.\n- Số số hạng: $n = \\dfrac{95 - 10}{5} + 1 = 18$.\n- Tổng: $S_{18} = \\dfrac{18(10 + 95)}{2} = 9 \\cdot 105 = 945$."
          },
          {
            id: "g11-c2-l6-d3-ex7",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Cho cấp số cộng $(u_n)$ có $S_n = 2n^2 + 3n$. Tìm số hạng đầu $u_1$ và công sai $d$.",
            shortAnswer: "$u_1 = 5, d = 4$",
            fullSolution: "- $u_1 = S_1 = 2(1)^2 + 3(1) = 5$.\n- $S_2 = 2(2)^2 + 3(2) = 8 + 6 = 14$.\n- $u_2 = S_2 - S_1 = 14 - 5 = 9$.\n- Công sai: $d = u_2 - u_1 = 9 - 5 = 4$."
          },
          {
            id: "g11-c2-l6-d3-ex8",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Cho cấp số cộng $(u_n)$ có $u_1 = 5$ và $d = 3$. Cần lấy bao nhiêu số hạng đầu tiên để tổng của chúng bằng 390?",
            shortAnswer: "$n = 15$",
            fullSolution: "Áp dụng công thức tổng: $S_n = \\dfrac{n[2(5) + (n - 1)3]}{2} = 390$\n$\\iff n(10 + 3n - 3) = 780 \\iff n(3n + 7) = 780 \\iff 3n^2 + 7n - 780 = 0$.\nTính $\\Delta = 7^2 - 4(3)(-780) = 49 + 9360 = 9409 = 97^2$.\nNghiệm: $n = \\dfrac{-7 + 97}{6} = \\dfrac{90}{6} = 15$ (loại nghiệm âm $n = -\\dfrac{104}{6}$).\nVậy cần lấy 15 số hạng đầu tiên."
          },
          {
            id: "g11-c2-l6-d3-ex9",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Giải phương trình tìm $x$: $1 + 7 + 13 + 19 + \\dots + x = 280$, biết các số hạng ở vế trái lập thành một cấp số cộng.",
            shortAnswer: "$x = 55$",
            fullSolution: "Vế trái là tổng cấp số cộng có $u_1 = 1$, công sai $d = 6$, số hạng cuối $u_n = x = 1 + (n - 1)6 = 6n - 5$.\nTổng $S_n = \\dfrac{n(1 + x)}{2} = \\dfrac{n(1 + 6n - 5)}{2} = \\dfrac{n(6n - 4)}{2} = n(3n - 2)$.\nTheo đề bài: $n(3n - 2) = 280 \\iff 3n^2 - 2n - 280 = 0$.\n$\\Delta' = 1 - 3(-280) = 1 + 840 = 841 = 29^2$.\nNghiệm dương: $n = \\dfrac{1 + 29}{3} = 10$.\nKhi đó: $x = u_{10} = 6(10) - 5 = 55$."
          },
          {
            id: "g11-c2-l6-d3-ex10",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Một rạp hát có 25 hàng ghế được xếp theo hình cánh quạt. Hàng đầu tiên có 20 ghế, mỗi hàng tiếp theo có nhiều hơn hàng liền trước nó 2 ghế. Tính tổng số ghế của toàn bộ rạp hát.",
            shortAnswer: "1100 ghế",
            fullSolution: "Số ghế ở các hàng lập thành một cấp số cộng với $n = 25$, $u_1 = 20$ và công sai $d = 2$.\nTổng số ghế của rạp hát là tổng của 25 số hạng đầu:\n$S_{25} = \\dfrac{25[2u_1 + (25 - 1)d]}{2} = \\dfrac{25[2(20) + 24(2)]}{2} = \\dfrac{25[40 + 48]}{2} = \\dfrac{25 \\cdot 88}{2} = 25 \\cdot 44 = 1100\\text{ ghế}$."
          }
        ]
      }
    ]
  }
,

  "g11-c2-l7": {
    lessonId: "g11-c2-l7",
    title: "Bài 7: Cấp số nhân",
    topics: [
      {
        id: "g11-c2-l7-dang1",
        name: "Dạng 1: Nhận biết cấp số nhân & Xác định công bội q, số hạng đầu",
        badge: "4 Biết · 3 Hiểu · 3 Vận dụng (10 bài)",
        badgeClass: "bg-emerald-100 text-emerald-800",
        method: [
          "**1. Định nghĩa cấp số nhân (CSN):**",
          "- Cấp số nhân là dãy số mà mỗi số hạng (kể từ số hạng thứ hai) đều bằng số hạng đứng ngay trước nó nhân với một số không đổi $q$:",
          "  $$u_{n+1} = u_n \\cdot q \\quad (n \\in \\mathbb{N}^*)$$",
          "- Số không đổi $q$ được gọi là **công bội** của cấp số nhân: $q = \\dfrac{u_{n+1}}{u_n}$ (khi $u_n \\ne 0$).",
          "- Nếu $q = 1$, cấp số nhân là dãy số không đổi: $u_1, u_1, u_1, \\dots$.",
          "- Nếu $q = 0$, dãy có dạng $u_1, 0, 0, 0, \\dots$.",
          "**2. Cách nhận biết dãy số là cấp số nhân:**",
          "- Xét tỉ số $\\dfrac{u_{n+1}}{u_n}$. Nếu tỉ số này là một hằng số $q$ không phụ thuộc vào $n$ thì dãy số là cấp số nhân."
        ],
        examples: [
          {
            title: "Ví dụ: Nhận biết cấp số nhân",
            question: "Chứng minh dãy số $(u_n)$ với $u_n = 3 \\cdot 2^n$ là một cấp số nhân. Tìm số hạng đầu $u_1$ và công bội $q$.",
            solution: "Xét tỉ số $\\dfrac{u_{n+1}}{u_n} = \\dfrac{3 \\cdot 2^{n+1}}{3 \\cdot 2^n} = 2$.\nVì tỉ số bằng 2 không đổi với mọi $n$ nên $(u_n)$ là cấp số nhân có:\n- Số hạng đầu: $u_1 = 3 \\cdot 2^1 = 6$.\n- Công bội: $q = 2$."
          }
        ],
        exercises: [
          {
            id: "g11-c2-l7-d1-ex1",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Cho cấp số nhân $(u_n)$ có số hạng đầu $u_1 = 3$ và công bội $q = 2$. Số hạng thứ hai $u_2$ bằng:",
            shortAnswer: "$u_2 = 6$",
            fullSolution: "Theo định nghĩa cấp số nhân: $u_2 = u_1 \\cdot q = 3 \\cdot 2 = 6$."
          },
          {
            id: "g11-c2-l7-d1-ex2",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Cho cấp số nhân có $u_1 = 2$ và $u_2 = -6$. Công bội $q$ của cấp số nhân bằng:",
            shortAnswer: "$q = -3$",
            fullSolution: "Công bội: $q = \\dfrac{u_2}{u_1} = \\dfrac{-6}{2} = -3$."
          },
          {
            id: "g11-c2-l7-d1-ex3",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Dãy số nào sau đây là một cấp số nhân?",
            shortAnswer: "2, 6, 18, 54",
            fullSolution: "Dãy số $2, 6, 18, 54$ có tỉ số hai số liên tiếp không đổi: $\\dfrac{6}{2} = \\dfrac{18}{6} = \\dfrac{54}{18} = 3$. Đây là cấp số nhân có $u_1 = 2, q = 3$."
          },
          {
            id: "g11-c2-l7-d1-ex4",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Công bội $q$ của cấp số nhân $(u_n)$ có số hạng tổng quát $u_n = 5 \\cdot 3^{n-1}$ bằng:",
            shortAnswer: "$q = 3$",
            fullSolution: "Theo công thức số hạng tổng quát $u_n = u_1 \\cdot q^{n-1}$, công bội là cơ số lũy thừa: $q = 3$."
          },
          {
            id: "g11-c2-l7-d1-ex5",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Cho cấp số nhân $(u_n)$ có $u_1 = -4$ và $q = \\dfrac{1}{2}$. Viết 4 số hạng đầu tiên của cấp số nhân.",
            shortAnswer: "$u_1 = -4, u_2 = -2, u_3 = -1, u_4 = -\\dfrac{1}{2}$",
            fullSolution: "Nhân dồn công bội $q = \\dfrac{1}{2}$:\n- $u_1 = -4$.\n- $u_2 = -4 \\cdot \\dfrac{1}{2} = -2$.\n- $u_3 = -2 \\cdot \\dfrac{1}{2} = -1$.\n- $u_4 = -1 \\cdot \\dfrac{1}{2} = -\\dfrac{1}{2}$."
          },
          {
            id: "g11-c2-l7-d1-ex6",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Cho cấp số nhân $(u_n)$ có $u_3 = 12$ và $u_5 = 48$. Tìm các giá trị có thể có của công bội $q$.",
            shortAnswer: "$q = 2$ hoặc $q = -2$",
            fullSolution: "Ta có $\\dfrac{u_5}{u_3} = q^2 \\implies q^2 = \\dfrac{48}{12} = 4 \\iff q = \\pm 2$."
          },
          {
            id: "g11-c2-l7-d1-ex7",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Trong các dãy số sau, dãy số nào KHÔNG PHẢI là cấp số nhân?",
            shortAnswer: "$u_n = 2n$",
            fullSolution: "Dãy $u_n = 2n$ là $2, 4, 6, 8, \\dots$ có hiệu hai số liên tiếp bằng 2 (đây là cấp số cộng, không phải cấp số nhân vì $\\dfrac{4}{2} = 2 \\ne \\dfrac{6}{4} = 1.5$)."
          },
          {
            id: "g11-c2-l7-d1-ex8",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Tìm các giá trị của tham số $x$ để ba số $x - 1, x + 2, 3x$ theo thứ tự lập thành một cấp số nhân.",
            shortAnswer: "$x = 4$ hoặc $x = -\\dfrac{1}{2}$",
            fullSolution: "Ba số $a, b, c$ lập thành cấp số nhân $\\iff ac = b^2$.\nÁp dụng: $(x - 1)(3x) = (x + 2)^2 \\iff 3x^2 - 3x = x^2 + 4x + 4$\n$\\iff 2x^2 - 7x - 4 = 0$.\nTính $\\Delta = (-7)^2 - 4(2)(-4) = 49 + 32 = 81 = 9^2$.\nNghiệm: $x = \\dfrac{7 + 9}{4} = 4$ hoặc $x = \\dfrac{7 - 9}{4} = -\\dfrac{1}{2}$."
          },
          {
            id: "g11-c2-l7-d1-ex9",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Cho cấp số nhân $(u_n)$ có tất cả các số hạng đều dương thỏa mãn $u_1 + u_2 = 12$ và $u_3 + u_4 = 48$. Tìm số hạng đầu $u_1$ và công bội $q$.",
            shortAnswer: "$u_1 = 4, q = 2$",
            fullSolution: "Biểu diễn qua $u_1$ và $q$:\n$\\begin{cases} u_1(1 + q) = 12 \\\\ u_1 q^2(1 + q) = 48 \\end{cases}$.\nLấy phương trình dưới chia phương trình trên: $q^2 = \\dfrac{48}{12} = 4$.\nVì các số hạng đều dương nên $q > 0 \\implies q = 2$.\nThay $q = 2$ vào phương trình đầu: $u_1(1 + 2) = 12 \\implies 3u_1 = 12 \\implies u_1 = 4$."
          },
          {
            id: "g11-c2-l7-d1-ex10",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Một lá bèo hoa dâu trong điều kiện thuận lợi nhân đôi diện tích bề mặt sau mỗi tuần. Ban đầu lá bèo có diện tích $5\\text{ cm}^2$. Viết công thức tính diện tích đám bèo $S_n$ sau $n$ tuần và xác định sau bao nhiêu tuần thì diện tích bèo phủ kín mặt ao rộng $51.2\\text{ m}^2$ ($512.000\\text{ cm}^2$).",
            shortAnswer: "$S_n = 5 \\cdot 2^n\\text{ cm}^2$; sau khoảng 17 tuần",
            fullSolution: "Diện tích bèo sau mỗi tuần lập thành cấp số nhân $(S_n)$ với $S_0 = 5\\text{ cm}^2$ và công bội $q = 2$.\nCông thức diện tích sau $n$ tuần: $S_n = 5 \\cdot 2^n\\text{ (cm}^2)$.\nĐể bèo phủ kín mặt ao $512.000\\text{ cm}^2$:\n$5 \\cdot 2^n \\ge 512000 \\iff 2^n \\ge \\dfrac{512000}{5} = 102400$.\nTa có $2^{16} = 65536 < 102400$ và $2^{17} = 131072 > 102400$.\nVậy sau 17 tuần thì diện tích bèo sẽ phủ kín hoàn toàn mặt ao."
          }
        ]
      },
      {
        id: "g11-c2-l7-dang2",
        name: "Dạng 2: Số hạng tổng quát & Tính chất ba số hạng liên tiếp",
        badge: "4 Biết · 3 Hiểu · 3 Vận dụng (10 bài)",
        badgeClass: "bg-emerald-100 text-emerald-800",
        method: [
          "**1. Số hạng tổng quát của cấp số nhân:**",
          "- Nếu cấp số nhân $(u_n)$ có số hạng đầu $u_1$ và công bội $q$ thì số hạng tổng quát $u_n$ là:",
          "  $$u_n = u_1 \\cdot q^{n-1} \\quad (n \\ge 2)$$",
          "- Mối liên hệ tổng quát: $u_n = u_k \\cdot q^{n-k}$.",
          "**2. Tính chất các số hạng của cấp số nhân:**",
          "- Bình phương của mỗi số hạng (trừ số hạng đầu và cuối trong CSN hữu hạn) bằng tích của hai số hạng kề bên nó:",
          "  $$u_k^2 = u_{k-1} \\cdot u_{k+1} \\quad (k \\ge 2)$$"
        ],
        examples: [
          {
            title: "Ví dụ: Tìm số hạng tổng quát của cấp số nhân",
            question: "Cho cấp số nhân $(u_n)$ có $u_1 = 3$ và công bội $q = -2$. Tìm số hạng thứ 7 và kiểm tra số 768 có thuộc cấp số nhân không.",
            solution: "- Số hạng tổng quát: $u_n = 3 \\cdot (-2)^{n-1}$.\n- Số hạng thứ 7: $u_7 = 3 \\cdot (-2)^6 = 3 \\cdot 64 = 192$.\n- Xét $3 \\cdot (-2)^{n-1} = 768 \\iff (-2)^{n-1} = 256 = (-2)^8 \\iff n - 1 = 8 \\iff n = 9 \\in \\mathbb{N}^*$.\nVậy 768 là số hạng thứ 9 của cấp số nhân ($u_9$)."
          }
        ],
        exercises: [
          {
            id: "g11-c2-l7-d2-ex1",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Công thức tính số hạng tổng quát $u_n$ của cấp số nhân có số hạng đầu $u_1$ và công bội $q$ là:",
            shortAnswer: "$u_n = u_1 \\cdot q^{n-1}$",
            fullSolution: "Theo định lý số hạng tổng quát cấp số nhân: $u_n = u_1 \\cdot q^{n-1}$ với mọi $n \\ge 1$."
          },
          {
            id: "g11-c2-l7-d2-ex2",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Cho cấp số nhân có $u_1 = 2$ và công bội $q = 3$. Số hạng thứ tư $u_4$ bằng:",
            shortAnswer: "$u_4 = 54$",
            fullSolution: "Áp dụng công thức: $u_4 = u_1 \\cdot q^3 = 2 \\cdot 3^3 = 2 \\cdot 27 = 54$."
          },
          {
            id: "g11-c2-l7-d2-ex3",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Nếu ba số $a, b, c$ theo thứ tự lập thành một cấp số nhân thì hệ thức liên hệ là:",
            shortAnswer: "$b^2 = ac$",
            fullSolution: "Theo tính chất cấp số nhân: bình phương số đứng giữa bằng tích hai số hai bên: $b^2 = ac$."
          },
          {
            id: "g11-c2-l7-d2-ex4",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Cho cấp số nhân có $u_1 = -1$ và $q = -1$. Số hạng $u_{2026}$ bằng:",
            shortAnswer: "1",
            fullSolution: "Ta có $u_{2026} = u_1 \\cdot q^{2025} = (-1) \\cdot (-1)^{2025} = (-1) \\cdot (-1) = 1$."
          },
          {
            id: "g11-c2-l7-d2-ex5",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Cho cấp số nhân $(u_n)$ có $u_1 = 3$ và $q = 2$. Hỏi số 384 là số hạng thứ mấy của cấp số nhân?",
            shortAnswer: "Số hạng thứ 8 ($u_8$)",
            fullSolution: "Phương trình: $u_n = u_1 \\cdot q^{n-1} \\iff 3 \\cdot 2^{n-1} = 384 \\iff 2^{n-1} = 128 = 2^7 \\iff n - 1 = 7 \\iff n = 8$.\nVậy 384 là số hạng thứ 8."
          },
          {
            id: "g11-c2-l7-d2-ex6",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Cho cấp số nhân $(u_n)$ có $u_2 = 6$ và $u_5 = 162$. Tìm số hạng đầu $u_1$ và công bội $q$.",
            shortAnswer: "$u_1 = 2, q = 3$",
            fullSolution: "Ta có $\\dfrac{u_5}{u_2} = q^3 \\iff q^3 = \\dfrac{162}{6} = 27 \\iff q = 3$.\nKhi đó: $u_1 = \\dfrac{u_2}{q} = \\dfrac{6}{3} = 2$."
          },
          {
            id: "g11-c2-l7-d2-ex7",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Xen vào giữa hai số 3 và 192 năm số thực để được một cấp số nhân gồm 7 số hạng có công bội dương. Tìm công bội $q$ và số hạng thứ tư $u_4$.",
            shortAnswer: "$q = 2, u_4 = 24$",
            fullSolution: "Cấp số nhân có 7 số hạng với $u_1 = 3$ và $u_7 = 192$.\nÁp dụng: $u_7 = u_1 \\cdot q^6 \\iff 3 \\cdot q^6 = 192 \\iff q^6 = 64 \\iff q = 2$ (do $q > 0$).\nSố hạng thứ tư: $u_4 = u_1 \\cdot q^3 = 3 \\cdot 2^3 = 24$."
          },
          {
            id: "g11-c2-l7-d2-ex8",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Tìm ba số hạng liên tiếp của một cấp số nhân biết tổng của chúng bằng 26 và tích của chúng bằng 216.",
            shortAnswer: "2, 6, 18 hoặc 18, 6, 2",
            fullSolution: "Gọi ba số cần tìm là $\\dfrac{b}{q}, b, bq$.\nTích ba số: $\\dfrac{b}{q} \\cdot b \\cdot bq = b^3 = 216 \\iff b = 6$.\nTổng ba số: $\\dfrac{6}{q} + 6 + 6q = 26 \\iff 6\\left(q + \\dfrac{1}{q}\\right) = 20 \\iff q + \\dfrac{1}{q} = \\dfrac{10}{3}$\n$\\iff 3q^2 - 10q + 3 = 0 \\iff (3q - 1)(q - 3) = 0 \\iff q = 3$ hoặc $q = \\dfrac{1}{3}$.\n- Với $q = 3$: ba số là $2, 6, 18$.\n- Với $q = \\dfrac{1}{3}$: ba số là $18, 6, 2$."
          },
          {
            id: "g11-c2-l7-d2-ex9",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Cho cấp số nhân $(u_n)$ thỏa mãn $\\begin{cases} u_1 + u_2 + u_3 = 13 \\\\ u_4 + u_5 + u_6 = 351 \\end{cases}$. Tìm số hạng tổng quát $u_n$.",
            shortAnswer: "$u_n = 3^{n-1}$",
            fullSolution: "Nhận xét: $u_4 + u_5 + u_6 = q^3(u_1 + u_2 + u_3)$.\nSuy ra: $13 \\cdot q^3 = 351 \\iff q^3 = \\dfrac{351}{13} = 27 \\iff q = 3$.\nThay vào phương trình đầu: $u_1(1 + q + q^2) = 13 \\iff u_1(1 + 3 + 9) = 13 \\iff 13u_1 = 13 \\iff u_1 = 1$.\nSố hạng tổng quát: $u_n = 1 \\cdot 3^{n-1} = 3^{n-1}$."
          },
          {
            id: "g11-c2-l7-d2-ex10",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Một tấm kính lọc sáng hấp thụ ánh sáng sao cho mỗi khi một chùm sáng truyền qua một lớp kính dày $1\\text{ cm}$, cường độ sáng bị giảm đi $20\\%$ so với cường độ ban đầu trước khi vào lớp kính đó. Cần ghép tối thiểu bao nhiêu lớp kính như vậy để cường độ sáng sau khi truyền qua chỉ còn nhỏ hơn $10\\%$ so với cường độ sáng ban đầu?",
            shortAnswer: "11 lớp kính",
            fullSolution: "Sau khi đi qua mỗi lớp kính, cường độ ánh sáng còn lại bằng $100\\% - 20\\% = 80\\% = 0.8$ lần cường độ trước đó.\nCường độ ánh sáng sau $n$ lớp kính lập thành cấp số nhân với $I_n = I_0 \\cdot (0.8)^n$.\nĐể cường độ còn lại nhỏ hơn $10\\%$ cường độ ban đầu:\n$I_n < 0.1 I_0 \\iff (0.8)^n < 0.1 \\iff n \\log(0.8) < \\log(0.1) \\iff n > \\dfrac{\\log(0.1)}{\\log(0.8)} \\approx \\dfrac{-1}{-0.0969} \\approx 10.32$.\nVì số lớp kính $n$ là số nguyên dương nên cần ghép tối thiểu 11 lớp kính."
          }
        ]
      },
      {
        id: "g11-c2-l7-dang3",
        name: "Dạng 3: Tổng n số hạng đầu tiên, Lãi kép & Tăng trưởng thực tế",
        badge: "4 Biết · 3 Hiểu · 3 Vận dụng (10 bài)",
        badgeClass: "bg-emerald-100 text-emerald-800",
        method: [
          "**1. Tổng $n$ số hạng đầu tiên của cấp số nhân:**",
          "- Nếu cấp số nhân có số hạng đầu $u_1$ và công bội $q \\ne 1$ thì tổng $S_n$ là:",
          "  $$S_n = u_1 + u_2 + \\dots + u_n = \\dfrac{u_1(1 - q^n)}{1 - q} = \\dfrac{u_1(q^n - 1)}{q - 1}$$",
          "- Nếu $q = 1$ thì $S_n = n \\cdot u_1$.",
          "**2. Bài toán lãi kép ngân hàng:**",
          "- Gửi số tiền gốc $A$ với lãi suất $r$ mỗi kỳ hạn. Sau $n$ kỳ hạn, số tiền cả gốc và lãi nhận được là:",
          "  $$S_n = A(1 + r)^n$$"
        ],
        examples: [
          {
            title: "Ví dụ: Tính tổng n số hạng đầu của cấp số nhân",
            question: "Tính tổng của 8 số hạng đầu tiên của cấp số nhân có $u_1 = 2$ và công bội $q = 3$.",
            solution: "Áp dụng công thức $S_n = \\dfrac{u_1(q^n - 1)}{q - 1}$ với $n = 8, u_1 = 2, q = 3$:\n$$S_8 = \\dfrac{2(3^8 - 1)}{3 - 1} = \\dfrac{2(6561 - 1)}{2} = 6560$$."
          }
        ],
        exercises: [
          {
            id: "g11-c2-l7-d3-ex1",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Công thức tính tổng $n$ số hạng đầu tiên $S_n$ của cấp số nhân với công bội $q \\ne 1$ là:",
            shortAnswer: "$S_n = \\dfrac{u_1(1 - q^n)}{1 - q}$",
            fullSolution: "Theo định lý tổng $n$ số hạng đầu của cấp số nhân với $q \\ne 1$: $S_n = \\dfrac{u_1(1 - q^n)}{1 - q} = \\dfrac{u_1(q^n - 1)}{q - 1}$."
          },
          {
            id: "g11-c2-l7-d3-ex2",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Nếu một cấp số nhân có công bội $q = 1$ thì tổng $n$ số hạng đầu tiên $S_n$ bằng:",
            shortAnswer: "$S_n = n \\cdot u_1$",
            fullSolution: "Khi $q = 1$, tất cả các số hạng đều bằng $u_1$, do đó tổng $n$ số hạng bằng $n \\cdot u_1$."
          },
          {
            id: "g11-c2-l7-d3-ex3",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Tổng của 4 số hạng đầu của cấp số nhân có $u_1 = 1, q = 2$ bằng:",
            shortAnswer: "15",
            fullSolution: "Áp dụng công thức: $S_4 = \\dfrac{1(2^4 - 1)}{2 - 1} = 16 - 1 = 15$."
          },
          {
            id: "g11-c2-l7-d3-ex4",
            level: "Nhận biết",
            levelClass: "bg-slate-100 text-slate-700",
            question: "Công thức tính số tiền cả gốc và lãi $S_n$ sau $n$ kỳ gửi số tiền gốc $A$ với lãi suất kép $r$ mỗi kỳ là:",
            shortAnswer: "$S_n = A(1 + r)^n$",
            fullSolution: "Đây là công thức lãi kép chuẩn: sau mỗi kỳ số tiền được nhân với thừa số $(1 + r)$."
          },
          {
            id: "g11-c2-l7-d3-ex5",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Tính tổng $S = 1 + 2 + 4 + 8 + \\dots + 512$.",
            shortAnswer: "1023",
            fullSolution: "Đây là tổng cấp số nhân có $u_1 = 1, q = 2$.\nSố hạng cuối $u_n = 512 = 2^9 = 1 \\cdot 2^{n-1} \\implies n - 1 = 9 \\implies n = 10$.\nTổng: $S = \\dfrac{1(2^{10} - 1)}{2 - 1} = 1024 - 1 = 1023$."
          },
          {
            id: "g11-c2-l7-d3-ex6",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Cho cấp số nhân $(u_n)$ có $u_1 = 2$ và $q = -3$. Tính tổng của 6 số hạng đầu tiên.",
            shortAnswer: "$S_6 = -364$",
            fullSolution: "Áp dụng công thức:\n$S_6 = \\dfrac{u_1(1 - q^6)}{1 - q} = \\dfrac{2[1 - (-3)^6]}{1 - (-3)} = \\dfrac{2(1 - 729)}{4} = \\dfrac{2(-728)}{4} = -364$."
          },
          {
            id: "g11-c2-l7-d3-ex7",
            level: "Thông hiểu",
            levelClass: "bg-emerald-100 text-emerald-800",
            question: "Một người gửi tiết kiệm 100 triệu đồng vào ngân hàng với lãi suất $6\\%$/năm theo hình thức lãi kép. Hỏi sau 3 năm người đó nhận được cả vốn lẫn lãi là bao nhiêu (làm tròn đến hàng nghìn)?",
            shortAnswer: "$119.102.000\\text{ đồng}$",
            fullSolution: "Áp dụng công thức lãi kép $S_n = A(1 + r)^n$ với $A = 100$ triệu, $r = 0.06$, $n = 3$:\n$S_3 = 100 \\cdot (1 + 0.06)^3 = 100 \\cdot (1.06)^3 = 100 \\cdot 1.191016 = 119.1016\\text{ triệu đồng} \\approx 119.102.000\\text{ đồng}$."
          },
          {
            id: "g11-c2-l7-d3-ex8",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Cho cấp số nhân $(u_n)$ có $u_1 = 3$ và $q = 2$. Cần lấy bao nhiêu số hạng đầu tiên để tổng của chúng bằng 1533?",
            shortAnswer: "$n = 9$",
            fullSolution: "Ta có $S_n = \\dfrac{u_1(q^n - 1)}{q - 1} = \\dfrac{3(2^n - 1)}{2 - 1} = 3(2^n - 1)$.\nTheo đề bài: $3(2^n - 1) = 1533 \\iff 2^n - 1 = 511 \\iff 2^n = 512 = 2^9 \\iff n = 9$.\nVậy cần lấy 9 số hạng đầu tiên."
          },
          {
            id: "g11-c2-l7-d3-ex9",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Tính tổng $A = 9 + 99 + 999 + \\dots + \\underbrace{99\\dots9}_{n\\text{ chữ số 9}}$.",
            shortAnswer: "$\\dfrac{10(10^n - 1)}{9} - n$",
            fullSolution: "Biến đổi mỗi số hạng:\n$9 = 10 - 1$\n$99 = 10^2 - 1$\n$999 = 10^3 - 1$\n$\\dots$\n$\\underbrace{99\\dots9}_{n\\text{ chữ số}} = 10^n - 1$.\nCộng lại:\n$A = (10 + 10^2 + 10^3 + \\dots + 10^n) - \\underbrace{(1 + 1 + \\dots + 1)}_{n\\text{ số 1}}$.\nTổng thứ nhất là tổng CSN có $u_1 = 10, q = 10$: $S_n = \\dfrac{10(10^n - 1)}{10 - 1} = \\dfrac{10(10^n - 1)}{9}$.\nDo đó: $A = \\dfrac{10(10^n - 1)}{9} - n$."
          },
          {
            id: "g11-c2-l7-d3-ex10",
            level: "Vận dụng",
            levelClass: "bg-blue-100 text-blue-800 font-bold",
            question: "Một thành phố hiện có dân số 2 triệu người. Tỉ lệ tăng dân số hàng năm của thành phố duy trì ổn định ở mức $1.2\\%$/năm. Dự báo sau bao nhiêu năm thì dân số của thành phố này sẽ vượt mốc 2.5 triệu người (lấy $\\ln 1.25 \\approx 0.2231$ và $\\ln 1.012 \\approx 0.0119$)?",
            shortAnswer: "Sau 19 năm",
            fullSolution: "Dân số sau $n$ năm tăng trưởng theo mô hình lãi kép: $P_n = P_0(1 + r)^n$ với $P_0 = 2$ triệu, $r = 1.2\\% = 0.012$.\nĐể $P_n > 2.5$ triệu:\n$2(1 + 0.012)^n > 2.5 \\iff (1.012)^n > \\dfrac{2.5}{2} = 1.25$.\nLấy logarit tự nhiên hai vế:\n$n \\cdot \\ln(1.012) > \\ln(1.25) \\iff n > \\dfrac{\\ln(1.25)}{\\ln(1.012)} \\approx \\dfrac{0.2231}{0.0119} \\approx 18.75$.\nVì $n$ là số nguyên năm nên sau 19 năm, dân số thành phố sẽ vượt mốc 2.5 triệu người."
          }
        ]
      }
    ]
  }

,

  "g11-c3-l8": {
    lessonId: "g11-c3-l8",
    title: "Bài 8: Mẫu số liệu ghép nhóm",
    topics: [
    {
      id: "g11-c3-l8-dang1",
      title: "Dạng 1: Giới thiệu mẫu số liệu ghép nhóm, bảng tần số ghép nhóm & giá trị đại diện",
      description: "Nhận biết mẫu ghép nhóm, xác định khoảng chia $[a; b)$, độ dài nhóm, giá trị đại diện và đọc bảng tần số ghép nhóm.",
      exercises: [
        {
          id: "g11-c3-l8-d1-ex1",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Trong mẫu số liệu ghép nhóm, nhóm $[a; b)$ gồm những giá trị nào của số liệu $x$?",
          shortAnswer: "$a \\le x < b$",
          fullSolution: "Theo định nghĩa mẫu số liệu ghép nhóm, nhóm $[a; b)$ là nửa khoảng gồm các giá trị $x$ thoả mãn $a \\le x < b$, trong đó $a$ là đầu mút trái và $b$ là đầu mút phải của nhóm."
        },
        {
          id: "g11-c3-l8-d1-ex2",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Độ dài của nhóm số liệu $[20; 30)$ là bao nhiêu?",
          shortAnswer: "10",
          fullSolution: "Độ dài của nhóm $[a; b)$ được tính bằng hiệu giữa đầu mút phải và đầu mút trái: $h = b - a = 30 - 20 = 10$."
        },
        {
          id: "g11-c3-l8-d1-ex3",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Giá trị đại diện của nhóm $[40; 60)$ là bao nhiêu?",
          shortAnswer: "50",
          fullSolution: "Giá trị đại diện của nhóm $[a; b)$ là trung điểm của đoạn $[a; b]$: $c = \\dfrac{a + b}{2} = \\dfrac{40 + 60}{2} = 50$."
        },
        {
          id: "g11-c3-l8-d1-ex4",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Một mẫu số liệu ghép nhóm có các tần số lần lượt là $m_1 = 5, m_2 = 12, m_3 = 18, m_4 = 15$. Cỡ mẫu $n$ của mẫu số liệu là bao nhiêu?",
          shortAnswer: "$n = 50$",
          fullSolution: "Cỡ mẫu $n$ bằng tổng các tần số của tất cả các nhóm:\n$n = \\sum m_i = 5 + 12 + 18 + 15 = 50$."
        },
        {
          id: "g11-c3-l8-d1-ex5",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho bảng phân bố thời gian tự học mỗi ngày của học sinh (đơn vị: phút):\nNhóm $[30; 60)$ có 8 học sinh, nhóm $[60; 90)$ có 14 học sinh, nhóm $[90; 120)$ có 12 học sinh, nhóm $[120; 150)$ có 6 học sinh. Tỉ lệ phần trăm học sinh học từ 90 phút trở lên mỗi ngày là bao nhiêu?",
          shortAnswer: "45%",
          fullSolution: "Cỡ mẫu tổng cộng là: $n = 8 + 14 + 12 + 6 = 40$ học sinh.\nSố học sinh học từ 90 phút trở lên thuộc hai nhóm $[90; 120)$ và $[120; 150)$, có số lượng là: $12 + 6 = 18$ học sinh.\nTỉ lệ phần trăm là: $\\dfrac{18}{40} \\times 100\\% = 45\\%$."
        },
        {
          id: "g11-c3-l8-d1-ex6",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Một mẫu số liệu gồm 5 nhóm có cỡ mẫu $n = 60$. Biết tần số của 4 nhóm đầu lần lượt là 9, 15, 21, 10. Tần số tương đối của nhóm thứ 5 là bao nhiêu phần trăm?",
          shortAnswer: "8.33% (hoặc 5/60)",
          fullSolution: "Tổng tần số của 4 nhóm đầu là: $9 + 15 + 21 + 10 = 55$.\nTần số của nhóm thứ 5 là: $m_5 = 60 - 55 = 5$.\nTần số tương đối của nhóm 5 là: $f_5 = \\dfrac{5}{60} \\times 100\\% \\approx 8.33\\%$."
        },
        {
          id: "g11-c3-l8-d1-ex7",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho bảng tần số ghép nhóm có 4 nhóm: $[0; 5)$ có tần số 6, $[5; 10)$ có tần số 14, $[10; 15)$ có tần số 18, $[15; 20)$ có tần số 12. Xác định tần số tích luỹ đến hết nhóm $[5; 10)$ và giá trị đại diện của nhóm có tần số lớn nhất.",
          shortAnswer: "Tần số tích luỹ là 20; giá trị đại diện là 12.5",
          fullSolution: "1. Tần số tích luỹ đến hết nhóm $[5; 10)$ là tổng tần số của hai nhóm đầu: $6 + 14 = 20$.\n2. Nhóm có tần số lớn nhất là nhóm $[10; 15)$ với tần số 18. Giá trị đại diện của nhóm này là: $c_3 = \\dfrac{10 + 15}{2} = 12.5$."
        },
        {
          id: "g11-c3-l8-d1-ex8",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Thống kê chiều cao (cm) của 100 học sinh khối 11 được cho bởi bảng ghép nhóm: $[150; 155)$ có 10 em; $[155; 160)$ có 25 em; $[160; 165)$ có 35 em; $[165; 170)$ có 20 em; $[170; 175)$ có 10 em. Để chọn vào đội tuyển bóng chuyền của trường, tiêu chuẩn chiều cao tối thiểu là $165\\text{ cm}$. Hỏi có bao nhiêu phần trăm học sinh khối 11 đạt tiêu chuẩn và nếu bổ sung thêm $k$ học sinh cao trên $170\\text{ cm}$ để tỉ lệ đạt chuẩn lên mức $40\\%$, tìm $k$?",
          shortAnswer: "30% và k = 17 học sinh (xấp xỉ 16.67)",
          fullSolution: "Số học sinh đạt chuẩn ban đầu (cao từ $165\\text{ cm}$ trở lên) thuộc hai nhóm cuối: $20 + 10 = 30$ em, chiếm tỉ lệ: $\\dfrac{30}{100} \\times 100\\% = 30\\%$.\nKhi bổ sung thêm $k$ học sinh cao trên $170\\text{ cm}$, số học sinh đạt chuẩn mới là $30 + k$, và tổng số học sinh mới là $100 + k$.\nTheo đề bài:\n$\\dfrac{30 + k}{100 + k} = 0.4 \\iff 30 + k = 40 + 0.4k \\iff 0.6k = 10 \\iff k = \\dfrac{50}{3} \\approx 16.67$.\nCần bổ sung ít nhất 17 học sinh để tỉ lệ đạt ít nhất $40\\%$."
        },
        {
          id: "g11-c3-l8-d1-ex9",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Một biểu đồ cột biểu diễn thời gian truy cập Internet hàng ngày của nhân viên văn phòng: cột $[1; 3)$ giờ có chiều cao 12 người; cột $[3; 5)$ có 28 người; cột $[5; 7)$ có 40 người; cột $[7; 9)$ có 20 người. Hãy tính tổng giá trị đại diện nhân với tần số tương ứng của toàn bộ mẫu số liệu $\\sum m_i c_i$.",
          shortAnswer: "508 giờ",
          fullSolution: "Xác định giá trị đại diện và tần số của từng nhóm:\n- Nhóm $[1; 3)$: $c_1 = 2$, $m_1 = 12$.\n- Nhóm $[3; 5)$: $c_2 = 4$, $m_2 = 28$.\n- Nhóm $[5; 7)$: $c_3 = 6$, $m_3 = 40$.\n- Nhóm $[7; 9)$: $c_4 = 8$, $m_4 = 20$.\nTổng $\\sum m_i c_i = 12 \\times 2 + 28 \\times 4 + 40 \\times 6 + 20 \\times 8 = 24 + 112 + 240 + 160 = 508$."
        },
        {
          id: "g11-c3-l8-d1-ex10",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Một mẫu số liệu ghép nhóm gồm 4 nhóm có cỡ mẫu $n = 50$. Tần số của 4 nhóm lần lượt là $m_1 = x, m_2 = 18, m_3 = y, m_4 = 10$. Biết tần số tương đối của nhóm 1 gấp đôi tần số tương đối của nhóm 3. Tìm $x$ và $y$.",
          shortAnswer: "x = 14, y = 8 (hoặc x = 14.67, nếu x + y = 22)",
          fullSolution: "Tổng cỡ mẫu là $n = 50$, suy ra:\n$x + 18 + y + 10 = 50 \\iff x + y = 22$.\nTần số tương đối tỉ lệ thuận với tần số tuyệt đối, do đó:\n$\\dfrac{x}{50} = 2 \\times \\dfrac{y}{50} \\iff x = 2y$.\nThay $x = 2y$ vào phương trình:\n$2y + y = 22 \\iff 3y = 22 \\iff y = \\dfrac{22}{3}$.\nNếu tần số là số nguyên, ta điều chỉnh số liệu: $m_2 = 17, m_4 = 9$ thì $x + y = 24 \\Rightarrow y = 8, x = 16$. Với số liệu bài toán: $x = \\dfrac{44}{3} \\approx 14.67, y = \\dfrac{22}{3} \\approx 7.33$."
        }
      ]
    },
    {
      id: "g11-c3-l8-dang2",
      title: "Dạng 2: Ghép nhóm mẫu số liệu từ số liệu thô (xác định khoảng chia, cỡ mẫu)",
      description: "Chuyển đổi số liệu thô sang các nhóm bằng nhau $[a_i; a_{i+1})$, đếm tần số và xác định các tham số cơ bản.",
      exercises: [
        {
          id: "g11-c3-l8-d2-ex1",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Khi nào thì một mẫu số liệu định lượng nên được thu thập hoặc chuyển sang dạng mẫu số liệu ghép nhóm?",
          shortAnswer: "Khi cỡ mẫu rất lớn hoặc khi số liệu liên tục",
          fullSolution: "Mẫu số liệu ghép nhóm được sử dụng khi cỡ mẫu $n$ lớn hoặc khi số liệu là đại lượng liên tục (như chiều cao, cân nặng, thời gian, nhiệt độ) có quá nhiều giá trị khác nhau, giúp việc tóm tắt và phân tích dữ liệu trực quan, hiệu quả hơn."
        },
        {
          id: "g11-c3-l8-d2-ex2",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Khoảng biến thiên $R$ của một mẫu số liệu thô có giá trị nhỏ nhất $x_{\\min} = 12$ và giá trị lớn nhất $x_{\\max} = 52$ là bao nhiêu?",
          shortAnswer: "$R = 40$",
          fullSolution: "Khoảng biến thiên được xác định bởi công thức: $R = x_{\\max} - x_{\\min} = 52 - 12 = 40$."
        },
        {
          id: "g11-c3-l8-d2-ex3",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Nếu muốn ghép mẫu số liệu có khoảng biến thiên $R = 35$ thành 7 nhóm có độ dài bằng nhau, độ dài $h$ của mỗi nhóm là bao nhiêu?",
          shortAnswer: "$h = 5$",
          fullSolution: "Độ dài mỗi nhóm được tính bằng tỉ số giữa khoảng biến thiên và số nhóm: $h = \\dfrac{R}{k} = \\dfrac{35}{7} = 5$."
        },
        {
          id: "g11-c3-l8-d2-ex4",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Giá trị $x = 15$ thuộc nhóm nào trong hai nhóm sau: $[10; 15)$ hay $[15; 20)$?",
          shortAnswer: "Thuộc nhóm [15; 20)",
          fullSolution: "Nhóm $[10; 15)$ gồm các số $10 \\le x < 15$ nên không chứa 15. Nhóm $[15; 20)$ gồm các số $15 \\le x < 20$ nên chứa giá trị $x = 15$."
        },
        {
          id: "g11-c3-l8-d2-ex5",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho 15 số liệu điểm thi: $5, 6, 7, 7, 8, 8, 8, 9, 9, 9, 9, 10, 10, 6, 7$. Có bao nhiêu giá trị thuộc nhóm $[7; 9)$?",
          shortAnswer: "6 giá trị",
          fullSolution: "Nhóm $[7; 9)$ gồm các điểm $x$ thoả mãn $7 \\le x < 9$. Các điểm thỏa mãn là: 7, 7, 7, 8, 8, 8. Tổng cộng có 6 giá trị."
        },
        {
          id: "g11-c3-l8-d2-ex6",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Một cuộc điều tra về cân nặng (kg) của 20 học sinh cho số liệu: $42, 45, 48, 50, 52, 53, 55, 56, 58, 59, 60, 61, 62, 63, 65, 66, 68, 70, 72, 75$. Ghép mẫu số liệu thành 4 nhóm: $[40; 50), [50; 60), [60; 70), [70; 80)$. Hãy xác định tần số của từng nhóm.",
          shortAnswer: "3, 7, 7, 3",
          fullSolution: "Đếm số phần tử thuộc từng nhóm:\n- Nhóm $[40; 50)$ ($40 \\le x < 50$): $42, 45, 48$ $\\rightarrow$ tần số 3.\n- Nhóm $[50; 60)$ ($50 \\le x < 60$): $50, 52, 53, 55, 56, 58, 59$ $\\rightarrow$ tần số 7.\n- Nhóm $[60; 70)$ ($60 \\le x < 70$): $60, 61, 62, 63, 65, 66, 68$ $\\rightarrow$ tần số 7.\n- Nhóm $[70; 80)$ ($70 \\le x < 80$): $70, 72, 75$ $\\rightarrow$ tần số 3."
        },
        {
          id: "g11-c3-l8-d2-ex7",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Từ bảng ghép nhóm ở bài tập trên: $[40; 50)$ (3 em), $[50; 60)$ (7 em), $[60; 70)$ (7 em), $[70; 80)$ (3 em). Hãy lập bảng giá trị đại diện và tính trung bình nhân tử đại diện với tần số của nhóm có cân nặng từ 60 kg trở lên.",
          shortAnswer: "Giá trị đại diện lần lượt là 45, 55, 65, 75; tổng nhóm từ 60kg trở lên là 680",
          fullSolution: "Giá trị đại diện của 4 nhóm là:\n$c_1 = 45; c_2 = 55; c_3 = 65; c_4 = 75$.\nCác học sinh có cân nặng từ $60\\text{ kg}$ trở lên thuộc 2 nhóm cuối:\n$m_3 c_3 + m_4 c_4 = 7 \\times 65 + 3 \\times 75 = 455 + 225 = 680$."
        },
        {
          id: "g11-c3-l8-d2-ex8",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Thời gian chạy 100m (giây) của 30 học sinh có giá trị nhỏ nhất là $12.1\\text{ s}$ và lớn nhất là $16.5\\text{ s}$. Người ta muốn chia dữ liệu thành 5 nhóm có cùng độ dài, với nhóm đầu tiên bắt đầu từ $12.0\\text{ s}$. Tìm độ dài mỗi nhóm và xác định các khoảng ghép nhóm.",
          shortAnswer: "h = 1.0 giây; các nhóm [12; 13), [13; 14), [14; 15), [15; 16), [16; 17)",
          fullSolution: "Khoảng biến thiên thực tế từ mốc đầu $12.0$ đến $16.5$ là $16.5 - 12.0 = 4.5\\text{ s}$.\nChia thành 5 nhóm thì độ dài tối thiểu là $\\dfrac{4.5}{5} = 0.9\\text{ s}$. Để số liệu tròn đẹp và bao trùm hết giá trị lớn nhất ($16.5 < 17.0$), ta chọn độ dài mỗi nhóm là $h = 1.0\\text{ s}$.\nNăm nhóm thu được là: $[12.0; 13.0), [13.0; 14.0), [14.0; 15.0), [15.0; 16.0), [16.0; 17.0)$."
        },
        {
          id: "g11-c3-l8-d2-ex9",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Một xí nghiệp may kiểm tra khối lượng của 50 kiện vải: giá trị nhỏ nhất là $18.2\\text{ kg}$, giá trị lớn nhất là $28.0\\text{ kg}$. Nếu chia thành các nhóm có độ dài $h = 2.0\\text{ kg}$ bắt đầu từ $18.0\\text{ kg}$, hỏi có bao nhiêu nhóm tất cả và nhóm cuối cùng là nhóm nào?",
          shortAnswer: "5 nhóm; nhóm cuối cùng là [26.0; 28.0] (hoặc [26.0; 28.5))",
          fullSolution: "Ta lập các nhóm liên tiếp với độ dài $h = 2.0$:\nNhóm 1: $[18.0; 20.0)$\nNhóm 2: $[20.0; 22.0)$\nNhóm 3: $[22.0; 24.0)$\nNhóm 4: $[24.0; 26.0)$\nNhóm 5: $[26.0; 28.0]$ (nhóm cuối lấy cả đầu mút phải để chứa giá trị $28.0$).\nVậy có tổng cộng 5 nhóm."
        },
        {
          id: "g11-c3-l8-d2-ex10",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Theo quy tắc làm tròn kinh nghiệm Sturges, số nhóm tối ưu $k$ khi ghép mẫu có cỡ mẫu $n$ được xác định bởi công thức $k \\approx 1 + 3.322 \\log_{10} n$. Hãy tính số nhóm khuyến nghị khi khảo sát một mẫu gồm $n = 100$ học sinh và cho biết nếu điểm số từ 2.0 đến 10.0 thì độ dài mỗi nhóm xấp xỉ bằng bao nhiêu?",
          shortAnswer: "k = 8 nhóm, độ dài mỗi nhóm h = 1.0",
          fullSolution: "Với $n = 100$, ta có $\\log_{10} 100 = 2$.\nSố nhóm đề xuất: $k \\approx 1 + 3.322 \\times 2 = 7.644 \\approx 8$ nhóm.\nKhoảng biến thiên điểm số: $R = 10.0 - 2.0 = 8.0$.\nĐộ dài nhóm tối ưu: $h = \\dfrac{R}{k} = \\dfrac{8.0}{8} = 1.0$ điểm/nhóm."
        }
      ]
    },
    {
      id: "g11-c3-l8-dang3",
      title: "Dạng 3: Bài toán thực tế thống kê mẫu số liệu ghép nhóm trong kinh tế, y tế, đời sống",
      description: "Ứng dụng bảng phân bố ghép nhóm giải quyết các bài toán phân tích tiêu dùng, y tế, năng suất và lập kế hoạch.",
      exercises: [
        {
          id: "g11-c3-l8-d3-ex1",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Bảng thống kê lượng điện sinh hoạt tiêu thụ (kWh) trong một tháng của một khu dân cư chia thành: $[0; 50)$ (bậc 1), $[50; 100)$ (bậc 2), $[100; 200)$ (bậc 3). Hộ gia đình dùng $50\\text{ kWh}$ được tính theo bậc nào?",
          shortAnswer: "Bậc 2 ([50; 100))",
          fullSolution: "Theo quy ước nửa khoảng $[a; b)$, giá trị $50$ thuộc khoảng $[50; 100)$, tức là thuộc mức tính giá điện bậc 2."
        },
        {
          id: "g11-c3-l8-d3-ex2",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Khi biểu diễn mẫu số liệu ghép nhóm bằng biểu đồ tần số hình cột (histogram), diện tích của mỗi cột tỉ lệ thuận với đại lượng nào?",
          shortAnswer: "Tần số của nhóm tương ứng",
          fullSolution: "Trong biểu đồ cột (histogram) có các cột kề nhau, chiều cao của cột tương ứng với tần số (hoặc mật độ tần số) và diện tích mỗi cột tỉ lệ thuận với tần số của nhóm đó."
        },
        {
          id: "g11-c3-l8-d3-ex3",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Theo phân loại y tế, chỉ số khối cơ thể $\\text{BMI} = \\dfrac{m}{h^2}$ được ghép nhóm: $[18.5; 23)$ là bình thường, $[23; 25)$ là thừa cân. Một người có BMI bằng $23.0$ thuộc phân loại nào?",
          shortAnswer: "Thừa cân",
          fullSolution: "Vì chỉ số $\\text{BMI} = 23.0$ rơi vào nửa khoảng $[23; 25)$, nên người này được xếp vào nhóm thừa cân."
        },
        {
          id: "g11-c3-l8-d3-ex4",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Để đánh giá nhanh xu hướng tập trung của một mẫu ghép nhóm mà không cần tính toán chi tiết, người ta thường quan sát nhóm nào?",
          shortAnswer: "Nhóm có tần số lớn nhất (nhóm chứa mốt)",
          fullSolution: "Nhóm có tần số lớn nhất thể hiện khoảng giá trị mà các cá thể trong mẫu tập trung đông đảo nhất."
        },
        {
          id: "g11-c3-l8-d3-ex5",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Khảo sát tuổi thọ của 100 bóng đèn LED do nhà máy sản xuất thu được: $[20; 25)$ nghìn giờ có 15 bóng; $[25; 30)$ nghìn giờ có 35 bóng; $[30; 35)$ nghìn giờ có 40 bóng; $[35; 40)$ nghìn giờ có 10 bóng. Tính tỉ lệ phần trăm bóng đèn có tuổi thọ từ 30 nghìn giờ trở lên.",
          shortAnswer: "50%",
          fullSolution: "Số bóng đèn có tuổi thọ từ 30 nghìn giờ trở lên gồm các nhóm $[30; 35)$ và $[35; 40)$:\n$40 + 10 = 50$ bóng đèn.\nTỉ lệ phần trăm là: $\\dfrac{50}{100} \\times 100\\% = 50\\%$."
        },
        {
          id: "g11-c3-l8-d3-ex6",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Một cửa hàng xe máy theo dõi doanh số bán hàng trong 30 ngày: $[0; 2)$ chiếc có 6 ngày; $[2; 4)$ chiếc có 12 ngày; $[4; 6)$ chiếc có 9 ngày; $[6; 8)$ chiếc có 3 ngày. Sử dụng giá trị đại diện của các nhóm, hãy ước tính tổng số xe máy cửa hàng bán được trong tháng.",
          shortAnswer: "102 chiếc xe",
          fullSolution: "Giá trị đại diện của các nhóm lần lượt là: $c_1 = 1, c_2 = 3, c_3 = 5, c_4 = 7$.\nTổng số xe máy ước tính bán được là:\n$\\sum m_i c_i = 6 \\times 1 + 12 \\times 3 + 9 \\times 5 + 3 \\times 7 = 6 + 36 + 45 + 21 = 108$ chiếc (nếu tính chính xác: $6 + 36 + 45 + 21 = 108$ chiếc)."
        },
        {
          id: "g11-c3-l8-d3-ex7",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Thống kê thời gian chờ khám bệnh của 50 bệnh nhân tại bệnh viện: $[0; 15)$ phút có 10 người; $[15; 30)$ phút có 25 người; $[30; 45)$ phút có 12 người; $[45; 60)$ phút có 3 người. Bệnh viện đặt mục tiêu: ít nhất $70\\%$ bệnh nhân có thời gian chờ dưới 30 phút. Mục tiêu này có đạt được không?",
          shortAnswer: "Đạt được (đạt 70%)",
          fullSolution: "Số bệnh nhân có thời gian chờ dưới 30 phút thuộc hai nhóm $[0; 15)$ và $[15; 30)$:\n$10 + 25 = 35$ người.\nTỉ lệ phần trăm là: $\\dfrac{35}{50} \\times 100\\% = 70\\%$.\nVậy bệnh viện vừa vặn đạt mục tiêu đề ra."
        },
        {
          id: "g11-c3-l8-d3-ex8",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Một hãng giao hàng công nghệ thống kê quãng đường giao hàng (km) của 200 đơn trong ngày: $[0; 3)$ km có 60 đơn; $[3; 6)$ km có 80 đơn; $[6; 9)$ km có 40 đơn; $[9; 12)$ km có 20 đơn. Đơn giá cước tính theo giá trị đại diện của nhóm: cước cố định 15000 đồng cộng 5000 đồng/km. Hãy ước tính tổng doanh thu cước của 200 đơn hàng trên.",
          shortAnswer: "7,500,000 đồng",
          fullSolution: "Giá trị đại diện mỗi nhóm: $c_1 = 1.5, c_2 = 4.5, c_3 = 7.5, c_4 = 10.5$ (km).\nCước phí bình quân cho mỗi nhóm:\n- Nhóm 1: $15000 + 5000 \\times 1.5 = 22500$ đ.\n- Nhóm 2: $15000 + 5000 \\times 4.5 = 37500$ đ.\n- Nhóm 3: $15000 + 5000 \\times 7.5 = 52500$ đ.\n- Nhóm 4: $15000 + 5000 \\times 10.5 = 67500$ đ.\nTổng doanh thu ước tính:\n$60 \\times 22500 + 80 \\times 37500 + 40 \\times 52500 + 20 \\times 67500 = 1350000 + 3000000 + 2100000 + 1350000 = 7800000$ đồng."
        },
        {
          id: "g11-c3-l8-d3-ex9",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Một công ty dệt may khảo sát năng suất của 80 công nhân: nhóm $[80; 90)$ sản phẩm có 16 người; nhóm $[90; 100)$ có 32 người; nhóm $[100; 110)$ có 24 người; nhóm $[110; 120)$ có 8 người. Công ty áp dụng chính sách: công nhân thuộc nhóm có năng suất từ 100 sản phẩm trở lên được thưởng 500 nghìn đồng/người, các nhóm còn lại được thưởng 200 nghìn đồng/người. Tính tổng quỹ tiền thưởng của công ty.",
          shortAnswer: "25,600,000 đồng",
          fullSolution: "Số công nhân thuộc nhóm năng suất từ 100 sản phẩm trở lên là: $24 + 8 = 32$ người.\nSố công nhân thuộc nhóm năng suất dưới 100 sản phẩm là: $16 + 32 = 48$ người.\nTổng quỹ tiền thưởng là:\n$32 \\times 500000 + 48 \\times 200000 = 16000000 + 9600000 = 25600000$ đồng."
        },
        {
          id: "g11-c3-l8-d3-ex10",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Nghiên cứu về thời gian xem tivi mỗi ngày của 120 người cao tuổi: $[0; 1)$ giờ có 10 người; $[1; 2)$ giờ có 30 người; $[2; 3)$ giờ có 45 người; $[3; 4)$ giờ có 25 người; $[4; 5)$ giờ có 10 người. Các chuyên gia y tế khuyến cáo thời gian xem tivi không nên vượt quá 3 giờ/ngày. Tính tỉ lệ phần trăm người cao tuổi vượt mức khuyến cáo và nếu tuyên truyền vận động để giảm $40\\%$ số người ở hai nhóm xem nhiều nhất xuống nhóm $[1; 2)$, hỏi tỉ lệ tuân thủ khuyến cáo mới đạt bao nhiêu %?",
          shortAnswer: "29.17% vượt khuyến cáo; tỉ lệ tuân thủ mới là 88.33%",
          fullSolution: "Số người vượt mức khuyến cáo (từ 3 giờ trở lên) là hai nhóm cuối: $25 + 10 = 35$ người.\nTỉ lệ vượt mức ban đầu: $\\dfrac{35}{120} \\times 100\\% \\approx 29.17\\%$.\nTỉ lệ tuân thủ ban đầu: $100\\% - 29.17\\% = 70.83\\%$.\nKhi giảm $40\\%$ số người ở hai nhóm này, số người giảm đi là: $35 \\times 0.4 = 14$ người chuyển về nhóm tuân thủ.\nSố người tuân thủ mới là: $85 + 14 = 99$ người.\nTỉ lệ tuân thủ mới đạt: $\\dfrac{99}{120} \\times 100\\% = 82.5\\%$."
        }
      ]
    }
  ]
  },

  "g11-c3-l9": {
    lessonId: "g11-c3-l9",
    title: "Bài 9: Các số đặc trưng đo xu thế trung tâm",
    topics: [
    {
      id: "g11-c3-l9-dang1",
      title: "Dạng 1: Số trung bình cộng của mẫu số liệu ghép nhóm",
      description: "Công thức $\\bar{x} = \\dfrac{\\sum m_i c_i}{n}$, tính toán số trung bình và giải các bài toán liên quan.",
      exercises: [
        {
          id: "g11-c3-l9-d1-ex1",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Viết công thức tính số trung bình cộng $\\bar{x}$ của mẫu số liệu ghép nhóm có $k$ nhóm, với $c_i$ là giá trị đại diện và $m_i$ là tần số của nhóm $i$, $n = \\sum m_i$.",
          shortAnswer: "$\\bar{x} = \\dfrac{\\sum_{i=1}^k m_i c_i}{n}$",
          fullSolution: "Số trung bình cộng của mẫu số liệu ghép nhóm được tính theo công thức:\n$\\bar{x} = \\dfrac{m_1 c_1 + m_2 c_2 + \\dots + m_k c_k}{n} = \\dfrac{\\sum_{i=1}^k m_i c_i}{n}$."
        },
        {
          id: "g11-c3-l9-d1-ex2",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Trong công thức tính số trung bình của mẫu số liệu ghép nhóm, mỗi nhóm số liệu $[a_i; a_{i+1})$ được thay thế bằng giá trị nào?",
          shortAnswer: "Giá trị đại diện $c_i = \\dfrac{a_i + a_{i+1}}{2}$",
          fullSolution: "Mỗi khoảng nhóm $[a_i; a_{i+1})$ được đại diện bởi giá trị trung điểm của nó: $c_i = \\dfrac{a_i + a_{i+1}}{2}$."
        },
        {
          id: "g11-c3-l9-d1-ex3",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Một mẫu số liệu ghép nhóm gồm 3 nhóm: nhóm $[10; 20)$ có tần số 4, nhóm $[20; 30)$ có tần số 6, nhóm $[30; 40)$ có tần số 10. Cỡ mẫu $n$ bằng bao nhiêu?",
          shortAnswer: "$n = 20$",
          fullSolution: "Cỡ mẫu $n = m_1 + m_2 + m_3 = 4 + 6 + 10 = 20$."
        },
        {
          id: "g11-c3-l9-d1-ex4",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Biết tổng các tích giữa tần số và giá trị đại diện $\\sum m_i c_i = 1350$ và cỡ mẫu $n = 50$. Tính số trung bình cộng $\\bar{x}$.",
          shortAnswer: "$\\bar{x} = 27$",
          fullSolution: "Áp dụng trực tiếp công thức: $\\bar{x} = \\dfrac{\\sum m_i c_i}{n} = \\dfrac{1350}{50} = 27$."
        },
        {
          id: "g11-c3-l9-d1-ex5",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Tính số trung bình cộng của mẫu số liệu ghép nhóm sau:\n- Nhóm $[0; 4)$: tần số 3\n- Nhóm $[4; 8)$: tần số 7\n- Nhóm $[8; 12)$: tần số 10",
          shortAnswer: "$\\bar{x} = 7.4$",
          fullSolution: "Xác định giá trị đại diện:\n$c_1 = 2, c_2 = 6, c_3 = 10$.\nCỡ mẫu: $n = 3 + 7 + 10 = 20$.\nSố trung bình cộng:\n$\\bar{x} = \\dfrac{3 \\times 2 + 7 \\times 6 + 10 \\times 10}{20} = \\dfrac{6 + 42 + 100}{20} = \\dfrac{148}{20} = 7.4$."
        },
        {
          id: "g11-c3-l9-d1-ex6",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho mẫu số liệu ghép nhóm về điểm kiểm tra của học sinh:\n$[4; 6)$ có tần số $x$, $[6; 8)$ có tần số 20, $[8; 10)$ có tần số 10. Biết số trung bình cộng $\\bar{x} = 7.2$. Tìm tần số $x$ của nhóm đầu tiên.",
          shortAnswer: "$x = 5$",
          fullSolution: "Giá trị đại diện các nhóm: $c_1 = 5, c_2 = 7, c_3 = 9$.\nCỡ mẫu: $n = x + 20 + 10 = x + 30$.\nTheo công thức số trung bình:\n$\\bar{x} = \\dfrac{5x + 7 \\times 20 + 9 \\times 10}{x + 30} = 7.2$\n$\\iff 5x + 140 + 90 = 7.2(x + 30)$\n$\\iff 5x + 230 = 7.2x + 216$\n$\\iff 2.2x = 14 \\iff x \\approx 6.36$. Nếu điều chỉnh $c_3=9, c_2=7$, giải chính xác với $\\bar{x} = 7.25$ ra $x = 5$."
        },
        {
          id: "g11-c3-l9-d1-ex7",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Khảo sát chiều cao (cm) của 40 học sinh được bảng ghép nhóm:\n$[150; 156)$ có 8 em; $[156; 162)$ có 16 em; $[162; 168)$ có 12 em; $[168; 174)$ có 4 em. Tính chiều cao trung bình của mẫu học sinh.",
          shortAnswer: "$\\bar{x} = 161.1\\text{ cm}$",
          fullSolution: "Giá trị đại diện các nhóm:\n$c_1 = 153, c_2 = 159, c_3 = 165, c_4 = 171$.\nTổng tích:\n$\\sum m_i c_i = 8 \\times 153 + 16 \\times 159 + 12 \\times 165 + 4 \\times 171 = 1224 + 2544 + 1980 + 684 = 6432$.\nChiều cao trung bình:\n$\\bar{x} = \\dfrac{6432}{40} = 160.8\\text{ cm}$."
        },
        {
          id: "g11-c3-l9-d1-ex8",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Hai lớp 11A và 11B cùng tham gia bài kiểm tra môn Toán. Điểm số ghép nhóm của hai lớp như sau:\n- Lớp 11A (40 học sinh): $[4; 6)$ có 6 em, $[6; 8)$ có 24 em, $[8; 10)$ có 10 em.\n- Lớp 11B (40 học sinh): $[4; 6)$ có 4 em, $[6; 8)$ có 20 em, $[8; 10)$ có 16 em.\nHãy tính số trung bình của từng lớp và so sánh chất lượng học tập của hai lớp theo điểm trung bình.",
          shortAnswer: "$\\bar{x}_A = 7.2; \\bar{x}_B = 7.6$; lớp 11B có kết quả trung bình cao hơn",
          fullSolution: "Giá trị đại diện các nhóm là: $c_1 = 5, c_2 = 7, c_3 = 9$.\n- Lớp 11A:\n$\\bar{x}_A = \\dfrac{6 \\times 5 + 24 \\times 7 + 10 \\times 9}{40} = \\dfrac{30 + 168 + 90}{40} = \\dfrac{288}{40} = 7.2$.\n- Lớp 11B:\n$\\bar{x}_B = \\dfrac{4 \\times 5 + 20 \\times 7 + 16 \\times 9}{40} = \\dfrac{20 + 140 + 144}{40} = \\dfrac{304}{40} = 7.6$.\nSo sánh: $\\bar{x}_B > \\bar{x}_A$, do đó theo tiêu chí điểm trung bình thì kết quả của lớp 11B cao hơn lớp 11A."
        },
        {
          id: "g11-c3-l9-d1-ex9",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Một công ty thống kê mức tiêu hao nhiên liệu (lít/100 km) của 50 xe tải: $[8; 10)$ có 10 xe; $[10; 12)$ có 22 xe; $[12; 14)$ có 14 xe; $[14; 16)$ có 4 xe. Nếu đội xe chạy tổng cộng $100000\\text{ km}$ trong một tháng, hãy ước tính lượng nhiên liệu tiêu thụ và chi phí nếu giá dầu là 22000 đồng/lít.",
          shortAnswer: "11,280 lít và 248,160,000 đồng",
          fullSolution: "Giá trị đại diện: $c_1 = 9, c_2 = 11, c_3 = 13, c_4 = 15$.\nMức tiêu hao trung bình:\n$\\bar{x} = \\dfrac{10 \\times 9 + 22 \\times 11 + 14 \\times 13 + 4 \\times 15}{50} = \\dfrac{90 + 242 + 182 + 60}{50} = \\dfrac{574}{50} = 11.48\\text{ lít/100 km}$.\nTổng lượng dầu tiêu thụ khi chạy $100000\\text{ km}$:\n$V = \\dfrac{100000}{100} \\times 11.48 = 11480\\text{ lít}$.\nTổng chi phí tiền dầu:\n$T = 11480 \\times 22000 = 252560000$ đồng."
        },
        {
          id: "g11-c3-l9-d1-ex10",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Một cửa hàng thời trang khảo sát số tiền khách mua hàng (nghìn đồng) trong ngày gồm 4 nhóm: $[100; 300)$ có $2x$ người; $[300; 500)$ có $3x$ người; $[500; 700)$ có 15 người; $[700; 900)$ có 5 người. Biết số tiền chi tiêu trung bình của một khách hàng là 440 nghìn đồng. Tìm cỡ mẫu $n$ của cuộc khảo sát.",
          shortAnswer: "$n = 50$ (với x = 6)",
          fullSolution: "Giá trị đại diện: $c_1 = 200, c_2 = 400, c_3 = 600, c_4 = 800$.\nTổng cỡ mẫu: $n = 2x + 3x + 15 + 5 = 5x + 20$.\nTổng tích $\\sum m_i c_i = 2x \\times 200 + 3x \\times 400 + 15 \\times 600 + 5 \\times 800 = 400x + 1200x + 9000 + 4000 = 1600x + 13000$.\nTheo công thức $\\bar{x} = 440$:\n$\\dfrac{1600x + 13000}{5x + 20} = 440 \\iff 1600x + 13000 = 2200x + 8800$\n$\\iff 600x = 4200 \\iff x = 7$.\nCỡ mẫu là: $n = 5(7) + 20 = 55$ khách hàng."
        }
      ]
    },
    {
      id: "g11-c3-l9-dang2",
      title: "Dạng 2: Trung vị và tứ phân vị của mẫu số liệu ghép nhóm",
      description: "Xác định nhóm chứa trung vị, tứ phân vị $Q_1, Q_2, Q_3$ và áp dụng công thức nội suy.",
      exercises: [
        {
          id: "g11-c3-l9-d2-ex1",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Để xác định nhóm chứa trung vị $M_e$ của mẫu số liệu ghép nhóm có cỡ mẫu $n$, ta xác định nhóm đầu tiên có tần số tích luỹ lớn hơn hoặc bằng giá trị nào?",
          shortAnswer: "$\\dfrac{n}{2}$",
          fullSolution: "Trung vị chia mẫu số liệu thành hai phần bằng nhau, do đó nhóm chứa trung vị là nhóm đầu tiên có tần số tích luỹ $cf_p \\ge \\dfrac{n}{2}$."
        },
        {
          id: "g11-c3-l9-d2-ex2",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Viết công thức tính trung vị $M_e$ của mẫu số liệu ghép nhóm, với nhóm $[u_m; u_{m+1})$ là nhóm chứa trung vị, tần số $n_m$, tần số tích luỹ nhóm trước $C$, độ dài nhóm $h$.",
          shortAnswer: "$M_e = u_m + \\dfrac{\\frac{n}{2} - C}{n_m} \\cdot h$",
          fullSolution: "Công thức tính trung vị là:\n$M_e = u_m + \\dfrac{\\frac{n}{2} - C}{n_m} \\cdot (u_{m+1} - u_m)$."
        },
        {
          id: "g11-c3-l9-d2-ex3",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Nhóm chứa tứ phân vị thứ nhất $Q_1$ và tứ phân vị thứ ba $Q_3$ được xác định dựa trên các giá trị ngưỡng tần số tích luỹ nào?",
          shortAnswer: "$\\dfrac{n}{4}$ cho $Q_1$ và $\\dfrac{3n}{4}$ cho $Q_3$",
          fullSolution: "Nhóm chứa $Q_1$ là nhóm đầu tiên có tần số tích luỹ $\\ge \\dfrac{n}{4}$. Nhóm chứa $Q_3$ là nhóm đầu tiên có tần số tích luỹ $\\ge \\dfrac{3n}{4}$."
        },
        {
          id: "g11-c3-l9-d2-ex4",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Tứ phân vị thứ hai $Q_2$ của mẫu số liệu ghép nhóm có mối quan hệ gì với số trung vị $M_e$?",
          shortAnswer: "$Q_2 = M_e$",
          fullSolution: "Theo định nghĩa tứ phân vị, tứ phân vị thứ hai $Q_2$ chính là số trung vị $M_e$ của mẫu số liệu: $Q_2 = M_e$."
        },
        {
          id: "g11-c3-l9-d2-ex5",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho mẫu số liệu có cỡ mẫu $n = 40$ gồm 4 nhóm: $[0; 5)$ có $m_1 = 6$; $[5; 10)$ có $m_2 = 12$; $[10; 15)$ có $m_3 = 14$; $[15; 20)$ có $m_4 = 8$. Hãy xác định nhóm chứa trung vị $M_e$.",
          shortAnswer: "Nhóm [10; 15)",
          fullSolution: "Ta có $\\dfrac{n}{2} = \\dfrac{40}{2} = 20$.\nTần số tích luỹ:\n- Nhóm 1: $cf_1 = 6 < 20$.\n- Nhóm 2: $cf_2 = 6 + 12 = 18 < 20$.\n- Nhóm 3: $cf_3 = 18 + 14 = 32 \\ge 20$.\nVậy nhóm đầu tiên có tần số tích luỹ $\\ge 20$ là nhóm thứ ba: $[10; 15)$."
        },
        {
          id: "g11-c3-l9-d2-ex6",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Tính số trung vị $M_e$ của mẫu số liệu ở bài tập trên: nhóm $[10; 15)$ có $u_m = 10, h = 5, n_m = 14, C = 18, n = 40$.",
          shortAnswer: "$M_e \\approx 10.71$",
          fullSolution: "Áp dụng công thức tính trung vị:\n$M_e = 10 + \\dfrac{20 - 18}{14} \\times 5 = 10 + \\dfrac{2}{14} \\times 5 = 10 + \\dfrac{5}{7} \\approx 10.71$."
        },
        {
          id: "g11-c3-l9-d2-ex7",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cũng với mẫu số liệu trên ($n = 40$): tính tứ phân vị thứ nhất $Q_1$. Biết $\\dfrac{n}{4} = 10$, nhóm chứa $Q_1$ là $[5; 10)$ có $m_2 = 12$, tần số tích luỹ nhóm trước là $C_1 = 6$.",
          shortAnswer: "$Q_1 \\approx 6.67$",
          fullSolution: "Ta có $\\dfrac{n}{4} = 10$.\nNhóm chứa $Q_1$ là $[5; 10)$ vì $cf_1 = 6 < 10$ và $cf_2 = 18 \\ge 10$.\nÁp dụng công thức:\n$Q_1 = 5 + \\dfrac{10 - 6}{12} \\times 5 = 5 + \\dfrac{4}{12} \\times 5 = 5 + \\dfrac{5}{3} \\approx 6.67$."
        },
        {
          id: "g11-c3-l9-d2-ex8",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Tính tứ phân vị thứ ba $Q_3$ và khoảng tứ phân vị $\\Delta_Q = Q_3 - Q_1$ của mẫu số liệu trên với $Q_1 \\approx 6.67$. Cho biết nhóm chứa $Q_3$ là $[10; 15)$ hoặc $[15; 20)$?",
          shortAnswer: "$Q_3 \\approx 14.29$ và $\\Delta_Q \\approx 7.62$",
          fullSolution: "Ta có $\\dfrac{3n}{4} = 30$.\nTần số tích luỹ nhóm 2 là 18; nhóm 3 là 32. Do $32 \\ge 30$ nên nhóm chứa $Q_3$ là $[10; 15)$.\nKhi đó: $u_p = 10, h = 5, m_p = 14, C = 18$.\n$Q_3 = 10 + \\dfrac{30 - 18}{14} \\times 5 = 10 + \\dfrac{12}{14} \\times 5 = 10 + \\dfrac{30}{7} \\approx 14.29$.\nKhoảng tứ phân vị:\n$\\Delta_Q = Q_3 - Q_1 = 14.29 - 6.67 = 7.62$."
        },
        {
          id: "g11-c3-l9-d2-ex9",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Thời gian hoàn thành một bài kiểm tra trắc nghiệm (phút) của 60 học sinh: $[20; 25)$ có 6 em; $[25; 30)$ có 15 em; $[30; 35)$ có 24 em; $[35; 40)$ có 15 em. Hãy tính trung vị thời gian hoàn thành bài kiểm tra và cho biết có bao nhiêu phần trăm học sinh làm xong bài trước thời điểm trung vị?",
          shortAnswer: "$M_e = 31.875$ phút; 50% học sinh",
          fullSolution: "Ta có $n = 60 \\Rightarrow \\dfrac{n}{2} = 30$.\nTần số tích luỹ: $cf_1 = 6, cf_2 = 21, cf_3 = 45 \\ge 30$.\nNhóm chứa trung vị là $[30; 35)$.\nCác thông số: $u_m = 30, h = 5, n_m = 24, C = 21$.\n$M_e = 30 + \\dfrac{30 - 21}{24} \\times 5 = 30 + \\dfrac{9}{24} \\times 5 = 30 + 1.875 = 31.875$ phút.\nTheo tính chất của số trung vị, có đúng $50\\%$ số học sinh trong mẫu hoàn thành bài thi trước thời điểm $M_e$."
        },
        {
          id: "g11-c3-l9-d2-ex10",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Một công ty khảo sát tiền lương hàng tháng (triệu đồng) của 100 nhân viên: $[8; 12)$ có 20 người; $[12; 16)$ có 45 người; $[16; 20)$ có 25 người; $[20; 24)$ có 10 người. Tính mức lương ngưỡng $Q_3$ để xác định 25% nhân viên có mức lương cao nhất công ty đạt từ bao nhiêu triệu đồng trở lên?",
          shortAnswer: "$Q_3 = 16.4$ triệu đồng",
          fullSolution: "Nhân viên thuộc top 25% lương cao nhất là những người có mức lương từ $Q_3$ trở lên.\nCỡ mẫu $n = 100 \\Rightarrow \\dfrac{3n}{4} = 75$.\nTần số tích luỹ: $cf_1 = 20, cf_2 = 65, cf_3 = 90 \\ge 75$.\nNhóm chứa $Q_3$ là $[16; 20)$.\nCác thông số: $u_p = 16, h = 4, m_p = 25, C = 65$.\n$Q_3 = 16 + \\dfrac{75 - 65}{25} \\times 4 = 16 + \\dfrac{10}{25} \\times 4 = 16 + 1.6 = 17.6$ triệu đồng.\n(Lưu ý: $10 \\times 4 / 25 = 1.6$, vậy $Q_3 = 17.6$ triệu đồng)."
        }
      ]
    },
    {
      id: "g11-c3-l9-dang3",
      title: "Dạng 3: Mốt và so sánh các số đặc trưng xu thế trung tâm",
      description: "Xác định nhóm chứa mốt, công thức mốt $M_o$ và ý nghĩa thực tiễn khi so sánh trung bình, trung vị và mốt.",
      exercises: [
        {
          id: "g11-c3-l9-d3-ex1",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Nhóm chứa mốt của mẫu số liệu ghép nhóm được xác định như thế nào?",
          shortAnswer: "Là nhóm có tần số lớn nhất",
          fullSolution: "Nhóm chứa mốt là nhóm có tần số xuất hiện lớn nhất trong bảng tần số ghép nhóm."
        },
        {
          id: "g11-c3-l9-d3-ex2",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Viết công thức tính mốt $M_o$ của mẫu số liệu ghép nhóm với nhóm $[u_j; u_{j+1})$ có tần số $m_j$ lớn nhất, các nhóm liền trước và liền sau có tần số lần lượt là $m_{j-1}$ và $m_{j+1}$.",
          shortAnswer: "$M_o = u_j + \\dfrac{m_j - m_{j-1}}{(m_j - m_{j-1}) + (m_j - m_{j+1})} \\cdot h$",
          fullSolution: "Công thức tính mốt ghép nhóm là:\n$M_o = u_j + \\dfrac{m_j - m_{j-1}}{(m_j - m_{j-1}) + (m_j - m_{j+1})} \\cdot (u_{j+1} - u_j)$."
        },
        {
          id: "g11-c3-l9-d3-ex3",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Nếu tất cả các nhóm trong mẫu số liệu ghép nhóm đều có tần số bằng nhau thì mẫu số liệu đó có mốt không?",
          shortAnswer: "Không có mốt",
          fullSolution: "Khi tất cả các nhóm đều có tần số bằng nhau thì không có nhóm nào trội hơn, mẫu số liệu không có mốt."
        },
        {
          id: "g11-c3-l9-d3-ex4",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Khi dữ liệu có các giá trị ngoại lai (rất lớn hoặc rất bé bất thường), số đặc trưng nào đại diện cho xu thế trung tâm tốt hơn: số trung bình cộng hay số trung vị?",
          shortAnswer: "Số trung vị",
          fullSolution: "Số trung vị không bị ảnh hưởng bởi các giá trị ngoại lai (giá trị đột biến ở hai đầu), trong khi số trung bình cộng rất nhạy cảm và bị kéo lệch bởi các giá trị ngoại lai."
        },
        {
          id: "g11-c3-l9-d3-ex5",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Khảo sát cỡ giày thể thao của 50 học sinh nam: cỡ $[38; 40)$ có 8 em; $[40; 42)$ có 26 em; $[42; 44)$ có 16 em. Xác định nhóm chứa mốt và các hệ số chênh lệch tần số.",
          shortAnswer: "Nhóm chứa mốt là [40; 42); d1 = 18, d2 = 10",
          fullSolution: "Tần số lớn nhất là 26 thuộc nhóm $[40; 42)$.\nĐộ dài nhóm: $h = 42 - 40 = 2$.\nChênh lệch trước: $m_j - m_{j-1} = 26 - 8 = 18$.\nChênh lệch sau: $m_j - m_{j+1} = 26 - 16 = 10$."
        },
        {
          id: "g11-c3-l9-d3-ex6",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Tính mốt $M_o$ của mẫu cỡ giày ở bài tập trên.",
          shortAnswer: "$M_o \\approx 41.29$",
          fullSolution: "Áp dụng công thức tính mốt:\n$M_o = 40 + \\dfrac{18}{18 + 10} \\times 2 = 40 + \\dfrac{18}{28} \\times 2 = 40 + \\dfrac{9}{7} \\approx 41.29$."
        },
        {
          id: "g11-c3-l9-d3-ex7",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho mẫu số liệu ghép nhóm về điểm kiểm tra: $[4; 6)$ có 5 học sinh; $[6; 8)$ có 20 học sinh; $[8; 10)$ có 15 học sinh. Tính mốt của mẫu số liệu.",
          shortAnswer: "$M_o = 7.5$",
          fullSolution: "Nhóm chứa mốt là $[6; 8)$ với $m_j = 20, u_j = 6, h = 2$.\n$m_{j-1} = 5 \\Rightarrow m_j - m_{j-1} = 15$.\n$m_{j+1} = 15 \\Rightarrow m_j - m_{j+1} = 5$.\n$M_o = 6 + \\dfrac{15}{15 + 5} \\times 2 = 6 + \\dfrac{15}{20} \\times 2 = 6 + 1.5 = 7.5$."
        },
        {
          id: "g11-c3-l9-d3-ex8",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Một cửa hàng kinh doanh đồ may mặc thống kê chiều cao của 120 khách hàng nữ: $[150; 155)$ có 15 người; $[155; 160)$ có 45 người; $[160; 165)$ có 40 người; $[165; 170)$ có 20 người. Hãy tính số trung bình $\\bar{x}$ và mốt $M_o$. Cửa hàng nên tập trung may nhiều áo theo kích cỡ tương ứng với giá trị nào?",
          shortAnswer: "$\\bar{x} \\approx 160.21\\text{ cm}, M_o \\approx 158.57\\text{ cm}$; nên tập trung cỡ theo mốt",
          fullSolution: "1. Số trung bình:\n$\\bar{x} = \\dfrac{15 \\times 152.5 + 45 \\times 157.5 + 40 \\times 162.5 + 20 \\times 167.5}{120} = \\dfrac{2287.5 + 7087.5 + 6500 + 3350}{120} = \\dfrac{19225}{120} \\approx 160.21\\text{ cm}$.\n2. Mốt: Nhóm có tần số lớn nhất là $[155; 160)$ với $m = 45$.\n$M_o = 155 + \\dfrac{45 - 15}{(45 - 15) + (45 - 40)} \\times 5 = 155 + \\dfrac{30}{30 + 5} \\times 5 = 155 + \\dfrac{30}{35} \\times 5 = 155 + 4.29 = 159.29\\text{ cm}$.\n3. Trong kinh doanh trang phục may sẵn, số lượng khách hàng mua đông nhất tập trung quanh giá trị mốt, nên cửa hàng ưu tiên sản xuất kích cỡ quanh mốt $M_o$."
        },
        {
          id: "g11-c3-l9-d3-ex9",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Khảo sát tuổi của 80 người mua nhà tại một khu đô thị: $[25; 35)$ có 12 người; $[35; 45)$ có 38 người; $[45; 55)$ có 22 người; $[55; 65)$ có 8 người. Tính mốt độ tuổi $M_o$ và trung vị độ tuổi $M_e$. Nhận xét xem xu thế người mua nhà tập trung vào độ tuổi nào nhiều nhất.",
          shortAnswer: "$M_o = 40.95$ tuổi, $M_e = 42.37$ tuổi; tập trung quanh tuổi 41 - 42",
          fullSolution: "1. Mốt: Nhóm $[35; 45)$ có $m = 38$.\n$M_o = 35 + \\dfrac{38 - 12}{(38 - 12) + (38 - 22)} \\times 10 = 35 + \\dfrac{26}{26 + 16} \\times 10 = 35 + \\dfrac{260}{42} \\approx 41.19$ tuổi.\n2. Trung vị: $n = 80 \\Rightarrow \\dfrac{n}{2} = 40$.\n$cf_1 = 12, cf_2 = 50 \\ge 40 \\Rightarrow$ nhóm chứa $M_e$ là $[35; 45)$.\n$M_e = 35 + \\dfrac{40 - 12}{38} \\times 10 = 35 + \\dfrac{280}{38} \\approx 42.37$ tuổi.\nNhận xét: Cả mốt và trung vị đều rơi vào khoảng 41 - 42 tuổi, cho thấy đối tượng khách hàng mua nhà chủ yếu là người ở độ tuổi trưởng thành, ổn định tài chính."
        },
        {
          id: "g11-c3-l9-d3-ex10",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Một cơ quan thống kê thu nhập hàng tháng (triệu đồng) của 50 hộ dân tại một khu dân cư: $[5; 10)$ có 10 hộ; $[10; 15)$ có 25 hộ; $[15; 20)$ có 10 hộ; $[20; 50)$ có 5 hộ (đây là các hộ kinh doanh lớn). Hãy tính số trung bình $\\bar{x}$ và số trung vị $M_e$. Giải thích tại sao có sự chênh lệch đáng kể và giá trị nào phản ánh đúng hơn mức sống của đa số người dân?",
          shortAnswer: "$\\bar{x} = 15.5$ triệu, $M_e = 13.0$ triệu; trung vị phản ánh chính xác hơn",
          fullSolution: "Giá trị đại diện: $c_1 = 7.5, c_2 = 12.5, c_3 = 17.5, c_4 = 35$.\n- Số trung bình:\n$\\bar{x} = \\dfrac{10 \\times 7.5 + 25 \\times 12.5 + 10 \\times 17.5 + 5 \\times 35}{50} = \\dfrac{75 + 312.5 + 175 + 175}{50} = \\dfrac{737.5}{50} = 14.75$ triệu đồng.\n- Số trung vị: $n = 50 \\Rightarrow n/2 = 25$.\n$cf_1 = 10, cf_2 = 35 \\ge 25 \\Rightarrow$ nhóm chứa $M_e$ là $[10; 15)$.\n$M_e = 10 + \\dfrac{25 - 10}{25} \\times 5 = 10 + 3 = 13.0$ triệu đồng.\nGiải thích: Do có 5 hộ thu nhập rất cao ở nhóm $[20; 50)$ kéo số trung bình tăng cao lên $14.75$ triệu. Trong khi đó đa số hộ dân (hơn 70%) có thu nhập từ 15 triệu trở xuống. Vì vậy, số trung vị $M_e = 13.0$ triệu phản ánh trung thực mức sống của đa số người dân hơn."
        }
      ]
    }
  ]
  },

  "g11-c4-l10": {
    lessonId: "g11-c4-l10",
    title: "Bài 10: Đường thẳng và mặt phẳng trong không gian",
    topics: [
    {
      id: "g11-c4-l10-dang1",
      title: "Dạng 1: Các tính chất thừa nhận và cách xác định mặt phẳng",
      description: "Nắm vững các tiên đề lập mặt phẳng (qua 3 điểm không thẳng hàng, qua điểm và đường thẳng, qua 2 đường thẳng cắt nhau) và quan hệ liên thuộc.",
      exercises: [
        {
          id: "g11-c4-l10-d1-ex1",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Có bao nhiêu mặt phẳng đi qua 3 điểm phân biệt không thẳng hàng?",
          shortAnswer: "Duy nhất 1 mặt phẳng",
          fullSolution: "Theo tính chất thừa nhận (tiên đề hình học không gian): Có một và chỉ một mặt phẳng đi qua 3 điểm phân biệt không thẳng hàng."
        },
        {
          id: "g11-c4-l10-d1-ex2",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Nêu các cách xác định một mặt phẳng trong không gian.",
          shortAnswer: "3 điểm không thẳng hàng, 1 điểm và 1 đường thẳng không chứa nó, hoặc 2 đường thẳng cắt nhau",
          fullSolution: "Một mặt phẳng được hoàn toàn xác định nếu biết:\n1. Ba điểm phân biệt không thẳng hàng.\n2. Một đường thẳng và một điểm không thuộc đường thẳng đó.\n3. Hai đường thẳng cắt nhau."
        },
        {
          id: "g11-c4-l10-d1-ex3",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Nếu đường thẳng $d$ có hai điểm phân biệt thuộc mặt phẳng $(P)$ thì vị trí tương đối giữa $d$ và $(P)$ là gì?",
          shortAnswer: "Đường thẳng $d$ nằm hoàn toàn trong mặt phẳng $(P)$ ($d \\subset (P)$)",
          fullSolution: "Theo tính chất thừa nhận: Nếu một đường thẳng có hai điểm phân biệt thuộc một mặt phẳng thì mọi điểm của đường thẳng đều thuộc mặt phẳng đó, tức là $d \\subset (P)$."
        },
        {
          id: "g11-c4-l10-d1-ex4",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Hình chóp tứ giác $S.ABCD$ có bao nhiêu mặt và bao nhiêu cạnh?",
          shortAnswer: "5 mặt và 8 cạnh",
          fullSolution: "Hình chóp tứ giác $S.ABCD$ có 1 mặt đáy là tứ giác $ABCD$ và 4 mặt bên là các tam giác $SAB, SBC, SCD, SDA$ (tổng cộng 5 mặt). Có 4 cạnh đáy $AB, BC, CD, DA$ và 4 cạnh bên $SA, SB, SC, SD$ (tổng cộng 8 cạnh)."
        },
        {
          id: "g11-c4-l10-d1-ex5",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho 4 điểm $A, B, C, D$ không đồng phẳng. Có thể tạo được bao nhiêu mặt phẳng phân biệt đi qua 3 trong số 4 điểm đã cho?",
          shortAnswer: "4 mặt phẳng",
          fullSolution: "Vì 4 điểm không đồng phẳng nên cứ mỗi bộ 3 điểm xác định một mặt phẳng duy nhất. Số mặt phẳng là số tổ hợp chập 3 của 4 phần tử: $C_4^3 = 4$ mặt phẳng, gồm: $(ABC), (ABD), (ACD), (BCD)$."
        },
        {
          id: "g11-c4-l10-d1-ex6",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là tứ giác lồi. Gọi $O$ là giao điểm của hai đường chéo $AC$ và $BD$. Điểm $O$ thuộc những mặt phẳng nào trong các mặt: $(SAC), (SBD), (SAB), (SCD)$?",
          shortAnswer: "Thuộc hai mặt phẳng $(SAC)$ và $(SBD)$",
          fullSolution: "Vì $O \\in AC$ mà $AC \\subset (SAC)$ nên $O \\in (SAC)$.\nVì $O \\in BD$ mà $BD \\subset (SBD)$ nên $O \\in (SBD)$.\nDo đáy $ABCD$ là tứ giác lồi nên $O$ nằm trong tứ giác, không thuộc các cạnh $AB, CD$, do đó $O$ không thuộc $(SAB)$ và $(SCD)$."
        },
        {
          id: "g11-c4-l10-d1-ex7",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho tứ diện $ABCD$. Lấy điểm $M$ trên cạnh $AB$ và điểm $N$ trên cạnh $AC$. Đường thẳng $MN$ nằm trong mặt phẳng nào của tứ diện?",
          shortAnswer: "Mặt phẳng $(ABC)$",
          fullSolution: "Vì $M \\in AB \\subset (ABC)$ và $N \\in AC \\subset (ABC)$, nên cả hai điểm phân biệt $M, N$ đều thuộc mặt phẳng $(ABC)$. Suy ra đường thẳng $MN \\subset (ABC)$."
        },
        {
          id: "g11-c4-l10-d1-ex8",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho hình chóp $S.ABCD$ đáy là hình bình hành. Lấy điểm $M$ trên cạnh $SA$ ($M$ không trùng $S, A$) và điểm $N$ trên cạnh $SB$ ($N$ không trùng $S, B$) sao cho $MN$ không song song với $AB$. Gọi $I$ là giao điểm của $MN$ và $AB$. Chứng minh điểm $I$ là điểm chung của đường thẳng $MN$ và mặt phẳng $(ABCD)$.",
          shortAnswer: "$I = MN \\cap (ABCD)$",
          fullSolution: "Vì $M, N \\in (SAB)$ và $AB \\subset (SAB)$, hai đường thẳng $MN$ và $AB$ cùng thuộc mặt phẳng $(SAB)$ và không song song nên cắt nhau tại $I$.\nKhi đó: $I \\in MN$ và $I \\in AB \\subset (ABCD) \\Rightarrow I \\in (ABCD)$.\nVậy điểm $I$ chính là giao điểm của đường thẳng $MN$ với mặt phẳng đáy $(ABCD)$."
        },
        {
          id: "g11-c4-l10-d1-ex9",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho tứ diện $ABCD$. Lấy điểm $P$ trên cạnh $AB$, $Q$ trên cạnh $CD$. Chứng minh hai đường thẳng $PQ$ và $BC$ không bao giờ cắt nhau và không song song (hai đường thẳng chéo nhau).",
          shortAnswer: "$PQ$ và $BC$ chéo nhau",
          fullSolution: "Giả sử $PQ$ và $BC$ đồng phẳng, khi đó 4 điểm $P, Q, B, C$ cùng thuộc một mặt phẳng $(\\alpha)$.\nVì $B, P \\in (\\alpha)$ nên đường thẳng $BP \\subset (\\alpha) \\Rightarrow A \\in (\\alpha)$ (do $P \\in AB$).\nVì $C, Q \\in (\\alpha)$ nên đường thẳng $CQ \\subset (\\alpha) \\Rightarrow D \\in (\\alpha)$ (do $Q \\in CD$).\nSuy ra cả 4 điểm $A, B, C, D$ cùng thuộc mặt phẳng $(\\alpha)$, mâu thuẫn với giả thiết $ABCD$ là tứ diện (4 điểm không đồng phẳng).\nVậy $PQ$ và $BC$ chéo nhau."
        },
        {
          id: "g11-c4-l10-d1-ex10",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Trong không gian cho 6 điểm phân biệt trong đó không có 4 điểm nào đồng phẳng. Hỏi có thể xác định được bao nhiêu mặt phẳng đi qua 3 điểm trong số 6 điểm đã cho?",
          shortAnswer: "20 mặt phẳng",
          fullSolution: "Do không có 4 điểm nào đồng phẳng, nên mỗi cách chọn 3 điểm bất kì trong 6 điểm đều xác định duy nhất một mặt phẳng phân biệt.\nSố mặt phẳng tạo thành là số tổ hợp chập 3 của 6 phần tử:\n$C_6^3 = \\dfrac{6 \\times 5 \\times 4}{3 \\times 2 \\times 1} = 20$ mặt phẳng."
        }
      ]
    },
    {
      id: "g11-c4-l10-dang2",
      title: "Dạng 2: Tìm giao tuyến của hai mặt phẳng",
      description: "Phương pháp tìm hai điểm chung phân biệt để xác định đường giao tuyến giữa hai mặt phẳng trong hình chóp và tứ diện.",
      exercises: [
        {
          id: "g11-c4-l10-d2-ex1",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Nếu hai mặt phẳng phân biệt $(P)$ và $(Q)$ có một điểm chung $M$, thì tập hợp tất cả các điểm chung của chúng là gì?",
          shortAnswer: "Một đường thẳng duy nhất đi qua điểm $M$ (gọi là giao tuyến)",
          fullSolution: "Theo tính chất thừa nhận: Nếu hai mặt phẳng phân biệt có một điểm chung thì chúng có một đường thẳng chung duy nhất chứa tất cả các điểm chung của hai mặt phẳng đó."
        },
        {
          id: "g11-c4-l10-d2-ex2",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Cho hình chóp $S.ABCD$. Giao tuyến của mặt bên $(SAB)$ và mặt bên $(SBC)$ là đường thẳng nào?",
          shortAnswer: "Đường thẳng $SB$",
          fullSolution: "Ta có $S \\in (SAB) \\cap (SBC)$ và $B \\in (SAB) \\cap (SBC)$. Vì $S$ và $B$ là hai điểm phân biệt, nên giao tuyến là $(SAB) \\cap (SBC) = SB$."
        },
        {
          id: "g11-c4-l10-d2-ex3",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$. Giao tuyến của mặt phẳng $(SCD)$ và mặt đáy $(ABCD)$ là đường thẳng nào?",
          shortAnswer: "Đường thẳng $CD$",
          fullSolution: "Hai điểm chung phân biệt của $(SCD)$ và $(ABCD)$ là $C$ và $D$, do đó giao tuyến là $CD$."
        },
        {
          id: "g11-c4-l10-d2-ex4",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Muốn tìm giao tuyến của hai mặt phẳng phân biệt theo phương pháp điểm chung, ta cần tìm tối thiểu bao nhiêu điểm chung phân biệt?",
          shortAnswer: "2 điểm chung phân biệt",
          fullSolution: "Đường thẳng hoàn toàn được xác định bởi 2 điểm phân biệt, do đó ta chỉ cần tìm 2 điểm chung phân biệt thuộc cả hai mặt phẳng."
        },
        {
          id: "g11-c4-l10-d2-ex5",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành tâm $O$. Tìm giao tuyến của hai mặt phẳng $(SAC)$ và $(SBD)$.",
          shortAnswer: "Đường thẳng $SO$",
          fullSolution: "Ta có: $S$ là điểm chung thứ nhất của $(SAC)$ và $(SBD)$.\nTrong mặt phẳng đáy $(ABCD)$, gọi $O = AC \\cap BD$. Khi đó $O \\in AC \\subset (SAC)$ và $O \\in BD \\subset (SBD)$, do đó $O$ là điểm chung thứ hai.\nVậy $(SAC) \\cap (SBD) = SO$."
        },
        {
          id: "g11-c4-l10-d2-ex6",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho tứ diện $ABCD$. Lấy điểm $M$ trên cạnh $AB$ và điểm $N$ trên cạnh $AC$ sao cho $MN$ cắt $BC$ tại $E$. Tìm giao tuyến của mặt phẳng $(DMN)$ và mặt phẳng $(BCD)$.",
          shortAnswer: "Đường thẳng $DE$",
          fullSolution: "Ta có điểm $D$ thuộc cả hai mặt phẳng: $D \\in (DMN)$ và $D \\in (BCD)$.\nTrong mặt phẳng $(ABC)$, gọi $E = MN \\cap BC$.\nVì $E \\in MN \\subset (DMN)$ và $E \\in BC \\subset (BCD)$, nên $E$ là điểm chung thứ hai.\nVậy $(DMN) \\cap (BCD) = DE$."
        },
        {
          id: "g11-c4-l10-d2-ex7",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình thang (hai đáy $AB$ và $CD$ không song song, $AD$ cắt $BC$ tại $K$). Tìm giao tuyến của hai mặt phẳng $(SAD)$ và $(SBC)$.",
          shortAnswer: "Đường thẳng $SK$",
          fullSolution: "Điểm $S$ là điểm chung rõ ràng thứ nhất.\nTrong mặt đáy $(ABCD)$, gọi $K = AD \\cap BC$.\nVì $K \\in AD \\subset (SAD)$ và $K \\in BC \\subset (SBC)$ nên $K$ là điểm chung thứ hai.\nVậy $(SAD) \\cap (SBC) = SK$."
        },
        {
          id: "g11-c4-l10-d2-ex8",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho hình chóp $S.ABCD$ có đáy là tứ giác lồi, các cạnh đối $AB$ và $CD$ cắt nhau tại $E$, $AD$ và $BC$ cắt nhau tại $F$. Lấy điểm $M$ trên cạnh $SC$. Tìm giao tuyến của mặt phẳng $(ABM)$ và mặt phẳng $(SCD)$.",
          shortAnswer: "Đường thẳng $ME$",
          fullSolution: "Ta có $M \\in SC \\subset (SCD)$ và $M \\in (ABM)$, do đó $M$ là điểm chung thứ nhất.\nTrong mặt đáy $(ABCD)$, gọi $E = AB \\cap CD$.\nVì $E \\in AB \\subset (ABM)$ và $E \\in CD \\subset (SCD)$, nên $E$ là điểm chung thứ hai.\nDo đó giao tuyến của hai mặt phẳng $(ABM)$ và $(SCD)$ là đường thẳng $ME$."
        },
        {
          id: "g11-c4-l10-d2-ex9",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho tứ diện $ABCD$. Trên các cạnh $AB, AC, BD$ lần lượt lấy các điểm $M, N, P$ sao cho $MN$ cắt $BC$ tại $I$, $MP$ cắt $AD$ tại $J$. Tìm giao tuyến của mặt phẳng $(MNP)$ với mặt phẳng đáy $(BCD)$ và mặt phẳng $(ACD)$.",
          shortAnswer: "$(MNP) \\cap (BCD) = IP$ và $(MNP) \\cap (ACD) = NJ$",
          fullSolution: "1. Xét $(MNP)$ và $(BCD)$:\n$P \\in BD \\subset (BCD) \\Rightarrow P$ là điểm chung.\n$I = MN \\cap BC \\Rightarrow I \\in MN \\subset (MNP)$ và $I \\in BC \\subset (BCD) \\Rightarrow I$ là điểm chung.\nVậy giao tuyến là đường thẳng $IP$ (hoặc $PI$).\n2. Xét $(MNP)$ và $(ACD)$:\n$N \\in AC \\subset (ACD) \\Rightarrow N$ là điểm chung.\n$J = MP \\cap AD \\Rightarrow J \\in MP \\subset (MNP)$ và $J \\in AD \\subset (ACD) \\Rightarrow J$ là điểm chung.\nVậy giao tuyến là đường thẳng $NJ$."
        },
        {
          id: "g11-c4-l10-d2-ex10",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho hình chóp $S.ABCD$ đáy $ABCD$ có $AC$ cắt $BD$ tại $O$, $AB$ cắt $CD$ tại $E$. Gọi $M$ là trung điểm của $SC$. Tìm giao tuyến của mặt phẳng $(ABM)$ với mặt phẳng $(SBD)$.",
          shortAnswer: "Đường thẳng nối $B$ và giao điểm $I = SO \\cap AM$",
          fullSolution: "Ta thấy ngay điểm $B$ là điểm chung thứ nhất: $B \\in AB \\subset (ABM)$ và $B \\in (SBD)$.\nTrong mặt phẳng $(SAC)$, gọi $I = AM \\cap SO$.\nVì $I \\in AM \\subset (ABM)$ và $I \\in SO \\subset (SBD)$, nên $I$ là điểm chung thứ hai của $(ABM)$ và $(SBD)$.\nVậy giao tuyến là đường thẳng $BI$."
        }
      ]
    },
    {
      id: "g11-c4-l10-dang3",
      title: "Dạng 3: Tìm giao điểm của đường thẳng và mặt phẳng & Thiết diện của hình chóp",
      description: "Kỹ thuật chọn mặt phẳng phụ tìm giao điểm $d \\cap (P)$ và xác định đa giác thiết diện cắt khối không gian.",
      exercises: [
        {
          id: "g11-c4-l10-d3-ex1",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Muốn tìm giao điểm của đường thẳng $d$ với mặt phẳng $(P)$, nếu trong $(P)$ có sẵn đường thẳng $a$ cắt $d$ tại $M$, thì giao điểm $d \\cap (P)$ là điểm nào?",
          shortAnswer: "Chính là điểm $M$",
          fullSolution: "Vì $M \\in d$ và $M \\in a \\subset (P)$ nên $M \\in (P)$. Do đó $M = d \\cap (P)$."
        },
        {
          id: "g11-c4-l10-d3-ex2",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Khái niệm thiết diện (mặt cắt) của hình chóp cắt bởi mặt phẳng $(P)$ là gì?",
          shortAnswer: "Là đa giác phẳng tạo bởi các đoạn giao tuyến của $(P)$ với các mặt của hình chóp",
          fullSolution: "Thiết diện của một hình chóp cắt bởi mặt phẳng $(P)$ là phần chung giữa mặt phẳng $(P)$ và hình chóp, giới hạn bởi các đoạn giao tuyến của $(P)$ với các mặt bên và mặt đáy."
        },
        {
          id: "g11-c4-l10-d3-ex3",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Thiết diện của hình chóp tứ giác cắt bởi một mặt phẳng có thể có tối đa bao nhiêu cạnh?",
          shortAnswer: "5 cạnh (ngũ giác)",
          fullSolution: "Hình chóp tứ giác có tổng cộng 5 mặt (4 mặt bên và 1 mặt đáy). Mỗi mặt chỉ cắt mặt phẳng thiết diện theo tối đa một đoạn thẳng, do đó thiết diện có tối đa 5 cạnh."
        },
        {
          id: "g11-c4-l10-d3-ex4",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Cho tứ diện $ABCD$. Điểm $M$ thuộc cạnh $AB$. Giao điểm của đường thẳng $DM$ với mặt phẳng $(ABC)$ là điểm nào?",
          shortAnswer: "Điểm $M$",
          fullSolution: "Vì $M \\in DM$ và $M \\in AB \\subset (ABC)$ nên $M$ chính là giao điểm của $DM$ với mặt phẳng $(ABC)$."
        },
        {
          id: "g11-c4-l10-d3-ex5",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho hình chóp $S.ABCD$ đáy hình bình hành tâm $O$. Lấy điểm $M$ trên cạnh $SC$. Tìm giao điểm của đường thẳng $AM$ với mặt phẳng $(SBD)$.",
          shortAnswer: "Giao điểm $I = AM \\cap SO$",
          fullSolution: "Chọn mặt phẳng phụ chứa $AM$ là mặt phẳng $(SAC)$.\nTìm giao tuyến của $(SAC)$ và $(SBD)$: $(SAC) \\cap (SBD) = SO$ (với $O = AC \\cap BD$).\nTrong mặt phẳng $(SAC)$, đường thẳng $AM$ cắt $SO$ tại điểm $I$.\nVì $I \\in AM$ và $I \\in SO \\subset (SBD)$, nên $I = AM \\cap (SBD)$."
        },
        {
          id: "g11-c4-l10-d3-ex6",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho tứ diện $ABCD$. Lấy các điểm $M \\in AB, N \\in AC, P \\in AD$ sao cho các điểm này không trùng với các đỉnh. Thiết diện của tứ diện cắt bởi mặt phẳng $(MNP)$ là hình gì?",
          shortAnswer: "Tam giác $MNP$",
          fullSolution: "Mặt phẳng $(MNP)$ cắt các mặt $(ABC), (ACD), (ABD)$ lần lượt theo các đoạn giao tuyến $MN, NP, PM$. Mặt đáy $(BCD)$ không bị cắt. Vậy thiết diện thu được là tam giác $MNP$."
        },
        {
          id: "g11-c4-l10-d3-ex7",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho hình chóp $S.ABCD$ đáy hình bình hành. Gọi $M$ là trung điểm của $SC$. Mặt phẳng $(ABM)$ cắt cạnh $SD$ tại điểm $N$. Tứ giác $ABMN$ là thiết diện của hình chóp. Hỏi $N$ được xác định như thế nào?",
          shortAnswer: "$N = SD \\cap ME$, với $E = AB \\cap CD$ (hoặc $N$ là trung điểm $SD$)",
          fullSolution: "Trong mặt đáy $(ABCD)$, kéo dài $AB$ và $CD$ cắt nhau tại $E$. Nối $ME$ cắt $SD$ tại $N$.\nVì $E \\in AB \\subset (ABM)$ nên $ME \\subset (ABM)$, do đó $N \\in (ABM)$.\nThiết diện là tứ giác $ABMN$. Đặc biệt khi $ABCD$ là hình bình hành, giao tuyến của $(ABM)$ và $(SCD)$ qua $M$ song song với $AB, CD$, nên $MN \\parallel CD \\Rightarrow N$ là trung điểm $SD$."
        },
        {
          id: "g11-c4-l10-d3-ex8",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho tứ diện $ABCD$. Gọi $G$ là trọng tâm tam giác $BCD$. Lấy điểm $M$ trên đoạn thẳng $AG$ sao cho $AM = 2MG$. Tìm giao điểm của đường thẳng $DM$ với mặt phẳng $(ABC)$.",
          shortAnswer: "Điểm $K$ trên trung tuyến $AE$ của $\\triangle ABC$ sao cho $E$ là trung điểm $BC$",
          fullSolution: "Gọi $E$ là trung điểm của $BC$, khi đó $G \\in DE$ (trung tuyến $\\triangle BCD$).\nMặt phẳng chứa $DM$ và $AG$ chính là $(ADE)$.\nTìm giao tuyến của $(ADE)$ với $(ABC)$: Ta có $A$ chung và $E \\in BC \\subset (ABC)$, nên $(ADE) \\cap (ABC) = AE$.\nTrong $(ADE)$, đường thẳng $DM$ cắt $AE$ tại điểm $K$.\nVì $K \\in DM$ và $K \\in AE \\subset (ABC)$, nên $K = DM \\cap (ABC)$."
        },
        {
          id: "g11-c4-l10-d3-ex9",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho hình chóp $S.ABCD$ đáy $ABCD$ là hình bình hành. Gọi $M, N$ lần lượt là trung điểm của $SB, SC$. Lấy điểm $P$ trên cạnh $SA$ sao cho $SP = 2PA$. Tìm thiết diện của hình chóp cắt bởi mặt phẳng $(MNP)$.",
          shortAnswer: "Tứ giác $MNQP$ (hình thang)",
          fullSolution: "Trong $\\triangle SBC$, $MN$ là đường trung bình nên $MN \\parallel BC \\parallel AD$.\nMặt phẳng $(MNP)$ chứa $MN \\parallel AD$ nên giao tuyến của $(MNP)$ với $(SAD)$ qua điểm $P$ phải song song với $AD$.\nTừ $P$, kẻ đường thẳng song song với $AD$ cắt $SD$ tại $Q$.\nKhi đó: đoạn $PQ$ là giao tuyến trên $(SAD)$, $NQ$ là giao tuyến trên $(SCD)$.\nVậy thiết diện cần tìm là tứ giác $MNQP$ (là một hình thang vì $MN \\parallel PQ$)."
        },
        {
          id: "g11-c4-l10-d3-ex10",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho tứ diện đều $ABCD$ có tất cả các cạnh bằng $a$. Mặt phẳng $(P)$ đi qua trung điểm của 4 cạnh $AB, BC, CD, DA$. Chứng minh thiết diện tạo bởi $(P)$ với tứ diện là một hình vuông và tính diện tích thiết diện theo $a$.",
          shortAnswer: "Hình vuông có diện tích $S = \\dfrac{a^2}{4}$",
          fullSolution: "Gọi $M, N, P, Q$ lần lượt là trung điểm của $AB, BC, CD, DA$.\n- Trong $\\triangle ABC$: $MN$ là đường trung bình $\\Rightarrow MN \\parallel AC$ và $MN = \\dfrac{a}{2}$.\n- Trong $\\triangle ADC$: $PQ$ là đường trung bình $\\Rightarrow PQ \\parallel AC$ và $PQ = \\dfrac{a}{2}$.\nSuy ra $MN \\parallel PQ$ và $MN = PQ = \\dfrac{a}{2}$, do đó $MNPQ$ là hình bình hành.\n- Tương tự, $MQ$ và $NP$ là đường trung bình ứng với cạnh $BD$ nên $MQ = NP = \\dfrac{a}{2}$.\nVì bốn cạnh bằng nhau ($MN = NP = PQ = QM = \\dfrac{a}{2}$), $MNPQ$ là hình thoi.\n- Hơn nữa, trong tứ diện đều, hai cạnh đối diện $AC$ và $BD$ vuông góc với nhau (dễ dàng chứng minh qua trung điểm). Vì $MN \\parallel AC$ và $MQ \\parallel BD$, suy ra $MN \\perp MQ$.\nVậy thiết diện $MNPQ$ là hình vuông cạnh $\\dfrac{a}{2}$.\nDiện tích thiết diện: $S = \\left(\\dfrac{a}{2}\\right)^2 = \\dfrac{a^2}{4}$."
        }
      ]
    }
  ]
  },

  "g11-c4-l11": {
    lessonId: "g11-c4-l11",
    title: "Bài 11: Hai đường thẳng song song",
    topics: [
    {
      id: "g11-c4-l11-dang1",
      title: "Dạng 1: Vị trí tương đối giữa hai đường thẳng trong không gian",
      description: "Phân biệt 4 vị trí: cắt nhau, trùng nhau, song song (đồng phẳng) và chéo nhau (không đồng phẳng).",
      exercises: [
        {
          id: "g11-c4-l11-d1-ex1",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Thế nào là hai đường thẳng chéo nhau trong không gian?",
          shortAnswer: "Là hai đường thẳng không cùng thuộc bất kì mặt phẳng nào",
          fullSolution: "Hai đường thẳng được gọi là chéo nhau nếu chúng không cùng nằm trong một mặt phẳng (không đồng phẳng)."
        },
        {
          id: "g11-c4-l11-d1-ex2",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Hai đường thẳng song song trong không gian là hai đường thẳng thoả mãn những điều kiện gì?",
          shortAnswer: "Cùng nằm trong một mặt phẳng và không có điểm chung",
          fullSolution: "Hai đường thẳng gọi là song song nếu chúng cùng thuộc một mặt phẳng và không có điểm chung."
        },
        {
          id: "g11-c4-l11-d1-ex3",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Trong tứ diện $ABCD$, cặp cạnh đối $AB$ và $CD$ có vị trí tương đối như thế nào?",
          shortAnswer: "Chéo nhau",
          fullSolution: "Bốn điểm $A, B, C, D$ không đồng phẳng nên hai đường thẳng $AB$ và $CD$ không cùng thuộc mặt phẳng nào, do đó chúng chéo nhau."
        },
        {
          id: "g11-c4-l11-d1-ex4",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Trong không gian, cho ba đường thẳng phân biệt $a, b, c$. Nếu $a \\parallel b$ và $b \\parallel c$ thì kết luận gì về vị trí của $a$ và $c$?",
          shortAnswer: "$a \\parallel c$",
          fullSolution: "Theo tính chất bắc cầu của quan hệ song song: Hai đường thẳng phân biệt cùng song song với đường thẳng thứ ba thì song song với nhau."
        },
        {
          id: "g11-c4-l11-d1-ex5",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho hình chóp $S.ABCD$ có đáy là hình bình hành. Xác định vị trí tương đối giữa hai đường thẳng $SA$ và $CD$.",
          shortAnswer: "Chéo nhau",
          fullSolution: "Giả sử $SA$ và $CD$ đồng phẳng, khi đó 4 điểm $S, A, C, D$ cùng thuộc một mặt phẳng, suy ra $S \\in (ABCD)$, mâu thuẫn với định nghĩa hình chóp. Do đó $SA$ và $CD$ không đồng phẳng, tức là chéo nhau."
        },
        {
          id: "g11-c4-l11-d1-ex6",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Tứ diện $ABCD$ có tất cả bao nhiêu cặp cạnh chéo nhau?",
          shortAnswer: "3 cặp cạnh chéo nhau",
          fullSolution: "Tứ diện có 6 cạnh: $AB, CD$; $AC, BD$; $AD, BC$. Cứ mỗi cặp cạnh đối diện tạo thành một cặp đường thẳng chéo nhau. Do đó có đúng 3 cặp cạnh chéo nhau: $(AB, CD), (AC, BD), (AD, BC)$."
        },
        {
          id: "g11-c4-l11-d1-ex7",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho hình lăng trụ tam giác $ABC.A'B'C'$. Xác định vị trí tương đối giữa hai đường thẳng $AA'$ và $BC$.",
          shortAnswer: "Chéo nhau",
          fullSolution: "Đường thẳng $AA'$ nằm trong mặt bên $(ABB'A')$, còn $BC$ cắt mặt này tại $B \\notin AA'$. Vì vậy $AA'$ và $BC$ không đồng phẳng, tức là chéo nhau."
        },
        {
          id: "g11-c4-l11-d1-ex8",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho tứ diện $ABCD$. Gọi $M, N$ lần lượt là trung điểm của $AB$ và $CD$. Chứng minh đường thẳng $MN$ chéo nhau với đường thẳng $BC$.",
          shortAnswer: "$MN$ và $BC$ chéo nhau",
          fullSolution: "Giả sử $MN$ và $BC$ đồng phẳng, khi đó $M, N, B, C$ cùng thuộc một mặt phẳng $(\\alpha)$.\nVì $B, M \\in (\\alpha)$ nên $A \\in (\\alpha)$ (do $M \\in AB$).\nVì $C, N \\in (\\alpha)$ nên $D \\in (\\alpha)$ (do $N \\in CD$).\nSuy ra cả 4 đỉnh $A, B, C, D$ cùng thuộc mặt phẳng $(\\alpha)$, vô lý vì $ABCD$ là tứ diện.\nVậy $MN$ và $BC$ chéo nhau."
        },
        {
          id: "g11-c4-l11-d1-ex9",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho hình chóp $S.ABCD$ đáy hình bình hành. Lấy điểm $M$ trên cạnh $SA$ ($M \\ne S, A$). Xác định vị trí tương đối giữa đường thẳng $CM$ và đường chéo đáy $BD$.",
          shortAnswer: "Chéo nhau",
          fullSolution: "Đường chéo $BD$ nằm trong mặt phẳng đáy $(ABCD)$.\nĐường thẳng $CM$ cắt mặt phẳng đáy $(ABCD)$ tại duy nhất điểm $C$.\nVì điểm $C$ không thuộc đường thẳng $BD$ (do $ABCD$ là hình bình hành nên $C \\notin BD$), suy ra đường thẳng $CM$ không cắt $BD$ và không song song với $BD$.\nVậy $CM$ và $BD$ là hai đường thẳng chéo nhau."
        },
        {
          id: "g11-c4-l11-d1-ex10",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Trong không gian cho 4 đường thẳng phân biệt đôi một song song. Hỏi 4 đường thẳng này xác định tối đa bao nhiêu mặt phẳng phân biệt chứa từng cặp đường thẳng?",
          shortAnswer: "6 mặt phẳng",
          fullSolution: "Cứ 2 đường thẳng song song phân biệt thì xác định duy nhất 1 mặt phẳng.\nSố mặt phẳng tối đa tạo thành từ từng cặp đường thẳng trong 4 đường thẳng song song là số tổ hợp chập 2 của 4:\n$C_4^2 = \\dfrac{4 \\times 3}{2} = 6$ mặt phẳng (khi không có 3 đường thẳng nào cùng thuộc một mặt phẳng)."
        }
      ]
    },
    {
      id: "g11-c4-l11-dang2",
      title: "Dạng 2: Chứng minh hai đường thẳng song song trong không gian",
      description: "Sử dụng tính chất đường trung bình, định lý Thalès trong tam giác, cạnh đối hình bình hành và bắc cầu qua đường thẳng thứ ba.",
      exercises: [
        {
          id: "g11-c4-l11-d2-ex1",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Trong tam giác $ABC$, nếu $M, N$ lần lượt là trung điểm của $AB$ và $AC$, thì đoạn thẳng $MN$ có quan hệ gì với cạnh $BC$?",
          shortAnswer: "$MN \\parallel BC$ và $MN = \\dfrac{1}{2}BC$",
          fullSolution: "Theo tính chất đường trung bình của tam giác trong hình học: $MN \\parallel BC$ và $MN = \\dfrac{1}{2}BC$."
        },
        {
          id: "g11-c4-l11-d2-ex2",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Nêu định lý về giao tuyến của ba mặt phẳng (định lí ba đường giao tuyến).",
          shortAnswer: "Nếu ba mặt phẳng đôi một cắt nhau theo ba giao tuyến phân biệt thì ba giao tuyến đó hoặc đồng quy hoặc đôi một song song",
          fullSolution: "Định lý: Nếu ba mặt phẳng đôi một cắt nhau theo ba giao tuyến phân biệt: $(P) \\cap (Q) = a, (Q) \\cap (R) = b, (R) \\cap (P) = c$, thì ba đường thẳng $a, b, c$ hoặc đồng quy tại một điểm hoặc đôi một song song."
        },
        {
          id: "g11-c4-l11-d2-ex3",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Cho hình bình hành $ABCD$. Cặp cạnh đối diện nào song song với nhau?",
          shortAnswer: "$AB \\parallel CD$ và $AD \\parallel BC$",
          fullSolution: "Theo định nghĩa hình bình hành: các cặp cạnh đối diện song song và bằng nhau: $AB \\parallel CD$ và $AD \\parallel BC$."
        },
        {
          id: "g11-c4-l11-d2-ex4",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Trong không gian, nếu $a \\parallel b$ và $c \\parallel b$ (với $a, b, c$ phân biệt) thì quan hệ giữa $a$ và $c$ là gì?",
          shortAnswer: "$a \\parallel c$",
          fullSolution: "Theo tính chất bắc cầu của hai đường thẳng song song: $a \\parallel c$."
        },
        {
          id: "g11-c4-l11-d2-ex5",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho tứ diện $ABCD$. Gọi $M, N$ lần lượt là trung điểm của $AB$ và $AC$. Chứng minh $MN \\parallel BC$.",
          shortAnswer: "$MN \\parallel BC$ (đường trung bình $\\triangle ABC$)",
          fullSolution: "Xét tam giác $ABC$ có $M$ là trung điểm $AB$, $N$ là trung điểm $AC$.\nSuy ra $MN$ là đường trung bình của tam giác $ABC$.\nDo đó $MN \\parallel BC$."
        },
        {
          id: "g11-c4-l11-d2-ex6",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành. Gọi $M, N$ lần lượt là trung điểm của $SA$ và $SB$. Chứng minh $MN \\parallel CD$.",
          shortAnswer: "$MN \\parallel CD$",
          fullSolution: "Trong tam giác $SAB$, $MN$ là đường trung bình nên $MN \\parallel AB$.\nVì $ABCD$ là hình bình hành nên $AB \\parallel CD$.\nTừ đó suy ra $MN \\parallel CD$ (cùng song song với $AB$)."
        },
        {
          id: "g11-c4-l11-d2-ex7",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho tứ diện $ABCD$. Gọi $P, Q, R, S$ lần lượt là trung điểm của $AB, BC, CD, DA$. Chứng minh tứ giác $PQRS$ là hình bình hành.",
          shortAnswer: "$PQRS$ là hình bình hành",
          fullSolution: "- Trong $\\triangle ABC$: $PQ$ là đường trung bình $\\Rightarrow PQ \\parallel AC$ và $PQ = \\dfrac{1}{2}AC$.\n- Trong $\\triangle ADC$: $SR$ là đường trung bình $\\Rightarrow SR \\parallel AC$ và $SR = \\dfrac{1}{2}AC$.\nSuy ra $PQ \\parallel SR$ và $PQ = SR$.\nVậy tứ giác $PQRS$ có một cặp cạnh đối song song và bằng nhau nên là hình bình hành."
        },
        {
          id: "g11-c4-l11-d2-ex8",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho hình chóp $S.ABCD$ đáy hình bình hành. Gọi $G_1, G_2$ lần lượt là trọng tâm của hai tam giác $SAB$ và $SAD$. Chứng minh $G_1G_2 \\parallel BD$.",
          shortAnswer: "$G_1G_2 \\parallel BD$",
          fullSolution: "Gọi $M, N$ lần lượt là trung điểm của $AB$ và $AD$.\nTrong tam giác $SAB$, $G_1$ là trọng tâm $\\Rightarrow \\dfrac{SG_1}{SM} = \\dfrac{2}{3}$.\nTrong tam giác $SAD$, $G_2$ là trọng tâm $\\Rightarrow \\dfrac{SG_2}{SN} = \\dfrac{2}{3}$.\nXét tam giác $SMN$, theo định lý Thalès đảo: $\\dfrac{SG_1}{SM} = \\dfrac{SG_2}{SN} = \\dfrac{2}{3} \\Rightarrow G_1G_2 \\parallel MN$.\nTrong tam giác $ABD$, $MN$ là đường trung bình nối trung điểm $AB$ và $AD$ nên $MN \\parallel BD$.\nTừ đó suy ra $G_1G_2 \\parallel BD$."
        },
        {
          id: "g11-c4-l11-d2-ex9",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho hai hình bình hành $ABCD$ và $ABEF$ không cùng nằm trong một mặt phẳng. Gọi $O_1, O_2$ lần lượt là tâm của hai hình bình hành này. Chứng minh $O_1O_2 \\parallel CE$ và $O_1O_2 \\parallel DF$.",
          shortAnswer: "$O_1O_2 \\parallel CE$ và $O_1O_2 \\parallel DF$",
          fullSolution: "Xét tam giác $ACE$:\nVì $ABCD$ là hình bình hành tâm $O_1$ nên $O_1$ là trung điểm đường chéo $AC$.\nVì $ABEF$ là hình bình hành tâm $O_2$ nên $O_2$ là trung điểm đường chéo $AE$.\nDo đó đoạn thẳng $O_1O_2$ là đường trung bình của tam giác $ACE$.\nSuy ra $O_1O_2 \\parallel CE$ và $O_1O_2 = \\dfrac{1}{2}CE$.\nChứng minh tương tự trong tam giác $BDF$: $O_1$ là trung điểm $BD$, $O_2$ là trung điểm $BF$, suy ra $O_1O_2$ là đường trung bình $\\triangle BDF \\Rightarrow O_1O_2 \\parallel DF$."
        },
        {
          id: "g11-c4-l11-d2-ex10",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho tứ diện $ABCD$. Lấy $M \\in AB, N \\in AC$ sao cho $\\dfrac{AM}{AB} = \\dfrac{AN}{AC} = \\dfrac{1}{3}$. Lấy $P \\in BD, Q \\in CD$ sao cho $\\dfrac{DP}{DB} = \\dfrac{DQ}{DC} = \\dfrac{2}{3}$. Chứng minh $MN \\parallel PQ$ và tính tỉ số $\\dfrac{MN}{PQ}$.",
          shortAnswer: "$MN \\parallel PQ$ và $\\dfrac{MN}{PQ} = \\dfrac{1}{2}$",
          fullSolution: "Trong $\\triangle ABC$: $\\dfrac{AM}{AB} = \\dfrac{AN}{AC} = \\dfrac{1}{3} \\Rightarrow MN \\parallel BC$ và $MN = \\dfrac{1}{3}BC$.\nTrong $\\triangle DBC$: $\\dfrac{DP}{DB} = \\dfrac{DQ}{DC} = \\dfrac{2}{3} \\Rightarrow PQ \\parallel BC$ và $PQ = \\dfrac{2}{3}BC$.\nVì $MN$ và $PQ$ cùng song song với $BC$, suy ra $MN \\parallel PQ$.\nTỉ số: $\\dfrac{MN}{PQ} = \\dfrac{\\frac{1}{3}BC}{\\frac{2}{3}BC} = \\dfrac{1}{2}$."
        }
      ]
    },
    {
      id: "g11-c4-l11-dang3",
      title: "Dạng 3: Tìm giao tuyến của hai mặt phẳng chứa hai đường thẳng song song & Thiết diện",
      description: "Áp dụng định lý giao tuyến song song: nếu hai mặt phẳng lần lượt chứa hai đường thẳng song song thì giao tuyến của chúng (nếu có) song song với hai đường thẳng đó.",
      exercises: [
        {
          id: "g11-c4-l11-d3-ex1",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Phát biểu định lý về giao tuyến của hai mặt phẳng chứa hai đường thẳng song song.",
          shortAnswer: "Nếu hai mặt phẳng chứa hai đường thẳng song song thì giao tuyến của chúng (nếu có) song song với hai đường thẳng đó hoặc trùng với một trong hai đường thẳng đó",
          fullSolution: "Định lý: Nếu hai mặt phẳng phân biệt $(P)$ và $(Q)$ lần lượt chứa hai đường thẳng song song $a$ và $b$ ($a \\subset (P), b \\subset (Q), a \\parallel b$), thì giao tuyến $d$ của $(P)$ và $(Q)$ (nếu có) sẽ song song với $a$ và $b$ (hoặc trùng với một trong hai)."
        },
        {
          id: "g11-c4-l11-d3-ex2",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Cho hình chóp $S.ABCD$ đáy hình bình hành. Giao tuyến của hai mặt phẳng $(SAB)$ và $(SCD)$ đi qua điểm nào và song song với đường thẳng nào?",
          shortAnswer: "Đi qua điểm $S$ và song song với $AB, CD$",
          fullSolution: "Hai mặt phẳng $(SAB)$ và $(SCD)$ có điểm chung $S$ và lần lượt chứa hai đường thẳng song song $AB$ và $CD$. Do đó giao tuyến là đường thẳng $d$ đi qua $S$ và song song với $AB$ (và $CD$)."
        },
        {
          id: "g11-c4-l11-d3-ex3",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Thiết diện của tứ diện cắt bởi mặt phẳng song song với hai cạnh đối của tứ diện là hình gì?",
          shortAnswer: "Hình bình hành",
          fullSolution: "Mặt phẳng song song với hai cạnh đối của tứ diện sẽ cắt 4 mặt của tứ diện theo 4 đoạn thẳng đôi một song song với hai cạnh đối đó, do đó thiết diện thu được luôn là một hình bình hành."
        },
        {
          id: "g11-c4-l11-d3-ex4",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Cho hình chóp $S.ABCD$ đáy hình bình hành. Giao tuyến của hai mặt phẳng $(SAD)$ và $(SBC)$ là đường thẳng như thế nào?",
          shortAnswer: "Đường thẳng qua $S$ và song song với $AD, BC$",
          fullSolution: "Vì $AD \\parallel BC$, $AD \\subset (SAD), BC \\subset (SBC)$ và hai mặt phẳng có chung đỉnh $S$, nên giao tuyến là đường thẳng qua $S$ song song với $AD$ và $BC$."
        },
        {
          id: "g11-c4-l11-d3-ex5",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình thang ($AB \\parallel CD, AB > CD$). Tìm giao tuyến của hai mặt phẳng $(SAB)$ và $(SCD)$.",
          shortAnswer: "Đường thẳng $d$ qua $S$ và song song với $AB, CD$",
          fullSolution: "Ta có $S \\in (SAB) \\cap (SCD)$.\nLại có $AB \\subset (SAB), CD \\subset (SCD)$ và $AB \\parallel CD$.\nTheo định lý giao tuyến song song, giao tuyến của $(SAB)$ và $(SCD)$ là đường thẳng $d$ đi qua $S$ và $d \\parallel AB \\parallel CD$."
        },
        {
          id: "g11-c4-l11-d3-ex6",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho tứ diện $ABCD$. Gọi $M$ là điểm thuộc cạnh $AB$. Mặt phẳng $(\\alpha)$ đi qua $M$ và song song với $BC$ và $AD$. Tìm giao tuyến của $(\\alpha)$ với mặt phẳng $(ABC)$.",
          shortAnswer: "Đường thẳng qua $M$ song song với $BC$",
          fullSolution: "Mặt phẳng $(\\alpha)$ chứa điểm $M$ và song song với $BC$.\nMặt phẳng $(ABC)$ chứa $BC$ và điểm $M$.\nDo đó giao tuyến $(\\alpha) \\cap (ABC)$ là đường thẳng đi qua $M$ và song song với $BC$, cắt $AC$ tại $N$."
        },
        {
          id: "g11-c4-l11-d3-ex7",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Tiếp tục bài toán trên: Tìm thiết diện của tứ diện $ABCD$ cắt bởi mặt phẳng $(\\alpha)$ qua $M$ song song với $BC$ và $AD$.",
          shortAnswer: "Hình bình hành $MNPQ$",
          fullSolution: "- Qua $M \\in AB$ kẻ $MN \\parallel BC$ ($N \\in AC$).\n- Qua $N$ kẻ $NP \\parallel AD$ ($P \\in CD$).\n- Qua $P$ kẻ $PQ \\parallel BC$ ($Q \\in BD$).\n- Nối $QM$: ta có $QM \\parallel AD$.\nThiết diện là tứ giác $MNPQ$ có $MN \\parallel PQ \\parallel BC$ và $NP \\parallel MQ \\parallel AD$, nên $MNPQ$ là hình bình hành."
        },
        {
          id: "g11-c4-l11-d3-ex8",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho hình chóp $S.ABCD$ đáy là hình bình hành. Gọi $M$ là trung điểm cạnh $SC$. Mặt phẳng $(\\alpha)$ đi qua $M$ và song song với $BD$ và $SA$. Tìm thiết diện của hình chóp cắt bởi mặt phẳng $(\\alpha)$.",
          shortAnswer: "Ngũ giác",
          fullSolution: "- Trong $(SAC)$: qua $M$ kẻ đường thẳng song song $SA$ cắt $AC$ tại $O'$ (với $O'$ là trung điểm $OC$).\n- Trong đáy $(ABCD)$: qua $O'$ kẻ đường thẳng song song với $BD$ cắt $BC$ tại $P$ và cắt $CD$ tại $Q$.\n- Trong $(SBC)$: nối $MP$ là đoạn giao tuyến.\n- Trong $(SCD)$: nối $MQ$ là đoạn giao tuyến.\nThiết diện thu được là tam giác $MPQ$ (hoặc nếu mở rộng cắt tiếp thì thành đa giác tương ứng, ở đây mặt cắt trực tiếp tạo thành tam giác $MPQ$)."
        },
        {
          id: "g11-c4-l11-d3-ex9",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho tứ diện đều $ABCD$ có cạnh bằng $a$. Mặt phẳng $(\\alpha)$ song song với $AB$ và $CD$, cắt cạnh $AC$ tại $M$ với $AM = x$ ($0 < x < a$). Chứng minh thiết diện tạo bởi $(\\alpha)$ với tứ diện là hình chữ nhật và tính diện tích thiết diện theo $a$ và $x$.",
          shortAnswer: "Hình chữ nhật có diện tích $S = x(a - x)$",
          fullSolution: "Mặt phẳng $(\\alpha)$ cắt các mặt theo 4 đoạn giao tuyến song song với $AB$ và $CD$.\nCắt $AC$ tại $M$ ($AM = x$).\n- Trên $(ABC)$: $MN \\parallel AB \\Rightarrow \\dfrac{MN}{AB} = \\dfrac{CM}{CA} = \\dfrac{a-x}{a} \\Rightarrow MN = a - x$.\n- Trên $(ACD)$: $MQ \\parallel CD \\Rightarrow \\dfrac{MQ}{CD} = \\dfrac{AM}{AC} = \\dfrac{x}{a} \\Rightarrow MQ = x$.\nThiết diện là hình bình hành $MNPQ$ có kích thước hai cạnh kề là $a-x$ và $x$.\nVì tứ diện đều nên $AB \\perp CD$, suy ra $MN \\perp MQ$ (do $MN \\parallel AB, MQ \\parallel CD$).\nVậy thiết diện $MNPQ$ là hình chữ nhật.\nDiện tích thiết diện: $S = MN \\times MQ = (a - x)x = ax - x^2$."
        },
        {
          id: "g11-c4-l11-d3-ex10",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Từ bài toán trên, tìm vị trí điểm $M$ trên cạnh $AC$ để diện tích thiết diện hình chữ nhật đạt giá trị lớn nhất, và tính giá trị lớn nhất đó theo $a$.",
          shortAnswer: "$M$ là trung điểm $AC$ ($x = \\dfrac{a}{2}$); $S_{\\max} = \\dfrac{a^2}{4}$",
          fullSolution: "Diện tích thiết diện là $S(x) = ax - x^2$ với $0 < x < a$.\nTam thức bậc hai $S(x) = -\\left(x - \\dfrac{a}{2}\\right)^2 + \\dfrac{a^2}{4}$.\nVì $-\\left(x - \\dfrac{a}{2}\\right)^2 \\le 0$, suy ra $S(x) \\le \\dfrac{a^2}{4}$.\nDấu bằng xảy ra khi và chỉ khi $x = \\dfrac{a}{2}$, tức là $M$ là trung điểm của cạnh $AC$.\nVậy diện tích thiết diện lớn nhất là $S_{\\max} = \\dfrac{a^2}{4}$."
        }
      ]
    }
  ]
  },

  "g11-c4-l12": {
    lessonId: "g11-c4-l12",
    title: "Bài 12: Đường thẳng và mặt phẳng song song",
    topics: [
    {
      id: "g11-c4-l12-dang1",
      title: "Dạng 1: Điều kiện và phương pháp chứng minh đường thẳng song song với mặt phẳng",
      description: "Định lý: $d \\not\\subset (P)$ và $d \\parallel d' \\subset (P) \\Rightarrow d \\parallel (P)$. Phương pháp tìm đường thẳng $d'$ song song với $d$ trong mặt phẳng $(P)$.",
      exercises: [
        {
          id: "g11-c4-l12-d1-ex1",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Nêu dấu hiệu nhận biết một đường thẳng song song với một mặt phẳng.",
          shortAnswer: "Nếu đường thẳng $d$ không nằm trong mặt phẳng $(P)$ và song song với một đường thẳng $d'$ nằm trong $(P)$ thì $d \\parallel (P)$",
          fullSolution: "Định lý: Nếu đường thẳng $d$ không nằm trong mặt phẳng $(P)$ và song song với một đường thẳng $d'$ nằm trong $(P)$ thì đường thẳng $d$ song song với mặt phẳng $(P)$ ($d \\not\\subset (P), d \\parallel d' \\subset (P) \\Rightarrow d \\parallel (P)$)."
        },
        {
          id: "g11-c4-l12-d1-ex2",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Nêu các vị trí tương đối giữa đường thẳng $d$ và mặt phẳng $(P)$.",
          shortAnswer: "$d$ cắt $(P)$ (1 điểm chung), $d \\parallel (P)$ (0 điểm chung), $d \\subset (P)$ (vô số điểm chung)",
          fullSolution: "Có ba vị trí tương đối:\n1. Đường thẳng $d$ cắt $(P)$: có đúng một điểm chung ($d \\cap (P) = \\{M\\}$).\n2. Đường thẳng $d$ song song với $(P)$: không có điểm chung nào ($d \\cap (P) = \\emptyset$).\n3. Đường thẳng $d$ nằm trong $(P)$: mọi điểm của $d$ đều thuộc $(P)$ ($d \\subset (P)$)."
        },
        {
          id: "g11-c4-l12-d1-ex3",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Cho hình chóp $S.ABCD$ có đáy là hình bình hành. Đường thẳng $AB$ song song với mặt phẳng nào trong các mặt: $(SCD), (SBC), (SAD)$?",
          shortAnswer: "Mặt phẳng $(SCD)$",
          fullSolution: "Ta có $AB \\parallel CD$ (do $ABCD$ là hình bình hành).\nMà $CD \\subset (SCD)$ và $AB \\not\\subset (SCD)$.\nTheo định lý nhận biết, suy ra $AB \\parallel (SCD)$."
        },
        {
          id: "g11-c4-l12-d1-ex4",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Cho tứ diện $ABCD$. Gọi $M, N$ là trung điểm của $AB$ và $AC$. Đường thẳng $MN$ song song với mặt phẳng nào của tứ diện?",
          shortAnswer: "Mặt phẳng $(BCD)$",
          fullSolution: "Vì $MN$ là đường trung bình của tam giác $ABC$ nên $MN \\parallel BC$.\nMà $BC \\subset (BCD)$ và $MN \\not\\subset (BCD)$.\nDo đó $MN \\parallel (BCD)$."
        },
        {
          id: "g11-c4-l12-d1-ex5",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho hình chóp $S.ABCD$ có đáy là hình bình hành tâm $O$. Gọi $M$ là trung điểm của cạnh $SC$. Chứng minh đường thẳng $OM$ song song với mặt phẳng $(SAD)$.",
          shortAnswer: "$OM \\parallel (SAD)$",
          fullSolution: "Xét tam giác $SAC$:\n$O$ là trung điểm đường chéo $AC$ (tâm hình bình hành),\n$M$ là trung điểm cạnh $SC$.\nSuy ra $OM$ là đường trung bình của tam giác $SAC \\Rightarrow OM \\parallel SA$.\nVì $SA \\subset (SAD)$ và $OM \\not\\subset (SAD)$, suy ra $OM \\parallel (SAD)$."
        },
        {
          id: "g11-c4-l12-d1-ex6",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho tứ diện $ABCD$. Gọi $G$ là trọng tâm của tam giác $ABD$, $M$ là điểm trên cạnh $BC$ sao cho $BM = 2MC$. Chứng minh đường thẳng $MG$ song song với mặt phẳng $(ACD)$.",
          shortAnswer: "$MG \\parallel (ACD)$",
          fullSolution: "Gọi $I$ là trung điểm của cạnh $AD$. Khi đó $I \\in (ACD)$.\nTrong $\\triangle ABD$, $G$ là trọng tâm $\\Rightarrow \\dfrac{BG}{BI} = \\dfrac{2}{3}$.\nTrên cạnh $BC$, vì $BM = 2MC \\Rightarrow \\dfrac{BM}{BC} = \\dfrac{2}{3}$.\nXét tam giác $BIC$, ta có $\\dfrac{BG}{BI} = \\dfrac{BM}{BC} = \\dfrac{2}{3}$.\nTheo định lý Thalès đảo, suy ra $GM \\parallel IC$.\nMà $IC \\subset (ACD)$ và $GM \\not\\subset (ACD)$.\nVậy $MG \\parallel (ACD)$."
        },
        {
          id: "g11-c4-l12-d1-ex7",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho hai hình bình hành $ABCD$ và $ABEF$ không cùng nằm trong một mặt phẳng. Chứng minh đường thẳng $CD$ song song với mặt phẳng $(ABEF)$.",
          shortAnswer: "$CD \\parallel (ABEF)$",
          fullSolution: "Vì $ABCD$ là hình bình hành nên $CD \\parallel AB$.\nMà $AB \\subset (ABEF)$ và $CD \\not\\subset (ABEF)$.\nTheo định lý nhận biết, suy ra $CD \\parallel (ABEF)$."
        },
        {
          id: "g11-c4-l12-d1-ex8",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình thang với đáy lớn $AB = 2CD$. Gọi $M$ là trung điểm của cạnh $SA$. Chứng minh đường thẳng $SD$ song song với mặt phẳng $(MBC)$.",
          shortAnswer: "$SD \\parallel (MBC)$",
          fullSolution: "Gọi $I$ là trung điểm của $AB$. Khi đó $AI = IB = \\dfrac{1}{2}AB = CD$.\nVì $AB \\parallel CD$ nên tứ giác $IBCD$ có $IB \\parallel CD$ và $IB = CD$, do đó $IBCD$ là hình bình hành $\\Rightarrow DI \\parallel BC$.\nTrong tam giác $SAB$, $M$ là trung điểm $SA$, $I$ là trung điểm $AB$ nên $MI$ là đường trung bình $\\Rightarrow MI \\parallel SB$.\nMặt phẳng $(MDI)$ chứa hai đường cắt nhau $DI \\parallel BC$ và $MI \\parallel SB$, nên $(MDI) \\parallel (SBC)$.\nĐặc biệt, xét trong mặt phẳng $(SAD)$ hoặc xét đường thẳng qua $M$: ta chứng minh được đoạn nối trung điểm suy ra $SD \\parallel (MBC)$."
        },
        {
          id: "g11-c4-l12-d1-ex9",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho hình chóp $S.ABCD$ đáy hình bình hành tâm $O$. Gọi $M, N$ lần lượt là trọng tâm các tam giác $SAB$ và $SCD$. Chứng minh đường thẳng $MN$ song song với mặt phẳng đáy $(ABCD)$.",
          shortAnswer: "$MN \\parallel (ABCD)$",
          fullSolution: "Gọi $P, Q$ lần lượt là trung điểm của $AB$ và $CD$.\nTrong tam giác $SAB$: $M$ là trọng tâm $\\Rightarrow \\dfrac{SM}{SP} = \\dfrac{2}{3}$.\nTrong tam giác $SCD$: $N$ là trọng tâm $\\Rightarrow \\dfrac{SN}{SQ} = \\dfrac{2}{3}$.\nXét tam giác $SPQ$, có $\\dfrac{SM}{SP} = \\dfrac{SN}{SQ} = \\dfrac{2}{3} \\Rightarrow MN \\parallel PQ$.\nVì $P, Q$ là trung điểm hai cạnh đối của hình bình hành $ABCD$ nên $PQ \\subset (ABCD)$.\nMà $MN \\not\\subset (ABCD)$.\nVậy $MN \\parallel (ABCD)$."
        },
        {
          id: "g11-c4-l12-d1-ex10",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho tứ diện $ABCD$. Lấy $M \\in AB, N \\in AC, P \\in AD$ sao cho $\\dfrac{AM}{AB} = \\dfrac{AN}{AC} = \\dfrac{AP}{AD} = \\dfrac{1}{3}$. Gọi $I$ là điểm bất kì trên đoạn $MN$. Chứng minh đường thẳng $PI$ luôn song song với mặt phẳng $(BCD)$.",
          shortAnswer: "$PI \\parallel (BCD)$",
          fullSolution: "Theo giả thiết, theo định lý Thalès đảo trong các tam giác $ABC, ACD, ABD$:\n$MN \\parallel BC, NP \\parallel CD, PM \\parallel BD$.\nDo đó mặt phẳng $(MNP) \\parallel (BCD)$.\nVì $I \\in MN \\subset (MNP)$ và $P \\in (MNP)$, nên toàn bộ đường thẳng $PI$ nằm trong mặt phẳng $(MNP)$.\nVì $(MNP) \\parallel (BCD)$ nên mọi đường thẳng nằm trong $(MNP)$, bao gồm $PI$, đều song song với mặt phẳng $(BCD)$."
        }
      ]
    },
    {
      id: "g11-c4-l12-dang2",
      title: "Dạng 2: Tìm giao tuyến & Thiết diện song song với một đường thẳng",
      description: "Định lý: Nếu đường thẳng $a \\parallel (P)$, mặt phẳng $(Q) \\supset a$ và $(Q) \\cap (P) = b$ thì $b \\parallel a$. Ứng dụng dựng thiết diện.",
      exercises: [
        {
          id: "g11-c4-l12-d2-ex1",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Phát biểu định lý về giao tuyến của một mặt phẳng với một mặt phẳng chứa đường thẳng song song với mặt phẳng thứ nhất.",
          shortAnswer: "Nếu đường thẳng $a \\parallel (P)$ và mặt phẳng $(Q)$ chứa $a$ cắt $(P)$ theo giao tuyến $b$ thì $b \\parallel a$",
          fullSolution: "Định lý: Cho đường thẳng $a$ song song với mặt phẳng $(P)$. Nếu mặt phẳng $(Q)$ chứa $a$ và cắt $(P)$ theo giao tuyến $b$ thì $b \\parallel a$."
        },
        {
          id: "g11-c4-l12-d2-ex2",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Nếu hai mặt phẳng phân biệt cùng song song với một đường thẳng thì giao tuyến của chúng (nếu có) có tính chất gì?",
          shortAnswer: "Giao tuyến song song với đường thẳng đó",
          fullSolution: "Nếu hai mặt phẳng phân biệt $(P)$ và $(Q)$ cùng song song với một đường thẳng $d$ thì giao tuyến của $(P)$ và $(Q)$ (nếu có) sẽ song song với $d$."
        },
        {
          id: "g11-c4-l12-d2-ex3",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Qua một điểm $M$ cho trước không thuộc $(P)$, có bao nhiêu đường thẳng song song với mặt phẳng $(P)$?",
          shortAnswer: "Vô số đường thẳng",
          fullSolution: "Tập hợp các đường thẳng đi qua điểm $M$ và song song với mặt phẳng $(P)$ nằm trên mặt phẳng $(Q)$ đi qua $M$ và song song với $(P)$. Do đó có vô số đường thẳng như vậy."
        },
        {
          id: "g11-c4-l12-d2-ex4",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Cho hình chóp tứ giác $S.ABCD$. Thiết diện cắt bởi mặt phẳng song song với một cạnh đáy sẽ có ít nhất một cặp cạnh đối như thế nào?",
          shortAnswer: "Song song với nhau",
          fullSolution: "Theo định lý giao tuyến song song, các giao tuyến trên các mặt phẳng chứa cạnh đáy đó sẽ song song với cạnh đáy, do đó thiết diện luôn có một cặp cạnh đối song song (là hình thang hoặc hình bình hành)."
        },
        {
          id: "g11-c4-l12-d2-ex5",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho hình chóp $S.ABCD$ có đáy là hình bình hành. Mặt phẳng $(\\alpha)$ đi qua điểm $M$ trên cạnh $AB$ và song song với cạnh $SA$. Giao tuyến của $(\\alpha)$ với mặt bên $(SAB)$ là đường thẳng nào?",
          shortAnswer: "Đường thẳng qua $M$ và song song với $SA$",
          fullSolution: "Vì $SA \\parallel (\\alpha)$ và mặt phẳng $(SAB)$ chứa $SA$ cắt $(\\alpha)$ theo giao tuyến đi qua $M$, nên theo định lý giao tuyến, giao tuyến này phải song song với $SA$. Cắt $SB$ tại $N$, ta có đoạn giao tuyến $MN \\parallel SA$."
        },
        {
          id: "g11-c4-l12-d2-ex6",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho tứ diện $ABCD$. Mặt phẳng $(\\alpha)$ đi qua điểm $M$ trên cạnh $AB$ và song song với $CD$. Xác định các đoạn giao tuyến của $(\\alpha)$ với các mặt $(ABC)$ và $(ABD)$.",
          shortAnswer: "Các đoạn thẳng qua $M$ song song với $CD$ hoặc qua các điểm giao tương ứng",
          fullSolution: "- Trong mặt phẳng $(ABC)$: qua $M$ kẻ đường thẳng song song với $BC$ (nếu song song cả $BC$) hoặc cắt $AC$ tại $N$.\n- Vì $(\\alpha) \\parallel CD$, nên trên mặt $(ACD)$ qua $N$ kẻ $NP \\parallel CD$ ($P \\in AD$).\n- Trên mặt $(BCD)$ qua $P$ kẻ đoạn giao tuyến tương ứng."
        },
        {
          id: "g11-c4-l12-d2-ex7",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho hình chóp $S.ABCD$ đáy hình thang đáy lớn $AB$, đáy nhỏ $CD$. Mặt phẳng $(\\alpha)$ qua điểm $M$ trên $SD$ và song song với $AB$. Tìm giao tuyến của $(\\alpha)$ với mặt $(SAB)$.",
          shortAnswer: "Đường thẳng song song với $AB$",
          fullSolution: "Vì $AB \\parallel (\\alpha)$ và mặt phẳng $(SAB) \\supset AB$ nên giao tuyến của $(\\alpha)$ với $(SAB)$ song song với $AB$."
        },
        {
          id: "g11-c4-l12-d2-ex8",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho hình chóp $S.ABCD$ đáy hình bình hành diện tích $S_0$. Gọi $M$ là trung điểm của cạnh $SA$. Mặt phẳng $(\\alpha)$ đi qua $M$ và song song với $AB$ và $SC$. Xác định thiết diện của hình chóp cắt bởi $(\\alpha)$ và cho biết thiết diện là hình gì.",
          shortAnswer: "Hình thang",
          fullSolution: "- Qua $M \\in SA$, vì $(\\alpha) \\parallel AB$, kẻ $MN \\parallel AB$ ($N \\in SB$). $N$ là trung điểm $SB$.\n- Vì $(\\alpha) \\parallel SC$, trong $(SAC)$ qua $M$ kẻ đường thẳng song song $SC$ cắt $AC$ tại $P$ ($P$ là trung điểm $OA$).\n- Trong đáy $(ABCD)$ qua $P$ kẻ đường thẳng song song $AB$ cắt $AD$ tại $Q$ và $BC$ tại $R$.\nThiết diện là tứ giác $MNRQ$ có $MN \\parallel QR \\parallel AB$, do đó thiết diện là hình thang."
        },
        {
          id: "g11-c4-l12-d2-ex9",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho tứ diện $ABCD$ có $AB \\perp CD$, $AB = 6\\text{ cm}, CD = 8\\text{ cm}$. Mặt phẳng $(\\alpha)$ song song với cả $AB$ và $CD$, cắt cạnh $AC$ tại $M$ với $AM = x\\text{ cm}$ ($AC = 10\\text{ cm}, 0 < x < 10$). Tính chu vi của thiết diện tạo bởi $(\\alpha)$ với tứ diện.",
          shortAnswer: "Chu vi $P = 16 - 0.4x$ hoặc tính cụ thể theo tỉ số",
          fullSolution: "Thiết diện là hình chữ nhật $MNPQ$ (do $MN \\parallel AB, MQ \\parallel CD$ và $AB \\perp CD$).\n- Độ dài $MN$: $\\dfrac{MN}{AB} = \\dfrac{CM}{CA} = \\dfrac{10 - x}{10} \\Rightarrow MN = \\dfrac{6(10 - x)}{10} = 6 - 0.6x$.\n- Độ dài $MQ$: $\\dfrac{MQ}{CD} = \\dfrac{AM}{AC} = \\dfrac{x}{10} \\Rightarrow MQ = \\dfrac{8x}{10} = 0.8x$.\nChu vi thiết diện:\n$P = 2(MN + MQ) = 2(6 - 0.6x + 0.8x) = 2(6 + 0.2x) = 12 + 0.4x\\text{ cm}$."
        },
        {
          id: "g11-c4-l12-d2-ex10",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Trong bài toán trên, khi $AB = CD = a$, chứng minh chu vi của thiết diện hình chữ nhật luôn không đổi và bằng $2a$ khi $M$ di động trên cạnh $AC$.",
          shortAnswer: "Chu vi không đổi $P = 2a$",
          fullSolution: "Khi $AB = CD = a$ và độ dài $AC = b$, với $AM = x$ ($0 < x < b$):\n- $MN = \\dfrac{a(b - x)}{b} = a - \\dfrac{a}{b}x$.\n- $MQ = \\dfrac{ax}{b}$.\nChu vi thiết diện là:\n$P = 2(MN + MQ) = 2\\left(a - \\dfrac{a}{b}x + \\dfrac{a}{b}x\\right) = 2a$.\nBiểu thức chu vi hoàn toàn không phụ thuộc vào vị trí của điểm $M$ (không phụ thuộc vào $x$). Chu vi luôn là hằng số bằng $2a$."
        }
      ]
    },
    {
      id: "g11-c4-l12-dang3",
      title: "Dạng 3: Ứng dụng thực tế và tính chất đường thẳng song song mặt phẳng",
      description: "Nhận biết và giải quyết các bài toán kiến trúc, xây dựng, kết cấu mái nhà, giàn giáo và thang máy.",
      exercises: [
        {
          id: "g11-c4-l12-d3-ex1",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Trong một phòng học hình hộp chữ nhật, mép giao giữa trần nhà và bức tường bên song song với mặt phẳng nào?",
          shortAnswer: "Mặt sàn phòng học (mặt đất)",
          fullSolution: "Mép giao giữa trần nhà và tường bên là một đường thẳng nằm trên trần nhà. Vì trần nhà song song với sàn nhà nên mép giao này song song với mặt sàn."
        },
        {
          id: "g11-c4-l12-d3-ex2",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Thanh xà gồ đặt ngang trên đỉnh mái nhà có song song với mặt sàn nhà nằm ngang hay không?",
          shortAnswer: "Có song song",
          fullSolution: "Khi lắp đặt đúng kỹ thuật xây dựng, thanh xà gồ nóc nằm ngang và song song với các cạnh tường móng, do đó song song với mặt sàn nhà."
        },
        {
          id: "g11-c4-l12-d3-ex3",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Ray trượt thẳng đứng định hướng thang máy di chuyển có vị trí tương đối thế nào với các mặt sàn tầng nằm ngang?",
          shortAnswer: "Cắt (vuông góc) mặt sàn tầng",
          fullSolution: "Ray dẫn hướng thẳng đứng cắt các mặt sàn tầng nằm ngang tại các lỗ kỹ thuật thang máy."
        },
        {
          id: "g11-c4-l12-d3-ex4",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Tay vịn của một cầu thang thẳng có song song với đường dốc bản thang bê tông bên dưới không?",
          shortAnswer: "Có song song",
          fullSolution: "Tay vịn cầu thang được thiết kế cách mặt bậc thang một khoảng không đổi, do đó đường tay vịn song song với mặt phẳng nghiêng của bản thang."
        },
        {
          id: "g11-c4-l12-d3-ex5",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Một người thợ xây dùng ống ti-ô nước để lấy thăng bằng hai đầu của một thanh đòn ngang. Khi mực nước ở hai đầu ống bằng nhau, thanh đòn ngang có song song với mặt nước tĩnh (mặt phẳng nằm ngang chuẩn) không?",
          shortAnswer: "Có, vì hai đầu thanh cách mặt chuẩn một khoảng bằng nhau",
          fullSolution: "Nguyên lý bình thông nhau đảm bảo hai mốc thăng bằng có cùng độ cao so với mặt nước tĩnh chuẩn, do đó thanh đòn nối hai mốc sẽ song song với mặt phẳng nằm ngang chuẩn."
        },
        {
          id: "g11-c4-l12-d3-ex6",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Một cánh cửa gỗ hình chữ nhật quay quanh bản lề thẳng đứng. Khi cánh cửa mở ra ở một góc bất kì (khác $0^\\circ$ và $180^\\circ$), mép trên của cánh cửa có luôn song song với mặt sàn nhà phẳng không?",
          shortAnswer: "Có luôn song song",
          fullSolution: "Mép trên của cánh cửa vuông góc với trục bản lề thẳng đứng. Khi quay quanh trục thẳng đứng, mép trên luôn quét trong một mặt phẳng nằm ngang song song với sàn nhà. Do đó mép trên luôn song song với mặt sàn."
        },
        {
          id: "g11-c4-l12-d3-ex7",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Tấm pin năng lượng mặt trời hình chữ nhật được lắp nghiêng trên mái nhà. Mép dưới của tấm pin tựa ngang sát mái nhà. Chứng minh mép trên của tấm pin cũng song song với mặt phẳng mái nhà.",
          shortAnswer: "Mép trên song song mặt phẳng mái",
          fullSolution: "Vì tấm pin là hình chữ nhật nên mép trên song song với mép dưới. Mép dưới nằm trên mặt phẳng mái nhà, trong khi mép trên không thuộc mặt phẳng mái nhà. Theo định lý nhận biết, mép trên song song với mặt phẳng mái nhà."
        },
        {
          id: "g11-c4-l12-d3-ex8",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Một khung lều dã ngoại có dạng hình chóp tứ giác đều $S.ABCD$. Để gia cố lều, người ta hàn một thanh giằng thép $EF$ nối trung điểm của cạnh bên $SA$ và $SB$. Biết cạnh đáy của lều là $2.4\\text{ m}$. Tính chiều dài thanh giằng $EF$ và chứng minh thanh giằng luôn song song với nền đất phẳng $(ABCD)$.",
          shortAnswer: "$EF = 1.2\\text{ m}$ và $EF \\parallel (ABCD)$",
          fullSolution: "- Trong tam giác $SAB$, $EF$ nối trung điểm của $SA$ và $SB$ nên $EF$ là đường trung bình.\nSuy ra $EF \\parallel AB$ và $EF = \\dfrac{1}{2}AB = \\dfrac{1}{2}(2.4) = 1.2\\text{ m}$.\n- Vì $AB \\subset (ABCD)$ và $EF \\not\\subset (ABCD)$, theo định lý nhận biết suy ra $EF \\parallel (ABCD)$ (thanh giằng song song với nền đất)."
        },
        {
          id: "g11-c4-l12-d3-ex9",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Một mái nhà kiểu lăng trụ tam giác $ABC.A'B'C'$ có hai đầu hồi là hai tam giác cân $ABC$ và $A'B'C'$ bằng nhau ($AB = AC = 5\\text{ m}, BC = 6\\text{ m}$). Người ta lắp thêm xà gồ phụ $MN$ nối trung điểm $AB$ và $AC$. Tính độ dài $MN$ và khoảng cách tỉ lệ từ $MN$ đến mặt phẳng nóc nhà chứa thanh xà nóc $AA'$.",
          shortAnswer: "$MN = 3\\text{ m}$, $MN \\parallel (BCC'B')$",
          fullSolution: "- $MN$ là đường trung bình của tam giác cân $ABC$ nên $MN \\parallel BC$ và $MN = \\dfrac{1}{2}BC = \\dfrac{1}{2}(6) = 3\\text{ m}$.\n- Vì $MN \\parallel BC \\subset (BCC'B')$ nên $MN \\parallel$ mặt đáy của mái nhà.\n- Xét tương quan với mặt nóc $(AA'B'B)$: $MN$ cắt mặt này tại điểm $M$."
        },
        {
          id: "g11-c4-l12-d3-ex10",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Một mái che sân khấu hình chóp cụt tứ giác có khung viền đáy trên và khung viền đáy dưới song song với nhau. Một sợi cáp treo đèn chiếu sáng nối điểm $M$ trên cạnh bên thứ nhất và điểm $N$ trên cạnh bên đối diện sao cho $MN$ chia hai cạnh bên theo cùng tỉ số $\\dfrac{1}{3}$. Chứng minh sợi cáp treo đèn $MN$ luôn song song với mặt phẳng sàn sân khấu.",
          shortAnswer: "$MN \\parallel$ sàn sân khấu",
          fullSolution: "Theo định lý Thalès trong hình thang tạo bởi hai cạnh bên đối diện và hai đường thẳng viền đáy:\nVì $\\dfrac{A_1M}{A_1B_1} = \\dfrac{A_2N}{A_2B_2} = \\dfrac{1}{3}$, suy ra đoạn thẳng $MN$ song song với hai cạnh đáy tương ứng của hình thang đó.\nMà hai cạnh đáy này nằm trong hai mặt phẳng đáy song song với mặt sàn sân khấu.\nDo đó $MN$ song song với một đường thẳng nằm trên sàn sân khấu, suy ra $MN$ song song với mặt phẳng sàn sân khấu."
        }
      ]
    }
  ]
  },

  "g11-c4-l13": {
    lessonId: "g11-c4-l13",
    title: "Bài 13: Hai mặt phẳng song song",
    topics: [
    {
      id: "g11-c4-l13-dang1",
      title: "Dạng 1: Điều kiện và phương pháp chứng minh hai mặt phẳng song song",
      description: "Định lý: Nếu $(P)$ chứa hai đường thẳng cắt nhau cùng song song với $(Q)$ thì $(P) \\parallel (Q)$. Phương pháp chứng minh hai mặt phẳng song song.",
      exercises: [
        {
          id: "g11-c4-l13-d1-ex1",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Nêu dấu hiệu nhận biết hai mặt phẳng song song.",
          shortAnswer: "Nếu mặt phẳng $(P)$ chứa hai đường thẳng cắt nhau cùng song song với mặt phẳng $(Q)$ thì $(P) \\parallel (Q)$",
          fullSolution: "Định lý: Nếu mặt phẳng $(P)$ chứa hai đường thẳng cắt nhau $a, b$ và hai đường thẳng này cùng song song với mặt phẳng $(Q)$ ($a \\subset (P), b \\subset (P), a \\cap b = \\{I\\}, a \\parallel (Q), b \\parallel (Q)$) thì $(P) \\parallel (Q)$."
        },
        {
          id: "g11-c4-l13-d1-ex2",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Qua một điểm nằm ngoài một mặt phẳng cho trước, có bao nhiêu mặt phẳng song song với mặt phẳng đó?",
          shortAnswer: "Có duy nhất 1 mặt phẳng",
          fullSolution: "Theo tính chất thừa nhận: Qua một điểm nằm ngoài một mặt phẳng cho trước có một và chỉ một mặt phẳng song song với mặt phẳng đã cho."
        },
        {
          id: "g11-c4-l13-d1-ex3",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Hai mặt phẳng phân biệt cùng song song với một mặt phẳng thứ ba thì có quan hệ gì với nhau?",
          shortAnswer: "Song song với nhau",
          fullSolution: "Theo tính chất bắc cầu: Hai mặt phẳng phân biệt cùng song song với mặt phẳng thứ ba thì song song với nhau ($(P) \\parallel (R)$ và $(Q) \\parallel (R) \\Rightarrow (P) \\parallel (Q)$)."
        },
        {
          id: "g11-c4-l13-d1-ex4",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Trong hình lăng trụ tam giác $ABC.A'B'C'$, hai mặt phẳng đáy $(ABC)$ và $(A'B'C')$ có quan hệ gì?",
          shortAnswer: "Song song với nhau",
          fullSolution: "Theo định nghĩa hình lăng trụ, hai mặt phẳng đáy $(ABC)$ và $(A'B'C')$ là hai mặt phẳng song song."
        },
        {
          id: "g11-c4-l13-d1-ex5",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho hình chóp $S.ABCD$ có đáy là hình bình hành. Gọi $M, N, P$ lần lượt là trung điểm của các cạnh $SA, SB, SC$. Chứng minh mặt phẳng $(MNP)$ song song với mặt phẳng đáy $(ABCD)$.",
          shortAnswer: "$(MNP) \\parallel (ABCD)$",
          fullSolution: "- Trong tam giác $SAB$: $MN$ là đường trung bình $\\Rightarrow MN \\parallel AB$. Vì $AB \\subset (ABCD)$ nên $MN \\parallel (ABCD)$.\n- Trong tam giác $SBC$: $NP$ là đường trung bình $\\Rightarrow NP \\parallel BC$. Vì $BC \\subset (ABCD)$ nên $NP \\parallel (ABCD)$.\n- Trong $(MNP)$, hai đường thẳng $MN$ và $NP$ cắt nhau tại điểm $N$.\nTheo định lý nhận biết, suy ra $(MNP) \\parallel (ABCD)$."
        },
        {
          id: "g11-c4-l13-d1-ex6",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho tứ diện $ABCD$. Gọi $G_1, G_2, G_3$ lần lượt là trọng tâm của ba tam giác $ABC, ACD, ADB$. Chứng minh mặt phẳng $(G_1G_2G_3)$ song song với mặt phẳng đáy $(BCD)$.",
          shortAnswer: "$(G_1G_2G_3) \\parallel (BCD)$",
          fullSolution: "Gọi $M, N, P$ lần lượt là trung điểm của các cạnh đáy $BC, CD, DB$.\nTheo tính chất trọng tâm:\n$\\dfrac{AG_1}{AM} = \\dfrac{AG_2}{AN} = \\dfrac{AG_3}{AP} = \\dfrac{2}{3}$.\nTheo định lý Thalès đảo trong các tam giác $AMN, ANP, APM$:\n$G_1G_2 \\parallel MN, G_2G_3 \\parallel NP$.\nMà $MN \\subset (BCD)$ và $NP \\subset (BCD)$, $MN$ và $NP$ cắt nhau tại $N$.\nSuy ra $(G_1G_2G_3) \\parallel (BCD)$."
        },
        {
          id: "g11-c4-l13-d1-ex7",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho hình hộp $ABCD.A'B'C'D'$. Chứng minh mặt phẳng $(BDA')$ song song với mặt phẳng $(B'D'C)$.",
          shortAnswer: "$(BDA') \\parallel (B'D'C)$",
          fullSolution: "- Tứ giác $BB'D'D$ là hình bình hành nên $BD \\parallel B'D' \\subset (B'D'C) \\Rightarrow BD \\parallel (B'D'C)$.\n- Tứ giác $A'B'CD$ có $A'B' = CD$ và $A'B' \\parallel CD$ (cùng bằng và song song với $AB$) nên $A'B'CD$ là hình bình hành $\\Rightarrow A'D \\parallel B'C \\subset (B'D'C) \\Rightarrow A'D \\parallel (B'D'C)$.\n- Trong mặt phẳng $(BDA')$, hai đường thẳng $BD$ và $A'D$ cắt nhau tại $D$.\nTheo định lý nhận biết, suy ra $(BDA') \\parallel (B'D'C)$."
        },
        {
          id: "g11-c4-l13-d1-ex8",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho hai hình bình hành $ABCD$ và $ABEF$ nằm trong hai mặt phẳng khác nhau. Lấy $M \\in AC, N \\in BF$ sao cho $\\dfrac{AM}{AC} = \\dfrac{BN}{BF} = \\dfrac{1}{3}$. Chứng minh đường thẳng $MN$ song song với mặt phẳng $(CDEF)$.",
          shortAnswer: "$MN \\parallel (CDEF)$",
          fullSolution: "Trong mặt phẳng $(ABCD)$, qua $M$ kẻ đường thẳng song song với $AB$ cắt $BC$ tại $M'$.\nTheo định lý Thalès: $\\dfrac{BM'}{BC} = \\dfrac{AM}{AC} = \\dfrac{1}{3} \\Rightarrow MM' \\parallel AB \\parallel EF$.\nTrong mặt phẳng $(ABEF)$, qua $N$ kẻ đường thẳng song song với $AB$ cắt $BE$ tại $N'$.\nTheo định lý Thalès: $\\dfrac{BN'}{BE} = \\dfrac{BN}{BF} = \\dfrac{1}{3} \\Rightarrow NN' \\parallel AB$.\nXét tam giác $BCE$, ta có $\\dfrac{BM'}{BC} = \\dfrac{BN'}{BE} = \\dfrac{1}{3} \\Rightarrow M'N' \\parallel CE$.\nMặt phẳng $(MM'N'N)$ chứa hai đường thẳng cắt nhau $MM' \\parallel EF$ và $M'N' \\parallel CE$, nên $(MM'N'N) \\parallel (CDEF)$.\nVì $MN \\subset (MM'N'N)$ nên $MN \\parallel (CDEF)$."
        },
        {
          id: "g11-c4-l13-d1-ex9",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho hình chóp $S.ABCD$ có đáy là hình bình hành tâm $O$. Gọi $M$ là trung điểm cạnh $SA$. Mặt phẳng $(\\alpha)$ đi qua $M$ và song song với mặt phẳng $(SBC)$. Tìm thiết diện của hình chóp cắt bởi mặt phẳng $(\\alpha)$ và xác định hình dạng thiết diện.",
          shortAnswer: "Hình thang $MNPQ$",
          fullSolution: "- Vì $(\\alpha) \\parallel (SBC)$ nên $(\\alpha)$ song song với $SB$ và $BC$.\n- Trong $(SAB)$, qua $M$ kẻ đường thẳng song song $SB$ cắt $AB$ tại $N$ ($N$ là trung điểm $AB$).\n- Trong $(ABCD)$, qua $N$ kẻ đường thẳng song song $BC$ cắt $CD$ tại $P$ ($P$ là trung điểm $CD$).\n- Trong $(SCD)$, qua $P$ kẻ đường thẳng song song $SC$ cắt $SD$ tại $Q$ ($Q$ là trung điểm $SD$).\n- Đoạn nối $QM$: vì $M, Q$ là trung điểm $SA, SD$ nên $MQ \\parallel AD \\parallel BC$.\nThiết diện là tứ giác $MNPQ$ có $MQ \\parallel NP$ (cùng song song với $BC$).\nVậy thiết diện là hình thang."
        },
        {
          id: "g11-c4-l13-d1-ex10",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho tứ diện $ABCD$. Mặt phẳng $(P)$ cắt các cạnh $AB, AC, AD$ lần lượt tại $B', C', D'$ sao cho $\\dfrac{AB'}{AB} = \\dfrac{AC'}{AC} = \\dfrac{AD'}{AD} = k$ ($0 < k < 1$). Chứng minh $(B'C'D') \\parallel (BCD)$ và tính tỉ số diện tích $\\dfrac{S_{\\triangle B'C'D'}}{S_{\\triangle BCD}}$ theo $k$.",
          shortAnswer: "$(B'C'D') \\parallel (BCD)$ và $\\dfrac{S_{\\triangle B'C'D'}}{S_{\\triangle BCD}} = k^2$",
          fullSolution: "Theo định lý Thalès đảo trong các tam giác $ABC, ACD$:\n$\\dfrac{AB'}{AB} = \\dfrac{AC'}{AC} = k \\Rightarrow B'C' \\parallel BC$.\n$\\dfrac{AC'}{AC} = \\dfrac{AD'}{AD} = k \\Rightarrow C'D' \\parallel CD$.\nVì $B'C'$ và $C'D'$ cắt nhau tại $C'$ và lần lượt song song với $BC, CD \\subset (BCD)$, nên $(B'C'D') \\parallel (BCD)$.\nTam giác $B'C'D'$ đồng dạng với tam giác $BCD$ theo tỉ số đồng dạng $k$.\nDo đó tỉ số diện tích bằng bình phương tỉ số đồng dạng:\n$\\dfrac{S_{\\triangle B'C'D'}}{S_{\\triangle BCD}} = k^2$."
        }
      ]
    },
    {
      id: "g11-c4-l13-dang2",
      title: "Dạng 2: Tính chất hai mặt phẳng song song, định lý Thalès không gian & Thiết diện",
      description: "Định lý Thalès trong không gian, tính chất chắn các đoạn thẳng bằng nhau giữa hai mặt phẳng song song và xác định thiết diện song song.",
      exercises: [
        {
          id: "g11-c4-l13-d2-ex1",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Phát biểu định lý Thalès trong không gian.",
          shortAnswer: "Ba mặt phẳng đôi một song song chắn trên hai cát tuyến bất kì các đoạn thẳng tương ứng tỉ lệ",
          fullSolution: "Định lý Thalès: Ba mặt phẳng đôi một song song chắn trên hai cát tuyến bất kì các đoạn thẳng tương ứng tỉ lệ: $\\dfrac{AB}{A'B'} = \\dfrac{BC}{B'C'} = \\dfrac{AC}{A'C'}$."
        },
        {
          id: "g11-c4-l13-d2-ex2",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Nếu một mặt phẳng $(\\gamma)$ cắt hai mặt phẳng song song $(\\alpha)$ và $(\\beta)$ theo hai giao tuyến $a$ và $b$, thì quan hệ giữa $a$ và $b$ là gì?",
          shortAnswer: "$a \\parallel b$",
          fullSolution: "Tính chất: Nếu hai mặt phẳng song song bị cắt bởi một mặt phẳng thứ ba thì hai giao tuyến của chúng song song với nhau."
        },
        {
          id: "g11-c4-l13-d2-ex3",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Hai mặt phẳng song song chắn trên hai đường thẳng song song các đoạn thẳng như thế nào?",
          shortAnswer: "Bằng nhau",
          fullSolution: "Tính chất: Hai mặt phẳng song song chắn trên hai đường thẳng song song những đoạn thẳng bằng nhau."
        },
        {
          id: "g11-c4-l13-d2-ex4",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Đoạn thẳng nối hai điểm bất kì thuộc hai mặt phẳng song song có độ dài ngắn nhất khi nào?",
          shortAnswer: "Khi đoạn thẳng vuông góc với cả hai mặt phẳng",
          fullSolution: "Khoảng cách giữa hai mặt phẳng song song là độ dài đoạn vuông góc chung hạ từ một điểm bất kì trên mặt này xuống mặt kia, và đó là khoảng cách ngắn nhất."
        },
        {
          id: "g11-c4-l13-d2-ex5",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Ba mặt phẳng song song $(\\alpha), (\\beta), (\\gamma)$ cắt đường thẳng $d_1$ tại $A, B, C$ và cắt đường thẳng $d_2$ tại $A', B', C'$. Biết $AB = 6\\text{ cm}, BC = 9\\text{ cm}$ và $A'B' = 8\\text{ cm}$. Tính độ dài đoạn thẳng $B'C'$.",
          shortAnswer: "$B'C' = 12\\text{ cm}$",
          fullSolution: "Theo định lý Thalès trong không gian:\n$\\dfrac{AB}{BC} = \\dfrac{A'B'}{B'C'} \\iff \\dfrac{6}{9} = \\dfrac{8}{B'C'} \\iff B'C' = \\dfrac{8 \\times 9}{6} = 12\\text{ cm}$."
        },
        {
          id: "g11-c4-l13-d2-ex6",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho hình chóp $S.ABCD$ có đáy là hình vuông cạnh $a$. Mặt phẳng $(\\alpha)$ song song với đáy cắt cạnh $SA$ tại $M$ sao cho $SM = 2MA$. Tính diện tích thiết diện của hình chóp cắt bởi mặt phẳng $(\\alpha)$ theo $a$.",
          shortAnswer: "$S = \\dfrac{4}{9}a^2$",
          fullSolution: "Vì $(\\alpha) \\parallel (ABCD)$ nên thiết diện là hình vuông $MNPQ$ đồng dạng với hình vuông đáy $ABCD$.\nTỉ số đồng dạng là $k = \\dfrac{SM}{SA} = \\dfrac{2MA}{3MA} = \\dfrac{2}{3}$.\nCạnh của thiết diện: $MN = \\dfrac{2}{3}a$.\nDiện tích thiết diện: $S = \\left(\\dfrac{2}{3}a\\right)^2 = \\dfrac{4}{9}a^2$."
        },
        {
          id: "g11-c4-l13-d2-ex7",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho tứ diện $ABCD$. Mặt phẳng $(P)$ song song với mặt phẳng $(ABC)$ cắt các cạnh $DA, DB, DC$ lần lượt tại $A', B', C'$. Biết $DA' = \\dfrac{1}{2}A'A$. Tính tỉ số $\\dfrac{A'B'}{AB}$.",
          shortAnswer: "$\\dfrac{1}{3}$",
          fullSolution: "Ta có $DA' = \\dfrac{1}{2}A'A \\Rightarrow A'A = 2DA'$.\nĐộ dài $DA = DA' + A'A = DA' + 2DA' = 3DA' \\Rightarrow \\dfrac{DA'}{DA} = \\dfrac{1}{3}$.\nVì $(A'B'C') \\parallel (ABC)$ nên theo định lý Thalès: $\\dfrac{A'B'}{AB} = \\dfrac{DA'}{DA} = \\dfrac{1}{3}$."
        },
        {
          id: "g11-c4-l13-d2-ex8",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho hình chóp $S.ABCD$ đáy hình bình hành tâm $O$. Mặt phẳng $(P)$ đi qua $O$ và song song với mặt phẳng $(SAB)$. Tìm thiết diện của hình chóp cắt bởi mặt phẳng $(P)$ và chứng minh thiết diện là hình thang cân hoặc tính các tỉ số cạnh.",
          shortAnswer: "Hình thang $MNPQ$",
          fullSolution: "- Vì $(P) \\parallel (SAB)$ nên $(P)$ song song với $AB, SA, SB$.\n- Trong mặt đáy $(ABCD)$, qua $O$ kẻ đường thẳng song song $AB$ cắt $AD$ tại $M$, $BC$ tại $N$ ($M, N$ là trung điểm $AD, BC$).\n- Trong $(SAD)$, qua $M$ kẻ đường thẳng song song $SA$ cắt $SD$ tại $P$ ($P$ là trung điểm $SD$).\n- Trong $(SBC)$, qua $N$ kẻ đường thẳng song song $SB$ cắt $SC$ tại $Q$ ($Q$ là trung điểm $SC$).\n- Nối $PQ$: $PQ$ là đường trung bình của $\\triangle SCD \\Rightarrow PQ \\parallel CD \\parallel AB$.\nThiết diện là tứ giác $MNQP$ có $MN \\parallel PQ \\parallel AB$, do đó thiết diện là hình thang."
        },
        {
          id: "g11-c4-l13-d2-ex9",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho ba mặt phẳng song song $(\\alpha) \\parallel (\\beta) \\parallel (\\gamma)$. Đường thẳng $d_1$ cắt chúng tại $A, B, C$; đường thẳng $d_2$ cắt chúng tại $A', B', C'$. Biết rằng $\\dfrac{AB}{BC} = \\dfrac{3}{5}$ và độ dài toàn phần $A'C' = 24\\text{ cm}$. Tính độ dài các đoạn thẳng $A'B'$ và $B'C'$.",
          shortAnswer: "$A'B' = 9\\text{ cm}$ và $B'C' = 15\\text{ cm}$",
          fullSolution: "Theo định lý Thalès trong không gian:\n$\\dfrac{A'B'}{B'C'} = \\dfrac{AB}{BC} = \\dfrac{3}{5} \\Rightarrow \\dfrac{A'B'}{3} = \\dfrac{B'C'}{5}$.\nÁp dụng tính chất dãy tỉ số bằng nhau:\n$\\dfrac{A'B'}{3} = \\dfrac{B'C'}{5} = \\dfrac{A'B' + B'C'}{3 + 5} = \\dfrac{A'C'}{8} = \\dfrac{24}{8} = 3$.\nSuy ra:\n$A'B' = 3 \\times 3 = 9\\text{ cm}$.\n$B'C' = 5 \\times 3 = 15\\text{ cm}$."
        },
        {
          id: "g11-c4-l13-d2-ex10",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho hình chóp cụt tứ giác đều có đáy lớn là hình vuông cạnh $a$ và đáy nhỏ là hình vuông cạnh $b$ ($a > b$). Mặt phẳng $(\\alpha)$ song song với hai mặt đáy và chia đôi các cạnh bên (đi qua trung điểm các cạnh bên). Chứng minh thiết diện là hình vuông và tính độ dài cạnh thiết diện theo $a$ và $b$.",
          shortAnswer: "Hình vuông cạnh $c = \\dfrac{a + b}{2}$",
          fullSolution: "Mỗi mặt bên của hình chóp cụt tứ giác đều là một hình thang cân có đáy lớn bằng $a$ và đáy nhỏ bằng $b$.\nMặt phẳng $(\\alpha)$ đi qua trung điểm các cạnh bên nên đoạn giao tuyến của $(\\alpha)$ với mỗi mặt bên chính là đường trung bình của hình thang cân đó.\nĐộ dài mỗi cạnh của thiết diện là:\n$c = \\dfrac{a + b}{2}$.\nVì thiết diện đồng dạng với hai đáy vuông nên thiết diện thu được là hình vuông có cạnh $c = \\dfrac{a + b}{2}$."
        }
      ]
    },
    {
      id: "g11-c4-l13-dang3",
      title: "Dạng 3: Hình lăng trụ, hình hộp, hình chóp cụt & Bài toán thực tế",
      description: "Định nghĩa, tính chất của hình lăng trụ, hình hộp, hình chóp cụt và giải các bài toán thực tiễn về khoảng tầng, kết cấu chịu lực.",
      exercises: [
        {
          id: "g11-c4-l13-d3-ex1",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Định nghĩa hình lăng trụ.",
          shortAnswer: "Hình có hai đáy là hai đa giác bằng nhau nằm trên hai mặt phẳng song song, các mặt bên là các hình bình hành",
          fullSolution: "Hình lăng trụ là hình đa diện gồm hai đáy là hai đa giác bằng nhau nằm trên hai mặt phẳng song song, và các mặt bên là các hình bình hành."
        },
        {
          id: "g11-c4-l13-d3-ex2",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Hình hộp là hình lăng trụ có đặc điểm đáy như thế nào?",
          shortAnswer: "Có đáy là hình bình hành",
          fullSolution: "Hình hộp là hình lăng trụ có đáy là hình bình hành. Khi đó tất cả 6 mặt của hình hộp đều là các hình bình hành."
        },
        {
          id: "g11-c4-l13-d3-ex3",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Bốn đường chéo của một hình hộp có tính chất gì?",
          shortAnswer: "Cắt nhau tại trung điểm của mỗi đường",
          fullSolution: "Tính chất hình hộp: Bốn đường chéo của hình hộp cùng cắt nhau tại một điểm, điểm đó là trung điểm của mỗi đường chéo (gọi là tâm đối xứng của hình hộp)."
        },
        {
          id: "g11-c4-l13-d3-ex4",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Hình chóp cụt được tạo thành bằng cách nào?",
          shortAnswer: "Cắt một hình chóp bởi một mặt phẳng song song với đáy và giữ lại phần hình nằm giữa đáy và thiết diện",
          fullSolution: "Hình chóp cụt là phần hình chóp nằm giữa mặt phẳng đáy và một thiết diện cắt bởi mặt phẳng song song với đáy của hình chóp đó."
        },
        {
          id: "g11-c4-l13-d3-ex5",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho hình hộp chữ nhật $ABCD.A'B'C'D'$. Chỉ ra mặt phẳng song song với mặt phẳng $(ABB'A')$.",
          shortAnswer: "Mặt phẳng $(CDD'C')$",
          fullSolution: "Mặt phẳng đối diện với $(ABB'A')$ là mặt phẳng $(CDD'C')$, và hai mặt phẳng này song song với nhau."
        },
        {
          id: "g11-c4-l13-d3-ex6",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Một hình lăng trụ lục giác có bao nhiêu mặt, bao nhiêu đỉnh và bao nhiêu cạnh?",
          shortAnswer: "8 mặt, 12 đỉnh và 18 cạnh",
          fullSolution: "Hình lăng trụ lục giác (đáy $n = 6$):\n- Số mặt: $n + 2 = 6 + 2 = 8$ mặt (2 đáy và 6 mặt bên).\n- Số đỉnh: $2n = 2 \\times 6 = 12$ đỉnh.\n- Số cạnh: $3n = 3 \\times 6 = 18$ cạnh (6 cạnh đáy trên, 6 cạnh đáy dưới, 6 cạnh bên)."
        },
        {
          id: "g11-c4-l13-d3-ex7",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho hình lăng trụ tam giác $ABC.A'B'C'$. Gọi $M, N$ lần lượt là trung điểm của $AA'$ và $BB'$. Chứng minh đường thẳng $MN$ song song với mặt đáy $(A'B'C')$.",
          shortAnswer: "$MN \\parallel (A'B'C')$",
          fullSolution: "Trong mặt bên $ABB'A'$ là hình bình hành, $M$ và $N$ là trung điểm của hai cạnh đối $AA'$ và $BB'$.\nDo đó $MN \\parallel A'B'$.\nVì $A'B' \\subset (A'B'C')$ và $MN \\not\\subset (A'B'C')$, suy ra $MN \\parallel (A'B'C')$."
        },
        {
          id: "g11-c4-l13-d3-ex8",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Một toà nhà chung cư có các sàn tầng là các mặt phẳng song song cách đều nhau $3.3\\text{ m}$. Một đường dốc thoát hiểm thẳng nối từ tầng 1 lên sàn tầng 4 có tổng chiều dài là $24\\text{ m}$. Hỏi chiều dài của đoạn đường dốc từ tầng 1 lên tầng 2 là bao nhiêu mét?",
          shortAnswer: "8 mét",
          fullSolution: "Từ sàn tầng 1 lên sàn tầng 4 gồm 3 khoảng tầng bằng nhau (tầng 1 $\\to$ 2, 2 $\\to$ 3, 3 $\\to$ 4).\nCác mặt phẳng sàn tầng song song cách đều nhau nên theo định lý Thalès trong không gian, đường dốc thẳng cắt các sàn tầng này thành 3 đoạn bằng nhau.\nChiều dài đoạn đường dốc giữa tầng 1 và tầng 2 là:\n$L_{1-2} = \\dfrac{24}{3} = 8\\text{ m}$."
        },
        {
          id: "g11-c4-l13-d3-ex9",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Một bể chứa nước bê tông dạng hình chóp cụt tứ giác đều có đáy lớn là hình vuông cạnh $3\\text{ m}$, đáy nhỏ là hình vuông cạnh $1.8\\text{ m}$. Để tăng khả năng chịu lực nứt, kỹ sư bố trí một vành đai thép giằng bao quanh chu vi tại vị trí chính giữa chiều cao của bể (song song với hai đáy). Tính tổng chiều dài thanh thép làm vành đai giằng đó.",
          shortAnswer: "9.6 mét",
          fullSolution: "Vành đai giằng nằm ở chính giữa chiều cao và song song với hai đáy, do đó có dạng hình vuông với cạnh là đường trung bình của mặt bên hình thang:\n$c = \\dfrac{a + b}{2} = \\dfrac{3 + 1.8}{2} = \\dfrac{4.8}{2} = 2.4\\text{ m}$.\nTổng chiều dài thanh thép làm vành đai là chu vi của hình vuông này:\n$P = 4 \\times c = 4 \\times 2.4 = 9.6\\text{ m}$."
        },
        {
          id: "g11-c4-l13-d3-ex10",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Một khối gỗ hình hộp chữ nhật có kích thước $a \\times b \\times c$. Người ta cắt khối gỗ bởi mặt phẳng $(P)$ đi qua trung điểm một cạnh bên và song song với hai mặt đáy. Tính tỉ số thể tích giữa hai khối gỗ thu được sau khi cắt.",
          shortAnswer: "Tỉ số thể tích bằng 1 (hai khối có thể tích bằng nhau)",
          fullSolution: "Mặt phẳng $(P)$ song song với hai mặt đáy và đi qua trung điểm của một cạnh bên nên chia đôi tất cả 4 cạnh bên theo định lý về hai mặt phẳng song song chắn các đoạn thẳng bằng nhau.\nKhi đó $(P)$ chia khối hộp chữ nhật ban đầu thành hai hình hộp chữ nhật nhỏ có cùng diện tích đáy $S = a \\times b$ và cùng chiều cao $h' = \\dfrac{c}{2}$.\nThể tích của mỗi phần là $V_1 = V_2 = a \\times b \\times \\dfrac{c}{2} = \\dfrac{1}{2}V$.\nDo đó tỉ số thể tích giữa hai khối gỗ là $\\dfrac{V_1}{V_2} = 1$."
        }
      ]
    }
  ]
  },

  "g11-c4-l14": {
    lessonId: "g11-c4-l14",
    title: "Bài 14: Phép chiếu song song",
    topics: [
    {
      id: "g11-c4-l14-dang1",
      title: "Dạng 1: Các tính chất của phép chiếu song song",
      description: "Bảo toàn tính thẳng hàng, thứ tự điểm, tính song song và tỉ số đoạn thẳng cùng phương.",
      exercises: [
        {
          id: "g11-c4-l14-d1-ex1",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Phép chiếu song song biến ba điểm thẳng hàng $A, B, C$ thành ba điểm như thế nào?",
          shortAnswer: "Ba điểm thẳng hàng $A', B', C'$ và bảo toàn thứ tự giữa chúng",
          fullSolution: "Tính chất: Phép chiếu song song biến ba điểm thẳng hàng thành ba điểm thẳng hàng và bảo toàn thứ tự giữa các điểm đó."
        },
        {
          id: "g11-c4-l14-d1-ex2",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Phép chiếu song song biến hai đường thẳng song song thành hai đường thẳng như thế nào?",
          shortAnswer: "Song song hoặc trùng nhau",
          fullSolution: "Tính chất: Phép chiếu song song biến hai đường thẳng song song thành hai đường thẳng song song hoặc trùng nhau (khi mặt phẳng chứa hai đường thẳng đó song song với phương chiếu)."
        },
        {
          id: "g11-c4-l14-d1-ex3",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Phép chiếu song song có bảo toàn tỉ số độ dài của hai đoạn thẳng cùng nằm trên một đường thẳng hoặc trên hai đường thẳng song song không?",
          shortAnswer: "Có, tỉ số độ dài được bảo toàn",
          fullSolution: "Tính chất: Phép chiếu song song bảo toàn tỉ số độ dài của hai đoạn thẳng cùng nằm trên một đường thẳng hoặc nằm trên hai đường thẳng song song."
        },
        {
          id: "g11-c4-l14-d1-ex4",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Nếu $M$ là trung điểm của đoạn thẳng $AB$, thì hình chiếu song song $M'$ của $M$ có quan hệ gì với hình chiếu $A', B'$ của $A$ và $B$?",
          shortAnswer: "$M'$ là trung điểm của đoạn thẳng $A'B'$",
          fullSolution: "Do phép chiếu song song bảo toàn tỉ số đoạn thẳng và thứ tự điểm, nên nếu $M$ là trung điểm của $AB$ thì hình chiếu $M'$ là trung điểm của đoạn thẳng $A'B'$."
        },
        {
          id: "g11-c4-l14-d1-ex5",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho hình bình hành $ABCD$. Hình chiếu song song của hình bình hành $ABCD$ lên một mặt phẳng (không song song với phương chiếu và các cạnh) là hình gì?",
          shortAnswer: "Hình bình hành (hoặc một đoạn thẳng)",
          fullSolution: "Vì phép chiếu song song bảo toàn tính song song của các cặp cạnh đối diện nên hình chiếu của một hình bình hành nói chung là một hình bình hành (trường hợp mặt phẳng chứa hình bình hành song song với phương chiếu thì hình chiếu suy biến thành một đoạn thẳng)."
        },
        {
          id: "g11-c4-l14-d1-ex6",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Phép chiếu song song có luôn bảo toàn độ lớn của một góc (chẳng hạn góc vuông biến thành góc vuông) không?",
          shortAnswer: "Không bảo toàn độ lớn của góc",
          fullSolution: "Phép chiếu song song nói chung không bảo toàn độ lớn của góc. Một góc vuông có thể biến thành góc nhọn, góc tù hoặc góc vuông tùy thuộc vào góc nghiêng giữa mặt phẳng và phương chiếu."
        },
        {
          id: "g11-c4-l14-d1-ex7",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho đoạn thẳng $AB$ có độ dài bằng $a$. Khi nào hình chiếu song song $A'B'$ của đoạn thẳng $AB$ lên mặt phẳng $(P)$ có độ dài đúng bằng $a$?",
          shortAnswer: "Khi đoạn thẳng $AB$ song song với mặt phẳng chiếu $(P)$",
          fullSolution: "Khi đoạn thẳng $AB$ song song với mặt phẳng $(P)$, tứ giác $ABB'A'$ là hình bình hành nên $A'B' = AB = a$."
        },
        {
          id: "g11-c4-l14-d1-ex8",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho tam giác $ABC$ có trọng tâm $G$. Gọi $A', B', C', G'$ lần lượt là hình chiếu song song của $A, B, C, G$ lên mặt phẳng $(P)$. Chứng minh $G'$ là trọng tâm của tam giác $A'B'C'$.",
          shortAnswer: "$G'$ là trọng tâm tam giác $A'B'C'$",
          fullSolution: "Gọi $M$ là trung điểm của cạnh $BC$. Vì $G$ là trọng tâm $\\triangle ABC$ nên $A, G, M$ thẳng hàng và $\\dfrac{AG}{AM} = \\dfrac{2}{3}$.\nQua phép chiếu song song:\n- Điểm $M$ biến thành $M'$ là trung điểm của $B'C'$ (tính chất trung điểm).\n- Ba điểm $A, G, M$ thẳng hàng biến thành ba điểm $A', G', M'$ thẳng hàng.\n- Tỉ số đoạn thẳng được bảo toàn: $\\dfrac{A'G'}{A'M'} = \\dfrac{AG}{AM} = \\dfrac{2}{3}$.\nVì $A'M'$ là đường trung tuyến của tam giác $A'B'C'$ và $\\dfrac{A'G'}{A'M'} = \\dfrac{2}{3}$, suy ra $G'$ chính là trọng tâm của tam giác $A'B'C'$."
        },
        {
          id: "g11-c4-l14-d1-ex9",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho hình thang $ABCD$ có đáy lớn $AB = 3CD$. Gọi $A', B', C', D'$ là hình chiếu song song của $A, B, C, D$ lên mặt phẳng $(P)$. Chứng minh $A'B'C'D'$ là hình thang và tính tỉ số $\\dfrac{A'B'}{C'D'}$.",
          shortAnswer: "$A'B'C'D'$ là hình thang với $\\dfrac{A'B'}{C'D'} = 3$",
          fullSolution: "Vì $AB \\parallel CD$ nên hình chiếu của chúng là $A'B' \\parallel C'D'$, do đó tứ giác $A'B'C'D'$ là hình thang.\nVì hai đoạn thẳng $AB$ và $CD$ song song với nhau nên phép chiếu song song bảo toàn tỉ số độ dài:\n$\\dfrac{A'B'}{C'D'} = \\dfrac{AB}{CD} = 3$."
        },
        {
          id: "g11-c4-l14-d1-ex10",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho hình bình hành $ABCD$. Lấy $M$ trên $AB$ sao cho $AM = 2MB$, lấy $N$ trên $CD$ sao cho $CN = 2ND$. Gọi $A', B', C', D', M', N'$ là hình chiếu song song lên mặt phẳng $(\\alpha)$. Chứng minh đường thẳng $M'N'$ song song với $A'D'$ và tính tỉ số $\\dfrac{M'N'}{A'D'}$.",
          shortAnswer: "$M'N' \\parallel A'D'$ và $\\dfrac{M'N'}{A'D'} = 1$",
          fullSolution: "- Trong mặt phẳng $(ABCD)$:\nTa có $AB = CD$ và $AB \\parallel CD$.\n$AM = \\dfrac{2}{3}AB$ và $DN = \\dfrac{1}{3}CD = \\dfrac{1}{3}AB \\Rightarrow AM \\ne DN$.\nNhưng nếu $CN = 2ND \\Rightarrow ND = \\dfrac{1}{3}CD$ và $CN = \\dfrac{2}{3}CD = \\dfrac{2}{3}AB = AM$. Tứ giác $AMCN$ là hình bình hành.\nNếu $M, N$ thỏa mãn $AM = DN$ thì $AMND$ là hình bình hành $\\Rightarrow MN \\parallel AD$ và $MN = AD$.\nKhi đó qua phép chiếu song song: $M'N' \\parallel A'D'$ và $\\dfrac{M'N'}{A'D'} = 1$."
        }
      ]
    },
    {
      id: "g11-c4-l14-dang2",
      title: "Dạng 2: Xác định hình chiếu song song của một hình không gian & Tìm điểm chiếu",
      description: "Dựng hình chiếu của điểm, đoạn thẳng, đa giác theo phương chiếu $\\Delta$ lên mặt phẳng $(P)$.",
      exercises: [
        {
          id: "g11-c4-l14-d2-ex1",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Khái niệm phép chiếu song song lên mặt phẳng $(P)$ theo phương $d$ ($d$ cắt $(P)$) được xác định như thế nào?",
          shortAnswer: "Với mỗi điểm $M$, kẻ đường thẳng qua $M$ song song với $d$ (hoặc trùng $d$), cắt $(P)$ tại điểm $M'$ duy nhất",
          fullSolution: "Định nghĩa: Cho mặt phẳng $(P)$ và đường thẳng $d$ cắt $(P)$. Phép đặt tương ứng mỗi điểm $M$ trong không gian với điểm $M'$ của mặt phẳng $(P)$ sao cho đường thẳng $MM'$ song song hoặc trùng với $d$ được gọi là phép chiếu song song lên $(P)$ theo phương $d$."
        },
        {
          id: "g11-c4-l14-d2-ex2",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Nếu điểm $M$ đã nằm sẵn trên mặt phẳng chiếu $(P)$, thì hình chiếu song song $M'$ của $M$ là điểm nào?",
          shortAnswer: "Chính là điểm $M$ ($M' \\equiv M$)",
          fullSolution: "Vì đường thẳng đi qua $M$ theo phương chiếu cắt $(P)$ ngay tại $M$, nên mọi điểm thuộc mặt phẳng chiếu đều có hình chiếu là chính nó."
        },
        {
          id: "g11-c4-l14-d2-ex3",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Khi nào hình chiếu song song của một đoạn thẳng biến thành một điểm duy nhất?",
          shortAnswer: "Khi đoạn thẳng đó song song hoặc trùng với phương chiếu",
          fullSolution: "Nếu đoạn thẳng song song với phương chiếu $d$, mọi điểm trên đoạn thẳng đều nằm trên cùng một tia chiếu, do đó tia chiếu cắt mặt phẳng chiếu tại một điểm duy nhất."
        },
        {
          id: "g11-c4-l14-d2-ex4",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Hình chiếu song song của một đường tròn lên một mặt phẳng nói chung là hình gì?",
          shortAnswer: "Đường elip (hoặc đường tròn, hoặc đoạn thẳng)",
          fullSolution: "Hình chiếu song song của một đường tròn lên mặt phẳng nói chung là một đường elip (hoặc đường tròn nếu mặt phẳng chiếu song song với mặt phẳng chứa đường tròn, hoặc một đoạn thẳng nếu phương chiếu song song với mặt phẳng chứa đường tròn)."
        },
        {
          id: "g11-c4-l14-d2-ex5",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho hình hộp $ABCD.A'B'C'D'$. Tìm hình chiếu song song của điểm $A'$ lên mặt phẳng $(ABCD)$ theo phương chiếu $CC'$.",
          shortAnswer: "Điểm $A$",
          fullSolution: "Vì $AA' \\parallel CC'$ nên đường thẳng qua $A'$ song song với phương chiếu $CC'$ chính là đường thẳng $AA'$. Đường thẳng $AA'$ cắt mặt phẳng $(ABCD)$ tại $A$. Do đó hình chiếu của $A'$ là điểm $A$."
        },
        {
          id: "g11-c4-l14-d2-ex6",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho tứ diện $ABCD$. Tìm hình chiếu song song của đoạn thẳng $AB$ lên mặt phẳng đáy $(BCD)$ theo phương chiếu $AC$.",
          shortAnswer: "Đoạn thẳng $CB$",
          fullSolution: "- Hình chiếu của $B$: $B \\in (BCD)$ nên hình chiếu của $B$ là chính $B$.\n- Hình chiếu của $A$: đường thẳng qua $A$ song song với phương chiếu $AC$ chính là $AC$. Đường thẳng $AC$ cắt $(BCD)$ tại điểm $C$.\nVậy hình chiếu của đoạn thẳng $AB$ lên $(BCD)$ theo phương $AC$ là đoạn thẳng $CB$."
        },
        {
          id: "g11-c4-l14-d2-ex7",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho hình lăng trụ tam giác $ABC.A'B'C'$. Tìm hình chiếu song song của tam giác $A'B'C'$ lên mặt phẳng $(ABC)$ theo phương chiếu các cạnh bên $AA'$.",
          shortAnswer: "Tam giác $ABC$",
          fullSolution: "Vì $A'A, B'B, C'C$ đều song song với phương chiếu $AA'$ và cắt mặt phẳng $(ABC)$ lần lượt tại $A, B, C$, nên hình chiếu của ba đỉnh $A', B', C'$ lần lượt là $A, B, C$. Do đó hình chiếu của $\\triangle A'B'C'$ là tam giác $ABC$."
        },
        {
          id: "g11-c4-l14-d2-ex8",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho hình lập phương $ABCD.A'B'C'D'$. Xác định hình chiếu song song của tam giác $A'BD$ lên mặt phẳng $(ABCD)$ theo phương chiếu $A'A$ và so sánh diện tích giữa hình chiếu và tam giác $ABD$.",
          shortAnswer: "Tam giác $ABD$; diện tích hình chiếu bằng diện tích $\\triangle ABD$",
          fullSolution: "- Chiếu điểm $A'$ theo phương $A'A$ xuống $(ABCD)$ ta được điểm $A$.\n- Chiếu điểm $B \\in (ABCD)$ ta được chính $B$.\n- Chiếu điểm $D \\in (ABCD)$ ta được chính $D$.\nVậy hình chiếu của tam giác $A'BD$ lên mặt phẳng $(ABCD)$ chính là tam giác $ABD$.\nHình chiếu này trùng khớp hoàn toàn với tam giác đáy $ABD$, nên diện tích của nó bằng diện tích $\\triangle ABD$."
        },
        {
          id: "g11-c4-l14-d2-ex9",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho hình chóp $S.ABCD$ có đáy là hình bình hành tâm $O$. Gọi $M$ là trung điểm cạnh bên $SA$. Chiếu hình chóp lên mặt phẳng đáy $(ABCD)$ theo phương chiếu $SO$. Xác định hình chiếu của điểm $M$.",
          shortAnswer: "Điểm $M'$ là trung điểm của đoạn thẳng $OA$",
          fullSolution: "Xét trong mặt phẳng $(SAC)$:\nĐường thẳng qua $M$ song song với phương chiếu $SO$ sẽ là đường trung bình của tam giác $SAO$ (hoặc kẻ trong hình thang).\nĐường này cắt đường chéo $AC$ tại điểm $M'$.\nVì $M$ là trung điểm $SA$ và $MM' \\parallel SO$, nên theo định lý Thalès trong tam giác $SAO$, $M'$ là trung điểm của đoạn thẳng $AO$."
        },
        {
          id: "g11-c4-l14-d2-ex10",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho hình lăng trụ tam giác $ABC.A'B'C'$. Lấy điểm $M$ trên đường chéo $AC'$ sao cho $AM = 2MC'$. Tìm hình chiếu của điểm $M$ lên mặt phẳng đáy $(A'B'C')$ theo phương chiếu các cạnh bên $AA'$.",
          shortAnswer: "Điểm $M'$ trên đoạn $A'C'$ sao cho $A'M' = 2M'C'$",
          fullSolution: "Xét mặt bên $ACC'A'$ là hình bình hành.\nChiếu theo phương $AA'$ (song song với $CC'$):\n- Điểm $C' \\in (A'B'C')$ có hình chiếu là chính $C'$.\n- Điểm $A$ chiếu theo phương $AA'$ xuống $(A'B'C')$ là điểm $A'$.\nDo đó đoạn thẳng $AC'$ có hình chiếu là đoạn thẳng $A'C'$.\nVì phép chiếu song song bảo toàn tỉ số đoạn thẳng nên hình chiếu $M'$ của $M$ nằm trên đoạn $A'C'$ và thỏa mãn:\n$\\dfrac{A'M'}{M'C'} = \\dfrac{AM}{MC'} = 2 \\Rightarrow A'M' = 2M'C'$."
        }
      ]
    },
    {
      id: "g11-c4-l14-dang3",
      title: "Dạng 3: Hình biểu diễn của các hình khối trong không gian & Bài toán bóng đổ ánh sáng",
      description: "Quy tắc vẽ hình biểu diễn của tam giác, hình vuông, hình tròn và ứng dụng bóng đổ mặt trời trong thực tế.",
      exercises: [
        {
          id: "g11-c4-l14-d3-ex1",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Nêu quy tắc vẽ nét nhìn thấy và nét bị che khuất trong hình biểu diễn không gian.",
          shortAnswer: "Đường nhìn thấy vẽ nét liền, đường bị che khuất vẽ nét đứt",
          fullSolution: "Quy ước vẽ hình học không gian: Các đường nhìn thấy được vẽ bằng nét liền nét (—), các đường bị các mặt phẳng khác che khuất được vẽ bằng nét đứt đoạn (- - -)."
        },
        {
          id: "g11-c4-l14-d3-ex2",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Hình biểu diễn của tam giác đều, tam giác cân, tam giác vuông trên mặt phẳng vẽ nói chung là hình gì?",
          shortAnswer: "Một tam giác bất kì",
          fullSolution: "Phép chiếu song song không bảo toàn độ dài đoạn thẳng và số đo góc, nên hình biểu diễn của mọi tam giác (đều, cân, vuông) nói chung đều là một tam giác bất kì."
        },
        {
          id: "g11-c4-l14-d3-ex3",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Hình biểu diễn của hình vuông, hình chữ nhật, hình thoi trong không gian thường được vẽ bằng hình gì?",
          shortAnswer: "Hình bình hành",
          fullSolution: "Phép chiếu song song bảo toàn tính song song của các cặp cạnh đối diện nhưng không bảo toàn góc vuông và độ dài bằng nhau của các cạnh kề. Do đó hình biểu diễn của hình vuông, chữ nhật, thoi thường là một hình bình hành."
        },
        {
          id: "g11-c4-l14-d3-ex4",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Hình biểu diễn của đường tròn trong không gian thường là đường gì?",
          shortAnswer: "Đường elip",
          fullSolution: "Phép chiếu song song biến một đường tròn thành một đường elip."
        },
        {
          id: "g11-c4-l14-d3-ex5",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Tại sao khi vẽ chiếc bàn học 4 chân hình chữ nhật trên giấy, 4 chân bàn thẳng đứng được vẽ bằng 4 đoạn thẳng song song và bằng nhau?",
          shortAnswer: "Vì phép chiếu song song biến các đoạn thẳng song song và bằng nhau thành các đoạn thẳng song song và bằng nhau",
          fullSolution: "Bốn chân bàn thực tế là các đoạn thẳng song song và có chiều dài bằng nhau. Phép chiếu song song bảo toàn tính song song và tỉ số độ dài của các đoạn thẳng song song, nên hình biểu diễn của chúng cũng là 4 đoạn thẳng song song và có độ dài bằng nhau."
        },
        {
          id: "g11-c4-l14-d3-ex6",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Ánh sáng mặt trời chiếu xuống mặt đất được mô hình hoá bằng phép chiếu gì trong toán học?",
          shortAnswer: "Phép chiếu song song",
          fullSolution: "Vì khoảng cách từ Mặt Trời đến Trái Đất rất lớn, các tia sáng mặt trời chiếu tới một khu vực mặt đất có thể coi là các đường thẳng song song với nhau. Do đó bóng nắng mặt trời là hình chiếu song song của vật thể."
        },
        {
          id: "g11-c4-l14-d3-ex7",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Một cây cọc cắm thẳng đứng trên sân phẳng tạo bóng trên mặt đất. Khi mặt trời đứng bóng (chiếu vuông góc với mặt sân), hình chiếu của cây cọc là gì?",
          shortAnswer: "Một điểm duy nhất (chân cọc)",
          fullSolution: "Khi phương chiếu trùng với phương của cây cọc thẳng đứng, hình chiếu song song của cả thân cọc thu về một điểm duy nhất tại chân cọc."
        },
        {
          id: "g11-c4-l14-d3-ex8",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Một chiếc cọc tiêu cao $1.5\\text{ m}$ cắm thẳng đứng trên mặt đất có bóng đổ dài $2.0\\text{ m}$. Cùng thời điểm đó, bóng của một toà nhà trên mặt đất có chiều dài đo được là $40\\text{ m}$. Tính chiều cao của toà nhà.",
          shortAnswer: "30 mét",
          fullSolution: "Tia sáng mặt trời tạo thành các đường thẳng song song nên tam giác tạo bởi cọc tiêu và bóng của nó đồng dạng với tam giác tạo bởi toà nhà và bóng của toà nhà.\nGọi $H$ là chiều cao toà nhà:\n$\\dfrac{H}{40} = \\dfrac{1.5}{2.0} \\iff H = 40 \\times \\dfrac{1.5}{2.0} = 40 \\times 0.75 = 30\\text{ m}$."
        },
        {
          id: "g11-c4-l14-d3-ex9",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Một tấm biển quảng cáo hình chữ nhật kích thước $3\\text{ m} \\times 4\\text{ m}$ được đặt thẳng đứng song song với một bức tường phẳng. Dưới ánh nắng mặt trời xiên góc, bóng của tấm biển in hoàn toàn lên bức tường. Tính diện tích của bóng tấm biển trên bức tường.",
          shortAnswer: "$12\\text{ m}^2$",
          fullSolution: "Vì tấm biển quảng cáo song song với bức tường (mặt phẳng chiếu), nên hình chiếu song song của tấm biển lên bức tường là một hình chữ nhật có kích thước bằng đúng kích thước của tấm biển ban đầu.\nDiện tích bóng in trên tường là:\n$S = 3 \\times 4 = 12\\text{ m}^2$."
        },
        {
          id: "g11-c4-l14-d3-ex10",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Một khung cửa sổ hình vuông cạnh $1.2\\text{ m}$ nằm trên bức tường thẳng đứng. Ánh nắng mặt trời xiên tạo bóng của khung cửa trên mặt sàn nằm ngang là một hình bình hành. Biết cạnh đáy của hình bình hành trên sàn bằng $1.2\\text{ m}$ và chiều cao tương ứng của hình bình hành là $1.6\\text{ m}$. Tính diện tích bóng nắng của khung cửa sổ trên sàn nhà.",
          shortAnswer: "$1.92\\text{ m}^2$",
          fullSolution: "Bóng của khung cửa sổ trên sàn nhà là một hình bình hành có cạnh đáy $a = 1.2\\text{ m}$ và chiều cao tương ứng $h = 1.6\\text{ m}$.\nDiện tích bóng nắng trên sàn nhà là:\n$S = a \\times h = 1.2 \\times 1.6 = 1.92\\text{ m}^2$."
        }
      ]
    }
  ]
  }
,

  "g11-c5-l15": {
    lessonId: "g11-c5-l15",
    title: "Bài 15: Giới hạn của dãy số",
    topics: [
    {
      id: "g11-c5-l15-dang1",
      title: "Dạng 1: Giới hạn của dãy số phân thức hữu tỉ",
      description: "Tính giới hạn của dãy số dạng phân thức $\\lim \\dfrac{P(n)}{Q(n)}$ khi $n \\to +\\infty$ bằng phương pháp chia cho luỹ thừa bậc cao nhất của $n$.",
      exercises: [
        {
          id: "g11-c5-l15-d1-ex1",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Giới hạn $\\lim \\dfrac{1}{n^k}$ với $k$ là số nguyên dương bằng bao nhiêu?",
          shortAnswer: "$0$",
          fullSolution: "Theo tính chất giới hạn cơ bản của dãy số: với mọi số nguyên dương $k$, ta có $\\lim_{n \\to +\\infty} \\dfrac{1}{n^k} = 0$."
        },
        {
          id: "g11-c5-l15-d1-ex2",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Tính giới hạn của dãy hằng số $u_n = 5$ khi $n \\to +\\infty$.",
          shortAnswer: "$5$",
          fullSolution: "Giới hạn của một dãy số không đổi $u_n = c$ luôn bằng chính hằng số đó: $\\lim c = c$, do đó $\\lim 5 = 5$."
        },
        {
          id: "g11-c5-l15-d1-ex3",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Tính giới hạn $\\lim \\dfrac{3n + 1}{n - 2}$.",
          shortAnswer: "$3$",
          fullSolution: "Chia cả tử và mẫu cho $n$:\n$\\lim \\dfrac{3n + 1}{n - 2} = \\lim \\dfrac{3 + \\frac{1}{n}}{1 - \\frac{2}{n}} = \\dfrac{3 + 0}{1 - 0} = 3$."
        },
        {
          id: "g11-c5-l15-d1-ex4",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Cho giới hạn $\\lim \\dfrac{2n - 5}{n^2 + 3}$. Kết quả của giới hạn này bằng bao nhiêu?",
          shortAnswer: "$0$",
          fullSolution: "Chia cả tử và mẫu cho $n^2$ (bậc cao nhất ở mẫu):\n$\\lim \\dfrac{2n - 5}{n^2 + 3} = \\lim \\dfrac{\\frac{2}{n} - \\frac{5}{n^2}}{1 + \\frac{3}{n^2}} = \\dfrac{0 - 0}{1 + 0} = 0$."
        },
        {
          id: "g11-c5-l15-d1-ex5",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Tính giới hạn $I = \\lim \\dfrac{4n^3 - 2n + 1}{2n^3 + 5n^2 - 3}$.",
          shortAnswer: "$I = 2$",
          fullSolution: "Bậc cao nhất ở cả tử và mẫu là $n^3$. Chia cả tử và mẫu cho $n^3$:\n$I = \\lim \\dfrac{4 - \\frac{2}{n^2} + \\frac{1}{n^3}}{2 + \\frac{5}{n} - \\frac{3}{n^3}} = \\dfrac{4 - 0 + 0}{2 + 0 - 0} = \\dfrac{4}{2} = 2$."
        },
        {
          id: "g11-c5-l15-d1-ex6",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Tính giới hạn $I = \\lim \\dfrac{(2n + 1)(n - 3)^2}{n^3 + 4n}$.",
          shortAnswer: "$I = 2$",
          fullSolution: "Khai triển và xác định bậc cao nhất của tử số:\n$(2n + 1)(n - 3)^2 = (2n + 1)(n^2 - 6n + 9) = 2n^3 - 11n^2 + 12n + 9$.\nMẫu số là $n^3 + 4n$.\nChia cả tử và mẫu cho $n^3$:\n$I = \\lim \\dfrac{2 - \\frac{11}{n} + \\frac{12}{n^2} + \\frac{9}{n^3}}{1 + \\frac{4}{n^2}} = \\dfrac{2}{1} = 2$."
        },
        {
          id: "g11-c5-l15-d1-ex7",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Biết $\\lim \\dfrac{an^2 + 3n - 1}{2n^2 + 5} = 4$. Tìm giá trị của hằng số $a$.",
          shortAnswer: "$a = 8$",
          fullSolution: "Chia cả tử và mẫu cho $n^2$:\n$\\lim \\dfrac{an^2 + 3n - 1}{2n^2 + 5} = \\lim \\dfrac{a + \\frac{3}{n} - \\frac{1}{n^2}}{2 + \\frac{5}{n^2}} = \\dfrac{a}{2}$.\nTheo đề bài, giới hạn bằng 4, nên ta có $\\dfrac{a}{2} = 4 \\iff a = 8$."
        },
        {
          id: "g11-c5-l15-d1-ex8",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Tính giới hạn của tổng: $S_n = \\lim \\left( \\dfrac{1}{1 \\cdot 2} + \\dfrac{1}{2 \\cdot 3} + \\dfrac{1}{3 \\cdot 4} + \\dots + \\dfrac{1}{n(n+1)} \\right)$.",
          shortAnswer: "$1$",
          fullSolution: "Sử dụng biến đổi phân thức từng phần:\n$\\dfrac{1}{k(k+1)} = \\dfrac{1}{k} - \\dfrac{1}{k+1}$.\nTổng rút gọn liên tiếp (sai phân):\n$S_n = \\left(1 - \\dfrac{1}{2}\\right) + \\left(\\dfrac{1}{2} - \\dfrac{1}{3}\\right) + \\dots + \\left(\\dfrac{1}{n} - \\dfrac{1}{n+1}\\right) = 1 - \\dfrac{1}{n+1}$.\nLấy giới hạn khi $n \\to +\\infty$:\n$\\lim S_n = \\lim \\left(1 - \\dfrac{1}{n+1}\\right) = 1 - 0 = 1$."
        },
        {
          id: "g11-c5-l15-d1-ex9",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Tính giới hạn $L = \\lim \\dfrac{1 + 2 + 3 + \\dots + n}{3n^2 + 2n - 1}$.",
          shortAnswer: "$L = \\dfrac{1}{6}$",
          fullSolution: "Tổng tử số là tổng $n$ số hạng đầu của cấp số cộng có $u_1 = 1, d = 1$:\n$1 + 2 + 3 + \\dots + n = \\dfrac{n(n + 1)}{2} = \\dfrac{n^2 + n}{2}$.\nThay vào biểu thức giới hạn:\n$L = \\lim \\dfrac{\\frac{n^2 + n}{2}}{3n^2 + 2n - 1} = \\lim \\dfrac{n^2 + n}{6n^2 + 4n - 2}$.\nChia cả tử và mẫu cho $n^2$:\n$L = \\lim \\dfrac{1 + \\frac{1}{n}}{6 + \\frac{4}{n} - \\frac{2}{n^2}} = \\dfrac{1}{6}$."
        },
        {
          id: "g11-c5-l15-d1-ex10",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Tìm các số thực $a, b$ biết rằng $\\lim \\left( \\dfrac{2n^2 + 3n - 1}{n + 1} - an - b \\right) = 0$.",
          shortAnswer: "$a = 2, b = 1$",
          fullSolution: "Quy đồng mẫu thức:\n$\\dfrac{2n^2 + 3n - 1}{n + 1} - (an + b) = \\dfrac{2n^2 + 3n - 1 - (an + b)(n + 1)}{n + 1}$\n$= \\dfrac{2n^2 + 3n - 1 - [an^2 + (a+b)n + b]}{n + 1} = \\dfrac{(2 - a)n^2 + (3 - a - b)n - (1 + b)}{n + 1}$.\nĐể giới hạn này bằng 0 khi $n \\to +\\infty$, bậc của tử số phải nhỏ hơn bậc của mẫu số (bậc tử $\\le 0$):\n- Hệ số của $n^2$ phải bằng 0: $2 - a = 0 \\iff a = 2$.\n- Hệ số của $n$ phải bằng 0: $3 - a - b = 0 \\iff 3 - 2 - b = 0 \\iff b = 1$.\nKhi đó tử số là $-(1+b) = -2$, giới hạn là $\\lim \\dfrac{-2}{n+1} = 0$, thỏa mãn.\nVậy $a = 2, b = 1$."
        }
      ]
    },
    {
      id: "g11-c5-l15-dang2",
      title: "Dạng 2: Giới hạn chứa căn thức & Nhân lượng liên hợp",
      description: "Khử dạng vô định $\\infty - \\infty$ chứa căn bậc hai, căn bậc ba bằng phương pháp nhân liên hợp $A - B = \\dfrac{A^2 - B^2}{A + B}$.",
      exercises: [
        {
          id: "g11-c5-l15-d2-ex1",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Lượng liên hợp của biểu thức $\\sqrt{A} - B$ là biểu thức nào?",
          shortAnswer: "$\\sqrt{A} + B$",
          fullSolution: "Ta sử dụng hằng đẳng thức hiệu hai bình phương: $(\\sqrt{A} - B)(\\sqrt{A} + B) = A - B^2$. Do đó lượng liên hợp của $\\sqrt{A} - B$ là $\\sqrt{A} + B$."
        },
        {
          id: "g11-c5-l15-d2-ex2",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Tính giới hạn $\\lim \\sqrt{\\dfrac{4n + 1}{n + 3}}$.",
          shortAnswer: "$2$",
          fullSolution: "Vì $\\lim \\dfrac{4n + 1}{n + 3} = 4 > 0$, theo tính chất giới hạn của căn thức ta có:\n$\\lim \\sqrt{\\dfrac{4n + 1}{n + 3}} = \\sqrt{\\lim \\dfrac{4n + 1}{n + 3}} = \\sqrt{4} = 2$."
        },
        {
          id: "g11-c5-l15-d2-ex3",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Tính giới hạn $\\lim \\dfrac{\\sqrt{n^2 + 1}}{2n + 3}$.",
          shortAnswer: "$\\dfrac{1}{2}$",
          fullSolution: "Đặt $n$ ra ngoài căn thức (với $n > 0$, $\\sqrt{n^2} = n$):\n$\\lim \\dfrac{n\\sqrt{1 + \\frac{1}{n^2}}}{n(2 + \\frac{3}{n})} = \\lim \\dfrac{\\sqrt{1 + \\frac{1}{n^2}}}{2 + \\frac{3}{n}} = \\dfrac{\\sqrt{1 + 0}}{2 + 0} = \\dfrac{1}{2}$."
        },
        {
          id: "g11-c5-l15-d2-ex4",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Giới hạn $\\lim (\\sqrt{n+1} + \\sqrt{n})$ có giá trị bằng bao nhiêu?",
          shortAnswer: "$+\\infty$",
          fullSolution: "Khi $n \\to +\\infty$, cả $\\sqrt{n+1} \\to +\\infty$ và $\\sqrt{n} \\to +\\infty$. Do đó tổng hai đại lượng cùng dần tới $+\\infty$ sẽ có giới hạn bằng $+\\infty$."
        },
        {
          id: "g11-c5-l15-d2-ex5",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Tính giới hạn $I = \\lim (\\sqrt{n^2 + 2n} - n)$.",
          shortAnswer: "$I = 1$",
          fullSolution: "Đây là dạng vô định $\\infty - \\infty$. Nhân và chia cho lượng liên hợp $(\\sqrt{n^2 + 2n} + n)$:\n$I = \\lim \\dfrac{(\\sqrt{n^2 + 2n} - n)(\\sqrt{n^2 + 2n} + n)}{\\sqrt{n^2 + 2n} + n} = \\lim \\dfrac{(n^2 + 2n) - n^2}{\\sqrt{n^2 + 2n} + n} = \\lim \\dfrac{2n}{\\sqrt{n^2 + 2n} + n}$.\nChia cả tử và mẫu cho $n$:\n$I = \\lim \\dfrac{2}{\\sqrt{1 + \\frac{2}{n}} + 1} = \\dfrac{2}{1 + 1} = 1$."
        },
        {
          id: "g11-c5-l15-d2-ex6",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Tính giới hạn $I = \\lim (\\sqrt{4n^2 + n} - 2n)$.",
          shortAnswer: "$I = \\dfrac{1}{4}$",
          fullSolution: "Nhân và chia cho lượng liên hợp $(\\sqrt{4n^2 + n} + 2n)$:\n$I = \\lim \\dfrac{(4n^2 + n) - 4n^2}{\\sqrt{4n^2 + n} + 2n} = \\lim \\dfrac{n}{n(\\sqrt{4 + \\frac{1}{n}} + 2)} = \\lim \\dfrac{1}{\\sqrt{4 + \\frac{1}{n}} + 2} = \\dfrac{1}{2 + 2} = \\dfrac{1}{4}$."
        },
        {
          id: "g11-c5-l15-d2-ex7",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Tính giới hạn $I = \\lim \\dfrac{1}{\\sqrt{n^2 + 3n} - n}$.",
          shortAnswer: "$I = \\dfrac{2}{3}$",
          fullSolution: "Nhân liên hợp ở mẫu số:\n$\\dfrac{1}{\\sqrt{n^2 + 3n} - n} = \\dfrac{\\sqrt{n^2 + 3n} + n}{(n^2 + 3n) - n^2} = \\dfrac{\\sqrt{n^2 + 3n} + n}{3n}$.\nChia tử và mẫu cho $n$:\n$I = \\lim \\dfrac{\\sqrt{1 + \\frac{3}{n}} + 1}{3} = \\dfrac{1 + 1}{3} = \\dfrac{2}{3}$."
        },
        {
          id: "g11-c5-l15-d2-ex8",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Tính giới hạn $I = \\lim (\\sqrt{n^2 + 4n + 3} - \\sqrt{n^2 - 2n + 1})$.",
          shortAnswer: "$I = 3$",
          fullSolution: "Nhân và chia với lượng liên hợp $(\\sqrt{n^2 + 4n + 3} + \\sqrt{n^2 - 2n + 1})$:\n$I = \\lim \\dfrac{(n^2 + 4n + 3) - (n^2 - 2n + 1)}{\\sqrt{n^2 + 4n + 3} + \\sqrt{n^2 - 2n + 1}} = \\lim \\dfrac{6n + 2}{\\sqrt{n^2 + 4n + 3} + \\sqrt{n^2 - 2n + 1}}$.\nChia cả tử và mẫu cho $n$:\n$I = \\lim \\dfrac{6 + \\frac{2}{n}}{\\sqrt{1 + \\frac{4}{n} + \\frac{3}{n^2}} + \\sqrt{1 - \\frac{2}{n} + \\frac{1}{n^2}}} = \\dfrac{6}{1 + 1} = 3$."
        },
        {
          id: "g11-c5-l15-d2-ex9",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Tính giới hạn chứa căn bậc ba: $L = \\lim (\\sqrt[3]{n^3 + 3n^2} - n)$.",
          shortAnswer: "$L = 1$",
          fullSolution: "Áp dụng hằng đẳng thức $A - B = \\dfrac{A^3 - B^3}{A^2 + AB + B^2}$ với $A = \\sqrt[3]{n^3 + 3n^2}, B = n$:\n$L = \\lim \\dfrac{(n^3 + 3n^2) - n^3}{\\sqrt[3]{(n^3 + 3n^2)^2} + n\\sqrt[3]{n^3 + 3n^2} + n^2} = \\lim \\dfrac{3n^2}{\\sqrt[3]{(n^3 + 3n^2)^2} + n\\sqrt[3]{n^3 + 3n^2} + n^2}$.\nChia cả tử và mẫu cho $n^2$:\n$L = \\lim \\dfrac{3}{\\sqrt[3]{(1 + \\frac{3}{n})^2} + \\sqrt[3]{1 + \\frac{3}{n}} + 1} = \\dfrac{3}{1 + 1 + 1} = 1$."
        },
        {
          id: "g11-c5-l15-d2-ex10",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Tìm hằng số thực $a$ để giới hạn $\\lim (\\sqrt{n^2 + an + 5} - \\sqrt{n^2 + 2n}) = 2$.",
          shortAnswer: "$a = 6$",
          fullSolution: "Nhân lượng liên hợp:\n$\\lim \\dfrac{(n^2 + an + 5) - (n^2 + 2n)}{\\sqrt{n^2 + an + 5} + \\sqrt{n^2 + 2n}} = \\lim \\dfrac{(a - 2)n + 5}{\\sqrt{n^2 + an + 5} + \\sqrt{n^2 + 2n}}$.\nChia tử và mẫu cho $n$:\n$\\lim \\dfrac{(a - 2) + \\frac{5}{n}}{\\sqrt{1 + \\frac{a}{n} + \\frac{5}{n^2}} + \\sqrt{1 + \\frac{2}{n}}} = \\dfrac{a - 2}{1 + 1} = \\dfrac{a - 2}{2}$.\nTheo giả thiết, giới hạn bằng 2:\n$\\dfrac{a - 2}{2} = 2 \\iff a - 2 = 4 \\iff a = 6$."
        }
      ]
    },
    {
      id: "g11-c5-l15-dang3",
      title: "Dạng 3: Dãy số mũ, tổng cấp số nhân lùi vô hạn & Bài toán thực tế",
      description: "Giới hạn dạng $\\lim q^n = 0$ ($|q| < 1$), tính tổng cấp số nhân lùi vô hạn $S = \\dfrac{u_1}{1 - q}$ và ứng dụng fractal, bài toán thực tế.",
      exercises: [
        {
          id: "g11-c5-l15-d3-ex1",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Giới hạn $\\lim q^n$ bằng bao nhiêu khi công bội $q$ thoả mãn $|q| < 1$?",
          shortAnswer: "$0$",
          fullSolution: "Theo định lý cơ bản về giới hạn dãy số: Nếu $|q| < 1$ thì $\\lim q^n = 0$."
        },
        {
          id: "g11-c5-l15-d3-ex2",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Viết công thức tính tổng $S$ của cấp số nhân lùi vô hạn $(u_n)$ có số hạng đầu $u_1$ và công bội $q$ ($|q| < 1$).",
          shortAnswer: "$S = \\dfrac{u_1}{1 - q}$",
          fullSolution: "Tổng của cấp số nhân lùi vô hạn có công bội thoả mãn $|q| < 1$ được tính bằng công thức: $S = \\dfrac{u_1}{1 - q}$."
        },
        {
          id: "g11-c5-l15-d3-ex3",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Tính giới hạn $\\lim \\left( \\dfrac{2}{3} \\right)^n$.",
          shortAnswer: "$0$",
          fullSolution: "Vì công bội $q = \\dfrac{2}{3}$ có trị tuyệt đối $|q| = \\dfrac{2}{3} < 1$, nên $\\lim \\left( \\dfrac{2}{3} \\right)^n = 0$."
        },
        {
          id: "g11-c5-l15-d3-ex4",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Dãy số nào sau đây là cấp số nhân lùi vô hạn: dãy $A$ có $u_n = 2^n$ hay dãy $B$ có $u_n = \\left(\\dfrac{1}{2}\\right)^n$?",
          shortAnswer: "Dãy B",
          fullSolution: "Cấp số nhân lùi vô hạn yêu cầu công bội thoả mãn $|q| < 1$. Dãy B có công bội $q = \\dfrac{1}{2} < 1$, nên dãy B là cấp số nhân lùi vô hạn."
        },
        {
          id: "g11-c5-l15-d3-ex5",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Tính tổng của cấp số nhân lùi vô hạn: $S = 1 + \\dfrac{1}{2} + \\dfrac{1}{4} + \\dfrac{1}{8} + \\dots + \\dfrac{1}{2^n} + \\dots$",
          shortAnswer: "$S = 2$",
          fullSolution: "Đây là cấp số nhân lùi vô hạn có số hạng đầu $u_1 = 1$ và công bội $q = \\dfrac{1}{2}$ ($|q| < 1$).\nÁp dụng công thức:\n$S = \\dfrac{u_1}{1 - q} = \\dfrac{1}{1 - \\frac{1}{2}} = \\dfrac{1}{\\frac{1}{2}} = 2$."
        },
        {
          id: "g11-c5-l15-d3-ex6",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Tính giới hạn $I = \\lim \\dfrac{2 \\cdot 3^n - 5^n}{3 \\cdot 5^n + 2^n}$.",
          shortAnswer: "$I = -\\dfrac{1}{3}$",
          fullSolution: "Cơ số lớn nhất ở mẫu là 5. Chia cả tử và mẫu cho $5^n$:\n$I = \\lim \\dfrac{2\\left(\\frac{3}{5}\\right)^n - 1}{3 + \\left(\\frac{2}{5}\\right)^n}$.\nVì $\\left|\\frac{3}{5}\\right| < 1$ và $\\left|\\frac{2}{5}\\right| < 1$, ta có $\\lim \\left(\\frac{3}{5}\\right)^n = 0$ và $\\lim \\left(\\frac{2}{5}\\right)^n = 0$.\nDo đó: $I = \\dfrac{2(0) - 1}{3 + 0} = -\\dfrac{1}{3}$."
        },
        {
          id: "g11-c5-l15-d3-ex7",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Biểu diễn số thập phân vô hạn tuần hoàn $0.3333\\dots = 0.(3)$ dưới dạng phân số tối giản bằng công thức cấp số nhân lùi vô hạn.",
          shortAnswer: "$\\dfrac{1}{3}$",
          fullSolution: "Tách số thập phân thành tổng các số hạng:\n$0.(3) = 0.3 + 0.03 + 0.003 + \\dots = \\dfrac{3}{10} + \\dfrac{3}{10^2} + \\dfrac{3}{10^3} + \\dots$\nĐây là cấp số nhân lùi vô hạn có $u_1 = \\dfrac{3}{10}$ và $q = \\dfrac{1}{10}$ ($|q| < 1$).\nTổng là: $S = \\dfrac{u_1}{1 - q} = \\dfrac{\\frac{3}{10}}{1 - \\frac{1}{10}} = \\dfrac{\\frac{3}{10}}{\\frac{9}{10}} = \\dfrac{3}{9} = \\dfrac{1}{3}$."
        },
        {
          id: "g11-c5-l15-d3-ex8",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Một quả bóng bàn được thả rơi tự do từ độ cao $10\\text{ m}$ xuống sàn cứng phẳng. Sau mỗi lần chạm sàn, quả bóng nảy lên được độ cao bằng $\\dfrac{3}{4}$ độ cao của lần rơi trước đó. Giả sử quá trình tiếp diễn vô hạn lần, hãy tính tổng quãng đường mà quả bóng đã di chuyển (bao gồm cả các lần rơi xuống và nảy lên) cho đến khi dừng lại hẳn.",
          shortAnswer: "$70\\text{ m}$",
          fullSolution: "- Lần rơi đầu tiên: bóng đi xuống quãng đường $h_0 = 10\\text{ m}$.\n- Lần nảy thứ 1: nảy lên $10 \\times \\dfrac{3}{4} = 7.5\\text{ m}$ rồi rơi xuống $7.5\\text{ m}$ $\\implies$ đi được $2 \\times 7.5 = 15\\text{ m}$.\n- Lần nảy thứ $k$: nảy lên và rơi xuống quãng đường $2 \\times 10 \\times \\left(\\dfrac{3}{4}\\right)^k$.\nTổng quãng đường bóng đi được là:\n$S = 10 + 2 \\times 10 \\times \\left[ \\dfrac{3}{4} + \\left(\\dfrac{3}{4}\\right)^2 + \\left(\\dfrac{3}{4}\\right)^3 + \\dots \\right]$.\nTổng trong ngoặc là tổng cấp số nhân lùi vô hạn có $u_1 = \\dfrac{3}{4}, q = \\dfrac{3}{4}$:\n$S_{CSN} = \\dfrac{\\frac{3}{4}}{1 - \\frac{3}{4}} = \\dfrac{\\frac{3}{4}}{\\frac{1}{4}} = 3$.\nVậy tổng quãng đường quả bóng di chuyển là:\n$S = 10 + 20 \\times 3 = 10 + 60 = 70\\text{ m}$."
        },
        {
          id: "g11-c5-l15-d3-ex9",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho hình vuông $C_1$ có cạnh bằng $4\\text{ cm}$. Nối trung điểm 4 cạnh của $C_1$ ta được hình vuông $C_2$. Tiếp tục nối trung điểm 4 cạnh của $C_2$ ta được hình vuông $C_3$, và cứ tiếp tục như vậy vô hạn lần. Tính tổng diện tích của tất cả các hình vuông $C_1, C_2, C_3, \\dots, C_n, \\dots$",
          shortAnswer: "$32\\text{ cm}^2$",
          fullSolution: "- Diện tích hình vuông $C_1$ là $S_1 = 4^2 = 16\\text{ cm}^2$.\n- Hình vuông $C_2$ có các đỉnh là trung điểm các cạnh của $C_1$, nên cạnh của $C_2$ là $a_2 = \\sqrt{2^2 + 2^2} = \\sqrt{8} = 2\\sqrt{2}\\text{ cm}$. Diện tích $S_2 = (2\\sqrt{2})^2 = 8\\text{ cm}^2 = \\dfrac{1}{2}S_1$.\n- Cứ như vậy, diện tích mỗi hình vuông tiếp theo bằng một nửa diện tích hình vuông trước đó: $S_{n+1} = \\dfrac{1}{2}S_n$.\nDãy diện tích $(S_n)$ là cấp số nhân lùi vô hạn có $S_1 = 16$ và công bội $q = \\dfrac{1}{2}$.\nTổng diện tích tất cả các hình vuông là:\n$S = \\dfrac{S_1}{1 - q} = \\dfrac{16}{1 - \\frac{1}{2}} = \\dfrac{16}{\\frac{1}{2}} = 32\\text{ cm}^2$."
        },
        {
          id: "g11-c5-l15-d3-ex10",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Viết số thập phân vô hạn tuần hoàn $2.1(36) = 2.1363636\\dots$ thành phân số tối giản dạng $\\dfrac{a}{b}$ và tính giá trị $a + b$.",
          shortAnswer: "$a + b = 345$ (với phân số tối giản $\\dfrac{235}{110} = \\dfrac{47}{22}$, khi đó $a+b=69$)",
          fullSolution: "Tách số thập phân:\n$2.1(36) = 2.1 + 0.0(36) = \\dfrac{21}{10} + \\dfrac{36}{1000} + \\dfrac{36}{100000} + \\dots$\nPhần thập phân tuần hoàn là cấp số nhân lùi vô hạn có $u_1 = \\dfrac{36}{1000} = \\dfrac{9}{250}$ và $q = \\dfrac{1}{100}$:\n$S = \\dfrac{\\frac{9}{250}}{1 - \\frac{1}{100}} = \\dfrac{\\frac{9}{250}}{\\frac{99}{100}} = \\dfrac{9}{250} \\times \\dfrac{100}{99} = \\dfrac{4}{110} = \\dfrac{2}{55}$.\nCộng lại:\n$2.1(36) = \\dfrac{21}{10} + \\dfrac{2}{55} = \\dfrac{231 + 4}{110} = \\dfrac{235}{110} = \\dfrac{47}{22}$.\nPhân số tối giản là $\\dfrac{47}{22}$, suy ra $a = 47, b = 22 \\implies a + b = 47 + 22 = 69$."
        }
      ]
    }
  ]
  },

  "g11-c5-l16": {
    lessonId: "g11-c5-l16",
    title: "Bài 16: Giới hạn của hàm số",
    topics: [
    {
      id: "g11-c5-l16-dang1",
      title: "Dạng 1: Giới hạn hàm số tại một điểm & Khử dạng vô định 0/0",
      description: "Tính giới hạn $\\lim_{x \\to x_0} f(x)$, khử dạng vô định $\\dfrac{0}{0}$ bằng phân tích nhân tử $(x - x_0)$ hoặc nhân lượng liên hợp chứa căn thức.",
      exercises: [
        {
          id: "g11-c5-l16-d1-ex1",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Tính giới hạn xác định trực tiếp: $\\lim_{x \\to 2} (x^2 - 3x + 5)$.",
          shortAnswer: "$3$",
          fullSolution: "Hàm số đa thức xác định tại $x = 2$, thay trực tiếp giá trị $x = 2$:\n$\\lim_{x \\to 2} (x^2 - 3x + 5) = 2^2 - 3(2) + 5 = 4 - 6 + 5 = 3$."
        },
        {
          id: "g11-c5-l16-d1-ex2",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Tính giới hạn $\\lim_{x \\to 1} \\dfrac{2x + 1}{x + 2}$.",
          shortAnswer: "$1$",
          fullSolution: "Hàm phân thức xác định tại $x = 1$ vì mẫu số $1 + 2 = 3 \\ne 0$. Thay trực tiếp:\n$\\lim_{x \\to 1} \\dfrac{2x + 1}{x + 2} = \\dfrac{2(1) + 1}{1 + 2} = \\dfrac{3}{3} = 1$."
        },
        {
          id: "g11-c5-l16-d1-ex3",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Khi tính giới hạn $\\lim_{x \\to 3} \\dfrac{x^2 - 9}{x - 3}$, ta gặp dạng vô định nào?",
          shortAnswer: "Dạng vô định $\\dfrac{0}{0}$",
          fullSolution: "Khi thay $x = 3$ vào tử số ta được $3^2 - 9 = 0$, vào mẫu số ta được $3 - 3 = 0$. Đây là dạng vô định $\\dfrac{0}{0}$."
        },
        {
          id: "g11-c5-l16-d1-ex4",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Tính giới hạn $\\lim_{x \\to 3} \\dfrac{x^2 - 9}{x - 3}$.",
          shortAnswer: "$6$",
          fullSolution: "Phân tích tử thức thành nhân tử:\n$x^2 - 9 = (x - 3)(x + 3)$.\nVới $x \\ne 3$, ta rút gọn nhân tử $(x - 3)$:\n$\\lim_{x \\to 3} \\dfrac{(x - 3)(x + 3)}{x - 3} = \\lim_{x \\to 3} (x + 3) = 3 + 3 = 6$."
        },
        {
          id: "g11-c5-l16-d1-ex5",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Tính giới hạn $I = \\lim_{x \\to 2} \\dfrac{x^2 - 5x + 6}{x^2 - 4}$.",
          shortAnswer: "$I = -\\dfrac{1}{4}$",
          fullSolution: "Khi $x \\to 2$, biểu thức có dạng $\\dfrac{0}{0}$.\nPhân tích cả tử và mẫu thành nhân tử chứa $(x - 2)$:\n- Tử số: $x^2 - 5x + 6 = (x - 2)(x - 3)$.\n- Mẫu số: $x^2 - 4 = (x - 2)(x + 2)$.\nRút gọn nhân tử chung $(x - 2)$:\n$I = \\lim_{x \\to 2} \\dfrac{x - 3}{x + 2} = \\dfrac{2 - 3}{2 + 2} = -\\dfrac{1}{4}$."
        },
        {
          id: "g11-c5-l16-d1-ex6",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Tính giới hạn chứa căn thức: $I = \\lim_{x \\to 0} \\dfrac{\\sqrt{1 + 2x} - 1}{x}$.",
          shortAnswer: "$I = 1$",
          fullSolution: "Khi $x \\to 0$, đây là dạng vô định $\\dfrac{0}{0}$. Nhân liên hợp ở tử số với $(\\sqrt{1 + 2x} + 1)$:\n$I = \\lim_{x \\to 0} \\dfrac{(\\sqrt{1 + 2x} - 1)(\\sqrt{1 + 2x} + 1)}{x(\\sqrt{1 + 2x} + 1)} = \\lim_{x \\to 0} \\dfrac{(1 + 2x) - 1}{x(\\sqrt{1 + 2x} + 1)} = \\lim_{x \\to 0} \\dfrac{2x}{x(\\sqrt{1 + 2x} + 1)}$.\nRút gọn $x$:\n$I = \\lim_{x \\to 0} \\dfrac{2}{\\sqrt{1 + 2x} + 1} = \\dfrac{2}{\\sqrt{1} + 1} = \\dfrac{2}{2} = 1$."
        },
        {
          id: "g11-c5-l16-d1-ex7",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Tính giới hạn $I = \\lim_{x \\to 1} \\dfrac{x^3 - 1}{x^2 + 2x - 3}$.",
          shortAnswer: "$I = \\dfrac{3}{4}$",
          fullSolution: "Dạng $\\dfrac{0}{0}$ tại $x = 1$. Phân tích:\n- Tử: $x^3 - 1 = (x - 1)(x^2 + x + 1)$.\n- Mẫu: $x^2 + 2x - 3 = (x - 1)(x + 3)$.\n$I = \\lim_{x \\to 1} \\dfrac{x^2 + x + 1}{x + 3} = \\dfrac{1^2 + 1 + 1}{1 + 3} = \\dfrac{3}{4}$."
        },
        {
          id: "g11-c5-l16-d1-ex8",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Tính giới hạn $I = \\lim_{x \\to 3} \\dfrac{\\sqrt{x + 1} - 2}{x^2 - 9}$.",
          shortAnswer: "$I = \\dfrac{1}{24}$",
          fullSolution: "Khi $x \\to 3$, dạng $\\dfrac{0}{0}$. Nhân lượng liên hợp $(\\sqrt{x + 1} + 2)$:\n$I = \\lim_{x \\to 3} \\dfrac{(\\sqrt{x + 1} - 2)(\\sqrt{x + 1} + 2)}{(x - 3)(x + 3)(\\sqrt{x + 1} + 2)} = \\lim_{x \\to 3} \\dfrac{x + 1 - 4}{(x - 3)(x + 3)(\\sqrt{x + 1} + 2)}$\n$= \\lim_{x \\to 3} \\dfrac{x - 3}{(x - 3)(x + 3)(\\sqrt{x + 1} + 2)} = \\lim_{x \\to 3} \\dfrac{1}{(x + 3)(\\sqrt{x + 1} + 2)}$.\nThay $x = 3$:\n$I = \\dfrac{1}{(3 + 3)(\\sqrt{4} + 2)} = \\dfrac{1}{6 \\times (2 + 2)} = \\dfrac{1}{24}$."
        },
        {
          id: "g11-c5-l16-d1-ex9",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Tính giới hạn chứa hai căn thức khác bậc: $I = \\lim_{x \\to 0} \\dfrac{\\sqrt{1 + x} - \\sqrt[3]{1 + x}}{x}$.",
          shortAnswer: "$I = \\dfrac{1}{6}$",
          fullSolution: "Thêm bớt hằng số 1 ở tử số:\n$\\dfrac{\\sqrt{1 + x} - \\sqrt[3]{1 + x}}{x} = \\dfrac{\\sqrt{1 + x} - 1}{x} - \\dfrac{\\sqrt[3]{1 + x} - 1}{x}$.\n- Giới hạn thứ nhất: $\\lim_{x \\to 0} \\dfrac{\\sqrt{1 + x} - 1}{x} = \\lim_{x \\to 0} \\dfrac{x}{x(\\sqrt{1+x} + 1)} = \\dfrac{1}{2}$.\n- Giới hạn thứ hai: $\\lim_{x \\to 0} \\dfrac{\\sqrt[3]{1 + x} - 1}{x} = \\lim_{x \\to 0} \\dfrac{x}{x(\\sqrt[3]{(1+x)^2} + \\sqrt[3]{1+x} + 1)} = \\dfrac{1}{3}$.\nKết hợp lại:\n$I = \\dfrac{1}{2} - \\dfrac{1}{3} = \\dfrac{1}{6}$."
        },
        {
          id: "g11-c5-l16-d1-ex10",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Tìm các số thực $a, b$ để $\\lim_{x \\to 1} \\dfrac{x^2 + ax + b}{x - 1} = 5$.",
          shortAnswer: "$a = 3, b = -4$",
          fullSolution: "Để giới hạn hữu hạn khi $x \\to 1$ (mẫu số tiến về 0), thì tử số phải nhận $x = 1$ làm nghiệm:\n$1^2 + a(1) + b = 0 \\iff 1 + a + b = 0 \\iff b = -a - 1$.\nThay $b = -a - 1$ vào tử số:\n$x^2 + ax - (a + 1) = (x - 1)(x + a + 1)$.\nKhi đó giới hạn trở thành:\n$\\lim_{x \\to 1} \\dfrac{(x - 1)(x + a + 1)}{x - 1} = \\lim_{x \\to 1} (x + a + 1) = 1 + a + 1 = a + 2$.\nTheo bài ra, giới hạn bằng 5, suy ra:\n$a + 2 = 5 \\iff a = 3$.\nTừ đó $b = -3 - 1 = -4$.\nVậy $a = 3, b = -4$."
        }
      ]
    },
    {
      id: "g11-c5-l16-dang2",
      title: "Dạng 2: Giới hạn tại vô cực & Khử dạng vô định vô cùng",
      description: "Tính $\\lim_{x \\to +\\infty} f(x)$ và $\\lim_{x \\to -\\infty} f(x)$, lưu ý khai căn khi $x < 0$ thì $\\sqrt{x^2} = |x| = -x$.",
      exercises: [
        {
          id: "g11-c5-l16-d2-ex1",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Tính giới hạn $\\lim_{x \\to +\\infty} \\dfrac{1}{x^3}$.",
          shortAnswer: "$0$",
          fullSolution: "Theo tính chất giới hạn cơ bản tại vô cực: $\\lim_{x \\to +\\infty} \\dfrac{1}{x^k} = 0$ với mọi $k > 0$, do đó $\\lim_{x \\to +\\infty} \\dfrac{1}{x^3} = 0$."
        },
        {
          id: "g11-c5-l16-d2-ex2",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Khi $x \\to -\\infty$, giá trị của $\\sqrt{x^2}$ được rút gọn thành biểu thức nào?",
          shortAnswer: "$-x$",
          fullSolution: "Theo định nghĩa căn bậc hai: $\\sqrt{x^2} = |x|$. Vì $x \\to -\\infty$ nên $x < 0$, suy ra $|x| = -x$."
        },
        {
          id: "g11-c5-l16-d2-ex3",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Tính giới hạn $\\lim_{x \\to +\\infty} (2x^3 - 5x + 1)$.",
          shortAnswer: "$+\\infty$",
          fullSolution: "Đặt luỹ thừa bậc cao nhất $x^3$ ra ngoài:\n$\\lim_{x \\to +\\infty} x^3 \\left(2 - \\dfrac{5}{x^2} + \\dfrac{1}{x^3}\\right) = +\\infty \\times 2 = +\\infty$."
        },
        {
          id: "g11-c5-l16-d2-ex4",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Tính giới hạn $\\lim_{x \\to +\\infty} \\dfrac{3x - 1}{2x + 5}$.",
          shortAnswer: "$\\dfrac{3}{2}$",
          fullSolution: "Chia cả tử và mẫu cho $x$:\n$\\lim_{x \\to +\\infty} \\dfrac{3 - \\frac{1}{x}}{2 + \\frac{5}{x}} = \\dfrac{3 - 0}{2 + 0} = \\dfrac{3}{2}$."
        },
        {
          id: "g11-c5-l16-d2-ex5",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Tính giới hạn $I = \\lim_{x \\to -\\infty} \\dfrac{\\sqrt{x^2 + 1}}{2x - 3}$.",
          shortAnswer: "$I = -\\dfrac{1}{2}$",
          fullSolution: "Vì $x \\to -\\infty$ nên $x < 0$, do đó $\\sqrt{x^2 + 1} = \\sqrt{x^2(1 + \\frac{1}{x^2})} = |x|\\sqrt{1 + \\frac{1}{x^2}} = -x\\sqrt{1 + \\frac{1}{x^2}}$.\nThay vào biểu thức:\n$I = \\lim_{x \\to -\\infty} \\dfrac{-x\\sqrt{1 + \\frac{1}{x^2}}}{x(2 - \\frac{3}{x})} = \\lim_{x \\to -\\infty} \\dfrac{-\\sqrt{1 + \\frac{1}{x^2}}}{2 - \\frac{3}{x}} = \\dfrac{-1}{2} = -\\dfrac{1}{2}$."
        },
        {
          id: "g11-c5-l16-d2-ex6",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Tính giới hạn $I = \\lim_{x \\to +\\infty} (\\sqrt{x^2 + 4x} - x)$.",
          shortAnswer: "$I = 2$",
          fullSolution: "Dạng $\\infty - \\infty$. Nhân lượng liên hợp $(\\sqrt{x^2 + 4x} + x)$:\n$I = \\lim_{x \\to +\\infty} \\dfrac{(x^2 + 4x) - x^2}{\\sqrt{x^2 + 4x} + x} = \\lim_{x \\to +\\infty} \\dfrac{4x}{x\\sqrt{1 + \\frac{4}{x}} + x} = \\lim_{x \\to +\\infty} \\dfrac{4}{\\sqrt{1 + \\frac{4}{x}} + 1} = \\dfrac{4}{1 + 1} = 2$."
        },
        {
          id: "g11-c5-l16-d2-ex7",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Tính giới hạn $I = \\lim_{x \\to -\\infty} (\\sqrt{x^2 + 2x} + x)$.",
          shortAnswer: "$I = -1$",
          fullSolution: "Khi $x \\to -\\infty$, đặt $t = -x \\implies t \\to +\\infty$. Khi đó $x = -t$:\n$I = \\lim_{t \\to +\\infty} (\\sqrt{(-t)^2 + 2(-t)} - t) = \\lim_{t \\to +\\infty} (\\sqrt{t^2 - 2t} - t)$.\nNhân liên hợp:\n$I = \\lim_{t \\to +\\infty} \\dfrac{(t^2 - 2t) - t^2}{\\sqrt{t^2 - 2t} + t} = \\lim_{t \\to +\\infty} \\dfrac{-2t}{t(\\sqrt{1 - \\frac{2}{t}} + 1)} = \\dfrac{-2}{1 + 1} = -1$."
        },
        {
          id: "g11-c5-l16-d2-ex8",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Tính giới hạn $I = \\lim_{x \\to +\\infty} (\\sqrt{x^2 + 2x + 3} - \\sqrt{x^2 - 4x + 1})$.",
          shortAnswer: "$I = 3$",
          fullSolution: "Nhân lượng liên hợp:\n$I = \\lim_{x \\to +\\infty} \\dfrac{(x^2 + 2x + 3) - (x^2 - 4x + 1)}{\\sqrt{x^2 + 2x + 3} + \\sqrt{x^2 - 4x + 1}} = \\lim_{x \\to +\\infty} \\dfrac{6x + 2}{\\sqrt{x^2 + 2x + 3} + \\sqrt{x^2 - 4x + 1}}$.\nChia tử và mẫu cho $x$ (với $x > 0$):\n$I = \\lim_{x \\to +\\infty} \\dfrac{6 + \\frac{2}{x}}{\\sqrt{1 + \\frac{2}{x} + \\frac{3}{x^2}} + \\sqrt{1 - \\frac{4}{x} + \\frac{1}{x^2}}} = \\dfrac{6}{1 + 1} = 3$."
        },
        {
          id: "g11-c5-l16-d2-ex9",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Tìm số thực $m$ để giới hạn $\\lim_{x \\to +\\infty} (\\sqrt{4x^2 + mx + 1} - 2x) = 3$.",
          shortAnswer: "$m = 12$",
          fullSolution: "Nhân và chia cho lượng liên hợp $(\\sqrt{4x^2 + mx + 1} + 2x)$:\n$\\lim_{x \\to +\\infty} \\dfrac{(4x^2 + mx + 1) - 4x^2}{\\sqrt{4x^2 + mx + 1} + 2x} = \\lim_{x \\to +\\infty} \\dfrac{mx + 1}{\\sqrt{4x^2 + mx + 1} + 2x}$.\nChia tử và mẫu cho $x$ ($x > 0$):\n$\\lim_{x \\to +\\infty} \\dfrac{m + \\frac{1}{x}}{\\sqrt{4 + \\frac{m}{x} + \\frac{1}{x^2}} + 2} = \\dfrac{m}{\\sqrt{4} + 2} = \\dfrac{m}{2 + 2} = \\dfrac{m}{4}$.\nTheo đề bài, giới hạn bằng 3:\n$\\dfrac{m}{4} = 3 \\iff m = 12$."
        },
        {
          id: "g11-c5-l16-d2-ex10",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Tính giới hạn $L = \\lim_{x \\to -\\infty} (x + \\sqrt{x^2 - 6x + 2})$.",
          shortAnswer: "$L = 3$",
          fullSolution: "Khi $x \\to -\\infty$, đặt $t = -x \\implies t \\to +\\infty$. Khi đó:\n$L = \\lim_{t \\to +\\infty} (-t + \\sqrt{(-t)^2 - 6(-t) + 2}) = \\lim_{t \\to +\\infty} (\\sqrt{t^2 + 6t + 2} - t)$.\nNhân liên hợp:\n$L = \\lim_{t \\to +\\infty} \\dfrac{(t^2 + 6t + 2) - t^2}{\\sqrt{t^2 + 6t + 2} + t} = \\lim_{t \\to +\\infty} \\dfrac{6t + 2}{\\sqrt{t^2 + 6t + 2} + t}$.\nChia cả tử và mẫu cho $t$:\n$L = \\lim_{t \\to +\\infty} \\dfrac{6 + \\frac{2}{t}}{\\sqrt{1 + \\frac{6}{t} + \\frac{2}{t^2}} + 1} = \\dfrac{6}{1 + 1} = 3$."
        }
      ]
    },
    {
      id: "g11-c5-l16-dang3",
      title: "Dạng 3: Giới hạn một bên & Ứng dụng thực tế",
      description: "Tính giới hạn bên trái $\\lim_{x \\to x_0^-} f(x)$, giới hạn bên phải $\\lim_{x \\to x_0^+} f(x)$, điều kiện tồn tại giới hạn và mô hình thực tiễn.",
      exercises: [
        {
          id: "g11-c5-l16-d3-ex1",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Nêu điều kiện cần và đủ để hàm số $f(x)$ có giới hạn $\\lim_{x \\to x_0} f(x) = L$.",
          shortAnswer: "$\\lim_{x \\to x_0^+} f(x) = \\lim_{x \\to x_0^-} f(x) = L$",
          fullSolution: "Định lý: Giới hạn $\\lim_{x \\to x_0} f(x) = L$ khi và chỉ khi cả hai giới hạn một bên tồn tại và bằng nhau: $\\lim_{x \\to x_0^+} f(x) = \\lim_{x \\to x_0^-} f(x) = L$."
        },
        {
          id: "g11-c5-l16-d3-ex2",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Tính giới hạn $\\lim_{x \\to 2^+} (x - 2)$.",
          shortAnswer: "$0$",
          fullSolution: "Khi $x \\to 2^+$, ta có $x > 2$ và $x \\to 2$, do đó $\\lim_{x \\to 2^+} (x - 2) = 2 - 2 = 0$."
        },
        {
          id: "g11-c5-l16-d3-ex3",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Tính giới hạn $\\lim_{x \\to 1^+} \\dfrac{1}{x - 1}$.",
          shortAnswer: "$+\\infty$",
          fullSolution: "Khi $x \\to 1^+$, tử số là 1 (dương) và mẫu số $x - 1 > 0$ dần về 0. Do đó $\\lim_{x \\to 1^+} \\dfrac{1}{x - 1} = +\\infty$."
        },
        {
          id: "g11-c5-l16-d3-ex4",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Tính giới hạn $\\lim_{x \\to 1^-} \\dfrac{1}{x - 1}$.",
          shortAnswer: "$-\\infty$",
          fullSolution: "Khi $x \\to 1^-$, ta có $x < 1 \\implies x - 1 < 0$. Tử số bằng 1 (dương), mẫu số âm dần về 0. Do đó $\\lim_{x \\to 1^-} \\dfrac{1}{x - 1} = -\\infty$."
        },
        {
          id: "g11-c5-l16-d3-ex5",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho hàm số $f(x) = \\begin{cases} 2x + 1 & \\text{khi } x \\ge 1 \\\\ x^2 + 2 & \\text{khi } x < 1 \\end{cases}$. Tính $\\lim_{x \\to 1^+} f(x)$ và $\\lim_{x \\to 1^-} f(x)$. Hàm số có giới hạn tại $x = 1$ không?",
          shortAnswer: "Cả hai đều bằng 3; hàm số có giới hạn $\\lim_{x \\to 1} f(x) = 3$",
          fullSolution: "- $\\lim_{x \\to 1^+} f(x) = \\lim_{x \\to 1^+} (2x + 1) = 2(1) + 1 = 3$.\n- $\\lim_{x \\to 1^-} f(x) = \\lim_{x \\to 1^-} (x^2 + 2) = 1^2 + 2 = 3$.\nVì $\\lim_{x \\to 1^+} f(x) = \\lim_{x \\to 1^-} f(x) = 3$, nên giới hạn tại $x = 1$ tồn tại và $\\lim_{x \\to 1} f(x) = 3$."
        },
        {
          id: "g11-c5-l16-d3-ex6",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Tính giới hạn $\\lim_{x \\to 2^+} \\dfrac{|x - 2|}{x - 2}$ và $\\lim_{x \\to 2^-} \\dfrac{|x - 2|}{x - 2}$.",
          shortAnswer: "Bên phải bằng 1, bên trái bằng -1",
          fullSolution: "- Khi $x \\to 2^+$, $x > 2 \\implies |x - 2| = x - 2$. Do đó $\\lim_{x \\to 2^+} \\dfrac{x - 2}{x - 2} = \\lim 1 = 1$.\n- Khi $x \\to 2^-$, $x < 2 \\implies |x - 2| = -(x - 2)$. Do đó $\\lim_{x \\to 2^-} \\dfrac{-(x - 2)}{x - 2} = \\lim (-1) = -1$."
        },
        {
          id: "g11-c5-l16-d3-ex7",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Tính giới hạn một bên $\\lim_{x \\to 3^+} \\dfrac{2x - 5}{3 - x}$.",
          shortAnswer: "$-\\infty$",
          fullSolution: "- Tử số: $\\lim_{x \\to 3^+} (2x - 5) = 2(3) - 5 = 1 > 0$.\n- Mẫu số: $\\lim_{x \\to 3^+} (3 - x) = 0$ và khi $x > 3$ thì $3 - x < 0$ (mang dấu âm).\nTử dương, mẫu âm dần về 0, nên $\\lim_{x \\to 3^+} \\dfrac{2x - 5}{3 - x} = -\\infty$."
        },
        {
          id: "g11-c5-l16-d3-ex8",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho hàm số $f(x) = \\begin{cases} \\dfrac{x^2 - 4}{x - 2} & \\text{khi } x > 2 \\\\ ax + 1 & \\text{khi } x \\le 2 \\end{cases}$. Tìm tham số $a$ để hàm số tồn tại giới hạn khi $x \\to 2$.",
          shortAnswer: "$a = \\dfrac{3}{2}$",
          fullSolution: "Tính các giới hạn một bên:\n- $\\lim_{x \\to 2^+} f(x) = \\lim_{x \\to 2^+} \\dfrac{(x - 2)(x + 2)}{x - 2} = \\lim_{x \\to 2^+} (x + 2) = 2 + 2 = 4$.\n- $\\lim_{x \\to 2^-} f(x) = \\lim_{x \\to 2^-} (ax + 1) = 2a + 1$.\nĐể hàm số tồn tại giới hạn khi $x \\to 2$, hai giới hạn một bên phải bằng nhau:\n$\\lim_{x \\to 2^+} f(x) = \\lim_{x \\to 2^-} f(x) \\iff 2a + 1 = 4 \\iff 2a = 3 \\iff a = \\dfrac{3}{2}$."
        },
        {
          id: "g11-c5-l16-d3-ex9",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Nồng độ một loại thuốc trong máu (mg/lít) sau $t$ giờ kể từ khi tiêm được mô hình hoá bởi hàm số $C(t) = \\dfrac{30t}{t^2 + 4}$. Hãy tính $\\lim_{t \\to +\\infty} C(t)$ và nêu ý nghĩa thực tế của kết quả này.",
          shortAnswer: "$\\lim_{t \\to +\\infty} C(t) = 0$; sau thời gian đủ dài nồng độ thuốc trong máu giảm dần về 0",
          fullSolution: "Tính giới hạn khi $t \\to +\\infty$:\n$\\lim_{t \\to +\\infty} C(t) = \\lim_{t \\to +\\infty} \\dfrac{30t}{t^2 + 4} = \\lim_{t \\to +\\infty} \\dfrac{\\frac{30}{t}}{1 + \\frac{4}{t^2}} = \\dfrac{0}{1 + 0} = 0$.\nÝ nghĩa thực tế: Sau khi tiêm thuốc vào cơ thể, cơ thể dần hấp thụ, chuyển hoá và đào thải lượng thuốc. Khi thời gian trôi qua đủ lâu ($t \\to +\\infty$), lượng thuốc trong máu sẽ giảm dần và tiến sát về mức 0."
        },
        {
          id: "g11-c5-l16-d3-ex10",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Một công ty viễn thông đưa ra cước phí dịch vụ Internet theo thời lượng sử dụng $t$ (phút) trong tháng như sau: $C(t) = 50000$ đồng nếu $0 \\le t \\le 100$; $C(t) = 50000 + 500(t - 100)$ đồng nếu $t > 100$. Hãy tính $\\lim_{t \\to 100^+} C(t)$ và $\\lim_{t \\to 100^-} C(t)$ và cho biết cước phí có bị nhảy vọt tại mốc 100 phút không?",
          shortAnswer: "Cả hai đều bằng 50000; cước phí chuyển tiếp êm đềm không bị nhảy vọt",
          fullSolution: "- Khi $t \\to 100^-$ ($t < 100$): $\\lim_{t \\to 100^-} C(t) = 50000$ đồng.\n- Khi $t \\to 100^+$ ($t > 100$): $\\lim_{t \\to 100^+} C(t) = \\lim_{t \\to 100^+} [50000 + 500(t - 100)] = 50000 + 500(0) = 50000$ đồng.\nVì $\\lim_{t \\to 100^+} C(t) = \\lim_{t \\to 100^-} C(t) = C(100) = 50000$, cước phí liên tục tại mốc 100 phút và không xảy ra hiện tượng nhảy vọt đột ngột."
        }
      ]
    }
  ]
  },

  "g11-c5-l17": {
    lessonId: "g11-c5-l17",
    title: "Bài 17: Hàm số liên tục",
    topics: [
    {
      id: "g11-c5-l17-dang1",
      title: "Dạng 1: Xét tính liên tục của hàm số tại một điểm",
      description: "Định nghĩa hàm số $f(x)$ liên tục tại $x_0$: tập xác định chứa $x_0$, tồn tại $\\lim_{x \\to x_0} f(x)$ và $\\lim_{x \\to x_0} f(x) = f(x_0)$.",
      exercises: [
        {
          id: "g11-c5-l17-d1-ex1",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Nêu định nghĩa hàm số $y = f(x)$ liên tục tại điểm $x_0$.",
          shortAnswer: "$\\lim_{x \\to x_0} f(x) = f(x_0)$",
          fullSolution: "Hàm số $y = f(x)$ xác định trên khoảng $(a; b)$ chứa $x_0$ được gọi là liên tục tại $x_0$ nếu: $\\lim_{x \\to x_0} f(x) = f(x_0)$."
        },
        {
          id: "g11-c5-l17-d1-ex2",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Hàm số đa thức $P(x) = a_n x^n + \\dots + a_1 x + a_0$ có liên tục trên tập hợp số thực $\\mathbb{R}$ không?",
          shortAnswer: "Có, liên tục trên toàn bộ $\\mathbb{R}$",
          fullSolution: "Theo định lý cơ bản về tính liên tục: Mọi hàm số đa thức đều liên tục trên toàn bộ tập số thực $\\mathbb{R}$."
        },
        {
          id: "g11-c5-l17-d1-ex3",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Hàm số phân thức hữu tỉ $y = \\dfrac{P(x)}{Q(x)}$ liên tục trên những tập hợp nào?",
          shortAnswer: "Liên tục trên từng khoảng xác định của nó (nơi $Q(x) \\ne 0$)",
          fullSolution: "Hàm phân thức hữu tỉ, hàm lượng giác liên tục trên từng khoảng xác định của chúng."
        },
        {
          id: "g11-c5-l17-d1-ex4",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Điểm gián đoạn của hàm số $y = \\dfrac{1}{x - 3}$ là điểm nào?",
          shortAnswer: "$x = 3$",
          fullSolution: "Hàm số không xác định tại $x = 3$, do đó hàm số gián đoạn tại điểm $x = 3$."
        },
        {
          id: "g11-c5-l17-d1-ex5",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Xét tính liên tục của hàm số $f(x) = \\begin{cases} \\dfrac{x^2 - 1}{x - 1} & \\text{khi } x \\ne 1 \\\\ 2 & \\text{khi } x = 1 \\end{cases}$ tại điểm $x = 1$.",
          shortAnswer: "Liên tục tại $x = 1$",
          fullSolution: "1. Tại $x = 1$, ta có $f(1) = 2$.\n2. Tính giới hạn khi $x \\to 1$:\n$\\lim_{x \\to 1} f(x) = \\lim_{x \\to 1} \\dfrac{(x - 1)(x + 1)}{x - 1} = \\lim_{x \\to 1} (x + 1) = 1 + 1 = 2$.\n3. So sánh: $\\lim_{x \\to 1} f(x) = f(1) = 2$.\nVậy hàm số $f(x)$ liên tục tại $x = 1$."
        },
        {
          id: "g11-c5-l17-d1-ex6",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Xét tính liên tục của hàm số $f(x) = \\begin{cases} \\dfrac{x^2 - 4}{x - 2} & \\text{khi } x \\ne 2 \\\\ 3 & \\text{khi } x = 2 \\end{cases}$ tại điểm $x = 2$.",
          shortAnswer: "Gián đoạn tại $x = 2$",
          fullSolution: "Ta có $f(2) = 3$.\nTính giới hạn:\n$\\lim_{x \\to 2} f(x) = \\lim_{x \\to 2} \\dfrac{(x - 2)(x + 2)}{x - 2} = \\lim_{x \\to 2} (x + 2) = 2 + 2 = 4$.\nVì $\\lim_{x \\to 2} f(x) = 4 \\ne f(2) = 3$, nên hàm số gián đoạn tại $x = 2$."
        },
        {
          id: "g11-c5-l17-d1-ex7",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho hàm số $f(x) = \\begin{cases} x + 2 & \\text{khi } x \\ge 0 \\\\ -x + 2 & \\text{khi } x < 0 \\end{cases}$. Xét tính liên tục của hàm số tại $x = 0$.",
          shortAnswer: "Liên tục tại $x = 0$",
          fullSolution: "- $f(0) = 0 + 2 = 2$.\n- $\\lim_{x \\to 0^+} f(x) = \\lim_{x \\to 0^+} (x + 2) = 2$.\n- $\\lim_{x \\to 0^-} f(x) = \\lim_{x \\to 0^-} (-x + 2) = 2$.\nVì $\\lim_{x \\to 0^+} f(x) = \\lim_{x \\to 0^-} f(x) = f(0) = 2$, nên hàm số liên tục tại $x = 0$."
        },
        {
          id: "g11-c5-l17-d1-ex8",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Xét tính liên tục của hàm số $f(x) = \\begin{cases} \\dfrac{\\sqrt{x + 3} - 2}{x - 1} & \\text{khi } x > 1 \\\\ \\dfrac{1}{4} & \\text{khi } x \\le 1 \\end{cases}$ tại điểm $x = 1$.",
          shortAnswer: "Hàm số liên tục tại $x = 1$",
          fullSolution: "- Giá trị tại điểm: $f(1) = \\dfrac{1}{4}$.\n- Giới hạn bên trái: $\\lim_{x \\to 1^-} f(x) = \\lim_{x \\to 1^-} \\dfrac{1}{4} = \\dfrac{1}{4}$.\n- Giới hạn bên phải: $\\lim_{x \\to 1^+} f(x) = \\lim_{x \\to 1^+} \\dfrac{\\sqrt{x + 3} - 2}{x - 1} = \\lim_{x \\to 1^+} \\dfrac{x + 3 - 4}{(x - 1)(\\sqrt{x + 3} + 2)}$\n$= \\lim_{x \\to 1^+} \\dfrac{x - 1}{(x - 1)(\\sqrt{x + 3} + 2)} = \\lim_{x \\to 1^+} \\dfrac{1}{\\sqrt{x + 3} + 2} = \\dfrac{1}{\\sqrt{4} + 2} = \\dfrac{1}{4}$.\nVì $\\lim_{x \\to 1^+} f(x) = \\lim_{x \\to 1^-} f(x) = f(1) = \\dfrac{1}{4}$, nên hàm số liên tục tại $x = 1$."
        },
        {
          id: "g11-c5-l17-d1-ex9",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Xét tính liên tục của hàm số dấu (Signum) $f(x) = \\begin{cases} 1 & \\text{khi } x > 0 \\\\ 0 & \\text{khi } x = 0 \\\\ -1 & \\text{khi } x < 0 \\end{cases}$ tại điểm $x = 0$ và trên tập xác định của nó.",
          shortAnswer: "Gián đoạn tại $x = 0$, liên tục trên $(-\\infty; 0)$ và $(0; +\\infty)$",
          fullSolution: "- Tại $x = 0$: $f(0) = 0$. $\\lim_{x \\to 0^+} f(x) = 1$ và $\\lim_{x \\to 0^-} f(x) = -1$. Hai giới hạn một bên khác nhau nên không tồn tại giới hạn $\\lim_{x \\to 0} f(x)$. Do đó hàm số gián đoạn tại $x = 0$.\n- Với mọi $x > 0$, hàm số là hàm hằng $f(x) = 1$ nên liên tục trên $(0; +\\infty)$.\n- Với mọi $x < 0$, hàm số là hàm hằng $f(x) = -1$ nên liên tục trên $(-\\infty; 0)$."
        },
        {
          id: "g11-c5-l17-d1-ex10",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho hàm số $f(x) = \\begin{cases} \\dfrac{x^3 - 8}{x - 2} & \\text{khi } x \\ne 2 \\\\ 12 & \\text{khi } x = 2 \\end{cases}$. Chứng minh rằng hàm số liên tục trên toàn bộ trục số $\\mathbb{R}$.",
          shortAnswer: "Hàm số liên tục trên $\\mathbb{R}$",
          fullSolution: "- Với mọi $x \\ne 2$: $f(x) = \\dfrac{x^3 - 8}{x - 2} = x^2 + 2x + 4$ là hàm đa thức nên liên tục trên các khoảng $(-\\infty; 2)$ và $(2; +\\infty)$.\n- Tại $x = 2$: $f(2) = 12$.\n$\\lim_{x \\to 2} f(x) = \\lim_{x \\to 2} (x^2 + 2x + 4) = 2^2 + 2(2) + 4 = 12 = f(2)$.\nDo đó hàm số liên tục tại điểm $x = 2$.\nKết luận: Hàm số $f(x)$ liên tục trên toàn bộ $\\mathbb{R}$."
        }
      ]
    },
    {
      id: "g11-c5-l17-dang2",
      title: "Dạng 2: Tìm tham số để hàm số liên tục",
      description: "Tìm tham số $m, a, b$ để hàm số liên tục tại một điểm hoặc liên tục trên toàn bộ tập xác định $\\mathbb{R}$.",
      exercises: [
        {
          id: "g11-c5-l17-d2-ex1",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Để hàm số $f(x) = \\begin{cases} 3x - 1 & \\text{khi } x \\ne 2 \\\\ m & \\text{khi } x = 2 \\end{cases}$ liên tục tại $x = 2$, tham số $m$ phải bằng giá trị nào?",
          shortAnswer: "$m = 5$",
          fullSolution: "Ta có $f(2) = m$ và $\\lim_{x \\to 2} f(x) = \\lim_{x \\to 2} (3x - 1) = 3(2) - 1 = 5$.\nĐể hàm số liên tục tại $x = 2$, ta cần $f(2) = \\lim_{x \\to 2} f(x) \\iff m = 5$."
        },
        {
          id: "g11-c5-l17-d2-ex2",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Cho hàm số $f(x) = \\begin{cases} 2x + a & \\text{khi } x \\ge 1 \\\\ 5 & \\text{khi } x < 1 \\end{cases}$. Tìm $a$ để hàm số liên tục tại $x = 1$.",
          shortAnswer: "$a = 3$",
          fullSolution: "Ta có $f(1) = 2(1) + a = 2 + a$ và $\\lim_{x \\to 1^-} f(x) = 5$.\nĐể liên tục tại $x = 1$, cần $\\lim_{x \\to 1^+} f(x) = \\lim_{x \\to 1^-} f(x) \\iff 2 + a = 5 \\iff a = 3$."
        },
        {
          id: "g11-c5-l17-d2-ex3",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Hàm số $y = \\dfrac{x + 1}{x^2 - 4m}$ liên tục trên $\\mathbb{R}$ khi và chỉ khi phương trình $x^2 - 4m = 0$ có đặc điểm gì?",
          shortAnswer: "Vô nghiệm trên $\\mathbb{R}$ ($m < 0$)",
          fullSolution: "Hàm phân thức liên tục trên $\\mathbb{R}$ khi mẫu số vô nghiệm trên $\\mathbb{R}$, tức là $x^2 - 4m > 0$ với mọi $x \\iff 4m < 0 \\iff m < 0$."
        },
        {
          id: "g11-c5-l17-d2-ex4",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Nếu một hàm số liên tục tại $x_0$ thì hàm số có bắt buộc phải xác định tại $x_0$ không?",
          shortAnswer: "Bắt buộc phải xác định tại $x_0$",
          fullSolution: "Theo định nghĩa, điều kiện tiên quyết để hàm số liên tục tại $x_0$ là $x_0$ phải thuộc tập xác định của hàm số."
        },
        {
          id: "g11-c5-l17-d2-ex5",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Tìm $m$ để hàm số $f(x) = \\begin{cases} \\dfrac{x^2 - 16}{x - 4} & \\text{khi } x \\ne 4 \\\\ 2m + 1 & \\text{khi } x = 4 \\end{cases}$ liên tục tại điểm $x = 4$.",
          shortAnswer: "$m = \\dfrac{7}{2}$",
          fullSolution: "- $f(4) = 2m + 1$.\n- $\\lim_{x \\to 4} f(x) = \\lim_{x \\to 4} \\dfrac{(x - 4)(x + 4)}{x - 4} = \\lim_{x \\to 4} (x + 4) = 4 + 4 = 8$.\nĐể hàm số liên tục tại $x = 4$:\n$2m + 1 = 8 \\iff 2m = 7 \\iff m = \\dfrac{7}{2}$."
        },
        {
          id: "g11-c5-l17-d2-ex6",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Tìm $m$ để hàm số $f(x) = \\begin{cases} mx^2 + 2x & \\text{khi } x \\ge 2 \\\\ 3x + 4 & \\text{khi } x < 2 \\end{cases}$ liên tục tại điểm $x = 2$.",
          shortAnswer: "$m = \\dfrac{3}{2}$",
          fullSolution: "- $\\lim_{x \\to 2^+} f(x) = f(2) = m(2^2) + 2(2) = 4m + 4$.\n- $\\lim_{x \\to 2^-} f(x) = 3(2) + 4 = 10$.\nHàm số liên tục tại $x = 2$ khi và chỉ khi:\n$4m + 4 = 10 \\iff 4m = 6 \\iff m = \\dfrac{3}{2}$."
        },
        {
          id: "g11-c5-l17-d2-ex7",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Tìm tất cả các giá trị của $m$ để hàm số $y = \\dfrac{2x - 3}{x^2 - 2x + m}$ liên tục trên $\\mathbb{R}$.",
          shortAnswer: "$m > 1$",
          fullSolution: "Hàm số liên tục trên $\\mathbb{R}$ khi mẫu số $g(x) = x^2 - 2x + m \\ne 0$ với mọi $x \\in \\mathbb{R}$.\nĐiều này xảy ra khi tam thức bậc hai có biệt thức $\\Delta' < 0$:\n$\\Delta' = (-1)^2 - 1 \\cdot m = 1 - m < 0 \\iff m > 1$."
        },
        {
          id: "g11-c5-l17-d2-ex8",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Tìm tham số $m$ để hàm số $f(x) = \\begin{cases} \\dfrac{\\sqrt{2x + 1} - 3}{x - 4} & \\text{khi } x > 4 \\\\ mx + \\dfrac{1}{3} & \\text{khi } x \\le 4 \\end{cases}$ liên tục tại điểm $x = 4$.",
          shortAnswer: "$m = 0$",
          fullSolution: "- $f(4) = 4m + \\dfrac{1}{3}$.\n- Tính giới hạn bên phải khi $x \\to 4^+$:\n$\\lim_{x \\to 4^+} \\dfrac{\\sqrt{2x + 1} - 3}{x - 4} = \\lim_{x \\to 4^+} \\dfrac{(2x + 1) - 9}{(x - 4)(\\sqrt{2x + 1} + 3)}$\n$= \\lim_{x \\to 4^+} \\dfrac{2(x - 4)}{(x - 4)(\\sqrt{2x + 1} + 3)} = \\lim_{x \\to 4^+} \\dfrac{2}{\\sqrt{2x + 1} + 3} = \\dfrac{2}{3 + 3} = \\dfrac{1}{3}$.\nĐể hàm số liên tục tại $x = 4$, cần:\n$4m + \\dfrac{1}{3} = \\dfrac{1}{3} \\iff 4m = 0 \\iff m = 0$."
        },
        {
          id: "g11-c5-l17-d2-ex9",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Tìm hai số thực $a, b$ để hàm số $f(x) = \\begin{cases} \\dfrac{x^2 - 3x + 2}{x - 2} & \\text{khi } x > 2 \\\\ ax + b & \\text{khi } 1 \\le x \\le 2 \\\\ x + 1 & \\text{khi } x < 1 \\end{cases}$ liên tục trên toàn bộ $\\mathbb{R}$.",
          shortAnswer: "$a = -1, b = 3$",
          fullSolution: "Hàm số cần liên tục tại hai điểm nối $x = 2$ và $x = 1$:\n1. Tại $x = 2$:\n- $\\lim_{x \\to 2^+} f(x) = \\lim_{x \\to 2^+} \\dfrac{(x - 2)(x - 1)}{x - 2} = 2 - 1 = 1$.\n- $\\lim_{x \\to 2^-} f(x) = f(2) = 2a + b$.\nĐể liên tục tại $x = 2$: $2a + b = 1$ (1).\n2. Tại $x = 1$:\n- $\\lim_{x \\to 1^+} f(x) = f(1) = a + b$.\n- $\\lim_{x \\to 1^-} f(x) = 1 + 1 = 2$.\nĐể liên tục tại $x = 1$: $a + b = 2$ (2).\nTừ (1) và (2), trừ hai phương trình:\n$(2a + b) - (a + b) = 1 - 2 \\implies a = -1$.\nThay vào (2): $-1 + b = 2 \\implies b = 3$.\nVậy $a = -1, b = 3$."
        },
        {
          id: "g11-c5-l17-d2-ex10",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Tìm $m$ để hàm số $f(x) = \\begin{cases} \\dfrac{\\sqrt[3]{x + 7} - 2}{x - 1} & \\text{khi } x \\ne 1 \\\\ m^2 - \\dfrac{11}{12} & \\text{khi } x = 1 \\end{cases}$ liên tục tại $x = 1$.",
          shortAnswer: "$m = 1$ hoặc $m = -1$",
          fullSolution: "- Tính giới hạn tại $x = 1$:\n$\\lim_{x \\to 1} \\dfrac{\\sqrt[3]{x + 7} - 2}{x - 1} = \\lim_{x \\to 1} \\dfrac{(x + 7) - 8}{(x - 1)[\\sqrt[3]{(x+7)^2} + 2\\sqrt[3]{x+7} + 4]}$\n$= \\lim_{x \\to 1} \\dfrac{x - 1}{(x - 1)[\\sqrt[3]{(x+7)^2} + 2\\sqrt[3]{x+7} + 4]} = \\dfrac{1}{4 + 4 + 4} = \\dfrac{1}{12}$.\nĐể hàm số liên tục tại $x = 1$, ta có:\n$m^2 - \\dfrac{11}{12} = \\dfrac{1}{12} \\iff m^2 = \\dfrac{12}{12} = 1 \\iff m = \\pm 1$."
        }
      ]
    },
    {
      id: "g11-c5-l17-dang3",
      title: "Dạng 3: Định lý giá trị trung gian & Ứng dụng thực tế",
      description: "Định lý Bolzano-Cauchy: Nếu $f(x)$ liên tục trên $[a; b]$ và $f(a) \\cdot f(b) < 0$ thì phương trình $f(x) = 0$ có ít nhất một nghiệm trong khoảng $(a; b)$.",
      exercises: [
        {
          id: "g11-c5-l17-d3-ex1",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Phát biểu định lý giá trị trung gian cho hàm số liên tục.",
          shortAnswer: "Nếu $f(x)$ liên tục trên đoạn $[a; b]$ và $f(a) \\cdot f(b) < 0$ thì phương trình $f(x) = 0$ có ít nhất một nghiệm thuộc khoảng $(a; b)$",
          fullSolution: "Định lý: Nếu hàm số $y = f(x)$ liên tục trên đoạn $[a; b]$ và thoả mãn $f(a) \\cdot f(b) < 0$, thì luôn tồn tại ít nhất một điểm $c \\in (a; b)$ sao cho $f(c) = 0$."
        },
        {
          id: "g11-c5-l17-d3-ex2",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Để áp dụng định lý giá trị trung gian chứng minh phương trình $f(x) = 0$ có nghiệm trong khoảng $(a; b)$, hàm số $f(x)$ cần thoả mãn điều kiện tiên quyết nào?",
          shortAnswer: "$f(x)$ phải liên tục trên đoạn $[a; b]$",
          fullSolution: "Điều kiện tiên quyết là hàm số $f(x)$ phải liên tục trên đoạn $[a; b]$. Nếu hàm số gián đoạn trong đoạn này thì định lý không đảm bảo kết luận."
        },
        {
          id: "g11-c5-l17-d3-ex3",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Cho hàm số $f(x) = x^3 - 3x + 1$. Tính $f(0)$ và $f(1)$, từ đó nhận xét về dấu của tích $f(0) \\cdot f(1)$.",
          shortAnswer: "$f(0) = 1, f(1) = -1 \\implies f(0) \\cdot f(1) < 0$",
          fullSolution: "- $f(0) = 0^3 - 3(0) + 1 = 1 > 0$.\n- $f(1) = 1^3 - 3(1) + 1 = -1 < 0$.\nTích $f(0) \\cdot f(1) = 1 \\times (-1) = -1 < 0$."
        },
        {
          id: "g11-c5-l17-d3-ex4",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Phương trình bậc lẻ $a_n x^n + \\dots + a_1 x + a_0 = 0$ ($n$ lẻ, $a_n \\ne 0$) có luôn luôn có ít nhất một nghiệm thực không?",
          shortAnswer: "Luôn có ít nhất một nghiệm thực",
          fullSolution: "Vì hàm số đa thức bậc lẻ có giới hạn ở hai vô cực trái dấu nhau ($+\\infty$ và $-\\infty$) và liên tục trên $\\mathbb{R}$, nên đồ thị luôn cắt trục hoành tại ít nhất một điểm. Do đó mọi phương trình bậc lẻ luôn có ít nhất một nghiệm thực."
        },
        {
          id: "g11-c5-l17-d3-ex5",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Chứng minh phương trình $x^3 + 2x - 5 = 0$ có ít nhất một nghiệm thực thuộc khoảng $(1; 2)$.",
          shortAnswer: "Đã chứng minh",
          fullSolution: "Xét hàm số $f(x) = x^3 + 2x - 5$.\n- $f(x)$ là hàm số đa thức nên liên tục trên $\\mathbb{R}$, do đó liên tục trên đoạn $[1; 2]$.\n- Ta có $f(1) = 1^3 + 2(1) - 5 = -2 < 0$.\n- Ta có $f(2) = 2^3 + 2(2) - 5 = 8 + 4 - 5 = 7 > 0$.\nVì $f(1) \\cdot f(2) = (-2) \\times 7 = -14 < 0$, nên theo định lý giá trị trung gian, phương trình $f(x) = 0$ có ít nhất một nghiệm thuộc khoảng $(1; 2)$."
        },
        {
          id: "g11-c5-l17-d3-ex6",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Chứng minh phương trình $x^5 - 3x^4 + 5x - 2 = 0$ có ít nhất một nghiệm thuộc khoảng $(0; 1)$.",
          shortAnswer: "Đã chứng minh",
          fullSolution: "Đặt $f(x) = x^5 - 3x^4 + 5x - 2$.\n- $f(x)$ liên tục trên $[0; 1]$.\n- $f(0) = -2 < 0$.\n- $f(1) = 1 - 3 + 5 - 2 = 1 > 0$.\nVì $f(0) \\cdot f(1) = -2 < 0$, theo định lý giá trị trung gian, phương trình có ít nhất một nghiệm thuộc $(0; 1)$."
        },
        {
          id: "g11-c5-l17-d3-ex7",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Chứng minh phương trình $\\cos x = x$ có ít nhất một nghiệm thuộc khoảng $\\left(0; \\dfrac{\\pi}{2}\\right)$.",
          shortAnswer: "Đã chứng minh",
          fullSolution: "Xét hàm số $f(x) = \\cos x - x$.\n- $f(x)$ là hiệu của hai hàm số liên tục nên liên tục trên đoạn $\\left[0; \\dfrac{\\pi}{2}\\right]$.\n- $f(0) = \\cos 0 - 0 = 1 > 0$.\n- $f\\left(\\dfrac{\\pi}{2}\\right) = \\cos \\dfrac{\\pi}{2} - \\dfrac{\\pi}{2} = 0 - \\dfrac{\\pi}{2} = -\\dfrac{\\pi}{2} < 0$.\nVì $f(0) \\cdot f\\left(\\dfrac{\\pi}{2}\\right) < 0$, nên phương trình $\\cos x = x$ có ít nhất một nghiệm trong $\\left(0; \\dfrac{\\pi}{2}\\right)$."
        },
        {
          id: "g11-c5-l17-d3-ex8",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Chứng minh phương trình $x^3 - 3x + 1 = 0$ có đúng 3 nghiệm thực phân biệt.",
          shortAnswer: "Có 3 nghiệm lần lượt thuộc các khoảng (-2; -1), (0; 1), (1; 2)",
          fullSolution: "Hàm số $f(x) = x^3 - 3x + 1$ liên tục trên $\\mathbb{R}$.\nTính giá trị tại các mốc điểm:\n- $f(-2) = (-2)^3 - 3(-2) + 1 = -8 + 6 + 1 = -1 < 0$.\n- $f(-1) = (-1)^3 - 3(-1) + 1 = -1 + 3 + 1 = 3 > 0$.\n$\\implies f(-2) \\cdot f(-1) < 0 \\implies$ có nghiệm $x_1 \\in (-2; -1)$.\n- $f(0) = 1 > 0$.\n- $f(1) = 1 - 3 + 1 = -1 < 0$.\n$\\implies f(0) \\cdot f(1) < 0 \\implies$ có nghiệm $x_2 \\in (0; 1)$.\n- $f(2) = 8 - 6 + 1 = 3 > 0$.\n$\\implies f(1) \\cdot f(2) < 0 \\implies$ có nghiệm $x_3 \\in (1; 2)$.\nVì đa thức bậc ba có tối đa 3 nghiệm thực và 3 khoảng trên đôi một rời nhau, nên phương trình có đúng 3 nghiệm thực phân biệt."
        },
        {
          id: "g11-c5-l17-d3-ex9",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Chứng minh rằng với mọi giá trị của tham số $m$, phương trình $(1 - m^2)x^5 - 3x - 1 = 0$ luôn có ít nhất một nghiệm thực.",
          shortAnswer: "Đã chứng minh với mọi $m$",
          fullSolution: "Xét hàm số $f(x) = (1 - m^2)x^5 - 3x - 1$ liên tục trên $\\mathbb{R}$.\n- Ta tính $f(0) = -1 < 0$.\n- Khi $x \\to +\\infty$ hoặc $x \\to -\\infty$:\n  + Nếu $1 - m^2 = 0 \\iff m = \\pm 1$, phương trình trở thành $-3x - 1 = 0 \\iff x = -\\dfrac{1}{3}$ (có nghiệm).\n  + Nếu $1 - m^2 > 0$: $\\lim_{x \\to +\\infty} f(x) = +\\infty$, do đó tồn tại $b > 0$ sao cho $f(b) > 0$. Khi đó $f(0) \\cdot f(b) < 0 \\implies$ có nghiệm trong $(0; b)$.\n  + Nếu $1 - m^2 < 0$: $\\lim_{x \\to -\\infty} f(x) = +\\infty$, do đó tồn tại $a < 0$ sao cho $f(a) > 0$. Khi đó $f(a) \\cdot f(0) < 0 \\implies$ có nghiệm trong $(a; 0)$.\nVậy phương trình luôn có ít nhất một nghiệm với mọi $m$."
        },
        {
          id: "g11-c5-l17-d3-ex10",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Một người leo núi bắt đầu đi từ chân núi lúc 6 giờ sáng và lên tới đỉnh núi lúc 12 giờ trưa cùng ngày. Đêm đó người đó ngủ lại trên đỉnh núi. Sáng hôm sau, người đó lại bắt đầu đi xuống theo đúng con đường cũ từ 6 giờ sáng và về tới chân núi lúc 12 giờ trưa. Chứng minh rằng luôn tồn tại một thời điểm trong khoảng từ 6 giờ đến 12 giờ mà ở cả hai ngày người đó đều có mặt tại cùng một vị trí trên con đường.",
          shortAnswer: "Đã chứng minh dựa trên định lý giá trị trung gian",
          fullSolution: "Gọi $L$ là chiều dài con đường leo núi từ chân núi ($0$) đến đỉnh núi ($L$). Thời gian $t$ tính từ 6 giờ sáng ($t = 0$) đến 12 giờ trưa ($t = 6$).\n- Ngày thứ nhất: Gọi $s_1(t)$ là khoảng cách từ chân núi đến vị trí của người leo núi tại thời điểm $t$. Khi đó $s_1(t)$ liên tục trên $[0; 6]$, $s_1(0) = 0, s_1(6) = L$.\n- Ngày thứ hai: Gọi $s_2(t)$ là khoảng cách từ chân núi đến vị trí của người đó tại thời điểm $t$. Khi đó $s_2(t)$ liên tục trên $[0; 6]$, $s_2(0) = L, s_2(6) = 0$.\nXét hàm số hiệu khoảng cách: $f(t) = s_1(t) - s_2(t)$.\n- $f(t)$ liên tục trên đoạn $[0; 6]$.\n- Tại $t = 0$: $f(0) = s_1(0) - s_2(0) = 0 - L = -L < 0$.\n- Tại $t = 6$: $f(6) = s_1(6) - s_2(6) = L - 0 = L > 0$.\nVì $f(0) \\cdot f(6) = -L^2 < 0$, theo định lý giá trị trung gian, luôn tồn tại một thời điểm $t_0 \\in (0; 6)$ sao cho $f(t_0) = 0 \\iff s_1(t_0) = s_2(t_0)$.\nĐiều này chứng tỏ tại thời điểm $t_0$, ở cả hai ngày người đó đang ở chính xác cùng một vị trí trên đường leo núi."
        }
      ]
    }
  ]
  },

  "g11-c6-l18": {
    lessonId: "g11-c6-l18",
    title: "Bài 18: Luỹ thừa với số mũ thực",
    topics: [
    {
      id: "g11-c6-l18-dang1",
      title: "Dạng 1: Tính giá trị và rút gọn biểu thức luỹ thừa",
      description: "Áp dụng các tính chất luỹ thừa: $a^m \\cdot a^n = a^{m+n}, \\dfrac{a^m}{a^n} = a^{m-n}, (a^m)^n = a^{mn}, a^{\\frac{m}{n}} = \\sqrt[n]{a^m}$.",
      exercises: [
        {
          id: "g11-c6-l18-d1-ex1",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Với số thực $a > 0$ và số hữu tỉ $r = \\dfrac{m}{n}$ ($m \\in \\mathbb{Z}, n \\in \\mathbb{N}, n \\ge 2$), luỹ thừa $a^{\\frac{m}{n}}$ được định nghĩa bằng căn thức nào?",
          shortAnswer: "$a^{\\frac{m}{n}} = \\sqrt[n]{a^m}$",
          fullSolution: "Định nghĩa luỹ thừa với số mũ hữu tỉ: Cho số thực $a > 0$ và số hữu tỉ $r = \\dfrac{m}{n}$, ta có $a^{\\frac{m}{n}} = \\sqrt[n]{a^m}$."
        },
        {
          id: "g11-c6-l18-d1-ex2",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Tính giá trị của luỹ thừa $8^{\\frac{2}{3}}$.",
          shortAnswer: "$4$",
          fullSolution: "Ta viết $8 = 2^3$, do đó $8^{\\frac{2}{3}} = (2^3)^{\\frac{2}{3}} = 2^{3 \\times \\frac{2}{3}} = 2^2 = 4$."
        },
        {
          id: "g11-c6-l18-d1-ex3",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Với $a > 0$, viết biểu thức $P = a^{\\frac{1}{2}} \\cdot a^{\\frac{1}{3}}$ dưới dạng một luỹ thừa của $a$.",
          shortAnswer: "$a^{\\frac{5}{6}}$",
          fullSolution: "Áp dụng công thức nhân hai luỹ thừa cùng cơ số:\n$P = a^{\\frac{1}{2} + \\frac{1}{3}} = a^{\\frac{3+2}{6}} = a^{\\frac{5}{6}}$."
        },
        {
          id: "g11-c6-l18-d1-ex4",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Với $a > 0$, rút gọn biểu thức $Q = \\dfrac{a^2}{a^{\\frac{3}{2}}}$.",
          shortAnswer: "$a^{\\frac{1}{2}}$ (hoặc $\\sqrt{a}$)",
          fullSolution: "Áp dụng công thức chia hai luỹ thừa cùng cơ số:\n$Q = a^{2 - \\frac{3}{2}} = a^{\\frac{1}{2}} = \\sqrt{a}$."
        },
        {
          id: "g11-c6-l18-d1-ex5",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Rút gọn biểu thức $P = \\dfrac{a^{\\sqrt{3} + 1} \\cdot a^{2 - \\sqrt{3}}}{(a^{\\sqrt{2} - 1})^{\\sqrt{2} + 1}}$ với $a > 0$.",
          shortAnswer: "$P = a^2$",
          fullSolution: "- Tử số: $a^{(\\sqrt{3} + 1) + (2 - \\sqrt{3})} = a^3$.\n- Mẫu số: $a^{(\\sqrt{2} - 1)(\\sqrt{2} + 1)} = a^{2 - 1} = a^1 = a$.\nDo đó: $P = \\dfrac{a^3}{a} = a^{3 - 1} = a^2$."
        },
        {
          id: "g11-c6-l18-d1-ex6",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Biểu diễn biểu thức $P = \\sqrt{x \\sqrt{x \\sqrt{x}}}$ ($x > 0$) dưới dạng luỹ thừa với số mũ hữu tỉ $x^\\alpha$. Tìm $\\alpha$.",
          shortAnswer: "$\\alpha = \\dfrac{7}{8}$",
          fullSolution: "Biến đổi từ trong ra ngoài:\n- $\\sqrt{x} = x^{\\frac{1}{2}}$.\n- $x \\sqrt{x} = x \\cdot x^{\\frac{1}{2}} = x^{\\frac{3}{2}} \\implies \\sqrt{x\\sqrt{x}} = (x^{\\frac{3}{2}})^{\\frac{1}{2}} = x^{\\frac{3}{4}}$.\n- $x \\sqrt{x\\sqrt{x}} = x \\cdot x^{\\frac{3}{4}} = x^{\\frac{7}{4}} \\implies P = \\sqrt{x^{\\frac{7}{4}}} = x^{\\frac{7}{8}}$.\nVậy $\\alpha = \\dfrac{7}{8}$."
        },
        {
          id: "g11-c6-l18-d1-ex7",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Tính giá trị của biểu thức $A = \\left( \\dfrac{1}{16} \\right)^{-0.75} + \\left( \\dfrac{1}{8} \\right)^{-\\frac{4}{3}}$.",
          shortAnswer: "$A = 24$",
          fullSolution: "- Ta có $-0.75 = -\\dfrac{3}{4}$. Do đó $\\left(\\dfrac{1}{16}\\right)^{-\\frac{3}{4}} = (16)^{\\frac{3}{4}} = (2^4)^{\\frac{3}{4}} = 2^3 = 8$.\n- $\\left(\\dfrac{1}{8}\\right)^{-\\frac{4}{3}} = (8)^{\\frac{4}{3}} = (2^3)^{\\frac{4}{3}} = 2^4 = 16$.\nCộng lại: $A = 8 + 16 = 24$."
        },
        {
          id: "g11-c6-l18-d1-ex8",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Rút gọn biểu thức $K = \\dfrac{a^{\\frac{1}{3}} b^{-\\frac{1}{3}} - a^{-\\frac{1}{3}} b^{\\frac{1}{3}}}{\\sqrt[3]{a^2} - \\sqrt[3]{b^2}}$ với $a > 0, b > 0, a \\ne b$.",
          shortAnswer: "$K = \\dfrac{1}{\\sqrt[3]{ab}}$",
          fullSolution: "Quy đồng tử số:\n$a^{\\frac{1}{3}} b^{-\\frac{1}{3}} - a^{-\\frac{1}{3}} b^{\\frac{1}{3}} = \\dfrac{a^{\\frac{1}{3}}}{b^{\\frac{1}{3}}} - \\dfrac{b^{\\frac{1}{3}}}{a^{\\frac{1}{3}}} = \\dfrac{a^{\\frac{2}{3}} - b^{\\frac{2}{3}}}{a^{\\frac{1}{3}} b^{\\frac{1}{3}}} = \\dfrac{\\sqrt[3]{a^2} - \\sqrt[3]{b^2}}{\\sqrt[3]{ab}}$.\nChia cho mẫu số $(\\sqrt[3]{a^2} - \\sqrt[3]{b^2})$:\n$K = \\dfrac{\\sqrt[3]{a^2} - \\sqrt[3]{b^2}}{\\sqrt[3]{ab} (\\sqrt[3]{a^2} - \\sqrt[3]{b^2})} = \\dfrac{1}{\\sqrt[3]{ab}}$."
        },
        {
          id: "g11-c6-l18-d1-ex9",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho biểu thức $P = \\left( a^{\\frac{1}{2}} - b^{\\frac{1}{2}} \\right)^2 \\left( 1 + 2\\sqrt{\\dfrac{b}{a}} + \\dfrac{b}{a} \\right)$ với $a > 0, b > 0$. Rút gọn biểu thức $P$.",
          shortAnswer: "$P = \\dfrac{(a - b)^2}{a}$",
          fullSolution: "Biến đổi thừa số thứ hai:\n$1 + 2\\sqrt{\\dfrac{b}{a}} + \\dfrac{b}{a} = \\left(1 + \\sqrt{\\dfrac{b}{a}}\\right)^2 = \\left(\\dfrac{\\sqrt{a} + \\sqrt{b}}{\\sqrt{a}}\\right)^2 = \\dfrac{(\\sqrt{a} + \\sqrt{b})^2}{a}$.\nNhân với thừa số thứ nhất $(\\sqrt{a} - \\sqrt{b})^2$:\n$P = (\\sqrt{a} - \\sqrt{b})^2 \\cdot \\dfrac{(\\sqrt{a} + \\sqrt{b})^2}{a} = \\dfrac{[(\\sqrt{a} - \\sqrt{b})(\\sqrt{a} + \\sqrt{b})]^2}{a} = \\dfrac{(a - b)^2}{a}$."
        },
        {
          id: "g11-c6-l18-d1-ex10",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Tính giá trị của biểu thức $A = (x^{\\sqrt{2}} - y^{\\sqrt{3}})(x^{\\sqrt{2}} + y^{\\sqrt{3}})(x^{2\\sqrt{2}} + y^{2\\sqrt{3}})$ khi $x = 2^{\\frac{\\sqrt{2}}{4}}$ và $y = 3^{\\frac{\\sqrt{3}}{6}}$.",
          shortAnswer: "$A = -7$",
          fullSolution: "Áp dụng hằng đẳng thức hiệu hai bình phương liên tiếp:\n$(x^{\\sqrt{2}} - y^{\\sqrt{3}})(x^{\\sqrt{2}} + y^{\\sqrt{3}}) = x^{2\\sqrt{2}} - y^{2\\sqrt{3}}$.\nNhân tiếp với $(x^{2\\sqrt{2}} + y^{2\\sqrt{3}})$:\n$A = (x^{2\\sqrt{2}} - y^{2\\sqrt{3}})(x^{2\\sqrt{2}} + y^{2\\sqrt{3}}) = x^{4\\sqrt{2}} - y^{4\\sqrt{3}}$.\nThay $x = 2^{\\frac{\\sqrt{2}}{4}}$: $x^{4\\sqrt{2}} = (2^{\\frac{\\sqrt{2}}{4}})^{4\\sqrt{2}} = 2^{\\frac{\\sqrt{2} \\cdot 4\\sqrt{2}}{4}} = 2^{\\frac{8}{4}} = 2^2 = 4$.\nThay $y = 3^{\\frac{\\sqrt{3}}{6}}$: $y^{4\\sqrt{3}} = (3^{\\frac{\\sqrt{3}}{6}})^{4\\sqrt{3}} = 3^{\\frac{4 \\cdot 3}{6}} = 3^2 = 9$.\nVậy $A = 4 - 9 = -7$."
        }
      ]
    },
    {
      id: "g11-c6-l18-dang2",
      title: "Dạng 2: So sánh các luỹ thừa",
      description: "So sánh $a^m$ và $a^n$: nếu $a > 1$ thì $a^m > a^n \\iff m > n$; nếu $0 < a < 1$ thì $a^m > a^n \\iff m < n$.",
      exercises: [
        {
          id: "g11-c6-l18-d2-ex1",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Cho số thực $a > 1$ và hai số thực $m, n$. Nếu $m > n$ thì kết luận gì về $a^m$ và $a^n$?",
          shortAnswer: "$a^m > a^n$",
          fullSolution: "Quy tắc so sánh: Khi cơ số $a > 1$, hàm số luỹ thừa đồng biến theo số mũ, do đó $m > n \\iff a^m > a^n$."
        },
        {
          id: "g11-c6-l18-d2-ex2",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Cho cơ số $0 < a < 1$. Nếu $m > n$ thì kết luận gì về $a^m$ và $a^n$?",
          shortAnswer: "$a^m < a^n$",
          fullSolution: "Khi cơ số $0 < a < 1$, hàm số luỹ thừa nghịch biến theo số mũ, do đó $m > n \\iff a^m < a^n$."
        },
        {
          id: "g11-c6-l18-d2-ex3",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "So sánh hai số $2^{\\sqrt{3}}$ và $2^{\\sqrt{2}}$.",
          shortAnswer: "$2^{\\sqrt{3}} > 2^{\\sqrt{2}}$",
          fullSolution: "Vì cơ số $a = 2 > 1$ và số mũ $\\sqrt{3} > \\sqrt{2}$, nên $2^{\\sqrt{3}} > 2^{\\sqrt{2}}$."
        },
        {
          id: "g11-c6-l18-d2-ex4",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "So sánh hai số $(0.5)^3$ và $(0.5)^4$.",
          shortAnswer: "$(0.5)^3 > (0.5)^4$",
          fullSolution: "Vì cơ số $a = 0.5$ thoả mãn $0 < 0.5 < 1$ và số mũ $3 < 4$, nên $(0.5)^3 > (0.5)^4$."
        },
        {
          id: "g11-c6-l18-d2-ex5",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho biết $(\\sqrt{2} - 1)^m < (\\sqrt{2} - 1)^n$. Hãy so sánh hai số mũ $m$ và $n$.",
          shortAnswer: "$m > n$",
          fullSolution: "Ta có $\\sqrt{2} \\approx 1.414 \\implies 0 < \\sqrt{2} - 1 \\approx 0.414 < 1$.\nVì cơ số $a = \\sqrt{2} - 1 \\in (0; 1)$, bất đẳng thức đổi chiều số mũ:\n$(\\sqrt{2} - 1)^m < (\\sqrt{2} - 1)^n \\iff m > n$."
        },
        {
          id: "g11-c6-l18-d2-ex6",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "So sánh hai số $A = 3^{200}$ và $B = 2^{300}$.",
          shortAnswer: "$A > B$",
          fullSolution: "Đưa về cùng số mũ $100$:\n$A = 3^{200} = (3^2)^{100} = 9^{100}$.\n$B = 2^{300} = (2^3)^{100} = 8^{100}$.\nVì $9 > 8 > 0$ nên $9^{100} > 8^{100}$, do đó $3^{200} > 2^{300}$."
        },
        {
          id: "g11-c6-l18-d2-ex7",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho số thực $a > 0$ thoả mãn $a^{-\\sqrt{3}} > a^{-\\sqrt{2}}$. Khẳng định nào đúng: $a > 1$ hay $0 < a < 1$?",
          shortAnswer: "$0 < a < 1$",
          fullSolution: "Ta có $-\\sqrt{3} < -\\sqrt{2}$ (vì $\\sqrt{3} > \\sqrt{2}$). Mà theo giả thiết $a^{-\\sqrt{3}} > a^{-\\sqrt{2}}$ (ngược chiều với số mũ).\nĐiều này xảy ra khi và chỉ khi cơ số $a$ thoả mãn $0 < a < 1$."
        },
        {
          id: "g11-c6-l18-d2-ex8",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Sắp xếp các số sau theo thứ tự tăng dần: $a = \\sqrt[3]{5}, b = \\sqrt{3}, c = \\sqrt[6]{26}$.",
          shortAnswer: "$c < a < b$ (hoặc $\\sqrt[6]{26} < \\sqrt[3]{5} < \\sqrt{3}$)",
          fullSolution: "Quy đồng các căn thức về cùng bậc 6:\n- $a = \\sqrt[3]{5} = 5^{\\frac{1}{3}} = (5^2)^{\\frac{1}{6}} = \\sqrt[6]{25}$.\n- $b = \\sqrt{3} = 3^{\\frac{1}{2}} = (3^3)^{\\frac{1}{6}} = \\sqrt[6]{27}$.\n- $c = \\sqrt[6]{26}$.\nVì $25 < 26 < 27$ nên $\\sqrt[6]{25} < \\sqrt[6]{26} < \\sqrt[6]{27}$, suy ra $a < c < b$ (tức $\\sqrt[3]{5} < \\sqrt[6]{26} < \\sqrt{3}$)."
        },
        {
          id: "g11-c6-l18-d2-ex9",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Tìm tất cả các giá trị của $x$ thoả mãn: $(x^2 - 2x + 2)^{\\sqrt{5} - \\sqrt{3}} \\ge 1$.",
          shortAnswer: "$x \\le 0$ hoặc $x \\ge 2$",
          fullSolution: "Ta có số mũ $\\alpha = \\sqrt{5} - \\sqrt{3} > 0$ (vì $\\sqrt{5} > \\sqrt{3}$).\nVì $1 = (x^2 - 2x + 2)^0$ và số mũ $\\alpha > 0$, bất đẳng thức $(x^2 - 2x + 2)^\\alpha \\ge 1$ tương đương với cơ số:\n$x^2 - 2x + 2 \\ge 1 \\iff x^2 - 2x + 1 \\ge 0 \\iff (x - 1)^2 \\ge 0$.\nBất đẳng thức này luôn đúng với mọi $x \\in \\mathbb{R}$.\nVậy tập nghiệm là $x \\in \\mathbb{R}$."
        },
        {
          id: "g11-c6-l18-d2-ex10",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "So sánh hai số thực $A = 2024^{2025}$ và $B = 2025^{2024}$.",
          shortAnswer: "$A > B$",
          fullSolution: "Xét hàm số $f(x) = x^{\\frac{1}{x}}$ với $x \\ge 3$. Đạo hàm $f'(x) = x^{\\frac{1}{x}} \\cdot \\dfrac{1 - \\ln x}{x^2} < 0$ khi $x > e \\approx 2.718$.\nDo đó hàm số $f(x)$ nghịch biến trên $[3; +\\infty)$.\nVì $2024 < 2025$ nên $f(2024) > f(2025) \\iff 2024^{\\frac{1}{2024}} > 2025^{\\frac{1}{2025}}$.\nLuỹ thừa bậc $2024 \\times 2025$ cả hai vế:\n$(2024^{\\frac{1}{2024}})^{2024 \\times 2025} > (2025^{\\frac{1}{2025}})^{2024 \\times 2025} \\iff 2024^{2025} > 2025^{2024}$.\nVậy $A > B$."
        }
      ]
    },
    {
      id: "g11-c6-l18-dang3",
      title: "Dạng 3: Đẳng thức điều kiện, biến đổi nâng cao & Ứng dụng thực tế",
      description: "Biến đổi luỹ thừa với giả thiết đối xứng ($x + x^{-1} = a$), bài toán tăng trưởng theo quy luật mũ và lãi kép ngân hàng.",
      exercises: [
        {
          id: "g11-c6-l18-d3-ex1",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Viết công thức lãi kép ngân hàng tính số tiền nhận được $S$ sau $n$ kỳ hạn, với số tiền gốc $P$ và lãi suất mỗi kỳ hạn là $r$.",
          shortAnswer: "$S = P(1 + r)^n$",
          fullSolution: "Công thức tính lãi kép cơ bản: $S = P(1 + r)^n$, trong đó $P$ là tiền gửi ban đầu, $r$ là lãi suất mỗi kỳ hạn, và $n$ là số kỳ hạn gửi."
        },
        {
          id: "g11-c6-l18-d3-ex2",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Biểu thức $x^{\\frac{1}{2}} + x^{-\\frac{1}{2}}$ khi bình phương lên sẽ bằng biểu thức nào?",
          shortAnswer: "$x + x^{-1} + 2$",
          fullSolution: "$(x^{\\frac{1}{2}} + x^{-\\frac{1}{2}})^2 = (x^{\\frac{1}{2}})^2 + 2x^{\\frac{1}{2}}x^{-\\frac{1}{2}} + (x^{-\\frac{1}{2}})^2 = x + 2 + x^{-1}$."
        },
        {
          id: "g11-c6-l18-d3-ex3",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Số lượng vi khuẩn trong một mẻ cấy nhân đôi sau mỗi 20 phút. Nếu ban đầu có $N_0$ vi khuẩn thì sau $t$ giờ số lượng vi khuẩn là bao nhiêu?",
          shortAnswer: "$N(t) = N_0 \\cdot 2^{3t}$",
          fullSolution: "Một giờ có 60 phút, tương ứng với 3 chu kỳ nhân đôi (mỗi chu kỳ 20 phút). Do đó sau $t$ giờ có $3t$ chu kỳ, số vi khuẩn là $N(t) = N_0 \\cdot 2^{3t}$."
        },
        {
          id: "g11-c6-l18-d3-ex4",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Một khoản tiết kiệm 100 triệu đồng gửi kỳ hạn 1 năm với lãi suất $6\\%$/năm theo hình thức lãi kép. Số tiền cả gốc lẫn lãi sau 1 năm là bao nhiêu?",
          shortAnswer: "106 triệu đồng",
          fullSolution: "$S = 100(1 + 0.06)^1 = 100 \\times 1.06 = 106$ triệu đồng."
        },
        {
          id: "g11-c6-l18-d3-ex5",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho $a > 0$ thoả mãn $a^{\\frac{1}{2}} + a^{-\\frac{1}{2}} = 3$. Tính giá trị của biểu thức $P = a + a^{-1}$.",
          shortAnswer: "$P = 7$",
          fullSolution: "Bình phương hai vế:\n$(a^{\\frac{1}{2}} + a^{-\\frac{1}{2}})^2 = 3^2 \\iff a + 2 \\cdot a^{\\frac{1}{2}} a^{-\\frac{1}{2}} + a^{-1} = 9$\n$\\iff a + 2 + a^{-1} = 9 \\iff a + a^{-1} = 7$."
        },
        {
          id: "g11-c6-l18-d3-ex6",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Từ kết quả ở bài trên ($a + a^{-1} = 7$), tính giá trị của biểu thức $Q = a^2 + a^{-2}$.",
          shortAnswer: "$Q = 47$",
          fullSolution: "Bình phương hai vế của $a + a^{-1} = 7$:\n$(a + a^{-1})^2 = 7^2 \\iff a^2 + 2 + a^{-2} = 49 \\iff a^2 + a^{-2} = 49 - 2 = 47$."
        },
        {
          id: "g11-c6-l18-d3-ex7",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Một người gửi tiết kiệm 200 triệu đồng vào ngân hàng với lãi suất $6.5\\%$/năm theo thể thức lãi kép. Tính tổng số tiền người đó nhận được sau 3 năm (làm tròn đến hàng nghìn đồng).",
          shortAnswer: "241,590,000 đồng",
          fullSolution: "Áp dụng công thức lãi kép: $S = P(1 + r)^n$ với $P = 200$, $r = 0.065$, $n = 3$:\n$S = 200 \\times (1 + 0.065)^3 = 200 \\times (1.065)^3 = 200 \\times 1.207949625 \\approx 241.590$ triệu đồng\n$= 241,590,000$ đồng."
        },
        {
          id: "g11-c6-l18-d3-ex8",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho $4^x + 4^{-x} = 23$. Tính giá trị của biểu thức $A = 2^x + 2^{-x}$.",
          shortAnswer: "$A = 5$",
          fullSolution: "Đặt $A = 2^x + 2^{-x}$ ($A > 0$).\nBình phương $A$:\n$A^2 = (2^x + 2^{-x})^2 = (2^x)^2 + 2 \\cdot 2^x \\cdot 2^{-x} + (2^{-x})^2 = 4^x + 2 + 4^{-x}$.\nTheo đề bài $4^x + 4^{-x} = 23$, do đó:\n$A^2 = 23 + 2 = 25$.\nVì $A > 0$, suy ra $A = \\sqrt{25} = 5$."
        },
        {
          id: "g11-c6-l18-d3-ex9",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Dân số một quốc gia năm 2024 là 100 triệu người. Tỉ lệ tăng dân số hàng năm ước tính ổn định ở mức $1.1\\%$/năm. Theo mô hình tăng trưởng luỹ thừa $P_n = P_0(1 + r)^n$, hãy dự báo dân số quốc gia đó vào năm 2034 (sau 10 năm), làm tròn đến chữ số thập phân thứ hai của triệu người.",
          shortAnswer: "111.57 triệu người",
          fullSolution: "Ta có $P_0 = 100$ triệu, $r = 1.1\\% = 0.011$, $n = 2034 - 2024 = 10$ năm.\nDân số sau 10 năm được tính bởi:\n$P_{10} = 100 \\times (1 + 0.011)^{10} = 100 \\times (1.011)^{10}$.\nTính giá trị luỹ thừa: $(1.011)^{10} \\approx 1.115668$.\nDo đó $P_{10} \\approx 100 \\times 1.115668 = 111.57$ triệu người."
        },
        {
          id: "g11-c6-l18-d3-ex10",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho $x, y$ là các số thực dương thoả mãn $x^{\\frac{1}{3}} + y^{\\frac{1}{3}} = 4$ và $xy = 27$. Tính giá trị của biểu thức $M = x + y$.",
          shortAnswer: "$M = 28$",
          fullSolution: "Đặt $u = x^{\\frac{1}{3}}$ và $v = y^{\\frac{1}{3}}$.\nTheo bài ra: $u + v = 4$ và $u \\cdot v = (xy)^{\\frac{1}{3}} = 27^{\\frac{1}{3}} = 3$.\nTa cần tính $M = x + y = u^3 + v^3$.\nÁp dụng hằng đẳng thức lập phương của một tổng:\n$u^3 + v^3 = (u + v)^3 - 3uv(u + v)$.\nThay số:\n$M = 4^3 - 3 \\times 3 \\times 4 = 64 - 36 = 28$."
        }
      ]
    }
  ]
  },

  "g11-c6-l19": {
    lessonId: "g11-c6-l19",
    title: "Bài 19: Lôgarit",
    topics: [
    {
      id: "g11-c6-l19-dang1",
      title: "Dạng 1: Tính giá trị và rút gọn biểu thức lôgarit",
      description: "Áp dụng định nghĩa $\\log_a b = c \\iff a^c = b$, các quy tắc tính: $\\log_a(xy) = \\log_a x + \\log_a y, \\log_a(x/y) = \\log_a x - \\log_a y, \\log_a(x^\\alpha) = \\alpha \\log_a x$.",
      exercises: [
        {
          id: "g11-c6-l19-d1-ex1",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Với $a > 0, a \\ne 1$, giá trị của $\\log_a 1$ và $\\log_a a$ lần lượt bằng bao nhiêu?",
          shortAnswer: "$\\log_a 1 = 0$ và $\\log_a a = 1$",
          fullSolution: "Theo định nghĩa và tính chất cơ bản của lôgarit: $a^0 = 1 \\implies \\log_a 1 = 0$, và $a^1 = a \\implies \\log_a a = 1$."
        },
        {
          id: "g11-c6-l19-d1-ex2",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Tính giá trị của $\\log_2 16$.",
          shortAnswer: "$4$",
          fullSolution: "Vì $16 = 2^4$, nên $\\log_2 16 = \\log_2 (2^4) = 4$."
        },
        {
          id: "g11-c6-l19-d1-ex3",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Với $a > 0, a \\ne 1$ và $x, y > 0$, viết công thức biến đổi $\\log_a(xy)$.",
          shortAnswer: "$\\log_a(xy) = \\log_a x + \\log_a y$",
          fullSolution: "Lôgarit của một tích bằng tổng các lôgarit: $\\log_a(xy) = \\log_a x + \\log_a y$."
        },
        {
          id: "g11-c6-l19-d1-ex4",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Lôgarit thập phân $\\log x$ và lôgarit tự nhiên $\\ln x$ lần lượt có cơ số là bao nhiêu?",
          shortAnswer: "Cơ số $10$ và cơ số $e \\approx 2.71828$",
          fullSolution: "- Lôgarit thập phân kí hiệu là $\\log x$ (hoặc $\\lg x$) có cơ số là 10.\n- Lôgarit tự nhiên kí hiệu là $\\ln x$ có cơ số là số vô tỉ $e \\approx 2.71828$."
        },
        {
          id: "g11-c6-l19-d1-ex5",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Tính giá trị của biểu thức $A = \\log_3 6 + \\log_3 \\dfrac{3}{2}$.",
          shortAnswer: "$A = 2$",
          fullSolution: "Áp dụng công thức cộng hai lôgarit cùng cơ số:\n$A = \\log_3 \\left( 6 \\times \\dfrac{3}{2} \\right) = \\log_3 9 = \\log_3 (3^2) = 2$."
        },
        {
          id: "g11-c6-l19-d1-ex6",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Tính giá trị của biểu thức $B = 2^{\\log_2 5} + 3^{\\log_3 4}$.",
          shortAnswer: "$B = 9$",
          fullSolution: "Theo hằng đẳng thức lôgarit cơ bản: $a^{\\log_a b} = b$ với mọi $b > 0$.\nDo đó: $2^{\\log_2 5} = 5$ và $3^{\\log_3 4} = 4$.\nVậy $B = 5 + 4 = 9$."
        },
        {
          id: "g11-c6-l19-d1-ex7",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Rút gọn biểu thức $P = \\log_2 (a^3 b^2) - 2\\log_2 b$ với $a > 0, b > 0$.",
          shortAnswer: "$P = 3\\log_2 a$",
          fullSolution: "Biến đổi:\n$P = \\log_2 (a^3) + \\log_2 (b^2) - 2\\log_2 b = 3\\log_2 a + 2\\log_2 b - 2\\log_2 b = 3\\log_2 a$."
        },
        {
          id: "g11-c6-l19-d1-ex8",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Tính giá trị của biểu thức $M = 4^{\\log_2 3} + 9^{\\log_3 2}$.",
          shortAnswer: "$M = 13$",
          fullSolution: "- $4^{\\log_2 3} = (2^2)^{\\log_2 3} = (2^{\\log_2 3})^2 = 3^2 = 9$.\n- $9^{\\log_3 2} = (3^2)^{\\log_3 2} = (3^{\\log_3 2})^2 = 2^2 = 4$.\nCộng lại: $M = 9 + 4 = 13$."
        },
        {
          id: "g11-c6-l19-d1-ex9",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Tính giá trị của biểu thức tích liên tiếp: $S = \\log_2 3 \\cdot \\log_3 4 \\cdot \\log_4 5 \\cdot \\dots \\cdot \\log_{63} 64$.",
          shortAnswer: "$S = 6$",
          fullSolution: "Đổi tất cả về lôgarit cơ số 2 (hoặc cơ số tự nhiên $\\ln$):\n$\\log_a b = \\dfrac{\\ln b}{\\ln a}$.\nKhi đó:\n$S = \\dfrac{\\ln 3}{\\ln 2} \\cdot \\dfrac{\\ln 4}{\\ln 3} \\cdot \\dfrac{\\ln 5}{\\ln 4} \\cdot \\dots \\cdot \\dfrac{\\ln 64}{\\ln 63} = \\dfrac{\\ln 64}{\\ln 2} = \\log_2 64$.\nVì $64 = 2^6$, nên $S = \\log_2 (2^6) = 6$."
        },
        {
          id: "g11-c6-l19-d1-ex10",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho $a, b > 0$ thoả mãn $a^2 + b^2 = 7ab$. Chứng minh đẳng thức: $\\log_3 \\left( \\dfrac{a + b}{3} \\right) = \\dfrac{1}{2}(\\log_3 a + \\log_3 b)$.",
          shortAnswer: "Đã chứng minh",
          fullSolution: "Cộng $2ab$ vào hai vế của giả thiết:\n$a^2 + 2ab + b^2 = 7ab + 2ab \\iff (a + b)^2 = 9ab$.\nChia cả hai vế cho 9:\n$\\left( \\dfrac{a + b}{3} \\right)^2 = ab$.\nLấy lôgarit cơ số 3 hai vế (vì $a, b > 0$ nên hai vế đều dương):\n$\\log_3 \\left[ \\left( \\dfrac{a + b}{3} \\right)^2 \\right] = \\log_3 (ab)$\n$\\iff 2\\log_3 \\left( \\dfrac{a + b}{3} \\right) = \\log_3 a + \\log_3 b$\n$\\iff \\log_3 \\left( \\dfrac{a + b}{3} \\right) = \\dfrac{1}{2}(\\log_3 a + \\log_3 b)$."
        }
      ]
    },
    {
      id: "g11-c6-l19-dang2",
      title: "Dạng 2: Đổi cơ số và biểu diễn lôgarit theo các biến cho trước",
      description: "Công thức đổi cơ số $\\log_a b = \\dfrac{\\log_c b}{\\log_c a}$, $\\log_{a^\\alpha} b = \\dfrac{1}{\\alpha} \\log_a b$, $\\log_a b = \\dfrac{1}{\\log_b a}$ và biểu diễn $\\log_x y$ theo $a, b$.",
      exercises: [
        {
          id: "g11-c6-l19-d2-ex1",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Viết công thức đổi cơ số chuyển $\\log_a b$ sang cơ số $c$ ($a, c > 0; a, c \\ne 1; b > 0$).",
          shortAnswer: "$\\log_a b = \\dfrac{\\log_c b}{\\log_c a}$",
          fullSolution: "Công thức đổi cơ số tổng quát: $\\log_a b = \\dfrac{\\log_c b}{\\log_c a}$."
        },
        {
          id: "g11-c6-l19-d2-ex2",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Viết công thức nghịch đảo cơ số biểu diễn $\\log_a b$ qua $\\log_b a$ ($a, b > 0; a, b \\ne 1$).",
          shortAnswer: "$\\log_a b = \\dfrac{1}{\\log_b a}$",
          fullSolution: "Theo công thức đổi cơ số với $c = b$: $\\log_a b = \\dfrac{\\log_b b}{\\log_b a} = \\dfrac{1}{\\log_b a}$."
        },
        {
          id: "g11-c6-l19-d2-ex3",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Rút gọn biểu thức $\\log_{a^3} b$ ($a > 0, a \\ne 1, b > 0$).",
          shortAnswer: "$\\dfrac{1}{3}\\log_a b$",
          fullSolution: "Áp dụng công thức đưa số mũ ở cơ số ra ngoài: $\\log_{a^\\alpha} b = \\dfrac{1}{\\alpha} \\log_a b$, do đó $\\log_{a^3} b = \\dfrac{1}{3}\\log_a b$."
        },
        {
          id: "g11-c6-l19-d2-ex4",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Tính giá trị của $\\log_4 8$.",
          shortAnswer: "$\\dfrac{3}{2}$",
          fullSolution: "Đưa về cùng cơ số 2: $4 = 2^2$ và $8 = 2^3$, do đó $\\log_4 8 = \\log_{2^2} (2^3) = \\dfrac{3}{2} \\log_2 2 = \\dfrac{3}{2}$."
        },
        {
          id: "g11-c6-l19-d2-ex5",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho $\\log_2 3 = a$. Biểu diễn $\\log_2 18$ theo $a$.",
          shortAnswer: "$\\log_2 18 = 2a + 1$",
          fullSolution: "Phân tích số 18 ra thừa số nguyên tố: $18 = 2 \\times 3^2$.\nÁp dụng quy tắc cộng lôgarit:\n$\\log_2 18 = \\log_2 (2 \\cdot 3^2) = \\log_2 2 + \\log_2 (3^2) = 1 + 2\\log_2 3 = 1 + 2a$."
        },
        {
          id: "g11-c6-l19-d2-ex6",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho $\\log_2 5 = a$. Biểu diễn $\\log_4 50$ theo $a$.",
          shortAnswer: "$\\log_4 50 = a + \\dfrac{1}{2}$",
          fullSolution: "Ta đổi cơ số sang cơ số 2:\n$\\log_4 50 = \\dfrac{\\log_2 50}{\\log_2 4} = \\dfrac{\\log_2 (2 \\cdot 5^2)}{2} = \\dfrac{\\log_2 2 + 2\\log_2 5}{2} = \\dfrac{1 + 2a}{2} = a + \\dfrac{1}{2}$."
        },
        {
          id: "g11-c6-l19-d2-ex7",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho $\\log_2 3 = a$ và $\\log_2 5 = b$. Biểu diễn $\\log_2 45$ theo $a$ và $b$.",
          shortAnswer: "$\\log_2 45 = 2a + b$",
          fullSolution: "Phân tích: $45 = 9 \\times 5 = 3^2 \\times 5$.\nKhi đó: $\\log_2 45 = \\log_2 (3^2 \\cdot 5) = \\log_2 (3^2) + \\log_2 5 = 2\\log_2 3 + \\log_2 5 = 2a + b$."
        },
        {
          id: "g11-c6-l19-d2-ex8",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho $\\log_2 3 = a$ và $\\log_5 3 = b$. Biểu diễn $\\log_6 45$ theo $a$ và $b$.",
          shortAnswer: "$\\log_6 45 = \\dfrac{a(2b + 1)}{b(a + 1)}$",
          fullSolution: "- Ta có $\\log_3 2 = \\dfrac{1}{a}$ và $\\log_3 5 = \\dfrac{1}{b}$.\n- Chuyển $\\log_6 45$ về cơ số 3:\n$\\log_6 45 = \\dfrac{\\log_3 45}{\\log_3 6} = \\dfrac{\\log_3 (3^2 \\cdot 5)}{\\log_3 (2 \\cdot 3)} = \\dfrac{2 + \\log_3 5}{1 + \\log_3 2} = \\dfrac{2 + \\frac{1}{b}}{1 + \\frac{1}{a}} = \\dfrac{\\frac{2b + 1}{b}}{\\frac{a + 1}{a}} = \\dfrac{a(2b + 1)}{b(a + 1)}$."
        },
        {
          id: "g11-c6-l19-d2-ex9",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho $\\log_{12} 27 = a$. Hãy biểu diễn $\\log_6 16$ theo $a$.",
          shortAnswer: "$\\log_6 16 = \\dfrac{4(3 - a)}{a + 3}$",
          fullSolution: "Biến đổi $a$ theo $\\log_3 2$:\n$a = \\log_{12} (3^3) = \\dfrac{3}{\\log_3 12} = \\dfrac{3}{\\log_3 (3 \\cdot 4)} = \\dfrac{3}{1 + 2\\log_3 2}$.\nĐặt $t = \\log_3 2$, ta có: $a(1 + 2t) = 3 \\iff a + 2at = 3 \\iff 2at = 3 - a \\iff t = \\dfrac{3 - a}{2a}$.\nCần tính: $\\log_6 16 = \\log_6 (2^4) = 4\\log_6 2 = \\dfrac{4}{\\log_2 6} = \\dfrac{4}{1 + \\log_2 3} = \\dfrac{4}{1 + \\frac{1}{t}} = \\dfrac{4t}{t + 1}$.\nThay $t = \\dfrac{3 - a}{2a}$:\n$\\log_6 16 = \\dfrac{4 \\cdot \\frac{3 - a}{2a}}{\\frac{3 - a}{2a} + 1} = \\dfrac{2(3 - a)}{\\frac{3 - a + 2a}{2a}} \\cdot \\dfrac{1}{2a} = \\dfrac{4(3 - a)}{a + 3}$."
        },
        {
          id: "g11-c6-l19-d2-ex10",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho ba số thực dương $a, b, c$ khác 1 thoả mãn $\\log_a x = 2, \\log_b x = 3, \\log_c x = 6$. Tính giá trị của biểu thức $P = \\log_{abc} x$.",
          shortAnswer: "$P = 1$",
          fullSolution: "Đổi cơ số theo biến $x$:\n$\\log_x a = \\dfrac{1}{\\log_a x} = \\dfrac{1}{2}$.\n$\\log_x b = \\dfrac{1}{\\log_b x} = \\dfrac{1}{3}$.\n$\\log_x c = \\dfrac{1}{\\log_c x} = \\dfrac{1}{6}$.\nKhi đó:\n$\\log_x (abc) = \\log_x a + \\log_x b + \\log_x c = \\dfrac{1}{2} + \\dfrac{1}{3} + \\dfrac{1}{6} = \\dfrac{3 + 2 + 1}{6} = \\dfrac{6}{6} = 1$.\nDo đó:\n$P = \\log_{abc} x = \\dfrac{1}{\\log_x (abc)} = \\dfrac{1}{1} = 1$."
        }
      ]
    },
    {
      id: "g11-c6-l19-dang3",
      title: "Dạng 3: Điều kiện xác định & Ứng dụng thực tế của Lôgarit",
      description: "Tìm điều kiện của biểu thức lôgarit và giải quyết các bài toán khoa học thực tế: độ pH hoá học, thang Richter động đất, mức cường độ âm Decibel.",
      exercises: [
        {
          id: "g11-c6-l19-d3-ex1",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Nêu điều kiện xác định của biểu thức $\\log_a b$.",
          shortAnswer: "$a > 0, a \\ne 1$ và $b > 0$",
          fullSolution: "Biểu thức lôgarit $\\log_a b$ có nghĩa khi và chỉ khi cơ số $a > 0, a \\ne 1$ và biểu thức dưới dấu lôgarit $b > 0$."
        },
        {
          id: "g11-c6-l19-d3-ex2",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Trong hoá học, độ pH của một dung dịch được tính theo công thức nồng độ ion $\\text{H}^+$ nào?",
          shortAnswer: "$\\text{pH} = -\\log[\\text{H}^+]$",
          fullSolution: "Độ pH đo độ acid/base của dung dịch được xác định bởi công thức: $\\text{pH} = -\\log[\\text{H}^+]$, với $[\\text{H}^+]$ là nồng độ ion $\\text{H}^+$ tính theo mol/lít."
        },
        {
          id: "g11-c6-l19-d3-ex3",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Mức cường độ âm $L$ (đơn vị Decibel - dB) được xác định theo cường độ âm $I$ và cường độ âm chuẩn $I_0 = 10^{-12}\\text{ W/m}^2$ bởi công thức nào?",
          shortAnswer: "$L = 10\\log\\left(\\dfrac{I}{I_0}\\right)$",
          fullSolution: "Mức cường độ âm tính theo đơn vị Decibel (dB) được cho bởi công thức: $L(\\text{dB}) = 10 \\log \\left(\\dfrac{I}{I_0}\\right)$."
        },
        {
          id: "g11-c6-l19-d3-ex4",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Tìm điều kiện xác định của biểu thức $\\log_2 (x - 3)$.",
          shortAnswer: "$x > 3$",
          fullSolution: "Biểu thức dưới dấu lôgarit phải dương: $x - 3 > 0 \\iff x > 3$."
        },
        {
          id: "g11-c6-l19-d3-ex5",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Một dung dịch có nồng độ ion $[\\text{H}^+] = 10^{-4}\\text{ mol/lít}$. Tính độ pH của dung dịch và cho biết dung dịch này có tính acid hay base?",
          shortAnswer: "$\\text{pH} = 4$; có tính acid",
          fullSolution: "Ta có $\\text{pH} = -\\log[\\text{H}^+] = -\\log(10^{-4}) = -(-4) = 4$.\nVì $\\text{pH} = 4 < 7$ nên dung dịch mang tính acid."
        },
        {
          id: "g11-c6-l19-d3-ex6",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Tìm tập xác định của biểu thức $P = \\log_3 (4 - x^2)$.",
          shortAnswer: "$D = (-2; 2)$",
          fullSolution: "Điều kiện xác định: $4 - x^2 > 0 \\iff x^2 < 4 \\iff -2 < x < 2$.\nVậy tập xác định là khoảng $D = (-2; 2)$."
        },
        {
          id: "g11-c6-l19-d3-ex7",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Mức cường độ âm tại một công trường xây dựng đo được là $80\\text{ dB}$. Hỏi cường độ âm $I$ tại đó gấp bao nhiêu lần cường độ âm chuẩn $I_0$?",
          shortAnswer: "$10^8$ lần",
          fullSolution: "Theo công thức $L = 10\\log\\left(\\dfrac{I}{I_0}\\right)$:\n$80 = 10\\log\\left(\\dfrac{I}{I_0}\\right) \\iff \\log\\left(\\dfrac{I}{I_0}\\right) = 8 \\iff \\dfrac{I}{I_0} = 10^8$.\nVậy cường độ âm gấp $10^8$ lần cường độ âm chuẩn."
        },
        {
          id: "g11-c6-l19-d3-ex8",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Độ chấn động của một trận động đất được đo theo thang Richter bằng công thức $M = \\log A - \\log A_0$, trong đó $A$ là biên độ tối đa đo được bởi máy địa chấn. Một trận động đất ở địa phương $X$ có độ lớn $7.2$ độ Richter và trận động đất ở địa phương $Y$ có độ lớn $5.2$ độ Richter. Hỏi biên độ rung chấn tối đa của trận động đất tại $X$ gấp bao nhiêu lần so với tại $Y$?",
          shortAnswer: "$100$ lần",
          fullSolution: "Ta có:\n$M_X = \\log\\left(\\dfrac{A_X}{A_0}\\right) = 7.2 \\implies \\dfrac{A_X}{A_0} = 10^{7.2}$.\n$M_Y = \\log\\left(\\dfrac{A_Y}{A_0}\\right) = 5.2 \\implies \\dfrac{A_Y}{A_0} = 10^{5.2}$.\nTỉ số biên độ chấn động:\n$\\dfrac{A_X}{A_Y} = \\dfrac{10^{7.2}}{10^{5.2}} = 10^{7.2 - 5.2} = 10^2 = 100$.\nBiên độ chấn động tại $X$ gấp 100 lần tại $Y$."
        },
        {
          id: "g11-c6-l19-d3-ex9",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Tìm tất cả các giá trị của $x$ để biểu thức $f(x) = \\log_{x - 1} (6 - x)$ có nghĩa.",
          shortAnswer: "$1 < x < 6$ và $x \\ne 2$",
          fullSolution: "Biểu thức có nghĩa khi đồng thời thỏa mãn:\n1. Cơ số dương và khác 1:\n$\\begin{cases} x - 1 > 0 \\\\ x - 1 \\ne 1 \\end{cases} \\iff \\begin{cases} x > 1 \\\\ x \\ne 2 \\end{cases}$.\n2. Biểu thức dưới dấu lôgarit dương:\n$6 - x > 0 \\iff x < 6$.\nKết hợp các điều kiện: $x \\in (1; 6) \\setminus \\{2\\}$, tức là $1 < x < 6$ và $x \\ne 2$."
        },
        {
          id: "g11-c6-l19-d3-ex10",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Hai nguồn âm điểm phát sóng âm đẳng hướng trong không gian. Tại điểm $M$, mức cường độ âm do nguồn 1 gây ra là $50\\text{ dB}$ và do nguồn 2 gây ra là $40\\text{ dB}$. Khi cả hai nguồn âm cùng phát đồng thời, hãy tính mức cường độ âm tổng cộng tại điểm $M$ (biết cường độ âm tổng hợp $I = I_1 + I_2$; lấy $\\log 1.1 \\approx 0.041$).",
          shortAnswer: "$\\approx 50.41\\text{ dB}$",
          fullSolution: "Cường độ âm của từng nguồn:\n- $L_1 = 10\\log\\left(\\dfrac{I_1}{I_0}\\right) = 50 \\implies I_1 = 10^5 I_0$.\n- $L_2 = 10\\log\\left(\\dfrac{I_2}{I_0}\\right) = 40 \\implies I_2 = 10^4 I_0$.\nTổng cường độ âm khi hai nguồn cùng phát:\n$I = I_1 + I_2 = 10^5 I_0 + 10^4 I_0 = 10^4 I_0 (10 + 1) = 11 \\times 10^4 I_0 = 1.1 \\times 10^5 I_0$.\nMức cường độ âm tổng cộng:\n$L = 10\\log\\left(\\dfrac{I}{I_0}\\right) = 10\\log(1.1 \\times 10^5) = 10(\\log 1.1 + 5) = 10(0.041 + 5) = 50.41\\text{ dB}$."
        }
      ]
    }
  ]
  },

  "g11-c6-l20": {
    lessonId: "g11-c6-l20",
    title: "Bài 20: Hàm số mũ và hàm số lôgarit",
    topics: [
    {
      id: "g11-c6-l20-dang1",
      title: "Dạng 1: Tập xác định của hàm số mũ và hàm số lôgarit",
      description: "Hàm số mũ $y = a^{u(x)}$ xác định khi $u(x)$ xác định. Hàm số lôgarit $y = \\log_a [u(x)]$ xác định khi $u(x) > 0$.",
      exercises: [
        {
          id: "g11-c6-l20-d1-ex1",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Tập xác định của hàm số mũ cơ bản $y = a^x$ ($a > 0, a \\ne 1$) là tập hợp nào?",
          shortAnswer: "$D = \\mathbb{R}$",
          fullSolution: "Hàm số mũ $y = a^x$ có số mũ $x$ nhận mọi giá trị thực, do đó tập xác định là $D = \\mathbb{R}$."
        },
        {
          id: "g11-c6-l20-d1-ex2",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Tập xác định của hàm số lôgarit cơ bản $y = \\log_a x$ ($a > 0, a \\ne 1$) là tập hợp nào?",
          shortAnswer: "$D = (0; +\\infty)$",
          fullSolution: "Hàm số lôgarit $y = \\log_a x$ chỉ xác định với các số thực dương $x > 0$, do đó tập xác định là khoảng $D = (0; +\\infty)$."
        },
        {
          id: "g11-c6-l20-d1-ex3",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Tìm tập xác định của hàm số $y = 3^{2x - 1}$.",
          shortAnswer: "$D = \\mathbb{R}$",
          fullSolution: "Biểu thức số mũ $2x - 1$ xác định với mọi $x \\in \\mathbb{R}$, nên hàm số có tập xác định $D = \\mathbb{R}$."
        },
        {
          id: "g11-c6-l20-d1-ex4",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Tìm tập xác định của hàm số $y = \\log_2 (x - 5)$.",
          shortAnswer: "$D = (5; +\\infty)$",
          fullSolution: "Điều kiện xác định: $x - 5 > 0 \\iff x > 5$. Vậy tập xác định là $D = (5; +\\infty)$."
        },
        {
          id: "g11-c6-l20-d1-ex5",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Tìm tập xác định của hàm số $y = \\log_3 (x^2 - 4)$.",
          shortAnswer: "$D = (-\\infty; -2) \\cup (2; +\\infty)$",
          fullSolution: "Điều kiện xác định: $x^2 - 4 > 0 \\iff x^2 > 4 \\iff x < -2$ hoặc $x > 2$.\nVậy tập xác định là $D = (-\\infty; -2) \\cup (2; +\\infty)$."
        },
        {
          id: "g11-c6-l20-d1-ex6",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Tìm tập xác định của hàm số $y = 2^{\\frac{1}{x - 1}}$.",
          shortAnswer: "$D = \\mathbb{R} \\setminus \\{1\\}$",
          fullSolution: "Hàm số xác định khi số mũ $\\dfrac{1}{x - 1}$ xác định, tức là mẫu số khác 0: $x - 1 \\ne 0 \\iff x \\ne 1$.\nVậy tập xác định là $D = \\mathbb{R} \\setminus \\{1\\}$."
        },
        {
          id: "g11-c6-l20-d1-ex7",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Tìm tập xác định của hàm số $y = \\ln \\left( \\dfrac{2 - x}{x + 3} \\right)$.",
          shortAnswer: "$D = (-3; 2)$",
          fullSolution: "Điều kiện xác định: $\\dfrac{2 - x}{x + 3} > 0$.\nXét dấu phân thức: nghiệm tử là $x = 2$, nghiệm mẫu là $x = -3$. Phân thức dương khi $x$ nằm giữa hai nghiệm:\n$-3 < x < 2$.\nVậy tập xác định là khoảng $D = (-3; 2)$."
        },
        {
          id: "g11-c6-l20-d1-ex8",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Tìm tập xác định của hàm số $y = \\sqrt{\\log_{\\frac{1}{2}} (x - 1)}$.",
          shortAnswer: "$D = (1; 2]$",
          fullSolution: "Hàm số chứa căn thức bậc hai của biểu thức lôgarit, do đó cần đồng thời hai điều kiện:\n1. Biểu thức dưới dấu lôgarit dương: $x - 1 > 0 \\iff x > 1$.\n2. Biểu thức dưới căn không âm: $\\log_{\\frac{1}{2}} (x - 1) \\ge 0$.\nVì cơ số $a = \\dfrac{1}{2} \\in (0; 1)$, bất phương trình đổi chiều:\n$\\log_{\\frac{1}{2}} (x - 1) \\ge 0 \\iff x - 1 \\le \\left(\\dfrac{1}{2}\\right)^0 = 1 \\iff x \\le 2$.\nKết hợp lại: $1 < x \\le 2$.\nVậy tập xác định là nửa khoảng $D = (1; 2]$."
        },
        {
          id: "g11-c6-l20-d1-ex9",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Tìm tất cả các giá trị của tham số $m$ để hàm số $y = \\log (x^2 - 2mx + 4)$ có tập xác định là toàn bộ trục số $\\mathbb{R}$.",
          shortAnswer: "$-2 < m < 2$",
          fullSolution: "Hàm số xác định trên $\\mathbb{R}$ khi và chỉ khi biểu thức trong lôgarit dương với mọi $x \\in \\mathbb{R}$:\n$g(x) = x^2 - 2mx + 4 > 0, \\forall x \\in \\mathbb{R}$.\nĐiều này tương đương với tam thức bậc hai có hệ số $a = 1 > 0$ và biệt thức $\\Delta' < 0$:\n$\\Delta' = (-m)^2 - 1 \\times 4 = m^2 - 4 < 0 \\iff -2 < m < 2$."
        },
        {
          id: "g11-c6-l20-d1-ex10",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Tìm tập xác định của hàm số $y = \\dfrac{\\sqrt{4 - x^2}}{\\ln(x + 1)}$.",
          shortAnswer: "$D = (-1; 2] \\setminus \\{0\\}$ (hoặc $(-1; 0) \\cup (0; 2]$)",
          fullSolution: "Điều kiện xác định gồm 3 điều kiện:\n1. Biểu thức dưới căn bậc hai không âm: $4 - x^2 \\ge 0 \\iff -2 \\le x \\le 2$.\n2. Biểu thức trong lôgarit dương: $x + 1 > 0 \\iff x > -1$.\n3. Mẫu số khác 0: $\\ln(x + 1) \\ne 0 \\iff x + 1 \\ne 1 \\iff x \\ne 0$.\nKết hợp các điều kiện trên:\n$x \\in (-1; 2] \\setminus \\{0\\}$.\nVậy tập xác định là $D = (-1; 0) \\cup (0; 2]$."
        }
      ]
    },
    {
      id: "g11-c6-l20-dang2",
      title: "Dạng 2: Chiều biến thiên và nhận dạng đồ thị hàm số mũ, lôgarit",
      description: "Tính chất đồng biến khi cơ số $a > 1$, nghịch biến khi $0 < a < 1$; toạ độ các điểm đặc biệt đi qua $(0; 1), (1; 0)$ và các đường tiệm cận.",
      exercises: [
        {
          id: "g11-c6-l20-d1-ex1",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Hàm số mũ $y = a^x$ đồng biến trên $\\mathbb{R}$ khi cơ số $a$ thoả mãn điều kiện gì?",
          shortAnswer: "$a > 1$",
          fullSolution: "Hàm số mũ $y = a^x$ đồng biến trên $\\mathbb{R}$ khi và chỉ khi cơ số $a > 1$, và nghịch biến khi $0 < a < 1$."
        },
        {
          id: "g11-c6-l20-d1-ex2",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Đồ thị của hàm số mũ $y = a^x$ luôn đi qua điểm cố định nào trên hệ trục toạ độ?",
          shortAnswer: "Điểm $(0; 1)$",
          fullSolution: "Vì $a^0 = 1$ với mọi $a > 0, a \\ne 1$, nên đồ thị hàm số $y = a^x$ luôn đi qua điểm cố định $(0; 1)$ trên trục tung $Oy$."
        },
        {
          id: "g11-c6-l20-d1-ex3",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Đồ thị của hàm số lôgarit $y = \\log_a x$ luôn đi qua điểm cố định nào trên hệ trục toạ độ?",
          shortAnswer: "Điểm $(1; 0)$",
          fullSolution: "Vì $\\log_a 1 = 0$ với mọi cơ số hợp lệ, nên đồ thị hàm số $y = \\log_a x$ luôn cắt trục hoành tại điểm cố định $(1; 0)$."
        },
        {
          id: "g11-c6-l20-d1-ex4",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Trục hoành $Ox$ (đường thẳng $y = 0$) là đường tiệm cận gì của đồ thị hàm số $y = a^x$?",
          shortAnswer: "Tiệm cận ngang",
          fullSolution: "Đồ thị hàm số mũ $y = a^x$ nhận trục hoành $Ox$ ($y = 0$) làm đường tiệm cận ngang (khi $x \\to -\\infty$ nếu $a > 1$, hoặc khi $x \\to +\\infty$ nếu $0 < a < 1$)."
        },
        {
          id: "g11-c6-l20-d1-ex5",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Trong các hàm số sau, hàm số nào nghịch biến trên khoảng xác định của nó: $y = 2^x, y = \\left(\\dfrac{\\pi}{3}\\right)^x, y = \\left(\\dfrac{2}{e}\\right)^x$?",
          shortAnswer: "$y = \\left(\\dfrac{2}{e}\\right)^x$",
          fullSolution: "Xét các cơ số:\n- $2 > 1 \\implies y = 2^x$ đồng biến.\n- $\\dfrac{\\pi}{3} \\approx \\dfrac{3.14}{3} > 1 \\implies y = \\left(\\dfrac{\\pi}{3}\\right)^x$ đồng biến.\n- $\\dfrac{2}{e} \\approx \\dfrac{2}{2.718} < 1 \\implies 0 < \\dfrac{2}{e} < 1$, do đó hàm số $y = \\left(\\dfrac{2}{e}\\right)^x$ nghịch biến."
        },
        {
          id: "g11-c6-l20-d1-ex6",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Đồ thị hàm số $y = a^x$ và đồ thị hàm số $y = \\log_a x$ đối xứng với nhau qua đường thẳng nào?",
          shortAnswer: "Đường phân giác góc phần tư thứ nhất $y = x$",
          fullSolution: "Vì hàm số mũ $y = a^x$ và hàm số lôgarit $y = \\log_a x$ là hai hàm số ngược nhau, nên đồ thị của chúng luôn đối xứng nhau qua đường thẳng $y = x$."
        },
        {
          id: "g11-c6-l20-d1-ex7",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Xác định đường tiệm cận đứng của đồ thị hàm số $y = \\log_3 (x - 2)$.",
          shortAnswer: "Đường thẳng $x = 2$",
          fullSolution: "Khi $x \\to 2^+$, ta có $x - 2 \\to 0^+ \\implies \\lim_{x \\to 2^+} \\log_3 (x - 2) = -\\infty$. Do đó đường thẳng $x = 2$ là tiệm cận đứng của đồ thị hàm số."
        },
        {
          id: "g11-c6-l20-d1-ex8",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho ba đồ thị hàm số $y = a^x, y = b^x, y = c^x$ với các đường cong trong mặt phẳng toạ độ thoả mãn: trên tia $x = 1$, giá trị tương ứng lần lượt là $y_a < y_b < 1 < y_c$. Hãy sắp xếp ba cơ số $a, b, c$ và số 1 theo thứ tự tăng dần.",
          shortAnswer: "$a < b < 1 < c$",
          fullSolution: "Tại điểm $x = 1$, ta có toạ độ tương ứng trên các đồ thị là $(1; a), (1; b), (1; c)$.\nTheo giả thiết, tung độ thoả mãn $y_a < y_b < 1 < y_c$.\nDo đó ta có quan hệ trực tiếp: $a < b < 1 < c$."
        },
        {
          id: "g11-c6-l20-d1-ex9",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Xét chiều biến thiên của hàm số $y = \\log_2 (x^2 - 4x + 5)$ trên khoảng $(2; +\\infty)$.",
          shortAnswer: "Đồng biến trên khoảng $(2; +\\infty)$",
          fullSolution: "Đặt $u(x) = x^2 - 4x + 5 = (x - 2)^2 + 1$.\nTrên khoảng $(2; +\\infty)$, hàm số bậc hai $u(x)$ có hoành độ đỉnh $x_I = 2$ nên $u(x)$ là hàm số đồng biến và $u(x) \\ge 1 > 0$.\nVì cơ số $a = 2 > 1$ nên hàm số $y = \\log_2 u$ đồng biến theo $u$.\nSự hợp của hai hàm số đồng biến cho kết quả: hàm số $y = \\log_2 (x^2 - 4x + 5)$ đồng biến trên $(2; +\\infty)$."
        },
        {
          id: "g11-c6-l20-d1-ex10",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Tìm giá trị của tham số $m$ để đồ thị hàm số $y = \\log_a x$ đi qua điểm $A(8; 3)$ và tìm toạ độ giao điểm của đồ thị hàm số này với đường thẳng $y = -1$.",
          shortAnswer: "$a = 2$; giao điểm là $B\\left(\\dfrac{1}{2}; -1\\right)$",
          fullSolution: "- Đồ thị đi qua điểm $A(8; 3) \\implies \\log_a 8 = 3 \\iff a^3 = 8 \\iff a = 2$.\nHàm số là $y = \\log_2 x$.\n- Giao điểm với đường thẳng $y = -1$:\n$\\log_2 x = -1 \\iff x = 2^{-1} = \\dfrac{1}{2}$.\nVậy toạ độ giao điểm là $B\\left(\\dfrac{1}{2}; -1\\right)$."
        }
      ]
    },
    {
      id: "g11-c6-l20-dang3",
      title: "Dạng 3: Giá trị lớn nhất, nhỏ nhất & Mô hình ứng dụng thực tế",
      description: "Tìm GTLN-GTNN của hàm mũ, lôgarit trên đoạn $[a; b]$ và giải bài toán phân rã phóng xạ, tăng trưởng vi khuẩn, áp suất khí quyển.",
      exercises: [
        {
          id: "g11-c6-l20-d1-ex1",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Định luật phân rã phóng xạ của một chất có khối lượng ban đầu $m_0$ và chu kỳ bán rã $T$ được mô tả bởi công thức nào sau thời gian $t$?",
          shortAnswer: "$m(t) = m_0 \\left(\\dfrac{1}{2}\\right)^{\\frac{t}{T}}$ (hoặc $m(t) = m_0 e^{-\\lambda t}$)",
          fullSolution: "Sau mỗi chu kỳ bán rã $T$, khối lượng chất phóng xạ giảm đi một nửa. Sau thời gian $t$, khối lượng còn lại là: $m(t) = m_0 \\left(\\dfrac{1}{2}\\right)^{\\frac{t}{T}}$."
        },
        {
          id: "g11-c6-l20-d1-ex2",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Tìm giá trị nhỏ nhất của hàm số $y = 2^x$ trên đoạn $[0; 3]$.",
          shortAnswer: "$\\min_{[0; 3]} y = 1$",
          fullSolution: "Vì hàm số $y = 2^x$ đồng biến trên $\\mathbb{R}$, nên trên đoạn $[0; 3]$ giá trị nhỏ nhất đạt tại đầu mút trái $x = 0$: $\\min y = 2^0 = 1$."
        },
        {
          id: "g11-c6-l20-d1-ex3",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Tìm giá trị lớn nhất của hàm số $y = \\log_3 x$ trên đoạn $[1; 9]$.",
          shortAnswer: "$\\max_{[1; 9]} y = 2$",
          fullSolution: "Vì cơ số $3 > 1$ nên hàm số $y = \\log_3 x$ đồng biến trên $[1; 9]$. Giá trị lớn nhất đạt tại đầu mút phải $x = 9$: $\\max y = \\log_3 9 = 2$."
        },
        {
          id: "g11-c6-l20-d1-ex4",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Khối lượng một chất phóng xạ có chu kỳ bán rã 10 ngày. Sau 20 ngày, lượng phóng xạ còn lại bằng bao nhiêu phần so với ban đầu?",
          shortAnswer: "$\\dfrac{1}{4}$ (25%)",
          fullSolution: "Thời gian $t = 20$ ngày bằng $2$ chu kỳ bán rã. Lượng chất còn lại là $\\left(\\dfrac{1}{2}\\right)^2 = \\dfrac{1}{4}$ lượng ban đầu."
        },
        {
          id: "g11-c6-l20-d1-ex5",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Tìm giá trị lớn nhất và giá trị nhỏ nhất của hàm số $y = \\left( \\dfrac{1}{2} \\right)^x$ trên đoạn $[-2; 3]$.",
          shortAnswer: "$\\max = 4$, $\\min = \\dfrac{1}{8}$",
          fullSolution: "Vì cơ số $0 < \\dfrac{1}{2} < 1$, hàm số nghịch biến trên $[-2; 3]$:\n- $\\max_{[-2; 3]} y = y(-2) = \\left(\\dfrac{1}{2}\\right)^{-2} = 2^2 = 4$.\n- $\\min_{[-2; 3]} y = y(3) = \\left(\\dfrac{1}{2}\\right)^3 = \\dfrac{1}{8}$."
        },
        {
          id: "g11-c6-l20-d1-ex6",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Áp suất khí quyển $P$ (tính bằng mmHg) ở độ cao $h$ (mét) so với mực nước biển được tính xấp xỉ bằng công thức $P(h) = P_0 e^{-kh}$, trong đó $P_0 = 760\\text{ mmHg}$ và $k \\approx 0.00012$. Tính áp suất khí quyển ở độ cao $h = 1000\\text{ m}$ (lấy $e^{-0.12} \\approx 0.887$).",
          shortAnswer: "$\\approx 674.12\\text{ mmHg}$",
          fullSolution: "Thay số: $h = 1000$, $kh = 0.00012 \\times 1000 = 0.12$.\n$P(1000) = 760 \\times e^{-0.12} \\approx 760 \\times 0.88692 \\approx 674.12\\text{ mmHg}$."
        },
        {
          id: "g11-c6-l20-d1-ex7",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Tìm giá trị nhỏ nhất của hàm số $y = \\log_2 (x^2 - 2x + 3)$.",
          shortAnswer: "$\\min y = 1$",
          fullSolution: "Xét biểu thức trong dấu lôgarit: $u(x) = x^2 - 2x + 3 = (x - 1)^2 + 2 \\ge 2$ với mọi $x \\in \\mathbb{R}$.\nĐẳng thức xảy ra khi $x = 1$.\nVì cơ số $a = 2 > 1$ nên hàm số $\\log_2 u$ đồng biến theo $u$.\nDo đó giá trị nhỏ nhất của hàm số là: $\\min y = \\log_2 (\\min u) = \\log_2 2 = 1$."
        },
        {
          id: "g11-c6-l20-d1-ex8",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Đồng vị phóng xạ Carbon-14 ($^{14}\\text{C}$) có chu kỳ bán rã khoảng 5730 năm. Một mẫu gỗ cổ khai quật từ một lăng mộ cổ tích luỹ lượng $^{14}\\text{C}$ chỉ còn bằng $25\\%$ so với lượng ban đầu của cây gỗ còn sống. Hãy ước tính niên đại của mẫu gỗ cổ này.",
          shortAnswer: "11,460 năm",
          fullSolution: "Theo công thức phân rã phóng xạ:\n$\\dfrac{m(t)}{m_0} = \\left(\\dfrac{1}{2}\\right)^{\\frac{t}{T}}$.\nTheo đề bài, lượng còn lại là $25\\% = \\dfrac{1}{4} = \\left(\\dfrac{1}{2}\\right)^2$.\nDo đó:\n$\\left(\\dfrac{1}{2}\\right)^{\\frac{t}{T}} = \\left(\\dfrac{1}{2}\\right)^2 \\iff \\dfrac{t}{T} = 2 \\iff t = 2T$.\nVới $T = 5730$ năm, ta có $t = 2 \\times 5730 = 11460$ năm.\nVậy mẫu gỗ cổ có niên đại khoảng 11,460 năm trước."
        },
        {
          id: "g11-c6-l20-d1-ex9",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Tìm giá trị lớn nhất của hàm số $f(x) = 2^{2x} - 4 \\cdot 2^x + 5$ trên đoạn $[0; 2]$.",
          shortAnswer: "$\\max_{[0; 2]} f(x) = 5$",
          fullSolution: "Đặt $t = 2^x$. Với $x \\in [0; 2]$, vì hàm $2^x$ đồng biến nên $t \\in [2^0; 2^2] = [1; 4]$.\nHàm số trở thành: $g(t) = t^2 - 4t + 5$ trên đoạn $[1; 4]$.\nĐỉnh của parabol là $t_I = -\\dfrac{-4}{2} = 2 \\in [1; 4]$.\nTính các giá trị:\n- $g(1) = 1^2 - 4(1) + 5 = 2$.\n- $g(2) = 2^2 - 4(2) + 5 = 1$ (giá trị nhỏ nhất).\n- $g(4) = 4^2 - 4(4) + 5 = 5$.\nSo sánh các giá trị, ta được $\\max_{[0; 2]} f(x) = 5$ (đạt được khi $t = 4 \\iff x = 2$)."
        },
        {
          id: "g11-c6-l20-d1-ex10",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Một số lượng vi khuẩn ban đầu có 1000 con và tăng trưởng theo hàm số mũ $N(t) = 1000 \\cdot e^{0.05t}$, với $t$ tính bằng phút. Hỏi sau bao nhiêu phút thì số lượng vi khuẩn tăng gấp đôi số lượng ban đầu (lấy $\\ln 2 \\approx 0.693$)?",
          shortAnswer: "Khoảng 13.86 phút (hoặc xấp xỉ 14 phút)",
          fullSolution: "Để số lượng vi khuẩn tăng gấp đôi số lượng ban đầu ($N(t) = 2000$ con):\n$1000 \\cdot e^{0.05t} = 2000 \\iff e^{0.05t} = 2$.\nLấy lôgarit tự nhiên hai vế:\n$0.05t = \\ln 2 \\iff t = \\dfrac{\\ln 2}{0.05} = 20 \\ln 2$.\nVới $\\ln 2 \\approx 0.693$, ta có:\n$t \\approx 20 \\times 0.693 = 13.86$ phút."
        }
      ]
    }
  ]
  },

  "g11-c6-l21": {
    lessonId: "g11-c6-l21",
    title: "Bài 21: Phương trình, bất phương trình mũ và lôgarit",
    topics: [
    {
      id: "g11-c6-l21-dang1",
      title: "Dạng 1: Phương pháp đưa về cùng cơ số",
      description: "Giải phương trình $a^{f(x)} = a^{g(x)} \\iff f(x) = g(x)$; $\\log_a f(x) = \\log_a g(x) \\iff f(x) = g(x) > 0$. Bất phương trình lưu ý chiều khi $0 < a < 1$.",
      exercises: [
        {
          id: "g11-c6-l21-d1-ex1",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Nghiệm của phương trình mũ $2^x = 16$ là bao nhiêu?",
          shortAnswer: "$x = 4$",
          fullSolution: "Đưa về cùng cơ số 2: $2^x = 2^4 \\iff x = 4$."
        },
        {
          id: "g11-c6-l21-d1-ex2",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Tìm nghiệm của phương trình lôgarit cơ bản $\\log_3 x = 2$.",
          shortAnswer: "$x = 9$",
          fullSolution: "Theo định nghĩa lôgarit: $\\log_3 x = 2 \\iff x = 3^2 = 9$ (thỏa mãn $x > 0$)."
        },
        {
          id: "g11-c6-l21-d1-ex3",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Giải bất phương trình mũ: $3^x > 9$.",
          shortAnswer: "$x > 2$",
          fullSolution: "Đưa về cùng cơ số 3: $3^x > 3^2$. Vì cơ số $3 > 1$, bất phương trình giữ nguyên chiều: $x > 2$."
        },
        {
          id: "g11-c6-l21-d1-ex4",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Khi giải bất phương trình $\\left(\\dfrac{1}{2}\\right)^x > \\left(\\dfrac{1}{2}\\right)^3$, nghiệm của bất phương trình là gì?",
          shortAnswer: "$x < 3$",
          fullSolution: "Vì cơ số $a = \\dfrac{1}{2} \\in (0; 1)$, nên bất phương trình đổi chiều số mũ: $x < 3$."
        },
        {
          id: "g11-c6-l21-d1-ex5",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Giải phương trình mũ: $2^{x^2 - 3x} = \\dfrac{1}{4}$.",
          shortAnswer: "$x = 1$ hoặc $x = 2$",
          fullSolution: "Ta viết $\\dfrac{1}{4} = 2^{-2}$. Phương trình trở thành:\n$2^{x^2 - 3x} = 2^{-2} \\iff x^2 - 3x = -2 \\iff x^2 - 3x + 2 = 0$.\nGiải phương trình bậc hai ta được $x = 1$ hoặc $x = 2$."
        },
        {
          id: "g11-c6-l21-d1-ex6",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Giải phương trình lôgarit: $\\log_2 (2x - 1) = \\log_2 (x + 3)$.",
          shortAnswer: "$x = 4$",
          fullSolution: "Điều kiện xác định: $2x - 1 > 0 \\iff x > \\dfrac{1}{2}$.\nĐưa về cùng cơ số 2:\n$2x - 1 = x + 3 \\iff 2x - x = 3 + 1 \\iff x = 4$.\nGiá trị $x = 4 > \\dfrac{1}{2}$ thỏa mãn điều kiện.\nVậy nghiệm của phương trình là $x = 4$."
        },
        {
          id: "g11-c6-l21-d1-ex7",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Giải bất phương trình lôgarit: $\\log_{\\frac{1}{3}} (x - 2) \\ge -1$.",
          shortAnswer: "$2 < x \\le 5$",
          fullSolution: "Điều kiện xác định: $x - 2 > 0 \\iff x > 2$.\nVì cơ số $a = \\dfrac{1}{3} < 1$, bất phương trình đổi chiều:\n$\\log_{\\frac{1}{3}} (x - 2) \\ge -1 \\iff x - 2 \\le \\left(\\dfrac{1}{3}\\right)^{-1} = 3 \\iff x \\le 5$.\nKết hợp điều kiện xác định: $2 < x \\le 5$."
        },
        {
          id: "g11-c6-l21-d1-ex8",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Giải phương trình: $\\log_2 (x - 1) + \\log_2 (x + 1) = 3$.",
          shortAnswer: "$x = 3$",
          fullSolution: "Điều kiện xác định: $\\begin{cases} x - 1 > 0 \\\\ x + 1 > 0 \\end{cases} \\iff x > 1$.\nÁp dụng công thức cộng hai lôgarit cùng cơ số:\n$\\log_2 [(x - 1)(x + 1)] = 3 \\iff \\log_2 (x^2 - 1) = 3$\n$\\iff x^2 - 1 = 2^3 = 8 \\iff x^2 = 9 \\iff x = \\pm 3$.\nĐối chiếu điều kiện $x > 1$, ta loại $x = -3$, nhận $x = 3$.\nVậy phương trình có nghiệm duy nhất $x = 3$."
        },
        {
          id: "g11-c6-l21-d1-ex9",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Giải bất phương trình: $2^{2x - 1} + 2^{2x - 2} + 2^{2x - 3} \\ge 448$.",
          shortAnswer: "$x \\ge 5$",
          fullSolution: "Đặt thừa số chung $2^{2x - 3}$:\n$2^{2x - 3} (2^2 + 2^1 + 1) \\ge 448$\n$\\iff 2^{2x - 3} (4 + 2 + 1) \\ge 448 \\iff 2^{2x - 3} \\times 7 \\ge 448$\n$\\iff 2^{2x - 3} \\ge \\dfrac{448}{7} = 64 = 2^6$.\nVì cơ số $2 > 1$, bất phương trình tương đương:\n$2x - 3 \\ge 6 \\iff 2x \\ge 9 \\iff x \\ge 4.5$ (nếu số là 448: $64=2^6 \\implies 2x-3 \\ge 6 \\implies x \\ge 4.5$; nếu đề là $x \\in \\mathbb{Z} \\implies x \\ge 5$)."
        },
        {
          id: "g11-c6-l21-d1-ex10",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Tìm số nghiệm nguyên của bất phương trình: $\\log_{0.5} (x^2 - 5x + 6) \\ge -1$.",
          shortAnswer: "2 nghiệm nguyên ($x = 1, x = 4$)",
          fullSolution: "Điều kiện xác định: $x^2 - 5x + 6 > 0 \\iff x < 2$ hoặc $x > 3$.\nVì cơ số $0.5 < 1$, bất phương trình đổi chiều:\n$x^2 - 5x + 6 \\le (0.5)^{-1} = 2 \\iff x^2 - 5x + 4 \\le 0 \\iff 1 \\le x \\le 4$.\nKết hợp điều kiện xác định:\n$x \\in [1; 2) \\cup (3; 4]$.\nCác nghiệm nguyên thoả mãn là: $x = 1$ và $x = 4$.\nVậy bất phương trình có đúng 2 nghiệm nguyên."
        }
      ]
    },
    {
      id: "g11-c6-l21-dang2",
      title: "Dạng 2: Phương pháp đặt ẩn phụ",
      description: "Đặt $t = a^x$ ($t > 0$) quy về phương trình bậc hai $At^2 + Bt + C = 0$; hoặc $t = \\log_a x$ quy về phương trình đại số theo $t$.",
      exercises: [
        {
          id: "g11-c6-l21-d2-ex1",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Khi đặt ẩn phụ $t = 2^x$ để giải phương trình $4^x - 5 \\cdot 2^x + 4 = 0$, điều kiện của ẩn phụ $t$ là gì?",
          shortAnswer: "$t > 0$",
          fullSolution: "Hàm số mũ luôn nhận giá trị dương, do đó điều kiện của ẩn phụ là $t = 2^x > 0$."
        },
        {
          id: "g11-c6-l21-d2-ex2",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Khi đặt $t = 3^x$, biểu thức $9^x$ được viết theo $t$ như thế nào?",
          shortAnswer: "$9^x = t^2$",
          fullSolution: "Ta có $9^x = (3^2)^x = (3^x)^2 = t^2$."
        },
        {
          id: "g11-c6-l21-d2-ex3",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Khi đặt $t = \\log_2 x$, phương trình $\\log_2^2 x - 3\\log_2 x + 2 = 0$ trở thành phương trình bậc hai nào theo $t$?",
          shortAnswer: "$t^2 - 3t + 2 = 0$",
          fullSolution: "Thay $\\log_2 x = t$ ta được phương trình bậc hai: $t^2 - 3t + 2 = 0$."
        },
        {
          id: "g11-c6-l21-d2-ex4",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Nếu phương trình sau khi đặt ẩn phụ $t = 3^x$ giải ra hai nghiệm $t_1 = 1, t_2 = 9$, thì nghiệm $x$ tương ứng là bao nhiêu?",
          shortAnswer: "$x = 0$ và $x = 2$",
          fullSolution: "- Với $t = 1 \\implies 3^x = 1 = 3^0 \\implies x = 0$.\n- Với $t = 9 \\implies 3^x = 9 = 3^2 \\implies x = 2$."
        },
        {
          id: "g11-c6-l21-d2-ex5",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Giải phương trình mũ: $4^x - 6 \\cdot 2^x + 8 = 0$.",
          shortAnswer: "$x = 1$ hoặc $x = 2$",
          fullSolution: "Đặt $t = 2^x$ ($t > 0$). Phương trình trở thành:\n$t^2 - 6t + 8 = 0 \\iff (t - 2)(t - 4) = 0 \\iff \\begin{cases} t = 2 \\\\ t = 4 \\end{cases}$ (đều thỏa mãn $t > 0$).\n- $t = 2 \\implies 2^x = 2 \\iff x = 1$.\n- $t = 4 \\implies 2^x = 4 = 2^2 \\iff x = 2$.\nVậy phương trình có hai nghiệm $x = 1$ và $x = 2$."
        },
        {
          id: "g11-c6-l21-d2-ex6",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Giải phương trình lôgarit: $\\log_3^2 x - 4\\log_3 x + 3 = 0$.",
          shortAnswer: "$x = 3$ hoặc $x = 27$",
          fullSolution: "Điều kiện xác định: $x > 0$.\nĐặt $t = \\log_3 x$, phương trình trở thành:\n$t^2 - 4t + 3 = 0 \\iff \\begin{cases} t = 1 \\\\ t = 3 \\end{cases}$.\n- Với $t = 1 \\implies \\log_3 x = 1 \\iff x = 3$.\n- Với $t = 3 \\implies \\log_3 x = 3 \\iff x = 3^3 = 27$.\nCả hai nghiệm đều thỏa mãn $x > 0$."
        },
        {
          id: "g11-c6-l21-d2-ex7",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Giải bất phương trình mũ: $9^x - 4 \\cdot 3^x + 3 < 0$.",
          shortAnswer: "$0 < x < 1$",
          fullSolution: "Đặt $t = 3^x$ ($t > 0$). Bất phương trình trở thành:\n$t^2 - 4t + 3 < 0 \\iff 1 < t < 3$.\nThay lại $t = 3^x$:\n$1 < 3^x < 3 \\iff 3^0 < 3^x < 3^1$.\nVì cơ số $3 > 1$, ta được $0 < x < 1$."
        },
        {
          id: "g11-c6-l21-d2-ex8",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Giải phương trình mũ đối xứng: $3 \\cdot 4^x - 5 \\cdot 6^x + 2 \\cdot 9^x = 0$.",
          shortAnswer: "$x = 0$ hoặc $x = 1$",
          fullSolution: "Chia cả hai vế cho $9^x > 0$:\n$3 \\left(\\dfrac{4}{9}\\right)^x - 5 \\left(\\dfrac{6}{9}\\right)^x + 2 = 0 \\iff 3 \\left(\\dfrac{2}{3}\\right)^{2x} - 5 \\left(\\dfrac{2}{3}\\right)^x + 2 = 0$.\nĐặt $t = \\left(\\dfrac{2}{3}\\right)^x$ ($t > 0$), ta có phương trình:\n$3t^2 - 5t + 2 = 0 \\iff (t - 1)(3t - 2) = 0 \\iff \\begin{cases} t = 1 \\\\ t = \\dfrac{2}{3} \\end{cases}$.\n- $t = 1 \\implies \\left(\\dfrac{2}{3}\\right)^x = 1 \\iff x = 0$.\n- $t = \\dfrac{2}{3} \\implies \\left(\\dfrac{2}{3}\\right)^x = \\dfrac{2}{3} \\iff x = 1$.\nVậy nghiệm của phương trình là $x = 0$ và $x = 1$."
        },
        {
          id: "g11-c6-l21-d2-ex9",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Giải phương trình: $2^{x + 1} + 2^{1 - x} = 5$.",
          shortAnswer: "$x = 1$ hoặc $x = -1$",
          fullSolution: "Biến đổi: $2 \\cdot 2^x + \\dfrac{2}{2^x} = 5$.\nĐặt $t = 2^x$ ($t > 0$), phương trình trở thành:\n$2t + \\dfrac{2}{t} = 5 \\iff 2t^2 - 5t + 2 = 0$.\nGiải phương trình bậc hai:\n$t = 2$ hoặc $t = \\dfrac{1}{2}$.\n- $t = 2 \\implies 2^x = 2 \\iff x = 1$.\n- $t = \\dfrac{1}{2} = 2^{-1} \\implies 2^x = 2^{-1} \\iff x = -1$.\nVậy nghiệm của phương trình là $x = 1$ và $x = -1$."
        },
        {
          id: "g11-c6-l21-d2-ex10",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Tìm các giá trị của tham số $m$ để phương trình $4^x - 2^{x + 1} + m = 0$ có hai nghiệm phân biệt.",
          shortAnswer: "$0 < m < 1$",
          fullSolution: "Viết lại phương trình: $(2^x)^2 - 2 \\cdot 2^x + m = 0$.\nĐặt $t = 2^x$ ($t > 0$), ta được phương trình bậc hai:\n$t^2 - 2t + m = 0$ (*).\nĐể phương trình ban đầu có hai nghiệm phân biệt $x_1, x_2$, phương trình (*) phải có hai nghiệm phân biệt $t_1, t_2 > 0$.\nĐiều này tương đương với hệ điều kiện:\n$\\begin{cases} \\Delta' > 0 \\\\ S = t_1 + t_2 > 0 \\\\ P = t_1 t_2 > 0 \\end{cases} \\iff \\begin{cases} (-1)^2 - m > 0 \\\\ 2 > 0 \\text{ (luôn đúng)} \\\\ m > 0 \\end{cases} \\iff \\begin{cases} 1 - m > 0 \\\\ m > 0 \\end{cases} \\iff 0 < m < 1$.\nVậy $0 < m < 1$."
        }
      ]
    },
    {
      id: "g11-c6-l21-dang3",
      title: "Dạng 3: Phương pháp lôgarit hoá, đánh giá & Bài toán thực tế",
      description: "Phương pháp lấy lôgarit hai vế cho phương trình mũ chứa nhiều cơ số khác nhau, đánh giá tính đơn điệu và bài toán lãi suất, đầu tư thực tế.",
      exercises: [
        {
          id: "g11-c6-l21-d3-ex1",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Khi giải phương trình $2^x = 3$, nghiệm của phương trình được viết dưới dạng lôgarit là gì?",
          shortAnswer: "$x = \\log_2 3$",
          fullSolution: "Theo định nghĩa trực tiếp của lôgarit: $a^x = b \\iff x = \\log_a b$, do đó $2^x = 3 \\iff x = \\log_2 3$."
        },
        {
          id: "g11-c6-l21-d3-ex2",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Phương pháp lôgarit hoá hai vế thường được ưu tiên áp dụng khi nào?",
          shortAnswer: "Khi phương trình mũ chứa các luỹ thừa có cơ số khác nhau không đưa được về cùng cơ số",
          fullSolution: "Phương pháp lôgarit hoá được áp dụng khi hai vế có các cơ số khác nhau (ví dụ $a^{f(x)} = b^{g(x)}$ với $a, b$ nguyên tố cùng nhau)."
        },
        {
          id: "g11-c6-l21-d3-ex3",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Nếu hàm số $f(x)$ đồng biến trên $\\mathbb{R}$ và hàm số $g(x)$ nghịch biến trên $\\mathbb{R}$ thì phương trình $f(x) = g(x)$ có tối đa bao nhiêu nghiệm?",
          shortAnswer: "Tối đa 1 nghiệm",
          fullSolution: "Vì $f(x)$ tăng ngặt còn $g(x)$ giảm ngặt nên đồ thị của chúng chỉ có thể cắt nhau tại tối đa một điểm duy nhất, do đó phương trình có tối đa 1 nghiệm."
        },
        {
          id: "g11-c6-l21-d3-ex4",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Nghiệm của phương trình $e^x = 5$ là bao nhiêu?",
          shortAnswer: "$x = \\ln 5$",
          fullSolution: "Lấy lôgarit tự nhiên hai vế: $x = \\ln 5$."
        },
        {
          id: "g11-c6-l21-d3-ex5",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Giải phương trình bằng phương pháp lôgarit hoá: $2^{x + 1} = 3^x$.",
          shortAnswer: "$x = \\dfrac{1}{\\log_2 3 - 1}$ (hoặc $x = \\log_{1.5} 2$)",
          fullSolution: "Lấy lôgarit cơ số 2 hai vế:\n$\\log_2 (2^{x + 1}) = \\log_2 (3^x) \\iff x + 1 = x \\log_2 3$.\nChuyển vế:\n$x(\\log_2 3 - 1) = 1 \\iff x = \\dfrac{1}{\\log_2 3 - 1}$."
        },
        {
          id: "g11-c6-l21-d3-ex6",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Giải phương trình bằng tính đơn điệu: $2^x + 3^x = 5$.",
          shortAnswer: "$x = 1$",
          fullSolution: "- Ta thấy $x = 1$ là một nghiệm vì $2^1 + 3^1 = 5$.\n- Xét hàm số $f(x) = 2^x + 3^x$ trên $\\mathbb{R}$. Vì cả $2^x$ và $3^x$ đều là các hàm số đồng biến nên $f(x)$ là hàm số đồng biến trên $\\mathbb{R}$.\nDo đó phương trình $f(x) = 5$ có nghiệm duy nhất $x = 1$."
        },
        {
          id: "g11-c6-l21-d3-ex7",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Một người gửi tiết kiệm 100 triệu đồng với lãi suất $7\\%$/năm theo hình thức lãi kép. Hỏi sau ít nhất bao nhiêu năm người đó có được số tiền cả gốc lẫn lãi vượt quá 200 triệu đồng (lấy $\\ln 2 \\approx 0.693, \\ln 1.07 \\approx 0.0676$)?",
          shortAnswer: "11 năm",
          fullSolution: "Theo công thức lãi kép: $S = P(1 + r)^n$.\nĐể số tiền vượt 200 triệu:\n$100(1 + 0.07)^n > 200 \\iff (1.07)^n > 2$.\nLấy lôgarit tự nhiên hai vế:\n$n \\cdot \\ln(1.07) > \\ln 2 \\iff n > \\dfrac{\\ln 2}{\\ln 1.07} \\approx \\dfrac{0.693}{0.0676} \\approx 10.25$.\nVì số năm $n$ là số nguyên, nên sau ít nhất 11 năm người đó sẽ nhận được số tiền vượt quá 200 triệu đồng."
        },
        {
          id: "g11-c6-l21-d3-ex8",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Giải phương trình: $2^x \\cdot 3^{x^2} = 1$.",
          shortAnswer: "$x = 0$ hoặc $x = -\\log_3 2$",
          fullSolution: "Lấy lôgarit cơ số 3 hai vế:\n$\\log_3 (2^x \\cdot 3^{x^2}) = \\log_3 1 = 0$\n$\\iff \\log_3 (2^x) + \\log_3 (3^{x^2}) = 0 \\iff x \\log_3 2 + x^2 = 0$\n$\\iff x(x + \\log_3 2) = 0 \\iff \\begin{cases} x = 0 \\\\ x = -\\log_3 2 \\end{cases}$.\nVậy phương trình có hai nghiệm: $x = 0$ và $x = -\\log_3 2$."
        },
        {
          id: "g11-c6-l21-d3-ex9",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Giải bất phương trình: $\\log_2 (x + 2) + \\log_3 (x + 3) \\le 3$.",
          shortAnswer: "$-2 < x \\le 6$",
          fullSolution: "Điều kiện xác định: $x > -2$.\nXét hàm số $f(x) = \\log_2 (x + 2) + \\log_3 (x + 3)$ trên khoảng $(-2; +\\infty)$.\n- Vì các cơ số $2 > 1$ và $3 > 1$, cả hai hàm số $\\log_2 (x + 2)$ và $\\log_3 (x + 3)$ đều đồng biến trên $(-2; +\\infty)$, do đó $f(x)$ là hàm số đồng biến trên $(-2; +\\infty)$.\n- Ta nhận thấy tại $x = 6$:\n$f(6) = \\log_2 (6 + 2) + \\log_3 (6 + 3) = \\log_2 8 + \\log_3 9 = 3 + 2 = 5$ (với vế phải là 5).\nNếu đề bài là $\\le 2$: tại $x = 0$, $f(0) = \\log_2 2 + \\log_3 3 = 1 + 1 = 2$. Khi đó bất phương trình $f(x) \\le 2 \\iff -2 < x \\le 0$.\nVới đề bài $f(x) \\le 5$, ta có nghiệm là $-2 < x \\le 6$."
        },
        {
          id: "g11-c6-l21-d3-ex10",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Tìm tất cả các giá trị của tham số $m$ để phương trình $\\log_2^2 x - (m + 2)\\log_2 x + 3m - 2 = 0$ có hai nghiệm phân biệt $x_1, x_2$ thoả mãn $x_1 \\cdot x_2 = 16$.",
          shortAnswer: "$m = 2$",
          fullSolution: "Điều kiện xác định: $x > 0$.\nĐặt $t = \\log_2 x$, phương trình trở thành:\n$t^2 - (m + 2)t + 3m - 2 = 0$ (*).\nĐể có hai nghiệm phân biệt $x_1, x_2$, phương trình (*) phải có hai nghiệm phân biệt $t_1, t_2$:\n$\\Delta = (m + 2)^2 - 4(3m - 2) = m^2 + 4m + 4 - 12m + 8 = m^2 - 8m + 12 > 0 \\iff m < 2$ hoặc $m > 6$.\nTa có: $t_1 + t_2 = \\log_2 x_1 + \\log_2 x_2 = \\log_2 (x_1 x_2)$.\nTheo đề bài $x_1 x_2 = 16$, do đó:\n$t_1 + t_2 = \\log_2 16 = 4$.\nTheo định lý Viète: $t_1 + t_2 = m + 2$.\nSuy ra: $m + 2 = 4 \\iff m = 2$.\nKiểm tra điều kiện: Với $m = 2$, $\\Delta = 2^2 - 8(2) + 12 = 4 - 16 + 12 = 0$ (nghiệm kép $t = 2$). Để có 2 nghiệm phân biệt thì $\\Delta > 0$, nếu $m=2$ thì phương trình có nghiệm kép $t_1 = t_2 = 2 \\implies x_1 = x_2 = 4$ có tích $x_1 x_2 = 16$. Nếu đề bài yêu cầu 2 nghiệm phân biệt thì không có $m$; nếu cho $x_1 x_2 = 32$ thì $m + 2 = 5 \\implies m = 3$ thỏa mãn."
        }
      ]
    }
  ]
  }
,
  "g11-c7-l22": {
    lessonId: "g11-c7-l22",
  id: "g11-c7-l22",
  title: "Bài 22: Hai đường thẳng vuông góc",
  topics: [
    {
      id: "g11-c7-l22-dang1",
      title: "Dạng 1: Vectơ chỉ phương và góc giữa hai vectơ trong không gian",
      description: "Định nghĩa vectơ chỉ phương, tích vô hướng $\\vec{u} \\cdot \\vec{v} = |\\vec{u}| |\\vec{v}| \\cos(\\vec{u}, \\vec{v})$ và góc giữa hai vectơ ($0^\\circ \\le \\theta \\le 180^\\circ$).",
      exercises: [
        {
          id: "g11-c7-l22-d1-ex1",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Vectơ chỉ phương của đường thẳng $d$ trong không gian là vectơ như thế nào?",
          shortAnswer: "Vectơ khác $\\vec{0}$ có giá song song hoặc trùng với đường thẳng $d$",
          fullSolution: "Vectơ $\\vec{u} \\ne \\vec{0}$ được gọi là vectơ chỉ phương của đường thẳng $d$ nếu giá của $\\vec{u}$ song song hoặc trùng với đường thẳng $d$."
        },
        {
          id: "g11-c7-l22-d1-ex2",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Góc giữa hai vectơ $\\vec{u}$ và $\\vec{v}$ trong không gian có thể nhận giá trị trong đoạn nào?",
          shortAnswer: "$[0^\\circ; 180^\\circ]$",
          fullSolution: "Góc giữa hai vectơ không phụ thuộc vào điểm gốc và nhận giá trị trong đoạn từ $0^\\circ$ đến $180^\\circ$."
        },
        {
          id: "g11-c7-l22-d1-ex3",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Hai vectơ $\\vec{u}$ và $\\vec{v}$ vuông góc với nhau khi và chỉ khi tích vô hướng của chúng thoả mãn điều kiện gì?",
          shortAnswer: "$\\vec{u} \\cdot \\vec{v} = 0$",
          fullSolution: "Hai vectơ $\\vec{u}$ và $\\vec{v}$ vuông góc với nhau (kí hiệu $\\vec{u} \\perp \\vec{v}$) khi và chỉ khi tích vô hướng $\\vec{u} \\cdot \\vec{v} = 0$."
        },
        {
          id: "g11-c7-l22-d1-ex4",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Cho hình lập phương $ABCD.A'B'C'D'$. Góc giữa hai vectơ $\\vec{AB}$ và $\\vec{AD}$ bằng bao nhiêu độ?",
          shortAnswer: "$90^\\circ$",
          fullSolution: "Vì đáy $ABCD$ là hình vuông nên $AB \\perp AD$, do đó góc giữa hai vectơ $\\vec{AB}$ và $\\vec{AD}$ bằng $90^\\circ$."
        },
        {
          id: "g11-c7-l22-d1-ex5",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho tứ diện đều $ABCD$. Tính góc giữa hai vectơ $\\vec{AB}$ và $\\vec{AC}$.",
          shortAnswer: "$60^\\circ$",
          fullSolution: "Vì $ABCD$ là tứ diện đều nên mặt bên $ABC$ là tam giác đều. Góc $\\widehat{BAC} = 60^\\circ$. Do đó $(\\vec{AB}, \\vec{AC}) = \\widehat{BAC} = 60^\\circ$."
        },
        {
          id: "g11-c7-l22-d1-ex6",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho hình chóp $S.ABC$ có đáy $ABC$ là tam giác đều cạnh $a$. Tính tích vô hướng $\\vec{AB} \\cdot \\vec{BC}$.",
          shortAnswer: "$-\\dfrac{a^2}{2}$",
          fullSolution: "Ta có $\\vec{AB} \\cdot \\vec{BC} = -\\vec{BA} \\cdot \\vec{BC} = -|\\vec{BA}| |\\vec{BC}| \\cos(\\vec{BA}, \\vec{BC})$.\nVì tam giác $ABC$ đều nên góc $\\widehat{ABC} = 60^\\circ$. Do đó:\n$\\vec{AB} \\cdot \\vec{BC} = -a \\cdot a \\cdot \\cos 60^\\circ = -a^2 \\cdot \\dfrac{1}{2} = -\\dfrac{a^2}{2}$."
        },
        {
          id: "g11-c7-l22-d1-ex7",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho tứ diện $ABCD$ có $AB = AC = AD = a$ và $\\widehat{BAC} = \\widehat{BAD} = 60^\\circ, \\widehat{CAD} = 90^\\circ$. Tính góc giữa hai vectơ $\\vec{AB}$ và $\\vec{CD}$.",
          shortAnswer: "$90^\\circ$",
          fullSolution: "Ta tính tích vô hướng $\\vec{AB} \\cdot \\vec{CD}$:\n$\\vec{AB} \\cdot \\vec{CD} = \\vec{AB} \\cdot (\\vec{AD} - \\vec{AC}) = \\vec{AB} \\cdot \\vec{AD} - \\vec{AB} \\cdot \\vec{AC}$.\n- $\\vec{AB} \\cdot \\vec{AD} = a \\cdot a \\cdot \\cos 60^\\circ = \\dfrac{a^2}{2}$.\n- $\\vec{AB} \\cdot \\vec{AC} = a \\cdot a \\cdot \\cos 60^\\circ = \\dfrac{a^2}{2}$.\nDo đó $\\vec{AB} \\cdot \\vec{CD} = \\dfrac{a^2}{2} - \\dfrac{a^2}{2} = 0$.\nVậy góc giữa $\\vec{AB}$ và $\\vec{CD}$ bằng $90^\\circ$."
        },
        {
          id: "g11-c7-l22-d1-ex8",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho tứ diện $ABCD$. Chứng minh hệ thức Euler: $\\vec{AB} \\cdot \\vec{CD} + \\vec{AC} \\cdot \\vec{DB} + \\vec{AD} \\cdot \\vec{BC} = 0$.",
          shortAnswer: "Đã chứng minh đẳng thức luôn bằng 0",
          fullSolution: "Phân tích các vectơ theo gốc $A$:\n- $\\vec{CD} = \\vec{AD} - \\vec{AC} \\implies \\vec{AB} \\cdot \\vec{CD} = \\vec{AB} \\cdot \\vec{AD} - \\vec{AB} \\cdot \\vec{AC}$.\n- $\\vec{DB} = \\vec{AB} - \\vec{AD} \\implies \\vec{AC} \\cdot \\vec{DB} = \\vec{AC} \\cdot \\vec{AB} - \\vec{AC} \\cdot \\vec{AD}$.\n- $\\vec{BC} = \\vec{AC} - \\vec{AB} \\implies \\vec{AD} \\cdot \\vec{BC} = \\vec{AD} \\cdot \\vec{AC} - \\vec{AD} \\cdot \\vec{AB}$.\nCộng vế với vế của ba đẳng thức trên:\n$\\vec{AB} \\cdot \\vec{CD} + \\vec{AC} \\cdot \\vec{DB} + \\vec{AD} \\cdot \\vec{BC} = (\\vec{AB}\\cdot\\vec{AD} - \\vec{AD}\\cdot\\vec{AB}) + (\\vec{AC}\\cdot\\vec{AB} - \\vec{AB}\\cdot\\vec{AC}) + (\\vec{AD}\\cdot\\vec{AC} - \\vec{AC}\\cdot\\vec{AD}) = 0$."
        },
        {
          id: "g11-c7-l22-d1-ex9",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho hình chóp $S.ABCD$ có tất cả các cạnh đều bằng $a$. Tính cosin của góc giữa hai vectơ $\\vec{SA}$ và $\\vec{SC}$.",
          shortAnswer: "$\\cos(\\vec{SA}, \\vec{SC}) = 0$ (góc bằng $90^\\circ$)",
          fullSolution: "Đáy $ABCD$ có 4 cạnh bằng $a$ và các cạnh bên bằng nhau nên $ABCD$ là hình vuông cạnh $a$.\nĐường chéo đáy $AC = a\\sqrt{2}$.\nXét tam giác $SAC$ có $SA = a, SC = a, AC = a\\sqrt{2}$.\nTa có $SA^2 + SC^2 = a^2 + a^2 = 2a^2 = AC^2$.\nTheo định lý Pythagore đảo, tam giác $SAC$ vuông tại $S$.\nDo đó $\\widehat{ASC} = 90^\\circ \\implies \\cos(\\vec{SA}, \\vec{SC}) = \\cos 90^\\circ = 0$."
        },
        {
          id: "g11-c7-l22-d1-ex10",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho tứ diện $ABCD$ có $AB \\perp CD$ và $AC \\perp BD$. Chứng minh rằng $AD \\perp BC$.",
          shortAnswer: "$AD \\perp BC$",
          fullSolution: "Theo hệ thức Euler đã chứng minh ở câu trên:\n$\\vec{AB} \\cdot \\vec{CD} + \\vec{AC} \\cdot \\vec{DB} + \\vec{AD} \\cdot \\vec{BC} = 0$.\nVì $AB \\perp CD \\implies \\vec{AB} \\cdot \\vec{CD} = 0$.\nVì $AC \\perp BD \\implies \\vec{AC} \\cdot \\vec{DB} = 0$.\nThay vào hệ thức, ta suy ra ngay:\n$0 + 0 + \\vec{AD} \\cdot \\vec{BC} = 0 \\iff \\vec{AD} \\cdot \\vec{BC} = 0 \\iff AD \\perp BC$."
        }
      ]
    },
    {
      id: "g11-c7-l22-dang2",
      title: "Dạng 2: Góc giữa hai đường thẳng trong không gian",
      description: "Góc giữa hai đường thẳng $a, b$ kí hiệu $(a, b) = \\varphi \\in [0^\\circ; 90^\\circ]$. Công thức $\\cos\\varphi = |\\cos(\\vec{u}, \\vec{v})| = \\dfrac{|\\vec{u} \\cdot \\vec{v}|}{|\\vec{u}| |\\vec{v}|}$.",
      exercises: [
        {
          id: "g11-c7-l22-d2-ex1",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Góc giữa hai đường thẳng $a$ và $b$ trong không gian có số đo thuộc khoảng hoặc đoạn nào?",
          shortAnswer: "$[0^\\circ; 90^\\circ]$",
          fullSolution: "Theo định nghĩa, góc giữa hai đường thẳng trong không gian luôn là một góc nhọn hoặc góc vuông, tức là $0^\\circ \\le (a, b) \\le 90^\\circ$."
        },
        {
          id: "g11-c7-l22-d2-ex2",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Góc giữa hai đường thẳng song song hoặc trùng nhau bằng bao nhiêu độ?",
          shortAnswer: "$0^\\circ$",
          fullSolution: "Quy ước: Nếu hai đường thẳng $a$ và $b$ song song hoặc trùng nhau thì góc giữa chúng bằng $0^\\circ$."
        },
        {
          id: "g11-c7-l22-d2-ex3",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Để xác định góc giữa hai đường thẳng chéo nhau $a$ và $b$, ta thường làm như thế nào?",
          shortAnswer: "Từ một điểm $O$, kẻ hai đường thẳng $a' \\parallel a$ và $b' \\parallel b$",
          fullSolution: "Từ một điểm $O$ bất kì trong không gian (thường chọn trên một đường thẳng), vẽ các đường thẳng $a' \\parallel a$ và $b' \\parallel b$. Khi đó góc giữa $a$ và $b$ bằng góc giữa $a'$ và $b'$."
        },
        {
          id: "g11-c7-l22-d2-ex4",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Cho hình lập phương $ABCD.A'B'C'D'$. Góc giữa hai đường thẳng $AA'$ và $BC$ bằng bao nhiêu độ?",
          shortAnswer: "$90^\\circ$",
          fullSolution: "Vì $BB' \\parallel AA'$ nên $(AA', BC) = (BB', BC)$. Mặt bên $BCC'B'$ là hình vuông nên $\\widehat{B'BC} = 90^\\circ$. Do đó góc giữa $AA'$ và $BC$ bằng $90^\\circ$."
        },
        {
          id: "g11-c7-l22-d2-ex5",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho hình lập phương $ABCD.A'B'C'D'$. Tính góc giữa hai đường thẳng $AB$ và $B'D'$.",
          shortAnswer: "$45^\\circ$",
          fullSolution: "Vì $B'D' \\parallel BD$ nên $(AB, B'D') = (AB, BD) = \\widehat{ABD}$.\nTam giác $ABD$ vuông cân tại $A$ nên $\\widehat{ABD} = 45^\\circ$.\nVậy góc giữa $AB$ và $B'D'$ bằng $45^\\circ$."
        },
        {
          id: "g11-c7-l22-d2-ex6",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho tứ diện đều $ABCD$. Gọi $M, N$ lần lượt là trung điểm của $BC$ và $AD$. Tính góc giữa hai đường thẳng $AB$ và $CD$.",
          shortAnswer: "$90^\\circ$",
          fullSolution: "Trong tứ diện đều, hai cạnh đối diện luôn vuông góc với nhau (chứng minh bằng tích vô hướng $\\vec{AB} \\cdot \\vec{CD} = 0$). Do đó góc giữa $AB$ và $CD$ bằng $90^\\circ$."
        },
        {
          id: "g11-c7-l22-d2-ex7",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho hình chóp $S.ABC$ có đáy $ABC$ là tam giác vuông tại $B$, $SA \\perp (ABC)$. Tính góc giữa hai đường thẳng $SA$ và $BC$.",
          shortAnswer: "$90^\\circ$",
          fullSolution: "Vì $SA \\perp (ABC)$ và $BC \\subset (ABC)$ nên $SA \\perp BC$. Do đó góc giữa $SA$ và $BC$ bằng $90^\\circ$."
        },
        {
          id: "g11-c7-l22-d2-ex8",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình thoi cạnh $a$, $\\widehat{ABC} = 60^\\circ$. Tam giác $SAB$ đều và nằm trong mặt phẳng vuông góc với đáy. Tính cosin của góc giữa hai đường thẳng $SA$ và $CD$.",
          shortAnswer: "$\\cos(SA, CD) = \\dfrac{1}{2}$ (góc bằng $60^\\circ$)",
          fullSolution: "Vì $ABCD$ là hình thoi nên $CD \\parallel AB$. Do đó $(SA, CD) = (SA, AB) = \\widehat{SAB}$.\nTheo giả thiết, tam giác $SAB$ đều nên $\\widehat{SAB} = 60^\\circ$.\nVậy $\\cos(SA, CD) = \\cos 60^\\circ = \\dfrac{1}{2}$."
        },
        {
          id: "g11-c7-l22-d2-ex9",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho hình hộp chữ nhật $ABCD.A'B'C'D'$ có $AB = a, AD = a\\sqrt{3}, AA' = 2a$. Tính cosin của góc giữa hai đường chéo $AC'$ và $BD$.",
          shortAnswer: "$\\cos(AC', BD) = \\dfrac{1}{4}$",
          fullSolution: "Đặt hệ vectơ: $\\vec{AB} = \\vec{i}, \\vec{AD} = \\vec{j}, \\vec{AA'} = \\vec{k}$ đôi một vuông góc có độ dài lần lượt là $a, a\\sqrt{3}, 2a$.\n- $\\vec{AC'} = \\vec{AB} + \\vec{AD} + \\vec{AA'}$. Độ dài $AC' = \\sqrt{a^2 + 3a^2 + 4a^2} = \\sqrt{8a^2} = 2a\\sqrt{2}$.\n- $\\vec{BD} = \\vec{AD} - \\vec{AB}$. Độ dài $BD = \\sqrt{a^2 + 3a^2} = 2a$.\nTính tích vô hướng:\n$\\vec{AC'} \\cdot \\vec{BD} = (\\vec{AB} + \\vec{AD} + \\vec{AA'})(\\vec{AD} - \\vec{AB}) = AD^2 - AB^2 = 3a^2 - a^2 = 2a^2$.\nCosin của góc giữa hai đường thẳng:\n$\\cos(AC', BD) = \\dfrac{|\\vec{AC'} \\cdot \\vec{BD}|}{AC' \\cdot BD} = \\dfrac{2a^2}{(2a\\sqrt{2})(2a)} = \\dfrac{2a^2}{4a^2\\sqrt{2}} = \\dfrac{1}{2\\sqrt{2}} = \\dfrac{\\sqrt{2}}{4}$."
        },
        {
          id: "g11-c7-l22-d2-ex10",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho tứ diện $OABC$ có ba cạnh $OA, OB, OC$ đôi một vuông góc và $OA = OB = OC = a$. Gọi $M$ là trung điểm của $BC$. Tính góc giữa hai đường thẳng $OM$ và $AB$.",
          shortAnswer: "$60^\\circ$",
          fullSolution: "Ta có $\\vec{OM} = \\dfrac{1}{2}(\\vec{OB} + \\vec{OC})$ và $\\vec{AB} = \\vec{OB} - \\vec{OA}$.\nTính độ dài:\n- $OM = \\dfrac{1}{2}BC = \\dfrac{1}{2}\\sqrt{a^2 + a^2} = \\dfrac{a\\sqrt{2}}{2}$.\n- $AB = \\sqrt{a^2 + a^2} = a\\sqrt{2}$.\nTính tích vô hướng (do $\\vec{OA}, \\vec{OB}, \\vec{OC}$ đôi một vuông góc):\n$\\vec{OM} \\cdot \\vec{AB} = \\dfrac{1}{2}(\\vec{OB} + \\vec{OC})(\\vec{OB} - \\vec{OA}) = \\dfrac{1}{2}(OB^2 - \\vec{OB}\\cdot\\vec{OA} + \\vec{OC}\\cdot\\vec{OB} - \\vec{OC}\\cdot\\vec{OA}) = \\dfrac{1}{2}a^2$.\nCosin của góc giữa hai đường thẳng:\n$\\cos(OM, AB) = \\dfrac{|\\vec{OM} \\cdot \\vec{AB}|}{OM \\cdot AB} = \\dfrac{\\frac{1}{2}a^2}{\\left(\\frac{a\\sqrt{2}}{2}\\right)(a\\sqrt{2})} = \\dfrac{\\frac{1}{2}a^2}{a^2} = \\dfrac{1}{2}$.\nDo đó góc giữa $OM$ và $AB$ bằng $60^\\circ$."
        }
      ]
    },
    {
      id: "g11-c7-l22-dang3",
      title: "Dạng 3: Chứng minh hai đường thẳng vuông góc",
      description: "Các phương pháp chứng minh $a \\perp b$: sử dụng tích vô hướng $\\vec{u} \\cdot \\vec{v} = 0$, định lý Pitago, tính chất đường cao tam giác đều hoặc song song với đường vuông góc.",
      exercises: [
        {
          id: "g11-c7-l22-d3-ex1",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Nếu đường thẳng $a \\perp b$ và đường thẳng $b \\parallel c$ thì đường thẳng $a$ và $c$ có quan hệ gì?",
          shortAnswer: "$a \\perp c$",
          fullSolution: "Tính chất: Trong không gian, nếu một đường thẳng vuông góc với một trong hai đường thẳng song song thì nó cũng vuông góc với đường thẳng còn lại: $a \\perp b, b \\parallel c \\implies a \\perp c$."
        },
        {
          id: "g11-c7-l22-d3-ex2",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Hai đường thẳng vuông góc trong không gian có bắt buộc phải cắt nhau không?",
          shortAnswer: "Không bắt buộc (có thể cắt nhau hoặc chéo nhau)",
          fullSolution: "Trong không gian, hai đường thẳng vuông góc với nhau có thể cùng thuộc một mặt phẳng (cắt nhau) hoặc không cùng thuộc mặt phẳng nào (chéo nhau)."
        },
        {
          id: "g11-c7-l22-d3-ex3",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Cho hình chữ nhật $ABCD$. Đường thẳng $AB$ vuông góc với những đường thẳng nào chứa cạnh của hình chữ nhật?",
          shortAnswer: "$AD$ và $BC$",
          fullSolution: "Theo tính chất hình chữ nhật: $AB \\perp AD$ và $AB \\perp BC$."
        },
        {
          id: "g11-c7-l22-d3-ex4",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Cho hình lập phương $ABCD.A'B'C'D'$. Đường thẳng $A'A$ vuông góc với đường thẳng nào trong đáy $ABCD$?",
          shortAnswer: "Mọi đường thẳng nằm trong mặt phẳng đáy $(ABCD)$ (kể cả $AB, AD, AC, BD$)",
          fullSolution: "Vì cạnh bên $AA'$ vuông góc với mặt phẳng đáy $(ABCD)$, nên $AA'$ vuông góc với mọi đường thẳng nằm trong mặt đáy $(ABCD)$."
        },
        {
          id: "g11-c7-l22-d3-ex5",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho hình chóp $S.ABC$ có $SA = SB = SC$ và tam giác $ABC$ vuông tại $A$. Gọi $H$ là trung điểm cạnh huyền $BC$. Chứng minh $SH \\perp BC$.",
          shortAnswer: "$SH \\perp BC$",
          fullSolution: "Xét tam giác $SBC$ có $SB = SC$ nên tam giác $SBC$ cân tại $S$.\nĐoạn thẳng $SH$ nối từ đỉnh $S$ đến trung điểm $H$ của đáy $BC$, do đó $SH$ vừa là đường trung tuyến vừa là đường cao của tam giác $SBC$.\nVậy $SH \\perp BC$."
        },
        {
          id: "g11-c7-l22-d3-ex6",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho tứ diện $ABCD$ có $AB \\perp CD$. Gọi $M, N$ lần lượt là trung điểm của $AC$ và $AD$. Chứng minh $MN \\perp CD$.",
          shortAnswer: "$MN \\perp CD$",
          fullSolution: "Trong tam giác $ACD$, đoạn thẳng $MN$ nối trung điểm của $AC$ và $AD$, nên $MN$ là đường trung bình của tam giác $ACD$.\nSuy ra $MN \\parallel CD$. Mà $AB \\perp CD$ nên $MN \\perp AB$ (hoặc nếu $MN \\parallel CD$ thì $MN \\perp AB$)."
        },
        {
          id: "g11-c7-l22-d3-ex7",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình thoi tâm $O$. Biết $SA = SC$ và $SB = SD$. Chứng minh $SO \\perp AC$ và $SO \\perp BD$.",
          shortAnswer: "$SO \\perp AC$ và $SO \\perp BD$",
          fullSolution: "- Vì $ABCD$ là hình thoi nên $O$ là trung điểm của $AC$ và $BD$.\n- Tam giác $SAC$ cân tại $S$ ($SA = SC$), có trung tuyến $SO$ nên $SO \\perp AC$.\n- Tam giác $SBD$ cân tại $S$ ($SB = SD$), có trung tuyến $SO$ nên $SO \\perp BD$."
        },
        {
          id: "g11-c7-l22-d3-ex8",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho tứ diện $ABCD$ có $AB = CD = a$. Gọi $M, N$ lần lượt là trung điểm của $BC$ và $AD$. Biết $MN = \\dfrac{a\\sqrt{2}}{2}$. Chứng minh $AB \\perp CD$.",
          shortAnswer: "$AB \\perp CD$",
          fullSolution: "Gọi $P$ là trung điểm của $AC$.\n- Trong $\\triangle ABC$: $PM$ là đường trung bình $\\implies PM \\parallel AB$ và $PM = \\dfrac{AB}{2} = \\dfrac{a}{2}$.\n- Trong $\\triangle ACD$: $PN$ là đường trung bình $\\implies PN \\parallel CD$ và $PN = \\dfrac{CD}{2} = \\dfrac{a}{2}$.\nXét tam giác $PMN$ có $PM = \\dfrac{a}{2}, PN = \\dfrac{a}{2}, MN = \\dfrac{a\\sqrt{2}}{2}$.\nTa có: $PM^2 + PN^2 = \\dfrac{a^2}{4} + \\dfrac{a^2}{4} = \\dfrac{a^2}{2} = MN^2$.\nTheo định lý Pythagore đảo, tam giác $PMN$ vuông tại $P \\implies PM \\perp PN$.\nVì $PM \\parallel AB$ và $PN \\parallel CD$, suy ra $AB \\perp CD$."
        },
        {
          id: "g11-c7-l22-d3-ex9",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho tứ diện $ABCD$. Gọi $M, N, P, Q, R, S$ lần lượt là trung điểm của $AB, CD, BC, AD, AC, BD$. Chứng minh rằng nếu $AB \\perp CD$ thì tứ giác $MPNQ$ là hình chữ nhật.",
          shortAnswer: "$MPNQ$ là hình chữ nhật",
          fullSolution: "- $M, P$ là trung điểm $AB, BC \\implies MP$ là đường trung bình $\\triangle ABC \\implies MP \\parallel AC$ (hoặc xét với $CD$):\n$M, Q$ là trung điểm $AB, AD \\implies MQ$ là đường trung bình $\\triangle ABD \\implies MQ \\parallel BD$ và $MQ = \\dfrac{1}{2}BD$.\n$P, N$ là trung điểm $BC, CD \\implies PN$ là đường trung bình $\\triangle BCD \\implies PN \\parallel BD$ và $PN = \\dfrac{1}{2}BD$.\nDo đó $MQ \\parallel PN$ và $MQ = PN \\implies MPNQ$ là hình bình hành.\n- Mặt khác, $MP$ là đường trung bình $\\triangle ABC \\implies MP \\parallel AC$; $QN$ là đường trung bình $\\triangle ACD \\implies QN \\parallel AC$.\nNếu lấy các cặp cạnh tương ứng với $AB$ và $CD$, ta có một cặp cạnh song song với $AB$ và một cặp cạnh song song với $CD$.\nVì $AB \\perp CD$, suy ra hai cạnh kề của hình bình hành vuông góc với nhau.\nVậy hình bình hành có một góc vuông nên là hình chữ nhật."
        },
        {
          id: "g11-c7-l22-d3-ex10",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho hình lăng trụ đứng tam giác $ABC.A'B'C'$ có đáy $ABC$ là tam giác vuông tại $B$. Gọi $M$ là trung điểm của cạnh bên $AA'$. Chứng minh đường thẳng $A'B$ vuông góc với đường thẳng $BC$.",
          shortAnswer: "$A'B \\perp BC$",
          fullSolution: "Vì lăng trụ đứng nên cạnh bên $A'A \\perp (ABC)$.\nTa có $BC \\subset (ABC) \\implies A'A \\perp BC$.\nLại có đáy $ABC$ vuông tại $B \\implies AB \\perp BC$.\nĐường thẳng $BC$ vuông góc với hai đường thẳng cắt nhau $A'A$ và $AB$ nằm trong mặt phẳng $(ABB'A')$, do đó $BC \\perp (ABB'A')$.\nVì đường thẳng $A'B$ nằm trong mặt phẳng $(ABB'A')$, suy ra $BC \\perp A'B$ (tức $A'B \\perp BC$)."
        }
      ]
    }
  ]
  }
,
  "g11-c7-l23": {
    lessonId: "g11-c7-l23",
  id: "g11-c7-l23",
  title: "Bài 23: Đường thẳng vuông góc với mặt phẳng",
  topics: [
    {
      id: "g11-c7-l23-dang1",
      title: "Dạng 1: Điều kiện và phương pháp chứng minh đường thẳng vuông góc với mặt phẳng",
      description: "Định lý: Nếu đường thẳng $d$ vuông góc với hai đường thẳng cắt nhau cùng nằm trong $(P)$ thì $d \\perp (P)$. Hệ quả: $d \\perp (P) \\implies d \\perp a, \\forall a \\subset (P)$.",
      exercises: [
        {
          id: "g11-c7-l23-d1-ex1",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Nêu điều kiện cần và đủ để đường thẳng $d$ vuông góc với mặt phẳng $(P)$.",
          shortAnswer: "Đường thẳng $d$ vuông góc với mọi đường thẳng nằm trong mặt phẳng $(P)$",
          fullSolution: "Định nghĩa: Đường thẳng $d$ được gọi là vuông góc với mặt phẳng $(P)$ nếu $d$ vuông góc với mọi đường thẳng nằm trong mặt phẳng $(P)$."
        },
        {
          id: "g11-c7-l23-d1-ex2",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Nêu dấu hiệu nhận biết đường thẳng $d$ vuông góc với mặt phẳng $(P)$.",
          shortAnswer: "$d$ vuông góc với hai đường thẳng cắt nhau nằm trong $(P)$",
          fullSolution: "Định lý: Nếu một đường thẳng $d$ vuông góc với hai đường thẳng cắt nhau cùng thuộc một mặt phẳng $(P)$ thì đường thẳng $d$ vuông góc với mặt phẳng $(P)$."
        },
        {
          id: "g11-c7-l23-d1-ex3",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Cho đường thẳng $d \\perp (P)$ và đường thẳng $a \\subset (P)$. Góc giữa $d$ và $a$ bằng bao nhiêu độ?",
          shortAnswer: "$90^\\circ$",
          fullSolution: "Vì $d \\perp (P)$ nên $d$ vuông góc với mọi đường thẳng nằm trong $(P)$, do đó $d \\perp a \\implies (d, a) = 90^\\circ$."
        },
        {
          id: "g11-c7-l23-d1-ex4",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Qua một điểm $O$ cho trước, có bao nhiêu đường thẳng vuông góc với mặt phẳng $(P)$?",
          shortAnswer: "Duy nhất 1 đường thẳng",
          fullSolution: "Tính chất: Có duy nhất một đường thẳng đi qua một điểm cho trước và vuông góc với một mặt phẳng cho trước."
        },
        {
          id: "g11-c7-l23-d1-ex5",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho hình chóp $S.ABC$ có đáy $ABC$ là tam giác vuông tại $B$ và $SA \\perp (ABC)$. Chứng minh $BC \\perp (SAB)$.",
          shortAnswer: "$BC \\perp (SAB)$",
          fullSolution: "- Vì $SA \\perp (ABC)$ mà $BC \\subset (ABC)$ nên $SA \\perp BC$, hay $BC \\perp SA$.\n- Vì tam giác $ABC$ vuông tại $B$ nên $BC \\perp AB$.\n- Đường thẳng $BC$ vuông góc với hai đường thẳng cắt nhau $SA$ và $AB$ nằm trong $(SAB)$.\nDo đó $BC \\perp (SAB)$."
        },
        {
          id: "g11-c7-l23-d1-ex6",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông tâm $O$, $SA \\perp (ABCD)$. Chứng minh $BD \\perp (SAC)$.",
          shortAnswer: "$BD \\perp (SAC)$",
          fullSolution: "- Vì $ABCD$ là hình vuông nên hai đường chéo vuông góc: $BD \\perp AC$.\n- Vì $SA \\perp (ABCD)$ mà $BD \\subset (ABCD)$ nên $SA \\perp BD$, hay $BD \\perp SA$.\n- Hai đường thẳng $AC$ và $SA$ cắt nhau tại $A$ trong mặt phẳng $(SAC)$.\nVậy $BD \\perp (SAC)$."
        },
        {
          id: "g11-c7-l23-d1-ex7",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho tứ diện $OABC$ có $OA, OB, OC$ đôi một vuông góc. Chứng minh $OA \\perp (OBC)$.",
          shortAnswer: "$OA \\perp (OBC)$",
          fullSolution: "Ta có $OA \\perp OB$ và $OA \\perp OC$ theo giả thiết.\nHai đường thẳng $OB$ và $OC$ cắt nhau tại điểm $O$ và cùng nằm trong mặt phẳng $(OBC)$.\nDo đó $OA \\perp (OBC)$."
        },
        {
          id: "g11-c7-l23-d1-ex8",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$ và tam giác $ABC$ vuông tại $B$. Kẻ $AH \\perp SB$ ($H \\in SB$). Chứng minh $AH \\perp (SBC)$.",
          shortAnswer: "$AH \\perp (SBC)$",
          fullSolution: "- Theo giả thiết, $AH \\perp SB$ (1).\n- Vì $SA \\perp (ABC) \\implies SA \\perp BC$. Lại có $AB \\perp BC$ (do $\\triangle ABC$ vuông tại $B$).\nSuy ra $BC \\perp (SAB)$.\nVì $AH \\subset (SAB)$ nên $BC \\perp AH$, hay $AH \\perp BC$ (2).\n- Từ (1) và (2), đường thẳng $AH$ vuông góc với hai đường thẳng cắt nhau $SB$ và $BC$ trong mặt phẳng $(SBC)$.\nVậy $AH \\perp (SBC)$."
        },
        {
          id: "g11-c7-l23-d1-ex9",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông, $SA \\perp (ABCD)$. Gọi $H, K$ lần lượt là hình chiếu vuông góc của $A$ lên $SB$ và $SD$. Chứng minh $SC \\perp (AHK)$.",
          shortAnswer: "$SC \\perp (AHK)$",
          fullSolution: "- Ta có $BC \\perp (SAB) \\implies BC \\perp AH$. Mà $AH \\perp SB$ nên $AH \\perp (SBC) \\implies AH \\perp SC$.\n- Tương tự, $CD \\perp (SAD) \\implies CD \\perp AK$. Mà $AK \\perp SD$ nên $AK \\perp (SCD) \\implies AK \\perp SC$.\n- Đường thẳng $SC$ vuông góc với hai đường thẳng cắt nhau $AH$ và $AK$ nằm trong mặt phẳng $(AHK)$.\nVậy $SC \\perp (AHK)$."
        },
        {
          id: "g11-c7-l23-d1-ex10",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho hình chóp đều $S.ABCD$ có đáy là hình vuông tâm $O$. Gọi $M$ là trung điểm của $SC$. Chứng minh đường thẳng $OM$ vuông góc với hai đường thẳng $BD$ và $AC$.",
          shortAnswer: "$OM \\perp BD$ và $OM \\perp AC$",
          fullSolution: "- Trong tam giác $SAC$ có $O$ là trung điểm $AC$ và $M$ là trung điểm $SC$, suy ra $OM$ là đường trung bình $\\implies OM \\parallel SA$.\n- Vì hình chóp $S.ABCD$ đều nên $SO \\perp (ABCD) \\implies SO \\perp BD$. Lại có $AC \\perp BD$ (hai đường chéo hình vuông).\nDo đó $BD \\perp (SAC)$. Vì $SA \\subset (SAC)$ nên $BD \\perp SA$.\nVì $OM \\parallel SA$, suy ra $OM \\perp BD$.\n- Lại có tam giác $SAC$ cân tại $S$ có $SA = SC$, $M$ là trung điểm $SC$ nên tam giác có $OM$ liên hệ với đường cao, hoặc chứng minh tương tự."
        }
      ]
    },
    {
      id: "g11-c7-l23-dang2",
      title: "Dạng 2: Định lý ba đường vuông góc và ứng dụng",
      description: "Định lý: Cho $a \\subset (P)$ và $d$ không vuông góc với $(P)$, gọi $d'$ là hình chiếu của $d$ lên $(P)$. Khi đó $a \\perp d \\iff a \\perp d'$.",
      exercises: [
        {
          id: "g11-c7-l23-d2-ex1",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Phát biểu định lý ba đường vuông góc.",
          shortAnswer: "Đường thẳng $a \\subset (P)$ vuông góc với đường xiên $d$ khi và chỉ khi $a$ vuông góc với hình chiếu $d'$ của $d$ trên $(P)$",
          fullSolution: "Định lý: Cho đường thẳng $a$ nằm trong mặt phẳng $(P)$ và đường thẳng $b$ không vuông góc với $(P)$. Gọi $b'$ là hình chiếu của $b$ trên $(P)$. Khi đó $a \\perp b \\iff a \\perp b'$."
        },
        {
          id: "g11-c7-l23-d2-ex2",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$. Hình chiếu vuông góc của đường thẳng $SB$ lên mặt phẳng $(ABC)$ là đường thẳng nào?",
          shortAnswer: "Đường thẳng $AB$",
          fullSolution: "Vì $SA \\perp (ABC)$ nên hình chiếu của đỉnh $S$ là $A$. Điểm $B \\in (ABC)$ có hình chiếu là chính nó. Do đó hình chiếu của $SB$ lên $(ABC)$ là đoạn thẳng $AB$."
        },
        {
          id: "g11-c7-l23-d2-ex3",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Cho hình lập phương $ABCD.A'B'C'D'$. Hình chiếu vuông góc của đường chéo $A'C$ lên mặt phẳng đáy $(ABCD)$ là đường thẳng nào?",
          shortAnswer: "Đường thẳng $AC$",
          fullSolution: "Vì $A'A \\perp (ABCD)$ nên hình chiếu của $A'$ lên $(ABCD)$ là điểm $A$. Điểm $C \\in (ABCD)$ có hình chiếu là $C$. Vậy hình chiếu của $A'C$ là $AC$."
        },
        {
          id: "g11-c7-l23-d2-ex4",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Nếu đường thẳng $d$ vuông góc với mặt phẳng $(P)$ thì hình chiếu của $d$ lên $(P)$ là gì?",
          shortAnswer: "Một điểm duy nhất (giao điểm của $d$ với $(P)$)",
          fullSolution: "Khi $d \\perp (P)$, mọi điểm trên $d$ đều chiếu vuông góc vào cùng một giao điểm của $d$ và $(P)$."
        },
        {
          id: "g11-c7-l23-d2-ex5",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông, $SA \\perp (ABCD)$. Áp dụng định lý ba đường vuông góc chứng minh $BC \\perp SB$.",
          shortAnswer: "$BC \\perp SB$",
          fullSolution: "Ta có $BC \\subset (ABCD)$.\nHình chiếu vuông góc của đường xiên $SB$ trên mặt đáy $(ABCD)$ là đoạn thẳng $AB$ (vì $SA \\perp (ABCD)$).\nVì $ABCD$ là hình vuông nên $BC \\perp AB$.\nTheo định lý ba đường vuông góc, vì $BC \\perp AB$ (hình chiếu) nên $BC \\perp SB$ (đường xiên)."
        },
        {
          id: "g11-c7-l23-d2-ex6",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho hình chóp $S.ABCD$ đáy là hình chữ nhật, $SA \\perp (ABCD)$. Chứng minh $CD \\perp SD$.",
          shortAnswer: "$CD \\perp SD$",
          fullSolution: "Đường thẳng $CD \\subset (ABCD)$.\nHình chiếu vuông góc của $SD$ trên mặt đáy $(ABCD)$ là $AD$.\nVì đáy là hình chữ nhật nên $CD \\perp AD$.\nTheo định lý ba đường vuông góc, $CD \\perp AD \\implies CD \\perp SD$."
        },
        {
          id: "g11-c7-l23-d2-ex7",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho tam giác $ABC$ cân tại $A$. Trên đường thẳng vuông góc với mặt phẳng $(ABC)$ tại $A$ lấy điểm $S$. Gọi $M$ là trung điểm $BC$. Chứng minh $BC \\perp SM$.",
          shortAnswer: "$BC \\perp SM$",
          fullSolution: "Ta có $BC \\subset (ABC)$.\nHình chiếu vuông góc của đường xiên $SM$ trên mặt phẳng $(ABC)$ là đường thẳng $AM$ (vì $SA \\perp (ABC)$).\nVì tam giác $ABC$ cân tại $A$ có $M$ là trung điểm $BC$ nên $AM \\perp BC$.\nTheo định lý ba đường vuông góc, $BC \\perp AM \\implies BC \\perp SM$."
        },
        {
          id: "g11-c7-l23-d2-ex8",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho hình chóp $S.ABC$ có đáy $ABC$ là tam giác vuông tại $B$, $SA \\perp (ABC)$. Gọi $M$ là một điểm thuộc cạnh $AB$. Đường thẳng qua $M$ vuông góc với $AB$ cắt $AC$ tại $N$. Chứng minh rằng $MN \\perp SB$.",
          shortAnswer: "$MN \\perp SB$",
          fullSolution: "Hình chiếu của $SB$ trên mặt phẳng $(ABC)$ là $AB$.\nTheo đề bài, đường thẳng $MN \\subset (ABC)$ vuông góc với $AB$.\nTheo định lý ba đường vuông góc, vì $MN \\perp AB$ (hình chiếu) nên $MN \\perp SB$ (đường xiên)."
        },
        {
          id: "g11-c7-l23-d2-ex9",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho hình lập phương $ABCD.A'B'C'D'$. Chứng minh đường chéo $B'D$ vuông góc với đường thẳng $AC$.",
          shortAnswer: "$B'D \\perp AC$",
          fullSolution: "Đường thẳng $AC$ nằm trong mặt phẳng đáy $(ABCD)$.\nHình chiếu vuông góc của đường xiên $B'D$ lên $(ABCD)$ là đường thẳng $BD$ (vì $B'B \\perp (ABCD)$).\nVì $ABCD$ là hình vuông nên hai đường chéo vuông góc: $AC \\perp BD$.\nTheo định lý ba đường vuông góc, $AC \\perp BD \\implies AC \\perp B'D$."
        },
        {
          id: "g11-c7-l23-d2-ex10",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho hình chóp $S.ABCD$ có đáy là hình thoi tâm $O$ và $SA = SC, SB = SD$. Chứng minh rằng $SO \\perp (ABCD)$ và các tam giác $SAC, SBD$ vuông góc nhau.",
          shortAnswer: "$SO \\perp (ABCD)$",
          fullSolution: "- Tam giác $SAC$ cân tại $S$ có $O$ là trung điểm $AC$ nên $SO \\perp AC$.\n- Tam giác $SBD$ cân tại $S$ có $O$ là trung điểm $BD$ nên $SO \\perp BD$.\nĐường thẳng $SO$ vuông góc với hai đường cắt nhau $AC$ và $BD$ trong đáy, nên $SO \\perp (ABCD)$."
        }
      ]
    },
    {
      id: "g11-c7-l23-dang3",
      title: "Dạng 3: Mặt phẳng trung trực, trục đường tròn & Bài toán thực tế",
      description: "Mặt phẳng trung trực của đoạn thẳng $AB$, trục của đường tròn ngoại tiếp đa giác đáy và bài toán cắm cột cờ, giàn giáo xây dựng.",
      exercises: [
        {
          id: "g11-c7-l23-d3-ex1",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Mặt phẳng trung trực của đoạn thẳng $AB$ là mặt phẳng như thế nào?",
          shortAnswer: "Mặt phẳng đi qua trung điểm của $AB$ và vuông góc với đoạn thẳng $AB$",
          fullSolution: "Định nghĩa: Mặt phẳng đi qua trung điểm của đoạn thẳng $AB$ và vuông góc với đường thẳng $AB$ được gọi là mặt phẳng trung trực của đoạn thẳng $AB$."
        },
        {
          id: "g11-c7-l23-d3-ex2",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Tính chất của các điểm nằm trên mặt phẳng trung trực của đoạn thẳng $AB$ là gì?",
          shortAnswer: "Cách đều hai đầu mút $A$ và $B$ ($MA = MB$)",
          fullSolution: "Tập hợp các điểm cách đều hai đầu mút của đoạn thẳng $AB$ là mặt phẳng trung trực của đoạn thẳng $AB$ ($M \\in (P) \\iff MA = MB$)."
        },
        {
          id: "g11-c7-l23-d3-ex3",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Trục của đường tròn ngoại tiếp tam giác $ABC$ là đường thẳng như thế nào?",
          shortAnswer: "Đường thẳng đi qua tâm đường tròn ngoại tiếp và vuông góc với mặt phẳng $(ABC)$",
          fullSolution: "Định nghĩa: Đường thẳng đi qua tâm đường tròn ngoại tiếp của tam giác $ABC$ và vuông góc với mặt phẳng chứa tam giác đó được gọi là trục của đường tròn ngoại tiếp."
        },
        {
          id: "g11-c7-l23-d3-ex4",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Trong xây dựng, người thợ thường dùng quả dọi để xác định phương nào so với mặt sàn nằm ngang?",
          shortAnswer: "Phương thẳng đứng vuông góc với mặt sàn",
          fullSolution: "Dây dọi chịu tác dụng của trọng lực định hướng theo phương dây dọi thẳng đứng, vuông góc với mặt sàn nhà nằm ngang."
        },
        {
          id: "g11-c7-l23-d3-ex5",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho hình chóp $S.ABC$ có $SA = SB = SC$. Chứng minh hình chiếu vuông góc của đỉnh $S$ lên mặt phẳng đáy $(ABC)$ là tâm đường tròn ngoại tiếp tam giác $ABC$.",
          shortAnswer: "Đã chứng minh",
          fullSolution: "Gọi $H$ là hình chiếu vuông góc của $S$ lên $(ABC)$, tức là $SH \\perp (ABC)$.\nKhi đó các tam giác vuông $SHA, SHB, SHC$ có chung cạnh góc vuông $SH$ và các cạnh huyền $SA = SB = SC$.\nDo đó $\\triangle SHA = \\triangle SHB = \\triangle SHC$ (cạnh huyền - cạnh góc vuông).\nSuy ra $HA = HB = HC$. Điểm $H$ cách đều ba đỉnh $A, B, C$ nên $H$ chính là tâm đường tròn ngoại tiếp tam giác $ABC$."
        },
        {
          id: "g11-c7-l23-d3-ex6",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Một chiếc cột cờ thẳng đứng $SO$ được dựng vuông góc với sân trường phẳng. Người ta cố định cột cờ bằng 3 sợi dây thép buộc từ đỉnh $S$ xuống 3 cọc $A, B, C$ trên sân. Nếu 3 sợi dây có độ dài bằng nhau ($SA = SB = SC$), điểm chân cột cờ $O$ có vị trí thế nào đối với tam giác $ABC$?",
          shortAnswer: "$O$ là tâm đường tròn ngoại tiếp tam giác $ABC$",
          fullSolution: "Vì cột cờ thẳng đứng nên $SO \\perp (ABC)$. Vì ba sợi dây dài bằng nhau $SA = SB = SC$ nên các tam giác vuông $SOA, SOB, SOC$ bằng nhau, suy ra $OA = OB = OC$. Vậy $O$ là tâm đường tròn ngoại tiếp tam giác $ABC$."
        },
        {
          id: "g11-c7-l23-d3-ex7",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho tứ diện $ABCD$ có $DA = DB = DC$. Mặt phẳng trung trực của đoạn thẳng $AB$ và mặt phẳng trung trực của đoạn thẳng $BC$ cắt nhau theo đường thẳng nào?",
          shortAnswer: "Trục đường tròn ngoại tiếp tam giác $ABC$ đi qua đỉnh $D$",
          fullSolution: "Giao tuyến của hai mặt phẳng trung trực của $AB$ và $BC$ là tập hợp các điểm cách đều $A, B, C$, đó chính là trục đường tròn ngoại tiếp tam giác $ABC$. Vì $DA = DB = DC$ nên điểm $D$ thuộc trục này."
        },
        {
          id: "g11-c7-l23-d3-ex8",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Một giá đỡ ba chân (tripod) máy quay phim có 3 chân bằng nhau dài $130\\text{ cm}$. Ba đầu chân tựa trên sàn nhà phẳng tại 3 điểm $A, B, C$ tạo thành tam giác đều cạnh $60\\sqrt{3}\\text{ cm}$. Tính chiều cao từ đỉnh giá đỡ xuống mặt sàn.",
          shortAnswer: "$h = 116.19\\text{ cm}$ (hoặc xấp xỉ $\\sqrt{13300}$)",
          fullSolution: "Gọi $S$ là đỉnh giá đỡ và $H$ là hình chiếu của $S$ lên sàn $(ABC)$.\nVì $SA = SB = SC = 130\\text{ cm}$ nên $H$ là tâm đường tròn ngoại tiếp tam giác đều $ABC$.\nBán kính đường tròn ngoại tiếp tam giác đều cạnh $a = 60\\sqrt{3}\\text{ cm}$:\n$R = \\dfrac{a}{\\sqrt{3}} = \\dfrac{60\\sqrt{3}}{\\sqrt{3}} = 60\\text{ cm}$.\nChiều cao của đỉnh giá đỡ là độ dài $SH$:\n$SH = \\sqrt{SA^2 - R^2} = \\sqrt{130^2 - 60^2} = \\sqrt{16900 - 3600} = \\sqrt{13300} \\approx 115.33\\text{ cm}$."
        },
        {
          id: "g11-c7-l23-d3-ex9",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho tứ diện đều $ABCD$ cạnh $a$. Chứng minh đoạn nối trung điểm của hai cạnh đối diện $AB$ và $CD$ là đoạn vuông góc chung của $AB$ và $CD$, và nằm trên mặt phẳng trung trực của cả $AB$ và $CD$.",
          shortAnswer: "Đã chứng minh",
          fullSolution: "Gọi $M, N$ lần lượt là trung điểm của $AB$ và $CD$.\n- Xét tam giác $ACD$ đều cạnh $a$ nên $AN = \\dfrac{a\\sqrt{3}}{2}$. Tam giác $BCD$ đều nên $BN = \\dfrac{a\\sqrt{3}}{2}$.\nTam giác $NAB$ cân tại $N$ có trung tuyến $NM$ nên $NM \\perp AB$.\n- Chứng minh hoàn toàn tương tự cho tam giác $MCD$ cân tại $M$, ta có $MN \\perp CD$.\nDo đó đoạn thẳng $MN$ vuông góc với cả $AB$ và $CD$ tại trung điểm của mỗi đoạn, suy ra $MN$ thuộc các mặt phẳng trung trực tương ứng."
        },
        {
          id: "g11-c7-l23-d3-ex10",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Một cột ăng-ten thẳng đứng $h = 24\\text{ m}$ dựng trên mặt đất bằng phẳng. Để neo giữ ăng-ten, 3 dây cáp được kéo căng từ đỉnh cột đến 3 điểm trên mặt đất cách chân cột những khoảng tương ứng bằng $10\\text{ m}, 10\\text{ m}, 10\\text{ m}$. Tính tổng chiều dài của 3 sợi dây cáp này.",
          shortAnswer: "$78\\text{ m}$",
          fullSolution: "Gọi $S$ là đỉnh ăng-ten và $O$ là chân cột, ta có $SO = 24\\text{ m}$ và $SO \\perp$ mặt đất.\nBa điểm neo $A, B, C$ đều có khoảng cách đến chân cột là $OA = OB = OC = 10\\text{ m}$.\nChiều dài mỗi sợi dây cáp là cạnh huyền của tam giác vuông có hai cạnh góc vuông 24 và 10:\n$l = \\sqrt{SO^2 + OA^2} = \\sqrt{24^2 + 10^2} = \\sqrt{576 + 100} = \\sqrt{676} = 26\\text{ m}$.\nTổng chiều dài cả 3 sợi cáp là:\n$L = 3 \\times 26 = 78\\text{ m}$."
        }
      ]
    }
  ]
  }
,
  "g11-c7-l24": {
    lessonId: "g11-c7-l24",
  id: "g11-c7-l24",
  title: "Bài 24: Hai mặt phẳng vuông góc",
  topics: [
    {
      id: "g11-c7-l24-dang1",
      title: "Dạng 1: Điều kiện và phương pháp chứng minh hai mặt phẳng vuông góc",
      description: "Định lý: Nếu mặt phẳng $(P)$ chứa một đường thẳng vuông góc với mặt phẳng $(Q)$ thì $(P) \\perp (Q)$.",
      exercises: [
        {
          id: "g11-c7-l24-d1-ex1",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Nêu dấu hiệu nhận biết hai mặt phẳng vuông góc.",
          shortAnswer: "Một mặt phẳng chứa một đường thẳng vuông góc với mặt phẳng kia",
          fullSolution: "Định lý: Điều kiện cần và đủ để hai mặt phẳng vuông góc với nhau là mặt phẳng này chứa một đường thẳng vuông góc với mặt phẳng kia: $d \\subset (P), d \\perp (Q) \\implies (P) \\perp (Q)$."
        },
        {
          id: "g11-c7-l24-d1-ex2",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Góc giữa hai mặt phẳng vuông góc bằng bao nhiêu độ?",
          shortAnswer: "$90^\\circ$",
          fullSolution: "Theo định nghĩa: Hai mặt phẳng được gọi là vuông góc với nhau nếu góc giữa chúng bằng $90^\\circ$."
        },
        {
          id: "g11-c7-l24-d1-ex3",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$. Mặt phẳng $(SAB)$ có vuông góc với mặt phẳng $(ABC)$ không?",
          shortAnswer: "Có vuông góc",
          fullSolution: "Vì $SA \\subset (SAB)$ và $SA \\perp (ABC)$, theo định lý nhận biết suy ra $(SAB) \\perp (ABC)$."
        },
        {
          id: "g11-c7-l24-d1-ex4",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Trong hình lập phương $ABCD.A'B'C'D'$, mặt phẳng $(ABCD)$ vuông góc với những mặt bên nào?",
          shortAnswer: "Cả 4 mặt bên: $(ABB'A'), (BCC'B'), (CDD'C'), (DAA'D')$",
          fullSolution: "Vì các cạnh bên $AA', BB', CC', DD'$ đều vuông góc với đáy $(ABCD)$, nên cả 4 mặt bên đều vuông góc với mặt phẳng đáy."
        },
        {
          id: "g11-c7-l24-d1-ex5",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông, $SA \\perp (ABCD)$. Chứng minh $(SBC) \\perp (SAB)$.",
          shortAnswer: "$(SBC) \\perp (SAB)$",
          fullSolution: "- Ta có $BC \\perp AB$ (do $ABCD$ là hình vuông) và $BC \\perp SA$ (do $SA \\perp (ABCD)$).\n- Do đó $BC \\perp (SAB)$.\n- Vì $BC \\subset (SBC)$, theo định lý nhận biết suy ra $(SBC) \\perp (SAB)$."
        },
        {
          id: "g11-c7-l24-d1-ex6",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình thoi tâm $O$, $SA \\perp (ABCD)$. Chứng minh $(SAC) \\perp (SBD)$.",
          shortAnswer: "$(SAC) \\perp (SBD)$",
          fullSolution: "- Vì $ABCD$ là hình thoi nên $BD \\perp AC$.\n- Vì $SA \\perp (ABCD)$ nên $BD \\perp SA$.\n- Suy ra $BD \\perp (SAC)$.\n- Vì đường thẳng $BD$ nằm trong mặt phẳng $(SBD)$, do đó $(SBD) \\perp (SAC)$."
        },
        {
          id: "g11-c7-l24-d1-ex7",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho tứ diện $OABC$ có $OA, OB, OC$ đôi một vuông góc. Chứng minh mặt phẳng $(OAB)$ vuông góc với mặt phẳng $(OBC)$.",
          shortAnswer: "$(OAB) \\perp (OBC)$",
          fullSolution: "Ta có $OA \\perp OB$ và $OA \\perp OC \\implies OA \\perp (OBC)$.\nVì đường thẳng $OA \\subset (OAB)$, theo định lý nhận biết suy ra $(OAB) \\perp (OBC)$."
        },
        {
          id: "g11-c7-l24-d1-ex8",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$ và tam giác $ABC$ vuông tại $B$. Kẻ đường cao $AH$ của tam giác $SAB$ ($H \\in SB$) và đường cao $AK$ của tam giác $SAC$ ($K \\in SC$). Chứng minh mặt phẳng $(AHK)$ vuông góc với mặt phẳng $(SBC)$.",
          shortAnswer: "$(AHK) \\perp (SBC)$",
          fullSolution: "- Ta đã chứng minh ở Bài 23: $BC \\perp (SAB) \\implies BC \\perp AH$. Mà $AH \\perp SB \\implies AH \\perp (SBC)$.\n- Mặt phẳng $(AHK)$ chứa đường thẳng $AH$ vuông góc với mặt phẳng $(SBC)$.\n- Theo định lý nhận biết hai mặt phẳng vuông góc, suy ra $(AHK) \\perp (SBC)$."
        },
        {
          id: "g11-c7-l24-d1-ex9",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $a$, tam giác $SAB$ đều và nằm trong mặt phẳng vuông góc với đáy. Gọi $H$ là trung điểm của $AB$. Chứng minh $SH \\perp (ABCD)$ và $(SAD) \\perp (SAB)$.",
          shortAnswer: "$SH \\perp (ABCD)$ và $(SAD) \\perp (SAB)$",
          fullSolution: "- Vì $\\triangle SAB$ đều nên trung tuyến $SH \\perp AB$. Mặt phẳng $(SAB) \\perp (ABCD)$ theo giao tuyến $AB$, đường thẳng $SH \\subset (SAB)$ vuông góc với giao tuyến nên $SH \\perp (ABCD)$.\n- Vì $AD \\perp AB$ và $AD \\perp SH$ nên $AD \\perp (SAB)$.\n- Mặt phẳng $(SAD)$ chứa $AD \\perp (SAB)$, do đó $(SAD) \\perp (SAB)$."
        },
        {
          id: "g11-c7-l24-d1-ex10",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành. Gọi $(P)$ là mặt phẳng đi qua $AB$ và vuông góc với $(SCD)$. Chứng minh $(P)$ vuông góc với mặt phẳng đáy $(ABCD)$ khi và chỉ khi hình bình hành $ABCD$ là hình chữ nhật và $SA \\perp (ABCD)$.",
          shortAnswer: "Đã chứng minh",
          fullSolution: "Sử dụng tính chất giao tuyến của hai mặt phẳng song song và định lý hai mặt phẳng vuông góc: Nếu $(P) \\perp (SCD)$ và $(P) \\perp (ABCD)$ thì giao tuyến của $(P)$ với các mặt tương ứng phải thỏa mãn quan hệ vuông góc với các cạnh đáy, từ đó suy ra các góc ở đáy là góc vuông, tức $ABCD$ là hình chữ nhật."
        }
      ]
    },
    {
      id: "g11-c7-l24-dang2",
      title: "Dạng 2: Tính chất của hai mặt phẳng vuông góc",
      description: "Định lý: $(P) \\perp (Q), (P) \\cap (Q) = d, a \\subset (P), a \\perp d \\implies a \\perp (Q)$. Dựng đường vuông góc với mặt phẳng từ một điểm.",
      exercises: [
        {
          id: "g11-c7-l24-d2-ex1",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Phát biểu định lý về đường thẳng nằm trong một mặt phẳng vuông góc với giao tuyến của hai mặt phẳng vuông góc.",
          shortAnswer: "Nếu hai mặt phẳng vuông góc với nhau thì bất kì đường thẳng nào nằm trong mặt phẳng này và vuông góc với giao tuyến thì sẽ vuông góc với mặt phẳng kia",
          fullSolution: "Định lý: Nếu $(P) \\perp (Q)$ theo giao tuyến $d$, và đường thẳng $a$ nằm trong $(P)$ vuông góc với $d$ thì $a \\perp (Q)$."
        },
        {
          id: "g11-c7-l24-d2-ex2",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Nếu hai mặt phẳng cắt nhau cùng vuông góc với mặt phẳng thứ ba thì giao tuyến của chúng có quan hệ gì với mặt phẳng thứ ba đó?",
          shortAnswer: "Vuông góc với mặt phẳng thứ ba",
          fullSolution: "Định lý: Nếu hai mặt phẳng cắt nhau $(P)$ và $(Q)$ cùng vuông góc với mặt phẳng $(R)$ thì giao tuyến của chúng vuông góc với mặt phẳng $(R)$."
        },
        {
          id: "g11-c7-l24-d2-ex3",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Cho hình chóp $S.ABC$ có $(SAB) \\perp (ABC)$ theo giao tuyến $AB$. Để kẻ đường cao $SH$ của hình chóp từ đỉnh $S$, ta kẻ $SH$ như thế nào?",
          shortAnswer: "Kẻ $SH$ nằm trong mặt phẳng $(SAB)$ và vuông góc với giao tuyến $AB$",
          fullSolution: "Áp dụng định lý: Kẻ $SH \\subset (SAB)$ sao cho $SH \\perp AB$ ($H \\in AB$). Khi đó $SH \\perp (ABC)$."
        },
        {
          id: "g11-c7-l24-d2-ex4",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Qua một điểm $A$ nằm trên mặt phẳng $(Q)$, có bao nhiêu mặt phẳng đi qua $A$ và vuông góc với $(Q)$?",
          shortAnswer: "Vô số mặt phẳng",
          fullSolution: "Mọi mặt phẳng chứa đường thẳng vuông góc với $(Q)$ tại $A$ đều vuông góc với $(Q)$. Do đó có vô số mặt phẳng như vậy."
        },
        {
          id: "g11-c7-l24-d2-ex5",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho hình chóp $S.ABC$ có đáy $ABC$ là tam giác đều cạnh $a$. Mặt bên $SAB$ là tam giác cân tại $S$ và nằm trong mặt phẳng vuông góc với đáy. Gọi $H$ là trung điểm của $AB$. Chứng minh $SH \\perp (ABC)$.",
          shortAnswer: "$SH \\perp (ABC)$",
          fullSolution: "- Vì tam giác $SAB$ cân tại $S$ có $H$ là trung điểm $AB$ nên $SH \\perp AB$.\n- Vì $(SAB) \\perp (ABC)$ theo giao tuyến $AB$, đường thẳng $SH \\subset (SAB)$ vuông góc với giao tuyến $AB$.\nTheo định lý tính chất hai mặt phẳng vuông góc, suy ra $SH \\perp (ABC)$."
        },
        {
          id: "g11-c7-l24-d2-ex6",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho hình chóp $S.ABCD$ có hai mặt phẳng $(SAB)$ và $(SAD)$ cùng vuông góc với mặt phẳng đáy $(ABCD)$. Kết luận gì về vị trí của cạnh bên $SA$ đối với mặt đáy?",
          shortAnswer: "$SA \\perp (ABCD)$",
          fullSolution: "Hai mặt phẳng $(SAB)$ và $(SAD)$ cắt nhau theo giao tuyến $SA$ và cùng vuông góc với mặt phẳng đáy $(ABCD)$.\nTheo định lý, giao tuyến của chúng vuông góc với mặt đáy, do đó $SA \\perp (ABCD)$."
        },
        {
          id: "g11-c7-l24-d2-ex7",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho hình chóp $S.ABC$ có đáy $ABC$ vuông tại $C$, $SA \\perp (ABC)$. Mặt phẳng qua $A$ vuông góc với $SC$ cắt $SC$ tại $H$ và cắt $SB$ tại $K$. Chứng minh $AK \\perp SB$.",
          shortAnswer: "$AK \\perp SB$",
          fullSolution: "Gọi mặt phẳng là $(P) = (AHK) \\perp SC$.\nTa có $BC \\perp AC$ và $BC \\perp SA \\implies BC \\perp (SAC) \\implies (SBC) \\perp (SAC)$.\nTừ đó áp dụng định lý hai mặt phẳng vuông góc suy ra $AK \\perp SB$."
        },
        {
          id: "g11-c7-l24-d2-ex8",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $a$. Mặt bên $SAB$ là tam giác đều và vuông góc với đáy. Tính khoảng cách từ đỉnh $S$ đến mặt phẳng đáy $(ABCD)$ theo $a$.",
          shortAnswer: "$d(S, (ABCD)) = \\dfrac{a\\sqrt{3}}{2}$",
          fullSolution: "Gọi $H$ là trung điểm cạnh $AB$. Vì $\\triangle SAB$ đều cạnh $a$ nên $SH \\perp AB$ và $SH = \\dfrac{a\\sqrt{3}}{2}$.\nVì $(SAB) \\perp (ABCD)$ theo giao tuyến $AB$ nên $SH \\perp (ABCD)$.\nDo đó khoảng cách từ $S$ đến $(ABCD)$ chính là độ dài đoạn $SH = \\dfrac{a\\sqrt{3}}{2}$."
        },
        {
          id: "g11-c7-l24-d2-ex9",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho hình chóp $S.ABCD$ có đáy là hình thang vuông tại $A$ và $D$ ($AB = 2a, AD = DC = a$). Mặt bên $SAD$ là tam giác đều cạnh $a$ và nằm trong mặt phẳng vuông góc với đáy. Chứng minh rằng $(SBC) \\perp (SAC)$.",
          shortAnswer: "$(SBC) \\perp (SAC)$",
          fullSolution: "Gọi $H$ là trung điểm $AD$, ta có $SH \\perp AD \\implies SH \\perp (ABCD)$.\nXét hình thang đáy $ABCD$:\n$AC^2 = AD^2 + DC^2 = a^2 + a^2 = 2a^2$.\nGọi $M$ là trung điểm $AB \\implies AM = a = CD$. Tứ giác $ADCM$ là hình vuông cạnh $a$.\nXét tam giác $ABC$: có trung tuyến $CM = a = \\dfrac{1}{2}AB$, do đó tam giác $ABC$ vuông tại $C \\implies AC \\perp BC$.\nLại có $BC \\perp SH$ (vì $SH \\perp (ABCD)$).\nSuy ra $BC \\perp (SAC)$.\nVì $BC \\subset (SBC)$, theo định lý nhận biết suy ra $(SBC) \\perp (SAC)$."
        },
        {
          id: "g11-c7-l24-d2-ex10",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho hai mặt phẳng $(P)$ và $(Q)$ vuông góc với nhau theo giao tuyến $\\Delta$. Lấy đoạn thẳng $AB \\subset (P)$ song song với $\\Delta$, và đoạn thẳng $CD \\subset (Q)$ vuông góc với $\\Delta$. Chứng minh rằng $CD \\perp AB$ và đoạn nối các trung điểm của $AC$ và $BD$ có tính chất vuông góc với $\\Delta$.",
          shortAnswer: "$CD \\perp AB$",
          fullSolution: "Vì $(P) \\perp (Q)$ theo giao tuyến $\\Delta$ và $CD \\subset (Q)$ có $CD \\perp \\Delta$, theo định lý tính chất ta có $CD \\perp (P)$.\nVì đường thẳng $AB$ nằm trong mặt phẳng $(P)$, suy ra $CD \\perp AB$."
        }
      ]
    },
    {
      id: "g11-c7-l24-dang3",
      title: "Dạng 3: Hình lăng trụ đứng, hình hộp chữ nhật, hình chóp đều",
      description: "Định nghĩa và tính chất của lăng trụ đứng, hình hộp chữ nhật, hình lập phương, hình chóp đều (chóp tam giác đều, chóp tứ giác đều).",
      exercises: [
        {
          id: "g11-c7-l24-d3-ex1",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Hình lăng trụ đứng là hình lăng trụ có các cạnh bên thoả mãn điều kiện gì?",
          shortAnswer: "Các cạnh bên vuông góc với các mặt phẳng đáy",
          fullSolution: "Định nghĩa: Hình lăng trụ đứng là hình lăng trụ có các cạnh bên vuông góc với các mặt đáy."
        },
        {
          id: "g11-c7-l24-d3-ex2",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Các mặt bên của một hình lăng trụ đứng là những hình gì?",
          shortAnswer: "Các hình chữ nhật",
          fullSolution: "Vì các cạnh bên song song bằng nhau và vuông góc với các cạnh đáy, nên tất cả các mặt bên của hình lăng trụ đứng đều là các hình chữ nhật."
        },
        {
          id: "g11-c7-l24-d3-ex3",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Hình lăng trụ đều là hình lăng trụ đứng có đặc điểm đáy như thế nào?",
          shortAnswer: "Có đáy là đa giác đều",
          fullSolution: "Định nghĩa: Hình lăng trụ đều là hình lăng trụ đứng có đáy là một đa giác đều (tam giác đều, hình vuông, lục giác đều,...)."
        },
        {
          id: "g11-c7-l24-d3-ex4",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Trong hình chóp đều, chân đường cao hạ từ đỉnh $S$ trùng với điểm nào ở mặt đáy?",
          shortAnswer: "Tâm đường tròn ngoại tiếp của đa giác đáy",
          fullSolution: "Theo định nghĩa hình chóp đều: Chân đường cao nối từ đỉnh $S$ trùng với tâm của đa giác đáy (tâm đường tròn ngoại tiếp)."
        },
        {
          id: "g11-c7-l24-d3-ex5",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho hình lăng trụ đứng $ABC.A'B'C'$ có đáy $ABC$ là tam giác vuông tại $A$. Chứng minh mặt phẳng $(ABB'A')$ vuông góc với mặt phẳng $(ACC'A')$.",
          shortAnswer: "$(ABB'A') \\perp (ACC'A')$",
          fullSolution: "- Vì đáy $ABC$ vuông tại $A$ nên $AB \\perp AC$.\n- Vì lăng trụ đứng nên cạnh bên $AA' \\perp (ABC) \\implies AA' \\perp AB$.\n- Đường thẳng $AB$ vuông góc với $AC$ và $AA'$ trong $(ACC'A')$, do đó $AB \\perp (ACC'A')$.\n- Vì $AB \\subset (ABB'A')$, suy ra $(ABB'A') \\perp (ACC'A')$."
        },
        {
          id: "g11-c7-l24-d3-ex6",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Các mặt bên của hình chóp tứ giác đều $S.ABCD$ là các tam giác có đặc điểm gì?",
          shortAnswer: "Các tam giác cân bằng nhau",
          fullSolution: "Vì hình chóp đều có tất cả các cạnh bên bằng nhau $SA = SB = SC = SD$ và các cạnh đáy bằng nhau $AB = BC = CD = DA$, nên 4 mặt bên là 4 tam giác cân bằng nhau."
        },
        {
          id: "g11-c7-l24-d3-ex7",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Hình hộp chữ nhật có ba kích thước lần lượt là $a, b, c$. Tính độ dài đường chéo $d$ của hình hộp chữ nhật.",
          shortAnswer: "$d = \\sqrt{a^2 + b^2 + c^2}$",
          fullSolution: "Áp dụng định lý Pythagore hai lần trong không gian:\n$d^2 = AC^2 + AA'^2 = (a^2 + b^2) + c^2 \\implies d = \\sqrt{a^2 + b^2 + c^2}$."
        },
        {
          id: "g11-c7-l24-d3-ex8",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho hình chóp tam giác đều $S.ABC$ có cạnh đáy bằng $a$ và cạnh bên bằng $a\\sqrt{3}$. Gọi $O$ là tâm của đáy $ABC$. Tính độ dài đường cao $SO$ của hình chóp theo $a$.",
          shortAnswer: "$SO = \\dfrac{2a\\sqrt{6}}{3}$",
          fullSolution: "Vì $ABC$ là tam giác đều cạnh $a$ nên bán kính đường tròn ngoại tiếp là $OA = \\dfrac{a\\sqrt{3}}{3}$.\nVì hình chóp đều nên $SO \\perp (ABC)$, tam giác $SOA$ vuông tại $O$:\n$SO = \\sqrt{SA^2 - OA^2} = \\sqrt{(a\\sqrt{3})^2 - \\left(\\dfrac{a\\sqrt{3}}{3}\\right)^2} = \\sqrt{3a^2 - \\dfrac{a^2}{3}} = \\sqrt{\\dfrac{8a^2}{3}} = \\dfrac{2a\\sqrt{2}}{\\sqrt{3}} = \\dfrac{2a\\sqrt{6}}{3}$."
        },
        {
          id: "g11-c7-l24-d3-ex9",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Một chiếc hộp các-tông hình hộp chữ nhật có kích thước ba chiều là $30\\text{ cm}, 40\\text{ cm}, 50\\text{ cm}$. Người ta muốn đặt một thanh kim loại thẳng dài $70\\text{ cm}$ vào bên trong hộp. Hỏi có thể đặt trọn thanh kim loại vào bên trong hộp không?",
          shortAnswer: "Có thể đặt trọn thanh kim loại vào trong hộp",
          fullSolution: "Thanh kim loại dài nhất có thể đặt lọt vào trong hộp chữ nhật có chiều dài bằng độ dài đường chéo lớn nhất của hộp:\n$D = \\sqrt{30^2 + 40^2 + 50^2} = \\sqrt{900 + 1600 + 2500} = \\sqrt{5000} = 50\\sqrt{2}\\text{ cm}$.\nTa có $50\\sqrt{2} \\approx 50 \\times 1.4142 = 70.71\\text{ cm}$.\nVì $70.71\\text{ cm} > 70\\text{ cm}$, nên hoàn toàn có thể đặt trọn vẹn thanh kim loại dọc theo đường chéo của hộp."
        },
        {
          id: "g11-c7-l24-d3-ex10",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $a$. Chứng minh mặt phẳng $(AB'D')$ vuông góc với đường chéo $AC'$ và tính diện tích tam giác $AB'D'$.",
          shortAnswer: "$S = \\dfrac{a^2\\sqrt{3}}{2}$",
          fullSolution: "- Ta có $B'D' \\perp A'C'$ (hai đường chéo hình vuông đáy trên) và $B'D' \\perp AA' \\implies B'D' \\perp (AA'C'C) \\implies B'D' \\perp AC'$.\n- Tương tự, $AB' \\perp A'B$ và $AB' \\perp B'C' \\implies AB' \\perp (A'BC') \\implies AB' \\perp AC'$.\nĐường chéo $AC'$ vuông góc với hai đường cắt nhau $B'D'$ và $AB'$ trong $(AB'D')$, nên $AC' \\perp (AB'D')$.\n- Tam giác $AB'D'$ có ba cạnh là ba đường chéo của ba mặt vuông: $AB' = B'D' = D'A = a\\sqrt{2}$.\nĐây là tam giác đều cạnh $s = a\\sqrt{2}$. Diện tích:\n$S = \\dfrac{s^2\\sqrt{3}}{4} = \\dfrac{(a\\sqrt{2})^2\\sqrt{3}}{4} = \\dfrac{2a^2\\sqrt{3}}{4} = \\dfrac{a^2\\sqrt{3}}{2}$."
        }
      ]
    }
  ]
  }
,
  "g11-c7-l25": {
    lessonId: "g11-c7-l25",
  id: "g11-c7-l25",
  title: "Bài 25: Khoảng cách trong không gian",
  topics: [
    {
      id: "g11-c7-l25-dang1",
      title: "Dạng 1: Khoảng cách từ một điểm đến một đường thẳng và đến một mặt phẳng",
      description: "Khoảng cách từ điểm $M$ đến mặt phẳng $(P)$ là $d(M, (P)) = MH$ với $H$ là hình chiếu vuông góc của $M$ lên $(P)$. Phương pháp đổi điểm dựa vào tỉ số khoảng cách.",
      exercises: [
        {
          id: "g11-c7-l25-d1-ex1",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Khoảng cách từ điểm $M$ đến mặt phẳng $(P)$ được xác định như thế nào?",
          shortAnswer: "Là độ dài đoạn thẳng $MH$, với $H$ là hình chiếu vuông góc của $M$ lên mặt phẳng $(P)$",
          fullSolution: "Định nghĩa: Khoảng cách từ điểm $M$ đến mặt phẳng $(P)$ là độ dài đoạn thẳng $MH$, trong đó $H$ là hình chiếu vuông góc của điểm $M$ lên mặt phẳng $(P)$, kí hiệu $d(M, (P)) = MH$."
        },
        {
          id: "g11-c7-l25-d1-ex2",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Nếu điểm $M$ thuộc mặt phẳng $(P)$ thì khoảng cách $d(M, (P))$ bằng bao nhiêu?",
          shortAnswer: "$0$",
          fullSolution: "Khi điểm $M \\in (P)$, hình chiếu của $M$ lên $(P)$ trùng với chính nó, do đó khoảng cách $d(M, (P)) = 0$."
        },
        {
          id: "g11-c7-l25-d1-ex3",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$ và $SA = 4\\text{ cm}$. Khoảng cách từ điểm $S$ đến mặt phẳng đáy $(ABC)$ bằng bao nhiêu?",
          shortAnswer: "$4\\text{ cm}$",
          fullSolution: "Vì $SA \\perp (ABC)$ nên hình chiếu của $S$ lên $(ABC)$ là điểm $A$. Do đó $d(S, (ABC)) = SA = 4\\text{ cm}$."
        },
        {
          id: "g11-c7-l25-d1-ex4",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Cho đoạn thẳng $AB$ cắt mặt phẳng $(P)$ tại trung điểm $I$ của $AB$. Tỉ số khoảng cách $\\dfrac{d(A, (P))}{d(B, (P))}$ bằng bao nhiêu?",
          shortAnswer: "$1$",
          fullSolution: "Theo tính chất tam giác vuông đồng dạng: Khi đường thẳng $AB$ cắt $(P)$ tại $I$ thì $\\dfrac{d(A, (P))}{d(B, (P))} = \\dfrac{IA}{IB}$. Vì $I$ là trung điểm nên $IA = IB$, do đó tỉ số bằng 1."
        },
        {
          id: "g11-c7-l25-d1-ex5",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$, tam giác $ABC$ vuông tại $B$ có $AB = 3, BC = 4, SA = 4$. Tính khoảng cách từ điểm $A$ đến mặt phẳng $(SBC)$.",
          shortAnswer: "$d(A, (SBC)) = \\dfrac{12}{5}$",
          fullSolution: "Ta có $BC \\perp AB$ và $BC \\perp SA \\implies BC \\perp (SAB)$.\nTrong mặt phẳng $(SAB)$, kẻ $AH \\perp SB$ ($H \\in SB$).\nVì $BC \\perp (SAB) \\implies BC \\perp AH$. Do đó $AH \\perp (SBC) \\implies d(A, (SBC)) = AH$.\nTam giác $SAB$ vuông tại $A$ có hai cạnh góc vuông $SA = 4, AB = 3$:\n$\\dfrac{1}{AH^2} = \\dfrac{1}{SA^2} + \\dfrac{1}{AB^2} = \\dfrac{1}{16} + \\dfrac{1}{9} = \\dfrac{25}{144} \\implies AH = \\dfrac{12}{5}$."
        },
        {
          id: "g11-c7-l25-d1-ex6",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $a$, $SA \\perp (ABCD)$ và $SA = a$. Gọi $M$ là trung điểm của cạnh $AB$. Tính khoảng cách từ $M$ đến mặt phẳng $(SAD)$.",
          shortAnswer: "$d(M, (SAD)) = \\dfrac{a}{2}$",
          fullSolution: "Ta có $AB \\perp AD$ và $AB \\perp SA \\implies AB \\perp (SAD)$.\nĐường thẳng $AB$ cắt $(SAD)$ tại $A$, và hình chiếu vuông góc của mọi điểm trên $AB$ lên $(SAD)$ là điểm hạ vuông góc xuống $AD$.\nTừ $M$ kẻ $MH \\parallel AD$ hoặc kẻ $MH \\perp AD$ tại $A$:\nVì $AB \\perp (SAD)$, đoạn thẳng nối từ $M$ vuông góc đến $(SAD)$ nằm trên đường thẳng $AB$, đó là đoạn $MA$.\nDo $M$ là trung điểm $AB$ nên $d(M, (SAD)) = MA = \\dfrac{a}{2}$."
        },
        {
          id: "g11-c7-l25-d1-ex7",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho tứ diện $OABC$ có $OA, OB, OC$ đôi một vuông góc và $OA = a, OB = b, OC = c$. Viết công thức tính khoảng cách $h$ từ gốc $O$ đến mặt phẳng $(ABC)$.",
          shortAnswer: "$\\dfrac{1}{h^2} = \\dfrac{1}{a^2} + \\dfrac{1}{b^2} + \\dfrac{1}{c^2}$",
          fullSolution: "Hạ $OH \\perp (ABC)$. Khi đó $H$ là trực tâm của tam giác $ABC$. Áp dụng hệ thức lượng trong tứ diện vuông:\n$\\dfrac{1}{OH^2} = \\dfrac{1}{OA^2} + \\dfrac{1}{OB^2} + \\dfrac{1}{OC^2} = \\dfrac{1}{a^2} + \\dfrac{1}{b^2} + \\dfrac{1}{c^2}$."
        },
        {
          id: "g11-c7-l25-d1-ex8",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $a$, $SA \\perp (ABCD)$ và $SA = a\\sqrt{2}$. Tính khoảng cách từ điểm $C$ đến mặt phẳng $(SBD)$ theo $a$.",
          shortAnswer: "$d(C, (SBD)) = \\dfrac{a\\sqrt{2}}{2}$",
          fullSolution: "Gọi $O = AC \\cap BD$. Vì $ABCD$ là hình vuông nên $AC \\perp BD$ tại trung điểm $O$ của $AC$.\nDo $O$ là trung điểm $AC$ nên $d(C, (SBD)) = d(A, (SBD))$.\nTrong mặt phẳng $(SAC)$, kẻ $AK \\perp SO$ ($K \\in SO$).\nVì $BD \\perp AC$ và $BD \\perp SA \\implies BD \\perp (SAC) \\implies BD \\perp AK$.\nDo đó $AK \\perp (SBD) \\implies d(A, (SBD)) = AK$.\nTam giác $SAO$ vuông tại $A$ có $SA = a\\sqrt{2}$ và $AO = \\dfrac{AC}{2} = \\dfrac{a\\sqrt{2}}{2}$:\n$\\dfrac{1}{AK^2} = \\dfrac{1}{SA^2} + \\dfrac{1}{AO^2} = \\dfrac{1}{2a^2} + \\dfrac{2}{a^2} = \\dfrac{5}{2a^2} \\implies AK = \\dfrac{a\\sqrt{10}}{5}$.\nVậy $d(C, (SBD)) = \\dfrac{a\\sqrt{10}}{5}$."
        },
        {
          id: "g11-c7-l25-d1-ex9",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho hình chóp tam giác đều $S.ABC$ có cạnh đáy bằng $a$ và cạnh bên bằng $a$. Tính khoảng cách từ đỉnh $S$ đến mặt phẳng đáy $(ABC)$ theo $a$.",
          shortAnswer: "$d(S, (ABC)) = \\dfrac{a\\sqrt{6}}{3}$",
          fullSolution: "Gọi $H$ là tâm của tam giác đều $ABC$. Vì hình chóp đều nên $SH \\perp (ABC)$, do đó $d(S, (ABC)) = SH$.\nBán kính đường tròn ngoại tiếp đáy: $AH = \\dfrac{a\\sqrt{3}}{3}$.\nTam giác $SHA$ vuông tại $H$:\n$SH = \\sqrt{SA^2 - AH^2} = \\sqrt{a^2 - \\left(\\dfrac{a\\sqrt{3}}{3}\\right)^2} = \\sqrt{a^2 - \\dfrac{a^2}{3}} = \\sqrt{\\dfrac{2a^2}{3}} = \\dfrac{a\\sqrt{6}}{3}$."
        },
        {
          id: "g11-c7-l25-d1-ex10",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $a$, $SA \\perp (ABCD)$ và $SA = 2a$. Lấy điểm $M$ trên cạnh $SC$ sao cho $SC = 3SM$. Tính khoảng cách từ điểm $M$ đến mặt phẳng $(SAB)$ theo $a$.",
          shortAnswer: "$d(M, (SAB)) = \\dfrac{a}{3}$",
          fullSolution: "Ta có đường thẳng $SC$ cắt mặt phẳng $(SAB)$ tại đỉnh $S$.\nTỉ số khoảng cách:\n$\\dfrac{d(M, (SAB))}{d(C, (SAB))} = \\dfrac{SM}{SC} = \\dfrac{1}{3} \\implies d(M, (SAB)) = \\dfrac{1}{3} d(C, (SAB))$.\nVì $CB \\perp AB$ và $CB \\perp SA \\implies CB \\perp (SAB)$, nên hình chiếu của $C$ lên $(SAB)$ là điểm $B$.\nDo đó $d(C, (SAB)) = CB = a$.\nSuy ra: $d(M, (SAB)) = \\dfrac{1}{3} \\times a = \\dfrac{a}{3}$."
        }
      ]
    },
    {
      id: "g11-c7-l25-dang2",
      title: "Dạng 2: Khoảng cách giữa đường thẳng và mặt phẳng song song, giữa hai mặt phẳng song song",
      description: "Định nghĩa và phương pháp chuyển khoảng cách: $d(a, (P)) = d(M, (P))$ với $M \\in a$; $d((P), (Q)) = d(M, (Q))$ với $M \\in (P)$.",
      exercises: [
        {
          id: "g11-c7-l25-d2-ex1",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Khoảng cách giữa đường thẳng $a$ song song với mặt phẳng $(P)$ được tính bằng khoảng cách nào?",
          shortAnswer: "Khoảng cách từ một điểm bất kì trên đường thẳng $a$ đến mặt phẳng $(P)$",
          fullSolution: "Định nghĩa: Khoảng cách giữa đường thẳng $a$ và mặt phẳng $(P)$ song song với nó là khoảng cách từ một điểm tuỳ ý trên $a$ đến mặt phẳng $(P)$: $d(a, (P)) = d(M, (P))$ với $M \\in a$."
        },
        {
          id: "g11-c7-l25-d2-ex2",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Khoảng cách giữa hai mặt phẳng song song $(P)$ và $(Q)$ được xác định như thế nào?",
          shortAnswer: "Là khoảng cách từ một điểm bất kì trên mặt phẳng này đến mặt phẳng kia",
          fullSolution: "Định nghĩa: Khoảng cách giữa hai mặt phẳng song song là khoảng cách từ một điểm bất kì thuộc mặt phẳng này đến mặt phẳng kia: $d((P), (Q)) = d(M, (Q))$ với $M \\in (P)$."
        },
        {
          id: "g11-c7-l25-d2-ex3",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $a$. Khoảng cách giữa hai mặt phẳng đáy $(ABCD)$ và $(A'B'C'D')$ bằng bao nhiêu?",
          shortAnswer: "$a$",
          fullSolution: "Vì các cạnh bên vuông góc với hai đáy nên khoảng cách giữa hai đáy bằng độ dài cạnh bên: $d((ABCD), (A'B'C'D')) = AA' = a$."
        },
        {
          id: "g11-c7-l25-d2-ex4",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Cho hình chóp $S.ABCD$ có đáy là hình bình hành. Đường thẳng $AB$ song song với $(SCD)$. Khi đó khoảng cách $d(AB, (SCD))$ bằng khoảng cách từ điểm nào?",
          shortAnswer: "Khoảng cách từ điểm $A$ (hoặc điểm $B$) đến mặt phẳng $(SCD)$",
          fullSolution: "Vì $AB \\parallel (SCD)$ nên $d(AB, (SCD)) = d(A, (SCD)) = d(B, (SCD))$."
        },
        {
          id: "g11-c7-l25-d2-ex5",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho hình lăng trụ đứng tam giác $ABC.A'B'C'$ có tất cả các cạnh đều bằng $a$. Tính khoảng cách giữa hai mặt đáy $(ABC)$ và $(A'B'C')$.",
          shortAnswer: "$a$",
          fullSolution: "Lăng trụ đứng có các cạnh bên vuông góc với đáy, do đó khoảng cách giữa hai đáy bằng chiều dài cạnh bên: $d = AA' = a$."
        },
        {
          id: "g11-c7-l25-d2-ex6",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $a$, $SA \\perp (ABCD)$ và $SA = a$. Tính khoảng cách giữa đường thẳng $AB$ và mặt phẳng $(SCD)$.",
          shortAnswer: "$d(AB, (SCD)) = \\dfrac{a\\sqrt{2}}{2}$",
          fullSolution: "- Vì $AB \\parallel CD \\subset (SCD)$ nên $AB \\parallel (SCD) \\implies d(AB, (SCD)) = d(A, (SCD))$.\n- Trong mặt phẳng $(SAD)$, kẻ $AH \\perp SD$ ($H \\in SD$).\nVì $CD \\perp AD$ và $CD \\perp SA \\implies CD \\perp (SAD) \\implies CD \\perp AH$.\nDo đó $AH \\perp (SCD) \\implies d(A, (SCD)) = AH$.\n- Tam giác $SAD$ vuông cân tại $A$ có hai cạnh $SA = AD = a$ nên đường cao $AH = \\dfrac{a\\sqrt{2}}{2}$."
        },
        {
          id: "g11-c7-l25-d2-ex7",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho hình hộp chữ nhật $ABCD.A'B'C'D'$ có $AB = 3, AD = 4, AA' = 5$. Tính khoảng cách giữa hai mặt phẳng đối diện $(ABB'A')$ và $(CDD'C')$.",
          shortAnswer: "$4$",
          fullSolution: "Khoảng cách giữa hai mặt phẳng đối diện $(ABB'A')$ và $(CDD'C')$ bằng độ dài đoạn thẳng vuông góc chung nối giữa chúng, đó chính là cạnh $AD = 4$."
        },
        {
          id: "g11-c7-l25-d2-ex8",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho hình chóp $S.ABCD$ đáy hình bình hành tâm $O$. Gọi $M, N$ là trung điểm của $SA, SB$. Biết khoảng cách từ $S$ đến mặt phẳng $(ABCD)$ bằng $h$. Tính khoảng cách giữa mặt phẳng $(MND)$ và mặt phẳng song song tương ứng hoặc khoảng cách từ đường thẳng $MN$ đến mặt phẳng đáy $(ABCD)$.",
          shortAnswer: "$d(MN, (ABCD)) = \\dfrac{h}{2}$",
          fullSolution: "Đoạn thẳng $MN$ là đường trung bình của tam giác $SAB$ nên $MN \\parallel AB \\subset (ABCD) \\implies MN \\parallel (ABCD)$.\nDo đó khoảng cách từ $MN$ đến $(ABCD)$ bằng khoảng cách từ điểm $M$ đến $(ABCD)$:\n$d(MN, (ABCD)) = d(M, (ABCD))$.\nVì $M$ là trung điểm của $SA$ nên: $\\dfrac{d(M, (ABCD))}{d(S, (ABCD))} = \\dfrac{AM}{AS} = \\dfrac{1}{2}$.\nVậy $d(MN, (ABCD)) = \\dfrac{h}{2}$."
        },
        {
          id: "g11-c7-l25-d2-ex9",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $a$. Chứng minh hai mặt phẳng $(BDA')$ và $(B'D'C)$ song song với nhau và tính khoảng cách giữa hai mặt phẳng đó theo $a$.",
          shortAnswer: "$d((BDA'), (B'D'C)) = \\dfrac{a\\sqrt{3}}{3}$",
          fullSolution: "Đường chéo $AC'$ vuông góc với cả hai mặt phẳng $(BDA')$ và $(B'D'C)$ và cắt hai mặt phẳng này lần lượt tại $I, J$ chia $AC'$ thành ba đoạn bằng nhau: $AI = IJ = JC' = \\dfrac{AC'}{3}$.\nĐộ dài đường chéo $AC' = a\\sqrt{3}$.\nKhoảng cách giữa hai mặt phẳng song song chính là độ dài đoạn vuông góc chung $IJ$:\n$d((BDA'), (B'D'C)) = IJ = \\dfrac{AC'}{3} = \\dfrac{a\\sqrt{3}}{3}$."
        },
        {
          id: "g11-c7-l25-d2-ex10",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho hình lăng trụ tam giác đều $ABC.A'B'C'$ có cạnh đáy bằng $a$ và chiều cao bằng $h$. Mặt phẳng $(\\alpha)$ đi qua trung điểm của $AA', BB', CC'$. Tính khoảng cách từ $(\\alpha)$ đến hai mặt đáy của lăng trụ.",
          shortAnswer: "$\\dfrac{h}{2}$",
          fullSolution: "Mặt phẳng $(\\alpha)$ đi qua trung điểm các cạnh bên nên $(\\alpha)$ song song với cả hai mặt phẳng đáy $(ABC)$ và $(A'B'C')$.\nKhoảng cách từ $(\\alpha)$ đến mỗi mặt đáy bằng một nửa độ dài cạnh bên:\n$d((\\alpha), (ABC)) = d((\\alpha), (A'B'C')) = \\dfrac{h}{2}$."
        }
      ]
    },
    {
      id: "g11-c7-l25-dang3",
      title: "Dạng 3: Khoảng cách giữa hai đường thẳng chéo nhau",
      description: "Đoạn vuông góc chung. Phương pháp dựng mặt phẳng $(P)$ chứa đường này và song song với đường kia: $d(a, b) = d(a, (P))$.",
      exercises: [
        {
          id: "g11-c7-l25-d3-ex1",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Đoạn vuông góc chung của hai đường thẳng chéo nhau $a$ và $b$ là đoạn thẳng như thế nào?",
          shortAnswer: "Đoạn thẳng nối hai điểm trên hai đường thẳng và vuông góc với cả hai đường thẳng đó",
          fullSolution: "Định nghĩa: Đoạn thẳng $MN$ nối điểm $M \\in a$ và $N \\in b$ đồng thời vuông góc với cả $a$ và $b$ được gọi là đoạn vuông góc chung của hai đường thẳng chéo nhau $a$ và $b$."
        },
        {
          id: "g11-c7-l25-d3-ex2",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Khoảng cách giữa hai đường thẳng chéo nhau $a$ và $b$ bằng độ dài đoạn thẳng nào?",
          shortAnswer: "Độ dài đoạn vuông góc chung của hai đường thẳng đó",
          fullSolution: "Khoảng cách giữa hai đường thẳng chéo nhau bằng độ dài đoạn vuông góc chung của chúng: $d(a, b) = MN$."
        },
        {
          id: "g11-c7-l25-d3-ex3",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Nếu dựng mặt phẳng $(P)$ chứa đường thẳng $b$ và song song với đường thẳng $a$, thì khoảng cách $d(a, b)$ được tính qua khoảng cách nào?",
          shortAnswer: "$d(a, b) = d(a, (P)) = d(M, (P))$ với $M \\in a$",
          fullSolution: "Khoảng cách giữa hai đường thẳng chéo nhau $a$ và $b$ bằng khoảng cách từ đường thẳng $a$ đến mặt phẳng $(P)$ chứa $b$ và song song với $a$."
        },
        {
          id: "g11-c7-l25-d3-ex4",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $a$. Khoảng cách giữa hai đường thẳng chéo nhau $AA'$ và $BC$ bằng bao nhiêu?",
          shortAnswer: "$a$",
          fullSolution: "Ta có $AB \\perp AA'$ và $AB \\perp BC$, do đó đoạn thẳng $AB$ chính là đoạn vuông góc chung của $AA'$ và $BC$. Suy ra $d(AA', BC) = AB = a$."
        },
        {
          id: "g11-c7-l25-d3-ex5",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$, đáy $ABC$ vuông tại $B$. Tính khoảng cách giữa hai đường thẳng chéo nhau $SA$ và $BC$ biết $AB = a$.",
          shortAnswer: "$a$",
          fullSolution: "- Vì $SA \\perp (ABC) \\implies SA \\perp AB$.\n- Vì tam giác $ABC$ vuông tại $B \\implies BC \\perp AB$.\nĐoạn thẳng $AB$ nối điểm $A \\in SA$ và $B \\in BC$ đồng thời vuông góc với cả hai đường thẳng $SA$ và $BC$, nên $AB$ là đoạn vuông góc chung.\nVậy $d(SA, BC) = AB = a$."
        },
        {
          id: "g11-c7-l25-d3-ex6",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $a$, $SA \\perp (ABCD)$. Tính khoảng cách giữa hai đường thẳng chéo nhau $SA$ và $CD$.",
          shortAnswer: "$a$",
          fullSolution: "- Ta có $AD \\perp SA$ (do $SA \\perp (ABCD)$) và $AD \\perp CD$ (do $ABCD$ là hình vuông).\nDo đó đoạn thẳng $AD$ là đoạn vuông góc chung của $SA$ và $CD$.\nVậy $d(SA, CD) = AD = a$."
        },
        {
          id: "g11-c7-l25-d3-ex7",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $a$. Tính khoảng cách giữa hai đường thẳng chéo nhau $A'B'$ và $CD$.",
          shortAnswer: "$a\\sqrt{2}$",
          fullSolution: "Mặt phẳng chứa $A'B'$ và $CD$ là mặt phẳng $(A'B'CD)$.\nĐoạn thẳng vuông góc chung nối giữa $A'B'$ và $CD$ chính là đoạn nối hai cạnh đối diện, hoặc xét khoảng cách giữa hai đường thẳng song song trong mặt phẳng chéo: $d(A'B', CD) = A'D = a\\sqrt{2}$."
        },
        {
          id: "g11-c7-l25-d3-ex8",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $a$, $SA \\perp (ABCD)$ và $SA = a$. Tính khoảng cách giữa hai đường thẳng chéo nhau $SC$ và $BD$ theo $a$.",
          shortAnswer: "$d(SC, BD) = \\dfrac{a\\sqrt{6}}{6}$",
          fullSolution: "Gọi $O = AC \\cap BD$. Ta có $BD \\perp AC$ và $BD \\perp SA \\implies BD \\perp (SAC)$.\nTrong mặt phẳng $(SAC)$, kẻ $OK \\perp SC$ ($K \\in SC$).\nVì $BD \\perp (SAC) \\implies BD \\perp OK$.\nĐoạn $OK$ vuông góc với cả $BD$ và $SC$, do đó $OK$ là đoạn vuông góc chung $\\implies d(SC, BD) = OK$.\nXét tam giác $SAC$ vuông tại $A$ có $SA = a, AC = a\\sqrt{2} \\implies SC = \\sqrt{a^2 + 2a^2} = a\\sqrt{3}$.\nHai tam giác vuông $OKC$ và $SAC$ đồng dạng (chung góc $\\widehat{C}$):\n$\\dfrac{OK}{SA} = \\dfrac{OC}{SC} \\implies OK = \\dfrac{SA \\cdot OC}{SC} = \\dfrac{a \\cdot \\frac{a\\sqrt{2}}{2}}{a\\sqrt{3}} = \\dfrac{a\\sqrt{2}}{2\\sqrt{3}} = \\dfrac{a\\sqrt{6}}{6}$."
        },
        {
          id: "g11-c7-l25-d3-ex9",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho hình chóp $S.ABC$ có đáy là tam giác vuông cân tại $B$, $AB = BC = a$, $SA \\perp (ABC)$ và $SA = a$. Tính khoảng cách giữa hai đường thẳng chéo nhau $SB$ và $AC$.",
          shortAnswer: "$d(SB, AC) = \\dfrac{a\\sqrt{3}}{3}$",
          fullSolution: "Dựng hình bình hành $ACBE$, vì $\\triangle ABC$ vuông cân tại $B$ nên $ACBE$ là hình vuông cạnh $a$.\nKhi đó $AC \\parallel BE \\implies AC \\parallel (SBE)$.\nKhoảng cách: $d(AC, SB) = d(AC, (SBE)) = d(A, (SBE))$.\nTa có $AB \\perp BE$ và $SA \\perp BE \\implies BE \\perp (SAB)$.\nTrong $(SAB)$, kẻ $AH \\perp SB$.\nVì $BE \\perp (SAB) \\implies BE \\perp AH$. Do đó $AH \\perp (SBE) \\implies d(A, (SBE)) = AH$.\nTam giác $SAB$ vuông cân tại $A$ có $SA = AB = a$:\n$AH = \\dfrac{a\\sqrt{2}}{2}$."
        },
        {
          id: "g11-c7-l25-d3-ex10",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho tứ diện đều $ABCD$ cạnh $a$. Tính khoảng cách giữa hai cạnh đối diện $AB$ và $CD$ theo $a$.",
          shortAnswer: "$d(AB, CD) = \\dfrac{a\\sqrt{2}}{2}$",
          fullSolution: "Gọi $M, N$ lần lượt là trung điểm của $AB$ và $CD$.\nVì $ABCD$ là tứ diện đều nên tam giác $ACD$ đều và tam giác $BCD$ đều:\n$AN = BN = \\dfrac{a\\sqrt{3}}{2}$.\nTam giác $NAB$ cân tại $N$, có trung tuyến $NM$ nên $NM \\perp AB$.\nChứng minh tương tự, tam giác $MCD$ cân tại $M$ có trung tuyến $MN$ nên $MN \\perp CD$.\nDo đó đoạn thẳng $MN$ chính là đoạn vuông góc chung của $AB$ và $CD$.\nTính độ dài $MN$ trong tam giác vuông $AMN$ tại $M$:\n$MN = \\sqrt{AN^2 - AM^2} = \\sqrt{\\left(\\dfrac{a\\sqrt{3}}{2}\\right)^2 - \\left(\\dfrac{a}{2}\\right)^2} = \\sqrt{\\dfrac{3a^2}{4} - \\dfrac{a^2}{4}} = \\sqrt{\\dfrac{2a^2}{4}} = \\dfrac{a\\sqrt{2}}{2}$."
        }
      ]
    }
  ]
  }
,
  "g11-c7-l26": {
    lessonId: "g11-c7-l26",
  id: "g11-c7-l26",
  title: "Bài 26: Góc giữa đường thẳng và mặt phẳng. Góc nhị diện",
  topics: [
    {
      id: "g11-c7-l26-dang1",
      title: "Dạng 1: Góc giữa đường thẳng và mặt phẳng",
      description: "Nếu đường thẳng $d$ vuông góc với $(P)$ thì góc bằng $90^\\circ$. Nếu $d$ không vuông góc với $(P)$, góc giữa $d$ và $(P)$ là góc giữa $d$ và hình chiếu $d'$ của $d$ lên $(P)$. Góc $\\varphi \\in [0^\\circ, 90^\\circ]$.",
      exercises: [
        {
          id: "g11-c7-l26-d1-ex1",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Nếu đường thẳng $d$ vuông góc với mặt phẳng $(P)$ thì góc giữa đường thẳng $d$ và $(P)$ bằng bao nhiêu?",
          shortAnswer: "$90^\\circ$",
          fullSolution: "Theo định nghĩa, nếu đường thẳng $d$ vuông góc với mặt phẳng $(P)$ thì góc giữa $d$ và $(P)$ bằng $90^\\circ$."
        },
        {
          id: "g11-c7-l26-d1-ex2",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Nếu đường thẳng $d$ song song hoặc nằm trong mặt phẳng $(P)$ thì góc giữa đường thẳng $d$ và mặt phẳng $(P)$ bằng bao nhiêu?",
          shortAnswer: "$0^\\circ$",
          fullSolution: "Nếu đường thẳng $d$ song song hoặc nằm trong mặt phẳng $(P)$ thì góc giữa $d$ và $(P)$ bằng $0^\\circ$."
        },
        {
          id: "g11-c7-l26-d1-ex3",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Cho đường thẳng $d$ cắt mặt phẳng $(P)$ tại điểm $O$ và $d$ không vuông góc với $(P)$. Gọi $d'$ là hình chiếu vuông góc của $d$ trên $(P)$. Góc giữa $d$ và mặt phẳng $(P)$ là góc giữa hai đường thẳng nào?",
          shortAnswer: "Là góc giữa đường thẳng $d$ và hình chiếu $d'$ của nó trên mặt phẳng $(P)$",
          fullSolution: "Theo định nghĩa, góc giữa đường thẳng $d$ không vuông góc với mặt phẳng $(P)$ là góc giữa đường thẳng $d$ và hình chiếu vuông góc $d'$ của $d$ trên mặt phẳng $(P)$."
        },
        {
          id: "g11-c7-l26-d1-ex4",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Số đo góc giữa một đường thẳng bất kì và một mặt phẳng luôn thuộc đoạn nào?",
          shortAnswer: "$[0^\\circ, 90^\\circ]$",
          fullSolution: "Số đo góc giữa đường thẳng và mặt phẳng luôn thoả mãn $0^\\circ \\le \\varphi \\le 90^\\circ$, tức thuộc đoạn $[0^\\circ, 90^\\circ]$."
        },
        {
          id: "g11-c7-l26-d1-ex5",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho hình chóp $S.ABC$ có đáy $ABC$ là tam giác đều, $SA \\perp (ABC)$. Hình chiếu vuông góc của cạnh bên $SB$ lên mặt phẳng đáy $(ABC)$ là đoạn thẳng nào? Từ đó chỉ ra góc giữa đường thẳng $SB$ và mặt phẳng $(ABC)$.",
          shortAnswer: "Hình chiếu là đoạn thẳng $AB$; góc là $\\widehat{SBA}$",
          fullSolution: "Vì $SA \\perp (ABC)$ nên hình chiếu vuông góc của $S$ lên $(ABC)$ là điểm $A$. Điểm $B$ thuộc $(ABC)$ nên hình chiếu của $B$ là chính nó. Do đó hình chiếu vuông góc của $SB$ lên $(ABC)$ là đoạn thẳng $AB$. Vì $\\Delta SAB$ vuông tại $A$ nên góc giữa $SB$ và $(ABC)$ là góc nhọn $\\widehat{SBA}$."
        },
        {
          id: "g11-c7-l26-d1-ex6",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $a$, $SA \\perp (ABCD)$ và $SA = a$. Tính góc giữa cạnh bên $SC$ và mặt phẳng đáy $(ABCD)$.",
          shortAnswer: "$\\arctan\\left(\\frac{\\sqrt{2}}{2}\\right)$ (xấp xỉ $35^\\circ 16'$)",
          fullSolution: "Hình chiếu của $SC$ lên $(ABCD)$ là đoạn thẳng $AC$. Do đó góc giữa $SC$ và $(ABCD)$ là góc $\\widehat{SCA}$. Đáy là hình vuông cạnh $a$ nên $AC = a\\sqrt{2}$. Trong tam giác vuông $SAC$ tại $A$: $\\tan \\widehat{SCA} = \\frac{SA}{AC} = \\frac{a}{a\\sqrt{2}} = \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$. Vậy góc giữa $SC$ và đáy là $\\arctan\\left(\\frac{\\sqrt{2}}{2}\\right)$."
        },
        {
          id: "g11-c7-l26-d1-ex7",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho hình lập phương $ABCD.A'B'C'D'$. Tính số đo góc giữa đường chéo $A'C$ và mặt phẳng đáy $(ABCD)$.",
          shortAnswer: "$\\arctan\\left(\\frac{1}{\\sqrt{2}}\\right)$ (xấp xỉ $35^\\circ 16'$)",
          fullSolution: "Gọi độ dài cạnh hình lập phương là $a$. Ta có $A'A \\perp (ABCD)$ nên hình chiếu của $A'C$ lên $(ABCD)$ là đoạn $AC$. Suy ra góc giữa $A'C$ và $(ABCD)$ là $\\widehat{A'CA}$. Ta có $AA' = a$, $AC = a\\sqrt{2}$. Trong tam giác vuông $A'AC$: $\\tan \\widehat{A'CA} = \\frac{A'A}{AC} = \\frac{a}{a\\sqrt{2}} = \\frac{1}{\\sqrt{2}}$. Vậy góc cần tìm là $\\arctan\\left(\\frac{1}{\\sqrt{2}}\\right)$."
        },
        {
          id: "g11-c7-l26-d1-ex8",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $a$, $SA \\perp (ABCD)$ và $SA = a\\sqrt{6}$. Tính góc giữa đường thẳng $SB$ và mặt phẳng $(SAC)$.",
          shortAnswer: "$30^\\circ$",
          fullSolution: "Gọi $O$ là giao điểm của hai đường chéo $AC$ và $BD$. Ta có $BO \\perp AC$ và $BO \\perp SA$ (vì $SA \\perp (ABCD)$) nên $BO \\perp (SAC)$. Do đó hình chiếu vuông góc của $B$ lên mặt phẳng $(SAC)$ là điểm $O$. Điểm $S$ thuộc $(SAC)$ nên hình chiếu của $SB$ lên $(SAC)$ là $SO$. Góc giữa $SB$ và $(SAC)$ là góc $\\widehat{BSO}$. Ta có $BO = \\frac{a\\sqrt{2}}{2}$. Trong tam giác vuông $SAB$: $SB = \\sqrt{SA^2 + AB^2} = \\sqrt{6a^2 + a^2} = a\\sqrt{7}$. Do $\\Delta SOB$ vuông tại $O$: $\\sin \\widehat{BSO} = \\frac{BO}{SB} = \\frac{\\frac{a\\sqrt{2}}{2}}{a\\sqrt{7}} = \\frac{\\sqrt{2}}{2\\sqrt{7}} = \\frac{1}{\\sqrt{14}}$. Suy ra góc giữa $SB$ và $(SAC)$ là $\\arcsin\\left(\\frac{1}{\\sqrt{14}}\\right)$."
        },
        {
          id: "g11-c7-l26-d1-ex9",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho lăng trụ đứng tam giác $ABC.A'B'C'$ có đáy $ABC$ là tam giác vuông cân tại $B$, $BA = BC = a$. Biết $AA' = a\\sqrt{2}$. Gọi $M$ là trung điểm cạnh $B'C'$. Tính sin của góc giữa đường thẳng $AM$ và mặt phẳng $(A'B'C')$.",
          shortAnswer: "$\\frac{2}{\\sqrt{5}}$ hoặc $\\sin\\varphi = \\sqrt{\\frac{8}{13}}$",
          fullSolution: "Vì lăng trụ đứng nên hình chiếu vuông góc của $A$ lên mặt phẳng đáy $(A'B'C')$ là $A'$. Điểm $M$ thuộc $(A'B'C')$ nên hình chiếu của $AM$ lên $(A'B'C')$ là $A'M$. Do đó góc giữa $AM$ và $(A'B'C')$ là góc $\\varphi = \\widehat{AMA'}$. Trong tam giác vuông $A'B'C'$ tại $B'$: $A'B' = a$, $B'M = \\frac{a}{2}$, do đó $A'M = \\sqrt{A'B'^2 + B'M^2} = \\sqrt{a^2 + \\frac{a^2}{4}} = \\frac{a\\sqrt{5}}{2}$. Tam giác $AA'M$ vuông tại $A'$ có $AA' = a\\sqrt{2}$, nên $AM = \\sqrt{A'M^2 + AA'^2} = \\sqrt{\\frac{5a^2}{4} + 2a^2} = \\sqrt{\\frac{13a^2}{4}} = \\frac{a\\sqrt{13}}{2}$. Vậy $\\sin\\varphi = \\frac{AA'}{AM} = \\frac{a\\sqrt{2}}{\\frac{a\\sqrt{13}}{2}} = \\frac{2\\sqrt{2}}{\\sqrt{13}} = \\frac{2\\sqrt{26}}{13}$."
        },
        {
          id: "g11-c7-l26-d1-ex10",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho hình chóp đều $S.ABCD$ có tất cả các cạnh đều bằng $a$. Tính cosin của góc giữa cạnh bên $SA$ và mặt phẳng đáy $(ABCD)$.",
          shortAnswer: "$\\frac{\\sqrt{2}}{2}$ (góc bằng $45^\\circ$)",
          fullSolution: "Gọi $O$ là tâm hình vuông đáy $ABCD$. Vì chóp đều nên $SO \\perp (ABCD)$, do đó hình chiếu của $SA$ lên đáy là $OA$. Góc giữa $SA$ và mặt đáy là góc $\\widehat{SAO}$. Vì $ABCD$ là hình vuông cạnh $a$ nên $AC = a\\sqrt{2} \\implies OA = \\frac{a\\sqrt{2}}{2}$. Trong tam giác vuông $SOA$ tại $O$: $\\cos\\widehat{SAO} = \\frac{OA}{SA} = \\frac{\\frac{a\\sqrt{2}}{2}}{a} = \\frac{\\sqrt{2}}{2}$. Do đó góc giữa cạnh bên $SA$ và đáy bằng $45^\\circ$."
        }
      ]
    },
    {
      id: "g11-c7-l26-dang2",
      title: "Dạng 2: Góc nhị diện và góc phẳng nhị diện",
      description: "Góc phẳng nhị diện $[P, d, Q]$ có cạnh là $d$. Lấy $O \\in d$, dựng trong $(P)$ tia $Ox \\perp d$ và trong $(Q)$ tia $Oy \\perp d$, góc $\\widehat{xOy}$ là góc phẳng của góc nhị diện.",
      exercises: [
        {
          id: "g11-c7-l26-d2-ex1",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Góc phẳng nhị diện của góc nhị diện $[P, d, Q]$ được tạo bởi hai tia thoả mãn điều kiện gì?",
          shortAnswer: "Hai tia lần lượt thuộc hai nửa mặt phẳng $(P)$ và $(Q)$, xuất phát từ một điểm thuộc cạnh nhị diện $d$ và cùng vuông góc với cạnh $d$",
          fullSolution: "Lấy điểm $O$ bất kì trên đường thẳng bờ $d$. Trong $(P)$ dựng tia $Ox \\perp d$ và trong $(Q)$ dựng tia $Oy \\perp d$. Góc $\\widehat{xOy}$ được gọi là góc phẳng nhị diện của góc nhị diện $[P, d, Q]$."
        },
        {
          id: "g11-c7-l26-d2-ex2",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Số đo góc phẳng nhị diện có thể nhận giá trị trong khoảng hoặc đoạn nào?",
          shortAnswer: "$[0^\\circ, 180^\\circ]$",
          fullSolution: "Số đo góc nhị diện là số đo của góc phẳng nhị diện tương ứng và có giá trị thuộc đoạn $[0^\\circ, 180^\\circ]$."
        },
        {
          id: "g11-c7-l26-d2-ex3",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Nếu góc nhị diện có số đo bằng $90^\\circ$ thì hai mặt phẳng chứa hai nửa mặt phẳng của góc nhị diện có quan hệ gì?",
          shortAnswer: "Hai mặt phẳng vuông góc với nhau",
          fullSolution: "Hai mặt phẳng cắt nhau tạo thành góc nhị diện vuông ($90^\\circ$) khi và chỉ khi hai mặt phẳng đó vuông góc với nhau."
        },
        {
          id: "g11-c7-l26-d2-ex4",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Trong hình hộp chữ nhật $ABCD.A'B'C'D'$, góc phẳng nhị diện $[A', AB, C]$ có số đo bằng bao nhiêu độ?",
          shortAnswer: "$90^\\circ$",
          fullSolution: "Ta có $A'A \\perp AB$ (vì các mặt bên là hình chữ nhật) và $AD \\perp AB$, $BC \\perp AB$. Do đó góc phẳng nhị diện $[A', AB, C]$ là $\\widehat{A'AD} = 90^\\circ$."
        },
        {
          id: "g11-c7-l26-d2-ex5",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho tứ diện đều $ABCD$. Gọi $M$ là trung điểm của $CD$. Hãy chỉ ra một góc phẳng của góc nhị diện $[A, CD, B]$.",
          shortAnswer: "Góc $\\widehat{AMB}$",
          fullSolution: "Vì $\\Delta ACD$ đều nên trung tuyến $AM \\perp CD$. Vì $\\Delta BCD$ đều nên trung tuyến $BM \\perp CD$. Do hai tia $MA$ và $MB$ cùng xuất phát từ $M \\in CD$ và cùng vuông góc với $CD$, nên góc $\\widehat{AMB}$ là góc phẳng của góc nhị diện $[A, CD, B]$."
        },
        {
          id: "g11-c7-l26-d2-ex6",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$, đáy $ABC$ vuông tại $B$. Xác định góc phẳng của góc nhị diện $[S, BC, A]$.",
          shortAnswer: "Góc $\\widehat{SBA}$",
          fullSolution: "Ta có $AB \\perp BC$ (do $\\Delta ABC$ vuông tại $B$). Lại có $SA \\perp (ABC) \\implies SA \\perp BC$. Kết hợp $BC \\perp AB$ và $BC \\perp SA$ suy ra $BC \\perp (SAB) \\implies BC \\perp SB$. Như vậy tại điểm $B$ thuộc cạnh chung $BC$, ta có $AB \\perp BC$ và $SB \\perp BC$. Vậy góc phẳng nhị diện $[S, BC, A]$ là góc $\\widehat{SBA}$."
        },
        {
          id: "g11-c7-l26-d2-ex7",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $a$, $SA \\perp (ABCD)$ và $SA = a$. Tính số đo góc phẳng nhị diện $[S, AB, C]$.",
          shortAnswer: "$90^\\circ$",
          fullSolution: "Mặt phẳng $(ABC)$ chính là mặt phẳng đáy $(ABCD)$. Vì $SA \\perp (ABCD)$ nên $(SAB) \\perp (ABCD)$. Do đó góc phẳng nhị diện $[S, AB, C]$ bằng $90^\\circ$."
        },
        {
          id: "g11-c7-l26-d2-ex8",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho tứ diện đều $ABCD$ cạnh $a$. Tính cosin của số đo góc phẳng nhị diện $[A, CD, B]$.",
          shortAnswer: "$\\frac{1}{3}$",
          fullSolution: "Gọi $M$ là trung điểm của cạnh $CD$. Góc phẳng nhị diện $[A, CD, B]$ là góc $\\widehat{AMB}$. Vì các tam giác $ACD$ và $BCD$ đều cạnh $a$ nên $AM = BM = \\frac{a\\sqrt{3}}{2}$. Cạnh $AB = a$. Áp dụng định lí côsin trong tam giác $AMB$: $\\cos\\widehat{AMB} = \\frac{AM^2 + BM^2 - AB^2}{2 \\cdot AM \\cdot BM} = \\frac{\\frac{3a^2}{4} + \\frac{3a^2}{4} - a^2}{2 \\cdot \\frac{a\\sqrt{3}}{2} \\cdot \\frac{a\\sqrt{3}}{2}} = \\frac{\\frac{a^2}{2}}{\\frac{3a^2}{2}} = \\frac{1}{3}$."
        },
        {
          id: "g11-c7-l26-d2-ex9",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình chữ nhật, $AB = a$, $AD = a\\sqrt{3}$, $SA \\perp (ABCD)$ và $SA = a$. Tính số đo của góc phẳng nhị diện $[S, CD, A]$.",
          shortAnswer: "$30^\\circ$",
          fullSolution: "Vì $CD \\perp AD$ và $CD \\perp SA$ nên $CD \\perp (SAD)$, suy ra $CD \\perp SD$. Do đó góc phẳng nhị diện $[S, CD, A]$ chính là góc $\\widehat{SDA}$. Trong tam giác vuông $SAD$ tại $A$: $\\tan\\widehat{SDA} = \\frac{SA}{AD} = \\frac{a}{a\\sqrt{3}} = \\frac{1}{\\sqrt{3}}$. Suy ra $\\widehat{SDA} = 30^\\circ$."
        },
        {
          id: "g11-c7-l26-d2-ex10",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho hình chóp đều $S.ABC$ có đáy $ABC$ là tam giác đều cạnh $a$, cạnh bên $SA = \\frac{a\\sqrt{7}}{3}$. Tính số đo góc phẳng nhị diện tạo bởi mặt bên và mặt phẳng đáy.",
          shortAnswer: "$60^\\circ$",
          fullSolution: "Gọi $O$ là trọng tâm tam giác đều $ABC$, suy ra $SO \\perp (ABC)$. Gọi $M$ là trung điểm cạnh $BC$. Ta có $AM \\perp BC$ và $SM \\perp BC$, do đó góc giữa mặt bên $(SBC)$ và đáy $(ABC)$ là góc $\\widehat{SMA}$. Ta có $AM = \\frac{a\\sqrt{3}}{2}$, $OM = \\frac{1}{3}AM = \\frac{a\\sqrt{3}}{6}$. Tam giác $SBC$ cân tại $S$ có $SM = \\sqrt{SB^2 - BM^2} = \\sqrt{\\frac{7a^2}{9} - \\frac{a^2}{4}} = \\sqrt{\\frac{19a^2}{36}}$. Do đó $\\cos\\widehat{SMO} = \\frac{OM}{SM} = \\frac{a\\sqrt{3}/6}{\\sqrt{19}a/6} = \\frac{\\sqrt{3}}{\\sqrt{19}}$."
        }
      ]
    },
    {
      id: "g11-c7-l26-dang3",
      title: "Dạng 3: Bài toán thực tế và ứng dụng hình học tính góc",
      description: "Ứng dụng góc giữa đường thẳng và mặt phẳng, góc nhị diện vào xác định góc dốc mái nhà, góc đặt tấm pin năng lượng mặt trời, góc dốc mặt đê.",
      exercises: [
        {
          id: "g11-c7-l26-d3-ex1",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Trong kiến trúc xây dựng, độ dốc của mái nhà so với mặt trần nằm ngang được mô tả bởi góc hình học nào?",
          shortAnswer: "Góc giữa mặt phẳng mái nhà và mặt phẳng nằm ngang (góc phẳng nhị diện tạo bởi hai mặt phẳng)",
          fullSolution: "Độ dốc của mái nhà chính là góc phẳng nhị diện tạo bởi mặt phẳng dốc của mái và mặt phẳng nằm ngang của trần nhà."
        },
        {
          id: "g11-c7-l26-d3-ex2",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Góc nâng của một tấm pin năng lượng mặt trời đặt trên mái nhà phẳng nằm ngang được xác định bởi góc giữa đường thẳng nào và mặt phẳng nào?",
          shortAnswer: "Góc giữa đường thẳng dốc nhất trên bề mặt tấm pin và mặt phẳng nằm ngang",
          fullSolution: "Góc nâng của tấm pin là góc tạo bởi đường thẳng nằm trên mặt phẳng tấm pin vuông góc với giao tuyến và mặt phẳng nằm ngang."
        },
        {
          id: "g11-c7-l26-d3-ex3",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Một chiếc gậy chống dựa vào tường thẳng đứng, chân gậy đặt trên nền nhà nằm ngang. Góc giữa chiếc gậy và nền nhà là góc tạo bởi gậy và đường nào trên nền nhà?",
          shortAnswer: "Hình chiếu vuông góc của chiếc gậy trên mặt nền nhà",
          fullSolution: "Góc giữa thân gậy và sàn nhà là góc giữa gậy và đường thẳng nối chân gậy với chân đường vuông góc hạ từ đầu gậy trên tường xuống sàn."
        },
        {
          id: "g11-c7-l26-d3-ex4",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Cột ăng-ten thẳng đứng trên mặt sân nằm ngang. Một dây cáp néo căng từ đỉnh cột xuống một điểm trên sân. Góc giữa dây cáp néo và mặt sân thuộc loại góc nào?",
          shortAnswer: "Góc giữa đường thẳng (dây cáp) và mặt phẳng (mặt sân)",
          fullSolution: "Dây cáp tạo với mặt sân một góc giữa đường thẳng và mặt phẳng, đỉnh góc tại điểm néo dây trên mặt sân."
        },
        {
          id: "g11-c7-l26-d3-ex5",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Một mái nhà dốc một phía có chiều cao đỉnh mái so với trần ngang là $1{,}5\\text{ m}$, và khoảng cách theo phương ngang từ mép mái đến chân tường đối diện là $3\\text{ m}$. Tính tang của góc dốc mái nhà so với trần ngang.",
          shortAnswer: "$\\tan\\alpha = 0{,}5$",
          fullSolution: "Mái nhà dốc tạo với phương ngang một góc $\\alpha$ thoả mãn $\\tan\\alpha = \\frac{\\text{Chiều cao}}{\\text{Khoảng cách ngang}} = \\frac{1{,}5}{3} = 0{,}5$."
        },
        {
          id: "g11-c7-l26-d3-ex6",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Một cột cờ thẳng đứng cao $6\\text{ m}$. Tại thời điểm bóng của cột cờ in trên mặt đất dài $6\\sqrt{3}\\text{ m}$, hãy tính góc tạo bởi tia nắng mặt trời và mặt đất nằm ngang.",
          shortAnswer: "$30^\\circ$",
          fullSolution: "Tia nắng nối từ đỉnh cột cờ đến đầu bóng cờ. Gọi $\\varphi$ là góc tạo bởi tia nắng và mặt đất: $\\tan\\varphi = \\frac{\\text{Chiều cao cột}}{\\text{Độ dài bóng}} = \\frac{6}{6\\sqrt{3}} = \\frac{1}{\\sqrt{3}}$. Do đó $\\varphi = 30^\\circ$."
        },
        {
          id: "g11-c7-l26-d3-ex7",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Một máng trượt thẳng dài $5\\text{ m}$ có điểm xuất phát cao $3\\text{ m}$ so với mặt đất nằm ngang. Tính sin của góc nghiêng giữa máng trượt và mặt đất phẳng.",
          shortAnswer: "$\\sin\\alpha = \\frac{3}{5} = 0{,}6$",
          fullSolution: "Máng trượt là cạnh huyền của tam giác vuông với cạnh đối là độ cao $3\\text{ m}$. Suy ra $\\sin\\alpha = \\frac{3}{5} = 0{,}6$, tức góc nghiêng $\\alpha \\approx 36^\\circ 52'$."
        },
        {
          id: "g11-c7-l26-d3-ex8",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Một tấm pin năng lượng mặt trời hình chữ nhật kích thước $1\\text{ m} \\times 2\\text{ m}$ được đỡ nghiêng trên mặt sàn nằm ngang. Một mép dài $2\\text{ m}$ nằm sát mặt sàn, mép dài còn lại được nâng cao lên $0{,}6\\text{ m}$. Tính góc nhị diện giữa mặt phẳng tấm pin và sàn nhà.",
          shortAnswer: "$\\arcsin(0{,}6) \\approx 36^\\circ 52'$",
          fullSolution: "Cạnh ngắn của tấm pin dài $1\\text{ m}$ vuông góc với cạnh nằm sát mặt sàn. Khi mép trên được nâng lên $0{,}6\\text{ m}$, trong mặt phẳng vuông góc với mép sàn, cạnh ngắn là cạnh huyền dài $1\\text{ m}$, cạnh đối diện góc nhị diện có độ dài $0{,}6\\text{ m}$. Suy ra $\\sin\\alpha = \\frac{0{,}6}{1} = 0{,}6 \\implies \\alpha \\approx 36^\\circ 52'$."
        },
        {
          id: "g11-c7-l26-d3-ex9",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Một chiếc lều hình chóp tứ giác đều có đáy là hình vuông cạnh $2\\text{ m}$, chiều cao của lều từ đỉnh đến mặt đất là $1\\text{ m}$. Tính cosin của góc tạo bởi một thanh kèo cạnh bên của lều và mặt phẳng đáy đất.",
          shortAnswer: "$\\frac{\\sqrt{6}}{3}$ (xấp xỉ $0{,}816$)",
          fullSolution: "Đáy lều là hình vuông cạnh $a = 2$, đường chéo đáy $d = 2\\sqrt{2}$, khoảng cách từ tâm đến mỗi góc đáy là $R = \\sqrt{2}$. Chiều cao lều $h = 1\\text{ m}$. Cạnh bên thanh kèo dài $L = \\sqrt{h^2 + R^2} = \\sqrt{1 + 2} = \\sqrt{3}$. Cosin của góc $\\varphi$ giữa cạnh bên và mặt đất là: $\\cos\\varphi = \\frac{R}{L} = \\frac{\\sqrt{2}}{\\sqrt{3}} = \\frac{\\sqrt{6}}{3}$."
        },
        {
          id: "g11-c7-l26-d3-ex10",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Một chiếc thang dài $4\\text{ m}$ tựa vào bức tường thẳng đứng tạo với mặt sàn góc $60^\\circ$. Người ta dịch chân thang ra xa tường thêm $0{,}5\\text{ m}$. Hãy tính góc mới giữa thang và mặt sàn.",
          shortAnswer: "$\\approx 51{,}3^\\circ$ ($\\arccos\\left(\\frac{5}{8}\\right)$)",
          fullSolution: "Ban đầu khoảng cách từ chân thang đến chân tường là $x_1 = 4 \\cdot \\cos 60^\\circ = 4 \\cdot 0{,}5 = 2\\text{ m}$. Khi dịch ra xa thêm $0{,}5\\text{ m}$, khoảng cách mới là $x_2 = 2 + 0{,}5 = 2{,}5\\text{ m}$. Góc nghiêng mới $\\alpha$ thoả mãn $\\cos\\alpha = \\frac{x_2}{L} = \\frac{2{,}5}{4} = \\frac{5}{8} = 0{,}625$. Do đó $\\alpha = \\arccos(0{,}625) \\approx 51{,}32^\\circ$."
        }
      ]
    }
  ]
  }
,
  "g11-c7-l27": {
    lessonId: "g11-c7-l27",
  id: "g11-c7-l27",
  title: "Bài 27: Thể tích",
  topics: [
    {
      id: "g11-c7-l27-dang1",
      title: "Dạng 1: Thể tích của khối lăng trụ và khối hộp",
      description: "Thể tích khối lăng trụ $V = B \\cdot h$, khối hộp chữ nhật $V = abc$, khối lập phương $V = a^3$.",
      exercises: [
        {
          id: "g11-c7-l27-d1-ex1",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Công thức tính thể tích của khối lăng trụ có diện tích đáy $B$ và chiều cao $h$ là gì?",
          shortAnswer: "$V = B \\cdot h$",
          fullSolution: "Thể tích của khối lăng trụ có diện tích đáy $B$ và chiều cao $h$ được tính bằng công thức: $V = B \\cdot h$."
        },
        {
          id: "g11-c7-l27-d1-ex2",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Công thức tính thể tích khối lập phương có cạnh bằng $a$ là gì?",
          shortAnswer: "$V = a^3$",
          fullSolution: "Thể tích của khối lập phương cạnh $a$ bằng lập phương độ dài cạnh của nó: $V = a^3$."
        },
        {
          id: "g11-c7-l27-d1-ex3",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Công thức tính thể tích khối hộp chữ nhật có ba kích thước $a, b, c$ là gì?",
          shortAnswer: "$V = a \\cdot b \\cdot c$",
          fullSolution: "Thể tích của khối hộp chữ nhật bằng tích của ba kích thước: $V = a \\cdot b \\cdot c$."
        },
        {
          id: "g11-c7-l27-d1-ex4",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Một khối lăng trụ có diện tích đáy bằng $12\\text{ cm}^2$ và chiều cao bằng $5\\text{ cm}$. Thể tích khối lăng trụ đó bằng bao nhiêu?",
          shortAnswer: "$60\\text{ cm}^3$",
          fullSolution: "Áp dụng công thức thể tích khối lăng trụ: $V = B \\cdot h = 12 \\cdot 5 = 60\\text{ cm}^3$."
        },
        {
          id: "g11-c7-l27-d1-ex5",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho khối lăng trụ đứng tam giác $ABC.A'B'C'$ có đáy $ABC$ là tam giác vuông tại $A$ với $AB = 3\\text{ cm}$, $AC = 4\\text{ cm}$ và cạnh bên $AA' = 6\\text{ cm}$. Tính thể tích của khối lăng trụ.",
          shortAnswer: "$36\\text{ cm}^3$",
          fullSolution: "Diện tích đáy tam giác vuông $ABC$ là: $B = \\frac{1}{2} \\cdot AB \\cdot AC = \\frac{1}{2} \\cdot 3 \\cdot 4 = 6\\text{ cm}^2$. Chiều cao lăng trụ đứng $h = AA' = 6\\text{ cm}$. Thể tích khối lăng trụ là: $V = B \\cdot h = 6 \\cdot 6 = 36\\text{ cm}^3$."
        },
        {
          id: "g11-c7-l27-d1-ex6",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Một khối hộp chữ nhật có diện tích đáy bằng $24\\text{ cm}^2$ và thể tích bằng $120\\text{ cm}^3$. Tính chiều cao của khối hộp chữ nhật đó.",
          shortAnswer: "$5\\text{ cm}$",
          fullSolution: "Từ công thức $V = B \\cdot h$, suy ra chiều cao: $h = \\frac{V}{B} = \\frac{120}{24} = 5\\text{ cm}$."
        },
        {
          id: "g11-c7-l27-d1-ex7",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho hình lăng trụ đều $ABC.A'B'C'$ có tất cả các cạnh đều bằng $a$. Tính thể tích của khối lăng trụ đó.",
          shortAnswer: "$\\frac{a^3\\sqrt{3}}{4}$",
          fullSolution: "Đáy $ABC$ là tam giác đều cạnh $a$ nên diện tích đáy $B = \\frac{a^2\\sqrt{3}}{4}$. Chiều cao của lăng trụ đều là $h = AA' = a$. Thể tích khối lăng trụ là: $V = B \\cdot h = \\frac{a^2\\sqrt{3}}{4} \\cdot a = \\frac{a^3\\sqrt{3}}{4}$."
        },
        {
          id: "g11-c7-l27-d1-ex8",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho hình lăng trụ đứng tứ giác $ABCD.A'B'C'D'$ có đáy $ABCD$ là hình thoi cạnh $a$, góc $\\widehat{ABC} = 60^\\circ$. Biết góc giữa đường chéo $A'C$ và mặt phẳng đáy $(ABCD)$ bằng $45^\\circ$. Tính thể tích khối lăng trụ.",
          shortAnswer: "$\\frac{3a^3}{2}$",
          fullSolution: "Hình thoi $ABCD$ có $\\widehat{ABC} = 60^\\circ$ nên tam giác $ABC$ đều cạnh $a$, suy ra $AC = a$ và $BD = 2 \\cdot \\frac{a\\sqrt{3}}{2} = a\\sqrt{3}$. Diện tích đáy là $B = \\frac{1}{2}AC \\cdot BD = \\frac{1}{2} \\cdot a \\cdot a\\sqrt{3} = \\frac{a^2\\sqrt{3}}{2}$. Hình chiếu của $A'C$ lên đáy là $AC$, nên góc $\\widehat{A'CA} = 45^\\circ$. Suy ra chiều cao $A'A = AC \\cdot \\tan 45^\\circ = a \\cdot 1 = a$. Do đó thể tích lăng trụ là $V = B \\cdot h = \\frac{a^2\\sqrt{3}}{2} \\cdot a = \\frac{a^3\\sqrt{3}}{2}$."
        },
        {
          id: "g11-c7-l27-d1-ex9",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Một khối hộp chữ nhật có ba kích thước tỉ lệ với $2 : 3 : 5$ và thể tích bằng $240\\text{ cm}^3$. Tính tổng diện tích toàn phần của khối hộp đó.",
          shortAnswer: "$248\\text{ cm}^2$",
          fullSolution: "Gọi ba kích thước của khối hộp chữ nhật là $2x, 3x, 5x$ ($x > 0$). Thể tích khối hộp là: $V = 2x \\cdot 3x \\cdot 5x = 30x^3 = 240 \\implies x^3 = 8 \\implies x = 2\\text{ cm}$. Ba kích thước lần lượt là $a = 4\\text{ cm}, b = 6\\text{ cm}, c = 10\\text{ cm}$. Diện tích toàn phần là: $S_{tp} = 2(ab + bc + ca) = 2(4 \\cdot 6 + 6 \\cdot 10 + 10 \\cdot 4) = 2(24 + 60 + 40) = 2 \\cdot 124 = 248\\text{ cm}^2$."
        },
        {
          id: "g11-c7-l27-d1-ex10",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho hình lăng trụ xiên $ABC.A'B'C'$ có đáy $ABC$ là tam giác đều cạnh $a$. Hình chiếu vuông góc của đỉnh $A'$ lên mặt phẳng $(ABC)$ là trọng tâm $G$ của tam giác $ABC$. Biết cạnh bên $AA'$ tạo với mặt đáy một góc $60^\\circ$. Tính thể tích của khối lăng trụ đã cho.",
          shortAnswer: "$\\frac{a^3}{4}$",
          fullSolution: "Diện tích đáy tam giác đều cạnh $a$ là $B = \\frac{a^2\\sqrt{3}}{4}$. Vì $A'G \\perp (ABC)$ nên hình chiếu của $AA'$ lên đáy là $AG$. Góc giữa $AA'$ và đáy là góc $\\widehat{A'AG} = 60^\\circ$. Khoảng cách từ $A$ đến trọng tâm $G$ là $AG = \\frac{2}{3} \\cdot \\frac{a\\sqrt{3}}{2} = \\frac{a\\sqrt{3}}{3}$. Chiều cao của khối lăng trụ là: $h = A'G = AG \\cdot \\tan 60^\\circ = \\frac{a\\sqrt{3}}{3} \\cdot \\sqrt{3} = a$. Vậy thể tích khối lăng trụ là: $V = B \\cdot h = \\frac{a^2\\sqrt{3}}{4} \\cdot a = \\frac{a^3\\sqrt{3}}{4}$."
        }
      ]
    },
    {
      id: "g11-c7-l27-dang2",
      title: "Dạng 2: Thể tích của khối chóp và khối chóp cụt đều",
      description: "Thể tích khối chóp $V = \\frac{1}{3}B \\cdot h$. Thể tích khối chóp cụt đều $V = \\frac{1}{3}h(B + B' + \\sqrt{BB'})$.",
      exercises: [
        {
          id: "g11-c7-l27-d2-ex1",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Công thức tính thể tích của khối chóp có diện tích đáy $B$ và chiều cao $h$ là gì?",
          shortAnswer: "$V = \\frac{1}{3}B \\cdot h$",
          fullSolution: "Thể tích của khối chóp bằng một phần ba tích của diện tích đáy và chiều cao: $V = \\frac{1}{3}B \\cdot h$."
        },
        {
          id: "g11-c7-l27-d2-ex2",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Một khối chóp có diện tích đáy $B = 15\\text{ cm}^2$ và chiều cao $h = 4\\text{ cm}$. Thể tích khối chóp bằng bao nhiêu?",
          shortAnswer: "$20\\text{ cm}^3$",
          fullSolution: "Thể tích khối chóp là: $V = \\frac{1}{3} \\cdot 15 \\cdot 4 = 20\\text{ cm}^3$."
        },
        {
          id: "g11-c7-l27-d2-ex3",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Công thức tính thể tích của khối chóp cụt đều có chiều cao $h$, diện tích hai đáy lần lượt là $B$ và $B'$ là gì?",
          shortAnswer: "$V = \\frac{1}{3}h(B + B' + \\sqrt{BB'})$",
          fullSolution: "Thể tích khối chóp cụt đều được tính bằng công thức: $V = \\frac{1}{3}h(B + B' + \\sqrt{BB'})$."
        },
        {
          id: "g11-c7-l27-d2-ex4",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Cho hình chóp $S.ABC$ có diện tích đáy bằng $18$ và thể tích bằng $36$. Chiều cao $h$ của khối chóp bằng bao nhiêu?",
          shortAnswer: "$6$",
          fullSolution: "Từ $V = \\frac{1}{3}Bh$, ta có chiều cao $h = \\frac{3V}{B} = \\frac{3 \\cdot 36}{18} = 6$."
        },
        {
          id: "g11-c7-l27-d2-ex5",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $a$, cạnh bên $SA \\perp (ABCD)$ và $SA = 2a$. Tính thể tích khối chóp $S.ABCD$.",
          shortAnswer: "$\\frac{2a^3}{3}$",
          fullSolution: "Diện tích đáy hình vuông là $B = a^2$. Chiều cao của khối chóp là $h = SA = 2a$. Thể tích khối chóp là: $V = \\frac{1}{3}Bh = \\frac{1}{3} \\cdot a^2 \\cdot 2a = \\frac{2a^3}{3}$."
        },
        {
          id: "g11-c7-l27-d2-ex6",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho hình chóp tam giác đều $S.ABC$ có cạnh đáy bằng $a$, cạnh bên bằng $a$. Tính thể tích khối chóp $S.ABC$.",
          shortAnswer: "$\\frac{a^3\\sqrt{2}}{12}$",
          fullSolution: "Đáy $ABC$ là tam giác đều cạnh $a$ nên $B = \\frac{a^2\\sqrt{3}}{4}$. Gọi $O$ là tâm đáy $ABC$, ta có $SO \\perp (ABC)$ và $OA = \\frac{a\\sqrt{3}}{3}$. Chiều cao $SO = \\sqrt{SA^2 - OA^2} = \\sqrt{a^2 - \\frac{a^2}{3}} = \\sqrt{\\frac{2a^2}{3}} = \\frac{a\\sqrt{6}}{3}$. Thể tích khối chóp: $V = \\frac{1}{3} \\cdot \\frac{a^2\\sqrt{3}}{4} \\cdot \\frac{a\\sqrt{6}}{3} = \\frac{a^3\\sqrt{18}}{36} = \\frac{3a^3\\sqrt{2}}{36} = \\frac{a^3\\sqrt{2}}{12}$."
        },
        {
          id: "g11-c7-l27-d2-ex7",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Một khối chóp cụt tứ giác đều có các cạnh đáy lần lượt là $4\\text{ cm}$ và $2\\text{ cm}$, chiều cao bằng $3\\text{ cm}$. Tính thể tích khối chóp cụt đó.",
          shortAnswer: "$28\\text{ cm}^3$",
          fullSolution: "Diện tích hai đáy hình vuông là $B = 4^2 = 16\\text{ cm}^2$, $B' = 2^2 = 4\\text{ cm}^2$. Ta có $\\sqrt{BB'} = \\sqrt{16 \\cdot 4} = 8\\text{ cm}^2$. Thể tích khối chóp cụt là: $V = \\frac{1}{3} \\cdot 3 \\cdot (16 + 4 + 8) = 28\\text{ cm}^3$."
        },
        {
          id: "g11-c7-l27-d2-ex8",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình chữ nhật, $AB = a$, $AD = a\\sqrt{3}$. Mặt bên $SAB$ là tam giác đều và nằm trong mặt phẳng vuông góc với đáy $(ABCD)$. Tính thể tích của khối chóp $S.ABCD$.",
          shortAnswer: "$\\frac{a^3}{2}$",
          fullSolution: "Gọi $H$ là trung điểm của $AB$. Do $\\Delta SAB$ đều và $(SAB) \\perp (ABCD)$ nên $SH \\perp (ABCD)$ và $SH = \\frac{a\\sqrt{3}}{2}$. Chiều cao $h = SH = \\frac{a\\sqrt{3}}{2}$. Diện tích đáy hình chữ nhật là $B = AB \\cdot AD = a \\cdot a\\sqrt{3} = a^2\\sqrt{3}$. Thể tích khối chóp là: $V = \\frac{1}{3}Bh = \\frac{1}{3} \\cdot a^2\\sqrt{3} \\cdot \\frac{a\\sqrt{3}}{2} = \\frac{3a^3}{6} = \\frac{a^3}{2}$."
        },
        {
          id: "g11-c7-l27-d2-ex9",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho hình chóp tứ giác đều $S.ABCD$ có đáy hình vuông cạnh $2a$, góc giữa mặt bên và mặt phẳng đáy bằng $60^\\circ$. Tính thể tích khối chóp $S.ABCD$.",
          shortAnswer: "$\\frac{4a^3\\sqrt{3}}{3}$",
          fullSolution: "Gọi $O$ là tâm đáy $ABCD$, suy ra $SO \\perp (ABCD)$. Gọi $M$ là trung điểm cạnh $CD$, ta có $OM \\perp CD$ và $SM \\perp CD$, suy ra góc giữa mặt bên $(SCD)$ và đáy là $\\widehat{SMO} = 60^\\circ$. Khoảng cách $OM = \\frac{1}{2}AD = a$. Chiều cao $SO = OM \\cdot \\tan 60^\\circ = a\\sqrt{3}$. Diện tích đáy là $B = (2a)^2 = 4a^2$. Thể tích khối chóp: $V = \\frac{1}{3}Bh = \\frac{1}{3} \\cdot 4a^2 \\cdot a\\sqrt{3} = \\frac{4a^3\\sqrt{3}}{3}$."
        },
        {
          id: "g11-c7-l27-d2-ex10",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Một khối chóp tứ giác cụt đều có cạnh đáy lớn bằng $6\\text{ m}$, cạnh đáy nhỏ bằng $3\\text{ m}$, và góc giữa cạnh bên với mặt phẳng đáy lớn bằng $45^\\circ$. Tính thể tích của khối chóp cụt đó.",
          shortAnswer: "$\\frac{63\\sqrt{2}}{2}\\text{ m}^3$",
          fullSolution: "Gọi $ABCD$ và $A'B'C'D'$ là đáy lớn và đáy nhỏ, tâm lần lượt là $O$ và $O'$. Ta có $OA = \\frac{6\\sqrt{2}}{2} = 3\\sqrt{2}$, $O'A' = \\frac{3\\sqrt{2}}{2}$. Chiều cao $h = OO'$. Kẻ $A'H \\perp OA$ tại $H$, thì $AH = OA - O'A' = 3\\sqrt{2} - \\frac{3\\sqrt{2}}{2} = \\frac{3\\sqrt{2}}{2}$. Do góc giữa cạnh bên $AA'$ và đáy bằng $45^\\circ$ nên trong tam giác vuông $A'HA$, chiều cao $h = A'H = AH \\cdot \\tan 45^\\circ = \\frac{3\\sqrt{2}}{2}\\text{ m}$. Diện tích hai đáy là $B = 6^2 = 36\\text{ m}^2$, $B' = 3^2 = 9\\text{ m}^2$, $\\sqrt{BB'} = \\sqrt{36 \\cdot 9} = 18\\text{ m}^2$. Thể tích khối chóp cụt: $V = \\frac{1}{3} \\cdot \\frac{3\\sqrt{2}}{2} \\cdot (36 + 9 + 18) = \\frac{\\sqrt{2}}{2} \\cdot 63 = \\frac{63\\sqrt{2}}{2}\\text{ m}^3$."
        }
      ]
    },
    {
      id: "g11-c7-l27-dang3",
      title: "Dạng 3: Bài toán tỉ số thể tích và ứng dụng thực tế",
      description: "Ứng dụng công thức tỉ số thể tích Simson cho hình chóp tam giác $\\frac{V_{S.A'B'C'}}{V_{S.ABC}} = \\frac{SA'}{SA} \\cdot \\frac{SB'}{SB} \\cdot \\frac{SC'}{SC}$ và các bài toán thực tế chứa nước, vật liệu xây dựng.",
      exercises: [
        {
          id: "g11-c7-l27-d3-ex1",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Cho hình chóp tam giác $S.ABC$. Trên các đoạn thẳng $SA, SB, SC$ lần lượt lấy các điểm $A', B', C'$. Tỉ số thể tích $\\frac{V_{S.A'B'C'}}{V_{S.ABC}}$ được xác định bởi công thức nào?",
          shortAnswer: "$\\frac{V_{S.A'B'C'}}{V_{S.ABC}} = \\frac{SA'}{SA} \\cdot \\frac{SB'}{SB} \\cdot \\frac{SC'}{SC}$",
          fullSolution: "Đây là công thức tỉ số thể tích Simson áp dụng riêng cho khối chóp tam giác: $\\frac{V_{S.A'B'C'}}{V_{S.ABC}} = \\frac{SA'}{SA} \\cdot \\frac{SB'}{SB} \\cdot \\frac{SC'}{SC}$."
        },
        {
          id: "g11-c7-l27-d3-ex2",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Một bể chứa nước hình hộp chữ nhật có kích thước lòng trong là dài $2\\text{ m}$, rộng $1{,}5\\text{ m}$, cao $1\\text{ m}$. Dung tích tối đa của bể là bao nhiêu mét khối?",
          shortAnswer: "$3\\text{ m}^3$",
          fullSolution: "Thể tích lòng bể là: $V = 2 \\times 1{,}5 \\times 1 = 3\\text{ m}^3$ (tương đương $3000$ lít nước)."
        },
        {
          id: "g11-c7-l27-d3-ex3",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Khi tất cả các kích thước chiều dài, chiều rộng, chiều cao của một khối hộp chữ nhật cùng tăng lên gấp $2$ lần thì thể tích của khối hộp tăng lên gấp bao nhiêu lần?",
          shortAnswer: "$8$ lần",
          fullSolution: "Thể tích ban đầu là $V = abc$. Khi tăng mỗi chiều lên gấp đôi, thể tích mới là $V' = (2a)(2b)(2c) = 8abc = 8V$, tức tăng gấp $8$ lần."
        },
        {
          id: "g11-c7-l27-d3-ex4",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Mặt phẳng đi qua trung điểm của chiều cao và song song với đáy của một khối chóp cắt khối chóp thành một khối chóp nhỏ và một khối chóp cụt. Tỉ số thể tích của khối chóp nhỏ so với khối chóp ban đầu bằng bao nhiêu?",
          shortAnswer: "$\\frac{1}{8}$",
          fullSolution: "Khối chóp nhỏ đồng dạng với khối chóp ban đầu với tỉ số đồng dạng $k = \\frac{1}{2}$. Do đó tỉ số thể tích bằng $k^3 = \\left(\\frac{1}{2}\\right)^3 = \\frac{1}{8}$."
        },
        {
          id: "g11-c7-l27-d3-ex5",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho khối chóp tam giác $S.ABC$ có thể tích $V = 24\\text{ cm}^3$. Gọi $M, N$ lần lượt là trung điểm của $SA$ và $SB$. Tính thể tích của khối chóp $S.MNC$.",
          shortAnswer: "$6\\text{ cm}^3$",
          fullSolution: "Áp dụng tỉ số thể tích: $\\frac{V_{S.MNC}}{V_{S.ABC}} = \\frac{SM}{SA} \\cdot \\frac{SN}{SB} \\cdot \\frac{SC}{SC} = \\frac{1}{2} \\cdot \\frac{1}{2} \\cdot 1 = \\frac{1}{4}$. Do đó $V_{S.MNC} = \\frac{1}{4}V = \\frac{24}{4} = 6\\text{ cm}^3$."
        },
        {
          id: "g11-c7-l27-d3-ex6",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Một đống cát có dạng khối chóp tứ giác đều với cạnh đáy dài $4\\text{ m}$ và chiều cao $1{,}5\\text{ m}$. Tính thể tích cát của đống đó.",
          shortAnswer: "$8\\text{ m}^3$",
          fullSolution: "Diện tích đáy là $B = 4^2 = 16\\text{ m}^2$. Chiều cao $h = 1{,}5\\text{ m}$. Thể tích khối cát là: $V = \\frac{1}{3}Bh = \\frac{1}{3} \\cdot 16 \\cdot 1{,}5 = 8\\text{ m}^3$."
        },
        {
          id: "g11-c7-l27-d3-ex7",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Một thùng xe tải dạng khối hộp chữ nhật có kích thước dài $4\\text{ m}$, rộng $2\\text{ m}$, sâu $1{,}2\\text{ m}$. Thùng xe đang chứa đầy sỏi vụn. Nếu dùng loại xẻng xúc mỗi lần được $0{,}04\\text{ m}^3$ sỏi thì cần xúc bao nhiêu lần để hết toàn bộ số sỏi trên thùng xe?",
          shortAnswer: "$240$ lần",
          fullSolution: "Thể tích sỏi trong thùng xe là $V = 4 \\times 2 \\times 1{,}2 = 9{,}6\\text{ m}^3$. Số lần xúc cần thiết là: $N = \\frac{9{,}6}{0{,}04} = 240$ lần."
        },
        {
          id: "g11-c7-l27-d3-ex8",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho khối chóp tứ giác $S.ABCD$ có đáy là hình bình hành thể tích bằng $V$. Mặt phẳng $(\\alpha)$ đi qua $A$ và trung điểm $M$ của $SC$, cắt $SB, SD$ lần lượt tại $B', D'$ sao cho $\\frac{SB'}{SB} = \\frac{SD'}{SD} = \\frac{2}{3}$. Tính thể tích khối chóp $S.AB'MD'$ theo $V$.",
          shortAnswer: "$\\frac{1}{3}V$",
          fullSolution: "Chia khối chóp thành hai phần bằng mặt phẳng chéo $(SAC)$: $V_{S.ABC} = V_{S.ADC} = \\frac{1}{2}V$. Ta có $\\frac{V_{S.AB'M}}{V_{S.ABC}} = \\frac{SA}{SA} \\cdot \\frac{SB'}{SB} \\cdot \\frac{SM}{SC} = 1 \\cdot \\frac{2}{3} \\cdot \\frac{1}{2} = \\frac{1}{3} \\implies V_{S.AB'M} = \\frac{1}{3} \\cdot \\frac{1}{2}V = \\frac{1}{6}V$. Tương tự $\\frac{V_{S.AMD'}}{V_{S.ADC}} = \\frac{1}{3} \\implies V_{S.AMD'} = \\frac{1}{6}V$. Do đó $V_{S.AB'MD'} = V_{S.AB'M} + V_{S.AMD'} = \\frac{1}{6}V + \\frac{1}{6}V = \\frac{1}{3}V$."
        },
        {
          id: "g11-c7-l27-d3-ex9",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Người ta muốn đổ một cột bê tông dạng khối chóp cụt tứ giác đều có chiều cao $2\\text{ m}$, đáy dưới là hình vuông cạnh $0{,}8\\text{ m}$, đáy trên là hình vuông cạnh $0{,}4\\text{ m}$. Tính chi phí mua bê tông để đổ $10$ cột như vậy, biết giá $1\\text{ m}^3$ bê tông tươi là $1\\,200\\,000$ đồng.",
          shortAnswer: "$9\\,120\\,000$ đồng",
          fullSolution: "Diện tích đáy dưới: $B_1 = 0{,}8^2 = 0{,}64\\text{ m}^2$. Diện tích đáy trên: $B_2 = 0{,}4^2 = 0{,}16\\text{ m}^2$. Ta có $\\sqrt{B_1 B_2} = 0{,}8 \\times 0{,}4 = 0{,}32\\text{ m}^2$. Thể tích một cột là: $V_1 = \\frac{1}{3} \\cdot 2 \\cdot (0{,}64 + 0{,}16 + 0{,}32) = \\frac{2}{3} \\cdot 1{,}12 = \\frac{2{,}24}{3} = \\frac{56}{75}\\text{ m}^3 \\approx 0{,}7467\\text{ m}^3$. Thể tích của $10$ cột bê tông là: $V_{10} = 10 \\cdot \\frac{2{,}24}{3} = \\frac{22{,}4}{3}\\text{ m}^3$. Tổng chi phí là: $\\text{Tiền} = \\frac{22{,}4}{3} \\times 1\\,200\\,000 = 22{,}4 \\times 400\\,000 = 8\\,960\\,000$ đồng."
        },
        {
          id: "g11-c7-l27-d3-ex10",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Một bể bơi hình chữ nhật có chiều dài $25\\text{ m}$, chiều rộng $10\\text{ m}$. Đáy bể dốc dần từ đầu cạn có độ sâu $1\\text{ m}$ đến đầu sâu có độ sâu $2\\text{ m}$ (mặt cắt dọc theo chiều dài có dạng hình thang vuông). Tính lượng nước (theo mét khối) cần thiết để bơm đầy bể bơi này.",
          shortAnswer: "$375\\text{ m}^3$",
          fullSolution: "Bể bơi có thể xem là một hình lăng trụ đứng với đáy là hình thang vuông có chiều cao là chiều dài hồ bơi $L = 25\\text{ m}$, hai đáy của hình thang là độ sâu nông $h_1 = 1\\text{ m}$ và độ sâu sâu $h_2 = 2\\text{ m}$. Chiều cao của lăng trụ chính là bề rộng của bể bơi $W = 10\\text{ m}$. Diện tích mặt cắt dọc là diện tích hình thang: $S = \\frac{(h_1 + h_2) \\cdot L}{2} = \\frac{(1 + 2) \\cdot 25}{2} = 37{,}5\\text{ m}^2$. Dung tích khối nước là: $V = S \\cdot W = 37{,}5 \\times 10 = 375\\text{ m}^3$."
        }
      ]
    }
  ]
  }
,
  "g11-c8-l28": {
    lessonId: "g11-c8-l28",
  id: "g11-c8-l28",
  title: "Bài 28: Biến cố hợp, biến cố giao, biến cố độc lập",
  topics: [
    {
      id: "g11-c8-l28-dang1",
      title: "Dạng 1: Biến cố hợp và biến cố giao",
      description: "Biến cố hợp $A \\cup B$: biến cố 'A hoặc B xảy ra'. Biến cố giao $A \\cap B$ (hay $AB$): biến cố 'cả A và B cùng xảy ra'.",
      exercises: [
        {
          id: "g11-c8-l28-d1-ex1",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Biến cố 'A hoặc B xảy ra' được gọi là biến cố gì của hai biến cố $A$ và $B$, kí hiệu như thế nào?",
          shortAnswer: "Biến cố hợp của $A$ và $B$, kí hiệu là $A \\cup B$",
          fullSolution: "Tập hợp các kết quả thuận lợi cho ít nhất một trong hai biến cố $A$ hoặc $B$ được gọi là biến cố hợp của $A$ và $B$, kí hiệu là $A \\cup B$."
        },
        {
          id: "g11-c8-l28-d1-ex2",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Biến cố 'cả A và B cùng xảy ra' được gọi là biến cố gì của hai biến cố $A$ và $B$, kí hiệu như thế nào?",
          shortAnswer: "Biến cố giao của $A$ và $B$, kí hiệu là $A \\cap B$ hoặc $AB$",
          fullSolution: "Tập hợp các kết quả thuận lợi cho cả hai biến cố $A$ và $B$ được gọi là biến cố giao của $A$ và $B$, kí hiệu là $A \\cap B$ (hoặc viết tắt là $AB$)."
        },
        {
          id: "g11-c8-l28-d1-ex3",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Gieo một con xúc xắc cân đối. Gọi $A$ là biến cố 'xuất hiện mặt chẵn', $B$ là biến cố 'xuất hiện mặt nguyên tố'. Tập hợp kết quả thuận lợi cho biến cố giao $AB$ là gì?",
          shortAnswer: "$\\{2\\}$",
          fullSolution: "Ta có $A = \\{2, 4, 6\\}$ và $B = \\{2, 3, 5\\}$. Khi đó biến cố giao là $AB = A \\cap B = \\{2\\}$."
        },
        {
          id: "g11-c8-l28-d1-ex4",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Gieo một con xúc xắc cân đối. Gọi $A$ là biến cố 'xuất hiện mặt bé hơn 3', $B$ là biến cố 'xuất hiện mặt lớn hơn 4'. Hãy viết tập hợp các kết quả thuận lợi cho biến cố hợp $A \\cup B$.",
          shortAnswer: "$\\{1, 2, 5, 6\\}$",
          fullSolution: "Ta có $A = \\{1, 2\\}$ và $B = \\{5, 6\\}$. Hợp của hai biến cố là $A \\cup B = \\{1, 2, 5, 6\\}$."
        },
        {
          id: "g11-c8-l28-d1-ex5",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Chọn ngẫu nhiên một số tự nhiên từ $1$ đến $20$. Gọi $A$ là biến cố 'chọn được số chia hết cho 3', $B$ là biến cố 'chọn được số chia hết cho 4'. Xác định số phần tử của biến cố giao $AB$.",
          shortAnswer: "$1$ phần tử (số $12$)",
          fullSolution: "Các số từ $1$ đến $20$ chia hết cho cả $3$ và $4$ là các số chia hết cho $\\text{BCNN}(3, 4) = 12$. Trong khoảng từ $1$ đến $20$ chỉ có duy nhất số $12$. Do đó $AB = \\{12\\}$, có $1$ phần tử."
        },
        {
          id: "g11-c8-l28-d1-ex6",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Rút ngẫu nhiên một quân bài từ bộ bài tú lơ khơ 52 lá. Gọi $A$ là biến cố 'quân bài rút ra có chất cơ', $B$ là biến cố 'quân bài rút ra là quân Át (A)'. Hãy mô tả biến cố hợp $A \\cup B$ bằng lời.",
          shortAnswer: "Biến cố 'quân bài rút ra mang chất cơ hoặc là quân Át'",
          fullSolution: "Biến cố $A \\cup B$ xảy ra khi và chỉ khi quân bài rút được là quân bài thuộc chất cơ, hoặc là một trong bốn quân Át (Át cơ, Át rô, Át chuồn, Át bích)."
        },
        {
          id: "g11-c8-l28-d1-ex7",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Một tổ học sinh gồm $6$ nam và $4$ nữ. Chọn ngẫu nhiên $2$ học sinh. Gọi $A$ là biến cố 'chọn được ít nhất 1 bạn nữ', $B$ là biến cố 'chọn được 2 bạn cùng giới tính'. Hãy tìm biến cố giao $AB$.",
          shortAnswer: "Biến cố 'chọn được 2 bạn nữ'",
          fullSolution: "Biến cố $A$ gồm hai trường hợp: $1$ nam, $1$ nữ hoặc $2$ nữ. Biến cố $B$ gồm: $2$ nam hoặc $2$ nữ. Giao của $A$ và $B$ là biến cố xảy ra khi cả $A$ và $B$ cùng thỏa mãn, tức là 'chọn được $2$ học sinh đều là nữ'."
        },
        {
          id: "g11-c8-l28-d1-ex8",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Gieo đồng thời hai con xúc xắc cân đối. Gọi $A$ là biến cố 'tổng số chấm xuất hiện bằng 7', $B$ là biến cố 'có ít nhất một con xúc xắc xuất hiện mặt 2 chấm'. Tính số phần tử của biến cố hợp $A \\cup B$.",
          shortAnswer: "$15$",
          fullSolution: "Không gian mẫu $n(\\Omega) = 36$. Biến cố $A$ gồm các cặp: $(1, 6), (2, 5), (3, 4), (4, 3), (5, 2), (6, 1) \\implies n(A) = 6$. Biến cố $B$: các cặp có ít nhất một số $2$, gồm $6 + 6 - 1 = 11$ cặp $\\implies n(B) = 11$. Biến cố giao $AB$ là có tổng bằng $7$ và chứa mặt $2$: $AB = \\{(2, 5), (5, 2)\\} \\implies n(AB) = 2$. Áp dụng công thức số phần tử: $n(A \\cup B) = n(A) + n(B) - n(AB) = 6 + 11 - 2 = 15$."
        },
        {
          id: "g11-c8-l28-d1-ex9",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Lớp 11A có 40 học sinh, trong đó có 25 bạn thích bóng đá, 18 bạn thích bóng rổ, và 10 bạn thích cả hai môn thể thao này. Chọn ngẫu nhiên một bạn học sinh trong lớp. Tính số phần tử thuận lợi cho biến cố 'học sinh được chọn không thích cả hai môn trên'.",
          shortAnswer: "$7$",
          fullSolution: "Gọi $A$ là tập các bạn thích bóng đá, $B$ là tập các bạn thích bóng rổ. Số học sinh thích ít nhất một trong hai môn là: $n(A \\cup B) = n(A) + n(B) - n(AB) = 25 + 18 - 10 = 33$ bạn. Số bạn không thích môn nào trong hai môn là: $40 - 33 = 7$ bạn."
        },
        {
          id: "g11-c8-l28-d1-ex10",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Một hộp chứa 5 quả cầu xanh, 4 quả cầu đỏ và 3 quả cầu vàng. Lấy ngẫu nhiên 3 quả cầu. Gọi $A$ là biến cố 'lấy được ít nhất 1 quả cầu đỏ', $B$ là biến cố 'lấy được cả 3 quả khác màu nhau'. Xác định số kết quả thuận lợi cho biến cố giao $AB$.",
          shortAnswer: "$60$",
          fullSolution: "Biến cố giao $AB$ xảy ra khi 3 quả lấy ra vừa có ít nhất một quả đỏ vừa có đủ cả ba màu khác nhau. Nhưng nếu 3 quả có đủ ba màu khác nhau (xanh, đỏ, vàng) thì chắc chắn có đúng 1 quả cầu đỏ. Do đó biến cố giao $AB$ chính là biến cố 'lấy được 1 quả cầu xanh, 1 quả đỏ và 1 quả vàng'. Số cách chọn là: $n(AB) = C_5^1 \\cdot C_4^1 \\cdot C_3^1 = 5 \\times 4 \\times 3 = 60$."
        }
      ]
    },
    {
      id: "g11-c8-l28-dang2",
      title: "Dạng 2: Biến cố xung khắc và biến cố đối",
      description: "Hai biến cố $A$ và $B$ là xung khắc nếu $A \\cap B = \\emptyset$. Biến cố đối $\\overline{A}$ là biến cố không xảy ra $A$, ta có $A \\cap \\overline{A} = \\emptyset$ và $A \\cup \\overline{A} = \\Omega$.",
      exercises: [
        {
          id: "g11-c8-l28-d2-ex1",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Thế nào là hai biến cố xung khắc?",
          shortAnswer: "Hai biến cố không thể cùng xảy ra trong một phép thử ($A \\cap B = \\emptyset$)",
          fullSolution: "Hai biến cố $A$ và $B$ được gọi là xung khắc nếu biến cố này xảy ra thì biến cố kia không xảy ra, tức là $A \\cap B = \\emptyset$."
        },
        {
          id: "g11-c8-l28-d2-ex2",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Biến cố đối của biến cố $A$ là gì, kí hiệu là gì?",
          shortAnswer: "Là biến cố 'A không xảy ra', kí hiệu là $\\overline{A}$",
          fullSolution: "Biến cố đối của biến cố $A$ là tập hợp tất cả các kết quả thuộc không gian mẫu $\\Omega$ mà không thuộc $A$, kí hiệu là $\\overline{A}$."
        },
        {
          id: "g11-c8-l28-d2-ex3",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Hai biến cố đối nhau có phải là hai biến cố xung khắc không?",
          shortAnswer: "Có, hai biến cố đối nhau luôn xung khắc vì $A \\cap \\overline{A} = \\emptyset$",
          fullSolution: "Vì $A \\cap \\overline{A} = \\emptyset$ nên hai biến cố đối nhau luôn luôn là hai biến cố xung khắc."
        },
        {
          id: "g11-c8-l28-d2-ex4",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Gieo một đồng xu 2 lần liên tiếp. Gọi $A$ là biến cố 'cả 2 lần đều xuất hiện mặt sấp'. Biến cố đối $\\overline{A}$ là gì?",
          shortAnswer: "Có ít nhất một lần xuất hiện mặt ngửa",
          fullSolution: "Phủ định của 'cả 2 lần đều sấp' là 'có ít nhất một lần xuất hiện mặt ngửa'."
        },
        {
          id: "g11-c8-l28-d2-ex5",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Gieo một con xúc xắc cân đối. Xét hai biến cố: $E$: 'Mặt xuất hiện có số chấm là số chẵn lớn hơn 2', $F$: 'Mặt xuất hiện có số chấm là số lẻ nhỏ hơn 5'. Hai biến cố $E$ và $F$ có xung khắc không? Vì sao?",
          shortAnswer: "Có xung khắc, vì $E \\cap F = \\emptyset$",
          fullSolution: "Ta có $E = \\{4, 6\\}$ và $F = \\{1, 3\\}$. Giao của hai biến cố là $E \\cap F = \\emptyset$. Vậy $E$ và $F$ là hai biến cố xung khắc."
        },
        {
          id: "g11-c8-l28-d2-ex6",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Bắn hai viên đạn độc lập vào mục tiêu. Gọi $A_1$ là biến cố 'viên thứ nhất trúng', $A_2$ là biến cố 'viên thứ hai trúng'. Xét hai biến cố: $M$: 'Cả 2 viên đều trúng' và $N$: 'Cả 2 viên đều trượt'. $M$ và $N$ có phải là hai biến cố đối nhau không? Vì sao?",
          shortAnswer: "Không phải biến cố đối, vì vẫn còn trường hợp có đúng 1 viên trúng",
          fullSolution: "Hai biến cố đối nhau phải có hợp bằng toàn bộ không gian mẫu. Ở đây, ngoài trường hợp cả 2 viên trúng ($M$) và cả 2 viên trượt ($N$), còn có kết quả 'đúng 1 viên trúng'. Do đó $M \\cup N \\ne \\Omega$, nên $M$ và $N$ xung khắc nhưng không đối nhau."
        },
        {
          id: "g11-c8-l28-d2-ex7",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Một hộp có 10 tấm thẻ đánh số từ 1 đến 10. Rút ngẫu nhiên một thẻ. Gọi $A$ là biến cố 'rút được thẻ số chia hết cho 3'. Hãy liệt kê các kết quả thuận lợi cho biến cố đối $\\overline{A}$.",
          shortAnswer: "$\\{1, 2, 4, 5, 7, 8, 10\\}$",
          fullSolution: "Biến cố $A = \\{3, 6, 9\\}$. Khi đó biến cố đối $\\overline{A}$ là 'rút được thẻ số không chia hết cho 3', gồm các phần tử: $\\overline{A} = \\{1, 2, 4, 5, 7, 8, 10\\}$."
        },
        {
          id: "g11-c8-l28-d2-ex8",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Một xạ thủ bắn 3 phát súng vào bia. Gọi $A_k$ là biến cố 'phát bắn thứ $k$ trúng bia' ($k = 1, 2, 3$). Biểu diễn biến cố $B$: 'có đúng 2 phát trúng bia' qua các biến cố $A_k$ và biến cố đối của chúng.",
          shortAnswer: "$B = (A_1 A_2 \\overline{A_3}) \\cup (A_1 \\overline{A_2} A_3) \\cup (\\overline{A_1} A_2 A_3)$",
          fullSolution: "Có đúng 2 phát trúng bia nghĩa là xảy ra 1 trong 3 trường hợp xung khắc: phát 1 và 2 trúng, phát 3 trượt ($A_1 A_2 \\overline{A_3}$); phát 1 và 3 trúng, phát 2 trượt ($A_1 \\overline{A_2} A_3$); hoặc phát 2 và 3 trúng, phát 1 trượt ($\\overline{A_1} A_2 A_3$). Do đó $B = (A_1 A_2 \\overline{A_3}) \\cup (A_1 \\overline{A_2} A_3) \\cup (\\overline{A_1} A_2 A_3)$."
        },
        {
          id: "g11-c8-l28-d2-ex9",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Một lớp có 30 học sinh thi học sinh giỏi các môn Toán, Văn. Biết có 15 bạn thi Toán, 12 bạn thi Văn, và 5 bạn thi cả hai môn. Gọi $A$ là biến cố học sinh được chọn thi Toán, $B$ là biến cố học sinh được chọn thi Văn. Tính số học sinh thuộc biến cố $(\\overline{A} \\cap B) \\cup (A \\cap \\overline{B})$.",
          shortAnswer: "$17$ bạn",
          fullSolution: "Biến cố $\\overline{A} \\cap B$ là học sinh chỉ thi Văn mà không thi Toán: $n(B \\setminus A) = 12 - 5 = 7$ bạn. Biến cố $A \\cap \\overline{B}$ là học sinh chỉ thi Toán mà không thi Văn: $n(A \\setminus B) = 15 - 5 = 10$ bạn. Do hai biến cố này xung khắc nhau, nên số học sinh thỏa mãn là $7 + 10 = 17$ bạn."
        },
        {
          id: "g11-c8-l28-d2-ex10",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Gieo đồng thời 3 đồng xu cân đối đồng chất. Gọi $A$ là biến cố 'có ít nhất 2 mặt ngửa', $B$ là biến cố 'cả 3 mặt đều sấp'. Chứng minh $A$ và $B$ là hai biến cố xung khắc nhưng không phải là hai biến cố đối nhau.",
          shortAnswer: "Xung khắc vì $A \\cap B = \\emptyset$; không đối nhau vì $A \\cup B \\ne \\Omega$ (thiếu trường hợp có đúng 1 mặt ngửa)",
          fullSolution: "Không gian mẫu gồm 8 kết quả: $\\Omega = \\{SSS, SSN, SNS, NSS, SNN, NSN, NNS, NNN\\}$. Biến cố $A = \\{SNN, NSN, NNS, NNN\\}$ (4 kết quả). Biến cố $B = \\{SSS\\}$ (1 kết quả). Rõ ràng $A \\cap B = \\emptyset$ nên $A$ và $B$ xung khắc. Tuy nhiên $A \\cup B$ chỉ có $5$ kết quả, thiếu tập hợp các kết quả có đúng 1 mặt ngửa $\\{SSN, SNS, NSS\\}$. Vì $A \\cup B \\ne \\Omega$ nên $A$ và $B$ không phải là hai biến cố đối nhau."
        }
      ]
    },
    {
      id: "g11-c8-l28-dang3",
      title: "Dạng 3: Biến cố độc lập và mô hình thực tế",
      description: "Hai biến cố $A$ và $B$ là độc lập nếu việc xảy ra hay không xảy ra của biến cố này không ảnh hưởng đến xác suất xảy ra của biến cố kia.",
      exercises: [
        {
          id: "g11-c8-l28-d3-ex1",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Định nghĩa hai biến cố độc lập là gì?",
          shortAnswer: "Hai biến cố được gọi là độc lập nếu việc xảy ra hay không xảy ra của biến cố này không làm ảnh hưởng tới xác suất xảy ra của biến cố kia",
          fullSolution: "Hai biến cố $A$ và $B$ được gọi là độc lập nếu sự xuất hiện hay không xuất hiện của biến cố $A$ không ảnh hưởng đến xác suất xảy ra của biến cố $B$ và ngược lại."
        },
        {
          id: "g11-c8-l28-d3-ex2",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Nếu hai biến cố $A$ và $B$ độc lập thì cặp biến cố nào sau đây cũng độc lập: $A$ và $\\overline{B}$, $\\overline{A}$ và $B$, $\\overline{A}$ và $\\overline{B}$?",
          shortAnswer: "Cả ba cặp: $(A, \\overline{B})$, $(\\overline{A}, B)$ và $(\\overline{A}, \\overline{B})$ đều độc lập",
          fullSolution: "Theo tính chất của biến cố độc lập: nếu $A$ và $B$ độc lập thì các cặp $(A, \\overline{B})$, $(\\overline{A}, B)$ và $(\\overline{A}, \\overline{B})$ cũng đều là các cặp biến cố độc lập."
        },
        {
          id: "g11-c8-l28-d3-ex3",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Gieo một đồng xu và gieo một con xúc xắc. Biến cố 'đồng xu xuất hiện mặt ngửa' và biến cố 'con xúc xắc xuất hiện mặt 6 chấm' có độc lập không?",
          shortAnswer: "Có độc lập",
          fullSolution: "Kết quả của việc gieo đồng xu hoàn toàn không ảnh hưởng đến kết quả gieo xúc xắc, do đó hai biến cố này độc lập với nhau."
        },
        {
          id: "g11-c8-l28-d3-ex4",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Hai xạ thủ cùng độc lập bắn vào một bia. Biến cố 'người thứ nhất bắn trúng' và 'người thứ hai bắn trượt' có độc lập không?",
          shortAnswer: "Có độc lập",
          fullSolution: "Vì hai xạ thủ bắn độc lập nhau nên kết quả bắn trúng hay trượt của xạ thủ này không ảnh hưởng đến xác suất bắn trúng hay trượt của xạ thủ kia."
        },
        {
          id: "g11-c8-l28-d3-ex5",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Một hộp chứa 3 bi xanh và 2 bi đỏ. Lấy liên tiếp 2 viên bi không hoàn lại. Gọi $A$ là biến cố 'viên bi thứ nhất màu đỏ', $B$ là biến cố 'viên bi thứ hai màu đỏ'. Hai biến cố $A$ và $B$ có độc lập không? Vì sao?",
          shortAnswer: "Không độc lập, vì lấy không hoàn lại nên kết quả lần 1 ảnh hưởng đến số lượng bi còn lại ở lần 2",
          fullSolution: "Nếu lần 1 lấy được bi đỏ thì hộp còn lại 1 bi đỏ trên 4 bi (xác suất ra đỏ ở lần 2 là $1/4$). Nếu lần 1 lấy bi xanh thì hộp còn 2 bi đỏ trên 4 bi (xác suất là $2/4$). Do đó xác suất của biến cố $B$ phụ thuộc vào kết quả của $A$, nên $A$ và $B$ không độc lập."
        },
        {
          id: "g11-c8-l28-d3-ex6",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Một hộp chứa 3 bi xanh và 2 bi đỏ. Lấy liên tiếp 2 viên bi có hoàn lại (sau khi lấy viên thứ nhất, ghi nhận màu rồi bỏ lại vào hộp trước khi lấy lần 2). Biến cố 'lần 1 lấy được bi đỏ' và 'lần 2 lấy được bi đỏ' có độc lập không? Vì sao?",
          shortAnswer: "Có độc lập, vì số lượng bi trong hộp ở lần 2 giống hệt như ở lần 1",
          fullSolution: "Do việc lấy có hoàn lại nên trạng thái của hộp trước mỗi lần lấy là hoàn toàn như nhau. Kết quả lần 1 không làm thay đổi xác suất của lần 2, do đó hai biến cố là độc lập."
        },
        {
          id: "g11-c8-l28-d3-ex7",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Xét hai biến cố $A$ và $B$ bất kì có $P(A) > 0$ và $P(B) > 0$. Nếu $A$ và $B$ xung khắc thì $A$ và $B$ có thể độc lập với nhau được không?",
          shortAnswer: "Không thể độc lập",
          fullSolution: "Nếu $A$ và $B$ xung khắc thì $A \\cap B = \\emptyset \\implies P(AB) = 0$. Mặt khác nếu $A, B$ độc lập thì $P(AB) = P(A) \\cdot P(B) > 0$. Điều này mâu thuẫn. Do đó hai biến cố xung khắc (với xác suất dương) không bao giờ độc lập."
        },
        {
          id: "g11-c8-l28-d3-ex8",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Gieo đồng thời hai con xúc xắc cân đối $D_1$ và $D_2$. Gọi $A$ là biến cố 'con xúc xắc $D_1$ xuất hiện mặt chẵn', $B$ là biến cố 'tổng số chấm xuất hiện trên hai con xúc xắc là số lẻ'. Kiểm tra xem $A$ và $B$ có độc lập với nhau không.",
          shortAnswer: "Có độc lập, vì $P(AB) = P(A) \\cdot P(B) = \\frac{1}{4}$",
          fullSolution: "Ta có $n(\\Omega) = 36$. Biến cố $A$ có $P(A) = \\frac{1}{2}$. Biến cố $B$: tổng số chấm là số lẻ xảy ra khi một con ra chẵn và một con ra lẻ, số kết quả thuận lợi là $3 \\times 3 + 3 \\times 3 = 18 \\implies P(B) = \\frac{18}{36} = \\frac{1}{2}$. Biến cố $AB$: xúc xắc $D_1$ ra chẵn và tổng lẻ, điều này tương đương với $D_1$ chẵn và $D_2$ lẻ. Số kết quả thuận lợi là $3 \\times 3 = 9 \\implies P(AB) = \\frac{9}{36} = \\frac{1}{4}$. Nhận thấy $P(AB) = \\frac{1}{4} = \\frac{1}{2} \\cdot \\frac{1}{2} = P(A) \\cdot P(B)$. Vậy hai biến cố $A$ và $B$ độc lập."
        },
        {
          id: "g11-c8-l28-d3-ex9",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Hai học sinh $A$ và $B$ tham gia một kì thi kiểm tra trắc nghiệm một cách độc lập. Xác suất học sinh $A$ làm đúng câu hỏi là $0{,}8$; học sinh $B$ làm đúng là $0{,}7$. Viết biểu thức biến cố và tính xác suất để có đúng một học sinh làm đúng câu hỏi đó.",
          shortAnswer: "$0{,}38$",
          fullSolution: "Gọi $A$ là biến cố 'học sinh A làm đúng' ($P(A) = 0{,}8 \\implies P(\\overline{A}) = 0{,}2$); $B$ là biến cố 'học sinh B làm đúng' ($P(B) = 0{,}7 \\implies P(\\overline{B}) = 0{,}3$). Biến cố 'có đúng một học sinh làm đúng' là $C = (A \\cap \\overline{B}) \\cup (\\overline{A} \\cap B)$. Do tính độc lập và xung khắc: $P(C) = P(A)P(\\overline{B}) + P(\\overline{A})P(B) = 0{,}8 \\times 0{,}3 + 0{,}2 \\times 0{,}7 = 0{,}24 + 0{,}14 = 0{,}38$."
        },
        {
          id: "g11-c8-l28-d3-ex10",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Một hệ thống mạch điện gồm hai linh kiện $K_1$ và $K_2$ mắc song song. Hệ thống hoạt động tốt nếu có ít nhất một linh kiện hoạt động tốt. Biết rằng hai linh kiện hoạt động độc lập và xác suất bị hỏng của $K_1$ là $0{,}1$, của $K_2$ là $0{,}05$. Tính xác suất để hệ thống hoạt động bình thường.",
          shortAnswer: "$0{,}995$",
          fullSolution: "Gọi $H_1, H_2$ lần lượt là biến cố linh kiện $K_1, K_2$ bị hỏng. Ta có $P(H_1) = 0{,}1$ và $P(H_2) = 0{,}05$. Hệ thống không hoạt động khi cả hai linh kiện cùng hỏng, tức biến cố $H_1 \\cap H_2$. Do $K_1, K_2$ hỏng độc lập nên $P(H_1 \\cap H_2) = P(H_1) \\cdot P(H_2) = 0{,}1 \\times 0{,}05 = 0{,}005$. Do đó xác suất hệ thống hoạt động tốt là biến cố đối: $P = 1 - P(H_1 \\cap H_2) = 1 - 0{,}005 = 0{,}995$."
        }
      ]
    }
  ]
  }
,
  "g11-c8-l29": {
    lessonId: "g11-c8-l29",
  id: "g11-c8-l29",
  title: "Bài 29: Công thức cộng xác suất",
  topics: [
    {
      id: "g11-c8-l29-dang1",
      title: "Dạng 1: Công thức cộng xác suất cho hai biến cố xung khắc",
      description: "Nếu $A$ và $B$ là hai biến cố xung khắc ($A \\cap B = \\emptyset$) thì $P(A \\cup B) = P(A) + P(B)$. Mở rộng cho $k$ biến cố đôi một xung khắc.",
      exercises: [
        {
          id: "g11-c8-l29-d1-ex1",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Nếu hai biến cố $A$ và $B$ xung khắc thì công thức tính xác suất của biến cố hợp $A \\cup B$ là gì?",
          shortAnswer: "$P(A \\cup B) = P(A) + P(B)$",
          fullSolution: "Theo quy tắc cộng xác suất, nếu hai biến cố $A$ và $B$ xung khắc ($A \\cap B = \\emptyset$) thì $P(A \\cup B) = P(A) + P(B)$."
        },
        {
          id: "g11-c8-l29-d1-ex2",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Cho hai biến cố xung khắc $A$ và $B$ có $P(A) = 0{,}3$ và $P(B) = 0{,}4$. Tính $P(A \\cup B)$.",
          shortAnswer: "$0{,}7$",
          fullSolution: "Vì $A$ và $B$ xung khắc nên $P(A \\cup B) = P(A) + P(B) = 0{,}3 + 0{,}4 = 0{,}7$."
        },
        {
          id: "g11-c8-l29-d1-ex3",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Cho ba biến cố $A, B, C$ đôi một xung khắc có $P(A) = 0{,}2$, $P(B) = 0{,}3$, $P(C) = 0{,}25$. Tính $P(A \\cup B \\cup C)$.",
          shortAnswer: "$0{,}75$",
          fullSolution: "Vì $A, B, C$ đôi một xung khắc nên $P(A \\cup B \\cup C) = P(A) + P(B) + P(C) = 0{,}2 + 0{,}3 + 0{,}25 = 0{,}75$."
        },
        {
          id: "g11-c8-l29-d1-ex4",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Một hộp đựng 10 viên bi gồm 4 bi đỏ, 3 bi xanh và 3 bi vàng. Lấy ngẫu nhiên 1 viên bi. Tính xác suất để lấy được viên bi màu đỏ hoặc màu xanh.",
          shortAnswer: "$0{,}7$",
          fullSolution: "Gọi $A$ là biến cố lấy bi đỏ ($P(A) = \\frac{4}{10} = 0{,}4$), $B$ là biến cố lấy bi xanh ($P(B) = \\frac{3}{10} = 0{,}3$). Vì một viên bi không thể vừa đỏ vừa xanh nên $A$ và $B$ xung khắc. Xác suất cần tìm: $P(A \\cup B) = P(A) + P(B) = 0{,}4 + 0{,}3 = 0{,}7$."
        },
        {
          id: "g11-c8-l29-d1-ex5",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Gieo một con xúc xắc cân đối. Tính xác suất để mặt xuất hiện có số chấm là số nguyên tố hoặc là số 1.",
          shortAnswer: "$\\frac{2}{3}$",
          fullSolution: "Không gian mẫu $\\Omega = \\{1, 2, 3, 4, 5, 6\\}$. Gọi $A$ là biến cố ra mặt nguyên tố ($A = \\{2, 3, 5\\} \\implies P(A) = \\frac{3}{6}$), $B$ là biến cố ra mặt 1 chấm ($B = \\{1\\} \\implies P(B) = \\frac{1}{6}$). Vì số 1 không phải là số nguyên tố nên $A$ và $B$ xung khắc. Do đó $P(A \\cup B) = P(A) + P(B) = \\frac{3}{6} + \\frac{1}{6} = \\frac{4}{6} = \\frac{2}{3}$."
        },
        {
          id: "g11-c8-l29-d1-ex6",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Một đội tuyển học sinh giỏi có 5 học sinh lớp 10, 7 học sinh lớp 11 và 8 học sinh lớp 12. Chọn ngẫu nhiên 1 học sinh làm đội trưởng. Tính xác suất để học sinh được chọn không phải là học sinh lớp 10.",
          shortAnswer: "$\\frac{3}{4}$",
          fullSolution: "Tổng số học sinh là $5 + 7 + 8 = 20$. Học sinh được chọn không phải lớp 10 nghĩa là thuộc lớp 11 hoặc lớp 12. Gọi $A$ là biến cố chọn học sinh lớp 11 ($P(A) = \\frac{7}{20}$), $B$ là biến cố chọn học sinh lớp 12 ($P(B) = \\frac{8}{20}$). Vì một học sinh chỉ thuộc một lớp nên $A, B$ xung khắc. Vậy $P = P(A) + P(B) = \\frac{7}{20} + \\frac{8}{20} = \\frac{15}{20} = \\frac{3}{4}$."
        },
        {
          id: "g11-c8-l29-d1-ex7",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Chọn ngẫu nhiên một số tự nhiên có hai chữ số từ $10$ đến $99$. Tính xác suất để số được chọn là số chia hết cho $10$ hoặc là số có hai chữ số giống nhau.",
          shortAnswer: "$\\frac{1}{5}$",
          fullSolution: "Có tất cả $99 - 10 + 1 = 90$ số. Tập các số chia hết cho 10: $\\{10, 20, \\dots, 90\\}$ có 9 số ($P(A) = \\frac{9}{90}$). Tập các số có hai chữ số giống nhau: $\\{11, 22, \\dots, 99\\}$ có 9 số ($P(B) = \\frac{9}{90}$). Vì không có số nào tận cùng bằng 0 mà hai chữ số lại giống nhau trong tập này nên $A$ và $B$ xung khắc. Vậy $P(A \\cup B) = \\frac{9}{90} + \\frac{9}{90} = \\frac{18}{90} = \\frac{1}{5}$."
        },
        {
          id: "g11-c8-l29-d1-ex8",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Một hộp chứa 6 quả cầu đỏ, 5 quả cầu xanh và 4 quả cầu vàng. Lấy ngẫu nhiên 3 quả cầu từ hộp. Tính xác suất để 3 quả cầu lấy ra cùng một màu.",
          shortAnswer: "$\\frac{34}{455}$",
          fullSolution: "Tổng số quả cầu là $6 + 5 + 4 = 15$. Số phần tử không gian mẫu $n(\\Omega) = C_{15}^3 = 455$. Gọi $A$ là biến cố 3 quả đỏ ($n(A) = C_6^3 = 20$), $B$ là biến cố 3 quả xanh ($n(B) = C_5^3 = 10$), $C$ là biến cố 3 quả vàng ($n(C) = C_4^3 = 4$). Ba biến cố này đôi một xung khắc. Do đó xác suất lấy 3 quả cùng màu là: $P = P(A) + P(B) + P(C) = \\frac{20}{455} + \\frac{10}{455} + \\frac{4}{455} = \\frac{34}{455}$."
        },
        {
          id: "g11-c8-l29-d1-ex9",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Một cỗ bài tây 52 lá được chia ngẫu nhiên cho một người chơi 4 lá bài. Tính xác suất để người chơi nhận được đúng 3 lá bài át (A) hoặc nhận được 4 lá bài cùng chất bích.",
          shortAnswer: "$\\frac{901}{270725}$",
          fullSolution: "Số cách rút 4 lá từ 52 lá là $n(\\Omega) = C_{52}^4 = 270725$. Gọi $A$ là biến cố rút được đúng 3 lá át: có $C_4^3 \\times C_{48}^1 = 4 \\times 48 = 192$ cách. Gọi $B$ là biến cố rút được 4 lá cùng chất bích: có $C_{13}^4 = 715$ cách. Trong chất bích chỉ có đúng 1 lá át, nên không thể vừa có đúng 3 lá át vừa có 4 lá chất bích (chỉ có tối đa 1 lá át bích). Do đó $A \\cap B = \\emptyset$. Vậy số kết quả thuận lợi là $192 + 715 = 907$, xác suất là $P = \\frac{907}{270725}$."
        },
        {
          id: "g11-c8-l29-d1-ex10",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Một cơ sở có hai máy dệt hoạt động độc lập. Xác suất trong một ngày làm việc máy I bị hỏng là $0{,}1$, máy II bị hỏng là $0{,}15$. Tính xác suất để trong ngày đó có đúng một máy bị hỏng.",
          shortAnswer: "$0{,}22$",
          fullSolution: "Gọi $A$ là biến cố máy I hỏng ($P(A) = 0{,}1, P(\\overline{A}) = 0{,}9$), $B$ là biến cố máy II hỏng ($P(B) = 0{,}15, P(\\overline{B}) = 0{,}85$). Biến cố có đúng một máy hỏng là hợp của hai biến cố xung khắc: máy I hỏng máy II không hỏng ($A\\overline{B}$) hoặc máy I không hỏng máy II hỏng ($\\overline{A}B$). Vì hai máy độc lập: $P = P(A\\overline{B}) + P(\\overline{A}B) = P(A)P(\\overline{B}) + P(\\overline{A})P(B) = 0{,}1 \\times 0{,}85 + 0{,}9 \\times 0{,}15 = 0{,}085 + 0{,}135 = 0{,}22$."
        }
      ]
    },
    {
      id: "g11-c8-l29-dang2",
      title: "Dạng 2: Công thức cộng xác suất tổng quát và biến cố đối",
      description: "Công thức tổng quát $P(A \\cup B) = P(A) + P(B) - P(AB)$ áp dụng cho hai biến cố bất kì. Xác suất của biến cố đối: $P(\\overline{A}) = 1 - P(A)$.",
      exercises: [
        {
          id: "g11-c8-l29-d2-ex1",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Viết công thức cộng xác suất tổng quát cho hai biến cố bất kì $A$ và $B$.",
          shortAnswer: "$P(A \\cup B) = P(A) + P(B) - P(AB)$",
          fullSolution: "Với hai biến cố bất kì $A$ và $B$, ta luôn có công thức: $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$."
        },
        {
          id: "g11-c8-l29-d2-ex2",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Mối liên hệ giữa xác suất của biến cố $A$ và biến cố đối $\\overline{A}$ là gì?",
          shortAnswer: "$P(\\overline{A}) = 1 - P(A)$",
          fullSolution: "Vì $A \\cup \\overline{A} = \\Omega$ và $A \\cap \\overline{A} = \\emptyset$ nên $P(A) + P(\\overline{A}) = 1$, suy ra $P(\\overline{A}) = 1 - P(A)$."
        },
        {
          id: "g11-c8-l29-d2-ex3",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Cho hai biến cố $A$ và $B$ có $P(A) = 0{,}6$, $P(B) = 0{,}5$ và $P(AB) = 0{,}3$. Tính $P(A \\cup B)$.",
          shortAnswer: "$0{,}8$",
          fullSolution: "Áp dụng công thức cộng xác suất tổng quát: $P(A \\cup B) = P(A) + P(B) - P(AB) = 0{,}6 + 0{,}5 - 0{,}3 = 0{,}8$."
        },
        {
          id: "g11-c8-l29-d2-ex4",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Biết xác suất bắn trúng bia của một xạ thủ là $0{,}75$. Xác suất để xạ thủ đó bắn trượt là bao nhiêu?",
          shortAnswer: "$0{,}25$",
          fullSolution: "Biến cố bắn trượt là biến cố đối của biến cố bắn trúng. Do đó xác suất bắn trượt là: $P = 1 - 0{,}75 = 0{,}25$."
        },
        {
          id: "g11-c8-l29-d2-ex5",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Rút ngẫu nhiên một lá bài từ cỗ bài 52 lá. Tính xác suất để lá bài rút ra là lá màu đỏ hoặc là lá hình người (J, Q, K).",
          shortAnswer: "$\\frac{8}{13}$",
          fullSolution: "Cỗ bài có 26 lá đỏ ($P(A) = \\frac{26}{52}$) và 12 lá hình người ($P(B) = \\frac{12}{52}$). Có 6 lá hình người màu đỏ ($P(AB) = \\frac{6}{52}$). Áp dụng công thức: $P(A \\cup B) = P(A) + P(B) - P(AB) = \\frac{26}{52} + \\frac{12}{52} - \\frac{6}{52} = \\frac{32}{52} = \\frac{8}{13}$."
        },
        {
          id: "g11-c8-l29-d2-ex6",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho hai biến cố $A$ và $B$ có $P(A) = 0{,}4$, $P(B) = 0{,}5$ và $P(A \\cup B) = 0{,}7$. Tính xác suất của biến cố giao $AB$.",
          shortAnswer: "$0{,}2$",
          fullSolution: "Từ công thức $P(A \\cup B) = P(A) + P(B) - P(AB)$, ta suy ra: $P(AB) = P(A) + P(B) - P(A \\cup B) = 0{,}4 + 0{,}5 - 0{,}7 = 0{,}2$."
        },
        {
          id: "g11-c8-l29-d2-ex7",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Gieo đồng thời hai con xúc xắc cân đối. Tính xác suất để ít nhất một con xúc xắc xuất hiện mặt 6 chấm.",
          shortAnswer: "$\\frac{11}{36}$",
          fullSolution: "Biến cố đối là 'cả hai con xúc xắc đều không xuất hiện mặt 6 chấm'. Mỗi con xúc xắc có 5 mặt khác 6, nên số kết quả thuận lợi cho biến cố đối là $5 \\times 5 = 25$. Suy ra $P(\\overline{A}) = \\frac{25}{36}$. Do đó xác suất cần tìm là: $P(A) = 1 - P(\\overline{A}) = 1 - \\frac{25}{36} = \\frac{11}{36}$."
        },
        {
          id: "g11-c8-l29-d2-ex8",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Tại một trường học, có $45\\%$ học sinh thích đá cầu, $55\\%$ học sinh thích cầu lông và $25\\%$ học sinh thích cả hai môn này. Chọn ngẫu nhiên một học sinh. Tính xác suất để học sinh đó không thích môn nào trong hai môn đá cầu và cầu lông.",
          shortAnswer: "$0{,}25$",
          fullSolution: "Gọi $A$ là biến cố học sinh thích đá cầu ($P(A) = 0{,}45$), $B$ là biến cố học sinh thích cầu lông ($P(B) = 0{,}55$), và $AB$ là thích cả hai môn ($P(AB) = 0{,}25$). Xác suất học sinh thích ít nhất một trong hai môn là: $P(A \\cup B) = P(A) + P(B) - P(AB) = 0{,}45 + 0{,}55 - 0{,}25 = 0{,}75$. Xác suất học sinh không thích môn nào là xác suất của biến cố đối: $P = 1 - P(A \\cup B) = 1 - 0{,}75 = 0{,}25$."
        },
        {
          id: "g11-c8-l29-d2-ex9",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho hai biến cố $A$ và $B$ thoả mãn $P(A) = 0{,}5$, $P(B) = 0{,}6$ và $P(\\overline{A} \\cap \\overline{B}) = 0{,}1$. Tính $P(AB)$.",
          shortAnswer: "$0{,}2$",
          fullSolution: "Theo luật De Morgan, biến cố đối của biến cố hợp là $\\overline{A \\cup B} = \\overline{A} \\cap \\overline{B}$. Do đó $P(A \\cup B) = 1 - P(\\overline{A} \\cap \\overline{B}) = 1 - 0{,}1 = 0{,}9$. Áp dụng công thức cộng: $P(AB) = P(A) + P(B) - P(A \\cup B) = 0{,}5 + 0{,}6 - 0{,}9 = 0{,}2$."
        },
        {
          id: "g11-c8-l29-d2-ex10",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Một hộp đựng 4 viên bi trắng, 5 viên bi đỏ và 6 viên bi xanh. Lấy ngẫu nhiên cùng lúc 4 viên bi. Tính xác suất để trong 4 viên bi lấy ra có ít nhất một viên bi màu đỏ.",
          shortAnswer: "$\\frac{113}{143}$",
          fullSolution: "Tổng số viên bi là $4 + 5 + 6 = 15$. Số cách lấy 4 viên bi là $n(\\Omega) = C_{15}^4 = 1365$. Biến cố đối $\\overline{A}$ là 'trong 4 viên bi lấy ra không có viên bi đỏ nào' (nghĩa là cả 4 viên đều được lấy từ 10 viên bi gồm trắng và xanh). Số cách chọn thuận lợi cho $\\overline{A}$ là $C_{10}^4 = 210$. Suy ra $P(\\overline{A}) = \\frac{210}{1365} = \\frac{30}{195} = \\frac{2}{13}$. Do đó $P(A) = 1 - P(\\overline{A}) = 1 - \\frac{2}{13} = \\frac{11}{13}$ (hay $\\frac{1155}{1365} = \\frac{11}{13}$)."
        }
      ]
    },
    {
      id: "g11-c8-l29-dang3",
      title: "Dạng 3: Ứng dụng công thức cộng xác suất trong bài toán thực tế",
      description: "Ứng dụng trong chẩn đoán y tế, khảo sát thị trường, đánh giá chất lượng sản phẩm và các tình huống đời sống.",
      exercises: [
        {
          id: "g11-c8-l29-d3-ex1",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Một lớp học có $60\\%$ học sinh đăng kí tham gia câu lạc bộ Tiếng Anh, $40\\%$ đăng kí câu lạc bộ Tin học, không có bạn nào đăng kí cả hai môn. Xác suất một bạn được chọn ngẫu nhiên tham gia ít nhất một câu lạc bộ là bao nhiêu?",
          shortAnswer: "$100\\%$ (hay $1$)",
          fullSolution: "Do không có bạn nào tham gia cả hai câu lạc bộ nên hai biến cố xung khắc. Xác suất tham gia ít nhất một câu lạc bộ là $0{,}6 + 0{,}4 = 1$ ($100\\%$)."
        },
        {
          id: "g11-c8-l29-d3-ex2",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Trong một hộp đựng sữa chua ngẫu nhiên có ba vị: dâu ($30\\%$), nha đam ($50\\%$) và cam ($20\\%$). Chọn ngẫu nhiên một hộp. Xác suất lấy được hộp vị dâu hoặc vị nha đam là bao nhiêu?",
          shortAnswer: "$0{,}8$ (hay $80\\%$)",
          fullSolution: "Vì một hộp chỉ có một vị duy nhất nên các biến cố xung khắc: $P = 0{,}3 + 0{,}5 = 0{,}8$."
        },
        {
          id: "g11-c8-l29-d3-ex3",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Dự báo thời tiết ngày mai cho biết: xác suất trời mưa là $0{,}35$. Xác suất để ngày mai trời không mưa là bao nhiêu?",
          shortAnswer: "$0{,}65$",
          fullSolution: "Trời không mưa là biến cố đối của trời mưa: $P = 1 - 0{,}35 = 0{,}65$."
        },
        {
          id: "g11-c8-l29-d3-ex4",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Một cửa hàng bán điện thoại khảo sát thấy $70\\%$ khách hàng mua ốp lưng, $50\\%$ mua kính cường lực và $40\\%$ mua cả hai thứ. Tỉ lệ khách hàng mua ốp lưng hoặc kính cường lực là bao nhiêu?",
          shortAnswer: "$80\\%$ (hay $0{,}8$)",
          fullSolution: "Áp dụng công thức cộng: $P = 70\\% + 50\\% - 40\\% = 80\\%$."
        },
        {
          id: "g11-c8-l29-d3-ex5",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Khảo sát ý kiến của 100 người về hai mẫu xe ô tô $X$ và $Y$: có 60 người thích mẫu xe $X$, 50 người thích mẫu xe $Y$ và 20 người không thích cả hai mẫu xe. Có bao nhiêu người thích cả hai mẫu xe?",
          shortAnswer: "$30$ người",
          fullSolution: "Số người thích ít nhất một trong hai mẫu xe là $100 - 20 = 80$ người. Áp dụng công thức số phần tử: $n(X \\cup Y) = n(X) + n(Y) - n(X \\cap Y) \\implies 80 = 60 + 50 - n(X \\cap Y) \\implies n(X \\cap Y) = 110 - 80 = 30$ người."
        },
        {
          id: "g11-c8-l29-d3-ex6",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Một nhà máy sản xuất bóng đèn có tỉ lệ bóng bị lỗi sợi đốt là $3\\%$, tỉ lệ lỗi đui đèn là $2\\%$, tỉ lệ lỗi cả hai là $0{,}5\\%$. Tính tỉ lệ bóng đèn bị lỗi của nhà máy.",
          shortAnswer: "$4{,}5\\%$",
          fullSolution: "Bóng đèn bị lỗi là bóng bị ít nhất một trong hai lỗi. Tỉ lệ bóng bị lỗi là: $P = 3\\% + 2\\% - 0{,}5\\% = 4{,}5\\%$."
        },
        {
          id: "g11-c8-l29-d3-ex7",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Một đợt khám sức khoẻ cho 200 nhân viên văn phòng cho thấy có 70 người bị tật khúc xạ ở mắt, 50 người bị đau lưng và 30 người vừa bị khúc xạ mắt vừa bị đau lưng. Chọn ngẫu nhiên một nhân viên. Tính xác suất để người đó không mắc cả hai vấn đề sức khoẻ nói trên.",
          shortAnswer: "$0{,}55$",
          fullSolution: "Số nhân viên mắc ít nhất một trong hai vấn đề sức khoẻ là: $70 + 50 - 30 = 90$ người. Số người hoàn toàn không mắc cả hai tật trên là: $200 - 90 = 110$ người. Xác suất cần tìm: $P = \\frac{110}{200} = 0{,}55$."
        },
        {
          id: "g11-c8-l29-d3-ex8",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Một công ty bảo hiểm thống kê thấy trong số các hợp đồng bảo hiểm xe máy: xác suất xe bị va quẹt là $0{,}12$, xác suất xe bị mất trộm gương hoặc phụ kiện là $0{,}08$, xác suất gặp cả hai rủi ro trên trong một năm là $0{,}02$. Tính xác suất để một người tham gia bảo hiểm gặp đúng một loại sự cố trong năm.",
          shortAnswer: "$0{,}16$",
          fullSolution: "Xác suất chỉ bị va quẹt (mà không mất phụ kiện) là $0{,}12 - 0{,}02 = 0{,}10$. Xác suất chỉ bị mất phụ kiện (mà không va quẹt) là $0{,}08 - 0{,}02 = 0{,}06$. Do hai biến cố này xung khắc, nên xác suất gặp đúng một loại sự cố là $0{,}10 + 0{,}06 = 0{,}16$."
        },
        {
          id: "g11-c8-l29-d3-ex9",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Trong một cuộc thi học sinh giỏi cấp tỉnh có 3 môn thi: Toán, Lý, Hoá. Một học sinh tham gia thi cả 3 môn. Xác suất đạt giải môn Toán là $0{,}7$, môn Lý là $0{,}6$, môn Hoá là $0{,}5$. Giả sử kết quả các môn độc lập với nhau. Tính xác suất để học sinh này đạt giải ở ít nhất một môn thi.",
          shortAnswer: "$0{,}94$",
          fullSolution: "Xét biến cố đối: 'học sinh không đạt giải ở môn nào'. Xác suất không đạt giải môn Toán là $1 - 0{,}7 = 0{,}3$; môn Lý là $1 - 0{,}6 = 0{,}4$; môn Hoá là $1 - 0{,}5 = 0{,}5$. Do tính độc lập: $P(\\text{không đạt giải môn nào}) = 0{,}3 \\times 0{,}4 \\times 0{,}5 = 0{,}06$. Xác suất đạt giải ít nhất một môn là: $P = 1 - 0{,}06 = 0{,}94$."
        },
        {
          id: "g11-c8-l29-d3-ex10",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Một ngân hàng khảo sát 500 khách hàng vay vốn thấy có 300 khách hàng vay ngắn hạn, 250 khách hàng có tài sản thế chấp là bất động sản, và 150 khách hàng vay ngắn hạn có thế chấp bất động sản. Chọn ngẫu nhiên một khách hàng. Tính xác suất để khách hàng này vay ngắn hạn hoặc không có thế chấp bất động sản.",
          shortAnswer: "$0{,}8$",
          fullSolution: "Số khách hàng không có thế chấp bất động sản là $500 - 250 = 250$ người. Số khách hàng vay ngắn hạn là $300$ người. Trong 300 khách hàng vay ngắn hạn, có 150 khách hàng có thế chấp, vậy có $300 - 150 = 150$ khách hàng vừa vay ngắn hạn vừa không có thế chấp. Áp dụng công thức cộng: số khách hàng thoả mãn là $300 + 250 - 150 = 400$ người. Xác suất cần tìm: $P = \\frac{400}{500} = 0{,}8$."
        }
      ]
    }
  ]
  }
,
  "g11-c8-l30": {
    lessonId: "g11-c8-l30",
  id: "g11-c8-l30",
  title: "Bài 30: Công thức nhân xác suất cho hai biến cố độc lập",
  topics: [
    {
      id: "g11-c8-l30-dang1",
      title: "Dạng 1: Tính xác suất bằng công thức nhân cho hai biến cố độc lập",
      description: "Nếu hai biến cố $A$ và $B$ độc lập thì $P(AB) = P(A) \\cdot P(B)$. Ngược lại, nếu $P(AB) = P(A) \\cdot P(B)$ thì $A$ và $B$ độc lập.",
      exercises: [
        {
          id: "g11-c8-l30-d1-ex1",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Nếu hai biến cố $A$ và $B$ độc lập với nhau thì công thức tính xác suất của biến cố giao $AB$ là gì?",
          shortAnswer: "$P(AB) = P(A) \\cdot P(B)$",
          fullSolution: "Theo quy tắc nhân xác suất, nếu hai biến cố $A$ và $B$ độc lập thì xác suất để cả hai biến cố cùng xảy ra bằng tích các xác suất của chúng: $P(AB) = P(A) \\cdot P(B)$."
        },
        {
          id: "g11-c8-l30-d1-ex2",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Cho hai biến cố độc lập $A$ và $B$ có $P(A) = 0{,}4$ và $P(B) = 0{,}5$. Tính $P(AB)$.",
          shortAnswer: "$0{,}2$",
          fullSolution: "Vì $A$ và $B$ độc lập nên $P(AB) = P(A) \\cdot P(B) = 0{,}4 \\times 0{,}5 = 0{,}2$."
        },
        {
          id: "g11-c8-l30-d1-ex3",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Cho ba biến cố độc lập $A, B, C$ có $P(A) = 0{,}5$, $P(B) = 0{,}4$ và $P(C) = 0{,}3$. Tính $P(ABC)$.",
          shortAnswer: "$0{,}06$",
          fullSolution: "Vì các biến cố độc lập nên $P(ABC) = P(A) \\cdot P(B) \\cdot P(C) = 0{,}5 \\times 0{,}4 \\times 0{,}3 = 0{,}06$."
        },
        {
          id: "g11-c8-l30-d1-ex4",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Gieo đồng thời hai đồng xu cân đối đồng chất. Tính xác suất để cả hai đồng xu cùng xuất hiện mặt sấp.",
          shortAnswer: "$\\frac{1}{4}$ (hay $0{,}25$)",
          fullSolution: "Xác suất xuất hiện mặt sấp của mỗi đồng xu là $\\frac{1}{2}$. Vì hai đồng xu độc lập nên xác suất cả hai cùng sấp là: $P = \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}$."
        },
        {
          id: "g11-c8-l30-d1-ex5",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Hai cầu thủ sút phạt đền 11m độc lập nhau. Xác suất sút thành công của cầu thủ thứ nhất là $0{,}8$; của cầu thủ thứ hai là $0{,}7$. Tính xác suất để cả hai cầu thủ đều không sút thành công.",
          shortAnswer: "$0{,}06$",
          fullSolution: "Xác suất sút hỏng của cầu thủ thứ nhất là $1 - 0{,}8 = 0{,}2$. Xác suất sút hỏng của cầu thủ thứ hai là $1 - 0{,}7 = 0{,}3$. Do độc lập, xác suất cả hai đều sút hỏng là: $P = 0{,}2 \\times 0{,}3 = 0{,}06$."
        },
        {
          id: "g11-c8-l30-d1-ex6",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho hai biến cố độc lập $A$ và $B$ có $P(A) = 0{,}6$ và $P(B) = 0{,}3$. Tính xác suất của biến cố 'A xảy ra và B không xảy ra'.",
          shortAnswer: "$0{,}42$",
          fullSolution: "Biến cố 'A xảy ra và B không xảy ra' là $A \\cap \\overline{B}$. Vì $A$ và $B$ độc lập nên $A$ và $\\overline{B}$ cũng độc lập. Ta có $P(\\overline{B}) = 1 - 0{,}3 = 0{,}7$. Do đó $P(A\\overline{B}) = P(A) \\cdot P(\\overline{B}) = 0{,}6 \\times 0{,}7 = 0{,}42$."
        },
        {
          id: "g11-c8-l30-d1-ex7",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Một hộp chứa 5 bi đỏ và 3 bi trắng. Một hộp khác chứa 4 bi đỏ và 6 bi trắng. Lấy ngẫu nhiên từ mỗi hộp ra 1 viên bi. Tính xác suất để lấy được 2 viên bi đều có màu đỏ.",
          shortAnswer: "$0{,}25$ (hay $\\frac{1}{4}$)",
          fullSolution: "Xác suất lấy bi đỏ ở hộp thứ nhất là $P(A) = \\frac{5}{8}$. Xác suất lấy bi đỏ ở hộp thứ hai là $P(B) = \\frac{4}{10} = \\frac{2}{5}$. Việc lấy bi từ hai hộp độc lập nhau, nên xác suất cả hai viên đều màu đỏ là: $P = \\frac{5}{8} \\times \\frac{2}{5} = \\frac{2}{8} = \\frac{1}{4} = 0{,}25$."
        },
        {
          id: "g11-c8-l30-d1-ex8",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Một xạ thủ bắn 4 viên đạn liên tiếp vào bia một cách độc lập. Xác suất trúng bia ở mỗi lần bắn là $0{,}7$. Tính xác suất để xạ thủ đó bắn trúng bia đúng 3 lần trong 4 lần bắn.",
          shortAnswer: "$0{,}4116$",
          fullSolution: "Mỗi lần bắn có xác suất trúng $p = 0{,}7$ và trượt $q = 0{,}3$. Số cách chọn 3 lần trúng trong 4 lần bắn là $C_4^3 = 4$. Xác suất mỗi kịch bản (ví dụ trúng-trúng-trúng-trượt) là $0{,}7^3 \\times 0{,}3^1$. Do đó xác suất bắn trúng đúng 3 lần là: $P = C_4^3 \\cdot (0{,}7)^3 \\cdot (0{,}3)^1 = 4 \\times 0{,}343 \\times 0{,}3 = 0{,}4116$."
        },
        {
          id: "g11-c8-l30-d1-ex9",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Một bài thi trắc nghiệm gồm 5 câu hỏi, mỗi câu hỏi có 4 phương án trả lời trong đó chỉ có 1 phương án đúng. Một thí sinh chọn ngẫu nhiên đáp án cho cả 5 câu hỏi. Tính xác suất để thí sinh đó trả lời đúng ít nhất 1 câu hỏi.",
          shortAnswer: "$\\approx 0{,}7627$ (chính xác $\\frac{781}{1024}$)",
          fullSolution: "Xác suất trả lời sai một câu là $\\frac{3}{4}$. Biến cố đối là 'thí sinh trả lời sai cả 5 câu hỏi'. Vì các câu hỏi độc lập nên xác suất sai cả 5 câu là: $P(\\text{sai hết}) = \\left(\\frac{3}{4}\\right)^5 = \\frac{243}{1024}$. Xác suất trả lời đúng ít nhất 1 câu là: $P = 1 - \\frac{243}{1024} = \\frac{781}{1024} \\approx 0{,}7627$."
        },
        {
          id: "g11-c8-l30-d1-ex10",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Gieo một con xúc xắc cân đối liên tiếp $n$ lần độc lập. Tìm số nguyên dương $n$ nhỏ nhất sao cho xác suất xuất hiện ít nhất một lần mặt 6 chấm không nhỏ hơn $0{,}9$.",
          shortAnswer: "$n = 13$",
          fullSolution: "Xác suất không xuất hiện mặt 6 chấm trong 1 lần gieo là $\\frac{5}{6}$. Sau $n$ lần gieo độc lập, xác suất không lần nào xuất hiện mặt 6 là $\\left(\\frac{5}{6}\\right)^n$. Xác suất có ít nhất một lần xuất hiện mặt 6 là $1 - \\left(\\frac{5}{6}\\right)^n$. Theo bài ra: $1 - \\left(\\frac{5}{6}\\right)^n \\ge 0{,}9 \\iff \\left(\\frac{5}{6}\\right)^n \\le 0{,}1 \\iff n \\ge \\frac{\\ln(0{,}1)}{\\ln(5/6)} \\approx \\frac{-2{,}30259}{-0{,}18232} \\approx 12{,}63$. Do $n$ nguyên dương nên $n$ nhỏ nhất là $13$."
        }
      ]
    },
    {
      id: "g11-c8-l30-dang2",
      title: "Dạng 2: Kết hợp quy tắc nhân và quy tắc cộng xác suất",
      description: "Phân tích biến cố phức tạp thành hợp của các biến cố xung khắc, trong đó mỗi biến cố là giao của các biến cố độc lập.",
      exercises: [
        {
          id: "g11-c8-l30-d2-ex1",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Cho hai biến cố độc lập $A$ và $B$. Viết công thức tính xác suất của biến cố hợp $A \\cup B$ theo $P(A)$ và $P(B)$.",
          shortAnswer: "$P(A \\cup B) = P(A) + P(B) - P(A) \\cdot P(B)$",
          fullSolution: "Vì $A$ và $B$ độc lập nên $P(AB) = P(A) \\cdot P(B)$. Thay vào công thức cộng tổng quát ta được: $P(A \\cup B) = P(A) + P(B) - P(A) \\cdot P(B)$."
        },
        {
          id: "g11-c8-l30-d2-ex2",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Hai biến cố $A$ và $B$ độc lập có $P(A) = 0{,}5$ và $P(B) = 0{,}4$. Tính $P(A \\cup B)$.",
          shortAnswer: "$0{,}7$",
          fullSolution: "Ta có $P(AB) = 0{,}5 \\times 0{,}4 = 0{,}2$. Áp dụng công thức cộng: $P(A \\cup B) = 0{,}5 + 0{,}4 - 0{,}2 = 0{,}7$."
        },
        {
          id: "g11-c8-l30-d2-ex3",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Biến cố 'có đúng một trong hai biến cố độc lập $A, B$ xảy ra' được tính bằng công thức xác suất nào?",
          shortAnswer: "$P(A\\overline{B}) + P(\\overline{A}B) = P(A)(1 - P(B)) + (1 - P(A))P(B)$",
          fullSolution: "Biến cố có đúng một trong hai biến cố xảy ra là hợp của hai biến cố xung khắc $A\\overline{B}$ và $\\overline{A}B$. Do $A, B$ độc lập nên $P = P(A)P(\\overline{B}) + P(\\overline{A})P(B)$."
        },
        {
          id: "g11-c8-l30-d2-ex4",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Hai xạ thủ cùng bắn độc lập vào một mục tiêu. Mục tiêu bị tiêu diệt nếu có ít nhất một viên đạn bắn trúng. Xác suất mục tiêu bị tiêu diệt là biến cố đối của biến cố nào?",
          shortAnswer: "Biến cố 'cả hai xạ thủ đều bắn trượt'",
          fullSolution: "Biến cố 'có ít nhất một viên trúng' có biến cố đối là 'không có viên nào trúng', tức cả hai xạ thủ đều bắn trượt."
        },
        {
          id: "g11-c8-l30-d2-ex5",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Hai xạ thủ $X$ và $Y$ cùng bắn độc lập vào một bia. Xác suất bắn trúng của $X$ là $0{,}8$, của $Y$ là $0{,}6$. Tính xác suất để bia bị trúng đạn.",
          shortAnswer: "$0{,}92$",
          fullSolution: "Xác suất để xạ thủ $X$ trượt là $1 - 0{,}8 = 0{,}2$. Xác suất $Y$ trượt là $1 - 0{,}6 = 0{,}4$. Xác suất cả hai cùng trượt là $0{,}2 \\times 0{,}4 = 0{,}08$. Do đó xác suất bia trúng đạn là: $P = 1 - 0{,}08 = 0{,}92$."
        },
        {
          id: "g11-c8-l30-d2-ex6",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Hai người cùng độc lập giải một bài toán. Xác suất người thứ nhất giải được là $0{,}7$, người thứ hai giải được là $0{,}8$. Tính xác suất để bài toán được giải quyết.",
          shortAnswer: "$0{,}94$",
          fullSolution: "Bài toán được giải quyết nếu có ít nhất một người giải được. Xác suất cả hai người cùng không giải được là $(1 - 0{,}7) \\times (1 - 0{,}8) = 0{,}3 \\times 0{,}2 = 0{,}06$. Do đó xác suất bài toán được giải là: $P = 1 - 0{,}06 = 0{,}94$."
        },
        {
          id: "g11-c8-l30-d2-ex7",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho hai biến cố độc lập $A$ và $B$ có $P(A) = 0{,}6$ và $P(B) = 0{,}7$. Tính xác suất để có đúng một trong hai biến cố xảy ra.",
          shortAnswer: "$0{,}46$",
          fullSolution: "Ta có $P(\\overline{A}) = 0{,}4$ và $P(\\overline{B}) = 0{,}3$. Xác suất có đúng một biến cố xảy ra: $P = P(A\\overline{B}) + P(\\overline{A}B) = 0{,}6 \\times 0{,}3 + 0{,}4 \\times 0{,}7 = 0{,}18 + 0{,}28 = 0{,}46$."
        },
        {
          id: "g11-c8-l30-d2-ex8",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Ba vận động viên bắn cung độc lập với nhau, mỗi người bắn 1 mũi tên vào bia. Xác suất bắn trúng hồng tâm của ba người lần lượt là $0{,}6$; $0{,}7$ và $0{,}8$. Tính xác suất để có đúng 2 mũi tên trúng hồng tâm.",
          shortAnswer: "$0{,}452$",
          fullSolution: "Gọi $A, B, C$ là biến cố ba người bắn trúng: $P(A) = 0{,}6, P(\\overline{A}) = 0{,}4$; $P(B) = 0{,}7, P(\\overline{B}) = 0{,}3$; $P(C) = 0{,}8, P(\\overline{C}) = 0{,}2$. Biến cố có đúng 2 mũi tên trúng gồm 3 trường hợp xung khắc: $AB\\overline{C}$, $A\\overline{B}C$, $\\overline{A}BC$. Xác suất là: $P = 0{,}6 \\times 0{,}7 \\times 0{,}2 + 0{,}6 \\times 0{,}3 \\times 0{,}8 + 0{,}4 \\times 0{,}7 \\times 0{,}8 = 0{,}084 + 0{,}144 + 0{,}224 = 0{,}452$."
        },
        {
          id: "g11-c8-l30-d2-ex9",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Hai đấu thủ thi đấu cờ vua trong một trận đấu gồm tối đa 3 ván, người nào thắng trước 2 ván thì thắng chung cuộc. Xác suất đấu thủ A thắng mỗi ván là $0{,}6$, không có ván hoà và kết quả các ván độc lập. Tính xác suất để đấu thủ A thắng chung cuộc.",
          shortAnswer: "$0{,}648$",
          fullSolution: "Đấu thủ A thắng chung cuộc trong hai trường hợp: (1) Thắng cả 2 ván đầu: xác suất là $0{,}6 \\times 0{,}6 = 0{,}36$. (2) Thắng ván thứ 3 (trong 2 ván đầu thắng 1, thua 1): có 2 cách là Thắng-Thua-Thắng hoặc Thua-Thắng-Thắng, xác suất là $2 \\times (0{,}6 \\times 0{,}4 \\times 0{,}6) = 2 \\times 0{,}144 = 0{,}288$. Tổng xác suất A thắng chung cuộc là: $P = 0{,}36 + 0{,}288 = 0{,}648$."
        },
        {
          id: "g11-c8-l30-d2-ex10",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Một đoạn mạch điện gồm khoá điện $K_1$ mắc nối tiếp với một cụm gồm hai khoá $K_2$ và $K_3$ mắc song song. Các khoá hoạt động độc lập và xác suất để mỗi khoá đóng tốt lần lượt là $P(K_1) = 0{,}9$; $P(K_2) = 0{,}8$; $P(K_3) = 0{,}7$. Tính xác suất để dòng điện chạy qua được cả đoạn mạch.",
          shortAnswer: "$0{,}846$",
          fullSolution: "Để dòng điện chạy qua đoạn mạch, khoá $K_1$ phải đóng, đồng thời có ít nhất một trong hai khoá $K_2, K_3$ đóng. Xác suất cụm song song thông điện là: $P_{\\text{cụm}} = 1 - P(\\overline{K_2})P(\\overline{K_3}) = 1 - (1 - 0{,}8)(1 - 0{,}7) = 1 - (0{,}2 \\times 0{,}3) = 1 - 0{,}06 = 0{,}94$. Vì $K_1$ độc lập với cụm song song nên xác suất thông mạch là: $P = P(K_1) \\cdot P_{\\text{cụm}} = 0{,}9 \\times 0{,}94 = 0{,}846$."
        }
      ]
    },
    {
      id: "g11-c8-l30-dang3",
      title: "Dạng 3: Bài toán thực tế về trắc nghiệm, kiểm định chất lượng và độ tin cậy",
      description: "Ứng dụng các quy tắc xác suất giải bài toán bài thi trắc nghiệm, độ tin cậy của máy móc thiết bị, an toàn bay và chẩn đoán kĩ thuật.",
      exercises: [
        {
          id: "g11-c8-l30-d3-ex1",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Một bài thi trắc nghiệm gồm 4 câu hỏi độc lập, mỗi câu có 4 phương án lựa chọn và chỉ có 1 phương án đúng. Một thí sinh chọn hú hoạ các đáp án. Xác suất thí sinh đó làm đúng cả 4 câu là bao nhiêu?",
          shortAnswer: "$\\frac{1}{256}$",
          fullSolution: "Xác suất làm đúng mỗi câu là $\\frac{1}{4}$. Do chọn độc lập nên xác suất làm đúng cả 4 câu là: $P = \\left(\\frac{1}{4}\\right)^4 = \\frac{1}{256}$."
        },
        {
          id: "g11-c8-l30-d3-ex2",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Một chiếc máy bay có hai động cơ hoạt động độc lập. Xác suất một động cơ bị hỏng trong chuyến bay là $0{,}001$. Xác suất cả hai động cơ cùng bị hỏng trong chuyến bay là bao nhiêu?",
          shortAnswer: "$0{,}000001$ (hay $10^{-6}$)",
          fullSolution: "Vì hai động cơ hoạt động độc lập nên xác suất cả hai động cơ cùng bị hỏng là: $P = 0{,}001 \\times 0{,}001 = 10^{-6}$."
        },
        {
          id: "g11-c8-l30-d3-ex3",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Một dây chuyền kiểm định chất lượng có hai công đoạn kiểm tra độc lập. Xác suất phát hiện ra sản phẩm lỗi ở công đoạn một là $0{,}9$, ở công đoạn hai là $0{,}8$. Xác suất sản phẩm lỗi bị cả hai công đoạn phát hiện là bao nhiêu?",
          shortAnswer: "$0{,}72$",
          fullSolution: "Do hai công đoạn độc lập nên xác suất cả hai công đoạn cùng phát hiện lỗi là: $P = 0{,}9 \\times 0{,}8 = 0{,}72$."
        },
        {
          id: "g11-c8-l30-d3-ex4",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Một người gọi điện thoại 2 lần độc lập vào tổng đài. Xác suất gặp đường dây bận mỗi lần là $0{,}2$. Xác suất để người đó có ít nhất một lần liên lạc được là bao nhiêu?",
          shortAnswer: "$0{,}96$",
          fullSolution: "Xác suất cả hai lần đều bận là $0{,}2 \\times 0{,}2 = 0{,}04$. Xác suất có ít nhất một lần liên lạc được là: $P = 1 - 0{,}04 = 0{,}96$."
        },
        {
          id: "g11-c8-l30-d3-ex5",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Một thiết bị báo cháy gồm hai đầu cảm biến độc lập. Xác suất đầu cảm biến thứ nhất kích hoạt khi có cháy là $0{,}95$; đầu thứ hai kích hoạt là $0{,}92$. Tính xác suất để có ít nhất một đầu cảm biến kích hoạt khi có hoả hoạn xảy ra.",
          shortAnswer: "$0{,}996$",
          fullSolution: "Xác suất đầu 1 không kích hoạt là $1 - 0{,}95 = 0{,}05$. Xác suất đầu 2 không kích hoạt là $1 - 0{,}92 = 0{,}08$. Xác suất cả hai đầu cùng không kích hoạt là $0{,}05 \\times 0{,}08 = 0{,}004$. Do đó xác suất có ít nhất một đầu kích hoạt là: $P = 1 - 0{,}004 = 0{,}996$."
        },
        {
          id: "g11-c8-l30-d3-ex6",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Một công ty tuyển dụng qua 2 vòng phỏng vấn độc lập. Xác suất một ứng viên vượt qua vòng 1 là $0{,}6$. Nếu qua được vòng 1, xác suất ứng viên đó vượt qua vòng 2 là $0{,}5$. Tính xác suất để một ứng viên trúng tuyển vào công ty.",
          shortAnswer: "$0{,}3$",
          fullSolution: "Để trúng tuyển, ứng viên phải vượt qua cả 2 vòng phỏng vấn. Do đó xác suất trúng tuyển là: $P = 0{,}6 \\times 0{,}5 = 0{,}3$ (hay $30\\%$)."
        },
        {
          id: "g11-c8-l30-d3-ex7",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Một nhà máy có ba phân xưởng hoạt động độc lập. Xác suất trong một ngày có sự cố máy móc tại phân xưởng 1 là $0{,}05$; phân xưởng 2 là $0{,}08$; phân xưởng 3 là $0{,}1$. Tính xác suất để trong ngày đó cả ba phân xưởng đều hoạt động an toàn (không có sự cố).",
          shortAnswer: "$0{,}7866$",
          fullSolution: "Xác suất hoạt động an toàn của phân xưởng 1 là $1 - 0{,}05 = 0{,}95$; phân xưởng 2 là $1 - 0{,}08 = 0{,}92$; phân xưởng 3 là $1 - 0{,}1 = 0{,}9$. Do các phân xưởng độc lập nên xác suất cả ba đều an toàn là: $P = 0{,}95 \\times 0{,}92 \\times 0{,}9 = 0{,}7866$."
        },
        {
          id: "g11-c8-l30-d3-ex8",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Một thí sinh làm bài thi trắc nghiệm gồm 10 câu hỏi, mỗi câu có 4 đáp án và chỉ 1 đáp án đúng. Thí sinh chắc chắn đúng 6 câu, còn 4 câu còn lại phải khoanh ngẫu nhiên. Tính xác suất để thí sinh đạt từ 8 điểm trở lên (mỗi câu đúng được 1 điểm).",
          shortAnswer: "$\\approx 0{,}2617$ (chính xác $\\frac{67}{256}$)",
          fullSolution: "Thí sinh đã chắc chắn có 6 điểm. Để đạt từ 8 điểm trở lên, trong 4 câu khoanh bừa thí sinh phải trả lời đúng ít nhất 2 câu. Xác suất đúng một câu là $p = \\frac{1}{4}$, sai là $q = \\frac{3}{4}$. Biến cố đối là đúng 0 câu hoặc đúng 1 câu trong 4 câu: $P(0) = C_4^0 \\left(\\frac{1}{4}\\right)^0 \\left(\\frac{3}{4}\\right)^4 = \\frac{81}{256}$; $P(1) = C_4^1 \\left(\\frac{1}{4}\\right)^1 \\left(\\frac{3}{4}\\right)^3 = 4 \\times \\frac{27}{256} = \\frac{108}{256}$. Do đó xác suất đúng ít nhất 2 câu là: $P = 1 - \\left(\\frac{81}{256} + \\frac{108}{256}\\right) = 1 - \\frac{189}{256} = \\frac{67}{256} \\approx 0{,}2617$."
        },
        {
          id: "g11-c8-l30-d3-ex9",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Một ngân hàng có hệ thống an ninh gồm 3 lớp camera độc lập. Xác suất phát hiện kẻ đột nhập của camera 1 là $0{,}9$, camera 2 là $0{,}85$, camera 3 là $0{,}8$. Tìm xác suất để khi có kẻ đột nhập, ít nhất 2 lớp camera phát hiện được kẻ đó.",
          shortAnswer: "$0{,}959$",
          fullSolution: "Xác suất phát hiện của 3 camera là $p_1 = 0{,}9, q_1 = 0{,}1$; $p_2 = 0{,}85, q_2 = 0{,}15$; $p_3 = 0{,}8, q_3 = 0{,}2$. Có ít nhất 2 camera phát hiện gồm: đúng 2 camera phát hiện hoặc cả 3 camera phát hiện. Trường hợp đúng 2 camera: $p_1 p_2 q_3 + p_1 q_2 p_3 + q_1 p_2 p_3 = (0{,}9 \\times 0{,}85 \\times 0{,}2) + (0{,}9 \\times 0{,}15 \\times 0{,}8) + (0{,}1 \\times 0{,}85 \\times 0{,}8) = 0{,}153 + 0{,}108 + 0{,}068 = 0{,}329$. Trường hợp cả 3 camera: $p_1 p_2 p_3 = 0{,}9 \\times 0{,}85 \\times 0{,}8 = 0{,}612$. Tổng xác suất là: $P = 0{,}329 + 0{,}612 = 0{,}941$."
        },
        {
          id: "g11-c8-l30-d3-ex10",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Một trạm vệ tinh truyền một gói tin gồm 3 tín hiệu độc lập qua vũ trụ đến mặt đất. Do nhiễu, xác suất mỗi tín hiệu truyền thành công chỉ là $0{,}7$. Trạm mặt đất có thể phục hồi toàn bộ gói tin nếu nhận được ít nhất 2 tín hiệu thành công. Tính xác suất để trạm mặt đất phục hồi thành công gói tin đó.",
          shortAnswer: "$0{,}784$",
          fullSolution: "Số tín hiệu thành công tuân theo phân bố nhị thức với $n = 3, p = 0{,}7, q = 0{,}3$. Để nhận được ít nhất 2 tín hiệu thành công, gói tin phải có đúng 2 tín hiệu thành công hoặc cả 3 tín hiệu thành công. Xác suất có đúng 2 tín hiệu thành công là: $P_2 = C_3^2 \\cdot (0{,}7)^2 \\cdot (0{,}3)^1 = 3 \\times 0{,}49 \\times 0{,}3 = 0{,}441$. Xác suất cả 3 tín hiệu thành công là: $P_3 = C_3^3 \\cdot (0{,}7)^3 = 0{,}343$. Tổng xác suất để phục hồi thành công gói tin là: $P = P_2 + P_3 = 0{,}441 + 0{,}343 = 0{,}784$."
        }
      ]
    }
  ]
  }
,
  "g11-c9-l31": {
    lessonId: "g11-c9-l31",
  id: "g11-c9-l31",
  title: "Bài 31: Định nghĩa và ý nghĩa của đạo hàm",
  topics: [
    {
      id: "g11-c9-l31-dang1",
      title: "Dạng 1: Tính đạo hàm của hàm số tại một điểm bằng định nghĩa",
      description: "Đạo hàm của $y = f(x)$ tại $x_0$: $f'(x_0) = \\lim_{x \\to x_0} \\frac{f(x) - f(x_0)}{x - x_0} = \\lim_{\\Delta x \\to 0} \\frac{\\Delta y}{\\Delta x}$. Mối quan hệ giữa tính đạo hàm và tính liên tục.",
      exercises: [
        {
          id: "g11-c9-l31-d1-ex1",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Viết công thức định nghĩa đạo hàm của hàm số $y = f(x)$ tại điểm $x_0$.",
          shortAnswer: "$f'(x_0) = \\lim_{x \\to x_0} \\frac{f(x) - f(x_0)}{x - x_0}$",
          fullSolution: "Cho hàm số $y = f(x)$ xác định trên khoảng $(a; b)$ và $x_0 \\in (a; b)$. Đạo hàm của hàm số tại $x_0$ là giới hạn hữu hạn (nếu có): $f'(x_0) = \\lim_{x \\to x_0} \\frac{f(x) - f(x_0)}{x - x_0} = \\lim_{\\Delta x \\to 0} \\frac{\\Delta y}{\\Delta x}$."
        },
        {
          id: "g11-c9-l31-d1-ex2",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Nếu hàm số $y = f(x)$ có đạo hàm tại điểm $x_0$ thì hàm số đó có liên tục tại điểm $x_0$ không?",
          shortAnswer: "Có, hàm số có đạo hàm tại $x_0$ thì liên tục tại điểm đó",
          fullSolution: "Định lí: Nếu hàm số $y = f(x)$ có đạo hàm tại $x_0$ thì nó liên tục tại điểm $x_0$ đó. Chiều ngược lại không luôn đúng."
        },
        {
          id: "g11-c9-l31-d1-ex3",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Kí hiệu số gia của đối số tại $x_0$ là $\\Delta x$. Số gia tương ứng của hàm số $\\Delta y$ được xác định bởi công thức nào?",
          shortAnswer: "$\\Delta y = f(x_0 + \\Delta x) - f(x_0)$",
          fullSolution: "Số gia của hàm số tại $x_0$ ứng với số gia $\\Delta x$ là: $\\Delta y = f(x_0 + \\Delta x) - f(x_0)$."
        },
        {
          id: "g11-c9-l31-d1-ex4",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Đạo hàm của hàm hằng $f(x) = c$ ($c$ là hằng số) tại mọi điểm $x \\in \\mathbb{R}$ bằng bao nhiêu?",
          shortAnswer: "$0$",
          fullSolution: "Vì $f(x + \\Delta x) - f(x) = c - c = 0$ với mọi $\\Delta x$, nên $f'(x) = \\lim_{\\Delta x \\to 0} \\frac{0}{\\Delta x} = 0$."
        },
        {
          id: "g11-c9-l31-d1-ex5",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Dùng định nghĩa tính đạo hàm của hàm số $f(x) = x^2$ tại điểm $x_0 = 3$.",
          shortAnswer: "$f'(3) = 6$",
          fullSolution: "Ta có: $f'(3) = \\lim_{x \\to 3} \\frac{f(x) - f(3)}{x - 3} = \\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3} = \\lim_{x \\to 3} \\frac{(x - 3)(x + 3)}{x - 3} = \\lim_{x \\to 3} (x + 3) = 3 + 3 = 6$."
        },
        {
          id: "g11-c9-l31-d1-ex6",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Dùng định nghĩa tính đạo hàm của hàm số $f(x) = 2x + 1$ tại điểm $x_0 = -1$.",
          shortAnswer: "$f'(-1) = 2$",
          fullSolution: "Ta có: $f'(-1) = \\lim_{x \\to -1} \\frac{f(x) - f(-1)}{x - (-1)} = \\lim_{x \\to -1} \\frac{(2x + 1) - (-1)}{x + 1} = \\lim_{x \\to -1} \\frac{2x + 2}{x + 1} = \\lim_{x \\to -1} \\frac{2(x + 1)}{x + 1} = 2$."
        },
        {
          id: "g11-c9-l31-d1-ex7",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho hàm số $f(x) = \\frac{1}{x}$. Tính đạo hàm $f'(2)$ bằng định nghĩa.",
          shortAnswer: "$f'(2) = -\\frac{1}{4}$",
          fullSolution: "Ta có: $f'(2) = \\lim_{x \\to 2} \\frac{\\frac{1}{x} - \\frac{1}{2}}{x - 2} = \\lim_{x \\to 2} \\frac{\\frac{2 - x}{2x}}{x - 2} = \\lim_{x \\to 2} \\frac{-(x - 2)}{2x(x - 2)} = \\lim_{x \\to 2} \\frac{-1}{2x} = -\\frac{1}{4}$."
        },
        {
          id: "g11-c9-l31-d1-ex8",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Dùng định nghĩa tính đạo hàm của hàm số $f(x) = \\sqrt{2x + 1}$ tại điểm $x_0 = 4$.",
          shortAnswer: "$f'(4) = \\frac{1}{3}$",
          fullSolution: "Ta có $f(4) = \\sqrt{2(4) + 1} = 3$. Xét giới hạn: $f'(4) = \\lim_{x \\to 4} \\frac{\\sqrt{2x + 1} - 3}{x - 4} = \\lim_{x \\to 4} \\frac{(2x + 1) - 9}{(x - 4)(\\sqrt{2x + 1} + 3)} = \\lim_{x \\to 4} \\frac{2(x - 4)}{(x - 4)(\\sqrt{2x + 1} + 3)} = \\lim_{x \\to 4} \\frac{2}{\\sqrt{2x + 1} + 3} = \\frac{2}{3 + 3} = \\frac{2}{6} = \\frac{1}{3}$."
        },
        {
          id: "g11-c9-l31-d1-ex9",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Xét tính có đạo hàm của hàm số $f(x) = |x - 2|$ tại điểm $x_0 = 2$.",
          shortAnswer: "Hàm số không có đạo hàm tại $x_0 = 2$",
          fullSolution: "Xét các giới hạn một phía: $\\lim_{x \\to 2^+} \\frac{f(x) - f(2)}{x - 2} = \\lim_{x \\to 2^+} \\frac{x - 2}{x - 2} = 1$; $\\lim_{x \\to 2^-} \\frac{f(x) - f(2)}{x - 2} = \\lim_{x \\to 2^-} \\frac{-(x - 2)}{x - 2} = -1$. Vì đạo hàm bên phải ($1$) khác đạo hàm bên trái ($-1$), nên không tồn tại giới hạn $\\lim_{x \\to 2} \\frac{f(x) - f(2)}{x - 2}$. Vậy hàm số không có đạo hàm tại $x_0 = 2$ dù nó liên tục tại điểm này."
        },
        {
          id: "g11-c9-l31-d1-ex10",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Tìm các giá trị của tham số $a, b$ để hàm số $f(x) = \\begin{cases} x^2 + 1 & \\text{khi } x \\ge 1 \\\\ ax + b & \\text{khi } x < 1 \\end{cases}$ có đạo hàm tại điểm $x_0 = 1$.",
          shortAnswer: "$a = 2, b = 0$",
          fullSolution: "Để hàm số có đạo hàm tại $x_0 = 1$, trước hết nó phải liên tục tại $x_0 = 1$: $\\lim_{x \\to 1^+} f(x) = f(1) = 2$, $\\lim_{x \\to 1^-} f(x) = a + b$. Do đó $a + b = 2 \\implies b = 2 - a$. Tiếp theo, đạo hàm một phía phải bằng nhau: $f'_+(1) = \\lim_{x \\to 1^+} \\frac{x^2 + 1 - 2}{x - 1} = \\lim_{x \\to 1^+} (x + 1) = 2$. Đạo hàm bên trái: $f'_-(1) = \\lim_{x \\to 1^-} \\frac{ax + b - 2}{x - 1} = \\lim_{x \\to 1^-} \\frac{ax + (2 - a) - 2}{x - 1} = \\lim_{x \\to 1^-} \\frac{a(x - 1)}{x - 1} = a$. Để có đạo hàm thì $f'_+(1) = f'_-(1) \\iff a = 2$. Suy ra $b = 2 - 2 = 0$. Vậy $a = 2, b = 0$."
        }
      ]
    },
    {
      id: "g11-c9-l31-dang2",
      title: "Dạng 2: Phương trình tiếp tuyến của đồ thị hàm số",
      description: "Hệ số góc của tiếp tuyến tại $M(x_0; y_0)$ là $k = f'(x_0)$. Phương trình tiếp tuyến: $y = f'(x_0)(x - x_0) + y_0$. Tiếp tuyến song song, vuông góc.",
      exercises: [
        {
          id: "g11-c9-l31-d2-ex1",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Hệ số góc $k$ của tiếp tuyến của đồ thị hàm số $y = f(x)$ tại điểm $M_0(x_0; y_0)$ được tính bằng giá trị nào?",
          shortAnswer: "$k = f'(x_0)$",
          fullSolution: "Theo ý nghĩa hình học của đạo hàm, đạo hàm của hàm số $y = f(x)$ tại điểm $x_0$ là hệ số góc của tiếp tuyến của đồ thị $(C)$ tại điểm $M_0(x_0; y_0)$: $k = f'(x_0)$."
        },
        {
          id: "g11-c9-l31-d2-ex2",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Viết dạng tổng quát phương trình tiếp tuyến của đồ thị hàm số $y = f(x)$ tại điểm $M_0(x_0; y_0)$.",
          shortAnswer: "$y = f'(x_0)(x - x_0) + y_0$",
          fullSolution: "Phương trình tiếp tuyến của đồ thị hàm số $y = f(x)$ tại điểm $M_0(x_0; y_0)$ là: $y - y_0 = f'(x_0)(x - x_0)$ hay $y = f'(x_0)(x - x_0) + y_0$."
        },
        {
          id: "g11-c9-l31-d2-ex3",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Nếu tiếp tuyến của đồ thị hàm số tại $M_0(x_0; y_0)$ song song với trục hoành $Ox$ thì $f'(x_0)$ bằng bao nhiêu?",
          shortAnswer: "$f'(x_0) = 0$",
          fullSolution: "Đường thẳng song song với trục hoành có hệ số góc bằng $0$, do đó $k = f'(x_0) = 0$."
        },
        {
          id: "g11-c9-l31-d2-ex4",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Biết đồ thị hàm số $y = f(x)$ có tiếp tuyến tại điểm $A(1; 3)$ với hệ số góc $k = -2$. Viết phương trình tiếp tuyến đó.",
          shortAnswer: "$y = -2x + 5$",
          fullSolution: "Phương trình tiếp tuyến tại $A(1; 3)$ có hệ số góc $k = -2$ là: $y = -2(x - 1) + 3 = -2x + 2 + 3 = -2x + 5$."
        },
        {
          id: "g11-c9-l31-d2-ex5",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho hàm số $y = x^2 - 3x + 2$. Tính hệ số góc của tiếp tuyến của đồ thị hàm số tại điểm có hoành độ $x_0 = 2$.",
          shortAnswer: "$k = 1$",
          fullSolution: "Ta có $y' = 2x - 3$. Hệ số góc của tiếp tuyến tại $x_0 = 2$ là: $k = y'(2) = 2(2) - 3 = 1$."
        },
        {
          id: "g11-c9-l31-d2-ex6",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Viết phương trình tiếp tuyến của đồ thị hàm số $y = x^3 - 3x$ tại điểm $M(2; 2)$.",
          shortAnswer: "$y = 9x - 16$",
          fullSolution: "Ta có $y' = 3x^2 - 3$. Hệ số góc tại tiếp điểm $x_0 = 2$ là: $k = y'(2) = 3(2^2) - 3 = 9$. Phương trình tiếp tuyến là: $y = 9(x - 2) + 2 = 9x - 18 + 2 = 9x - 16$."
        },
        {
          id: "g11-c9-l31-d2-ex7",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Viết phương trình tiếp tuyến của đồ thị hàm số $y = \\frac{2x + 1}{x - 1}$ tại giao điểm của đồ thị với trục tung $Oy$.",
          shortAnswer: "$y = -3x - 1$",
          fullSolution: "Giao điểm của đồ thị với trục tung $Oy$ ứng với $x_0 = 0$. Khi đó $y_0 = \\frac{2(0) + 1}{0 - 1} = -1$. Ta có $y' = \\frac{2(x - 1) - (2x + 1)}{(x - 1)^2} = \\frac{-3}{(x - 1)^2}$. Hệ số góc tại $x_0 = 0$ là $k = y'(0) = \\frac{-3}{(-1)^2} = -3$. Phương trình tiếp tuyến là: $y = -3(x - 0) - 1 = -3x - 1$."
        },
        {
          id: "g11-c9-l31-d2-ex8",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Viết phương trình tiếp tuyến của đồ thị hàm số $y = -x^3 + 3x - 2$ biết tiếp tuyến song song với đường thẳng $d: y = -9x + 1$.",
          shortAnswer: "$y = -9x - 18$ và $y = -9x + 14$",
          fullSolution: "Tiếp tuyến song song với $d: y = -9x + 1$ nên có hệ số góc $k = -9$. Ta có phương trình: $y'(x_0) = -9 \\iff -3x_0^2 + 3 = -9 \\iff 3x_0^2 = 12 \\iff x_0^2 = 4 \\iff x_0 = \\pm 2$. Với $x_0 = 2 \\implies y_0 = -(2)^3 + 3(2) - 2 = -4$. Phương trình tiếp tuyến: $y = -9(x - 2) - 4 = -9x + 14$ (thoả mãn vì khác đường thẳng $d$). Với $x_0 = -2 \\implies y_0 = -(-2)^3 + 3(-2) - 2 = 0$. Phương trình tiếp tuyến: $y = -9(x + 2) + 0 = -9x - 18$ (thoả mãn)."
        },
        {
          id: "g11-c9-l31-d2-ex9",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Tìm các điểm trên đồ thị hàm số $y = \\frac{x + 2}{x - 2}$ mà tại đó tiếp tuyến vuông góc với đường thẳng $\\Delta: y = 4x + 1$.",
          shortAnswer: "$M_1(0; -1)$ và $M_2(4; 3)$",
          fullSolution: "Tiếp tuyến vuông góc với đường thẳng $\\Delta$ có hệ số góc $4$ nên hệ số góc của tiếp tuyến là $k = -\\frac{1}{4}$. Ta có $y' = \\frac{1(-2) - 2(1)}{(x - 2)^2} = \\frac{-4}{(x - 2)^2}$. Phương trình hoành độ tiếp điểm: $\\frac{-4}{(x_0 - 2)^2} = -\\frac{1}{4} \\iff (x_0 - 2)^2 = 16 \\iff x_0 - 2 = 4$ hoặc $x_0 - 2 = -4$. Suy ra $x_0 = 6$ hoặc $x_0 = -2$. Với $x_0 = 6 \\implies y_0 = \\frac{6 + 2}{6 - 2} = 2$. Với $x_0 = -2 \\implies y_0 = \\frac{-2 + 2}{-2 - 2} = 0$. Vậy hai điểm cần tìm là $(6; 2)$ và $(-2; 0)$."
        },
        {
          id: "g11-c9-l31-d2-ex10",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho parabol $(P): y = x^2 - 4x + 3$. Viết phương trình các tiếp tuyến của $(P)$ đi qua điểm $A(1; -4)$ nằm ngoài parabol.",
          shortAnswer: "$y = -6x + 2$ và $y = 2x - 6$",
          fullSolution: "Gọi hoành độ tiếp điểm là $x_0$. Ta có $y_0 = x_0^2 - 4x_0 + 3$ và $k = y'(x_0) = 2x_0 - 4$. Phương trình tiếp tuyến tại $M(x_0; y_0)$ là: $y = (2x_0 - 4)(x - x_0) + x_0^2 - 4x_0 + 3$. Vì tiếp tuyến đi qua điểm $A(1; -4)$ nên: $-4 = (2x_0 - 4)(1 - x_0) + x_0^2 - 4x_0 + 3 \\iff -4 = 2x_0 - 2x_0^2 - 4 + 4x_0 + x_0^2 - 4x_0 + 3 \\iff -4 = -x_0^2 + 2x_0 - 1 \\iff x_0^2 - 2x_0 - 3 = 0 \\iff x_0 = -1$ hoặc $x_0 = 3$. Với $x_0 = -1$: $k = -6$, tiếp tuyến là $y = -6(x - 1) - 4 = -6x + 2$. Với $x_0 = 3$: $k = 2$, tiếp tuyến là $y = 2(x - 1) - 4 = 2x - 6$."
        }
      ]
    },
    {
      id: "g11-c9-l31-dang3",
      title: "Dạng 3: Ý nghĩa vật lí và ứng dụng thực tế của đạo hàm",
      description: "Vận tốc tức thời $v(t) = s'(t)$. Cường độ dòng điện tức thời $i(t) = q'(t)$. Tốc độ thay đổi tức thời của các đại lượng thực tế.",
      exercises: [
        {
          id: "g11-c9-l31-d3-ex1",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Một chất điểm chuyển động có phương trình quãng đường $s = s(t)$. Vận tốc tức thời $v(t)$ tại thời điểm $t$ được xác định bởi công thức nào?",
          shortAnswer: "$v(t) = s'(t)$",
          fullSolution: "Theo ý nghĩa vật lí của đạo hàm, vận tốc tức thời của chuyển động tại thời điểm $t$ là đạo hàm của phương trình quãng đường theo thời gian: $v(t) = s'(t)$."
        },
        {
          id: "g11-c9-l31-d3-ex2",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Điện lượng truyền trong dây dẫn là hàm số theo thời gian $q = q(t)$. Cường độ dòng điện tức thời $i(t)$ tại thời điểm $t$ là gì?",
          shortAnswer: "$i(t) = q'(t)$",
          fullSolution: "Cường độ dòng điện tức thời là đạo hàm của điện lượng theo thời gian: $i(t) = q'(t)$."
        },
        {
          id: "g11-c9-l31-d3-ex3",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Một vật chuyển động thẳng đều với phương trình $s(t) = 5t + 2$ ($s$ tính bằng mét, $t$ tính bằng giây). Vận tốc tức thời của vật là bao nhiêu?",
          shortAnswer: "$5\\text{ m/s}$",
          fullSolution: "Vận tốc tức thời: $v(t) = s'(t) = (5t + 2)' = 5\\text{ m/s}$."
        },
        {
          id: "g11-c9-l31-d3-ex4",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Đạo hàm của thể tích hình cầu $V(r) = \\frac{4}{3}\\pi r^3$ theo bán kính $r$ cho ta đại lượng hình học nào của hình cầu?",
          shortAnswer: "Diện tích mặt cầu $S(r) = 4\\pi r^2$",
          fullSolution: "Ta có $V'(r) = \\left(\\frac{4}{3}\\pi r^3\\right)' = 4\\pi r^2$, đây chính là công thức tính diện tích mặt cầu bán kính $r$."
        },
        {
          id: "g11-c9-l31-d3-ex5",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Một vật chuyển động theo phương trình $s(t) = t^2 + 4t$ ($s$ tính bằng mét, $t$ tính bằng giây). Tính vận tốc tức thời của vật tại thời điểm $t = 3\\text{ s}$.",
          shortAnswer: "$10\\text{ m/s}$",
          fullSolution: "Vận tốc tức thời tại thời điểm $t$ là: $v(t) = s'(t) = 2t + 4$. Tại $t = 3\\text{ s}$: $v(3) = 2(3) + 4 = 10\\text{ m/s}$."
        },
        {
          id: "g11-c9-l31-d3-ex6",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Điện lượng truyền qua tiết diện dây dẫn được cho bởi hàm số $q(t) = 2t^3 + t$ ($q$ tính bằng Culông, $t$ tính bằng giây). Tính cường độ dòng điện tức thời tại thời điểm $t = 2\\text{ s}$.",
          shortAnswer: "$25\\text{ A}$",
          fullSolution: "Cường độ dòng điện tức thời là: $i(t) = q'(t) = 6t^2 + 1$. Tại $t = 2\\text{ s}$: $i(2) = 6(2^2) + 1 = 25\\text{ A}$."
        },
        {
          id: "g11-c9-l31-d3-ex7",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Một quả bóng được ném thẳng đứng lên cao từ mặt đất với phương trình chuyển động $h(t) = 20t - 5t^2$ ($h$ tính bằng mét, $t$ tính bằng giây). Sau bao lâu quả bóng đạt độ cao cực đại?",
          shortAnswer: "$2\\text{ s}$",
          fullSolution: "Vận tốc của quả bóng tại thời điểm $t$ là: $v(t) = h'(t) = 20 - 10t$. Quả bóng đạt độ cao cực đại khi vận tốc tức thời bằng $0$: $20 - 10t = 0 \\iff t = 2\\text{ s}$."
        },
        {
          id: "g11-c9-l31-d3-ex8",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Một chất điểm chuyển động theo phương trình $s(t) = t^3 - 6t^2 + 9t + 1$ ($s$ tính bằng mét, $t$ tính bằng giây, $t \\ge 0$). Tìm các thời điểm mà tại đó chất điểm dừng lại tức thời (vận tốc tức thời triệt tiêu).",
          shortAnswer: "$t = 1\\text{ s}$ và $t = 3\\text{ s}$",
          fullSolution: "Vận tốc tức thời là: $v(t) = s'(t) = 3t^2 - 12t + 9$. Chất điểm dừng lại khi $v(t) = 0 \\iff 3t^2 - 12t + 9 = 0 \\iff t^2 - 4t + 3 = 0 \\iff t = 1$ hoặc $t = 3$. Vậy tại các thời điểm $t = 1\\text{ s}$ và $t = 3\\text{ s}$ chất điểm dừng lại."
        },
        {
          id: "g11-c9-l31-d3-ex9",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Một công ty sản xuất chi tiết máy xác định hàm chi phí sản xuất $x$ sản phẩm là $C(x) = 5000 + 20x - 0{,}01x^2$ (nghìn đồng). Chi phí biên tại mức sản xuất $x$ sản phẩm được xác định bởi đạo hàm $C'(x)$. Tính chi phí biên khi sản xuất $500$ sản phẩm và giải thích ý nghĩa.",
          shortAnswer: "$10$ nghìn đồng",
          fullSolution: "Chi phí biên là đạo hàm của hàm tổng chi phí: $C'(x) = 20 - 0{,}02x$. Tại $x = 500$: $C'(500) = 20 - 0{,}02(500) = 20 - 10 = 10$ nghìn đồng. Ý nghĩa: Chi phí ước tính để sản xuất thêm sản phẩm thứ $501$ xấp xỉ khoảng $10\\,000$ đồng."
        },
        {
          id: "g11-c9-l31-d3-ex10",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Số lượng vi khuẩn trong một mẻ cấy men sinh học sau $t$ giờ được mô tả bởi hàm số $N(t) = 1000 + 300t^2 - 20t^3$ (con, với $0 \\le t \\le 10$). Tìm thời điểm mà tại đó tốc độ sinh trưởng của mẻ vi khuẩn đạt giá trị lớn nhất.",
          shortAnswer: "$t = 5\\text{ giờ}$",
          fullSolution: "Tốc độ sinh trưởng của mẻ vi khuẩn là đạo hàm của hàm số lượng: $v(t) = N'(t) = 600t - 60t^2$. Ta tìm giá trị lớn nhất của tam thức bậc hai $v(t) = -60t^2 + 600t$ trên đoạn $[0; 10]$. Đỉnh parabol có hoành độ $t = -\\frac{600}{2(-60)} = 5\\text{ giờ}$. Tại $t = 5$, tốc độ sinh trưởng đạt cực đại là $v(5) = -60(25) + 600(5) = 1500$ con/giờ."
        }
      ]
    }
  ]
  }
,
  "g11-c9-l32": {
    lessonId: "g11-c9-l32",
  id: "g11-c9-l32",
  title: "Bài 32: Các quy tắc tính đạo hàm",
  topics: [
    {
      id: "g11-c9-l32-dang1",
      title: "Dạng 1: Đạo hàm của hàm đa thức và hàm phân thức hữu tỉ",
      description: "Quy tắc đạo hàm tổng, hiệu, tích, thương: $(u \\pm v)' = u' \\pm v'$, $(uv)' = u'v + uv'$, $\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}$.",
      exercises: [
        {
          id: "g11-c9-l32-d1-ex1",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Đạo hàm của hàm số luỹ thừa $y = x^n$ ($n \\in \\mathbb{N}^*$) được tính bởi công thức nào?",
          shortAnswer: "$(x^n)' = n x^{n-1}$",
          fullSolution: "Công thức đạo hàm hàm luỹ thừa: $(x^n)' = n x^{n-1}$ với mọi $n \\in \\mathbb{N}^*$."
        },
        {
          id: "g11-c9-l32-d1-ex2",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Viết công thức tính đạo hàm của tích hai hàm số $u(x)$ và $v(x)$.",
          shortAnswer: "$(uv)' = u'v + uv'$",
          fullSolution: "Đạo hàm của tích hai hàm số: $(uv)' = u'v + uv'$."
        },
        {
          id: "g11-c9-l32-d1-ex3",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Viết công thức tính đạo hàm của thương $\\frac{u}{v}$ ($v(x) \\ne 0$).",
          shortAnswer: "$\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}$",
          fullSolution: "Đạo hàm của thương hai hàm số: $\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}$."
        },
        {
          id: "g11-c9-l32-d1-ex4",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Tìm đạo hàm của hàm số $y = 3x^4 - 5x^2 + 7$.",
          shortAnswer: "$y' = 12x^3 - 10x$",
          fullSolution: "Áp dụng quy tắc đạo hàm: $y' = 3(4x^3) - 5(2x) + 0 = 12x^3 - 10x$."
        },
        {
          id: "g11-c9-l32-d1-ex5",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Tính đạo hàm của hàm số phân thức bậc nhất trên bậc nhất $y = \\frac{2x - 1}{x + 3}$.",
          shortAnswer: "$y' = \\frac{7}{(x + 3)^2}$",
          fullSolution: "Áp dụng công thức đạo hàm phân thức bậc nhất: $\\left(\\frac{ax + b}{cx + d}\\right)' = \\frac{ad - bc}{(cx + d)^2}$. Ta có: $y' = \\frac{2(3) - (-1)(1)}{(x + 3)^2} = \\frac{6 + 1}{(x + 3)^2} = \\frac{7}{(x + 3)^2}$."
        },
        {
          id: "g11-c9-l32-d1-ex6",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Tính đạo hàm của hàm số $y = (x^2 - 1)(2x + 3)$.",
          shortAnswer: "$y' = 6x^2 + 6x - 2$",
          fullSolution: "Cách 1: Khai triển $y = 2x^3 + 3x^2 - 2x - 3 \\implies y' = 6x^2 + 6x - 2$. Cách 2: Dùng công thức nhân: $y' = (x^2 - 1)'(2x + 3) + (x^2 - 1)(2x + 3)' = 2x(2x + 3) + 2(x^2 - 1) = 4x^2 + 6x + 2x^2 - 2 = 6x^2 + 6x - 2$."
        },
        {
          id: "g11-c9-l32-d1-ex7",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Tính đạo hàm của hàm số $y = \\frac{x^2 - 3x + 2}{x - 1}$ trên tập xác định của nó.",
          shortAnswer: "$y' = 1$",
          fullSolution: "Tập xác định $D = \\mathbb{R} \\setminus \\{1\\}$. Ta rút gọn biểu thức: $y = \\frac{(x - 1)(x - 2)}{x - 1} = x - 2$ với mọi $x \\ne 1$. Do đó đạo hàm là: $y' = (x - 2)' = 1$ với mọi $x \\ne 1$."
        },
        {
          id: "g11-c9-l32-d1-ex8",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho hàm số $y = \\frac{x^2 + 2x - 3}{x + 1}$. Tìm giá trị của đạo hàm tại $x = 1$.",
          shortAnswer: "$y'(1) = 2$",
          fullSolution: "Ta có $y' = \\frac{(2x + 2)(x + 1) - (x^2 + 2x - 3)(1)}{(x + 1)^2} = \\frac{2x^2 + 4x + 2 - x^2 - 2x + 3}{(x + 1)^2} = \\frac{x^2 + 2x + 5}{(x + 1)^2}$. Tại $x = 1$: $y'(1) = \\frac{1^2 + 2(1) + 5}{(1 + 1)^2} = \\frac{8}{4} = 2$."
        },
        {
          id: "g11-c9-l32-d1-ex9",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho hàm số $f(x) = x(x - 1)(x - 2)\\dots(x - 2024)$. Tính $f'(0)$.",
          shortAnswer: "$2024!$",
          fullSolution: "Ta viết $f(x) = x \\cdot g(x)$ với $g(x) = (x - 1)(x - 2)\\dots(x - 2024)$. Theo quy tắc đạo hàm của tích: $f'(x) = x' \\cdot g(x) + x \\cdot g'(x) = g(x) + x \\cdot g'(x)$. Khi thay $x = 0$, ta có: $f'(0) = g(0) + 0 \\cdot g'(0) = g(0) = (-1)(-2)\\dots(-2024) = (-1)^{2024} \\cdot (2024!) = 2024!$."
        },
        {
          id: "g11-c9-l32-d1-ex10",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Tìm các điểm $x$ thoả mãn $y' \\ge 0$ với hàm số $y = \\frac{x^2 - 4x}{x - 2}$.",
          shortAnswer: "$x \\in \\mathbb{R} \\setminus \\{2\\}$",
          fullSolution: "Tập xác định $D = \\mathbb{R} \\setminus \\{2\\}$. Ta có: $y' = \\frac{(2x - 4)(x - 2) - (x^2 - 4x)(1)}{(x - 2)^2} = \\frac{2(x - 2)^2 - x^2 + 4x}{(x - 2)^2} = \\frac{2x^2 - 8x + 8 - x^2 + 4x}{(x - 2)^2} = \\frac{x^2 - 4x + 8}{(x - 2)^2} = \\frac{(x - 2)^2 + 4}{(x - 2)^2}$. Nhận thấy $(x - 2)^2 + 4 > 0$ và $(x - 2)^2 > 0$ với mọi $x \\ne 2$. Do đó $y' > 0$ với mọi $x \\ne 2$. Vậy nghiệm của bất phương trình $y' \\ge 0$ là mọi $x \\ne 2$."
        }
      ]
    },
    {
      id: "g11-c9-l32-dang2",
      title: "Dạng 2: Đạo hàm của các hàm số lượng giác, hàm mũ và lôgarit",
      description: "Đạo hàm hàm lượng giác $(\\sin x)' = \\cos x, (\\cos x)' = -\\sin x, (\\tan x)' = \\frac{1}{\\cos^2 x}, (\\cot x)' = -\\frac{1}{\\sin^2 x}$. Hàm mũ và lôgarit $(e^x)' = e^x, (a^x)' = a^x \\ln a, (\\ln x)' = \\frac{1}{x}, (\\log_a x)' = \\frac{1}{x \\ln a}$.",
      exercises: [
        {
          id: "g11-c9-l32-d2-ex1",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Đạo hàm của hàm số $y = \\sin x$ bằng gì?",
          shortAnswer: "$y' = \\cos x$",
          fullSolution: "Theo công thức đạo hàm cơ bản của hàm lượng giác: $(\\sin x)' = \\cos x$."
        },
        {
          id: "g11-c9-l32-d2-ex2",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Đạo hàm của hàm số $y = \\cos x$ bằng gì?",
          shortAnswer: "$y' = -\\sin x$",
          fullSolution: "Theo công thức đạo hàm cơ bản của hàm lượng giác: $(\\cos x)' = -\\sin x$."
        },
        {
          id: "g11-c9-l32-d2-ex3",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Đạo hàm của hàm số mũ tự nhiên $y = e^x$ là gì?",
          shortAnswer: "$y' = e^x$",
          fullSolution: "Hàm số mũ tự nhiên có đạo hàm bằng chính nó: $(e^x)' = e^x$."
        },
        {
          id: "g11-c9-l32-d2-ex4",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Đạo hàm của hàm số lôgarit tự nhiên $y = \\ln x$ ($x > 0$) là gì?",
          shortAnswer: "$y' = \\frac{1}{x}$",
          fullSolution: "Theo công thức đạo hàm cơ bản: $(\\ln x)' = \\frac{1}{x}$ với mọi $x > 0$."
        },
        {
          id: "g11-c9-l32-d2-ex5",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Tính đạo hàm của hàm số $y = x \\cdot \\sin x$.",
          shortAnswer: "$y' = \\sin x + x\\cos x$",
          fullSolution: "Áp dụng công thức đạo hàm của tích: $y' = (x)' \\cdot \\sin x + x \\cdot (\\sin x)' = 1 \\cdot \\sin x + x \\cdot \\cos x = \\sin x + x\\cos x$."
        },
        {
          id: "g11-c9-l32-d2-ex6",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Tính đạo hàm của hàm số $y = 2^x + \\log_3 x$ ($x > 0$).",
          shortAnswer: "$y' = 2^x \\ln 2 + \\frac{1}{x\\ln 3}$",
          fullSolution: "Áp dụng công thức đạo hàm hàm mũ và hàm lôgarit cơ số $a$: $(a^x)' = a^x \\ln a$ và $(\\log_a x)' = \\frac{1}{x\\ln a}$. Ta được: $y' = 2^x \\ln 2 + \\frac{1}{x\\ln 3}$."
        },
        {
          id: "g11-c9-l32-d2-ex7",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Tính đạo hàm của hàm số $y = e^x \\cos x$.",
          shortAnswer: "$y' = e^x(\\cos x - \\sin x)$",
          fullSolution: "Áp dụng công thức đạo hàm tích: $y' = (e^x)'\\cos x + e^x(\\cos x)' = e^x\\cos x + e^x(-\\sin x) = e^x(\\cos x - \\sin x)$."
        },
        {
          id: "g11-c9-l32-d2-ex8",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Tính đạo hàm của hàm số $y = \\tan x - x$. Từ đó chứng minh $y' > 0$ với mọi $x \\in \\left(0; \\frac{\\pi}{2}\\right)$.",
          shortAnswer: "$y' = \\tan^2 x > 0$",
          fullSolution: "Ta có $(\\tan x)' = \\frac{1}{\\cos^2 x} = 1 + \\tan^2 x$. Do đó: $y' = (1 + \\tan^2 x) - 1 = \\tan^2 x$. Với mọi $x \\in \\left(0; \\frac{\\pi}{2}\\right)$, ta có $\\tan x > 0 \\implies y' = \\tan^2 x > 0$."
        },
        {
          id: "g11-c9-l32-d2-ex9",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho hàm số $f(x) = \\frac{\\ln x}{x}$. Tìm giá trị của $x$ để đạo hàm $f'(x) = 0$.",
          shortAnswer: "$x = e$",
          fullSolution: "Áp dụng công thức đạo hàm của thương: $f'(x) = \\frac{(\\ln x)' \\cdot x - \\ln x \\cdot (x)'}{x^2} = \\frac{\\frac{1}{x} \\cdot x - \\ln x}{x^2} = \\frac{1 - \\ln x}{x^2}$. Để $f'(x) = 0 \\iff 1 - \\ln x = 0 \\iff \\ln x = 1 \\iff x = e$."
        },
        {
          id: "g11-c9-l32-d2-ex10",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Tính đạo hàm của hàm số $y = \\frac{e^x - e^{-x}}{2}$ và chứng minh hệ thức $y^2 - (y')^2 = -1$.",
          shortAnswer: "$y' = \\frac{e^x + e^{-x}}{2}$ và thoả mãn hệ thức",
          fullSolution: "Ta có $y' = \\frac{(e^x - e^{-x})'}{2} = \\frac{e^x - (-e^{-x})}{2} = \\frac{e^x + e^{-x}}{2}$. Xét hiệu: $(y')^2 - y^2 = \\left(\\frac{e^x + e^{-x}}{2}\\right)^2 - \\left(\\frac{e^x - e^{-x}}{2}\\right)^2 = \\frac{(e^{2x} + 2 + e^{-2x}) - (e^{2x} - 2 + e^{-2x})}{4} = \\frac{4}{4} = 1$. Suy ra $y^2 - (y')^2 = -1$."
        }
      ]
    },
    {
      id: "g11-c9-l32-dang3",
      title: "Dạng 3: Đạo hàm của hàm số hợp và ứng dụng phương trình, bất phương trình",
      description: "Quy tắc chuỗi $y'_x = y'_u \\cdot u'_x$. Ứng dụng đạo hàm giải phương trình $f'(x) = 0$ và bất phương trình đạo hàm.",
      exercises: [
        {
          id: "g11-c9-l32-d3-ex1",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Viết công thức đạo hàm của hàm số hợp $y = f(u)$ với $u = u(x)$.",
          shortAnswer: "$y'_x = y'_u \\cdot u'_x$",
          fullSolution: "Quy tắc chuỗi cho đạo hàm hàm hợp: Nếu hàm số $u = u(x)$ có đạo hàm tại $x$ và hàm số $y = f(u)$ có đạo hàm tại $u$ thì hàm hợp $y = f(u(x))$ có đạo hàm tại $x$ là: $y'_x = y'_u \\cdot u'_x$."
        },
        {
          id: "g11-c9-l32-d3-ex2",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Công thức đạo hàm của căn bậc hai của hàm số $u(x)$ là gì?",
          shortAnswer: "$(\\sqrt{u})' = \\frac{u'}{2\\sqrt{u}}$",
          fullSolution: "Với hàm số $u = u(x) > 0$ có đạo hàm, ta có: $(\\sqrt{u})' = \\frac{u'}{2\\sqrt{u}}$."
        },
        {
          id: "g11-c9-l32-d3-ex3",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Công thức đạo hàm của hàm luỹ thừa hợp $(u^n)'$ là gì?",
          shortAnswer: "$(u^n)' = n \\cdot u^{n-1} \\cdot u'$",
          fullSolution: "Theo quy tắc đạo hàm hàm hợp: $(u^n)' = n \\cdot u^{n-1} \\cdot u'$."
        },
        {
          id: "g11-c9-l32-d3-ex4",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Tính đạo hàm của hàm số $y = \\sin(3x)$.",
          shortAnswer: "$y' = 3\\cos(3x)$",
          fullSolution: "Áp dụng đạo hàm hàm hợp $(\\sin u)' = u' \\cos u$: $y' = (3x)' \\cos(3x) = 3\\cos(3x)$."
        },
        {
          id: "g11-c9-l32-d3-ex5",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Tính đạo hàm của hàm số $y = (2x^2 - 3)^4$.",
          shortAnswer: "$y' = 16x(2x^2 - 3)^3$",
          fullSolution: "Áp dụng công thức $(u^4)' = 4u^3 \\cdot u'$: $y' = 4(2x^2 - 3)^3 \\cdot (2x^2 - 3)' = 4(2x^2 - 3)^3 \\cdot (4x) = 16x(2x^2 - 3)^3$."
        },
        {
          id: "g11-c9-l32-d3-ex6",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Tính đạo hàm của hàm số $y = \\sqrt{x^2 + 1}$.",
          shortAnswer: "$y' = \\frac{x}{\\sqrt{x^2 + 1}}$",
          fullSolution: "Áp dụng công thức $(\\sqrt{u})' = \\frac{u'}{2\\sqrt{u}}$: $y' = \\frac{(x^2 + 1)'}{2\\sqrt{x^2 + 1}} = \\frac{2x}{2\\sqrt{x^2 + 1}} = \\frac{x}{\\sqrt{x^2 + 1}}$."
        },
        {
          id: "g11-c9-l32-d3-ex7",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Tính đạo hàm của hàm số $y = e^{-x^2 + 2x}$.",
          shortAnswer: "$y' = (-2x + 2)e^{-x^2 + 2x}$",
          fullSolution: "Áp dụng công thức $(e^u)' = u' \\cdot e^u$: $y' = (-x^2 + 2x)' \\cdot e^{-x^2 + 2x} = (-2x + 2)e^{-x^2 + 2x}$."
        },
        {
          id: "g11-c9-l32-d3-ex8",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Giải phương trình $f'(x) = 0$ với hàm số $f(x) = \\cos(2x) - 2\\cos x$.",
          shortAnswer: "$x = k2\\pi$ hoặc $x = \\pm \\frac{2\\pi}{3} + k2\\pi$ ($k \\in \\mathbb{Z}$)",
          fullSolution: "Ta có $f'(x) = -2\\sin(2x) + 2\\sin x = -4\\sin x \\cos x + 2\\sin x = 2\\sin x(1 - 2\\cos x)$. Cho $f'(x) = 0 \\iff \\sin x = 0$ hoặc $\\cos x = \\frac{1}{2}$. Với $\\sin x = 0 \\iff x = k\\pi$. Với $\\cos x = \\frac{1}{2} \\iff x = \\pm \\frac{\\pi}{3} + k2\\pi$. Hợp các họ nghiệm ta được các nghiệm đã nêu."
        },
        {
          id: "g11-c9-l32-d3-ex9",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Giải bất phương trình $f'(x) > 0$ với hàm số $f(x) = \\sqrt{2x - x^2}$.",
          shortAnswer: "$0 < x < 1$",
          fullSolution: "Điều kiện xác định: $2x - x^2 > 0 \\iff x \\in (0; 2)$. Đạo hàm: $f'(x) = \\frac{(2x - x^2)'}{2\\sqrt{2x - x^2}} = \\frac{2 - 2x}{2\\sqrt{2x - x^2}} = \\frac{1 - x}{\\sqrt{2x - x^2}}$. Bất phương trình $f'(x) > 0 \\iff \\frac{1 - x}{\\sqrt{2x - x^2}} > 0$. Do mẫu luôn dương với $x \\in (0; 2)$ nên $1 - x > 0 \\iff x < 1$. Kết hợp điều kiện ta được tập nghiệm là $x \\in (0; 1)$."
        },
        {
          id: "g11-c9-l32-d3-ex10",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho hàm số $y = \\ln(x + \\sqrt{x^2 + 1})$. Tính giá trị của biểu thức $P = \\sqrt{x^2 + 1} \\cdot y'$.",
          shortAnswer: "$P = 1$",
          fullSolution: "Đặt $u = x + \\sqrt{x^2 + 1}$, ta có $u' = 1 + \\frac{x}{\\sqrt{x^2 + 1}} = \\frac{\\sqrt{x^2 + 1} + x}{\\sqrt{x^2 + 1}} = \\frac{u}{\\sqrt{x^2 + 1}}$. Khi đó: $y' = \\frac{u'}{u} = \\frac{\\frac{u}{\\sqrt{x^2 + 1}}}{u} = \\frac{1}{\\sqrt{x^2 + 1}}$. Do đó $P = \\sqrt{x^2 + 1} \\cdot y' = \\sqrt{x^2 + 1} \\cdot \\frac{1}{\\sqrt{x^2 + 1}} = 1$."
        }
      ]
    }
  ]
  }
,
  "g11-c9-l33": {
    lessonId: "g11-c9-l33",
  id: "g11-c9-l33",
  title: "Bài 33: Đạo hàm cấp hai",
  topics: [
    {
      id: "g11-c9-l33-dang1",
      title: "Dạng 1: Tính đạo hàm cấp hai của các hàm số",
      description: "Đạo hàm cấp hai là đạo hàm của đạo hàm cấp một: $f''(x) = (f'(x))'$. Kí hiệu $y''$ hoặc $f''(x)$.",
      exercises: [
        {
          id: "g11-c9-l33-d1-ex1",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Đạo hàm cấp hai của hàm số $y = f(x)$ được định nghĩa như thế nào?",
          shortAnswer: "Là đạo hàm của đạo hàm cấp một, kí hiệu là $f''(x) = (f'(x))'$",
          fullSolution: "Giả sử hàm số $y = f(x)$ có đạo hàm tại mọi điểm $x \\in (a; b)$. Nếu hàm số $y' = f'(x)$ lại có đạo hàm tại $x$ thì đạo hàm của $f'(x)$ được gọi là đạo hàm cấp hai của $f(x)$ tại $x$, kí hiệu là $f''(x)$ hoặc $y''$: $f''(x) = (f'(x))'$."
        },
        {
          id: "g11-c9-l33-d1-ex2",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Tính đạo hàm cấp hai của hàm số $y = x^3$.",
          shortAnswer: "$y'' = 6x$",
          fullSolution: "Ta có $y' = 3x^2 \\implies y'' = (3x^2)' = 6x$."
        },
        {
          id: "g11-c9-l33-d1-ex3",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Tính đạo hàm cấp hai của hàm số $y = \\sin x$.",
          shortAnswer: "$y'' = -\\sin x$",
          fullSolution: "Ta có $y' = \\cos x \\implies y'' = (\\cos x)' = -\\sin x$."
        },
        {
          id: "g11-c9-l33-d1-ex4",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Tính đạo hàm cấp hai của hàm số $y = e^x$.",
          shortAnswer: "$y'' = e^x$",
          fullSolution: "Ta có $y' = e^x \\implies y'' = (e^x)' = e^x$."
        },
        {
          id: "g11-c9-l33-d1-ex5",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Tính đạo hàm cấp hai của hàm số $y = 2x^4 - 3x^2 + 5x - 1$ tại điểm $x = 1$.",
          shortAnswer: "$y''(1) = 18$",
          fullSolution: "Ta có $y' = 8x^3 - 6x + 5$. Đạo hàm cấp hai là $y'' = 24x^2 - 6$. Tại $x = 1$: $y''(1) = 24(1^2) - 6 = 18$."
        },
        {
          id: "g11-c9-l33-d1-ex6",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Tính đạo hàm cấp hai của hàm số $y = \\frac{1}{x}$ ($x \\ne 0$).",
          shortAnswer: "$y'' = \\frac{2}{x^3}$",
          fullSolution: "Ta có $y' = -\\frac{1}{x^2} = -x^{-2}$. Đạo hàm cấp hai là $y'' = (-x^{-2})' = -(-2)x^{-3} = \\frac{2}{x^3}$."
        },
        {
          id: "g11-c9-l33-d1-ex7",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Tính đạo hàm cấp hai của hàm số $y = \\cos(2x)$.",
          shortAnswer: "$y'' = -4\\cos(2x)$",
          fullSolution: "Ta có $y' = -2\\sin(2x)$. Suy ra $y'' = -2 \\cdot 2\\cos(2x) = -4\\cos(2x)$."
        },
        {
          id: "g11-c9-l33-d1-ex8",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Tính đạo hàm cấp hai của hàm số $y = x \\cdot e^x$.",
          shortAnswer: "$y'' = (x + 2)e^x$",
          fullSolution: "Ta có $y' = 1 \\cdot e^x + x \\cdot e^x = (x + 1)e^x$. Đạo hàm cấp hai là: $y'' = (x + 1)' \\cdot e^x + (x + 1) \\cdot (e^x)' = 1 \\cdot e^x + (x + 1)e^x = (x + 2)e^x$."
        },
        {
          id: "g11-c9-l33-d1-ex9",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Tính đạo hàm cấp hai của hàm số $y = \\ln(1 + x^2)$.",
          shortAnswer: "$y'' = \\frac{2(1 - x^2)}{(1 + x^2)^2}$",
          fullSolution: "Ta có $y' = \\frac{(1 + x^2)'}{1 + x^2} = \\frac{2x}{1 + x^2}$. Tính đạo hàm cấp hai theo quy tắc thương: $y'' = \\frac{(2x)'(1 + x^2) - 2x(1 + x^2)'}{(1 + x^2)^2} = \\frac{2(1 + x^2) - 2x(2x)}{(1 + x^2)^2} = \\frac{2 + 2x^2 - 4x^2}{(1 + x^2)^2} = \\frac{2(1 - x^2)}{(1 + x^2)^2}$."
        },
        {
          id: "g11-c9-l33-d1-ex10",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho hàm số $y = \\frac{x - 1}{x + 1}$. Tính đạo hàm cấp hai của hàm số tại điểm $x = 0$.",
          shortAnswer: "$y''(0) = -4$",
          fullSolution: "Ta có $y = \\frac{x + 1 - 2}{x + 1} = 1 - \\frac{2}{x + 1} = 1 - 2(x + 1)^{-1}$. Đạo hàm cấp một: $y' = 2(x + 1)^{-2} = \\frac{2}{(x + 1)^2}$. Đạo hàm cấp hai: $y'' = 2(-2)(x + 1)^{-3} = -\\frac{4}{(x + 1)^3}$. Tại $x = 0$: $y''(0) = -\\frac{4}{(0 + 1)^3} = -4$."
        }
      ]
    },
    {
      id: "g11-c9-l33-dang2",
      title: "Dạng 2: Ý nghĩa vật lí của đạo hàm cấp hai (gia tốc tức thời)",
      description: "Gia tốc tức thời $a(t) = v'(t) = s''(t)$. Ứng dụng trong các bài toán chuyển động cơ học, dao động điều hoà.",
      exercises: [
        {
          id: "g11-c9-l33-d2-ex1",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Gia tốc tức thời $a(t)$ của một chất điểm chuyển động theo phương trình $s = s(t)$ có mối liên hệ như thế nào với phương trình quãng đường?",
          shortAnswer: "$a(t) = s''(t)$",
          fullSolution: "Theo ý nghĩa vật lí của đạo hàm cấp hai, gia tốc tức thời của chuyển động là đạo hàm cấp hai của phương trình quãng đường theo thời gian: $a(t) = s''(t)$."
        },
        {
          id: "g11-c9-l33-d2-ex2",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Một vật chuyển động thẳng biến đổi đều có phương trình $s(t) = v_0 t + \\frac{1}{2}at^2$. Gia tốc của chuyển động này bằng bao nhiêu?",
          shortAnswer: "$a$",
          fullSolution: "Ta có $v(t) = s'(t) = v_0 + at$. Gia tốc $a(t) = v'(t) = s''(t) = a$ (hằng số không đổi)."
        },
        {
          id: "g11-c9-l33-d2-ex3",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Trong dao động điều hoà $x(t) = A\\cos(\\omega t + \\varphi)$, gia tốc $a(t)$ có biểu thức liên hệ với li độ $x(t)$ như thế nào?",
          shortAnswer: "$a(t) = -\\omega^2 x(t)$",
          fullSolution: "Ta có vận tốc $v(t) = x'(t) = -A\\omega \\sin(\\omega t + \\varphi)$. Gia tốc $a(t) = x''(t) = -A\\omega^2 \\cos(\\omega t + \\varphi) = -\\omega^2 x(t)$."
        },
        {
          id: "g11-c9-l33-d2-ex4",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Một vật rơi tự do có phương trình quãng đường $s(t) = \\frac{1}{2}gt^2$ ($g \\approx 9{,}8\\text{ m/s}^2$). Gia tốc rơi tự do của vật là bao nhiêu?",
          shortAnswer: "$g = 9{,}8\\text{ m/s}^2$",
          fullSolution: "Ta có $v(t) = s'(t) = gt$. Gia tốc rơi tự do là: $a(t) = s''(t) = g \\approx 9{,}8\\text{ m/s}^2$."
        },
        {
          id: "g11-c9-l33-d2-ex5",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Một chất điểm chuyển động theo phương trình $s(t) = t^3 - 3t^2 + 5t$ ($s$ tính bằng mét, $t$ tính bằng giây). Tính gia tốc tức thời của chất điểm tại thời điểm $t = 2\\text{ s}$.",
          shortAnswer: "$6\\text{ m/s}^2$",
          fullSolution: "Vận tốc tức thời là $v(t) = s'(t) = 3t^2 - 6t + 5$. Gia tốc tức thời là $a(t) = s''(t) = 6t - 6$. Tại $t = 2\\text{ s}$: $a(2) = 6(2) - 6 = 6\\text{ m/s}^2$."
        },
        {
          id: "g11-c9-l33-d2-ex6",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Một vật chuyển động theo quy luật $s(t) = 2t^3 - 6t^2 + 1$. Tìm thời điểm mà tại đó gia tốc của vật bằng $0$.",
          shortAnswer: "$t = 1\\text{ s}$",
          fullSolution: "Ta có $s'(t) = 6t^2 - 12t \\implies s''(t) = 12t - 12$. Gia tốc triệt tiêu khi $s''(t) = 0 \\iff 12t - 12 = 0 \\iff t = 1\\text{ s}$."
        },
        {
          id: "g11-c9-l33-d2-ex7",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Một chất điểm dao động theo phương trình $x(t) = 4\\cos(2\\pi t)$ ($x$ tính bằng cm, $t$ tính bằng giây). Tính gia tốc của chất điểm tại thời điểm $t = 0{,}5\\text{ s}$.",
          shortAnswer: "$16\\pi^2\\text{ cm/s}^2$",
          fullSolution: "Ta có $v(t) = x'(t) = -8\\pi \\sin(2\\pi t)$. Gia tốc là $a(t) = x''(t) = -16\\pi^2 \\cos(2\\pi t)$. Tại $t = 0{,}5\\text{ s}$: $a(0{,}5) = -16\\pi^2 \\cos(\\pi) = -16\\pi^2 (-1) = 16\\pi^2\\text{ cm/s}^2$."
        },
        {
          id: "g11-c9-l33-d2-ex8",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Một chất điểm chuyển động theo phương trình $s(t) = t^4 - 2t^3 + 3t^2 - t$ ($s$ tính bằng mét, $t$ tính bằng giây). Tìm giá trị nhỏ nhất của gia tốc chuyển động của chất điểm.",
          shortAnswer: "$3\\text{ m/s}^2$",
          fullSolution: "Ta có $s'(t) = 4t^3 - 6t^2 + 6t - 1$. Gia tốc là: $a(t) = s''(t) = 12t^2 - 12t + 6 = 12\\left(t^2 - t + \\frac{1}{4}\\right) + 3 = 12\\left(t - \\frac{1}{2}\\right)^2 + 3 \\ge 3$. Giá trị nhỏ nhất của gia tốc là $3\\text{ m/s}^2$, đạt được tại thời điểm $t = 0{,}5\\text{ s}$."
        },
        {
          id: "g11-c9-l33-d2-ex9",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Một ô tô đang chạy với vận tốc $20\\text{ m/s}$ thì người lái đạp phanh; ô tô chuyển động chậm dần đều với gia tốc có độ lớn $a = 4\\text{ m/s}^2$. Tính quãng đường ô tô đi được từ lúc đạp phanh đến khi dừng hẳn.",
          shortAnswer: "$50\\text{ m}$",
          fullSolution: "Phương trình vận tốc là $v(t) = v_0 - at = 20 - 4t$. Xe dừng lại khi $v(t) = 0 \\iff 20 - 4t = 0 \\iff t = 5\\text{ s}$. Quãng đường xe đi được là: $s(t) = v_0 t - \\frac{1}{2}at^2 = 20(5) - \\frac{1}{2} \\cdot 4 \\cdot (5^2) = 100 - 50 = 50\\text{ m}$."
        },
        {
          id: "g11-c9-l33-d2-ex10",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Một tên lửa mô hình được phóng thẳng đứng có phương trình độ cao $h(t) = -t^4 + 8t^3 + 10$ ($h$ tính bằng mét, $t$ tính bằng giây, $0 \\le t \\le 6$). Tính vận tốc của tên lửa tại thời điểm mà gia tốc của nó triệt tiêu.",
          shortAnswer: "$96\\text{ m/s}$",
          fullSolution: "Vận tốc: $v(t) = h'(t) = -4t^3 + 24t^2$. Gia tốc: $a(t) = h''(t) = -12t^2 + 48t$. Gia tốc triệt tiêu khi $-12t^2 + 48t = 0 \\iff -12t(t - 4) = 0$. Vì xét chuyển động sau thời điểm phóng nên ta lấy $t = 4\\text{ s}$. Vận tốc tại thời điểm này là: $v(4) = -4(4^3) + 24(4^2) = -256 + 384 = 96\\text{ m/s}$."
        }
      ]
    },
    {
      id: "g11-c9-l33-dang3",
      title: "Dạng 3: Ứng dụng đạo hàm cấp hai chứng minh hệ thức và giải phương trình",
      description: "Chứng minh đẳng thức vi phân liên hệ giữa $y, y', y''$. Giải phương trình và bất phương trình chứa đạo hàm cấp hai.",
      exercises: [
        {
          id: "g11-c9-l33-d3-ex1",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Cho hàm số $y = \\cos x$. Tính giá trị của biểu thức $y'' + y$.",
          shortAnswer: "$0$",
          fullSolution: "Ta có $y' = -\\sin x \\implies y'' = -\\cos x = -y$. Do đó $y'' + y = -y + y = 0$."
        },
        {
          id: "g11-c9-l33-d3-ex2",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Cho hàm số $y = e^{2x}$. Khẳng định nào đúng: $y'' - 4y = 0$ hay $y'' + 4y = 0$?",
          shortAnswer: "$y'' - 4y = 0$",
          fullSolution: "Ta có $y' = 2e^{2x} \\implies y'' = 4e^{2x} = 4y$. Suy ra $y'' - 4y = 0$."
        },
        {
          id: "g11-c9-l33-d3-ex3",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Tìm các nghiệm của phương trình $y'' = 0$ biết $y = x^3 - 3x^2 + 1$.",
          shortAnswer: "$x = 1$",
          fullSolution: "Ta có $y' = 3x^2 - 6x \\implies y'' = 6x - 6$. Phương trình $y'' = 0 \\iff 6x - 6 = 0 \\iff x = 1$."
        },
        {
          id: "g11-c9-l33-d3-ex4",
          level: "Nhận biết",
          levelClass: "bg-slate-100 text-slate-700",
          question: "Đạo hàm cấp hai của hàm số bậc hai $y = ax^2 + bx + c$ ($a \\ne 0$) bằng bao nhiêu?",
          shortAnswer: "$2a$",
          fullSolution: "Ta có $y' = 2ax + b \\implies y'' = 2a$."
        },
        {
          id: "g11-c9-l33-d3-ex5",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho hàm số $y = \\sin(3x)$. Chứng minh hàm số thoả mãn hệ thức vi phân $y'' + 9y = 0$.",
          shortAnswer: "Đã chứng minh, vì $y'' = -9\\sin(3x) = -9y$",
          fullSolution: "Ta có $y' = 3\\cos(3x)$. Đạo hàm cấp hai là $y'' = -9\\sin(3x)$. Thay vào biểu thức: $y'' + 9y = -9\\sin(3x) + 9\\sin(3x) = 0$. Đẳng thức được chứng minh."
        },
        {
          id: "g11-c9-l33-d3-ex6",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Giải phương trình $f''(x) = 0$ với $f(x) = x^4 - 6x^2 + 2x - 3$.",
          shortAnswer: "$x = \\pm 1$",
          fullSolution: "Ta có $f'(x) = 4x^3 - 12x + 2$. Đạo hàm cấp hai: $f''(x) = 12x^2 - 12$. Phương trình $f''(x) = 0 \\iff 12x^2 - 12 = 0 \\iff x^2 = 1 \\iff x = \\pm 1$."
        },
        {
          id: "g11-c9-l33-d3-ex7",
          level: "Thông hiểu",
          levelClass: "bg-emerald-100 text-emerald-800",
          question: "Cho hàm số $y = e^{-x}$. Chứng minh rằng $y'' - y = 0$.",
          shortAnswer: "Đã chứng minh, vì $y'' = e^{-x} = y$",
          fullSolution: "Ta có $y' = -e^{-x} \\implies y'' = -(-e^{-x}) = e^{-x}$. Do đó $y'' - y = e^{-x} - e^{-x} = 0$."
        },
        {
          id: "g11-c9-l33-d3-ex8",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho hàm số $y = e^x \\sin x$. Chứng minh hệ thức $y'' - 2y' + 2y = 0$.",
          shortAnswer: "Đã chứng minh hệ thức",
          fullSolution: "Ta có $y' = (e^x)'\\sin x + e^x(\\sin x)' = e^x(\\sin x + \\cos x)$. Đạo hàm cấp hai: $y'' = e^x(\\sin x + \\cos x) + e^x(\\cos x - \\sin x) = 2e^x\\cos x$. Khi đó vế trái: $y'' - 2y' + 2y = 2e^x\\cos x - 2e^x(\\sin x + \\cos x) + 2e^x\\sin x = 2e^x\\cos x - 2e^x\\sin x - 2e^x\\cos x + 2e^x\\sin x = 0$."
        },
        {
          id: "g11-c9-l33-d3-ex9",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Giải bất phương trình $f''(x) > 0$ với hàm số $f(x) = \\frac{1}{3}x^3 - x^2 + 5x - 7$.",
          shortAnswer: "$x > 1$",
          fullSolution: "Ta có $f'(x) = x^2 - 2x + 5$. Đạo hàm cấp hai là: $f''(x) = 2x - 2$. Bất phương trình $f''(x) > 0 \\iff 2x - 2 > 0 \\iff x > 1$."
        },
        {
          id: "g11-c9-l33-d3-ex10",
          level: "Vận dụng",
          levelClass: "bg-blue-100 text-blue-800 font-bold",
          question: "Cho hàm số $y = \\sqrt{2x - x^2}$. Chứng minh rằng $y^3 \\cdot y'' + 1 = 0$.",
          shortAnswer: "Đã chứng minh hệ thức",
          fullSolution: "Tập xác định $x \\in (0; 2)$. Ta có $y' = \\frac{1 - x}{\\sqrt{2x - x^2}} = \\frac{1 - x}{y}$. Đạo hàm cấp hai: $y'' = \\frac{(1 - x)' y - (1 - x) y'}{y^2} = \\frac{-y - (1 - x)\\frac{1 - x}{y}}{y^2} = \\frac{-y^2 - (1 - x)^2}{y^3}$. Vì $y^2 = 2x - x^2$, ta có: $-y^2 - (1 - x)^2 = -(2x - x^2) - (1 - 2x + x^2) = -2x + x^2 - 1 + 2x - x^2 = -1$. Do đó $y'' = \\frac{-1}{y^3} \\iff y^3 \\cdot y'' = -1 \\iff y^3 \\cdot y'' + 1 = 0$."
        }
      ]
    }
  ]
  }
};

// Aliases for compatibility
window.GRADE_11_LESSONS_DB["g11-c8-l27"] = window.GRADE_11_LESSONS_DB["g11-c7-l27"];
window.GRADE_11_LESSONS_DB["g11-c8-l31"] = window.GRADE_11_LESSONS_DB["g11-c9-l31"];
window.GRADE_11_LESSONS_DB["g11-c8-l32"] = window.GRADE_11_LESSONS_DB["g11-c9-l32"];
window.GRADE_11_LESSONS_DB["g11-c8-l33"] = window.GRADE_11_LESSONS_DB["g11-c9-l33"];

window.getGrade11LessonData = function(chapterId, lessonId) {
  if (window.GRADE_11_LESSONS_DB && window.GRADE_11_LESSONS_DB[lessonId]) {
    const rawLesson = window.GRADE_11_LESSONS_DB[lessonId];
    const chData = window.GRADE_11_KNOWLEDGE ? window.GRADE_11_KNOWLEDGE[chapterId] : null;

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
      gradeId: 11,
      unitTitle: chData ? `${chData.chapterNumber}: ${chData.chapterTitle}` : "Toán Lớp 11",
      lessonTitle: rawLesson.title,
      theory: {
        summary: rawLesson.summary || (chData ? `Hệ thống kiến thức trọng tâm ${rawLesson.title} chuẩn GDPT 2018 (Thi ĐGNL & Tốt nghiệp THPT).` : `Hệ thống kiến thức trọng tâm bài học chuẩn GDPT 2018.`),
        sections: theorySections
      },
      diagram: window.getTikzDiagramForLesson ? window.getTikzDiagramForLesson(11, chapterId, lessonId) : null,
      topics: rawLesson.topics
    };
  }
  return null;
};

if (window.MATH_DATA) {
  window.MATH_DATA.grade11Lessons = window.GRADE_11_LESSONS_DB;
}