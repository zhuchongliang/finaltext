import Mock from 'mockjs'

let list = [];
const COUNT = 10;
const DETAIL_COUNT = 5;

let shops = [
  {
    imageArr: [
      {
        id: 1,
        image: "https://cdn.poizon.com/source-img/origin-img/20201205/b9b4c1ae79704617ae76125f76ad09b7.jpg?x-oss-process=image/format,webp"
      },
      {
        id: 2,
        image: "https://cdn.poizon.com/source-img/origin-img/20201205/13f1e841c2ca48008cbbd8396b4386ac.jpg?x-oss-process=image/format,webp"
      },
      {
        id: 3,
        image: "https://cdn.poizon.com/pro-img/20201016/a5e7e6b2a99f493c96af0d351c9977d5.png?x-oss-process=image/format,webp"
      },
      {
        id: 4,
        image: "https://cdn.poizon.com/pro-img/20201016/7a00db74eb6949e09808466e760042cb.png?x-oss-process=image/format,webp"
      },
      {
        id: 5,
        image: "https://cdn.poizon.com/pro-img/20201016/a87e84ec35744695a87ee7ff504d991d.png?x-oss-process=image/format,webp"
      }
    ],
    type: "clothes",
    image: "https://cdn.poizon.com/source-img/origin-img/20201205/b9b4c1ae79704617ae76125f76ad09b7.jpg?x-oss-process=image/format,webp",
    id: 0,
    clothesSize: ["XS","S","M","L","XL","XXL","XXS"],
    title: "【郭聪明同款】Corade 大恐龙短袖T恤 情侣款",
    price: 139.0,
    purchaseNum: Mock.mock('@integer(1000, 500000)'),
  },
  {
    imageArr: [
      {
        id: 1,
        image: "https://cdn.poizon.com/pro-img/origin-img/20210715/74ecf57107eb4d53a51ba9172e55ab7d.jpg?x-oss-process=image/format,webp"
      },
      {
        id: 2,
        image: "https://cdn.poizon.com/pro-img/origin-img/20210715/74ecf57107eb4d53a51ba9172e55ab7d.jpg"
      },
      {
        id: 3,
        image: "https://cdn.poizon.com/pro-img/origin-img/20210717/c465a21fe2734d4eaf217b8215836a4f.jpg"
      },
      {
        id: 4,
        image: "https://cdn.poizon.com/pro-img/origin-img/20210717/d154994a2bc5445b862257548c6dc4ba.jpg"
      },
      {
        id: 5,
        image: "https://cdn.poizon.com/pro-img/origin-img/20210717/c465a21fe2734d4eaf217b8215836a4f.jpg"
      }
    ],
    image: "https://cdn.poizon.com/pro-img/origin-img/20210715/74ecf57107eb4d53a51ba9172e55ab7d.jpg?x-oss-process=image/resize,m_lfit,w_300/format,webp",
    id: 1,
    type: "cosmetic",
    clothesSize: ["XS","S","M","L","XL","XXL","XXS"],
    title: "【新年礼物】SK-II 神仙水精华护肤套装 ",
    price: 419.0,
    purchaseNum: Mock.mock('@integer(1000, 500000)'),
  },
  {
    imageArr: [
      {
        id: 1,
        image: "https://cdn.poizon.com/source-img/origin-img/20201204/118c903574244c5ab99d5b758eb842fd.jpg?x-oss-process=image/format,webp",
      },
      {
        id: 2,
        image: "https://cdn.poizon.com/source-img/origin-img/20201225/eb85cbb7266a41019388ae3b539c473c.jpg?x-oss-process=image/format,webp",
      },
      {
        id: 3,
        image: "https://cdn.poizon.com/source-img/origin-img/20201225/14b1945229504000ae26bccb03cb9f38.jpg?x-oss-process=image/format,webp"
      },
      {
        id: 4,
        image: "https://cdn.poizon.com/pro-img/20201218/13763580be1b4dd6bc2b24954300023a.jpg?x-oss-process=image/format,webp"
      },
      {
        id: 5,
        image: "https://cdn.poizon.com/pro-img/20201218/d68dd4ea70b247658cab76ad758b5cdc.jpg?x-oss-process=image/format,webp"
      }
    ],
    image: "https://cdn.poizon.com/source-img/origin-img/20201224/503e2864a66f4bd0b2faea6e882ab4d6.jpg?x-oss-process=image/resize,m_lfit,w_300/format,webp",
    id: 2,
    type: "watches",
    clothesSize: ["XS","S","M","L","XL","XXL","XXS"],
    title: "【新年礼物】CASIO 卡西欧 BABY-G",
    price: 329.0,
    purchaseNum: Mock.mock('@integer(1000, 500000)'),
  },
  {
    imageArr: [
      {
        id: 1,
        image: "https://cdn.poizon.com/source-img/origin-img/20201225/4a194f476de947efbe65d19510a52f6c.jpg?x-oss-process=image/format,webp"
      },
      {
        id: 2,
        image: "https://cdn.poizon.com/source-img/origin-img/20201225/3bc52a9ca28b452795787c62ece42130.jpg?x-oss-process=image/format,webp"
      },
      {
        id: 3,
        image: "https://cdn.poizon.com/source-img/origin-img/20201225/ef8139fe25544c888852d70428d38186.jpg?x-oss-process=image/format,webp"
      },
      {
        id: 4,
        image: "https://cdn.poizon.com/source-img/origin-img/20201225/8e0fbd5371204b5e87df54deab6d82d0.jpg?x-oss-process=image/format,webp"
      },
      {
        id: 5,
        image: "https://cdn.poizon.com/source-img/origin-img/20201225/ff90539e991f488ca8d0e3d6e77966fa.jpg?x-oss-process=image/format,webp"
      }
    ],
    image: "https://cdn.poizon.com/source-img/origin-img/20201225/4a194f476de947efbe65d19510a52f6c.jpg?x-oss-process=image/resize,m_lfit,w_300/format,webp",
    id: 3,
    type: "shoes",
    clothesSize: ["36","37","39","40","41","42","43","44","45"],
    title: "【新年礼物】Vans Classic Slip-On",
    price: 309.0,
    purchaseNum: Mock.mock('@integer(1000, 500000)'),
  },
  {
    imageArr: [
      {
        id: 1,
        image: "https://cdn.poizon.com/pro-img/origin-img/20210506/11acc0da6b36433089441759a7585a51.jpg?x-oss-process=image/format,webp"
      },
      {
        id: 2,
        image: "https://cdn.poizon.com/pro-img/origin-img/20210507/06fa7da8b36b40f8ae37f6bd24db5f08.jpg?x-oss-process=image/format,webp"
      },
      {
        id: 3,
        image: "https://cdn.poizon.com/source-img/origin-img/20201205/3bd4534f6f89445bb87283fa319cc513.jpg?x-oss-process=image/format,webp"
      },
      {
        id: 4,
        image: "https://cdn.poizon.com/source-img/origin-img/20201205/395c6eae9eaa4e84ac7e01fe1390c249.jpg?x-oss-process=image/format,webp"
      },
      {
        id: 5,
        image: "https://cdn.poizon.com/source-img/origin-img/20201205/3a35d235339a434a951b0f391ddd8814.jpg?x-oss-process=image/format,webp"
      }
    ],
    image: "https://cdn.poizon.com/pro-img/origin-img/20210504/08ba158fea0648fba8ec7a93edf6cef7.jpg?x-oss-process=image/resize,m_lfit,w_300/format,webp",
    id: 4,
    type: "shoes",
    clothesSize: ["36","37","39","40","41","42","43","44","45"],
    title: "【新年礼物】【Jennie 同款】Converse",
    price: 439.0,
    purchaseNum: Mock.mock('@integer(1000, 500000)'),
  },
  {
    imageArr: [
      {
        id: 1,
        image: "https://cdn.poizon.com/pro-img/origin-img/20210701/79eba8225c2b46538b00b5ed79816af8.jpg?x-oss-process=image/format,webp"
      },
      {
        id: 2,
        image: "https://cdn.poizon.com/pro-img/origin-img/20210701/8d682ac66daa415e87b5c1c8901c4100.jpg?x-oss-process=image/format,webp"
      },
      {
        id: 3,
        image: "https://cdn.poizon.com/pro-img/20201018/f40e216e1ae443d584991e593ec5b2ee.jpg?x-oss-process=image/format,webp"
      },
      {
        id: 4,
        image: "https://cdn.poizon.com/pro-img/20201018/2b9244a7eda34c079ae33035d4ae8158.jpg?x-oss-process=image/format,webp"
      },
      {
        id: 5,
        image: "https://cdn.poizon.com/pro-img/20201018/f40e216e1ae443d584991e593ec5b2ee.jpg?x-oss-process=image/format,webp"
      }
    ],
    image: "https://cdn.poizon.com/pro-img/origin-img/20210701/79eba8225c2b46538b00b5ed79816af8.jpg?x-oss-process=image/resize,m_lfit,w_300/format,webp",
    id: 5,
    type: "clothes",
    clothesSize: ["XS","S","M","L","XL","XXL","XXS"],
    title: "【新年情侣款】SSURPLUS x PCMY ",
    price: 129.0,
    purchaseNum: Mock.mock('@integer(1000, 500000)'),
  },
  {
    imageArr: [
      {
        id: 1,
        image: "https://cdn.poizon.com/pro-img/origin-img/20210713/b75acb6dc5c541d2a91d2b913c5e46d4.jpg?x-oss-process=image/format,webp"
      },
      {
        id: 2,
        image: "https://cdn.poizon.com/pro-img/origin-img/20210713/468a478a0d8b4693aff6374e1611b51a.jpg?x-oss-process=image/format,webp"
      },
      {
        id: 3,
        image: "https://cdn.poizon.com/pro-img/origin-img/20210713/87981575078c419aaba3ec1a3e7e0fb8.jpg?x-oss-process=image/format,webp"
      },
      {
        id: 4,
        image: "https://cdn.poizon.com/pro-img/origin-img/20210508/a9413b92e44a4693ab0e58930e7ee5df.jpg?x-oss-process=image/format,webp"
      },
      {
        id: 5,
        image: "https://cdn.poizon.com/pro-img/origin-img/20210508/a9413b92e44a4693ab0e58930e7ee5df.jpg?x-oss-process=image/format,webp"
      }
    ],
    image: "https://cdn.poizon.com/pro-img/origin-img/20210713/b75acb6dc5c541d2a91d2b913c5e46d4.jpg?x-oss-process=image/resize,m_lfit,w_300/format,webp",
    id: 6,
    type: "clothes",
    clothesSize: ["XS","S","M","L","XL","XXL","XXS"],
    title: "【新年礼物】Disney 迪士尼 草莓熊",
    price: 109.0,
    purchaseNum: Mock.mock('@integer(1000, 500000)'),
  },
  {
    imageArr: [
      {
        id: 1,
        image: "https://cdn.poizon.com/pro-img/origin-img/20210524/f5e8348897fb4b86ba6ff180e4e6574d.jpg"
      },
      {
        id: 2,
        image: "https://cdn.poizon.com/pro-img/origin-img/20210524/6e9c1f440aa342c980452e7a82ca361d.jpg"
      },
      {
        id: 3,
        image: "https://cdn.poizon.com/pro-img/origin-img/20210524/3dbb6208ae934fdca69b4936af9d6458.jpg"
      },
      {
        id: 4,
        image: "https://cdn.poizon.com/pro-img/origin-img/20210524/3dbb6208ae934fdca69b4936af9d6458.jpg"
      },
      {
        id: 5,
        image: "https://cdn.poizon.com/pro-img/origin-img/20210524/3dbb6208ae934fdca69b4936af9d6458.jpg"
      }
    ],
    image: "https://cdn.poizon.com/pro-img/origin-img/20210524/1a0a9993cdb0494da84c4e5b0b718f98.jpg?x-oss-process=image/resize,m_lfit,w_300/format,webp",
    id: 7,
    type: "clothes",
    clothesSize: ["XS","S","M","L","XL","XXL","XXS"],
    title: "tokidoki 淘奇多奇 独角兽",
    price: 169.0,
    purchaseNum: Mock.mock('@integer(1000, 500000)'),
  },
  {
    imageArr: [
      {
        id: 1,
        image: "https://cdn.poizon.com/source-img/origin-img/20201225/c2c664c22ee64e608839e73bfd9c5af2.jpg?x-oss-process=image/format,webp"
      },
      {
        id: 2,
        image: "https://cdn.poizon.com/source-img/origin-img/20201225/9dd3e84770a841e3bb4d2059df20bc8e.jpg?x-oss-process=image/format,webp"
      },
      {
        id: 3,
        image: "https://cdn.poizon.com/source-img/origin-img/20201225/20f7fbce7ca84747b3116f733d60fad7.jpg?x-oss-process=image/format,webp"
      },
      {
        id: 4,
        image: "https://cdn.poizon.com/source-img/origin-img/20201225/c2c664c22ee64e608839e73bfd9c5af2.jpg?x-oss-process=image/format,webp"
      },
      {
        id: 5,
        image: "https://cdn.poizon.com/source-img/origin-img/20201225/36c7f5bd2b6a4bdca6b11b4d032e71f1.jpg?x-oss-process=image/format,webp"
      }
    ],
    image: "https://cdn.poizon.com/pro-img/origin-img/20201229/205fe93579974c6fa5659df9c7ed993b.jpg?x-oss-process=image/resize,m_lfit,w_300/format,webp",
    id: 8,
    type: "shoes",
    clothesSize: ["36","37","39","40","41","42","43","44","45"],
    title: "【新年礼物】Vans Sk8 Hi black 黑白",
    price: 329.0,
    purchaseNum: Mock.mock('@integer(1000, 500000)'),
  },
  {
    imageArr: [
      {
        id: 1,
        image: "https://cdn.poizon.com/pro-img/origin-img/20201231/522797d75762429dbd9dbd0500d5e931.jpg?x-oss-process=image/format,webp"
      },
      {
        id: 2,
        image: "https://cdn.poizon.com/pro-img/origin-img/20201231/10cae720a70d45c5b0f44f3c92c2a74a.jpg?x-oss-process=image/format,webp"
      },
      {
        id: 2,
        image: "https://cdn.poizon.com/pro-img/origin-img/20201231/522797d75762429dbd9dbd0500d5e931.jpg?x-oss-process=image/format,webp"
      },
      {
        id: 1,
        image: "https://cdn.poizon.com/pro-img/origin-img/20201231/10cae720a70d45c5b0f44f3c92c2a74a.jpg?x-oss-process=image/format,webp"
      },
      {
        id: 2,
        image: "https://cdn.poizon.com/pro-img/origin-img/20201231/522797d75762429dbd9dbd0500d5e931.jpg?x-oss-process=image/format,webp"
      }
    ],
    image: "https://cdn.poizon.com/pro-img/origin-img/20201231/522797d75762429dbd9dbd0500d5e931.jpg?x-oss-process=image/resize,m_lfit,w_300/format,webp",
    id: 9,
    type: "shoes",
    clothesSize: ["36","37","39","40","41","42","43","44","45"],
    title: "【品牌专供】匹克 态极 拖鞋",
    price: 139.0,
    purchaseNum: Mock.mock('@integer(1000, 500000)'),
  },
  {
    imageArr: [
      {
        id: 1,
        image: "https://cdn.poizon.com/source-img/origin-img/20201225/827c7772697b46a8b92e2cb72102ee84.jpg?x-oss-process=image/format,webp"
      },
      {
        id: 2,
        image: "https://cdn.poizon.com/source-img/origin-img/20201225/1a71301ac71c46a3a82a8502aaf552cc.jpg?x-oss-process=image/format,webp"
      },
      {
        id: 3,
        image: "https://cdn.poizon.com/source-img/origin-img/20201225/07912e32866a411bac749caf1de293c7.jpg?x-oss-process=image/format,webp"
      },
      {
        id: 4,
        image: "https://cdn.poizon.com/source-img/origin-img/20201225/505d009a316343c28d0ad05ce8d28723.jpg?x-oss-process=image/format,webp"
      },
      {
        id: 5,
        image: "https://cdn.poizon.com/pro-img/origin-img/20210624/3fda6bd08a4f4be0954185182f3be8c9.jpg?x-oss-process=image/format,webp"
      }
    ],
    image: "https://cdn.poizon.com/source-img/origin-img/20201225/827c7772697b46a8b92e2cb72102ee84.jpg?x-oss-process=image/resize,m_lfit,w_300/format,webp",
    id: 10,
    type: "shoes",
    clothesSize: ["36","37","39","40","41","42","43","44","45"],
    title: "【新年礼物】Nike Blazer Mid 77",
    price: 419.0,
    purchaseNum: Mock.mock('@integer(1000, 500000)'),
  },
  {
    imageArr: [
      {
        id: 1,
        image: "https://cdn.poizon.com/source-img/origin-img/20201225/fdf51a1e15864fdbb523159dbc334e83.jpg?x-oss-process=image/format,webp"
      },
      {
        id: 2,
        image: "https://cdn.poizon.com/source-img/origin-img/20201225/01e52a61febf4cb28a81c78fe24477c7.jpg?x-oss-process=image/format,webp"
      },
      {
        id: 3,
        image: "https://cdn.poizon.com/source-img/origin-img/20201225/9d2ef3098ffa426693d216ac1479ad66.jpg?x-oss-process=image/format,webp"
      },
      {
        id: 4,
        image: "https://cdn.poizon.com/source-img/origin-img/20201225/4d3cd8e429ca4c30b07593a655e2c315.jpg?x-oss-process=image/format,webp"
      },
      {
        id: 5,
        image: "https://cdn.poizon.com/source-img/origin-img/20201225/715ff8e61e384b2b9f108580a97b1cda.jpg?x-oss-process=image/format,webp"
      }
    ],
    image: "https://cdn.poizon.com/source-img/origin-img/20201225/fdf51a1e15864fdbb523159dbc334e83.jpg?x-oss-process=image/resize,m_lfit,w_300/format,webp",
    id: 11,
    type: "shoes",
    clothesSize: ["36","37","39","40","41","42","43","44","45"],
    title: "【新年礼物】【薇娅推荐】Converse",
    price: 309.0,
    purchaseNum: Mock.mock('@integer(1000, 500000)'),
  }
];


export default {
  shopList: (config) => {
    list = [];
    for (let i = 0; i < COUNT; i++) {
      list.push(
        Mock.mock({
          image: "https://cdn.poizon.com/source-img/origin-img/20201205/b9b4c1ae79704617ae76125f76ad09b7.jpg?x-oss-process=image/format,webp",
          id: i,
          shoesSize: ["36","37","39","40","41","42","43","44","45"],
          clothesSize: ["XS","S","M","L","XL","XXL","XXS"],
          title: "@ctitle(10, 20)",
          price: "@integer(100, 5000)",
          purchaseNum: "@integer(1000, 500000)"
        })
      )
    }

    return {
      code: 200,
      data: {
        total: list.length,
        items: list
      }
    }    
  },
  shops: () => {
    return {
      code: 200,
      data: {
        total: shops.length,
        items: shops
      }
    }
  }
}