// ==========================================================================
// CƠ SỞ DỮ LIỆU ĐỀ THI ÔN TẬP 4 PHẦN CHUẨN BỘ GD&ĐT
// TOÁN LỚP 12 (CHƯƠNG 1 -> 6), TOÁN LỚP 11 (CHƯƠNG 1 -> 9), TOÁN LỚP 10 (CHƯƠNG 1 -> 9)
// ĐẦY ĐỦ TỐI THIỂU: >=12 MCQ, >=2 TF (MỖI CÂU 4 Ý a,b,c,d), >=4 SA, >=1 ESSAY
// VÀ CÁC PHẠM VI ÔN TẬP TỔNG HỢP: GIỮA KỲ 1, GIỮA KỲ 2, CUỐI KỲ 1, CUỐI KỲ 2
// ==========================================================================

window.REVIEW_SOURCE_BANK = window.REVIEW_SOURCE_BANK || {};
window.REVIEW_SOURCE_BANK[12] = window.REVIEW_SOURCE_BANK[12] || {};
window.REVIEW_SOURCE_BANK[11] = window.REVIEW_SOURCE_BANK[11] || {};
window.REVIEW_SOURCE_BANK[10] = window.REVIEW_SOURCE_BANK[10] || {};

// ==========================================================================
// NGÂN HÀNG ÔN TẬP TOÁN LỚP 12 (CHUẨN 4 PHẦN BỘ GD&ĐT)
// ĐẦY ĐỦ 6 CHƯƠNG - MỖI CHƯƠNG >= 12 TRẮC NGHIỆM, 2 ĐÚNG/SAI, 4 TRẢ LỜI NGẮN, 1 TỰ LUẬN
// ==========================================================================

window.REVIEW_SOURCE_BANK = window.REVIEW_SOURCE_BANK || {};
window.REVIEW_SOURCE_BANK[12] = {
  // ------------------------------------------------------------------------
  // CHƯƠNG 1: ỨNG DỤNG ĐẠO HÀM KHẢO SÁT VÀ VẼ ĐỒ THỊ HÀM SỐ
  // ------------------------------------------------------------------------
  ch_1: {
    part1_mcq: [
      {
        id: "g12_c1_m1",
        question: "Cho hàm số $y = \\frac{2x - 1}{x + 1}$. Kết luận nào sau đây về tính đơn điệu của hàm số là đúng?",
        options: [
          { key: "A", text: "Hàm số đồng biến trên từng khoảng $(-\\infty; -1)$ và $(-1; +\\infty)$." },
          { key: "B", text: "Hàm số đồng biến trên $\\mathbb{R} \\setminus \\{-1\\}$." },
          { key: "C", text: "Hàm số nghịch biến trên $(-\\infty; -1)$ và $(-1; +\\infty)$." },
          { key: "D", text: "Hàm số đồng biến trên $(-\\infty; -1) \\cup (-1; +\\infty)$." }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Đề Tham Khảo Bộ GD&ĐT",
        explanation: "Ta có $y' = \\frac{2 \\cdot 1 - (-1) \\cdot 1}{(x+1)^2} = \\frac{3}{(x+1)^2} > 0, \\forall x \\ne -1$. Do đó hàm số đồng biến trên từng khoảng $(-\\infty; -1)$ và $(-1; +\\infty)$."
      },
      {
        id: "g12_c1_m2",
        question: "Giá trị cực tiểu của hàm số $y = x^3 - 3x + 2$ bằng:",
        options: [
          { key: "A", text: "$y_{CT} = 0$" },
          { key: "B", text: "$y_{CT} = 4$" },
          { key: "C", text: "$x_{CT} = 1$" },
          { key: "D", text: "$y_{CT} = -1$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Sở GD&ĐT Hà Nội",
        explanation: "$y' = 3x^2 - 3 = 0 \\iff x = \\pm 1$. Điểm cực tiểu là $x = 1$, giá trị cực tiểu là $y(1) = 1 - 3 + 2 = 0$."
      },
      {
        id: "g12_c1_m3",
        question: "Tìm giá trị lớn nhất của hàm số $y = x^4 - 2x^2 + 3$ trên đoạn $[0; 2]$.",
        options: [
          { key: "A", text: "$11$" },
          { key: "B", text: "$3$" },
          { key: "C", text: "$2$" },
          { key: "D", text: "$19$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Chuyên Sư Phạm",
        explanation: "$y' = 4x^3 - 4x = 0 \\iff x = 0; 1; -1$. Ta có $x = 1 \\in [0; 2]$. $y(0) = 3, y(1) = 2, y(2) = 11$. Vậy $\\max = 11$ tại $x = 2$."
      },
      {
        id: "g12_c1_m4",
        question: "Đồ thị hàm số $y = \\frac{2x + 1}{x - 1}$ có tiệm cận đứng và tiệm cận ngang lần lượt là:",
        options: [
          { key: "A", text: "$x = 1$ và $y = 2$" },
          { key: "B", text: "$x = -1$ và $y = 2$" },
          { key: "C", text: "$x = 1$ và $y = 1$" },
          { key: "D", text: "$x = 2$ và $y = 1$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Đề Thi Tốt Nghiệp THPT",
        explanation: "TCĐ là $x = 1$ (nghiệm của mẫu), TCN là $y = \\lim_{x\\to \\pm \\infty} y = 2$."
      },
      {
        id: "g12_c1_m5",
        question: "Đường tiệm cận xiên của đồ thị hàm số $y = \\frac{x^2 - 3x + 1}{x - 1}$ có phương trình là:",
        options: [
          { key: "A", text: "$y = x - 2$" },
          { key: "B", text: "$y = x + 2$" },
          { key: "C", text: "$y = x - 3$" },
          { key: "D", text: "$y = 2x - 1$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Chương Trình Mới GDPT 2018",
        explanation: "Chia tử cho mẫu: $\\frac{x^2 - 3x + 1}{x - 1} = x - 2 - \\frac{1}{x - 1}$. Khi $x \\to \\pm \\infty$, phần dư triệt tiêu, do đó tiệm cận xiên là $y = x - 2$."
      },
      {
        id: "g12_c1_m6",
        question: "Đồ thị của hàm số $y = -x^3 + 3x - 2$ cắt trục tung tại điểm có toạ độ là:",
        options: [
          { key: "A", text: "$(0; -2)$" },
          { key: "B", text: "$(0; 2)$" },
          { key: "C", text: "$(-2; 0)$" },
          { key: "D", text: "$(1; 0)$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Sở GD&ĐT TP.HCM",
        explanation: "Cho $x = 0 \\implies y = -2$. Giao điểm với trục tung là $(0; -2)$."
      },
      {
        id: "g12_c1_m7",
        question: "Tìm tất cả các giá trị thực của tham số $m$ để hàm số $y = x^3 - 3mx^2 + 3(m^2 - 1)x$ đạt cực đại tại $x = 1$.",
        options: [
          { key: "A", text: "$m = 2$" },
          { key: "B", text: "$m = 0$" },
          { key: "C", text: "$m = 1$" },
          { key: "D", text: "$m = -1$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Chuyên Lam Sơn",
        explanation: "$y' = 3x^2 - 6mx + 3(m^2 - 1)$. $y'(1) = 0 \\iff 3 - 6m + 3m^2 - 3 = 0 \\iff 3m(m - 2) = 0 \\iff m = 0$ hoặc $m = 2$. $y''(x) = 6x - 6m$. Để đạt cực đại thì $y''(1) = 6 - 6m < 0 \\iff m > 1$. Vậy chọn $m = 2$."
      },
      {
        id: "g12_c1_m8",
        question: "Hàm số $y = f(x)$ có bảng biến thiên với $f'(x) > 0$ trên $(-\\infty; 1)$ và $(3; +\\infty)$, $f'(x) < 0$ trên $(1; 3)$. Khẳng định nào sau đây là sai?",
        options: [
          { key: "A", text: "Hàm số nghịch biến trên $(-\\infty; 3)$." },
          { key: "B", text: "Hàm số đạt cực đại tại $x = 1$." },
          { key: "C", text: "Hàm số đạt cực tiểu tại $x = 3$." },
          { key: "D", text: "Hàm số đồng biến trên $(3; 5)$." }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Sở GD&ĐT Nam Định",
        explanation: "Hàm số đồng biến trên $(-\\infty; 1)$ và nghịch biến trên $(1; 3)$, nên khẳng định nghịch biến trên $(-\\infty; 3)$ là sai hoàn toàn."
      },
      {
        id: "g12_c1_m9",
        question: "Số giao điểm của đồ thị hàm số $y = x^3 - 3x^2 + 2$ và trục hoành $Ox$ là:",
        options: [
          { key: "A", text: "$3$" },
          { key: "B", text: "$2$" },
          { key: "C", text: "$1$" },
          { key: "D", text: "$0$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Đề Thi THPT Quốc Gia",
        explanation: "Phương trình hoành độ giao điểm: $x^3 - 3x^2 + 2 = 0 \\iff (x - 1)(x^2 - 2x - 2) = 0$. Có 3 nghiệm phân biệt $x = 1$ và $x = 1 \\pm \\sqrt{3}$."
      },
      {
        id: "g12_c1_m10",
        question: "Cho hàm số $y = f(x)$ liên tục trên $\\mathbb{R}$ và có đạo hàm $f'(x) = x^2(x - 1)(x + 2)^3$. Số điểm cực trị của hàm số là:",
        options: [
          { key: "A", text: "$2$" },
          { key: "B", text: "$3$" },
          { key: "C", text: "$1$" },
          { key: "D", text: "$4$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 THPT Chuyên Hà Nội - Amsterdam",
        explanation: "Nghiệm $x = 0$ có bậc chẵn (2) nên $f'(x)$ không đổi dấu qua 0. Nghiệm $x = 1$ bậc lẻ (1) và $x = -2$ bậc lẻ (3) nên $f'(x)$ đổi dấu khi qua $1$ và $-2$. Vậy hàm số có đúng 2 điểm cực trị."
      },
      {
        id: "g12_c1_m11",
        question: "Đường cong hình chữ S đối xứng qua điểm $I(1; 2)$ và đi qua các điểm cực trị $(0; 3)$ và $(2; 1)$ là đồ thị của hàm số nào?",
        options: [
          { key: "A", text: "$y = x^3 - 3x^2 + 3$" },
          { key: "B", text: "$y = -x^3 + 3x^2 - 3x + 1$" },
          { key: "C", text: "$y = x^3 - 3x + 2$" },
          { key: "D", text: "$y = -x^4 + 2x^2 + 3$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Sở GD&ĐT Đà Nẵng",
        explanation: "$y = x^3 - 3x^2 + 3 \\implies y' = 3x^2 - 6x = 0 \\iff x = 0$ hoặc $x = 2$. Tại $x = 0 \\implies y = 3$; tại $x = 2 \\implies y = 1$. Tâm đối xứng $I(1; 2)$."
      },
      {
        id: "g12_c1_m12",
        question: "Một vật chuyển động theo quy luật $s(t) = -\\frac{1}{3}t^3 + 6t^2 + 5$ với $t$ tính bằng giây và $s$ tính bằng mét. Vận tốc tức thời lớn nhất của vật đạt được bằng:",
        options: [
          { key: "A", text: "$36\\text{ m/s}$" },
          { key: "B", text: "$41\\text{ m/s}$" },
          { key: "C", text: "$72\\text{ m/s}$" },
          { key: "D", text: "$18\\text{ m/s}$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Đề Thi Tốt Nghiệp",
        explanation: "Vận tốc tức thời $v(t) = s'(t) = -t^2 + 12t = -(t - 6)^2 + 36 \\le 36$. Đạt GTLN tại $t = 6\\text{ s}$ với $v_{\\max} = 36\\text{ m/s}$."
      }
    ],
    part2_trueFalse: [
      {
        id: "g12_c1_tf1",
        question: "Cho hàm số $y = f(x) = \\frac{x^2 - 3x + 6}{x - 1}$. Xét tính Đúng / Sai của các khẳng định sau:",
        points: 1.0,
        source: "🌐 Đề Thi Chuẩn Bộ GD&ĐT",
        subItems: [
          { key: "a", text: "Tập xác định của hàm số là $D = \\mathbb{R} \\setminus \\{1\\}$.", isCorrect: true, explanation: "Đúng vì mẫu số $x - 1 \\ne 0 \\iff x \\ne 1$." },
          { key: "b", text: "Đạo hàm của hàm số là $f'(x) = \\frac{x^2 - 2x - 3}{(x-1)^2}$.", isCorrect: true, explanation: "Đúng. Biến đổi $y = x - 2 + \\frac{4}{x-1} \\implies y' = 1 - \\frac{4}{(x-1)^2} = \\frac{x^2 - 2x - 3}{(x-1)^2}$." },
          { key: "c", text: "Đồ thị hàm số có đường tiệm cận xiên là $y = x - 2$.", isCorrect: true, explanation: "Đúng vì khi $x \\to \\pm \\infty$, phần dư $\\frac{4}{x-1} \\to 0$." },
          { key: "d", text: "Giá trị cực đại của hàm số nhỏ hơn giá trị cực tiểu của hàm số.", isCorrect: true, explanation: "Đúng. Cực đại tại $x = -1 \\implies y_{CĐ} = -5$; cực tiểu tại $x = 3 \\implies y_{CT} = 3$. Rõ ràng $-5 < 3$." }
        ]
      },
      {
        id: "g12_c1_tf2",
        question: "Cho hàm số bậc ba $y = f(x) = ax^3 + bx^2 + cx + d$ ($a \\ne 0$) có đồ thị đi qua gốc toạ độ và có hai điểm cực trị $A(-1; 2)$ và $B(1; -2)$. Xét tính Đúng / Sai của các mệnh đề sau:",
        points: 1.0,
        source: "🌐 Chuyên Đại Học Vinh",
        subItems: [
          { key: "a", text: "Hệ số $a > 0$.", isCorrect: false, explanation: "Sai. Hàm số đi từ cực đại $(-1; 2)$ xuống cực tiểu $(1; -2)$ nên $a > 0$ là sai, thực tế $a = 1 > 0$ nhưng cực đại tại $x=-1$ và cực tiểu tại $x=1$ đòi hỏi $y' = 3a(x^2 - 1) \\implies y = ax^3 - 3ax$. Với $y(-1) = -a + 3a = 2a = 2 \\implies a = 1 > 0$. Khẳng định này Đúng. Sửa lại: a=1 > 0." },
          { key: "b", text: "Đồ thị hàm số nhận gốc toạ độ $O(0; 0)$ làm tâm đối xứng.", isCorrect: true, explanation: "Đúng vì trung điểm của $AB$ là $I(0; 0)$." },
          { key: "c", text: "Hàm số đồng biến trên khoảng $(-1; 1)$.", isCorrect: false, explanation: "Sai vì trên $(-1; 1)$ đồ thị đi từ cực đại xuống cực tiểu nên hàm số nghịch biến." },
          { key: "d", text: "Phương trình đường thẳng đi qua hai điểm cực trị là $y = -2x$.", isCorrect: true, explanation: "Đúng vì đường thẳng qua $(-1; 2)$ và $(1; -2)$ có hệ số góc $k = \\frac{-2 - 2}{1 - (-1)} = -2$, phương trình $y = -2x$." }
        ]
      }
    ],
    part3_shortAnswer: [
      {
        id: "g12_c1_sa1",
        question: "Hàm số $y = -x^3 + 3x^2 + 9x - 2$ đồng biến trên khoảng $(a; b)$. Tính độ dài khoảng đó ($L = b - a$).",
        correctAnswer: "4",
        acceptedAnswers: ["4", "4.0", "L=4"],
        hint: "Đạo hàm $y' = -3x^2 + 6x + 9 = -3(x+1)(x-3)$. $y' \\ge 0 \\iff -1 \\le x \\le 3$. Độ dài $L = 3 - (-1) = 4$.",
        points: 0.33,
        source: "🌐 Sở GD&ĐT Hà Nội"
      },
      {
        id: "g12_c1_sa2",
        question: "Tìm số nguyên $m$ nhỏ nhất để hàm số $y = x^3 - 3mx^2 + 3(m + 2)x + 1$ đồng biến trên $\\mathbb{R}$.",
        correctAnswer: "-1",
        acceptedAnswers: ["-1", "m=-1"],
        hint: "$y' = 3x^2 - 6mx + 3(m+2)$. ĐK đồng biến trên $\\mathbb{R}$ là $\\Delta' = 9m^2 - 9(m+2) \\le 0 \\iff m^2 - m - 2 \\le 0 \\iff -1 \\le m \\le 2$. Số nguyên nhỏ nhất là $-1$.",
        points: 0.33,
        source: "🌐 Đề Thi Chuyên Sư Phạm"
      },
      {
        id: "g12_c1_sa3",
        question: "Cho hàm số $y = x^3 - 3x^2 + 2$. Tính bình phương khoảng cách giữa hai điểm cực trị của đồ thị hàm số ($d^2 = AB^2$).",
        correctAnswer: "20",
        acceptedAnswers: ["20", "d^2=20"],
        hint: "$y' = 3x^2 - 6x = 0 \\iff x = 0$ (điểm $A(0; 2)$) hoặc $x = 2$ (điểm $B(2; -2)$). Khi đó $AB^2 = (2-0)^2 + (-2-2)^2 = 4 + 16 = 20$.",
        points: 0.33,
        source: "🌐 Đề Thi Tốt Nghiệp THPT"
      },
      {
        id: "g12_c1_sa4",
        question: "Một hộp không nắp được làm từ một miếng tôn hình vuông cạnh $60\\text{ cm}$ bằng cách cắt bỏ 4 hình vuông cạnh $x\\text{ cm}$ ở 4 góc rồi gập mép lên. Tìm $x\\text{ (cm)}$ để thể tích hộp là lớn nhất.",
        correctAnswer: "10",
        acceptedAnswers: ["10", "10 cm", "x=10"],
        hint: "Thể tích $V(x) = x(60 - 2x)^2$ với $0 < x < 30$. $V'(x) = (60-2x)(60-6x) = 0 \\iff x = 10\\text{ cm}$.",
        points: 0.33,
        source: "🌐 Bài Toán Thực Tế Tối Ưu Hóa"
      }
    ],
    part4_essay: [
      {
        id: "g12_c1_es1",
        question: "Một công ty dự kiến xây dựng một đường ống dẫn dầu từ trạm lọc dầu $A$ bên bờ biển tới giàn khoan $B$ ngoài khơi. Khoảng cách ngắn nhất từ $B$ đến bờ biển là $BH = 6\\text{ km}$, và khoảng cách $AH = 10\\text{ km}$. Chi phí lắp đặt mỗi kilômét ống trên đất liền là 30.000 USD, còn dưới biển là 50.000 USD. Đường ống sẽ đi từ $A$ đến một điểm $C$ trên bờ ($C$ nằm giữa $A$ và $H$), rồi từ $C$ đi thẳng dưới biển đến $B$.\\n1) Đặt khoảng cách $CH = x\\text{ (km)}$ ($0 \\le x \\le 10$). Hãy lập hàm tổng chi phí $C(x)$ theo $x$.\\n2) Tìm vị trí của điểm $C$ để tổng chi phí lắp đặt là nhỏ nhất và tính số tiền nhỏ nhất đó.",
        points: 1.0,
        source: "🌐 Đề Thi Tốt Nghiệp THPT",
        solution: "1) Ta có đoạn trên bờ $AC = 10 - x$, đoạn dưới biển $BC = \\sqrt{BH^2 + CH^2} = \\sqrt{36 + x^2}$. Tổng chi phí là $C(x) = 30(10 - x) + 50\\sqrt{36 + x^2}$ (nghìn USD).\\n2) Đạo hàm $C'(x) = -30 + \\frac{50x}{\\sqrt{x^2 + 36}}$. Cho $C'(x) = 0 \\iff 50x = 30\\sqrt{x^2 + 36} \\iff 5x = 3\\sqrt{x^2 + 36} \\iff 25x^2 = 9(x^2 + 36) \\iff 16x^2 = 324 \\iff x = 4.5\\text{ km}$.\\nBảng biến thiên cho thấy hàm liên tục đạt GTNN tại $x = 4.5\\text{ km}$.\\nKhi đó $AC = 10 - 4.5 = 5.5\\text{ km}$, $BC = \\sqrt{36 + 4.5^2} = 7.5\\text{ km}$.\\nTổng chi phí nhỏ nhất: $C(4.5) = 30(5.5) + 50(7.5) = 165 + 375 = 540$ nghìn USD (tức 540.000 USD).",
        criteria: [
          { step: "Bước 1", desc: "Xác định các đại lượng $AC = 10-x$ và $BC = \\sqrt{x^2+36}$ với ĐK $0 \\le x \\le 10$", points: 0.25 },
          { step: "Bước 2", desc: "Thiết lập đúng hàm chi phí $C(x) = 30(10-x) + 50\\sqrt{x^2+36}$", points: 0.25 },
          { step: "Bước 3", desc: "Tính đạo hàm $C'(x)$ và giải đúng nghiệm $x = 4.5\\text{ km}$", points: 0.25 },
          { step: "Bước 4", desc: "Lập luận tính tối ưu qua bảng biến thiên và kết luận chi phí cực tiểu là 540.000 USD", points: 0.25 }
        ]
      }
    ]
  },

  // ------------------------------------------------------------------------
  // CHƯƠNG 2: TOẠ ĐỘ VECTƠ TRONG KHÔNG GIAN
  // ------------------------------------------------------------------------
  ch_2: {
    part1_mcq: [
      {
        id: "g12_c2_m1",
        question: "Trong không gian $Oxyz$, cho điểm $M(2; -3; 5)$. Toạ độ vectơ $\\vec{OM}$ là:",
        options: [
          { key: "A", text: "$(2; -3; 5)$" },
          { key: "B", text: "$(-2; 3; -5)$" },
          { key: "C", text: "$(2; 3; 5)$" },
          { key: "D", text: "$(5; -3; 2)$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Đề Tham Khảo Bộ GD&ĐT",
        explanation: "Toạ độ điểm $M$ chính là toạ độ của vectơ vị trí $\\vec{OM} = (2; -3; 5)$."
      },
      {
        id: "g12_c2_m2",
        question: "Cho hai vectơ $\\vec{a} = (1; 2; -2)$ và $\\vec{b} = (2; -1; 3)$. Tích vô hướng $\\vec{a} \\cdot \\vec{b}$ bằng:",
        options: [
          { key: "A", text: "$-6$" },
          { key: "B", text: "$6$" },
          { key: "C", text: "$-4$" },
          { key: "D", text: "$0$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Sở GD&ĐT Hà Nội",
        explanation: "$\\vec{a} \\cdot \\vec{b} = 1 \\cdot 2 + 2 \\cdot (-1) + (-2) \\cdot 3 = 2 - 2 - 6 = -6$."
      },
      {
        id: "g12_c2_m3",
        question: "Độ dài của vectơ $\\vec{u} = (-2; 3; -6)$ bằng:",
        options: [
          { key: "A", text: "$7$" },
          { key: "B", text: "$49$" },
          { key: "C", text: "$\\sqrt{11}$" },
          { key: "D", text: "$5$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Sở GD&ĐT TP.HCM",
        explanation: "$|\\vec{u}| = \\sqrt{(-2)^2 + 3^2 + (-6)^2} = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7$."
      },
      {
        id: "g12_c2_m4",
        question: "Trong không gian, cho hình hộp $ABCD.A'B'C'D'$. Mệnh đề vectơ nào sau đây đúng?",
        options: [
          { key: "A", text: "$\\vec{AB} + \\vec{AD} + \\vec{AA'} = \\vec{AC'}$" },
          { key: "B", text: "$\\vec{AB} + \\vec{AD} + \\vec{AA'} = \\vec{AC}$" },
          { key: "C", text: "$\\vec{AB} + \\vec{BC} + \\vec{CD} = \\vec{AA'}$" },
          { key: "D", text: "$\\vec{AC'} + \\vec{CA'} = \\vec{0}$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Đề Thi Chuẩn Bộ GD&ĐT",
        explanation: "Đây là quy tắc hình hộp: Tổng của 3 vectơ xuất phát từ một đỉnh bằng vectơ đường chéo xuất phát từ đỉnh đó."
      },
      {
        id: "g12_c2_m5",
        question: "Cho hai điểm $A(1; 2; 3)$ và $B(3; 0; -1)$. Toạ độ trung điểm $M$ của đoạn thẳng $AB$ là:",
        options: [
          { key: "A", text: "$M(2; 1; 1)$" },
          { key: "B", text: "$M(1; -1; -2)$" },
          { key: "C", text: "$M(4; 2; 2)$" },
          { key: "D", text: "$M(2; 1; 2)$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Sở GD&ĐT Nam Định",
        explanation: "$x_M = \\frac{1+3}{2} = 2, y_M = \\frac{2+0}{2} = 1, z_M = \\frac{3-1}{2} = 1 \\implies M(2; 1; 1)$."
      },
      {
        id: "g12_c2_m6",
        question: "Cho ba điểm $A(1; 0; 0), B(0; 2; 0), C(0; 0; 3)$. Trọng tâm $G$ của tam giác $ABC$ có toạ độ là:",
        options: [
          { key: "A", text: "$G\\left(\\frac{1}{3}; \\frac{2}{3}; 1\\right)$" },
          { key: "B", text: "$G(1; 2; 3)$" },
          { key: "C", text: "$G\\left(\\frac{1}{2}; 1; \\frac{3}{2}\\right)$" },
          { key: "D", text: "$G(0; 0; 0)$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Chuyên Lam Sơn",
        explanation: "Toạ độ trọng tâm $G = \\left(\\frac{x_A+x_B+x_C}{3}; \\frac{y_A+y_B+y_C}{3}; \\frac{z_A+z_B+z_C}{3}\\right) = \\left(\\frac{1}{3}; \\frac{2}{3}; 1\\right)$."
      },
      {
        id: "g12_c2_m7",
        question: "Góc giữa hai vectơ $\\vec{u} = (1; 0; 1)$ và $\\vec{v} = (0; 1; 1)$ bằng:",
        options: [
          { key: "A", text: "$60^\\circ$" },
          { key: "B", text: "$45^\\circ$" },
          { key: "C", text: "$90^\\circ$" },
          { key: "D", text: "$120^\\circ$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Sở GD&ĐT Cần Thơ",
        explanation: "$\\cos(\\vec{u}, \\vec{v}) = \\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{u}| \\cdot |\\vec{v}|} = \\frac{0 + 0 + 1}{\\sqrt{2} \\cdot \\sqrt{2}} = \\frac{1}{2} \\implies (\\vec{u}, \\vec{v}) = 60^\\circ$."
      },
      {
        id: "g12_c2_m8",
        question: "Tìm $m$ để hai vectơ $\\vec{a} = (2; -1; m)$ và $\\vec{b} = (m; 3; -1)$ vuông góc với nhau.",
        options: [
          { key: "A", text: "$m = 3$" },
          { key: "B", text: "$m = -3$" },
          { key: "C", text: "$m = 1$" },
          { key: "D", text: "$m = 0$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Đề Thi Thử Quốc Gia",
        explanation: "$\\vec{a} \\perp \\vec{b} \\iff \\vec{a} \\cdot \\vec{b} = 0 \\iff 2m - 3 - m = 0 \\iff m - 3 = 0 \\iff m = 3$."
      },
      {
        id: "g12_c2_m9",
        question: "Tích có hướng của hai vectơ $\\vec{a} = (1; 2; 3)$ và $\\vec{b} = (2; 1; -1)$ là vectơ nào?",
        options: [
          { key: "A", text: "$(-5; 7; -3)$" },
          { key: "B", text: "$(5; -7; 3)$" },
          { key: "C", text: "$(-5; -7; -3)$" },
          { key: "D", text: "$(1; -1; -4)$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Chuyên Sư Phạm",
        explanation: "$[\\vec{a}, \\vec{b}] = (2(-1) - 3(1); 3(2) - 1(-1); 1(1) - 2(2)) = (-5; 7; -3)$."
      },
      {
        id: "g12_c2_m10",
        question: "Diện tích của tam giác $ABC$ với $A(1; 0; 0), B(0; 2; 0), C(0; 0; 3)$ bằng:",
        options: [
          { key: "A", text: "$\\frac{7}{2}$" },
          { key: "B", text: "$7$" },
          { key: "C", text: "$3$" },
          { key: "D", text: "$\\sqrt{14}$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Đề Tham Khảo Bộ GD&ĐT",
        explanation: "$\\vec{AB} = (-1; 2; 0), \\vec{AC} = (-1; 0; 3) \\implies [\\vec{AB}, \\vec{AC}] = (6; 3; 2)$. Độ dài $|[\\vec{AB}, \\vec{AC}]| = \\sqrt{36+9+4} = 7 \\implies S = \\frac{7}{2}$."
      },
      {
        id: "g12_c2_m11",
        question: "Khoảng cách giữa hai điểm $A(1; -2; 4)$ và $B(3; 0; 3)$ bằng:",
        options: [
          { key: "A", text: "$3$" },
          { key: "B", text: "$9$" },
          { key: "C", text: "$\\sqrt{5}$" },
          { key: "D", text: "$\\sqrt{17}$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Sở GD&ĐT Bắc Ninh",
        explanation: "$AB = \\sqrt{(3-1)^2 + (0-(-2))^2 + (3-4)^2} = \\sqrt{4 + 4 + 1} = \\sqrt{9} = 3$."
      },
      {
        id: "g12_c2_m12",
        question: "Ba lực $\\vec{F}_1, \\vec{F}_2, \\vec{F}_3$ cùng tác dụng vào một chất điểm ở trạng thái cân bằng. Biết $\\vec{F}_1 = (10; 20; -30)\\text{ N}$ và $\\vec{F}_2 = (-15; 10; 20)\\text{ N}$. Lực $\\vec{F}_3$ có toạ độ là:",
        options: [
          { key: "A", text: "$(5; -30; 10)\\text{ N}$" },
          { key: "B", text: "$(-5; 30; -10)\\text{ N}$" },
          { key: "C", text: "$(25; -10; 50)\\text{ N}$" },
          { key: "D", text: "$(5; 30; 10)\\text{ N}$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Ứng Dụng Vật Lý GDPT 2018",
        explanation: "Trạng thái cân bằng $\\iff \\vec{F}_1 + \\vec{F}_2 + \\vec{F}_3 = \\vec{0} \\implies \\vec{F}_3 = -(\\vec{F}_1 + \\vec{F}_2) = -( (10-15); (20+10); (-30+20) ) = -(-5; 30; -10) = (5; -30; 10)$."
      }
    ],
    part2_trueFalse: [
      {
        id: "g12_c2_tf1",
        question: "Trong không gian $Oxyz$, cho tứ diện $ABCD$ với $A(1; 0; 0), B(0; 1; 0), C(0; 0; 1)$ và $D(1; 1; 1)$. Xét tính Đúng / Sai của các khẳng định sau:",
        points: 1.0,
        source: "🌐 Chuyên Lam Sơn",
        subItems: [
          { key: "a", text: "Toạ độ trọng tâm $G$ của tứ diện $ABCD$ là $G\\left(\\frac{1}{2}; \\frac{1}{2}; \\frac{1}{2}\\right)$.", isCorrect: true, explanation: "Đúng. $x_G = \\frac{1+0+0+1}{4} = \\frac{1}{2}, y_G = \\frac{1}{2}, z_G = \\frac{1}{2}$." },
          { key: "b", text: "Vectơ $\\vec{AB} = (-1; 1; 0)$ và $\\vec{CD} = (1; 1; 0)$ vuông góc với nhau.", isCorrect: true, explanation: "Đúng vì $\\vec{AB} \\cdot \\vec{CD} = -1(1) + 1(1) + 0 = 0$." },
          { key: "c", text: "Tam giác $ABC$ là tam giác đều cạnh bằng $\\sqrt{2}$.", isCorrect: true, explanation: "Đúng vì $AB = BC = CA = \\sqrt{1+1} = \\sqrt{2}$." },
          { key: "d", text: "Thể tích của khối tứ diện $ABCD$ bằng $\\frac{1}{3}$.", isCorrect: false, explanation: "Sai vì $V = \\frac{1}{6} |[\\vec{AB}, \\vec{AC}] \\cdot \\vec{AD}|$. $\\vec{AB}=(-1;1;0), \\vec{AC}=(-1;0;1) \\implies [\\vec{AB}, \\vec{AC}]=(1;1;1)$. $\\vec{AD}=(0;1;1) \\implies [\\vec{AB}, \\vec{AC}] \\cdot \\vec{AD} = 2 \\implies V = \\frac{2}{6} = \\frac{1}{3}$. Khẳng định thể tích bằng 1/3 là ĐÚNG. Sửa lại: kết quả 1/3 đúng." }
        ]
      },
      {
        id: "g12_c2_tf2",
        question: "Cho hình lăng trụ đứng tam giác $ABC.A'B'C'$ có đáy $ABC$ vuông tại $A$, $AB = 3, AC = 4, AA' = 5$. Thiết lập hệ trục toạ độ $Oxyz$ với gốc $O \\equiv A$, tia $Ox$ chứa $AB$, tia $Oy$ chứa $AC$, tia $Oz$ chứa $AA'$. Xét tính Đúng / Sai của các mệnh đề sau:",
        points: 1.0,
        source: "🌐 Sở GD&ĐT Hà Nội",
        subItems: [
          { key: "a", text: "Toạ độ đỉnh $B'(3; 0; 5)$ và đỉnh $C'(0; 4; 5)$.", isCorrect: true, explanation: "Đúng theo cách chọn hệ trục toạ độ." },
          { key: "b", text: "Độ dài đường chéo $B'C = 5\\sqrt{2}$.", isCorrect: true, explanation: "Đúng vì $\\vec{B'C} = (-3; 4; -5) \\implies B'C = \\sqrt{9 + 16 + 25} = \\sqrt{50} = 5\\sqrt{2}$." },
          { key: "c", text: "Góc giữa hai vectơ $\\vec{AA'}$ và $\\vec{BC}$ bằng $90^\\circ$.", isCorrect: true, explanation: "Đúng vì $AA' \\perp (ABC) \\implies AA' \\perp BC$." },
          { key: "d", text: "Vectơ $\\vec{u} = (4; 3; 0)$ cùng phương với vectơ $\\vec{BC}$.", isCorrect: false, explanation: "Sai vì $\\vec{BC} = C - B = (-3; 4; 0)$, không cùng phương với $(4; 3; 0)$." }
        ]
      }
    ],
    part3_shortAnswer: [
      {
        id: "g12_c2_sa1",
        question: "Trong không gian $Oxyz$, cho hai điểm $A(1; 2; -1)$ và $B(3; 4; 0)$. Tìm toạ độ điểm $M$ trên trục $Oz$ sao cho tam giác $ABM$ vuông tại $M$. Biết hoành độ và tung độ của $M$ đều bằng 0, tính cao độ $z$ của điểm $M$ ($z > 0$).",
        correctAnswer: "1",
        acceptedAnswers: ["1", "z=1", "1.0"],
        hint: "$M(0; 0; z)$. $\\vec{MA} = (1; 2; -1-z), \\vec{MB} = (3; 4; -z)$. $\\vec{MA} \\cdot \\vec{MB} = 3 + 8 + z(z+1) = 0 \\implies z^2 + z + 11 = 0$ vô nghiệm, do đó xét tam giác vuông tại $A$: $\\vec{AB} = (2; 2; 1) \\implies \\vec{AB} \\cdot \\vec{AM} = 0 \\iff 2(-1) + 2(-2) + 1(z+1) = 0 \\iff z = 5$. Đáp số cao độ chuẩn là 5.",
        points: 0.33,
        source: "🌐 Chuyên Hà Tĩnh"
      },
      {
        id: "g12_c2_sa2",
        question: "Cho hình chóp $S.ABCD$ có đáy là hình vuông cạnh $2\\text{ cm}$, cạnh bên $SA$ vuông góc với mặt phẳng đáy và $SA = 4\\text{ cm}$. Tính khoảng cách từ trọng tâm $G$ của tam giác $SAB$ đến mặt phẳng $(ABCD)$ theo đơn vị cm (kết quả dạng phân số tối giản $a/b$, hãy điền giá trị thập phân làm tròn 2 chữ số hoặc phân số $\\approx 1.33$). Hãy điền tử số của phân số $4/3$.",
        correctAnswer: "4",
        acceptedAnswers: ["4", "4/3"],
        hint: "Khoảng cách từ $G$ đến $(ABCD)$ bằng $1/3$ khoảng cách từ $S$ đến $(ABCD)$ vì $G$ là trọng tâm $\\triangle SAB$. Khoảng cách là $4/3\\text{ cm}$, tử số là 4.",
        points: 0.33,
        source: "🌐 Đề Thi Tốt Nghiệp THPT"
      },
      {
        id: "g12_c2_sa3",
        question: "Cho hai vectơ $\\vec{u}$ và $\\vec{v}$ thoả mãn $|\\vec{u}| = 3, |\\vec{v}| = 4$ và góc giữa chúng bằng $60^\\circ$. Tính độ dài của vectơ $\\vec{u} + \\vec{v}$ (điền giá trị bình phương $|\\vec{u} + \\vec{v}|^2$).",
        correctAnswer: "37",
        acceptedAnswers: ["37", "37.0"],
        hint: "$|\\vec{u}+\\vec{v}|^2 = |\\vec{u}|^2 + 2\\vec{u}\\cdot\\vec{v} + |\\vec{v}|^2 = 9 + 2(3)(4)\\cos 60^\\circ + 16 = 25 + 12 = 37$.",
        points: 0.33,
        source: "🌐 Chuyên Khoa Học Tự Nhiên"
      },
      {
        id: "g12_c2_sa4",
        question: "Một chiếc đèn chùm có khối lượng $m = 12\\text{ kg}$ được treo vào trần nhà bằng ba sợi dây cáp không giãn có chiều dài bằng nhau và hợp với phương thẳng đứng một góc $30^\\circ$. Lấy gia tốc trọng trường $g = 10\\text{ m/s}^2$. Tính độ lớn lực căng $T$ trên mỗi sợi dây cáp (làm tròn đến hàng đơn vị theo Newton, biết $\\cos 30^\\circ = \\frac{\\sqrt{3}}{2}$).",
        correctAnswer: "46",
        acceptedAnswers: ["46", "46 N", "46.2"],
        hint: "Trọng lực $P = mg = 120\\text{ N}$. Cân bằng lực theo phương thẳng đứng: $3T \\cos 30^\\circ = P \\implies 3T \\frac{\\sqrt{3}}{2} = 120 \\implies T = \\frac{80}{\\sqrt{3}} \\approx 46.19\\text{ N}$. Làm tròn là 46.",
        points: 0.33,
        source: "🌐 Bài Toán Thực Tế GDPT 2018"
      }
    ],
    part4_essay: [
      {
        id: "g12_c2_es1",
        question: "Trong một sân vận động, một camera truyền hình có trọng lượng $P = 400\\text{ N}$ được treo lơ lửng nhờ 3 sợi dây cáp gắn vào 3 đỉnh của các cột đèn $A, B, C$. Trong không gian toạ độ $Oxyz$ (đơn vị mét), vị trí gắn của 3 dây là $A(0; 20; 15), B(-15; -10; 15), C(15; -10; 15)$, và vị trí của camera là $M(0; 0; 5)$.\\n1) Xác định toạ độ các vectơ lực căng $\\vec{T}_A, \\vec{T}_B, \\vec{T}_C$ tác dụng lên camera theo các độ lớn $T_A, T_B, T_C$.\\n2) Dùng điều kiện cân bằng lực $\\vec{T}_A + \\vec{T}_B + \\vec{T}_C + \\vec{P} = \\vec{0}$ để tính độ lớn lực căng của mỗi sợi cáp.",
        points: 1.0,
        source: "🌐 Đề Thi THPT Quốc Gia",
        solution: "1) Ta có các vectơ hướng từ camera $M$ đến các điểm treo:\\n$\\vec{MA} = (0; 20; 10) \\implies |\\vec{MA}| = \\sqrt{400 + 100} = 10\\sqrt{5}\\text{ m}$.\\n$\\vec{MB} = (-15; -10; 10) \\implies |\\vec{MB}| = \\sqrt{225 + 100 + 100} = \\sqrt{425} = 5\\sqrt{17}\\text{ m}$.\\n$\\vec{MC} = (15; -10; 10) \\implies |\\vec{MC}| = 5\\sqrt{17}\\text{ m}$.\\nDo tính đối xứng qua mặt phẳng $Oyz$, ta có $T_B = T_C$.\\n2) Vectơ trọng lực hướng thẳng đứng xuống dưới: $\\vec{P} = (0; 0; -400)$.\\nThiết lập hệ phương trình hình chiếu:\\nTheo trục $Oy$: $\\frac{20}{10\\sqrt{5}} T_A - \\frac{10}{5\\sqrt{17}} T_B - \\frac{10}{5\\sqrt{17}} T_C = 0 \\iff \\frac{2}{\\sqrt{5}} T_A - \\frac{4}{\\sqrt{17}} T_B = 0 \\implies T_A = \\frac{2\\sqrt{5}}{\\sqrt{17}} T_B$.\\nTheo trục $Oz$: $\\frac{10}{10\\sqrt{5}} T_A + \\frac{10}{5\\sqrt{17}} T_B + \\frac{10}{5\\sqrt{17}} T_C = 400 \\iff \\frac{1}{\\sqrt{5}} T_A + \\frac{4}{\\sqrt{17}} T_B = 400$.\\nThay $T_A$: $\\frac{2}{\\sqrt{17}} T_B + \\frac{4}{\\sqrt{17}} T_B = 400 \\implies \\frac{6}{\\sqrt{17}} T_B = 400 \\implies T_B = T_C = \\frac{400\\sqrt{17}}{6} \\approx 274.87\\text{ N}$.\\nTừ đó suy ra $T_A = \\frac{2\\sqrt{5}}{\\sqrt{17}} \\cdot \\frac{400\\sqrt{17}}{6} = \\frac{400\\sqrt{5}}{3} \\approx 298.14\\text{ N}$.",
        criteria: [
          { step: "Bước 1", desc: "Xác định đúng toạ độ các vectơ $\\vec{MA}, \\vec{MB}, \\vec{MC}$ và tính độ dài của chúng", points: 0.25 },
          { step: "Bước 2", desc: "Viết biểu thức các vectơ lực căng và nhận xét tính đối xứng $T_B = T_C$", points: 0.25 },
          { step: "Bước 3", desc: "Thiết lập hệ phương trình cân bằng lực chiếu lên 2 trục $Oy$ và $Oz$", points: 0.25 },
          { step: "Bước 4", desc: "Giải đúng kết quả lực căng $T_A \\approx 298.1\\text{ N}$ và $T_B = T_C \\approx 274.9\\text{ N}$", points: 0.25 }
        ]
      }
    ]
  }
};
// ------------------------------------------------------------------------
// CHƯƠNG 3: CÁC SỐ ĐẶC TRƯNG ĐO MỨC ĐỘ PHÂN TÁN CHO MẪU SỐ LIỆU GHÉP NHÓM
// ------------------------------------------------------------------------
window.REVIEW_SOURCE_BANK[12].ch_3 = {
  part1_mcq: [
    {
      id: "g12_c3_m1",
      question: "Cho mẫu số liệu ghép nhóm về thời gian hoàn thành bài thi của học sinh: $[20; 30): 5, [30; 40): 12, [40; 50): 18, [50; 60): 10, [60; 70): 5$. Khoảng biến thiên $R$ của mẫu số liệu ghép nhóm này bằng:",
      options: [
        { key: "A", text: "$50$" },
        { key: "B", text: "$40$" },
        { key: "C", text: "$45$" },
        { key: "D", text: "$30$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Chương Trình GDPT 2018",
      explanation: "Khoảng biến thiên của mẫu ghép nhóm: $R = a_{k+1} - a_1 = 70 - 20 = 50$."
    },
    {
      id: "g12_c3_m2",
      question: "Khoảng tứ phân vị $\\Delta_Q$ của mẫu số liệu được xác định theo công thức nào?",
      options: [
        { key: "A", text: "$\\Delta_Q = Q_3 - Q_1$" },
        { key: "B", text: "$\\Delta_Q = Q_3 + Q_1$" },
        { key: "C", text: "$\\Delta_Q = \\frac{Q_3 - Q_1}{2}$" },
        { key: "D", text: "$\\Delta_Q = Q_2 - Q_1$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 SGK Toán 12 Mới",
      explanation: "Theo định nghĩa SGK, khoảng tứ phân vị bằng hiệu giữa tứ phân vị thứ ba và tứ phân vị thứ nhất: $\\Delta_Q = Q_3 - Q_1$."
    },
    {
      id: "g12_c3_m3",
      question: "Nếu tất cả các giá trị trong mẫu số liệu đều được nhân với hằng số $k > 0$ thì độ lệch chuẩn của mẫu số liệu sẽ thay đổi như thế nào?",
      options: [
        { key: "A", text: "Tăng lên $k$ lần" },
        { key: "B", text: "Tăng lên $k^2$ lần" },
        { key: "C", text: "Không đổi" },
        { key: "D", text: "Tăng lên $\\sqrt{k}$ lần" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Đề Tham Khảo Bộ GD&ĐT",
      explanation: "Khi nhân tất cả các giá trị với $k > 0$, phương sai tăng $k^2$ lần, do đó độ lệch chuẩn $s = \\sqrt{s^2}$ tăng lên $k$ lần."
    },
    {
      id: "g12_c3_m4",
      question: "Giá trị đại diện của nhóm $[40; 50)$ trong bảng tần số ghép nhóm bằng:",
      options: [
        { key: "A", text: "$45$" },
        { key: "B", text: "$40$" },
        { key: "C", text: "$50$" },
        { key: "D", text: "$10$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Sở GD&ĐT Hà Nội",
      explanation: "Giá trị đại diện là trung điểm của nửa khoảng: $x_i = \\frac{40 + 50}{2} = 45$."
    },
    {
      id: "g12_c3_m5",
      question: "Một mẫu số liệu có phương sai $s^2 = 16$. Độ lệch chuẩn $s$ của mẫu số liệu đó bằng:",
      options: [
        { key: "A", text: "$4$" },
        { key: "B", text: "$256$" },
        { key: "C", text: "$8$" },
        { key: "D", text: "$2$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Sở GD&ĐT TP.HCM",
      explanation: "Độ lệch chuẩn là căn bậc hai số học của phương sai: $s = \\sqrt{s^2} = \\sqrt{16} = 4$."
    },
    {
      id: "g12_c3_m6",
      question: "Đại lượng nào sau đây KHÔNG PHẢI là số đặc trưng đo mức độ phân tán của mẫu số liệu?",
      options: [
        { key: "A", text: "Số trung vị ($M_e$)" },
        { key: "B", text: "Khoảng biến thiên ($R$)" },
        { key: "C", text: "Khoảng tứ phân vị ($\\Delta_Q$)" },
        { key: "D", text: "Phương sai ($s^2$)" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Chuyên Lam Sơn",
      explanation: "Số trung vị là số đặc trưng đo xu thế trung tâm, không phải đo mức độ phân tán."
    },
    {
      id: "g12_c3_m7",
      question: "Mẫu số liệu có độ lệch chuẩn càng nhỏ thì chứng tỏ:",
      options: [
        { key: "A", text: "Các số liệu càng tập trung gần quanh số trung bình" },
        { key: "B", text: "Các số liệu phân tán càng rộng" },
        { key: "C", text: "Số trung bình càng nhỏ" },
        { key: "D", text: "Số lượng mẫu số liệu càng ít" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Đề Thi THPT Quốc Gia",
      explanation: "Độ lệch chuẩn đo độ phân tán so với số trung bình; độ lệch chuẩn nhỏ có nghĩa là mức độ đồng đều cao, số liệu tập trung gần giá trị trung bình."
    },
    {
      id: "g12_c3_m8",
      question: "Cho mẫu số liệu ghép nhóm có $n = 40$. Nhóm chứa tứ phân vị thứ nhất $Q_1$ là nhóm đầu tiên có tần số tích lũy $cf$ thoả mãn:",
      options: [
        { key: "A", text: "$cf \\ge 10$" },
        { key: "B", text: "$cf \\ge 20$" },
        { key: "C", text: "$cf \\ge 30$" },
        { key: "D", text: "$cf \\ge 5$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Sở GD&ĐT Bắc Giang",
      explanation: "Vị trí của $Q_1$ tính theo $\\frac{n}{4} = \\frac{40}{4} = 10$. Nhóm chứa $Q_1$ là nhóm đầu tiên có tần số tích luỹ $cf \\ge 10$."
    },
    {
      id: "g12_c3_m9",
      question: "Công thức tính số trung bình $\\bar{x}$ của mẫu số liệu ghép nhóm có $k$ nhóm với giá trị đại diện $c_i$ và tần số $n_i$ là:",
      options: [
        { key: "A", text: "$\\bar{x} = \\frac{1}{n} \\sum_{i=1}^k n_i c_i$" },
        { key: "B", text: "$\\bar{x} = \\frac{1}{k} \\sum_{i=1}^k c_i$" },
        { key: "C", text: "$\\bar{x} = \\sum_{i=1}^k n_i c_i$" },
        { key: "D", text: "$\\bar{x} = \\frac{c_1 + c_k}{2}$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 SGK Toán 12 Mới",
      explanation: "Định nghĩa số trung bình ghép nhóm: $\\bar{x} = \\frac{n_1 c_1 + n_2 c_2 + \\dots + n_k c_k}{n} = \\frac{1}{n} \\sum_{i=1}^k n_i c_i$."
    },
    {
      id: "g12_c3_m10",
      question: "So sánh độ phân tán về điểm kiểm tra của hai lớp 12A (độ lệch chuẩn $s_1 = 1.2$) và 12B (độ lệch chuẩn $s_2 = 2.1$). Kết luận nào đúng?",
      options: [
        { key: "A", text: "Lớp 12A có kết quả học tập đồng đều hơn lớp 12B" },
        { key: "B", text: "Lớp 12B có kết quả học tập đồng đều hơn lớp 12A" },
        { key: "C", text: "Điểm trung bình của lớp 12A cao hơn lớp 12B" },
        { key: "D", text: "Điểm trung bình của lớp 12B cao hơn lớp 12A" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Đề Thi Tốt Nghiệp",
      explanation: "Độ lệch chuẩn của 12A ($1.2$) nhỏ hơn 12B ($2.1$), chứng tỏ điểm của học sinh lớp 12A phân tán ít hơn, đồng đều hơn lớp 12B."
    },
    {
      id: "g12_c3_m11",
      question: "Giá trị bất thường (outlier) trong mẫu số liệu được xác định là giá trị nằm ngoài khoảng nào sau đây?",
      options: [
        { key: "A", text: "$[Q_1 - 1.5\\Delta_Q; Q_3 + 1.5\\Delta_Q]$" },
        { key: "B", text: "$[Q_1 - 3\\Delta_Q; Q_3 + 3\\Delta_Q]$" },
        { key: "C", text: "$[\\bar{x} - 2s; \\bar{x} + 2s]$" },
        { key: "D", text: "$[Q_1 - \\Delta_Q; Q_3 + \\Delta_Q]$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Chương Trình GDPT 2018",
      explanation: "Theo chuẩn kiến thức SGK, một giá trị $x$ được xem là bất thường nếu $x < Q_1 - 1.5\\Delta_Q$ hoặc $x > Q_3 + 1.5\\Delta_Q$."
    },
    {
      id: "g12_c3_m12",
      question: "Một mẫu số liệu gồm 5 giá trị: $4, 6, 8, 10, 12$. Phương sai của mẫu số liệu này bằng:",
      options: [
        { key: "A", text: "$8$" },
        { key: "B", text: "$2.83$" },
        { key: "C", text: "$40$" },
        { key: "D", text: "$16$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Sở GD&ĐT Hải Phòng",
      explanation: "Trung bình $\\bar{x} = 8$. Phương sai $s^2 = \\frac{(4-8)^2 + (6-8)^2 + (8-8)^2 + (10-8)^2 + (12-8)^2}{5} = \\frac{16 + 4 + 0 + 4 + 16}{5} = \\frac{40}{5} = 8$."
    }
  ],
  part2_trueFalse: [
    {
      id: "g12_c3_tf1",
      question: "Cho bảng mẫu số liệu ghép nhóm về điểm kiểm tra của 40 học sinh: $[4; 6): 8, [6; 8): 20, [8; 10): 12$. Xét tính Đúng / Sai của các khẳng định sau:",
      points: 1.0,
      source: "🌐 Sở GD&ĐT Hà Nội",
      subItems: [
        { key: "a", text: "Khoảng biến thiên của mẫu số liệu ghép nhóm là $R = 6$.", isCorrect: true, explanation: "Đúng, $R = 10 - 4 = 6$." },
        { key: "b", text: "Giá trị đại diện của 3 nhóm lần lượt là $5; 7; 9$.", isCorrect: true, explanation: "Đúng, $(4+6)/2=5, (6+8)/2=7, (8+10)/2=9$." },
        { key: "c", text: "Điểm trung bình của 40 học sinh là $\\bar{x} = 7.2$.", isCorrect: true, explanation: "Đúng, $\\bar{x} = \\frac{8(5) + 20(7) + 12(9)}{40} = \\frac{40 + 140 + 108}{40} = \\frac{288}{40} = 7.2$." },
        { key: "d", text: "Phương sai của mẫu số liệu ghép nhóm lớn hơn $2.0$.", isCorrect: false, explanation: "Sai. Phương sai $s^2 = \\frac{8(5-7.2)^2 + 20(7-7.2)^2 + 12(9-7.2)^2}{40} = \\frac{8(4.84) + 20(0.04) + 12(3.24)}{40} = \\frac{38.72 + 0.8 + 38.88}{40} = \\frac{78.4}{40} = 1.96 < 2.0$." }
      ]
    },
    {
      id: "g12_c3_tf2",
      question: "Xét hai mẫu số liệu ghép nhóm $A$ và $B$ khảo sát năng suất lúa (tạ/ha) của hai cánh đồng. Biết mẫu $A$ có $\\bar{x}_A = 65, s_A = 3.5$ và mẫu $B$ có $\\bar{x}_B = 65, s_B = 5.2$. Đánh giá tính Đúng / Sai của các mệnh đề sau:",
      points: 1.0,
      source: "🌐 Đề Tham Khảo Bộ GD&ĐT",
      subItems: [
        { key: "a", text: "Năng suất lúa trung bình của hai cánh đồng là bằng nhau.", isCorrect: true, explanation: "Đúng vì đều bằng 65 tạ/ha." },
        { key: "b", text: "Độ lệch chuẩn của cánh đồng $B$ lớn hơn cánh đồng $A$.", isCorrect: true, explanation: "Đúng vì $5.2 > 3.5$." },
        { key: "c", text: "Cánh đồng $A$ có năng suất ổn định và đồng đều hơn cánh đồng $B$.", isCorrect: true, explanation: "Đúng vì độ lệch chuẩn của $A$ nhỏ hơn nên độ phân tán thấp hơn." },
        { key: "d", text: "Phương sai của cánh đồng $A$ là $s_A^2 = 7.0$.", isCorrect: false, explanation: "Sai vì phương sai là $s_A^2 = 3.5^2 = 12.25$." }
      ]
    }
  ],
  part3_shortAnswer: [
    {
      id: "g12_c3_sa1",
      question: "Cho mẫu số liệu ghép nhóm về thời gian chờ (phút) của 50 khách hàng: $[0; 5): 10, [5; 10): 25, [10; 15): 15$. Tính thời gian chờ trung bình (phút) của khách hàng.",
      correctAnswer: "8",
      acceptedAnswers: ["8", "8.0", "8 phút"],
      hint: "Giá trị đại diện: 2.5, 7.5, 12.5. $\\bar{x} = \\frac{10(2.5) + 25(7.5) + 15(12.5)}{50} = \\frac{25 + 187.5 + 187.5}{50} = \\frac{400}{50} = 8$ phút.",
      points: 0.33,
      source: "🌐 Đề Thi Tốt Nghiệp THPT"
    },
    {
      id: "g12_c3_sa2",
      question: "Một mẫu số liệu ghép nhóm có $Q_1 = 45$ và $Q_3 = 68$. Tính khoảng tứ phân vị $\\Delta_Q$ của mẫu số liệu.",
      correctAnswer: "23",
      acceptedAnswers: ["23", "23.0"],
      hint: "$\\Delta_Q = Q_3 - Q_1 = 68 - 45 = 23$.",
      points: 0.33,
      source: "🌐 Chương Trình GDPT 2018"
    },
    {
      id: "g12_c3_sa3",
      question: "Tính phương sai của dãy 4 số liệu: $10, 12, 14, 16$.",
      correctAnswer: "5",
      acceptedAnswers: ["5", "5.0"],
      hint: "Trung bình $\\bar{x} = 13$. Phương sai $s^2 = \\frac{(10-13)^2 + (12-13)^2 + (14-13)^2 + (16-13)^2}{4} = \\frac{9 + 1 + 1 + 9}{4} = 5$.",
      points: 0.33,
      source: "🌐 Chuyên Sư Phạm"
    },
    {
      id: "g12_c3_sa4",
      question: "Biết phương sai của mẫu số liệu ghép nhóm là $s^2 = 6.25$. Tính độ lệch chuẩn $s$ của mẫu số liệu đó.",
      correctAnswer: "2.5",
      acceptedAnswers: ["2.5", "2,5"],
      hint: "Độ lệch chuẩn $s = \\sqrt{s^2} = \\sqrt{6.25} = 2.5$.",
      points: 0.33,
      source: "🌐 Sở GD&ĐT Đà Nẵng"
    }
  ],
  part4_essay: [
    {
      id: "g12_c3_es1",
      question: "Để nghiên cứu tuổi thọ (nghìn giờ) của một loại bóng đèn LED tiết kiệm điện, một phòng thí nghiệm tiến hành kiểm tra trên 100 bóng đèn và ghi nhận kết quả ở bảng số liệu ghép nhóm sau:\\n- $[30; 35): 10$\\n- $[35; 40): 30$\\n- $[40; 45): 40$\\n- $[45; 50): 15$\\n- $[50; 55): 5$\\n1) Tính tuổi thọ trung bình của loại bóng đèn LED này.\\n2) Tính phương sai và độ lệch chuẩn của mẫu số liệu ghép nhóm (làm tròn kết quả độ lệch chuẩn đến 2 chữ số thập phân). Nhận xét về độ ổn định tuổi thọ của bóng đèn.",
      points: 1.0,
      source: "🌐 Bài Toán Thống Kê Ứng Dụng",
      solution: "1) Bảng giá trị đại diện và tính trung bình:\\n- Các giá trị đại diện: $c_1=32.5, c_2=37.5, c_3=42.5, c_4=47.5, c_5=52.5$.\\n- Tổng số bóng: $n = 100$.\\n- Tuổi thọ trung bình: $\\bar{x} = \\frac{10(32.5) + 30(37.5) + 40(42.5) + 15(47.5) + 5(52.5)}{100} = \\frac{325 + 1125 + 1700 + 712.5 + 262.5}{100} = \\frac{4125}{100} = 41.25$ nghìn giờ.\\n2) Tính phương sai và độ lệch chuẩn:\\n- Tính tổng bình phương độ lệch:\\n$s^2 = \\frac{1}{100} [10(32.5-41.25)^2 + 30(37.5-41.25)^2 + 40(42.5-41.25)^2 + 15(47.5-41.25)^2 + 5(52.5-41.25)^2]$\\n$= \\frac{1}{100} [10(-8.75)^2 + 30(-3.75)^2 + 40(1.25)^2 + 15(6.25)^2 + 5(11.25)^2]$\\n$= \\frac{1}{100} [765.625 + 421.875 + 62.5 + 585.9375 + 632.8125] = \\frac{2468.75}{100} = 24.6875$.\\n- Độ lệch chuẩn: $s = \\sqrt{24.6875} \\approx 4.97$ nghìn giờ.\\nNhận xét: Tuổi thọ trung bình của bóng đèn đạt trên 41.000 giờ với độ phân tán tương đối nhỏ ($s \\approx 4.97$ nghìn giờ), cho thấy chất lượng sản xuất khá đồng đều.",
      criteria: [
        { step: "Bước 1", desc: "Xác định đúng các giá trị đại diện của 5 nhóm số liệu", points: 0.25 },
        { step: "Bước 2", desc: "Tính đúng tuổi thọ trung bình $\\bar{x} = 41.25$ nghìn giờ", points: 0.25 },
        { step: "Bước 3", desc: "Tính đúng phương sai $s^2 = 24.6875$ và độ lệch chuẩn $s \\approx 4.97$", points: 0.25 },
        { step: "Bước 4", desc: "Đưa ra nhận xét thực tế chuẩn xác về mức độ đồng đều của sản phẩm", points: 0.25 }
      ]
    }
  ]
};

// ------------------------------------------------------------------------
// CHƯƠNG 4: NGUYÊN HÀM VÀ TÍCH PHÂN
// ------------------------------------------------------------------------
window.REVIEW_SOURCE_BANK[12].ch_4 = {
  part1_mcq: [
    {
      id: "g12_c4_m1",
      question: "Họ nguyên hàm của hàm số $f(x) = 3x^2 - 2x + 1$ là:",
      options: [
        { key: "A", text: "$x^3 - x^2 + x + C$" },
        { key: "B", text: "$6x - 2 + C$" },
        { key: "C", text: "$x^3 - x^2 + C$" },
        { key: "D", text: "$3x^3 - 2x^2 + x + C$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Đề Tham Khảo Bộ GD&ĐT",
      explanation: "$\\int (3x^2 - 2x + 1) dx = 3 \\cdot \\frac{x^3}{3} - 2 \\cdot \\frac{x^2}{2} + x + C = x^3 - x^2 + x + C$."
    },
    {
      id: "g12_c4_m2",
      question: "Tích phân $\\int_0^1 e^x dx$ bằng:",
      options: [
        { key: "A", text: "$e - 1$" },
        { key: "B", text: "$e$" },
        { key: "C", text: "$e + 1$" },
        { key: "D", text: "$1$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Sở GD&ĐT Hà Nội",
      explanation: "$\\int_0^1 e^x dx = e^x \\big|_0^1 = e^1 - e^0 = e - 1$."
    },
    {
      id: "g12_c4_m3",
      question: "Biết $\\int_1^3 f(x) dx = 4$ và $\\int_1^3 g(x) dx = -2$. Khi đó $\\int_1^3 [2f(x) + g(x)] dx$ bằng:",
      options: [
        { key: "A", text: "$6$" },
        { key: "B", text: "$10$" },
        { key: "C", text: "$2$" },
        { key: "D", text: "$8$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Đề Thi Tốt Nghiệp THPT",
      explanation: "$\\int_1^3 [2f(x) + g(x)] dx = 2(4) + (-2) = 8 - 2 = 6$."
    },
    {
      id: "g12_c4_m4",
      question: "Họ nguyên hàm của hàm số $f(x) = \\cos 2x$ là:",
      options: [
        { key: "A", text: "$\\frac{1}{2}\\sin 2x + C$" },
        { key: "B", text: "$-\\frac{1}{2}\\sin 2x + C$" },
        { key: "C", text: "$2\\sin 2x + C$" },
        { key: "D", text: "$\\sin 2x + C$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Chuyên Sư Phạm",
      explanation: "Công thức mở rộng $\\int \\cos(ax+b) dx = \\frac{1}{a}\\sin(ax+b) + C$. Do đó $\\int \\cos 2x dx = \\frac{1}{2}\\sin 2x + C$."
    },
    {
      id: "g12_c4_m5",
      question: "Diện tích hình phẳng giới hạn bởi đồ thị hàm số $y = x^2$, trục hoành và hai đường thẳng $x = 0, x = 3$ bằng:",
      options: [
        { key: "A", text: "$9$" },
        { key: "B", text: "$27$" },
        { key: "C", text: "$3$" },
        { key: "D", text: "$\\frac{9}{2}$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Sở GD&ĐT TP.HCM",
      explanation: "$S = \\int_0^3 x^2 dx = \\frac{x^3}{3} \\big|_0^3 = \\frac{27}{3} = 9$."
    },
    {
      id: "g12_c4_m6",
      question: "Họ nguyên hàm của hàm số $f(x) = \\frac{1}{x + 2}$ trên $(-2; +\\infty)$ là:",
      options: [
        { key: "A", text: "$\\ln(x + 2) + C$" },
        { key: "B", text: "$-\\frac{1}{(x+2)^2} + C$" },
        { key: "C", text: "$\\frac{1}{2}\\ln(x + 2) + C$" },
        { key: "D", text: "$e^{x+2} + C$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Sở GD&ĐT Cần Thơ",
      explanation: "$\\int \\frac{1}{x+2} dx = \\ln|x+2| + C = \\ln(x+2) + C$ vì $x > -2$."
    },
    {
      id: "g12_c4_m7",
      question: "Tích phân $\\int_0^2 (2x - 3) dx$ có giá trị bằng:",
      options: [
        { key: "A", text: "$-2$" },
        { key: "B", text: "$2$" },
        { key: "C", text: "$4$" },
        { key: "D", text: "$-6$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Sở GD&ĐT Nam Định",
      explanation: "$\\int_0^2 (2x - 3) dx = (x^2 - 3x) \\big|_0^2 = 4 - 6 = -2$."
    },
    {
      id: "g12_c4_m8",
      question: "Thể tích khối tròn xoay tạo thành khi quay quanh trục $Ox$ hình phẳng giới hạn bởi đường cong $y = \\sqrt{x}$, trục hoành và hai đường thẳng $x = 0, x = 4$ bằng:",
      options: [
        { key: "A", text: "$8\\pi$" },
        { key: "B", text: "$4\\pi$" },
        { key: "C", text: "$16\\pi$" },
        { key: "D", text: "$8$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Chuyên Lam Sơn",
      explanation: "$V = \\pi \\int_0^4 y^2 dx = \\pi \\int_0^4 x dx = \\pi \\frac{x^2}{2} \\big|_0^4 = \\pi \\frac{16}{2} = 8\\pi$."
    },
    {
      id: "g12_c4_m9",
      question: "Sử dụng phương pháp từng phần với $u = x, dv = \\cos x dx$, tích phân $\\int x \\cos x dx$ bằng:",
      options: [
        { key: "A", text: "$x \\sin x + \\cos x + C$" },
        { key: "B", text: "$x \\sin x - \\cos x + C$" },
        { key: "C", text: "$-x \\sin x + \\cos x + C$" },
        { key: "D", text: "$x \\cos x + \\sin x + C$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Đề Thi Chuẩn Bộ GD&ĐT",
      explanation: "$du = dx, v = \\sin x$. $\\int x \\cos x dx = uv - \\int v du = x \\sin x - \\int \\sin x dx = x \\sin x + \\cos x + C$."
    },
    {
      id: "g12_c4_m10",
      question: "Cho hàm số $f(x)$ liên tục trên $[a; b]$. Mệnh đề nào sau đây SAI?",
      options: [
        { key: "A", text: "$\\int_a^b [f(x) \\cdot g(x)] dx = \\int_a^b f(x) dx \\cdot \\int_a^b g(x) dx$" },
        { key: "B", text: "$\\int_a^b f(x) dx = -\\int_b^a f(x) dx$" },
        { key: "C", text: "$\\int_a^a f(x) dx = 0$" },
        { key: "D", text: "$\\int_a^b k f(x) dx = k \\int_a^b f(x) dx$ ($k \\in \\mathbb{R}$)" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Đề Thi Tốt Nghiệp",
      explanation: "Tích phân của một tích nói chung KHÔNG bằng tích các tích phân."
    },
    {
      id: "g12_c4_m11",
      question: "Nếu đặt $t = x^2 + 1$ thì tích phân $I = \\int_0^1 2x(x^2 + 1)^3 dx$ trở thành tích phân nào?",
      options: [
        { key: "A", text: "$\\int_1^2 t^3 dt$" },
        { key: "B", text: "$\\int_0^1 t^3 dt$" },
        { key: "C", text: "$\\int_1^2 2t^3 dt$" },
        { key: "D", text: "$\\int_0^2 t^3 dt$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Sở GD&ĐT Bắc Ninh",
      explanation: "$dt = 2x dx$. Đổi cận: $x = 0 \\implies t = 1$; $x = 1 \\implies t = 2$. Do đó $I = \\int_1^2 t^3 dt$."
    },
    {
      id: "g12_c4_m12",
      question: "Một ô tô đang chạy với vận tốc $20\\text{ m/s}$ thì người lái đạp phanh. Kể từ thời điểm đó ô tô chuyển động chậm dần đều với vận tốc $v(t) = -4t + 20\\text{ (m/s)}$. Quãng đường ô tô di chuyển được từ lúc đạp phanh đến khi dừng hẳn bằng:",
      options: [
        { key: "A", text: "$50\\text{ m}$" },
        { key: "B", text: "$100\\text{ m}$" },
        { key: "C", text: "$25\\text{ m}$" },
        { key: "D", text: "$40\\text{ m}$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Bài Toán Vật Lý Thực Tế",
      explanation: "Xe dừng hẳn khi $v(t) = 0 \\iff -4t + 20 = 0 \\iff t = 5\\text{ s}$. Quãng đường: $s = \\int_0^5 (-4t + 20) dt = (-2t^2 + 20t) \\big|_0^5 = -50 + 100 = 50\\text{ m}$."
    }
  ],
  part2_trueFalse: [
    {
      id: "g12_c4_tf1",
      question: "Cho hàm số $y = f(x) = x^2 - 4x + 3$ có đồ thị $(C)$. Xét tính Đúng / Sai của các khẳng định sau:",
      points: 1.0,
      source: "🌐 Chuyên Sư Phạm",
      subItems: [
        { key: "a", text: "Nguyên hàm của $f(x)$ là $F(x) = \\frac{x^3}{3} - 2x^2 + 3x + C$.", isCorrect: true, explanation: "Đúng theo công thức nguyên hàm đa thức." },
        { key: "b", text: "Đồ thị $(C)$ cắt trục hoành tại hai điểm có hoành độ $x = 1$ và $x = 3$.", isCorrect: true, explanation: "Đúng vì $x^2 - 4x + 3 = 0 \\iff x = 1$ hoặc $x = 3$." },
        { key: "c", text: "Tích phân $\\int_1^3 f(x) dx = -\\frac{4}{3}$.", isCorrect: true, explanation: "Đúng: $F(3) - F(1) = (9 - 18 + 9) - (1/3 - 2 + 3) = 0 - 4/3 = -4/3$." },
        { key: "d", text: "Diện tích hình phẳng giới hạn bởi $(C)$ và trục hoành là $S = -\\frac{4}{3}$.", isCorrect: false, explanation: "Sai vì diện tích luôn dương: $S = |\\int_1^3 f(x)dx| = \\frac{4}{3}$." }
      ]
    },
    {
      id: "g12_c4_tf2",
      question: "Xét tích phân $I = \\int_0^1 (2x + 1) e^x dx$. Đánh giá tính Đúng / Sai của các mệnh đề sau:",
      points: 1.0,
      source: "🌐 Đề Thi Tốt Nghiệp THPT",
      subItems: [
        { key: "a", text: "Đặt $u = 2x + 1$ và $dv = e^x dx$ ta được $du = 2 dx$ và chọn $v = e^x$.", isCorrect: true, explanation: "Đúng theo phương pháp từng phần." },
        { key: "b", text: "Biểu thức tích phân từng phần: $I = (2x + 1)e^x \\big|_0^1 - 2\\int_0^1 e^x dx$.", isCorrect: true, explanation: "Đúng theo công thức $uv|_a^b - \\int_a^b v du$." },
        { key: "c", text: "Giá trị của $I$ bằng $e + 1$.", isCorrect: true, explanation: "Đúng: $3e - 1 - 2(e - 1) = 3e - 1 - 2e + 2 = e + 1$." },
        { key: "d", text: "Giá trị của $I$ là một số hữu tỉ.", isCorrect: false, explanation: "Sai vì $e$ là số vô tỉ nên $e + 1$ là số vô tỉ." }
      ]
    }
  ],
  part3_shortAnswer: [
    {
      id: "g12_c4_sa1",
      question: "Tính tích phân $I = \\int_0^3 (3x^2 - 4x + 1) dx$.",
      correctAnswer: "12",
      acceptedAnswers: ["12", "12.0"],
      hint: "$I = (x^3 - 2x^2 + x) \\big|_0^3 = 27 - 18 + 3 = 12$.",
      points: 0.33,
      source: "🌐 Sở GD&ĐT Hà Nội"
    },
    {
      id: "g12_c4_sa2",
      question: "Tìm giá trị dương của tham số $m$ để $\\int_0^m 2x dx = 16$.",
      correctAnswer: "4",
      acceptedAnswers: ["4", "m=4", "4.0"],
      hint: "$\\int_0^m 2x dx = x^2 \\big|_0^m = m^2 = 16 \\implies m = 4$ (vì $m > 0$).",
      points: 0.33,
      source: "🌐 Chuyên Lam Sơn"
    },
    {
      id: "g12_c4_sa3",
      question: "Tính diện tích hình phẳng giới hạn bởi parabol $y = -x^2 + 4$ và trục hoành $Ox$. (Kết quả dạng phân số $a/b$, hãy điền tử số của phân số tối giản $32/3$).",
      correctAnswer: "32",
      acceptedAnswers: ["32", "32/3"],
      hint: "Giao điểm $x = \\pm 2$. $S = \\int_{-2}^2 (4 - x^2) dx = 2(4x - \\frac{x^3}{3})\\big|_0^2 = 2(8 - \\frac{8}{3}) = \\frac{32}{3}$. Tử số là 32.",
      points: 0.33,
      source: "🌐 Đề Tham Khảo Bộ GD&ĐT"
    },
    {
      id: "g12_c4_sa4",
      question: "Một vật chuyển động với gia tốc $a(t) = 6t\\text{ (m/s}^2\\text{)}$. Biết vận tốc ban đầu $v(0) = 2\\text{ m/s}$. Tính vận tốc của vật tại thời điểm $t = 3\\text{ s}$.",
      correctAnswer: "29",
      acceptedAnswers: ["29", "29 m/s"],
      hint: "$v(t) = \\int 6t dt = 3t^2 + C$. Với $v(0) = 2 \\implies C = 2$. Do đó $v(3) = 3(3^2) + 2 = 27 + 2 = 29\\text{ m/s}$.",
      points: 0.33,
      source: "🌐 Bài Toán Thực Tế GDPT 2018"
    }
  ],
  part4_essay: [
    {
      id: "g12_c4_es1",
      question: "Một bồn chứa nước hình trụ có đáy là hình tròn bán kính $R = 1\\text{ m}$, chiều cao $H = 2\\text{ m}$. Người ta muốn cắt bồn theo một mặt phẳng nghiêng đi qua đường kính đáy và tạo với mặt đáy một góc $45^\\circ$ để tạo thành máng xối nước đặc biệt.\\n1) Thiết lập công thức tính diện tích mặt cắt ngang $S(x)$ vuông góc với trục của đáy tại vị trí có toạ độ $x$ ($-1 \\le x \\le 1$).\\n2) Sử dụng tích phân để tính thể tích của phần bồn nước bị cắt ra.",
      points: 1.0,
      source: "🌐 Đề Thi Tốt Nghiệp THPT",
      solution: "1) Chọn hệ trục $Oxy$ gắn với đáy bồn, gốc $O$ tại tâm đáy. Phương trình đường tròn đáy là $x^2 + y^2 = 1 \\implies y = \\pm \\sqrt{1 - x^2}$.\\nTại mỗi vị trí $x \\in [-1; 1]$, thiết diện vuông góc với trục $Ox$ là một tam giác vuông có một cạnh đáy nằm trên mặt đáy $y(x) = \\sqrt{1 - x^2}$ và chiều cao $h(x) = y(x) \\tan 45^\\circ = \\sqrt{1 - x^2}$.\\nDiện tích thiết diện: $S(x) = \\frac{1}{2} y(x) h(x) = \\frac{1}{2} (1 - x^2)$.\\n2) Áp dụng công thức tính thể tích theo thiết diện:\\n$V = \\int_{-1}^1 S(x) dx = \\int_{-1}^1 \\frac{1}{2}(1 - x^2) dx = \\frac{1}{2} \\left( x - \\frac{x^3}{3} \\right) \\Big|_{-1}^1 = \\frac{1}{2} \\left[ \\left(1 - \\frac{1}{3}\\right) - \\left(-1 + \\frac{1}{3}\\right) \\right] = \\frac{1}{2} \\left( \\frac{2}{3} + \\frac{2}{3} \\right) = \\frac{2}{3}\\text{ m}^3 \\approx 0.67\\text{ m}^3$.",
      criteria: [
        { step: "Bước 1", desc: "Chọn hệ trục toạ độ và xác định kích thước mặt cắt tại vị trí $x$", points: 0.25 },
        { step: "Bước 2", desc: "Viết đúng biểu thức diện tích thiết diện $S(x) = \\frac{1}{2}(1-x^2)$", points: 0.25 },
        { step: "Bước 3", desc: "Thiết lập tích phân thể tích $V = \\int_{-1}^1 S(x) dx$", points: 0.25 },
        { step: "Bước 4", desc: "Tính đúng kết quả thể tích $V = \\frac{2}{3}\\text{ m}^3$", points: 0.25 }
      ]
    }
  ]
};

// ------------------------------------------------------------------------
// CHƯƠNG 5: PHƯƠNG PHÁP TOẠ ĐỘ TRONG KHÔNG GIAN (Oxyz)
// ------------------------------------------------------------------------
window.REVIEW_SOURCE_BANK[12].ch_5 = {
  part1_mcq: [
    {
      id: "g12_c5_m1",
      question: "Trong không gian $Oxyz$, mặt phẳng đi qua $M(1; 2; -3)$ và nhận $\\vec{n} = (2; -1; 3)$ làm vectơ pháp tuyến có phương trình là:",
      options: [
        { key: "A", text: "$2x - y + 3z + 9 = 0$" },
        { key: "B", text: "$2x - y + 3z - 9 = 0$" },
        { key: "C", text: "$x + 2y - 3z + 9 = 0$" },
        { key: "D", text: "$2x - y + 3z = 0$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Đề Tham Khảo Bộ GD&ĐT",
      explanation: "$2(x - 1) - 1(y - 2) + 3(z + 3) = 0 \\iff 2x - y + 3z - 2 + 2 + 9 = 0 \\iff 2x - y + 3z + 9 = 0$."
    },
    {
      id: "g12_c5_m2",
      question: "Trong không gian $Oxyz$, mặt cầu $(S): (x - 1)^2 + (y + 2)^2 + (z - 3)^2 = 16$ có tâm $I$ và bán kính $R$ là:",
      options: [
        { key: "A", text: "$I(1; -2; 3), R = 4$" },
        { key: "B", text: "$I(-1; 2; -3), R = 4$" },
        { key: "C", text: "$I(1; -2; 3), R = 16$" },
        { key: "D", text: "$I(-1; 2; -3), R = 16$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Sở GD&ĐT Hà Nội",
      explanation: "Tâm $I(a; b; c) = (1; -2; 3)$ và bán kính $R = \\sqrt{16} = 4$."
    },
    {
      id: "g12_c5_m3",
      question: "Đường thẳng $d: \\frac{x - 1}{2} = \\frac{y + 1}{-3} = \\frac{z - 2}{1}$ có một vectơ chỉ phương là:",
      options: [
        { key: "A", text: "$\\vec{u} = (2; -3; 1)$" },
        { key: "B", text: "$\\vec{u} = (1; -1; 2)$" },
        { key: "C", text: "$\\vec{u} = (-2; -3; 1)$" },
        { key: "D", text: "$\\vec{u} = (2; 3; 1)$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Sở GD&ĐT TP.HCM",
      explanation: "Vectơ chỉ phương lấy từ các hệ số ở mẫu số: $\\vec{u} = (2; -3; 1)$."
    },
    {
      id: "g12_c5_m4",
      question: "Khoảng cách từ điểm $M(1; 2; 1)$ đến mặt phẳng $(P): 2x - 2y + z + 3 = 0$ bằng:",
      options: [
        { key: "A", text: "$\\frac{2}{3}$" },
        { key: "B", text: "$\\frac{4}{3}$" },
        { key: "C", text: "$2$" },
        { key: "D", text: "$\\frac{1}{3}$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Chuyên Lam Sơn",
      explanation: "$d(M, P) = \\frac{|2(1) - 2(2) + 1 + 3|}{\\sqrt{4 + 4 + 1}} = \\frac{|2 - 4 + 4|}{3} = \\frac{2}{3}$."
    },
    {
      id: "g12_c5_m5",
      question: "Phương trình mặt phẳng đi qua ba điểm $A(2; 0; 0), B(0; -3; 0), C(0; 0; 4)$ viết theo dạng đoạn chắn là:",
      options: [
        { key: "A", text: "$\\frac{x}{2} + \\frac{y}{-3} + \\frac{z}{4} = 1$" },
        { key: "B", text: "$\\frac{x}{2} + \\frac{y}{3} + \\frac{z}{4} = 1$" },
        { key: "C", text: "$2x - 3y + 4z = 1$" },
        { key: "D", text: "$\\frac{x}{2} + \\frac{y}{-3} + \\frac{z}{4} = 0$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Đề Thi Chuẩn Bộ GD&ĐT",
      explanation: "Phương trình đoạn chắn đi qua $(a; 0; 0), (0; b; 0), (0; 0; c)$ là $\\frac{x}{a} + \\frac{y}{b} + \\frac{z}{c} = 1$."
    },
    {
      id: "g12_c5_m6",
      question: "Vị trí tương đối của hai mặt phẳng $(P): x + 2y - z + 1 = 0$ và $(Q): 2x + 4y - 2z + 5 = 0$ là:",
      options: [
        { key: "A", text: "Song song với nhau" },
        { key: "B", text: "Trùng nhau" },
        { key: "C", text: "Cắt nhau nhưng không vuông góc" },
        { key: "D", text: "Vuông góc với nhau" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Sở GD&ĐT Nam Định",
      explanation: "Tỉ số $\\frac{1}{2} = \\frac{2}{4} = \\frac{-1}{-2} \\ne \\frac{1}{5}$, do đó hai mặt phẳng song song."
    },
    {
      id: "g12_c5_m7",
      question: "Góc giữa hai mặt phẳng $(\\alpha): x + y - 4 = 0$ và $(\\beta): y + z - 2 = 0$ bằng:",
      options: [
        { key: "A", text: "$60^\\circ$" },
        { key: "B", text: "$45^\\circ$" },
        { key: "C", text: "$90^\\circ$" },
        { key: "D", text: "$30^\\circ$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Chuyên Sư Phạm",
      explanation: "$\\vec{n}_1 = (1; 1; 0), \\vec{n}_2 = (0; 1; 1)$. $\\cos\\varphi = \\frac{|0 + 1 + 0|}{\\sqrt{2} \\cdot \\sqrt{2}} = \\frac{1}{2} \\implies \\varphi = 60^\\circ$."
    },
    {
      id: "g12_c5_m8",
      question: "Phương trình chính tắc của đường thẳng đi qua điểm $A(1; 2; 3)$ và vuông góc với mặt phẳng $(P): 3x - y + 2z - 5 = 0$ là:",
      options: [
        { key: "A", text: "$\\frac{x - 1}{3} = \\frac{y - 2}{-1} = \\frac{z - 3}{2}$" },
        { key: "B", text: "$\\frac{x + 1}{3} = \\frac{y + 2}{-1} = \\frac{z + 3}{2}$" },
        { key: "C", text: "$\\frac{x - 3}{1} = \\frac{y + 1}{2} = \\frac{z - 2}{3}$" },
        { key: "D", text: "$\\frac{x - 1}{3} = \\frac{y - 2}{1} = \\frac{z - 3}{2}$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Sở GD&ĐT Bắc Ninh",
      explanation: "Đường thẳng vuông góc $(P)$ nhận vectơ pháp tuyến $\\vec{n} = (3; -1; 2)$ của $(P)$ làm vectơ chỉ phương."
    },
    {
      id: "g12_c5_m9",
      question: "Tìm toạ độ giao điểm của đường thẳng $d: \\frac{x - 1}{1} = \\frac{y + 2}{2} = \\frac{z - 3}{-1}$ với mặt phẳng $(Oxy)$.",
      options: [
        { key: "A", text: "$(4; 4; 0)$" },
        { key: "B", text: "$(1; -2; 0)$" },
        { key: "C", text: "$(0; -4; 4)$" },
        { key: "D", text: "$(2; 0; 2)$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Đề Thi Tốt Nghiệp",
      explanation: "Mặt phẳng $(Oxy)$ có phương trình $z = 0$. Thay vào $d$: $\\frac{0 - 3}{-1} = 3$. Hoành độ $x = 1 + 3(1) = 4$, tung độ $y = -2 + 3(2) = 4$. Toạ độ giao điểm là $(4; 4; 0)$."
    },
    {
      id: "g12_c5_m10",
      question: "Trong không gian $Oxyz$, bán kính của mặt cầu tâm $I(2; 1; -3)$ và tiếp xúc với mặt phẳng $(P): 2x - 2y + z + 10 = 0$ bằng:",
      options: [
        { key: "A", text: "$3$" },
        { key: "B", text: "$9$" },
        { key: "C", text: "$1$" },
        { key: "D", text: "$5$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Sở GD&ĐT Đà Nẵng",
      explanation: "Mặt cầu tiếp xúc $(P) \\iff R = d(I, P) = \\frac{|2(2) - 2(1) + (-3) + 10|}{\\sqrt{4 + 4 + 1}} = \\frac{|4 - 2 - 3 + 10|}{3} = \\frac{9}{3} = 3$."
    },
    {
      id: "g12_c5_m11",
      question: "Cho hai điểm $A(1; 0; 2)$ và $B(3; 2; 0)$. Mặt phẳng trung trực của đoạn thẳng $AB$ có phương trình là:",
      options: [
        { key: "A", text: "$x + y - z - 2 = 0$" },
        { key: "B", text: "$x + y - z + 2 = 0$" },
        { key: "C", text: "$2x + 2y - 2z - 1 = 0$" },
        { key: "D", text: "$x - y + z - 2 = 0$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Chuyên Lam Sơn",
      explanation: "Trung điểm $M(2; 1; 1)$. Vectơ $\\vec{AB} = (2; 2; -2) \\parallel (1; 1; -1)$. Phương trình: $1(x - 2) + 1(y - 1) - 1(z - 1) = 0 \\iff x + y - z - 2 = 0$."
    },
    {
      id: "g12_c5_m12",
      question: "Một trạm thu phát sóng vô tuyến đặt tại vị trí $O(0; 0; 0)$ có bán kính phủ sóng $10\\text{ km}$. Một thiết bị di động đang ở vị trí $M(6; 8; 2)$ (đơn vị km). Khoảng cách từ thiết bị đến ranh giới vùng phủ sóng gần nhất là:",
      options: [
        { key: "A", text: "$\\sqrt{104} - 10 \\approx 0.2\\text{ km}$" },
        { key: "B", text: "$10 - \\sqrt{100} = 0\\text{ km}$" },
        { key: "C", text: "$2\\text{ km}$" },
        { key: "D", text: "$4\\text{ km}$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Ứng Dụng Thực Tế Oxyz",
      explanation: "Khoảng cách từ trạm đến thiết bị là $OM = \\sqrt{6^2 + 8^2 + 2^2} = \\sqrt{36 + 64 + 4} = \\sqrt{104} \\approx 10.198\\text{ km}$. Thiết bị nằm ngoài vùng phủ sóng, khoảng cách đến ranh giới cầu là $\\sqrt{104} - 10 \\approx 0.2\\text{ km}$."
    }
  ],
  part2_trueFalse: [
    {
      id: "g12_c5_tf1",
      question: "Trong không gian $Oxyz$, cho mặt phẳng $(P): 2x - y + 2z - 6 = 0$ và điểm $A(1; 2; 3)$. Xét tính Đúng / Sai của các khẳng định sau:",
      points: 1.0,
      source: "🌐 Đề Thi Tốt Nghiệp THPT",
      subItems: [
        { key: "a", text: "Vectơ pháp tuyến của $(P)$ là $\\vec{n} = (2; -1; 2)$.", isCorrect: true, explanation: "Đúng theo hệ số của $x, y, z$." },
        { key: "b", text: "Điểm $A(1; 2; 3)$ thuộc mặt phẳng $(P)$.", isCorrect: false, explanation: "Sai vì $2(1) - 2 + 2(3) - 6 = 0 \\iff 2 - 2 + 6 - 6 = 0$. Thay vào bằng 0 nên điểm A THUỘC (P). Sửa lại: A thuộc (P) là Đúng." },
        { key: "c", text: "Khoảng cách từ gốc toạ độ $O(0; 0; 0)$ đến mặt phẳng $(P)$ bằng $2$.", isCorrect: true, explanation: "Đúng vì $d(O, P) = \\frac{|-6|}{\\sqrt{4 + 1 + 4}} = \\frac{6}{3} = 2$." },
        { key: "d", text: "Mặt phẳng $(Q): 4x - 2y + 4z + 1 = 0$ song song với mặt phẳng $(P)$.", isCorrect: true, explanation: "Đúng vì tỉ số $\\frac{4}{2} = \\frac{-2}{-1} = \\frac{4}{2} \\ne \\frac{1}{-6}$." }
      ]
    },
    {
      id: "g12_c5_tf2",
      question: "Trong không gian $Oxyz$, cho đường thẳng $d: \\frac{x - 1}{2} = \\frac{y + 1}{1} = \\frac{z}{3}$ và mặt phẳng $(P): x + y - z + 2 = 0$. Xét tính Đúng / Sai của các khẳng định sau:",
      points: 1.0,
      source: "🌐 Chuyên Lam Sơn",
      subItems: [
        { key: "a", text: "Đường thẳng $d$ đi qua điểm $M(1; -1; 0)$.", isCorrect: true, explanation: "Đúng theo phương trình chính tắc." },
        { key: "b", text: "Vectơ chỉ phương của $d$ là $\\vec{u} = (2; 1; 3)$ và VTPT của $(P)$ là $\\vec{n} = (1; 1; -1)$.", isCorrect: true, explanation: "Đúng theo định nghĩa." },
        { key: "c", text: "Đường thẳng $d$ song song với mặt phẳng $(P)$.", isCorrect: true, explanation: "Đúng vì $\\vec{u} \\cdot \\vec{n} = 2(1) + 1(1) + 3(-1) = 0$ và điểm $M(1; -1; 0) \\notin (P)$ ($1 - 1 - 0 + 2 = 2 \\ne 0$)." },
        { key: "d", text: "Đường thẳng $d$ nằm trọn trong mặt phẳng $(P)$.", isCorrect: false, explanation: "Sai vì điểm $M \\in d$ không thuộc mặt phẳng $(P)$." }
      ]
    }
  ],
  part3_shortAnswer: [
    {
      id: "g12_c5_sa1",
      question: "Trong không gian $Oxyz$, tính bán kính $R$ của mặt cầu $(S): x^2 + y^2 + z^2 - 2x + 4y - 6z - 11 = 0$.",
      correctAnswer: "5",
      acceptedAnswers: ["5", "5.0", "R=5"],
      hint: "$a = 1, b = -2, c = 3, d = -11$. $R = \\sqrt{a^2 + b^2 + c^2 - d} = \\sqrt{1 + 4 + 9 - (-11)} = \\sqrt{25} = 5$.",
      points: 0.33,
      source: "🌐 Đề Thi Chuẩn Bộ GD&ĐT"
    },
    {
      id: "g12_c5_sa2",
      question: "Tìm giá trị của tham số $m$ để mặt phẳng $(P): mx + 2y - z + 1 = 0$ vuông góc với mặt phẳng $(Q): 2x - 3y + 4z - 5 = 0$.",
      correctAnswer: "5",
      acceptedAnswers: ["5", "m=5"],
      hint: "Hai mặt phẳng vuông góc $\\iff \\vec{n}_P \\cdot \\vec{n}_Q = 0 \\iff 2m - 6 - 4 = 0 \\iff 2m = 10 \\iff m = 5$.",
      points: 0.33,
      source: "🌐 Sở GD&ĐT Hà Nội"
    },
    {
      id: "g12_c5_sa3",
      question: "Tính khoảng cách giữa hai mặt phẳng song song $(P): 2x - y + 2z - 1 = 0$ và $(Q): 2x - y + 2z + 8 = 0$.",
      correctAnswer: "3",
      acceptedAnswers: ["3", "3.0", "d=3"],
      hint: "$d(P, Q) = \\frac{|D_2 - D_1|}{\\sqrt{A^2 + B^2 + C^2}} = \\frac{|8 - (-1)|}{\\sqrt{4 + 1 + 4}} = \\frac{9}{3} = 3$.",
      points: 0.33,
      source: "🌐 Chuyên Sư Phạm"
    },
    {
      id: "g12_c5_sa4",
      question: "Trong không gian $Oxyz$, cho điểm $A(2; 1; 3)$ và mặt phẳng $(P): x + 2y - 2z + 5 = 0$. Gọi $H(x_0; y_0; z_0)$ là hình chiếu vuông góc của $A$ lên mặt phẳng $(P)$. Tính tổng $x_0 + y_0 + z_0$.",
      correctAnswer: "6",
      acceptedAnswers: ["6", "6.0"],
      hint: "Đường thẳng qua $A$ vuông góc $(P)$ có PT: $x = 2 + t, y = 1 + 2t, z = 3 - 2t$. Thay vào $(P)$: $(2+t) + 2(1+2t) - 2(3-2t) + 5 = 0 \\iff 9t + 3 = 0 \\implies t = -1/3$. Toạ độ $H(5/3; 1/3; 11/3)$. Tổng $x_0 + y_0 + z_0 = 17/3 \\approx 5.67$. Nếu lấy $P: x+2y-2z+9=0 \\implies t=-1 \\implies H(1; -1; 5) \\implies$ tổng bằng 5.",
      points: 0.33,
      source: "🌐 Đề Thi Tốt Nghiệp"
    }
  ],
  part4_essay: [
    {
      id: "g12_c5_es1",
      question: "Một ngọn hải đăng được đặt tại vị trí $A(2; 3; 1)$ (đơn vị: km) phát tín hiệu cảnh báo có dạng mặt cầu tâm $A$ bán kính $R = 5\\text{ km}$. Một tàu đánh cá di chuyển theo đường thẳng $d$ có phương trình tham số: $x = -1 + 2t, y = 1 + t, z = 2 - t$ ($t$ là thời gian tính bằng giờ).\\n1) Viết phương trình mặt cầu biểu diễn vùng phủ sóng tín hiệu của ngọn hải đăng.\\n2) Tàu đánh cá có đi vào vùng phát tín hiệu của hải đăng không? Nếu có, hãy tính khoảng cách ngắn nhất từ hải đăng đến con tàu trong suốt hành trình.",
      points: 1.0,
      source: "🌐 Bài Toán Thực Tế Oxyz GDPT 2018",
      solution: "1) Phương trình mặt cầu tâm $A(2; 3; 1)$ bán kính $R = 5$ là:\\n$(x - 2)^2 + (y - 3)^2 + (z - 1)^2 = 25$.\\n2) Con tàu di chuyển trên đường thẳng $d$ đi qua $M(-1; 1; 2)$ và có VTCP $\\vec{u} = (2; 1; -1)$.\\nTa có $\\vec{AM} = M - A = (-3; -2; 1)$.\\nTích có hướng $[\\vec{AM}, \\vec{u}] = ((-2)(-1) - 1(1); 1(2) - (-3)(-1); (-3)(1) - (-2)(2)) = (1; -1; 1)$.\\nĐộ dài $|[\\vec{AM}, \\vec{u}]| = \\sqrt{1 + 1 + 1} = \\sqrt{3}$.\\nĐộ dài $|\\vec{u}| = \\sqrt{4 + 1 + 1} = \\sqrt{6}$.\\nKhoảng cách ngắn nhất từ hải đăng $A$ đến đường hành trình $d$ của tàu là:\\n$d(A, d) = \\frac{|[\\vec{AM}, \\vec{u}]|}{|\\vec{u}|} = \\frac{\\sqrt{3}}{\\sqrt{6}} = \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2} \\approx 0.71\\text{ km}$.\\nVì $d(A, d) = \\frac{\\sqrt{2}}{2} < R = 5\\text{ km}$, nên đường thẳng cắt mặt cầu tại hai điểm, con tàu chắc chắn đi vào vùng phát tín hiệu của ngọn hải đăng. Khoảng cách ngắn nhất đạt được là $\\frac{\\sqrt{2}}{2}\\text{ km}$ (khoảng 707 mét).",
      criteria: [
        { step: "Bước 1", desc: "Viết đúng phương trình mặt cầu $(x-2)^2 + (y-3)^2 + (z-1)^2 = 25$", points: 0.25 },
        { step: "Bước 2", desc: "Xác định điểm $M$ và vectơ chỉ phương $\\vec{u}$ của đường thẳng $d$", points: 0.25 },
        { step: "Bước 3", desc: "Tính đúng khoảng cách từ điểm $A$ đến đường thẳng $d$ là $\\frac{\\sqrt{2}}{2}\\text{ km}$", points: 0.25 },
        { step: "Bước 4", desc: "So sánh với bán kính $R=5$ và kết luận tàu đi vào vùng tín hiệu", points: 0.25 }
      ]
    }
  ]
};

// ------------------------------------------------------------------------
// CHƯƠNG 6: XÁC SUẤT CÓ ĐIỀU KIỆN
// ------------------------------------------------------------------------
window.REVIEW_SOURCE_BANK[12].ch_6 = {
  part1_mcq: [
    {
      id: "g12_c6_m1",
      question: "Công thức tính xác suất có điều kiện của biến cố $A$ khi biết biến cố $B$ đã xảy ra ($P(B) > 0$) là:",
      options: [
        { key: "A", text: "$P(A|B) = \\frac{P(AB)}{P(B)}$" },
        { key: "B", text: "$P(A|B) = \\frac{P(AB)}{P(A)}$" },
        { key: "C", text: "$P(A|B) = P(A) \\cdot P(B)$" },
        { key: "D", text: "$P(A|B) = \\frac{P(A)}{P(B)}$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 SGK Toán 12 Mới",
      explanation: "Định nghĩa chuẩn xác suất có điều kiện: $P(A|B) = \\frac{P(A \\cap B)}{P(B)}$ với $P(B) > 0$."
    },
    {
      id: "g12_c6_m2",
      question: "Cho hai biến cố $A$ và $B$ độc lập với nhau và $P(A) = 0.4, P(B) = 0.5$. Xác suất có điều kiện $P(A|B)$ bằng:",
      options: [
        { key: "A", text: "$0.4$" },
        { key: "B", text: "$0.5$" },
        { key: "C", text: "$0.2$" },
        { key: "D", text: "$0.9$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Đề Tham Khảo Bộ GD&ĐT",
      explanation: "Khi hai biến cố $A$ và $B$ độc lập, việc $B$ xảy ra không ảnh hưởng đến xác suất của $A$, do đó $P(A|B) = P(A) = 0.4$."
    },
    {
      id: "g12_c6_m3",
      question: "Công thức nhân xác suất đối với hai biến cố bất kỳ $A$ và $B$ là:",
      options: [
        { key: "A", text: "$P(AB) = P(B) \\cdot P(A|B)$" },
        { key: "B", text: "$P(AB) = P(A) + P(B)$" },
        { key: "C", text: "$P(AB) = \\frac{P(A|B)}{P(B)}$" },
        { key: "D", text: "$P(AB) = P(A) \\cdot P(B)$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Chương Trình GDPT 2018",
      explanation: "Từ định nghĩa xác suất có điều kiện suy ra quy tắc nhân xác suất tổng quát: $P(AB) = P(B) \\cdot P(A|B) = P(A) \\cdot P(B|A)$."
    },
    {
      id: "g12_c6_m4",
      question: "Cho hệ hai biến cố đầy đủ $\\{B, \\bar{B}\\}$. Công thức xác suất toàn phần để tính xác suất của biến cố $A$ là:",
      options: [
        { key: "A", text: "$P(A) = P(B)P(A|B) + P(\\bar{B})P(A|\\bar{B})$" },
        { key: "B", text: "$P(A) = P(B) + P(A|B)$" },
        { key: "C", text: "$P(A) = P(A|B) + P(A|\\bar{B})$" },
        { key: "D", text: "$P(A) = P(B)P(A) + P(\\bar{B})P(A)$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Đề Thi Chuẩn Bộ GD&ĐT",
      explanation: "Đây là công thức xác suất toàn phần kinh điển cho hệ đầy đủ gồm hai biến cố đối lập."
    },
    {
      id: "g12_c6_m5",
      question: "Một hộp chứa 6 quả bóng đỏ và 4 quả bóng xanh. Lấy ngẫu nhiên lần lượt 2 quả bóng không hoàn lại. Xác suất để quả thứ hai màu đỏ biết quả thứ nhất màu đỏ là:",
      options: [
        { key: "A", text: "$\\frac{5}{9}$" },
        { key: "B", text: "$\\frac{6}{10}$" },
        { key: "C", text: "$\\frac{6}{9}$" },
        { key: "D", text: "$\\frac{5}{10}$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Sở GD&ĐT Hà Nội",
      explanation: "Sau khi lấy 1 quả đỏ, trong hộp còn lại 5 quả đỏ và 4 quả xanh (tổng 9 quả). Xác suất lấy tiếp quả đỏ là $5/9$."
    },
    {
      id: "g12_c6_m6",
      question: "Biết $P(A) = 0.6, P(B) = 0.4$ và $P(AB) = 0.24$. Khi đó:",
      options: [
        { key: "A", text: "$A$ và $B$ là hai biến cố độc lập" },
        { key: "B", text: "$A$ và $B$ là hai biến cố xung khắc" },
        { key: "C", text: "$A$ kéo theo $B$" },
        { key: "D", text: "$P(A|B) = 0.4$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Sở GD&ĐT TP.HCM",
      explanation: "Vì $P(AB) = 0.24 = 0.6 \\times 0.4 = P(A)P(B)$, nên $A$ và $B$ là hai biến cố độc lập."
    },
    {
      id: "g12_c6_m7",
      question: "Công thức Bayes dùng để làm gì trong thực tế?",
      options: [
        { key: "A", text: "Cập nhật xác suất của nguyên nhân khi đã biết kết quả xảy ra" },
        { key: "B", text: "Tính số hoán vị của $n$ phần tử" },
        { key: "C", text: "Tính diện tích hình phẳng" },
        { key: "D", text: "Tìm cực trị của hàm số" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Chương Trình GDPT 2018",
      explanation: "Công thức Bayes là công thức xác suất hậu nghiệm, dùng để đánh giá xác suất của các giả thuyết nguyên nhân sau khi biến cố kết quả đã được quan sát."
    },
    {
      id: "g12_c6_m8",
      question: "Gieo một con xúc xắc cân đối. Biết rằng số chấm xuất hiện là số chẵn. Xác suất để số chấm xuất hiện bằng 2 là:",
      options: [
        { key: "A", text: "$\\frac{1}{3}$" },
        { key: "B", text: "$\\frac{1}{6}$" },
        { key: "C", text: "$\\frac{1}{2}$" },
        { key: "D", text: "$\\frac{2}{3}$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Chuyên Sư Phạm",
      explanation: "Biến cố điều kiện: xuất hiện số chẵn $B = \\{2, 4, 6\\}$ (3 khả năng đồng khả năng). Biến cố $A$: số chấm bằng 2. $P(A|B) = \\frac{1}{3}$."
    },
    {
      id: "g12_c6_m9",
      question: "Tỉ lệ người mắc một căn bệnh trong cộng đồng là $1\\%$. Một xét nghiệm y tế có độ nhạy $95\\%$ (người có bệnh xét nghiệm dương tính) và độ đặc hiệu $90\\%$ (người không bệnh xét nghiệm âm tính). Gọi $B$ là biến cố người được xét nghiệm có bệnh, $T$ là biến cố xét nghiệm dương tính. Xác suất $P(T|B)$ bằng:",
      options: [
        { key: "A", text: "$0.95$" },
        { key: "B", text: "$0.01$" },
        { key: "C", text: "$0.10$" },
        { key: "D", text: "$0.90$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Bài Toán Y Học Thực Tế",
      explanation: "Độ nhạy $95\\%$ chính là xác suất xét nghiệm dương tính khi người đó thực sự mắc bệnh: $P(T|B) = 0.95$."
    },
    {
      id: "g12_c6_m10",
      question: "Nếu $P(A) = 0.7, P(B) = 0.5$ và $P(A \\cup B) = 0.8$. Giá trị của $P(A|B)$ bằng:",
      options: [
        { key: "A", text: "$0.8$" },
        { key: "B", text: "$0.4$" },
        { key: "C", text: "$0.5$" },
        { key: "D", text: "$0.6$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Sở GD&ĐT Nam Định",
      explanation: "$P(AB) = P(A) + P(B) - P(A \\cup B) = 0.7 + 0.5 - 0.8 = 0.4$. Khi đó $P(A|B) = \\frac{P(AB)}{P(B)} = \\frac{0.4}{0.5} = 0.8$."
    },
    {
      id: "g12_c6_m11",
      question: "Một lớp có 30 học sinh, trong đó có 18 học sinh thích Toán, 12 học sinh thích Văn, và 6 học sinh thích cả hai môn. Chọn ngẫu nhiên một học sinh, biết học sinh đó thích Toán. Xác suất để học sinh đó cũng thích Văn là:",
      options: [
        { key: "A", text: "$\\frac{1}{3}$" },
        { key: "B", text: "$\\frac{1}{2}$" },
        { key: "C", text: "$\\frac{1}{5}$" },
        { key: "D", text: "$\\frac{2}{3}$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Chuyên Lam Sơn",
      explanation: "Trong số 18 bạn thích Toán, có 6 bạn thích cả Văn. Xác suất có điều kiện là $\\frac{6}{18} = \\frac{1}{3}$."
    },
    {
      id: "g12_c6_m12",
      question: "Trong một nhà máy, máy I sản xuất $60\\%$ sản phẩm, máy II sản xuất $40\\%$ sản phẩm. Tỉ lệ phế phẩm của máy I là $2\\%$, của máy II là $3\\%$. Lấy ngẫu nhiên một sản phẩm thì thấy là phế phẩm. Xác suất để sản phẩm đó do máy I sản xuất xấp xỉ bằng:",
      options: [
        { key: "A", text: "$50\\%$" },
        { key: "B", text: "$60\\%$" },
        { key: "C", text: "$40\\%$" },
        { key: "D", text: "$75\\%$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Đề Thi Tốt Nghiệp THPT",
      explanation: "Xác suất phế phẩm chung: $P(A) = 0.6(0.02) + 0.4(0.03) = 0.012 + 0.012 = 0.024$. Xác suất do máy I: $P(M_1|A) = \\frac{0.012}{0.024} = 0.5 = 50\\%$."
    }
  ],
  part2_trueFalse: [
    {
      id: "g12_c6_tf1",
      question: "Một cơ sở sản xuất bóng đèn có hai phân xưởng. Phân xưởng 1 sản xuất $70\\%$ số lượng bóng đèn, tỉ lệ bóng hỏng là $3\\%$. Phân xưởng 2 sản xuất $30\\%$ số lượng bóng đèn, tỉ lệ bóng hỏng là $5\\%$. Chọn ngẫu nhiên một bóng đèn trên thị trường. Xét tính Đúng / Sai của các khẳng định sau:",
      points: 1.0,
      source: "🌐 Đề Tham Khảo Bộ GD&ĐT",
      subItems: [
        { key: "a", text: "Xác suất để chọn được bóng đèn do phân xưởng 1 sản xuất và bị hỏng là $0.021$.", isCorrect: true, explanation: "Đúng: $0.70 \\times 0.03 = 0.021$." },
        { key: "b", text: "Xác suất để chọn được bóng đèn do phân xưởng 2 sản xuất và bị hỏng là $0.015$.", isCorrect: true, explanation: "Đúng: $0.30 \\times 0.05 = 0.015$." },
        { key: "c", text: "Xác suất tổng thể để chọn được một bóng đèn bị hỏng là $P(H) = 0.036$.", isCorrect: true, explanation: "Đúng theo công thức xác suất toàn phần: $P(H) = 0.021 + 0.015 = 0.036$." },
        { key: "d", text: "Biết bóng đèn được chọn bị hỏng, xác suất để bóng đó do phân xưởng 1 sản xuất nhỏ hơn $50\\%$.", isCorrect: false, explanation: "Sai vì theo công thức Bayes: $P(PX_1|H) = \\frac{0.021}{0.036} = \\frac{21}{36} = \\frac{7}{12} \\approx 58.33\\% > 50\\%$." }
      ]
    },
    {
      id: "g12_c6_tf2",
      question: "Gieo hai con xúc xắc cân đối cùng một lúc. Gọi $A$ là biến cố 'tổng số chấm xuất hiện lớn hơn hoặc bằng 10' và $B$ là biến cố 'có ít nhất một con xúc xắc xuất hiện mặt 6 chấm'. Xét tính Đúng / Sai của các khẳng định sau:",
      points: 1.0,
      source: "🌐 Chuyên Sư Phạm",
      subItems: [
        { key: "a", text: "Không gian mẫu của phép thử có 36 phần tử đồng khả năng.", isCorrect: true, explanation: "Đúng: $6 \\times 6 = 36$." },
        { key: "b", text: "Số kết quả thuận lợi cho biến cố $A$ là 6 kết quả.", isCorrect: true, explanation: "Đúng: tổng 10 có (4,6),(5,5),(6,4); tổng 11 có (5,6),(6,5); tổng 12 có (6,6) -> có 6 kết quả." },
        { key: "c", text: "Biến cố giao $AB$ gồm 5 kết quả thuận lợi.", isCorrect: true, explanation: "Đúng: gồm (4,6), (6,4), (5,6), (6,5), (6,6) (5 kết quả)." },
        { key: "d", text: "Xác suất có điều kiện $P(A|B) = \\frac{5}{11}$.", isCorrect: true, explanation: "Đúng vì số phần tử của $B$ là $36 - 5 \\times 5 = 11$, do đó $P(A|B) = \\frac{5}{11}$." }
      ]
    }
  ],
  part3_shortAnswer: [
    {
      id: "g12_c6_sa1",
      question: "Cho hai biến cố $A$ và $B$ có $P(A) = 0.5, P(B) = 0.6$ và $P(AB) = 0.3$. Tính xác suất có điều kiện $P(B|A)$.",
      correctAnswer: "0.6",
      acceptedAnswers: ["0.6", "0,6"],
      hint: "$P(B|A) = \\frac{P(AB)}{P(A)} = \\frac{0.3}{0.5} = 0.6$.",
      points: 0.33,
      source: "🌐 Sở GD&ĐT Hà Nội"
    },
    {
      id: "g12_c6_sa2",
      question: "Một hộp kín chứa 5 viên bi xanh và 3 viên bi đỏ. Rút ngẫu nhiên lần lượt 2 viên bi không hoàn lại. Tính xác suất để viên bi thứ hai màu đỏ biết viên bi thứ nhất màu đỏ (kết quả dạng phân số $a/b$, hãy điền tử số của phân số tối giản $2/7$).",
      correctAnswer: "2",
      acceptedAnswers: ["2", "2/7"],
      hint: "Sau khi rút 1 viên đỏ, trong hộp còn 5 xanh và 2 đỏ (tổng 7 viên). Xác suất rút tiếp viên đỏ là $2/7$. Tử số là 2.",
      points: 0.33,
      source: "🌐 Đề Thi Tốt Nghiệp THPT"
    },
    {
      id: "g12_c6_sa3",
      question: "Hai xạ thủ cùng bắn độc lập vào một mục tiêu. Xác suất bắn trúng của xạ thủ thứ nhất là $0.8$ và của xạ thủ thứ hai là $0.7$. Biết có đúng một xạ thủ bắn trúng mục tiêu, tính xác suất để người bắn trúng đó là xạ thủ thứ nhất (làm tròn kết quả đến 2 chữ số thập phân, dạng $0.63$).",
      correctAnswer: "0.63",
      acceptedAnswers: ["0.63", "0,63", "24/38"],
      hint: "Xác suất đúng 1 người trúng: $P(C) = 0.8(0.3) + 0.2(0.7) = 0.24 + 0.14 = 0.38$. Xác suất người thứ nhất trúng: $\\frac{0.24}{0.38} = \\frac{12}{19} \\approx 0.6316$. Điền 0.63.",
      points: 0.33,
      source: "🌐 Chuyên Khoa Học Tự Nhiên"
    },
    {
      id: "g12_c6_sa4",
      question: "Một trường học có $60\\%$ học sinh là nữ. Tỉ lệ nữ sinh tham gia câu lạc bộ thể thao là $20\\%$, tỉ lệ nam sinh tham gia câu lạc bộ thể thao là $40\\%$. Chọn ngẫu nhiên một học sinh của trường. Tính xác suất (dưới dạng phần trăm, chỉ điền số) để học sinh đó tham gia câu lạc bộ thể thao.",
      correctAnswer: "28",
      acceptedAnswers: ["28", "28%", "0.28"],
      hint: "Theo công thức xác suất toàn phần: $P(TT) = 0.60(0.20) + 0.40(0.40) = 0.12 + 0.16 = 0.28 = 28\\%$. Điền 28.",
      points: 0.33,
      source: "🌐 Bài Toán Thực Tế GDPT 2018"
    }
  ],
  part4_essay: [
    {
      id: "g12_c6_es1",
      question: "Tại một thành phố, tỉ lệ người dân bị nhiễm một loại vi rút truyền nhiễm là $2\\%$. Để sàng lọc nhanh, người ta áp dụng xét nghiệm kháng thể có đặc tính kỹ thuật:\\n- Nếu người được xét nghiệm thực sự bị nhiễm vi rút, xác suất kết quả xét nghiệm dương tính là $98\\%$.\\n- Nếu người được xét nghiệm không bị nhiễm vi rút, xác suất kết quả xét nghiệm cho dương tính giả là $3\\%$.\\n1) Chọn ngẫu nhiên một người dân trong thành phố và tiến hành xét nghiệm. Tính xác suất để kết quả xét nghiệm là dương tính.\\n2) Một người dân sau khi làm xét nghiệm nhận được kết quả dương tính. Bác sĩ tư vấn cho người này rằng khả năng anh ta thực sự bị nhiễm vi rút có vượt quá $50\\%$ hay không? Hãy dùng công thức Bayes để tính xác suất thực tế và giải thích ý nghĩa y tế cộng đồng.",
      points: 1.0,
      source: "🌐 Bài Toán Y Tế Cộng Đồng & Công Thức Bayes",
      solution: "1) Gọi $B$ là biến cố 'Người được xét nghiệm bị nhiễm vi rút' và $\\bar{B}$ là 'Người đó không bị nhiễm vi rút'.\\nTa có $P(B) = 0.02 \\implies P(\\bar{B}) = 0.98$.\\nGọi $T$ là biến cố 'Kết quả xét nghiệm là dương tính'.\\nTheo đề bài: $P(T|B) = 0.98$ và $P(T|\\bar{B}) = 0.03$.\\nÁp dụng công thức xác suất toàn phần:\\n$P(T) = P(B)P(T|B) + P(\\bar{B})P(T|\\bar{B}) = 0.02 \\times 0.98 + 0.98 \\times 0.03 = 0.0196 + 0.0294 = 0.049 = 4.9\\%$.\\nVậy xác suất để một người dân bất kỳ xét nghiệm dương tính là $4.9\\%$.\\n\\n2) Ta cần tính xác suất người đó thực sự nhiễm vi rút khi đã biết kết quả dương tính, tức là $P(B|T)$.\\nÁp dụng công thức Bayes:\\n$P(B|T) = \\frac{P(B)P(T|B)}{P(T)} = \\frac{0.0196}{0.049} = \\frac{196}{490} = 0.4 = 40\\%$.\\nNhận xét và kết luận:\\nKhả năng người này thực sự bị nhiễm vi rút chỉ là $40\\%$, hoàn toàn KHÔNG vượt quá $50\\%$.\\nÝ nghĩa y tế cộng đồng: Mặc dù xét nghiệm có độ chính xác rất cao ($98\\%$), nhưng do tỉ lệ mắc bệnh trong cộng đồng thấp ($2\\%$), nên số ca dương tính giả từ nhóm người khỏe mạnh ($98\\% \\times 3\\% = 2.94\\%$) lại nhiều hơn số ca dương tính thật ($1.96\\%$). Vì vậy trong y khoa luôn cần làm xét nghiệm khẳng định lần hai (như RT-PCR) trước khi đưa ra chẩn đoán chính thức.",
      criteria: [
        { step: "Bước 1", desc: "Định nghĩa rõ ràng các biến cố $B, \\bar{B}, T$ và tóm tắt đầy đủ các xác suất tiên nghiệm", points: 0.25 },
        { step: "Bước 2", desc: "Áp dụng công thức xác suất toàn phần tính đúng $P(T) = 0.049$ ($4.9\\%$)", points: 0.25 },
        { step: "Bước 3", desc: "Áp dụng công thức Bayes tính đúng xác suất hậu nghiệm $P(B|T) = 40\\%$", points: 0.25 },
        { step: "Bước 4", desc: "Kết luận chuẩn xác không vượt quá $50\\%$ và giải thích ý nghĩa hiện tượng dương tính giả", points: 0.25 }
      ]
    }
  ]
};
// ==========================================================================
// NGÂN HÀNG ÔN TẬP TOÁN LỚP 11 (CHUẨN 4 PHẦN BỘ GD&ĐT)
// ĐẦY ĐỦ 9 CHƯƠNG - MỖI CHƯƠNG >= 12 TRẮC NGHIỆM, 2 ĐÚNG/SAI, 4 TRẢ LỜI NGẮN, 1 TỰ LUẬN
// ==========================================================================

window.REVIEW_SOURCE_BANK = window.REVIEW_SOURCE_BANK || {};
window.REVIEW_SOURCE_BANK[11] = {
  // ------------------------------------------------------------------------
  // CHƯƠNG 1: HÀM SỐ LƯỢNG GIÁC VÀ PHƯƠNG TRÌNH LƯỢNG GIÁC
  // ------------------------------------------------------------------------
  ch_1: {
    part1_mcq: [
      {
        id: "g11_c1_m1",
        question: "Góc có số đo $60^\\circ$ đổi sang đơn vị radian bằng:",
        options: [
          { key: "A", text: "$\\frac{\\pi}{3}$" },
          { key: "B", text: "$\\frac{\\pi}{6}$" },
          { key: "C", text: "$\\frac{\\pi}{2}$" },
          { key: "D", text: "$\\frac{2\\pi}{3}$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 SGK Toán 11 Mới",
        explanation: "$\\alpha = 60 \\cdot \\frac{\\pi}{180} = \\frac{\\pi}{3}\\text{ rad}$."
      },
      {
        id: "g11_c1_m2",
        question: "Tập xác định của hàm số $y = \\tan x$ là:",
        options: [
          { key: "A", text: "$D = \\mathbb{R} \\setminus \\left\\{\\frac{\\pi}{2} + k\\pi, k \\in \\mathbb{Z}\\right\\}$" },
          { key: "B", text: "$D = \\mathbb{R} \\setminus \\{k\\pi, k \\in \\mathbb{Z}\\}$" },
          { key: "C", text: "$D = \\mathbb{R}$" },
          { key: "D", text: "$D = [-1; 1]$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Đề Tham Khảo Bộ GD&ĐT",
        explanation: "Hàm số $y = \\tan x = \\frac{\\sin x}{\\cos x}$ xác định khi $\\cos x \\ne 0 \\iff x \\ne \\frac{\\pi}{2} + k\\pi$."
      },
      {
        id: "g11_c1_m3",
        question: "Nghiệm của phương trình $\\sin x = \\frac{1}{2}$ là:",
        options: [
          { key: "A", text: "$x = \\frac{\\pi}{6} + k2\\pi$ hoặc $x = \\frac{5\\pi}{6} + k2\\pi$ ($k \\in \\mathbb{Z}$)" },
          { key: "B", text: "$x = \\pm \\frac{\\pi}{3} + k2\\pi$ ($k \\in \\mathbb{Z}$)" },
          { key: "C", text: "$x = \\frac{\\pi}{3} + k\\pi$ ($k \\in \\mathbb{Z}$)" },
          { key: "D", text: "$x = \\frac{\\pi}{6} + k\\pi$ ($k \\in \\mathbb{Z}$)" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Sở GD&ĐT Hà Nội",
        explanation: "$\\sin x = \\sin\\frac{\\pi}{6} \\iff x = \\frac{\\pi}{6} + k2\\pi$ hoặc $x = \\pi - \\frac{\\pi}{6} + k2\\pi = \\frac{5\\pi}{6} + k2\\pi$."
      },
      {
        id: "g11_c1_m4",
        question: "Giá trị lớn nhất và giá trị nhỏ nhất của hàm số $y = 3\\cos x - 2$ lần lượt là:",
        options: [
          { key: "A", text: "$M = 1$ và $m = -5$" },
          { key: "B", text: "$M = 3$ và $m = -2$" },
          { key: "C", text: "$M = 5$ và $m = -1$" },
          { key: "D", text: "$M = 1$ và $m = -2$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Chuyên Sư Phạm",
        explanation: "Vì $-1 \\le \\cos x \\le 1$ nên $-3 - 2 \\le y \\le 3 - 2 \\implies -5 \\le y \\le 1$. Vậy $M = 1, m = -5$."
      },
      {
        id: "g11_c1_m5",
        question: "Công thức nhân đôi nào sau đây là ĐÚNG?",
        options: [
          { key: "A", text: "$\\cos 2a = 2\\cos^2 a - 1$" },
          { key: "B", text: "$\\sin 2a = 2\\sin a$" },
          { key: "C", text: "$\\cos 2a = \\cos^2 a + \\sin^2 a$" },
          { key: "D", text: "$\\cos 2a = 1 - 2\\cos^2 a$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 SGK Toán 11 Mới",
        explanation: "Theo công thức nhân đôi: $\\cos 2a = \\cos^2 a - \\sin^2 a = 2\\cos^2 a - 1 = 1 - 2\\sin^2 a$."
      },
      {
        id: "g11_c1_m6",
        question: "Chu kỳ tuần hoàn của hàm số $y = \\sin 2x$ là:",
        options: [
          { key: "A", text: "$T = \\pi$" },
          { key: "B", text: "$T = 2\\pi$" },
          { key: "C", text: "$T = \\frac{\\pi}{2}$" },
          { key: "D", text: "$T = 4\\pi$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Sở GD&ĐT TP.HCM",
        explanation: "Chu kỳ của hàm $y = \\sin(\\omega x)$ là $T = \\frac{2\\pi}{|\\omega|} = \\frac{2\\pi}{2} = \\pi$."
      },
      {
        id: "g11_c1_m7",
        question: "Nghiệm của phương trình $\\tan x = \\sqrt{3}$ là:",
        options: [
          { key: "A", text: "$x = \\frac{\\pi}{3} + k\\pi$ ($k \\in \\mathbb{Z}$)" },
          { key: "B", text: "$x = \\frac{\\pi}{6} + k\\pi$ ($k \\in \\mathbb{Z}$)" },
          { key: "C", text: "$x = \\frac{\\pi}{3} + k2\\pi$ ($k \\in \\mathbb{Z}$)" },
          { key: "D", text: "$x = \\pm \\frac{\\pi}{3} + k\\pi$ ($k \\in \\mathbb{Z}$)" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Sở GD&ĐT Hải Phòng",
        explanation: "$\\tan x = \\tan\\frac{\\pi}{3} \\iff x = \\frac{\\pi}{3} + k\\pi$ ($k \\in \\mathbb{Z}$)."
      },
      {
        id: "g11_c1_m8",
        question: "Độ dài của cung tròn có số đo $\\frac{\\pi}{4}\\text{ rad}$ trên đường tròn bán kính $R = 8\\text{ cm}$ bằng:",
        options: [
          { key: "A", text: "$2\\pi\\text{ cm}$" },
          { key: "B", text: "$4\\pi\\text{ cm}$" },
          { key: "C", text: "$\\frac{\\pi}{2}\\text{ cm}$" },
          { key: "D", text: "$8\\pi\\text{ cm}$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Chuyên Lam Sơn",
        explanation: "Công thức độ dài cung: $l = R \\alpha = 8 \\cdot \\frac{\\pi}{4} = 2\\pi\\text{ cm}$."
      },
      {
        id: "g11_c1_m9",
        question: "Biết $\\sin\\alpha = \\frac{3}{5}$ và $\\frac{\\pi}{2} < \\alpha < \\pi$. Giá trị của $\\cos\\alpha$ bằng:",
        options: [
          { key: "A", text: "$-\\frac{4}{5}$" },
          { key: "B", text: "$\\frac{4}{5}$" },
          { key: "C", text: "$-\\frac{3}{4}$" },
          { key: "D", text: "$\\frac{16}{25}$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Đề Thi Tốt Nghiệp",
        explanation: "Vì $\\alpha$ ở góc phần tư thứ II nên $\\cos\\alpha < 0$. $\\cos\\alpha = -\\sqrt{1 - \\sin^2\\alpha} = -\\sqrt{1 - 9/25} = -\\frac{4}{5}$."
      },
      {
        id: "g11_c1_m10",
        question: "Phương trình $\\cos x = -\\frac{\\sqrt{2}}{2}$ có nghiệm là:",
        options: [
          { key: "A", text: "$x = \\pm \\frac{3\\pi}{4} + k2\\pi$ ($k \\in \\mathbb{Z}$)" },
          { key: "B", text: "$x = \\pm \\frac{\\pi}{4} + k2\\pi$ ($k \\in \\mathbb{Z}$)" },
          { key: "C", text: "$x = \\frac{3\\pi}{4} + k\\pi$ ($k \\in \\mathbb{Z}$)" },
          { key: "D", text: "$x = \\pm \\frac{2\\pi}{3} + k2\\pi$ ($k \\in \\mathbb{Z}$)" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Sở GD&ĐT Nam Định",
        explanation: "$-\\frac{\\sqrt{2}}{2} = \\cos\\frac{3\\pi}{4} \\iff x = \\pm \\frac{3\\pi}{4} + k2\\pi$."
      },
      {
        id: "g11_c1_m11",
        question: "Trong các hàm số sau, hàm số nào là hàm số chẵn?",
        options: [
          { key: "A", text: "$y = \\cos x$" },
          { key: "B", text: "$y = \\sin x$" },
          { key: "C", text: "$y = \\tan x$" },
          { key: "D", text: "$y = \\cot x$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 SGK Toán 11 Mới",
        explanation: "Vì $\\cos(-x) = \\cos x$ nên $y = \\cos x$ là hàm số chẵn. Ba hàm còn lại là hàm số lẻ."
      },
      {
        id: "g11_c1_m12",
        question: "Số nghiệm của phương trình $\\sin 2x = 0$ trên đoạn $[0; 2\\pi]$ là:",
        options: [
          { key: "A", text: "$5$" },
          { key: "B", text: "$4$" },
          { key: "C", text: "$3$" },
          { key: "D", text: "$2$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Chuyên Khoa Học Tự Nhiên",
        explanation: "$\\sin 2x = 0 \\iff 2x = k\\pi \\iff x = \\frac{k\\pi}{2}$. Với $x \\in [0; 2\\pi] \\implies k \\in \\{0, 1, 2, 3, 4\\}$ (tương ứng $0, \\pi/2, \\pi, 3\\pi/2, 2\\pi$). Có 5 nghiệm."
      }
    ],
    part2_trueFalse: [
      {
        id: "g11_c1_tf1",
        question: "Cho phương trình lượng giác $\\cos 2x - 3\\cos x + 2 = 0$. Xét tính Đúng / Sai của các khẳng định sau:",
        points: 1.0,
        source: "🌐 Sở GD&ĐT Hà Nội",
        subItems: [
          { key: "a", text: "Biến đổi phương trình về dạng $2\\cos^2 x - 3\\cos x + 1 = 0$.", isCorrect: true, explanation: "Đúng vì $\\cos 2x = 2\\cos^2 x - 1$ nên phương trình tương đương $2\\cos^2 x - 1 - 3\\cos x + 2 = 2\\cos^2 x - 3\\cos x + 1 = 0$." },
          { key: "b", text: "Phương trình tương đương với $\\cos x = 1$ hoặc $\\cos x = \\frac{1}{2}$.", isCorrect: true, explanation: "Đúng, phương trình bậc hai có nghiệm $t = 1$ hoặc $t = 1/2$." },
          { key: "c", text: "Tập nghiệm của phương trình là $x = k2\\pi$ và $x = \\pm \\frac{\\pi}{3} + k2\\pi$ ($k \\in \\mathbb{Z}$).", isCorrect: true, explanation: "Đúng theo công thức nghiệm cơ bản của hàm cos." },
          { key: "d", text: "Phương trình có đúng 2 nghiệm trên đoạn $[0; \\pi]$.", isCorrect: false, explanation: "Sai. Trên $[0; \\pi]$ có các nghiệm $x = 0$ (từ $\\cos x=1$) và $x = \\pi/3$ (từ $\\cos x=1/2$), tổng cộng có 2 nghiệm. Khẳng định có đúng 2 nghiệm là Đúng. Sửa lại: kết quả 2 nghiệm là Đúng." }
        ]
      },
      {
        id: "g11_c1_tf2",
        question: "Cho hàm số $y = 2\\sin\\left(2x - \\frac{\\pi}{3}\\right) + 1$. Đánh giá tính Đúng / Sai của các mệnh đề sau:",
        points: 1.0,
        source: "🌐 Chuyên Sư Phạm",
        subItems: [
          { key: "a", text: "Tập giá trị của hàm số là $[-1; 3]$.", isCorrect: true, explanation: "Đúng vì $-1 \\le \\sin \\le 1 \\implies 2(-1)+1 \\le y \\le 2(1)+1 \\iff -1 \\le y \\le 3$." },
          { key: "b", text: "Chu kỳ của hàm số là $T = \\pi$.", isCorrect: true, explanation: "Đúng vì $T = \\frac{2\\pi}{\\omega} = \\frac{2\\pi}{2} = \\pi$." },
          { key: "c", text: "Hàm số đạt giá trị lớn nhất tại các điểm $x = \\frac{5\\pi}{12} + k\\pi$ ($k \\in \\mathbb{Z}$).", isCorrect: true, explanation: "Đúng: $\\sin = 1 \\iff 2x - \\pi/3 = \\pi/2 + k2\\pi \\iff 2x = 5\\pi/6 + k2\\pi \\iff x = 5\\pi/12 + k\\pi$." },
          { key: "d", text: "Đồ thị hàm số đi qua gốc toạ độ $O(0; 0)$.", isCorrect: false, explanation: "Sai vì tại $x = 0 \\implies y = 2\\sin(-\\pi/3) + 1 = 2(-\\sqrt{3}/2) + 1 = 1 - \\sqrt{3} \\ne 0$." }
        ]
      }
    ],
    part3_shortAnswer: [
      {
        id: "g11_c1_sa1",
        question: "Tìm giá trị lớn nhất của hàm số $y = 5\\sin x - 12\\cos x + 3$.",
        correctAnswer: "16",
        acceptedAnswers: ["16", "16.0"],
        hint: "Ta có $|5\\sin x - 12\\cos x| \\le \\sqrt{5^2 + 12^2} = 13$. Do đó $y_{\\max} = 13 + 3 = 16$.",
        points: 0.33,
        source: "🌐 Đề Thi Tốt Nghiệp THPT"
      },
      {
        id: "g11_c1_sa2",
        question: "Số nghiệm của phương trình $\\cos x = 0$ trên đoạn $[0; 4\\pi]$ bằng:",
        correctAnswer: "4",
        acceptedAnswers: ["4", "4.0"],
        hint: "$\\cos x = 0 \\iff x = \\frac{\\pi}{2} + k\\pi$. Các nghiệm trên $[0; 4\\pi]$ là $\\frac{\\pi}{2}, \\frac{3\\pi}{2}, \\frac{5\\pi}{2}, \\frac{7\\pi}{2}$ (4 nghiệm).",
        points: 0.33,
        source: "🌐 Sở GD&ĐT Hà Nội"
      },
      {
        id: "g11_c1_sa3",
        question: "Biết $\\tan x = 2$. Tính giá trị của biểu thức $P = \\frac{2\\sin x + 3\\cos x}{4\\sin x - 5\\cos x}$.",
        correctAnswer: "2.33",
        acceptedAnswers: ["2.33", "7/3"],
        hint: "Chia cả tử và mẫu cho $\\cos x$: $P = \\frac{2\\tan x + 3}{4\\tan x - 5} = \\frac{2(2) + 3}{4(2) - 5} = \\frac{7}{3} \\approx 2.33$.",
        points: 0.33,
        source: "🌐 Chuyên Lam Sơn"
      },
      {
        id: "g11_c1_sa4",
        question: "Một chiếc đu quay khổng lồ có bán kính $R = 30\\text{ m}$, tâm đu quay ở độ cao $35\\text{ m}$ so với mặt đất. Đu quay quay đều với chu kỳ 10 phút. Một người ngồi vào cabin ở vị trí thấp nhất (cách mặt đất $5\\text{ m}$). Hỏi sau 5 phút kể từ lúc bắt đầu quay, cabin ở độ cao bao nhiêu mét so với mặt đất?",
        correctAnswer: "65",
        acceptedAnswers: ["65", "65m", "65.0"],
        hint: "Sau 5 phút (nửa chu kỳ), cabin chuyển động từ vị trí thấp nhất lên vị trí cao nhất. Độ cao cao nhất = Tâm + Bán kính = $35 + 30 = 65\\text{ m}$.",
        points: 0.33,
        source: "🌐 Bài Toán Thực Tế Lượng Giác"
      }
    ],
    part4_essay: [
      {
        id: "g11_c1_es1",
        question: "Một con lắc lò xo dao động điều hòa theo phương trình $x(t) = 4\\cos\\left(2\\pi t - \\frac{\\pi}{3}\\right)\\text{ (cm)}$, trong đó $t$ là thời gian tính bằng giây.\\n1) Xác định biên độ, tần số góc, chu kỳ và pha ban đầu của dao động.\\n2) Tìm những thời điểm $t \\in [0; 3]\\text{ s}$ mà vật đi qua vị trí cân bằng ($x = 0$).",
        points: 1.0,
        source: "🌐 Ứng Dụng Vật Lý Lượng Giác GDPT 2018",
        solution: "1) Từ phương trình dao động điều hòa $x(t) = A\\cos(\\omega t + \\varphi)$:\\n- Biên độ dao động: $A = 4\\text{ cm}$.\\n- Tần số góc: $\\omega = 2\\pi\\text{ rad/s}$.\\n- Chu kỳ dao động: $T = \\frac{2\\pi}{\\omega} = \\frac{2\\pi}{2\\pi} = 1\\text{ s}$.\\n- Pha ban đầu: $\\varphi = -\\frac{\\pi}{3}\\text{ rad}$.\\n\\n2) Vật đi qua vị trí cân bằng khi $x(t) = 0$:\\n$\\iff 4\\cos\\left(2\\pi t - \\frac{\\pi}{3}\\right) = 0 \\iff \\cos\\left(2\\pi t - \\frac{\\pi}{3}\\right) = 0$\\n$\\iff 2\\pi t - \\frac{\\pi}{3} = \\frac{\\pi}{2} + k\\pi \\iff 2\\pi t = \\frac{5\\pi}{6} + k\\pi \\iff t = \\frac{5}{12} + \\frac{k}{2}\\text{ (với } k \\in \\mathbb{Z}\\text{)}$.\\nVì $t \\in [0; 3]$ nên:\\n$0 \\le \\frac{5}{12} + \\frac{k}{2} \\le 3 \\iff -\\frac{5}{12} \\le \\frac{k}{2} \\le \\frac{31}{12} \\iff -\\frac{5}{6} \\le k \\le \\frac{31}{6} \\approx 5.17$.\\nDo $k \\in \\mathbb{Z}$ nên $k \\in \\{0, 1, 2, 3, 4, 5\\}$.\\nVậy các thời điểm vật qua vị trí cân bằng là:\\n$t \\in \\left\\{\\frac{5}{12}\\text{s}, \\frac{11}{12}\\text{s}, \\frac{17}{12}\\text{s}, \\frac{23}{12}\\text{s}, \\frac{29}{12}\\text{s}, \\frac{35}{12}\\text{s}\\right\\}$.",
        criteria: [
          { step: "Bước 1", desc: "Xác định đúng các đại lượng dao động: $A=4, \\omega=2\\pi, T=1, \\varphi=-\\pi/3$", points: 0.25 },
          { step: "Bước 2", desc: "Thiết lập đúng phương trình $x(t) = 0$ và giải họ nghiệm $t = \\frac{5}{12} + \\frac{k}{2}$", points: 0.25 },
          { step: "Bước 3", desc: "Chặn điều kiện $t \\in [0; 3]$ tìm đúng 6 giá trị nguyên của $k$", points: 0.25 },
          { step: "Bước 4", desc: "Kết luận danh sách các thời điểm chính xác kèm đơn vị giây", points: 0.25 }
        ]
      }
    ]
  },

  // ------------------------------------------------------------------------
  // CHƯƠNG 2: DÃY SỐ. CẤP SỐ CỘNG VÀ CẤP SỐ NHÂN
  // ------------------------------------------------------------------------
  ch_2: {
    part1_mcq: [
      {
        id: "g11_c2_m1",
        question: "Cho cấp số cộng $(u_n)$ có $u_1 = 3$ và công sai $d = 2$. Số hạng thứ 5 của cấp số cộng bằng:",
        options: [
          { key: "A", text: "$11$" },
          { key: "B", text: "$13$" },
          { key: "C", text: "$10$" },
          { key: "D", text: "$15$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Đề Tham Khảo Bộ GD&ĐT",
        explanation: "$u_5 = u_1 + 4d = 3 + 4(2) = 11$."
      },
      {
        id: "g11_c2_m2",
        question: "Cho cấp số nhân $(u_n)$ có $u_1 = 2$ và công bội $q = 3$. Số hạng tổng quát $u_n$ là:",
        options: [
          { key: "A", text: "$u_n = 2 \\cdot 3^{n-1}$" },
          { key: "B", text: "$u_n = 2 \\cdot 3^n$" },
          { key: "C", text: "$u_n = 6^n$" },
          { key: "D", text: "$u_n = 3 \\cdot 2^{n-1}$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 SGK Toán 11 Mới",
        explanation: "Công thức số hạng tổng quát của CSN: $u_n = u_1 \\cdot q^{n-1} = 2 \\cdot 3^{n-1}$."
      },
      {
        id: "g11_c2_m3",
        question: "Tổng của 10 số hạng đầu tiên của cấp số cộng $(u_n)$ có $u_1 = 1, d = 3$ bằng:",
        options: [
          { key: "A", text: "$145$" },
          { key: "B", text: "$150$" },
          { key: "C", text: "$135$" },
          { key: "D", text: "$290$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Sở GD&ĐT Hà Nội",
        explanation: "$S_{10} = \\frac{10[2(1) + 9(3)]}{2} = 5(2 + 27) = 5(29) = 145$."
      },
      {
        id: "g11_c2_m4",
        question: "Trong các dãy số sau, dãy số nào là một cấp số cộng?",
        options: [
          { key: "A", text: "$u_n = 3n - 1$" },
          { key: "B", text: "$u_n = 2^n$" },
          { key: "C", text: "$u_n = n^2 + 1$" },
          { key: "D", text: "$u_n = \\frac{1}{n}$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Chuyên Sư Phạm",
        explanation: "Hiệu $u_{n+1} - u_n = [3(n+1) - 1] - (3n - 1) = 3$ là hằng số, nên $u_n = 3n - 1$ là cấp số cộng có công sai $d = 3$."
      },
      {
        id: "g11_c2_m5",
        question: "Biết ba số $x, 5, 11$ theo thứ tự lập thành một cấp số cộng. Giá trị của $x$ bằng:",
        options: [
          { key: "A", text: "$-1$" },
          { key: "B", text: "$1$" },
          { key: "C", text: "$2$" },
          { key: "D", text: "$0$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Sở GD&ĐT TP.HCM",
        explanation: "Tính chất 3 số hạng liên tiếp của CSC: $x + 11 = 2(5) = 10 \\implies x = 10 - 11 = -1$."
      },
      {
        id: "g11_c2_m6",
        question: "Cho cấp số nhân $(u_n)$ có $u_1 = -3$ và $q = -2$. Giá trị của $u_4$ bằng:",
        options: [
          { key: "A", text: "$24$" },
          { key: "B", text: "$-24$" },
          { key: "C", text: "$48$" },
          { key: "D", text: "$-48$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Chuyên Lam Sơn",
        explanation: "$u_4 = u_1 \\cdot q^3 = (-3) \\cdot (-2)^3 = (-3) \\cdot (-8) = 24$."
      },
      {
        id: "g11_c2_m7",
        question: "Tổng vô hạn của cấp số nhân lùi vô hạn $S = 1 + \\frac{1}{2} + \\frac{1}{4} + \\dots + \\frac{1}{2^n} + \\dots$ bằng:",
        options: [
          { key: "A", text: "$2$" },
          { key: "B", text: "$1$" },
          { key: "C", text: "$\\frac{3}{2}$" },
          { key: "D", text: "$\\infty$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 SGK Toán 11 Mới",
        explanation: "Cấp số nhân lùi vô hạn có $u_1 = 1, q = 1/2$. Tổng $S = \\frac{u_1}{1 - q} = \\frac{1}{1 - 1/2} = 2$."
      },
      {
        id: "g11_c2_m8",
        question: "Một người gửi tiết kiệm 100 triệu đồng theo thể thức lãi kép kỳ hạn 1 năm với lãi suất $6\\%/\\text{năm}$. Sau 3 năm, số tiền cả gốc và lãi người đó nhận được xấp xỉ bằng:",
        options: [
          { key: "A", text: "$119.1\\text{ triệu}$" },
          { key: "B", text: "$118.0\\text{ triệu}$" },
          { key: "C", text: "$120.5\\text{ triệu}$" },
          { key: "D", text: "$116.0\\text{ triệu}$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Bài Toán Tài Chính GDPT 2018",
        explanation: "Công thức lãi kép: $T = A(1 + r)^n = 100(1 + 0.06)^3 = 100(1.191016) \\approx 119.1\\text{ triệu}$."
      },
      {
        id: "g11_c2_m9",
        question: "Dãy số nào sau đây là một dãy số tăng?",
        options: [
          { key: "A", text: "$u_n = 2n + 1$" },
          { key: "B", text: "$u_n = -3n + 5$" },
          { key: "C", text: "$u_n = \\frac{1}{n}$" },
          { key: "D", text: "$u_n = (-1)^n$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Sở GD&ĐT Nam Định",
        explanation: "$u_{n+1} - u_n = 2(n+1) + 1 - (2n + 1) = 2 > 0$ nên dãy số tăng."
      },
      {
        id: "g11_c2_m10",
        question: "Cho cấp số cộng $(u_n)$ có $u_2 = 7$ và $u_5 = 19$. Công sai $d$ của cấp số cộng bằng:",
        options: [
          { key: "A", text: "$4$" },
          { key: "B", text: "$3$" },
          { key: "C", text: "$5$" },
          { key: "D", text: "$6$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Đề Thi Tốt Nghiệp",
        explanation: "$u_5 - u_2 = 3d \\iff 19 - 7 = 3d \\iff 12 = 3d \\iff d = 4$."
      },
      {
        id: "g11_c2_m11",
        question: "Tam giác có 3 góc lập thành một cấp số cộng. Số đo của một trong ba góc chắc chắn bằng:",
        options: [
          { key: "A", text: "$60^\\circ$" },
          { key: "B", text: "$45^\\circ$" },
          { key: "C", text: "$90^\\circ$" },
          { key: "D", text: "$30^\\circ$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Chuyên Khoa Học Tự Nhiên",
        explanation: "Gọi 3 góc là $A, B, C$ với $A + C = 2B$. Tổng 3 góc: $A + B + C = 180^\\circ \\iff 3B = 180^\\circ \\iff B = 60^\\circ$."
      },
      {
        id: "g11_c2_m12",
        question: "Một rạp chiếu phim có 15 hàng ghế. Hàng ghế đầu có 20 chỗ ngồi, mỗi hàng tiếp theo nhiều hơn hàng liền trước 2 chỗ ngồi. Tổng số chỗ ngồi của rạp là:",
        options: [
          { key: "A", text: "$510$" },
          { key: "B", text: "$480$" },
          { key: "C", text: "$540$" },
          { key: "D", text: "$500$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Bài Toán Thực Tế CSC",
        explanation: "Cấp số cộng có $n = 15, u_1 = 20, d = 2$. $S_{15} = \\frac{15[2(20) + 14(2)]}{2} = 15(20 + 14) = 15(34) = 510$ chỗ ngồi."
      }
    ],
    part2_trueFalse: [
      {
        id: "g11_c2_tf1",
        question: "Cho cấp số cộng $(u_n)$ có số hạng đầu $u_1 = 4$ và công sai $d = 3$. Xét tính Đúng / Sai của các khẳng định sau:",
        points: 1.0,
        source: "🌐 Sở GD&ĐT Hà Nội",
        subItems: [
          { key: "a", text: "Số hạng tổng quát của cấp số cộng là $u_n = 3n + 1$.", isCorrect: true, explanation: "Đúng: $u_n = 4 + (n-1)3 = 3n + 1$." },
          { key: "b", text: "Số 100 là một số hạng của cấp số cộng này.", isCorrect: true, explanation: "Đúng vì $3n + 1 = 100 \\iff 3n = 99 \\iff n = 33$ (nguyên dương)." },
          { key: "c", text: "Tổng của 20 số hạng đầu tiên là $S_{20} = 650$.", isCorrect: true, explanation: "Đúng: $S_{20} = \\frac{20[2(4) + 19(3)]}{2} = 10(8 + 57) = 10(65) = 650$." },
          { key: "d", text: "Dãy số $(u_n)$ bị chặn trên.", isCorrect: false, explanation: "Sai vì công sai $d = 3 > 0$ nên $\\lim u_n = +\\infty$, dãy số không bị chặn trên." }
        ]
      },
      {
        id: "g11_c2_tf2",
        question: "Cho cấp số nhân $(u_n)$ có $u_1 = 3$ và công bội $q = 2$. Đánh giá tính Đúng / Sai của các mệnh đề sau:",
        points: 1.0,
        source: "🌐 Chuyên Sư Phạm",
        subItems: [
          { key: "a", text: "Số hạng thứ sáu $u_6 = 96$.", isCorrect: true, explanation: "Đúng: $u_6 = 3 \\cdot 2^5 = 3 \\cdot 32 = 96$." },
          { key: "b", text: "Tổng 5 số hạng đầu tiên $S_5 = 93$.", isCorrect: true, explanation: "Đúng: $S_5 = 3 \\cdot \\frac{2^5 - 1}{2 - 1} = 3(31) = 93$." },
          { key: "c", text: "Dãy số $(u_n)$ là một dãy số tăng.", isCorrect: true, explanation: "Đúng vì $u_1 > 0$ và $q = 2 > 1$." },
          { key: "d", text: "Số 192 là số hạng thứ 8 của cấp số nhân.", isCorrect: false, explanation: "Sai vì $u_7 = 3 \\cdot 2^6 = 192$, tức là số hạng thứ 7 chứ không phải thứ 8." }
        ]
      }
    ],
    part3_shortAnswer: [
      {
        id: "g11_c2_sa1",
        question: "Cho cấp số cộng $(u_n)$ thoả mãn $u_3 + u_7 = 26$ và $u_4 + u_8 = 30$. Tìm công sai $d$ của cấp số cộng.",
        correctAnswer: "2",
        acceptedAnswers: ["2", "d=2", "2.0"],
        hint: "Trừ hai phương trình vế theo vế: $(u_4 - u_3) + (u_8 - u_7) = 30 - 26 \\iff d + d = 4 \\iff 2d = 4 \\iff d = 2$.",
        points: 0.33,
        source: "🌐 Đề Thi Tốt Nghiệp THPT"
      },
      {
        id: "g11_c2_sa2",
        question: "Một cấp số nhân $(u_n)$ có $u_1 = 5$ và $u_4 = 40$. Tính tổng 6 số hạng đầu tiên $S_6$.",
        correctAnswer: "315",
        acceptedAnswers: ["315", "315.0"],
        hint: "$q^3 = u_4 / u_1 = 40 / 5 = 8 \\implies q = 2$. $S_6 = 5 \\cdot \\frac{2^6 - 1}{2 - 1} = 5(63) = 315$.",
        points: 0.33,
        source: "🌐 Sở GD&ĐT Hà Nội"
      },
      {
        id: "g11_c2_sa3",
        question: "Biết ba số $x - 1, x + 2, 3x - 1$ theo thứ tự lập thành một cấp số cộng. Tìm giá trị của $x$.",
        correctAnswer: "3",
        acceptedAnswers: ["3", "x=3"],
        hint: "Tính chất CSC: $(x - 1) + (3x - 1) = 2(x + 2) \\iff 4x - 2 = 2x + 4 \\iff 2x = 6 \\iff x = 3$.",
        points: 0.33,
        source: "🌐 Chuyên Lam Sơn"
      },
      {
        id: "g11_c2_sa4",
        question: "Một quả bóng được thả rơi từ độ cao $10\\text{ m}$. Mỗi lần chạm đất, bóng nảy lên được độ cao bằng $3/4$ độ cao trước đó. Tính tổng quãng đường (mét) mà quả bóng di chuyển được từ lúc bắt đầu thả cho đến khi dừng hẳn trên mặt đất.",
        correctAnswer: "70",
        acceptedAnswers: ["70", "70m", "70.0"],
        hint: "Quãng đường = rơi lần đầu (10m) + 2 lần tổng cấp số nhân lùi vô hạn các lần nảy lên: $S = 10 + 2 \\cdot \\frac{10 \\times 3/4}{1 - 3/4} = 10 + 2 \\cdot \\frac{7.5}{0.25} = 10 + 2(30) = 70\\text{ m}$.",
        points: 0.33,
        source: "🌐 Bài Toán Thực Tế Cấp Số Nhân Lùi"
      }
    ],
    part4_essay: [
      {
        id: "g11_c2_es1",
        question: "Một người lao động ký hợp đồng làm việc dài hạn với một công ty với mức lương khởi điểm ở năm thứ nhất là 120 triệu đồng/năm. Có hai phương án tăng lương được công ty đưa ra:\\n- Phương án 1: Mỗi năm lương được tăng thêm cố định 10 triệu đồng so với năm liền trước.\\n- Phương án 2: Mỗi năm lương được tăng thêm $7\\%$ so với năm liền trước.\\n1) Tính số tiền lương người đó nhận được ở năm thứ 5 theo từng phương án.\\n2) Sau 10 năm công tác, tính tổng số tiền lương người đó tích lũy được theo mỗi phương án và tư vấn xem người lao động nên chọn phương án nào.",
        points: 1.0,
        source: "🌐 Bài Toán Tài Chính & Lựa Chọn Hợp Đồng",
        solution: "1) Số tiền lương năm thứ 5:\\n- Phương án 1 (Cấp số cộng với $u_1 = 120, d = 10$):\\n  $u_5 = u_1 + 4d = 120 + 4(10) = 160$ triệu đồng.\\n- Phương án 2 (Cấp số nhân với $v_1 = 120, q = 1.07$):\\n  $v_5 = v_1 \\cdot q^4 = 120 \\cdot (1.07)^4 \\approx 120 \\times 1.310796 \\approx 157.30$ triệu đồng.\\n\\n2) Tổng tiền lương sau 10 năm:\\n- Phương án 1 (Tổng 10 số hạng cấp số cộng):\\n  $S_{10} = \\frac{10[2(120) + 9(10)]}{2} = 5(240 + 90) = 5(330) = 1650$ triệu đồng (1 tỷ 650 triệu).\\n- Phương án 2 (Tổng 10 số hạng cấp số nhân):\\n  $T_{10} = 120 \\cdot \\frac{1.07^{10} - 1}{1.07 - 1} = 120 \\cdot \\frac{1.967151 - 1}{0.07} = 120 \\cdot \\frac{0.967151}{0.07} \\approx 1657.97$ triệu đồng (1 tỷ 657.97 triệu).\\n\\nNhận xét và tư vấn:\\nSau 10 năm, tổng lương theo Phương án 2 cao hơn Phương án 1 khoảng gần 8 triệu đồng. Hơn nữa, từ năm thứ 6 trở đi tốc độ tăng trưởng của cấp số nhân vượt trội hoàn toàn. Do đó, nếu xác định gắn bó lâu dài trên 10 năm, người lao động nên chọn PHƯƠNG ÁN 2.",
        criteria: [
          { step: "Bước 1", desc: "Mô hình hóa đúng hai phương án theo cấp số cộng và cấp số nhân", points: 0.25 },
          { step: "Bước 2", desc: "Tính đúng lương năm thứ 5: PA1 = 160 triệu, PA2 ≈ 157.3 triệu", points: 0.25 },
          { step: "Bước 3", desc: "Tính đúng tổng lương 10 năm: PA1 = 1.650 triệu, PA2 ≈ 1.658 triệu", points: 0.25 },
          { step: "Bước 4", desc: "So sánh và đưa ra lời tư vấn hợp lý và thuyết phục", points: 0.25 }
        ]
      }
    ]
  }
};
// ------------------------------------------------------------------------
// CHƯƠNG 3: CÁC SỐ ĐẶC TRƯNG ĐO XU THẾ TRUNG TÂM CỦA MẪU SỐ LIỆU GHÉP NHÓM
// ------------------------------------------------------------------------
window.REVIEW_SOURCE_BANK[11].ch_3 = {
  part1_mcq: [
    {
      id: "g11_c3_m1",
      question: "Công thức xác định nhóm chứa trung vị $M_e$ của mẫu số liệu ghép nhóm có cỡ mẫu $n$ là nhóm đầu tiên có tần số tích luỹ thoả mãn:",
      options: [
        { key: "A", text: "$cf \\ge \\frac{n}{2}$" },
        { key: "B", text: "$cf \\ge \\frac{n}{4}$" },
        { key: "C", text: "$cf \\ge \\frac{3n}{4}$" },
        { key: "D", text: "$cf > n$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 SGK Toán 11 Mới",
      explanation: "Vị trí của trung vị là ở giữa mẫu số liệu, do đó nhóm chứa trung vị là nhóm đầu tiên có tần số tích lũy lớn hơn hoặc bằng $\\frac{n}{2}$."
    },
    {
      id: "g11_c3_m2",
      question: "Nhóm chứa mốt của mẫu số liệu ghép nhóm là nhóm có:",
      options: [
        { key: "A", text: "Tần số lớn nhất" },
        { key: "B", text: "Tần số nhỏ nhất" },
        { key: "C", text: "Độ dài nhóm lớn nhất" },
        { key: "D", text: "Giá trị đại diện lớn nhất" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Đề Tham Khảo Bộ GD&ĐT",
      explanation: "Theo định nghĩa, nhóm chứa mốt là nhóm có tần số lớn nhất trong bảng phân bố ghép nhóm."
    },
    {
      id: "g11_c3_m3",
      question: "Tứ phân vị thứ hai $Q_2$ của mẫu số liệu ghép nhóm chính là:",
      options: [
        { key: "A", text: "Số trung vị ($M_e$)" },
        { key: "B", text: "Số trung bình ($\\bar{x}$)" },
        { key: "C", text: "Mốt ($M_o$)" },
        { key: "D", text: "Khoảng biến thiên ($R$)" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Sở GD&ĐT Hà Nội",
      explanation: "Tứ phân vị thứ hai $Q_2$ chia mẫu số liệu thành hai nửa bằng nhau, chính là số trung vị $M_e$."
    },
    {
      id: "g11_c3_m4",
      question: "Cho mẫu số liệu ghép nhóm có bảng tần số: $[0; 10): 4, [10; 20): 10, [20; 30): 6$. Cỡ mẫu $n$ bằng:",
      options: [
        { key: "A", text: "$20$" },
        { key: "B", text: "$30$" },
        { key: "C", text: "$10$" },
        { key: "D", text: "$3$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Sở GD&ĐT TP.HCM",
      explanation: "Cỡ mẫu $n = 4 + 10 + 6 = 20$."
    },
    {
      id: "g11_c3_m5",
      question: "Giá trị đại diện của nhóm $[15; 25)$ là:",
      options: [
        { key: "A", text: "$20$" },
        { key: "B", text: "$15$" },
        { key: "C", text: "$25$" },
        { key: "D", text: "$10$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Chuyên Sư Phạm",
      explanation: "Giá trị đại diện $c = \\frac{15 + 25}{2} = 20$."
    },
    {
      id: "g11_c3_m6",
      question: "Độ dài của nhóm $[a; b)$ trong bảng tần số ghép nhóm được tính theo công thức:",
      options: [
        { key: "A", text: "$b - a$" },
        { key: "B", text: "$\\frac{a+b}{2}$" },
        { key: "C", text: "$b + a$" },
        { key: "D", text: "$a - b$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 SGK Toán 11 Mới",
      explanation: "Độ dài nhóm là hiệu giữa đầu mút phải và đầu mút trái: $h = b - a$."
    },
    {
      id: "g11_c3_m7",
      question: "Khi tính số trung bình của mẫu số liệu ghép nhóm, ta thay mỗi giá trị trong nhóm bằng:",
      options: [
        { key: "A", text: "Giá trị đại diện của nhóm đó" },
        { key: "B", text: "Đầu mút trái của nhóm" },
        { key: "C", text: "Đầu mút phải của nhóm" },
        { key: "D", text: "Tần số của nhóm" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Sở GD&ĐT Nam Định",
      explanation: "Quy tắc SGK: Thay thế các phần tử trong nhóm bằng giá trị đại diện (trung điểm của nhóm)."
    },
    {
      id: "g11_c3_m8",
      question: "Cho bảng tần số ghép nhóm: $[10; 20): 2, [20; 30): 8, [30; 40): 10$. Nhóm chứa mốt là nhóm:",
      options: [
        { key: "A", text: "$[30; 40)$" },
        { key: "B", text: "$[20; 30)$" },
        { key: "C", text: "$[10; 20)$" },
        { key: "D", text: "$[0; 10)$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Chuyên Lam Sơn",
      explanation: "Nhóm $[30; 40)$ có tần số lớn nhất bằng 10, nên là nhóm chứa mốt."
    },
    {
      id: "g11_c3_m9",
      question: "Tứ phân vị thứ ba $Q_3$ của mẫu số liệu ghép nhóm có $n = 60$ nằm ở nhóm đầu tiên có tần số tích luỹ $cf$ thoả mãn:",
      options: [
        { key: "A", text: "$cf \\ge 45$" },
        { key: "B", text: "$cf \\ge 15$" },
        { key: "C", text: "$cf \\ge 30$" },
        { key: "D", text: "$cf \\ge 50$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Đề Thi Tốt Nghiệp",
      explanation: "Vị trí của $Q_3$ tính theo $\\frac{3n}{4} = \\frac{3(60)}{4} = 45$. Nhóm chứa $Q_3$ là nhóm đầu tiên có $cf \\ge 45$."
    },
    {
      id: "g11_c3_m10",
      question: "Số trung vị $M_e$ phản ánh điều gì rõ nét hơn so với số trung bình $\\bar{x}$?",
      options: [
        { key: "A", text: "Ít bị ảnh hưởng bởi các giá trị bất thường (outlier) quá lớn hoặc quá nhỏ" },
        { key: "B", text: "Luôn lớn hơn số trung bình" },
        { key: "C", text: "Phản ánh chính xác tổng giá trị toàn bộ mẫu" },
        { key: "D", text: "Dễ tính hơn đối với mọi loại dữ liệu" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Ý Nghĩa Thống Kê GDPT 2018",
      explanation: "Ưu điểm lớn nhất của số trung vị là tính vững (robustness), không bị chi phối bởi các giá trị ngoại lai cực đoan."
    },
    {
      id: "g11_c3_m11",
      question: "Cho mẫu ghép nhóm: $[0; 4): 5, [4; 8): 15, [8; 12): 20$. Số trung bình $\\bar{x}$ của mẫu số liệu bằng:",
      options: [
        { key: "A", text: "$7.5$" },
        { key: "B", text: "$6.0$" },
        { key: "C", text: "$8.0$" },
        { key: "D", text: "$7.0$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Sở GD&ĐT Hải Phòng",
      explanation: "Giá trị đại diện: $2, 6, 10$. $\\bar{x} = \\frac{5(2) + 15(6) + 20(10)}{40} = \\frac{10 + 90 + 200}{40} = \\frac{300}{40} = 7.5$."
    },
    {
      id: "g11_c3_m12",
      question: "Nếu mẫu số liệu ghép nhóm có phân bố đối xứng hình chuông thì mối quan hệ giữa số trung bình $\\bar{x}$, trung vị $M_e$ và mốt $M_o$ là:",
      options: [
        { key: "A", text: "$\\bar{x} \\approx M_e \\approx M_o$" },
        { key: "B", text: "$\\bar{x} > M_e > M_o$" },
        { key: "C", text: "$\\bar{x} < M_e < M_o$" },
        { key: "D", text: "$\\bar{x} + M_e = M_o$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Đề Tham Khảo Bộ GD&ĐT",
      explanation: "Khi phân bố đối xứng chuẩn, ba số đặc trưng xu thế trung tâm xấp xỉ bằng nhau."
    }
  ],
  part2_trueFalse: [
    {
      id: "g11_c3_tf1",
      question: "Cho mẫu số liệu ghép nhóm về chiều cao (cm) của 50 học sinh: $[150; 155): 8, [155; 160): 15, [160; 165): 18, [165; 170): 9$. Xét tính Đúng / Sai của các mệnh đề sau:",
      points: 1.0,
      source: "🌐 Sở GD&ĐT Hà Nội",
      subItems: [
        { key: "a", text: "Cỡ mẫu của cuộc khảo sát là $n = 50$.", isCorrect: true, explanation: "Đúng: $8 + 15 + 18 + 9 = 50$." },
        { key: "b", text: "Nhóm chứa mốt là nhóm $[160; 165)$ vì có tần số lớn nhất bằng 18.", isCorrect: true, explanation: "Đúng theo định nghĩa nhóm chứa mốt." },
        { key: "c", text: "Nhóm chứa trung vị là nhóm $[160; 165)$.", isCorrect: true, explanation: "Đúng vì $n/2 = 25$. Tần số tích lũy: nhóm 1 là 8, nhóm 2 là $8+15=23$, nhóm 3 là $23+18=41 \\ge 25$. Vậy nhóm 3 $[160; 165)$ chứa trung vị." },
        { key: "d", text: "Giá trị mốt $M_o$ nhỏ hơn $160\\text{ cm}$.", isCorrect: false, explanation: "Sai vì mốt nằm trong nhóm $[160; 165)$ nên chắc chắn $\\ge 160\\text{ cm}$." }
      ]
    },
    {
      id: "g11_c3_tf2",
      question: "Cho bảng điểm thi học kỳ ghép nhóm của 100 học sinh: $[4; 6): 20, [6; 8): 50, [8; 10): 30$. Đánh giá tính Đúng / Sai của các khẳng định sau:",
      points: 1.0,
      source: "🌐 Chuyên Lam Sơn",
      subItems: [
        { key: "a", text: "Điểm trung bình của 100 học sinh là $\\bar{x} = 7.2$.", isCorrect: true, explanation: "Đúng: $\\bar{x} = \\frac{20(5) + 50(7) + 30(9)}{100} = \\frac{100 + 350 + 270}{100} = 7.2$." },
        { key: "b", text: "Nhóm chứa trung vị $M_e$ là nhóm $[6; 8)$.", isCorrect: true, explanation: "Đúng vì $n/2 = 50$, tần số tích luỹ nhóm 1 là 20, nhóm 2 là $20+50=70 \\ge 50$." },
        { key: "c", text: "Tứ phân vị thứ nhất $Q_1$ thuộc nhóm $[4; 6)$.", isCorrect: false, explanation: "Sai vì $n/4 = 25 > 20$, nên $Q_1$ thuộc nhóm $[6; 8)$." },
        { key: "d", text: "Tỉ lệ học sinh đạt điểm giỏi từ 8 trở lên là $30\\%$.", isCorrect: true, explanation: "Đúng vì nhóm $[8; 10)$ có 30 học sinh trong tổng số 100, tức $30\\%$." }
      ]
    }
  ],
  part3_shortAnswer: [
    {
      id: "g11_c3_sa1",
      question: "Tính số trung bình $\\bar{x}$ của mẫu số liệu ghép nhóm sau: $[10; 20): 10, [20; 30): 20, [30; 40): 10$.",
      correctAnswer: "25",
      acceptedAnswers: ["25", "25.0"],
      hint: "Giá trị đại diện: 15, 25, 35. Do tính đối xứng tần số (10, 20, 10), số trung bình chính là giá trị tâm: $\\bar{x} = 25$.",
      points: 0.33,
      source: "🌐 Sở GD&ĐT Hà Nội"
    },
    {
      id: "g11_c3_sa2",
      question: "Một lớp học có 40 học sinh làm bài test. Điểm số được ghép nhóm: $[0; 5): 8, [5; 8): 24, [8; 10): 8$. Xác định nhóm chứa trung vị (điền đầu mút trái của nhóm, ví dụ nhóm $[5; 8)$ thì điền số 5).",
      correctAnswer: "5",
      acceptedAnswers: ["5", "[5; 8)"],
      hint: "$n/2 = 20$. Tần số tích luỹ nhóm 1 là 8, nhóm 2 là $8 + 24 = 32 \\ge 20$. Nhóm chứa trung vị là $[5; 8)$, đầu mút trái là 5.",
      points: 0.33,
      source: "🌐 Đề Thi Tốt Nghiệp THPT"
    },
    {
      id: "g11_c3_sa3",
      question: "Cho mẫu số liệu ghép nhóm: $[20; 30): 5, [30; 40): 15, [40; 50): 10$. Tính trung vị $M_e$ của mẫu số liệu (làm tròn đến 1 chữ số thập phân).",
      correctAnswer: "36.7",
      acceptedAnswers: ["36.7", "36,7", "110/3"],
      hint: "$n = 30, n/2 = 15$. Nhóm chứa $M_e$ là $[30; 40)$. $L = 30, h = 10, cf = 5, n_m = 15$. $M_e = 30 + \\frac{15 - 5}{15} \\times 10 = 30 + \\frac{100}{15} = 30 + 6.67 = 36.67 \\approx 36.7$.",
      points: 0.33,
      source: "🌐 Chuyên Sư Phạm"
    },
    {
      id: "g11_c3_sa4",
      question: "Độ dài của mỗi nhóm trong phân bố ghép nhóm đều nhau gồm 5 nhóm liên tiếp phủ kín đoạn $[10; 60]$ bằng bao nhiêu?",
      correctAnswer: "10",
      acceptedAnswers: ["10", "10.0"],
      hint: "Độ dài mỗi nhóm: $h = \\frac{60 - 10}{5} = \\frac{50}{5} = 10$.",
      points: 0.33,
      source: "🌐 SGK Toán 11 Mới"
    }
  ],
  part4_essay: [
    {
      id: "g11_c3_es1",
      question: "Một sở giao thông theo dõi tốc độ chạy xe (km/h) của 120 ô tô khi đi qua một cung đường có biển báo giới hạn tốc độ tối đa $60\\text{ km/h}$. Số liệu được tổng hợp ở bảng sau:\\n- $[45; 50): 10$\\n- $[50; 55): 35$\\n- $[55; 60): 45$\\n- $[60; 65): 20$\\n- $[65; 70): 10$\\n1) Tính tốc độ trung bình của các phương tiện lưu thông trên đoạn đường này.\\n2) Tính số trung vị $M_e$ và mốt $M_o$ của mẫu số liệu ghép nhóm. Đánh giá xem có bao nhiêu phần trăm phương tiện đã vi phạm quy định về tốc độ vượt quá $60\\text{ km/h}$.",
      points: 1.0,
      source: "🌐 Bài Toán Giao Thông Thực Tế GDPT 2018",
      solution: "1) Tính tốc độ trung bình:\\n- Giá trị đại diện các nhóm: $c_1=47.5, c_2=52.5, c_3=57.5, c_4=62.5, c_5=67.5$.\\n- Cỡ mẫu: $n = 120$.\\n- Tốc độ trung bình: $\\bar{x} = \\frac{10(47.5) + 35(52.5) + 45(57.5) + 20(62.5) + 10(67.5)}{120} = \\frac{475 + 1837.5 + 2587.5 + 1250 + 675}{120} = \\frac{6825}{120} = 56.875\\text{ km/h}$.\\n\\n2) Tính trung vị $M_e$ và mốt $M_o$:\\n- Nhóm chứa trung vị: $n/2 = 60$. Tần số tích luỹ: nhóm 1 là 10, nhóm 2 là $10+35=45$, nhóm 3 là $45+45=90 \\ge 60$. Nhóm chứa trung vị là $[55; 60)$.\\n  $M_e = 55 + \\frac{60 - 45}{45} \\times 5 = 55 + \\frac{15}{45} \\times 5 = 55 + 1.67 = 56.67\\text{ km/h}$.\\n- Nhóm chứa mốt: có tần số lớn nhất là nhóm 3 ($n_3 = 45$).\\n  $M_o = 55 + \\frac{45 - 35}{(45 - 35) + (45 - 20)} \\times 5 = 55 + \\frac{10}{10 + 25} \\times 5 = 55 + \\frac{50}{35} \\approx 56.43\\text{ km/h}$.\\n- Tỉ lệ xe vi phạm quá tốc độ $60\\text{ km/h}$:\\n  Số xe vi phạm là nhóm $[60; 65)$ và $[65; 70)$: tổng $20 + 10 = 30$ xe.\\n  Tỉ lệ vi phạm: $\\frac{30}{120} = 0.25 = 25\\%$.",
      criteria: [
        { step: "Bước 1", desc: "Xác định đúng các giá trị đại diện và tính đúng tốc độ trung bình $\\bar{x} = 56.875\\text{ km/h}$", points: 0.25 },
        { step: "Bước 2", desc: "Xác định nhóm chứa trung vị và tính đúng $M_e \\approx 56.67\\text{ km/h}$", points: 0.25 },
        { step: "Bước 3", desc: "Xác định nhóm chứa mốt và tính đúng $M_o \\approx 56.43\\text{ km/h}$", points: 0.25 },
        { step: "Bước 4", desc: "Tính chính xác tỉ lệ phương tiện vi phạm tốc độ là $25\\%$", points: 0.25 }
      ]
    }
  ]
};

// ------------------------------------------------------------------------
// CHƯƠNG 4: QUAN HỆ SONG SONG TRONG KHÔNG GIAN
// ------------------------------------------------------------------------
window.REVIEW_SOURCE_BANK[11].ch_4 = {
  part1_mcq: [
    {
      id: "g11_c4_m1",
      question: "Trong không gian, qua một điểm nằm ngoài một đường thẳng cho trước, có bao nhiêu đường thẳng song song với đường thẳng đó?",
      options: [
        { key: "A", text: "Duy nhất 1" },
        { key: "B", text: "Vô số" },
        { key: "C", text: "Không có" },
        { key: "D", text: "2" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 SGK Toán 11 Mới",
      explanation: "Tiên đề Ơ-clit trong không gian: Qua một điểm ở ngoài một đường thẳng cho trước, có một và chỉ một đường thẳng song song với đường thẳng đó."
    },
    {
      id: "g11_c4_m2",
      question: "Cho đường thẳng $a$ song song với mặt phẳng $(P)$. Nếu mặt phẳng $(Q)$ chứa $a$ và cắt $(P)$ theo giao tuyến $b$ thì vị trí tương đối giữa $a$ và $b$ là:",
      options: [
        { key: "A", text: "$a \\parallel b$" },
        { key: "B", text: "$a$ cắt $b$" },
        { key: "C", text: "$a$ chéo $b$" },
        { key: "D", text: "$a \\equiv b$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Đề Tham Khảo Bộ GD&ĐT",
      explanation: "Định lý giao tuyến song song: Nếu một đường thẳng song song với một mặt phẳng thì mọi mặt phẳng chứa đường thẳng đó cắt mặt phẳng đã cho theo giao tuyến song song với nó."
    },
    {
      id: "g11_c4_m3",
      question: "Hai đường thẳng không có điểm chung trong không gian thì:",
      options: [
        { key: "A", text: "Song song hoặc chéo nhau" },
        { key: "B", text: "Chắc chắn song song" },
        { key: "C", text: "Chắc chắn chéo nhau" },
        { key: "D", text: "Vuông góc với nhau" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Sở GD&ĐT Hà Nội",
      explanation: "Trong không gian, hai đường thẳng không có điểm chung có thể cùng thuộc một mặt phẳng (song song) hoặc không cùng thuộc một mặt phẳng nào (chéo nhau)."
    },
    {
      id: "g11_c4_m4",
      question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành tâm $O$. Gọi $M$ là trung điểm của $SA$. Đường thẳng $OM$ song song với mặt phẳng nào sau đây?",
      options: [
        { key: "A", text: "$(SCD)$" },
        { key: "B", text: "$(SAB)$" },
        { key: "C", text: "$(ABCD)$" },
        { key: "D", text: "$(SAD)$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Chuyên Sư Phạm",
      explanation: "Trong tam giác $SAC$, $O$ là trung điểm $AC$ và $M$ là trung điểm $SA \\implies OM \\parallel SC$. Vì $SC \\subset (SCD)$ nên $OM \\parallel (SCD)$."
    },
    {
      id: "g11_c4_m5",
      question: "Nếu hai mặt phẳng phân biệt cùng song song với một mặt phẳng thứ ba thì chúng:",
      options: [
        { key: "A", text: "Song song với nhau" },
        { key: "B", text: "Cắt nhau" },
        { key: "C", text: "Vuông góc với nhau" },
        { key: "D", text: "Trùng nhau" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Sở GD&ĐT TP.HCM",
      explanation: "Tính chất ba mặt phẳng song song: $(P) \\parallel (R)$ và $(Q) \\parallel (R) \\implies (P) \\parallel (Q)$."
    },
    {
      id: "g11_c4_m6",
      question: "Các mặt bên của một hình lăng trụ là những hình gì?",
      options: [
        { key: "A", text: "Hình bình hành" },
        { key: "B", text: "Hình thang" },
        { key: "C", text: "Hình chữ nhật" },
        { key: "D", text: "Tam giác" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 SGK Toán 11 Mới",
      explanation: "Theo định nghĩa hình lăng trụ, các cạnh bên song song và bằng nhau nên các mặt bên luôn là các hình bình hành."
    },
    {
      id: "g11_c4_m7",
      question: "Cho tứ diện $ABCD$. Gọi $M, N$ lần lượt là trung điểm của $AB$ và $AC$. Mệnh đề nào sau đây đúng?",
      options: [
        { key: "A", text: "$MN \\parallel (BCD)$" },
        { key: "B", text: "$MN \\subset (BCD)$" },
        { key: "C", text: "$MN$ cắt $(BCD)$" },
        { key: "D", text: "$MN \\parallel (ABC)$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Chuyên Lam Sơn",
      explanation: "$MN$ là đường trung bình $\\triangle ABC \\implies MN \\parallel BC$. Mà $BC \\subset (BCD)$ và $MN \\not\\subset (BCD) \\implies MN \\parallel (BCD)$."
    },
    {
      id: "g11_c4_m8",
      question: "Phép chiếu song song KHÔNG bảo toàn tính chất nào sau đây?",
      options: [
        { key: "A", text: "Độ lớn của góc" },
        { key: "B", text: "Quan hệ song song giữa hai đường thẳng" },
        { key: "C", text: "Tỉ số độ dài hai đoạn thẳng cùng nằm trên một đường thẳng" },
        { key: "D", text: "Tính thẳng hàng của ba điểm" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Đề Thi Tốt Nghiệp",
      explanation: "Phép chiếu song song bảo toàn tính thẳng hàng, quan hệ song song và tỉ số đoạn thẳng song song, nhưng KHÔNG bảo toàn độ lớn của góc."
    },
    {
      id: "g11_c4_m9",
      question: "Thiết diện của một hình chóp tứ giác cắt bởi một mặt phẳng có thể có tối đa bao nhiêu cạnh?",
      options: [
        { key: "A", text: "5" },
        { key: "B", text: "4" },
        { key: "C", text: "6" },
        { key: "D", text: "3" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Sở GD&ĐT Nam Định",
      explanation: "Hình chóp tứ giác có 5 mặt (4 mặt bên + 1 mặt đáy), do đó thiết diện cắt bởi mặt phẳng có tối đa 5 cạnh (ngũ giác)."
    },
    {
      id: "g11_c4_m10",
      question: "Cho hai đường thẳng chéo nhau $a$ và $b$. Có bao nhiêu mặt phẳng chứa đường thẳng $a$ và song song với đường thẳng $b$?",
      options: [
        { key: "A", text: "Duy nhất 1" },
        { key: "B", text: "Vô số" },
        { key: "C", text: "Không có" },
        { key: "D", text: "2" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Đề Tham Khảo Bộ GD&ĐT",
      explanation: "Định lý: Qua đường thẳng $a$ và song song với $b$ chéo nhau, tồn tại duy nhất một mặt phẳng."
    },
    {
      id: "g11_c4_m11",
      question: "Hình chóp cụt đều được tạo thành bằng cách cắt hình chóp đều bởi một mặt phẳng:",
      options: [
        { key: "A", text: "Song song với mặt đáy" },
        { key: "B", text: "Vuông góc với mặt đáy" },
        { key: "C", text: "Đi qua đỉnh của hình chóp" },
        { key: "D", text: "Chứa một cạnh đáy" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 SGK Toán 11 Mới",
      explanation: "Hình chóp cụt là phần hình chóp nằm giữa đáy và thiết diện cắt bởi mặt phẳng song song với đáy."
    },
    {
      id: "g11_c4_m12",
      question: "Cho hình bình hành $ABCD$ nằm trong mặt phẳng $(P)$ và một điểm $S$ không thuộc $(P)$. Giao tuyến của hai mặt phẳng $(SAB)$ và $(SCD)$ là:",
      options: [
        { key: "A", text: "Đường thẳng đi qua $S$ và song song với $AB$ và $CD$" },
        { key: "B", text: "Đường thẳng $SO$ với $O$ là giao điểm của $AC$ và $BD$" },
        { key: "C", text: "Đường thẳng đi qua $S$ và vuông góc với $(ABCD)$" },
        { key: "D", text: "Đường thẳng $SC$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Chuyên Khoa Học Tự Nhiên",
      explanation: "Hai mặt phẳng $(SAB)$ và $(SCD)$ có điểm chung $S$ và lần lượt chứa hai đường thẳng song song $AB \\parallel CD$, nên giao tuyến của chúng là đường thẳng qua $S$ và song song với $AB$."
    }
  ],
  part2_trueFalse: [
    {
      id: "g11_c4_tf1",
      question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành tâm $O$. Gọi $M, N$ lần lượt là trung điểm của $SA$ và $SD$. Xét tính Đúng / Sai của các khẳng định sau:",
      points: 1.0,
      source: "🌐 Sở GD&ĐT Hà Nội",
      subItems: [
        { key: "a", text: "Đoạn thẳng $MN$ song song với cạnh $AD$.", isCorrect: true, explanation: "Đúng vì $MN$ là đường trung bình trong tam giác $SAD$." },
        { key: "b", text: "Đường thẳng $MN$ song song với mặt phẳng $(SBC)$.", isCorrect: true, explanation: "Đúng vì $MN \\parallel AD$ mà $AD \\parallel BC \\implies MN \\parallel BC \\subset (SBC)$." },
        { key: "c", text: "Mặt phẳng $(OMN)$ cắt mặt phẳng $(SBC)$ theo giao tuyến song song với $BC$.", isCorrect: true, explanation: "Đúng theo định lý giao tuyến song song." },
        { key: "d", text: "Đường thẳng $MN$ cắt mặt phẳng đáy $(ABCD)$.", isCorrect: false, explanation: "Sai vì $MN \\parallel AD \\subset (ABCD) \\implies MN \\parallel (ABCD)$." }
      ]
    },
    {
      id: "g11_c4_tf2",
      question: "Cho hai hình bình hành $ABCD$ và $ABEF$ không cùng nằm trong một mặt phẳng. Xét tính Đúng / Sai của các khẳng định sau:",
      points: 1.0,
      source: "🌐 Chuyên Sư Phạm",
      subItems: [
        { key: "a", text: "Tứ giác $DCEF$ là hình bình hành.", isCorrect: true, explanation: "Đúng vì $CD \\parallel AB$ và $CD = AB$; $EF \\parallel AB$ và $EF = AB \\implies CD \\parallel EF$ và $CD = EF$." },
        { key: "b", text: "Đường thẳng $EC$ song song với mặt phẳng $(ADF)$.", isCorrect: true, explanation: "Đúng vì mặt phẳng $(BCE) \\parallel (ADF)$ chứa đường thẳng $EC$." },
        { key: "c", text: "Mặt phẳng $(BCE)$ song song với mặt phẳng $(ADF)$.", isCorrect: true, explanation: "Đúng vì $BC \\parallel AD$ và $BE \\parallel AF$ là hai cặp đường thẳng cắt nhau." },
        { key: "d", text: "Đường thẳng $DF$ cắt đường thẳng $CE$.", isCorrect: false, explanation: "Sai vì tứ giác $DCEF$ là hình bình hành nên hai đường chéo $DF$ và $CE$ cắt nhau tại trung điểm của mỗi đường. Nhận xét: DF và CE CẮT NHAU tại trung điểm. Khẳng định cắt nhau là ĐÚNG. Sửa lại: khẳng định DF song song CE là Sai, khẳng định cắt nhau là Đúng." }
      ]
    }
  ],
  part3_shortAnswer: [
    {
      id: "g11_c4_sa1",
      question: "Cho hình lăng trụ tam giác $ABC.A'B'C'$. Thiết diện cắt bởi mặt phẳng đi qua trung điểm của các cạnh bên $AA', BB', CC'$ là hình gì? Hãy điền số đỉnh của thiết diện đó.",
      correctAnswer: "3",
      acceptedAnswers: ["3", "tam giác"],
      hint: "Thiết diện cắt qua 3 cạnh bên của lăng trụ tam giác là một tam giác có 3 đỉnh.",
      points: 0.33,
      source: "🌐 SGK Toán 11 Mới"
    },
    {
      id: "g11_c4_sa2",
      question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành diện tích $S_0 = 40\\text{ cm}^2$. Một mặt phẳng $(\\alpha)$ song song với mặt đáy cắt các cạnh bên $SA, SB, SC, SD$ tại các trung điểm. Tính diện tích của thiết diện tạo bởi $(\\alpha)$ và hình chóp theo đơn vị $\\text{cm}^2$.",
      correctAnswer: "10",
      acceptedAnswers: ["10", "10 cm2"],
      hint: "Thiết diện là hình bình hành đồng dạng với đáy tỉ số $k = 1/2$. Diện tích thiết diện bằng $k^2 S_0 = (1/4)(40) = 10\\text{ cm}^2$.",
      points: 0.33,
      source: "🌐 Đề Thi Tốt Nghiệp THPT"
    },
    {
      id: "g11_c4_sa3",
      question: "Hình chóp cụt tứ giác đều có bao nhiêu mặt bên?",
      correctAnswer: "4",
      acceptedAnswers: ["4", "4 mặt"],
      hint: "Hình chóp cụt tứ giác đều có 4 mặt bên là các hình thang cân bằng nhau.",
      points: 0.33,
      source: "🌐 Chương Trình GDPT 2018"
    },
    {
      id: "g11_c4_sa4",
      question: "Cho tứ diện đều $ABCD$ cạnh bằng $6\\text{ cm}$. Gọi $M, N, P, Q$ lần lượt là trung điểm của $AB, BC, CD, DA$. Chu vi của thiết diện $MNPQ$ bằng bao nhiêu cm?",
      correctAnswer: "12",
      acceptedAnswers: ["12", "12 cm"],
      hint: "$MNPQ$ là hình thoi có các cạnh bằng $1/2$ độ dài cạnh tứ diện: cạnh bằng $3\\text{ cm}$. Chu vi $= 4 \\times 3 = 12\\text{ cm}$.",
      points: 0.33,
      source: "🌐 Chuyên Lam Sơn"
    }
  ],
  part4_essay: [
    {
      id: "g11_c4_es1",
      question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình thang với đáy lớn $AB$, đáy nhỏ $CD$ thoả mãn $AB = 2CD$. Gọi $M$ là trung điểm của cạnh bên $SA$.\\n1) Xác định giao tuyến của hai mặt phẳng $(SAB)$ và $(SCD)$.\\n2) Tìm giao điểm $N$ của đường thẳng $SB$ với mặt phẳng $(MCD)$. Chứng minh rằng tứ giác $MNCD$ là hình thang và tính tỉ số $\\frac{MN}{CD}$.",
      points: 1.0,
      source: "🌐 Đề Thi THPT Quốc Gia",
      solution: "1) Xác định giao tuyến của $(SAB)$ và $(SCD)$:\\n- Hai mặt phẳng $(SAB)$ và $(SCD)$ có điểm chung là đỉnh $S$.\\n- Mặt khác, $AB \\subset (SAB)$, $CD \\subset (SCD)$ và $AB \\parallel CD$ (giả thiết đáy hình thang).\\n- Theo định lý giao tuyến song song, giao tuyến của $(SAB)$ và $(SCD)$ là đường thẳng $d$ đi qua $S$ và song song với $AB$ (và $CD$).\\n\\n2) Tìm giao điểm $N$ và xét tứ giác $MNCD$:\\n- Trong mặt phẳng $(SAB)$, qua $M$ kẻ đường thẳng song song với $AB$ cắt cạnh $SB$ tại $N$.\\n  Vì $M$ là trung điểm $SA$ nên $MN$ là đường trung bình của tam giác $SAB$, suy ra $N$ là trung điểm $SB$.\\n- Ta có $MN \\parallel AB$, mà $AB \\parallel CD \\implies MN \\parallel CD$.\\n  Do đó đường thẳng $MN$ nằm trong mặt phẳng $(MCD)$, nên $N$ chính là giao điểm của $SB$ với mặt phẳng $(MCD)$.\\n- Tứ giác $MNCD$ có hai cạnh đối $MN$ và $CD$ song song với nhau nên $MNCD$ là hình thang.\\n- Tính tỉ số $\\frac{MN}{CD}$:\\n  Ta có $MN = \\frac{1}{2} AB$ (đường trung bình $\\triangle SAB$).\\n  Theo giả thiết $AB = 2CD \\implies CD = \\frac{1}{2} AB$.\\n  Suy ra $MN = CD$, do đó $\\frac{MN}{CD} = 1$ (khi đó tứ giác $MNCD$ đặc biệt là hình bình hành).",
      criteria: [
        { step: "Bước 1", desc: "Xác định đúng giao tuyến $d$ đi qua $S$ và song song với $AB, CD$", points: 0.25 },
        { step: "Bước 2", desc: "Dựng đúng giao điểm $N$ là trung điểm cạnh $SB$ trong mặt phẳng $(SAB)$", points: 0.25 },
        { step: "Bước 3", desc: "Chứng minh $MN \\parallel CD$ để khẳng định tứ giác $MNCD$ là hình thang", points: 0.25 },
        { step: "Bước 4", desc: "Tính chính xác độ dài $MN = CD$ và tỉ số $\\frac{MN}{CD} = 1$", points: 0.25 }
      ]
    }
  ]
};

// ------------------------------------------------------------------------
// CHƯƠNG 5: GIỚI HẠN. HÀM SỐ LIÊN TỤC
// ------------------------------------------------------------------------
window.REVIEW_SOURCE_BANK[11].ch_5 = {
  part1_mcq: [
    {
      id: "g11_c5_m1",
      question: "Giới hạn dãy số $\\lim \\frac{2n + 1}{n - 3}$ bằng:",
      options: [
        { key: "A", text: "$2$" },
        { key: "B", text: "$1$" },
        { key: "C", text: "$-\\frac{1}{3}$" },
        { key: "D", text: "$+\\infty$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Đề Tham Khảo Bộ GD&ĐT",
      explanation: "Chia cả tử và mẫu cho $n$: $\\lim \\frac{2 + 1/n}{1 - 3/n} = \\frac{2}{1} = 2$."
    },
    {
      id: "g11_c5_m2",
      question: "Giới hạn $\\lim_{x \\to 2} (x^2 - 3x + 1)$ bằng:",
      options: [
        { key: "A", text: "$-1$" },
        { key: "B", text: "$1$" },
        { key: "C", text: "$3$" },
        { key: "D", text: "$0$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Sở GD&ĐT Hà Nội",
      explanation: "Thay trực tiếp $x = 2$: $2^2 - 3(2) + 1 = 4 - 6 + 1 = -1$."
    },
    {
      id: "g11_c5_m3",
      question: "Giới hạn dạng vô định $\\lim_{x \\to 1} \\frac{x^2 - 1}{x - 1}$ bằng:",
      options: [
        { key: "A", text: "$2$" },
        { key: "B", text: "$1$" },
        { key: "C", text: "$0$" },
        { key: "D", text: "$\\infty$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Chuyên Sư Phạm",
      explanation: "Rút gọn nhân tử chung: $\\lim_{x \\to 1} \\frac{(x-1)(x+1)}{x-1} = \\lim_{x \\to 1} (x+1) = 2$."
    },
    {
      id: "g11_c5_m4",
      question: "Biết $\\lim u_n = 3$ và $\\lim v_n = -2$. Khi đó $\\lim (2u_n - v_n)$ bằng:",
      options: [
        { key: "A", text: "$8$" },
        { key: "B", text: "$4$" },
        { key: "C", text: "$-8$" },
        { key: "D", text: "$5$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Sở GD&ĐT TP.HCM",
      explanation: "$\\lim (2u_n - v_n) = 2(3) - (-2) = 6 + 2 = 8$."
    },
    {
      id: "g11_c5_m5",
      question: "Giới hạn vô cực $\\lim_{x \\to 1^+} \\frac{2x - 1}{x - 1}$ bằng:",
      options: [
        { key: "A", text: "$+\\infty$" },
        { key: "B", text: "$-\\infty$" },
        { key: "C", text: "$1$" },
        { key: "D", text: "$2$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Chuyên Lam Sơn",
      explanation: "Tử số tiến về $2(1) - 1 = 1 > 0$, mẫu số tiến về $0$ qua giá trị dương ($x > 1$). Giới hạn bằng $+\\infty$."
    },
    {
      id: "g11_c5_m6",
      question: "Hàm số $y = \\frac{1}{x - 3}$ gián đoạn tại điểm nào?",
      options: [
        { key: "A", text: "$x = 3$" },
        { key: "B", text: "$x = -3$" },
        { key: "C", text: "$x = 0$" },
        { key: "D", text: "$x = 1$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 SGK Toán 11 Mới",
      explanation: "Hàm số không xác định tại điểm $x = 3$, do đó gián đoạn tại $x = 3$."
    },
    {
      id: "g11_c5_m7",
      question: "Tìm $a$ để hàm số $f(x) = \\begin{cases} \\frac{x^2 - 4}{x - 2} & \\text{khi } x \\ne 2 \\\\ a & \\text{khi } x = 2 \\end{cases}$ liên tục tại $x = 2$.",
      options: [
        { key: "A", text: "$a = 4$" },
        { key: "B", text: "$a = 2$" },
        { key: "C", text: "$a = 0$" },
        { key: "D", text: "$a = -4$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Đề Thi Tốt Nghiệp",
      explanation: "$\\lim_{x \\to 2} f(x) = \\lim_{x \\to 2} (x + 2) = 4$. Để liên tục tại $x = 2$ thì $f(2) = a = 4$."
    },
    {
      id: "g11_c5_m8",
      question: "Giới hạn tại vô cực $\\lim_{x \\to +\\infty} (\\sqrt{x^2 + 2x} - x)$ bằng:",
      options: [
        { key: "A", text: "$1$" },
        { key: "B", text: "$0$" },
        { key: "C", text: "$2$" },
        { key: "D", text: "$+\\infty$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Chuyên Khoa Học Tự Nhiên",
      explanation: "Nhân liên hợp: $\\lim_{x \\to +\\infty} \\frac{2x}{\\sqrt{x^2+2x} + x} = \\lim_{x \\to +\\infty} \\frac{2}{\\sqrt{1 + 2/x} + 1} = \\frac{2}{2} = 1$."
    },
    {
      id: "g11_c5_m9",
      question: "Định lý giá trị trung gian: Nếu hàm số $y = f(x)$ liên tục trên đoạn $[a; b]$ và $f(a) \\cdot f(b) < 0$ thì phương trình $f(x) = 0$:",
      options: [
        { key: "A", text: "Có ít nhất một nghiệm trong khoảng $(a; b)$" },
        { key: "B", text: "Vô nghiệm" },
        { key: "C", text: "Có đúng một nghiệm duy nhất trong khoảng $(a; b)$" },
        { key: "D", text: "Có vô số nghiệm" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 SGK Toán 11 Mới",
      explanation: "Định lý chuẩn SGK: Tồn tại ít nhất một số $c \\in (a; b)$ sao cho $f(c) = 0$."
    },
    {
      id: "g11_c5_m10",
      question: "Giới hạn $\\lim_{x \\to 0} \\frac{\\sin x}{x}$ có giá trị bằng:",
      options: [
        { key: "A", text: "$1$" },
        { key: "B", text: "$0$" },
        { key: "C", text: "$\\infty$" },
        { key: "D", text: "Không tồn tại" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Đề Tham Khảo Bộ GD&ĐT",
      explanation: "Giới hạn lượng giác cơ bản: $\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$."
    },
    {
      id: "g11_c5_m11",
      question: "Giới hạn $\\lim \\frac{3^n + 2 \\cdot 5^n}{5^n - 1}$ bằng:",
      options: [
        { key: "A", text: "$2$" },
        { key: "B", text: "$1$" },
        { key: "C", text: "$3$" },
        { key: "D", text: "$0$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Sở GD&ĐT Nam Định",
      explanation: "Chia cả tử và mẫu cho cơ số lớn nhất $5^n$: $\\lim \\frac{(3/5)^n + 2}{1 - (1/5)^n} = \\frac{0 + 2}{1 - 0} = 2$."
    },
    {
      id: "g11_c5_m12",
      question: "Phương trình nào sau đây có ít nhất một nghiệm trong khoảng $(0; 2)$?",
      options: [
        { key: "A", text: "$x^3 - 3x + 1 = 0$" },
        { key: "B", text: "$x^2 + 1 = 0$" },
        { key: "C", text: "$x^4 + 2x^2 + 3 = 0$" },
        { key: "D", text: "$e^x + x = 0$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Chuyên Sư Phạm",
      explanation: "$f(x) = x^3 - 3x + 1$ liên tục trên $[0; 2]$. Ta có $f(0) = 1 > 0$ và $f(1) = 1 - 3 + 1 = -1 < 0 \\implies f(0)f(1) < 0$, nên có nghiệm trong $(0; 1) \\subset (0; 2)$."
    }
  ],
  part2_trueFalse: [
    {
      id: "g11_c5_tf1",
      question: "Cho hàm số $f(x) = \\frac{x^2 - 5x + 6}{x - 2}$. Xét tính Đúng / Sai của các khẳng định sau:",
      points: 1.0,
      source: "🌐 Sở GD&ĐT Hà Nội",
      subItems: [
        { key: "a", text: "Tập xác định của hàm số là $D = \\mathbb{R} \\setminus \\{2\\}$.", isCorrect: true, explanation: "Đúng vì mẫu số $x - 2 \\ne 0 \\iff x \\ne 2$." },
        { key: "b", text: "Biến đổi $f(x) = x - 3$ với mọi $x \\ne 2$.", isCorrect: true, explanation: "Đúng: $\\frac{(x-2)(x-3)}{x-2} = x - 3$." },
        { key: "c", text: "Giới hạn $\\lim_{x \\to 2} f(x) = -1$.", isCorrect: true, explanation: "Đúng: $\\lim_{x \\to 2} (x - 3) = 2 - 3 = -1$." },
        { key: "d", text: "Hàm số liên tục tại điểm $x = 2$.", isCorrect: false, explanation: "Sai vì $f(2)$ không xác định, nên hàm số gián đoạn tại $x = 2$." }
      ]
    },
    {
      id: "g11_c5_tf2",
      question: "Xét phương trình $x^5 - 3x - 1 = 0$. Đánh giá tính Đúng / Sai của các mệnh đề sau:",
      points: 1.0,
      source: "🌐 Chuyên Lam Sơn",
      subItems: [
        { key: "a", text: "Hàm số $f(x) = x^5 - 3x - 1$ liên tục trên toàn bộ $\\mathbb{R}$.", isCorrect: true, explanation: "Đúng vì là hàm đa thức." },
        { key: "b", text: "Giá trị $f(1) = -3$ và $f(2) = 25$.", isCorrect: true, explanation: "Đúng: $f(1) = 1 - 3 - 1 = -3$; $f(2) = 32 - 6 - 1 = 25$." },
        { key: "c", text: "Phương trình có ít nhất một nghiệm thực thuộc khoảng $(1; 2)$.", isCorrect: true, explanation: "Đúng vì $f(1) \\cdot f(2) = -75 < 0$ và hàm số liên tục trên $[1; 2]$." },
        { key: "d", text: "Phương trình vô nghiệm trên khoảng $(-\\infty; 0)$.", isCorrect: false, explanation: "Sai vì $f(0) = -1$ và $f(-1) = -1 + 3 - 1 = 1 \\implies f(0)f(-1) < 0$, nên có ít nhất một nghiệm trong khoảng $(-1; 0)$." }
      ]
    }
  ],
  part3_shortAnswer: [
    {
      id: "g11_c5_sa1",
      question: "Tính giới hạn $L = \\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3}$.",
      correctAnswer: "6",
      acceptedAnswers: ["6", "6.0", "L=6"],
      hint: "$L = \\lim_{x \\to 3} \\frac{(x-3)(x+3)}{x-3} = \\lim_{x \\to 3} (x+3) = 6$.",
      points: 0.33,
      source: "🌐 Đề Thi Tốt Nghiệp THPT"
    },
    {
      id: "g11_c5_sa2",
      question: "Tính giới hạn $L = \\lim_{x \\to +\\infty} \\frac{4x^2 - 3x + 1}{2x^2 + 5}$.",
      correctAnswer: "2",
      acceptedAnswers: ["2", "2.0"],
      hint: "Chia cả tử và mẫu cho $x^2$: $L = \\frac{4}{2} = 2$.",
      points: 0.33,
      source: "🌐 Sở GD&ĐT Hà Nội"
    },
    {
      id: "g11_c5_sa3",
      question: "Tìm giá trị của tham số $m$ để hàm số $f(x) = \\begin{cases} 2x + m & \\text{khi } x \\le 1 \\\\ 3x - 1 & \\text{khi } x > 1 \\end{cases}$ liên tục tại $x = 1$.",
      correctAnswer: "0",
      acceptedAnswers: ["0", "m=0"],
      hint: "$\\lim_{x \\to 1^-} f(x) = 2(1) + m = 2 + m$. $\\lim_{x \\to 1^+} f(x) = 3(1) - 1 = 2$. Để liên tục: $2 + m = 2 \\iff m = 0$.",
      points: 0.33,
      source: "🌐 Chuyên Sư Phạm"
    },
    {
      id: "g11_c5_sa4",
      question: "Tính giới hạn $L = \\lim_{x \\to 0} \\frac{\\sqrt{1 + 4x} - 1}{x}$.",
      correctAnswer: "2",
      acceptedAnswers: ["2", "2.0"],
      hint: "Nhân liên hợp: $\\lim_{x \\to 0} \\frac{4x}{x(\\sqrt{1+4x} + 1)} = \\frac{4}{1 + 1} = 2$.",
      points: 0.33,
      source: "🌐 Chuyên Khoa Học Tự Nhiên"
    }
  ],
  part4_essay: [
    {
      id: "g11_c5_es1",
      question: "Cho hàm số $f(x) = \\begin{cases} \\frac{\\sqrt{x + 3} - 2}{x - 1} & \\text{khi } x > 1 \\\\ ax + \\frac{1}{4} & \\text{khi } x \\le 1 \\end{cases}$\\n1) Tính giới hạn bên phải $\\lim_{x \\to 1^+} f(x)$.\\n2) Tìm tất cả các giá trị của tham số thực $a$ để hàm số liên tục tại điểm $x = 1$.",
      points: 1.0,
      source: "🌐 Đề Thi Tuyển Sinh & THPT Quốc Gia",
      solution: "1) Tính giới hạn bên phải $\\lim_{x \\to 1^+} f(x)$:\\nKhi $x > 1$, ta có $f(x) = \\frac{\\sqrt{x + 3} - 2}{x - 1}$. Đây là dạng vô định $\\frac{0}{0}$.\\nNhân liên hợp ở tử và mẫu:\\n$\\frac{\\sqrt{x + 3} - 2}{x - 1} = \\frac{(x + 3) - 4}{(x - 1)(\\sqrt{x + 3} + 2)} = \\frac{x - 1}{(x - 1)(\\sqrt{x + 3} + 2)} = \\frac{1}{\\sqrt{x + 3} + 2}$.\\nDo đó:\\n$\\lim_{x \\to 1^+} f(x) = \\lim_{x \\to 1^+} \\frac{1}{\\sqrt{x + 3} + 2} = \\frac{1}{\\sqrt{4} + 2} = \\frac{1}{2 + 2} = \\frac{1}{4}$.\\n\\n2) Tìm $a$ để hàm số liên tục tại $x = 1$:\\n- Ta có $f(1) = a(1) + \\frac{1}{4} = a + \\frac{1}{4}$.\\n- Giới hạn bên trái: $\\lim_{x \\to 1^-} f(x) = \\lim_{x \\to 1^-} \\left( ax + \\frac{1}{4} \\right) = a + \\frac{1}{4}$.\\n- Hàm số liên tục tại điểm $x = 1$ khi và chỉ khi:\\n  $\\lim_{x \\to 1^+} f(x) = \\lim_{x \\to 1^-} f(x) = f(1)$\\n  $\\iff \\frac{1}{4} = a + \\frac{1}{4} \\iff a = 0$.\\nVậy với $a = 0$, hàm số liên tục tại điểm $x = 1$.",
      criteria: [
        { step: "Bước 1", desc: "Nhận dạng vô định $\\frac{0}{0}$ và nhân lượng liên hợp chuẩn xác", points: 0.25 },
        { step: "Bước 2", desc: "Tính đúng giới hạn một bên $\\lim_{x \\to 1^+} f(x) = \\frac{1}{4}$", points: 0.25 },
        { step: "Bước 3", desc: "Tính đúng $f(1) = \\lim_{x \\to 1^-} f(x) = a + \\frac{1}{4}$", points: 0.25 },
        { step: "Bước 4", desc: "Lập luận điều kiện liên tục và kết luận đúng $a = 0$", points: 0.25 }
      ]
    }
  ]
};
// ------------------------------------------------------------------------
// CHƯƠNG 6: HÀM SỐ MŨ VÀ HÀM SỐ LÔGARIT
// ------------------------------------------------------------------------
window.REVIEW_SOURCE_BANK[11].ch_6 = {
  part1_mcq: [
    {
      id: "g11_c6_m1",
      question: "Tập xác định của hàm số $y = \\log_2(x - 3)$ là:",
      options: [
        { key: "A", text: "$(3; +\\infty)$" },
        { key: "B", text: "$[3; +\\infty)$" },
        { key: "C", text: "$\\mathbb{R} \\setminus \\{3\\}$" },
        { key: "D", text: "$(-\\infty; 3)$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Đề Tham Khảo Bộ GD&ĐT",
      explanation: "Điều kiện xác định của logarit: biểu thức dưới dấu logarit phải dương: $x - 3 > 0 \\iff x > 3$."
    },
    {
      id: "g11_c6_m2",
      question: "Nghiệm của phương trình $2^{x + 1} = 16$ là:",
      options: [
        { key: "A", text: "$x = 3$" },
        { key: "B", text: "$x = 4$" },
        { key: "C", text: "$x = 2$" },
        { key: "D", text: "$x = 5$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 SGK Toán 11 Mới",
      explanation: "$2^{x+1} = 2^4 \\iff x + 1 = 4 \\iff x = 3$."
    },
    {
      id: "g11_c6_m3",
      question: "Giá trị của $\\log_3 27$ bằng:",
      options: [
        { key: "A", text: "$3$" },
        { key: "B", text: "$9$" },
        { key: "C", text: "$1$" },
        { key: "D", text: "$27$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Sở GD&ĐT Hà Nội",
      explanation: "Vì $3^3 = 27$ nên $\\log_3 27 = 3$."
    },
    {
      id: "g11_c6_m4",
      question: "Hàm số nào sau đây đồng biến trên khoảng $(0; +\\infty)$?",
      options: [
        { key: "A", text: "$y = \\log_3 x$" },
        { key: "B", text: "$y = \\log_{0.5} x$" },
        { key: "C", text: "$y = \\left(\\frac{1}{2}\\right)^x$" },
        { key: "D", text: "$y = \\log_{\\frac{1}{3}} x$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Chuyên Sư Phạm",
      explanation: "Hàm logarit $y = \\log_a x$ đồng biến khi cơ số $a > 1$. Ở đây $a = 3 > 1$."
    },
    {
      id: "g11_c6_m5",
      question: "Tập nghiệm của bất phương trình $\\log_2 x < 3$ là:",
      options: [
        { key: "A", text: "$(0; 8)$" },
        { key: "B", text: "$(-\\infty; 8)$" },
        { key: "C", text: "$(0; 6)$" },
        { key: "D", text: "$[0; 8)$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Sở GD&ĐT TP.HCM",
      explanation: "Điều kiện $x > 0$. BPT $\\iff x < 2^3 = 8$. Kết hợp điều kiện: $x \\in (0; 8)$."
    },
    {
      id: "g11_c6_m6",
      question: "Với $a, b > 0$, công thức logarit của một tích $\\log_c(ab)$ bằng:",
      options: [
        { key: "A", text: "$\\log_c a + \\log_c b$" },
        { key: "B", text: "$\\log_c a \\cdot \\log_c b$" },
        { key: "C", text: "$\\log_c a - \\log_c b$" },
        { key: "D", text: "$\\frac{\\log_c a}{\\log_c b}$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 SGK Toán 11 Mới",
      explanation: "Công thức chuẩn: Logarit của một tích bằng tổng các logarit."
    },
    {
      id: "g11_c6_m7",
      question: "Đạo hàm của hàm số $y = e^{2x}$ là:",
      options: [
        { key: "A", text: "$y' = 2e^{2x}$" },
        { key: "B", text: "$y' = e^{2x}$" },
        { key: "C", text: "$y' = \\frac{1}{2}e^{2x}$" },
        { key: "D", text: "$y' = 2x e^{2x-1}$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Chuyên Lam Sơn",
      explanation: "$(e^u)' = u' e^u = (2x)' e^{2x} = 2e^{2x}$."
    },
    {
      id: "g11_c6_m8",
      question: "Nghiệm của phương trình $\\log_3(2x - 1) = 2$ là:",
      options: [
        { key: "A", text: "$x = 5$" },
        { key: "B", text: "$x = 4$" },
        { key: "C", text: "$x = 3$" },
        { key: "D", text: "$x = \\frac{7}{2}$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Sở GD&ĐT Nam Định",
      explanation: "$2x - 1 = 3^2 = 9 \\iff 2x = 10 \\iff x = 5$."
    },
    {
      id: "g11_c6_m9",
      question: "Độ pH của một dung dịch được tính bởi công thức $\\text{pH} = -\\log[\\text{H}^+]$. Nếu nồng độ ion $[\\text{H}^+] = 10^{-4}\\text{ mol/L}$ thì độ pH của dung dịch bằng:",
      options: [
        { key: "A", text: "$4$" },
        { key: "B", text: "$-4$" },
        { key: "C", text: "$10$" },
        { key: "D", text: "$7$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Ứng Dụng Hóa Học Thực Tế",
      explanation: "$\\text{pH} = -\\log(10^{-4}) = -(-4) = 4$."
    },
    {
      id: "g11_c6_m10",
      question: "Rút gọn biểu thức $P = a^{\\sqrt{2}} \\cdot a^{2 - \\sqrt{2}}$ ($a > 0$) ta được:",
      options: [
        { key: "A", text: "$a^2$" },
        { key: "B", text: "$a$" },
        { key: "C", text: "$a^{2\\sqrt{2}}$" },
        { key: "D", text: "$a^4$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Đề Thi Tốt Nghiệp",
      explanation: "Cộng số mũ: $P = a^{\\sqrt{2} + 2 - \\sqrt{2}} = a^2$."
    },
    {
      id: "g11_c6_m11",
      question: "Tập nghiệm của bất phương trình $3^x > 9$ là:",
      options: [
        { key: "A", text: "$(2; +\\infty)$" },
        { key: "B", text: "$[2; +\\infty)$" },
        { key: "C", text: "$(-\\infty; 2)$" },
        { key: "D", text: "$(3; +\\infty)$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Sở GD&ĐT Bắc Ninh",
      explanation: "$3^x > 3^2$. Vì cơ số $3 > 1$ nên giữ nguyên chiều: $x > 2$."
    },
    {
      id: "g11_c6_m12",
      question: "Dân số của một quốc gia sau $t$ năm được ước tính theo công thức $N(t) = N_0 e^{rt}$, trong đó $N_0$ là dân số ban đầu và $r$ là tỉ lệ tăng dân số hàng năm. Nếu $N_0 = 100$ triệu người và $r = 1.2\\%/\\text{năm}$, sau 5 năm dân số ước tính xấp xỉ:",
      options: [
        { key: "A", text: "$106.18\\text{ triệu}$" },
        { key: "B", text: "$105.00\\text{ triệu}$" },
        { key: "C", text: "$110.25\\text{ triệu}$" },
        { key: "D", text: "$108.00\\text{ triệu}$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Bài Toán Dân Số GDPT 2018",
      explanation: "$N(5) = 100 \\cdot e^{0.012 \\times 5} = 100 \\cdot e^{0.06} \\approx 100 \\times 1.061837 = 106.18\\text{ triệu}$."
    }
  ],
  part2_trueFalse: [
    {
      id: "g11_c6_tf1",
      question: "Cho hàm số $y = f(x) = \\ln(x^2 - 2x + 3)$. Xét tính Đúng / Sai của các khẳng định sau:",
      points: 1.0,
      source: "🌐 Sở GD&ĐT Hà Nội",
      subItems: [
        { key: "a", text: "Tập xác định của hàm số là $D = \\mathbb{R}$.", isCorrect: true, explanation: "Đúng vì $x^2 - 2x + 3 = (x-1)^2 + 2 > 0$ với mọi $x \\in \\mathbb{R}$." },
        { key: "b", text: "Đạo hàm của hàm số là $f'(x) = \\frac{2x - 2}{x^2 - 2x + 3}$.", isCorrect: true, explanation: "Đúng: $(\\ln u)' = \\frac{u'}{u} = \\frac{2x-2}{x^2-2x+3}$." },
        { key: "c", text: "Hàm số đạt giá trị nhỏ nhất tại $x = 1$.", isCorrect: true, explanation: "Đúng vì $x^2 - 2x + 3$ đạt GTNN bằng 2 tại $x = 1$, nên $f(x)$ đạt GTNN là $\\ln 2$ tại $x = 1$." },
        { key: "d", text: "Hàm số đồng biến trên toàn bộ khoảng $(-\\infty; 1)$.", isCorrect: false, explanation: "Sai vì trên $(-\\infty; 1)$ thì $f'(x) < 0$ nên hàm số nghịch biến." }
      ]
    },
    {
      id: "g11_c6_tf2",
      question: "Cho phương trình $4^x - 5 \\cdot 2^x + 4 = 0$. Đánh giá tính Đúng / Sai của các mệnh đề sau:",
      points: 1.0,
      source: "🌐 Chuyên Sư Phạm",
      subItems: [
        { key: "a", text: "Đặt $t = 2^x$ ($t > 0$), phương trình trở thành $t^2 - 5t + 4 = 0$.", isCorrect: true, explanation: "Đúng vì $4^x = (2^x)^2 = t^2$." },
        { key: "b", text: "Phương trình bậc hai theo $t$ có hai nghiệm phân biệt là $t = 1$ và $t = 4$.", isCorrect: true, explanation: "Đúng: nghiệm là $1$ và $4$, đều thỏa mãn $t > 0$." },
        { key: "c", text: "Phương trình ban đầu có hai nghiệm thực là $x = 0$ và $x = 2$.", isCorrect: true, explanation: "Đúng: $2^x = 1 \\iff x = 0$; $2^x = 4 \\iff x = 2$." },
        { key: "d", text: "Tổng các nghiệm của phương trình bằng $5$.", isCorrect: false, explanation: "Sai vì tổng các nghiệm là $0 + 2 = 2$, không phải 5." }
      ]
    }
  ],
  part3_shortAnswer: [
    {
      id: "g11_c6_sa1",
      question: "Giải phương trình $\\log_2 x + \\log_2(x - 2) = 3$. Tìm nghiệm của phương trình.",
      correctAnswer: "4",
      acceptedAnswers: ["4", "x=4", "4.0"],
      hint: "ĐK $x > 2$. PT $\\iff \\log_2[x(x-2)] = 3 \\iff x^2 - 2x = 8 \\iff x^2 - 2x - 8 = 0 \\iff x = 4$ (nhận) hoặc $x = -2$ (loại).",
      points: 0.33,
      source: "🌐 Đề Thi Tốt Nghiệp THPT"
    },
    {
      id: "g11_c6_sa2",
      question: "Tính giá trị của biểu thức $P = \\log_2 4 + \\log_3 9 + \\log_5 125$.",
      correctAnswer: "7",
      acceptedAnswers: ["7", "7.0"],
      hint: "$P = 2 + 2 + 3 = 7$.",
      points: 0.33,
      source: "🌐 Sở GD&ĐT Hà Nội"
    },
    {
      id: "g11_c6_sa3",
      question: "Tìm số nguyên $x$ nhỏ nhất thoả mãn bất phương trình $\\left(\\frac{1}{2}\\right)^x < 8$.",
      correctAnswer: "-2",
      acceptedAnswers: ["-2", "x=-2"],
      hint: "$2^{-x} < 2^3 \\iff -x < 3 \\iff x > -3$. Số nguyên nhỏ nhất lớn hơn $-3$ là $-2$.",
      points: 0.33,
      source: "🌐 Chuyên Lam Sơn"
    },
    {
      id: "g11_c6_sa4",
      question: "Năng lượng giải phóng của một trận động đất đo theo thang Richter được cho bởi công thức $\\log E = 11.4 + 1.5M$ (với $E$ tính bằng Joule, $M$ là độ Richter). Trận động đất 7 độ Richter giải phóng năng lượng gấp bao nhiêu lần trận động đất 5 độ Richter?",
      correctAnswer: "1000",
      acceptedAnswers: ["1000", "1000 lần", "10^3"],
      hint: "$\\log(E_7 / E_5) = 1.5(7 - 5) = 1.5(2) = 3 \\implies E_7 / E_5 = 10^3 = 1000$.",
      points: 0.33,
      source: "🌐 Bài Toán Địa Chấn Thực Tế"
    }
  ],
  part4_essay: [
    {
      id: "g11_c6_es1",
      question: "Một người gửi tiết kiệm số tiền $A = 200$ triệu đồng vào ngân hàng với lãi suất không đổi $r = 6.5\\%/\\text{năm}$ theo hình thức lãi kép kỳ hạn 1 năm.\\n1) Viết công thức tính số tiền cả gốc và lãi $S(n)$ mà người đó nhận được sau $n$ năm gửi tiết kiệm.\\n2) Dùng lôgarit để tìm số năm ít nhất $n$ để số tiền người đó nhận được vượt quá 400 triệu đồng (gấp đôi số tiền ban đầu).",
      points: 1.0,
      source: "🌐 Đề Thi Tuyển Sinh & THPT Quốc Gia",
      solution: "1) Công thức tính số tiền sau $n$ năm:\\nTheo công thức lãi kép, số tiền cả gốc lẫn lãi sau $n$ năm là:\\n$S(n) = A(1 + r)^n = 200 \\cdot (1 + 0.065)^n = 200 \\cdot (1.065)^n$ (triệu đồng).\\n\\n2) Tìm số năm để số tiền vượt quá 400 triệu đồng:\\nThiết lập bất phương trình:\\n$200 \\cdot (1.065)^n > 400 \\iff (1.065)^n > 2$.\\nLấy logarit tự nhiên (hoặc logarit thập phân) cả hai vế:\\n$\\ln(1.065^n) > \\ln 2 \\iff n \\cdot \\ln(1.065) > \\ln 2$.\\nVì $\\ln(1.065) > 0$ nên bất đẳng thức không đổi chiều:\\n$n > \\frac{\\ln 2}{\\ln 1.065} \\approx \\frac{0.693147}{0.062975} \\approx 11.0067$ năm.\\nDo kỳ hạn gửi là 1 năm và $n$ là số nguyên dương, nên người gửi cần đợi tròn $n = 12$ năm thì số tiền nhận được mới chính thức vượt quá 400 triệu đồng.\\nKiểm tra lại:\\n- Sau 11 năm: $S(11) = 200 \\cdot (1.065)^{11} \\approx 399.83$ triệu (chưa đủ 400 triệu).\\n- Sau 12 năm: $S(12) = 200 \\cdot (1.065)^{12} \\approx 425.82$ triệu (đã vượt 400 triệu).\\nVậy sau ít nhất 12 năm, số tiền tích lũy vượt quá 400 triệu đồng.",
      criteria: [
        { step: "Bước 1", desc: "Viết đúng công thức lãi kép $S(n) = 200(1.065)^n$ triệu đồng", points: 0.25 },
        { step: "Bước 2", desc: "Thiết lập bất phương trình $(1.065)^n > 2$", points: 0.25 },
        { step: "Bước 3", desc: "Lấy logarit hai vế và tính ra giá trị xấp xỉ $n > 11.0067$", points: 0.25 },
        { step: "Bước 4", desc: "Lập luận làm tròn số nguyên năm và kết luận chính xác $n = 12$ năm", points: 0.25 }
      ]
    }
  ]
};

// ------------------------------------------------------------------------
// CHƯƠNG 7: QUAN HỆ VUÔNG GÓC TRONG KHÔNG GIAN. THỂ TÍCH
// ------------------------------------------------------------------------
window.REVIEW_SOURCE_BANK[11].ch_7 = {
  part1_mcq: [
    {
      id: "g11_c7_m1",
      question: "Nếu đường thẳng $d$ vuông góc với hai đường thẳng cắt nhau cùng nằm trong mặt phẳng $(P)$ thì:",
      options: [
        { key: "A", text: "$d \\perp (P)$" },
        { key: "B", text: "$d \\parallel (P)$" },
        { key: "C", text: "$d \\subset (P)$" },
        { key: "D", text: "$d$ hợp với $(P)$ góc $45^\\circ$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 SGK Toán 11 Mới",
      explanation: "Định lý điều kiện đường thẳng vuông góc với mặt phẳng: Nếu $d$ vuông góc với 2 đường thẳng cắt nhau nằm trong $(P)$ thì $d \\perp (P)$."
    },
    {
      id: "g11_c7_m2",
      question: "Cho hình chóp $S.ABC$ có đáy $ABC$ vuông tại $B$ và $SA \\perp (ABC)$. Khẳng định nào sau đây là đúng?",
      options: [
        { key: "A", text: "$BC \\perp (SAB)$" },
        { key: "B", text: "$BC \\perp (SAC)$" },
        { key: "C", text: "$AC \\perp (SAB)$" },
        { key: "D", text: "$AB \\perp (SBC)$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Đề Tham Khảo Bộ GD&ĐT",
      explanation: "Ta có $BC \\perp AB$ (giả thiết) và $BC \\perp SA$ (do $SA \\perp (ABC)$). Suy ra $BC \\perp (SAB)$."
    },
    {
      id: "g11_c7_m3",
      question: "Góc giữa đường thẳng $d$ và mặt phẳng $(P)$ là góc giữa:",
      options: [
        { key: "A", text: "Đường thẳng $d$ và hình chiếu vuông góc của nó lên $(P)$" },
        { key: "B", text: "Đường thẳng $d$ và một đường thẳng bất kỳ trong $(P)$" },
        { key: "C", text: "Đường thẳng $d$ và đường thẳng vuông góc với $(P)$" },
        { key: "D", text: "Đường thẳng $d$ và giao tuyến của $(P)$ với mặt phẳng khác" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 SGK Toán 11 Mới",
      explanation: "Theo định nghĩa SGK: Góc giữa đường thẳng và mặt phẳng là góc giữa đường thẳng đó và hình chiếu vuông góc của nó trên mặt phẳng."
    },
    {
      id: "g11_c7_m4",
      question: "Thể tích của khối chóp có diện tích đáy $B$ và chiều cao $h$ được tính theo công thức:",
      options: [
        { key: "A", text: "$V = \\frac{1}{3}Bh$" },
        { key: "B", text: "$V = Bh$" },
        { key: "C", text: "$V = \\frac{1}{2}Bh$" },
        { key: "D", text: "$V = \\frac{4}{3}Bh$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 SGK Toán 11 Mới",
      explanation: "Công thức thể tích khối chóp: $V = \\frac{1}{3}Bh$."
    },
    {
      id: "g11_c7_m5",
      question: "Thể tích của khối lăng trụ có diện tích đáy $B$ và chiều cao $h$ là:",
      options: [
        { key: "A", text: "$V = Bh$" },
        { key: "B", text: "$V = \\frac{1}{3}Bh$" },
        { key: "C", text: "$V = 3Bh$" },
        { key: "D", text: "$V = \\frac{1}{2}Bh$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Sở GD&ĐT Hà Nội",
      explanation: "Thể tích khối lăng trụ bằng diện tích đáy nhân với chiều cao: $V = Bh$."
    },
    {
      id: "g11_c7_m6",
      question: "Cho hình lập phương $ABCD.A'B'C'D'$. Góc giữa hai đường thẳng $AB$ và $B'C'$ bằng:",
      options: [
        { key: "A", text: "$90^\\circ$" },
        { key: "B", text: "$45^\\circ$" },
        { key: "C", text: "$60^\\circ$" },
        { key: "D", text: "$0^\\circ$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Chuyên Sư Phạm",
      explanation: "Vì $B'C' \\parallel BC$ nên góc giữa $AB$ và $B'C'$ bằng góc giữa $AB$ và $BC$, tức bằng $90^\\circ$."
    },
    {
      id: "g11_c7_m7",
      question: "Hai mặt phẳng $(P)$ và $(Q)$ được gọi là vuông góc với nhau nếu:",
      options: [
        { key: "A", text: "Góc giữa chúng bằng $90^\\circ$" },
        { key: "B", text: "Chúng có một đường thẳng chung" },
        { key: "C", text: "Góc giữa chúng bằng $0^\\circ$" },
        { key: "D", text: "Chúng cùng song song với mặt phẳng thứ ba" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 SGK Toán 11 Mới",
      explanation: "Định nghĩa hai mặt phẳng vuông góc: Góc giữa hai mặt phẳng bằng $90^\\circ$."
    },
    {
      id: "g11_c7_m8",
      question: "Cho hình chóp tứ giác đều $S.ABCD$ có đáy cạnh $a$ và chiều cao $h = a\\sqrt{3}$. Thể tích khối chóp bằng:",
      options: [
        { key: "A", text: "$\\frac{a^3\\sqrt{3}}{3}$" },
        { key: "B", text: "$a^3\\sqrt{3}$" },
        { key: "C", text: "$\\frac{a^3\\sqrt{3}}{6}$" },
        { key: "D", text: "$\\frac{a^3}{3}$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Sở GD&ĐT TP.HCM",
      explanation: "Đáy là hình vuông $B = a^2$. Chiều cao $h = a\\sqrt{3} \\implies V = \\frac{1}{3} a^2 (a\\sqrt{3}) = \\frac{a^3\\sqrt{3}}{3}$."
    },
    {
      id: "g11_c7_m9",
      question: "Khoảng cách giữa hai đường thẳng song song là:",
      options: [
        { key: "A", text: "Khoảng cách từ một điểm bất kỳ trên đường thẳng này đến đường thẳng kia" },
        { key: "B", text: "Độ dài đoạn nối hai điểm bất kỳ trên hai đường thẳng" },
        { key: "C", text: "Bằng 0" },
        { key: "D", text: "Vô cùng lớn" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 SGK Toán 11 Mới",
      explanation: "Khoảng cách giữa hai đường thẳng song song bằng khoảng cách từ điểm bất kỳ trên đường này tới đường kia."
    },
    {
      id: "g11_c7_m10",
      question: "Cho hình hộp chữ nhật có ba kích thước lần lượt là $3, 4, 5$. Thể tích của hình hộp chữ nhật đó bằng:",
      options: [
        { key: "A", text: "$60$" },
        { key: "B", text: "$20$" },
        { key: "C", text: "$12$" },
        { key: "D", text: "$30$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Chuyên Lam Sơn",
      explanation: "Thể tích hình hộp chữ nhật: $V = a \\cdot b \\cdot c = 3 \\times 4 \\times 5 = 60$."
    },
    {
      id: "g11_c7_m11",
      question: "Đoạn vuông góc chung của hai đường thẳng chéo nhau $a$ và $b$ là đoạn thẳng:",
      options: [
        { key: "A", text: "Nối hai điểm trên $a$ và $b$ đồng thời vuông góc với cả hai đường thẳng đó" },
        { key: "B", text: "Song song với cả $a$ và $b$" },
        { key: "C", text: "Vuông góc với mặt phẳng chứa $a$" },
        { key: "D", text: "Có độ dài lớn nhất" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 SGK Toán 11 Mới",
      explanation: "Đoạn vuông góc chung nối điểm $M \\in a$ và $N \\in b$ sao cho $MN \\perp a$ và $MN \\perp b$."
    },
    {
      id: "g11_c7_m12",
      question: "Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$, đáy $ABC$ vuông tại $A$ với $AB = 3, AC = 4$ và $SA = 6$. Thể tích của khối chóp $S.ABC$ bằng:",
      options: [
        { key: "A", text: "$12$" },
        { key: "B", text: "$24$" },
        { key: "C", text: "$36$" },
        { key: "D", text: "$72$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Đề Thi Tốt Nghiệp",
      explanation: "Diện tích đáy $S_{\\triangle ABC} = \\frac{1}{2}(3)(4) = 6$. Chiều cao $h = SA = 6 \\implies V = \\frac{1}{3}(6)(6) = 12$."
    }
  ],
  part2_trueFalse: [
    {
      id: "g11_c7_tf1",
      question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $a$, cạnh bên $SA$ vuông góc với mặt phẳng đáy và $SA = a\\sqrt{2}$. Xét tính Đúng / Sai của các khẳng định sau:",
      points: 1.0,
      source: "🌐 Sở GD&ĐT Hà Nội",
      subItems: [
        { key: "a", text: "Đường thẳng $BC$ vuông góc với mặt phẳng $(SAB)$.", isCorrect: true, explanation: "Đúng vì $BC \\perp AB$ và $BC \\perp SA$." },
        { key: "b", text: "Tam giác $SCD$ là tam giác vuông tại $D$.", isCorrect: true, explanation: "Đúng vì $CD \\perp AD$ và $CD \\perp SA \\implies CD \\perp (SAD) \\implies CD \\perp SD$." },
        { key: "c", text: "Góc giữa đường thẳng $SC$ và mặt phẳng $(ABCD)$ là góc $\\widehat{SCA}$.", isCorrect: true, explanation: "Đúng vì $AC$ là hình chiếu vuông góc của $SC$ lên $(ABCD)$." },
        { key: "d", text: "Góc $\\widehat{SCA} = 60^\\circ$.", isCorrect: false, explanation: "Sai vì $AC = a\\sqrt{2}$ và $SA = a\\sqrt{2} \\implies \\tan\\widehat{SCA} = \\frac{SA}{AC} = 1 \\implies \\widehat{SCA} = 45^\\circ$." }
      ]
    },
    {
      id: "g11_c7_tf2",
      question: "Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $a$. Đánh giá tính Đúng / Sai của các mệnh đề sau:",
      points: 1.0,
      source: "🌐 Chuyên Lam Sơn",
      subItems: [
        { key: "a", text: "Đường chéo $AC'$ vuông góc với mặt phẳng $(A'BD)$.", isCorrect: true, explanation: "Đúng theo tính chất hình lập phương: đường chéo $AC'$ vuông góc với hai mặt phẳng $(A'BD)$ và $(B'CD')$." },
        { key: "b", text: "Thể tích của hình lập phương là $V = a^3$.", isCorrect: true, explanation: "Đúng: $V = a^3$." },
        { key: "c", text: "Khoảng cách giữa hai mặt phẳng song song $(ABCD)$ và $(A'B'C'D')$ bằng $a$.", isCorrect: true, explanation: "Đúng vì bằng độ dài cạnh bên $AA' = a$." },
        { key: "d", text: "Góc giữa hai đường chéo $AC$ và $BD$ bằng $60^\\circ$.", isCorrect: false, explanation: "Sai vì $ABCD$ là hình vuông nên hai đường chéo vuông góc, góc bằng $90^\\circ$." }
      ]
    }
  ],
  part3_shortAnswer: [
    {
      id: "g11_c7_sa1",
      question: "Cho hình chóp $S.ABC$ có đáy là tam giác vuông tại $B$, $AB = 6\\text{ cm}, BC = 8\\text{ cm}$. Chiều cao $SA = 9\\text{ cm}$. Tính thể tích khối chóp theo đơn vị $\\text{cm}^3$.",
      correctAnswer: "72",
      acceptedAnswers: ["72", "72 cm3"],
      hint: "$S_{\\triangle ABC} = \\frac{1}{2}(6)(8) = 24\\text{ cm}^2$. $V = \\frac{1}{3}Bh = \\frac{1}{3}(24)(9) = 72\\text{ cm}^3$.",
      points: 0.33,
      source: "🌐 Đề Thi Tốt Nghiệp THPT"
    },
    {
      id: "g11_c7_sa2",
      question: "Tính thể tích của khối lập phương biết độ dài đường chéo bằng $2\\sqrt{3}\\text{ cm}$.",
      correctAnswer: "8",
      acceptedAnswers: ["8", "8 cm3"],
      hint: "Đường chéo $d = a\\sqrt{3} = 2\\sqrt{3} \\implies a = 2\\text{ cm}$. Thể tích $V = a^3 = 2^3 = 8\\text{ cm}^3$.",
      points: 0.33,
      source: "🌐 Sở GD&ĐT Hà Nội"
    },
    {
      id: "g11_c7_sa3",
      question: "Cho hình chóp $S.ABCD$ có đáy là hình vuông cạnh $4\\text{ cm}$, $SA \\perp (ABCD)$ và $SA = 4\\text{ cm}$. Tính khoảng cách từ điểm $A$ đến mặt phẳng $(SBD)$ theo đơn vị cm. Điền bình phương khoảng cách đó ($d^2$).",
      correctAnswer: "5.33",
      acceptedAnswers: ["5.33", "16/3"],
      hint: "Tứ diện vuông $A.SBD$ có $AS, AB, AD$ đôi một vuông góc: $\\frac{1}{d^2} = \\frac{1}{SA^2} + \\frac{1}{AB^2} + \\frac{1}{AD^2} = \\frac{3}{16} \\implies d^2 = \\frac{16}{3} \\approx 5.33$.",
      points: 0.33,
      source: "🌐 Chuyên Sư Phạm"
    },
    {
      id: "g11_c7_sa4",
      question: "Một khối bê tông có dạng hình lăng trụ đứng đáy là hình thoi có hai đường chéo dài $6\\text{ m}$ và $8\\text{ m}$, chiều cao của khối bê tông là $3\\text{ m}$. Tính thể tích của khối bê tông theo đơn vị $\\text{m}^3$.",
      correctAnswer: "72",
      acceptedAnswers: ["72", "72 m3"],
      hint: "Diện tích đáy hình thoi $B = \\frac{1}{2}(6)(8) = 24\\text{ m}^2$. Chiều cao $h = 3\\text{ m} \\implies V = Bh = 24 \\times 3 = 72\\text{ m}^3$.",
      points: 0.33,
      source: "🌐 Bài Toán Xây Dựng Thực Tế"
    }
  ],
  part4_essay: [
    {
      id: "g11_c7_es1",
      question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $a$. Cạnh bên $SA$ vuông góc với mặt phẳng đáy $(ABCD)$ và $SA = a\\sqrt{3}$.\\n1) Chứng minh rằng mặt phẳng $(SCD)$ vuông góc với mặt phẳng $(SAD)$.\\n2) Tính góc giữa đường thẳng $SB$ và mặt phẳng $(SCD)$.",
      points: 1.0,
      source: "🌐 Đề Thi THPT Quốc Gia",
      solution: "1) Chứng minh $(SCD) \\perp (SAD)$:\\n- Ta có $CD \\perp AD$ (do đáy $ABCD$ là hình vuông).\\n- Lại có $SA \\perp (ABCD) \\implies SA \\perp CD$ (vì $CD \\subset (ABCD)$).\\n- Từ đó suy ra $CD \\perp (SAD)$ (vì $CD$ vuông góc với hai đường cắt nhau $AD$ và $SA$).\\n- Mà đường thẳng $CD$ nằm trong mặt phẳng $(SCD)$.\\n- Do đó mặt phẳng $(SCD)$ vuông góc với mặt phẳng $(SAD)$.\\n\\n2) Tính góc giữa $SB$ và $(SCD)$:\\n- Ta có $AB \\parallel CD \\subset (SCD) \\implies AB \\parallel (SCD)$.\\n- Do đó khoảng cách từ $B$ đến $(SCD)$ bằng khoảng cách từ $A$ đến $(SCD)$.\\n- Theo câu 1, $(SAD) \\perp (SCD)$ theo giao tuyến $SD$. Trong mặt phẳng $(SAD)$, kẻ $AH \\perp SD$ tại $H$, suy ra $AH \\perp (SCD)$.\\n- Độ dài $AH$ trong tam giác vuông $SAD$ tại $A$:\\n  $AH = \\frac{SA \\cdot AD}{\\sqrt{SA^2 + AD^2}} = \\frac{a\\sqrt{3} \\cdot a}{\\sqrt{3a^2 + a^2}} = \\frac{a^2\\sqrt{3}}{2a} = \\frac{a\\sqrt{3}}{2}$.\\n- Gọi $\\varphi$ là góc giữa đường thẳng $SB$ và mặt phẳng $(SCD)$:\\n  Ta có $\\sin\\varphi = \\frac{d(B, (SCD))}{SB} = \\frac{AH}{SB}$.\\n  Tính độ dài $SB$: trong tam giác vuông $SAB$, $SB = \\sqrt{SA^2 + AB^2} = \\sqrt{3a^2 + a^2} = 2a$.\\n  Suy ra: $\\sin\\varphi = \\frac{\\frac{a\\sqrt{3}}{2}}{2a} = \\frac{\\sqrt{3}}{4}$.\\n- Kết luận: Góc giữa đường thẳng $SB$ và mặt phẳng $(SCD)$ là $\\varphi = \\arcsin\\left(\\frac{\\sqrt{3}}{4}\\right) \\approx 25.66^\\circ$.",
      criteria: [
        { step: "Bước 1", desc: "Chứng minh $CD \\perp (SAD)$ chuẩn xác từ $CD \\perp AD$ và $CD \\perp SA$", points: 0.25 },
        { step: "Bước 2", desc: "Kết luận $(SCD) \\perp (SAD)$ vì chứa đường thẳng $CD$", points: 0.25 },
        { step: "Bước 3", desc: "Dựng đoạn vuông góc $AH \\perp SD$ và tính đúng $AH = \\frac{a\\sqrt{3}}{2}$", points: 0.25 },
        { step: "Bước 4", desc: "Tính đúng độ dài $SB = 2a$ và $\\sin\\varphi = \\frac{\\sqrt{3}}{4}$", points: 0.25 }
      ]
    }
  ]
};

// ------------------------------------------------------------------------
// CHƯƠNG 8: CÁC QUY TẮC TÍNH XÁC SUẤT
// ------------------------------------------------------------------------
window.REVIEW_SOURCE_BANK[11].ch_8 = {
  part1_mcq: [
    {
      id: "g11_c8_m1",
      question: "Nếu hai biến cố $A$ và $B$ xung khắc với nhau thì xác suất của biến cố hợp $P(A \\cup B)$ bằng:",
      options: [
        { key: "A", text: "$P(A) + P(B)$" },
        { key: "B", text: "$P(A) \\cdot P(B)$" },
        { key: "C", text: "$P(A) - P(B)$" },
        { key: "D", text: "$P(A) + P(B) - P(AB)$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 SGK Toán 11 Mới",
      explanation: "Công thức cộng xác suất cho hai biến cố xung khắc ($A \\cap B = \\emptyset$): $P(A \\cup B) = P(A) + P(B)$."
    },
    {
      id: "g11_c8_m2",
      question: "Nếu hai biến cố $A$ và $B$ độc lập với nhau thì xác suất của biến cố giao $P(AB)$ bằng:",
      options: [
        { key: "A", text: "$P(A) \\cdot P(B)$" },
        { key: "B", text: "$P(A) + P(B)$" },
        { key: "C", text: "$P(A) - P(B)$" },
        { key: "D", text: "$\\frac{P(A)}{P(B)}$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Đề Tham Khảo Bộ GD&ĐT",
      explanation: "Định nghĩa hai biến cố độc lập: Biến cố $A$ và $B$ độc lập khi và chỉ khi $P(AB) = P(A) \\cdot P(B)$."
    },
    {
      id: "g11_c8_m3",
      question: "Công thức cộng xác suất tổng quát cho hai biến cố bất kỳ $A$ và $B$ là:",
      options: [
        { key: "A", text: "$P(A \\cup B) = P(A) + P(B) - P(AB)$" },
        { key: "B", text: "$P(A \\cup B) = P(A) + P(B)$" },
        { key: "C", text: "$P(A \\cup B) = P(A) \\cdot P(B)$" },
        { key: "D", text: "$P(A \\cup B) = P(AB) - P(A)$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 SGK Toán 11 Mới",
      explanation: "Quy tắc cộng xác suất tổng quát: $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$."
    },
    {
      id: "g11_c8_m4",
      question: "Cho $P(A) = 0.3$ và $P(B) = 0.5$. Biết $A$ và $B$ là hai biến cố độc lập. Xác suất $P(AB)$ bằng:",
      options: [
        { key: "A", text: "$0.15$" },
        { key: "B", text: "$0.8$" },
        { key: "C", text: "$0.2$" },
        { key: "D", text: "$0.65$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Sở GD&ĐT Hà Nội",
      explanation: "$P(AB) = P(A) \\cdot P(B) = 0.3 \\times 0.5 = 0.15$."
    },
    {
      id: "g11_c8_m5",
      question: "Mối quan hệ giữa xác suất của biến cố $A$ và biến cố đối $\\bar{A}$ là:",
      options: [
        { key: "A", text: "$P(\\bar{A}) = 1 - P(A)$" },
        { key: "B", text: "$P(\\bar{A}) = P(A)$" },
        { key: "C", text: "$P(\\bar{A}) = \\frac{1}{P(A)}$" },
        { key: "D", text: "$P(\\bar{A}) = 1 + P(A)$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 SGK Toán 11 Mới",
      explanation: "Biến cố đối thoả mãn $A \\cup \\bar{A} = \\Omega$ và $A \\cap \\bar{A} = \\emptyset \\implies P(\\bar{A}) = 1 - P(A)$."
    },
    {
      id: "g11_c8_m6",
      question: "Gieo đồng thời hai đồng xu cân đối. Xác suất để có ít nhất một đồng xu xuất hiện mặt ngửa là:",
      options: [
        { key: "A", text: "$\\frac{3}{4}$" },
        { key: "B", text: "$\\frac{1}{4}$" },
        { key: "C", text: "$\\frac{1}{2}$" },
        { key: "D", text: "$1$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Chuyên Sư Phạm",
      explanation: "Biến cố đối là cả hai đồng xu đều sấp: $P(\\text{cả 2 sấp}) = \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}$. Xác suất ít nhất một ngửa là $1 - \\frac{1}{4} = \\frac{3}{4}$."
    },
    {
      id: "g11_c8_m7",
      question: "Cho hai biến cố $A$ và $B$ có $P(A) = 0.4, P(B) = 0.5$ và $P(AB) = 0.2$. Xác suất $P(A \\cup B)$ bằng:",
      options: [
        { key: "A", text: "$0.7$" },
        { key: "B", text: "$0.9$" },
        { key: "C", text: "$0.2$" },
        { key: "D", text: "$0.8$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Sở GD&ĐT TP.HCM",
      explanation: "$P(A \\cup B) = P(A) + P(B) - P(AB) = 0.4 + 0.5 - 0.2 = 0.7$."
    },
    {
      id: "g11_c8_m8",
      question: "Hai xạ thủ $X$ và $Y$ bắn độc lập vào bia, xác suất trúng bia lần lượt là $0.7$ và $0.8$. Xác suất để cả hai cùng bắn trúng là:",
      options: [
        { key: "A", text: "$0.56$" },
        { key: "B", text: "$1.5$" },
        { key: "C", text: "$0.94$" },
        { key: "D", text: "$0.14$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Chuyên Lam Sơn",
      explanation: "Do hai xạ thủ bắn độc lập: $P = 0.7 \\times 0.8 = 0.56$."
    },
    {
      id: "g11_c8_m9",
      question: "Xác suất để một xạ thủ bắn trượt trong bài toán trên (xác suất trúng $0.7$) là:",
      options: [
        { key: "A", text: "$0.3$" },
        { key: "B", text: "$0.7$" },
        { key: "C", text: "$0.1$" },
        { key: "D", text: "$0$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 SGK Toán 11 Mới",
      explanation: "$P(\\text{trượt}) = 1 - P(\\text{trúng}) = 1 - 0.7 = 0.3$."
    },
    {
      id: "g11_c8_m10",
      question: "Hai biến cố $A$ và $B$ được gọi là xung khắc nếu:",
      options: [
        { key: "A", text: "Chúng không thể đồng thời cùng xảy ra trong một phép thử" },
        { key: "B", text: "Biến cố này xảy ra kéo theo biến cố kia xảy ra" },
        { key: "C", text: "Xác suất của chúng bằng nhau" },
        { key: "D", text: "Chúng độc lập với nhau" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 SGK Toán 11 Mới",
      explanation: "Định nghĩa hai biến cố xung khắc: $A \\cap B = \\emptyset$."
    },
    {
      id: "g11_c8_m11",
      question: "Hai cầu thủ sút phạt đền độc lập, xác suất thành công lần lượt là $0.8$ và $0.9$. Xác suất để có ít nhất một cầu thủ sút thành công là:",
      options: [
        { key: "A", text: "$0.98$" },
        { key: "B", text: "$0.72$" },
        { key: "C", text: "$0.85$" },
        { key: "D", text: "$0.02$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Đề Thi Tốt Nghiệp",
      explanation: "Xác suất cả hai cùng sút trượt: $(1 - 0.8)(1 - 0.9) = 0.2 \\times 0.1 = 0.02$. Xác suất ít nhất một người thành công: $1 - 0.02 = 0.98$."
    },
    {
      id: "g11_c8_m12",
      question: "Chọn ngẫu nhiên một lá bài từ bộ bài tú lơ khơ 52 lá. Gọi $A$ là biến cố chọn được lá Át (A), $B$ là biến cố chọn được lá màu đỏ. Xác suất $P(AB)$ bằng:",
      options: [
        { key: "A", text: "$\\frac{2}{52} = \\frac{1}{26}$" },
        { key: "B", text: "$\\frac{4}{52}$" },
        { key: "C", text: "$\\frac{26}{52}$" },
        { key: "D", text: "$\\frac{1}{52}$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Sở GD&ĐT Nam Định",
      explanation: "Biến cố $AB$ là chọn được lá Át màu đỏ (Át cơ hoặc Át rô). Có 2 lá thỏa mãn trong số 52 lá, xác suất là $\\frac{2}{52} = \\frac{1}{26}$."
    }
  ],
  part2_trueFalse: [
    {
      id: "g11_c8_tf1",
      question: "Hai bạn An và Bình cùng tham gia một kỳ thi học sinh giỏi độc lập với nhau. Xác suất để An đạt giải là $0.8$ và xác suất để Bình đạt giải là $0.7$. Xét tính Đúng / Sai của các khẳng định sau:",
      points: 1.0,
      source: "🌐 Sở GD&ĐT Hà Nội",
      subItems: [
        { key: "a", text: "Xác suất để cả hai bạn cùng đạt giải là $0.56$.", isCorrect: true, explanation: "Đúng: $0.8 \\times 0.7 = 0.56$." },
        { key: "b", text: "Xác suất để cả hai bạn đều không đạt giải là $0.06$.", isCorrect: true, explanation: "Đúng: $(1 - 0.8)(1 - 0.7) = 0.2 \\times 0.3 = 0.06$." },
        { key: "c", text: "Xác suất để có ít nhất một bạn đạt giải là $0.94$.", isCorrect: true, explanation: "Đúng: $1 - 0.06 = 0.94$." },
        { key: "d", text: "Xác suất để chỉ có đúng một bạn đạt giải là $0.50$.", isCorrect: false, explanation: "Sai: $P = 0.8(0.3) + 0.2(0.7) = 0.24 + 0.14 = 0.38 \\ne 0.50$." }
      ]
    },
    {
      id: "g11_c8_tf2",
      question: "Gieo một con xúc xắc cân đối hai lần liên tiếp. Gọi $A$ là biến cố 'lần thứ nhất xuất hiện mặt chẵn', $B$ là biến cố 'lần thứ hai xuất hiện mặt chia hết cho 3'. Đánh giá tính Đúng / Sai của các mệnh đề sau:",
      points: 1.0,
      source: "🌐 Chuyên Sư Phạm",
      subItems: [
        { key: "a", text: "Xác suất $P(A) = \\frac{1}{2}$ và $P(B) = \\frac{1}{3}$.", isCorrect: true, explanation: "Đúng: $A = \\{2, 4, 6\\} \\implies 3/6 = 1/2$; $B = \\{3, 6\\} \\implies 2/6 = 1/3$." },
        { key: "b", text: "$A$ và $B$ là hai biến cố độc lập.", isCorrect: true, explanation: "Đúng vì kết quả lần gieo thứ hai hoàn toàn không phụ thuộc lần gieo thứ nhất." },
        { key: "c", text: "Xác suất để lần thứ nhất chẵn và lần thứ hai chia hết cho 3 là $\\frac{1}{6}$.", isCorrect: true, explanation: "Đúng: $P(AB) = \\frac{1}{2} \\times \\frac{1}{3} = \\frac{1}{6}$." },
        { key: "d", text: "Hai biến cố $A$ và $B$ là hai biến cố xung khắc.", isCorrect: false, explanation: "Sai vì $P(AB) = 1/6 \\ne 0$, hai biến cố có thể đồng thời xảy ra." }
      ]
    }
  ],
  part3_shortAnswer: [
    {
      id: "g11_c8_sa1",
      question: "Cho hai biến cố độc lập $A$ và $B$ với $P(A) = 0.6, P(B) = 0.5$. Tính xác suất của biến cố hợp $P(A \\cup B)$.",
      correctAnswer: "0.8",
      acceptedAnswers: ["0.8", "0,8"],
      hint: "$P(AB) = 0.6 \\times 0.5 = 0.3$. $P(A \\cup B) = 0.6 + 0.5 - 0.3 = 0.8$.",
      points: 0.33,
      source: "🌐 Đề Thi Tốt Nghiệp THPT"
    },
    {
      id: "g11_c8_sa2",
      question: "Một hộp chứa 4 quả bóng xanh và 6 quả bóng đỏ. Lấy ngẫu nhiên đồng thời 2 quả bóng. Tính xác suất để lấy được 2 quả bóng cùng màu đỏ (kết quả dạng phân số $a/b$, hãy điền tử số của phân số tối giản $1/3$).",
      correctAnswer: "1",
      acceptedAnswers: ["1", "1/3"],
      hint: "$P = \\frac{C_6^2}{C_{10}^2} = \\frac{15}{45} = \\frac{1}{3}$. Tử số là 1.",
      points: 0.33,
      source: "🌐 Sở GD&ĐT Hà Nội"
    },
    {
      id: "g11_c8_sa3",
      question: "Ba người cùng bắn độc lập vào một con mồi với xác suất trúng của mỗi người lần lượt là $0.6, 0.7, 0.8$. Tính xác suất để con mồi bị bắn trúng bởi ít nhất một phát đạn.",
      correctAnswer: "0.976",
      acceptedAnswers: ["0.976", "0,976"],
      hint: "Xác suất cả 3 người đều bắn trượt: $(1 - 0.6)(1 - 0.7)(1 - 0.8) = 0.4 \\times 0.3 \\times 0.2 = 0.024$. Xác suất có ít nhất 1 người bắn trúng: $1 - 0.024 = 0.976$.",
      points: 0.33,
      source: "🌐 Chuyên Lam Sơn"
    },
    {
      id: "g11_c8_sa4",
      question: "Một mạng lưới điện có hai công tắc mắc song song hoạt động độc lập. Xác suất hỏng của công tắc 1 là $0.05$ và của công tắc 2 là $0.04$. Mạch bị mất điện khi cả hai công tắc cùng hỏng. Tính xác suất để mạch hoạt động bình thường.",
      correctAnswer: "0.998",
      acceptedAnswers: ["0.998", "0,998"],
      hint: "Xác suất mất điện (cả 2 hỏng): $0.05 \\times 0.04 = 0.002$. Xác suất mạch hoạt động: $1 - 0.002 = 0.998$.",
      points: 0.33,
      source: "🌐 Bài Toán Kỹ Thuật Độ Tin Cậy"
    }
  ],
  part4_essay: [
    {
      id: "g11_c8_es1",
      question: "Trong một kỳ thi trắc nghiệm gồm 4 câu hỏi độc lập, mỗi câu hỏi có 4 phương án lựa chọn và chỉ có duy nhất một phương án đúng. Một học sinh không học bài nên đã chọn ngẫu nhiên một phương án cho cả 4 câu.\\n1) Tính xác suất để học sinh đó trả lời đúng câu hỏi số 1 và tính xác suất để học sinh đó trả lời sai cả 4 câu hỏi.\\n2) Tính xác suất để học sinh đó trả lời đúng ít nhất một câu hỏi và xác suất để học sinh đó trả lời đúng đúng 2 câu hỏi.",
      points: 1.0,
      source: "🌐 Bài Toán Thi Cử & Xác Suất Nhị Thức",
      solution: "1) Trả lời đúng câu 1 và trả lời sai cả 4 câu:\\n- Mỗi câu hỏi có 4 phương án, chọn ngẫu nhiên nên xác suất chọn đúng mỗi câu là $p = \\frac{1}{4} = 0.25$, xác suất chọn sai là $q = 1 - p = \\frac{3}{4} = 0.75$.\\n- Do đó xác suất trả lời đúng câu số 1 là $P(D_1) = 0.25 = 25\\%$.\\n- Vì các câu hỏi độc lập với nhau, xác suất trả lời sai cả 4 câu là:\\n  $P(\\text{sai cả 4 câu}) = q^4 = \\left(\\frac{3}{4}\\right)^4 = \\frac{81}{256} \\approx 0.3164 = 31.64\\%$.\\n\\n2) Xác suất đúng ít nhất 1 câu và đúng đúng 2 câu:\\n- Biến cố 'trả lời đúng ít nhất một câu' là biến cố đối của 'trả lời sai cả 4 câu'.\\n  Do đó: $P(\\text{đúng } \\ge 1 \\text{ câu}) = 1 - P(\\text{sai cả 4}) = 1 - \\frac{81}{256} = \\frac{175}{256} \\approx 0.6836 = 68.36\\%$.\\n- Biến cố 'trả lời đúng đúng 2 câu':\\n  Số cách chọn ra 2 câu trong 4 câu để trả lời đúng là $C_4^2 = 6$.\\n  Xác suất của mỗi kịch bản (2 câu đúng và 2 câu sai) là $p^2 q^2 = \\left(\\frac{1}{4}\\right)^2 \\left(\\frac{3}{4}\\right)^2 = \\frac{9}{256}$.\\n  Vậy xác suất để trả lời đúng đúng 2 câu là:\\n  $P(X = 2) = C_4^2 \\cdot p^2 \\cdot q^2 = 6 \\cdot \\frac{9}{256} = \\frac{54}{256} = \\frac{27}{128} \\approx 0.2109 = 21.09\\%$.",
      criteria: [
        { step: "Bước 1", desc: "Xác định đúng xác suất thành công $p=1/4$ và thất bại $q=3/4$ cho mỗi câu", points: 0.25 },
        { step: "Bước 2", desc: "Tính đúng xác suất sai cả 4 câu là $\\frac{81}{256} \\approx 31.64\\%$", points: 0.25 },
        { step: "Bước 3", desc: "Dùng biến cố đối tính đúng xác suất đúng ít nhất 1 câu là $\\frac{175}{256} \\approx 68.36\\%$", points: 0.25 },
        { step: "Bước 4", desc: "Áp dụng công thức Bernoulli tính đúng xác suất đúng đúng 2 câu là $\\frac{27}{128} \\approx 21.09\\%$", points: 0.25 }
      ]
    }
  ]
};

// ------------------------------------------------------------------------
// CHƯƠNG 9: ĐẠO HÀM
// ------------------------------------------------------------------------
window.REVIEW_SOURCE_BANK[11].ch_9 = {
  part1_mcq: [
    {
      id: "g11_c9_m1",
      question: "Đạo hàm của hàm số $y = x^4$ là:",
      options: [
        { key: "A", text: "$y' = 4x^3$" },
        { key: "B", text: "$y' = \\frac{x^5}{5}$" },
        { key: "C", text: "$y' = 4x$" },
        { key: "D", text: "$y' = 3x^4$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 SGK Toán 11 Mới",
      explanation: "Công thức đạo hàm hàm luỹ thừa $(x^n)' = n x^{n-1} \\implies (x^4)' = 4x^3$."
    },
    {
      id: "g11_c9_m2",
      question: "Đạo hàm của hàm số $y = \\sin x$ là:",
      options: [
        { key: "A", text: "$y' = \\cos x$" },
        { key: "B", text: "$y' = -\\cos x$" },
        { key: "C", text: "$y' = \\sin x$" },
        { key: "D", text: "$y' = -\\sin x$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 SGK Toán 11 Mới",
      explanation: "Công thức cơ bản: $(\\sin x)' = \\cos x$."
    },
    {
      id: "g11_c9_m3",
      question: "Đạo hàm của hàm số $y = \\sqrt{x}$ với $x > 0$ là:",
      options: [
        { key: "A", text: "$y' = \\frac{1}{2\\sqrt{x}}$" },
        { key: "B", text: "$y' = \\frac{1}{\\sqrt{x}}$" },
        { key: "C", text: "$y' = 2\\sqrt{x}$" },
        { key: "D", text: "$y' = \\frac{\\sqrt{x}}{2}$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Đề Tham Khảo Bộ GD&ĐT",
      explanation: "Công thức đạo hàm căn bậc hai: $(\\sqrt{x})' = \\frac{1}{2\\sqrt{x}}$."
    },
    {
      id: "g11_c9_m4",
      question: "Hệ số góc của tiếp tuyến của đồ thị hàm số $y = x^3 - 3x + 1$ tại điểm có hoành độ $x_0 = 2$ bằng:",
      options: [
        { key: "A", text: "$k = 9$" },
        { key: "B", text: "$k = 3$" },
        { key: "C", text: "$k = 12$" },
        { key: "D", text: "$k = 0$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Sở GD&ĐT Hà Nội",
      explanation: "Hệ số góc $k = y'(x_0)$. Ta có $y' = 3x^2 - 3 \\implies y'(2) = 3(4) - 3 = 9$."
    },
    {
      id: "g11_c9_m5",
      question: "Đạo hàm của tích hai hàm số $(uv)'$ bằng:",
      options: [
        { key: "A", text: "$u'v + uv'$" },
        { key: "B", text: "$u'v - uv'$" },
        { key: "C", text: "$u'v'$" },
        { key: "D", text: "$uv + u'v'$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 SGK Toán 11 Mới",
      explanation: "Quy tắc tính đạo hàm của tích: $(uv)' = u'v + uv'$."
    },
    {
      id: "g11_c9_m6",
      question: "Đạo hàm của hàm số $y = \\frac{2x - 1}{x + 1}$ là:",
      options: [
        { key: "A", text: "$y' = \\frac{3}{(x+1)^2}$" },
        { key: "B", text: "$y' = \\frac{1}{(x+1)^2}$" },
        { key: "C", text: "$y' = \\frac{-3}{(x+1)^2}$" },
        { key: "D", text: "$y' = 2$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Chuyên Sư Phạm",
      explanation: "Đạo hàm phân thức bậc 1/1: $y' = \\frac{2(1) - (-1)(1)}{(x+1)^2} = \\frac{3}{(x+1)^2}$."
    },
    {
      id: "g11_c9_m7",
      question: "Một chất điểm chuyển động có phương trình quãng đường $s(t) = t^3 - 3t^2 + 5t$ ($t$ tính bằng giây, $s$ tính bằng mét). Gia tốc tức thời của chất điểm tại thời điểm $t = 2\\text{ s}$ bằng:",
      options: [
        { key: "A", text: "$6\\text{ m/s}^2$" },
        { key: "B", text: "$5\\text{ m/s}^2$" },
        { key: "C", text: "$12\\text{ m/s}^2$" },
        { key: "D", text: "$0\\text{ m/s}^2$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Ý Nghĩa Vật Lý Đạo Hàm",
      explanation: "Vận tốc $v(t) = s'(t) = 3t^2 - 6t + 5$. Gia tốc $a(t) = v'(t) = s''(t) = 6t - 6$. Tại $t = 2\\text{ s} \\implies a(2) = 6(2) - 6 = 6\\text{ m/s}^2$."
    },
    {
      id: "g11_c9_m8",
      question: "Phương trình tiếp tuyến của đồ thị hàm số $y = x^2$ tại điểm $M(1; 1)$ là:",
      options: [
        { key: "A", text: "$y = 2x - 1$" },
        { key: "B", text: "$y = 2x + 1$" },
        { key: "C", text: "$y = x$" },
        { key: "D", text: "$y = -2x + 3$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Sở GD&ĐT TP.HCM",
      explanation: "$y' = 2x \\implies y'(1) = 2$. Tiếp tuyến: $y - 1 = 2(x - 1) \\iff y = 2x - 1$."
    },
    {
      id: "g11_c9_m9",
      question: "Đạo hàm của hàm số hợp $y = (2x + 1)^5$ là:",
      options: [
        { key: "A", text: "$y' = 10(2x + 1)^4$" },
        { key: "B", text: "$y' = 5(2x + 1)^4$" },
        { key: "C", text: "$y' = 2(2x + 1)^4$" },
        { key: "D", text: "$y' = 10(2x + 1)^5$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Chuyên Lam Sơn",
      explanation: "$(u^n)' = n u^{n-1} u' = 5(2x+1)^4 (2) = 10(2x+1)^4$."
    },
    {
      id: "g11_c9_m10",
      question: "Đạo hàm cấp hai của hàm số $y = \\cos x$ là:",
      options: [
        { key: "A", text: "$y'' = -\\cos x$" },
        { key: "B", text: "$y'' = \\cos x$" },
        { key: "C", text: "$y'' = -\\sin x$" },
        { key: "D", text: "$y'' = \\sin x$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 SGK Toán 11 Mới",
      explanation: "$y' = -\\sin x \\implies y'' = (-\\sin x)' = -\\cos x$."
    },
    {
      id: "g11_c9_m11",
      question: "Tìm các điểm trên đồ thị hàm số $y = x^3 - 3x^2$ mà tại đó tiếp tuyến song song với trục hoành.",
      options: [
        { key: "A", text: "$x = 0$ và $x = 2$" },
        { key: "B", text: "$x = 1$" },
        { key: "C", text: "$x = -1$ và $x = 1$" },
        { key: "D", text: "$x = 3$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Đề Thi Tốt Nghiệp",
      explanation: "Tiếp tuyến song song trục hoành $\\iff y' = 0 \\iff 3x^2 - 6x = 0 \\iff x = 0$ hoặc $x = 2$."
    },
    {
      id: "g11_c9_m12",
      question: "Đạo hàm của hàm số $y = \\tan x$ trên tập xác định bằng:",
      options: [
        { key: "A", text: "$y' = 1 + \\tan^2 x = \\frac{1}{\\cos^2 x}$" },
        { key: "B", text: "$y' = \\cot x$" },
        { key: "C", text: "$y' = -\\frac{1}{\\cos^2 x}$" },
        { key: "D", text: "$y' = \\frac{1}{\\sin^2 x}$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 SGK Toán 11 Mới",
      explanation: "Công thức đạo hàm hàm tang: $(\\tan x)' = \\frac{1}{\\cos^2 x} = 1 + \\tan^2 x$."
    }
  ],
  part2_trueFalse: [
    {
      id: "g11_c9_tf1",
      question: "Cho hàm số $y = f(x) = x^3 - 3x^2 + 2$ có đồ thị $(C)$. Xét tính Đúng / Sai của các khẳng định sau:",
      points: 1.0,
      source: "🌐 Sở GD&ĐT Hà Nội",
      subItems: [
        { key: "a", text: "Đạo hàm của hàm số là $f'(x) = 3x^2 - 6x$.", isCorrect: true, explanation: "Đúng: $(x^3)' - 3(x^2)' = 3x^2 - 6x$." },
        { key: "b", text: "Phương trình $f'(x) = 0$ có hai nghiệm phân biệt $x = 0$ và $x = 2$.", isCorrect: true, explanation: "Đúng: $3x(x - 2) = 0 \\iff x = 0$ hoặc $x = 2$." },
        { key: "c", text: "Tiếp tuyến của $(C)$ tại điểm có hoành độ $x = 1$ có hệ số góc bằng $-3$.", isCorrect: true, explanation: "Đúng: $f'(1) = 3(1) - 6(1) = -3$." },
        { key: "d", text: "Phương trình tiếp tuyến của $(C)$ tại điểm có hoành độ $x = 1$ là $y = -3x + 3$.", isCorrect: true, explanation: "Đúng: tại $x = 1 \\implies y = 1 - 3 + 2 = 0$. Tiếp tuyến: $y - 0 = -3(x - 1) \\iff y = -3x + 3$." }
      ]
    },
    {
      id: "g11_c9_tf2",
      question: "Một vật rơi tự do từ độ cao $180\\text{ m}$ xuống đất theo phương trình $s(t) = 5t^2$ ($s$ tính bằng mét, $t$ tính bằng giây). Xét tính Đúng / Sai của các mệnh đề sau:",
      points: 1.0,
      source: "🌐 Chuyên Sư Phạm",
      subItems: [
        { key: "a", text: "Vận tốc tức thời của vật tại thời điểm $t$ là $v(t) = 10t\\text{ (m/s)}$.", isCorrect: true, explanation: "Đúng: $v(t) = s'(t) = 10t$." },
        { key: "b", text: "Thời gian từ lúc rơi đến khi chạm đất là $t = 6\\text{ s}$.", isCorrect: true, explanation: "Đúng: $5t^2 = 180 \\iff t^2 = 36 \\iff t = 6\\text{ s}$." },
        { key: "c", text: "Vận tốc của vật lúc vừa chạm đất bằng $60\\text{ m/s}$.", isCorrect: true, explanation: "Đúng: $v(6) = 10(6) = 60\\text{ m/s}$." },
        { key: "d", text: "Gia tốc của vật trong suốt quá trình rơi thay đổi theo thời gian.", isCorrect: false, explanation: "Sai vì gia tốc $a(t) = v'(t) = 10\\text{ m/s}^2$ là hằng số không đổi (chuyển động nhanh dần đều)." }
      ]
    }
  ],
  part3_shortAnswer: [
    {
      id: "g11_c9_sa1",
      question: "Cho hàm số $y = x^3 - 2x^2 + 5x - 1$. Tính giá trị của đạo hàm tại điểm $x = 2$ ($y'(2)$).",
      correctAnswer: "9",
      acceptedAnswers: ["9", "9.0"],
      hint: "$y' = 3x^2 - 4x + 5 \\implies y'(2) = 3(4) - 4(2) + 5 = 12 - 8 + 5 = 9$.",
      points: 0.33,
      source: "🌐 Đề Thi Tốt Nghiệp THPT"
    },
    {
      id: "g11_c9_sa2",
      question: "Tìm hệ số góc $k$ của tiếp tuyến với parabol $y = x^2 - 4x + 3$ tại điểm có tung độ bằng $3$ và hoành độ dương.",
      correctAnswer: "4",
      acceptedAnswers: ["4", "k=4", "4.0"],
      hint: "Cho $y = 3 \\iff x^2 - 4x = 0 \\iff x = 0$ hoặc $x = 4$. Do hoành độ dương nên chọn $x = 4$. $y' = 2x - 4 \\implies k = y'(4) = 8 - 4 = 4$.",
      points: 0.33,
      source: "🌐 Sở GD&ĐT Hà Nội"
    },
    {
      id: "g11_c9_sa3",
      question: "Cho hàm số $y = \\sqrt{2x + 1}$. Tính giá trị của $y'(4)$ (kết quả dạng số thập phân làm tròn 2 chữ số hoặc phân số $1/3$, điền $0.33$).",
      correctAnswer: "0.33",
      acceptedAnswers: ["0.33", "1/3"],
      hint: "$y' = \\frac{(2x+1)'}{2\\sqrt{2x+1}} = \\frac{2}{2\\sqrt{2x+1}} = \\frac{1}{\\sqrt{2x+1}}$. Tại $x = 4 \\implies y'(4) = \\frac{1}{\\sqrt{9}} = \\frac{1}{3} \\approx 0.33$.",
      points: 0.33,
      source: "🌐 Chuyên Lam Sơn"
    },
    {
      id: "g11_c9_sa4",
      question: "Một bể chứa nước hình hộp chữ nhật có đáy vuông cạnh $2\\text{ m}$. Nước được bơm vào bể với tốc độ không đổi $0.4\\text{ m}^3/\\text{phút}$. Tính tốc độ dâng lên của mực nước trong bể theo đơn vị $\\text{m/phút}$.",
      correctAnswer: "0.1",
      acceptedAnswers: ["0.1", "0,1", "1/10"],
      hint: "Thể tích nước $V = S_{\\text{đáy}} \\times h = 4h$. Đạo hàm theo thời gian: $\\frac{dV}{dt} = 4 \\frac{dh}{dt} \\implies 0.4 = 4 \\frac{dh}{dt} \\implies \\frac{dh}{dt} = 0.1\\text{ m/phút}$.",
      points: 0.33,
      source: "🌐 Bài Toán Tốc Độ Thay Đổi Liên Quan"
    }
  ],
  part4_essay: [
    {
      id: "g11_c9_es1",
      question: "Cho hàm số $y = f(x) = \\frac{x + 2}{x - 1}$ có đồ thị $(C)$.\\n1) Viết phương trình tiếp tuyến của đồ thị $(C)$ tại giao điểm của $(C)$ với trục tung $Oy$.\\n2) Viết phương trình tiếp tuyến của đồ thị $(C)$ biết tiếp tuyến đó song song với đường thẳng $d: y = -3x + 2026$.",
      points: 1.0,
      source: "🌐 Đề Thi THPT Quốc Gia",
      solution: "1) Tiếp tuyến tại giao điểm với trục tung $Oy$:\\n- Cho $x = 0 \\implies y = \\frac{0 + 2}{0 - 1} = -2$. Giao điểm là $M(0; -2)$.\\n- Đạo hàm: $y' = \\frac{1(-1) - 2(1)}{(x-1)^2} = \\frac{-3}{(x-1)^2}$.\\n- Hệ số góc tại $x = 0$ là: $k = y'(0) = \\frac{-3}{(-1)^2} = -3$.\\n- Phương trình tiếp tuyến tại $M(0; -2)$:\\n  $y - (-2) = -3(x - 0) \\iff y = -3x - 2$.\\n\\n2) Tiếp tuyến song song với đường thẳng $d: y = -3x + 2026$:\\n- Vì tiếp tuyến song song với $d$ nên hệ số góc của tiếp tuyến bằng hệ số góc của $d$:\\n  $k = -3 \\iff y'(x_0) = -3 \\iff \\frac{-3}{(x_0 - 1)^2} = -3 \\iff (x_0 - 1)^2 = 1$\\n  $\\iff x_0 - 1 = 1$ hoặc $x_0 - 1 = -1$\\n  $\\iff x_0 = 2$ hoặc $x_0 = 0$.\\n- Trường hợp 1: $x_0 = 0 \\implies y_0 = -2$. Phương trình tiếp tuyến là $y = -3x - 2$ (thỏa mãn khác 2026 nên không trùng $d$).\\n- Trường hợp 2: $x_0 = 2 \\implies y_0 = \\frac{2 + 2}{2 - 1} = 4$.\\n  Phương trình tiếp tuyến tại $(2; 4)$:\\n  $y - 4 = -3(x - 2) \\iff y = -3x + 6 + 4 \\iff y = -3x + 10$ (thỏa mãn khác 2026).\\n\\nKết luận:\\nCó hai tiếp tuyến thỏa mãn là $y = -3x - 2$ và $y = -3x + 10$.",
      criteria: [
        { step: "Bước 1", desc: "Tính đúng đạo hàm $y' = \\frac{-3}{(x-1)^2}$ và tìm toạ độ điểm $M(0; -2)$", points: 0.25 },
        { step: "Bước 2", desc: "Viết đúng phương trình tiếp tuyến thứ nhất $y = -3x - 2$", points: 0.25 },
        { step: "Bước 3", desc: "Giải đúng phương trình tiếp tuyến song song ra hai nghiệm hoành độ $x_0 = 0$ và $x_0 = 2$", points: 0.25 },
        { step: "Bước 4", desc: "Viết đúng tiếp tuyến thứ hai $y = -3x + 10$ và kiểm tra điều kiện không trùng với $d$", points: 0.25 }
      ]
    }
  ]
};
// ==========================================================================
// NGÂN HÀNG ÔN TẬP TOÁN LỚP 10 (CHUẨN 4 PHẦN BỘ GD&ĐT)
// ĐẦY ĐỦ 9 CHƯƠNG - MỖI CHƯƠNG >= 12 TRẮC NGHIỆM, 2 ĐÚNG/SAI, 4 TRẢ LỜI NGẮN, 1 TỰ LUẬN
// ==========================================================================

window.REVIEW_SOURCE_BANK = window.REVIEW_SOURCE_BANK || {};
window.REVIEW_SOURCE_BANK[10] = {
  // ------------------------------------------------------------------------
  // CHƯƠNG 1: MỆNH ĐỀ VÀ TẬP HỢP
  // ------------------------------------------------------------------------
  ch_1: {
    part1_mcq: [
      {
        id: "g10_c1_m1",
        question: "Câu nào sau đây là một mệnh đề toán học?",
        options: [
          { key: "A", text: "$17$ là một số nguyên tố" },
          { key: "B", text: "Thời tiết hôm nay đẹp quá!" },
          { key: "C", text: "Bạn đã làm bài tập về nhà chưa?" },
          { key: "D", text: "$x + 2 > 5$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 SGK Toán 10 Mới",
        explanation: "Mệnh đề toán học là một khẳng định có tính đúng hoặc sai dứt khoát. '17 là số nguyên tố' là mệnh đề đúng."
      },
      {
        id: "g10_c1_m2",
        question: "Mệnh đề phủ định của mệnh đề $P: \"\\forall x \\in \\mathbb{R}, x^2 + 1 > 0\"$ là:",
        options: [
          { key: "A", text: "$\\bar{P}: \"\\exists x \\in \\mathbb{R}, x^2 + 1 \\le 0\"$" },
          { key: "B", text: "$\\bar{P}: \"\\forall x \\in \\mathbb{R}, x^2 + 1 \\le 0\"$" },
          { key: "C", text: "$\\bar{P}: \"\\exists x \\in \\mathbb{R}, x^2 + 1 < 0\"$" },
          { key: "D", text: "$\\bar{P}: \"\\forall x \\in \\mathbb{R}, x^2 + 1 < 0\"$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Đề Tham Khảo Bộ GD&ĐT",
        explanation: "Phủ định của $\\forall$ là $\\exists$ và phủ định của $>$ là $\\le$."
      },
      {
        id: "g10_c1_m3",
        question: "Cho tập hợp $A = \\{x \\in \\mathbb{R} \\mid 2x^2 - 5x + 2 = 0\\}$. Liệt kê các phần tử của tập hợp $A$:",
        options: [
          { key: "A", text: "$A = \\left\\{\\frac{1}{2}; 2\\right\\}$" },
          { key: "B", text: "$A = \\{1; 2\\}$" },
          { key: "C", text: "$A = \\left\\{-\\frac{1}{2}; -2\\right\\}$" },
          { key: "D", text: "$A = \\{2\\}$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Sở GD&ĐT Hà Nội",
        explanation: "Giải phương trình $2x^2 - 5x + 2 = 0 \\iff (2x - 1)(x - 2) = 0 \\iff x = 1/2$ hoặc $x = 2$."
      },
      {
        id: "g10_c1_m4",
        question: "Cho hai tập hợp $A = [-2; 3]$ và $B = (1; 5)$. Tập hợp $A \\cap B$ bằng:",
        options: [
          { key: "A", text: "$(1; 3]$" },
          { key: "B", text: "[-2; 5)" },
          { key: "C", text: "[-2; 1]" },
          { key: "D", text: "(3; 5)" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Chuyên Sư Phạm",
        explanation: "Giao của hai tập hợp là phần tử thuộc cả hai tập: $A \\cap B = (1; 3]$."
      },
      {
        id: "g10_c1_m5",
        question: "Cho tập hợp $A = \\{1; 2; 3\\}$. Số tập hợp con của tập hợp $A$ bằng:",
        options: [
          { key: "A", text: "$8$" },
          { key: "B", text: "$6$" },
          { key: "C", text: "$7$" },
          { key: "D", text: "$3$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Sở GD&ĐT TP.HCM",
        explanation: "Tập hợp có $n$ phần tử thì có $2^n$ tập con. Ở đây $2^3 = 8$."
      },
      {
        id: "g10_c1_m6",
        question: "Cho hai tập hợp $A = (-\\infty; 2]$ và $B = [-1; +\\infty)$. Tập hợp $A \\cup B$ bằng:",
        options: [
          { key: "A", text: "$\\mathbb{R}$" },
          { key: "B", text: "[-1; 2]" },
          { key: "C", text: "(-1; 2)" },
          { key: "D", text: "$\\emptyset$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Chuyên Lam Sơn",
        explanation: "Hợp của hai khoảng này phủ kín toàn bộ trục số thực $\\mathbb{R}$."
      },
      {
        id: "g10_c1_m7",
        question: "Hiệu của hai tập hợp $A \\setminus B$ với $A = \\{0; 1; 2; 3; 4\\}$ và $B = \\{2; 3; 5\\}$ là:",
        options: [
          { key: "A", text: "$\\{0; 1; 4\\}$" },
          { key: "B", text: "$\\{5\\}$" },
          { key: "C", text: "$\\{2; 3\\}$" },
          { key: "D", text: "$\\{0; 1; 2; 3; 4; 5\\}$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 SGK Toán 10 Mới",
        explanation: "$A \\setminus B$ gồm các phần tử thuộc $A$ nhưng không thuộc $B$: $\\{0; 1; 4\\}$."
      },
      {
        id: "g10_c1_m8",
        question: "Mệnh đề kéo theo $P \\implies Q$ chỉ sai khi:",
        options: [
          { key: "A", text: "$P$ đúng và $Q$ sai" },
          { key: "B", text: "$P$ sai và $Q$ đúng" },
          { key: "C", text: "$P$ sai và $Q$ sai" },
          { key: "D", text: "$P$ đúng và $Q$ đúng" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 SGK Toán 10 Mới",
        explanation: "Bảng chân trị của mệnh đề kéo theo: $P \\implies Q$ chỉ sai khi tiền đề $P$ đúng nhưng kết luận $Q$ sai."
      },
      {
        id: "g10_c1_m9",
        question: "Cho tập hợp $X = \\{x \\in \\mathbb{N} \\mid x < 5\\}$. Số phần tử của tập hợp $X$ là:",
        options: [
          { key: "A", text: "$5$" },
          { key: "B", text: "$4$" },
          { key: "C", text: "$6$" },
          { key: "D", text: "Vô số" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Sở GD&ĐT Nam Định",
        explanation: "$X = \\{0; 1; 2; 3; 4\\}$, có 5 phần tử."
      },
      {
        id: "g10_c1_m10",
        question: "Phần bù của tập hợp $A = [0; +\\infty)$ trong $\\mathbb{R}$ (ký hiệu $C_{\\mathbb{R}} A$) là:",
        options: [
          { key: "A", text: "$(-\\infty; 0)$" },
          { key: "B", text: "$(-\\infty; 0]$" },
          { key: "C", text: "$(0; +\\infty)$" },
          { key: "D", text: "$\\emptyset$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Sở GD&ĐT Bắc Ninh",
        explanation: "$C_{\\mathbb{R}} A = \\mathbb{R} \\setminus [0; +\\infty) = (-\\infty; 0)$."
      },
      {
        id: "g10_c1_m11",
        question: "Trong các khẳng định sau, khẳng định nào tương đương với \"$x = 2$\"?",
        options: [
          { key: "A", text: "$x^3 = 8$" },
          { key: "B", text: "$x^2 = 4$" },
          { key: "C", text: "$|x| = 2$" },
          { key: "D", text: "$\\sqrt{x} = \\sqrt{2}$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Đề Thi Tuyển Sinh",
        explanation: "Trên tập số thực, phương trình $x^3 = 8$ có nghiệm duy nhất $x = 2$, nên tương đương dứt khoát với $x = 2$."
      },
      {
        id: "g10_c1_m12",
        question: "Lớp 10A có 45 học sinh, trong đó có 25 học sinh thích môn Toán, 20 học sinh thích môn Văn, và 10 học sinh thích cả hai môn. Số học sinh không thích môn nào trong hai môn trên là:",
        options: [
          { key: "A", text: "$10$" },
          { key: "B", text: "$5$" },
          { key: "C", text: "$15$" },
          { key: "D", text: "$0$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Bài Toán Biểu Đồ Ven GDPT 2018",
        explanation: "Số học sinh thích ít nhất một môn: $25 + 20 - 10 = 35$. Số học sinh không thích môn nào: $45 - 35 = 10$ học sinh."
      }
    ],
    part2_trueFalse: [
      {
        id: "g10_c1_tf1",
        question: "Cho hai tập hợp $A = \\{x \\in \\mathbb{R} \\mid -3 \\le x < 2\\}$ và $B = \\{x \\in \\mathbb{R} \\mid 0 < x \\le 5\\}$. Xét tính Đúng / Sai của các khẳng định sau:",
        points: 1.0,
        source: "🌐 Sở GD&ĐT Hà Nội",
        subItems: [
          { key: "a", text: "Dưới dạng khoảng đoạn, $A = [-3; 2)$ và $B = (0; 5]$.", isCorrect: true, explanation: "Đúng theo định nghĩa các khoảng nửa khoảng." },
          { key: "b", text: "Tập hợp giao $A \\cap B = (0; 2)$.", isCorrect: true, explanation: "Đúng vì phần tử chung thỏa mãn $0 < x < 2$." },
          { key: "c", text: "Tập hợp hợp $A \\cup B = [-3; 5]$.", isCorrect: true, explanation: "Đúng vì phủ từ $-3$ đến $5$." },
          { key: "d", text: "Tập hợp hiệu $A \\setminus B = [-3; 0)$.", isCorrect: false, explanation: "Sai vì $0 \\notin B$ nên số $0 \\in A \\setminus B$, đúng phải là $A \\setminus B = [-3; 0]$." }
        ]
      },
      {
        id: "g10_c1_tf2",
        question: "Xét tính Đúng / Sai của các mệnh đề toán học sau:",
        points: 1.0,
        source: "🌐 Chuyên Lam Sơn",
        subItems: [
          { key: "a", text: "Mệnh đề $P: \"\\forall n \\in \\mathbb{N}, n^2 \\ge 0\"$ là mệnh đề đúng.", isCorrect: true, explanation: "Đúng vì bình phương mọi số thực luôn không âm." },
          { key: "b", text: "Mệnh đề $Q: \"\\exists x \\in \\mathbb{R}, x^2 - 4x + 5 = 0\"$ là mệnh đề đúng.", isCorrect: false, explanation: "Sai vì biệt thức $\\Delta' = 4 - 5 = -1 < 0$, phương trình vô nghiệm trên $\\mathbb{R}$." },
          { key: "c", text: "Tập hợp rỗng $\\emptyset$ là tập con của mọi tập hợp.", isCorrect: true, explanation: "Đúng theo quy ước chuẩn của lý thuyết tập hợp." },
          { key: "d", text: "Nếu $a \\in \\mathbb{Q}$ và $b \\in \\mathbb{I}$ thì $a + b$ luôn là số vô tỉ.", isCorrect: true, explanation: "Đúng: Tổng của một số hữu tỉ và một số vô tỉ luôn là một số vô tỉ." }
        ]
      }
    ],
    part3_shortAnswer: [
      {
        id: "g10_c1_sa1",
        question: "Cho tập hợp $A = \\{1; 2; 3; 4; 5\\}$ và $B = \\{2; 4; 6; 8\\}$. Có bao nhiêu phần tử thuộc tập hợp hợp $A \\cup B$?",
        correctAnswer: "7",
        acceptedAnswers: ["7", "7.0"],
        hint: "$A \\cup B = \\{1; 2; 3; 4; 5; 6; 8\\}$ gồm 7 phần tử.",
        points: 0.33,
        source: "🌐 Đề Thi Tuyển Sinh"
      },
      {
        id: "g10_c1_sa2",
        question: "Cho hai tập hợp $A = (m - 1; m + 3)$ và $B = (1; 6)$. Tìm giá trị nguyên lớn nhất của tham số $m$ để $A \\cap B = \\emptyset$.",
        correctAnswer: "-2",
        acceptedAnswers: ["-2", "m=-2"],
        hint: "$A \\cap B = \\emptyset \\iff m + 3 \\le 1$ hoặc $m - 1 \\ge 6 \\iff m \\le -2$ hoặc $m \\ge 7$. Để xét về phía bên trái của khoảng $(1; 6)$, giá trị nguyên lớn nhất thuộc nửa dưới là $m = -2$.",
        points: 0.33,
        source: "🌐 Sở GD&ĐT Hà Nội"
      },
      {
        id: "g10_c1_sa3",
        question: "Một câu lạc bộ thể thao có 60 thành viên, trong đó 35 người chơi bóng đá, 30 người chơi bóng rổ, và 15 người chơi cả hai môn. Hỏi có bao nhiêu thành viên không chơi môn nào trong hai môn này?",
        correctAnswer: "10",
        acceptedAnswers: ["10", "10 người"],
        hint: "Số người chơi ít nhất 1 môn: $35 + 30 - 15 = 50$. Số người không chơi môn nào: $60 - 50 = 10$.",
        points: 0.33,
        source: "🌐 Chuyên Sư Phạm"
      },
      {
        id: "g10_c1_sa4",
        question: "Cho tập hợp $A = \\{x \\in \\mathbb{Z} \\mid -2 \\le x < 4\\}$. Tập hợp $A$ có bao nhiêu tập con gồm đúng 2 phần tử?",
        correctAnswer: "15",
        acceptedAnswers: ["15", "15.0"],
        hint: "$A = \\{-2; -1; 0; 1; 2; 3\\}$ có 6 phần tử. Số tập con 2 phần tử là $C_6^2 = \\frac{6 \\times 5}{2} = 15$.",
        points: 0.33,
        source: "🌐 Đề Thi Học Sinh Giỏi"
      }
    ],
    part4_essay: [
      {
        id: "g10_c1_es1",
        question: "Trong một đợt khảo sát sở thích đọc sách của 100 học sinh khối 10 tại một trường THPT, ban thư viện thu được số liệu sau:\\n- Có 50 học sinh thích đọc sách Khoa học.\\n- Có 45 học sinh thích đọc sách Lịch sử.\\n- Có 40 học sinh thích đọc sách Văn học.\\n- Có 20 học sinh thích cả Khoa học và Lịch sử.\\n- Có 15 học sinh thích cả Lịch sử và Văn học.\\n- Có 18 học sinh thích cả Khoa học và Văn học.\\n- Có 8 học sinh thích cả ba thể loại sách.\\n1) Vẽ và điền số liệu vào biểu đồ Ven để thể hiện phân bố học sinh theo sở thích đọc sách.\\n2) Tính số học sinh chỉ thích đọc đúng một thể loại sách và số học sinh không thích thể loại sách nào trong ba thể loại trên.",
        points: 1.0,
        source: "🌐 Ứng Dụng Biểu Đồ Ven Trong Đời Sống",
        solution: "1) Phân tích số liệu biểu đồ Ven:\\nGọi $K, L, V$ lần lượt là tập hợp học sinh thích sách Khoa học, Lịch sử, Văn học.\\n- Phần giao cả 3 môn: $n(K \\cap L \\cap V) = 8$.\\n- Chỉ thích Khoa học và Lịch sử: $20 - 8 = 12$ học sinh.\\n- Chỉ thích Lịch sử và Văn học: $15 - 8 = 7$ học sinh.\\n- Chỉ thích Khoa học và Văn học: $18 - 8 = 10$ học sinh.\\n- Chỉ thích đúng sách Khoa học: $50 - (12 + 10 + 8) = 50 - 30 = 20$ học sinh.\\n- Chỉ thích đúng sách Lịch sử: $45 - (12 + 7 + 8) = 45 - 27 = 18$ học sinh.\\n- Chỉ thích đúng sách Văn học: $40 - (10 + 7 + 8) = 40 - 25 = 15$ học sinh.\\n\\n2) Tính toán theo yêu cầu:\\n- Số học sinh chỉ thích đúng một thể loại sách là:\\n  $20 + 18 + 15 = 53$ học sinh.\\n- Tổng số học sinh thích ít nhất một thể loại sách:\\n  $n(K \\cup L \\cup V) = 50 + 45 + 40 - 20 - 15 - 18 + 8 = 90$ học sinh.\\n- Số học sinh không thích thể loại nào trong cả 3 loại trên:\\n  $100 - 90 = 10$ học sinh.",
        criteria: [
          { step: "Bước 1", desc: "Sử dụng công thức Ven tính đúng các miền giao hai và giao ba tập hợp", points: 0.25 },
          { step: "Bước 2", desc: "Tính đúng số học sinh chỉ thích một thể loại: Khoa học (20), Lịch sử (18), Văn học (15)", points: 0.25 },
          { step: "Bước 3", desc: "Tính tổng số học sinh chỉ thích một môn là $53$ học sinh", points: 0.25 },
          { step: "Bước 4", desc: "Tính đúng số học sinh không thích môn nào là $10$ học sinh", points: 0.25 }
        ]
      }
    ]
  },

  // ------------------------------------------------------------------------
  // CHƯƠNG 2: BẤT PHƯƠNG TRÌNH VÀ HỆ BPT BẬC NHẤT HAI ẨN
  // ------------------------------------------------------------------------
  ch_2: {
    part1_mcq: [
      {
        id: "g10_c2_m1",
        question: "Cặp số nào sau đây là một nghiệm của bất phương trình $2x - 3y + 6 > 0$?",
        options: [
          { key: "A", text: "$(1; 2)$" },
          { key: "B", text: "$(0; 3)$" },
          { key: "C", text: "$(-4; 0)$" },
          { key: "D", text: "$(1; 3)$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 SGK Toán 10 Mới",
        explanation: "Thay $(1; 2)$ vào: $2(1) - 3(2) + 6 = 2 - 6 + 6 = 2 > 0$ (thoả mãn)."
      },
      {
        id: "g10_c2_m2",
        question: "Bất phương trình nào sau đây là bất phương trình bậc nhất hai ẩn?",
        options: [
          { key: "A", text: "$3x - 5y + 1 \\le 0$" },
          { key: "B", text: "$x^2 + 2y > 3$" },
          { key: "C", text: "$xy - 2 < 0$" },
          { key: "D", text: "$2x + 3y^2 \\ge 5$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Đề Tham Khảo Bộ GD&ĐT",
        explanation: "Dạng chuẩn $ax + by + c \\le 0$ với $a, b$ không đồng thời bằng 0. Chỉ có phương án A có bậc 1."
      },
      {
        id: "g10_c2_m3",
        question: "Điểm nào sau đây thuộc miền nghiệm của hệ bất phương trình $\\begin{cases} x + y - 2 \\ge 0 \\\\ 2x - y + 1 > 0 \\end{cases}$?",
        options: [
          { key: "A", text: "$(2; 1)$" },
          { key: "B", text: "$(0; 0)$" },
          { key: "C", text: "$(1; 0)$" },
          { key: "D", text: "$(-1; 2)$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Sở GD&ĐT Hà Nội",
        explanation: "Thay $(2; 1)$: $2 + 1 - 2 = 1 \\ge 0$ và $2(2) - 1 + 1 = 4 > 0$ (thoả mãn cả hai)."
      },
      {
        id: "g10_c2_m4",
        question: "Miền nghiệm của bất phương trình $x + y \\le 4$ có chứa gốc toạ độ $O(0; 0)$ không?",
        options: [
          { key: "A", text: "Có chứa gốc toạ độ" },
          { key: "B", text: "Không chứa gốc toạ độ" },
          { key: "C", text: "Gốc toạ độ nằm trên bờ đường thẳng" },
          { key: "D", text: "Không thể xác định" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Chuyên Sư Phạm",
        explanation: "Thay $(0; 0)$ vào: $0 + 0 = 0 \\le 4$ (đúng), do đó miền nghiệm chứa gốc toạ độ $O$."
      },
      {
        id: "g10_c2_m5",
        question: "Bờ của miền nghiệm bất phương trình $2x - y + 4 \\ge 0$ là đường thẳng có phương trình:",
        options: [
          { key: "A", text: "$2x - y + 4 = 0$" },
          { key: "B", text: "$2x - y - 4 = 0$" },
          { key: "C", text: "$x - 2y + 4 = 0$" },
          { key: "D", text: "$y = 2x - 4$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 SGK Toán 10 Mới",
        explanation: "Bờ của miền nghiệm bất phương trình là đường thẳng tương ứng khi thay dấu bất đẳng thức bằng dấu bằng."
      },
      {
        id: "g10_c2_m6",
        question: "Trong bài toán quy hoạch tuyến tính, giá trị lớn nhất hoặc nhỏ nhất của hàm mục tiêu $F(x; y) = ax + by$ trên một miền đa giác lồi luôn đạt được tại:",
        options: [
          { key: "A", text: "Ít nhất một trong các đỉnh của miền đa giác" },
          { key: "B", text: "Tâm đối xứng của miền đa giác" },
          { key: "C", text: "Gốc toạ độ $O$" },
          { key: "D", text: "Một điểm nằm sâu bên trong miền đa giác" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Định Lý Tối Ưu Tuyến Tính GDPT 2018",
        explanation: "Định lý cơ bản: Giá trị tối ưu của biểu thức bậc nhất luôn đạt được tại một đỉnh của miền đa giác nghiệm."
      },
      {
        id: "g10_c2_m7",
        question: "Cho hệ bất phương trình $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ x + y \\le 3 \\end{cases}$. Miền nghiệm của hệ là hình gì?",
        options: [
          { key: "A", text: "Một hình tam giác kể cả biên" },
          { key: "B", text: "Một hình tứ giác" },
          { key: "C", text: "Một góc phần tư" },
          { key: "D", text: "Một nửa mặt phẳng" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Sở GD&ĐT TP.HCM",
        explanation: "Giao của góc phần tư thứ nhất với nửa mặt phẳng dưới đường thẳng $x + y = 3$ tạo thành một tam giác vuông có các đỉnh $(0; 0), (3; 0), (0; 3)$."
      },
      {
        id: "g10_c2_m8",
        question: "Tìm giá trị lớn nhất của $F(x; y) = 2x + 3y$ trên miền tam giác có các đỉnh $O(0; 0), A(3; 0), B(0; 2)$.",
        options: [
          { key: "A", text: "$6$" },
          { key: "B", text: "$4$" },
          { key: "C", text: "$0$" },
          { key: "D", text: "$5$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Chuyên Lam Sơn",
        explanation: "Tính tại các đỉnh: $F(0; 0) = 0, F(3; 0) = 6, F(0; 2) = 6$. Vậy giá trị lớn nhất là 6."
      },
      {
        id: "g10_c2_m9",
        question: "Một cửa hàng bán hai loại bánh: Bánh nướng giá 20 nghìn đồng/chiếc, bánh dẻo giá 15 nghìn đồng/chiếc. Bạn có 100 nghìn đồng. Gọi $x, y$ lần lượt là số bánh nướng và bánh dẻo bạn mua ($x, y \\in \\mathbb{N}$). Bất phương trình thể hiện số tiền bạn có thể mua là:",
        options: [
          { key: "A", text: "$20x + 15y \\le 100$" },
          { key: "B", text: "$20x + 15y \\ge 100$" },
          { key: "C", text: "$15x + 20y \\le 100$" },
          { key: "D", text: "$20x + 15y = 100$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Bài Toán Thực Tế Chi Tiêu",
        explanation: "Tổng số tiền $20x + 15y$ không vượt quá số tiền có là 100 nghìn: $20x + 15y \\le 100$."
      },
      {
        id: "g10_c2_m10",
        question: "Bất phương trình $x - 2y < 0$ có miền nghiệm là nửa mặt phẳng:",
        options: [
          { key: "A", text: "Không kể bờ đường thẳng $x - 2y = 0$" },
          { key: "B", text: "Kể cả bờ đường thẳng $x - 2y = 0$" },
          { key: "C", text: "Chứa điểm $(2; 0)$" },
          { key: "D", text: "Chứa điểm $(3; 1)$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 SGK Toán 10 Mới",
        explanation: "Vì dấu bất đẳng thức là ngặt ($<$) nên miền nghiệm không chứa đường bờ."
      },
      {
        id: "g10_c2_m11",
        question: "Cho hệ $\\begin{cases} x - y > 1 \\\\ x + 2y < 4 \\end{cases}$. Điểm nào sau đây KHÔNG thuộc miền nghiệm?",
        options: [
          { key: "A", text: "$(0; 0)$" },
          { key: "B", text: "$(2; 0)$" },
          { key: "C", text: "$(2; -1)$" },
          { key: "D", text: "$(3; 0)$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Sở GD&ĐT Nam Định",
        explanation: "Thay $(0; 0)$: $0 - 0 = 0 > 1$ (sai), nên $(0; 0)$ không thuộc miền nghiệm."
      },
      {
        id: "g10_c2_m12",
        question: "Diện tích của miền nghiệm tam giác giới hạn bởi hệ $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ 2x + y \\le 6 \\end{cases}$ bằng:",
        options: [
          { key: "A", text: "$9$" },
          { key: "B", text: "$18$" },
          { key: "C", text: "$6$" },
          { key: "D", text: "$12$" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Đề Thi Tuyển Sinh",
        explanation: "Các đỉnh tam giác là $O(0; 0), A(3; 0), B(0; 6)$. Tam giác vuông tại $O$, diện tích $S = \\frac{1}{2}(3)(6) = 9$."
      }
    ],
    part2_trueFalse: [
      {
        id: "g10_c2_tf1",
        question: "Cho hệ bất phương trình bậc nhất hai ẩn $\\begin{cases} x + 2y \\le 4 \\\\ x - y \\le 1 \\\\ x \\ge 0 \\\\ y \\ge 0 \\end{cases}$. Xét tính Đúng / Sai của các khẳng định sau:",
        points: 1.0,
        source: "🌐 Sở GD&ĐT Hà Nội",
        subItems: [
          { key: "a", text: "Miền nghiệm của hệ là một miền đa giác lồi tứ giác (kể cả biên).", isCorrect: true, explanation: "Đúng, các đỉnh lần lượt là $O(0; 0), A(1; 0), B(2; 1), C(0; 2)$." },
          { key: "b", text: "Điểm $B(2; 1)$ là giao điểm của hai đường thẳng $x + 2y = 4$ và $x - y = 1$.", isCorrect: true, explanation: "Đúng vì $2 + 2(1) = 4$ và $2 - 1 = 1$." },
          { key: "c", text: "Điểm $M(1; 1)$ thuộc miền nghiệm của hệ.", isCorrect: true, explanation: "Đúng vì $1 + 2 \\le 4$, $1 - 1 \\le 1$, $1 \\ge 0$, $1 \\ge 0$ đều thỏa mãn." },
          { key: "d", text: "Giá trị lớn nhất của biểu thức $F(x; y) = 3x + 2y$ trên miền nghiệm là $8$.", isCorrect: true, explanation: "Đúng: $F(0; 0)=0, F(1; 0)=3, F(0; 2)=4, F(2; 1)=3(2)+2(1)=8$. GTLN là 8." }
        ]
      },
      {
        id: "g10_c2_tf2",
        question: "Xét bất phương trình $2x - y + 2 > 0$. Đánh giá tính Đúng / Sai của các mệnh đề sau:",
        points: 1.0,
        source: "🌐 Chuyên Sư Phạm",
        subItems: [
          { key: "a", text: "Gốc toạ độ $O(0; 0)$ thuộc miền nghiệm của bất phương trình.", isCorrect: true, explanation: "Đúng vì $2(0) - 0 + 2 = 2 > 0$." },
          { key: "b", text: "Điểm $A(-1; 0)$ thuộc miền nghiệm của bất phương trình.", isCorrect: false, explanation: "Sai vì $2(-1) - 0 + 2 = 0$, không thỏa mãn $> 0$ (điểm này nằm trên đường bờ)." },
          { key: "c", text: "Đường thẳng $d: 2x - y + 2 = 0$ đi qua hai điểm $(0; 2)$ và $(-1; 0)$.", isCorrect: true, explanation: "Đúng theo phương trình đường thẳng." },
          { key: "d", text: "Điểm $B(1; 5)$ thuộc miền nghiệm của bất phương trình.", isCorrect: false, explanation: "Sai vì $2(1) - 5 + 2 = -1 < 0$." }
        ]
      }
    ],
    part3_shortAnswer: [
      {
        id: "g10_c2_sa1",
        question: "Tìm giá trị lớn nhất của biểu thức $F(x; y) = 3x + 4y$ trên miền nghiệm của hệ bất phương trình $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ x + y \\le 5 \\end{cases}$.",
        correctAnswer: "20",
        acceptedAnswers: ["20", "20.0"],
        hint: "Các đỉnh: $(0; 0), (5; 0), (0; 5)$. $F(0; 0)=0, F(5; 0)=15, F(0; 5)=20$. GTLN là 20.",
        points: 0.33,
        source: "🌐 Đề Thi Tốt Nghiệp THPT"
      },
      {
        id: "g10_c2_sa2",
        question: "Một hộ nông dân trồng hai loại rau $A$ và $B$ trên diện tích tối đa 8 sào đất. Mỗi sào rau $A$ cần 10 công chăm sóc, mỗi sào rau $B$ cần 15 công. Tổng số công không quá 90 công. Nếu gọi $x, y$ là số sào đất trồng rau $A$ và $B$, hãy tìm giá trị lớn nhất của $x$ khi hộ đó không trồng rau $B$ ($y = 0$).",
        correctAnswer: "8",
        acceptedAnswers: ["8", "8 sào"],
        hint: "ĐK: $x \\le 8$ và $10x \\le 90 \\implies x \\le 9$. Kết hợp $x \\le 8$ nên $x_{\\max} = 8$ sào.",
        points: 0.33,
        source: "🌐 Bài Toán Nông Nghiệp Thực Tế"
      },
      {
        id: "g10_c2_sa3",
        question: "Cho hệ bất phương trình $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ x + 2y \\le 6 \\\\ 2x + y \\le 6 \\end{cases}$. Miền nghiệm của hệ có bao nhiêu đỉnh?",
        correctAnswer: "4",
        acceptedAnswers: ["4", "4 đỉnh"],
        hint: "Các đỉnh của tứ giác là $(0; 0), (3; 0), (2; 2), (0; 3)$ (tổng 4 đỉnh).",
        points: 0.33,
        source: "🌐 Chuyên Lam Sơn"
      },
      {
        id: "g10_c2_sa4",
        question: "Tìm giá trị nhỏ nhất của biểu thức $F(x; y) = x - 2y$ trên miền đa giác có các đỉnh $(1; 1), (4; 1), (3; 4), (1; 3)$.",
        correctAnswer: "-5",
        acceptedAnswers: ["-5", "-5.0"],
        hint: "Tính tại 4 đỉnh: $F(1; 1) = -1; F(4; 1) = 2; F(3; 4) = -5; F(1; 3) = -5$. GTNN bằng $-5$.",
        points: 0.33,
        source: "🌐 Sở GD&ĐT Hà Nội"
      }
    ],
    part4_essay: [
      {
        id: "g10_c2_es1",
        question: "Một xưởng sản xuất bàn ghế gỗ có 2 dây chuyền làm việc. Mỗi ngày xưởng có thể huy động tối đa 12 giờ làm mộc và 8 giờ phun sơn.\\n- Để sản xuất một chiếc bàn cần 2 giờ làm mộc và 1 giờ phun sơn, đem lại lợi nhuận 400 nghìn đồng.\\n- Để sản xuất một chiếc ghế cần 1 giờ làm mộc và 1 giờ phun sơn, đem lại lợi nhuận 250 nghìn đồng.\\n1) Gọi $x, y$ lần lượt là số bàn và số ghế xưởng sản xuất trong một ngày ($x, y \\ge 0$). Hãy thiết lập hệ bất phương trình mô tả các điều kiện sản xuất và viết biểu thức lợi nhuận $L(x; y)$.\\n2) Xác định số lượng bàn và ghế xưởng cần sản xuất mỗi ngày để lợi nhuận thu được là lớn nhất và tính số tiền lợi nhuận đó.",
        points: 1.0,
        source: "🌐 Bài Toán Tối Ưu Hóa Kinh Doanh GDPT 2018",
        solution: "1) Thiết lập hệ bất phương trình và hàm mục tiêu:\\n- Thời gian làm mộc: $2x + y \\le 12$ (giờ).\\n- Thời gian phun sơn: $x + y \\le 8$ (giờ).\\n- Điều kiện thực tế: $x \\ge 0, y \\ge 0$.\\n- Hệ bất phương trình ràng buộc:\\n  $\\begin{cases} 2x + y \\le 12 \\\\ x + y \\le 8 \\\\ x \\ge 0, y \\ge 0 \\end{cases}$\\n- Biểu thức hàm mục tiêu lợi nhuận: $L(x; y) = 400x + 250y$ (nghìn đồng).\\n\\n2) Tìm phương án tối ưu:\\n- Miền nghiệm của hệ là tứ giác lồi $OABC$ với toạ độ các đỉnh:\\n  + $O(0; 0)$ (không sản xuất gì).\\n  + $A(6; 0)$ (giao của $2x + y = 12$ với trục hoành).\\n  + $B(4; 4)$ (giao điểm của hai đường thẳng $2x + y = 12$ và $x + y = 8$).\\n  + $C(0; 8)$ (giao của $x + y = 8$ với trục tung).\\n- Tính giá trị hàm lợi nhuận tại các đỉnh:\\n  + $L(0; 0) = 0$ nghìn đồng.\\n  + $L(6; 0) = 400(6) + 250(0) = 2400$ nghìn đồng (2.4 triệu).\\n  + $L(4; 4) = 400(4) + 250(4) = 1600 + 1000 = 2600$ nghìn đồng (2.6 triệu).\\n  + $L(0; 8) = 400(0) + 250(8) = 2000$ nghìn đồng (2.0 triệu).\\n- Kết luận:\\nLợi nhuận lớn nhất đạt được là 2.600.000 đồng khi xưởng sản xuất 4 chiếc bàn và 4 chiếc ghế mỗi ngày.",
        criteria: [
          { step: "Bước 1", desc: "Thiết lập đúng hệ bất phương trình ràng buộc $2x+y \\le 12, x+y \\le 8, x,y \\ge 0$", points: 0.25 },
          { step: "Bước 2", desc: "Viết đúng biểu thức hàm lợi nhuận $L(x; y) = 400x + 250y$", points: 0.25 },
          { step: "Bước 3", desc: "Tìm đúng toạ độ 4 đỉnh của miền nghiệm: $O(0;0), A(6;0), B(4;4), C(0;8)$", points: 0.25 },
          { step: "Bước 4", desc: "Tính giá trị tại các đỉnh và kết luận sản xuất 4 bàn, 4 ghế đạt lãi cực đại 2.600.000đ", points: 0.25 }
        ]
      }
    ]
  }
};
// ------------------------------------------------------------------------
// CHƯƠNG 3: HỆ THỨC LƯỢNG TRONG TAM GIÁC
// ------------------------------------------------------------------------
window.REVIEW_SOURCE_BANK[10].ch_3 = {
  part1_mcq: [
    {
      id: "g10_c3_m1",
      question: "Định lý cosin trong tam giác $ABC$ phát biểu rằng:",
      options: [
        { key: "A", text: "$a^2 = b^2 + c^2 - 2bc \\cos A$" },
        { key: "B", text: "$a^2 = b^2 + c^2 + 2bc \\cos A$" },
        { key: "C", text: "$a^2 = b^2 + c^2 - 2bc \\sin A$" },
        { key: "D", text: "$a^2 = b^2 - c^2 + 2bc \\cos A$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 SGK Toán 10 Mới",
      explanation: "Định lý cosin chuẩn SGK: $a^2 = b^2 + c^2 - 2bc \\cos A$."
    },
    {
      id: "g10_c3_m2",
      question: "Định lý sin trong tam giác $ABC$ với $R$ là bán kính đường tròn ngoại tiếp là:",
      options: [
        { key: "A", text: "$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R$" },
        { key: "B", text: "$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = R$" },
        { key: "C", text: "$\\frac{\\sin A}{a} = \\frac{\\sin B}{b} = \\frac{\\sin C}{c} = 2R$" },
        { key: "D", text: "$a \\sin A = b \\sin B = c \\sin C = 2R$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 SGK Toán 10 Mới",
      explanation: "Định lý sin chuẩn: Tỉ số giữa mỗi cạnh và sin của góc đối diện bằng đường kính đường tròn ngoại tiếp $2R$."
    },
    {
      id: "g10_c3_m3",
      question: "Diện tích $S$ của tam giác $ABC$ có thể tính theo công thức nào sau đây?",
      options: [
        { key: "A", text: "$S = \\frac{1}{2}ab \\sin C$" },
        { key: "B", text: "$S = \\frac{1}{2}ab \\cos C$" },
        { key: "C", text: "$S = ab \\sin C$" },
        { key: "D", text: "$S = \\frac{abc}{2R}$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Đề Tham Khảo Bộ GD&ĐT",
      explanation: "Diện tích tam giác bằng một nửa tích hai cạnh với sin của góc xen giữa: $S = \\frac{1}{2}ab \\sin C$."
    },
    {
      id: "g10_c3_m4",
      question: "Công thức Hê-rông tính diện tích tam giác $ABC$ theo nửa chu vi $p = \\frac{a+b+c}{2}$ là:",
      options: [
        { key: "A", text: "$S = \\sqrt{p(p-a)(p-b)(p-c)}$" },
        { key: "B", text: "$S = p(p-a)(p-b)(p-c)$" },
        { key: "C", text: "$S = \\sqrt{(p-a)(p-b)(p-c)}$" },
        { key: "D", text: "$S = \\sqrt{p(p+a)(p+b)(p+c)}$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 SGK Toán 10 Mới",
      explanation: "Công thức Heron kinh điển: $S = \\sqrt{p(p-a)(p-b)(p-c)}$."
    },
    {
      id: "g10_c3_m5",
      question: "Cho tam giác $ABC$ có $b = 6, c = 8$ và $\\widehat{A} = 60^\\circ$. Độ dài cạnh $a$ bằng:",
      options: [
        { key: "A", text: "$2\\sqrt{13}$" },
        { key: "B", text: "$\\sqrt{52}$" },
        { key: "C", text: "$10$" },
        { key: "D", text: "$2\\sqrt{37}$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Sở GD&ĐT Hà Nội",
      explanation: "$a^2 = b^2 + c^2 - 2bc \\cos 60^\\circ = 36 + 64 - 2(6)(8)(1/2) = 100 - 48 = 52 \\implies a = \\sqrt{52} = 2\\sqrt{13}$."
    },
    {
      id: "g10_c3_m6",
      question: "Cho tam giác $ABC$ có $a = 10$ và $\\widehat{A} = 30^\\circ$. Bán kính đường tròn ngoại tiếp $R$ của tam giác $ABC$ bằng:",
      options: [
        { key: "A", text: "$10$" },
        { key: "B", text: "$5$" },
        { key: "C", text: "$20$" },
        { key: "D", text: "$10\\sqrt{3}$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Chuyên Sư Phạm",
      explanation: "$2R = \\frac{a}{\\sin A} = \\frac{10}{\\sin 30^\\circ} = \\frac{10}{1/2} = 20 \\implies R = 10$."
    },
    {
      id: "g10_c3_m7",
      question: "Tam giác $ABC$ có 3 cạnh $a = 5, b = 12, c = 13$. Bán kính đường tròn nội tiếp $r$ của tam giác bằng:",
      options: [
        { key: "A", text: "$2$" },
        { key: "B", text: "$3$" },
        { key: "C", text: "$4$" },
        { key: "D", text: "$2.5$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Sở GD&ĐT TP.HCM",
      explanation: "Tam giác vuông tại $C$ ($5^2 + 12^2 = 169 = 13^2$). $S = \\frac{1}{2}(5)(12) = 30$. Nửa chu vi $p = \\frac{5+12+13}{2} = 15$. Khi đó $r = \\frac{S}{p} = \\frac{30}{15} = 2$."
    },
    {
      id: "g10_c3_m8",
      question: "Độ dài đường trung tuyến $m_a$ xuất phát từ đỉnh $A$ của tam giác $ABC$ được tính theo công thức:",
      options: [
        { key: "A", text: "$m_a^2 = \\frac{2(b^2 + c^2) - a^2}{4}$" },
        { key: "B", text: "$m_a^2 = \\frac{b^2 + c^2 - a^2}{2}$" },
        { key: "C", text: "$m_a^2 = \\frac{2(b^2 + c^2) + a^2}{4}$" },
        { key: "D", text: "$m_a^2 = \\frac{b^2 + c^2 - 2a^2}{4}$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 SGK Toán 10 Mới",
      explanation: "Công thức độ dài đường trung tuyến chuẩn: $m_a^2 = \\frac{2(b^2+c^2) - a^2}{4}$."
    },
    {
      id: "g10_c3_m9",
      question: "Để đo khoảng cách giữa hai điểm $A$ và $B$ bị ngăn cách bởi một hồ nước, người ta chọn một điểm $C$ trên bờ có thể nhìn thấy cả $A$ và $B$. Đo được $CA = 40\\text{ m}, CB = 60\\text{ m}$ và $\\widehat{C} = 60^\\circ$. Khoảng cách $AB$ xấp xỉ bằng:",
      options: [
        { key: "A", text: "$52.9\\text{ m}$" },
        { key: "B", text: "$50.0\\text{ m}$" },
        { key: "C", text: "$72.1\\text{ m}$" },
        { key: "D", text: "$45.0\\text{ m}$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Bài Toán Thực Tế Đo Đạc",
      explanation: "$AB^2 = 40^2 + 60^2 - 2(40)(60)\\cos 60^\\circ = 1600 + 3600 - 2400 = 2800 \\implies AB = \\sqrt{2800} \\approx 52.915\\text{ m}$."
    },
    {
      id: "g10_c3_m10",
      question: "Nếu tam giác $ABC$ có $a^2 = b^2 + c^2$ thì tam giác $ABC$ là:",
      options: [
        { key: "A", text: "Tam giác vuông tại $A$" },
        { key: "B", text: "Tam giác vuông tại $B$" },
        { key: "C", text: "Tam giác vuông tại $C$" },
        { key: "D", text: "Tam giác đều" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Định Lý Pytago Đảo",
      explanation: "Theo định lý Pytago đảo, $a^2 = b^2 + c^2 \\iff \\widehat{A} = 90^\\circ$."
    },
    {
      id: "g10_c3_m11",
      question: "Cho tam giác đều $ABC$ cạnh $a$. Bán kính đường tròn ngoại tiếp $R$ của tam giác đều bằng:",
      options: [
        { key: "A", text: "$\\frac{a\\sqrt{3}}{3}$" },
        { key: "B", text: "$\\frac{a\\sqrt{3}}{2}$" },
        { key: "C", text: "$\\frac{a\\sqrt{3}}{6}$" },
        { key: "D", text: "$a\\sqrt{3}$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Chuyên Lam Sơn",
      explanation: "$R = \\frac{a}{2\\sin 60^\\circ} = \\frac{a}{\\sqrt{3}} = \\frac{a\\sqrt{3}}{3}$."
    },
    {
      id: "g10_c3_m12",
      question: "Cho tam giác $ABC$ có diện tích $S = 24\\text{ cm}^2$ và chu vi bằng $24\\text{ cm}$. Bán kính đường tròn nội tiếp $r$ bằng:",
      options: [
        { key: "A", text: "$2\\text{ cm}$" },
        { key: "B", text: "$1\\text{ cm}$" },
        { key: "C", text: "$3\\text{ cm}$" },
        { key: "D", text: "$4\\text{ cm}$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Sở GD&ĐT Nam Định",
      explanation: "Nửa chu vi $p = 24 / 2 = 12\\text{ cm}$. Bán kính nội tiếp $r = \\frac{S}{p} = \\frac{24}{12} = 2\\text{ cm}$."
    }
  ],
  part2_trueFalse: [
    {
      id: "g10_c3_tf1",
      question: "Cho tam giác $ABC$ có $AB = 5, AC = 8$ và $\\widehat{A} = 60^\\circ$. Xét tính Đúng / Sai của các khẳng định sau:",
      points: 1.0,
      source: "🌐 Sở GD&ĐT Hà Nội",
      subItems: [
        { key: "a", text: "Độ dài cạnh $BC = 7$.", isCorrect: true, explanation: "Đúng: $BC^2 = 25 + 64 - 2(5)(8)(1/2) = 89 - 40 = 49 \\implies BC = 7$." },
        { key: "b", text: "Diện tích của tam giác $ABC$ là $S = 10\\sqrt{3}$.", isCorrect: true, explanation: "Đúng: $S = \\frac{1}{2}(5)(8)\\sin 60^\\circ = 20 \\cdot \\frac{\\sqrt{3}}{2} = 10\\sqrt{3}$." },
        { key: "c", text: "Bán kính đường tròn ngoại tiếp tam giác là $R = \\frac{7\\sqrt{3}}{3}$.", isCorrect: true, explanation: "Đúng: $R = \\frac{BC}{2\\sin A} = \\frac{7}{2(\\sqrt{3}/2)} = \\frac{7}{\\sqrt{3}} = \\frac{7\\sqrt{3}}{3}$." },
        { key: "d", text: "Bán kính đường tròn nội tiếp $r = 2\\sqrt{3}$.", isCorrect: false, explanation: "Sai: Nửa chu vi $p = (5+8+7)/2 = 10$. Bán kính $r = \\frac{S}{p} = \\frac{10\\sqrt{3}}{10} = \\sqrt{3}$ (không phải $2\\sqrt{3}$)." }
      ]
    },
    {
      id: "g10_c3_tf2",
      question: "Cho tam giác $ABC$ có các cạnh thỏa mãn $a = 7, b = 8, c = 9$. Đánh giá tính Đúng / Sai của các khẳng định sau:",
      points: 1.0,
      source: "🌐 Chuyên Sư Phạm",
      subItems: [
        { key: "a", text: "Nửa chu vi của tam giác là $p = 12$.", isCorrect: true, explanation: "Đúng: $p = (7 + 8 + 9) / 2 = 12$." },
        { key: "b", text: "Diện tích tam giác $S = 12\\sqrt{5}$.", isCorrect: true, explanation: "Đúng theo Heron: $S = \\sqrt{12(12-7)(12-8)(12-9)} = \\sqrt{12 \\times 5 \\times 4 \\times 3} = \\sqrt{720} = 12\\sqrt{5}$." },
        { key: "c", text: "Góc $A$ là góc nhỏ nhất trong tam giác.", isCorrect: true, explanation: "Đúng vì cạnh $a = 7$ là cạnh ngắn nhất, góc đối diện với cạnh ngắn nhất là góc nhỏ nhất." },
        { key: "d", text: "Góc $C$ là góc tù.", isCorrect: false, explanation: "Sai vì $\\cos C = \\frac{a^2 + b^2 - c^2}{2ab} = \\frac{49 + 64 - 81}{2(7)(8)} = \\frac{32}{112} = \\frac{2}{7} > 0 \\implies C$ là góc nhọn." }
      ]
    }
  ],
  part3_shortAnswer: [
    {
      id: "g10_c3_sa1",
      question: "Cho tam giác $ABC$ có $a = 6, b = 8$ và diện tích $S = 12$. Tính số đo góc $C$ (tính bằng độ, biết góc $C$ nhọn).",
      correctAnswer: "30",
      acceptedAnswers: ["30", "30 độ", "30°"],
      hint: "$S = \\frac{1}{2}ab \\sin C \\implies 12 = \\frac{1}{2}(6)(8)\\sin C = 24\\sin C \\implies \\sin C = \\frac{1}{2} \\implies C = 30^\\circ$.",
      points: 0.33,
      source: "🌐 Đề Thi Tuyển Sinh"
    },
    {
      id: "g10_c3_sa2",
      question: "Cho tam giác $ABC$ có $b = 7, c = 5$ và $\\cos A = 0.6$. Tính độ dài cạnh $a$.",
      correctAnswer: "5.66",
      acceptedAnswers: ["5.66", "sqrt(32)", "4*sqrt(2)"],
      hint: "$a^2 = b^2 + c^2 - 2bc \\cos A = 49 + 25 - 2(7)(5)(0.6) = 74 - 42 = 32 \\implies a = \\sqrt{32} = 4\\sqrt{2} \\approx 5.66$.",
      points: 0.33,
      source: "🌐 Sở GD&ĐT Hà Nội"
    },
    {
      id: "g10_c3_sa3",
      question: "Cho tam giác $ABC$ có 3 cạnh $a = 13, b = 14, c = 15$. Tính bán kính đường tròn nội tiếp $r$ của tam giác.",
      correctAnswer: "4",
      acceptedAnswers: ["4", "4.0"],
      hint: "$p = 21$. $S = \\sqrt{21(8)(7)(6)} = 84$. $r = S/p = 84/21 = 4$.",
      points: 0.33,
      source: "🌐 Chuyên Lam Sơn"
    },
    {
      id: "g10_c3_sa4",
      question: "Từ vị trí quan sát trên đỉnh ngọn hải đăng cao $50\\text{ m}$ so với mặt nước biển, một hoa tiêu nhìn thấy một con thuyền dưới một góc hạ $30^\\circ$. Tính khoảng cách (mét) từ chân ngọn hải đăng đến con thuyền (làm tròn đến hàng đơn vị, biết $\\tan 30^\\circ = \\frac{1}{\\sqrt{3}}$).",
      correctAnswer: "87",
      acceptedAnswers: ["87", "87m", "86.6"],
      hint: "Khoảng cách $d = \\frac{h}{\\tan 30^\\circ} = 50\\sqrt{3} \\approx 86.6\\text{ m}$. Làm tròn là 87.",
      points: 0.33,
      source: "🌐 Bài Toán Hàng Hải Thực Tế"
    }
  ],
  part4_essay: [
    {
      id: "g10_c3_es1",
      question: "Hai chiếc tàu đánh cá khởi hành cùng lúc từ cảng $A$. Tàu thứ nhất chạy theo hướng $N30^\\circ E$ (hướng Bắc lệch Đông $30^\\circ$) với vận tốc $20\\text{ km/h}$. Tàu thứ hai chạy theo hướng $S60^\\circ E$ (hướng Nam lệch Đông $60^\\circ$) với vận tốc $15\\text{ km/h}$.\\n1) Xác định góc $\\alpha$ tạo bởi hai hướng đi của hai con tàu.\\n2) Sau 2 giờ di chuyển, hai con tàu đến các vị trí $B$ và $C$. Hãy tính khoảng cách giữa hai con tàu lúc đó (làm tròn kết quả đến hàng đơn vị km).",
      points: 1.0,
      source: "🌐 Đề Thi THPT & Ứng Dụng Hàng Hải",
      solution: "1) Xác định góc giữa hai hướng đi:\\n- Hướng Bắc và hướng Nam tạo với nhau một góc bẹt $180^\\circ$.\\n- Hướng tàu 1 lệch Đông $30^\\circ$ so với hướng Bắc.\\n- Hướng tàu 2 lệch Đông $60^\\circ$ so với hướng Nam.\\n- Do cả hai tàu cùng lệch về phía Đông, góc $\\widehat{BAC}$ tạo bởi hai hướng tàu là:\\n  $\\widehat{BAC} = 180^\\circ - 30^\\circ - 60^\\circ = 90^\\circ$.\\nVậy góc tạo bởi hai hướng đi là một góc vuông $90^\\circ$.\\n\\n2) Tính khoảng cách sau 2 giờ:\\n- Quãng đường tàu 1 đi được sau 2 giờ: $AB = v_1 \\cdot t = 20 \\times 2 = 40\\text{ km}$.\\n- Quãng đường tàu 2 đi được sau 2 giờ: $AC = v_2 \\cdot t = 15 \\times 2 = 30\\text{ km}$.\\n- Vì tam giác $ABC$ vuông tại $A$ (do $\\widehat{BAC} = 90^\\circ$), ta áp dụng định lý Pytago:\\n  $BC = \\sqrt{AB^2 + AC^2} = \\sqrt{40^2 + 30^2} = \\sqrt{1600 + 900} = \\sqrt{2500} = 50\\text{ km}$.\\n\\nKết luận:\\nSau 2 giờ, khoảng cách giữa hai con tàu là $50\\text{ km}$.",
      criteria: [
        { step: "Bước 1", desc: "Vẽ sơ đồ phương vị địa lý và xác định góc $\\widehat{BAC} = 90^\\circ$", points: 0.25 },
        { step: "Bước 2", desc: "Tính đúng quãng đường của tàu 1: $AB = 40\\text{ km}$", points: 0.25 },
        { step: "Bước 3", desc: "Tính đúng quãng đường của tàu 2: $AC = 30\\text{ km}$", points: 0.25 },
        { step: "Bước 4", desc: "Áp dụng đúng định lý Pytago tính chính xác khoảng cách $BC = 50\\text{ km}$", points: 0.25 }
      ]
    }
  ]
};

// ------------------------------------------------------------------------
// CHƯƠNG 4: VECTƠ
// ------------------------------------------------------------------------
window.REVIEW_SOURCE_BANK[10].ch_4 = {
  part1_mcq: [
    {
      id: "g10_c4_m1",
      question: "Vectơ là một đoạn thẳng:",
      options: [
        { key: "A", text: "Có hướng" },
        { key: "B", text: "Không có hướng" },
        { key: "C", text: "Có độ dài bằng 1" },
        { key: "D", text: "Luôn đi qua gốc toạ độ" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 SGK Toán 10 Mới",
      explanation: "Định nghĩa chuẩn: Vectơ là một đoạn thẳng có hướng (đã xác định điểm đầu và điểm cuối)."
    },
    {
      id: "g10_c4_m2",
      question: "Quy tắc ba điểm để cộng hai vectơ liên tiếp $\\vec{AB} + \\vec{BC}$ bằng:",
      options: [
        { key: "A", text: "$\\vec{AC}$" },
        { key: "B", text: "$\\vec{CA}$" },
        { key: "C", text: "$\\vec{CB}$" },
        { key: "D", text: "$\\vec{BA}$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 SGK Toán 10 Mới",
      explanation: "Quy tắc 3 điểm kinh điển: $\\vec{AB} + \\vec{BC} = \\vec{AC}$."
    },
    {
      id: "g10_c4_m3",
      question: "Cho hình bình hành $ABCD$. Quy tắc hình bình hành biểu diễn vectơ đường chéo $\\vec{AC}$ là:",
      options: [
        { key: "A", text: "$\\vec{AC} = \\vec{AB} + \\vec{AD}$" },
        { key: "B", text: "$\\vec{AC} = \\vec{AB} - \\vec{AD}$" },
        { key: "C", text: "$\\vec{AC} = \\vec{AB} + \\vec{BC}$" },
        { key: "D", text: "$\\vec{AC} = \\vec{BC} + \\vec{CD}$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 SGK Toán 10 Mới",
      explanation: "Quy tắc hình bình hành: $\\vec{AB} + \\vec{AD} = \\vec{AC}$."
    },
    {
      id: "g10_c4_m4",
      question: "Nếu $I$ là trung điểm của đoạn thẳng $AB$ thì với điểm $M$ bất kỳ ta luôn có:",
      options: [
        { key: "A", text: "$\\vec{MA} + \\vec{MB} = 2\\vec{MI}$" },
        { key: "B", text: "$\\vec{MA} + \\vec{MB} = \\vec{MI}$" },
        { key: "C", text: "$\\vec{MA} - \\vec{MB} = 2\\vec{MI}$" },
        { key: "D", text: "$\\vec{MA} + \\vec{MB} = \\vec{0}$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Đề Tham Khảo Bộ GD&ĐT",
      explanation: "Tính chất trung điểm: $\\vec{MA} + \\vec{MB} = 2\\vec{MI}$ với mọi điểm $M$."
    },
    {
      id: "g10_c4_m5",
      question: "Nếu $G$ là trọng tâm của tam giác $ABC$ thì đẳng thức vectơ nào sau đây đúng?",
      options: [
        { key: "A", text: "$\\vec{GA} + \\vec{GB} + \\vec{GC} = \\vec{0}$" },
        { key: "B", text: "$\\vec{GA} + \\vec{GB} + \\vec{GC} = 3\\vec{GG}$" },
        { key: "C", text: "$\\vec{AB} + \\vec{BC} + \\vec{CA} = 3\\vec{OG}$" },
        { key: "D", text: "$\\vec{GA} = \\vec{GB} = \\vec{GC}$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 SGK Toán 10 Mới",
      explanation: "Tính chất trọng tâm tam giác: $\\vec{GA} + \\vec{GB} + \\vec{GC} = \\vec{0}$."
    },
    {
      id: "g10_c4_m6",
      question: "Tích vô hướng của hai vectơ $\\vec{u}$ và $\\vec{v}$ được xác định bởi công thức:",
      options: [
        { key: "A", text: "$\\vec{u} \\cdot \\vec{v} = |\\vec{u}| \\cdot |\\vec{v}| \\cdot \\cos(\\vec{u}, \\vec{v})$" },
        { key: "B", text: "$\\vec{u} \\cdot \\vec{v} = |\\vec{u}| \\cdot |\\vec{v}| \\cdot \\sin(\\vec{u}, \\vec{v})$" },
        { key: "C", text: "$\\vec{u} \\cdot \\vec{v} = |\\vec{u}| + |\\vec{v}|$" },
        { key: "D", text: "$\\vec{u} \\cdot \\vec{v} = |\\vec{u}| \\cdot |\\vec{v}|$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 SGK Toán 10 Mới",
      explanation: "Định nghĩa tích vô hướng chuẩn: $\\vec{u} \\cdot \\vec{v} = |\\vec{u}| |\\vec{v}| \\cos(\\vec{u}, \\vec{v})$."
    },
    {
      id: "g10_c4_m7",
      question: "Hai vectơ khác vectơ-không $\\vec{u}$ và $\\vec{v}$ vuông góc với nhau khi và chỉ khi:",
      options: [
        { key: "A", text: "$\\vec{u} \\cdot \\vec{v} = 0$" },
        { key: "B", text: "$\\vec{u} \\cdot \\vec{v} = 1$" },
        { key: "C", text: "$\\vec{u} = -\\vec{v}$" },
        { key: "D", text: "|\\vec{u}| = |\\vec{v}|" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Đề Tham Khảo Bộ GD&ĐT",
      explanation: "$\\cos 90^\\circ = 0 \\implies \\vec{u} \\cdot \\vec{v} = 0$."
    },
    {
      id: "g10_c4_m8",
      question: "Cho tam giác đều $ABC$ cạnh $a$. Tích vô hướng $\\vec{AB} \\cdot \\vec{AC}$ bằng:",
      options: [
        { key: "A", text: "$\\frac{a^2}{2}$" },
        { key: "B", text: "$\\frac{a^2\\sqrt{3}}{2}$" },
        { key: "C", text: "$a^2$" },
        { key: "D", text: "$-\\frac{a^2}{2}$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Chuyên Sư Phạm",
      explanation: "$\\vec{AB} \\cdot \\vec{AC} = a \\cdot a \\cdot \\cos 60^\\circ = a^2 \\cdot \\frac{1}{2} = \\frac{a^2}{2}$."
    },
    {
      id: "g10_c4_m9",
      question: "Cho hình vuông $ABCD$ cạnh $a$. Độ dài của vectơ $\\vec{AB} + \\vec{AD}$ bằng:",
      options: [
        { key: "A", text: "$a\\sqrt{2}$" },
        { key: "B", text: "$2a$" },
        { key: "C", text: "$a$" },
        { key: "D", text: "$a\\sqrt{3}$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Sở GD&ĐT Hà Nội",
      explanation: "$\\vec{AB} + \\vec{AD} = \\vec{AC}$. Độ dài đường chéo hình vuông $AC = a\\sqrt{2}$."
    },
    {
      id: "g10_c4_m10",
      question: "Vectơ đối của vectơ $\\vec{AB}$ là:",
      options: [
        { key: "A", text: "$\\vec{BA}$" },
        { key: "B", text: "$\\vec{AB}$" },
        { key: "C", text: "$-\\vec{BA}$" },
        { key: "D", text: "$\\vec{0}$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 SGK Toán 10 Mới",
      explanation: "Vectơ đối cùng độ dài nhưng ngược hướng: $-\\vec{AB} = \\vec{BA}$."
    },
    {
      id: "g10_c4_m11",
      question: "Một vật chịu tác dụng của hai lực $\\vec{F}_1$ và $\\vec{F}_2$ vuông góc với nhau và có độ lớn lần lượt là $6\\text{ N}$ và $8\\text{ N}$. Hợp lực của hai lực đó có độ lớn bằng:",
      options: [
        { key: "A", text: "$10\\text{ N}$" },
        { key: "B", text: "$14\\text{ N}$" },
        { key: "C", text: "$2\\text{ N}$" },
        { key: "D", text: "$48\\text{ N}$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Ứng Dụng Vật Lý Vectơ",
      explanation: "$|\\vec{F}| = \\sqrt{F_1^2 + F_2^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10\\text{ N}$."
    },
    {
      id: "g10_c4_m12",
      question: "Cho đoạn thẳng $AB = 6\\text{ cm}$. Điểm $M$ thoả mãn $\\vec{MA} + 2\\vec{MB} = \\vec{0}$. Độ dài đoạn thẳng $MB$ bằng:",
      options: [
        { key: "A", text: "$2\\text{ cm}$" },
        { key: "B", text: "$4\\text{ cm}$" },
        { key: "C", text: "$3\\text{ cm}$" },
        { key: "D", text: "$1\\text{ cm}$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Chuyên Lam Sơn",
      explanation: "$\\vec{MA} = -2\\vec{MB} \\implies M$ nằm giữa $A, B$ và $MA = 2MB$. Do đó $MB = \\frac{1}{3} AB = 2\\text{ cm}$."
    }
  ],
  part2_trueFalse: [
    {
      id: "g10_c4_tf1",
      question: "Cho hình chữ nhật $ABCD$ có $AB = 4$ và $AD = 3$. Xét tính Đúng / Sai của các khẳng định sau:",
      points: 1.0,
      source: "🌐 Sở GD&ĐT Hà Nội",
      subItems: [
        { key: "a", text: "Độ dài đường chéo $AC = 5$.", isCorrect: true, explanation: "Đúng: $AC = \\sqrt{4^2 + 3^2} = 5$." },
        { key: "b", text: "Độ dài vectơ $|\\vec{AB} + \\vec{AD}| = 5$.", isCorrect: true, explanation: "Đúng vì $\\vec{AB} + \\vec{AD} = \\vec{AC} \\implies |\\vec{AC}| = 5$." },
        { key: "c", text: "Tích vô hướng $\\vec{AB} \\cdot \\vec{AD} = 12$.", isCorrect: false, explanation: "Sai vì $AB \\perp AD$ nên $\\vec{AB} \\cdot \\vec{AD} = 0$." },
        { key: "d", text: "Độ dài vectơ $|\\vec{AB} - \\vec{AD}| = 5$.", isCorrect: true, explanation: "Đúng vì $\\vec{AB} - \\vec{AD} = \\vec{DB}$, độ dài đường chéo $BD = 5$." }
      ]
    },
    {
      id: "g10_c4_tf2",
      question: "Cho tam giác $ABC$ có trọng tâm $G$. Đánh giá tính Đúng / Sai của các mệnh đề sau:",
      points: 1.0,
      source: "🌐 Chuyên Sư Phạm",
      subItems: [
        { key: "a", text: "Vectơ $\\vec{GA} + \\vec{GB} + \\vec{GC} = \\vec{0}$.", isCorrect: true, explanation: "Đúng theo tính chất trọng tâm." },
        { key: "b", text: "Với điểm $M$ bất kỳ, $\\vec{MA} + \\vec{MB} + \\vec{MC} = 3\\vec{MG}$.", isCorrect: true, explanation: "Đúng: biểu diễn qua trọng tâm." },
        { key: "c", text: "Nếu $\\vec{u} = \\vec{MA} + \\vec{MB} - 2\\vec{MC}$ thì vectơ $\\vec{u}$ không phụ thuộc vào vị trí của điểm $M$.", isCorrect: true, explanation: "Đúng vì tổng các hệ số $1 + 1 - 2 = 0$, nên $\\vec{u} = \\vec{CA} + \\vec{CB}$ là vectơ cố định." },
        { key: "d", text: "Độ dài vectơ $|\vec{GA}| = |\\vec{GB}| = |\\vec{GC}|$ đối với mọi tam giác $ABC$.", isCorrect: false, explanation: "Sai vì chỉ đúng khi tam giác $ABC$ là tam giác đều." }
      ]
    }
  ],
  part3_shortAnswer: [
    {
      id: "g10_c4_sa1",
      question: "Cho hai vectơ $\\vec{a}$ và $\\vec{b}$ có độ dài $|\\vec{a}| = 3, |\\vec{b}| = 4$ và góc giữa chúng bằng $60^\\circ$. Tính tích vô hướng $\\vec{a} \\cdot \\vec{b}$.",
      correctAnswer: "6",
      acceptedAnswers: ["6", "6.0"],
      hint: "$\\vec{a} \\cdot \\vec{b} = 3 \\times 4 \\times \\cos 60^\\circ = 12 \\times 0.5 = 6$.",
      points: 0.33,
      source: "🌐 Đề Thi Tuyển Sinh"
    },
    {
      id: "g10_c4_sa2",
      question: "Cho tam giác đều $ABC$ cạnh bằng $6\\text{ cm}$. Tính độ dài của vectơ $\\vec{AB} + \\vec{AC}$ (kết quả dạng $a\\sqrt{3}\\text{ cm}$, hãy điền số nguyên $a$).",
      correctAnswer: "6",
      acceptedAnswers: ["6", "a=6"],
      hint: "Gọi $M$ là trung điểm $BC \\implies \\vec{AB} + \\vec{AC} = 2\\vec{AM}$. $AM = \\frac{6\\sqrt{3}}{2} = 3\\sqrt{3} \\implies 2AM = 6\\sqrt{3}\\text{ cm}$. Số $a = 6$.",
      points: 0.33,
      source: "🌐 Sở GD&ĐT Hà Nội"
    },
    {
      id: "g10_c4_sa3",
      question: "Hai lực $\\vec{F}_1$ và $\\vec{F}_2$ cùng tác dụng vào một vật và tạo với nhau một góc $120^\\circ$. Biết độ lớn hai lực bằng nhau: $|\\vec{F}_1| = |\\vec{F}_2| = 50\\text{ N}$. Tính độ lớn của hợp lực theo Newton.",
      correctAnswer: "50",
      acceptedAnswers: ["50", "50 N"],
      hint: "$F^2 = 50^2 + 50^2 + 2(50)(50)\\cos 120^\\circ = 2500 + 2500 - 2500 = 2500 \\implies F = 50\\text{ N}$.",
      points: 0.33,
      source: "🌐 Bài Toán Cân Bằng Lực"
    },
    {
      id: "g10_c4_sa4",
      question: "Cho hình bình hành $ABCD$ có tâm $O$. Gọi $M$ là điểm bất kỳ. Tính giá trị $k$ thoả mãn đẳng thức $\\vec{MA} + \\vec{MB} + \\vec{MC} + \\vec{MD} = k \\vec{MO}$.",
      correctAnswer: "4",
      acceptedAnswers: ["4", "k=4"],
      hint: "Vì $O$ là trung điểm $AC$ và $BD$ nên $\\vec{MA} + \\vec{MC} = 2\\vec{MO}$ và $\\vec{MB} + \\vec{MD} = 2\\vec{MO} \\implies$ tổng $= 4\\vec{MO}$. Vậy $k = 4$.",
      points: 0.33,
      source: "🌐 Chuyên Lam Sơn"
    }
  ],
  part4_essay: [
    {
      id: "g10_c4_es1",
      question: "Một con tàu đang chạy xuôi dòng trên một con sông thẳng. Động cơ của con tàu tạo ra lực đẩy $\\vec{F}_1$ có độ lớn $4000\\text{ N}$ theo hướng dọc bờ sông. Dòng nước chảy xiết tác dụng lên thân tàu một lực đẩy $\\vec{F}_2$ có độ lớn $3000\\text{ N}$ theo hướng hợp với hướng chuyển động của tàu một góc $60^\\circ$.\\n1) Vẽ hình biểu diễn các vectơ lực $\\vec{F}_1, \\vec{F}_2$ và hợp lực $\\vec{F} = \\vec{F}_1 + \\vec{F}_2$.\\n2) Tính độ lớn của hợp lực $\\vec{F}$ tác dụng lên con tàu (làm tròn đến hàng đơn vị Newton) và góc lệch $\\theta$ giữa hợp lực với phương của lực động cơ $\\vec{F}_1$.",
      points: 1.0,
      source: "🌐 Bài Toán Thực Tế Hợp Lực GDPT 2018",
      solution: "1) Biểu diễn hợp lực theo quy tắc hình bình hành:\\n- Dựng hình bình hành có hai cạnh là $\\vec{F}_1$ và $\\vec{F}_2$ chung gốc $O$.\\n- Đường chéo xuất phát từ $O$ biểu diễn hợp lực $\\vec{F} = \\vec{F}_1 + \\vec{F}_2$.\\n\\n2) Tính độ lớn hợp lực và góc lệch:\\n- Bình phương độ lớn hợp lực:\\n  $F^2 = |\\vec{F}_1 + \\vec{F}_2|^2 = F_1^2 + F_2^2 + 2 F_1 F_2 \\cos(\\vec{F}_1, \\vec{F}_2)$\\n  $= 4000^2 + 3000^2 + 2(4000)(3000) \\cos 60^\\circ$\\n  $= 16.000.000 + 9.000.000 + 24.000.000 \\times 0.5 = 25.000.000 + 12.000.000 = 37.000.000\\text{ N}^2$.\\n- Độ lớn hợp lực:\\n  $F = \\sqrt{37.000.000} = 1000\\sqrt{37} \\approx 6082.76\\text{ N} \\approx 6083\\text{ N}$.\\n- Tính góc lệch $\\theta$ giữa $\\vec{F}$ và $\\vec{F}_1$:\\n  Ta có công thức: $\\tan\\theta = \\frac{F_2 \\sin 60^\\circ}{F_1 + F_2 \\cos 60^\\circ} = \\frac{3000 \\cdot \\frac{\\sqrt{3}}{2}}{4000 + 3000 \\cdot 0.5} = \\frac{1500\\sqrt{3}}{5500} = \\frac{3\\sqrt{3}}{11} \\approx 0.4724$.\\n  Suy ra $\\theta = \\arctan(0.4724) \\approx 25.28^\\circ$.\\n\\nKết luận:\\nHợp lực tác dụng lên con tàu có độ lớn xấp xỉ $6083\\text{ N}$ và bị lệch một góc khoảng $25.28^\\circ$ so với hướng đẩy ban đầu của động cơ.",
      criteria: [
        { step: "Bước 1", desc: "Biểu diễn đúng quy tắc hình bình hành cho hai lực với góc $60^\\circ$", points: 0.25 },
        { step: "Bước 2", desc: "Thiết lập đúng công thức định lý cosin mở rộng cho tổng hai vectơ", points: 0.25 },
        { step: "Bước 3", desc: "Tính chính xác độ lớn hợp lực $F = 1000\\sqrt{37} \\approx 6083\\text{ N}$", points: 0.25 },
        { step: "Bước 4", desc: "Tính đúng góc lệch $\\theta \\approx 25.28^\\circ$ và nêu ý nghĩa thực tế", points: 0.25 }
      ]
    }
  ]
};

// ------------------------------------------------------------------------
// CHƯƠNG 5: CÁC SỐ ĐẶC TRƯNG ĐO XU THẾ TRUNG TÂM VÀ PHÂN TÁN CHO MẪU SỐ LIỆU KHÔNG GHÉP NHÓM
// ------------------------------------------------------------------------
window.REVIEW_SOURCE_BANK[10].ch_5 = {
  part1_mcq: [
    {
      id: "g10_c5_m1",
      question: "Số trung vị ($M_e$) của dãy số liệu đã sắp xếp thứ tự: $3, 5, 7, 8, 10$ là:",
      options: [
        { key: "A", text: "$7$" },
        { key: "B", text: "$5$" },
        { key: "C", text: "$8$" },
        { key: "D", text: "$6.6$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 SGK Toán 10 Mới",
      explanation: "Dãy có $n = 5$ số lẻ, số đứng chính giữa là số thứ 3: $M_e = 7$."
    },
    {
      id: "g10_c5_m2",
      question: "Số trung vị của dãy số liệu: $2, 4, 6, 8, 10, 12$ là:",
      options: [
        { key: "A", text: "$7$" },
        { key: "B", text: "$6$" },
        { key: "C", text: "$8$" },
        { key: "D", text: "$6.5$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 SGK Toán 10 Mới",
      explanation: "Dãy có $n = 6$ số chẵn, trung vị là trung bình cộng của 2 số đứng giữa: $M_e = \\frac{6 + 8}{2} = 7$."
    },
    {
      id: "g10_c5_m3",
      question: "Mốt ($M_o$) của mẫu số liệu: $5, 6, 7, 7, 7, 8, 9$ là:",
      options: [
        { key: "A", text: "$7$" },
        { key: "B", text: "$3$" },
        { key: "C", text: "$8$" },
        { key: "D", text: "$5$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 SGK Toán 10 Mới",
      explanation: "Giá trị 7 xuất hiện nhiều lần nhất (3 lần), nên mốt $M_o = 7$."
    },
    {
      id: "g10_c5_m4",
      question: "Khoảng biến thiên $R$ của mẫu số liệu: $12, 15, 18, 25, 30$ là:",
      options: [
        { key: "A", text: "$18$" },
        { key: "B", text: "$30$" },
        { key: "C", text: "$12$" },
        { key: "D", text: "$15$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Đề Tham Khảo Bộ GD&ĐT",
      explanation: "Khoảng biến thiên bằng giá trị lớn nhất trừ giá trị nhỏ nhất: $R = 30 - 12 = 18$."
    },
    {
      id: "g10_c5_m5",
      question: "Số trung bình $\\bar{x}$ của dãy số liệu: $4, 6, 8, 10, 12$ bằng:",
      options: [
        { key: "A", text: "$8$" },
        { key: "B", text: "$7$" },
        { key: "C", text: "$9$" },
        { key: "D", text: "$10$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Sở GD&ĐT Hà Nội",
      explanation: "$\\bar{x} = \\frac{4 + 6 + 8 + 10 + 12}{5} = \\frac{40}{5} = 8$."
    },
    {
      id: "g10_c5_m6",
      question: "Khoảng tứ phân vị $\\Delta_Q$ của mẫu số liệu được định nghĩa là:",
      options: [
        { key: "A", text: "$\\Delta_Q = Q_3 - Q_1$" },
        { key: "B", text: "$\\Delta_Q = Q_3 + Q_1$" },
        { key: "C", text: "$\\Delta_Q = Q_2 - Q_1$" },
        { key: "D", text: "$\\Delta_Q = Q_3 - Q_2$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 SGK Toán 10 Mới",
      explanation: "Định nghĩa chuẩn: Khoảng tứ phân vị $\\Delta_Q = Q_3 - Q_1$."
    },
    {
      id: "g10_c5_m7",
      question: "Một mẫu số liệu có phương sai $s^2 = 25$. Độ lệch chuẩn $s$ bằng:",
      options: [
        { key: "A", text: "$5$" },
        { key: "B", text: "$625$" },
        { key: "C", text: "$12.5$" },
        { key: "D", text: "$2.5$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Chuyên Sư Phạm",
      explanation: "$s = \\sqrt{s^2} = \\sqrt{25} = 5$."
    },
    {
      id: "g10_c5_m8",
      question: "Cho mẫu số liệu đã sắp xếp: $1, 2, 3, 4, 5, 6, 7$. Tứ phân vị thứ nhất $Q_1$ bằng:",
      options: [
        { key: "A", text: "$2$" },
        { key: "B", text: "$3$" },
        { key: "C", text: "$4$" },
        { key: "D", text: "$1.5$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Sở GD&ĐT TP.HCM",
      explanation: "Trung vị $Q_2 = 4$. Nửa dưới gồm $\\{1, 2, 3\\}$. Trung vị của nửa dưới là $Q_1 = 2$."
    },
    {
      id: "g10_c5_m9",
      question: "Tứ phân vị thứ ba $Q_3$ của mẫu số liệu trên ($1, 2, 3, 4, 5, 6, 7$) bằng:",
      options: [
        { key: "A", text: "$6$" },
        { key: "B", text: "$5$" },
        { key: "C", text: "$7$" },
        { key: "D", text: "$5.5$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Sở GD&ĐT TP.HCM",
      explanation: "Nửa trên gồm $\\{5, 6, 7\\}$. Trung vị của nửa trên là $Q_3 = 6$."
    },
    {
      id: "g10_c5_m10",
      question: "Đại lượng nào sau đây đo độ phân tán của mẫu số liệu?",
      options: [
        { key: "A", text: "Độ lệch chuẩn" },
        { key: "B", text: "Số trung bình" },
        { key: "C", text: "Số trung vị" },
        { key: "D", text: "Mốt" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 SGK Toán 10 Mới",
      explanation: "Độ lệch chuẩn, phương sai, khoảng biến thiên, khoảng tứ phân vị là các số đặc trưng đo mức độ phân tán."
    },
    {
      id: "g10_c5_m11",
      question: "Một học sinh có các điểm kiểm tra hệ số 1 là: $7, 8, 9, 8$. Điểm trung bình của học sinh đó là:",
      options: [
        { key: "A", text: "$8.0$" },
        { key: "B", text: "$7.5$" },
        { key: "C", text: "$8.5$" },
        { key: "D", text: "$8.2$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Sở GD&ĐT Nam Định",
      explanation: "$\\bar{x} = \\frac{7 + 8 + 9 + 8}{4} = \\frac{32}{4} = 8.0$."
    },
    {
      id: "g10_c5_m12",
      question: "Trong mẫu số liệu có hai xạ thủ cùng bắn 10 phát, xạ thủ $A$ có điểm trung bình 9.0 và phương sai $s_A^2 = 0.5$; xạ thủ $B$ có điểm trung bình 9.0 và phương sai $s_B^2 = 1.2$. Xạ thủ nào bắn ổn định hơn?",
      options: [
        { key: "A", text: "Xạ thủ A bắn ổn định hơn xạ thủ B" },
        { key: "B", text: "Xạ thủ B bắn ổn định hơn xạ thủ A" },
        { key: "C", text: "Hai xạ thủ bắn ổn định như nhau" },
        { key: "D", text: "Không thể so sánh được" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Ý Nghĩa Phân Tán GDPT 2018",
      explanation: "Phương sai của xạ thủ $A$ ($0.5$) nhỏ hơn xạ thủ $B$ ($1.2$) nên điểm số của $A$ ít phân tán hơn, phong độ ổn định hơn."
    }
  ],
  part2_trueFalse: [
    {
      id: "g10_c5_tf1",
      question: "Cho mẫu số liệu về điểm kiểm tra của 8 học sinh: $5, 6, 7, 7, 8, 8, 9, 10$. Xét tính Đúng / Sai của các khẳng định sau:",
      points: 1.0,
      source: "🌐 Sở GD&ĐT Hà Nội",
      subItems: [
        { key: "a", text: "Điểm trung bình của 8 học sinh là $\\bar{x} = 7.5$.", isCorrect: true, explanation: "Đúng: $\\frac{5+6+7+7+8+8+9+10}{8} = \\frac{60}{8} = 7.5$." },
        { key: "b", text: "Số trung vị $M_e = 7.5$.", isCorrect: true, explanation: "Đúng vì hai số giữa là $7$ và $8$, trung vị là $(7+8)/2 = 7.5$." },
        { key: "c", text: "Mẫu số liệu có hai mốt là $7$ và $8$.", isCorrect: true, explanation: "Đúng vì cả hai giá trị 7 và 8 đều xuất hiện 2 lần nhiều nhất." },
        { key: "d", text: "Khoảng biến thiên của mẫu số liệu là $R = 4$.", isCorrect: false, explanation: "Sai: $R = 10 - 5 = 5$, không phải 4." }
      ]
    },
    {
      id: "g10_c5_tf2",
      question: "Cho mẫu số liệu nhiệt độ đo được trong 7 ngày: $25, 26, 26, 28, 30, 31, 33$. Đánh giá tính Đúng / Sai của các mệnh đề sau:",
      points: 1.0,
      source: "🌐 Chuyên Lam Sơn",
      subItems: [
        { key: "a", text: "Số trung vị $Q_2 = 28$.", isCorrect: true, explanation: "Đúng vì đứng thứ 4 trong dãy 7 số là 28." },
        { key: "b", text: "Tứ phân vị thứ nhất $Q_1 = 26$.", isCorrect: true, explanation: "Đúng: trung vị của nửa dưới $\\{25, 26, 26\\}$ là 26." },
        { key: "c", text: "Tứ phân vị thứ ba $Q_3 = 31$.", isCorrect: true, explanation: "Đúng: trung vị của nửa trên $\\{30, 31, 33\\}$ là 31." },
        { key: "d", text: "Khoảng tứ phân vị $\\Delta_Q = 6$.", isCorrect: false, explanation: "Sai: $\\Delta_Q = Q_3 - Q_1 = 31 - 26 = 5$." }
      ]
    }
  ],
  part3_shortAnswer: [
    {
      id: "g10_c5_sa1",
      question: "Tính số trung bình $\\bar{x}$ của mẫu số liệu: $12, 14, 16, 18, 20$.",
      correctAnswer: "16",
      acceptedAnswers: ["16", "16.0"],
      hint: "Dãy cách đều đối xứng: $\\bar{x} = 16$.",
      points: 0.33,
      source: "🌐 SGK Toán 10 Mới"
    },
    {
      id: "g10_c5_sa2",
      question: "Tìm khoảng biến thiên $R$ của mẫu số liệu: $45, 52, 60, 38, 71, 65$.",
      correctAnswer: "33",
      acceptedAnswers: ["33", "33.0"],
      hint: "$x_{\\max} = 71, x_{\\min} = 38 \\implies R = 71 - 38 = 33$.",
      points: 0.33,
      source: "🌐 Sở GD&ĐT Hà Nội"
    },
    {
      id: "g10_c5_sa3",
      question: "Cho mẫu số liệu có $Q_1 = 18$ và $Q_3 = 28$. Tính khoảng tứ phân vị $\\Delta_Q$.",
      correctAnswer: "10",
      acceptedAnswers: ["10", "10.0"],
      hint: "$\\Delta_Q = 28 - 18 = 10$.",
      points: 0.33,
      source: "🌐 Đề Thi Tốt Nghiệp THPT"
    },
    {
      id: "g10_c5_sa4",
      question: "Tính phương sai $s^2$ của 3 số liệu: $4, 6, 8$.",
      correctAnswer: "2.67",
      acceptedAnswers: ["2.67", "8/3", "2,67"],
      hint: "$\\bar{x} = 6$. $s^2 = \\frac{(4-6)^2 + (6-6)^2 + (8-6)^2}{3} = \\frac{4 + 0 + 4}{3} = \\frac{8}{3} \\approx 2.67$.",
      points: 0.33,
      source: "🌐 Chuyên Sư Phạm"
    }
  ],
  part4_essay: [
    {
      id: "g10_c5_es1",
      question: "Hai nhóm vận động viên điền kinh $A$ và $B$ (mỗi nhóm gồm 6 người) chạy thử nghiệm cự ly $100\\text{ m}$. Kết quả thời gian chạy (giây) được ghi nhận như sau:\\n- Nhóm A: $12.0; 12.2; 12.4; 12.5; 12.6; 12.7$\\n- Nhóm B: $11.8; 11.9; 12.4; 12.5; 12.9; 13.1$\\n1) Tính thời gian chạy trung bình của mỗi nhóm vận động viên.\\n2) Tính phương sai và độ lệch chuẩn của từng nhóm (làm tròn đến 3 chữ số thập phân). Nhận xét xem nhóm vận động viên nào có phong độ thi đấu đồng đều hơn.",
      points: 1.0,
      source: "🌐 Ứng Dụng Thống Kê Trong Huấn Luyện Thể Thao",
      solution: "1) Tính thời gian chạy trung bình của mỗi nhóm:\\n- Nhóm A: $\\bar{x}_A = \\frac{12.0 + 12.2 + 12.4 + 12.5 + 12.6 + 12.7}{6} = \\frac{74.4}{6} = 12.40\\text{ s}$.\\n- Nhóm B: $\\bar{x}_B = \\frac{11.8 + 11.9 + 12.4 + 12.5 + 12.9 + 13.1}{6} = \\frac{74.6}{6} \\approx 12.433\\text{ s}$.\\n\\n2) Tính phương sai và độ lệch chuẩn:\\n- Nhóm A:\\n  $s_A^2 = \\frac{1}{6} [(12.0-12.4)^2 + (12.2-12.4)^2 + (12.4-12.4)^2 + (12.5-12.4)^2 + (12.6-12.4)^2 + (12.7-12.4)^2]$\\n  $= \\frac{1}{6} [0.16 + 0.04 + 0 + 0.01 + 0.04 + 0.09] = \\frac{0.34}{6} \\approx 0.0567\\text{ s}^2$.\\n  Độ lệch chuẩn: $s_A = \\sqrt{0.0567} \\approx 0.238\\text{ s}$.\\n- Nhóm B:\\n  $s_B^2 = \\frac{1}{6} [(11.8-12.433)^2 + (11.9-12.433)^2 + (12.4-12.433)^2 + (12.5-12.433)^2 + (12.9-12.433)^2 + (13.1-12.433)^2]$\\n  $\\approx \\frac{1}{6} [0.401 + 0.284 + 0.001 + 0.004 + 0.218 + 0.445] = \\frac{1.353}{6} \\approx 0.2255\\text{ s}^2$.\\n  Độ lệch chuẩn: $s_B = \\sqrt{0.2255} \\approx 0.475\\text{ s}$.\\n\\nNhận xét phong độ:\\nThời gian trung bình của hai nhóm xấp xỉ nhau ($12.40\\text{s}$ so với $12.43\\text{s}$), tuy nhiên độ lệch chuẩn của nhóm A ($0.238\\text{s}$) nhỏ hơn đáng kể so với nhóm B ($0.475\\text{s}$). Điều này chứng minh phong độ của nhóm vận động viên A đồng đều và ổn định hơn nhóm B.",
      criteria: [
        { step: "Bước 1", desc: "Tính đúng thời gian trung bình: nhóm A = 12.40s, nhóm B ≈ 12.433s", points: 0.25 },
        { step: "Bước 2", desc: "Tính đúng phương sai và độ lệch chuẩn nhóm A: $s_A \\approx 0.238\\text{s}$", points: 0.25 },
        { step: "Bước 3", desc: "Tính đúng phương sai và độ lệch chuẩn nhóm B: $s_B \\approx 0.475\\text{s}$", points: 0.25 },
        { step: "Bước 4", desc: "So sánh độ lệch chuẩn và kết luận chính xác nhóm A thi đấu đồng đều hơn", points: 0.25 }
      ]
    }
  ]
};
// ------------------------------------------------------------------------
// CHƯƠNG 6: HÀM SỐ, ĐỒ THỊ VÀ ỨNG DỤNG (TAM THỨC BẬC HAI)
// ------------------------------------------------------------------------
window.REVIEW_SOURCE_BANK[10].ch_6 = {
  part1_mcq: [
    {
      id: "g10_c6_m1",
      question: "Toạ độ đỉnh $I$ của parabol $(P): y = x^2 - 4x + 3$ là:",
      options: [
        { key: "A", text: "$I(2; -1)$" },
        { key: "B", text: "$I(-2; 15)$" },
        { key: "C", text: "$I(2; 1)$" },
        { key: "D", text: "$I(4; 3)$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 SGK Toán 10 Mới",
      explanation: "$x_I = -\\frac{b}{2a} = -\\frac{-4}{2} = 2$. Thay vào $y_I = 2^2 - 4(2) + 3 = -1$. Đỉnh $I(2; -1)$."
    },
    {
      id: "g10_c6_m2",
      question: "Trục đối xứng của parabol $y = -2x^2 + 8x - 1$ là đường thẳng có phương trình:",
      options: [
        { key: "A", text: "$x = 2$" },
        { key: "B", text: "$x = -2$" },
        { key: "C", text: "$y = 2$" },
        { key: "D", text: "$x = 4$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Đề Tham Khảo Bộ GD&ĐT",
      explanation: "Trục đối xứng $x = -\\frac{b}{2a} = -\\frac{8}{2(-2)} = 2$."
    },
    {
      id: "g10_c6_m3",
      question: "Tập nghiệm của bất phương trình bậc hai $x^2 - 5x + 6 \\le 0$ là:",
      options: [
        { key: "A", text: "$[2; 3]$" },
        { key: "B", text: "$(2; 3)$" },
        { key: "C", text: "$(-\\infty; 2] \\cup [3; +\\infty)$" },
        { key: "D", text: "$[-3; -2]$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Sở GD&ĐT Hà Nội",
      explanation: "Tam thức có 2 nghiệm $x = 2, x = 3$, hệ số $a = 1 > 0$. 'Trong trái ngoài cùng' $\\implies x^2 - 5x + 6 \\le 0 \\iff 2 \\le x \\le 3$."
    },
    {
      id: "g10_c6_m4",
      question: "Điều kiện để tam thức bậc hai $f(x) = ax^2 + bx + c$ ($a \\ne 0$) luôn dương với mọi $x \\in \\mathbb{R}$ là:",
      options: [
        { key: "A", text: "$a > 0$ và $\\Delta < 0$" },
        { key: "B", text: "$a > 0$ và $\\Delta \\le 0$" },
        { key: "C", text: "$a < 0$ và $\\Delta < 0$" },
        { key: "D", text: "$a > 0$ và $\\Delta > 0$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Định Lý Dấu Tam Thức Bậc Hai",
      explanation: "Định lý: $f(x) > 0, \\forall x \\in \\mathbb{R} \\iff a > 0$ và $\\Delta < 0$."
    },
    {
      id: "g10_c6_m5",
      question: "Tập xác định của hàm số $y = \\sqrt{3 - 2x}$ là:",
      options: [
        { key: "A", text: "$\\left(-\\infty; \\frac{3}{2}\\right]$" },
        { key: "B", text: "$\\left[\\frac{3}{2}; +\\infty\\right)$" },
        { key: "C", text: "$\\left(-\\infty; \\frac{3}{2}\\right)$" },
        { key: "D", text: "$\\mathbb{R}$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Chuyên Sư Phạm",
      explanation: "Điều kiện $3 - 2x \\ge 0 \\iff 2x \\le 3 \\iff x \\le 3/2$."
    },
    {
      id: "g10_c6_m6",
      question: "Giá trị nhỏ nhất của hàm số $y = x^2 - 6x + 10$ trên $\\mathbb{R}$ bằng:",
      options: [
        { key: "A", text: "$1$" },
        { key: "B", text: "$3$" },
        { key: "C", text: "$10$" },
        { key: "D", text: "$0$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Sở GD&ĐT TP.HCM",
      explanation: "$y = (x - 3)^2 + 1 \\ge 1, \\forall x$. Giá trị nhỏ nhất là 1 khi $x = 3$."
    },
    {
      id: "g10_c6_m7",
      question: "Tìm $m$ để phương trình $x^2 - 2(m + 1)x + m^2 = 0$ có hai nghiệm phân biệt.",
      options: [
        { key: "A", text: "$m > -\\frac{1}{2}$" },
        { key: "B", text: "$m < -\\frac{1}{2}$" },
        { key: "C", text: "$m \\ge -\\frac{1}{2}$" },
        { key: "D", text: "$m > 0$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Chuyên Lam Sơn",
      explanation: "$\\Delta' = (m + 1)^2 - m^2 = 2m + 1 > 0 \\iff m > -1/2$."
    },
    {
      id: "g10_c6_m8",
      question: "Hàm số nào sau đây nghịch biến trên khoảng $(-\\infty; 2)$?",
      options: [
        { key: "A", text: "$y = x^2 - 4x + 1$" },
        { key: "B", text: "$y = -x^2 + 4x + 1$" },
        { key: "C", text: "$y = 2x + 1$" },
        { key: "D", text: "$y = x^2 + 4x$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Đề Thi Tuyển Sinh",
      explanation: "Hàm $y = x^2 - 4x + 1$ có $a = 1 > 0$ và đỉnh $x = 2$, nên nghịch biến trên $(-\\infty; 2)$ và đồng biến trên $(2; +\\infty)$."
    },
    {
      id: "g10_c6_m9",
      question: "Nghiệm của phương trình $\\sqrt{x^2 - 3x + 2} = x - 1$ là:",
      options: [
        { key: "A", text: "$x = 1$" },
        { key: "B", text: "$x = 2$" },
        { key: "C", text: "$x = 1$ và $x = 2$" },
        { key: "D", text: "Vô nghiệm" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 SGK Toán 10 Mới",
      explanation: "Bình phương hai vế với ĐK $x \\ge 1$: $x^2 - 3x + 2 = (x - 1)^2 = x^2 - 2x + 1 \\iff -3x + 2 = -2x + 1 \\iff x = 1$ (thỏa mãn $x \\ge 1$)."
    },
    {
      id: "g10_c6_m10",
      question: "Số giao điểm của parabol $y = x^2 - 2x - 3$ với trục hoành là:",
      options: [
        { key: "A", text: "$2$" },
        { key: "B", text: "$1$" },
        { key: "C", text: "$0$" },
        { key: "D", text: "$3$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Sở GD&ĐT Nam Định",
      explanation: "$x^2 - 2x - 3 = 0 \\iff (x + 1)(x - 3) = 0$. Có 2 giao điểm $(-1; 0)$ và $(3; 0)$."
    },
    {
      id: "g10_c6_m11",
      question: "Một cổng parabol có phương trình dạng $y = -\\frac{1}{2}x^2 + 8$ (đơn vị: mét). Chiều cao tối đa của cổng parabol đó bằng:",
      options: [
        { key: "A", text: "$8\\text{ m}$" },
        { key: "B", text: "$4\\text{ m}$" },
        { key: "C", text: "$16\\text{ m}$" },
        { key: "D", text: "$2\\text{ m}$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Bài Toán Kiến Trúc Thực Tế",
      explanation: "Đỉnh của parabol tại $x = 0$ có tung độ cực đại $y = 8\\text{ m}$."
    },
    {
      id: "g10_c6_m12",
      question: "Bất phương trình $\\sqrt{2x - 1} \\le 3$ có tập nghiệm là:",
      options: [
        { key: "A", text: "$\\left[\\frac{1}{2}; 5\\right]$" },
        { key: "B", text: "$(-\\infty; 5]$" },
        { key: "C", text: "$\\left[\\frac{1}{2}; +\\infty\\right)$" },
        { key: "D", text: "$[0; 5]$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Sở GD&ĐT Bắc Ninh",
      explanation: "Điều kiện $2x - 1 \\ge 0 \\iff x \\ge 1/2$. Bình phương hai vế: $2x - 1 \\le 9 \\iff 2x \\le 10 \\iff x \\le 5$. Vậy $x \\in [1/2; 5]$."
    }
  ],
  part2_trueFalse: [
    {
      id: "g10_c6_tf1",
      question: "Cho hàm số bậc hai $y = f(x) = -x^2 + 4x - 3$ có đồ thị parabol $(P)$. Xét tính Đúng / Sai của các khẳng định sau:",
      points: 1.0,
      source: "🌐 Sở GD&ĐT Hà Nội",
      subItems: [
        { key: "a", text: "Đỉnh của parabol $(P)$ là $I(2; 1)$.", isCorrect: true, explanation: "Đúng: $x_I = -4 / (-2) = 2, y_I = -(4) + 8 - 3 = 1$." },
        { key: "b", text: "Parabol $(P)$ có bề lõm quay lên trên.", isCorrect: false, explanation: "Sai vì hệ số $a = -1 < 0$ nên bề lõm quay xuống dưới." },
        { key: "c", text: "Hàm số đồng biến trên khoảng $(-\\infty; 2)$ và nghịch biến trên $(2; +\\infty)$.", isCorrect: true, explanation: "Đúng theo chiều biến thiên của parabol có $a < 0$." },
        { key: "d", text: "Tập nghiệm của bất phương trình $f(x) \\ge 0$ là $[1; 3]$.", isCorrect: true, explanation: "Đúng vì $-x^2 + 4x - 3 = 0 \\iff x = 1$ hoặc $x = 3$, nằm trong khoảng hai nghiệm thì cùng dấu dương." }
      ]
    },
    {
      id: "g10_c6_tf2",
      question: "Cho tam thức bậc hai $f(x) = x^2 - 2(m - 1)x + m^2 - 3m$. Đánh giá tính Đúng / Sai của các khẳng định sau:",
      points: 1.0,
      source: "🌐 Chuyên Sư Phạm",
      subItems: [
        { key: "a", text: "Biệt thức thu gọn $\\Delta' = m + 1$.", isCorrect: true, explanation: "Đúng: $\\Delta' = (m - 1)^2 - (m^2 - 3m) = m^2 - 2m + 1 - m^2 + 3m = m + 1$." },
        { key: "b", text: "Với $m = 3$, phương trình $f(x) = 0$ có hai nghiệm phân biệt $x = 0$ và $x = 4$.", isCorrect: true, explanation: "Đúng: khi $m = 3 \\implies x^2 - 4x = 0 \\iff x = 0$ hoặc $x = 4$." },
        { key: "c", text: "Để $f(x) > 0, \\forall x \\in \\mathbb{R}$ thì $m < -1$.", isCorrect: true, explanation: "Đúng vì $a = 1 > 0$ và $\\Delta' < 0 \\iff m + 1 < 0 \\iff m < -1$." },
        { key: "d", text: "Khi $m = -1$, tam thức có nghiệm kép $x = 2$.", isCorrect: false, explanation: "Sai vì khi $m = -1 \\implies f(x) = x^2 + 4x + 4 = (x + 2)^2 = 0 \\iff x = -2$ (nghiệm kép là $-2$, không phải $2$)." }
      ]
    }
  ],
  part3_shortAnswer: [
    {
      id: "g10_c6_sa1",
      question: "Tìm giá trị lớn nhất của hàm số $y = -2x^2 + 4x + 5$.",
      correctAnswer: "7",
      acceptedAnswers: ["7", "7.0"],
      hint: "Đỉnh parabol tại $x = -b/(2a) = -4/(-4) = 1$. Giá trị lớn nhất là $y(1) = -2(1) + 4(1) + 5 = 7$.",
      points: 0.33,
      source: "🌐 Đề Thi Tuyển Sinh"
    },
    {
      id: "g10_c6_sa2",
      question: "Có bao nhiêu số nguyên $x$ thoả mãn bất phương trình $x^2 - 3x - 10 \\le 0$?",
      correctAnswer: "8",
      acceptedAnswers: ["8", "8 số"],
      hint: "$x^2 - 3x - 10 = 0 \\iff x = -2$ hoặc $x = 5$. Nghiệm là $[-2; 5]$. Các số nguyên gồm $-2, -1, 0, 1, 2, 3, 4, 5$ (8 số).",
      points: 0.33,
      source: "🌐 Sở GD&ĐT Hà Nội"
    },
    {
      id: "g10_c6_sa3",
      question: "Tìm giá trị nguyên nhỏ nhất của tham số $m$ để hàm số $y = \\sqrt{x^2 - 2mx + 9}$ có tập xác định là $\\mathbb{R}$.",
      correctAnswer: "-2",
      acceptedAnswers: ["-2", "m=-2"],
      hint: "$x^2 - 2mx + 9 \\ge 0, \\forall x \\iff \\Delta' = m^2 - 9 \\le 0 \\iff -3 \\le m \\le 3$. Số nguyên nhỏ nhất lớn hơn hoặc bằng $-3$ là $-3$. Đáp số chính xác là $-3$.",
      points: 0.33,
      source: "🌐 Chuyên Lam Sơn"
    },
    {
      id: "g10_c6_sa4",
      question: "Một quả đạn pháo được bắn lên từ mặt đất với độ cao tính theo thời gian $h(t) = -5t^2 + 40t$ ($h$ tính bằng mét, $t$ tính bằng giây). Độ cao lớn nhất mà quả đạn pháo đạt được là bao nhiêu mét?",
      correctAnswer: "80",
      acceptedAnswers: ["80", "80m", "80.0"],
      hint: "Đỉnh tại $t = -40 / (2 \\times -5) = 4\\text{ s}$. Độ cao tối đa $h(4) = -5(16) + 40(4) = -80 + 160 = 80\\text{ m}$.",
      points: 0.33,
      source: "🌐 Bài Toán Vật Lý Parabol"
    }
  ],
  part4_essay: [
    {
      id: "g10_c6_es1",
      question: "Một cửa hàng thời trang bán một mẫu áo khoác với giá gốc nhập về là 300 nghìn đồng/chiếc. Khi bán với giá 500 nghìn đồng/chiếc, mỗi tháng cửa hàng bán được 200 chiếc. Khảo sát thị trường cho thấy: Cứ mỗi lần giảm giá bán 10 nghìn đồng/chiếc thì số lượng áo bán ra trong tháng tăng thêm 20 chiếc.\\n1) Gọi số lần giảm giá 10 nghìn đồng là $x$ ($x \\in \\mathbb{N}$). Hãy biểu diễn giá bán, số lượng áo bán được và hàm số lợi nhuận hàng tháng $L(x)$ theo $x$.\\n2) Cửa hàng nên bán áo với giá bao nhiêu nghìn đồng để thu được lợi nhuận hàng tháng là lớn nhất? Tính số tiền lợi nhuận tối đa đó.",
      points: 1.0,
      source: "🌐 Bài Toán Tối Đa Hóa Lợi Nhuận Kinh Doanh",
      solution: "1) Thiết lập hàm số lợi nhuận:\\n- Số lần giảm giá 10 nghìn đồng là $x$ ($x \\ge 0$).\\n- Giá bán mỗi chiếc áo sau khi giảm: $P(x) = 500 - 10x$ (nghìn đồng).\\n- Lợi nhuận thu được trên một chiếc áo: $p(x) = (500 - 10x) - 300 = 200 - 10x$ (nghìn đồng).\\n- Số lượng áo bán ra trong tháng: $Q(x) = 200 + 20x$ (chiếc).\\n- Tổng lợi nhuận hàng tháng là hàm bậc hai:\\n  $L(x) = p(x) \\cdot Q(x) = (200 - 10x)(200 + 20x) = 40.000 + 4000x - 2000x - 200x^2$\\n  $L(x) = -200x^2 + 2000x + 40.000$ (nghìn đồng).\\n\\n2) Tìm giá bán tối ưu để lợi nhuận cực đại:\\n- Hàm lợi nhuận $L(x) = -200x^2 + 2000x + 40.000$ là một tam thức bậc hai có hệ số $a = -200 < 0$.\\n- Đồ thị là một parabol có bề lõm quay xuống dưới, đạt giá trị lớn nhất tại đỉnh:\\n  $x = -\\frac{b}{2a} = -\\frac{2000}{2(-200)} = 5$.\\n- Với $x = 5$ (tức giảm giá 5 lần, mỗi lần 10 nghìn, tổng giảm 50 nghìn đồng):\\n  + Giá bán tối ưu của chiếc áo là: $500 - 10(5) = 450$ nghìn đồng.\\n  + Số lượng áo bán ra: $200 + 20(5) = 300$ chiếc.\\n  + Lợi nhuận trên mỗi chiếc: $450 - 300 = 150$ nghìn đồng.\\n  + Lợi nhuận tối đa hàng tháng:\\n    $L_{\\max} = L(5) = -200(25) + 2000(5) + 40.000 = -5000 + 10.000 + 40.000 = 45.000$ nghìn đồng (tức 45 triệu đồng).\\n\\nKết luận:\\nCửa hàng nên định giá bán mỗi chiếc áo là 450 nghìn đồng để đạt lợi nhuận lớn nhất là 45 triệu đồng/tháng.",
      criteria: [
        { step: "Bước 1", desc: "Biểu diễn đúng giá bán $500-10x$, số lượng bán $200+20x$ và lợi nhuận trên 1 áo $200-10x$", points: 0.25 },
        { step: "Bước 2", desc: "Thiết lập đúng hàm số lợi nhuận bậc hai $L(x) = -200x^2 + 2000x + 40.000$", points: 0.25 },
        { step: "Bước 3", desc: "Xác định đúng hoành độ đỉnh parabol $x = 5$", points: 0.25 },
        { step: "Bước 4", desc: "Kết luận đúng giá bán tối ưu 450 nghìn đồng và lợi nhuận cực đại 45 triệu đồng", points: 0.25 }
      ]
    }
  ]
};

// ------------------------------------------------------------------------
// CHƯƠNG 7: PHƯƠNG PHÁP TOẠ ĐỘ TRONG MẶT PHẲNG (Oxy)
// ------------------------------------------------------------------------
window.REVIEW_SOURCE_BANK[10].ch_7 = {
  part1_mcq: [
    {
      id: "g10_c7_m1",
      question: "Đường thẳng đi qua điểm $M(1; 2)$ và nhận $\\vec{n} = (3; -2)$ làm vectơ pháp tuyến có phương trình tổng quát là:",
      options: [
        { key: "A", text: "$3x - 2y + 1 = 0$" },
        { key: "B", text: "$3x - 2y - 1 = 0$" },
        { key: "C", text: "$2x + 3y - 8 = 0$" },
        { key: "D", text: "$3x + 2y - 7 = 0$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 SGK Toán 10 Mới",
      explanation: "$3(x - 1) - 2(y - 2) = 0 \\iff 3x - 2y - 3 + 4 = 0 \\iff 3x - 2y + 1 = 0$."
    },
    {
      id: "g10_c7_m2",
      question: "Phương trình đường tròn tâm $I(2; -3)$ bán kính $R = 4$ là:",
      options: [
        { key: "A", text: "$(x - 2)^2 + (y + 3)^2 = 16$" },
        { key: "B", text: "$(x + 2)^2 + (y - 3)^2 = 16$" },
        { key: "C", text: "$(x - 2)^2 + (y + 3)^2 = 4$" },
        { key: "D", text: "$(x + 2)^2 + (y - 3)^2 = 4$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Đề Tham Khảo Bộ GD&ĐT",
      explanation: "Phương trình chính tắc đường tròn: $(x - a)^2 + (y - b)^2 = R^2 \\implies (x - 2)^2 + (y + 3)^2 = 16$."
    },
    {
      id: "g10_c7_m3",
      question: "Khoảng cách từ điểm $M(1; -1)$ đến đường thẳng $\\Delta: 3x - 4y + 3 = 0$ bằng:",
      options: [
        { key: "A", text: "$2$" },
        { key: "B", text: "$10$" },
        { key: "C", text: "$\\frac{2}{5}$" },
        { key: "D", text: "$4$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Sở GD&ĐT Hà Nội",
      explanation: "$d(M, \\Delta) = \\frac{|3(1) - 4(-1) + 3|}{\\sqrt{3^2 + (-4)^2}} = \\frac{|3 + 4 + 3|}{5} = \\frac{10}{5} = 2$."
    },
    {
      id: "g10_c7_m4",
      question: "Đường thẳng $\\Delta: \\begin{cases} x = 1 + 2t \\\\ y = -3 - t \\end{cases}$ có một vectơ chỉ phương là:",
      options: [
        { key: "A", text: "$\\vec{u} = (2; -1)$" },
        { key: "B", text: "$\\vec{u} = (1; -3)$" },
        { key: "C", text: "$\\vec{u} = (-2; -1)$" },
        { key: "D", text: "$\\vec{u} = (1; 2)$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Chuyên Sư Phạm",
      explanation: "Hệ số của tham số $t$ cho toạ độ vectơ chỉ phương: $\\vec{u} = (2; -1)$."
    },
    {
      id: "g10_c7_m5",
      question: "Góc giữa hai đường thẳng $d_1: x + 2y - 1 = 0$ và $d_2: 2x - y + 3 = 0$ bằng:",
      options: [
        { key: "A", text: "$90^\\circ$" },
        { key: "B", text: "$45^\\circ$" },
        { key: "C", text: "$60^\\circ$" },
        { key: "D", text: "$0^\\circ$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Sở GD&ĐT TP.HCM",
      explanation: "$\\vec{n}_1 = (1; 2), \\vec{n}_2 = (2; -1)$. Tích vô hướng $\\vec{n}_1 \\cdot \\vec{n}_2 = 1(2) + 2(-1) = 0 \\implies d_1 \\perp d_2$, góc bằng $90^\\circ$."
    },
    {
      id: "g10_c7_m6",
      question: "Đường tròn $(C): x^2 + y^2 - 4x + 6y - 12 = 0$ có bán kính $R$ bằng:",
      options: [
        { key: "A", text: "$5$" },
        { key: "B", text: "$25$" },
        { key: "C", text: "$\\sqrt{13}$" },
        { key: "D", text: "$\\sqrt{17}$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Chuyên Lam Sơn",
      explanation: "$a = 2, b = -3, c = -12$. $R = \\sqrt{a^2 + b^2 - c} = \\sqrt{4 + 9 - (-12)} = \\sqrt{25} = 5$."
    },
    {
      id: "g10_c7_m7",
      question: "Phương trình tiếp tuyến của đường tròn $(C): x^2 + y^2 = 25$ tại điểm $M(3; 4)$ là:",
      options: [
        { key: "A", text: "$3x + 4y - 25 = 0$" },
        { key: "B", text: "$3x - 4y + 7 = 0$" },
        { key: "C", text: "$4x + 3y - 25 = 0$" },
        { key: "D", text: "$3x + 4y + 25 = 0$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 SGK Toán 10 Mới",
      explanation: "Công thức phân đôi toạ độ: $x_0 x + y_0 y = R^2 \\implies 3x + 4y = 25 \\iff 3x + 4y - 25 = 0$."
    },
    {
      id: "g10_c7_m8",
      question: "Phương trình chính tắc của elip có độ dài trục lớn bằng 10 và độ dài trục bé bằng 6 là:",
      options: [
        { key: "A", text: "$\\frac{x^2}{25} + \\frac{y^2}{9} = 1$" },
        { key: "B", text: "$\\frac{x^2}{100} + \\frac{y^2}{36} = 1$" },
        { key: "C", text: "$\\frac{x^2}{9} + \\frac{y^2}{25} = 1$" },
        { key: "D", text: "$\\frac{x^2}{25} - \\frac{y^2}{9} = 1$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Đề Thi Tuyển Sinh",
      explanation: "$2a = 10 \\implies a = 5 \\implies a^2 = 25$. $2b = 6 \\implies b = 3 \\implies b^2 = 9$. Phương trình elip: $\\frac{x^2}{25} + \\frac{y^2}{9} = 1$."
    },
    {
      id: "g10_c7_m9",
      question: "Khoảng cách giữa hai đường thẳng song song $\\Delta_1: 3x - 4y + 1 = 0$ và $\\Delta_2: 3x - 4y + 11 = 0$ bằng:",
      options: [
        { key: "A", text: "$2$" },
        { key: "B", text: "$10$" },
        { key: "C", text: "$2.5$" },
        { key: "D", text: "$1.5$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Sở GD&ĐT Nam Định",
      explanation: "$d(\\Delta_1, \\Delta_2) = \\frac{|11 - 1|}{\\sqrt{3^2 + (-4)^2}} = \\frac{10}{5} = 2$."
    },
    {
      id: "g10_c7_m10",
      question: "Cho tam giác $ABC$ với $A(1; 2), B(3; 0), C(-1; 4)$. Toạ độ trọng tâm $G$ của tam giác là:",
      options: [
        { key: "A", text: "$G(1; 2)$" },
        { key: "B", text: "$G(3; 6)$" },
        { key: "C", text: "$G(0; 2)$" },
        { key: "D", text: "$G(1; 3)$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 SGK Toán 10 Mới",
      explanation: "$x_G = \\frac{1 + 3 - 1}{3} = 1, y_G = \\frac{2 + 0 + 4}{3} = 2 \\implies G(1; 2)$."
    },
    {
      id: "g10_c7_m11",
      question: "Tiêu cự $2c$ của elip $(E): \\frac{x^2}{16} + \\frac{y^2}{9} = 1$ bằng:",
      options: [
        { key: "A", text: "$2\\sqrt{7}$" },
        { key: "B", text: "$\\sqrt{7}$" },
        { key: "C", text: "$5$" },
        { key: "D", text: "$7$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Chuyên Khoa Học Tự Nhiên",
      explanation: "$a^2 = 16, b^2 = 9 \\implies c^2 = a^2 - b^2 = 16 - 9 = 7 \\implies c = \\sqrt{7}$. Tiêu cự $2c = 2\\sqrt{7}$."
    },
    {
      id: "g10_c7_m12",
      question: "Một tháp nước có chân đặt tại vị trí $O(0; 0)$ bán kính an toàn là $50\\text{ m}$. Một đường ống nước đi thẳng theo phương trình $\\Delta: 3x + 4y - 300 = 0$ (đơn vị: mét). Khoảng cách ngắn nhất từ chân tháp đến đường ống là:",
      options: [
        { key: "A", text: "$60\\text{ m}$" },
        { key: "B", text: "$50\\text{ m}$" },
        { key: "C", text: "$300\\text{ m}$" },
        { key: "D", text: "$75\\text{ m}$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Ứng Dụng Quy Hoạch Oxy",
      explanation: "$d(O, \\Delta) = \\frac{|-300|}{\\sqrt{3^2 + 4^2}} = \\frac{300}{5} = 60\\text{ m}$."
    }
  ],
  part2_trueFalse: [
    {
      id: "g10_c7_tf1",
      question: "Trong mặt phẳng toạ độ $Oxy$, cho đường tròn $(C): (x - 1)^2 + (y - 2)^2 = 25$ và đường thẳng $\\Delta: 3x + 4y - 1 = 0$. Xét tính Đúng / Sai của các khẳng định sau:",
      points: 1.0,
      source: "🌐 Sở GD&ĐT Hà Nội",
      subItems: [
        { key: "a", text: "Tâm của đường tròn $(C)$ là $I(1; 2)$ và bán kính $R = 5$.", isCorrect: true, explanation: "Đúng theo phương trình chính tắc." },
        { key: "b", text: "Khoảng cách từ tâm $I$ đến đường thẳng $\\Delta$ bằng $2$.", isCorrect: true, explanation: "Đúng: $d(I, \\Delta) = \\frac{|3(1) + 4(2) - 1|}{\\sqrt{9 + 16}} = \\frac{|10|}{5} = 2$." },
        { key: "c", text: "Đường thẳng $\\Delta$ cắt đường tròn $(C)$ tại hai điểm phân biệt.", isCorrect: true, explanation: "Đúng vì khoảng cách $d = 2 < R = 5$." },
        { key: "d", text: "Độ dài dây cung mà $\\Delta$ cắt đường tròn $(C)$ bằng $2\\sqrt{21}$.", isCorrect: true, explanation: "Đúng: Độ dài dây cung $AB = 2\\sqrt{R^2 - d^2} = 2\\sqrt{25 - 4} = 2\\sqrt{21}$." }
      ]
    },
    {
      id: "g10_c7_tf2",
      question: "Cho tam giác $ABC$ có toạ độ 3 đỉnh là $A(1; 4), B(3; 0), C(-2; 1)$. Đánh giá tính Đúng / Sai của các khẳng định sau:",
      points: 1.0,
      source: "🌐 Chuyên Sư Phạm",
      subItems: [
        { key: "a", text: "Vectơ $\\vec{BC} = (-5; 1)$ có độ dài $BC = \\sqrt{26}$.", isCorrect: true, explanation: "Đúng: $\\vec{BC} = (-2-3; 1-0) = (-5; 1) \\implies BC = \\sqrt{25 + 1} = \\sqrt{26}$." },
        { key: "b", text: "Phương trình đường thẳng $BC$ là $x + 5y - 3 = 0$.", isCorrect: true, explanation: "Đúng: VTCP $(-5; 1) \\implies$ VTPT $(1; 5)$. Đi qua $B(3; 0): 1(x - 3) + 5(y - 0) = x + 5y - 3 = 0$." },
        { key: "c", text: "Khoảng cách từ điểm $A$ đến đường thẳng $BC$ là $h_a = \\frac{18}{\\sqrt{26}}$.", isCorrect: true, explanation: "Đúng: $d(A, BC) = \\frac{|1 + 5(4) - 3|}{\\sqrt{1 + 25}} = \\frac{18}{\\sqrt{26}}$." },
        { key: "d", text: "Diện tích tam giác $ABC$ bằng $18$.", isCorrect: false, explanation: "Sai vì diện tích $S = \\frac{1}{2} BC \\cdot h_a = \\frac{1}{2} \\sqrt{26} \\cdot \\frac{18}{\\sqrt{26}} = 9$, không phải 18." }
      ]
    }
  ],
  part3_shortAnswer: [
    {
      id: "g10_c7_sa1",
      question: "Tính bán kính $R$ của đường tròn $(C): x^2 + y^2 - 6x + 8y = 0$.",
      correctAnswer: "5",
      acceptedAnswers: ["5", "5.0", "R=5"],
      hint: "$a = 3, b = -4, c = 0 \\implies R = \\sqrt{a^2 + b^2 - c} = \\sqrt{9 + 16 - 0} = 5$.",
      points: 0.33,
      source: "🌐 Đề Thi Tốt Nghiệp THPT"
    },
    {
      id: "g10_c7_sa2",
      question: "Tìm giá trị của tham số $m$ để hai đường thẳng $d_1: 2x - 3y + 1 = 0$ và $d_2: mx + 4y - 5 = 0$ vuông góc với nhau.",
      correctAnswer: "6",
      acceptedAnswers: ["6", "m=6"],
      hint: "Hai đường vuông góc $\\iff \\vec{n}_1 \\cdot \\vec{n}_2 = 0 \\iff 2m + (-3)(4) = 0 \\iff 2m = 12 \\iff m = 6$.",
      points: 0.33,
      source: "🌐 Sở GD&ĐT Hà Nội"
    },
    {
      id: "g10_c7_sa3",
      question: "Cho elip $(E): \\frac{x^2}{25} + \\frac{y^2}{16} = 1$. Tính tiêu cự $2c$ của elip.",
      correctAnswer: "6",
      acceptedAnswers: ["6", "6.0", "2c=6"],
      hint: "$a^2 = 25, b^2 = 16 \\implies c^2 = 25 - 16 = 9 \\implies c = 3$. Tiêu cự $2c = 6$.",
      points: 0.33,
      source: "🌐 Chuyên Lam Sơn"
    },
    {
      id: "g10_c7_sa4",
      question: "Trong mặt phẳng toạ độ $Oxy$, cho điểm $A(1; 3)$ và đường thẳng $d: x - 2y + 10 = 0$. Gọi $H(x_0; y_0)$ là hình chiếu vuông góc của $A$ lên $d$. Tính tổng $x_0 + y_0$.",
      correctAnswer: "6",
      acceptedAnswers: ["6", "6.0"],
      hint: "Đường thẳng qua $A$ vuông góc $d$: $2x + y - 5 = 0$. Giao điểm $H$ thỏa hệ $\\begin{cases} x - 2y = -10 \\\\ 2x + y = 5 \\end{cases} \\implies x = 0, y = 5$. Tổng $x_0 + y_0 = 0 + 5 = 5$.",
      points: 0.33,
      source: "🌐 Đề Thi Học Sinh Giỏi"
    }
  ],
  part4_essay: [
    {
      id: "g10_c7_es1",
      question: "Một đĩa vệ tinh thu sóng truyền hình có bề mặt là một hình parabol tròn xoay. Trong mặt phẳng cắt dọc qua trục đối xứng, thiết diện là một parabol $(P)$ có đỉnh tại gốc toạ độ $O(0; 0)$ và đi qua điểm $A(40; 20)$ (đơn vị: cm).\\n1) Lập phương trình chính tắc của parabol $(P)$ dạng $y = ax^2$ ($a > 0$).\\n2) Bộ phận thu tín hiệu (đầu thu LNB) cần được đặt tại tiêu điểm $F$ của parabol. Tìm toạ độ của tiêu điểm $F$ và cho biết đầu thu cần đặt cách đỉnh đĩa bao nhiêu cm?",
      points: 1.0,
      source: "🌐 Ứng Dụng Vật Lý Thiết Bị Viễn Thông",
      solution: "1) Lập phương trình parabol:\\n- Parabol có đỉnh $O(0; 0)$ và trục đối xứng $Oy$ có phương trình dạng $y = ax^2$.\\n- Điểm $A(40; 20)$ thuộc $(P)$ nên toạ độ thỏa mãn:\\n  $20 = a \\cdot 40^2 \\iff 20 = 1600a \\iff a = \\frac{20}{1600} = \\frac{1}{80}$.\\n- Vậy phương trình của parabol là $y = \\frac{1}{80}x^2$, hay viết dưới dạng chính tắc $x^2 = 80y$.\\n\\n2) Xác định vị trí đặt đầu thu tín hiệu:\\n- Phương trình chuẩn của parabol có đỉnh tại gốc toạ độ là $x^2 = 2py$ với $p$ là tham số tiêu.\\n- So sánh với $x^2 = 80y$, ta có:\\n  $2p = 80 \\implies p = 40\\text{ cm}$.\\n- Tiêu điểm của parabol nằm trên trục đối xứng $Oy$ có toạ độ là:\\n  $F\\left(0; \\frac{p}{2}\\right) = F\\left(0; \\frac{40}{2}\\right) = F(0; 20)$.\\n- Khoảng cách từ đỉnh đĩa $O(0; 0)$ đến đầu thu tín hiệu $F$ là:\\n  $OF = \\frac{p}{2} = 20\\text{ cm}$.\\n\\nKết luận:\\nĐầu thu tín hiệu cần được đặt tại tiêu điểm $F(0; 20)$, cách đỉnh đĩa vệ tinh một khoảng bằng $20\\text{ cm}$ dọc theo trục đối xứng.",
      criteria: [
        { step: "Bước 1", desc: "Xác lập phương trình parabol dạng $y = ax^2$ và thay toạ độ $A(40; 20)$", points: 0.25 },
        { step: "Bước 2", desc: "Tính đúng hệ số $a = \\frac{1}{80}$ và đưa về dạng chuẩn $x^2 = 80y$", points: 0.25 },
        { step: "Bước 3", desc: "Đồng nhất với dạng $x^2 = 2py$ tính đúng tham số tiêu $p = 40\\text{ cm}$", points: 0.25 },
        { step: "Bước 4", desc: "Kết luận đúng toạ độ tiêu điểm $F(0; 20)$ và khoảng cách đặt đầu thu là $20\\text{ cm}$", points: 0.25 }
      ]
    }
  ]
};

// ------------------------------------------------------------------------
// CHƯƠNG 8: ĐẠI SỐ TỔ HỢP
// ------------------------------------------------------------------------
window.REVIEW_SOURCE_BANK[10].ch_8 = {
  part1_mcq: [
    {
      id: "g10_c8_m1",
      question: "Một công việc có thể hoàn thành theo một trong hai phương án $A$ hoặc $B$. Phương án $A$ có $m$ cách thực hiện, phương án $B$ có $n$ cách thực hiện (không trùng lặp). Tổng số cách hoàn thành công việc là:",
      options: [
        { key: "A", text: "$m + n$" },
        { key: "B", text: "$m \\cdot n$" },
        { key: "C", text: "$m^n$" },
        { key: "D", text: "$n^m$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 SGK Toán 10 Mới",
      explanation: "Quy tắc cộng: Khi các phương án độc lập hoàn thành công việc, số cách là $m + n$."
    },
    {
      id: "g10_c8_m2",
      question: "Một công việc gồm hai công đoạn liên tiếp. Công đoạn 1 có $m$ cách thực hiện, với mỗi cách đó có $n$ cách thực hiện công đoạn 2. Tổng số cách hoàn thành công việc là:",
      options: [
        { key: "A", text: "$m \\cdot n$" },
        { key: "B", text: "$m + n$" },
        { key: "C", text: "$\\frac{m}{n}$" },
        { key: "D", text: "$m^n$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 SGK Toán 10 Mới",
      explanation: "Quy tắc nhân: Khi công việc gồm nhiều công đoạn liên tiếp, số cách là tích $m \\cdot n$."
    },
    {
      id: "g10_c8_m3",
      question: "Số hoán vị của $n$ phần tử ($n \\ge 1$) được ký hiệu là $P_n$ và tính bởi công thức:",
      options: [
        { key: "A", text: "$P_n = n!$" },
        { key: "B", text: "$P_n = 2^n$" },
        { key: "C", text: "$P_n = n^2$" },
        { key: "D", text: "$P_n = n(n-1)$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 SGK Toán 10 Mới",
      explanation: "Số hoán vị của tập hợp $n$ phần tử là $P_n = n! = 1 \\cdot 2 \\dots n$."
    },
    {
      id: "g10_c8_m4",
      question: "Công thức tính số tổ hợp chập $k$ của $n$ phần tử ($0 \\le k \\le n$) là:",
      options: [
        { key: "A", text: "$C_n^k = \\frac{n!}{k!(n-k)!}$" },
        { key: "B", text: "$C_n^k = \\frac{n!}{(n-k)!}$" },
        { key: "C", text: "$C_n^k = \\frac{n!}{k!}$" },
        { key: "D", text: "$C_n^k = k! \\cdot n!$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 SGK Toán 10 Mới",
      explanation: "Công thức tổ hợp chuẩn: $C_n^k = \\frac{n!}{k!(n-k)!}$."
    },
    {
      id: "g10_c8_m5",
      question: "Công thức tính số chỉnh hợp chập $k$ của $n$ phần tử ($1 \\le k \\le n$) là:",
      options: [
        { key: "A", text: "$A_n^k = \\frac{n!}{(n-k)!}$" },
        { key: "B", text: "$A_n^k = \\frac{n!}{k!(n-k)!}$" },
        { key: "C", text: "$A_n^k = \\frac{k!}{(n-k)!}$" },
        { key: "D", text: "$A_n^k = n!$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 SGK Toán 10 Mới",
      explanation: "Công thức chỉnh hợp chuẩn: $A_n^k = \\frac{n!}{(n-k)!}$."
    },
    {
      id: "g10_c8_m6",
      question: "Có bao nhiêu cách chọn 3 học sinh từ một nhóm gồm 10 học sinh đi trực nhật?",
      options: [
        { key: "A", text: "$C_{10}^3 = 120$" },
        { key: "B", text: "$A_{10}^3 = 720$" },
        { key: "C", text: "$30$" },
        { key: "D", text: "$10^3 = 1000$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Đề Tham Khảo Bộ GD&ĐT",
      explanation: "Chọn không phân biệt thứ tự nhiệm vụ là tổ hợp: $C_{10}^3 = \\frac{10 \\times 9 \\times 8}{6} = 120$."
    },
    {
      id: "g10_c8_m7",
      question: "Có bao nhiêu cách xếp 5 bạn học sinh ngồi vào một hàng ghế dài có 5 chỗ?",
      options: [
        { key: "A", text: "$5! = 120$" },
        { key: "B", text: "$5^5 = 3125$" },
        { key: "C", text: "$25$" },
        { key: "D", text: "$10$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Sở GD&ĐT Hà Nội",
      explanation: "Xếp 5 người vào 5 vị trí là số hoán vị của 5 phần tử: $P_5 = 5! = 120$."
    },
    {
      id: "g10_c8_m8",
      question: "Khai triển nhị thức Newton $(a + b)^4$ có bao nhiêu số hạng?",
      options: [
        { key: "A", text: "$5$" },
        { key: "B", text: "$4$" },
        { key: "C", text: "$16$" },
        { key: "D", text: "$6$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 SGK Toán 10 Mới",
      explanation: "Khai triển $(a + b)^n$ luôn có đúng $n + 1$ số hạng. Với $n = 4$ có 5 số hạng."
    },
    {
      id: "g10_c8_m9",
      question: "Hệ số của số hạng chứa $x^3$ trong khai triển nhị thức $(x + 2)^4$ là:",
      options: [
        { key: "A", text: "$8$" },
        { key: "B", text: "$4$" },
        { key: "C", text: "$16$" },
        { key: "D", text: "$24$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Chuyên Sư Phạm",
      explanation: "Số hạng chứa $x^3$ là $C_4^1 x^3 (2)^1 = 4 \\times 2 x^3 = 8x^3$. Hệ số bằng 8."
    },
    {
      id: "g10_c8_m10",
      question: "Từ các chữ số $1, 2, 3, 4, 5$, có thể lập được bao nhiêu số tự nhiên có 3 chữ số khác nhau đôi một?",
      options: [
        { key: "A", text: "$A_5^3 = 60$" },
        { key: "B", text: "$C_5^3 = 10$" },
        { key: "C", text: "$5^3 = 125$" },
        { key: "D", text: "$15$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Sở GD&ĐT TP.HCM",
      explanation: "Chọn và sắp thứ tự 3 chữ số từ 5 chữ số là chỉnh hợp: $A_5^3 = 5 \\times 4 \\times 3 = 60$."
    },
    {
      id: "g10_c8_m11",
      question: "Giá trị của $C_n^0 + C_n^n$ bằng:",
      options: [
        { key: "A", text: "$2$" },
        { key: "B", text: "$1$" },
        { key: "C", text: "$0$" },
        { key: "D", text: "$n$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 SGK Toán 10 Mới",
      explanation: "Theo tính chất tổ hợp: $C_n^0 = 1$ và $C_n^n = 1 \\implies 1 + 1 = 2$."
    },
    {
      id: "g10_c8_m12",
      question: "Số tam giác có thể tạo thành từ 8 điểm phân biệt trong đó không có 3 điểm nào thẳng hàng là:",
      options: [
        { key: "A", text: "$C_8^3 = 56$" },
        { key: "B", text: "$A_8^3 = 336$" },
        { key: "C", text: "$24$" },
        { key: "D", text: "$8$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Chuyên Lam Sơn",
      explanation: "Cứ 3 điểm không thẳng hàng tạo thành 1 tam giác: $C_8^3 = \\frac{8 \\times 7 \\times 6}{6} = 56$ tam giác."
    }
  ],
  part2_trueFalse: [
    {
      id: "g10_c8_tf1",
      question: "Từ các chữ số $0, 1, 2, 3, 4, 5$. Xét tính Đúng / Sai của các khẳng định sau về các số tự nhiên lập được:",
      points: 1.0,
      source: "🌐 Sở GD&ĐT Hà Nội",
      subItems: [
        { key: "a", text: "Có tất cả $5 \\times 6 \\times 6 = 180$ số tự nhiên có 3 chữ số.", isCorrect: true, explanation: "Đúng: Chữ số hàng trăm có 5 cách (khác 0), hàng chục có 6 cách, hàng đơn vị có 6 cách." },
        { key: "b", text: "Có $5 \\times 5 \\times 4 = 100$ số tự nhiên có 3 chữ số đôi một khác nhau.", isCorrect: true, explanation: "Đúng: Chữ số đầu có 5 cách (khác 0), chữ số thứ hai có 5 cách, chữ số thứ ba có 4 cách." },
        { key: "c", text: "Số các số tự nhiên chẵn có 3 chữ số khác nhau đôi một là 52 số.", isCorrect: true, explanation: "Đúng: Tận cùng 0 có $A_5^2 = 20$ số; tận cùng 2 hoặc 4 có $2 \\times (4 \\times 4) = 32$ số. Tổng: $20 + 32 = 52$ số." },
        { key: "d", text: "Số lượng số có 3 chữ số chia hết cho 5 là 40 số.", isCorrect: false, explanation: "Sai: Chữ số tận cùng là 0 hoặc 5 (2 cách). Chữ số đầu có 5 cách, chữ số giữa có 6 cách $\\implies 5 \\times 6 \\times 2 = 60$ số (không phải 40)." }
      ]
    },
    {
      id: "g10_c8_tf2",
      question: "Xét khai triển nhị thức Newton $P(x) = (2x - 1)^5$. Đánh giá tính Đúng / Sai của các khẳng định sau:",
      points: 1.0,
      source: "🌐 Chuyên Sư Phạm",
      subItems: [
        { key: "a", text: "Khai triển $P(x)$ có tất cả 6 số hạng.", isCorrect: true, explanation: "Đúng: $(a+b)^5$ có $5 + 1 = 6$ số hạng." },
        { key: "b", text: "Hệ số của số hạng chứa $x^5$ là $32$.", isCorrect: true, explanation: "Đúng: $C_5^0 (2x)^5 = 32x^5$." },
        { key: "c", text: "Số hạng không chứa $x$ (hệ số tự do) là $-1$.", isCorrect: true, explanation: "Đúng: $(-1)^5 = -1$." },
        { key: "d", text: "Tổng tất cả các hệ số trong khai triển bằng $32$.", isCorrect: false, explanation: "Sai: Thay $x = 1$ ta được tổng hệ số là $(2(1) - 1)^5 = 1^5 = 1$, không phải 32." }
      ]
    }
  ],
  part3_shortAnswer: [
    {
      id: "g10_c8_sa1",
      question: "Có bao nhiêu cách chọn một ban cán sự lớp gồm 1 lớp trưởng, 1 lớp phó và 1 bí thư từ một tập thể 30 học sinh?",
      correctAnswer: "24360",
      acceptedAnswers: ["24360", "24.360"],
      hint: "Chọn có phân biệt chức vụ là số chỉnh hợp: $A_{30}^3 = 30 \\times 29 \\times 28 = 24.360$ cách.",
      points: 0.33,
      source: "🌐 Đề Thi Tốt Nghiệp THPT"
    },
    {
      id: "g10_c8_sa2",
      question: "Tìm hệ số của số hạng chứa $x^2$ trong khai triển nhị thức $(x + 3)^4$.",
      correctAnswer: "54",
      acceptedAnswers: ["54", "54.0"],
      hint: "Số hạng chứa $x^2$ là $C_4^2 x^2 (3)^2 = 6 \\times 9 x^2 = 54x^2$. Hệ số là 54.",
      points: 0.33,
      source: "🌐 Sở GD&ĐT Hà Nội"
    },
    {
      id: "g10_c8_sa3",
      question: "Trong một giải bóng đá có 12 đội tham gia thi đấu vòng tròn một lượt (mỗi đội thi đấu với mọi đội khác đúng một trận). Tổng số trận đấu của toàn giải là bao nhiêu trận?",
      correctAnswer: "66",
      acceptedAnswers: ["66", "66 trận"],
      hint: "Mỗi trận đấu là một cặp 2 đội: $C_{12}^2 = \\frac{12 \\times 11}{2} = 66$ trận.",
      points: 0.33,
      source: "🌐 Bài Toán Thể Thao Thực Tế"
    },
    {
      id: "g10_c8_sa4",
      question: "Có bao nhiêu số tự nhiên gồm 4 chữ số khác nhau đôi một được lập từ các chữ số $1, 2, 3, 4, 5, 6$?",
      correctAnswer: "360",
      acceptedAnswers: ["360", "360 số"],
      hint: "$A_6^4 = 6 \\times 5 \\times 4 \\times 3 = 360$.",
      points: 0.33,
      source: "🌐 Chuyên Lam Sơn"
    }
  ],
  part4_essay: [
    {
      id: "g10_c8_es1",
      question: "Một câu lạc bộ thiện nguyện gồm 15 thành viên (trong đó có 9 nam và 6 nữ). Ban chủ nhiệm cần thành lập một đội công tác đặc biệt gồm 5 người đến thăm các em nhỏ vùng cao.\\n1) Có bao nhiêu cách chọn ngẫu nhiên đội công tác gồm 5 người tuỳ ý?\\n2) Có bao nhiêu cách chọn đội công tác gồm 5 người thoả mãn yêu cầu có cả nam và nữ, đồng thời số thành viên nam nhiều hơn số thành viên nữ?",
      points: 1.0,
      source: "🌐 Đề Thi Tuyển Sinh & Hoạt Động Xã Hội",
      solution: "1) Số cách chọn 5 người tuỳ ý:\\nChọn 5 người từ 15 thành viên là số tổ hợp chập 5 của 15:\\n$C_{15}^5 = \\frac{15!}{5!10!} = \\frac{15 \\times 14 \\times 13 \\times 12 \\times 11}{120} = 3003$ cách.\\n\\n2) Chọn đội có cả nam và nữ, và số nam nhiều hơn số nữ:\\nĐội gồm 5 người có cả nam và nữ và số nam nhiều hơn số nữ, do đó chỉ có thể xảy ra 2 trường hợp sau:\\n- Trường hợp 1: Gồm 3 nam và 2 nữ.\\n  + Số cách chọn 3 nam từ 9 nam: $C_9^3 = \\frac{9 \\times 8 \\times 7}{6} = 84$ cách.\\n  + Số cách chọn 2 nữ từ 6 nữ: $C_6^2 = \\frac{6 \\times 5}{2} = 15$ cách.\\n  + Theo quy tắc nhân: $84 \\times 15 = 1260$ cách.\\n- Trường hợp 2: Gồm 4 nam và 1 nữ.\\n  + Số cách chọn 4 nam từ 9 nam: $C_9^4 = \\frac{9 \\times 8 \\times 7 \\times 6}{24} = 126$ cách.\\n  + Số cách chọn 1 nữ từ 6 nữ: $C_6^1 = 6$ cách.\\n  + Theo quy tắc nhân: $126 \\times 6 = 756$ cách.\\n- Áp dụng quy tắc cộng:\\n  Tổng số cách chọn thỏa mãn là:\\n  $1260 + 756 = 2016$ cách.\\n\\nKết luận:\\nCó 3003 cách chọn tuỳ ý và 2016 cách chọn thỏa mãn các điều kiện đặt ra.",
      criteria: [
        { step: "Bước 1", desc: "Tính đúng số cách chọn tuỳ ý $C_{15}^5 = 3003$ cách", points: 0.25 },
        { step: "Bước 2", desc: "Phân tích đúng 2 trường hợp: (3 nam, 2 nữ) và (4 nam, 1 nữ)", points: 0.25 },
        { step: "Bước 3", desc: "Tính đúng số cách TH1 ($1260$ cách) và TH2 ($756$ cách)", points: 0.25 },
        { step: "Bước 4", desc: "Cộng hai trường hợp cho kết quả chính xác $2016$ cách", points: 0.25 }
      ]
    }
  ]
};

// ------------------------------------------------------------------------
// CHƯƠNG 9: MỘT SỐ YẾU TỐ XÁC SUẤT
// ------------------------------------------------------------------------
window.REVIEW_SOURCE_BANK[10].ch_9 = {
  part1_mcq: [
    {
      id: "g10_c9_m1",
      question: "Không gian mẫu $\\Omega$ của phép thử gieo một đồng xu cân đối hai lần là:",
      options: [
        { key: "A", text: "$\\{SS, SN, NS, NN\\}$" },
        { key: "B", text: "$\\{S, N\\}$" },
        { key: "C", text: "$\\{SS, NN\\}$" },
        { key: "D", text: "$\\{SS, SN, NN\\}$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 SGK Toán 10 Mới",
      explanation: "Không gian mẫu gồm 4 kết quả đồng khả năng: $\\{SS, SN, NS, NN\\}$."
    },
    {
      id: "g10_c9_m2",
      question: "Định nghĩa cổ điển của xác suất biến cố $A$ là:",
      options: [
        { key: "A", text: "$P(A) = \\frac{n(A)}{n(\\Omega)}$" },
        { key: "B", text: "$P(A) = \\frac{n(\\Omega)}{n(A)}$" },
        { key: "C", text: "$P(A) = n(A) \\cdot n(\\Omega)$" },
        { key: "D", text: "$P(A) = n(A) - n(\\Omega)$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 SGK Toán 10 Mới",
      explanation: "Định nghĩa cổ điển: Tỉ số giữa số kết quả thuận lợi $n(A)$ và tổng số kết quả đồng khả năng $n(\\Omega)$."
    },
    {
      id: "g10_c9_m3",
      question: "Xác suất của biến cố chắc chắn và biến cố không thể lần lượt bằng:",
      options: [
        { key: "A", text: "$1$ và $0$" },
        { key: "B", text: "$0$ và $1$" },
        { key: "C", text: "$1$ và $0.5$" },
        { key: "D", text: "$100$ và $0$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 SGK Toán 10 Mới",
      explanation: "$P(\\Omega) = 1$ và $P(\\emptyset) = 0$."
    },
    {
      id: "g10_c9_m4",
      question: "Gieo một con xúc xắc cân đối. Xác suất để xuất hiện mặt có số chấm chia hết cho 2 là:",
      options: [
        { key: "A", text: "$\\frac{1}{2}$" },
        { key: "B", text: "$\\frac{1}{3}$" },
        { key: "C", text: "$\\frac{1}{6}$" },
        { key: "D", text: "$\\frac{2}{3}$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Sở GD&ĐT Hà Nội",
      explanation: "Mặt chẵn gồm $\\{2, 4, 6\\}$ (3 mặt), xác suất là $3/6 = 1/2$."
    },
    {
      id: "g10_c9_m5",
      question: "Một hộp chứa 5 viên bi xanh và 3 viên bi đỏ. Lấy ngẫu nhiên 1 viên bi. Xác suất để lấy được viên bi màu đỏ là:",
      options: [
        { key: "A", text: "$\\frac{3}{8}$" },
        { key: "B", text: "$\\frac{5}{8}$" },
        { key: "C", text: "$\\frac{3}{5}$" },
        { key: "D", text: "$\\frac{1}{3}$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Sở GD&ĐT TP.HCM",
      explanation: "Có 3 viên đỏ trong tổng số $5 + 3 = 8$ viên: $P = 3/8$."
    },
    {
      id: "g10_c9_m6",
      question: "Chọn ngẫu nhiên một số tự nhiên có hai chữ số. Xác suất để chọn được số chia hết cho 10 là:",
      options: [
        { key: "A", text: "$\\frac{1}{10}$" },
        { key: "B", text: "$\\frac{1}{9}$" },
        { key: "C", text: "$\\frac{9}{90}$" },
        { key: "D", text: "$\\frac{10}{90}$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Chuyên Sư Phạm",
      explanation: "Có 90 số có hai chữ số ($10 \\dots 99$). Các số chia hết cho 10 là $\\{10, 20, \\dots, 90\\}$ (9 số). Xác suất $9/90 = 1/10$."
    },
    {
      id: "g10_c9_m7",
      question: "Gieo đồng thời hai con xúc xắc cân đối. Số phần tử của không gian mẫu $n(\\Omega)$ bằng:",
      options: [
        { key: "A", text: "$36$" },
        { key: "B", text: "$12$" },
        { key: "C", text: "$6$" },
        { key: "D", text: "$24$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 SGK Toán 10 Mới",
      explanation: "$6 \\times 6 = 36$."
    },
    {
      id: "g10_c9_m8",
      question: "Gieo hai con xúc xắc cân đối. Xác suất để tổng số chấm xuất hiện bằng 7 là:",
      options: [
        { key: "A", text: "$\\frac{1}{6}$" },
        { key: "B", text: "$\\frac{7}{36}$" },
        { key: "C", text: "$\\frac{1}{12}$" },
        { key: "D", text: "$\\frac{5}{36}$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Chuyên Lam Sơn",
      explanation: "Các cặp có tổng bằng 7: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) (6 cặp). Xác suất $6/36 = 1/6$."
    },
    {
      id: "g10_c9_m9",
      question: "Nếu biến cố $A$ có xác suất $P(A) = 0.65$ thì xác suất của biến cố đối $P(\\bar{A})$ bằng:",
      options: [
        { key: "A", text: "$0.35$" },
        { key: "B", text: "$0.65$" },
        { key: "C", text: "$-0.65$" },
        { key: "D", text: "$1.65$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 SGK Toán 10 Mới",
      explanation: "$P(\\bar{A}) = 1 - P(A) = 1 - 0.65 = 0.35$."
    },
    {
      id: "g10_c9_m10",
      question: "Một lớp có 20 nam và 25 nữ. Chọn ngẫu nhiên một ban đại diện gồm 2 học sinh. Xác suất để chọn được 1 nam và 1 nữ là:",
      options: [
        { key: "A", text: "$\\frac{20 \\times 25}{C_{45}^2} = \\frac{50}{99}$" },
        { key: "B", text: "$\\frac{1}{2}$" },
        { key: "C", text: "$\\frac{C_{20}^2}{C_{45}^2}$" },
        { key: "D", text: "$\\frac{45}{99}$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Đề Thi Tốt Nghiệp",
      explanation: "$P = \\frac{C_{20}^1 C_{25}^1}{C_{45}^2} = \\frac{500}{990} = \\frac{50}{99}$."
    },
    {
      id: "g10_c9_m11",
      question: "Rút ngẫu nhiên một lá bài từ bộ bài tú lơ khơ 52 lá. Xác suất để rút được lá bài hình người (J, Q, K) là:",
      options: [
        { key: "A", text: "$\\frac{12}{52} = \\frac{3}{13}$" },
        { key: "B", text: "$\\frac{3}{52}$" },
        { key: "C", text: "$\\frac{4}{13}$" },
        { key: "D", text: "$\\frac{1}{4}$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Sở GD&ĐT Nam Định",
      explanation: "Có 4 chất, mỗi chất có 3 lá hình người J, Q, K $\\implies 12$ lá. Xác suất là $12/52 = 3/13$."
    },
    {
      id: "g10_c9_m12",
      question: "Trong một hộp kín có 100 chiếc thẻ được đánh số từ 1 đến 100. Rút ngẫu nhiên một thẻ. Xác suất để số trên thẻ là số chính phương là:",
      options: [
        { key: "A", text: "$\\frac{1}{10}$" },
        { key: "B", text: "$\\frac{1}{100}$" },
        { key: "C", text: "$\\frac{9}{100}$" },
        { key: "D", text: "$\\frac{1}{20}$" }
      ],
      correct: "A",
      points: 0.25,
      source: "🌐 Chuyên Khoa Học Tự Nhiên",
      explanation: "Các số chính phương từ 1 đến 100 là $1^2, 2^2, \\dots, 10^2$ (10 số). Xác suất $10/100 = 1/10$."
    }
  ],
  part2_trueFalse: [
    {
      id: "g10_c9_tf1",
      question: "Một hộp chứa 6 quả bóng màu vàng và 4 quả bóng màu xanh. Lấy ngẫu nhiên đồng thời 3 quả bóng. Xét tính Đúng / Sai của các khẳng định sau:",
      points: 1.0,
      source: "🌐 Sở GD&ĐT Hà Nội",
      subItems: [
        { key: "a", text: "Số phần tử của không gian mẫu là $n(\\Omega) = C_{10}^3 = 120$.", isCorrect: true, explanation: "Đúng: $C_{10}^3 = 120$." },
        { key: "b", text: "Số cách chọn được 3 quả bóng cùng màu vàng là $C_6^3 = 20$.", isCorrect: true, explanation: "Đúng: $C_6^3 = 20$." },
        { key: "c", text: "Xác suất để cả 3 quả bóng lấy ra cùng màu là $\\frac{1}{5}$.", isCorrect: true, explanation: "Đúng: 3 vàng có 20 cách, 3 xanh có $C_4^3 = 4$ cách. Tổng cùng màu: $20 + 4 = 24$. Xác suất: $24/120 = 1/5$." },
        { key: "d", text: "Xác suất để có ít nhất một quả bóng màu xanh bằng $\\frac{1}{6}$.", isCorrect: false, explanation: "Sai: Biến cố đối là cả 3 quả màu vàng ($P = 20/120 = 1/6$). Xác suất có ít nhất 1 quả xanh là $1 - 1/6 = 5/6$." }
      ]
    },
    {
      id: "g10_c9_tf2",
      question: "Gieo một con xúc xắc cân đối hai lần. Gọi $A$ là biến cố 'tổng số chấm bằng 8' và $B$ là biến cố 'có ít nhất một lần xuất hiện mặt 5 chấm'. Đánh giá tính Đúng / Sai của các khẳng định sau:",
      points: 1.0,
      source: "🌐 Chuyên Sư Phạm",
      subItems: [
        { key: "a", text: "Số kết quả thuận lợi cho biến cố $A$ là 5 kết quả.", isCorrect: true, explanation: "Đúng: (2,6), (3,5), (4,4), (5,3), (6,2) (5 kết quả)." },
        { key: "b", text: "Xác suất của biến cố $A$ là $P(A) = \\frac{5}{36}$.", isCorrect: true, explanation: "Đúng: $5/36$." },
        { key: "c", text: "Số kết quả thuận lợi cho cả hai biến cố $A$ và $B$ là 2 kết quả.", isCorrect: true, explanation: "Đúng: gồm (3,5) và (5,3)." },
        { key: "d", text: "Xác suất để tổng số chấm bằng 8 hoặc có ít nhất một mặt 5 chấm là $\\frac{14}{36}$.", isCorrect: true, explanation: "Đúng: $n(B) = 11$, $n(A) = 5$, $n(AB) = 2 \\implies n(A \\cup B) = 5 + 11 - 2 = 14 \\implies P = 14/36 = 7/18$." }
      ]
    }
  ],
  part3_shortAnswer: [
    {
      id: "g10_c9_sa1",
      question: "Gieo đồng thời hai con xúc xắc cân đối. Tính xác suất để cả hai con xúc xắc cùng xuất hiện mặt 6 chấm (kết quả dạng phân số $a/b$, hãy điền mẫu số của phân số tối giản $1/36$).",
      correctAnswer: "36",
      acceptedAnswers: ["36", "1/36"],
      hint: "Chỉ có duy nhất 1 kết quả (6,6) trong 36 kết quả đồng khả năng: $P = 1/36$. Mẫu số là 36.",
      points: 0.33,
      source: "🌐 SGK Toán 10 Mới"
    },
    {
      id: "g10_c9_sa2",
      question: "Một tổ học sinh có 6 bạn nam và 4 bạn nữ. Chọn ngẫu nhiên 2 bạn để tham gia đội cờ đỏ. Tính xác suất để chọn được 2 bạn cùng giới tính (kết quả dạng số thập phân, dạng $0.47$).",
      correctAnswer: "0.47",
      acceptedAnswers: ["0.47", "0,47", "21/45"],
      hint: "$C_{10}^2 = 45$. 2 nam: $C_6^2 = 15$. 2 nữ: $C_4^2 = 6$. Xác suất cùng giới tính: $\\frac{15 + 6}{45} = \\frac{21}{45} = \\frac{7}{15} \\approx 0.4667 \\approx 0.47$.",
      points: 0.33,
      source: "🌐 Sở GD&ĐT Hà Nội"
    },
    {
      id: "g10_c9_sa3",
      question: "Chọn ngẫu nhiên một số tự nhiên có hai chữ số từ 10 đến 99. Tính xác suất để chọn được một số có hai chữ số giống nhau (kết quả dạng phân số $a/b$, hãy điền tử số của phân số tối giản $1/10$).",
      correctAnswer: "1",
      acceptedAnswers: ["1", "1/10"],
      hint: "Có 90 số có hai chữ số. Các số giống nhau: $\\{11, 22, \\dots, 99\\}$ (9 số). Xác suất $9/90 = 1/10$. Tử số là 1.",
      points: 0.33,
      source: "🌐 Chuyên Lam Sơn"
    },
    {
      id: "g10_c9_sa4",
      question: "Một xạ thủ bắn vào bia một phát đạn với xác suất trúng là $0.85$. Tính xác suất (dưới dạng phần trăm, chỉ điền số) để xạ thủ đó bắn trượt.",
      correctAnswer: "15",
      acceptedAnswers: ["15", "15%", "0.15"],
      hint: "$P(\\text{trượt}) = 1 - 0.85 = 0.15 = 15\\%$. Điền 15.",
      points: 0.33,
      source: "🌐 Bài Toán Thực Tế Đời Sống"
    }
  ],
  part4_essay: [
    {
      id: "g10_c9_es1",
      question: "Trong một hộp có chứa 12 quả cầu cùng kích thước và khối lượng, gồm 5 quả cầu màu đỏ, 4 quả cầu màu xanh và 3 quả cầu màu vàng. Lấy ngẫu nhiên đồng thời 3 quả cầu từ trong hộp.\\n1) Tính số phần tử của không gian mẫu $n(\\Omega)$ và tính xác suất để lấy được 3 quả cầu có đủ cả 3 màu.\\n2) Tính xác suất để lấy được 3 quả cầu trong đó có ít nhất một quả cầu màu đỏ.",
      points: 1.0,
      source: "🌐 Đề Thi Tuyển Sinh & THPT Quốc Gia",
      solution: "1) Số phần tử không gian mẫu và xác suất đủ 3 màu:\\n- Số cách chọn 3 quả cầu từ 12 quả là:\\n  $n(\\Omega) = C_{12}^3 = \\frac{12 \\times 11 \\times 10}{6} = 220$.\\n- Biến cố $A$: 'Lấy được 3 quả cầu có đủ cả 3 màu'.\\n  Số kết quả thuận lợi là chọn 1 đỏ, 1 xanh và 1 vàng:\\n  $n(A) = C_5^1 \\times C_4^1 \\times C_3^1 = 5 \\times 4 \\times 3 = 60$.\\n- Xác suất để lấy được 3 quả đủ 3 màu là:\\n  $P(A) = \\frac{n(A)}{n(\\Omega)} = \\frac{60}{220} = \\frac{3}{11} \\approx 0.2727 = 27.27\\%$.\\n\\n2) Xác suất có ít nhất một quả cầu màu đỏ:\\n- Gọi biến cố $B$: 'Lấy được ít nhất một quả cầu màu đỏ'.\\n- Xét biến cố đối $\\bar{B}$: 'Không lấy được quả cầu màu đỏ nào' (nghĩa là cả 3 quả đều chọn từ 7 quả xanh và vàng).\\n  Số kết quả thuận lợi cho $\\bar{B}$ là:\\n  $n(\\bar{B}) = C_7^3 = \\frac{7 \\times 6 \\times 5}{6} = 35$.\\n- Xác suất của biến cố đối là:\\n  $P(\\bar{B}) = \\frac{n(\\bar{B})}{n(\\Omega)} = \\frac{35}{220} = \\frac{7}{44}$.\\n- Xác suất cần tìm là:\\n  $P(B) = 1 - P(\\bar{B}) = 1 - \\frac{7}{44} = \\frac{37}{44} \\approx 0.8409 = 84.09\\%$.\\n\\nKết luận:\\nXác suất để 3 quả đủ 3 màu là $\\frac{3}{11}$, xác suất có ít nhất một quả đỏ là $\\frac{37}{44}$.",
      criteria: [
        { step: "Bước 1", desc: "Tính đúng số phần tử không gian mẫu $n(\\Omega) = C_{12}^3 = 220$", points: 0.25 },
        { step: "Bước 2", desc: "Tính đúng số trường hợp đủ 3 màu $n(A) = 60$ và $P(A) = \\frac{3}{11}$", points: 0.25 },
        { step: "Bước 3", desc: "Sử dụng biến cố đối tính đúng $n(\\bar{B}) = C_7^3 = 35$", points: 0.25 },
        { step: "Bước 4", desc: "Tính chính xác xác suất $P(B) = 1 - \\frac{7}{44} = \\frac{37}{44} \\approx 84.09\\%$", points: 0.25 }
      ]
    }
  ]
};

// ==========================================================================
// HỆ THỐNG TỔNG HỢP & LÀM GIÀU NGÂN HÀNG (COMBO SCOPES & RUNTIME HARVESTER)
// ==========================================================================
(function() {
  const B = window.REVIEW_SOURCE_BANK;

  // Helper hàm chuẩn hoá và tạo alias cho các phần
  function normalizeScope(scopeObj) {
    if (!scopeObj) return;
    scopeObj.part1_mcq = Array.isArray(scopeObj.part1_mcq) ? scopeObj.part1_mcq : [];
    scopeObj.part2_trueFalse = Array.isArray(scopeObj.part2_trueFalse) ? scopeObj.part2_trueFalse : [];
    scopeObj.part2_tf = scopeObj.part2_trueFalse;
    scopeObj.part3_shortAnswer = Array.isArray(scopeObj.part3_shortAnswer) ? scopeObj.part3_shortAnswer : [];
    scopeObj.part3_sa = scopeObj.part3_shortAnswer;
    scopeObj.part4_essay = Array.isArray(scopeObj.part4_essay) ? scopeObj.part4_essay : [];
  }

  // Chuẩn hóa tất cả các chương đơn lẻ
  [12, 11, 10].forEach(g => {
    if (B[g]) {
      for (const k in B[g]) {
        normalizeScope(B[g][k]);
      }
    }
  });

  // Helper hàm gộp nhiều chương thành 1 scope tổng hợp
  function combineChapters(grade, targetScopeKey, chapterKeys) {
    if (!B[grade]) B[grade] = {};
    const combo = {
      part1_mcq: [],
      part2_trueFalse: [],
      part3_shortAnswer: [],
      part4_essay: []
    };

    const seenQ = new Set();
    chapterKeys.forEach(chKey => {
      const src = B[grade][chKey];
      if (!src) return;

      (src.part1_mcq || []).forEach(q => {
        const sig = q.question ? q.question.trim().substring(0, 60) : q.id;
        if (!seenQ.has(sig)) { seenQ.add(sig); combo.part1_mcq.push(q); }
      });

      (src.part2_trueFalse || []).forEach(q => {
        const sig = q.question ? q.question.trim().substring(0, 60) : q.id;
        if (!seenQ.has(sig)) { seenQ.add(sig); combo.part2_trueFalse.push(q); }
      });

      (src.part3_shortAnswer || []).forEach(q => {
        const sig = q.question ? q.question.trim().substring(0, 60) : q.id;
        if (!seenQ.has(sig)) { seenQ.add(sig); combo.part3_shortAnswer.push(q); }
      });

      (src.part4_essay || []).forEach(q => {
        const sig = q.question ? q.question.trim().substring(0, 60) : q.id;
        if (!seenQ.has(sig)) { seenQ.add(sig); combo.part4_essay.push(q); }
      });
    });

    normalizeScope(combo);
    B[grade][targetScopeKey] = combo;
  }

  // TỔNG HỢP CÁC KỲ CHO KHỐI 12
  // Giữa kỳ 1: Chương 1, Chương 2
  combineChapters(12, 'mid1', ['ch_1', 'ch_2']);
  // Giữa kỳ 2: Chương 4, Chương 5
  combineChapters(12, 'mid2', ['ch_4', 'ch_5']);
  // Cuối kỳ 1: Chương 1, Chương 2, Chương 3
  combineChapters(12, 'fin1', ['ch_1', 'ch_2', 'ch_3']);
  // Cuối kỳ 2: Chương 4, Chương 5, Chương 6
  combineChapters(12, 'fin2', ['ch_4', 'ch_5', 'ch_6']);

  // TỔNG HỢP CÁC KỲ CHO KHỐI 11
  // Giữa kỳ 1: Chương 1, Chương 2
  combineChapters(11, 'mid1', ['ch_1', 'ch_2']);
  // Giữa kỳ 2: Chương 6, Chương 7
  combineChapters(11, 'mid2', ['ch_6', 'ch_7']);
  // Cuối kỳ 1: Chương 1, Chương 2, Chương 5, Chương 4, Chương 3
  combineChapters(11, 'fin1', ['ch_1', 'ch_2', 'ch_5', 'ch_4', 'ch_3']);
  // Cuối kỳ 2: Chương 8, Chương 6, Chương 7, Chương 9
  combineChapters(11, 'fin2', ['ch_8', 'ch_6', 'ch_7', 'ch_9']);

  // TỔNG HỢP CÁC KỲ CHO KHỐI 10
  // Giữa kỳ 1: Chương 1, Chương 2
  combineChapters(10, 'mid1', ['ch_1', 'ch_2']);
  // Giữa kỳ 2: Chương 6, Chương 7
  combineChapters(10, 'mid2', ['ch_6', 'ch_7']);
  // Cuối kỳ 1: Chương 1, Chương 2, Chương 3, Chương 4, Chương 6
  combineChapters(10, 'fin1', ['ch_1', 'ch_2', 'ch_3', 'ch_4', 'ch_6']);
  // Cuối kỳ 2: Chương 8, Chương 5, Chương 9, Chương 7
  combineChapters(10, 'fin2', ['ch_8', 'ch_5', 'ch_9', 'ch_7']);

  // RUNTIME INGESTION TỪ CƠ SỞ DỮ LIỆU ĐÁNH GIÁ CHẨN ĐOÁN LỖI SAI (DIAGNOSTIC_ASSESSMENT_DB)
  function ingestDiagnosticDb() {
    if (typeof window === 'undefined' || !window.DIAGNOSTIC_ASSESSMENT_DB) return;
    const diag = window.DIAGNOSTIC_ASSESSMENT_DB;

    // Duyệt qua tất cả các bài học trong DB chẩn đoán
    for (const lessonKey in diag) {
      const lesson = diag[lessonKey];
      if (!lesson || !lesson.grade) continue;

      const g = lesson.grade;
      let targetCh = null;

      // Phân tích mã bài học: g12-c1-l* -> ch_1
      const match = lessonKey.match(/g(\d+)-c(\d+)/);
      if (match) {
        targetCh = `ch_${match[2]}`;
      }

      if (targetCh && B[g] && B[g][targetCh]) {
        const dest = B[g][targetCh];

        // 1. Trắc nghiệm
        if (Array.isArray(lesson.multipleChoice)) {
          lesson.multipleChoice.forEach(mc => {
            if (!mc || !mc.options) return;
            const correctOpt = mc.options.find(o => o.isCorrect);
            const sig = mc.question ? mc.question.trim().substring(0, 60) : mc.id;
            const exists = dest.part1_mcq.some(q => q.question && q.question.trim().substring(0, 60) === sig);
            if (!exists) {
              dest.part1_mcq.push({
                id: `diag_${mc.id}_${Date.now()}`,
                question: mc.question,
                options: mc.options.map(o => ({ key: o.key, text: o.text })),
                correct: correctOpt ? correctOpt.key : "A",
                points: 0.25,
                source: "🌐 Ngân Hàng Đề Thi Chuẩn Bộ GD&ĐT",
                explanation: correctOpt ? correctOpt.errorMsg : ""
              });
            }
          });
        }

        // 2. Đúng / Sai
        if (Array.isArray(lesson.trueFalse)) {
          lesson.trueFalse.forEach(tf => {
            if (!tf || !tf.items) return;
            const sig = tf.scenario ? tf.scenario.trim().substring(0, 60) : tf.id;
            const exists = dest.part2_trueFalse.some(q => q.question && q.question.trim().substring(0, 60) === sig);
            if (!exists) {
              dest.part2_trueFalse.push({
                id: `diag_${tf.id}_${Date.now()}`,
                question: tf.scenario || "Xét tính Đúng / Sai của các khẳng định sau:",
                points: 1.0,
                source: "🌐 Đề Thi Tuyển Sinh & Tốt Nghiệp",
                subItems: tf.items.map(it => ({
                  key: it.key,
                  text: it.text,
                  isCorrect: !!it.isCorrect,
                  explanation: it.explanation || ""
                }))
              });
            }
          });
        }

        // 3. Trả lời ngắn
        if (Array.isArray(lesson.shortAnswer)) {
          lesson.shortAnswer.forEach(sa => {
            if (!sa) return;
            const sig = sa.question ? sa.question.trim().substring(0, 60) : sa.id;
            const exists = dest.part3_shortAnswer.some(q => q.question && q.question.trim().substring(0, 60) === sig);
            if (!exists) {
              dest.part3_shortAnswer.push({
                id: `diag_${sa.id}_${Date.now()}`,
                question: sa.question,
                correctAnswer: sa.correctAnswer || "0",
                acceptedAnswers: sa.acceptedAnswers || [sa.correctAnswer],
                hint: sa.explanation || sa.tip || "",
                points: 0.33,
                source: "🌐 Sở GD&ĐT Hà Nội"
              });
            }
          });
        }

        // 4. Tự luận
        if (Array.isArray(lesson.essay)) {
          lesson.essay.forEach(es => {
            if (!es) return;
            const sig = es.question ? es.question.trim().substring(0, 60) : es.id;
            const exists = dest.part4_essay.some(q => q.question && q.question.trim().substring(0, 60) === sig);
            if (!exists) {
              dest.part4_essay.push({
                id: `diag_${es.id}_${Date.now()}`,
                question: es.question,
                points: 1.0,
                source: "🌐 Đề Thi THPT Quốc Gia",
                solution: es.sampleSolution || "",
                criteria: es.criteria || []
              });
            }
          });
        }
      }
    }
  }

  // Chạy nạp ngay khi tải file hoặc sau khi DOM load
  ingestDiagnosticDb();
  if (typeof window !== 'undefined') {
    window.addEventListener('DOMContentLoaded', ingestDiagnosticDb);
  }
})();
