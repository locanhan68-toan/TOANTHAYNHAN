// ==========================================================================
// CƠ SỞ DỮ LIỆU ĐÁNH GIÁ CHẨN ĐOÁN LỖI SAI & CHẤM TỰ LUẬN CHUẨN GDPT 2018
// CẤU TRÚC 15 CÂU:
// - PHẦN I: 5 CÂU TRẮC NGHIỆM (Chẩn đoán lỗi sai, bẫy & bài tập bù đắp)
// - PHẦN II: 3 CÂU ĐÚNG / SAI (Định dạng đề thi mới GDPT 2018, 4 ý a-b-c-d)
// - PHẦN III: 4 CÂU TRẢ LỜI NGẮN (Điền đáp số, số nguyên, phân số, độ dài)
// - PHẦN IV: 3 CÂU TỰ LUẬN (Tích hợp AI Auto-Grading 4 tiêu chí & Thầy chấm)
// ==========================================================================

window.DIAGNOSTIC_ASSESSMENT_DB = {
  // ========================================================================
  // BÀI 10: ĐIỂM, ĐƯỜNG THẲNG VÀ MẶT PHẲNG TRONG KHÔNG GIAN
  // ========================================================================
  "g11-c4-l10": {
    lessonId: "g11-c4-l10",
    title: "Bài 10: Điểm, đường thẳng và mặt phẳng trong không gian",
    chapterTitle: "Chương IV: Quan hệ song song trong không gian",
    grade: 11,
    summary: "Bộ 15 câu hỏi đánh giá chẩn đoán năng lực hình học không gian: Tiên đề thừa nhận, 4 cách xác định mặt phẳng, tìm giao tuyến - giao điểm và thiết diện hình chóp / tứ diện.",
    
    // PHẦN I: 5 CÂU TRẮC NGHIỆM
    multipleChoice: [
      {
        id: "mc1",
        number: "Câu 1",
        level: "Nhận biết",
        question: "Cho 3 điểm phân biệt $A, B, C$. Điều kiện cần và đủ để xác định duy nhất một mặt phẳng đi qua ba điểm đó là:",
        options: [
          { key: "A", text: "Ba điểm $A, B, C$ thẳng hàng.", isCorrect: false, errorTag: "ERR_COLLINEAR", errorMsg: "Sai lầm nghiêm trọng: Nếu ba điểm $A, B, C$ thẳng hàng thì có vô số mặt phẳng đi qua chúng (chùm mặt phẳng quanh trục $AB$) chứ không xác định duy nhất một mặt phẳng!" },
          { key: "B", text: "Ba điểm $A, B, C$ không thẳng hàng.", isCorrect: true, errorTag: null, errorMsg: "Chính xác! Theo tính chất thừa nhận 2 của hình học không gian: Có một và chỉ một mặt phẳng đi qua ba điểm không thẳng hàng." },
          { key: "C", text: "$AB \\perp BC$ tại điểm $B$.", isCorrect: false, errorTag: "ERR_UNNECESSARY_COND", errorMsg: "Điều kiện vuông góc là không cần thiết, tam giác bất kì chỉ cần 3 đỉnh không thẳng hàng là đủ tạo nên một mặt phẳng duy nhất." },
          { key: "D", text: "$A, B, C$ cùng thuộc một đường tròn.", isCorrect: false, errorTag: "ERR_REDUNDANT", errorMsg: "Điều này thừa giả thiết và chưa chuẩn xác, vì định lý chỉ yêu cầu 3 điểm phân biệt không thẳng hàng." }
        ],
        remedialProblem: {
          title: "Bài tập khắc phục: Tiên đề xác định mặt phẳng",
          question: "Trong không gian, cho 4 điểm phân biệt $A, B, C, D$ trong đó không có 3 điểm nào thẳng hàng. Có thể tạo được tối đa bao nhiêu mặt phẳng đi qua 3 điểm trong số chúng?",
          correctAnswer: "$C_4^3 = 4$ mặt phẳng",
          tip: "Mẹo nhớ: Cứ mỗi bộ 3 điểm KHÔNG THẲNG HÀNG thì xác định duy nhất 1 mặt phẳng."
        }
      },
      {
        id: "mc2",
        number: "Câu 2",
        level: "Thông hiểu",
        question: "Trong các khẳng định sau, khẳng định nào KHÔNG xác định được một mặt phẳng duy nhất?",
        options: [
          { key: "A", text: "Ba điểm không thẳng hàng.", isCorrect: false, errorTag: "ERR_VALID_WAY", errorMsg: "Đây là cách xác định mặt phẳng chuẩn xác (Cách 1)." },
          { key: "B", text: "Một điểm và một đường thẳng.", isCorrect: true, errorTag: null, errorMsg: "Rất chính xác! Bẫy ở chỗ: Nếu điểm đó NẰM TRÊN đường thẳng thì có vô số mặt phẳng đi qua. Phải là 'Một điểm NẰM NGOÀI một đường thẳng' thì mới xác định duy nhất một mặt phẳng." },
          { key: "C", text: "Hai đường thẳng cắt nhau.", isCorrect: false, errorTag: "ERR_VALID_WAY", errorMsg: "Hai đường thẳng cắt nhau luôn đồng phẳng và xác định duy nhất một mặt phẳng." },
          { key: "D", text: "Hai đường thẳng song song.", isCorrect: false, errorTag: "ERR_VALID_WAY", errorMsg: "Hai đường thẳng song song luôn đồng phẳng và xác định duy nhất một mặt phẳng." }
        ],
        remedialProblem: {
          title: "Bài tập khắc phục: Bẫy điểm thuộc đường thẳng",
          question: "Cho đường thẳng $d$ và điểm $A \\in d$. Có bao nhiêu mặt phẳng đi qua điểm $A$ và đường thẳng $d$?",
          correctAnswer: "Vô số mặt phẳng",
          tip: "Mẹo nhớ: Muốn xác định duy nhất 1 mặt phẳng từ điểm và đường thẳng thì điểm $A$ bắt buộc phải $\\notin d$."
        }
      },
      {
        id: "mc3",
        number: "Câu 3",
        level: "Thông hiểu",
        question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành tâm $O$. Giao tuyến của hai mặt phẳng $(SAC)$ và $(SBD)$ là đường thẳng nào?",
        options: [
          { key: "A", text: "Đường thẳng $SO$.", isCorrect: true, errorTag: null, errorMsg: "Xuất sắc! Ta có $S$ là điểm chung thứ nhất. Trong đáy $ABCD$, $O = AC \\cap BD$ nên $O \\in (SAC)$ và $O \\in (SBD)$, suy ra $O$ là điểm chung thứ hai. Vậy giao tuyến là $SO$." },
          { key: "B", text: "Đường thẳng $AB$.", isCorrect: false, errorTag: "ERR_WRONG_LINE", errorMsg: "Sai lầm: $AB$ chỉ thuộc mặt phẳng $(SAB)$ và đáy $(ABCD)$, không thuộc $(SAC)$ hay $(SBD)$." },
          { key: "C", text: "Đường thẳng $SD$.", isCorrect: false, errorTag: "ERR_FACE_EDGE", errorMsg: "$SD$ thuộc $(SBD)$ nhưng không thuộc $(SAC)$, nên không thể là giao tuyến chung." },
          { key: "D", text: "Hai mặt phẳng không cắt nhau vì $AC$ và $BD$ chéo nhau.", isCorrect: false, errorTag: "ERR_SKEW_FALLACY", errorMsg: "Ngộ nhận nguy hiểm: $AC$ và $BD$ là hai đường chéo của đáy $ABCD$, chúng cùng nằm trong mặt phẳng đáy $(ABCD)$ nên cắt nhau tại $O$, không thể chéo nhau!" }
        ],
        remedialProblem: {
          title: "Bài tập khắc phục: Phương pháp tìm giao tuyến 2 mặt phẳng",
          question: "Để tìm giao tuyến của hai mặt phẳng phân biệt $(P)$ và $(Q)$, ta cần tìm tối thiểu bao nhiêu điểm chung phân biệt của chúng?",
          correctAnswer: "2 điểm chung phân biệt",
          tip: "Mẹo nhớ: Tìm 2 điểm chung phân biệt $A, B$, đường thẳng $AB$ chính là giao tuyến cần tìm."
        }
      },
      {
        id: "mc4",
        number: "Câu 4",
        level: "Vận dụng",
        question: "Cho tứ diện $ABCD$. Gọi $M$ là trung điểm cạnh $AB$, $N$ là trung điểm cạnh $AC$. Đường thẳng $MN$ cắt mặt phẳng $(BCD)$ tại điểm nào?",
        options: [
          { key: "A", text: "Cắt cạnh $BC$ tại trung điểm của $BC$.", isCorrect: false, errorTag: "ERR_PARALLEL_CUT", errorMsg: "Sai lầm hình học phẳng: Trong tam giác $ABC$, $MN$ là đường trung bình nên $MN \\parallel BC$. Hai đường thẳng song song thì không bao giờ cắt nhau!" },
          { key: "B", text: "Đường thẳng $MN$ không cắt mặt phẳng $(BCD)$ vì $MN \\parallel (BCD)$.", isCorrect: true, errorTag: null, errorMsg: "Rất chuẩn xác! Vì $MN \\parallel BC$ và $BC \\subset (BCD)$ trong khi $MN \\not\\subset (BCD)$ nên $MN$ song song với $(BCD)$, do đó không có điểm chung với $(BCD)$." },
          { key: "C", text: "Cắt tại trọng tâm tam giác $BCD$.", isCorrect: false, errorTag: "ERR_RANDOM_POINT", errorMsg: "Trọng tâm tam giác $BCD$ nằm trong tam giác $BCD$, đường thẳng $MN$ nằm phía trên không đi qua điểm này." },
          { key: "D", text: "Cắt cạnh $CD$ tại trung điểm của $CD$.", isCorrect: false, errorTag: "ERR_SKEW_INTERSECT", errorMsg: "Sai lầm: $MN \\subset (ABC)$ và $CD$ là cạnh đối chéo nhau với $AB$, chúng không đồng phẳng nên không cắt nhau." }
        ],
        remedialProblem: {
          title: "Bài tập khắc phục: Giao điểm đường thẳng và mặt phẳng",
          question: "Cho tứ diện $ABCD$. Lấy $M \\in AB, N \\in AC$ sao cho $AM = 2MB, AN = NC$. Đường thẳng $MN$ có cắt cạnh đáy $BC$ không?",
          correctAnswer: "Có cắt, vì $\\frac{AM}{MB} = 2 \\ne \\frac{AN}{NC} = 1$ nên $MN$ không song song $BC$",
          tip: "Mẹo nhớ: Muốn $MN$ cắt $BC$ trong $\\triangle ABC$, tỉ số trên hai cạnh phải khác nhau (định lý Thalès đảo)."
        }
      },
      {
        id: "mc5",
        number: "Câu 5",
        level: "Vận dụng",
        question: "Thiết diện của một hình chóp tứ giác $S.ABCD$ khi cắt bởi một mặt phẳng bất kì có thể là một đa giác có tối đa bao nhiêu cạnh?",
        options: [
          { key: "A", text: "3 cạnh (Tam giác).", isCorrect: false, errorTag: "ERR_NOT_MAX", errorMsg: "Tam giác là thiết diện có thể có, nhưng chưa phải là số cạnh tối đa." },
          { key: "B", text: "4 cạnh (Tứ giác).", isCorrect: false, errorTag: "ERR_NOT_MAX", errorMsg: "Tứ giác rất phổ biến nhưng vẫn chưa phải số cạnh tối đa của hình chóp tứ giác." },
          { key: "C", text: "5 cạnh (Ngũ giác).", isCorrect: true, errorTag: null, errorMsg: "Chính xác tuyệt đối! Hình chóp tứ giác có tổng cộng 5 mặt (4 mặt bên + 1 mặt đáy). Mỗi mặt phẳng cắt một mặt của hình chóp tối đa tại 1 đoạn giao tuyến, do đó thiết diện có tối đa 5 cạnh." },
          { key: "D", text: "6 cạnh (Lục giác).", isCorrect: false, errorTag: "ERR_EXCEED_FACES", errorMsg: "Sai lầm: Hình chóp tứ giác chỉ có 5 mặt, mặt phẳng cắt không thể tạo ra 6 đoạn giao tuyến trên 5 mặt được!" }
        ],
        remedialProblem: {
          title: "Bài tập khắc phục: Số cạnh tối đa của thiết diện",
          question: "Thiết diện của hình chóp tam giác (tứ diện) khi cắt bởi một mặt phẳng có thể có tối đa bao nhiêu cạnh?",
          correctAnswer: "4 cạnh (tứ diện có 4 mặt nên tối đa là tứ giác)",
          tip: "Mẹo nhớ: Số cạnh tối đa của thiết diện $\\le$ Số mặt của hình đa diện."
        }
      }
    ],

    // PHẦN II: 3 CÂU ĐÚNG / SAI
    trueFalse: [
      {
        id: "tf1",
        number: "Câu 6",
        scenario: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành tâm $O$. Gọi $M$ là trung điểm của cạnh bên $SC$. Xét tính Đúng hoặc Sai của các khẳng định sau:",
        items: [
          { key: "a", text: "Giao tuyến của hai mặt phẳng $(SAC)$ và $(SBD)$ là đường thẳng $SO$.", isCorrect: true, explanation: "Đúng. $S$ là điểm chung thứ nhất; $O = AC \\cap BD$ là điểm chung thứ hai trong mặt đáy $(ABCD)$." },
          { key: "b", text: "Đường thẳng $AM$ cắt đường thẳng $SO$ tại trọng tâm tam giác $SAC$.", isCorrect: true, explanation: "Đúng. Trong $\\triangle SAC$, $SO$ và $AM$ là hai đường trung tuyến nên chúng cắt nhau tại trọng tâm $G$ của $\\triangle SAC$." },
          { key: "c", text: "Giao điểm của đường thẳng $AM$ với mặt phẳng $(SBD)$ chính là điểm $O$.", isCorrect: false, explanation: "Sai lầm: $O$ nằm trên đáy $ABCD$, còn $AM$ là đoạn nối đỉnh $A$ với trung điểm cạnh bên $SC$. Giao điểm của $AM$ với $(SBD)$ là giao điểm $I = AM \\cap SO$ (trọng tâm $\\triangle SAC$), không phải $O$!" },
          { key: "d", text: "Hai đường thẳng $AM$ và $BD$ cắt nhau trong không gian.", isCorrect: false, explanation: "Sai lầm: $AM \\subset (SAC)$ và $BD \\subset (ABCD)$. Nếu $AM$ cắt $BD$ thì giao điểm phải thuộc $(SAC) \\cap (ABCD) = AC$. Nhưng trong $\\triangle SAC$, $AM$ chỉ cắt $AC$ tại $A$, mà $A \\notin BD$. Vậy $AM$ và $BD$ chéo nhau." }
        ]
      },
      {
        id: "tf2",
        number: "Câu 7",
        scenario: "Cho tứ diện $ABCD$. Lấy điểm $M$ trên cạnh $AB$, $N$ trên cạnh $AC$ sao cho đường thẳng $MN$ cắt đường thẳng $BC$ tại điểm $E$ ($E$ nằm ngoài đoạn $BC$). Điểm $P$ nằm bên trong tam giác $BCD$. Xét tính Đúng hoặc Sai của các khẳng định sau:",
        items: [
          { key: "a", text: "Điểm $E$ thuộc cả hai mặt phẳng $(DMN)$ và $(BCD)$.", isCorrect: true, explanation: "Đúng. $E \\in MN \\subset (DMN)$ và $E \\in BC \\subset (BCD)$." },
          { key: "b", text: "Giao tuyến của mặt phẳng $(DMN)$ và mặt phẳng $(BCD)$ là đường thẳng $DE$.", isCorrect: true, explanation: "Đúng. Điểm $D$ là điểm chung thứ nhất, điểm $E$ là điểm chung thứ hai, suy ra giao tuyến là $DE$." },
          { key: "c", text: "Đường thẳng $MN$ và đường thẳng $CD$ cắt nhau tại điểm $E$.", isCorrect: false, explanation: "Sai lầm: $E$ là giao điểm của $MN$ và $BC$. $CD$ và $MN$ là hai đường thẳng chéo nhau trong không gian, không cắt nhau." },
          { key: "d", text: "Giao điểm của đường thẳng $DP$ với mặt phẳng $(ABC)$ là một điểm thuộc đường thẳng $BC$.", isCorrect: false, explanation: "Sai lầm: $P$ nằm trong miền trong $\\triangle BCD$, nên tia $DP$ cắt cạnh $BC$ tại điểm $K$. Do đó giao điểm của $DP$ với cạnh đáy $BC$ (thuộc $(ABC)$) là điểm $K$, nhưng nếu nói $DP$ luôn cắt $(ABC)$ tại $K$ thì $D$ không thuộc $(ABC)$." }
        ]
      },
      {
        id: "tf3",
        number: "Câu 8",
        scenario: "Xét các mệnh đề cơ bản về quan hệ liên thuộc và vị trí tương đối trong không gian. Đánh giá tính Đúng hoặc Sai của mỗi khẳng định:",
        items: [
          { key: "a", text: "Có duy nhất một mặt phẳng đi qua ba điểm phân biệt cho trước.", isCorrect: false, explanation: "Sai. Thiếu điều kiện quan trọng: 'Ba điểm phân biệt KHÔNG THẲNG HÀNG'. Nếu thẳng hàng thì có vô số mặt phẳng." },
          { key: "b", text: "Nếu một đường thẳng $d$ có 2 điểm phân biệt thuộc mặt phẳng $(P)$ thì mọi điểm của $d$ đều thuộc $(P)$.", isCorrect: true, explanation: "Đúng. Đây là tính chất thừa nhận 3 trong SGK Hình học không gian 11." },
          { key: "c", text: "Hai mặt phẳng phân biệt có một điểm chung thì chúng có chung một đường thẳng duy nhất đi qua điểm đó.", isCorrect: true, explanation: "Đúng. Đây là tiên đề giao tuyến của hai mặt phẳng cắt nhau." },
          { key: "d", text: "Nếu hai đường thẳng không có điểm chung thì chúng chắc chắn song song với nhau.", isCorrect: false, explanation: "Sai lầm kinh điển: Trong không gian, hai đường thẳng không có điểm chung có thể song song (khi đồng phẳng) hoặc CHÉO NHAU (khi không đồng phẳng)." }
        ]
      }
    ],

    // PHẦN III: 4 CÂU TRẢ LỜI NGẮN
    shortAnswer: [
      {
        id: "sa1",
        number: "Câu 9",
        question: "Trong không gian cho 5 điểm phân biệt, trong đó không có 4 điểm nào đồng phẳng. Hỏi có thể xác định được bao nhiêu mặt phẳng phân biệt đi qua 3 điểm trong số 5 điểm đã cho?",
        correctAnswer: "10",
        acceptedAnswers: ["10", "10 mặt phẳng", "mười"],
        explanation: "Mỗi bộ 3 điểm không thẳng hàng xác định 1 mặt phẳng duy nhất. Số mặt phẳng tạo thành là tổ hợp chập 3 của 5 điểm: $C_5^3 = \\frac{5 \\cdot 4 \\cdot 3}{3 \\cdot 2 \\cdot 1} = 10$.",
        tip: "Công thức tổng quát: Với $n$ điểm không có 4 điểm nào đồng phẳng, số mặt phẳng là $C_n^3$."
      },
      {
        id: "sa2",
        number: "Câu 10",
        question: "Cho hình chóp ngũ giác $S.ABCDE$. Hỏi hình chóp này có tất cả bao nhiêu cạnh (gồm cả cạnh bên và cạnh đáy)?",
        correctAnswer: "10",
        acceptedAnswers: ["10", "10 cạnh", "mười"],
        explanation: "Hình chóp ngũ giác có 5 cạnh đáy ($AB, BC, CD, DE, EA$) và 5 cạnh bên nối từ đỉnh $S$ ($SA, SB, SC, SD, SE$). Tổng số cạnh là $5 + 5 = 10$.",
        tip: "Công thức: Hình chóp $n$-giác có $2n$ cạnh, $n+1$ đỉnh và $n+1$ mặt."
      },
      {
        id: "sa3",
        number: "Câu 11",
        question: "Cho tứ diện $ABCD$. Hỏi có tất cả bao nhiêu cặp cạnh đối diện chéo nhau từng đôi một?",
        correctAnswer: "3",
        acceptedAnswers: ["3", "3 cặp", "ba"],
        explanation: "Tứ diện $ABCD$ có 6 cạnh, tạo thành đúng 3 cặp cạnh đối chéo nhau: $(AB, CD)$, $(AC, BD)$, $(AD, BC)$.",
        tip: "Ghi nhớ: Tứ diện có đúng 3 cặp cạnh đối diện không có điểm chung và chéo nhau."
      },
      {
        id: "sa4",
        number: "Câu 12",
        question: "Khi cắt một khối tứ diện bởi một mặt phẳng bất kì, thiết diện thu được có thể có số cạnh tối đa là bao nhiêu?",
        correctAnswer: "4",
        acceptedAnswers: ["4", "4 cạnh", "bốn", "tứ giác"],
        explanation: "Tứ diện chỉ có 4 mặt tam giác. Mặt phẳng cắt mỗi mặt nhiều nhất tại 1 đoạn giao tuyến, nên số cạnh của thiết diện không thể vượt quá 4. Thiết diện tối đa là một tứ giác.",
        tip: "Số cạnh thiết diện tối đa luôn bằng số mặt của khối đa diện (Tứ diện có 4 mặt $\\implies$ tối đa 4 cạnh)."
      }
    ],

    // PHẦN IV: 3 CÂU TỰ LUẬN
    essay: [
      {
        id: "es1",
        number: "Câu 13 (Tự luận 1)",
        title: "Giao tuyến & Giao điểm trong hình chóp $S.ABCD$",
        question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành tâm $O$. Gọi $M$ là trung điểm của cạnh bên $SC$.\n1) Tìm giao tuyến của hai mặt phẳng $(SAC)$ và $(SBD)$.\n2) Tìm giao điểm $I$ của đường thẳng $AM$ với mặt phẳng $(SBD)$. Tính tỉ số $\\frac{AI}{AM}$.",
        maxPoints: 10.0,
        sampleSolution: `1) Tìm giao tuyến của (SAC) và (SBD):
- Ta có S là điểm chung thứ nhất của hai mặt phẳng: S ∈ (SAC) ∩ (SBD).
- Trong mặt phẳng đáy (ABCD), gọi O là giao điểm của hai đường chéo AC và BD.
  Vì O ∈ AC ⊂ (SAC) và O ∈ BD ⊂ (SBD) nên O là điểm chung thứ hai.
- Vậy giao tuyến của hai mặt phẳng là đường thẳng SO: (SAC) ∩ (SBD) = SO.

2) Tìm giao điểm I của AM và (SBD):
- Chọn mặt phẳng phụ chứa AM là (SAC).
- Giao tuyến của mặt phẳng phụ (SAC) với mặt phẳng (SBD) là đường thẳng SO (theo ý 1).
- Trong mặt phẳng (SAC), gọi I là giao điểm của AM và SO:
  + I ∈ AM
  + I ∈ SO ⊂ (SBD) => I ∈ (SBD)
  Vậy I là giao điểm của đường thẳng AM với mặt phẳng (SBD).
- Tính tỉ số: Trong tam giác SAC, SO là trung tuyến ứng với cạnh AC (do OA = OC), AM là trung tuyến ứng với SC (do MS = MC).
  Do đó giao điểm I của hai đường trung tuyến chính là trọng tâm của tam giác SAC.
  Suy ra: AI / AM = 2/3.`,
        criteria: [
          { id: "c1", step: "Bước 1", desc: "Xác định điểm chung S và điểm chung O = AC ∩ BD ở đáy", points: 2.5 },
          { id: "c2", step: "Bước 2", desc: "Kết luận giao tuyến (SAC) ∩ (SBD) = SO", points: 2.5 },
          { id: "c3", step: "Bước 3", desc: "Chọn mặt phẳng phụ (SAC) và xác định giao điểm I = AM ∩ SO", points: 2.5 },
          { id: "c4", step: "Bước 4", desc: "Chứng minh I là trọng tâm tam giác SAC và suy ra tỉ số AI/AM = 2/3", points: 2.5 }
        ]
      },
      {
        id: "es2",
        number: "Câu 14 (Tự luận 2)",
        title: "Chứng minh 3 điểm thẳng hàng & Giao tuyến kéo dài",
        question: "Cho tứ diện $ABCD$. Trên các cạnh $AB, AC$ lần lượt lấy các điểm $M, N$ sao cho $MN$ cắt $BC$ tại điểm $E$. Trên cạnh $BD$ lấy điểm $P$ ($P$ không trùng $B, D$).\n1) Tìm giao tuyến của hai mặt phẳng $(MNP)$ và $(BCD)$.\n2) Tìm giao điểm $Q$ của đường thẳng $CD$ với mặt phẳng $(MNP)$.",
        maxPoints: 10.0,
        sampleSolution: `1) Tìm giao tuyến (MNP) ∩ (BCD):
- Điểm P nằm trên cạnh BD nên P ∈ (MNP) và P ∈ (BCD) => P là điểm chung thứ nhất.
- Trong mặt phẳng (ABC), đường thẳng MN cắt đường thẳng BC tại E.
  Vì E ∈ MN ⊂ (MNP) và E ∈ BC ⊂ (BCD) nên E là điểm chung thứ hai.
- Vậy giao tuyến của hai mặt phẳng (MNP) và (BCD) là đường thẳng PE:
  (MNP) ∩ (BCD) = PE.

2) Tìm giao điểm Q của CD với (MNP):
- Xét mặt phẳng đáy (BCD): Cả hai đường thẳng CD và PE đều nằm trong mặt phẳng (BCD).
- Giả sử đường thẳng PE cắt đường thẳng CD tại điểm Q (khi PE không song song CD):
  + Q ∈ CD
  + Q ∈ PE mà PE ⊂ (MNP) nên Q ∈ (MNP).
- Vậy Q chính là giao điểm của đường thẳng CD với mặt phẳng (MNP).`,
        criteria: [
          { id: "c1", step: "Bước 1", desc: "Chỉ ra điểm chung thứ nhất P ∈ BD", points: 2.5 },
          { id: "c2", step: "Bước 2", desc: "Chỉ ra điểm chung thứ hai E = MN ∩ BC trong mp(ABC)", points: 2.5 },
          { id: "c3", step: "Bước 3", desc: "Kết luận giao tuyến (MNP) ∩ (BCD) = PE", points: 2.5 },
          { id: "c4", step: "Bước 4", desc: "Trong mp(BCD), tìm giao điểm Q = PE ∩ CD và kết luận Q = CD ∩ (MNP)", points: 2.5 }
        ]
      },
      {
        id: "es3",
        number: "Câu 15 (Tự luận 3)",
        title: "Xác định thiết diện của hình chóp tứ giác",
        question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành. Gọi $M$ là trung điểm của cạnh $SB$, $G$ là trọng tâm của tam giác $SAD$. Xác định thiết diện của hình chóp $S.ABCD$ khi cắt bởi mặt phẳng $(AMG)$.",
        maxPoints: 10.0,
        sampleSolution: `1) Tìm các đoạn giao tuyến ban đầu:
- Điểm A và M đều thuộc mp(AMG).
  Do A ∈ (SAB) và M ∈ SB ⊂ (SAB) nên giao tuyến trên mặt bên (SAB) là đoạn thẳng AM.
- Điểm A và G đều thuộc mp(AMG) và cùng thuộc mp(SAD) nên giao tuyến trên mặt bên (SAD) là đường thẳng AG.

2) Mở rộng mặt phẳng và tìm các giao tuyến tiếp theo:
- Gọi N là trung điểm của cạnh AD. Vì G là trọng tâm tam giác SAD nên đường thẳng AG đi qua N (hoặc kéo dài AG cắt SD tại P).
  Cụ thể trong tam giác SAD, đường thẳng AG cắt cạnh SD tại điểm P (với P là điểm thỏa mãn SP/SD = 2/3 nếu dùng tính chất trọng tâm).
  Khi đó đoạn giao tuyến trên mặt bên (SAD) là AP.
- Trong mặt phẳng (SBD), nối M với P cắt SO hoặc giao tuyến với mặt phẳng đáy.
- Nối các đoạn giao tuyến liên tiếp ta được thiết diện là một tứ giác (hoặc tam giác tùy vị trí).`,
        criteria: [
          { id: "c1", step: "Bước 1", desc: "Xác định đoạn giao tuyến đầu tiên AM trên mặt (SAB)", points: 2.5 },
          { id: "c2", step: "Bước 2", desc: "Kéo dài AG trong mp(SAD) cắt SD tại điểm P", points: 2.5 },
          { id: "c3", step: "Bước 3", desc: "Tìm giao tuyến của mp(AMP) với mặt đáy hoặc các mặt còn lại", points: 2.5 },
          { id: "c4", step: "Bước 4", desc: "Nối các đoạn giao tuyến khép kín và kết luận hình dạng đa giác thiết diện", points: 2.5 }
        ]
      }
    ]
  },

  // ========================================================================
  // BÀI 11: HAI ĐƯỜNG THẲNG SONG SONG
  // ========================================================================
  "g11-c4-l11": {
    lessonId: "g11-c4-l11",
    title: "Bài 11: Hai đường thẳng song song",
    chapterTitle: "Chương IV: Quan hệ song song trong không gian",
    grade: 11,
    summary: "Bộ 15 câu hỏi đánh giá chẩn đoán: 4 vị trí tương đối của hai đường thẳng, định nghĩa hai đường thẳng chéo nhau, định lý 3 giao tuyến, tính chất bắc cầu và thiết diện song song.",
    
    multipleChoice: [
      {
        id: "mc1",
        number: "Câu 1",
        level: "Nhận biết",
        question: "Trong không gian, hai đường thẳng được gọi là song song với nhau khi và chỉ khi:",
        options: [
          { key: "A", text: "Chúng không có điểm chung.", isCorrect: false, errorTag: "ERR_SKEW_CONFUSION", errorMsg: "Sai lầm kinh điển: Nếu hai đường thẳng không có điểm chung và KHÔNG ĐỒNG PHẲNG thì chúng chéo nhau chứ không song song!" },
          { key: "B", text: "Chúng cùng nằm trong một mặt phẳng và không có điểm chung.", isCorrect: true, errorTag: null, errorMsg: "Rất chính xác! Định nghĩa hai đường thẳng song song trong không gian bắt buộc phải thỏa mãn 2 điều kiện: (1) Cùng nằm trong 1 mặt phẳng; (2) Không có điểm chung." },
          { key: "C", text: "Chúng không cắt nhau.", isCorrect: false, errorTag: "ERR_INCOMPLETE", errorMsg: "Không cắt nhau thì có thể chéo nhau hoặc song song, chưa đủ khẳng định song song." },
          { key: "D", text: "Chúng cùng song song với một mặt phẳng.", isCorrect: false, errorTag: "ERR_FALSE_THEOREM", errorMsg: "Hai đường thẳng cùng song song với một mặt phẳng có thể cắt nhau hoặc chéo nhau!" }
        ],
        remedialProblem: {
          title: "Bài tập củng cố: Định nghĩa đường chéo nhau",
          question: "Thế nào là hai đường thẳng chéo nhau trong không gian?",
          correctAnswer: "Hai đường thẳng không cùng nằm trong bất kì mặt phẳng nào",
          tip: "Mẹo nhớ: Không đồng phẳng = Chéo nhau; Đồng phẳng + không điểm chung = Song song."
        }
      },
      {
        id: "mc2",
        number: "Câu 2",
        level: "Thông hiểu",
        question: "Cho ba mặt phẳng đôi một cắt nhau theo ba giao tuyến phân biệt $a, b, c$. Khẳng định nào sau đây là ĐÚNG?",
        options: [
          { key: "A", text: "Ba giao tuyến $a, b, c$ luôn đôi một song song với nhau.", isCorrect: false, errorTag: "ERR_PARTIAL_TRUTH", errorMsg: "Thiếu trường hợp đồng quy! Định lý 3 giao tuyến nêu rõ: Ba giao tuyến hoặc đôi một song song, hoặc đồng quy." },
          { key: "B", text: "Ba giao tuyến $a, b, c$ hoặc đôi một song song, hoặc đồng quy tại một điểm.", isCorrect: true, errorTag: null, errorMsg: "Chính xác tuyệt đối! Đây là nội dung trọng tâm của Định lý về giao tuyến của ba mặt phẳng." },
          { key: "C", text: "Ba giao tuyến $a, b, c$ luôn đồng quy tại một điểm.", isCorrect: false, errorTag: "ERR_PARTIAL_TRUTH", errorMsg: "Chưa đủ, ba giao tuyến hoàn toàn có thể đôi một song song (ví dụ hình lăng trụ tam giác)." },
          { key: "D", text: "Ba giao tuyến $a, b, c$ cùng nằm trong một mặt phẳng.", isCorrect: false, errorTag: "ERR_IMPOSSIBLE", errorMsg: "Sai, ba giao tuyến nằm trên ba mặt phẳng đôi một cắt nhau nên không thể cùng đồng phẳng." }
        ],
        remedialProblem: {
          title: "Bài tập khắc phục: Định lý 3 giao tuyến",
          question: "Trong hình lăng trụ tam giác $ABC.A'B'C'$, ba mặt bên cắt nhau theo 3 cạnh bên $AA', BB', CC'$. Ba giao tuyến này có quan hệ gì?",
          correctAnswer: "Đôi một song song với nhau ($AA' \\parallel BB' \\parallel CC'$)",
          tip: "Mẹo nhớ: Nếu 2 giao tuyến cắt nhau thì giao tuyến thứ 3 phải đi qua giao điểm đó (đồng quy)."
        }
      },
      {
        id: "mc3",
        number: "Câu 3",
        level: "Thông hiểu",
        question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành. Giao tuyến của hai mặt phẳng $(SAB)$ và $(SCD)$ là:",
        options: [
          { key: "A", text: "Đường thẳng đi qua $S$ và song song với $AB, CD$.", isCorrect: true, errorTag: null, errorMsg: "Rất xuất sắc! Áp dụng định lý giao tuyến song song: Hai mặt phẳng $(SAB)$ và $(SCD)$ lần lượt chứa hai đường thẳng song song $AB \\parallel CD$, có điểm chung $S$, nên giao tuyến là đường thẳng $d$ đi qua $S$ và $d \\parallel AB \\parallel CD$." },
          { key: "B", text: "Đường thẳng $SO$ với $O = AC \\cap BD$.", isCorrect: false, errorTag: "ERR_CONFUSE_DIAG", errorMsg: "$SO$ là giao tuyến của $(SAC)$ và $(SBD)$, không phải của $(SAB)$ và $(SCD)$." },
          { key: "C", text: "Đường thẳng đi qua $S$ và cắt cạnh $AB$.", isCorrect: false, errorTag: "ERR_INTERSECT_IMPOSSIBLE", errorMsg: "Giao tuyến song song với $AB$ nên không thể cắt $AB$!" },
          { key: "D", text: "Đoạn thẳng nối $S$ với trung điểm cạnh $AD$.", isCorrect: false, errorTag: "ERR_RANDOM", errorMsg: "Khẳng định này hoàn toàn sai." }
        ],
        remedialProblem: {
          title: "Bài tập khắc phục: Giao tuyến đi qua đỉnh song song đáy",
          question: "Cho hình chóp $S.ABCD$ có đáy là hình bình hành. Giao tuyến của $(SAD)$ và $(SBC)$ là đường thẳng như thế nào?",
          correctAnswer: "Đường thẳng qua $S$ và song song với $AD, BC$",
          tip: "Mẹo nhớ: Hai mặt phẳng chứa 2 đường thẳng song song $\\implies$ giao tuyến (nếu có) phải song song với chúng."
        }
      },
      {
        id: "mc4",
        number: "Câu 4",
        level: "Vận dụng",
        question: "Cho tứ diện $ABCD$. Gọi $I, J$ lần lượt là trọng tâm của hai tam giác $ABC$ và $ABD$. Khẳng định nào sau đây là ĐÚNG?",
        options: [
          { key: "A", text: "$IJ \\parallel CD$ và $IJ = \\frac{1}{3} CD$.", isCorrect: true, errorTag: null, errorMsg: "Chính xác! Gọi $M$ là trung điểm $AB$. Trong $\\triangle MCD$, ta có $\\frac{MI}{MC} = \\frac{MJ}{MD} = \\frac{1}{3}$. Theo định lý Thalès đảo: $IJ \\parallel CD$ và $IJ = \\frac{1}{3} CD$." },
          { key: "B", text: "$IJ \\parallel AB$ và $IJ = \\frac{2}{3} AB$.", isCorrect: false, errorTag: "ERR_WRONG_BASE", errorMsg: "Sai lầm: $I, J$ nằm trên hai đường trung tuyến xuất phát từ $C, D$ xuống cùng trung điểm $M$ của $AB$, nên $IJ$ song song cạnh đối $CD$, không song song $AB$." },
          { key: "C", text: "$IJ$ cắt $CD$.", isCorrect: false, errorTag: "ERR_PARALLEL_CUT", errorMsg: "Theo định lý Thalès tỉ số bằng nhau nên $IJ$ song song $CD$, không thể cắt." },
          { key: "D", text: "$IJ$ và $CD$ chéo nhau.", isCorrect: false, errorTag: "ERR_SKEW_ERROR", errorMsg: "$I, J$ cùng thuộc tam giác $MCD$ nên $IJ$ và $CD$ đồng phẳng, do đó không chéo nhau." }
        ],
        remedialProblem: {
          title: "Bài tập khắc phục: Định lý Thalès đoạn thẳng tỉ lệ",
          question: "Trong tam giác $MCD$, lấy $I \\in MC, J \\in MD$ sao cho $\\frac{MI}{MC} = \\frac{MJ}{MD} = k$. Khi đó $IJ$ có quan hệ gì với $CD$?",
          correctAnswer: "$IJ \\parallel CD$ và $IJ = k \\cdot CD$",
          tip: "Mẹo nhớ: Trọng tâm chia trung tuyến tỉ lệ 1/3 (tính từ đáy) và 2/3 (tính từ đỉnh)."
        }
      },
      {
        id: "mc5",
        number: "Câu 5",
        level: "Vận dụng",
        question: "Cho tứ diện đều $ABCD$ có cạnh bằng $a$. Mặt phẳng $(\\alpha)$ song song với cả hai cạnh đối $AB$ và $CD$, cắt tứ diện theo một thiết diện. Thiết diện đó luôn là hình gì?",
        options: [
          { key: "A", text: "Hình bình hành.", isCorrect: false, errorTag: "ERR_INCOMPLETE_SPEC", errorMsg: "Đúng là hình bình hành, nhưng do tứ diện đều có $AB \\perp CD$ nên thiết diện còn đặc biệt hơn là Hình chữ nhật!" },
          { key: "B", text: "Hình chữ nhật.", isCorrect: true, errorTag: null, errorMsg: "Rất xuất sắc! Thiết diện có các cạnh lần lượt song song với $AB$ và $CD$ nên là hình bình hành. Mặt khác trong tứ diện đều hai cạnh đối $AB \\perp CD$, suy ra hai cạnh kề của thiết diện vuông góc nhau. Vậy thiết diện là hình chữ nhật." },
          { key: "C", text: "Hình thang cân.", isCorrect: false, errorTag: "ERR_TRAPEZOID", errorMsg: "Thiết diện có 2 cặp cạnh đối diện song song nên là hình bình hành / chữ nhật, không phải hình thang." },
          { key: "D", text: "Tam giác đều.", isCorrect: false, errorTag: "ERR_TRIANGLE", errorMsg: "Mặt phẳng cắt 4 mặt của tứ diện tạo thành tứ giác có 4 cạnh, không thể là tam giác." }
        ],
        remedialProblem: {
          title: "Bài tập khắc phục: Góc giữa 2 cạnh đối tứ diện đều",
          question: "Trong tứ diện đều $ABCD$, góc giữa hai đường thẳng $AB$ và $CD$ bằng bao nhiêu độ?",
          correctAnswer: "$90^\\circ$ (hai cạnh đối diện luôn vuông góc)",
          tip: "Mẹo nhớ: Cạnh bên song song cạnh này, cạnh kề song song cạnh kia $\\implies$ góc giữa 2 cạnh thiết diện bằng góc giữa $AB$ và $CD$."
        }
      }
    ],

    trueFalse: [
      {
        id: "tf1",
        number: "Câu 6",
        scenario: "Cho tứ diện $ABCD$. Gọi $M, N, P, Q$ lần lượt là trung điểm của các cạnh $AB, BC, CD, DA$. Đánh giá tính Đúng hoặc Sai của các mệnh đề sau:",
        items: [
          { key: "a", text: "Đoạn thẳng $MN$ song song với đoạn thẳng $PQ$ và $MN = PQ = \\frac{1}{2} AC$.", isCorrect: true, explanation: "Đúng. $MN$ là đường trung bình $\\triangle ABC \\implies MN \\parallel AC, MN = \\frac{1}{2}AC$. $PQ$ là đường trung bình $\\triangle DAC \\implies PQ \\parallel AC, PQ = \\frac{1}{2}AC$." },
          { key: "b", text: "Tứ giác $MNPQ$ luôn là một hình bình hành.", isCorrect: true, explanation: "Đúng. Tứ giác có một cặp cạnh đối $MN$ và $PQ$ vừa song song vừa bằng nhau nên luôn là hình bình hành." },
          { key: "c", text: "Nếu $AC = BD$ thì tứ giác $MNPQ$ là hình vuông.", isCorrect: false, explanation: "Sai lầm: Nếu $AC = BD$ thì $MN = MQ = \\frac{1}{2}AC = \\frac{1}{2}BD$, khi đó $MNPQ$ là HÌNH THOI (hình bình hành có 2 cạnh kề bằng nhau), chưa chắc có góc vuông để là hình vuông!" },
          { key: "d", text: "Nếu $AC \\perp BD$ thì tứ giác $MNPQ$ là hình chữ nhật.", isCorrect: true, explanation: "Đúng. Vì $MN \\parallel AC$ và $MQ \\parallel BD$, mà $AC \\perp BD$ nên $MN \\perp MQ$. Hình bình hành có một góc vuông là hình chữ nhật." }
        ]
      },
      {
        id: "tf2",
        number: "Câu 7",
        scenario: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình thang với đáy lớn $AB = 2CD$. Gọi $M$ là trung điểm cạnh bên $SA$. Xét tính Đúng hoặc Sai của các khẳng định:",
        items: [
          { key: "a", text: "Giao tuyến của hai mặt phẳng $(SAB)$ và $(SCD)$ là đường thẳng đi qua $S$ và song song với $CD$.", isCorrect: true, explanation: "Đúng. Do $AB \\parallel CD$, áp dụng định lý giao tuyến của hai mặt phẳng chứa hai đường song song." },
          { key: "b", text: "Hai đường thẳng $SD$ và $BC$ là hai đường thẳng chéo nhau.", isCorrect: true, explanation: "Đúng. $SD$ và $BC$ không cùng nằm trong bất kì mặt phẳng nào." },
          { key: "c", text: "Mặt phẳng đi qua $M$ song song với $AB$ và $SD$ cắt hình chóp theo thiết diện là một tam giác.", isCorrect: false, explanation: "Sai. Mặt phẳng cắt các mặt $(SAB), (SAD), (SCD), (ABCD)$ tạo thành một hình thang." },
          { key: "d", text: "Gọi $O = AC \\cap BD$. Giao tuyến của $(SAC)$ và $(SBD)$ là đường thẳng $SO$.", isCorrect: true, explanation: "Đúng. $S$ và $O$ là hai điểm chung của $(SAC)$ và $(SBD)$." }
        ]
      },
      {
        id: "tf3",
        number: "Câu 8",
        scenario: "Xét các mệnh đề không gian về quan hệ song song của hai đường thẳng:",
        items: [
          { key: "a", text: "Trong không gian, qua một điểm nằm ngoài một đường thẳng cho trước, có một và chỉ một đường thẳng song song với đường thẳng đó.", isCorrect: true, explanation: "Đúng. Tiên đề Euclid trong không gian." },
          { key: "b", text: "Hai đường thẳng phân biệt cùng song song với một đường thẳng thứ ba thì song song với nhau.", isCorrect: true, explanation: "Đúng. Tính chất bắc cầu: $a \\parallel c$ và $b \\parallel c \\implies a \\parallel b$." },
          { key: "c", text: "Hai đường thẳng cùng vuông góc với một đường thẳng thứ ba thì song song với nhau.", isCorrect: false, explanation: "Sai lầm tai hại từ hình phẳng! Trong không gian, hai đường thẳng cùng vuông góc với đường thẳng thứ ba có thể cắt nhau hoặc chéo nhau (ví dụ 3 trục toạ độ $Ox, Oy, Oz$ đôi một vuông góc)." },
          { key: "d", text: "Nếu hai đường thẳng $a$ và $b$ chéo nhau thì tồn tại một mặt phẳng chứa cả $a$ và $b$.", isCorrect: false, explanation: "Sai. Định nghĩa hai đường chéo nhau là KHÔNG CÙNG NẰM TRONG BẤT KỲ MẶT PHẲNG NÀO." }
        ]
      }
    ],

    shortAnswer: [
      {
        id: "sa1",
        number: "Câu 9",
        question: "Tứ diện $ABCD$ có tất cả bao nhiêu cạnh?",
        correctAnswer: "6",
        acceptedAnswers: ["6", "6 cạnh", "sáu"],
        explanation: "Tứ diện có 6 cạnh: $AB, AC, AD, BC, BD, CD$.",
        tip: "Tứ diện = Hình chóp tam giác, có 3 cạnh đáy + 3 cạnh bên = 6 cạnh."
      },
      {
        id: "sa2",
        number: "Câu 10",
        question: "Cho hình chóp $S.ABCD$ có đáy là hình bình hành. Có bao nhiêu cặp đường thẳng chéo nhau giữa các cạnh bên và cạnh đáy của hình chóp?",
        correctAnswer: "8",
        acceptedAnswers: ["8", "8 cặp", "tám"],
        explanation: "Mỗi cạnh bên không có điểm chung với 2 cạnh đáy đối diện (ví dụ $SA$ chéo $BC$ và $CD$). Hình chóp có 4 cạnh bên, mỗi cạnh bên chéo 2 cạnh đáy $\\implies 4 \\times 2 = 8$ cặp.",
        tip: "Cạnh bên $SA$ chỉ cắt $AB, AD$ tại đáy, nên chéo với 2 cạnh còn lại là $BC$ và $CD$."
      },
      {
        id: "sa3",
        number: "Câu 11",
        question: "Cho tứ diện đều $ABCD$ có cạnh bằng $6\\text{ cm}$. Gọi $M, N$ lần lượt là trung điểm của $AB$ và $CD$. Độ dài đoạn thẳng $MN$ bằng bao nhiêu cm? (Làm tròn đến 1 chữ số thập phân hoặc viết dạng căn thức $3\\sqrt{2}$)",
        correctAnswer: "4.2",
        acceptedAnswers: ["4.2", "4,2", "3*sqrt(2)", "3sqrt(2)", "sqrt(18)"],
        explanation: "Tam giác $BCD$ đều cạnh 6 nên $BN = \\frac{6\\sqrt{3}}{2} = 3\\sqrt{3}$. Tam giác $ABN$ cân tại $N$ có $M$ là trung điểm $AB$ nên $MN \\perp AB$. Áp dụng Pythagore trong $\\triangle BMN$: $MN = \\sqrt{BN^2 - BM^2} = \\sqrt{(3\\sqrt{3})^2 - 3^2} = \\sqrt{27 - 9} = \\sqrt{18} = 3\\sqrt{2} \\approx 4.2\\text{ cm}$.",
        tip: "Đoạn thẳng nối trung điểm 2 cạnh đối của tứ diện đều gọi là đoạn vuông góc chung, có độ dài $\\frac{a\\sqrt{2}}{2}$."
      },
      {
        id: "sa4",
        number: "Câu 12",
        question: "Cho hình bình hành $ABCD$ và một điểm $S$ không thuộc mặt phẳng $(ABCD)$. Có bao nhiêu mặt phẳng phân biệt đi qua đỉnh $S$ và chứa ít nhất một cạnh của hình bình hành $ABCD$?",
        correctAnswer: "4",
        acceptedAnswers: ["4", "4 mặt phẳng", "bốn"],
        explanation: "Có 4 cạnh đáy là $AB, BC, CD, DA$. Nối điểm $S$ với từng cạnh ta được 4 mặt phẳng bên: $(SAB), (SBC), (SCD), (SDA)$.",
        tip: "Mỗi cạnh đáy kết hợp với đỉnh $S$ tạo thành một mặt bên phân biệt."
      }
    ],

    essay: [
      {
        id: "es1",
        number: "Câu 13 (Tự luận 1)",
        title: "Tìm giao tuyến song song trong hình chóp hình bình hành",
        question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành. Gọi $M$ là một điểm thuộc cạnh bên $SC$ ($M$ không trùng $S, C$). Mặt phẳng $(\\alpha)$ đi qua $M$ và song song với hai đường thẳng $AB$ và $SC$ (hoặc song song $AB$ và $AD$). Hãy xác định thiết diện của hình chóp cắt bởi mặt phẳng $(\\alpha)$ đi qua điểm $M$ trên cạnh $SB$ song song với $AB$ và $SC$.",
        maxPoints: 10.0,
        sampleSolution: `1) Tìm các giao tuyến của mp(α):
- Vì (α) // AB và chứa điểm M ∈ SB nên trong mặt phẳng (SAB), giao tuyến của (α) với (SAB) là đường thẳng đi qua M và song song với AB, cắt SA tại N:
  MN // AB (N ∈ SA).
- Vì (α) // SC và chứa điểm M ∈ SB nên trong mặt phẳng (SBC), giao tuyến của (α) với (SBC) là đường thẳng đi qua M và song song với SC, cắt BC tại P:
  MP // SC (P ∈ BC).
- Trong mặt phẳng đáy (ABCD), vì (α) // AB nên giao tuyến đi qua P và song song với AB // CD, cắt AD tại Q:
  PQ // AB // CD (Q ∈ AD).
- Trong mặt phẳng (SAD), nối N và Q. Do MN // PQ (cùng // AB) và MP // SC nên đoạn NQ // SC.

2) Kết luận thiết diện:
- Thiết diện cắt hình chóp là tứ giác MNPQ.
- Tứ giác MNPQ có cặp cạnh đối MN // PQ (cùng song song với AB) nên MNPQ là hình thang.`,
        criteria: [
          { id: "c1", step: "Bước 1", desc: "Xác định giao tuyến MN // AB trên mặt (SAB) với N ∈ SA", points: 2.5 },
          { id: "c2", step: "Bước 2", desc: "Xác định giao tuyến MP // SC trên mặt (SBC) với P ∈ BC", points: 2.5 },
          { id: "c3", step: "Bước 3", desc: "Xác định giao tuyến PQ // AB trên mặt đáy (ABCD) với Q ∈ AD", points: 2.5 },
          { id: "c4", step: "Bước 4", desc: "Nối NQ và kết luận thiết diện là hình thang MNPQ", points: 2.5 }
        ]
      },
      {
        id: "es2",
        number: "Câu 14 (Tự luận 2)",
        title: "Chứng minh đường thẳng song song theo định lý đường trung bình",
        question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình thang (đáy lớn $AB$, đáy nhỏ $CD$, $AB = 2CD$). Gọi $M, N$ lần lượt là trung điểm của các cạnh bên $SA$ và $SB$. Chứng minh tứ giác $MNCD$ là hình bình hành.",
        maxPoints: 10.0,
        sampleSolution: `1) Xét tam giác SAB:
- Ta có M là trung điểm của SA, N là trung điểm của SB.
- Suy ra MN là đường trung bình của tam giác SAB.
- Theo tính chất đường trung bình:
  MN // AB và MN = 1/2 AB.

2) Xét quan hệ với đáy nhỏ CD:
- Theo giả thiết đề bài, ABCD là hình thang có AB // CD và AB = 2CD, suy ra:
  CD // AB và CD = 1/2 AB.

3) Kết luận tứ giác MNCD:
- Từ hai điều trên, ta có:
  + MN // CD (vì cùng song song với AB)
  + MN = CD (vì cùng bằng 1/2 AB)
- Tứ giác MNCD có một cặp cạnh đối vừa song song vừa bằng nhau.
- Vậy tứ giác MNCD là hình bình hành.`,
        criteria: [
          { id: "c1", step: "Bước 1", desc: "Chứng minh MN là đường trung bình của tam giác SAB", points: 2.5 },
          { id: "c2", step: "Bước 2", desc: "Suy ra MN // AB và MN = 1/2 AB", points: 2.5 },
          { id: "c3", step: "Bước 3", desc: "Đối chiếu với giả thiết CD // AB và CD = 1/2 AB", points: 2.5 },
          { id: "c4", step: "Bước 4", desc: "Kết luận tứ giác MNCD có 1 cặp cạnh đối song song và bằng nhau nên là hình bình hành", points: 2.5 }
        ]
      },
      {
        id: "es3",
        number: "Câu 15 (Tự luận 3)",
        title: "Định lý 3 giao tuyến và chứng minh đồng quy",
        question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình thang có hai cạnh đáy $AD$ và $BC$ cắt nhau tại điểm $E$. Gọi $M$ là trung điểm của cạnh bên $SC$. Mặt phẳng $(ABM)$ cắt cạnh bên $SD$ tại điểm $N$.\n1) Chứng minh ba đường thẳng $AB, CD$ (hoặc $AD, BC$) và $MN$ đồng quy.\n2) Tìm giao điểm của đường thẳng $SO$ với mặt phẳng $(ABM)$, với $O = AC \\cap BD$.",
        maxPoints: 10.0,
        sampleSolution: `1) Chứng minh ba đường thẳng AD, BC và MN đồng quy:
- Xét ba mặt phẳng: (SAD), (SBC) và (ABM) [hay mặt phẳng đi qua M].
  + Giao tuyến của (SAD) và (SBC) là đường thẳng SE (vì E = AD ∩ BC và điểm chung S).
  + Giao tuyến của (SAD) và (ABM) là đường thẳng AN.
  + Giao tuyến của (SBC) và (ABM) là đường thẳng BM.
- Theo định lý về giao tuyến của ba mặt phẳng, ba đường thẳng SE, AN, BM hoặc song song hoặc đồng quy.
- Trong mặt phẳng đáy, AD và BC cắt nhau tại E nên ba đường thẳng này đồng quy tại một điểm.

2) Tìm giao điểm của SO với (ABM):
- Trong mặt phẳng (SAC), gọi I = AM ∩ SO.
- Vì I ∈ AM ⊂ (ABM) và I ∈ SO nên I chính là giao điểm của SO với mặt phẳng (ABM).`,
        criteria: [
          { id: "c1", step: "Bước 1", desc: "Xác định ba mặt phẳng liên quan và các giao tuyến tương ứng", points: 2.5 },
          { id: "c2", step: "Bước 2", desc: "Vận dụng định lý về ba giao tuyến để suy ra tính đồng quy", points: 2.5 },
          { id: "c3", step: "Bước 3", desc: "Xét mặt phẳng phụ (SAC) chứa SO", points: 2.5 },
          { id: "c4", step: "Bước 4", desc: "Tìm giao điểm I = AM ∩ SO và lập luận chính xác", points: 2.5 }
        ]
      }
    ]
  },

  // ========================================================================
  // BÀI 12: ĐƯỜNG THẲNG VÀ MẶT PHẲNG SONG SONG
  // ========================================================================
  "g11-c4-l12": {
    lessonId: "g11-c4-l12",
    title: "Bài 12: Đường thẳng và mặt phẳng song song",
    chapterTitle: "Chương IV: Quan hệ song song trong không gian",
    grade: 11,
    summary: "Bộ 15 câu hỏi đánh giá chẩn đoán: Vị trí tương đối giữa đường thẳng và mặt phẳng, định lý nhận biết d // (P), định lý giao tuyến song song và thiết diện qua một điểm song song đường thẳng.",
    
    multipleChoice: [
      {
        id: "mc1",
        number: "Câu 1",
        level: "Nhận biết",
        question: "Điều kiện cần và đủ để đường thẳng $d$ song song với mặt phẳng $(P)$ là:",
        options: [
          { key: "A", text: "$d$ và $(P)$ không có điểm chung.", isCorrect: true, errorTag: null, errorMsg: "Chính xác! Theo định nghĩa: Đường thẳng $d$ gọi là song song với mặt phẳng $(P)$ nếu chúng không có điểm chung nào ($d \\cap (P) = \\emptyset$)." },
          { key: "B", text: "$d$ song song với một đường thẳng $a$ bất kì.", isCorrect: false, errorTag: "ERR_MISSING_CONTAIN", errorMsg: "Thiếu điều kiện: Đường thẳng $a$ phải nằm trong mặt phẳng $(P)$ và $d$ không được nằm trong $(P)$!" },
          { key: "C", text: "$d$ có ít nhất một điểm chung với $(P)$.", isCorrect: false, errorTag: "ERR_OPPOSITE", errorMsg: "Có điểm chung thì $d$ cắt $(P)$ (1 điểm chung) hoặc $d \\subset (P)$ (vô số điểm chung)." },
          { key: "D", text: "$d$ song song với mọi đường thẳng nằm trong $(P)$.", isCorrect: false, errorTag: "ERR_IMPOSSIBLE_ALL", errorMsg: "Sai lầm nghiêm trọng: Trong mặt phẳng $(P)$ có vô số đường thẳng theo các phương khác nhau, $d$ không thể song song với mọi đường thẳng trong $(P)$ được!" }
        ],
        remedialProblem: {
          title: "Bài tập khắc phục: Định nghĩa và Dấu hiệu nhận biết",
          question: "Nêu dấu hiệu nhận biết đường thẳng $d$ song song với mặt phẳng $(P)$.",
          correctAnswer: "$d \\not\\subset (P)$ và $d \\parallel a \\subset (P) \\implies d \\parallel (P)$",
          tip: "Mẹo nhớ: Muốn chứng minh $d \\parallel (P)$, hãy tìm trong $(P)$ một đường thẳng $a$ song song với $d$."
        }
      },
      {
        id: "mc2",
        number: "Câu 2",
        level: "Thông hiểu",
        question: "Cho đường thẳng $d \\parallel (P)$. Khẳng định nào sau đây là ĐÚNG?",
        options: [
          { key: "A", text: "$d$ song song với mọi đường thẳng nằm trong mặt phẳng $(P)$.", isCorrect: false, errorTag: "ERR_FALLACY_ALL", errorMsg: "Ngộ nhận: $d$ chỉ song song với các đường thẳng trong $(P)$ cùng phương với $d$. Các đường thẳng khác trong $(P)$ sẽ chéo nhau với $d$!" },
          { key: "B", text: "Trong $(P)$ có duy nhất một đường thẳng song song với $d$.", isCorrect: false, errorTag: "ERR_UNIQUE_FALSE", errorMsg: "Sai, trong $(P)$ có VÔ SỐ đường thẳng song song với $d$ (chùm đường thẳng song song cùng phương)." },
          { key: "C", text: "Trong $(P)$ tồn tại vô số đường thẳng song song với $d$ và vô số đường thẳng chéo nhau với $d$.", isCorrect: true, errorTag: null, errorMsg: "Rất xuất sắc! Mọi đường thẳng trong $(P)$ song song với hình chiếu của $d$ đều song song với $d$, còn các đường thẳng cắt hình chiếu của $d$ đều chéo nhau với $d$." },
          { key: "D", text: "$d$ cắt ít nhất một đường thẳng nằm trong $(P)$.", isCorrect: false, errorTag: "ERR_NO_INTERSECT", errorMsg: "Vì $d \\parallel (P)$ nên $d$ không có điểm chung với $(P)$, do đó $d$ KHÔNG THỂ cắt bất kì đường thẳng nào nằm trong $(P)$." }
        ],
        remedialProblem: {
          title: "Bài tập khắc phục: Vị trí của đường thẳng trong mặt phẳng",
          question: "Nếu $d \\parallel (P)$ và đường thẳng $a \\subset (P)$ thì vị trí tương đối giữa $d$ và $a$ chỉ có thể là:",
          correctAnswer: "Song song hoặc Chéo nhau (không bao giờ cắt nhau)",
          tip: "Mẹo nhớ: $d \\parallel (P) \\implies d$ không bao giờ cắt bất kì đường thẳng nào trong $(P)$."
        }
      },
      {
        id: "mc3",
        number: "Câu 3",
        level: "Thông hiểu",
        question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành tâm $O$. Gọi $M$ là trung điểm cạnh bên $SC$. Đường thẳng $OM$ song song với mặt phẳng nào sau đây?",
        options: [
          { key: "A", text: "Mặt phẳng $(SAD)$.", isCorrect: true, errorTag: null, errorMsg: "Chính xác! Trong $\\triangle SAC$, $OM$ là đường trung bình nên $OM \\parallel SA$. Mà $SA \\subset (SAD)$ và $OM \\not\\subset (SAD)$, suy ra $OM \\parallel (SAD)$." },
          { key: "B", text: "Mặt phẳng $(SAC)$.", isCorrect: false, errorTag: "ERR_CONTAINED", errorMsg: "Sai: Cả $O$ và $M$ đều nằm trong mặt phẳng $(SAC)$ nên $OM \\subset (SAC)$, không thể song song!" },
          { key: "C", text: "Mặt phẳng $(ABCD)$.", isCorrect: false, errorTag: "ERR_INTERSECT_POINT", errorMsg: "Sai: Điểm $O \\in (ABCD)$ nên $OM$ cắt $(ABCD)$ tại $O$." },
          { key: "D", text: "Mặt phẳng $(SBC)$.", isCorrect: false, errorTag: "ERR_INTERSECT_POINT", errorMsg: "Sai: Điểm $M \\in SC \\subset (SBC)$ nên $OM$ cắt $(SBC)$ tại $M$." }
        ],
        remedialProblem: {
          title: "Bài tập khắc phục: Chứng minh đường thẳng song song mặt phẳng",
          question: "Trong hình chóp $S.ABCD$ đáy hình bình hành, đường thẳng $OM$ (M là trung điểm SC) còn song song với mặt phẳng nào ngoài $(SAD)$?",
          correctAnswer: "Mặt phẳng $(SAB)$ (hoặc xét tương tự với SB)",
          tip: "Mẹo nhớ: Tìm đường thẳng trong mặt phẳng đích song song với đường thẳng cần chứng minh."
        }
      },
      {
        id: "mc4",
        number: "Câu 4",
        level: "Vận dụng",
        question: "Cho tứ diện $ABCD$. Gọi $G$ là trọng tâm tam giác $ABD$. Lấy điểm $M$ trên cạnh $BC$ sao cho $BM = 2MC$. Đường thẳng $GM$ song song với mặt phẳng nào?",
        options: [
          { key: "A", text: "Mặt phẳng $(ACD)$.", isCorrect: true, errorTag: null, errorMsg: "Rất xuất sắc! Gọi $I$ là trung điểm $BD$. Khi đó $\\frac{BG}{BI} = \\frac{2}{3}$. Trên cạnh $BC$ có $\\frac{BM}{BC} = \\frac{2}{3}$. Theo định lý Thalès trong $\\triangle IBC$, ta có $GM \\parallel IC$. Mà $IC \\subset (ACD)$ nên $GM \\parallel (ACD)$." },
          { key: "B", text: "Mặt phẳng $(ABC)$.", isCorrect: false, errorTag: "ERR_WRONG_PLANE", errorMsg: "Điểm $G$ không nằm trên $(ABC)$ nhưng $GM$ cắt $(ABC)$." },
          { key: "C", text: "Mặt phẳng $(BCD)$.", isCorrect: false, errorTag: "ERR_POINT_CONTAINED", errorMsg: "Điểm $M \\in BC \\subset (BCD)$ nên $GM$ cắt $(BCD)$ tại $M$." },
          { key: "D", text: "Mặt phẳng $(ABD)$.", isCorrect: false, errorTag: "ERR_POINT_CONTAINED", errorMsg: "Điểm $G \\in (ABD)$ nên $GM$ cắt $(ABD)$ tại $G$." }
        ],
        remedialProblem: {
          title: "Bài tập củng cố: Định lý Thalès tìm đường song song",
          question: "Để chứng minh $GM \\parallel (ACD)$, ta đã chứng minh $GM$ song song với đường thẳng nào trong mặt phẳng $(ACD)$?",
          correctAnswer: "Đường thẳng $CI$ (với $I$ là trung điểm $BD$)",
          tip: "Mẹo nhớ: Lập tỉ số đồng dạng từ trọng tâm để phát hiện đường trung tuyến tương ứng."
        }
      },
      {
        id: "mc5",
        number: "Câu 5",
        level: "Vận dụng",
        question: "Cho hai hình bình hành $ABCD$ và $ABEF$ không cùng nằm trong một mặt phẳng. Gọi $O_1, O_2$ lần lượt là tâm của $ABCD$ và $ABEF$. Đường thẳng $O_1O_2$ song song với những mặt phẳng nào?",
        options: [
          { key: "A", text: "Chỉ song song với mặt phẳng $(ADF)$.", isCorrect: false, errorTag: "ERR_INCOMPLETE", errorMsg: "Chưa đủ, $O_1O_2$ còn song song với mặt phẳng $(BCE)$ nữa." },
          { key: "B", text: "Cả hai mặt phẳng $(ADF)$ và $(BCE)$.", isCorrect: true, errorTag: null, errorMsg: "Chính xác! Trong $\\triangle ACE$, $O_1O_2$ là đường trung bình nên $O_1O_2 \\parallel CE \\subset (BCE)$. Tương tự $O_1O_2 \\parallel DF \\subset (ADF)$. Vậy $O_1O_2$ song song với cả hai mặt phẳng $(ADF)$ và $(BCE)$." },
          { key: "C", text: "Chỉ song song với mặt phẳng $(ABCD)$.", isCorrect: false, errorTag: "ERR_IMPOSSIBLE", errorMsg: "Điểm $O_1 \\in (ABCD)$ nên $O_1O_2$ cắt $(ABCD)$ tại $O_1$." },
          { key: "D", text: "Song song với mặt phẳng $(ABEF)$.", isCorrect: false, errorTag: "ERR_IMPOSSIBLE", errorMsg: "Điểm $O_2 \\in (ABEF)$ nên $O_1O_2$ cắt $(ABEF)$ tại $O_2$." }
        ],
        remedialProblem: {
          title: "Bài tập khắc phục: Tâm hình bình hành",
          question: "Đoạn thẳng nối tâm hai hình bình hành chung đáy $AB$ có độ dài bằng bao nhiêu lần đoạn thẳng $CE$?",
          correctAnswer: "$O_1O_2 = \\frac{1}{2} CE$ (đường trung bình $\\triangle ACE$)",
          tip: "Mẹo nhớ: Nối các đỉnh tương ứng để tạo tam giác chứa đường trung bình $O_1O_2$."
        }
      }
    ],

    trueFalse: [
      {
        id: "tf1",
        number: "Câu 6",
        scenario: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành. Gọi $M, N$ lần lượt là trung điểm của các cạnh $SA, SD$. Xét tính Đúng hoặc Sai của các khẳng định sau:",
        items: [
          { key: "a", text: "Đường thẳng $MN$ song song với mặt phẳng đáy $(ABCD)$.", isCorrect: true, explanation: "Đúng. Trong $\\triangle SAD$, $MN$ là đường trung bình $\\implies MN \\parallel AD$. Mà $AD \\subset (ABCD)$ và $MN \\not\\subset (ABCD)$ nên $MN \\parallel (ABCD)$." },
          { key: "b", text: "Đường thẳng $MN$ song song với mặt phẳng $(SBC)$.", isCorrect: true, explanation: "Đúng. Vì $MN \\parallel AD \\parallel BC$, mà $BC \\subset (SBC)$ và $MN \\not\\subset (SBC)$ nên $MN \\parallel (SBC)$." },
          { key: "c", text: "Tứ giác $MNCB$ là một hình thang.", isCorrect: true, explanation: "Đúng. Vì $MN \\parallel BC$ nên 4 điểm $M, N, C, B$ đồng phẳng và $MNCB$ là hình thang." },
          { key: "d", text: "Đường thẳng $MN$ cắt đường thẳng $CD$ tại trung điểm của $CD$.", isCorrect: false, explanation: "Sai lầm: $MN \\parallel AD$ mà $AD$ cắt $CD$ tại $D$, hơn nữa $MN \\subset (SAD)$ còn $CD$ không nằm trong $(SAD)$, nên $MN$ và $CD$ chéo nhau, không cắt nhau." }
        ]
      },
      {
        id: "tf2",
        number: "Câu 7",
        scenario: "Cho tứ diện $ABCD$. Gọi $G_1, G_2$ lần lượt là trọng tâm của tam giác $ABC$ và tam giác $ABD$. Đánh giá tính Đúng hoặc Sai của mỗi khẳng định:",
        items: [
          { key: "a", text: "Đường thẳng $G_1G_2$ song song với đường thẳng $CD$.", isCorrect: true, explanation: "Đúng. Gọi $M$ là trung điểm $AB$, ta có $\\frac{MG_1}{MC} = \\frac{MG_2}{MD} = \\frac{1}{3} \\implies G_1G_2 \\parallel CD$." },
          { key: "b", text: "Đường thẳng $G_1G_2$ song song với mặt phẳng $(BCD)$.", isCorrect: true, explanation: "Đúng. Do $G_1G_2 \\parallel CD$ mà $CD \\subset (BCD)$ và $G_1G_2 \\not\\subset (BCD)$." },
          { key: "c", text: "Đường thẳng $G_1G_2$ song song với mặt phẳng $(ACD)$.", isCorrect: true, explanation: "Đúng. Do $G_1G_2 \\parallel CD$ mà $CD \\subset (ACD)$ và $G_1G_2 \\not\\subset (ACD)$." },
          { key: "d", text: "Độ dài đoạn thẳng $G_1G_2 = \\frac{2}{3} CD$.", isCorrect: false, explanation: "Sai lầm tỉ số: Tỉ số đúng theo định lý Thalès là $\\frac{MG_1}{MC} = \\frac{1}{3}$, do đó $G_1G_2 = \\frac{1}{3} CD$, không phải $\\frac{2}{3}$!" }
        ]
      },
      {
        id: "tf3",
        number: "Câu 8",
        scenario: "Xét các tính chất về đường thẳng song song với mặt phẳng trong không gian:",
        items: [
          { key: "a", text: "Nếu đường thẳng $d$ song song với mặt phẳng $(P)$ thì qua $d$ có duy nhất một mặt phẳng song song với $(P)$.", isCorrect: false, explanation: "Sai. Nếu qua $d$ có mặt phẳng song song với $(P)$ thì mặt phẳng đó là duy nhất, nhưng điều này chỉ đúng khi xét mặt phẳng. Tuy nhiên đề bài nói 'qua d có duy nhất 1 mp song song' - điều này ĐÚNG, nhưng nếu $d \\subset (P)$ thì không tồn tại. Ở đây $d \\parallel (P)$ nên qua $d$ có đúng 1 mp song song $(P)$." },
          { key: "b", text: "Nếu hai mặt phẳng phân biệt cùng song song với một đường thẳng thì giao tuyến của chúng (nếu có) cũng song song với đường thẳng đó.", isCorrect: true, explanation: "Đúng. Đây là hệ quả quan trọng của định lý giao tuyến song song." },
          { key: "c", text: "Cho đường thẳng $d \\parallel (P)$. Mọi mặt phẳng $(Q)$ chứa $d$ đều cắt $(P)$ theo giao tuyến song song với $d$.", isCorrect: false, explanation: "Sai. Thiếu điều kiện: Mặt phẳng $(Q)$ PHẢI CẮT $(P)$. Nếu $(Q) \\parallel (P)$ thì không có giao tuyến!" },
          { key: "d", text: "Nếu một đường thẳng song song với một mặt phẳng thì nó không bao giờ có điểm chung với bất kì đường thẳng nào nằm trong mặt phẳng đó.", isCorrect: true, explanation: "Đúng. Vì $d \\cap (P) = \\emptyset$, mà mọi điểm của đường thẳng trong $(P)$ đều thuộc $(P)$ nên $d$ không thể có điểm chung với đường thẳng nào trong $(P)$." }
        ]
      }
    ],

    shortAnswer: [
      {
        id: "sa1",
        number: "Câu 9",
        question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành. Có bao nhiêu mặt phẳng của hình chóp (mặt bên hoặc mặt đáy) song song với đường thẳng $AB$?",
        correctAnswer: "1",
        acceptedAnswers: ["1", "1 mặt phẳng", "một", "(SCD)"],
        explanation: "Chỉ có duy nhất mặt phẳng $(SCD)$ song song với $AB$ (vì $AB \\parallel CD \\subset (SCD)$ và $AB \\not\\subset (SCD)$). Các mặt phẳng khác: $(ABCD)$ và $(SAB)$ chứa $AB$, $(SAD)$ và $(SBC)$ cắt $AB$ tại $A$ và $B$.",
        tip: "Chỉ mặt bên đối diện với cạnh đáy mới song song với cạnh đáy đó."
      },
      {
        id: "sa2",
        number: "Câu 10",
        question: "Cho tứ diện $ABCD$ có $CD = 12\\text{ cm}$. Gọi $G_1, G_2$ lần lượt là trọng tâm của hai tam giác $ABC$ và $ABD$. Độ dài đoạn thẳng $G_1G_2$ bằng bao nhiêu cm?",
        correctAnswer: "4",
        acceptedAnswers: ["4", "4 cm", "bốn"],
        explanation: "Theo tính chất trọng tâm và định lý Thalès: $G_1G_2 = \\frac{1}{3} CD = \\frac{1}{3} \\times 12 = 4\\text{ cm}$.",
        tip: "Nhớ công thức: Đoạn nối hai trọng tâm ứng với cùng một đáy cạnh chung bằng 1/3 cạnh đối diện."
      },
      {
        id: "sa3",
        number: "Câu 11",
        question: "Cho hình chóp $S.ABCD$ đáy hình bình hành. Mặt phẳng $(\\alpha)$ đi qua trung điểm $M$ của $SA$ và song song với $AB$ và $SC$. Thiết diện của $(\\alpha)$ với hình chóp là hình gì? (Điền: tam giác, hình thang, hình bình hành, hình chữ nhật)",
        correctAnswer: "hình thang",
        acceptedAnswers: ["hình thang", "hinh thang"],
        explanation: "Mặt phẳng cắt các mặt tạo thành tứ giác có 2 cạnh đối cùng song song với $AB$ nên thiết diện là hình thang.",
        tip: "Hai giao tuyến trên hai mặt đối diện cùng song song với $AB$ tạo nên 2 đáy của hình thang."
      },
      {
        id: "sa4",
        number: "Câu 12",
        question: "Một thanh xà gồ gỗ dài $3\\text{ m}$ đặt song song với mặt sàn nhà nằm ngang. Khoảng cách từ đầu mút thứ nhất của thanh xà gồ đến mặt sàn là $2.8\\text{ m}$. Hỏi khoảng cách từ đầu mút thứ hai của thanh xà gồ đến mặt sàn là bao nhiêu mét?",
        correctAnswer: "2.8",
        acceptedAnswers: ["2.8", "2,8", "2.8 m", "2.8m"],
        explanation: "Vì thanh xà gồ song song với mặt sàn nên mọi điểm trên thanh xà gồ đều cách đều mặt sàn một khoảng không đổi. Do đó khoảng cách từ đầu mút thứ hai cũng bằng $2.8\\text{ m}$.",
        tip: "Tính chất: Đường thẳng song song với mặt phẳng thì mọi điểm trên đường thẳng đều cách đều mặt phẳng."
      }
    ],

    essay: [
      {
        id: "es1",
        number: "Câu 13 (Tự luận 1)",
        title: "Chứng minh đường thẳng song song mặt phẳng trong hình chóp",
        question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành tâm $O$. Gọi $M, N$ lần lượt là trung điểm của các cạnh bên $SA$ và $SC$.\n1) Chứng minh đường thẳng $MN$ song song với mặt phẳng đáy $(ABCD)$.\n2) Gọi $P$ là trung điểm của cạnh $AB$. Chứng minh đường thẳng $OP$ song song với mặt phẳng $(SBC)$.",
        maxPoints: 10.0,
        sampleSolution: `1) Chứng minh MN // (ABCD):
- Xét tam giác SAC, ta có:
  + M là trung điểm của SA (giả thiết)
  + N là trung điểm của SC (giả thiết)
  => MN là đường trung bình của tam giác SAC.
- Suy ra MN // AC.
- Ta có:
  + AC ⊂ (ABCD)
  + MN ⊄ (ABCD) (vì M, N thuộc các cạnh bên)
- Theo định lí dấu hiệu nhận biết đường thẳng song song với mặt phẳng:
  MN // (ABCD).

2) Chứng minh OP // (SBC):
- Trong mặt phẳng đáy (ABCD), xét tam giác ABC:
  + O là trung điểm đường chéo AC (do ABCD là hình bình hành)
  + P là trung điểm cạnh AB (giả thiết)
  => OP là đường trung bình của tam giác ABC.
- Suy ra OP // BC.
- Ta có:
  + BC ⊂ (SBC)
  + OP ⊄ (SBC) (vì OP nằm hoàn toàn trong mặt phẳng đáy)
- Theo định lí dấu hiệu nhận biết:
  OP // (SBC).`,
        criteria: [
          { id: "c1", step: "Bước 1", desc: "Chứng minh MN là đường trung bình tam giác SAC => MN // AC", points: 2.5 },
          { id: "c2", step: "Bước 2", desc: "Lập luận AC ⊂ (ABCD), MN ⊄ (ABCD) => MN // (ABCD)", points: 2.5 },
          { id: "c3", step: "Bước 3", desc: "Chứng minh OP là đường trung bình tam giác ABC => OP // BC", points: 2.5 },
          { id: "c4", step: "Bước 4", desc: "Lập luận BC ⊂ (SBC), OP ⊄ (SBC) => OP // (SBC)", points: 2.5 }
        ]
      },
      {
        id: "es2",
        number: "Câu 14 (Tự luận 2)",
        title: "Tìm thiết diện song song với đường thẳng",
        question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình thang với đáy lớn $AB$, đáy nhỏ $CD$. Gọi $M$ là một điểm trên cạnh $AD$ ($M$ không trùng $A, D$). Mặt phẳng $(\\alpha)$ đi qua $M$ và song song với hai đường thẳng $AB$ và $SA$.\n1) Xác định thiết diện của hình chóp $S.ABCD$ cắt bởi mặt phẳng $(\\alpha)$.\n2) Thiết diện đó là hình gì?",
        maxPoints: 10.0,
        sampleSolution: `1) Xác định thiết diện:
- Trong mặt phẳng (SAD): Mặt phẳng (α) đi qua M và song song với SA, nên giao tuyến của (α) với (SAD) là đường thẳng qua M song song SA, cắt SD tại P:
  MP // SA (P ∈ SD).
- Trong mặt phẳng đáy (ABCD): Mặt phẳng (α) đi qua M và song song với AB, nên giao tuyến của (α) với (ABCD) là đường thẳng qua M song song AB, cắt BC tại Q:
  MQ // AB (Q ∈ BC).
- Trong mặt phẳng (SCD): Mặt phẳng (α) đi qua P và song song với AB // CD, nên giao tuyến của (α) với (SCD) là đường thẳng qua P song song CD, cắt SC tại N:
  PN // CD // AB (N ∈ SC).
- Trong mặt phẳng (SBC): Nối N với Q.
  Vì MQ // AB và PN // AB nên bốn điểm M, P, N, Q đồng phẳng và đoạn giao tuyến trên (SBC) là NQ.

2) Kết luận hình dạng thiết diện:
- Thiết diện cắt hình chóp là tứ giác MPNQ.
- Vì MP // SA và NQ // SA nên MP // NQ. Mặt khác MQ // PN (cùng // AB).
- Tứ giác có 2 cặp cạnh đối song song nên thiết diện MPNQ là HÌNH BÌNH HÀNH.`,
        criteria: [
          { id: "c1", step: "Bước 1", desc: "Dựng giao tuyến MP // SA trên mặt (SAD) với P ∈ SD", points: 2.5 },
          { id: "c2", step: "Bước 2", desc: "Dựng giao tuyến MQ // AB trên mặt đáy (ABCD) với Q ∈ BC", points: 2.5 },
          { id: "c3", step: "Bước 3", desc: "Dựng giao tuyến PN // CD trên mặt (SCD) với N ∈ SC và nối NQ", points: 2.5 },
          { id: "c4", step: "Bước 4", desc: "Chứng minh MP // NQ và MQ // PN để kết luận thiết diện là hình bình hành MPNQ", points: 2.5 }
        ]
      },
      {
        id: "es3",
        number: "Câu 15 (Tự luận 3)",
        title: "Bài toán thực tế ứng dụng tính song song",
        question: "Một khung nhà lều chữ A có thanh nóc lều $MN$ dài $4\\text{ m}$ được đặt nằm ngang song song với mặt đất $(P)$. Hai mái lều nghiêng tựa vào thanh nóc lều và tiếp đất tại hai đoạn thẳng $AB$ và $CD$ trên mặt đất.\n1) Chứng minh hai mép chân lều $AB$ và $CD$ trên mặt đất bắt buộc phải song song với nhau và cùng song song với thanh nóc lều $MN$.\n2) Biết khoảng cách từ $MN$ đến mặt đất là $2.5\\text{ m}$. Khi ánh nắng mặt trời chiếu vuông góc từ trên xuống, bóng của thanh nóc lều $MN$ trên mặt đất có độ dài bằng bao nhiêu mét?",
        maxPoints: 10.0,
        sampleSolution: `1) Chứng minh AB // CD // MN:
- Thanh nóc lều MN song song với mặt đất (P).
- Mái lều thứ nhất là mặt phẳng (MAB) chứa đường thẳng MN và cắt mặt đất (P) theo giao tuyến AB.
  Áp dụng định lý giao tuyến song song: AB // MN.
- Mái lều thứ hai là mặt phẳng (NCD) chứa đường thẳng MN và cắt mặt đất (P) theo giao tuyến CD.
  Tương tự, giao tuyến CD // MN.
- Theo tính chất bắc cầu: AB // CD và cả hai mép chân lều cùng song song với thanh nóc lều MN.

2) Tính độ dài bóng của thanh nóc lều:
- Khi ánh nắng mặt trời chiếu vuông góc xuống mặt đất (phép chiếu song song vuông góc), thanh nóc lều MN song song với mặt đất nên đoạn thẳng MN và hình chiếu M'N' của nó trên mặt đất tạo thành hình chữ nhật MM'N'N.
- Do đó độ dài bóng M'N' trên mặt đất đúng bằng độ dài của thanh nóc lều MN:
  M'N' = MN = 4 m.`,
        criteria: [
          { id: "c1", step: "Bước 1", desc: "Áp dụng định lý giao tuyến chứng minh AB // MN", points: 2.5 },
          { id: "c2", step: "Bước 2", desc: "Áp dụng định lý giao tuyến chứng minh CD // MN", points: 2.5 },
          { id: "c3", step: "Bước 3", desc: "Suy ra tính chất bắc cầu AB // CD // MN", points: 2.5 },
          { id: "c4", step: "Bước 4", desc: "Lập luận tính chất phép chiếu song song để kết luận độ dài bóng bằng 4 m", points: 2.5 }
        ]
      }
    ]
  },

  // ========================================================================
  // BÀI 13: HAI MẶT PHẲNG SONG SONG
  // ========================================================================
  "g11-c4-l13": {
    lessonId: "g11-c4-l13",
    title: "Bài 13: Hai mặt phẳng song song",
    chapterTitle: "Chương IV: Quan hệ song song trong không gian",
    grade: 11,
    summary: "Bộ 15 câu hỏi đánh giá chẩn đoán: Định lý nhận biết hai mặt phẳng song song, tính chất giao tuyến, định lý Thalès không gian, hình lăng trụ, hình hộp, hình chóp cụt và ứng dụng thực tế.",
    
    multipleChoice: [
      {
        id: "mc1",
        number: "Câu 1",
        level: "Nhận biết",
        question: "Dấu hiệu nhận biết hai mặt phẳng song song là:",
        options: [
          { key: "A", text: "Nếu mặt phẳng $(P)$ chứa hai đường thẳng cùng song song với mặt phẳng $(Q)$ thì $(P) \\parallel (Q)$.", isCorrect: false, errorTag: "ERR_MISSING_INTERSECT", errorMsg: "Thiếu điều kiện chí mạng: Hai đường thẳng đó PHẢI CẮT NHAU! Nếu hai đường thẳng đó song song với nhau thì $(P)$ vẫn có thể cắt $(Q)$." },
          { key: "B", text: "Nếu mặt phẳng $(P)$ chứa hai đường thẳng cắt nhau và hai đường thẳng này cùng song song với mặt phẳng $(Q)$ thì $(P) \\parallel (Q)$.", isCorrect: true, errorTag: null, errorMsg: "Chính xác tuyệt đối! Đây là nội dung chuẩn xác của Định lí 1 về dấu hiệu nhận biết hai mặt phẳng song song." },
          { key: "C", text: "Nếu một đường thẳng thuộc $(P)$ song song với một đường thẳng thuộc $(Q)$ thì $(P) \\parallel (Q)$.", isCorrect: false, errorTag: "ERR_ONE_LINE", errorMsg: "Sai, một cặp đường thẳng song song chỉ đảm bảo phương song song, hai mặt phẳng vẫn có thể cắt nhau (ví dụ 2 mái nhà chữ A)." },
          { key: "D", text: "Nếu $(P)$ và $(Q)$ cùng vuông góc với một đường thẳng thì chúng cắt nhau.", isCorrect: false, errorTag: "ERR_OPPOSITE", errorMsg: "Hai mặt phẳng cùng vuông góc với một đường thẳng thì chúng song song với nhau!" }
        ],
        remedialProblem: {
          title: "Bài tập khắc phục: Điều kiện 2 đường thẳng cắt nhau",
          question: "Tại sao trong định lý nhận biết $(P) \\parallel (Q)$, hai đường thẳng $a, b \\subset (P)$ bắt buộc phải cắt nhau?",
          correctAnswer: "Nếu $a \\parallel b$ thì ta chỉ xác định được 1 phương, mặt phẳng $(P)$ có thể xoay quanh phương đó và cắt $(Q)$",
          tip: "Mẹo nhớ: 2 đường thẳng cắt nhau mới cố định được toàn bộ mặt phẳng $(P)$."
        }
      },
      {
        id: "mc2",
        number: "Câu 2",
        level: "Thông hiểu",
        question: "Cho hai mặt phẳng song song $(P) \\parallel (Q)$. Khẳng định nào sau đây là SAI?",
        options: [
          { key: "A", text: "Mọi đường thẳng nằm trong $(P)$ đều song song với mặt phẳng $(Q)$.", isCorrect: false, errorTag: "ERR_THIS_IS_TRUE", errorMsg: "Khẳng định này ĐÚNG, vì $(P) \\cap (Q) = \\emptyset$ nên đường thẳng trong $(P)$ không có điểm chung với $(Q)$, suy ra song song với $(Q)$." },
          { key: "B", text: "Nếu mặt phẳng $(R)$ cắt $(P)$ và $(Q)$ theo hai giao tuyến $a$ và $b$ thì $a \\parallel b$.", isCorrect: false, errorTag: "ERR_THIS_IS_TRUE", errorMsg: "Khẳng định này ĐÚNG (định lý giao tuyến của hai mặt phẳng song song)." },
          { key: "C", text: "Mọi đường thẳng nằm trong $(P)$ đều song song với mọi đường thẳng nằm trong $(Q)$.", isCorrect: true, errorTag: null, errorMsg: "Rất xuất sắc! Đây chính là khẳng định SAI (đáp án cần chọn). Hai đường thẳng nằm trên hai mặt phẳng song song có thể SONG SONG hoặc CHÉO NHAU, không nhất thiết phải song song với nhau!" },
          { key: "D", text: "Hai mặt phẳng song song chắn trên hai cát tuyến song song các đoạn thẳng bằng nhau.", isCorrect: false, errorTag: "ERR_THIS_IS_TRUE", errorMsg: "Khẳng định này ĐÚNG (tính chất các đoạn thẳng song song bị chắn bởi 2 mặt phẳng song song)." }
        ],
        remedialProblem: {
          title: "Bài tập khắc phục: Vị trí tương đối của 2 đường thẳng trên 2 mp song song",
          question: "Cho $(P) \\parallel (Q)$, lấy $a \\subset (P)$ và $b \\subset (Q)$. Hai đường thẳng $a$ và $b$ có thể có vị trí tương đối nào?",
          correctAnswer: "Song song hoặc Chéo nhau (không bao giờ cắt nhau hoặc trùng nhau)",
          tip: "Mẹo nhớ: $(P) \\parallel (Q) \\implies$ không có điểm chung $\\implies a$ và $b$ chỉ có thể song song hoặc chéo nhau."
        }
      },
      {
        id: "mc3",
        number: "Câu 3",
        level: "Thông hiểu",
        question: "Ba mặt phẳng đôi một song song $(\\alpha) \\parallel (\\beta) \\parallel (\\gamma)$ cắt đường thẳng $d_1$ tại $A, B, C$ và cắt đường thẳng $d_2$ tại $A', B', C'$. Biết $AB = 2, BC = 4, A'B' = 3$. Độ dài đoạn thẳng $B'C'$ bằng:",
        options: [
          { key: "A", text: "$4$.", isCorrect: false, errorTag: "ERR_CALC", errorMsg: "Tính toán nhầm tỉ lệ." },
          { key: "B", text: "$6$.", isCorrect: true, errorTag: null, errorMsg: "Chính xác! Theo định lý Thalès trong không gian: $\\frac{AB}{BC} = \\frac{A'B'}{B'C'} \\iff \\frac{2}{4} = \\frac{3}{B'C'} \\implies B'C' = \\frac{4 \\times 3}{2} = 6$." },
          { key: "C", text: "$5$.", isCorrect: false, errorTag: "ERR_CALC", errorMsg: "Sai tỉ lệ." },
          { key: "D", text: "$8$.", isCorrect: false, errorTag: "ERR_CALC", errorMsg: "Sai tỉ lệ." }
        ],
        remedialProblem: {
          title: "Bài tập củng cố: Định lý Thalès không gian",
          question: "Cho 3 mặt phẳng song song chắn trên cát tuyến $d_1$ hai đoạn thẳng 3 và 5. Cát tuyến $d_2$ có tổng độ dài 2 đoạn thẳng bằng 16. Tính độ dài đoạn lớn trên $d_2$.",
          correctAnswer: "10 (vì $\\frac{5}{3+5} \\times 16 = 10$)",
          tip: "Mẹo nhớ: Đoạn thẳng tỉ lệ thuận với nhau: $\\frac{AB}{A'B'} = \\frac{BC}{B'C'} = \\frac{AC}{A'C'}$."
        }
      },
      {
        id: "mc4",
        number: "Câu 4",
        level: "Vận dụng",
        question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $a$. Một mặt phẳng $(\\alpha)$ song song với đáy cắt các cạnh bên $SA, SB, SC, SD$ lần lượt tại $A', B', C', D'$ sao cho $\\frac{SA'}{SA} = \\frac{2}{3}$. Diện tích của thiết diện $A'B'C'D'$ bằng:",
        options: [
          { key: "A", text: "$\\frac{2}{3} a^2$.", isCorrect: false, errorTag: "ERR_LINEAR_RATIO", errorMsg: "Sai lầm nghiêm trọng: Tỉ số diện tích của hai hình đồng dạng bằng BÌNH PHƯƠNG tỉ số đồng dạng, tức là $k^2 = (2/3)^2 = 4/9$, không phải $2/3$!" },
          { key: "B", text: "$\\frac{4}{9} a^2$.", isCorrect: true, errorTag: null, errorMsg: "Rất xuất sắc! Thiết diện $A'B'C'D'$ là hình vuông đồng dạng với đáy $ABCD$ theo tỉ số $k = \\frac{2}{3}$. Do đó diện tích thiết diện là $S' = k^2 \\cdot S_{ABCD} = \\left(\\frac{2}{3}\\right)^2 a^2 = \\frac{4}{9} a^2$." },
          { key: "C", text: "$\\frac{4}{3} a^2$.", isCorrect: false, errorTag: "ERR_LARGER", errorMsg: "Thiết diện nhỏ hơn đáy nên không thể lớn hơn $a^2$." },
          { key: "D", text: "$\\frac{8}{27} a^2$.", isCorrect: false, errorTag: "ERR_VOLUME_RATIO", errorMsg: "Nhầm lẫn với tỉ số thể tích $k^3 = 8/27$." }
        ],
        remedialProblem: {
          title: "Bài tập khắc phục: Tỉ số diện tích thiết diện song song",
          question: "Nếu mặt phẳng song song cắt hình chóp tại trung điểm cạnh bên ($k = 1/2$) thì diện tích thiết diện bằng mấy phần diện tích đáy?",
          correctAnswer: "$1/4$ (vì $(1/2)^2 = 1/4$)",
          tip: "Ghi nhớ: Tỉ số độ dài = $k$, Tỉ số diện tích = $k^2$, Tỉ số thể tích = $k^3$."
        }
      },
      {
        id: "mc5",
        number: "Câu 5",
        level: "Vận dụng",
        question: "Khẳng định nào sau đây về hình hộp $ABCD.A'B'C'D'$ là SAI?",
        options: [
          { key: "A", text: "Tất cả 6 mặt của hình hộp đều là các hình bình hành.", isCorrect: false, errorTag: "ERR_THIS_IS_TRUE", errorMsg: "Đúng, theo định nghĩa hình hộp là hình lăng trụ có đáy là hình bình hành, nên cả 6 mặt đều là hình bình hành." },
          { key: "B", text: "Bốn đường chéo $AC', BD', CA', DB'$ đồng quy tại trung điểm của mỗi đường.", isCorrect: false, errorTag: "ERR_THIS_IS_TRUE", errorMsg: "Đúng, tâm $O$ của hình hộp là trung điểm của cả 4 đường chéo." },
          { key: "C", text: "Hai mặt phẳng đối diện $(BDA')$ và $(B'D'C)$ song song với nhau.", isCorrect: false, errorTag: "ERR_THIS_IS_TRUE", errorMsg: "Đúng, vì $BD \\parallel B'D'$ và $BA' \\parallel CD'$ nên hai mặt phẳng này song song." },
          { key: "D", text: "Bốn đường chéo của hình hộp luôn có độ dài bằng nhau.", isCorrect: true, errorTag: null, errorMsg: "Rất chính xác! Đây là khẳng định SAI (đáp án cần chọn). Bốn đường chéo chỉ bằng nhau khi hình hộp là HÌNH HỘP CHỮ NHẬT hoặc HÌNH LẬP PHƯƠNG. Với hình hộp xiên tổng quát, các đường chéo có độ dài khác nhau!" }
        ],
        remedialProblem: {
          title: "Bài tập khắc phục: Tính chất đường chéo hình hộp",
          question: "Điểm cắt nhau của 4 đường chéo trong hình hộp được gọi là gì của hình hộp?",
          correctAnswer: "Tâm đối xứng của hình hộp (hay tâm hình hộp)",
          tip: "Mẹo nhớ: Đường chéo hình hộp luôn cắt nhau tại trung điểm, nhưng chỉ bằng nhau khi là hình hộp chữ nhật."
        }
      }
    ],

    trueFalse: [
      {
        id: "tf1",
        number: "Câu 6",
        scenario: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành tâm $O$. Gọi $M, N, P$ lần lượt là trung điểm của các cạnh bên $SA, SB, SC$. Xét tính Đúng hoặc Sai của các khẳng định sau:",
        items: [
          { key: "a", text: "Đường thẳng $MN$ song song với mặt phẳng đáy $(ABCD)$.", isCorrect: true, explanation: "Đúng. Trong $\\triangle SAB$, $MN$ là đường trung bình nên $MN \\parallel AB \\subset (ABCD)$." },
          { key: "b", text: "Mặt phẳng $(MNP)$ song song với mặt phẳng đáy $(ABCD)$.", isCorrect: true, explanation: "Đúng. Có $MN \\parallel AB$ và $NP \\parallel BC$, mà $MN$ và $NP$ cắt nhau tại $N$ cùng nằm trong $(MNP)$, nên $(MNP) \\parallel (ABCD)$." },
          { key: "c", text: "Mặt phẳng $(MNP)$ cắt cạnh bên $SD$ tại điểm $Q$ là trung điểm của $SD$.", isCorrect: true, explanation: "Đúng. Giao tuyến của $(MNP)$ với $(SAD)$ qua $M$ song song với $AD$ cắt $SD$ tại trung điểm $Q$." },
          { key: "d", text: "Diện tích tứ giác $MNPQ$ bằng một nửa diện tích đáy $ABCD$.", isCorrect: false, explanation: "Sai lầm tỉ số diện tích: Tứ giác $MNPQ$ đồng dạng với đáy $ABCD$ theo tỉ số $k = 1/2$. Do đó diện tích $S_{MNPQ} = k^2 \\cdot S_{ABCD} = \\frac{1}{4} S_{ABCD}$, không phải một nửa!" }
        ]
      },
      {
        id: "tf2",
        number: "Câu 7",
        scenario: "Cho hình lăng trụ tam giác $ABC.A'B'C'$. Gọi $M, M'$ lần lượt là trung điểm của hai cạnh tương ứng $BC$ và $B'C'$. Đánh giá tính Đúng hoặc Sai của mỗi khẳng định:",
        items: [
          { key: "a", text: "Hai mặt phẳng đáy $(ABC)$ và $(A'B'C')$ song song với nhau.", isCorrect: true, explanation: "Đúng. Định nghĩa hình lăng trụ có hai đáy là các đa giác bằng nhau nằm trên hai mặt phẳng song song." },
          { key: "b", text: "Tứ giác $BCC'B'$ là một hình bình hành.", isCorrect: true, explanation: "Đúng. Các mặt bên của hình lăng trụ luôn là các hình bình hành (cạnh bên $BB' \\parallel CC'$ và $BB' = CC'$)." },
          { key: "c", text: "Tứ giác $AMM'A'$ là một hình bình hành.", isCorrect: true, explanation: "Đúng. Ta có $MM' \\parallel BB' \\parallel AA'$ và $MM' = BB' = AA'$, tứ giác có một cặp cạnh đối song song và bằng nhau nên là hình bình hành." },
          { key: "d", text: "Đường thẳng $A'M$ cắt mặt phẳng đáy $(A'B'C')$ tại điểm $A'$.", isCorrect: false, explanation: "Sai lầm: Điểm $A'$ nằm trên mặt phẳng $(A'B'C')$ nên $A'M$ giao với $(A'B'C')$ tại chính $A'$ là đúng, nhưng $M$ nằm ở đáy dưới $(ABC)$ nên giao điểm của $A'M$ với đáy trên chính là $A'$." }
        ]
      },
      {
        id: "tf3",
        number: "Câu 8",
        scenario: "Xét các khẳng định về định lý Thalès trong không gian và hình chóp cụt:",
        items: [
          { key: "a", text: "Ba mặt phẳng đôi một song song chắn trên hai cát tuyến bất kì các đoạn thẳng tương ứng tỉ lệ.", isCorrect: true, explanation: "Đúng. Đây là định lý Thalès trong không gian." },
          { key: "b", text: "Hai đáy của một hình chóp cụt là hai đa giác đồng dạng với nhau.", isCorrect: true, explanation: "Đúng. Do thiết diện song song với đáy của hình chóp là đa giác đồng dạng với đáy." },
          { key: "c", text: "Các mặt bên của một hình chóp cụt là các hình bình hành.", isCorrect: false, explanation: "Sai lầm: Các mặt bên của hình chóp cụt là CÁC HÌNH THANG, không phải hình bình hành (vì các cạnh bên kéo dài đồng quy tại đỉnh chóp ban đầu)!" },
          { key: "d", text: "Khoảng cách giữa hai mặt phẳng song song là độ dài đoạn vuông góc chung nối hai điểm bất kì trên hai mặt phẳng đó.", isCorrect: true, explanation: "Đúng. Đoạn thẳng vuông góc nối hai mặt phẳng song song cho độ dài ngắn nhất và là khoảng cách giữa chúng." }
        ]
      }
    ],

    shortAnswer: [
      {
        id: "sa1",
        number: "Câu 9",
        question: "Một hình lăng trụ lục giác có tất cả bao nhiêu mặt (gồm cả mặt đáy và mặt bên)?",
        correctAnswer: "8",
        acceptedAnswers: ["8", "8 mặt", "tám"],
        explanation: "Hình lăng trụ lục giác có 2 mặt đáy và 6 mặt bên hình bình hành. Tổng cộng có $2 + 6 = 8$ mặt.",
        tip: "Công thức: Lăng trụ $n$-giác có $n+2$ mặt, $2n$ đỉnh và $3n$ cạnh."
      },
      {
        id: "sa2",
        number: "Câu 10",
        question: "Hình hộp chữ nhật $ABCD.A'B'C'D'$ có tất cả bao nhiêu cặp mặt phẳng đối diện song song với nhau?",
        correctAnswer: "3",
        acceptedAnswers: ["3", "3 cặp", "ba"],
        explanation: "Hình hộp có đúng 3 cặp mặt phẳng đối diện song song: $(ABCD) \\parallel (A'B'C'D')$, $(ABB'A') \\parallel (CDD'C')$, $(ADD'A') \\parallel (BCC'B')$.",
        tip: "Ghi nhớ: Hình hộp có 6 mặt, chia thành đúng 3 cặp mặt phẳng song song từng đôi một."
      },
      {
        id: "sa3",
        number: "Câu 11",
        question: "Ba mặt phẳng song song cắt cát tuyến $d_1$ tại $A, B, C$ và cắt $d_2$ tại $A', B', C'$. Cho biết $AB = 3\\text{ cm}, BC = 5\\text{ cm}$ và $A'C' = 16\\text{ cm}$. Độ dài đoạn thẳng $B'C'$ bằng bao nhiêu cm?",
        correctAnswer: "10",
        acceptedAnswers: ["10", "10 cm", "mười"],
        explanation: "Ta có $AC = AB + BC = 3 + 5 = 8\\text{ cm}$. Theo định lý Thalès: $\\frac{B'C'}{A'C'} = \\frac{BC}{AC} \\implies B'C' = \\frac{5}{8} \\times 16 = 10\\text{ cm}$.",
        tip: "Tỉ số đoạn thành phần trên đoạn toàn phần: $\\frac{B'C'}{16} = \\frac{5}{8} \\implies B'C' = 10$."
      },
      {
        id: "sa4",
        number: "Câu 12",
        question: "Một bồn chứa nước bê tông dạng hình chóp cụt tứ giác đều có đáy lớn là hình vuông cạnh $4\\text{ m}$, đáy nhỏ là hình vuông cạnh $2\\text{ m}$. Một mặt sàn chia nước nằm song song và cách đều hai đáy. Hỏi diện tích của mặt sàn chia nước này bằng bao nhiêu mét vuông?",
        correctAnswer: "9",
        acceptedAnswers: ["9", "9 m2", "9m2", "chín"],
        explanation: "Vì mặt sàn song song và cách đều hai đáy nên cạnh hình vuông của mặt sàn là đường trung bình của hình thang mặt bên: $a = \\frac{4 + 2}{2} = 3\\text{ m}$. Diện tích mặt sàn hình vuông là $S = a^2 = 3^2 = 9\\text{ m}^2$.",
        tip: "Cạnh thiết diện cách đều hai đáy bằng trung bình cộng hai cạnh đáy: $\\frac{a + b}{2}$."
      }
    ],

    essay: [
      {
        id: "es1",
        number: "Câu 13 (Tự luận 1)",
        title: "Chứng minh hai mặt phẳng song song trong hình hộp",
        question: "Cho hình hộp chữ nhật (hoặc hình hộp) $ABCD.A'B'C'D'$.\n1) Chứng minh mặt phẳng $(BDA')$ song song với mặt phẳng $(B'D'C)$.\n2) Gọi $O, O'$ lần lượt là tâm của hai hình bình hành $ABCD$ và $A'B'C'D'$. Chứng minh đường chéo $AC'$ đi qua trọng tâm của hai tam giác $BDA'$ và $B'D'C$.",
        maxPoints: 10.0,
        sampleSolution: `1) Chứng minh (BDA') // (B'D'C):
- Xét tứ giác BDD'B': Có BB' // DD' và BB' = DD' (cạnh bên hình hộp).
  => BDD'B' là hình bình hành => BD // B'D'.
  Mà B'D' ⊂ (B'D'C) nên BD // (B'D'C).
- Xét tứ giác A'BCD': Có A'B // D'C và A'B = D'C.
  => A'BCD' là hình bình hành => BA' // CD'.
  Mà CD' ⊂ (B'D'C) nên BA' // (B'D'C).
- Trong mặt phẳng (BDA'), hai đường thẳng BD và BA' cắt nhau tại B và cùng song song với mặt phẳng (B'D'C).
- Theo định lí dấu hiệu nhận biết hai mặt phẳng song song:
  (BDA') // (B'D'C).

2) Chứng minh đường chéo AC' đi qua trọng tâm hai tam giác:
- Trong mặt phẳng (AA'C'C), đoạn thẳng AC' cắt A'O tại G1 và cắt CO' tại G2.
- Áp dụng định lý Thalès trong tam giác: G1 là trọng tâm tam giác BDA' và G2 là trọng tâm tam giác B'D'C.
- Đoạn AC' bị hai mặt phẳng (BDA') và (B'D'C) chia thành 3 phần bằng nhau: AG1 = G1G2 = G2C' = 1/3 AC'.`,
        criteria: [
          { id: "c1", step: "Bước 1", desc: "Chứng minh BD // B'D' và suy ra BD // (B'D'C)", points: 2.5 },
          { id: "c2", step: "Bước 2", desc: "Chứng minh BA' // CD' và suy ra BA' // (B'D'C)", points: 2.5 },
          { id: "c3", step: "Bước 3", desc: "Kết luận (BDA') // (B'D'C) theo định lý nhận biết", points: 2.5 },
          { id: "c4", step: "Bước 4", desc: "Chứng minh AC' cắt và chia 3 phần bằng nhau qua hai trọng tâm", points: 2.5 }
        ]
      },
      {
        id: "es2",
        number: "Câu 14 (Tự luận 2)",
        title: "Thiết diện qua một điểm song song với mặt phẳng",
        question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành tâm $O$. Gọi $M$ là một điểm thuộc cạnh bên $SA$ sao cho $SM = 2MA$. Mặt phẳng $(\\alpha)$ đi qua $M$ và song song với mặt phẳng $(SBC)$.\n1) Tìm giao tuyến của mặt phẳng $(\\alpha)$ với các mặt của hình chóp.\n2) Xác định thiết diện của hình chóp cắt bởi mặt phẳng $(\\alpha)$ và tính tỉ số diện tích thiết diện so với diện tích tam giác $SBC$.",
        maxPoints: 10.0,
        sampleSolution: `1) Xác định thiết diện:
- Vì (α) // (SBC) nên các giao tuyến của (α) với các mặt phẳng chứa các cạnh của (SBC) sẽ song song với các cạnh tương ứng:
  + Trong mặt phẳng (SAB): Qua M kẻ MN // SB (N ∈ AB).
  + Trong mặt phẳng đáy (ABCD): Qua N kẻ NP // BC (P ∈ CD).
  + Trong mặt phẳng (SCD): Qua P kẻ PQ // SC (Q ∈ SD).
  + Trong mặt phẳng (SAD): Nối Q với M. Do MN // SB và NP // BC nên MQ // (SBC).
- Thiết diện cắt hình chóp là tứ giác MNPQ (hình thang do MN // PQ).

2) Tỉ số diện tích:
- Ta có SM = 2MA => AM/SA = 1/3.
- Do MN // SB nên AN/AB = AM/SA = 1/3.
- Tính tỉ số diện tích thiết diện tương ứng qua các đoạn tỉ lệ Thalès.`,
        criteria: [
          { id: "c1", step: "Bước 1", desc: "Dựng MN // SB trên mặt (SAB) với N ∈ AB", points: 2.5 },
          { id: "c2", step: "Bước 2", desc: "Dựng NP // BC trên đáy (ABCD) với P ∈ CD", points: 2.5 },
          { id: "c3", step: "Bước 3", desc: "Dựng PQ // SC trên mặt (SCD) với Q ∈ SD", points: 2.5 },
          { id: "c4", step: "Bước 4", desc: "Nối QM và kết luận hình thang thiết diện MNPQ cùng tỉ số diện tích", points: 2.5 }
        ]
      },
      {
        id: "es3",
        number: "Câu 15 (Tự luận 3)",
        title: "Ứng dụng hình lăng trụ và hình chóp cụt trong thực tế",
        question: "Một bồn chứa nước bê tông có dạng hình chóp cụt tứ giác đều với cạnh đáy lớn $a = 3\\text{ m}$, cạnh đáy nhỏ $b = 1.5\\text{ m}$ và chiều cao $h = 2\\text{ m}$.\n1) Tính thể tích nước tối đa mà bồn có thể chứa được (theo công thức thể tích hình chóp cụt $V = \\frac{1}{3}h(S_1 + S_2 + \\sqrt{S_1S_2})$).\n2) Người ta muốn đặt một vách ngăn phẳng bằng kim loại song song với hai đáy và chia chiều cao bồn thành hai phần bằng nhau. Hãy tính diện tích của tấm vách ngăn kim loại đó.",
        maxPoints: 10.0,
        sampleSolution: `1) Tính thể tích nước tối đa:
- Diện tích đáy lớn: S1 = a^2 = 3^2 = 9 m^2.
- Diện tích đáy nhỏ: S2 = b^2 = 1.5^2 = 2.25 m^2.
- Áp dụng công thức thể tích hình chóp cụt:
  V = (1/3) * h * (S1 + S2 + √(S1 * S2))
  V = (1/3) * 2 * (9 + 2.25 + √(9 * 2.25))
  V = (2/3) * (11.25 + 3 * 1.5) = (2/3) * (11.25 + 4.5) = (2/3) * 15.75 = 10.5 m^3.
- Vậy thể tích nước tối đa của bồn là 10.5 m^3 (tương đương 10,500 lít nước).

2) Tính diện tích tấm vách ngăn kim loại:
- Tấm vách ngăn song song với hai đáy và chia đôi chiều cao nên cạnh hình vuông của vách ngăn là đường trung bình của hình thang mặt bên:
  x = (a + b) / 2 = (3 + 1.5) / 2 = 2.25 m.
- Diện tích của tấm vách ngăn hình vuông là:
  S_vach = x^2 = 2.25^2 = 5.0625 m^2.`,
        criteria: [
          { id: "c1", step: "Bước 1", desc: "Tính đúng diện tích hai đáy S1 = 9 m² và S2 = 2.25 m²", points: 2.5 },
          { id: "c2", step: "Bước 2", desc: "Áp dụng công thức thể tích hình chóp cụt tính ra V = 10.5 m³", points: 2.5 },
          { id: "c3", step: "Bước 3", desc: "Tính cạnh vách ngăn bằng trung bình cộng: x = (3 + 1.5)/2 = 2.25 m", points: 2.5 },
          { id: "c4", step: "Bước 4", desc: "Tính diện tích vách ngăn S = 2.25² = 5.0625 m²", points: 2.5 }
        ]
      }
    ]
  }
};

// ==========================================================================
// HÀM TẠO DỮ LIỆU ĐÁNH GIÁ CHẨN ĐOÁN THÔNG MINH CHO CÁC BÀI KHÁC
// ==========================================================================
window.generateDynamicDiagnosticAssessment = function(gradeId, chapterId, lessonId) {
  const gCurriculum = window.KNTT_CURRICULUM ? window.KNTT_CURRICULUM[gradeId] : null;
  const chapter = gCurriculum ? gCurriculum.chapters.find(c => c.id === chapterId) : null;
  const lesson = chapter ? (chapter.lessons.find(l => l.id === lessonId) || chapter.lessons[0]) : null;
  
  const lTitle = lesson ? `${lesson.number}: ${lesson.title}` : `Bài học ${lessonId}`;
  const fText = lesson && lesson.formula ? lesson.formula : "A = B";
  
  return {
    lessonId: lessonId,
    title: lTitle,
    chapterTitle: chapter ? chapter.title : "Chương trình Toán học chuẩn GDPT 2018",
    grade: gradeId || 11,
    summary: `Bộ 15 câu đánh giá chẩn đoán năng lực toàn diện cho ${lTitle} theo chuẩn ma trận GDPT 2018 (Bộ GD&ĐT).`,
    
    multipleChoice: [
      {
        id: "mc1",
        number: "Câu 1",
        level: "Nhận biết",
        question: `Cho kiến thức trọng tâm của bài học "${lTitle}". Công thức nền tảng nào sau đây là ĐÚNG?`,
        options: [
          { key: "A", text: `Áp dụng công thức cốt lõi: $${fText}$.`, isCorrect: true, errorTag: null, errorMsg: "Chính xác! Đây là công thức nền tảng chuẩn mực của bài học." },
          { key: "B", text: `Đổi dấu công thức: $-(${fText})$.`, isCorrect: false, errorTag: "ERR_SIGN", errorMsg: "Lỗi sai dấu trong công thức! Cần lưu ý quy tắc đổi dấu của biểu thức đại số / hình học." },
          { key: "C", text: `Quên điều kiện xác định của biểu thức.`, isCorrect: false, errorTag: "ERR_CONDITION", errorMsg: "Lỗi quên xét tập xác định hoặc điều kiện có nghĩa của biểu thức." },
          { key: "D", text: `Nhầm lẫn với công thức của bài học khác.`, isCorrect: false, errorTag: "ERR_CONFUSION", errorMsg: "Bạn đã nhầm lẫn với một công thức khác trong chương." }
        ],
        remedialProblem: {
          title: "Bài tập củng cố công thức cơ bản",
          question: `Nêu lại công thức cốt lõi của bài học ${lTitle}.`,
          correctAnswer: `$${fText}$`,
          tip: "Ghi nhớ: Học thuộc lòng công thức và viết lại ra nháp 3 lần để khắc sâu trí nhớ."
        }
      },
      {
        id: "mc2",
        number: "Câu 2",
        level: "Thông hiểu",
        question: `Khi vận dụng kiến thức "${lTitle}", lỗi sai nào sau đây học sinh thường mắc phải nhất?`,
        options: [
          { key: "A", text: "Quên kiểm tra điều kiện tồn tại hoặc điều kiện xác định.", isCorrect: true, errorTag: null, errorMsg: "Rất chính xác! Rất nhiều học sinh bỏ qua bước kiểm tra điều kiện dẫn đến nhận nghiệm ngoại lai hoặc kết luận sai." },
          { key: "B", text: "Vẽ hình quá to hoặc viết chữ quá cẩn thận.", isCorrect: false, errorTag: "ERR_IRRELEVANT", errorMsg: "Viết cẩn thận là thói quen tốt, không phải lỗi sai toán học." },
          { key: "C", text: "Kiểm tra lại đáp số sau khi hoàn thành bài toán.", isCorrect: false, errorTag: "ERR_IRRELEVANT", errorMsg: "Kiểm tra lại là kỹ năng rất đáng khen ngợi." },
          { key: "D", text: "Đọc kĩ giả thiết và kết luận của đề bài.", isCorrect: false, errorTag: "ERR_IRRELEVANT", errorMsg: "Đọc kĩ đề là bước bắt buộc để làm bài chính xác." }
        ],
        remedialProblem: {
          title: "Bài tập rèn luyện kỹ năng xét điều kiện",
          question: "Nêu các điều kiện cần kiểm tra trước khi biến đổi bài toán.",
          correctAnswer: "Mẫu số khác 0, biểu thức trong căn bậc hai không âm, điều kiện không đồng phẳng...",
          tip: "Mẹo nhớ: 'Tìm điều kiện trước, giải phương trình sau'."
        }
      },
      {
        id: "mc3",
        number: "Câu 3",
        level: "Thông hiểu",
        question: `Khẳng định nào sau đây là ĐÚNG khi thực hiện biến đổi liên quan đến ${lTitle}?`,
        options: [
          { key: "A", text: "Phép biến đổi tương đương luôn bảo toàn tập nghiệm / tính chất hình học khi thỏa mãn điều kiện.", isCorrect: true, errorTag: null, errorMsg: "Chính xác! Phép biến đổi tương đương giữ nguyên tập nghiệm." },
          { key: "B", text: "Có thể nhân hai vế với một biểu thức chứa ẩn mà không cần điều kiện khác 0.", isCorrect: false, errorTag: "ERR_MULTIPLY_ZERO", errorMsg: "Sai, nhân với 0 sẽ làm xuất hiện nghiệm ngoại lai." },
          { key: "C", text: "Trong hình học, mọi đường thẳng không cắt nhau đều song song.", isCorrect: false, errorTag: "ERR_SKEW", errorMsg: "Sai, trong không gian còn có trường hợp chéo nhau." },
          { key: "D", text: "Hai đại lượng tỉ lệ nghịch thì tích của chúng luôn bằng 0.", isCorrect: false, errorTag: "ERR_INVERSE", errorMsg: "Sai, tích của chúng bằng hằng số khác 0." }
        ],
        remedialProblem: {
          title: "Bài tập củng cố phép biến đổi logic",
          question: "Thế nào là hai mệnh đề tương đương trong toán học?",
          correctAnswer: "Cùng đúng hoặc cùng sai ($P \\iff Q$)",
          tip: "Mẹo nhớ: Chú ý dấu suy ra (=>) và dấu tương đương (<=>)."
        }
      },
      {
        id: "mc4",
        number: "Câu 4",
        level: "Vận dụng",
        question: `Cho bài toán vận dụng kiến thức "${lTitle}". Phát biểu nào sau đây giúp tìm ra hướng giải tối ưu?`,
        options: [
          { key: "A", text: "Phân tích giả thiết, xác định đối tượng hình học / đại số trung gian để bắc cầu.", isCorrect: true, errorTag: null, errorMsg: "Xuất sắc! Lập luận qua đối tượng trung gian là phương pháp vàng trong toán học." },
          { key: "B", text: "Đoạn thẳng nào nhìn có vẻ bằng nhau thì kết luận bằng nhau ngay.", isCorrect: false, errorTag: "ERR_INTUITION", errorMsg: "Ngộ nhận cảm tính: Hình vẽ không thể thay thế cho chứng minh logic." },
          { key: "C", text: "Bỏ qua các bước lập luận trung gian và ghi ngay đáp số.", isCorrect: false, errorTag: "ERR_SKIPPING", errorMsg: "Bỏ bước sẽ bị trừ điểm nặng trong phần tự luận." },
          { key: "D", text: "Chỉ làm bài theo cảm tính mà không dựa trên định lý.", isCorrect: false, errorTag: "ERR_INTUITION", errorMsg: "Toán học đòi hỏi tính chính xác và căn cứ định lý vững chắc." }
        ],
        remedialProblem: {
          title: "Bài tập rèn tư duy lập luận",
          question: "Nêu 3 bước giải một bài toán suy luận hình học.",
          correctAnswer: "1. Đọc giả thiết - 2. Tìm định lý liên hệ - 3. Trình bày lập luận logic",
          tip: "Luôn viết rõ 'Theo định lý...' hoặc 'Vì... nên...'."
        }
      },
      {
        id: "mc5",
        number: "Câu 5",
        level: "Vận dụng",
        question: `Trong đề thi tốt nghiệp THPT, câu hỏi phân loại liên quan đến ${lTitle} thường kết hợp với dạng toán nào?`,
        options: [
          { key: "A", text: "Bài toán thực tế tối ưu hóa, cực trị hoặc kết hợp liên môn.", isCorrect: true, errorTag: null, errorMsg: "Rất chuẩn xác! Đề thi GDPT 2018 chú trọng câu hỏi thực tiễn và bài toán phân loại đa tầng." },
          { key: "B", text: "Chỉ kiểm tra học vẹt định nghĩa đơn thuần.", isCorrect: false, errorTag: "ERR_ROTE", errorMsg: "Đề thi mới không còn câu hỏi học vẹt." },
          { key: "C", text: "Những câu hỏi đánh đố tính toán số quá lớn không mang ý nghĩa tư duy.", isCorrect: false, errorTag: "ERR_TRICK", errorMsg: "Đề thi hướng tới năng lực tư duy, không đánh đố vô nghĩa." },
          { key: "D", text: "Không bao giờ xuất hiện trong đề thi.", isCorrect: false, errorTag: "ERR_NEVER", errorMsg: "Đây là kiến thức trọng tâm chắc chắn có trong ma trận đề thi." }
        ],
        remedialProblem: {
          title: "Bài tập thực tế liên hệ",
          question: "Nêu một ứng dụng thực tiễn của bài học trong đời sống.",
          correctAnswer: "Xây dựng, kiến trúc, thiết kế kỹ thuật, đo đạc...",
          tip: "Liên hệ thực tế giúp hiểu bản chất bài học sâu sắc hơn."
        }
      }
    ],

    trueFalse: [
      {
        id: "tf1",
        number: "Câu 6",
        scenario: `Xét các khẳng định cơ bản về định nghĩa và tính chất của chủ đề "${lTitle}":`,
        items: [
          { key: "a", text: `Khái niệm và công thức cốt lõi được áp dụng chuẩn xác theo SGK GDPT 2018: $${fText}$.`, isCorrect: true, explanation: "Đúng. Đây là định lý chuẩn mực của bài học." },
          { key: "b", text: "Công thức có thể áp dụng cho mọi giá trị mà không cần bất kì điều kiện ràng buộc nào.", isCorrect: false, explanation: "Sai. Mọi công thức đều có miền xác định hoặc điều kiện hình học đi kèm." },
          { key: "c", text: "Khi áp dụng định lý vào giải toán cần ghi rõ căn cứ và các giả thiết được thỏa mãn.", isCorrect: true, explanation: "Đúng. Lập luận chặt chẽ là yêu cầu hàng đầu." },
          { key: "d", text: "Kết quả bài toán có thể là một số âm nếu đại lượng đang xét là độ dài hình học.", isCorrect: false, explanation: "Sai lầm: Độ dài hình học, khoảng cách, diện tích luôn là các số thực không âm." }
        ]
      },
      {
        id: "tf2",
        number: "Câu 7",
        scenario: `Xét các kỹ năng biến đổi và giải quyết bài toán liên quan đến "${lTitle}":`,
        items: [
          { key: "a", text: "Khi nhân hoặc chia hai vế của bất đẳng thức với một số âm, ta phải đổi chiều bất đẳng thức.", isCorrect: true, explanation: "Đúng. Quy tắc cơ bản của bất đẳng thức." },
          { key: "b", text: "Trong không gian, hai đường thẳng không cắt nhau thì bắt buộc phải song song.", isCorrect: false, explanation: "Sai. Hai đường thẳng không cắt nhau trong không gian có thể chéo nhau." },
          { key: "c", text: "Phương pháp tọa độ hóa hoặc vẽ hình phụ giúp bài toán trở nên trực quan hơn.", isCorrect: true, explanation: "Đúng. Vẽ hình phụ hoặc gắn trục tọa độ là phương pháp giải toán hiệu quả." },
          { key: "d", text: "Tất cả các bài toán đều chỉ có duy nhất một cách giải.", isCorrect: false, explanation: "Sai. Một bài toán thường có nhiều cách giải (hình học thuần túy, vectơ, tọa độ, lượng giác...)." }
        ]
      },
      {
        id: "tf3",
        number: "Câu 8",
        scenario: `Đánh giá các kết luận suy luận logic sau đây:`,
        items: [
          { key: "a", text: "Nếu $A \\implies B$ đúng thì mệnh đề đảo $B \\implies A$ cũng luôn luôn đúng.", isCorrect: false, explanation: "Sai lầm logic cơ bản: Mệnh đề đảo chưa chắc đúng (chỉ đúng khi là điều kiện cần và đủ)." },
          { key: "b", text: "Mệnh đề phản đảo 'Không có $B$ thì không có $A$' luôn có cùng giá trị chân lý với mệnh đề thuận $A \\implies B$.", isCorrect: true, explanation: "Đúng. Đây là quy tắc logic tương đương của mệnh đề phản đảo." },
          { key: "c", text: "Một phản ví dụ cụ thể đủ để chứng minh một mệnh đề tổng quát là sai.", isCorrect: true, explanation: "Đúng. Phương pháp dùng phản ví dụ để bác bỏ mệnh đề." },
          { key: "d", text: "Kiểm tra 3 trường hợp đúng thì có thể kết luận mệnh đề đúng cho vô số trường hợp.", isCorrect: false, explanation: "Sai lầm quy nạp không hoàn toàn: Thử vài số không thể thay thế cho chứng minh tổng quát." }
        ]
      }
    ],

    shortAnswer: [
      {
        id: "sa1",
        number: "Câu 9",
        question: `Cho bài toán kiểm tra độ hiểu sâu về ${lTitle}. Số lượng các trường hợp cơ bản cần phân loại là bao nhiêu?`,
        correctAnswer: "2",
        acceptedAnswers: ["2", "hai", "2 trường hợp"],
        explanation: "Thường phân làm 2 trường hợp chính (tồn tại nghiệm hoặc vô nghiệm / đồng phẳng hoặc chéo nhau).",
        tip: "Luôn kiểm tra đủ tất cả các nhánh trường hợp."
      },
      {
        id: "sa2",
        number: "Câu 10",
        question: `Tính giá trị của biểu thức khi tham số đạt giá trị nhỏ nhất trong điều kiện bài toán.`,
        correctAnswer: "1",
        acceptedAnswers: ["1", "một", "1.0"],
        explanation: "Giá trị tối thiểu đạt được tại điểm biên thỏa mãn điều kiện.",
        tip: "Khảo sát hàm số hoặc đánh giá bất đẳng thức."
      },
      {
        id: "sa3",
        number: "Câu 11",
        question: `Tìm số nghiệm thực phân biệt của bài toán khi xét trong khoảng cơ bản.`,
        correctAnswer: "2",
        acceptedAnswers: ["2", "hai", "2 nghiệm"],
        explanation: "Phương trình bậc hai hoặc hệ phương trình có đúng 2 nghiệm phân biệt thỏa mãn điều kiện.",
        tip: "Nhớ đối chiếu nghiệm tìm được với điều kiện ban đầu."
      },
      {
        id: "sa4",
        number: "Câu 12",
        question: `Xác định số lượng đỉnh hoặc mặt phẳng liên quan trong mô hình hình học chuẩn.`,
        correctAnswer: "4",
        acceptedAnswers: ["4", "bốn", "4 mặt"],
        explanation: "Mô hình tứ diện cơ bản có 4 đỉnh và 4 mặt.",
        tip: "Đếm cẩn thận từng yếu tố hình học."
      }
    ],

    essay: [
      {
        id: "es1",
        number: "Câu 13 (Tự luận 1)",
        title: `Bài toán tự luận cơ bản về ${lTitle}`,
        question: `Cho bài toán tự luận vận dụng kiến thức nền tảng của "${lTitle}".\n1) Nêu rõ giả thiết, điều kiện xác định và công thức áp dụng.\n2) Trình bày các bước biến đổi chi tiết để tìm kết quả cuối cùng.`,
        maxPoints: 10.0,
        sampleSolution: `1) Thiết lập điều kiện và công thức:
- Điều kiện xác định được thỏa mãn đầy đủ.
- Áp dụng định lí / công thức cốt lõi của bài học: ${fText}.

2) Các bước giải chi tiết:
- Bước 1: Biến đổi vế phức tạp về dạng đơn giản.
- Bước 2: Rút gọn biểu thức và giải phương trình / chứng minh quan hệ hình học.
- Bước 3: Đối chiếu với điều kiện ban đầu và kết luận đáp số chính xác.`,
        criteria: [
          { id: "c1", step: "Bước 1", desc: "Nêu đúng điều kiện xác định và công thức nền tảng", points: 2.5 },
          { id: "c2", step: "Bước 2", desc: "Thực hiện biến đổi logic bước thứ nhất", points: 2.5 },
          { id: "c3", step: "Bước 3", desc: "Tính toán rút gọn chính xác", points: 2.5 },
          { id: "c4", step: "Bước 4", desc: "Đối chiếu điều kiện và kết luận đáp số", points: 2.5 }
        ]
      },
      {
        id: "es2",
        number: "Câu 14 (Tự luận 2)",
        title: `Bài toán suy luận nâng cao về ${lTitle}`,
        question: `Cho bài toán hình học / đại số suy luận đa bước.\n1) Chứng minh đẳng thức hoặc quan hệ vị trí tương đối.\n2) Biện luận kết quả theo tham số đã cho.`,
        maxPoints: 10.0,
        sampleSolution: `1) Chứng minh quan hệ:
- Phân tích đề bài thành hai nhánh lập luận.
- Sử dụng tính chất bắc cầu và các định lý đã học trong chương.

2) Biện luận:
- Xét các trường hợp của tham số.
- Kết luận tập hợp giá trị thỏa mãn bài toán.`,
        criteria: [
          { id: "c1", step: "Bước 1", desc: "Vẽ hình / đặt ẩn phụ chính xác", points: 2.5 },
          { id: "c2", step: "Bước 2", desc: "Chứng minh phần 1 đầy đủ lập luận", points: 2.5 },
          { id: "c3", step: "Bước 3", desc: "Biện luận chặt chẽ các trường hợp", points: 2.5 },
          { id: "c4", step: "Bước 4", desc: "Tổng hợp và kết luận hoàn chỉnh", points: 2.5 }
        ]
      },
      {
        id: "es3",
        number: "Câu 15 (Tự luận 3)",
        title: `Ứng dụng thực tiễn & Tối ưu hóa`,
        question: `Mô hình hóa một tình huống thực tế liên quan đến ${lTitle}.\n1) Thiết lập hàm số hoặc hệ thức biểu diễn đại lượng cần tối ưu.\n2) Tìm giá trị lớn nhất, nhỏ nhất hoặc phương án tối ưu nhất.`,
        maxPoints: 10.0,
        sampleSolution: `1) Mô hình hóa bài toán:
- Gọi x là biến số đại lượng thực tế (kèm đơn vị và điều kiện).
- Lập biểu thức f(x) thể hiện chi phí / thể tích / diện tích cần tối ưu.

2) Khảo sát và tối ưu:
- Khảo sát hàm số f(x) hoặc áp dụng bất đẳng thức Cauchy / đạo hàm.
- Tìm điểm đạt cực trị x_opt.
- Kết luận ý nghĩa thực tiễn của bài toán.`,
        criteria: [
          { id: "c1", step: "Bước 1", desc: "Gọi ẩn và đặt điều kiện thực tế chính xác", points: 2.5 },
          { id: "c2", step: "Bước 2", desc: "Thiết lập đúng biểu thức hàm mục tiêu f(x)", points: 2.5 },
          { id: "c3", step: "Bước 3", desc: "Tìm cực trị bằng đạo hàm hoặc bất đẳng thức", points: 2.5 },
          { id: "c4", step: "Bước 4", desc: "Chỉ rõ điều kiện dấu bằng và kết luận thực tế", points: 2.5 }
        ]
      }
    ]
  };
};

// ==========================================================================
// HÀM LẤY BỘ ĐÁNH GIÁ CHẨN ĐOÁN CHO BÀI HỌC BẤT KỲ
// ==========================================================================
window.getDiagnosticAssessment = function(gradeId, chapterId, lessonId) {
  if (window.DIAGNOSTIC_ASSESSMENT_DB && window.DIAGNOSTIC_ASSESSMENT_DB[lessonId]) {
    return window.DIAGNOSTIC_ASSESSMENT_DB[lessonId];
  }
  return window.generateDynamicDiagnosticAssessment(gradeId, chapterId, lessonId);
};
