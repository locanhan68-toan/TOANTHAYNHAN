// ==========================================================================
// BỘ DỮ LIỆU NỘI DUNG KIẾN THỨC THEO CHƯƠNG & BÀI - CHUẨN GDPT 2018
// (LỚP 6 ĐẾN LỚP 12)
// ==========================================================================

window.KNTT_CURRICULUM = {
  6: {
    gradeId: 6,
    title: "Toán Lớp 6",
    shortTitle: "Toán 6",
    badge: "Khởi Đầu THCS - Nền Tảng Số Học & Hình Phẳng",
    badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
    totalChapters: 9,
    totalLessons: 38,
    chapters: [
      {
        id: "g6-c1",
        number: "Chương I",
        title: "Tập Hợp Các Số Tự Nhiên",
        semester: "Tập 1 - Học kỳ I",
        icon: "hash",
        summary: "Nắm vững tập hợp, cách ghi số tự nhiên, 4 phép tính, lũy thừa và thứ tự thực hiện phép tính.",
        lessons: [
          { id: "g6-c1-l1", number: "Bài 1", title: "Tập hợp", formula: "a \\in A, b \\notin A", badge: "Cơ bản", desc: "Khái niệm tập hợp, phần tử và cách cho một tập hợp." },
          { id: "g6-c1-l2", number: "Bài 2", title: "Cách ghi số tự nhiên", formula: "Số La Mã, hệ thập phân", badge: "Cơ bản", desc: "Hệ thập phân và cách biểu diễn số La Mã." },
          { id: "g6-c1-l3", number: "Bài 3", title: "Thứ tự trong tập hợp các số tự nhiên", formula: "a < b < c", badge: "Cơ bản", desc: "Biểu diễn số tự nhiên trên tia số, so sánh hai số." },
          { id: "g6-c1-l4", number: "Bài 4", title: "Phép cộng và phép trừ số tự nhiên", formula: "a + b = c, a - b = d", badge: "Trọng tâm", desc: "Tính chất giao hoán, kết hợp và kỹ thuật tính nhanh." },
          { id: "g6-c1-l5", number: "Bài 5", title: "Phép nhân và phép chia số tự nhiên", formula: "a = b \\cdot q + r", badge: "Trọng tâm", desc: "Phép nhân, phép chia hết và phép chia có dư." },
          { id: "g6-c1-l6", number: "Bài 6", title: "Lũy thừa với số mũ tự nhiên", formula: "a^m \\cdot a^n = a^{m+n}", badge: "Trọng tâm", desc: "Định nghĩa lũy thừa, nhân chia hai lũy thừa cùng cơ số." },
          { id: "g6-c1-l7", number: "Bài 7", title: "Thứ tự thực hiện các phép tính", formula: "Ngoặc tròn \\rightarrow vuông \\rightarrow nhọn", badge: "Trọng tâm 9+", desc: "Quy tắc thứ tự trong biểu thức không có ngoặc và có ngoặc." }
        ]
      },
      {
        id: "g6-c2",
        number: "Chương II",
        title: "Tính Chia Hết Trong Tập Hợp Các Số Tự Nhiên",
        semester: "Tập 1 - Học kỳ I",
        icon: "divide",
        summary: "Quan hệ chia hết, số nguyên tố, hợp số, ước chung lớn nhất (ƯCLN) và bội chung nhỏ nhất (BCNN).",
        lessons: [
          { id: "g6-c2-l8", number: "Bài 8", title: "Quan hệ chia hết và tính chất", formula: "a \\ \\vdots \\ b \\ (b \\ne 0)", badge: "Cơ bản", desc: "Khái niệm chia hết, ước và bội, tính chất chia hết của một tổng." },
          { id: "g6-c2-l9", number: "Bài 9A", title: "Dấu hiệu chia hết cho 2, cho 5", formula: "Chữ số tận cùng: 0, 2, 4, 6, 8 / 0, 5", badge: "Cơ bản", desc: "Nhận biết nhanh số chia hết cho 2, cho 5 và cả 2 và 5." },
          { id: "g6-c2-l10", number: "Bài 9B", title: "Dấu hiệu chia hết cho 3, cho 9", formula: "Tổng các chữ số \\ \\vdots \\ 3, \\ \\vdots \\ 9", badge: "Trọng tâm", desc: "Áp dụng tổng các chữ số để xét tính chia hết cho 3 và cho 9." },
          { id: "g6-c2-l11", number: "Bài 10", title: "Số nguyên tố. Hợp số", formula: "Ước chỉ gồm 1 và chính nó", badge: "Trọng tâm", desc: "Phân biệt số nguyên tố, hợp số và phân tích một số ra thừa số nguyên tố." },
          { id: "g6-c2-l12", number: "Bài 11", title: "Ước chung. Ước chung lớn nhất (ƯCLN)", formula: "\\text{ƯCLN}(a,b)", badge: "Trọng tâm 9+", desc: "Quy tắc tìm ƯCLN, hai số nguyên tố cùng nhau và ứng dụng rút gọn phân số." },
          { id: "g6-c2-l13", number: "Bài 12", title: "Bội chung. Bội chung nhỏ nhất (BCNN)", formula: "\\text{BCNN}(a,b)", badge: "Trọng tâm 9+", desc: "Quy tắc tìm BCNN và ứng dụng quy đồng mẫu các phân số." }
        ]
      },
      {
        id: "g6-c3",
        number: "Chương III",
        title: "Số Nguyên",
        semester: "Tập 1 - Học kỳ I",
        icon: "plus-minus",
        summary: "Tập hợp số nguyên Z, trục số, so sánh, 4 phép toán với số nguyên và quy tắc dấu ngoặc.",
        lessons: [
          { id: "g6-c3-l14", number: "Bài 13", title: "Tập hợp các số nguyên", formula: "\\mathbb{Z} = \\{... -2, -1, 0, 1, 2...\\}", badge: "Cơ bản", desc: "Số nguyên âm, số nguyên dương, số đối." },
          { id: "g6-c3-l15", number: "Bài 14", title: "Phép cộng và phép trừ số nguyên", formula: "-(a+b), a - b = a + (-b)", badge: "Trọng tâm", desc: "Cộng trừ hai số nguyên cùng dấu, khác dấu." },
          { id: "g6-c3-l16", number: "Bài 15", title: "Quy tắc dấu ngoặc", formula: "+(a-b) = a-b, -(a-b) = -a+b", badge: "Trọng tâm 9+", desc: "Đổi dấu khi bỏ ngoặc có dấu trừ đằng trước." },
          { id: "g6-c3-l17", number: "Bài 16", title: "Phép nhân số nguyên", formula: "(+) \\cdot (-) = (-), (-) \\cdot (-) = (+)", badge: "Trọng tâm", desc: "Quy tắc nhân hai số nguyên cùng dấu và khác dấu." },
          { id: "g6-c3-l18", number: "Bài 17", title: "Phép chia hết. Bội và ước của một số nguyên", formula: "a = b \\cdot q", badge: "Vận dụng", desc: "Tìm bội và ước của số nguyên trong tập hợp Z." }
        ]
      },
      {
        id: "g6-c4",
        number: "Chương IV",
        title: "Một Số Hình Phẳng Trong Thực Tiễn",
        semester: "Tập 1 - Học kỳ I",
        icon: "shapes",
        summary: "Nhận biết các hình hình học trực quan: tam giác đều, hình vuông, lục giác đều, hình chữ nhật, thoi, bình hành, thang cân.",
        lessons: [
          { id: "g6-c4-l19", number: "Bài 18", title: "Tam giác đều. Hình vuông. Lục giác đều", formula: "Cạnh bằng nhau, góc bằng nhau", badge: "Trực quan", desc: "Đặc điểm hình học và cách vẽ bằng compa, thước kẻ." },
          { id: "g6-c4-l20", number: "Bài 19", title: "Hình chữ nhật. Hình thoi", formula: "S = a \\cdot b, S = \\frac{1}{2} d_1 d_2", badge: "Trọng tâm", desc: "Tính chất cạnh, góc, đường chéo và công thức diện tích." },
          { id: "g6-c4-l21", number: "Bài 20", title: "Hình bình hành. Hình thang cân", formula: "S = a \\cdot h, S = \\frac{(a+b)h}{2}", badge: "Trọng tâm", desc: "Dấu hiệu nhận biết và công thức tính chu vi, diện tích." }
        ]
      },
      {
        id: "g6-c5",
        number: "Chương VI",
        title: "Phân Số",
        semester: "Tập 2 - Học kỳ II",
        icon: "percent",
        summary: "Mở rộng phân số với tử mẫu thuộc Z, so sánh, phép toán phân số và 2 bài toán cơ bản về phân số.",
        lessons: [
          { id: "g6-c5-l22", number: "Bài 23", title: "Mở rộng phân số. Phân số bằng nhau", formula: "\\frac{a}{b} = \\frac{c}{d} \\Leftrightarrow ad = bc", badge: "Cơ bản", desc: "Khái niệm phân số với tử số và mẫu số là các số nguyên." },
          { id: "g6-c5-l23", number: "Bài 24", title: "So sánh phân số. Hỗn số dương", formula: "\\frac{a}{m} < \\frac{b}{m} \\ (m > 0)", badge: "Cơ bản", desc: "Quy đồng mẫu số nhiều phân số và so sánh." },
          { id: "g6-c5-l24", number: "Bài 25", title: "Phép cộng và phép trừ phân số", formula: "\\frac{a}{m} \\pm \\frac{b}{m} = \\frac{a \\pm b}{m}", badge: "Trọng tâm", desc: "Cộng trừ cùng mẫu và khác mẫu số." },
          { id: "g6-c5-l25", number: "Bài 26", title: "Phép nhân và phép chia phân số", formula: "\\frac{a}{b} \\cdot \\frac{c}{d} = \\frac{ac}{bd}", badge: "Trọng tâm", desc: "Nhân phân số và nhân với nghịch đảo khi chia." },
          { id: "g6-c5-l26", number: "Bài 27", title: "Hai bài toán về phân số", formula: "\\frac{m}{n} \\cdot A, B : \\frac{m}{n}", badge: "Trọng tâm 9+", desc: "Tìm giá trị phân số của một số và tìm số khi biết giá trị phân số." }
        ]
      },
      {
        id: "g6-c6",
        number: "Chương VII",
        title: "Số Thập Phân",
        semester: "Tập 2 - Học kỳ II",
        icon: "calculator",
        summary: "Số thập phân âm/dương, các phép tính, tỉ số và tỉ số phần trăm.",
        lessons: [
          { id: "g6-c6-l27", number: "Bài 28", title: "Số thập phân", formula: "-0.75, 3.14", badge: "Cơ bản", desc: "Cách viết số thập phân từ phân số thập phân." },
          { id: "g6-c6-l28", number: "Bài 29", title: "Tính toán với số thập phân", formula: "Cộng, trừ, nhân, chia", badge: "Trọng tâm", desc: "Quy tắc đặt tính và tính toán với số thập phân có dấu." },
          { id: "g6-c6-l29", number: "Bài 30", title: "Làm tròn và ước lượng", formula: "\\approx 3.14", badge: "Thực tế", desc: "Làm tròn số thập phân đến hàng chỉ định." },
          { id: "g6-c6-l30", number: "Bài 31", title: "Một số bài toán về tỉ số và tỉ số phần trăm", formula: "\\frac{a}{b} \\cdot 100\\%", badge: "Thực tế 9+", desc: "Ứng dụng tính toán lãi suất, giảm giá, tăng trưởng." }
        ]
      },
      {
        id: "g6-c7",
        number: "Chương VIII",
        title: "Những Hình Hình Học Cơ Bản",
        semester: "Tập 2 - Học kỳ II",
        icon: "ruler",
        summary: "Điểm, đường thẳng, tia, đoạn thẳng, độ dài đoạn thẳng, trung điểm và góc.",
        lessons: [
          { id: "g6-c7-l31", number: "Bài 32", title: "Điểm và đường thẳng", formula: "A \\in d, B \\notin d", badge: "Cơ bản", desc: "Điểm thuộc và không thuộc đường thẳng, 3 điểm thẳng hàng." },
          { id: "g6-c7-l32", number: "Bài 33", title: "Điểm nằm giữa hai điểm. Tia", formula: "Ox, Oy", badge: "Cơ bản", desc: "Khái niệm tia, hai tia đối nhau, hai tia trùng nhau." },
          { id: "g6-c7-l33", number: "Bài 34", title: "Đoạn thẳng. Độ dài đoạn thẳng", formula: "AM = MB = \\frac{AB}{2}", badge: "Trọng tâm", desc: "Đo đoạn thẳng, so sánh độ dài và trung điểm của đoạn thẳng." },
          { id: "g6-c7-l34", number: "Bài 35", title: "Góc và số đo góc", formula: "0^\\circ < \\widehat{xOy} < 180^\\circ", badge: "Trọng tâm", desc: "Góc nhọn, góc vuông, góc tù, góc bẹt và cách đo bằng thước đo góc." }
        ]
      }
    ]
  },

  7: {
    gradeId: 7,
    title: "Toán Lớp 7",
    shortTitle: "Toán 7",
    badge: "Số Hữu Tỉ, Tam Giác Bằng Nhau & Biểu Thức Đại Số",
    badgeColor: "bg-cyan-100 text-cyan-800 border-cyan-200",
    totalChapters: 10,
    totalLessons: 36,
    chapters: [
      {
        id: "g7-c1",
        number: "Chương I",
        title: "Số Hữu Tỉ",
        semester: "Tập 1 - Học kỳ I",
        icon: "hash",
        summary: "Tập hợp Q các số hữu tỉ, các phép toán cộng trừ nhân chia, lũy thừa và quy tắc chuyển vế.",
        lessons: [
          { id: "g7-c1-l1", number: "Bài 1", title: "Tập hợp các số hữu tỉ", formula: "\\mathbb{Q} = \\left\\{\\frac{a}{b} \\mid a,b \\in \\mathbb{Z}, b \\ne 0\\right\\}", badge: "Cơ bản", desc: "Biểu diễn số hữu tỉ trên trục số và số đối." },
          { id: "g7-c1-l2", number: "Bài 2", title: "Cộng, trừ, nhân, chia số hữu tỉ", formula: "x + y, x - y, x \\cdot y, x : y", badge: "Trọng tâm", desc: "Thực hiện phép tính trên tập số hữu tỉ với quy tắc linh hoạt." },
          { id: "g7-c1-l3", number: "Bài 3", title: "Lũy thừa với số mũ tự nhiên của một số hữu tỉ", formula: "(x \\cdot y)^n = x^n \\cdot y^n, (x^m)^n = x^{mn}", badge: "Trọng tâm 9+", desc: "Các công thức lũy thừa quan trọng và so sánh lũy thừa." },
          { id: "g7-c1-l4", number: "Bài 4", title: "Thứ tự thực hiện các phép tính. Quy tắc chuyển vế", formula: "x + a = b \\Rightarrow x = b - a", badge: "Trọng tâm", desc: "Chuyển vế đổi dấu trong bài toán tìm x." }
        ]
      },
      {
        id: "g7-c2",
        number: "Chương II",
        title: "Số Thực",
        semester: "Tập 1 - Học kỳ I",
        icon: "square-radical",
        summary: "Số thập phân vô hạn tuần hoàn, số vô tỉ, căn bậc hai số học và tập hợp số thực R.",
        lessons: [
          { id: "g7-c2-l5", number: "Bài 5", title: "Số thập phân vô hạn tuần hoàn", formula: "0.(3) = \\frac{1}{3}", badge: "Cơ bản", desc: "Chu kỳ của số thập phân và cách biểu diễn phân số." },
          { id: "g7-c2-l6", number: "Bài 6", title: "Số vô tỉ. Căn bậc hai số học", formula: "\\sqrt{a} = x \\ (x \\ge 0, x^2 = a)", badge: "Trọng tâm 9+", desc: "Khái niệm số vô tỉ như $\\sqrt{2}, \\pi$ và căn bậc hai số học." },
          { id: "g7-c2-l7", number: "Bài 7", title: "Tập hợp các số thực", formula: "\\mathbb{R} = \\mathbb{Q} \\cup \\mathbb{I}", badge: "Trọng tâm", desc: "Giá trị tuyệt đối của một số thực $|x|$ và trục số thực." }
        ]
      },
      {
        id: "g7-c3",
        number: "Chương III",
        title: "Góc Và Hai Đường Thẳng Song Song",
        semester: "Tập 1 - Học kỳ I",
        icon: "split",
        summary: "Góc ở vị trí đặc biệt, tia phân giác, hai đường thẳng song song, tiên đề Euclid và định lí.",
        lessons: [
          { id: "g7-c3-l8", number: "Bài 8", title: "Góc ở vị trí đặc biệt. Tia phân giác của một góc", formula: "\\text{Kề bù, đối đỉnh, so le trong}", badge: "Cơ bản", desc: "Góc kề nhau, phụ nhau, bù nhau và cách vẽ tia phân giác." },
          { id: "g7-c3-l9", number: "Bài 9", title: "Hai đường thẳng song song và dấu hiệu nhận biết", formula: "a \\parallel b", badge: "Trọng tâm", desc: "Cặp góc so le trong bằng nhau hoặc đồng vị bằng nhau." },
          { id: "g7-c3-l10", number: "Bài 10", title: "Tiên đề Euclid. Tính chất hai đường thẳng song song", formula: "\\text{Cùng song song / cùng vuông góc}", badge: "Trọng tâm", desc: "Nội dung tiên đề Euclid và tính chất từ vuông góc đến song song." },
          { id: "g7-c3-l11", number: "Bài 11", title: "Định lí và chứng minh định lí", formula: "\\text{Giả thiết (GT)} \\Rightarrow \\text{Kết luận (KL)}", badge: "Trọng tâm 9+", desc: "Cấu trúc một định lí và phương pháp lập luận hình học." }
        ]
      },
      {
        id: "g7-c4",
        number: "Chương IV",
        title: "Tam Giác Bằng Nhau",
        semester: "Tập 1 - Học kỳ I",
        icon: "triangle",
        summary: "Tổng 3 góc tam giác, 3 trường hợp bằng nhau (c-c-c, c-g-c, g-c-g), tam giác vuông và tam giác cân.",
        lessons: [
          { id: "g7-c4-l12", number: "Bài 12", title: "Tổng các góc trong một tam giác", formula: "\\widehat{A} + \\widehat{B} + \\widehat{C} = 180^\\circ", badge: "Cơ bản", desc: "Góc ngoài của tam giác bằng tổng hai góc trong không kề với nó." },
          { id: "g7-c4-l13", number: "Bài 13", title: "Hai tam giác bằng nhau. Trường hợp bằng nhau (c-c-c)", formula: "\\Delta ABC = \\Delta A'B'C' \\ (c-c-c)", badge: "Trọng tâm", desc: "Trường hợp bằng nhau thứ nhất: cạnh - cạnh - cạnh." },
          { id: "g7-c4-l14", number: "Bài 14", title: "Trường hợp bằng nhau (c-g-c) và (g-c-g)", formula: "\\text{c-g-c, g-c-g}", badge: "Trọng tâm", desc: "Cạnh - góc xen giữa - cạnh và góc - cạnh xen giữa - góc." },
          { id: "g7-c4-l15", number: "Bài 15", title: "Các trường hợp bằng nhau của tam giác vuông", formula: "\\text{Cạnh huyền - góc nhọn, cạnh huyền - cạnh góc vuông}", badge: "Trọng tâm 9+", desc: "Các quy tắc bằng nhau đặc biệt của tam giác vuông." },
          { id: "g7-c4-l16", number: "Bài 16", title: "Tam giác cân. Đường trung trực của đoạn thẳng", formula: "AB = AC \\Leftrightarrow \\widehat{B} = \\widehat{C}", badge: "Trọng tâm 9+", desc: "Định nghĩa, tính chất tam giác đều và đường trung trực." }
        ]
      },
      {
        id: "g7-c5",
        number: "Chương VI",
        title: "Tỉ Lệ Thức Và Đại Lượng Tỉ Lệ",
        semester: "Tập 2 - Học kỳ II",
        icon: "scale",
        summary: "Tỉ lệ thức, tính chất dãy tỉ số bằng nhau, đại lượng tỉ lệ thuận và tỉ lệ nghịch.",
        lessons: [
          { id: "g7-c5-l17", number: "Bài 20", title: "Tỉ lệ thức", formula: "\\frac{a}{b} = \\frac{c}{d} \\Leftrightarrow ad = bc", badge: "Cơ bản", desc: "Định nghĩa tỉ lệ thức và các hoán vị ngoại tỉ, trung tỉ." },
          { id: "g7-c5-l18", number: "Bài 21", title: "Tính chất của dãy tỉ số bằng nhau", formula: "\\frac{a}{b} = \\frac{c}{d} = \\frac{a+c}{b+d} = \\frac{a-c}{b-d}", badge: "Trọng tâm 9+", desc: "Công cụ cốt lõi giải bài toán chia phần tỉ lệ." },
          { id: "g7-c5-l19", number: "Bài 22", title: "Đại lượng tỉ lệ thuận", formula: "y = kx \\ (k \\ne 0)", badge: "Trọng tâm", desc: "Công thức và bài toán thực tế tỉ lệ thuận." },
          { id: "g7-c5-l20", number: "Bài 23", title: "Đại lượng tỉ lệ nghịch", formula: "y = \\frac{a}{x} \\ (a \\ne 0)", badge: "Trọng tâm", desc: "Công thức và bài toán phân chia công việc, tốc độ và thời gian." }
        ]
      },
      {
        id: "g7-c6",
        number: "Chương VII",
        title: "Biểu Thức Đại Số Và Đa Thức Một Biến",
        semester: "Tập 2 - Học kỳ II",
        icon: "variable",
        summary: "Biểu thức đại số, đơn thức, đa thức một biến, 4 phép tính và nghiệm của đa thức.",
        lessons: [
          { id: "g7-c6-l21", number: "Bài 24", title: "Biểu thức đại số", formula: "2x + 3y^2", badge: "Cơ bản", desc: "Biểu thức chứa chữ và tính giá trị của biểu thức." },
          { id: "g7-c6-l22", number: "Bài 25", title: "Đa thức một biến", formula: "P(x) = a_n x^n + ... + a_1 x + a_0", badge: "Trọng tâm", desc: "Thu gọn, sắp xếp đa thức theo lũy thừa giảm dần, bậc và hệ số." },
          { id: "g7-c6-l23", number: "Bài 26", title: "Phép cộng và phép trừ đa thức một biến", formula: "P(x) \\pm Q(x)", badge: "Trọng tâm", desc: "Cộng trừ theo hàng ngang và đặt cột dọc." },
          { id: "g7-c6-l24", number: "Bài 27", title: "Phép nhân đa thức một biến", formula: "A \\cdot (B+C) = AB + AC", badge: "Trọng tâm", desc: "Nhân đơn thức với đa thức và nhân đa thức với đa thức." },
          { id: "g7-c6-l25", number: "Bài 28", title: "Phép chia đa thức một biến. Nghiệm của đa thức", formula: "P(x_0) = 0", badge: "Trọng tâm 9+", desc: "Chia đa thức cho đa thức và tìm nghiệm của đa thức một biến." }
        ]
      },
      {
        id: "g7-c7",
        number: "Chương IX",
        title: "Quan Hệ Giữa Các Yếu Tố Trong Một Tam Giác",
        semester: "Tập 2 - Học kỳ II",
        icon: "network",
        summary: "Quan hệ góc - cạnh đối diện, bất đẳng thức tam giác, sự đồng quy của 3 đường trung tuyến, phân giác, trung trực, cao.",
        lessons: [
          { id: "g7-c7-l26", number: "Bài 31", title: "Quan hệ giữa góc và cạnh đối diện trong một tam giác", formula: "AC > AB \\Leftrightarrow \\widehat{B} > \\widehat{C}", badge: "Cơ bản", desc: "Cạnh đối diện với góc lớn hơn thì lớn hơn." },
          { id: "g7-c7-l27", number: "Bài 32", title: "Quan hệ giữa đường vuông góc và đường xiên. Bất đẳng thức tam giác", formula: "|b-c| < a < b+c", badge: "Trọng tâm", desc: "Điều kiện để 3 đoạn thẳng tạo thành một tam giác." },
          { id: "g7-c7-l28", number: "Bài 33", title: "Sự đồng quy của ba đường trung tuyến (Trọng tâm)", formula: "AG = \\frac{2}{3} AM", badge: "Trọng tâm 9+", desc: "Khái niệm trọng tâm G và tỉ lệ vàng của đường trung tuyến." },
          { id: "g7-c7-l29", number: "Bài 34", title: "Sự đồng quy của ba đường phân giác, trung trực, cao", formula: "\\text{Tâm nội tiếp, tâm ngoại tiếp, trực tâm}", badge: "Trọng tâm 9+", desc: "4 điểm đặc biệt của tam giác và các tính chất cách đều." }
        ]
      }
    ]
  },

  8: {
    gradeId: 8,
    title: "Toán Lớp 8",
    shortTitle: "Toán 8",
    badge: "7 Hằng Đẳng Thức, Định Lí Thalès, Tứ Giác & Tam Giác Đồng Dạng",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
    totalChapters: 10,
    totalLessons: 38,
    chapters: [
      {
        id: "g8-c1",
        number: "Chương I",
        title: "Đa Thức Nhiều Biến",
        semester: "Tập 1 - Học kỳ I",
        icon: "layers",
        summary: "Đơn thức, đa thức nhiều biến, đơn thức đồng dạng, các phép tính cộng trừ nhân chia đa thức.",
        lessons: [
          { id: "g8-c1-l1", number: "Bài 1", title: "Đơn thức", formula: "3x^2 y^3", badge: "Cơ bản", desc: "Đơn thức thu gọn, bậc và hệ số của đơn thức nhiều biến." },
          { id: "g8-c1-l2", number: "Bài 2", title: "Đa thức", formula: "P = 2x^2 y - 3xy + 5", badge: "Cơ bản", desc: "Thu gọn đa thức và xác định bậc của đa thức nhiều biến." },
          { id: "g8-c1-l3", number: "Bài 3", title: "Phép cộng và phép trừ đa thức", formula: "A + B, A - B", badge: "Trọng tâm", desc: "Cộng trừ các đa thức nhiều biến bằng cách nhóm hạng tử đồng dạng." },
          { id: "g8-c1-l4", number: "Bài 4", title: "Phép nhân đa thức", formula: "(A+B)(C+D) = AC+AD+BC+BD", badge: "Trọng tâm", desc: "Nhân đơn thức với đa thức và nhân đa thức với đa thức." },
          { id: "g8-c1-l5", number: "Bài 5", title: "Phép chia đa thức cho đơn thức", formula: "(A+B):M = A:M + B:M", badge: "Trọng tâm", desc: "Điều kiện chia hết và quy tắc chia từng hạng tử." }
        ]
      },
      {
        id: "g8-c2",
        number: "Chương II",
        title: "Hằng Đẳng Thức Đáng Nhớ Và Ứng Dụng",
        semester: "Tập 1 - Học kỳ I",
        icon: "sparkles",
        summary: "7 Hằng đẳng thức đáng nhớ, kỹ thuật phân tích đa thức thành nhân tử (đặt nhân tử chung, nhóm, hằng đẳng thức, tách hạng tử).",
        lessons: [
          { id: "g8-c2-l6", number: "Bài 6", title: "Hiệu hai bình phương. Bình phương của một tổng hay một hiệu", formula: "(A \\pm B)^2 = A^2 \\pm 2AB + B^2, A^2 - B^2 = (A-B)(A+B)", badge: "Cốt lõi", desc: "3 hằng đẳng thức bậc 2 quan trọng nhất." },
          { id: "g8-c2-l7", number: "Bài 7", title: "Lập phương của một tổng hay một hiệu", formula: "(A \\pm B)^3 = A^3 \\pm 3A^2 B + 3AB^2 \\pm B^3", badge: "Trọng tâm", desc: "2 hằng đẳng thức lập phương của tổng và hiệu." },
          { id: "g8-c2-l8", number: "Bài 8", title: "Tổng và hiệu hai lập phương", formula: "A^3 \\pm B^3 = (A \\pm B)(A^2 \\mp AB + B^2)", badge: "Trọng tâm", desc: "Phân tích tổng/hiệu hai lập phương thành nhân tử." },
          { id: "g8-c2-l9", number: "Bài 9", title: "Phân tích đa thức thành nhân tử", formula: "A \\cdot B = 0", badge: "Trọng tâm 9+", desc: "Các phương pháp phối hợp để phân tích thành nhân tử phục vụ giải phương trình." }
        ]
      },
      {
        id: "g8-c3",
        number: "Chương III",
        title: "Tứ Giác",
        semester: "Tập 1 - Học kỳ I",
        icon: "square",
        summary: "Tổng các góc tứ giác, hình thang cân, hình bình hành, hình chữ nhật, hình thoi và hình vuông.",
        lessons: [
          { id: "g8-c3-l10", number: "Bài 10", title: "Tứ giác", formula: "\\widehat{A} + \\widehat{B} + \\widehat{C} + \\widehat{D} = 360^\\circ", badge: "Cơ bản", desc: "Định nghĩa tứ giác lồi và định lí tổng 4 góc." },
          { id: "g8-c3-l11", number: "Bài 11", title: "Hình thang cân", formula: "AB \\parallel CD, AD = BC", badge: "Trọng tâm", desc: "Tính chất hai góc kề một đáy bằng nhau, hai đường chéo bằng nhau." },
          { id: "g8-c3-l12", number: "Bài 12", title: "Hình bình hành", formula: "AB = CD, AD = BC", badge: "Trọng tâm", desc: "Dấu hiệu nhận biết và tính chất các cạnh đối, góc đối, đường chéo." },
          { id: "g8-c3-l13", number: "Bài 13", title: "Hình chữ nhật", formula: "\\widehat{A} = 90^\\circ, AC = BD", badge: "Trọng tâm", desc: "Hình bình hành có 1 góc vuông hoặc hai đường chéo bằng nhau." },
          { id: "g8-c3-l14", number: "Bài 14", title: "Hình thoi và hình vuông", formula: "AC \\perp BD, AC = BD", badge: "Trọng tâm 9+", desc: "Tính chất đường chéo vuông góc, phân giác và dấu hiệu nhận biết hình vuông." }
        ]
      },
      {
        id: "g8-c4",
        number: "Chương IV",
        title: "Định Lí Thalès",
        semester: "Tập 1 - Học kỳ I",
        icon: "git-commit",
        summary: "Đoạn thẳng tỉ lệ, định lí Thalès thuận & đảo trong tam giác, đường trung bình và tính chất đường phân giác.",
        lessons: [
          { id: "g8-c4-l15", number: "Bài 15", title: "Định lí Thalès trong tam giác", formula: "d \\parallel BC \\Rightarrow \\frac{AB'}{AB} = \\frac{AC'}{AC}", badge: "Cốt lõi", desc: "Định lí thuận và hệ quả của định lí Thalès." },
          { id: "g8-c4-l16", number: "Bài 16", title: "Đường trung bình của tam giác", formula: "MN \\parallel BC, MN = \\frac{1}{2} BC", badge: "Trọng tâm", desc: "Định nghĩa, tính chất đường nối trung điểm hai cạnh." },
          { id: "g8-c4-l17", number: "Bài 17", title: "Tính chất đường phân giác của tam giác", formula: "\\frac{DB}{DC} = \\frac{AB}{AC}", badge: "Trọng tâm 9+", desc: "Tỉ số hai đoạn thẳng do chân đường phân giác trong và ngoài tạo ra." }
        ]
      },
      {
        id: "g8-c5",
        number: "Chương VI",
        title: "Phân Thức Đại Số",
        semester: "Tập 2 - Học kỳ II",
        icon: "percent",
        summary: "Định nghĩa phân thức, tính chất cơ bản, quy đồng mẫu thức, 4 phép tính và bài toán rút gọn nâng cao.",
        lessons: [
          { id: "g8-c5-l18", number: "Bài 21", title: "Phân thức đại số", formula: "\\frac{A}{B} \\ (B \\ne 0)", badge: "Cơ bản", desc: "Điều kiện xác định của phân thức và hai phân thức bằng nhau." },
          { id: "g8-c5-l19", number: "Bài 22", title: "Tính chất cơ bản của phân thức đại số", formula: "\\frac{A}{B} = \\frac{A \\cdot M}{B \\cdot M}", badge: "Trọng tâm", desc: "Rút gọn phân thức và quy tắc đổi dấu." },
          { id: "g8-c5-l20", number: "Bài 23", title: "Phép cộng và phép trừ phân thức đại số", formula: "\\frac{A}{M} \\pm \\frac{B}{M} = \\frac{A \\pm B}{M}", badge: "Trọng tâm", desc: "Quy đồng mẫu thức nhiều phân thức và tính toán." },
          { id: "g8-c5-l21", number: "Bài 24", title: "Phép nhân và phép chia phân thức đại số", formula: "\\frac{A}{B} \\cdot \\frac{C}{D} = \\frac{AC}{BD}", badge: "Trọng tâm 9+", desc: "Kỹ thuật rút gọn biểu thức phân thức tổng hợp." }
        ]
      },
      {
        id: "g8-c6",
        number: "Chương VII",
        title: "Phương Trình Bậc Nhất Và Hàm Số Bậc Nhất",
        semester: "Tập 2 - Học kỳ II",
        icon: "trending-up",
        summary: "Phương trình bậc nhất một ẩn ax + b = 0, giải bài toán bằng lập phương trình, hàm số bậc nhất y = ax + b và đồ thị.",
        lessons: [
          { id: "g8-c6-l22", number: "Bài 25", title: "Phương trình bậc nhất một ẩn", formula: "ax + b = 0 \\ (a \\ne 0) \\Rightarrow x = -\\frac{b}{a}", badge: "Cơ bản", desc: "Quy tắc chuyển vế và nhân chia với một số." },
          { id: "g8-c6-l23", number: "Bài 26", title: "Giải bài toán bằng cách lập phương trình", formula: "3 \\text{ bước chuẩn: Chọn ẩn, lập PT, giải & đối chiếu}", badge: "Trọng tâm 9+", desc: "Các dạng toán chuyển động, năng suất, phần trăm và hình học." },
          { id: "g8-c6-l24", number: "Bài 27", title: "Khái niệm hàm số và đồ thị của hàm số", formula: "y = f(x)", badge: "Cơ bản", desc: "Mặt phẳng tọa độ Oxy và đồ thị hàm số." },
          { id: "g8-c6-l25", number: "Bài 28", title: "Hàm số bậc nhất y = ax + b và đồ thị", formula: "y = ax + b \\ (a \\ne 0)", badge: "Trọng tâm", desc: "Hệ số góc a, vị trí tương đối giữa hai đường thẳng song song/cắt nhau." }
        ]
      },
      {
        id: "g8-c7",
        number: "Chương IX",
        title: "Tam Giác Đồng Dạng",
        semester: "Tập 2 - Học kỳ II",
        icon: "maximize-2",
        summary: "Định nghĩa hai tam giác đồng dạng, 3 trường hợp đồng dạng (c-c-c, c-g-c, g-g), định lí Pythagore và tam giác vuông đồng dạng.",
        lessons: [
          { id: "g8-c7-l26", number: "Bài 33", title: "Hai tam giác đồng dạng", formula: "\\Delta ABC \\backsim \\Delta A'B'C'", badge: "Cơ bản", desc: "Tỉ số đồng dạng k, tỉ số chu vi và tỉ số diện tích $k^2$." },
          { id: "g8-c7-l27", number: "Bài 34", title: "Ba trường hợp đồng dạng của hai tam giác", formula: "\\text{c-c-c, c-g-c, g-g}", badge: "Cốt lõi", desc: "Nhận biết và chứng minh tam giác đồng dạng." },
          { id: "g8-c7-l28", number: "Bài 35", title: "Định lí Pythagore và ứng dụng", formula: "a^2 = b^2 + c^2", badge: "Trọng tâm", desc: "Định lí Pythagore thuận và đảo trong tam giác vuông." },
          { id: "g8-c7-l29", number: "Bài 36", title: "Các trường hợp đồng dạng của hai tam giác vuông", formula: "\\text{Góc nhọn, tỉ số hai cạnh góc vuông, cạnh huyền - cạnh góc vuông}", badge: "Trọng tâm 9+", desc: "Ứng dụng giải các bài toán hình học thực tế và tính chiều cao." }
        ]
      }
    ]
  },

  9: {
    gradeId: 9,
    title: "Toán Lớp 9",
    shortTitle: "Toán 9 (Trọng Tâm Vào 10)",
    badge: "Trọng Tâm Thi Vào Lớp 10 & Khảo Sát Đội Tuyển Chuyên",
    badgeColor: "bg-indigo-100 text-indigo-900 border-indigo-300",
    totalChapters: 10,
    totalLessons: 36,
    chapters: [
      {
        id: "g9-c1",
        number: "Chương I",
        title: "Phương Trình Và Hệ Hai Phương Trình Bậc Nhất Hai Ẩn",
        semester: "Tập 1 - Học kỳ I",
        icon: "binary",
        summary: "Khái niệm hệ hai phương trình bậc nhất hai ẩn, phương pháp thế, phương pháp cộng đại số, giải bài toán bằng cách lập hệ.",
        lessons: [
          { id: "g9-c1-l1", number: "Bài 1", title: "Khái niệm phương trình và hệ hai phương trình bậc nhất hai ẩn", formula: "ax + by = c, a'x + b'y = c'", badge: "Cơ bản", desc: "Nghiệm của phương trình và minh họa hình học trên mặt phẳng Oxy." },
          { id: "g9-c1-l2", number: "Bài 2", title: "Giải hệ hai phương trình bậc nhất hai ẩn", formula: "\\text{Thế } & \\text{ Cộng đại số}", badge: "Cốt lõi", desc: "Thành thạo hai phương pháp cơ bản và phương pháp đặt ẩn phụ." },
          { id: "g9-c1-l3", number: "Bài 3", title: "Giải bài toán bằng cách lập hệ phương trình", formula: "2 \\text{ ẩn } x, y \\text{ thỏa mãn 2 điều kiện}", badge: "Trọng tâm 9+", desc: "Dạng toán chuyển động, năng suất, làm chung làm riêng, tỉ lệ % và hình học." }
        ]
      },
      {
        id: "g9-c2",
        number: "Chương II",
        title: "Phương Trình Và Bất Phương Trình Bậc Nhất Một Ẩn",
        semester: "Tập 1 - Học kỳ I",
        icon: "greater-than-equal",
        summary: "Phương trình quy về bậc nhất (phương trình tích, phương trình chứa ẩn ở mẫu), bất đẳng thức và bất phương trình bậc nhất.",
        lessons: [
          { id: "g9-c2-l4", number: "Bài 4", title: "Phương trình quy về phương trình bậc nhất một ẩn", formula: "A(x) \\cdot B(x) = 0, \\frac{A(x)}{B(x)} = 0", badge: "Trọng tâm", desc: "Điều kiện xác định và các bước giải phương trình tích, chứa ẩn ở mẫu." },
          { id: "g9-c2-l5", number: "Bài 5", title: "Bất đẳng thức và tính chất", formula: "a < b \\Rightarrow a + c < b + c", badge: "Cốt lõi 9+", desc: "Tính chất liên hệ thứ tự với phép cộng và phép nhân (đảo chiều khi nhân số âm)." },
          { id: "g9-c2-l6", number: "Bài 6", title: "Bất phương trình bậc nhất một ẩn", formula: "ax + b > 0 \\ (a \\ne 0)", badge: "Trọng tâm", desc: "Quy tắc chuyển vế, nhân với một số và biểu diễn tập nghiệm trên trục số." }
        ]
      },
      {
        id: "g9-c3",
        number: "Chương III",
        title: "Căn Bậc Hai Và Căn Bậc Ba",
        semester: "Tập 1 - Học kỳ I",
        icon: "square-radical",
        summary: "Căn bậc hai số học, hằng đẳng thức $\\sqrt{A^2} = |A|$, khai phương một tích/thương, trục căn thức ở mẫu và căn bậc ba.",
        lessons: [
          { id: "g9-c3-l7", number: "Bài 7", title: "Căn bậc hai và căn thức bậc hai", formula: "\\sqrt{A^2} = |A|", badge: "Cốt lõi", desc: "Điều kiện để căn thức có nghĩa và rút gọn biểu thức chứa biến." },
          { id: "g9-c3-l8", number: "Bài 8", title: "Khai căn bậc hai với phép nhân và phép chia", formula: "\\sqrt{A \\cdot B} = \\sqrt{A} \\cdot \\sqrt{B}, \\sqrt{\\frac{A}{B}} = \\frac{\\sqrt{A}}{\\sqrt{B}}", badge: "Trọng tâm", desc: "Khai phương một tích, khai phương một thương và biến đổi biểu thức." },
          { id: "g9-c3-l9", number: "Bài 9", title: "Biến đổi đơn giản và rút gọn biểu thức chứa căn thức bậc hai", formula: "\\frac{A}{\\sqrt{B} \\pm \\sqrt{C}} = \\frac{A(\\sqrt{B} \\mp \\sqrt{C})}{B - C}", badge: "Trọng tâm Vào 10", desc: "Đưa thừa số vào/ra ngoài dấu căn, khử mẫu, trục căn thức và bài toán rút gọn kèm câu hỏi phụ." },
          { id: "g9-c3-l10", number: "Bài 10", title: "Căn bậc ba và căn thức bậc ba", formula: "\\sqrt[3]{a} = x \\Leftrightarrow x^3 = a", badge: "Cơ bản", desc: "Khái niệm căn bậc ba và các tính chất cơ bản." }
        ]
      },
      {
        id: "g9-c4",
        number: "Chương IV",
        title: "Hệ Thức Lượng Trong Tam Giác Vuông",
        semester: "Tập 1 - Học kỳ I",
        icon: "triangle",
        summary: "Tỉ số lượng giác sin, cos, tan, cot của góc nhọn, hệ thức giữa cạnh và góc trong tam giác vuông, ứng dụng đo đạc thực tế.",
        lessons: [
          { id: "g9-c4-l11", number: "Bài 11", title: "Tỉ số lượng giác của góc nhọn", formula: "\\sin = \\frac{\\text{đối}}{\\text{huyền}}, \\cos = \\frac{\\text{kề}}{\\text{huyền}}, \\tan = \\frac{\\text{đối}}{\\text{kề}}", badge: "Cốt lõi", desc: "Định nghĩa, tỉ số lượng giác hai góc phụ nhau và bảng giá trị góc đặc biệt 30, 45, 60 độ." },
          { id: "g9-c4-l12", number: "Bài 12", title: "Một số hệ thức giữa cạnh, góc trong tam giác vuông và ứng dụng", formula: "b = a \\sin B = a \\cos C, b = c \\tan B", badge: "Trọng tâm Vào 10", desc: "Giải tam giác vuông và bài toán đo chiều cao tòa nhà, chiều rộng khúc sông." }
        ]
      },
      {
        id: "g9-c5",
        number: "Chương V",
        title: "Đường Tròn",
        semester: "Tập 1 - Học kỳ I",
        icon: "circle",
        summary: "Mở đầu về đường tròn, tính đối xứng, cung và dây, tiếp tuyến, vị trí tương đối giữa đường thẳng và đường tròn.",
        lessons: [
          { id: "g9-c5-l13", number: "Bài 13", title: "Mở đầu về đường tròn", formula: "(O; R)", badge: "Cơ bản", desc: "Tâm đối xứng, trục đối xứng và sự xác định đường tròn qua 3 điểm không thẳng hàng." },
          { id: "g9-c5-l14", number: "Bài 14", title: "Cung và dây của một đường tròn", formula: "AB = CD \\Leftrightarrow OH = OK", badge: "Trọng tâm", desc: "Đường kính vuông góc với dây và mối liên hệ giữa dây và khoảng cách đến tâm." },
          { id: "g9-c5-l15", number: "Bài 15", title: "Độ dài của cung tròn. Diện tích hình quạt tròn và hình vành khuyên", formula: "l = \\frac{\\pi R n}{180}, S_q = \\frac{\\pi R^2 n}{360}", badge: "Trọng tâm", desc: "Công thức chu vi, diện tích hình tròn và các phần giới hạn bởi cung tròn." },
          { id: "g9-c5-l16", number: "Bài 16", title: "Vị trí tương đối của đường thẳng và đường tròn", formula: "d < R \\Leftrightarrow 2 \\text{ điểm}, d = R \\Leftrightarrow \\text{tiếp tuyến}", badge: "Trọng tâm Vào 10", desc: "Dấu hiệu nhận biết tiếp tuyến và tính chất hai tiếp tuyến cắt nhau." }
        ]
      },
      {
        id: "g9-c6",
        number: "Chương VI",
        title: "Hàm Số y = ax^2 (a ≠ 0). Phương Trình Bậc Hai Một Ẩn",
        semester: "Tập 2 - Học kỳ II",
        icon: "trending-up",
        summary: "Đồ thị Parabol y = ax^2, công thức nghiệm phương trình bậc hai, hệ thức Vi-ét và các ứng dụng phân loại 9+.",
        lessons: [
          { id: "g9-c6-l17", number: "Bài 18", title: "Hàm số y = ax² (a ≠ 0)", formula: "y = ax^2 \\ (a \\ne 0)", badge: "Cơ bản", desc: "Tính chất đồng biến nghịch biến và cách vẽ đồ thị Parabol." },
          { id: "g9-c6-l18", number: "Bài 19", title: "Phương trình bậc hai một ẩn", formula: "\\Delta = b^2 - 4ac, x_{1,2} = \\frac{-b \\pm \\sqrt{\\Delta}}{2a}", badge: "Cốt lõi Vào 10", desc: "Công thức nghiệm tổng quát và công thức nghiệm thu gọn $\\Delta'$." },
          { id: "g9-c6-l19", number: "Bài 20", title: "Định lí Vi-ét và ứng dụng", formula: "x_1 + x_2 = -\\frac{b}{a}, x_1 x_2 = \\frac{c}{a}", badge: "Trọng tâm 9+", desc: "Nhẩm nghiệm, tính giá trị biểu thức đối xứng, tìm tham số m để phương trình có nghiệm thỏa mãn điều kiện." },
          { id: "g9-c6-l20", number: "Bài 21", title: "Giải bài toán bằng cách lập phương trình bậc hai", formula: "\\text{Mối liên hệ phi tuyến tính}", badge: "Trọng tâm Vào 10", desc: "Toán hình học diện tích, bài toán chuyển động ngược xuôi dòng, toán làm chung riêng." }
        ]
      },
      {
        id: "g9-c7",
        number: "Chương IX",
        title: "Đường Tròn Ngoại Tiếp Và Đường Tròn Nội Tiếp",
        semester: "Tập 2 - Học kỳ II",
        icon: "circle-dot",
        summary: "Góc nội tiếp, đường tròn ngoại tiếp & nội tiếp tam giác, tứ giác nội tiếp (dạng bài 9+ hình học thi vào 10).",
        lessons: [
          { id: "g9-c7-l21", number: "Bài 27", title: "Góc nội tiếp", formula: "\\widehat{BAC} = \\frac{1}{2} \\text{sđ}\\overgroup{BC}", badge: "Cốt lõi", desc: "Tính chất góc nội tiếp chắn nửa đường tròn bằng 90 độ." },
          { id: "g9-c7-l22", number: "Bài 28", title: "Đường tròn ngoại tiếp và nội tiếp của một tam giác", formula: "R = \\frac{abc}{4S}, r = \\frac{S}{p}", badge: "Trọng tâm", desc: "Giao điểm của ba đường trung trực và giao điểm của ba đường phân giác." },
          { id: "g9-c7-l23", number: "Bài 29", title: "Tứ giác nội tiếp", formula: "\\widehat{A} + \\widehat{C} = 180^\\circ", badge: "Trọng tâm 9+", desc: "4 dấu hiệu nhận biết tứ giác nội tiếp kinh điển trong mọi đề thi vào 10." },
          { id: "g9-c7-l24", number: "Bài 30", title: "Đa giác đều", formula: "n \\text{ cạnh bằng nhau, } n \\text{ góc bằng nhau}", badge: "Vận dụng", desc: "Tam giác đều, hình vuông, ngũ giác đều, lục giác đều nội tiếp đường tròn." }
        ]
      },
      {
        id: "g9-c8",
        number: "Chương X",
        title: "Một Số Hình Khối Trong Thực Tiễn",
        semester: "Tập 2 - Học kỳ II",
        icon: "cylinder",
        summary: "Hình trụ, hình nón, hình cầu, diện tích xung quanh và thể tích trong các bài toán thực tế.",
        lessons: [
          { id: "g9-c8-l25", number: "Bài 31", title: "Hình trụ", formula: "S_{xq} = 2\\pi Rh, V = \\pi R^2 h", badge: "Thực tế", desc: "Công thức và ứng dụng tính lượng nước trong bồn, thể tích lon sữa." },
          { id: "g9-c8-l26", number: "Bài 32", title: "Hình nón", formula: "S_{xq} = \\pi R l, V = \\frac{1}{3}\\pi R^2 h", badge: "Thực tế", desc: "Đường sinh l, chiều cao h, bán kính đáy R của hình nón." },
          { id: "g9-c8-l27", number: "Bài 33", title: "Hình cầu", formula: "S = 4\\pi R^2, V = \\frac{4}{3}\\pi R^3", badge: "Thực tế", desc: "Diện tích mặt cầu và thể tích khối cầu trong bài thi thực tế." }
        ]
      }
    ]
  },

  10: {
    gradeId: 10,
    title: "Toán Lớp 10",
    shortTitle: "Toán 10",
    badge: "Mệnh Đề, Bất Phương Trình, Vectơ & Phương Pháp Tọa Độ Oxy",
    badgeColor: "bg-purple-100 text-purple-900 border-purple-200",
    totalChapters: 9,
    totalLessons: 34,
    chapters: [
      {
        id: "g10-c1",
        number: "Chương I",
        title: "Mệnh Đề Và Tập Hợp",
        semester: "Tập 1 - Học kỳ I",
        icon: "code",
        summary: "Mệnh đề, mệnh đề phủ định, kéo theo, tương đương, tập hợp và các phép toán giao, hợp, hiệu.",
        lessons: [
          { id: "g10-c1-l1", number: "Bài 1", title: "Mệnh đề", formula: "P \\Rightarrow Q, \\forall x, \\exists x", badge: "Cơ bản", desc: "Mệnh đề toán học, mệnh đề phủ định và mệnh đề chứa biến." },
          { id: "g10-c1-l2", number: "Bài 2", title: "Tập hợp và các phép toán trên tập hợp", formula: "A \\cap B, A \\cup B, A \\setminus B, C_E A", badge: "Trọng tâm", desc: "Các khoảng, đoạn trên trục số thực và biểu đồ Ven." }
        ]
      },
      {
        id: "g10-c2",
        number: "Chương II",
        title: "Bất Phương Trình Và Hệ Bất Phương Trình Bậc Nhất Hai Ẩn",
        semester: "Tập 1 - Học kỳ I",
        icon: "layout",
        summary: "Biểu diễn miền nghiệm của bất phương trình và hệ bất phương trình bậc nhất hai ẩn, bài toán tối ưu quy hoạch tuyến tính.",
        lessons: [
          { id: "g10-c2-l3", number: "Bài 3", title: "Bất phương trình bậc nhất hai ẩn", formula: "ax + by \\le c", badge: "Trọng tâm", desc: "Nửa mặt phẳng bờ là đường thẳng và cách xác định miền nghiệm." },
          { id: "g10-c2-l4", number: "Bài 4", title: "Hệ bất phương trình bậc nhất hai ẩn", formula: "\\max F(x,y) = ax + by", badge: "Trọng tâm 9+", desc: "Miền đa giác nghiệm và tìm giá trị lớn nhất, nhỏ nhất của biểu thức mục tiêu." }
        ]
      },
      {
        id: "g10-c3",
        number: "Chương III",
        title: "Hệ Thức Lượng Trong Tam Giác",
        semester: "Tập 1 - Học kỳ I",
        icon: "triangle",
        summary: "Giá trị lượng giác góc tù từ 0 đến 180 độ, định lí côsin, định lí sin và các công thức tính diện tích tam giác.",
        lessons: [
          { id: "g10-c3-l5", number: "Bài 5", title: "Giá trị lượng giác của một góc từ 0° đến 180°", formula: "\\sin(180^\\circ - \\alpha) = \\sin\\alpha, \\cos(180^\\circ - \\alpha) = -\\cos\\alpha", badge: "Cơ bản", desc: "Mở rộng góc trên nửa đường tròn đơn vị." },
          { id: "g10-c3-l6", number: "Bài 6", title: "Hệ thức lượng trong tam giác", formula: "a^2 = b^2 + c^2 - 2bc\\cos A, \\frac{a}{\\sin A} = 2R", badge: "Cốt lõi", desc: "Định lí côsin, định lí sin, công thức Heron và các bán kính R, r." }
        ]
      },
      {
        id: "g10-c4",
        number: "Chương IV",
        title: "Vectơ",
        semester: "Tập 1 - Học kỳ I",
        icon: "arrow-up-right",
        summary: "Định nghĩa vectơ, tổng & hiệu hai vectơ, tích vectơ với số, toạ độ vectơ và tích vô hướng.",
        lessons: [
          { id: "g10-c4-l7", number: "Bài 7", title: "Các khái niệm mở đầu về vectơ", formula: "\\vec{a}, |\\vec{a}|, \\vec{0}", badge: "Cơ bản", desc: "Phương, hướng, độ dài vectơ và hai vectơ cùng phương, bằng nhau." },
          { id: "g10-c4-l8", number: "Bài 8", title: "Tổng và hiệu của hai vectơ", formula: "\\vec{AB} + \\vec{BC} = \\vec{AC}, \\text{Quy tắc hình bình hành}", badge: "Cốt lõi", desc: "Quy tắc 3 điểm, quy tắc hình bình hành và quy tắc trừ." },
          { id: "g10-c4-l9", number: "Bài 9", title: "Tích của một vectơ với một số", formula: "k\\vec{a}, \\vec{AM} = \\frac{1}{2}(\\vec{AB}+\\vec{AC})", badge: "Trọng tâm", desc: "Tính chất phân tích một vectơ theo hai vectơ không cùng phương." },
          { id: "g10-c4-l10", number: "Bài 10", title: "Vectơ trong mặt phẳng toạ độ", formula: "\\vec{u} = x\\vec{i} + y\\vec{j} = (x; y)", badge: "Trọng tâm", desc: "Toạ độ điểm, toạ độ vectơ và các phép toán đại số với toạ độ." },
          { id: "g10-c4-l11", number: "Bài 11", title: "Tích vô hướng của hai vectơ", formula: "\\vec{u} \\cdot \\vec{v} = |\\vec{u}| |\\vec{v}| \\cos(\\vec{u},\\vec{v}) = x_1 x_2 + y_1 y_2", badge: "Trọng tâm 9+", desc: "Tính góc, độ dài và điều kiện hai vectơ vuông góc." }
        ]
      },
      {
        id: "g10-c5",
        number: "Chương VI",
        title: "Hàm Số, Đồ Thị Và Ứng Dụng",
        semester: "Tập 2 - Học kỳ II",
        icon: "trending-up",
        summary: "Hàm số bậc hai, dấu của tam thức bậc hai và phương trình quy về phương trình bậc hai.",
        lessons: [
          { id: "g10-c5-l12", number: "Bài 15", title: "Hàm số", formula: "y = f(x), D \\subset \\mathbb{R}", badge: "Cơ bản", desc: "Tập xác định, tập giá trị, tính đồng biến nghịch biến của hàm số." },
          { id: "g10-c5-l13", number: "Bài 16", title: "Hàm số bậc hai", formula: "y = ax^2 + bx + c, I\\left(-\\frac{b}{2a}; -\\frac{\\Delta}{4a}\\right)", badge: "Cốt lõi", desc: "Tọa độ đỉnh I, trục đối xứng và bảng biến thiên của Parabol." },
          { id: "g10-c5-l14", number: "Bài 17", title: "Dấu của tam thức bậc hai", formula: "f(x) = ax^2 + bx + c", badge: "Trọng tâm 9+", desc: "Định lí về dấu tam thức bậc hai: 'Trong trái ngoài cùng' khi có hai nghiệm." },
          { id: "g10-c5-l15", number: "Bài 18", title: "Phương trình quy về phương trình bậc hai", formula: "\\sqrt{f(x)} = \\sqrt{g(x)}, \\sqrt{f(x)} = g(x)", badge: "Trọng tâm 9+", desc: "Phương pháp bình phương hai vế và thử lại nghiệm." }
        ]
      },
      {
        id: "g10-c6",
        number: "Chương VII",
        title: "Phương Pháp Toạ Độ Trong Mặt Phẳng (Oxy)",
        semester: "Tập 2 - Học kỳ II",
        icon: "compass",
        summary: "Phương trình đường thẳng, góc và khoảng cách, phương trình đường tròn và ba đường conic (Elip, Hypebol, Parabol).",
        lessons: [
          { id: "g10-c6-l16", number: "Bài 19", title: "Phương trình đường thẳng", formula: "ax + by + c = 0, \\begin{cases} x = x_0 + at \\\\ y = y_0 + bt \\end{cases}", badge: "Cốt lõi", desc: "Vectơ pháp tuyến, vectơ chỉ phương, PT tổng quát và tham số." },
          { id: "g10-c6-l17", number: "Bài 20", title: "Vị trí tương đối giữa hai đường thẳng. Góc và khoảng cách", formula: "d(M, \\Delta) = \\frac{|ax_0 + by_0 + c|}{\\sqrt{a^2+b^2}}", badge: "Trọng tâm", desc: "Khoảng cách từ một điểm đến đường thẳng và góc giữa hai đường thẳng." },
          { id: "g10-c6-l18", number: "Bài 21", title: "Đường tròn trong mặt phẳng toạ độ", formula: "(x-a)^2 + (y-b)^2 = R^2", badge: "Trọng tâm", desc: "Xác định tâm, bán kính và phương trình tiếp tuyến của đường tròn." },
          { id: "g10-c6-l19", number: "Bài 22", title: "Ba đường Conic: Elip, Hypebol, Parabol", formula: "\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1, \\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1, y^2 = 2px", badge: "Trọng tâm 9+", desc: "Tiêu điểm, tiêu cự, trục lớn, trục bé và các ứng dụng quỹ đạo thiên văn." }
        ]
      },
      {
        id: "g10-c7",
        number: "Chương VIII",
        title: "Đại Số Tổ Hợp",
        semester: "Tập 2 - Học kỳ II",
        icon: "hash",
        summary: "Quy tắc cộng và quy tắc nhân, sơ đồ cây, hoán vị, chỉnh hợp, tổ hợp và nhị thức Newton.",
        lessons: [
          { id: "g10-c7-l20", number: "Bài 23", title: "Quy tắc đếm", formula: "\\text{Cộng: } n_1 + n_2, \\text{ Nhân: } n_1 \\cdot n_2", badge: "Cơ bản", desc: "Phân biệt các công việc hoàn thành qua các phương án hoặc qua các giai đoạn." },
          { id: "g10-c7-l21", number: "Bài 24", title: "Hoán vị, chỉnh hợp và tổ hợp", formula: "P_n = n!, A_n^k = \\frac{n!}{(n-k)!}, C_n^k = \\frac{n!}{k!(n-k)!}", badge: "Cốt lõi", desc: "Khi nào cần thứ tự sắp xếp và khi nào chỉ cần chọn nhóm." },
          { id: "g10-c7-l22", number: "Bài 25", title: "Nhị thức Newton", formula: "(a+b)^4, (a+b)^5", badge: "Trọng tâm 9+", desc: "Khai triển nhị thức Newton với số mũ n = 4, 5 và tính hệ số." }
        ]
      }
    ]
  },

  11: {
    gradeId: 11,
    title: "Toán Lớp 11",
    shortTitle: "Toán 11",
    badge: "Lượng Giác, Dãy Số, Hình Học Không Gian, Mũ & Logarit, Đạo Hàm",
    badgeColor: "bg-pink-100 text-pink-900 border-pink-200",
    totalChapters: 9,
    totalLessons: 34,
    chapters: [
      {
        id: "g11-c1",
        number: "Chương I",
        title: "Hàm Số Lượng Giác Và Phương Trình Lượng Giác",
        semester: "Tập 1 - Học kỳ I",
        icon: "waves",
        summary: "Góc lượng giác, các công thức lượng giác, hàm số y = sin x, cos x, tan x, cot x và phương trình lượng giác cơ bản.",
        lessons: [
          { id: "g11-c1-l1", number: "Bài 1", title: "Giá trị lượng giác của góc lượng giác", formula: "\\sin^2\\alpha + \\cos^2\\alpha = 1, 1 + \\tan^2\\alpha = \\frac{1}{\\cos^2\\alpha}", badge: "Cơ bản", desc: "Đường tròn lượng giác, radian và các hệ thức cơ bản." },
          { id: "g11-c1-l2", number: "Bài 2", title: "Công thức lượng giác", formula: "\\cos(a-b), \\sin 2a = 2\\sin a\\cos a, \\text{hạ bậc}", badge: "Cốt lõi", desc: "Công thức cộng, nhân đôi, hạ bậc và biến đổi tích thành tổng, tổng thành tích." },
          { id: "g11-c1-l3", number: "Bài 3", title: "Hàm số lượng giác", formula: "y = \\sin x, y = \\cos x", badge: "Trọng tâm", desc: "Tập xác định, chu kỳ, tính chẵn lẻ và đồ thị hình sin." },
          { id: "g11-c1-l4", number: "Bài 4", title: "Phương trình lượng giác cơ bản", formula: "\\sin x = m, \\cos x = m, \\tan x = m", badge: "Trọng tâm 9+", desc: "Công thức họ nghiệm và điều kiện có nghiệm." }
        ]
      },
      {
        id: "g11-c2",
        number: "Chương II",
        title: "Dãy Số. Cấp Số Cộng Và Cấp Số Nhân",
        semester: "Tập 1 - Học kỳ I",
        icon: "list-ordered",
        summary: "Dãy số tăng giảm bị chặn, cấp số cộng (công sai d), cấp số nhân (công bội q) và tổng n số hạng.",
        lessons: [
          { id: "g11-c2-l5", number: "Bài 5", title: "Dãy số", formula: "u_n = f(n), u_{n+1} > u_n", badge: "Cơ bản", desc: "Cách cho dãy số, dãy số tăng, giảm và bị chặn." },
          { id: "g11-c2-l6", number: "Bài 6", title: "Cấp số cộng", formula: "u_n = u_1 + (n-1)d, S_n = \\frac{n(u_1+u_n)}{2}", badge: "Cốt lõi", desc: "Công sai d, số hạng tổng quát và tổng n số hạng đầu tiên." },
          { id: "g11-c2-l7", number: "Bài 7", title: "Cấp số nhân", formula: "u_n = u_1 \\cdot q^{n-1}, S_n = \\frac{u_1(1-q^n)}{1-q}", badge: "Trọng tâm 9+", desc: "Công bội q, bài toán lãi kép ngân hàng và tăng trưởng dân số." }
        ]
      },
      {
        id: "g11-c3",
        number: "Chương III",
        title: "Các Số Đặc Trưng Đo Xu Thế Trung Tâm Của Mẫu Số Liệu Ghép Nhóm",
        semester: "Tập 1 - Học kỳ I",
        icon: "bar-chart-2",
        summary: "Mẫu số liệu ghép nhóm, xác định khoảng chia và các số đặc trưng: số trung bình, trung vị, tứ phân vị và mốt.",
        lessons: [
          { id: "g11-c3-l8", number: "Bài 8", title: "Mẫu số liệu ghép nhóm", formula: "[a_i; a_{i+1}), x_i = \\frac{a_i+a_{i+1}}{2}", badge: "Cơ bản", desc: "Thu thập, tổ chức và ghép nhóm mẫu số liệu, tần số ghép nhóm và giá trị đại diện." },
          { id: "g11-c3-l9", number: "Bài 9", title: "Các số đặc trưng đo xu thế trung tâm", formula: "\\bar{x}, M_e, Q_1, Q_2, Q_3, M_o", badge: "Trọng tâm", desc: "Công thức và ý nghĩa của số trung bình, trung vị, tứ phân vị và mốt cho mẫu số liệu ghép nhóm." }
        ]
      },
      {
        id: "g11-c4",
        number: "Chương IV",
        title: "Quan Hệ Song Song Trong Không Gian",
        semester: "Tập 1 - Học kỳ I",
        icon: "box",
        summary: "Điểm, đường thẳng và mặt phẳng không gian, hai đường thẳng song song, đường thẳng song song mặt phẳng, hai mặt phẳng song song và phép chiếu song song.",
        lessons: [
          { id: "g11-c4-l10", number: "Bài 10", title: "Đường thẳng và mặt phẳng trong không gian", formula: "3 \\text{ điểm không thẳng hàng xác định một mặt phẳng}", badge: "Cơ bản", desc: "Các tính chất thừa nhận, tìm giao tuyến của hai mặt phẳng và giao điểm của đường thẳng với mặt phẳng." },
          { id: "g11-c4-l11", number: "Bài 11", title: "Hai đường thẳng song song", formula: "a \\parallel b, a \\cap b = \\emptyset", badge: "Trọng tâm", desc: "Hai đường thẳng chéo nhau và hai đường thẳng song song trong không gian." },
          { id: "g11-c4-l12", number: "Bài 12", title: "Đường thẳng và mặt phẳng song song", formula: "d \\not\\subset (P), d \\parallel d' \\subset (P) \\Rightarrow d \\parallel (P)", badge: "Cốt lõi", desc: "Điều kiện để đường thẳng song song với mặt phẳng." },
          { id: "g11-c4-l13", number: "Bài 13", title: "Hai mặt phẳng song song", formula: "(P) \\parallel (Q)", badge: "Trọng tâm", desc: "Dấu hiệu nhận biết hai mặt phẳng song song và định lí Thalès không gian." },
          { id: "g11-c4-l14", number: "Bài 14", title: "Phép chiếu song song", formula: "\\text{Hình biểu diễn}", badge: "Thực tế", desc: "Tính chất bảo toàn tính song song và tỉ số đoạn thẳng trong hình biểu diễn." }
        ]
      },
      {
        id: "g11-c5",
        number: "Chương V",
        title: "Giới Hạn. Hàm Số Liên Tục",
        semester: "Tập 1 - Học kỳ I",
        icon: "infinity",
        summary: "Giới hạn dãy số lim u_n, giới hạn hàm số lim f(x), các dạng vô định 0/0, vô cùng/vô cùng và tính liên tục của hàm số.",
        lessons: [
          { id: "g11-c5-l15", number: "Bài 15", title: "Giới hạn của dãy số", formula: "\\lim_{n \\to \\infty} \\frac{1}{n^k} = 0, \\lim q^n = 0 \\ (|q|<1)", badge: "Cơ bản", desc: "Định nghĩa, các giới hạn đặc biệt và tổng cấp số nhân lùi vô hạn." },
          { id: "g11-c5-l16", number: "Bài 16", title: "Giới hạn của hàm số", formula: "\\lim_{x \\to x_0} f(x), \\lim_{x \\to +\\infty} f(x)", badge: "Cốt lõi", desc: "Khử các dạng vô định bằng phân tích nhân tử hoặc nhân liên hợp." },
          { id: "g11-c5-l17", number: "Bài 17", title: "Hàm số liên tục", formula: "\\lim_{x \\to x_0} f(x) = f(x_0)", badge: "Trọng tâm 9+", desc: "Hàm số liên tục tại một điểm, trên một khoảng và định lí giá trị trung gian (chứng minh phương trình có nghiệm)." }
        ]
      },
      {
        id: "g11-c6",
        number: "Chương VI",
        title: "Hàm Số Mũ Và Hàm Số Lôgarit",
        semester: "Tập 2 - Học kỳ II",
        icon: "superscript",
        summary: "Lũy thừa với số mũ thực, lôgarit, hàm số mũ y = a^x, hàm số lôgarit y = log_a x và phương trình bất phương trình mũ/lôgarit.",
        lessons: [
          { id: "g11-c6-l18", number: "Bài 18", title: "Luỹ thừa với số mũ thực", formula: "a^\\alpha, a^\\alpha \\cdot a^\\beta = a^{\\alpha+\\beta}", badge: "Cơ bản", desc: "Lũy thừa với số mũ hữu tỉ, vô tỉ và các tính chất." },
          { id: "g11-c6-l19", number: "Bài 19", title: "Lôgarit", formula: "\\log_a b = c \\Leftrightarrow a^c = b, \\log_a(xy) = \\log_a x + \\log_a y", badge: "Cốt lõi", desc: "Lôgarit của một tích, một thương, lũy thừa và công thức đổi cơ số." },
          { id: "g11-c6-l20", number: "Bài 20", title: "Hàm số mũ và hàm số lôgarit", formula: "y = a^x, y = \\log_a x \\ (a > 0, a \\ne 1)", badge: "Trọng tâm", desc: "Tập xác định, đồ thị và chiều biến thiên phụ thuộc vào cơ số a > 1 hay 0 < a < 1." },
          { id: "g11-c6-l21", number: "Bài 21", title: "Phương trình, bất phương trình mũ và lôgarit", formula: "a^x = b \\Leftrightarrow x = \\log_a b", badge: "Trọng tâm 9+", desc: "Đưa về cùng cơ số, đặt ẩn phụ và phương pháp lôgarit hóa." }
        ]
      },
      {
        id: "g11-c7",
        number: "Chương VII",
        title: "Quan Hệ Vuông Góc Trong Không Gian. Thể Tích",
        semester: "Tập 2 - Học kỳ II",
        icon: "crosshair",
        summary: "Đường thẳng vuông góc mặt phẳng, hai mặt phẳng vuông góc, khoảng cách, góc nhị diện và thể tích khối đa diện.",
        lessons: [
          { id: "g11-c7-l22", number: "Bài 22", title: "Hai đường thẳng vuông góc", formula: "\\vec{u} \\cdot \\vec{v} = 0", badge: "Cơ bản", desc: "Góc giữa hai đường thẳng trong không gian." },
          { id: "g11-c7-l23", number: "Bài 23", title: "Đường thẳng vuông góc với mặt phẳng", formula: "d \\perp a, d \\perp b \\subset (P) \\Rightarrow d \\perp (P)", badge: "Cốt lõi", desc: "Định lí 3 đường vuông góc và chứng minh quan hệ vuông góc." },
          { id: "g11-c7-l24", number: "Bài 24", title: "Hai mặt phẳng vuông góc", formula: "(P) \\supset d \\perp (Q) \\Rightarrow (P) \\perp (Q)", badge: "Trọng tâm", desc: "Điều kiện để hai mặt phẳng vuông góc, hình lăng trụ đứng, hình chóp đều." },
          { id: "g11-c7-l25", number: "Bài 25", title: "Khoảng cách trong không gian", formula: "d(M, (P)), d(a, b)", badge: "Trọng tâm 9+", desc: "Khoảng cách từ điểm đến mặt phẳng và khoảng cách giữa hai đường thẳng chéo nhau." },
          { id: "g11-c7-l26", number: "Bài 26", title: "Góc giữa đường thẳng và mặt phẳng. Góc nhị diện", formula: "\\cos\\varphi, \\text{Góc nhị diện [P, d, Q]}", badge: "Trọng tâm 9+", desc: "Xác định góc phẳng nhị diện và tính góc giữa đường và mặt." },
          { id: "g11-c7-l27", number: "Bài 27", title: "Thể tích", formula: "V = B \\cdot h, V = \\frac{1}{3}Bh", badge: "Trọng tâm", desc: "Thể tích khối chóp, khối lăng trụ và khối chóp cụt đều." }
        ]
      },
      {
        id: "g11-c8",
        number: "Chương VIII",
        title: "Các Quy Tắc Tính Xác Suất",
        semester: "Tập 2 - Học kỳ II",
        icon: "pie-chart",
        summary: "Biến cố hợp, giao, độc lập, công thức cộng xác suất và công thức nhân xác suất.",
        lessons: [
          { id: "g11-c8-l28", number: "Bài 28", title: "Biến cố hợp, biến cố giao, biến cố độc lập", formula: "A \\cup B, A \\cap B, A \\cap B = \\emptyset", badge: "Cơ bản", desc: "Mô tả biến cố hợp, giao, độc lập và mối liên hệ giữa các biến cố." },
          { id: "g11-c8-l29", number: "Bài 29", title: "Công thức cộng xác suất", formula: "P(A \\cup B) = P(A) + P(B) - P(AB)", badge: "Cốt lõi", desc: "Quy tắc cộng xác suất cho biến cố xung khắc và biến cố bất kì." },
          { id: "g11-c8-l30", number: "Bài 30", title: "Công thức nhân xác suất cho hai biến cố độc lập", formula: "P(AB) = P(A) \\cdot P(B)", badge: "Trọng tâm", desc: "Quy tắc nhân xác suất cho các biến cố độc lập và ứng dụng thực tế." }
        ]
      },
      {
        id: "g11-c9",
        number: "Chương IX",
        title: "Đạo Hàm",
        semester: "Tập 2 - Học kỳ II",
        icon: "activity",
        summary: "Định nghĩa đạo hàm, ý nghĩa hình học & vật lí (tiếp tuyến, vận tốc tức thời), các quy tắc tính đạo hàm và đạo hàm cấp hai.",
        lessons: [
          { id: "g11-c9-l31", number: "Bài 31", title: "Định nghĩa và ý nghĩa của đạo hàm", formula: "f'(x_0) = \\lim_{\\Delta x \\to 0} \\frac{\\Delta y}{\\Delta x}, y - y_0 = f'(x_0)(x - x_0)", badge: "Cốt lõi", desc: "Hệ số góc của tiếp tuyến và vận tốc tức thời của chuyển động." },
          { id: "g11-c9-l32", number: "Bài 32", title: "Các quy tắc tính đạo hàm", formula: "(uv)' = u'v + uv', \\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}", badge: "Cốt lõi", desc: "Đạo hàm các hàm số cơ bản, hàm hợp và bảng đạo hàm hoàn chỉnh." },
          { id: "g11-c9-l33", number: "Bài 33", title: "Đạo hàm cấp hai", formula: "f''(x) = (f'(x))', a(t) = s''(t)", badge: "Trọng tâm 9+", desc: "Ý nghĩa gia tốc tức thời trong chuyển động thẳng và ứng dụng tìm điểm uốn." }
        ]
      }
    ]
  },

  12: {
    gradeId: 12,
    title: "Toán Lớp 12",
    shortTitle: "Toán 12 (Thi Tốt Nghiệp & ĐGNL)",
    badge: "Trọng Tâm Thi Tốt Nghiệp THPT 2026 & Đánh Giá Năng Lực ĐHQG",
    badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
    totalChapters: 6,
    totalLessons: 24,
    chapters: [
      {
        id: "g12-c1",
        number: "Chương I",
        title: "Ứng Dụng Đạo Hàm Để Khảo Sát Và Vẽ Đồ Thị Của Hàm Số",
        semester: "Tập 1 - Học kỳ I",
        icon: "activity",
        summary: "Tính đơn điệu, cực trị, giá trị lớn nhất nhỏ nhất (GTLN-GTNN), tiệm cận đứng, ngang, xiên, khảo sát vẽ đồ thị và ứng dụng tối ưu thực tế.",
        lessons: [
          { id: "g12-c1-l1", number: "Bài 1", title: "Tính đơn điệu và cực trị của hàm số", formula: "y' \\ge 0 \\Rightarrow \\text{đồng biến}, y' = 0 \\text{ đổi dấu}", badge: "Cốt lõi THPT", desc: "Điều kiện cần và đủ cho tính đơn điệu, các điểm cực đại, cực tiểu." },
          { id: "g12-c1-l2", number: "Bài 2", title: "Giá trị lớn nhất và giá trị nhỏ nhất của hàm số", formula: "\\max_{[a;b]} f(x), \\min_{[a;b]} f(x)", badge: "Cốt lõi THPT", desc: "Quy tắc tìm GTLN, GTNN trên một đoạn và trên khoảng vô hạn." },
          { id: "g12-c1-l3", number: "Bài 3", title: "Đường tiệm cận của đồ thị hàm số", formula: "\\lim_{x \\to \\pm\\infty} f(x) = y_0 \\text{ (TCN)}, \\lim_{x \\to x_0} f(x) = \\infty \\text{ (TCĐ)}, y = ax+b \\text{ (TCX)}", badge: "Trọng tâm GDPT 2018", desc: "Tiệm cận ngang, tiệm cận đứng và tiệm cận xiên $a = \\lim \\frac{f(x)}{x}, b = \\lim [f(x)-ax]$." },
          { id: "g12-c1-l4", number: "Bài 4", title: "Khảo sát sự biến thiên và vẽ đồ thị của hàm số", formula: "y = \\frac{ax+b}{cx+d}, y = \\frac{ax^2+bx+c}{px+q}", badge: "Trọng tâm THPT", desc: "Sơ đồ khảo sát hoàn chỉnh các hàm số bậc ba, phân thức bậc nhất/bậc nhất, bậc hai/bậc nhất." },
          { id: "g12-c1-l5", number: "Bài 5", title: "Ứng dụng đạo hàm giải quyết bài toán thực tế", formula: "\\text{Tối ưu hóa: Chi phí min, Doanh thu max}", badge: "Thực tế 9+", desc: "Các bài toán thực tế về kinh tế, tối ưu hóa vật liệu hình học (hộp, lon, máng dẫn nước)." }
        ]
      },
      {
        id: "g12-c2",
        number: "Chương II",
        title: "Toạ Độ Của Vectơ Trong Không Gian",
        semester: "Tập 1 - Học kỳ I",
        icon: "box",
        summary: "Vectơ không gian, hệ trục toạ độ Oxyz, biểu thức toạ độ các phép toán vectơ, tích có hướng và ứng dụng hình học.",
        lessons: [
          { id: "g12-c2-l6", number: "Bài 6", title: "Vectơ trong không gian", formula: "\\vec{u} + \\vec{v}, k\\vec{u}, \\vec{u} \\cdot \\vec{v}", badge: "Cơ bản", desc: "Khái niệm góc giữa hai vectơ, tích vô hướng trong không gian 3 chiều." },
          { id: "g12-c2-l7", number: "Bài 7", title: "Hệ trục toạ độ trong không gian (Oxyz)", formula: "M(x; y; z) \\Leftrightarrow \\vec{OM} = x\\vec{i} + y\\vec{j} + z\\vec{k}", badge: "Cốt lõi", desc: "Tọa độ điểm, tọa độ vectơ, trung điểm và trọng tâm tứ diện." },
          { id: "g12-c2-l8", number: "Bài 8", title: "Biểu thức toạ độ của các phép toán vectơ", formula: "|\\vec{u}| = \\sqrt{x^2+y^2+z^2}, [\\vec{u},\\vec{v}]", badge: "Trọng tâm 9+", desc: "Độ dài đoạn thẳng, khoảng cách hai điểm, góc và tích có hướng ứng dụng tính diện tích, thể tích." }
        ]
      },
      {
        id: "g12-c3",
        number: "Chương III",
        title: "Các Số Đặc Trưng Đo Mức Độ Phân Tán Cho Mẫu Số Liệu Ghép Nhóm",
        semester: "Tập 1 - Học kỳ I",
        icon: "bar-chart-2",
        summary: "Khoảng biến thiên, khoảng tứ phân vị, phương sai và độ lệch chuẩn của mẫu số liệu ghép nhóm.",
        lessons: [
          { id: "g12-c3-l9", number: "Bài 9", title: "Khoảng biến thiên và khoảng tứ phân vị", formula: "R = x_{\\max} - x_{\\min}, \\Delta_Q = Q_3 - Q_1", badge: "Cơ bản", desc: "Đo mức độ phân tán của dữ liệu ghép nhóm trong thống kê." },
          { id: "g12-c3-l10", number: "Bài 10", title: "Phương sai và độ lệch chuẩn", formula: "s^2 = \\frac{1}{n}\\sum m_i(c_i - \\bar{x})^2, s = \\sqrt{s^2}", badge: "Trọng tâm ĐGNL", desc: "Đánh giá độ ổn định và độ tin cậy của các chỉ số thực tế." }
        ]
      },
      {
        id: "g12-c4",
        number: "Chương IV",
        title: "Nguyên Hàm Và Tích Phân",
        semester: "Tập 2 - Học kỳ II",
        icon: "sigma",
        summary: "Nguyên hàm, bảng nguyên hàm cơ bản, tích phân Newton-Leibniz, phương pháp đổi biến số & từng phần, tính diện tích hình phẳng và thể tích tròn xoay.",
        lessons: [
          { id: "g12-c4-l11", number: "Bài 11", title: "Nguyên hàm", formula: "\\int f(x)dx = F(x) + C", badge: "Cốt lõi THPT", desc: "Định nghĩa, tính chất và bảng các nguyên hàm thường gặp." },
          { id: "g12-c4-l12", number: "Bài 12", title: "Tích phân", formula: "\\int_a^b f(x)dx = F(b) - F(a)", badge: "Cốt lõi THPT", desc: "Định nghĩa công thức Newton-Leibniz, phương pháp đổi biến số và tích phân từng phần $\\int u dv = uv - \\int v du$." },
          { id: "g12-c4-l13", number: "Bài 13", title: "Ứng dụng hình học của tích phân", formula: "S = \\int_a^b |f(x)|dx, V = \\pi\\int_a^b [f(x)]^2 dx", badge: "Trọng tâm 9+", desc: "Tính diện tích hình phẳng giới hạn bởi đồ thị và thể tích khối tròn xoay quanh trục Ox." }
        ]
      },
      {
        id: "g12-c5",
        number: "Chương V",
        title: "Phương Pháp Toạ Độ Trong Không Gian (Oxyz)",
        semester: "Tập 2 - Học kỳ II",
        icon: "compass",
        summary: "Phương trình mặt phẳng, phương trình đường thẳng không gian, góc & khoảng cách, phương trình mặt cầu.",
        lessons: [
          { id: "g12-c5-l14", number: "Bài 14", title: "Phương trình mặt phẳng", formula: "Ax + By + Cz + D = 0", badge: "Cốt lõi THPT", desc: "Vectơ pháp tuyến, viết phương trình mặt phẳng qua 1 điểm hoặc 3 điểm, phương trình mặt phẳng đoạn chắn." },
          { id: "g12-c5-l15", number: "Bài 15", title: "Phương trình đường thẳng trong không gian", formula: "\\frac{x-x_0}{a} = \\frac{y-y_0}{b} = \\frac{z-z_0}{c}", badge: "Cốt lõi THPT", desc: "Phương trình tham số và chính tắc của đường thẳng." },
          { id: "g12-c5-l16", number: "Bài 16", title: "Công thức tính góc và khoảng cách trong không gian", formula: "d(M,(P)) = \\frac{|Ax_0+By_0+Cz_0+D|}{\\sqrt{A^2+B^2+C^2}}", badge: "Trọng tâm 9+", desc: "Khoảng cách từ điểm đến mặt phẳng, khoảng cách giữa 2 đường chéo nhau, góc giữa 2 đường, đường và mặt, 2 mặt." },
          { id: "g12-c5-l17", number: "Bài 17", title: "Phương trình mặt cầu", formula: "(x-a)^2 + (y-b)^2 + (z-c)^2 = R^2", badge: "Trọng tâm THPT", desc: "Tọa độ tâm I(a;b;c), bán kính R và điều kiện tiếp xúc của mặt cầu với mặt phẳng." }
        ]
      },
      {
        id: "g12-c6",
        number: "Chương VI",
        title: "Xác Suất Có Điều Kiện",
        semester: "Tập 2 - Học kỳ II",
        icon: "percent",
        summary: "Khái niệm xác suất có điều kiện P(A|B), công thức nhân xác suất, công thức xác suất toàn phần và công thức Bayes (nội dung mới chuẩn GDPT 2018).",
        lessons: [
          { id: "g12-c6-l18", number: "Bài 18", title: "Xác suất có điều kiện", formula: "P(A|B) = \\frac{P(AB)}{P(B)} \\ (P(B) > 0)", badge: "Điểm Mới 2018", desc: "Định nghĩa xác suất có điều kiện và công thức nhân xác suất $P(AB) = P(B)P(A|B)$." },
          { id: "g12-c6-l19", number: "Bài 19", title: "Công thức xác suất toàn phần và công thức Bayes", formula: "P(B) = \\sum P(A_i)P(B|A_i), P(A_i|B) = \\frac{P(A_i)P(B|A_i)}{P(B)}", badge: "Phân loại 9+ THPT", desc: "Bài toán chẩn đoán y khoa, xác suất phế phẩm, sơ đồ hình cây trong đề thi Tốt nghiệp THPT 2026." }
        ]
      }
    ]
  }
};

// Đính kèm vào MATH_DATA toàn cục
if (window.MATH_DATA) {
  window.MATH_DATA.knttCurriculum = window.KNTT_CURRICULUM;
}
