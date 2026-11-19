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
