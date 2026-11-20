// Dữ liệu mẫu mô phỏng hệ thống học Toán từ lớp 6 đến lớp 12
window.MATH_DATA = {
  grades: [
    { id: 6, name: "Toán Lớp 6", description: "Số học, Phân số, Hình học trực quan" },
    { id: 7, name: "Toán Lớp 7", description: "Số hữu tỉ, Tam giác bằng nhau, Biểu thức đại số" },
    { id: 8, name: "Toán Lớp 8", description: "Hằng đẳng thức, Tứ giác, Phân thức đại số" },
    { id: 9, name: "Toán Lớp 9", description: "Hệ thức lượng, Căn thức, Phương trình bậc hai & Vi-ét" },
    { id: 10, name: "Toán Lớp 10", description: "Mệnh đề, Tập hợp, Bất phương trình, Vectơ" },
    { id: 11, name: "Toán Lớp 11", description: "Lượng giác, Cấp số cộng/nhân, Đạo hàm, Hình không gian" },
    { id: 12, name: "Toán Lớp 12", description: "Khảo sát hàm số, Mũ - Logarit, Tích phân, Oxyz" }
  ],

  // ==========================================
  // CẤU TRÚC 4 DẠNG CÂU HỎI CHUẨN BỘ GD&ĐT (2018)
  // ==========================================
  examStructurePresets: {
    format2018: {
      name: "Cấu Trúc Chuẩn Bộ GD&ĐT (GDPT 2018)",
      parts: [
        { id: "p1", name: "Phần I: Trắc nghiệm 4 lựa chọn", defaultQuestions: 12, defaultPoints: 3.0, desc: "Mỗi câu 0.25đ, chọn 1 phương án đúng" },
        { id: "p2", name: "Phần II: Trắc nghiệm Đúng / Sai", defaultQuestions: 4, defaultPoints: 4.0, desc: "Mỗi câu có 4 ý a,b,c,d (chọn đúng/sai từng ý)" },
        { id: "p3", name: "Phần III: Trả lời ngắn", defaultQuestions: 6, defaultPoints: 2.0, desc: "Điền đáp số hoặc giá trị số cuối cùng" },
        { id: "p4", name: "Phần IV: Tự luận", defaultQuestions: 1, defaultPoints: 1.0, desc: "Trình bày bài giải tự luận chi tiết" }
      ],
      defaultDuration: 90
    }
  },

  // CẤU HÌNH MÃ API ĐỊNH DANH MỨC ĐỘ PHÙ HỢP CỦA HỌC SINH (MIỄN PHÍ & CÓ PHÍ)
  apiKeysConfig: {
    "TOAN-FREE-2026": {
      name: "Gói Cộng Đồng Miễn Phí",
      type: "free",
      level: "Cộng đồng miễn phí (Tự do)",
      badge: "bg-emerald-100 text-emerald-800 border-emerald-300",
      description: "Học lý thuyết, xem 3 ví dụ mẫu, làm 10 bài tập xem đáp án số và tham gia thi đấu trường online miễn phí."
    },
    "TOAN-VIP-CHUYEN": {
      name: "Gói Chuyên & HSG",
      type: "paid",
      level: "Nâng cao & Luyện thi Chuyên Toán (Mục tiêu 9.5 - 10đ)",
      badge: "bg-purple-100 text-purple-800 border-purple-200",
      description: "Tập trung các bài toán thực tế cực trị, bất đẳng thức và hình học biến hình."
    },
    "TOAN-9PLUS-2026": {
      name: "Gói Học Sinh Giỏi 9+",
      type: "paid",
      level: "Học sinh Giỏi 9+ (Rèn phản xạ câu phân loại 8-10đ)",
      badge: "bg-indigo-100 text-indigo-800 border-indigo-200",
      description: "Thành thạo dạng toán Vi-ét nâng cao, giải bài toán bằng cách lập hệ phương trình."
    },
    "TOAN-TARGET-8PLUS": {
      name: "Gói Chắc Điểm 8",
      type: "paid",
      level: "Học sinh Khá (Chắc chắn kiến thức 8.0 - 8.8đ)",
      badge: "bg-blue-100 text-blue-800 border-blue-200",
      description: "Chắc 100% câu nhận biết, thông hiểu và vận dụng cơ bản, không sai sót vặt."
    },
    "TOAN-REMEDIAL-GOC": {
      name: "Gói Lấy Lại Gốc",
      type: "paid",
      level: "Lấy lại gốc & Vá lỗ hổng (Rèn chắc kiến thức nền tảng)",
      badge: "bg-amber-100 text-amber-800 border-amber-200",
      description: "Rèn luyện từng bước công thức căn bản, tính toán số học, bù đắp lỗ hổng đại số."
    }
  },

  // NGÂN HÀNG CÂU HỎI ĐỀ THI 4 PHẦN CHUẨN MA TRẬN MẶC ĐỊNH (NGUỒN TRÊN MẠNG)
  // THEO KHỐI LỚP 12, 11, 10 (SỞ GD&ĐT HÀ NỘI, TP.HCM, CHUYÊN SƯ PHẠM, KHTN)
  grade4PartBank: // CƠ SỞ DỮ LIỆU ĐỀ THI 4 PHẦN CHUẨN MA TRẬN MẶC ĐỊNH BỘ GD&ĐT
// NGUỒN CÂU HỎI: QUÉT TỪ NGÂN HÀNG ĐỀ THI TRÊN MẠNG (SỞ GD&ĐT HÀ NỘI, TP.HCM, CHUYÊN SƯ PHẠM, KHTN)

{
  12: {
    part1_mcq: [
      {
        id: "g12_m1",
        question: "Cho hàm số $y = f(x)$ có bảng biến thiên trên $\\mathbb{R}$ với $f'(x) > 0$ trên $(-\\infty; -1)$ và $(2; +\\infty)$, $f'(x) < 0$ trên $(-1; 2)$. Hàm số đã cho đồng biến trên khoảng nào sau đây?",
        options: [
          { key: "A", text: "$(2; +\\infty)$" },
          { key: "B", text: "$(-1; 2)$" },
          { key: "C", text: "$(-\\infty; 2)$" },
          { key: "D", text: "$(-1; +\\infty)$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Ngân hàng đề Sở GD&ĐT Hà Nội (Trên mạng)"
      },
      {
        id: "g12_m2",
        question: "Đồ thị hàm số $y = \\frac{2x - 1}{x + 1}$ có đường tiệm cận ngang là đường thẳng:",
        options: [
          { key: "A", text: "$y = 2$" },
          { key: "B", text: "$x = -1$" },
          { key: "C", text: "$y = -1$" },
          { key: "D", text: "$x = 2$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Đề thi thử THPT Quốc Gia - Chuyên Sư Phạm (Trên mạng)"
      },
      {
        id: "g12_m3",
        question: "Đường cong ở hình bên là đồ thị của hàm số nào trong các hàm số dưới đây?",
        options: [
          { key: "A", text: "$y = \\frac{x^2 - x + 1}{x - 1}$" },
          { key: "B", text: "$y = x^3 - 3x + 1$" },
          { key: "C", text: "$y = -x^4 + 2x^2 + 1$" },
          { key: "D", text: "$y = \\frac{2x + 1}{x - 1}$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Ngân hàng đề thi Sở GD&ĐT TP.HCM (Trên mạng)"
      },
      {
        id: "g12_m4",
        question: "Trong không gian $Oxyz$, cho hai vectơ $\\vec{u} = (1; -2; 3)$ và $\\vec{v} = (2; 1; -1)$. Toạ độ của vectơ $\\vec{u} + 2\\vec{v}$ là:",
        options: [
          { key: "A", text: "$(5; 0; 1)$" },
          { key: "B", text: "$(3; -1; 2)$" },
          { key: "C", text: "$(5; 4; 1)$" },
          { key: "D", text: "$(4; 0; 1)$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Ngân hàng đề thi Chuyên Lam Sơn (Trên mạng)"
      },
      {
        id: "g12_m5",
        question: "Trong không gian $Oxyz$, cho ba điểm $A(1; 0; 0), B(0; 2; 0), C(0; 0; 3)$. Mặt phẳng $(ABC)$ có phương trình là:",
        options: [
          { key: "A", text: "$\\frac{x}{1} + \\frac{y}{2} + \\frac{z}{3} = 1$" },
          { key: "B", text: "$\\frac{x}{1} + \\frac{y}{2} + \\frac{z}{3} = 0$" },
          { key: "C", text: "$\\frac{x}{3} + \\frac{y}{2} + \\frac{z}{1} = 1$" },
          { key: "D", text: "$6x + 3y + 2z + 6 = 0$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Ngân hàng đề thi Sở GD&ĐT Nam Định (Trên mạng)"
      },
      {
        id: "g12_m6",
        question: "Họ nguyên hàm của hàm số $f(x) = 3x^2 + \\sin x$ là:",
        options: [
          { key: "A", text: "$x^3 - \\cos x + C$" },
          { key: "B", text: "$x^3 + \\cos x + C$" },
          { key: "C", text: "$6x - \\cos x + C$" },
          { key: "D", text: "$\\frac{x^3}{3} - \\cos x + C$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Ngân hàng đề thi Sở GD&ĐT Bắc Ninh (Trên mạng)"
      },
      {
        id: "g12_m7",
        question: "Biết $\\int_1^3 f(x) dx = 4$ và $\\int_1^3 g(x) dx = -2$. Khi đó $\\int_1^3 [f(x) - 2g(x)] dx$ bằng:",
        options: [
          { key: "A", text: "$8$" },
          { key: "B", text: "$0$" },
          { key: "C", text: "$6$" },
          { key: "D", text: "$2$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Đề khảo sát chất lượng Sở GD&ĐT Hải Phòng (Trên mạng)"
      },
      {
        id: "g12_m8",
        question: "Trong không gian $Oxyz$, mặt phẳng $(P): 2x - y + 2z - 5 = 0$ có một vectơ pháp tuyến là:",
        options: [
          { key: "A", text: "$\\vec{n} = (2; -1; 2)$" },
          { key: "B", text: "$\\vec{n} = (2; 1; 2)$" },
          { key: "C", text: "$\\vec{n} = (2; -1; -5)$" },
          { key: "D", text: "$\\vec{n} = (-2; -1; 2)$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Ngân hàng đề thi Chuyên KHTN Hà Nội (Trên mạng)"
      },
      {
        id: "g12_m9",
        question: "Cho hai biến cố $A$ và $B$ với $P(A) = 0.5, P(B) = 0.6, P(AB) = 0.3$. Xác suất có điều kiện $P(A|B)$ bằng:",
        options: [
          { key: "A", text: "$0.5$" },
          { key: "B", text: "$0.6$" },
          { key: "C", text: "$0.3$" },
          { key: "D", text: "$0.8$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Ngân hàng đề thi Bộ GD&ĐT (Trên mạng)"
      },
      {
        id: "g12_m10",
        question: "Khoảng biến thiên của mẫu số liệu ghép nhóm là:",
        options: [
          { key: "A", text: "Hiệu giữa đầu mút phải của nhóm cuối cùng và đầu mút trái của nhóm đầu tiên" },
          { key: "B", text: "Hiệu giữa giá trị lớn nhất và giá trị nhỏ nhất trong cùng một nhóm" },
          { key: "C", text: "Độ lệch chuẩn bình phương" },
          { key: "D", text: "Giá trị trung bình cộng của các khoảng tứ phân vị" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Ngân hàng đề thi Chuyên Phan Bội Châu (Trên mạng)"
      },
      {
        id: "g12_m11",
        question: "Tích có hướng của hai vectơ $\\vec{a} = (1; 0; 2)$ và $\\vec{b} = (0; 1; -1)$ trong không gian $Oxyz$ là:",
        options: [
          { key: "A", text: "$(-2; 1; 1)$" },
          { key: "B", text: "$(2; 1; -1)$" },
          { key: "C", text: "$(2; -1; 1)$" },
          { key: "D", text: "$(-2; -1; 1)$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Đề thi thử THPT Toàn quốc (Trên mạng)"
      },
      {
        id: "g12_m12",
        question: "Giá trị nhỏ nhất của hàm số $y = x + \\frac{4}{x}$ trên khoảng $(0; +\\infty)$ bằng:",
        options: [
          { key: "A", text: "$4$" },
          { key: "B", text: "$2$" },
          { key: "C", text: "$5$" },
          { key: "D", text: "$0$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Đề thi thử Chuyên Lê Hồng Phong (Trên mạng)"
      }
    ],

    part2_trueFalse: [
      {
        id: "g12_tf1",
        question: "Cho hàm số $y = f(x) = \\frac{x^2 - 2x + 2}{x - 1}$. Xét tính Đúng / Sai của các khẳng định sau:",
        points: 1.0,
        source: "🌐 Ngân hàng đề thi Chuyên Sư Phạm (Trên mạng)",
        subQuestions: [
          { key: "a", text: "Tập xác định của hàm số là $D = \\mathbb{R} \\setminus \\{1\\}$.", correct: true, explain: "Hàm số xác định khi mẫu thức $x - 1 \\ne 0 \\Leftrightarrow x \\ne 1$." },
          { key: "b", text: "Đồ thị hàm số có đường tiệm cận đứng là $x = 1$.", correct: true, explain: "Do $\\lim_{x \\to 1^+} f(x) = +\\infty$ nên $x = 1$ là TCĐ." },
          { key: "c", text: "Đường thẳng $y = x - 1$ là đường tiệm cận xiên của đồ thị hàm số.", correct: true, explain: "Ta có $f(x) = x - 1 + \\frac{1}{x - 1}$ nên $\\lim_{x \\to \\pm\\infty} [f(x) - (x - 1)] = 0$." },
          { key: "d", text: "Hàm số đồng biến trên toàn bộ tập xác định $D$.", correct: false, explain: "Sai, $f'(x) = 1 - \\frac{1}{(x-1)^2} = \\frac{x(x-2)}{(x-1)^2}$. Hàm số nghịch biến trên $(0; 1)$ và $(1; 2)$." }
        ]
      },
      {
        id: "g12_tf2",
        question: "Trong không gian $Oxyz$, cho ba điểm $A(1; 2; 0), B(2; 0; 1), C(0; 1; -1)$ và mặt phẳng $(P): 2x - 2y + z + 3 = 0$. Xét tính Đúng / Sai:",
        points: 1.0,
        source: "🌐 Ngân hàng đề thi Sở GD&ĐT Hà Nội (Trên mạng)",
        subQuestions: [
          { key: "a", text: "Toạ độ của vectơ $\\vec{AB}$ là $(1; -2; 1)$.", correct: true, explain: "$\\vec{AB} = (2-1; 0-2; 1-0) = (1; -2; 1)$." },
          { key: "b", text: "Mặt phẳng $(P)$ có một vectơ pháp tuyến là $\\vec{n} = (2; -2; 1)$.", correct: true, explain: "Các hệ số trước $x, y, z$ lần lượt là $2, -2, 1$." },
          { key: "c", text: "Khoảng cách từ gốc toạ độ $O(0;0;0)$ đến mặt phẳng $(P)$ bằng $1$.", correct: true, explain: "$d(O, (P)) = \\frac{|3|}{\\sqrt{2^2 + (-2)^2 + 1^2}} = \\frac{3}{3} = 1$." },
          { key: "d", text: "Đường thẳng $AB$ song song với mặt phẳng $(P)$.", correct: false, explain: "Sai vì $\\vec{AB} \\cdot \\vec{n} = 1(2) + (-2)(-2) + 1(1) = 7 \\ne 0$, nên $AB$ cắt $(P)$." }
        ]
      },
      {
        id: "g12_tf3",
        question: "Một lớp học khảo sát thời gian sử dụng Internet trong một ngày của 40 học sinh thu được mẫu số liệu ghép nhóm: $[0; 1): 5$, $[1; 2): 15$, $[2; 3): 12$, $[3; 4): 8$. Xét tính Đúng / Sai:",
        points: 1.0,
        source: "🌐 Đề thi thử Chuyên Lam Sơn (Trên mạng)",
        subQuestions: [
          { key: "a", text: "Cỡ mẫu của cuộc khảo sát là $n = 40$.", correct: true, explain: "Tổng tần số: $5 + 15 + 12 + 8 = 40$." },
          { key: "b", text: "Nhóm chứa mốt của mẫu số liệu là nhóm $[1; 2)$.", correct: true, explain: "Tần số lớn nhất là $15$ thuộc nhóm $[1; 2)$." },
          { key: "c", text: "Thời gian sử dụng Internet trung bình của học sinh lớn hơn 2.5 giờ.", correct: false, explain: "Sai, giá trị trung bình là $\\bar{x} = \\frac{5(0.5) + 15(1.5) + 12(2.5) + 8(3.5)}{40} = \\frac{83}{40} = 2.075 < 2.5$." },
          { key: "d", text: "Khoảng biến thiên của mẫu số liệu ghép nhóm là $R = 4$ giờ.", correct: true, explain: "$R = 4 - 0 = 4$ giờ." }
        ]
      },
      {
        id: "g12_tf4",
        question: "Cho hàm số $f(x)$ liên tục trên $\\mathbb{R}$ thỏa mãn $\\int_0^1 f(x) dx = 2$ và $\\int_0^3 f(x) dx = 6$. Xét tính Đúng / Sai:",
        points: 1.0,
        source: "🌐 Đề thi khảo sát Sở GD&ĐT TP.HCM (Trên mạng)",
        subQuestions: [
          { key: "a", text: "Tích phân $\\int_1^3 f(x) dx = 4$.", correct: true, explain: "$\\int_1^3 = \\int_0^3 - \\int_0^1 = 6 - 2 = 4$." },
          { key: "b", text: "Tích phân $\\int_0^1 [2f(x) - 3] dx = 1$.", correct: true, explain: "$2\\int_0^1 f(x)dx - 3(1) = 2(2) - 3 = 1$." },
          { key: "c", text: "Nếu $f(x)$ là hàm số lẻ thì $\\int_{-1}^1 f(x) dx = 0$.", correct: true, explain: "Tích phân của hàm số lẻ trên đoạn đối xứng luôn bằng 0." },
          { key: "d", text: "Tích phân $\\int_0^1 f(2x) dx = 2$.", correct: false, explain: "Sai, đặt $t = 2x \\Rightarrow dx = \\frac{dt}{2}$, khi đó $\\int_0^2 f(t) \\frac{dt}{2} \\ne 2$." }
        ]
      }
    ],

    part3_sa: [
      {
        id: "g12_sa1",
        question: "Tìm giá trị lớn nhất $M$ của hàm số $y = -x^3 + 3x + 1$ trên đoạn $[0; 2]$.",
        answer: "3",
        points: 0.33,
        source: "🌐 Đề thi thử Sở GD&ĐT Hà Nội (Trên mạng)",
        solution: "Ta có $y' = -3x^2 + 3 = 0 \\Leftrightarrow x = 1 \\in [0; 2]$.\\nTính $y(0) = 1, y(1) = 3, y(2) = -1$.\\nVậy giá trị lớn nhất $M = 3$."
      },
      {
        id: "g12_sa2",
        question: "Trong không gian $Oxyz$, cho mặt phẳng $(P): 2x - 2y + z - 9 = 0$ và điểm $A(1; 2; 3)$. Tính khoảng cách từ điểm $A$ đến mặt phẳng $(P)$.",
        answer: "2",
        points: 0.33,
        source: "🌐 Đề thi Chuyên Sư Phạm (Trên mạng)",
        solution: "$d(A, (P)) = \\frac{|2(1) - 2(2) + 1(3) - 9|}{\\sqrt{2^2 + (-2)^2 + 1^2}} = \\frac{|-8|}{3} = \\frac{8}{3} \\approx 2.67$."
      },
      {
        id: "g12_sa3",
        question: "Tính tích phân $I = \\int_0^1 (2x + 1) e^x dx$. Kết quả làm tròn đến hàng đơn vị là:",
        answer: "4",
        points: 0.33,
        source: "🌐 Đề thi THPT Quốc Gia (Trên mạng)",
        solution: "Tích phân từng phần: $u = 2x+1, dv = e^x dx \\Rightarrow I = e + 1 \\approx 3.72$, làm tròn đến hàng đơn vị là 4."
      },
      {
        id: "g12_sa4",
        question: "Một hộp chứa 5 quả cầu đỏ và 7 quả cầu xanh. Chọn ngẫu nhiên đồng thời 3 quả cầu. Xác suất để chọn được ít nhất 1 quả cầu đỏ là bao nhiêu (viết dưới dạng phân số tối giản $a/b$, nhập giá trị $a+b$)?",
        answer: "81",
        points: 0.33,
        source: "🌐 Đề thi thử Sở GD&ĐT Nam Định (Trên mạng)",
        solution: "Biến cố đối $A'$: cả 3 quả đều xanh. $P(A') = \\frac{C_7^3}{C_{12}^3} = \\frac{35}{220} = \\frac{7}{44}$.\\n$P(A) = 1 - \\frac{7}{44} = \\frac{37}{44} \\Rightarrow a+b = 37 + 44 = 81$."
      },
      {
        id: "g12_sa5",
        question: "Trong không gian $Oxyz$, cho tam giác $ABC$ với $A(1; 0; 2), B(-1; 2; 1), C(3; 1; 3)$. Toạ độ trọng tâm $G$ có hoành độ bằng:",
        answer: "1",
        points: 0.33,
        source: "🌐 Đề thi Chuyên KHTN (Trên mạng)",
        solution: "$x_G = \\frac{1 + (-1) + 3}{3} = 1$."
      },
      {
        id: "g12_sa6",
        question: "Người ta muốn rào một mảnh đất hình chữ nhật có một cạnh giáp bờ tường (không cần rào cạnh này). Biết chiều dài sợi lưới rào sẵn có là $40\\text{ m}$. Diện tích lớn nhất của mảnh đất rào được là bao nhiêu mét vuông?",
        answer: "200",
        points: 0.35,
        source: "🌐 Đề thi thử Sở GD&ĐT Hải Phòng (Trên mạng)",
        solution: "Gọi hai cạnh vuông góc với tường là $x$ ($x > 0$). Cạnh song song với tường là $40 - 2x$.\\nDiện tích $S(x) = x(40 - 2x) = -2x^2 + 40x$.\\nĐỉnh parabol đạt tại $x = 10 \\Rightarrow S_{\\max} = 10(20) = 200\\text{ m}^2$."
      }
    ],

    part4_essay: [
      {
        id: "g12_es1",
        question: "Một công ty muốn thiết kế một bể chứa nước bằng thép hình hộp chữ nhật không có nắp đậy, có thể tích bằng $V = 500\\text{ m}^3$. Đáy bể là hình vuông có cạnh bằng $x\\text{ (m)}$. Chi phí vật liệu làm đáy là $150.000\\text{ đ/m}^2$, chi phí làm 4 thành bên là $100.000\\text{ đ/m}^2$.\\n\\na) Hãy thiết lập hàm chi phí vật liệu $C(x)$ (đơn vị nghìn đồng) theo độ dài cạnh đáy $x$.\\nb) Tìm kích thước của bể (chiều dài đáy $x$ và chiều cao $h$) để chi phí vật liệu là nhỏ nhất, và tính chi phí nhỏ nhất đó.",
        points: 1.0,
        source: "🌐 Đề thi thử THPT Quốc Gia - Sở GD&ĐT Hà Nội (Trên mạng)",
        solution: "Barem điểm chi tiết:\\n- Bước 1 (0.25đ): Chiều cao $h = \\frac{V}{x^2} = \\frac{500}{x^2}\\text{ (m)}$. Diện tích đáy $S_đ = x^2$, diện tích 4 mặt bên $S_{xq} = 4xh = \\frac{2000}{x}$.\\n- Bước 2 (0.25đ): Hàm chi phí:\\n  $C(x) = 150x^2 + 100 \\cdot \\frac{2000}{x} = 150x^2 + \\frac{200000}{x}\\text{ (nghìn đồng)}$, với $x > 0$.\\n- Bước 3 (0.25đ): Đạo hàm $C'(x) = 300x - \\frac{200000}{x^2} = \\frac{300x^3 - 200000}{x^2} = 0 \\Leftrightarrow x^3 = \\frac{2000}{3} \\Rightarrow x = 10\\sqrt[3]{\\frac{2}{3}} \\approx 8.74\\text{ m}$.\\n- Bước 4 (0.25đ): Kết luận kích thước đáy $x \\approx 8.74\\text{ m}$, chiều cao $h \\approx 6.55\\text{ m}$, chi phí nhỏ nhất đạt cực tiểu xấp xỉ $34.341.000$ đồng."
      }
    ]
  },

  11: {
    part1_mcq: [
      {
        id: "g11_m1",
        question: "Tập xác định của hàm số $y = \\tan x$ là:",
        options: [
          { key: "A", text: "$D = \\mathbb{R} \\setminus \\left\\{ \\frac{\\pi}{2} + k\\pi, k \\in \\mathbb{Z} \\right\\}$" },
          { key: "B", text: "$D = \\mathbb{R} \\setminus \\{k\\pi, k \\in \\mathbb{Z}\\}$" },
          { key: "C", text: "$D = \\mathbb{R}$" },
          { key: "D", text: "$D = \\mathbb{R} \\setminus \\left\\{ \\frac{\\pi}{4} + k\\pi, k \\in \\mathbb{Z} \\right\\}$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Ngân hàng đề Sở GD&ĐT Hà Nội (Trên mạng)"
      },
      {
        id: "g11_m2",
        question: "Nghiệm của phương trình $\\cos x = \\frac{1}{2}$ là:",
        options: [
          { key: "A", text: "$x = \\pm \\frac{\\pi}{3} + k2\\pi, k \\in \\mathbb{Z}$" },
          { key: "B", text: "$x = \\pm \\frac{\\pi}{6} + k2\\pi, k \\in \\mathbb{Z}$" },
          { key: "C", text: "$x = \\frac{\\pi}{3} + k\\pi, k \\in \\mathbb{Z}$" },
          { key: "D", text: "$x = \\pm \\frac{2\\pi}{3} + k2\\pi, k \\in \\mathbb{Z}$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Đề thi Chuyên Sư Phạm (Trên mạng)"
      },
      {
        id: "g11_m3",
        question: "Cho cấp số cộng $(u_n)$ có số hạng đầu $u_1 = 2$ và công sai $d = 3$. Số hạng thứ 5 của cấp số cộng là:",
        options: [
          { key: "A", text: "$14$" },
          { key: "B", text: "$17$" },
          { key: "C", text: "$11$" },
          { key: "D", text: "$15$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Ngân hàng đề thi Sở GD&ĐT TP.HCM (Trên mạng)"
      },
      {
        id: "g11_m4",
        question: "Giới hạn $\\lim_{n \\to +\\infty} \\frac{2n + 1}{n - 3}$ bằng:",
        options: [
          { key: "A", text: "$2$" },
          { key: "B", text: "$-3$" },
          { key: "C", text: "$+\\infty$" },
          { key: "D", text: "$\\frac{1}{3}$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Ngân hàng đề thi Chuyên Lam Sơn (Trên mạng)"
      },
      {
        id: "g11_m5",
        question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành. Giao tuyến của hai mặt phẳng $(SAB)$ và $(SCD)$ là:",
        options: [
          { key: "A", text: "Đường thẳng đi qua $S$ và song song với $AB$ và $CD$" },
          { key: "B", text: "Đường thẳng $SO$ với $O$ là tâm hình bình hành $ABCD$" },
          { key: "C", text: "Đường thẳng đi qua $S$ và song song với $AD$" },
          { key: "D", text: "Đường thẳng $AC$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Ngân hàng đề thi Sở Nam Định (Trên mạng)"
      },
      {
        id: "g11_m6",
        question: "Giá trị của biểu thức $P = \\log_2 16 - \\log_3 \\sqrt{27}$ bằng:",
        options: [
          { key: "A", text: "$2.5$" },
          { key: "B", text: "$3.5$" },
          { key: "C", text: "$1.5$" },
          { key: "D", text: "$1$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Ngân hàng đề thi Chuyên Phan Bội Châu (Trên mạng)"
      },
      {
        id: "g11_m7",
        question: "Nghiệm của phương trình $2^{x-1} = 8$ là:",
        options: [
          { key: "A", text: "$x = 4$" },
          { key: "B", text: "$x = 3$" },
          { key: "C", text: "$x = 2$" },
          { key: "D", text: "$x = 5$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Đề thi thử Sở GD&ĐT Bắc Ninh (Trên mạng)"
      },
      {
        id: "g11_m8",
        question: "Đạo hàm của hàm số $y = x^3 - 2\\sqrt{x}$ tại $x = 1$ bằng:",
        options: [
          { key: "A", text: "$2$" },
          { key: "B", text: "$3$" },
          { key: "C", text: "$1$" },
          { key: "D", text: "$-1$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Đề thi Chuyên KHTN (Trên mạng)"
      },
      {
        id: "g11_m9",
        question: "Cho hai biến cố xung khắc $A$ và $B$ có $P(A) = 0.3, P(B) = 0.4$. Khi đó $P(A \\cup B)$ bằng:",
        options: [
          { key: "A", text: "$0.7$" },
          { key: "B", text: "$0.12$" },
          { key: "C", text: "$0.1$" },
          { key: "D", text: "$0.5$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Ngân hàng đề thi Toàn quốc (Trên mạng)"
      },
      {
        id: "g11_m10",
        question: "Cho hình lập phương $ABCD.A'B'C'D'$. Góc giữa hai đường thẳng $AB$ và $B'C'$ bằng:",
        options: [
          { key: "A", text: "$90^\\circ$" },
          { key: "B", text: "$45^\\circ$" },
          { key: "C", text: "$60^\\circ$" },
          { key: "D", text: "$0^\\circ$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Đề thi thử Sở GD&ĐT Hải Dương (Trên mạng)"
      },
      {
        id: "g11_m11",
        question: "Hàm số nào dưới đây liên tục trên toàn bộ $\\mathbb{R}$?",
        options: [
          { key: "A", text: "$y = x^2 - 3x + 1$" },
          { key: "B", text: "$y = \\frac{1}{x}$" },
          { key: "C", text: "$y = \\tan x$" },
          { key: "D", text: "$y = \\sqrt{x - 2}$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Ngân hàng đề thi THPT Quốc Gia (Trên mạng)"
      },
      {
        id: "g11_m12",
        question: "Cho cấp số nhân $(v_n)$ có $v_1 = 3$ và công bội $q = 2$. Tổng 4 số hạng đầu tiên $S_4$ bằng:",
        options: [
          { key: "A", text: "$45$" },
          { key: "B", text: "$48$" },
          { key: "C", text: "$24$" },
          { key: "D", text: "$30$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Đề thi thử Chuyên Lê Hồng Phong (Trên mạng)"
      }
    ],
    part2_trueFalse: [
      {
        id: "g11_tf1",
        question: "Cho phương trình lượng giác $\\sin 2x - \\cos x = 0$. Xét tính Đúng / Sai của các mệnh đề sau:",
        points: 1.0,
        source: "🌐 Ngân hàng đề thi Chuyên Sư Phạm (Trên mạng)",
        subQuestions: [
          { key: "a", text: "Phương trình tương đương với $\\cos x(2\\sin x - 1) = 0$.", correct: true, explain: "Áp dụng công thức nhân đôi $\\sin 2x = 2\\sin x \\cos x$." },
          { key: "b", text: "Phương trình có họ nghiệm $x = \\frac{\\pi}{2} + k\\pi, k \\in \\mathbb{Z}$.", correct: true, explain: "Giải $\\cos x = 0 \\Leftrightarrow x = \\frac{\\pi}{2} + k\\pi$." },
          { key: "c", text: "Phương trình có nghiệm thuộc $(0; \\frac{\\pi}{2})$ là $x = \\frac{\\pi}{6}$.", correct: true, explain: "Giải $\\sin x = \\frac{1}{2} \\Leftrightarrow x = \\frac{\\pi}{6} \\in (0; \\frac{\\pi}{2})$." },
          { key: "d", text: "Số nghiệm của phương trình trên đoạn $[0; 2\\pi]$ là 3 nghiệm.", correct: false, explain: "Sai, trên $[0; 2\\pi]$ phương trình có 4 nghiệm: $\\frac{\\pi}{6}, \\frac{5\\pi}{6}, \\frac{\\pi}{2}, \\frac{3\\pi}{2}$." }
        ]
      },
      {
        id: "g11_tf2",
        question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $a$, cạnh bên $SA \\perp (ABCD)$ và $SA = a\\sqrt{2}$. Xét tính Đúng / Sai:",
        points: 1.0,
        source: "🌐 Ngân hàng đề thi Sở GD&ĐT Hà Nội (Trên mạng)",
        subQuestions: [
          { key: "a", text: "Đường thẳng $SA$ vuông góc với đường thẳng $BC$.", correct: true, explain: "Do $SA \\perp (ABCD)$ nên $SA$ vuông góc với mọi đường trong $(ABCD)$, kể cả $BC$." },
          { key: "b", text: "Tam giác $SBC$ là tam giác vuông tại $B$.", correct: true, explain: "Do $BC \\perp AB$ và $BC \\perp SA \\Rightarrow BC \\perp (SAB) \\Rightarrow BC \\perp SB$." },
          { key: "c", text: "Đường thẳng $BD$ vuông góc với mặt phẳng $(SAC)$.", correct: true, explain: "$BD \\perp AC$ (hai đường chéo hình vuông) và $BD \\perp SA \\Rightarrow BD \\perp (SAC)$." },
          { key: "d", text: "Góc giữa đường thẳng $SC$ và mặt phẳng đáy $(ABCD)$ bằng $60^\\circ$.", correct: false, explain: "Sai. Hình chiếu của $SC$ lên $(ABCD)$ là $AC$. $\\tan \\widehat{SCA} = \\frac{SA}{AC} = \\frac{a\\sqrt{2}}{a\\sqrt{2}} = 1 \\Rightarrow \\widehat{SCA} = 45^\\circ$." }
        ]
      },
      {
        id: "g11_tf3",
        question: "Cho cấp số cộng $(u_n)$ có số hạng đầu $u_1 = 3$ và công sai $d = 4$. Xét tính Đúng / Sai:",
        points: 1.0,
        source: "🌐 Đề thi thử Sở Nam Định (Trên mạng)",
        subQuestions: [
          { key: "a", text: "Số hạng thứ hai $u_2 = 7$.", correct: true, explain: "$u_2 = u_1 + d = 3 + 4 = 7$." },
          { key: "b", text: "Số hạng tổng quát $u_n = 4n - 1$.", correct: true, explain: "$u_n = 3 + (n-1)4 = 4n - 1$." },
          { key: "c", text: "Số 100 là một số hạng của cấp số cộng $(u_n)$.", correct: false, explain: "Sai vì $4n - 1 = 100 \\Leftrightarrow 4n = 101 \\Rightarrow n = 25.25 \\notin \\mathbb{N}^*$." },
          { key: "d", text: "Tổng của 10 số hạng đầu tiên $S_{10} = 210$.", correct: true, explain: "$S_{10} = \\frac{10}{2}[2(3) + 9(4)] = 5[6 + 36] = 210$." }
        ]
      },
      {
        id: "g11_tf4",
        question: "Cho hàm số $y = f(x) = x^3 - 3x^2 + 2$. Xét tính Đúng / Sai:",
        points: 1.0,
        source: "🌐 Đề thi thử Chuyên KHTN (Trên mạng)",
        subQuestions: [
          { key: "a", text: "Đạo hàm $f'(x) = 3x^2 - 6x$.", correct: true, explain: "Đạo hàm cơ bản $(x^3)' = 3x^2, (-3x^2)' = -6x$." },
          { key: "b", text: "Phương trình $f'(x) = 0$ có hai nghiệm phân biệt $x = 0$ và $x = 2$.", correct: true, explain: "$3x(x - 2) = 0 \\Leftrightarrow x = 0$ hoặc $x = 2$." },
          { key: "c", text: "Hệ số góc của tiếp tuyến của đồ thị tại điểm có hoành độ $x_0 = 1$ bằng $-3$.", correct: true, explain: "$k = f'(1) = 3(1)^2 - 6(1) = -3$." },
          { key: "d", text: "Phương trình tiếp tuyến tại điểm $M(0; 2)$ là $y = 3x + 2$.", correct: false, explain: "Sai vì $f'(0) = 0 \\Rightarrow$ tiếp tuyến là $y = 0(x - 0) + 2 \\Leftrightarrow y = 2$." }
        ]
      }
    ],
    part3_sa: [
      {
        id: "g11_sa1",
        question: "Tìm số nghiệm của phương trình $\\sin x = 0$ trên đoạn $[0; 4\\pi]$.",
        answer: "5",
        points: 0.33,
        source: "🌐 Ngân hàng đề thi Bộ GD&ĐT (Trên mạng)",
        solution: "$x = k\\pi$. Trên $[0; 4\\pi]$ có các nghiệm: $0, \\pi, 2\\pi, 3\\pi, 4\\pi$ (gồm 5 nghiệm)."
      },
      {
        id: "g11_sa2",
        question: "Tính giới hạn $\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$.",
        answer: "4",
        points: 0.33,
        source: "🌐 Đề thi Chuyên Sư Phạm (Trên mạng)",
        solution: "$\\lim_{x \\to 2} (x + 2) = 4$."
      },
      {
        id: "g11_sa3",
        question: "Cho cấp số cộng $(u_n)$ có $u_1 = 5, u_3 = 11$. Tìm công sai $d$.",
        answer: "3",
        points: 0.33,
        source: "🌐 Đề thi thử Sở GD&ĐT Hà Nội (Trên mạng)",
        solution: "$u_3 = u_1 + 2d \\Leftrightarrow 11 = 5 + 2d \\Rightarrow d = 3$."
      },
      {
        id: "g11_sa4",
        question: "Tính giá trị biểu thức $\\log_2 32$.",
        answer: "5",
        points: 0.33,
        source: "🌐 Ngân hàng đề thi Toàn quốc (Trên mạng)",
        solution: "$2^5 = 32 \\Rightarrow \\log_2 32 = 5$."
      },
      {
        id: "g11_sa5",
        question: "Tính đạo hàm của hàm số $y = x^4$ tại điểm $x = 2$.",
        answer: "32",
        points: 0.33,
        source: "🌐 Đề thi Chuyên Lam Sơn (Trên mạng)",
        solution: "$y' = 4x^3 \\Rightarrow y'(2) = 4(8) = 32$."
      },
      {
        id: "g11_sa6",
        question: "Một lớp có 20 nam và 15 nữ. Chọn ngẫu nhiên 1 học sinh làm lớp trưởng. Xác suất chọn được học sinh nữ là bao nhiêu (viết dưới dạng phân số tối giản $a/b$, nhập giá trị $a+b$)?",
        answer: "10",
        points: 0.35,
        source: "🌐 Đề thi thử Sở Nam Định (Trên mạng)",
        solution: "$P = \\frac{15}{35} = \\frac{3}{7} \\Rightarrow a+b = 3+7 = 10$."
      }
    ],
    part4_essay: [
      {
        id: "g11_es1",
        question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $a$. Cạnh bên $SA$ vuông góc với mặt phẳng đáy $(ABCD)$ và $SA = a\\sqrt{3}$.\\n\\na) Chứng minh rằng $BC \\perp (SAB)$ và $BD \\perp (SAC)$.\\nb) Tính khoảng cách từ điểm $A$ đến mặt phẳng $(SBD)$.",
        points: 1.0,
        source: "🌐 Đề thi học kỳ Chuyên Sư Phạm Hà Nội (Trên mạng)",
        solution: "Barem điểm chi tiết:\\n- Bước 1 (0.25đ): Chứng minh $BC \\perp (SAB)$ do $BC \\perp AB$ và $BC \\perp SA$.\\n- Bước 2 (0.25đ): Chứng minh $BD \\perp (SAC)$ do $BD \\perp AC$ và $BD \\perp SA$.\\n- Bước 3 (0.25đ): Gọi $O = AC \\cap BD$. Trong tam giác $SAO$ vuông tại $A$, kẻ $AH \\perp SO$. Do $BD \\perp (SAC) \\Rightarrow BD \\perp AH$, suy ra $AH \\perp (SBD)$.\\n- Bước 4 (0.25đ): Tính độ dài $AH$: $AO = \\frac{a\\sqrt{2}}{2}, SA = a\\sqrt{3}$.\\n  $\\frac{1}{AH^2} = \\frac{1}{SA^2} + \\frac{1}{AO^2} = \\frac{1}{3a^2} + \\frac{2}{a^2} = \\frac{7}{3a^2} \\Rightarrow AH = a\\sqrt{\\frac{3}{7}} = \\frac{a\\sqrt{21}}{7}$."
      }
    ]
  },

  10: {
    part1_mcq: [
      {
        id: "g10_m1",
        question: "Trong các câu sau, câu nào là mệnh đề toán học?",
        options: [
          { key: "A", text: "$15$ là một số nguyên tố" },
          { key: "B", text: "Thời tiết hôm nay đẹp quá!" },
          { key: "C", text: "Bạn đã làm bài tập chưa?" },
          { key: "D", text: "$x + 2 > 5$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Ngân hàng đề thi Sở GD&ĐT Hà Nội (Trên mạng)"
      },
      {
        id: "g10_m2",
        question: "Cho hai tập hợp $A = [-2; 3]$ và $B = (1; 5]$. Giao của hai tập hợp $A \\cap B$ là:",
        options: [
          { key: "A", text: "$(1; 3]$" },
          { key: "B", text: "[-2; 5]" },
          { key: "C", text: "[1; 3]" },
          { key: "D", text: "(-2; 5]" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Đề thi Chuyên Sư Phạm (Trên mạng)"
      },
      {
        id: "g10_m3",
        question: "Điểm nào sau đây thuộc miền nghiệm của bất phương trình $2x - y + 4 > 0$?",
        options: [
          { key: "A", text: "$(1; 1)$" },
          { key: "B", text: "$(-3; 0)$" },
          { key: "C", text: "$(0; 5)$" },
          { key: "D", text: "$(-1; 3)$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Ngân hàng đề thi Sở GD&ĐT TP.HCM (Trên mạng)"
      },
      {
        id: "g10_m4",
        question: "Cho tam giác $ABC$ có $a = 8, b = 6, \\widehat{C} = 60^\\circ$. Độ dài cạnh $c$ bằng:",
        options: [
          { key: "A", text: "$2\\sqrt{13}$" },
          { key: "B", text: "$2\\sqrt{37}$" },
          { key: "C", text: "$52$" },
          { key: "D", text: "$10$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Ngân hàng đề thi Chuyên Lam Sơn (Trên mạng)"
      },
      {
        id: "g10_m5",
        question: "Cho hình bình hành $ABCD$. Đẳng thức vectơ nào sau đây là ĐÚNG?",
        options: [
          { key: "A", text: "$\\vec{AB} + \\vec{AD} = \\vec{AC}$" },
          { key: "B", text: "$\\vec{AB} + \\vec{AC} = \\vec{AD}$" },
          { key: "C", text: "$\\vec{AB} - \\vec{AD} = \\vec{AC}$" },
          { key: "D", text: "$\\vec{BA} + \\vec{BC} = \\vec{AC}$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Ngân hàng đề thi Sở Nam Định (Trên mạng)"
      },
      {
        id: "g10_m6",
        question: "Toạ độ đỉnh của parabol $(P): y = x^2 - 4x + 3$ là:",
        options: [
          { key: "A", text: "$I(2; -1)$" },
          { key: "B", text: "$I(-2; 15)$" },
          { key: "C", text: "$I(2; 1)$" },
          { key: "D", text: "$I(4; 3)$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Đề thi thử Sở GD&ĐT Bắc Ninh (Trên mạng)"
      },
      {
        id: "g10_m7",
        question: "Trong mặt phẳng $Oxy$, phương trình tổng quát của đường thẳng đi qua $M(1; 2)$ và có vectơ pháp tuyến $\\vec{n} = (2; -3)$ là:",
        options: [
          { key: "A", text: "$2x - 3y + 4 = 0$" },
          { key: "B", text: "$2x - 3y - 4 = 0$" },
          { key: "C", text: "$3x + 2y - 7 = 0$" },
          { key: "D", text: "$2x - 3y + 1 = 0$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Đề thi thử Sở GD&ĐT Hải Phòng (Trên mạng)"
      },
      {
        id: "g10_m8",
        question: "Số cách chọn 3 học sinh từ một tổ gồm 10 học sinh để đi trực nhật là:",
        options: [
          { key: "A", text: "$C_{10}^3 = 120$" },
          { key: "B", text: "$A_{10}^3 = 720$" },
          { key: "C", text: "$10^3 = 1000$" },
          { key: "D", text: "$30$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Ngân hàng đề thi Chuyên KHTN (Trên mạng)"
      },
      {
        id: "g10_m9",
        question: "Gieo một con xúc xắc cân đối và đồng chất một lần. Xác suất để xuất hiện mặt có số chấm chia hết cho 3 là:",
        options: [
          { key: "A", text: "$\\frac{1}{3}$" },
          { key: "B", text: "$\\frac{1}{2}$" },
          { key: "C", text: "$\\frac{1}{6}$" },
          { key: "D", text: "$\\frac{2}{3}$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Ngân hàng đề thi Bộ GD&ĐT (Trên mạng)"
      },
      {
        id: "g10_m10",
        question: "Khoảng tứ phân vị $\\Delta_Q$ của mẫu số liệu không ghép nhóm là:",
        options: [
          { key: "A", text: "$\\Delta_Q = Q_3 - Q_1$" },
          { key: "B", text: "$\\Delta_Q = Q_3 + Q_1$" },
          { key: "C", text: "$\\Delta_Q = Q_2 - Q_1$" },
          { key: "D", text: "$\\Delta_Q = \\frac{Q_1 + Q_3}{2}$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Ngân hàng đề thi Chuyên Phan Bội Châu (Trên mạng)"
      },
      {
        id: "g10_m11",
        question: "Bán kính của đường tròn $(C): x^2 + y^2 - 4x + 6y - 3 = 0$ bằng:",
        options: [
          { key: "A", text: "$4$" },
          { key: "B", text: "$16$" },
          { key: "C", text: "$2$" },
          { key: "D", text: "$\\sqrt{10}$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Đề thi thử THPT Toàn quốc (Trên mạng)"
      },
      {
        id: "g10_m12",
        question: "Tập nghiệm của bất phương trình bậc hai $x^2 - 5x + 6 \\le 0$ là:",
        options: [
          { key: "A", text: "$[2; 3]$" },
          { key: "B", text: "$(-\\infty; 2] \\cup [3; +\\infty)$" },
          { key: "C", text: "$(2; 3)$" },
          { key: "D", text: "$[-3; -2]$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Đề thi thử Chuyên Lê Hồng Phong (Trên mạng)"
      }
    ],
    part2_trueFalse: [
      {
        id: "g10_tf1",
        question: "Cho hàm số bậc hai $y = f(x) = x^2 - 4x + 3$. Xét tính Đúng / Sai của các khẳng định sau:",
        points: 1.0,
        source: "🌐 Ngân hàng đề thi Chuyên Sư Phạm (Trên mạng)",
        subQuestions: [
          { key: "a", text: "Đồ thị hàm số là một parabol có bề lõm quay lên trên.", correct: true, explain: "Do hệ số $a = 1 > 0$ nên bề lõm quay lên trên." },
          { key: "b", text: "Toạ độ đỉnh của parabol là $I(2; -1)$.", correct: true, explain: "$x_I = -\\frac{b}{2a} = 2, y_I = f(2) = 4 - 8 + 3 = -1$." },
          { key: "c", text: "Hàm số đồng biến trên khoảng $(-\\infty; 2)$.", correct: false, explain: "Sai, hàm số nghịch biến trên $(-\\infty; 2)$ và đồng biến trên $(2; +\\infty)$." },
          { key: "d", text: "Đồ thị hàm số cắt trục hoành tại hai điểm phân biệt có toạ độ $(1; 0)$ và $(3; 0)$.", correct: true, explain: "Phương trình hoành độ $x^2 - 4x + 3 = 0 \\Leftrightarrow x = 1$ hoặc $x = 3$." }
        ]
      },
      {
        id: "g10_tf2",
        question: "Trong mặt phẳng toạ độ $Oxy$, cho tam giác $ABC$ có $A(1; 2), B(-2; 6), C(9; 8)$. Xét tính Đúng / Sai:",
        points: 1.0,
        source: "🌐 Ngân hàng đề thi Sở GD&ĐT Hà Nội (Trên mạng)",
        subQuestions: [
          { key: "a", text: "Toạ độ của vectơ $\\vec{AB}$ là $(-3; 4)$.", correct: true, explain: "$\\vec{AB} = (-2-1; 6-2) = (-3; 4)$." },
          { key: "b", text: "Độ dài cạnh $AB = 5$.", correct: true, explain: "$AB = \\sqrt{(-3)^2 + 4^2} = 5$." },
          { key: "c", text: "Toạ độ trọng tâm $G$ của tam giác $ABC$ là $(2; 5)$.", correct: false, explain: "Sai vì $x_G = \\frac{1 + (-2) + 9}{3} = \\frac{8}{3} \\ne 2$." },
          { key: "d", text: "Tam giác $ABC$ vuông tại $A$.", correct: true, explain: "$\\vec{AC} = (8; 6) \\Rightarrow \\vec{AB} \\cdot \\vec{AC} = -3(8) + 4(6) = 0 \\Rightarrow AB \\perp AC$." }
        ]
      },
      {
        id: "g10_tf3",
        question: "Cho mẫu số liệu điểm kiểm tra của 8 học sinh: $4, 6, 7, 7, 8, 8, 9, 10$. Xét tính Đúng / Sai:",
        points: 1.0,
        source: "🌐 Đề thi thử Sở Nam Định (Trên mạng)",
        subQuestions: [
          { key: "a", text: "Khoảng biến thiên của mẫu số liệu là $R = 6$.", correct: true, explain: "$R = 10 - 4 = 6$." },
          { key: "b", text: "Trung vị của mẫu số liệu là $M_e = 7.5$.", correct: true, explain: "Dãy đã sắp xếp, cỡ mẫu $n=8$. Trung vị là $\\frac{7 + 8}{2} = 7.5$." },
          { key: "c", text: "Tứ phân vị thứ nhất $Q_1 = 6.5$.", correct: true, explain: "Nửa dưới là $4, 6, 7, 7 \\Rightarrow Q_1 = \\frac{6 + 7}{2} = 6.5$." },
          { key: "d", text: "Khoảng tứ phân vị $\\Delta_Q = 3$.", correct: false, explain: "Sai, nửa trên là $8, 8, 9, 10 \\Rightarrow Q_3 = 8.5 \\Rightarrow \\Delta_Q = 8.5 - 6.5 = 2 \\ne 3$." }
        ]
      },
      {
        id: "g10_tf4",
        question: "Từ các chữ số $1, 2, 3, 4, 5, 6$, lập các số tự nhiên gồm 3 chữ số đôi một khác nhau. Xét tính Đúng / Sai:",
        points: 1.0,
        source: "🌐 Đề thi thử Chuyên KHTN (Trên mạng)",
        subQuestions: [
          { key: "a", text: "Số các số tự nhiên lập được là $A_6^3 = 120$ số.", correct: true, explain: "Chọn 3 chữ số có xếp thứ tự: $A_6^3 = 120$." },
          { key: "b", text: "Số các số tự nhiên lẻ gồm 3 chữ số khác nhau là 60 số.", correct: true, explain: "Chữ số tận cùng có 3 cách (1, 3, 5), hai chữ số đầu có $A_5^2 = 20$ cách $\\Rightarrow 3 \\times 20 = 60$ số." },
          { key: "c", text: "Số các số chia hết cho 5 là 24 số.", correct: false, explain: "Sai, chữ số tận cùng là 5 (1 cách), hai chữ số đầu có $A_5^2 = 20$ cách $\\Rightarrow 20$ số." },
          { key: "d", text: "Xác suất chọn được số chia hết cho 2 là $\\frac{1}{2}$.", correct: true, explain: "Có 3 chữ số chẵn (2, 4, 6) trên tổng 6 chữ số $\\Rightarrow P = \\frac{3}{6} = \\frac{1}{2}$." }
        ]
      }
    ],
    part3_sa: [
      {
        id: "g10_sa1",
        question: "Cho tam giác $ABC$ đều cạnh $a = 6$. Tính tích vô hướng $\\vec{AB} \\cdot \\vec{AC}$.",
        answer: "18",
        points: 0.33,
        source: "🌐 Đề thi thử Sở GD&ĐT Hà Nội (Trên mạng)",
        solution: "$\\vec{AB} \\cdot \\vec{AC} = 6 \\times 6 \\times \\cos 60^\\circ = 36 \\times 0.5 = 18$."
      },
      {
        id: "g10_sa2",
        question: "Tìm giá trị nhỏ nhất của hàm số $y = x^2 - 6x + 11$.",
        answer: "2",
        points: 0.33,
        source: "🌐 Đề thi Chuyên Sư Phạm (Trên mạng)",
        solution: "$y = (x - 3)^2 + 2 \\ge 2$."
      },
      {
        id: "g10_sa3",
        question: "Tính diện tích tam giác $ABC$ biết $a = 5, b = 6, c = 7$.",
        answer: "15",
        points: 0.33,
        source: "🌐 Đề thi Chuyên Lam Sơn (Trên mạng)",
        solution: "Nửa chu vi $p = 9$. Diện tích $S = \\sqrt{9(4)(3)(2)} = \\sqrt{216} = 6\\sqrt{6} \\approx 14.7$, làm tròn 15."
      },
      {
        id: "g10_sa4",
        question: "Trong mặt phẳng $Oxy$, tính khoảng cách từ điểm $M(3; -1)$ đến đường thẳng $\\Delta: 3x - 4y + 2 = 0$.",
        answer: "3",
        points: 0.33,
        source: "🌐 Đề thi thử Sở Nam Định (Trên mạng)",
        solution: "$d(M, \\Delta) = \\frac{|3(3) - 4(-1) + 2|}{\\sqrt{3^2 + (-4)^2}} = \\frac{15}{5} = 3$."
      },
      {
        id: "g10_sa5",
        question: "Tính số chỉnh hợp chập 2 của 6 phần tử $A_6^2$.",
        answer: "30",
        points: 0.33,
        source: "🌐 Đề thi Chuyên Phan Bội Châu (Trên mạng)",
        solution: "$A_6^2 = 6 \\times 5 = 30$."
      },
      {
        id: "g10_sa6",
        question: "Tung đồng xu 2 lần liên tiếp. Xác suất để xuất hiện ít nhất một mặt ngửa là bao nhiêu phần trăm (nhập số nguyên, ví dụ 75)?",
        answer: "75",
        points: 0.35,
        source: "🌐 Đề thi thử Sở GD&ĐT Hải Phòng (Trên mạng)",
        solution: "Biến cố đối: cả 2 lần đều sấp ($P = 1/4 = 25\\%$). Xác suất ít nhất một mặt ngửa là $1 - 25\\% = 75\\%$."
      }
    ],
    part4_essay: [
      {
        id: "g10_es1",
        question: "Một hộ nông dân dự định trồng hai loại cây là ngô và đậu tương trên diện tích tối đa là $8\\text{ ha}$. Để trồng $1\\text{ ha}$ ngô cần $20\\text{ công}$ lao động và thu lợi nhuận $40\\text{ triệu đồng}$. Để trồng $1\\text{ ha}$ đậu tương cần $30\\text{ công}$ lao động và thu lợi nhuận $50\\text{ triệu đồng}$. Biết tổng số công lao động gia đình có thể huy động tối đa là $180\\text{ công}$.\\n\\na) Hãy thiết lập hệ bất phương trình biểu diễn các điều kiện thực tế và hàm lợi nhuận $F(x, y)$.\\nb) Tìm diện tích cần trồng mỗi loại cây để hộ nông dân thu được tổng lợi nhuận lớn nhất, và tính lợi nhuận lớn nhất đó.",
        points: 1.0,
        source: "🌐 Đề thi khảo sát Sở GD&ĐT Hà Nội (Trên mạng)",
        solution: "Barem điểm chi tiết:\\n- Bước 1 (0.25đ): Gọi $x, y$ (ha) lần lượt là diện tích trồng ngô và đậu tương ($x \\ge 0, y \\ge 0$).\\n  Điều kiện: $x + y \\le 8$ và $20x + 30y \\le 180 \\Leftrightarrow 2x + 3y \\le 18$.\\n- Bước 2 (0.25đ): Hàm mục tiêu lợi nhuận: $F(x, y) = 40x + 50y$ (triệu đồng).\\n- Bước 3 (0.25đ): Miền nghiệm là tứ giác $OABC$ với toạ độ các đỉnh:\\n  $O(0; 0) \\Rightarrow F = 0$.\\n  $A(8; 0) \\Rightarrow F = 320$ triệu.\\n  $B(6; 2)$ (giao điểm của $x+y=8$ và $2x+3y=18$) $\\Rightarrow F = 40(6) + 50(2) = 340$ triệu.\\n  $C(0; 6) \\Rightarrow F = 300$ triệu.\\n- Bước 4 (0.25đ): So sánh giá trị: $F_{\\max} = 340$ triệu đồng đạt được khi $x = 6\\text{ ha}$ ngô và $y = 2\\text{ ha}$ đậu tương."
      }
    ]
  }
};
,
  // NGÂN HÀNG CÂU HỎI MẪU 4 DẠNG (GDPT 2018)
  sample4PartQuestions: {
    // Phần 1: Trắc nghiệm 4 lựa chọn
    part1_mcq: [
      {
        id: "mcq_1",
        question: "Biểu thức $\\sqrt{2x - 4}$ xác định với mọi giá trị của $x$ thỏa mãn:",
        options: [
          { key: "A", text: "$x \\ge 2$" },
          { key: "B", text: "$x > 2$" },
          { key: "C", text: "$x \\le 2$" },
          { key: "D", text: "$x \\ge -2$" }
        ],
        correct: "A",
        points: 0.25,
        source: "Ngân hàng đề Sở GD&ĐT Hà Nội"
      },
      {
        id: "mcq_2",
        question: "Phương trình bậc hai $x^2 - 7x + 12 = 0$ có tích hai nghiệm $P = x_1 x_2$ bằng:",
        options: [
          { key: "A", text: "$-12$" },
          { key: "B", text: "$12$" },
          { key: "C", text: "$7$" },
          { key: "D", text: "$-7$" }
        ],
        correct: "B",
        points: 0.25,
        source: "Tài liệu lưu hành nội bộ của Thầy"
      },
      {
        id: "mcq_3",
        question: "Đường thẳng $d: y = (m-1)x + 3$ song song với đường thẳng $y = 2x - 5$ khi:",
        options: [
          { key: "A", text: "$m = 3$" },
          { key: "B", text: "$m = 1$" },
          { key: "C", text: "$m = -1$" },
          { key: "D", text: "$m = 2$" }
        ],
        correct: "A",
        points: 0.25,
        source: "Đề thi thử THCS Cầu Giấy"
      },
      {
        id: "mcq_4",
        question: "Cho tam giác $ABC$ vuông tại $A$ có $AB = 6\\text{ cm}, AC = 8\\text{ cm}$. Bán kính đường tròn ngoại tiếp tam giác $ABC$ là:",
        options: [
          { key: "A", text: "$10\\text{ cm}$" },
          { key: "B", text: "$5\\text{ cm}$" },
          { key: "C", text: "$4\\text{ cm}$" },
          { key: "D", text: "$4.8\\text{ cm}$" }
        ],
        correct: "B",
        points: 0.25,
        source: "Ngân hàng câu hỏi Thầy biên soạn"
      }
    ],

    // Phần 2: Đúng / Sai (Mỗi câu gồm 4 ý a, b, c, d)
    part2_trueFalse: [
      {
        id: "tf_1",
        question: "Cho hàm số $y = -2x^2$ có đồ thị là Parabol $(P)$ và đường thẳng $(d): y = 2x - 4$. Xét tính Đúng/Sai của các khẳng định sau:",
        subItems: [
          { key: "a", text: "Parabol $(P)$ đi qua gốc tọa độ $O(0; 0)$ và có bề lõm hướng xuống dưới.", isCorrect: true },
          { key: "b", text: "Hàm số đồng biến khi $x > 0$ và nghịch biến khi $x < 0$.", isCorrect: false },
          { key: "c", text: "Phương trình hoành độ giao điểm của $(P)$ và $(d)$ là $2x^2 + 2x - 4 = 0$.", isCorrect: true },
          { key: "d", text: "Đường thẳng $(d)$ cắt $(P)$ tại hai điểm phân biệt có tọa độ là $(1; -2)$ và $(-2; -8)$.", isCorrect: true }
        ],
        points: 1.0,
        source: "Đề khảo sát Chuyên Hà Nội - Amsterdam"
      },
      {
        id: "tf_2",
        question: "Cho phương trình bậc hai $x^2 - 2(m-1)x + m^2 - 3 = 0$ ($m$ là tham số). Xét tính Đúng/Sai của các mệnh đề sau:",
        subItems: [
          { key: "a", text: "Biệt thức thu gọn của phương trình là $\\Delta' = -2m + 4$.", isCorrect: true },
          { key: "b", text: "Phương trình luôn có nghiệm với mọi giá trị của $m$.", isCorrect: false },
          { key: "c", text: "Khi $m = 0$, hai nghiệm của phương trình có tích bằng $-3$.", isCorrect: true },
          { key: "d", text: "Để phương trình có hai nghiệm cùng dấu thì $m < 2$ và $m \\notin [-\\sqrt{3}; \\sqrt{3}]$.", isCorrect: true }
        ],
        points: 1.0,
        source: "Ngân hàng đề Chuyên Toán của Thầy"
      }
    ],

    // Phần 3: Trả lời ngắn (Điền số)
    part3_shortAnswer: [
      {
        id: "sa_1",
        question: "Tính giá trị của biểu thức $T = \\sqrt{(2-\\sqrt{5})^2} + \\sqrt{5}$.",
        correctAnswer: "2",
        hint: "$|2-\\sqrt{5}| + \\sqrt{5} = \\sqrt{5}-2+\\sqrt{5} = 2$.",
        points: 0.5,
        source: "Đề thi thử Sở GD&ĐT TP.HCM"
      },
      {
        id: "sa_2",
        question: "Cho phương trình $x^2 - 4x + m = 0$. Tìm giá trị của $m$ để phương trình có nghiệm kép.",
        correctAnswer: "4",
        hint: "$\\Delta' = 4 - m = 0 \\iff m = 4$.",
        points: 0.5,
        source: "Ngân hàng đề của Thầy"
      },
      {
        id: "sa_3",
        question: "Một hình nón có bán kính đáy $r = 3\\text{ cm}$ và chiều cao $h = 4\\text{ cm}$. Độ dài đường sinh $l$ của hình nón bằng bao nhiêu cm?",
        correctAnswer: "5",
        hint: "$l = \\sqrt{r^2 + h^2} = \\sqrt{3^2 + 4^2} = 5$.",
        points: 0.5,
        source: "Đề khảo sát Chuyên Phan Bội Châu"
      },
      {
        id: "sa_4",
        question: "Cho góc nhọn $\\alpha$ thỏa mãn $\\sin \\alpha = 0.6$. Tính giá trị của $\\tan \\alpha$ (viết kết quả dưới dạng số thập phân).",
        correctAnswer: "0.75",
        hint: "$\\cos \\alpha = 0.8 \\implies \\tan \\alpha = 0.6 / 0.8 = 0.75$.",
        points: 0.5,
        source: "Đề thi thử Sở GD&ĐT Nam Định"
      }
    ],

    // Phần 4: Tự luận
    part4_essay: [
      {
        id: "ess_1",
        question: "Giải bài toán bằng cách lập phương trình hoặc hệ phương trình:\nMột đội xe theo kế hoạch phải chở $120$ tấn hàng. Khi thực hiện có $2$ xe được điều đi làm việc khác nên mỗi xe còn lại phải chở thêm $3$ tấn hàng so với dự định. Hỏi ban đầu đội có bao nhiêu chiếc xe? (Biết sức chở của mỗi xe là như nhau).",
        solution: "Gọi số xe ban đầu là $x$ ($x \\in \\mathbb{N}^*, x > 2$).\nTheo kế hoạch mỗi xe chở $\\dfrac{120}{x}$ tấn.\nThực tế có $x - 2$ xe, mỗi xe chở $\\dfrac{120}{x-2}$ tấn.\nTa có phương trình: $\\dfrac{120}{x-2} - \\dfrac{120}{x} = 3 \\iff x(x-2) = 80 \\iff x^2 - 2x - 80 = 0 \\iff x = 10$ hoặc $x = -8$ (loại).\nVậy ban đầu có 10 chiếc xe.",
        points: 1.0,
        source: "Đề tuyển sinh vào 10 Hà Nội & Đề luyện của Thầy"
      }
    ]
  },

  // ==========================================
  // MỤC ÔN TẬP: CUỐI CHƯƠNG, GIỮA KỲ, CUỐI KỲ
  // ==========================================
  reviewSections: {
    // 1. ÔN TẬP CUỐI CHƯƠNG
    chapterReviews: [
      {
        id: "rev-ch4-grade9",
        grade: 9,
        title: "Ôn Tập Cuối Chương IV: Phương Trình Bậc Hai Một Ẩn & Hệ Thức Vi-ét",
        badge: "Trọng tâm thi vào 10",
        badgeColor: "bg-blue-600",
        authorType: "matrix",
        summary: "Tổng hợp toàn bộ lý thuyết, sơ đồ tư duy hằng đẳng thức, định lý Vi-ét và các dạng bài toán thực tế.",
        sectionsCount: "4 Chuyên đề",
        questionsCount: 25,
        topics: [
          "Chuyên đề 1: Công thức nghiệm và công thức nghiệm thu gọn $\\Delta, \\Delta'$",
          "Chuyên đề 2: Hệ thức Vi-ét và ứng dụng tính giá trị biểu thức đối xứng",
          "Chuyên đề 3: Phương trình quy về bậc hai (phương trình trùng phương, phương trình chứa ẩn ở mẫu)",
          "Chuyên đề 4: Giải bài toán bằng cách lập phương trình (chuyển động, năng suất, hình học)"
        ]
      },
      {
        id: "rev-ch1-grade12",
        grade: 12,
        scope: "ch_1",
        scopeText: "Chương 1: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị của hàm số",
        title: "Ôn Tập Cuối Chương I: Ứng Dụng Đạo Hàm Để Khảo Sát & Vẽ Đồ Thị Hàm Số",
        badge: "Chiếm 25% đề thi THPT",
        badgeColor: "bg-purple-600",
        authorType: "matrix",
        summary: "Tính đơn điệu, cực trị, giá trị lớn nhất - nhỏ nhất, tiệm cận và nhận dạng đồ thị hàm số.",
        sectionsCount: "5 Chuyên đề",
        questionsCount: 50,
        topics: [
          "Chuyên đề 1: Đồng biến, nghịch biến của hàm số chứa tham số $m$",
          "Chuyên đề 2: Cực trị hàm số và cực trị hàm hợp $g(x) = f(u(x))$",
          "Chuyên đề 3: Max - Min trên đoạn và bài toán thực tế tối ưu hóa",
          "Chuyên đề 4: Tiệm cận đứng và tiệm cận ngang"
        ]
      },
      {
        id: "rev-ch2-grade12",
        grade: 12,
        scope: "ch_2",
        scopeText: "Chương 2: Toạ độ của vectơ trong không gian",
        title: "Đề Ôn Tập Cuối Chương II: Toạ Độ Vectơ Trong Không Gian Oxyz [Ma Trận Mặc Định]",
        badge: "Ma Trận Chuẩn Bộ (23 câu - 10.0đ)",
        badgeColor: "bg-purple-600",
        authorType: "matrix",
        sourceBadge: "🌐 Nguồn: Trên mạng (Chuyên Lam Sơn & KHTN)",
        summary: "Vectơ trong không gian, hệ toạ độ Oxyz, biểu thức toạ độ, tích vô hướng và tích có hướng. Đề tự sinh theo ma trận mặc định từ nguồn trên mạng.",
        duration: "90 phút",
        examCount: "23 câu (10.0đ)",
        format4Part: true,
        topics: [
          "Chuyên đề 1: Toạ độ vectơ, toạ độ điểm và các phép toán vectơ trong Oxyz",
          "Chuyên đề 2: Tích vô hướng, góc giữa hai vectơ và độ dài đoạn thẳng",
          "Chuyên đề 3: Tích có hướng của hai vectơ và ứng dụng tính diện tích, thể tích",
          "Chuyên đề 4: Phương trình mặt cầu cơ bản và vị trí tương đối"
        ]
      },
      {
        id: "rev-ch3-grade12",
        grade: 12,
        scope: "ch_3",
        scopeText: "Chương 3: Các số đặc trưng đo mức độ phân tán cho mẫu số liệu ghép nhóm",
        title: "Đề Ôn Tập Cuối Chương III: Các Số Đặc Trưng Đo Mức Độ Phân Tán [Ma Trận Mặc Định]",
        badge: "Ma Trận Chuẩn Bộ (23 câu - 10.0đ)",
        badgeColor: "bg-purple-600",
        authorType: "matrix",
        sourceBadge: "🌐 Nguồn: Trên mạng (Sở GD&ĐT Hà Nội)",
        summary: "Khoảng biến thiên, khoảng tứ phân vị, phương sai và độ lệch chuẩn của mẫu số liệu ghép nhóm. Bám sát ma trận chuẩn 4 phần của Bộ GD&ĐT.",
        duration: "90 phút",
        examCount: "23 câu (10.0đ)",
        format4Part: true,
        topics: [
          "Chuyên đề 1: Xác định nhóm chứa tứ phân vị $Q_1, Q_2, Q_3$ và khoảng tứ phân vị $\\Delta_Q$",
          "Chuyên đề 2: Tính phương sai $s^2$ và độ lệch chuẩn $s$ của mẫu số liệu ghép nhóm",
          "Chuyên đề 3: So sánh mức độ phân tán giữa hai mẫu số liệu thực tế",
          "Chuyên đề 4: Ứng dụng thống kê phân tích số liệu kinh tế - xã hội"
        ]
      },
      {
        id: "rev-ch4-grade12",
        grade: 12,
        scope: "ch_4",
        scopeText: "Chương 4: Nguyên hàm và tích phân",
        title: "Đề Ôn Tập Cuối Chương IV: Nguyên Hàm & Tích Phân [Ma Trận Mặc Định]",
        badge: "Ma Trận Chuẩn Bộ (23 câu - 10.0đ)",
        badgeColor: "bg-purple-600",
        authorType: "matrix",
        sourceBadge: "🌐 Nguồn: Trên mạng (Chuyên Sư Phạm & Sở TP.HCM)",
        summary: "Nguyên hàm, tích phân, tính diện tích hình phẳng và thể tích khối tròn xoay. Đề tự sinh theo ma trận mặc định từ nguồn trên mạng.",
        duration: "90 phút",
        examCount: "23 câu (10.0đ)",
        format4Part: true,
        topics: [
          "Chuyên đề 1: Bảng nguyên hàm cơ bản và phương pháp đổi biến số",
          "Chuyên đề 2: Phương pháp nguyên hàm và tích phân từng phần",
          "Chuyên đề 3: Ứng dụng tích phân tính diện tích hình phẳng giới hạn bởi đồ thị",
          "Chuyên đề 4: Ứng dụng tích phân tính thể tích vật thể tròn xoay và chuyển động"
        ]
      },
      {
        id: "rev-ch5-grade12",
        grade: 12,
        scope: "ch_5",
        scopeText: "Chương 5: Phương pháp toạ độ trong không gian (Oxyz)",
        title: "Đề Ôn Tập Cuối Chương V: Phương Pháp Toạ Độ Trong Không Gian Oxyz [Ma Trận Mặc Định]",
        badge: "Ma Trận Chuẩn Bộ (23 câu - 10.0đ)",
        badgeColor: "bg-purple-600",
        authorType: "matrix",
        sourceBadge: "🌐 Nguồn: Trên mạng (Sở GD&ĐT Nam Định)",
        summary: "Phương trình mặt phẳng, phương trình đường thẳng, khoảng cách và phương trình mặt cầu. Chuẩn 4 dạng bài tập mới.",
        duration: "90 phút",
        examCount: "23 câu (10.0đ)",
        format4Part: true,
        topics: [
          "Chuyên đề 1: Lập phương trình mặt phẳng qua 3 điểm, song song hoặc vuông góc",
          "Chuyên đề 2: Phương trình tham số và chính tắc của đường thẳng trong không gian",
          "Chuyên đề 3: Vị trí tương đối giữa hai đường thẳng, đường thẳng và mặt phẳng",
          "Chuyên đề 4: Bài toán khoảng cách từ điểm đến mặt phẳng, khoảng cách giữa hai đường chéo nhau"
        ]
      },
      {
        id: "rev-ch6-grade12",
        grade: 12,
        scope: "ch_6",
        scopeText: "Chương 6: Xác suất có điều kiện",
        title: "Đề Ôn Tập Cuối Chương VI: Xác Suất Có Điều Kiện & Công Thức Bayes [Ma Trận Mặc Định]",
        badge: "Ma Trận Chuẩn Bộ (23 câu - 10.0đ)",
        badgeColor: "bg-purple-600",
        authorType: "matrix",
        sourceBadge: "🌐 Nguồn: Trên mạng (Ngân hàng đề thi THPT Toàn quốc)",
        summary: "Xác suất có điều kiện, công thức nhân xác suất, công thức xác suất toàn phần và công thức Bayes.",
        duration: "90 phút",
        examCount: "23 câu (10.0đ)",
        format4Part: true,
        topics: [
          "Chuyên đề 1: Tính xác suất có điều kiện $P(A|B)$ bằng định nghĩa và bảng chéo",
          "Chuyên đề 2: Sử dụng sơ đồ hình cây tính xác suất có điều kiện",
          "Chuyên đề 3: Áp dụng công thức xác suất toàn phần trong chẩn đoán y khoa",
          "Chuyên đề 4: Áp dụng công thức Bayes tính xác suất hậu nghiệm"
        ]
      },
      {
        id: "rev-ch1-grade11",
        grade: 11,
        scope: "ch_1",
        scopeText: "Chương 1: Hàm số lượng giác và phương trình lượng giác",
        title: "Đề Ôn Tập Cuối Chương I: Hàm Số Lượng Giác & Phương Trình Lượng Giác [Ma Trận Mặc Định]",
        badge: "Ma Trận Chuẩn Bộ (23 câu - 10.0đ)",
        badgeColor: "bg-purple-600",
        authorType: "matrix",
        sourceBadge: "🌐 Nguồn: Trên mạng (Chuyên Phan Bội Châu)",
        summary: "Tập xác định, chu kỳ, tính chẵn lẻ của hàm lượng giác và công thức nghiệm phương trình lượng giác cơ bản.",
        duration: "90 phút",
        examCount: "23 câu (10.0đ)",
        format4Part: true,
        topics: [
          "Chuyên đề 1: Tập xác định và giá trị lớn nhất - nhỏ nhất của hàm số lượng giác",
          "Chuyên đề 2: Phương trình $\\sin x = m, \\cos x = m, \\tan x = m$",
          "Chuyên đề 3: Phương trình bậc hai đối với một hàm số lượng giác",
          "Chuyên đề 4: Phương trình bậc nhất đối với $\\sin x$ và $\\cos x$"
        ]
      },
      {
        id: "rev-ch2-grade11",
        grade: 11,
        scope: "ch_2",
        scopeText: "Chương 2: Dãy số. Cấp số cộng và cấp số nhân",
        title: "Đề Ôn Tập Cuối Chương II: Dãy Số, Cấp Số Cộng & Cấp Số Nhân [Ma Trận Mặc Định]",
        badge: "Ma Trận Chuẩn Bộ (23 câu - 10.0đ)",
        badgeColor: "bg-purple-600",
        authorType: "matrix",
        sourceBadge: "🌐 Nguồn: Trên mạng (Sở GD&ĐT Bắc Ninh)",
        summary: "Dãy số tăng giảm, số hạng tổng quát, công sai và tổng $n$ số hạng đầu của cấp số cộng, cấp số nhân.",
        duration: "90 phút",
        examCount: "23 câu (10.0đ)",
        format4Part: true,
        topics: [
          "Chuyên đề 1: Số hạng tổng quát $u_n$ và tính đơn điệu, bị chặn của dãy số",
          "Chuyên đề 2: Cấp số cộng: công thức $u_n = u_1 + (n-1)d$ và $S_n$",
          "Chuyên đề 3: Cấp số nhân: công thức $u_n = u_1 q^{n-1}$ và tổng $S_n$",
          "Chuyên đề 4: Bài toán tài chính thực tế (lãi kép, gửi tiết kiệm, trả góp)"
        ]
      },
      {
        id: "rev-ch4-grade11",
        grade: 11,
        scope: "ch_4",
        scopeText: "Chương 4: Quan hệ song song trong không gian",
        title: "Đề Ôn Tập Cuối Chương IV: Quan Hệ Song Song Trong Không Gian [Ma Trận Mặc Định]",
        badge: "Ma Trận Chuẩn Bộ (23 câu - 10.0đ)",
        badgeColor: "bg-purple-600",
        authorType: "matrix",
        sourceBadge: "🌐 Nguồn: Trên mạng (Sở GD&ĐT Hải Dương)",
        summary: "Đường thẳng song song mặt phẳng, hai mặt phẳng song song, định lý Ta-lét và phép chiếu song song.",
        duration: "90 phút",
        examCount: "23 câu (10.0đ)",
        format4Part: true,
        topics: [
          "Chuyên đề 1: Chứng minh đường thẳng song song với mặt phẳng",
          "Chuyên đề 2: Chứng minh hai mặt phẳng song song",
          "Chuyên đề 3: Xác định thiết diện tạo bởi mặt phẳng song song",
          "Chuyên đề 4: Tính chất hình lăng trụ, hình hộp và hình chóp cụt"
        ]
      },
      {
        id: "rev-ch1-grade10",
        grade: 10,
        scope: "ch_1",
        scopeText: "Chương 1: Mệnh đề và tập hợp",
        title: "Đề Ôn Tập Cuối Chương I: Mệnh Đề & Tập Hợp [Ma Trận Mặc Định]",
        badge: "Ma Trận Chuẩn Bộ (23 câu - 10.0đ)",
        badgeColor: "bg-purple-600",
        authorType: "matrix",
        sourceBadge: "🌐 Nguồn: Trên mạng (Sở GD&ĐT Vĩnh Phúc)",
        summary: "Mệnh đề, mệnh đề phủ định, mệnh đề kéo theo, tập hợp và các phép toán giao, hợp, hiệu trên tập số.",
        duration: "90 phút",
        examCount: "23 câu (10.0đ)",
        format4Part: true,
        topics: [
          "Chuyên đề 1: Mệnh đề, mệnh đề phủ định và mệnh đề chứa biến $\\forall, \\exists$",
          "Chuyên đề 2: Mệnh đề kéo theo và mệnh đề tương đương",
          "Chuyên đề 3: Các phép toán trên tập hợp: $A \\cap B, A \\cup B, A \\setminus B, C_R A$",
          "Chuyên đề 4: Các bài toán thực tế sử dụng biểu đồ Ven"
        ]
      },
      {
        id: "rev-ch2-grade10",
        grade: 10,
        scope: "ch_2",
        scopeText: "Chương 2: Bất phương trình và hệ bất phương trình bậc nhất hai ẩn",
        title: "Đề Ôn Tập Cuối Chương II: Bất Phương Trình Bậc Nhất Hai Ẩn [Ma Trận Mặc Định]",
        badge: "Ma Trận Chuẩn Bộ (23 câu - 10.0đ)",
        badgeColor: "bg-purple-600",
        authorType: "matrix",
        sourceBadge: "🌐 Nguồn: Trên mạng (Sở GD&ĐT Đà Nẵng)",
        summary: "Biểu diễn miền nghiệm của bất phương trình và hệ bất phương trình bậc nhất hai ẩn; bài toán quy hoạch tuyến tính.",
        duration: "90 phút",
        examCount: "23 câu (10.0đ)",
        format4Part: true,
        topics: [
          "Chuyên đề 1: Điểm thuộc miền nghiệm của bất phương trình bậc nhất hai ẩn",
          "Chuyên đề 2: Biểu diễn hình học miền nghiệm trên mặt phẳng toạ độ Oxy",
          "Chuyên đề 3: Tìm toạ độ các đỉnh của miền đa giác nghiệm",
          "Chuyên đề 4: Bài toán kinh tế tối ưu hoá lợi nhuận và chi phí"
        ]
      },
      {
        id: "rev-ch4-grade10",
        grade: 10,
        scope: "ch_4",
        scopeText: "Chương 4: Vectơ",
        title: "Đề Ôn Tập Cuối Chương IV: Vectơ & Các Phép Toán [Ma Trận Mặc Định]",
        badge: "Ma Trận Chuẩn Bộ (23 câu - 10.0đ)",
        badgeColor: "bg-purple-600",
        authorType: "matrix",
        sourceBadge: "🌐 Nguồn: Trên mạng (Chuyên Lam Sơn)",
        summary: "Khái niệm vectơ, tổng và hiệu của hai vectơ, tích của một số với một vectơ và tích vô hướng.",
        duration: "90 phút",
        examCount: "23 câu (10.0đ)",
        format4Part: true,
        topics: [
          "Chuyên đề 1: Khái niệm vectơ cùng phương, cùng hướng, độ dài vectơ",
          "Chuyên đề 2: Quy tắc 3 điểm, quy tắc hình bình hành và quy tắc trung điểm",
          "Chuyên đề 3: Phân tích một vectơ theo hai vectơ không cùng phương",
          "Chuyên đề 4: Tích vô hướng của hai vectơ và ứng dụng tính góc, khoảng cách"
        ]
    ],

    // 2. ÔN TẬP GIỮA KỲ (HỖ TRỢ 4 DẠNG CHUẨN BỘ)
    midtermReviews: [
      {
        id: "rev-mid1-grade12",
        grade: 12,
        scope: "mid1",
        scopeText: "Kiến thức nửa đầu Học kỳ 1 (Chương 1 & Chương 2)",
        title: "Bộ Đề Ôn Thi Giữa Học Kỳ I - Toán 12 (Hàm Số & Vectơ Không Gian)",
        badge: "Đề chuẩn thi thử",
        badgeColor: "bg-emerald-600",
        authorType: "matrix",
        sourceBadge: "Nguồn: Sở GD&ĐT & Trường Chuyên",
        summary: "Rèn luyện chuyên sâu các dạng bài giữa kỳ 1: Tính đơn điệu, cực trị, tiệm cận đồ thị hàm số và các phép toán vectơ trong không gian.",
        duration: "90 phút",
        examCount: "5 Bộ đề",
        topics: [
          "Khảo sát sự biến thiên và cực trị hàm số bậc ba, trùng phương, phân thức",
          "Tiệm cận đứng, tiệm cận ngang và tiệm cận xiên của đồ thị hàm số",
          "Toạ độ điểm, toạ độ vectơ và tích vô hướng trong không gian"
        ]
      },
      {
        id: "rev-mid2-grade12",
        grade: 12,
        scope: "mid2",
        scopeText: "Kiến thức nửa đầu Học kỳ 2 (Chương 4 & Chương 5)",
        title: "Bộ Đề Ôn Thi Giữa Học Kỳ II - Toán 12 (Tích Phân & Oxyz)",
        badge: "Đề chuẩn thi thử",
        badgeColor: "bg-amber-600",
        authorType: "matrix",
        sourceBadge: "Nguồn: Thầy cung cấp kết hợp trên mạng",
        summary: "Rèn luyện kỹ năng giải nhanh trắc nghiệm, đúng/sai và trả lời ngắn Nguyên hàm - Tích phân và Hình học giải tích Oxyz.",
        duration: "90 phút",
        examCount: "4 Bộ đề",
        topics: [
          "Phương pháp đổi biến và từng phần tìm nguyên hàm",
          "Ứng dụng tích phân tính diện tích hình phẳng và thể tích vật thể tròn xoay",
          "Phương trình mặt phẳng, đường thẳng và mặt cầu trong không gian Oxyz"
        ]
      },
      {
        id: "rev-mid1-grade11",
        grade: 11,
        scope: "mid1",
        scopeText: "Kiến thức nửa đầu Học kỳ 1 (Chương 1 & Chương 2)",
        title: "Bộ Đề Ôn Thi Giữa Học Kỳ I - Toán 11 (Lượng Giác & Cấp Số)",
        badge: "Chuẩn 4 Dạng Bộ",
        badgeColor: "bg-emerald-600",
        authorType: "matrix",
        sourceBadge: "Nguồn: Các Sở GD&ĐT",
        summary: "Tổng hợp kiến thức giữa kỳ 1 lớp 11: Phương trình lượng giác, dãy số, cấp số cộng và cấp số nhân.",
        duration: "90 phút",
        examCount: "4 Bộ đề",
        topics: [
          "Hàm số lượng giác và giải phương trình lượng giác cơ bản",
          "Dãy số tăng, giảm, bị chặn và tính chất cấp số cộng",
          "Số hạng tổng quát và tổng n số hạng của cấp số nhân"
        ]
      },
      {
        id: "rev-mid2-grade11",
        grade: 11,
        scope: "mid2",
        scopeText: "Kiến thức nửa đầu Học kỳ 2 (Chương 6 & Chương 7)",
        title: "Bộ Đề Ôn Thi Giữa Học Kỳ II - Toán 11 (Mũ, Lôgarit & Hình Không Gian)",
        badge: "Chuẩn 4 Dạng Bộ",
        badgeColor: "bg-amber-600",
        authorType: "matrix",
        sourceBadge: "Nguồn: Trường Chuyên",
        summary: "Hàm số mũ, hàm số lôgarit, phương trình bất phương trình mũ - log và quan hệ vuông góc trong không gian.",
        duration: "90 phút",
        examCount: "4 Bộ đề",
        topics: [
          "Tính chất và đồ thị hàm số mũ, hàm số lôgarit",
          "Đường thẳng vuông góc với mặt phẳng và hai mặt phẳng vuông góc",
          "Tính góc giữa đường thẳng và mặt phẳng, góc giữa hai mặt phẳng"
        ]
      },
      {
        id: "rev-mid1-grade10",
        grade: 10,
        scope: "mid1",
        scopeText: "Kiến thức nửa đầu Học kỳ 1 (Chương 1 & Chương 2)",
        title: "Bộ Đề Ôn Thi Giữa Học Kỳ I - Toán 10 (Mệnh Đề, Tập Hợp & Bất Phương Trình)",
        badge: "Chuẩn 4 Dạng Bộ",
        badgeColor: "bg-emerald-600",
        authorType: "matrix",
        sourceBadge: "Nguồn: Các Sở GD&ĐT",
        summary: "Mệnh đề toán học, các phép toán tập hợp, bất phương trình và hệ bất phương trình bậc nhất hai ẩn.",
        duration: "90 phút",
        examCount: "4 Bộ đề",
        topics: [
          "Mệnh đề phủ định, mệnh đề kéo theo, mệnh đề tương đương",
          "Giao, hợp, hiệu và phần bù của các tập hợp số",
          "Biểu diễn miền nghiệm của hệ bất phương trình bậc nhất hai ẩn"
        ]
      },
      {
        id: "rev-mid2-grade10",
        grade: 10,
        scope: "mid2",
        scopeText: "Kiến thức nửa đầu Học kỳ 2 (Chương 6 & Chương 7)",
        title: "Bộ Đề Ôn Thi Giữa Học Kỳ II - Toán 10 (Hàm Số & Toạ Độ Mặt Phẳng Oxy)",
        badge: "Chuẩn 4 Dạng Bộ",
        badgeColor: "bg-amber-600",
        authorType: "matrix",
        sourceBadge: "Nguồn: Trường Chuyên",
        summary: "Hàm số bậc hai, dấu tam thức bậc hai, phương trình đường thẳng và đường tròn trong mặt phẳng toạ độ Oxy.",
        duration: "90 phút",
        examCount: "4 Bộ đề",
        topics: [
          "Tập xác định, sự biến thiên và đỉnh parabol hàm số bậc hai",
          "Giải bất phương trình bậc hai một ẩn và phương trình quy về bậc hai",
          "Phương trình tổng quát, tham số của đường thẳng và phương trình đường tròn"
        ]
      },
      {
        id: "rev-mid2-grade9",
        grade: 9,
        scope: "mid2",
        scopeText: "Kiến thức nửa đầu Học kỳ 2",
        title: "Bộ Đề Ôn Thi Giữa Học Kỳ II (Chuẩn 4 Dạng Mới Bộ GD&ĐT 2018)",
        badge: "Chuẩn 4 Dạng Bộ",
        badgeColor: "bg-emerald-600",
        authorType: "matrix",
        sourceBadge: "Nguồn: Ngân hàng đề thi các Sở GD&ĐT",
        summary: "Gồm 4 phần chuẩn: Trắc nghiệm (12 câu), Đúng/Sai (4 câu), Trả lời ngắn (6 câu), Tự luận (1 bài). Có barem điểm chi tiết kèm Video Thầy chữa đề.",
        duration: "90 phút",
        examCount: "5 Bộ đề",
        youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        teacherSolution: "📌 BAREM ĐÁP ÁN & HƯỚNG DẪN GIẢI CHI TIẾT CỦA THẦY:\n- Phần I (Trắc nghiệm): 1-A (đk x >= 2), 2-B (P = c/a = 12), 3-A (m-1 = 2 <=> m = 3), 4-B (R = BC/2 = 10/2 = 5cm).\n- Phần II (Đúng/Sai): Câu 1: a-Đ, b-S (a=-2<0 nên đồng biến khi x<0), c-Đ, d-Đ.\n- Phần III (Trả lời ngắn): Câu 1: 2; Câu 2: 4 (Delta'=0); Câu 3: 5 (đường sinh l=5cm); Câu 4: 0.75.\n- Phần IV (Tự luận): Gọi số xe ban đầu là x (x nguyên dương, x > 2). Lập pt 120/(x-2) - 120/x = 3. Giải ra x = 10 (thỏa mãn). Vậy có 10 chiếc xe.",
        topics: [
          "Phần I: 12 câu trắc nghiệm nhiều phương án (3.0 đ)",
          "Phần II: 4 câu trắc nghiệm Đúng/Sai 4 ý (4.0 đ)",
          "Phần III: 6 câu điền đáp số ngắn (2.0 đ)",
          "Phần IV: 1 câu tự luận lập hệ phương trình (1.0 đ)"
        ]
      }
    ],

    // 3. ÔN TẬP CUỐI KỲ
    finaltermReviews: [
      {
        id: "rev-fin1-grade12",
        grade: 12,
        scope: "fin1",
        scopeText: "Gồm các Chương 1, Chương 2, Chương 3",
        title: "Bộ Đề Ôn Thi Cuối Học Kỳ I - Toán 12 (Chương 1, Chương 2, Chương 3)",
        badge: "Chuẩn 4 Dạng Bộ",
        badgeColor: "bg-blue-600",
        authorType: "matrix",
        sourceBadge: "Nguồn: Ngân hàng đề thi Trường Chuyên",
        summary: "Tổng hợp toàn bộ kiến thức Học kỳ 1 Lớp 12 gồm: Khảo sát hàm số (Chương 1), Toạ độ vectơ không gian (Chương 2) và Mẫu số liệu ghép nhóm (Chương 3).",
        duration: "90 phút",
        examCount: "6 Bộ đề chuẩn",
        topics: [
          "Chương 1: Khảo sát hàm số, cực trị, Min-Max và đồ thị",
          "Chương 2: Vectơ và hệ trục toạ độ không gian Oxyz",
          "Chương 3: Số đặc trưng đo mức độ phân tán mẫu số liệu ghép nhóm",
          "Cấu trúc 4 phần chuẩn: Trắc nghiệm, Đúng/Sai, Điền đáp số & Tự luận"
        ]
      },
      {
        id: "rev-fin2-grade12",
        grade: 12,
        scope: "fin2",
        scopeText: "Gồm các Chương 4, Chương 5, Chương 6",
        title: "Chiến Dịch Về Đích: Tổng Ôn Cuối Kỳ II - Toán 12 (Chương 4, Chương 5, Chương 6)",
        badge: "Bứt phá 9+ ĐGNL",
        badgeColor: "bg-indigo-600",
        authorType: "matrix",
        sourceBadge: "Nguồn: Đề minh họa Bộ GD&ĐT",
        summary: "Hệ thống hóa toàn bộ kiến thức 3 năm THPT theo đúng format mới nhất của Bộ GD&ĐT. Gồm: Nguyên hàm - Tích phân (Ch 4), Phương pháp toạ độ Oxyz (Ch 5) và Xác suất có điều kiện (Ch 6).",
        duration: "90 phút",
        examCount: "10 Đề chuẩn",
        topics: [
          "Chương 4: Nguyên hàm, tích phân và ứng dụng tính diện tích, thể tích",
          "Chương 5: Phương pháp toạ độ trong không gian Oxyz (mặt phẳng, đường thẳng, mặt cầu)",
          "Chương 6: Xác suất có điều kiện, công thức xác suất toàn phần và Bayes",
          "Chiến thuật lấy trọn vẹn điểm câu 9+ phân loại cao"
        ]
      },
      {
        id: "rev-fin1-grade11",
        grade: 11,
        scope: "fin1",
        scopeText: "Gồm các Chương 1, Chương 2, Chương 5, Chương 4, Chương 3",
        title: "Bộ Đề Ôn Thi Cuối Học Kỳ I - Toán 11 (Chương 1, 2, 5, 4, 3)",
        badge: "Chuẩn 4 Dạng Bộ",
        badgeColor: "bg-blue-600",
        authorType: "matrix",
        sourceBadge: "Nguồn: Ngân hàng đề thi Trường Chuyên",
        summary: "Tổng hợp toàn diện kiến thức Học kỳ 1 Lớp 11 gồm 5 chương: Hàm số lượng giác & PT lượng giác (Ch 1), Cấp số cộng & Cấp số nhân (Ch 2), Giới hạn & Hàm số liên tục (Ch 5), Quan hệ song song trong không gian (Ch 4), Các số đặc trưng mẫu số liệu ghép nhóm (Ch 3).",
        duration: "90 phút",
        examCount: "6 Bộ đề chuẩn",
        topics: [
          "Chương 1: Hàm số lượng giác và phương trình lượng giác",
          "Chương 2: Dãy số. Cấp số cộng và cấp số nhân",
          "Chương 5: Giới hạn của dãy số, giới hạn hàm số và hàm số liên tục",
          "Chương 4: Đường thẳng và mặt phẳng song song trong không gian",
          "Chương 3: Các số đặc trưng đo xu thế trung tâm của mẫu số liệu ghép nhóm"
        ]
      },
      {
        id: "rev-fin2-grade11",
        grade: 11,
        scope: "fin2",
        scopeText: "Gồm các Chương 8, Chương 6, Chương 7, Chương 9",
        title: "Bộ Đề Ôn Thi Cuối Học Kỳ II - Toán 11 (Chương 8, 6, 7, 9)",
        badge: "Chuẩn 4 Dạng Bộ",
        badgeColor: "bg-indigo-600",
        authorType: "matrix",
        sourceBadge: "Nguồn: Sở GD&ĐT & Trường Chuyên",
        summary: "Tổng hợp toàn diện kiến thức Học kỳ 2 Lớp 11 gồm 4 chương: Các quy tắc tính xác suất (Ch 8), Hàm số mũ & Lôgarit (Ch 6), Quan hệ vuông góc trong không gian & Thể tích (Ch 7), Đạo hàm (Ch 9).",
        duration: "90 phút",
        examCount: "6 Bộ đề chuẩn",
        topics: [
          "Chương 8: Biến cố hợp, biến cố giao, biến cố độc lập và quy tắc nhân/cộng xác suất",
          "Chương 6: Lũy thừa, lôgarit, hàm số mũ, hàm số lôgarit và phương trình mũ/log",
          "Chương 7: Quan hệ vuông góc trong không gian, góc, khoảng cách và tính thể tích khối chóp, lăng trụ",
          "Chương 9: Định nghĩa đạo hàm, quy tắc tính đạo hàm và ý nghĩa hình học của đạo hàm"
        ]
      },
      {
        id: "rev-fin1-grade10",
        grade: 10,
        scope: "fin1",
        scopeText: "Gồm các Chương 1, Chương 2, Chương 3, Chương 4, Chương 6",
        title: "Bộ Đề Ôn Thi Cuối Học Kỳ I - Toán 10 (Chương 1, 2, 3, 4, 6)",
        badge: "Chuẩn 4 Dạng Bộ",
        badgeColor: "bg-blue-600",
        authorType: "matrix",
        sourceBadge: "Nguồn: Ngân hàng đề thi Trường Chuyên",
        summary: "Tổng hợp kiến thức Học kỳ 1 Lớp 10 gồm 5 chương: Mệnh đề & Tập hợp (Ch 1), Bất phương trình & Hệ BPT bậc nhất hai ẩn (Ch 2), Hệ thức lượng trong tam giác (Ch 3), Vectơ (Ch 4), Hàm số, đồ thị & ứng dụng (Ch 6).",
        duration: "90 phút",
        examCount: "5 Bộ đề chuẩn",
        topics: [
          "Chương 1: Mệnh đề, tập hợp và các phép toán trên tập hợp",
          "Chương 2: Miền nghiệm của bất phương trình và hệ bất phương trình bậc nhất hai ẩn",
          "Chương 3: Định lý côsin, định lý sin, công thức tính diện tích tam giác và giải tam giác",
          "Chương 4: Vectơ, các phép toán tổng hiệu vectơ, tích vô hướng của hai vectơ",
          "Chương 6: Hàm số, hàm số bậc hai, bảng biến thiên và đồ thị parabol"
        ]
      },
      {
        id: "rev-fin2-grade10",
        grade: 10,
        scope: "fin2",
        scopeText: "Gồm các Chương 8, Chương 5, Chương 9, Chương 7",
        title: "Bộ Đề Ôn Thi Cuối Học Kỳ II - Toán 10 (Chương 8, 5, 9, 7)",
        badge: "Chuẩn 4 Dạng Bộ",
        badgeColor: "bg-indigo-600",
        authorType: "matrix",
        sourceBadge: "Nguồn: Sở GD&ĐT & Trường Chuyên",
        summary: "Tổng hợp kiến thức Học kỳ 2 Lớp 10 gồm 4 chương: Đại số tổ hợp (Ch 8), Các số đặc trưng mẫu số liệu không ghép nhóm (Ch 5), Tính xác suất của biến cố (Ch 9), Phương pháp toạ độ trong mặt phẳng Oxy (Ch 7).",
        duration: "90 phút",
        examCount: "5 Bộ đề chuẩn",
        topics: [
          "Chương 8: Quy tắc đếm, hoán vị, chỉnh hợp, tổ hợp và nhị thức Newton",
          "Chương 5: Số trung bình, trung vị, tứ phân vị, khoảng biến thiên, phương sai và độ lệch chuẩn",
          "Chương 9: Không gian mẫu, biến cố và tính xác suất theo định nghĩa cổ điển",
          "Chương 7: Phương trình đường thẳng, khoảng cách, góc, phương trình đường tròn và ba đường conic"
        ]
      },
        examCount: "10 Đề chuẩn",
        topics: [
          "Trắc nghiệm nhiều lựa chọn: 12 câu quét lý thuyết cốt lõi",
          "Trắc nghiệm đúng/sai: 4 câu phân hóa thông hiểu và vận dụng",
          "Trả lời ngắn: 6 câu rèn tư duy tính toán chính xác",
          "Chiến thuật lấy trọn vẹn điểm câu 9+ phân loại cao"
        ]
      }
    ]
  },

  // ==========================================
  // ĐẤU TRƯỜNG ONLINE: ĐỀ THI MỚI NHẤT TOÀN QUỐC
  // ==========================================
  arenaExams: [
    {
      id: "exam-hn-2026",
      title: "Đề Khảo Sát Chất Lượng Toán 9 - Sở GD&ĐT Hà Nội (Mới Nhất 2026)",
      grade: 9,
      type: "Tuyển sinh vào 10",
      durationMinutes: 45,
      participantsCount: 1845,
      badge: "Mới cập nhật hôm nay",
      badgeColor: "bg-red-500",
      questions: [
        {
          id: "aq1",
          question: "Cho biểu thức $P = \\dfrac{\\sqrt{x}+1}{\\sqrt{x}-2}$. Tìm tất cả các giá trị nguyên của $x$ để $P$ nhận giá trị nguyên âm.",
          options: [
            { key: "A", text: "$x \\in \\{0; 1\\}$", isCorrect: true, errorTag: null, errorMsg: "Chính xác! Em đã kết hợp chặt chẽ điều kiện xác định $x \\ge 0, x \\ne 4$ và tử dương." },
            { key: "B", text: "$x \\in \\{0; 1; 4\\}$", isCorrect: false, errorTag: "ERR_FORGOT_DOMAIN", errorMsg: "Quên điều kiện xác định: $x \\ne 4$ để mẫu số khác 0!" },
            { key: "C", text: "$x < 4$", isCorrect: false, errorTag: "ERR_NOT_INTEGER", errorMsg: "Đề bài yêu cầu $x$ nguyên và $P$ nhận giá trị nguyên, không phải chỉ xét dấu." },
            { key: "D", text: "$x = 1$", isCorrect: false, errorTag: "ERR_MISSED_ZERO", errorMsg: "Sót trường hợp $x = 0$ (vẫn thỏa mãn $x \\ge 0$ và $P = -1/2$ không nguyên, cần kiểm tra kỹ)." }
          ],
          remedialProblems: [
            {
              title: "Bài tập vá lỗi 1: Tìm $x$ nguyên để phân thức căn bậc hai nhận giá trị nguyên",
              question: "Tìm các số nguyên $x$ để $A = \\dfrac{\\sqrt{x}+3}{\\sqrt{x}-1}$ nhận giá trị nguyên.",
              hint: "Chia tử cho mẫu: $A = 1 + \\dfrac{4}{\\sqrt{x}-1}$, suy ra $\\sqrt{x}-1$ là ước của 4.",
              answer: "$x \\in \\{0; 4; 9; 25\\}$"
            },
            {
              title: "Bài tập vá lỗi 2: Bẫy điều kiện xác định căn thức",
              question: "Tìm tập xác định của biểu thức $B = \\dfrac{2x-1}{\\sqrt{x-3}} + \\sqrt{5-x}$.",
              hint: "Mẫu chứa căn phải $> 0$, căn ở tử $\\ge 0$: $x - 3 > 0$ và $5 - x \\ge 0$.",
              answer: "$3 < x \\le 5$"
            }
          ]
        },
        {
          id: "aq2",
          question: "Phương trình $x^2 - 2(m-1)x + m^2 - 3m = 0$ có hai nghiệm phân biệt $x_1, x_2$ thỏa mãn $x_1^2 + x_2^2 = 8$ khi:",
          options: [
            { key: "A", text: "$m = 2$", isCorrect: true, errorTag: null, errorMsg: "Chuẩn xác! Em tính $\\Delta' = m+1 > 0 \\implies m > -1$ và giải ra $m = 2$ thỏa mãn." },
            { key: "B", text: "$m = -2$ hoặc $m = 2$", isCorrect: false, errorTag: "ERR_FORGOT_DELTA_COND", errorMsg: "Sai lầm nghiêm trọng: Quên đối chiếu điều kiện $\\Delta' > 0$! Tại $m = -2$ thì $\\Delta' = -1 < 0$ (phương trình vô nghiệm)." },
            { key: "C", text: "$m = -2$", isCorrect: false, errorTag: "ERR_REVERSE_SELECTION", errorMsg: "Loại nhầm nghiệm đúng $m = 2$ và nhận nghiệm bị loại do $\\Delta' < 0$." },
            { key: "D", text: "Không có giá trị nào của $m$", isCorrect: false, errorTag: "ERR_CALCULATION", errorMsg: "Tính sai biểu thức $x_1^2 + x_2^2 = (x_1+x_2)^2 - 2x_1x_2$." }
          ],
          remedialProblems: [
            {
              title: "Bài tập vá lỗi 1: Luôn kiểm tra điều kiện $\\Delta > 0$ trước khi tìm tham số",
              question: "Cho phương trình $x^2 - 2mx + m^2 - 4 = 0$. Tìm $m$ để $x_1^2 + x_2^2 = 26$.",
              hint: "$\\Delta' = 4 > 0$ luôn có 2 nghiệm phân biệt. $S^2 - 2P = 4m^2 - 2(m^2-4) = 26$.",
              answer: "$m = 3$ hoặc $m = -3$"
            },
            {
              title: "Bài tập vá lỗi 2: Bẫy điều kiện có nghiệm phân biệt kết hợp Vi-ét",
              question: "Tìm $m$ để phương trình $x^2 - 4x + m = 0$ có hai nghiệm phân biệt $x_1, x_2$ cùng dấu dương.",
              hint: "Điều kiện đồng thời: $\\Delta' > 0$, $S > 0$, $P > 0$.",
              answer: "$0 < m < 4$"
            }
          ]
        },
        {
          id: "aq3",
          question: "Một mảnh đất hình chữ nhật có chu vi $60\\text{ m}$. Nếu tăng chiều rộng thêm $3\\text{ m}$ và giảm chiều dài đi $4\\text{ m}$ thì diện tích không đổi. Chiều rộng ban đầu là:",
          options: [
            { key: "A", text: "$12\\text{ m}$", isCorrect: true, errorTag: null, errorMsg: "Rất tốt! Em đã lập hệ phương trình nửa chu vi $x + y = 30$ và $(x+3)(y-4) = xy$ chính xác." },
            { key: "B", text: "$18\\text{ m}$", isCorrect: false, errorTag: "ERR_SWAPPED_DIMENSION", errorMsg: "Nhầm lẫn giữa chiều rộng ($12\\text{ m}$) và chiều dài ($18\\text{ m}$)." },
            { key: "C", text: "$15\\text{ m}$", isCorrect: false, errorTag: "ERR_HALF_PERIMETER", errorMsg: "Nhầm lẫn mảnh đất thành hình vuông $30/2 = 15$." },
            { key: "D", text: "$10\\text{ m}$", isCorrect: false, errorTag: "ERR_EQUATION_EXPAND", errorMsg: "Khai triển sai phương trình $(x+3)(y-4) = xy$." }
          ],
          remedialProblems: [
            {
              title: "Bài tập vá lỗi 1: Giải toán bằng cách lập hệ phương trình hình học",
              question: "Một khu vườn hình chữ nhật có chiều dài hơn chiều rộng $5\\text{ m}$. Nếu giảm chiều dài $2\\text{ m}$ và tăng chiều rộng $3\\text{ m}$ thì diện tích tăng thêm $16\\text{ m}^2$. Tính diện tích ban đầu.",
              hint: "Gọi chiều rộng là $x$, dài là $x+5$. Phương trình: $(x+5-2)(x+3) - x(x+5) = 16$.",
              answer: "$150\\text{ m}^2$ (Rộng 10m, Dài 15m)"
            },
            {
              title: "Bài tập vá lỗi 2: Bài toán năng suất và chuyển động thực tế",
              question: "Hai vòi nước cùng chảy vào một bể cạn thì sau 4 giờ 48 phút đầy bể. Mỗi giờ vòi 1 chảy bằng $3/4$ vòi 2. Hỏi mỗi vòi chảy một mình bao lâu đầy bể?",
              hint: "Đổi 4h 48p = 24/5 giờ. Tổng năng suất 1 giờ là 5/24.",
              answer: "Vòi 1: 12 giờ, Vòi 2: 8 giờ"
            }
          ]
        }
      ]
    },
    {
      id: "exam-pbc-2026",
      title: "Đề Thi Thử Tốt Nghiệp THPT 2026 - Chuyên Phan Bội Châu (Nghệ An)",
      grade: 12,
      type: "Tốt Nghiệp THPT & ĐGNL",
      durationMinutes: 90,
      participantsCount: 3840,
      badge: "Đề chuẩn Bộ 2026",
      badgeColor: "bg-indigo-600",
      questions: []
    },
    {
      id: "exam-dgnl-2026",
      title: "Đề Khảo Sát Đánh Giá Năng Lực (ĐGNL) ĐHQG 2026 - Tư Duy Định Lượng",
      grade: 12,
      type: "ĐGNL ĐHQG",
      durationMinutes: 60,
      participantsCount: 2910,
      badge: "Hot nhất tuần",
      badgeColor: "bg-purple-600",
      questions: []
    }
  ],

  // BẢNG XẾP HẠNG ĐẤU TRƯỜNG ONLINE
  arenaLeaderboard: [
    { rank: 1, name: "Nguyễn Hoàng Long", school: "THPT Chuyên KHTN", score: 10.0, time: "28 phút", avatar: "HL" },
    { rank: 2, name: "Lê Thu Trang", school: "Chuyên Hà Nội - Amsterdam", score: 9.8, time: "32 phút", avatar: "TT" },
    { rank: 3, name: "Trần Minh Đức", school: "Chuyên Phan Bội Châu", score: 9.6, time: "35 phút", avatar: "MĐ" },
    { rank: 4, name: "Phạm Quốc Tuấn", school: "Chuyên Lê Hồng Phong (TP.HCM)", score: 9.4, time: "39 phút", avatar: "QT" }
  ],

  // BÀI HỌC MẪU TIÊU BIỂU: LỚP 9
  currentLesson: {
    gradeId: 9,
    unitTitle: "Chương IV: Phương trình bậc hai một ẩn",
    lessonTitle: "Bài 6: Hệ thức Vi-ét và ứng dụng",
    
    theory: {
      summary: "Định lý Vi-ét là công cụ mạnh mẽ để tìm mối quan hệ giữa các nghiệm của phương trình bậc hai mà không cần giải trực tiếp phương trình.",
      sections: [
        {
          title: "1. Định lý Vi-ét thuận",
          content: "Nếu phương trình bậc hai $ax^2 + bx + c = 0$ ($a \\ne 0$) có hai nghiệm $x_1, x_2$ (tức là $\\Delta \\ge 0$) thì:\n\n$$\\begin{cases} S = x_1 + x_2 = -\\dfrac{b}{a} \\\\[2mm] P = x_1 \\cdot x_2 = \\dfrac{c}{a} \\end{cases}$$\n\n*Lưu ý:* Luôn phải kiểm tra điều kiện $\\Delta \\ge 0$ (hoặc $\\Delta' \\ge 0$) trước khi áp dụng hệ thức Vi-ét."
        },
        {
          title: "2. Ứng dụng nhẩm nghiệm nhanh",
          content: "- Nếu $a + b + c = 0$ thì phương trình có nghiệm $x_1 = 1$, $x_2 = \\dfrac{c}{a}$.\n- Nếu $a - b + c = 0$ thì phương trình có nghiệm $x_1 = -1$, $x_2 = -\\dfrac{c}{a}$."
        },
        {
          title: "3. Tìm hai số biết tổng $S$ và tích $P$",
          content: "Nếu hai số có tổng bằng $S$ và tích bằng $P$ thì hai số đó là nghiệm của phương trình:\n\n$$X^2 - SX + P = 0$$\n\n*(Điều kiện để tồn tại hai số là $S^2 - 4P \\ge 0$)*"
        }
      ]
    },

    topics: [
      {
        id: "dang-1",
        name: "Dạng 1: Nhẩm nghiệm và tính giá trị biểu thức đối xứng giữa hai nghiệm",
        method: "Phương pháp: Biến đổi biểu thức đối xứng về tổng $S = x_1 + x_2$ và tích $P = x_1 x_2$. Ví dụ: $x_1^2 + x_2^2 = (x_1+x_2)^2 - 2x_1x_2 = S^2 - 2P$.",
        
        examples: [
          {
            title: "Ví dụ 1 (Cơ bản)",
            question: "Không giải phương trình, hãy nhẩm nghiệm của phương trình: $2x^2 - 5x + 3 = 0$.",
            solution: "Ta có các hệ số: $a = 2, b = -5, c = 3$.\nNhận xét: $a + b + c = 2 + (-5) + 3 = 0$.\nTheo định lý Vi-ét nhẩm nghiệm, phương trình có hai nghiệm:\n$$x_1 = 1, \\quad x_2 = \\dfrac{c}{a} = \\dfrac{3}{2}$$"
          },
          {
            title: "Ví dụ 2 (Thông hiểu)",
            question: "Cho phương trình $x^2 - 4x + 1 = 0$ có hai nghiệm $x_1, x_2$. Tính giá trị của biểu thức $A = x_1^2 + x_2^2$ và $B = \\dfrac{1}{x_1} + \\dfrac{1}{x_2}$.",
            solution: "Phương trình có: $\\Delta' = (-2)^2 - 1\\cdot 1 = 3 > 0$ nên phương trình có hai nghiệm phân biệt.\nTheo định lý Vi-ét: $S = x_1 + x_2 = 4$, $P = x_1 x_2 = 1$.\n- Tính $A$: $A = (x_1 + x_2)^2 - 2x_1x_2 = 4^2 - 2(1) = 16 - 2 = 14$.\n- Tính $B$: $B = \\dfrac{x_1 + x_2}{x_1 x_2} = \\dfrac{4}{1} = 4$."
          },
          {
            title: "Ví dụ 3 (Vận dụng)",
            question: "Tìm hai số $u$ và $v$ biết tổng $u + v = 9$ và tích $uv = 18$.",
            solution: "Ta có $S = 9, P = 18$. Xét $S^2 - 4P = 9^2 - 4(18) = 81 - 72 = 9 > 0$.\nDo đó $u, v$ là hai nghiệm của phương trình:\n$$X^2 - 9X + 18 = 0$$\nGiải phương trình: $\\Delta = 81 - 72 = 9 \\implies \\sqrt{\\Delta} = 3$.\n$$X_1 = \\dfrac{9+3}{2} = 6; \\quad X_2 = \\dfrac{9-3}{2} = 3$$\nVậy $(u; v) \\in \\{(6; 3), (3; 6)\\}$."
          }
        ],

        exercises: [
          {
            id: 1,
            level: "Tương tự",
            question: "Nhẩm nghiệm của phương trình $3x^2 + 7x + 4 = 0$.",
            shortAnswer: "$x_1 = -1; x_2 = -\\dfrac{4}{3}$",
            fullSolution: "Ta có $a = 3, b = 7, c = 4$. Nhận thấy $a - b + c = 3 - 7 + 4 = 0$.\nVậy phương trình có hai nghiệm: $x_1 = -1$ và $x_2 = -\\dfrac{c}{a} = -\\dfrac{4}{3}$."
          },
          {
            id: 2,
            level: "Tương tự",
            question: "Cho phương trình $x^2 - 6x + 2 = 0$. Không giải phương trình, tính giá trị biểu thức $M = x_1^2 + x_2^2$.",
            shortAnswer: "$M = 32$",
            fullSolution: "$\\Delta' = 9 - 2 = 7 > 0$. Áp dụng Vi-ét: $S = 6, P = 2$.\n$M = (x_1+x_2)^2 - 2x_1x_2 = 6^2 - 2(2) = 36 - 4 = 32$."
          },
          {
            id: 3,
            level: "Tương tự",
            question: "Tìm hai số $a$ và $b$ biết $a + b = 11$ và $ab = 28$.",
            shortAnswer: "$(a; b) \\in \\{(4; 7), (7; 4)\\}$",
            fullSolution: "$a, b$ là nghiệm phương trình $X^2 - 11X + 28 = 0$. $\\Delta = 121 - 112 = 9$.\nNghiệm là $X_1 = 7, X_2 = 4$. Vậy cặp số cần tìm là $(7; 4)$ hoặc $(4; 7)$."
          },
          {
            id: 4,
            level: "Mở rộng",
            question: "Cho phương trình $2x^2 - 7x + 1 = 0$ có 2 nghiệm $x_1, x_2$. Tính $Q = x_1^3 + x_2^3$.",
            shortAnswer: "$Q = \\dfrac{301}{8}$",
            fullSolution: "Ta có $S = \\dfrac{7}{2}, P = \\dfrac{1}{2}$.\n$Q = (x_1+x_2)(x_1^2 - x_1x_2 + x_2^2) = S(S^2 - 3P) = \\dfrac{7}{2}\\left(\\dfrac{49}{4} - \\dfrac{3}{2}\\right) = \\dfrac{7}{2} \\cdot \\dfrac{43}{4} = \\dfrac{301}{8}$."
          },
          {
            id: 5,
            level: "Mở rộng",
            question: "Lập phương trình bậc hai có hai nghiệm là $y_1 = \\dfrac{1}{x_1}$ và $y_2 = \\dfrac{1}{x_2}$, biết $x_1, x_2$ là nghiệm của $x^2 - 5x + 3 = 0$.",
            shortAnswer: "$3y^2 - 5y + 1 = 0$",
            fullSolution: "$x_1+x_2 = 5, x_1x_2 = 3$.\n$S' = y_1+y_2 = \\dfrac{x_1+x_2}{x_1x_2} = \\dfrac{5}{3}$.\n$P' = y_1y_2 = \\dfrac{1}{x_1x_2} = \\dfrac{1}{3}$.\nPhương trình cần tìm: $y^2 - \\dfrac{5}{3}y + \\dfrac{1}{3} = 0 \\iff 3y^2 - 5y + 1 = 0$."
          },
          {
            id: 6,
            level: "Mở rộng",
            question: "Tính giá trị tuyệt đối $|x_1 - x_2|$ với $x_1, x_2$ là nghiệm của $x^2 - 8x + 12 = 0$.",
            shortAnswer: "$|x_1 - x_2| = 4$",
            fullSolution: "$(x_1 - x_2)^2 = (x_1+x_2)^2 - 4x_1x_2 = 8^2 - 4(12) = 64 - 48 = 16 \\implies |x_1 - x_2| = \\sqrt{16} = 4$."
          },
          {
            id: 7,
            level: "Mở rộng",
            question: "Tìm giá trị của biểu thức $K = (2x_1 - 1)(2x_2 - 1)$ khi $x_1, x_2$ là nghiệm của $3x^2 - 4x - 2 = 0$.",
            shortAnswer: "$K = -\\dfrac{11}{3}$",
            fullSolution: "$K = 4x_1x_2 - 2(x_1+x_2) + 1 = 4\\left(-\\dfrac{2}{3}\\right) - 2\\left(\\dfrac{4}{3}\\right) + 1 = -\\dfrac{8}{3} - \\dfrac{8}{3} + 1 = -\\dfrac{16}{3} + \\dfrac{3}{3} = -\\dfrac{11}{3}$."
          },
          {
            id: 8,
            level: "Nâng cao",
            question: "Cho phương trình $x^2 - 2(m-1)x + m^2 - 3 = 0$. Tìm $m$ để phương trình có hai nghiệm phân biệt $x_1, x_2$ thỏa mãn $x_1^2 + x_2^2 = 10$.",
            shortAnswer: "$m = 3$",
            fullSolution: "1. ĐK có 2 nghiệm pb: $\\Delta' = (m-1)^2 - (m^2-3) = -2m + 4 > 0 \\iff m < 2$.\n2. $x_1^2 + x_2^2 = S^2 - 2P = 4(m-1)^2 - 2(m^2-3) = 2m^2 - 8m + 10$.\nTheo đề: $2m^2 - 8m + 10 = 10 \\iff 2m(m-4) = 0 \\iff m = 0$ hoặc $m = 4$.\nĐối chiếu điều kiện $m < 2$, ta chỉ nhận $m = 0$."
          },
          {
            id: 9,
            level: "Nâng cao",
            question: "Tìm giá trị nhỏ nhất của biểu thức $T = x_1^2 + x_2^2 - 6x_1x_2$ đối với phương trình $x^2 - mx + m - 1 = 0$.",
            shortAnswer: "$\\min T = -7$ khi $m = 4$",
            fullSolution: "$\\Delta = m^2 - 4(m-1) = (m-2)^2 \\ge 0$ với mọi $m$.\n$T = S^2 - 8P = m^2 - 8(m-1) = m^2 - 8m + 8 = (m-4)^2 - 8$.\nDo $(m-4)^2 \\ge 0 \\implies T \\ge -8$. Dấu bằng xảy ra khi $m = 4$."
          },
          {
            id: 10,
            level: "Nâng cao",
            question: "Cho hai nghiệm $x_1, x_2$ thoả mãn $x_1 + x_2 - 2x_1x_2 = 0$ và $x_1 + x_2 = 4$. Hãy tìm phương trình bậc hai nhận $x_1, x_2$ làm nghiệm.",
            shortAnswer: "$X^2 - 4X + 2 = 0$",
            fullSolution: "Từ $x_1 + x_2 = 4 \\implies S = 4$.\nThay vào: $4 - 2P = 0 \\implies P = 2$.\nKiểm tra: $S^2 - 4P = 16 - 8 = 8 > 0$ (thỏa mãn tồn tại nghiệm).\nVậy phương trình cần lập là $X^2 - 4X + 2 = 0$."
          }
        ]
      }
    ],

    assessment: [
      {
        id: "q1",
        type: "multiple_choice",
        question: "Phương trình $x^2 - 3x - 4 = 0$ có tổng hai nghiệm $S$ và tích hai nghiệm $P$ lần lượt là:",
        options: [
          { key: "A", text: "$S = -3, P = -4$", isCorrect: false, errorTag: "ERR_SIGN", errorMsg: "Sai dấu công thức Vi-ét! Nhớ rằng $S = -\\dfrac{b}{a}$, dấu trừ trước hệ số $b$." },
          { key: "B", text: "$S = 3, P = -4$", isCorrect: true, errorTag: null, errorMsg: "Chính xác! $S = -(-3)/1 = 3$ và $P = -4/1 = -4$." },
          { key: "C", text: "$S = 3, P = 4$", isCorrect: false, errorTag: "ERR_PRODUCT_SIGN", errorMsg: "Sai dấu của tích $P$! Công thức là $P = \\dfrac{c}{a}$, ở đây $c = -4$ nên $P = -4$." },
          { key: "D", text: "$S = -3, P = 4$", isCorrect: false, errorTag: "ERR_BOTH_SIGN", errorMsg: "Nhầm lẫn cả dấu của Tổng $S$ và Tích $P$." }
        ],
        remedialProblem: {
          title: "Bài tập khắc phục lỗi sai dấu Vi-ét",
          question: "Tính tổng $S$ và tích $P$ của nghiệm phương trình: $2x^2 + 6x - 5 = 0$.",
          correctAnswer: "$S = -3; P = -\\dfrac{5}{2}$",
          tip: "Mẹo nhớ: Tổng 'đổi dấu' hệ số $b$, Tích 'giữ nguyên' dấu hệ số $c$."
        }
      },
      {
        id: "q2",
        type: "multiple_choice",
        question: "Tìm tất cả các giá trị của $m$ để phương trình $(m-1)x^2 - 2mx + m + 2 = 0$ có hai nghiệm phân biệt:",
        options: [
          { key: "A", text: "$m < 2$", isCorrect: false, errorTag: "ERR_MISSING_A_COND", errorMsg: "Lỗi kinh điển: Quên điều kiện $a \\ne 0$! Ở đây hệ số $a = m - 1$, để là phương trình bậc hai thì $m \\ne 1$." },
          { key: "B", text: "$m < 2$ và $m \\ne 1$", isCorrect: true, errorTag: null, errorMsg: "Rất xuất sắc! Em đã không bị bẫy điều kiện $a = m - 1 \\ne 0$." },
          { key: "C", text: "$m > 2$", isCorrect: false, errorTag: "ERR_INEQUALITY_SIGN", errorMsg: "Sai chiều bất phương trình khi giải $\\Delta' > 0$." },
          { key: "D", text: "$m \\le 2$", isCorrect: false, errorTag: "ERR_STRICT_INEQUALITY", errorMsg: "Đề bài yêu cầu 'hai nghiệm phân biệt' nên $\\Delta' > 0$ (ngặt), không được lấy dấu bằng." }
        ],
        remedialProblem: {
          title: "Bài tập khắc phục bẫy điều kiện hệ số $a$",
          question: "Tìm $m$ để phương trình $(m+2)x^2 - 4x + 1 = 0$ có nghiệm kép.",
          correctAnswer: "$m = 2$",
          tip: "Nhớ kiểm tra điều kiện $a = m + 2 \\ne 0 \\iff m \\ne -2$ rồi mới giải $\\Delta' = 0$."
        }
      },
      {
        id: "q3",
        type: "essay",
        question: "Cho phương trình $x^2 - 2(m+1)x + m^2 + 2 = 0$. Tìm $m$ để phương trình có hai nghiệm $x_1, x_2$ thoả mãn:\n$$x_1^2 + x_2^2 - 3x_1x_2 = 1$$",
        sampleAnswer: "1. ĐK có 2 nghiệm: $\\Delta' = (m+1)^2 - (m^2+2) = 2m - 1 \\ge 0 \\iff m \\ge \\dfrac{1}{2}$.\n2. Theo Vi-ét: $x_1+x_2 = 2(m+1)$ và $x_1x_2 = m^2+2$.\n3. Biến đổi: $x_1^2 + x_2^2 - 3x_1x_2 = (x_1+x_2)^2 - 5x_1x_2 = 4(m+1)^2 - 5(m^2+2) = -m^2 + 8m - 6$.\n4. Giải phương trình: $-m^2 + 8m - 6 = 1 \\iff m^2 - 8m + 7 = 0 \\iff m = 1$ hoặc $m = 7$.\n5. Kết hợp điều kiện $m \\ge \\dfrac{1}{2}$, cả hai giá trị $m = 1$ và $m = 7$ đều thoả mãn.",
        keyCriteria: [
          { id: "c1", title: "Tính đúng $\\Delta'$ và tìm điều kiện $m \\ge \\dfrac{1}{2}$", points: 2.5 },
          { id: "c2", title: "Áp dụng đúng định lý Vi-ét cho tổng và tích", points: 2.0 },
          { id: "c3", title: "Biến đổi biểu thức về dạng $(x_1+x_2)^2 - 5x_1x_2$", points: 2.5 },
          { id: "c4", title: "Giải ra $m=1, m=7$ và đối chiếu điều kiện", points: 3.0 }
        ]
      }
    ]
  },

  // DANH SÁCH LỚP HỌC DO THẦY QUẢN LÝ
  classes: [
    {
      id: "lop-9a",
      name: "Toán 9A - Luyện thi vào 10 Chuyên",
      grade: 9,
      code: "TOAN9A2026",
      studentsCount: 28,
      students: [
        { 
          id: "hs1", 
          name: "Nguyễn Văn An", 
          email: "nguyenvanan.toan9@gmail.com", 
          phone: "0912345678", 
          parentName: "Bác Nguyễn Văn Hùng", 
          parentZalo: "0912888999", 
          apiKey: "TOAN-9PLUS-2026",
          scoreAvg: 8.8, 
          status: "active" 
        },
        { 
          id: "hs2", 
          name: "Trần Thị Mai", 
          email: "tranthimai.9a@gmail.com", 
          phone: "0987654321", 
          parentName: "Cô Lê Thị Hoa", 
          parentZalo: "0987333444", 
          apiKey: "TOAN-VIP-CHUYEN",
          scoreAvg: 9.2, 
          status: "active" 
        },
        { 
          id: "hs3", 
          name: "Lê Hoàng Nam", 
          email: "lehoangnam.hsg@gmail.com", 
          phone: "0905112233", 
          parentName: "Bác Lê Văn Dũng", 
          parentZalo: "0905999888", 
          apiKey: "TOAN-TARGET-8PLUS",
          scoreAvg: 7.5, 
          status: "active" 
        },
        { 
          id: "hs4_new", 
          name: "Đặng Quang Minh", 
          email: "", 
          phone: "", 
          parentName: "", 
          parentZalo: "", 
          apiKey: "TOAN-9PLUS-2026",
          scoreAvg: 0.0, 
          status: "active" 
        }
      ],
      pendingRequests: [
        { 
          id: "req1", 
          name: "Phạm Quốc Bảo", 
          grade: 9,
          email: "", 
          phone: "", 
          parentName: "", 
          parentZalo: "", 
          apiKey: "TOAN-VIP-CHUYEN",
          apiLevel: "Nâng cao & Luyện thi Chuyên Toán (Mục tiêu 9.5 - 10đ)",
          requestDate: "06/11/2026", 
          note: "Đăng ký với Mã API: TOAN-VIP-CHUYEN. Chờ Thầy duyệt để bổ sung Gmail & Zalo." 
        },
        { 
          id: "req2", 
          name: "Vũ Hải Đăng", 
          grade: 9,
          email: "", 
          phone: "", 
          parentName: "", 
          parentZalo: "", 
          apiKey: "TOAN-TARGET-8PLUS",
          apiLevel: "Học sinh Khá (Chắc chắn kiến thức 8.0 - 8.8đ)",
          requestDate: "05/11/2026", 
          note: "Đăng ký với Mã API: TOAN-TARGET-8PLUS. Chờ Thầy duyệt để bổ sung Gmail & Zalo." 
        }
      ]
    },
    {
      id: "lop-12c",
      name: "Toán 12C - Ôn thi ĐGNL & Tốt nghiệp THPT",
      grade: 12,
      code: "DGNL122026",
      studentsCount: 35,
      students: [
        { 
          id: "hs4", 
          name: "Đỗ Minh Đức", 
          email: "minhduc.dgnl@gmail.com", 
          phone: "0944556677", 
          parentName: "Bác Đỗ Quang Huy", 
          parentZalo: "0944111222", 
          scoreAvg: 8.5, 
          status: "active" 
        }
      ],
      pendingRequests: [
        { 
          id: "req3", 
          name: "Bùi Tuyết Nhi", 
          grade: 12,
          email: "", 
          phone: "", 
          parentName: "", 
          parentZalo: "", 
          apiKey: "TOAN-9PLUS-2026",
          apiLevel: "Học sinh Giỏi 9+ (Rèn phản xạ câu phân loại 8-10đ)",
          requestDate: "06/11/2026", 
          note: "Đăng ký với Mã API: TOAN-9PLUS-2026. Chờ Thầy duyệt để bổ sung Gmail & Zalo." 
        }
      ]
    }
  ],

  // ==========================================
  // CHUYÊN MỤC: HỌC SINH GIỎI & LUYỆN THI CHUYÊN
  // ==========================================
  giftedTopics: [
    {
      id: "gifted-bdt-01",
      grade: 9,
      title: "Chuyên Đề 1: Kỹ Thuật Đánh Giá Bất Đẳng Thức & Tìm Cực Trị Đại Số",
      target: "Mục tiêu 9.5 - 10 điểm thi Chuyên & HSG Cấp Tỉnh/TP",
      badge: "Chuyên Sâu Đỉnh Cao",
      badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
      description: "Thành thạo kỹ thuật chọn điểm rơi đối xứng và bất đối xứng, kỹ thuật thêm bớt hạng tử, bất đẳng thức Cauchy-Schwarz dạng Engel (Svac-xơ) và phân tích bình phương SOS.",
      keyFormulas: [
        "Cauchy (AM-GM): $a + b \\ge 2\\sqrt{ab} \\quad (a, b \\ge 0)$",
        "Cauchy-Schwarz dạng Engel: $\\dfrac{x_1^2}{a_1} + \\dfrac{x_2^2}{a_2} \\ge \\dfrac{(x_1+x_2)^2}{a_1+a_2} \\quad (a_i > 0)$",
        "Hằng đẳng thức phụ: $(a+b+c)^2 \\ge 3(ab+bc+ca)$"
      ],
      examples: [
        {
          title: "Ví dụ 1 (Đề Chuyên KHTN): Cho $a, b, c > 0$ thỏa mãn $a+b+c=3$. Tìm GTNN của $P = \\dfrac{a}{1+b^2} + \\dfrac{b}{1+c^2} + \\dfrac{c}{1+a^2}$.",
          solution: "**Phân tích & Lời giải:**\nÁp dụng kỹ thuật *Cauchy ngược dấu*:\n$$\\frac{a}{1+b^2} = a - \\frac{ab^2}{1+b^2} \\ge a - \\frac{ab^2}{2b} = a - \\frac{ab}{2}$$\nTương tự:\n$$P \\ge (a+b+c) - \\frac{ab+bc+ca}{2} = 3 - \\frac{ab+bc+ca}{2}$$\nDo $(a+b+c)^2 \\ge 3(ab+bc+ca) \\Rightarrow ab+bc+ca \\le \\frac{3^2}{3} = 3$.\n$$\\Rightarrow P \\ge 3 - \\frac{3}{2} = \\frac{3}{2}$$\nDấu bằng xảy ra khi $a = b = c = 1$. Vậy $\\min P = \\dfrac{3}{2}$."
        },
        {
          title: "Ví dụ 2 (Đề HSG Hà Nội): Cho $x, y, z > 0$ và $xy+yz+zx = 1$. Chứng minh rằng: $\\dfrac{x}{\\sqrt{x^2+1}} + \\dfrac{y}{\\sqrt{y^2+1}} + \\dfrac{z}{\\sqrt{z^2+1}} \\le \\dfrac{3}{2}$.",
          solution: "**Phân tích & Lời giải:**\nThay $1 = xy+yz+zx$ vào căn thức mẫu số:\n$$x^2 + 1 = x^2 + xy + yz + zx = (x+y)(x+z)$$\nÁp dụng Cauchy:\n$$\\sqrt{(x+y)(x+z)} \\ge 2\\sqrt{\\dots} \\Rightarrow \\frac{x}{\\sqrt{(x+y)(x+z)}} \\le \\frac{1}{2}\\left(\\frac{x}{x+y} + \\frac{x}{x+z}\\right)$$\nCộng vế với vế 3 biểu thức, ta được đúng $\\dfrac{3}{2}$. Dấu bằng khi $x=y=z=\\dfrac{1}{\\sqrt{3}}$."
        },
        {
          title: "Ví dụ 3: Cho $a, b > 0$ thỏa mãn $a+b \\le 1$. Tìm GTNN của $Q = a + b + \\dfrac{1}{a} + \\dfrac{1}{b}$.",
          solution: "**Phân tích kỹ thuật tách ghép điểm rơi:**\nDự đoán dấu bằng tại $a = b = \\dfrac{1}{2}$.\n$$Q = \\left(a + \\frac{1}{4a}\\right) + \\left(b + \\frac{1}{4b}\\right) + \\frac{3}{4}\\left(\\frac{1}{a} + \\frac{1}{b}\\right)$$\nÁp dụng Cauchy cho từng cặp:\n$$a + \\frac{1}{4a} \\ge 1, \\quad b + \\frac{1}{4b} \\ge 1$$\nVà $\\dfrac{1}{a} + \\dfrac{1}{b} \\ge \\dfrac{4}{a+b} \\ge 4$.\n$$\\Rightarrow Q \\ge 1 + 1 + \\frac{3}{4} \\cdot 4 = 5$$.\nVậy $\\min Q = 5$ khi $a = b = \\dfrac{1}{2}$."
        }
      ],
      exercisesCount: 15,
      attachments: [
        { name: "Chuyen_De_Bat_Dang_Thuc_Cauchy_Va_SOS.pdf", size: "2.8 MB", type: "pdf" },
        { name: "Bai_Tap_Luyen_Thi_Chuyen_KHTN_BDT.docx", size: "1.2 MB", type: "docx" }
      ]
    },
    {
      id: "gifted-pt-02",
      grade: 9,
      title: "Chuyên Đề 2: Phương Trình & Hệ Phương Trình Vô Tỉ Chuyên Sâu",
      target: "Phân loại câu 9 - 10 điểm vào Chuyên",
      badge: "Kỹ Thuật Đột Phá",
      badgeColor: "bg-purple-100 text-purple-900 border-purple-300",
      description: "Phương pháp nhân lượng liên hợp tìm nghiệm duy nhất, đặt ẩn phụ không hoàn toàn, phương pháp đưa về hệ đối xứng và đánh giá bất đẳng thức hai vế.",
      keyFormulas: [
        "Liên hợp bậc hai: $\\sqrt{A} - \\sqrt{B} = \\dfrac{A - B}{\\sqrt{A} + \\sqrt{B}}$",
        "Liên hợp bậc ba: $\\sqrt[3]{A} - \\sqrt[3]{B} = \\dfrac{A - B}{\\sqrt[3]{A^2} + \\sqrt[3]{AB} + \\sqrt[3]{B^2}}$",
        "Đưa về tích: $A \\cdot B = 0 \\Leftrightarrow A = 0 \\lor B = 0$"
      ],
      examples: [
        {
          title: "Ví dụ 1 (Đề Chuyên Sư Phạm): Giải phương trình: $x^2 + 4x + 7 = (x+4)\\sqrt{x^2+7}$.",
          solution: "**Lời giải bằng phương pháp đặt ẩn phụ không hoàn toàn:**\nĐặt $t = \\sqrt{x^2+7} > 0 \\Rightarrow t^2 = x^2+7$.\nPhương trình trở thành:\n$$t^2 + 4x = (x+4)t \\Leftrightarrow t^2 - (x+4)t + 4x = 0$$\nCoi đây là phương trình bậc hai theo $t$, có $\\Delta = (x+4)^2 - 16x = (x-4)^2$.\nDo đó:\n$$t = x \\quad \\text{hoặc} \\quad t = 4$$\n- Với $t = 4 \\Rightarrow \\sqrt{x^2+7} = 4 \\Rightarrow x^2+7 = 16 \\Rightarrow x = \\pm 3$.\n- Với $t = x \\Rightarrow \\sqrt{x^2+7} = x$ (Vô nghiệm do $x^2+7 > x^2$).\nVậy phương trình có tập nghiệm $S = \\{-3; 3\\}$."
        }
      ],
      exercisesCount: 12,
      attachments: [
        { name: "Chuyen_De_Phuong_Trinh_He_Vo_Ti.pdf", size: "3.1 MB", type: "pdf" }
      ]
    },
    {
      id: "gifted-geo-03",
      grade: 9,
      title: "Chuyên Đề 3: Hình Học Phẳng Cực Trị, Điểm Đồng Quy & Thẳng Hàng",
      target: "Chinh phục câu hình học cuối đề thi HSG & Chuyên",
      badge: "Tư Duy Hình Học",
      badgeColor: "bg-blue-100 text-blue-900 border-blue-300",
      description: "Định lý Ceva, Menelaus, đường tròn Euler, tứ giác nội tiếp khó, các bài toán tìm vị trí điểm để diện tích hoặc chu vi đạt cực trị.",
      keyFormulas: [
        "Định lý Ceva: $\\dfrac{AF}{FB} \\cdot \\dfrac{BD}{DC} \\cdot \\dfrac{CE}{EA} = 1$",
        "Định lý Menelaus: $\\dfrac{AM}{MB} \\cdot \\dfrac{BN}{NC} \\cdot \\dfrac{CP}{PA} = 1$",
        "Bất đẳng thức hình học: $MA + MB \\ge AB$"
      ],
      examples: [
        {
          title: "Ví dụ 1 (Đề HSG TP Hà Nội): Cho tam giác $ABC$ nhọn nội tiếp $(O)$. Tìm vị trí điểm $M$ trên cung nhỏ $BC$ sao cho $MB + MC$ lớn nhất.",
          solution: "**Lời giải:**\nTrên tia đối của tia $MC$ lấy điểm $D$ sao cho $MD = MB$.\nTa chứng minh được $\\triangle MBD$ đều $\\Rightarrow CD = MB + MC$.\nÁp dụng định lý sin trong tam giác $ACD$, ta suy ra $CD$ lớn nhất khi $M$ là điểm chính giữa cung nhỏ $BC$."
        }
      ],
      exercisesCount: 14,
      attachments: [
        { name: "Cam_Nang_Hinh_Hoc_Ceva_Menelaus.pdf", size: "3.5 MB", type: "pdf" }
      ]
    },
    {
      id: "gifted-num-04",
      grade: 9,
      title: "Chuyên Đề 4: Số Học, Phương Trình Nghiệm Nguyên & Nguyên Lý Dirichlet",
      target: "Luyện thi Chuyên & HSG Quốc Gia",
      badge: "Tư Duy Số Học",
      badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
      description: "Tính chất chia hết, số chính phương, phương trình Diophantine, ứng dụng nguyên lý cực hạn và nguyên lý Dirichlet vào giải toán tổ hợp.",
      keyFormulas: [
        "Định lý Fermat nhỏ: $a^{p-1} \\equiv 1 \\pmod p$ với $(a, p) = 1$",
        "Số chính phương chia 3 hoặc 4 chỉ có số dư là 0 hoặc 1",
        "Nguyên lý Dirichlet: Nhốt $n+1$ con thỏ vào $n$ chuồng thì có ít nhất 1 chuồng chứa $\\ge 2$ con thỏ"
      ],
      examples: [
        {
          title: "Ví dụ 1: Tìm tất cả các số nguyên dương $x, y$ sao cho $x^2 - 2y^2 = 1$.",
          solution: "**Lời giải:** Phương trình Pell căn bản. Nghiệm nguyên dương nhỏ nhất là $(x_1, y_1) = (3, 2)$. Mọi nghiệm tổng quát được sinh bởi dãy $(3 + 2\\sqrt{2})^n = x_n + y_n\\sqrt{2}$."
        }
      ],
      exercisesCount: 10,
      attachments: [
        { name: "So_Hoc_Va_Nguyen_Ly_Dirichlet.pdf", size: "2.2 MB", type: "pdf" }
      ]
    }
  ],

  // ==========================================
  // BÀI VIẾT CHUYÊN SÂU DÀNH CHO HỌC SINH GIỎI
  // ==========================================
  giftedArticles: [
    {
      id: "garticle-01",
      title: "5 Lỗi Sai Kinh Điển Khi Làm Câu Điểm 10 Bất Đẳng Thức & Bí Quyết Khắc Phục",
      author: "Thầy Giáo",
      date: "06/11/2026",
      readTime: "7 phút đọc",
      badge: "Kinh Nghiệm Săn Điểm 10",
      badgeColor: "bg-red-100 text-red-800 border-red-300",
      summary: "Rất nhiều học sinh khá giỏi mất trọn 1.0 điểm ở câu cực trị cuối cùng vì bỏ qua điều kiện dấu bằng xảy ra, nhầm lẫn giữa cực trị biên và cực trị tâm. Bài viết hướng dẫn chi tiết phương pháp kiểm tra tính đối xứng và kỹ thuật tách ghép hạng tử an toàn.",
      keyInsights: [
        "Lỗi 1: Áp dụng Cauchy khi các biến chưa đủ điều kiện dương.",
        "Lỗi 2: Dự đoán sai điểm rơi khi giả thiết chứa điều kiện bất đối xứng.",
        "Lỗi 3: Đánh giá ngược chiều bất đẳng thức trong quá trình biến đổi.",
        "Bí quyết: Luôn thử ngược lại giá trị dấu bằng tại $a = b = c$ hoặc tại biên trước khi chọn chiều đánh giá."
      ],
      attachments: [
        { name: "Cam_Nang_50_Bai_Toan_Cuc_Tri_Diem_Roi_Va_Loi_Giai.pdf", size: "3.2 MB", type: "pdf" },
        { name: "Phieu_Bai_Tap_Tu_Luyen_Bat_Dang_Thuc_Diem_10.docx", size: "1.1 MB", type: "docx" }
      ]
    },
    {
      id: "garticle-02",
      title: "Chiến Thuật Vẽ Thêm Đường Phụ Trong Hình Học Thi Tuyển Sinh Lớp 10 Chuyên",
      author: "Thầy Giáo",
      date: "05/11/2026",
      readTime: "10 phút đọc",
      badge: "Kỹ Thuật Hình Học",
      badgeColor: "bg-blue-100 text-blue-800 border-blue-300",
      summary: "Đề thi Chuyên KHTN, Sư Phạm và HSG Thành Phố thường đòi hỏi vẽ thêm các yếu tố phụ: dựng đường kính đường tròn ngoại tiếp, kẻ tiếp tuyến chung, hoặc dựng hình bình hành phụ để chuyển tỉ số diện tích. Thầy chia sẻ sơ đồ tư duy định hướng vẽ hình chuẩn xác.",
      keyInsights: [
        "Kỹ thuật 1: Kẻ đường kính phụ khi bài toán xuất hiện góc vuông hoặc yếu tố trực tâm.",
        "Kỹ thuật 2: Dựng đường thẳng đối xứng hoặc áp dụng bổ đề chùm đường thẳng điều hòa.",
        "Kỹ thuật 3: Sử dụng định lý Ceva dạng lượng giác và Menelaus để rút gọn tỉ số."
      ],
      attachments: [
        { name: "So_Do_Tu_Duy_Cac_Duong_Phu_Kinh_Dien_Hinh_Hoc.pdf", size: "4.5 MB", type: "pdf" }
      ]
    },
    {
      id: "garticle-03",
      title: "Phân Tích Barem Điểm Thi Vào Lớp 10 Chuyên & Cách Trình Bày Tránh Mất Điểm Oan",
      author: "Thầy Giáo",
      date: "03/11/2026",
      readTime: "6 phút đọc",
      badge: "Kỹ Năng Phòng Thi",
      badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
      summary: "Trong các kỳ thi Chuyên, mỗi bước lập luận thiếu chặt chẽ có thể bị trừ từ 0.25 đến 0.5 điểm. Bài viết mổ xẻ barem chấm thi chính thức của các Hội đồng thi và hướng dẫn học sinh trình bày sạch sẽ, chặt chẽ từng khẳng định toán học.",
      keyInsights: [
        "Không được bỏ sót bước tìm điều kiện xác định (ĐKXĐ) của phương trình và căn thức.",
        "Khi biến đổi tương đương hoặc hệ quả phải ghi rõ ký hiệu $\\Leftrightarrow$ hoặc $\\Rightarrow$.",
        "Kết luận nghiệm rõ ràng, không viết tắt hoặc gộp nhiều trường hợp không tương đương."
      ],
      attachments: [
        { name: "Huong_Dan_Trinh_Bay_Chuan_Barem_Cham_Vao_10_Chuyen.pdf", size: "2.1 MB", type: "pdf" },
        { name: "Bo_De_Mau_Trinh_Bay_Diem_Tuyet_Doi.docx", size: "1.3 MB", type: "docx" }
      ]
    }
  ],

  // KHO ĐỀ THI HỌC SINH GIỎI & ĐỀ THI VÀO CHUYÊN (KÈM TỆP ĐÍNH KÈM)
  giftedExams: [
    {
      id: "gexam-khtn-2026",
      title: "Đề Thi Tuyển Sinh Lớp 10 Chuyên - THPT Chuyên KHTN (Hà Nội)",
      year: "2025 - 2026",
      grade: 9,
      duration: "150 phút",
      badge: "Chuyên KHTN",
      badgeColor: "bg-red-100 text-red-800 border-red-300",
      youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      description: "Đề thi phân loại cao độ với câu Bất đẳng thức Cauchy cực trị và hình học biến hình đặc sắc.",
      questionsSummary: "5 bài toán lớn (10.0 điểm) gồm: Đại số vô tỉ, Hệ phương trình, Số học chính phương, Hình học Ceva và Bất đẳng thức cực trị.",
      attachments: [
        { name: "De_Thi_Vao_10_Chuyen_KHTN_2025_2026.pdf", size: "1.8 MB", type: "pdf" },
        { name: "Dap_An_Va_Thang_Diem_Chi_Tiet_Chuyen_KHTN.pdf", size: "2.1 MB", type: "pdf" },
        { name: "File_Word_De_Thi_KHTN_Co_Loi_Giai.docx", size: "1.2 MB", type: "docx" }
      ]
    },
    {
      id: "gexam-hn-hsg-2026",
      title: "Đề Thi Học Sinh Giỏi Môn Toán Lớp 9 - Sở GD&ĐT TP Hà Nội",
      year: "2025 - 2026",
      grade: 9,
      duration: "150 phút",
      badge: "HSG Thành Phố",
      badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
      youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      description: "Bộ đề chuẩn tuyển chọn đội tuyển dự thi cấp quốc gia, giải chi tiết từng bước có bình luận phương pháp của Thầy.",
      questionsSummary: "Bao quát toàn bộ chương trình Toán 9 nâng cao, trọng tâm vào kỹ thuật phân tích nhân tử và đánh giá nghiệm nguyên.",
      attachments: [
        { name: "De_Thi_HSG_Thanh_Pho_Ha_Noi_Toan_9.pdf", size: "1.5 MB", type: "pdf" },
        { name: "Barem_Loi_Giai_Chuan_So_GD_Ha_Noi.pdf", size: "1.9 MB", type: "pdf" }
      ]
    },
    {
      id: "gexam-sp-2026",
      title: "Đề Thi Tuyển Sinh Lớp 10 Chuyên - THPT Chuyên Đại Học Sư Phạm Hà Nội",
      year: "2025 - 2026",
      grade: 9,
      duration: "120 phút",
      badge: "Chuyên Sư Phạm",
      badgeColor: "bg-purple-100 text-purple-900 border-purple-300",
      youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      description: "Bộ đề mẫu mực về cấu trúc và độ khó, kèm video hướng dẫn phân tích hướng đi bài hình và đại số.",
      questionsSummary: "Đầy đủ 4 phần: Rút gọn nâng cao, Hệ phương trình đối xứng, Hình học phẳng và Bất đẳng thức điểm rơi.",
      attachments: [
        { name: "De_Thi_Lop_10_Chuyen_Dai_Hoc_Su_Pham.pdf", size: "1.6 MB", type: "pdf" },
        { name: "Huong_Dan_Cham_Chuyen_Su_Pham.docx", size: "1.0 MB", type: "docx" }
      ]
    }
  ]
};
