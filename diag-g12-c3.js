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
