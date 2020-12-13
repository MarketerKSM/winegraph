const QUESTION_LENGTH = [7, 7, 6, 5];

const QUESTION_DICT = {
    Q00001: {
        text: '이번 연말 꼭 하고 싶은 것은 무엇인가요?',
        answers: ['A00001', 'A00034', 'A00067', 'A00100'],
    },
    Q00002: {
        text: '사랑하는 연인과의 연말 데이트를 특별하게 보내고 싶은 당신, 무엇을 준비하시겠습니까?',
        answers: ['A00002', 'A00018'],
    },
    Q00003: {
        text: '분위기 좋은 레스토랑에 도착했습니다. 어떤 음식을 주문하시겠습니까?',
        answers: ['A00003', 'A00004', 'A00005'],
    },
    Q00004: {
        text: '연말 행사로 "생과일 에이드"가 서비스로 나온다고 합니다. 어떤 음료를 선택하시겠습니까?',
        answers: ['A00006', 'A00007', 'A00008'],
    },
    Q00005: {
        text:
            '음식을 한 입 먹는 순간, 음식이 살짝 싱거운 것을 느꼈습니다. 소금은 웨이터에게 따로 요청해야합니다. 어떻게 하시겠습니까?',
        answers: ['A00009', 'A00010', 'A00011'],
    },
    Q00006: {
        text: '즐거운 식사 후, 커피를 마시러 잠시 카페에 왔습니다. 어떤 음료를 주문하시겠습니까?.',
        answers: ['A00012', 'A00013', 'A00014'],
    },
    Q00007: {
        text: '디저트 배는 따로 있으니, 커피와 함께 케이크를 디저트로 주문하려고 합니다. 당신의 선택은?',
        answers: ['A00015', 'A00016', 'A00017'],
    },
    Q00008: {
        text: '아늑한 호텔에 도착했습니다. 어느새 저녁 시간이 되어 배가 고픕니다. 어떤 음식을 드시겠습니까?',
        answers: ['A00019', 'A00020', 'A00021'],
    },
    Q00009: {
        text: '음식을 준비하면서 식사와 함께 마실 음료를 찾기 위해 냉장고를 열었습니다. 아래 음료 중, 당신의 선택은?',
        answers: ['A00022', 'A00023', 'A00024'],
    },
    Q00010: {
        text:
            '음식의 한 입을 먹는 순간 음식이 살짝 싱거운 것을 느꼈습니다. 소금은 주방으로 가서 찾아야 합니다. 어떻게 하시겠습니까?',
        answers: ['A00025', 'A00026', 'A00027'],
    },
    Q00011: {
        text: '즐거운 식사 후, 커피를 잠시 마시러 카페에 왔습니다. 어떤 음료를 주문하시겠습니까?',
        answers: ['A00028', 'A00029', 'A00030'],
    },
    Q00012: {
        text: '디저트 배는 따로 있으니, 커피와 함께 케이크를 디저트로 주문하려고 합니다. 당신의 선택은?',
        answers: ['A00031', 'A00032', 'A00033'],
    },
    Q00013: {
        text: '사랑하는 가족과의 행복한 연말을 보내고 싶은 당신. 무엇을 준비하시겠습니까?',
        answers: ['A00035', 'A00051'],
    },
    Q00014: {
        text: '분위기 좋은 레스토랑에 도착했습니다. 어떤 음식을 주문하시겠습니까?',
        answers: ['A00036', 'A00037', 'A00038'],
    },
    Q00015: {
        text: '연말 행사로 "생과일 에이드"가 서비스로 나온다고 합니다. 어떤 음료를 선택하시겠습니까?',
        answers: ['A00039', 'A00040', 'A00041'],
    },
    Q00016: {
        text:
            '음식을 한 입 먹는 순간, 음식이 살짝 싱거운 것을 느꼈습니다. 소금은 웨이터에게 따로 요청해야합니다. 어떻게 하시겠습니까?',
        answers: ['A00042', 'A00043', 'A00044'],
    },
    Q00017: {
        text: '즐거운 식사 후, 커피를 마시러 잠시 카페에 왔습니다. 어떤 음료를 주문하시겠습니까?.',
        answers: ['A00045', 'A00046', 'A00047'],
    },
    Q00018: {
        text: '디저트 배는 따로 있으니, 커피와 함께 케이크를 디저트로 주문하려고 합니다. 당신의 선택은?',
        answers: ['A00048', 'A00049', 'A00050'],
    },
    Q00019: {
        text: '함께 하고픈 가족들이 모두 모였습니다. 어떤 음식을 준비하시겠습니까?',
        answers: ['A00052', 'A00053', 'A00054'],
    },
    Q00020: {
        text: '음식을 준비하면서 식사와 함께 마실 음료를 찾기 위해 냉장고를 열었습니다. 아래 음료 중, 당신의 선택은?',
        answers: ['A00055', 'A00056', 'A00057'],
    },
    Q00021: {
        text:
            '음식의 한 입을 먹는 순간 음식이 살짝 싱거운 것을 느꼈습니다. 소금은 주방으로 가서 찾아야 합니다. 어떻게 하시겠습니까?',
        answers: ['A00058', 'A00059', 'A00060'],
    },
    Q00022: {
        text: '즐거운 식사 후, 커피를 잠시 마시러 카페에 왔습니다. 어떤 음료를 주문하시겠습니까?',
        answers: ['A00061', 'A00062', 'A00063'],
    },
    Q00023: {
        text: '디저트 배는 따로 있으니, 커피와 함께 케이크를 디저트로 주문하려고 합니다. 당신의 선택은?',
        answers: ['A00064', 'A00065', 'A00066'],
    },
    Q00024: {
        text: '친구들과 신나는 연말을 보내고 싶은 당신. 친구들과 무엇을 하시겠습니까?',
        answers: ['A00068', 'A00084'],
    },
    Q00025: {
        text: '친구들이 모두 모였습니다. 어떤 음식을 먹으러 가시겠습니까?',
        answers: ['A00069', 'A00070', 'A00071'],
    },
    Q00026: {
        text: '연말 행사로 "생과일 에이드"가 서비스로 나온다고 합니다. 어떤 음료를 선택하시겠습니까?',
        answers: ['A00072', 'A00073', 'A00074'],
    },
    Q00027: {
        text:
            '음식을 한 입 먹는 순간, 음식이 살짝 싱거운 것을 느꼈습니다. 소금은 종업원에게 따로 요청해야합니다. 어떻게 하시겠습니까?',
        answers: ['A00075', 'A00076', 'A00077'],
    },
    Q00028: {
        text: '즐거운 식사 후, 커피를 마시러 잠시 카페에 왔습니다. 어떤 음료를 주문하시겠습니까?.',
        answers: ['A00078', 'A00079', 'A00080'],
    },
    Q00029: {
        text: '디저트 배는 따로 있으니, 커피와 함께 케이크를 디저트로 주문하려고 합니다. 당신의 선택은?',
        answers: ['A00081', 'A00082', 'A00083'],
    },
    Q00030: {
        text:
            '파티룸에 친구들이 모두 모였습니다. 식사 시간이 다 되어 음식을 배달하려 합니다. 당신은 어떤 음식을 주문하시겠습니까?',
        answers: ['A00085', 'A00086', 'A00087'],
    },
    Q00031: {
        text: '음식을 준비하면서 식사와 함께 마실 음료를 찾기 위해 냉장고를 열었습니다. 아래 음료 중, 당신의 선택은?',
        answers: ['A00088', 'A00089', 'A00090'],
    },
    Q00032: {
        text:
            '음식의 한 입을 먹는 순간 음식이 살짝 싱거운 것을 느꼈습니다. 소금은 주방으로 가서 찾아야 합니다. 어떻게 하시겠습니까?',
        answers: ['A00091', 'A00092', 'A00093'],
    },
    Q00033: {
        text: '즐거운 식사 후, 커피를 잠시 마시러 카페에 왔습니다. 어떤 음료를 주문하시겠습니까?',
        answers: ['A00094', 'A00095', 'A00096'],
    },
    Q00034: {
        text: '디저트 배는 따로 있으니, 커피와 함께 케이크를 디저트로 주문하려고 합니다. 당신의 선택은?',
        answers: ['A00097', 'A00098', 'A00099'],
    },
    Q00035: {
        text: '배달 앱 단골 식당에서 음식을 시키려합니다. 어떤 음식을 시키시겠습니까?',
        answers: ['A00101', 'A00102', 'A00103'],
    },
    Q00036: {
        text: '음식을 준비하면서 식사와 함께 마실 음료를 찾기 위해 냉장고를 열었습니다. 아래 음료 중, 당신의 선택은?',
        answers: ['A00104', 'A00105', 'A00106'],
    },
    Q00037: {
        text:
            '음식의 한 입을 먹는 순간 음식이 살짝 싱거운 것을 느꼈습니다. 소금은 주방으로 가서 찾아야 합니다. 어떻게 하시겠습니까?',
        answers: ['A00107', 'A00108', 'A00109'],
    },
    Q00038: {
        text: '즐거운 식사 후, 커피를 잠시 마시러 카페에 왔습니다. 어떤 음료를 주문하시겠습니까?',
        answers: ['A00110', 'A00111', 'A00112'],
    },
    Q00039: {
        text: '디저트 배는 따로 있으니, 커피와 함께 케이크를 디저트로 주문하려고 합니다. 당신의 선택은?',
        answers: ['A00113', 'A00114', 'A00115'],
    },
};

const ANSWER_DICT = {
    A00001: {
        text: '연인과 데이트',
        next: 'Q00002',
    },
    A00002: {
        text: '연말엔 역시 레스토랑에서 식사지!',
        next: 'Q00003',
    },
    A00003: {
        text: '고기',
        next: 'Q00004',
    },
    A00004: {
        text: '해산물',
        next: 'Q00004',
    },
    A00005: {
        text: '치킨',
        next: 'Q00004',
    },
    A00006: {
        text: '새콤한 레몬 에이드',
        next: 'Q00005',
    },
    A00007: {
        text: '상콤 달콤한 오렌지 에이드',
        next: 'Q00005',
    },
    A00008: {
        text: '신 것은 별로라 다른 음료로...',
        next: 'Q00005',
    },
    A00009: {
        text: '반드시 웨이터에게 소금을 요청한다.',
        next: 'Q00006',
    },
    A00010: {
        text: '귀찮으니 그냥 먹는다.',
        next: 'Q00006',
    },
    A00011: {
        text: '싱거운 것이 좋아, 그냥 먹는다.',
        next: 'Q00006',
    },
    A00012: {
        text: '아메리카노',
        next: 'Q00007',
    },
    A00013: {
        text: '카페라떼 또는 카푸치노',
        next: 'Q00007',
    },
    A00014: {
        text: '커피를 안 좋아한다.',
        next: 'Q00007',
    },
    A00015: {
        text: '베리류의 생과일이 가득 올라간 케이크',
        next: null,
    },
    A00016: {
        text: '베리류 잼이 들어간 케이크',
        next: null,
    },
    A00017: {
        text: '베리류는 별로라... 다른 케이크는 없나요?',
        next: null,
    },
    A00018: {
        text: '이 시국에 무슨 밖이야! 아늑하게 호캉스다.',
        next: 'Q00008',
    },
    A00019: {
        text: '고기',
        next: 'Q00009',
    },
    A00020: {
        text: '해산물',
        next: 'Q00009',
    },
    A00021: {
        text: '치킨',
        next: 'Q00009',
    },
    A00022: {
        text: '새콤한 레몬에이드',
        next: 'Q00010',
    },
    A00023: {
        text: '상콤 달콤한 오렌지에이드',
        next: 'Q00010',
    },
    A00024: {
        text: '신 음료는 별로라 다른 음료를 찾는다.',
        next: 'Q00010',
    },
    A00025: {
        text: '귀찮더라도 반드시 소금을 친다.',
        next: 'Q00011',
    },
    A00026: {
        text: '귀찮으니 그냥 먹는다.',
        next: 'Q00011',
    },
    A00027: {
        text: '싱거운 것도 좋아, 그냥 먹는다.',
        next: 'Q00011',
    },
    A00028: {
        text: '아메리카노',
        next: 'Q00012',
    },
    A00029: {
        text: '카페라떼 또는 카푸치노',
        next: 'Q00012',
    },
    A00030: {
        text: '커피를 안 좋아한다.',
        next: 'Q00012',
    },
    A00031: {
        text: '베리류의 생과일이 가득 올라간 케이크',
        next: null,
    },
    A00032: {
        text: '베리류 잼이 들어간 케이크',
        next: null,
    },
    A00033: {
        text: '베리류는 별로라... 다른 케이크는 없나요?',
        next: null,
    },
    A00034: {
        text: '가족과 저녁식사',
        next: 'Q00013',
    },
    A00035: {
        text: '연말엔 역시 레스토랑에서 식사지!',
        next: 'Q00014',
    },
    A00036: {
        text: '고기',
        next: 'Q00015',
    },
    A00037: {
        text: '해산물',
        next: 'Q00015',
    },
    A00038: {
        text: '치킨',
        next: 'Q00015',
    },
    A00039: {
        text: '새콤한 레몬 에이드',
        next: 'Q00016',
    },
    A00040: {
        text: '상콤 달콤한 오렌지 에이드',
        next: 'Q00016',
    },
    A00041: {
        text: '신 것은 별로라 다른 음료로...',
        next: 'Q00016',
    },
    A00042: {
        text: '반드시 웨이터에게 소금을 요청한다.',
        next: 'Q00017',
    },
    A00043: {
        text: '귀찮으니 그냥 먹는다.',
        next: 'Q00017',
    },
    A00044: {
        text: '싱거운 것이 좋아, 그냥 먹는다.',
        next: 'Q00017',
    },
    A00045: {
        text: '아메리카노',
        next: 'Q00018',
    },
    A00046: {
        text: '카페라떼 또는 카푸치노',
        next: 'Q00018',
    },
    A00047: {
        text: '커피를 안 좋아한다.',
        next: 'Q00018',
    },
    A00048: {
        text: '베리류의 생과일이 가득 올라간 케이크',
        next: null,
    },
    A00049: {
        text: '베리류 잼이 들어간 케이크',
        next: null,
    },
    A00050: {
        text: '베리류는 별로라... 다른 케이크는 없나요?',
        next: null,
    },
    A00051: {
        text: '이 시국에 무슨 밖이야 집에서 저녁 식사 파티다!',
        next: 'Q00019',
    },
    A00052: {
        text: '고기',
        next: 'Q00020',
    },
    A00053: {
        text: '해산물',
        next: 'Q00020',
    },
    A00054: {
        text: '치킨',
        next: 'Q00020',
    },
    A00055: {
        text: '새콤한 레몬에이드',
        next: 'Q00021',
    },
    A00056: {
        text: '상콤 달콤한 오렌지에이드',
        next: 'Q00021',
    },
    A00057: {
        text: '신 음료는 별로라 다른 음료를 찾는다.',
        next: 'Q00021',
    },
    A00058: {
        text: '귀찮더라도 반드시 소금을 친다.',
        next: 'Q00022',
    },
    A00059: {
        text: '귀찮으니 그냥 먹는다.',
        next: 'Q00022',
    },
    A00060: {
        text: '싱거운 것도 좋아, 그냥 먹는다.',
        next: 'Q00022',
    },
    A00061: {
        text: '아메리카노',
        next: 'Q00023',
    },
    A00062: {
        text: '카페라떼 또는 카푸치노',
        next: 'Q00023',
    },
    A00063: {
        text: '커피를 안 좋아한다.',
        next: 'Q00023',
    },
    A00064: {
        text: '베리류의 생과일이 가득 올라간 케이크',
        next: null,
    },
    A00065: {
        text: '베리류 잼이 들어간 케이크',
        next: null,
    },
    A00066: {
        text: '베리류는 별로라... 다른 케이크는 없나요?',
        next: null,
    },
    A00067: {
        text: '친구들과 연말 파티',
        next: 'Q00024',
    },
    A00068: {
        text: '그래도 연말인데... 음식점에서 한잔 해야지!',
        next: 'Q00025',
    },
    A00069: {
        text: '고기',
        next: 'Q00026',
    },
    A00070: {
        text: '해산물',
        next: 'Q00026',
    },
    A00071: {
        text: '치킨',
        next: 'Q00026',
    },
    A00072: {
        text: '새콤한 레몬 에이드',
        next: 'Q00027',
    },
    A00073: {
        text: '상콤 달콤한 오렌지 에이드',
        next: 'Q00027',
    },
    A00074: {
        text: '신 것은 별로라 다른 음료로...',
        next: 'Q00027',
    },
    A00075: {
        text: '반드시 종업원에게 소금을 요청한다.',
        next: 'Q00028',
    },
    A00076: {
        text: '귀찮으니 그냥 먹는다.',
        next: 'Q00028',
    },
    A00077: {
        text: '싱거운 것이 좋아, 그냥 먹는다.',
        next: 'Q00028',
    },
    A00078: {
        text: '아메리카노',
        next: 'Q00029',
    },
    A00079: {
        text: '카페라떼 또는 카푸치노',
        next: 'Q00029',
    },
    A00080: {
        text: '커피를 안 좋아한다.',
        next: 'Q00029',
    },
    A00081: {
        text: '베리류의 생과일이 가득 올라간 케이크',
        next: null,
    },
    A00082: {
        text: '베리류 잼이 들어간 케이크',
        next: null,
    },
    A00083: {
        text: '베리류는 별로라... 다른 케이크는 없나요?',
        next: null,
    },
    A00084: {
        text: '이 시국에 무슨 밖이야! 파티룸 잡고 실내에서 놀자!',
        next: 'Q00030',
    },
    A00085: {
        text: '고기',
        next: 'Q00031',
    },
    A00086: {
        text: '해산물',
        next: 'Q00031',
    },
    A00087: {
        text: '치킨',
        next: 'Q00031',
    },
    A00088: {
        text: '새콤한 레몬에이드',
        next: 'Q00032',
    },
    A00089: {
        text: '상콤 달콤한 오렌지에이드',
        next: 'Q00032',
    },
    A00090: {
        text: '신 음료는 별로라 다른 음료를 찾는다.',
        next: 'Q00032',
    },
    A00091: {
        text: '귀찮더라도 반드시 소금을 친다.',
        next: 'Q00033',
    },
    A00092: {
        text: '귀찮으니 그냥 먹는다.',
        next: 'Q00033',
    },
    A00093: {
        text: '싱거운 것도 좋아, 그냥 먹는다.',
        next: 'Q00033',
    },
    A00094: {
        text: '아메리카노',
        next: 'Q00034',
    },
    A00095: {
        text: '카페라떼 또는 카푸치노',
        next: 'Q00034',
    },
    A00096: {
        text: '커피를 안 좋아한다.',
        next: 'Q00034',
    },
    A00097: {
        text: '베리류의 생과일이 가득 올라간 케이크',
        next: null,
    },
    A00098: {
        text: '베리류 잼이 들어간 케이크',
        next: null,
    },
    A00099: {
        text: '베리류는 별로라... 다른 케이크는 없나요?',
        next: null,
    },
    A00100: {
        text: '편안하게 집에서 혼술',
        next: 'Q00035',
    },
    A00101: {
        text: '고기',
        next: 'Q00036',
    },
    A00102: {
        text: '해산물',
        next: 'Q00036',
    },
    A00103: {
        text: '치킨',
        next: 'Q00036',
    },
    A00104: {
        text: '새콤한 레몬에이드',
        next: 'Q00037',
    },
    A00105: {
        text: '상콤 달콤한 오렌지에이드',
        next: 'Q00037',
    },
    A00106: {
        text: '신 음료는 별로라 다른 음료를 찾는다.',
        next: 'Q00037',
    },
    A00107: {
        text: '귀찮더라도 반드시 소금을 친다.',
        next: 'Q00038',
    },
    A00108: {
        text: '귀찮으니 그냥 먹는다.',
        next: 'Q00038',
    },
    A00109: {
        text: '싱거운 것도 좋아, 그냥 먹는다.',
        next: 'Q00038',
    },
    A00110: {
        text: '아메리카노',
        next: 'Q00039',
    },
    A00111: {
        text: '카페라떼 또는 카푸치노',
        next: 'Q00039',
    },
    A00112: {
        text: '커피를 안 좋아한다.',
        next: 'Q00039',
    },
    A00113: {
        text: '베리류의 생과일이 가득 올라간 케이크',
        next: null,
    },
    A00114: {
        text: '베리류 잼이 들어간 케이크',
        next: null,
    },
    A00115: {
        text: '베리류는 별로라... 다른 케이크는 없나요?',
        next: null,
    },
};

window.addEventListener('load', function () {
    const current = {
        number: 1,
        id: 'Q00001',
    };
    const selected = [];
    getCurrentQA(current, 0, selected);
});

function removeAllChildren(element) {
    while (element.childNodes.length > 0) {
        element.firstChild.remove();
    }
}

function getCurrentQA(current, length, selected) {
    console.log(current.id);
    // document.querySelector('img.main-image').setAttribute('src', QUESTION_DICT[current.id].img);
    document.querySelector('div.question-number').innerText = 'Q' + current.number + '.';
    document.querySelector('div.question').innerText = QUESTION_DICT[current.id].text;

    const buttonWrapper = document.querySelector('div.button-wrapper');
    removeAllChildren(buttonWrapper);

    console.log(QUESTION_DICT[current.id].answers);
    for (const answer of QUESTION_DICT[current.id].answers) {
        const button = document.createElement('button');
        button.innerText = ANSWER_DICT[answer].text;
        button.setAttribute('data-id', answer);
        button.addEventListener('click', function (e) {
            if (length === 0) {
                const index = Array.from(buttonWrapper.childNodes).indexOf(e.target);
                length = QUESTION_LENGTH[index];
            }
            const id = e.target.getAttribute('data-id');
            current.number++;
            current.id = ANSWER_DICT[id].next;
            selected.push(ANSWER_DICT[id].text);
            if (current.id === null) {
                alert(selected.join('\n'));
                window.location.reload();
                // TODO: REST API communication (need to send 'selected')
            } else {
                getCurrentQA(current, length, selected);
            }
        });
        buttonWrapper.appendChild(button);
    }

    if (length === 0) {
        document.querySelector('div.count > span.current').innerText = '1';
        document.querySelector('div.count > span.total').innerText = '?';
        document.querySelector('div.progress-inner').style.width = '0px';
    } else {
        document.querySelector('div.count > span.current').innerText = current.number;
        document.querySelector('div.count > span.total').innerText = length;
        const maxWidth = document.querySelector('div.progress').clientWidth;
        const curWidth = ((current.number - 1) * maxWidth) / (length - 1);
        document.querySelector('div.progress-inner').style.width = curWidth + 'px';
    }
}
