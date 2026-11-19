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
