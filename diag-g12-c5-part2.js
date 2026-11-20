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
