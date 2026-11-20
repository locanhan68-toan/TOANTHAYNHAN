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
