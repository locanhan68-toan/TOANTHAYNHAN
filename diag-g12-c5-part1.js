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
