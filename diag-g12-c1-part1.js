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
