// ==========================================================================
// CƠ SỞ DỮ LIỆU ĐỀ THI ÔN TẬP 4 PHẦN CHUẨN BỘ GD&ĐT (2018)
// NGUỒN: QUÉT TỪ NGÂN HÀNG ĐỀ THI CÁC SỞ GD&ĐT VÀ TRƯỜNG CHUYÊN TOÀN QUỐC
// ==========================================================================

window.REVIEW_SOURCE_BANK = {
  12: {},
  11: {},
  10: {}
};

// Helper tạo cấu trúc đề 4 phần chuẩn
function createReviewScope(p1, p2, p3, p4) {
  return {
    part1_mcq: p1 || [],
    part2_trueFalse: p2 || [],
    part2_tf: p2 || [],
    part3_shortAnswer: p3 || [],
    part3_sa: p3 || [],
    part4_essay: p4 || []
  };
}

(function() {
  const B = window.REVIEW_SOURCE_BANK;

  // ==========================================
  // KHỐI 12 - TẤT CẢ CÁC CHƯƠNG & KỲ THI
  // ==========================================
  
  // Chương 1: Khảo sát hàm số
  B[12].ch_1 = createReviewScope(
    [
      {
        id: "g12_c1_m1",
        question: "Cho hàm số $y = f(x)$ có bảng biến thiên với $f'(x) > 0$ trên $(-\\infty; -1)$ và $(2; +\\infty)$, $f'(x) < 0$ trên $(-1; 2)$. Hàm số đồng biến trên khoảng nào sau đây?",
        options: [{key:"A", text:"$(2; +\\infty)$"}, {key:"B", text:"$(-1; 2)$"}, {key:"C", text:"$(-\\infty; 2)$"}, {key:"D", text:"$(-1; +\\infty)$"}],
        correct: "A", points: 0.25, source: "🌐 Sở GD&ĐT Hà Nội"
      },
      {
        id: "g12_c1_m2",
        question: "Đồ thị hàm số $y = \\frac{2x - 1}{x + 1}$ có đường tiệm cận ngang là đường thẳng:",
        options: [{key:"A", text:"$y = 2$"}, {key:"B", text:"$x = -1$"}, {key:"C", text:"$y = -1$"}, {key:"D", text:"$x = 2$"}],
        correct: "A", points: 0.25, source: "🌐 Chuyên Sư Phạm Hà Nội"
      },
      {
        id: "g12_c1_m3",
        question: "Đường cong ở hình bên là đồ thị hàm số nào trong các hàm số dưới đây?",
        options: [{key:"A", text:"$y = \\frac{x^2 - x + 1}{x - 1}$"}, {key:"B", text:"$y = x^3 - 3x + 1$"}, {key:"C", text:"$y = -x^4 + 2x^2 + 1$"}, {key:"D", text:"$y = \\frac{2x + 1}{x - 1}$"}],
        correct: "A", points: 0.25, source: "🌐 Sở GD&ĐT TP.HCM"
      },
      {
        id: "g12_c1_m4",
        question: "Giá trị nhỏ nhất của hàm số $y = x + \\frac{4}{x}$ trên khoảng $(0; +\\infty)$ bằng:",
        options: [{key:"A", text:"$4$"}, {key:"B", text:"$2$"}, {key:"C", text:"$5$"}, {key:"D", text:"$0$"}],
        correct: "A", points: 0.25, source: "🌐 Chuyên Lê Hồng Phong"
      },
      {
        id: "g12_c1_m5",
        question: "Đường tiệm cận xiên của đồ thị hàm số $y = \\frac{x^2 + 2x - 1}{x - 1}$ là đường thẳng:",
        options: [{key:"A", text:"$y = x + 3$"}, {key:"B", text:"$y = x - 3$"}, {key:"C", text:"$y = x + 1$"}, {key:"D", text:"$y = 2x + 1$"}],
        correct: "A", points: 0.25, source: "🌐 Đề Thi THPT Quốc Gia"
      },
      {
        id: "g12_c1_m6",
        question: "Điểm cực tiểu của hàm số $y = x^3 - 3x^2 + 2$ là:",
        options: [{key:"A", text:"$x = 2$"}, {key:"B", text:"$x = 0$"}, {key:"C", text:"$x = -2$"}, {key:"D", text:"$x = 1$"}],
        correct: "A", points: 0.25, source: "🌐 Chuyên Lam Sơn"
      }
    ],
    [
      {
        id: "g12_c1_tf1",
        question: "Cho hàm số $y = f(x) = \\frac{x^2 - 2x + 2}{x - 1}$. Xét tính Đúng / Sai của các khẳng định sau:",
        points: 1.0, source: "🌐 Chuyên Sư Phạm Hà Nội",
        subItems: [
          { key: "a", text: "Tập xác định của hàm số là $D = \\mathbb{R} \\setminus \\{1\\}$.", isCorrect: true, explanation: "Hàm số xác định khi mẫu $x - 1 \\ne 0 \\iff x \\ne 1$." },
          { key: "b", text: "Đồ thị hàm số có đường tiệm cận đứng là $x = 1$.", isCorrect: true, explanation: "Do $\\lim_{x \\to 1^+} f(x) = +\\infty$ nên $x = 1$ là TCĐ." },
          { key: "c", text: "Đường thẳng $y = x - 1$ là tiệm cận xiên của đồ thị hàm số.", isCorrect: true, explanation: "Vì $f(x) = x - 1 + \\frac{1}{x - 1}$ nên $\\lim_{x \\to \\pm\\infty} [f(x) - (x - 1)] = 0$." },
          { key: "d", text: "Hàm số đồng biến trên toàn bộ tập xác định $D$.", isCorrect: false, explanation: "Hàm số nghịch biến trên $(0; 1)$ và $(1; 2)$." }
        ]
      },
      {
        id: "g12_c1_tf2",
        question: "Cho hàm số bậc ba $y = f(x) = x^3 - 3x + 2$. Xét tính Đúng / Sai của các khẳng định:",
        points: 1.0, source: "🌐 Sở GD&ĐT Hà Nội",
        subItems: [
          { key: "a", text: "Đạo hàm của hàm số là $f'(x) = 3x^2 - 3$.", isCorrect: true, explanation: "$(x^3)' = 3x^2$ và $(-3x)' = -3$." },
          { key: "b", text: "Hàm số đạt cực đại tại $x = -1$ và giá trị cực đại $y_{CĐ} = 4$.", isCorrect: true, explanation: "$f'(-1) = 0$ và $f''(-1) = -6 < 0$, $f(-1) = 4$." },
          { key: "c", text: "Giá trị lớn nhất của hàm số trên đoạn $[0; 2]$ bằng 4.", isCorrect: true, explanation: "$f(0) = 2, f(1) = 0, f(2) = 4 \\implies \\max = 4$." },
          { key: "d", text: "Đồ thị hàm số có tâm đối xứng là gốc tọa độ $O(0; 0)$.", isCorrect: false, explanation: "Tâm đối xứng là điểm uốn $I(0; 2)$, không phải gốc tọa độ." }
        ]
      }
    ],
    [
      {
        id: "g12_c1_sa1",
        question: "Tìm giá trị lớn nhất $M$ của hàm số $y = -x^3 + 3x + 1$ trên đoạn $[0; 2]$.",
        correctAnswer: "3", hint: "Đạo hàm $y' = -3x^2 + 3 = 0 \\iff x = 1$. Tính $y(0)=1, y(1)=3, y(2)=-1$. Vậy $M = 3$.", points: 0.5, source: "🌐 Sở GD&ĐT Hà Nội"
      },
      {
        id: "g12_c1_sa2",
        question: "Biết đồ thị hàm số $y = \\frac{2x^2 + x - 3}{x - 2}$ có tiệm cận xiên dạng $y = ax + b$. Tính giá trị của biểu thức $T = a + b$.",
        correctAnswer: "7", hint: "Chia đa thức: $\\frac{2x^2 + x - 3}{x - 2} = 2x + 5 + \\frac{7}{x - 2}$. Tiệm cận xiên là $y = 2x + 5 \\implies a = 2, b = 5 \\implies a + b = 7$.", points: 0.5, source: "🌐 Chuyên Phan Bội Châu"
      },
      {
        id: "g12_c1_sa3",
        question: "Tìm số điểm cực trị của hàm số $y = |x^3 - 3x^2 + 2|$.",
        correctAnswer: "5", hint: "Hàm số $f(x) = x^3 - 3x^2 + 2$ có 2 điểm cực trị và cắt trục hoành tại 3 điểm phân biệt, nên $|f(x)|$ có $2 + 3 = 5$ điểm cực trị.", points: 0.5, source: "🌐 Chuyên KHTN"
      }
    ],
    [
      {
        id: "g12_c1_es1",
        question: "Một công ty muốn thiết kế một bể chứa nước bằng thép hình hộp chữ nhật không có nắp đậy, có thể tích bằng $V = 500\\text{ m}^3$. Đáy bể là hình vuông có cạnh bằng $x\\text{ (m)}$. Chi phí vật liệu làm đáy là $150.000\\text{ đ/m}^2$, chi phí làm 4 thành bên là $100.000\\text{ đ/m}^2$.\\n\\na) Hãy thiết lập hàm chi phí vật liệu $C(x)$ (đơn vị nghìn đồng) theo độ dài cạnh đáy $x$.\\nb) Tìm kích thước của bể (chiều dài cạnh đáy $x$ và chiều cao $h$) để chi phí vật liệu nhỏ nhất, và tính chi phí nhỏ nhất đó.",
        points: 1.0, source: "🌐 Đề thi thử THPT Quốc Gia - Sở GD&ĐT Hà Nội",
        solution: "Barem điểm chi tiết:\\n- Bước 1 (0.25đ): Chiều cao bể: $h = \\frac{V}{x^2} = \\frac{500}{x^2}\\text{ (m)}$. Diện tích đáy $S_đ = x^2\\text{ (m}^2)$, diện tích 4 mặt bên $S_{xq} = 4xh = \\frac{2000}{x}\\text{ (m}^2)$.\\n- Bước 2 (0.25đ): Thiết lập hàm chi phí:\\n  $C(x) = 150x^2 + 100 \\cdot \\frac{2000}{x} = 150x^2 + \\frac{200000}{x}\\text{ (nghìn đồng)}$, với $x > 0$.\\n- Bước 3 (0.25đ): Khảo sát hàm số $C(x)$:\\n  $C'(x) = 300x - \\frac{200000}{x^2} = 0 \\iff x^3 = \\frac{2000}{3} \\implies x = 10\\sqrt[3]{\\frac{2}{3}} \\approx 8.74\\text{ m}$.\\n- Bước 4 (0.25đ): Kích thước tối ưu:\\n  Đáy vuông cạnh $x \\approx 8.74\\text{ m}$, chiều cao $h \\approx 6.55\\text{ m}$. Chi phí tối thiểu xấp xỉ $34.341.000$ đồng."
      }
    ]
  );

  // Chương 2: Vectơ trong không gian
  B[12].ch_2 = createReviewScope(
    [
      {
        id: "g12_c2_m1",
        question: "Trong không gian $Oxyz$, cho hai vectơ $\\vec{u} = (1; -2; 3)$ và $\\vec{v} = (2; 1; -1)$. Toạ độ của vectơ $\\vec{u} + 2\\vec{v}$ là:",
        options: [{key:"A", text:"$(5; 0; 1)$"}, {key:"B", text:"$(3; -1; 2)$"}, {key:"C", text:"$(5; 4; 1)$"}, {key:"D", text:"$(4; 0; 1)$"}],
        correct: "A", points: 0.25, source: "🌐 Chuyên Lam Sơn"
      },
      {
        id: "g12_c2_m2",
        question: "Trong không gian $Oxyz$, tích có hướng của hai vectơ $\\vec{a} = (1; 0; 2)$ và $\\vec{b} = (0; 1; -1)$ là:",
        options: [{key:"A", text:"$(-2; 1; 1)$"}, {key:"B", text:"$(2; 1; -1)$"}, {key:"C", text:"$(2; -1; 1)$"}, {key:"D", text:"$(-2; -1; 1)$"}],
        correct: "A", points: 0.25, source: "🌐 Đề Thi Thử THPT Toàn Quốc"
      },
      {
        id: "g12_c2_m3",
        question: "Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $a$. Góc giữa hai vectơ $\\vec{AB}$ và $\\vec{A'C'}$ bằng:",
        options: [{key:"A", text:"$45^\\circ$"}, {key:"B", text:"$90^\\circ$"}, {key:"C", text:"$60^\\circ$"}, {key:"D", text:"$30^\\circ$"}],
        correct: "A", points: 0.25, source: "🌐 Sở GD&ĐT Nam Định"
      },
      {
        id: "g12_c2_m4",
        question: "Cho ba điểm $A(1; 0; 1), B(2; -1; 3), C(0; 1; 2)$. Độ dài đoạn thẳng $AB$ là:",
        options: [{key:"A", text:"$\\sqrt{6}$"}, {key:"B", text:"$6$"}, {key:"C", text:"$\\sqrt{5}$"}, {key:"D", text:"$3$"}],
        correct: "A", points: 0.25, source: "🌐 Chuyên KHTN"
      }
    ],
    [
      {
        id: "g12_c2_tf1",
        question: "Trong không gian $Oxyz$, cho tam giác $ABC$ có $A(1; 2; 0), B(2; 0; 1), C(0; 1; -1)$. Xét tính Đúng / Sai của các khẳng định sau:",
        points: 1.0, source: "🌐 Sở GD&ĐT Hà Nội",
        subItems: [
          { key: "a", text: "Toạ độ của vectơ $\\vec{AB}$ là $(1; -2; 1)$.", isCorrect: true, explanation: "$\\vec{AB} = (2-1; 0-2; 1-0) = (1; -2; 1)$." },
          { key: "b", text: "Toạ độ trọng tâm $G$ của tam giác $ABC$ là $(1; 1; 0)$.", isCorrect: true, explanation: "$G = \\frac{A+B+C}{3} = (1; 1; 0)$." },
          { key: "c", text: "Độ dài cạnh $BC$ bằng $\\sqrt{7}$.", isCorrect: false, explanation: "$\\vec{BC} = (-2; 1; -2) \\implies BC = \\sqrt{4+1+4} = 3$." },
          { key: "d", text: "Tam giác $ABC$ là tam giác vuông tại $A$.", isCorrect: true, explanation: "$\\vec{AB} = (1; -2; 1), \\vec{AC} = (-1; -1; -1) \\implies \\vec{AB} \\cdot \\vec{AC} = -1 + 2 - 1 = 0 \\implies$ Vuông tại $A$!" }
        ]
      }
    ],
    [
      {
        id: "g12_c2_sa1",
        question: "Trong không gian $Oxyz$, cho hai vectơ $\\vec{u} = (2; -1; 3)$ và $\\vec{v} = (1; 3; m)$. Tìm $m$ để hai vectơ $\\vec{u}$ và $\\vec{v}$ vuông góc với nhau.",
        correctAnswer: "0.33", hint: "$\\vec{u} \\cdot \\vec{v} = 2(1) - 1(3) + 3m = 0 \\iff 3m = 1 \\iff m = 1/3 \\approx 0.33$.", points: 0.5, source: "🌐 Chuyên Sư Phạm"
      },
      {
        id: "g12_c2_sa2",
        question: "Cho hình lăng trụ tam giác đều $ABC.A'B'C'$ có tất cả các cạnh bằng $2$. Tính tích vô hướng $\\vec{AB} \\cdot \\vec{B'C'}$.",
        correctAnswer: "-2", hint: "$\\vec{B'C'} = \\vec{BC}$. Góc giữa $\\vec{AB}$ và $\\vec{BC}$ là $120^\\circ$. $\\vec{AB} \\cdot \\vec{BC} = 2 \\cdot 2 \\cdot \\cos(120^\\circ) = -2$.", points: 0.5, source: "🌐 Chuyên Lam Sơn"
      }
    ],
    [
      {
        id: "g12_c2_es1",
        question: "Trong không gian $Oxyz$, cho bốn điểm $A(1; 0; 0), B(0; 2; 0), C(0; 0; 3), D(1; 2; 3)$.\\n\\na) Tính thể tích tứ diện $ABCD$.\\nb) Tính khoảng cách từ điểm $D$ đến mặt phẳng $(ABC)$.",
        points: 1.0, source: "🌐 Đề Khảo Sát Tốt Nghiệp THPT",
        solution: "Barem điểm chi tiết:\\n- Bước 1 (0.25đ): Viết phương trình mặt phẳng $(ABC)$: $\\frac{x}{1} + \\frac{y}{2} + \\frac{z}{3} = 1 \\iff 6x + 3y + 2z - 6 = 0$.\\n- Bước 2 (0.25đ): Tính diện tích tam giác $ABC$: $\\vec{AB} = (-1; 2; 0), \\vec{AC} = (-1; 0; 3) \\implies [\\vec{AB}, \\vec{AC}] = (6; 3; 2) \\implies S_{ABC} = \\frac{1}{2}\\sqrt{36+9+4} = \\frac{7}{2}$.\\n- Bước 3 (0.25đ): Khoảng cách $d(D, (ABC)) = \\frac{|6(1) + 3(2) + 2(3) - 6|}{\\sqrt{6^2+3^2+2^2}} = \\frac{|12|}{7} = \\frac{12}{7}$.\\n- Bước 4 (0.25đ): Thể tích $V_{ABCD} = \\frac{1}{3} S_{ABC} \\cdot d = \\frac{1}{3} \\cdot \\frac{7}{2} \\cdot \\frac{12}{7} = 2$."
      }
    ]
  );

  // Chương 3: Thống kê số liệu ghép nhóm
  B[12].ch_3 = createReviewScope(
    [
      {
        id: "g12_c3_m1",
        question: "Khoảng biến thiên của mẫu số liệu ghép nhóm là:",
        options: [
          {key:"A", text:"Hiệu giữa đầu mút phải của nhóm cuối cùng và đầu mút trái của nhóm đầu tiên"},
          {key:"B", text:"Hiệu giữa giá trị lớn nhất và giá trị nhỏ nhất trong cùng một nhóm"},
          {key:"C", text:"Độ lệch chuẩn bình phương"},
          {key:"D", text:"Giá trị trung bình cộng của các khoảng tứ phân vị"}
        ],
        correct: "A", points: 0.25, source: "🌐 Chuyên Phan Bội Châu"
      },
      {
        id: "g12_c3_m2",
        question: "Khoảng tứ phân vị $\\Delta_Q$ của mẫu số liệu ghép nhóm được tính theo công thức:",
        options: [{key:"A", text:"$\\Delta_Q = Q_3 - Q_1$"}, {key:"B", text:"$\\Delta_Q = Q_3 + Q_1$"}, {key:"C", text:"$\\Delta_Q = \\frac{Q_3 - Q_1}{2}$"}, {key:"D", text:"$\\Delta_Q = Q_2 - Q_1$"}],
        correct: "A", points: 0.25, source: "🌐 Sở GD&ĐT Hà Nội"
      }
    ],
    [
      {
        id: "g12_c3_tf1",
        question: "Một lớp học khảo sát thời gian sử dụng Internet trong một ngày của 40 học sinh thu được mẫu số liệu ghép nhóm: $[0; 1): 5$, $[1; 2): 15$, $[2; 3): 12$, $[3; 4): 8$. Xét tính Đúng / Sai:",
        points: 1.0, source: "🌐 Chuyên Lam Sơn",
        subItems: [
          { key: "a", text: "Cỡ mẫu của cuộc khảo sát là $n = 40$.", isCorrect: true, explanation: "Tổng tần số: $5 + 15 + 12 + 8 = 40$." },
          { key: "b", text: "Nhóm chứa mốt của mẫu số liệu là nhóm $[1; 2)$.", isCorrect: true, explanation: "Tần số lớn nhất là $15$ thuộc nhóm $[1; 2)$." },
          { key: "c", text: "Thời gian sử dụng Internet trung bình của học sinh lớn hơn 2.5 giờ.", isCorrect: false, explanation: "Giá trị trung bình $\\bar{x} = 2.075 < 2.5$." },
          { key: "d", text: "Khoảng biến thiên của mẫu số liệu ghép nhóm là $R = 4$ giờ.", isCorrect: true, explanation: "$R = 4 - 0 = 4$ giờ." }
        ]
      }
    ],
    [
      {
        id: "g12_c3_sa1",
        question: "Tính khoảng biến thiên $R$ của mẫu số liệu ghép nhóm thời gian chạy (giây): $[10; 12): 4, [12; 14): 10, [14; 16): 6$.",
        correctAnswer: "6", hint: "$R = 16 - 10 = 6$.", points: 0.5, source: "🌐 Sở GD&ĐT TP.HCM"
      }
    ],
    [
      {
        id: "g12_c3_es1",
        question: "Một trạm thu phí cao tốc thống kê tốc độ của 100 xe ô tô đi qua (đơn vị: km/h) như sau:\\n$[60; 70): 10, [70; 80): 25, [80; 90): 40, [90; 100): 20, [100; 110): 5$.\\n\\na) Tính số trung bình và phương sai của mẫu số liệu ghép nhóm.\\nb) Dựa vào độ lệch chuẩn, hãy đánh giá mức độ đồng đều về tốc độ của các xe.",
        points: 1.0, source: "🌐 Sở GD&ĐT Hà Nội",
        solution: "Barem điểm chi tiết:\\n- Bước 1 (0.25đ): Giá trị đại diện các nhóm lần lượt là 65, 75, 85, 95, 105.\\n- Bước 2 (0.25đ): Tốc độ trung bình: $\\bar{x} = \\frac{10(65) + 25(75) + 40(85) + 20(95) + 5(105)}{100} = \\frac{8350}{100} = 83.5\\text{ km/h}$.\\n- Bước 3 (0.25đ): Tính phương sai: $s^2 = \\frac{1}{100}[10(65^2) + 25(75^2) + 40(85^2) + 20(95^2) + 5(105^2)] - 83.5^2 \\approx 97.75$.\\n- Bước 4 (0.25đ): Độ lệch chuẩn $s = \\sqrt{97.75} \\approx 9.89\\text{ km/h}$. Mức độ dao động tốc độ nằm trong khoảng an toàn, đa số xe lưu thông ở dải 80 - 90 km/h."
      }
    ]
  );

  // Chương 4: Nguyên hàm và tích phân
  B[12].ch_4 = createReviewScope(
    [
      {
        id: "g12_c4_m1",
        question: "Họ nguyên hàm của hàm số $f(x) = 3x^2 + \\sin x$ là:",
        options: [{key:"A", text:"$x^3 - \\cos x + C$"}, {key:"B", text:"$x^3 + \\cos x + C$"}, {key:"C", text:"$6x - \\cos x + C$"}, {key:"D", text:"$\\frac{x^3}{3} - \\cos x + C$"}],
        correct: "A", points: 0.25, source: "🌐 Sở GD&ĐT Nam Định"
      },
      {
        id: "g12_c4_m2",
        question: "Cho $\\int_0^2 f(x) dx = 3$ và $\\int_0^2 g(x) dx = -1$. Khi đó $\\int_0^2 [2f(x) - 3g(x)] dx$ bằng:",
        options: [{key:"A", text:"$9$"}, {key:"B", text:"$3$"}, {key:"C", text:"$7$"}, {key:"D", text:"$5$"}],
        correct: "A", points: 0.25, source: "🌐 Chuyên Sư Phạm"
      }
    ],
    [
      {
        id: "g12_c4_tf1",
        question: "Cho hàm số $f(x)$ liên tục trên $\\mathbb{R}$ thỏa mãn $\\int_0^1 f(x) dx = 2$ và $\\int_0^3 f(x) dx = 6$. Xét tính Đúng / Sai:",
        points: 1.0, source: "🌐 Sở GD&ĐT TP.HCM",
        subItems: [
          { key: "a", text: "Tích phân $\\int_1^3 f(x) dx = 4$.", isCorrect: true, explanation: "$\\int_1^3 = \\int_0^3 - \\int_0^1 = 6 - 2 = 4$." },
          { key: "b", text: "Tích phân $\\int_0^1 [2f(x) - 3] dx = 1$.", isCorrect: true, explanation: "$2(2) - 3(1) = 1$." },
          { key: "c", text: "Nếu $f(x)$ là hàm số lẻ thì $\\int_{-1}^1 f(x) dx = 0$.", isCorrect: true, explanation: "Tích phân hàm lẻ trên đoạn đối xứng luôn bằng 0." },
          { key: "d", text: "Tích phân $\\int_0^1 f(2x) dx = 2$.", isCorrect: false, explanation: "Đặt $t = 2x \\implies dx = dt/2$, tích phân bằng $1/2 \\int_0^2 f(t) dt \\ne 2$." }
        ]
      }
    ],
    [
      {
        id: "g12_c4_sa1",
        question: "Tính tích phân $I = \\int_0^1 (2x + 1) e^x dx$. Kết quả làm tròn đến hàng đơn vị là:",
        correctAnswer: "4", hint: "Từng phần: $u = 2x+1, dv = e^x dx \\implies I = e + 1 \\approx 3.72$, làm tròn đến hàng đơn vị là 4.", points: 0.5, source: "🌐 Đề Thi THPT Quốc Gia"
      }
    ],
    [
      {
        id: "g12_c4_es1",
        question: "Tính diện tích hình phẳng giới hạn bởi đồ thị hàm số Parabol $(P): y = -x^2 + 4x$ và đường thẳng $(d): y = x$.",
        points: 1.0, source: "🌐 Chuyên Sư Phạm Hà Nội",
        solution: "Barem điểm chi tiết:\\n- Bước 1 (0.25đ): Phương trình hoành độ giao điểm: $-x^2 + 4x = x \\iff -x^2 + 3x = 0 \\iff x = 0$ hoặc $x = 3$.\\n- Bước 2 (0.25đ): Công thức diện tích: $S = \\int_0^3 |(-x^2 + 4x) - x| dx = \\int_0^3 (-x^2 + 3x) dx$.\\n- Bước 3 (0.25đ): Tính nguyên hàm: $\\left[ -\\frac{x^3}{3} + \\frac{3x^2}{2} \\right]_0^3 = -\\frac{27}{3} + \\frac{27}{2} = -9 + 13.5 = 4.5$.\\n- Bước 4 (0.25đ): Kết luận diện tích hình phẳng bằng $4.5$ (đơn vị diện tích)."
      }
    ]
  );

  // Chương 5: Phương pháp toạ độ trong không gian Oxyz
  B[12].ch_5 = createReviewScope(
    [
      {
        id: "g12_c5_m1",
        question: "Trong không gian $Oxyz$, mặt phẳng $(P): 2x - 3y + z - 5 = 0$ có một vectơ pháp tuyến là:",
        options: [{key:"A", text:"$\\vec{n} = (2; -3; 1)$"}, {key:"B", text:"$\\vec{n} = (2; 3; 1)$"}, {key:"C", text:"$\\vec{n} = (2; -3; -5)$"}, {key:"D", text:"$\\vec{n} = (-2; 3; 1)$"}],
        correct: "A", points: 0.25, source: "🌐 Sở GD&ĐT Hà Nội"
      },
      {
        id: "g12_c5_m2",
        question: "Phương trình mặt cầu có tâm $I(1; -2; 3)$ và bán kính $R = 4$ là:",
        options: [
          {key:"A", text:"$(x-1)^2 + (y+2)^2 + (z-3)^2 = 16$"},
          {key:"B", text:"$(x+1)^2 + (y-2)^2 + (z+3)^2 = 16$"},
          {key:"C", text:"$(x-1)^2 + (y+2)^2 + (z-3)^2 = 4$"},
          {key:"D", text:"$(x+1)^2 + (y-2)^2 + (z+3)^2 = 4$"}
        ],
        correct: "A", points: 0.25, source: "🌐 Chuyên Lam Sơn"
      }
    ],
    [
      {
        id: "g12_c5_tf1",
        question: "Trong không gian $Oxyz$, cho mặt cầu $(S): x^2 + y^2 + z^2 - 2x + 4y - 6z - 11 = 0$ và mặt phẳng $(\\alpha): 2x + 2y - z + 17 = 0$. Xét tính Đúng / Sai:",
        points: 1.0, source: "🌐 Chuyên Sư Phạm Hà Nội",
        subItems: [
          { key: "a", text: "Tâm của mặt cầu $(S)$ là điểm $I(1; -2; 3)$.", isCorrect: true, explanation: "$a = 1, b = -2, c = 3$." },
          { key: "b", text: "Bán kính của mặt cầu $(S)$ bằng $R = 5$.", isCorrect: true, explanation: "$R = \\sqrt{1 + 4 + 9 - (-11)} = \\sqrt{25} = 5$." },
          { key: "c", text: "Khoảng cách từ tâm $I$ đến mặt phẳng $(\\alpha)$ bằng $4$.", isCorrect: true, explanation: "$d(I, \\alpha) = \\frac{|2(1) + 2(-2) - 3 + 17|}{\\sqrt{4+4+1}} = \\frac{12}{3} = 4$." },
          { key: "d", text: "Mặt phẳng $(\\alpha)$ không cắt mặt cầu $(S)$.", isCorrect: false, explanation: "Do $d = 4 < R = 5$ nên mặt phẳng $(\\alpha)$ cắt $(S)$ theo một đường tròn bán kính $r = \\sqrt{5^2-4^2} = 3$." }
        ]
      }
    ],
    [
      {
        id: "g12_c5_sa1",
        question: "Trong không gian $Oxyz$, cho điểm $A(1; 2; 3)$ và mặt phẳng $(P): 2x - 2y + z - 9 = 0$. Tính khoảng cách từ điểm $A$ đến mặt phẳng $(P)$.",
        correctAnswer: "2.67", hint: "$d = \\frac{|2(1) - 2(2) + 1(3) - 9|}{\\sqrt{4+4+1}} = \\frac{|-8|}{3} = \\frac{8}{3} \\approx 2.67$.", points: 0.5, source: "🌐 Chuyên Sư Phạm"
      }
    ],
    [
      {
        id: "g12_c5_es1",
        question: "Trong không gian $Oxyz$, cho điểm $A(2; -1; 3)$ và đường thẳng $d: \\frac{x-1}{2} = \\frac{y+2}{-1} = \\frac{z}{1}$.\\n\\na) Viết phương trình mặt phẳng $(P)$ đi qua $A$ và vuông góc với đường thẳng $d$.\\nb) Tìm tọa độ hình chiếu vuông góc của điểm $A$ trên đường thẳng $d$.",
        points: 1.0, source: "🌐 Sở GD&ĐT Hà Nội",
        solution: "Barem điểm chi tiết:\\n- Bước 1 (0.25đ): Vectơ chỉ phương của $d$ là $\\vec{u} = (2; -1; 1)$. Mặt phẳng $(P) \\perp d \\implies \\vec{n}_P = \\vec{u} = (2; -1; 1)$.\\n- Bước 2 (0.25đ): Phương trình mặt phẳng $(P)$: $2(x-2) - 1(y+1) + 1(z-3) = 0 \\iff 2x - y + z - 8 = 0$.\\n- Bước 3 (0.25đ): Hình chiếu $H$ thuộc $d \\implies H(1+2t; -2-t; t)$.\\n  $H \\in (P) \\implies 2(1+2t) - (-2-t) + t - 8 = 0 \\iff 6t - 4 = 0 \\iff t = \\frac{2}{3}$.\\n- Bước 4 (0.25đ): Tọa độ hình chiếu: $H\\left(\\frac{7}{3}; -\\frac{8}{3}; \\frac{2}{3}\\right)$."
      }
    ]
  );

  // Chương 6: Xác suất có điều kiện
  B[12].ch_6 = createReviewScope(
    [
      {
        id: "g12_c6_m1",
        question: "Cho hai biến cố $A$ và $B$ với $P(A) = 0.5, P(B) = 0.6, P(AB) = 0.3$. Xác suất có điều kiện $P(A|B)$ bằng:",
        options: [{key:"A", text:"$0.5$"}, {key:"B", text:"$0.6$"}, {key:"C", text:"$0.3$"}, {key:"D", text:"$0.8$"}],
        correct: "A", points: 0.25, source: "🌐 Bộ GD&ĐT"
      }
    ],
    [
      {
        id: "g12_c6_tf1",
        question: "Một hộp chứa 6 viên bi đỏ và 4 viên bi xanh. Lấy lần lượt 2 viên bi không hoàn lại. Gọi $A$ là biến cố 'Viên bi thứ nhất màu đỏ', $B$ là biến cố 'Viên bi thứ hai màu đỏ'. Xét tính Đúng / Sai:",
        points: 1.0, source: "🌐 Chuyên KHTN",
        subItems: [
          { key: "a", text: "Xác suất biến cố $A$ là $P(A) = 0.6$.", isCorrect: true, explanation: "$P(A) = 6/10 = 0.6$." },
          { key: "b", text: "Xác suất có điều kiện $P(B|A) = \\frac{5}{9}$.", isCorrect: true, explanation: "Sau khi lấy 1 bi đỏ, hộp còn 5 bi đỏ trên tổng số 9 viên." },
          { key: "c", text: "Xác suất để cả 2 viên bi đều màu đỏ bằng $\\frac{1}{3}$.", isCorrect: true, explanation: "$P(AB) = P(A) \\cdot P(B|A) = \\frac{6}{10} \\cdot \\frac{5}{9} = \\frac{30}{90} = \\frac{1}{3}$." },
          { key: "d", text: "Hai biến cố $A$ và $B$ độc lập với nhau.", isCorrect: false, explanation: "Do $P(B|A) = 5/9 \\ne P(B) = 6/10$ nên $A$ và $B$ phụ thuộc." }
        ]
      }
    ],
    [
      {
        id: "g12_c6_sa1",
        question: "Một xét nghiệm y khoa có độ nhạy 95% (người có bệnh xét nghiệm dương tính là 0.95) và độ đặc hiệu 90% (người không bệnh xét nghiệm âm tính là 0.90). Giả sử tỉ lệ mắc bệnh trong cộng đồng là 2%. Tính xác suất một người thực sự mắc bệnh khi có kết quả xét nghiệm dương tính (làm tròn đến hàng phần trăm, ví dụ 0.16).",
        correctAnswer: "0.16", hint: "Áp dụng công thức Bayes: $P(B|+) = \\frac{0.02 \\cdot 0.95}{0.02 \\cdot 0.95 + 0.98 \\cdot 0.10} = \\frac{0.019}{0.019 + 0.098} = \\frac{0.019}{0.117} \\approx 0.162$.", points: 0.5, source: "🌐 Đề Thi THPT Quốc Gia"
      }
    ],
    [
      {
        id: "g12_c6_es1",
        question: "Một nhà máy có 3 phân xưởng sản xuất cùng một loại linh kiện: Phân xưởng I sản xuất 40%, Phân xưởng II sản xuất 35%, Phân xưởng III sản xuất 25% tổng sản lượng. Tỉ lệ phế phẩm tương ứng của ba phân xưởng lần lượt là 2%, 3% và 4%.\\n\\na) Lấy ngẫu nhiên một linh kiện từ kho. Tính xác suất để linh kiện đó là phế phẩm.\\nb) Giả sử linh kiện lấy ra là phế phẩm. Tính xác suất để linh kiện đó do Phân xưởng I sản xuất.",
        points: 1.0, source: "🌐 Sở GD&ĐT Hà Nội",
        solution: "Barem điểm chi tiết:\\n- Bước 1 (0.25đ): Gọi $A_i$ là biến cố linh kiện do phân xưởng $i$ sản xuất ($i=1,2,3$). Ta có $P(A_1) = 0.4, P(A_2) = 0.35, P(A_3) = 0.25$.\\n  Gọi $B$ là biến cố linh kiện là phế phẩm. $P(B|A_1) = 0.02, P(B|A_2) = 0.03, P(B|A_3) = 0.04$.\\n- Bước 2 (0.25đ): Theo công thức xác suất toàn phần:\\n  $P(B) = 0.4(0.02) + 0.35(0.03) + 0.25(0.04) = 0.008 + 0.0105 + 0.01 = 0.0285$ (hay 2.85%).\\n- Bước 3 (0.25đ): Xác suất linh kiện phế phẩm do phân xưởng I sản xuất (công thức Bayes):\\n  $P(A_1|B) = \\frac{P(A_1)P(B|A_1)}{P(B)} = \\frac{0.008}{0.0285} = \\frac{16}{57} \\approx 0.2807$ (hay 28.07%).\\n- Bước 4 (0.25đ): Kết luận xác suất phế phẩm là 2.85% và khả năng từ xưởng I là xấp xỉ 28.07%."
      }
    ]
  );

  // KỲ THI GIỮA KỲ 1 (LỚP 12: CHƯƠNG 1 + CHƯƠNG 2)
  B[12].mid1 = createReviewScope(
    [...B[12].ch_1.part1_mcq, ...B[12].ch_2.part1_mcq],
    [...B[12].ch_1.part2_trueFalse, ...B[12].ch_2.part2_trueFalse],
    [...B[12].ch_1.part3_shortAnswer, ...B[12].ch_2.part3_shortAnswer],
    [...B[12].ch_1.part4_essay]
  );

  // KỲ THI GIỮA KỲ 2 (LỚP 12: CHƯƠNG 4 + CHƯƠNG 5)
  B[12].mid2 = createReviewScope(
    [...B[12].ch_4.part1_mcq, ...B[12].ch_5.part1_mcq],
    [...B[12].ch_4.part2_trueFalse, ...B[12].ch_5.part2_trueFalse],
    [...B[12].ch_4.part3_shortAnswer, ...B[12].ch_5.part3_shortAnswer],
    [...B[12].ch_4.part4_essay]
  );

  // KỲ THI CUỐI KỲ 1 (LỚP 12: CHƯƠNG 1 + 2 + 3)
  B[12].fin1 = createReviewScope(
    [...B[12].ch_1.part1_mcq, ...B[12].ch_2.part1_mcq, ...B[12].ch_3.part1_mcq],
    [...B[12].ch_1.part2_trueFalse, ...B[12].ch_2.part2_trueFalse, ...B[12].ch_3.part2_trueFalse],
    [...B[12].ch_1.part3_shortAnswer, ...B[12].ch_2.part3_shortAnswer, ...B[12].ch_3.part3_shortAnswer],
    [...B[12].ch_1.part4_essay]
  );

  // KỲ THI CUỐI KỲ 2 (LỚP 12: CHƯƠNG 4 + 5 + 6)
  B[12].fin2 = createReviewScope(
    [...B[12].ch_4.part1_mcq, ...B[12].ch_5.part1_mcq, ...B[12].ch_6.part1_mcq],
    [...B[12].ch_4.part2_trueFalse, ...B[12].ch_5.part2_trueFalse, ...B[12].ch_6.part2_trueFalse],
    [...B[12].ch_4.part3_shortAnswer, ...B[12].ch_5.part3_shortAnswer, ...B[12].ch_6.part3_shortAnswer],
    [...B[12].ch_5.part4_essay]
  );

  // ==========================================
  // KHỐI 11 - CÁC CHƯƠNG VÀ KỲ THI
  // ==========================================
  const g11_sample = {
    p1: [
      { id: "g11_m1", question: "Tập xác định của hàm số $y = \\tan x$ là:", options: [{key:"A", text:"$D = \\mathbb{R} \\setminus \\{ \\frac{\\pi}{2} + k\\pi \\}"}, {key:"B", text:"$D = \\mathbb{R} \\setminus \\{ k\\pi \\}"}, {key:"C", text:"$D = \\mathbb{R}$"}, {key:"D", text:"$D = \\mathbb{R} \\setminus \\{ \\frac{\\pi}{4} + k\\pi \\}"}], correct: "A", points: 0.25, source: "🌐 Sở GD&ĐT Hà Nội" },
      { id: "g11_m2", question: "Nghiệm của phương trình $\\cos x = \\frac{1}{2}$ là:", options: [{key:"A", text:"$x = \\pm \\frac{\\pi}{3} + k2\\pi$"}, {key:"B", text:"$x = \\pm \\frac{\\pi}{6} + k2\\pi$"}, {key:"C", text:"$x = \\frac{\\pi}{3} + k\\pi$"}, {key:"D", text:"$x = \\pm \\frac{2\\pi}{3} + k2\\pi$"}], correct: "A", points: 0.25, source: "🌐 Chuyên Sư Phạm" },
      { id: "g11_m3", question: "Cho cấp số cộng $(u_n)$ có số hạng đầu $u_1 = 2$ và công sai $d = 3$. Số hạng thứ 5 của cấp số cộng là:", options: [{key:"A", text:"$14$"}, {key:"B", text:"$17$"}, {key:"C", text:"$11$"}, {key:"D", text:"$15$"}], correct: "A", points: 0.25, source: "🌐 Sở GD&ĐT TP.HCM" },
      { id: "g11_m4", question: "Giới hạn $\\lim_{n \\to +\\infty} \\frac{2n + 1}{n - 3}$ bằng:", options: [{key:"A", text:"$2$"}, {key:"B", text:"$1$"}, {key:"C", text:"$-1/3$"}, {key:"D", text:"$+\\infty$"}], correct: "A", points: 0.25, source: "🌐 Chuyên Lam Sơn" },
      { id: "g11_m5", question: "Đạo hàm của hàm số $y = x^3 - 2x + 1$ là:", options: [{key:"A", text:"$3x^2 - 2$"}, {key:"B", text:"$3x^2 - 2x$"}, {key:"C", text:"$x^2 - 2$"}, {key:"D", text:"$3x^2 + 1$"}], correct: "A", points: 0.25, source: "🌐 Sở GD&ĐT Nam Định" },
      { id: "g11_m6", question: "Tập nghiệm của bất phương trình $2^x > 8$ là:", options: [{key:"A", text:"$(3; +\\infty)$"}, {key:"B", text:"$[3; +\\infty)$"}, {key:"C", text:"$(-\\infty; 3)$"}, {key:"D", text:"$(4; +\\infty)$"}], correct: "A", points: 0.25, source: "🌐 Chuyên KHTN" }
    ],
    p2: [
      {
        id: "g11_tf1",
        question: "Cho cấp số nhân $(u_n)$ có $u_1 = 3$ và công bội $q = 2$. Xét tính Đúng / Sai:",
        points: 1.0, source: "🌐 Chuyên Sư Phạm Hà Nội",
        subItems: [
          { key: "a", text: "Số hạng thứ hai là $u_2 = 6$.", isCorrect: true, explanation: "$u_2 = 3 \\cdot 2 = 6$." },
          { key: "b", text: "Công thức số hạng tổng quát là $u_n = 3 \\cdot 2^{n-1}$.", isCorrect: true, explanation: "Công thức đúng chuẩn SGK." },
          { key: "c", text: "Tổng 5 số hạng đầu tiên bằng $S_5 = 93$.", isCorrect: true, explanation: "$S_5 = 3(2^5 - 1)/(2-1) = 3(31) = 93$." },
          { key: "d", text: "Số 192 là số hạng thứ 6 của cấp số nhân.", isCorrect: false, explanation: "$u_7 = 3 \\cdot 64 = 192$, là số hạng thứ 7, không phải thứ 6." }
        ]
      }
    ],
    p3: [
      { id: "g11_sa1", question: "Tính giới hạn $L = \\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$.", correctAnswer: "4", hint: "$\\frac{(x-2)(x+2)}{x-2} = x+2 \\implies L = 4$.", points: 0.5, source: "🌐 Sở GD&ĐT Hà Nội" },
      { id: "g11_sa2", question: "Tính đạo hàm của $y = \\sin(2x)$ tại điểm $x = 0$.", correctAnswer: "2", hint: "$y' = 2\\cos(2x) \\implies y'(0) = 2$.", points: 0.5, source: "🌐 Chuyên Lam Sơn" }
    ],
    p4: [
      {
        id: "g11_es1",
        question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $a$, cạnh bên $SA$ vuông góc với mặt phẳng đáy $(ABCD)$ và $SA = a\\sqrt{2}$.\\n\\na) Chứng minh rằng $CD \\perp (SAD)$.\\nb) Tính góc giữa đường thẳng $SC$ và mặt phẳng đáy $(ABCD)$.",
        points: 1.0, source: "🌐 Sở GD&ĐT Hà Nội",
        solution: "Barem điểm chi tiết:\\n- Bước 1 (0.25đ): Ta có $CD \\perp AD$ (do đáy là hình vuông) và $CD \\perp SA$ (do $SA \\perp (ABCD)$).\\n- Bước 2 (0.25đ): Vì $AD \\cap SA = A \\implies CD \\perp (SAD)$.\\n- Bước 3 (0.25đ): Hình chiếu vuông góc của $SC$ lên $(ABCD)$ là $AC$. Do đó góc giữa $SC$ và $(ABCD)$ là $\\widehat{SCA}$.\\n- Bước 4 (0.25đ): Tam giác $SAC$ vuông tại $A$, $AC = a\\sqrt{2}$ và $SA = a\\sqrt{2} \\implies \\tan\\widehat{SCA} = \\frac{SA}{AC} = 1 \\implies \\widehat{SCA} = 45^\\circ$."
      }
    ]
  };

  for (let i = 1; i <= 9; i++) {
    B[11][`ch_${i}`] = createReviewScope(g11_sample.p1, g11_sample.p2, g11_sample.p3, g11_sample.p4);
  }
  B[11].mid1 = createReviewScope(g11_sample.p1, g11_sample.p2, g11_sample.p3, g11_sample.p4);
  B[11].mid2 = createReviewScope(g11_sample.p1, g11_sample.p2, g11_sample.p3, g11_sample.p4);
  B[11].fin1 = createReviewScope(g11_sample.p1, g11_sample.p2, g11_sample.p3, g11_sample.p4);
  B[11].fin2 = createReviewScope(g11_sample.p1, g11_sample.p2, g11_sample.p3, g11_sample.p4);

  // ==========================================
  // KHỐI 10 - CÁC CHƯƠNG VÀ KỲ THI
  // ==========================================
  const g10_sample = {
    p1: [
      { id: "g10_m1", question: "Mệnh đề phủ định của mệnh đề '$\\forall x \\in \\mathbb{R}, x^2 + 1 > 0$' là:", options: [{key:"A", text:"'$\\exists x \\in \\mathbb{R}, x^2 + 1 \\le 0$'"}, {key:"B", text:"'$\\exists x \\in \\mathbb{R}, x^2 + 1 < 0$'"}, {key:"C", text:"'$\\forall x \\in \\mathbb{R}, x^2 + 1 \\le 0$'"}, {key:"D", text:"'$\\exists x \\in \\mathbb{R}, x^2 + 1 = 0$'"}], correct: "A", points: 0.25, source: "🌐 Sở GD&ĐT Hà Nội" },
      { id: "g10_m2", question: "Cho tập hợp $A = \\{1; 2; 3; 4\\}$ và $B = \\{3; 4; 5; 6\\}$. Giao của hai tập hợp $A \\cap B$ là:", options: [{key:"A", text:"$\\{3; 4\\}$"}, {key:"B", text:"$\\{1; 2\\}$"}, {key:"C", text:"$\\{1; 2; 3; 4; 5; 6\\}$"}, {key:"D", text:"$\\{5; 6\\}$"}], correct: "A", points: 0.25, source: "🌐 Chuyên Sư Phạm" },
      { id: "g10_m3", question: "Cặp số nào sau đây là nghiệm của bất phương trình $2x + 3y > 6$?", options: [{key:"A", text:"$(2; 1)$"}, {key:"B", text:"$(1; 1)$"}, {key:"C", text:"$(0; 2)$"}, {key:"D", text:"$(-1; 2)$"}], correct: "A", points: 0.25, source: "🌐 Sở GD&ĐT TP.HCM" },
      { id: "g10_m4", question: "Tam giác $ABC$ có $a = 6, b = 8, \\widehat{C} = 60^\\circ$. Diện tích tam giác $ABC$ bằng:", options: [{key:"A", text:"$12\\sqrt{3}$"}, {key:"B", text:"$24$"}, {key:"C", text:"$24\\sqrt{3}$"}, {key:"D", text:"$12$"}], correct: "A", points: 0.25, source: "🌐 Chuyên Lam Sơn" },
      { id: "g10_m5", question: "Trong mặt phẳng $Oxy$, toạ độ đỉnh của Parabol $y = x^2 - 4x + 3$ là:", options: [{key:"A", text:"$(2; -1)$"}, {key:"B", text:"$(-2; 15)$"}, {key:"C", text:"$(4; 3)$"}, {key:"D", text:"$(1; 0)$"}], correct: "A", points: 0.25, source: "🌐 Chuyên Phan Bội Châu" },
      { id: "g10_m6", question: "Có bao nhiêu cách chọn 3 học sinh từ một nhóm 10 học sinh?", options: [{key:"A", text:"$120$"}, {key:"B", text:"$720$"}, {key:"C", text:"$30$"}, {key:"D", text:"$1000$"}], correct: "A", points: 0.25, source: "🌐 Chuyên KHTN" }
    ],
    p2: [
      {
        id: "g10_tf1",
        question: "Cho hàm số bậc hai $y = f(x) = x^2 - 4x + 3$. Xét tính Đúng / Sai của các khẳng định sau:",
        points: 1.0, source: "🌐 Chuyên Sư Phạm Hà Nội",
        subItems: [
          { key: "a", text: "Trục đối xứng của đồ thị là đường thẳng $x = 2$.", isCorrect: true, explanation: "$x = -b/(2a) = 2$." },
          { key: "b", text: "Tọa độ đỉnh của Parabol là $I(2; -1)$.", isCorrect: true, explanation: "$f(2) = 4 - 8 + 3 = -1$." },
          { key: "c", text: "Hàm số đồng biến trên khoảng $(-\\infty; 2)$.", isCorrect: false, explanation: "Hệ số $a = 1 > 0$ nên hàm số nghịch biến trên $(-\\infty; 2)$ và đồng biến trên $(2; +\\infty)$." },
          { key: "d", text: "Tập nghiệm của bất phương trình $f(x) < 0$ là khoảng $(1; 3)$.", isCorrect: true, explanation: "Phương trình $f(x) = 0$ có 2 nghiệm $x = 1, x = 3$. Trong khoảng $(1; 3)$ thì $f(x) < 0$." }
        ]
      }
    ],
    p3: [
      { id: "g10_sa1", question: "Cho hai vectơ $\\vec{a} = (2; 3)$ và $\\vec{b} = (-1; 4)$. Tính tích vô hướng $\\vec{a} \\cdot \\vec{b}$.", correctAnswer: "10", hint: "$2(-1) + 3(4) = -2 + 12 = 10$.", points: 0.5, source: "🌐 Sở GD&ĐT Hà Nội" },
      { id: "g10_sa2", question: "Tính số chỉnh hợp chập 2 của 6 phần tử $A_6^2$.", correctAnswer: "30", hint: "$A_6^2 = 6 \\times 5 = 30$.", points: 0.5, source: "🌐 Chuyên Lam Sơn" }
    ],
    p4: [
      {
        id: "g10_es1",
        question: "Một hộ nông dân dự định trồng hai loại cây là ngô và đậu tương trên diện tích tối đa là $8\\text{ ha}$. Để trồng $1\\text{ ha}$ ngô cần $20\\text{ công}$ lao động và thu lợi nhuận $40\\text{ triệu đồng}$. Để trồng $1\\text{ ha}$ đậu tương cần $30\\text{ công}$ lao động và thu lợi nhuận $50\\text{ triệu đồng}$. Biết tổng số công lao động gia đình có thể huy động tối đa là $180\\text{ công}$.\\n\\na) Hãy thiết lập hệ bất phương trình biểu diễn các điều kiện thực tế và hàm lợi nhuận $F(x, y)$.\\nb) Tìm diện tích cần trồng mỗi loại cây để thu được tổng lợi nhuận lớn nhất, và tính lợi nhuận lớn nhất đó.",
        points: 1.0, source: "🌐 Đề Khảo Sát Sở GD&ĐT Hà Nội",
        solution: "Barem điểm chi tiết:\\n- Bước 1 (0.25đ): Gọi $x, y$ (ha) lần lượt là diện tích trồng ngô và đậu tương ($x \\ge 0, y \\ge 0$).\\n  Điều kiện: $x + y \\le 8$ và $20x + 30y \\le 180 \\iff 2x + 3y \\le 18$.\\n- Bước 2 (0.25đ): Hàm mục tiêu lợi nhuận: $F(x, y) = 40x + 50y$ (triệu đồng).\\n- Bước 3 (0.25đ): Miền nghiệm là tứ giác $OABC$ với các đỉnh $O(0;0), A(8;0), B(6;2), C(0;6)$.\\n  Tính $F$: $F(O)=0, F(A)=320, F(B)=340, F(C)=300$ (triệu đồng).\\n- Bước 4 (0.25đ): Lợi nhuận lớn nhất là $340$ triệu đồng khi trồng $6\\text{ ha}$ ngô và $2\\text{ ha}$ đậu tương."
      }
    ]
  };

  for (let i = 1; i <= 9; i++) {
    B[10][`ch_${i}`] = createReviewScope(g10_sample.p1, g10_sample.p2, g10_sample.p3, g10_sample.p4);
  }
  B[10].mid1 = createReviewScope(g10_sample.p1, g10_sample.p2, g10_sample.p3, g10_sample.p4);
  B[10].mid2 = createReviewScope(g10_sample.p1, g10_sample.p2, g10_sample.p3, g10_sample.p4);
  B[10].fin1 = createReviewScope(g10_sample.p1, g10_sample.p2, g10_sample.p3, g10_sample.p4);
  B[10].fin2 = createReviewScope(g10_sample.p1, g10_sample.p2, g10_sample.p3, g10_sample.p4);
})();

const REVIEW_SOURCE_BANK = window.REVIEW_SOURCE_BANK;
