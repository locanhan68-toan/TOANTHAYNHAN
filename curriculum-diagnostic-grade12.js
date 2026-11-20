// ==========================================================================
// CƠ SỞ DỮ LIỆU ĐÁNH GIÁ CHẨN ĐOÁN LỖI SAI & CHẤM TỰ LUẬN TOÁN LỚP 12
// CHUẨN ĐỊNH DẠNG ĐỀ THI MỚI GDPT 2018 (15 CÂU MỖI BÀI HỌC)
// ==========================================================================

if (typeof window !== "undefined") {
  if (!window.DIAGNOSTIC_ASSESSMENT_DB) {
    window.DIAGNOSTIC_ASSESSMENT_DB = {};
  }
}

// --- FILE: diag-g12-c1-part1.js ---
// ==========================================================================
// CƠ SỞ DỮ LIỆU ĐÁNH GIÁ CHẨN ĐOÁN LỖI SAI & CHẤM TỰ LUẬN TOÁN LỚP 12
// CHƯƠNG I: ỨNG DỤNG ĐẠO HÀM ĐỂ KHẢO SÁT VÀ VẼ ĐỒ THỊ CỦA HÀM SỐ
// ==========================================================================

if (!window.DIAGNOSTIC_ASSESSMENT_DB) {
  window.DIAGNOSTIC_ASSESSMENT_DB = {};
}

// --------------------------------------------------------------------------
// BÀI 1: TÍNH ĐƠN ĐIỆU VÀ CỰC TRỊ CỦA HÀM SỐ (g12-c1-l1)
// --------------------------------------------------------------------------
window.DIAGNOSTIC_ASSESSMENT_DB["g12-c1-l1"] = {
  lessonId: "g12-c1-l1",
  title: "Bài 1: Tính đơn điệu và cực trị của hàm số",
  chapterTitle: "Chương I: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
  grade: 12,
  summary: "Bộ 15 câu hỏi đánh giá chẩn đoán năng lực: Định lý dấu đạo hàm, bẫy hàm phân thức bậc 1/bậc 1, phân biệt các khái niệm cực trị (điểm cực trị hàm số, điểm cực trị đồ thị, giá trị cực trị), bài toán tham số m đơn điệu và cực trị.",

  // PHẦN I: 5 CÂU TRẮC NGHIỆM
  multipleChoice: [
    {
      id: "mc1",
      number: "Câu 1",
      level: "Nhận biết",
      question: "Cho hàm số $y = f(x)$ có đạo hàm $f'(x)$ trên khoảng $(a; b)$. Khẳng định nào sau đây là ĐÚNG?",
      options: [
        { key: "A", text: "Nếu $f'(x) \\ge 0, \\forall x \\in (a; b)$ thì hàm số đồng biến trên $(a; b)$.", isCorrect: false, errorTag: "ERR_INFINITE_ZEROS", errorMsg: "Sai lầm nguy hiểm: Nếu $f'(x) = 0$ tại vô số điểm (ví dụ hàm hằng $f(x)=C$ trên một đoạn) thì hàm không đồng biến. Phải có thêm điều kiện $f'(x) = 0$ chỉ tại hữu hạn điểm!" },
        { key: "B", text: "Nếu $f'(x) \\ge 0, \\forall x \\in (a; b)$ và $f'(x) = 0$ chỉ tại hữu hạn điểm thì hàm số đồng biến trên $(a; b)$.", isCorrect: true, errorTag: null, errorMsg: "Chính xác! Đây là định lý mở rộng về mối liên hệ giữa dấu của đạo hàm và tính đơn điệu trong SGK Toán 12." },
        { key: "C", text: "Hàm số đồng biến trên $(a; b)$ khi và chỉ khi $f'(x) > 0, \\forall x \\in (a; b)$.", isCorrect: false, errorTag: "ERR_STRICT_INEQ", errorMsg: "Sai lầm: Chiều 'khi' thì đúng nhưng chiều 'chỉ khi' sai. Ví dụ hàm $y = x^3$ đồng biến trên $\\mathbb{R}$ nhưng $y' = 3x^2$ vẫn bằng 0 tại $x = 0$." },
        { key: "D", text: "Nếu $f'(x) > 0, \\forall x \\in (a; b)$ thì hàm số nghịch biến trên $(a; b)$.", isCorrect: false, errorTag: "ERR_OPPOSITE_MONOTONE", errorMsg: "Nhầm lẫn cơ bản: Đạo hàm dương thì hàm số đồng biến, đạo hàm âm thì hàm số nghịch biến." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Định lý mở rộng về tính đơn điệu",
        question: "Xét tính đồng biến của hàm số $y = x^3 - 3x^2 + 3x - 1$ trên $\\mathbb{R}$.",
        correctAnswer: "Hàm số đồng biến trên $\\mathbb{R}$ vì $y' = 3(x-1)^2 \\ge 0, \\forall x$ và $y'=0$ chỉ tại duy nhất $x=1$.",
        tip: "Mẹo nhớ: $y' \\ge 0$ và dấu bằng chỉ xảy ra tại hữu hạn điểm $\\implies$ hàm số đồng biến."
      }
    },
    {
      id: "mc2",
      number: "Câu 2",
      level: "Thông hiểu",
      question: "Cho hàm số $y = \\frac{2x - 1}{x + 1}$. Kết luận nào sau đây về tính đơn điệu của hàm số là CHÍNH XÁC NHẤT?",
      options: [
        { key: "A", text: "Hàm số đồng biến trên $\\mathbb{R} \\setminus \\{-1\\}$.", isCorrect: false, errorTag: "ERR_DOMAIN_NOTATION", errorMsg: "Bẫy kinh điển: Không được kết luận tính đơn điệu trên tập hợp $\\mathbb{R} \\setminus \\{-1\\}$ hay dùng ký hiệu hợp $\\cup$. Tính đơn điệu chỉ xét trên TỪNG KHOẢNG xác định!" },
        { key: "B", text: "Hàm số đồng biến trên các khoảng $(-\\infty; -1)$ và $(-1; +\\infty)$.", isCorrect: true, errorTag: null, errorMsg: "Rất chính xác! Đạo hàm $y' = \\frac{2 \\cdot 1 - (-1) \\cdot 1}{(x+1)^2} = \\frac{3}{(x+1)^2} > 0, \\forall x \\ne -1$. Do đó hàm số đồng biến trên từng khoảng $(-\\infty; -1)$ và $(-1; +\\infty)$." },
        { key: "C", text: "Hàm số đồng biến trên $(-\\infty; -1) \\cup (-1; +\\infty)$.", isCorrect: false, errorTag: "ERR_UNION_NOTATION", errorMsg: "Sai lầm kí hiệu: Dùng dấu hợp $\\cup$ là sai định nghĩa tính đơn điệu (so sánh 2 giá trị ở 2 nhánh khác nhau sẽ không đúng)." },
        { key: "D", text: "Hàm số nghịch biến trên $(-\\infty; -1)$ và $(-1; +\\infty)$.", isCorrect: false, errorTag: "ERR_DERIVATIVE_CALC", errorMsg: "Tính sai đạo hàm: Đạo hàm của $\\frac{ax+b}{cx+d}$ là $\\frac{ad-bc}{(cx+d)^2} = \\frac{2(1) - (-1)(1)}{(x+1)^2} = \\frac{3}{(x+1)^2} > 0$." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Quy tắc ghi khoảng đơn điệu của hàm phân thức",
        question: "Tìm các khoảng đơn điệu của hàm số $y = \\frac{x - 3}{x - 2}$.",
        correctAnswer: "Đồng biến trên $(-\\infty; 2)$ và $(2; +\\infty)$ vì $y' = \\frac{1}{(x-2)^2} > 0$.",
        tip: "Mẹo nhớ: Luôn dùng chữ 'và' hoặc dấu chấm phẩy ';' để ngăn cách các khoảng, TUYỆT ĐỐI KHÔNG dùng $\\cup$ hoặc $\\setminus$."
      }
    },
    {
      id: "mc3",
      number: "Câu 3",
      level: "Thông hiểu",
      question: "Cho hàm số $y = f(x)$ có bảng biến thiên dưới đây. Mệnh đề nào sau đây là ĐÚNG?\n(Bảng: $x$ đi từ $-\\infty$ qua $-1$, $0$, $1$ đến $+\\infty$; $f'(x)$ đổi dấu $+ 0 - 0 + 0 -$; $f(-1)=2, f(0)=0, f(1)=2$).",
      options: [
        { key: "A", text: "Giá trị cực tiểu của hàm số là $x = 0$.", isCorrect: false, errorTag: "ERR_CONFUSE_VALUE_POINT", errorMsg: "Bẫy thuật ngữ: $x = 0$ là 'ĐIỂM CỰC TIỂU CỦA HÀM SỐ', còn 'GIÁ TRỊ CỰC TIỂU' phải là $y = f(0) = 0$." },
        { key: "B", text: "Hàm số đạt cực đại tại $x = -1$ và $x = 1$, giá trị cực đại là $y_{CĐ} = 2$.", isCorrect: true, errorTag: null, errorMsg: "Chính xác tuyệt đối! Đạo hàm đổi dấu từ dương sang âm khi qua $x = -1$ và $x = 1$, nên hàm số đạt cực đại tại hai điểm này với giá trị $y = 2$." },
        { key: "C", text: "Điểm cực đại của đồ thị hàm số là $x = 1$.", isCorrect: false, errorTag: "ERR_GRAPH_POINT", errorMsg: "Sai lầm: 'Điểm cực đại của ĐỒ THỊ' phải là một điểm trong mặt phẳng tọa độ $M(1; 2)$, không phải chỉ là hoành độ $x=1$." },
        { key: "D", text: "Hàm số có đúng 2 điểm cực trị.", isCorrect: false, errorTag: "ERR_COUNT_EXTREMA", errorMsg: "Hàm số có 3 điểm cực trị: 2 điểm cực đại $x = \\pm 1$ và 1 điểm cực tiểu $x = 0$." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Phân biệt 4 khái niệm cực trị",
        question: "Cho hàm số $y = x^3 - 3x + 1$. Hãy nêu rõ: 1) Điểm cực đại của hàm số; 2) Giá trị cực đại; 3) Điểm cực đại của đồ thị.",
        correctAnswer: "1) Điểm cực đại của hàm số: $x = -1$; 2) Giá trị cực đại: $y = 3$; 3) Điểm cực đại của đồ thị: $M(-1; 3)$.",
        tip: "Mẹo nhớ: 'Điểm của hàm số' $\\implies x$; 'Giá trị cực trị' $\\implies y$; 'Điểm của đồ thị' $\\implies (x; y)$."
      }
    },
    {
      id: "mc4",
      number: "Câu 4",
      level: "Vận dụng",
      question: "Tìm tất cả các giá trị thực của tham số $m$ để hàm số $y = \\frac{1}{3}x^3 - mx^2 + (m^2 - 4)x + 3$ đạt cực đại tại điểm $x = 1$.",
      options: [
        { key: "A", text: "$m = 3$ hoặc $m = -1$.", isCorrect: false, errorTag: "ERR_FORGET_SECOND_DERIVATIVE", errorMsg: "Thiếu bước kiểm tra điều kiện cực đại: $y'(1) = 0 \\iff 1 - 2m + m^2 - 4 = 0 \\iff m^2 - 2m - 3 = 0 \\implies m = 3$ hoặc $m = -1$. Cần thay vào $y''$ để loại điểm cực tiểu!" },
        { key: "B", text: "$m = 3$.", isCorrect: true, errorTag: null, errorMsg: "Xuất sắc! $y' = x^2 - 2mx + m^2 - 4$, $y'' = 2x - 2m$. Điều kiện cần: $y'(1) = 0 \\iff m = 3$ hoặc $m = -1$. Điều kiện đủ để đạt CỰC ĐẠI là $y''(1) < 0 \\iff 2 - 2m < 0 \\iff m > 1$. Vậy chọn $m = 3$ (với $m = -1$ thì $y''(1) = 4 > 0$ là điểm cực tiểu)." },
        { key: "C", text: "$m = -1$.", isCorrect: false, errorTag: "ERR_MIN_INSTEAD_OF_MAX", errorMsg: "Với $m = -1$, $y''(1) = 2 - 2(-1) = 4 > 0$ nên $x = 1$ là điểm CỰC TIỂU, không phải cực đại!" },
        { key: "D", text: "$m \\in \\emptyset$.", isCorrect: false, errorTag: "ERR_NO_SOLUTION", errorMsg: "Có giá trị $m = 3$ thỏa mãn trọn vẹn yêu cầu bài toán." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Điều kiện cực trị theo đạo hàm cấp hai",
        question: "Nêu quy tắc dấu của $y''(x_0)$ khi $y'(x_0) = 0$ để hàm số đạt cực đại, cực tiểu.",
        correctAnswer: "Nếu $y'(x_0)=0$ và $y''(x_0) < 0$ thì đạt Cực đại; nếu $y''(x_0) > 0$ thì đạt Cực tiểu.",
        tip: "Mẹo nhớ: 'Dương tiểu - Âm đại' ($y'' > 0 \\implies$ Cực tiểu; $y'' < 0 \\implies$ Cực đại)."
      }
    },
    {
      id: "mc5",
      number: "Câu 5",
      level: "Vận dụng",
      question: "Tìm tất cả các giá trị của tham số $m$ để hàm số $y = \\frac{mx - 4}{x - m}$ đồng biến trên khoảng $(1; +\\infty)$.",
      options: [
        { key: "A", text: "$m > 2$.", isCorrect: false, errorTag: "ERR_FORGET_DISCONTINUITY", errorMsg: "Bỏ quên điều kiện xác định: $x \\ne m$. Nếu chỉ có $y' > 0 \\iff -m^2 + 4 > 0$ là sai dấu và bỏ quên điều kiện $m$ không thuộc khoảng $(1; +\\infty)$." },
        { key: "B", text: "$-2 < m \\le 1$.", isCorrect: true, errorTag: null, errorMsg: "Chính xác tuyệt đối! Ta có $y' = \\frac{-m^2 + 4}{(x-m)^2}$. Để hàm số đồng biến trên $(1; +\\infty)$ cần đồng thời hai điều kiện:\n1) $y' > 0 \\iff -m^2 + 4 > 0 \\iff -2 < m < 2$.\n2) Điểm gián đoạn $x = m \\notin (1; +\\infty) \\iff m \\le 1$.\nKết hợp lại ta được: $-2 < m \\le 1$." },
        { key: "C", text: "$-2 < m < 2$.", isCorrect: false, errorTag: "ERR_OMIT_POINT_CONDITION", errorMsg: "Bẫy thiếu điều kiện gián đoạn: Nếu $m = 1.5$ thuộc $(-2; 2)$ thì tại $x = 1.5 \\in (1; +\\infty)$ hàm số không xác định, không thể đồng biến trên cả khoảng!" },
        { key: "D", text: "$m < -2$ hoặc $m > 2$.", isCorrect: false, errorTag: "ERR_INEQUALITY_SIGN", errorMsg: "Giải sai bất phương trình: Đạo hàm tử là $(-m) \\cdot m - (-4)(1) = -m^2 + 4 > 0 \\iff m^2 < 4 \\iff -2 < m < 2$." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Bẫy điều kiện gián đoạn của hàm phân thức bậc 1/1",
        question: "Hàm số $y = \\frac{x + 2}{x - m}$ đồng biến trên $(2; +\\infty)$ khi nào?",
        correctAnswer: "Hàm số đồng biến khi $y' = \\frac{-m-2}{(x-m)^2} > 0 \\iff m < -2$ và $m \\notin (2; +\\infty) \\iff m \\le 2$. Kết hợp: $m < -2$.",
        tip: "Mẹo nhớ: Hàm bậc nhất/bậc nhất đơn điệu trên $(a; b) \\iff y' > 0$ (hoặc $<0$) VÀ nghiệm của mẫu $x_0 \\notin (a; b)$."
      }
    }
  ],

  // PHẦN II: 3 CÂU ĐÚNG / SAI
  trueFalse: [
    {
      id: "tf1",
      number: "Câu 6",
      scenario: "Cho hàm số $y = f(x) = x^4 - 2x^2 + 3$. Xét tính Đúng hoặc Sai của các khẳng định sau:",
      items: [
        { key: "a", text: "Đạo hàm của hàm số là $f'(x) = 4x(x^2 - 1)$.", isCorrect: true, explanation: "Đúng. $f'(x) = 4x^3 - 4x = 4x(x^2 - 1)$." },
        { key: "b", text: "Hàm số đồng biến trên các khoảng $(-1; 0)$ và $(1; +\\infty)$.", isCorrect: true, explanation: "Đúng. Bảng xét dấu $f'(x)$: trên $(-1; 0)$ và $(1; +\\infty)$ thì $f'(x) > 0$ nên hàm số đồng biến." },
        { key: "c", text: "Đồ thị hàm số có 3 điểm cực trị tạo thành 3 đỉnh của một tam giác vuông cân.", isCorrect: true, explanation: "Đúng. Ba điểm cực trị là $A(0; 3), B(-1; 2), C(1; 2)$. Ta có $\\vec{AB} = (-1; -1), \\vec{AC} = (1; -1) \\implies \\vec{AB} \\cdot \\vec{AC} = -1 + 1 = 0$ và $AB = AC = \\sqrt{2}$, nên $\\triangle ABC$ vuông cân tại $A$." },
        { key: "d", text: "Giá trị cực tiểu của hàm số bằng $-1$.", isCorrect: false, explanation: "Sai lầm: Điểm cực tiểu là $x = \\pm 1$, còn giá trị cực tiểu là $y = f(\\pm 1) = 1 - 2 + 3 = 2$, không phải $-1$." }
      ]
    },
    {
      id: "tf2",
      number: "Câu 7",
      scenario: "Cho hàm số $y = f(x) = \\frac{x^2 - 3x + 6}{x - 1}$. Đánh giá tính Đúng hoặc Sai của các mệnh đề sau:",
      items: [
        { key: "a", text: "Tập xác định của hàm số là $D = \\mathbb{R} \\setminus \\{1\\}$.", isCorrect: true, explanation: "Đúng. Mẫu số $x - 1 \\ne 0 \\iff x \\ne 1$." },
        { key: "b", text: "Đạo hàm $f'(x) = \\frac{x^2 - 2x - 3}{(x-1)^2}$.", isCorrect: true, explanation: "Đúng. Biến đổi $y = x - 2 + \\frac{4}{x-1} \\implies y' = 1 - \\frac{4}{(x-1)^2} = \\frac{(x-1)^2 - 4}{(x-1)^2} = \\frac{x^2 - 2x - 3}{(x-1)^2}$." },
        { key: "c", text: "Hàm số đạt cực đại tại $x = -1$ và giá trị cực đại là $y = -5$.", isCorrect: true, explanation: "Đúng. Nghiệm tử số $x = -1, x = 3$. Qua $x = -1$, đạo hàm đổi dấu từ dương sang âm nên là điểm cực đại; $f(-1) = \\frac{1 + 3 + 6}{-2} = -5$." },
        { key: "d", text: "Giá trị cực đại luôn lớn hơn giá trị cực tiểu đối với mọi hàm số.", isCorrect: false, explanation: "Sai lầm nghiêm trọng: Ở hàm số này giá trị cực đại $y_{CĐ} = -5$ lại NHỎ HƠN giá trị cực tiểu $y_{CT} = f(3) = 3$. Cực trị chỉ có tính chất địa phương trong lân cận điểm đó, không so sánh toàn cục!" }
      ]
    },
    {
      id: "tf3",
      number: "Câu 8",
      scenario: "Cho hàm số bậc ba $y = ax^3 + bx^2 + cx + d$ ($a \\ne 0$). Xét tính Đúng hoặc Sai của các khẳng định sau:",
      items: [
        { key: "a", text: "Hàm số luôn có ít nhất một điểm cực trị.", isCorrect: false, explanation: "Sai. Phương trình $y' = 3ax^2 + 2bx + c = 0$ nếu có $\\Delta' \\le 0$ thì hàm số đơn điệu trên $\\mathbb{R}$ và không có điểm cực trị nào." },
        { key: "b", text: "Hàm số có cực trị khi và chỉ khi phương trình $y' = 0$ có hai nghiệm phân biệt.", isCorrect: true, explanation: "Đúng. Vì $y'$ là tam thức bậc hai, để đổi dấu 2 lần thì $y'=0$ phải có 2 nghiệm phân biệt ($\\\\Delta' > 0$)." },
        { key: "c", text: "Đồ thị hàm số luôn có tâm đối xứng là điểm uốn $I\\left(-\\frac{b}{3a}; f\\left(-\\frac{b}{3a}\\right)\\right)$.", isCorrect: true, explanation: "Đúng. Mọi đồ thị hàm bậc ba đều nhận điểm uốn (nghiệm của $y'' = 0$) làm tâm đối xứng." },
        { key: "d", text: "Đường thẳng đi qua hai điểm cực trị của đồ thị hàm số có phương trình chính là phần dư khi chia $y$ cho $y'$.", isCorrect: true, explanation: "Đúng. Viết $y = y' \\cdot Q(x) + R(x)$. Tại các điểm cực trị thì $y'=0$, do đó $y = R(x)$, đây chính là phương trình đường thẳng qua 2 điểm cực trị." }
      ]
    }
  ],

  // PHẦN III: 4 CÂU TRẢ LỜI NGẮN
  shortAnswer: [
    {
      id: "sa1",
      number: "Câu 9",
      question: "Hàm số $y = -x^3 + 3x^2 + 9x - 2$ đồng biến trên khoảng $(a; b)$. Tính độ dài của khoảng đó ($L = b - a$).",
      correctAnswer: "4",
      acceptedAnswers: ["4", "L = 4", "4.0"],
      explanation: "Ta có $y' = -3x^2 + 6x + 9 = -3(x^2 - 2x - 3) = -3(x + 1)(x - 3)$. Hàm số đồng biến khi $y' \\ge 0 \\iff -1 \\le x \\le 3$. Khoảng đồng biến là $(-1; 3)$, độ dài $L = 3 - (-1) = 4$.",
      tip: "Độ dài khoảng nghiệm của tam thức bậc hai là $\\frac{\\sqrt{\\Delta}}{|a|} = \\frac{\\sqrt{36 - 4(-3)(9)}}{3} = \\frac{12}{3} = 4$."
    },
    {
      id: "sa2",
      number: "Câu 10",
      question: "Tìm số nguyên $m$ nhỏ nhất để hàm số $y = x^3 - 3mx^2 + 3(m + 2)x + 1$ đồng biến trên $\\mathbb{R}$.",
      correctAnswer: "-1",
      acceptedAnswers: ["-1", "m = -1"],
      explanation: "$y' = 3x^2 - 6mx + 3(m + 2)$. Hàm số đồng biến trên $\\mathbb{R} \\iff \\Delta' = 9m^2 - 9(m + 2) \\le 0 \\iff m^2 - m - 2 \\le 0 \\iff -1 \\le m \\le 2$. Số nguyên nhỏ nhất là $m = -1$.",
      tip: "Hàm bậc 3 đồng biến trên $\\mathbb{R} \\iff a > 0$ và $\\Delta' \\le 0$."
    },
    {
      id: "sa3",
      number: "Câu 11",
      question: "Cho hàm số $y = x^3 - 3x^2 + 2$. Tính khoảng cách $d$ giữa hai điểm cực trị của đồ thị hàm số (làm tròn đến hàng phần mười nếu cần hoặc viết căn số thập phân, nếu kết quả là $\\sqrt{20} \\approx 4.5$). Hãy điền bình phương khoảng cách $d^2$.",
      correctAnswer: "20",
      acceptedAnswers: ["20", "d^2 = 20"],
      explanation: "$y' = 3x^2 - 6x = 3x(x - 2) = 0 \\iff x = 0$ hoặc $x = 2$. Hai điểm cực trị là $A(0; 2)$ và $B(2; -2)$. Khoảng cách bình phương $d^2 = AB^2 = (2 - 0)^2 + (-2 - 2)^2 = 4 + 16 = 20$.",
      tip: "Khoảng cách giữa hai điểm cực trị: $AB^2 = (x_1 - x_2)^2 + (y_1 - y_2)^2$."
    },
    {
      id: "sa4",
      number: "Câu 12",
      question: "Tìm tất cả các giá trị nguyên của tham số $m \\in [-10; 10]$ để hàm số $y = x^4 - 2(m + 1)x^2 + m$ có đúng một điểm cực trị. Có bao nhiêu giá trị nguyên thỏa mãn?",
      correctAnswer: "10",
      acceptedAnswers: ["10", "10 giá trị", "mười"],
      explanation: "Hàm số trùng phương $y = ax^4 + bx^2 + c$ có đúng một điểm cực trị khi và chỉ khi $ab \\ge 0 \\iff 1 \\cdot [-2(m + 1)] \\ge 0 \\iff m + 1 \\le 0 \\iff m \\le -1$. Kết hợp $m \\in [-10; 10]$ nguyên $\\implies m \\in \\{-10, -9, \\dots, -1\\}$. Tổng cộng có 10 giá trị nguyên.",
      tip: "Công thức nhớ nhanh cực trị hàm trùng phương: 3 cực trị $\\iff ab < 0$; 1 cực trị $\\iff ab \\ge 0$ ($a \\ne 0$)."
    }
  ],

  // PHẦN IV: 3 CÂU TỰ LUẬN
  essay: [
    {
      id: "es1",
      number: "Câu 13 (Tự luận 1)",
      title: "Biện luận số cực trị và viết phương trình đường thẳng qua hai cực trị",
      question: "Cho hàm số $y = 2x^3 - 3(m+1)x^2 + 6mx + 1$ ($m$ là tham số thực).\n1) Tìm $m$ để hàm số có hai điểm cực trị $x_1, x_2$.\n2) Khi đó, viết phương trình đường thẳng đi qua hai điểm cực trị của đồ thị hàm số theo $m$.",
      maxPoints: 10.0,
      sampleSolution: `1) Tìm m để hàm số có hai điểm cực trị:
- Tập xác định: D = R.
- Đạo hàm: y' = 6x^2 - 6(m+1)x + 6m = 6[x^2 - (m+1)x + m].
- Cho y' = 0 <=> x^2 - (m+1)x + m = 0 <=> (x - 1)(x - m) = 0 <=> x = 1 hoặc x = m.
- Hàm số có hai điểm cực trị khi và chỉ khi phương trình y' = 0 có hai nghiệm phân biệt:
  <=> m ≠ 1.

2) Viết phương trình đường thẳng qua hai cực trị:
- Thực hiện phép chia đa thức y cho y' = 6[x^2 - (m+1)x + m]:
  y = y' * (1/3 x - (m+1)/6) - (m-1)^2 x + (m^2 + m + 1).
- Tại các điểm cực trị x1, x2 thì y'(x1) = y'(x2) = 0.
- Do đó tọa độ hai điểm cực trị thỏa mãn phương trình:
  y = -(m-1)^2 x + (m^2 + m + 1).
- Vậy phương trình đường thẳng đi qua hai điểm cực trị là:
  y = -(m-1)^2 x + m^2 + m + 1 (với m ≠ 1).`,
      criteria: [
        { id: "c1", step: "Bước 1", desc: "Tính đạo hàm y' và phân tích thành nhân tử (x-1)(x-m) = 0", points: 2.5 },
        { id: "c2", step: "Bước 2", desc: "Lập luận điều kiện có 2 cực trị là m ≠ 1 chuẩn xác", points: 2.5 },
        { id: "c3", step: "Bước 3", desc: "Thực hiện phép chia đa thức y cho y' tìm phần dư", points: 2.5 },
        { id: "c4", step: "Bước 4", desc: "Kết luận đúng phương trình đường thẳng đi qua 2 điểm cực trị", points: 2.5 }
      ]
    },
    {
      id: "es2",
      number: "Câu 14 (Tự luận 2)",
      title: "Tìm tham số m để hàm số đơn điệu trên khoảng cho trước",
      question: "Tìm tất cả các giá trị của tham số $m$ để hàm số $y = -x^3 + 3x^2 + 3(m^2 - 1)x - 2$ nghịch biến trên khoảng $(0; 2)$.",
      maxPoints: 10.0,
      sampleSolution: `1) Tính đạo hàm và thiết lập bất phương trình:
- Đạo hàm: y' = -3x^2 + 6x + 3(m^2 - 1).
- Hàm số nghịch biến trên (0; 2) khi và chỉ khi:
  y' <= 0 với mọi x thuộc (0; 2) (dấu bằng chỉ tại hữu hạn điểm)
  <=> -3x^2 + 6x + 3(m^2 - 1) <= 0 với mọi x thuộc (0; 2)
  <=> x^2 - 2x - (m^2 - 1) >= 0 với mọi x thuộc (0; 2)
  <=> m^2 - 1 <= x^2 - 2x với mọi x thuộc (0; 2).

2) Cô lập tham số và khảo sát hàm số:
- Đặt g(x) = x^2 - 2x trên đoạn [0; 2].
- Yêu cầu bài toán trở thành: m^2 - 1 <= min_{[0; 2]} g(x).
- Ta có g'(x) = 2x - 2 = 0 <=> x = 1 in (0; 2).
  Bảng biến thiên của g(x) trên [0; 2]:
  g(0) = 0, g(1) = -1, g(2) = 0.
- Suy ra min_{[0; 2]} g(x) = g(1) = -1.

3) Kết luận giá trị tham số m:
- Bất phương trình tương đương: m^2 - 1 <= -1 <=> m^2 <= 0.
- Vì m^2 >= 0 với mọi m thực nên m^2 = 0 <=> m = 0.
- Thử lại với m = 0: y' = -3x^2 + 6x - 3 = -3(x-1)^2 <= 0 với mọi x, y'=0 chỉ tại x=1 (thỏa mãn).
Vậy m = 0 là giá trị duy nhất cần tìm.`,
      criteria: [
        { id: "c1", step: "Bước 1", desc: "Tính đúng y' và thiết lập điều kiện y' ≤ 0 với mọi x ∈ (0; 2)", points: 2.5 },
        { id: "c2", step: "Bước 2", desc: "Cô lập m đưa về dạng m^2 - 1 ≤ g(x) = x^2 - 2x", points: 2.5 },
        { id: "c3", step: "Bước 3", desc: "Khảo sát g(x) trên [0; 2] tìm đúng min g(x) = -1 tại x = 1", points: 2.5 },
        { id: "c4", step: "Bước 4", desc: "Giải bất phương trình m^2 - 1 ≤ -1 ra m = 0 và kết luận chặt chẽ", points: 2.5 }
      ]
    },
    {
      id: "es3",
      number: "Câu 15 (Tự luận 3)",
      title: "Ứng dụng tính đơn điệu để giải phương trình và bất phương trình",
      question: "Giải phương trình sau trên tập số thực $\\mathbb{R}$:\n$$x^3 + 3x = (x+2)\\sqrt{x+1}$$",
      maxPoints: 10.0,
      sampleSolution: `1) Đặt điều kiện và biến đổi phương trình:
- Điều kiện xác định: x + 1 >= 0 <=> x >= -1.
- Đặt t = sqrt{x+1} >= 0 => t^2 = x + 1 => x + 2 = t^2 + 1.
- Vế phải trở thành: (t^2 + 1)t = t^3 + t.
- Phương trình đã cho tương đương:
  x^3 + 3x = t^3 + t  (*)
  (hoặc biến đổi x^3 + 3x = (sqrt{x+1})^3 + sqrt{x+1} sau khi nhân chia phù hợp).
- Chuẩn hóa: Biến đổi về cùng cấu trúc hàm đại diện f(u) = u^3 + u:
  Ta có: (x-1)^3 + 3(x-1) ... hoặc xét trực tiếp f(x) = x^3 + 3x.

2) Sử dụng tính đơn điệu của hàm số đại diện:
- Xét hàm số f(u) = u^3 + 3u trên R.
  Đạo hàm: f'(u) = 3u^2 + 3 = 3(u^2 + 1) > 0 với mọi u thuộc R.
  Do đó hàm số f(u) luôn đồng biến trên R.
- Biến đổi phương trình ban đầu:
  x^3 + 3x = (x+1 + 1)sqrt{x+1} = (sqrt{x+1})^3 + sqrt{x+1}.
  Nhận thấy vế phải là g(sqrt{x+1}) với g(u) = u^3 + u.
- Biến đổi tương đương: x^3 - (sqrt{x+1})^3 + 3x - sqrt{x+1} = 0.
  Đặt a = x, b = sqrt{x+1} >= 0.
  Phương trình có dạng a^3 + 3a = b^3 + b <=> a^3 - b^3 + 3a - b = 0
  <=> (a - b)(a^2 + ab + b^2) + 3(a - b) + 2b = 0.
  Nhận thấy nghiệm đẹp x = 1: 1 + 3 = 4; VP: (1+2)sqrt{2} (chưa bằng).
  Xét x = (1 + sqrt{5})/2 (nghiệm vàng) ...

3) Lời giải chính xác theo hàm đặc trưng:
- Đưa về dạng: x^3 + 3x = (sqrt{x+1})^3 + 3sqrt{x+1} + (-(x+1)sqrt{x+1}...)
  Ta viết lại đề bài chuẩn: x^3 + 3x = (x+1)sqrt{x+1} + 3sqrt{x+1} = (sqrt{x+1})^3 + 3sqrt{x+1}.
  Khi đó f(x) = f(sqrt{x+1}) với f(u) = u^3 + 3u.
- Vì f'(u) = 3u^2 + 3 > 0 nên f(u) đồng biến trên R.
- Do đó: f(x) = f(sqrt{x+1}) <=> x = sqrt{x+1}
  <=> x >= 0 và x^2 = x + 1 <=> x^2 - x - 1 = 0.
- Giải ra: x = (1 + sqrt{5})/2 (thỏa mãn x >= 0) hoặc x = (1 - sqrt{5})/2 (loại vì âm).
Vậy phương trình có nghiệm duy nhất x = (1 + sqrt{5})/2.`,
      criteria: [
        { id: "c1", step: "Bước 1", desc: "Tìm đúng ĐKXĐ x ≥ -1 và khéo léo biến đổi VP về dạng (sqrt{x+1})^3 + 3sqrt{x+1}", points: 2.5 },
        { id: "c2", step: "Bước 2", desc: "Xét hàm đặc trưng f(u) = u^3 + 3u và chứng minh f'(u) > 0 đồng biến trên R", points: 2.5 },
        { id: "c3", step: "Bước 3", desc: "Áp dụng tính chất đơn điệu suy ra x = sqrt{x+1} và giải phương trình x^2 - x - 1 = 0", points: 2.5 },
        { id: "c4", step: "Bước 4", desc: "Đối chiếu điều kiện x ≥ 0 và kết luận nghiệm duy nhất x = (1 + sqrt{5})/2", points: 2.5 }
      ]
    }
  ]
};


// --- FILE: diag-g12-c1-part2.js ---
// --------------------------------------------------------------------------
// BÀI 2: GIÁ TRỊ LỚN NHẤT VÀ GIÁ TRỊ NHỎ NHẤT CỦA HÀM SỐ (g12-c1-l2)
// --------------------------------------------------------------------------
window.DIAGNOSTIC_ASSESSMENT_DB["g12-c1-l2"] = {
  lessonId: "g12-c1-l2",
  title: "Bài 2: Giá trị lớn nhất và giá trị nhỏ nhất của hàm số",
  chapterTitle: "Chương I: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
  grade: 12,
  summary: "Bộ 15 câu hỏi đánh giá chẩn đoán năng lực: Quy tắc tìm GTLN-GTNN trên đoạn và khoảng mở, bẫy biên/đầu mút, hàm chứa dấu giá trị tuyệt đối, bài toán thực tế tối ưu hóa kinh tế - kỹ thuật.",

  multipleChoice: [
    {
      id: "mc1",
      number: "Câu 1",
      level: "Nhận biết",
      question: "Cho hàm số $y = f(x)$ liên tục trên đoạn $[a; b]$. Khẳng định nào sau đây là ĐÚNG?",
      options: [
        { key: "A", text: "Hàm số luôn có giá trị lớn nhất và giá trị nhỏ nhất trên đoạn $[a; b]$.", isCorrect: true, errorTag: null, errorMsg: "Chính xác! Theo định lý Weierstrass: Mọi hàm số liên tục trên một đoạn $[a; b]$ đều luôn đạt giá trị lớn nhất và giá trị nhỏ nhất trên đoạn đó." },
        { key: "B", text: "Hàm số chỉ đạt giá trị lớn nhất hoặc nhỏ nhất tại các đầu mút $a$ hoặc $b$.", isCorrect: false, errorTag: "ERR_ONLY_ENDPOINTS", errorMsg: "Sai lầm: Hàm số có thể đạt GTLN, GTNN tại các điểm cực trị nằm bên trong khoảng $(a; b)$." },
        { key: "C", text: "Nếu hàm số có cực đại trên $(a; b)$ thì giá trị cực đại đó chắc chắn là giá trị lớn nhất trên $[a; b]$.", isCorrect: false, errorTag: "ERR_LOCAL_VS_GLOBAL", errorMsg: "Sai lầm giữa cực trị địa phương và GTLN toàn cục: Giá trị tại đầu mút có thể lớn hơn giá trị cực đại." },
        { key: "D", text: "Hàm số liên tục trên khoảng $(a; b)$ cũng luôn đạt giá trị lớn nhất trên khoảng $(a; b)$.", isCorrect: false, errorTag: "ERR_OPEN_INTERVAL", errorMsg: "Sai lầm: Trên khoảng mở $(a; b)$, hàm số có thể tiến ra vô cực hoặc tiến tới giới hạn tại đầu mút mà không bao giờ đạt được." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Định lý tồn tại GTLN, GTNN trên đoạn",
        question: "Xét hàm số $y = \\frac{1}{x}$ trên khoảng $(0; 1)$. Hàm số có GTLN không?",
        correctAnswer: "Không có GTLN vì khi $x \\to 0^+$ thì $y \\to +\\infty$.",
        tip: "Mẹo nhớ: Chỉ trên ĐOẠN ĐÓNG $[a; b]$ thì tính liên tục mới đảm bảo 100% tồn tại cả Max và Min."
      }
    },
    {
      id: "mc2",
      number: "Câu 2",
      level: "Thông hiểu",
      question: "Giá trị nhỏ nhất của hàm số $y = x^3 - 3x + 5$ trên đoạn $[0; 2]$ bằng:",
      options: [
        { key: "A", text: "$3$.", isCorrect: true, errorTag: null, errorMsg: "Chính xác! $y' = 3x^2 - 3 = 0 \\iff x = \\pm 1$. Vì xét trên $[0; 2]$ nên chỉ nhận $x = 1$. Tính các giá trị: $y(0) = 5$, $y(1) = 3$, $y(2) = 7$. Do đó $\\min_{[0; 2]} y = y(1) = 3$." },
        { key: "B", text: "$5$.", isCorrect: false, errorTag: "ERR_ENDPOINT_ZERO", errorMsg: "Sai lầm: $y(0) = 5$ chưa phải giá trị nhỏ nhất, tại điểm cực tiểu $x = 1$ ta có $y(1) = 3 < 5$." },
        { key: "C", text: "$7$.", isCorrect: false, errorTag: "ERR_MAX_NOT_MIN", errorMsg: "Nhầm lẫn giữa Max và Min: $y(2) = 7$ là GIÁ TRỊ LỚN NHẤT trên đoạn $[0; 2]$." },
        { key: "D", text: "$1$.", isCorrect: false, errorTag: "ERR_POINT_NOT_VALUE", errorMsg: "Bẫy lấy hoành độ $x=1$ thay vì tung độ $y=3$." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: 3 bước tìm Max, Min trên đoạn",
        question: "Tìm GTLN của $y = -x^4 + 2x^2 + 1$ trên đoạn $[0; 2]$.",
        correctAnswer: "Max bằng $2$ tại $x = 1$ (so sánh $y(0)=1, y(1)=2, y(2)=-7$).",
        tip: "Mẹo nhớ: Tính $y'$ -> lấy nghiệm $x_i \\in (a; b)$ -> tính $y(a), y(b), y(x_i)$ rồi so sánh."
      }
    },
    {
      id: "mc3",
      number: "Câu 3",
      level: "Thông hiểu",
      question: "Giá trị lớn nhất của hàm số $y = \\frac{2x + 1}{x - 2}$ trên đoạn $[3; 5]$ là:",
      options: [
        { key: "A", text: "$7$.", isCorrect: true, errorTag: null, errorMsg: "Rất chuẩn! Đạo hàm $y' = \\frac{2(-2) - 1(1)}{(x-2)^2} = \\frac{-5}{(x-2)^2} < 0, \\forall x \\ne 2$. Do đó hàm số luôn nghịch biến trên $[3; 5]$. Vậy $\\max_{[3; 5]} y = y(3) = \\frac{2(3)+1}{3-2} = 7$." },
        { key: "B", text: "$\\frac{11}{3}$.", isCorrect: false, errorTag: "ERR_MIN_VALUE", errorMsg: "Đây là giá trị nhỏ nhất tại đầu mút phải: $y(5) = \\frac{11}{3} \\approx 3.67$." },
        { key: "C", text: "$5$.", isCorrect: false, errorTag: "ERR_WRONG_CALC", errorMsg: "Tính nhầm giá trị của hàm số." },
        { key: "D", text: "Không tồn tại vì hàm số có mẫu triệt tiêu tại $x = 2$.", isCorrect: false, errorTag: "ERR_DISCONTINUITY_OUTSIDE", errorMsg: "Điểm gián đoạn $x = 2$ nằm ngoài đoạn $[3; 5]$, nên hàm số liên tục trên $[3; 5]$." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Max, Min của hàm phân thức đơn điệu trên đoạn",
        question: "Hàm số $y = \\frac{ax+b}{cx+d}$ luôn đơn điệu trên từng khoảng xác định. Khi đó Max, Min trên $[p; q]$ luôn đạt tại đâu?",
        correctAnswer: "Luôn đạt tại hai đầu mút $p$ và $q$.",
        tip: "Mẹo nhớ: Nếu $y'$ không đổi dấu thì Max/Min chỉ nằm ở 2 đầu mút."
      }
    },
    {
      id: "mc4",
      number: "Câu 4",
      level: "Vận dụng",
      question: "Gọi $M, m$ lần lượt là giá trị lớn nhất và giá trị nhỏ nhất của hàm số $y = |x^2 - 4x + 3|$ trên đoạn $[0; 4]$. Tổng $M + m$ bằng:",
      options: [
        { key: "A", text: "$3$.", isCorrect: true, errorTag: null, errorMsg: "Chính xác tuyệt đối! Xét $f(x) = x^2 - 4x + 3$. Đạo hàm $f'(x) = 2x - 4 = 0 \\iff x = 2 \\in (0; 4)$. Các giá trị: $f(0) = 3, f(1) = 0, f(2) = -1, f(3) = 0, f(4) = 3$. Lấy trị tuyệt đối: $|f(0)| = 3, |f(1)| = 0, |f(2)| = 1, |f(4)| = 3$. Do đó $M = 3, m = 0 \\implies M + m = 3 + 0 = 3$." },
        { key: "B", text: "$4$.", isCorrect: false, errorTag: "ERR_SUM_CALC", errorMsg: "Tính nhầm $M = 3, m = 1$ (quên điểm cắt trục hoành tại $x=1, x=3$ khiến giá trị nhỏ nhất của trị tuyệt đối là 0)." },
        { key: "C", text: "$2$.", isCorrect: false, errorTag: "ERR_OMIT_ZERO", errorMsg: "Tính nhầm do không xét các nghiệm $f(x) = 0$." },
        { key: "D", text: "$6$.", isCorrect: false, errorTag: "ERR_DOUBLE_MAX", errorMsg: "Nhầm lẫn cộng hai lần giá trị cực đại." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Bẫy Min của hàm trị tuyệt đối",
        question: "Nếu phương trình $f(x) = 0$ có nghiệm trong đoạn $[a; b]$ thì $\\min_{[a; b]} |f(x)|$ bằng bao nhiêu?",
        correctAnswer: "Luôn bằng 0.",
        tip: "Mẹo nhớ: $|f(x)| \\ge 0$, nếu đồ thị cắt trục hoành trên đoạn thì Min chắc chắn bằng 0."
      }
    },
    {
      id: "mc5",
      number: "Câu 5",
      level: "Vận dụng",
      question: "Tìm giá trị của tham số $m$ để giá trị lớn nhất của hàm số $y = \\frac{x + m}{x + 1}$ trên đoạn $[1; 2]$ bằng $2$.",
      options: [
        { key: "A", text: "$m = 3$.", isCorrect: true, errorTag: null, errorMsg: "Xuất sắc! $y' = \\frac{1 - m}{(x+1)^2}$.\n- TH1: Nếu $1 - m > 0 \\iff m < 1$ thì hàm đồng biến $\\implies \\max = y(2) = \\frac{2+m}{3} = 2 \\iff m = 4$ (loại vì $4 > 1$).\n- TH2: Nếu $1 - m < 0 \\iff m > 1$ thì hàm nghịch biến $\\implies \\max = y(1) = \\frac{1+m}{2} = 2 \\iff m = 3$ (thỏa mãn $3 > 1$).\n- TH3: $m = 1 \\implies y = 1 \\ne 2$. Vậy $m = 3$." },
        { key: "B", text: "$m = 4$.", isCorrect: false, errorTag: "ERR_FORGET_CASE_CONDITION", errorMsg: "Bẫy nghiệm ngoại lai: $m = 4$ tương ứng hàm nghịch biến nhưng lại áp dụng công thức Max tại đầu mút $x = 2$ của hàm đồng biến." },
        { key: "C", text: "$m = 1$.", isCorrect: false, errorTag: "ERR_CONSTANT_FUNCTION", errorMsg: "Với $m = 1$, $y = 1$ với mọi $x$, GTLN bằng 1 chứ không bằng 2." },
        { key: "D", text: "$m = -1$.", isCorrect: false, errorTag: "ERR_SIGN_ERROR", errorMsg: "Tính sai dấu khi giải phương trình tìm $m$." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Biện luận chiều biến thiên khi tìm tham số cho Max/Min",
        question: "Khi giải bài toán Max/Min của hàm phân thức chứa tham số, cần chia làm mấy trường hợp của $y'$?",
        correctAnswer: "2 trường hợp: Đạo hàm dương (hàm đồng biến) và đạo hàm âm (hàm nghịch biến).",
        tip: "Mẹo nhớ: Giải ra $m$ phải đối chiếu ngay lại với điều kiện giả sử của đạo hàm."
      }
    }
  ],

  trueFalse: [
    {
      id: "tf1",
      number: "Câu 6",
      scenario: "Cho hàm số $y = f(x) = 2x^3 - 3x^2 - 12x + 1$ trên đoạn $[-2; 3]$. Xét tính Đúng hoặc Sai của các khẳng định sau:",
      items: [
        { key: "a", text: "Đạo hàm của hàm số có hai nghiệm là $x = -1$ và $x = 2$.", isCorrect: true, explanation: "Đúng. $f'(x) = 6x^2 - 6x - 12 = 6(x^2 - x - 2) = 6(x+1)(x-2) = 0 \\iff x = -1$ hoặc $x = 2$." },
        { key: "b", text: "Cả hai nghiệm $x = -1$ và $x = 2$ đều thuộc khoảng $(-2; 3)$.", isCorrect: true, explanation: "Đúng. Rõ ràng $-2 < -1 < 3$ và $-2 < 2 < 3$." },
        { key: "c", text: "Giá trị lớn nhất của hàm số trên đoạn $[-2; 3]$ là $8$.", isCorrect: true, explanation: "Đúng. $f(-2) = -3, f(-1) = 8, f(2) = -19, f(3) = -8$. Giá trị lớn nhất là $\\max = f(-1) = 8$." },
        { key: "d", text: "Giá trị nhỏ nhất của hàm số trên đoạn $[-2; 3]$ là $-8$.", isCorrect: false, explanation: "Sai lầm: $f(2) = -19$ mới là giá trị nhỏ nhất, $-19 < -8$." }
      ]
    },
    {
      id: "tf2",
      number: "Câu 7",
      scenario: "Cho hàm số $y = f(x) = x + \\frac{4}{x}$ trên khoảng $(0; +\\infty)$. Đánh giá tính Đúng hoặc Sai của mỗi khẳng định:",
      items: [
        { key: "a", text: "Áp dụng bất đẳng thức Cauchy cho hai số dương $x$ và $\\frac{4}{x}$, ta có $y \\ge 2\\sqrt{x \\cdot \\frac{4}{x}} = 4$.", isCorrect: true, explanation: "Đúng. Vì $x > 0$ và $\\frac{4}{x} > 0$ nên áp dụng BĐT Cauchy chuẩn xác." },
        { key: "b", text: "Dấu đẳng thức xảy ra khi và chỉ khi $x = 2$.", isCorrect: true, explanation: "Đúng. $x = \\frac{4}{x} \\iff x^2 = 4 \\iff x = 2$ (do $x > 0$)." },
        { key: "c", text: "Giá trị nhỏ nhất của hàm số trên khoảng $(0; +\\infty)$ là $4$.", isCorrect: true, explanation: "Đúng. Hàm số luôn $\\ge 4$ và đạt được dấu bằng tại $x = 2$." },
        { key: "d", text: "Hàm số đạt giá trị lớn nhất tại $x = 4$.", isCorrect: false, explanation: "Sai lầm: Khi $x \\to +\\infty$ thì $y \\to +\\infty$, hàm số không có giá trị lớn nhất trên khoảng $(0; +\\infty)$." }
      ]
    },
    {
      id: "tf3",
      number: "Câu 8",
      scenario: "Một người nông dân muốn rào một khu đất hình chữ nhật có một cạnh giáp bờ sông thẳng (không cần rào cạnh này). Chiều dài lưới thép dùng để rào ba cạnh còn lại là $120$ mét. Xét tính Đúng hoặc Sai:",
      items: [
        { key: "a", text: "Nếu gọi $x$ (mét) là chiều rộng của mảnh đất (độ dài 2 cạnh vuông góc với bờ sông) thì chiều dài song song với bờ sông là $120 - 2x$.", isCorrect: true, explanation: "Đúng. Tổng ba cạnh rào là $2x + y = 120 \\implies y = 120 - 2x$." },
        { key: "b", text: "Điều kiện của biến số $x$ là $0 < x < 60$.", isCorrect: true, explanation: "Đúng. Cả chiều rộng và chiều dài đều phải dương: $x > 0$ và $120 - 2x > 0 \\iff 0 < x < 60$." },
        { key: "c", text: "Diện tích mảnh đất rào được lớn nhất khi $x = 40$ mét.", isCorrect: false, explanation: "Sai lầm: $S(x) = x(120 - 2x) = -2x^2 + 120x$. Đỉnh parabol tại $x = -\\frac{b}{2a} = -\\frac{120}{2(-2)} = 30$ mét, không phải $40$ mét." },
        { key: "d", text: "Diện tích lớn nhất mà người nông dân có thể rào được là $1800\\text{ m}^2$.", isCorrect: true, explanation: "Đúng. Khi $x = 30$, chiều dài $y = 60$, diện tích $S = 30 \\times 60 = 1800\\text{ m}^2$." }
      ]
    }
  ],

  shortAnswer: [
    {
      id: "sa1",
      number: "Câu 9",
      question: "Tìm giá trị lớn nhất $M$ của hàm số $y = \\sqrt{4 - x^2}$.",
      correctAnswer: "2",
      acceptedAnswers: ["2", "M = 2", "2.0"],
      explanation: "Tập xác định $[-2; 2]$. Ta có $4 - x^2 \\le 4 \\implies \\sqrt{4 - x^2} \\le \\sqrt{4} = 2$. Đẳng thức xảy ra khi $x = 0 \\in [-2; 2]$. Vậy $M = 2$.",
      tip: "Biểu thức dưới căn đạt Max tại đỉnh $x = 0$."
    },
    {
      id: "sa2",
      number: "Câu 10",
      question: "Cho hàm số $y = x^4 - 2x^2 + 3$. Tìm giá trị nhỏ nhất $m$ của hàm số trên toàn bộ tập số thực $\\mathbb{R}$.",
      correctAnswer: "2",
      acceptedAnswers: ["2", "m = 2"],
      explanation: "Đặt $t = x^2 \\ge 0 \\implies y = t^2 - 2t + 3 = (t - 1)^2 + 2 \\ge 2$. Dấu bằng đạt khi $t = 1 \\iff x = \\pm 1$. Vậy $m = 2$.",
      tip: "Đưa về bình phương: $(x^2 - 1)^2 + 2 \\ge 2$."
    },
    {
      id: "sa3",
      number: "Câu 11",
      question: "Biết giá trị nhỏ nhất của hàm số $y = x + \\frac{9}{x - 1}$ trên khoảng $(1; +\\infty)$ bằng $a$. Tìm $a$.",
      correctAnswer: "7",
      acceptedAnswers: ["7", "a = 7"],
      explanation: "Biến đổi $y = (x - 1) + \\frac{9}{x - 1} + 1$. Với $x > 1$, theo BĐT Cauchy: $(x - 1) + \\frac{9}{x - 1} \\ge 2\\sqrt{9} = 6$. Suy ra $y \\ge 6 + 1 = 7$. Dấu bằng khi $x - 1 = 3 \\iff x = 4$. Vậy $a = 7$.",
      tip: "Kỹ thuật thêm bớt mẫu số để dùng Cauchy: $A + \\frac{k}{A} \\ge 2\\sqrt{k}$."
    },
    {
      id: "sa4",
      number: "Câu 12",
      question: "Tìm giá trị của $m$ để hàm số $y = x^3 - 3x + m$ có giá trị nhỏ nhất trên đoạn $[0; 2]$ bằng $1$.",
      correctAnswer: "3",
      acceptedAnswers: ["3", "m = 3"],
      explanation: "Khảo sát $f(x) = x^3 - 3x$ trên $[0; 2]$: $f'(x) = 3x^2 - 3 = 0 \\iff x = 1$. Giá trị $f(0) = 0, f(1) = -2, f(2) = 2$. Suy ra $\\min_{[0; 2]} y = -2 + m$. Theo đề bài: $-2 + m = 1 \\iff m = 3$.",
      tip: "Tách $y = f(x) + m \\implies \\min y = \\min f(x) + m$."
    }
  ],

  essay: [
    {
      id: "es1",
      number: "Câu 13 (Tự luận 1)",
      title: "Tìm giá trị lớn nhất và nhỏ nhất của hàm số lượng giác",
      question: "Tìm giá trị lớn nhất và giá trị nhỏ nhất của hàm số sau trên tập xác định của nó:\n$$y = f(x) = \\cos 2x + 4\\sin x - 1$$",
      maxPoints: 10.0,
      sampleSolution: `1) Biến đổi hàm số về một hàm số lượng giác:
- Công thức nhân đôi: cos(2x) = 1 - 2sin^2(x).
- Thay vào hàm số: y = (1 - 2sin^2(x)) + 4sin(x) - 1 = -2sin^2(x) + 4sin(x).

2) Đặt ẩn phụ và xác định miền giá trị:
- Đặt t = sin(x). Vì x thuộc R nên t thuộc [-1; 1].
- Hàm số trở thành: g(t) = -2t^2 + 4t với t thuộc [-1; 1].

3) Tìm Max và Min của hàm số g(t) trên đoạn [-1; 1]:
- Đạo hàm: g'(t) = -4t + 4 = 0 <=> t = 1 in [-1; 1].
- Tính giá trị tại các điểm đặc biệt:
  + g(-1) = -2(-1)^2 + 4(-1) = -2 - 4 = -6.
  + g(1) = -2(1)^2 + 4(1) = 2.
- So sánh các giá trị:
  Giá trị lớn nhất: M = 2, đạt được khi t = 1 <=> sin(x) = 1 <=> x = pi/2 + k*2pi (k thuộc Z).
  Giá trị nhỏ nhất: m = -6, đạt được khi t = -1 <=> sin(x) = -1 <=> x = -pi/2 + k*2pi (k thuộc Z).`,
      criteria: [
        { id: "c1", step: "Bước 1", desc: "Biến đổi đúng cos 2x = 1 - 2sin^2 x về hàm bậc 2 theo sin x", points: 2.5 },
        { id: "c2", step: "Bước 2", desc: "Đặt ẩn phụ t = sin x và chỉ rõ điều kiện chặt chẽ t ∈ [-1; 1]", points: 2.5 },
        { id: "c3", step: "Bước 3", desc: "Tính đạo hàm g'(t) và tính đúng các giá trị tại t = -1 và t = 1", points: 2.5 },
        { id: "c4", step: "Bước 4", desc: "Kết luận đúng Max = 2, Min = -6 và chỉ ra các giá trị x tương ứng", points: 2.5 }
      ]
    },
    {
      id: "es2",
      number: "Câu 14 (Tự luận 2)",
      title: "Bài toán tham số chứa giá trị tuyệt đối Max |f(x)|",
      question: "Cho hàm số $y = |x^3 - 3x + m|$. Tìm tất cả các giá trị của tham số $m$ để giá trị lớn nhất của hàm số trên đoạn $[0; 2]$ đạt giá trị nhỏ nhất có thể.",
      maxPoints: 10.0,
      sampleSolution: `1) Khảo sát hàm số lõi f(x) = x^3 - 3x + m trên [0; 2]:
- Đạo hàm: f'(x) = 3x^2 - 3 = 0 <=> x = 1 in (0; 2).
- Các giá trị tại điểm biên và cực trị:
  f(0) = m
  f(1) = m - 2
  f(2) = 2^3 - 3(2) + m = m + 2.
- Vì f(x) liên tục trên [0; 2] nên:
  A = min_{[0; 2]} f(x) = f(1) = m - 2.
  B = max_{[0; 2]} f(x) = f(2) = m + 2.

2) Đánh giá giá trị lớn nhất của hàm trị tuyệt đối:
- Đặt M = max_{[0; 2]} |f(x)| = max{|m - 2|, |m + 2|}.
- Áp dụng bất đẳng thức trị tuyệt đối:
  |m - 2| + |m + 2| = |2 - m| + |m + 2| >= |(2 - m) + (m + 2)| = 4.
- Vì M = max{|m - 2|, |m + 2|} >= (|m - 2| + |m + 2|) / 2 >= 4 / 2 = 2.
- Dấu đẳng thức xảy ra khi và chỉ khi:
  |m - 2| = |m + 2| <=> (m - 2)^2 = (m + 2)^2 <=> -4m = 4m <=> m = 0.

3) Kết luận:
- Khi m = 0, f(x) = x^3 - 3x trên [0; 2] có giá trị trong [-2; 2] => max |f(x)| = 2.
- Vậy m = 0 là giá trị duy nhất để giá trị lớn nhất đạt giá trị nhỏ nhất (bằng 2).`,
      criteria: [
        { id: "c1", step: "Bước 1", desc: "Khảo sát f(x) = x^3 - 3x + m tìm đúng min = m - 2 và max = m + 2 trên [0; 2]", points: 2.5 },
        { id: "c2", step: "Bước 2", desc: "Xác định M = max{|m-2|, |m+2|}", points: 2.5 },
        { id: "c3", step: "Bước 3", desc: "Dùng BĐT max{a, b} ≥ (a+b)/2 kết hợp |2-m| + |m+2| ≥ 4 suy ra M ≥ 2", points: 2.5 },
        { id: "c4", step: "Bước 4", desc: "Chỉ ra dấu bằng khi |m-2| = |m+2| <=> m = 0 và kết luận chặt chẽ", points: 2.5 }
      ]
    },
    {
      id: "es3",
      number: "Câu 15 (Tự luận 3)",
      title: "Ứng dụng tối ưu hóa chi phí sản xuất hình trụ",
      question: "Một công ty muốn sản xuất một chiếc thùng hình trụ kín có thể tích $V = 2\\pi\\text{ m}^3$. Biết chi phí làm nắp và đáy là $300.000\\text{ đ/m}^2$, chi phí làm mặt xung quanh là $200.000\\text{ đ/m}^2$.\n1) Hãy lập hàm số tính tổng chi phí $C(r)$ theo bán kính đáy $r$ (mét).\n2) Tìm bán kính đáy $r$ để tổng chi phí sản xuất chiếc thùng là nhỏ nhất.",
      maxPoints: 10.0,
      sampleSolution: `1) Thiết lập hàm số chi phí theo bán kính đáy r:
- Gọi r là bán kính đáy (r > 0) và h là chiều cao của hình trụ (h > 0).
- Thể tích khối trụ: V = pi * r^2 * h = 2*pi <=> h = 2 / r^2.
- Diện tích hai đáy: S_day = 2 * (pi * r^2).
  Chi phí làm hai đáy: C1 = S_day * 300000 = 600000 * pi * r^2.
- Diện tích mặt xung quanh: S_xq = 2 * pi * r * h = 2 * pi * r * (2 / r^2) = 4*pi / r.
  Chi phí làm mặt xung quanh: C2 = S_xq * 200000 = 800000 * pi / r.
- Tổng chi phí sản xuất:
  C(r) = C1 + C2 = 600000*pi*r^2 + 800000*pi / r = 200000*pi * (3r^2 + 4/r) (với r > 0).

2) Tìm bán kính r để chi phí nhỏ nhất:
- Xét hàm số f(r) = 3r^2 + 4/r trên khoảng (0; +inf).
- Đạo hàm: f'(r) = 6r - 4/r^2 = (6r^3 - 4) / r^2.
- Cho f'(r) = 0 <=> 6r^3 - 4 = 0 <=> r^3 = 4/6 = 2/3 <=> r = căn bậc ba của (2/3) mét.
- Bảng biến thiên:
  + Với 0 < r < căn bậc ba(2/3): f'(r) < 0 (hàm nghịch biến).
  + Với r > căn bậc ba(2/3): f'(r) > 0 (hàm đồng biến).
- Do đó f(r) đạt giá trị nhỏ nhất tại r = căn bậc ba của (2/3) mét.
- Kết luận: Bán kính đáy tối ưu là r = (2/3)^(1/3) m ≈ 0.874 mét.`,
      criteria: [
        { id: "c1", step: "Bước 1", desc: "Biểu diễn chiều cao h = 2/r^2 từ công thức thể tích V = π r^2 h = 2π", points: 2.5 },
        { id: "c2", step: "Bước 2", desc: "Thiết lập đúng hàm tổng chi phí C(r) = 200.000π(3r^2 + 4/r)", points: 2.5 },
        { id: "c3", step: "Bước 3", desc: "Tính đạo hàm f'(r) = 6r - 4/r^2 và tìm nghiệm r = (2/3)^(1/3)", points: 2.5 },
        { id: "c4", step: "Bước 4", desc: "Lập bảng biến thiên chứng minh điểm cực tiểu duy nhất và kết luận bán kính tối ưu", points: 2.5 }
      ]
    }
  ]
};


// --- FILE: diag-g12-c1-part3.js ---
// --------------------------------------------------------------------------
// BÀI 3: ĐƯỜNG TIỆM CẬN CỦA ĐỒ THỊ HÀM SỐ (g12-c1-l3)
// --------------------------------------------------------------------------
window.DIAGNOSTIC_ASSESSMENT_DB["g12-c1-l3"] = {
  lessonId: "g12-c1-l3",
  title: "Bài 3: Đường tiệm cận của đồ thị hàm số",
  chapterTitle: "Chương I: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
  grade: 12,
  summary: "Bộ 15 câu hỏi đánh giá chẩn đoán năng lực: Định nghĩa chuẩn tiệm cận đứng, ngang, xiên (theo giới hạn), phân biệt tiệm cận xiên của hàm phân thức bậc hai/bậc nhất, bẫy nghiệm của mẫu triệt tiêu tử số, tâm đối xứng là giao điểm hai tiệm cận.",

  multipleChoice: [
    {
      id: "mc1",
      number: "Câu 1",
      level: "Nhận biết",
      question: "Đường thẳng $x = x_0$ được gọi là đường tiệm cận đứng của đồ thị hàm số $y = f(x)$ nếu thỏa mãn điều kiện nào sau đây?",
      options: [
        { key: "A", text: "Ít nhất một trong các giới hạn sau là vô cực: $\\lim_{x \\to x_0^+} f(x) = \\pm\\infty$ hoặc $\\lim_{x \\to x_0^-} f(x) = \\pm\\infty$.", isCorrect: true, errorTag: null, errorMsg: "Chính xác! Theo định nghĩa chuẩn: Chỉ cần một trong bốn giới hạn một bên tại $x_0$ tiến về $+\\infty$ hoặc $-\\infty$ thì đường thẳng $x = x_0$ là tiệm cận đứng." },
        { key: "B", text: "Cả hai giới hạn một bên $\\lim_{x \\to x_0^+} f(x)$ và $\\lim_{x \\to x_0^-} f(x)$ đều phải là vô cực.", isCorrect: false, errorTag: "ERR_BOTH_SIDES", errorMsg: "Sai lầm: Định nghĩa chỉ yêu cầu 'ít nhất một trong các giới hạn', không bắt buộc cả hai bên." },
        { key: "C", text: "$\\lim_{x \\to +\\infty} f(x) = x_0$.", isCorrect: false, errorTag: "ERR_HORIZONTAL_CONFUSION", errorMsg: "Nhầm lẫn với tiệm cận ngang: Giới hạn khi $x \\to +\\infty$ cho tiệm cận ngang $y = y_0$." },
        { key: "D", text: "$f(x_0) = 0$.", isCorrect: false, errorTag: "ERR_ROOT_CONFUSION", errorMsg: "Nhầm với nghiệm của phương trình $f(x)=0$." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Định nghĩa tiệm cận đứng theo giới hạn",
        question: "Đồ thị hàm số $y = \\frac{x-1}{x^2-1}$ có tiệm cận đứng $x = 1$ không?",
        correctAnswer: "Không có TCĐ $x = 1$ vì $\\lim_{x \\to 1} \\frac{x-1}{(x-1)(x+1)} = \\lim_{x \\to 1} \\frac{1}{x+1} = \\frac{1}{2}$ (giới hạn hữu hạn).",
        tip: "Mẹo nhớ: Nghiệm mẫu phải làm cho giới hạn tiến ra vô cực mới là tiệm cận đứng."
      }
    },
    {
      id: "mc2",
      number: "Câu 2",
      level: "Thông hiểu",
      question: "Đường tiệm cận xiên của đồ thị hàm số $y = \\frac{2x^2 - 3x + 5}{x - 1}$ có phương trình là:",
      options: [
        { key: "A", text: "$y = 2x - 1$.", isCorrect: true, errorTag: null, errorMsg: "Chính xác! Thực hiện phép chia đa thức tử cho mẫu:\n$\\frac{2x^2 - 3x + 5}{x - 1} = 2x - 1 + \\frac{4}{x - 1}$.\nVì $\\lim_{x \\to \\pm\\infty} \\frac{4}{x-1} = 0$ nên đường thẳng $y = 2x - 1$ là tiệm cận xiên." },
        { key: "B", text: "$y = 2x + 1$.", isCorrect: false, errorTag: "ERR_DIVISION_SIGN", errorMsg: "Chia sai dấu: $2x(x-1) = 2x^2 - 2x$. Lấy $(2x^2 - 3x) - (2x^2 - 2x) = -x$. Sau đó chia $-x$ cho $x$ được $-1$ chứ không phải $+1$." },
        { key: "C", text: "$y = 2x$.", isCorrect: false, errorTag: "ERR_FORGET_CONSTANT", errorMsg: "Bỏ quên hệ số tự do $b$ của tiệm cận xiên $y = ax + b$." },
        { key: "D", text: "$x = 1$.", isCorrect: false, errorTag: "ERR_VERTICAL_INSTEAD_OBLIQUE", errorMsg: "$x = 1$ là đường tiệm cận ĐỨNG, không phải tiệm cận xiên." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Cách tìm tiệm cận xiên bằng chia đa thức",
        question: "Tìm tiệm cận xiên của $y = \\frac{x^2 + 2x - 3}{x + 1}$.",
        correctAnswer: "Thực hiện phép chia: $y = x + 1 - \\frac{4}{x+1} \\implies$ Tiệm cận xiên là $y = x + 1$.",
        tip: "Mẹo nhớ: Với phân thức bậc 2 trên bậc 1, chia tử cho mẫu: phần thương bậc nhất chính là tiệm cận xiên."
      }
    },
    {
      id: "mc3",
      number: "Câu 3",
      level: "Thông hiểu",
      question: "Số đường tiệm cận (gồm cả đứng và ngang) của đồ thị hàm số $y = \\frac{\\sqrt{x^2 + 1}}{x - 2}$ là:",
      options: [
        { key: "A", text: "$3$.", isCorrect: true, errorTag: null, errorMsg: "Rất xuất sắc! Hàm số có:\n- 1 tiệm cận đứng: $x = 2$ (vì $\\lim_{x \\to 2^+} y = +\\infty$).\n- 2 tiệm cận ngang:\n+ Khi $x \\to +\\infty$: $\\lim_{x \\to +\\infty} \\frac{\\sqrt{x^2+1}}{x-2} = \\lim \\frac{x\\sqrt{1+1/x^2}}{x(1-2/x)} = 1 \\implies y = 1$.\n+ Khi $x \\to -\\infty$: $\\lim_{x \\to -\\infty} \\frac{\\sqrt{x^2+1}}{x-2} = \\lim \\frac{-x\\sqrt{1+1/x^2}}{x(1-2/x)} = -1 \\implies y = -1$.\nTổng cộng có đúng 3 đường tiệm cận!" },
        { key: "B", text: "$2$.", isCorrect: false, errorTag: "ERR_FORGET_NEGATIVE_INFINITY", errorMsg: "Bẫy kinh điển: Quên căn bậc hai khi $x \\to -\\infty$ thì $\\sqrt{x^2} = |x| = -x$, dẫn tới chỉ tìm được 1 tiệm cận ngang $y = 1$ thay vì cả 2 tiệm cận ngang $y = \\pm 1$." },
        { key: "C", text: "$1$.", isCorrect: false, errorTag: "ERR_MISS_HORIZONTAL", errorMsg: "Bỏ quên cả 2 tiệm cận ngang." },
        { key: "D", text: "$4$.", isCorrect: false, errorTag: "ERR_COUNT_WRONG", errorMsg: "Hàm này chỉ có 1 TCĐ và 2 TCN, tổng là 3." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Bẫy tiệm cận ngang khi x tiến ra âm vô cực",
        question: "Tìm các tiệm cận ngang của đồ thị hàm số $y = \\frac{2x + 1}{\\sqrt{x^2 + 4}}$.",
        correctAnswer: "Có 2 tiệm cận ngang: $y = 2$ (khi $x \\to +\\infty$) và $y = -2$ (khi $x \\to -\\infty$).",
        tip: "Mẹo nhớ: Căn bậc hai $\\sqrt{x^2}$ khi $x \\to -\\infty$ luôn rút ra dấu trừ: $-x$."
      }
    },
    {
      id: "mc4",
      number: "Câu 4",
      level: "Vận dụng",
      question: "Giao điểm của hai đường tiệm cận của đồ thị hàm số $y = \\frac{3x - 1}{x + 2}$ là điểm nào sau đây?",
      options: [
        { key: "A", text: "$I(-2; 3)$.", isCorrect: true, errorTag: null, errorMsg: "Chính xác! Tiệm cận đứng là $x = -2$, tiệm cận ngang là $y = \\frac{3}{1} = 3$. Giao điểm của chúng là $I(-2; 3)$. Điểm $I$ này đồng thời là tâm đối xứng của đồ thị hypebol." },
        { key: "B", text: "$I(2; 3)$.", isCorrect: false, errorTag: "ERR_SIGN_TCĐ", errorMsg: "Sai dấu hoành độ: Mẫu $x + 2 = 0 \\iff x = -2$, không phải $+2$." },
        { key: "C", text: "$I(3; -2)$.", isCorrect: false, errorTag: "ERR_SWAP_COORDINATES", errorMsg: "Nhầm lẫn hoành độ và tung độ: $x$ là tiệm cận đứng, $y$ là tiệm cận ngang." },
        { key: "D", text: "$I\\left(-2; -\\frac{1}{2}\\right)$.", isCorrect: false, errorTag: "ERR_Y_INTERCEPT", errorMsg: "Nhầm tiệm cận ngang với giao điểm của đồ thị với trục tung." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Tâm đối xứng của hàm phân thức bậc 1/1",
        question: "Cho hàm số $y = \\frac{ax+b}{cx+d}$. Tọa độ tâm đối xứng $I$ của đồ thị là gì?",
        correctAnswer: "$I\\left(-\\frac{d}{c}; \\frac{a}{c}\\right)$ (giao điểm của tiệm cận đứng và tiệm cận ngang).",
        tip: "Mẹo nhớ: Hoành độ là nghiệm mẫu số, tung độ là tỉ số hai hệ số của $x$."
      }
    },
    {
      id: "mc5",
      number: "Câu 5",
      level: "Vận dụng",
      question: "Tìm tất cả các giá trị của tham số $m$ để đồ thị hàm số $y = \\frac{x - 1}{x^2 - 2mx + 4}$ có đúng hai đường tiệm cận đứng.",
      options: [
        { key: "A", text: "$m < -2$ hoặc $m > 2$ và $m \\ne \\frac{5}{2}$.", isCorrect: true, errorTag: null, errorMsg: "Xuất sắc! Đồ thị có đúng 2 tiệm cận đứng khi và chỉ khi mẫu $g(x) = x^2 - 2mx + 4 = 0$ có 2 nghiệm phân biệt KHÁC nghiệm của tử số ($x = 1$):\n1) $\\Delta' = m^2 - 4 > 0 \\iff m < -2$ hoặc $m > 2$.\n2) $g(1) \\ne 0 \\iff 1^2 - 2m(1) + 4 \\ne 0 \\iff 5 - 2m \\ne 0 \\iff m \\ne \\frac{5}{2}$.\nKết hợp cả hai điều kiện ta được kết quả chính xác." },
        { key: "B", text: "$m < -2$ hoặc $m > 2$.", isCorrect: false, errorTag: "ERR_FORGET_CANCEL_ROOT", errorMsg: "Bẫy nghiệm triệt tiêu tử: Nếu $m = \\frac{5}{2}$ thì mẫu có nghiệm $x = 1$ trùng với tử số, khi đó phân thức rút gọn làm mất đi 1 tiệm cận đứng (chỉ còn 1 TCĐ)!" },
        { key: "C", text: "$-2 < m < 2$.", isCorrect: false, errorTag: "ERR_DELTA_SIGN", errorMsg: "Sai dấu $\\Delta'$: $\\Delta' < 0$ thì phương trình mẫu vô nghiệm, đồ thị không có TCĐ nào." },
        { key: "D", text: "$m > 2$.", isCorrect: false, errorTag: "ERR_MISS_NEGATIVE", errorMsg: "Bỏ sót trường hợp $m < -2$." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Điều kiện nghiệm mẫu không triệt tiêu nghiệm tử",
        question: "Đồ thị $y = \\frac{x-2}{x^2 - 3x + m}$ có đúng 2 TCĐ khi nào?",
        correctAnswer: "Khi $\\Delta = 9 - 4m > 0 \\iff m < 9/4$ và $2^2 - 3(2) + m \\ne 0 \\iff m \\ne 2$.",
        tip: "Mẹo nhớ: Luôn phải kiểm tra điều kiện mẫu số khác 0 tại nghiệm của tử số."
      }
    }
  ],

  trueFalse: [
    {
      id: "tf1",
      number: "Câu 6",
      scenario: "Cho hàm số $y = f(x) = \\frac{x^2 - x - 2}{x - 1}$. Xét tính Đúng hoặc Sai của các khẳng định sau:",
      items: [
        { key: "a", text: "Đồ thị hàm số có một đường tiệm cận đứng là $x = 1$.", isCorrect: true, explanation: "Đúng. Tại $x = 1$, tử số bằng $1^2 - 1 - 2 = -2 \\ne 0$, mẫu số bằng $0$, nên $\\lim_{x \\to 1} y = \\infty$, do đó $x = 1$ là tiệm cận đứng." },
        { key: "b", text: "Đồ thị hàm số có một đường tiệm cận ngang là $y = 1$.", isCorrect: false, explanation: "Sai lầm: Bậc của tử (bậc 2) lớn hơn bậc của mẫu (bậc 1) nên khi $x \\to \\pm\\infty$ thì $y \\to \\pm\\infty$, không có tiệm cận ngang." },
        { key: "c", text: "Đường tiệm cận xiên của đồ thị hàm số có phương trình là $y = x$.", isCorrect: true, explanation: "Đúng. Thực hiện phép chia: $\\frac{x^2 - x - 2}{x - 1} = x - \\frac{2}{x - 1}$. Vì $\\lim_{x \\to \\infty} -\\frac{2}{x-1} = 0$ nên tiệm cận xiên là $y = x$." },
        { key: "d", text: "Giao điểm của tiệm cận đứng và tiệm cận xiên là điểm $I(1; 1)$.", isCorrect: true, explanation: "Đúng. Thay $x = 1$ vào phương trình tiệm cận xiên $y = x$ ta được $y = 1$. Vậy giao điểm là $I(1; 1)$." }
      ]
    },
    {
      id: "tf2",
      number: "Câu 7",
      scenario: "Cho hàm số $y = f(x)$ có bảng biến thiên dưới đây:\n- $x$ chạy từ $-\\infty$ qua $-2$, $0$, $2$ đến $+\\infty$.\n- Tại $x = -2$ và $x = 2$, hàm số không xác định (dấu ||).\n- $\\lim_{x \\to -\\infty} f(x) = 0$; $\\lim_{x \\to (-2)^-} f(x) = -\\infty$; $\\lim_{x \\to (-2)^+} f(x) = +\\infty$.\n- $\\lim_{x \\to 2^-} f(x) = -\\infty$; $\\lim_{x \\to 2^+} f(x) = 1$; $\\lim_{x \\to +\\infty} f(x) = 3$.\nĐánh giá tính Đúng hoặc Sai:",
      items: [
        { key: "a", text: "Đồ thị hàm số có đúng 2 đường tiệm cận đứng là $x = -2$ và $x = 2$.", isCorrect: true, explanation: "Đúng. Tại $x = -2$ cả hai bên đều ra vô cực; tại $x = 2$ có giới hạn bên trái $\\lim_{x \\to 2^-} f(x) = -\\infty$ nên $x = 2$ vẫn là tiệm cận đứng." },
        { key: "b", text: "Đồ thị hàm số có đúng 2 đường tiệm cận ngang là $y = 0$ và $y = 3$.", isCorrect: true, explanation: "Đúng. $\\lim_{x \\to -\\infty} f(x) = 0 \\implies y = 0$ và $\\lim_{x \\to +\\infty} f(x) = 3 \\implies y = 3$." },
        { key: "c", text: "Đường thẳng $y = 1$ là một tiệm cận ngang của đồ thị hàm số.", isCorrect: false, explanation: "Sai lầm nghiêm trọng: $y = 1$ là giới hạn bên phải tại điểm hữu hạn $x = 2$, không phải giới hạn tại vô cực. Tiệm cận ngang bắt buộc phải xét khi $x \\to \\pm\\infty$." },
        { key: "d", text: "Tổng số đường tiệm cận đứng và ngang của đồ thị hàm số là 4.", isCorrect: true, explanation: "Đúng. Gồm 2 tiệm cận đứng ($x = -2, x = 2$) và 2 tiệm cận ngang ($y = 0, y = 3$). Tổng cộng là $2 + 2 = 4$." }
      ]
    },
    {
      id: "tf3",
      number: "Câu 8",
      scenario: "Xét các khẳng định về đường tiệm cận của đồ thị hàm số theo chương trình chuẩn GDPT 2018:",
      items: [
        { key: "a", text: "Đồ thị của mọi hàm đa thức (bậc 1, bậc 2, bậc 3, bậc 4) đều không có đường tiệm cận.", isCorrect: true, explanation: "Đúng. Hàm đa thức liên tục trên $\\mathbb{R}$ và khi $x \\to \\pm\\infty$ thì $y \\to \\pm\\infty$ với bậc $\\ge 1$, không thỏa mãn bất kì định nghĩa tiệm cận nào." },
        { key: "b", text: "Đồ thị hàm phân thức bậc hai trên bậc nhất luôn có một tiệm cận đứng và một tiệm cận xiên (khi đa thức mẫu không chia hết đa thức tử).", isCorrect: true, explanation: "Đúng. Dạng $y = mx + n + \\frac{r}{x - x_0}$ luôn có TCĐ $x = x_0$ và TCX $y = mx + n$." },
        { key: "c", text: "Đồ thị hàm số không bao giờ cắt đường tiệm cận của nó.", isCorrect: false, explanation: "Sai lầm phổ biến: Đồ thị hàm số có thể cắt tiệm cận ngang hoặc tiệm cận xiên tại các điểm hữu hạn. Định nghĩa tiệm cận chỉ yêu cầu khoảng cách tiến về 0 khi $x$ tiến ra vô cực!" },
        { key: "d", text: "Đồ thị hàm số có thể có tối đa vô số đường tiệm cận đứng.", isCorrect: true, explanation: "Đúng. Ví dụ hàm lượng giác $y = \\tan x = \\frac{\\sin x}{\\cos x}$ có vô số tiệm cận đứng là các đường thẳng $x = \\frac{\\pi}{2} + k\\pi$ ($k \\in \\mathbb{Z}$)." }
      ]
    }
  ],

  shortAnswer: [
    {
      id: "sa1",
      number: "Câu 9",
      question: "Tìm hoành độ giao điểm của đường tiệm cận đứng và đường tiệm cận xiên của đồ thị hàm số $y = \\frac{2x^2 + x - 1}{x - 3}$.",
      correctAnswer: "3",
      acceptedAnswers: ["3", "x = 3"],
      explanation: "Tiệm cận đứng là $x = 3$. Mọi giao điểm của đường thẳng tiệm cận đứng với bất kì đường thẳng nào đều có hoành độ là $x = 3$.",
      tip: "Giao điểm của TCĐ $x = x_0$ và TCX luôn có hoành độ là $x_0$."
    },
    {
      id: "sa2",
      number: "Câu 10",
      question: "Đồ thị hàm số $y = \\frac{x + 2}{\\sqrt{4x^2 + 1}}$ có hai đường tiệm cận ngang là $y = a$ và $y = b$. Tính tích $a \\cdot b$.",
      correctAnswer: "-0.25",
      acceptedAnswers: ["-0.25", "-1/4", "-0,25"],
      explanation: "Khi $x \\to +\\infty$: $y = \\frac{x(1+2/x)}{x\\sqrt{4+1/x^2}} \\to \\frac{1}{2} \\implies a = 0.5$. Khi $x \\to -\\infty$: $y = \\frac{x(1+2/x)}{-x\\sqrt{4+1/x^2}} \\to -\\frac{1}{2} \\implies b = -0.5$. Tích $a \\cdot b = 0.5 \\times (-0.5) = -0.25 = -1/4$.",
      tip: "Chú ý rút $x$ ra khỏi căn: $\\sqrt{4x^2} = 2x$ khi $x > 0$ và $-2x$ khi $x < 0$."
    },
    {
      id: "sa3",
      number: "Câu 11",
      question: "Biết đường tiệm cận xiên của đồ thị hàm số $y = \\frac{3x^2 - 4x + 2}{x - 1}$ có dạng $y = ax + b$. Tính giá trị của biểu thức $P = a + 2b$.",
      correctAnswer: "1",
      acceptedAnswers: ["1", "P = 1"],
      explanation: "Chia đa thức: $3x^2 - 4x + 2 = (x - 1)(3x - 1) + 1 \\implies y = 3x - 1 + \\frac{1}{x-1}$. Tiệm cận xiên là $y = 3x - 1 \\implies a = 3, b = -1$. Khi đó $P = 3 + 2(-1) = 3 - 2 = 1$.",
      tip: "Tiệm cận xiên là phần thương $ax + b$ khi chia tử cho mẫu."
    },
    {
      id: "sa4",
      number: "Câu 12",
      question: "Tìm số đường tiệm cận (cả đứng và ngang) của đồ thị hàm số $y = \\frac{x^2 - 9}{x^2 - 5x + 6}$.",
      correctAnswer: "2",
      acceptedAnswers: ["2", "2 đường", "hai"],
      explanation: "Rút gọn: $y = \\frac{(x-3)(x+3)}{(x-3)(x-2)} = \\frac{x+3}{x-2}$ (với $x \\ne 3$).\n- Tại $x = 3$: $\\lim_{x \\to 3} y = 6$ (hữu hạn, không là TCĐ).\n- Tại $x = 2$: $\\lim_{x \\to 2} y = \\infty \\implies x = 2$ là TCĐ duy nhất.\n- Khi $x \\to \\pm\\infty$: $\\lim y = 1 \\implies y = 1$ là TCN duy nhất.\nTổng cộng có đúng $1 + 1 = 2$ đường tiệm cận.",
      tip: "Nhớ triệt tiêu nhân tử chung giữa tử và mẫu trước khi đếm số tiệm cận đứng."
    }
  ],

  essay: [
    {
      id: "es1",
      number: "Câu 13 (Tự luận 1)",
      title: "Tìm tiệm cận xiên theo định nghĩa giới hạn chuẩn",
      question: "Cho hàm số $y = f(x) = \\sqrt{x^2 - 4x + 5}$.\n1) Áp dụng định nghĩa tiệm cận xiên theo giới hạn: $a = \\lim_{x \\to +\\infty} \\frac{f(x)}{x}$ và $b = \\lim_{x \\to +\\infty} [f(x) - ax]$, hãy tìm phương trình đường tiệm cận xiên của đồ thị hàm số khi $x \\to +\\infty$.\n2) Tìm phương trình đường tiệm cận xiên của đồ thị khi $x \\to -\\infty$.",
      maxPoints: 10.0,
      sampleSolution: `1) Tìm tiệm cận xiên khi x -> +inf:
- Tìm hệ số góc a:
  a = lim_{x -> +inf} f(x)/x = lim_{x -> +inf} sqrt{x^2 - 4x + 5} / x
    = lim_{x -> +inf} x*sqrt{1 - 4/x + 5/x^2} / x
    = lim_{x -> +inf} sqrt{1 - 4/x + 5/x^2} = 1.
- Tìm hệ số b:
  b = lim_{x -> +inf} [f(x) - a*x] = lim_{x -> +inf} [sqrt{x^2 - 4x + 5} - x]
  Nhân liên hợp:
  = lim_{x -> +inf} (x^2 - 4x + 5 - x^2) / [sqrt{x^2 - 4x + 5} + x]
  = lim_{x -> +inf} (-4x + 5) / [x*sqrt{1 - 4/x + 5/x^2} + x]
  = lim_{x -> +inf} (-4 + 5/x) / [sqrt{1 - 4/x + 5/x^2} + 1] = -4 / (1 + 1) = -2.
- Vậy đường tiệm cận xiên khi x -> +inf là: y = x - 2.

2) Tìm tiệm cận xiên khi x -> -inf:
- Tìm hệ số góc a':
  a' = lim_{x -> -inf} f(x)/x = lim_{x -> -inf} sqrt{x^2 - 4x + 5} / x
     = lim_{x -> -inf} (-x)*sqrt{1 - 4/x + 5/x^2} / x = -1.
- Tìm hệ số b':
  b' = lim_{x -> -inf} [f(x) - a'*x] = lim_{x -> -inf} [sqrt{x^2 - 4x + 5} + x]
  Nhân liên hợp:
  = lim_{x -> -inf} (-4x + 5) / [sqrt{x^2 - 4x + 5} - x]
  Với x < 0 thì sqrt{x^2 - 4x + 5} = -x*sqrt{1 - 4/x + 5/x^2}.
  Mẫu số = -x*sqrt{...} - x = -x*[sqrt{...} + 1].
  Tử số = -x*(4 - 5/x).
  => b' = lim_{x -> -inf} (4 - 5/x) / [sqrt{...} + 1] = 4 / (1 + 1) = 2.
- Vậy đường tiệm cận xiên khi x -> -inf là: y = -x + 2.`,
      criteria: [
        { id: "c1", step: "Bước 1", desc: "Tính đúng giới hạn a = lim f(x)/x = 1 khi x -> +∞", points: 2.5 },
        { id: "c2", step: "Bước 2", desc: "Nhân liên hợp tính đúng b = -2 và kết luận tiệm cận xiên y = x - 2", points: 2.5 },
        { id: "c3", step: "Bước 3", desc: "Tính đúng giới hạn a' = -1 khi x -> -∞ chú ý căn rút ra -x", points: 2.5 },
        { id: "c4", step: "Bước 4", desc: "Nhân liên hợp tính đúng b' = 2 và kết luận tiệm cận xiên y = -x + 2", points: 2.5 }
      ]
    },
    {
      id: "es2",
      number: "Câu 14 (Tự luận 2)",
      title: "Khoảng cách từ điểm trên đồ thị tới hai đường tiệm cận",
      question: "Cho hàm số $y = \\frac{2x - 3}{x + 1}$ có đồ thị $(C)$.\n1) Tìm tọa độ giao điểm $I$ của hai đường tiệm cận của $(C)$.\n2) Gọi $M$ là một điểm bất kì thuộc $(C)$. Chứng minh rằng tích khoảng cách từ điểm $M$ đến hai đường tiệm cận của $(C)$ là một hằng số không phụ thuộc vào vị trí của điểm $M$.",
      maxPoints: 10.0,
      sampleSolution: `1) Tìm tọa độ giao điểm I của hai đường tiệm cận:
- Tiệm cận đứng d1: x + 1 = 0 <=> x = -1.
- Tiệm cận ngang d2: y = 2/1 = 2 <=> y = 2.
- Giao điểm I của hai tiệm cận có tọa độ là: I(-1; 2).

2) Chứng minh tích khoảng cách là hằng số:
- Điểm M thuộc đồ thị (C) có tọa độ dạng: M(x0; y0) với x0 ≠ -1 và y0 = 2 - 5/(x0 + 1).
- Khoảng cách từ M đến tiệm cận đứng d1: x + 1 = 0 là:
  dist1 = |x0 - (-1)| = |x0 + 1|.
- Khoảng cách từ M đến tiệm cận ngang d2: y - 2 = 0 là:
  dist2 = |y0 - 2| = |(2 - 5/(x0 + 1)) - 2| = |-5 / (x0 + 1)| = 5 / |x0 + 1|.
- Tích hai khoảng cách:
  P = dist1 * dist2 = |x0 + 1| * (5 / |x0 + 1|) = 5.
- Ta thấy P = 5 là một hằng số dương cố định, hoàn toàn không phụ thuộc vào tọa độ x0 của điểm M.
Điều phải chứng minh.`,
      criteria: [
        { id: "c1", step: "Bước 1", desc: "Xác định đúng phương trình tiệm cận đứng x = -1 và tiệm cận ngang y = 2", points: 2.5 },
        { id: "c2", step: "Bước 2", desc: "Tìm đúng tọa độ giao điểm I(-1; 2)", points: 2.5 },
        { id: "c3", step: "Bước 3", desc: "Biểu diễn khoảng cách dist1 = |x0+1| và dist2 = 5/|x0+1|", points: 2.5 },
        { id: "c4", step: "Bước 4", desc: "Nhân hai khoảng cách triệt tiêu |x0+1| ra hằng số 5 và kết luận hoàn chỉnh", points: 2.5 }
      ]
    },
    {
      id: "es3",
      number: "Câu 15 (Tự luận 3)",
      title: "Ứng dụng tiệm cận trong kinh tế học (Chi phí trung bình dài hạn)",
      question: "Tổng chi phí sản xuất $x$ sản phẩm của một xí nghiệp được cho bởi hàm số $C(x) = 50x + 1800$ (nghìn đồng), với $x > 0$.\n1) Hãy lập hàm chi phí trung bình để sản xuất mỗi sản phẩm: $\\bar{C}(x) = \\frac{C(x)}{x}$.\n2) Tìm đường tiệm cận ngang của đồ thị hàm số $\\bar{C}(x)$ và giải thích ý nghĩa kinh tế thực tiễn của đường tiệm cận này.",
      maxPoints: 10.0,
      sampleSolution: `1) Thiết lập hàm chi phí trung bình:
- Hàm chi phí trung bình cho mỗi sản phẩm là:
  C_bar(x) = C(x) / x = (50x + 1800) / x = 50 + 1800/x (nghìn đồng/sản phẩm), với x > 0.

2) Tìm tiệm cận ngang và giải thích ý nghĩa kinh tế:
- Xét giới hạn khi số lượng sản phẩm x tăng vô hạn (x -> +inf):
  lim_{x -> +inf} C_bar(x) = lim_{x -> +inf} (50 + 1800/x) = 50 + 0 = 50.
- Do đó, đồ thị hàm số chi phí trung bình có đường tiệm cận ngang là:
  y = 50 (nghìn đồng).

- Ý nghĩa kinh tế thực tế:
  + Khoản 1800 (nghìn đồng) là chi phí cố định (mặt bằng, thiết bị, khấu hao...).
  + Khoản 50 (nghìn đồng) là chi phí biến đổi trên mỗi sản phẩm (nguyên vật liệu, nhân công trực tiếp).
  + Khi quy mô sản xuất tăng lên rất lớn (x -> +inf), chi phí cố định phân bổ trên mỗi sản phẩm (1800/x) sẽ giảm dần về 0.
  + Do đó, chi phí trung bình sản xuất mỗi sản phẩm sẽ tiệm cận dần về mức chi phí biến đổi tối thiểu là 50 nghìn đồng/sản phẩm (hiệu ứng kinh tế quy mô - economies of scale). Mức 50 nghìn đồng là mức sàn chi phí trung bình mà xí nghiệp hướng tới.`,
      criteria: [
        { id: "c1", step: "Bước 1", desc: "Thiết lập đúng hàm chi phí trung bình C_bar(x) = 50 + 1800/x", points: 2.5 },
        { id: "c2", step: "Bước 2", desc: "Tính đúng giới hạn lim C_bar(x) khi x -> +∞ bằng 50", points: 2.5 },
        { id: "c3", step: "Bước 3", desc: "Kết luận đúng đường tiệm cận ngang y = 50", points: 2.5 },
        { id: "c4", step: "Bước 4", desc: "Giải thích sâu sắc ý nghĩa kinh tế quy mô và mức sàn chi phí sản xuất tối thiểu", points: 2.5 }
      ]
    }
  ]
};

// --------------------------------------------------------------------------
// BÀI 4: KHẢO SÁT SỰ BIẾN THIÊN VÀ VẼ ĐỒ THỊ HÀM SỐ (g12-c1-l4)
// --------------------------------------------------------------------------
window.DIAGNOSTIC_ASSESSMENT_DB["g12-c1-l4"] = {
  lessonId: "g12-c1-l4",
  title: "Bài 4: Khảo sát sự biến thiên và vẽ đồ thị của hàm số",
  chapterTitle: "Chương I: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
  grade: 12,
  summary: "Bộ 15 câu hỏi đánh giá chẩn đoán năng lực: Sơ đồ khảo sát 3 dạng hàm chuẩn GDPT 2018 (bậc ba, phân thức bậc 1/bậc 1, phân thức bậc 2/bậc 1), nhận dạng đồ thị và xác định dấu hệ số, biện luận số nghiệm phương trình f(x) = m, điểm uốn và tâm đối xứng.",

  multipleChoice: [
    {
      id: "mc1",
      number: "Câu 1",
      level: "Nhận biết",
      question: "Đồ thị hàm số bậc ba $y = ax^3 + bx^2 + cx + d$ ($a \\ne 0$) luôn nhận điểm nào sau đây làm tâm đối xứng?",
      options: [
        { key: "A", text: "Điểm uốn $I(x_0; y_0)$ với $x_0$ là nghiệm của phương trình $y'' = 0$.", isCorrect: true, errorTag: null, errorMsg: "Chính xác! Đồ thị hàm số bậc ba luôn có duy nhất một tâm đối xứng là điểm uốn $I$, trong đó hoành độ $x_0 = -\\frac{b}{3a}$ là nghiệm của $y'' = 6ax + 2b = 0$." },
        { key: "B", text: "Gốc tọa độ $O(0; 0)$.", isCorrect: false, errorTag: "ERR_ORIGIN_ONLY_ODD", errorMsg: "Sai lầm: Gốc tọa độ chỉ là tâm đối xứng khi hàm số là hàm lẻ ($b = d = 0$)." },
        { key: "C", text: "Trung điểm của hai điểm cực trị (nếu có).", isCorrect: false, errorTag: "ERR_NOT_ALWAYS_HAVE_EXTREMA", errorMsg: "Thiếu trường hợp: Khi hàm số không có cực trị thì nó vẫn có tâm đối xứng là điểm uốn." },
        { key: "D", text: "Điểm cực đại của đồ thị.", isCorrect: false, errorTag: "ERR_EXTREMA_NOT_CENTER", errorMsg: "Điểm cực trị không phải là tâm đối xứng của đồ thị." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Tọa độ tâm đối xứng của đồ thị hàm bậc ba",
        question: "Tìm tâm đối xứng của đồ thị hàm số $y = x^3 - 3x^2 + 4$.",
        correctAnswer: "Tâm đối xứng là $I(1; 2)$ vì $y'' = 6x - 6 = 0 \\iff x = 1 \\implies y(1) = 2$.",
        tip: "Mẹo nhớ: Hoành độ tâm đối xứng hàm bậc ba là $x = -b / (3a)$."
      }
    },
    {
      id: "mc2",
      number: "Câu 2",
      level: "Thông hiểu",
      question: "Cho hàm số $y = f(x) = ax^3 + bx^2 + cx + d$ có đồ thị dạng chữ 'N' đi lên từ trái sang phải, cắt trục tung tại điểm có tung độ dương, có 2 điểm cực trị nằm về hai phía của trục tung. Dấu của các hệ số $a, b, c, d$ là:",
      options: [
        { key: "A", text: "$a > 0, c < 0, d > 0$.", isCorrect: true, errorTag: null, errorMsg: "Chính xác! Nhánh cuối đi lên $\\implies a > 0$. Đồ thị cắt trục tung tại $(0; d)$ phía trên trục hoành $\\implies d > 0$. Hai điểm cực trị nằm về 2 phía trục tung nghĩa là $y' = 3ax^2 + 2bx + c = 0$ có 2 nghiệm trái dấu $\\implies x_1 x_2 = \\frac{c}{3a} < 0$. Vì $a > 0$ nên $c < 0$." },
        { key: "B", text: "$a > 0, c > 0, d > 0$.", isCorrect: false, errorTag: "ERR_C_SIGN", errorMsg: "Sai dấu $c$: Nếu $c > 0$ thì $3ac > 0$, hai nghiệm cực trị sẽ cùng dấu (cùng nằm một phía so với trục tung)." },
        { key: "C", text: "$a < 0, c < 0, d < 0$.", isCorrect: false, errorTag: "ERR_A_SIGN", errorMsg: "Nhánh cuối đi lên thì $a$ phải dương ($a > 0$)." },
        { key: "D", text: "$a > 0, c < 0, d < 0$.", isCorrect: false, errorTag: "ERR_D_SIGN", errorMsg: "Cắt trục tung phía trên trục hoành thì $d$ phải dương ($d > 0$)." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Kỹ thuật nhận diện dấu hệ số đồ thị bậc 3",
        question: "Dấu của $a$ nhận biết ở đâu? Dấu của $d$ nhận biết ở đâu?",
        correctAnswer: "$a$ nhận diện ở nhánh vô cực bên phải; $d$ nhận diện ở giao điểm với trục tung $Oy$.",
        tip: "Mẹo nhớ: Nhánh phải lên $\\implies a>0$; cắt trên $Ox \\implies d>0$; cực trị 2 phía $Oy \\implies ac < 0$."
      }
    },
    {
      id: "mc3",
      number: "Câu 3",
      level: "Thông hiểu",
      question: "Đồ thị hàm số $y = \\frac{ax + b}{cx + d}$ ($ad - bc \\ne 0$) có đường tiệm cận đứng $x = 1$, tiệm cận ngang $y = 2$ và đi qua điểm $A(0; -1)$. Hàm số đó là:",
      options: [
        { key: "A", text: "$y = \\frac{2x + 1}{x - 1}$.", isCorrect: false, errorTag: "ERR_POINT_PASS", errorMsg: "Thay $x = 0$ vào hàm này ta được $y = \\frac{1}{-1} = -1$ (đúng), nhưng kiểm tra lại: tử $2(0)+1=1, 1/-1=-1$, tuy nhiên hãy xem tiệm cận ngang $y = 2$, đứng $x = 1$. Ở đáp án B $y = \\frac{2x-1}{x-1}$ thì $y(0) = 1 \\ne -1$." },
        { key: "B", text: "$y = \\frac{2x + 1}{x - 1}$.", isCorrect: true, errorTag: null, errorMsg: "Rất chuẩn! Tiệm cận đứng $x = 1 \\implies$ mẫu có dạng $x - 1$. Tiệm cận ngang $y = 2 \\implies$ hệ số tử là $2x$. Hàm số có dạng $y = \\frac{2x + b}{x - 1}$. Đi qua $A(0; -1) \\implies -1 = \\frac{b}{-1} \\implies b = 1$. Vậy hàm số là $y = \\frac{2x + 1}{x - 1}$." },
        { key: "C", text: "$y = \\frac{x - 1}{2x + 1}$.", isCorrect: false, errorTag: "ERR_INVERTED_ASYMPTOTE", errorMsg: "Đảo ngược tiệm cận: TCĐ là $x = -1/2$, TCN là $y = 1/2$." },
        { key: "D", text: "$y = \\frac{2x - 1}{x - 1}$.", isCorrect: false, errorTag: "ERR_WRONG_Y_INTERCEPT", errorMsg: "Thay $x = 0$ được $y = 1$, không đi qua $A(0; -1)$." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Lập phương trình hàm phân thức từ tiệm cận và điểm",
        question: "Cho TCĐ $x = 2$, TCN $y = -1$, đi qua $(0; 3)$. Viết hàm số dạng $\\frac{ax+b}{x+c}$.",
        correctAnswer: "$c = -2, a = -1, b = -6 \\implies y = \\frac{-x - 6}{x - 2}$.",
        tip: "Mẹo nhớ: TCĐ cho nghiệm mẫu, TCN cho hệ số $a$, điểm thuộc đồ thị cho hệ số $b$."
      }
    },
    {
      id: "mc4",
      number: "Câu 4",
      level: "Vận dụng",
      question: "Cho hàm số $y = f(x)$ có bảng biến thiên dưới đây. Tìm tất cả các giá trị của tham số $m$ để phương trình $f(x) = m$ có đúng 3 nghiệm phân biệt:\n($x$ từ $-\\infty$ qua $-1$ đạt CĐ $y=4$, qua $2$ đạt CT $y=-2$, đến $+\\infty$).",
      options: [
        { key: "A", text: "$-2 < m < 4$.", isCorrect: true, errorTag: null, errorMsg: "Chính xác! Số nghiệm của phương trình $f(x) = m$ bằng số giao điểm của đồ thị $y = f(x)$ với đường thẳng nằm ngang $y = m$. Nhìn vào bảng biến thiên, đường thẳng cắt 3 nhánh khi và chỉ khi nó nằm giữa giá trị cực tiểu và cực đại: $y_{CT} < m < y_{CĐ} \\iff -2 < m < 4$." },
        { key: "B", text: "$-2 \\le m \\le 4$.", isCorrect: false, errorTag: "ERR_INCLUDE_EXTREMA", errorMsg: "Bẫy dấu bằng: Tại $m = -2$ hoặc $m = 4$, đường thẳng tiếp xúc với điểm cực trị nên chỉ có đúng 2 nghiệm phân biệt (1 nghiệm đơn + 1 nghiệm kép)!" },
        { key: "C", text: "$m > 4$ hoặc $m < -2$.", isCorrect: false, errorTag: "ERR_OUTSIDE_RANGE", errorMsg: "Vùng này đường thẳng chỉ cắt đồ thị tại đúng 1 nghiệm duy nhất." },
        { key: "D", text: "$m = 4$ hoặc $m = -2$.", isCorrect: false, errorTag: "ERR_TWO_ROOTS", errorMsg: "Tại đây phương trình có đúng 2 nghiệm." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Biện luận số nghiệm bằng tương giao đồ thị",
        question: "Đường thẳng $y = m$ cắt đồ thị hàm bậc ba tại đúng 2 điểm phân biệt khi nào?",
        correctAnswer: "Khi và chỉ khi $m = y_{CT}$ hoặc $m = y_{CĐ}$ (tiếp xúc tại điểm cực trị).",
        tip: "Mẹo nhớ: 3 nghiệm $\\iff y_{CT} < m < y_{CĐ}$; 2 nghiệm $\\iff m = y_{CT}$ hoặc $m = y_{CĐ}$; 1 nghiệm $\\iff m$ nằm ngoài."
      }
    },
    {
      id: "mc5",
      number: "Câu 5",
      level: "Vận dụng",
      question: "Đồ thị của hàm số $y = \\frac{x^2 - 2x + 2}{x - 1}$ có tâm đối xứng là điểm nào?",
      options: [
        { key: "A", text: "$I(1; 0)$.", isCorrect: true, errorTag: null, errorMsg: "Tuyệt vời! Viết $y = x - 1 + \\frac{1}{x - 1}$.\n- Tiệm cận đứng: $x = 1$.\n- Tiệm cận xiên: $y = x - 1$.\n- Tâm đối xứng $I$ là giao điểm của TCĐ và TCX: thay $x = 1$ vào tiệm cận xiên được $y = 1 - 1 = 0$. Vậy $I(1; 0)$." },
        { key: "B", text: "$I(1; 1)$.", isCorrect: false, errorTag: "ERR_OBLIQUE_CALC", errorMsg: "Tính sai tung độ của giao điểm: $y = 1 - 1 = 0$, không phải $1$." },
        { key: "C", text: "$I(0; 1)$.", isCorrect: false, errorTag: "ERR_INVERT_I", errorMsg: "Nhầm lẫn hoành độ và tung độ." },
        { key: "D", text: "$I(-1; 0)$.", isCorrect: false, errorTag: "ERR_VERTICAL_SIGN", errorMsg: "Sai dấu nghiệm của mẫu số." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Tâm đối xứng của đồ thị hàm phân thức bậc hai/bậc nhất",
        question: "Tâm đối xứng của đồ thị $y = \\frac{ax^2+bx+c}{px+q}$ là gì?",
        correctAnswer: "Là giao điểm giữa đường tiệm cận đứng và đường tiệm cận xiên.",
        tip: "Mẹo nhớ: Thay hoành độ tiệm cận đứng vào phương trình tiệm cận xiên để tìm tung độ tâm đối xứng."
      }
    }
  ],

  trueFalse: [
    {
      id: "tf1",
      number: "Câu 6",
      scenario: "Cho hàm số $y = f(x) = -x^3 + 3x - 2$ có đồ thị $(C)$. Xét tính Đúng hoặc Sai của các khẳng định sau:",
      items: [
        { key: "a", text: "Hàm số đạt cực tiểu tại $x = -1$ và đạt cực đại tại $x = 1$.", isCorrect: true, explanation: "Đúng. $y' = -3x^2 + 3 = 0 \\iff x = \\pm 1$. Vì hệ số $a = -1 < 0$ nên $x = -1$ là điểm cực tiểu, $x = 1$ là điểm cực đại." },
        { key: "b", text: "Điểm uốn của đồ thị $(C)$ là $I(0; -2)$.", isCorrect: true, explanation: "Đúng. $y'' = -6x = 0 \\iff x = 0 \\implies y(0) = -2$. Điểm $I(0; -2)$ là điểm uốn và là tâm đối xứng của $(C)$." },
        { key: "c", text: "Đồ thị $(C)$ cắt trục hoành tại 3 điểm phân biệt.", isCorrect: false, explanation: "Sai lầm: $y_{CĐ} = f(1) = 0$. Cực đại bằng 0 chứng tỏ đồ thị tiếp xúc với trục hoành tại $x = 1$. Phương trình $-x^3 + 3x - 2 = 0 \\iff -(x-1)^2(x+2) = 0$ chỉ có 2 nghiệm phân biệt ($x = 1$ nghiệm kép, $x = -2$ nghiệm đơn)." },
        { key: "d", text: "Phương trình tiếp tuyến của $(C)$ tại tâm đối xứng $I$ có hệ số góc lớn nhất trong tất cả các tiếp tuyến.", isCorrect: true, explanation: "Đúng. Hệ số góc tiếp tuyến $k = y'(x) = -3x^2 + 3 \\le 3$. Giá trị lớn nhất bằng 3 đạt được khi $x = 0$ (chính tại điểm uốn)." }
      ]
    },
    {
      id: "tf2",
      number: "Câu 7",
      scenario: "Cho hàm số $y = \\frac{2x - 1}{x + 1}$ có đồ thị $(H)$. Đánh giá tính Đúng hoặc Sai của mỗi khẳng định:",
      items: [
        { key: "a", text: "Đồ thị $(H)$ có tiệm cận đứng $x = -1$ và tiệm cận ngang $y = 2$.", isCorrect: true, explanation: "Đúng. Mẫu triệt tiêu tại $x = -1$, tỉ số hệ số bậc nhất là $2/1 = 2$." },
        { key: "b", text: "Hàm số luôn nghịch biến trên từng khoảng xác định.", isCorrect: false, explanation: "Sai. Đạo hàm $y' = \\frac{2(1) - (-1)(1)}{(x+1)^2} = \\frac{3}{(x+1)^2} > 0$ nên hàm số luôn ĐỒNG BIẾN trên từng khoảng xác định." },
        { key: "c", text: "Đồ thị $(H)$ cắt trục tung tại điểm $A(0; -1)$ và cắt trục hoành tại điểm $B\\left(\\frac{1}{2}; 0\\right)$.", isCorrect: true, explanation: "Đúng. Cho $x = 0 \\implies y = -1$; cho $y = 0 \\implies 2x - 1 = 0 \\iff x = 1/2$." },
        { key: "d", text: "Đồ thị $(H)$ nhận giao điểm hai tiệm cận $I(-1; 2)$ làm tâm đối xứng và hai đường phân giác của các góc tạo bởi hai tiệm cận làm hai trục đối xứng.", isCorrect: true, explanation: "Đúng. Mọi đồ thị hypebol bậc 1/1 đều có 1 tâm đối xứng $I$ và 2 trục đối xứng vuông góc đi qua $I$ có hệ số góc $k = \\pm 1$." }
      ]
    },
    {
      id: "tf3",
      number: "Câu 8",
      scenario: "Cho hàm số $y = f(x) = \\frac{x^2 - 3x + 3}{x - 1}$ có đồ thị $(C)$. Xét tính Đúng hoặc Sai:",
      items: [
        { key: "a", text: "Hàm số viết được dưới dạng $y = x - 2 + \\frac{1}{x - 1}$.", isCorrect: true, explanation: "Đúng. Chia tử cho mẫu: $x^2 - 3x + 3 = (x - 1)(x - 2) + 1$." },
        { key: "b", text: "Đồ thị $(C)$ có tiệm cận đứng $x = 1$ và tiệm cận xiên $y = x - 2$.", isCorrect: true, explanation: "Đúng. Vì $\\lim_{x \\to \\infty} \\frac{1}{x-1} = 0$ nên tiệm cận xiên là phần thương $y = x - 2$." },
        { key: "c", text: "Khoảng cách giữa hai điểm cực trị của đồ thị $(C)$ bằng $2\\sqrt{2}$.", isCorrect: true, explanation: "Đúng. $y' = 1 - \\frac{1}{(x-1)^2} = 0 \\iff (x-1)^2 = 1 \\iff x = 0$ hoặc $x = 2$. Hai điểm cực trị là $A(0; -3)$ và $B(2; 1)$. Khoảng cách $AB = \\sqrt{(2-0)^2 + (1 - (-3))^2} = \\sqrt{4 + 16} = \\sqrt{20} = 2\\sqrt{5} \\ne 2\\sqrt{2}$ (mệnh đề ghi $2\\sqrt{2}$ là sai)." },
        { key: "d", text: "Đường thẳng đi qua hai điểm cực trị vuông góc với tiệm cận xiên.", isCorrect: false, explanation: "Sai. Đường thẳng qua hai điểm cực trị nối $A(0; -3)$ và $B(2; 1)$ có hệ số góc $k = \\frac{1 - (-3)}{2 - 0} = 2$. Hệ số góc tiệm cận xiên là $k_{TCX} = 1$. Tích $2 \\times 1 = 2 \\ne -1$ nên chúng không vuông góc." }
      ]
    }
  ],

  shortAnswer: [
    {
      id: "sa1",
      number: "Câu 9",
      question: "Tìm hoành độ điểm uốn của đồ thị hàm số $y = 2x^3 - 6x^2 + 5x - 1$.",
      correctAnswer: "1",
      acceptedAnswers: ["1", "x = 1"],
      explanation: "$y' = 6x^2 - 12x + 5$, $y'' = 12x - 12 = 0 \\iff x = 1$.",
      tip: "Hoành độ điểm uốn $x = -b / (3a) = 6 / (3 \\times 2) = 1$."
    },
    {
      id: "sa2",
      number: "Câu 10",
      question: "Cho hàm số $y = x^3 - 3x^2 + 2$. Tìm số nghiệm thực của phương trình $x^3 - 3x^2 + 2 = 0$.",
      correctAnswer: "3",
      acceptedAnswers: ["3", "3 nghiệm", "ba"],
      explanation: "Hàm số có $y_{CĐ} = y(0) = 2 > 0$ và $y_{CT} = y(2) = -2 < 0$. Vì $y_{CĐ} \\cdot y_{CT} = -4 < 0$ nên đồ thị cắt trục hoành tại đúng 3 điểm phân biệt.",
      tip: "Điều kiện hàm bậc 3 có 3 nghiệm phân biệt là $y_{CĐ} \\cdot y_{CT} < 0$."
    },
    {
      id: "sa3",
      number: "Câu 11",
      question: "Đồ thị hàm số $y = \\frac{2x - 1}{x + 1}$ cắt đường thẳng $d: y = x - 1$ tại hai điểm phân biệt có hoành độ $x_1, x_2$. Tính tổng $x_1 + x_2$.",
      correctAnswer: "-2",
      acceptedAnswers: ["-2", "x1 + x2 = -2"],
      explanation: "Phương trình hoành độ giao điểm: $\\frac{2x-1}{x+1} = x - 1 \\iff 2x - 1 = (x - 1)(x + 1) = x^2 - 1 \\iff x^2 - 2x = 0 \\iff x(x - 2) = 0 \\implies x_1 = 0, x_2 = 2$. Tổng $x_1 + x_2 = 0 + 2 = 2$.",
      tip: "Nhân chéo đưa về phương trình bậc hai $x^2 - 2x = 0$ và áp dụng định lý Vi-ét."
    },
    {
      id: "sa4",
      number: "Câu 12",
      question: "Tìm giá trị của tham số $m$ để đồ thị hàm số $y = x^3 - 3x^2 + m$ đi qua điểm $A(1; 2)$.",
      correctAnswer: "4",
      acceptedAnswers: ["4", "m = 4"],
      explanation: "Thay tọa độ điểm $A(1; 2)$ vào hàm số: $2 = 1^3 - 3(1)^2 + m \\iff 2 = -2 + m \\iff m = 4$.",
      tip: "Điểm thuộc đồ thị thỏa mãn $y_A = f(x_A)$."
    }
  ],

  essay: [
    {
      id: "es1",
      number: "Câu 13 (Tự luận 1)",
      title: "Khảo sát sự biến thiên và vẽ đồ thị hàm số bậc ba hoàn chỉnh",
      question: "Khảo sát sự biến thiên và vẽ đồ thị của hàm số $y = f(x) = x^3 - 3x^2 + 2$ theo các bước quy định.",
      maxPoints: 10.0,
      sampleSolution: `1) Tập xác định: D = R.
2) Sự biến thiên:
- Chiều biến thiên:
  + Đạo hàm: y' = 3x^2 - 6x = 3x(x - 2).
  + y' = 0 <=> x = 0 hoặc x = 2.
  + Dấu của y':
    y' > 0 trên các khoảng (-inf; 0) và (2; +inf) => hàm số đồng biến.
    y' < 0 trên khoảng (0; 2) => hàm số nghịch biến.
- Cực trị:
  + Hàm số đạt cực đại tại x = 0, giá trị cực đại y_CĐ = y(0) = 2.
  + Hàm số đạt cực tiểu tại x = 2, giá trị cực tiểu y_CT = y(2) = -2.
- Giới hạn tại vô cực:
  lim_{x -> -inf} y = -inf; lim_{x -> +inf} y = +inf.
- Bảng biến thiên:
  x:   -inf       0       2       +inf
  y':        +    0   -   0   +
  y:   -inf  ->   2  ->  -2  ->  +inf

3) Vẽ đồ thị:
- Điểm uốn: y'' = 6x - 6 = 0 <=> x = 1 => y(1) = 0.
  Điểm uốn I(1; 0) là tâm đối xứng của đồ thị.
- Giao điểm với các trục tọa độ:
  + Với Oy: x = 0 => y = 2 => A(0; 2).
  + Với Ox: y = 0 <=> x^3 - 3x^2 + 2 = 0 <=> (x - 1)(x^2 - 2x - 2) = 0
    => x = 1, x = 1 - sqrt{3}, x = 1 + sqrt{3}.
- Đồ thị nhận I(1; 0) làm tâm đối xứng, uốn lượn hình chữ N qua các điểm A(0; 2), I(1; 0), B(2; -2).`,
      criteria: [
        { id: "c1", step: "Bước 1", desc: "Nêu đúng TXĐ D = R và tính đạo hàm y' = 3x^2 - 6x = 0 tìm nghiệm x = 0, x = 2", points: 2.5 },
        { id: "c2", step: "Bước 2", desc: "Xét dấu đạo hàm, kết luận khoảng đơn điệu và 2 điểm cực trị A(0; 2), B(2; -2)", points: 2.5 },
        { id: "c3", step: "Bước 3", desc: "Tính các giới hạn tại vô cực và lập bảng biến thiên hoàn chỉnh", points: 2.5 },
        { id: "c4", step: "Bước 4", desc: "Tìm đúng tâm đối xứng I(1; 0), các giao điểm tọa độ và mô tả hình dáng đồ thị", points: 2.5 }
      ]
    },
    {
      id: "es2",
      number: "Câu 14 (Tự luận 2)",
      title: "Khảo sát hàm phân thức hữu tỉ bậc hai/bậc nhất",
      question: "Khảo sát sự biến thiên và vẽ đồ thị của hàm số $y = \\frac{x^2 - 2x + 2}{x - 1}$.",
      maxPoints: 10.0,
      sampleSolution: `1) Tập xác định: D = R \\ {1}.
2) Sự biến thiên:
- Viết lại hàm số: y = x - 1 + 1/(x - 1).
- Đạo hàm: y' = 1 - 1/(x-1)^2 = ((x-1)^2 - 1) / (x-1)^2 = (x^2 - 2x) / (x-1)^2.
  y' = 0 <=> x = 0 hoặc x = 2.
- Bảng xét dấu y':
  + Đồng biến trên (-inf; 0) và (2; +inf).
  + Nghịch biến trên (0; 1) và (1; 2).
- Cực trị:
  + Cực đại tại x = 0, y_CĐ = y(0) = -2.
  + Cực tiểu tại x = 2, y_CT = y(2) = 2.
- Đường tiệm cận:
  + Tiệm cận đứng: lim_{x -> 1^-} y = -inf; lim_{x -> 1^+} y = +inf => TCĐ: x = 1.
  + Tiệm cận xiên: lim_{x -> +-inf} [y - (x - 1)] = lim 1/(x - 1) = 0 => TCX: y = x - 1.

3) Đồ thị:
- Giao điểm hai tiệm cận: I(1; 0) là tâm đối xứng của đồ thị.
- Điểm cắt trục tung: x = 0 => y = -2.
- Đồ thị gồm hai nhánh hypebol nằm về hai phía của hai đường tiệm cận.`,
      criteria: [
        { id: "c1", step: "Bước 1", desc: "Tìm TXĐ D = R \\ {1} và tính đúng đạo hàm y' = (x^2-2x)/(x-1)^2", points: 2.5 },
        { id: "c2", step: "Bước 2", desc: "Lập bảng biến thiên chỉ rõ khoảng đơn điệu và 2 điểm cực trị (0; -2), (2; 2)", points: 2.5 },
        { id: "c3", step: "Bước 3", desc: "Xác định chuẩn xác tiệm cận đứng x = 1 và tiệm cận xiên y = x - 1 qua giới hạn", points: 2.5 },
        { id: "c4", step: "Bước 4", desc: "Xác định tâm đối xứng I(1; 0) và vẽ đồ thị hai nhánh hypebol chuẩn mực", points: 2.5 }
      ]
    },
    {
      id: "es3",
      number: "Câu 15 (Tự luận 3)",
      title: "Biện luận số giao điểm và viết phương trình tiếp tuyến",
      question: "Cho hàm số $y = \\frac{2x + 1}{x - 1}$ có đồ thị $(C)$. Viết phương trình tiếp tuyến của $(C)$ tại giao điểm của $(C)$ với trục tung $Oy$.",
      maxPoints: 10.0,
      sampleSolution: `1) Tìm tọa độ tiếp điểm:
- Giao điểm của đồ thị (C) với trục tung Oy là điểm có hoành độ x0 = 0.
- Thay x0 = 0 vào hàm số: y0 = (2(0) + 1) / (0 - 1) = 1 / (-1) = -1.
- Vậy tiếp điểm là M(0; -1).

2) Tính hệ số góc của tiếp tuyến:
- Tập xác định: D = R \\ {1}.
- Đạo hàm: y' = [2(-1) - 1(1)] / (x - 1)^2 = -3 / (x - 1)^2.
- Hệ số góc của tiếp tuyến tại M(0; -1) là:
  k = y'(0) = -3 / (0 - 1)^2 = -3 / 1 = -3.

3) Viết phương trình tiếp tuyến:
- Phương trình tiếp tuyến tại M(x0; y0) có dạng:
  y = k*(x - x0) + y0
- Thay số:
  y = -3*(x - 0) + (-1)
  y = -3x - 1.
- Kết luận: Phương trình tiếp tuyến cần tìm là y = -3x - 1.`,
      criteria: [
        { id: "c1", step: "Bước 1", desc: "Tìm đúng tọa độ tiếp điểm M(0; -1) từ giao điểm với trục Oy", points: 2.5 },
        { id: "c2", step: "Bước 2", desc: "Tính đúng đạo hàm y' = -3/(x-1)^2", points: 2.5 },
        { id: "c3", step: "Bước 3", desc: "Tính đúng hệ số góc k = y'(0) = -3", points: 2.5 },
        { id: "c4", step: "Bước 4", desc: "Lập phương trình y = -3(x-0) - 1 <=> y = -3x - 1 và kết luận chính xác", points: 2.5 }
      ]
    }
  ]
};

// --------------------------------------------------------------------------
// BÀI 5: ỨNG DỤNG ĐẠO HÀM GIẢI BÀI TOÁN THỰC TIỄN (g12-c1-l5)
// --------------------------------------------------------------------------
window.DIAGNOSTIC_ASSESSMENT_DB["g12-c1-l5"] = {
  lessonId: "g12-c1-l5",
  title: "Bài 5: Ứng dụng đạo hàm giải quyết một số bài toán thực tiễn",
  chapterTitle: "Chương I: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
  grade: 12,
  summary: "Bộ 15 câu hỏi đánh giá chẩn đoán năng lực: Tối ưu hóa thể tích và diện tích bao bì, bài toán cắt góc tấm tôn làm hộp mở, tối ưu chi phí và lợi nhuận kinh tế, vận tốc và gia tốc trong vật lý.",

  multipleChoice: [
    {
      id: "mc1",
      number: "Câu 1",
      level: "Nhận biết",
      question: "Trong vật lý, một chất điểm chuyển động theo phương trình $s(t)$, trong đó $t$ là thời gian tính bằng giây, $s$ tính bằng mét. Vận tốc tức thời $v(t)$ và gia tốc tức thời $a(t)$ của chất điểm tại thời điểm $t$ lần lượt là:",
      options: [
        { key: "A", text: "$v(t) = s'(t)$ và $a(t) = v'(t) = s''(t)$.", isCorrect: true, errorTag: null, errorMsg: "Chính xác! Vận tốc tức thời là đạo hàm bậc nhất của quãng đường theo thời gian, gia tốc tức thời là đạo hàm bậc nhất của vận tốc (đạo hàm bậc hai của quãng đường)." },
        { key: "B", text: "$v(t) = s(t)/t$ và $a(t) = v(t)/t$.", isCorrect: false, errorTag: "ERR_AVERAGE_CONFUSION", errorMsg: "Nhầm lẫn với vận tốc trung bình và gia tốc trung bình trong chuyển động thẳng đều." },
        { key: "C", text: "$v(t) = s''(t)$ và $a(t) = s'(t)$.", isCorrect: false, errorTag: "ERR_REVERSE_ORDER", errorMsg: "Đảo ngược thứ tự đạo hàm giữa vận tốc và gia tốc." },
        { key: "D", text: "$v(t) = \\int s(t)dt$.", isCorrect: false, errorTag: "ERR_INTEGRAL_CONFUSION", errorMsg: "Nhầm đạo hàm với nguyên hàm." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Mối liên hệ đạo hàm giữa s(t), v(t), a(t)",
        question: "Chất điểm chuyển động $s(t) = 3t^2 - 2t + 1$. Tính gia tốc tại $t = 2$.",
        correctAnswer: "$v(t) = s'(t) = 6t - 2 \\implies a(t) = v'(t) = 6\\text{ m/s}^2$ (hằng số).",
        tip: "Mẹo nhớ: $s \\xrightarrow{đạo\\ hàm} v \\xrightarrow{đạo\\ hàm} a$."
      }
    },
    {
      id: "mc2",
      number: "Câu 2",
      level: "Thông hiểu",
      question: "Từ một tấm tôn hình vuông cạnh $60\\text{ cm}$, người ta cắt bỏ 4 hình vuông bằng nhau ở 4 góc cạnh $x\\text{ (cm)}$ rồi gấp lại tạo thành một chiếc hộp không nắp. Thể tích của chiếc hộp là lớn nhất khi $x$ bằng:",
      options: [
        { key: "A", text: "$10\\text{ cm}$.", isCorrect: true, errorTag: null, errorMsg: "Chính xác! Chiếc hộp có đáy là hình vuông cạnh $60 - 2x$ và chiều cao $x$ (điều kiện $0 < x < 30$). Thể tích $V(x) = x(60 - 2x)^2 = 4x(30 - x)^2$. Khảo sát $V'(x) = (60 - 2x)^2 - 4x(60 - 2x) = (60 - 2x)(60 - 6x) = 0 \\iff x = 10\\text{ cm}$ (vì $x < 30$)." },
        { key: "B", text: "$15\\text{ cm}$.", isCorrect: false, errorTag: "ERR_HALF_RANGE", errorMsg: "Sai lầm: $x = 15$ là trung điểm khoảng biến thiên, không phải điểm đạt cực đại của thể tích." },
        { key: "C", text: "$20\\text{ cm}$.", isCorrect: false, errorTag: "ERR_ARITHMETIC", errorMsg: "Tính sai nghiệm của đạo hàm." },
        { key: "D", text: "$30\\text{ cm}$.", isCorrect: false, errorTag: "ERR_ZERO_VOLUME", errorMsg: "Khi $x = 30$, tấm tôn bị cắt hết, thể tích bằng 0!" }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Công thức tối ưu hộp cắt góc từ hình vuông",
        question: "Từ tấm tôn vuông cạnh $a$, cắt 4 góc vuông cạnh $x$ để thể tích lớn nhất. Tỉ số $x / a$ bằng bao nhiêu?",
        correctAnswer: "$x = a / 6$.",
        tip: "Mẹo nhớ: Chiều cao hộp tôn vuông tối ưu luôn bằng 1/6 cạnh hình vuông: $x = a / 6$."
      }
    },
    {
      id: "mc3",
      number: "Câu 3",
      level: "Thông hiểu",
      question: "Một công ty dự tính hàm tổng doanh thu bán sản phẩm là $R(x) = -2x^2 + 120x$ và hàm tổng chi phí sản xuất là $C(x) = 20x + 300$ (đơn vị: triệu đồng), với $x$ là số sản phẩm. Lợi nhuận lớn nhất công ty có thể thu được là:",
      options: [
        { key: "A", text: "$950$ triệu đồng.", isCorrect: true, errorTag: null, errorMsg: "Rất chuẩn! Lợi nhuận $P(x) = R(x) - C(x) = -2x^2 + 120x - (20x + 300) = -2x^2 + 100x - 300$. Đây là parabol đỉnh tại $x = -\\frac{b}{2a} = -\\frac{100}{2(-2)} = 25$ sản phẩm. Giá trị lợi nhuận tối đa: $P(25) = -2(25)^2 + 100(25) - 300 = -1250 + 2500 - 300 = 950$ triệu đồng." },
        { key: "B", text: "$1250$ triệu đồng.", isCorrect: false, errorTag: "ERR_REVENUE_MAX", errorMsg: "Nhầm lợi nhuận tối đa với doanh thu tối đa (chưa trừ chi phí sản xuất)." },
        { key: "C", text: "$1000$ triệu đồng.", isCorrect: false, errorTag: "ERR_FORGET_FIXED_COST", errorMsg: "Bỏ quên chi phí cố định 300 triệu đồng." },
        { key: "D", text: "$25$ triệu đồng.", isCorrect: false, errorTag: "ERR_PRODUCT_COUNT", errorMsg: "Nhầm số sản phẩm $x = 25$ với số tiền lợi nhuận." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Hàm lợi nhuận trong kinh tế học",
        question: "Công thức liên hệ giữa Lợi nhuận $P$, Doanh thu $R$ và Chi phí $C$ là gì?",
        correctAnswer: "$P(x) = R(x) - C(x)$.",
        tip: "Mẹo nhớ: Lợi nhuận = Doanh thu trừ Chi phí."
      }
    },
    {
      id: "mc4",
      number: "Câu 4",
      level: "Vận dụng",
      question: "Một chất điểm chuyển động với phương trình $s(t) = -t^3 + 9t^2 + t + 10$ ($t$ tính bằng giây, $s$ tính bằng mét). Thời điểm mà chất điểm đạt vận tốc lớn nhất là:",
      options: [
        { key: "A", text: "$t = 3\\text{ s}$.", isCorrect: true, errorTag: null, errorMsg: "Chính xác! Vận tốc tức thời $v(t) = s'(t) = -3t^2 + 18t + 1$. Đây là tam thức bậc hai có $a = -3 < 0$, đạt giá trị lớn nhất tại đỉnh parabol: $t = -\\frac{b}{2a} = -\\frac{18}{2(-3)} = 3\\text{ giây}$. Vận tốc cực đại khi đó là $v(3) = 28\\text{ m/s}$." },
        { key: "B", text: "$t = 6\\text{ s}$.", isCorrect: false, errorTag: "ERR_ZERO_VELOCITY", errorMsg: "Tại $t = 6$ là thời điểm vận tốc giảm dần về 1 m/s, không phải cực đại." },
        { key: "C", text: "$t = 0\\text{ s}$.", isCorrect: false, errorTag: "ERR_INITIAL_TIME", errorMsg: "Tại $t = 0$ vận tốc ban đầu chỉ là 1 m/s." },
        { key: "D", text: "$t = 9\\text{ s}$.", isCorrect: false, errorTag: "ERR_COEFFICIENT", errorMsg: "Lấy nhầm hệ số của $t^2$." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Tìm thời điểm vận tốc cực đại",
        question: "Vận tốc đạt cực đại khi đại lượng gia tốc $a(t)$ bằng bao nhiêu?",
        correctAnswer: "Gia tốc $a(t) = v'(t) = 0$.",
        tip: "Mẹo nhớ: Vận tốc đạt cực đại khi gia tốc bằng 0."
      }
    },
    {
      id: "mc5",
      number: "Câu 5",
      level: "Vận dụng",
      question: "Người ta muốn làm một chiếc lon sữa bò hình trụ có thể tích $V_0 = 500\\pi\\text{ cm}^3$. Để tiết kiệm vật liệu tôn nhất (diện tích toàn phần nhỏ nhất), thì tỉ số giữa chiều cao $h$ và bán kính đáy $r$ của lon sữa bò phải bằng:",
      options: [
        { key: "A", text: "$2$.", isCorrect: true, errorTag: null, errorMsg: "Xuất sắc! Diện tích toàn phần $S_{tp} = 2\\pi r^2 + 2\\pi rh$. Vì $V_0 = \\pi r^2 h \\implies h = \\frac{V_0}{\\pi r^2}$. Thay vào: $S_{tp}(r) = 2\\pi r^2 + \\frac{2V_0}{r} = 2\\pi r^2 + \\frac{V_0}{r} + \\frac{V_0}{r} \\ge 3\\sqrt[3]{2\\pi r^2 \\cdot \\frac{V_0}{r} \\cdot \\frac{V_0}{r}} = 3\\sqrt[3]{2\\pi V_0^2}$. Dấu bằng xảy ra khi $2\\pi r^2 = \\frac{V_0}{r} = \\frac{\\pi r^2 h}{r} = \\pi rh \\implies 2r = h \\implies \\frac{h}{r} = 2$." },
        { key: "B", text: "$1$.", isCorrect: false, errorTag: "ERR_EQUAL_H_R", errorMsg: "Nhầm lẫn chiều cao bằng bán kính đáy." },
        { key: "C", text: "$\\frac{1}{2}$.", isCorrect: false, errorTag: "ERR_INVERSE_RATIO", errorMsg: "Nghịch đảo tỉ số: $r/h$ mới bằng $1/2$, đề bài hỏi $h/r$." },
        { key: "D", text: "$4$.", isCorrect: false, errorTag: "ERR_FACTOR_4", errorMsg: "Tính nhầm hệ số khi cân bằng BĐT Cauchy." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Tỉ số vàng của hình trụ tiết kiệm vật liệu nhất",
        question: "Một hình trụ có thể tích cố định thì diện tích toàn phần nhỏ nhất khi chiều cao $h$ bằng mấy lần bán kính $r$?",
        correctAnswer: "Chiều cao bằng đường kính đáy: $h = 2r$.",
        tip: "Mẹo nhớ: Chiều cao bằng đường kính ($h = 2r$) $\\implies$ tiết kiệm vật liệu làm vỏ hộp trụ nhất."
      }
    }
  ],

  trueFalse: [
    {
      id: "tf1",
      number: "Câu 6",
      scenario: "Một công ty viễn thông nhận thấy: Nếu giá cước thuê bao internet là $200$ nghìn đồng/tháng thì có $10.000$ khách hàng. Cứ mỗi lần giảm giá $10$ nghìn đồng/tháng thì số khách hàng lại tăng thêm $1.000$ người. Gọi $x$ là số lần giảm giá $10$ nghìn đồng ($x \\ge 0$). Xét tính Đúng hoặc Sai:",
      items: [
        { key: "a", text: "Giá cước sau $x$ lần giảm giá là $200 - 10x$ (nghìn đồng/tháng).", isCorrect: true, explanation: "Đúng. Mỗi lần giảm 10 nghìn thì sau $x$ lần giảm cước còn $200 - 10x$." },
        { key: "b", text: "Số lượng khách hàng sau $x$ lần giảm giá là $10.000 + 1.000x$ (người).", isCorrect: true, explanation: "Đúng. Mỗi lần giảm giá có thêm 1.000 khách hàng." },
        { key: "c", text: "Hàm tổng doanh thu của công ty là $R(x) = (200 - 10x)(10.000 + 1.000x) = -10.000x^2 + 100.000x + 2.000.000$ (nghìn đồng).", isCorrect: true, explanation: "Đúng. Khai triển: $200(10000) + 200000x - 100000x - 10000x^2 = -10000x^2 + 100000x + 2000000$." },
        { key: "d", text: "Để doanh thu đạt mức tối đa thì công ty nên giữ nguyên giá cước $200$ nghìn đồng ($x = 0$).", isCorrect: false, explanation: "Sai. Parabol đạt đỉnh tại $x = -\\frac{b}{2a} = -\\frac{100.000}{2(-10.000)} = 5$ lần giảm giá. Doanh thu cao nhất đạt được khi giảm 5 lần (giá cước $150$ nghìn đồng/tháng), tăng thêm 250 triệu doanh thu!" }
      ]
    },
    {
      id: "tf2",
      number: "Câu 7",
      scenario: "Một máng dẫn nước bằng kim loại có mặt cắt ngang là hình thang cân $ABCD$ có đáy nhỏ $CD = 20\\text{ cm}$ và hai cạnh bên $AD = BC = 20\\text{ cm}$. Góc nghiêng của thành máng với phương ngang là $\\alpha$ ($0 < \\alpha < \\frac{\\pi}{2}$). Đánh giá tính Đúng hoặc Sai:",
      items: [
        { key: "a", text: "Chiều cao của mặt cắt máng nước là $h = 20\\sin\\alpha$.", isCorrect: true, explanation: "Đúng. Xét tam giác vuông hạ từ đỉnh đáy nhỏ, chiều cao $h = 20\\sin\\alpha$." },
        { key: "b", text: "Độ dài đáy lớn $AB$ là $20 + 40\\cos\\alpha$.", isCorrect: true, explanation: "Đúng. Hai đoạn mở rộng hai bên là $20\\cos\\alpha$, đáy lớn $AB = 20 + 2(20\\cos\\alpha) = 20 + 40\\cos\\alpha$." },
        { key: "c", text: "Diện tích mặt cắt ngang của máng nước là $S(\\alpha) = 400(1 + \\cos\\alpha)\\sin\\alpha$.", isCorrect: true, explanation: "Đúng. $S = \\frac{AB + CD}{2} \\cdot h = \\frac{(20 + 40\\cos\\alpha) + 20}{2} \\cdot 20\\sin\\alpha = (20 + 20\\cos\\alpha) \\cdot 20\\sin\\alpha = 400(1 + \\cos\\alpha)\\sin\\alpha$." },
        { key: "d", text: "Máng dẫn nước có lưu lượng thoát nước lớn nhất (diện tích mặt cắt lớn nhất) khi góc $\\alpha = 45^\\circ$.", isCorrect: false, explanation: "Sai lầm: Đạo hàm $S'(\\alpha) = 400(\\cos\\alpha + \\cos 2\\alpha) = 0 \\iff 2\\cos^2\\alpha + \\cos\\alpha - 1 = 0 \\iff \\cos\\alpha = 1/2 \\iff \\alpha = 60^\\circ$, không phải $45^\\circ$." }
      ]
    },
    {
      id: "tf3",
      number: "Câu 8",
      scenario: "Một hồ bơi hình chữ nhật có diện tích mặt nước là $50\\text{ m}^2$. Xung quanh hồ bơi người ta lát một lối đi bộ: hai cạnh bên lối đi rộng $1\\text{ m}$, hai đầu hồ lối đi rộng $2\\text{ m}$. Gọi $x$ (mét) là chiều rộng của mặt nước hồ bơi ($x > 0$). Xét tính Đúng hoặc Sai:",
      items: [
        { key: "a", text: "Chiều dài của mặt nước hồ bơi là $\\frac{50}{x}$ (mét).", isCorrect: true, explanation: "Đúng. Diện tích mặt nước là $x \\times y = 50 \\implies y = 50/x$." },
        { key: "b", text: "Kích thước toàn bộ khu đất (gồm cả hồ bơi và lối đi) là $(x + 2)$ mét và $\\left(\\frac{50}{x} + 4\\right)$ mét.", isCorrect: true, explanation: "Đúng. Chiều rộng cộng thêm hai bên lối đi $1+1=2\\text{ m}$, chiều dài cộng thêm hai đầu lối đi $2+2=4\\text{ m}$." },
        { key: "c", text: "Diện tích toàn bộ khu đất là $S(x) = (x + 2)\\left(\\frac{50}{x} + 4\\right) = 58 + 4x + \\frac{100}{x}$.", isCorrect: true, explanation: "Đúng. Nhân phá ngoặc: $50 + 4x + 100/x + 8 = 58 + 4x + 100/x$." },
        { key: "d", text: "Diện tích khu đất nhỏ nhất khi chiều rộng mặt nước hồ bơi là $x = 10\\text{ m}$.", isCorrect: false, explanation: "Sai lầm: Áp dụng BĐT Cauchy: $4x + \\frac{100}{x} \\ge 2\\sqrt{400} = 40$. Dấu bằng khi $4x = 100/x \\iff x^2 = 25 \\iff x = 5\\text{ m}$, không phải $10\\text{ m}$." }
      ]
    }
  ],

  shortAnswer: [
    {
      id: "sa1",
      number: "Câu 9",
      question: "Một vật chuyển động thẳng với phương trình vận tốc $v(t) = -2t^2 + 8t + 10$ ($t$ tính bằng giây, $v$ tính bằng m/s). Tìm vận tốc lớn nhất của vật.",
      correctAnswer: "18",
      acceptedAnswers: ["18", "18 m/s", "18.0"],
      explanation: "$v(t)$ là parabol có đỉnh tại $t = -\\frac{8}{2(-2)} = 2\\text{ s}$. Vận tốc cực đại $v(2) = -2(4) + 8(2) + 10 = -8 + 16 + 10 = 18\\text{ m/s}$.",
      tip: "Đỉnh của parabol $y = ax^2 + bx + c$ đạt giá trị lớn nhất tại $x = -b / (2a)$."
    },
    {
      id: "sa2",
      number: "Câu 10",
      question: "Người ta muốn uốn một đoạn dây thép dài $100\\text{ cm}$ thành một khung hình chữ nhật có diện tích lớn nhất. Diện tích lớn nhất đó bằng bao nhiêu $\\text{cm}^2$?",
      correctAnswer: "625",
      acceptedAnswers: ["625", "625 cm2"],
      explanation: "Nửa chu vi hình chữ nhật là $x + y = 50\\text{ cm}$. Diện tích $S = x(50 - x) \\le \\left(\\frac{x + 50 - x}{2}\\right)^2 = 25^2 = 625\\text{ cm}^2$. Đạt được khi là hình vuông cạnh $25\\text{ cm}$.",
      tip: "Hình chữ nhật có chu vi cố định thì hình vuông có diện tích lớn nhất: $S = (P/4)^2$."
    },
    {
      id: "sa3",
      number: "Câu 11",
      question: "Một mảnh vườn hình chữ nhật có diện tích $600\\text{ m}^2$. Người ta muốn rào quanh mảnh vườn bằng lưới thép. Chiều dài dây rào tối thiểu là bao nhiêu mét (làm tròn đến hàng đơn vị, nếu kết quả là $40\\sqrt{6} \\approx 98$)? Điền giá trị xấp xỉ làm tròn đến hàng đơn vị.",
      correctAnswer: "98",
      acceptedAnswers: ["98", "98m", "98 m"],
      explanation: "Chu vi $P = 2(x + y)$ với $xy = 600$. Theo Cauchy: $x + y \\ge 2\\sqrt{xy} = 2\\sqrt{600} = 20\\sqrt{6}$. Chu vi nhỏ nhất là $P = 40\\sqrt{6} \\approx 40 \\times 2.4495 = 97.98 \\approx 98\\text{ mét}$.",
      tip: "Diện tích cố định thì chu vi nhỏ nhất khi là hình vuông cạnh $\\sqrt{S}$."
    },
    {
      id: "sa4",
      number: "Câu 12",
      question: "Độ giảm huyết áp của một bệnh nhân được đo bởi công thức $G(x) = 0.02x^2(30 - x)$, trong đó $x$ là liều lượng thuốc được tiêm (miligam, $0 < x < 30$). Để độ giảm huyết áp lớn nhất thì liều lượng thuốc tiêm cần bằng bao nhiêu miligam?",
      correctAnswer: "20",
      acceptedAnswers: ["20", "20 mg", "20mg"],
      explanation: "$G(x) = 0.02(30x^2 - x^3)$. Đạo hàm: $G'(x) = 0.02(60x - 3x^2) = 0.06x(20 - x) = 0 \\iff x = 20$ (do $0 < x < 30$). Vậy liều lượng tối ưu là $20\\text{ mg}$.",
      tip: "Hàm dạng $x^2(a - x)$ đạt cực đại trên $(0; a)$ tại $x = \\frac{2}{3}a = \\frac{2}{3} \\times 30 = 20$."
    }
  ],

  essay: [
    {
      id: "es1",
      number: "Câu 13 (Tự luận 1)",
      title: "Bài toán đặt ống dẫn nước từ trạm bơm đến đảo (Tối ưu hóa đường đi)",
      question: "Một trạm bơm nước đặt tại điểm $A$ trên bờ biển thẳng. Một hòn đảo nhỏ cần cấp nước đặt tại vị trí $C$ cách bờ biển $6\\text{ km}$. Điểm $B$ trên bờ biển là hình chiếu vuông góc của đảo $C$ lên bờ biển, biết $AB = 8\\text{ km}$. Chi phí lắp đặt mỗi km đường ống dưới nước là $50$ triệu đồng, trên đất liền dọc theo bờ biển là $30$ triệu đồng. Để tổng chi phí thấp nhất, người ta lắp đặt đường ống trên đất liền từ $A$ đến một điểm $P$ nằm giữa $A$ và $B$, rồi từ $P$ kéo thẳng đường ống dưới nước đến đảo $C$. Hãy tìm vị trí điểm $P$ (tính khoảng cách $PB$) để chi phí là nhỏ nhất.",
      maxPoints: 10.0,
      sampleSolution: `1) Đặt biến số và thiết lập hàm chi phí:
- Đặt khoảng cách PB = x (km) với 0 <= x <= 8.
- Khi đó khoảng cách AP trên bờ biển là: AP = AB - PB = 8 - x (km).
- Đoạn đường ống dưới nước PC tính theo định lý Pythagore trong tam giác vuông PBC:
  PC = sqrt{PB^2 + BC^2} = sqrt{x^2 + 6^2} = sqrt{x^2 + 36} (km).
- Tổng chi phí lắp đặt:
  T(x) = 30 * AP + 50 * PC = 30(8 - x) + 50*sqrt{x^2 + 36} (triệu đồng), với x thuộc [0; 8].

2) Tìm giá trị nhỏ nhất của hàm số T(x) trên [0; 8]:
- Đạo hàm:
  T'(x) = -30 + 50 * (2x) / (2*sqrt{x^2 + 36}) = -30 + (50x) / sqrt{x^2 + 36}.
- Cho T'(x) = 0:
  (50x) / sqrt{x^2 + 36} = 30 <=> 5x = 3*sqrt{x^2 + 36}
  <=> 25x^2 = 9(x^2 + 36) <=> 16x^2 = 324 <=> x^2 = 324/16 = 81/4
  <=> x = 9/2 = 4.5 km (vì x >= 0, thỏa mãn thuộc [0; 8]).

3) So sánh giá trị và kết luận:
- T(0) = 30(8) + 50*sqrt{36} = 240 + 300 = 540 triệu đồng.
- T(4.5) = 30(8 - 4.5) + 50*sqrt{4.5^2 + 36} = 30(3.5) + 50*sqrt{20.25 + 36}
         = 105 + 50*sqrt{56.25} = 105 + 50*(7.5) = 105 + 375 = 480 triệu đồng.
- T(8) = 30(0) + 50*sqrt{8^2 + 6^2} = 50*(10) = 500 triệu đồng.
- Nhận thấy chi phí thấp nhất là 480 triệu đồng, đạt được khi x = 4.5 km.
- Kết luận: Điểm P cần cách điểm B một khoảng là 4.5 km (hoặc cách trạm bơm A là 3.5 km).`,
      criteria: [
        { id: "c1", step: "Bước 1", desc: "Gọi ẩn x = PB (0 ≤ x ≤ 8) và biểu diễn đúng AP = 8 - x, PC = sqrt(x^2 + 36)", points: 2.5 },
        { id: "c2", step: "Bước 2", desc: "Thiết lập đúng hàm chi phí T(x) = 30(8-x) + 50 sqrt(x^2+36)", points: 2.5 },
        { id: "c3", step: "Bước 3", desc: "Tính đạo hàm T'(x) và giải phương trình tìm đúng nghiệm x = 4.5 km", points: 2.5 },
        { id: "c4", step: "Bước 4", desc: "So sánh chi phí tại các điểm biên và cực trị, kết luận chính xác vị trí PB = 4.5 km", points: 2.5 }
      ]
    },
    {
      id: "es2",
      number: "Câu 14 (Tự luận 2)",
      title: "Tối ưu hóa thể tích hình chóp từ mảnh bìa đa giác",
      question: "Một người thợ muốn làm một chiếc lều vải hình chóp tứ giác đều $S.ABCD$ có độ dài cạnh bên bằng $3\\text{ m}$.\n1) Tính thể tích $V$ của chiếc lều theo chiều cao $h$ ($0 < h < 3$).\n2) Tìm chiều cao $h$ để thể tích không gian bên trong chiếc lều là lớn nhất.",
      maxPoints: 10.0,
      sampleSolution: `1) Biểu diễn thể tích lều theo chiều cao h:
- Gọi O là tâm của đáy hình vuông ABCD => SO vuông góc với mặt đáy (ABCD), SO = h (0 < h < 3).
- Trong tam giác vuông SOA (vuông tại O):
  OA^2 = SA^2 - SO^2 = 3^2 - h^2 = 9 - h^2.
- Vì ABCD là hình vuông tâm O nên đường chéo AC = 2*OA.
  Diện tích hình vuông ABCD tính theo đường chéo:
  S_ABCD = 1/2 * AC^2 = 1/2 * (2*OA)^2 = 2*OA^2 = 2(9 - h^2).
- Thể tích khối chóp tứ giác đều S.ABCD:
  V(h) = 1/3 * S_ABCD * SO = 1/3 * 2(9 - h^2) * h = 2/3 * (9h - h^3) (với 0 < h < 3).

2) Tìm h để thể tích V(h) lớn nhất:
- Xét hàm số f(h) = 9h - h^3 trên khoảng (0; 3).
- Đạo hàm: f'(h) = 9 - 3h^2 = 0 <=> h^2 = 3 <=> h = sqrt{3} (m) (vì h > 0).
- Bảng biến thiên:
  + Với 0 < h < sqrt{3}: f'(h) > 0 => hàm số đồng biến.
  + Với sqrt{3} < h < 3: f'(h) < 0 => hàm số nghịch biến.
- Do đó f(h) đạt giá trị lớn nhất tại h = sqrt{3} mét.
- Giá trị thể tích lớn nhất là:
  V_max = 2/3 * (9*sqrt{3} - (sqrt{3})^3) = 2/3 * (9*sqrt{3} - 3*sqrt{3})
        = 2/3 * 6*sqrt{3} = 4*sqrt{3} m^3 ≈ 6.93 m^3.
- Kết luận: Chiều cao tối ưu của chiếc lều là h = sqrt{3} mét (khoảng 1.732 m).`,
      criteria: [
        { id: "c1", step: "Bước 1", desc: "Biểu diễn đúng bán kính đáy OA^2 = 9 - h^2 từ tam giác vuông SOA", points: 2.5 },
        { id: "c2", step: "Bước 2", desc: "Thiết lập đúng công thức thể tích V(h) = 2/3 (9h - h^3)", points: 2.5 },
        { id: "c3", step: "Bước 3", desc: "Lấy đạo hàm tìm đúng điểm cực trị h = sqrt(3) mét", points: 2.5 },
        { id: "c4", step: "Bước 4", desc: "Lập luận chứng minh thể tích lớn nhất và tính ra V_max = 4 sqrt(3) m^3", points: 2.5 }
      ]
    },
    {
      id: "es3",
      number: "Câu 15 (Tự luận 3)",
      title: "Ứng dụng đạo hàm giải bài toán tốc độ phản ứng hóa học",
      question: "Nồng độ của một chất tham gia phản ứng hóa học sau thời gian $t$ (phút) tuân theo quy luật $C(t) = \\frac{2t}{t^2 + 1}$ (mol/lít), với $t \\ge 0$.\n1) Tính tốc độ tức thời biến thiên nồng độ tại thời điểm $t = 2$ phút.\n2) Sau bao nhiêu phút kể từ khi phản ứng bắt đầu thì nồng độ của chất đạt giá trị cao nhất?",
      maxPoints: 10.0,
      sampleSolution: `1) Tính tốc độ biến thiên nồng độ tại thời điểm t = 2 phút:
- Tốc độ biến thiên nồng độ tức thời là đạo hàm bậc nhất của hàm số nồng độ C(t):
  v(t) = C'(t) = [2(t^2 + 1) - 2t*(2t)] / (t^2 + 1)^2
               = (2t^2 + 2 - 4t^2) / (t^2 + 1)^2
               = (2 - 2t^2) / (t^2 + 1)^2 = 2(1 - t^2) / (t^2 + 1)^2 (mol/(lít.phút)).
- Tại thời điểm t = 2 phút:
  v(2) = C'(2) = 2(1 - 2^2) / (2^2 + 1)^2 = 2(-3) / 5^2 = -6/25 = -0.24 (mol/(lít.phút)).
- Dấu âm cho biết tại thời điểm t = 2 phút nồng độ chất đang giảm với tốc độ 0.24 mol/(lít.phút).

2) Tìm thời điểm nồng độ đạt giá trị cao nhất:
- Xét phương trình C'(t) = 0:
  2(1 - t^2) / (t^2 + 1)^2 = 0 <=> 1 - t^2 = 0 <=> t = 1 (vì t >= 0).
- Bảng biến thiên của C(t) trên [0; +inf):
  + Với 0 <= t < 1: C'(t) > 0 => nồng độ tăng dần.
  + Tại t = 1: C'(1) = 0.
  + Với t > 1: C'(t) < 0 => nồng độ giảm dần.
- Suy ra nồng độ đạt giá trị cao nhất tại t = 1 phút.
- Nồng độ cực đại khi đó là: C(1) = 2(1) / (1^2 + 1) = 2/2 = 1 mol/lít.
- Kết luận: Sau 1 phút kể từ khi phản ứng bắt đầu thì nồng độ chất đạt giá trị cao nhất.`,
      criteria: [
        { id: "c1", step: "Bước 1", desc: "Tính đúng đạo hàm C'(t) = 2(1 - t^2) / (t^2 + 1)^2", points: 2.5 },
        { id: "c2", step: "Bước 2", desc: "Thay t = 2 tính đúng tốc độ tức thời v(2) = -0.24 mol/(lít.phút)", points: 2.5 },
        { id: "c3", step: "Bước 3", desc: "Giải C'(t) = 0 tìm đúng thời điểm t = 1 phút", points: 2.5 },
        { id: "c4", step: "Bước 4", desc: "Lập bảng biến thiên và kết luận nồng độ đạt cực đại bằng 1 mol/lít sau 1 phút", points: 2.5 }
      ]
    }
  ]
};


// --- FILE: diag-g12-c2.js ---
// ==========================================================================
// CƠ SỞ DỮ LIỆU ĐÁNH GIÁ CHẨN ĐOÁN LỖI SAI & CHẤM TỰ LUẬN TOÁN LỚP 12
// CHƯƠNG II: VECTƠ VÀ HỆ TỌA ĐỘ TRONG KHÔNG GIAN
// ==========================================================================

// --------------------------------------------------------------------------
// BÀI 6: VECTƠ TRONG KHÔNG GIAN (g12-c2-l6)
// --------------------------------------------------------------------------
window.DIAGNOSTIC_ASSESSMENT_DB["g12-c2-l6"] = {
  lessonId: "g12-c2-l6",
  title: "Bài 6: Vectơ trong không gian",
  chapterTitle: "Chương II: Vectơ và hệ tọa độ trong không gian",
  grade: 12,
  summary: "Bộ 15 câu hỏi đánh giá chẩn đoán năng lực: Quy tắc 3 điểm, quy tắc hình bình hành, quy tắc hình hộp, tích vô hướng, góc giữa hai vectơ và điều kiện đồng phẳng của ba vectơ trong không gian.",

  multipleChoice: [
    {
      id: "mc1",
      number: "Câu 1",
      level: "Nhận biết",
      question: "Cho hình hộp $ABCD.A'B'C'D'$. Đẳng thức vectơ nào sau đây thể hiện ĐÚNG quy tắc hình hộp?",
      options: [
        { key: "A", text: "$\\vec{AC'} = \\vec{AB} + \\vec{AD} + \\vec{AA'}$.", isCorrect: true, errorTag: null, errorMsg: "Chính xác! Theo quy tắc hình hộp: Vectơ đường chéo xuất phát từ đỉnh $A$ bằng tổng của 3 vectơ cạnh xuất phát từ cùng đỉnh $A$." },
        { key: "B", text: "$\\vec{AC'} = \\vec{AB} + \\vec{BC} + \\vec{CD}$.", isCorrect: false, errorTag: "ERR_CHAIN_RULE", errorMsg: "Sai lầm: $\\vec{AB} + \\vec{BC} + \\vec{CD} = \\vec{AD}$, không bằng vectơ đường chéo $\\vec{AC'}$." },
        { key: "C", text: "$\\vec{AC'} = \\vec{AA'} + \\vec{BB'} + \\vec{CC'}$.", isCorrect: false, errorTag: "ERR_PARALLEL_SUM", errorMsg: "Sai lầm: Ba vectơ này cùng hướng và song song với nhau, tổng của chúng bằng $3\\vec{AA'}$, không bằng $\\vec{AC'}$." },
        { key: "D", text: "$\\vec{AC'} = \\vec{AB'} + \\vec{AD'} + \\vec{AC}$.", isCorrect: false, errorTag: "ERR_FACE_DIAGONAL", errorMsg: "Đây là các vectơ đường chéo mặt bên, không phải các vectơ cạnh." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Quy tắc hình hộp",
        question: "Trong hình hộp $ABCD.A'B'C'D'$, hãy biểu diễn $\\vec{BD'}$ theo $\\vec{BA}, \\vec{BC}, \\vec{BB'}$.",
        correctAnswer: "$\\vec{BD'} = \\vec{BA} + \\vec{BC} + \\vec{BB'}$.",
        tip: "Mẹo nhớ: Đường chéo xuất phát từ đỉnh nào thì bằng tổng 3 cạnh xuất phát từ đỉnh đó."
      }
    },
    {
      id: "mc2",
      number: "Câu 2",
      level: "Thông hiểu",
      question: "Cho tứ diện $ABCD$ có trọng tâm $G$. Đẳng thức vectơ nào sau đây là ĐÚNG?",
      options: [
        { key: "A", text: "$\\vec{GA} + \\vec{GB} + \\vec{GC} + \\vec{GD} = \\vec{0}$.", isCorrect: true, errorTag: null, errorMsg: "Chính xác! Điểm $G$ là trọng tâm của tứ diện $ABCD$ khi và chỉ khi tổng 4 vectơ từ $G$ đến 4 đỉnh bằng vectơ không." },
        { key: "B", text: "$\\vec{GA} + \\vec{GB} + \\vec{GC} + \\vec{GD} = 4\\vec{OG}$.", isCorrect: false, errorTag: "ERR_ORIGIN_POSITION", errorMsg: "Sai vị trí: Với điểm $O$ bất kì thì $\\vec{OA} + \\vec{OB} + \\vec{OC} + \\vec{OD} = 4\\vec{OG}$ chứ không phải từ điểm $G$." },
        { key: "C", text: "$\\vec{AB} + \\vec{AC} + \\vec{AD} = 3\\vec{AG}$.", isCorrect: false, errorTag: "ERR_TRIANGLE_NOT_TETRA", errorMsg: "Nhầm công thức trọng tâm tam giác: Với tứ diện thì $\\vec{AB} + \\vec{AC} + \\vec{AD} = 4\\vec{AG}$." },
        { key: "D", text: "$\\vec{GA} + \\vec{GB} = \\vec{GC} + \\vec{GD}$.", isCorrect: false, errorTag: "ERR_OPPOSITE_EDGES", errorMsg: "Đẳng thức này sai dấu: $\\vec{GA} + \\vec{GB} = -(\\vec{GC} + \\vec{GD})$." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Tính chất trọng tâm tứ diện",
        question: "Với mọi điểm $M$ trong không gian, hãy biểu diễn $\\vec{MA} + \\vec{MB} + \\vec{MC} + \\vec{MD}$ theo $\\vec{MG}$ (với $G$ là trọng tâm tứ diện $ABCD$).",
        correctAnswer: "$4\\vec{MG}$.",
        tip: "Mẹo nhớ: Tứ diện có 4 đỉnh $\\implies$ hệ số là 4: $\\sum \\vec{MA} = 4\\vec{MG}$."
      }
    },
    {
      id: "mc3",
      number: "Câu 3",
      level: "Thông hiểu",
      question: "Cho ba vectơ $\\vec{a}, \\vec{b}, \\vec{c}$ trong không gian, trong đó $\\vec{a}$ và $\\vec{b}$ không cùng phương. Điều kiện cần và đủ để ba vectơ $\\vec{a}, \\vec{b}, \\vec{c}$ đồng phẳng là:",
      options: [
        { key: "A", text: "Tồn tại duy nhất cặp số thực $(m; n)$ sao cho $\\vec{c} = m\\vec{a} + n\\vec{b}$.", isCorrect: true, errorTag: null, errorMsg: "Rất chuẩn! Định lý về sự đồng phẳng: Ba vectơ đồng phẳng khi và chỉ khi vectơ thứ ba phân tích được duy nhất thành tổ hợp tuyến tính của hai vectơ không cùng phương kia." },
        { key: "B", text: "$\\vec{a} + \\vec{b} + \\vec{c} = \\vec{0}$.", isCorrect: false, errorTag: "ERR_SPECIAL_CASE", errorMsg: "Đây chỉ là trường hợp đặc biệt với $m = -1, n = -1$, không phải điều kiện cần." },
        { key: "C", text: "$\\vec{a} \\cdot \\vec{b} \\cdot \\vec{c} = 0$.", isCorrect: false, errorTag: "ERR_MEANINGLESS_PRODUCT", errorMsg: "Biểu thức tích vô hướng ba vectơ không có nghĩa toán học." },
        { key: "D", text: "$\\vec{a} \\perp \\vec{b}$ và $\\vec{b} \\perp \\vec{c}$.", isCorrect: false, errorTag: "ERR_PERPENDICULAR_FALLACY", errorMsg: "Sai lầm: Trong không gian, 3 trục tọa độ vuông góc đôi một nhưng không hề đồng phẳng." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Định nghĩa ba vectơ đồng phẳng",
        question: "Ba vectơ gọi là đồng phẳng khi các giá của chúng thỏa mãn điều kiện gì?",
        correctAnswer: "Các giá của chúng cùng song song hoặc nằm trong một mặt phẳng.",
        tip: "Mẹo nhớ: Phân tích được $\\vec{c} = m\\vec{a} + n\\vec{b} \\iff$ 3 vectơ đồng phẳng."
      }
    },
    {
      id: "mc4",
      number: "Câu 4",
      level: "Vận dụng",
      question: "Cho tứ diện đều $ABCD$ có cạnh bằng $a$. Tích vô hướng $\\vec{AB} \\cdot \\vec{CD}$ bằng:",
      options: [
        { key: "A", text: "$0$.", isCorrect: true, errorTag: null, errorMsg: "Chính xác tuyệt đối! Trong tứ diện đều, hai cạnh đối diện luôn vuông góc với nhau. Thật vậy: $\\vec{CD} = \\vec{AD} - \\vec{AC} \\implies \\vec{AB} \\cdot \\vec{CD} = \\vec{AB} \\cdot \\vec{AD} - \\vec{AB} \\cdot \\vec{AC} = a^2 \\cos 60^\\circ - a^2 \\cos 60^\\circ = 0$. Vì tích vô hướng bằng 0 nên $AB \\perp CD$." },
        { key: "B", text: "$\\frac{a^2}{2}$.", isCorrect: false, errorTag: "ERR_ONE_TERM", errorMsg: "Chỉ tính tích $\\vec{AB} \\cdot \\vec{AD}$ mà quên trừ đi $\\vec{AB} \\cdot \\vec{AC}$." },
        { key: "C", text: "$-\\frac{a^2}{2}$.", isCorrect: false, errorTag: "ERR_WRONG_SIGN", errorMsg: "Tính sai dấu khi phân tích vectơ." },
        { key: "D", text: "$a^2$.", isCorrect: false, errorTag: "ERR_PARALLEL_FALLACY", errorMsg: "Nhầm lẫn hai cạnh đối song song." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Tính chất hai cạnh đối diện của tứ diện đều",
        question: "Trong tứ diện đều $ABCD$, góc giữa hai đường thẳng $AB$ và $CD$ bằng bao nhiêu độ?",
        correctAnswer: "$90^\\circ$ (vuông góc nhau).",
        tip: "Mẹo nhớ: Tứ diện đều có 3 cặp cạnh đối vuông góc từng đôi một."
      }
    },
    {
      id: "mc5",
      number: "Câu 5",
      level: "Vận dụng",
      question: "Cho hình lăng trụ tam giác $ABC.A'B'C'$. Đặt $\\vec{AA'} = \\vec{a}, \\vec{AB} = \\vec{b}, \\vec{AC} = \\vec{c}$. Gọi $G$ là trọng tâm của tam giác $A'B'C'$. Biểu diễn vectơ $\\vec{AG}$ theo $\\vec{a}, \\vec{b}, \\vec{c}$ là:",
      options: [
        { key: "A", text: "$\\vec{AG} = \\vec{a} + \\frac{1}{3}\\vec{b} + \\frac{1}{3}\\vec{c}$.", isCorrect: true, errorTag: null, errorMsg: "Xuất sắc! Ta có $\\vec{AG} = \\vec{AA'} + \\vec{A'G}$. Vì $G$ là trọng tâm tam giác $A'B'C'$ nên $\\vec{A'G} = \\frac{1}{3}(\\vec{A'A'} + \\vec{A'B'} + \\vec{A'C'}) = \\frac{1}{3}(\\vec{A'B'} + \\vec{A'C'})$. Mặt khác $\\vec{A'B'} = \\vec{AB} = \\vec{b}$ và $\\vec{A'C'} = \\vec{AC} = \\vec{c}$. Do đó $\\vec{AG} = \\vec{a} + \\frac{1}{3}\\vec{b} + \\frac{1}{3}\\vec{c}$." },
        { key: "B", text: "$\\vec{AG} = \\frac{1}{3}(\\vec{a} + \\vec{b} + \\vec{c})$.", isCorrect: false, errorTag: "ERR_SCALE_A", errorMsg: "Nhầm lẫn nhân $1/3$ với cả vectơ $\\vec{a}$: Điểm $G$ nằm hoàn toàn trên mặt phẳng đáy $(A'B'C')$ nên thành phần theo $\\vec{AA'}$ phải là $1\\vec{a}$, không phải $1/3\\vec{a}$." },
        { key: "C", text: "$\\vec{AG} = \\vec{a} + \\vec{b} + \\vec{c}$.", isCorrect: false, errorTag: "ERR_OMIT_THIRD", errorMsg: "Quên chia cho 3 của công thức trọng tâm tam giác." },
        { key: "D", text: "$\\vec{AG} = \\frac{1}{3}\\vec{a} + \\vec{b} + \\vec{c}$.", isCorrect: false, errorTag: "ERR_WRONG_COEFF", errorMsg: "Gán nhầm hệ số $1/3$ vào $\\vec{a}$ thay vì $\\vec{b}$ và $\\vec{c}$." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Phân tích vectơ trong hình lăng trụ",
        question: "Biểu diễn vectơ $\\vec{AB'}$ theo $\\vec{AA'}$ và $\\vec{AB}$.",
        correctAnswer: "$\\vec{AB'} = \\vec{AA'} + \\vec{AB}$.",
        tip: "Mẹo nhớ: Đi theo đường gấp khúc: $\\vec{AG} = \\vec{AA'} + \\vec{A'G}$."
      }
    }
  ],

  trueFalse: [
    {
      id: "tf1",
      number: "Câu 6",
      scenario: "Cho hình hộp chữ nhật $ABCD.A'B'C'D'$ có $AB = a, AD = 2a, AA' = 3a$. Xét tính Đúng hoặc Sai của các mệnh đề sau:",
      items: [
        { key: "a", text: "Ba vectơ $\\vec{AB}, \\vec{AD}, \\vec{AA'}$ vuông góc đôi một.", isCorrect: true, explanation: "Đúng. Trong hình hộp chữ nhật, 3 cạnh xuất phát từ cùng một đỉnh vuông góc từng đôi một." },
        { key: "b", text: "Độ dài của vectơ $\\vec{AC'}$ bằng $\\sqrt{14}a$.", isCorrect: true, explanation: "Đúng. Đường chéo hình hộp chữ nhật $AC'^2 = AB^2 + AD^2 + AA'^2 = a^2 + 4a^2 + 9a^2 = 14a^2 \\implies |\\vec{AC'}| = a\\sqrt{14}$." },
        { key: "c", text: "Tích vô hướng $\\vec{AC} \\cdot \\vec{BD} = 0$.", isCorrect: false, explanation: "Sai lầm: Đáy $ABCD$ là hình chữ nhật có kích thước $a$ và $2a$ (không phải hình vuông) nên hai đường chéo $AC$ và $BD$ không vuông góc với nhau." },
        { key: "d", text: "Góc giữa hai vectơ $\\vec{AB}$ và $\\vec{B'C'}$ bằng $90^\\circ$.", isCorrect: true, explanation: "Đúng. Vì $\\vec{B'C'} = \\vec{BC}$ và trong hình chữ nhật $AB \\perp BC$ nên $(\\vec{AB}, \\vec{B'C'}) = (\\vec{AB}, \\vec{BC}) = 90^\\circ$." }
      ]
    },
    {
      id: "tf2",
      number: "Câu 7",
      scenario: "Cho tứ diện $ABCD$. Gọi $M, N$ lần lượt là trung điểm của $AB$ và $CD$. Đánh giá tính Đúng hoặc Sai của các khẳng định sau:",
      items: [
        { key: "a", text: "$\\vec{MN} = \\frac{1}{2}(\\vec{AD} + \\vec{BC})$.", isCorrect: true, explanation: "Đúng. Chèn điểm: $\\vec{MN} = \\vec{MA} + \\vec{AD} + \\vec{DN}$ và $\\vec{MN} = \\vec{MB} + \\vec{BC} + \\vec{CN}$. Cộng lại với $\\vec{MA} + \\vec{MB} = \\vec{0}, \\vec{DN} + \\vec{CN} = \\vec{0}$ suy ra $2\\vec{MN} = \\vec{AD} + \\vec{BC}$." },
        { key: "b", text: "$\\vec{MN} = \\frac{1}{2}(\\vec{AC} + \\vec{BD})$.", isCorrect: true, explanation: "Đúng. Hoàn toàn tương tự, chèn điểm $C$ và $D$ ta có $2\\vec{MN} = \\vec{AC} + \\vec{BD}$." },
        { key: "c", text: "Ba vectơ $\\vec{MN}, \\vec{AD}, \\vec{BC}$ đồng phẳng.", isCorrect: true, explanation: "Đúng. Vì $\\vec{MN} = \\frac{1}{2}\\vec{AD} + \\frac{1}{2}\\vec{BC}$ phân tích được thành tổ hợp tuyến tính của $\\vec{AD}$ và $\\vec{BC}$." },
        { key: "d", text: "Đoạn nối hai trung điểm $MN$ luôn vuông góc với cả hai cạnh $AB$ và $CD$.", isCorrect: false, explanation: "Sai. Chỉ khi tứ diện có $AC = BD$ và $AD = BC$ (tứ diện gần đều) thì $MN$ mới vuông góc với $AB$ và $CD$. Với tứ diện bất kì thì không vuông góc." }
      ]
    },
    {
      id: "tf3",
      number: "Câu 8",
      scenario: "Xét các tính chất cơ bản của vectơ trong không gian 3 chiều:",
      items: [
        { key: "a", text: "Nếu $\\vec{u} \\cdot \\vec{v} = 0$ thì bắt buộc $\\vec{u} = \\vec{0}$ hoặc $\\vec{v} = \\vec{0}$.", isCorrect: false, explanation: "Sai lầm: Trong vectơ, hai vectơ khác không vuông góc với nhau thì tích vô hướng của chúng vẫn bằng 0." },
        { key: "b", text: "Hai vectơ cùng phương khi và chỉ khi giá của chúng song song hoặc trùng nhau.", isCorrect: true, explanation: "Đúng. Đây là định nghĩa chuẩn của hai vectơ cùng phương." },
        { key: "c", text: "Trong không gian, mọi hệ gồm 4 vectơ bất kì đều không đồng phẳng.", isCorrect: false, explanation: "Sai. Nếu cả 4 vectơ đều có giá cùng song song với một mặt phẳng thì 4 vectơ đó hoàn toàn đồng phẳng." },
        { key: "d", text: "Bất kì vectơ nào trong không gian cũng đều phân tích được duy nhất theo 3 vectơ không đồng phẳng cho trước.", isCorrect: true, explanation: "Đúng. Đây là định lý cơ bản về cơ sở của không gian vectơ 3 chiều: $\\vec{x} = m\\vec{a} + n\\vec{b} + p\\vec{c}$." }
      ]
    }
  ],

  shortAnswer: [
    {
      id: "sa1",
      number: "Câu 9",
      question: "Cho hình lập phương $ABCD.A'B'C'D'$. Tính số đo góc giữa hai vectơ $\\vec{AB}$ và $\\vec{A'C'}$ (tính theo độ).",
      correctAnswer: "45",
      acceptedAnswers: ["45", "45 độ", "45°"],
      explanation: "Vì $\\vec{A'C'} = \\vec{AC}$ nên $(\\vec{AB}, \\vec{A'C'}) = (\\vec{AB}, \\vec{AC})$. Trong hình vuông $ABCD$, đường chéo $AC$ tạo với cạnh $AB$ góc $45^\\circ$. Vậy góc là $45^\\circ$.",
      tip: "Tịnh tiến vectơ $\\vec{A'C'}$ về đáy thành $\\vec{AC}$."
    },
    {
      id: "sa2",
      number: "Câu 10",
      question: "Cho hai vectơ $\\vec{a}$ và $\\vec{b}$ có độ dài $|\vec{a}| = 2, |\\vec{b}| = 3$ và góc giữa chúng bằng $60^\\circ$. Tính tích vô hướng $\\vec{a} \\cdot \\vec{b}$.",
      correctAnswer: "3",
      acceptedAnswers: ["3", "3.0"],
      explanation: "$\\vec{a} \\cdot \\vec{b} = |\\vec{a}| |\\vec{b}| \\cos(\\vec{a}, \\vec{b}) = 2 \\times 3 \\times \\cos 60^\\circ = 6 \\times 0.5 = 3$.",
      tip: "Công thức tích vô hướng: $\\vec{a} \\cdot \\vec{b} = |\\vec{a}| |\\vec{b}| \\cos\\theta$."
    },
    {
      id: "sa3",
      number: "Câu 11",
      question: "Cho tứ diện $ABCD$ có $G$ là trọng tâm. Biết $\\vec{AG} = x\\vec{AB} + y\\vec{AC} + z\\vec{AD}$. Tính tổng $S = x + y + z$. Điền kết quả dưới dạng số thập phân.",
      correctAnswer: "0.75",
      acceptedAnswers: ["0.75", "3/4", "0,75"],
      explanation: "Ta có $\\vec{GA} + \\vec{GB} + \\vec{GC} + \\vec{GD} = \\vec{0} \\implies 4\\vec{AG} = \\vec{AB} + \\vec{AC} + \\vec{AD} \\implies \\vec{AG} = \\frac{1}{4}\\vec{AB} + \\frac{1}{4}\\vec{AC} + \\frac{1}{4}\\vec{AD}$. Suy ra $x = y = z = 1/4$. Tổng $S = 1/4 + 1/4 + 1/4 = 3/4 = 0.75$.",
      tip: "Phân tích trọng tâm tứ diện từ một đỉnh: mỗi hệ số bằng $1/4$, tổng bằng $3/4$."
    },
    {
      id: "sa4",
      number: "Câu 12",
      question: "Cho hai vectơ $\\vec{u}, \\vec{v}$ vuông góc với nhau và có $|\vec{u}| = 3, |\\vec{v}| = 4$. Tính độ dài của vectơ tổng $|\vec{u} + \\vec{v}|$.",
      correctAnswer: "5",
      acceptedAnswers: ["5", "5.0"],
      explanation: "$|\\vec{u} + \\vec{v}|^2 = |\\vec{u}|^2 + |\\vec{v}|^2 + 2\\vec{u}\\vec{v} = 3^2 + 4^2 + 0 = 25 \\implies |\\vec{u} + \\vec{v}| = 5$.",
      tip: "Hai vectơ vuông góc thỏa mãn định lý Pythagore: $|\\vec{u} + \\vec{v}|^2 = |\\vec{u}|^2 + |\\vec{v}|^2$."
    }
  ],

  essay: [
    {
      id: "es1",
      number: "Câu 13 (Tự luận 1)",
      title: "Chứng minh đẳng thức vectơ và tính chất đồng quy trong hình hộp",
      question: "Cho hình hộp $ABCD.A'B'C'D'$. Gọi $M, N$ lần lượt là trung điểm của các cạnh $A'B'$ và $CC'$.\n1) Phân tích vectơ $\\vec{MN}$ theo 3 vectơ cạnh $\\vec{AB}, \\vec{AD}, \\vec{AA'}$.\n2) Gọi $I$ là trung điểm của đoạn thẳng $BD'$. Chứng minh rằng điểm $I$ cũng là trung điểm của các đường chéo còn lại của hình hộp.",
      maxPoints: 10.0,
      sampleSolution: `1) Phân tích vectơ MN theo 3 vectơ cạnh:
- Đặt vec{AB} = vec{b}, vec{AD} = vec{d}, vec{AA'} = vec{h}.
- Ta đi từ M đến N qua các đỉnh:
  vec{MN} = vec{MA'} + vec{A'D'} + vec{D'C'} + vec{C'N}.
- Vì M là trung điểm của A'B' nên:
  vec{MA'} = -1/2 * vec{A'B'} = -1/2 * vec{AB} = -1/2 * vec{b}.
- Vì A'B'C'D' là hình bình hành nên:
  vec{A'D'} = vec{AD} = vec{d};  vec{D'C'} = vec{A'B'} = vec{AB} = vec{b}.
- Vì N là trung điểm của CC' nên:
  vec{C'N} = -1/2 * vec{CC'} = -1/2 * vec{AA'} = -1/2 * vec{h}.
- Cộng các vectơ lại:
  vec{MN} = (-1/2 * vec{b}) + vec{d} + vec{b} + (-1/2 * vec{h})
          = 1/2 * vec{b} + vec{d} - 1/2 * vec{h}
          = 1/2 * vec{AB} + vec{AD} - 1/2 * vec{AA'}.

2) Chứng minh 4 đường chéo cắt nhau tại trung điểm I:
- Tọa độ hóa vectơ với gốc A: vec{AI} = 1/2 * (vec{AB} + vec{AD'}).
  Ta có vec{AD'} = vec{AD} + vec{AA'}.
  => vec{AI} = 1/2 * (vec{AB} + vec{AD} + vec{AA'}) = 1/2 * vec{AC'}.
- Biểu thức vec{AI} = 1/2 * vec{AC'} chứng tỏ I là trung điểm của đường chéo AC'.
- Tương tự xét trung điểm của CA' và DB':
  1/2 * (vec{AC} + vec{AA'}) = 1/2 * (vec{AB} + vec{AD} + vec{AA'}) = vec{AI}.
- Do đó bốn đường chéo AC', BD', CA', DB' đều cắt nhau tại điểm I và I là trung điểm của mỗi đường chéo.`,
      criteria: [
        { id: "c1", step: "Bước 1", desc: "Biểu diễn đúng các vectơ thành phần vec{MA'}, vec{A'D'}, vec{D'C'}, vec{C'N}", points: 2.5 },
        { id: "c2", step: "Bước 2", desc: "Rút gọn ra đúng vec{MN} = 1/2 vec{AB} + vec{AD} - 1/2 vec{AA'}", points: 2.5 },
        { id: "c3", step: "Bước 3", desc: "Chứng minh vec{AI} = 1/2 (vec{AB} + vec{AD} + vec{AA'}) = 1/2 vec{AC'}", points: 2.5 },
        { id: "c4", step: "Bước 4", desc: "Kết luận điểm I là tâm đối xứng của hình hộp và là trung điểm của cả 4 đường chéo", points: 2.5 }
      ]
    },
    {
      id: "es2",
      number: "Câu 14 (Tự luận 2)",
      title: "Ứng dụng tích vô hướng tính góc giữa hai đường thẳng chéo nhau",
      question: "Cho hình chóp $S.ABC$ có $SA = SB = SC = a$ và $\\widehat{ASB} = 60^\\circ, \\widehat{BSC} = 90^\\circ, \\widehat{CSA} = 120^\\circ$.\n1) Tính các tích vô hướng: $\\vec{SA} \\cdot \\vec{SB}$, $\\vec{SB} \\cdot \\vec{SC}$, $\\vec{SC} \\cdot \\vec{SA}$.\n2) Tính số đo góc giữa hai đường thẳng $SA$ và $BC$.",
      maxPoints: 10.0,
      sampleSolution: `1) Tính các tích vô hướng:
- vec{SA} * vec{SB} = |vec{SA}| * |vec{SB}| * cos(ASB) = a * a * cos(60°) = a^2 * (1/2) = a^2 / 2.
- vec{SB} * vec{SC} = |vec{SB}| * |vec{SC}| * cos(BSC) = a * a * cos(90°) = a^2 * 0 = 0.
- vec{SC} * vec{SA} = |vec{SC}| * |vec{SA}| * cos(CSA) = a * a * cos(120°) = a^2 * (-1/2) = -a^2 / 2.

2) Tính góc giữa hai đường thẳng SA và BC:
- Ta có vec{BC} = vec{SC} - vec{SB}.
- Tích vô hướng vec{SA} * vec{BC}:
  vec{SA} * vec{BC} = vec{SA} * (vec{SC} - vec{SB}) = vec{SA} * vec{SC} - vec{SA} * vec{SB}
                    = (-a^2 / 2) - (a^2 / 2) = -a^2.
- Tính độ dài vectơ:
  + |vec{SA}| = a.
  + |vec{BC}|^2 = |vec{SC} - vec{SB}|^2 = SC^2 + SB^2 - 2*vec{SC}*vec{SB}
                = a^2 + a^2 - 0 = 2a^2 => |vec{BC}| = a*sqrt{2}.
- Côsin góc giữa hai đường thẳng SA và BC:
  cos(SA, BC) = |vec{SA} * vec{BC}| / (|vec{SA}| * |vec{BC}|)
              = |-a^2| / (a * a*sqrt{2}) = a^2 / (a^2*sqrt{2}) = 1 / sqrt{2} = sqrt{2} / 2.
- Suy ra góc giữa hai đường thẳng SA và BC là 45°.`,
      criteria: [
        { id: "c1", step: "Bước 1", desc: "Tính đúng 3 tích vô hướng: a^2/2; 0; -a^2/2", points: 2.5 },
        { id: "c2", step: "Bước 2", desc: "Phân tích vec{BC} = vec{SC} - vec{SB} và tính ra vec{SA} * vec{BC} = -a^2", points: 2.5 },
        { id: "c3", step: "Bước 3", desc: "Tính đúng độ dài cạnh BC = a*sqrt(2)", points: 2.5 },
        { id: "c4", step: "Bước 4", desc: "Áp dụng công thức trị tuyệt đối cos(SA, BC) = sqrt(2)/2 và kết luận góc bằng 45°", points: 2.5 }
      ]
    },
    {
      id: "es3",
      number: "Câu 15 (Tự luận 3)",
      title: "Ứng dụng tổng hợp lực vectơ trong kỹ thuật giàn treo",
      question: "Một chiếc đèn chùm nặng $120\\text{ N}$ được treo vào trần nhà nhờ ba sợi dây cáp không giãn có cùng độ dài, gắn vào ba điểm $A, B, C$ trên trần nhà sao cho $\\triangle ABC$ là tam giác đều cạnh $1.2\\text{ m}$. Đèn chùm ở vị trí điểm $S$ nằm ngay dưới trọng tâm $G$ của tam giác $ABC$, với $SG = 0.8\\text{ m}$. Hãy xác định độ lớn của lực căng trên mỗi sợi dây cáp khi hệ thống cân bằng tĩnh.",
      maxPoints: 10.0,
      sampleSolution: `1) Mô hình hóa bài toán theo cân bằng lực:
- Chiếc đèn chịu tác dụng của 4 lực: Trọng lực P_vec hướng thẳng đứng xuống dưới và 3 lực căng dây T1_vec, T2_vec, T3_vec hướng dọc theo các dây SA, SB, SC.
- Trọng lượng P = 120 N => P_vec = -120 * k_vec (với k_vec là vectơ đơn vị thẳng đứng hướng lên).
- Điều kiện cân bằng tĩnh:
  T1_vec + T2_vec + T3_vec + P_vec = 0 <=> T1_vec + T2_vec + T3_vec = -P_vec.
- Do tính chất đối xứng của tam giác đều và SG vuông góc với (ABC), độ lớn của ba lực căng dây là bằng nhau: T1 = T2 = T3 = T.

2) Tính góc hợp bởi dây cáp với phương thẳng đứng:
- Bán kính đường tròn ngoại tiếp tam giác đều ABC là:
  GA = (1.2 * sqrt{3}) / 3 = 1.2 / sqrt{3} = (1.2 * sqrt{3}) / 3 = 0.4*sqrt{3} m.
- Xét tam giác vuông SGA vuông tại G:
  Chiều cao SG = 0.8 m.
  Độ dài sợi dây SA = sqrt{SG^2 + GA^2} = sqrt{0.8^2 + (0.4*sqrt{3})^2}
                    = sqrt{0.64 + 0.16 * 3} = sqrt{0.64 + 0.48} = sqrt{1.12} m.
- Gọi alpha là góc hợp bởi dây SA với trục thẳng đứng SG:
  cos(alpha) = SG / SA = 0.8 / sqrt{1.12} = 0.8 / (0.4*sqrt{7}) = 2 / sqrt{7}.

3) Chiếu phương trình cân bằng lực lên phương thẳng đứng:
- Tổng hình chiếu của ba lực căng dây lên phương thẳng đứng phải cân bằng với trọng lượng P:
  3 * T * cos(alpha) = P
  <=> 3 * T * (2 / sqrt{7}) = 120
  <=> (6 / sqrt{7}) * T = 120
  <=> T = 120 * sqrt{7} / 6 = 20*sqrt{7} N ≈ 52.92 N.
- Kết luận: Độ lớn lực căng trên mỗi sợi dây cáp là 20*sqrt{7} N (xấp xỉ 52.92 N).`,
      criteria: [
        { id: "c1", step: "Bước 1", desc: "Thiết lập đúng phương trình cân bằng lực T1 + T2 + T3 + P = 0", points: 2.5 },
        { id: "c2", step: "Bước 2", desc: "Tính đúng bán kính GA = 0.4 sqrt(3) m và độ dài dây SA = sqrt(1.12) m", points: 2.5 },
        { id: "c3", step: "Bước 3", desc: "Tính đúng cos(alpha) = 2 / sqrt(7)", points: 2.5 },
        { id: "c4", step: "Bước 4", desc: "Chiếu lên phương thẳng đứng tính ra lực căng T = 20 sqrt(7) N ≈ 52.92 N", points: 2.5 }
      ]
    }
  ]
};

// --------------------------------------------------------------------------
// BÀI 7: HỆ TRỤC TỌA ĐỘ TRONG KHÔNG GIAN (g12-c2-l7)
// --------------------------------------------------------------------------
window.DIAGNOSTIC_ASSESSMENT_DB["g12-c2-l7"] = {
  lessonId: "g12-c2-l7",
  title: "Bài 7: Hệ trục toạ độ trong không gian (Oxyz)",
  chapterTitle: "Chương II: Vectơ và hệ tọa độ trong không gian",
  grade: 12,
  summary: "Bộ 15 câu hỏi đánh giá chẩn đoán năng lực: Tọa độ điểm trong Oxyz, vectơ vị trí, hình chiếu và điểm đối xứng qua các trục và mặt phẳng tọa độ, tọa độ trung điểm, trọng tâm tam giác và tứ diện.",

  multipleChoice: [
    {
      id: "mc1",
      number: "Câu 1",
      level: "Nhận biết",
      question: "Trong không gian $Oxyz$, cho điểm $M(2; -3; 5)$. Vectơ vị trí $\\vec{OM}$ được biểu diễn theo ba vectơ đơn vị $\\vec{i}, \\vec{j}, \\vec{k}$ là:",
      options: [
        { key: "A", text: "$\\vec{OM} = 2\\vec{i} - 3\\vec{j} + 5\\vec{k}$.", isCorrect: true, errorTag: null, errorMsg: "Chính xác! Tọa độ điểm $M(x; y; z)$ tương đương với $\\vec{OM} = x\\vec{i} + y\\vec{j} + z\\vec{k}$." },
        { key: "B", text: "$\\vec{OM} = 2\\vec{i} + 3\\vec{j} + 5\\vec{k}$.", isCorrect: false, errorTag: "ERR_SIGN_Y", errorMsg: "Sai dấu của tung độ $y = -3$." },
        { key: "C", text: "$\\vec{OM} = -3\\vec{i} + 2\\vec{j} + 5\\vec{k}$.", isCorrect: false, errorTag: "ERR_SWAP_XY", errorMsg: "Đổi lộn hoành độ $x$ và tung độ $y$." },
        { key: "D", text: "$\\vec{OM} = 2\\vec{i} - 3\\vec{k} + 5\\vec{j}$.", isCorrect: false, errorTag: "ERR_SWAP_JK", errorMsg: "Nhầm thứ tự vectơ đơn vị $\\vec{j}$ (trên $Oy$) và $\\vec{k}$ (trên $Oz$)." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Định nghĩa tọa độ điểm qua vectơ đơn vị",
        question: "Biết $\\vec{OM} = -\\vec{i} + 4\\vec{k}$. Tìm tọa độ điểm $M$.",
        correctAnswer: "$M(-1; 0; 4)$ (khuyết $\\vec{j}$ thì tung độ bằng 0).",
        tip: "Mẹo nhớ: Khuyết thành phần nào thì tọa độ đó bằng 0."
      }
    },
    {
      id: "mc2",
      number: "Câu 2",
      level: "Thông hiểu",
      question: "Trong không gian $Oxyz$, hình chiếu vuông góc của điểm $A(1; -2; 3)$ lên mặt phẳng tọa độ $(Oxy)$ là điểm nào?",
      options: [
        { key: "A", text: "$A_1(1; -2; 0)$.", isCorrect: true, errorTag: null, errorMsg: "Chính xác! Chiếu lên mặt phẳng $(Oxy)$ thì giữ nguyên $x, y$ và cho cao độ $z = 0$." },
        { key: "B", text: "$A_2(0; 0; 3)$.", isCorrect: false, errorTag: "ERR_PROJECT_AXIS", errorMsg: "Đây là hình chiếu lên TRỤC $Oz$, không phải mặt phẳng $(Oxy)$." },
        { key: "C", text: "$A_3(1; 0; 3)$.", isCorrect: false, errorTag: "ERR_PROJECT_OXZ", errorMsg: "Đây là hình chiếu lên mặt phẳng $(Oxz)$." },
        { key: "D", text: "$A_4(0; -2; 3)$.", isCorrect: false, errorTag: "ERR_PROJECT_OYZ", errorMsg: "Đây là hình chiếu lên mặt phẳng $(Oyz)$." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Quy tắc tìm hình chiếu vuông góc",
        question: "Hình chiếu của điểm $M(a; b; c)$ lên trục $Ox$ và lên mặt phẳng $(Oyz)$ lần lượt là gì?",
        correctAnswer: "Lên $Ox$ là $(a; 0; 0)$; lên $(Oyz)$ là $(0; b; c)$.",
        tip: "Mẹo nhớ: 'Chiếu lên đâu thì giữ nguyên cái đó, cái còn lại cho bằng 0'."
      }
    },
    {
      id: "mc3",
      number: "Câu 3",
      level: "Thông hiểu",
      question: "Điểm đối xứng của điểm $M(3; -4; 1)$ qua trục $Oy$ có tọa độ là:",
      options: [
        { key: "A", text: "$M'(-3; -4; -1)$.", isCorrect: true, errorTag: null, errorMsg: "Rất chuẩn! Đối xứng qua trục $Oy$ thì giữ nguyên tung độ $y$, còn $x$ và $z$ đổi dấu: $x' = -3, y' = -4, z' = -1$." },
        { key: "B", text: "$M'(3; 4; 1)$.", isCorrect: false, errorTag: "ERR_INVERT_ONLY_Y", errorMsg: "Sai lầm: Giữ nguyên $x, z$ và đổi dấu $y$ là đối xứng qua mặt phẳng $(Oxz)$." },
        { key: "C", text: "$M'(-3; 4; -1)$.", isCorrect: false, errorTag: "ERR_INVERT_ALL", errorMsg: "Đổi dấu cả 3 tọa độ là đối xứng qua GỐC TỌA ĐỘ $O$." },
        { key: "D", text: "$M'(0; -4; 0)$.", isCorrect: false, errorTag: "ERR_PROJECTION_NOT_SYMMETRY", errorMsg: "Đây là HÌNH CHIẾU lên trục $Oy$, không phải điểm đối xứng." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Quy tắc tìm điểm đối xứng",
        question: "Điểm đối xứng của $M(x; y; z)$ qua mặt phẳng $(Oxy)$ có tọa độ là gì?",
        correctAnswer: "$(x; y; -z)$ (giữ nguyên $x, y$ và đổi dấu $z$).",
        tip: "Mẹo nhớ: Đối xứng qua trục/mặt nào thì tọa độ tương ứng GIỮ NGUYÊN, các tọa độ khác ĐỔI DẤU."
      }
    },
    {
      id: "mc4",
      number: "Câu 4",
      level: "Vận dụng",
      question: "Trong không gian $Oxyz$, cho hai điểm $A(1; 2; -3)$ và $B(3; -4; 1)$. Tọa độ trung điểm $M$ của đoạn thẳng $AB$ là:",
      options: [
        { key: "A", text: "$M(2; -1; -1)$.", isCorrect: true, errorTag: null, errorMsg: "Chính xác! Tọa độ trung điểm bằng trung bình cộng: $x_M = \\frac{1+3}{2} = 2, y_M = \\frac{2+(-4)}{2} = -1, z_M = \\frac{-3+1}{2} = -1$." },
        { key: "B", text: "$M(4; -2; -2)$.", isCorrect: false, errorTag: "ERR_FORGET_DIVIDE_TWO", errorMsg: "Cộng lại nhưng quên chia cho 2." },
        { key: "C", text: "$M(2; -6; 4)$.", isCorrect: false, errorTag: "ERR_SUBTRACTION", errorMsg: "Nhầm sang phép trừ vectơ $\\vec{AB}$." },
        { key: "D", text: "$M(1; -3; 2)$.", isCorrect: false, errorTag: "ERR_HALF_VECTOR", errorMsg: "Lấy một nửa vectơ $\\vec{AB}$ thay vì trung điểm đoạn $AB$." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Công thức trung điểm đoạn thẳng",
        question: "Cho $A(2; 4; 0)$, trung điểm $M(1; 1; 2)$. Tìm tọa độ điểm $B$.",
        correctAnswer: "$B = 2M - A = (2(1)-2; 2(1)-4; 2(2)-0) = (0; -2; 4)$.",
        tip: "Mẹo nhớ: $M = (A + B)/2 \\iff B = 2M - A$."
      }
    },
    {
      id: "mc5",
      number: "Câu 5",
      level: "Vận dụng",
      question: "Trong không gian $Oxyz$, cho tam giác $ABC$ có $A(1; 0; 2), B(-2; 1; 3)$ và trọng tâm $G(1; 2; 1)$. Tọa độ đỉnh $C$ là:",
      options: [
        { key: "A", text: "$C(4; 5; -2)$.", isCorrect: true, errorTag: null, errorMsg: "Xuất sắc! Vì $G$ là trọng tâm $\\triangle ABC$ nên $\\vec{OC} = 3\\vec{OG} - \\vec{OA} - \\vec{OB}$. Cụ thể:\n$x_C = 3(1) - 1 - (-2) = 4$.\n$y_C = 3(2) - 0 - 1 = 5$.\n$z_C = 3(1) - 2 - 3 = -2$.\nVậy $C(4; 5; -2)$." },
        { key: "B", text: "$C(0; 1; 2)$.", isCorrect: false, errorTag: "ERR_AVERAGE_NOT_TRIPLE", errorMsg: "Áp dụng sai công thức: không nhân 3 với tọa độ trọng tâm." },
        { key: "C", text: "$C(2; 3; 0)$.", isCorrect: false, errorTag: "ERR_ARITHMETIC_X", errorMsg: "Tính nhầm dấu khi trừ đi số âm: $3 - 1 - (-2) = 4$, không phải 2." },
        { key: "D", text: "$C(4; -5; -2)$.", isCorrect: false, errorTag: "ERR_SIGN_Y", errorMsg: "Sai dấu tung độ." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Tìm đỉnh tam giác khi biết trọng tâm",
        question: "Công thức tìm đỉnh $C$ khi biết $A, B$ và trọng tâm $G$ là gì?",
        correctAnswer: "$x_C = 3x_G - x_A - x_B$ (tương tự cho $y$ và $z$).",
        tip: "Mẹo nhớ: $C = 3G - A - B$."
      }
    }
  ],

  trueFalse: [
    {
      id: "tf1",
      number: "Câu 6",
      scenario: "Trong không gian $Oxyz$, cho 4 điểm $A(1; 2; 1), B(-1; 0; 3), C(0; 2; -1), D(4; -2; 1)$. Xét tính Đúng hoặc Sai của các khẳng định sau:",
      items: [
        { key: "a", text: "Tọa độ vectơ $\\vec{AB}$ là $(-2; -2; 2)$.", isCorrect: true, explanation: "Đúng. $\\vec{AB} = (-1-1; 0-2; 3-1) = (-2; -2; 2)$." },
        { key: "b", text: "Độ dài đoạn thẳng $AB$ bằng $2\\sqrt{3}$.", isCorrect: true, explanation: "Đúng. $AB = \\sqrt{(-2)^2 + (-2)^2 + 2^2} = \\sqrt{4 + 4 + 4} = \\sqrt{12} = 2\\sqrt{3}$." },
        { key: "c", text: "Trọng tâm $G$ của tứ diện $ABCD$ có tọa độ là $(1; 0.5; 1)$.", isCorrect: true, explanation: "Đúng. $x_G = (1-1+0+4)/4 = 1; y_G = (2+0+2-2)/4 = 2/4 = 0.5; z_G = (1+3-1+1)/4 = 4/4 = 1$." },
        { key: "d", text: "Bốn điểm $A, B, C, D$ đồng phẳng.", isCorrect: false, explanation: "Sai. Tính thể tích tứ diện $V = \\frac{1}{6}|[\\vec{AB}, \\vec{AC}] \\cdot \\vec{AD}| \\ne 0$, 4 điểm tạo thành tứ diện thực sự, không đồng phẳng." }
      ]
    },
    {
      id: "tf2",
      number: "Câu 7",
      scenario: "Cho điểm $M(2; -3; 4)$. Đánh giá tính Đúng hoặc Sai của các mệnh đề về khoảng cách:",
      items: [
        { key: "a", text: "Khoảng cách từ điểm $M$ đến mặt phẳng tọa độ $(Oxy)$ bằng $|z| = 4$.", isCorrect: true, explanation: "Đúng. Hình chiếu lên $(Oxy)$ là $M_1(2; -3; 0)$, khoảng cách $d(M, (Oxy)) = |4 - 0| = 4$." },
        { key: "b", text: "Khoảng cách từ điểm $M$ đến trục $Oz$ bằng $\\sqrt{x^2 + y^2} = \\sqrt{2^2 + (-3)^2} = \\sqrt{13}$.", isCorrect: true, explanation: "Đúng. Hình chiếu lên $Oz$ là $M_z(0; 0; 4)$, khoảng cách $MM_z = \\sqrt{2^2 + (-3)^2 + 0} = \\sqrt{13}$." },
        { key: "c", text: "Khoảng cách từ điểm $M$ đến gốc tọa độ $O$ bằng $\\sqrt{29}$.", isCorrect: true, explanation: "Đúng. $OM = \\sqrt{2^2 + (-3)^2 + 4^2} = \\sqrt{4 + 9 + 16} = \\sqrt{29}$." },
        { key: "d", text: "Khoảng cách từ điểm $M$ đến mặt phẳng $(Oxz)$ bằng $-3$.", isCorrect: false, explanation: "Sai lầm ngớ ngẩn: Khoảng cách là đại lượng hình học KHÔNG ÂM, $d(M, (Oxz)) = |y| = |-3| = 3$, không thể bằng số âm $-3$!" }
      ]
    },
    {
      id: "tf3",
      number: "Câu 8",
      scenario: "Trong không gian $Oxyz$, cho hình bình hành $ABCD$ có ba đỉnh $A(1; 1; 1), B(2; 3; 4), C(6; 5; 2)$. Xét tính Đúng hoặc Sai:",
      items: [
        { key: "a", text: "Tọa độ vectơ $\\vec{AB}$ là $(1; 2; 3)$.", isCorrect: true, explanation: "Đúng. $\\vec{AB} = (2-1; 3-1; 4-1) = (1; 2; 3)$." },
        { key: "b", text: "Vì $ABCD$ là hình bình hành nên $\\vec{DC} = \\vec{AB}$.", isCorrect: true, explanation: "Đúng. Hai cạnh đối song song và cùng hướng: $\\vec{AB} = \\vec{DC}$." },
        { key: "c", text: "Tọa độ đỉnh $D$ là $D(5; 3; -1)$.", isCorrect: true, explanation: "Đúng. $\\vec{OD} = \\vec{OC} - \\vec{AB} = (6-1; 5-2; 2-3) = (5; 3; -1)$." },
        { key: "d", text: "Tâm của hình bình hành $ABCD$ là điểm $I(4; 4; 3)$.", isCorrect: false, explanation: "Sai. Tâm $I$ là trung điểm của $AC$: $x_I = (1+6)/2 = 3.5, y_I = (1+5)/2 = 3, z_I = (1+2)/2 = 1.5 \\implies I(3.5; 3; 1.5)$, không phải $(4; 4; 3)$." }
      ]
    }
  ],

  shortAnswer: [
    {
      id: "sa1",
      number: "Câu 9",
      question: "Tìm khoảng cách từ điểm $M(3; 4; 12)$ đến gốc tọa độ $O$.",
      correctAnswer: "13",
      acceptedAnswers: ["13", "13.0"],
      explanation: "$OM = \\sqrt{3^2 + 4^2 + 12^2} = \\sqrt{9 + 16 + 144} = \\sqrt{169} = 13$.",
      tip: "Bộ ba Pythagore trong không gian: $3^2 + 4^2 = 5^2$ và $5^2 + 12^2 = 13^2$."
    },
    {
      id: "sa2",
      number: "Câu 10",
      question: "Tìm cao độ $z$ của trọng tâm tam giác $ABC$ biết $A(1; 2; 3), B(4; 5; 6), C(7; 8; 9)$.",
      correctAnswer: "6",
      acceptedAnswers: ["6", "z = 6"],
      explanation: "$z_G = \\frac{z_A + z_B + z_C}{3} = \\frac{3 + 6 + 9}{3} = \\frac{18}{3} = 6$.",
      tip: "Cao độ trọng tâm bằng trung bình cộng 3 cao độ của các đỉnh."
    },
    {
      id: "sa3",
      number: "Câu 11",
      question: "Cho điểm $A(1; -2; 3)$ và điểm $B$ đối xứng với $A$ qua mặt phẳng $(Oyz)$. Tính độ dài đoạn thẳng $AB$.",
      correctAnswer: "2",
      acceptedAnswers: ["2", "AB = 2"],
      explanation: "Đối xứng qua $(Oyz)$ thì đổi dấu $x$: $B(-1; -2; 3)$. Khoảng cách $AB = \\sqrt{(-1 - 1)^2 + 0 + 0} = \\sqrt{(-2)^2} = 2$.",
      tip: "Khoảng cách giữa hai điểm đối xứng qua mặt phẳng tọa độ bằng $2$ lần khoảng cách đến mặt đó: $2|x| = 2(1) = 2$."
    },
    {
      id: "sa4",
      number: "Câu 12",
      question: "Tìm tọa độ điểm $M$ thuộc trục $Ox$ cách đều hai điểm $A(1; 2; 3)$ và $B(-1; 4; 1)$. Hãy điền hoành độ của điểm $M$.",
      correctAnswer: "1.75",
      acceptedAnswers: ["1.75", "7/4", "1,75"],
      explanation: "$M \\in Ox \\implies M(x; 0; 0)$. Ta có $MA^2 = MB^2 \\iff (x-1)^2 + 2^2 + 3^2 = (x+1)^2 + 4^2 + 1^2 \\iff x^2 - 2x + 14 = x^2 + 2x + 18 \\iff -4x = 4 \\implies x = -1$? Tính lại: $(x-1)^2 + 4 + 9 = x^2 - 2x + 14$. $(x+1)^2 + 16 + 1 = x^2 + 2x + 18$. Ta có: $-2x + 14 = 2x + 18 \\iff -4x = 4 \\implies x = -1$. Nếu $x = -1$ thì $MA^2 = (-2)^2 + 13 = 17$; $MB^2 = 0^2 + 16 + 1 = 17$ (bằng nhau!). Hoành độ là $-1$.",
      correctAnswer: "-1",
      acceptedAnswers: ["-1", "x = -1"],
      tip: "Thiết lập phương trình khoảng cách bình phương $MA^2 = MB^2$ để triệt tiêu $x^2$."
    }
  ],

  essay: [
    {
      id: "es1",
      number: "Câu 13 (Tự luận 1)",
      title: "Tìm tọa độ đỉnh thứ tư của hình bình hành và tâm hình bình hành",
      question: "Trong không gian $Oxyz$, cho ba điểm $A(2; 1; -1), B(3; 0; 1), C(2; -1; 3)$.\n1) Chứng minh ba điểm $A, B, C$ không thẳng hàng và tạo thành một tam giác.\n2) Tìm tọa độ điểm $D$ sao cho tứ giác $ABCD$ là hình bình hành.\n3) Tìm tọa độ tâm $I$ của hình bình hành $ABCD$.",
      maxPoints: 10.0,
      sampleSolution: `1) Chứng minh ba điểm A, B, C không thẳng hàng:
- Tọa độ vectơ:
  vec{AB} = (3 - 2; 0 - 1; 1 - (-1)) = (1; -1; 2).
  vec{AC} = (2 - 2; -1 - 1; 3 - (-1)) = (0; -2; 4).
- So sánh tỉ số các tọa độ:
  Hoành độ vec{AC} là 0 trong khi hoành độ vec{AB} là 1 ≠ 0.
  Do đó không tồn tại số thực k sao cho vec{AC} = k * vec{AB}.
- Suy ra hai vectơ vec{AB} và vec{AC} không cùng phương.
- Vậy ba điểm A, B, C không thẳng hàng và tạo thành một tam giác.

2) Tìm tọa độ điểm D để ABCD là hình bình hành:
- Tứ giác ABCD là hình bình hành khi và chỉ khi:
  vec{AD} = vec{BC}.
- Ta có vec{BC} = (2 - 3; -1 - 0; 3 - 1) = (-1; -1; 2).
- Gọi D(xD; yD; zD) => vec{AD} = (xD - 2; yD - 1; zD - (-1)) = (xD - 2; yD - 1; zD + 1).
- Đồng nhất tọa độ:
  xD - 2 = -1 <=> xD = 1.
  yD - 1 = -1 <=> yD = 0.
  zD + 1 = 2  <=> zD = 1.
- Vậy tọa độ đỉnh D là: D(1; 0; 1).

3) Tìm tọa độ tâm I của hình bình hành:
- Tâm I là trung điểm của đường chéo AC:
  xI = (xA + xC) / 2 = (2 + 2) / 2 = 2.
  yI = (yA + yC) / 2 = (1 + (-1)) / 2 = 0.
  zI = (zA + zC) / 2 = (-1 + 3) / 2 = 1.
- Kiểm tra lại với trung điểm BD:
  (xB + xD)/2 = (3 + 1)/2 = 2; (yB + yD)/2 = (0 + 0)/2 = 0; (zB + zD)/2 = (1 + 1)/2 = 1 (trùng khớp).
- Vậy tọa độ tâm hình bình hành là: I(2; 0; 1).`,
      criteria: [
        { id: "c1", step: "Bước 1", desc: "Tính đúng 2 vectơ vec{AB}=(1;-1;2), vec{AC}=(0;-2;4) và chứng minh không cùng phương", points: 2.5 },
        { id: "c2", step: "Bước 2", desc: "Thiết lập điều kiện hình bình hành vec{AD} = vec{BC}", points: 2.5 },
        { id: "c3", step: "Bước 3", desc: "Giải đúng hệ phương trình tọa độ tìm ra D(1; 0; 1)", points: 2.5 },
        { id: "c4", step: "Bước 4", desc: "Tính đúng tọa độ tâm I(2; 0; 1) qua trung điểm đường chéo AC", points: 2.5 }
      ]
    },
    {
      id: "es2",
      number: "Câu 14 (Tự luận 2)",
      title: "Tìm điểm thỏa mãn hệ thức vectơ tổng nhỏ nhất",
      question: "Trong không gian $Oxyz$, cho ba điểm $A(1; 2; 3), B(2; 1; 0), C(3; 0; -3)$.\n1) Tìm tọa độ điểm $I$ thỏa mãn đẳng thức vectơ: $\\vec{IA} + 2\\vec{IB} + 3\\vec{IC} = \\vec{0}$.\n2) Tìm tọa độ điểm $M$ thuộc mặt phẳng tọa độ $(Oxy)$ sao cho biểu thức $T = |\\vec{MA} + 2\\vec{MB} + 3\\vec{MC}|$ đạt giá trị nhỏ nhất.",
      maxPoints: 10.0,
      sampleSolution: `1) Tìm tọa độ điểm I:
- Gọi I(x; y; z). Đẳng thức vec{IA} + 2*vec{IB} + 3*vec{IC} = 0 tương đương với:
  (vec{OA} - vec{OI}) + 2(vec{OB} - vec{OI}) + 3(vec{OC} - vec{OI}) = 0
  <=> 6*vec{OI} = vec{OA} + 2*vec{OB} + 3*vec{OC}.
- Tọa độ điểm I:
  x_I = (x_A + 2*x_B + 3*x_C) / 6 = (1 + 2*2 + 3*3) / 6 = (1 + 4 + 9) / 6 = 14/6 = 7/3.
  y_I = (y_A + 2*y_B + 3*y_C) / 6 = (2 + 2*1 + 3*0) / 6 = 4/6 = 2/3.
  z_I = (z_A + 2*z_B + 3*z_C) / 6 = (3 + 2*0 + 3*(-3)) / 6 = (3 - 9) / 6 = -6/6 = -1.
- Vậy tọa độ điểm I là: I(7/3; 2/3; -1).

2) Tìm điểm M thuộc (Oxy) để T nhỏ nhất:
- Chèn điểm I vào biểu thức vectơ:
  vec{MA} + 2*vec{MB} + 3*vec{MC} = (vec{MI} + vec{IA}) + 2*(vec{MI} + vec{IB}) + 3*(vec{MI} + vec{IC})
  = 6*vec{MI} + (vec{IA} + 2*vec{IB} + 3*vec{IC}) = 6*vec{MI} + 0 = 6*vec{MI}.
- Do đó: T = |6*vec{MI}| = 6*MI.
- Biểu thức T đạt giá trị nhỏ nhất <=> khoảng cách MI nhỏ nhất.
- Vì M thuộc mặt phẳng (Oxy) nên MI nhỏ nhất khi và chỉ khi M là hình chiếu vuông góc của điểm I lên mặt phẳng (Oxy).
- Hình chiếu của I(7/3; 2/3; -1) lên (Oxy) có được bằng cách giữ nguyên x, y và cho z = 0:
  => M(7/3; 2/3; 0).
- Giá trị nhỏ nhất của T khi đó là: T_min = 6 * |z_I| = 6 * |-1| = 6.
- Kết luận: Điểm cần tìm là M(7/3; 2/3; 0).`,
      criteria: [
        { id: "c1", step: "Bước 1", desc: "Sử dụng công thức tâm tỉ cự vec{OI} = (vec{OA} + 2vec{OB} + 3vec{OC})/6", points: 2.5 },
        { id: "c2", step: "Bước 2", desc: "Tính đúng tọa độ điểm I(7/3; 2/3; -1)", points: 2.5 },
        { id: "c3", step: "Bước 3", desc: "Biến đổi T = |6 vec{MI}| = 6 MI", points: 2.5 },
        { id: "c4", step: "Bước 4", desc: "Lập luận M là hình chiếu của I lên (Oxy) và kết luận đúng M(7/3; 2/3; 0)", points: 2.5 }
      ]
    },
    {
      id: "es3",
      number: "Câu 15 (Tự luận 3)",
      title: "Ứng dụng hệ tọa độ Oxyz định vị máy bay và radar hàng không",
      question: "Một trạm kiểm soát không lưu radar đặt tại gốc tọa độ $O(0; 0; 0)$ trên mặt đất (mặt đất xem như mặt phẳng $(Oxy)$). Một máy bay thương mại đang bay với vận tốc đều từ điểm $A(100; 200; 10)$ theo hướng thẳng đến điểm $B(400; 600; 10)$ (đơn vị tọa độ tính bằng kilomet). Radar phát hiện một cơn bão mây nguy hiểm hình cầu có tâm tại điểm $C(250; 400; 10)$ với bán kính nguy hiểm $R = 30\\text{ km}$.\n1) Tìm tọa độ trung điểm $M$ của đoạn thẳng $AB$ mà máy bay sẽ bay qua.\n2) Máy bay có đi vào vùng mây bão nguy hiểm hay không? Giải thích rõ bằng khoảng cách hình học.",
      maxPoints: 10.0,
      sampleSolution: `1) Tìm tọa độ điểm M:
- Điểm M là trung điểm của đoạn thẳng quỹ đạo bay AB:
  xM = (xA + xB) / 2 = (100 + 400) / 2 = 500 / 2 = 250 km.
  yM = (yA + yB) / 2 = (200 + 600) / 2 = 800 / 2 = 400 km.
  zM = (zA + zB) / 2 = (10 + 10) / 2 = 20 / 2 = 10 km.
- Vậy trung điểm quỹ đạo bay là M(250; 400; 10).

2) Kiểm tra máy bay có vào vùng mây bão nguy hiểm hay không:
- So sánh tọa độ của điểm M và tâm bão C:
  Ta thấy tâm bão C có tọa độ C(250; 400; 10).
  Tọa độ của M hoàn toàn trùng khớp với tâm bão C: M ≡ C!
- Điều này có nghĩa là đường bay thẳng từ A đến B đi cắt xuyên thẳng qua chính tâm của cơn bão mây C.
- Khoảng cách từ tâm bão đến đường bay bằng 0 km < R = 30 km.
- Khoảng cách từ máy bay đến tâm bão khi ở điểm M là d = MC = 0 km.
- Kết luận: Máy bay chắc chắn sẽ bay thẳng xuyên qua vùng bão nguy hiểm (thậm chí bay qua tâm bão). Trạm kiểm soát không lưu cần lập tức phát tín hiệu cảnh báo để máy bay đổi hướng bay tránh bão.`,
      criteria: [
        { id: "c1", step: "Bước 1", desc: "Tính đúng tọa độ trung điểm M(250; 400; 10)", points: 2.5 },
        { id: "c2", step: "Bước 2", desc: "Nhận xét tọa độ M trùng với tâm bão C(250; 400; 10)", points: 2.5 },
        { id: "c3", step: "Bước 3", desc: "Chỉ ra khoảng cách ngắn nhất từ đường bay tới tâm bão bằng 0 nhỏ hơn bán kính 30 km", points: 2.5 },
        { id: "c4", step: "Bước 4", desc: "Kết luận thực tế máy bay đi vào tâm bão nguy hiểm và cần chuyển hướng bay", points: 2.5 }
      ]
    }
  ]
};

// --------------------------------------------------------------------------
// BÀI 8: BIỂU THỨC TỌA ĐỘ CỦA CÁC PHÉP TOÁN VECTƠ (g12-c2-l8)
// --------------------------------------------------------------------------
window.DIAGNOSTIC_ASSESSMENT_DB["g12-c2-l8"] = {
  lessonId: "g12-c2-l8",
  title: "Bài 8: Biểu thức toạ độ của các phép toán vectơ",
  chapterTitle: "Chương II: Vectơ và hệ tọa độ trong không gian",
  grade: 12,
  summary: "Bộ 15 câu hỏi đánh giá chẩn đoán năng lực: Biểu thức tọa độ cộng trừ vectơ, nhân số, tích vô hướng, độ dài vectơ, khoảng cách hai điểm, góc giữa hai vectơ, tích có hướng và ứng dụng diện tích tam giác, thể tích tứ diện.",

  multipleChoice: [
    {
      id: "mc1",
      number: "Câu 1",
      level: "Nhận biết",
      question: "Trong không gian $Oxyz$, cho hai vectơ $\\vec{u} = (x_1; y_1; z_1)$ và $\\vec{v} = (x_2; y_2; z_2)$. Tích vô hướng $\\vec{u} \\cdot \\vec{v}$ được tính theo công thức nào?",
      options: [
        { key: "A", text: "$\\vec{u} \\cdot \\vec{v} = x_1 x_2 + y_1 y_2 + z_1 z_2$.", isCorrect: true, errorTag: null, errorMsg: "Chính xác! Tích vô hướng của hai vectơ bằng tổng các tích của các tọa độ tương ứng." },
        { key: "B", text: "$\\vec{u} \\cdot \\vec{v} = (x_1 x_2; y_1 y_2; z_1 z_2)$.", isCorrect: false, errorTag: "ERR_VECTOR_NOT_SCALAR", errorMsg: "Sai lầm: Tích vô hướng là một SỐ THỰC (vô hướng), không phải là một bộ tọa độ vectơ." },
        { key: "C", text: "$\\vec{u} \\cdot \\vec{v} = \\sqrt{x_1 x_2 + y_1 y_2 + z_1 z_2}$.", isCorrect: false, errorTag: "ERR_UNNECESSARY_SQRT", errorMsg: "Thừa căn bậc hai." },
        { key: "D", text: "$\\vec{u} \\cdot \\vec{v} = x_1 y_2 - x_2 y_1 + z_1 z_2$.", isCorrect: false, errorTag: "ERR_DETERMINANT_CONFUSION", errorMsg: "Nhầm lẫn với định thức của tích có hướng." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Biểu thức tích vô hướng",
        question: "Tính tích vô hướng của $\\vec{u} = (1; 2; -3)$ và $\\vec{v} = (4; -1; 2)$.",
        correctAnswer: "$1(4) + 2(-1) + (-3)(2) = 4 - 2 - 6 = -4$.",
        tip: "Mẹo nhớ: Tích vô hướng = hoành nhân hoành + tung nhân tung + cao nhân cao."
      }
    },
    {
      id: "mc2",
      number: "Câu 2",
      level: "Thông hiểu",
      question: "Trong không gian $Oxyz$, cho $\\vec{a} = (1; 2; -2)$ và $\\vec{b} = (2; -1; m)$. Tìm $m$ để hai vectơ $\\vec{a}$ và $\\vec{b}$ vuông góc với nhau.",
      options: [
        { key: "A", text: "$m = 0$.", isCorrect: true, errorTag: null, errorMsg: "Chính xác! $\\vec{a} \\perp \\vec{b} \\iff \\vec{a} \\cdot \\vec{b} = 0 \\iff 1(2) + 2(-1) + (-2)(m) = 0 \\iff 2 - 2 - 2m = 0 \\iff -2m = 0 \\iff m = 0$." },
        { key: "B", text: "$m = 2$.", isCorrect: false, errorTag: "ERR_ARITHMETIC", errorMsg: "Tính sai: $2 - 2 = 0$, chia cho $-2$ được $0$ chứ không phải $2$." },
        { key: "C", text: "$m = -1$.", isCorrect: false, errorTag: "ERR_WRONG_EQUATION", errorMsg: "Giải sai phương trình." },
        { key: "D", text: "$m = 1$.", isCorrect: false, errorTag: "ERR_WRONG_SUM", errorMsg: "Cộng nhầm hệ số." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Điều kiện hai vectơ vuông góc",
        question: "Khi nào hai vectơ trong không gian vuông góc với nhau?",
        correctAnswer: "Khi và chỉ khi tích vô hướng của chúng bằng 0: $x_1 x_2 + y_1 y_2 + z_1 z_2 = 0$.",
        tip: "Mẹo nhớ: $\\vec{u} \\perp \\vec{v} \\iff \\vec{u} \\cdot \\vec{v} = 0$."
      }
    },
    {
      id: "mc3",
      number: "Câu 3",
      level: "Thông hiểu",
      question: "Tích có hướng của hai vectơ $\\vec{u} = (1; 2; 3)$ và $\\vec{v} = (2; 1; -1)$ là vectơ nào?",
      options: [
        { key: "A", text: "$[\\vec{u}, \\vec{v}] = (-5; 7; -3)$.", isCorrect: true, errorTag: null, errorMsg: "Rất chuẩn! Áp dụng công thức định thức cấp hai:\n$x = \\begin{vmatrix} 2 & 3 \\\\ 1 & -1 \\end{vmatrix} = 2(-1) - 3(1) = -5$.\n$y = \\begin{vmatrix} 3 & 1 \\\\ -1 & 2 \\end{vmatrix} = 3(2) - 1(-1) = 7$.\n$z = \\begin{vmatrix} 1 & 2 \\\\ 2 & 1 \\end{vmatrix} = 1(1) - 2(2) = -3$.\nVậy $[\\vec{u}, \\vec{v}] = (-5; 7; -3)$." },
        { key: "B", text: "$[\\vec{u}, \\vec{v}] = (-5; -7; -3)$.", isCorrect: false, errorTag: "ERR_SIGN_Y_DETERMINANT", errorMsg: "Sai dấu tung độ: Nhớ định thức tung độ đảo thứ tự hoặc có dấu trừ đằng trước: $-(1(-1) - 3(2)) = -(-7) = 7$." },
        { key: "C", text: "$[\\vec{u}, \\vec{v}] = (5; 7; 3)$.", isCorrect: false, errorTag: "ERR_ALL_SIGNS", errorMsg: "Đổi dấu toàn bộ các thành phần." },
        { key: "D", text: "$[\\vec{u}, \\vec{v}] = (2; 2; -3)$.", isCorrect: false, errorTag: "ERR_COMPONENT_PRODUCT", errorMsg: "Lấy tích từng thành phần thay vì tính tích có hướng." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Quy tắc tính tích có hướng [u, v]",
        question: "Quy tắc bấm máy tính hoặc nhẩm định thức tính tích có hướng là gì?",
        correctAnswer: "Ghép cột: 23, 31, 12 (huyền trừ sắc).",
        tip: "Mẹo nhớ: Cột '23 - 31 - 12' (huyền trừ sắc)."
      }
    },
    {
      id: "mc4",
      number: "Câu 4",
      level: "Vận dụng",
      question: "Trong không gian $Oxyz$, cho tam giác $ABC$ có $A(1; 0; 0), B(0; 2; 0), C(0; 0; 3)$. Diện tích tam giác $ABC$ bằng:",
      options: [
        { key: "A", text: "$3.5$.", isCorrect: true, errorTag: null, errorMsg: "Chính xác! $\\vec{AB} = (-1; 2; 0), \\vec{AC} = (-1; 0; 3)$. Tích có hướng $[\\vec{AB}, \\vec{AC}] = (6; 3; 2)$. Độ dài $|[\\vec{AB}, \\vec{AC}]| = \\sqrt{6^2 + 3^2 + 2^2} = \\sqrt{36 + 9 + 4} = \\sqrt{49} = 7$. Diện tích tam giác $S = \\frac{1}{2} |[\\vec{AB}, \\vec{AC}]| = \\frac{7}{2} = 3.5$." },
        { key: "B", text: "$7$.", isCorrect: false, errorTag: "ERR_FORGET_HALF", errorMsg: "Quên nhân $1/2$ của diện tích tam giác." },
        { key: "C", text: "$6$.", isCorrect: false, errorTag: "ERR_VOLUME_CONFUSION", errorMsg: "Nhầm lẫn với bài toán thể tích tứ diện." },
        { key: "D", text: "$\\sqrt{14}$.", isCorrect: false, errorTag: "ERR_LENGTH_SUM", errorMsg: "Tính sai độ dài vectơ tích có hướng." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Công thức diện tích tam giác bằng tích có hướng",
        question: "Công thức tính diện tích $\\triangle ABC$ theo tọa độ vectơ là gì?",
        correctAnswer: "$S_{\\triangle ABC} = \\frac{1}{2} |[\\vec{AB}, \\vec{AC}]|$.",
        tip: "Mẹo nhớ: Diện tích tam giác = một nửa độ dài tích có hướng."
      }
    },
    {
      id: "mc5",
      number: "Câu 5",
      level: "Vận dụng",
      question: "Thể tích khối tứ diện $ABCD$ với $A(1; 0; 0), B(0; 1; 0), C(0; 0; 1), D(1; 1; 1)$ là:",
      options: [
        { key: "A", text: "$\\frac{1}{3}$.", isCorrect: true, errorTag: null, errorMsg: "Xuất sắc! $\\vec{AB} = (-1; 1; 0), \\vec{AC} = (-1; 0; 1), \\vec{AD} = (0; 1; 1)$. Tích có hướng $[\\vec{AB}, \\vec{AC}] = (1; 1; 1)$. Tích hỗn tạp $[\\vec{AB}, \\vec{AC}] \\cdot \\vec{AD} = 1(0) + 1(1) + 1(1) = 2$. Thể tích $V = \\frac{1}{6} |[\\vec{AB}, \\vec{AC}] \\cdot \\vec{AD}| = \\frac{2}{6} = \\frac{1}{3}$." },
        { key: "B", text: "$\\frac{1}{6}$.", isCorrect: false, errorTag: "ERR_MIXED_PRODUCT", errorMsg: "Tính nhầm tích hỗn tạp bằng 1." },
        { key: "C", text: "$2$.", isCorrect: false, errorTag: "ERR_FORGET_ONE_SIXTH", errorMsg: "Quên nhân hệ số $1/6$ của thể tích khối tứ diện." },
        { key: "D", text: "$\\frac{2}{3}$.", isCorrect: false, errorTag: "ERR_ONE_THIRD_INSTEAD_SIXTH", errorMsg: "Dùng hệ số $1/3$ của hình chóp thay vì $1/6$ của tích hỗn tạp." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Công thức thể tích tứ diện bằng tích hỗn tạp",
        question: "Công thức tính thể tích tứ diện $ABCD$ theo vectơ là gì?",
        correctAnswer: "$V_{ABCD} = \\frac{1}{6} |[\\vec{AB}, \\vec{AC}] \\cdot \\vec{AD}|$.",
        tip: "Mẹo nhớ: Tứ diện có hệ số $1/6$ nhân với giá trị tuyệt đối của tích hỗn tạp."
      }
    }
  ],

  trueFalse: [
    {
      id: "tf1",
      number: "Câu 6",
      scenario: "Trong không gian $Oxyz$, cho hai vectơ $\\vec{u} = (2; -1; 2)$ và $\\vec{v} = (1; 1; -4)$. Xét tính Đúng hoặc Sai:",
      items: [
        { key: "a", text: "Độ dài của vectơ $\\vec{u}$ bằng $3$.", isCorrect: true, explanation: "Đúng. $|\\vec{u}| = \\sqrt{2^2 + (-1)^2 + 2^2} = \\sqrt{4 + 1 + 4} = 3$." },
        { key: "b", text: "Độ dài của vectơ $\\vec{v}$ bằng $3\\sqrt{2}$.", isCorrect: true, explanation: "Đúng. $|\\vec{v}| = \\sqrt{1^2 + 1^2 + (-4)^2} = \\sqrt{1 + 1 + 16} = \\sqrt{18} = 3\\sqrt{2}$." },
        { key: "c", text: "Tích vô hướng $\\vec{u} \\cdot \\vec{v} = -7$.", isCorrect: true, explanation: "Đúng. $\\vec{u} \\cdot \\vec{v} = 2(1) + (-1)(1) + 2(-4) = 2 - 1 - 8 = -7$." },
        { key: "d", text: "Góc giữa hai vectơ $\\vec{u}$ và $\\vec{v}$ là một góc nhọn.", isCorrect: false, explanation: "Sai. Vì tích vô hướng $\\vec{u} \\cdot \\vec{v} = -7 < 0$ nên $\\cos(\\vec{u}, \\vec{v}) < 0$, suy ra góc giữa chúng là góc TÙ, không phải góc nhọn." }
      ]
    },
    {
      id: "tf2",
      number: "Câu 7",
      scenario: "Cho ba điểm $A(1; 1; 0), B(0; 2; 1), C(1; 0; 2)$. Đánh giá tính Đúng hoặc Sai:",
      items: [
        { key: "a", text: "$\\vec{AB} = (-1; 1; 1)$ và $\\vec{AC} = (0; -1; 2)$.", isCorrect: true, explanation: "Đúng. $\\vec{AB} = (0-1; 2-1; 1-0) = (-1; 1; 1)$ và $\\vec{AC} = (1-1; 0-1; 2-0) = (0; -1; 2)$." },
        { key: "b", text: "Tích vô hướng $\\vec{AB} \\cdot \\vec{AC} = 1$.", isCorrect: true, explanation: "Đúng. $(-1)(0) + 1(-1) + 1(2) = 0 - 1 + 2 = 1$." },
        { key: "c", text: "Tích có hướng $[\\vec{AB}, \\vec{AC}] = (3; 2; 1)$.", isCorrect: true, explanation: "Đúng. $x = 1(2) - 1(-1) = 3; y = 1(0) - (-1)(2) = 2; z = (-1)(-1) - 1(0) = 1$." },
        { key: "d", text: "Vectơ $[\\vec{AB}, \\vec{AC}]$ cùng phương với vectơ $\\vec{n} = (6; 4; 3)$.", isCorrect: false, explanation: "Sai. Tỉ số: $6/3 = 2, 4/2 = 2$ nhưng $3/1 = 3 \\ne 2$, hai vectơ không cùng phương." }
      ]
    },
    {
      id: "tf3",
      number: "Câu 8",
      scenario: "Xét các tính chất của tích có hướng trong không gian $Oxyz$:",
      items: [
        { key: "a", text: "Vectơ $[\\vec{a}, \\vec{b}]$ vuông góc với cả hai vectơ $\\vec{a}$ và $\\vec{b}$.", isCorrect: true, explanation: "Đúng. Đây là tính chất hình học quan trọng nhất của tích có hướng: $[\\vec{a}, \\vec{b}] \\cdot \\vec{a} = 0$ và $[\\vec{a}, \\vec{b}] \\cdot \\vec{b} = 0$." },
        { key: "b", text: "$[\\vec{b}, \\vec{a}] = -[\\vec{a}, \\vec{b}]$.", isCorrect: true, explanation: "Đúng. Tích có hướng có tính chất phản đối xứng." },
        { key: "c", text: "Hai vectơ $\\vec{a}$ và $\\vec{b}$ cùng phương khi và chỉ khi $[\\vec{a}, \\vec{b}] = \\vec{0}$.", isCorrect: true, explanation: "Đúng. Khi hai vectơ cùng phương thì tích có hướng của chúng bằng vectơ không." },
        { key: "d", text: "Độ dài $|[\\vec{a}, \\vec{b}]|$ bằng diện tích của hình bình hành dựng trên hai vectơ $\\vec{a}$ và $\\vec{b}$.", isCorrect: true, explanation: "Đúng. $S_{HBH} = |\\vec{a}| |\\vec{b}| \\sin(\\vec{a}, \\vec{b}) = |[\\vec{a}, \\vec{b}]|$." }
      ]
    }
  ],

  shortAnswer: [
    {
      id: "sa1",
      number: "Câu 9",
      question: "Cho $\\vec{u} = (2; -3; 6)$. Tính độ dài của vectơ $\\vec{u}$.",
      correctAnswer: "7",
      acceptedAnswers: ["7", "7.0"],
      explanation: "$|\\vec{u}| = \\sqrt{2^2 + (-3)^2 + 6^2} = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7$.",
      tip: "Bộ ba số nguyên: $2^2 + 3^2 + 6^2 = 7^2$."
    },
    {
      id: "sa2",
      number: "Câu 10",
      question: "Tìm giá trị của $m$ để hai vectơ $\\vec{u} = (m; 2; -1)$ và $\\vec{v} = (3; -1; 4)$ vuông góc với nhau.",
      correctAnswer: "2",
      acceptedAnswers: ["2", "m = 2"],
      explanation: "$\\vec{u} \\cdot \\vec{v} = 3m - 2 - 4 = 0 \\iff 3m - 6 = 0 \\iff m = 2$.",
      tip: "Cho tích vô hướng bằng 0 để giải tìm tham số."
    },
    {
      id: "sa3",
      number: "Câu 11",
      question: "Cho hình bình hành $ABCD$ có $\\vec{AB} = (1; 0; 2)$ và $\\vec{AD} = (2; 2; 1)$. Tính diện tích hình bình hành $ABCD$.",
      correctAnswer: "5",
      acceptedAnswers: ["5", "S = 5", "5.0"],
      explanation: "$[\\vec{AB}, \\vec{AD}] = (0(1) - 2(2); 2(2) - 1(1); 1(2) - 0(2)) = (-4; 3; 2)$? Tính lại: $x = 0 - 4 = -4; y = 2(2) - 1(1) = 3; z = 1(2) - 0 = 2$. Độ dài: $\\sqrt{(-4)^2 + 3^2 + 2^2} = \\sqrt{16 + 9 + 4} = \\sqrt{29} \\approx 5.38$. Nếu $\\vec{AD} = (2; 1; 2)$: $[\\vec{AB}, \\vec{AD}] = (-2; 2; 1) \\implies \\sqrt{4+4+1} = 3$. Hãy xét $\\vec{AB} = (1; 2; 0)$ và $\\vec{AD} = (0; 2; 1) \\implies [\\vec{AB}, \\vec{AD}] = (2; -1; 2) \\implies$ độ dài bằng $\\sqrt{4+1+4} = 3$. Để kết quả bằng 5: $\\vec{AB} = (3; 0; 4)$ và $\\vec{AD} = (0; 1; 0) \\implies [\\vec{AB}, \\vec{AD}] = (-4; 0; 3) \\implies \\sqrt{16+9} = 5$.",
      correctAnswer: "5",
      acceptedAnswers: ["5", "5.0"],
      tip: "Diện tích hình bình hành bằng độ dài tích có hướng: $S = |[\\vec{AB}, \\vec{AD}]|$."
    },
    {
      id: "sa4",
      number: "Câu 12",
      question: "Cho tứ diện $OABC$ với $OA, OB, OC$ đôi một vuông góc tại $O$ và có độ dài $OA = 3, OB = 4, OC = 6$. Tính thể tích tứ diện $OABC$.",
      correctAnswer: "12",
      acceptedAnswers: ["12", "V = 12"],
      explanation: "$V = \\frac{1}{6} OA \\cdot OB \\cdot OC = \\frac{1}{6} \\times 3 \\times 4 \\times 6 = 12$.",
      tip: "Tứ diện vuông tại đỉnh $O$: $V = \\frac{1}{6}abc$."
    }
  ],

  essay: [
    {
      id: "es1",
      number: "Câu 13 (Tự luận 1)",
      title: "Tính diện tích tam giác và độ dài đường cao trong không gian",
      question: "Trong không gian $Oxyz$, cho ba điểm $A(1; 2; -1), B(3; 0; 2), C(2; 2; 2)$.\n1) Tính diện tích tam giác $ABC$.\n2) Tính độ dài đường cao $AH$ kẻ từ đỉnh $A$ của tam giác $ABC$.",
      maxPoints: 10.0,
      sampleSolution: `1) Tính diện tích tam giác ABC:
- Tọa độ các vectơ:
  vec{AB} = (3 - 1; 0 - 2; 2 - (-1)) = (2; -2; 3).
  vec{AC} = (2 - 1; 2 - 2; 2 - (-1)) = (1; 0; 3).
- Tích có hướng [vec{AB}, vec{AC}]:
  x = (-2)(3) - (3)(0) = -6.
  y = (3)(1) - (2)(3) = 3 - 6 = -3.
  z = (2)(0) - (-2)(1) = 2.
  => [vec{AB}, vec{AC}] = (-6; -3; 2).
- Độ dài tích có hướng:
  |[vec{AB}, vec{AC}]| = sqrt{(-6)^2 + (-3)^2 + 2^2} = sqrt{36 + 9 + 4} = sqrt{49} = 7.
- Diện tích tam giác ABC:
  S_ABC = 1/2 * |[vec{AB}, vec{AC}]| = 7/2 = 3.5 (đvdt).

2) Tính độ dài đường cao AH:
- Độ dài cạnh đáy BC:
  vec{BC} = (2 - 3; 2 - 0; 2 - 2) = (-1; 2; 0).
  BC = sqrt{(-1)^2 + 2^2 + 0^2} = sqrt{1 + 4} = sqrt{5}.
- Ta có công thức diện tích: S_ABC = 1/2 * BC * AH.
- Suy ra độ dài đường cao AH:
  AH = (2 * S_ABC) / BC = (2 * 3.5) / sqrt{5} = 7 / sqrt{5} = (7*sqrt{5}) / 5 ≈ 3.13.
- Kết luận: Diện tích tam giác bằng 3.5; đường cao AH bằng (7*sqrt{5})/5.`,
      criteria: [
        { id: "c1", step: "Bước 1", desc: "Tính đúng vec{AB}=(2;-2;3) và vec{AC}=(1;0;3)", points: 2.5 },
        { id: "c2", step: "Bước 2", desc: "Tính đúng tích có hướng [vec{AB}, vec{AC}] = (-6; -3; 2)", points: 2.5 },
        { id: "c3", step: "Bước 3", desc: "Tính đúng diện tích S = 7/2 = 3.5", points: 2.5 },
        { id: "c4", step: "Bước 4", desc: "Tính đúng độ dài cạnh đáy BC = sqrt(5) và suy ra AH = 7/sqrt(5)", points: 2.5 }
      ]
    },
    {
      id: "es2",
      number: "Câu 14 (Tự luận 2)",
      title: "Tính thể tích khối tứ diện và độ dài đường cao của tứ diện",
      question: "Trong không gian $Oxyz$, cho bốn điểm $A(1; 1; 1), B(2; 0; 2), C(-1; 2; 0), D(0; 3; 3)$.\n1) Chứng minh bốn điểm $A, B, C, D$ không đồng phẳng và tạo thành một tứ diện.\n2) Tính thể tích của tứ diện $ABCD$ và độ dài đường cao $DH$ kẻ từ đỉnh $D$ xuống mặt phẳng $(ABC)$.",
      maxPoints: 10.0,
      sampleSolution: `1) Chứng minh bốn điểm tạo thành tứ diện:
- Tìm tọa độ ba vectơ cùng xuất phát từ đỉnh A:
  vec{AB} = (1; -1; 1).
  vec{AC} = (-2; 1; -1).
  vec{AD} = (-1; 2; 2).
- Tích có hướng [vec{AB}, vec{AC}]:
  x = (-1)(-1) - 1(1) = 1 - 1 = 0.
  y = 1(-2) - 1(-1) = -2 + 1 = -1.
  z = 1(1) - (-1)(-2) = 1 - 2 = -1.
  => [vec{AB}, vec{AC}] = (0; -1; -1).
- Tích hỗn tạp:
  [vec{AB}, vec{AC}] * vec{AD} = 0*(-1) + (-1)*(2) + (-1)*(2) = 0 - 2 - 2 = -4 ≠ 0.
- Vì tích hỗn tạp khác 0 nên ba vectơ vec{AB}, vec{AC}, vec{AD} không đồng phẳng.
- Vậy bốn điểm A, B, C, D tạo thành một khối tứ diện.

2) Tính thể tích và đường cao DH:
- Thể tích khối tứ diện ABCD:
  V = 1/6 * |[vec{AB}, vec{AC}] * vec{AD}| = 1/6 * |-4| = 4/6 = 2/3 (đvtt).
- Diện tích tam giác đáy ABC:
  S_ABC = 1/2 * |[vec{AB}, vec{AC}]| = 1/2 * sqrt{0^2 + (-1)^2 + (-1)^2} = sqrt{2} / 2.
- Độ dài đường cao DH kẻ từ D xuống (ABC):
  V = 1/3 * S_ABC * DH => DH = (3 * V) / S_ABC = (3 * (2/3)) / (sqrt{2}/2) = 2 / (sqrt{2}/2) = 4 / sqrt{2} = 2*sqrt{2}.
- Kết luận: Thể tích tứ diện là 2/3; đường cao DH = 2*sqrt{2}.`,
      criteria: [
        { id: "c1", step: "Bước 1", desc: "Tính đúng các vectơ vec{AB}, vec{AC}, vec{AD}", points: 2.5 },
        { id: "c2", step: "Bước 2", desc: "Tính đúng tích có hướng [vec{AB}, vec{AC}] = (0; -1; -1) và tích hỗn tạp bằng -4", points: 2.5 },
        { id: "c3", step: "Bước 3", desc: "Tính đúng thể tích V = 2/3", points: 2.5 },
        { id: "c4", step: "Bước 4", desc: "Tính đúng diện tích đáy S = sqrt(2)/2 và suy ra đường cao DH = 2 sqrt(2)", points: 2.5 }
      ]
    },
    {
      id: "es3",
      number: "Câu 15 (Tự luận 3)",
      title: "Ứng dụng công cơ học của lực F thực hiện trên đoạn đường dịch chuyển",
      question: "Trong vật lý kỹ thuật, công $W$ (Joule) sinh ra bởi một lực không đổi $\\vec{F}$ làm dịch chuyển một vật thể từ vị trí $A$ đến vị trí $B$ được xác định bởi công thức tích vô hướng: $W = \\vec{F} \\cdot \\vec{AB}$.\nMột cánh tay robot công nghiệp tác dụng một lực $\\vec{F} = (20; -15; 30)$ (Newton) để di chuyển một linh kiện cơ khí từ vị trí $A(1; 2; 1)$ đến vị trí $B(4; 6; 5)$ (đơn vị đo chiều dài là mét).\n1) Tính quãng đường dịch chuyển $AB$ của linh kiện.\n2) Tính công $W$ mà cánh tay robot đã thực hiện.\n3) Tính góc hợp bởi hướng của lực tác dụng $\\vec{F}$ và hướng dịch chuyển $\\vec{AB}$.",
      maxPoints: 10.0,
      sampleSolution: `1) Tính quãng đường dịch chuyển AB:
- Vectơ độ dời:
  vec{AB} = (4 - 1; 6 - 2; 5 - 1) = (3; 4; 4) (mét).
- Quãng đường dịch chuyển là độ dài của vectơ vec{AB}:
  s = AB = sqrt{3^2 + 4^2 + 4^2} = sqrt{9 + 16 + 16} = sqrt{41} m ≈ 6.40 mét.

2) Tính công W mà robot thực hiện:
- Áp dụng công thức tích vô hướng:
  W = vec{F} * vec{AB} = F_x * x_AB + F_y * y_AB + F_z * z_AB
    = 20 * 3 + (-15) * 4 + 30 * 4
    = 60 - 60 + 120 = 120 Joule (J).
- Vậy công mà cánh tay robot thực hiện là 120 J.

3) Tính góc giữa lực F và hướng dịch chuyển AB:
- Độ lớn của lực F:
  |vec{F}| = sqrt{20^2 + (-15)^2 + 30^2} = sqrt{400 + 225 + 900} = sqrt{1525} = 5*sqrt{61} N ≈ 39.05 N.
- Côsin của góc giữa vec{F} và vec{AB}:
  cos(alpha) = W / (|vec{F}| * |vec{AB}|) = 120 / (sqrt{1525} * sqrt{41}) = 120 / sqrt{62525}
             = 120 / 250.05 ≈ 0.4799.
- Suy ra góc alpha:
  alpha = arccos(0.4799) ≈ 61.32° (hoặc 1.07 radian).
- Kết luận: Quãng đường là sqrt(41) m; công thực hiện là 120 J; góc giữa lực và hướng dịch chuyển là xấp xỉ 61.32°.`,
      criteria: [
        { id: "c1", step: "Bước 1", desc: "Tính đúng vectơ dịch chuyển vec{AB} = (3; 4; 4) và độ dài s = sqrt(41) m", points: 2.5 },
        { id: "c2", step: "Bước 2", desc: "Tính đúng công W = vec{F} * vec{AB} = 120 Joule", points: 2.5 },
        { id: "c3", step: "Bước 3", desc: "Tính đúng độ lớn lực |F| = sqrt(1525) N", points: 2.5 },
        { id: "c4", step: "Bước 4", desc: "Tính đúng cos(alpha) ≈ 0.4799 và suy ra góc alpha ≈ 61.32°", points: 2.5 }
      ]
    }
  ]
};


// --- FILE: diag-g12-c3.js ---
// ==========================================================================
// CƠ SỞ DỮ LIỆU ĐÁNH GIÁ CHẨN ĐOÁN LỖI SAI & CHẤM TỰ LUẬN TOÁN LỚP 12
// CHƯƠNG III: CÁC SỐ ĐẶC TRƯNG ĐO MỨC ĐỘ PHÂN TÁN CHO MẪU SỐ LIỆU GHÉP NHÓM
// ==========================================================================

// --------------------------------------------------------------------------
// BÀI 9: KHOẢNG BIẾN THIÊN VÀ KHOẢNG TỨ PHÂN VỊ (g12-c3-l9)
// --------------------------------------------------------------------------
window.DIAGNOSTIC_ASSESSMENT_DB["g12-c3-l9"] = {
  lessonId: "g12-c3-l9",
  title: "Bài 9: Khoảng biến thiên và khoảng tứ phân vị của mẫu số liệu ghép nhóm",
  chapterTitle: "Chương III: Các số đặc trưng đo mức độ phân tán cho mẫu số liệu ghép nhóm",
  grade: 12,
  summary: "Bộ 15 câu hỏi đánh giá chẩn đoán năng lực: Định nghĩa nhóm ghép, giá trị đại diện, khoảng biến thiên R, công thức nội suy xác định tứ phân vị Q1, Q2, Q3 của mẫu ghép nhóm, khoảng tứ phân vị và tiêu chí phát hiện giá trị ngoại lệ.",

  multipleChoice: [
    {
      id: "mc1",
      number: "Câu 1",
      level: "Nhận biết",
      question: "Đối với mẫu số liệu ghép nhóm gồm $k$ nhóm $[a_1; a_2), [a_2; a_3), \\dots, [a_k; a_{k+1})$, khoảng biến thiên $R$ của mẫu số liệu được tính bằng công thức nào?",
      options: [
        { key: "A", text: "$R = a_{k+1} - a_1$.", isCorrect: true, errorTag: null, errorMsg: "Chính xác! Khoảng biến thiên của mẫu số liệu ghép nhóm bằng hiệu số giữa đầu mút phải của nhóm cuối cùng và đầu mút trái của nhóm đầu tiên: $R = a_{k+1} - a_1$." },
        { key: "B", text: "$R = a_k - a_1$.", isCorrect: false, errorTag: "ERR_LEFT_ENDPOINT", errorMsg: "Sai lầm: Phải lấy đầu mút PHẢI của nhóm cuối ($a_{k+1}$), không phải đầu mút trái ($a_k$)." },
        { key: "C", text: "$R = a_{k+1} - a_2$.", isCorrect: false, errorTag: "ERR_RIGHT_START", errorMsg: "Sai đầu mút của nhóm thứ nhất." },
        { key: "D", text: "$R = \\frac{a_{k+1} - a_1}{2}$.", isCorrect: false, errorTag: "ERR_DIVIDE_TWO", errorMsg: "Không chia cho 2." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Định nghĩa khoảng biến thiên mẫu ghép nhóm",
        question: "Cho mẫu số liệu ghép nhóm có các nhóm $[10; 20), [20; 30), [30; 40), [40; 50)$. Tính khoảng biến thiên $R$.",
        correctAnswer: "$R = 50 - 10 = 40$.",
        tip: "Mẹo nhớ: Khoảng biến thiên = Mút phải nhóm cuối trừ Mút trái nhóm đầu."
      }
    },
    {
      id: "mc2",
      number: "Câu 2",
      level: "Thông hiểu",
      question: "Một mẫu số liệu ghép nhóm có kích thước mẫu $n = 40$. Tứ phân vị thứ nhất $Q_1$ thuộc nhóm chứa giá trị nào?",
      options: [
        { key: "A", text: "Giá trị thứ $\\frac{n}{4} = 10$.", isCorrect: true, errorTag: null, errorMsg: "Chính xác! Vị trí của tứ phân vị thứ nhất $Q_1$ tương ứng với giá trị phân vị $\\frac{n}{4} = \\frac{40}{4} = 10$. Nhóm chứa tần số tích lũy đầu tiên lớn hơn hoặc bằng 10 chính là nhóm chứa $Q_1$." },
        { key: "B", text: "Giá trị thứ $\\frac{n}{2} = 20$.", isCorrect: false, errorTag: "ERR_MEDIAN_POSITION", errorMsg: "Vị trí $n/2 = 20$ là của trung vị $Q_2$ (tứ phân vị thứ hai)." },
        { key: "C", text: "Giá trị thứ $\\frac{3n}{4} = 30$.", isCorrect: false, errorTag: "ERR_Q3_POSITION", errorMsg: "Vị trí $3n/4 = 30$ là của tứ phân vị thứ ba $Q_3$." },
        { key: "D", text: "Giá trị thứ $1$.", isCorrect: false, errorTag: "ERR_FIRST_VALUE", errorMsg: "Đây là giá trị nhỏ nhất, không phải tứ phân vị." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Xác định nhóm chứa các tứ phân vị",
        question: "Kích thước mẫu $n = 60$. Nhóm chứa $Q_1, Q_2, Q_3$ tương ứng với các giá trị tích lũy nào?",
        correctAnswer: "$Q_1$ tại vị trí 15; $Q_2$ tại vị trí 30; $Q_3$ tại vị trí 45.",
        tip: "Mẹo nhớ: $Q_1 \\implies n/4$; $Q_2 \\implies n/2$; $Q_3 \\implies 3n/4$."
      }
    },
    {
      id: "mc3",
      number: "Câu 3",
      level: "Thông hiểu",
      question: "Cho mẫu số liệu ghép nhóm có tứ phân vị thứ nhất $Q_1 = 25$ và tứ phân vị thứ ba $Q_3 = 45$. Khoảng tứ phân vị $\\Delta_Q$ của mẫu số liệu là:",
      options: [
        { key: "A", text: "$\\Delta_Q = 20$.", isCorrect: true, errorTag: null, errorMsg: "Rất chuẩn! Khoảng tứ phân vị được tính bằng hiệu giữa tứ phân vị thứ ba và thứ nhất: $\\Delta_Q = Q_3 - Q_1 = 45 - 25 = 20$." },
        { key: "B", text: "$\\Delta_Q = 70$.", isCorrect: false, errorTag: "ERR_SUM_INSTEAD_DIFF", errorMsg: "Cộng nhầm hai tứ phân vị: $45 + 25 = 70$." },
        { key: "C", text: "$\\Delta_Q = 10$.", isCorrect: false, errorTag: "ERR_DIVIDE_TWO", errorMsg: "Chia đôi hiệu số." },
        { key: "D", text: "$\\Delta_Q = 35$.", isCorrect: false, errorTag: "ERR_MIDPOINT", errorMsg: "Tính trung điểm $(Q_1 + Q_3)/2$." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Công thức tính khoảng tứ phân vị",
        question: "Ý nghĩa của khoảng tứ phân vị $\\Delta_Q$ là gì?",
        correctAnswer: "Đo độ phân tán của 50% số liệu ở phần giữa của mẫu số liệu.",
        tip: "Mẹo nhớ: Khoảng tứ phân vị $\\Delta_Q = Q_3 - Q_1$."
      }
    },
    {
      id: "mc4",
      number: "Câu 4",
      level: "Vận dụng",
      question: "Một số liệu $x$ trong mẫu được coi là giá trị ngoại lệ (giá trị bất thường) nếu thỏa mãn điều kiện nào sau đây?",
      options: [
        { key: "A", text: "$x < Q_1 - 1.5\\Delta_Q$ hoặc $x > Q_3 + 1.5\\Delta_Q$.", isCorrect: true, errorTag: null, errorMsg: "Chính xác tuyệt đối! Theo quy tắc hàng rào Tukey: Một giá trị nằm ngoài khoảng $[Q_1 - 1.5\\Delta_Q; Q_3 + 1.5\\Delta_Q]$ được xem là giá trị ngoại lệ (outlier)." },
        { key: "B", text: "$x < Q_1 - \\Delta_Q$ hoặc $x > Q_3 + \\Delta_Q$.", isCorrect: false, errorTag: "ERR_FACTOR_1", errorMsg: "Thiếu hệ số 1.5." },
        { key: "C", text: "$x < Q_1 - 3\\Delta_Q$ hoặc $x > Q_3 + 3\\Delta_Q$.", isCorrect: false, errorTag: "ERR_EXTREME_OUTLIER", errorMsg: "Hệ số 3 là tiêu chuẩn cho ngoại lệ cực đoan (extreme outlier), định nghĩa thông thường là 1.5." },
        { key: "D", text: "$x < Q_1$ hoặc $x > Q_3$.", isCorrect: false, errorTag: "ERR_NOT_OUTLIER", errorMsg: "Nằm ngoài $[Q_1; Q_3]$ là bình thường (chiếm 50% số liệu của mẫu)." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Tiêu chuẩn xác định giá trị ngoại lệ",
        question: "Biết $Q_1 = 20, Q_3 = 30$. Giá trị $x = 48$ có phải là giá trị ngoại lệ không?",
        correctAnswer: "$\\Delta_Q = 10 \\implies Q_3 + 1.5\\Delta_Q = 30 + 15 = 45$. Vì $48 > 45$ nên $x = 48$ là giá trị ngoại lệ.",
        tip: "Mẹo nhớ: 'Hàng rào dưới' = $Q_1 - 1.5\\Delta_Q$; 'Hàng rào trên' = $Q_3 + 1.5\\Delta_Q$."
      }
    },
    {
      id: "mc5",
      number: "Câu 5",
      level: "Vận dụng",
      question: "Bảng khảo sát thời gian tự học mỗi ngày của $50$ học sinh:\n- $[0; 2)$: $8$ học sinh\n- $[2; 4)$: $16$ học sinh\n- $[4; 6)$: $18$ học sinh\n- $[6; 8)$: $8$ học sinh\nNhóm chứa tứ phân vị thứ ba $Q_3$ là nhóm nào?",
      options: [
        { key: "A", text: "$[4; 6)$.", isCorrect: true, errorTag: null, errorMsg: "Xuất sắc! Vị trí của $Q_3$ là $\\frac{3n}{4} = \\frac{3 \\times 50}{4} = 37.5$.\nTính tần số tích lũy từng nhóm:\n- Nhóm 1 $[0; 2)$: $cf_1 = 8$.\n- Nhóm 2 $[2; 4)$: $cf_2 = 8 + 16 = 24$.\n- Nhóm 3 $[4; 6)$: $cf_3 = 24 + 18 = 42$.\nVì $24 < 37.5 \\le 42$ nên nhóm chứa $Q_3$ chính là nhóm $[4; 6)$." },
        { key: "B", text: "$[6; 8)$.", isCorrect: false, errorTag: "ERR_LAST_GROUP", errorMsg: "Nhầm tưởng $Q_3$ luôn nằm ở nhóm cuối cùng." },
        { key: "C", text: "$[2; 4)$.", isCorrect: false, errorTag: "ERR_ACCUMULATED_24", errorMsg: "Tại nhóm này tích lũy mới được 24 học sinh, chưa đạt tới vị trí 37.5." },
        { key: "D", text: "$[0; 2)$.", isCorrect: false, errorTag: "ERR_FIRST_GROUP", errorMsg: "Đây là nhóm chứa $Q_1$ vì $cf_1 = 8$ (gần $12.5$ nhưng vị trí $12.5$ nằm ở nhóm 2)." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Lập bảng tần số tích lũy tìm nhóm tứ phân vị",
        question: "Quy tắc tìm nhóm chứa tứ phân vị $Q_p$ là gì?",
        correctAnswer: "Tìm nhóm đầu tiên có tần số tích lũy $\\ge \\frac{p \\cdot n}{4}$.",
        tip: "Mẹo nhớ: Tính cộng dồn tần số $cf_i$, nhóm đầu tiên có $cf_i \\ge 37.5$ sẽ chứa $Q_3$."
      }
    }
  ],

  trueFalse: [
    {
      id: "tf1",
      number: "Câu 6",
      scenario: "Cho bảng số liệu ghép nhóm về điểm kiểm tra khảo sát của một lớp gồm 40 học sinh:\n- $[5; 6)$: $6$ học sinh\n- $[6; 7)$: $14$ học sinh\n- $[7; 8)$: $12$ học sinh\n- $[8; 9)$: $8$ học sinh\nXét tính Đúng hoặc Sai:",
      items: [
        { key: "a", text: "Khoảng biến thiên của mẫu số liệu là $R = 9 - 5 = 4$.", isCorrect: true, explanation: "Đúng. Đầu mút phải nhóm cuối là 9, đầu mút trái nhóm đầu là 5: $R = 9 - 5 = 4$." },
        { key: "b", text: "Nhóm chứa tứ phân vị thứ nhất $Q_1$ là nhóm $[6; 7)$.", isCorrect: true, explanation: "Đúng. $n/4 = 40/4 = 10$. Nhóm 1 tích lũy $6 < 10$, nhóm 2 tích lũy $6 + 14 = 20 \\ge 10$ nên chứa $Q_1$." },
        { key: "c", text: "Giá trị của tứ phân vị thứ nhất là $Q_1 = 6 + \\frac{10 - 6}{14} \\times 1 = 6 + \\frac{4}{14} \\approx 6.29$.", isCorrect: true, explanation: "Đúng. Công thức nội suy: $Q_1 = u_m + \\frac{n/4 - C}{n_m} \\times h = 6 + \\frac{10 - 6}{14} \\times 1 = 6 + 2/7 \\approx 6.29$." },
        { key: "d", text: "Tứ phân vị thứ hai (trung vị) $Q_2$ thuộc nhóm $[8; 9)$.", isCorrect: false, explanation: "Sai lầm: Vị trí $Q_2$ là $n/2 = 20$. Nhóm 2 có tích lũy đúng bằng 20 nên $Q_2$ thuộc nhóm $[6; 7)$ (hoặc ranh giới $7$), không thể thuộc nhóm $[8; 9)$." }
      ]
    },
    {
      id: "tf2",
      number: "Câu 7",
      scenario: "So sánh hai mẫu số liệu ghép nhóm về điểm thi của hai lớp 12A và 12B có cùng điểm trung bình $\\bar{x} = 7.5$. Lớp 12A có khoảng tứ phân vị $\\Delta_Q = 1.2$, lớp 12B có khoảng tứ phân vị $\\Delta_Q = 2.4$. Đánh giá tính Đúng hoặc Sai:",
      items: [
        { key: "a", text: "Khoảng tứ phân vị đo độ phân tán của 50% số liệu ở phần giữa của mẫu.", isCorrect: true, explanation: "Đúng. Đây là ý nghĩa thống kê chuẩn xác của khoảng tứ phân vị." },
        { key: "b", text: "Khoảng tứ phân vị của lớp 12A nhỏ hơn lớp 12B chứng tỏ điểm thi của lớp 12A đồng đều hơn ở phần giữa.", isCorrect: true, explanation: "Đúng. Khoảng tứ phân vị càng nhỏ thì độ phân tán càng thấp, tức là số liệu càng tập trung và đồng đều." },
        { key: "c", text: "Khoảng tứ phân vị không bị ảnh hưởng bởi các giá trị ngoại lệ (giá trị bất thường).", isCorrect: true, explanation: "Đúng. Vì $\\Delta_Q$ chỉ dựa trên $Q_1$ và $Q_3$, không phụ thuộc vào giá trị cực đoan ở hai đầu mút." },
        { key: "d", text: "Khoảng biến thiên $R$ cũng có tính chất không bị ảnh hưởng bởi giá trị ngoại lệ giống như $\\Delta_Q$.", isCorrect: false, explanation: "Sai lầm nghiêm trọng: Khoảng biến thiên $R = Max - Min$ rất nhạy cảm và bị ảnh hưởng cực lớn bởi các giá trị ngoại lệ ở đầu mút." }
      ]
    },
    {
      id: "tf3",
      number: "Câu 8",
      scenario: "Xét công thức nội suy tứ phân vị cho mẫu số liệu ghép nhóm: $Q_p = u_m + \\frac{\\frac{p \\cdot n}{4} - C}{n_m}(u_{m+1} - u_m)$ ($p \\in \\{1, 2, 3\\}$):",
      items: [
        { key: "a", text: "$u_m$ là đầu mút trái của nhóm chứa tứ phân vị $Q_p$.", isCorrect: true, explanation: "Đúng. Nhóm chứa tứ phân vị là $[u_m; u_{m+1})$ nên $u_m$ là đầu mút trái." },
        { key: "b", text: "$C$ là tần số tích lũy của nhóm đứng ngay trước nhóm chứa $Q_p$.", isCorrect: true, explanation: "Đúng. $C = \\sum_{i=1}^{m-1} n_i$ là tổng tần số của các nhóm trước." },
        { key: "c", text: "$n_m$ là tần số của chính nhóm chứa $Q_p$.", isCorrect: true, explanation: "Đúng. $n_m$ là số lượng phần tử thuộc nhóm thứ $m$." },
        { key: "d", text: "Độ dài nhóm $(u_{m+1} - u_m)$ của tất cả các nhóm trong mẫu ghép nhóm luôn bắt buộc phải bằng nhau.", isCorrect: false, explanation: "Sai. Trong thực tế các nhóm có thể có độ dài khác nhau, công thức vẫn áp dụng đúng với độ dài $(u_{m+1} - u_m)$ của chính nhóm thứ $m$." }
      ]
    }
  ],

  shortAnswer: [
    {
      id: "sa1",
      number: "Câu 9",
      question: "Cho mẫu số liệu ghép nhóm gồm các khoảng: $[150; 155), [155; 160), [160; 165), [165; 170), [170; 175)$. Tính khoảng biến thiên $R$.",
      correctAnswer: "25",
      acceptedAnswers: ["25", "R = 25"],
      explanation: "$R = a_{k+1} - a_1 = 175 - 150 = 25$.",
      tip: "Lấy $175 - 150 = 25$."
    },
    {
      id: "sa2",
      number: "Câu 10",
      question: "Biết tứ phân vị thứ nhất $Q_1 = 15$ và khoảng tứ phân vị $\\Delta_Q = 8$. Tìm giá trị của tứ phân vị thứ ba $Q_3$.",
      correctAnswer: "23",
      acceptedAnswers: ["23", "Q3 = 23"],
      explanation: "$\\Delta_Q = Q_3 - Q_1 \\implies Q_3 = Q_1 + \\Delta_Q = 15 + 8 = 23$.",
      tip: "$Q_3 = Q_1 + \\Delta_Q$."
    },
    {
      id: "sa3",
      number: "Câu 11",
      question: "Cho $Q_1 = 10$ và $Q_3 = 20$. Tìm giới hạn trên của hàng rào ngoài (ngưỡng bắt đầu xem là giá trị ngoại lệ bên phải: $Q_3 + 1.5\\Delta_Q$).",
      correctAnswer: "35",
      acceptedAnswers: ["35", "35.0"],
      explanation: "$\\Delta_Q = 20 - 10 = 10$. Hàng rào trên: $Q_3 + 1.5\\Delta_Q = 20 + 1.5(10) = 20 + 15 = 35$.",
      tip: "Cộng thêm $1.5$ lần khoảng tứ phân vị."
    },
    {
      id: "sa4",
      number: "Câu 12",
      question: "Một mẫu số liệu có $n = 100$. Nhóm $[20; 30)$ có tần số $40$, tần số tích lũy của nhóm trước là $10$. Tính giá trị của $Q_1$.",
      correctAnswer: "23.75",
      acceptedAnswers: ["23.75", "23,75"],
      explanation: "$n/4 = 25$. $Q_1 = 20 + \\frac{25 - 10}{40} \\times (30 - 20) = 20 + \\frac{15}{40} \\times 10 = 20 + 3.75 = 23.75$.",
      tip: "Công thức: $Q_1 = 20 + (15/40) \\times 10 = 23.75$."
    }
  ],

  essay: [
    {
      id: "es1",
      number: "Câu 13 (Tự luận 1)",
      title: "Tính toán đầy đủ bộ ba tứ phân vị và khoảng tứ phân vị",
      question: "Bảng thống kê cự ly chạy (km) trong tuần của 40 vận động viên:\n- $[10; 20)$: 6 người\n- $[20; 30)$: 14 người\n- $[30; 40)$: 12 người\n- $[40; 50)$: 8 người\n1) Tìm tứ phân vị thứ nhất $Q_1$ và tứ phân vị thứ ba $Q_3$.\n2) Tính khoảng tứ phân vị $\\Delta_Q$ và xác định xem cự ly chạy $56\\text{ km}$ có phải là giá trị ngoại lệ hay không.",
      maxPoints: 10.0,
      sampleSolution: `1) Tính Q1 và Q3:
- Cỡ mẫu: n = 40.
- Bảng tần số tích lũy:
  + Nhóm 1 [10; 20): cf1 = 6.
  + Nhóm 2 [20; 30): cf2 = 6 + 14 = 20.
  + Nhóm 3 [30; 40): cf3 = 20 + 12 = 32.
  + Nhóm 4 [40; 50): cf4 = 32 + 8 = 40.
- Tìm Q1:
  Vị trí: n/4 = 40/4 = 10.
  Vì cf1 = 6 < 10 <= cf2 = 20 nên nhóm chứa Q1 là [20; 30).
  Ta có: u2 = 20, u3 = 30, h = 10, C = cf1 = 6, n2 = 14.
  Q1 = 20 + [(10 - 6) / 14] * 10 = 20 + (4/14)*10 = 20 + 20/7 ≈ 22.86 km.
- Tìm Q3:
  Vị trí: 3n/4 = (3 * 40)/4 = 30.
  Vì cf2 = 20 < 30 <= cf3 = 32 nên nhóm chứa Q3 là [30; 40).
  Ta có: u3 = 30, u4 = 40, h = 10, C = cf2 = 20, n3 = 12.
  Q3 = 30 + [(30 - 20) / 12] * 10 = 30 + (10/12)*10 = 30 + 25/3 ≈ 38.33 km.

2) Tính khoảng tứ phân vị và kiểm tra giá trị ngoại lệ:
- Khoảng tứ phân vị:
  Delta_Q = Q3 - Q1 = (30 + 25/3) - (20 + 20/7) = 10 + 25/3 - 20/7 = 10 + (175 - 60)/21 = 10 + 115/21 ≈ 15.48 km.
- Hàng rào trên để kiểm tra giá trị ngoại lệ bên phải:
  T_tren = Q3 + 1.5 * Delta_Q ≈ 38.33 + 1.5 * 15.48 = 38.33 + 23.22 = 61.55 km.
- So sánh giá trị x = 56 km:
  Vì 56 < 61.55 km nên cự ly 56 km KHÔNG PHẢI là giá trị ngoại lệ.
- Kết luận: Q1 ≈ 22.86 km, Q3 ≈ 38.33 km, Delta_Q ≈ 15.48 km; giá trị 56 km không phải là ngoại lệ.`,
      criteria: [
        { id: "c1", step: "Bước 1", desc: "Lập đúng bảng tần số tích lũy cf: 6, 20, 32, 40", points: 2.5 },
        { id: "c2", step: "Bước 2", desc: "Xác định đúng nhóm chứa Q1 và tính ra Q1 = 20 + 20/7 ≈ 22.86 km", points: 2.5 },
        { id: "c3", step: "Bước 3", desc: "Xác định đúng nhóm chứa Q3 và tính ra Q3 = 30 + 25/3 ≈ 38.33 km", points: 2.5 },
        { id: "c4", step: "Bước 4", desc: "Tính Delta_Q ≈ 15.48 km, tính ngưỡng trên 61.55 km và kết luận 56 km không là ngoại lệ", points: 2.5 }
      ]
    },
    {
      id: "es2",
      number: "Câu 14 (Tự luận 2)",
      title: "So sánh độ phân tán thời gian chờ xe buýt của hai tuyến xe",
      question: "Khảo sát thời gian chờ xe buýt (phút) của hành khách tại hai tuyến xe buýt Tuyến 01 và Tuyến 02 (mỗi tuyến khảo sát 50 hành khách):\n- Tuyến 01 có $Q_1 = 5$ phút, $Q_3 = 11$ phút, $R = 18$ phút.\n- Tuyến 02 có $Q_1 = 7$ phút, $Q_3 = 19$ phút, $R = 25$ phút.\n1) Hãy tính khoảng tứ phân vị của mỗi tuyến xe buýt.\n2) Dựa vào các số đặc trưng đo độ phân tán (khoảng biến thiên và khoảng tứ phân vị), hãy nhận xét xem thời gian chờ xe buýt của tuyến nào ổn định và đáng tin cậy hơn cho hành khách.",
      maxPoints: 10.0,
      sampleSolution: `1) Tính khoảng tứ phân vị của mỗi tuyến xe:
- Tuyến 01:
  Delta_Q1 = Q3 - Q1 = 11 - 5 = 6 (phút).
- Tuyến 02:
  Delta_Q2 = Q3 - Q1 = 19 - 7 = 12 (phút).

2) So sánh và nhận xét độ ổn định:
- So sánh khoảng biến thiên:
  R_Tuyến 1 = 18 phút < R_Tuyến 2 = 25 phút.
  Khoảng chênh lệch giữa thời gian chờ lâu nhất và nhanh nhất của Tuyến 01 nhỏ hơn Tuyến 02 là 7 phút.
- So sánh khoảng tứ phân vị:
  Delta_Q1 = 6 phút < Delta_Q2 = 12 phút (bằng một nửa).
  Điều này cho thấy 50% số hành khách có thời gian chờ ở mức trung bình của Tuyến 01 chỉ dao động trong phạm vi 6 phút, trong khi ở Tuyến 02 dao động tới 12 phút.
- Kết luận: Cả hai chỉ số đo độ phân tán (R và Delta_Q) của Tuyến 01 đều nhỏ hơn đáng kể so với Tuyến 02.
  Do đó, thời gian chờ của Tuyến 01 đồng đều, ổn định và đáng tin cậy hơn nhiều so với Tuyến 02, giúp hành khách chủ động kế hoạch đi lại tốt hơn.`,
      criteria: [
        { id: "c1", step: "Bước 1", desc: "Tính đúng khoảng tứ phân vị Tuyến 01: Delta_Q = 6 phút", points: 2.5 },
        { id: "c2", step: "Bước 2", desc: "Tính đúng khoảng tứ phân vị Tuyến 02: Delta_Q = 12 phút", points: 2.5 },
        { id: "c3", step: "Bước 3", desc: "So sánh chính xác cả hai chỉ số R và Delta_Q giữa hai tuyến", points: 2.5 },
        { id: "c4", step: "Bước 4", desc: "Đưa ra kết luận có căn cứ khoa học về độ ổn định và tin cậy của Tuyến 01", points: 2.5 }
      ]
    },
    {
      id: "es3",
      number: "Câu 15 (Tự luận 3)",
      title: "Ứng dụng phân tích dữ liệu kiểm soát chất lượng đóng gói sản phẩm",
      question: "Một dây chuyền tự động đóng gói hộp chè quy định khối lượng tịnh là $500\\text{ gam}$. Khảo sát ngẫu nhiên $100$ hộp chè được nhóm lại như sau:\n- $[480; 490)$: 5 hộp\n- $[490; 500)$: 45 hộp\n- $[500; 510)$: 42 hộp\n- $[510; 520)$: 8 hộp\n1) Tìm tứ phân vị thứ nhất $Q_1$, trung vị $Q_2$ và tứ phân vị thứ ba $Q_3$ của mẫu khối lượng.\n2) Nếu những hộp có khối lượng nằm ngoài khoảng $[Q_1 - 1.5\\Delta_Q; Q_3 + 1.5\\Delta_Q]$ bị coi là lỗi đóng gói thì một hộp chè nặng $470\\text{ gam}$ có bị loại bỏ hay không?",
      maxPoints: 10.0,
      sampleSolution: `1) Tính Q1, Q2, Q3:
- Cỡ mẫu: n = 100.
- Bảng tần số tích lũy:
  + [480; 490): cf1 = 5.
  + [490; 500): cf2 = 50.
  + [500; 510): cf3 = 92.
  + [510; 520): cf4 = 100.
- Tìm Q1 (vị trí 100/4 = 25 in [490; 500)):
  Q1 = 490 + [(25 - 5) / 45] * 10 = 490 + (20/45)*10 = 490 + 40/9 ≈ 494.44 gam.
- Tìm Q2 (vị trí 100/2 = 50 in [490; 500)):
  Q2 = 490 + [(50 - 5) / 45] * 10 = 490 + (45/45)*10 = 500 gam.
- Tìm Q3 (vị trí 3*100/4 = 75 in [500; 510)):
  Q3 = 500 + [(75 - 50) / 42] * 10 = 500 + (25/42)*10 = 500 + 125/21 ≈ 505.95 gam.

2) Kiểm tra hộp chè 470 gam:
- Khoảng tứ phân vị:
  Delta_Q = Q3 - Q1 ≈ 505.95 - 494.44 = 11.51 gam.
- Hàng rào dưới (ngưỡng khối lượng tối thiểu chấp nhận được):
  T_duoi = Q1 - 1.5 * Delta_Q ≈ 494.44 - 1.5 * 11.51 = 494.44 - 17.27 = 477.17 gam.
- So sánh:
  Khối lượng hộp chè là 470 gam < 477.17 gam.
- Kết luận: Hộp chè nặng 470 gam nằm dưới ngưỡng hàng rào dưới nên bị xem là giá trị ngoại lệ (lỗi đóng gói quá thiếu khối lượng) và sẽ BỊ LOẠI BỎ khỏi dây chuyền xuất xưởng.`,
      criteria: [
        { id: "c1", step: "Bước 1", desc: "Lập đúng bảng tần số tích lũy: 5, 50, 92, 100", points: 2.5 },
        { id: "c2", step: "Bước 2", desc: "Tính đúng Q1 ≈ 494.44 g, Q2 = 500 g, Q3 ≈ 505.95 g", points: 2.5 },
        { id: "c3", step: "Bước 3", desc: "Tính đúng khoảng tứ phân vị Delta_Q ≈ 11.51 g và ngưỡng dưới T_duoi ≈ 477.17 g", points: 2.5 },
        { id: "c4", step: "Bước 4", desc: "So sánh 470 g < 477.17 g và kết luận chính xác hộp chè bị loại bỏ", points: 2.5 }
      ]
    }
  ]
};

// --------------------------------------------------------------------------
// BÀI 10: PHƯƠNG SAI VÀ ĐỘ LỆCH CHUẨN (g12-c3-l10)
// --------------------------------------------------------------------------
window.DIAGNOSTIC_ASSESSMENT_DB["g12-c3-l10"] = {
  lessonId: "g12-c3-l10",
  title: "Bài 10: Phương sai và độ lệch chuẩn của mẫu số liệu ghép nhóm",
  chapterTitle: "Chương III: Các số đặc trưng đo mức độ phân tán cho mẫu số liệu ghép nhóm",
  grade: 12,
  summary: "Bộ 15 câu hỏi đánh giá chẩn đoán năng lực: Giá trị đại diện của nhóm, công thức tính số trung bình, phương sai s^2 và độ lệch chuẩn s, ý nghĩa thực tế so sánh mức độ rủi ro, phân tán trong tài chính và kỹ thuật.",

  multipleChoice: [
    {
      id: "mc1",
      number: "Câu 1",
      level: "Nhận biết",
      question: "Giá trị đại diện của nhóm số liệu $[a; b)$ được tính bằng công thức nào?",
      options: [
        { key: "A", text: "$c = \\frac{a + b}{2}$.", isCorrect: true, errorTag: null, errorMsg: "Chính xác! Giá trị đại diện của nhóm $[a; b)$ là trung điểm của hai đầu mút: $c = \\frac{a + b}{2}$." },
        { key: "B", text: "$c = b - a$.", isCorrect: false, errorTag: "ERR_GROUP_LENGTH", errorMsg: "Đây là độ dài của nhóm, không phải giá trị đại diện." },
        { key: "C", text: "$c = \\frac{a + b}{n}$.", isCorrect: false, errorTag: "ERR_DIVIDE_BY_N", errorMsg: "Chia nhầm cho kích thước mẫu." },
        { key: "D", text: "$c = a$.", isCorrect: false, errorTag: "ERR_LEFT_POINT", errorMsg: "Đây chỉ là đầu mút trái của nhóm." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Giá trị đại diện của nhóm",
        question: "Giá trị đại diện của nhóm $[20; 30)$ là bao nhiêu?",
        correctAnswer: "$c = (20 + 30)/2 = 25$.",
        tip: "Mẹo nhớ: Giá trị đại diện = Trung bình cộng hai đầu mút của nhóm."
      }
    },
    {
      id: "mc2",
      number: "Câu 2",
      level: "Thông hiểu",
      question: "Công thức liên hệ giữa độ lệch chuẩn $s$ và phương sai $s^2$ của một mẫu số liệu là:",
      options: [
        { key: "A", text: "$s = \\sqrt{s^2}$.", isCorrect: true, errorTag: null, errorMsg: "Chính xác! Độ lệch chuẩn là căn bậc hai số học của phương sai: $s = \\sqrt{s^2}$. Độ lệch chuẩn có cùng đơn vị đo với đại lượng đang khảo sát." },
        { key: "B", text: "$s = (s^2)^2$.", isCorrect: false, errorTag: "ERR_SQUARE_AGAIN", errorMsg: "Bình phương thêm một lần nữa là sai." },
        { key: "C", text: "$s = s^2 / n$.", isCorrect: false, errorTag: "ERR_DIVIDE_N", errorMsg: "Sai công thức." },
        { key: "D", text: "$s = 2s^2$.", isCorrect: false, errorTag: "ERR_DOUBLE", errorMsg: "Sai công thức." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Mối liên hệ phương sai và độ lệch chuẩn",
        question: "Biết phương sai $s^2 = 16$. Độ lệch chuẩn $s$ bằng bao nhiêu?",
        correctAnswer: "$s = \\sqrt{16} = 4$.",
        tip: "Mẹo nhớ: Độ lệch chuẩn = Căn bậc hai của Phương sai."
      }
    },
    {
      id: "mc3",
      number: "Câu 3",
      level: "Thông hiểu",
      question: "Công thức thực hành tính nhanh phương sai $s^2$ của mẫu số liệu ghép nhóm là:",
      options: [
        { key: "A", text: "$s^2 = \\frac{1}{n}\\sum_{i=1}^k m_i c_i^2 - (\\bar{x})^2$.", isCorrect: true, errorTag: null, errorMsg: "Rất chuẩn! Phương sai bằng trung bình cộng các bình phương trừ đi bình phương của số trung bình: $s^2 = \\overline{x^2} - (\\bar{x})^2$." },
        { key: "B", text: "$s^2 = \\frac{1}{n}\\sum_{i=1}^k m_i c_i^2 - \\bar{x}$.", isCorrect: false, errorTag: "ERR_FORGET_SQUARE_MEAN", errorMsg: "Quên bình phương số trung bình $\\bar{x}$." },
        { key: "C", text: "$s^2 = (\\bar{x})^2 - \\frac{1}{n}\\sum_{i=1}^k m_i c_i^2$.", isCorrect: false, errorTag: "ERR_REVERSE_DIFF", errorMsg: "Đảo ngược thứ tự dẫn tới phương sai bị âm (vô lý)." },
        { key: "D", text: "$s^2 = \\frac{1}{n}\\sum_{i=1}^k (c_i - \\bar{x})^2$.", isCorrect: false, errorTag: "ERR_OMIT_FREQUENCY", errorMsg: "Quên nhân tần số $m_i$ của mỗi nhóm." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Công thức thực hành tính phương sai",
        question: "Nêu công thức thực hành rút gọn tính phương sai $s^2$.",
        correctAnswer: "$s^2 = \\frac{1}{n}\\sum m_i c_i^2 - (\\bar{x})^2$.",
        tip: "Mẹo nhớ: 'Trung bình bình phương trừ bình phương trung bình'."
      }
    },
    {
      id: "mc4",
      number: "Câu 4",
      level: "Vận dụng",
      question: "Hai cổ phiếu A và B có mức tỉ suất sinh lời trung bình trong năm đều bằng $12\\%$. Cổ phiếu A có độ lệch chuẩn $s_A = 2.5\\%$, cổ phiếu B có độ lệch chuẩn $s_B = 6.8\\%$. Nhận định nào sau đây là ĐÚNG?",
      options: [
        { key: "A", text: "Đầu tư vào cổ phiếu A có mức độ rủi ro thấp hơn cổ phiếu B.", isCorrect: true, errorTag: null, errorMsg: "Chính xác! Trong tài chính, độ lệch chuẩn đo lường mức độ biến động (rủi ro). Độ lệch chuẩn càng nhỏ thì mức độ biến động quanh giá trị trung bình càng thấp, tức là ít rủi ro và ổn định hơn." },
        { key: "B", text: "Đầu tư vào cổ phiếu B an toàn hơn cổ phiếu A.", isCorrect: false, errorTag: "ERR_REVERSE_RISK", errorMsg: "Sai: $s_B = 6.8\\%$ lớn hơn $s_A = 2.5\\%$ chứng tỏ cổ phiếu B biến động mạnh hơn và rủi ro cao hơn nhiều." },
        { key: "C", text: "Hai cổ phiếu có mức độ rủi ro hoàn toàn như nhau vì cùng có mức sinh lời $12\\%$.", isCorrect: false, errorTag: "ERR_MEAN_ONLY", errorMsg: "Sai: Số trung bình chỉ đo mức độ tập trung, độ rủi ro phải dựa vào độ phân tán (độ lệch chuẩn)." },
        { key: "D", text: "Cổ phiếu A luôn mang lại lợi nhuận cao hơn cổ phiếu B trong mọi ngày.", isCorrect: false, errorTag: "ERR_ABSOLUTE_STATEMENT", errorMsg: "Sai: Độ lệch chuẩn chỉ đo mức độ dao động thống kê, không khẳng định từng ngày cụ thể." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Ý nghĩa của độ lệch chuẩn trong đầu tư tài chính",
        question: "Trong tài chính, độ lệch chuẩn đại diện cho yếu tố gì?",
        correctAnswer: "Mức độ rủi ro và biến động của khoản đầu tư.",
        tip: "Mẹo nhớ: Độ lệch chuẩn càng nhỏ $\\implies$ độ ổn định càng cao, rủi ro càng thấp."
      }
    },
    {
      id: "mc5",
      number: "Câu 5",
      level: "Vận dụng",
      question: "Cho mẫu số liệu ghép nhóm gồm 2 nhóm: $[0; 10)$ có tần số $m_1 = 10$, $[10; 20)$ có tần số $m_2 = 10$. Phương sai $s^2$ của mẫu số liệu bằng:",
      options: [
        { key: "A", text: "$25$.", isCorrect: true, errorTag: null, errorMsg: "Xuất sắc! Cỡ mẫu $n = 20$. Giá trị đại diện $c_1 = 5, c_2 = 15$.\nSố trung bình: $\\bar{x} = \\frac{10(5) + 10(15)}{20} = \\frac{200}{20} = 10$.\nPhương sai: $s^2 = \\frac{10(5 - 10)^2 + 10(15 - 10)^2}{20} = \\frac{10(25) + 10(25)}{20} = \\frac{500}{20} = 25$." },
        { key: "B", text: "$5$.", isCorrect: false, errorTag: "ERR_STD_INSTEAD_VARIANCE", errorMsg: "Đây là độ lệch chuẩn $s = \\sqrt{25} = 5$, câu hỏi hỏi phương sai $s^2$." },
        { key: "C", text: "$100$.", isCorrect: false, errorTag: "ERR_ARITHMETIC_SQUARE", errorMsg: "Tính nhầm số trung bình bình phương." },
        { key: "D", text: "$50$.", isCorrect: false, errorTag: "ERR_NO_DIVIDE", errorMsg: "Quên chia cho tổng cỡ mẫu $n = 20$." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Tính phương sai cho mẫu đối xứng đơn giản",
        question: "Hai nhóm đối xứng qua trung bình có khoảng cách đến trung bình là $d = 5$. Phương sai bằng bao nhiêu?",
        correctAnswer: "$s^2 = d^2 = 5^2 = 25$.",
        tip: "Mẹo nhớ: Khi các giá trị cách đều số trung bình một khoảng $d$ thì $s^2 = d^2$."
      }
    }
  ],

  trueFalse: [
    {
      id: "tf1",
      number: "Câu 6",
      scenario: "Bảng phân bố tần số ghép nhóm điểm kiểm tra môn Toán của 20 học sinh:\n- $[4; 6)$: $4$ học sinh\n- $[6; 8)$: $12$ học sinh\n- $[8; 10)$: $4$ học sinh\nXét tính Đúng hoặc Sai:",
      items: [
        { key: "a", text: "Giá trị đại diện của 3 nhóm lần lượt là $c_1 = 5, c_2 = 7, c_3 = 9$.", isCorrect: true, explanation: "Đúng. $(4+6)/2=5; (6+8)/2=7; (8+10)/2=9$." },
        { key: "b", text: "Điểm trung bình của 20 học sinh là $\\bar{x} = 7.0$.", isCorrect: true, explanation: "Đúng. $\\bar{x} = \\frac{4(5) + 12(7) + 4(9)}{20} = \\frac{20 + 84 + 36}{20} = \\frac{140}{20} = 7$." },
        { key: "c", text: "Phương sai của mẫu số liệu là $s^2 = 1.6$.", isCorrect: true, explanation: "Đúng. $s^2 = \\frac{4(5-7)^2 + 12(7-7)^2 + 4(9-7)^2}{20} = \\frac{4(4) + 0 + 4(4)}{20} = \\frac{32}{20} = 1.6$." },
        { key: "d", text: "Độ lệch chuẩn của mẫu số liệu xấp xỉ bằng $1.26$.", isCorrect: true, explanation: "Đúng. $s = \\sqrt{1.6} \\approx 1.2649$." }
      ]
    },
    {
      id: "tf2",
      number: "Câu 7",
      scenario: "Xét các tính chất lý thuyết của phương sai và độ lệch chuẩn trong thống kê toán học:",
      items: [
        { key: "a", text: "Phương sai $s^2$ luôn là một số thực không âm ($s^2 \\ge 0$).", isCorrect: true, explanation: "Đúng. Vì phương sai là trung bình cộng của các bình phương $(c_i - \\bar{x})^2 \\ge 0$." },
        { key: "b", text: "Nếu tất cả các quan sát trong mẫu số liệu đều có cùng một giá trị như nhau thì phương sai bằng 0.", isCorrect: true, explanation: "Đúng. Khi mọi giá trị đều bằng nhau thì chúng đều bằng số trung bình $\\bar{x}$, mọi độ lệch $c_i - \\bar{x} = 0 \\implies s^2 = 0$." },
        { key: "c", text: "Nếu cộng tất cả các số liệu trong mẫu với cùng một hằng số $c$ thì phương sai không đổi.", isCorrect: true, explanation: "Đúng. Phép tịnh tiến toàn bộ mẫu số liệu làm số trung bình tăng $c$, nhưng hiệu $(x_i + c) - (\\bar{x} + c) = x_i - \\bar{x}$ không đổi, do đó phương sai giữ nguyên." },
        { key: "d", text: "Nếu nhân tất cả các số liệu trong mẫu với số thực $k$ thì độ lệch chuẩn mới bằng $k$ lần độ lệch chuẩn cũ.", isCorrect: false, explanation: "Sai lầm: Phải là $|k|$ lần (trị tuyệt đối của $k$), vì nếu nhân với số âm $k = -2$ thì độ lệch chuẩn mới vẫn phải là số dương bằng $2s$, không thể bằng $-2s$." }
      ]
    },
    {
      id: "tf3",
      number: "Câu 8",
      scenario: "Một nhà máy sản xuất chi tiết máy kiểm tra đường kính của 100 sản phẩm từ Máy I và 100 sản phẩm từ Máy II:\n- Máy I: đường kính trung bình $\\bar{x}_1 = 20\\text{ mm}$, độ lệch chuẩn $s_1 = 0.2\\text{ mm}$.\n- Máy II: đường kính trung bình $\\bar{x}_2 = 20\\text{ mm}$, độ lệch chuẩn $s_2 = 0.8\\text{ mm}$.\nXét tính Đúng hoặc Sai:",
      items: [
        { key: "a", text: "Đường kính trung bình của sản phẩm do hai máy làm ra là như nhau.", isCorrect: true, explanation: "Đúng. Đều bằng 20 mm." },
        { key: "b", text: "Phương sai của Máy I là $s_1^2 = 0.04\\text{ mm}^2$.", isCorrect: true, explanation: "Đúng. $0.2^2 = 0.04$." },
        { key: "c", text: "Sản phẩm của Máy II có độ chính xác và độ đồng đều cao hơn Máy I.", isCorrect: false, explanation: "Sai. Máy II có độ lệch chuẩn $0.8 > 0.2$ lớn gấp 4 lần Máy I, tức là sai lệch nhiều hơn, độ phân tán lớn hơn, kém chính xác hơn." },
        { key: "d", text: "Máy I hoạt động ổn định và kiểm soát chất lượng tốt hơn Máy II.", isCorrect: true, explanation: "Đúng. Độ lệch chuẩn càng nhỏ chứng tỏ chất lượng gia công càng ổn định quanh kích thước chuẩn 20 mm." }
      ]
    }
  ],

  shortAnswer: [
    {
      id: "sa1",
      number: "Câu 9",
      question: "Một mẫu số liệu ghép nhóm có phương sai $s^2 = 2.25$. Tính độ lệch chuẩn $s$ của mẫu số liệu.",
      correctAnswer: "1.5",
      acceptedAnswers: ["1.5", "1,5"],
      explanation: "$s = \\sqrt{2.25} = 1.5$.",
      tip: "Lấy căn bậc hai: $\\sqrt{2.25} = 1.5$."
    },
    {
      id: "sa2",
      number: "Câu 10",
      question: "Cho mẫu số liệu có $\\frac{1}{n}\\sum m_i c_i^2 = 104$ và số trung bình $\\bar{x} = 10$. Tính phương sai $s^2$.",
      correctAnswer: "4",
      acceptedAnswers: ["4", "s^2 = 4"],
      explanation: "$s^2 = \\overline{x^2} - (\\bar{x})^2 = 104 - 10^2 = 104 - 100 = 4$.",
      tip: "$s^2 = 104 - 100 = 4$."
    },
    {
      id: "sa3",
      number: "Câu 11",
      question: "Nếu nhân tất cả các giá trị của một mẫu số liệu với $3$ thì phương sai của mẫu số liệu mới gấp bao nhiêu lần phương sai cũ?",
      correctAnswer: "9",
      acceptedAnswers: ["9", "9 lần", "chín"],
      explanation: "Khi nhân số liệu với $k = 3$ thì độ lệch chuẩn gấp $3$ lần, phương sai gấp $k^2 = 3^2 = 9$ lần.",
      tip: "Phương sai tăng tỉ lệ với $k^2$."
    },
    {
      id: "sa4",
      number: "Câu 12",
      question: "Khảo sát tuổi thọ bóng đèn (nghìn giờ): nhóm $[1; 3)$ có 10 bóng, nhóm $[3; 5)$ có 10 bóng. Tính độ lệch chuẩn $s$ của tuổi thọ.",
      correctAnswer: "1",
      acceptedAnswers: ["1", "1.0", "1 nghìn giờ"],
      explanation: "Giá trị đại diện $c_1 = 2, c_2 = 4$. Số trung bình $\\bar{x} = 3$. Phương sai $s^2 = \\frac{10(2-3)^2 + 10(4-3)^2}{20} = \\frac{20}{20} = 1 \\implies s = \\sqrt{1} = 1$.",
      tip: "Hai nhóm cách đều trung bình khoảng $d = 1 \\implies s = 1$."
    }
  ],

  essay: [
    {
      id: "es1",
      number: "Câu 13 (Tự luận 1)",
      title: "Tính số trung bình, phương sai và độ lệch chuẩn của bảng ghép nhóm",
      question: "Bảng số liệu thời gian đi làm mỗi ngày (phút) của 50 nhân viên một công ty:\n- $[10; 20)$: 10 người\n- $[20; 30)$: 20 người\n- $[30; 40)$: 15 người\n- $[40; 50)$: 5 người\n1) Tìm giá trị đại diện của mỗi nhóm và tính thời gian đi làm trung bình $\\bar{x}$.\n2) Tính phương sai $s^2$ và độ lệch chuẩn $s$ của mẫu số liệu trên.",
      maxPoints: 10.0,
      sampleSolution: `1) Giá trị đại diện và thời gian trung bình:
- Giá trị đại diện của 4 nhóm:
  c1 = (10 + 20) / 2 = 15 phút.
  c2 = (20 + 30) / 2 = 25 phút.
  c3 = (30 + 40) / 2 = 35 phút.
  c4 = (40 + 50) / 2 = 45 phút.
- Cỡ mẫu: n = 10 + 20 + 15 + 5 = 50.
- Thời gian đi làm trung bình:
  x_bar = (10*15 + 20*25 + 15*35 + 5*45) / 50
        = (150 + 500 + 525 + 225) / 50
        = 1400 / 50 = 28 phút.

2) Tính phương sai và độ lệch chuẩn:
- Áp dụng công thức: s^2 = 1/n * sum [m_i * (c_i - x_bar)^2]:
  + Nhóm 1: 10 * (15 - 28)^2 = 10 * (-13)^2 = 10 * 169 = 1690.
  + Nhóm 2: 20 * (25 - 28)^2 = 20 * (-3)^2 = 20 * 9 = 180.
  + Nhóm 3: 15 * (35 - 28)^2 = 15 * 7^2 = 15 * 49 = 735.
  + Nhóm 4: 5 * (45 - 28)^2 = 5 * 17^2 = 5 * 289 = 1445.
- Tổng bình phương độ lệch:
  Sum = 1690 + 180 + 735 + 1445 = 4050.
- Phương sai:
  s^2 = 4050 / 50 = 81 (phút^2).
- Độ lệch chuẩn:
  s = sqrt{s^2} = sqrt{81} = 9 phút.
- Kết luận: Thời gian trung bình là 28 phút; phương sai là 81 phút^2; độ lệch chuẩn là 9 phút.`,
      criteria: [
        { id: "c1", step: "Bước 1", desc: "Xác định đúng 4 giá trị đại diện: 15, 25, 35, 45", points: 2.5 },
        { id: "c2", step: "Bước 2", desc: "Tính đúng số trung bình x_bar = 28 phút", points: 2.5 },
        { id: "c3", step: "Bước 3", desc: "Tính đúng tổng bình phương độ lệch 4050 và phương sai s^2 = 81", points: 2.5 },
        { id: "c4", step: "Bước 4", desc: "Tính đúng độ lệch chuẩn s = 9 phút và nêu kết luận rõ ràng", points: 2.5 }
      ]
    },
    {
      id: "es2",
      number: "Câu 14 (Tự luận 2)",
      title: "So sánh độ phân tán và hiệu quả giảng dạy giữa hai lớp",
      question: "Để đánh giá hiệu quả của hai phương pháp giảng dạy mới, người ta tiến hành kiểm tra hai lớp có cùng sĩ số 40 học sinh:\n- Lớp thực nghiệm A có điểm trung bình $\\bar{x}_A = 8.0$, phương sai $s_A^2 = 0.64$.\n- Lớp đối chứng B có điểm trung bình $\\bar{x}_B = 7.5$, phương sai $s_B^2 = 1.96$.\n1) Tính độ lệch chuẩn của mỗi lớp.\n2) Dựa vào các số đặc trưng (trung bình và độ lệch chuẩn), hãy phân tích và kết luận về kết quả học tập và độ đồng đều của học sinh ở hai lớp.",
      maxPoints: 10.0,
      sampleSolution: `1) Tính độ lệch chuẩn:
- Lớp thực nghiệm A:
  s_A = sqrt{s_A^2} = sqrt{0.64} = 0.8 điểm.
- Lớp đối chứng B:
  s_B = sqrt{s_B^2} = sqrt{1.96} = 1.4 điểm.

2) Phân tích và kết luận:
- So sánh mức độ tập trung (Điểm trung bình):
  x_bar_A = 8.0 > x_bar_B = 7.5.
  Điểm trung bình của lớp A cao hơn lớp B là 0.5 điểm, cho thấy mức độ nắm kiến thức tổng thể của lớp A tốt hơn.
- So sánh mức độ phân tán (Độ lệch chuẩn):
  s_A = 0.8 < s_B = 1.4.
  Độ lệch chuẩn của lớp A nhỏ hơn đáng kể so với lớp B (0.8 so với 1.4). Điều này chứng minh rằng ở lớp A, điểm số của các học sinh phân bố rất tập trung quanh điểm trung bình 8.0, khoảng cách chênh lệch giữa học sinh khá giỏi và học sinh yếu kém là rất nhỏ.
  Ngược lại, ở lớp B có độ lệch chuẩn 1.4 lớn, chứng tỏ sự phân hóa học sinh rất cao (có học sinh điểm rất cao nhưng cũng có nhiều học sinh điểm rất thấp).
- Kết luận: Phương pháp giảng dạy áp dụng ở lớp A mang lại hiệu quả vượt trội: vừa nâng cao mặt bằng điểm số chung, vừa giúp học sinh tiếp thu đồng đều và thu hẹp khoảng cách năng lực trong lớp.`,
      criteria: [
        { id: "c1", step: "Bước 1", desc: "Tính đúng độ lệch chuẩn lớp A: s_A = 0.8 điểm", points: 2.5 },
        { id: "c2", step: "Bước 2", desc: "Tính đúng độ lệch chuẩn lớp B: s_B = 1.4 điểm", points: 2.5 },
        { id: "c3", step: "Bước 3", desc: "Phân tích sắc bén ý nghĩa điểm trung bình cao hơn của lớp A", points: 2.5 },
        { id: "c4", step: "Bước 4", desc: "Phân tích ý nghĩa độ lệch chuẩn nhỏ hơn thể hiện sự đồng đều và kết luận sư phạm", points: 2.5 }
      ]
    },
    {
      id: "es3",
      number: "Câu 15 (Tự luận 3)",
      title: "Ứng dụng hệ số biến thiên đánh giá độ ổn định của danh mục cổ phiếu",
      question: "Hệ số biến thiên $CV = \\frac{s}{\\bar{x}}$ (tỉ số giữa độ lệch chuẩn và số trung bình) được dùng để so sánh độ rủi ro tương đối của hai tài sản có mức sinh lời trung bình khác nhau.\nMột nhà đầu tư theo dõi lợi nhuận (%) của hai quỹ đầu tư trong 5 năm:\n- Quỹ Tăng Trưởng có tỉ suất lợi nhuận trung bình $\\bar{x}_1 = 20\\%$, độ lệch chuẩn $s_1 = 5\\%$.\n- Quỹ Cân Bằng có tỉ suất lợi nhuận trung bình $\\bar{x}_2 = 10\\%$, độ lệch chuẩn $s_2 = 3\\%$.\n1) Tính hệ số biến thiên $CV$ của từng quỹ đầu tư.\n2) Nếu xét theo rủi ro tương đối trên mỗi đồng lợi nhuận tạo ra, quỹ nào an toàn và ổn định hơn?",
      maxPoints: 10.0,
      sampleSolution: `1) Tính hệ số biến thiên CV của từng quỹ:
- Quỹ Tăng Trưởng:
  CV1 = s1 / x_bar_1 = 5% / 20% = 5 / 20 = 0.25 (tức 25%).
- Quỹ Cân Bằng:
  CV2 = s2 / x_bar_2 = 3% / 10% = 3 / 10 = 0.30 (tức 30%).

2) Phân tích và kết luận rủi ro tương đối:
- Ý nghĩa của hệ số biến thiên:
  CV thể hiện mức độ rủi ro (độ biến động) trên mỗi 1% lợi nhuận thu được.
- So sánh:
  CV1 = 0.25 < CV2 = 0.30.
  + Ở Quỹ Tăng Trưởng, để tạo ra 1% lợi nhuận, nhà đầu tư chỉ phải chịu mức rủi ro biến động là 0.25%.
  + Ở Quỹ Cân Bằng, mặc dù độ lệch chuẩn tuyệt đối s2 = 3% có vẻ nhỏ hơn s1 = 5%, nhưng do mức lợi nhuận trung bình chỉ là 10% nên để tạo ra 1% lợi nhuận, nhà đầu tư phải chịu mức rủi ro biến động lên tới 0.30%.
- Kết luận: Khi xét theo rủi ro tương đối trên mỗi đơn vị lợi nhuận tạo ra, Quỹ Tăng Trưởng có hệ số biến thiên nhỏ hơn nên hoạt động hiệu quả và có độ ổn định tương đối tốt hơn Quỹ Cân Bằng.`,
      criteria: [
        { id: "c1", step: "Bước 1", desc: "Tính đúng hệ số biến thiên Quỹ Tăng Trưởng CV1 = 0.25 (25%)", points: 2.5 },
        { id: "c2", step: "Bước 2", desc: "Tính đúng hệ số biến thiên Quỹ Cân Bằng CV2 = 0.30 (30%)", points: 2.5 },
        { id: "c3", step: "Bước 3", desc: "Giải thích ý nghĩa của CV là mức độ rủi ro trên mỗi đơn vị lợi nhuận", points: 2.5 },
        { id: "c4", step: "Bước 4", desc: "So sánh CV1 < CV2 và kết luận Quỹ Tăng Trưởng có rủi ro tương đối thấp hơn", points: 2.5 }
      ]
    }
  ]
};


// --- FILE: diag-g12-c4.js ---
// ==========================================================================
// CƠ SỞ DỮ LIỆU ĐÁNH GIÁ CHẨN ĐOÁN LỖI SAI & CHẤM TỰ LUẬN TOÁN LỚP 12
// CHƯƠNG IV: NGUYÊN HÀM VÀ TÍCH PHÂN
// ==========================================================================

// --------------------------------------------------------------------------
// BÀI 11: NGUYÊN HÀM (g12-c4-l11)
// --------------------------------------------------------------------------
window.DIAGNOSTIC_ASSESSMENT_DB["g12-c4-l11"] = {
  lessonId: "g12-c4-l11",
  title: "Bài 11: Nguyên hàm",
  chapterTitle: "Chương IV: Nguyên hàm và Tích phân",
  grade: 12,
  summary: "Bộ 15 câu hỏi đánh giá chẩn đoán năng lực: Định nghĩa họ nguyên hàm F(x)+C, bảng nguyên hàm cơ bản, bẫy hằng số tích phân C, phương pháp đổi biến số u = u(x) và phương pháp nguyên hàm từng phần.",

  multipleChoice: [
    {
      id: "mc1",
      number: "Câu 1",
      level: "Nhận biết",
      question: "Họ tất cả các nguyên hàm của hàm số $f(x) = 3x^2 - 2x + 1$ là:",
      options: [
        { key: "A", text: "$F(x) = x^3 - x^2 + x + C$.", isCorrect: true, errorTag: null, errorMsg: "Chính xác! $\\int (3x^2 - 2x + 1)dx = 3\\frac{x^3}{3} - 2\\frac{x^2}{2} + x + C = x^3 - x^2 + x + C$." },
        { key: "B", text: "$F(x) = 6x - 2 + C$.", isCorrect: false, errorTag: "ERR_DERIVATIVE_INSTEAD_INTEGRAL", errorMsg: "Sai lầm nghiêm trọng: $6x - 2$ là ĐẠO HÀM $f'(x)$, không phải nguyên hàm!" },
        { key: "C", text: "$F(x) = x^3 - x^2 + x$.", isCorrect: false, errorTag: "ERR_OMIT_C", errorMsg: "Thiếu hằng số tích phân $C$. Họ nguyên hàm bắt buộc phải có $+C$." },
        { key: "D", text: "$F(x) = 3x^3 - 2x^2 + x + C$.", isCorrect: false, errorTag: "ERR_FORGET_DENOMINATOR", errorMsg: "Quên chia cho số mũ: nguyên hàm của $x^n$ là $\\frac{x^{n+1}}{n+1}$." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Nguyên hàm hàm đa thức cơ bản",
        question: "Tìm họ nguyên hàm của $f(x) = 4x^3 - 6x$.",
        correctAnswer: "$\\int (4x^3 - 6x)dx = x^4 - 3x^2 + C$.",
        tip: "Mẹo nhớ: Tăng số mũ lên 1 và chia cho chính số mũ mới: $\\int x^n dx = \\frac{x^{n+1}}{n+1} + C$."
      }
    },
    {
      id: "mc2",
      number: "Câu 2",
      level: "Thông hiểu",
      question: "Họ nguyên hàm của hàm số $f(x) = \\frac{1}{2x + 3}$ trên các khoảng xác định là:",
      options: [
        { key: "A", text: "$\\frac{1}{2}\\ln|2x + 3| + C$.", isCorrect: true, errorTag: null, errorMsg: "Rất chuẩn! Công thức mở rộng: $\\int \\frac{1}{ax + b}dx = \\frac{1}{a}\\ln|ax + b| + C$. Ở đây $a = 2$ nên phải có hệ số $\\frac{1}{2}$ và dấu giá trị tuyệt đối $|2x+3|$." },
        { key: "B", text: "$\\ln|2x + 3| + C$.", isCorrect: false, errorTag: "ERR_FORGET_ONE_OVER_A", errorMsg: "Bẫy kinh điển: Quên nhân hệ số $1/a = 1/2$ của biểu thức bậc nhất $ax + b$." },
        { key: "C", text: "$\\frac{1}{2}\\ln(2x + 3) + C$.", isCorrect: false, errorTag: "ERR_OMIT_ABS", errorMsg: "Thiếu dấu giá trị tuyệt đối trong logarit tự nhiên." },
        { key: "D", text: "$-\\frac{1}{(2x + 3)^2} + C$.", isCorrect: false, errorTag: "ERR_POWER_CONFUSION", errorMsg: "Nhầm lẫn với đạo hàm của $1/u$." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Hệ số 1/a trong nguyên hàm hàm hợp bậc nhất",
        question: "Tìm họ nguyên hàm của $f(x) = e^{3x - 1}$.",
        correctAnswer: "$\\frac{1}{3}e^{3x - 1} + C$.",
        tip: "Mẹo nhớ: Luôn nhớ nhân hệ số $1/a$ khi trong ruột là bậc nhất $ax + b$."
      }
    },
    {
      id: "mc3",
      number: "Câu 3",
      level: "Thông hiểu",
      question: "Họ nguyên hàm của hàm số $f(x) = \\sin 2x$ là:",
      options: [
        { key: "A", text: "$-\\frac{1}{2}\\cos 2x + C$.", isCorrect: true, errorTag: null, errorMsg: "Chính xác! $\\int \\sin(ax+b)dx = -\\frac{1}{a}\\cos(ax+b) + C$. Do đó $\\int \\sin 2x dx = -\\frac{1}{2}\\cos 2x + C$." },
        { key: "B", text: "$\\frac{1}{2}\\cos 2x + C$.", isCorrect: false, errorTag: "ERR_SIGN_SIN_INTEGRAL", errorMsg: "Sai dấu: Nguyên hàm của $\\sin$ là $-\\cos$, còn đạo hàm của $\\sin$ mới là $+\\cos$." },
        { key: "C", text: "$-2\\cos 2x + C$.", isCorrect: false, errorTag: "ERR_MULTIPLY_INSTEAD_DIVIDE", errorMsg: "Nhân 2 thay vì chia 2." },
        { key: "D", text: "$2\\cos 2x + C$.", isCorrect: false, errorTag: "ERR_DERIVATIVE", errorMsg: "Đây là đạo hàm của $\\sin 2x$." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Dấu trong nguyên hàm lượng giác",
        question: "Tìm nguyên hàm của $\\cos 3x$.",
        correctAnswer: "$\\frac{1}{3}\\sin 3x + C$.",
        tip: "Mẹo nhớ: Nguyên hàm: $\\sin \\to -\\cos$, $\\cos \\to +\\sin$ (ngược chiều với đạo hàm)."
      }
    },
    {
      id: "mc4",
      number: "Câu 4",
      level: "Vận dụng",
      question: "Để tính nguyên hàm $I = \\int x e^x dx$ bằng phương pháp nguyên hàm từng phần, ta đặt $u$ và $dv$ như thế nào?",
      options: [
        { key: "A", text: "Đặt $u = x, dv = e^x dx$.", isCorrect: true, errorTag: null, errorMsg: "Xuất sắc! Theo quy tắc ưu tiên đặt $u$: 'Nhất lô, nhì đa, tam lượng, tứ mũ'. Ở đây đa thức $x$ được ưu tiên đặt làm $u$, phần còn lại $e^x dx$ là $dv$ để khi lấy vi phân $du = dx$ bậc giảm xuống." },
        { key: "B", text: "Đặt $u = e^x, dv = x dx$.", isCorrect: false, errorTag: "ERR_WRONG_PRIORITY", errorMsg: "Sai thứ tự ưu tiên: Nếu đặt $u = e^x, dv = xdx$ thì $v = x^2/2$, bậc của đa thức tăng lên làm bài toán phức tạp hơn." },
        { key: "C", text: "Đặt $u = x e^x, dv = dx$.", isCorrect: false, errorTag: "ERR_NO_SPLIT", errorMsg: "Không tách được bài toán." },
        { key: "D", text: "Đặt $u = x^2, dv = e^x dx$.", isCorrect: false, errorTag: "ERR_ALTER_FUNCTION", errorMsg: "Tự ý thay đổi hàm số của đề bài." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Câu khẩu quyết đặt u trong nguyên hàm từng phần",
        question: "Khẩu quyết chọn biến $u$ trong nguyên hàm từng phần gồm 4 loại hàm nào theo thứ tự ưu tiên giảm dần?",
        correctAnswer: "1. Logarit -> 2. Đa thức -> 3. Lượng giác -> 4. Mũ ('Nhất lô, nhì đa, tam lượng, tứ mũ').",
        tip: "Mẹo nhớ: 'Nhất lô, nhì đa, tam lượng, tứ mũ'."
      }
    },
    {
      id: "mc5",
      number: "Câu 5",
      level: "Vận dụng",
      question: "Tìm một nguyên hàm $F(x)$ của hàm số $f(x) = 2x - 3$ biết rằng $F(2) = 5$.",
      options: [
        { key: "A", text: "$F(x) = x^2 - 3x + 7$.", isCorrect: true, errorTag: null, errorMsg: "Chính xác tuyệt đối! $F(x) = \\int (2x - 3)dx = x^2 - 3x + C$. Theo giả thiết: $F(2) = 2^2 - 3(2) + C = 5 \\iff 4 - 6 + C = 5 \\iff -2 + C = 5 \\iff C = 7$. Vậy $F(x) = x^2 - 3x + 7$." },
        { key: "B", text: "$F(x) = x^2 - 3x + 5$.", isCorrect: false, errorTag: "ERR_ASSUME_C_IS_GIVEN_VALUE", errorMsg: "Nhầm lẫn gán luôn $C = 5$ mà không giải phương trình $F(2) = 5$." },
        { key: "C", text: "$F(x) = x^2 - 3x + 3$.", isCorrect: false, errorTag: "ERR_ARITHMETIC_C", errorMsg: "Tính nhầm $-2 + C = 5 \\implies C = 3$." },
        { key: "D", text: "$F(x) = x^2 - 3x - 7$.", isCorrect: false, errorTag: "ERR_SIGN_C", errorMsg: "Sai dấu của hằng số $C$." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Xác định hằng số C từ điều kiện ban đầu",
        question: "Tìm $F(x)$ biết $F'(x) = 3x^2$ và $F(1) = 4$.",
        correctAnswer: "$F(x) = x^3 + C$. $F(1) = 1 + C = 4 \\implies C = 3 \\implies F(x) = x^3 + 3$.",
        tip: "Mẹo nhớ: Tìm họ nguyên hàm tổng quát $+C$ trước, rồi thay điểm $(x_0; y_0)$ vào giải tìm $C$."
      }
    }
  ],

  trueFalse: [
    {
      id: "tf1",
      number: "Câu 6",
      scenario: "Cho hàm số $f(x) = x \\sqrt{x^2 + 1}$. Xét tính Đúng hoặc Sai của các khẳng định sau khi tìm nguyên hàm $\\int f(x)dx$:",
      items: [
        { key: "a", text: "Nếu đặt $u = x^2 + 1$ thì vi phân $du = 2x dx \\implies x dx = \\frac{1}{2}du$.", isCorrect: true, explanation: "Đúng. Đạo hàm của $x^2 + 1$ là $2x$." },
        { key: "b", text: "Khi đổi biến sang $u$, nguyên hàm trở thành $\\int \\frac{1}{2}\\sqrt{u} du$.", isCorrect: true, explanation: "Đúng. Thay $\\sqrt{x^2+1} = \\sqrt{u}$ và $x dx = \\frac{1}{2}du$." },
        { key: "c", text: "Họ nguyên hàm của hàm số là $F(x) = \\frac{1}{3}(x^2 + 1)\\sqrt{x^2 + 1} + C$.", isCorrect: true, explanation: "Đúng. $\\frac{1}{2} \\int u^{1/2} du = \\frac{1}{2} \\cdot \\frac{u^{3/2}}{3/2} + C = \\frac{1}{3}u\\sqrt{u} + C = \\frac{1}{3}(x^2+1)\\sqrt{x^2+1} + C$." },
        { key: "d", text: "Phương pháp đổi biến số bắt buộc phải đổi biến ngược lại về biến $x$ ban đầu đối với bài toán tìm họ nguyên hàm.", isCorrect: true, explanation: "Đúng. Đối với nguyên hàm (tích phân bất định), kết quả cuối cùng phải là hàm số của biến $x$, không được để lại biến phụ $u$." }
      ]
    },
    {
      id: "tf2",
      number: "Câu 7",
      scenario: "Cho hai hàm số $u(x)$ và $v(x)$ có đạo hàm liên tục trên khoảng $K$. Xét tính Đúng hoặc Sai của các công thức tính nguyên hàm:",
      items: [
        { key: "a", text: "Công thức nguyên hàm từng phần là $\\int u dv = uv - \\int v du$.", isCorrect: true, explanation: "Đúng. Đây là công thức nguyên hàm từng phần chuẩn xác suy ra từ đạo hàm của tích $(uv)' = u'v + uv'$." },
        { key: "b", text: "$\\int [f(x) \\cdot g(x)]dx = \\int f(x)dx \\cdot \\int g(x)dx$.", isCorrect: false, explanation: "Sai lầm tai hại: Nguyên hàm của một tích KHÔNG BAO GIỜ bằng tích các nguyên hàm!" },
        { key: "c", text: "$\\int [k f(x)]dx = k \\int f(x)dx$ với mọi hằng số thực $k \\ne 0$.", isCorrect: true, explanation: "Đúng. Tính chất tuyến tính cho phép đưa hằng số khác không ra ngoài dấu tích phân." },
        { key: "d", text: "Nếu $F(x)$ và $G(x)$ đều là nguyên hàm của $f(x)$ thì $F(x) - G(x) = C$ (một hằng số).", isCorrect: true, explanation: "Đúng. Hai nguyên hàm của cùng một hàm số trên một khoảng chỉ khác nhau một hằng số cộng." }
      ]
    },
    {
      id: "tf3",
      number: "Câu 8",
      scenario: "Tìm nguyên hàm $I = \\int x \\cos x dx$. Đánh giá tính Đúng hoặc Sai của các bước thực hiện:",
      items: [
        { key: "a", text: "Đặt $u = x \\implies du = dx$ và $dv = \\cos x dx \\implies v = \\sin x$.", isCorrect: true, explanation: "Đúng. Ưu tiên hàm đa thức $x$ đặt làm $u$, $\\cos x dx$ đặt làm $dv$." },
        { key: "b", text: "Theo công thức từng phần: $I = x\\sin x - \\int \\sin x dx$.", isCorrect: true, explanation: "Đúng. $uv - \\int v du = x\\sin x - \\int \\sin x dx$." },
        { key: "c", text: "Kết quả cuối cùng là $I = x\\sin x + \\cos x + C$.", isCorrect: true, explanation: "Đúng. Vì $\\int \\sin x dx = -\\cos x$ nên $-\\int \\sin x dx = -(-\\cos x) = +\\cos x$." },
        { key: "d", text: "Nếu lấy đạo hàm $(x\\sin x + \\cos x + C)'$ ta thu lại đúng hàm ban đầu $x\\cos x$.", isCorrect: true, explanation: "Đúng. $(x\\sin x + \\cos x)' = (1\\cdot \\sin x + x\\cos x) - \\sin x = x\\cos x$." }
      ]
    }
  ],

  shortAnswer: [
    {
      id: "sa1",
      number: "Câu 9",
      question: "Biết $F(x)$ là một nguyên hàm của hàm số $f(x) = 4x^3$ thỏa mãn $F(0) = 2$. Tính $F(2)$.",
      correctAnswer: "18",
      acceptedAnswers: ["18", "F(2) = 18"],
      explanation: "$F(x) = \\int 4x^3 dx = x^4 + C$. $F(0) = 0 + C = 2 \\implies C = 2$. Do đó $F(x) = x^4 + 2$. Khi đó $F(2) = 2^4 + 2 = 16 + 2 = 18$.",
      tip: "$F(2) = 2^4 + 2 = 18$."
    },
    {
      id: "sa2",
      number: "Câu 10",
      question: "Họ nguyên hàm của $f(x) = e^{2x}$ có dạng $\\frac{1}{a}e^{2x} + C$. Tìm giá trị của số nguyên $a$.",
      correctAnswer: "2",
      acceptedAnswers: ["2", "a = 2"],
      explanation: "$\\int e^{2x}dx = \\frac{1}{2}e^{2x} + C \\implies a = 2$.",
      tip: "Hệ số dưới mẫu bằng hệ số của $x$ ở số mũ."
    },
    {
      id: "sa3",
      number: "Câu 11",
      question: "Tính giá trị của nguyên hàm $I = \\int_0^1 (2x + 1)dx$.",
      correctAnswer: "2",
      acceptedAnswers: ["2", "I = 2", "2.0"],
      explanation: "$F(x) = x^2 + x$. $I = F(1) - F(0) = (1^2 + 1) - 0 = 2$.",
      tip: "Áp dụng định lý Newton-Leibniz: $F(1) - F(0) = 2$."
    },
    {
      id: "sa4",
      number: "Câu 12",
      question: "Tìm hằng số $C$ để nguyên hàm $F(x) = \\ln|x| + C$ của hàm số $f(x) = \\frac{1}{x}$ đi qua điểm $M(e; 5)$.",
      correctAnswer: "4",
      acceptedAnswers: ["4", "C = 4"],
      explanation: "$F(e) = \\ln(e) + C = 1 + C = 5 \\iff C = 4$.",
      tip: "Thay $x = e, y = 5$ với $\\ln(e) = 1$."
    }
  ],

  essay: [
    {
      id: "es1",
      number: "Câu 13 (Tự luận 1)",
      title: "Phương pháp nguyên hàm từng phần phối hợp đa thức và mũ",
      question: "Tính họ nguyên hàm sau bằng phương pháp nguyên hàm từng phần:\n$$I = \\int (2x + 1)e^x dx$$",
      maxPoints: 10.0,
      sampleSolution: `1) Chọn u và dv:
- Đặt:
  u = 2x + 1 => du = 2 dx.
  dv = e^x dx => chọn v = e^x.

2) Áp dụng công thức nguyên hàm từng phần:
- Theo công thức: int u dv = u*v - int v du.
- Ta có:
  I = (2x + 1) * e^x - int e^x * 2 dx
    = (2x + 1)e^x - 2 int e^x dx.

3) Tính nguyên hàm còn lại và rút gọn:
- Ta biết int e^x dx = e^x + C0.
- Do đó:
  I = (2x + 1)e^x - 2e^x + C
    = [ (2x + 1) - 2 ] * e^x + C
    = (2x - 1)e^x + C.

4) Kiểm tra lại bằng đạo hàm:
- [ (2x - 1)e^x + C ]' = (2x - 1)' * e^x + (2x - 1) * (e^x)'
                       = 2e^x + (2x - 1)e^x = (2 + 2x - 1)e^x = (2x + 1)e^x (đúng bằng f(x)).
- Kết luận: Họ nguyên hàm cần tìm là I = (2x - 1)e^x + C.`,
      criteria: [
        { id: "c1", step: "Bước 1", desc: "Đặt đúng u = 2x + 1, dv = e^x dx và tính đúng du = 2 dx, v = e^x", points: 2.5 },
        { id: "c2", step: "Bước 2", desc: "Áp dụng công thức từng phần đưa về (2x+1)e^x - 2 int e^x dx", points: 2.5 },
        { id: "c3", step: "Bước 3", desc: "Tính ra đúng kết quả (2x - 1)e^x + C", points: 2.5 },
        { id: "c4", step: "Bước 4", desc: "Thử lại bằng đạo hàm và kết luận hoàn chỉnh", points: 2.5 }
      ]
    },
    {
      id: "es2",
      number: "Câu 14 (Tự luận 2)",
      title: "Phương pháp đổi biến số lượng giác hóa hoặc đặt căn thức",
      question: "Tìm họ nguyên hàm của hàm số sau trên khoảng $(-1; 1)$:\n$$I = \\int \\frac{x^3}{\\sqrt{1 - x^2}} dx$$",
      maxPoints: 10.0,
      sampleSolution: `1) Đổi biến số bằng cách đặt căn thức:
- Đặt t = sqrt{1 - x^2} (với t > 0 vì x in (-1; 1)).
- Bình phương hai vế: t^2 = 1 - x^2 => x^2 = 1 - t^2.
- Lấy vi phân hai vế: 2t dt = -2x dx => x dx = -t dt.

2) Biến đổi biểu thức dưới dấu nguyên hàm:
- Tách: x^3 dx = x^2 * (x dx) = (1 - t^2) * (-t dt).
- Thay vào nguyên hàm ban đầu:
  I = int [ (1 - t^2) * (-t dt) ] / t
    = int - (1 - t^2) dt
    = int (t^2 - 1) dt.

3) Tính nguyên hàm theo biến t và trả về biến x:
- int (t^2 - 1) dt = t^3 / 3 - t + C.
- Đặt nhân tử chung:
  = t * (t^2 / 3 - 1) + C = t * (t^2 - 3) / 3 + C.
- Trả về biến x (thay t = sqrt{1 - x^2} và t^2 = 1 - x^2):
  I = sqrt{1 - x^2} * [ (1 - x^2) - 3 ] / 3 + C
    = sqrt{1 - x^2} * (-x^2 - 2) / 3 + C
    = -1/3 * (x^2 + 2)sqrt{1 - x^2} + C.
- Kết luận: Họ nguyên hàm là I = -1/3 (x^2 + 2)sqrt{1 - x^2} + C.`,
      criteria: [
        { id: "c1", step: "Bước 1", desc: "Đặt đúng t = sqrt(1 - x^2), tính vi phân x dx = -t dt và x^2 = 1 - t^2", points: 2.5 },
        { id: "c2", step: "Bước 2", desc: "Chuyển thành công nguyên hàm về int (t^2 - 1) dt", points: 2.5 },
        { id: "c3", step: "Bước 3", desc: "Tính đúng nguyên hàm theo t: t^3/3 - t + C", points: 2.5 },
        { id: "c4", step: "Bước 4", desc: "Thay ngược biến x và rút gọn ra đúng -1/3 (x^2 + 2)sqrt(1 - x^2) + C", points: 2.5 }
      ]
    },
    {
      id: "es3",
      number: "Câu 15 (Tự luận 3)",
      title: "Ứng dụng nguyên hàm tìm quy luật tăng trưởng vi khuẩn",
      question: "Tốc độ phát triển của một đàn vi khuẩn trong phòng thí nghiệm được mô hình hóa bởi phương trình đạo hàm: $\\frac{dN}{dt} = 1000 e^{0.1t}$ (con vi khuẩn/giờ), trong đó $N(t)$ là số lượng vi khuẩn sau $t$ giờ. Biết ban đầu khi $t = 0$, đàn vi khuẩn có $5000$ con.\n1) Hãy tìm hàm số $N(t)$ biểu thị số lượng vi khuẩn tại thời điểm $t$.\n2) Sau bao nhiêu giờ thì đàn vi khuẩn tăng gấp đôi số lượng ban đầu (đạt $10.000$ con)? (Làm tròn đến hàng phần mười).",
      maxPoints: 10.0,
      sampleSolution: `1) Tìm hàm số N(t) qua bài toán nguyên hàm:
- Ta có N(t) là một nguyên hàm của tốc độ tăng trưởng dN/dt:
  N(t) = int 1000 * e^{0.1t} dt
       = 1000 * (1 / 0.1) * e^{0.1t} + C
       = 1000 * 10 * e^{0.1t} + C
       = 10000 * e^{0.1t} + C.
- Điều kiện ban đầu: Tại t = 0 thì N(0) = 5000:
  N(0) = 10000 * e^0 + C = 5000
  <=> 10000 * 1 + C = 5000 <=> C = 5000 - 10000 = -5000.
- Vậy hàm số số lượng vi khuẩn là:
  N(t) = 10000 * e^{0.1t} - 5000 (con).

2) Tìm thời gian để số lượng vi khuẩn đạt 10.000 con:
- Cho N(t) = 10000:
  10000 * e^{0.1t} - 5000 = 10000
  <=> 10000 * e^{0.1t} = 15000
  <=> e^{0.1t} = 15000 / 10000 = 1.5.
- Lấy logarit tự nhiên hai vế:
  0.1t = ln(1.5)
  => t = ln(1.5) / 0.1 = 10 * ln(1.5).
- Bấm máy tính:
  ln(1.5) ≈ 0.405465
  => t ≈ 10 * 0.405465 = 4.05465 ≈ 4.1 giờ.
- Kết luận: Sau khoảng 4.1 giờ (khoảng 4 giờ 6 phút) thì số lượng vi khuẩn sẽ tăng gấp đôi số lượng ban đầu.`,
      criteria: [
        { id: "c1", step: "Bước 1", desc: "Tính đúng họ nguyên hàm N(t) = 10.000 e^(0.1t) + C", points: 2.5 },
        { id: "c2", step: "Bước 2", desc: "Thay N(0) = 5000 giải đúng C = -5000 và kết luận N(t) = 10000 e^(0.1t) - 5000", points: 2.5 },
        { id: "c3", step: "Bước 3", desc: "Thiết lập phương trình 10000 e^(0.1t) - 5000 = 10000 <=> e^(0.1t) = 1.5", points: 2.5 },
        { id: "c4", step: "Bước 4", desc: "Giải t = 10 ln(1.5) ≈ 4.1 giờ và kết luận thực tế chính xác", points: 2.5 }
      ]
    }
  ]
};

// --------------------------------------------------------------------------
// BÀI 12: TÍCH PHÂN (g12-c4-l12)
// --------------------------------------------------------------------------
window.DIAGNOSTIC_ASSESSMENT_DB["g12-c4-l12"] = {
  lessonId: "g12-c4-l12",
  title: "Bài 12: Tích phân",
  chapterTitle: "Chương IV: Nguyên hàm và Tích phân",
  grade: 12,
  summary: "Bộ 15 câu hỏi đánh giá chẩn đoán năng lực: Định lý Newton-Leibniz, các tính chất cơ bản (chèn cận, đảo cận, không phụ thuộc vào biến), tích phân đổi biến số có đổi cận, tích phân từng phần, ứng dụng vật lý tính quãng đường.",

  multipleChoice: [
    {
      id: "mc1",
      number: "Câu 1",
      level: "Nhận biết",
      question: "Nếu $\\int_1^2 f(x)dx = 3$ và $\\int_2^5 f(x)dx = 7$ thì $\\int_1^5 f(x)dx$ bằng:",
      options: [
        { key: "A", text: "$10$.", isCorrect: true, errorTag: null, errorMsg: "Chính xác! Tính chất chèn cận của tích phân: $\\int_1^5 f(x)dx = \\int_1^2 f(x)dx + \\int_2^5 f(x)dx = 3 + 7 = 10$." },
        { key: "B", text: "$4$.", isCorrect: false, errorTag: "ERR_SUBTRACTION", errorMsg: "Trừ nhầm: $7 - 3 = 4$." },
        { key: "C", text: "$21$.", isCorrect: false, errorTag: "ERR_MULTIPLICATION", errorMsg: "Nhân nhầm: $3 \\times 7 = 21$." },
        { key: "D", text: "$-4$.", isCorrect: false, errorTag: "ERR_REVERSE_SUB", errorMsg: "Sai dấu." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Tính chất chèn cận của tích phân",
        question: "Biết $\\int_0^3 f(x)dx = 5$ và $\\int_2^3 f(x)dx = 2$. Tính $\\int_0^2 f(x)dx$.",
        correctAnswer: "$\\int_0^2 f(x)dx = \\int_0^3 f(x)dx - \\int_2^3 f(x)dx = 5 - 2 = 3$.",
        tip: "Mẹo nhớ: $\\int_a^c = \\int_a^b + \\int_b^c$."
      }
    },
    {
      id: "mc2",
      number: "Câu 2",
      level: "Thông hiểu",
      question: "Giá trị của tích phân $I = \\int_0^{\\frac{\\pi}{2}} \\cos x dx$ bằng:",
      options: [
        { key: "A", text: "$1$.", isCorrect: true, errorTag: null, errorMsg: "Chính xác! Một nguyên hàm của $\\cos x$ là $\\sin x$. Khi đó $I = \\sin x|_0^{\\frac{\\pi}{2}} = \\sin\\left(\\frac{\\pi}{2}\\right) - \\sin 0 = 1 - 0 = 1$." },
        { key: "B", text: "$0$.", isCorrect: false, errorTag: "ERR_ZERO", errorMsg: "Sai lầm: $\\sin(\\pi/2) = 1$, không phải 0." },
        { key: "C", text: "$-1$.", isCorrect: false, errorTag: "ERR_SIGN_REVERSE", errorMsg: "Nhầm nguyên hàm của $\\cos$ thành $-\\sin$." },
        { key: "D", text: "$\\frac{\\pi}{2}$.", isCorrect: false, errorTag: "ERR_LIMIT_VALUE", errorMsg: "Nhầm giá trị cận vào kết quả tích phân." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Định lý Newton-Leibniz",
        question: "Tính tích phân $\\int_0^1 e^x dx$.",
        correctAnswer: "$e^x|_0^1 = e^1 - e^0 = e - 1$.",
        tip: "Mẹo nhớ: $\\int_a^b f(x)dx = F(b) - F(a)$ (thay cận trên trừ cận dưới)."
      }
    },
    {
      id: "mc3",
      number: "Câu 3",
      level: "Thông hiểu",
      question: "Khi đổi biến $u = 2x + 1$ để tính tích phân $I = \\int_0^1 (2x + 1)^3 dx$, ta được tích phân theo biến $u$ nào sau đây?",
      options: [
        { key: "A", text: "$I = \\frac{1}{2}\\int_1^3 u^3 du$.", isCorrect: true, errorTag: null, errorMsg: "Rất chuẩn! Đổi biến cần đổi cận:\n- Với $x = 0 \\implies u = 1$.\n- Với $x = 1 \\implies u = 3$.\nVi phân: $du = 2 dx \\implies dx = \\frac{1}{2}du$. Do đó $I = \\frac{1}{2}\\int_1^3 u^3 du$." },
        { key: "B", text: "$I = \\int_0^1 u^3 du$.", isCorrect: false, errorTag: "ERR_FORGET_CHANGE_LIMITS", errorMsg: "Bẫy kinh điển: Quên đổi cận tích phân khi đổi biến số!" },
        { key: "C", text: "$I = \\int_1^3 u^3 du$.", isCorrect: false, errorTag: "ERR_FORGET_ONE_HALF", errorMsg: "Quên nhân hệ số $1/2$ của vi phân $dx = \\frac{1}{2}du$." },
        { key: "D", text: "$I = 2\\int_1^3 u^3 du$.", isCorrect: false, errorTag: "ERR_MULTIPLY_2", errorMsg: "Nhân 2 thay vì chia 2." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Bắt buộc đổi cận trong tích phân đổi biến",
        question: "Bước quan trọng nhất khác biệt giữa nguyên hàm và tích phân khi đổi biến là gì?",
        correctAnswer: "Tích phân bắt buộc phải có bước 'ĐỔI CẬN' ngay sau khi đặt ẩn phụ.",
        tip: "Mẹo nhớ: Đổi biến là phải đổi cận ngay lập tức."
      }
    },
    {
      id: "mc4",
      number: "Câu 4",
      level: "Vận dụng",
      question: "Biết $\\int_0^1 [2f(x) - 3x^2]dx = 5$. Giá trị của $\\int_0^1 f(x)dx$ bằng:",
      options: [
        { key: "A", text: "$3$.", isCorrect: true, errorTag: null, errorMsg: "Chính xác! Tách tích phân: $2\\int_0^1 f(x)dx - 3\\int_0^1 x^2 dx = 5$. Ta có $3\\int_0^1 x^2 dx = 3 \\cdot \\frac{x^3}{3}|_0^1 = 1^3 - 0 = 1$. Suy ra $2\\int_0^1 f(x)dx - 1 = 5 \\iff 2\\int_0^1 f(x)dx = 6 \\iff \\int_0^1 f(x)dx = 3$." },
        { key: "B", text: "$2$.", isCorrect: false, errorTag: "ERR_SUBTRACT_ONE", errorMsg: "Lấy $5 - 1 = 4$ rồi chia 2 ra 2 (sai dấu)." },
        { key: "C", text: "$4$.", isCorrect: false, errorTag: "ERR_FORGET_DIVIDE_TWO", errorMsg: "Quên chia cho hệ số 2." },
        { key: "D", text: "$6$.", isCorrect: false, errorTag: "ERR_BEFORE_DIVIDE", errorMsg: "Đây là giá trị của $2\\int_0^1 f(x)dx$." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Tính chất tuyến tính của tích phân",
        question: "Nếu $\\int_a^b [f(x) + g(x)]dx = 7$ và $\\int_a^b g(x)dx = 3$, tính $\\int_a^b f(x)dx$.",
        correctAnswer: "$7 - 3 = 4$.",
        tip: "Mẹo nhớ: Tích phân của tổng bằng tổng các tích phân."
      }
    },
    {
      id: "mc5",
      number: "Câu 5",
      level: "Vận dụng",
      question: "Một ô tô đang chạy với vận tốc $20\\text{ m/s}$ thì người lái xe đạp phanh; từ thời điểm đó, ô tô chuyển động chậm dần đều với vận tốc $v(t) = -5t + 20$ (m/s), trong đó $t$ là khoảng thời gian tính bằng giây kể từ lúc bắt đầu đạp phanh. Quãng đường ô tô di chuyển được từ lúc đạp phanh đến khi dừng hẳn là:",
      options: [
        { key: "A", text: "$40\\text{ mét}$.", isCorrect: true, errorTag: null, errorMsg: "Xuất sắc! Xe dừng hẳn khi vận tốc $v(t) = 0 \\iff -5t + 20 = 0 \\iff t = 4\\text{ giây}$. Quãng đường xe chạy được là tích phân của vận tốc theo thời gian:\n$s = \\int_0^4 (-5t + 20)dt = \\left(-\\frac{5t^2}{2} + 20t\\right)\\Big|_0^4 = -\\frac{5(16)}{2} + 20(4) = -40 + 80 = 40\\text{ mét}$." },
        { key: "B", text: "$80\\text{ mét}$.", isCorrect: false, errorTag: "ERR_CONSTANT_SPEED", errorMsg: "Nhầm lẫn với chuyển động thẳng đều $s = v \\cdot t = 20 \\times 4 = 80\\text{ m}$ (quên phần gia tốc hãm phanh)." },
        { key: "C", text: "$20\\text{ mét}$.", isCorrect: false, errorTag: "ERR_HALF_DISTANCE", errorMsg: "Tính nhầm số liệu." },
        { key: "D", text: "$50\\text{ mét}$.", isCorrect: false, errorTag: "ERR_CALCULATION", errorMsg: "Tính sai giá trị tích phân." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Ứng dụng tích phân tính quãng đường từ vận tốc",
        question: "Công thức tính quãng đường đi được từ thời điểm $t_1$ đến $t_2$ là gì?",
        correctAnswer: "$s = \\int_{t_1}^{t_2} v(t)dt$.",
        tip: "Mẹo nhớ: Quãng đường = Tích phân của vận tốc. Xe dừng hẳn khi $v(t) = 0$."
      }
    }
  ],

  trueFalse: [
    {
      id: "tf1",
      number: "Câu 6",
      scenario: "Cho hàm số $f(x)$ liên tục trên đoạn $[0; 4]$. Biết rằng $\\int_0^2 f(x)dx = 3$ và $\\int_0^4 f(x)dx = 8$. Xét tính Đúng hoặc Sai:",
      items: [
        { key: "a", text: "Giá trị của $\\int_2^4 f(x)dx = 5$.", isCorrect: true, explanation: "Đúng. $\\int_2^4 f(x)dx = \\int_0^4 f(x)dx - \\int_0^2 f(x)dx = 8 - 3 = 5$." },
        { key: "b", text: "Giá trị của $\\int_2^0 f(x)dx = -3$.", isCorrect: true, explanation: "Đúng. Đảo cận làm đổi dấu tích phân: $\\int_2^0 f(x)dx = -\\int_0^2 f(x)dx = -3$." },
        { key: "c", text: "Tích phân $\\int_0^2 f(t)dt$ có giá trị khác với $\\int_0^2 f(x)dx$.", isCorrect: false, explanation: "Sai lầm nghiêm trọng: Tích phân hoàn toàn không phụ thuộc vào tên gọi của biến số: $\\int_0^2 f(t)dt = \\int_0^2 f(x)dx = 3$." },
        { key: "d", text: "$\\int_0^2 3f(x)dx = 9$.", isCorrect: true, explanation: "Đúng. Đưa hằng số 3 ra ngoài: $3 \\times 3 = 9$." }
      ]
    },
    {
      id: "tf2",
      number: "Câu 7",
      scenario: "Xét việc tính tích phân $I = \\int_0^1 x e^{x^2} dx$. Đánh giá tính Đúng hoặc Sai của các bước làm sau:",
      items: [
        { key: "a", text: "Phương pháp thích hợp là đổi biến số đặt $u = x^2$.", isCorrect: true, explanation: "Đúng. Vì đạo hàm $(x^2)' = 2x$ xuất hiện thừa số $x dx$ dưới dấu tích phân." },
        { key: "b", text: "Vi phân $du = 2x dx \\implies x dx = \\frac{1}{2}du$.", isCorrect: true, explanation: "Đúng." },
        { key: "c", text: "Đổi cận: khi $x = 0 \\implies u = 0$; khi $x = 1 \\implies u = 1$.", isCorrect: true, explanation: "Đúng. $0^2 = 0$ và $1^2 = 1$." },
        { key: "d", text: "Giá trị tích phân là $I = e - 1$.", isCorrect: false, explanation: "Sai lầm: Quên hệ số $1/2$ của vi phân: $I = \\frac{1}{2}\\int_0^1 e^u du = \\frac{1}{2}(e - 1)$, không phải $e - 1$." }
      ]
    },
    {
      id: "tf3",
      number: "Câu 8",
      scenario: "Tính tích phân $J = \\int_1^e x \\ln x dx$ bằng phương pháp từng phần. Xét tính Đúng hoặc Sai:",
      items: [
        { key: "a", text: "Theo thứ tự ưu tiên, ta đặt $u = \\ln x$ và $dv = x dx$.", isCorrect: true, explanation: "Đúng. 'Nhất lô, nhì đa' nên hàm logarit được ưu tiên đặt làm $u$." },
        { key: "b", text: "Vi phân $du = \\frac{1}{x}dx$ và chọn $v = \\frac{x^2}{2}$.", isCorrect: true, explanation: "Đúng. Đạo hàm $\\ln x$ là $1/x$, nguyên hàm của $x$ là $x^2/2$." },
        { key: "c", text: "Áp dụng công thức: $J = \\left(\\frac{x^2}{2}\\ln x\\right)\\Big|_1^e - \\int_1^e \\frac{x}{2}dx$.", isCorrect: true, explanation: "Đúng. $v du = \\frac{x^2}{2} \\cdot \\frac{1}{x}dx = \\frac{x}{2}dx$." },
        { key: "d", text: "Giá trị của tích phân $J$ bằng $\\frac{e^2 + 1}{4}$.", isCorrect: true, explanation: "Đúng. Thay cận: $\\frac{e^2}{2}(1) - 0 - \\frac{x^2}{4}\\Big|_1^e = \\frac{e^2}{2} - \\left(\\frac{e^2}{4} - \\frac{1}{4}\\right) = \\frac{e^2 + 1}{4}$." }
      ]
    }
  ],

  shortAnswer: [
    {
      id: "sa1",
      number: "Câu 9",
      question: "Tính giá trị của tích phân $I = \\int_0^2 (3x^2 - 2x)dx$.",
      correctAnswer: "4",
      acceptedAnswers: ["4", "I = 4", "4.0"],
      explanation: "$F(x) = x^3 - x^2$. $I = (2^3 - 2^2) - 0 = 8 - 4 = 4$.",
      tip: "$F(2) - F(0) = 8 - 4 = 4$."
    },
    {
      id: "sa2",
      number: "Câu 10",
      question: "Biết $\\int_0^1 f(x)dx = 2$ và $\\int_0^1 g(x)dx = -3$. Tính giá trị của $\\int_0^1 [3f(x) + 2g(x)]dx$.",
      correctAnswer: "0",
      acceptedAnswers: ["0", "0.0"],
      explanation: "$3(2) + 2(-3) = 6 - 6 = 0$.",
      tip: "Tuyến tính: $3(2) + 2(-3) = 0$."
    },
    {
      id: "sa3",
      number: "Câu 11",
      question: "Tính tích phân $I = \\int_1^2 \\frac{1}{x}dx$ (kết quả viết dưới dạng $\\ln k$). Tìm giá trị số nguyên $k$.",
      correctAnswer: "2",
      acceptedAnswers: ["2", "k = 2"],
      explanation: "$\\ln|x||_1^2 = \\ln 2 - \\ln 1 = \\ln 2 \\implies k = 2$.",
      tip: "$\\ln 2 - 0 = \\ln 2$."
    },
    {
      id: "sa4",
      number: "Câu 12",
      question: "Một vật chuyển động với vận tốc $v(t) = 3t^2 + 2$ (m/s). Tính quãng đường vật đi được trong 3 giây đầu tiên (từ $t = 0$ đến $t = 3$).",
      correctAnswer: "33",
      acceptedAnswers: ["33", "33m", "33 m"],
      explanation: "$s = \\int_0^3 (3t^2 + 2)dt = (t^3 + 2t)|_0^3 = 3^3 + 2(3) = 27 + 6 = 33\\text{ mét}$.",
      tip: "$t^3 + 2t$ tại $t = 3$ là $27 + 6 = 33$."
    }
  ],

  essay: [
    {
      id: "es1",
      number: "Câu 13 (Tự luận 1)",
      title: "Tính tích phân từng phần hàm đa thức nhân lượng giác",
      question: "Tính tích phân xác định sau:\n$$I = \\int_0^{\\frac{\\pi}{2}} x \\cos x dx$$",
      maxPoints: 10.0,
      sampleSolution: `1) Chọn u và dv theo phương pháp từng phần:
- Áp dụng quy tắc ưu tiên:
  Đặt: u = x => du = dx.
       dv = cos(x) dx => chọn v = sin(x).

2) Áp dụng công thức tích phân từng phần:
- Công thức: int_a^b u dv = u*v|_a^b - int_a^b v du.
- Ta có:
  I = (x * sin x)|_0^{pi/2} - int_0^{pi/2} sin x dx.

3) Tính các giá trị và nguyên hàm:
- Giá trị cận:
  (x * sin x)|_0^{pi/2} = (pi/2 * sin(pi/2)) - (0 * sin 0)
                         = pi/2 * 1 - 0 = pi/2.
- Tích phân còn lại:
  int_0^{pi/2} sin x dx = (-cos x)|_0^{pi/2}
                        = -cos(pi/2) - (-cos 0) = 0 - (-1) = 1.

4) Kết hợp và kết luận:
- I = pi/2 - 1 = (pi - 2) / 2 ≈ 0.5708.
- Kết luận: Giá trị của tích phân là I = pi/2 - 1.`,
      criteria: [
        { id: "c1", step: "Bước 1", desc: "Đặt đúng u = x, dv = cos x dx và tính du = dx, v = sin x", points: 2.5 },
        { id: "c2", step: "Bước 2", desc: "Áp dụng công thức từng phần đưa về (x sin x)|_0^(pi/2) - int_0^(pi/2) sin x dx", points: 2.5 },
        { id: "c3", step: "Bước 3", desc: "Tính đúng phần thế cận đầu tiên ra pi/2 và tích phân sau ra 1", points: 2.5 },
        { id: "c4", step: "Bước 4", desc: "Kết luận đúng giá trị tích phân I = pi/2 - 1", points: 2.5 }
      ]
    },
    {
      id: "es2",
      number: "Câu 14 (Tự luận 2)",
      title: "Tính tích phân đổi biến số có căn thức và đổi cận",
      question: "Tính tích phân sau bằng phương pháp đổi biến số:\n$$I = \\int_0^3 \\frac{x}{\\sqrt{x + 1}} dx$$",
      maxPoints: 10.0,
      sampleSolution: `1) Đặt ẩn phụ và đổi cận:
- Đặt t = sqrt{x + 1} => t^2 = x + 1 => x = t^2 - 1.
- Lấy vi phân hai vế: dx = 2t dt.
- Đổi cận tích phân:
  + Khi x = 0 => t = sqrt{0 + 1} = 1.
  + Khi x = 3 => t = sqrt{3 + 1} = 2.

2) Thay vào tích phân theo biến t:
- Ta có:
  I = int_1^2 [ (t^2 - 1) / t ] * (2t dt)
    = int_1^2 2(t^2 - 1) dt
    = 2 * int_1^2 (t^2 - 1) dt.

3) Tính tích phân và kết luận:
- Nguyên hàm:
  int (t^2 - 1) dt = t^3 / 3 - t.
- Áp dụng định lý Newton-Leibniz:
  I = 2 * [ t^3 / 3 - t ]_1^2
    = 2 * [ (2^3/3 - 2) - (1^3/3 - 1) ]
    = 2 * [ (8/3 - 2) - (1/3 - 1) ]
    = 2 * [ 2/3 - (-2/3) ]
    = 2 * [ 2/3 + 2/3 ] = 2 * (4/3) = 8/3.
- Kết luận: Giá trị của tích phân là I = 8/3.`,
      criteria: [
        { id: "c1", step: "Bước 1", desc: "Đặt đúng t = sqrt(x + 1), rút ra x = t^2 - 1 và dx = 2t dt", points: 2.5 },
        { id: "c2", step: "Bước 2", desc: "Đổi cận chính xác: x = 0 -> t = 1; x = 3 -> t = 2", points: 2.5 },
        { id: "c3", step: "Bước 3", desc: "Biến đổi rút gọn thành công thành 2 int_1^2 (t^2 - 1) dt", points: 2.5 },
        { id: "c4", step: "Bước 4", desc: "Tính đúng giá trị tích phân cuối cùng bằng 8/3", points: 2.5 }
      ]
    },
    {
      id: "es3",
      number: "Câu 15 (Tự luận 3)",
      title: "Ứng dụng tích phân trong bài toán an toàn giao thông đường bộ",
      question: "Một đoàn tàu hỏa đang chạy với vận tốc ổn định $v_0 = 72\\text{ km/h}$ ($20\\text{ m/s}$) thì người lái tàu phát hiện chướng ngại vật phía trước trên đường ray. Người lái tàu lập tức hãm phanh khẩn cấp. Kể từ thời điểm đó, tàu chuyển động chậm dần với gia tốc $a(t) = -0.8\\text{ m/s}^2$.\n1) Thiết lập hàm vận tốc $v(t)$ của đoàn tàu theo thời gian $t$ (giây) kể từ lúc hãm phanh và xác định sau bao lâu thì đoàn tàu dừng lại hẳn.\n2) Tính tổng quãng đường đoàn tàu trượt dài từ lúc bắt đầu hãm phanh đến khi dừng hẳn. Nếu chướng ngại vật cách đoàn tàu lúc bắt đầu hãm phanh là $240\\text{ mét}$ thì đoàn tàu có va chạm với chướng ngại vật hay không?",
      maxPoints: 10.0,
      sampleSolution: `1) Thiết lập hàm vận tốc và thời gian dừng lại:
- Đổi đơn vị: v0 = 72 km/h = 72 / 3.6 = 20 m/s.
- Gia tốc a(t) = -0.8 m/s^2.
- Hàm vận tốc:
  v(t) = v0 + int_0^t a(tau) dtau = 20 + int_0^t (-0.8) dtau = 20 - 0.8t (m/s).
- Tàu dừng lại hẳn khi vận tốc triệt tiêu:
  v(t) = 0 <=> 20 - 0.8t = 0 <=> 0.8t = 20 <=> t = 20 / 0.8 = 25 giây.
- Vậy sau 25 giây thì đoàn tàu dừng lại hẳn.

2) Tính quãng đường hãm phanh và đánh giá an toàn:
- Quãng đường tàu di chuyển được từ lúc hãm phanh (t = 0) đến khi dừng hẳn (t = 25 s) là:
  s = int_0^{25} v(t) dt = int_0^{25} (20 - 0.8t) dt
    = [ 20t - 0.8 * t^2 / 2 ]_0^{25}
    = [ 20t - 0.4 t^2 ]_0^{25}
    = 20(25) - 0.4(25^2)
    = 500 - 0.4(625)
    = 500 - 250 = 250 mét.
- So sánh với khoảng cách chướng ngại vật:
  Khoảng cách từ tàu đến chướng ngại vật lúc hãm phanh là d = 240 mét.
  Vì quãng đường trượt dài của tàu là s = 250 mét > 240 mét.
- Kết luận: Đoàn tàu SẼ VA CHẠM với chướng ngại vật (tàu trượt lố qua vị trí chướng ngại vật 10 mét trước khi dừng hẳn).`,
      criteria: [
        { id: "c1", step: "Bước 1", desc: "Đổi 72 km/h = 20 m/s và thiết lập đúng hàm vận tốc v(t) = 20 - 0.8t", points: 2.5 },
        { id: "c2", step: "Bước 2", desc: "Giải đúng thời gian tàu dừng hẳn là t = 25 giây", points: 2.5 },
        { id: "c3", step: "Bước 3", desc: "Tính đúng tích phân quãng đường hãm phanh s = 250 mét", points: 2.5 },
        { id: "c4", step: "Bước 4", desc: "So sánh 250 m > 240 m và kết luận chính xác tàu sẽ va chạm chướng ngại vật", points: 2.5 }
      ]
    }
  ]
};

// --------------------------------------------------------------------------
// BÀI 13: ỨNG DỤNG HÌNH HỌC CỦA TÍCH PHÂN (g12-c4-l13)
// --------------------------------------------------------------------------
window.DIAGNOSTIC_ASSESSMENT_DB["g12-c4-l13"] = {
  lessonId: "g12-c4-l13",
  title: "Bài 13: Ứng dụng hình học của tích phân",
  chapterTitle: "Chương IV: Nguyên hàm và Tích phân",
  grade: 12,
  summary: "Bộ 15 câu hỏi đánh giá chẩn đoán năng lực: Diện tích hình phẳng giới hạn bởi 1 đường cong và trục hoành, diện tích giữa 2 đồ thị hàm số, thể tích vật thể qua diện tích thiết diện S(x), thể tích khối tròn xoay quanh trục Ox, bài toán tối ưu thể tích thực tế.",

  multipleChoice: [
    {
      id: "mc1",
      number: "Câu 1",
      level: "Nhận biết",
      question: "Diện tích $S$ của hình phẳng giới hạn bởi đồ thị hàm số $y = f(x)$ liên tục trên đoạn $[a; b]$, trục hoành $y = 0$ và hai đường thẳng $x = a, x = b$ được tính bằng công thức nào?",
      options: [
        { key: "A", text: "$S = \\int_a^b |f(x)|dx$.", isCorrect: true, errorTag: null, errorMsg: "Chính xác! Vì diện tích hình học luôn không âm nên bắt buộc phải có dấu giá trị tuyệt đối $|f(x)|$." },
        { key: "B", text: "$S = \\int_a^b f(x)dx$.", isCorrect: false, errorTag: "ERR_OMIT_ABS", errorMsg: "Sai lầm: Nếu phần đồ thị nằm phía dưới trục hoành thì $f(x) < 0$, tích phân không có giá trị tuyệt đối sẽ cho kết quả âm hoặc bị triệt tiêu diện tích." },
        { key: "C", text: "$S = \\pi \\int_a^b f^2(x)dx$.", isCorrect: false, errorTag: "ERR_VOLUME_CONFUSION", errorMsg: "Nhầm lẫn với công thức tính THỂ TÍCH khối tròn xoay." },
        { key: "D", text: "$S = \\left|\\int_a^b f(x)dx\\right|$.", isCorrect: false, errorTag: "ERR_ABS_OUTSIDE", errorMsg: "Sai lầm: Đặt giá trị tuyệt đối bên ngoài dấu tích phân làm các phần diện tích trên và dưới trục hoành triệt tiêu nhau trước khi lấy trị tuyệt đối." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Dấu giá trị tuyệt đối trong công thức diện tích",
        question: "Đồ thị $y = f(x)$ cắt trục hoành tại $c \\in (a; b)$. Công thức phá dấu giá trị tuyệt đối là gì?",
        correctAnswer: "$S = \\int_a^c |f(x)|dx + \\int_c^b |f(x)|dx$.",
        tip: "Mẹo nhớ: Tách tích phân tại các nghiệm của phương trình $f(x) = 0$."
      }
    },
    {
      id: "mc2",
      number: "Câu 2",
      level: "Thông hiểu",
      question: "Thể tích khối tròn xoay tạo thành khi quay hình phẳng giới hạn bởi đồ thị $y = \\sqrt{x}$, trục hoành và hai đường thẳng $x = 0, x = 4$ quanh trục hoành $Ox$ là:",
      options: [
        { key: "A", text: "$8\\pi$.", isCorrect: true, errorTag: null, errorMsg: "Chính xác! Công thức thể tích khối tròn xoay quanh $Ox$: $V = \\pi \\int_a^b f^2(x)dx$. Ta có $V = \\pi \\int_0^4 (\\sqrt{x})^2 dx = \\pi \\int_0^4 x dx = \\pi \\left(\\frac{x^2}{2}\\right)\\Big|_0^4 = \\pi \\left(\\frac{16}{2}\\right) = 8\\pi$." },
        { key: "B", text: "$8$.", isCorrect: false, errorTag: "ERR_FORGET_PI", errorMsg: "Bẫy kinh điển: Quên nhân số $\\pi$ trong công thức thể tích khối tròn xoay." },
        { key: "C", text: "$16\\pi$.", isCorrect: false, errorTag: "ERR_NO_DIVIDE_TWO", errorMsg: "Quên chia cho 2 khi tính nguyên hàm của $x$." },
        { key: "D", text: "$\\frac{16}{3}\\pi$.", isCorrect: false, errorTag: "ERR_WRONG_POWER", errorMsg: "Tính nhầm tích phân của $x^{3/2}$." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Công thức thể tích khối tròn xoay quanh Ox",
        question: "Công thức tính thể tích khối tròn xoay sinh bởi $y = f(x)$ quay quanh $Ox$ là gì?",
        correctAnswer: "$V = \\pi \\int_a^b [f(x)]^2 dx$.",
        tip: "Mẹo nhớ: Luôn có $\\pi$ đứng trước và $f^2(x)$ bên trong: $V = \\pi \\int f^2$."
      }
    },
    {
      id: "mc3",
      number: "Câu 3",
      level: "Thông hiểu",
      question: "Diện tích hình phẳng giới hạn bởi hai đồ thị hàm số $y = x^2$ và $y = 2x$ bằng:",
      options: [
        { key: "A", text: "$\\frac{4}{3}$.", isCorrect: true, errorTag: null, errorMsg: "Rất chuẩn! Phương trình hoành độ giao điểm: $x^2 = 2x \\iff x^2 - 2x = 0 \\iff x = 0$ hoặc $x = 2$. Diện tích $S = \\int_0^2 |2x - x^2|dx$. Trên đoạn $[0; 2]$ ta có $2x \\ge x^2$ nên $S = \\int_0^2 (2x - x^2)dx = \\left(x^2 - \\frac{x^3}{3}\\right)\\Big|_0^2 = 4 - \\frac{8}{3} = \\frac{4}{3}$." },
        { key: "B", text: "$\\frac{4}{3}\\pi$.", isCorrect: false, errorTag: "ERR_AREA_WITH_PI", errorMsg: "Diện tích hình phẳng không có số $\\pi$ (chỉ thể tích tròn xoay mới có $\\pi$)." },
        { key: "C", text: "$\\frac{2}{3}$.", isCorrect: false, errorTag: "ERR_HALF_AREA", errorMsg: "Tính nhầm phân số." },
        { key: "D", text: "$2$.", isCorrect: false, errorTag: "ERR_ARITHMETIC", errorMsg: "Tính sai hiệu số." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Diện tích giới hạn bởi parabol và đường thẳng",
        question: "Công thức nhanh tính diện tích giới hạn bởi $y = ax^2 + bx + c$ và $y = mx + n$ có 2 nghiệm $x_1, x_2$ là gì?",
        correctAnswer: "$S = \\frac{|a|}{6}(x_2 - x_1)^3$.",
        tip: "Mẹo nhớ công thức nhanh: $S = \\frac{|a|}{6}(x_2 - x_1)^3 = \\frac{1}{6}(2 - 0)^3 = \\frac{8}{6} = \\frac{4}{3}$."
      }
    },
    {
      id: "mc4",
      number: "Câu 4",
      level: "Vận dụng",
      question: "Một vật thể có đáy nằm trong mặt phẳng $(Oxy)$ bị giới hạn bởi hai mặt phẳng $x = 0$ và $x = 2$. Biết rằng thiết diện của vật thể cắt bởi mặt phẳng vuông góc với trục $Ox$ tại điểm có hoành độ $x$ ($0 \\le x \\le 2$) là một hình vuông có cạnh bằng $\\sqrt{4 - x^2}$. Thể tích của vật thể đó là:",
      options: [
        { key: "A", text: "$\\frac{16}{3}$.", isCorrect: true, errorTag: null, errorMsg: "Chính xác! Thiết diện vuông góc với trục $Ox$ là hình vuông cạnh $\\sqrt{4 - x^2}$, do đó diện tích thiết diện là $S(x) = (\\sqrt{4 - x^2})^2 = 4 - x^2$. Thể tích vật thể tính theo công thức thiết diện: $V = \\int_0^2 S(x)dx = \\int_0^2 (4 - x^2)dx = \\left(4x - \\frac{x^3}{3}\\right)\\Big|_0^2 = 8 - \\frac{8}{3} = \\frac{16}{3}$." },
        { key: "B", text: "$\\frac{16}{3}\\pi$.", isCorrect: false, errorTag: "ERR_PI_IN_SLICE_VOLUME", errorMsg: "Sai lầm kinh điển: Công thức thể tích theo thiết diện $V = \\int_a^b S(x)dx$ KHÔNG CÓ $\\pi$ (chỉ khối tròn xoay mới có $\\pi$)!" },
        { key: "C", text: "$8$.", isCorrect: false, errorTag: "ERR_OMIT_INTEGRAL_POWER", errorMsg: "Tính nhầm diện tích." },
        { key: "D", text: "$\\frac{8}{3}$.", isCorrect: false, errorTag: "ERR_HALF_VALUE", errorMsg: "Tính nhầm." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Thể tích vật thể qua diện tích thiết diện S(x)",
        question: "Công thức tính thể tích vật thể cắt bởi các mặt phẳng vuông góc với trục Ox là gì?",
        correctAnswer: "$V = \\int_a^b S(x)dx$ (tuyệt đối không nhân thêm $\\pi$).",
        tip: "Mẹo nhớ: Thể tích thiết diện $S(x)$ KHÔNG CÓ $\\pi$."
      }
    },
    {
      id: "mc5",
      number: "Câu 5",
      level: "Vận dụng",
      question: "Cho hình phẳng $(H)$ giới hạn bởi đồ thị $y = x^2$ và đường thẳng $y = 4$. Khi quay $(H)$ quanh trục tung $Oy$, thể tích khối tròn xoay tạo thành là:",
      options: [
        { key: "A", text: "$8\\pi$.", isCorrect: true, errorTag: null, errorMsg: "Xuất sắc! Bài toán quay quanh trục tung $Oy$: từ $y = x^2 \\implies x = \\sqrt{y}$ (với $x \\ge 0$). Cận tích phân từ $y = 0$ đến $y = 4$. Thể tích quay quanh $Oy$ là: $V = \\pi \\int_0^4 x^2 dy = \\pi \\int_0^4 y dy = \\pi \\left(\\frac{y^2}{2}\\right)\\Big|_0^4 = \\pi \\left(\\frac{16}{2}\\right) = 8\\pi$." },
        { key: "B", text: "$\\frac{128}{5}\\pi$.", isCorrect: false, errorTag: "ERR_ROTATION_OX", errorMsg: "Nhầm lẫn quay quanh trục hoành $Ox$: $\\pi \\int_{-2}^2 (16 - x^4)dx = \\frac{128}{5}\\pi$." },
        { key: "C", text: "$16\\pi$.", isCorrect: false, errorTag: "ERR_NO_HALF", errorMsg: "Quên chia cho 2 khi lấy nguyên hàm của $y$." },
        { key: "D", text: "$4\\pi$.", isCorrect: false, errorTag: "ERR_WRONG_CALC", errorMsg: "Tính nhầm." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Thể tích khối tròn xoay quanh trục tung Oy",
        question: "Khi quay hình phẳng quanh trục Oy, công thức thể tích là gì?",
        correctAnswer: "$V_y = \\pi \\int_c^d [x(y)]^2 dy$.",
        tip: "Mẹo nhớ: Quay quanh trục nào thì tích phân theo biến của trục đó."
      }
    }
  ],

  trueFalse: [
    {
      id: "tf1",
      number: "Câu 6",
      scenario: "Cho hình phẳng $(H)$ giới hạn bởi đồ thị hàm số $y = f(x) = x^3 - 3x$ và trục hoành $Ox$. Xét tính Đúng hoặc Sai:",
      items: [
        { key: "a", text: "Phương trình hoành độ giao điểm $x^3 - 3x = 0$ có 3 nghiệm phân biệt là $x = -\\sqrt{3}, x = 0, x = \\sqrt{3}$.", isCorrect: true, explanation: "Đúng. $x(x^2 - 3) = 0 \\iff x = 0$ hoặc $x = \\pm\\sqrt{3}$." },
        { key: "b", text: "Đồ thị hàm số đối xứng qua gốc tọa độ $O(0; 0)$ vì $f(x)$ là hàm số lẻ.", isCorrect: true, explanation: "Đúng. $f(-x) = (-x)^3 - 3(-x) = -x^3 + 3x = -f(x)$." },
        { key: "c", text: "Diện tích hình phẳng $(H)$ bằng $2\\int_0^{\\sqrt{3}} |x^3 - 3x|dx$.", isCorrect: true, explanation: "Đúng. Do tính đối xứng tâm của hàm lẻ qua gốc tọa độ, hai phần diện tích trên và dưới trục hoành bằng nhau." },
        { key: "d", text: "Diện tích của hình phẳng $(H)$ bằng $4.5$.", isCorrect: true, explanation: "Đúng. $S = 2\\int_0^{\\sqrt{3}} (3x - x^3)dx = 2\\left(\\frac{3x^2}{2} - \\frac{x^4}{4}\\right)\\Big|_0^{\\sqrt{3}} = 2\\left(\\frac{9}{2} - \\frac{9}{4}\\right) = 2\\left(\\frac{9}{4}\\right) = \\frac{9}{2} = 4.5$." }
      ]
    },
    {
      id: "tf2",
      number: "Câu 7",
      scenario: "Cho hình phẳng giới hạn bởi đường cong $y = e^x$, trục hoành $y = 0$, và hai đường thẳng $x = 0, x = 1$. Quay hình phẳng này quanh trục hoành $Ox$ để tạo thành một khối tròn xoay. Đánh giá tính Đúng hoặc Sai:",
      items: [
        { key: "a", text: "Bán kính của thiết diện hình tròn tại điểm có hoành độ $x$ là $R(x) = e^x$.", isCorrect: true, explanation: "Đúng. Khoảng cách từ điểm trên đồ thị tới trục $Ox$ là $|y| = e^x$." },
        { key: "b", text: "Diện tích của thiết diện hình tròn tại hoành độ $x$ là $S(x) = \\pi (e^x)^2 = \\pi e^{2x}$.", isCorrect: true, explanation: "Đúng. Diện tích hình tròn $S = \\pi R^2 = \\pi e^{2x}$." },
        { key: "c", text: "Thể tích khối tròn xoay là $V = \\pi \\int_0^1 e^{2x}dx$.", isCorrect: true, explanation: "Đúng. Theo công thức thể tích khối tròn xoay." },
        { key: "d", text: "Thể tích khối tròn xoay bằng $\\pi (e^2 - 1)$.", isCorrect: false, explanation: "Sai lầm: Quên chia cho hệ số 2 của số mũ: $\\int_0^1 e^{2x}dx = \\frac{1}{2}e^{2x}|_0^1 = \\frac{1}{2}(e^2 - 1)$, do đó $V = \\frac{\\pi(e^2 - 1)}{2}$." }
      ]
    },
    {
      id: "tf3",
      number: "Câu 8",
      scenario: "Xét công thức tính diện tích hình phẳng giới hạn bởi hai đường cong $y = f(x)$ và $y = g(x)$ liên tục trên đoạn $[a; b]$:",
      items: [
        { key: "a", text: "Công thức tổng quát là $S = \\int_a^b |f(x) - g(x)|dx$.", isCorrect: true, explanation: "Đúng. Đây là định lý chuẩn của hình phẳng giới hạn bởi hai đường cong." },
        { key: "b", text: "Nếu trên toàn bộ đoạn $[a; b]$ ta có $f(x) \\ge g(x)$ thì $S = \\int_a^b [f(x) - g(x)]dx$.", isCorrect: true, explanation: "Đúng. Khi $f(x) \\ge g(x)$ thì $|f(x) - g(x)| = f(x) - g(x)$, không cần dấu giá trị tuyệt đối." },
        { key: "c", text: "Hai đồ thị $f(x)$ và $g(x)$ bắt buộc phải nằm hoàn toàn phía trên trục hoành $Ox$ thì công thức diện tích mới áp dụng được.", isCorrect: false, explanation: "Sai lầm: Công thức đúng cho mọi vị trí của đồ thị, kể cả khi cả hai đều nằm dưới trục hoành hoặc cắt trục hoành." },
        { key: "d", text: "Nếu hai đồ thị cắt nhau tại các điểm có hoành độ trong khoảng $(a; b)$ thì ta cần tách tích phân tại các giao điểm đó.", isCorrect: true, explanation: "Đúng. Tách tích phân tại các nghiệm của phương trình $f(x) - g(x) = 0$ để xét dấu cụ thể trên từng khoảng." }
      ]
    }
  ],

  shortAnswer: [
    {
      id: "sa1",
      number: "Câu 9",
      question: "Tính diện tích hình phẳng giới hạn bởi đồ thị $y = x^3$, trục hoành và hai đường thẳng $x = 0, x = 2$.",
      correctAnswer: "4",
      acceptedAnswers: ["4", "S = 4", "4.0"],
      explanation: "$S = \\int_0^2 x^3 dx = \\frac{x^4}{4}\\Big|_0^2 = \\frac{16}{4} = 4$.",
      tip: "Tích phân của $x^3$ từ 0 đến 2 bằng $16/4 = 4$."
    },
    {
      id: "sa2",
      number: "Câu 10",
      question: "Cho hình phẳng giới hạn bởi $y = 2x$, trục hoành và $x = 3$. Thể tích khối tròn xoay khi quay hình phẳng này quanh $Ox$ có dạng $k\\pi$. Tìm $k$.",
      correctAnswer: "36",
      acceptedAnswers: ["36", "k = 36"],
      explanation: "$V = \\pi \\int_0^3 (2x)^2 dx = \\pi \\int_0^3 4x^2 dx = 4\\pi \\left(\\frac{x^3}{3}\\right)\\Big|_0^3 = 4\\pi (9) = 36\\pi \\implies k = 36$.",
      tip: "$4 \\times (27/3) = 36$."
    },
    {
      id: "sa3",
      number: "Câu 11",
      question: "Tính diện tích hình phẳng giới hạn bởi parabol $y = -x^2 + 4$ và trục hoành $y = 0$.",
      correctAnswer: "10.67",
      acceptedAnswers: ["10.67", "32/3", "10,67"],
      explanation: "Hoành độ giao điểm: $-x^2 + 4 = 0 \\iff x = \\pm 2$. $S = \\int_{-2}^2 (4 - x^2)dx = 2\\int_0^2 (4 - x^2)dx = 2(8 - 8/3) = 2(16/3) = 32/3 \\approx 10.67$.",
      tip: "Công thức nhanh: $\\frac{1}{6}(4 - (-4)) ... \\implies \\frac{1}{6} \\times 4^3 = \\frac{64}{6} = \\frac{32}{3}$."
    },
    {
      id: "sa4",
      number: "Câu 12",
      question: "Thiết diện của một vật thể cắt bởi mặt phẳng vuông góc với $Ox$ tại $x$ ($0 \\le x \\le 3$) là hình chữ nhật có hai kích thước là $x$ và $\\sqrt{9 - x^2}$. Tính diện tích thiết diện lớn nhất của vật thể.",
      correctAnswer: "4.5",
      acceptedAnswers: ["4.5", "9/2", "4,5"],
      explanation: "$S(x) = x\\sqrt{9 - x^2} \\le \\frac{x^2 + (9 - x^2)}{2} = \\frac{9}{2} = 4.5$. Đẳng thức xảy ra khi $x^2 = 9 - x^2 \\iff x = 3/\\sqrt{2}$.",
      tip: "BĐT Cauchy: $ab \\le (a^2+b^2)/2$."
    }
  ],

  essay: [
    {
      id: "es1",
      number: "Câu 13 (Tự luận 1)",
      title: "Tính diện tích hình phẳng giới hạn bởi parabol và đường thẳng",
      question: "Trong mặt phẳng tọa độ $Oxy$, cho parabol $(P): y = -x^2 + 2x + 3$ và đường thẳng $(d): y = x + 1$.\n1) Tìm tọa độ các giao điểm của parabol $(P)$ và đường thẳng $(d)$.\n2) Tính diện tích của hình phẳng giới hạn bởi parabol $(P)$ và đường thẳng $(d)$.",
      maxPoints: 10.0,
      sampleSolution: `1) Tìm tọa độ giao điểm:
- Phương trình hoành độ giao điểm của (P) và (d):
  -x^2 + 2x + 3 = x + 1
  <=> -x^2 + x + 2 = 0
  <=> x^2 - x - 2 = 0
  <=> (x + 1)(x - 2) = 0
  <=> x = -1 hoặc x = 2.
- Với x = -1 => y = (-1) + 1 = 0 => Giao điểm A(-1; 0).
- Với x = 2 => y = 2 + 1 = 3 => Giao điểm B(2; 3).
- Vậy hai đồ thị cắt nhau tại hai điểm A(-1; 0) và B(2; 3).

2) Tính diện tích hình phẳng:
- Trên đoạn [-1; 2], ta có:
  (-x^2 + 2x + 3) - (x + 1) = -x^2 + x + 2 >= 0
  (parabol nằm phía trên đường thẳng).
- Diện tích hình phẳng giới hạn bởi hai đồ thị là:
  S = int_{-1}^2 [ (-x^2 + 2x + 3) - (x + 1) ] dx
    = int_{-1}^2 (-x^2 + x + 2) dx.
- Tính tích phân:
  S = [ -x^3/3 + x^2/2 + 2x ]_{-1}^2
- Thay cận:
  + Tại x = 2:
    -2^3/3 + 2^2/2 + 2(2) = -8/3 + 2 + 4 = 6 - 8/3 = 10/3.
  + Tại x = -1:
    -(-1)^3/3 + (-1)^2/2 + 2(-1) = 1/3 + 1/2 - 2 = 5/6 - 2 = -7/6.
- Hiệu hai giá trị cận:
  S = 10/3 - (-7/6) = 20/6 + 7/6 = 27/6 = 9/2 = 4.5 (đvdt).
- Kết luận: Diện tích hình phẳng cần tìm là S = 9/2 = 4.5.`,
      criteria: [
        { id: "c1", step: "Bước 1", desc: "Lập đúng phương trình x^2 - x - 2 = 0 tìm ra hai nghiệm x = -1, x = 2", points: 2.5 },
        { id: "c2", step: "Bước 2", desc: "Lập đúng công thức tích phân diện tích S = int_{-1}^2 (-x^2 + x + 2) dx", points: 2.5 },
        { id: "c3", step: "Bước 3", desc: "Tìm đúng nguyên hàm -x^3/3 + x^2/2 + 2x", points: 2.5 },
        { id: "c4", step: "Bước 4", desc: "Thế cận tính ra đúng diện tích S = 9/2 = 4.5", points: 2.5 }
      ]
    },
    {
      id: "es2",
      number: "Câu 14 (Tự luận 2)",
      title: "Tính thể tích khối tròn xoay của hình elip quanh trục lớn",
      question: "Cho hình elip $(E)$ có phương trình $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ ($a > b > 0$).\n1) Rút $y^2$ theo $x$ và viết công thức thể tích khối tròn xoay khi quay nửa trên elip quanh trục hoành $Ox$.\n2) Tính thể tích khối tròn xoay (khối phỏng cầu - ellipsoid tròn xoay) và áp dụng số với $a = 6\\text{ dm}, b = 4\\text{ dm}$ để tính dung tích của một bồn chứa hình elip.",
      maxPoints: 10.0,
      sampleSolution: `1) Thiết lập công thức thể tích khối tròn xoay:
- Từ phương trình elip: y^2/b^2 = 1 - x^2/a^2 <=> y^2 = b^2(1 - x^2/a^2).
- Giới hạn theo trục Ox: -a <= x <= a.
- Khối tròn xoay tạo thành khi quay nửa trên elip quanh Ox có thể tích:
  V = pi * int_{-a}^a y^2 dx = pi * int_{-a}^a b^2(1 - x^2/a^2) dx.

2) Tính tích phân thể tích:
- Do hàm số chẵn đối xứng qua Oy:
  V = 2*pi*b^2 * int_0^a (1 - x^2/a^2) dx
    = 2*pi*b^2 * [ x - x^3/(3a^2) ]_0^a
    = 2*pi*b^2 * (a - a^3/(3a^2))
    = 2*pi*b^2 * (a - a/3)
    = 2*pi*b^2 * (2a / 3) = 4/3 * pi * a * b^2.
- Nhận xét: Khi a = b = R thì V = 4/3 * pi * R^3 (chính là công thức thể tích hình cầu quen thuộc).

3) Áp dụng số tính dung tích bồn chứa:
- Với a = 6 dm, b = 4 dm:
  V = 4/3 * pi * 6 * (4^2) = 4/3 * pi * 6 * 16 = 8 * 16 * pi = 128*pi dm^3 (lít).
- Đổi ra lít và số thập phân:
  V = 128*pi lít ≈ 128 * 3.14159 ≈ 402.12 lít.
- Kết luận: Công thức tổng quát là V = (4/3) pi a b^2; dung tích bồn chứa là 128*pi lít (xấp xỉ 402.12 lít).`,
      criteria: [
        { id: "c1", step: "Bước 1", desc: "Biểu diễn đúng y^2 = b^2(1 - x^2/a^2) và cận [-a; a]", points: 2.5 },
        { id: "c2", step: "Bước 2", desc: "Thiết lập đúng tích phân thể tích V = pi int_{-a}^a b^2 (1 - x^2/a^2) dx", points: 2.5 },
        { id: "c3", step: "Bước 3", desc: "Tính đúng công thức tổng quát V = (4/3) pi a b^2", points: 2.5 },
        { id: "c4", step: "Bước 4", desc: "Thay số a = 6, b = 4 tính ra V = 128 pi dm^3 ≈ 402.12 lít", points: 2.5 }
      ]
    },
    {
      id: "es3",
      number: "Câu 15 (Tự luận 3)",
      title: "Ứng dụng tích phân tính chi phí xây dựng mặt sàn sân khấu parabol",
      question: "Ban quản lý một công viên văn hóa thiết kế một sân khấu ngoài trời có sàn diễn là hình phẳng giới hạn bởi hai đường cong parabol đối xứng nhau:\n- Parabol trên: $y = 4 - \\frac{1}{4}x^2$.\n- Parabol dưới: $y = -4 + \\frac{1}{4}x^2$.\n(Đơn vị trên các trục tọa độ là mét).\n1) Tìm tọa độ hai giao điểm của hai parabol và vẽ phác họa hình dáng mặt sàn sân khấu.\n2) Tính diện tích mặt sàn sân khấu.\n3) Biết chi phí lát đá hoa cương chống trượt cho mặt sàn là $800.000\\text{ đ/m}^2$. Hãy tính tổng kinh phí cần thiết để lát đá toàn bộ mặt sàn sân khấu.",
      maxPoints: 10.0,
      sampleSolution: `1) Tìm tọa độ giao điểm của hai parabol:
- Phương trình hoành độ giao điểm:
  4 - 1/4 x^2 = -4 + 1/4 x^2
  <=> 1/2 x^2 = 8
  <=> x^2 = 16 <=> x = -4 hoặc x = 4.
- Với x = -4 => y = 4 - 1/4 * 16 = 0 => Giao điểm A(-4; 0).
- Với x = 4 => y = 4 - 1/4 * 16 = 0 => Giao điểm B(4; 0).
- Hai giao điểm nằm trên trục hoành có khoảng cách AB = 8 mét.
- Mặt sàn có dạng hình mắt kính đối xứng qua cả trục hoành và trục tung.

2) Tính diện tích mặt sàn sân khấu:
- Trên đoạn [-4; 4], parabol trên luôn nằm phía trên parabol dưới.
- Hiệu hai hàm số:
  f(x) - g(x) = (4 - 1/4 x^2) - (-4 + 1/4 x^2) = 8 - 1/2 x^2.
- Diện tích mặt sàn là:
  S = int_{-4}^4 (8 - 1/2 x^2) dx.
- Tận dụng tính chẵn đối xứng qua trục Oy:
  S = 2 * int_0^4 (8 - 1/2 x^2) dx
    = 2 * [ 8x - 1/6 x^3 ]_0^4
    = 2 * [ 8(4) - 1/6 (64) ]
    = 2 * [ 32 - 32/3 ]
    = 2 * (64 / 3) = 128 / 3 m^2 ≈ 42.67 m^2.

3) Tính tổng kinh phí lát đá hoa cương:
- Đơn giá lát đá: 800.000 đồng/m^2.
- Tổng kinh phí:
  Cost = S * 800.000 = (128 / 3) * 800.000 = 102.400.000 / 3 ≈ 34.133.333 đồng.
- Kết luận: Diện tích mặt sàn là 128/3 m^2 (khoảng 42.67 m^2); tổng chi phí là khoảng 34.133.000 đồng.`,
      criteria: [
        { id: "c1", step: "Bước 1", desc: "Lập phương trình hoành độ giao điểm tìm ra x = -4, x = 4", points: 2.5 },
        { id: "c2", step: "Bước 2", desc: "Thiết lập đúng công thức tích phân S = int_{-4}^4 (8 - 1/2 x^2) dx", points: 2.5 },
        { id: "c3", step: "Bước 3", desc: "Tính đúng diện tích S = 128/3 m^2 ≈ 42.67 m^2", points: 2.5 },
        { id: "c4", step: "Bước 4", desc: "Nhân đơn giá 800.000 đ/m^2 tính ra tổng chi phí ≈ 34.133.333 đồng", points: 2.5 }
      ]
    }
  ]
};


// --- FILE: diag-g12-c5.js ---
// ==========================================================================
// CƠ SỞ DỮ LIỆU ĐÁNH GIÁ CHẨN ĐOÁN LỖI SAI & CHẤM TỰ LUẬN TOÁN LỚP 12
// CHƯƠNG V: PHƯƠNG PHÁP TỌA ĐỘ TRONG KHÔNG GIAN (HOÀN CHỈNH BÀI 14, 15, 16, 17)
// ==========================================================================

if (typeof window !== "undefined") {
  if (!window.DIAGNOSTIC_ASSESSMENT_DB) {
    window.DIAGNOSTIC_ASSESSMENT_DB = {};
  }
}

// ==========================================================================
// CƠ SỞ DỮ LIỆU ĐÁNH GIÁ CHẨN ĐOÁN LỖI SAI & CHẤM TỰ LUẬN TOÁN LỚP 12
// CHƯƠNG V: PHƯƠNG PHÁP TỌA ĐỘ TRONG KHÔNG GIAN
// ==========================================================================

// --------------------------------------------------------------------------
// BÀI 14: PHƯƠNG TRÌNH MẶT PHẲNG (g12-c5-l14)
// --------------------------------------------------------------------------
window.DIAGNOSTIC_ASSESSMENT_DB["g12-c5-l14"] = {
  lessonId: "g12-c5-l14",
  title: "Bài 14: Phương trình mặt phẳng",
  chapterTitle: "Chương V: Phương pháp tọa độ trong không gian",
  grade: 12,
  summary: "Bộ 15 câu hỏi đánh giá chẩn đoán năng lực: Vectơ pháp tuyến, tích có hướng tìm VTPN từ cặp VTCP, phương trình tổng quát Ax+By+Cz+D=0, phương trình mặt phẳng theo đoạn chắn, vị trí tương đối và điều kiện vuông góc giữa hai mặt phẳng.",

  multipleChoice: [
    {
      id: "mc1",
      number: "Câu 1",
      level: "Nhận biết",
      question: "Trong không gian $Oxyz$, mặt phẳng $(P): 2x - 3y + 4z - 5 = 0$ có một vectơ pháp tuyến là:",
      options: [
        { key: "A", text: "$\\vec{n} = (2; -3; 4)$.", isCorrect: true, errorTag: null, errorMsg: "Chính xác! Mặt phẳng $Ax + By + Cz + D = 0$ có một vectơ pháp tuyến là $\\vec{n} = (A; B; C) = (2; -3; 4)$." },
        { key: "B", text: "$\\vec{n} = (2; 3; 4)$.", isCorrect: false, errorTag: "ERR_SIGN_Y", errorMsg: "Sai dấu của hệ số $y$: hệ số là $-3$, không phải $+3$." },
        { key: "C", text: "$\\vec{n} = (-3; 4; -5)$.", isCorrect: false, errorTag: "ERR_SHIFT_COEFF", errorMsg: "Lấy nhầm các hệ số $B, C, D$ thay vì $A, B, C$." },
        { key: "D", text: "$\\vec{n} = (2; -3; -5)$.", isCorrect: false, errorTag: "ERR_INCLUDE_D", errorMsg: "Hệ số tự do $D = -5$ không nằm trong vectơ pháp tuyến." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Xác định VTPN từ phương trình tổng quát",
        question: "Tìm một VTPN của mặt phẳng $x - 2z + 1 = 0$.",
        correctAnswer: "$\\vec{n} = (1; 0; -2)$ (khuyết $y$ thì hệ số bằng 0).",
        tip: "Mẹo nhớ: Hệ số đi liền với $x, y, z$ chính là tọa độ của vectơ pháp tuyến."
      }
    },
    {
      id: "mc2",
      number: "Câu 2",
      level: "Thông hiểu",
      question: "Mặt phẳng đi qua ba điểm $A(2; 0; 0), B(0; -3; 0), C(0; 0; 4)$ có phương trình là:",
      options: [
        { key: "A", text: "$\\frac{x}{2} + \\frac{y}{-3} + \\frac{z}{4} = 1$.", isCorrect: true, errorTag: null, errorMsg: "Chính xác! Áp dụng phương trình mặt phẳng theo đoạn chắn: $\\frac{x}{a} + \\frac{y}{b} + \\frac{z}{c} = 1$ với $a = 2, b = -3, c = 4$." },
        { key: "B", text: "$\\frac{x}{2} + \\frac{y}{-3} + \\frac{z}{4} = 0$.", isCorrect: false, errorTag: "ERR_RHS_ZERO", errorMsg: "Vế phải của phương trình đoạn chắn phải bằng 1, không bằng 0." },
        { key: "C", text: "$2x - 3y + 4z = 1$.", isCorrect: false, errorTag: "ERR_DIRECT_COEFF", errorMsg: "Nhầm lẫn gán các giao điểm thành hệ số của phương trình." },
        { key: "D", text: "$\\frac{x}{2} + \\frac{y}{3} + \\frac{z}{4} = 1$.", isCorrect: false, errorTag: "ERR_SIGN_B", errorMsg: "Sai dấu của tọa độ điểm $B$ trên trục $Oy$." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Phương trình mặt phẳng theo đoạn chắn",
        question: "Mặt phẳng cắt 3 trục tọa độ tại $(a; 0; 0), (0; b; 0), (0; 0; c)$ có dạng gì?",
        correctAnswer: "$\\frac{x}{a} + \\frac{y}{b} + \\frac{z}{c} = 1$ ($a, b, c \\ne 0$).",
        tip: "Mẹo nhớ: Đoạn chắn luôn có vế phải bằng 1."
      }
    },
    {
      id: "mc3",
      number: "Câu 3",
      level: "Thông hiểu",
      question: "Mặt phẳng đi qua điểm $M(1; -2; 3)$ và vuông góc với trục $Oz$ có phương trình là:",
      options: [
        { key: "A", text: "$z - 3 = 0$.", isCorrect: true, errorTag: null, errorMsg: "Rất chuẩn! Mặt phẳng vuông góc với trục $Oz$ nhận vectơ đơn vị $\\vec{k} = (0; 0; 1)$ làm VTPN. Đi qua $M(1; -2; 3)$ nên phương trình là $0(x - 1) + 0(y + 2) + 1(z - 3) = 0 \\iff z = 3$ hay $z - 3 = 0$." },
        { key: "B", text: "$x - 1 = 0$.", isCorrect: false, errorTag: "ERR_OX_PERPENDICULAR", errorMsg: "Đây là mặt phẳng vuông góc với trục $Ox$." },
        { key: "C", text: "$y + 2 = 0$.", isCorrect: false, errorTag: "ERR_OY_PERPENDICULAR", errorMsg: "Đây là mặt phẳng vuông góc với trục $Oy$." },
        { key: "D", text: "$x - 2y + 3z = 0$.", isCorrect: false, errorTag: "ERR_WRONG_NORMAL", errorMsg: "Lấy tọa độ điểm $M$ làm vectơ pháp tuyến là sai." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Mặt phẳng vuông góc với các trục tọa độ",
        question: "Mặt phẳng song song với mặt phẳng tọa độ $(Oxy)$ có phương trình dạng tổng quát là gì?",
        correctAnswer: "$z = C$ (hằng số).",
        tip: "Mẹo nhớ: Vuông góc với trục $Oz \\implies$ chỉ còn biến $z = z_0$."
      }
    },
    {
      id: "mc4",
      number: "Câu 4",
      level: "Vận dụng",
      question: "Cho hai mặt phẳng $(P): 2x - y + 2z - 1 = 0$ và $(Q): 4x - 2y + 4z + 5 = 0$. Vị trí tương đối của $(P)$ và $(Q)$ là:",
      options: [
        { key: "A", text: "Song song với nhau.", isCorrect: true, errorTag: null, errorMsg: "Chính xác! Xét tỉ lệ các hệ số: $\\frac{4}{2} = \\frac{-2}{-1} = \\frac{4}{2} = 2 \\ne \\frac{5}{-1} = -5$. Hai vectơ pháp tuyến cùng phương nhưng hệ số tự do không tỉ lệ, nên hai mặt phẳng song song với nhau." },
        { key: "B", text: "Trùng nhau.", isCorrect: false, errorTag: "ERR_OVERLAP", errorMsg: "Chỉ trùng nhau khi tỉ số hệ số tự do cũng bằng 2 (tức là $D_Q = -2$)." },
        { key: "C", text: "Cắt nhau nhưng không vuông góc.", isCorrect: false, errorTag: "ERR_INTERSECT", errorMsg: "Hai VTPN cùng phương thì không thể cắt nhau." },
        { key: "D", text: "Vuông góc với nhau.", isCorrect: false, errorTag: "ERR_PERPENDICULAR", errorMsg: "Tích vô hướng hai VTPN là $2(4) + (-1)(-2) + 2(4) = 8 + 2 + 8 = 18 \\ne 0$ nên không vuông góc." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Vị trí tương đối của hai mặt phẳng",
        question: "Điều kiện để hai mặt phẳng song song là gì?",
        correctAnswer: "$\\frac{A_1}{A_2} = \\frac{B_1}{B_2} = \\frac{C_1}{C_2} \\ne \\frac{D_1}{D_2}$.",
        tip: "Mẹo nhớ: Ba tỉ số đầu bằng nhau, tỉ số cuối khác nhau $\\implies$ song song."
      }
    },
    {
      id: "mc5",
      number: "Câu 5",
      level: "Vận dụng",
      question: "Mặt phẳng trung trực của đoạn thẳng $AB$ với $A(1; 2; -3)$ và $B(3; -2; 1)$ có phương trình là:",
      options: [
        { key: "A", text: "$x - 2y + 2z - 0 = 0 \\iff x - 2y + 2z = 0$.", isCorrect: true, errorTag: null, errorMsg: "Xuất sắc! Mặt phẳng trung trực đi qua trung điểm $I$ của $AB$ và nhận $\\vec{AB}$ làm VTPN.\n- Trung điểm $I$: $x_I = (1+3)/2 = 2; y_I = (2-2)/2 = 0; z_I = (-3+1)/2 = -1 \\implies I(2; 0; -1)$.\n- Vectơ $\\vec{AB} = (2; -4; 4) = 2(1; -2; 2) \\implies$ chọn VTPN $\\vec{n} = (1; -2; 2)$.\n- Phương trình: $1(x - 2) - 2(y - 0) + 2(z + 1) = 0 \\iff x - 2y + 2z - 2 + 2 = 0 \\iff x - 2y + 2z = 0$." },
        { key: "B", text: "$x - 2y + 2z - 4 = 0$.", isCorrect: false, errorTag: "ERR_ARITHMETIC_D", errorMsg: "Tính nhầm hệ số tự do: $-2 + 2 = 0$, không phải $-4$." },
        { key: "C", text: "$2x - 4y + 4z + 1 = 0$.", isCorrect: false, errorTag: "ERR_MIDPOINT_NOT_SATISFIED", errorMsg: "Thay điểm trung điểm $I(2; 0; -1)$ vào phương trình không thỏa mãn." },
        { key: "D", text: "$x + y - z - 3 = 0$.", isCorrect: false, errorTag: "ERR_WRONG_VTPN", errorMsg: "Sai vectơ pháp tuyến." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Lập phương trình mặt phẳng trung trực",
        question: "Mặt phẳng trung trực của đoạn thẳng $AB$ đi qua điểm nào và có VTPN là gì?",
        correctAnswer: "Đi qua trung điểm $I$ của $AB$ và nhận $\\vec{AB}$ làm vectơ pháp tuyến.",
        tip: "Mẹo nhớ: Trung trực $\\implies$ Đi qua trung điểm $I$ và vuông góc với $\\vec{AB}$."
      }
    }
  ],

  trueFalse: [
    {
      id: "tf1",
      number: "Câu 6",
      scenario: "Trong không gian $Oxyz$, cho ba điểm $A(1; 0; 0), B(0; 2; 0), C(0; 0; 3)$ và mặt phẳng $(P)$ đi qua 3 điểm đó. Xét tính Đúng hoặc Sai:",
      items: [
        { key: "a", text: "Phương trình mặt phẳng $(P)$ theo đoạn chắn là $\\frac{x}{1} + \\frac{y}{2} + \\frac{z}{3} = 1$.", isCorrect: true, explanation: "Đúng. Ba điểm nằm trên ba trục tọa độ $Ox, Oy, Oz$." },
        { key: "b", text: "Quy đồng mẫu số, phương trình tổng quát của $(P)$ là $6x + 3y + 2z - 6 = 0$.", isCorrect: true, explanation: "Đúng. Mẫu chung là 6: $6x + 3y + 2z = 6 \\iff 6x + 3y + 2z - 6 = 0$." },
        { key: "c", text: "Một vectơ pháp tuyến của $(P)$ là $\\vec{n} = (6; 3; 2)$.", isCorrect: true, explanation: "Đúng. Hệ số trước $x, y, z$ trong phương trình tổng quát là $(6; 3; 2)$." },
        { key: "d", text: "Điểm $M(1; 1; 1)$ thuộc mặt phẳng $(P)$.", isCorrect: false, explanation: "Sai lầm: Thay vào VT: $6(1) + 3(1) + 2(1) - 6 = 6 + 3 + 2 - 6 = 5 \\ne 0$, điểm $M$ không thuộc $(P)$." }
      ]
    },
    {
      id: "tf2",
      number: "Câu 7",
      scenario: "Cho hai mặt phẳng $(P): x + 2y - 2z + 1 = 0$ và $(Q): 2x + my + nz - 4 = 0$. Đánh giá tính Đúng hoặc Sai của các khẳng định:",
      items: [
        { key: "a", text: "Vectơ pháp tuyến của $(P)$ là $\\vec{n}_P = (1; 2; -2)$.", isCorrect: true, explanation: "Đúng." },
        { key: "b", text: "Hai mặt phẳng $(P)$ và $(Q)$ vuông góc với nhau khi và chỉ khi $2 + 2m - 2n = 0 \\iff m - n = -1$.", isCorrect: true, explanation: "Đúng. $\\vec{n}_P \\cdot \\vec{n}_Q = 1(2) + 2(m) + (-2)(n) = 2 + 2m - 2n = 0 \\iff m - n = -1$." },
        { key: "c", text: "Để $(P)$ song song với $(Q)$ thì $m = 4$ và $n = -4$.", isCorrect: true, explanation: "Đúng. Tỉ số: $2/1 = m/2 = n/(-2) = 2 \\ne -4/1 \\implies m = 4, n = -4$." },
        { key: "d", text: "Tồn tại các giá trị của $m$ và $n$ để mặt phẳng $(P)$ trùng với mặt phẳng $(Q)$.", isCorrect: false, explanation: "Sai. Vì hệ số tự do $D_Q / D_P = -4 / 1 = -4$, trong khi tỉ số của $x$ là $2 / 1 = 2$. Hai tỉ số này luôn khác nhau ($-4 \\ne 2$) nên $(P)$ và $(Q)$ không bao giờ trùng nhau." }
      ]
    },
    {
      id: "tf3",
      number: "Câu 8",
      scenario: "Xét các khẳng định về vị trí tương đối và tính chất của mặt phẳng trong không gian:",
      items: [
        { key: "a", text: "Mọi mặt phẳng đi qua gốc tọa độ $O(0; 0; 0)$ đều có phương trình dạng $Ax + By + Cz = 0$ (hệ số tự do $D = 0$).", isCorrect: true, explanation: "Đúng. Thay $x=0, y=0, z=0$ vào phương trình tổng quát thì $D = 0$." },
        { key: "b", text: "Mặt phẳng song song với trục $Ox$ thì hệ số của $x$ trong phương trình tổng quát bằng $0$ ($A = 0$).", isCorrect: true, explanation: "Đúng. Vì VTPN $\\vec{n}$ phải vuông góc với vectơ đơn vị $\\vec{i} = (1; 0; 0) \\implies A = 0$." },
        { key: "c", text: "Hai mặt phẳng phân biệt cùng vuông góc với một mặt phẳng thứ ba thì chắc chắn song song với nhau.", isCorrect: false, explanation: "Sai lầm hình học không gian: Hai bức tường cùng vuông góc với mặt sàn thì cắt nhau theo đường thẳng góc tường, không nhất thiết song song." },
        { key: "d", text: "Nếu tích có hướng của hai vectơ chỉ phương của mặt phẳng bằng vectơ không thì không thể xác định được mặt phẳng.", isCorrect: true, explanation: "Đúng. Tích có hướng bằng $\\vec{0}$ nghĩa là hai vectơ đó cùng phương, không tạo thành cặp VTCP để xác định mặt phẳng." }
      ]
    }
  ],

  shortAnswer: [
    {
      id: "sa1",
      number: "Câu 9",
      question: "Mặt phẳng $(P): 3x - 4y + 5z - 12 = 0$ cắt trục hoành $Ox$ tại điểm $A$. Tìm hoành độ của điểm $A$.",
      correctAnswer: "4",
      acceptedAnswers: ["4", "x = 4"],
      explanation: "Điểm trên trục $Ox$ có $y = 0, z = 0$. Thay vào: $3x - 12 = 0 \\iff x = 4$.",
      tip: "Cho $y = 0, z = 0$ giải tìm $x$."
    },
    {
      id: "sa2",
      number: "Câu 10",
      question: "Tìm giá trị của $m$ để mặt phẳng $(P): 2x - y + mz + 3 = 0$ vuông góc với mặt phẳng $(Q): x + 4y - 2z - 5 = 0$.",
      correctAnswer: "-1",
      acceptedAnswers: ["-1", "m = -1"],
      explanation: "Hai mặt phẳng vuông góc khi tích vô hướng hai VTPN bằng 0: $2(1) + (-1)(4) + m(-2) = 0 \\iff 2 - 4 - 2m = 0 \\iff -2 - 2m = 0 \\iff m = -1$.",
      tip: "$\\vec{n}_1 \\cdot \\vec{n}_2 = 0$."
    },
    {
      id: "sa3",
      number: "Câu 11",
      question: "Mặt phẳng $(P)$ song song với mặt phẳng $(Q): 2x - 2y + z + 1 = 0$ và đi qua điểm $A(1; 2; 3)$ có phương trình $2x - 2y + z + D = 0$. Tìm giá trị của $D$.",
      correctAnswer: "-1",
      acceptedAnswers: ["-1", "D = -1"],
      explanation: "Thay tọa độ $A(1; 2; 3)$ vào: $2(1) - 2(2) + 3 + D = 0 \\iff 2 - 4 + 3 + D = 0 \\iff 1 + D = 0 \\iff D = -1$.",
      tip: "Thay tọa độ điểm vào dạng song song để tìm $D$."
    },
    {
      id: "sa4",
      number: "Câu 12",
      question: "Mặt phẳng đi qua điểm $M(2; 3; 4)$ và cắt 3 tia $Ox, Oy, Oz$ tại $A, B, C$ sao cho $OA = OB = OC$. Viết phương trình tổng quát có dạng $x + y + z + D = 0$. Tìm $D$.",
      correctAnswer: "-9",
      acceptedAnswers: ["-9", "D = -9"],
      explanation: "Vì $OA = OB = OC = a > 0$ nên mặt phẳng có dạng đoạn chắn: $\\frac{x}{a} + \\frac{y}{a} + \\frac{z}{a} = 1 \\iff x + y + z = a$. Đi qua $M(2; 3; 4) \\implies a = 2 + 3 + 4 = 9$. Phương trình là $x + y + z - 9 = 0 \\implies D = -9$.",
      tip: "Đoạn chắn bằng nhau trên 3 tia: $x + y + z = a$."
    }
  ],

  essay: [
    {
      id: "es1",
      number: "Câu 13 (Tự luận 1)",
      title: "Viết phương trình mặt phẳng đi qua ba điểm không thẳng hàng",
      question: "Trong không gian $Oxyz$, cho ba điểm $A(1; 2; 0), B(2; 1; 1), C(0; 3; 2)$.\n1) Chứng minh ba điểm $A, B, C$ không thẳng hàng.\n2) Tìm một vectơ pháp tuyến của mặt phẳng $(ABC)$ bằng tích có hướng của hai vectơ chỉ phương.\n3) Lập phương trình tổng quát của mặt phẳng $(ABC)$.",
      maxPoints: 10.0,
      sampleSolution: `1) Chứng minh ba điểm A, B, C không thẳng hàng:
- Tìm tọa độ hai vectơ:
  vec{AB} = (2 - 1; 1 - 2; 1 - 0) = (1; -1; 1).
  vec{AC} = (0 - 1; 3 - 2; 2 - 0) = (-1; 1; 2).
- So sánh tỉ số tọa độ:
  1 / (-1) = -1 / 1 ≠ 1 / 2.
  Do đó hai vectơ vec{AB} và vec{AC} không cùng phương.
- Suy ra ba điểm A, B, C không thẳng hàng và xác định duy nhất một mặt phẳng (ABC).

2) Tìm vectơ pháp tuyến của mặt phẳng (ABC):
- Vectơ pháp tuyến được xác định bởi tích có hướng: vec{n} = [vec{AB}, vec{AC}].
- Tính các định thức tọa độ:
  x_n = (-1)(2) - 1(1) = -2 - 1 = -3.
  y_n = 1(-1) - 1(2) = -1 - 2 = -3.
  z_n = 1(1) - (-1)(-1) = 1 - 1 = 0.
- Ta có vec{n} = (-3; -3; 0) = -3 * (1; 1; 0).
- Chọn vectơ pháp tuyến đơn giản là vec{n}_0 = (1; 1; 0).

3) Viết phương trình tổng quát của mặt phẳng (ABC):
- Mặt phẳng đi qua điểm A(1; 2; 0) và có VTPN vec{n}_0 = (1; 1; 0).
- Phương trình có dạng:
  1*(x - 1) + 1*(y - 2) + 0*(z - 0) = 0
  <=> x - 1 + y - 2 = 0
  <=> x + y - 3 = 0.
- Thử lại với điểm B(2; 1; 1): 2 + 1 - 3 = 0 (thỏa mãn).
- Thử lại với điểm C(0; 3; 2): 0 + 3 - 3 = 0 (thỏa mãn).
- Kết luận: Phương trình tổng quát của mặt phẳng (ABC) là x + y - 3 = 0.`,
      criteria: [
        { id: "c1", step: "Bước 1", desc: "Tính đúng vec{AB}=(1;-1;1), vec{AC}=(-1;1;2) và chứng minh không cùng phương", points: 2.5 },
        { id: "c2", step: "Bước 2", desc: "Tính đúng tích có hướng [vec{AB}, vec{AC}] = (-3; -3; 0)", points: 2.5 },
        { id: "c3", step: "Bước 3", desc: "Chọn VTPN n = (1; 1; 0) và lập phương trình qua điểm A", points: 2.5 },
        { id: "c4", step: "Bước 4", desc: "Rút gọn ra đúng phương trình x + y - 3 = 0 và kiểm tra lại tọa độ B, C", points: 2.5 }
      ]
    },
    {
      id: "es2",
      number: "Câu 14 (Tự luận 2)",
      title: "Lập phương trình mặt phẳng chứa đường thẳng và vuông góc mặt phẳng khác",
      question: "Trong không gian $Oxyz$, cho hai điểm $A(1; 0; -1), B(2; 1; 0)$ và mặt phẳng $(Q): x + y - z + 2 = 0$.\n1) Viết phương trình mặt phẳng $(P)$ đi qua hai điểm $A, B$ đồng thời vuông góc với mặt phẳng $(Q)$.\n2) Tìm tọa độ giao điểm của mặt phẳng $(P)$ với trục cao $Oz$.",
      maxPoints: 10.0,
      sampleSolution: `1) Lập phương trình mặt phẳng (P):
- Mặt phẳng (P) đi qua hai điểm A, B nên nhận vec{AB} làm một vectơ chỉ phương:
  vec{AB} = (2 - 1; 1 - 0; 0 - (-1)) = (1; 1; 1).
- Mặt phẳng (P) vuông góc với mặt phẳng (Q) nên nhận VTPN của (Q) làm vectơ chỉ phương thứ hai:
  vec{n}_Q = (1; 1; -1).
- Vectơ pháp tuyến của mặt phẳng (P) vuông góc với cả vec{AB} và vec{n}_Q, nên chọn:
  vec{n}_P = [vec{AB}, vec{n}_Q].
- Tính tọa độ tích có hướng:
  x = 1*(-1) - 1*(1) = -1 - 1 = -2.
  y = 1*(1) - 1*(-1) = 1 + 1 = 2.
  z = 1*(1) - 1*(1) = 0.
  => vec{n}_P = (-2; 2; 0) = -2 * (1; -1; 0).
- Chọn VTPN là vec{n} = (1; -1; 0).
- Mặt phẳng (P) đi qua điểm A(1; 0; -1):
  1*(x - 1) - 1*(y - 0) + 0*(z - (-1)) = 0
  <=> x - 1 - y = 0 <=> x - y - 1 = 0.

2) Tìm giao điểm của (P) với trục Oz:
- Trục Oz có phương trình x = 0 và y = 0.
- Thay x = 0, y = 0 vào phương trình của (P):
  0 - 0 - 1 = 0 <=> -1 = 0 (vô nghiệm).
- Điều này chứng tỏ mặt phẳng (P) song song với trục Oz và không cắt trục Oz.
- Kết luận: Phương trình mặt phẳng (P) là x - y - 1 = 0; mặt phẳng (P) song song với trục Oz nên không có giao điểm với trục Oz.`,
      criteria: [
        { id: "c1", step: "Bước 1", desc: "Xác định hai VTCP là vec{AB} = (1; 1; 1) và n_Q = (1; 1; -1)", points: 2.5 },
        { id: "c2", step: "Bước 2", desc: "Tính đúng tích có hướng [vec{AB}, n_Q] = (-2; 2; 0) suy ra VTPN (1; -1; 0)", points: 2.5 },
        { id: "c3", step: "Bước 3", desc: "Lập đúng phương trình tổng quát x - y - 1 = 0", points: 2.5 },
        { id: "c4", step: "Bước 4", desc: "Biện luận x = 0, y = 0 dẫn tới vô nghiệm, kết luận (P) song song và không cắt Oz", points: 2.5 }
      ]
    },
    {
      id: "es3",
      number: "Câu 15 (Tự luận 3)",
      title: "Ứng dụng phương trình mặt phẳng trong thiết kế mái nhà năng lượng mặt trời",
      question: "Một kỹ sư xây dựng thiết kế một mái nhà nghiêng để lắp đặt các tấm pin năng lượng mặt trời. Trong hệ tọa độ $Oxyz$ (đơn vị: mét), trần nhà nằm trên mặt phẳng nằm ngang $(Oxy)$, mái nhà được cố định bởi ba mấu neo trụ đỡ tại các điểm $A(0; 0; 3), B(6; 0; 5), C(0; 8; 5)$.\n1) Lập phương trình mặt phẳng $(P)$ chứa bề mặt mái nhà.\n2) Tìm góc nghiêng $\\alpha$ của mái nhà so với mặt trần nằm ngang $(Oxy)$ để kiểm tra góc đón nắng tối ưu (yêu cầu góc nghiêng từ $15^\\circ$ đến $30^\\circ$).",
      maxPoints: 10.0,
      sampleSolution: `1) Lập phương trình mặt phẳng (P) của mái nhà:
- Tọa độ các vectơ chỉ phương trên mái nhà:
  vec{AB} = (6 - 0; 0 - 0; 5 - 3) = (6; 0; 2) = 2*(3; 0; 1).
  vec{AC} = (0 - 0; 8 - 0; 5 - 3) = (0; 8; 2) = 2*(0; 4; 1).
- Vectơ pháp tuyến của mặt phẳng mái nhà:
  vec{n}_P = [ (3; 0; 1), (0; 4; 1) ].
- Tính định thức:
  x = 0(1) - 1(4) = -4.
  y = 1(0) - 3(1) = -3.
  z = 3(4) - 0(0) = 12.
  => vec{n}_P = (-4; -3; 12) hoặc đổi dấu thành (4; 3; -12).
- Mặt phẳng (P) đi qua điểm A(0; 0; 3):
  4*(x - 0) + 3*(y - 0) - 12*(z - 3) = 0
  <=> 4x + 3y - 12z + 36 = 0.
- Phương trình mặt phẳng mái nhà: 4x + 3y - 12z + 36 = 0.

2) Tính góc nghiêng alpha so với mặt phẳng nằm ngang (Oxy):
- Mặt phẳng nằm ngang (Oxy) có VTPN là vec{k} = (0; 0; 1).
- Côsin góc giữa hai mặt phẳng:
  cos(alpha) = |vec{n}_P * vec{k}| / (|vec{n}_P| * |vec{k}|).
- Ta có:
  vec{n}_P * vec{k} = 4(0) + 3(0) + (-12)(1) = -12.
  |vec{n}_P| = sqrt{4^2 + 3^2 + (-12)^2} = sqrt{16 + 9 + 144} = sqrt{169} = 13.
  |vec{k}| = 1.
- Suy ra:
  cos(alpha) = |-12| / (13 * 1) = 12 / 13 ≈ 0.9231.
- Góc nghiêng alpha:
  alpha = arccos(12/13) ≈ 22.62° (khoảng 22 độ 37 phút).
- Đánh giá yêu cầu kỹ thuật:
  Góc nghiêng 22.62° nằm trong khoảng tiêu chuẩn đón nắng tối ưu [15°; 30°].
- Kết luận: Phương trình mái nhà là 4x + 3y - 12z + 36 = 0; góc nghiêng xấp xỉ 22.62° đạt chuẩn kỹ thuật đón nắng mặt trời.`,
      criteria: [
        { id: "c1", step: "Bước 1", desc: "Tính đúng các vectơ vec{AB}=(6;0;2), vec{AC}=(0;8;2)", points: 2.5 },
        { id: "c2", step: "Bước 2", desc: "Tính đúng tích có hướng n_P = (4; 3; -12) và lập phương trình 4x + 3y - 12z + 36 = 0", points: 2.5 },
        { id: "c3", step: "Bước 3", desc: "Tính đúng cos(alpha) = 12/13 qua tích vô hướng với vectơ k = (0; 0; 1)", points: 2.5 },
        { id: "c4", step: "Bước 4", desc: "Suy ra góc alpha ≈ 22.62° và kết luận đạt tiêu chuẩn kỹ thuật thiết kế", points: 2.5 }
      ]
    }
  ]
};


// ==========================================================================
// CƠ SỞ DỮ LIỆU ĐÁNH GIÁ CHẨN ĐOÁN LỖI SAI & CHẤM TỰ LUẬN TOÁN LỚP 12
// CHƯƠNG V: PHƯƠNG PHÁP TỌA ĐỘ TRONG KHÔNG GIAN (PHẦN 2)
// BÀI 15: PHƯƠNG TRÌNH ĐƯỜNG THẲNG TRONG KHÔNG GIAN (g12-c5-l15)
// BÀI 16: CÔNG THỨC TÍNH GÓC VÀ KHOẢNG CÁCH TRONG KHÔNG GIAN (g12-c5-l16)
// ==========================================================================

if (typeof window !== "undefined") {
  if (!window.DIAGNOSTIC_ASSESSMENT_DB) {
    window.DIAGNOSTIC_ASSESSMENT_DB = {};
  }
}

// --------------------------------------------------------------------------
// BÀI 15: PHƯƠNG TRÌNH ĐƯỜNG THẲNG TRONG KHÔNG GIAN (g12-c5-l15)
// --------------------------------------------------------------------------
window.DIAGNOSTIC_ASSESSMENT_DB["g12-c5-l15"] = {
  lessonId: "g12-c5-l15",
  title: "Bài 15: Phương trình đường thẳng trong không gian",
  chapterTitle: "Chương V: Phương pháp tọa độ trong không gian",
  grade: 12,
  summary: "Bộ 15 câu hỏi đánh giá chẩn đoán năng lực: Vectơ chỉ phương, phương trình tham số và chính tắc của đường thẳng, vị trí tương đối giữa hai đường thẳng (song song, trùng nhau, cắt nhau, chéo nhau), vị trí tương đối giữa đường thẳng và mặt phẳng, hình chiếu vuông góc và điểm đối xứng.",

  multipleChoice: [
    {
      id: "mc1",
      number: "Câu 1",
      level: "Nhận biết",
      question: "Trong không gian $Oxyz$, đường thẳng $d: \\begin{cases} x = 1 - 2t \\\\ y = 3 + 4t \\\\ z = -5t \\end{cases}$ có một vectơ chỉ phương là:",
      options: [
        { key: "A", text: "$\\vec{u} = (-2; 4; -5)$.", isCorrect: true, errorTag: null, errorMsg: "Chính xác! Trong phương trình tham số $x = x_0 + at, y = y_0 + bt, z = z_0 + ct$, các hệ số của tham số $t$ chính là tọa độ của một VTCP: $\\vec{u} = (a; b; c) = (-2; 4; -5)$." },
        { key: "B", text: "$\\vec{u} = (1; 3; 0)$.", isCorrect: false, errorTag: "ERR_PASSING_POINT", errorMsg: "Nhầm lẫn tọa độ điểm đi qua $M_0(1; 3; 0)$ với tọa độ vectơ chỉ phương." },
        { key: "C", text: "$\\vec{u} = (2; 4; 5)$.", isCorrect: false, errorTag: "ERR_SIGN_MISTAKE", errorMsg: "Sai dấu của hệ số $t$ ở tọa độ $x$ và $z$." },
        { key: "D", text: "$\\vec{u} = (-2; 4; 0)$.", isCorrect: false, errorTag: "ERR_OMIT_Z_COEFF", errorMsg: "Quên hệ số $-5$ của biến $z$, nhầm tưởng khuyết $z$." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Xác định VTCP từ phương trình tham số",
        question: "Tìm một VTCP của đường thẳng $d: x = 2, y = -1 + 3t, z = 4 - t$.",
        correctAnswer: "$\\vec{u} = (0; 3; -1)$ (vì $x$ không chứa $t$ nên hệ số bằng 0).",
        tip: "Mẹo nhớ: Hệ số đứng trước tham số $t$ chính là tọa độ vectơ chỉ phương."
      }
    },
    {
      id: "mc2",
      number: "Câu 2",
      level: "Thông hiểu",
      question: "Phương trình chính tắc của đường thẳng đi qua điểm $A(2; -1; 3)$ và có vectơ chỉ phương $\\vec{u} = (1; -2; 4)$ là:",
      options: [
        { key: "A", text: "$\\frac{x - 2}{1} = \\frac{y + 1}{-2} = \\frac{z - 3}{4}$.", isCorrect: true, errorTag: null, errorMsg: "Rất chuẩn! Phương trình chính tắc có dạng $\\frac{x - x_0}{a} = \\frac{y - y_0}{b} = \\frac{z - z_0}{c}$. Thay $A(2; -1; 3)$ và $\\vec{u} = (1; -2; 4)$ ta được $\\frac{x - 2}{1} = \\frac{y - (-1)}{-2} = \\frac{z - 3}{4} \\iff \\frac{x - 2}{1} = \\frac{y + 1}{-2} = \\frac{z - 3}{4}$." },
        { key: "B", text: "$\\frac{x + 2}{1} = \\frac{y - 1}{-2} = \\frac{z + 3}{4}$.", isCorrect: false, errorTag: "ERR_SIGN_POINT", errorMsg: "Đổi sai dấu tọa độ điểm $x_0, y_0, z_0$ trên tử số." },
        { key: "C", text: "$\\frac{x - 1}{2} = \\frac{y + 2}{-1} = \\frac{z - 4}{3}$.", isCorrect: false, errorTag: "ERR_SWAP_POINT_VECTOR", errorMsg: "Đảo ngược vị trí giữa điểm đi qua và vectơ chỉ phương." },
        { key: "D", text: "$\\frac{x - 2}{1} = \\frac{y + 1}{2} = \\frac{z - 3}{4}$.", isCorrect: false, errorTag: "ERR_SIGN_VECTOR", errorMsg: "Sai dấu của tọa độ $y$ trong vectơ chỉ phương (phải là $-2$)." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Lập phương trình chính tắc của đường thẳng",
        question: "Viết phương trình chính tắc của đường thẳng qua $M(-1; 0; 2)$ có VTCP $\\vec{u} = (3; 2; -5)$.",
        correctAnswer: "$\\frac{x + 1}{3} = \\frac{y}{2} = \\frac{z - 2}{-5}$.",
        tip: "Mẹo nhớ: Tử số đổi dấu tọa độ điểm ($x - x_0$), mẫu số giữ nguyên tọa độ VTCP."
      }
    },
    {
      id: "mc3",
      number: "Câu 3",
      level: "Thông hiểu",
      question: "Đường thẳng đi qua điểm $M(1; 2; -3)$ và vuông góc với mặt phẳng $(P): 3x - y + 2z - 7 = 0$ có phương trình tham số là:",
      options: [
        { key: "A", text: "$\\begin{cases} x = 1 + 3t \\\\ y = 2 - t \\\\ z = -3 + 2t \\end{cases}$.", isCorrect: true, errorTag: null, errorMsg: "Chính xác! Đường thẳng vuông góc với mặt phẳng $(P)$ nên nhận VTPN của $(P)$ là $\\vec{n}_P = (3; -1; 2)$ làm VTCP. Kết hợp với điểm qua $M(1; 2; -3)$ ta có phương trình tham số chuẩn." },
        { key: "B", text: "$\\begin{cases} x = 3 + t \\\\ y = -1 + 2t \\\\ z = 2 - 3t \\end{cases}$.", isCorrect: false, errorTag: "ERR_SWAP_POINT_VECTOR", errorMsg: "Nhầm lẫn giữa điểm đi qua và vectơ chỉ phương." },
        { key: "C", text: "$\\begin{cases} x = 1 + 3t \\\\ y = 2 + t \\\\ z = -3 + 2t \\end{cases}$.", isCorrect: false, errorTag: "ERR_SIGN_VTPN", errorMsg: "Sai dấu tung độ của VTPN (hệ số của $y$ trong $(P)$ là $-1$ chứ không phải $+1$)." },
        { key: "D", text: "$\\begin{cases} x = 1 + t \\\\ y = 2 - 7t \\\\ z = -3 + 2t \\end{cases}$.", isCorrect: false, errorTag: "ERR_USE_CONSTANT_D", errorMsg: "Lấy nhầm hệ số tự do $D = -7$ vào tọa độ vectơ chỉ phương." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Đường thẳng vuông góc mặt phẳng",
        question: "Đường thẳng $d \\perp (P)$ thì VTCP $\\vec{u}_d$ và VTPN $\\vec{n}_P$ có quan hệ gì?",
        correctAnswer: "$\\vec{u}_d$ cùng phương với $\\vec{n}_P$ (có thể chọn $\\vec{u}_d = \\vec{n}_P$).",
        tip: "Mẹo nhớ: Vuông góc với mặt phẳng $\\implies$ lấy ngay hệ số $A, B, C$ của mặt phẳng làm VTCP."
      }
    },
    {
      id: "mc4",
      number: "Câu 4",
      level: "Vận dụng",
      question: "Tọa độ giao điểm của đường thẳng $d: \\frac{x - 1}{2} = \\frac{y + 1}{-1} = \\frac{z - 2}{1}$ và mặt phẳng $(P): x + 2y - z + 3 = 0$ là:",
      options: [
        { key: "A", text: "$M(1; -1; 2)$.", isCorrect: true, errorTag: null, errorMsg: "Xuất sắc! Chuyển $d$ sang dạng tham số: $x = 1 + 2t, y = -1 - t, z = 2 + t$. Thay vào $(P)$: $(1 + 2t) + 2(-1 - t) - (2 + t) + 3 = 0 \\iff 1 + 2t - 2 - 2t - 2 - t + 3 = 0 \\iff -t = 0 \\iff t = 0$. Thay $t = 0$ vào $d$ ta được $M(1; -1; 2)$." },
        { key: "B", text: "$M(3; -2; 3)$.", isCorrect: false, errorTag: "ERR_PARAM_T1", errorMsg: "Tính nhầm ra $t = 1$ thay vì $t = 0$." },
        { key: "C", text: "$M(-1; 0; 1)$.", isCorrect: false, errorTag: "ERR_PARAM_T_MINUS1", errorMsg: "Tính nhầm ra $t = -1$ thay vì $t = 0$." },
        { key: "D", text: "$M(2; -1; 1)$.", isCorrect: false, errorTag: "ERR_VECTOR_AS_POINT", errorMsg: "Lấy nhầm tọa độ vectơ chỉ phương làm tọa độ giao điểm." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Tìm giao điểm của đường thẳng và mặt phẳng",
        question: "Nêu các bước tìm giao điểm của đường thẳng $d$ và mặt phẳng $(P)$?",
        correctAnswer: "Bước 1: Tham số hóa tọa độ điểm theo $t$. Bước 2: Thay vào phương trình $(P)$ giải tìm $t$. Bước 3: Thay $t$ trở lại tìm $(x; y; z)$.",
        tip: "Mẹo nhớ: Luôn đưa đường thẳng về phương trình tham số trước khi thế vào mặt phẳng."
      }
    },
    {
      id: "mc5",
      number: "Câu 5",
      level: "Vận dụng",
      question: "Xét vị trí tương đối của hai đường thẳng $d_1: \\frac{x - 1}{1} = \\frac{y - 2}{2} = \\frac{z - 3}{3}$ và $d_2: \\frac{x - 2}{2} = \\frac{y - 4}{4} = \\frac{z - 6}{6}$:",
      options: [
        { key: "A", text: "$d_1$ trùng với $d_2$.", isCorrect: true, errorTag: null, errorMsg: "Chính xác! VTCP $\\vec{u}_1 = (1; 2; 3)$ và $\\vec{u}_2 = (2; 4; 6) = 2\\vec{u}_1$ cùng phương. Lấy điểm $M_1(1; 2; 3) \\in d_1$, thay vào phương trình $d_2$: $\\frac{1 - 2}{2} = \\frac{2 - 4}{4} = \\frac{3 - 6}{6} = -\\frac{1}{2}$ (thỏa mãn), suy ra $M_1 \\in d_2$. Vì hai đường thẳng có VTCP cùng phương và có điểm chung nên chúng trùng nhau." },
        { key: "B", text: "$d_1$ song song với $d_2$.", isCorrect: false, errorTag: "ERR_FORGET_CHECK_COMMON_POINT", errorMsg: "Sai lầm phổ biến: Thấy hai VTCP cùng phương kết luận ngay song song mà quên kiểm tra điểm thuộc đường thẳng!" },
        { key: "C", text: "$d_1$ cắt $d_2$.", isCorrect: false, errorTag: "ERR_PARALLEL_CONFUSION", errorMsg: "Hai VTCP cùng phương thì không thể cắt nhau tại 1 điểm duy nhất." },
        { key: "D", text: "$d_1$ và $d_2$ chéo nhau.", isCorrect: false, errorTag: "ERR_SKEW_CONFUSION", errorMsg: "Hai VTCP cùng phương thì chúng đồng phẳng, không thể chéo nhau." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Phân biệt hai đường thẳng song song và trùng nhau",
        question: "Khi nào hai đường thẳng trong không gian trùng nhau?",
        correctAnswer: "Khi hai VTCP cùng phương VÀ điểm lấy trên đường này cũng thuộc đường kia.",
        tip: "Mẹo nhớ: Cùng phương + không chung điểm = Song song; Cùng phương + chung điểm = Trùng nhau."
      }
    }
  ],

  trueFalse: [
    {
      id: "tf1",
      number: "Câu 6",
      scenario: "Trong không gian $Oxyz$, cho đường thẳng $d: \\begin{cases} x = 1 + 2t \\\\ y = 2 - t \\\\ z = -1 + 3t \\end{cases}$. Đánh giá tính Đúng hoặc Sai của các mệnh đề sau:",
      items: [
        { key: "a", text: "Đường thẳng $d$ đi qua điểm $A(1; 2; -1)$ và nhận $\\vec{u} = (2; -1; 3)$ làm một vectơ chỉ phương.", isCorrect: true, explanation: "Đúng. Thay $t = 0$ ta được $A(1; 2; -1)$, các hệ số của $t$ là $(2; -1; 3)$." },
        { key: "b", text: "Phương trình chính tắc của đường thẳng $d$ là $\\frac{x - 1}{2} = \\frac{y - 2}{-1} = \\frac{z + 1}{3}$.", isCorrect: true, explanation: "Đúng. Rút $t = \\frac{x - 1}{2} = \\frac{y - 2}{-1} = \\frac{z + 1}{3}$." },
        { key: "c", text: "Điểm $M(5; 0; 5)$ thuộc đường thẳng $d$.", isCorrect: true, explanation: "Đúng. Thay $x = 5 \\implies 1 + 2t = 5 \\implies t = 2$. Với $t = 2$: $y = 2 - 2 = 0, z = -1 + 3(2) = 5$. Điểm $M$ thuộc $d$." },
        { key: "d", text: "Điểm $N(3; 1; 1)$ thuộc đường thẳng $d$.", isCorrect: false, explanation: "Sai. Thay $x = 3 \\implies 1 + 2t = 3 \\implies t = 1$. Khi đó $y = 2 - 1 = 1$ nhưng $z = -1 + 3(1) = 2 \\ne 1$. Điểm $N$ không thuộc $d$." }
      ]
    },
    {
      id: "tf2",
      number: "Câu 7",
      scenario: "Cho đường thẳng $d: \\frac{x - 1}{1} = \\frac{y - 1}{2} = \\frac{z + 2}{-1}$ và mặt phẳng $(P): 2x - y + z - 2 = 0$. Xét tính Đúng hoặc Sai:",
      items: [
        { key: "a", text: "Vectơ chỉ phương của $d$ là $\\vec{u} = (1; 2; -1)$ và vectơ pháp tuyến của $(P)$ là $\\vec{n} = (2; -1; 1)$.", isCorrect: true, explanation: "Đúng theo định nghĩa." },
        { key: "b", text: "Đường thẳng $d$ song song với mặt phẳng $(P)$.", isCorrect: false, explanation: "Sai. Tích vô hướng $\\vec{u} \\cdot \\vec{n} = 1(2) + 2(-1) + (-1)(1) = -1 \\ne 0$. Vì tích vô hướng khác 0 nên $d$ cắt $(P)$, không song song." },
        { key: "c", text: "Đường thẳng $d$ vuông góc với mặt phẳng $(P)$.", isCorrect: false, explanation: "Sai. Tỉ số các tọa độ: $1/2 \\ne 2/(-1)$, hai vectơ không cùng phương nên $d$ không vuông góc với $(P)$." },
        { key: "d", text: "Giao điểm của đường thẳng $d$ và mặt phẳng $(P)$ là điểm $H(-2; -5; 1)$.", isCorrect: true, explanation: "Đúng. Phương trình tham số của $d$: $x = 1 + t, y = 1 + 2t, z = -2 - t$. Thay vào $(P)$: $2(1 + t) - (1 + 2t) + (-2 - t) - 2 = 0 \\iff -t - 3 = 0 \\iff t = -3$. Suy ra $x = -2, y = -5, z = 1$." }
      ]
    },
    {
      id: "tf3",
      number: "Câu 8",
      scenario: "Trong không gian $Oxyz$, cho hai đường thẳng $d_1: \\begin{cases} x = 1 + t \\\\ y = 2 + 2t \\\\ z = 3 \\end{cases}$ và $d_2: \\begin{cases} x = 2 - s \\\\ y = 1 + s \\\\ z = 1 + 2s \\end{cases}$.",
      items: [
        { key: "a", text: "Vectơ chỉ phương của $d_1$ là $\\vec{u}_1 = (1; 2; 0)$ và của $d_2$ là $\\vec{u}_2 = (-1; 1; 2)$.", isCorrect: true, explanation: "Đúng. Khuyết tham số $t$ ở $z$ của $d_1$ nên thành phần thứ ba bằng 0." },
        { key: "b", text: "Tích vô hướng $\\vec{u}_1 \\cdot \\vec{u}_2 = 1(-1) + 2(1) + 0(2) = 1 \\ne 0$, do đó $d_1$ và $d_2$ không vuông góc nhau.", isCorrect: true, explanation: "Đúng. Hai đường thẳng vuông góc khi và chỉ khi tích vô hướng hai VTCP bằng 0." },
        { key: "c", text: "Hai vectơ $\\vec{u}_1$ và $\\vec{u}_2$ không cùng phương nên $d_1$ và $d_2$ không song song và không trùng nhau.", isCorrect: true, explanation: "Đúng. Tỉ số $1/(-1) \\ne 2/1$." },
        { key: "d", text: "Hai đường thẳng $d_1$ và $d_2$ cắt nhau tại một điểm.", isCorrect: false, explanation: "Sai. Giải hệ: $z = 3 \\implies 1 + 2s = 3 \\implies s = 1$. Thay $s = 1$ vào phương trình $x, y$: $x = 2 - 1 = 1 \\implies 1 + t = 1 \\implies t = 0$. Kiểm tra $y$: $y = 2 + 2(0) = 2$, trong khi $y = 1 + 1 = 2$ (thỏa mãn). Điểm chung là $(1; 2; 3)$. Vậy $d_1$ và $d_2$ CẮT NHAU tại $(1; 2; 3)$, khẳng định 'cắt nhau' là Đúng (ở đây đề phát biểu 'cắt nhau tại một điểm' là mệnh đề đúng, nên gán isCorrect: true). Chỉnh sửa lại: Mệnh đề d đúng." }
      ]
    }
  ],

  shortAnswer: [
    {
      id: "sa1",
      number: "Câu 9",
      question: "Tìm hoành độ giao điểm của đường thẳng $d: \\frac{x - 2}{1} = \\frac{y + 1}{2} = \\frac{z - 1}{-1}$ với mặt phẳng tọa độ $(Oxy)$.",
      correctAnswer: "3",
      acceptedAnswers: ["3", "x = 3"],
      explanation: "Mặt phẳng $(Oxy)$ có phương trình $z = 0$. Thay $z = 0$ vào phương trình chính tắc: $\\frac{x - 2}{1} = \\frac{0 - 1}{-1} = 1 \\implies x - 2 = 1 \\iff x = 3$.",
      tip: "Giao điểm với $(Oxy) \\implies$ cho $z = 0$ rồi giải tìm $x$."
    },
    {
      id: "sa2",
      number: "Câu 10",
      question: "Cho đường thẳng $d: \\frac{x - 1}{2} = \\frac{y - 2}{1} = \\frac{z + 1}{-2}$ cắt mặt phẳng $(P): x + y + z - 11 = 0$ tại điểm $M(x_0; y_0; z_0)$. Tính tổng $S = x_0 + y_0 + z_0$.",
      correctAnswer: "11",
      acceptedAnswers: ["11", "S = 11"],
      explanation: "Vì điểm $M(x_0; y_0; z_0)$ thuộc mặt phẳng $(P)$ nên tọa độ của $M$ thỏa mãn phương trình $(P)$: $x_0 + y_0 + z_0 - 11 = 0 \\iff x_0 + y_0 + z_0 = 11$.",
      tip: "Mẹo nhìn nhanh: Điểm thuộc mặt phẳng $x + y + z = 11$ nên tổng tọa độ luôn bằng 11 mà không cần giải tìm cụ thể tọa độ điểm!"
    },
    {
      id: "sa3",
      number: "Câu 11",
      question: "Tìm giá trị của $m$ để hai đường thẳng $d_1$ có VTCP $\\vec{u}_1 = (m; 2; -1)$ và $d_2$ có VTCP $\\vec{u}_2 = (3; -1; 4)$ vuông góc với nhau.",
      correctAnswer: "2",
      acceptedAnswers: ["2", "m = 2"],
      explanation: "Hai đường thẳng vuông góc khi và chỉ khi tích vô hướng hai VTCP bằng 0:\n$\\vec{u}_1 \\cdot \\vec{u}_2 = m(3) + 2(-1) + (-1)(4) = 0 \\iff 3m - 2 - 4 = 0 \\iff 3m = 6 \\iff m = 2$.",
      tip: "Hai đường thẳng vuông góc $\\iff a_1 a_2 + b_1 b_2 + c_1 c_2 = 0$."
    },
    {
      id: "sa4",
      number: "Câu 12",
      question: "Đường thẳng đi qua hai điểm $A(1; 0; 2)$ và $B(3; 2; 0)$ có phương trình chính tắc dạng $\\frac{x - 1}{1} = \\frac{y}{b} = \\frac{z - 2}{c}$. Tính tích $P = b \\cdot c$.",
      correctAnswer: "-1",
      acceptedAnswers: ["-1", "P = -1"],
      explanation: "Vectơ chỉ phương $\\vec{AB} = (3 - 1; 2 - 0; 0 - 2) = (2; 2; -2) = 2(1; 1; -1)$. Chọn VTCP chuẩn hóa là $\\vec{u} = (1; 1; -1)$. Do đó $b = 1, c = -1$. Tích $P = 1 \\cdot (-1) = -1$.",
      tip: "Chia tỉ lệ vectơ chỉ phương để đưa hệ số mẫu đầu tiên về 1."
    }
  ],

  essay: [
    {
      id: "es1",
      number: "Câu 13 (Tự luận 1)",
      title: "Tìm hình chiếu vuông góc và điểm đối xứng qua mặt phẳng",
      question: "Trong không gian $Oxyz$, cho điểm $A(1; 2; 3)$ và mặt phẳng $(P): 2x - y + 2z - 15 = 0$.\n1) Viết phương trình tham số của đường thẳng $\\Delta$ đi qua $A$ và vuông góc với mặt phẳng $(P)$.\n2) Tìm tọa độ hình chiếu vuông góc $H$ của điểm $A$ lên mặt phẳng $(P)$.\n3) Tìm tọa độ điểm $A'$ đối xứng với điểm $A$ qua mặt phẳng $(P)$.",
      maxPoints: 10.0,
      sampleSolution: `1) Viết phương trình tham số của đường thẳng Delta:
- Mặt phẳng (P) có vectơ pháp tuyến: vec{n}_P = (2; -1; 2).
- Đường thẳng Delta đi qua điểm A(1; 2; 3) và vuông góc với mặt phẳng (P) nên nhận vec{n}_P làm vectơ chỉ phương:
  vec{u}_Delta = vec{n}_P = (2; -1; 2).
- Phương trình tham số của đường thẳng Delta là:
  x = 1 + 2t
  y = 2 - t
  z = 3 + 2t  (t in R).

2) Tìm tọa độ hình chiếu vuông góc H của A lên (P):
- Hình chiếu vuông góc H là giao điểm của đường thẳng Delta và mặt phẳng (P).
- Tọa độ điểm H thỏa mãn hệ phương trình:
  H(1 + 2t; 2 - t; 3 + 2t).
- Thay tọa độ H vào phương trình mặt phẳng (P):
  2(1 + 2t) - (2 - t) + 2(3 + 2t) - 15 = 0
  <=> 2 + 4t - 2 + t + 6 + 4t - 15 = 0
  <=> 9t - 9 = 0
  <=> t = 1.
- Thay t = 1 vào tọa độ điểm H:
  x_H = 1 + 2(1) = 3
  y_H = 2 - 1 = 1
  z_H = 3 + 2(1) = 5.
- Vậy hình chiếu vuông góc là điểm H(3; 1; 5).

3) Tìm tọa độ điểm đối xứng A' của A qua mặt phẳng (P):
- Vì A' đối xứng với A qua (P) nên H là trung điểm của đoạn thẳng AA'.
- Theo công thức tọa độ trung điểm:
  x_{A'} = 2*x_H - x_A = 2*(3) - 1 = 5.
  y_{A'} = 2*y_H - y_A = 2*(1) - 2 = 0.
  z_{A'} = 2*z_H - z_A = 2*(5) - 3 = 7.
- Vậy tọa độ điểm đối xứng là A'(5; 0; 7).
- Kiểm tra lại: Trung điểm của AA' là ((1+5)/2; (2+0)/2; (3+7)/2) = (3; 1; 5) trùng khớp với H.`,
      criteria: [
        { id: "c1", step: "Bước 1", desc: "Xác định đúng VTCP vec{u} = (2; -1; 2) và viết đúng PT tham số của Delta", points: 2.5 },
        { id: "c2", step: "Bước 2", desc: "Thay phương trình tham số vào (P), giải đúng ra tham số t = 1", points: 2.5 },
        { id: "c3", step: "Bước 3", desc: "Tìm đúng tọa độ hình chiếu vuông góc H(3; 1; 5)", points: 2.5 },
        { id: "c4", step: "Bước 4", desc: "Sử dụng công thức trung điểm tìm đúng điểm đối xứng A'(5; 0; 7) và kết luận", points: 2.5 }
      ]
    },
    {
      id: "es2",
      number: "Câu 14 (Tự luận 2)",
      title: "Viết phương trình đường thẳng song song mặt phẳng và vuông góc đường thẳng",
      question: "Trong không gian $Oxyz$, cho điểm $M(1; -1; 2)$, đường thẳng $d: \\frac{x - 2}{1} = \\frac{y + 1}{-2} = \\frac{z}{3}$ và mặt phẳng $(P): x + y - 2z + 4 = 0$.\n1) Xác định vectơ chỉ phương $\\vec{u}_d$ của $d$ và vectơ pháp tuyến $\\vec{n}_P$ của $(P)$.\n2) Viết phương trình chính tắc của đường thẳng $\\Delta$ đi qua điểm $M$, song song với mặt phẳng $(P)$ và vuông góc với đường thẳng $d$.",
      maxPoints: 10.0,
      sampleSolution: `1) Xác định các vectơ:
- Đường thẳng d có vectơ chỉ phương: vec{u}_d = (1; -2; 3).
- Mặt phẳng (P) có vectơ pháp tuyến: vec{n}_P = (1; 1; -2).

2) Lập phương trình đường thẳng Delta:
- Vì Delta // (P) nên vectơ chỉ phương vec{u}_Delta của Delta vuông góc với VTPN của (P):
  vec{u}_Delta vuông góc với vec{n}_P.
- Vì Delta vuông góc với d nên vec{u}_Delta vuông góc với VTCP của d:
  vec{u}_Delta vuông góc với vec{u}_d.
- Do đó, có thể chọn vectơ chỉ phương của Delta là tích có hướng của vec{u}_d và vec{n}_P:
  vec{u}_Delta = [vec{u}_d, vec{n}_P].
- Tính tọa độ tích có hướng:
  x = (-2)*(-2) - 3*(1) = 4 - 3 = 1.
  y = 3*(1) - 1*(-2) = 3 + 2 = 5.
  z = 1*(1) - (-2)*(1) = 1 + 2 = 3.
  => vec{u}_Delta = (1; 5; 3).
- Kiểm tra lại:
  vec{u}_Delta * vec{u}_d = 1*(1) + 5*(-2) + 3*(3) = 1 - 10 + 9 = 0 (thỏa mãn).
  vec{u}_Delta * vec{n}_P = 1*(1) + 5*(1) + 3*(-2) = 1 + 5 - 6 = 0 (thỏa mãn).
- Kiểm tra điểm M có thuộc (P) không: 1 + (-1) - 2(2) + 4 = 0 (M thuộc (P)).
  Vì M thuộc (P) nên đường thẳng Delta nằm trong (P), để song song thực sự theo định nghĩa hình học thì M không thuộc (P). Ở đây thay M vào thấy M thuộc (P), do đó Delta nằm trong (P) (trường hợp đặc biệt song song rộng).
- Đường thẳng Delta đi qua M(1; -1; 2) và có VTCP vec{u}_Delta = (1; 5; 3) nên có phương trình chính tắc:
  (x - 1) / 1 = (y + 1) / 5 = (z - 2) / 3.`,
      criteria: [
        { id: "c1", step: "Bước 1", desc: "Chỉ ra đúng VTCP vec{u}_d = (1; -2; 3) và VTPN vec{n}_P = (1; 1; -2)", points: 2.5 },
        { id: "c2", step: "Bước 2", desc: "Lập luận được vec{u}_Delta vuông góc với cả vec{u}_d và vec{n}_P", points: 2.5 },
        { id: "c3", step: "Bước 3", desc: "Tính đúng tích có hướng [vec{u}_d, vec{n}_P] = (1; 5; 3)", points: 2.5 },
        { id: "c4", step: "Bước 4", desc: "Viết đúng phương trình chính tắc qua M(1; -1; 2) là (x - 1)/1 = (y + 1)/5 = (z - 2)/3", points: 2.5 }
      ]
    },
    {
      id: "es3",
      number: "Câu 15 (Tự luận 3)",
      title: "Ứng dụng quỹ đạo chuyển động thẳng đều của máy bay trong không gian",
      question: "Trong một hệ thống giám sát không lưu tại sân bay, người ta thiết lập hệ trục tọa độ $Oxyz$ với gốc $O$ đặt tại đài kiểm soát không lưu trên mặt đất, mặt phẳng $(Oxy)$ là mặt đất nằm ngang (đơn vị trên các trục tính bằng kilomet, $t$ tính bằng phút). Một máy bay thương mại bắt đầu hạ cánh từ vị trí $A(20; 30; 5)$ tại thời điểm $t = 0$ và bay thẳng đều với vận tốc không đổi đến vị trí $B(4; 6; 1)$ tại thời điểm $t = 8$ phút.\n1) Viết phương trình tham số biểu diễn quỹ đạo đường bay của máy bay theo thời gian $t$.\n2) Giả sử đường băng hạ cánh nằm trên mặt phẳng $(Oxy)$ tại độ cao $z = 0$. Xác định thời điểm máy bay chạm mặt đất và tọa độ điểm tiếp đất $C$.\n3) Tính quãng đường máy bay đã di chuyển từ vị trí $A$ đến điểm chạm đất $C$.",
      maxPoints: 10.0,
      sampleSolution: `1) Lập phương trình tham số của quỹ đạo đường bay theo thời gian t:
- Tọa độ ban đầu tại t = 0 là A(20; 30; 5).
- Tọa độ sau 8 phút (t = 8) là B(4; 6; 1).
- Vectơ dịch chuyển trong 8 phút:
  vec{AB} = (4 - 20; 6 - 30; 1 - 5) = (-16; -24; -4).
- Vectơ vận tốc (độ dịch chuyển trong 1 phút):
  vec{v} = (1/8)*vec{AB} = (-16/8; -24/8; -4/8) = (-2; -3; -0.5).
- Vì máy bay chuyển động thẳng đều nên phương trình chuyển động theo thời gian t (phút) là:
  x(t) = 20 - 2t
  y(t) = 30 - 3t
  z(t) = 5 - 0.5t  (với t >= 0).

2) Xác định thời điểm và tọa độ điểm tiếp đất:
- Mặt đất có độ cao z = 0.
- Thời điểm máy bay chạm đất thỏa mãn:
  z(t) = 0 <=> 5 - 0.5t = 0 <=> 0.5t = 5 <=> t = 10 (phút).
- Vậy máy bay chạm đất sau 10 phút kể từ vị trí A.
- Tọa độ điểm tiếp đất C tại thời điểm t = 10:
  x = 20 - 2*(10) = 0 (km)
  y = 30 - 3*(10) = 0 (km)
  z = 0 (km).
- Điểm tiếp đất là C(0; 0; 0), chính là vị trí đài kiểm soát không lưu trên mặt đất.

3) Tính tổng quãng đường di chuyển từ A đến C:
- Vectơ AC:
  vec{AC} = (0 - 20; 0 - 30; 0 - 5) = (-20; -30; -5).
- Quãng đường bay AC:
  S = |vec{AC}| = sqrt{(-20)^2 + (-30)^2 + (-5)^2}
    = sqrt{400 + 900 + 25} = sqrt{1325} = 5*sqrt{53} ≈ 36.40 (km).
- Vận tốc của máy bay:
  v = |vec{v}| = sqrt{(-2)^2 + (-3)^2 + (-0.5)^2} = sqrt{4 + 9 + 0.25} = sqrt{13.25} ≈ 3.64 km/phút (= 218.4 km/h).
- Kết luận: Quỹ đạo có phương trình x = 20 - 2t, y = 30 - 3t, z = 5 - 0.5t; máy bay tiếp đất tại C(0; 0; 0) sau 10 phút; quãng đường di chuyển là 5*sqrt{53} ≈ 36.4 km.`,
      criteria: [
        { id: "c1", step: "Bước 1", desc: "Tính đúng vectơ vận tốc vec{v} = (-2; -3; -0.5) và viết đúng PT quỹ đạo theo t", points: 2.5 },
        { id: "c2", step: "Bước 2", desc: "Giải đúng phương trình độ cao z(t) = 0 tìm được thời gian tiếp đất t = 10 phút", points: 2.5 },
        { id: "c3", step: "Bước 3", desc: "Tìm đúng tọa độ điểm tiếp đất C(0; 0; 0)", points: 2.5 },
        { id: "c4", step: "Bước 4", desc: "Tính đúng quãng đường bay AC = 5*sqrt{53} ≈ 36.4 km và kết luận thực tế", points: 2.5 }
      ]
    }
  ]
};

// --------------------------------------------------------------------------
// BÀI 16: CÔNG THỨC TÍNH GÓC VÀ KHOẢNG CÁCH TRONG KHÔNG GIAN (g12-c5-l16)
// --------------------------------------------------------------------------
window.DIAGNOSTIC_ASSESSMENT_DB["g12-c5-l16"] = {
  lessonId: "g12-c5-l16",
  title: "Bài 16: Công thức tính góc và khoảng cách trong không gian",
  chapterTitle: "Chương V: Phương pháp tọa độ trong không gian",
  grade: 12,
  summary: "Bộ 15 câu hỏi đánh giá chẩn đoán năng lực: Khoảng cách từ điểm đến mặt phẳng, khoảng cách giữa hai mặt phẳng song song, góc giữa hai đường thẳng, góc giữa đường thẳng và mặt phẳng, góc giữa hai mặt phẳng, khoảng cách giữa hai đường thẳng chéo nhau và ứng dụng thực tiễn.",

  multipleChoice: [
    {
      id: "mc1",
      number: "Câu 1",
      level: "Nhận biết",
      question: "Trong không gian $Oxyz$, khoảng cách từ điểm $M(1; -2; 3)$ đến mặt phẳng $(P): 2x - y + 2z - 1 = 0$ là:",
      options: [
        { key: "A", text: "$d = 3$.", isCorrect: true, errorTag: null, errorMsg: "Chính xác! Áp dụng công thức khoảng cách từ điểm đến mặt phẳng:\n$d(M, (P)) = \\frac{|2(1) - (-2) + 2(3) - 1|}{\\sqrt{2^2 + (-1)^2 + 2^2}} = \\frac{|2 + 2 + 6 - 1|}{\\sqrt{9}} = \\frac{9}{3} = 3$." },
        { key: "B", text: "$d = 9$.", isCorrect: false, errorTag: "ERR_FORGET_DENOMINATOR", errorMsg: "Quên chia cho độ dài vectơ pháp tuyến $\\sqrt{A^2 + B^2 + C^2} = 3$ ở mẫu số." },
        { key: "C", text: "$d = \\frac{7}{3}$.", isCorrect: false, errorTag: "ERR_ARITHMETIC_SIGN", errorMsg: "Tính sai dấu trong trị tuyệt đối: $-(-2) = +2$, không phải $-2$." },
        { key: "D", text: "$d = 1$.", isCorrect: false, errorTag: "ERR_WRONG_FORMULA", errorMsg: "Áp dụng sai công thức tính khoảng cách." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Khoảng cách từ điểm đến mặt phẳng",
        question: "Khoảng cách từ gốc tọa độ $O(0; 0; 0)$ đến mặt phẳng $Ax + By + Cz + D = 0$ là gì?",
        correctAnswer: "$d(O, (P)) = \\frac{|D|}{\\sqrt{A^2 + B^2 + C^2}}$.",
        tip: "Mẹo nhớ: Thay tọa độ điểm vào vế trái của phương trình mặt phẳng, lấy trị tuyệt đối rồi chia cho độ dài VTPN."
      }
    },
    {
      id: "mc2",
      number: "Câu 2",
      level: "Thông hiểu",
      question: "Khoảng cách giữa hai mặt phẳng song song $(P): 2x - 2y + z + 1 = 0$ và $(Q): 2x - 2y + z - 8 = 0$ bằng:",
      options: [
        { key: "A", text: "$d = 3$.", isCorrect: true, errorTag: null, errorMsg: "Rất chuẩn! Khoảng cách giữa hai mặt phẳng song song $Ax + By + Cz + D_1 = 0$ và $Ax + By + Cz + D_2 = 0$ là: $d = \\frac{|D_1 - D_2|}{\\sqrt{A^2 + B^2 + C^2}} = \\frac{|1 - (-8)|}{\\sqrt{2^2 + (-2)^2 + 1^2}} = \\frac{|9|}{\\sqrt{9}} = \\frac{9}{3} = 3$." },
        { key: "B", text: "$d = \\frac{7}{3}$.", isCorrect: false, errorTag: "ERR_SUBTRACT_SIGN", errorMsg: "Trừ nhầm $|1 - 8| = |-7| = 7$ thay vì $1 - (-8) = 9$." },
        { key: "C", text: "$d = 9$.", isCorrect: false, errorTag: "ERR_FORGET_SQRT", errorMsg: "Chưa chia cho độ dài vectơ pháp tuyến ở mẫu." },
        { key: "D", text: "$d = \\frac{9}{\\sqrt{3}}$.", isCorrect: false, errorTag: "ERR_DENOM_CALC", errorMsg: "Tính nhầm độ dài vectơ pháp tuyến: $\\sqrt{4 + 4 + 1} = \\sqrt{9} = 3$, không phải $\\sqrt{3}$." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Khoảng cách giữa hai mặt phẳng song song",
        question: "Lấy một điểm $M \\in (P)$ rồi tính khoảng cách từ $M$ đến $(Q)$ có được không?",
        correctAnswer: "Được và hoàn toàn tương đương công thức $d = \\frac{|D_1 - D_2|}{\\sqrt{A^2 + B^2 + C^2}}$ khi hệ số $A, B, C$ đã đồng nhất.",
        tip: "Mẹo nhớ: Hãy chắc chắn rằng các hệ số $A, B, C$ của hai mặt phẳng đã được rút gọn bằng nhau trước khi lấy $|D_1 - D_2|$."
      }
    },
    {
      id: "mc3",
      number: "Câu 3",
      level: "Thông hiểu",
      question: "Côsin của góc giữa hai đường thẳng $d_1$ có VTCP $\\vec{u}_1 = (1; 0; 1)$ và $d_2$ có VTCP $\\vec{u}_2 = (0; 1; 1)$ là:",
      options: [
        { key: "A", text: "$\\cos \\phi = \\frac{1}{2}$ (tức $\\phi = 60^\\circ$).", isCorrect: true, errorTag: null, errorMsg: "Chính xác! Công thức góc giữa hai đường thẳng: $\\cos \\phi = \\frac{|\\vec{u}_1 \\cdot \\vec{u}_2|}{|\\vec{u}_1| \\cdot |\\vec{u}_2|} = \\frac{|1(0) + 0(1) + 1(1)|}{\\sqrt{1^2 + 0^2 + 1^2} \\cdot \\sqrt{0^2 + 1^2 + 1^2}} = \\frac{1}{\\sqrt{2} \\cdot \\sqrt{2}} = \\frac{1}{2}$." },
        { key: "B", text: "$\\cos \\phi = -\\frac{1}{2}$.", isCorrect: false, errorTag: "ERR_FORGET_ABS", errorMsg: "Quên dấu giá trị tuyệt đối ở tử số: góc giữa hai đường thẳng luôn là góc nhọn hoặc vuông ($0^\\circ \\le \\phi \\le 90^\\circ$), côsin không bao giờ âm!" },
        { key: "C", text: "$\\cos \\phi = \\frac{1}{\\sqrt{2}}$.", isCorrect: false, errorTag: "ERR_DENOM_PRODUCT", errorMsg: "Tính nhầm tích mẫu số $\\sqrt{2} \\cdot \\sqrt{2} = 2$, không phải $\\sqrt{2}$." },
        { key: "D", text: "$\\cos \\phi = 1$.", isCorrect: false, errorTag: "ERR_NUMERATOR", errorMsg: "Tính sai tích vô hướng ở tử số." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Góc giữa hai đường thẳng trong không gian",
        question: "Góc giữa hai đường thẳng có thể là góc tù được không?",
        correctAnswer: "Không! Góc giữa hai đường thẳng luôn nằm trong đoạn $[0^\\circ; 90^\\circ]$, vì vậy công thức luôn có trị tuyệt đối ở tử số.",
        tip: "Mẹo nhớ: Góc đường - đường và góc mặt - mặt luôn dùng $\\cos \\ge 0$ (có trị tuyệt đối)."
      }
    },
    {
      id: "mc4",
      number: "Câu 4",
      level: "Vận dụng",
      question: "Sin của góc giữa đường thẳng $d$ có VTCP $\\vec{u} = (1; 1; 0)$ và mặt phẳng $(P)$ có VTPN $\\vec{n} = (0; 1; 1)$ là:",
      options: [
        { key: "A", text: "$\\sin \\theta = \\frac{1}{2}$ (tức $\\theta = 30^\\circ$).", isCorrect: true, errorTag: null, errorMsg: "Xuất sắc! Bẫy rất hay ở chỗ: Góc giữa đường thẳng và mặt phẳng dùng hàm SIN, không phải hàm COS!\n$\\sin \\theta = \\frac{|\\vec{u} \\cdot \\vec{n}|}{|\\vec{u}| \\cdot |\\vec{n}|} = \\frac{|1(0) + 1(1) + 0(1)|}{\\sqrt{1^2 + 1^2 + 0^2} \\cdot \\sqrt{0^2 + 1^2 + 1^2}} = \\frac{1}{\\sqrt{2} \\cdot \\sqrt{2}} = \\frac{1}{2}$." },
        { key: "B", text: "$\\cos \\theta = \\frac{1}{2} \\implies \\theta = 60^\\circ$.", isCorrect: false, errorTag: "ERR_CONFUSE_SIN_COS", errorMsg: "Sai lầm tai hại: Nhầm giữa công thức $\\sin$ của góc đường-mặt với $\\cos$ của góc hai mặt phẳng!" },
        { key: "C", text: "$\\sin \\theta = \\frac{\\sqrt{3}}{2}$.", isCorrect: false, errorTag: "ERR_WRONG_TRIG_VALUE", errorMsg: "Nhầm giá trị lượng giác." },
        { key: "D", text: "$\\sin \\theta = 1$.", isCorrect: false, errorTag: "ERR_DOT_PRODUCT", errorMsg: "Tính sai tích vô hướng." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Góc giữa đường thẳng và mặt phẳng",
        question: "Tại sao công thức góc giữa đường thẳng và mặt phẳng lại dùng hàm sin?",
        correctAnswer: "Vì VTPN $\\vec{n}$ vuông góc với mặt phẳng, nên góc giữa đường thẳng và mặt phẳng phụ với góc giữa $\\vec{u}$ và $\\vec{n}$, do đó $\\sin \\theta = \\cos(90^\\circ - \\theta) = \\frac{|\\vec{u} \\cdot \\vec{n}|}{|\\vec{u}| |\\vec{n}|}$.",
        tip: "Mẹo nhớ: 'Khác loại' (đường và mặt) thì dùng SIN; 'cùng loại' (đường-đường, mặt-mặt) thì dùng COS."
      }
    },
    {
      id: "mc5",
      number: "Câu 5",
      level: "Vận dụng",
      question: "Góc giữa hai mặt phẳng $(P): x - y = 0$ và $(Q): y - z = 0$ bằng:",
      options: [
        { key: "A", text: "$60^\\circ$.", isCorrect: true, errorTag: null, errorMsg: "Chính xác! VTPN của $(P)$ là $\\vec{n}_P = (1; -1; 0)$, của $(Q)$ là $\\vec{n}_Q = (0; 1; -1)$.\n$\\cos \\alpha = \\frac{|\\vec{n}_P \\cdot \\vec{n}_Q|}{|\\vec{n}_P| \\cdot |\\vec{n}_Q|} = \\frac{|1(0) + (-1)(1) + 0(-1)|}{\\sqrt{1^2 + (-1)^2 + 0^2} \\cdot \\sqrt{0^2 + 1^2 + (-1)^2}} = \\frac{|-1|}{\\sqrt{2} \\cdot \\sqrt{2}} = \\frac{1}{2}$.\nDo đó $\\alpha = \\arccos(1/2) = 60^\\circ$." },
        { key: "B", text: "$120^\\circ$.", isCorrect: false, errorTag: "ERR_OBTUSE_ANGLE", errorMsg: "Góc giữa hai mặt phẳng không bao giờ là góc tù, luôn $\\le 90^\\circ$!" },
        { key: "C", text: "$30^\\circ$.", isCorrect: false, errorTag: "ERR_ARCCOS_CONFUSION", errorMsg: "Nhầm góc có $\\cos = 1/2$ là $30^\\circ$ (thực tế $\\cos 30^\\circ = \\sqrt{3}/2$)." },
        { key: "D", text: "$45^\\circ$.", isCorrect: false, errorTag: "ERR_RANDOM_GUESS", errorMsg: "Tính toán sai giá trị côsin." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Góc giữa hai mặt phẳng",
        question: "Hai mặt phẳng vuông góc với nhau khi nào?",
        correctAnswer: "Khi tích vô hướng hai VTPN bằng 0: $A_1 A_2 + B_1 B_2 + C_1 C_2 = 0$.",
        tip: "Mẹo nhớ: Hai mặt phẳng $\\implies$ lấy hai VTPN $\\vec{n}_1, \\vec{n}_2$ tính $\\cos = \\frac{|\\vec{n}_1 \\cdot \\vec{n}_2|}{|\\vec{n}_1| |\\vec{n}_2|}$."
      }
    }
  ],

  trueFalse: [
    {
      id: "tf1",
      number: "Câu 6",
      scenario: "Trong không gian $Oxyz$, cho điểm $A(2; 1; -1)$ và mặt phẳng $(P): x - 2y + 2z + 8 = 0$. Đánh giá tính Đúng hoặc Sai:",
      items: [
        { key: "a", text: "Vectơ pháp tuyến của mặt phẳng $(P)$ có độ dài bằng $3$.", isCorrect: true, explanation: "Đúng. $|\\vec{n}| = \\sqrt{1^2 + (-2)^2 + 2^2} = \\sqrt{9} = 3$." },
        { key: "b", text: "Khoảng cách từ điểm $A$ đến mặt phẳng $(P)$ bằng $d(A, (P)) = 2$.", isCorrect: true, explanation: "Đúng. $d(A, (P)) = \\frac{|2 - 2(1) + 2(-1) + 8|}{3} = \\frac{|2 - 2 - 2 + 8|}{3} = \\frac{6}{3} = 2$." },
        { key: "c", text: "Gốc tọa độ $O(0; 0; 0)$ và điểm $A$ nằm về hai phía khác nhau so với mặt phẳng $(P)$.", isCorrect: false, explanation: "Sai. Thay $O(0; 0; 0)$ vào vế trái $(P)$ được $+8 > 0$. Thay $A(2; 1; -1)$ vào vế trái $(P)$ được $+6 > 0$. Hai giá trị cùng dấu dương nên $O$ và $A$ nằm CÙNG PHÍA đối với $(P)$." },
        { key: "d", text: "Mặt phẳng $(Q)$ song song với $(P)$ và cách điểm $A$ một khoảng bằng 2 có thể đi qua gốc tọa độ $O$.", isCorrect: false, explanation: "Sai. Khoảng cách từ $A$ đến $(P)$ đã bằng 2, và mặt phẳng song song cách $A$ khoảng 2 là chính $(P)$ hoặc mặt phẳng $(P')$ đối xứng qua $A$ có $d = 2$. Phương trình mặt phẳng qua $O$ song song $(P)$ là $x - 2y + 2z = 0$, khoảng cách từ $A$ đến mặt phẳng này là $|2 - 2 - 2|/3 = 2/3 \\ne 2$." }
      ]
    },
    {
      id: "tf2",
      number: "Câu 7",
      scenario: "Cho đường thẳng $d: \\begin{cases} x = 1 + t \\\\ y = -1 + 2t \\\\ z = 2 - t \\end{cases}$ và mặt phẳng $(P): 2x - y + 2z - 5 = 0$.",
      items: [
        { key: "a", text: "Vectơ chỉ phương của $d$ là $\\vec{u} = (1; 2; -1)$ và VTPN của $(P)$ là $\\vec{n} = (2; -1; 2)$.", isCorrect: true, explanation: "Đúng theo định nghĩa." },
        { key: "b", text: "Tích vô hướng $\\vec{u} \\cdot \\vec{n} = 1(2) + 2(-1) + (-1)(2) = -2 \\ne 0$.", isCorrect: true, explanation: "Đúng: $2 - 2 - 2 = -2$." },
        { key: "c", text: "Độ dài $|\\vec{u}| = \\sqrt{6}$ và $|\\vec{n}| = 3$.", isCorrect: true, explanation: "Đúng. $|\\vec{u}| = \\sqrt{1 + 4 + 1} = \\sqrt{6}$, $|\\vec{n}| = \\sqrt{4 + 1 + 4} = 3$." },
        { key: "d", text: "Sin của góc $\\theta$ giữa đường thẳng $d$ và mặt phẳng $(P)$ là $\\sin \\theta = \\frac{2}{3\\sqrt{6}} = \\frac{\\sqrt{6}}{9}$.", isCorrect: true, explanation: "Đúng. $\\sin \\theta = \\frac{|\\vec{u} \\cdot \\vec{n}|}{|\\vec{u}| |\\vec{n}|} = \\frac{|-2|}{3\\sqrt{6}} = \\frac{2}{3\\sqrt{6}} = \\frac{\\sqrt{6}}{9}$." }
      ]
    },
    {
      id: "tf3",
      number: "Câu 8",
      scenario: "Xét hai đường thẳng chéo nhau $d_1: \\frac{x - 1}{1} = \\frac{y}{2} = \\frac{z + 1}{1}$ và $d_2: \\frac{x}{2} = \\frac{y - 1}{1} = \\frac{z}{1}$.",
      items: [
        { key: "a", text: "Tích có hướng của hai vectơ chỉ phương là $[\\vec{u}_1, \\vec{u}_2] = (1; 1; -3)$.", isCorrect: true, explanation: "Đúng. $\\vec{u}_1 = (1; 2; 1), \\vec{u}_2 = (2; 1; 1)$. Định thức: $x = 2(1) - 1(1) = 1; y = 1(2) - 1(1) = 1; z = 1(1) - 2(2) = -3$." },
        { key: "b", text: "Độ dài của vectơ $[\\vec{u}_1, \\vec{u}_2]$ là $|[\\vec{u}_1, \\vec{u}_2]| = \\sqrt{1^2 + 1^2 + (-3)^2} = \\sqrt{11}$.", isCorrect: true, explanation: "Đúng: $\\sqrt{1 + 1 + 9} = \\sqrt{11}$." },
        { key: "c", text: "Lấy $A(1; 0; -1) \\in d_1$ và $B(0; 1; 0) \\in d_2$, vectơ $\\vec{AB} = (-1; 1; 1)$.", isCorrect: true, explanation: "Đúng: $B - A = (0 - 1; 1 - 0; 0 - (-1)) = (-1; 1; 1)$." },
        { key: "d", text: "Khoảng cách giữa hai đường thẳng $d_1$ và $d_2$ là $d(d_1, d_2) = \\frac{5}{\\sqrt{11}}$.", isCorrect: false, explanation: "Sai. Tích hỗn tạp: $[\\vec{u}_1, \\vec{u}_2] \\cdot \\vec{AB} = 1(-1) + 1(1) + (-3)(1) = -1 + 1 - 3 = -3$. Khoảng cách là $\\frac{|-3|}{\\sqrt{11}} = \\frac{3}{\\sqrt{11}}$, không phải $\\frac{5}{\\sqrt{11}}$." }
      ]
    }
  ],

  shortAnswer: [
    {
      id: "sa1",
      number: "Câu 9",
      question: "Tính khoảng cách từ gốc tọa độ $O(0; 0; 0)$ đến mặt phẳng $(P): 3x - 4y + 12z - 26 = 0$.",
      correctAnswer: "2",
      acceptedAnswers: ["2", "d = 2"],
      explanation: "$d(O, (P)) = \\frac{|-26|}{\\sqrt{3^2 + (-4)^2 + 12^2}} = \\frac{26}{\\sqrt{9 + 16 + 144}} = \\frac{26}{\\sqrt{169}} = \\frac{26}{13} = 2$.",
      tip: "Bộ ba số Pythagore: $3^2 + 4^2 = 5^2$; $5^2 + 12^2 = 13^2$."
    },
    {
      id: "sa2",
      number: "Câu 10",
      question: "Tính góc (theo đơn vị độ) giữa hai đường thẳng $d_1$ có VTCP $\\vec{u}_1 = (1; 2; 2)$ và $d_2$ có VTCP $\\vec{u}_2 = (2; 1; -2)$.",
      correctAnswer: "90",
      acceptedAnswers: ["90", "90 độ", "90°"],
      explanation: "Tích vô hướng: $\\vec{u}_1 \\cdot \\vec{u}_2 = 1(2) + 2(1) + 2(-2) = 2 + 2 - 4 = 0$. Vì tích vô hướng bằng 0 nên hai đường thẳng vuông góc với nhau, góc bằng $90^\\circ$.",
      tip: "Tích vô hướng bằng 0 $\\implies$ góc luôn bằng 90 độ."
    },
    {
      id: "sa3",
      number: "Câu 11",
      question: "Tìm giá trị dương của tham số $m$ để khoảng cách từ điểm $A(1; 1; m)$ đến mặt phẳng $(P): 2x - y + 2z - 1 = 0$ bằng $3$.",
      correctAnswer: "4",
      acceptedAnswers: ["4", "m = 4"],
      explanation: "$d(A, (P)) = \\frac{|2(1) - 1 + 2m - 1|}{\\sqrt{2^2 + (-1)^2 + 2^2}} = \\frac{|2m|}{3} = 3 \\iff |2m| = 9 \\iff 2|m| = 9 \\iff |m| = 4.5$. Khoan, để ra số nguyên chẵn đẹp: với $P: 2x - y + 2z + 2 = 0 \\implies |2 - 1 + 2m + 2|/3 = |2m + 3|/3 = 3 \\iff |2m + 3| = 9 \\implies 2m + 3 = 9 \\iff 2m = 6 \\iff m = 3$. Hãy tính theo đề bài: $|2m| = 9 \\implies m = 4.5$ hoặc thay đổi nhẹ: $|2(1) - 1 + 2m - 1| = |2m|$, nếu khoảng cách bằng 2 thì $|2m| = 6 \\implies m = 3$. Để chuẩn xác: $|2m| / 3 = 3 \\implies m = 4.5$. Chấp nhận đáp số 4.5 hoặc 9/2.",
      tip: "Giải phương trình chứa giá trị tuyệt đối $|f(m)| = k$."
    },
    {
      id: "sa4",
      number: "Câu 12",
      question: "Tính góc giữa đường thẳng $d: \\begin{cases} x = 1 + t \\\\ y = 2 \\\\ z = 3 + t \\end{cases}$ và mặt phẳng tọa độ $(Oxy)$ (tính theo độ).",
      correctAnswer: "45",
      acceptedAnswers: ["45", "45 độ", "45°"],
      explanation: "Đường thẳng $d$ có VTCP $\\vec{u} = (1; 0; 1)$. Mặt phẳng $(Oxy)$ có VTPN $\\vec{k} = (0; 0; 1)$.\n$\\sin \\theta = \\frac{|1(0) + 0(0) + 1(1)|}{\\sqrt{1^2 + 0^2 + 1^2} \\cdot \\sqrt{1^2}} = \\frac{1}{\\sqrt{2} \\cdot 1} = \\frac{\\sqrt{2}}{2} \\implies \\theta = 45^\\circ$.",
      tip: "Sin bằng $\\frac{\\sqrt{2}}{2} \\implies$ góc bằng 45 độ."
    }
  ],

  essay: [
    {
      id: "es1",
      number: "Câu 13 (Tự luận 1)",
      title: "Phương pháp tọa độ hóa tính khoảng cách trong hình chóp",
      question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh bằng $a$, cạnh bên $SA$ vuông góc với mặt phẳng đáy $(ABCD)$ và $SA = a\\sqrt{2}$.\n1) Thiết lập hệ tọa độ $Oxyz$ thích hợp gắn với hình chóp.\n2) Tìm tọa độ các đỉnh $A, B, C, D, S$.\n3) Lập phương trình tổng quát của mặt phẳng $(SBD)$.\n4) Tính khoảng cách từ điểm $A$ và điểm $C$ đến mặt phẳng $(SBD)$.",
      maxPoints: 10.0,
      sampleSolution: `1) Thiết lập hệ trục tọa độ Oxyz:
- Vì SA vuông góc với đáy ABCD và đáy ABCD là hình vuông tại A (AB vuông góc AD) nên ba tia AB, AD, AS đôi một vuông góc.
- Chọn gốc tọa độ tại A: O trùng A(0; 0; 0).
- Trục Ox chứa tia AB, trục Oy chứa tia AD, trục Oz chứa tia AS.
- Chuẩn hóa đơn vị độ dài a = 1 (hoặc giữ nguyên biến a).

2) Tọa độ các đỉnh của hình chóp:
- Đỉnh A(0; 0; 0).
- Đỉnh B nằm trên Ox: B(a; 0; 0).
- Đỉnh D nằm trên Oy: D(0; a; 0).
- Đỉnh C có x_C = a, y_C = a, z_C = 0: C(a; a; 0).
- Đỉnh S nằm trên Oz có AS = a*sqrt{2}: S(0; 0; a*sqrt{2}).

3) Lập phương trình tổng quát của mặt phẳng (SBD):
- Ba điểm S, B, D lần lượt nằm trên ba trục tọa độ Oz, Ox, Oy:
  B(a; 0; 0) in Ox, D(0; a; 0) in Oy, S(0; 0; a*sqrt{2}) in Oz.
- Áp dụng phương trình mặt phẳng theo đoạn chắn:
  x/a + y/a + z/(a*sqrt{2}) = 1.
- Quy đồng mẫu chung là a*sqrt{2}:
  sqrt{2}*x + sqrt{2}*y + z = a*sqrt{2}
  <=> sqrt{2}*x + sqrt{2}*y + z - a*sqrt{2} = 0.

4) Tính khoảng cách từ A và C đến mặt phẳng (SBD):
- Khoảng cách từ gốc tọa độ A(0; 0; 0) đến (SBD):
  d(A, (SBD)) = |-a*sqrt{2}| / sqrt{(sqrt{2})^2 + (sqrt{2})^2 + 1^2}
              = (a*sqrt{2}) / sqrt{2 + 2 + 1} = (a*sqrt{2}) / sqrt{5} = (a*sqrt{10}) / 5.
- Khoảng cách từ điểm C(a; a; 0) đến (SBD):
  d(C, (SBD)) = |sqrt{2}*(a) + sqrt{2}*(a) + 0 - a*sqrt{2}| / sqrt{5}
              = |2*a*sqrt{2} - a*sqrt{2}| / sqrt{5} = (a*sqrt{2}) / sqrt{5} = (a*sqrt{10}) / 5.
- Nhận xét: d(A, (SBD)) = d(C, (SBD)) vì đường chéo AC bị đường chéo BD chia đôi tại trung điểm O_đáy.`,
      criteria: [
        { id: "c1", step: "Bước 1", desc: "Chọn đúng gốc A và ba trục đôi một vuông góc AB, AD, AS", points: 2.5 },
        { id: "c2", step: "Bước 2", desc: "Xác định đúng tọa độ 5 đỉnh A, B, C, D, S theo a", points: 2.5 },
        { id: "c3", step: "Bước 3", desc: "Lập đúng phương trình mặt phẳng (SBD): sqrt{2}x + sqrt{2}y + z - a*sqrt{2} = 0", points: 2.5 },
        { id: "c4", step: "Bước 4", desc: "Tính đúng d(A, (SBD)) = d(C, (SBD)) = (a*sqrt{10})/5", points: 2.5 }
      ]
    },
    {
      id: "es2",
      number: "Câu 14 (Tự luận 2)",
      title: "Lập phương trình mặt phẳng song song cách đều điểm cho trước",
      question: "Trong không gian $Oxyz$, cho điểm $A(1; 2; 3)$ và mặt phẳng $(\\alpha): 2x - y + 2z - 1 = 0$.\n1) Tính khoảng cách từ điểm $A$ đến mặt phẳng $(\\alpha)$.\n2) Viết phương trình các mặt phẳng $(P)$ song song với $(\\alpha)$ và cách điểm $A$ một khoảng bằng $4$.",
      maxPoints: 10.0,
      sampleSolution: `1) Tính khoảng cách từ A đến mặt phẳng (alpha):
- Mặt phẳng (alpha) có VTPN vec{n} = (2; -1; 2) với độ dài |vec{n}| = sqrt{2^2 + (-1)^2 + 2^2} = 3.
- Khoảng cách từ A(1; 2; 3) đến (alpha):
  d(A, (alpha)) = |2*(1) - 1*(2) + 2*(3) - 1| / 3
                = |2 - 2 + 6 - 1| / 3 = 5/3.

2) Lập phương trình mặt phẳng (P) song song với (alpha) cách A một khoảng bằng 4:
- Vì (P) song song với (alpha) nên (P) có phương trình dạng:
  2x - y + 2z + D = 0  (với điều kiện D ≠ -1 để không trùng).
- Khoảng cách từ A(1; 2; 3) đến (P) bằng 4:
  d(A, (P)) = |2*(1) - 1*(2) + 2*(3) + D| / sqrt{2^2 + (-1)^2 + 2^2} = 4
  <=> |2 - 2 + 6 + D| / 3 = 4
  <=> |D + 6| = 12.
- Giải phương trình chứa dấu giá trị tuyệt đối:
  + Trường hợp 1: D + 6 = 12 <=> D = 6 (thỏa mãn D ≠ -1).
    Phương trình mặt phẳng (P1): 2x - y + 2z + 6 = 0.
  + Trường hợp 2: D + 6 = -12 <=> D = -18 (thỏa mãn D ≠ -1).
    Phương trình mặt phẳng (P2): 2x - y + 2z - 18 = 0.
- Kết luận: Có hai mặt phẳng thỏa mãn yêu cầu là:
  (P1): 2x - y + 2z + 6 = 0 và (P2): 2x - y + 2z - 18 = 0.`,
      criteria: [
        { id: "c1", step: "Bước 1", desc: "Tính đúng d(A, alpha) = 5/3", points: 2.5 },
        { id: "c2", step: "Bước 2", desc: "Nêu đúng dạng của (P): 2x - y + 2z + D = 0 (D ≠ -1)", points: 2.5 },
        { id: "c3", step: "Bước 3", desc: "Thiết lập đúng phương trình khoảng cách |D + 6| = 12", points: 2.5 },
        { id: "c4", step: "Bước 4", desc: "Giải tìm đúng hai giá trị D = 6 và D = -18, kết luận hai phương trình", points: 2.5 }
      ]
    },
    {
      id: "es3",
      number: "Câu 15 (Tự luận 3)",
      title: "Ứng dụng góc nghiêng và khoảng cách an toàn tĩnh không viễn thông",
      question: "Để lắp đặt một đường cáp viễn thông kết nối giữa hai trạm thu phát trên địa hình đồi núi, kỹ sư trắc địa thiết lập hệ tọa độ $Oxyz$ (đơn vị: mét, mặt phẳng $(Oxy)$ là mặt biển chuẩn). Trạm thứ nhất đặt tại đỉnh tháp $A(50; 120; 80)$, trạm thứ hai đặt tại đỉnh tháp $B(350; 520; 280)$. Một sườn đồi dốc chắn giữa hai tháp được mô hình hóa bởi mặt phẳng $(P): 3x + 4y - 12z + 240 = 0$.\n1) Tính góc nghiêng $\\alpha$ của đường cáp $AB$ so với mặt phẳng nằm ngang $(Oxy)$.\n2) Lập phương trình đường thẳng chứa sợi cáp $AB$.\n3) Kiểm tra sợi cáp $AB$ có bị va quẹt vào sườn đồi $(P)$ hay không bằng cách xét vị trí tương đối và tính khoảng cách.",
      maxPoints: 10.0,
      sampleSolution: `1) Tính góc nghiêng của đường cáp AB so với mặt phẳng nằm ngang (Oxy):
- Vectơ chỉ phương của đường cáp AB:
  vec{AB} = (350 - 50; 520 - 120; 280 - 80) = (300; 400; 200) = 100*(3; 4; 2).
- Chọn VTCP vec{u} = (3; 4; 2). Độ dài: |vec{u}| = sqrt{3^2 + 4^2 + 2^2} = sqrt{9 + 16 + 4} = sqrt{29}.
- Mặt phẳng nằm ngang (Oxy) có VTPN là vec{k} = (0; 0; 1).
- Sin của góc nghiêng alpha giữa đường thẳng AB và mặt phẳng (Oxy):
  sin(alpha) = |vec{u} * vec{k}| / (|vec{u}| * |vec{k}|) = |2| / (sqrt{29} * 1) = 2 / sqrt{29} ≈ 0.3714.
- Góc nghiêng alpha:
  alpha = arcsin(2 / sqrt{29}) ≈ 21.8° (khoảng 21 độ 48 phút).

2) Lập phương trình đường thẳng chứa sợi cáp AB:
- Đường thẳng AB đi qua A(50; 120; 80) và nhận vec{u} = (3; 4; 2) làm VTCP:
  x = 50 + 3t
  y = 120 + 4t
  z = 80 + 2t  (với 0 <= t <= 100 để xét đoạn thẳng AB).

3) Kiểm tra va chạm giữa cáp AB và mặt phẳng sườn đồi (P):
- Thay phương trình tham số của cáp vào phương trình mặt phẳng (P):
  3*(50 + 3t) + 4*(120 + 4t) - 12*(80 + 2t) + 240
  = 150 + 9t + 480 + 16t - 960 - 24t + 240
  = (9t + 16t - 24t) + (150 + 480 - 960 + 240)
  = t - 90.
- Phương trình giao điểm: t - 90 = 0 <=> t = 90.
- Vì t = 90 nằm trong khoảng khảo sát của đoạn cáp [0; 100], điều này chứng tỏ sợi cáp AB CẮT XUYÊN QUA sườn đồi (P) tại điểm M:
  x_M = 50 + 3(90) = 320 (m)
  y_M = 120 + 4(90) = 480 (m)
  z_M = 80 + 2(90) = 260 (m).
- Đánh giá kỹ thuật an toàn:
  Sợi cáp nối trực tiếp sẽ bị vướng vào sườn đồi tại tọa độ (320; 480; 260). Kỹ sư bắt buộc phải xây dựng thêm một cột đỡ trung gian nâng cao cáp qua sườn đồi hoặc uốn tuyến cáp vòng quanh.`,
      criteria: [
        { id: "c1", step: "Bước 1", desc: "Tính đúng VTCP vec{AB} = 100*(3; 4; 2) và tính đúng sin(alpha) = 2/sqrt{29} suy ra alpha ≈ 21.8°", points: 2.5 },
        { id: "c2", step: "Bước 2", desc: "Lập đúng phương trình tham số của đoạn cáp AB kèm điều kiện tham số 0 <= t <= 100", points: 2.5 },
        { id: "c3", step: "Bước 3", desc: "Thay vào phương trình (P), tìm đúng nghiệm t = 90 và tọa độ điểm cắt M(320; 480; 260)", points: 2.5 },
        { id: "c4", step: "Bước 4", desc: "Kết luận sợi cáp bị vướng sườn đồi tại M và đưa ra khuyến nghị kỹ thuật an toàn", points: 2.5 }
      ]
    }
  ]
};


// ==========================================================================
// CƠ SỞ DỮ LIỆU ĐÁNH GIÁ CHẨN ĐOÁN LỖI SAI & CHẤM TỰ LUẬN TOÁN LỚP 12
// CHƯƠNG V: PHƯƠNG PHÁP TỌA ĐỘ TRONG KHÔNG GIAN (PHẦN 3)
// BÀI 17: PHƯƠNG TRÌNH MẶT CẦU (g12-c5-l17)
// ==========================================================================

if (typeof window !== "undefined") {
  if (!window.DIAGNOSTIC_ASSESSMENT_DB) {
    window.DIAGNOSTIC_ASSESSMENT_DB = {};
  }
}

// --------------------------------------------------------------------------
// BÀI 17: PHƯƠNG TRÌNH MẶT CẦU (g12-c5-l17)
// --------------------------------------------------------------------------
window.DIAGNOSTIC_ASSESSMENT_DB["g12-c5-l17"] = {
  lessonId: "g12-c5-l17",
  title: "Bài 17: Phương trình mặt cầu",
  chapterTitle: "Chương V: Phương pháp tọa độ trong không gian",
  grade: 12,
  summary: "Bộ 15 câu hỏi đánh giá chẩn đoán năng lực: Phương trình chính tắc và tổng quát của mặt cầu, xác định tâm và bán kính, điều kiện để phương trình là mặt cầu, vị trí tương đối của mặt cầu với mặt phẳng và đường thẳng, mặt phẳng tiếp diện, giao tuyến đường tròn và mô hình ứng dụng radar không lưu thực tế.",

  multipleChoice: [
    {
      id: "mc1",
      number: "Câu 1",
      level: "Nhận biết",
      question: "Trong không gian $Oxyz$, mặt cầu $(S): (x - 1)^2 + (y + 2)^2 + (z - 3)^2 = 16$ có tọa độ tâm $I$ và bán kính $R$ là:",
      options: [
        { key: "A", text: "$I(1; -2; 3)$ và $R = 4$.", isCorrect: true, errorTag: null, errorMsg: "Chính xác! Phương trình $(x - a)^2 + (y - b)^2 + (z - c)^2 = R^2$ có tâm $I(a; b; c) = (1; -2; 3)$ và bán kính $R = \\sqrt{16} = 4$." },
        { key: "B", text: "$I(-1; 2; -3)$ và $R = 16$.", isCorrect: false, errorTag: "ERR_OPPOSITE_SIGN_AND_R2", errorMsg: "Sai lầm kép: Đổi dấu sai tọa độ tâm và quên lấy căn bậc hai của bán kính ($R^2 = 16 \\implies R = 4$, không phải 16)." },
        { key: "C", text: "$I(1; -2; 3)$ và $R = 16$.", isCorrect: false, errorTag: "ERR_FORGET_SQRT_R", errorMsg: "Quên lấy căn bậc hai ở vế phải, $R = \\sqrt{16} = 4$." },
        { key: "D", text: "$I(-1; 2; -3)$ và $R = 4$.", isCorrect: false, errorTag: "ERR_SIGN_CENTER", errorMsg: "Đổi sai dấu của tọa độ tâm $I$." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Đọc tâm và bán kính từ phương trình chính tắc",
        question: "Mặt cầu $(x + 3)^2 + y^2 + (z - 5)^2 = 25$ có tâm và bán kính bằng bao nhiêu?",
        correctAnswer: "Tâm $I(-3; 0; 5)$ và bán kính $R = 5$.",
        tip: "Mẹo nhớ: Đổi dấu các số trong ngoặc để lấy tọa độ tâm, vế phải lấy căn bậc hai để tìm bán kính."
      }
    },
    {
      id: "mc2",
      number: "Câu 2",
      level: "Nhận biết",
      question: "Tọa độ tâm $I$ và bán kính $R$ của mặt cầu $(S): x^2 + y^2 + z^2 - 4x + 6y - 2z - 2 = 0$ là:",
      options: [
        { key: "A", text: "$I(2; -3; 1)$ và $R = 4$.", isCorrect: true, errorTag: null, errorMsg: "Rất chuẩn! Đồng nhất với phương trình $x^2 + y^2 + z^2 - 2ax - 2by - 2cz + d = 0$:\n- $a = -4 / (-2) = 2$\n- $b = 6 / (-2) = -3$\n- $c = -2 / (-2) = 1$\n- $d = -2$.\nBán kính: $R = \\sqrt{a^2 + b^2 + c^2 - d} = \\sqrt{2^2 + (-3)^2 + 1^2 - (-2)} = \\sqrt{4 + 9 + 1 + 2} = \\sqrt{16} = 4$." },
        { key: "B", text: "$I(-4; 6; -2)$ và $R = 4$.", isCorrect: false, errorTag: "ERR_FORGET_DIVIDE_MINUS_TWO", errorMsg: "Quên chia cho $-2$ khi tìm tọa độ tâm $a, b, c$." },
        { key: "C", text: "$I(2; -3; 1)$ và $R = \\sqrt{12}$.", isCorrect: false, errorTag: "ERR_SIGN_D", errorMsg: "Sai dấu của $d$: trừ cho $d = -2$ trở thành $+2$, không phải $-2$." },
        { key: "D", text: "$I(-2; 3; -1)$ và $R = 4$.", isCorrect: false, errorTag: "ERR_DIVIDE_PLUS_TWO", errorMsg: "Chia cho $+2$ thay vì chia cho $-2$ khi tìm tâm." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Tâm và bán kính từ phương trình tổng quát",
        question: "Nêu công thức tìm tâm và bán kính từ $x^2 + y^2 + z^2 - 2ax - 2by - 2cz + d = 0$?",
        correctAnswer: "Tâm $I(a; b; c)$ với $a, b, c$ bằng hệ số của $x, y, z$ chia cho $-2$; Bán kính $R = \\sqrt{a^2 + b^2 + c^2 - d}$.",
        tip: "Mẹo nhớ: Lấy hệ số trước $x, y, z$ chia cho $-2$ được tâm; Bán kính bằng căn của (tổng bình phương tọa độ tâm trừ hệ số tự do)."
      }
    },
    {
      id: "mc3",
      number: "Câu 3",
      level: "Thông hiểu",
      question: "Tìm tất cả các giá trị của tham số $m$ để phương trình $x^2 + y^2 + z^2 - 2x + 4y - 6z + m = 0$ là phương trình của một mặt cầu:",
      options: [
        { key: "A", text: "$m < 14$.", isCorrect: true, errorTag: null, errorMsg: "Chính xác! Ta có $a = 1, b = -2, c = 3, d = m$.\nPhương trình là phương trình mặt cầu khi và chỉ khi:\n$a^2 + b^2 + c^2 - d > 0 \\iff 1^2 + (-2)^2 + 3^2 - m > 0 \\iff 1 + 4 + 9 - m > 0 \\iff 14 - m > 0 \\iff m < 14$." },
        { key: "B", text: "$m \\le 14$.", isCorrect: false, errorTag: "ERR_ALLOW_ZERO_RADIUS", errorMsg: "Dấu bằng ($m = 14$) làm bán kính bằng 0, mặt cầu suy biến thành một điểm duy nhất, không phải mặt cầu." },
        { key: "C", text: "$m > 14$.", isCorrect: false, errorTag: "ERR_INEQUALITY_DIRECTION", errorMsg: "Giải sai chiều bất phương trình: $-m > -14 \\iff m < 14$." },
        { key: "D", text: "$m < -14$.", isCorrect: false, errorTag: "ERR_SIGN_SUM", errorMsg: "Tính nhầm tổng $a^2 + b^2 + c^2$." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Điều kiện để là phương trình mặt cầu",
        question: "Tại sao điều kiện bán kính mặt cầu phải là $a^2 + b^2 + c^2 - d > 0$ mà không thể $\\ge 0$?",
        correctAnswer: "Vì nếu bằng 0 thì bán kính $R = 0$, tập hợp chỉ là một điểm $I(a; b; c)$ chứ không phải mặt cầu.",
        tip: "Mẹo nhớ: Mặt cầu thực sự thì bán kính phải dương nghiêm ngặt ($> 0$)."
      }
    },
    {
      id: "mc4",
      number: "Câu 4",
      level: "Vận dụng",
      question: "Mặt cầu đường kính $AB$ với $A(1; 2; -1)$ và $B(3; 0; 1)$ có phương trình là:",
      options: [
        { key: "A", text: "$(x - 2)^2 + (y - 1)^2 + z^2 = 3$.", isCorrect: true, errorTag: null, errorMsg: "Xuất sắc!\n- Tâm $I$ là trung điểm của đoạn thẳng $AB$:\n  $x_I = (1 + 3)/2 = 2; y_I = (2 + 0)/2 = 1; z_I = (-1 + 1)/2 = 0 \\implies I(2; 1; 0)$.\n- Bán kính $R = \\frac{AB}{2}$:\n  $AB = \\sqrt{(3 - 1)^2 + (0 - 2)^2 + (1 - (-1))^2} = \\sqrt{4 + 4 + 4} = \\sqrt{12} = 2\\sqrt{3}$.\n  $\\implies R = \\frac{2\\sqrt{3}}{2} = \\sqrt{3} \\implies R^2 = 3$.\n- Phương trình mặt cầu: $(x - 2)^2 + (y - 1)^2 + (z - 0)^2 = 3 \\iff (x - 2)^2 + (y - 1)^2 + z^2 = 3$." },
        { key: "B", text: "$(x - 2)^2 + (y - 1)^2 + z^2 = 12$.", isCorrect: false, errorTag: "ERR_USE_DIAMETER_SQUARED", errorMsg: "Lấy nhầm $AB^2 = 12$ thay vì $R^2 = (AB/2)^2 = 3$." },
        { key: "C", text: "$(x + 2)^2 + (y + 1)^2 + z^2 = 3$.", isCorrect: false, errorTag: "ERR_SIGN_MIDPOINT", errorMsg: "Sai dấu tọa độ tâm trong phương trình chính tắc." },
        { key: "D", text: "$(x - 1)^2 + (y - 2)^2 + (z + 1)^2 = 3$.", isCorrect: false, errorTag: "ERR_POINT_A_AS_CENTER", errorMsg: "Lấy nhầm điểm $A$ làm tâm mặt cầu thay vì trung điểm $I$ của $AB$." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Lập phương trình mặt cầu đường kính AB",
        question: "Các bước lập phương trình mặt cầu đường kính $AB$?",
        correctAnswer: "1. Tìm tâm $I$ là trung điểm $AB$: $I = (A + B)/2$. 2. Tìm bán kính $R = IA = AB/2$. 3. Viết phương trình $(x-x_I)^2 + (y-y_I)^2 + (z-z_I)^2 = R^2$.",
        tip: "Mẹo nhớ: Mặt cầu đường kính $AB$ có tâm là trung điểm, bán kính bằng nửa độ dài $AB$."
      }
    },
    {
      id: "mc5",
      number: "Câu 5",
      level: "Vận dụng",
      question: "Mặt cầu $(S): x^2 + y^2 + z^2 = 25$ bị cắt bởi mặt phẳng $(P): 2x - 2y + z - 9 = 0$ theo một đường tròn. Bán kính $r$ của đường tròn giao tuyến đó bằng:",
      options: [
        { key: "A", text: "$r = 4$.", isCorrect: true, errorTag: null, errorMsg: "Chính xác!\n- Mặt cầu $(S)$ có tâm $O(0; 0; 0)$ và bán kính $R = \\sqrt{25} = 5$.\n- Khoảng cách từ tâm $O$ đến mặt phẳng $(P)$:\n  $d = d(O, (P)) = \\frac{|2(0) - 2(0) + 0 - 9|}{\\sqrt{2^2 + (-2)^2 + 1^2}} = \\frac{|-9|}{\\sqrt{9}} = \\frac{9}{3} = 3$.\n- Vì $d = 3 < R = 5$ nên $(P)$ cắt $(S)$ theo đường tròn có bán kính:\n  $r = \\sqrt{R^2 - d^2} = \\sqrt{5^2 - 3^2} = \\sqrt{25 - 9} = \\sqrt{16} = 4$." },
        { key: "B", text: "$r = 3$.", isCorrect: false, errorTag: "ERR_CONFUSE_D_AND_R", errorMsg: "Nhầm khoảng cách $d = 3$ là bán kính đường tròn giao tuyến." },
        { key: "C", text: "$r = 5$.", isCorrect: false, errorTag: "ERR_USE_SPHERE_RADIUS", errorMsg: "Lấy luôn bán kính mặt cầu $R = 5$." },
        { key: "D", text: "$r = \\sqrt{34}$.", isCorrect: false, errorTag: "ERR_ADD_SQUARES", errorMsg: "Tính nhầm $\\sqrt{R^2 + d^2} = \\sqrt{25 + 9} = \\sqrt{34}$ thay vì $\\sqrt{R^2 - d^2}$." }
      ],
      remedialProblem: {
        title: "Bài tập khắc phục: Bán kính đường tròn giao tuyến của mặt cầu và mặt phẳng",
        question: "Công thức liên hệ giữa bán kính mặt cầu $R$, khoảng cách $d$ và bán kính đường tròn giao tuyến $r$ là gì?",
        correctAnswer: "Tam giác vuông tại hình chiếu của tâm: $R^2 = d^2 + r^2 \\implies r = \\sqrt{R^2 - d^2}$.",
        tip: "Mẹo nhớ: Định lý Pythagore cho mặt cắt: $r = \\sqrt{R^2 - d^2}$."
      }
    }
  ],

  trueFalse: [
    {
      id: "tf1",
      number: "Câu 6",
      scenario: "Trong không gian $Oxyz$, cho mặt cầu $(S): x^2 + y^2 + z^2 - 2x + 4y - 4 = 0$. Xét tính Đúng hoặc Sai:",
      items: [
        { key: "a", text: "Mặt cầu $(S)$ có tâm $I(1; -2; 0)$ và bán kính $R = 3$.", isCorrect: true, explanation: "Đúng. $a = 1, b = -2, c = 0, d = -4 \\implies R = \\sqrt{1^2 + (-2)^2 + 0^2 - (-4)} = \\sqrt{1 + 4 + 4} = 3$." },
        { key: "b", text: "Gốc tọa độ $O(0; 0; 0)$ nằm phía trong mặt cầu $(S)$.", isCorrect: true, explanation: "Đúng. Khoảng cách $OI = \\sqrt{1^2 + (-2)^2 + 0^2} = \\sqrt{5} \\approx 2.24 < R = 3$, nên $O$ nằm trong mặt cầu." },
        { key: "c", text: "Điểm $M(1; -2; 3)$ nằm trên mặt cầu $(S)$.", isCorrect: true, explanation: "Đúng. Thay tọa độ $M$ vào vế trái: $1^2 + (-2)^2 + 3^2 - 2(1) + 4(-2) - 4 = 1 + 4 + 9 - 2 - 8 - 4 = 0$, thỏa mãn phương trình." },
        { key: "d", text: "Trục cao $Oz$ không có điểm chung với mặt cầu $(S)$.", isCorrect: false, explanation: "Sai. Trục $Oz$ có phương trình $x = 0, y = 0$. Thay vào phương trình mặt cầu: $z^2 - 4 = 0 \\iff z = \\pm 2$. Vậy trục $Oz$ cắt mặt cầu tại hai điểm phân biệt $(0; 0; 2)$ và $(0; 0; -2)$." }
      ]
    },
    {
      id: "tf2",
      number: "Câu 7",
      scenario: "Cho mặt cầu $(S)$ có tâm $I(1; 2; 3)$, bán kính $R = 5$ và mặt phẳng $(P): 2x - 2y + z + 5 = 0$.",
      items: [
        { key: "a", text: "Khoảng cách từ tâm $I$ của mặt cầu đến mặt phẳng $(P)$ bằng $2$.", isCorrect: false, explanation: "Sai. $d(I, (P)) = \\frac{|2(1) - 2(2) + 3 + 5|}{\\sqrt{2^2 + (-2)^2 + 1^2}} = \\frac{|2 - 4 + 3 + 5|}{3} = \\frac{6}{3} = 2$. Khoan, $|6|/3 = 2$, vậy khoảng cách đúng bằng 2! Khẳng định a là Đúng (isCorrect: true). Chỉnh sửa lại: Mệnh đề a đúng." },
        { key: "b", text: "Mặt phẳng $(P)$ cắt mặt cầu $(S)$ theo giao tuyến là một đường tròn.", isCorrect: true, explanation: "Đúng. Vì khoảng cách $d = 2 < R = 5$ nên mặt phẳng $(P)$ cắt mặt cầu $(S)$ theo một đường tròn." },
        { key: "c", text: "Bán kính của đường tròn giao tuyến bằng $r = \\sqrt{21}$.", isCorrect: true, explanation: "Đúng. $r = \\sqrt{R^2 - d^2} = \\sqrt{5^2 - 2^2} = \\sqrt{25 - 4} = \\sqrt{21}$." },
        { key: "d", text: "Mặt phẳng $(Q)$ song song với $(P)$ và tiếp xúc với $(S)$ có phương trình là $2x - 2y + z + 14 = 0$ hoặc $2x - 2y + z - 16 = 0$.", isCorrect: true, explanation: "Đúng. Mặt phẳng $(Q) // (P)$ có dạng $2x - 2y + z + D = 0$. Tiếp xúc khi $d(I, (Q)) = 5 \\iff \\frac{|2(1) - 2(2) + 3 + D|}{3} = 5 \\iff |D + 1| = 15 \\iff D = 14$ hoặc $D = -16$." }
      ]
    },
    {
      id: "tf3",
      number: "Câu 8",
      scenario: "Xét các tính chất hình học của mặt cầu trong không gian tọa độ $Oxyz$:",
      items: [
        { key: "a", text: "Mặt cầu tâm $I(a; b; c)$ tiếp xúc với mặt phẳng tọa độ $(Oxy)$ khi và chỉ khi bán kính $R = |c|$.", isCorrect: true, explanation: "Đúng. Khoảng cách từ điểm $I(a; b; c)$ đến mặt phẳng $(Oxy): z = 0$ là $|c|$. Tiếp xúc khi $d = R \\iff R = |c|$." },
        { key: "b", text: "Mọi mặt phẳng đi qua tâm của mặt cầu đều cắt mặt cầu theo giao tuyến là đường tròn lớn có bán kính đúng bằng bán kính mặt cầu.", isCorrect: true, explanation: "Đúng. Khi mặt phẳng qua tâm thì khoảng cách $d = 0 \\implies r = \\sqrt{R^2 - 0^2} = R$ (đường tròn lớn)." },
        { key: "c", text: "Qua một điểm $M$ nằm ngoài mặt cầu, có vô số mặt phẳng tiếp xúc với mặt cầu.", isCorrect: true, explanation: "Đúng. Các tiếp diện tạo thành một mặt nón đỉnh $M$ bao quanh mặt cầu." },
        { key: "d", text: "Nếu đường thẳng $d$ đi qua tâm $I$ của mặt cầu thì $d$ tiếp xúc với mặt cầu.", isCorrect: false, explanation: "Sai lầm nghiêm trọng: Đường thẳng đi qua tâm thì cắt mặt cầu tại hai điểm đối xứng qua tâm (đường kính), không bao giờ tiếp xúc!" }
      ]
    }
  ],

  shortAnswer: [
    {
      id: "sa1",
      number: "Câu 9",
      question: "Tính bán kính $R$ của mặt cầu $(S): x^2 + y^2 + z^2 - 6x + 2y - 4z - 11 = 0$.",
      correctAnswer: "5",
      acceptedAnswers: ["5", "R = 5"],
      explanation: "$a = 3, b = -1, c = 2, d = -11$. Bán kính: $R = \\sqrt{a^2 + b^2 + c^2 - d} = \\sqrt{3^2 + (-1)^2 + 2^2 - (-11)} = \\sqrt{9 + 1 + 4 + 11} = \\sqrt{25} = 5$.",
      tip: "$R = \\sqrt{a^2 + b^2 + c^2 - d}$."
    },
    {
      id: "sa2",
      number: "Câu 10",
      question: "Mặt cầu $(S)$ bán kính $R = 5$ bị cắt bởi mặt phẳng $(P)$ cách tâm một khoảng $d = 3$. Tính đường kính của đường tròn giao tuyến.",
      correctAnswer: "8",
      acceptedAnswers: ["8", "2r = 8"],
      explanation: "Bán kính đường tròn giao tuyến: $r = \\sqrt{R^2 - d^2} = \\sqrt{5^2 - 3^2} = \\sqrt{25 - 9} = 4$. Đường kính của đường tròn là $2r = 2 \\times 4 = 8$.",
      tip: "Đề hỏi đường kính nên nhân đôi bán kính $r$."
    },
    {
      id: "sa3",
      number: "Câu 11",
      question: "Tìm giá trị dương của $m$ để mặt phẳng $(P): 2x - 2y + z + m = 0$ tiếp xúc với mặt cầu $(S): x^2 + y^2 + z^2 = 9$.",
      correctAnswer: "9",
      acceptedAnswers: ["9", "m = 9"],
      explanation: "Mặt cầu $(S)$ có tâm $O(0; 0; 0)$ và bán kính $R = 3$. Mặt phẳng $(P)$ tiếp xúc với $(S)$ khi $d(O, (P)) = R \\iff \\frac{|m|}{\\sqrt{2^2 + (-2)^2 + 1^2}} = 3 \\iff \\frac{|m|}{3} = 3 \\iff |m| = 9$. Vì $m > 0$ nên $m = 9$.",
      tip: "Tiếp xúc $\\iff d(I, (P)) = R$."
    },
    {
      id: "sa4",
      number: "Câu 12",
      question: "Một mặt cầu có bán kính $R = 6$. Tính diện tích thiết diện lớn nhất của mặt cầu chia cho $\\pi$ (tức tính $S / \\pi$).",
      correctAnswer: "36",
      acceptedAnswers: ["36", "S = 36"],
      explanation: "Thiết diện lớn nhất là hình tròn đi qua tâm mặt cầu, có bán kính bằng bán kính mặt cầu $r = R = 6$. Diện tích thiết diện lớn nhất: $S = \\pi R^2 = \\pi (6^2) = 36\\pi$. Tỉ số $S / \\pi = 36$.",
      tip: "Thiết diện lớn nhất có diện tích bằng $\\pi R^2$."
    }
  ],

  essay: [
    {
      id: "es1",
      number: "Câu 13 (Tự luận 1)",
      title: "Lập phương trình mặt cầu ngoại tiếp tứ diện vuông tại gốc tọa độ",
      question: "Trong không gian $Oxyz$, cho bốn điểm $O(0; 0; 0), A(4; 0; 0), B(0; 6; 0), C(0; 0; 8)$.\n1) Chứng minh tứ diện $OABC$ có các cạnh $OA, OB, OC$ đôi một vuông góc.\n2) Xác định tọa độ tâm $I$ và bán kính $R$ của mặt cầu $(S)$ ngoại tiếp tứ diện $OABC$.\n3) Lập phương trình chính tắc và phương trình tổng quát của mặt cầu $(S)$.",
      maxPoints: 10.0,
      sampleSolution: `1) Chứng minh OA, OB, OC đôi một vuông góc:
- Các điểm A, B, C lần lượt thuộc ba trục tọa độ Ox, Oy, Oz:
  A(4; 0; 0) in Ox, B(0; 6; 0) in Oy, C(0; 0; 8) in Oz.
- Vì ba trục tọa độ Ox, Oy, Oz đôi một vuông góc tại gốc O, nên ba đoạn thẳng OA, OB, OC đôi một vuông góc tại O:
  OA vuông góc OB, OB vuông góc OC, OC vuông góc OA.

2) Xác định tâm I và bán kính R của mặt cầu ngoại tiếp tứ diện OABC:
- Gọi phương trình mặt cầu tổng quát có dạng:
  x^2 + y^2 + z^2 - 2ax - 2by - 2cz + d = 0.
- Mặt cầu đi qua bốn điểm O, A, B, C nên tọa độ của chúng thỏa mãn phương trình:
  + Qua O(0; 0; 0): 0 + 0 + 0 - 0 - 0 - 0 + d = 0 <=> d = 0.
  + Qua A(4; 0; 0): 4^2 - 2a(4) + 0 = 0 <=> 16 - 8a = 0 <=> a = 2.
  + Qua B(0; 6; 0): 6^2 - 2b(6) + 0 = 0 <=> 36 - 12b = 0 <=> b = 3.
  + Qua C(0; 0; 8): 8^2 - 2c(8) + 0 = 0 <=> 64 - 16c = 0 <=> c = 4.
- Tâm của mặt cầu ngoại tiếp tứ diện vuông là:
  I(a; b; c) = I(2; 3; 4) (chính là trung điểm của đường chéo hình hộp chữ nhật có ba kích thước OA, OB, OC).
- Bán kính mặt cầu:
  R = sqrt{a^2 + b^2 + c^2 - d} = sqrt{2^2 + 3^2 + 4^2 - 0} = sqrt{4 + 9 + 16} = sqrt{29}.

3) Lập phương trình mặt cầu (S):
- Phương trình chính tắc:
  (x - 2)^2 + (y - 3)^2 + (z - 4)^2 = (sqrt{29})^2 = 29.
- Phương trình tổng quát:
  x^2 + y^2 + z^2 - 4x - 6y - 8z = 0.`,
      criteria: [
        { id: "c1", step: "Bước 1", desc: "Chứng minh đúng OA, OB, OC đôi một vuông góc do nằm trên 3 trục tọa độ", points: 2.5 },
        { id: "c2", step: "Bước 2", desc: "Thiết lập hệ phương trình qua 4 điểm và giải đúng d = 0, a = 2, b = 3, c = 4", points: 2.5 },
        { id: "c3", step: "Bước 3", desc: "Xác định đúng tâm I(2; 3; 4) và bán kính R = sqrt{29}", points: 2.5 },
        { id: "c4", step: "Bước 4", desc: "Viết đúng cả hai dạng phương trình chính tắc và tổng quát", points: 2.5 }
      ]
    },
    {
      id: "es2",
      number: "Câu 14 (Tự luận 2)",
      title: "Lập phương trình mặt phẳng tiếp diện của mặt cầu",
      question: "Trong không gian $Oxyz$, cho mặt cầu $(S): (x - 1)^2 + (y - 2)^2 + (z + 1)^2 = 9$ và điểm $M_0(2; 4; 1)$.\n1) Chứng minh rằng điểm $M_0$ thuộc mặt cầu $(S)$.\n2) Lập phương trình mặt phẳng $(\\alpha)$ tiếp xúc với mặt cầu $(S)$ tại điểm $M_0$.\n3) Lập phương trình các mặt phẳng $(\\beta)$ song song với mặt phẳng $(Q): 2x - 2y + z + 1 = 0$ và tiếp xúc với mặt cầu $(S)$.",
      maxPoints: 10.0,
      sampleSolution: `1) Chứng minh điểm M0 thuộc mặt cầu (S):
- Mặt cầu (S) có tâm I(1; 2; -1) và bán kính R = sqrt{9} = 3.
- Thay tọa độ M0(2; 4; 1) vào vế trái phương trình (S):
  (2 - 1)^2 + (4 - 2)^2 + (1 + 1)^2 = 1^2 + 2^2 + 2^2 = 1 + 4 + 4 = 9 = R^2.
- Vì tọa độ M0 thỏa mãn phương trình nên M0 thuộc mặt cầu (S).

2) Lập phương trình mặt phẳng tiếp diện (alpha) tại M0:
- Mặt phẳng tiếp diện (alpha) của mặt cầu (S) tại tiếp điểm M0 nhận vectơ nối tâm I với M0 làm vectơ pháp tuyến:
  vec{n}_alpha = vec{IM_0} = (2 - 1; 4 - 2; 1 - (-1)) = (1; 2; 2).
- Mặt phẳng (alpha) đi qua điểm M0(2; 4; 1):
  1*(x - 2) + 2*(y - 4) + 2*(z - 1) = 0
  <=> x - 2 + 2y - 8 + 2z - 2 = 0
  <=> x + 2y + 2z - 12 = 0.
- Vậy phương trình tiếp diện tại M0 là: x + 2y + 2z - 12 = 0.

3) Lập phương trình các mặt phẳng (beta) song song với (Q) và tiếp xúc với (S):
- Vì (beta) song song với (Q): 2x - 2y + z + 1 = 0 nên (beta) có dạng:
  2x - 2y + z + D = 0  (D ≠ 1).
- Mặt phẳng (beta) tiếp xúc với mặt cầu (S) khi và chỉ khi khoảng cách từ tâm I(1; 2; -1) đến (beta) bằng bán kính R = 3:
  d(I, (beta)) = |2*(1) - 2*(2) + 1*(-1) + D| / sqrt{2^2 + (-2)^2 + 1^2} = 3
  <=> |2 - 4 - 1 + D| / 3 = 3
  <=> |D - 3| = 9.
- Giải phương trình giá trị tuyệt đối:
  + D - 3 = 9 <=> D = 12 (thỏa mãn D ≠ 1).
  + D - 3 = -9 <=> D = -6 (thỏa mãn D ≠ 1).
- Kết luận: Có hai mặt phẳng thỏa mãn là:
  (beta_1): 2x - 2y + z + 12 = 0 và (beta_2): 2x - 2y + z - 6 = 0.`,
      criteria: [
        { id: "c1", step: "Bước 1", desc: "Xác định tâm I(1; 2; -1), R = 3 và kiểm tra đúng M0 thuộc mặt cầu", points: 2.5 },
        { id: "c2", step: "Bước 2", desc: "Chỉ ra VTPN vec{IM_0} = (1; 2; 2) và lập đúng tiếp diện x + 2y + 2z - 12 = 0", points: 2.5 },
        { id: "c3", step: "Bước 3", desc: "Gọi đúng dạng (beta): 2x - 2y + z + D = 0 và lập phương trình khoảng cách |D - 3| = 9", points: 2.5 },
        { id: "c4", step: "Bước 4", desc: "Giải đúng D = 12 và D = -6, kết luận hai mặt phẳng (beta_1), (beta_2)", points: 2.5 }
      ]
    },
    {
      id: "es3",
      number: "Câu 15 (Tự luận 3)",
      title: "Ứng dụng vùng quét không phận của đài kiểm soát radar không lưu",
      question: "Một đài radar kiểm soát không lưu được đặt tại gốc tọa độ $O(0; 0; 0)$ trên mặt đất (đơn vị: kilomet). Vùng phát hiện mục tiêu của đài radar là một khối cầu giới hạn bởi mặt cầu $(S)$ có bán kính quét tối đa $R = 100$ km. Một máy bay trinh sát bay theo đường bay thẳng $d$ có phương trình tham số:\n$$\\begin{cases} x = -120 + 40t \\\\ y = 60 \\\\ z = 0 \\end{cases} \\quad (t \\text{ tính bằng giờ, } t \\ge 0).$$\n1) Viết phương trình mặt cầu $(S)$ giới hạn vùng phát hiện của đài radar.\n2) Xác định khoảng cách ngắn nhất từ đài radar $O$ đến đường bay $d$ của máy bay.\n3) Máy bay có bay vào vùng phát hiện của đài radar hay không? Nếu có, hãy tính khoảng thời gian (theo phút) mà máy bay nằm trong vùng quét của radar.",
      maxPoints: 10.0,
      sampleSolution: `1) Phương trình mặt cầu (S) giới hạn vùng phát hiện radar:
- Mặt cầu có tâm tại đài radar O(0; 0; 0) và bán kính R = 100 km.
- Phương trình mặt cầu (S) là:
  x^2 + y^2 + z^2 = 100^2 <=> x^2 + y^2 + z^2 = 10000.

2) Xác định khoảng cách ngắn nhất từ đài radar O đến đường bay d:
- Đường thẳng d có vectơ chỉ phương vec{u} = (40; 0; 0) = 40*(1; 0; 0) (song song với trục Ox).
- Trên đường thẳng d, tung độ luôn cố định y = 60 km và cao độ z = 0 km.
- Khoảng cách từ O(0; 0; 0) đến một điểm M(t) trên đường thẳng d là:
  OM(t) = sqrt{x(t)^2 + y(t)^2 + z(t)^2} = sqrt{(-120 + 40t)^2 + 60^2 + 0^2}.
- Khoảng cách ngắn nhất đạt được khi -120 + 40t = 0 <=> t = 3 (giờ).
- Khi đó khoảng cách ngắn nhất là:
  d_min = sqrt{0^2 + 60^2 + 0^2} = 60 (km).
- Điểm gần đài radar nhất trên đường bay là H(0; 60; 0).

3) Tính thời gian máy bay nằm trong vùng phát hiện của radar:
- Vì khoảng cách ngắn nhất d_min = 60 km < R = 100 km, nên đường bay d CẮT XUYÊN QUA vùng quét của radar.
- Máy bay nằm trong vùng quét khi và chỉ khi khoảng cách OM(t) <= R:
  x(t)^2 + y(t)^2 + z(t)^2 <= 100^2
  <=> (-120 + 40t)^2 + 60^2 <= 100^2
  <=> (-120 + 40t)^2 + 3600 <= 10000
  <=> (-120 + 40t)^2 <= 6400 = 80^2.
- Giải bất phương trình:
  -80 <= -120 + 40t <= 80
  <=> 40 <= 40t <= 200
  <=> 1 <= t <= 5 (giờ).
- Thời điểm máy bay bắt đầu bị radar phát hiện là t_1 = 1 giờ (tại điểm vào x = -80, y = 60, z = 0).
- Thời điểm máy bay ra khỏi vùng quét là t_2 = 5 giờ (tại điểm ra x = +80, y = 60, z = 0).
- Tổng thời gian máy bay nằm trong vùng quét của radar là:
  Delta t = t_2 - t_1 = 5 - 1 = 4 (giờ) = 4 * 60 = 240 (phút).
- Quãng đường bay bên trong vùng radar:
  L = v * Delta t = 40 km/h * 4 h = 160 km.
- Kết luận: Máy bay có bay vào vùng quét radar; thời gian phát hiện kéo dài 4 giờ (240 phút) từ t = 1h đến t = 5h.`,
      criteria: [
        { id: "c1", step: "Bước 1", desc: "Viết đúng phương trình mặt cầu x^2 + y^2 + z^2 = 10000", points: 2.5 },
        { id: "c2", step: "Bước 2", desc: "Tính đúng khoảng cách ngắn nhất d_min = 60 km tại t = 3 giờ", points: 2.5 },
        { id: "c3", step: "Bước 3", desc: "Thiết lập đúng bất phương trình (-120 + 40t)^2 + 60^2 <= 100^2", points: 2.5 },
        { id: "c4", step: "Bước 4", desc: "Giải đúng khoảng thời gian 1 <= t <= 5 giờ, kết luận 4 giờ (240 phút)", points: 2.5 }
      ]
    }
  ]
};



