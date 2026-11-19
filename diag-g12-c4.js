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
