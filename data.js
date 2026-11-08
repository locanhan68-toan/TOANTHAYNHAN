// Dữ liệu mẫu mô phỏng hệ thống học Toán từ lớp 6 đến lớp 12
window.MATH_DATA = {
  grades: [
    { id: 6, name: "Toán Lớp 6", description: "Số học, Phân số, Hình học trực quan" },
    { id: 7, name: "Toán Lớp 7", description: "Số hữu tỉ, Tam giác bằng nhau, Biểu thức đại số" },
    { id: 8, name: "Toán Lớp 8", description: "Hằng đẳng thức, Tứ giác, Phân thức đại số" },
    { id: 9, name: "Toán Lớp 9", description: "Hệ thức lượng, Căn thức, Phương trình bậc hai & Vi-ét" },
    { id: 10, name: "Toán Lớp 10", description: "Mệnh đề, Tập hợp, Bất phương trình, Vectơ" },
    { id: 11, name: "Toán Lớp 11", description: "Lượng giác, Cấp số cộng/nhân, Đạo hàm, Hình không gian" },
    { id: 12, name: "Toán Lớp 12", description: "Khảo sát hàm số, Mũ - Logarit, Tích phân, Oxyz" }
  ],

  // ==========================================
  // CẤU TRÚC 4 DẠNG CÂU HỎI CHUẨN BỘ GD&ĐT (2018)
  // ==========================================
  examStructurePresets: {
    format2018: {
      name: "Cấu Trúc Chuẩn Bộ GD&ĐT (GDPT 2018)",
      parts: [
        { id: "p1", name: "Phần I: Trắc nghiệm 4 lựa chọn", defaultQuestions: 12, defaultPoints: 3.0, desc: "Mỗi câu 0.25đ, chọn 1 phương án đúng" },
        { id: "p2", name: "Phần II: Trắc nghiệm Đúng / Sai", defaultQuestions: 4, defaultPoints: 4.0, desc: "Mỗi câu có 4 ý a,b,c,d (chọn đúng/sai từng ý)" },
        { id: "p3", name: "Phần III: Trả lời ngắn", defaultQuestions: 6, defaultPoints: 2.0, desc: "Điền đáp số hoặc giá trị số cuối cùng" },
        { id: "p4", name: "Phần IV: Tự luận", defaultQuestions: 1, defaultPoints: 1.0, desc: "Trình bày bài giải tự luận chi tiết" }
      ],
      defaultDuration: 90
    }
  },

  // CẤU HÌNH MÃ API ĐỊNH DANH MỨC ĐỘ PHÙ HỢP CỦA HỌC SINH (MIỄN PHÍ & CÓ PHÍ)
  apiKeysConfig: {
    "TOAN-FREE-2026": {
      name: "Gói Cộng Đồng Miễn Phí",
      type: "free",
      level: "Cộng đồng miễn phí (Tự do)",
      badge: "bg-emerald-100 text-emerald-800 border-emerald-300",
      description: "Học lý thuyết, xem 3 ví dụ mẫu, làm 10 bài tập xem đáp án số và tham gia thi đấu trường online miễn phí."
    },
    "TOAN-VIP-CHUYEN": {
      name: "Gói Chuyên & HSG",
      type: "paid",
      level: "Nâng cao & Luyện thi Chuyên Toán (Mục tiêu 9.5 - 10đ)",
      badge: "bg-purple-100 text-purple-800 border-purple-200",
      description: "Tập trung các bài toán thực tế cực trị, bất đẳng thức và hình học biến hình."
    },
    "TOAN-9PLUS-2026": {
      name: "Gói Học Sinh Giỏi 9+",
      type: "paid",
      level: "Học sinh Giỏi 9+ (Rèn phản xạ câu phân loại 8-10đ)",
      badge: "bg-indigo-100 text-indigo-800 border-indigo-200",
      description: "Thành thạo dạng toán Vi-ét nâng cao, giải bài toán bằng cách lập hệ phương trình."
    },
    "TOAN-TARGET-8PLUS": {
      name: "Gói Chắc Điểm 8",
      type: "paid",
      level: "Học sinh Khá (Chắc chắn kiến thức 8.0 - 8.8đ)",
      badge: "bg-blue-100 text-blue-800 border-blue-200",
      description: "Chắc 100% câu nhận biết, thông hiểu và vận dụng cơ bản, không sai sót vặt."
    },
    "TOAN-REMEDIAL-GOC": {
      name: "Gói Lấy Lại Gốc",
      type: "paid",
      level: "Lấy lại gốc & Vá lỗ hổng (Rèn chắc kiến thức nền tảng)",
      badge: "bg-amber-100 text-amber-800 border-amber-200",
      description: "Rèn luyện từng bước công thức căn bản, tính toán số học, bù đắp lỗ hổng đại số."
    }
  },

  // NGÂN HÀNG CÂU HỎI MẪU 4 DẠNG (GDPT 2018)
  sample4PartQuestions: {
    // Phần 1: Trắc nghiệm 4 lựa chọn
    part1_mcq: [
      {
        id: "mcq_1",
        question: "Biểu thức $\\sqrt{2x - 4}$ xác định với mọi giá trị của $x$ thỏa mãn:",
        options: [
          { key: "A", text: "$x \\ge 2$" },
          { key: "B", text: "$x > 2$" },
          { key: "C", text: "$x \\le 2$" },
          { key: "D", text: "$x \\ge -2$" }
        ],
        correct: "A",
        points: 0.25,
        source: "Ngân hàng đề Sở GD&ĐT Hà Nội"
      },
      {
        id: "mcq_2",
        question: "Phương trình bậc hai $x^2 - 7x + 12 = 0$ có tích hai nghiệm $P = x_1 x_2$ bằng:",
        options: [
          { key: "A", text: "$-12$" },
          { key: "B", text: "$12$" },
          { key: "C", text: "$7$" },
          { key: "D", text: "$-7$" }
        ],
        correct: "B",
        points: 0.25,
        source: "Tài liệu lưu hành nội bộ của Thầy"
      },
      {
        id: "mcq_3",
        question: "Đường thẳng $d: y = (m-1)x + 3$ song song với đường thẳng $y = 2x - 5$ khi:",
        options: [
          { key: "A", text: "$m = 3$" },
          { key: "B", text: "$m = 1$" },
          { key: "C", text: "$m = -1$" },
          { key: "D", text: "$m = 2$" }
        ],
        correct: "A",
        points: 0.25,
        source: "Đề thi thử THCS Cầu Giấy"
      },
      {
        id: "mcq_4",
        question: "Cho tam giác $ABC$ vuông tại $A$ có $AB = 6\\text{ cm}, AC = 8\\text{ cm}$. Bán kính đường tròn ngoại tiếp tam giác $ABC$ là:",
        options: [
          { key: "A", text: "$10\\text{ cm}$" },
          { key: "B", text: "$5\\text{ cm}$" },
          { key: "C", text: "$4\\text{ cm}$" },
          { key: "D", text: "$4.8\\text{ cm}$" }
        ],
        correct: "B",
        points: 0.25,
        source: "Ngân hàng câu hỏi Thầy biên soạn"
      }
    ],

    // Phần 2: Đúng / Sai (Mỗi câu gồm 4 ý a, b, c, d)
    part2_trueFalse: [
      {
        id: "tf_1",
        question: "Cho hàm số $y = -2x^2$ có đồ thị là Parabol $(P)$ và đường thẳng $(d): y = 2x - 4$. Xét tính Đúng/Sai của các khẳng định sau:",
        subItems: [
          { key: "a", text: "Parabol $(P)$ đi qua gốc tọa độ $O(0; 0)$ và có bề lõm hướng xuống dưới.", isCorrect: true },
          { key: "b", text: "Hàm số đồng biến khi $x > 0$ và nghịch biến khi $x < 0$.", isCorrect: false },
          { key: "c", text: "Phương trình hoành độ giao điểm của $(P)$ và $(d)$ là $2x^2 + 2x - 4 = 0$.", isCorrect: true },
          { key: "d", text: "Đường thẳng $(d)$ cắt $(P)$ tại hai điểm phân biệt có tọa độ là $(1; -2)$ và $(-2; -8)$.", isCorrect: true }
        ],
        points: 1.0,
        source: "Đề khảo sát Chuyên Hà Nội - Amsterdam"
      },
      {
        id: "tf_2",
        question: "Cho phương trình bậc hai $x^2 - 2(m-1)x + m^2 - 3 = 0$ ($m$ là tham số). Xét tính Đúng/Sai của các mệnh đề sau:",
        subItems: [
          { key: "a", text: "Biệt thức thu gọn của phương trình là $\\Delta' = -2m + 4$.", isCorrect: true },
          { key: "b", text: "Phương trình luôn có nghiệm với mọi giá trị của $m$.", isCorrect: false },
          { key: "c", text: "Khi $m = 0$, hai nghiệm của phương trình có tích bằng $-3$.", isCorrect: true },
          { key: "d", text: "Để phương trình có hai nghiệm cùng dấu thì $m < 2$ và $m \\notin [-\\sqrt{3}; \\sqrt{3}]$.", isCorrect: true }
        ],
        points: 1.0,
        source: "Ngân hàng đề Chuyên Toán của Thầy"
      }
    ],

    // Phần 3: Trả lời ngắn (Điền số)
    part3_shortAnswer: [
      {
        id: "sa_1",
        question: "Tính giá trị của biểu thức $T = \\sqrt{(2-\\sqrt{5})^2} + \\sqrt{5}$.",
        correctAnswer: "2",
        hint: "$|2-\\sqrt{5}| + \\sqrt{5} = \\sqrt{5}-2+\\sqrt{5} = 2$.",
        points: 0.5,
        source: "Đề thi thử Sở GD&ĐT TP.HCM"
      },
      {
        id: "sa_2",
        question: "Cho phương trình $x^2 - 4x + m = 0$. Tìm giá trị của $m$ để phương trình có nghiệm kép.",
        correctAnswer: "4",
        hint: "$\\Delta' = 4 - m = 0 \\iff m = 4$.",
        points: 0.5,
        source: "Ngân hàng đề của Thầy"
      },
      {
        id: "sa_3",
        question: "Một hình nón có bán kính đáy $r = 3\\text{ cm}$ và chiều cao $h = 4\\text{ cm}$. Độ dài đường sinh $l$ của hình nón bằng bao nhiêu cm?",
        correctAnswer: "5",
        hint: "$l = \\sqrt{r^2 + h^2} = \\sqrt{3^2 + 4^2} = 5$.",
        points: 0.5,
        source: "Đề khảo sát Chuyên Phan Bội Châu"
      },
      {
        id: "sa_4",
        question: "Cho góc nhọn $\\alpha$ thỏa mãn $\\sin \\alpha = 0.6$. Tính giá trị của $\\tan \\alpha$ (viết kết quả dưới dạng số thập phân).",
        correctAnswer: "0.75",
        hint: "$\\cos \\alpha = 0.8 \\implies \\tan \\alpha = 0.6 / 0.8 = 0.75$.",
        points: 0.5,
        source: "Đề thi thử Sở GD&ĐT Nam Định"
      }
    ],

    // Phần 4: Tự luận
    part4_essay: [
      {
        id: "ess_1",
        question: "Giải bài toán bằng cách lập phương trình hoặc hệ phương trình:\nMột đội xe theo kế hoạch phải chở $120$ tấn hàng. Khi thực hiện có $2$ xe được điều đi làm việc khác nên mỗi xe còn lại phải chở thêm $3$ tấn hàng so với dự định. Hỏi ban đầu đội có bao nhiêu chiếc xe? (Biết sức chở của mỗi xe là như nhau).",
        solution: "Gọi số xe ban đầu là $x$ ($x \\in \\mathbb{N}^*, x > 2$).\nTheo kế hoạch mỗi xe chở $\\dfrac{120}{x}$ tấn.\nThực tế có $x - 2$ xe, mỗi xe chở $\\dfrac{120}{x-2}$ tấn.\nTa có phương trình: $\\dfrac{120}{x-2} - \\dfrac{120}{x} = 3 \\iff x(x-2) = 80 \\iff x^2 - 2x - 80 = 0 \\iff x = 10$ hoặc $x = -8$ (loại).\nVậy ban đầu có 10 chiếc xe.",
        points: 1.0,
        source: "Đề tuyển sinh vào 10 Hà Nội & Đề luyện của Thầy"
      }
    ]
  },

  // ==========================================
  // MỤC ÔN TẬP: CUỐI CHƯƠNG, GIỮA KỲ, CUỐI KỲ
  // ==========================================
  reviewSections: {
    // 1. ÔN TẬP CUỐI CHƯƠNG
    chapterReviews: [
      {
        id: "rev-ch4-grade9",
        grade: 9,
        title: "Ôn Tập Cuối Chương IV: Phương Trình Bậc Hai Một Ẩn & Hệ Thức Vi-ét",
        badge: "Trọng tâm thi vào 10",
        badgeColor: "bg-blue-600",
        authorType: "matrix",
        summary: "Tổng hợp toàn bộ lý thuyết, sơ đồ tư duy hằng đẳng thức, định lý Vi-ét và các dạng bài toán thực tế.",
        sectionsCount: "4 Chuyên đề",
        questionsCount: 25,
        topics: [
          "Chuyên đề 1: Công thức nghiệm và công thức nghiệm thu gọn $\\Delta, \\Delta'$",
          "Chuyên đề 2: Hệ thức Vi-ét và ứng dụng tính giá trị biểu thức đối xứng",
          "Chuyên đề 3: Phương trình quy về bậc hai (phương trình trùng phương, phương trình chứa ẩn ở mẫu)",
          "Chuyên đề 4: Giải bài toán bằng cách lập phương trình (chuyển động, năng suất, hình học)"
        ]
      },
      {
        id: "rev-ch1-grade12",
        grade: 12,
        title: "Ôn Tập Cuối Chương I: Ứng Dụng Đạo Hàm Để Khảo Sát & Vẽ Đồ Thị Hàm Số",
        badge: "Chiếm 25% đề thi THPT",
        badgeColor: "bg-purple-600",
        authorType: "matrix",
        summary: "Tính đơn điệu, cực trị, giá trị lớn nhất - nhỏ nhất, tiệm cận và nhận dạng đồ thị hàm số.",
        sectionsCount: "5 Chuyên đề",
        questionsCount: 50,
        topics: [
          "Chuyên đề 1: Đồng biến, nghịch biến của hàm số chứa tham số $m$",
          "Chuyên đề 2: Cực trị hàm số và cực trị hàm hợp $g(x) = f(u(x))$",
          "Chuyên đề 3: Max - Min trên đoạn và bài toán thực tế tối ưu hóa",
          "Chuyên đề 4: Tiệm cận đứng và tiệm cận ngang"
        ]
      }
    ],

    // 2. ÔN TẬP GIỮA KỲ (HỖ TRỢ 4 DẠNG CHUẨN BỘ)
    midtermReviews: [
      {
        id: "rev-mid2-grade9",
        grade: 9,
        title: "Bộ Đề Ôn Thi Giữa Học Kỳ II (Chuẩn 4 Dạng Mới Bộ GD&ĐT 2018)",
        badge: "Chuẩn 4 Dạng Bộ",
        badgeColor: "bg-emerald-600",
        authorType: "matrix",
        sourceBadge: "Nguồn: Ngân hàng đề thi các Sở GD&ĐT",
        summary: "Gồm 4 phần chuẩn: Trắc nghiệm (12 câu), Đúng/Sai (4 câu), Trả lời ngắn (6 câu), Tự luận (1 bài). Có barem điểm chi tiết kèm Video Thầy chữa đề.",
        duration: "90 phút",
        examCount: "5 Bộ đề",
        youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        teacherSolution: "📌 BAREM ĐÁP ÁN & HƯỚNG DẪN GIẢI CHI TIẾT CỦA THẦY:\n- Phần I (Trắc nghiệm): 1-A (đk x >= 2), 2-B (P = c/a = 12), 3-A (m-1 = 2 <=> m = 3), 4-B (R = BC/2 = 10/2 = 5cm).\n- Phần II (Đúng/Sai): Câu 1: a-Đ, b-S (a=-2<0 nên đồng biến khi x<0), c-Đ, d-Đ.\n- Phần III (Trả lời ngắn): Câu 1: 2; Câu 2: 4 (Delta'=0); Câu 3: 5 (đường sinh l=5cm); Câu 4: 0.75.\n- Phần IV (Tự luận): Gọi số xe ban đầu là x (x nguyên dương, x > 2). Lập pt 120/(x-2) - 120/x = 3. Giải ra x = 10 (thỏa mãn). Vậy có 10 chiếc xe.",
        topics: [
          "Phần I: 12 câu trắc nghiệm nhiều phương án (3.0 đ)",
          "Phần II: 4 câu trắc nghiệm Đúng/Sai 4 ý (4.0 đ)",
          "Phần III: 6 câu điền đáp số ngắn (2.0 đ)",
          "Phần IV: 1 câu tự luận lập hệ phương trình (1.0 đ)"
        ]
      },
      {
        id: "rev-mid2-grade12",
        grade: 12,
        title: "Bộ Đề Ôn Thi Giữa Học Kỳ II - Toán 12 (Tích Phân & Oxyz)",
        badge: "Đề chuẩn thi thử",
        badgeColor: "bg-amber-600",
        authorType: "matrix",
        sourceBadge: "Nguồn: Thầy cung cấp kết hợp trên mạng",
        summary: "Rèn luyện kỹ năng giải nhanh trắc nghiệm, đúng/sai và trả lời ngắn Nguyên hàm - Tích phân và Hình học giải tích Oxyz.",
        duration: "90 phút",
        examCount: "4 Bộ đề",
        topics: [
          "Phương pháp đổi biến và từng phần tìm nguyên hàm",
          "Ứng dụng tích phân tính diện tích hình phẳng và thể tích vật thể tròn xoay",
          "Phương trình mặt phẳng, đường thẳng và mặt cầu trong không gian Oxyz"
        ]
      }
    ],

    // 3. ÔN TẬP CUỐI KỲ
    finaltermReviews: [
      {
        id: "rev-fin2-grade9",
        grade: 9,
        title: "Chiến Dịch Tổng Ôn Thi Cuối Học Kỳ II & Thi Vào 10 Chuyên",
        badge: "Đặc biệt: 9+ Môn Toán",
        badgeColor: "bg-rose-600",
        authorType: "matrix",
        sourceBadge: "Nguồn: Các trường Chuyên toàn quốc",
        summary: "Toàn bộ kiến thức trọng tâm cả năm lớp 9. Đầy đủ trắc nghiệm nhiều phương án, đúng sai, trả lời ngắn và tự luận điểm 10.",
        duration: "120 phút",
        examCount: "8 Đề tổng ôn",
        topics: [
          "Tổng hợp toàn bộ Đại số lớp 9 (Căn thức, Hệ pt, Phương trình bậc hai, Vi-ét)",
          "Tổng hợp toàn bộ Hình học lớp 9 (Hệ thức lượng, Đường tròn, Tứ giác nội tiếp)",
          "Chuyên đề câu 10 điểm (Bất đẳng thức Cauchy, Bunhiacopxki, Min-Max đại số)"
        ]
      },
      {
        id: "rev-fin2-grade12",
        grade: 12,
        title: "Chiến Dịch Về Đích: Tổng Ôn Cuối Kỳ II & Tốt Nghiệp THPT 2026",
        badge: "Bứt phá 9+ ĐGNL",
        badgeColor: "bg-indigo-600",
        authorType: "matrix",
        sourceBadge: "Nguồn: Đề minh họa Bộ GD&ĐT",
        summary: "Hệ thống hóa toàn bộ kiến thức 3 năm THPT theo đúng format mới nhất của Bộ GD&ĐT.",
        duration: "90 phút",
        examCount: "10 Đề chuẩn",
        topics: [
          "Trắc nghiệm nhiều lựa chọn: 12 câu quét lý thuyết cốt lõi",
          "Trắc nghiệm đúng/sai: 4 câu phân hóa thông hiểu và vận dụng",
          "Trả lời ngắn: 6 câu rèn tư duy tính toán chính xác",
          "Chiến thuật lấy trọn vẹn điểm câu 9+ phân loại cao"
        ]
      }
    ]
  },

  // ==========================================
  // ĐẤU TRƯỜNG ONLINE: ĐỀ THI MỚI NHẤT TOÀN QUỐC
  // ==========================================
  arenaExams: [
    {
      id: "exam-hn-2026",
      title: "Đề Khảo Sát Chất Lượng Toán 9 - Sở GD&ĐT Hà Nội (Mới Nhất 2026)",
      grade: 9,
      type: "Tuyển sinh vào 10",
      durationMinutes: 45,
      participantsCount: 1845,
      badge: "Mới cập nhật hôm nay",
      badgeColor: "bg-red-500",
      questions: [
        {
          id: "aq1",
          question: "Cho biểu thức $P = \\dfrac{\\sqrt{x}+1}{\\sqrt{x}-2}$. Tìm tất cả các giá trị nguyên của $x$ để $P$ nhận giá trị nguyên âm.",
          options: [
            { key: "A", text: "$x \\in \\{0; 1\\}$", isCorrect: true, errorTag: null, errorMsg: "Chính xác! Em đã kết hợp chặt chẽ điều kiện xác định $x \\ge 0, x \\ne 4$ và tử dương." },
            { key: "B", text: "$x \\in \\{0; 1; 4\\}$", isCorrect: false, errorTag: "ERR_FORGOT_DOMAIN", errorMsg: "Quên điều kiện xác định: $x \\ne 4$ để mẫu số khác 0!" },
            { key: "C", text: "$x < 4$", isCorrect: false, errorTag: "ERR_NOT_INTEGER", errorMsg: "Đề bài yêu cầu $x$ nguyên và $P$ nhận giá trị nguyên, không phải chỉ xét dấu." },
            { key: "D", text: "$x = 1$", isCorrect: false, errorTag: "ERR_MISSED_ZERO", errorMsg: "Sót trường hợp $x = 0$ (vẫn thỏa mãn $x \\ge 0$ và $P = -1/2$ không nguyên, cần kiểm tra kỹ)." }
          ],
          remedialProblems: [
            {
              title: "Bài tập vá lỗi 1: Tìm $x$ nguyên để phân thức căn bậc hai nhận giá trị nguyên",
              question: "Tìm các số nguyên $x$ để $A = \\dfrac{\\sqrt{x}+3}{\\sqrt{x}-1}$ nhận giá trị nguyên.",
              hint: "Chia tử cho mẫu: $A = 1 + \\dfrac{4}{\\sqrt{x}-1}$, suy ra $\\sqrt{x}-1$ là ước của 4.",
              answer: "$x \\in \\{0; 4; 9; 25\\}$"
            },
            {
              title: "Bài tập vá lỗi 2: Bẫy điều kiện xác định căn thức",
              question: "Tìm tập xác định của biểu thức $B = \\dfrac{2x-1}{\\sqrt{x-3}} + \\sqrt{5-x}$.",
              hint: "Mẫu chứa căn phải $> 0$, căn ở tử $\\ge 0$: $x - 3 > 0$ và $5 - x \\ge 0$.",
              answer: "$3 < x \\le 5$"
            }
          ]
        },
        {
          id: "aq2",
          question: "Phương trình $x^2 - 2(m-1)x + m^2 - 3m = 0$ có hai nghiệm phân biệt $x_1, x_2$ thỏa mãn $x_1^2 + x_2^2 = 8$ khi:",
          options: [
            { key: "A", text: "$m = 2$", isCorrect: true, errorTag: null, errorMsg: "Chuẩn xác! Em tính $\\Delta' = m+1 > 0 \\implies m > -1$ và giải ra $m = 2$ thỏa mãn." },
            { key: "B", text: "$m = -2$ hoặc $m = 2$", isCorrect: false, errorTag: "ERR_FORGOT_DELTA_COND", errorMsg: "Sai lầm nghiêm trọng: Quên đối chiếu điều kiện $\\Delta' > 0$! Tại $m = -2$ thì $\\Delta' = -1 < 0$ (phương trình vô nghiệm)." },
            { key: "C", text: "$m = -2$", isCorrect: false, errorTag: "ERR_REVERSE_SELECTION", errorMsg: "Loại nhầm nghiệm đúng $m = 2$ và nhận nghiệm bị loại do $\\Delta' < 0$." },
            { key: "D", text: "Không có giá trị nào của $m$", isCorrect: false, errorTag: "ERR_CALCULATION", errorMsg: "Tính sai biểu thức $x_1^2 + x_2^2 = (x_1+x_2)^2 - 2x_1x_2$." }
          ],
          remedialProblems: [
            {
              title: "Bài tập vá lỗi 1: Luôn kiểm tra điều kiện $\\Delta > 0$ trước khi tìm tham số",
              question: "Cho phương trình $x^2 - 2mx + m^2 - 4 = 0$. Tìm $m$ để $x_1^2 + x_2^2 = 26$.",
              hint: "$\\Delta' = 4 > 0$ luôn có 2 nghiệm phân biệt. $S^2 - 2P = 4m^2 - 2(m^2-4) = 26$.",
              answer: "$m = 3$ hoặc $m = -3$"
            },
            {
              title: "Bài tập vá lỗi 2: Bẫy điều kiện có nghiệm phân biệt kết hợp Vi-ét",
              question: "Tìm $m$ để phương trình $x^2 - 4x + m = 0$ có hai nghiệm phân biệt $x_1, x_2$ cùng dấu dương.",
              hint: "Điều kiện đồng thời: $\\Delta' > 0$, $S > 0$, $P > 0$.",
              answer: "$0 < m < 4$"
            }
          ]
        },
        {
          id: "aq3",
          question: "Một mảnh đất hình chữ nhật có chu vi $60\\text{ m}$. Nếu tăng chiều rộng thêm $3\\text{ m}$ và giảm chiều dài đi $4\\text{ m}$ thì diện tích không đổi. Chiều rộng ban đầu là:",
          options: [
            { key: "A", text: "$12\\text{ m}$", isCorrect: true, errorTag: null, errorMsg: "Rất tốt! Em đã lập hệ phương trình nửa chu vi $x + y = 30$ và $(x+3)(y-4) = xy$ chính xác." },
            { key: "B", text: "$18\\text{ m}$", isCorrect: false, errorTag: "ERR_SWAPPED_DIMENSION", errorMsg: "Nhầm lẫn giữa chiều rộng ($12\\text{ m}$) và chiều dài ($18\\text{ m}$)." },
            { key: "C", text: "$15\\text{ m}$", isCorrect: false, errorTag: "ERR_HALF_PERIMETER", errorMsg: "Nhầm lẫn mảnh đất thành hình vuông $30/2 = 15$." },
            { key: "D", text: "$10\\text{ m}$", isCorrect: false, errorTag: "ERR_EQUATION_EXPAND", errorMsg: "Khai triển sai phương trình $(x+3)(y-4) = xy$." }
          ],
          remedialProblems: [
            {
              title: "Bài tập vá lỗi 1: Giải toán bằng cách lập hệ phương trình hình học",
              question: "Một khu vườn hình chữ nhật có chiều dài hơn chiều rộng $5\\text{ m}$. Nếu giảm chiều dài $2\\text{ m}$ và tăng chiều rộng $3\\text{ m}$ thì diện tích tăng thêm $16\\text{ m}^2$. Tính diện tích ban đầu.",
              hint: "Gọi chiều rộng là $x$, dài là $x+5$. Phương trình: $(x+5-2)(x+3) - x(x+5) = 16$.",
              answer: "$150\\text{ m}^2$ (Rộng 10m, Dài 15m)"
            },
            {
              title: "Bài tập vá lỗi 2: Bài toán năng suất và chuyển động thực tế",
              question: "Hai vòi nước cùng chảy vào một bể cạn thì sau 4 giờ 48 phút đầy bể. Mỗi giờ vòi 1 chảy bằng $3/4$ vòi 2. Hỏi mỗi vòi chảy một mình bao lâu đầy bể?",
              hint: "Đổi 4h 48p = 24/5 giờ. Tổng năng suất 1 giờ là 5/24.",
              answer: "Vòi 1: 12 giờ, Vòi 2: 8 giờ"
            }
          ]
        }
      ]
    },
    {
      id: "exam-pbc-2026",
      title: "Đề Thi Thử Tốt Nghiệp THPT 2026 - Chuyên Phan Bội Châu (Nghệ An)",
      grade: 12,
      type: "Tốt Nghiệp THPT & ĐGNL",
      durationMinutes: 90,
      participantsCount: 3840,
      badge: "Đề chuẩn Bộ 2026",
      badgeColor: "bg-indigo-600",
      questions: []
    },
    {
      id: "exam-dgnl-2026",
      title: "Đề Khảo Sát Đánh Giá Năng Lực (ĐGNL) ĐHQG 2026 - Tư Duy Định Lượng",
      grade: 12,
      type: "ĐGNL ĐHQG",
      durationMinutes: 60,
      participantsCount: 2910,
      badge: "Hot nhất tuần",
      badgeColor: "bg-purple-600",
      questions: []
    }
  ],

  // BẢNG XẾP HẠNG ĐẤU TRƯỜNG ONLINE
  arenaLeaderboard: [
    { rank: 1, name: "Nguyễn Hoàng Long", school: "THPT Chuyên KHTN", score: 10.0, time: "28 phút", avatar: "HL" },
    { rank: 2, name: "Lê Thu Trang", school: "Chuyên Hà Nội - Amsterdam", score: 9.8, time: "32 phút", avatar: "TT" },
    { rank: 3, name: "Trần Minh Đức", school: "Chuyên Phan Bội Châu", score: 9.6, time: "35 phút", avatar: "MĐ" },
    { rank: 4, name: "Phạm Quốc Tuấn", school: "Chuyên Lê Hồng Phong (TP.HCM)", score: 9.4, time: "39 phút", avatar: "QT" }
  ],

  // BÀI HỌC MẪU TIÊU BIỂU: LỚP 9
  currentLesson: {
    gradeId: 9,
    unitTitle: "Chương IV: Phương trình bậc hai một ẩn",
    lessonTitle: "Bài 6: Hệ thức Vi-ét và ứng dụng",
    
    theory: {
      summary: "Định lý Vi-ét là công cụ mạnh mẽ để tìm mối quan hệ giữa các nghiệm của phương trình bậc hai mà không cần giải trực tiếp phương trình.",
      sections: [
        {
          title: "1. Định lý Vi-ét thuận",
          content: "Nếu phương trình bậc hai $ax^2 + bx + c = 0$ ($a \\ne 0$) có hai nghiệm $x_1, x_2$ (tức là $\\Delta \\ge 0$) thì:\n\n$$\\begin{cases} S = x_1 + x_2 = -\\dfrac{b}{a} \\\\[2mm] P = x_1 \\cdot x_2 = \\dfrac{c}{a} \\end{cases}$$\n\n*Lưu ý:* Luôn phải kiểm tra điều kiện $\\Delta \\ge 0$ (hoặc $\\Delta' \\ge 0$) trước khi áp dụng hệ thức Vi-ét."
        },
        {
          title: "2. Ứng dụng nhẩm nghiệm nhanh",
          content: "- Nếu $a + b + c = 0$ thì phương trình có nghiệm $x_1 = 1$, $x_2 = \\dfrac{c}{a}$.\n- Nếu $a - b + c = 0$ thì phương trình có nghiệm $x_1 = -1$, $x_2 = -\\dfrac{c}{a}$."
        },
        {
          title: "3. Tìm hai số biết tổng $S$ và tích $P$",
          content: "Nếu hai số có tổng bằng $S$ và tích bằng $P$ thì hai số đó là nghiệm của phương trình:\n\n$$X^2 - SX + P = 0$$\n\n*(Điều kiện để tồn tại hai số là $S^2 - 4P \\ge 0$)*"
        }
      ]
    },

    topics: [
      {
        id: "dang-1",
        name: "Dạng 1: Nhẩm nghiệm và tính giá trị biểu thức đối xứng giữa hai nghiệm",
        method: "Phương pháp: Biến đổi biểu thức đối xứng về tổng $S = x_1 + x_2$ và tích $P = x_1 x_2$. Ví dụ: $x_1^2 + x_2^2 = (x_1+x_2)^2 - 2x_1x_2 = S^2 - 2P$.",
        
        examples: [
          {
            title: "Ví dụ 1 (Cơ bản)",
            question: "Không giải phương trình, hãy nhẩm nghiệm của phương trình: $2x^2 - 5x + 3 = 0$.",
            solution: "Ta có các hệ số: $a = 2, b = -5, c = 3$.\nNhận xét: $a + b + c = 2 + (-5) + 3 = 0$.\nTheo định lý Vi-ét nhẩm nghiệm, phương trình có hai nghiệm:\n$$x_1 = 1, \\quad x_2 = \\dfrac{c}{a} = \\dfrac{3}{2}$$"
          },
          {
            title: "Ví dụ 2 (Thông hiểu)",
            question: "Cho phương trình $x^2 - 4x + 1 = 0$ có hai nghiệm $x_1, x_2$. Tính giá trị của biểu thức $A = x_1^2 + x_2^2$ và $B = \\dfrac{1}{x_1} + \\dfrac{1}{x_2}$.",
            solution: "Phương trình có: $\\Delta' = (-2)^2 - 1\\cdot 1 = 3 > 0$ nên phương trình có hai nghiệm phân biệt.\nTheo định lý Vi-ét: $S = x_1 + x_2 = 4$, $P = x_1 x_2 = 1$.\n- Tính $A$: $A = (x_1 + x_2)^2 - 2x_1x_2 = 4^2 - 2(1) = 16 - 2 = 14$.\n- Tính $B$: $B = \\dfrac{x_1 + x_2}{x_1 x_2} = \\dfrac{4}{1} = 4$."
          },
          {
            title: "Ví dụ 3 (Vận dụng)",
            question: "Tìm hai số $u$ và $v$ biết tổng $u + v = 9$ và tích $uv = 18$.",
            solution: "Ta có $S = 9, P = 18$. Xét $S^2 - 4P = 9^2 - 4(18) = 81 - 72 = 9 > 0$.\nDo đó $u, v$ là hai nghiệm của phương trình:\n$$X^2 - 9X + 18 = 0$$\nGiải phương trình: $\\Delta = 81 - 72 = 9 \\implies \\sqrt{\\Delta} = 3$.\n$$X_1 = \\dfrac{9+3}{2} = 6; \\quad X_2 = \\dfrac{9-3}{2} = 3$$\nVậy $(u; v) \\in \\{(6; 3), (3; 6)\\}$."
          }
        ],

        exercises: [
          {
            id: 1,
            level: "Tương tự",
            question: "Nhẩm nghiệm của phương trình $3x^2 + 7x + 4 = 0$.",
            shortAnswer: "$x_1 = -1; x_2 = -\\dfrac{4}{3}$",
            fullSolution: "Ta có $a = 3, b = 7, c = 4$. Nhận thấy $a - b + c = 3 - 7 + 4 = 0$.\nVậy phương trình có hai nghiệm: $x_1 = -1$ và $x_2 = -\\dfrac{c}{a} = -\\dfrac{4}{3}$."
          },
          {
            id: 2,
            level: "Tương tự",
            question: "Cho phương trình $x^2 - 6x + 2 = 0$. Không giải phương trình, tính giá trị biểu thức $M = x_1^2 + x_2^2$.",
            shortAnswer: "$M = 32$",
            fullSolution: "$\\Delta' = 9 - 2 = 7 > 0$. Áp dụng Vi-ét: $S = 6, P = 2$.\n$M = (x_1+x_2)^2 - 2x_1x_2 = 6^2 - 2(2) = 36 - 4 = 32$."
          },
          {
            id: 3,
            level: "Tương tự",
            question: "Tìm hai số $a$ và $b$ biết $a + b = 11$ và $ab = 28$.",
            shortAnswer: "$(a; b) \\in \\{(4; 7), (7; 4)\\}$",
            fullSolution: "$a, b$ là nghiệm phương trình $X^2 - 11X + 28 = 0$. $\\Delta = 121 - 112 = 9$.\nNghiệm là $X_1 = 7, X_2 = 4$. Vậy cặp số cần tìm là $(7; 4)$ hoặc $(4; 7)$."
          },
          {
            id: 4,
            level: "Mở rộng",
            question: "Cho phương trình $2x^2 - 7x + 1 = 0$ có 2 nghiệm $x_1, x_2$. Tính $Q = x_1^3 + x_2^3$.",
            shortAnswer: "$Q = \\dfrac{301}{8}$",
            fullSolution: "Ta có $S = \\dfrac{7}{2}, P = \\dfrac{1}{2}$.\n$Q = (x_1+x_2)(x_1^2 - x_1x_2 + x_2^2) = S(S^2 - 3P) = \\dfrac{7}{2}\\left(\\dfrac{49}{4} - \\dfrac{3}{2}\\right) = \\dfrac{7}{2} \\cdot \\dfrac{43}{4} = \\dfrac{301}{8}$."
          },
          {
            id: 5,
            level: "Mở rộng",
            question: "Lập phương trình bậc hai có hai nghiệm là $y_1 = \\dfrac{1}{x_1}$ và $y_2 = \\dfrac{1}{x_2}$, biết $x_1, x_2$ là nghiệm của $x^2 - 5x + 3 = 0$.",
            shortAnswer: "$3y^2 - 5y + 1 = 0$",
            fullSolution: "$x_1+x_2 = 5, x_1x_2 = 3$.\n$S' = y_1+y_2 = \\dfrac{x_1+x_2}{x_1x_2} = \\dfrac{5}{3}$.\n$P' = y_1y_2 = \\dfrac{1}{x_1x_2} = \\dfrac{1}{3}$.\nPhương trình cần tìm: $y^2 - \\dfrac{5}{3}y + \\dfrac{1}{3} = 0 \\iff 3y^2 - 5y + 1 = 0$."
          },
          {
            id: 6,
            level: "Mở rộng",
            question: "Tính giá trị tuyệt đối $|x_1 - x_2|$ với $x_1, x_2$ là nghiệm của $x^2 - 8x + 12 = 0$.",
            shortAnswer: "$|x_1 - x_2| = 4$",
            fullSolution: "$(x_1 - x_2)^2 = (x_1+x_2)^2 - 4x_1x_2 = 8^2 - 4(12) = 64 - 48 = 16 \\implies |x_1 - x_2| = \\sqrt{16} = 4$."
          },
          {
            id: 7,
            level: "Mở rộng",
            question: "Tìm giá trị của biểu thức $K = (2x_1 - 1)(2x_2 - 1)$ khi $x_1, x_2$ là nghiệm của $3x^2 - 4x - 2 = 0$.",
            shortAnswer: "$K = -\\dfrac{11}{3}$",
            fullSolution: "$K = 4x_1x_2 - 2(x_1+x_2) + 1 = 4\\left(-\\dfrac{2}{3}\\right) - 2\\left(\\dfrac{4}{3}\\right) + 1 = -\\dfrac{8}{3} - \\dfrac{8}{3} + 1 = -\\dfrac{16}{3} + \\dfrac{3}{3} = -\\dfrac{11}{3}$."
          },
          {
            id: 8,
            level: "Nâng cao",
            question: "Cho phương trình $x^2 - 2(m-1)x + m^2 - 3 = 0$. Tìm $m$ để phương trình có hai nghiệm phân biệt $x_1, x_2$ thỏa mãn $x_1^2 + x_2^2 = 10$.",
            shortAnswer: "$m = 3$",
            fullSolution: "1. ĐK có 2 nghiệm pb: $\\Delta' = (m-1)^2 - (m^2-3) = -2m + 4 > 0 \\iff m < 2$.\n2. $x_1^2 + x_2^2 = S^2 - 2P = 4(m-1)^2 - 2(m^2-3) = 2m^2 - 8m + 10$.\nTheo đề: $2m^2 - 8m + 10 = 10 \\iff 2m(m-4) = 0 \\iff m = 0$ hoặc $m = 4$.\nĐối chiếu điều kiện $m < 2$, ta chỉ nhận $m = 0$."
          },
          {
            id: 9,
            level: "Nâng cao",
            question: "Tìm giá trị nhỏ nhất của biểu thức $T = x_1^2 + x_2^2 - 6x_1x_2$ đối với phương trình $x^2 - mx + m - 1 = 0$.",
            shortAnswer: "$\\min T = -7$ khi $m = 4$",
            fullSolution: "$\\Delta = m^2 - 4(m-1) = (m-2)^2 \\ge 0$ với mọi $m$.\n$T = S^2 - 8P = m^2 - 8(m-1) = m^2 - 8m + 8 = (m-4)^2 - 8$.\nDo $(m-4)^2 \\ge 0 \\implies T \\ge -8$. Dấu bằng xảy ra khi $m = 4$."
          },
          {
            id: 10,
            level: "Nâng cao",
            question: "Cho hai nghiệm $x_1, x_2$ thoả mãn $x_1 + x_2 - 2x_1x_2 = 0$ và $x_1 + x_2 = 4$. Hãy tìm phương trình bậc hai nhận $x_1, x_2$ làm nghiệm.",
            shortAnswer: "$X^2 - 4X + 2 = 0$",
            fullSolution: "Từ $x_1 + x_2 = 4 \\implies S = 4$.\nThay vào: $4 - 2P = 0 \\implies P = 2$.\nKiểm tra: $S^2 - 4P = 16 - 8 = 8 > 0$ (thỏa mãn tồn tại nghiệm).\nVậy phương trình cần lập là $X^2 - 4X + 2 = 0$."
          }
        ]
      }
    ],

    assessment: [
      {
        id: "q1",
        type: "multiple_choice",
        question: "Phương trình $x^2 - 3x - 4 = 0$ có tổng hai nghiệm $S$ và tích hai nghiệm $P$ lần lượt là:",
        options: [
          { key: "A", text: "$S = -3, P = -4$", isCorrect: false, errorTag: "ERR_SIGN", errorMsg: "Sai dấu công thức Vi-ét! Nhớ rằng $S = -\\dfrac{b}{a}$, dấu trừ trước hệ số $b$." },
          { key: "B", text: "$S = 3, P = -4$", isCorrect: true, errorTag: null, errorMsg: "Chính xác! $S = -(-3)/1 = 3$ và $P = -4/1 = -4$." },
          { key: "C", text: "$S = 3, P = 4$", isCorrect: false, errorTag: "ERR_PRODUCT_SIGN", errorMsg: "Sai dấu của tích $P$! Công thức là $P = \\dfrac{c}{a}$, ở đây $c = -4$ nên $P = -4$." },
          { key: "D", text: "$S = -3, P = 4$", isCorrect: false, errorTag: "ERR_BOTH_SIGN", errorMsg: "Nhầm lẫn cả dấu của Tổng $S$ và Tích $P$." }
        ],
        remedialProblem: {
          title: "Bài tập khắc phục lỗi sai dấu Vi-ét",
          question: "Tính tổng $S$ và tích $P$ của nghiệm phương trình: $2x^2 + 6x - 5 = 0$.",
          correctAnswer: "$S = -3; P = -\\dfrac{5}{2}$",
          tip: "Mẹo nhớ: Tổng 'đổi dấu' hệ số $b$, Tích 'giữ nguyên' dấu hệ số $c$."
        }
      },
      {
        id: "q2",
        type: "multiple_choice",
        question: "Tìm tất cả các giá trị của $m$ để phương trình $(m-1)x^2 - 2mx + m + 2 = 0$ có hai nghiệm phân biệt:",
        options: [
          { key: "A", text: "$m < 2$", isCorrect: false, errorTag: "ERR_MISSING_A_COND", errorMsg: "Lỗi kinh điển: Quên điều kiện $a \\ne 0$! Ở đây hệ số $a = m - 1$, để là phương trình bậc hai thì $m \\ne 1$." },
          { key: "B", text: "$m < 2$ và $m \\ne 1$", isCorrect: true, errorTag: null, errorMsg: "Rất xuất sắc! Em đã không bị bẫy điều kiện $a = m - 1 \\ne 0$." },
          { key: "C", text: "$m > 2$", isCorrect: false, errorTag: "ERR_INEQUALITY_SIGN", errorMsg: "Sai chiều bất phương trình khi giải $\\Delta' > 0$." },
          { key: "D", text: "$m \\le 2$", isCorrect: false, errorTag: "ERR_STRICT_INEQUALITY", errorMsg: "Đề bài yêu cầu 'hai nghiệm phân biệt' nên $\\Delta' > 0$ (ngặt), không được lấy dấu bằng." }
        ],
        remedialProblem: {
          title: "Bài tập khắc phục bẫy điều kiện hệ số $a$",
          question: "Tìm $m$ để phương trình $(m+2)x^2 - 4x + 1 = 0$ có nghiệm kép.",
          correctAnswer: "$m = 2$",
          tip: "Nhớ kiểm tra điều kiện $a = m + 2 \\ne 0 \\iff m \\ne -2$ rồi mới giải $\\Delta' = 0$."
        }
      },
      {
        id: "q3",
        type: "essay",
        question: "Cho phương trình $x^2 - 2(m+1)x + m^2 + 2 = 0$. Tìm $m$ để phương trình có hai nghiệm $x_1, x_2$ thoả mãn:\n$$x_1^2 + x_2^2 - 3x_1x_2 = 1$$",
        sampleAnswer: "1. ĐK có 2 nghiệm: $\\Delta' = (m+1)^2 - (m^2+2) = 2m - 1 \\ge 0 \\iff m \\ge \\dfrac{1}{2}$.\n2. Theo Vi-ét: $x_1+x_2 = 2(m+1)$ và $x_1x_2 = m^2+2$.\n3. Biến đổi: $x_1^2 + x_2^2 - 3x_1x_2 = (x_1+x_2)^2 - 5x_1x_2 = 4(m+1)^2 - 5(m^2+2) = -m^2 + 8m - 6$.\n4. Giải phương trình: $-m^2 + 8m - 6 = 1 \\iff m^2 - 8m + 7 = 0 \\iff m = 1$ hoặc $m = 7$.\n5. Kết hợp điều kiện $m \\ge \\dfrac{1}{2}$, cả hai giá trị $m = 1$ và $m = 7$ đều thoả mãn.",
        keyCriteria: [
          { id: "c1", title: "Tính đúng $\\Delta'$ và tìm điều kiện $m \\ge \\dfrac{1}{2}$", points: 2.5 },
          { id: "c2", title: "Áp dụng đúng định lý Vi-ét cho tổng và tích", points: 2.0 },
          { id: "c3", title: "Biến đổi biểu thức về dạng $(x_1+x_2)^2 - 5x_1x_2$", points: 2.5 },
          { id: "c4", title: "Giải ra $m=1, m=7$ và đối chiếu điều kiện", points: 3.0 }
        ]
      }
    ]
  },

  // DANH SÁCH LỚP HỌC DO THẦY QUẢN LÝ
  classes: [
    {
      id: "lop-9a",
      name: "Toán 9A - Luyện thi vào 10 Chuyên",
      grade: 9,
      code: "TOAN9A2026",
      studentsCount: 28,
      students: [
        { 
          id: "hs1", 
          name: "Nguyễn Văn An", 
          email: "nguyenvanan.toan9@gmail.com", 
          phone: "0912345678", 
          parentName: "Bác Nguyễn Văn Hùng", 
          parentZalo: "0912888999", 
          apiKey: "TOAN-9PLUS-2026",
          scoreAvg: 8.8, 
          status: "active" 
        },
        { 
          id: "hs2", 
          name: "Trần Thị Mai", 
          email: "tranthimai.9a@gmail.com", 
          phone: "0987654321", 
          parentName: "Cô Lê Thị Hoa", 
          parentZalo: "0987333444", 
          apiKey: "TOAN-VIP-CHUYEN",
          scoreAvg: 9.2, 
          status: "active" 
        },
        { 
          id: "hs3", 
          name: "Lê Hoàng Nam", 
          email: "lehoangnam.hsg@gmail.com", 
          phone: "0905112233", 
          parentName: "Bác Lê Văn Dũng", 
          parentZalo: "0905999888", 
          apiKey: "TOAN-TARGET-8PLUS",
          scoreAvg: 7.5, 
          status: "active" 
        },
        { 
          id: "hs4_new", 
          name: "Đặng Quang Minh", 
          email: "", 
          phone: "", 
          parentName: "", 
          parentZalo: "", 
          apiKey: "TOAN-9PLUS-2026",
          scoreAvg: 0.0, 
          status: "active" 
        }
      ],
      pendingRequests: [
        { 
          id: "req1", 
          name: "Phạm Quốc Bảo", 
          grade: 9,
          email: "", 
          phone: "", 
          parentName: "", 
          parentZalo: "", 
          apiKey: "TOAN-VIP-CHUYEN",
          apiLevel: "Nâng cao & Luyện thi Chuyên Toán (Mục tiêu 9.5 - 10đ)",
          requestDate: "06/11/2026", 
          note: "Đăng ký với Mã API: TOAN-VIP-CHUYEN. Chờ Thầy duyệt để bổ sung Gmail & Zalo." 
        },
        { 
          id: "req2", 
          name: "Vũ Hải Đăng", 
          grade: 9,
          email: "", 
          phone: "", 
          parentName: "", 
          parentZalo: "", 
          apiKey: "TOAN-TARGET-8PLUS",
          apiLevel: "Học sinh Khá (Chắc chắn kiến thức 8.0 - 8.8đ)",
          requestDate: "05/11/2026", 
          note: "Đăng ký với Mã API: TOAN-TARGET-8PLUS. Chờ Thầy duyệt để bổ sung Gmail & Zalo." 
        }
      ]
    },
    {
      id: "lop-12c",
      name: "Toán 12C - Ôn thi ĐGNL & Tốt nghiệp THPT",
      grade: 12,
      code: "DGNL122026",
      studentsCount: 35,
      students: [
        { 
          id: "hs4", 
          name: "Đỗ Minh Đức", 
          email: "minhduc.dgnl@gmail.com", 
          phone: "0944556677", 
          parentName: "Bác Đỗ Quang Huy", 
          parentZalo: "0944111222", 
          scoreAvg: 8.5, 
          status: "active" 
        }
      ],
      pendingRequests: [
        { 
          id: "req3", 
          name: "Bùi Tuyết Nhi", 
          grade: 12,
          email: "", 
          phone: "", 
          parentName: "", 
          parentZalo: "", 
          apiKey: "TOAN-9PLUS-2026",
          apiLevel: "Học sinh Giỏi 9+ (Rèn phản xạ câu phân loại 8-10đ)",
          requestDate: "06/11/2026", 
          note: "Đăng ký với Mã API: TOAN-9PLUS-2026. Chờ Thầy duyệt để bổ sung Gmail & Zalo." 
        }
      ]
    }
  ],

  // ==========================================
  // CHUYÊN MỤC: HỌC SINH GIỎI & LUYỆN THI CHUYÊN
  // ==========================================
  giftedTopics: [
    {
      id: "gifted-bdt-01",
      grade: 9,
      title: "Chuyên Đề 1: Kỹ Thuật Đánh Giá Bất Đẳng Thức & Tìm Cực Trị Đại Số",
      target: "Mục tiêu 9.5 - 10 điểm thi Chuyên & HSG Cấp Tỉnh/TP",
      badge: "Chuyên Sâu Đỉnh Cao",
      badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
      description: "Thành thạo kỹ thuật chọn điểm rơi đối xứng và bất đối xứng, kỹ thuật thêm bớt hạng tử, bất đẳng thức Cauchy-Schwarz dạng Engel (Svac-xơ) và phân tích bình phương SOS.",
      keyFormulas: [
        "Cauchy (AM-GM): $a + b \\ge 2\\sqrt{ab} \\quad (a, b \\ge 0)$",
        "Cauchy-Schwarz dạng Engel: $\\dfrac{x_1^2}{a_1} + \\dfrac{x_2^2}{a_2} \\ge \\dfrac{(x_1+x_2)^2}{a_1+a_2} \\quad (a_i > 0)$",
        "Hằng đẳng thức phụ: $(a+b+c)^2 \\ge 3(ab+bc+ca)$"
      ],
      examples: [
        {
          title: "Ví dụ 1 (Đề Chuyên KHTN): Cho $a, b, c > 0$ thỏa mãn $a+b+c=3$. Tìm GTNN của $P = \\dfrac{a}{1+b^2} + \\dfrac{b}{1+c^2} + \\dfrac{c}{1+a^2}$.",
          solution: "**Phân tích & Lời giải:**\nÁp dụng kỹ thuật *Cauchy ngược dấu*:\n$$\\frac{a}{1+b^2} = a - \\frac{ab^2}{1+b^2} \\ge a - \\frac{ab^2}{2b} = a - \\frac{ab}{2}$$\nTương tự:\n$$P \\ge (a+b+c) - \\frac{ab+bc+ca}{2} = 3 - \\frac{ab+bc+ca}{2}$$\nDo $(a+b+c)^2 \\ge 3(ab+bc+ca) \\Rightarrow ab+bc+ca \\le \\frac{3^2}{3} = 3$.\n$$\\Rightarrow P \\ge 3 - \\frac{3}{2} = \\frac{3}{2}$$\nDấu bằng xảy ra khi $a = b = c = 1$. Vậy $\\min P = \\dfrac{3}{2}$."
        },
        {
          title: "Ví dụ 2 (Đề HSG Hà Nội): Cho $x, y, z > 0$ và $xy+yz+zx = 1$. Chứng minh rằng: $\\dfrac{x}{\\sqrt{x^2+1}} + \\dfrac{y}{\\sqrt{y^2+1}} + \\dfrac{z}{\\sqrt{z^2+1}} \\le \\dfrac{3}{2}$.",
          solution: "**Phân tích & Lời giải:**\nThay $1 = xy+yz+zx$ vào căn thức mẫu số:\n$$x^2 + 1 = x^2 + xy + yz + zx = (x+y)(x+z)$$\nÁp dụng Cauchy:\n$$\\sqrt{(x+y)(x+z)} \\ge 2\\sqrt{\\dots} \\Rightarrow \\frac{x}{\\sqrt{(x+y)(x+z)}} \\le \\frac{1}{2}\\left(\\frac{x}{x+y} + \\frac{x}{x+z}\\right)$$\nCộng vế với vế 3 biểu thức, ta được đúng $\\dfrac{3}{2}$. Dấu bằng khi $x=y=z=\\dfrac{1}{\\sqrt{3}}$."
        },
        {
          title: "Ví dụ 3: Cho $a, b > 0$ thỏa mãn $a+b \\le 1$. Tìm GTNN của $Q = a + b + \\dfrac{1}{a} + \\dfrac{1}{b}$.",
          solution: "**Phân tích kỹ thuật tách ghép điểm rơi:**\nDự đoán dấu bằng tại $a = b = \\dfrac{1}{2}$.\n$$Q = \\left(a + \\frac{1}{4a}\\right) + \\left(b + \\frac{1}{4b}\\right) + \\frac{3}{4}\\left(\\frac{1}{a} + \\frac{1}{b}\\right)$$\nÁp dụng Cauchy cho từng cặp:\n$$a + \\frac{1}{4a} \\ge 1, \\quad b + \\frac{1}{4b} \\ge 1$$\nVà $\\dfrac{1}{a} + \\dfrac{1}{b} \\ge \\dfrac{4}{a+b} \\ge 4$.\n$$\\Rightarrow Q \\ge 1 + 1 + \\frac{3}{4} \\cdot 4 = 5$$.\nVậy $\\min Q = 5$ khi $a = b = \\dfrac{1}{2}$."
        }
      ],
      exercisesCount: 15,
      attachments: [
        { name: "Chuyen_De_Bat_Dang_Thuc_Cauchy_Va_SOS.pdf", size: "2.8 MB", type: "pdf" },
        { name: "Bai_Tap_Luyen_Thi_Chuyen_KHTN_BDT.docx", size: "1.2 MB", type: "docx" }
      ]
    },
    {
      id: "gifted-pt-02",
      grade: 9,
      title: "Chuyên Đề 2: Phương Trình & Hệ Phương Trình Vô Tỉ Chuyên Sâu",
      target: "Phân loại câu 9 - 10 điểm vào Chuyên",
      badge: "Kỹ Thuật Đột Phá",
      badgeColor: "bg-purple-100 text-purple-900 border-purple-300",
      description: "Phương pháp nhân lượng liên hợp tìm nghiệm duy nhất, đặt ẩn phụ không hoàn toàn, phương pháp đưa về hệ đối xứng và đánh giá bất đẳng thức hai vế.",
      keyFormulas: [
        "Liên hợp bậc hai: $\\sqrt{A} - \\sqrt{B} = \\dfrac{A - B}{\\sqrt{A} + \\sqrt{B}}$",
        "Liên hợp bậc ba: $\\sqrt[3]{A} - \\sqrt[3]{B} = \\dfrac{A - B}{\\sqrt[3]{A^2} + \\sqrt[3]{AB} + \\sqrt[3]{B^2}}$",
        "Đưa về tích: $A \\cdot B = 0 \\Leftrightarrow A = 0 \\lor B = 0$"
      ],
      examples: [
        {
          title: "Ví dụ 1 (Đề Chuyên Sư Phạm): Giải phương trình: $x^2 + 4x + 7 = (x+4)\\sqrt{x^2+7}$.",
          solution: "**Lời giải bằng phương pháp đặt ẩn phụ không hoàn toàn:**\nĐặt $t = \\sqrt{x^2+7} > 0 \\Rightarrow t^2 = x^2+7$.\nPhương trình trở thành:\n$$t^2 + 4x = (x+4)t \\Leftrightarrow t^2 - (x+4)t + 4x = 0$$\nCoi đây là phương trình bậc hai theo $t$, có $\\Delta = (x+4)^2 - 16x = (x-4)^2$.\nDo đó:\n$$t = x \\quad \\text{hoặc} \\quad t = 4$$\n- Với $t = 4 \\Rightarrow \\sqrt{x^2+7} = 4 \\Rightarrow x^2+7 = 16 \\Rightarrow x = \\pm 3$.\n- Với $t = x \\Rightarrow \\sqrt{x^2+7} = x$ (Vô nghiệm do $x^2+7 > x^2$).\nVậy phương trình có tập nghiệm $S = \\{-3; 3\\}$."
        }
      ],
      exercisesCount: 12,
      attachments: [
        { name: "Chuyen_De_Phuong_Trinh_He_Vo_Ti.pdf", size: "3.1 MB", type: "pdf" }
      ]
    },
    {
      id: "gifted-geo-03",
      grade: 9,
      title: "Chuyên Đề 3: Hình Học Phẳng Cực Trị, Điểm Đồng Quy & Thẳng Hàng",
      target: "Chinh phục câu hình học cuối đề thi HSG & Chuyên",
      badge: "Tư Duy Hình Học",
      badgeColor: "bg-blue-100 text-blue-900 border-blue-300",
      description: "Định lý Ceva, Menelaus, đường tròn Euler, tứ giác nội tiếp khó, các bài toán tìm vị trí điểm để diện tích hoặc chu vi đạt cực trị.",
      keyFormulas: [
        "Định lý Ceva: $\\dfrac{AF}{FB} \\cdot \\dfrac{BD}{DC} \\cdot \\dfrac{CE}{EA} = 1$",
        "Định lý Menelaus: $\\dfrac{AM}{MB} \\cdot \\dfrac{BN}{NC} \\cdot \\dfrac{CP}{PA} = 1$",
        "Bất đẳng thức hình học: $MA + MB \\ge AB$"
      ],
      examples: [
        {
          title: "Ví dụ 1 (Đề HSG TP Hà Nội): Cho tam giác $ABC$ nhọn nội tiếp $(O)$. Tìm vị trí điểm $M$ trên cung nhỏ $BC$ sao cho $MB + MC$ lớn nhất.",
          solution: "**Lời giải:**\nTrên tia đối của tia $MC$ lấy điểm $D$ sao cho $MD = MB$.\nTa chứng minh được $\\triangle MBD$ đều $\\Rightarrow CD = MB + MC$.\nÁp dụng định lý sin trong tam giác $ACD$, ta suy ra $CD$ lớn nhất khi $M$ là điểm chính giữa cung nhỏ $BC$."
        }
      ],
      exercisesCount: 14,
      attachments: [
        { name: "Cam_Nang_Hinh_Hoc_Ceva_Menelaus.pdf", size: "3.5 MB", type: "pdf" }
      ]
    },
    {
      id: "gifted-num-04",
      grade: 9,
      title: "Chuyên Đề 4: Số Học, Phương Trình Nghiệm Nguyên & Nguyên Lý Dirichlet",
      target: "Luyện thi Chuyên & HSG Quốc Gia",
      badge: "Tư Duy Số Học",
      badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
      description: "Tính chất chia hết, số chính phương, phương trình Diophantine, ứng dụng nguyên lý cực hạn và nguyên lý Dirichlet vào giải toán tổ hợp.",
      keyFormulas: [
        "Định lý Fermat nhỏ: $a^{p-1} \\equiv 1 \\pmod p$ với $(a, p) = 1$",
        "Số chính phương chia 3 hoặc 4 chỉ có số dư là 0 hoặc 1",
        "Nguyên lý Dirichlet: Nhốt $n+1$ con thỏ vào $n$ chuồng thì có ít nhất 1 chuồng chứa $\\ge 2$ con thỏ"
      ],
      examples: [
        {
          title: "Ví dụ 1: Tìm tất cả các số nguyên dương $x, y$ sao cho $x^2 - 2y^2 = 1$.",
          solution: "**Lời giải:** Phương trình Pell căn bản. Nghiệm nguyên dương nhỏ nhất là $(x_1, y_1) = (3, 2)$. Mọi nghiệm tổng quát được sinh bởi dãy $(3 + 2\\sqrt{2})^n = x_n + y_n\\sqrt{2}$."
        }
      ],
      exercisesCount: 10,
      attachments: [
        { name: "So_Hoc_Va_Nguyen_Ly_Dirichlet.pdf", size: "2.2 MB", type: "pdf" }
      ]
    }
  ],

  // ==========================================
  // BÀI VIẾT CHUYÊN SÂU DÀNH CHO HỌC SINH GIỎI
  // ==========================================
  giftedArticles: [
    {
      id: "garticle-01",
      title: "5 Lỗi Sai Kinh Điển Khi Làm Câu Điểm 10 Bất Đẳng Thức & Bí Quyết Khắc Phục",
      author: "Thầy Giáo",
      date: "06/11/2026",
      readTime: "7 phút đọc",
      badge: "Kinh Nghiệm Săn Điểm 10",
      badgeColor: "bg-red-100 text-red-800 border-red-300",
      summary: "Rất nhiều học sinh khá giỏi mất trọn 1.0 điểm ở câu cực trị cuối cùng vì bỏ qua điều kiện dấu bằng xảy ra, nhầm lẫn giữa cực trị biên và cực trị tâm. Bài viết hướng dẫn chi tiết phương pháp kiểm tra tính đối xứng và kỹ thuật tách ghép hạng tử an toàn.",
      keyInsights: [
        "Lỗi 1: Áp dụng Cauchy khi các biến chưa đủ điều kiện dương.",
        "Lỗi 2: Dự đoán sai điểm rơi khi giả thiết chứa điều kiện bất đối xứng.",
        "Lỗi 3: Đánh giá ngược chiều bất đẳng thức trong quá trình biến đổi.",
        "Bí quyết: Luôn thử ngược lại giá trị dấu bằng tại $a = b = c$ hoặc tại biên trước khi chọn chiều đánh giá."
      ],
      attachments: [
        { name: "Cam_Nang_50_Bai_Toan_Cuc_Tri_Diem_Roi_Va_Loi_Giai.pdf", size: "3.2 MB", type: "pdf" },
        { name: "Phieu_Bai_Tap_Tu_Luyen_Bat_Dang_Thuc_Diem_10.docx", size: "1.1 MB", type: "docx" }
      ]
    },
    {
      id: "garticle-02",
      title: "Chiến Thuật Vẽ Thêm Đường Phụ Trong Hình Học Thi Tuyển Sinh Lớp 10 Chuyên",
      author: "Thầy Giáo",
      date: "05/11/2026",
      readTime: "10 phút đọc",
      badge: "Kỹ Thuật Hình Học",
      badgeColor: "bg-blue-100 text-blue-800 border-blue-300",
      summary: "Đề thi Chuyên KHTN, Sư Phạm và HSG Thành Phố thường đòi hỏi vẽ thêm các yếu tố phụ: dựng đường kính đường tròn ngoại tiếp, kẻ tiếp tuyến chung, hoặc dựng hình bình hành phụ để chuyển tỉ số diện tích. Thầy chia sẻ sơ đồ tư duy định hướng vẽ hình chuẩn xác.",
      keyInsights: [
        "Kỹ thuật 1: Kẻ đường kính phụ khi bài toán xuất hiện góc vuông hoặc yếu tố trực tâm.",
        "Kỹ thuật 2: Dựng đường thẳng đối xứng hoặc áp dụng bổ đề chùm đường thẳng điều hòa.",
        "Kỹ thuật 3: Sử dụng định lý Ceva dạng lượng giác và Menelaus để rút gọn tỉ số."
      ],
      attachments: [
        { name: "So_Do_Tu_Duy_Cac_Duong_Phu_Kinh_Dien_Hinh_Hoc.pdf", size: "4.5 MB", type: "pdf" }
      ]
    },
    {
      id: "garticle-03",
      title: "Phân Tích Barem Điểm Thi Vào Lớp 10 Chuyên & Cách Trình Bày Tránh Mất Điểm Oan",
      author: "Thầy Giáo",
      date: "03/11/2026",
      readTime: "6 phút đọc",
      badge: "Kỹ Năng Phòng Thi",
      badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
      summary: "Trong các kỳ thi Chuyên, mỗi bước lập luận thiếu chặt chẽ có thể bị trừ từ 0.25 đến 0.5 điểm. Bài viết mổ xẻ barem chấm thi chính thức của các Hội đồng thi và hướng dẫn học sinh trình bày sạch sẽ, chặt chẽ từng khẳng định toán học.",
      keyInsights: [
        "Không được bỏ sót bước tìm điều kiện xác định (ĐKXĐ) của phương trình và căn thức.",
        "Khi biến đổi tương đương hoặc hệ quả phải ghi rõ ký hiệu $\\Leftrightarrow$ hoặc $\\Rightarrow$.",
        "Kết luận nghiệm rõ ràng, không viết tắt hoặc gộp nhiều trường hợp không tương đương."
      ],
      attachments: [
        { name: "Huong_Dan_Trinh_Bay_Chuan_Barem_Cham_Vao_10_Chuyen.pdf", size: "2.1 MB", type: "pdf" },
        { name: "Bo_De_Mau_Trinh_Bay_Diem_Tuyet_Doi.docx", size: "1.3 MB", type: "docx" }
      ]
    }
  ],

  // KHO ĐỀ THI HỌC SINH GIỎI & ĐỀ THI VÀO CHUYÊN (KÈM TỆP ĐÍNH KÈM)
  giftedExams: [
    {
      id: "gexam-khtn-2026",
      title: "Đề Thi Tuyển Sinh Lớp 10 Chuyên - THPT Chuyên KHTN (Hà Nội)",
      year: "2025 - 2026",
      grade: 9,
      duration: "150 phút",
      badge: "Chuyên KHTN",
      badgeColor: "bg-red-100 text-red-800 border-red-300",
      youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      description: "Đề thi phân loại cao độ với câu Bất đẳng thức Cauchy cực trị và hình học biến hình đặc sắc.",
      questionsSummary: "5 bài toán lớn (10.0 điểm) gồm: Đại số vô tỉ, Hệ phương trình, Số học chính phương, Hình học Ceva và Bất đẳng thức cực trị.",
      attachments: [
        { name: "De_Thi_Vao_10_Chuyen_KHTN_2025_2026.pdf", size: "1.8 MB", type: "pdf" },
        { name: "Dap_An_Va_Thang_Diem_Chi_Tiet_Chuyen_KHTN.pdf", size: "2.1 MB", type: "pdf" },
        { name: "File_Word_De_Thi_KHTN_Co_Loi_Giai.docx", size: "1.2 MB", type: "docx" }
      ]
    },
    {
      id: "gexam-hn-hsg-2026",
      title: "Đề Thi Học Sinh Giỏi Môn Toán Lớp 9 - Sở GD&ĐT TP Hà Nội",
      year: "2025 - 2026",
      grade: 9,
      duration: "150 phút",
      badge: "HSG Thành Phố",
      badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
      youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      description: "Bộ đề chuẩn tuyển chọn đội tuyển dự thi cấp quốc gia, giải chi tiết từng bước có bình luận phương pháp của Thầy.",
      questionsSummary: "Bao quát toàn bộ chương trình Toán 9 nâng cao, trọng tâm vào kỹ thuật phân tích nhân tử và đánh giá nghiệm nguyên.",
      attachments: [
        { name: "De_Thi_HSG_Thanh_Pho_Ha_Noi_Toan_9.pdf", size: "1.5 MB", type: "pdf" },
        { name: "Barem_Loi_Giai_Chuan_So_GD_Ha_Noi.pdf", size: "1.9 MB", type: "pdf" }
      ]
    },
    {
      id: "gexam-sp-2026",
      title: "Đề Thi Tuyển Sinh Lớp 10 Chuyên - THPT Chuyên Đại Học Sư Phạm Hà Nội",
      year: "2025 - 2026",
      grade: 9,
      duration: "120 phút",
      badge: "Chuyên Sư Phạm",
      badgeColor: "bg-purple-100 text-purple-900 border-purple-300",
      youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      description: "Bộ đề mẫu mực về cấu trúc và độ khó, kèm video hướng dẫn phân tích hướng đi bài hình và đại số.",
      questionsSummary: "Đầy đủ 4 phần: Rút gọn nâng cao, Hệ phương trình đối xứng, Hình học phẳng và Bất đẳng thức điểm rơi.",
      attachments: [
        { name: "De_Thi_Lop_10_Chuyen_Dai_Hoc_Su_Pham.pdf", size: "1.6 MB", type: "pdf" },
        { name: "Huong_Dan_Cham_Chuyen_Su_Pham.docx", size: "1.0 MB", type: "docx" }
      ]
    }
  ]
};
