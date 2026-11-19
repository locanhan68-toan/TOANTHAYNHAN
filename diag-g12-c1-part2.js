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
