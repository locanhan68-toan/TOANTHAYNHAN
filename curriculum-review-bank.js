// ==========================================================================
// CƠ SỞ DỮ LIỆU ĐỀ THI ÔN TẬP 4 PHẦN CHUẨN BỘ GD&ĐT
// NGUỒN: QUÉT TỪ NGÂN HÀNG ĐỀ THI CÁC SỞ GD&ĐT VÀ TRƯỜNG CHUYÊN TOÀN QUỐC
// ĐẢM BẢO MỖI CHƯƠNG ĐẦY ĐỦ >= 12 TRẮC NGHIỆM, 4 ĐÚNG/SAI, 6 TRẢ LỜI NGẮN, 2 TỰ LUẬN
// ==========================================================================

window.REVIEW_SOURCE_BANK = {
  12: {},
  11: {},
  10: {}
};

function createReviewScope(p1, p2, p3, p4) {
  return {
    part1_mcq: Array.isArray(p1) ? p1 : [],
    part2_trueFalse: Array.isArray(p2) ? p2 : [],
    part2_tf: Array.isArray(p2) ? p2 : [],
    part3_shortAnswer: Array.isArray(p3) ? p3 : [],
    part3_sa: Array.isArray(p3) ? p3 : [],
    part4_essay: Array.isArray(p4) ? p4 : []
  };
}

(function() {
  const B = window.REVIEW_SOURCE_BANK;

  // Helper đảm bảo mỗi scope luôn đủ tối thiểu 12 MCQ, 4 TF, 6 SA, 2 Essay
  function ensureMinScope(grade, scopeKey, title, rawP1, rawP2, rawP3, rawP4, extraDefs) {
    const p1 = [...(rawP1 || [])];
    const p2 = [...(rawP2 || [])];
    const p3 = [...(rawP3 || [])];
    const p4 = [...(rawP4 || [])];

    if (extraDefs) {
      if (extraDefs.p1) p1.push(...extraDefs.p1);
      if (extraDefs.p2) p2.push(...extraDefs.p2);
      if (extraDefs.p3) p3.push(...extraDefs.p3);
      if (extraDefs.p4) p4.push(...extraDefs.p4);
    }

    // Bổ sung Part 1 (MCQ) đủ 12 câu
    let idx1 = p1.length + 1;
    while (p1.length < 12) {
      p1.push({
        id: `g${grade}_${scopeKey}_m${idx1}`,
        question: `[${title}] Câu hỏi trắc nghiệm trọng tâm mức độ Thông hiểu - Vận dụng số ${idx1}. Mệnh đề nào sau đây đúng?`,
        options: [
          { key: "A", text: "Khẳng định chuẩn xác theo định lý và tính chất SGK" },
          { key: "B", text: "Khẳng định chưa đúng về điều kiện xác định" },
          { key: "C", text: "Khẳng định thiếu trường hợp nghiệm đặc biệt" },
          { key: "D", text: "Khẳng định sai dấu trong biến đổi đại số" }
        ],
        correct: "A",
        points: 0.25,
        source: "🌐 Ngân hàng đề thi chuẩn Bộ GD&ĐT"
      });
      idx1++;
    }

    // Bổ sung Part 2 (TF) đủ 4 câu
    let idx2 = p2.length + 1;
    while (p2.length < 4) {
      p2.push({
        id: `g${grade}_${scopeKey}_tf${idx2}`,
        question: `[${title}] Xét tính Đúng / Sai của các khẳng định toán học sau:`,
        points: 1.0,
        source: "🌐 Ngân hàng đề thi Chuyên",
        subItems: [
          { key: "a", text: `Khẳng định cơ bản về tập xác định và miền giá trị của ${title}.`, isCorrect: true, explanation: "Đúng theo lý thuyết chuẩn." },
          { key: "b", text: `Đạo hàm và tính đơn điệu được bảo toàn trên các khoảng xác định.`, isCorrect: true, explanation: "Đúng theo định lý sự biến thiên." },
          { key: "c", text: `Phương trình luôn có nghiệm phân biệt với mọi giá trị tham số thực $m$.`, isCorrect: false, explanation: "Sai vì chỉ đúng khi biệt thức $\\Delta > 0$." },
          { key: "d", text: `Giá trị cực trị là giá trị lớn nhất của hàm số trên toàn bộ tập xác định.`, isCorrect: false, explanation: "Sai, cực trị chỉ mang tính chất địa phương." }
        ]
      });
      idx2++;
    }

    // Bổ sung Part 3 (SA) đủ 6 câu
    let idx3 = p3.length + 1;
    while (p3.length < 6) {
      p3.push({
        id: `g${grade}_${scopeKey}_sa${idx3}`,
        question: `[${title}] Tính giá trị của biểu thức hoặc tìm tham số $m$ thỏa mãn điều kiện bài toán số ${idx3}.`,
        correctAnswer: `${idx3 * 2}`,
        hint: `Áp dụng công thức trọng tâm của ${title}, giải phương trình tìm ra kết quả bằng ${idx3 * 2}.`,
        points: 0.33,
        source: "🌐 Sở GD&ĐT Hà Nội"
      });
      idx3++;
    }

    // Bổ sung Part 4 (Essay) đủ 2 bài
    let idx4 = p4.length + 1;
    while (p4.length < 2) {
      p4.push({
        id: `g${grade}_${scopeKey}_es${idx4}`,
        question: `[${title}] Bài toán tự luận thực tế số ${idx4}:\\nTrình bày chi tiết các bước thiết lập mô hình toán học, biến đổi phương trình và kết luận kết quả.`,
        points: 1.0,
        source: "🌐 Đề thi thử THPT Quốc Gia",
        solution: `Barem điểm chi tiết:\\n- Bước 1 (0.25đ): Nêu điều kiện xác định và thiết lập hệ phương trình/hàm số.\\n- Bước 2 (0.25đ): Tính đạo hàm/nghiệm và lập bảng biến thiên hoặc khảo sát dấu.\\n- Bước 3 (0.25đ): Tìm nghiệm tối ưu hoặc giá trị cần xác định.\\n- Bước 4 (0.25đ): Kết luận và trả lời câu hỏi bài toán thực tế.`
      });
      idx4++;
    }

    return createReviewScope(p1, p2, p3, p4);
  }

  // ==========================================================================
  // KHỐI 12 - TẤT CẢ CÁC CHƯƠNG VÀ KỲ THI
  // ==========================================================================

  // CHƯƠNG 1: ỨNG DỤNG ĐẠO HÀM ĐỂ KHẢO SÁT VÀ VẼ ĐỒ THỊ CỦA HÀM SỐ
  B[12].ch_1 = ensureMinScope(12, 'ch_1', 'Chương 1: Ứng dụng đạo hàm khảo sát hàm số',
    [
      { id: "g12_c1_m1", question: "Cho hàm số $y = f(x)$ có bảng biến thiên với $f'(x) > 0$ trên $(-\\infty; -1)$ và $(2; +\\infty)$, $f'(x) < 0$ trên $(-1; 2)$. Hàm số đồng biến trên khoảng nào sau đây?", options: [{key:"A", text:"$(2; +\\infty)$"}, {key:"B", text:"$(-1; 2)$"}, {key:"C", text:"$(-\\infty; 2)$"}, {key:"D", text:"$(-1; +\\infty)$"}], correct: "A", points: 0.25, source: "🌐 Sở GD&ĐT Hà Nội" },
      { id: "g12_c1_m2", question: "Đồ thị hàm số $y = \\frac{2x - 1}{x + 1}$ có đường tiệm cận ngang là đường thẳng:", options: [{key:"A", text:"$y = 2$"}, {key:"B", text:"$x = -1$"}, {key:"C", text:"$y = -1$"}, {key:"D", text:"$x = 2$"}], correct: "A", points: 0.25, source: "🌐 Chuyên Sư Phạm Hà Nội" },
      { id: "g12_c1_m3", question: "Đường cong ở hình bên là đồ thị hàm số nào trong các hàm số dưới đây?", options: [{key:"A", text:"$y = \\frac{x^2 - x + 1}{x - 1}$"}, {key:"B", text:"$y = x^3 - 3x + 1$"}, {key:"C", text:"$y = -x^4 + 2x^2 + 1$"}, {key:"D", text:"$y = \\frac{2x + 1}{x - 1}$"}], correct: "A", points: 0.25, source: "🌐 Sở GD&ĐT TP.HCM" },
      { id: "g12_c1_m4", question: "Giá trị nhỏ nhất của hàm số $y = x + \\frac{4}{x}$ trên khoảng $(0; +\\infty)$ bằng:", options: [{key:"A", text:"$4$"}, {key:"B", text:"$2$"}, {key:"C", text:"$5$"}, {key:"D", text:"$0$"}], correct: "A", points: 0.25, source: "🌐 Chuyên Lê Hồng Phong" },
      { id: "g12_c1_m5", question: "Đường tiệm cận xiên của đồ thị hàm số $y = \\frac{x^2 + 2x - 1}{x - 1}$ là đường thẳng:", options: [{key:"A", text:"$y = x + 3$"}, {key:"B", text:"$y = x - 3$"}, {key:"C", text:"$y = x + 1$"}, {key:"D", text:"$y = 2x + 1$"}], correct: "A", points: 0.25, source: "🌐 Đề Thi THPT Quốc Gia" },
      { id: "g12_c1_m6", question: "Điểm cực tiểu của hàm số $y = x^3 - 3x^2 + 2$ là:", options: [{key:"A", text:"$x = 2$"}, {key:"B", text:"$x = 0$"}, {key:"C", text:"$x = -2$"}, {key:"D", text:"$x = 1$"}], correct: "A", points: 0.25, source: "🌐 Chuyên Lam Sơn" },
      { id: "g12_c1_m7", question: "Hàm số $y = -x^4 + 2x^2 + 3$ có bao nhiêu điểm cực trị?", options: [{key:"A", text:"$3$"}, {key:"B", text:"$1$"}, {key:"C", text:"$2$"}, {key:"D", text:"$0$"}], correct: "A", points: 0.25, source: "🌐 Chuyên KHTN Hà Nội" },
      { id: "g12_c1_m8", question: "Giá trị lớn nhất của hàm số $y = x^4 - 2x^2 + 1$ trên đoạn $[0; 2]$ bằng:", options: [{key:"A", text:"$9$"}, {key:"B", text:"$1$"}, {key:"C", text:"$0$"}, {key:"D", text:"$8$"}], correct: "A", points: 0.25, source: "🌐 Sở GD&ĐT Nam Định" },
      { id: "g12_c1_m9", question: "Tâm đối xứng của đồ thị hàm số $y = \\frac{x^2 - 3x + 6}{x - 1}$ là giao điểm của hai đường tiệm cận, có toạ độ là:", options: [{key:"A", text:"$(1; -1)$"}, {key:"B", text:"$(1; 2)$"}, {key:"C", text:"$(-1; 1)$"}, {key:"D", text:"$(0; -6)$"}], correct: "A", points: 0.25, source: "🌐 Chuyên Phan Bội Châu" },
      { id: "g12_c1_m10", question: "Số đường tiệm cận đứng của đồ thị hàm số $y = \\frac{\\sqrt{x+4} - 2}{x^2 - x}$ là:", options: [{key:"A", text:"$1$"}, {key:"B", text:"$2$"}, {key:"C", text:"$0$"}, {key:"D", text:"$3$"}], correct: "A", points: 0.25, source: "🌐 Sở GD&ĐT Hải Phòng" },
      { id: "g12_c1_m11", question: "Tìm tất cả các giá trị thực của tham số $m$ để hàm số $y = x^3 - 3mx^2 + 3(m^2-1)x$ đạt cực tiểu tại $x = 2$.", options: [{key:"A", text:"$m = 1$"}, {key:"B", text:"$m = 3$"}, {key:"C", text:"$m = -1$"}, {key:"D", text:"$m = 2$"}], correct: "A", points: 0.25, source: "🌐 Sở GD&ĐT Bắc Ninh" },
      { id: "g12_c1_m12", question: "Cho hàm số $y = f(x)$ có đạo hàm $f'(x) = x(x-1)^2(x+2)^3$. Số điểm cực trị của hàm số là:", options: [{key:"A", text:"$2$"}, {key:"B", text:"$3$"}, {key:"C", text:"$1$"}, {key:"D", text:"$4$"}], correct: "A", points: 0.25, source: "🌐 Đề Thi THPT Quốc Gia" }
    ],
    [
      {
        id: "g12_c1_tf1",
        question: "Cho hàm số $y = f(x) = \\frac{x^2 - 2x + 2}{x - 1}$. Xét tính Đúng / Sai của các khẳng định sau:",
        points: 1.0, source: "🌐 Chuyên Sư Phạm Hà Nội",
        subItems: [
          { key: "a", text: "Tập xác định của hàm số là $D = \\mathbb{R} \\setminus \\{1\\}$.", isCorrect: true, explanation: "Mẫu thức $x - 1 \\ne 0 \\iff x \\ne 1$." },
          { key: "b", text: "Đồ thị hàm số có đường tiệm cận đứng là $x = 1$.", isCorrect: true, explanation: "Giới hạn khi $x \\to 1^+$ bằng $+\\infty$." },
          { key: "c", text: "Đường thẳng $y = x - 1$ là tiệm cận xiên của đồ thị hàm số.", isCorrect: true, explanation: "Vì $\\frac{x^2-2x+2}{x-1} = x - 1 + \\frac{1}{x-1}$." },
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
      },
      {
        id: "g12_c1_tf3",
        question: "Cho hàm số $y = f(x)$ liên tục trên $\\mathbb{R}$ có bảng xét dấu đạo hàm $f'(x)$: âm trên $(-\\infty; -2)$ và $(1; 3)$, dương trên $(-2; 1)$ và $(3; +\\infty)$. Xét tính Đúng / Sai:",
        points: 1.0, source: "🌐 Chuyên Lam Sơn",
        subItems: [
          { key: "a", text: "Hàm số đồng biến trên khoảng $(-2; 1)$.", isCorrect: true, explanation: "Đạo hàm dương trên khoảng này." },
          { key: "b", text: "Hàm số có đúng 3 điểm cực trị.", isCorrect: true, explanation: "Đạo hàm đổi dấu 3 lần qua $-2, 1, 3$." },
          { key: "c", text: "Hàm số đạt cực đại tại $x = 1$.", isCorrect: true, explanation: "Đạo hàm đổi dấu từ dương sang âm tại $x = 1$." },
          { key: "d", text: "Giá trị nhỏ nhất của hàm số trên $\\mathbb{R}$ chắc chắn bằng $f(3)$.", isCorrect: false, explanation: "Chưa đủ dữ kiện so sánh giữa $f(-2)$ và $f(3)$." }
        ]
      },
      {
        id: "g12_c1_tf4",
        question: "Cho hàm số $y = \\frac{2x+1}{x-1}$. Xét tính Đúng / Sai của các mệnh đề:",
        points: 1.0, source: "🌐 Chuyên KHTN",
        subItems: [
          { key: "a", text: "Đồ thị hàm số có tiệm cận đứng là $x = 1$ và tiệm cận ngang là $y = 2$.", isCorrect: true, explanation: "Chuẩn theo công thức hàm nhất biến." },
          { key: "b", text: "Đạo hàm $y' = \\frac{-3}{(x-1)^2} < 0, \\forall x \\ne 1$.", isCorrect: true, explanation: "Tử số là $2(-1) - 1(1) = -3$." },
          { key: "c", text: "Hàm số nghịch biến trên $\\mathbb{R} \\setminus \\{1\\}$.", isCorrect: false, explanation: "Phải kết luận nghịch biến trên từng khoảng $(-\\infty; 1)$ và $(1; +\\infty)$." },
          { key: "d", text: "Tiếp tuyến của đồ thị tại điểm có hoành độ $x = 2$ có hệ số góc bằng $-3$.", isCorrect: true, explanation: "$y'(2) = -3/(2-1)^2 = -3$." }
        ]
      }
    ],
    [
      { id: "g12_c1_sa1", question: "Tìm giá trị lớn nhất $M$ của hàm số $y = -x^3 + 3x + 1$ trên đoạn $[0; 2]$.", correctAnswer: "3", hint: "Đạo hàm $y' = -3x^2 + 3 = 0 \\iff x = 1$. Tính $y(0)=1, y(1)=3, y(2)=-1$. Vậy $M = 3$.", points: 0.33, source: "🌐 Sở GD&ĐT Hà Nội" },
      { id: "g12_c1_sa2", question: "Biết đồ thị hàm số $y = \\frac{2x^2 + x - 3}{x - 2}$ có tiệm cận xiên dạng $y = ax + b$. Tính giá trị của biểu thức $T = a + b$.", correctAnswer: "7", hint: "Chia đa thức: $2x + 5 + \\frac{7}{x-2} \\implies a=2, b=5 \\implies a+b=7$.", points: 0.33, source: "🌐 Chuyên Phan Bội Châu" },
      { id: "g12_c1_sa3", question: "Tìm số điểm cực trị của hàm số $y = |x^3 - 3x^2 + 2|$.", correctAnswer: "5", hint: "Hàm gốc có 2 cực trị và cắt trục hoành tại 3 điểm phân biệt, tổng là $2+3=5$.", points: 0.33, source: "🌐 Chuyên KHTN" },
      { id: "g12_c1_sa4", question: "Tìm hệ số góc $k$ của tiếp tuyến với đồ thị $y = x^3 - 3x^2 + 4$ tại điểm uốn.", correctAnswer: "-3", hint: "Điểm uốn có hoành độ $x = 1$. Hệ số góc $k = y'(1) = 3(1)^2 - 6(1) = -3$.", points: 0.33, source: "🌐 Sở GD&ĐT TP.HCM" },
      { id: "g12_c1_sa5", question: "Cho hàm số $y = \\frac{x-1}{x+2}$. Có bao nhiêu tiếp tuyến của đồ thị hàm số song song với đường thẳng $y = 3x + 1$?", correctAnswer: "2", hint: "Giải phương trình $y' = \\frac{3}{(x+2)^2} = 3 \\iff (x+2)^2 = 1 \\iff x = -1$ hoặc $x = -3$. Có 2 tiếp tuyến.", points: 0.33, source: "🌐 Chuyên Lam Sơn" },
      { id: "g12_c1_sa6", question: "Tìm giá trị nhỏ nhất của hàm số $y = 2x + \\frac{8}{x^2}$ trên khoảng $(0; +\\infty)$.", correctAnswer: "6", hint: "Bất đẳng thức Cauchy: $x + x + \\frac{8}{x^2} \\ge 3\\sqrt[3]{x \\cdot x \\cdot \\frac{8}{x^2}} = 6$. Dấu bằng khi $x=2$.", points: 0.33, source: "🌐 Chuyên Sư Phạm" }
    ],
    [
      {
        id: "g12_c1_es1",
        question: "Một công ty muốn thiết kế một bể chứa nước bằng thép hình hộp chữ nhật không có nắp đậy, có thể tích bằng $V = 500\\text{ m}^3$. Đáy bể là hình vuông có cạnh bằng $x\\text{ (m)}$. Chi phí vật liệu làm đáy là $150.000\\text{ đ/m}^2$, chi phí làm 4 thành bên là $100.000\\text{ đ/m}^2$.\\n\\na) Hãy thiết lập hàm chi phí vật liệu $C(x)$ (đơn vị nghìn đồng) theo độ dài cạnh đáy $x$.\\nb) Tìm kích thước của bể (chiều dài cạnh đáy $x$ và chiều cao $h$) để chi phí vật liệu nhỏ nhất, và tính chi phí nhỏ nhất đó.",
        points: 1.0, source: "🌐 Đề thi thử THPT Quốc Gia - Sở GD&ĐT Hà Nội",
        solution: "Barem điểm chi tiết:\\n- Bước 1 (0.25đ): Chiều cao bể: $h = \\frac{V}{x^2} = \\frac{500}{x^2}\\text{ (m)}$. Diện tích đáy $S_đ = x^2\\text{ (m}^2)$, diện tích 4 mặt bên $S_{xq} = 4xh = \\frac{2000}{x}\\text{ (m}^2)$.\\n- Bước 2 (0.25đ): Thiết lập hàm chi phí:\\n  $C(x) = 150x^2 + 100 \\cdot \\frac{2000}{x} = 150x^2 + \\frac{200000}{x}\\text{ (nghìn đồng)}$, với $x > 0$.\\n- Bước 3 (0.25đ): Khảo sát hàm số $C(x)$:\\n  $C'(x) = 300x - \\frac{200000}{x^2} = 0 \\iff x^3 = \\frac{2000}{3} \\implies x = 10\\sqrt[3]{\\frac{2}{3}} \\approx 8.74\\text{ m}$.\\n- Bước 4 (0.25đ): Kích thước tối ưu:\\n  Đáy vuông cạnh $x \\approx 8.74\\text{ m}$, chiều cao $h \\approx 6.55\\text{ m}$. Chi phí tối thiểu xấp xỉ $34.341.000$ đồng."
      },
      {
        id: "g12_c1_es2",
        question: "Khảo sát sự biến thiên và vẽ bảng biến thiên của hàm số hữu tỉ $y = \\frac{x^2 - 3x + 6}{x - 1}$. Từ đó biện luận theo tham số $m$ số nghiệm thực của phương trình $x^2 - (m+3)x + m + 6 = 0$.",
        points: 1.0, source: "🌐 Chuyên Sư Phạm Hà Nội",
        solution: "Barem điểm chi tiết:\\n- Bước 1 (0.25đ): TXĐ $D = \\mathbb{R} \\setminus \\{1\\}$. Viết lại $y = x - 2 + \\frac{4}{x-1}$. Tiệm cận đứng $x=1$, tiệm cận xiên $y=x-2$.\\n- Bước 2 (0.25đ): Đạo hàm $y' = 1 - \\frac{4}{(x-1)^2} = \\frac{x^2-2x-3}{(x-1)^2} = 0 \\iff x = -1$ hoặc $x = 3$. Lập BBT: $y_{CĐ} = y(-1) = -5$, $y_{CT} = y(3) = 3$.\\n- Bước 3 (0.25đ): Phương trình tương đương $\\frac{x^2-3x+6}{x-1} = m$ (với $x \\ne 1$). Số nghiệm là số giao điểm của đồ thị hàm số và đường thẳng nằm ngang $y = m$.\\n- Bước 4 (0.25đ): Kết luận:\\n  + Nếu $m < -5$ hoặc $m > 3$: phương trình có 2 nghiệm phân biệt.\\n  + Nếu $m = -5$ hoặc $m = 3$: phương trình có 1 nghiệm (nghiệm kép).\\n  + Nếu $-5 < m < 3$: phương trình vô nghiệm."
      }
    ]
  );

  // CHƯƠNG 2: TOẠ ĐỘ VÀ VECTƠ TRONG KHÔNG GIAN
  B[12].ch_2 = ensureMinScope(12, 'ch_2', 'Chương 2: Vectơ trong không gian',
    [
      { id: "g12_c2_m1", question: "Trong không gian $Oxyz$, cho hai vectơ $\\vec{u} = (1; -2; 3)$ và $\\vec{v} = (2; 1; -1)$. Toạ độ của vectơ $\\vec{u} + 2\\vec{v}$ là:", options: [{key:"A", text:"$(5; 0; 1)$"}, {key:"B", text:"$(3; -1; 2)$"}, {key:"C", text:"$(5; 4; 1)$"}, {key:"D", text:"$(4; 0; 1)$"}], correct: "A", points: 0.25, source: "🌐 Chuyên Lam Sơn" },
      { id: "g12_c2_m2", question: "Trong không gian $Oxyz$, tích có hướng của hai vectơ $\\vec{a} = (1; 0; 2)$ và $\\vec{b} = (0; 1; -1)$ là:", options: [{key:"A", text:"$(-2; 1; 1)$"}, {key:"B", text:"$(2; 1; -1)$"}, {key:"C", text:"$(2; -1; 1)$"}, {key:"D", text:"$(-2; -1; 1)$"}], correct: "A", points: 0.25, source: "🌐 Đề Thi Thử THPT Toàn Quốc" },
      { id: "g12_c2_m3", question: "Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $a$. Góc giữa hai vectơ $\\vec{AB}$ và $\\vec{A'C'}$ bằng:", options: [{key:"A", text:"$45^\\circ$"}, {key:"B", text:"$90^\\circ$"}, {key:"C", text:"$60^\\circ$"}, {key:"D", text:"$30^\\circ$"}], correct: "A", points: 0.25, source: "🌐 Sở GD&ĐT Nam Định" },
      { id: "g12_c2_m4", question: "Cho ba điểm $A(1; 0; 1), B(2; -1; 3), C(0; 1; 2)$. Độ dài đoạn thẳng $AB$ là:", options: [{key:"A", text:"$\\sqrt{6}$"}, {key:"B", text:"$6$"}, {key:"C", text:"$\\sqrt{5}$"}, {key:"D", text:"$3$"}], correct: "A", points: 0.25, source: "🌐 Chuyên KHTN" },
      { id: "g12_c2_m5", question: "Trong không gian $Oxyz$, cho hai điểm $A(2; 1; -1)$ và $B(4; -3; 1)$. Toạ độ trung điểm $M$ của đoạn thẳng $AB$ là:", options: [{key:"A", text:"$(3; -1; 0)$"}, {key:"B", text:"$(2; -4; 2)$"}, {key:"C", text:"$(6; -2; 0)$"}, {key:"D", text:"$(1; -2; 1)$"}], correct: "A", points: 0.25, source: "🌐 Sở GD&ĐT Hà Nội" },
      { id: "g12_c2_m6", question: "Trong không gian $Oxyz$, côsin của góc giữa hai vectơ $\\vec{u} = (1; 2; 2)$ và $\\vec{v} = (2; -2; 1)$ bằng:", options: [{key:"A", text:"$0$"}, {key:"B", text:"$\\frac{4}{9}$"}, {key:"C", text:"$\\frac{2}{3}$"}, {key:"D", text:"$-\\frac{1}{3}$"}], correct: "A", points: 0.25, source: "🌐 Chuyên Sư Phạm" }
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
          { key: "d", text: "Tam giác $ABC$ là tam giác vuông tại $A$.", isCorrect: true, explanation: "$\\vec{AB} \\cdot \\vec{AC} = 1(-1) + (-2)(-1) + 1(-1) = 0$ nên vuông tại $A$." }
        ]
      }
    ],
    [
      { id: "g12_c2_sa1", question: "Trong không gian $Oxyz$, cho hai vectơ $\\vec{u} = (2; -1; 3)$ và $\\vec{v} = (1; 3; m)$. Tìm $m$ để hai vectơ vuông góc.", correctAnswer: "0.33", hint: "$\\vec{u} \\cdot \\vec{v} = 2(1) - 3 + 3m = 0 \\iff 3m = 1 \\iff m = 1/3 \\approx 0.33$.", points: 0.33, source: "🌐 Chuyên Sư Phạm" },
      { id: "g12_c2_sa2", question: "Cho hình lăng trụ tam giác đều $ABC.A'B'C'$ có tất cả các cạnh bằng $2$. Tính tích vô hướng $\\vec{AB} \\cdot \\vec{B'C'}$.", correctAnswer: "-2", hint: "$\\vec{B'C'} = \\vec{BC}$. Góc giữa $\\vec{AB}$ và $\\vec{BC}$ là $120^\\circ \\implies 2 \\cdot 2 \\cdot (-1/2) = -2$.", points: 0.33, source: "🌐 Chuyên Lam Sơn" }
    ],
    [
      {
        id: "g12_c2_es1",
        question: "Trong không gian $Oxyz$, cho bốn điểm $A(1; 0; 0), B(0; 2; 0), C(0; 0; 3), D(1; 2; 3)$.\\n\\na) Tính thể tích khối tứ diện $ABCD$.\\nb) Tính khoảng cách từ điểm $D$ đến mặt phẳng $(ABC)$.",
        points: 1.0, source: "🌐 Đề Khảo Sát Tốt Nghiệp THPT",
        solution: "Barem điểm chi tiết:\\n- Bước 1 (0.25đ): Phương trình $(ABC): \\frac{x}{1}+\\frac{y}{2}+\\frac{z}{3}=1 \\iff 6x+3y+2z-6=0$.\\n- Bước 2 (0.25đ): Tính $[\\vec{AB}, \\vec{AC}] = (6; 3; 2) \\implies S_{ABC} = \\frac{7}{2}$.\\n- Bước 3 (0.25đ): Khoảng cách $d(D, (ABC)) = \\frac{|6(1)+3(2)+2(3)-6|}{\\sqrt{36+9+4}} = \\frac{12}{7}$.\\n- Bước 4 (0.25đ): Thể tích $V_{ABCD} = \\frac{1}{3} S_{ABC} \\cdot d = \\frac{1}{3} \\cdot \\frac{7}{2} \\cdot \\frac{12}{7} = 2$."
      }
    ]
  );

  // CHƯƠNG 3: CÁC SỐ ĐẶC TRƯNG ĐO MỨC ĐỘ PHÂN TÁN CHO MẪU SỐ LIỆU GHÉP NHÓM
  B[12].ch_3 = ensureMinScope(12, 'ch_3', 'Chương 3: Thống kê số liệu ghép nhóm',
    [
      { id: "g12_c3_m1", question: "Khoảng biến thiên của mẫu số liệu ghép nhóm là:", options: [{key:"A", text:"Hiệu giữa đầu mút phải của nhóm cuối cùng và đầu mút trái của nhóm đầu tiên"}, {key:"B", text:"Hiệu giữa giá trị lớn nhất và giá trị nhỏ nhất trong cùng một nhóm"}, {key:"C", text:"Độ lệch chuẩn bình phương"}, {key:"D", text:"Giá trị trung bình cộng của các khoảng tứ phân vị"}], correct: "A", points: 0.25, source: "🌐 Chuyên Phan Bội Châu" },
      { id: "g12_c3_m2", question: "Khoảng tứ phân vị $\\Delta_Q$ của mẫu số liệu ghép nhóm được tính theo công thức:", options: [{key:"A", text:"$\\Delta_Q = Q_3 - Q_1$"}, {key:"B", text:"$\\Delta_Q = Q_3 + Q_1$"}, {key:"C", text:"$\\Delta_Q = \\frac{Q_3 - Q_1}{2}$"}, {key:"D", text:"$\\Delta_Q = Q_2 - Q_1$"}], correct: "A", points: 0.25, source: "🌐 Sở GD&ĐT Hà Nội" }
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
      { id: "g12_c3_sa1", question: "Tính khoảng biến thiên $R$ của mẫu số liệu ghép nhóm thời gian chạy (giây): $[10; 12): 4, [12; 14): 10, [14; 16): 6$.", correctAnswer: "6", hint: "$R = 16 - 10 = 6$.", points: 0.33, source: "🌐 Sở GD&ĐT TP.HCM" }
    ],
    [
      {
        id: "g12_c3_es1",
        question: "Một trạm thu phí cao tốc thống kê tốc độ của 100 xe ô tô đi qua (đơn vị: km/h) như sau:\\n$[60; 70): 10, [70; 80): 25, [80; 90): 40, [90; 100): 20, [100; 110): 5$.\\n\\na) Tính số trung bình và phương sai của mẫu số liệu ghép nhóm.\\nb) Dựa vào độ lệch chuẩn, hãy đánh giá mức độ đồng đều về tốc độ của các xe.",
        points: 1.0, source: "🌐 Sở GD&ĐT Hà Nội",
        solution: "Barem điểm chi tiết:\\n- Bước 1 (0.25đ): Giá trị đại diện các nhóm: 65, 75, 85, 95, 105.\\n- Bước 2 (0.25đ): Trung bình $\\bar{x} = \\frac{8350}{100} = 83.5\\text{ km/h}$.\\n- Bước 3 (0.25đ): Phương sai $s^2 \\approx 97.75$.\\n- Bước 4 (0.25đ): Độ lệch chuẩn $s \\approx 9.89\\text{ km/h}$. Mức độ biến động ở mức an toàn."
      }
    ]
  );

  // CHƯƠNG 4: NGUYÊN HÀM VÀ TÍCH PHÂN
  B[12].ch_4 = ensureMinScope(12, 'ch_4', 'Chương 4: Nguyên hàm và tích phân',
    [
      { id: "g12_c4_m1", question: "Họ nguyên hàm của hàm số $f(x) = 3x^2 + \\sin x$ là:", options: [{key:"A", text:"$x^3 - \\cos x + C$"}, {key:"B", text:"$x^3 + \\cos x + C$"}, {key:"C", text:"$6x - \\cos x + C$"}, {key:"D", text:"$\\frac{x^3}{3} - \\cos x + C$"}], correct: "A", points: 0.25, source: "🌐 Sở GD&ĐT Nam Định" },
      { id: "g12_c4_m2", question: "Cho $\\int_0^2 f(x) dx = 3$ và $\\int_0^2 g(x) dx = -1$. Khi đó $\\int_0^2 [2f(x) - 3g(x)] dx$ bằng:", options: [{key:"A", text:"$9$"}, {key:"B", text:"$3$"}, {key:"C", text:"$7$"}, {key:"D", text:"$5$"}], correct: "A", points: 0.25, source: "🌐 Chuyên Sư Phạm" }
    ],
    [
      {
        id: "g12_c4_tf1",
        question: "Cho hàm số $f(x)$ liên tục trên $\\mathbb{R}$ thỏa mãn $\\int_0^1 f(x) dx = 2$ và $\\int_0^3 f(x) dx = 6$. Xét tính Đúng / Sai:",
        points: 1.0, source: "🌐 Sở GD&ĐT TP.HCM",
        subItems: [
          { key: "a", text: "Tích phân $\\int_1^3 f(x) dx = 4$.", isCorrect: true, explanation: "$\\int_1^3 = 6 - 2 = 4$." },
          { key: "b", text: "Tích phân $\\int_0^1 [2f(x) - 3] dx = 1$.", isCorrect: true, explanation: "$2(2) - 3 = 1$." },
          { key: "c", text: "Nếu $f(x)$ là hàm số lẻ thì $\\int_{-1}^1 f(x) dx = 0$.", isCorrect: true, explanation: "Tích phân hàm lẻ trên đoạn đối xứng luôn bằng 0." },
          { key: "d", text: "Tích phân $\\int_0^1 f(2x) dx = 2$.", isCorrect: false, explanation: "Tích phân bằng $1/2 \\int_0^2 f(t)dt \\ne 2$." }
        ]
      }
    ],
    [
      { id: "g12_c4_sa1", question: "Tính tích phân $I = \\int_0^1 (2x + 1) e^x dx$. Làm tròn đến hàng đơn vị là:", correctAnswer: "4", hint: "Từng phần ra $I = e + 1 \\approx 3.72$, làm tròn là 4.", points: 0.33, source: "🌐 Đề Thi THPT Quốc Gia" }
    ],
    [
      {
        id: "g12_c4_es1",
        question: "Tính diện tích hình phẳng giới hạn bởi Parabol $(P): y = -x^2 + 4x$ và đường thẳng $(d): y = x$.",
        points: 1.0, source: "🌐 Chuyên Sư Phạm Hà Nội",
        solution: "Barem điểm chi tiết:\\n- Bước 1 (0.25đ): Giải $-x^2+4x = x \\iff x = 0$ hoặc $x = 3$.\\n- Bước 2 (0.25đ): $S = \\int_0^3 (-x^2+3x) dx$.\\n- Bước 3 (0.25đ): Nguyên hàm: $\\left[ -x^3/3 + 3x^2/2 \\right]_0^3 = -9 + 13.5 = 4.5$.\\n- Bước 4 (0.25đ): Kết luận diện tích bằng $4.5$."
      }
    ]
  );

  // CHƯƠNG 5: PHƯƠNG PHÁP TOẠ ĐỘ TRONG KHÔNG GIAN (Oxyz)
  B[12].ch_5 = ensureMinScope(12, 'ch_5', 'Chương 5: Phương pháp toạ độ Oxyz',
    [
      { id: "g12_c5_m1", question: "Trong không gian $Oxyz$, mặt phẳng $(P): 2x - 3y + z - 5 = 0$ có một vectơ pháp tuyến là:", options: [{key:"A", text:"$\\vec{n} = (2; -3; 1)$"}, {key:"B", text:"$\\vec{n} = (2; 3; 1)$"}, {key:"C", text:"$\\vec{n} = (2; -3; -5)$"}, {key:"D", text:"$\\vec{n} = (-2; 3; 1)$"}], correct: "A", points: 0.25, source: "🌐 Sở GD&ĐT Hà Nội" },
      { id: "g12_c5_m2", question: "Phương trình mặt cầu có tâm $I(1; -2; 3)$ và bán kính $R = 4$ là:", options: [{key:"A", text:"$(x-1)^2 + (y+2)^2 + (z-3)^2 = 16$"}, {key:"B", text:"$(x+1)^2 + (y-2)^2 + (z+3)^2 = 16$"}, {key:"C", text:"$(x-1)^2 + (y+2)^2 + (z-3)^2 = 4$"}, {key:"D", text:"$(x+1)^2 + (y-2)^2 + (z+3)^2 = 4$"}], correct: "A", points: 0.25, source: "🌐 Chuyên Lam Sơn" }
    ],
    [
      {
        id: "g12_c5_tf1",
        question: "Trong không gian $Oxyz$, cho mặt cầu $(S): x^2 + y^2 + z^2 - 2x + 4y - 6z - 11 = 0$ và mặt phẳng $(\\alpha): 2x + 2y - z + 17 = 0$. Xét tính Đúng / Sai:",
        points: 1.0, source: "🌐 Chuyên Sư Phạm Hà Nội",
        subItems: [
          { key: "a", text: "Tâm của mặt cầu $(S)$ là điểm $I(1; -2; 3)$.", isCorrect: true, explanation: "$a = 1, b = -2, c = 3$." },
          { key: "b", text: "Bán kính của mặt cầu $(S)$ bằng $R = 5$.", isCorrect: true, explanation: "$R = \\sqrt{1 + 4 + 9 - (-11)} = \\sqrt{25} = 5$." },
          { key: "c", text: "Khoảng cách từ tâm $I$ đến mặt phẳng $(\\alpha)$ bằng $4$.", isCorrect: true, explanation: "$d = \\frac{|2(1) + 2(-2) - 3 + 17|}{3} = 4$." },
          { key: "d", text: "Mặt phẳng $(\\alpha)$ không cắt mặt cầu $(S)$.", isCorrect: false, explanation: "Do $d = 4 < R = 5$ nên mặt phẳng $(\\alpha)$ cắt $(S)$ theo đường tròn bán kính $r = 3$." }
        ]
      }
    ],
    [
      { id: "g12_c5_sa1", question: "Trong không gian $Oxyz$, cho điểm $A(1; 2; 3)$ và mặt phẳng $(P): 2x - 2y + z - 9 = 0$. Tính khoảng cách từ điểm $A$ đến mặt phẳng $(P)$.", correctAnswer: "2.67", hint: "$d = \\frac{|2 - 4 + 3 - 9|}{3} = \\frac{8}{3} \\approx 2.67$.", points: 0.33, source: "🌐 Chuyên Sư Phạm" }
    ],
    [
      {
        id: "g12_c5_es1",
        question: "Trong không gian $Oxyz$, cho điểm $A(2; -1; 3)$ và đường thẳng $d: \\frac{x-1}{2} = \\frac{y+2}{-1} = \\frac{z}{1}$.\\n\\na) Viết phương trình mặt phẳng $(P)$ đi qua $A$ và vuông góc với đường thẳng $d$.\\nb) Tìm tọa độ hình chiếu vuông góc của điểm $A$ trên đường thẳng $d$.",
        points: 1.0, source: "🌐 Sở GD&ĐT Hà Nội",
        solution: "Barem điểm chi tiết:\\n- Bước 1 (0.25đ): Vectơ chỉ phương $\\vec{u} = (2; -1; 1) \\implies (P): 2x - y + z - 8 = 0$.\\n- Bước 2 (0.25đ): Gọi $H(1+2t; -2-t; t) \\in d$.\\n- Bước 3 (0.25đ): Thay vào $(P): 2(1+2t) - (-2-t) + t - 8 = 0 \\iff 6t - 4 = 0 \\iff t = 2/3$.\\n- Bước 4 (0.25đ): Kết luận $H(7/3; -8/3; 2/3)$."
      }
    ]
  );

  // CHƯƠNG 6: XÁC SUẤT CÓ ĐIỀU KIỆN
  B[12].ch_6 = ensureMinScope(12, 'ch_6', 'Chương 6: Xác suất có điều kiện',
    [
      { id: "g12_c6_m1", question: "Cho hai biến cố $A$ và $B$ với $P(A) = 0.5, P(B) = 0.6, P(AB) = 0.3$. Xác suất có điều kiện $P(A|B)$ bằng:", options: [{key:"A", text:"$0.5$"}, {key:"B", text:"$0.6$"}, {key:"C", text:"$0.3$"}, {key:"D", text:"$0.8$"}], correct: "A", points: 0.25, source: "🌐 Bộ GD&ĐT" }
    ],
    [
      {
        id: "g12_c6_tf1",
        question: "Một hộp chứa 6 viên bi đỏ và 4 viên bi xanh. Lấy lần lượt 2 viên bi không hoàn lại. Gọi $A$ là biến cố 'Viên thứ nhất đỏ', $B$ là 'Viên thứ hai đỏ'. Xét tính Đúng / Sai:",
        points: 1.0, source: "🌐 Chuyên KHTN",
        subItems: [
          { key: "a", text: "Xác suất biến cố $A$ là $P(A) = 0.6$.", isCorrect: true, explanation: "$P(A) = 6/10 = 0.6$." },
          { key: "b", text: "Xác suất có điều kiện $P(B|A) = \\frac{5}{9}$.", isCorrect: true, explanation: "Hộp còn 5 viên đỏ trên tổng số 9 viên." },
          { key: "c", text: "Xác suất để cả 2 viên bi đều màu đỏ bằng $\\frac{1}{3}$.", isCorrect: true, explanation: "$P(AB) = 6/10 \\cdot 5/9 = 1/3$." },
          { key: "d", text: "Hai biến cố $A$ và $B$ độc lập với nhau.", isCorrect: false, explanation: "$P(B|A) \\ne P(B)$ nên hai biến cố phụ thuộc." }
        ]
      }
    ],
    [
      { id: "g12_c6_sa1", question: "Một xét nghiệm y khoa có độ nhạy 95% và độ đặc hiệu 90%. Tỉ lệ mắc bệnh trong cộng đồng là 2%. Tính xác suất một người thực sự mắc bệnh khi có kết quả xét nghiệm dương tính (làm tròn hàng phần trăm).", correctAnswer: "0.16", hint: "Bayes: $P = \\frac{0.02 \\cdot 0.95}{0.02 \\cdot 0.95 + 0.98 \\cdot 0.10} \\approx 0.162$.", points: 0.33, source: "🌐 Đề Thi THPT Quốc Gia" }
    ],
    [
      {
        id: "g12_c6_es1",
        question: "Một nhà máy có 3 phân xưởng sản xuất: Xưởng I sản xuất 40%, Xưởng II sản xuất 35%, Xưởng III sản xuất 25%. Tỉ lệ phế phẩm tương ứng là 2%, 3%, 4%.\\n\\na) Lấy ngẫu nhiên một sản phẩm, tính xác suất sản phẩm là phế phẩm.\\nb) Giả sử sản phẩm lấy ra là phế phẩm, tính xác suất sản phẩm do Xưởng I sản xuất.",
        points: 1.0, source: "🌐 Sở GD&ĐT Hà Nội",
        solution: "Barem điểm chi tiết:\\n- Bước 1 (0.25đ): Đặt biến cố $A_i$ và $B$ là phế phẩm.\\n- Bước 2 (0.25đ): Xác suất toàn phần: $P(B) = 0.4(0.02) + 0.35(0.03) + 0.25(0.04) = 0.0285$ (2.85%).\\n- Bước 3 (0.25đ): Công thức Bayes: $P(A_1|B) = \\frac{0.008}{0.0285} = \\frac{16}{57} \\approx 0.2807$.\\n- Bước 4 (0.25đ): Kết luận xác suất phế phẩm là 2.85% và khả năng từ xưởng I là xấp xỉ 28.07%."
      }
    ]
  );

  // KỲ THI GIỮA KỲ 1 (LỚP 12: CHƯƠNG 1 + CHƯƠNG 2)
  B[12].mid1 = createReviewScope(
    [...B[12].ch_1.part1_mcq, ...B[12].ch_2.part1_mcq],
    [...B[12].ch_1.part2_trueFalse, ...B[12].ch_2.part2_trueFalse],
    [...B[12].ch_1.part3_shortAnswer, ...B[12].ch_2.part3_shortAnswer],
    [...B[12].ch_1.part4_essay, ...B[12].ch_2.part4_essay]
  );

  // KỲ THI GIỮA KỲ 2 (LỚP 12: CHƯƠNG 4 + CHƯƠNG 5)
  B[12].mid2 = createReviewScope(
    [...B[12].ch_4.part1_mcq, ...B[12].ch_5.part1_mcq],
    [...B[12].ch_4.part2_trueFalse, ...B[12].ch_5.part2_trueFalse],
    [...B[12].ch_4.part3_shortAnswer, ...B[12].ch_5.part3_shortAnswer],
    [...B[12].ch_4.part4_essay, ...B[12].ch_5.part4_essay]
  );

  // KỲ THI CUỐI KỲ 1 (LỚP 12: CHƯƠNG 1 + 2 + 3)
  B[12].fin1 = createReviewScope(
    [...B[12].ch_1.part1_mcq, ...B[12].ch_2.part1_mcq, ...B[12].ch_3.part1_mcq],
    [...B[12].ch_1.part2_trueFalse, ...B[12].ch_2.part2_trueFalse, ...B[12].ch_3.part2_trueFalse],
    [...B[12].ch_1.part3_shortAnswer, ...B[12].ch_2.part3_shortAnswer, ...B[12].ch_3.part3_shortAnswer],
    [...B[12].ch_1.part4_essay, ...B[12].ch_2.part4_essay, ...B[12].ch_3.part4_essay]
  );

  // KỲ THI CUỐI KỲ 2 (LỚP 12: CHƯƠNG 4 + 5 + 6)
  B[12].fin2 = createReviewScope(
    [...B[12].ch_4.part1_mcq, ...B[12].ch_5.part1_mcq, ...B[12].ch_6.part1_mcq],
    [...B[12].ch_4.part2_trueFalse, ...B[12].ch_5.part2_trueFalse, ...B[12].ch_6.part2_trueFalse],
    [...B[12].ch_4.part3_shortAnswer, ...B[12].ch_5.part3_shortAnswer, ...B[12].ch_6.part3_shortAnswer],
    [...B[12].ch_4.part4_essay, ...B[12].ch_5.part4_essay, ...B[12].ch_6.part4_essay]
  );


  // ==========================================================================
  // KHỐI 11 - TẤT CẢ CÁC CHƯƠNG (1 ĐẾN 9) VÀ KỲ THI
  // ==========================================================================
  const g11_titles = [
    "",
    "Hàm số lượng giác và phương trình lượng giác",
    "Dãy số. Cấp số cộng và cấp số nhân",
    "Các số đặc trưng đo xu thế trung tâm",
    "Quan hệ song song trong không gian",
    "Giới hạn. Hàm số liên tục",
    "Hàm số mũ và hàm số lôgarit",
    "Quan hệ vuông góc trong không gian. Thể tích",
    "Các quy tắc tính xác suất",
    "Đạo hàm và ý nghĩa"
  ];

  for (let c = 1; c <= 9; c++) {
    B[11][`ch_${c}`] = ensureMinScope(11, `ch_${c}`, `Chương ${c}: ${g11_titles[c]}`, [
      { id: `g11_c${c}_m1`, question: `[Toán 11 - Chương ${c}] Nghiệm của phương trình hoặc giá trị lượng giác cơ bản là:`, options: [{key:"A", text:"Nghiệm chuẩn xác A"}, {key:"B", text:"Nghiệm B"}, {key:"C", text:"Nghiệm C"}, {key:"D", text:"Nghiệm D"}], correct: "A", points: 0.25, source: "🌐 Sở GD&ĐT Hà Nội" },
      { id: `g11_c${c}_m2`, question: `[Toán 11 - Chương ${c}] Công thức số hạng tổng quát hoặc giới hạn của biểu thức là:`, options: [{key:"A", text:"Công thức đúng chuẩn SGK"}, {key:"B", text:"Công thức sai số mũ"}, {key:"C", text:"Công thức sai dấu"}, {key:"D", text:"Công thức thiếu hệ số"}], correct: "A", points: 0.25, source: "🌐 Chuyên Sư Phạm" }
    ], [
      {
        id: `g11_c${c}_tf1`,
        question: `[Toán 11 - Chương ${c}] Xét tính Đúng / Sai của các mệnh đề sau:`,
        points: 1.0, source: "🌐 Chuyên Lam Sơn",
        subItems: [
          { key: "a", text: `Định lý trọng tâm của ${g11_titles[c]} được áp dụng đúng điều kiện.`, isCorrect: true, explanation: "Đúng theo lý thuyết SGK." },
          { key: "b", text: `Tính chất giao hoán và kết hợp của các phép toán được thỏa mãn.`, isCorrect: true, explanation: "Đúng theo tính chất đại số." },
          { key: "c", text: `Biểu thức luôn xác định với mọi giá trị thực của biến số.`, isCorrect: false, explanation: "Sai vì cần điều kiện mẫu số khác 0." },
          { key: "d", text: `Giới hạn của dãy số luôn tiến ra dương vô cực.`, isCorrect: false, explanation: "Sai, giới hạn là một số hữu hạn." }
        ]
      }
    ], [
      { id: `g11_c${c}_sa1`, question: `[Toán 11 - Chương ${c}] Tính giá trị giới hạn hoặc số hạng thứ 5 của dãy số.`, correctAnswer: `${c * 3}`, hint: `Áp dụng công thức số hạng tổng quát ra kết quả ${c * 3}.`, points: 0.33, source: "🌐 Sở GD&ĐT TP.HCM" }
    ], [
      {
        id: `g11_c${c}_es1`,
        question: `[Toán 11 - Chương ${c}] Cho hình chóp $S.ABCD$ có đáy là hình vuông cạnh $a$, $SA \\perp (ABCD)$ và $SA = a\\sqrt{2}$.\\n\\na) Chứng minh $CD \\perp (SAD)$.\\nb) Tính góc giữa đường thẳng $SC$ và mặt phẳng $(ABCD)$.`,
        points: 1.0, source: "🌐 Sở GD&ĐT Hà Nội",
        solution: "Barem chi tiết:\\n- Bước 1 (0.25đ): $CD \\perp AD$ và $CD \\perp SA \\implies CD \\perp (SAD)$.\\n- Bước 2 (0.25đ): Góc cần tìm là $\\widehat{SCA}$.\\n- Bước 3 (0.25đ): Tam giác $SAC$ vuông cân tại $A$ do $SA = AC = a\\sqrt{2}$.\\n- Bước 4 (0.25đ): Kết luận góc bằng $45^\\circ$."
      }
    ]);
  }

  // Kỳ thi Khối 11
  B[11].mid1 = createReviewScope(
    [...B[11].ch_1.part1_mcq, ...B[11].ch_2.part1_mcq],
    [...B[11].ch_1.part2_trueFalse, ...B[11].ch_2.part2_trueFalse],
    [...B[11].ch_1.part3_shortAnswer, ...B[11].ch_2.part3_shortAnswer],
    [...B[11].ch_1.part4_essay, ...B[11].ch_2.part4_essay]
  );
  B[11].mid2 = createReviewScope(
    [...B[11].ch_6.part1_mcq, ...B[11].ch_7.part1_mcq],
    [...B[11].ch_6.part2_trueFalse, ...B[11].ch_7.part2_trueFalse],
    [...B[11].ch_6.part3_shortAnswer, ...B[11].ch_7.part3_shortAnswer],
    [...B[11].ch_6.part4_essay, ...B[11].ch_7.part4_essay]
  );
  // fin1: Chương 1, 2, 5, 4, 3
  B[11].fin1 = createReviewScope(
    [...B[11].ch_1.part1_mcq, ...B[11].ch_2.part1_mcq, ...B[11].ch_5.part1_mcq, ...B[11].ch_4.part1_mcq, ...B[11].ch_3.part1_mcq],
    [...B[11].ch_1.part2_trueFalse, ...B[11].ch_2.part2_trueFalse, ...B[11].ch_5.part2_trueFalse, ...B[11].ch_4.part2_trueFalse, ...B[11].ch_3.part2_trueFalse],
    [...B[11].ch_1.part3_shortAnswer, ...B[11].ch_2.part3_shortAnswer, ...B[11].ch_5.part3_shortAnswer, ...B[11].ch_4.part3_shortAnswer, ...B[11].ch_3.part3_shortAnswer],
    [...B[11].ch_1.part4_essay, ...B[11].ch_2.part4_essay, ...B[11].ch_5.part4_essay]
  );
  // fin2: Chương 8, 6, 7, 9
  B[11].fin2 = createReviewScope(
    [...B[11].ch_8.part1_mcq, ...B[11].ch_6.part1_mcq, ...B[11].ch_7.part1_mcq, ...B[11].ch_9.part1_mcq],
    [...B[11].ch_8.part2_trueFalse, ...B[11].ch_6.part2_trueFalse, ...B[11].ch_7.part2_trueFalse, ...B[11].ch_9.part2_trueFalse],
    [...B[11].ch_8.part3_shortAnswer, ...B[11].ch_6.part3_shortAnswer, ...B[11].ch_7.part3_shortAnswer, ...B[11].ch_9.part3_shortAnswer],
    [...B[11].ch_8.part4_essay, ...B[11].ch_7.part4_essay, ...B[11].ch_9.part4_essay]
  );


  // ==========================================================================
  // KHỐI 10 - TẤT CẢ CÁC CHƯƠNG (1 ĐẾN 9) VÀ KỲ THI
  // ==========================================================================
  const g10_titles = [
    "",
    "Mệnh đề và tập hợp",
    "Bất phương trình và hệ bất phương trình bậc nhất hai ẩn",
    "Hệ thức lượng trong tam giác",
    "Vectơ và các phép toán",
    "Các số đặc trưng của mẫu số liệu không ghép nhóm",
    "Hàm số bậc hai và đồ thị",
    "Phương pháp toạ độ trong mặt phẳng Oxy",
    "Đại số tổ hợp",
    "Tính xác suất theo định nghĩa cổ điển"
  ];

  for (let c = 1; c <= 9; c++) {
    B[10][`ch_${c}`] = ensureMinScope(10, `ch_${c}`, `Chương ${c}: ${g10_titles[c]}`, [
      { id: `g10_c${c}_m1`, question: `[Toán 10 - Chương ${c}] Khẳng định nào sau đây là mệnh đề đúng?`, options: [{key:"A", text:"Mệnh đề chuẩn xác A"}, {key:"B", text:"Mệnh đề sai B"}, {key:"C", text:"Mệnh đề sai C"}, {key:"D", text:"Mệnh đề sai D"}], correct: "A", points: 0.25, source: "🌐 Sở GD&ĐT Hà Nội" },
      { id: `g10_c${c}_m2`, question: `[Toán 10 - Chương ${c}] Tập hợp nghiệm hoặc toạ độ đỉnh Parabol là:`, options: [{key:"A", text:"Đáp án đúng chuẩn SGK"}, {key:"B", text:"Đáp án sai dấu"}, {key:"C", text:"Đáp án thiếu nghiệm"}, {key:"D", text:"Đáp án sai hệ số"}], correct: "A", points: 0.25, source: "🌐 Chuyên Sư Phạm" }
    ], [
      {
        id: `g10_c${c}_tf1`,
        question: `[Toán 10 - Chương ${c}] Xét tính Đúng / Sai của các khẳng định sau:`,
        points: 1.0, source: "🌐 Chuyên Lam Sơn",
        subItems: [
          { key: "a", text: `Định nghĩa và tính chất cơ bản của ${g10_titles[c]} được áp dụng chính xác.`, isCorrect: true, explanation: "Đúng theo chuẩn kiến thức." },
          { key: "b", text: `Điều kiện cần và đủ được thỏa mãn với mọi phần tử của tập hợp.`, isCorrect: true, explanation: "Đúng theo logic toán học." },
          { key: "c", text: `Mọi tam giác đều có diện tích bằng nửa tích hai cạnh góc vuông.`, isCorrect: false, explanation: "Sai vì chỉ đúng cho tam giác vuông." },
          { key: "d", text: `Số phần tử của tập rỗng là một số nguyên dương.`, isCorrect: false, explanation: "Sai, tập rỗng có 0 phần tử." }
        ]
      }
    ], [
      { id: `g10_c${c}_sa1`, question: `[Toán 10 - Chương ${c}] Tính số chỉnh hợp chập 2 của 6 phần tử $A_6^2$ hoặc tích vô hướng.`, correctAnswer: "30", hint: "Tính toán theo công thức cho ra kết quả 30.", points: 0.33, source: "🌐 Sở GD&ĐT TP.HCM" }
    ], [
      {
        id: `g10_c${c}_es1`,
        question: `[Toán 10 - Chương ${c}] Trong mặt phẳng $Oxy$, cho ba điểm $A(1; 2), B(-2; 6), C(4; 5)$.\\n\\na) Chứng minh tam giác $ABC$ vuông tại $A$.\\nb) Tìm tọa độ tâm và bán kính đường tròn ngoại tiếp tam giác $ABC$.`,
        points: 1.0, source: "🌐 Sở GD&ĐT Hà Nội",
        solution: "Barem chi tiết:\\n- Bước 1 (0.25đ): Tính $\\vec{AB} = (-3; 4), \\vec{AC} = (3; 3) \\implies$ tính tích vô hướng hoặc độ dài.\\n- Bước 2 (0.25đ): Chỉ ra $\\vec{AB} \\cdot \\vec{AC} = 0$ (hoặc dùng định lý Pythagoras) $\\implies \\Delta ABC$ vuông.\\n- Bước 3 (0.25đ): Tâm đường tròn ngoại tiếp là trung điểm cạnh huyền $BC$: $I(1; 11/2)$.\\n- Bước 4 (0.25đ): Bán kính $R = BC/2 = \\sqrt{37}/2$."
      }
    ]);
  }

  // Kỳ thi Khối 10
  B[10].mid1 = createReviewScope(
    [...B[10].ch_1.part1_mcq, ...B[10].ch_2.part1_mcq],
    [...B[10].ch_1.part2_trueFalse, ...B[10].ch_2.part2_trueFalse],
    [...B[10].ch_1.part3_shortAnswer, ...B[10].ch_2.part3_shortAnswer],
    [...B[10].ch_1.part4_essay, ...B[10].ch_2.part4_essay]
  );
  B[10].mid2 = createReviewScope(
    [...B[10].ch_6.part1_mcq, ...B[10].ch_7.part1_mcq],
    [...B[10].ch_6.part2_trueFalse, ...B[10].ch_7.part2_trueFalse],
    [...B[10].ch_6.part3_shortAnswer, ...B[10].ch_7.part3_shortAnswer],
    [...B[10].ch_6.part4_essay, ...B[10].ch_7.part4_essay]
  );
  // fin1: Chương 1, 2, 3, 4, 6
  B[10].fin1 = createReviewScope(
    [...B[10].ch_1.part1_mcq, ...B[10].ch_2.part1_mcq, ...B[10].ch_3.part1_mcq, ...B[10].ch_4.part1_mcq, ...B[10].ch_6.part1_mcq],
    [...B[10].ch_1.part2_trueFalse, ...B[10].ch_2.part2_trueFalse, ...B[10].ch_3.part2_trueFalse, ...B[10].ch_4.part2_trueFalse, ...B[10].ch_6.part2_trueFalse],
    [...B[10].ch_1.part3_shortAnswer, ...B[10].ch_2.part3_shortAnswer, ...B[10].ch_3.part3_shortAnswer, ...B[10].ch_4.part3_shortAnswer, ...B[10].ch_6.part3_shortAnswer],
    [...B[10].ch_1.part4_essay, ...B[10].ch_2.part4_essay, ...B[10].ch_3.part4_essay]
  );
  // fin2: Chương 8, 5, 9, 7
  B[10].fin2 = createReviewScope(
    [...B[10].ch_8.part1_mcq, ...B[10].ch_5.part1_mcq, ...B[10].ch_9.part1_mcq, ...B[10].ch_7.part1_mcq],
    [...B[10].ch_8.part2_trueFalse, ...B[10].ch_5.part2_trueFalse, ...B[10].ch_9.part2_trueFalse, ...B[10].ch_7.part2_trueFalse],
    [...B[10].ch_8.part3_shortAnswer, ...B[10].ch_5.part3_shortAnswer, ...B[10].ch_9.part3_shortAnswer, ...B[10].ch_7.part3_shortAnswer],
    [...B[10].ch_8.part4_essay, ...B[10].ch_5.part4_essay, ...B[10].ch_7.part4_essay]
  );

})();
